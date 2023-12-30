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
        yn((e) => {
          const t = en(vn.document);
          "interactive" == t || "complete" == t
            ? (n && n(), e())
            : bn.addEventListener(
                "DOMContentLoaded",
                () => {
                  n && n(), e();
                },
                Et({ capture: o, once: !0 })
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
          A_po: [].pop,
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
        A_po: m,
        A_f: g,
        A_iO: f,
        A_iA: _,
        O_a: v,
        O_k: h,
        O_v: w,
        O_dP: b,
        O_dPy: y,
        O_hOP: M,
        O_gOPN: E,
        O_gOPD: O,
        O_gOPDs: L,
        O_gPO: S,
        O_tS: x,
        J_p: I,
        J_s: R,
        M_f: j,
        M_r: C,
        M_m: D,
        M_i: P,
        M_pA: $,
        M_pAT: A,
        N_tS: T,
        N_MSI: U,
        P_t: N,
        P_c: B,
        R_rABS: F,
        R_rAT: X,
        R_r: k,
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
        M_aN: de,
        M_rN: le,
        C_d: ue,
        U_cOU: pe,
        U_rOU: me,
        X_o: ge,
        X_s: fe,
        X_pSD: _e,
        X_pSH: ve,
        X_pSL: he,
        X_pSO: we,
        X_pSU: be,
        D_n: ye,
        I_tS: Me,
        W_aEL: Ee,
        W_rEL: Oe,
        parseInt: Le,
        parseFloat: Se,
        console: xe,
        encodeURIComponent: Ie,
        decodeURIComponent: Re,
        encodeURI: je,
        decodeURI: Ce,
        escape: De,
        unescape: Pe,
        atob: $e,
        btoa: Ae,
        postMessage: Te,
        dispatchEvent: Ue,
        alert: Ne,
        prompt: Be,
        confirm: Fe,
        close: Xe,
        getElementById: ke,
        createEvent: qe,
        createElement: We,
        CustomEvent: He,
        CompositionEvent: Je,
        KeyboardEvent: Ge,
        MouseEvent: Ke,
        MutationEvent: ze,
        MutationObserver: Ve,
        Uint8Array: Ye,
        FileReader: Ze,
        DOMParser: Qe,
        XMLHttpRequest: et,
        Function: tt,
        RegExp: nt,
        Promise: ot,
        Blob: st,
        ReadableStream: rt,
        Number: it,
        String: at,
        Proxy: ct,
        Window: dt
      } = o,
      lt = r,
      ut = i,
      pt = h,
      mt = w,
      gt = v,
      ft = y,
      _t = E,
      vt = O,
      ht = S,
      wt = _,
      bt = C,
      yt = D,
      Mt = (e, t, n) => lt(ut, e, t, n),
      Et = s,
      Ot = (e, t, n) => (
        ft(
          e,
          t,
          Et({
            value: n,
            configurable: !0,
            enumerable: !0,
            writable: !0
          })
        ),
        e
      ),
      Lt = (e, t) => {
        const n = vt(e, t);
        return n ? Et(n).value : void 0;
      },
      St = (e, t) => {
        const n = (e, t, o) => {
          const s = vt(e, t),
            r = s ? Et(s) : void 0;
          let i;
          return r ? (r.enumerable ? r.value : void 0) : --o >= 0 && (i = ht(e)) ? n(i, t, o) : void 0;
        };
        return n(e, t, 5);
      },
      xt = (e) => {
        const t = (t, ...n) => Mt(e, t, n);
        return Ot(t, "wrappedJSObject", e), t;
      },
      It = () => (e) => xt(e),
      Rt = xt(a),
      jt = I,
      Ct = (e) => {
        const t = (e, n) => {
          let o;
          if (null === e) o = "null";
          else if ("object" == typeof e) {
            if (n) {
              if (-1 != Tt(n, e)) throw "Converting circular structure to JSON";
              Ot(n, n.length, e);
            } else n = [e];
            if (wt(e)) {
              let i = "";
              for (let o = 0; o < e.length; o++) {
                let a;
                a = Nt(e, o) ? (Nt((s = e), (r = o)) ? s[r] : void 0) : St(e, o);
                const c = t(a, n);
                i += `${o ? "," : ""}${void 0 === c ? "null" : c}`;
              }
              o = `[${i}]`;
            } else {
              let s = "";
              Ut(pt(e), (o) => {
                const r = t(e[o], n);
                void 0 !== r && (s += `${s ? "," : ""}${R(o)}: ${r}`);
              }),
                (o = `{${s}}`);
            }
            n.length -= 1;
          } else o = R(e);
          var s, r;
          return o;
        };
        return t(e);
      },
      Dt = (It()(l), It()(u)),
      Pt =
        (It()(m),
        It()(g),
        (e, t, n) => {
          const o = e.length;
          let s = t || 0;
          if (s >= o) return [];
          s < 0 && (s = yt(0, o + s));
          let r = void 0 === n ? o : n;
          r < 0 && (r = yt(0, o + r)), r > o && (r = o);
          const i = Et({});
          for (let t = s; t < r; t++) i[t] = Lt(e, t);
          return mt(i);
        }),
      $t = It()(p),
      At = (e, t) => {
        let n = e.length || 0;
        return Ot(e, n, t), n++, (e.length = n);
      },
      Tt = It()(f),
      Ut = It()(d),
      Nt = It()(M),
      Bt = It()(z),
      Ft = It()(J),
      Xt = xt(x),
      kt = ht({}),
      qt = (e) => {
        const t = Et(e),
          n = _t(t);
        for (let e = 0; e < n.length; e++) {
          const o = n[e],
            s = t[o];
          null !== s && "object" == typeof s && ht(s) === kt && (t[o] = qt(s));
        }
        return t;
      },
      Wt = (e) => {
        const t = Bt(Xt(e), " ");
        return Ft($t(Pt(t, 1), " "), 0, -1);
      },
      Ht = It()(c),
      Jt = It()(P),
      Gt = $,
      Kt = It()(T),
      zt = It()(N),
      Vt = (It()(B), It()(F), It()(X), It()(k), q && It()(q), W && It()(W), H),
      Yt = It()(G),
      Zt = It()(K),
      Qt =
        (It()(V),
        It()(
          Y ||
            function (e, t) {
              return $t(Bt(this, e), t);
            }
        ),
        It()(Z)),
      en = (It()(Q), It()(ee), xt(ne), xt(oe), xt(se)),
      tn = xt(re),
      nn = xt(ie),
      on = (xt(ae), xt(ce), xt(de)),
      sn = xt(le),
      rn = xt(ue),
      an = me,
      cn = (It()(ge), It()(fe), ye),
      dn = He,
      ln = Ve,
      un = st,
      pn = function (e, t) {
        return Lt(e, t);
      },
      mn = Et({
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
      gn = (() => {
        const e = Et({ getElementById: ke, createEvent: qe, createElement: We, dispatchEvent: Ue, addEventListener, removeEventListener }),
          t = Et({});
        return (
          Ut(pt(e), (n) => {
            try {
              const o = e[n];
              t[n] = function (...e) {
                return Mt(o, vn.document, e);
              };
            } catch (e) {
              t[n] = ((e, t) => {
                if (
                  (wn.error(
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
      fn = Et({ top: !0, location: !0 }),
      _n = twod,
      { unsafeWindow: vn, unsafeThis: hn } = _n;
    twod.bridges = twod.bridges || Et({});
    const wn = (twod.console = twod.console || Et({})),
      bn = Et({ addEventListener: Rt(Ee, vn), removeEventListener: Rt(Oe, vn) });
    Ut(pt(fn), async (e) => {
      if (!bn[e])
        try {
          const t = vn[e];
          if (null == t) return;
          bn[e] = t;
        } catch (e) {}
    }),
      Ut(pt(mn), async (e) => {
        if (!bn[e])
          try {
            let t = Lt(vn, e);
            if (void 0 === t && (hn === vn || void 0 === (t = Lt(hn, e)))) return;
            const n = mn[e];
            bn[e] = !1 === n && "function" == typeof t ? Rt(t, hn) : t;
          } catch (e) {}
      });
    const yn = (e) => {
        let t,
          n = [],
          o = !1;
        e((e) => {
          if (!o) {
            if (n.length) {
              const t = n;
              (n = []), Ut(t, (t) => t(e));
            } else t = e;
            o = !0;
          }
        });
        const s = Et({ then: (e) => (o ? e(t) : At(n, e), s) });
        return s;
      },
      Mn = () => Kt(cn() + 19831206 * bt() + 1, 36),
      En = (() => {
        const { console: e, bridges: t } = twod,
          n = Et({});
        let o;
        const s = (e, t) => {
          let o = [],
            s = [];
          const r = () => {
            (o = []), (s = []), (i = null), delete n[e];
          };
          let i = Et({
            postMessage: (n) => {
              t.send("port.message", Et({ response_id: e, value: n }));
            },
            onMessage: Et({
              addListener: (e) => {
                At(o, e);
              }
            }),
            onDisconnect: Et({
              addListener: (e) => {
                At(s, e);
              }
            }),
            disconnect: () => {
              t.send("port.message", Et({ response_id: e, disconnect: !0 })), r();
            }
          });
          return (
            (n[e] = Et({
              message: (e) => {
                o && Ut(o, (t) => t(e));
              },
              disconnect: () => {
                s && Ut(s, (e) => e()), r();
              }
            })),
            i
          );
        };
        return Et({
          message: (t, r) => {
            let i;
            if (t.connect) {
              if (!t.destination || !t.response_id) throw "invalid message";
              o && o(t.destination, s(t.response_id, r));
            } else {
              if (!t.response_id) throw "invalid message";
              if (!(i = n[t.response_id])) return void e.warn("ports: unkown id", t.response_id, t);
              t.disconnect ? i.disconnect() : i.message(t.value);
            }
          },
          connect: (e) => {
            const n = Mn();
            return t.first.send("port.message", Et({ response_id: n, connect: !0, destination: e })), s(n, t.first);
          },
          onConnect: Et({
            addListener: (e) => {
              o = e;
            }
          })
        });
      })(),
      {
        setInterval: On,
        setTimeout: Ln,
        clearInterval: Sn,
        clearTimeout: xn,
        console: In,
        cloneInto: Rn,
        exportFunction: jn,
        createObjectIn: Cn
      } = vn,
      Dn = Object.assign({}, In),
      Pn = On.bind(vn),
      $n = Ln.bind(vn),
      An = Sn.bind(vn),
      Tn = (xn.bind(vn), hn == vn.top),
      { arrayBuffer: Un, blob: Nn } = vn.Response.prototype,
      { arrayBuffer: Bn } = vn.Blob.prototype,
      { then: Fn } = vn.Promise.prototype,
      { fetch: Xn, location: kn, document: qn, Response: Wn } = vn,
      Hn = xt(Un),
      Jn = xt(Nn),
      Gn = xt(Bn),
      Kn = Rn,
      zn = (e, t) => {
        const n = tn(vn.document, "http://www.w3.org/1999/xhtml", e);
        return (
          "string" == typeof t
            ? n.append(t)
            : t &&
              Ut(pt(t), (e) => {
                "textContent" == e ? (n.textContent = t[e]) : n.setAttribute(e, t[e]);
              }),
          n
        );
      },
      Vn = (t) => {
        const n = vn.document;
        if (n.body || "text/xml" == n.contentType) t();
        else {
          let n = !1;
          const o = () => {
              (n = !0), Vn(t);
            },
            s = Et({ capture: !0, once: !0 });
          bn.addEventListener("DOMNodeInserted", o, s),
            e(() => {
              n || (bn.removeEventListener("DOMNodeInserted", o, s), t());
            });
        }
      },
      Yn = (t) => {
        e(() => {
          $n(() => t(), 1);
        });
      },
      Zn =
        (Et({ encode: (e) => Pe(Ie(e)), decode: (e) => Re(De(e)) }),
        Et({
          encode: (e) => {
            let t = "";
            for (let n = 0; n < e.length; n++) t += Vt(255 & Qt(e, n));
            return Ae(t);
          },
          decode: (e) => $e(e)
        }),
        (e) => void 0 !== Lt(e, "objUrl")),
      Qn = (e) => void 0 !== Lt(e, "blob"),
      eo = (e) => void 0 !== Lt(e, "dataUri"),
      to = ["chrome"];
    let no, oo, so, ro, io, ao;
    (io = () => {
      if (void 0 !== oo) return oo;
      try {
        oo = -1 != navigator.userAgent.indexOf("Mac OS X");
      } catch (e) {}
      return oo;
    }),
      (ro = () => {
        if (void 0 !== no) return no;
        try {
          const e = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
          e && (no = parseInt(e[2]));
        } catch (e) {}
        return no;
      }),
      (ao = () => {
        if (void 0 !== so) return so;
        try {
          so = -1 != navigator.userAgent.search(/Android|Mobile/);
        } catch (e) {}
        return so;
      });
    const co = (ro(), !1),
      lo = ["chrome-extension:"],
      uo = globalThis,
      { chrome: po, browser: mo } = uo,
      go =
        ([].concat(["chrome"]),
        {
          reload: () => {
            window.location.reload();
          },
          eval: function (e, t) {
            let n;
            (n = ((e) => {
              let t;
              const n = document.createElementNS(document.lookupNamespaceURI(null) || "http://www.w3.org/1999/xhtml", "script");
              n.textContent = e;
              try {
                (document.head || document.body || document.documentElement || document).appendChild(n);
              } catch (e) {
                t = e.message || e;
              }
              const o = n.parentNode;
              return o && o.removeChild(n), t;
            })(e)),
              t && t(n);
          },
          addScript: function (e, t) {
            {
              const n = document.createElement("script");
              n.setAttribute("src", e),
                t && ((n.onload = () => t(!0)), (n.onerror = () => t(!1))),
                (document.head || document.body || document.documentElement || document).appendChild(n);
            }
          }
        }),
      fo = (() => {
        const e = {
          getInternalPathRegexp: function (e, t) {
            const n = new RegExp("(\\" + ["/", ".", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\"].join("|\\") + ")", "g"),
              o = lo[0] + "//" + fo.id + "/";
            return new RegExp(o.replace(n, "\\$1") + "([a-zA-Z" + (e ? "\\/" : "") + "]*)" + (t || "").replace(n, "\\$1"));
          },
          getInternalPageRegexp: function () {
            return fo.getInternalPathRegexp(!1, ".html");
          },
          getPlatformInfo: (e) => po.runtime.getPlatformInfo(e),
          getBrowserInfo: (e) => {
            e({ name: "Chrome", version: `${ro()}`, vendor: "unknown" });
          }
        };
        return (
          Object.defineProperty(e, "lastError", { get: () => po.runtime.lastError, enumerable: !0 }),
          Object.defineProperty(e, "id", { get: () => po.runtime.id, enumerable: !0 }),
          Object.defineProperty(e, "short_id", {
            get: () => e.id.replace(/[^0-9a-zA-Z]/g, "").substr(0, 4),
            enumerable: !0
          }),
          e
        );
      })(),
      _o = (() => {
        const e = {
          getURL: function (e) {
            return po.runtime.getURL(e);
          },
          sendMessage: function (e, t) {
            return po.runtime.sendMessage(e, t);
          },
          onMessage: {
            addListener: function (e) {
              return po.runtime.onMessage.addListener(e);
            }
          },
          connect: function (e) {
            return po.runtime.connect({ name: e });
          }
        };
        let t;
        return (
          Object.defineProperty(e, "inIncognitoContext", {
            get: () => (void 0 === t && (t = po.extension.inIncognitoContext), t),
            set: (e) => {
              t = e;
            },
            enumerable: !0
          }),
          e
        );
      })();
    let vo;
    const { console: ho } = twod,
      wo = (e) =>
        yn(async (t) => {
          t(e);
        }),
      bo = Et({
        setInterval: (e) => {
          let t;
          e.onMessage.addListener((n) => {
            "setInterval" == n.method && (t = Pn(e.postMessage, n.t));
          }),
            e.onDisconnect.addListener(() => {
              t && An(t), (t = null);
            });
        },
        registerMenuCommand: (e) => {
          const t = _o.connect("registerMenuCommand");
          t.onMessage.addListener((n) => {
            if (null !== t) {
              const { method: t, event: o } = n;
              e.postMessage(Et({ method: t, event: o }));
            }
          }),
            t.onDisconnect.addListener(() => {
              e.disconnect();
            }),
            e.onMessage.addListener((e) => {
              if ("register" !== e.method) return;
              const { name: n, uuid: o, accessKey: s } = e,
                r = $t([vo, n, o], "#");
              t.postMessage(Et({ method: "registerMenuCommand", name: n, uuid: o, menuId: r, accessKey: s }));
            }),
            e.onDisconnect.addListener(() => {
              t.disconnect();
            });
        },
        openInTab: (e) => {
          const t = _o.connect("openInTab");
          t.onMessage.addListener((t) => {
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
                  } = "boolean" == typeof e.options || void 0 === e.options ? Et({ loadInBackground: e.options }) : e.options,
                  c = void 0 === o ? void 0 !== s && !s : o,
                  d = void 0 === r || r;
                n && "//" == Yt(n, 0, 2) && (n = kn.protocol + n),
                  t.postMessage(
                    Et({
                      method: "openInTab",
                      details: Et({ url: n, options: Et({ active: !!c, insert: !!d, incognito: !!i, setParent: !i && !!a }) }),
                      uuid: e.uuid
                    })
                  );
              } else
                void 0 !== e.name
                  ? t.postMessage(Et({ name: e.name, uuid: e.uuid }))
                  : e.focus
                  ? t.postMessage(Et({ focus: !0, uuid: e.uuid }))
                  : e.close && t.postMessage(Et({ close: !0, uuid: e.uuid }));
            }),
            e.onDisconnect.addListener(() => {
              t.disconnect();
            });
        },
        download: (e) => {
          let t;
          const n = _o.connect("download");
          n.onMessage.addListener((t) => {
            e.postMessage(t);
          }),
            n.onDisconnect.addListener(() => {
              e.disconnect(), (t = !0);
            }),
            e.onMessage.addListener((e) => {
              if (e.cancel) (t = !0), n.postMessage(Et({ cancel: !0, id: vo, uuid: e.uuid }));
              else {
                let { url: o, ...s } = e.details;
                wo(o).then((o) => {
                  t ||
                    n.postMessage(
                      Et({ method: "download", details: Et({ ...s, from: Et({ url: o }) }), id: vo, uuid: e.uuid, location: kn.href })
                    );
                });
              }
            }),
            e.onDisconnect.addListener(() => {
              n.disconnect();
            });
        },
        webRequest: (e) => {
          const t = _o.connect("webRequest");
          t.onMessage.addListener((t) => {
            e.postMessage(t);
          }),
            t.onDisconnect.addListener(() => {
              e.disconnect();
            }),
            e.onMessage.addListener((e) => {
              t.postMessage(Et({ method: "webRequest", rules: e.rules, uuid: e.uuid }));
            }),
            e.onDisconnect.addListener(() => {
              t.disconnect();
            });
        },
        xhr: (e) => {
          let t, n;
          const o = [],
            s = async (e) => {
              if ((e && At(o, e), n)) await n, s();
              else {
                const e = Dt(o);
                e && e();
              }
            },
            r = _o.connect("xhr");
          r.onMessage.addListener((t) => {
            s(() => {
              const { onpartial: o, data: s, ...r } = t;
              let i;
              if (o && s) {
                const { tfd: t } = s;
                if (t) {
                  const s = ((e) =>
                    e && (Qn(e) || Zn(e) || eo(e))
                      ? ((e) => {
                          let t, n, o;
                          if (Zn(e)) t = e.objUrl.url;
                          else if (Qn(e)) n = e.blob;
                          else {
                            if (!eo(e)) throw "incompatible TransferableData";
                            o = e.dataUri;
                          }
                          return Et({
                            toBlob: () =>
                              yn((e) => {
                                if (n) e(n);
                                else if (t)
                                  try {
                                    zt(Xn(t), (t) => {
                                      zt(Jn(t), (t) => {
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
                                      const n = Bt(e, ","),
                                        o = pn(n, 0),
                                        s = pn(n, 1);
                                      t = -1 != Zt(o, "base64") ? $e(s) : Pe(s);
                                      const r = pn(Bt(o, ":"), 1),
                                        i = pn(Bt(r, ";"), 0);
                                      return new un([t], Et({ type: i }));
                                    })(o)
                                  );
                                }
                              }),
                            dispose: () => {
                              t && an(t), (t = n = o = void 0);
                            }
                          });
                        })(e)
                      : void 0)(t);
                  if (!s) return;
                  return void (n = yn(async (t) => {
                    const a = () => {
                      (n = null), t(), s && s.dispose();
                    };
                    try {
                      const t = await s.toBlob();
                      if (!t) return void a();
                      const n = t.type;
                      let c;
                      if (((c = "arrayBuffer" in t ? await Gn(t) : await Hn(new Wn(t))), !c)) return void a();
                      (i = Et({ nada: Et({ buffer: c, type: n }) })), e.postMessage(Et({ ...r, onpartial: o, data: i })), a();
                    } catch (e) {
                      ho.warn(e), a();
                    }
                  }));
                }
                i = s;
              } else i = s;
              e.postMessage(Et({ ...r, onpartial: o, data: i }));
            });
          }),
            r.onDisconnect.addListener(() => {
              s(async () => {
                e.disconnect(), (t = !0);
              });
            }),
            e.onMessage.addListener((e) => {
              wo(e.details && e.details.url).then((n) => {
                t || (e.details && n && ((e.details.url = n), (e.location = kn.href)), r.postMessage(e));
              });
            }),
            e.onDisconnect.addListener(() => {
              r.disconnect();
            });
        },
        onurlchange: (e) => {
          const t = _o.connect("onurlchange");
          let n = () => {
            e.postMessage(Et({ url: kn.href }));
          };
          const o = () => {
            n && (bn.removeEventListener("hashchange", n), (n = null));
          };
          bn.addEventListener("hashchange", n),
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
          const t = _o.connect("values");
          t.onMessage.addListener((t) => {
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
            });
        }
      }),
      yo = Et({
        setTimeout: ({ args: e, cb: t }) => {
          $n(t, e.t);
        },
        setClipboard: ({ args: e, cb: t }) => {
          const { content: n, info: o, uuid: s } = e;
          let r, i;
          "object" == typeof o ? (o.type && (r = o.type), o.mimetype && (i = o.mimetype)) : "string" == typeof o && (r = o);
          const a = i || ("html" == r ? "text/html" : "text/plain");
          co
            ? _o.sendMessage(Et({ method: "clipboard", mimetype: a, content: n, uuid: s }), () => t())
            : (vn.document.addEventListener(
                "copy",
                (e) => {
                  e.stopImmediatePropagation(), e.preventDefault(), e.clipboardData && e.clipboardData.setData(a, n);
                },
                Et({ capture: !0, once: !0 })
              ),
              vn.document.execCommand("copy"),
              t());
        },
        notification: ({ args: e, cb: t }) => {
          (e.method = "notification"), _o.sendMessage(e, (e) => t(e));
        },
        closeTab: ({ args: { uuid: e }, cb: t }) => {
          _o.sendMessage(Et({ method: "closeTab", uuid: e, id: vo }), (e) => {
            e && e.error && ho.warn(e.error), t(e);
          });
        },
        focusTab: ({ args: { uuid: e }, cb: t }) => {
          _o.sendMessage(Et({ method: "focusTab", uuid: e, id: vo }), (e) => {
            e && e.error && ho.warn(e.error), t(e);
          });
        },
        addElement: async ({ args: t, node: n, cb: o }) => {
          try {
            const s = zn(t.tag, Et({ ...(t.properties || Et({})), ...(t.id ? Et({ id: t.id }) : Et({})) }));
            let r;
            if (n) r = n;
            else {
              const t = vn.document;
              if (((r = t.head || t.body || t.documentElement), !r)) {
                const t = vn.document;
                r = await yn((n) => e(() => n(t.head || t.body)));
              }
            }
            r.appendChild(s), o();
          } catch (e) {
            ho.warn("content: error adding script", e);
          }
        },
        tabs: ({ args: e, cb: t }) => {
          (e.method = "tabs"), _o.sendMessage(e, (e) => e && t(e.data));
        },
        cookie: ({ args: e, cb: t }) => {
          (e.method = "cookie"), _o.sendMessage(e, (e) => e && t(e.data));
        }
      }),
      Mo = Et({
        init: () => {
          vo = twod.contextId;
        },
        processMessage: ({ method: e, args: t, node: n }, o) => {
          let s;
          if ((s = yo[e])) return s(Et({ args: t, node: n, cb: o }));
          o();
        },
        processConnect: (e, t) => {
          let n;
          if ((n = bo[e])) return n(t);
        }
      }),
      Eo = ["GM_info", "GM.info"],
      Oo = ["unsafeWindow", ...Eo],
      Lo = (e) => e.replace(new RegExp("[\"']", "g"), "\\$1");
    let So = !1;
    const xo = (e, t, n, o, s) => {
        const { console: r } = twod;
        So = So || e.logLevel >= 60;
        const {
            version: i,
            injectMode: a,
            inIncognitoContext: c,
            isFirstPartyIsolation: d,
            downloadMode: l,
            userAgent: u,
            container: p,
            logLevel: m
          } = e,
          g = Et({ version: i, injectMode: a, inIncognitoContext: c, isFirstPartyIsolation: d, downloadMode: l, container: p });
        Ut(t, async (t) => {
          const { script: i, storage: a } = t,
            {
              name: c,
              uuid: d,
              options: { run_at: l }
            } = i,
            { requires: p, ...f } = i,
            _ = p.length,
            v = !i.options.unwrap,
            h = Et({ ...g, userAgent: u, logLevel: m, sandboxMode: s });
          let w, b;
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
                (m = u ? Eo : d.concat(Oo)),
                m.forEach((e) => {
                  const n = e.split(".")[0];
                  "window" !== n && -1 === t.indexOf(n) && (t.push(n), l.push(`p.${n}`));
                }),
                [
                  `with (${u ? "this.s" : "this"}) {`,
                  "(async (u, { p, r, s }) => {",
                  "try {",
                  n ? `console.time("${(e = `SCRIPT RUN TIME[${Lo(c)}]`)}");\n` : "",
                  "r(u, s, [",
                  l.join(","),
                  "]);",
                  n ? `console.timeEnd("${e}");\n` : "",
                  "} catch (e) {",
                  "if (e.message && e.stack) {",
                  "console.error(\"ERROR: Execution of script '",
                  Lo(c),
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
              ? ((w = () => {
                  So && r.debug(`env: inject "${c}" now`);
                  const e = `__f__${Mn()}`,
                    t = Et({ storage: a, script: f }),
                    s = `window["${e}"] = function(){${y}}`;
                  let i = !0;
                  o.send("script", Et({ id: e, unwrap: !1, bundle: t, flags: h })).then(() => {
                    So && !i && r.log(`env: execution of "${c}" was delayed`),
                      n(s, (e) => {
                        e && r.error(`Uncaught SyntaxError: ${e}`);
                      });
                  }),
                    (i = !1);
                }),
                (b =
                  "context-menu" == l || "document-start" == l
                    ? void 0
                    : () => {
                        So && r.debug(`env: run "${c}" now  (${_} requires)`), o.send("run", Et({ uuid: d }));
                      }))
              : (b = () => {
                  So && r.debug(`env: inject @unwrap "${c}" now`),
                    n(y, (e) => {
                      e && r.error(`Uncaught SyntaxError: ${e}`);
                    });
                }),
            Io(c, l, w, b, So)
          );
        });
      },
      Io = (t, n, o, s, r) => {
        const { console: i } = twod;
        let a;
        "document-start" == n
          ? (r && i.debug(`env: run "${t}" ASAP -> document-start`), (a = (e) => e()))
          : "document-body" == n
          ? (r && i.debug(`env: schedule "${t}" for document-body`), (a = Vn))
          : "context-menu" == n
          ? r && i.debug(`env: run "${t}" ASAP -> context-menu`)
          : "document-end" == n
          ? (r && i.debug(`env: schedule "${t}" for document-end`), (a = (t) => e(!1, t)))
          : (r && i.debug(`env: schedule "${t}" for document-idle`), (a = Yn)),
          o && o(),
          s &&
            a &&
            a(() => {
              s();
            });
      },
      Ro =
        po.userScripts && po.userScripts.onBeforeScript
          ? { supported: !0, onBeforeScript: { addListener: (e) => po.userScripts.onBeforeScript.addListener(e) } }
          : { supported: !1 },
      jo = ({ sendPrefix: e, listenPrefix: t, send: n, onMessage: o }) => {
        if (void 0 === n || void 0 === o) throw "invalid args";
        let s,
          r,
          i = 1;
        const a = Et({}),
          c = (e) => {
            e && (s = e);
          },
          d = (e) => {
            const t = ++i;
            return (a[i] = e), t;
          };
        o((o, i) =>
          o == `${t}_${s}`
            ? ((t) => {
                const { m: o, r: i, a: c, n: d } = t;
                if ("message.response" == o) {
                  if (null == i) throw "Invalid Message";
                  ((e, t) => {
                    let n;
                    e && (n = a[e]) && (n(t), delete a[e]);
                  })(i, c);
                } else if (r) {
                  const t = i
                    ? (t) => {
                        n(`${e}_${s}`, Et({ m: "message.response", a: t, r: i }));
                      }
                    : () => {};
                  r(Et({ method: o, args: c, node: d }), t);
                }
              })(i)
            : null
        );
        const l = Et({
          init: async (e) => {
            s ? c() : c(e);
          },
          refresh: () => null,
          switchId: (e) => {
            s && l.cleanup(), c(e);
          },
          send: (t, o, r, i) =>
            yn((a) => {
              let c, l;
              "function" != typeof r && null !== r ? ((c = r), (l = i)) : (l = r),
                n(`${e}_${s}`, Et({ m: t, a: o, r: l ? d(l) : null, n: c })),
                a();
            }),
          sendToId: (t, o, s) => {
            n(`${e}_${t}`, Et({ m: o, a: s, r: null }));
          },
          setMessageListener: (e) => {
            r = e;
          },
          cleanup: () => null
        });
        return l;
      },
      Co = Ro,
      Do = Ro.supported && !vn.pagejs;
    let Po;
    const $o = (e, t) => {
        try {
          Po(e), t && t();
        } catch (e) {
          t && t(e.message || e);
        }
      },
      Ao = "u" + Mn(),
      { bridges: To } = twod;
    let Uo = [];
    const No = (e) => {
        Co.onBeforeScript.addListener((o) => {
          const s = (e, n) => {
              Ut(t, (t) => t(e, n));
            },
            r = (e) => At(n, Et({ listener: e, clone: o.export }));
          ft(
            o.global,
            "pagejs",
            Et({
              set: o.export((t) => {
                delete o.global.pagejs;
                const n = o.metadata;
                if ((Ut(Uo, (e) => e(t, n)), (Uo = []), n.js)) {
                  const n = Et({
                    unsafeWindow: o.global,
                    unsafeThis: o.global.window,
                    pageWindow: void 0,
                    contextId: Ao,
                    fSend: s,
                    fOnMessage: r,
                    cloneInto: void 0,
                    exportFunction: void 0
                  });
                  t(o.export(n)), To.js.sendToId(Ao, "commid", Et({ id: e }));
                }
              }),
              configurable: !0
            })
          ),
            (Po = o.global.eval);
        });
        const t = [],
          n = [],
          o = (e, t) => {
            Ut(n, ({ listener: n, clone: o }) => n(e, o(t)));
          },
          s = (e) => At(t, e);
        return Et({
          createBridge: () => {
            const t = jo(Et({ sendPrefix: "2S", listenPrefix: "2U", cloneInto: Kn, send: o, onMessage: s }));
            return t.init(e), t;
          }
        });
      },
      Bo = (e) => {
        let t = (n) => {
          delete vn.pagejs, (t = void 0), e(n);
        };
        ft(vn, "pagejs", Et({ set: t, configurable: !0 })),
          $n(() => {
            t && t();
          }, 1);
      },
      Fo = (e, t) => {
        const n = (e, t) => {
            Ut(s, (n) => n(e, t));
          },
          o = (e) => At(r, Et({ listener: e, clone: (e) => e })),
          s = [],
          r = [],
          i = (e, t) => {
            Ut(r, ({ listener: n, clone: o }) => n(e, o(t)));
          },
          a = (e) => At(s, e),
          c = "c" + Mn();
        let d;
        return Et({
          createBridge: () => ((d = jo(Et({ sendPrefix: "2S", listenPrefix: "2U", send: i, onMessage: a }))), d.init(e), d),
          inject: () => {
            t(Et({ unsafeWindow: vn, unsafeThis: hn, pageWindow: void 0, contextId: c, fSend: n, fOnMessage: o })),
              d.sendToId(c, "commid", Et({ id: e }));
          }
        });
      },
      Xo = (e, t) => {
        let n, o;
        try {
          o = (0, eval)(e);
        } catch (e) {
          n = e.message || e;
        }
        return t && t(n), o;
      };
    let ko = !1;
    const qo = location.pathname + location.search,
      Wo =
        "TM_" +
        fo.short_id +
        window
          .btoa(qo.length + qo)
          .substr(0, 255)
          .replace(/[#=/]/g, "_"),
      Ho = () => {
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
            0 === t.indexOf(Wo))
          ) {
            document.cookie = t + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
            const e = Re(n);
            if (0 !== e.indexOf("blob:")) continue;
            let o;
            try {
              if (0 !== (new URL(e).origin + "/").indexOf(_o.getURL("/"))) continue;
              if (((o = new XMLHttpRequest()), o.open("GET", e, !1), o.send(null), 200 === o.status || 0 === o.status))
                return JSON.parse(o.responseText);
            } catch (e) {
              console.warn("content: unable to decode " + ((o && o.responseText) || "unknown"));
            }
          }
      };
    let Jo = !1;
    const Go = (t, n, o) => {
        const { contextId: s, bridges: r, console: i } = twod;
        yn((e) => {
          const o = (t) => {
              let n = 1;
              const o = () => {
                ko && i.log('content: send "prepare" message'),
                  _o.sendMessage({ method: "prepare", id: s, topframe: Tn, url: window.location.href }, (s) => {
                    if (!Jo) {
                      if (!s)
                        return (
                          ko && i.log("content: _early_ execution, connection to bg failed -> retry!"),
                          window.setTimeout(o, n),
                          void (n *= 2)
                        );
                      (Jo = !0),
                        pt(s.contexters).length || pt(s.scripts).length || s.external_connect
                          ? (t && t(), e({ info: s, type: "complete" == en(vn.document) ? "late" : "normal" }))
                          : e({ info: s });
                    }
                  });
              };
              !(function (e) {
                const t = () => "prerender" !== document.webkitVisibilityState,
                  n = () => {
                    t() && (document.removeEventListener("webkitvisibilitychange", n, !1), e());
                  };
                t() ? e() : document.addEventListener("webkitvisibilitychange", n, !1);
              })(o);
            },
            r = () => {
              let r;
              if (
                (ko && i.log("content: Started (" + s + ", " + window.location.origin + window.location.pathname + ")", hn.tm_info),
                (r = Ho()) || (r = hn.tm_info))
              ) {
                if ((delete hn.tm_info, pt(r.contexters).length || pt(r.scripts).length || r.external_connect)) {
                  if (r.contexters.raw || r.scripts.raw)
                    if (t.raw) t.raw();
                    else if (!n) throw "raw inject missing";
                  e({ info: r, type: "sync" });
                } else e({ info: r });
                _o.sendMessage({ method: "prepare", url: window.location.href, cleanup: !0 }, () => null);
              } else
                n
                  ? o(() => {
                      t.raw && t.raw();
                    })
                  : (t.raw && t.raw(), o());
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
            ko = ko || a.logLevel >= 60;
            const d = a.scripts;
            if (
              (n &&
                !t.raw &&
                d.raw &&
                (t.js
                  ? ((d.js = (d.js || []).concat(d.raw)), delete d.raw)
                  : t.dom && ((d.dom = (d.dom || []).concat(d.raw)), delete d.raw)),
              d.js)
            ) {
              if (!t.js) throw "js inject missing";
              t.js();
            }
            if (d.dom) {
              if (!t.dom) throw "dom inject missing";
              t.dom();
            }
            e(!1, () => {
              ko && i.log("content: DOMContentLoaded"), Ut(pt(r), (e) => r[e].send("DOMContentLoaded"));
            }),
              (l = () => {
                ko && i.log("content: load"), Ut(pt(r), (e) => r[e].send("load"));
              }),
              "complete" == en(vn.document) ? l() : bn.addEventListener("load", () => l(), Et({ capture: !0, once: !0 }));
            const u = (d.dom || []).length + (d.js || []).length + (d.raw || []).length;
            ko && i.log("content: " + (c || "normal") + " start event processing for " + s + " (" + u + " to run)"),
              Ko(a),
              !Tn &&
                u &&
                window.addEventListener(
                  "unload",
                  () => {
                    _o.sendMessage({ method: "unLoad", id: s, topframe: !1, url: window.location.href }, () => null);
                  },
                  !1
                ),
              o();
          } else o();
          var l;
        });
      },
      Ko = (e) => {
        const { bridges: t } = twod,
          { scripts: n, ...o } = e;
        n.js && xo(o, n.js, $o, t.js, "js"),
          n.dom && (Ut(to, (e) => (hn[e] = void 0)), xo(o, n.dom, Xo, t.dom, "dom")),
          n.raw && xo(o, n.raw, go.eval, t.raw, "raw");
      },
      zo = async () => {
        const { contextId: e } = twod,
          { location: t, document: n } = vn;
        n.addEventListener(
          "mouseenter",
          () => {
            _o.sendMessage(Et({ method: "contextmenu", url: t.href, id: e }), () => {});
          },
          !1
        );
      },
      { createEvent: Vo } = gn,
      Yo = ({ sendPrefix: e, listenPrefix: t, cloneInto: o }) => {
        let s,
          r,
          i = 1;
        const a = Et({});
        let c = !1,
          d = [];
        const l = () => {
            (f = vn.document.documentElement), (c = !1);
            const e = d;
            (d = []),
              Ut(e, (e) => {
                c || v() ? At(d, e) : e();
              });
          },
          u = (e) => {
            const t = ++i;
            return (a[i] = e), t;
          },
          p = (e, t) => {
            const { m: n, a: s, r, n: i } = t,
              a = ((e, t, n) => {
                let s;
                var r;
                return (
                  n
                    ? ((s = Vo("MutationEvent")), Jt(s, e, !1, !1, n || null, void 0, void 0, Ct(t), Gt))
                    : (s = new dn(e, Et({ detail: ((r = t), o ? o(r, vn.document) : r) }))),
                  s
                );
              })(e, Et({ m: n, a: s, r }), i);
            Mt(Ue, vn, [a]);
          },
          m = (t) => {
            const { m: n, r: o, a: i } = qt("CustomEvent" == Wt((c = t)) ? rn(c) : jt(on(c)));
            var c;
            if ("unlock" == n) p(`${e}_${r}`, Et({ m: "unlocked", a: void 0, r: null })), l();
            else if ("unlocked" == n) l();
            else if ("message.response" == n) {
              if (null == o) throw "Invalid Message";
              ((e, t) => {
                let n;
                e && (n = a[e]) && (n(t), delete a[e]);
              })(o, i);
            } else if (s) {
              const a = o
                ? (t) => {
                    p(`${e}_${r}`, Et({ m: "message.response", a: t, r: o }));
                  }
                : () => {};
              s(Et({ method: n, args: i, node: "MutationEvent" === Wt(t) ? sn(t) : void 0 }), a);
            }
          },
          g = (e) => {
            e && (r = e), r && bn.addEventListener(`${t}_${r}`, m, !0);
          };
        let f, _;
        const v = () => {
            if (
              (() => {
                const e = vn.document.documentElement;
                return f || (f = e), f !== e;
              })()
            ) {
              if (_) {
                const e = _;
                (_ = void 0), e(vn.document);
              }
              return !0;
            }
          },
          h = Et({
            init: async (t, o) => {
              r ? g() : g(t),
                n && !o && (await null),
                ((f = vn.document.documentElement),
                yn((e) => {
                  _ = e;
                  const t = new ln(() => {
                    v() && t.disconnect();
                  });
                  t.observe(vn.document, Et({ childList: !0 }));
                })).then(() => {
                  (c = !0), h.refresh(), p(`${e}_${r}`, Et({ m: "unlock", a: void 0, r: null }));
                });
            },
            refresh: () => {
              const e = r;
              e && (h.cleanup(), h.init(e, !0));
            },
            switchId: (e) => {
              r && h.cleanup(), g(e);
            },
            send: (t, n, o, s) =>
              yn((i) => {
                let a, l;
                "function" != typeof o && null !== o ? ((a = o), (l = s)) : (l = o), v();
                const m = () => {
                  p(`${e}_${r}`, Et({ m: t, a: n, r: l ? u(l) : null, n: a })), i();
                };
                c ? At(d, m) : m();
              }),
            sendToId: (t, n, o) => {
              p(`${e}_${t}`, Et({ m: n, a: o, r: null }));
            },
            setMessageListener: (e) => {
              s = e;
            },
            cleanup: () => {
              r && (bn.removeEventListener(`${t}_${r}`, m, !0), (r = void 0));
            }
          });
        return h;
      },
      Zo = (e, t, n) => {
        ((e, t) => {
          const n = pn(nn(vn.document, "*"), 0) || vn.document,
            o = zn("div"),
            s = o.attachShadow(Et({ mode: "closed" }));
          s.appendChild(zn("style", ":host { display: none }"));
          const r = zn("iframe", Et({ sandbox: "allow-scripts allow-same-origin", style: "display: none", src: "javascript:void 0" }));
          let i = () => {
            if (null === i) return;
            i = null;
            let n = !1;
            try {
              const t = r.contentDocument;
              if (t) {
                const o = zn("script", Et({ textContent: e }));
                pn(t.getElementsByTagName("*"), 0).appendChild(o), (n = !0);
              }
            } catch (e) {}
            t(o, n), r.remove(), o.remove();
          };
          r.addEventListener("load", i, Et({ once: !0, capture: !0 })), s.appendChild(r), n.appendChild(o), i && i();
        })(e, (e, o) => {
          let s;
          const r = zn("script", Et({ textContent: t(o) }));
          try {
            e.appendChild(r);
          } catch (e) {
            s = e.message || e;
          }
          n(s);
        });
      };
    let Qo;
    (async () => {
      const { unsafeWindow: e, bridges: n } = twod,
        { location: o, document: s } = e,
        r = s instanceof XMLDocument;
      if (!Et({ "http:": !0, "https:": !0, "file:": !0 })[e.location.protocol]) return;
      const i = twod.contextId ? twod.contextId : (twod.contextId = Mn());
      let a;
      const c = Et({});
      gt(twod.console, Dn),
        yn((t) => {
          if (Do) {
            const { createBridge: e } = No(i);
            At(Uo, (o, s) => {
              (Qo = a = o), s.js && ((n.js = e()), (c.js = () => null), r && (s.raw = !1)), t(s);
            });
          } else
            yn((t) => {
              (Qo = a = e.pagejs),
                delete e.pagejs,
                Qo
                  ? t()
                  : Bo((e) => {
                      if (!e) throw "Error: pagejs missing. Please see http://tmnk.net/faq#Q208 for more information.";
                      (Qo = a = e), t();
                    });
            }).then(() => {
              t(Et({ js: !1, raw: !0, dom: !0 }));
            });
        }).then(({ dom: s, raw: d }) => {
          if (s) {
            const e = Do ? Xo(`() => ${a};`)() : a,
              { createBridge: t, inject: o } = Fo(i, e);
            (c.dom = o), (n.dom = t());
          }
          if (d) {
            const { createBridge: e, inject: o } = ((e, n) => {
              let o;
              return Et({
                createBridge: () => ((o = Yo(Et({ sendPrefix: "2P", listenPrefix: "2C", cloneInto: Kn }))), o),
                inject: () => {
                  o.init(e);
                  {
                    const s = Mn(),
                      r =
                        "(" +
                        Ht((e, t) => {
                          const n = window,
                            o = t(n),
                            { O_dPy: s, cSO: r } = o;
                          s(n.parent, e, r({ value: o, enumerable: !1, writable: !1, configurable: !0 }));
                        }) +
                        ')("' +
                        s +
                        '", ' +
                        Ht(t) +
                        ")";
                    Zo(
                      r,
                      (e) =>
                        `(${n})({ unsafeWindow: typeof globalThis === "undefined" ? window : globalThis, unsafeThis: window, vault: ${
                          e ? `window["${s}"]` : "null"
                        }, contextId: "${s}", __proto__: null });delete window["${s}"]\n`,
                      () => {
                        o.sendToId(s, "commid", Et({ id: e }));
                      }
                    );
                  }
                }
              });
            })(i, a);
            (c.raw = o), (n.raw = e());
          }
          (n.first = n.js || n.raw || n.dom),
            _o.onMessage.addListener((t, s, r) => {
              "executeScript" == t.method
                ? ((t.url && 0 !== Zt(o.href, t.url)) || (void 0 !== t.topframe && t.topframe != Tn) || Ko(t.info), r(Et({})))
                : Tn &&
                  ("loadUrl" == t.method
                    ? ((e.location = t.url), r(Et({})))
                    : "reload" == t.method
                    ? (o.reload(), r(Et({})))
                    : "setForeignAttr" == t.method
                    ? (n.first.send(t.method, t), r(Et({})))
                    : Dn.log("content: unknown method " + Ct(t)));
            }),
            En.onConnect.addListener((e, t) => {
              Mo.processConnect(e, t);
            }),
            Mo.init(),
            Ut(pt(n), (e) => {
              if ("first" == e) return;
              const t = n[e];
              t.setMessageListener((n, o) => {
                const { method: s, args: r } = n;
                if ("port.message" == s) En.message(r, t);
                else if ("csp" == s) {
                  let t;
                  (t = "raw" == e ? go.eval : "dom" == e ? Xo : $o),
                    t(r.src, (e) => {
                      e && Dn.error(`Uncaught Error: ${e}`);
                    });
                } else if ("external.message" == s)
                  _o.sendMessage(Et({ method: "externalMessage", request: r }), (e) => {
                    o(e);
                  });
                else if ("console" == s) {
                  const e = r,
                    t = pn(e, 0),
                    n = pn(e, 1),
                    o = Dn[t] || Dn.log;
                  o &&
                    Mt(
                      o,
                      Dn,
                      ((e, ...t) => {
                        let n = e.length;
                        const o = Et(e);
                        for (let e = 0; e < t.length; e++) {
                          const s = t[e],
                            r = wt(s) ? s : [s];
                          for (let e = 0; e < r.length; e++) o[n + e] = Lt(r, e);
                          n += r.length;
                        }
                        return mt(o);
                      })(
                        ["injected:"],
                        ((e) => {
                          const t = [];
                          return (
                            Ut(e, (e) => {
                              At(t, ((e) => ("string" == typeof e ? jt(e) : e))(e));
                            }),
                            t
                          );
                        })(n)
                      )
                    );
                } else Mo.processMessage(n, o);
              });
            }),
            Go(c, r, () => (Qo = void 0)),
            zo();
        });
    })();
  })();
})({ __proto__: null, unsafeWindow: typeof globalThis === "undefined" ? window : globalThis, unsafeThis: window }, "tm_9k9tje");