(() => {
  var O = Object.defineProperty;
  var he = Object.getOwnPropertyDescriptor;
  var ue = Object.getOwnPropertyNames;
  var _e = Object.prototype.hasOwnProperty;
  var Y = (l, e) => () => (l && (e = l((l = 0))), e);
  var Z = (l, e) => () => (e || l((e = { exports: {} }).exports, e), e.exports),
    $ = (l, e) => {
      for (var r in e) O(l, r, { get: e[r], enumerable: !0 });
    },
    de = (l, e, r, t) => {
      if ((e && typeof e == "object") || typeof e == "function")
        for (let i of ue(e)) !_e.call(l, i) && i !== r && O(l, i, { get: () => e[i], enumerable: !(t = he(e, i)) || t.enumerable });
      return l;
    };
  var A = (l) => de(O({}, "__esModule", { value: !0 }), l);
  var te = Z((Fe, ee) => {
    var j = class {
      constructor() {
        (this.replyId = 0),
          (this.replies = {}),
          (this.listeners = {}),
          (this.hook = this.nullHook),
          (this.debugLevel = 0),
          (this.useTarget = !1),
          (this.logger = console),
          (this.posts = {});
      }
      setPost(e, r) {
        typeof e == "string" ? (this.posts[e] = r) : (this.post = e);
      }
      setUseTarget(e) {
        this.useTarget = e;
      }
      setDebugLevel(e) {
        this.debugLevel = e;
      }
      setHook(e) {
        let r = this,
          t = Date.now();
        function i() {
          return typeof window < "u" && typeof window.performance < "u" ? window.performance.now() : Date.now() - t;
        }
        e
          ? (this.hook = (n) => {
              n.timestamp = i();
              try {
                e(n);
              } catch (p) {
                r.logger.warn("Hoor error", p);
              }
            })
          : (this.hook = this.nullHook);
      }
      nullHook() {}
      call() {
        let e = this,
          r,
          t,
          i,
          n,
          p = Array.prototype.slice.call(arguments);
        return (
          typeof p[0] == "function" && (r = p.shift()),
          e.useTarget ? ([t, i, ...n] = p) : ([i, ...n] = p),
          new Promise(function (a, s) {
            let o = ++e.replyId;
            e.debugLevel >= 2 && e.logger.info("rpc #" + o, "call =>", i, n),
              e.hook({ type: "call", callee: t, rid: o, method: i, args: n }),
              (e.replies[o] = { resolve: a, reject: s, peer: t });
            let h = r || (e.useTarget && e.posts[t]) || e.post;
            e.useTarget
              ? h(t, { type: "weh#rpc", _request: o, _method: i, _args: [...n] })
              : h({ type: "weh#rpc", _request: o, _method: i, _args: [...n] });
          })
        );
      }
      receive(e, r, t) {
        let i = this;
        if (e._request)
          Promise.resolve()
            .then(() => {
              let n = i.listeners[e._method];
              if (typeof n == "function")
                return (
                  i.debugLevel >= 2 && i.logger.info("rpc #" + e._request, "serve <= ", e._method, e._args),
                  i.hook({ type: "call", caller: t, rid: e._request, method: e._method, args: e._args }),
                  Promise.resolve(n.apply(null, e._args))
                    .then((p) => (i.hook({ type: "reply", caller: t, rid: e._request, result: p }), p))
                    .catch((p) => {
                      throw (i.hook({ type: "reply", caller: t, rid: e._request, error: p.message }), p);
                    })
                );
              throw new Error("Method " + e._method + " is not a function");
            })
            .then((n) => {
              i.debugLevel >= 2 && i.logger.info("rpc #" + e._request, "serve => ", n),
                r({ type: "weh#rpc", _reply: e._request, _result: n });
            })
            .catch((n) => {
              i.debugLevel >= 1 && i.logger.info("rpc #" + e._request, "serve => !", n.message),
                r({ type: "weh#rpc", _reply: e._request, _error: n.message });
            });
        else if (e._reply) {
          let n = i.replies[e._reply];
          delete i.replies[e._reply],
            n
              ? e._error
                ? (i.debugLevel >= 1 && i.logger.info("rpc #" + e._reply, "call <= !", e._error),
                  i.hook({ type: "reply", callee: n.peer, rid: e._reply, error: e._error }),
                  n.reject(new Error(e._error)))
                : (i.debugLevel >= 2 && i.logger.info("rpc #" + e._reply, "call <= ", e._result),
                  i.hook({ type: "reply", callee: n.peer, rid: e._reply, result: e._result }),
                  n.resolve(e._result))
              : i.logger.error("Missing reply handler");
        }
      }
      listen(e) {
        Object.assign(this.listeners, e);
      }
    };
    ee.exports = new j();
  });
  var D = {};
  $(D, {
    ReadInt16: () => ye,
    ReadInt24: () => xe,
    ReadInt32: () => H,
    ReadInt64: () => ge,
    ReadInt8: () => we,
    ReadString: () => me,
    WriteInt16: () => ke,
    WriteInt24: () => Te,
    WriteInt32: () => ve,
    WriteInt8: () => Ie,
    dump: () => be
  });
  function me(l, e) {
    let r = [];
    for (; l[e]; ) r.push(l[e++]);
    return { string: String.fromCharCode.apply(null, r), length: r.length + 1 };
  }
  function H(l, e) {
    return (l[e] << 24) + (l[e + 1] << 16) + (l[e + 2] << 8) + l[e + 3];
  }
  function ge(l, e) {
    let r = H(l, e),
      t = H(l, e + 4);
    return r * 4294967296 + t;
  }
  function xe(l, e) {
    return (l[e] << 16) + (l[e + 1] << 8) + l[e + 2];
  }
  function ye(l, e) {
    return (l[e] << 8) + l[e + 1];
  }
  function we(l, e) {
    return l[e];
  }
  function ve(l, e, r) {
    (l[e] = ((r >>> 24) & 255) >>> 0),
      (l[e + 1] = ((r >>> 16) & 255) >>> 0),
      (l[e + 2] = ((r >>> 8) & 255) >>> 0),
      (l[e + 3] = (r & 255) >>> 0);
  }
  function Te(l, e, r) {
    (l[e] = ((r >>> 16) & 255) >>> 0), (l[e + 1] = ((r >>> 8) & 255) >>> 0), (l[e + 2] = (r & 255) >>> 0);
  }
  function ke(l, e, r) {
    (l[e] = ((r >>> 8) & 255) >>> 0), (l[e + 1] = (r & 255) >>> 0);
  }
  function Ie(l, e, r) {
    l[e] = (r & 255) >>> 0;
  }
  function be(l, e, r) {
    (e = e || 0), (r = r || l.length);
    let t = [];
    for (let i = 0; i < r && i < l.length; i++) {
      i % 16 == 0 &&
        t.push(`
`);
      let n = l[e + i].toString(16).toUpperCase();
      if ((n.length == 1 && (n = "0" + n), t.push(n), (i + 1) % 16 == 0 || i == r - 1 || i == l.length - 1)) {
        for (let p = i + 1; p < ((i + 15) & 4294967280); p++) t.push("  ");
        n = "";
        for (let p = i & 4294967280; p <= i; p++) {
          let a = l[e + p];
          a >= 32 && a < 127 ? (n += String.fromCharCode(a)) : (n += ".");
        }
        t.push(n);
      }
    }
    return t.join(" ");
  }
  var E = Y(() => {});
  var le = Z((ze, ie) => {
    var re = (E(), A(D)),
      Se = { 0: 96e3, 1: 88200, 2: 64e3, 3: 48e3, 4: 44100, 5: 32e3, 6: 24e3, 7: 22050, 8: 16e3, 9: 12e3, 10: 11025, 11: 8e3, 12: 7350 };
    ie.exports.extractMeta = function (l, e) {
      let t = e.length - 7,
        i = { start: -1, end: 0, maxBitrate: 0, durationSec: 0 };
      l.frames && (i.frames = []);
      for (let n = 0; n < t; )
        if (e[n] == 255 && (e[n + 1] & 246) == 240) {
          i.start < 0 && (i.start = n);
          let p = e[n + 1] & 1,
            s = ((re.ReadInt32(e, n + 3) & 67100672) >>> 13) >>> 0;
          if (s <= 0) break;
          let o = p ? 7 : 9;
          if ((l.frames && i.frames.push({ o: n + o, s: s - o }), l.rate)) {
            let h = re.ReadInt24(e, n + 1),
              g = ((h & 15360) >>> 10) >>> 0;
            (i.rate = Math.round(Se[g])),
              (i.mp4aRateIndex = g),
              (i.maxBitrate = Math.max(i.maxBitrate, (s * 8 * i.rate) / 1024)),
              (i.durationSec += 1024 / i.rate);
            let d = ((h & 49152) >>> 14) >>> 0;
            i.mp4aProfile = d + 1;
            let m = ((h & 448) >>> 6) >>> 0;
            i.mp4aChannelCount = m;
          }
          (n += s), (i.end = n);
        } else n++;
      return i;
    };
  });
  var ae = {};
  $(ae, { extractMeta: () => Me });
  function Re(l) {
    if (!l) throw new Error("ASSERT");
  }
  function c(l) {
    Re(l.m_nCurrentBit <= l.m_nLength * 8);
    let e = (l.m_nCurrentBit >>> 3) >>> 0,
      r = (l.m_nCurrentBit % 8) + 1;
    return l.m_nCurrentBit++, ((l.m_pStart[l.offset + e] >>> (8 - r)) & 1) >>> 0;
  }
  function R(l, e) {
    let r = 0;
    for (let t = 0; t < e; t++) r |= c(l) << (e - t - 1);
    return r;
  }
  function k(l) {
    let e = 0,
      r = 0;
    for (; c(l) == 0 && r < 32; ) r++;
    return (e = R(l, r)), (e += (1 << r) - 1), e;
  }
  function F(l) {
    let e = k(l);
    return e & 1 ? (e = (e + 1) / 2) : (e = -(e / 2)), e;
  }
  function Pe(l, e, r) {
    let t = 4 - (e & 3);
    for (r -= 3; e < t && e < r; e++) if (l[e] == 0 && l[e + 1] == 0 && l[e + 2] == 1) return e;
    for (r -= 3; e < r; e += 4) {
      let i = se.ReadInt32(l, e);
      if ((i - 16843009) & ~i & 2155905152) {
        if (l[e + 1] == 0) {
          if (l[e] == 0 && l[e + 2] == 1) return e;
          if (l[e + 2] == 0 && l[e + 3] == 1) return e + 1;
        }
        if (l[e + 3] == 0) {
          if (l[e + 2] == 0 && l[e + 4] == 1) return e + 2;
          if (l[e + 4] == 0 && l[e + 5] == 1) return e + 3;
        }
      }
    }
    for (r += 3; e < r; e++) if (l[e] == 0 && l[e + 1] == 0 && l[e + 2] == 1) return e;
    return r + 3;
  }
  function ne(l, e, r) {
    let t = Pe(l, e, r);
    return e < t && t < r && !l[t - 1] && t--, t;
  }
  function N(l, e, r) {
    let t = [],
      i = ne(l, e, r);
    for (;;) {
      for (; i < r && !l[i++]; );
      if (i == r) break;
      let n = ne(l, i, r);
      t.push({ o: i, s: n - i, data: l }), (i = n);
    }
    return t;
  }
  function Ce(l, e, r) {
    let t = { m_pStart: l, m_nLength: r, m_nCurrentBit: 0, offset: e },
      i = 0,
      n = 0,
      p = 0,
      a = 0,
      s = R(t, 8),
      o = c(t),
      h = c(t),
      g = c(t),
      d = c(t),
      m = c(t),
      f = c(t),
      u = R(t, 2),
      v = (o << 7) | (h << 6) | (g << 5) | (d << 4) | (m << 3) | (f << 2) | u,
      x = R(t, 8),
      w = k(t);
    if (s == 100 || s == 110 || s == 122 || s == 244 || s == 44 || s == 83 || s == 86 || s == 118) {
      if (k(t) == 3) {
        let b = c(t);
      }
      let G = k(t),
        J = k(t),
        q = c(t);
      if (c(t)) {
        for (let b = 0; b < 8; b++)
          if (c(t)) {
            let Q = b < 6 ? 16 : 64,
              B = 8,
              M = 8;
            for (let X = 0; X < Q; X++) {
              if (M != 0) {
                let ce = F(t);
                M = (B + ce + 256) % 256;
              }
              B = M == 0 ? B : M;
            }
          }
      }
    }
    let I = k(t),
      T = k(t);
    if (T == 0) {
      let U = k(t);
    } else if (T == 1) {
      let U = c(t),
        G = F(t),
        J = F(t),
        q = k(t),
        C = [];
      for (let b = 0; b < q; b++) C.push(F(t));
    }
    let y = k(t),
      S = c(t),
      P = k(t),
      z = k(t),
      L = c(t);
    if (!L) {
      let U = c(t);
    }
    let Be = c(t);
    if ((c(t) && ((i = k(t)), (n = k(t)), (p = k(t)), (a = k(t))), c(t))) {
      if (c(t) && R(t, 8) == 255) {
        let b = R(t, 8),
          K = R(t, 8);
      }
      if (c(t)) {
        let C = c(t);
      }
      if (c(t)) {
        let C = R(t, 3),
          b = c(t);
        if (c(t)) {
          let Q = c(t, 8),
            B = c(t, 8),
            M = c(t, 8);
        }
      }
      let q = c(t);
    }
    let fe = (P + 1) * 16 - a * 2 - p * 2,
      oe = (2 - L) * (z + 1) * 16 - n * 2 - i * 2;
    return { width: Math.floor((fe + 7) / 8) * 8, height: oe };
  }
  function Me(l, e) {
    let r = l.previous || {},
      t = { previous: {} },
      i,
      n = r.unconfirmedUnit || null;
    if (!n) i = N(e, 0, e.length);
    else if (e[0] == 0 && e[1] == 0 && (e[2] == 1 || (e[2] == 0 && e[3] == 1))) (i = N(e, 0, e.length)), i.unshift(n);
    else {
      let m = new Uint8Array(n.s + 3 + e.length);
      m.set(n.data.subarray(n.o - 3, n.o + n.s), 0), m.set(e, n.s + 3), (e = m), (i = N(e, 0, e.length));
    }
    r.confirmedUnusedUnits && (i = [].concat(r.confirmedUnusedUnits, i));
    let p = l.flush ? i.length : i.length - 1;
    if (l.sps || l.pps || l.width || l.height)
      for (let m = 0; m < p; m++) {
        let f = i[m],
          u = f.data[f.o] & 31;
        if (u == 7) {
          if (
            (l.sps && !t.sps && ((t.sps = new ArrayBuffer(f.s)), new Uint8Array(t.sps).set(f.data.subarray(f.o, f.o + f.s))),
            (l.width && !t.width) || (l.height && !t.height))
          ) {
            let v = Ce(f.data, f.o + 1, f.s);
            (t.width = v.width), (t.height = v.height);
          }
        } else u == 8 && l.pps && !t.pps && ((t.pps = new ArrayBuffer(f.s)), new Uint8Array(t.pps).set(f.data.subarray(f.o, f.o + f.s)));
      }
    let a = r.gotUnitStart || !1,
      s = r.keyFrame || !1,
      o = r.frameUnit || !1,
      h = r.avccData || [],
      g = r.avccSize || 0,
      d = !1;
    for (let m = 0; m < p; m++) {
      let f = i[m];
      if (f.s == 0) continue;
      let u = f.data[f.o] & 31;
      if (u == 9)
        if (a) {
          (d = !0), (t.previous.confirmedUnusedUnits = i.slice(m, p));
          break;
        } else a = !0;
      else u == 5 ? (f.data[f.o + 1] != 0 && (s = !0), (o = !0)) : u == 1 && (o = !0);
      if (a) {
        let v = new Uint8Array(4);
        se.WriteInt32(v, 0, f.s), h.push(v), h.push(f.data.subarray(f.o, f.o + f.s)), (g += f.s + 4);
      }
    }
    return (
      (d || l.flush) && a && o
        ? ((t.avccData = h), (t.frame = { size: g, key: s }))
        : ((t.previous.gotUnitStart = a),
          (t.previous.avccData = h),
          (t.previous.avccSize = g),
          (t.previous.keyFrame = s),
          (t.previous.frameUnit = o)),
      l.flush || (t.previous.unconfirmedUnit = i[i.length - 1]),
      t
    );
  }
  var se,
    pe = Y(() => {
      se = (E(), A(D));
    });
  var V = te();
  (function () {
    let e = new BroadcastChannel("mp2t-worker.js"),
      r = (i) => e.postMessage(i),
      t = (i) => {
        V.receive(i.data, r);
      };
    e.addEventListener("message", t), V.setPost(r), e.postMessage("worker-ready");
  })();
  var _ = (E(), A(D)),
    Le = le(),
    Ue = (pe(), A(ae)),
    W = class {
      constructor(e) {
        let r = this;
        Object.keys(e).forEach(function (t) {
          r[t] = e[t];
        });
      }
      processChunkData(e, r) {
        (this.perfBytes = 0),
          (this.perfTime = 0),
          (this.perfVideoSize = 0),
          (this.dataOffset = 0),
          this.processedChunksCount++,
          (this.pidTable = this.pidTable || { 0: "processPAT" });
        let t = 188,
          i = [],
          n = 0,
          p = {};
        for (; n * t < e.length; ) {
          let a = {},
            s = n * t;
          if ((n++, _.ReadInt8(e, s) != 71)) continue;
          let o = _.ReadInt32(e, s);
          (a.tei = ((o & 8388608) >>> 23) >>> 0),
            (a.pusi = ((o & 4194304) >>> 22) >>> 0),
            (a.tp = ((o & 2097152) >>> 21) >>> 0),
            (a.pid = ((o & 2096896) >>> 8) >>> 0),
            (a.sc = ((o & 192) >>> 6) >>> 0),
            (a.aff = ((o & 32) >>> 5) >>> 0),
            (a.pf = ((o & 16) >>> 4) >>> 0),
            (a.cc = (o & 15) >>> 0);
          let h = 4,
            g = t - 4;
          if (a.aff) {
            if (((a.afl = _.ReadInt8(e, s + 4)), h++, g--, (a.pf == 0 && a.afl != 183) || (a.pf && a.afl > 182))) continue;
            (h += a.afl), (g -= a.afl);
          }
          p[a.pid] = a;
          let d = this[this.pidTable[a.pid]];
          d && d.call(this, a, e, s + h, g, i);
        }
        this.walkThroughAvailPes(function (a) {
          ((a.videoPrevious && a.videoPrevious.remains) || (a.data && a.data.length > 0)) && this.pesPacketReady(a, i, !0);
        }),
          r(null, i);
      }
      walkThroughAvailPes(e) {
        for (let r in this.pesTable) {
          let t = this.pesTable[r];
          t.state == "started" && e.call(this, t);
        }
      }
      processPAT(e, r, t, i, n) {
        let p = _.ReadInt32(r, t),
          a = ((p & 16711680) >>> 16) >>> 0,
          s = ((p & 32768) >>> 15) >>> 0,
          o = ((p & 16384) >>> 14) >>> 0,
          h = (p & 4095) >>> 0,
          g = _.ReadInt16(r, t + 4),
          d = _.ReadInt24(r, t + 6),
          m = ((d & 15872) >>> 9) >>> 0,
          f = ((d & 256) >>> 8) >>> 0,
          u = ((d & 240) >>> 4) >>> 0,
          v = (d & 15) >>> 0;
        if (((h -= 5), a || !s || o)) return console.info("MP2T/PAT Bad header"), !1;
        if (h % 4) return console.info("MP2T/PAT Bad section length"), !1;
        let x = (h - 4) / 4;
        for (let w = 0; w < x; w++) {
          let I = _.ReadInt32(r, t + 4 + 5 + w * 4),
            T = ((I & 4294901760) >>> 16) >>> 0,
            y = (I & 8191) >>> 0;
          (this.pidTable[y] = "processPMT"), (this.pmtTable = this.pmtTable || {}), (this.pmtTable[y] = T);
        }
        return !0;
      }
      processPMT(e, r, t, i, n) {
        let p = _.ReadInt32(r, t),
          a = ((p & 16711680) >>> 16) >>> 0,
          s = ((p & 32768) >>> 15) >>> 0,
          o = ((p & 16384) >>> 14) >>> 0,
          h = (p & 4095) >>> 0,
          g = _.ReadInt16(r, t + 4),
          d = _.ReadInt24(r, t + 6),
          m = ((d & 15872) >>> 9) >>> 0,
          f = ((d & 256) >>> 8) >>> 0,
          u = ((d & 240) >>> 4) >>> 0,
          v = (d & 15) >>> 0;
        if (!this.pmtTable) return console.info("MP2T/PMT No PMT table defined"), !1;
        if (a != 2 || !s || o || h > 1021 || u || v || g != this.pmtTable[e.pid])
          return console.info("MP2T/PMT Bad header", a != 2, !s, o, h > 1021, u, v, g, this.pmtTable[e.pid]), !1;
        let x = _.ReadInt32(r, t + 9),
          w = ((x & 536805376) >>> 16) >>> 0,
          I = (x & 4095) >>> 0;
        if (I >= 1024) return console.info("MP2T/PMT Bad program info length"), !1;
        let T = t + 13 + I;
        for (; T < t + h; ) {
          let y = _.ReadInt8(r, T),
            S = _.ReadInt32(r, T + 1),
            P = ((S & 536805376) >>> 16) >>> 0,
            z = (S & 4095) >>> 0;
          if (((this.pesTable = this.pesTable || {}), !this.pesTable[P])) {
            let L = {
              pid: P,
              state: "initial",
              dataOffsets: [],
              dataSizes: [],
              keyFrames: [],
              dataTimestamps: [],
              dataTimestamp: -1,
              tsMin: 1 / 0,
              tsMax: 0,
              trackId: this.nextTrackId++,
              codecId: y,
              chunkNumber: 0
            };
            (this.pesTable[P] = L), (this.pidTable[P] = "processPES");
          }
          T += 5 + z;
        }
        return !0;
      }
      validTimestampSection(e) {
        let r = _.ReadInt8(e, 0),
          t = _.ReadInt32(e, 1);
        return t & 1 && t & 65536 && r & 1;
      }
      timestampSection2Timestamp(e) {
        let r = _.ReadInt8(e, 0),
          t = _.ReadInt32(e, 1);
        return (
          (r & 8 ? 4294967296 : 0) +
          (r & 4 ? 2147483648 : 0) +
          (r & 2 ? 1073741824 : 0) +
          (((t & 65534) >>> 1) >>> 0) +
          (((t >>> 2) & 1073709056) >>> 0)
        );
      }
      processPES(e, r, t, i, n) {
        let p = t,
          a = i,
          s = this.pesTable[e.pid];
        if (e.pusi) {
          s.data && s.data.length > 0 && this.pesPacketReady(s, n);
          let h = _.ReadInt24(r, t),
            g = _.ReadInt8(r, t + 3),
            d = _.ReadInt16(r, t + 4);
          if ((g & 224) == 192) s.streamType = "audio";
          else if ((g & 240) == 224) s.streamType = "video";
          else return this.pesFailed(s, n);
          let m = this.codecs[s.codecId];
          if (m) (s.codec = m), m.type == "video" && (s.width || (s.width = 0), s.height || (s.height = 0));
          else return this.pesFailed(s, n, "Ignore unknown codec 0x" + s.codecId.toString(16));
          (s.data = []), (s.packetLength = (d && d - 3) || 0), (s.packetIndex = 0), (s.pscp = h), (s.si = g), (t += 6), (i -= 6);
          let f = {},
            u = _.ReadInt16(r, t);
          if ((u & 49152) != 32768) return this.pesFailed(s, n, "Invalid optional header starter");
          if (
            ((f.sc = ((u & 12288) >>> 12) >>> 0),
            (f.prio = ((u & 2048) >>> 11) >>> 0),
            (f.dai = ((u & 1024) >>> 10) >>> 0),
            (f.copyr = ((u & 512) >>> 9) >>> 0),
            (f.ooc = ((u & 256) >>> 8) >>> 0),
            (f.ptsdts = ((u & 192) >>> 6) >>> 0),
            f.ptsdts == 1)
          )
            return this.pesFailed(s, n, "Invalid optional header PTS DTS indicator");
          (f.escr = ((u & 32) >>> 5) >>> 0),
            (f.esrf = ((u & 16) >>> 4) >>> 0),
            (f.dsmtmf = ((u & 8) >>> 3) >>> 0),
            (f.acif = ((u & 4) >>> 2) >>> 0),
            (f.crcf = ((u & 2) >>> 1) >>> 0),
            (f.ef = (u & 1) >>> 0);
          let v = _.ReadInt8(r, t + 2);
          s.packetLength && (s.packetLength -= v);
          let x = t + 3,
            w = s.lastTs || -1,
            I = null;
          f.ptsdts & 2 &&
            ((I = new Uint8Array(5)),
            I.set(r.subarray(x, x + 5)),
            this.validTimestampSection(I) || (console.warn("PES", e.pid, "Invalid PTS timestamp"), (I = null)),
            I && (w = this.timestampSection2Timestamp(I)),
            (x += 5));
          let T = null;
          if (
            f.ptsdts & 1 &&
            ((T = new Uint8Array(5)), T.set(r.subarray(x, x + 5)), (x += 5), this.validTimestampSection(T) || (T = null), T)
          ) {
            let y = this.timestampSection2Timestamp(T);
            y > w && (w = y);
          }
          if (
            (w >= 0 &&
              s.dataTimestamp < 0 &&
              (w < s.tsMin && (s.tsMin = w),
              (s.tsMax = w),
              (s.dataTimestamp = w),
              (s.lastTs = w),
              s.sampleCount && w > s.tsMin && (s.sampleRate = (s.sampleCount / (w - s.tsMin)) * 9e4)),
            f.escr)
          ) {
            let y = _.ReadInt16(r, x),
              S = _.ReadInt32(r, x + 2);
            (x += 6),
              (y & 49156) != 4 || (S & 67109889) != 67109889
                ? console.warn("PES", e.pid, "Invalid ESCR")
                : (s.escr =
                    (((y & 14336) << 18) | ((y & 63) << 19) | ((S & 4160749568) >>> 13) | ((S & 67106816) >>> 2) | ((S & 1022) >>> 1)) >>>
                    0);
          }
          if (f.esrf) {
            let y = _.ReadInt24(r, x);
            (x += 3), (y & 8388609) != 8388609 ? console.warn("PES", e.pid, "Invalid ESR") : (s.esr = ((y & 8388606) >>> 1) >>> 0);
          }
          if (f.acif) {
            let y = _.ReadInt8(r, x);
            (x += 1), (y & 128) != 128 ? console.warn("PES", e.pid, "Invalid ACI") : (s.aci = y & 127);
          }
          if (((t += 3 + v), (i -= 3 + v), (p = t), (a = i), a < 0)) return this.pesFailed(s, n, "Header size exceed packet size");
          if (s.packetLength && s.packetIndex > s.packetLength) return this.pesFailed(s, n, "Data went beyond length on first segment");
          this.pesStarted(s, n);
        } else if (!s.data) return !0;
        if (s.packetLength && s.packetIndex > s.packetLength)
          return this.pesFailed(s, n, "Data went beyond length " + s.packetIndex + " " + s.packetLength);
        let o = r.subarray(p, p + a);
        return s.data.push(o), (s.packetIndex += i), s.packetLength && s.packetIndex >= s.packetLength && this.pesPacketReady(s, n), !0;
      }
      pesFailed(e, r, t) {
        return (e.state = "failed"), t && console.warn("PES", e.pid, "failure:", t), delete this.pidTable[e.pid], !1;
      }
      pesStarted(e, r) {
        e.state != "started" && (e.state = "started");
      }
      pesPacketReady(e, r, t) {
        e.mediaChunks = null;
        let i = !1;
        if (e.streamType == "video" && e.codecId == 27) {
          let n = { flush: t, sps: !e.sps, pps: !e.pps, width: !e.width, height: !e.height, previous: e.videoPrevious };
          e.data = this.flatten(e.data);
          let p = Date.now(),
            a = Ue.extractMeta(n, e.data);
          (this.perfBytes = (this.perfBytes || 0) + e.data.length),
            (this.perfTime = (this.perfTime || 0) + (Date.now() - p)),
            (e.videoPrevious = a.previous || null),
            n.width && a.width && (e.width = a.width),
            n.height && a.height && (e.height = a.height),
            n.sps && a.sps && (e.sps = a.sps),
            n.pps && a.pps && (e.pps = a.pps),
            a.frame &&
              ((e.sampleCount = (e.sampleCount || 0) + 1),
              a.frame.key && e.keyFrames.push(e.dataSizes.length + 1),
              (this.perfVideoSize = (this.perfVideoSize || 0) + a.frame.size),
              e.dataSizes.push(a.frame.size),
              e.stsc || (e.stsc = []),
              e.stsc.length == 0 && e.stsc.push(e.chunkNumber + 1, 1, 1),
              e.chunkNumber++),
            a.avccData ? (e.data = a.avccData) : (i = !0);
        }
        if (e.streamType == "audio" && e.codecId == 15) {
          (e.mediaChunks = []), (e.data = this.flatten(e.data));
          let n = { rate: !0, frames: !0 },
            p = Le.extractMeta(n, e.data);
          p.rate && (e.declaredSampleRate = p.rate),
            typeof p.mp4aRateIndex < "u" && (e.mp4aRateIndex = p.mp4aRateIndex),
            typeof p.mp4aProfile < "u" && (e.mp4aProfile = p.mp4aProfile),
            typeof p.mp4aChannelCount < "u" && (e.mp4aChannelCount = p.mp4aChannelCount),
            p.maxBitrate && (e.maxBitrate = Math.max(e.maxBitrate || 0, p.maxBitrate)),
            p.durationSec && (e.durationSec = (e.durationSec || 0) + p.durationSec),
            (e.sampleCount = (e.sampleCount || 0) + p.frames.length),
            e.sampleSizes || (e.sampleSizes = []);
          for (let a = 0; a < p.frames.length; a++) {
            let s = p.frames[a];
            e.sampleSizes.push(s.s), e.mediaChunks.push(s.o), e.stsc || (e.stsc = [1, 1, 1]);
          }
        }
        i || this.pesSendPacket(e, e.data, r), delete e.data;
      }
      pesSendPacket(e, r, t) {
        let i = this.length(r);
        if (
          (t.push(r),
          e.dataTimestamp < 0 && (e.dataTimestamp = 0),
          e.dataTimestamps.push(e.dataTimestamp),
          (e.dataTimestamp = -1),
          e.mediaChunks)
        ) {
          let n = 0;
          for (let p = 0; p < e.mediaChunks.length; p++) {
            if (p != 0) {
              let a = n + Math.round((p * 9e4) / e.declaredSampleRate);
              e.dataTimestamps.push(a);
            }
            e.dataOffsets.push(this.processedChunksCount - 1, this.dataOffset + e.mediaChunks[p]);
          }
        } else e.dataOffsets.push(this.processedChunksCount - 1, this.dataOffset);
        this.dataOffset += i;
      }
      flatten(e) {
        if (Array.isArray(e)) {
          let n = function (p) {
            if (Array.isArray(p)) for (let a = 0, s = p.length; a < s; a++) n(p[a]);
            else t.set(p, i), (i += p.length);
          };
          var r = n;
          let t = new Uint8Array(this.length(e)),
            i = 0;
          return n(e), t;
        } else return e;
      }
      length(e) {
        if (Array.isArray(e)) {
          let r = 0;
          for (let t = 0, i = e.length; t < i; t++) r += this.length(e[t]);
          return r;
        } else return e.length;
      }
    };
  V.listen({
    processData: (l, e) => {
      let r = new W(l),
        t = { meta: {} };
      return (
        r.processChunkData(e, function (i, n) {
          if (n) {
            let p = r.flatten(n);
            t.data = p;
          }
          i && (t.error = i.message);
        }),
        Object.keys(l).forEach(function (i) {
          t.meta[i] = r[i];
        }),
        t
      );
    }
  });
})();
