this.pagejs = (e) => {
  (() => {
    "use strict";
    const t = "vault" in e;
    if (t && void 0 === e.vault) throw "Invalid vault";
    const n = (e.vault =
        e.vault ||
        ((e) => {
          const t = Object.call,
            n = t.bind(t),
            o = Object.assign,
            r = Object.getOwnPropertyDescriptor,
            s = (e) => o({ __proto__: null }, e);
          return s({
            sourceWindow: e,
            cSO: s,
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
            O_gOPD: r,
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
            R_r: r(FileReader.prototype, "result").get,
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
            D_cS: r(Document.prototype, "currentScript").get,
            D_gRS: r(Document.prototype, "readyState").get,
            D_cE: Document.prototype.createElementNS,
            D_gEBT: Document.prototype.getElementsByTagName,
            M_aN: r(MutationEvent.prototype, "attrName").get,
            M_rN: r(MutationEvent.prototype, "relatedNode").get,
            C_d: r(CustomEvent.prototype, "detail").get,
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
        })(e.unsafeWindow)),
      {
        cSO: o,
        F_c: r,
        F_a: s,
        F_b: a,
        F_tS: i,
        A_fE: l,
        A_so: c,
        A_sh: d,
        A_j: u,
        A_f: g,
        A_iO: p,
        A_iA: f,
        O_a: v,
        O_k: m,
        O_v: _,
        O_dP: b,
        O_dPy: M,
        O_hOP: h,
        O_gOPN: y,
        O_gOPD: w,
        O_gOPDs: E,
        O_gPO: S,
        O_tS: R,
        J_p: G,
        J_s: L,
        M_f: O,
        M_r: C,
        M_m: I,
        M_mi: T,
        M_i: x,
        M_pA: P,
        M_pAT: D,
        N_tS: A,
        N_MSI: k,
        P_t: U,
        P_c: $,
        R_rABS: j,
        R_rAT: F,
        R_r: N,
        R_enq: V,
        R_cl: q,
        S_fCC: X,
        S_sl: B,
        S_su: H,
        S_iO: W,
        S_sp_nr: K,
        S_tr: J,
        S_rA_nr: z,
        S_cCA: Y,
        S_tLC: Q,
        S_tUC: Z,
        Y_tST: ee,
        D_pFS: te,
        D_cS: ne,
        D_gRS: oe,
        D_cE: re,
        D_gEBT: se,
        E_r: ae,
        E_s: ie,
        E_rA: le,
        M_aN: ce,
        M_rN: de,
        C_d: ue,
        U_cOU: ge,
        U_rOU: pe,
        USP_tS: fe,
        X_o: ve,
        X_s: me,
        X_pSD: _e,
        X_pSH: be,
        X_pSL: Me,
        X_pSO: he,
        X_pSU: ye,
        D_n: we,
        I_tS: Ee,
        W_aEL: Se,
        W_rEL: Re,
        parseInt: Ge,
        parseFloat: Le,
        console: Oe,
        encodeURIComponent: Ce,
        decodeURIComponent: Ie,
        encodeURI: Te,
        decodeURI: xe,
        escape: Pe,
        unescape: De,
        atob: Ae,
        btoa: ke,
        postMessage: Ue,
        dispatchEvent: $e,
        alert: je,
        prompt: Fe,
        confirm: Ne,
        close: Ve,
        getElementById: qe,
        createEvent: Xe,
        createElement: Be,
        CustomEvent: He,
        CompositionEvent: We,
        KeyboardEvent: Ke,
        MouseEvent: Je,
        MutationEvent: ze,
        MutationObserver: Ye,
        Uint8Array: Qe,
        FileReader: Ze,
        DOMParser: et,
        XMLHttpRequest: tt,
        Function: nt,
        RegExp: ot,
        Promise: rt,
        Blob: st,
        ReadableStream: at,
        Number: it,
        String: lt,
        Proxy: ct,
        Window: dt
      } = n,
      ut = r,
      gt = s,
      pt = m,
      ft = _,
      vt = v,
      mt = b,
      _t = M,
      bt = y,
      Mt = w,
      ht = S,
      yt =
        E ||
        ((e) => {
          const t = Lt({});
          for (const n in e) t[n] = Mt(e, n);
          return t;
        }),
      wt = f,
      Et = O,
      St = C,
      Rt = I,
      Gt = (e, t, n) => ut(gt, e, t, n),
      Lt = o,
      Ot = (e, t, n) => (_t(e, t, Lt({ value: n, configurable: !0, enumerable: !0, writable: !0 })), e),
      Ct = (e, t) => (Kt(e, t) ? e[t] : void 0),
      It = (e, t) => {
        const n = Mt(e, t);
        return n ? Lt(n).value : void 0;
      },
      Tt = (e, t) => {
        const n = (e, t, o) => {
          const r = Mt(e, t),
            s = r ? Lt(r) : void 0;
          let a;
          return s ? (s.enumerable ? s.value : void 0) : --o >= 0 && (a = ht(e)) ? n(a, t, o) : void 0;
        };
        return n(e, t, 5);
      },
      xt = (e) => {
        const t = (t, ...n) => Gt(e, t, n);
        return Ot(t, "wrappedJSObject", e), t;
      },
      Pt = () => (e) => xt(e),
      Dt = xt(a),
      At = G,
      kt = (e) => {
        const t = (e, n) => {
          let o;
          if (null === e) o = "null";
          else {
            const r = typeof e;
            if ("object" === r) {
              if (n) {
                if (-1 != Ht(n, e)) throw "Converting circular structure to JSON";
                Ot(n, n.length, e);
              } else n = [e];
              if (wt(e)) {
                let r = "";
                for (let o = 0; o < e.length; o++) {
                  let s;
                  s = Kt(e, o) ? Ct(e, o) : Tt(e, o);
                  const a = t(s, n);
                  r += `${o ? "," : ""}${void 0 === a ? "null" : a}`;
                }
                o = `[${r}]`;
              } else {
                let r = "";
                Wt(pt(e), (o) => {
                  const s = t(e[o], n);
                  void 0 !== s && (r += `${r ? "," : ""}${L(o)}: ${s}`);
                }),
                  (o = `{${r}}`);
              }
              n.length -= 1;
            } else {
              if ("bigint" === r) throw "Do not know how to serialize a BigInt";
              o = L(e);
            }
          }
          return o;
        };
        return t(e);
      },
      Ut = (e) => {
        const t = G(e),
          n = (e) => {
            const t = [];
            for (let n = 0; n < e.length; n++) Ot(t, n, o(e[n]));
            return t;
          },
          o = (e) => {
            if (null === e);
            else if ("object" == typeof e) {
              if (wt(e)) return n(e);
              {
                const t = {};
                return (
                  Wt(pt(e), (r) => {
                    const s = e[r];
                    let a;
                    (a = "object" == typeof s ? (wt(s) ? n(s) : o(s)) : s), Ot(t, r, a);
                  }),
                  t
                );
              }
            }
            return e;
          };
        return o(t);
      },
      $t = Pt()(c),
      jt = (e, t, n, ...o) => {
        const r = o || [],
          s = Vt(e, 0, t),
          a = Vt(e, t, n),
          i = Vt(e, t + n);
        let l = Xt([], s);
        return (l = Xt(l, r)), (l = Xt(l, i)), Lt({ result: l, removed: a });
      },
      Ft = Pt()(d),
      Nt = Pt()(g),
      Vt = (e, t, n) => {
        const o = e.length;
        let r = t || 0;
        if (r >= o) return [];
        r < 0 && (r = Rt(0, o + r));
        let s = void 0 === n ? o : n;
        s < 0 && (s = Rt(0, o + s)), s > o && (s = o);
        const a = Lt({});
        for (let t = r; t < s; t++) a[t] = It(e, t);
        return ft(a);
      },
      qt = Pt()(u),
      Xt = (e, ...t) => {
        let n = e.length;
        const o = Lt(e);
        for (let e = 0; e < t.length; e++) {
          const r = t[e],
            s = wt(r) ? r : [r];
          for (let e = 0; e < s.length; e++) o[n + e] = It(s, e);
          n += s.length;
        }
        return ft(o);
      },
      Bt = (e, t) => {
        let n = e.length || 0;
        return Ot(e, n, t), n++, (e.length = n);
      },
      Ht = Pt()(p),
      Wt = Pt()(l),
      Kt = Pt()(h),
      Jt = Pt()(K),
      zt = Pt()(B),
      Yt = xt(R),
      Qt = ht({}),
      Zt = (e) => {
        const t = Lt(e),
          n = bt(t);
        for (let e = 0; e < n.length; e++) {
          const o = n[e],
            r = t[o];
          null !== r && "object" == typeof r && ht(r) === Qt && (t[o] = Zt(r));
        }
        return t;
      },
      en = (e) => {
        const t = Jt(Yt(e), " ");
        return zt(qt(Vt(t, 1), " "), 0, -1);
      },
      tn = (Pt()(i), Pt()(x)),
      nn = P,
      on = D,
      rn = Pt()(A),
      sn = k,
      an = Pt()(U),
      ln = Pt()($),
      cn = Pt()(j),
      dn = Pt()(F),
      un = Pt()(N),
      gn = V ? Pt()(V) : V,
      pn = q ? Pt()(q) : q,
      fn = X,
      vn = Pt()(H),
      mn = Pt()(W),
      _n = Pt()(J),
      bn =
        (Pt()(
          z ||
            function (e, t) {
              return qt(Jt(this, e), t);
            }
        ),
        Pt()(Y)),
      Mn = Pt()(Q),
      hn = Pt()(Z),
      yn = ee,
      wn = xt(te),
      En = xt(ne),
      Sn = xt(oe),
      Rn = (xt(re), xt(se), xt(ae)),
      Gn = xt(ie),
      Ln = xt(le),
      On = xt(ce),
      Cn = xt(de),
      In = xt(ue),
      Tn = xt(fe),
      xn = (Pt()(ve), _e),
      Pn = be,
      Dn = Me,
      An = he,
      kn = ye,
      Un = (Pt()(me), we),
      $n = ct,
      jn = it,
      Fn = He,
      Nn = Ke,
      Vn = Je,
      qn = Qe,
      Xn = Ye,
      Bn = st,
      Hn = function (e, t) {
        return It(e, t);
      },
      Wn = Lt({
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
      Kn = (() => {
        const e = Lt({ getElementById: qe, createEvent: Xe, createElement: Be, dispatchEvent: $e, addEventListener, removeEventListener }),
          t = Lt({});
        return (
          Wt(pt(e), (n) => {
            try {
              const o = e[n];
              t[n] = function (...e) {
                return Gt(o, Yn.document, e);
              };
            } catch (e) {
              t[n] = ((e, t) => {
                if (
                  (Zn.error(
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
      Jn = Lt({ top: !0, location: !0 }),
      zn = e,
      { unsafeWindow: Yn, unsafeThis: Qn } = zn;
    e.bridges = e.bridges || Lt({});
    const Zn = (e.console = e.console || Lt({})),
      eo = Lt({ addEventListener: Dt(Se, Yn), removeEventListener: Dt(Re, Yn) });
    Wt(pt(Jn), async (e) => {
      if (!eo[e])
        try {
          const t = Yn[e];
          if (null == t) return;
          eo[e] = t;
        } catch (e) {}
    }),
      Wt(pt(Wn), async (e) => {
        if (!eo[e])
          try {
            let t = It(Yn, e);
            if (void 0 === t && (Qn === Yn || void 0 === (t = It(Qn, e)))) return;
            const n = Wn[e];
            eo[e] = !1 === n && "function" == typeof t ? Dt(t, Qn) : t;
          } catch (e) {}
      });
    const to = (e) => {
        let t,
          n = [],
          o = !1;
        e((e) => {
          if (!o) {
            if (n.length) {
              const t = n;
              (n = []), Wt(t, (t) => t(e));
            } else t = e;
            o = !0;
          }
        });
        const r = Lt({ then: (e) => (o ? e(t) : Bt(n, e), r) });
        return r;
      },
      { createEvent: no } = Kn,
      oo = () => rn(Un() + 19831206 * St() + 1, 36),
      ro = async (e) => {
        await null, e();
      },
      so = () => {
        const e = En(Yn.document);
        e && (Ln(e, "nonce"), Rn(e));
      },
      ao = (() => {
        const { console: t, bridges: n } = e,
          o = Lt({});
        let r;
        const s = (e, t, n) => {
            let r,
              s = [],
              i = [];
            const l = () => {
                (s = []), (i = []), u(), (v = null), delete o[t];
              },
              c = (n) => {
                e.send("port.message", Lt({ response_id: t, value: n }));
              },
              d = (e, t = !0) => {
                (r = e), t && c(e);
              },
              u = () => {
                r = void 0;
              },
              g = Lt({
                addListener: (e) => {
                  Bt(s, e);
                }
              }),
              p = Lt({
                addListener: (e) => {
                  Bt(i, e);
                }
              }),
              f = () => {
                e.send("port.message", Lt({ response_id: t, disconnect: !0 })), l();
              };
            let v = Lt(
              n
                ? { postMessage: c, connectMessage: d, stopReconnecting: u, onMessage: g, onDisconnect: p, disconnect: f }
                : { postMessage: c, onMessage: g, onDisconnect: p, disconnect: f }
            );
            return (
              (o[t] = Lt({
                message: (e) => {
                  s && Wt(s, (t) => t(e));
                },
                disconnect: () => {
                  if (r && n) return a(n, t), void d(r);
                  i && Wt(i, (e) => e()), l();
                }
              })),
              v
            );
          },
          a = (e, t) => {
            n.first.send("port.message", Lt({ response_id: t, connect: !0, destination: e }));
          };
        return Lt({
          message: (e, n) => {
            let a;
            if (e.connect) {
              if (!e.destination || !e.response_id) throw "invalid message";
              r && r(e.destination, s(n, e.response_id));
            } else {
              if (!e.response_id) throw "invalid message";
              if (!(a = o[e.response_id])) return void t.warn("ports: unkown id", e.response_id, e);
              e.disconnect ? a.disconnect() : a.message(e.value);
            }
          },
          connect: function (e, t) {
            const o = oo();
            return a(e, o), s(n.first, o, t ? e : void 0);
          },
          onConnect: Lt({
            addListener: (e) => {
              r = e;
            }
          })
        });
      })(),
      { bridges: io } = e,
      lo = Lt({}),
      co = Lt({});
    let uo = !0,
      go = [];
    ro(() => {
      (uo = !1), Wt(go, ({ m: e, i: t }) => io.first.send("console", [e, t])), (go = []);
    }),
      Wt(["debug", "log", "info", "warn", "error"], (e) => {
        Ot(lo, e, (...t) => {
          const n = ((e) => {
            const t = [];
            return (
              Wt(e, (e) => {
                Bt(t, ((e) => kt(e))(e));
              }),
              t
            );
          })(t);
          if (uo) return Bt(go, Lt({ m: e, i: n }));
          io.first.send("console", [e, n]);
        });
      });
    const po = Lt(yt(Yn.console)),
      fo = Lt({});
    Wt(bt(Oe), (e) => {
      const t = Lt(po[e]);
      fo[e] = Lt({ get: "value" in t ? () => t.value : t.get, enumerable: !0, configurable: !1 });
    }),
      mt(co, fo);
    const vo = ["chrome"],
      mo = ["GM.backgroundControl"],
      _o = ["GM_addElement", "GM.addElement", "GM_addStyle", "GM.addStyle"],
      bo = ["GM_cookie", "GM.cookie"],
      Mo = [
        "GM_listValues",
        "GM.listValues",
        "GM_getValue",
        "GM.getValue",
        "GM_addValueChangeListener",
        "GM.addValueChangeListener",
        "GM_removeValueChangeListener",
        "GM.removeValueChangeListener"
      ],
      ho = ["GM_setValue", "GM.setValue", "GM_deleteValue", "GM.deleteValue"],
      yo = ["GM_download", "GM.download"],
      wo = ["GM_getResourceText", "GM.getResourceText", "GM_getResourceURL", "GM.getResourceUrl"],
      Eo = ["GM_getTab", "GM.getTab", "GM_getTabs", "GM.getTabs", "GM_saveTab", "GM.saveTab"],
      So = ["GM_log", "GM.log"],
      Ro = ["GM_notification", "GM.notification"],
      Go = ["GM_openInTab", "GM.openInTab"],
      Lo = ["GM_registerMenuCommand", "GM.registerMenuCommand", "GM_unregisterMenuCommand", "GM.unregisterMenuCommand"],
      Oo = ["GM_setClipboard", "GM.setClipboard"],
      Co = ["GM_xmlhttpRequest", "GM.xmlHttpRequest"],
      Io = ["window.close"],
      To = ["window.focus"],
      xo = ["window.onurlchange"],
      Po = ["GM_webRequest", "GM.webRequest"],
      Do = Lt({
        encode: (e) => De(Ce(e)),
        decode: (e) => Ie(Pe(e))
      }),
      Ao = Lt({
        encode: (e) => {
          let t = "";
          for (let n = 0; n < e.length; n++) t += fn(255 & bn(e, n));
          return ke(t);
        },
        decode: (e) => Ae(e)
      }),
      ko = (e) => {
        const t = new qn(e.length);
        for (let n = 0; n < e.length; n++) t[n] = bn(e, n);
        return t.buffer;
      },
      Uo = (e, t) =>
        to((n) => {
          const o = new eo.FileReader();
          (o.onload = () => {
            n(un(o));
          }),
            (o.onerror = (e) => {
              Zn.warn(`unable to decode data ${e}`), n("");
            }),
            t ? dn(o, e, t) : cn(o, e);
        }),
      { bridges: $o } = e;
    let jo = 0,
      Fo = 0;
    const No = Lt({}),
      Vo = Lt({}),
      qo = function (e, t, n, o) {
        const r = () => {
          No[n] && (Gt(e, this, o), delete No[n]);
        };
        "function" == typeof e && ((No[n] = e), 0 === t ? ro(() => r()) : $o.first.send("setTimeout", Lt({ t: t || 1 }), () => r()));
      },
      Xo = (e) => {
        const t = Vo[e];
        t && (t.disconnect(), delete Vo[e]);
      },
      Bo = (e, t, ...n) => {
        const o = oo();
        return qo(e, t, o, n), o;
      },
      Ho = (e) => {
        ((e) => {
          delete No[e];
        })(e);
      },
      Wo = (e) => Xo(e),
      Ko = (e, t, ...n) => {
        const o = ++Fo;
        return (t = Rt(t, 1)), qo(e, t, o, n), o;
      },
      Jo = (e, t, ...n) => {
        const o = ++jo;
        return (
          (function (e, t, n, o) {
            if ("function" == typeof e) {
              const r = (Vo[n] = ao.connect("setInterval"));
              r.onMessage.addListener(() => {
                Vo[n] && Gt(e, this, o);
              }),
                r.onDisconnect.addListener(() => Xo(n)),
                r.postMessage(Lt({ method: "setInterval", t: t || 1 }));
            }
          })(e, (t = Rt(t, 1)), o, n),
          o
        );
      },
      zo = (t) => {
        const { contextId: n, bridges: o } = e,
          r = Lt({}),
          s = (e, t) => $t(t, (t) => -1 != Ht(e, t)),
          a = (e) =>
            function () {
              const t = (async (e) => e)(Gt(e, this, arguments));
              return Ot(t, "then", (e) => an(t, e)), Ot(t, "catch", (e) => ln(t, e)), t;
            },
          i = (e, t) =>
            function (...n) {
              const o = [];
              if (void 0 !== t) for (let e = 0; e < t; e++) Bt(o, Hn(n, e) || void 0);
              return new eo.Promise((t) => {
                Gt(e, this, Xt(o, [t]));
              });
            },
          l = (e, t) => {
            let n;
            const o = new eo.Promise((o, r) => {
              const s = Lt({}),
                a = t.onload,
                i = t.ontimeout,
                l = t.onerror;
              Wt(pt(t), (e) => {
                s[e] = t[e];
              }),
                (s.onerror = function (e) {
                  l ? (o(e), Gt(l, this, arguments)) : r(e);
                }),
                (s.ontimeout = function (e) {
                  i ? (o(e), Gt(i, this, arguments)) : r(e);
                }),
                (s.onload = function (e) {
                  o(e), a && Gt(a, this, arguments);
                });
              const c = e(s).abort;
              !0 === n ? c() : (n = c);
            });
            return (
              Ot(o, "abort", () => {
                "function" == typeof n ? n() : (n = !0);
              }),
              o
            );
          };
        return Lt({
          of: (e) => {
            const c = e.script,
              d = (() => {
                const e = s(c.grant, Oo),
                  t = (e, t, r) => {
                    o.first.send("setClipboard", Lt({ content: e, info: t, id: n, uuid: c.uuid }), r ? () => r() : null);
                  };
                return Lt({ GM_setClipboard: e ? Lt({ value: t }) : void 0, "GM.setClipboard": e ? Lt({ get: () => i(t, 2) }) : void 0 });
              })(),
              u = (() => {
                let t = [];
                const o = e.storage;
                let r = 0,
                  i = null;
                const l = s(c.grant, Mo),
                  d = s(c.grant, ho),
                  u = (e, t) => {
                    if ("string" != typeof e) return t;
                    {
                      const n = vn(e, 0, 1);
                      switch (((e = vn(e, 1)), n)) {
                        case "b":
                          return "true" === e;
                        case "n":
                          return jn(e);
                        case "x":
                          try {
                            return Do.decode(Ao.decode(e));
                          } catch (t) {
                            return e;
                          }
                        case "o":
                          try {
                            return Ut(e);
                          } catch (e) {
                            Zn.log(`values: parseValueFromStorage: ${e}`);
                          }
                          return t;
                        case "u":
                          return;
                        default:
                          return e;
                      }
                    }
                  },
                  g = (e, n, o, r) => {
                    n != o &&
                      Wt(t, (t) => {
                        if (t && t.key == e && t.cb)
                          try {
                            t.cb(e, u(n), u(o), r);
                          } catch (t) {
                            Zn.warn(`values: change listener of "${e}" failed with: ${t.message}`);
                          }
                      });
                  },
                  p = (e, t) => {
                    i &&
                      i.postMessage(Lt({ method: "saveStorageKey", uuid: c.uuid, key: e, value: o.data[e], removed: t, id: n, ts: o.ts }));
                  };
                (l || d) &&
                  ((i = ao.connect("values", !0)),
                  i.onDisconnect.addListener(() => {
                    Zn.warn("values: port disconnected"), (i = null);
                  })),
                  i &&
                    l &&
                    (i.onMessage.addListener((e) => {
                      const { storage: t, removed: n } = e;
                      if (!t) return;
                      const r = t,
                        s = pt(r);
                      n && Bt(s, n),
                        Wt(s, (e) => {
                          const t = o.data[e],
                            n = r[e];
                          void 0 === n ? delete o.data[e] : (o.data[e] = n), g(e, t, n, !0);
                        });
                    }),
                    i.connectMessage(Lt({ method: "addStorageListener", uuid: c.uuid, id: n })));
                const f = (e, t) => u(o.data[e], t),
                  v = () => pt(o.data),
                  m = (e, n) => {
                    const o = ++r,
                      s = Lt({ id: o, key: e, cb: n });
                    return Bt(t, s), o;
                  },
                  _ = (e) => {
                    t = Nt(t, (t) => t.id !== e);
                  },
                  b = (e, t) => {
                    const n = o.data[e];
                    (o.ts = Un()),
                      (o.data[e] = ((e) => {
                        const t = typeof e;
                        let n,
                          o = vn(t, 0, 1);
                        switch (t) {
                          case "object":
                            try {
                              n = o + kt(e);
                            } catch (e) {
                              return void Zn.log(e);
                            }
                            break;
                          case "function":
                          case "symbol":
                          case "bigint":
                            (o = "u"), (n = o + void 0);
                            break;
                          case "string":
                          case "number":
                          case "undefined":
                          case "boolean":
                            n = o + e;
                            break;
                          default:
                            n = t;
                        }
                        return n;
                      })(t)),
                      p(e),
                      g(e, n, o.data[e], !1);
                  },
                  M = (e) => {
                    const t = o.data[e];
                    (o.ts = Un()), delete o.data[e], p(e, !0), g(e, t, o.data[e], !1);
                  };
                return Lt({
                  GM_getValue: l ? Lt({ value: f }) : void 0,
                  "GM.getValue": l ? Lt({ get: () => a(f) }) : void 0,
                  GM_listValues: l ? Lt({ value: v }) : void 0,
                  "GM.listValues": l ? Lt({ get: () => a(v) }) : void 0,
                  GM_addValueChangeListener: l ? Lt({ value: m }) : void 0,
                  "GM.addValueChangeListener": l ? Lt({ get: () => a(m) }) : void 0,
                  GM_removeValueChangeListener: l ? Lt({ value: _ }) : void 0,
                  "GM.removeValueChangeListener": l ? Lt({ get: () => a(_) }) : void 0,
                  GM_setValue: d ? Lt({ value: b }) : void 0,
                  "GM.setValue": d ? Lt({ get: () => a(b) }) : void 0,
                  GM_deleteValue: d ? Lt({ value: M }) : void 0,
                  "GM.deleteValue": d ? Lt({ get: () => a(M) }) : void 0
                });
              })(),
              g = (() => {
                const e = s(c.grant, xo),
                  t = (() => {
                    let e = [],
                      t = null;
                    return Lt({
                      register: (o, r) => {
                        Bt(e, o),
                          t ||
                            ((t = ao.connect("onurlchange", !0)),
                            t.onMessage.addListener(({ url: t }) => {
                              if (!t) return;
                              const n = Lt({ url: t });
                              Wt(e, (e) => {
                                Gt(e, r, [n]);
                              });
                            }),
                            t.connectMessage(Lt({ method: "observeUrlChanges", uuid: c.uuid, id: n })));
                      },
                      unregister: (n) => {
                        let o;
                        n && (o = Ht(e, n)) > -1 && (e = jt(e, o, 1).result), t && 0 === e.length && (t.disconnect(), (t = null));
                      }
                    });
                  })();
                return Lt({ "window.onurlchange": e ? Lt({ value: t }) : void 0 });
              })(),
              p = (() => {
                const e = s(c.grant, wo),
                  t = (e) => {
                    for (let t = 0; t < c.resources.length; t++) {
                      const n = c.resources[t];
                      if (n.name == e) {
                        if (n.error) Zn.warn("@resource: " + n.error);
                        else
                          try {
                            if ("string" == typeof n.content) return Do.decode(n.content);
                          } catch (e) {}
                        return "";
                      }
                    }
                    return null;
                  },
                  n = (e) => {
                    for (let t = 0; t < c.resources.length; t++) {
                      const n = c.resources[t];
                      if (n.name == e) {
                        if (n.error) Zn.warn("@resource: " + n.error);
                        else if ("string" == typeof n.content) {
                          try {
                            return `data:${n.meta || "application/octet-stream"};base64,${Ao.encode(n.content)}`;
                          } catch (e) {}
                          return n.url;
                        }
                        return "";
                      }
                    }
                    return null;
                  };
                return Lt({
                  GM_getResourceText: e ? Lt({ value: t }) : void 0,
                  "GM.getResourceText": e ? Lt({ get: () => a(t) }) : void 0,
                  GM_getResourceURL: e ? Lt({ value: n }) : void 0,
                  "GM.getResourceUrl": e ? Lt({ get: () => a(n) }) : void 0
                });
              })(),
              f = (() => {
                const e = s(c.grant, Eo),
                  t = (e, t) => {
                    o.first.send("tabs", Lt({ action: "set", uuid: c.uuid, tab: e }), t ? () => t() : null);
                  },
                  n = (e) => {
                    o.first.send(
                      "tabs",
                      Lt({ action: "get", uuid: c.uuid }),
                      e
                        ? (t) => {
                            e(t || Lt({}));
                          }
                        : null
                    );
                  },
                  r = (e) => {
                    o.first.send(
                      "tabs",
                      Lt({ action: "list", uuid: c.uuid }),
                      e
                        ? (t) => {
                            e(t || Lt({}));
                          }
                        : null
                    );
                  };
                return Lt({
                  GM_saveTab: e ? Lt({ value: t }) : void 0,
                  "GM.saveTab": e
                    ? Lt({
                        get: () => i(t, 1)
                      })
                    : void 0,
                  GM_getTab: e ? Lt({ value: n }) : void 0,
                  "GM.getTab": e ? Lt({ get: () => i(n) }) : void 0,
                  GM_getTabs: e ? Lt({ value: r }) : void 0,
                  "GM.getTabs": e ? Lt({ get: () => i(r) }) : void 0
                });
              })(),
              v = (() => {
                const e = s(c.grant, Co),
                  o = (e) => {
                    const o = Zt(e);
                    let s = !1,
                      a = () => {
                        s = !0;
                      };
                    const i = (e, t) => {
                        (t = t || Lt({})),
                          e &&
                            Bo(() => {
                              vt(t, r), Gt(e, t, [t]);
                            }, 1);
                      },
                      l = o.url;
                    "object" == typeof l && l.href && (o.url = l.href);
                    const d = (e, t) => {
                        const n = en(e);
                        if ("Blob" === n || "File" === n) {
                          const o = e;
                          Uo(o).then((e) => {
                            t(Lt({ type: n, value: e, meta: o.type, name: o.name, lastModified: o.lastModified }));
                          });
                        } else if ("FormData" === n) {
                          const n = e,
                            o = n.keys();
                          let r;
                          const s = Lt({}),
                            a = [];
                          for (; !(r = o.next()).done; ) Bt(a, r.value);
                          const i = () => {
                            if (a.length) {
                              const e = Ft(a);
                              let t = n.getAll(e);
                              "[]" !== vn(e, -2) && (t = Hn(t, 0)),
                                d(t, (t) => {
                                  (s[e] = t), i();
                                });
                            } else t(Lt({ type: "FormData", value: s }));
                          };
                          i();
                        } else if ("URLSearchParams" === n) t(Lt({ type: "URLSearchParams", value: Tn(e) }));
                        else if ("Array" === n || "Object" === n) {
                          const o = e;
                          let r,
                            s,
                            a = 0,
                            i = 0;
                          if ("Object" === n) {
                            const e = pt(o);
                            (s = (t) => (t < e.length ? e[t] : null)), (r = Lt({}));
                          } else (s = (e) => (e < o.length ? e : null)), (r = []);
                          const l = () => {
                            const e = s(a);
                            null === e
                              ? t(Lt({ type: n, value: r }))
                              : d(o[e], (t) => {
                                  (r[e] = t), a++, i++ < 1024 ? l() : ((i = 0), Bo(l, 1));
                                });
                          };
                          l();
                        } else t(Lt({ value: e }));
                      },
                      u = (e, t, n, o, r) => {
                        let s;
                        if (n) "stream" == o && (s = n);
                        else if ("arraybuffer" == o) s = t || ko(e || "");
                        else if ("blob" == o) s = new eo.Blob([t || ko(e || "")], Lt({ type: r }));
                        else if ("json" == o) s = Ut(e || "");
                        else if ("document" == o) {
                          const t = new eo.DOMParser(),
                            n = Hn(Jt(r || "text/xml", ";"), 0);
                          try {
                            s = wn(t, e || "", n);
                          } catch (e) {
                            s = null;
                          }
                        } else
                          s =
                            e ||
                            (t
                              ? ((e) => {
                                  let t = "";
                                  const n = new qn(e);
                                  for (let e = 0; e < n.length; e += 32687) t += Gt(fn, null, n.subarray(e, e + 32687));
                                  return t;
                                })(t)
                              : "");
                        return s;
                      };
                    return (
                      ((e) => {
                        if (o.url) {
                          const t = vn(o.url, 0, 5);
                          if (-1 != Ht(["data:", "blob:"], t)) return e();
                        }
                        if (!o.data) return e();
                        d(o.data, (t) => {
                          o.binary && (t.type = "Blob"), (o.data = t), (o.data_type = "typified"), e();
                        });
                      })(() => {
                        if (s) return (s = !1), void i(o.onabort);
                        let e,
                          r,
                          l,
                          d = ao.connect("xhr"),
                          g = [],
                          p = !1;
                        const {
                            method: f,
                            url: v,
                            redirect: m,
                            headers: _,
                            cookie: b,
                            binary: M,
                            nocache: h,
                            revalidate: y,
                            timeout: w,
                            context: E,
                            responseType: S,
                            overrideMimeType: R,
                            anonymous: G,
                            fetch: L,
                            user: O,
                            password: C,
                            data: I,
                            data_type: T
                          } = o,
                          x = Lt({
                            method: f,
                            url: v,
                            redirect: m,
                            headers: _,
                            cookie: b,
                            binary: M,
                            nocache: h,
                            revalidate: y,
                            timeout: w,
                            responseType: S,
                            overrideMimeType: R,
                            anonymous: G,
                            fetch: L,
                            user: O,
                            password: C,
                            data: I,
                            data_type: T
                          });
                        if (x.headers) {
                          const e = x.headers;
                          Wt(pt(e), (t) => {
                            "cookie" === Mn(t) && ((x.cookie = `${e[t]}`), delete e[t]);
                          });
                        }
                        let P, D, A, k;
                        d.postMessage(
                          Lt({
                            method: "xhr",
                            details: x,
                            callbacks: Lt({
                              onloadstart: !!o.onloadstart,
                              onload: !!o.onload,
                              ondone: !!o.onloadend,
                              onreadystatechange: !!o.onreadystatechange,
                              onerror: !0,
                              onabort: !!o.onabort,
                              ontimeout: !!o.ontimeout,
                              onprogress: !!o.onprogress,
                              onuploadprogress: !(!o.upload || !o.upload.onprogress),
                              onpartial: !0
                            }),
                            id: n,
                            location: eo.location.href,
                            uuid: c.uuid,
                            no_blob: "js" == t.sandboxMode
                          })
                        );
                        const U = S ? Mn(S) : "";
                        let $,
                          j = 0,
                          F = 0;
                        const N = async (t) => {
                            if (t && (l || void 0 !== e || void 0 !== r)) {
                              if (
                                (R
                                  ? (k = R)
                                  : t &&
                                    (k = ((e) => {
                                      const t = Lt({});
                                      return (
                                        e &&
                                          Wt(Jt(e, "\n"), (e) => {
                                            const n = Jt(e, ":");
                                            if (n.length < 2) return;
                                            const o = Hn(n, 0);
                                            if (!o) return;
                                            const r = qt(Vt(n, 1), ":");
                                            t[Mn(_n(o))] = _n(r || "");
                                          }),
                                        t
                                      );
                                    })(t.responseHeaders)["content-type"]),
                                (P = e),
                                l)
                              )
                                A = l.stream;
                              else if (r) {
                                const e = r;
                                if (((D = e.buffer), -1 == Ht(["blob", "arraybuffer"], U) && !P)) {
                                  let t;
                                  $t(
                                    [k, e.type],
                                    (e) =>
                                      (t = ((e, t, n, o) => {
                                        const r = mn(e, "charset=");
                                        if (-1 == r) return;
                                        const s = vn(e, r + 8),
                                          a = mn(s, ";");
                                        return -1 == a ? (o && o.optionalEnd ? s : void 0) : vn(e, r + 8, a);
                                      })(Mn(e || ""), 0, 0, Lt({ optionalEnd: !0 })))
                                  );
                                  const n = new Bn([D]);
                                  ($ = Uo(n, t)), (P = await $);
                                }
                                $ = void 0;
                              } else $ && (await $);
                              e = r = void 0;
                            }
                            if (P || A || D) {
                              (t.responseType = S), Wt(["response_data"], (e) => delete t[e]);
                              const e = Lt({
                                response: () => u(P, D, A, U, k || "binary/octet-stream"),
                                responseText: () => u(P, D, A, "text", k),
                                responseXML: () => u(P, D, A, "document", "text/xml")
                              });
                              Wt(pt(e), (n) => {
                                _t(
                                  t,
                                  n,
                                  Lt({
                                    get() {
                                      try {
                                        return e[n]();
                                      } catch (e) {
                                        Zn.warn(`${f}:`, e);
                                      }
                                    }
                                  })
                                );
                              });
                            }
                          },
                          V = [],
                          q = async (e) => {
                            e && Bt(V, e);
                            {
                              const e = Ft(V);
                              e && e();
                            }
                          };
                        "stream" === U &&
                          q(async () => {
                            l = await to((e) => {
                              const t = new eo.ReadableStream(
                                Lt({
                                  start: (n) => {
                                    Bo(() => e(Lt({ stream: t, ctrl: n })), 0);
                                  },
                                  cancel: () => {
                                    l && (l.canceled || a(), (l.canceled = !0));
                                  }
                                })
                              );
                            });
                          }),
                          d.onMessage.addListener((t) =>
                            q(() =>
                              (async (t) => {
                                if (t.onpartial) {
                                  const n = t.data,
                                    o = n,
                                    s = o.partial,
                                    a = n.nada;
                                  if (l) {
                                    if (l.canceled) return;
                                    const e = gn || ((e, t) => e.enqueue(t));
                                    if (void 0 !== s) e(l.ctrl, s);
                                    else if (void 0 !== a) {
                                      const t = new qn(a.buffer);
                                      e(l.ctrl, t);
                                    } else Zn.error(`${f}:`, "data message without data?!");
                                  } else {
                                    let t;
                                    s && Bt(g, s),
                                      a && (t = a),
                                      (void 0 !== o.index && o.index !== o.length - 1) ||
                                        (g.length && ((e = qt(g, "")), (g = [])), (r = t));
                                  }
                                } else {
                                  const e = t.data;
                                  if (((j = e.readyState || j), (F = e.status || F), E && (e.context = E), t.onload))
                                    await N(e), i(o.onreadystatechange, e), i(o.onload, e);
                                  else if (t.onreadystatechange) await N(e), 4 != e.readyState && i(o.onreadystatechange, e);
                                  else if (t.onerror) t.exception && Zn.error(t.exception), i(o.onerror, e);
                                  else if (t.onabort) i(o.onabort, e);
                                  else if (t.ondone)
                                    (p = !0), l && !l.canceled && (pn || ((e) => e.close()))(l.ctrl), await N(e), i(o.onloadend, e);
                                  else if (t.onloadstart) l && (await N(e)), i(o.onloadstart, e);
                                  else if (t.onuploadprogress) o.upload && i(o.upload.onprogress, e);
                                  else {
                                    const n =
                                      Hn(
                                        Nt(["onprogress", "ontimeout"], (e) => !!t[e]),
                                        0
                                      ) || "onerror";
                                    i(o[n], e);
                                  }
                                }
                              })(t)
                            )
                          ),
                          d.onDisconnect.addListener(() => {
                            p || i(o.onerror, Lt({ readyState: j, status: F, error: "background shutdown" })), (d = null);
                          }),
                          (a = () => {
                            d && d.postMessage(Lt({ cancel: !0 }));
                          });
                      }),
                      Lt({
                        abort: () => {
                          a();
                        }
                      })
                    );
                  },
                  r = (() => {
                    const e = Lt({ DONE: xn, HEADERS_RECEIVED: Pn, LOADING: Dn, OPENED: An, UNSENT: kn });
                    return (
                      Wt(["text", "arraybuffer", "blob", "document", "json", "stream"], (t) => {
                        e[`RESPONSE_TYPE_${hn(t)}`] = t;
                      }),
                      e
                    );
                  })();
                return (
                  Wt(pt(r), (e) => Ot(o, e, r[e])),
                  Lt({
                    GM_xmlhttpRequest: e ? Lt({ value: o }) : void 0,
                    "GM.xmlHttpRequest": e
                      ? Lt({
                          get: () => {
                            const e = (e) => l(o, e);
                            return Wt(pt(r), (t) => Ot(e, t, r[t])), e;
                          }
                        })
                      : void 0
                  })
                );
              })(),
              m = (() => {
                let n;
                const o = () => {
                  if (!n) {
                    const { script: o } = e,
                      {
                        antifeatures: r,
                        author: s,
                        blockers: a,
                        copyright: i,
                        deleted: l,
                        description_i18n: c,
                        description: d,
                        downloadURL: u,
                        fileURL: g,
                        grant: p,
                        header: f,
                        homepage: v,
                        icon: m,
                        icon64: _,
                        lastModified: b,
                        name_i18n: M,
                        name: h,
                        namespace: y,
                        position: w,
                        resources: E,
                        supportURL: S,
                        system: R,
                        updateURL: G,
                        version: L,
                        webRequest: O,
                        options: {
                          override: { orig_connects: C, orig_excludes: I, orig_includes: T, orig_matches: x },
                          run_at: P,
                          unwrap: D
                        }
                      } = o,
                      {
                        downloadMode: A,
                        inIncognitoContext: k,
                        relaxedCsp: U,
                        isFirstPartyIsolation: $,
                        sandboxMode: j,
                        userAgent: F,
                        version: N
                      } = t,
                      V = G || g,
                      q = Lt({
                        antifeatures: r,
                        author: s,
                        blockers: a,
                        connects: C,
                        copyright: i,
                        deleted: l,
                        description_i18n: c,
                        description: d,
                        downloadURL: u,
                        excludes: I,
                        fileURL: g,
                        grant: p,
                        header: f,
                        homepage: v,
                        icon: m,
                        icon64: _,
                        includes: T,
                        lastModified: b,
                        matches: x,
                        name_i18n: M,
                        name: h,
                        namespace: y,
                        options: o.options,
                        position: w,
                        resources: E,
                        "run-at": P,
                        supportURL: S,
                        system: R,
                        unwrap: D,
                        updateURL: G,
                        version: L,
                        webRequest: O
                      }),
                      X = Lt({
                        downloadMode: A,
                        isFirstPartyIsolation: $,
                        isIncognito: k,
                        relaxedCsp: U,
                        sandboxMode: j,
                        script: q,
                        scriptHandler: "Tampermonkey",
                        scriptMetaStr: o.header,
                        scriptUpdateURL: V,
                        scriptWillUpdate: !!V,
                        userAgentData: F,
                        version: N
                      });
                    n = X;
                  }
                  return Ut(kt(n));
                };
                return Lt({ GM_info: Lt({ get: o }), "GM.info": Lt({ get: o }) });
              })(),
              _ = (() => {
                const e = s(c.grant, Po);
                let t = null;
                const n = (e, n) => {
                  const o = () => {
                    t == r && (t = null), (r = null);
                  };
                  t && t.disconnect();
                  let r = (t = ao.connect("webRequest", !0));
                  return (
                    n &&
                      r.onMessage.addListener((e) => {
                        n(e.type, e.message || "ok", e.details);
                      }),
                    r.onDisconnect.addListener(o),
                    r.connectMessage(Lt({ rules: e, uuid: c.uuid })),
                    Lt({
                      abort: () => {
                        r && r.disconnect(), o();
                      }
                    })
                  );
                };
                return Lt({ GM_webRequest: e ? Lt({ value: n }) : void 0, "GM.webRequest": e ? Lt({ get: () => a(n) }) : void 0 });
              })(),
              b = (() => {
                const e = s(c.grant, Lo);
                let t = 0;
                const n = Lt({}),
                  o = (e, o, s) => {
                    if ("string" != typeof e) throw "invalid name";
                    const a = ao.connect("registerMenuCommand", !0),
                      { accessKey: i, autoClose: l, title: d, id: u } = "string" == typeof s ? Lt({ accessKey: s }) : s || Lt({}),
                      g = void 0 !== u ? u : ++t;
                    a.onMessage.addListener((e) => {
                      if ("run" === e.method) {
                        const t = e.event,
                          n = t ? (t.keyCode ? new Nn("keypress", t) : new Vn("click", e.event)) : void 0;
                        Bo(() => o(n), 1);
                      }
                    }),
                      a.onDisconnect.addListener(() => {
                        r(g);
                      }),
                      a.connectMessage(Lt({ name: e, uuid: c.uuid, accessKey: i, autoClose: l, title: d, id: `${g}` }));
                    const p = n[g];
                    return p && p(), (n[g] = a.disconnect), g;
                  },
                  r = (e) => {
                    let t;
                    (t = n[e]) && (t(), delete n[e]);
                  };
                return Lt({
                  GM_registerMenuCommand: e ? Lt({ value: o }) : void 0,
                  "GM.registerMenuCommand": e ? Lt({ get: () => a(o) }) : void 0,
                  GM_unregisterMenuCommand: e ? Lt({ value: r }) : void 0,
                  "GM.unregisterMenuCommand": e ? Lt({ get: () => a(r) }) : void 0
                });
              })(),
              M = (() => {
                const e = s(c.grant, Ro),
                  t = (e, t, n, o) => {
                    let r,
                      s,
                      a = null;
                    const i = (e) => qt([e ? `tag-${e}` : oo(), c.uuid], "#");
                    if ("object" == typeof e) {
                      const n = e,
                        { timeout: l, text: d, image: u, title: g, highlight: p, silent: f, url: v, tag: m } = n;
                      (s = i(m)),
                        (r = Lt({
                          id: s,
                          timeout: l,
                          text: d,
                          image: u || c.icon64 || c.icon || void 0,
                          title: g || c.name,
                          highlight: p,
                          silent: f,
                          url: v,
                          tag: m
                        })),
                        (a = n.ondone),
                        (o = n.onclick),
                        "function" == typeof t && (a = t);
                    } else
                      (s = i()),
                        (r = Lt({ id: s, text: e, title: "string" == typeof t ? t : c.name, image: n || c.icon64 || c.icon || void 0 }));
                    (r.onclick = o),
                      (r.ondone = a || void 0),
                      ((e, t) => {
                        const {
                          text: n,
                          title: o,
                          tag: r,
                          url: s,
                          image: a,
                          highlight: i,
                          silent: l,
                          timeout: d,
                          onclick: u,
                          ondone: g
                        } = Zt(t);
                        if (n || i) {
                          const t = "notification",
                            p = ao.connect(t, !0);
                          p.onMessage.addListener((e) => {
                            const { clicked: t } = e;
                            let c = !1;
                            const f = Lt({
                              text: n,
                              title: o,
                              tag: r,
                              url: s,
                              image: a,
                              highlight: i,
                              silent: l,
                              timeout: d,
                              preventDefault: () => {
                                c = !0;
                              }
                            });
                            u && t && (u(f), p.postMessage(Lt({ canceled: c }))), g && g(!0 === t, f), p.disconnect();
                          }),
                            p.connectMessage(
                              Lt({
                                method: "notification",
                                id: e,
                                uuid: c.uuid,
                                text: n,
                                title: o,
                                tag: r,
                                url: s,
                                image: a,
                                highlight: i,
                                silent: l,
                                timeout: d
                              })
                            );
                        } else Zn.warn("GM_notification: neither a message text nor highlight options were given!");
                      })(s, r);
                  };
                return Lt({
                  GM_notification: e ? Lt({ value: t }) : void 0,
                  "GM.notification": e
                    ? Lt({
                        get: () => (e, n, o, r) => {
                          let s;
                          return (
                            (s = "object" == typeof e ? e : Lt({ text: e, title: n, image: o, onclick: r })),
                            new eo.Promise((e) => {
                              const n = Lt({});
                              Wt(pt(s), (e) => {
                                n[e] = s[e];
                              });
                              const o = n.ondone;
                              (n.ondone = function (t, n) {
                                o && Gt(o, this, [t, n]), Gt(e, this, [t]);
                              }),
                                t(n);
                            })
                          );
                        }
                      })
                    : void 0
                });
              })(),
              h = (() => {
                const e = s(c.grant, bo),
                  t = (e, t) => Lt({ action: e, uuid: c.uuid, location: eo.location.href, details: t }),
                  n = Lt({
                    set: (e, n) => {
                      o.first.send(
                        "cookie",
                        t("set", e),
                        n
                          ? (e) => {
                              n(e.error);
                            }
                          : null
                      );
                    },
                    delete: (e, n) => {
                      o.first.send(
                        "cookie",
                        t("delete", e),
                        n
                          ? (e) => {
                              n(e.error);
                            }
                          : null
                      );
                    },
                    list: (e, n) => {
                      o.first.send(
                        "cookie",
                        t("list", e),
                        n
                          ? (e) => {
                              n(e.cookies, e.error);
                            }
                          : null
                      );
                    }
                  });
                return Lt({
                  GM_cookie: e
                    ? Lt({
                        get: () => {
                          const e = (e, t, o) => (n[e] || (() => {}))(t, o);
                          return (
                            Wt(pt(n), (t) => {
                              Ot(e, t, n[t]);
                            }),
                            e
                          );
                        }
                      })
                    : void 0,
                  "GM.cookie": e
                    ? Lt({
                        get: () => {
                          const e = Lt({});
                          return (
                            Wt(pt(n), (t) => {
                              e[t] = (e) =>
                                ((e, t) =>
                                  new eo.Promise((o, r) => {
                                    if ("list" == e) {
                                      const s = t;
                                      n[e](s, (e, t) => {
                                        t ? r(t) : o(e);
                                      });
                                    } else if ("set" == e) {
                                      const s = t;
                                      n[e](s, (e) => {
                                        e ? r(e) : o(void 0);
                                      });
                                    } else {
                                      const s = t;
                                      n[e](s, (e) => {
                                        e ? r(e) : o(void 0);
                                      });
                                    }
                                  }))(t, e);
                            }),
                            e
                          );
                        }
                      })
                    : void 0
                });
              })(),
              y = (() => {
                const e = s(c.grant, yo),
                  t = (e, t) =>
                    "object" == typeof e
                      ? e
                      : Lt({
                          url: e,
                          name: t,
                          headers: void 0,
                          saveAs: void 0,
                          conflictAction: void 0,
                          onprogress: void 0,
                          onload: void 0,
                          ondone: void 0,
                          ontimeout: void 0,
                          onerror: void 0
                        }),
                  n = (e, n) => {
                    const o = t(e, n),
                      r = (e, t) => {
                        (t = t || Lt({})),
                          e &&
                            Bo(() => {
                              Gt(e, t, [t]);
                            }, 1);
                      },
                      { url: s, name: a, headers: i, saveAs: l, conflictAction: d } = o;
                    let u,
                      g = ao.connect("download", !0);
                    const p = () => {
                      g && g.stopReconnecting();
                    };
                    g.onMessage.addListener((e) => {
                      g && void 0 === u && ((u = e.id), g.connectMessage(Lt({ method: "download", uuid: c.uuid, id: u }), !1));
                      try {
                        e.load
                          ? (o.onload && r(o.onload, e.data), p())
                          : e.progress
                          ? o.onprogress && r(o.onprogress, e.data)
                          : e.timeout
                          ? (o.ontimeout && r(o.ontimeout, e.data), p())
                          : (o.onerror && r(o.onerror, e.data), p());
                      } catch (e) {
                        Zn.log("env: Error: TM_download - ", e, o);
                      }
                    }),
                      g.onDisconnect.addListener(() => (g = null));
                    const f = Lt({
                      details: Lt({ url: s, name: a || "File.download", headers: i, conflictAction: d, saveAs: l }),
                      uuid: c.uuid
                    });
                    return (
                      g.postMessage(f),
                      Lt({
                        abort: () => {
                          g && g.postMessage(Lt({ uuid: c.uuid, cancel: !0 }));
                        }
                      })
                    );
                  };
                return Lt({
                  GM_download: e ? Lt({ value: n }) : void 0,
                  "GM.download": e ? Lt({ get: () => (e, o) => l(n, t(e, o)) }) : void 0
                });
              })(),
              w = (() => {
                const e = s(c.grant, Go),
                  t = (e, t) => {
                    let n,
                      o,
                      r = !1,
                      s = null;
                    const a = (() => {
                      const e = [];
                      return Lt({
                        run: (t) => {
                          if ((t && Bt(e, t), n)) for (; e.length; ) Ft(e)();
                        }
                      });
                    })();
                    let i = ao.connect("openInTab", !0);
                    const l = () => {
                      i && i.postMessage(Lt({ close: !0 }));
                    };
                    i.onMessage.addListener((e) => {
                      e.tabId
                        ? r
                          ? l()
                          : (i && void 0 === n && i.connectMessage(Lt({ method: "openTab", uuid: c.uuid, tabId: e.tabId }), !1),
                            (n = e.tabId),
                            a.run())
                        : e.name
                        ? (o = e.name)
                        : e.closed && ((r = !0), s && (s(), (s = null)), i && i.stopReconnecting());
                    }),
                      i.onDisconnect.addListener(() => (i = null)),
                      i.postMessage(Lt({ method: "openTab", url: e, location: eo.location.href, options: t, uuid: c.uuid }));
                    const d = Lt({});
                    return (
                      mt(
                        d,
                        Lt({
                          close: Lt({
                            value: () => {
                              r ? Zn.warn("env: attempt to close already closed tab!") : l();
                            }
                          }),
                          focus: Lt({
                            value: () => {
                              i && i.postMessage(Lt({ focus: !0 }));
                            }
                          }),
                          closed: Lt({ get: () => r }),
                          onclose: Lt({
                            get: () => s,
                            set: (e) => {
                              s = e;
                            }
                          }),
                          name: Lt({
                            get: () => o,
                            set: (e) => {
                              a.run(() => {
                                i && i.postMessage(Lt({ name: e }));
                              });
                            }
                          })
                        })
                      ),
                      d
                    );
                  };
                return Lt({ GM_openInTab: e ? Lt({ value: t }) : void 0, "GM.openInTab": e ? Lt({ get: () => a(t) }) : void 0 });
              })(),
              E = (() => {
                const e = s(c.grant, Io);
                return Lt({
                  "window.close": e
                    ? Lt({
                        value: (e) => {
                          o.first.send("closeTab", Lt({ uuid: c.uuid }), e ? () => e() : null);
                        }
                      })
                    : void 0
                });
              })(),
              S = (() => {
                const e = s(c.grant, To);
                return Lt({
                  "window.focus": e
                    ? Lt({
                        value: (e) => {
                          o.first.send("focusTab", Lt({ uuid: c.uuid }), e ? () => e() : null);
                        }
                      })
                    : void 0
                });
              })(),
              R = (() => {
                const e = s(c.grant, So),
                  t = function (...e) {
                    Gt(Zn.log, this, e);
                  };
                return Lt({ GM_log: e ? Lt({ value: t }) : void 0, "GM.log": e ? Lt({ get: () => a(t) }) : void 0 });
              })(),
              G = ({ root: e, tag: t, properties: n, cb: r }) => {
                const s = oo(),
                  a = Lt({ tag: t, properties: n, id: s, uuid: c.uuid });
                o.first.send("addElement", a, e, r ? () => r() : null);
                const i = Kn.getElementById(s),
                  l = n ? n.id : void 0;
                return void 0 !== l && Gn(i, "id", l), i;
              },
              L = (() => {
                const e = s(c.grant, _o),
                  t = (e, t) => G(Lt({ root: void 0, tag: "style", properties: Lt({ textContent: e }), cb: t }));
                return Lt({ GM_addStyle: e ? Lt({ value: t }) : void 0, "GM.addStyle": e ? Lt({ get: () => a(t) }) : void 0 });
              })(),
              O = (() => {
                const e = s(c.grant, _o),
                  t = (e, t, n, o) => {
                    let r, s, a, i;
                    return (
                      "string" == typeof e ? ((s = e), (a = t), (i = n)) : ((r = e), (s = t), (a = n), (i = o)),
                      a && (a = Lt(a)),
                      G(Lt({ root: r, tag: s, properties: a, cb: i }))
                    );
                  };
                return Lt({ GM_addElement: e ? Lt({ value: t }) : void 0, "GM.addElement": e ? Lt({ get: () => a(t) }) : void 0 });
              })(),
              C = (() => {
                const e = s(c.grant, mo),
                  t = (e, t) => {
                    o.first.send(
                      "backgroundControl",
                      Lt({ uuid: c.uuid, restart: "restart" === e.action || void 0 }),
                      t ? ({ error: e }) => t(e) : null
                    );
                  };
                return Lt({ "GM.backgroundControl": e ? Lt({ get: () => a(t) }) : void 0 });
              })(),
              I = Lt({ ...O, ...L, ...E, ...h, ...y, ...S, ...m, ...R, ...b, ...M, ...w, ...p, ...d, ...f, ...g, ...u, ..._, ...v, ...C });
            return (r[e.script.uuid] = r[e.script.uuid] || I), r[e.script.uuid];
          }
        });
      },
      Yo = (e, t, n, o, r, s) => {
        const a = (e, t, n, o, r) => {
          const a = t[n],
            i = typeof a;
          return (
            o && "string" === i
              ? (t[n] = () => s(a, r))
              : r &&
                "function" === i &&
                (t[n] = function () {
                  return Gt(a, r, arguments);
                }),
            Gt(e, Yn, t)
          );
        };
        let i = !0;
        ro(() => (i = !1));
        const l = Lt({}),
          c = (e) => !!("object" == typeof e && null !== e ? e.capture : e),
          d = (e, o, r) => {
            let d, g;
            null === o ||
              ("object" == typeof o
                ? ((d = async (e) => {
                    const t = o.handleEvent;
                    "function" == typeof t && Gt(t, o, [e]);
                  }),
                  (g = o))
                : ((d = o), (g = void 0)));
            const f = c(r);
            let v, m;
            if (void 0 !== d) {
              if (i && ((v = "DOMContentLoaded" == e) || "load" == e)) {
                const n = Sn(Yn.document);
                if ((v && ("complete" == n || "interactive" === n) && "document-idle" != t) || (!v && "complete" == n))
                  return void (async (e, t, n, o) => {
                    const r = Lt({
                      attrName: "null",
                      newValue: "null",
                      prevValue: "null",
                      eventPhase: on,
                      attrChange: nn,
                      target: Yn.document,
                      relatedNode: Yn.document,
                      srcElement: Yn.document
                    });
                    await null,
                      n || (await null),
                      "load" === e && (await null),
                      ((e, t, n, o) => {
                        const r = Lt({
                            attrChange: 0,
                            attrName: null,
                            bubbles: !0,
                            cancelBubble: !1,
                            cancelable: !1,
                            clipboardData: void 0,
                            currentTarget: null,
                            defaultPrevented: !1,
                            eventPhase: 0,
                            newValue: null,
                            prevValue: null,
                            relatedNode: null,
                            returnValue: !0,
                            srcElement: null,
                            target: null,
                            timeStamp: Un()
                          }),
                          a = "string" == typeof n ? () => s(n, o) : n,
                          i = new Event(e);
                        Wt(pt(r), (e) => {
                          Ot(i, e, r[e]);
                        }),
                          Wt(pt(t), (e) => {
                            Ot(i, e, t[e]);
                          }),
                          Gt(a, o, [i]);
                      })(e, r, t, o);
                  })(e, d, f, p);
              }
              const c = "urlchange" == e ? n["window.onurlchange"] : void 0;
              if ("string" != typeof d) {
                const t = `${e}-${f}`;
                l[t] = l[t] || [];
                const n = function (...t) {
                    return "object" == typeof r && r.once && u(e, o, r), Gt(d, this === Yn || this === Qn ? p : this, t);
                  },
                  s = Lt({ listener: d, filter: n, object: g });
                if ((Bt(l[t], s), (m = n), c)) return void c.value.register(n);
              } else {
                if (c) return void Zn.warn("env: urlchange listener must be a function!");
                m = d;
              }
              return a(eo.addEventListener, [e, m, r], 1, !0);
            }
          },
          u = (e, t, o) => {
            let r, s;
            null === t || ("object" == typeof t ? (s = t) : (r = t));
            const i = "urlchange" == e ? n["window.onurlchange"] : void 0,
              d = c(o),
              u = `${e}-${d}`,
              g = l[u] && Nt(l[u], (e) => (e.object ? e.object === s : e.listener === r));
            if (g && g.length) {
              let t;
              if (
                (Wt(g, (n) => {
                  if (i) i.value.unregister(n.filter);
                  else
                    try {
                      a(eo.removeEventListener, [e, n.filter, o], 1, !0);
                    } catch (n) {
                      t = n;
                    }
                  const r = Ht(l[u], n);
                  l[u] = jt(l[u], r, 1).result;
                }),
                l[u].length || delete l[u],
                t)
              )
                throw t;
            } else if (void 0 !== r) return a(eo.removeEventListener, [e, r, o], 1, !0);
          },
          g = Lt({
            CDATA: Lt({
              value: function (e) {
                (this.src = e),
                  (this.toString = function () {
                    return this.src;
                  }),
                  (this.toXMLString = this.toString);
              }
            }),
            uneval: Lt({
              value: (e) => {
                try {
                  return `\\$1 = ${kt(e)};`;
                } catch (e) {
                  Zn.log(e);
                }
              }
            }),
            define: Lt({ value: void 0 }),
            module: Lt({ value: void 0 }),
            exports: Lt({ value: void 0 }),
            setTimeout: Lt({
              value: (...e) => a(Ko, e, 0, !0, p)
            }),
            setInterval: Lt({ value: (...e) => a(Jo, e, 0, !0, p) }),
            close: (() => {
              const e = n["window.close"];
              return e ? Lt({ get: () => (Yn == Yn.top ? (t) => e.value(t) : eo.close) }) : void 0;
            })(),
            focus: (() => {
              const e = n["window.focus"];
              return e ? Lt({ get: () => (t) => e.value(t) }) : void 0;
            })(),
            onurlchange: n["window.onurlchange"]
              ? (() => {
                  let e = null;
                  return Lt({
                    get: () => e,
                    set: (t) => {
                      e && u("urlchange", e), (e = t), d("urlchange", e);
                    }
                  });
                })()
              : void 0,
            location: Lt({
              set: (e) => {
                eo.location.href = e;
              }
            }),
            name: Lt({
              get: () => Yn.name,
              set: (e) => {
                Yn.name = e;
              }
            }),
            clearInterval: Lt({ get: () => Wo }),
            clearTimeout: Lt({ get: () => Ho }),
            addEventListener: Lt({ value: d }),
            removeEventListener: Lt({ value: u }),
            console: Lt({ get: () => co })
          });
        if (!e) {
          const e = Lt({
            window: Lt({ get: () => p }),
            globalThis: Lt({ get: () => p }),
            cloneInto: Lt({ value: (e) => e }),
            exportFunction: Lt({
              value: (e, t, n) => {
                const o = n && Ct(n, "defineAs");
                return o && (t[o] = e), e;
              }
            }),
            createObjectIn: Lt({
              value: (e, t) => {
                const n = Lt({}),
                  o = t && Ct(t, "defineAs");
                return o && (e[o] = n), n;
              }
            }),
            undefined: Lt({ get: () => {} })
          });
          vt(g, e);
        }
        o && vt(g, o);
        const p = r(g);
        return p;
      };
    let Qo;
    (async () => {
      const n = e.contextId;
      let o;
      const { fSend: r, fOnMessage: s, cloneInto: a, pageWindow: i } = e;
      (o =
        r && s
          ? (({ sendPrefix: e, listenPrefix: t, send: n, onMessage: o }) => {
              if (void 0 === n || void 0 === o) throw "invalid args";
              let r,
                s,
                a = 1;
              const i = Lt({}),
                l = Lt({}),
                c = (e) => {
                  e && (r = e);
                },
                d = (e) => {
                  const t = ++a;
                  return (l[a] = e), t;
                };
              o((o, a) =>
                o == `${t}_${r}`
                  ? ((t) => {
                      const { m: o, r: a, a: c, n: d } = t;
                      if ((i[o] && (Wt(i[o], (e) => e(c)), delete i[o]), "message.response" == o)) {
                        if (null == a) throw "Invalid Message";
                        ((e, t) => {
                          let n;
                          e && (n = l[e]) && (n(t), delete l[e]);
                        })(a, c);
                      } else if (s) {
                        const t = a
                          ? (t) => {
                              n(`${e}_${r}`, Lt({ m: "message.response", a: t, r: a }));
                            }
                          : () => {};
                        s(Lt({ method: o, args: c, node: d }), t);
                      }
                    })(a)
                  : null
              );
              const u = Lt({
                init: async (e) => {
                  r ? c() : c(e);
                },
                refresh: () => null,
                switchId: (e) => {
                  r && u.cleanup(), c(e);
                },
                send: (t, o, s, a) =>
                  to((i) => {
                    let l, c;
                    "function" != typeof s && null !== s ? ((l = s), (c = a)) : (c = s),
                      n(`${e}_${r}`, Lt({ m: t, a: o, r: c ? d(c) : null, n: l })),
                      i();
                  }),
                sendToId: (t, o, r) => {
                  n(`${e}_${t}`, Lt({ m: o, a: r, r: null }));
                },
                once: (e, t) => {
                  i[e] || (i[e] = []), Bt(i[e], t);
                },
                setMessageListener: (e) => {
                  s = e;
                },
                cleanup: () => null
              });
              return u;
            })(Lt({ sendPrefix: "2U", listenPrefix: "2S", send: r, onMessage: s }))
          : (({ sendPrefix: e, listenPrefix: n, cloneInto: o }) => {
              const r = Lt({});
              let s,
                a,
                i = 1;
              const l = Lt({});
              let c = !1,
                d = [];
              const u = () => {
                  (m = Yn.document.documentElement), (c = !1);
                  const e = d;
                  (d = []),
                    Wt(e, (e) => {
                      c || b() ? Bt(d, e) : e();
                    });
                },
                g = (e) => {
                  const t = ++i;
                  return (l[i] = e), t;
                },
                p = (e, t) => {
                  const { m: n, a: r, r: s, n: a } = t,
                    i = ((e, t, n) => {
                      let r;
                      var s;
                      return (
                        n
                          ? ((r = no("MutationEvent")), tn(r, e, !1, !1, n || null, void 0, void 0, kt(t), nn))
                          : (r = new Fn(e, Lt({ detail: ((s = t), o ? o(s, Yn.document) : s) }))),
                        r
                      );
                    })(e, Lt({ m: n, a: r, r: s }), a);
                  Gt($e, Yn, [i]);
                },
                f = (t) => {
                  const { m: n, r: o, a: i } = Zt("CustomEvent" == en((c = t)) ? In(c) : At(On(c)));
                  var c;
                  if ((r[n] && (Wt(r[n], (e) => e(i)), delete r[n]), "unlock" == n))
                    p(`${e}_${a}`, Lt({ m: "unlocked", a: void 0, r: null })), u();
                  else if ("unlocked" == n) u();
                  else if ("message.response" == n) {
                    if (null == o) throw "Invalid Message";
                    ((e, t) => {
                      let n;
                      e && (n = l[e]) && (n(t), delete l[e]);
                    })(o, i);
                  } else if (s) {
                    const r = o
                      ? (t) => {
                          p(`${e}_${a}`, Lt({ m: "message.response", a: t, r: o }));
                        }
                      : () => {};
                    s(Lt({ method: n, args: i, node: "MutationEvent" === en(t) ? Cn(t) : void 0 }), r);
                  }
                },
                v = (e) => {
                  e && (a = e), a && eo.addEventListener(`${n}_${a}`, f, !0);
                };
              let m, _;
              const b = () => {
                  if (
                    (() => {
                      const e = Yn.document.documentElement;
                      return m || (m = e), m !== e;
                    })()
                  ) {
                    if (_) {
                      const e = _;
                      (_ = void 0), e(Yn.document);
                    }
                    return !0;
                  }
                },
                M = Lt({
                  init: async (n, o) => {
                    a ? v() : v(n),
                      t && !o && (await null),
                      ((m = Yn.document.documentElement),
                      to((e) => {
                        _ = e;
                        const t = new Xn(() => {
                          b() && t.disconnect();
                        });
                        t.observe(Yn.document, Lt({ childList: !0 }));
                      })).then(() => {
                        (c = !0), M.refresh(), p(`${e}_${a}`, Lt({ m: "unlock", a: void 0, r: null }));
                      });
                  },
                  refresh: () => {
                    const e = a;
                    e && (M.cleanup(), M.init(e, !0));
                  },
                  switchId: (e) => {
                    a && M.cleanup(), v(e);
                  },
                  send: (t, n, o, r) =>
                    to((s) => {
                      let i, l;
                      "function" != typeof o && null !== o ? ((i = o), (l = r)) : (l = o), b();
                      const u = () => {
                        p(`${e}_${a}`, Lt({ m: t, a: n, r: l ? g(l) : null, n: i })), s();
                      };
                      c ? Bt(d, u) : u();
                    }),
                  sendToId: (t, n, o) => {
                    p(`${e}_${t}`, Lt({ m: n, a: o, r: null }));
                  },
                  setMessageListener: (e) => {
                    s = e;
                  },
                  once: (e, t) => {
                    r[e] || (r[e] = []), Bt(r[e], t);
                  },
                  cleanup: () => {
                    a && (eo.removeEventListener(`${n}_${a}`, f, !0), (a = void 0));
                  }
                });
              return M;
            })(
              Lt({
                sendPrefix: "2C",
                listenPrefix: "2P"
              })
            )),
        (e.bridges.first = o);
      const l = vt(e.console, lo);
      o.init(n);
      const c = Lt({});
      o.setMessageListener(({ method: t, args: n }) => {
        if ("commid" == t) o.switchId(n.id), o.send("ack", Lt({ id: n.id }));
        else if ("injectable" == t)
          g(n.id, () => {
            o.send("ack", Lt({ id: n.id }));
          }),
            o.send("injectableack", Lt({ id: n.id }));
        else if ("setForeignAttr" == t) Yn[n.attr] = n.value;
        else if ("script" == t) {
          const { id: t, unwrap: r, bundle: s } = n,
            { script: a } = s,
            {
              name: i,
              uuid: l,
              options: { run_at: u }
            } = a;
          g(t, (t) => {
            const o = r
              ? () => t()
              : () =>
                  Gt(
                    t,
                    ((t, n, o, r) => {
                      const { pageWindow: s, cloneInto: a, exportFunction: i } = e,
                        l = s || Yn,
                        { script: c } = t,
                        d = c.options.compat_powerful_this,
                        u = -1 !== Ht(c.grant, "none");
                      Qo = Qo || zo(n);
                      const g = Qo.of(t),
                        p = (e) => Lt({ p: m, r: Gt, s: e }),
                        f = Lt({ seed: Lt({ get: () => p(b), once: !0 }) }),
                        v = Lt({}),
                        m = Lt({ GM: v }),
                        _ = l && l;
                      d && (Ot(f, "GM", Lt({ value: v })), Ot(f, "unsafeWindow", Lt({ value: _ }))),
                        u || (m.unsafeWindow = _),
                        Wt(pt(g), (e) => {
                          const t = vn(e, 0, 3),
                            n = g[e];
                          if (void 0 !== n)
                            if ("GM_" === t) (m[e] = void 0 !== n.get ? n.get() : n.value), d && Ot(f, e, n);
                            else if ("GM." === t) {
                              const t = zt(e, 3);
                              _t(v, t, n);
                            }
                        });
                      const b = u ? p(d ? m : Lt({})) : Yo(u, c.options.run_at, g, f, o, r);
                      return b;
                    })(s, n.flags, d, p),
                    []
                  );
            "document-start" == u || "context-menu" == u ? o() : (c[l] = o);
          }),
            o.send(`scriptack-${t}`, Lt({ id: t }));
        } else if ("port.message" == t) ao.message(n, o);
        else if ("external.connect" == t)
          ((t) => {
            const { bridges: n } = e,
              o = Yn,
              r = Ct(o, "external");
            if (!r) return;
            const s = t ? (e) => t(e, o, Lt({ cloneFunctions: !0 })) : (e) => e,
              a = (e, t) => {
                n.first.send("external.message", e, t);
              };
            try {
              const e = () => {
                const e = Lt({
                  getVersion: (e) => {
                    a(Lt({ method: "getVersion" }), (t) => e(s(t)));
                  },
                  openOptions: (e, t) => {
                    a(Lt({ method: "openOptions", params: e }), t);
                  },
                  isInstalled: (e, t, n) => {
                    "function" == typeof t && ((n = t), (t = null)),
                      a(Lt({ method: "isInstalled", script: Lt({ name: e, namespace: t }) }), (e) => n(s(e)));
                  }
                });
                return s(e);
              };
              mt(r, Lt({ Tampermonkey: Lt({ value: e(), configurable: !0 }) }));
            } catch (e) {}
          })(a);
        else if ("run" == t) {
          const { uuid: e } = n,
            t = Ct(c, e);
          t ? "function" == typeof t && (t(), delete c[e]) : l.warn(`env: missing script "${e}"!`);
        }
      });
      const { createProxy: d } = ((e, t) => {
          const n = ((e) => {
            let t = Lt({});
            const n = (e, o, r) => {
              const s = ht(e);
              (s && s === o) || (null != s && --r >= 0 && n(s, e, r), (t = vt(t, yt(e))));
            };
            return n(e, null, 5), t;
          })(Yn);
          Wt(vo, (e) => delete n[e]);
          const o = n;
          return Lt({
            createProxy: (n) => {
              let r = o;
              const s = (e) => {
                  let t, n;
                  const o = (t = Mt(p, e)) || (n = r[e]);
                  return Lt({ d: o ? Lt(o) : o, l: !!t, w: !!n });
                },
                a = (e) => {
                  if (!l(e)) return !1;
                  if ("length" === e) return !0;
                  const t = Et(jn(e));
                  return t >= 0 && t <= sn && e === `${t}`;
                },
                i = (e) => "on" === vn(e, 0, 2),
                l = (e) => "string" == typeof e,
                c = (e, n) => {
                  const o = vn(e, 2),
                    r = g[o];
                  if ((r && (t.removeEventListener(o, r), delete g[o]), n && ((e) => "function" == typeof e)(n))) {
                    const e = (...e) => Gt(n, t, e);
                    t.addEventListener(o, e), (g[o] = e);
                  }
                },
                d = (t) => void 0 !== t && (t === e || t === Yn || t === Qn),
                u = Lt({
                  addEventListener: !0,
                  alert: !0,
                  atob: !0,
                  blur: !0,
                  btoa: !0,
                  cancelAnimationFrame: !0,
                  cancelIdleCallback: !0,
                  captureEvents: !0,
                  clearInterval: !0,
                  clearTimeout: !0,
                  close: !0,
                  confirm: !0,
                  createImageBitmap: !0,
                  dispatchEvent: !0,
                  dump: !0,
                  fetch: !0,
                  find: !0,
                  focus: !0,
                  getComputedStyle: !0,
                  getDefaultComputedStyle: !0,
                  getSelection: !0,
                  matchMedia: !0,
                  moveBy: !0,
                  moveTo: !0,
                  open: !0,
                  openDatabase: !0,
                  postMessage: !0,
                  print: !0,
                  prompt: !0,
                  queueMicrotask: !0,
                  releaseEvents: !0,
                  removeEventListener: !0,
                  reportError: !0,
                  requestAnimationFrame: !0,
                  requestIdleCallback: !0,
                  resizeBy: !0,
                  resizeTo: !0,
                  scroll: !0,
                  scrollBy: !0,
                  scrollByLines: !0,
                  scrollByPages: !0,
                  scrollTo: !0,
                  setInterval: !0,
                  setResizable: !0,
                  setTimeout: !0,
                  showDirectoryPicker: !0,
                  sizeToContent: !0,
                  stop: !0,
                  structuredClone: !0,
                  updateCommands: !0,
                  webkitCancelAnimationFrame: !0,
                  webkitRequestAnimationFrame: !0,
                  webkitRequestFileSystem: !0,
                  webkitResolveLocalFileSystemURL: !0
                });
              Wt(pt(u), (e) => {
                n[e] = n[e] || Lt({ bind: !0 });
              });
              const g = Lt({}),
                p = Lt({});
              Ot(p, yn, "Window");
              const f = new $n(
                p,
                Lt({
                  defineProperty: (e, t, o) => {
                    const { d: r, l: d } = s(t),
                      u = Lt(o);
                    return (r && !r.configurable && (!!r.configurable != !!u.configurable || !!r.enumerable != !!r.enumerable)) || a(t)
                      ? (_t(d ? p : Yn, t, u), !1)
                      : (_t(p, t, u), l(t) && i(t) && c(t), delete n[t], !0);
                  },
                  deleteProperty: (e, t) => {
                    let { d: a, l: d, w: u } = s(t);
                    return (
                      !(!a || !a.configurable) &&
                      (d && ((d = delete p[t]), l(t) && i(t) && c(t)),
                      (u || ((a = r[t]) && a.configurable)) && (o === r && (r = vt(Lt({}), o)), (u = delete r[t])),
                      delete n[t],
                      d || u)
                    );
                  },
                  get: (e, t) => {
                    const o = n[t];
                    if (o) {
                      if ((o.once && delete n[t], "value" in o)) return o.value;
                      if (o.get) return o.get();
                    }
                    const { d: r, l: i } = a(t) ? Lt({ d: Mt(Yn, t), l: !1 }) : s(t);
                    if (r) {
                      let e;
                      const n =
                        "value" in r ? Ct(r, "value") : (e = Ct(r, "get")) && "function" == typeof e ? (i ? e() : Dt(e, Yn)()) : void 0;
                      return n && o && o.bind ? Dt(n, Yn) : i || "event" == t ? n : d(n) || "globalThis" === t ? f : n;
                    }
                  },
                  getOwnPropertyDescriptor: (e, t) => {
                    let { d: o, l: r } = s(t);
                    if (!o) {
                      const e = n[t];
                      if (e) return Lt({ enumerable: !0, configurable: !0, writable: !0, value: e.value, set: e.set, get: e.get });
                      if (!a(t)) return;
                      (o = Mt(Yn, t)), (r = !1);
                    }
                    const i = vt(Lt({}), o);
                    if ((d(i.value) && (i.value = f), !r)) {
                      const e = i.get;
                      e &&
                        (i.get = () => {
                          const t = Dt(e, Yn)();
                          return d(t) ? f : t;
                        }),
                        i && !i.configurable && _t(p, t, i);
                    }
                    return i;
                  },
                  has: (e, t) => t in p || t in n || t in r,
                  ownKeys: () => {
                    const e = (e) => !(e in r),
                      t = pt(r),
                      n = Nt(pt(yt(p)), e),
                      o = Lt({});
                    for (let e = 0; "Window" === en(It(Yn, e)); e += 1) o[e] = !0;
                    const s = Nt(pt(o), e);
                    return Xt(t, n, s);
                  },
                  preventExtensions: () => !0,
                  set: (e, t, o) => {
                    const r = n[t];
                    if (r && r.set) return r.set(o), !0;
                    const { d } = s(t);
                    return !((d && !d.writable && !Ct(d, "set")) || a(t) || (delete n[t], Ot(p, t, o), l(t) && i(t) && c(t, o), 0));
                  }
                })
              );
              return f;
            }
          });
        })(i, eo),
        u = (e) => {
          o.send("csp", Lt({ src: e }));
        },
        g = async (e, t) => {
          _t(Qn, e, Lt({ set: (n) => (delete Qn[e], so(), t(n)), configurable: !0, enumerable: !1 })), ro(() => delete Qn[e]);
        },
        p = (e, t) =>
          t
            ? ((e, t) => {
                const n = `__p__${oo()}`;
                (async (e, t) => {
                  g(e, (e) => Gt(e, t, []));
                })(n, t),
                  u('window["' + n + '"] = function(){' + e + "};"),
                  delete Qn[n];
              })(e, t)
            : u(e);
    })(),
      so();
  })();
};
