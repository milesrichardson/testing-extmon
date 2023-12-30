/*! For license information please see bundle.js.LICENSE.txt */
var source;
(() => {
  "use strict";
  var t = {
      r: (t) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }
    },
    e = {};
  t.r(e);
  function a(t) {
    let e = t.length;
    for (; --e >= 0; ) t[e] = 0;
  }
  const i = 256,
    n = 286,
    s = 30,
    r = 15,
    o = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]),
    l = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
    h = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]),
    d = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
    _ = new Array(576);
  a(_);
  const f = new Array(60);
  a(f);
  const u = new Array(512);
  a(u);
  const c = new Array(256);
  a(c);
  const w = new Array(29);
  a(w);
  const b = new Array(s);
  function m(t, e, a, i, n) {
    (this.static_tree = t),
      (this.extra_bits = e),
      (this.extra_base = a),
      (this.elems = i),
      (this.max_length = n),
      (this.has_stree = t && t.length);
  }
  let g, p, k;
  function v(t, e) {
    (this.dyn_tree = t), (this.max_code = 0), (this.stat_desc = e);
  }
  a(b);
  const y = (t) => (t < 256 ? u[t] : u[256 + (t >>> 7)]),
    x = (t, e) => {
      (t.pending_buf[t.pending++] = 255 & e), (t.pending_buf[t.pending++] = (e >>> 8) & 255);
    },
    z = (t, e, a) => {
      t.bi_valid > 16 - a
        ? ((t.bi_buf |= (e << t.bi_valid) & 65535), x(t, t.bi_buf), (t.bi_buf = e >> (16 - t.bi_valid)), (t.bi_valid += a - 16))
        : ((t.bi_buf |= (e << t.bi_valid) & 65535), (t.bi_valid += a));
    },
    A = (t, e, a) => {
      z(t, a[2 * e], a[2 * e + 1]);
    },
    E = (t, e) => {
      let a = 0;
      do {
        (a |= 1 & t), (t >>>= 1), (a <<= 1);
      } while (--e > 0);
      return a >>> 1;
    },
    R = (t, e, a) => {
      const i = new Array(16);
      let n,
        s,
        o = 0;
      for (n = 1; n <= r; n++) (o = (o + a[n - 1]) << 1), (i[n] = o);
      for (s = 0; s <= e; s++) {
        let e = t[2 * s + 1];
        0 !== e && (t[2 * s] = E(i[e]++, e));
      }
    },
    Z = (t) => {
      let e;
      for (e = 0; e < n; e++) t.dyn_ltree[2 * e] = 0;
      for (e = 0; e < s; e++) t.dyn_dtree[2 * e] = 0;
      for (e = 0; e < 19; e++) t.bl_tree[2 * e] = 0;
      (t.dyn_ltree[512] = 1), (t.opt_len = t.static_len = 0), (t.sym_next = t.matches = 0);
    },
    S = (t) => {
      t.bi_valid > 8 ? x(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0);
    },
    U = (t, e, a, i) => {
      const n = 2 * e,
        s = 2 * a;
      return t[n] < t[s] || (t[n] === t[s] && i[e] <= i[a]);
    },
    D = (t, e, a) => {
      const i = t.heap[a];
      let n = a << 1;
      for (; n <= t.heap_len && (n < t.heap_len && U(e, t.heap[n + 1], t.heap[n], t.depth) && n++, !U(e, i, t.heap[n], t.depth)); )
        (t.heap[a] = t.heap[n]), (a = n), (n <<= 1);
      t.heap[a] = i;
    },
    T = (t, e, a) => {
      let n,
        s,
        r,
        h,
        d = 0;
      if (0 !== t.sym_next)
        do {
          (n = 255 & t.pending_buf[t.sym_buf + d++]),
            (n += (255 & t.pending_buf[t.sym_buf + d++]) << 8),
            (s = t.pending_buf[t.sym_buf + d++]),
            0 === n
              ? A(t, s, e)
              : ((r = c[s]),
                A(t, r + i + 1, e),
                (h = o[r]),
                0 !== h && ((s -= w[r]), z(t, s, h)),
                n--,
                (r = y(n)),
                A(t, r, a),
                (h = l[r]),
                0 !== h && ((n -= b[r]), z(t, n, h)));
        } while (d < t.sym_next);
      A(t, 256, e);
    },
    O = (t, e) => {
      const a = e.dyn_tree,
        i = e.stat_desc.static_tree,
        n = e.stat_desc.has_stree,
        s = e.stat_desc.elems;
      let o,
        l,
        h,
        d = -1;
      for (t.heap_len = 0, t.heap_max = 573, o = 0; o < s; o++)
        0 !== a[2 * o] ? ((t.heap[++t.heap_len] = d = o), (t.depth[o] = 0)) : (a[2 * o + 1] = 0);
      for (; t.heap_len < 2; )
        (h = t.heap[++t.heap_len] = d < 2 ? ++d : 0), (a[2 * h] = 1), (t.depth[h] = 0), t.opt_len--, n && (t.static_len -= i[2 * h + 1]);
      for (e.max_code = d, o = t.heap_len >> 1; o >= 1; o--) D(t, a, o);
      h = s;
      do {
        (o = t.heap[1]),
          (t.heap[1] = t.heap[t.heap_len--]),
          D(t, a, 1),
          (l = t.heap[1]),
          (t.heap[--t.heap_max] = o),
          (t.heap[--t.heap_max] = l),
          (a[2 * h] = a[2 * o] + a[2 * l]),
          (t.depth[h] = (t.depth[o] >= t.depth[l] ? t.depth[o] : t.depth[l]) + 1),
          (a[2 * o + 1] = a[2 * l + 1] = h),
          (t.heap[1] = h++),
          D(t, a, 1);
      } while (t.heap_len >= 2);
      (t.heap[--t.heap_max] = t.heap[1]),
        ((t, e) => {
          const a = e.dyn_tree,
            i = e.max_code,
            n = e.stat_desc.static_tree,
            s = e.stat_desc.has_stree,
            o = e.stat_desc.extra_bits,
            l = e.stat_desc.extra_base,
            h = e.stat_desc.max_length;
          let d,
            _,
            f,
            u,
            c,
            w,
            b = 0;
          for (u = 0; u <= r; u++) t.bl_count[u] = 0;
          for (a[2 * t.heap[t.heap_max] + 1] = 0, d = t.heap_max + 1; d < 573; d++)
            (_ = t.heap[d]),
              (u = a[2 * a[2 * _ + 1] + 1] + 1),
              u > h && ((u = h), b++),
              (a[2 * _ + 1] = u),
              _ > i ||
                (t.bl_count[u]++,
                (c = 0),
                _ >= l && (c = o[_ - l]),
                (w = a[2 * _]),
                (t.opt_len += w * (u + c)),
                s && (t.static_len += w * (n[2 * _ + 1] + c)));
          if (0 !== b) {
            do {
              for (u = h - 1; 0 === t.bl_count[u]; ) u--;
              t.bl_count[u]--, (t.bl_count[u + 1] += 2), t.bl_count[h]--, (b -= 2);
            } while (b > 0);
            for (u = h; 0 !== u; u--)
              for (_ = t.bl_count[u]; 0 !== _; )
                (f = t.heap[--d]), f > i || (a[2 * f + 1] !== u && ((t.opt_len += (u - a[2 * f + 1]) * a[2 * f]), (a[2 * f + 1] = u)), _--);
          }
        })(t, e),
        R(a, d, t.bl_count);
    },
    F = (t, e, a) => {
      let i,
        n,
        s = -1,
        r = e[1],
        o = 0,
        l = 7,
        h = 4;
      for (0 === r && ((l = 138), (h = 3)), e[2 * (a + 1) + 1] = 65535, i = 0; i <= a; i++)
        (n = r),
          (r = e[2 * (i + 1) + 1]),
          (++o < l && n === r) ||
            (o < h
              ? (t.bl_tree[2 * n] += o)
              : 0 !== n
              ? (n !== s && t.bl_tree[2 * n]++, t.bl_tree[32]++)
              : o <= 10
              ? t.bl_tree[34]++
              : t.bl_tree[36]++,
            (o = 0),
            (s = n),
            0 === r ? ((l = 138), (h = 3)) : n === r ? ((l = 6), (h = 3)) : ((l = 7), (h = 4)));
    },
    L = (t, e, a) => {
      let i,
        n,
        s = -1,
        r = e[1],
        o = 0,
        l = 7,
        h = 4;
      for (0 === r && ((l = 138), (h = 3)), i = 0; i <= a; i++)
        if (((n = r), (r = e[2 * (i + 1) + 1]), !(++o < l && n === r))) {
          if (o < h)
            do {
              A(t, n, t.bl_tree);
            } while (0 != --o);
          else
            0 !== n
              ? (n !== s && (A(t, n, t.bl_tree), o--), A(t, 16, t.bl_tree), z(t, o - 3, 2))
              : o <= 10
              ? (A(t, 17, t.bl_tree), z(t, o - 3, 3))
              : (A(t, 18, t.bl_tree), z(t, o - 11, 7));
          (o = 0), (s = n), 0 === r ? ((l = 138), (h = 3)) : n === r ? ((l = 6), (h = 3)) : ((l = 7), (h = 4));
        }
    };
  let I = !1;
  const N = (t, e, a, i) => {
    z(t, 0 + (i ? 1 : 0), 3), S(t), x(t, a), x(t, ~a), a && t.pending_buf.set(t.window.subarray(e, e + a), t.pending), (t.pending += a);
  };
  var B = (t, e, a, n) => {
      let s,
        r,
        o = 0;
      t.level > 0
        ? (2 === t.strm.data_type &&
            (t.strm.data_type = ((t) => {
              let e,
                a = 4093624447;
              for (e = 0; e <= 31; e++, a >>>= 1) if (1 & a && 0 !== t.dyn_ltree[2 * e]) return 0;
              if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return 1;
              for (e = 32; e < i; e++) if (0 !== t.dyn_ltree[2 * e]) return 1;
              return 0;
            })(t)),
          O(t, t.l_desc),
          O(t, t.d_desc),
          (o = ((t) => {
            let e;
            for (
              F(t, t.dyn_ltree, t.l_desc.max_code), F(t, t.dyn_dtree, t.d_desc.max_code), O(t, t.bl_desc), e = 18;
              e >= 3 && 0 === t.bl_tree[2 * d[e] + 1];
              e--
            );
            return (t.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
          })(t)),
          (s = (t.opt_len + 3 + 7) >>> 3),
          (r = (t.static_len + 3 + 7) >>> 3),
          r <= s && (s = r))
        : (s = r = a + 5),
        a + 4 <= s && -1 !== e
          ? N(t, e, a, n)
          : 4 === t.strategy || r === s
          ? (z(t, 2 + (n ? 1 : 0), 3), T(t, _, f))
          : (z(t, 4 + (n ? 1 : 0), 3),
            ((t, e, a, i) => {
              let n;
              for (z(t, e - 257, 5), z(t, a - 1, 5), z(t, i - 4, 4), n = 0; n < i; n++) z(t, t.bl_tree[2 * d[n] + 1], 3);
              L(t, t.dyn_ltree, e - 1), L(t, t.dyn_dtree, a - 1);
            })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, o + 1),
            T(t, t.dyn_ltree, t.dyn_dtree)),
        Z(t),
        n && S(t);
    },
    C = {
      _tr_init: (t) => {
        I ||
          ((() => {
            let t, e, a, i, d;
            const v = new Array(16);
            for (a = 0, i = 0; i < 28; i++) for (w[i] = a, t = 0; t < 1 << o[i]; t++) c[a++] = i;
            for (c[a - 1] = i, d = 0, i = 0; i < 16; i++) for (b[i] = d, t = 0; t < 1 << l[i]; t++) u[d++] = i;
            for (d >>= 7; i < s; i++) for (b[i] = d << 7, t = 0; t < 1 << (l[i] - 7); t++) u[256 + d++] = i;
            for (e = 0; e <= r; e++) v[e] = 0;
            for (t = 0; t <= 143; ) (_[2 * t + 1] = 8), t++, v[8]++;
            for (; t <= 255; ) (_[2 * t + 1] = 9), t++, v[9]++;
            for (; t <= 279; ) (_[2 * t + 1] = 7), t++, v[7]++;
            for (; t <= 287; ) (_[2 * t + 1] = 8), t++, v[8]++;
            for (R(_, 287, v), t = 0; t < s; t++) (f[2 * t + 1] = 5), (f[2 * t] = E(t, 5));
            (g = new m(_, o, 257, n, r)), (p = new m(f, l, 0, s, r)), (k = new m(new Array(0), h, 0, 19, 7));
          })(),
          (I = !0)),
          (t.l_desc = new v(t.dyn_ltree, g)),
          (t.d_desc = new v(t.dyn_dtree, p)),
          (t.bl_desc = new v(t.bl_tree, k)),
          (t.bi_buf = 0),
          (t.bi_valid = 0),
          Z(t);
      },
      _tr_stored_block: N,
      _tr_flush_block: B,
      _tr_tally: (t, e, a) => (
        (t.pending_buf[t.sym_buf + t.sym_next++] = e),
        (t.pending_buf[t.sym_buf + t.sym_next++] = e >> 8),
        (t.pending_buf[t.sym_buf + t.sym_next++] = a),
        0 === e ? t.dyn_ltree[2 * a]++ : (t.matches++, e--, t.dyn_ltree[2 * (c[a] + i + 1)]++, t.dyn_dtree[2 * y(e)]++),
        t.sym_next === t.sym_end
      ),
      _tr_align: (t) => {
        z(t, 2, 3),
          A(t, 256, _),
          ((t) => {
            16 === t.bi_valid
              ? (x(t, t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0))
              : t.bi_valid >= 8 && ((t.pending_buf[t.pending++] = 255 & t.bi_buf), (t.bi_buf >>= 8), (t.bi_valid -= 8));
          })(t);
      }
    };
  var M = (t, e, a, i) => {
    let n = (65535 & t) | 0,
      s = ((t >>> 16) & 65535) | 0,
      r = 0;
    for (; 0 !== a; ) {
      (r = a > 2e3 ? 2e3 : a), (a -= r);
      do {
        (n = (n + e[i++]) | 0), (s = (s + n) | 0);
      } while (--r);
      (n %= 65521), (s %= 65521);
    }
    return n | (s << 16) | 0;
  };
  const H = new Uint32Array(
    (() => {
      let t,
        e = [];
      for (var a = 0; a < 256; a++) {
        t = a;
        for (var i = 0; i < 8; i++) t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
        e[a] = t;
      }
      return e;
    })()
  );
  var j = (t, e, a, i) => {
      const n = H,
        s = i + a;
      t ^= -1;
      for (let a = i; a < s; a++) t = (t >>> 8) ^ n[255 & (t ^ e[a])];
      return -1 ^ t;
    },
    K = {
      2: "need dictionary",
      1: "stream end",
      0: "",
      "-1": "file error",
      "-2": "stream error",
      "-3": "data error",
      "-4": "insufficient memory",
      "-5": "buffer error",
      "-6": "incompatible version"
    },
    P = {
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      Z_MEM_ERROR: -4,
      Z_BUF_ERROR: -5,
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      Z_BINARY: 0,
      Z_TEXT: 1,
      Z_UNKNOWN: 2,
      Z_DEFLATED: 8
    };
  const { _tr_init: Y, _tr_stored_block: G, _tr_flush_block: X, _tr_tally: W, _tr_align: q } = C,
    {
      Z_NO_FLUSH: J,
      Z_PARTIAL_FLUSH: Q,
      Z_FULL_FLUSH: V,
      Z_FINISH: $,
      Z_BLOCK: tt,
      Z_OK: et,
      Z_STREAM_END: at,
      Z_STREAM_ERROR: it,
      Z_DATA_ERROR: nt,
      Z_BUF_ERROR: st,
      Z_DEFAULT_COMPRESSION: rt,
      Z_FILTERED: ot,
      Z_HUFFMAN_ONLY: lt,
      Z_RLE: ht,
      Z_FIXED: dt,
      Z_DEFAULT_STRATEGY: _t,
      Z_UNKNOWN: ft,
      Z_DEFLATED: ut
    } = P,
    ct = 258,
    wt = 262,
    bt = 42,
    mt = 113,
    gt = 666,
    pt = (t, e) => ((t.msg = K[e]), e),
    kt = (t) => 2 * t - (t > 4 ? 9 : 0),
    vt = (t) => {
      let e = t.length;
      for (; --e >= 0; ) t[e] = 0;
    },
    yt = (t) => {
      let e,
        a,
        i,
        n = t.w_size;
      (e = t.hash_size), (i = e);
      do {
        (a = t.head[--i]), (t.head[i] = a >= n ? a - n : 0);
      } while (--e);
      (e = n), (i = e);
      do {
        (a = t.prev[--i]), (t.prev[i] = a >= n ? a - n : 0);
      } while (--e);
    };
  let xt = (t, e, a) => ((e << t.hash_shift) ^ a) & t.hash_mask;
  const zt = (t) => {
      const e = t.state;
      let a = e.pending;
      a > t.avail_out && (a = t.avail_out),
        0 !== a &&
          (t.output.set(e.pending_buf.subarray(e.pending_out, e.pending_out + a), t.next_out),
          (t.next_out += a),
          (e.pending_out += a),
          (t.total_out += a),
          (t.avail_out -= a),
          (e.pending -= a),
          0 === e.pending && (e.pending_out = 0));
    },
    At = (t, e) => {
      X(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), (t.block_start = t.strstart), zt(t.strm);
    },
    Et = (t, e) => {
      t.pending_buf[t.pending++] = e;
    },
    Rt = (t, e) => {
      (t.pending_buf[t.pending++] = (e >>> 8) & 255), (t.pending_buf[t.pending++] = 255 & e);
    },
    Zt = (t, e, a, i) => {
      let n = t.avail_in;
      return (
        n > i && (n = i),
        0 === n
          ? 0
          : ((t.avail_in -= n),
            e.set(t.input.subarray(t.next_in, t.next_in + n), a),
            1 === t.state.wrap ? (t.adler = M(t.adler, e, n, a)) : 2 === t.state.wrap && (t.adler = j(t.adler, e, n, a)),
            (t.next_in += n),
            (t.total_in += n),
            n)
      );
    },
    St = (t, e) => {
      let a,
        i,
        n = t.max_chain_length,
        s = t.strstart,
        r = t.prev_length,
        o = t.nice_match;
      const l = t.strstart > t.w_size - wt ? t.strstart - (t.w_size - wt) : 0,
        h = t.window,
        d = t.w_mask,
        _ = t.prev,
        f = t.strstart + ct;
      let u = h[s + r - 1],
        c = h[s + r];
      t.prev_length >= t.good_match && (n >>= 2), o > t.lookahead && (o = t.lookahead);
      do {
        if (((a = e), h[a + r] === c && h[a + r - 1] === u && h[a] === h[s] && h[++a] === h[s + 1])) {
          (s += 2), a++;
          do {} while (
            h[++s] === h[++a] &&
            h[++s] === h[++a] &&
            h[++s] === h[++a] &&
            h[++s] === h[++a] &&
            h[++s] === h[++a] &&
            h[++s] === h[++a] &&
            h[++s] === h[++a] &&
            h[++s] === h[++a] &&
            s < f
          );
          if (((i = ct - (f - s)), (s = f - ct), i > r)) {
            if (((t.match_start = e), (r = i), i >= o)) break;
            (u = h[s + r - 1]), (c = h[s + r]);
          }
        }
      } while ((e = _[e & d]) > l && 0 != --n);
      return r <= t.lookahead ? r : t.lookahead;
    },
    Ut = (t) => {
      const e = t.w_size;
      let a, i, n;
      do {
        if (
          ((i = t.window_size - t.lookahead - t.strstart),
          t.strstart >= e + (e - wt) &&
            (t.window.set(t.window.subarray(e, e + e - i), 0),
            (t.match_start -= e),
            (t.strstart -= e),
            (t.block_start -= e),
            t.insert > t.strstart && (t.insert = t.strstart),
            yt(t),
            (i += e)),
          0 === t.strm.avail_in)
        )
          break;
        if (((a = Zt(t.strm, t.window, t.strstart + t.lookahead, i)), (t.lookahead += a), t.lookahead + t.insert >= 3))
          for (
            n = t.strstart - t.insert, t.ins_h = t.window[n], t.ins_h = xt(t, t.ins_h, t.window[n + 1]);
            t.insert &&
            ((t.ins_h = xt(t, t.ins_h, t.window[n + 3 - 1])),
            (t.prev[n & t.w_mask] = t.head[t.ins_h]),
            (t.head[t.ins_h] = n),
            n++,
            t.insert--,
            !(t.lookahead + t.insert < 3));

          );
      } while (t.lookahead < wt && 0 !== t.strm.avail_in);
    },
    Dt = (t, e) => {
      let a,
        i,
        n,
        s = t.pending_buf_size - 5 > t.w_size ? t.w_size : t.pending_buf_size - 5,
        r = 0,
        o = t.strm.avail_in;
      do {
        if (((a = 65535), (n = (t.bi_valid + 42) >> 3), t.strm.avail_out < n)) break;
        if (
          ((n = t.strm.avail_out - n),
          (i = t.strstart - t.block_start),
          a > i + t.strm.avail_in && (a = i + t.strm.avail_in),
          a > n && (a = n),
          a < s && ((0 === a && e !== $) || e === J || a !== i + t.strm.avail_in))
        )
          break;
        (r = e === $ && a === i + t.strm.avail_in ? 1 : 0),
          G(t, 0, 0, r),
          (t.pending_buf[t.pending - 4] = a),
          (t.pending_buf[t.pending - 3] = a >> 8),
          (t.pending_buf[t.pending - 2] = ~a),
          (t.pending_buf[t.pending - 1] = ~a >> 8),
          zt(t.strm),
          i &&
            (i > a && (i = a),
            t.strm.output.set(t.window.subarray(t.block_start, t.block_start + i), t.strm.next_out),
            (t.strm.next_out += i),
            (t.strm.avail_out -= i),
            (t.strm.total_out += i),
            (t.block_start += i),
            (a -= i)),
          a && (Zt(t.strm, t.strm.output, t.strm.next_out, a), (t.strm.next_out += a), (t.strm.avail_out -= a), (t.strm.total_out += a));
      } while (0 === r);
      return (
        (o -= t.strm.avail_in),
        o &&
          (o >= t.w_size
            ? ((t.matches = 2),
              t.window.set(t.strm.input.subarray(t.strm.next_in - t.w_size, t.strm.next_in), 0),
              (t.strstart = t.w_size),
              (t.insert = t.strstart))
            : (t.window_size - t.strstart <= o &&
                ((t.strstart -= t.w_size),
                t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0),
                t.matches < 2 && t.matches++,
                t.insert > t.strstart && (t.insert = t.strstart)),
              t.window.set(t.strm.input.subarray(t.strm.next_in - o, t.strm.next_in), t.strstart),
              (t.strstart += o),
              (t.insert += o > t.w_size - t.insert ? t.w_size - t.insert : o)),
          (t.block_start = t.strstart)),
        t.high_water < t.strstart && (t.high_water = t.strstart),
        r
          ? 4
          : e !== J && e !== $ && 0 === t.strm.avail_in && t.strstart === t.block_start
          ? 2
          : ((n = t.window_size - t.strstart),
            t.strm.avail_in > n &&
              t.block_start >= t.w_size &&
              ((t.block_start -= t.w_size),
              (t.strstart -= t.w_size),
              t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0),
              t.matches < 2 && t.matches++,
              (n += t.w_size),
              t.insert > t.strstart && (t.insert = t.strstart)),
            n > t.strm.avail_in && (n = t.strm.avail_in),
            n && (Zt(t.strm, t.window, t.strstart, n), (t.strstart += n), (t.insert += n > t.w_size - t.insert ? t.w_size - t.insert : n)),
            t.high_water < t.strstart && (t.high_water = t.strstart),
            (n = (t.bi_valid + 42) >> 3),
            (n = t.pending_buf_size - n > 65535 ? 65535 : t.pending_buf_size - n),
            (s = n > t.w_size ? t.w_size : n),
            (i = t.strstart - t.block_start),
            (i >= s || ((i || e === $) && e !== J && 0 === t.strm.avail_in && i <= n)) &&
              ((a = i > n ? n : i),
              (r = e === $ && 0 === t.strm.avail_in && a === i ? 1 : 0),
              G(t, t.block_start, a, r),
              (t.block_start += a),
              zt(t.strm)),
            r ? 3 : 1)
      );
    },
    Tt = (t, e) => {
      let a, i;
      for (;;) {
        if (t.lookahead < wt) {
          if ((Ut(t), t.lookahead < wt && e === J)) return 1;
          if (0 === t.lookahead) break;
        }
        if (
          ((a = 0),
          t.lookahead >= 3 &&
            ((t.ins_h = xt(t, t.ins_h, t.window[t.strstart + 3 - 1])),
            (a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
            (t.head[t.ins_h] = t.strstart)),
          0 !== a && t.strstart - a <= t.w_size - wt && (t.match_length = St(t, a)),
          t.match_length >= 3)
        )
          if (
            ((i = W(t, t.strstart - t.match_start, t.match_length - 3)),
            (t.lookahead -= t.match_length),
            t.match_length <= t.max_lazy_match && t.lookahead >= 3)
          ) {
            t.match_length--;
            do {
              t.strstart++,
                (t.ins_h = xt(t, t.ins_h, t.window[t.strstart + 3 - 1])),
                (a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                (t.head[t.ins_h] = t.strstart);
            } while (0 != --t.match_length);
            t.strstart++;
          } else
            (t.strstart += t.match_length),
              (t.match_length = 0),
              (t.ins_h = t.window[t.strstart]),
              (t.ins_h = xt(t, t.ins_h, t.window[t.strstart + 1]));
        else (i = W(t, 0, t.window[t.strstart])), t.lookahead--, t.strstart++;
        if (i && (At(t, !1), 0 === t.strm.avail_out)) return 1;
      }
      return (
        (t.insert = t.strstart < 2 ? t.strstart : 2),
        e === $ ? (At(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (At(t, !1), 0 === t.strm.avail_out) ? 1 : 2
      );
    },
    Ot = (t, e) => {
      let a, i, n;
      for (;;) {
        if (t.lookahead < wt) {
          if ((Ut(t), t.lookahead < wt && e === J)) return 1;
          if (0 === t.lookahead) break;
        }
        if (
          ((a = 0),
          t.lookahead >= 3 &&
            ((t.ins_h = xt(t, t.ins_h, t.window[t.strstart + 3 - 1])),
            (a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
            (t.head[t.ins_h] = t.strstart)),
          (t.prev_length = t.match_length),
          (t.prev_match = t.match_start),
          (t.match_length = 2),
          0 !== a &&
            t.prev_length < t.max_lazy_match &&
            t.strstart - a <= t.w_size - wt &&
            ((t.match_length = St(t, a)),
            t.match_length <= 5 &&
              (t.strategy === ot || (3 === t.match_length && t.strstart - t.match_start > 4096)) &&
              (t.match_length = 2)),
          t.prev_length >= 3 && t.match_length <= t.prev_length)
        ) {
          (n = t.strstart + t.lookahead - 3),
            (i = W(t, t.strstart - 1 - t.prev_match, t.prev_length - 3)),
            (t.lookahead -= t.prev_length - 1),
            (t.prev_length -= 2);
          do {
            ++t.strstart <= n &&
              ((t.ins_h = xt(t, t.ins_h, t.window[t.strstart + 3 - 1])),
              (a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
              (t.head[t.ins_h] = t.strstart));
          } while (0 != --t.prev_length);
          if (((t.match_available = 0), (t.match_length = 2), t.strstart++, i && (At(t, !1), 0 === t.strm.avail_out))) return 1;
        } else if (t.match_available) {
          if (((i = W(t, 0, t.window[t.strstart - 1])), i && At(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out)) return 1;
        } else (t.match_available = 1), t.strstart++, t.lookahead--;
      }
      return (
        t.match_available && ((i = W(t, 0, t.window[t.strstart - 1])), (t.match_available = 0)),
        (t.insert = t.strstart < 2 ? t.strstart : 2),
        e === $ ? (At(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (At(t, !1), 0 === t.strm.avail_out) ? 1 : 2
      );
    };
  function Ft(t, e, a, i, n) {
    (this.good_length = t), (this.max_lazy = e), (this.nice_length = a), (this.max_chain = i), (this.func = n);
  }
  const Lt = [
    new Ft(0, 0, 0, 0, Dt),
    new Ft(4, 4, 8, 4, Tt),
    new Ft(4, 5, 16, 8, Tt),
    new Ft(4, 6, 32, 32, Tt),
    new Ft(4, 4, 16, 16, Ot),
    new Ft(8, 16, 32, 32, Ot),
    new Ft(8, 16, 128, 128, Ot),
    new Ft(8, 32, 128, 256, Ot),
    new Ft(32, 128, 258, 1024, Ot),
    new Ft(32, 258, 258, 4096, Ot)
  ];
  function It() {
    (this.strm = null),
      (this.status = 0),
      (this.pending_buf = null),
      (this.pending_buf_size = 0),
      (this.pending_out = 0),
      (this.pending = 0),
      (this.wrap = 0),
      (this.gzhead = null),
      (this.gzindex = 0),
      (this.method = ut),
      (this.last_flush = -1),
      (this.w_size = 0),
      (this.w_bits = 0),
      (this.w_mask = 0),
      (this.window = null),
      (this.window_size = 0),
      (this.prev = null),
      (this.head = null),
      (this.ins_h = 0),
      (this.hash_size = 0),
      (this.hash_bits = 0),
      (this.hash_mask = 0),
      (this.hash_shift = 0),
      (this.block_start = 0),
      (this.match_length = 0),
      (this.prev_match = 0),
      (this.match_available = 0),
      (this.strstart = 0),
      (this.match_start = 0),
      (this.lookahead = 0),
      (this.prev_length = 0),
      (this.max_chain_length = 0),
      (this.max_lazy_match = 0),
      (this.level = 0),
      (this.strategy = 0),
      (this.good_match = 0),
      (this.nice_match = 0),
      (this.dyn_ltree = new Uint16Array(1146)),
      (this.dyn_dtree = new Uint16Array(122)),
      (this.bl_tree = new Uint16Array(78)),
      vt(this.dyn_ltree),
      vt(this.dyn_dtree),
      vt(this.bl_tree),
      (this.l_desc = null),
      (this.d_desc = null),
      (this.bl_desc = null),
      (this.bl_count = new Uint16Array(16)),
      (this.heap = new Uint16Array(573)),
      vt(this.heap),
      (this.heap_len = 0),
      (this.heap_max = 0),
      (this.depth = new Uint16Array(573)),
      vt(this.depth),
      (this.sym_buf = 0),
      (this.lit_bufsize = 0),
      (this.sym_next = 0),
      (this.sym_end = 0),
      (this.opt_len = 0),
      (this.static_len = 0),
      (this.matches = 0),
      (this.insert = 0),
      (this.bi_buf = 0),
      (this.bi_valid = 0);
  }
  const Nt = (t) => {
      if (!t) return 1;
      const e = t.state;
      return !e ||
        e.strm !== t ||
        (e.status !== bt &&
          57 !== e.status &&
          69 !== e.status &&
          73 !== e.status &&
          91 !== e.status &&
          103 !== e.status &&
          e.status !== mt &&
          e.status !== gt)
        ? 1
        : 0;
    },
    Bt = (t) => {
      if (Nt(t)) return pt(t, it);
      (t.total_in = t.total_out = 0), (t.data_type = ft);
      const e = t.state;
      return (
        (e.pending = 0),
        (e.pending_out = 0),
        e.wrap < 0 && (e.wrap = -e.wrap),
        (e.status = 2 === e.wrap ? 57 : e.wrap ? bt : mt),
        (t.adler = 2 === e.wrap ? 0 : 1),
        (e.last_flush = -2),
        Y(e),
        et
      );
    },
    Ct = (t) => {
      const e = Bt(t);
      var a;
      return (
        e === et &&
          (((a = t.state).window_size = 2 * a.w_size),
          vt(a.head),
          (a.max_lazy_match = Lt[a.level].max_lazy),
          (a.good_match = Lt[a.level].good_length),
          (a.nice_match = Lt[a.level].nice_length),
          (a.max_chain_length = Lt[a.level].max_chain),
          (a.strstart = 0),
          (a.block_start = 0),
          (a.lookahead = 0),
          (a.insert = 0),
          (a.match_length = a.prev_length = 2),
          (a.match_available = 0),
          (a.ins_h = 0)),
        e
      );
    },
    Mt = (t, e, a, i, n, s) => {
      if (!t) return it;
      let r = 1;
      if (
        (e === rt && (e = 6),
        i < 0 ? ((r = 0), (i = -i)) : i > 15 && ((r = 2), (i -= 16)),
        n < 1 || n > 9 || a !== ut || i < 8 || i > 15 || e < 0 || e > 9 || s < 0 || s > dt || (8 === i && 1 !== r))
      )
        return pt(t, it);
      8 === i && (i = 9);
      const o = new It();
      return (
        (t.state = o),
        (o.strm = t),
        (o.status = bt),
        (o.wrap = r),
        (o.gzhead = null),
        (o.w_bits = i),
        (o.w_size = 1 << o.w_bits),
        (o.w_mask = o.w_size - 1),
        (o.hash_bits = n + 7),
        (o.hash_size = 1 << o.hash_bits),
        (o.hash_mask = o.hash_size - 1),
        (o.hash_shift = ~~((o.hash_bits + 3 - 1) / 3)),
        (o.window = new Uint8Array(2 * o.w_size)),
        (o.head = new Uint16Array(o.hash_size)),
        (o.prev = new Uint16Array(o.w_size)),
        (o.lit_bufsize = 1 << (n + 6)),
        (o.pending_buf_size = 4 * o.lit_bufsize),
        (o.pending_buf = new Uint8Array(o.pending_buf_size)),
        (o.sym_buf = o.lit_bufsize),
        (o.sym_end = 3 * (o.lit_bufsize - 1)),
        (o.level = e),
        (o.strategy = s),
        (o.method = a),
        Ct(t)
      );
    };
  var Ht = {
    deflateInit: (t, e) => Mt(t, e, ut, 15, 8, _t),
    deflateInit2: Mt,
    deflateReset: Ct,
    deflateResetKeep: Bt,
    deflateSetHeader: (t, e) => (Nt(t) || 2 !== t.state.wrap ? it : ((t.state.gzhead = e), et)),
    deflate: (t, e) => {
      if (Nt(t) || e > tt || e < 0) return t ? pt(t, it) : it;
      const a = t.state;
      if (!t.output || (0 !== t.avail_in && !t.input) || (a.status === gt && e !== $)) return pt(t, 0 === t.avail_out ? st : it);
      const i = a.last_flush;
      if (((a.last_flush = e), 0 !== a.pending)) {
        if ((zt(t), 0 === t.avail_out)) return (a.last_flush = -1), et;
      } else if (0 === t.avail_in && kt(e) <= kt(i) && e !== $) return pt(t, st);
      if (a.status === gt && 0 !== t.avail_in) return pt(t, st);
      if ((a.status === bt && 0 === a.wrap && (a.status = mt), a.status === bt)) {
        let e = (ut + ((a.w_bits - 8) << 4)) << 8,
          i = -1;
        if (
          ((i = a.strategy >= lt || a.level < 2 ? 0 : a.level < 6 ? 1 : 6 === a.level ? 2 : 3),
          (e |= i << 6),
          0 !== a.strstart && (e |= 32),
          (e += 31 - (e % 31)),
          Rt(a, e),
          0 !== a.strstart && (Rt(a, t.adler >>> 16), Rt(a, 65535 & t.adler)),
          (t.adler = 1),
          (a.status = mt),
          zt(t),
          0 !== a.pending)
        )
          return (a.last_flush = -1), et;
      }
      if (57 === a.status)
        if (((t.adler = 0), Et(a, 31), Et(a, 139), Et(a, 8), a.gzhead))
          Et(
            a,
            (a.gzhead.text ? 1 : 0) +
              (a.gzhead.hcrc ? 2 : 0) +
              (a.gzhead.extra ? 4 : 0) +
              (a.gzhead.name ? 8 : 0) +
              (a.gzhead.comment ? 16 : 0)
          ),
            Et(a, 255 & a.gzhead.time),
            Et(a, (a.gzhead.time >> 8) & 255),
            Et(a, (a.gzhead.time >> 16) & 255),
            Et(a, (a.gzhead.time >> 24) & 255),
            Et(a, 9 === a.level ? 2 : a.strategy >= lt || a.level < 2 ? 4 : 0),
            Et(a, 255 & a.gzhead.os),
            a.gzhead.extra && a.gzhead.extra.length && (Et(a, 255 & a.gzhead.extra.length), Et(a, (a.gzhead.extra.length >> 8) & 255)),
            a.gzhead.hcrc && (t.adler = j(t.adler, a.pending_buf, a.pending, 0)),
            (a.gzindex = 0),
            (a.status = 69);
        else if (
          (Et(a, 0),
          Et(a, 0),
          Et(a, 0),
          Et(a, 0),
          Et(a, 0),
          Et(a, 9 === a.level ? 2 : a.strategy >= lt || a.level < 2 ? 4 : 0),
          Et(a, 3),
          (a.status = mt),
          zt(t),
          0 !== a.pending)
        )
          return (a.last_flush = -1), et;
      if (69 === a.status) {
        if (a.gzhead.extra) {
          let e = a.pending,
            i = (65535 & a.gzhead.extra.length) - a.gzindex;
          for (; a.pending + i > a.pending_buf_size; ) {
            let n = a.pending_buf_size - a.pending;
            if (
              (a.pending_buf.set(a.gzhead.extra.subarray(a.gzindex, a.gzindex + n), a.pending),
              (a.pending = a.pending_buf_size),
              a.gzhead.hcrc && a.pending > e && (t.adler = j(t.adler, a.pending_buf, a.pending - e, e)),
              (a.gzindex += n),
              zt(t),
              0 !== a.pending)
            )
              return (a.last_flush = -1), et;
            (e = 0), (i -= n);
          }
          let n = new Uint8Array(a.gzhead.extra);
          a.pending_buf.set(n.subarray(a.gzindex, a.gzindex + i), a.pending),
            (a.pending += i),
            a.gzhead.hcrc && a.pending > e && (t.adler = j(t.adler, a.pending_buf, a.pending - e, e)),
            (a.gzindex = 0);
        }
        a.status = 73;
      }
      if (73 === a.status) {
        if (a.gzhead.name) {
          let e,
            i = a.pending;
          do {
            if (a.pending === a.pending_buf_size) {
              if ((a.gzhead.hcrc && a.pending > i && (t.adler = j(t.adler, a.pending_buf, a.pending - i, i)), zt(t), 0 !== a.pending))
                return (a.last_flush = -1), et;
              i = 0;
            }
            (e = a.gzindex < a.gzhead.name.length ? 255 & a.gzhead.name.charCodeAt(a.gzindex++) : 0), Et(a, e);
          } while (0 !== e);
          a.gzhead.hcrc && a.pending > i && (t.adler = j(t.adler, a.pending_buf, a.pending - i, i)), (a.gzindex = 0);
        }
        a.status = 91;
      }
      if (91 === a.status) {
        if (a.gzhead.comment) {
          let e,
            i = a.pending;
          do {
            if (a.pending === a.pending_buf_size) {
              if ((a.gzhead.hcrc && a.pending > i && (t.adler = j(t.adler, a.pending_buf, a.pending - i, i)), zt(t), 0 !== a.pending))
                return (a.last_flush = -1), et;
              i = 0;
            }
            (e = a.gzindex < a.gzhead.comment.length ? 255 & a.gzhead.comment.charCodeAt(a.gzindex++) : 0), Et(a, e);
          } while (0 !== e);
          a.gzhead.hcrc && a.pending > i && (t.adler = j(t.adler, a.pending_buf, a.pending - i, i));
        }
        a.status = 103;
      }
      if (103 === a.status) {
        if (a.gzhead.hcrc) {
          if (a.pending + 2 > a.pending_buf_size && (zt(t), 0 !== a.pending)) return (a.last_flush = -1), et;
          Et(a, 255 & t.adler), Et(a, (t.adler >> 8) & 255), (t.adler = 0);
        }
        if (((a.status = mt), zt(t), 0 !== a.pending)) return (a.last_flush = -1), et;
      }
      if (0 !== t.avail_in || 0 !== a.lookahead || (e !== J && a.status !== gt)) {
        let i =
          0 === a.level
            ? Dt(a, e)
            : a.strategy === lt
            ? ((t, e) => {
                let a;
                for (;;) {
                  if (0 === t.lookahead && (Ut(t), 0 === t.lookahead)) {
                    if (e === J) return 1;
                    break;
                  }
                  if (
                    ((t.match_length = 0),
                    (a = W(t, 0, t.window[t.strstart])),
                    t.lookahead--,
                    t.strstart++,
                    a && (At(t, !1), 0 === t.strm.avail_out))
                  )
                    return 1;
                }
                return (
                  (t.insert = 0),
                  e === $ ? (At(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (At(t, !1), 0 === t.strm.avail_out) ? 1 : 2
                );
              })(a, e)
            : a.strategy === ht
            ? ((t, e) => {
                let a, i, n, s;
                const r = t.window;
                for (;;) {
                  if (t.lookahead <= ct) {
                    if ((Ut(t), t.lookahead <= ct && e === J)) return 1;
                    if (0 === t.lookahead) break;
                  }
                  if (
                    ((t.match_length = 0),
                    t.lookahead >= 3 && t.strstart > 0 && ((n = t.strstart - 1), (i = r[n]), i === r[++n] && i === r[++n] && i === r[++n]))
                  ) {
                    s = t.strstart + ct;
                    do {} while (
                      i === r[++n] &&
                      i === r[++n] &&
                      i === r[++n] &&
                      i === r[++n] &&
                      i === r[++n] &&
                      i === r[++n] &&
                      i === r[++n] &&
                      i === r[++n] &&
                      n < s
                    );
                    (t.match_length = ct - (s - n)), t.match_length > t.lookahead && (t.match_length = t.lookahead);
                  }
                  if (
                    (t.match_length >= 3
                      ? ((a = W(t, 1, t.match_length - 3)),
                        (t.lookahead -= t.match_length),
                        (t.strstart += t.match_length),
                        (t.match_length = 0))
                      : ((a = W(t, 0, t.window[t.strstart])), t.lookahead--, t.strstart++),
                    a && (At(t, !1), 0 === t.strm.avail_out))
                  )
                    return 1;
                }
                return (
                  (t.insert = 0),
                  e === $ ? (At(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (At(t, !1), 0 === t.strm.avail_out) ? 1 : 2
                );
              })(a, e)
            : Lt[a.level].func(a, e);
        if (((3 !== i && 4 !== i) || (a.status = gt), 1 === i || 3 === i)) return 0 === t.avail_out && (a.last_flush = -1), et;
        if (
          2 === i &&
          (e === Q
            ? q(a)
            : e !== tt &&
              (G(a, 0, 0, !1), e === V && (vt(a.head), 0 === a.lookahead && ((a.strstart = 0), (a.block_start = 0), (a.insert = 0)))),
          zt(t),
          0 === t.avail_out)
        )
          return (a.last_flush = -1), et;
      }
      return e !== $
        ? et
        : a.wrap <= 0
        ? at
        : (2 === a.wrap
            ? (Et(a, 255 & t.adler),
              Et(a, (t.adler >> 8) & 255),
              Et(a, (t.adler >> 16) & 255),
              Et(a, (t.adler >> 24) & 255),
              Et(a, 255 & t.total_in),
              Et(a, (t.total_in >> 8) & 255),
              Et(a, (t.total_in >> 16) & 255),
              Et(a, (t.total_in >> 24) & 255))
            : (Rt(a, t.adler >>> 16), Rt(a, 65535 & t.adler)),
          zt(t),
          a.wrap > 0 && (a.wrap = -a.wrap),
          0 !== a.pending ? et : at);
    },
    deflateEnd: (t) => {
      if (Nt(t)) return it;
      const e = t.state.status;
      return (t.state = null), e === mt ? pt(t, nt) : et;
    },
    deflateSetDictionary: (t, e) => {
      let a = e.length;
      if (Nt(t)) return it;
      const i = t.state,
        n = i.wrap;
      if (2 === n || (1 === n && i.status !== bt) || i.lookahead) return it;
      if ((1 === n && (t.adler = M(t.adler, e, a, 0)), (i.wrap = 0), a >= i.w_size)) {
        0 === n && (vt(i.head), (i.strstart = 0), (i.block_start = 0), (i.insert = 0));
        let t = new Uint8Array(i.w_size);
        t.set(e.subarray(a - i.w_size, a), 0), (e = t), (a = i.w_size);
      }
      const s = t.avail_in,
        r = t.next_in,
        o = t.input;
      for (t.avail_in = a, t.next_in = 0, t.input = e, Ut(i); i.lookahead >= 3; ) {
        let t = i.strstart,
          e = i.lookahead - 2;
        do {
          (i.ins_h = xt(i, i.ins_h, i.window[t + 3 - 1])), (i.prev[t & i.w_mask] = i.head[i.ins_h]), (i.head[i.ins_h] = t), t++;
        } while (--e);
        (i.strstart = t), (i.lookahead = 2), Ut(i);
      }
      return (
        (i.strstart += i.lookahead),
        (i.block_start = i.strstart),
        (i.insert = i.lookahead),
        (i.lookahead = 0),
        (i.match_length = i.prev_length = 2),
        (i.match_available = 0),
        (t.next_in = r),
        (t.input = o),
        (t.avail_in = s),
        (i.wrap = n),
        et
      );
    },
    deflateInfo: "pako deflate (from Nodeca project)"
  };
  const jt = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
  var Kt = {
    assign: function (t) {
      const e = Array.prototype.slice.call(arguments, 1);
      for (; e.length; ) {
        const a = e.shift();
        if (a) {
          if ("object" != typeof a) throw new TypeError(a + "must be non-object");
          for (const e in a) jt(a, e) && (t[e] = a[e]);
        }
      }
      return t;
    },
    flattenChunks: (t) => {
      let e = 0;
      for (let a = 0, i = t.length; a < i; a++) e += t[a].length;
      const a = new Uint8Array(e);
      for (let e = 0, i = 0, n = t.length; e < n; e++) {
        let n = t[e];
        a.set(n, i), (i += n.length);
      }
      return a;
    }
  };
  let Pt = !0;
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (t) {
    Pt = !1;
  }
  const Yt = new Uint8Array(256);
  for (let t = 0; t < 256; t++) Yt[t] = t >= 252 ? 6 : t >= 248 ? 5 : t >= 240 ? 4 : t >= 224 ? 3 : t >= 192 ? 2 : 1;
  Yt[254] = Yt[254] = 1;
  var Gt = {
    string2buf: (t) => {
      if ("function" == typeof TextEncoder && TextEncoder.prototype.encode) return new TextEncoder().encode(t);
      let e,
        a,
        i,
        n,
        s,
        r = t.length,
        o = 0;
      for (n = 0; n < r; n++)
        (a = t.charCodeAt(n)),
          55296 == (64512 & a) &&
            n + 1 < r &&
            ((i = t.charCodeAt(n + 1)), 56320 == (64512 & i) && ((a = 65536 + ((a - 55296) << 10) + (i - 56320)), n++)),
          (o += a < 128 ? 1 : a < 2048 ? 2 : a < 65536 ? 3 : 4);
      for (e = new Uint8Array(o), s = 0, n = 0; s < o; n++)
        (a = t.charCodeAt(n)),
          55296 == (64512 & a) &&
            n + 1 < r &&
            ((i = t.charCodeAt(n + 1)), 56320 == (64512 & i) && ((a = 65536 + ((a - 55296) << 10) + (i - 56320)), n++)),
          a < 128
            ? (e[s++] = a)
            : a < 2048
            ? ((e[s++] = 192 | (a >>> 6)), (e[s++] = 128 | (63 & a)))
            : a < 65536
            ? ((e[s++] = 224 | (a >>> 12)), (e[s++] = 128 | ((a >>> 6) & 63)), (e[s++] = 128 | (63 & a)))
            : ((e[s++] = 240 | (a >>> 18)),
              (e[s++] = 128 | ((a >>> 12) & 63)),
              (e[s++] = 128 | ((a >>> 6) & 63)),
              (e[s++] = 128 | (63 & a)));
      return e;
    },
    buf2string: (t, e) => {
      const a = e || t.length;
      if ("function" == typeof TextDecoder && TextDecoder.prototype.decode) return new TextDecoder().decode(t.subarray(0, e));
      let i, n;
      const s = new Array(2 * a);
      for (n = 0, i = 0; i < a; ) {
        let e = t[i++];
        if (e < 128) {
          s[n++] = e;
          continue;
        }
        let r = Yt[e];
        if (r > 4) (s[n++] = 65533), (i += r - 1);
        else {
          for (e &= 2 === r ? 31 : 3 === r ? 15 : 7; r > 1 && i < a; ) (e = (e << 6) | (63 & t[i++])), r--;
          r > 1
            ? (s[n++] = 65533)
            : e < 65536
            ? (s[n++] = e)
            : ((e -= 65536), (s[n++] = 55296 | ((e >> 10) & 1023)), (s[n++] = 56320 | (1023 & e)));
        }
      }
      return ((t, e) => {
        if (e < 65534 && t.subarray && Pt) return String.fromCharCode.apply(null, t.length === e ? t : t.subarray(0, e));
        let a = "";
        for (let i = 0; i < e; i++) a += String.fromCharCode(t[i]);
        return a;
      })(s, n);
    },
    utf8border: (t, e) => {
      (e = e || t.length) > t.length && (e = t.length);
      let a = e - 1;
      for (; a >= 0 && 128 == (192 & t[a]); ) a--;
      return a < 0 || 0 === a ? e : a + Yt[t[a]] > e ? a : e;
    }
  };
  var Xt = function () {
    (this.input = null),
      (this.next_in = 0),
      (this.avail_in = 0),
      (this.total_in = 0),
      (this.output = null),
      (this.next_out = 0),
      (this.avail_out = 0),
      (this.total_out = 0),
      (this.msg = ""),
      (this.state = null),
      (this.data_type = 2),
      (this.adler = 0);
  };
  const Wt = Object.prototype.toString,
    {
      Z_NO_FLUSH: qt,
      Z_SYNC_FLUSH: Jt,
      Z_FULL_FLUSH: Qt,
      Z_FINISH: Vt,
      Z_OK: $t,
      Z_STREAM_END: te,
      Z_DEFAULT_COMPRESSION: ee,
      Z_DEFAULT_STRATEGY: ae,
      Z_DEFLATED: ie
    } = P;
  function ne(t) {
    this.options = Kt.assign({ level: ee, method: ie, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: ae }, t || {});
    let e = this.options;
    e.raw && e.windowBits > 0 ? (e.windowBits = -e.windowBits) : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16),
      (this.err = 0),
      (this.msg = ""),
      (this.ended = !1),
      (this.chunks = []),
      (this.strm = new Xt()),
      (this.strm.avail_out = 0);
    let a = Ht.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
    if (a !== $t) throw new Error(K[a]);
    if ((e.header && Ht.deflateSetHeader(this.strm, e.header), e.dictionary)) {
      let t;
      if (
        ((t =
          "string" == typeof e.dictionary
            ? Gt.string2buf(e.dictionary)
            : "[object ArrayBuffer]" === Wt.call(e.dictionary)
            ? new Uint8Array(e.dictionary)
            : e.dictionary),
        (a = Ht.deflateSetDictionary(this.strm, t)),
        a !== $t)
      )
        throw new Error(K[a]);
      this._dict_set = !0;
    }
  }
  function se(t, e) {
    const a = new ne(e);
    if ((a.push(t, !0), a.err)) throw a.msg || K[a.err];
    return a.result;
  }
  (ne.prototype.push = function (t, e) {
    const a = this.strm,
      i = this.options.chunkSize;
    let n, s;
    if (this.ended) return !1;
    for (
      s = e === ~~e ? e : !0 === e ? Vt : qt,
        "string" == typeof t
          ? (a.input = Gt.string2buf(t))
          : "[object ArrayBuffer]" === Wt.call(t)
          ? (a.input = new Uint8Array(t))
          : (a.input = t),
        a.next_in = 0,
        a.avail_in = a.input.length;
      ;

    )
      if (
        (0 === a.avail_out && ((a.output = new Uint8Array(i)), (a.next_out = 0), (a.avail_out = i)),
        (s === Jt || s === Qt) && a.avail_out <= 6)
      )
        this.onData(a.output.subarray(0, a.next_out)), (a.avail_out = 0);
      else {
        if (((n = Ht.deflate(a, s)), n === te))
          return (
            a.next_out > 0 && this.onData(a.output.subarray(0, a.next_out)),
            (n = Ht.deflateEnd(this.strm)),
            this.onEnd(n),
            (this.ended = !0),
            n === $t
          );
        if (0 !== a.avail_out) {
          if (s > 0 && a.next_out > 0) this.onData(a.output.subarray(0, a.next_out)), (a.avail_out = 0);
          else if (0 === a.avail_in) break;
        } else this.onData(a.output);
      }
    return !0;
  }),
    (ne.prototype.onData = function (t) {
      this.chunks.push(t);
    }),
    (ne.prototype.onEnd = function (t) {
      t === $t && (this.result = Kt.flattenChunks(this.chunks)), (this.chunks = []), (this.err = t), (this.msg = this.strm.msg);
    });
  var re = {
    Deflate: ne,
    deflate: se,
    deflateRaw: function (t, e) {
      return ((e = e || {}).raw = !0), se(t, e);
    },
    gzip: function (t, e) {
      return ((e = e || {}).gzip = !0), se(t, e);
    },
    constants: P
  };
  const oe = 16209;
  var le = function (t, e) {
    let a, i, n, s, r, o, l, h, d, _, f, u, c, w, b, m, g, p, k, v, y, x, z, A;
    const E = t.state;
    (a = t.next_in),
      (z = t.input),
      (i = a + (t.avail_in - 5)),
      (n = t.next_out),
      (A = t.output),
      (s = n - (e - t.avail_out)),
      (r = n + (t.avail_out - 257)),
      (o = E.dmax),
      (l = E.wsize),
      (h = E.whave),
      (d = E.wnext),
      (_ = E.window),
      (f = E.hold),
      (u = E.bits),
      (c = E.lencode),
      (w = E.distcode),
      (b = (1 << E.lenbits) - 1),
      (m = (1 << E.distbits) - 1);
    t: do {
      u < 15 && ((f += z[a++] << u), (u += 8), (f += z[a++] << u), (u += 8)), (g = c[f & b]);
      e: for (;;) {
        if (((p = g >>> 24), (f >>>= p), (u -= p), (p = (g >>> 16) & 255), 0 === p)) A[n++] = 65535 & g;
        else {
          if (!(16 & p)) {
            if (0 == (64 & p)) {
              g = c[(65535 & g) + (f & ((1 << p) - 1))];
              continue e;
            }
            if (32 & p) {
              E.mode = 16191;
              break t;
            }
            (t.msg = "invalid literal/length code"), (E.mode = oe);
            break t;
          }
          (k = 65535 & g),
            (p &= 15),
            p && (u < p && ((f += z[a++] << u), (u += 8)), (k += f & ((1 << p) - 1)), (f >>>= p), (u -= p)),
            u < 15 && ((f += z[a++] << u), (u += 8), (f += z[a++] << u), (u += 8)),
            (g = w[f & m]);
          a: for (;;) {
            if (((p = g >>> 24), (f >>>= p), (u -= p), (p = (g >>> 16) & 255), !(16 & p))) {
              if (0 == (64 & p)) {
                g = w[(65535 & g) + (f & ((1 << p) - 1))];
                continue a;
              }
              (t.msg = "invalid distance code"), (E.mode = oe);
              break t;
            }
            if (
              ((v = 65535 & g),
              (p &= 15),
              u < p && ((f += z[a++] << u), (u += 8), u < p && ((f += z[a++] << u), (u += 8))),
              (v += f & ((1 << p) - 1)),
              v > o)
            ) {
              (t.msg = "invalid distance too far back"), (E.mode = oe);
              break t;
            }
            if (((f >>>= p), (u -= p), (p = n - s), v > p)) {
              if (((p = v - p), p > h && E.sane)) {
                (t.msg = "invalid distance too far back"), (E.mode = oe);
                break t;
              }
              if (((y = 0), (x = _), 0 === d)) {
                if (((y += l - p), p < k)) {
                  k -= p;
                  do {
                    A[n++] = _[y++];
                  } while (--p);
                  (y = n - v), (x = A);
                }
              } else if (d < p) {
                if (((y += l + d - p), (p -= d), p < k)) {
                  k -= p;
                  do {
                    A[n++] = _[y++];
                  } while (--p);
                  if (((y = 0), d < k)) {
                    (p = d), (k -= p);
                    do {
                      A[n++] = _[y++];
                    } while (--p);
                    (y = n - v), (x = A);
                  }
                }
              } else if (((y += d - p), p < k)) {
                k -= p;
                do {
                  A[n++] = _[y++];
                } while (--p);
                (y = n - v), (x = A);
              }
              for (; k > 2; ) (A[n++] = x[y++]), (A[n++] = x[y++]), (A[n++] = x[y++]), (k -= 3);
              k && ((A[n++] = x[y++]), k > 1 && (A[n++] = x[y++]));
            } else {
              y = n - v;
              do {
                (A[n++] = A[y++]), (A[n++] = A[y++]), (A[n++] = A[y++]), (k -= 3);
              } while (k > 2);
              k && ((A[n++] = A[y++]), k > 1 && (A[n++] = A[y++]));
            }
            break;
          }
        }
        break;
      }
    } while (a < i && n < r);
    (k = u >> 3),
      (a -= k),
      (u -= k << 3),
      (f &= (1 << u) - 1),
      (t.next_in = a),
      (t.next_out = n),
      (t.avail_in = a < i ? i - a + 5 : 5 - (a - i)),
      (t.avail_out = n < r ? r - n + 257 : 257 - (n - r)),
      (E.hold = f),
      (E.bits = u);
  };
  const he = 15,
    de = new Uint16Array([
      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
    ]),
    _e = new Uint8Array([
      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
    ]),
    fe = new Uint16Array([
      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385,
      24577, 0, 0
    ]),
    ue = new Uint8Array([
      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64
    ]);
  var ce = (t, e, a, i, n, s, r, o) => {
    const l = o.bits;
    let h,
      d,
      _,
      f,
      u,
      c,
      w = 0,
      b = 0,
      m = 0,
      g = 0,
      p = 0,
      k = 0,
      v = 0,
      y = 0,
      x = 0,
      z = 0,
      A = null;
    const E = new Uint16Array(16),
      R = new Uint16Array(16);
    let Z,
      S,
      U,
      D = null;
    for (w = 0; w <= he; w++) E[w] = 0;
    for (b = 0; b < i; b++) E[e[a + b]]++;
    for (p = l, g = he; g >= 1 && 0 === E[g]; g--);
    if ((p > g && (p = g), 0 === g)) return (n[s++] = 20971520), (n[s++] = 20971520), (o.bits = 1), 0;
    for (m = 1; m < g && 0 === E[m]; m++);
    for (p < m && (p = m), y = 1, w = 1; w <= he; w++) if (((y <<= 1), (y -= E[w]), y < 0)) return -1;
    if (y > 0 && (0 === t || 1 !== g)) return -1;
    for (R[1] = 0, w = 1; w < he; w++) R[w + 1] = R[w] + E[w];
    for (b = 0; b < i; b++) 0 !== e[a + b] && (r[R[e[a + b]]++] = b);
    if (
      (0 === t ? ((A = D = r), (c = 20)) : 1 === t ? ((A = de), (D = _e), (c = 257)) : ((A = fe), (D = ue), (c = 0)),
      (z = 0),
      (b = 0),
      (w = m),
      (u = s),
      (k = p),
      (v = 0),
      (_ = -1),
      (x = 1 << p),
      (f = x - 1),
      (1 === t && x > 852) || (2 === t && x > 592))
    )
      return 1;
    for (;;) {
      (Z = w - v),
        r[b] + 1 < c ? ((S = 0), (U = r[b])) : r[b] >= c ? ((S = D[r[b] - c]), (U = A[r[b] - c])) : ((S = 96), (U = 0)),
        (h = 1 << (w - v)),
        (d = 1 << k),
        (m = d);
      do {
        (d -= h), (n[u + (z >> v) + d] = (Z << 24) | (S << 16) | U | 0);
      } while (0 !== d);
      for (h = 1 << (w - 1); z & h; ) h >>= 1;
      if ((0 !== h ? ((z &= h - 1), (z += h)) : (z = 0), b++, 0 == --E[w])) {
        if (w === g) break;
        w = e[a + r[b]];
      }
      if (w > p && (z & f) !== _) {
        for (0 === v && (v = p), u += m, k = w - v, y = 1 << k; k + v < g && ((y -= E[k + v]), !(y <= 0)); ) k++, (y <<= 1);
        if (((x += 1 << k), (1 === t && x > 852) || (2 === t && x > 592))) return 1;
        (_ = z & f), (n[_] = (p << 24) | (k << 16) | (u - s) | 0);
      }
    }
    return 0 !== z && (n[u + z] = ((w - v) << 24) | (64 << 16) | 0), (o.bits = p), 0;
  };
  const {
      Z_FINISH: we,
      Z_BLOCK: be,
      Z_TREES: me,
      Z_OK: ge,
      Z_STREAM_END: pe,
      Z_NEED_DICT: ke,
      Z_STREAM_ERROR: ve,
      Z_DATA_ERROR: ye,
      Z_MEM_ERROR: xe,
      Z_BUF_ERROR: ze,
      Z_DEFLATED: Ae
    } = P,
    Ee = 16180,
    Re = 16190,
    Ze = 16191,
    Se = 16192,
    Ue = 16194,
    De = 16199,
    Te = 16200,
    Oe = 16206,
    Fe = 16209,
    Le = (t) => ((t >>> 24) & 255) + ((t >>> 8) & 65280) + ((65280 & t) << 8) + ((255 & t) << 24);
  function Ie() {
    (this.strm = null),
      (this.mode = 0),
      (this.last = !1),
      (this.wrap = 0),
      (this.havedict = !1),
      (this.flags = 0),
      (this.dmax = 0),
      (this.check = 0),
      (this.total = 0),
      (this.head = null),
      (this.wbits = 0),
      (this.wsize = 0),
      (this.whave = 0),
      (this.wnext = 0),
      (this.window = null),
      (this.hold = 0),
      (this.bits = 0),
      (this.length = 0),
      (this.offset = 0),
      (this.extra = 0),
      (this.lencode = null),
      (this.distcode = null),
      (this.lenbits = 0),
      (this.distbits = 0),
      (this.ncode = 0),
      (this.nlen = 0),
      (this.ndist = 0),
      (this.have = 0),
      (this.next = null),
      (this.lens = new Uint16Array(320)),
      (this.work = new Uint16Array(288)),
      (this.lendyn = null),
      (this.distdyn = null),
      (this.sane = 0),
      (this.back = 0),
      (this.was = 0);
  }
  const Ne = (t) => {
      if (!t) return 1;
      const e = t.state;
      return !e || e.strm !== t || e.mode < Ee || e.mode > 16211 ? 1 : 0;
    },
    Be = (t) => {
      if (Ne(t)) return ve;
      const e = t.state;
      return (
        (t.total_in = t.total_out = e.total = 0),
        (t.msg = ""),
        e.wrap && (t.adler = 1 & e.wrap),
        (e.mode = Ee),
        (e.last = 0),
        (e.havedict = 0),
        (e.flags = -1),
        (e.dmax = 32768),
        (e.head = null),
        (e.hold = 0),
        (e.bits = 0),
        (e.lencode = e.lendyn = new Int32Array(852)),
        (e.distcode = e.distdyn = new Int32Array(592)),
        (e.sane = 1),
        (e.back = -1),
        ge
      );
    },
    Ce = (t) => {
      if (Ne(t)) return ve;
      const e = t.state;
      return (e.wsize = 0), (e.whave = 0), (e.wnext = 0), Be(t);
    },
    Me = (t, e) => {
      let a;
      if (Ne(t)) return ve;
      const i = t.state;
      return (
        e < 0 ? ((a = 0), (e = -e)) : ((a = 5 + (e >> 4)), e < 48 && (e &= 15)),
        e && (e < 8 || e > 15) ? ve : (null !== i.window && i.wbits !== e && (i.window = null), (i.wrap = a), (i.wbits = e), Ce(t))
      );
    },
    He = (t, e) => {
      if (!t) return ve;
      const a = new Ie();
      (t.state = a), (a.strm = t), (a.window = null), (a.mode = Ee);
      const i = Me(t, e);
      return i !== ge && (t.state = null), i;
    };
  let je,
    Ke,
    Pe = !0;
  const Ye = (t) => {
      if (Pe) {
        (je = new Int32Array(512)), (Ke = new Int32Array(32));
        let e = 0;
        for (; e < 144; ) t.lens[e++] = 8;
        for (; e < 256; ) t.lens[e++] = 9;
        for (; e < 280; ) t.lens[e++] = 7;
        for (; e < 288; ) t.lens[e++] = 8;
        for (ce(1, t.lens, 0, 288, je, 0, t.work, { bits: 9 }), e = 0; e < 32; ) t.lens[e++] = 5;
        ce(2, t.lens, 0, 32, Ke, 0, t.work, { bits: 5 }), (Pe = !1);
      }
      (t.lencode = je), (t.lenbits = 9), (t.distcode = Ke), (t.distbits = 5);
    },
    Ge = (t, e, a, i) => {
      let n;
      const s = t.state;
      return (
        null === s.window && ((s.wsize = 1 << s.wbits), (s.wnext = 0), (s.whave = 0), (s.window = new Uint8Array(s.wsize))),
        i >= s.wsize
          ? (s.window.set(e.subarray(a - s.wsize, a), 0), (s.wnext = 0), (s.whave = s.wsize))
          : ((n = s.wsize - s.wnext),
            n > i && (n = i),
            s.window.set(e.subarray(a - i, a - i + n), s.wnext),
            (i -= n)
              ? (s.window.set(e.subarray(a - i, a), 0), (s.wnext = i), (s.whave = s.wsize))
              : ((s.wnext += n), s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += n))),
        0
      );
    };
  var Xe = {
    inflateReset: Ce,
    inflateReset2: Me,
    inflateResetKeep: Be,
    inflateInit: (t) => He(t, 15),
    inflateInit2: He,
    inflate: (t, e) => {
      let a,
        i,
        n,
        s,
        r,
        o,
        l,
        h,
        d,
        _,
        f,
        u,
        c,
        w,
        b,
        m,
        g,
        p,
        k,
        v,
        y,
        x,
        z = 0;
      const A = new Uint8Array(4);
      let E, R;
      const Z = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
      if (Ne(t) || !t.output || (!t.input && 0 !== t.avail_in)) return ve;
      (a = t.state),
        a.mode === Ze && (a.mode = Se),
        (r = t.next_out),
        (n = t.output),
        (l = t.avail_out),
        (s = t.next_in),
        (i = t.input),
        (o = t.avail_in),
        (h = a.hold),
        (d = a.bits),
        (_ = o),
        (f = l),
        (x = ge);
      t: for (;;)
        switch (a.mode) {
          case Ee:
            if (0 === a.wrap) {
              a.mode = Se;
              break;
            }
            for (; d < 16; ) {
              if (0 === o) break t;
              o--, (h += i[s++] << d), (d += 8);
            }
            if (2 & a.wrap && 35615 === h) {
              0 === a.wbits && (a.wbits = 15),
                (a.check = 0),
                (A[0] = 255 & h),
                (A[1] = (h >>> 8) & 255),
                (a.check = j(a.check, A, 2, 0)),
                (h = 0),
                (d = 0),
                (a.mode = 16181);
              break;
            }
            if ((a.head && (a.head.done = !1), !(1 & a.wrap) || (((255 & h) << 8) + (h >> 8)) % 31)) {
              (t.msg = "incorrect header check"), (a.mode = Fe);
              break;
            }
            if ((15 & h) !== Ae) {
              (t.msg = "unknown compression method"), (a.mode = Fe);
              break;
            }
            if (((h >>>= 4), (d -= 4), (y = 8 + (15 & h)), 0 === a.wbits && (a.wbits = y), y > 15 || y > a.wbits)) {
              (t.msg = "invalid window size"), (a.mode = Fe);
              break;
            }
            (a.dmax = 1 << a.wbits), (a.flags = 0), (t.adler = a.check = 1), (a.mode = 512 & h ? 16189 : Ze), (h = 0), (d = 0);
            break;
          case 16181:
            for (; d < 16; ) {
              if (0 === o) break t;
              o--, (h += i[s++] << d), (d += 8);
            }
            if (((a.flags = h), (255 & a.flags) !== Ae)) {
              (t.msg = "unknown compression method"), (a.mode = Fe);
              break;
            }
            if (57344 & a.flags) {
              (t.msg = "unknown header flags set"), (a.mode = Fe);
              break;
            }
            a.head && (a.head.text = (h >> 8) & 1),
              512 & a.flags && 4 & a.wrap && ((A[0] = 255 & h), (A[1] = (h >>> 8) & 255), (a.check = j(a.check, A, 2, 0))),
              (h = 0),
              (d = 0),
              (a.mode = 16182);
          case 16182:
            for (; d < 32; ) {
              if (0 === o) break t;
              o--, (h += i[s++] << d), (d += 8);
            }
            a.head && (a.head.time = h),
              512 & a.flags &&
                4 & a.wrap &&
                ((A[0] = 255 & h),
                (A[1] = (h >>> 8) & 255),
                (A[2] = (h >>> 16) & 255),
                (A[3] = (h >>> 24) & 255),
                (a.check = j(a.check, A, 4, 0))),
              (h = 0),
              (d = 0),
              (a.mode = 16183);
          case 16183:
            for (; d < 16; ) {
              if (0 === o) break t;
              o--, (h += i[s++] << d), (d += 8);
            }
            a.head && ((a.head.xflags = 255 & h), (a.head.os = h >> 8)),
              512 & a.flags && 4 & a.wrap && ((A[0] = 255 & h), (A[1] = (h >>> 8) & 255), (a.check = j(a.check, A, 2, 0))),
              (h = 0),
              (d = 0),
              (a.mode = 16184);
          case 16184:
            if (1024 & a.flags) {
              for (; d < 16; ) {
                if (0 === o) break t;
                o--, (h += i[s++] << d), (d += 8);
              }
              (a.length = h),
                a.head && (a.head.extra_len = h),
                512 & a.flags && 4 & a.wrap && ((A[0] = 255 & h), (A[1] = (h >>> 8) & 255), (a.check = j(a.check, A, 2, 0))),
                (h = 0),
                (d = 0);
            } else a.head && (a.head.extra = null);
            a.mode = 16185;
          case 16185:
            if (
              1024 & a.flags &&
              ((u = a.length),
              u > o && (u = o),
              u &&
                (a.head &&
                  ((y = a.head.extra_len - a.length),
                  a.head.extra || (a.head.extra = new Uint8Array(a.head.extra_len)),
                  a.head.extra.set(i.subarray(s, s + u), y)),
                512 & a.flags && 4 & a.wrap && (a.check = j(a.check, i, u, s)),
                (o -= u),
                (s += u),
                (a.length -= u)),
              a.length)
            )
              break t;
            (a.length = 0), (a.mode = 16186);
          case 16186:
            if (2048 & a.flags) {
              if (0 === o) break t;
              u = 0;
              do {
                (y = i[s + u++]), a.head && y && a.length < 65536 && (a.head.name += String.fromCharCode(y));
              } while (y && u < o);
              if ((512 & a.flags && 4 & a.wrap && (a.check = j(a.check, i, u, s)), (o -= u), (s += u), y)) break t;
            } else a.head && (a.head.name = null);
            (a.length = 0), (a.mode = 16187);
          case 16187:
            if (4096 & a.flags) {
              if (0 === o) break t;
              u = 0;
              do {
                (y = i[s + u++]), a.head && y && a.length < 65536 && (a.head.comment += String.fromCharCode(y));
              } while (y && u < o);
              if ((512 & a.flags && 4 & a.wrap && (a.check = j(a.check, i, u, s)), (o -= u), (s += u), y)) break t;
            } else a.head && (a.head.comment = null);
            a.mode = 16188;
          case 16188:
            if (512 & a.flags) {
              for (; d < 16; ) {
                if (0 === o) break t;
                o--, (h += i[s++] << d), (d += 8);
              }
              if (4 & a.wrap && h !== (65535 & a.check)) {
                (t.msg = "header crc mismatch"), (a.mode = Fe);
                break;
              }
              (h = 0), (d = 0);
            }
            a.head && ((a.head.hcrc = (a.flags >> 9) & 1), (a.head.done = !0)), (t.adler = a.check = 0), (a.mode = Ze);
            break;
          case 16189:
            for (; d < 32; ) {
              if (0 === o) break t;
              o--, (h += i[s++] << d), (d += 8);
            }
            (t.adler = a.check = Le(h)), (h = 0), (d = 0), (a.mode = Re);
          case Re:
            if (0 === a.havedict)
              return (t.next_out = r), (t.avail_out = l), (t.next_in = s), (t.avail_in = o), (a.hold = h), (a.bits = d), ke;
            (t.adler = a.check = 1), (a.mode = Ze);
          case Ze:
            if (e === be || e === me) break t;
          case Se:
            if (a.last) {
              (h >>>= 7 & d), (d -= 7 & d), (a.mode = Oe);
              break;
            }
            for (; d < 3; ) {
              if (0 === o) break t;
              o--, (h += i[s++] << d), (d += 8);
            }
            switch (((a.last = 1 & h), (h >>>= 1), (d -= 1), 3 & h)) {
              case 0:
                a.mode = 16193;
                break;
              case 1:
                if ((Ye(a), (a.mode = De), e === me)) {
                  (h >>>= 2), (d -= 2);
                  break t;
                }
                break;
              case 2:
                a.mode = 16196;
                break;
              case 3:
                (t.msg = "invalid block type"), (a.mode = Fe);
            }
            (h >>>= 2), (d -= 2);
            break;
          case 16193:
            for (h >>>= 7 & d, d -= 7 & d; d < 32; ) {
              if (0 === o) break t;
              o--, (h += i[s++] << d), (d += 8);
            }
            if ((65535 & h) != ((h >>> 16) ^ 65535)) {
              (t.msg = "invalid stored block lengths"), (a.mode = Fe);
              break;
            }
            if (((a.length = 65535 & h), (h = 0), (d = 0), (a.mode = Ue), e === me)) break t;
          case Ue:
            a.mode = 16195;
          case 16195:
            if (((u = a.length), u)) {
              if ((u > o && (u = o), u > l && (u = l), 0 === u)) break t;
              n.set(i.subarray(s, s + u), r), (o -= u), (s += u), (l -= u), (r += u), (a.length -= u);
              break;
            }
            a.mode = Ze;
            break;
          case 16196:
            for (; d < 14; ) {
              if (0 === o) break t;
              o--, (h += i[s++] << d), (d += 8);
            }
            if (
              ((a.nlen = 257 + (31 & h)),
              (h >>>= 5),
              (d -= 5),
              (a.ndist = 1 + (31 & h)),
              (h >>>= 5),
              (d -= 5),
              (a.ncode = 4 + (15 & h)),
              (h >>>= 4),
              (d -= 4),
              a.nlen > 286 || a.ndist > 30)
            ) {
              (t.msg = "too many length or distance symbols"), (a.mode = Fe);
              break;
            }
            (a.have = 0), (a.mode = 16197);
          case 16197:
            for (; a.have < a.ncode; ) {
              for (; d < 3; ) {
                if (0 === o) break t;
                o--, (h += i[s++] << d), (d += 8);
              }
              (a.lens[Z[a.have++]] = 7 & h), (h >>>= 3), (d -= 3);
            }
            for (; a.have < 19; ) a.lens[Z[a.have++]] = 0;
            if (
              ((a.lencode = a.lendyn),
              (a.lenbits = 7),
              (E = { bits: a.lenbits }),
              (x = ce(0, a.lens, 0, 19, a.lencode, 0, a.work, E)),
              (a.lenbits = E.bits),
              x)
            ) {
              (t.msg = "invalid code lengths set"), (a.mode = Fe);
              break;
            }
            (a.have = 0), (a.mode = 16198);
          case 16198:
            for (; a.have < a.nlen + a.ndist; ) {
              for (; (z = a.lencode[h & ((1 << a.lenbits) - 1)]), (b = z >>> 24), (m = (z >>> 16) & 255), (g = 65535 & z), !(b <= d); ) {
                if (0 === o) break t;
                o--, (h += i[s++] << d), (d += 8);
              }
              if (g < 16) (h >>>= b), (d -= b), (a.lens[a.have++] = g);
              else {
                if (16 === g) {
                  for (R = b + 2; d < R; ) {
                    if (0 === o) break t;
                    o--, (h += i[s++] << d), (d += 8);
                  }
                  if (((h >>>= b), (d -= b), 0 === a.have)) {
                    (t.msg = "invalid bit length repeat"), (a.mode = Fe);
                    break;
                  }
                  (y = a.lens[a.have - 1]), (u = 3 + (3 & h)), (h >>>= 2), (d -= 2);
                } else if (17 === g) {
                  for (R = b + 3; d < R; ) {
                    if (0 === o) break t;
                    o--, (h += i[s++] << d), (d += 8);
                  }
                  (h >>>= b), (d -= b), (y = 0), (u = 3 + (7 & h)), (h >>>= 3), (d -= 3);
                } else {
                  for (R = b + 7; d < R; ) {
                    if (0 === o) break t;
                    o--, (h += i[s++] << d), (d += 8);
                  }
                  (h >>>= b), (d -= b), (y = 0), (u = 11 + (127 & h)), (h >>>= 7), (d -= 7);
                }
                if (a.have + u > a.nlen + a.ndist) {
                  (t.msg = "invalid bit length repeat"), (a.mode = Fe);
                  break;
                }
                for (; u--; ) a.lens[a.have++] = y;
              }
            }
            if (a.mode === Fe) break;
            if (0 === a.lens[256]) {
              (t.msg = "invalid code -- missing end-of-block"), (a.mode = Fe);
              break;
            }
            if (
              ((a.lenbits = 9), (E = { bits: a.lenbits }), (x = ce(1, a.lens, 0, a.nlen, a.lencode, 0, a.work, E)), (a.lenbits = E.bits), x)
            ) {
              (t.msg = "invalid literal/lengths set"), (a.mode = Fe);
              break;
            }
            if (
              ((a.distbits = 6),
              (a.distcode = a.distdyn),
              (E = { bits: a.distbits }),
              (x = ce(2, a.lens, a.nlen, a.ndist, a.distcode, 0, a.work, E)),
              (a.distbits = E.bits),
              x)
            ) {
              (t.msg = "invalid distances set"), (a.mode = Fe);
              break;
            }
            if (((a.mode = De), e === me)) break t;
          case De:
            a.mode = Te;
          case Te:
            if (o >= 6 && l >= 258) {
              (t.next_out = r),
                (t.avail_out = l),
                (t.next_in = s),
                (t.avail_in = o),
                (a.hold = h),
                (a.bits = d),
                le(t, f),
                (r = t.next_out),
                (n = t.output),
                (l = t.avail_out),
                (s = t.next_in),
                (i = t.input),
                (o = t.avail_in),
                (h = a.hold),
                (d = a.bits),
                a.mode === Ze && (a.back = -1);
              break;
            }
            for (
              a.back = 0;
              (z = a.lencode[h & ((1 << a.lenbits) - 1)]), (b = z >>> 24), (m = (z >>> 16) & 255), (g = 65535 & z), !(b <= d);

            ) {
              if (0 === o) break t;
              o--, (h += i[s++] << d), (d += 8);
            }
            if (m && 0 == (240 & m)) {
              for (
                p = b, k = m, v = g;
                (z = a.lencode[v + ((h & ((1 << (p + k)) - 1)) >> p)]),
                  (b = z >>> 24),
                  (m = (z >>> 16) & 255),
                  (g = 65535 & z),
                  !(p + b <= d);

              ) {
                if (0 === o) break t;
                o--, (h += i[s++] << d), (d += 8);
              }
              (h >>>= p), (d -= p), (a.back += p);
            }
            if (((h >>>= b), (d -= b), (a.back += b), (a.length = g), 0 === m)) {
              a.mode = 16205;
              break;
            }
            if (32 & m) {
              (a.back = -1), (a.mode = Ze);
              break;
            }
            if (64 & m) {
              (t.msg = "invalid literal/length code"), (a.mode = Fe);
              break;
            }
            (a.extra = 15 & m), (a.mode = 16201);
          case 16201:
            if (a.extra) {
              for (R = a.extra; d < R; ) {
                if (0 === o) break t;
                o--, (h += i[s++] << d), (d += 8);
              }
              (a.length += h & ((1 << a.extra) - 1)), (h >>>= a.extra), (d -= a.extra), (a.back += a.extra);
            }
            (a.was = a.length), (a.mode = 16202);
          case 16202:
            for (; (z = a.distcode[h & ((1 << a.distbits) - 1)]), (b = z >>> 24), (m = (z >>> 16) & 255), (g = 65535 & z), !(b <= d); ) {
              if (0 === o) break t;
              o--, (h += i[s++] << d), (d += 8);
            }
            if (0 == (240 & m)) {
              for (
                p = b, k = m, v = g;
                (z = a.distcode[v + ((h & ((1 << (p + k)) - 1)) >> p)]),
                  (b = z >>> 24),
                  (m = (z >>> 16) & 255),
                  (g = 65535 & z),
                  !(p + b <= d);

              ) {
                if (0 === o) break t;
                o--, (h += i[s++] << d), (d += 8);
              }
              (h >>>= p), (d -= p), (a.back += p);
            }
            if (((h >>>= b), (d -= b), (a.back += b), 64 & m)) {
              (t.msg = "invalid distance code"), (a.mode = Fe);
              break;
            }
            (a.offset = g), (a.extra = 15 & m), (a.mode = 16203);
          case 16203:
            if (a.extra) {
              for (R = a.extra; d < R; ) {
                if (0 === o) break t;
                o--, (h += i[s++] << d), (d += 8);
              }
              (a.offset += h & ((1 << a.extra) - 1)), (h >>>= a.extra), (d -= a.extra), (a.back += a.extra);
            }
            if (a.offset > a.dmax) {
              (t.msg = "invalid distance too far back"), (a.mode = Fe);
              break;
            }
            a.mode = 16204;
          case 16204:
            if (0 === l) break t;
            if (((u = f - l), a.offset > u)) {
              if (((u = a.offset - u), u > a.whave && a.sane)) {
                (t.msg = "invalid distance too far back"), (a.mode = Fe);
                break;
              }
              u > a.wnext ? ((u -= a.wnext), (c = a.wsize - u)) : (c = a.wnext - u), u > a.length && (u = a.length), (w = a.window);
            } else (w = n), (c = r - a.offset), (u = a.length);
            u > l && (u = l), (l -= u), (a.length -= u);
            do {
              n[r++] = w[c++];
            } while (--u);
            0 === a.length && (a.mode = Te);
            break;
          case 16205:
            if (0 === l) break t;
            (n[r++] = a.length), l--, (a.mode = Te);
            break;
          case Oe:
            if (a.wrap) {
              for (; d < 32; ) {
                if (0 === o) break t;
                o--, (h |= i[s++] << d), (d += 8);
              }
              if (
                ((f -= l),
                (t.total_out += f),
                (a.total += f),
                4 & a.wrap && f && (t.adler = a.check = a.flags ? j(a.check, n, f, r - f) : M(a.check, n, f, r - f)),
                (f = l),
                4 & a.wrap && (a.flags ? h : Le(h)) !== a.check)
              ) {
                (t.msg = "incorrect data check"), (a.mode = Fe);
                break;
              }
              (h = 0), (d = 0);
            }
            a.mode = 16207;
          case 16207:
            if (a.wrap && a.flags) {
              for (; d < 32; ) {
                if (0 === o) break t;
                o--, (h += i[s++] << d), (d += 8);
              }
              if (4 & a.wrap && h !== (4294967295 & a.total)) {
                (t.msg = "incorrect length check"), (a.mode = Fe);
                break;
              }
              (h = 0), (d = 0);
            }
            a.mode = 16208;
          case 16208:
            x = pe;
            break t;
          case Fe:
            x = ye;
            break t;
          case 16210:
            return xe;
          default:
            return ve;
        }
      return (
        (t.next_out = r),
        (t.avail_out = l),
        (t.next_in = s),
        (t.avail_in = o),
        (a.hold = h),
        (a.bits = d),
        (a.wsize || (f !== t.avail_out && a.mode < Fe && (a.mode < Oe || e !== we))) && Ge(t, t.output, t.next_out, f - t.avail_out),
        (_ -= t.avail_in),
        (f -= t.avail_out),
        (t.total_in += _),
        (t.total_out += f),
        (a.total += f),
        4 & a.wrap && f && (t.adler = a.check = a.flags ? j(a.check, n, f, t.next_out - f) : M(a.check, n, f, t.next_out - f)),
        (t.data_type = a.bits + (a.last ? 64 : 0) + (a.mode === Ze ? 128 : 0) + (a.mode === De || a.mode === Ue ? 256 : 0)),
        ((0 === _ && 0 === f) || e === we) && x === ge && (x = ze),
        x
      );
    },
    inflateEnd: (t) => {
      if (Ne(t)) return ve;
      let e = t.state;
      return e.window && (e.window = null), (t.state = null), ge;
    },
    inflateGetHeader: (t, e) => {
      if (Ne(t)) return ve;
      const a = t.state;
      return 0 == (2 & a.wrap) ? ve : ((a.head = e), (e.done = !1), ge);
    },
    inflateSetDictionary: (t, e) => {
      const a = e.length;
      let i, n, s;
      return Ne(t)
        ? ve
        : ((i = t.state),
          0 !== i.wrap && i.mode !== Re
            ? ve
            : i.mode === Re && ((n = 1), (n = M(n, e, a, 0)), n !== i.check)
            ? ye
            : ((s = Ge(t, e, a, a)), s ? ((i.mode = 16210), xe) : ((i.havedict = 1), ge)));
    },
    inflateInfo: "pako inflate (from Nodeca project)"
  };
  var We = function () {
    (this.text = 0),
      (this.time = 0),
      (this.xflags = 0),
      (this.os = 0),
      (this.extra = null),
      (this.extra_len = 0),
      (this.name = ""),
      (this.comment = ""),
      (this.hcrc = 0),
      (this.done = !1);
  };
  const qe = Object.prototype.toString,
    {
      Z_NO_FLUSH: Je,
      Z_FINISH: Qe,
      Z_OK: Ve,
      Z_STREAM_END: $e,
      Z_NEED_DICT: ta,
      Z_STREAM_ERROR: ea,
      Z_DATA_ERROR: aa,
      Z_MEM_ERROR: ia
    } = P;
  function na(t) {
    this.options = Kt.assign({ chunkSize: 65536, windowBits: 15, to: "" }, t || {});
    const e = this.options;
    e.raw && e.windowBits >= 0 && e.windowBits < 16 && ((e.windowBits = -e.windowBits), 0 === e.windowBits && (e.windowBits = -15)),
      !(e.windowBits >= 0 && e.windowBits < 16) || (t && t.windowBits) || (e.windowBits += 32),
      e.windowBits > 15 && e.windowBits < 48 && 0 == (15 & e.windowBits) && (e.windowBits |= 15),
      (this.err = 0),
      (this.msg = ""),
      (this.ended = !1),
      (this.chunks = []),
      (this.strm = new Xt()),
      (this.strm.avail_out = 0);
    let a = Xe.inflateInit2(this.strm, e.windowBits);
    if (a !== Ve) throw new Error(K[a]);
    if (
      ((this.header = new We()),
      Xe.inflateGetHeader(this.strm, this.header),
      e.dictionary &&
        ("string" == typeof e.dictionary
          ? (e.dictionary = Gt.string2buf(e.dictionary))
          : "[object ArrayBuffer]" === qe.call(e.dictionary) && (e.dictionary = new Uint8Array(e.dictionary)),
        e.raw && ((a = Xe.inflateSetDictionary(this.strm, e.dictionary)), a !== Ve)))
    )
      throw new Error(K[a]);
  }
  function sa(t, e) {
    const a = new na(e);
    if ((a.push(t), a.err)) throw a.msg || K[a.err];
    return a.result;
  }
  (na.prototype.push = function (t, e) {
    const a = this.strm,
      i = this.options.chunkSize,
      n = this.options.dictionary;
    let s, r, o;
    if (this.ended) return !1;
    for (
      r = e === ~~e ? e : !0 === e ? Qe : Je,
        "[object ArrayBuffer]" === qe.call(t) ? (a.input = new Uint8Array(t)) : (a.input = t),
        a.next_in = 0,
        a.avail_in = a.input.length;
      ;

    ) {
      for (
        0 === a.avail_out && ((a.output = new Uint8Array(i)), (a.next_out = 0), (a.avail_out = i)),
          s = Xe.inflate(a, r),
          s === ta && n && ((s = Xe.inflateSetDictionary(a, n)), s === Ve ? (s = Xe.inflate(a, r)) : s === aa && (s = ta));
        a.avail_in > 0 && s === $e && a.state.wrap > 0 && 0 !== t[a.next_in];

      )
        Xe.inflateReset(a), (s = Xe.inflate(a, r));
      switch (s) {
        case ea:
        case aa:
        case ta:
        case ia:
          return this.onEnd(s), (this.ended = !0), !1;
      }
      if (((o = a.avail_out), a.next_out && (0 === a.avail_out || s === $e)))
        if ("string" === this.options.to) {
          let t = Gt.utf8border(a.output, a.next_out),
            e = a.next_out - t,
            n = Gt.buf2string(a.output, t);
          (a.next_out = e), (a.avail_out = i - e), e && a.output.set(a.output.subarray(t, t + e), 0), this.onData(n);
        } else this.onData(a.output.length === a.next_out ? a.output : a.output.subarray(0, a.next_out));
      if (s !== Ve || 0 !== o) {
        if (s === $e) return (s = Xe.inflateEnd(this.strm)), this.onEnd(s), (this.ended = !0), !0;
        if (0 === a.avail_in) break;
      }
    }
    return !0;
  }),
    (na.prototype.onData = function (t) {
      this.chunks.push(t);
    }),
    (na.prototype.onEnd = function (t) {
      t === Ve && ("string" === this.options.to ? (this.result = this.chunks.join("")) : (this.result = Kt.flattenChunks(this.chunks))),
        (this.chunks = []),
        (this.err = t),
        (this.msg = this.strm.msg);
    });
  var ra = {
    Inflate: na,
    inflate: sa,
    inflateRaw: function (t, e) {
      return ((e = e || {}).raw = !0), sa(t, e);
    },
    ungzip: sa,
    constants: P
  };
  const { Deflate: oa, deflate: la, deflateRaw: ha, gzip: da } = re,
    { Inflate: _a, inflate: fa, inflateRaw: ua, ungzip: ca } = ra;
  var wa = da;
  (onmessage = function (t) {
    let e,
      { data: a } = t;
    "gzip" === a.type && (e = new Uint8Array(new wa(a.data))), postMessage(e);
  }),
    (source = e);
})();
