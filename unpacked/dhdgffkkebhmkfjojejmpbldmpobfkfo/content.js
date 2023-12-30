((twod, k) => {
  if (window[k]) return;
  window[k] = true;
  (() => {
    "use strict";
    function e(e, t) {
      let n,
        o = !0;
      return (
        "boolean" == typeof e ? ((o = e), (n = t)) : (n = e),
        Sn((e) => {
          const t = sn(yn.document);
          "interactive" == t || "complete" == t
            ? (n && n(), e())
            : Ln.addEventListener(
                "DOMContentLoaded",
                () => {
                  n && n(), e();
                },
                Ot({ capture: o, once: !0 })
              );
        })
      );
    }
    const t = (e) => {
        const t = Object.call,
          n = t.bind(t),
          o = Object.assign,
          s = Object.getOwnPropertyDescriptor,
          r = (e) => o({ __proto__: null }, e);
        return r({
          sourceWindow: e,
          cSO: r,
          F_c: n,
          F_a: Object.apply,
          F_b: Object.bind,
          F_tS: Function.toString,
          A_fE: [].forEach,
          A_so: [].some,
          A_sh: [].shift,
          A_j: [].join,
          A_f: [].filter,
          A_iO: [].indexOf,
          A_iA: Array.isArray,
          O_a: o,
          O_k: Object.keys,
          O_v: Object.values,
          O_dP: Object.defineProperties,
          O_dPy: Object.defineProperty,
          O_hOP: Object.hasOwnProperty,
          O_gOPN: Object.getOwnPropertyNames,
          O_gOPD: s,
          O_gOPDs: Object.getOwnPropertyDescriptors,
          O_gPO: Object.getPrototypeOf,
          O_tS: {}.toString,
          J_p: JSON.parse,
          J_s: JSON.stringify,
          M_f: Math.floor,
          M_r: Math.random,
          M_m: Math.max,
          M_mi: Math.min,
          M_i: MutationEvent.prototype.initMutationEvent,
          M_pA: MutationEvent.prototype.ADDITION,
          M_pAT: MutationEvent.AT_TARGET,
          N_tS: (0).toString,
          N_MSI: Number.MAX_SAFE_INTEGER,
          P_t: Promise.prototype.then,
          P_c: Promise.prototype.catch,
          R_rABS: FileReader.prototype.readAsBinaryString,
          R_rAT: FileReader.prototype.readAsText,
          R_r: s(FileReader.prototype, "result").get,
          R_enq: e.ReadableStreamDefaultController ? e.ReadableStreamDefaultController.prototype.enqueue : null,
          R_cl: e.ReadableStreamDefaultController ? e.ReadableStreamDefaultController.prototype.close : null,
          S_fCC: String.fromCharCode,
          S_sl: "".slice,
          S_su: "".substr,
          S_sp_nr: "".split,
          S_iO: "".indexOf,
          S_tr: "".trim,
          S_r_nr: "".replace,
          S_rA_nr: "".replaceAll,
          S_cCA: "".charCodeAt,
          S_tLC: "".toLowerCase,
          S_tUC: "".toUpperCase,
          Y_tST: Symbol.toStringTag,
          USP_tS: URLSearchParams.prototype.toString,
          D_pFS: DOMParser.prototype.parseFromString,
          U_cOU: URL.createObjectURL,
          U_rOU: URL.revokeObjectURL,
          X_o: XMLHttpRequest.prototype.open,
          X_pSD: XMLHttpRequest.prototype.DONE,
          X_pSH: XMLHttpRequest.prototype.HEADERS_RECEIVED,
          X_pSL: XMLHttpRequest.prototype.LOADING,
          X_pSO: XMLHttpRequest.prototype.OPENED,
          X_pSU: XMLHttpRequest.prototype.UNSENT,
          X_s: XMLHttpRequest.prototype.send,
          D_n: Date.now,
          I_tS: (e) => "" + e,
          E_r: Element.prototype.remove,
          E_s: Element.prototype.setAttribute,
          E_rA: Element.prototype.removeAttribute,
          D_cS: s(Document.prototype, "currentScript").get,
          D_gRS: s(Document.prototype, "readyState").get,
          D_cE: Document.prototype.createElementNS,
          D_gEBT: Document.prototype.getElementsByTagName,
          M_aN: s(MutationEvent.prototype, "attrName").get,
          M_rN: s(MutationEvent.prototype, "relatedNode").get,
          C_d: s(CustomEvent.prototype, "detail").get,
          W_aEL: addEventListener,
          W_rEL: removeEventListener,
          parseInt,
          parseFloat,
          CustomEvent,
          CompositionEvent,
          KeyboardEvent,
          MouseEvent,
          MutationEvent,
          MutationObserver,
          console: Object.assign({}, console),
          Error,
          Uint8Array,
          Blob,
          ReadableStream,
          Number,
          String,
          Proxy,
          Window,
          FileReader,
          DOMParser,
          XMLHttpRequest,
          Function,
          RegExp,
          Promise,
          encodeURIComponent,
          decodeURIComponent,
          encodeURI,
          decodeURI,
          escape,
          unescape,
          atob,
          btoa,
          setTimeout,
          clearTimeout,
          setInterval,
          clearInterval,
          postMessage,
          dispatchEvent,
          alert,
          prompt,
          confirm,
          close,
          getElementById: e.Document.prototype.getElementById,
          createEvent: e.Document.prototype.createEvent,
          createElement: e.Document.prototype.createElement
        });
      },
      n = "vault" in twod;
    if (n && void 0 === twod.vault) throw "Invalid vault";
    const o = (twod.vault = twod.vault || t(twod.unsafeWindow)),
      {
        cSO: s,
        F_c: r,
        F_a: i,
        F_b: a,
        F_tS: c,
        A_fE: d,
        A_so: l,
        A_sh: u,
        A_j: p,
        A_f: m,
        A_iO: g,
        A_iA: f,
        O_a: _,
        O_k: v,
        O_v: h,
        O_dP: b,
        O_dPy: w,
        O_hOP: y,
        O_gOPN: M,
        O_gOPD: E,
        O_gOPDs: L,
        O_gPO: S,
        O_tS: O,
        J_p: x,
        J_s: R,
        M_f: I,
        M_r: j,
        M_m: D,
        M_mi: C,
        M_i: P,
        M_pA: $,
        M_pAT: A,
        N_tS: T,
        N_MSI: U,
        P_t: N,
        P_c: B,
        R_rABS: F,
        R_rAT: k,
        R_r: X,
        R_enq: q,
        R_cl: W,
        S_fCC: H,
        S_sl: J,
        S_su: G,
        S_iO: K,
        S_sp_nr: z,
        S_tr: V,
        S_rA_nr: Y,
        S_cCA: Z,
        S_tLC: Q,
        S_tUC: ee,
        Y_tST: te,
        D_pFS: ne,
        D_cS: oe,
        D_gRS: se,
        D_cE: re,
        D_gEBT: ie,
        E_r: ae,
        E_s: ce,
        E_rA: de,
        M_aN: le,
        M_rN: ue,
        C_d: pe,
        U_cOU: me,
        U_rOU: ge,
        USP_tS: fe,
        X_o: _e,
        X_s: ve,
        X_pSD: he,
        X_pSH: be,
        X_pSL: we,
        X_pSO: ye,
        X_pSU: Me,
        D_n: Ee,
        I_tS: Le,
        W_aEL: Se,
        W_rEL: Oe,
        parseInt: xe,
        parseFloat: Re,
        console: Ie,
        encodeURIComponent: je,
        decodeURIComponent: De,
        encodeURI: Ce,
        decodeURI: Pe,
        escape: $e,
        unescape: Ae,
        atob: Te,
        btoa: Ue,
        postMessage: Ne,
        dispatchEvent: Be,
        alert: Fe,
        prompt: ke,
        confirm: Xe,
        close: qe,
        getElementById: We,
        createEvent: He,
        createElement: Je,
        CustomEvent: Ge,
        CompositionEvent: Ke,
        KeyboardEvent: ze,
        MouseEvent: Ve,
        MutationEvent: Ye,
        MutationObserver: Ze,
        Uint8Array: Qe,
        FileReader: et,
        DOMParser: tt,
        XMLHttpRequest: nt,
        Function: ot,
        RegExp: st,
        Promise: rt,
        Blob: it,
        ReadableStream: at,
        Number: ct,
        String: dt,
        Proxy: lt,
        Window: ut
      } = o,
      pt = r,
      mt = i,
      gt = v,
      ft = h,
      _t = _,
      vt = w,
      ht = M,
      bt = E,
      wt = S,
      yt = f,
      Mt = j,
      Et = D,
      Lt = C,
      St = (e, t, n) => pt(mt, e, t, n),
      Ot = s,
      xt = (e, t, n) => (
        vt(
          e,
          t,
          Ot({
            value: n,
            configurable: !0,
            enumerable: !0,
            writable: !0
          })
        ),
        e
      ),
      Rt = (e, t) => {
        const n = bt(e, t);
        return n ? Ot(n).value : void 0;
      },
      It = (e, t) => {
        const n = (e, t, o) => {
          const s = bt(e, t),
            r = s ? Ot(s) : void 0;
          let i;
          return r ? (r.enumerable ? r.value : void 0) : --o >= 0 && (i = wt(e)) ? n(i, t, o) : void 0;
        };
        return n(e, t, 5);
      },
      jt = (e) => {
        const t = (t, ...n) => St(e, t, n);
        return xt(t, "wrappedJSObject", e), t;
      },
      Dt = () => (e) => jt(e),
      Ct = jt(a),
      Pt = x,
      $t = (e) => {
        const t = (e, n) => {
          let o;
          if (null === e) o = "null";
          else {
            const i = typeof e;
            if ("object" === i) {
              if (n) {
                if (-1 != Bt(n, e)) throw "Converting circular structure to JSON";
                xt(n, n.length, e);
              } else n = [e];
              if (yt(e)) {
                let i = "";
                for (let o = 0; o < e.length; o++) {
                  let a;
                  a = kt(e, o) ? (kt((s = e), (r = o)) ? s[r] : void 0) : It(e, o);
                  const c = t(a, n);
                  i += `${o ? "," : ""}${void 0 === c ? "null" : c}`;
                }
                o = `[${i}]`;
              } else {
                let s = "";
                Ft(gt(e), (o) => {
                  const r = t(e[o], n);
                  void 0 !== r && (s += `${s ? "," : ""}${R(o)}: ${r}`);
                }),
                  (o = `{${s}}`);
              }
              n.length -= 1;
            } else {
              if ("bigint" === i) throw "Do not know how to serialize a BigInt";
              o = R(e);
            }
          }
          var s, r;
          return o;
        };
        return t(e);
      },
      At = (Dt()(l), Dt()(u)),
      Tt =
        (Dt()(m),
        (e, t, n) => {
          const o = e.length;
          let s = t || 0;
          if (s >= o) return [];
          s < 0 && (s = Et(0, o + s));
          let r = void 0 === n ? o : n;
          r < 0 && (r = Et(0, o + r)), r > o && (r = o);
          const i = Ot({});
          for (let t = s; t < r; t++) i[t] = Rt(e, t);
          return ft(i);
        }),
      Ut = Dt()(p),
      Nt = (e, t) => {
        let n = e.length || 0;
        return xt(e, n, t), n++, (e.length = n);
      },
      Bt = Dt()(g),
      Ft = Dt()(d),
      kt = Dt()(y),
      Xt = Dt()(z),
      qt = Dt()(J),
      Wt = jt(O),
      Ht = wt({}),
      Jt = (e) => {
        const t = Ot(e),
          n = ht(t);
        for (let e = 0; e < n.length; e++) {
          const o = n[e],
            s = t[o];
          null !== s && "object" == typeof s && wt(s) === Ht && (t[o] = Jt(s));
        }
        return t;
      },
      Gt = (e) => {
        const t = Xt(Wt(e), " ");
        return qt(Ut(Tt(t, 1), " "), 0, -1);
      },
      Kt = Dt()(c),
      zt = Dt()(P),
      Vt = $,
      Yt = Dt()(T),
      Zt = Dt()(N),
      Qt = (Dt()(B), Dt()(F), Dt()(k), Dt()(X), q && Dt()(q), W && Dt()(W), H),
      en = Dt()(G),
      tn = Dt()(K),
      nn =
        (Dt()(V),
        Dt()(
          Y ||
            function (e, t) {
              return Ut(Xt(this, e), t);
            }
        ),
        Dt()(Z)),
      on = Dt()(Q),
      sn = (Dt()(ee), jt(ne), jt(oe), jt(se)),
      rn = jt(re),
      an = jt(ie),
      cn = (jt(ae), jt(ce), jt(de), jt(le)),
      dn = jt(ue),
      ln = jt(pe),
      un = ge,
      pn = (jt(fe), Dt()(_e), Dt()(ve), Ee),
      mn = Ge,
      gn = Ze,
      fn = it,
      _n = function (e, t) {
        return Rt(e, t);
      },
      vn = Ot({
        addEventListener: !1,
        Array: !0,
        Blob: !0,
        close: !1,
        CustomEvent: !0,
        Date: !0,
        DOMParser: !0,
        Error: !0,
        Event: !0,
        FileReader: !0,
        KeyboardEvent: !0,
        location: !0,
        Math: !0,
        MouseEvent: !0,
        MutationEvent: !0,
        Number: !0,
        Object: !0,
        Promise: !0,
        ReadableStream: !0,
        removeEventListener: !1,
        Uint8Array: !0,
        XMLHttpRequest: !0
      }),
      hn = (() => {
        const e = Ot({ getElementById: We, createEvent: He, createElement: Je, dispatchEvent: Be, addEventListener, removeEventListener }),
          t = Ot({});
        return (
          Ft(gt(e), (n) => {
            try {
              const o = e[n];
              t[n] = function (...e) {
                return St(o, yn.document, e);
              };
            } catch (e) {
              t[n] = ((e, t) => {
                if (
                  (En.error(
                    `Tampermonkey sandbox preparation ${t ? "(" + t + ") " : ""}failed. This usually is caused by a third-party extension.`,
                    e
                  ),
                  t)
                )
                  return () => {};
              })(e, `document.${n}`);
            }
          }),
          t
        );
      })(),
      bn = Ot({ top: !0, location: !0 }),
      wn = twod,
      { unsafeWindow: yn, unsafeThis: Mn } = wn;
    twod.bridges = twod.bridges || Ot({});
    const En = (twod.console = twod.console || Ot({})),
      Ln = Ot({ addEventListener: Ct(Se, yn), removeEventListener: Ct(Oe, yn) });
    Ft(gt(bn), async (e) => {
      if (!Ln[e])
        try {
          const t = yn[e];
          if (null == t) return;
          Ln[e] = t;
        } catch (e) {}
    }),
      Ft(gt(vn), async (e) => {
        if (!Ln[e])
          try {
            let t = Rt(yn, e);
            if (void 0 === t && (Mn === yn || void 0 === (t = Rt(Mn, e)))) return;
            const n = vn[e];
            Ln[e] = !1 === n && "function" == typeof t ? Ct(t, Mn) : t;
          } catch (e) {}
      });
    const Sn = (e) => {
        let t,
          n = [],
          o = !1;
        e((e) => {
          if (!o) {
            if (n.length) {
              const t = n;
              (n = []), Ft(t, (t) => t(e));
            } else t = e;
            o = !0;
          }
        });
        const s = Ot({ then: (e) => (o ? e(t) : Nt(n, e), s) });
        return s;
      },
      On = () => Yt(pn() + 19831206 * Mt() + 1, 36),
      xn = (() => {
        const { console: e, bridges: t } = twod,
          n = Ot({});
        let o;
        const s = (e, t, o) => {
            let s,
              i = [],
              a = [];
            const c = () => {
                (i = []), (a = []), u(), (f = null), delete n[t];
              },
              d = (n) => {
                e.send("port.message", Ot({ response_id: t, value: n }));
              },
              l = (e, t = !0) => {
                (s = e), t && d(e);
              },
              u = () => {
                s = void 0;
              },
              p = Ot({
                addListener: (e) => {
                  Nt(i, e);
                }
              }),
              m = Ot({
                addListener: (e) => {
                  Nt(a, e);
                }
              }),
              g = () => {
                e.send("port.message", Ot({ response_id: t, disconnect: !0 })), c();
              };
            let f = Ot(
              o
                ? { postMessage: d, connectMessage: l, stopReconnecting: u, onMessage: p, onDisconnect: m, disconnect: g }
                : { postMessage: d, onMessage: p, onDisconnect: m, disconnect: g }
            );
            return (
              (n[t] = Ot({
                message: (e) => {
                  i && Ft(i, (t) => t(e));
                },
                disconnect: () => {
                  if (s && o) return r(o, t), void l(s);
                  a && Ft(a, (e) => e()), c();
                }
              })),
              f
            );
          },
          r = (e, n) => {
            t.first.send("port.message", Ot({ response_id: n, connect: !0, destination: e }));
          };
        return Ot({
          message: (t, r) => {
            let i;
            if (t.connect) {
              if (!t.destination || !t.response_id) throw "invalid message";
              o && o(t.destination, s(r, t.response_id));
            } else {
              if (!t.response_id) throw "invalid message";
              if (!(i = n[t.response_id])) return void e.warn("ports: unkown id", t.response_id, t);
              t.disconnect ? i.disconnect() : i.message(t.value);
            }
          },
          connect: function (e, n) {
            const o = On();
            return r(e, o), s(t.first, o, n ? e : void 0);
          },
          onConnect: Ot({
            addListener: (e) => {
              o = e;
            }
          })
        });
      })(),
      {
        setInterval: Rn,
        setTimeout: In,
        clearInterval: jn,
        clearTimeout: Dn,
        console: Cn,
        cloneInto: Pn,
        exportFunction: $n,
        createObjectIn: An
      } = yn,
      Tn = Object.assign({}, Cn),
      Un = Rn.bind(yn),
      Nn = In.bind(yn),
      Bn = jn.bind(yn),
      Fn = (Dn.bind(yn), Mn == yn.top),
      { arrayBuffer: kn, blob: Xn } = yn.Response.prototype,
      { arrayBuffer: qn } = yn.Blob.prototype,
      { then: Wn } = yn.Promise.prototype,
      { fetch: Hn, location: Jn, document: Gn, Response: Kn } = yn,
      zn = jt(kn),
      Vn = jt(Xn),
      Yn = jt(qn),
      Zn = Pn,
      Qn = Ot({ encode: (e) => Ae(je(e)), decode: (e) => De($e(e)) }),
      eo =
        (Ot({
          encode: (e) => {
            let t = "";
            for (let n = 0; n < e.length; n++) t += Qt(255 & nn(e, n));
            return Ue(t);
          },
          decode: (e) => Te(e)
        }),
        (e, t) => {
          const n = (e, t) => (e << t) | (e >>> (32 - t)),
            o = (e, t) => {
              const n = 2147483648 & e,
                o = 2147483648 & t,
                s = 1073741824 & e,
                r = 1073741824 & t,
                i = (1073741823 & e) + (1073741823 & t);
              return s & r
                ? 2147483648 ^ i ^ n ^ o
                : s | r
                ? 1073741824 & i
                  ? 3221225472 ^ i ^ n ^ o
                  : 1073741824 ^ i ^ n ^ o
                : i ^ n ^ o;
            },
            s = (e, t, s, r, i, a, c) => ((e = o(e, o(o(((e, t, n) => (e & t) | (~e & n))(t, s, r), i), c))), o(n(e, a), t)),
            r = (e, t, s, r, i, a, c) => ((e = o(e, o(o(((e, t, n) => (e & n) | (t & ~n))(t, s, r), i), c))), o(n(e, a), t)),
            i = (e, t, s, r, i, a, c) => ((e = o(e, o(o(((e, t, n) => e ^ t ^ n)(t, s, r), i), c))), o(n(e, a), t)),
            a = (e, t, s, r, i, a, c) => ((e = o(e, o(o(((e, t, n) => t ^ (e | ~n))(t, s, r), i), c))), o(n(e, a), t)),
            c = (e) => {
              let t,
                n,
                o = "",
                s = "";
              for (n = 0; n <= 3; n++) (t = (e >>> (8 * n)) & 255), (s = "0" + Yt(t, 16)), (o += en(s, s.length - 2, 2));
              return o;
            };
          let d, l, u, p, m, g, f, _;
          t && "utf-8" == on(t) && (e = Qn.encode(e));
          const v = ((e) => {
            let t;
            const n = e.length,
              o = n + 8,
              s = 16 * ((o - (o % 64)) / 64 + 1),
              r = [];
            for (let e = 0; e <= s - 1; e++) Nt(r, 0);
            let i = 0,
              a = 0;
            for (; a < n; ) (t = (a - (a % 4)) / 4), (i = (a % 4) * 8), (r[t] = r[t] | (nn(e, a) << i)), a++;
            return (t = (a - (a % 4)) / 4), (i = (a % 4) * 8), (r[t] = r[t] | (128 << i)), (r[s - 2] = n << 3), (r[s - 1] = n >>> 29), r;
          })(e);
          (m = 1732584193), (g = 4023233417), (f = 2562383102), (_ = 271733878);
          for (let e = 0; e < v.length; e += 16)
            (d = m),
              (l = g),
              (u = f),
              (p = _),
              (m = s(m, g, f, _, v[e + 0], 7, 3614090360)),
              (_ = s(_, m, g, f, v[e + 1], 12, 3905402710)),
              (f = s(f, _, m, g, v[e + 2], 17, 606105819)),
              (g = s(g, f, _, m, v[e + 3], 22, 3250441966)),
              (m = s(m, g, f, _, v[e + 4], 7, 4118548399)),
              (_ = s(_, m, g, f, v[e + 5], 12, 1200080426)),
              (f = s(f, _, m, g, v[e + 6], 17, 2821735955)),
              (g = s(g, f, _, m, v[e + 7], 22, 4249261313)),
              (m = s(m, g, f, _, v[e + 8], 7, 1770035416)),
              (_ = s(_, m, g, f, v[e + 9], 12, 2336552879)),
              (f = s(f, _, m, g, v[e + 10], 17, 4294925233)),
              (g = s(g, f, _, m, v[e + 11], 22, 2304563134)),
              (m = s(m, g, f, _, v[e + 12], 7, 1804603682)),
              (_ = s(_, m, g, f, v[e + 13], 12, 4254626195)),
              (f = s(f, _, m, g, v[e + 14], 17, 2792965006)),
              (g = s(g, f, _, m, v[e + 15], 22, 1236535329)),
              (m = r(m, g, f, _, v[e + 1], 5, 4129170786)),
              (_ = r(_, m, g, f, v[e + 6], 9, 3225465664)),
              (f = r(f, _, m, g, v[e + 11], 14, 643717713)),
              (g = r(g, f, _, m, v[e + 0], 20, 3921069994)),
              (m = r(m, g, f, _, v[e + 5], 5, 3593408605)),
              (_ = r(_, m, g, f, v[e + 10], 9, 38016083)),
              (f = r(f, _, m, g, v[e + 15], 14, 3634488961)),
              (g = r(g, f, _, m, v[e + 4], 20, 3889429448)),
              (m = r(m, g, f, _, v[e + 9], 5, 568446438)),
              (_ = r(_, m, g, f, v[e + 14], 9, 3275163606)),
              (f = r(f, _, m, g, v[e + 3], 14, 4107603335)),
              (g = r(g, f, _, m, v[e + 8], 20, 1163531501)),
              (m = r(m, g, f, _, v[e + 13], 5, 2850285829)),
              (_ = r(_, m, g, f, v[e + 2], 9, 4243563512)),
              (f = r(f, _, m, g, v[e + 7], 14, 1735328473)),
              (g = r(g, f, _, m, v[e + 12], 20, 2368359562)),
              (m = i(m, g, f, _, v[e + 5], 4, 4294588738)),
              (_ = i(_, m, g, f, v[e + 8], 11, 2272392833)),
              (f = i(f, _, m, g, v[e + 11], 16, 1839030562)),
              (g = i(g, f, _, m, v[e + 14], 23, 4259657740)),
              (m = i(m, g, f, _, v[e + 1], 4, 2763975236)),
              (_ = i(_, m, g, f, v[e + 4], 11, 1272893353)),
              (f = i(f, _, m, g, v[e + 7], 16, 4139469664)),
              (g = i(g, f, _, m, v[e + 10], 23, 3200236656)),
              (m = i(m, g, f, _, v[e + 13], 4, 681279174)),
              (_ = i(_, m, g, f, v[e + 0], 11, 3936430074)),
              (f = i(f, _, m, g, v[e + 3], 16, 3572445317)),
              (g = i(g, f, _, m, v[e + 6], 23, 76029189)),
              (m = i(m, g, f, _, v[e + 9], 4, 3654602809)),
              (_ = i(_, m, g, f, v[e + 12], 11, 3873151461)),
              (f = i(f, _, m, g, v[e + 15], 16, 530742520)),
              (g = i(g, f, _, m, v[e + 2], 23, 3299628645)),
              (m = a(m, g, f, _, v[e + 0], 6, 4096336452)),
              (_ = a(_, m, g, f, v[e + 7], 10, 1126891415)),
              (f = a(f, _, m, g, v[e + 14], 15, 2878612391)),
              (g = a(g, f, _, m, v[e + 5], 21, 4237533241)),
              (m = a(m, g, f, _, v[e + 12], 6, 1700485571)),
              (_ = a(_, m, g, f, v[e + 3], 10, 2399980690)),
              (f = a(f, _, m, g, v[e + 10], 15, 4293915773)),
              (g = a(g, f, _, m, v[e + 1], 21, 2240044497)),
              (m = a(m, g, f, _, v[e + 8], 6, 1873313359)),
              (_ = a(_, m, g, f, v[e + 15], 10, 4264355552)),
              (f = a(f, _, m, g, v[e + 6], 15, 2734768916)),
              (g = a(g, f, _, m, v[e + 13], 21, 1309151649)),
              (m = a(m, g, f, _, v[e + 4], 6, 4149444226)),
              (_ = a(_, m, g, f, v[e + 11], 10, 3174756917)),
              (f = a(f, _, m, g, v[e + 2], 15, 718787259)),
              (g = a(g, f, _, m, v[e + 9], 21, 3951481745)),
              (m = o(m, d)),
              (g = o(g, l)),
              (f = o(f, u)),
              (_ = o(_, p));
          const h = c(m) + c(g) + c(f) + c(_);
          return on(h);
        }),
      to = (e, t) => {
        const n = rn(yn.document, "http://www.w3.org/1999/xhtml", e);
        return (
          "string" == typeof t
            ? n.append(t)
            : t &&
              Ft(gt(t), (e) => {
                "textContent" == e ? (n.textContent = t[e]) : n.setAttribute(e, t[e]);
              }),
          n
        );
      },
      no = (t) => {
        const n = yn.document;
        if (n.body || "text/xml" == n.contentType) t();
        else {
          let n = !1;
          const o = () => {
              (n = !0), no(t);
            },
            s = Ot({ capture: !0, once: !0 });
          Ln.addEventListener("DOMNodeInserted", o, s),
            e(() => {
              n || (Ln.removeEventListener("DOMNodeInserted", o, s), t());
            });
        }
      },
      oo = (t) => {
        e(() => {
          Nn(() => t(), 1);
        });
      };
    let so, ro;
    const io = Jn.host,
      ao = (e) => {
        "n:" == en(e, 0, 2) ? (so = en(e, 2)) : e && (ro = en(e, 2));
      },
      co = () => so || (ro ? ((so = eo(`${io}#${ro}`)), so) : void 0),
      lo = (e) => void 0 !== Rt(e, "objUrl"),
      uo = (e) => void 0 !== Rt(e, "blob"),
      po = (e) => void 0 !== Rt(e, "dataUri"),
      mo = ["chrome"];
    let go, fo, _o, vo;
    (_o = () => {
      if (void 0 !== go) return go;
      try {
        const e = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
        e && (go = parseInt(e[2]));
      } catch (e) {}
      return go;
    }),
      (vo = () => {
        if (void 0 !== fo) return fo;
        try {
          fo = -1 != navigator.userAgent.search(/Android|Mobile/);
        } catch (e) {}
        return fo;
      });
    const ho = (_o(), !1),
      bo = ["chrome-extension:"],
      wo = globalThis,
      { chrome: yo, browser: Mo } = wo,
      Eo =
        ([].concat(["chrome"]),
        function (e) {
          const t = () => "prerender" !== document.webkitVisibilityState,
            n = () => {
              t() && (document.removeEventListener("webkitvisibilitychange", n, !1), e());
            };
          t() ? e() : document.addEventListener("webkitvisibilitychange", n, !1);
        }),
      Lo = (() => {
        const e = {
          getInternalPathRegexp: function (e, t) {
            const n = new RegExp("(\\" + ["/", ".", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\"].join("|\\") + ")", "g"),
              o = bo[0] + "//" + Lo.id + "/";
            return new RegExp(o.replace(n, "\\$1") + "([a-zA-Z" + (e ? "\\/" : "") + "]*)" + (t || "").replace(n, "\\$1"));
          },
          getInternalPageRegexp: function () {
            return Lo.getInternalPathRegexp(!1, ".html");
          },
          getPlatformInfo: (e) => yo.runtime.getPlatformInfo(e),
          getBrowserInfo: (e) => {
            e({ name: "Chrome", version: `${_o()}`, vendor: "unknown" });
          }
        };
        return (
          Object.defineProperty(e, "lastError", { get: () => yo.runtime.lastError, enumerable: !0 }),
          Object.defineProperty(e, "id", { get: () => yo.runtime.id, enumerable: !0 }),
          Object.defineProperty(e, "short_id", { get: () => e.id.replace(/[^0-9a-zA-Z]/g, "").substr(0, 4), enumerable: !0 }),
          e
        );
      })(),
      So = (() => {
        const e = {
          getURL: function (e) {
            return yo.runtime.getURL(e);
          },
          sendMessage: function (e, t) {
            return yo.runtime.sendMessage(e, t);
          },
          onMessage: {
            addListener: function (e) {
              return yo.runtime.onMessage.addListener(e);
            }
          },
          connect: function (e) {
            return yo.runtime.connect({ name: e });
          }
        };
        let t;
        return (
          Object.defineProperty(e, "inIncognitoContext", {
            get: () => (void 0 === t && (t = yo.extension.inIncognitoContext), t),
            set: (e) => {
              t = e;
            },
            enumerable: !0
          }),
          e
        );
      })(),
      Oo =
        yo.userScripts && yo.userScripts.onBeforeScript
          ? {
              supported: !0,
              onBeforeScript: {
                addListener: (e) => yo.userScripts.onBeforeScript.addListener(e)
              }
            }
          : { supported: !1 },
      xo = ({ sendPrefix: e, listenPrefix: t, send: n, onMessage: o }) => {
        if (void 0 === n || void 0 === o) throw "invalid args";
        let s,
          r,
          i = 1;
        const a = Ot({}),
          c = Ot({}),
          d = (e) => {
            e && (s = e);
          },
          l = (e) => {
            const t = ++i;
            return (c[i] = e), t;
          };
        o((o, i) =>
          o == `${t}_${s}`
            ? ((t) => {
                const { m: o, r: i, a: d, n: l } = t;
                if ((a[o] && (Ft(a[o], (e) => e(d)), delete a[o]), "message.response" == o)) {
                  if (null == i) throw "Invalid Message";
                  ((e, t) => {
                    let n;
                    e && (n = c[e]) && (n(t), delete c[e]);
                  })(i, d);
                } else if (r) {
                  const t = i
                    ? (t) => {
                        n(`${e}_${s}`, Ot({ m: "message.response", a: t, r: i }));
                      }
                    : () => {};
                  r(Ot({ method: o, args: d, node: l }), t);
                }
              })(i)
            : null
        );
        const u = Ot({
          init: async (e) => {
            s ? d() : d(e);
          },
          refresh: () => null,
          switchId: (e) => {
            s && u.cleanup(), d(e);
          },
          send: (t, o, r, i) =>
            Sn((a) => {
              let c, d;
              "function" != typeof r && null !== r ? ((c = r), (d = i)) : (d = r),
                n(`${e}_${s}`, Ot({ m: t, a: o, r: d ? l(d) : null, n: c })),
                a();
            }),
          sendToId: (t, o, s) => {
            n(`${e}_${t}`, Ot({ m: o, a: s, r: null }));
          },
          once: (e, t) => {
            a[e] || (a[e] = []), Nt(a[e], t);
          },
          setMessageListener: (e) => {
            r = e;
          },
          cleanup: () => null
        });
        return u;
      },
      Ro = Oo,
      Io = Oo.supported && !yn.pagejs;
    let jo;
    const Do = (e, t) => {
        try {
          jo(e), t && t();
        } catch (e) {
          t && t(e.message || e);
        }
      },
      Co = "u" + On(),
      { bridges: Po } = twod;
    let $o = [];
    const Ao = (e) => {
      Ro.onBeforeScript.addListener((o) => {
        const s = (e, n) => {
            Ft(t, (t) => t(e, n));
          },
          r = (e) => Nt(n, Ot({ listener: e, clone: o.export }));
        vt(
          o.global,
          "pagejs",
          Ot({
            set: o.export((t) => {
              delete o.global.pagejs;
              const n = o.metadata,
                { modes: i, nonce: a } = n;
              if ((a && ao(a), Ft($o, (e) => e(t, n)), ($o = []), i.js)) {
                const n = Ot({
                  unsafeWindow: o.global,
                  unsafeThis: o.global.window,
                  pageWindow: void 0,
                  contextId: Co,
                  fSend: s,
                  fOnMessage: r,
                  cloneInto: void 0,
                  exportFunction: void 0
                });
                t(o.export(n)), Po.js.sendToId(Co, "commid", Ot({ id: e }));
              }
            }),
            configurable: !0
          })
        ),
          (jo = o.global.eval);
      });
      const t = [],
        n = [],
        o = (e, t) => {
          Ft(n, ({ listener: n, clone: o }) => n(e, o(t)));
        },
        s = (e) => Nt(t, e);
      return Ot({
        createBridge: () => {
          const t = xo(Ot({ sendPrefix: "2S", listenPrefix: "2U", cloneInto: Zn, send: o, onMessage: s }));
          return t.init(e), t;
        }
      });
    };
    let To;
    const { console: Uo } = twod,
      No = (e) => (
        e.details && e.details.url,
        Sn(async (t) => {
          t(e);
        })
      ),
      Bo = (e) => {
        const t = So.connect(e);
        if (!Lo.lastError) return t;
      },
      Fo = Ot({
        setInterval: (e) => {
          let t;
          e.onMessage.addListener((n) => {
            "setInterval" == n.method && (t = Un(e.postMessage, n.t));
          }),
            e.onDisconnect.addListener(() => {
              t && Bn(t), (t = null);
            });
        },
        registerMenuCommand: (e) => {
          const t = Bo("registerMenuCommand");
          t
            ? (t.onMessage.addListener((n) => {
                if (null !== t) {
                  const { method: t, event: o } = n;
                  e.postMessage(Ot({ method: t, event: o }));
                }
              }),
              t.onDisconnect.addListener(() => {
                e.disconnect();
              }),
              e.onMessage.addListener((e) => {
                const { name: n, uuid: o, accessKey: s, autoClose: r, title: i, id: a } = e,
                  c = Ut([a, To, o], "#");
                t.postMessage(Ot({ method: "registerMenuCommand", name: n, title: i, uuid: o, menuId: c, accessKey: s, autoClose: r }));
              }),
              e.onDisconnect.addListener(() => {
                t.disconnect();
              }))
            : Nn(() => e.disconnect(), 1);
        },
        notification: (e) => {
          const t = Bo("notification");
          t
            ? (t.onMessage.addListener((t) => {
                e.postMessage(t);
              }),
              t.onDisconnect.addListener(() => {
                e.disconnect();
              }),
              e.onMessage.addListener((e) => {
                t.postMessage(e);
              }),
              e.onDisconnect.addListener(() => {
                t.disconnect();
              }))
            : Nn(() => e.disconnect(), 1);
        },
        openInTab: (e) => {
          const t = Bo("openInTab");
          t
            ? (t.onMessage.addListener((t) => {
                e.postMessage(t);
              }),
              t.onDisconnect.addListener(() => {
                e.disconnect();
              }),
              e.onMessage.addListener((e) => {
                if ("openTab" == e.method) {
                  let n = e.url;
                  const {
                      active: o,
                      loadInBackground: s,
                      insert: r,
                      incognito: i,
                      setParent: a
                    } = "boolean" == typeof e.options || void 0 === e.options ? Ot({ loadInBackground: e.options }) : e.options,
                    c = void 0 === o ? void 0 !== s && !s : o,
                    d = void 0 === r || r;
                  n && "//" == en(n, 0, 2) && (n = Jn.protocol + n),
                    t.postMessage(
                      Ot({
                        method: "openInTab",
                        details: Ot({ url: n, options: Ot({ active: !!c, insert: !!d, incognito: !!i, setParent: !i && !!a }) }),
                        uuid: e.uuid
                      })
                    );
                } else
                  void 0 !== e.name
                    ? t.postMessage(Ot({ name: e.name, uuid: e.uuid }))
                    : e.focus
                    ? t.postMessage(Ot({ focus: !0, uuid: e.uuid }))
                    : e.close && t.postMessage(Ot({ close: !0, uuid: e.uuid }));
              }),
              e.onDisconnect.addListener(() => {
                t.disconnect();
              }))
            : Nn(() => e.disconnect(), 1);
        },
        download: (e) => {
          let t;
          const n = Bo("download");
          n
            ? (n.onMessage.addListener((t) => {
                e.postMessage(t);
              }),
              n.onDisconnect.addListener(() => {
                e.disconnect(), (t = !0);
              }),
              e.onMessage.addListener((e) => {
                "cancel" in e
                  ? ((t = !0), n.postMessage(Ot({ cancel: !0, id: To, uuid: e.uuid })))
                  : "details" in e
                  ? No(e).then((e) => {
                      if (t) return;
                      let { url: o, ...s } = e.details;
                      n.postMessage(
                        Ot({ method: "download", details: Ot({ ...s, from: Ot({ url: o }) }), id: To, uuid: e.uuid, location: Jn.href })
                      );
                    })
                  : n.postMessage(Ot({ method: "download", uuid: e.uuid, id: e.id }));
              }),
              e.onDisconnect.addListener(() => {
                n.disconnect();
              }))
            : Nn(() => e.disconnect(), 1);
        },
        webRequest: (e) => {
          const t = Bo("webRequest");
          t
            ? (t.onMessage.addListener((t) => {
                e.postMessage(t);
              }),
              t.onDisconnect.addListener(() => {
                e.disconnect();
              }),
              e.onMessage.addListener((e) => {
                t.postMessage(Ot({ method: "webRequest", rules: e.rules, uuid: e.uuid }));
              }),
              e.onDisconnect.addListener(() => {
                t.disconnect();
              }))
            : Nn(() => e.disconnect(), 1);
        },
        xhr: (e) => {
          let t, n;
          const o = [],
            s = async (e) => {
              if ((e && Nt(o, e), n)) await n, s();
              else {
                const e = At(o);
                e && e();
              }
            },
            r = Bo("xhr");
          r
            ? (r.onMessage.addListener((t) => {
                s(() => {
                  const { onpartial: o, data: s, ...r } = t;
                  let i;
                  if (o && s) {
                    const { tfd: t } = s;
                    if (t) {
                      const s = ((e) =>
                        e && (uo(e) || lo(e) || po(e))
                          ? ((e) => {
                              let t, n, o;
                              if (lo(e)) t = e.objUrl.url;
                              else if (uo(e)) n = e.blob;
                              else {
                                if (!po(e)) throw "incompatible TransferableData";
                                o = e.dataUri;
                              }
                              return Ot({
                                toBlob: () =>
                                  Sn((e) => {
                                    if (n) e(n);
                                    else if (t)
                                      try {
                                        Zt(Hn(t), (t) => {
                                          Zt(Vn(t), (t) => {
                                            e(t);
                                          });
                                        });
                                      } catch (t) {
                                        e(void 0);
                                      }
                                    else {
                                      if (!o) throw "incompatible Transferable";
                                      e(
                                        ((e) => {
                                          let t;
                                          const n = Xt(e, ","),
                                            o = _n(n, 0),
                                            s = _n(n, 1);
                                          t = -1 != tn(o, "base64") ? Te(s) : Ae(s);
                                          const r = _n(Xt(o, ":"), 1),
                                            i = _n(Xt(r, ";"), 0);
                                          return new fn(
                                            [t],
                                            Ot({
                                              type: i
                                            })
                                          );
                                        })(o)
                                      );
                                    }
                                  }),
                                dispose: () => {
                                  t && un(t), (t = n = o = void 0);
                                }
                              });
                            })(e)
                          : void 0)(t);
                      if (!s) return;
                      return void (n = Sn(async (t) => {
                        const a = () => {
                          (n = null), t(), s && s.dispose();
                        };
                        try {
                          const t = await s.toBlob();
                          if (!t) return void a();
                          const n = t.type;
                          let c;
                          if (((c = "arrayBuffer" in t ? await Yn(t) : await zn(new Kn(t))), !c)) return void a();
                          (i = Ot({ nada: Ot({ buffer: c, type: n }) })), e.postMessage(Ot({ ...r, onpartial: o, data: i })), a();
                        } catch (e) {
                          Uo.warn(e), a();
                        }
                      }));
                    }
                    i = s;
                  } else i = s;
                  e.postMessage(Ot({ ...r, onpartial: o, data: i }));
                });
              }),
              r.onDisconnect.addListener(() => {
                s(async () => {
                  e.disconnect(), (t = !0);
                });
              }),
              e.onMessage.addListener((e) => {
                No(e).then((e) => {
                  t || ((e.location = Jn.href), r.postMessage(e));
                });
              }),
              e.onDisconnect.addListener(() => {
                r.disconnect();
              }))
            : Nn(() => e.disconnect(), 1);
        },
        onurlchange: (e) => {
          const t = Bo("onurlchange");
          if (!t) return void Nn(() => e.disconnect(), 1);
          let n = () => {
            e.postMessage(Ot({ url: Jn.href }));
          };
          const o = () => {
            n && (Ln.removeEventListener("hashchange", n), (n = null));
          };
          Ln.addEventListener("hashchange", n),
            t.onMessage.addListener((t) => {
              e.postMessage(t);
            }),
            t.onDisconnect.addListener(() => {
              e.disconnect(), o();
            }),
            e.onMessage.addListener((e) => {
              t.postMessage(e);
            }),
            e.onDisconnect.addListener(() => {
              t.disconnect(), o();
            });
        },
        values: (e) => {
          const t = Bo("values");
          t
            ? (t.onMessage.addListener((t) => {
                e.postMessage(t);
              }),
              t.onDisconnect.addListener(() => {
                e.disconnect();
              }),
              e.onMessage.addListener((e) => {
                t.postMessage(e);
              }),
              e.onDisconnect.addListener(() => {
                t.disconnect();
              }))
            : Nn(() => e.disconnect(), 1);
        }
      }),
      ko = Ot({
        setTimeout: ({ args: e, cb: t }) => {
          Nn(t, e.t);
        },
        setClipboard: ({ args: e, cb: t }) => {
          const { content: n, info: o, uuid: s } = e;
          let r, i;
          "object" == typeof o ? (o.type && (r = o.type), o.mimetype && (i = o.mimetype)) : "string" == typeof o && (r = o);
          const a = i || ("html" == r ? "text/html" : "text/plain");
          ho
            ? So.sendMessage(Ot({ method: "clipboard", mimetype: a, content: n, uuid: s }), () => t())
            : (yn.document.addEventListener(
                "copy",
                (e) => {
                  e.stopImmediatePropagation(), e.preventDefault(), e.clipboardData && e.clipboardData.setData(a, n);
                },
                Ot({ capture: !0, once: !0 })
              ),
              yn.document.execCommand("copy"),
              t());
        },
        closeTab: ({ args: { uuid: e }, cb: t }) => {
          So.sendMessage(Ot({ method: "closeTab", uuid: e, id: To }), (e) => {
            e && e.error && Uo.warn(e.error), t(e);
          });
        },
        focusTab: ({ args: { uuid: e }, cb: t }) => {
          So.sendMessage(Ot({ method: "focusTab", uuid: e, id: To }), (e) => {
            e && e.error && Uo.warn(e.error), t(e);
          });
        },
        addElement: async ({ args: t, node: n, cb: o }) => {
          try {
            const s = to(t.tag, Ot({ ...(t.properties || Ot({})), ...(t.id ? Ot({ id: t.id }) : Ot({})) }));
            let r, i;
            if (("script" === t.tag && (r = co()) && s.setAttribute("nonce", r), n)) i = n;
            else {
              const t = yn.document;
              if (((i = t.head || t.body || t.documentElement), !i)) {
                const t = yn.document;
                i = await Sn((n) => e(() => n(t.head || t.body)));
              }
            }
            i.appendChild(s), r && s.removeAttribute("nonce"), o();
          } catch (e) {
            Uo.warn("content: error adding script", e);
          }
        },
        tabs: ({ args: e, cb: t }) => {
          (e.method = "tabs"), So.sendMessage(e, (e) => e && t(e.data));
        },
        cookie: ({ args: e, cb: t }) => {
          (e.method = "cookie"), So.sendMessage(e, (e) => e && t(e.data));
        },
        backgroundControl: ({ args: { restart: e, uuid: t }, cb: n }) => {
          So.sendMessage(Ot({ method: "backgroundControl", restart: e, uuid: t, id: To }), (e) => {
            e && e.error && Uo.warn(e.error), n(e);
          });
        }
      }),
      Xo = Ot({
        init: () => {
          To = twod.contextId;
        },
        processMessage: ({ method: e, args: t, node: n }, o) => {
          let s;
          if ((s = ko[e])) return s(Ot({ args: t, node: n, cb: o }));
          o();
        },
        processConnect: (e, t) => {
          let n;
          if ((n = Fo[e])) return n(t);
        }
      }),
      qo = ["GM_info", "GM.info"],
      Wo = ["unsafeWindow", ...qo],
      Ho = (e) => e.replace(new RegExp("[\"']", "g"), "\\$1");
    let Jo = !1;
    const Go = (e, t, n, o, s) => {
        const { console: r } = twod;
        Jo = Jo || e.logLevel >= 60;
        const {
            version: i,
            injectMode: a,
            inIncognitoContext: c,
            isFirstPartyIsolation: d,
            downloadMode: l,
            relaxedCsp: u,
            userAgent: p,
            container: m,
            logLevel: g
          } = e,
          f = Ot({
            version: i,
            injectMode: a,
            inIncognitoContext: c,
            isFirstPartyIsolation: d,
            downloadMode: l,
            relaxedCsp: u,
            container: m
          });
        Ft(t, async (t) => {
          const { script: i, storage: a } = t,
            {
              name: c,
              uuid: d,
              options: { run_at: l }
            } = i,
            { requires: u, ...m } = i,
            _ = u.length,
            v = !i.options.unwrap,
            h = Ot({ ...f, userAgent: p, logLevel: g, sandboxMode: s });
          let b, w;
          const y = ((e, t) => {
            const { measure_scripts: n, top_level_await: o, enforce_strict_mode: s } = e,
              { source_url: r, script: i, code: a } = t,
              { name: c, grant: d } = i,
              { requires: l } = i,
              u = !i.options.unwrap,
              p = l.map((e) => e.textContent || "").join("\n");
            if (u) {
              let e = "";
              const t = ["define", "module", "exports"],
                l = t.map(() => "undefined"),
                u = -1 !== i.grant.indexOf("none");
              let m;
              return (
                (m = u ? qo : d.concat(Wo)),
                m.forEach((e) => {
                  const n = e.split(".")[0];
                  "window" !== n && -1 === t.indexOf(n) && (t.push(n), l.push(`p.${n}`));
                }),
                [
                  `with (${u ? "this.s" : "this"}) {`,
                  "(async (u, { p, r, s }) => {",
                  "try {",
                  n ? `console.time("${(e = `SCRIPT RUN TIME[${Ho(c)}]`)}");\n` : "",
                  "r(u, s, [",
                  l.join(","),
                  "]);",
                  n ? `console.timeEnd("${e}");\n` : "",
                  "} catch (e) {",
                  "if (e.message && e.stack) {",
                  "console.error(\"ERROR: Execution of script '",
                  Ho(c),
                  "' failed! \" + e.message);",
                  "console.log(e.stack);",
                  "} else {",
                  "console.error(e);",
                  "}",
                  "}",
                  "})",
                  "(",
                  (o ? "async " : "") + "function(",
                  t.join(","),
                  ") {",
                  s ? '"use strict";\n' : "\n",
                  p,
                  a,
                  "\n",
                  `}, ${u ? "this" : "seed"})`,
                  "}",
                  "\n",
                  r ? `//# sourceURL=${r}\n` : ""
                ].join("")
              );
            }
            return [p, a, "\n", r ? `//# sourceURL=${r}\n` : ""].join("");
          })(e, t);
          return (
            v
              ? ((b = () => {
                  Jo && r.debug(`env: inject "${c}" now`);
                  const e = `__f__${On()}`,
                    t = Ot({ storage: a, script: m }),
                    s = `window["${e}"] = function(){${y}}`;
                  let i = !0;
                  o.once(`scriptack-${e}`, () => {
                    Jo && !i && r.log(`env: execution of "${c}" was delayed`),
                      n(s, (e) => {
                        e && r.error(`Uncaught SyntaxError: ${e}`);
                      });
                  }),
                    o.send("script", Ot({ id: e, unwrap: !1, bundle: t, flags: h })),
                    (i = !1);
                }),
                (w =
                  "context-menu" == l || "document-start" == l
                    ? void 0
                    : () => {
                        Jo && r.debug(`env: run "${c}" now  (${_} requires)`), o.send("run", Ot({ uuid: d }));
                      }))
              : (w = () => {
                  Jo && r.debug(`env: inject @unwrap "${c}" now`),
                    n(y, (e) => {
                      e && r.error(`Uncaught SyntaxError: ${e}`);
                    });
                }),
            Ko(c, l, b, w, Jo)
          );
        });
      },
      Ko = (t, n, o, s, r) => {
        const { console: i } = twod;
        let a;
        "document-start" == n
          ? (r && i.debug(`env: run "${t}" ASAP -> document-start`), (a = (e) => e()))
          : "document-body" == n
          ? (r && i.debug(`env: schedule "${t}" for document-body`), (a = no))
          : "context-menu" == n
          ? r && i.debug(`env: run "${t}" ASAP -> context-menu`)
          : "document-end" == n
          ? (r && i.debug(`env: schedule "${t}" for document-end`), (a = (t) => e(!1, t)))
          : (r && i.debug(`env: schedule "${t}" for document-idle`), (a = oo)),
          o && o(),
          s &&
            a &&
            a(() => {
              s();
            });
      },
      zo = (e, t) => {
        let n, o;
        try {
          o = (0, eval)(e);
        } catch (e) {
          n = e.message || e;
        }
        return t && t(n), o;
      },
      { createEvent: Vo } = hn,
      Yo = function (e, t, n, o, s) {
        let r;
        const i = co(),
          a = to("script");
        i && a.setAttribute("nonce", i);
        try {
          (a.textContent = t), e.appendChild(a);
        } catch (e) {
          r = e.message || e;
        }
        if ((i && a.removeAttribute("nonce"), !s)) {
          const e = a.parentNode;
          e && e.removeChild(a);
        }
        return o && o(r), !r;
      },
      Zo = (e, t) => {
        try {
          Yo(Gn.head || Gn.body || Gn.documentElement || Gn, e, 0, t);
        } catch (e) {
          t && t(e.message || e);
        }
      };
    let Qo = !1;
    const es = location.pathname + location.search,
      ts =
        "TM_" +
        Lo.short_id +
        window
          .btoa(es.length + es)
          .substr(0, 255)
          .replace(/[#=/]/g, "_"),
      ns = () => {
        let e, t, n, o;
        try {
          o = document.cookie.split(";");
        } catch (e) {
          return;
        }
        for (e = 0; e < o.length; e++)
          if (
            ((t = o[e].substr(0, o[e].indexOf("="))),
            (n = o[e].substr(o[e].indexOf("=") + 1)),
            (t = t.replace(/^\s+|\s+$/g, "")),
            0 === t.indexOf(ts))
          ) {
            document.cookie = t + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
            const e = De(n);
            if (0 !== e.indexOf("blob:")) continue;
            let o;
            try {
              if (0 !== (new URL(e).origin + "/").indexOf(So.getURL("/"))) continue;
              if (((o = new XMLHttpRequest()), o.open("GET", e, !1), o.send(null), 200 === o.status || 0 === o.status))
                return JSON.parse(o.responseText);
            } catch (e) {
              console.warn("content: unable to decode " + ((o && o.responseText) || "unknown"));
            }
          }
      };
    let os = !1;
    const ss = (e) => {
      const { bridges: t } = twod,
        { scripts: n, ...o } = e;
      n.js && Go(o, n.js, Do, t.js, "js"),
        n.dom && (Ft(mo, (e) => (Mn[e] = void 0)), Go(o, n.dom, zo, t.dom, "dom")),
        n.raw && Go(o, n.raw, Zo, t.raw, "raw");
    };
    let rs;
    (async () => {
      const { unsafeWindow: o, bridges: s } = twod,
        { location: r, document: i } = o,
        a = i instanceof XMLDocument;
      if (!Ot({ "http:": !0, "https:": !0, "file:": !0 })[o.location.protocol]) return;
      const c = twod.contextId ? twod.contextId : (twod.contextId = On());
      let d;
      const l = Ot({});
      _t(twod.console, Tn),
        Sn((e) => {
          if (Io) {
            const { createBridge: t } = Ao(c);
            Nt($o, (n, o) => {
              rs = d = n;
              const { modes: r } = o;
              r.js && ((s.js = t()), (l.js = () => !1), a && (r.raw = !1)), e(o);
            });
          } else
            Sn((e) => {
              (rs = d = o.pagejs),
                delete o.pagejs,
                rs
                  ? e()
                  : (() => {
                      let t = (n) => {
                        delete yn.pagejs,
                          (t = void 0),
                          ((t) => {
                            if (!t) throw "Error: pagejs missing. Please see http://tmnk.net/faq#Q208 for more information.";
                            (rs = d = t), e();
                          })(n);
                      };
                      vt(yn, "pagejs", Ot({ set: t, configurable: !0 })),
                        Nn(() => {
                          t && t();
                        }, 1);
                    })();
            }).then(() => {
              e(Ot({ modes: Ot({ js: !1, raw: !0, dom: !0 }) }));
            });
        }).then(({ modes: { dom: i, raw: u }, answer: p }) => {
          var m;
          if ((p && (m = p).scripts && m.contexters && (Mn.tm_info = p), i)) {
            const e = Io ? zo(`() => ${d};`)() : d,
              { createBridge: t, inject: n } = ((e, t) => {
                const n = (e, t) => {
                    Ft(s, (n) => n(e, t));
                  },
                  o = (e) => Nt(r, Ot({ listener: e, clone: (e) => e })),
                  s = [],
                  r = [],
                  i = (e, t) => {
                    Ft(r, ({ listener: n, clone: o }) => n(e, o(t)));
                  },
                  a = (e) => Nt(s, e),
                  c = "c" + On();
                let d;
                return Ot({
                  createBridge: () => ((d = xo(Ot({ sendPrefix: "2S", listenPrefix: "2U", send: i, onMessage: a }))), d.init(e), d),
                  inject: () => (
                    t(Ot({ unsafeWindow: yn, unsafeThis: Mn, pageWindow: void 0, contextId: c, fSend: n, fOnMessage: o })),
                    d.sendToId(c, "commid", Ot({ id: e })),
                    !0
                  )
                });
              })(c, e);
            (l.dom = n), (s.dom = t());
          }
          if (u) {
            const { createBridge: e, inject: o } = ((e, o) => {
              let s;
              return Ot({
                createBridge: () => (
                  (s = (({ sendPrefix: e, listenPrefix: t, cloneInto: o }) => {
                    const s = Ot({});
                    let r,
                      i,
                      a = 1;
                    const c = Ot({});
                    let d = !1,
                      l = [];
                    const u = () => {
                        (_ = yn.document.documentElement), (d = !1);
                        const e = l;
                        (l = []),
                          Ft(e, (e) => {
                            d || h() ? Nt(l, e) : e();
                          });
                      },
                      p = (e) => {
                        const t = ++a;
                        return (c[a] = e), t;
                      },
                      m = (e, t) => {
                        const { m: n, a: s, r, n: i } = t,
                          a = ((e, t, n) => {
                            let s;
                            var r;
                            return (
                              n
                                ? ((s = Vo("MutationEvent")), zt(s, e, !1, !1, n || null, void 0, void 0, $t(t), Vt))
                                : (s = new mn(e, Ot({ detail: ((r = t), o ? o(r, yn.document) : r) }))),
                              s
                            );
                          })(e, Ot({ m: n, a: s, r }), i);
                        St(Be, yn, [a]);
                      },
                      g = (t) => {
                        const { m: n, r: o, a } = Jt("CustomEvent" == Gt((d = t)) ? ln(d) : Pt(cn(d)));
                        var d;
                        if ((s[n] && (Ft(s[n], (e) => e(a)), delete s[n]), "unlock" == n))
                          m(`${e}_${i}`, Ot({ m: "unlocked", a: void 0, r: null })), u();
                        else if ("unlocked" == n) u();
                        else if ("message.response" == n) {
                          if (null == o) throw "Invalid Message";
                          ((e, t) => {
                            let n;
                            e && (n = c[e]) && (n(t), delete c[e]);
                          })(o, a);
                        } else if (r) {
                          const s = o
                            ? (t) => {
                                m(`${e}_${i}`, Ot({ m: "message.response", a: t, r: o }));
                              }
                            : () => {};
                          r(Ot({ method: n, args: a, node: "MutationEvent" === Gt(t) ? dn(t) : void 0 }), s);
                        }
                      },
                      f = (e) => {
                        e && (i = e), i && Ln.addEventListener(`${t}_${i}`, g, !0);
                      };
                    let _, v;
                    const h = () => {
                        if (
                          (() => {
                            const e = yn.document.documentElement;
                            return _ || (_ = e), _ !== e;
                          })()
                        ) {
                          if (v) {
                            const e = v;
                            (v = void 0), e(yn.document);
                          }
                          return !0;
                        }
                      },
                      b = Ot({
                        init: async (t, o) => {
                          i ? f() : f(t),
                            n && !o && (await null),
                            ((_ = yn.document.documentElement),
                            Sn((e) => {
                              v = e;
                              const t = new gn(() => {
                                h() && t.disconnect();
                              });
                              t.observe(
                                yn.document,
                                Ot({
                                  childList: !0
                                })
                              );
                            })).then(() => {
                              (d = !0), b.refresh(), m(`${e}_${i}`, Ot({ m: "unlock", a: void 0, r: null }));
                            });
                        },
                        refresh: () => {
                          const e = i;
                          e && (b.cleanup(), b.init(e, !0));
                        },
                        switchId: (e) => {
                          i && b.cleanup(), f(e);
                        },
                        send: (t, n, o, s) =>
                          Sn((r) => {
                            let a, c;
                            "function" != typeof o && null !== o ? ((a = o), (c = s)) : (c = o), h();
                            const u = () => {
                              m(`${e}_${i}`, Ot({ m: t, a: n, r: c ? p(c) : null, n: a })), r();
                            };
                            d ? Nt(l, u) : u();
                          }),
                        sendToId: (t, n, o) => {
                          m(`${e}_${t}`, Ot({ m: n, a: o, r: null }));
                        },
                        setMessageListener: (e) => {
                          r = e;
                        },
                        once: (e, t) => {
                          s[e] || (s[e] = []), Nt(s[e], t);
                        },
                        cleanup: () => {
                          i && (Ln.removeEventListener(`${t}_${i}`, g, !0), (i = void 0));
                        }
                      });
                    return b;
                  })(Ot({ sendPrefix: "2P", listenPrefix: "2C", cloneInto: Zn }))),
                  s
                ),
                inject: () => {
                  s.init(e);
                  let n = !1;
                  {
                    const r = On(),
                      i =
                        "(" +
                        Kt((e, t) => {
                          const n = window,
                            o = t(n),
                            s = n.parent,
                            { O_dPy: r, cSO: i } = o;
                          r(s, e, i({ value: o, enumerable: !1, writable: !1, configurable: !0 }));
                        }) +
                        ')("' +
                        r +
                        '", ' +
                        Kt(t) +
                        ")";
                    s.once("ack", () => {
                      n = !0;
                    }),
                      ((t) => {
                        ((e, t) => {
                          const n = _n(an(yn.document, "*"), 0) || yn.document,
                            o = to("div"),
                            s = o.attachShadow(Ot({ mode: "closed" }));
                          s.appendChild(to("style", ":host { display: none }"));
                          const r = to(
                            "iframe",
                            Ot({ sandbox: "allow-scripts allow-same-origin", style: "display: none", src: "javascript:void 0" })
                          );
                          let i = () => {
                            if (null === i) return;
                            i = null;
                            let n = !1;
                            try {
                              const t = r.contentDocument,
                                o = r.contentWindow;
                              t && o && (n = Yo(_n(t.getElementsByTagName("*"), 0), e));
                            } catch (e) {}
                            t(o, n), r.remove(), o.remove();
                          };
                          r.addEventListener("load", i, Ot({ once: !0, capture: !0 })), s.appendChild(r), n.appendChild(o), i && i();
                        })(t, (t, n) => {
                          Yo(
                            t,
                            `(${o})({ unsafeWindow: typeof globalThis === "undefined" ? window : globalThis, unsafeThis: window, vault: ${
                              n ? `window["${r}"]` : "null"
                            }, contextId: "${r}", __proto__: null });delete window["${r}"]\n`,
                            0,
                            () => {
                              s.sendToId(r, "commid", Ot({ id: e }));
                            },
                            !0
                          );
                        });
                      })(i);
                  }
                  return n;
                }
              });
            })(c, d);
            (l.raw = o), (s.raw = e());
          }
          (s.first = s.js || s.raw || s.dom),
            So.onMessage.addListener((e, t, n) => {
              "executeScript" == e.method
                ? ((e.url && 0 !== tn(r.href, e.url)) || (void 0 !== e.topframe && e.topframe != Fn) || ss(e.info, !1), n(Ot({})))
                : Fn &&
                  ("loadUrl" == e.method
                    ? ((o.location = e.url), n(Ot({})))
                    : "reload" == e.method
                    ? (r.reload(), n(Ot({})))
                    : "setForeignAttr" == e.method
                    ? (s.first.send(e.method, e), n(Ot({})))
                    : Tn.log("content: unknown method " + $t(e)));
            }),
            xn.onConnect.addListener((e, t) => {
              Xo.processConnect(e, t);
            }),
            Xo.init(),
            Ft(gt(s), (e) => {
              if ("first" == e) return;
              const t = s[e];
              t.setMessageListener((n, o) => {
                const { method: s, args: r } = n;
                if ("port.message" == s) xn.message(r, t);
                else if ("csp" == s) {
                  let t;
                  (t = "raw" == e ? Zo : "dom" == e ? zo : Do),
                    t(r.src, (e) => {
                      e && Tn.error(`Uncaught Error: ${e}`);
                    });
                } else if ("external.message" == s)
                  So.sendMessage(Ot({ method: "externalMessage", request: r }), (e) => {
                    o(e);
                  });
                else if ("console" == s) {
                  const e = r,
                    t = _n(e, 0),
                    n = _n(e, 1),
                    o = Tn[t] || Tn.log;
                  o &&
                    St(
                      o,
                      Tn,
                      ((e, ...t) => {
                        let n = e.length;
                        const o = Ot(e);
                        for (let e = 0; e < t.length; e++) {
                          const s = t[e],
                            r = yt(s) ? s : [s];
                          for (let e = 0; e < r.length; e++) o[n + e] = Rt(r, e);
                          n += r.length;
                        }
                        return ft(o);
                      })(
                        ["injected:"],
                        ((e) => {
                          const t = [];
                          return (
                            Ft(e, (e) => {
                              Nt(t, ((e) => ("string" == typeof e ? Pt(e) : e))(e));
                            }),
                            t
                          );
                        })(n)
                      )
                    );
                } else Xo.processMessage(n, o);
              });
            }),
            ((t, n, o) => {
              const { contextId: s, bridges: r, console: i } = twod;
              let a;
              Sn((e) => {
                const o = (t) => {
                    let n = 1;
                    const o = () => {
                      Qo && i.log('content: send "prepare" message'),
                        So.sendMessage({ method: "prepare", id: s, topframe: Fn, url: window.location.href }, (s) => {
                          if (!os) {
                            if (!s)
                              return (
                                Qo && i.log("content: _early_ execution, connection to bg failed -> retry!"),
                                window.setTimeout(o, n),
                                void (n = Lt(2 * n, 3e3))
                              );
                            (os = !0),
                              s.nonce && ao(s.nonce),
                              gt(s.contexters).length || gt(s.scripts).length || s.external_connect
                                ? (t && t(s), e({ info: s, type: "complete" == sn(yn.document) ? "late" : "normal" }))
                                : e({ info: s });
                          }
                        });
                    };
                    Eo(o);
                  },
                  r = () => {
                    let r;
                    if (
                      (Qo && i.log("content: Started (" + s + ", " + window.location.origin + window.location.pathname + ")", Mn.tm_info),
                      (r = Mn.tm_info) || (r = ns()))
                    ) {
                      delete Mn.tm_info, r.nonce && ao(r.nonce);
                      const { contexters: o, scripts: s, external_connect: i, originalURL: c } = r;
                      if (gt(o).length || gt(s).length || i) {
                        if (r.contexters.raw || r.scripts.raw)
                          if (t.raw) a = t.raw();
                          else if (!n) throw "raw inject missing";
                        e({ info: r, type: "sync" });
                      } else e({ info: r });
                      So.sendMessage({ method: "prepare", url: window.location.href, cleanup: !0 }, () => null);
                    } else
                      n
                        ? o(({ scripts: e, contexters: n }) => {
                            t.raw && (e.raw || n.raw) && (a = t.raw());
                          })
                        : (t.raw && (a = t.raw()), o());
                  };
                n ? window.setTimeout(() => r(), 1) : r();
              }).then(({ info: a, type: c }) => {
                const { external_connect: d } = a;
                if (
                  (d &&
                    (async () => {
                      await null, r.first.send("external.connect");
                    })(),
                  c)
                ) {
                  Qo = Qo || a.logLevel >= 60;
                  const { scripts: d } = a;
                  if (d.raw) {
                    let e;
                    n && !t.raw && (e = !0),
                      e &&
                        (t.js
                          ? ((d.js = (d.js || []).concat(d.raw || [])), delete d.raw)
                          : t.dom && ((d.dom = (d.dom || []).concat(d.raw || [])), delete d.raw));
                  }
                  if (d.js) {
                    if (!t.js) throw "js inject missing";
                    t.js();
                  }
                  if (d.dom) {
                    if (!t.dom) throw "dom inject missing";
                    t.dom();
                  }
                  e(!1, () => {
                    Qo && i.log("content: DOMContentLoaded"), Ft(gt(r), (e) => r[e].send("DOMContentLoaded"));
                  }),
                    (l = () => {
                      Qo && i.log("content: load"), Ft(gt(r), (e) => r[e].send("load"));
                    }),
                    "complete" == sn(yn.document) ? l() : Ln.addEventListener("load", () => l(), Ot({ capture: !0, once: !0 }));
                  const u = (d.dom || []).length + (d.js || []).length + (d.raw || []).length;
                  Qo && i.log("content: " + (c || "normal") + " start event processing for " + s + " (" + u + " to run)"),
                    ss(a, "sync" === c),
                    !Fn &&
                      u &&
                      window.addEventListener(
                        "unload",
                        () => {
                          So.sendMessage({ method: "unLoad", id: s, topframe: !1, url: window.location.href }, () => null);
                        },
                        !1
                      ),
                    o();
                } else o();
                var l;
              });
            })(l, a, () => (rs = void 0)),
            (async () => {
              const { contextId: e } = twod,
                { location: t, document: n } = yn;
              n.addEventListener(
                "mouseenter",
                () => {
                  So.sendMessage(Ot({ method: "contextmenu", url: t.href, id: e }), () => {});
                },
                !1
              );
            })();
        });
    })();
  })();
})({ __proto__: null, unsafeWindow: typeof globalThis === "undefined" ? window : globalThis, unsafeThis: window }, "tm_blh6tb");
