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
      return !(!a || "object" !== typeof a || a.kk !== cb);
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
      if (null != a && "object" === typeof a && a.cd === rb) return a;
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
      return a.cd === rb ? a.toJSON() : vb(a);
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
        a.cd === rb && ((c = a.J), (d = Fb(c)), (a = d & 2 ? a : ub(a.constructor, Gb(c, d, !0))));
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
          if (d instanceof xc && d.Qb(a)) {
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
      var b = void 0 === b ? fd : b;
      var c = gd(a),
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
              return function (J) {
                w[A] = J;
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
    gd = function (a) {
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
    Ke = -1 != ea().toLowerCase().indexOf("webkit") && !q("Edge"),
    Le = sa(),
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
        if (Ke) return /WebKit\/(\S+)/.exec(a);
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
    kf = Je || Ke || (!gf && !H && "function" == typeof n.atob),
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
  K.prototype.cd = rb;
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
      return b.Hf().toLowerCase();
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
  sg.prototype.Pb = !0;
  sg.prototype.Nb = function () {
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
  ug.prototype.Pb = !0;
  ug.prototype.Nb = function () {
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
  Ac.prototype.Pb = !0;
  Ac.prototype.Nb = function () {
    return this.g.toString();
  };
  var Bc = {},
    Cc = new Ac("about:invalid#zClosurez", Bc);
  var Ag = {},
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
  var Bg = function (a) {
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
        c && "object" == typeof c && c.Pb && (c = c.Nb());
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
      return a.scrollingElement ? a.scrollingElement : !Ke && $g(a) ? a.documentElement : a.body || a.documentElement;
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
  k.rb = function (a, b, c) {
    return fh(this.g, arguments);
  };
  k.Ve = function (a, b) {
    hh(Wg(a), a, arguments, 1);
  };
  k.We = ih;
  k.sd = jh;
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
    x(this.h, this.g.sd, this.g);
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
        (d.id = "goog-lr-" + gd(d)),
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
  var Lh = {
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
    O = Lh;
  O = Lh;
  var Mh = function (a, b, c, d, e) {
      a = new Date(a, b, c);
      e = e || 0;
      return a.valueOf() + 864e5 * ((((void 0 !== d ? d : 3) - e + 7) % 7) - ((((a.getDay() + 6) % 7) - e + 7) % 7));
    },
    Qh = function (a, b, c) {
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
  Qh.prototype.valueOf = function () {
    return this.g.valueOf();
  };
  var Rh = function (a, b, c, d, e, f, g) {
    this.g =
      "number" === typeof a
        ? new Date(a, b || 0, c || 1, d || 0, e || 0, f || 0, g || 0)
        : new Date(a && a.getTime ? a.getTime() : Date.now());
  };
  G(Rh, Qh);
  k = Rh.prototype;
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
    var a = new Rh(this.g);
    a.ic = this.ic;
    a.jc = this.jc;
    return a;
  };
  var Sh = function (a, b) {
    null != a && this.la.apply(this, arguments);
  };
  k = Sh.prototype;
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
  var Th = function () {},
    Uh = function (a, b) {
      if (!b) return null;
      a = new Rh(2e3);
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
  Th.prototype.format = function (a) {
    var b = new Sh();
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
  Th.L = function () {
    return yh(Th);
  };
  var Vh = function (a) {
    a = a || {};
    this.j = this.s = Uh(Th.L(), a.created) || null;
    this.h = this.i = this.l = this.o = this.g = null;
    this.update(a);
  };
  Vh.prototype.getCreationTime = function () {
    return this.s ? this.s : new Rh();
  };
  var Wh = function (a) {
      return a.j ? a.j : new Rh();
    },
    Xh = function (a, b) {
      a.j = b;
      null == a.s && (a.s = b);
    };
  Vh.prototype.update = function (a) {
    Th.L();
    var b = !1,
      c;
    for (c in a) {
      var d = Uh(0, a[c]);
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
  var Yh = function (a) {
    var b = {},
      c = Th.L();
    b.kind = "notes#timestamps";
    b.created = c.format(a.getCreationTime());
    b.deleted = a.g ? c.format(a.g) : "1970-01-01T00:00:00.000Z";
    b.trashed = a.i ? c.format(a.i) : "1970-01-01T00:00:00.000Z";
    b.updated = c.format(Wh(a));
    b.userEdited = a.h ? c.format(a.h) : "1970-01-01T00:00:00.000Z";
    a.o && (b.shareRequestProcessed = c.format(a.o));
    a.l && (b.recentSharedChangesSeen = c.format(a.l));
    return b;
  };
  var Zh = function (a) {
    this.g = null;
    a && this.update(a);
  };
  Zh.prototype.update = function (a) {
    this.g = a.category;
  };
  var $h = chrome.i18n.getMessage("456512308416555173"),
    ai = chrome.i18n.getMessage("6366376928558090914"),
    bi = chrome.i18n.getMessage("4840513623749850224"),
    ci = chrome.i18n.getMessage("6497197865876438261"),
    di = chrome.i18n.getMessage("8602525917014156029"),
    ei = chrome.i18n.getMessage("4533605085334699862"),
    fi = chrome.i18n.getMessage("3385831848537487538"),
    gi = chrome.i18n.getMessage("5403636185480096151"),
    hi = { BOOKS: $h, FOOD: ai, MOVIES: bi, MUSIC: ci, PLACES: di, QUOTES: ei, TRAVEL: fi, TV: gi };
  var ii = function (a) {
    this.g = this.i = this.h = this.j = this.l = null;
    a && this.update(a);
  };
  ii.prototype.update = function (a) {
    this.l = a.deleted;
    this.o = a.id;
    ji(a.context)
      ? ((a = a.context), this.j ? this.j.update(a) : (this.j = new Ih(a)), (this.g = this.i = this.h = null))
      : ji(a.taskAssist)
      ? ((a = a.taskAssist), this.h ? this.h.update(a) : (this.h = new Jh(a)), (this.g = this.i = this.j = null))
      : ji(a.topicCategory)
      ? ((a = a.topicCategory), this.i ? this.i.update(a) : (this.i = new Zh(a)), (this.g = this.h = this.j = null))
      : ji(a.webLink) && ((a = a.webLink), this.g ? this.g.update(a) : (this.g = new Gh(a)), (this.i = this.h = this.j = null));
  };
  ii.prototype.ha = function () {
    return !this.j && !this.h && !this.i && !this.g;
  };
  var ki = function (a) {
      return (!!a.l && "1970-01-01T00:00:00.000Z" != a.l) || !1;
    },
    ji = function (a) {
      return vd(a) && !hc(a);
    };
  var li = function (a) {
      return a.W && "function" == typeof a.W ? a.W() : Ba(a) || "string" === typeof a ? a.length : cc(a);
    },
    mi = function (a) {
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
    ni = function (a) {
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
    oi = function (a, b) {
      if ("function" == typeof a.every) return a.every(b, void 0);
      if (Ba(a) || "string" === typeof a) return Array.prototype.every.call(a, b, void 0);
      for (var c = ni(a), d = mi(a), e = d.length, f = 0; f < e; f++) if (!b.call(void 0, d[f], c && c[f], a)) return !1;
      return !0;
    };
  var pi = RegExp(
      "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
    ),
    qi = function (a, b) {
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
    ri = function (a, b) {
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
    si = function (a, b, c) {
      if (Array.isArray(b)) for (var d = 0; d < b.length; d++) si(a, String(b[d]), c);
      else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))));
    },
    ti = function (a, b) {
      var c = [];
      for (b = b || 0; b < a.length; b += 2) si(a[b], a[b + 1], c);
      return c.join("&");
    },
    ui = function (a, b) {
      var c = 2 == arguments.length ? ti(arguments[1], 0) : ti(arguments, 1);
      return ri(a, c);
    },
    vi = function (a, b, c) {
      c = null != c ? "=" + encodeURIComponent(String(c)) : "";
      return ri(a, b + c);
    },
    wi = function (a, b, c) {
      for (; 0 <= (b = a.indexOf("format", b)) && b < c; ) {
        var d = a.charCodeAt(b - 1);
        if (38 == d || 63 == d) if (((d = a.charCodeAt(b + 6)), !d || 61 == d || 38 == d || 35 == d)) return b;
        b += 7;
      }
      return -1;
    },
    xi = /#|$/,
    yi = /[?&]($|#)/;
  var zi = function (a) {
    this.h = this.j = this.o = "";
    this.u = null;
    this.l = this.g = "";
    this.s = !1;
    var b;
    a instanceof zi
      ? ((this.s = a.s),
        Jc(this, a.o),
        (this.j = a.j),
        (this.h = a.h),
        Ai(this, a.u),
        (this.g = a.g),
        Kc(this, a.i.clone()),
        (this.l = a.l))
      : a && (b = String(a).match(pi))
      ? ((this.s = !1),
        Jc(this, b[1] || "", !0),
        (this.j = Bi(b[2] || "")),
        (this.h = Bi(b[3] || "", !0)),
        Ai(this, b[4]),
        (this.g = Bi(b[5] || "", !0)),
        Kc(this, b[6] || "", !0),
        (this.l = Bi(b[7] || "")))
      : ((this.s = !1), (this.i = new Ci(null, this.s)));
  };
  zi.prototype.toString = function () {
    var a = [],
      b = this.o;
    b && a.push(Di(b, Ei, !0), ":");
    var c = this.h;
    if (c || "file" == b)
      a.push("//"),
        (b = this.j) && a.push(Di(b, Ei, !0), "@"),
        a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        (c = this.u),
        null != c && a.push(":", String(c));
    if ((c = this.g)) this.h && "/" != c.charAt(0) && a.push("/"), a.push(Di(c, "/" == c.charAt(0) ? Fi : Gi, !0));
    (c = this.i.toString()) && a.push("?", c);
    (c = this.l) && a.push("#", Di(c, Hi));
    return a.join("");
  };
  zi.prototype.resolve = function (a) {
    var b = this.clone(),
      c = !!a.o;
    c ? Jc(b, a.o) : (c = !!a.j);
    c ? (b.j = a.j) : (c = !!a.h);
    c ? (b.h = a.h) : (c = null != a.u);
    var d = a.g;
    if (c) Ai(b, a.u);
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
  zi.prototype.clone = function () {
    return new zi(this);
  };
  var Jc = function (a, b, c) {
      a.o = c ? Bi(b, !0) : b;
      a.o && (a.o = a.o.replace(/:$/, ""));
    },
    Ai = function (a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("F`" + b);
        a.u = b;
      } else a.u = null;
    },
    Kc = function (a, b, c) {
      b instanceof Ci ? ((a.i = b), Ii(a.i, a.s)) : (c || (b = Di(b, Ji)), (a.i = new Ci(b, a.s)));
    },
    Li = function () {
      var a = Ki,
        b = Hg();
      a.i.set("zx", b);
      return a;
    },
    Ic = function (a) {
      return a instanceof zi ? a.clone() : new zi(a);
    },
    Bi = function (a, b) {
      return a ? (b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a)) : "";
    },
    Di = function (a, b, c) {
      return "string" === typeof a ? ((a = encodeURI(a).replace(b, Mi)), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
    },
    Mi = function (a) {
      a = a.charCodeAt(0);
      return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
    },
    Ei = /[#\/\?@]/g,
    Gi = /[#\?:]/g,
    Fi = /[#\?]/g,
    Ji = /[#\?@]/g,
    Hi = /#/g,
    Ci = function (a, b) {
      this.h = this.g = null;
      this.i = a || null;
      this.j = !!b;
    },
    Ni = function (a) {
      a.g ||
        ((a.g = new Map()),
        (a.h = 0),
        a.i &&
          qi(a.i, function (b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
          }));
    };
  k = Ci.prototype;
  k.W = function () {
    Ni(this);
    return this.h;
  };
  k.add = function (a, b) {
    Ni(this);
    this.i = null;
    a = Oi(this, a);
    var c = this.g.get(a);
    c || this.g.set(a, (c = []));
    c.push(b);
    this.h += 1;
    return this;
  };
  k.remove = function (a) {
    Ni(this);
    a = Oi(this, a);
    return this.g.has(a) ? ((this.i = null), (this.h -= this.g.get(a).length), this.g.delete(a)) : !1;
  };
  k.clear = function () {
    this.g = this.i = null;
    this.h = 0;
  };
  k.ha = function () {
    Ni(this);
    return 0 == this.h;
  };
  var Pi = function (a, b) {
    Ni(a);
    b = Oi(a, b);
    return a.g.has(b);
  };
  k = Ci.prototype;
  k.Xa = function (a) {
    var b = this.ja();
    return va(b, a);
  };
  k.forEach = function (a, b) {
    Ni(this);
    this.g.forEach(function (c, d) {
      c.forEach(function (e) {
        a.call(b, e, d, this);
      }, this);
    }, this);
  };
  k.Ea = function () {
    Ni(this);
    for (var a = Array.from(this.g.values()), b = Array.from(this.g.keys()), c = [], d = 0; d < b.length; d++)
      for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c;
  };
  k.ja = function (a) {
    Ni(this);
    var b = [];
    if ("string" === typeof a) Pi(this, a) && (b = b.concat(this.g.get(Oi(this, a))));
    else {
      a = Array.from(this.g.values());
      for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
    }
    return b;
  };
  k.set = function (a, b) {
    Ni(this);
    this.i = null;
    a = Oi(this, a);
    Pi(this, a) && (this.h -= this.g.get(a).length);
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
    var a = new Ci();
    a.i = this.i;
    this.g && ((a.g = new Map(this.g)), (a.h = this.h));
    return a;
  };
  var Oi = function (a, b) {
      b = String(b);
      a.j && (b = b.toLowerCase());
      return b;
    },
    Ii = function (a, b) {
      b &&
        !a.j &&
        (Ni(a),
        (a.i = null),
        a.g.forEach(function (c, d) {
          var e = d.toLowerCase();
          d != e &&
            (this.remove(d), this.remove(e), 0 < c.length && ((this.i = null), this.g.set(Oi(this, e), Aa(c)), (this.h += c.length)));
        }, a));
      a.j = b;
    };
  var Si = function () {
      this.g = {};
      Qi(this, n._notes_flag_initialData || {});
      this.g.n_afoiu && Ri(this);
    },
    Qi = function (a, b) {
      x(hg, function (c) {
        void 0 !== b[c] && (a.g[c] = b[c]);
      });
    },
    Ri = function (a) {
      var b = {};
      new zi(self.location.href).i.forEach(function (c, d) {
        b[d] = c;
      });
      Qi(a, b);
    },
    Ti = function (a, b) {
      a = a.g[b];
      return !!a && "false" !== a;
    },
    Ui = function (a) {
      var b = bd();
      return String(b.g[a] || "");
    },
    Vi = function (a) {
      a = bd().g[a];
      return isNaN(a) ? 0 : Number(a);
    },
    Wi = function (a) {
      a = a.g.n_sit;
      return Array.isArray(a) ? a : "string" === typeof a ? a.split(",") : [];
    },
    Xi = function () {
      var a = bd();
      return Wi(a).filter(function (b) {
        return Ti(a, "n_eau") || 0 != b.lastIndexOf("audio/", 0);
      });
    },
    bd = function () {
      return yh(Si);
    };
  var Yi = function () {
    this.g = {};
    this.h = null;
    this.l = {};
    this.i = {};
    this.j = {};
  };
  Yi.prototype.update = function (a) {
    var b = !1,
      c = kc(this.g);
    Bd(
      a.annotations || [],
      function (d) {
        var e = d.id,
          f = this.g[e];
        ic(c, e);
        f ? ((e = ki(f)), f.update(d), (b = b || e != ki(f))) : ((f = new ii(d)), f.ha() || ((b = !0), (this.g[e] = f)));
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
          ki(d) || (d.j ? (this.h = d) : d.h ? (this.j[e] = d) : d.i ? (this.i[e] = d) : d.g && (this.l[e] = d));
        },
        this
      ));
    return b;
  };
  var Zi = function (a) {
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
  Yi.prototype.remove = function (a) {
    a = a.o || "";
    if (!this.g[a]) return !1;
    var b = Th.L(),
      c = !!this.g[a],
      d = this.g[a];
    b = b.format(new Rh());
    d.l = b;
    ic(this.l, a);
    ic(this.i, a);
    ic(this.j, a);
    this.h && (this.h.o || "") == a && (this.h = null);
    return c;
  };
  var $i = function (a) {
      return !a.h || ki(a.h) ? null : a.h;
    },
    Fc = function (a) {
      return Yb(a.l, function (b) {
        return !ki(b);
      });
    },
    aj = function (a) {
      return Yb(a.i, function (b) {
        return !ki(b);
      });
    },
    bj = function (a) {
      return Yb(a.j, function (b) {
        return !ki(b);
      });
    };
  var cj = function (a) {
    this.J = v(a);
  };
  E(cj, K);
  var dj = function (a) {
    this.J = v(a);
  };
  E(dj, K);
  var ej = function (a) {
    this.g = a.name || "default";
    this.h = a.origin || "none";
  };
  ej.prototype.ka = function () {
    return this.g;
  };
  ej.prototype.update = function (a) {
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
  var fj = function (a) {
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
  var gj = function (a, b) {
    this.type = a;
    this.i = this.target = b;
    this.defaultPrevented = this.j = !1;
  };
  gj.prototype.stopPropagation = function () {
    this.j = !0;
  };
  gj.prototype.g = function () {
    this.defaultPrevented = !0;
  };
  var hj = (function () {
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
  var jj = function (a, b) {
    gj.call(this, a ? a.type : "");
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
      this.o = Le ? a.metaKey : a.ctrlKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType = "string" === typeof a.pointerType ? a.pointerType : ij[a.pointerType] || "";
      this.state = a.state;
      this.timeStamp = a.timeStamp;
      this.h = a;
      a.defaultPrevented && jj.O.g.call(this);
    }
  };
  G(jj, gj);
  var ij = { 2: "touch", 3: "pen", 4: "mouse" };
  jj.prototype.stopPropagation = function () {
    jj.O.stopPropagation.call(this);
    this.h.stopPropagation ? this.h.stopPropagation() : (this.h.cancelBubble = !0);
  };
  jj.prototype.g = function () {
    jj.O.g.call(this);
    var a = this.h;
    a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
  };
  var kj = "closure_listenable_" + ((1e6 * Math.random()) | 0),
    lj = function (a) {
      return !(!a || !a[kj]);
    };
  var mj = 0;
  var nj = function (a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.nc = e;
      this.key = ++mj;
      this.removed = this.fc = !1;
    },
    oj = function (a) {
      a.removed = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.nc = null;
    };
  var pj = function (a) {
    this.src = a;
    this.g = {};
    this.h = 0;
  };
  pj.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || ((a = this.g[f] = []), this.h++);
    var g = qj(a, b, d, e);
    -1 < g ? ((b = a[g]), c || (b.fc = !1)) : ((b = new nj(b, this.src, f, !!d, e)), (b.fc = c), a.push(b));
    return b;
  };
  pj.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.g)) return !1;
    var e = this.g[a];
    b = qj(e, b, c, d);
    return -1 < b ? (oj(e[b]), xa(e, b), 0 == e.length && (delete this.g[a], this.h--), !0) : !1;
  };
  var rj = function (a, b) {
    var c = b.type;
    c in a.g && ya(a.g[c], b) && (oj(b), 0 == a.g[c].length && (delete a.g[c], a.h--));
  };
  pj.prototype.removeAll = function (a) {
    a = a && a.toString();
    var b = 0,
      c;
    for (c in this.g)
      if (!a || c == a) {
        for (var d = this.g[c], e = 0; e < d.length; e++) ++b, oj(d[e]);
        delete this.g[c];
        this.h--;
      }
    return b;
  };
  pj.prototype.Mb = function (a, b, c, d) {
    a = this.g[a.toString()];
    var e = -1;
    a && (e = qj(a, b, c, d));
    return -1 < e ? a[e] : null;
  };
  pj.prototype.hasListener = function (a, b) {
    var c = void 0 !== a,
      d = c ? a.toString() : "",
      e = void 0 !== b;
    return ac(this.g, function (f) {
      for (var g = 0; g < f.length; ++g) if (!((c && f[g].type != d) || (e && f[g].capture != b))) return !0;
      return !1;
    });
  };
  var qj = function (a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.removed && f.listener == b && f.capture == !!c && f.nc == d) return e;
    }
    return -1;
  };
  var sj = "closure_lm_" + ((1e6 * Math.random()) | 0),
    tj = {},
    uj = 0,
    wj = function (a, b, c, d, e) {
      if (d && d.once) return vj(a, b, c, d, e);
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) wj(a, b[f], c, d, e);
        return null;
      }
      c = xj(c);
      return lj(a) ? a.listen(b, c, vd(d) ? !!d.capture : !!d, e) : yj(a, b, c, !1, d, e);
    },
    yj = function (a, b, c, d, e, f) {
      if (!b) throw Error("H");
      var g = vd(e) ? !!e.capture : !!e,
        h = zj(a);
      h || (a[sj] = h = new pj(a));
      c = h.add(b, c, d, g, f);
      if (c.proxy) return c;
      d = Aj();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) hj || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
      else if (a.attachEvent) a.attachEvent(Bj(b.toString()), d);
      else if (a.addListener && a.removeListener) a.addListener(d);
      else throw Error("I");
      uj++;
      return c;
    },
    Aj = function () {
      var a = Cj,
        b = function (c) {
          return a.call(b.src, b.listener, c);
        };
      return b;
    },
    vj = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) vj(a, b[f], c, d, e);
        return null;
      }
      c = xj(c);
      return lj(a) ? a.bd(b, c, vd(d) ? !!d.capture : !!d, e) : yj(a, b, c, !0, d, e);
    },
    Dj = function (a, b, c, d, e) {
      if (Array.isArray(b)) for (var f = 0; f < b.length; f++) Dj(a, b[f], c, d, e);
      else (d = vd(d) ? !!d.capture : !!d), (c = xj(c)), lj(a) ? a.X(b, c, d, e) : a && (a = zj(a)) && (b = a.Mb(b, c, d, e)) && Ej(b);
    },
    Ej = function (a) {
      if ("number" !== typeof a && a && !a.removed) {
        var b = a.src;
        if (lj(b)) rj(b.Ja, a);
        else {
          var c = a.type,
            d = a.proxy;
          b.removeEventListener
            ? b.removeEventListener(c, d, a.capture)
            : b.detachEvent
            ? b.detachEvent(Bj(c), d)
            : b.addListener && b.removeListener && b.removeListener(d);
          uj--;
          (c = zj(b)) ? (rj(c, a), 0 == c.h && ((c.src = null), (b[sj] = null))) : oj(a);
        }
      }
    },
    Bj = function (a) {
      return a in tj ? tj[a] : (tj[a] = "on" + a);
    },
    Cj = function (a, b) {
      if (a.removed) a = !0;
      else {
        b = new jj(b, this);
        var c = a.listener,
          d = a.nc || a.src;
        a.fc && Ej(a);
        a = c.call(d, b);
      }
      return a;
    },
    zj = function (a) {
      a = a[sj];
      return a instanceof pj ? a : null;
    },
    Fj = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0),
    xj = function (a) {
      if ("function" === typeof a) return a;
      a[Fj] ||
        (a[Fj] = function (b) {
          return a.handleEvent(b);
        });
      return a[Fj];
    };
  var Gj = function (a, b) {
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
  Gj.prototype.ka = function () {
    return this.s;
  };
  var Hj = function (a) {
    return 11 == a.h || 10 == a.h;
  };
  var Ij = function (a, b, c) {
    this.dd = a;
    this.h = b.name || null;
    this.g = {};
    for (a = 0; a < c.length; a++) (b = c[a]), (this.g[b.g] = b);
  };
  Ij.prototype.ka = function () {
    return this.h;
  };
  var Jj = function (a) {
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
    return Kj(this, a.g, b);
  };
  k.set = function (a, b) {
    Lj(this, a.g, b);
  };
  k.add = function (a, b) {
    Mj(this, a.g, b);
  };
  k.clear = function (a) {
    Nj(this, a.g);
  };
  k.V = function (a) {
    if (!a || this.constructor != a.constructor) return !1;
    for (var b = Jj(this.getDescriptor()), c = 0; c < b.length; c++) {
      var d = b[c],
        e = d.g;
      if ((null != this.oa[e]) != (null != a.oa[e])) return !1;
      if (null != this.oa[e]) {
        var f = Hj(d),
          g = Oj(this, e);
        e = Oj(a, e);
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
  var Pj = function (a, b) {
    for (var c = Jj(a.getDescriptor()), d = 0; d < c.length; d++) {
      var e = c[d],
        f = e.g;
      if (null != b.oa[f]) {
        a.g && delete a.g[e.g];
        var g = Hj(e);
        if (e.i) {
          e = Oj(b, f) || [];
          for (var h = 0; h < e.length; h++) Mj(a, f, g ? e[h].clone() : e[h]);
        } else (e = Oj(b, f)), g ? ((g = Oj(a, f)) ? Pj(g, e) : Lj(a, f, e.clone())) : Lj(a, f, e);
      }
    }
  };
  P.prototype.clone = function () {
    var a = new this.constructor();
    a != this && ((a.oa = {}), a.g && (a.g = {}), Pj(a, this));
    return a;
  };
  var Oj = function (a, b) {
      a = a.oa[b];
      return null == a ? null : a;
    },
    Kj = function (a, b, c) {
      var d = Oj(a, b);
      return a.h[b].i ? d[c || 0] : d;
    },
    Qj = function (a, b) {
      return a.h[b].i ? (null != a.oa[b] ? a.oa[b].length : 0) : null != a.oa[b] ? 1 : 0;
    },
    Lj = function (a, b, c) {
      a.oa[b] = c;
      a.g && (a.g[b] = c);
    },
    Mj = function (a, b, c) {
      a.oa[b] || (a.oa[b] = []);
      a.oa[b].push(c);
      a.g && delete a.g[b];
    },
    Nj = function (a, b) {
      delete a.oa[b];
      a.g && delete a.g[b];
    },
    Q = function (a, b) {
      var c = [],
        d = b[0],
        e;
      for (e in b) 0 != e && c.push(new Gj(e, b[e]));
      return new Ij(a, d, c);
    };
  var Rj = function () {};
  Rj.prototype.j = function (a, b) {
    Hj(a) && Sj(this, b);
  };
  Rj.prototype.i = function (a, b) {
    if (Hj(a)) return b instanceof P || ((a = new (a.j.prototype.getDescriptor().dd)()), qc(this, a, b), (b = a)), b;
    if (14 == a.h) return "string" === typeof b && Tj.test(b) && ((a = Number(b)), 0 < a) ? a : b;
    if (!a.l) return b;
    a = a.j;
    if (a === String) {
      if ("number" === typeof b) return String(b);
    } else if (a === Number && "string" === typeof b && ("Infinity" === b || "-Infinity" === b || "NaN" === b || Tj.test(b)))
      return Number(b);
    return b;
  };
  var Tj = /^-?[0-9]+$/;
  var Uj = function () {
    this.g = [];
    this.l = { value: 0, length: 0 };
    this.o = { value: Wf, length: 0 };
    this.h = new DataView(new ArrayBuffer(8));
  };
  E(Uj, Rj);
  var Sj = function (a, b) {
    if (null == b) return [];
    a.g = [];
    for (var c = Jj(b.getDescriptor()), d = 0; d < c.length; d++) {
      var e = c[d];
      if (b.has(e))
        if (e.i)
          if (e.o) {
            var f = a,
              g = b,
              h = e;
            e = f.g;
            Vj(f, (h.g << 3) | 2);
            for (var l = e.length, m = 0, p = Qj(g, h.g); m < p; m++) {
              var u = g.get(h, m);
              f.j(h, u, !0);
            }
            g = e.splice(l, e.length - l);
            Vj(f, g.length);
            e.splice.apply(e, [e.length, 0].concat(g));
          } else for (f = 0, g = Qj(b, e.g); f < g; f++) (h = b.get(e, f)), a.j(e, h);
        else a.j(e, b.get(e));
    }
    return a.g;
  };
  Uj.prototype.j = function (a, b, c) {
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
        Vj(this, (a.g << 3) | c);
        c = !0;
      }
      c = !c;
    }
    if (!c)
      switch (a.h) {
        default:
          throw Error("J`" + a.h);
        case 17:
          Vj(this, (b << 1) ^ -(b >>> 31));
          break;
        case 18:
          a = ag(b);
          a = Vf(a, 1).xor(Of(Yf(a, 63)));
          Wj(this, a);
          break;
        case 8:
          Vj(this, b ? 1 : 0);
          break;
        case 5:
          0 < b ? Vj(this, b) : Wj(this, Zf(b));
          break;
        case 3:
        case 4:
          Wj(this, ag(b));
          break;
        case 14:
        case 13:
          Vj(this, b);
          break;
        case 6:
        case 16:
          Xj(this, ag(b), 8);
          break;
        case 1:
          this.h.setFloat64(0, b, !0);
          for (a = 0; 8 > a; a++) this.g.push(this.h.getUint8(a));
          break;
        case 9:
          if (null != b)
            for (a = unescape(encodeURIComponent(b)), Vj(this, a.length), b = 0; b < a.length; b++) this.g.push(a.charCodeAt(b));
          break;
        case 12:
          if (null != b) for (Vj(this, b.length), a = 0; a < b.length; a++) this.g.push(b.charCodeAt(a));
          break;
        case 10:
          b = Sj(new Uj(), b);
          Ca(this.g, b);
          Vj(this, (a.g << 3) | 4);
          break;
        case 11:
          b = Sj(new Uj(), b);
          Vj(this, b.length);
          Ca(this.g, b);
          break;
        case 7:
          Xj(this, Xf(b), 4);
          break;
        case 15:
          Xj(this, Zf(b), 4);
          break;
        case 2:
          for (this.h.setFloat32(0, b, !0), a = 0; 4 > a; a++) this.g.push(this.h.getUint8(a));
      }
  };
  var qc = function (a, b, c) {
    if (null != c) {
      c instanceof ArrayBuffer && (c = new Uint8Array(c));
      for (var d = b.getDescriptor(), e = 0; e < c.length; ) {
        var f = Yj(a, c.subarray(e)),
          g = f.value,
          h = g >> 3;
        g &= 7;
        e += f.length;
        if ((f = d.g[parseInt(h, 10)] || null))
          if (f.o)
            for (h = Yj(a, c.subarray(e)), g = h.value, e += h.length; 0 < g && e < c.length; ) {
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
              l = Zj(h, e).length;
              break;
            case 1:
              l = 8;
              break;
            case 2:
              e = Zj(h, e);
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
  Uj.prototype.i = function (a, b) {
    var c = null,
      d = a.h,
      e = Zj(this, b),
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
        c = new Vb(ak(c.subarray(0, 4), !0), ak(c.subarray(4, 8), !0)).toString();
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
        c = bk(c);
        c = decodeURIComponent(escape(c));
        f = e.length + e.value.g;
        break;
      case 12:
        c = b.subarray(e.length, e.length + e.value.g);
        c = bk(c);
        f = e.length + e.value.g;
        break;
      case 10:
        f = c = new (a.j.prototype.getDescriptor().dd)();
        e = b;
        a = f.getDescriptor();
        for (d = 0; ; ) {
          var g = Yj(this, e),
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
        b = Zj(this, b.subarray(f));
        f += b.length;
        break;
      case 11:
        f = e.length + e.value.g;
        b = b.subarray(e.length, f);
        c = new (a.j.prototype.getDescriptor().dd)();
        qc(this, c, b);
        break;
      case 7:
      case 15:
        c = ak(b.subarray(0, 4), 15 == d);
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
  var Vj = function (a, b) {
      do {
        var c = b & 127;
        b >>>= 7;
        0 < b && (c |= 128);
        a.g.push(c);
      } while (0 < b);
    },
    Wj = function (a, b) {
      var c = Zf(127);
      do {
        var d = b.and(c).g;
        b = Yf(b, 7);
        0 < Rf(b, Wf) && (d |= 128);
        a.g.push(d);
      } while (0 < Rf(b, Wf));
    },
    Zj = function (a, b) {
      a = a.o;
      for (var c = Xf(0), d = 0; d < b.length && ((c = c.or(Vf(Zf(b[d] & 127), 7 * d))), 0 != (b[d] & 128)); d++);
      a.value = c;
      a.length = d + 1;
      return a;
    },
    Yj = function (a, b) {
      a = a.l;
      for (var c = 0, d = 0; d < b.length && ((c |= (b[d] & 127) << (7 * d)), 0 != (b[d] & 128)); d++);
      a.value = c;
      a.length = d + 1;
      return a;
    },
    Xj = function (a, b, c) {
      for (var d = Zf(255), e = 0; e < c; e++) {
        var f = b.and(d).g;
        a.g.push(f);
        b = Yf(b, 8);
      }
    },
    ak = function (a, b) {
      for (var c = 0, d = 0; d < a.length; d++) c |= a[d] << (8 * d);
      b || (c >>>= 0);
      return c;
    },
    bk = function (a) {
      var b = "";
      a = new Uint16Array(a);
      for (var c = 0; c < a.length; c += 65536) b += String.fromCharCode.apply(null, a.subarray(c, c + Math.min(65536, a.length - c)));
      return b;
    };
  var rc = new Uj();
  var ck = { Ii: 0, Ei: 1, Hi: 2, Fi: 3, Gi: 4 },
    dk = function () {
      P.call(this);
    };
  G(dk, P);
  var ek = null,
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
  var kk = null;
  dk.prototype.getDescriptor = function () {
    var a = ek;
    a ||
      (ek = a =
        Q(dk, {
          0: { name: "IntPackedColor", I: "ink.proto.IntPackedColor" },
          1: { name: "argb", m: 13, type: Number },
          2: { name: "premultiplied", m: 8, defaultValue: !1, type: Boolean }
        }));
    return a;
  };
  dk.getDescriptor = dk.prototype.getDescriptor;
  fk.prototype.getDescriptor = function () {
    var a = gk;
    a ||
      (gk = a =
        Q(fk, { 0: { name: "Point", I: "ink.proto.Point" }, 1: { name: "x", m: 2, type: Number }, 2: { name: "y", m: 2, type: Number } }));
    return a;
  };
  fk.getDescriptor = fk.prototype.getDescriptor;
  hk.prototype.getDescriptor = function () {
    var a = ik;
    a ||
      (ik = a =
        Q(hk, {
          0: { name: "Rect", I: "ink.proto.Rect" },
          1: { name: "xlow", m: 2, type: Number },
          2: { name: "xhigh", m: 2, type: Number },
          3: { name: "ylow", m: 2, type: Number },
          4: { name: "yhigh", m: 2, type: Number }
        }));
    return a;
  };
  hk.getDescriptor = hk.prototype.getDescriptor;
  jk.prototype.getDescriptor = function () {
    var a = kk;
    a ||
      (kk = a =
        Q(jk, {
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
  jk.getDescriptor = jk.prototype.getDescriptor;
  var lk = { Zg: 0, Mh: 1, Lh: 2, Jh: 3, Kh: 4, Rg: 5, Qg: 6, Og: 7, Pg: 8, Fj: 9, Ej: 10, Cj: 11, Dj: 12, oj: 13 },
    mk = { Yg: 0, LEFT: 1, Gg: 2, RIGHT: 3, Wh: 4 },
    nk = function () {
      P.call(this);
    };
  G(nk, P);
  var ok = null,
    pk = function () {
      P.call(this);
    };
  G(pk, P);
  var qk = null;
  pk.prototype.ka = function () {
    return Kj(this, 2);
  };
  var rk = function () {
    P.call(this);
  };
  G(rk, P);
  var sk = null;
  rk.prototype.getFont = function () {
    return Kj(this, 3);
  };
  rk.prototype.setFont = function (a) {
    Lj(this, 3, a);
  };
  rk.prototype.clearFont = function () {
    Nj(this, 3);
  };
  var tk = function () {
    P.call(this);
  };
  G(tk, P);
  var uk = null,
    vk = function () {
      P.call(this);
    };
  G(vk, P);
  var wk = null,
    xk = function () {
      P.call(this);
    };
  G(xk, P);
  var yk = null;
  xk.prototype.getFont = function () {
    return Kj(this, 3);
  };
  xk.prototype.setFont = function (a) {
    Lj(this, 3, a);
  };
  xk.prototype.clearFont = function () {
    Nj(this, 3);
  };
  nk.prototype.getDescriptor = function () {
    var a = ok;
    a ||
      (ok = a =
        Q(nk, {
          0: { name: "FontAttributes", I: "ink.proto.text.FontAttributes" },
          1: { name: "family", m: 9, type: String },
          2: { name: "is_italic", m: 8, type: Boolean },
          3: { name: "weight", m: 5, defaultValue: 400, type: Number }
        }));
    return a;
  };
  nk.getDescriptor = nk.prototype.getDescriptor;
  pk.prototype.getDescriptor = function () {
    var a = qk;
    a ||
      (qk = a =
        Q(pk, {
          0: { name: "Font", I: "ink.proto.text.Font" },
          1: { name: "postscript_font", m: 14, defaultValue: 0, type: lk },
          2: { name: "name", m: 9, type: String },
          5: { name: "attributes", m: 11, type: nk },
          3: { name: "asset_id", m: 9, type: String },
          4: { name: "resource_id", m: 13, type: Number }
        }));
    return a;
  };
  pk.getDescriptor = pk.prototype.getDescriptor;
  rk.prototype.getDescriptor = function () {
    var a = sk;
    a ||
      (sk = a =
        Q(rk, {
          0: { name: "Line", I: "ink.proto.text.Line" },
          1: { name: "text", m: 9, type: String },
          2: { name: "origin_fraction", m: 11, type: fk },
          3: { name: "font", m: 11, type: pk }
        }));
    return a;
  };
  rk.getDescriptor = rk.prototype.getDescriptor;
  tk.prototype.getDescriptor = function () {
    var a = uk;
    a || (uk = a = Q(tk, { 0: { name: "Layout", I: "ink.proto.text.Layout" }, 1: { name: "line", M: !0, m: 11, type: rk } }));
    return a;
  };
  tk.getDescriptor = tk.prototype.getDescriptor;
  vk.prototype.getDescriptor = function () {
    var a = wk;
    a ||
      (wk = a =
        Q(vk, {
          0: { name: "DropShadow", I: "ink.proto.text.DropShadow" },
          1: { name: "rgba", m: 13, type: Number },
          2: { name: "radius_fraction", m: 2, type: Number },
          3: { name: "dx_fraction", m: 2, type: Number },
          4: { name: "dy_fraction", m: 2, type: Number }
        }));
    return a;
  };
  vk.getDescriptor = vk.prototype.getDescriptor;
  xk.prototype.getDescriptor = function () {
    var a = yk;
    a ||
      (yk = a =
        Q(xk, {
          0: { name: "Text", I: "ink.proto.text.Text" },
          1: { name: "text", m: 9, type: String },
          3: { name: "font", m: 11, type: pk },
          4: { name: "font_size_fraction", m: 2, type: Number },
          5: { name: "rgba", m: 13, defaultValue: 255, type: Number },
          6: { name: "alignment", m: 14, defaultValue: 0, type: mk },
          7: { name: "shadow", m: 11, type: vk },
          8: { name: "layout", m: 11, type: tk },
          9: { name: "background_color", m: 11, type: dk },
          10: { name: "border_color", m: 11, type: dk },
          11: { name: "border_width_fraction", m: 2, type: Number },
          12: { name: "padding_fraction", m: 2, type: Number }
        }));
    return a;
  };
  xk.getDescriptor = xk.prototype.getDescriptor;
  var zk = { ej: 0, dj: 1, bj: 2, cj: 3 },
    Ak = { ai: 0, bi: 1, ci: 2 },
    Bk = function () {
      P.call(this);
    };
  G(Bk, P);
  var Ck = null,
    Dk = { Lj: 0, dk: 1, POINTS: 2, gk: 3, Wj: 6, Oi: 4, Pi: 5 },
    Ek = function () {
      P.call(this);
    };
  G(Ek, P);
  var Jk = null,
    Kk = function () {
      P.call(this);
    };
  G(Kk, P);
  var Lk = null,
    Mk = function () {
      P.call(this);
    };
  G(Mk, P);
  var Nk = null;
  Mk.prototype.getFont = function () {
    return Kj(this, 1);
  };
  Mk.prototype.setFont = function (a) {
    Lj(this, 1, a);
  };
  Mk.prototype.clearFont = function () {
    Nj(this, 1);
  };
  var Ok = function () {
    P.call(this);
  };
  G(Ok, P);
  var Pk = null,
    Qk = function () {
      P.call(this);
    };
  G(Qk, P);
  var Rk = null,
    Sk = { UNKNOWN: 0, Ch: 1, kj: 2, Ri: 3, Bj: 4 },
    Tk = function () {
      P.call(this);
    };
  G(Tk, P);
  var Uk = null,
    Vk = { Mj: 0, tf: 1, vf: 2 },
    Wk = function () {
      P.call(this);
    };
  G(Wk, P);
  var Xk = null,
    Yk = function () {
      P.call(this);
    };
  G(Yk, P);
  var Zk = null,
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
    dl = { Kj: 0, Cg: 1, Sh: 2, li: 3, yg: 4, Gj: 15, yh: 6, Nh: 8, Mi: 12, Hg: 13, Si: 14 },
    el = { Li: 0, Ji: 1, Ki: 2 },
    fl = function () {
      P.call(this);
    };
  G(fl, P);
  var gl = null,
    hl = function () {
      P.call(this);
    };
  G(hl, P);
  var il = null,
    jl = {
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
  Bk.prototype.getDescriptor = function () {
    var a = Ck;
    a ||
      (Ck = a =
        Q(Bk, {
          0: { name: "ToolSize", I: "ink.proto.ToolSize" },
          7: { name: "stroke_width", m: 2, type: Number },
          8: { name: "units", m: 14, defaultValue: 1, type: Dk }
        }));
    return a;
  };
  Bk.getDescriptor = Bk.prototype.getDescriptor;
  Ek.prototype.getDescriptor = function () {
    var a = Jk;
    a ||
      (Jk = a =
        Q(Ek, {
          0: { name: "PusherToolParams", I: "ink.proto.PusherToolParams" },
          3: { name: "manipulate_photos", m: 8, type: Boolean },
          1: { name: "manipulate_stickers", m: 8, type: Boolean },
          2: { name: "manipulate_text", m: 8, type: Boolean }
        }));
    return a;
  };
  Ek.getDescriptor = Ek.prototype.getDescriptor;
  Kk.prototype.getDescriptor = function () {
    var a = Lk;
    a ||
      (Lk = a =
        Q(Kk, {
          0: { name: "ShapeToolParams", I: "ink.proto.ShapeToolParams" },
          1: { name: "shape_kind", m: 14, defaultValue: 0, type: zk },
          2: { name: "fill_color", m: 11, type: dk },
          3: { name: "start_linecap", m: 14, defaultValue: 0, type: Ak },
          4: { name: "end_linecap", m: 14, defaultValue: 0, type: Ak }
        }));
    return a;
  };
  Kk.getDescriptor = Kk.prototype.getDescriptor;
  Mk.prototype.getDescriptor = function () {
    var a = Nk;
    a ||
      (Nk = a =
        Q(Mk, {
          0: { name: "TextToolParams", I: "ink.proto.TextToolParams" },
          1: { name: "font", m: 11, type: pk },
          2: { name: "alignment", m: 14, defaultValue: 0, type: mk },
          3: { name: "shadow", m: 11, type: Ok },
          4: { name: "background_color", m: 11, type: dk },
          5: { name: "border_color", m: 11, type: dk },
          6: { name: "edit_existing_text", m: 8, defaultValue: !0, type: Boolean },
          7: { name: "initial_width_on_screen", m: 2, type: Number },
          8: { name: "initial_height_on_screen", m: 2, type: Number }
        }));
    return a;
  };
  Mk.getDescriptor = Mk.prototype.getDescriptor;
  Ok.prototype.getDescriptor = function () {
    var a = Pk;
    a ||
      (Pk = a =
        Q(Ok, {
          0: { name: "TextToolShadowParams", I: "ink.proto.TextToolShadowParams" },
          1: { name: "color", m: 11, type: dk },
          2: { name: "radius_fraction_of_font_size", m: 2, type: Number },
          3: { name: "dx_fraction_of_font_size", m: 2, type: Number },
          4: { name: "dy_fraction_of_font_size", m: 2, type: Number }
        }));
    return a;
  };
  Ok.getDescriptor = Ok.prototype.getDescriptor;
  Qk.prototype.getDescriptor = function () {
    var a = Rk;
    a ||
      (Rk = a =
        Q(Qk, {
          0: { name: "TipShapeParams", I: "ink.proto.TipShapeParams" },
          1: { name: "size_ratio", m: 2, defaultValue: 1, type: Number },
          2: { name: "radius_behavior", m: 14, defaultValue: 1, type: Sk },
          3: { name: "max_radius_speed_cm_per_sec", m: 2, defaultValue: 200, type: Number },
          4: { name: "min_radius_speed_cm_per_sec", m: 2, defaultValue: 0, type: Number },
          5: { name: "size_drag_factor", m: 2, defaultValue: 0.85, type: Number }
        }));
    return a;
  };
  Qk.getDescriptor = Qk.prototype.getDescriptor;
  Tk.prototype.getDescriptor = function () {
    var a = Uk;
    a ||
      (Uk = a =
        Q(Tk, {
          0: { name: "CustomLineParams", I: "ink.proto.CustomLineParams" },
          3: { name: "tip_shape_params", m: 11, type: Qk },
          4: { name: "expand_small_strokes", m: 8, defaultValue: !1, type: Boolean },
          5: { name: "tip_type", m: 14, defaultValue: 1, type: Vk }
        }));
    return a;
  };
  Tk.getDescriptor = Tk.prototype.getDescriptor;
  Wk.prototype.getDescriptor = function () {
    var a = Xk;
    a ||
      (Xk = a =
        Q(Wk, {
          0: { name: "TextPusherToolParams", I: "ink.proto.TextPusherToolParams" },
          1: { name: "pusher_params", m: 11, type: Ek },
          2: { name: "text_params", m: 11, type: Mk }
        }));
    return a;
  };
  Wk.getDescriptor = Wk.prototype.getDescriptor;
  Yk.prototype.getDescriptor = function () {
    var a = Zk;
    a ||
      (Zk = a =
        Q(Yk, { 0: { name: "ShapeQueryToolParams", I: "ink.proto.ShapeQueryToolParams" }, 1: { name: "shape_params", m: 11, type: Kk } }));
    return a;
  };
  Yk.getDescriptor = Yk.prototype.getDescriptor;
  $k.prototype.getDescriptor = function () {
    var a = al;
    a ||
      (al = a =
        Q($k, {
          0: { name: "LineEffectParams", I: "ink.proto.LineEffectParams" },
          1: { name: "texture_uri", m: 9, type: String },
          2: { name: "winding_texture_period", m: 11, type: Bk },
          3: { name: "u_animation_duration_seconds", m: 2, defaultValue: 0, type: Number },
          4: { name: "tiled_texture_scale", m: 2, defaultValue: 100, type: Number }
        }));
    return a;
  };
  $k.getDescriptor = $k.prototype.getDescriptor;
  bl.prototype.getDescriptor = function () {
    var a = cl;
    a ||
      (cl = a =
        Q(bl, {
          0: { name: "LineToolParams", I: "ink.proto.LineToolParams" },
          1: { name: "brush_type", m: 14, defaultValue: 0, type: dl },
          2: { name: "custom_line_params", m: 11, type: Tk },
          3: { name: "line_effect_params", m: 11, type: $k },
          4: { name: "self_overlap", m: 14, defaultValue: 1, type: el }
        }));
    return a;
  };
  bl.getDescriptor = bl.prototype.getDescriptor;
  fl.prototype.getDescriptor = function () {
    var a = gl;
    a ||
      (gl = a =
        Q(fl, {
          0: { name: "MagicEraserToolParams", I: "ink.proto.MagicEraserToolParams" },
          1: { name: "erase_text", m: 8, defaultValue: !0, type: Boolean },
          2: { name: "erase_invisible_elements", m: 8, defaultValue: !1, type: Boolean }
        }));
    return a;
  };
  fl.getDescriptor = fl.prototype.getDescriptor;
  hl.prototype.getDescriptor = function () {
    var a = il;
    a ||
      (il = a =
        Q(hl, {
          0: { name: "ToolParams", I: "ink.proto.ToolParams" },
          1: { name: "tool", m: 14, defaultValue: 0, type: jl },
          2: { name: "rgba", m: 13, type: Number },
          3: { name: "tool_size", m: 11, type: Bk },
          4: { name: "pusher_tool_params", m: 11, type: Ek },
          8: { name: "shape_tool_params", m: 11, type: Kk },
          7: { name: "text_tool_params", m: 11, type: Mk },
          5: { name: "line_tool_params", m: 11, type: bl },
          21: { name: "text_pusher_tool_params", m: 11, type: Wk },
          10: { name: "shape_query_tool_params", m: 11, type: Yk },
          9: { name: "magic_eraser_tool_params", m: 11, type: fl }
        }));
    return a;
  };
  hl.getDescriptor = hl.prototype.getDescriptor;
  var kl = { NONE: 0, Tj: 1, Uj: 7, jj: 2, xh: 3, Vj: 4, qg: 5, pg: 6 },
    ll = function () {
      P.call(this);
    };
  G(ll, P);
  var ml = null,
    nl = function () {
      P.call(this);
    };
  G(nl, P);
  var ol = null,
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
    zl = { UNKNOWN: 0, Yh: 1 },
    Al = function () {
      P.call(this);
    };
  G(Al, P);
  var Bl = null,
    Cl = function () {
      P.call(this);
    };
  G(Cl, P);
  var Dl = null;
  Cl.prototype.C = function () {
    return Kj(this, 2);
  };
  var El = function () {
    P.call(this);
  };
  G(El, P);
  var Fl = null,
    Gl = function () {
      P.call(this);
    };
  G(Gl, P);
  var Hl = null,
    Il = function () {
      P.call(this);
    };
  G(Il, P);
  var Jl = null,
    Kl = { UNKNOWN: 0, ui: 1, di: 2, Ug: 3, Ui: 4, Ng: 5 },
    Ll = { Bg: 1, tf: 2, vf: 3 };
  ll.prototype.getDescriptor = function () {
    var a = ml;
    a ||
      (ml = a =
        Q(ll, {
          0: { name: "BackgroundImageInfo", I: "ink.proto.BackgroundImageInfo" },
          1: { name: "uri", m: 9, type: String },
          3: { name: "bounds", m: 11, type: hk }
        }));
    return a;
  };
  ll.getDescriptor = ll.prototype.getDescriptor;
  nl.prototype.getDescriptor = function () {
    var a = ol;
    a ||
      (ol = a =
        Q(nl, {
          0: { name: "GridInfo", I: "ink.proto.GridInfo" },
          1: { name: "uri", m: 9, type: String },
          2: { name: "rgba_multiplier", m: 13, defaultValue: 4294967295, type: Number },
          3: { name: "size_world", m: 2, defaultValue: 50, type: Number },
          4: { name: "origin", m: 11, type: fk }
        }));
    return a;
  };
  nl.getDescriptor = nl.prototype.getDescriptor;
  pl.prototype.getDescriptor = function () {
    var a = ql;
    a ||
      (ql = a =
        Q(pl, {
          0: { name: "LOD", I: "ink.proto.LOD" },
          1: { name: "max_coverage", m: 2, type: Number },
          2: { name: "ctm_blob", m: 12, type: String },
          4: { name: "ctm_scale_factor", m: 2, type: Number },
          3: { name: "draco_blob", m: 12, type: String }
        }));
    return a;
  };
  pl.getDescriptor = pl.prototype.getDescriptor;
  rl.prototype.getDescriptor = function () {
    var a = sl;
    a ||
      (sl = a =
        Q(rl, {
          0: { name: "Stroke", I: "ink.proto.Stroke" },
          1: { name: "shader_type", m: 14, defaultValue: 0, type: kl },
          3: { name: "lod", M: !0, m: 11, type: pl },
          4: { name: "abgr", m: 13, type: Number },
          5: { name: "point_x", M: !0, fd: !0, m: 17, type: Number },
          6: { name: "point_y", M: !0, fd: !0, m: 17, type: Number },
          7: { name: "point_t_ms", M: !0, fd: !0, m: 13, type: Number },
          8: { name: "deprecated_transform", m: 11, type: jk },
          9: { name: "start_time_ms", m: 4, type: String },
          10: { name: "u_animation_duration_seconds", m: 2, type: Number }
        }));
    return a;
  };
  rl.getDescriptor = rl.prototype.getDescriptor;
  tl.prototype.getDescriptor = function () {
    var a = ul;
    a ||
      (ul = a =
        Q(tl, {
          0: { name: "UncompressedStroke", I: "ink.proto.UncompressedStroke" },
          1: { name: "outline", M: !0, m: 11, type: fk },
          2: { name: "rgba", m: 13, type: Number }
        }));
    return a;
  };
  tl.getDescriptor = tl.prototype.getDescriptor;
  vl.prototype.getDescriptor = function () {
    var a = wl;
    a ||
      (wl = a =
        Q(vl, {
          0: { name: "Element", I: "ink.proto.Element" },
          4: { name: "deprecated_uuid", m: 9, type: String },
          5: { name: "minimum_serializer_version", m: 13, type: Number },
          6: { name: "stroke", m: 11, type: rl },
          9: { name: "path", m: 11, type: Il },
          10: { name: "attributes", m: 11, type: xl },
          11: { name: "text", m: 11, type: xk },
          12: { name: "composite_image_info", m: 11, type: El },
          13: { name: "tool_params", m: 11, type: hl },
          14: { name: "shape_spec", m: 11, type: Gl }
        }));
    return a;
  };
  vl.getDescriptor = vl.prototype.getDescriptor;
  xl.prototype.getDescriptor = function () {
    var a = yl;
    a ||
      (yl = a =
        Q(xl, {
          0: { name: "ElementAttributes", I: "ink.proto.ElementAttributes" },
          1: { name: "selectable", m: 8, defaultValue: !0, type: Boolean },
          2: { name: "magic_erasable", m: 8, defaultValue: !0, type: Boolean },
          3: { name: "is_sticker", m: 8, defaultValue: !1, type: Boolean },
          10: { name: "is_photo", m: 8, defaultValue: !1, type: Boolean },
          4: { name: "is_text", m: 8, defaultValue: !1, type: Boolean },
          5: { name: "is_group", m: 8, defaultValue: !1, type: Boolean },
          6: { name: "is_zoomable", m: 8, defaultValue: !1, type: Boolean },
          7: { name: "group_type", m: 14, defaultValue: 0, type: zl },
          9: { name: "is_split_text", m: 8, defaultValue: !1, type: Boolean }
        }));
    return a;
  };
  xl.getDescriptor = xl.prototype.getDescriptor;
  Al.prototype.getDescriptor = function () {
    var a = Bl;
    a ||
      (Bl = a =
        Q(Al, {
          0: { name: "UncompressedElement", I: "ink.proto.UncompressedElement" },
          1: { name: "uncompressed_stroke", m: 11, type: tl }
        }));
    return a;
  };
  Al.getDescriptor = Al.prototype.getDescriptor;
  Cl.prototype.getDescriptor = function () {
    var a = Dl;
    a ||
      (Dl = a =
        Q(Cl, {
          0: { name: "ElementBundle", I: "ink.proto.ElementBundle" },
          1: { name: "uuid", m: 9, type: String },
          2: { name: "element", m: 11, type: vl },
          3: { name: "transform", m: 11, type: jk },
          4: { name: "uncompressed_element", m: 11, type: Al },
          5: { name: "group_uuid", m: 9, type: String },
          6: { name: "visibility", m: 8, defaultValue: !0, type: Boolean },
          7: { name: "opacity", m: 5, defaultValue: 255, type: Number }
        }));
    return a;
  };
  Cl.getDescriptor = Cl.prototype.getDescriptor;
  El.prototype.getDescriptor = function () {
    var a = Fl;
    a ||
      (Fl = a =
        Q(El, {
          0: { name: "CompositeImageInfo", I: "ink.proto.CompositeImageInfo" },
          1: { name: "composite_image_uri", m: 9, type: String },
          2: { name: "object_rect", m: 11, type: hk }
        }));
    return a;
  };
  El.getDescriptor = El.prototype.getDescriptor;
  Gl.prototype.getDescriptor = function () {
    var a = Hl;
    a ||
      (Hl = a =
        Q(Gl, {
          0: { name: "ShapeSpec", I: "ink.proto.ShapeSpec" },
          1: { name: "kind", m: 14, defaultValue: 0, type: zk },
          2: { name: "control_point", M: !0, m: 11, type: fk },
          6: { name: "start_linecap", m: 14, defaultValue: 0, type: Ak },
          7: { name: "end_linecap", m: 14, defaultValue: 0, type: Ak },
          3: { name: "fill_color", m: 11, type: dk },
          4: { name: "stroke_color", m: 11, type: dk },
          5: { name: "stroke_width_world", m: 2, type: Number }
        }));
    return a;
  };
  Gl.getDescriptor = Gl.prototype.getDescriptor;
  Il.prototype.getDescriptor = function () {
    var a = Jl;
    a ||
      (Jl = a =
        Q(Il, {
          0: { name: "Path", I: "ink.proto.Path" },
          1: { name: "segment_types", M: !0, m: 14, defaultValue: 0, type: Kl },
          2: { name: "segment_counts", M: !0, m: 13, type: Number },
          3: { name: "segment_args", M: !0, m: 1, type: Number },
          4: { name: "radius", m: 1, defaultValue: 1, type: Number },
          5: { name: "rgba", m: 13, type: Number },
          6: { name: "tip_type", m: 14, defaultValue: 2, type: Ll },
          7: { name: "fill_rgba", m: 13, type: Number }
        }));
    return a;
  };
  Il.getDescriptor = Il.prototype.getDescriptor;
  var Ml = { ng: 1, Wg: 2 },
    Nl = function () {
      P.call(this);
    };
  G(Nl, P);
  var Ol = null,
    Pl = function () {
      P.call(this);
    };
  G(Pl, P);
  var Ql = null;
  Pl.prototype.setHeight = function (a) {
    Lj(this, 3, a);
  };
  var Rl = function () {
    P.call(this);
  };
  G(Rl, P);
  var Sl = null,
    Tl = function () {
      P.call(this);
    };
  G(Tl, P);
  var Ul = null,
    Vl = function () {
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
  var vm = null;
  um.prototype.C = function (a) {
    return Kj(this, 2, a);
  };
  var wm = function () {
    P.call(this);
  };
  G(wm, P);
  var xm = null;
  wm.prototype.C = function (a) {
    return Kj(this, 2, a);
  };
  Nl.prototype.getDescriptor = function () {
    var a = Ol;
    a ||
      (Ol = a =
        Q(Nl, {
          0: { name: "PageProperties", I: "ink.proto.PageProperties" },
          1: { name: "background_color", m: 11, type: dk },
          2: { name: "background_image", m: 11, type: ll },
          3: { name: "bounds", m: 11, type: hk },
          5: { name: "grid_info", m: 11, type: nl }
        }));
    return a;
  };
  Nl.getDescriptor = Nl.prototype.getDescriptor;
  Pl.prototype.getDescriptor = function () {
    var a = Ql;
    a ||
      (Ql = a =
        Q(Pl, {
          0: { name: "PerPageProperties", I: "ink.proto.PerPageProperties" },
          1: { name: "uuid", m: 9, type: String },
          2: { name: "width", m: 2, type: Number },
          3: { name: "height", m: 2, type: Number },
          4: { name: "orientation", m: 14, defaultValue: 0, type: ck }
        }));
    return a;
  };
  Pl.getDescriptor = Pl.prototype.getDescriptor;
  Rl.prototype.getDescriptor = function () {
    var a = Sl;
    a ||
      (Sl = a =
        Q(Rl, {
          0: { name: "AddAction", I: "ink.proto.AddAction" },
          1: { name: "uuid", m: 9, type: String },
          2: { name: "below_element_with_uuid", m: 9, type: String }
        }));
    return a;
  };
  Rl.getDescriptor = Rl.prototype.getDescriptor;
  Tl.prototype.getDescriptor = function () {
    var a = Ul;
    a ||
      (Ul = a =
        Q(Tl, {
          0: { name: "AddMultipleAction", I: "ink.proto.AddMultipleAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "below_element_with_uuid", m: 9, type: String }
        }));
    return a;
  };
  Tl.getDescriptor = Tl.prototype.getDescriptor;
  Vl.prototype.getDescriptor = function () {
    var a = Wl;
    a ||
      (Wl = a =
        Q(Vl, {
          0: { name: "RemoveAction", I: "ink.proto.RemoveAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "was_below_uuid", M: !0, m: 9, type: String }
        }));
    return a;
  };
  Vl.getDescriptor = Vl.prototype.getDescriptor;
  Xl.prototype.getDescriptor = function () {
    var a = Yl;
    a ||
      (Yl = a =
        Q(Xl, {
          0: { name: "ReplaceAction", I: "ink.proto.ReplaceAction" },
          1: { name: "removed_uuid", M: !0, m: 9, type: String },
          2: { name: "removed_was_below_uuid", M: !0, m: 9, type: String },
          3: { name: "added_uuid", M: !0, m: 9, type: String },
          4: { name: "added_was_below_uuid", M: !0, m: 9, type: String }
        }));
    return a;
  };
  Xl.getDescriptor = Xl.prototype.getDescriptor;
  Zl.prototype.getDescriptor = function () {
    var a = $l;
    a || ($l = a = Q(Zl, { 0: { name: "ClearAction", I: "ink.proto.ClearAction" }, 1: { name: "uuid", M: !0, m: 9, type: String } }));
    return a;
  };
  Zl.getDescriptor = Zl.prototype.getDescriptor;
  am.prototype.getDescriptor = function () {
    var a = bm;
    a ||
      (bm = a =
        Q(am, {
          0: { name: "SetTransformAction", I: "ink.proto.SetTransformAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "from_transform", M: !0, m: 11, type: jk },
          3: { name: "to_transform", M: !0, m: 11, type: jk }
        }));
    return a;
  };
  am.getDescriptor = am.prototype.getDescriptor;
  cm.prototype.getDescriptor = function () {
    var a = dm;
    a ||
      (dm = a =
        Q(cm, {
          0: { name: "SetBackgroundColorAction", I: "ink.proto.SetBackgroundColorAction" },
          1: { name: "old_background_color", m: 11, type: dk },
          2: { name: "new_background_color", m: 11, type: dk }
        }));
    return a;
  };
  cm.getDescriptor = cm.prototype.getDescriptor;
  em.prototype.getDescriptor = function () {
    var a = fm;
    a ||
      (fm = a =
        Q(em, {
          0: { name: "SetPageBoundsAction", I: "ink.proto.SetPageBoundsAction" },
          1: { name: "old_bounds", m: 11, type: hk },
          2: { name: "new_bounds", m: 11, type: hk }
        }));
    return a;
  };
  em.getDescriptor = em.prototype.getDescriptor;
  gm.prototype.getDescriptor = function () {
    var a = hm;
    a ||
      (hm = a =
        Q(gm, {
          0: { name: "SetVisibilityAction", I: "ink.proto.SetVisibilityAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "to_visibility", M: !0, m: 8, type: Boolean },
          3: { name: "from_visibility", M: !0, m: 8, type: Boolean }
        }));
    return a;
  };
  gm.getDescriptor = gm.prototype.getDescriptor;
  im.prototype.getDescriptor = function () {
    var a = jm;
    a ||
      (jm = a =
        Q(im, {
          0: { name: "SetColorAction", I: "ink.proto.SetColorAction" },
          1: { name: "uuid", m: 9, type: String },
          2: { name: "old_color", m: 11, type: dk },
          3: { name: "new_color", m: 11, type: dk }
        }));
    return a;
  };
  im.getDescriptor = im.prototype.getDescriptor;
  km.prototype.getDescriptor = function () {
    var a = lm;
    a ||
      (lm = a =
        Q(km, {
          0: { name: "SetOpacityAction", I: "ink.proto.SetOpacityAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "from_opacity", M: !0, m: 5, type: Number },
          3: { name: "to_opacity", M: !0, m: 5, type: Number }
        }));
    return a;
  };
  km.getDescriptor = km.prototype.getDescriptor;
  mm.prototype.getDescriptor = function () {
    var a = nm;
    a ||
      (nm = a =
        Q(mm, {
          0: { name: "ChangeZOrderAction", I: "ink.proto.ChangeZOrderAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "from_below_uuid", M: !0, m: 9, type: String },
          3: { name: "to_below_uuid", M: !0, m: 9, type: String }
        }));
    return a;
  };
  mm.getDescriptor = mm.prototype.getDescriptor;
  om.prototype.getDescriptor = function () {
    var a = pm;
    a ||
      (pm = a =
        Q(om, {
          0: { name: "UpdateTextAction", I: "ink.proto.UpdateTextAction" },
          1: { name: "uuid", m: 9, type: String },
          2: { name: "old_text", m: 11, type: xk },
          3: { name: "old_transform", m: 11, type: jk },
          4: { name: "new_text", m: 11, type: xk },
          5: { name: "new_transform", m: 11, type: jk }
        }));
    return a;
  };
  om.getDescriptor = om.prototype.getDescriptor;
  qm.prototype.getDescriptor = function () {
    var a = rm;
    a ||
      (rm = a =
        Q(qm, {
          0: { name: "SetParentsAction", I: "ink.proto.SetParentsAction" },
          1: { name: "uuid", M: !0, m: 9, type: String },
          2: { name: "old_parent_uuid", M: !0, m: 9, type: String },
          3: { name: "old_transform", M: !0, m: 11, type: jk },
          4: { name: "new_parent_uuid", M: !0, m: 9, type: String },
          5: { name: "new_transform", M: !0, m: 11, type: jk }
        }));
    return a;
  };
  qm.getDescriptor = qm.prototype.getDescriptor;
  sm.prototype.getDescriptor = function () {
    var a = tm;
    a ||
      (tm = a =
        Q(sm, {
          0: { name: "StorageAction", I: "ink.proto.StorageAction" },
          1: { name: "add_action", m: 11, type: Rl },
          2: { name: "remove_action", m: 11, type: Vl },
          3: { name: "clear_action", m: 11, type: Zl },
          5: { name: "set_transform_action", m: 11, type: am },
          6: { name: "set_page_bounds_action", m: 11, type: em },
          7: { name: "add_multiple_action", m: 11, type: Tl },
          8: { name: "set_visibility_action", m: 11, type: gm },
          16: { name: "set_color_action", m: 11, type: im },
          9: { name: "set_opacity_action", m: 11, type: km },
          10: { name: "change_z_order_action", m: 11, type: mm },
          12: { name: "replace_action", m: 11, type: Xl },
          13: { name: "set_background_color_action", m: 11, type: cm },
          14: { name: "update_text_action", m: 11, type: om },
          15: { name: "set_parents_action", m: 11, type: qm }
        }));
    return a;
  };
  sm.getDescriptor = sm.prototype.getDescriptor;
  um.prototype.getDescriptor = function () {
    var a = vm;
    a ||
      (vm = a =
        Q(um, {
          0: { name: "Snapshot", I: "ink.proto.Snapshot" },
          1: { name: "page_properties", m: 11, type: Nl },
          8: { name: "per_page_properties", M: !0, m: 11, type: Pl },
          2: { name: "element", M: !0, m: 11, type: Cl },
          3: { name: "dead_element", M: !0, m: 11, type: Cl },
          4: { name: "undo_action", M: !0, m: 11, type: sm },
          5: { name: "redo_action", M: !0, m: 11, type: sm },
          6: { name: "element_state_index", M: !0, m: 14, defaultValue: 1, type: Ml },
          7: { name: "fingerprint", m: 4, type: String },
          9: { name: "active_layer_uuid", m: 9, type: String }
        }));
    return a;
  };
  um.getDescriptor = um.prototype.getDescriptor;
  wm.prototype.getDescriptor = function () {
    var a = xm;
    a ||
      (xm = a =
        Q(wm, {
          0: { name: "MutationPacket", I: "ink.proto.MutationPacket" },
          1: { name: "mutation", M: !0, m: 11, type: sm },
          2: { name: "element", M: !0, m: 11, type: Cl },
          3: { name: "page_properties", m: 11, type: Nl }
        }));
    return a;
  };
  wm.getDescriptor = wm.prototype.getDescriptor;
  var ym = function (a) {
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
    zm = function (a) {
      var b = {};
      b.blob_id = "local-" + new Date().getTime();
      b.state = "l";
      b.type = "IMAGE";
      a && (b.mimetype = a);
      return new ym(b);
    },
    Am = function (a) {
      return 0 == a.lastIndexOf("image", 0) ? "IMAGE" : 0 == a.lastIndexOf("audio", 0) ? "AUDIO" : "unknown";
    };
  ym.prototype.getType = function () {
    return this.g;
  };
  var Bm = function (a) {
      "unknown" == a.g && (a.g = Am(a.o));
      return "IMAGE" == a.g;
    },
    Cm = function (a) {
      return "DRAWING" == a.g;
    },
    Dm = function (a) {
      return "IMAGE" == a.g && (!!a.j || !!a.v);
    };
  ym.prototype.isError = function () {
    return "luf" == this.h;
  };
  ym.prototype.setHeight = function (a) {
    this.B = a;
  };
  var Em = function (a, b) {
    b != a.h && (!a.A || ("s" != b && "luc" != b) || (a.A = ""), (a.h = b));
  };
  ym.prototype.update = function (a) {
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
                "string" === typeof f && (f = sc(new um(), f));
                this.u = f;
                Kj(this.u, 7) && (this.F = Kj(this.u, 7));
                break;
              case "encodedPendingMutations":
                f = d.encodedPendingMutations;
                "string" === typeof f && (f = sc(new wm(), f));
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
                this.i ? (e = this.i.update(d.snapshotData) || e) : ((this.i = new ym(d.snapshotData)), (e = !0));
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
    this.g || (this.g = Am(this.o));
    return a || b;
  };
  var Fm = function (a, b) {
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
      if (Cm(a) || (Dm(a) && a.j)) {
        var d = {};
        d.drawingId = a.j;
        a.i && (d.snapshotData = Fm(a.i));
        d.snapshotFingerprint = a.ba;
        d.inkHash = a.N;
        c.drawingInfo = d;
        b &&
          (a.v && (c.localDrawingThumbnailData = a.v),
          a.u && (d.encodedSnapshotProto = Ja(Sj(rc, a.u))),
          a.R && (d.encodedPendingMutations = Ja(Sj(rc, a.R))),
          (d.localSnapshotFingerprint = a.F),
          (d.serverSnapshotFingerprint = a.S),
          (d.snapshotProtoFprint = a.Z));
      }
      a.l && (c.local_data = a.l);
      "s" == a.h || (a.i && "s" == a.i.h) || (c.filename = a.A);
      return c;
    },
    Gm = function (a) {
      var b = {};
      b = ((b.mimetype = a.o), (b.type = a.g), b);
      if (Cm(a) || (Dm(a) && a.j)) {
        var c = {};
        b.drawingInfo = ((c.drawingId = a.j), c);
      }
      return b;
    };
  var Hm = function () {
    gj.call(this, "l");
  };
  E(Hm, gj);
  var R = function () {
    M.call(this);
    this.Ja = new pj(this);
    this.Cf = this;
    this.Tb = null;
  };
  G(R, M);
  R.prototype[kj] = !0;
  k = R.prototype;
  k.sa = function (a) {
    this.Tb = a;
  };
  k.addEventListener = function (a, b, c, d) {
    wj(this, a, b, c, d);
  };
  k.removeEventListener = function (a, b, c, d) {
    Dj(this, a, b, c, d);
  };
  k.dispatchEvent = function (a) {
    var b,
      c = this.Tb;
    if (c) for (b = []; c; c = c.Tb) b.push(c);
    c = this.Cf;
    var d = a.type || a;
    if ("string" === typeof a) a = new gj(a, c);
    else if (a instanceof gj) a.target = a.target || c;
    else {
      var e = a;
      a = new gj(d, c);
      mc(a, e);
    }
    e = !0;
    if (b)
      for (var f = b.length - 1; !a.j && 0 <= f; f--) {
        var g = (a.i = b[f]);
        e = Im(g, d, !0, a) && e;
      }
    a.j || ((g = a.i = c), (e = Im(g, d, !0, a) && e), a.j || (e = Im(g, d, !1, a) && e));
    if (b) for (f = 0; !a.j && f < b.length; f++) (g = a.i = b[f]), (e = Im(g, d, !1, a) && e);
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
  var Im = function (a, b, c, d) {
    b = a.Ja.g[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.removed && g.capture == c) {
        var h = g.listener,
          l = g.nc || g.src;
        g.fc && rj(a.Ja, g);
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
  var Jm = function (a) {
    R.call(this);
    this.Wa = null;
    this.Oa = [];
    this.update(a);
  };
  E(Jm, R);
  Jm.prototype.V = function (a) {
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
  Jm.prototype.update = function (a) {
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
  var Km = function (a) {
    a = void 0 === a ? {} : a;
    R.call(this);
    this.h = "EXPANDED";
    this.g = !1;
    this.update(a);
  };
  E(Km, R);
  Km.prototype.update = function (a) {
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
  var Lm = function (a) {
    var b = {};
    b = ((b.graveyardState = a.h), b);
    b.dirty = a.g;
    return b;
  };
  var Mm = function (a, b) {
    b = void 0 === b ? null : b;
    gj.call(this, "t");
    this.parentId = b;
  };
  E(Mm, gj);
  var Nm = function (a) {
    Rh.call(this, 0);
    this.j = !1;
    this.i = null;
    this.h = void 0;
    a && this.update(a);
  };
  E(Nm, Rh);
  Nm.prototype.update = function (a) {
    var b = a.time;
    b && ((a.hour = b.hour), (a.minute = b.minute), (a.second = b.second));
    (b = a.period) && !a.hour && (a.hour = Om[b.toUpperCase()] || Om.MORNING);
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
  var Pm = function (a) {
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
  Nm.prototype.clone = function () {
    return new Nm(Pm(this));
  };
  var Qm = {},
    Om = ((Qm.MORNING = 9), (Qm.AFTERNOON = 13), (Qm.EVENING = 17), (Qm.NIGHT = 20), Qm);
  var Rm = function () {};
  Rm.prototype.ka = function () {
    return this.h;
  };
  Rm.prototype.getType = function () {
    return this.g;
  };
  Rm.prototype.update = function (a) {
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
      ? ((a = a.locationType.toUpperCase()), fc(Sm, a) && ((c = c || this.g != a), (this.g = a)))
      : this.g && ((this.g = void 0), (c = !0));
    return c;
  };
  var Sm = { Oh: "HOME", ck: "WORK" };
  var Tm = function () {},
    Vm = function (a) {
      if ("number" == typeof a) {
        var b = new Tm();
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
        a = Um(a);
        b.j = [c, c];
        b.g = { lj: a, Qd: a };
        b.h = [];
        return b;
      }
      b = new Tm();
      b.i = a.id;
      b.l = -a.std_offset;
      b.j = a.names;
      b.g = a.names_ext;
      b.h = a.transitions;
      return b;
    },
    Um = function (a) {
      var b = ["GMT"];
      b.push(0 >= a ? "+" : "-");
      a = Math.abs(a);
      b.push(L(Math.floor(a / 60) % 100, 2), ":", L(a % 60, 2));
      return b.join("");
    },
    Wm = function (a, b) {
      b = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36e5;
      for (var c = 0; c < a.h.length && b >= a.h[c]; ) c += 2;
      return 0 == c ? 0 : a.h[c - 1];
    },
    Xm = function (a, b) {
      a = a.l - Wm(a, b);
      return -1440 === a ? 0 : a;
    };
  var Zm = function () {
      this.h = [];
      this.g = O;
      Ym(this, 1);
    },
    $m = [
      /^'(?:[^']|'')*('|$)/,
      /^(?:G+|y+|Y+|M+|k+|S+|E+|a+|b+|B+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/,
      /^[^'GyYMkSEabBhKHcLQdmsvVwzZ]+/
    ],
    an = function (a) {
      return a.getHours ? a.getHours() : 0;
    };
  Zm.prototype.format = function (a, b) {
    if (!a) throw Error("M");
    var c = b ? 6e4 * (a.getTimezoneOffset() - Xm(b, a)) : 0,
      d = c ? new Date(a.getTime() + c) : a,
      e = d;
    b &&
      d.getTimezoneOffset() != a.getTimezoneOffset() &&
      ((d = new Date(d.getTime() + 6e4 * (d.getTimezoneOffset() - a.getTimezoneOffset()))),
      (e = new Date(a.getTime() + (c + (0 < c ? -864e5 : 864e5)))));
    c = [];
    for (var f = 0; f < this.h.length; ++f) {
      var g = this.h[f].text;
      1 == this.h[f].type ? c.push(bn(this, g, a, d, e, b)) : c.push(g);
    }
    return c.join("");
  };
  var Ym = function (a, b) {
      if (4 > b) var c = a.g.Fb[b];
      else if (8 > b) c = a.g.Mc[b - 4];
      else if (12 > b) (c = a.g.md[b - 8]), (c = c.replace("{1}", a.g.Fb[b - 8])), (c = c.replace("{0}", a.g.Mc[b - 8]));
      else if (12 === b) c = a.g.Fb[0].replace(/[^EMd]*yy*[^EMd]*/, "");
      else if (13 === b) c = a.g.Fb[2].replace(/[^EMd]*yy*[^EMd]*/, "");
      else {
        Ym(a, 10);
        return;
      }
      b = c;
      for (cn && (b = b.replace(/\u200f/g, "")); b; ) {
        c = b;
        for (var d = 0; d < $m.length; ++d) {
          var e = b.match($m[d]);
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
    dn = function (a, b) {
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
    cn = !1,
    en = function (a) {
      if (!(a.getHours && a.getSeconds && a.getMinutes)) throw Error("N");
    },
    fn = function (a, b) {
      en(b);
      b = an(b);
      return a.g.ld[12 <= b && 24 > b ? 1 : 0];
    },
    bn = function (a, b, c, d, e, f) {
      var g = b.length;
      switch (b.charAt(0)) {
        case "G":
          return (c = 0 < d.getFullYear() ? 1 : 0), 4 <= g ? a.g.od[c] : a.g.pd[c];
        case "y":
          return (c = d.getFullYear()), 0 > c && (c = -c), 2 == g && (c %= 100), dn(a, L(c, g));
        case "Y":
          return (
            (c = new Date(Mh(d.getFullYear(), d.getMonth(), d.getDate(), a.g.Xb, a.g.Wb)).getFullYear()),
            0 > c && (c = -c),
            2 == g && (c %= 100),
            dn(a, L(c, g))
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
              g = dn(a, L(c + 1, g));
          }
          return g;
        case "k":
          return en(e), dn(a, L(an(e) || 24, g));
        case "S":
          return dn(a, (e.getMilliseconds() / 1e3).toFixed(Math.min(3, g)).slice(2) + (3 < g ? L(0, g - 3) : ""));
        case "E":
          return (c = d.getDay()), 4 <= g ? a.g.Sd[c] : a.g.Id[c];
        case "a":
          return fn(a, e);
        case "b":
          return fn(a, e);
        case "B":
          return fn(a, e);
        case "h":
          return en(e), dn(a, L(an(e) % 12 || 12, g));
        case "K":
          return en(e), dn(a, L(an(e) % 12, g));
        case "H":
          return en(e), dn(a, L(an(e), g));
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
              g = dn(a, L(c, 1));
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
              g = dn(a, L(c + 1, g));
          }
          return g;
        case "Q":
          return (c = Math.floor(d.getMonth() / 3)), 4 > g ? a.g.Hd[c] : a.g.Fd[c];
        case "d":
          return dn(a, L(d.getDate(), g));
        case "m":
          return en(e), dn(a, L(e.getMinutes ? e.getMinutes() : 0, g));
        case "s":
          return en(e), dn(a, L(e.getSeconds(), g));
        case "v":
          return (g = f || Vm(c.getTimezoneOffset())), g.i;
        case "V":
          return (
            (a = f || Vm(c.getTimezoneOffset())),
            2 >= g
              ? a.i
              : 0 < Wm(a, c)
              ? void 0 !== a.g.Re
                ? a.g.Re
                : a.g.DST_GENERIC_LOCATION
              : void 0 !== a.g.Qd
              ? a.g.Qd
              : a.g.STD_GENERIC_LOCATION
          );
        case "w":
          return (
            (c = Mh(e.getFullYear(), e.getMonth(), e.getDate(), a.g.Xb, a.g.Wb)),
            dn(a, L(Math.floor(Math.round((c - new Date(new Date(c).getFullYear(), 0, 1).valueOf()) / 864e5) / 7) + 1, g))
          );
        case "z":
          return (a = f || Vm(c.getTimezoneOffset())), 4 > g ? a.j[0 < Wm(a, c) ? 2 : 0] : a.j[0 < Wm(a, c) ? 3 : 1];
        case "Z":
          return (
            (b = f || Vm(c.getTimezoneOffset())),
            4 > g
              ? ((g = -Xm(b, c)),
                (a = [0 > g ? "-" : "+"]),
                (g = Math.abs(g)),
                a.push(L(Math.floor(g / 60) % 100, 2), L(g % 60, 2)),
                (g = a.join("")))
              : (g = dn(a, Um(Xm(b, c)))),
            g
          );
        default:
          return "";
      }
    };
  var gn = {
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
    hn = gn;
  hn = gn;
  chrome.i18n.getMessage("7669846901402551021");
  chrome.i18n.getMessage("6510131849363684615");
  chrome.i18n.getMessage("6252259197986158120");
  chrome.i18n.getMessage("2973306402585941108");
  chrome.i18n.getMessage("4343848624651344174");
  chrome.i18n.getMessage("6579707685908557993");
  chrome.i18n.getMessage("3190546672187601036");
  chrome.i18n.getMessage("1122146167985532789");
  var jn = function (a) {
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
  E(jn, R);
  jn.prototype.getTime = function () {
    return this.i;
  };
  jn.prototype.update = function (a) {
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
      ? ((this.l = this.l || new Nm()), (c = this.l.update(c)))
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
        c.endDateTime ? ((this.g = this.g || new Nm()), (d = this.g.update(c.endDateTime) || d)) : this.g && ((this.g = null), (d = !0));
      }
    else (d = !!this.g || 0 != this.j), (this.g = null), (this.j = 0);
    b = d || b;
    c = a;
    c.dailyPattern
      ? ((c = c.dailyPattern),
        (e = c.dayPeriod || null),
        (d = this.o != e),
        (this.o = e),
        c.timeOfDay ? ((this.i = this.i || new Nm()), (d = this.i.update(c.timeOfDay) || d)) : this.i && ((this.i = null), (d = !0)))
      : ((d = !!this.o || !!this.i), (this.i = this.o = null));
    b = d || b;
    b = kn(this, a) || b;
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
  var kn = function (a, b) {
    if ("WEEKLY" != a.h || !b.weeklyPattern || !b.weeklyPattern.weekDay) return (b = !!a.A.length), wa(a.A), b;
    b = b.weeklyPattern.weekDay.map(function (d) {
      return tc(d);
    });
    var c = !Ga(b, a.A);
    a.A = Aa(b);
    return c;
  };
  var ln = function (a) {
    R.call(this);
    this.h = "INITIAL";
    this.u = this.v = null;
    this.o = "";
    this.g = this.j = this.i = null;
    this.l = !1;
    this.s = !0;
    a && this.update(a);
  };
  E(ln, R);
  ln.prototype.getState = function () {
    return this.h;
  };
  ln.prototype.update = function (a) {
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
    a.dueDate ? ((this.i = this.i || new Nm()), (b = this.i.update(a.dueDate) || b)) : this.i && ((this.i = null), (b = !0));
    a.location ? ((this.j = this.j || new Rm()), (b = this.j.update(a.location) || b)) : this.j && ((this.j = null), (b = !0));
    a.recurrenceInfo
      ? ((this.g = this.g || new jn()), (b = this.g.update(a.recurrenceInfo) || b), this.g.sa(this))
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
  var mn = function (a) {
    var b = {};
    b.title = a.o || "";
    !a.i || (b.dueDate = Pm(a.i));
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
        f.startDateTime = Pm(d.l);
        e.recurrenceStart = f;
      }
      d.j
        ? ((f = {}), (f.numOccurrences = d.j), (e.recurrenceEnd = f))
        : d.g && ((f = {}), (f.endDateTime = Pm(d.g)), (e.recurrenceEnd = f));
      if (d.i || d.o) {
        f = {};
        if (d.i) {
          var g = Pm(d.i);
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
  var nn = function (a) {
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
    a && a.last_update_timestamp ? (this.i = Uh(Th.L(), a.last_update_timestamp)) : this.i && (nc(this.i), (this.i = null));
    b && this.dispatchEvent("k");
  };
  E(nn, R);
  nn.prototype.toString = function () {
    return this.g || R.prototype.toString.call(this);
  };
  nn.prototype.update = function (a) {
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
  nn.L = function () {
    return yh(nn);
  };
  var on = chrome.i18n.getMessage("911698676339750373");
  var pn = function (a, b) {
    R.call(this);
    this.h = a || "";
    this.g = b || "WR";
  };
  E(pn, R);
  pn.prototype.getType = function () {
    return this.g;
  };
  var U = function (a) {
    M.call(this);
    this.j = a;
    this.i = {};
  };
  G(U, M);
  var qn = [];
  U.prototype.listen = function (a, b, c, d) {
    return rn(this, a, b, c, d);
  };
  var sn = function (a, b, c, d, e, f) {
      return rn(a, b, c, d, e, f);
    },
    rn = function (a, b, c, d, e, f) {
      Array.isArray(c) || (c && (qn[0] = c.toString()), (c = qn));
      for (var g = 0; g < c.length; g++) {
        var h = wj(b, c[g], d || a.handleEvent, e || !1, f || a.j || a);
        if (!h) break;
        a.i[h.key] = h;
      }
      return a;
    };
  U.prototype.bd = function (a, b, c, d) {
    return tn(this, a, b, c, d);
  };
  var tn = function (a, b, c, d, e, f) {
    if (Array.isArray(c)) for (var g = 0; g < c.length; g++) tn(a, b, c[g], d, e, f);
    else {
      b = vj(b, c, d || a.handleEvent, e, f || a.j || a);
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
        (c = xj(c)),
        (d = !!d),
        (b = lj(a) ? a.Mb(b, c, d, e) : a ? ((a = zj(a)) ? a.Mb(b, c, d, e) : null) : null),
        b && (Ej(b), delete this.i[b.key]);
    return this;
  };
  U.prototype.removeAll = function () {
    x(
      this.i,
      function (a, b) {
        this.i.hasOwnProperty(b) && Ej(a);
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
  var un = function (a) {
    R.call(this);
    this.h = null;
    this.o = "O";
    this.l = "UNKNOWN_SHAREE_TYPE";
    this.i = "UNKNOWN_AUXILIARY_TYPE";
    this.s = this.j = this.u = this.v = this.g = null;
    this.A = new U(this);
    this.update(a);
    this.A.listen(nn.L(), "k", this.B);
  };
  E(un, R);
  un.prototype.getType = function () {
    return this.l;
  };
  un.prototype.update = function (a) {
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
  un.prototype.clone = function () {
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
    c = new un(f);
    a && (c.g = new pn(b, a));
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
  un.prototype.B = function () {
    var a = nn.L();
    a.g && (a.g || "") === this.h && ((this.i = "FAMILY"), this.dispatchEvent("z"));
  };
  var vn = chrome.i18n.getMessage("3249966726137025950");
  var wn = function () {
    gj.call(this, "E");
  };
  E(wn, gj);
  var xn = {
      Eh: "GLOBAL_CHECKED_LIST_ITEMS_POLICY",
      Fh: "GLOBAL_NEW_LIST_ITEM_PLACEMENT",
      gj: "SHARING_ENABLED",
      ak: "WEB_EMBEDS_ENABLED",
      Yj: "WEB_APP_THEME"
    },
    yn = { nd: "DEFAULT", Gh: "GRAVEYARD" },
    zn = { BOTTOM: "BOTTOM", TOP: "TOP" },
    An = new Pg(),
    Bn = function (a) {
      a = void 0 === a ? {} : a;
      R.call(this);
      this.h = this.i = this.g = null;
      this.o = this.l = !0;
      this.j = null;
      this.update(a);
    };
  E(Bn, R);
  Bn.prototype.update = function (a) {
    var b = !1,
      c;
    for (c in a) {
      var d = a[c];
      switch (c) {
        case "type":
          if (!fc(xn, d)) continue;
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
          (d = Number(An.get(d))), (b = b || this.j != d), (this.j = d);
      }
    }
    return b;
  };
  Bn.prototype.Qb = function () {
    var a = this.getType();
    return a &&
      fc(xn, a) &&
      ("GLOBAL_NEW_LIST_ITEM_PLACEMENT" !== a || (this.i && fc(zn, this.i))) &&
      ("GLOBAL_CHECKED_LIST_ITEMS_POLICY" !== a || (this.h && fc(yn, this.h))) &&
      ("WEB_APP_THEME" !== a || (null != this.j && fc(ge, this.j)))
      ? !0
      : !1;
  };
  Bn.prototype.getType = function () {
    return this.g;
  };
  Bn.prototype.V = function (a) {
    return a
      ? a === this
        ? !0
        : a.getType() === this.getType() && a.i == this.i && a.h == this.h && a.l === this.l && a.o === this.o && a.j === this.j
      : !1;
  };
  var Cn = function (a) {
    R.call(this);
    this.i = null;
    this.g = a.mainId;
    this.h = [];
    this.o = 0;
    this.j = new Vh(a.timestamps);
    this.l = null;
    this.update(a);
  };
  E(Cn, R);
  var Dn = function (a, b) {
    return ke(a.ka(), b.ka());
  };
  Cn.prototype.toString = function () {
    return this.i || R.prototype.toString.call(this);
  };
  Cn.prototype.ka = function () {
    return this.i || "";
  };
  var Fn = function (a, b) {
      a.i = b;
      En(a, new Rh());
    },
    Gn = function (a) {
      return !!a.j.g && !!a.j.g.valueOf();
    },
    En = function (a, b) {
      b = b || new Rh();
      a.j.h = b;
      Xh(a.j, b);
      a.dispatchEvent("k");
    };
  Cn.prototype.update = function (a) {
    var b = !1,
      c;
    for (c in a)
      switch (c) {
        case "lastMerged":
          var d = Uh(Th.L(), a[c]);
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
  var Hn = {
      Ac: "contextualCoachmarksAcked",
      qd: "familyChangeDateTime",
      rd: "isDirty",
      Bd: "linkedToAssistant",
      Kc: "settings",
      Jd: "singleSettings",
      Rd: "timestamps",
      Lc: (function (a, b) {
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
      this.j = new Vh();
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
        case Hn.Kc:
          var d = a[c];
          d = t(d ? d[Hn.Jd] : []);
          for (var e = d.next(); !e.done; e = d.next()) {
            var f = new Bn(e.value);
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
        case Hn.Rd:
          d = new Vh(a[c]);
          b = (b = b || d.getCreationTime() != this.j.getCreationTime()) || Wh(d) != Wh(this.j);
          this.j = d;
          break;
        case Hn.rd:
          b = this.h != a[c] || b;
          this.h = a[c];
          break;
        case Hn.Ac:
          b = In(this, a) || b;
          break;
        case Hn.qd:
          d = Uh(Th.L(), a[c]);
          b = this.o ? b || !d.V(this.o) : !0;
          this.o = d;
          break;
        case Hn.Bd:
          this.v = a[c];
      }
    (b = Jn(this, a[Hn.Lc] || []) || b) && this.dispatchEvent("F");
    return b;
  };
  var Jn = function (a, b) {
      var c = !1,
        d = kc(a.g);
      b = t(b);
      for (var e = b.next(); !e.done; e = b.next()) {
        var f = e.value;
        e = f.mainId;
        var g = a.g[e];
        g ? (c = g.update(f) || c) : ((c = !0), (f = new Cn(f)), (a.g[e] = f), a.s.listen(f, "k", a.u));
        ic(d, e);
      }
      c = c || !hc(d);
      x(d, function (h, l) {
        ic(a.g, l);
      });
      return c;
    },
    Kn = function (a) {
      var b = void 0 === b ? !1 : b;
      var c = {};
      c[Hn.Kc] = {};
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
            if (!An.i) {
              var l = new An.constructor();
              l.g = An.h;
              l.h = An.g;
              l.i = An;
              An.i = l;
            }
            h.webAppThemeValue = An.i.get(String(f.j));
          }
          g.call(d, h);
        }
      });
      c[Hn.Kc][Hn.Jd] = d;
      c[Hn.Rd] = Yh(a.j);
      c[Hn.Ac] = Array.from(a.l);
      c[Hn.Lc] = dc(a.g).map(function (f) {
        var g = {};
        g.mainId = f.g;
        g.mergedIds = f.h;
        g.name = f.i;
        g.revision = f.o;
        g.timestamps = Yh(f.j);
        g.lastMerged = f.l ? Th.L().format(f.l) : "1970-01-01T00:00:00.000Z";
        return g;
      });
      if (a.o) {
        var e = Th.L();
        c[Hn.qd] = e.format(a.o);
      }
      null !== a.v && (c[Hn.Bd] = a.v);
      b && (c[Hn.rd] = a.h);
      return c;
    };
  vc.prototype.u = function () {
    Xh(this.j, new Rh());
    this.h = !0;
    this.dispatchEvent("F");
  };
  var In = function (a, b) {
      var c = !1,
        d = new Set(a.l);
      b = t(b[Hn.Ac] || []);
      for (var e = b.next(); !e.done; e = b.next()) (e = e.value), a.l.has(e) ? d.delete(e) : (a.l.add(e), (c = !0));
      c = c || !hc(d);
      d.forEach(function (f) {
        return a.l.delete(f);
      });
      return c;
    },
    Ln = function (a) {
      return Yb(a.g, function (b) {
        return !Gn(b);
      });
    },
    Mn = function (a) {
      var b = [];
      x(a.g, function (c) {
        if (!Gn(c)) {
          var d = Dn || Ha;
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
    Nn = function (a, b) {
      return (a = gc(a.g, function (c) {
        return c.ka().toLowerCase() == b.toLowerCase();
      })) && !Gn(a)
        ? a
        : null;
    },
    On = function (a, b) {
      var c = a.g[b];
      if (c && !Gn(c)) return c;
      for (var d in a.g) if (((c = a.g[d]), !Gn(c) && c.h.includes(b))) return c;
      return null;
    };
  vc.L = function () {
    return yh(vc);
  };
  var xc = function (a) {
      this.Qb = a;
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
  var Pn = function (a) {
    this.ea = void 0;
    this.ia = {};
    if (a) {
      var b = ni(a);
      a = mi(a);
      for (var c = 0; c < b.length; c++) this.set(b[c], a[c]);
    }
  };
  Pn.prototype.set = function (a, b) {
    Qn(this, a, b, !1);
  };
  Pn.prototype.add = function (a, b) {
    Qn(this, a, b, !0);
  };
  var Qn = function (a, b, c, d) {
    for (var e = 0; e < b.length; e++) {
      var f = b.charAt(e);
      a.ia[f] || (a.ia[f] = new Pn());
      a = a.ia[f];
    }
    if (d && void 0 !== a.ea) throw Error("P`" + b);
    a.ea = c;
  };
  Pn.prototype.get = function (a) {
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
  Pn.prototype.ja = function () {
    var a = [];
    Rn(this, a);
    return a;
  };
  var Rn = function (a, b) {
    void 0 !== a.ea && b.push(a.ea);
    for (var c in a.ia) Rn(a.ia[c], b);
  };
  Pn.prototype.Ea = function (a) {
    var b = [];
    if (a) {
      for (var c = this, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        if (!c.ia[e]) return [];
        c = c.ia[e];
      }
      Sn(c, a, b);
    } else Sn(this, "", b);
    return b;
  };
  var Sn = function (a, b, c) {
    void 0 !== a.ea && c.push(b);
    for (var d in a.ia) Sn(a.ia[d], b + d, c);
  };
  k = Pn.prototype;
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
    return new Pn(this);
  };
  k.W = function () {
    return li(this.ja());
  };
  k.ha = function () {
    return void 0 === this.ea && hc(this.ia);
  };
  var z = function (a) {
    R.call(this);
    this.g = a.id;
    if (!this.g) throw Error("R");
    this.U = this.j = null;
    this.u = new Vh(a.timestamps);
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
    this.Ha = this.R = this.Sb = this.tc = null;
    this.Bb = !1;
    this.v = {};
    this.B = new Yi();
    this.ba = [];
    this.xb = null;
    this.Ia = new Pn();
    this.jb = this.ta = this.S = null;
    this.gb = !1;
    this.Va = void 0;
    this.kb = {};
    this.Rb = !1;
    this.update(a);
  };
  E(z, R);
  var Tn = function () {
    return new Date().getTime() + "." + Math.round(2147483648 * Math.random());
  };
  z.prototype.getType = function () {
    return this.H;
  };
  z.prototype.getCreationTime = function () {
    return this.u.getCreationTime();
  };
  var Un = function (a) {
    a.i = !0;
    a.notify();
  };
  z.prototype.notify = function () {
    this.dispatchEvent("k");
  };
  var Wn = function (a) {
      return Pc(a) || Vn(a) || "QUILL" === a.H;
    },
    Pc = function (a) {
      return "NOTE" === a.H;
    },
    Vn = function (a) {
      return "LIST" === a.H;
    },
    Xn = function (a) {
      return "LIST_ITEM" === a.H;
    },
    Yn = function (a) {
      return "BLOB" === a.H;
    },
    bo = function (a, b, c) {
      a.G = b;
      b > Zn || b < $n ? a.dispatchEvent(new Mm(3, a.U)) : (a.Ca && Wn(a)) || c || (a.j && (ao(a.j, !0), Un(a.j)), Un(a));
    };
  z.prototype.ha = function (a) {
    a = void 0 === a ? !1 : a;
    return (
      !(
        (this.D && this.D.trim()) ||
        this.h ||
        co(this) ||
        (this.A && this.A.trim()) ||
        (!a && this.o && "DELETED" != this.o.h) ||
        !hc(Fc(this.B))
      ) &&
      bc(this.s, function (b) {
        return 0 != b.l || (!Yn(b) && b.ha(a));
      })
    );
  };
  var eo = function (a, b) {
      a.Ca = b;
      x(a.s, function (c) {
        return eo(c, b);
      });
    },
    ao = function (a, b) {
      b = void 0 === b ? !1 : b;
      var c = new Rh();
      Xh(a.u, c);
      b && (Wn(a) ? (a.u.h = c) : a.j && ((a.j.u.h = c), Xh(a.j.u, c), Un(a.j)));
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
          d.Da ? (e = d.Da.update(h) || e) : ((d.Da = new ej(h)), (e = !0));
          break;
        case "lastModifierEmail":
          d.Sb = h.toLowerCase();
          break;
        case "nodeSettings":
          "LIST" === a.type || "NOTE" === a.type ? (d.F ? (e = d.F.update(h) || e) : (fo(d, new Km(h)), (e = !0))) : d.F && fo(d, null);
          break;
        case "reminder":
          if (d.o) (h = d.o.update(h)), (e = e || h), h && d.dispatchEvent("u");
          else {
            h = new ln(h);
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
          c && d.D != h ? go(d, a, b, c) : (d.D = h);
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
          c && l ? go(d, a, b, c) : (d.j && l && ho(d.j, d.g, h, d.A), (d.A = h));
          break;
        case "blob":
          d.h ? (e = d.h.update(h) || e) : ((d.h = new ym(h)), (e = !0));
          break;
        case "sourceBlobId":
          d.jb = h;
      }
    });
    e = io(this, a) || e;
    e = jo(this, a) || e;
    e = ko(this, a.labelIds || []) || e;
    var g = a.annotationsGroup;
    g && (e = this.B.update(g) || e);
    e && this.notify();
    return f;
  };
  var io = function (a, b) {
      var c = !1;
      if (Ti(bd(), "n_eil")) {
        var d = b.superListItemId || null;
        b = b.superListItemServerId || null;
        c = (c = d != a.S) || b != a.ta;
        a.S = d;
        a.ta = b;
      }
      return c;
    },
    go = function (a, b, c, d) {
      d = void 0 === d ? null : d;
      var e = null;
      d && d.h === a.g && (e = d.g);
      b = Xn(a) ? b.text : b.title;
      d = Xn(a) ? a.A : a.D;
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
          ? a.dispatchEvent(new wn(d, e, c, b, a.ca))
          : ((e = (c = Xn(a)) ? a.A : a.D),
            (d = b != e),
            c ? (a.A = b) : (a.D = b),
            null != b && d && a.j && ho(a.j, a.g, b, e),
            d && lo(a),
            b != b ? ((a.wa = !0), Un(a)) : d && a.notify());
        a.ca = b;
      }
    },
    mo = function (a, b) {
      b.baseVersion && (a.Ua = b.baseVersion);
    },
    no = function (a) {
      var b = {};
      b.id = a.g;
      b.kind = "notes#node";
      b.parentId = a.U || "root";
      b.timestamps = Yh(a.u);
      b.type = a.H;
      b.trashState = a.ua;
      a.R && (b.serverId = a.R);
      a.Ha && (b.parentServerId = a.Ha);
      b.deletionState = a.l;
      if (1 === a.l) return Yn(a) && a.h && (b.blob = Gm(a.h)), b;
      b.sortValue = a.G;
      a.Ua && (b.baseVersion = a.Ua);
      -1 != a.hb && (b.baseNoteRevision = a.hb);
      if (Wn(a)) {
        b.title = a.D || "";
        b.isArchived = a.fb;
        b.isPinned = a.gb;
        void 0 !== a.Va && (b.showAvailableInShoppingNotification = a.Va);
        a.Ba && (b.color = a.Ba);
        a.Da && (b.background = fj(a.Da));
        a.o && (b.reminder = mn(a.o));
        a.F && (b.nodeSettings = Lm(a.F));
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
        co(a) && "NONE" != a.ya && (b.shareState = a.ya);
        if (a.xb) {
          var e = {};
          b.abuseFeedback = ((e.type = a.xb), e);
        }
        if (!hc(a.v)) {
          var f = Th.L();
          b.labelIds = dc(a.v).map(function (g) {
            var h = {};
            return (h.labelId = g.id), (h.deleted = g.g ? f.format(g.g) : "1970-01-01T00:00:00.000Z"), h;
          });
        }
        hc(a.B.g) || (b.annotationsGroup = Zi(a.B));
      } else
        Xn(a)
          ? ((b.text = a.A || ""),
            (b.checked = a.xa),
            Ti(bd(), "n_eil") &&
              (void 0 !== a.S && (b.superListItemId = a.S || ""), void 0 !== a.ta && (b.superListItemServerId = a.ta || "")))
          : Yn(a) && a.h && (b.blob = Fm(a.h, !0));
      b.isDirty = a.i;
      a.ca && (b.lastSyncedText = a.ca);
      a.jb && (b.sourceBlobId = a.jb);
      return b;
    };
  z.prototype.clone = function () {
    var a = new z(no(this));
    x(this.s, function (b) {
      oo(a, b.clone());
    });
    x(this.N, function (b) {
      po(a, b.clone());
    });
    a.u.update(Yh(this.u));
    eo(a, this.Ca);
    return a;
  };
  z.prototype.duplicate = function () {
    var a = no(this),
      b = Tn();
    a.id = b;
    qo.forEach(function (e) {
      return delete a[e];
    });
    Yn(this) && this.h && ((a.sourceBlobId = this.g), delete a.blob);
    var c = new z(a),
      d = new Map();
    x(this.s, function (e) {
      if (0 == e.l) {
        var f = e.duplicate();
        f.G || bo(f, 1);
        ro(f, b);
        oo(c, f);
        d.set(e.g, f);
      }
    });
    Vn(c) &&
      so(this).forEach(function (e) {
        var f = e.S;
        if (f && ((e = d.get(e.g)), (f = d.get(f)), e && f)) {
          if (f && (!Xn(e) || !Xn(f))) throw Error("$");
          if (f && f.g in e.kb) {
            if (!Xn(e) || !Xn(f)) throw Error("$");
            f.S = null;
            f.ta = null;
            delete e.kb[f.g];
            Un(e);
          }
          null === f ? ((e.S = null), (e.ta = null)) : ((e.S = f.g), (e.ta = f.R), (f.kb[e.g] = e));
        }
      });
    Wn(c) && ao(c, !0);
    return c;
  };
  z.prototype.getTitle = function () {
    if (!Wn(this)) throw Error("S");
    return this.D || "";
  };
  z.prototype.setTitle = function (a) {
    if (!Wn(this)) throw Error("S");
    if (19999 < a.length) throw Error("T");
    this.wa || (this.ca = this.D || "");
    this.D = a;
    ao(this, !0);
    lo(this);
    this.wa = !0;
    Un(this);
  };
  var to = function (a) {
      if (!Wn(a)) throw Error("U`" + a.H);
      return a.Ba || "DEFAULT";
    },
    uo = function (a) {
      return -1 === a.ua || 1 === a.ua;
    },
    lo = function (a) {
      a.o && a.dispatchEvent("v");
    };
  z.prototype.zb = function (a) {
    ao(this);
    a.target = this;
    this.dispatchEvent("u");
  };
  var fo = function (a, b) {
    if (Wn(a) && b !== a.F) {
      a.F && (a.Z.X(a.F, "y", a.Ab), a.F.ga());
      if ((a.F = b)) a.Z.listen(b, "y", a.Ab), b.sa(a);
      a.dispatchEvent("k");
    }
  };
  z.prototype.Ab = function (a) {
    ao(this);
    this.i = this.i || this.F.g;
    a.target = this;
    this.dispatchEvent("k");
  };
  var co = function (a) {
      return ac(a.N, function (b) {
        var c;
        if ((c = "O" != b.o)) b.g ? ((b = b.g.getType()), (b = "M_RM" == b || "RM" == b)) : (b = !1), (c = !b);
        return c;
      });
    },
    po = function (a, b) {
      b.sa(a);
      a.N[b.h || ""] = b;
      b.dispatchEvent("A");
    },
    jo = function (a, b) {
      for (var c = !1, d = kc(a.N), e = t(b.roleInfo || []), f = e.next(); !f.done; f = e.next()) {
        f = f.value;
        var g = f.email;
        g && ((g = g.toLowerCase()), g in a.N ? ((c = a.N[g].update(f) || c), delete d[g]) : (po(a, new un(f)), (c = !0)));
      }
      c = c || !hc(d);
      x(d, function (h) {
        var l = h.g;
        (!l || ("M_WR" !== l.getType() && "WR" !== l.getType())) && delete a.N[h.h || ""];
      });
      return (c = vo(a, b, c) || c);
    },
    vo = function (a, b, c) {
      var d = !1,
        e = {};
      b = t(b.errorStatus || []);
      for (var f = b.next(); !f.done; f = b.next()) {
        f = f.value;
        var g = f.code;
        "TMS" != g && (e[g] = new Jm(f));
      }
      x(e, function (h, l) {
        if (!a.ba[l]) (a.ba[l] = h), (d = !0);
        else if (!a.ba[l].V(h)) {
          if ("OAD" == h.Wa || "SRD" == h.Wa) {
            l = a.ba[l].Oa;
            l.push.apply(l, md(h.Oa));
            for (var m = (h = 0), p = {}; m < l.length; ) {
              var u = l[m++],
                w = vd(u) ? "o" + gd(u) : (typeof u).charAt(0) + u;
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
    xo = function (a) {
      return Object.values(a.v)
        .filter(function (b) {
          return !wo(b);
        })
        .map(function (b) {
          return b.id;
        });
    },
    Ao = function (a, b) {
      !Wn(a) || yo(a, b) || Gn(b) || (En(b), (a.v[b.g] = new zo(b.g)), ao(a), Un(a), a.dispatchEvent("D"));
    },
    yo = function (a, b) {
      return [b.g].concat(md(b.h)).some(function (c) {
        return a.v[c] && !wo(a.v[c]);
      });
    },
    ko = function (a, b) {
      Th.L();
      var c = !1,
        d = kc(a.v);
      b = t(b);
      for (var e = b.next(); !e.done; e = b.next()) {
        var f = e.value;
        e = f.labelId;
        a.v[e] || ((a.v[e] = new zo(e)), (c = !0));
        if ((f = f.deleted)) {
          f = Uh(0, f);
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
    oo = function (a, b) {
      if (b.U && b.U != a.g) throw Error("V");
      if (!a.s[b.g]) {
        a.s[b.g] = b;
        N(a, b);
        a.Z.listen(b, "k", a.yb);
        b.sa(a);
        b.j = a;
        ro(b, a.g);
        b.Ha = a.R;
        b.Bb = !1;
        eo(b, a.Ca);
        if (void 0 === b.G) {
          var c;
          if ((c = !Yn(b))) (c = vc.L().i.GLOBAL_NEW_LIST_ITEM_PLACEMENT), (c = !!c && "TOP" == c.i);
          c = c ? Bo(a) : Co(a);
          bo(b, c, !0);
        }
        Xn(b) && ho(a, b.g, Sc(b));
        c = !1;
        Pc(a) && Xn(b) && 2 <= so(a).length && ((a.H = "LIST"), ao(a, !0), Un(a), (c = !0));
        if (b.i || c) ao(a, !0), lo(a), Un(a);
      }
    };
  z.prototype.getChildren = function () {
    return this.s;
  };
  var Do = function (a) {
      return dc(a.s).filter(function (b) {
        return Yn(b) && 0 == b.l;
      });
    },
    Eo = function (a) {
      a = Do(a);
      a.sort(uc);
      return a;
    },
    Go = function (a) {
      return Eo(a)
        .map(function (b) {
          return Fo(b);
        })
        .filter(function (b) {
          return !!b && "IMAGE" === b.getType();
        });
    },
    Io = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      return Do(a).some(function (d) {
        d = "IMAGE" !== b || c ? Ho(d) : Fo(d);
        return !!d && (!b || d.getType() === b);
      });
    };
  z.prototype.matches = function (a) {
    var b = Jo(this, a.getTokens());
    b =
      (b =
        (b =
          (b =
            (b =
              (b =
                (b =
                  (b =
                    (b = (b = (b = (b = b && Ko(this, a.D())) && Lo(this, a.h())) && Mo(this, a.i())) && No(this, a.j())) &&
                    (a.g() ? to(this) === a.g() : !0)) && (a.u() ? !!this.o : !0)) && (a.A() ? Vn(this) : !0)) &&
              (a.B() ? co(this) : !0)) && (a.l() ? Io(this, "AUDIO") : !0)) && (a.s() ? Io(this, "IMAGE", !0) : !0)) &&
        (a.o() ? Io(this, "DRAWING") : !0)) && (a.v() ? !!$i(this.B) || !hc(Fc(this.B)) || Oo.test(Po(this).toLowerCase()) : !0);
    return !!b;
  };
  var Jo = function (a, b) {
      for (var c = Po(a), d = Go(a), e = 0; e < d.length; e++) {
        var f = d[e].D || "";
        f && (c += "\n" + f);
      }
      co(a) &&
        x(a.N, function (h) {
          var l = c,
            m = "\n" + (h.h || "") + " ",
            p = nn.L();
          h = "FAMILY" == h.i && p.g && (p.g || "") === h.h && !h.j ? nn.L().h || on : "FAMILY" != h.i || h.j ? h.j : vn;
          c = l + (m + (h || ""));
        });
      x(Fc(a.B), function (h) {
        h = h.g;
        c += "\n" + h.Qa() + " " + h.getTitle();
      });
      (d = (d = (d = $i(a.B)) ? d.j : null) ? d.g : null) && (c += "\n" + d.Qa() + " " + d.getTitle());
      var g = vc.L();
      x(a.v, function (h, l) {
        (h = On(g, l)) && (c += "\n" + h.ka());
      });
      x(aj(a.B), function (h) {
        (h = h.i) && (c += "\n" + hi[h.g || "THING_CATEGORY_UNKNOWN"]);
      });
      x(bj(a.B), function (h) {
        (h = h.h) && (c += "\n" + Kh[h.g || "SUGGEST_TYPE_UNKNOWN"]);
      });
      c = c.toLowerCase();
      a = 0;
      for (d = void 0; (d = b[a]); a++) if (-1 === c.indexOf(d)) return !1;
      return !0;
    },
    Ko = function (a, b) {
      return b.every(function (c) {
        return c in a.N;
      });
    },
    Lo = function (a, b) {
      return b.every(function (c) {
        return ac(aj(a.B), function (d) {
          d = d.i;
          return !!d && (d.g || "THING_CATEGORY_UNKNOWN") === c;
        });
      });
    },
    Mo = function (a, b) {
      return b.every(function (c) {
        return ac(bj(a.B), function (d) {
          d = d.h;
          return !!d && (d.g || "SUGGEST_TYPE_UNKNOWN") === c;
        });
      }, a);
    },
    No = function (a, b) {
      var c = vc.L();
      return b.every(function (d) {
        d = Nn(c, d);
        return !!d && yo(a, d);
      });
    },
    Po = function (a) {
      return [a.D || "", a.A || ""]
        .concat(
          md(
            so(a).map(function (b) {
              return Sc(b);
            })
          )
        )
        .join("\n");
    };
  z.prototype.isSelected = function () {
    return !1;
  };
  var Co = function (a) {
      var b = Zn;
      x(a.s, function (c) {
        b = Math.min(b, c.G);
      });
      return b == Zn ? 0 : b - Qo;
    },
    Bo = function (a) {
      var b = $n;
      x(a.s, function (c) {
        b = Math.max(b, c.G);
      });
      return b == $n ? 0 : b + Qo;
    };
  z.prototype.yb = function (a) {
    a.target.i && lo(this);
  };
  var Qc = function (a) {
      if (!Pc(a)) throw Error("X");
      return (a = so(a)[0]) ? Sc(a) : "";
    },
    Ro = function (a, b) {
      if (!Pc(a)) throw Error("X");
      if (!Pc(a)) throw Error("W");
      var c = so(a)[0];
      if (!c) {
        c = a.g;
        var d = {};
        c = new z(((d.id = Tn()), (d.type = "LIST_ITEM"), (d.parentId = c), d));
        oo(a, c);
        a.dispatchEvent(new Hm(c));
      }
      a = c;
      if (!Xn(a)) throw Error("aa");
      19999 < b.length || (a.j && ho(a.j, a.g, b, a.A), a.wa || (a.ca = a.A || ""), (a.A = b), ao(a, !0), (a.wa = !0), Un(a));
    },
    ho = function (a, b, c, d) {
      var e = a.s;
      if (!(null !== e && b in e)) throw Error("Y");
      c = c.toLowerCase().trim();
      (d && d.toLowerCase().trim() === c) ||
        (d && So(a, b, d), 30 >= c.length && ((d = a.Ia.get(c)) || (d = new Set()), d.add(b), a.Ia.set(c, d)));
    },
    So = function (a, b, c) {
      c = c.toLowerCase().trim();
      if (!(30 < c.length)) {
        var d = a.Ia.get(c);
        if (!d) throw Error("Z");
        d.delete(b);
        d.size ? a.Ia.set(c, d) : a.Ia.remove(c);
      }
    },
    so = function (a) {
      var b = [],
        c;
      for (c in a.s) {
        var d = a.s[c];
        Xn(d) && 0 == d.l && b.push(d);
      }
      return b;
    },
    Rc = function (a) {
      var b = void 0 === b ? !1 : b;
      a = so(a);
      a.sort(b ? uc : wc);
      return a;
    },
    ro = function (a, b) {
      a.U !== b && ((a.U = b), a.Ca || a.notify());
    };
  z.prototype.getParent = function () {
    return this.j;
  };
  var Sc = function (a) {
      if (!Xn(a)) throw Error("aa");
      return a.A || "";
    },
    Ho = function (a) {
      return Yn(a) ? a.h : null;
    },
    Fo = function (a) {
      if (!Yn(a)) throw Error("ba");
      return a.h && (Bm(a.h) || Cm(a.h) || Dm(a.h)) ? (Bm(a.h) || (Cm(a.h) && !a.h.i) ? a.h : a.h.i) : null;
    },
    Oo = RegExp(
      "(?:(https?|ftp)://)?[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+(?:[\\.][\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+)*\\.(?:(?:xn--)*[a-zA-Z0-9]{2,63})(?:[\\.]?[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+(?:[\\.]*[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+)*)?"
    ),
    qo = Object.freeze(
      "annotationsGroup isArchived isDirty isPinned lastSyncedText parentServerId reminder baseVersion baseNoteRevision serverId shareState roleInfo showAvailableInShoppingNotification timestamps".split(
        " "
      )
    ),
    Qo = Math.pow(2, 20),
    Zn = Math.pow(2, 50) - 1,
    $n = -Math.pow(2, 50),
    zo = function (a) {
      this.id = a;
      this.g = null;
    },
    wo = function (a) {
      return !!a.g && !!a.g.valueOf();
    };
  var To = Ld(["http://goo.gl/forms/r40gTO4BTb"]),
    Uo = Ld(["https://keep.google.com"]),
    Vo = (function (a) {
      for (var b = kd.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
      return new Ac(c.join(""), Bc);
    })(To),
    Wo = (function (a) {
      var b = kd.apply(1, arguments);
      if (0 === b.length) return yg(a[0]);
      for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
      return yg(c);
    })(Uo);
  Dc(Wo.toString());
  var Xo = chrome.i18n.getMessage("2633701539319779732"),
    Yo = chrome.i18n.getMessage("577539731512680648"),
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
  var Zo = function () {
      this.g = new Map();
    },
    $o = function (a, b) {
      a.g.forEach(function (c) {
        return c(b);
      });
    };
  var ap = function (a) {
    this.g = a;
  };
  var bp = function (a) {
    this.J = v(a);
  };
  E(bp, K);
  var cp = function (a) {
    this.J = v(a);
  };
  E(cp, K);
  var dp = function (a) {
    this.J = v(a);
  };
  E(dp, K);
  var ep = function (a) {
    this.J = v(a);
  };
  E(ep, K);
  ep.Ka = [2];
  var cd = function (a) {
    this.J = v(a);
  };
  E(cd, K);
  cd.Ka = [1];
  var fp = function (a) {
    this.J = v(a);
  };
  E(fp, K);
  var gp = function () {
    this.i = this.g = null;
  };
  gp.prototype.initialize = function (a, b) {
    this.g = a;
    this.i = b;
    return this;
  };
  var hp = function (a, b) {
      b = a.i.h[b.g].Uc();
      b.initialize(a.g, a.i);
      return b;
    },
    ip = function (a) {
      var b = wf(a.g, fp, 5);
      null == b && ((b = new fp()), C(a.g, 5, b));
      return b;
    },
    jp = function (a) {
      var b = wf(a.g, cp, 8);
      Af(b, 3);
      var c = wf(a.g, fp, 5);
      null != c && ((b = a.g), (c = c.clone()), C(b, 5, c));
      return a.g;
    };
  gp.prototype.Qb = function () {
    return !0;
  };
  var kp = function () {
    gp.call(this);
    this.h = null;
  };
  E(kp, gp);
  var lp = function (a) {
      if (!a.h) {
        a.h = new dj();
        var b = ip(a);
        C(b, 39, a.h);
      }
      return a.h;
    },
    np = function (a) {
      var b = !mp.L().pc();
      a = lp(a);
      Bf(a, 22, b);
    },
    op = new ap("keep_builder");
  var pp = function () {};
  pp.prototype.Uc = function () {
    return new kp();
  };
  var qp = function (a) {
    this.J = v(a);
  };
  E(qp, K);
  var rp = function () {
    this.g = new qp();
  };
  rp.prototype.h = function (a) {
    C(a, 17, this.g);
  };
  var Zc = { navigate: 2, reload: 3, back_forward: 4, prerender: 5 };
  var sp = function (a) {
    this.J = v(a);
  };
  E(sp, K);
  var dd = function (a) {
    this.J = v(a);
  };
  E(dd, K);
  dd.prototype.setAccessLevel = function (a) {
    return C(this, 12, a);
  };
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
  var wp = function (a) {
    this.J = v(a);
  };
  E(wp, K);
  var xp = function (a) {
    this.J = v(a);
  };
  E(xp, K);
  var yp = function (a) {
    this.J = v(a);
  };
  E(yp, K);
  yp.prototype.getDevice = function () {
    return wf(this, wp, 9);
  };
  yp.prototype.getParent = function () {
    return wf(this, xp, 11);
  };
  var zp = function () {
      this.i = new up();
      this.h = null;
      this.j = new tp();
      Yc(this.j, 1, 6);
      this.g = null;
    },
    ad = function (a) {
      null == a.h && (a.h = new yp());
      return a.h;
    };
  var Ap = function (a, b) {
    this.i = a;
    this.j = b;
    this.h = 0;
    this.g = null;
  };
  Ap.prototype.get = function () {
    if (0 < this.h) {
      this.h--;
      var a = this.g;
      this.g = a.next;
      a.next = null;
    } else a = this.i();
    return a;
  };
  var Bp = function (a, b) {
    a.j(b);
    100 > a.h && (a.h++, (b.next = a.g), (a.g = b));
  };
  var Cp,
    Dp = function () {
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
  var Ep = function () {
    this.h = this.g = null;
  };
  Ep.prototype.add = function (a, b) {
    var c = Fp.get();
    c.set(a, b);
    this.h ? (this.h.next = c) : (this.g = c);
    this.h = c;
  };
  Ep.prototype.remove = function () {
    var a = null;
    this.g && ((a = this.g), (this.g = this.g.next), this.g || (this.h = null), (a.next = null));
    return a;
  };
  var Fp = new Ap(
      function () {
        return new Gp();
      },
      function (a) {
        return a.reset();
      }
    ),
    Gp = function () {
      this.next = this.scope = this.Pa = null;
    };
  Gp.prototype.set = function (a, b) {
    this.Pa = a;
    this.scope = b;
    this.next = null;
  };
  Gp.prototype.reset = function () {
    this.next = this.scope = this.Pa = null;
  };
  var Hp,
    Ip = !1,
    Jp = new Ep(),
    Lp = function (a, b) {
      Hp || Kp();
      Ip || (Hp(), (Ip = !0));
      Jp.add(a, b);
    },
    Kp = function () {
      if (n.Promise && n.Promise.resolve) {
        var a = n.Promise.resolve(void 0);
        Hp = function () {
          a.then(Mp);
        };
      } else
        Hp = function () {
          var b = Mp;
          "function" !== typeof n.setImmediate ||
          (n.Window && n.Window.prototype && (ja() || !q("Edge")) && n.Window.prototype.setImmediate == n.setImmediate)
            ? (Cp || (Cp = Dp()), Cp(b))
            : n.setImmediate(b);
        };
    },
    Mp = function () {
      for (var a; (a = Jp.remove()); ) {
        try {
          a.Pa.call(a.scope);
        } catch (b) {
          da(b);
        }
        Bp(Fp, a);
      }
      Ip = !1;
    };
  var Op = function (a) {
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
              Np(b, 2, c);
            },
            function (c) {
              Np(b, 3, c);
            }
          );
        } catch (c) {
          Np(this, 3, c);
        }
    },
    Pp = function () {
      this.next = this.context = this.h = this.j = this.g = null;
      this.i = !1;
    };
  Pp.prototype.reset = function () {
    this.context = this.h = this.j = this.g = null;
    this.i = !1;
  };
  var Qp = new Ap(
      function () {
        return new Pp();
      },
      function (a) {
        a.reset();
      }
    ),
    Rp = function (a, b, c) {
      var d = Qp.get();
      d.j = a;
      d.h = b;
      d.context = c;
      return d;
    },
    Tp = function (a, b, c) {
      Sp(a, b, c, null) || Lp(ee(b, a));
    },
    Up = function (a) {
      return new Op(function (b) {
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
            (g = a[f]), Tp(g, ee(e, f, !0), ee(e, f, !1));
        else b(d);
      });
    };
  Op.prototype.then = function (a, b, c) {
    return Vp(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c);
  };
  Op.prototype.$goog_Thenable = !0;
  var Xp = function (a, b) {
    b = Rp(b, b);
    b.i = !0;
    Wp(a, b);
  };
  Op.prototype.v = function (a, b) {
    return Vp(this, null, a, b);
  };
  Op.prototype.catch = Op.prototype.v;
  Op.prototype.cancel = function (a) {
    if (0 == this.g) {
      var b = new Yp(a);
      Lp(function () {
        Zp(this, b);
      }, this);
    }
  };
  var Zp = function (a, b) {
      if (0 == a.g)
        if (a.i) {
          var c = a.i;
          if (c.h) {
            for (var d = 0, e = null, f = null, g = c.h; g && (g.i || (d++, g.g == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
            e &&
              (0 == c.g && 1 == d ? Zp(c, b) : (f ? ((d = f), d.next == c.j && (c.j = d), (d.next = d.next.next)) : $p(c), aq(c, e, 3, b)));
          }
          a.i = null;
        } else Np(a, 3, b);
    },
    Wp = function (a, b) {
      a.h || (2 != a.g && 3 != a.g) || bq(a);
      a.j ? (a.j.next = b) : (a.h = b);
      a.j = b;
    },
    Vp = function (a, b, c, d) {
      var e = Rp(null, null, null);
      e.g = new Op(function (f, g) {
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
                void 0 === l && h instanceof Yp ? g(h) : f(l);
              } catch (m) {
                g(m);
              }
            }
          : g;
      });
      e.g.i = a;
      Wp(a, e);
      return e.g;
    };
  Op.prototype.A = function (a) {
    this.g = 0;
    Np(this, 2, a);
  };
  Op.prototype.B = function (a) {
    this.g = 0;
    Np(this, 3, a);
  };
  var Np = function (a, b, c) {
      0 == a.g &&
        (a === c && ((b = 3), (c = new TypeError("da"))),
        (a.g = 1),
        Sp(c, a.A, a.B, a) || ((a.s = c), (a.g = b), (a.i = null), bq(a), 3 != b || c instanceof Yp || cq(a, c)));
    },
    Sp = function (a, b, c, d) {
      if (a instanceof Op) return Wp(a, Rp(b || mg, c || null, d)), !0;
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
          if ("function" === typeof f) return dq(a, f, b, c, d), !0;
        } catch (g) {
          return c.call(d, g), !0;
        }
      return !1;
    },
    dq = function (a, b, c, d, e) {
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
    bq = function (a) {
      a.o || ((a.o = !0), Lp(a.u, a));
    },
    $p = function (a) {
      var b = null;
      a.h && ((b = a.h), (a.h = b.next), (b.next = null));
      a.h || (a.j = null);
      return b;
    };
  Op.prototype.u = function () {
    for (var a; (a = $p(this)); ) aq(this, a, this.g, this.s);
    this.o = !1;
  };
  var aq = function (a, b, c, d) {
      if (3 == c && b.h && !b.i) for (; a && a.l; a = a.i) a.l = !1;
      if (b.g) (b.g.i = null), eq(b, c, d);
      else
        try {
          b.i ? b.j.call(b.context) : eq(b, c, d);
        } catch (e) {
          fq.call(null, e);
        }
      Bp(Qp, b);
    },
    eq = function (a, b, c) {
      2 == b ? a.j.call(a.context, c) : a.h && a.h.call(a.context, c);
    },
    cq = function (a, b) {
      a.l = !0;
      Lp(function () {
        a.l && fq.call(null, b);
      });
    },
    fq = da,
    Yp = function (a) {
      aa.call(this, a);
    };
  G(Yp, aa);
  Yp.prototype.name = "cancel";
  var gq = function (a, b) {
    R.call(this);
    this.h = a || 1;
    this.g = b || n;
    this.i = F(this.kg, this);
    this.j = Date.now();
  };
  G(gq, R);
  k = gq.prototype;
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
    gq.O.K.call(this);
    this.stop();
    delete this.g;
  };
  var hq = function (a, b, c) {
    if ("function" === typeof a) c && (a = F(a, c));
    else if (a && "function" == typeof a.handleEvent) a = F(a.handleEvent, a);
    else throw Error("ea");
    return 2147483647 < Number(b) ? -1 : n.setTimeout(a, b || 0);
  };
  var iq = function (a, b, c) {
    M.call(this);
    this.g = a;
    this.j = b || 0;
    this.h = c;
    this.i = F(this.Xe, this);
  };
  G(iq, M);
  k = iq.prototype;
  k.Gb = 0;
  k.K = function () {
    iq.O.K.call(this);
    this.stop();
    delete this.g;
    delete this.h;
  };
  k.start = function (a) {
    this.stop();
    this.Gb = hq(this.i, void 0 !== a ? a : this.j);
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
  var jq = function (a) {
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
  var kq = function (a) {
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
  var lq = function () {};
  lq.prototype.g = null;
  lq.prototype.getOptions = function () {
    var a;
    (a = this.g) || ((a = {}), mq(this) && ((a[0] = !0), (a[1] = !0)), (a = this.g = a));
    return a;
  };
  var nq,
    oq = function () {};
  G(oq, lq);
  var pq = function (a) {
      return (a = mq(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
    },
    mq = function (a) {
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
  nq = new oq();
  var qq = function (a) {
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
  G(qq, R);
  var rq = /^https?$/i,
    sq = ["POST", "PUT"],
    tq = [],
    uq = function (a, b, c, d, e, f, g) {
      var h = new qq();
      tq.push(h);
      b && h.listen("complete", b);
      h.bd("ready", h.U);
      f && (h.l = Math.max(0, f));
      g && (h.i = g);
      h.send(a, c, d, e);
    };
  qq.prototype.U = function () {
    this.ga();
    ya(tq, this);
  };
  qq.prototype.ee = function () {
    return this.o;
  };
  qq.prototype.fe = function () {
    return this.i;
  };
  qq.prototype.send = function (a, b, c, d) {
    if (this.P) throw Error("ha`" + this.F + "`" + a);
    b = b ? b.toUpperCase() : "GET";
    this.F = a;
    this.j = 0;
    this.B = !1;
    this.g = !0;
    this.P = this.A ? pq(this.A) : pq(nq);
    this.v = this.A ? this.A.getOptions() : nq.getOptions();
    this.P.onreadystatechange = F(this.G, this);
    try {
      (this.D = !0), this.P.open(b, String(a), !0), (this.D = !1);
    } catch (g) {
      vq(this);
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
    !va(sq, b) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    b = t(c);
    for (d = b.next(); !d.done; d = b.next()) (c = t(d.value)), (d = c.next().value), (c = c.next().value), this.P.setRequestHeader(d, c);
    this.o && (this.P.responseType = this.o);
    "withCredentials" in this.P && this.P.withCredentials !== this.i && (this.P.withCredentials = this.i);
    try {
      wq(this),
        0 < this.l &&
          ((this.H = xq(this.P)) ? ((this.P.timeout = this.l), (this.P.ontimeout = F(this.N, this))) : (this.u = hq(this.N, this.l, this))),
        (this.s = !0),
        this.P.send(a),
        (this.s = !1);
    } catch (g) {
      vq(this);
    }
  };
  var xq = function (a) {
    return H && "number" === typeof a.timeout && void 0 !== a.ontimeout;
  };
  qq.prototype.N = function () {
    "undefined" != typeof Wd && this.P && ((this.j = 8), this.dispatchEvent("timeout"), this.abort(8));
  };
  var vq = function (a) {
      a.g = !1;
      a.P && ((a.h = !0), a.P.abort(), (a.h = !1));
      a.j = 5;
      yq(a);
      zq(a);
    },
    yq = function (a) {
      a.B || ((a.B = !0), a.dispatchEvent("complete"), a.dispatchEvent("error"));
    };
  qq.prototype.abort = function (a) {
    this.P &&
      this.g &&
      ((this.g = !1),
      (this.h = !0),
      this.P.abort(),
      (this.h = !1),
      (this.j = a || 7),
      this.dispatchEvent("complete"),
      this.dispatchEvent("abort"),
      zq(this));
  };
  qq.prototype.K = function () {
    this.P && (this.g && ((this.g = !1), (this.h = !0), this.P.abort(), (this.h = !1)), zq(this, !0));
    qq.O.K.call(this);
  };
  qq.prototype.G = function () {
    this.pa || (this.D || this.s || this.h ? Aq(this) : this.R());
  };
  qq.prototype.R = function () {
    Aq(this);
  };
  var Aq = function (a) {
      if (a.g && "undefined" != typeof Wd && (!a.v[1] || 4 != (a.P ? a.P.readyState : 0) || 2 != a.getStatus()))
        if (a.s && 4 == (a.P ? a.P.readyState : 0)) hq(a.G, 0, a);
        else if ((a.dispatchEvent("readystatechange"), 4 == (a.P ? a.P.readyState : 0))) {
          a.g = !1;
          try {
            Bq(a) ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : ((a.j = 6), a.getStatus(), yq(a));
          } finally {
            zq(a);
          }
        }
    },
    zq = function (a, b) {
      if (a.P) {
        wq(a);
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
    wq = function (a) {
      a.P && a.H && (a.P.ontimeout = null);
      a.u && (n.clearTimeout(a.u), (a.u = null));
    };
  qq.prototype.isActive = function () {
    return !!this.P;
  };
  var Bq = function (a) {
    var b = a.getStatus(),
      c;
    if (!(c = kq(b))) {
      if ((b = 0 === b))
        (a = String(a.F).match(pi)[1] || null),
          !a && n.self && n.self.location && (a = n.self.location.protocol.slice(0, -1)),
          (b = !rq.test(a ? a.toLowerCase() : ""));
      c = b;
    }
    return c;
  };
  qq.prototype.getStatus = function () {
    try {
      return 2 < (this.P ? this.P.readyState : 0) ? this.P.status : -1;
    } catch (a) {
      return -1;
    }
  };
  var Cq = function (a) {
    if (a.P) {
      a: {
        a = a.P.responseText;
        if (n.JSON)
          try {
            var b = n.JSON.parse(a);
            break a;
          } catch (c) {}
        b = jq(a);
      }
      return b;
    }
  };
  var mp = function () {
    R.call(this);
    var a = this;
    this.h = navigator.onLine;
    this.g = new Dq(function (c) {
      return Eq(a, c);
    });
    N(this, this.g);
    var b = new U(this);
    N(this, b);
    b.listen(window, ["online", "offline"], this.i);
    this.h ||
      Lp(function () {
        return a.g.start();
      });
  };
  E(mp, R);
  mp.prototype.pc = function () {
    return this.h;
  };
  var Eq = function (a, b) {
    a.h != b && ((a.h = b), a.dispatchEvent(new Fq(b)), b ? a.g.stop() : a.g.start());
  };
  mp.prototype.i = function () {
    Eq(this, navigator.onLine);
  };
  mp.prototype.K = function () {
    this.g.stop();
    R.prototype.K.call(this);
  };
  mp.L = function () {
    return yh(mp);
  };
  var Fq = function (a) {
    gj.call(this, "change");
    this.pc = a;
  };
  E(Fq, gj);
  var Dq = function (a) {
    M.call(this);
    var b = this;
    this.o = a;
    this.j = !1;
    this.h = 0;
    this.l = new iq(function () {
      return Gq(b, !1);
    }, 1e4);
    N(this, this.l);
    this.i = new iq(function () {
      return Hq(b);
    }, 5e3);
    N(this, this.i);
    this.g = null;
  };
  E(Dq, M);
  Dq.prototype.start = function () {
    this.j || ((this.j = !0), (this.h = 0), Hq(this));
  };
  Dq.prototype.stop = function () {
    Iq(this);
    this.j = !1;
  };
  var Hq = function (a) {
      navigator.onLine || a.h++;
      var b = Li().toString();
      a.g = new Image();
      a.g.onload = function () {
        return Gq(a, !0);
      };
      a.g.onerror = function () {
        return Gq(a, !1);
      };
      a.g.onabort = function () {
        return Gq(a, !1);
      };
      a.g.src = b;
      a.l.start();
    },
    Gq = function (a, b) {
      Iq(a);
      b ? (a.o(!0), a.stop()) : !navigator.onLine && 2 <= a.h ? (a.o(!1), a.stop()) : a.i.start();
    },
    Iq = function (a) {
      a.g && ((a.g.onload = a.g.onerror = a.g.onabort = null), (a.g = null));
      a.l.stop();
      a.i.stop();
    },
    Ki = new zi("https://www.google.com/images/cleardot.gif");
  var Jq = function (a) {
    R.call(this);
    this.h = a;
    this.enabled = !1;
    this.i = function () {
      return Date.now();
    };
    this.j = this.i();
  };
  E(Jq, R);
  var Kq = function (a, b) {
    a.h = b;
    a.g && a.enabled ? (a.stop(), a.start()) : a.g && a.stop();
  };
  Jq.prototype.start = function () {
    var a = this;
    this.enabled = !0;
    this.g ||
      ((this.g = setTimeout(function () {
        Nq(a);
      }, this.h)),
      (this.j = this.i()));
  };
  Jq.prototype.stop = function () {
    this.enabled = !1;
    this.g && (clearTimeout(this.g), (this.g = void 0));
  };
  var Nq = function (a) {
    if (a.enabled) {
      var b = Math.max(a.i() - a.j, 0);
      b < 0.8 * a.h
        ? (a.g = setTimeout(function () {
            Nq(a);
          }, a.h - b))
        : (a.g && (clearTimeout(a.g), (a.g = void 0)), a.dispatchEvent("tick"), a.enabled && (a.stop(), a.start()));
    } else a.g = void 0;
  };
  var Oq = function (a) {
    this.J = v(a);
  };
  E(Oq, K);
  var Pq = function (a) {
    this.J = v(a);
  };
  E(Pq, K);
  var Qq = function (a) {
    this.g = this.h = this.i = a;
  };
  Qq.prototype.reset = function () {
    this.g = this.h = this.i;
  };
  Qq.prototype.aa = function () {
    return this.h;
  };
  var Rq = function (a) {
    this.J = v(a);
  };
  E(Rq, K);
  var Sq = function (a) {
    this.J = v(a);
  };
  E(Sq, K);
  Sq.Ka = [1];
  var Tq = function (a) {
    this.J = v(a);
  };
  E(Tq, K);
  var Uq = ["platform", "platformVersion", "architecture", "model", "uaFullVersion"];
  new Sq();
  var Vq = function (a) {
    this.J = v(a);
  };
  E(Vq, K);
  var Wq = function (a) {
    this.J = v(a);
  };
  E(Wq, K);
  var Xq = function (a) {
    this.J = v(a, 35);
  };
  E(Xq, K);
  var Yq = function (a, b) {
    return Cf(a, 8, b);
  };
  Xq.Ka = [3, 20, 27];
  var Zq = function (a) {
    this.J = v(a, 19);
  };
  E(Zq, K);
  Zq.prototype.Vb = function (a) {
    return Yc(this, 2, a);
  };
  Zq.Ka = [3, 5];
  var $q = function (a) {
    this.J = v(a, 7);
  };
  E($q, K);
  var ar = (function (a) {
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
  })($q);
  $q.Ka = [5, 6];
  var br = function (a) {
    this.J = v(a);
  };
  E(br, K);
  var cr = new (function (a, b) {
    this.h = a;
    this.g = b;
    this.i = wf;
    this.defaultValue = void 0;
  })(175237375, br);
  var gr = function (a) {
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
    this.Cb = a.Cb;
    this.lb = a.lb || function () {};
    this.i = new dr(a.Cb, a.ob);
    this.network = a.network;
    this.Eb = a.Eb || null;
    this.bufferSize = 1e3;
    this.ca = ee(Rg, 0, 1);
    this.B = a.lg || null;
    this.Za = a.Za || null;
    this.Lb = a.Lb || !1;
    this.Db = a.Db || null;
    this.withCredentials = !a.be;
    this.ob = a.ob || !1;
    this.Z = !this.ob && !!eh() && !!eh().navigator && void 0 !== eh().navigator.sendBeacon;
    var c = Yc(new Vq(), 1, 1);
    er(this.i, c);
    this.o = new Qq(1e4);
    this.g = new Jq(this.o.aa());
    a = fr(this, a.Vd);
    wj(this.g, "tick", a, !1, this);
    this.A = new Jq(6e5);
    wj(this.A, "tick", a, !1, this);
    this.Lb || this.A.start();
    this.ob ||
      (wj(document, "visibilitychange", function () {
        "hidden" === document.visibilityState && b.D();
      }),
      wj(document, "pagehide", this.D, !1, this));
  };
  E(gr, M);
  var fr = function (a, b) {
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
  gr.prototype.K = function () {
    this.D();
    this.g.stop();
    this.A.stop();
    M.prototype.K.call(this);
  };
  var hr = function (a) {
    a.B ||
      (a.B =
        0.01 > a.ca() ? "https://www.google.com/log?format=json&hasfast=true" : "https://play.google.com/log?format=json&hasfast=true");
    return a.B;
  };
  gr.prototype.ce = function (a) {
    a instanceof Xq ? this.log(a) : ((a = Yq(new Xq(), Df(a))), this.log(a));
  };
  var ir = function (a, b) {
    a.o = new Qq(1 > b ? 1 : b);
    Kq(a.g, a.o.aa());
  };
  gr.prototype.log = function (a) {
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
    this.Lb || this.g.enabled || this.g.start();
  };
  gr.prototype.flush = function (a, b) {
    var c = this;
    if (0 === this.h.length) a && a();
    else if (this.v) jr(this.i, 3), kr(this);
    else {
      var d = Date.now();
      if (this.S > d && this.G < d) b && b("throttled");
      else {
        jr(this.i, 1);
        var e = lr(this.i, this.h, this.l, this.s, this.Eb, this.H, this.F);
        d = {};
        var f = this.lb();
        f && (d.Authorization = f);
        var g = hr(this);
        this.Za && ((d["X-Goog-AuthUser"] = this.Za), (g = vi(g, "authuser", this.Za)));
        this.Db && ((d["X-Goog-PageId"] = this.Db), (g = vi(g, "pageId", this.Db)));
        if (f && this.R === f) b && b("stale-auth-token");
        else {
          this.h = [];
          this.g.enabled && this.g.stop();
          this.l = 0;
          var h = Df(e),
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
              Kq(c.g, c.o.aa());
              if (r) {
                var A = null;
                try {
                  var J = JSON.stringify(JSON.parse(r.replace(")]}'\n", "")));
                  A = ar(J);
                } catch (ba) {}
                if (A) {
                  r = Number;
                  J = "-1";
                  J = void 0 === J ? "0" : J;
                  var S = zf(A);
                  r = r(null != S ? S : J);
                  0 < r && ((c.G = Date.now()), (c.S = c.G + r));
                  A = cr.g ? cr.i(A, cr.g, cr.h, !0) : cr.i(A, cr.h, null, !0);
                  if ((r = null === A ? void 0 : A))
                    (A = -1), (A = void 0 === A ? 0 : A), (r = lb(rf(r, 1))), (A = null != r ? r : A), -1 !== A && (c.U || ir(c, A));
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
              var hd = T ? 1 : 2;
              S = 1 === hd;
              var Dw = 2 === hd;
              hd = !1;
              ka && (ka = !T);
              T = qf(J, ba, 3);
              T = Array.isArray(T) ? T : Pb;
              var I = Ua(T),
                Lq = !!(4 & I);
              if (!Lq) {
                var ca = I;
                0 === ca && (ca = Kb(ca, ba, hd));
                ca = Xa(ca, 1, !0);
                I = T;
                var Me = ba,
                  id = !!(2 & ca);
                id && (Me = Xa(Me, 2, !0));
                for (var Fk = !id, Gk = !0, Ph = 0, Hk = 0; Ph < I.length; Ph++) {
                  var Ik = sb(I[Ph], Xq, Me);
                  if (Ik instanceof Xq) {
                    if (!id) {
                      var Mq = !!(Ua(Ik.J) & 2);
                      Fk && (Fk = !Mq);
                      Gk && (Gk = Mq);
                    }
                    I[Hk++] = Ik;
                  }
                }
                Hk < Ph && (I.length = Hk);
                ca = Xa(ca, 4, !0);
                ca = Xa(ca, 16, Gk);
                ca = Xa(ca, 8, Fk);
                Va(I, ca);
                id && Object.freeze(I);
                I = ca;
              }
              ca = !!(8 & I) || (S && !T.length);
              if (ka && !ca) {
                Jb(I) && ((T = Ta(T)), (I = Kb(I, ba, hd)), (ba = Ib(J, ba, 3, T)));
                ka = T;
                for (ca = 0; ca < ka.length; ca++) (Me = ka[ca]), (id = Hb(Me)), Me !== id && (ka[ca] = id);
                I = Xa(I, 8, !0);
                I = Xa(I, 16, !ka.length);
                Va(ka, I);
              }
              Jb(I) ||
                ((ka = I),
                S ? (I = Xa(I, !T.length || (16 & I && (!Lq || 32 & I)) ? 2 : 2048, !0)) : hd || (I = Xa(I, 32, !1)),
                I !== ka && Va(T, I),
                S && Object.freeze(T));
              Dw && Jb(I) && ((T = Ta(T)), (I = Kb(I, ba, hd)), Va(T, I), Ib(J, ba, 3, T));
              J = T;
              ba = yf(e, 14);
              S = c.o;
              S.g = Math.min(3e5, 2 * S.g);
              S.h = Math.min(3e5, S.g + Math.round(0.2 * (Math.random() - 0.5) * S.g));
              Kq(c.g, c.o.aa());
              401 === r && f && (c.R = f);
              ba && (c.l += ba);
              void 0 === A && (A = (500 <= r && 600 > r) || 401 === r || 0 === r);
              A && ((c.h = J.concat(c.h)), c.Lb || c.g.enabled || c.g.start());
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
  gr.prototype.D = function () {
    mr(this.i, !0);
    this.N && (jr(this.i, 3), kr(this));
    this.flush();
    mr(this.i, !1);
  };
  var kr = function (a) {
      nr(a, function (b, c) {
        b = vi(b, "format", "json");
        var d = !1;
        try {
          d = eh().navigator.sendBeacon(b, Df(c));
        } catch (e) {}
        a.v && !d && (a.v = !1);
        return d;
      });
    },
    nr = function (a, b) {
      if (0 !== a.h.length) {
        var c = hr(a);
        for (var d = c.search(xi), e = 0, f, g = []; 0 <= (f = wi(c, e, d)); )
          g.push(c.substring(e, f)), (e = Math.min(c.indexOf("&", f) + 1 || d, d));
        g.push(c.slice(e));
        c = g.join("").replace(yi, "$1");
        c = ui(c, "auth", a.lb(), "authuser", a.Za || "0");
        for (d = 0; 10 > d && a.h.length; ++d) {
          e = a.h.slice(0, 32);
          f = lr(a.i, e, a.l, a.s, a.Eb, a.H, a.F);
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
    dr = function (a, b) {
      this.ob = b = void 0 === b ? !1 : b;
      this.h = this.locale = null;
      this.g = new Zq();
      Number.isInteger(a) && this.g.Vb(a);
      b || (this.locale = document.documentElement.getAttribute("lang"));
      er(this, new Vq());
    };
  dr.prototype.Vb = function (a) {
    this.g.Vb(a);
    return this;
  };
  var er = function (a, b) {
      C(a.g, 1, b);
      Af(b, 1) || Yc(b, 1, 1);
      if (!a.ob) {
        b = or(a);
        var c = rf(b, 5);
        ((null == c || "string" === typeof c) && c) || Cf(b, 5, a.locale);
      }
      a.h && ((b = or(a)), wf(b, Sq, 9) || C(b, 9, a.h));
    },
    jr = function (a, b) {
      uf(pr(a), Tq, 11) && ((a = qr(a)), Yc(a, 1, b));
    },
    mr = function (a, b) {
      uf(pr(a), Tq, 11) && ((a = qr(a)), Bf(a, 2, b));
    },
    pr = function (a) {
      return wf(a.g, Vq, 1);
    },
    rr = function (a, b) {
      var c = void 0 === c ? Uq : c;
      b(eh(), c)
        .then(function (d) {
          a.h = d;
          d = or(a);
          C(d, 9, a.h);
          return !0;
        })
        .catch(function () {
          return !1;
        });
    },
    or = function (a) {
      a = pr(a);
      var b = wf(a, Tq, 11);
      b || ((b = new Tq()), C(a, 11, b));
      return b;
    },
    qr = function (a) {
      a = or(a);
      var b = wf(a, Rq, 10);
      b || ((b = new Rq()), Bf(b, 2, !1), C(a, 10, b));
      return b;
    },
    lr = function (a, b, c, d, e, f, g) {
      c = void 0 === c ? 0 : c;
      f = void 0 === f ? 0 : f;
      g = void 0 === g ? 0 : g;
      d = void 0 === d ? 0 : d;
      if (uf(pr(a), Tq, 11)) {
        var h = qr(a);
        Xc(h, 3, d);
      }
      uf(pr(a), Tq, 11) && ((d = qr(a)), Xc(d, 4, f));
      uf(pr(a), Tq, 11) && ((f = qr(a)), Xc(f, 5, g));
      a = a.g.clone();
      a = sf(a, 4, pb(Date.now().toString()));
      b = xf(a, 3, b);
      e &&
        ((a = new Oq()),
        (e = Xc(a, 13, e)),
        (a = new Pq()),
        (e = C(a, 2, e)),
        (a = new Wq()),
        (e = C(a, 1, e)),
        (e = Yc(e, 2, 9)),
        C(b, 18, e));
      c && B(b, 14, c);
      return b;
    };
  var sr = function (a) {
    var b;
    this.h = (b = void 0 === b ? !1 : b) ? null : a;
    this.g = b ? a : null;
    this.h && ((a = this.h), (a.N = a.Z));
  };
  sr.prototype.i = function (a) {
    var b = this.g ? this.g.ce.bind(this.g) : this.h.log.bind(this.h),
      c = this.g ? this.g.flush.bind(this.g) : this.h.flush.bind(this.h);
    a = Yq(new Xq(), Df(a));
    b(a);
    c();
  };
  var tr = function (a) {
    var b;
    this.h = (b = void 0 === b ? !1 : b) ? null : a;
    this.g = b ? a : null;
  };
  tr.prototype.i = function (a) {
    var b = this.g ? this.g.ce.bind(this.g) : this.h.log.bind(this.h),
      c = this.g ? this.g.flush.bind(this.g) : this.h.flush.bind(this.h);
    a = Yq(new Xq(), Df(a));
    b(a);
    return new Op(
      function (d) {
        c(d, function () {
          d();
        });
      }.bind(this)
    );
  };
  var ur = function () {
    gp.call(this);
  };
  E(ur, gp);
  var vr = new ap("high_frequency_builder");
  var wr = function (a, b, c) {
    a = new gq(a);
    N(c, a);
    var d = new U(c);
    N(c, d);
    d.listen(a, "tick", b);
    a.start();
  };
  var xr = function () {
    gp.call(this);
  };
  E(xr, gp);
  var yr = function (a, b) {
      var c = 1e3 * Date.now(),
        d = new cp();
      var e = new bp();
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
    zr = new ap("system_builder");
  var Ar = function (a, b) {
    if (b && a in b) return a;
    var c = Ke ? "Webkit" : Je ? "Moz" : H ? "ms" : null;
    return c ? ((c = c.toLowerCase()), (a = c + Jg(a)), void 0 === b || a in b ? a : null) : null;
  };
  var Br = function () {
    gj.call(this, "visibilitychange");
  };
  E(Br, gj);
  var ld = new WeakMap(),
    fd = function (a, b) {
      a = [a];
      for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
      return a.join("\v");
    };
  var Cr = function (a) {
    R.call(this);
    this.g = a || qd();
    if ((this.h = this.Jf())) this.i = wj(this.g.g, this.h, F(this.Nf, this));
  };
  G(Cr, R);
  k = Cr.prototype;
  k.Jf = nd(function () {
    var a = this.isSupported(),
      b = "hidden" != this.kc();
    if (a) {
      var c;
      b ? (c = (((Ke ? "Webkit" : Je ? "Moz" : H ? "ms" : null) || "") + "visibilitychange").toLowerCase()) : (c = "visibilitychange");
      a = c;
    } else a = null;
    return a;
  });
  k.kc = nd(function () {
    return Ar("hidden", this.g.g);
  });
  k.Kf = nd(function () {
    return Ar("visibilityState", this.g.g);
  });
  k.isSupported = function () {
    return !!this.kc();
  };
  k.Nf = function () {
    var a = this.isSupported() ? this.g.g[this.Kf()] : null;
    a = new Br(!!this.g.g[this.kc()], a);
    this.dispatchEvent(a);
  };
  k.K = function () {
    Ej(this.i);
    Cr.O.K.call(this);
  };
  var Dr = function (a, b) {
    M.call(this);
    this.h = a;
    this.g = new Cr(b);
    N(this, this.g);
    this.i = new U(this);
    N(this, this.i);
    this.g.isSupported() && this.i.listen(this.g, "visibilitychange", this.j);
  };
  E(Dr, M);
  Dr.prototype.j = function () {
    if (this.h.ud()) {
      var a = this.g;
      a = !!a.g.g[a.kc()];
      a = this.h.td(a ? 102001 : 102e3);
      this.h.ue(a);
    }
  };
  var Er = function (a, b, c) {
    c = void 0 === c ? !1 : c;
    M.call(this);
    this.h = a;
    this.g = b;
    N(this, this.g);
    this.j = c;
    this.i = null;
  };
  E(Er, M);
  k = Er.prototype;
  k.ue = function (a) {
    var b = this.h;
    B(a.g, 6, b.j);
    a = jp(a);
    b.g.add(a);
    b.i = !0;
    b = this.g;
    3 <= b.g.g.W() && b.h.qa();
  };
  k.td = function (a) {
    return yr(Fr(this.h, a), this.h.s++);
  };
  k.Ye = function () {
    var a = this.g;
    if (!a.l || a.g.i) {
      var b = jp(Gr(a.g, 691));
      b = Hr(a.g, [b]);
      a.o.i(b);
    }
    a.j();
    this.h.l = !1;
    this.i && (nc(this.i), (this.i = null));
  };
  k.af = function () {
    var a = this.h,
      b = Gr(a, 716);
    Ir(a, b);
    b = jp(b);
    a.g.add(b);
    a.u = !0;
    a.l = !0;
    this.g.initialize();
    this.g.h.qa();
    this.j && (this.i = new Dr(this));
  };
  k.Ze = function () {
    this.g.j();
    Up(Array.from(this.g.i)).then();
  };
  k.ud = function () {
    var a = this.h;
    return a.u && a.l && !0;
  };
  var Jr = function (a, b, c) {
    M.call(this);
    this.o = null != c ? a.bind(c) : a;
    this.l = b;
    this.j = null;
    this.h = !1;
    this.i = 0;
    this.g = null;
  };
  E(Jr, M);
  k = Jr.prototype;
  k.qa = function (a) {
    this.j = arguments;
    this.g || this.i ? (this.h = !0) : Kr(this);
  };
  k.stop = function () {
    this.g && (n.clearTimeout(this.g), (this.g = null), (this.h = !1), (this.j = null));
  };
  k.pause = function () {
    this.i++;
  };
  k.resume = function () {
    this.i--;
    this.i || !this.h || this.g || ((this.h = !1), Kr(this));
  };
  k.K = function () {
    M.prototype.K.call(this);
    this.stop();
  };
  var Kr = function (a) {
    a.g = hq(function () {
      a.g = null;
      a.h && !a.i && ((a.h = !1), Kr(a));
    }, a.l);
    var b = a.j;
    a.j = null;
    a.o.apply(null, b);
  };
  var Lr = function (a, b, c, d, e) {
    M.call(this);
    this.g = a;
    this.u = b;
    this.o = c;
    this.h = new Jr(this.j, 3e3, this);
    this.i = new Set();
    this.l = d;
    this.s = e || 6e4;
  };
  E(Lr, M);
  Lr.prototype.initialize = function () {
    wr(this.s, this.h.qa, this.h);
    wr(36e5, this.v, this);
  };
  Lr.prototype.j = function () {
    var a = this;
    if (0 != this.g.g.W() && (!this.l || this.g.i)) {
      var b = Mr(this.g),
        c = this.u.i(b);
      c &&
        (Xp(c, function () {
          return void a.i.delete(c);
        }),
        this.i.add(c));
    }
  };
  Lr.prototype.v = function () {
    var a = this.g,
      b = Gr(a, 1153);
    b = jp(b);
    a.g.add(b);
    this.h.qa();
  };
  var Nr = function () {};
  Nr.prototype.Uc = function () {
    return new ur();
  };
  var Or = function () {
    this.h = {};
    this.i = {};
    this.g = null;
  };
  var Pr = function () {
    this.g = [];
  };
  Pr.prototype.add = function (a) {
    this.g.push(a);
  };
  Pr.prototype.W = function () {
    return this.g.length;
  };
  var Qr = function () {
    this.g = {};
  };
  Qr.prototype.add = function (a) {
    var b = yf(a.g, 12);
    this.g[b] = a;
  };
  Qr.prototype.remove = function (a) {
    delete this.g[a];
  };
  var Rr = function (a) {
    this.J = v(a);
  };
  E(Rr, K);
  var Sr = function (a) {
    this.J = v(a, 500);
  };
  E(Sr, K);
  Sr.Ka = [1];
  var Tr = function (a, b) {
      this.h = a;
      this.v = b;
      this.s = 1;
      this.o = this.j = null;
      this.A = new Qr();
      this.g = new Pr();
      this.l = this.u = this.i = !1;
    },
    Fr = function (a, b) {
      a = hp(new gp().initialize(new Rr(), a.v), zr);
      B(a.g, 10, b);
      return a;
    },
    Mr = function (a) {
      var b = a.g,
        c = b.g;
      b.g = [];
      return Hr(a, c);
    },
    Hr = function (a, b) {
      var c = new Sr();
      var d = a.h.i.clone();
      c = C(c, 2, d);
      d = a.h;
      (d = d.h ? d.h.clone() : null) && C(c, 5, d);
      var e;
      d = a.h;
      for (var f, g = b.length - 1; 0 <= g; g--) {
        var h = wf(b[g], fp, 5);
        if (h && wf(h, gg, 1)) {
          h = wf(h, gg, 1);
          null != vf(h, 12) && void 0 === e && (e = vf(h, 12));
          h = wf(h, fg, 20);
          if (void 0 !== h && void 0 === f) {
            f = new sp();
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
    Gr = function (a, b) {
      var c = yr(Fr(a, b), a.s++);
      var d = a.A;
      var e = Object.keys(d.g);
      if (0 == e.length) d = null;
      else {
        for (var f = [], g = 0; g < e.length; g++) {
          var h = Number(e[g]),
            l = d.g[h],
            m = new dp();
          h = B(m, 1, h);
          l = yf(l.g, 10);
          l = B(h, 2, null == l ? void 0 : l);
          f.push(l);
        }
        d = f;
      }
      716 != b && ((b = a.o), B(c.g, 6, a.j), (e = new ep()), (b = B(e, 1, b)), d && xf(b, 2, d), (d = ip(c)), C(d, 3, b));
      Ir(a, c);
      return c;
    },
    Ir = function (a, b) {
      a.j = yf(b.g, 12);
      a.o = yf(wf(wf(b.g, cp, 8), bp, 1), 1);
    };
  var Ur = function () {};
  Ur.prototype.Uc = function () {
    return new xr();
  };
  var Vr = function () {
    this.g = this.h = null;
  };
  var Wr = function () {
    this.j = this.l = null;
    this.h = new zp();
    this.g = null;
    this.i = !1;
  };
  var Xr = function () {};
  Xr.prototype.send = function (a, b, c) {
    b = void 0 === b ? function () {} : b;
    c = void 0 === c ? function () {} : c;
    uq(
      a.url,
      function (d) {
        d = d.target;
        if (Bq(d)) {
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
  var Yr = function (a, b) {
    M.call(this);
    this.Cb = a;
    this.Za = b;
    this.g = !1;
    this.network = new Xr();
  };
  E(Yr, M);
  var Zr = function (a, b) {
    a.lb = b;
  };
  Yr.prototype.be = function () {
    this.v = !0;
    return this;
  };
  var $r = function (a) {
    var b = new gr({
      Cb: a.Cb,
      lb: a.lb ? a.lb : Og,
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
    a.l && er(b.i, a.l);
    if (a.j) {
      var c = a.j,
        d = or(b.i);
      Cf(d, 7, c);
    }
    a.i && (b.u = a.i);
    a.Eb && (b.Eb = a.Eb);
    a.h && ((d = a.h) ? (b.j || (b.j = new Ef()), (c = b.j), (d = Df(d)), Cf(c, 4, d)) : b.j && sf(b.j, 4));
    a.s && ((c = a.s), b.j || (b.j = new Ef()), Lb(b.j, 2, c, Ob));
    a.o && ((c = a.o), (b.U = !0), ir(b, c));
    a.u && rr(b.i, a.u);
    a.network.Vb && a.network.Vb(a.Cb);
    a.network.gg && a.network.gg(b);
    return b;
  };
  var as = function (a) {
      this.i = void 0 === a ? !1 : a;
      this.g = null;
      this.j = new Zo();
      new dg();
      this.h = [];
    },
    cs = function (a, b) {
      a.g = b;
      ed(a.g.h.h);
      a.g.af();
      a.h.forEach(function (c) {
        return c();
      });
      a.h.length = 0;
      "undefined" !== typeof window &&
        wj(eh(), "unload", function () {
          a.g.ud() && bs(a);
        });
    },
    bs = function (a) {
      a.g && a.g.Ye();
    };
  as.prototype.log = function (a, b, c) {
    var d = this;
    if (this.g) {
      var e = this.g.td(a);
      e = hp(e, op);
      $o(this.j, lp(e));
      void 0 !== b && b(e);
      c || this.i || np(e);
      this.g.ue(e);
      this.i && this.g && this.g.Ze();
    } else
      this.h.push(function () {
        return d.log(a, b, c);
      });
  };
  var fs = function (a) {
      var b = ds;
      Ui("n_ugat");
      var c = new Wr();
      Cf(c.h.i, 1, b);
      Yc(c.h.i, 6, 72);
      b = new Or();
      b.h[op.g] = new pp();
      var d = Vi("n_ugs"),
        e = Vi("n_rs"),
        f = new rp();
      Yc(f.g, 1, d);
      Yc(f.g, 2, e);
      b.i.keep_invariants = f;
      b.g && f.h(b.g);
      c.g = b;
      c.i = !0;
      a = es(a);
      c.l = new tr(a);
      a = new sr(a);
      c.j = a;
      a = new Vr();
      a.h = c.h;
      null != c.g && (a.g = c.g);
      null == a.g && (a.g = new Or());
      a.g.h[zr.g] = new Ur();
      a.g.h[vr.g] = new Nr();
      b = a.g;
      d = a.h;
      uf(ad(d), vp, 1) || ((e = ad(d)), (f = new vp()), C(e, 1, f));
      d = wf(ad(d), vp, 1);
      b.g = d;
      d = dc(b.i);
      for (e = 0; e < d.length; e++) d[e].h(b.g);
      a = new Tr(a.h, a.g);
      b = new Lr(a, c.l, c.j, !1, null);
      return new Er(a, b, c.i);
    },
    es = function (a) {
      var b = !1;
      b = void 0 === b ? !1 : b;
      var c = new Yr(128, "0");
      a &&
        Zr(c, function () {
          return "Bearer " + a();
        });
      b && ((c.g = !0), (c.network = { send: od }));
      return $r(c);
    };
  var gs = function () {
    R.call(this);
    this.Z = yh(as);
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
    this.u = new Jr(this.ba, 50, this);
    this.A = new U(this);
    N(this, this.A);
    this.A.listen(this, "k", this.s).listen(this.h, "F", this.s);
  };
  E(gs, R);
  var ns = function (a, b) {
      var c = !a.g;
      b.sessionId && (a.G = b.sessionId);
      b.embedInfo && ((a.i = new Oc(b.embedInfo)), (a.j = !0));
      a.v = !!b.blankNote;
      a.v ? (a.g && a.j && (a.o = a.g), (a.j = !1), (a.g = null)) : a.o && ((a.g = a.o), (a.j = !0), (a.o = null));
      if (b.savedNode && !a.v) {
        var d = Ec(b.savedNode);
        if (d.length) {
          a.g = new z(d[0]);
          for (var e = 1, f = void 0; (f = d[e]); e++) oo(a.g, new z(f));
          hs(a);
        }
      }
      a.g || ((a.g = is()), (a.l = ""), js(a));
      b.selectedText && Pc(a.g) && (Ro(a.g, Qc(a.g) + "\n\n" + b.selectedText), hs(a));
      if (b.imageUrl) {
        d = ks(a.g.g);
        e = Xi();
        if (Lc.test(b.imageUrl)) {
          if (((f = Mc(b.imageUrl)), !e.includes(f))) return;
        } else
          f = e.find(function (g) {
            return (ls[g] || []).some(function (h) {
              var l = b.imageUrl;
              h = "." + h;
              return 0 == ke(h, l.slice(l.length - h.length));
            });
          });
        if (f) {
          e = zm(f);
          e.l = b.imageUrl;
          Em(e, "l");
          if (!Yn(d)) throw Error("ca");
          d.h = e;
          ao(d);
          Un(d);
          oo(a.g, d);
        }
      }
      b.cachedUserInfo && a.h.update(b.cachedUserInfo);
      N(a, a.g);
      a.g.sa(a);
      c && y("speakMessage", ms);
      a.u.qa();
    },
    rs = function (a, b, c) {
      a.N = !0;
      a.A.X(a, "k", a.s).X(a.h, "F", a.s);
      try {
        c && !a.H && a.h.update(c),
          b &&
            (Bd(
              b,
              function (d) {
                this.g && os(this, this.g, d);
                ta(
                  this.F,
                  function (e, f, g) {
                    os(this, e, d);
                    e.i || (e.ga(), xa(g, f));
                  },
                  this
                );
              },
              a
            ),
            hs(a)),
          a.g && (ps(a), 0 != a.g.l || uo(a.g) ? qs(a) : a.j && a.i && (Vc(a.g, a.i) || qs(a))),
          a.u.qa();
      } catch (d) {
      } finally {
        a.A.listen(a, "k", a.s).listen(a.h, "F", a.s), a.D.clear(), (a.H = !1);
      }
    },
    os = function (a, b, c) {
      var d = c.id,
        e = c.parentId,
        f = b.getChildren()[d];
      if (f)
        if (((e = Yn(f) && !f.R), ss(a, f, c), 0 != f.l)) {
          if ((f = b.s[d]))
            f.i && (ao(b, !0), Un(b)),
              Xn(f) && 0 == f.l && So(b, f.g, Sc(f)),
              b.Z.X(f, "k", b.yb),
              f.sa(null),
              (f.j = null),
              (f.Bb = !0),
              ic(b.s, d);
        } else e && f.R && y("uploadMediaRequest", no(f));
      else e == b.g && ((f = new z(c)), 0 == f.l && oo(b, f));
      b.g == d && (b == a.g && c.mergeConflict ? ((a.g = a.g.duplicate()), a.g.sa(a)) : ss(a, b, c));
    },
    ss = function (a, b, c) {
      if (a.D.has(b.g)) mo(b, c);
      else {
        if ((a = a.G && a.G == c.lastSavedSessionId)) (a = new Vh(c.timestamps)), (a = Wh(b.u) > Wh(a));
        a ? mo(b, c) : (b.update(c), b.F && (b.F.g = !1), (c = b.i), (b.i = !1), (b.ca = null), (b.wa = !1), c && b.dispatchEvent("p"));
      }
    },
    us = function (a) {
      var b = {},
        c = [];
      a.g && c.push.apply(c, ts(a.g));
      Bd(
        a.F,
        function (d) {
          c.push.apply(c, ts(d));
        },
        a
      );
      b.nodes = c;
      a.h.h && (b.userInfo = Kn(a.h));
      a.N && ((a.N = !1), a.D.clear(), (a.H = !1));
      return b;
    },
    vs = function (a, b, c) {
      c && (b = F(b, c));
      a.U.push(b);
    },
    ws = function (a, b) {
      if (a.g && (!b || a.g.ha())) {
        b = a.g;
        if (Wn(b)) {
          var c = new Rh(),
            d = 1 === b.ua;
          b.ua = 1;
          b.u.i = c;
          1 != d && (Xh(b.u, c), Un(b));
          b.o && ((c = b.o), (c.l = !0), c.dispatchEvent("k"), b.dispatchEvent("u"));
          b.notify();
        }
        a.F.push(a.g);
        a.g = null;
      }
    };
  gs.prototype.reset = function () {
    if (this.v || !this.j) if (((this.v = !1), (this.g = this.o))) (this.j = !0), (this.o = null);
    this.g || ((this.g = is()), this.i && ((this.j = !0), (this.l = ""), js(this)), N(this, this.g));
    if (this.i) {
      var a = Hc(this.g, this.i.Qa());
      a && this.i.update(a.g.g());
    }
    this.u.qa();
    this.g.sa(this);
  };
  var xs = function (a) {
      var b = V();
      b.j = a;
      b.g && (a || ps(b), js(b));
      b.u.qa();
    },
    ys = function (a) {
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
    qs = function (a) {
      a.g = null;
      a.dispatchEvent("H");
    },
    js = function (a) {
      a.g && (a.j && a.i ? Ro(a.g, a.i.Qa() + (a.l ? "\n\n" : "") + a.l) : Ro(a.g, a.l));
    },
    hs = function (a) {
      if (a.g && Pc(a.g)) {
        var b = Qc(a.g);
        if (a.i && a.j) {
          var c = zs.exec(b);
          if (c) {
            var d = b.substring(c[0].length);
            a.l = !c[2] && d ? b : d;
          } else a.l = b;
        } else a.l = b;
      }
    },
    is = function () {
      var a = {};
      a.id = Tn() + ".fce";
      a.type = "NOTE";
      a.sortValue = Zn;
      a = new z(a);
      var b = {};
      b.id = Tn() + ".fce";
      b.type = "LIST_ITEM";
      b.parentId = a.g;
      oo(a, new z(b));
      return a;
    },
    ks = function (a) {
      var b = {};
      b.id = Tn() + ".fce";
      b.type = "BLOB";
      b.parentId = a;
      return new z(b);
    },
    ts = function (a) {
      var b = [];
      a.i && b.push(no(a));
      x(a.getChildren(), function (c) {
        c.i && b.push(no(c));
      });
      return b;
    },
    ps = function (a) {
      if (!a.j && a.i && a.g) {
        var b = Hc(a.g, a.i.Qa());
        b && ((a = a.g), a.B.remove(b) && (ao(a), Un(a)));
      }
    };
  gs.prototype.ba = function () {
    Bd(this.U, function (b) {
      b();
    });
    if (!this.R) {
      var a = Date.now();
      3e4 < a - this.S && (Ti(bd(), "n_ecmv3m") ? this.Z.log(9211) : y("impression", 9211), (this.S = a));
    }
  };
  gs.prototype.s = function (a) {
    a.target instanceof z && a.target.i && this.D.add(a.target.g);
    a.target == this.h && this.h.h && (this.H = !0);
    this.u.qa();
  };
  var V = function () {
      return yh(gs);
    },
    zs = RegExp(
      "^(?:(https?|ftp)://)?[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+(?:[\\.][\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+)*\\.(?:(?:xn--)*[a-zA-Z0-9]{2,63})(?:[\\.]?[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+(?:[\\.]*[\\w~#-\\-\\/-@!\\[\\]\u0080-\u00ff\u0100-\u017f\u0180-\u024f\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0e00-\u0e7f\u4e00-\u9fff\uac00-\ud7af]+)*)?(\n*)",
      "i"
    ),
    ms = chrome.i18n.getMessage("6175061706159277390"),
    ls = { "image/jpeg": ["jpg", "jpeg"], "image/png": ["png"], "image/gif": ["gif"], "image/webp": ["webp"] };
  var As = function () {
    M.call(this);
    this.h = new iq(this.i, 50, this);
    vs(V(), this.g, this);
  };
  E(As, M);
  As.prototype.i = function () {
    var a = V();
    a.B && ys(a) && y("syncRequest", us(a));
  };
  As.prototype.g = function () {
    this.h.Bc();
  };
  var Bs = function () {
    this.g = {};
    this.g.keepRequestParam = {};
    this.g.keepRequestParam.clientNamespace = {};
    this.g.keepRequestParam.clientNamespace.clientId = "KEEP";
  };
  var Cs = function (a) {
    this.g = null;
    a && this.update(a);
  };
  Cs.prototype.update = function (a) {
    this.g = a.id || null;
  };
  var Ds = function (a) {
    var b = {};
    a.g && (b.id = a.g);
    return b;
  };
  var Es = function () {
    this.g = {};
  };
  var Fs = function (a, b) {
    this.H = new Cs(a ? a[this.wb()] : void 0);
    this.G = b ? new Es() : null;
  };
  Fs.prototype.va = function () {
    var a = {};
    this.H.g && (a[this.wb()] = Ds(this.H));
    return a;
  };
  var Gs = function (a) {
    Fs.call(this, a);
    this.g = "";
    a && this.update(a);
  };
  E(Gs, Fs);
  Gs.prototype.wb = function () {
    return "id";
  };
  Gs.prototype.update = function (a) {
    this.g = a.name || "";
  };
  Gs.prototype.va = function () {
    var a = Fs.prototype.va.call(this);
    a.name = this.g;
    return a;
  };
  Gs.prototype.ka = function () {
    return this.g;
  };
  var Hs = function (a) {
    Fs.call(this, a, !0);
    this.i = "";
    this.j = !1;
    this.g = void 0;
    this.h = new Cs();
    a && this.update(a);
  };
  E(Hs, Fs);
  Hs.prototype.wb = function () {
    return "listItemId";
  };
  Hs.prototype.update = function (a) {
    this.i = a.text || "";
    this.j = !!a.checked;
    void 0 !== a.sortValue ? (this.g = Ig(a.sortValue)) : (this.g = void 0);
    void 0 !== a.parentListItemId ? this.h.update(a.parentListItemId) : (this.h.g = null);
  };
  Hs.prototype.va = function () {
    var a = Fs.prototype.va.call(this);
    a.text = this.i;
    a.checked = this.j;
    void 0 !== this.g && (a.sortValue = this.g);
    this.h.g && (a.parentListItemId = Ds(this.h));
    return a;
  };
  var Is = function () {
    this.g = [];
  };
  k = Is.prototype;
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
      return !(a instanceof Fs) || !0;
    });
  };
  k.getAll = function () {
    return this.g.slice();
  };
  var Js = function (a) {
    R.call(this);
    this.g = new Is();
    a && this.update(a);
  };
  E(Js, R);
  Js.prototype.update = function (a) {
    var b = this;
    this.g.clear();
    Bd(a.listItems || [], function (c) {
      b.g.add(new Hs(c));
    });
  };
  var Ks = function (a) {
    a && this.update(a);
  };
  Ks.prototype.update = function () {};
  var Ls = function (a) {
    this.h = "";
    this.g = this.i = null;
    a && this.update(a);
  };
  Ls.prototype.update = function (a) {
    this.h = a.temporaryUrl || "";
    this.g = a.height || null;
    this.i = a.width || null;
  };
  Ls.prototype.setHeight = function (a) {
    this.g = a;
  };
  var Ms = function (a) {
    Fs.call(this, a);
    this.g = null;
    this.h = "UNKNOWN_MEDIA_ITEM_TYPE";
    this.i = "";
    a && this.update(a);
  };
  E(Ms, Fs);
  Ms.prototype.wb = function () {
    return "mediaId";
  };
  Ms.prototype.update = function (a) {
    a.imageAttributes ? (this.g = new Ls(a.imageAttributes)) : (this.g = null);
    a.drawingAttributes && new Ks(a.drawingAttributes);
    this.i = a.temporaryUrl || "";
    this.h = a.type || "UNKNOWN_MEDIA_ITEM_TYPE";
  };
  Ms.prototype.va = function () {
    var a = Fs.prototype.va.call(this);
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
  Ms.prototype.getType = function () {
    return this.h;
  };
  var Ns = function (a) {
    this.g = "";
    a && this.update(a);
  };
  Ns.prototype.update = function (a) {
    this.g = a.eventId || "";
  };
  var Os = function (a) {
    this.g = "";
    a && this.update(a);
  };
  Os.prototype.update = function (a) {
    this.g = a.serverPermId || "";
  };
  var Ps = function (a) {
    this.i = this.h = this.g = this.l = this.j = "";
    a && this.update(a);
  };
  Ps.prototype.update = function (a) {
    this.j = a.originalUri || "";
    this.l = a.sanitizedUri || "";
    this.g = a.title || "";
    this.h = a.description || "";
    this.i = a.imageUri || "";
  };
  var Qs = function (a) {
    var b = {};
    b.originalUri = a.j;
    b.sanitizedUri = a.l;
    b.title = a.g;
    b.description = a.h;
    b.imageUri = a.i;
    return b;
  };
  Ps.prototype.getTitle = function () {
    return this.g;
  };
  Ps.prototype.setTitle = function (a) {
    this.g = a;
  };
  var Rs = function (a) {
    this.h = this.i = this.g = null;
    a && this.update(a);
  };
  Rs.prototype.update = function (a) {
    a.uriInfo ? (this.g ? this.g.update(a.uriInfo) : (this.g = new Ps(a.uriInfo))) : (this.g = null);
    a.gmailMetadata ? (this.i ? this.i.update(a.gmailMetadata) : (this.i = new Os(a.gmailMetadata))) : (this.i = null);
    a.calendarMetadata ? (this.h ? this.h.update(a.calendarMetadata) : (this.h = new Ns(a.calendarMetadata))) : (this.h = null);
  };
  var Ss = function (a) {
    Fs.call(this, a);
    this.g = this.h = null;
    a && this.update(a);
  };
  E(Ss, Fs);
  Ss.prototype.wb = function () {
    return "metadataId";
  };
  Ss.prototype.update = function (a) {
    a.uriInfo
      ? ((this.h = null), this.g ? this.g.update(a.uriInfo) : (this.g = new Ps(a.uriInfo)))
      : a.associatedContent && ((this.g = null), this.h ? this.h.update(a.associatedContent) : (this.h = new Rs(a.associatedContent)));
  };
  Ss.prototype.va = function () {
    var a = Fs.prototype.va.call(this);
    if (this.g) a.uriInfo = Qs(this.g);
    else if (this.h) {
      var b = this.h,
        c = {};
      b.g && (c.uriInfo = Qs(b.g));
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
  var Ts = function (a) {
    this.g = "";
    this.h = a;
  };
  Ts.prototype.update = function (a) {
    this.g = a.text || "";
  };
  var Us = function (a, b) {
    a.g != b && ((a.g = b), a.h());
  };
  var Vs = function (a) {
    a && this.update(a);
  };
  Vs.prototype.update = function () {};
  var Ws = function (a) {
    Fs.call(this, a, !0);
    this.h = this.g = null;
    this.i = "";
    this.F = this.D = this.B = !1;
    this.A = "DEFAULT";
    this.j = void 0;
    this.o = new Is();
    this.v = new Is();
    this.l = new Is();
    this.s = new Is();
    this.u = null;
    a && this.update(a);
  };
  E(Ws, Fs);
  k = Ws.prototype;
  k.wb = function () {
    return "noteId";
  };
  k.update = function (a) {
    var b = this;
    a.textNote
      ? ((this.h = null), this.g || Xs(this), this.g.update(a.textNote))
      : a.listNote && ((this.g = null), this.h ? this.h.update(a.listNote) : (this.h = new Js(a.listNote)));
    this.i = a.title || "";
    this.B = !!a.isArchived;
    this.D = !!a.isPinned;
    this.F = !!a.isTrashed;
    this.A = a.color || "DEFAULT";
    void 0 !== a.sortValue ? (this.j = Ig(a.sortValue)) : (this.j = void 0);
    this.o.clear();
    Bd(a.mediaItem || [], function (c) {
      b.o.add(new Ms(c));
    });
    this.l.clear();
    Bd(a.label || [], function (c) {
      b.l.add(new Gs(c));
    });
    this.v.clear();
    Bd(a.user || [], function (c) {
      b.v.add(new Vs(c));
    });
    this.s.clear();
    Bd(a.metadata || [], function (c) {
      b.s.add(new Ss(c));
    });
  };
  k.va = function () {
    var a = Fs.prototype.va.call(this);
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
  var Xs = function (a) {
    a.u ||
      (a.u = F(function () {
        this.G.g.TEXT = !0;
      }, a));
    a.g = new Ts(a.u);
    a.h = null;
  };
  var Ys = function (a, b) {
    this.h = a;
    this.g = b;
  };
  var Zs = function () {
    this.g = [];
    this.h = [];
  };
  Zs.prototype.enqueue = function (a) {
    this.h.push(a);
  };
  var $s = function (a) {
    0 === a.g.length && ((a.g = a.h), a.g.reverse(), (a.h = []));
    return a.g.pop();
  };
  k = Zs.prototype;
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
  var at = function (a, b) {
    this.g = a[n.Symbol.iterator]();
    this.h = b;
  };
  at.prototype[Symbol.iterator] = function () {
    return this;
  };
  at.prototype.next = function () {
    var a = this.g.next();
    return { value: a.done ? void 0 : this.h.call(void 0, a.value), done: a.done };
  };
  var bt = function (a, b) {
    return new at(a, b);
  };
  var ct = function () {};
  ct.prototype.next = function () {
    return dt;
  };
  var dt = { done: !0, value: void 0 };
  ct.prototype.Ta = function () {
    return this;
  };
  var ht = function (a) {
      if (a instanceof et || a instanceof ft || a instanceof gt) return a;
      if ("function" == typeof a.next)
        return new et(function () {
          return a;
        });
      if ("function" == typeof a[Symbol.iterator])
        return new et(function () {
          return a[Symbol.iterator]();
        });
      if ("function" == typeof a.Ta)
        return new et(function () {
          return a.Ta();
        });
      throw Error("ja");
    },
    et = function (a) {
      this.g = a;
    };
  et.prototype.Ta = function () {
    return new ft(this.g());
  };
  et.prototype[Symbol.iterator] = function () {
    return new gt(this.g());
  };
  et.prototype.h = function () {
    return new gt(this.g());
  };
  var ft = function (a) {
    this.g = a;
  };
  E(ft, ct);
  ft.prototype.next = function () {
    return this.g.next();
  };
  ft.prototype[Symbol.iterator] = function () {
    return new gt(this.g);
  };
  ft.prototype.h = function () {
    return new gt(this.g);
  };
  var gt = function (a) {
    et.call(this, function () {
      return a;
    });
    this.i = a;
  };
  E(gt, et);
  gt.prototype.next = function () {
    return this.i.next();
  };
  var it = function (a, b) {
    this.h = {};
    this.g = [];
    this.i = this.size = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("B");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else if (a)
      if (a instanceof it) for (c = a.Ea(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
      else for (d in a) this.set(d, a[d]);
  };
  k = it.prototype;
  k.W = function () {
    return this.size;
  };
  k.ja = function () {
    jt(this);
    for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
    return a;
  };
  k.Ea = function () {
    jt(this);
    return this.g.concat();
  };
  k.has = function (a) {
    return kt(this.h, a);
  };
  k.Xa = function (a) {
    for (var b = 0; b < this.g.length; b++) {
      var c = this.g[b];
      if (kt(this.h, c) && this.h[c] == a) return !0;
    }
    return !1;
  };
  k.V = function (a) {
    if (this === a) return !0;
    if (this.size != a.W()) return !1;
    var b = lt;
    jt(this);
    for (var c, d = 0; (c = this.g[d]); d++) if (!b(this.get(c), a.get(c))) return !1;
    return !0;
  };
  var lt = function (a, b) {
    return a === b;
  };
  it.prototype.ha = function () {
    return 0 == this.size;
  };
  it.prototype.clear = function () {
    this.h = {};
    this.i = this.size = this.g.length = 0;
  };
  it.prototype.remove = function (a) {
    return this.delete(a);
  };
  it.prototype.delete = function (a) {
    return kt(this.h, a) ? (delete this.h[a], --this.size, this.i++, this.g.length > 2 * this.size && jt(this), !0) : !1;
  };
  var jt = function (a) {
    if (a.size != a.g.length) {
      for (var b = 0, c = 0; b < a.g.length; ) {
        var d = a.g[b];
        kt(a.h, d) && (a.g[c++] = d);
        b++;
      }
      a.g.length = c;
    }
    if (a.size != a.g.length) {
      var e = {};
      for (c = b = 0; b < a.g.length; ) (d = a.g[b]), kt(e, d) || ((a.g[c++] = d), (e[d] = 1)), b++;
      a.g.length = c;
    }
  };
  k = it.prototype;
  k.get = function (a, b) {
    return kt(this.h, a) ? this.h[a] : b;
  };
  k.set = function (a, b) {
    kt(this.h, a) || ((this.size += 1), this.g.push(a), this.i++);
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
    return new it(this);
  };
  k.keys = function () {
    return ht(this.Ta(!0)).h();
  };
  k.values = function () {
    return ht(this.Ta(!1)).h();
  };
  k.entries = function () {
    var a = this;
    return bt(this.keys(), function (b) {
      return [b, a.get(b)];
    });
  };
  k.Ta = function (a) {
    jt(this);
    var b = 0,
      c = this.i,
      d = this,
      e = new ct();
    e.next = function () {
      if (c != d.i) throw Error("ka");
      if (b >= d.g.length) return dt;
      var f = d.g[b++];
      return { value: a ? f : d.h[f], done: !1 };
    };
    return e;
  };
  var kt = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  var mt = function (a) {
      this.g = new it();
      this.size = 0;
      if (a) {
        a = mi(a);
        for (var b = a.length, c = 0; c < b; c++) this.add(a[c]);
        this.size = this.g.size;
      }
    },
    nt = function (a) {
      var b = typeof a;
      return ("object" == b && a) || "function" == b ? "o" + gd(a) : b.charAt(0) + a;
    };
  k = mt.prototype;
  k.W = function () {
    return this.g.size;
  };
  k.add = function (a) {
    this.g.set(nt(a), a);
    this.size = this.g.size;
  };
  k.removeAll = function (a) {
    a = mi(a);
    for (var b = a.length, c = 0; c < b; c++) this.remove(a[c]);
    this.size = this.g.size;
  };
  k.delete = function (a) {
    a = this.g.remove(nt(a));
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
    a = nt(a);
    return b.has(a);
  };
  k.contains = function (a) {
    var b = this.g;
    a = nt(a);
    return b.has(a);
  };
  k.ja = function () {
    return this.g.ja();
  };
  k.values = function () {
    return this.g.values();
  };
  k.clone = function () {
    return new mt(this);
  };
  k.V = function (a) {
    return this.W() == li(a) && ot(this, a);
  };
  var ot = function (a, b) {
    var c = li(b);
    if (a.W() > c) return !1;
    !(b instanceof mt) && 5 < c && (b = new mt(b));
    return oi(a, function (d) {
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
  mt.prototype.Ta = function () {
    return this.g.Ta(!1);
  };
  mt.prototype[Symbol.iterator] = function () {
    return this.values();
  };
  var pt = function (a, b) {
    M.call(this);
    this.s = a || 0;
    this.i = b || 10;
    if (this.s > this.i) throw Error("la");
    this.g = new Zs();
    this.h = new mt();
    this.delay = 0;
    this.lastAccess = null;
    this.dc();
  };
  G(pt, M);
  pt.prototype.Zb = function () {
    var a = Date.now();
    if (!(null != this.lastAccess && a - this.lastAccess < this.delay)) {
      for (var b; 0 < this.g.W() && ((b = $s(this.g)), !this.ed(b)); ) this.dc();
      !b && this.W() < this.i && (b = this.l());
      b && ((this.lastAccess = a), this.h.add(b));
      return b;
    }
  };
  pt.prototype.Jb = function (a) {
    this.h.remove(a);
    this.ed(a) && this.W() < this.i ? this.g.enqueue(a) : qt(a);
  };
  pt.prototype.dc = function () {
    for (var a = this.g; this.W() < this.s; ) a.enqueue(this.l());
    for (; this.W() > this.i && 0 < this.g.W(); ) qt($s(a));
  };
  pt.prototype.l = function () {
    return {};
  };
  var qt = function (a) {
    if ("function" == typeof a.ga) a.ga();
    else for (var b in a) a[b] = null;
  };
  k = pt.prototype;
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
    pt.O.K.call(this);
    if (0 < this.h.W()) throw Error("ma");
    delete this.h;
    for (var a = this.g; !a.ha(); ) qt($s(a));
    delete this.g;
  };
  var rt = function (a, b) {
    this.g = a;
    this.ea = b;
  };
  rt.prototype.aa = function () {
    return this.ea;
  };
  rt.prototype.clone = function () {
    return new rt(this.g, this.ea);
  };
  var st = function (a) {
      this.g = [];
      if (a)
        a: {
          if (a instanceof st) {
            var b = a.Ea();
            a = a.ja();
            if (0 >= this.W()) {
              for (var c = this.g, d = 0; d < b.length; d++) c.push(new rt(b[d], a[d]));
              break a;
            }
          } else (b = ec(a)), (a = dc(a));
          for (c = 0; c < b.length; c++) tt(this, b[c], a[c]);
        }
    },
    tt = function (a, b, c) {
      var d = a.g;
      d.push(new rt(b, c));
      b = d.length - 1;
      a = a.g;
      for (c = a[b]; 0 < b; )
        if (((d = (b - 1) >> 1), a[d].g > c.g)) (a[b] = a[d]), (b = d);
        else break;
      a[b] = c;
    };
  k = st.prototype;
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
    return new st(this);
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
  var ut = function () {
    st.apply(this, arguments);
  };
  E(ut, st);
  ut.prototype.enqueue = function (a, b) {
    tt(this, a, b);
  };
  var vt = function (a, b) {
    this.o = void 0;
    this.j = new ut();
    pt.call(this, a, b);
  };
  G(vt, pt);
  k = vt.prototype;
  k.Zb = function (a, b) {
    if (!a) return (a = vt.O.Zb.call(this)) && this.delay && (this.o = n.setTimeout(F(this.mc, this), this.delay)), a;
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
    vt.O.Jb.call(this, a);
    this.mc();
  };
  k.dc = function () {
    vt.O.dc.call(this);
    this.mc();
  };
  k.K = function () {
    vt.O.K.call(this);
    n.clearTimeout(this.o);
    this.j.clear();
    this.j = null;
  };
  var wt = function (a, b, c, d) {
    this.u = a;
    this.v = !!d;
    vt.call(this, b, c);
  };
  G(wt, vt);
  wt.prototype.l = function () {
    var a = new qq(),
      b = this.u;
    b &&
      b.forEach(function (c, d) {
        a.headers.set(d, c);
      });
    this.v && (a.i = !0);
    return a;
  };
  wt.prototype.ed = function (a) {
    return !a.pa && !a.isActive();
  };
  var xt = function (a, b, c, d, e, f) {
    R.call(this);
    this.j = void 0 !== a ? a : 1;
    this.l = void 0 !== e ? Math.max(0, e) : 0;
    this.o = !!f;
    this.h = new wt(b, c, d, f);
    this.g = new it();
    this.i = new U(this);
  };
  G(xt, R);
  var yt = "ready complete success error abort timeout".split(" ");
  xt.prototype.send = function (a, b, c, d, e, f, g, h, l, m) {
    if (this.g.get(a)) throw Error("na");
    b = new zt(b, F(this.u, this, a), c, d, e, g, void 0 !== h ? h : this.j, l, void 0 !== m ? m : this.o);
    this.g.set(a, b);
    a = F(this.s, this, a);
    this.h.Zb(a, f);
    return b;
  };
  xt.prototype.abort = function (a, b) {
    var c = this.g.get(a);
    if (c) {
      var d = c.zc;
      c.Ud = !0;
      b &&
        (d &&
          (this.i.X(d, yt, c.kd),
          vj(
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
  xt.prototype.s = function (a, b) {
    var c = this.g.get(a);
    c && !c.zc
      ? (this.i.listen(b, yt, c.kd),
        (b.l = Math.max(0, this.l)),
        (b.o = c.ee()),
        (b.i = c.fe()),
        (c.zc = b),
        this.dispatchEvent(new At("ready", this, a, b)),
        Bt(this, a, b),
        c.Ud && b.abort())
      : ((a = this.h), a.h.remove(b) && a.Jb(b));
  };
  xt.prototype.u = function (a, b) {
    var c = b.target;
    switch (b.type) {
      case "ready":
        Bt(this, a, c);
        break;
      case "complete":
        a: {
          var d = this.g.get(a);
          if (7 == c.j || Bq(c) || d.ec > d.Cc)
            if ((this.dispatchEvent(new At("complete", this, a, c)), d && ((d.ae = !0), d.Zd))) {
              a = d.Zd.call(c, b);
              break a;
            }
          a = null;
        }
        return a;
      case "success":
        this.dispatchEvent(new At("success", this, a, c));
        break;
      case "timeout":
      case "error":
        b = this.g.get(a);
        b.ec > b.Cc && this.dispatchEvent(new At("error", this, a, c));
        break;
      case "abort":
        this.dispatchEvent(new At("abort", this, a, c));
    }
    return null;
  };
  var Bt = function (a, b, c) {
    var d = a.g.get(b);
    !d || d.ae || d.ec > d.Cc
      ? (d && (a.i.X(c, yt, d.kd), a.g.remove(b)), (a = a.h), a.h.remove(c) && a.Jb(c))
      : (d.ec++, c.send(d.Qa(), d.ag, d.getContent(), d.bf));
  };
  xt.prototype.K = function () {
    xt.O.K.call(this);
    this.h.ga();
    this.h = null;
    this.i.ga();
    this.i = null;
    this.g.clear();
    this.g = null;
  };
  var At = function (a, b, c, d) {
    gj.call(this, a, b);
    this.id = c;
    this.zc = d;
  };
  G(At, gj);
  var zt = function (a, b, c, d, e, f, g, h, l) {
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
  zt.prototype.Qa = function () {
    return this.i;
  };
  zt.prototype.getContent = function () {
    return this.g;
  };
  zt.prototype.fe = function () {
    return this.j;
  };
  zt.prototype.ee = function () {
    return this.h;
  };
  var Ct = function (a) {
      this.h = new xt();
      this.i = new Bs();
      this.j = a;
      this.g = null;
    },
    Gt = function (a, b) {
      var c = {};
      c.label = { id: { id: b.g }, name: b.ka() };
      Dt(a, "create_label_req" + b.g, Et, c, Ft(a), function () {
        !a.h.g.W() && a.g && a.g();
      });
    },
    It = function (a, b, c, d, e) {
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
          return new Gs({ id: { id: l } }).va();
        }));
      var g = Ft(a),
        h = "create_note_req" + Date.now();
      b = function () {
        Dt(a, h, Ht, f, g, function (l) {
          l = l.target;
          if (Bq(l)) {
            var m = Cq(l).note.noteId.id;
            e(l.getStatus(), m);
          } else (a.g = null), e(l.getStatus());
        });
      };
      a.h.g.W() ? (a.g = b) : b();
    },
    Lt = function (a, b) {
      Dt(a, "list_labels_req" + Date.now(), Jt, kc(a.i.g), Ft(a), function (c) {
        return Kt(c, b);
      });
    },
    Kt = function (a, b) {
      a = a.target;
      if (Bq(a)) {
        var c = Cq(a);
        c.label
          ? ((c = c.label.map(function (d) {
              var e = {};
              return (e.name = d.name), (e.mainId = d.id.id), e;
            })),
            b(a.getStatus(), c))
          : b(a.getStatus());
      } else b(a.getStatus());
    },
    Dt = function (a, b, c, d, e, f) {
      a.h.send(b, c, "POST", JSON.stringify(d), e, void 0, function (g) {
        f(g);
      });
    },
    Ft = function (a) {
      return { Authorization: "Bearer " + a.j.g, "Content-Type": "application/json" };
    },
    Mt = Ui("n_fpae"),
    Et = Mt + "/v1/labels:create",
    Ht = Mt + "/v1/notes:create",
    Jt = Mt + "/v1/labels:list";
  var Nt = {},
    Ot = function () {
      throw Error("oa");
    };
  Ot.prototype.Pc = null;
  Ot.prototype.getContent = function () {
    return this.content;
  };
  Ot.prototype.toString = function () {
    return this.content;
  };
  Ot.prototype.Ae = function () {
    if (this.Qc !== Nt) throw Error("pa");
    return Cg(this.toString());
  };
  var Pt = function () {
    Ot.call(this);
  };
  G(Pt, Ot);
  Pt.prototype.Qc = Nt;
  var Qt = function (a) {
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
    Ut = function (a) {
      return null != a && a.Qc === Nt ? a : a instanceof xd ? Rt(Bg(a).toString()) : Rt(String(String(a)).replace(St, Tt), Qt(a));
    },
    Rt = (function (a) {
      function b(c) {
        this.content = c;
      }
      b.prototype = a.prototype;
      return function (c, d) {
        c = new b(String(c));
        void 0 !== d && (c.Pc = d);
        return c;
      };
    })(Pt),
    Vt = (function (a) {
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
    })(Pt),
    W = function (a) {
      if (null != a && a.Qc === Nt) {
        var b = String;
        a = a.getContent();
        a = String(a).replace(Wt, "").replace(Xt, "&lt;");
        b = b(a).replace(Yt, Tt);
      } else b = String(a).replace(St, Tt);
      return b;
    },
    Zt = {
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
    Tt = function (a) {
      return Zt[a];
    },
    St = /[\x00\x22\x26\x27\x3c\x3e]/g,
    Yt = /[\x00\x22\x27\x3c\x3e]/g,
    Wt = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    Xt = /</g;
  var pd = {};
  var au = function (a) {
      a = a || {};
      return $t(a.Xd, a.content, a.hk);
    },
    $t = function (a, b, c) {
      return Rt(
        '<div role="button" class="' +
          W("Q0hgme-LgbsSe") +
          (a ? " " + W(a) : "") +
          '" tabindex="0"' +
          (c ? ' aria-describedby="' + W(c) + '"' : "") +
          ">" +
          Ut(null != b ? b : "") +
          "</div>"
      );
    },
    cu = function (a) {
      a = a || {};
      return bu(a.Xd, a.lk);
    },
    bu = function (a, b) {
      return Rt($t("Q0hgme-Bz112c-LgbsSe" + (b ? " OAU7Vd-LgbsSe" : "") + (a ? " " + a : ""), Vt("" + (b ? Ut(b) : ""))));
    },
    eu = function (a) {
      a = a || {};
      return du(a.text, a.Xd);
    },
    du = function (a, b) {
      return Rt($t("Q0hgme-fmcmS-LgbsSe" + (b ? " " + b : ""), Vt("" + Ut(null != a ? a : ""))));
    },
    gu = function (a, b) {
      return Rt(
        '<div class="' +
          W("Q0hgme-n5T17d-woLtV") +
          (a ? " " + W(a) : "") +
          (b ? " " + W(b) : "") +
          '">' +
          fu("v3pZbf") +
          fu("oq6NAc") +
          fu("gS7Ybc") +
          fu("nllRtd") +
          "</div>"
      );
    },
    fu = function (a) {
      return Rt(
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
    hu = function (a) {
      a = a.Xf;
      return Rt(
        '<div class="' +
          W("Q0hgme-vDaB1c") +
          (a ? "" : " " + W("JLm1tf-uLBfYd")) +
          '" role="alertdialog"><div class="' +
          W("Q0hgme-vDaB1c-Ne3sFf") +
          '"></div>' +
          du(void 0, "Q0hgme-vDaB1c-JIbuQc fmcmS-LgbsSe-to915-Ia7Qfc") +
          gu("CZjX4e") +
          (a ? bu("Q0hgme-vDaB1c-IYtByb Bz112c-LgbsSe-to915-xJ5Hnf") : "") +
          "</div>"
      );
    },
    iu = function () {
      return Rt(
        '<div role="tooltip" class="' +
          W("Q0hgme-suEOdc") +
          '"><div class="' +
          W("suEOdc-AHe6Kc") +
          '"></div><div class="' +
          W("suEOdc-bN97Pc") +
          '"></div></div>'
      );
    };
  var ju = function () {
      return Rt('<div class="' + W("rymPhb-qJTHM") + '"><div class="' + W("rymPhb-PntVL") + '"></div></div>');
    },
    ku = function () {
      return Rt(
        '<div class="' +
          W("rymPhb-ibnC6b") +
          '"><div class="' +
          W("Q0hgme-MPu53c") +
          '"></div><label class="' +
          W("rymPhb-ibnC6b-fmcmS") +
          '"></label></div>'
      );
    },
    lu = function () {
      return Rt(
        '<div class="' +
          W("h1U9Be-V67aGc") +
          '"><label class="' +
          W("h1U9Be-V67aGc-V1ur5d") +
          '"></label>' +
          bu("h1U9Be-V67aGc-VkLyEc") +
          "</div>"
      );
    },
    mu = function () {
      return Rt(
        '<div class="' +
          W("HiaYvf-n0tgWb") +
          '"><img class="' +
          W("HiaYvf-SmKAyb") +
          '" crossorigin><div class="' +
          W("Yygnk-jOfkMb") +
          '"></div>' +
          bu("HiaYvf-VkLyEc") +
          "</div>"
      );
    };
  var nu = function () {
    var a = '<div class="' + W("mKZypf-bEDTcc-bF1uUb") + '"><label class="' + W("mKZypf-bEDTcc-EglORb") + '">',
      b = chrome.i18n.getMessage.apply(
        null,
        ["733701029503338559", []].concat(79 <= (/Chrome\/(\d+)/.exec(navigator.userAgent) || [])[1] ? [{ escapeLt: !0 }] : [])
      );
    a = a + b + "</label>";
    b = chrome.i18n.getMessage("5207635742003539443");
    a += du(b, " fmcmS-LgbsSe-to915-Ia7Qfc mKZypf-bEDTcc-LgbsSe ");
    return Rt(a + "</div>");
  };
  var ou = function (a) {
      return "string" == typeof a.className ? a.className : (a.getAttribute && a.getAttribute("class")) || "";
    },
    pu = function (a) {
      return a.classList ? a.classList : ou(a).match(/\S+/g) || [];
    },
    qu = function (a, b) {
      "string" == typeof a.className ? (a.className = b) : a.setAttribute && a.setAttribute("class", b);
    },
    ru = function (a, b) {
      return a.classList ? a.classList.contains(b) : va(pu(a), b);
    },
    su = function (a, b) {
      if (a.classList) a.classList.add(b);
      else if (!ru(a, b)) {
        var c = ou(a);
        qu(a, c + (0 < c.length ? " " + b : b));
      }
    },
    tu = function (a, b) {
      if (a.classList)
        Array.prototype.forEach.call(b, function (e) {
          su(a, e);
        });
      else {
        var c = {};
        Array.prototype.forEach.call(pu(a), function (e) {
          c[e] = !0;
        });
        Array.prototype.forEach.call(b, function (e) {
          c[e] = !0;
        });
        b = "";
        for (var d in c) b += 0 < b.length ? " " + d : d;
        qu(a, b);
      }
    },
    uu = function (a, b) {
      a.classList
        ? a.classList.remove(b)
        : ru(a, b) &&
          qu(
            a,
            Array.prototype.filter
              .call(pu(a), function (c) {
                return c != b;
              })
              .join(" ")
          );
    },
    vu = function (a, b) {
      a.classList
        ? Array.prototype.forEach.call(b, function (c) {
            uu(a, c);
          })
        : qu(
            a,
            Array.prototype.filter
              .call(pu(a), function (c) {
                return !va(b, c);
              })
              .join(" ")
          );
    },
    wu = function (a, b, c) {
      c ? su(a, b) : uu(a, b);
    };
  var xu = function (a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d;
  };
  k = xu.prototype;
  k.clone = function () {
    return new xu(this.top, this.right, this.bottom, this.left);
  };
  k.contains = function (a) {
    return this && a
      ? a instanceof xu
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
  var yu = function (a, b) {
      var c = Wg(a);
      return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null))
        ? a[b] || a.getPropertyValue(b) || ""
        : "";
    },
    zu = function (a, b) {
      return yu(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || (a.style && a.style[b]);
    },
    Bu = function (a, b, c) {
      if (b instanceof Sg) {
        var d = b.x;
        b = b.y;
      } else (d = b), (b = c);
      a.style.left = Au(d, !1);
      a.style.top = Au(b, !1);
    },
    Cu = function (a) {
      try {
        return a.getBoundingClientRect();
      } catch (b) {
        return { left: 0, top: 0, right: 0, bottom: 0 };
      }
    },
    Du = function (a) {
      if (H && !(8 <= Number(af))) return a.offsetParent;
      var b = Wg(a),
        c = zu(a, "position"),
        d = "fixed" == c || "absolute" == c;
      for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (
          (11 == a.nodeType && a.host && (a = a.host),
          (c = zu(a, "position")),
          (d = d && "static" == c && a != b.documentElement && a != b.body),
          !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
        )
          return a;
      return null;
    },
    Fu = function (a) {
      for (var b = new xu(0, Infinity, Infinity, 0), c = qd(a), d = c.g.body, e = c.g.documentElement, f = bh(c.g); (a = Du(a)); )
        if (!((H && 0 == a.clientWidth) || (Ke && 0 == a.clientHeight && a == d)) && a != d && a != e && "visible" != zu(a, "overflow")) {
          var g = Eu(a),
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
    Eu = function (a) {
      var b = Wg(a),
        c = new Sg(0, 0);
      var d = b ? Wg(b) : document;
      d = !H || 9 <= Number(af) || $g(qd(d).g) ? d.documentElement : d.body;
      if (a == d) return c;
      a = Cu(a);
      b = dh(qd(b).g);
      c.x = a.left + b.x;
      c.y = a.top + b.y;
      return c;
    },
    Gu = function (a, b, c) {
      if (b instanceof Ug) (c = b.height), (b = b.width);
      else if (void 0 == c) throw Error("qa");
      a.style.width = Au(b, !0);
      a.style.height = Au(c, !0);
    },
    Au = function (a, b) {
      "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
      return a;
    },
    Iu = function (a) {
      var b = Hu;
      if ("none" != zu(a, "display")) return b(a);
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
    Hu = function (a) {
      var b = a.offsetWidth,
        c = a.offsetHeight,
        d = Ke && !b && !c;
      return (void 0 === b || d) && a.getBoundingClientRect ? ((a = Cu(a)), new Ug(a.right - a.left, a.bottom - a.top)) : new Ug(b, c);
    },
    X = function (a, b) {
      a.style.display = b ? "" : "none";
    },
    Ju = function (a) {
      return "rtl" == zu(a, "direction");
    },
    Ku = Je ? "MozUserSelect" : Ke || He ? "WebkitUserSelect" : null,
    Lu = function (a, b, c) {
      c = c ? null : a.getElementsByTagName("*");
      if (Ku) {
        if (((b = b ? "none" : ""), a.style && (a.style[Ku] = b), c)) {
          a = 0;
          for (var d; (d = c[a]); a++) d.style && (d.style[Ku] = b);
        }
      } else if (H && ((b = b ? "on" : ""), a.setAttribute("unselectable", b), c))
        for (a = 0; (d = c[a]); a++) d.setAttribute("unselectable", b);
    },
    Mu = { thin: 2, medium: 4, thick: 6 },
    Nu = function (a, b) {
      if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
      var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
      if (c in Mu) a = Mu[c];
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
  var Ou = function () {
    U.call(this);
    this.g = ud(iu);
    X(this.g, !1);
    qd().g.body.appendChild(this.g);
    this.B = Xg("suEOdc-bN97Pc", this.g);
    this.h = null;
    this.A = new iq(this.ig, 0, this);
    this.u = new iq(this.fg, 300, this);
    this.l = 250;
    this.v = new iq(this.dg, this.l, this);
    this.D = new Set();
    this.s = !0;
    this.o = !1;
  };
  E(Ou, U);
  k = Ou.prototype;
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
        uh(a, "label", d || b),
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
    a && !b && (lh(this.B, a), (a = "true" == this.h.getAttribute("tooltip-no-delay")), this.A.start(this.s && !a ? 250 : 0));
  };
  k.Yd = function () {
    this.h = null;
    this.A.stop();
    this.o &&
      ((this.o = !1),
      uu(this.g, "ti6hGc"),
      uu(this.g, "mhHukc-cGMI2b"),
      su(this.g, "ZYIfFd"),
      this.v.start(this.l),
      (this.s = !1),
      this.u.start());
  };
  k.ig = function () {
    if (this.h) {
      this.u.stop();
      this.v.stop();
      X(this.g, !0);
      if (this.h) {
        var a = Iu(this.g),
          b = Iu(this.h),
          c = Eu(this.h);
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
            wu(this.g, "mhHukc-qwU8Me", f),
            wu(this.g, "mhHukc-LK5yu", !f),
            vu(this.g, ["mhHukc-ma6Yeb", "mhHukc-cGMI2b"]))
          : ((d = c.y + b.height),
            (b = c.x + b.width / 2 - a.width / 2),
            (b = Math.max(0, Math.min(b, e - a.width))),
            (e = !0),
            d + a.height > f && ((d = c.y - a.height), (e = !1)),
            wu(this.g, "mhHukc-cGMI2b", e),
            wu(this.g, "mhHukc-ma6Yeb", !e),
            vu(this.g, ["mhHukc-LK5yu", "mhHukc-qwU8Me"]));
        this.g.style.top = d + "px";
        this.g.style.left = b + "px";
        this.g.setAttribute("content-width-32", Math.ceil(a.width / 32));
        this.l = Math.max(50, 250 - 25 * Math.ceil(a.width / 32));
      }
      uu(this.g, "ZYIfFd");
      su(this.g, "ti6hGc");
      this.o = !0;
    }
  };
  k.dg = function () {
    X(this.g, !1);
  };
  k.fg = function () {
    this.s = !0;
  };
  k.K = function () {
    this.g.remove();
  };
  Ou.L = function () {
    return yh(Ou);
  };
  var Ru = function (a, b, c, d, e, f) {
      if (Le && e) return Pu(a);
      if (e && !d) return !1;
      if (!Je) {
        "number" === typeof b && (b = Qu(b));
        var g = 17 == b || 18 == b || (Le && 91 == b);
        if (((!c || Le) && g) || (Le && 16 == b && (d || f))) return !1;
      }
      if ((Ke || He) && d && c)
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
          return !(Ke || He || Je);
      }
      return Je && (d || e || f) ? !1 : Pu(a);
    },
    Pu = function (a) {
      if ((48 <= a && 57 >= a) || (96 <= a && 106 >= a) || (65 <= a && 90 >= a) || ((Ke || He) && 0 == a)) return !0;
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
    Qu = function (a) {
      if (Je) a = Su(a);
      else if (Le && Ke)
        switch (a) {
          case 93:
            a = 91;
        }
      return a;
    },
    Su = function (a) {
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
  var Tu = function (a, b, c, d) {
    jj.call(this, d);
    this.type = "key";
    this.keyCode = a;
    this.l = b;
    this.repeat = c;
  };
  G(Tu, jj);
  var Uu = function (a, b) {
    R.call(this);
    a && this.attach(a, b);
  };
  G(Uu, R);
  k = Uu.prototype;
  k.sb = null;
  k.rc = null;
  k.Zc = null;
  k.sc = null;
  k.ra = -1;
  k.Ra = -1;
  k.Nc = !1;
  var Vu = {
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
    Wu = {
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
    Xu = Le && Je;
  k = Uu.prototype;
  k.cf = function (a) {
    if (Ke || He)
      if ((17 == this.ra && !a.ctrlKey) || (18 == this.ra && !a.altKey) || (Le && 91 == this.ra && !a.metaKey)) this.Ra = this.ra = -1;
    -1 == this.ra &&
      (a.ctrlKey && 17 != a.keyCode
        ? (this.ra = 17)
        : a.altKey && 18 != a.keyCode
        ? (this.ra = 18)
        : a.metaKey && 91 != a.keyCode && (this.ra = 91));
    Ru(a.keyCode, this.ra, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey)
      ? ((this.Ra = Qu(a.keyCode)), Xu && (this.Nc = a.altKey))
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
      (Ke || He) && "keypress" == a.type
        ? ((d = this.Ra), (e = 0 <= b.charCode && 63232 > b.charCode && Pu(d) ? b.charCode : 0))
        : ("keypress" == a.type
            ? (Xu && (c = this.Nc),
              b.keyCode == b.charCode
                ? 32 > b.keyCode
                  ? ((d = b.keyCode), (e = 0))
                  : ((d = this.Ra), (e = b.charCode))
                : ((d = b.keyCode || this.Ra), (e = b.charCode || 0)))
            : ((d = b.keyCode || this.Ra), (e = b.charCode || 0)),
          Le && 63 == e && 224 == d && (d = 191));
    var f = (d = Qu(d));
    d
      ? 63232 <= d && d in Vu
        ? (f = Vu[d])
        : 25 == d && a.shiftKey && (f = 9)
      : b.keyIdentifier && b.keyIdentifier in Wu && (f = Wu[b.keyIdentifier]);
    if (!Je || "keypress" != a.type || Ru(f, this.ra, a.shiftKey, a.ctrlKey, c, a.metaKey))
      (a = f == this.ra), (this.ra = f), (b = new Tu(f, e, a, b)), (b.altKey = c), this.dispatchEvent(b);
  };
  k.C = function () {
    return this.sb;
  };
  k.attach = function (a, b) {
    this.sc && this.detach();
    this.sb = a;
    this.rc = wj(this.sb, "keypress", this, b);
    this.Zc = wj(this.sb, "keydown", this.cf, b, this);
    this.sc = wj(this.sb, "keyup", this.Qf, b, this);
  };
  k.detach = function () {
    this.rc && (Ej(this.rc), Ej(this.Zc), Ej(this.sc), (this.sc = this.Zc = this.rc = null));
    this.sb = null;
    this.Ra = this.ra = -1;
  };
  k.K = function () {
    Uu.O.K.call(this);
    this.detach();
  };
  var Yu = function () {};
  Zd(Yu);
  Yu.prototype.g = 0;
  var Y = function (a) {
    R.call(this);
    this.h = a || qd();
    this.Ua = Zu;
    this.U = null;
    this.da = !1;
    this.g = null;
    this.H = void 0;
    this.u = this.o = this.s = this.Ha = null;
    this.Ge = !1;
  };
  G(Y, R);
  Y.prototype.Ie = Yu.L();
  var Zu = null,
    $u = function (a, b) {
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
    av = function (a) {
      return a.U || (a.U = ":" + (a.Ie.g++).toString(36));
    },
    bv = function (a, b) {
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
  var cv = function (a, b) {
      return a.g ? Xg(b, a.g || a.h.g) : null;
    },
    dv = function (a) {
      a.H || (a.H = new U(a));
      return a.H;
    },
    ev = function (a, b) {
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
  Y.prototype.wc = function (a) {
    fv(this, a);
  };
  var gv = function (a, b) {
      fv(a, b.parentNode, b);
    },
    fv = function (a, b, c) {
      if (a.da) throw Error("ua");
      a.g || a.Ga();
      b ? b.insertBefore(a.g, c || null) : a.h.g.body.appendChild(a.g);
      (a.s && !a.s.da) || a.T();
    },
    hv = function (a, b) {
      if (a.da) throw Error("ua");
      if (b && a.Dc(b)) {
        a.Ge = !0;
        var c = Wg(b);
        (a.h && a.h.g == c) || (a.h = qd(b));
        a.vb(b);
        a.T();
      } else throw Error("va");
    };
  k = Y.prototype;
  k.Dc = function () {
    return !0;
  };
  k.vb = function (a) {
    this.g = a;
  };
  k.T = function () {
    this.da = !0;
    iv(this, function (a) {
      !a.da && a.C() && a.T();
    });
  };
  k.ib = function () {
    iv(this, function (a) {
      a.da && a.ib();
    });
    this.H && this.H.removeAll();
    this.da = !1;
  };
  k.K = function () {
    this.da && this.ib();
    this.H && (this.H.ga(), delete this.H);
    iv(this, function (a) {
      a.ga();
    });
    !this.Ge && this.g && jh(this.g);
    this.s = this.Ha = this.g = this.u = this.o = null;
    Y.O.K.call(this);
  };
  var kv = function (a, b, c) {
    var d = jv(a);
    if (b.da && (c || !a.da)) throw Error("ua");
    if (0 > d || d > jv(a)) throw Error("wa");
    (a.u && a.o) || ((a.u = {}), (a.o = []));
    if (b.getParent() == a) {
      var e = a.u,
        f = av(b);
      e[f] = b;
      ya(a.o, b);
    } else {
      e = a.u;
      f = av(b);
      if (null !== e && f in e) throw Error("A`" + f);
      e[f] = b;
    }
    ev(b, a);
    Ea(a.o, d, 0, b);
    b.da && a.da && b.getParent() == a
      ? ((a = a.ac()),
        (a.childNodes[d] || null) != b.C() &&
          (b.C().parentElement == a && a.removeChild(b.C()), (d = a.childNodes[d] || null), a.insertBefore(b.C(), d)))
      : c
      ? (a.g || a.Ga(), (d = a.o ? a.o[d + 1] || null : null), fv(b, a.ac(), d ? d.g : null))
      : a.da && !b.da && b.g && b.g.parentNode && 1 == b.g.parentNode.nodeType && b.T();
  };
  Y.prototype.ac = function () {
    return this.g;
  };
  var jv = function (a) {
      return a.o ? a.o.length : 0;
    },
    iv = function (a, b) {
      a.o && a.o.forEach(b, void 0);
    },
    lv = function (a, b) {
      if (b) {
        var c = "string" === typeof b ? b : av(b);
        b = a.u && c ? jc(a.u, c) || null : null;
        c && b && (ic(a.u, c), ya(a.o, b), b.ib(), b.g && jh(b.g), ev(b, null));
      }
      if (!b) throw Error("xa");
      return b;
    },
    mv = function (a) {
      for (var b = []; a.o && 0 != a.o.length; ) {
        var c = b,
          d = c.push;
        var e = lv(a, a.o ? a.o[0] || null : null);
        d.call(c, e);
      }
    };
  var nv = function () {},
    ov;
  Zd(nv);
  var pv = {
    button: "pressed",
    checkbox: "checked",
    menuitem: "selected",
    menuitemcheckbox: "checked",
    menuitemradio: "checked",
    radio: "checked",
    tab: "selected",
    treeitem: "selected"
  };
  k = nv.prototype;
  k.Tc = function () {};
  k.Hb = function (a) {
    return a.h.rb("DIV", qv(this, a).join(" "), a.getContent());
  };
  k.vd = function () {
    return !0;
  };
  k.tb = function (a, b) {
    b.id && bv(a, b.id);
    b && b.firstChild ? rv(a, b.firstChild.nextSibling ? Aa(b.childNodes) : b.firstChild) : (a.ub = null);
    var c = 0,
      d = this.cb(),
      e = this.cb(),
      f = !1,
      g = !1,
      h = Aa(pu(b));
    h.forEach(function (l) {
      f || l != d ? (g || l != e ? (c |= sv(this, l)) : (g = !0)) : ((f = !0), e == d && (g = !0));
      1 == sv(this, l) && b.hasAttribute("tabindex") && ph(b) && oh(b, !1);
    }, this);
    a.fa = c;
    f || (h.push(d), e == d && (g = !0));
    g || h.push(e);
    (a = a.Rc) && h.push.apply(h, a);
    (f && g && !a) || qu(b, h.join(" "));
    return b;
  };
  k.he = function (a) {
    null == a.Ua && (a.Ua = Ju(a.da ? a.g : a.h.g.body));
    a.Ua && this.xd(a.C(), !0);
    a.isEnabled() && this.Ub(a, a.isVisible());
  };
  var tv = function (a, b) {
    if ((a = a.Tc())) {
      var c = b.getAttribute("role") || null;
      a != c && th(b, a);
    }
  };
  k = nv.prototype;
  k.Ec = function (a, b) {
    Lu(a, !b, !H);
  };
  k.xd = function (a, b) {
    var c = this.cb() + "-SIsrTd";
    (a = a.C ? a.C() : a) && (b ? tu : vu)(a, [c]);
  };
  k.wd = function (a) {
    var b;
    return a.na & 32 && (b = a.C()) ? b.hasAttribute("tabindex") && ph(b) : !1;
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
      (c.hasAttribute("tabindex") && ph(c)) != b && oh(c, b);
    }
  };
  k.Fc = function (a, b, c) {
    var d = a.C();
    if (d) {
      var e = uv(this, b);
      e && (a = a.C ? a.C() : a) && (c ? tu : vu)(a, [e]);
      this.Ma(d, b, c);
    }
  };
  k.Ma = function (a, b, c) {
    ov || (ov = { 1: "disabled", 8: "selected", 16: "checked", 64: "expanded" });
    b = ov[b];
    var d = a.getAttribute("role") || null;
    d && ((d = pv[d] || b), (b = "checked" == b || "selected" == b ? d : b));
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
  var qv = function (a, b) {
      var c = a.cb(),
        d = [c],
        e = a.cb();
      e != c && d.push(e);
      c = b.getState();
      for (e = []; c; ) {
        var f = c & -c;
        e.push(uv(a, f));
        c &= ~f;
      }
      d.push.apply(d, e);
      (a = b.Rc) && d.push.apply(d, a);
      return d;
    },
    uv = function (a, b) {
      a.g || vv(a);
      return a.g[b];
    },
    sv = function (a, b) {
      if (!a.j) {
        a.g || vv(a);
        var c = a.g,
          d = {},
          e;
        for (e in c) d[c[e]] = e;
        a.j = d;
      }
      a = parseInt(a.j[b], 10);
      return isNaN(a) ? 0 : a;
    },
    vv = function (a) {
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
  var wv = function () {};
  G(wv, nv);
  Zd(wv);
  k = wv.prototype;
  k.Tc = function () {
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
        wv.O.Ma.call(this, a, b, c);
    }
  };
  k.Hb = function (a) {
    var b = wv.O.Hb.call(this, a);
    this.La(b, a.lc());
    var c = a.aa();
    c && this.yd(b, c);
    a.na & 16 && this.Ma(b, 16, !!(a.fa & 16));
    return b;
  };
  k.tb = function (a, b) {
    b = wv.O.tb.call(this, a, b);
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
  var xv = {
    Ic: "mousedown",
    Jc: "mouseup",
    Dd: "mousecancel",
    ri: "mousemove",
    ti: "mouseover",
    si: "mouseout",
    oi: "mouseenter",
    pi: "mouseleave"
  };
  var yv = function (a, b) {
      if (!a) throw Error("ya`" + a);
      if ("function" !== typeof b) throw Error("za`" + b);
    },
    zv = {};
  var Z = function (a, b, c) {
    Y.call(this, c);
    if (!b) {
      for (b = this.constructor; b; ) {
        var d = gd(b);
        if ((d = zv[d])) break;
        b = (b = Object.getPrototypeOf(b.prototype)) && b.constructor;
      }
      b = d ? ("function" === typeof d.L ? d.L() : new d()) : null;
    }
    this.i = b;
    this.ub = void 0 !== a ? a : null;
  };
  G(Z, Y);
  k = Z.prototype;
  k.ub = null;
  k.fa = 0;
  k.na = 39;
  k.Kb = 255;
  k.bc = !0;
  k.Rc = null;
  k.Xc = !0;
  var Bv = function (a) {
    a.da && 0 != a.Xc && Av(a, !1);
    a.Xc = !1;
  };
  k = Z.prototype;
  k.Ga = function () {
    var a = this.i.Hb(this);
    this.g = a;
    tv(this.i, a);
    this.i.Ec(a, !1);
    this.isVisible() || (X(a, !1), a && uh(a, "hidden", !0));
  };
  k.ac = function () {
    return this.C();
  };
  k.Dc = function (a) {
    return this.i.vd(a);
  };
  k.vb = function (a) {
    this.g = a = this.i.tb(this, a);
    tv(this.i, a);
    this.i.Ec(a, !1);
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
    this.i.he(this);
    this.na & -2 &&
      (this.Xc && Av(this, !0), this.na & 32 && (a = this.C())) &&
      ((b = this.j || (this.j = new Uu())),
      b.attach(a),
      dv(this).listen(b, "key", this.ef).listen(a, "focus", this.df).listen(a, "blur", this.zd));
  };
  var Av = function (a, b) {
    var c = dv(a),
      d = a.C();
    b
      ? (c.listen(d, xv.Ic, a.Ib).listen(d, [xv.Jc, xv.Dd], a.Ob).listen(d, "mouseover", a.F).listen(d, "mouseout", a.D),
        a.v != mg && c.listen(d, "contextmenu", a.v),
        H && !a.l && ((a.l = new Cv(a)), N(a, a.l)))
      : (c.X(d, xv.Ic, a.Ib).X(d, [xv.Jc, xv.Dd], a.Ob).X(d, "mouseover", a.F).X(d, "mouseout", a.D),
        a.v != mg && c.X(d, "contextmenu", a.v),
        H && (nc(a.l), (a.l = null)));
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
  var rv = function (a, b) {
    a.ub = b;
  };
  Z.prototype.isVisible = function () {
    return this.bc;
  };
  var Dv = function (a, b) {
    if (a.bc != b && a.dispatchEvent(b ? "show" : "hide")) {
      var c = a.C();
      c && (X(c, b), c && uh(c, "hidden", !b));
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
      !Ev(this, 1, !a) ||
      (a || (Fv(this, !1), Gv(this, !1)), this.isVisible() && this.i.Ub(this, a), Hv(this, 1, !a, !0));
  };
  var Gv = function (a, b) {
    Ev(a, 2, b) && Hv(a, 2, b);
  };
  Z.prototype.isActive = function () {
    return !!(this.fa & 4);
  };
  var Fv = function (a, b) {
    Ev(a, 4, b) && Hv(a, 4, b);
  };
  Z.prototype.isSelected = function () {
    return !!(this.fa & 8);
  };
  Z.prototype.yc = function (a) {
    Ev(this, 32, a) && Hv(this, 32, a);
  };
  Z.prototype.getState = function () {
    return this.fa;
  };
  var Hv = function (a, b, c, d) {
      d || 1 != b ? a.na & b && c != !!(a.fa & b) && (a.i.Fc(a, b, c), (a.fa = c ? a.fa | b : a.fa & ~b)) : a.setEnabled(!c);
    },
    Iv = function (a) {
      if (a.da && a.fa & 32) throw Error("ua");
      a.fa & 32 && Hv(a, 32, !1);
      a.na &= -33;
    },
    Jv = function (a, b) {
      return !!(a.Kb & b) && !!(a.na & b);
    },
    Ev = function (a, b, c) {
      return !!(a.na & b) && !!(a.fa & b) != c && (!(0 & b) || a.dispatchEvent($u(b, c))) && !a.pa;
    };
  Z.prototype.F = function (a) {
    !Kv(a, this.C()) && this.dispatchEvent("enter") && this.isEnabled() && Jv(this, 2) && Gv(this, !0);
  };
  Z.prototype.D = function (a) {
    !Kv(a, this.C()) && this.dispatchEvent("leave") && (Jv(this, 4) && Fv(this, !1), Jv(this, 2) && Gv(this, !1));
  };
  Z.prototype.v = mg;
  var Kv = function (a, b) {
    return !!a.relatedTarget && kh(b, a.relatedTarget);
  };
  k = Z.prototype;
  k.Ib = function (a) {
    this.isEnabled() &&
      (Jv(this, 2) && Gv(this, !0),
      0 != a.h.button || (Le && a.ctrlKey) || (Jv(this, 4) && Fv(this, !0), this.i && this.i.wd(this) && this.C().focus()));
    0 != a.h.button || (Le && a.ctrlKey) || a.g();
  };
  k.Ob = function (a) {
    this.isEnabled() && (Jv(this, 2) && Gv(this, !0), this.isActive() && this.uc(a) && Jv(this, 4) && Fv(this, !1));
  };
  k.uc = function (a) {
    if (Jv(this, 16)) {
      var b = !(this.fa & 16);
      Ev(this, 16, b) && Hv(this, 16, b);
    }
    Jv(this, 8) && Ev(this, 8, !0) && Hv(this, 8, !0);
    Jv(this, 64) && ((b = !(this.fa & 64)), Ev(this, 64, b) && Hv(this, 64, b));
    b = new gj("action", this);
    a &&
      ((b.altKey = a.altKey),
      (b.ctrlKey = a.ctrlKey),
      (b.metaKey = a.metaKey),
      (b.shiftKey = a.shiftKey),
      (b.o = a.o),
      (b.timeStamp = a.timeStamp));
    return this.dispatchEvent(b);
  };
  k.df = function () {
    Jv(this, 32) && this.yc(!0);
  };
  k.zd = function () {
    Jv(this, 4) && Fv(this, !1);
    Jv(this, 32) && this.yc(!1);
  };
  k.ef = function (a) {
    return this.isVisible() && this.isEnabled() && this.Wc(a) ? (a.g(), a.stopPropagation(), !0) : !1;
  };
  k.Wc = function (a) {
    return 13 == a.keyCode && this.uc(a);
  };
  if ("function" !== typeof Z) throw Error("Aa`" + Z);
  if ("function" !== typeof nv) throw Error("Ba`" + nv);
  var Lv = gd(Z);
  zv[Lv] = nv;
  yv("VIpgJd-bMcfAe", function () {
    return new Z(null);
  });
  var Cv = function (a) {
    M.call(this);
    this.h = a;
    this.g = !1;
    this.i = new U(this);
    N(this, this.i);
    a = this.h.g;
    this.i.listen(a, xv.Ic, this.l).listen(a, xv.Jc, this.o).listen(a, "click", this.j);
  };
  G(Cv, M);
  var Mv = !H || 9 <= Number(af);
  Cv.prototype.l = function () {
    this.g = !1;
  };
  Cv.prototype.o = function () {
    this.g = !0;
  };
  var Nv = function (a, b) {
    if (!Mv) return (a.button = 0), (a.type = b), a;
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
  Cv.prototype.j = function (a) {
    if (this.g) this.g = !1;
    else {
      var b = a.h,
        c = b.button,
        d = b.type,
        e = Nv(b, "mousedown");
      this.h.Ib(new jj(e, a.i));
      e = Nv(b, "mouseup");
      this.h.Ob(new jj(e, a.i));
      Mv || ((b.button = c), (b.type = d));
    }
  };
  Cv.prototype.K = function () {
    this.h = null;
    Cv.O.K.call(this);
  };
  var Ov = function () {};
  G(Ov, wv);
  Zd(Ov);
  k = Ov.prototype;
  k.Tc = function () {};
  k.Hb = function (a) {
    Bv(a);
    a.Kb &= -256;
    Iv(a);
    var b = a.h,
      c = b.rb,
      d = { class: qv(this, a).join(" "), disabled: !a.isEnabled(), title: a.lc() || "", value: a.aa() || "" };
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
  k.vd = function (a) {
    return "BUTTON" == a.tagName || ("INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type));
  };
  k.tb = function (a, b) {
    Bv(a);
    a.Kb &= -256;
    Iv(a);
    if (b.disabled) {
      var c = uv(this, 1);
      su(b, c);
    }
    return Ov.O.tb.call(this, a, b);
  };
  k.he = function (a) {
    dv(a).listen(a.C(), "click", a.uc);
  };
  k.Ec = function () {};
  k.xd = function () {};
  k.wd = function (a) {
    return a.isEnabled();
  };
  k.Ub = function () {};
  k.Fc = function (a, b, c) {
    Ov.O.Fc.call(this, a, b, c);
    (a = a.C()) && 1 == b && (a.disabled = c);
  };
  k.aa = function (a) {
    return a.value;
  };
  k.yd = function (a, b) {
    a && (a.value = b);
  };
  k.Ma = function () {};
  var Pv = function (a, b, c) {
    Z.call(this, a, b || Ov.L(), c);
  };
  G(Pv, Z);
  k = Pv.prototype;
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
    Pv.O.K.call(this);
    delete this.ea;
    delete this.A;
  };
  k.T = function () {
    Pv.O.T.call(this);
    if (this.na & 32) {
      var a = this.C();
      a && dv(this).listen(a, "keyup", this.Wc);
    }
  };
  k.Wc = function (a) {
    return (13 == a.keyCode && "key" == a.type) || (32 == a.keyCode && "keyup" == a.type) ? this.uc(a) : 32 == a.keyCode;
  };
  yv("VIpgJd-LgbsSe", function () {
    return new Pv(null);
  });
  var Rv = function (a, b, c, d) {
    Pv.call(this, a, d || Qv.L(), c || void 0);
    this.B = b || "";
  };
  E(Rv, Pv);
  k = Rv.prototype;
  k.T = function () {
    Pv.prototype.T.call(this);
    dv(this).listen(this, "action", this.Lf);
  };
  k.focus = function () {
    try {
      this.C() && this.C().focus();
    } catch (a) {}
  };
  k.yc = function (a) {
    Pv.prototype.yc.call(this, a);
    this.C() && uu(this.C(), "JbbQac-AHmuwe-i5vt6e");
  };
  k.Ib = function (a) {
    Pv.prototype.Ib.call(this, a);
    this.C() && su(this.C(), "JbbQac-AHmuwe-i5vt6e");
  };
  k.Ob = function (a) {
    Pv.prototype.Ob.call(this, a);
    this.C() && su(this.C(), "JbbQac-AHmuwe-i5vt6e");
  };
  k.Lf = function () {
    this.B && this.dispatchEvent(this.B);
  };
  var Qv = function () {};
  E(Qv, wv);
  Qv.prototype.Hb = function (a) {
    var b = ud(this.i());
    su(b, "Q0hgme-LgbsSe");
    a.h.Ve(b, a.getContent());
    var c = this.h();
    c && su(b, c);
    this.tb(a, b);
    return b;
  };
  Qv.prototype.h = function () {
    return "";
  };
  Qv.prototype.i = function () {
    return au;
  };
  Qv.L = function () {
    return yh(Qv);
  };
  var Tv = function (a, b, c) {
    Rv.call(this, void 0, b, c, Sv.L());
    this.G = a;
  };
  E(Tv, Rv);
  Tv.prototype.T = function () {
    Rv.prototype.T.call(this);
    var a = this.G,
      b = this.C();
    b && Ou.L().La(b, a);
  };
  Tv.prototype.setEnabled = function (a) {
    Rv.prototype.setEnabled.call(this, a);
  };
  Tv.prototype.La = function (a) {
    this.G = a;
    if (this.isEnabled()) {
      var b = this.C();
      b && Ou.L().La(b, a);
    }
  };
  chrome.i18n.getMessage("3551522853788442530");
  var Sv = function () {};
  E(Sv, Qv);
  Sv.prototype.h = function () {
    return "Q0hgme-Bz112c-LgbsSe";
  };
  Sv.prototype.i = function () {
    return cu;
  };
  Sv.L = function () {
    return yh(Sv);
  };
  var Uv = function () {
    this.g = this.i = this.j = this.h = null;
  };
  var Vv = function () {
    Y.call(this);
    this.i = [];
    vs(V(), this.l, this);
  };
  E(Vv, Y);
  Vv.prototype.T = function () {
    Y.prototype.T.call(this);
    var a = new Jr(this.j, 50, this);
    N(this, a);
    var b = new iq(a.qa, 16, a);
    N(this, a);
    sn(dv(this), this, "I", b.Bc, void 0, b);
    Wv(this, !1);
  };
  var Wv = function (a, b) {
    a.C() && (X(a.C(), b), a.dispatchEvent("K"));
  };
  Vv.prototype.l = function () {
    var a = V().g;
    a = Be(a ? Eo(a) : [], function (b) {
      b = Ho(b);
      return !!b && (Bm(b) || Cm(b) || Dm(b));
    });
    Ga(this.i, a)
      ? iv(this, function (b) {
          Xv(b);
        })
      : ((this.i = a),
        mv(this),
        Bd(
          a,
          function (b) {
            kv(this, new Yv(b), !0);
          },
          this
        ),
        Wv(this, !!jv(this)),
        this.j());
  };
  Vv.prototype.j = function () {
    for (var a = jv(this), b = [], c = [], d = 0; d < a; d++) {
      var e = this.o ? this.o[d] || null : null,
        f = 6 <= c.length;
      null == e.l || f ? X(e.C(), !1) : (c.push(e), b.push(e.l), X(e.C(), !0));
    }
    a = Cd(b);
    this.C().style.paddingTop = a.Gf + "%";
    for (b = 0; b < c.length; b++)
      if (((d = a.cg[b]), (e = c[b].C())))
        (e.style.top = d.top + "%"), (e.style.left = d.left + "%"), (e.style.width = d.width + "%"), (e.style.height = d.height + "%");
    this.dispatchEvent("K");
  };
  var Zv = function (a, b) {
      iv(a, function (c) {
        return c.jd(b);
      });
    },
    Yv = function (a) {
      Y.call(this);
      this.A = yh(as);
      var b = chrome.i18n.getMessage("6932835915069019531");
      this.v = new Tv(b);
      this.j = a;
      this.i = this.l = null;
    };
  E(Yv, Y);
  Yv.prototype.Ga = function () {
    this.g = ud(mu);
  };
  Yv.prototype.T = function () {
    Y.prototype.T.call(this);
    hv(this.v, this.C().querySelector(".HiaYvf-VkLyEc"));
    var a = (this.i = this.C().querySelector(".HiaYvf-SmKAyb")),
      b;
    if (!(b = Ho(this.j).l)) {
      var c = this.j;
      b = new Uv();
      b.h = "https://keep.google.com";
      b.j = c.Ha;
      b.i = c.R;
      Ho(c) && Ho(c).j && (b.g = Ho(c).j);
      c = b.h ? Ic(b.h) : new zi();
      c.g = ["", "/media/v2/" + b.j + "/" + b.i, b.g ? "/" + b.g : ""].join("");
      b = c.toString();
    }
    a.src = b;
    dv(this).listen(this.i, "load", this.B).listen(this.v, "action", this.D);
    Xv(this);
  };
  var Xv = function (a) {
    var b = a.C();
    b && ((a = "luf" == Ho(a.j).h), wu(b, "u0pjoe", a), (a = a ? $v : ""), Ou.L().La(b, a, !0));
  };
  Yv.prototype.B = function () {
    var a = (this.i.naturalWidth || this.i.width) / (this.i.naturalHeight || this.i.height);
    this.l != a && ((this.l = a), this.dispatchEvent("I"));
  };
  Yv.prototype.D = function () {
    var a = this.j;
    if (1 !== a.l) {
      a.j && Xn(a) && (0 != a.l || So(a.j, a.g, Sc(a)));
      a.l = 1;
      var b = new Rh(),
        c = a.u;
      if (c.g && b) throw Error("E");
      c.g = b;
      Xh(a.u, b);
      Un(a);
      a.o &&
        ((b = a.o),
        "DELETED" != b.h && ((b.h = "DELETED"), (b.l = !0), b.dispatchEvent("k")),
        (b = a.o),
        (b.l || (b.g && b.g.F)) && a.dispatchEvent("u"));
    }
    Ti(bd(), "n_ecmv3m") ? this.A.log(9023) : y("impression", 9023);
    this.ga();
  };
  Yv.prototype.jd = function (a) {
    Dv(this.v, a);
  };
  var $v = chrome.i18n.getMessage("4153306913989815073");
  var bw = function (a) {
      var b = 0,
        c = 0;
      aw(a) && ((b = a.selectionStart), (c = -1));
      return [b, c];
    },
    aw = function (a) {
      try {
        return "number" == typeof a.selectionStart;
      } catch (b) {
        return !1;
      }
    };
  var cw = function (a, b, c, d) {
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
    this.i = 0 < d ? new gq(d) : null;
    this.h = new U(this);
    this.s = new U(this);
    this.l = new Uu();
    this.u = -1;
  };
  G(cw, M);
  k = cw.prototype;
  k.Y = null;
  k.ad = "";
  k.ab = !1;
  k.hd = !1;
  k.aa = function () {
    return this.Y.value;
  };
  k.setCursorPosition = function (a) {
    var b = this.Y;
    aw(b) && (b.selectionStart = a);
    b = this.Y;
    aw(b) && (b.selectionEnd = a);
  };
  var dw = function (a, b) {
      vd(b) && 1 == b.nodeType && (th(b, "combobox"), uh(b, "autocomplete", "list"));
      a.h.listen(b, "focus", a.Hc);
      a.h.listen(b, "blur", a.Gc);
      a.Y || (a.s.listen(b, "keydown", a.ke), vd(b) && 1 == b.nodeType && sh(Wg(b)) == b && a.vc(b));
    },
    ew = function (a, b) {
      vd(b) && 1 == b.nodeType && (b.removeAttribute("role"), b.removeAttribute("aria-autocomplete"));
      b == a.Y && a.Gc();
      a.h.X(b, "focus", a.Hc);
      a.h.X(b, "blur", a.Gc);
      a.Y || a.s.X(b, "keydown", a.ke);
    };
  cw.prototype.B = function (a) {
    if (this.Y) {
      var b = a.toString();
      if (this.j) {
        a = fw(this, this.aa(), bw(this.Y)[0]);
        var c = gw(this, this.aa());
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
      this.hd = !0;
    }
    return !1;
  };
  cw.prototype.K = function () {
    cw.O.K.call(this);
    this.h.ga();
    delete this.h;
    this.s.ga();
    this.l.ga();
    nc(this.i);
  };
  var kw = function (a, b) {
      switch (b.keyCode) {
        case 40:
          if (a.g.g.isVisible()) {
            hw(a.g);
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
          else if ((a.update(), iw(a.g) && a.G)) {
            b.g();
            return;
          }
          break;
        case 13:
          if (a.g.g.isVisible()) {
            if ((a.update(), iw(a.g))) {
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
      jw(a, b);
    },
    jw = function (a, b) {
      var c = a.j && b.l && -1 != a.o.indexOf(String.fromCharCode(b.l));
      c && a.update();
      c && iw(a.g) && b.g();
    };
  k = cw.prototype;
  k.Pf = function () {
    return !1;
  };
  k.Hc = function (a) {
    this.vc(a.target || null);
  };
  k.vc = function (a) {
    this.s.removeAll();
    this.g && lw(this.g);
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
      this.ab && mw(this),
      (this.Y = null),
      this.i && (this.i.stop(), this.h.X(this.i, "tick", this.qe)),
      this.g && nw(this.g));
  };
  k.qe = function () {
    this.update();
  };
  k.ke = function (a) {
    this.Hc(a);
  };
  k.ne = function (a) {
    this.u = a.keyCode;
    this.g && kw(this, a);
  };
  k.le = function () {
    this.ab && 229 != this.u && mw(this);
  };
  k.me = function (a) {
    this.ab && (13 == a.keyCode || (77 == a.keyCode && a.ctrlKey)) && mw(this);
  };
  k.oe = function () {};
  var mw = function (a) {
    a.ab && ((a.ab = !1), a.h.X(a.Y, "keypress", a.le), a.h.X(a.Y, "keyup", a.me));
  };
  cw.prototype.A = function (a) {
    jw(this, a);
  };
  cw.prototype.update = function (a) {
    if (this.Y && (a || this.aa() != this.ad)) {
      if (a || !this.hd) {
        a = bw(this.Y)[0];
        var b = this.aa();
        a = gw(this, b)[fw(this, b, a)];
        a = this.F ? String(a).replace(this.F, "") : a;
        this.g && ((this.g.s = this.Y), ow(this.g, a));
      }
      this.ad = this.aa();
    }
    this.hd = !1;
  };
  var fw = function (a, b, c) {
      a = gw(a, b);
      if (c == b.length) return a.length - 1;
      for (var d = (b = 0), e = 0; d < a.length && e <= c; d++) (e += a[d].length), (b = d);
      return b;
    },
    gw = function (a, b) {
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
  var pw = function (a) {
    cw.call(this);
    this.N = a;
  };
  E(pw, cw);
  pw.prototype.B = function (a) {
    this.Y.value = "";
    this.N(a);
    return !0;
  };
  pw.prototype.vc = function (a) {
    cw.prototype.vc.call(this, a);
    this.aa() || ow(this.g, this.aa());
  };
  var rw = function (a, b) {
      var c = [];
      if ("" != a)
        for (var d = new RegExp("(^|\\W+)" + Fg(a), "i"), e = 0; e < b.length && 100 > c.length; e++) {
          var f = b[e];
          String(f).match(d) && c.push(f);
        }
      0 == c.length && (c = qw(a, b));
      return c;
    },
    qw = function (a, b) {
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
        var J = r.xe - A.xe;
        return 0 != J ? J : r.index - A.index;
      });
      a = [];
      for (u = 0; 100 > u && u < c.length; u++) a.push(c[u].jg);
      return a;
    };
  var sw = function () {
    R.call(this);
    this.g = new Cn({ mainId: "QUMgc2VudGluZWwgbGFiZWw=" });
    this.h = "";
  };
  E(sw, R);
  var tw = function (a, b, c, d) {
    var e = V().h,
      f = Mn(e);
    if (b) {
      var g = rw(b, f);
      !Ce(f, function (l) {
        return l.ka().toLowerCase() == b.toLowerCase();
      }) &&
        100 > cc(Ln(e)) &&
        ((e = chrome.i18n.getMessage("8169232898590866289", [b])), Fn(a.g, e), (a.h = b), g.unshift(a.g));
    } else g = f.slice();
    var h = V().g;
    h &&
      za(
        g,
        function (l) {
          return yo(h, l);
        },
        a
      );
    d(b, g.splice(0, c));
    a.dispatchEvent("K");
  };
  var uw = function (a, b, c) {
    R.call(this);
    this.u = a;
    this.v = c;
    this.g = b;
    wj(b, ["hilite", "select", "canceldismiss", "dismiss"], this.handleEvent, !1, this);
    this.j = null;
    this.h = [];
    this.l = -1;
    this.i = 0;
    this.o = this.s = null;
    this.B = {};
  };
  G(uw, R);
  uw.prototype.D = 10;
  uw.prototype.getToken = function () {
    return this.j;
  };
  uw.prototype.handleEvent = function (a) {
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
            var d = this.h[vw(this, a)];
            c = !!d && b.Yc && b.Yc(d);
            d && !c && this.l != a && this.mb(a);
          }
          c || iw(this);
          break;
        case "canceldismiss":
          lw(this);
          break;
        case "dismiss":
          nw(this);
      }
  };
  var ow = function (a, b) {
      a.j != b && ((a.j = b), tw(a.u, a.j, a.D, F(a.F, a)), lw(a));
    },
    hw = function (a) {
      for (var b = a.i + a.h.length - 1, c = a.l, d = 0; d < a.h.length; d++) {
        if (c >= a.i && c < b) c++;
        else if (-1 == c) c = a.i;
        else break;
        if (a.mb(c)) break;
      }
    };
  uw.prototype.mb = function (a) {
    var b = vw(this, a),
      c = this.h[b];
    return c && this.u.Yc && this.u.Yc(c) ? !1 : ((this.l = a), this.g.mb(a), -1 != b);
  };
  var iw = function (a) {
    var b = vw(a, a.l);
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
  uw.prototype.Aa = function () {
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
  var nw = function (a) {
    a.o || (a.o = window.setTimeout(F(a.Aa, a), 100));
  };
  uw.prototype.A = function () {
    return this.o ? (window.clearTimeout(this.o), (this.o = null), !0) : !1;
  };
  var lw = function (a) {
    a.A() || window.setTimeout(F(a.A, a), 10);
  };
  uw.prototype.K = function () {
    uw.O.K.call(this);
    delete this.B;
    this.g.ga();
    this.v.ga();
    this.u = null;
  };
  uw.prototype.F = function (a, b, c) {
    this.j == a && this.gd(b, c);
  };
  uw.prototype.gd = function (a, b) {
    var c = "object" == $d(b) && b;
    b = (c ? c.h() : b) ? vw(this, this.l) : -1;
    this.i += this.h.length;
    this.h = a;
    for (var d = [], e = 0; e < a.length; ++e) d.push({ id: this.i + e, data: a[e] });
    a = null;
    this.s && (a = this.B[gd(this.s)] || this.s);
    this.g.Df = a;
    this.g.gd(d, this.j, this.s);
    a = !0;
    c && void 0 !== c.g() && (a = c.g());
    this.l = -1;
    (a || 0 <= b) && 0 != d.length && this.j && (0 <= b ? this.mb(this.i + b) : hw(this));
    this.dispatchEvent("suggestionsupdate");
  };
  var vw = function (a, b) {
    b -= a.i;
    return 0 > b || b >= a.h.length ? -1 : b;
  };
  uw.prototype.update = function (a) {
    this.v.update(a);
  };
  var ww = function (a, b, c) {
    uw.call(this, a, b, c);
  };
  E(ww, uw);
  ww.prototype.Aa = function () {
    uw.prototype.Aa.call(this);
    this.dispatchEvent("K");
  };
  var xw = /#(.)(.)(.)/,
    yw = /^#(?:[0-9a-f]{3}){1,2}$/i;
  var zw = (function () {
    if (Ne) {
      var a = /Windows NT ([0-9.]+)/;
      return (a = a.exec(ea())) ? a[1] : "0";
    }
    return Le
      ? ((a = /1[0|1][_.][0-9_.]+/), (a = a.exec(ea())) ? a[0].replace(/_/g, ".") : "10")
      : Oe
      ? ((a = /Android\s+([^\);]+)(\)|;)/), (a = a.exec(ea())) ? a[1] : "")
      : Pe || Qe || Re
      ? ((a = /(?:iPhone|CPU)\s+OS\s+(\S+)/), (a = a.exec(ea())) ? a[1].replace(/_/g, ".") : "")
      : "";
  })();
  var Aw = function (a) {
      return (a = a.exec(ea())) ? a[1] : "";
    },
    Bw = (function () {
      if (bf) return Aw(/Firefox\/([0-9.]+)/);
      if (H || He || Ge) return Ye;
      if (ff) {
        if (ra() || sa()) {
          var a = Aw(/CriOS\/([0-9.]+)/);
          if (a) return a;
        }
        return Aw(/Chrome\/([0-9.]+)/);
      }
      if (gf && !ra()) return Aw(/Version\/([0-9.]+)/);
      if (cf || df) {
        if ((a = /Version\/(\S+).*Mobile\/(\S+)/.exec(ea()))) return a[1] + "." + a[2];
      } else if (ef) return (a = Aw(/Android\s+([0-9.]+)/)) ? a : Aw(/Version\/([0-9.]+)/);
      return "";
    })();
  var Cw = function (a, b) {
    return (b & 8 && Ju(a) ? b ^ 4 : b) & -9;
  };
  var Ew = function (a, b, c, d) {
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
  G(Ew, R);
  Ew.prototype.C = function () {
    return this.g;
  };
  Ew.prototype.gd = function (a, b, c) {
    this.A = b;
    this.h = a;
    this.u = -1;
    this.H = Date.now();
    this.i = c;
    this.l = [];
    Fw(this);
  };
  Ew.prototype.Aa = function () {
    this.o && ((this.o = !1), Gw(this, !1), X(this.g, !1));
  };
  Ew.prototype.show = function () {
    this.o || ((this.o = !0), Gw(this, !0), X(this.g, !0));
  };
  var Gw = function (a, b) {
    a.i &&
      (uh(a.i, "haspopup", b),
      uh(a.g, "expanded", b),
      uh(a.i, "expanded", b),
      b ? uh(a.i, "owns", a.g.id) : (a.i.removeAttribute("aria-owns"), vh(a.i, null)));
  };
  Ew.prototype.isVisible = function () {
    return this.o;
  };
  var Hw = function (a, b) {
    var c = 0 <= b && b < a.h.length ? a.h[b] : void 0,
      d = 0 <= b && b < a.l.length ? a.l[b] : void 0;
    if (
      a.dispatchEvent({ type: "rowhilite", s: d, pb: c ? c.data : null }) &&
      (0 <= a.u && vu(a.l[a.u], ["ztA2jd-auswjd", "auswjd"]), (a.u = b), d)
    ) {
      tu(d, ["ztA2jd-auswjd", "auswjd"]);
      a.i && vh(a.i, d);
      b = (a = a.g || bh(document)) || bh(document);
      var e = Eu(d),
        f = Eu(b);
      if (!H || 9 <= Number(af)) {
        c = yu(b, "borderLeftWidth");
        var g = yu(b, "borderRightWidth");
        h = yu(b, "borderTopWidth");
        l = yu(b, "borderBottomWidth");
        g = new xu(parseFloat(h), parseFloat(g), parseFloat(l), parseFloat(c));
      } else {
        c = Nu(b, "borderLeft");
        g = Nu(b, "borderRight");
        var h = Nu(b, "borderTop"),
          l = Nu(b, "borderBottom");
        g = new xu(h, g, l, c);
      }
      b == bh(document)
        ? ((c = e.x - b.scrollLeft), (e = e.y - b.scrollTop), !H || 10 <= Number(af) || ((c += g.left), (e += g.top)))
        : ((c = e.x - f.x - g.left), (e = e.y - f.y - g.top));
      d = Hu(d);
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
  Ew.prototype.mb = function (a) {
    if (-1 == a) Hw(this, -1);
    else
      for (var b = 0; b < this.h.length; b++)
        if (this.h[b].id == a) {
          Hw(this, b);
          break;
        }
  };
  var Iw = function (a) {
      if (!a.g) {
        var b = a.j.rb("DIV", { style: "display:none" });
        a.g = b;
        tu(b, je(a.className).split(" "));
        th(b, "listbox");
        b.id = ":" + (Yu.L().g++).toString(36);
        a.v.appendChild(b);
        wj(b, "click", a.B, !1, a);
        wj(b, "mousedown", a.D, !1, a);
        wj(b, "mouseover", a.F, !1, a);
      }
    },
    Fw = function (a) {
      Iw(a);
      a.ba && (a.g.style.minWidth = a.ba.clientWidth - 0 + "px");
      a.U && (a.g.style.maxWidth = a.U.clientWidth - 0 + "px");
      a.l.length = 0;
      a.j.We(a.g);
      a.s && a.s.wc
        ? a.s.wc(a, a.g, a.h, a.A)
        : a.h.forEach(function (b) {
            var c = this.A,
              d = this.j.rb("DIV", { className: "ztA2jd-oKdM2c", id: ":" + (Yu.L().g++).toString(36) });
            th(d, "option");
            this.s && this.s.eg ? this.s.eg(b, c, d) : lh(d, b.data.toString());
            c && this.Z && ((this.G = !1), Jw(this, d, c));
            su(d, "ztA2jd-oKdM2c");
            this.l.push(d);
            b = d;
            this.g.appendChild(b);
          }, a);
      0 == a.h.length ? a.Aa() : (a.show(), Kw(a), Lu(a.g, !0));
    },
    Kw = function (a) {
      if (a.i && a.R) {
        var b = a.Df || a.i;
        var c = a.S ? 5 : 1;
        a = a.g;
        var d = c ^ 1,
          e;
        if ((e = a.offsetParent)) {
          var f = "HTML" == e.tagName || "BODY" == e.tagName;
          if (!f || "static" != zu(e, "position")) {
            var g = Eu(e);
            if (!f) {
              f = Ju(e);
              var h;
              if ((h = f)) {
                h = gf && 0 <= te(Bw, 10);
                var l;
                if ((l = Se)) l = 0 <= te(zw, 10);
                var m = ff && 0 <= te(Bw, 85);
                h = Je || h || l || m;
              }
              f = h
                ? -e.scrollLeft
                : f && !Ie && "visible" != zu(e, "overflowX")
                ? e.scrollWidth - e.clientWidth - e.scrollLeft
                : e.scrollLeft;
              g = Tg(g, new Sg(f, e.scrollTop));
            }
          }
        }
        e = g || new Sg();
        g = Eu(b);
        f = Iu(b);
        g = new Dd(g.x, g.y, f.width, f.height);
        if ((f = Fu(b)))
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
              if (p == l) var w = Eu(u);
              else (w = Cu(u)), (w = new Sg(w.left, w.top));
              m.x += w.x;
              m.y += w.y;
            } while (p && p != l && p != p.parent && (u = p.frameElement) && (p = p.parent));
          }
          h = Tg(m, Eu(h));
          !H || 9 <= Number(af) || $g(f.g) || (h = Tg(h, dh(f.g)));
          g.left += h.x;
          g.top += h.y;
        }
        b = Cw(b, c);
        c = g.left;
        b & 4 ? (c += g.width) : b & 2 && (c += g.width / 2);
        c = new Sg(c, g.top + (b & 1 ? g.height : 0));
        c = Tg(c, e);
        if ((b = Fu(a))) (b.top -= e.y), (b.right -= e.x), (b.bottom -= e.y), (b.left -= e.x);
        c = c.clone();
        g = Cw(a, d);
        d = Iu(a);
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
          (Bu(a, new Sg(g.left, g.top)),
          (e = new Ug(g.width, g.height)),
          d == e ||
            (d && e && d.width == e.width && d.height == e.height) ||
            ((d = e),
            (a = a.style),
            Je ? (a.MozBoxSizing = "border-box") : Ke ? (a.WebkitBoxSizing = "border-box") : (a.boxSizing = "border-box"),
            (a.width = Math.max(d.width, 0) + "px"),
            (a.height = Math.max(d.height, 0) + "px")));
      }
    };
  Ew.prototype.K = function () {
    this.g &&
      (Dj(this.g, "click", this.B, !1, this),
      Dj(this.g, "mousedown", this.D, !1, this),
      Dj(this.g, "mouseover", this.F, !1, this),
      this.j.sd(this.g),
      (this.g = null),
      (this.o = !1));
    nc(this.ca);
    this.v = null;
    Ew.O.K.call(this);
  };
  var Jw = function (a, b, c) {
      if (!a.G)
        if (3 == b.nodeType) {
          var d = null;
          Array.isArray(c) && 1 < c.length && (d = c.slice(1));
          c = Lw(c);
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
            } else d && Jw(a, b, d);
          }
        } else for (b = b.firstChild; b; ) (d = b.nextSibling), Jw(a, b, c), (b = d);
    },
    Lw = function (a) {
      var b = "";
      if (!a) return b;
      Array.isArray(a) &&
        (a = a.filter(function (c) {
          return !ie(null == c ? "" : String(c));
        }));
      Array.isArray(a) ? (b = 0 < a.length ? Fg(a[0]) : "") : /^\W/.test(a) || (b = Fg(a));
      return b;
    },
    Mw = function (a, b) {
      for (; b && b != a.g && !ru(b, "ztA2jd-oKdM2c"); ) b = b.parentNode;
      return b ? a.l.indexOf(b) : -1;
    };
  Ew.prototype.B = function (a) {
    var b = Mw(this, a.target);
    0 <= b && this.dispatchEvent({ type: "select", pb: this.h[b].id });
    a.stopPropagation();
  };
  Ew.prototype.D = function (a) {
    a.stopPropagation();
    a.g();
  };
  Ew.prototype.F = function (a) {
    a = Mw(this, a.target);
    0 <= a && !(300 > Date.now() - this.H) && this.dispatchEvent({ type: "hilite", pb: this.h[a].id });
  };
  var Nw = function (a) {
    Y.call(this);
    this.B = yh(as);
    this.D = Ti(bd(), "n_ecmv3m");
    this.i = null;
    this.l = new sw();
    this.l.sa(this);
    this.v = new Ew();
    N(this, this.v);
    this.j = new pw(F(this.R, this));
    N(this, this.j);
    var b = new ww(this.l, this.v, this.j);
    b.sa(this);
    b.D = 100;
    this.j.g = b;
    this.F = [];
    this.A = a;
    vs(V(), this.G, this);
  };
  E(Nw, Y);
  Nw.prototype.T = function () {
    Y.prototype.T.call(this);
    var a = this.C();
    this.i = a.querySelector(".RmniWd-V67aGc-yrriRe");
    this.i.setAttribute("maxlength", "50");
    uh(this.i, "label", Ow);
    Ou.L().La(a.querySelector(".V67aGc-Bz112c"), Ow);
    dv(this).listen(this, "action", this.Z).listen(this.i, "input", this.S);
    dw(this.j, this.i);
    this.j.g.s = this.i;
    Pw(this);
  };
  Nw.prototype.N = function () {
    this.i.value = "";
    Pw(this);
    this.j.g.Aa();
  };
  var Qw = function (a, b) {
    b ? (a.i.removeAttribute("readonly"), dw(a.j, a.i)) : (a.i.setAttribute("readonly", !0), ew(a.j, a.i));
    iv(a, function (c) {
      return c.jd(b);
    });
  };
  Nw.prototype.G = function () {
    var a = V().h,
      b = V().g;
    b = b ? xo(b) : [];
    Ga(this.F, b) ||
      ((this.F = b),
      mv(this),
      Bd(
        b,
        function (c) {
          (c = On(a, c)) && kv(this, new Rw(c), !0);
        },
        this
      ),
      jv(this) && this.dispatchEvent("G"),
      (b = document.activeElement == this.i),
      this.C().appendChild(this.i),
      b && this.i && this.i.focus());
  };
  var Pw = function (a) {
    var b = rd(document, "SPAN");
    b.className = a.i.className;
    b.classList.add("RmniWd-V67aGc-yrriRe-DyBK0");
    b.innerText = a.i.value;
    document.body.appendChild(b);
    var c = b.getBoundingClientRect().width + 3;
    document.body.removeChild(b);
    a.i.style.width = c + "px";
  };
  Nw.prototype.Z = function (a) {
    var b = V().g;
    if (b && a.target instanceof Rw && ((a = a.target.Ha), Wn(b) && yo(b, a))) {
      a = t([a.g].concat(md(a.h)));
      for (var c = a.next(); !c.done; c = a.next())
        if ((c = b.v[c.value]) && !wo(c)) {
          var d = d || new Rh();
          c.g = d;
        }
      ao(b);
      Un(b);
      b.dispatchEvent("D");
    }
  };
  Nw.prototype.S = function () {
    this.dispatchEvent("G");
    Pw(this);
  };
  Nw.prototype.R = function (a) {
    var b = V(),
      c = b.g;
    b = b.h;
    if (c) {
      if ("QUMgc2VudGluZWwgbGFiZWw=" == a.g) {
        a = this.l.h;
        var d = a,
          e = Nn(b, d);
        e
          ? (b = e)
          : 100 <= cc(b.g)
          ? (b = null)
          : ((e = {}),
            (e = new Cn(((e.name = d), (e.mainId = "tag." + Hg() + "." + new Date().getTime()), e))),
            En(e),
            (b.g[e.g] = e),
            b.u(),
            b.s.listen(e, "k", b.u),
            (b = e));
        b && Ao(c, b);
        this.D ? (b && this.A && Gt(this.A, b), this.B.log(9056)) : y("impression", 9056);
      } else Ao(c, a), (a = a.ka()), this.D ? this.B.log(9060) : y("impression", 9060);
      Pw(this);
      c = chrome.i18n.getMessage("7733569569331009603", [a]);
      y("speakMessage", c);
      this.i && this.i.focus();
    }
  };
  var Ow = chrome.i18n.getMessage("11138431688427255"),
    Rw = function (a) {
      Y.call(this);
      this.j = yh(as);
      var b = chrome.i18n.getMessage("1988879857371940328", [a.ka()]);
      this.i = new Tv(b);
      kv(this, this.i);
      this.Ha = a;
      bv(this, a.g);
    };
  E(Rw, Y);
  Rw.prototype.Ga = function () {
    this.g = ud(lu);
  };
  Rw.prototype.T = function () {
    Y.prototype.T.call(this);
    hv(this.i, cv(this, "h1U9Be-V67aGc-VkLyEc"));
    lh(cv(this, "h1U9Be-V67aGc-V1ur5d"), this.Ha.ka());
    dv(this).listen(this, "action", this.l);
  };
  Rw.prototype.l = function (a) {
    a.target = this;
    Ti(bd(), "n_ecmv3m") ? this.j.log(9061) : y("impression", 9061);
  };
  Rw.prototype.jd = function (a) {
    this.i.setEnabled(a);
  };
  var Tw = function (a, b, c) {
    Rv.call(this, a, b, c, Sw.L());
  };
  E(Tw, Rv);
  var Sw = function () {};
  E(Sw, Qv);
  Sw.prototype.h = function () {
    return "Q0hgme-fmcmS-LgbsSe";
  };
  Sw.prototype.i = function () {
    return eu;
  };
  Sw.L = function () {
    return yh(Sw);
  };
  var Vw = function (a, b, c, d, e, f, g) {
    Y.call(this, a);
    this.i = new Uw(c);
    this.N = null;
    this.B = b;
    this.l = new Tw();
    kv(this, this.l);
    this.v = null;
    this.F = e || "";
    this.D = f || null;
    this.j = d || null;
    this.G = g || null;
    this.A = null;
  };
  E(Vw, Y);
  Vw.prototype.Ga = function () {
    this.g = ud(hu, { Xf: this.i.g });
  };
  Vw.prototype.T = function () {
    Y.prototype.T.call(this);
    this.N = cv(this, "Q0hgme-n5T17d-woLtV");
    X(this.N, this.i.i);
    lh(cv(this, "Q0hgme-vDaB1c-Ne3sFf"), this.B);
    dv(this).listen(this.g, "click", function (a) {
      a.stopPropagation();
    });
    hv(this.l, cv(this, "Q0hgme-vDaB1c-JIbuQc"));
    dv(this).listen(this.l, "action", this.S);
    this.l.setContent(this.F);
    Dv(this.l, !!this.F);
    this.i.g &&
      ((this.v = new Tv(Ww)), kv(this, this.v), hv(this.v, cv(this, "Q0hgme-vDaB1c-IYtByb")), dv(this).listen(this.v, "action", this.R));
    this.i.timeout && (this.A = hq(this.hide, this.i.timeout, this));
    hq(
      function () {
        !this.pa && su(this.C(), "ZiwkRe");
      },
      16,
      this
    );
  };
  Vw.prototype.getMessage = function () {
    return this.B;
  };
  Vw.prototype.hide = function (a) {
    this.pa || (a && (this.j && this.j(), (this.j = null)), Xw(this), uu(this.C(), "ZiwkRe"), hq(this.ga, 218, this));
  };
  var Xw = function (a) {
    null != a.A && n.clearTimeout(a.A);
  };
  Vw.prototype.S = function () {
    this.D && this.D();
    this.j = null;
    this.i.h || this.hide();
  };
  Vw.prototype.R = function () {
    this.hide();
    this.G && this.G();
  };
  Vw.prototype.K = function () {
    Y.prototype.K.call(this);
    Xw(this);
    this.j && this.j();
  };
  var Ww = chrome.i18n.getMessage("8342620486324515462"),
    Uw = function (a) {
      this.g = !a || !(a & 2);
      this.i = !!a && !!(a & 16);
      this.h = !!a && !!(a & 1);
      this.timeout = a && a & 4 ? 0 : !this.g || (a && a) ? 5e3 : 1e4;
    };
  var Yw = function () {
    M.call(this);
    this.i = qd();
    this.j = this.i.g.body;
    this.g = null;
    this.h = [];
  };
  E(Yw, M);
  Yw.prototype.config = function (a) {
    this.j = a || this.j;
  };
  Yw.prototype.clearAll = function (a) {
    var b = this.h;
    if (a) oc(b);
    else
      for (a = 0; a < b.length; a++) {
        var c = b[a];
        c.i.timeout && (Xw(c), hq(c.hide, 100 * a, c));
      }
  };
  var Zw = function (a) {
    return a.h[a.h.length - 1] || null;
  };
  Yw.prototype.show = function (a, b, c) {
    a = new Vw(this.i, a, b, c);
    $w(this, a);
    return a;
  };
  var ax = function (a, b, c, d, e) {
      b = new Vw(a.i, b, e, void 0, c, d, void 0);
      $w(a, b);
    },
    $w = function (a, b) {
      a.g || ((a.g = gh("DIV", "Q0hgme-vDaB1c-haAclf")), a.j.appendChild(a.g));
      X(a.g, !0);
      if (b.i.timeout)
        for (var c = a.h.length - 1; 0 <= c; c--) {
          var d = a.h[c];
          d.i.timeout && (d.hide(), a.h.splice(c, 1));
        }
      a.g.firstChild && b.i.timeout ? gv(b, a.g.firstChild) : b.wc(a.g);
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
  Yw.prototype.K = function () {
    M.prototype.K.call(this);
    delete this.g;
  };
  chrome.i18n.getMessage("2452145367257933677");
  var bx = chrome.i18n.getMessage("3542768157572111342"),
    cx = function () {
      Y.call(this);
      this.i = [];
      this.j = null;
      this.l = new Yw();
    };
  E(cx, Y);
  cx.prototype.Ga = function () {
    this.g = ud(ju);
  };
  cx.prototype.T = function () {
    var a = this;
    Y.prototype.T.call(this);
    y("impression", 9213);
    this.j = this.C().querySelector(".rymPhb-PntVL");
    this.l.config(this.g);
    ax(
      this.l,
      bx,
      Yo,
      function () {
        return a.dispatchEvent("J");
      },
      8
    );
  };
  cx.prototype.ac = function () {
    return this.j;
  };
  cx.prototype.update = function () {
    var a = V().g;
    a = a ? Rc(a) : [];
    for (
      Bd(
        a,
        function (b, c) {
          (c = this.i[c]) ? c.update(b) : ((c = new dx(b)), kv(this, c, !0), this.i.push(c));
        },
        this
      );
      this.i.length > a.length;

    )
      lv(this, this.i.pop());
    this.dispatchEvent("K");
  };
  var dx = function (a) {
    Y.call(this);
    this.j = a;
    this.i = null;
  };
  E(dx, Y);
  dx.prototype.Ga = function () {
    this.g = ud(ku);
  };
  dx.prototype.T = function () {
    Y.prototype.T.call(this);
    this.i = this.C().querySelector(".rymPhb-ibnC6b-fmcmS");
    this.update(this.j);
  };
  dx.prototype.update = function (a) {
    lh(this.i, Sc(a));
    wu(this.C(), "barxie", a.xa);
  };
  var ex = function () {
    this.g = chrome.storage.local;
    this.h = RegExp("^gksn-");
  };
  ex.prototype.get = function (a, b) {
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
  ex.prototype.getAll = function (a) {
    this.get("", a);
  };
  ex.prototype.set = function (a, b, c) {
    var d = {};
    d[a] = b;
    fx(this, d, c);
  };
  var fx = function (a, b, c) {
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
  ex.prototype.remove = function (a, b) {
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
  ex.prototype.contains = function (a, b) {
    gx(
      this,
      a,
      ee(function (c, d) {
        c(!!d);
      }, b)
    );
  };
  var gx = function (a, b, c) {
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
  var hx = {
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
    ix = hx;
  ix = hx;
  var jx = {
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
    kx = jx;
  kx = jx;
  var lx = function () {
    qd();
  };
  lx.prototype.wc = function (a, b) {
    a = a(b || {}, {});
    return String(a);
  };
  var mx = function (a) {
    a(pd, {});
  };
  new lx();
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
  var nx = chrome.i18n.getMessage("5592884381280360832");
  chrome.i18n.getMessage("6069780031254134657");
  chrome.i18n.getMessage("7624042048123264803");
  chrome.i18n.getMessage("900086393693234779");
  chrome.i18n.getMessage("6822520214440117457");
  chrome.i18n.getMessage("5275304974990264425");
  chrome.i18n.getMessage("4514241210910366093");
  chrome.i18n.getMessage("1694896269813520248");
  chrome.i18n.getMessage("7254411458460045711");
  chrome.i18n.getMessage("5510222038351634163");
  mx(function () {
    return chrome.i18n.getMessage("8104421162933956065");
  });
  mx(function () {
    return chrome.i18n.getMessage("1055686627716339120");
  });
  mx(function () {
    return chrome.i18n.getMessage("2983318659047499045");
  });
  mx(function () {
    return chrome.i18n.getMessage("3418677553313974490");
  });
  mx(function () {
    return chrome.i18n.getMessage("546766753072101168");
  });
  mx(function () {
    return chrome.i18n.getMessage("7585826646011739428");
  });
  mx(function () {
    return chrome.i18n.getMessage("7528441140724145783");
  });
  mx(function () {
    return chrome.i18n.getMessage("2323249770683736002");
  });
  mx(function () {
    return chrome.i18n.getMessage("4930506384627295710");
  });
  mx(function () {
    return chrome.i18n.getMessage("7102649289752747375");
  });
  mx(function () {
    return chrome.i18n.getMessage("7911416166208830577");
  });
  mx(function () {
    return chrome.i18n.getMessage("8193677552005249631");
  });
  mx(function () {
    return chrome.i18n.getMessage("7005745151564974365");
  });
  mx(function () {
    return chrome.i18n.getMessage("7384785369409503695");
  });
  mx(function () {
    return chrome.i18n.getMessage("4974261966265341751");
  });
  mx(function () {
    return chrome.i18n.getMessage("7420364754178516134");
  });
  mx(function () {
    return chrome.i18n.getMessage("5570885401952336951");
  });
  mx(function () {
    return chrome.i18n.getMessage("9146862513672039744");
  });
  chrome.i18n.getMessage("3714239567487848851");
  chrome.i18n.getMessage("2930974997943171554");
  chrome.i18n.getMessage("7735981667219692675");
  chrome.i18n.getMessage("3769279410443855918");
  var ox = function (a, b, c) {
      this.j = a;
      this.i = b;
      this.h = c;
    },
    sx = function (a) {
      px(a, a.h).then(function (b) {
        !b && 36e5 < Date.now() - qx && rx(a);
      });
    },
    rx = function (a) {
      qx = Date.now();
      ax(
        a.j,
        a.i,
        nx,
        function () {
          a.g.set(a.h, !0);
        },
        6
      );
    },
    qx = 0;
  var tx = new Zm(),
    ux = chrome.i18n.getMessage("7253527966847172544", [tx.format(new Date(2022, 11, 5))]),
    vx = function (a) {
      ox.call(this, a, ux, "mv2_deprecation_message");
      this.g = yh(ex);
    };
  E(vx, ox);
  var px = function (a, b) {
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
  var wx = {},
    Zb =
      ((wx.DEFAULT = "#FFFFFF"),
      (wx.RED = "#FAAFA8"),
      (wx.ORANGE = "#F39F76"),
      (wx.YELLOW = "#FFF8B8"),
      (wx.GREEN = "#E2F6D3"),
      (wx.TEAL = "#B4DDD3"),
      (wx.BLUE = "#D4E4ED"),
      (wx.CERULEAN = "#AECCDC"),
      (wx.PURPLE = "#D3BFDB"),
      (wx.PINK = "#F6E2DD"),
      (wx.BROWN = "#E9E3D4"),
      (wx.GRAY = "#EFEFF1"),
      wx),
    xx = function () {
      this.g = $b(function (a) {
        if (!yw.test(a)) throw Error("Ca`" + a);
        4 == a.length && (a = a.replace(xw, "#$1$1$2$2$3$3"));
        a = a.toLowerCase();
        a = parseInt(a.slice(1), 16);
        return ("rgb(" + [a >> 16, (a >> 8) & 255, a & 255].join() + ")").replace("rgb", "rgba").replace(")", ", 0.8)");
      });
      this.g.DEFAULT = "rgba(242, 242, 242, 0.8)";
    };
  xx.prototype.aa = function (a) {
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
  var yx = [[], []],
    zx = 0,
    Ax = !1,
    Bx = 0,
    Dx = function (a, b) {
      var c = Bx++,
        d = { Zf: { id: c, Pa: a.measure, context: b }, bg: { id: c, Pa: a.ie, context: b }, state: {}, args: void 0, qc: !1 };
      return function () {
        0 < arguments.length
          ? (d.args || (d.args = []), (d.args.length = 0), d.args.push.apply(d.args, arguments), d.args.push(d.state))
          : d.args && 0 != d.args.length
          ? ((d.args[0] = d.state), (d.args.length = 1))
          : (d.args = [d.state]);
        d.qc || ((d.qc = !0), yx[zx].push(d));
        Ax || ((Ax = !0), window.requestAnimationFrame(Cx));
      };
    },
    Cx = function () {
      Ax = !1;
      var a = yx[zx],
        b = a.length;
      zx = (zx + 1) % 2;
      for (var c, d = 0; d < b; ++d) {
        c = a[d];
        var e = c.Zf;
        c.qc = !1;
        e.Pa && e.Pa.apply(e.context, c.args);
      }
      for (d = 0; d < b; ++d) (c = a[d]), (e = c.bg), (c.qc = !1), e.Pa && e.Pa.apply(e.context, c.args), (c.state = {});
      a.length = 0;
    };
  var Ex = H ? yg(tg(new sg(qg, 'javascript:""'))) : yg(tg(new sg(qg, "about:blank")));
  H ? yg(tg(new sg(qg, 'javascript:""'))) : yg(tg(new sg(qg, "javascript:undefined")));
  var Fx = function (a) {
    R.call(this);
    this.g = a;
    a = H ? "focusout" : "blur";
    this.h = wj(this.g, H ? "focusin" : "focus", this, !H);
    this.i = wj(this.g, a, this, !H);
  };
  G(Fx, R);
  Fx.prototype.handleEvent = function (a) {
    var b = new jj(a.h);
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    this.dispatchEvent(b);
  };
  Fx.prototype.K = function () {
    Fx.O.K.call(this);
    Ej(this.h);
    Ej(this.i);
    delete this.g;
  };
  var Gx = function (a, b) {
    this.i = a;
    this.h = b;
  };
  var Hx = function (a, b) {
    Y.call(this, b);
    this.Me = !!a;
    this.Z = null;
    this.Ce = Dx({ ie: this.xc }, this);
    Dx({ ie: this.Fe }, this);
  };
  G(Hx, Y);
  k = Hx.prototype;
  k.Sc = null;
  k.cc = !1;
  k.za = null;
  k.ma = null;
  k.Fa = null;
  k.Oc = !1;
  k.Ga = function () {
    Hx.O.Ga.call(this);
    var a = this.C();
    tu(a, je("VIpgJd-TUo6Hb").split(" "));
    oh(a, !0);
    X(a, !1);
    Ix(this);
    Jx(this);
  };
  var Ix = function (a) {
      if (a.Me && !a.ma) {
        var b = a.h.rb("IFRAME", { frameborder: 0, style: "border:0;vertical-align:bottom;" });
        b.src = vg(Ex);
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
      a.za || ((a.za = a.h.rb("DIV", "VIpgJd-TUo6Hb-xJ5Hnf")), X(a.za, !1));
    },
    Jx = function (a) {
      a.Fa || ((a.Fa = rd(a.h.g, "SPAN")), X(a.Fa, !1), oh(a.Fa, !0), (a.Fa.style.position = "absolute"));
    };
  k = Hx.prototype;
  k.ve = function () {
    this.Oc = !1;
  };
  k.Dc = function (a) {
    return !!a && "DIV" == a.tagName;
  };
  k.vb = function (a) {
    Hx.O.vb.call(this, a);
    a = je("VIpgJd-TUo6Hb").split(" ");
    tu(this.C(), a);
    Ix(this);
    Jx(this);
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
    Hx.O.T.call(this);
    a = this.Fa;
    b = this.C();
    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling);
    this.Sc = new Fx(this.h.g);
    dv(this).listen(this.Sc, "focusin", this.onFocus);
    Kx(this, !1);
  };
  k.ib = function () {
    this.isVisible() && Lx(this, !1);
    nc(this.Sc);
    Hx.O.ib.call(this);
    jh(this.ma);
    jh(this.za);
    jh(this.Fa);
  };
  var Lx = function (a, b) {
      if (b != a.cc)
        if ((a.ca && a.ca.stop(), a.wa && a.wa.stop(), a.ba && a.ba.stop(), a.ua && a.ua.stop(), a.da && Kx(a, b), b)) {
          if (a.dispatchEvent("beforeshow")) {
            try {
              a.Z = a.h.g.activeElement;
            } catch (f) {}
            a.Fe();
            dv(a).listen(ch(a.h.g), "resize", a.xc).listen(ch(a.h.g), "orientationchange", a.Ce);
            Mx(a, !0);
            a.focus();
            a.cc = !0;
            a.ca && a.wa ? (vj(a.ca, "end", a.pe, !1, a), a.wa.play(), a.ca.play()) : a.pe();
          }
        } else if (a.dispatchEvent("beforehide")) {
          dv(a).X(ch(a.h.g), "resize", a.xc).X(ch(a.h.g), "orientationchange", a.Ce);
          a.cc = !1;
          a.ba && a.ua ? (vj(a.ba, "end", a.je, !1, a), a.ua.play(), a.ba.play()) : a.je();
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
    Kx = function (a, b) {
      a.ze || (a.ze = new Gx(a.g, a.h));
      a = a.ze;
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
  Hx.prototype.Fe = function () {
    this.xc();
    this.Ad();
  };
  var Mx = function (a, b) {
    a.ma && X(a.ma, b);
    a.za && X(a.za, b);
    X(a.C(), b);
    X(a.Fa, b);
  };
  k = Hx.prototype;
  k.pe = function () {
    this.dispatchEvent("show");
  };
  k.je = function () {
    Mx(this, !1);
    this.dispatchEvent("hide");
  };
  k.isVisible = function () {
    return this.cc;
  };
  k.focus = function () {
    this.de();
  };
  k.xc = function () {
    this.ma && X(this.ma, !1);
    this.za && X(this.za, !1);
    var a = this.h.g;
    var b = ah(eh(this.h.g) || window || window);
    var c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth));
    a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
    this.ma && (X(this.ma, !0), Gu(this.ma, c, a));
    this.za && (X(this.za, !0), Gu(this.za, c, a));
  };
  k.Ad = function () {
    if ("fixed" == zu(this.C(), "position"))
      var a = 0,
        b = 0;
    else (b = dh(this.h.g)), (a = b.x), (b = b.y);
    var c = Iu(this.C());
    var d = ah(eh(this.h.g) || window || window);
    a = Math.max(a + d.width / 2 - c.width / 2, 0);
    b = Math.max(b + d.height / 2 - c.height / 2, 0);
    Bu(this.C(), a, b);
    Bu(this.Fa, a, b);
  };
  k.onFocus = function (a) {
    this.Oc ? this.ve() : a.target == this.Fa && hq(this.de, 0, this);
  };
  k.de = function () {
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
    Hx.O.K.call(this);
  };
  var Ox = function (a) {
    Hx.call(this);
    this.re = yh(as);
    this.gb = this.B = null;
    this.He = new xx();
    this.hb = null;
    this.A = new Yw();
    var b = chrome.i18n.getMessage("4047470251075013857");
    this.Da = new Tv(b);
    kv(this, this.Da);
    this.Ia = null;
    this.Sb = new Tw();
    kv(this, this.Sb);
    this.xb = new iq(this.oc, 5e3, this);
    N(this, this.xb);
    this.i = this.ya = this.l = this.jb = this.te = this.se = null;
    this.ta = new cx();
    kv(this, this.ta);
    this.Rb = null;
    this.yb = new Vv();
    kv(this, this.yb);
    this.zb = new Tv(Nx);
    kv(this, this.zb);
    this.F = new Tw();
    kv(this, this.F);
    this.xa = new Tw();
    kv(this, this.xa);
    this.R = new Tw();
    kv(this, this.R);
    this.Be = new Tv(Yo, "J");
    kv(this, this.Be);
    b = chrome.i18n.getMessage("9218540601355708194");
    this.Ee = new Tv(b, "L");
    kv(this, this.Ee);
    this.j = Ti(bd(), "n_ecmv3m");
    Ti(bd(), "n_scp") && !this.j ? ((this.S = new Tv(Xo)), kv(this, this.S)) : this.j && wj(window, "beforeunload", this.Vc);
    this.N = null;
    this.fb = !0;
    this.we = "";
    b = new iq(this.De, 20, this);
    N(this, b);
    this.Ca = new Jr(b.Bc, 30, b);
    N(this, this.Ca);
    this.Bb = 0;
    this.v = 1;
    vs(V(), this.update, this);
    this.j && a && ((this.tc = a), (this.Va = new Ct(this.tc)));
    this.D = new Nw(this.Va);
    kv(this, this.D);
    this.Ba = this.Ab = !1;
  };
  E(Ox, Hx);
  var Px = function (a) {
    Lt(a.Va, function (b, c) {
      c && ((b = {}), V().h.update(((b[Hn.Lc] = c), b)), (a.Ab = !0));
    });
  };
  Ox.prototype.vb = function (a) {
    Hx.prototype.vb.call(this, a);
    var b = (b = { hg: !!this.S, Yf: this.j });
    var c = b.hg,
      d = b.Yf;
    b = Rt;
    var e = '<div class="' + W("k77Iif-V68bde") + '">';
    var f = Rt(
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
        bu("Rsbfue-e1YmVc") +
        "</div>"
    );
    e =
      e +
      f +
      '<div class="' +
      W("HiaYvf-FCjw3e") +
      '"></div>' +
      Rt(
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
      ? ((f += bu(" Q0hgme-l4eHX ", Vt('<img src="icon_48.png" width="25" height="25" alt="Google Keep logo"/>'))),
        (c =
          "" +
          chrome.i18n.getMessage.apply(
            null,
            ["2159130950882492111", []].concat(79 <= (/Chrome\/(\d+)/.exec(navigator.userAgent) || [])[1] ? [{ escapeLt: !0 }] : [])
          )),
        (f += du(Vt(c), " IbE0S-h1U9Be ")),
        (c =
          "" +
          chrome.i18n.getMessage.apply(
            null,
            ["3623199266894863617", []].concat(79 <= (/Chrome\/(\d+)/.exec(navigator.userAgent) || [])[1] ? [{ escapeLt: !0 }] : [])
          )),
        (f += du(Vt(c), " t0O6ic-h1U9Be fmcmS-LgbsSe-v3pZbf ")),
        (c =
          "" +
          chrome.i18n.getMessage.apply(
            null,
            ["7819314041543176992", []].concat(79 <= (/Chrome\/(\d+)/.exec(navigator.userAgent) || [])[1] ? [{ escapeLt: !0 }] : [])
          )),
        (f += du(Vt(c), " TvD9Pc-h1U9Be fmcmS-LgbsSe-v3pZbf ")))
      : ((f += bu("zM6fo") + (c ? bu("N7Eqid") : "") + '<div class="' + W("Rsbfue-e1YmVc-sfGayb") + '"><label>'),
        (c = chrome.i18n.getMessage.apply(
          null,
          ["6857703948759289202", []].concat(79 <= (/Chrome\/(\d+)/.exec(navigator.userAgent) || [])[1] ? [{ escapeLt: !0 }] : [])
        )),
        (f = f + c + "&nbsp;</label>"),
        (c = chrome.i18n.getMessage("5775346636203685655")),
        (f += du(c, "hSRGPd")),
        (f +=
          '</div><div class="' +
          W("PrY1nf-Bz112c") +
          '"></div><label class="' +
          W("Yygnk-EglORb") +
          '"></label>' +
          bu("FNFY6c-bEDTcc-Q0hgme") +
          gu(void 0, "purZT")));
    f = Rt(f + "</div>");
    (b = b(e + f + '</div><div class="' + W("ugfBjd-V68bde") + '"></div>')) && b.h && a ? b.h(a) : ((b = sd(b)), td(a, b));
    this.B = a.querySelector(".k77Iif-V68bde");
    Ti(bd(), "n_emv2dm") && (this.gb = a.querySelector(".ugfBjd-V68bde")) && ((b = new Yw()), b.config(this.gb), sx(new vx(b)));
    this.hb = a.querySelector(".e1YmVc-haAclf");
    hv(this.Da, a.querySelector(".Rsbfue-e1YmVc"));
    this.se = a.querySelector(".e1YmVc-HiaYvf");
    this.te = a.querySelector(".e1YmVc-r4nke");
    this.jb = a.querySelector(".e1YmVc-dZ8yzd");
    this.ya = a.querySelector(".mwcmwf-haAclf");
    b = chrome.i18n.getMessage("2780054062282129350");
    this.l = a.querySelector(".h1U9Be-r4nke");
    this.l.setAttribute("maxlength", "999");
    uh(this.l, "label", b);
    this.l.placeholder = b;
    hv(this.yb, a.querySelector(".HiaYvf-FCjw3e"));
    b = chrome.i18n.getMessage("5061847320181369179");
    this.i = a.querySelector(".h1U9Be-qJTHM");
    this.i.setAttribute("maxlength", "16999");
    uh(this.i, "label", b);
    this.i.placeholder = b;
    hv(this.D, a.querySelector(".SjW3R-ZMv3u"));
    this.j
      ? (hv(this.zb, a.querySelector(".Q0hgme-l4eHX")),
        hv(this.F, a.querySelector(".t0O6ic-h1U9Be")),
        hv(this.xa, a.querySelector(".IbE0S-h1U9Be")),
        hv(this.R, a.querySelector(".TvD9Pc-h1U9Be")),
        Dv(this.R, !1),
        this.ya && this.A.config(this.ya))
      : ((this.Ia = a.querySelector(".Rsbfue-e1YmVc-sfGayb")),
        hv(this.Sb, this.Ia.querySelector(".Q0hgme-fmcmS-LgbsSe")),
        hv(this.Be, a.querySelector(".FNFY6c-bEDTcc-Q0hgme")),
        (this.Rb = a.querySelector(".Yygnk-EglORb")),
        hv(this.Ee, a.querySelector(".zM6fo")),
        this.S && hv(this.S, a.querySelector(".N7Eqid")));
  };
  Ox.prototype.T = function () {
    var a = this;
    Hx.prototype.T.call(this);
    sn(
      dv(this).listen(this, "J", function () {
        return Qx(a);
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
    this.S && dv(this).listen(this.S, "action", this.Of);
    Lx(this, !0);
    Rx(this, function () {
      a.j && y("configureContextMenu", a.v);
    });
  };
  Ox.prototype.update = function () {
    if (this.da) {
      this.j || Sx(this);
      var a = V(),
        b = a.i;
      a.j && b
        ? (lh(this.te, b.getTitle()),
          lh(this.jb, b.u || ""),
          Ou.L().La(this.jb, b.Qa()),
          (b = b.l),
          (this.se.style.backgroundImage = b ? "url('" + b + "')" : ""),
          X(this.hb, !0))
        : X(this.hb, !1);
      if ((b = a.g)) {
        var c = to(b);
        this.B.style.backgroundColor = this.He.aa(c);
        c != this.we && "DEFAULT" != c && y("impression", 9214);
        this.we = c;
        this.l.value != b.getTitle() && ((this.l.value = b.getTitle()), Tx(this, this.l));
        this.l.value && this.G(!0);
        Dv(this.Da, Pc(b));
        X(this.i, Pc(b));
        c = this.ta;
        var d = Vn(b);
        c.C() && X(c.C(), d);
        Vn(b)
          ? (this.ta.da || (gv(this.ta, this.i), this.l.focus()), this.ta.update(), this.G(!0))
          : (this.i.value != a.l &&
              ((this.i.value = a.l), Tx(this, this.i), this.i.focus(), (this.i.selectionStart = this.i.selectionEnd = this.i.value.length)),
            this.i.value && this.G(!0));
      }
    }
  };
  var Rx = function (a, b) {
      b = void 0 === b ? mg : b;
      var c = a.C();
      c &&
        (Tx(a, a.l),
        Tx(a, a.i),
        a.i.value && a.G(!0),
        c.classList.add("ZiwkRe"),
        hq(function () {
          a.De();
          a.i.focus();
          b();
        }, 218));
    },
    Wx = function (a, b) {
      var c = F(a.D.N, a.D);
      b = b ? ng(c, b) : c;
      if ((c = a.C()) && c.classList.contains("ZiwkRe")) {
        c.classList.remove("ZiwkRe");
        hq(b, 218);
        if (!a.j) {
          b = V().g;
          if (!b || !Pc(b) || !a.i.value) return;
          b = a.i.value.length;
          c = 2;
          b < Ux[1] ? (c = 0) : b < Ux[2] && (c = 1);
          y("impression", Vx[c]);
        }
        a.Bb = 0;
      } else b();
    };
  Ox.prototype.G = function (a) {
    var b = this,
      c = function () {
        wu(b.ya, "qAWA2", !a);
        a && (Tx(b, b.l), Tx(b, b.i));
        b.Ca.qa();
      };
    this.j
      ? Xx(this, "ping", void 0, function () {
          return c();
        })
      : c();
  };
  var Zx = function (a, b) {
    b
      ? (a.N ||
          ((a.N = ud(nu)),
          (b = new Tw()),
          hv(b, a.N.querySelector(".mKZypf-bEDTcc-LgbsSe")),
          dv(a).listen(b, "action", a.Uf),
          a.B && a.B.appendChild(a.N),
          Yx(a, 9212)),
        X(a.N, !0))
      : a.N && X(a.N, !1);
  };
  Ox.prototype.Ad = function () {};
  Ox.prototype.De = function () {
    var a = this.C().getBoundingClientRect(),
      b = Math,
      c = b.max,
      d = a.bottom;
    a = parseInt(window.getComputedStyle(this.C()).marginTop, 10) + a.height;
    var e = (e = this.D.v.C()) ? e.getBoundingClientRect().bottom : 0;
    b = c.call(b, d, a, e);
    b != this.Bb && (Xx(this, "appHeightChange", b + 10 + "px"), (this.Bb = b));
  };
  var Tx = function (a, b) {
      b && ((b.style.height = "auto"), (b.style.height = b.scrollHeight + "px"), a.Ca.qa());
    },
    Sx = function (a) {
      if (a.da) {
        if (a.fb) {
          var b = V();
          b.B && ys(b) ? (su(a.B, "vOkj6e"), uu(a.B, "PrY1nf"), (b = $x)) : (uu(a.B, "vOkj6e"), uu(a.B, "PrY1nf"), (b = ay));
        } else uu(a.B, "vOkj6e"), su(a.B, "PrY1nf"), (b = by);
        a.Rb && lh(a.Rb, b);
      }
    };
  Ox.prototype.kb = function () {
    var a = this,
      b = V().g,
      c = xo(b),
      d = new Ws();
    Xs(d);
    d.setTitle(b.getTitle());
    Us(d.g, Qc(b));
    b = cy(b);
    this.v = 2;
    dy(this, !1);
    ey(this);
    fy(this);
    It(this.Va, d, b, c, function (e, f) {
      hq(function () {
        a.v = gy(e);
        switch (a.v) {
          case 3:
          case 5:
            Dj(window, "beforeunload", a.Vc);
            break;
          case 6:
            dy(a, !0);
        }
        ey(a);
        fy(a, f);
        Yx(a, 9586, hy(a));
      }, 218);
    });
  };
  var cy = function (a) {
      return Eo(a).map(function (b) {
        b = Fo(b).l;
        return Lc.test(b) ? ((b = b.match(Lc)), new Ys(void 0, b ? b[2] : "")) : new Ys(b);
      });
    },
    gy = function (a) {
      if (kq(a)) return 3;
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
    ey = function (a) {
      switch (a.v) {
        case 2:
          a.F.setEnabled(!1);
          break;
        case 3:
        case 5:
          Dv(a.F, !1);
          Dv(a.xa, !1);
          Dv(a.R, !0);
          break;
        case 6:
          a.F.setEnabled(!0);
      }
    },
    fy = function (a, b) {
      var c = Zw(a.A);
      c
        ? (c.hide(),
          hq(function () {
            iy(a, b);
          }, 218))
        : iy(a, b);
    },
    iy = function (a, b) {
      switch (a.v) {
        case 2:
          a.A.show(jy, 22);
          break;
        case 3:
          ax(
            a.A,
            ky,
            ly,
            function () {
              b && Qx(a, b);
            },
            7
          );
          break;
        case 5:
          ax(
            a.A,
            my,
            ny,
            function () {
              var c = V().g;
              c = c.getTitle() + "\n" + Qc(c);
              navigator.clipboard.writeText(c);
            },
            6
          );
          break;
        case 4:
          a.A.show(oy, 6);
          break;
        case 6:
          ax(a.A, py, qy, function () {
            Zw(a.A).hide();
            hq(function () {
              return a.kb();
            }, 218);
          });
      }
    },
    dy = function (a, b) {
      if ((a.fb && !a.Ba) || !b)
        b
          ? (a.l.removeAttribute("readonly"), a.i.removeAttribute("readonly"))
          : (a.l.setAttribute("readonly", !0), a.i.setAttribute("readonly", !0)),
          Dv(a.Da, b),
          Qw(a.D, b),
          Zv(a.yb, b),
          Xx(a, "configureContextMenu", a.v);
    },
    ty = function (a) {
      a.Ba ||
        ((a.Ba = !0),
        2 !== a.v &&
          3 !== a.v &&
          (dy(a, !1),
          Dv(a.F, !1),
          Dv(a.xa, !1),
          Dv(a.R, !0),
          ax(
            a.A,
            ry,
            sy,
            function () {
              Zw(a.A).hide();
              hq(function () {
                return a.kb();
              }, 218);
            },
            6
          )));
    };
  k = Ox.prototype;
  k.ge = function () {
    var a = this;
    Dj(window, "beforeunload", this.Vc);
    Wx(this, function () {
      Xx(a, "configureContextMenu", void 0, function () {
        Xx(a, "removeIframe");
      });
    });
    Yx(this, 9585, hy(this));
    bs(this.re);
  };
  k.oc = function () {
    uu(this.Ia, "ZiwkRe");
    this.xb.stop();
  };
  k.Tf = function () {
    xs(!1);
    Yx(this, 9154);
    this.j || su(this.Ia, "ZiwkRe");
    Xx(this, "speakMessage", uy);
    this.l.focus();
    this.j || this.xb.start();
  };
  k.Wf = function () {
    xs(!0);
    y("impression", 9174);
    this.l.focus();
    this.oc();
  };
  k.Vf = function () {
    this.j || this.oc();
    var a = V().g;
    a && (!a.getTitle() && this.l.value && Yx(this, 9200), a.setTitle(this.l.value));
    Tx(this, this.l);
  };
  k.Rf = function () {
    this.j || this.oc();
    this.G(!0);
    var a = V();
    a.l = this.i.value;
    js(a);
    Tx(this, this.i);
  };
  var Qx = function (a, b) {
    var c = V().g;
    if ((c = b || c.g)) {
      b = window;
      c = { note: c };
      var d = wg.exec(vg(Wo)),
        e = d[3] || "";
      c = yg(d[1] + zg("?", d[2] || "", c) + zg("#", e));
      Fd(b, Dc(c.toString()));
      Yx(a, 9202);
    }
  };
  k = Ox.prototype;
  k.Sf = function () {
    Fd(window, Dc(Wo.toString()));
  };
  k.Of = function () {
    Fd(window, Vo);
    y("impression", 9193);
  };
  k.Mf = function (a) {
    0 == a.button &&
      (this.j && Xx(this, "ping"),
      this.G(!0),
      kh(this.D.C(), a.target) &&
        hq(
          function () {
            var b = this.D;
            b.i && b.i.focus();
          },
          0,
          this
        ));
  };
  k.ff = function (a) {
    if (27 == a.keyCode || (13 == a.keyCode && (Le ? a.metaKey : a.ctrlKey)))
      this.j ? (a = sh(this.h.g)) && a.blur() : (this.dispatchEvent("H"), a.stopPropagation(), a.g());
    else if (9 == a.keyCode && a.shiftKey && a.target == this.C()) {
      this.Oc = !0;
      try {
        this.Fa.focus();
      } catch (b) {}
      hq(this.ve, 0, this);
    } else this.j && Xx(this, "ping");
  };
  k.Uf = function () {
    this.j ? Ch(this.tc) : y("authRequest");
  };
  k.Vc = function (a) {
    if (V().g.i) return a.g(), (a.h.returnValue = "");
  };
  var Yx = function (a, b, c) {
      if (a.j) {
        var d = function (e) {
          e = lp(e);
          C(e, 58, c);
        };
        a.re.log(b, c && d);
      } else y("impression", b);
    },
    hy = function (a) {
      var b = new cj();
      return Yc(b, 3, vy[a.v]);
    },
    Xx = function (a, b, c, d) {
      if (!a.j) y(b, c, d);
      else if (!a.Ba)
        try {
          y(b, c, d);
        } catch (e) {
          ty(a);
        }
    },
    Nx = chrome.i18n.getMessage("9167784195765779453"),
    ly = chrome.i18n.getMessage("7687507512675715498"),
    qy = chrome.i18n.getMessage("1943542607990075955"),
    ny = chrome.i18n.getMessage("2259263507947555096"),
    ry = chrome.i18n.getMessage("1796799676667865488"),
    sy = chrome.i18n.getMessage("223492684871721243"),
    oy = chrome.i18n.getMessage("4035272937326361881"),
    wy = chrome.i18n.getMessage("4962916837925056840"),
    ky = chrome.i18n.getMessage("6717438461651235082"),
    py = chrome.i18n.getMessage("2336058986978607910"),
    my = chrome.i18n.getMessage("4184329490330819477"),
    jy = chrome.i18n.getMessage("3708201433602754428"),
    uy = chrome.i18n.getMessage("2269286357657606271"),
    $x = chrome.i18n.getMessage("4409688924773693376"),
    ay = chrome.i18n.getMessage("9116610943383363940"),
    by = chrome.i18n.getMessage("5782779707150593352"),
    Ux = [0, 100, 600],
    Vx = [9206, 9207, 9208],
    xy = {},
    vy = ((xy[0] = 0), (xy[1] = 1), (xy[2] = 1), (xy[3] = 3), (xy[4] = 4), (xy[5] = 2), (xy[6] = 2), xy);
  var ds = "s--" + new Date().getTime() + "--" + Math.round(2147483648 * Math.random()),
    zy = function () {
      M.call(this);
      var a = this;
      if ((this.i = Ti(bd(), "n_ecmv3m")))
        (this.j = new Ah(function (c) {
          var d = a.g;
          Zx(d, !c);
          dy(d, c);
          c && !d.Ab && Px(d);
          y("authAvailability", c);
        })),
          (this.o = yh(as)),
          Bh(this.j, !1, function () {
            cs(
              a.o,
              fs(function () {
                return a.j.g;
              })
            );
          });
      this.g = new Ox(this.j);
      N(this, this.g);
      this.i || ((this.A = new As()), N(this, this.A));
      this.h = V();
      this.s = new iq(this.B, 3e5, this);
      var b = new U(this);
      N(this, b);
      b.listen(this.g, "L", this.v).listen(this.h, "H", this.l).listen(this.g, "H", this.l);
      this.i &&
        b.listen(mp.L(), "change", function (c) {
          return yy(a, c.pc);
        });
    };
  E(zy, M);
  var By = function () {
      var a = Ay;
      hv(a.g, document.querySelector("#keep-it-container"));
      a.i
        ? (y("appLoaded", void 0, function (b) {
            ns(a.h, b);
          }),
          mp.L().pc() || yy(a, !1),
          a.o.log(9175))
        : y("appLoaded");
    },
    yy = function (a, b) {
      var c = a.g;
      c.fb = b;
      if (c.j) {
        if (3 !== c.v && !c.Ba) {
          !c.Ab && b && Px(c);
          dy(c, b);
          c.F.setEnabled(b);
          var d = Zw(c.A);
          b ? d && d.hide() : d || c.A.show(wy, 6);
        }
      } else Sx(c);
      a.h.R = b;
    };
  zy.prototype.l = function () {
    Wx(this.g, F(this.u, this));
    this.s.start();
  };
  zy.prototype.u = function () {
    y("finishHide");
    ws(this.h, !0);
    this.g.G(!1);
  };
  zy.prototype.B = function () {
    y("appSelfClose");
  };
  zy.prototype.v = function () {
    ws(this.h);
    y("impression", 9012);
    this.l();
  };
  var Ay = new zy(),
    Cy = function () {
      Ti(bd(), "n_dlis") ||
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
        (hn.yf = I18N_DATETIMEPATTERNS_YEAR_FULL),
        (hn.zf = I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR),
        (hn.Af = I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL),
        (hn.hf = I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR),
        (hn.jf = I18N_DATETIMEPATTERNS_MONTH_DAY_FULL),
        (hn.lf = I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT),
        (hn.kf = I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM),
        (hn.wf = I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM),
        (hn.Ne = I18N_DATETIMEPATTERNS_DAY_ABBR),
        (O.Td = n.I18N_DATETIMESYMBOLS_ZERODIGIT),
        (kx.Pe = I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP),
        (kx.Te = I18N_NUMBERFORMATSYMBOLS_GROUP_SEP),
        (kx.pf = I18N_NUMBERFORMATSYMBOLS_PERCENT),
        (kx.Bf = I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT),
        (kx.sf = I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN),
        (kx.gf = I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN),
        (kx.Se = I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL),
        (kx.rf = I18N_NUMBERFORMATSYMBOLS_PERMILL),
        (kx.Ue = I18N_NUMBERFORMATSYMBOLS_INFINITY),
        (kx.mf = I18N_NUMBERFORMATSYMBOLS_NAN),
        (kx.Oe = I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN),
        (kx.uf = I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN),
        (kx.qf = I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN),
        (kx.Le = I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN),
        (kx.Qe = I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE),
        (ix.Ke = I18N_COMPACT_DECIMAL_SHORT_PATTERN),
        (ix.Je = I18N_COMPACT_DECIMAL_LONG_PATTERN));
      By();
    },
    Dy = ["initNotesBrowserAction"],
    Ey = n;
  Dy[0] in Ey || "undefined" == typeof Ey.execScript || Ey.execScript("var " + Dy[0]);
  for (var Fy; Dy.length && (Fy = Dy.shift()); )
    Dy.length || void 0 === Cy ? (Ey[Fy] && Ey[Fy] !== Object.prototype[Fy] ? (Ey = Ey[Fy]) : (Ey = Ey[Fy] = {})) : (Ey[Fy] = Cy);
  chrome.runtime.onMessage.addListener(function (a, b, c) {
    b = Ay;
    if (vd(a))
      switch (a.type) {
        case "authAvailability":
          Zx(b.g, !a.value);
          c = b.h;
          a = !!a.value;
          c.B != a && ((c.B = a), c.u.qa());
          break;
        case "connectivity":
          yy(b, !!a.value);
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
          Rx(b.g);
          b.s.stop();
          break;
        case "syncResponse":
          b.i || ((a = a.value), rs(V(), a.nodes || void 0, a.userInfo || void 0));
          break;
        case "updateModel":
          ns(b.h, a.value);
          break;
        case "uploadMediaResponse":
          a = a.value;
          c = b.h.g;
          (c = (b = a.blobId) ? c.s[b] || null : null) &&
            Ho(c) &&
            ((b = Ho(c)), a.mediaJson ? (b.update(a.mediaJson), Em(b, "luc")) : a.mediaError && Em(b, "luf"), Un(c));
          break;
        case "urlChange":
          (c = b.h), c.i && Hh(c.i, a.value);
      }
  });
} catch (e) {
  _DumpException(e);
}
// Google Inc.
