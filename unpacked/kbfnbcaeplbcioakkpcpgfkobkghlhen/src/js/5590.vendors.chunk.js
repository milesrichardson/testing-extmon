(self.webpackChunk = self.webpackChunk || []).push([
  [5590],
  {
    64757: (t, e, n) => {
      n.d(e, { RZ: () => m, zx: () => d });
      var i = n(50858),
        r = n(55818),
        u = n(27378),
        s = n(8543),
        o = n(54001),
        a = n(31278),
        c = n(86732),
        l = n(1509),
        h = n(26215),
        f = n(94632);
      function d(t) {
        return u.createElement(h.Y, w(t, f.LI));
      }
      function w(t, e) {
        var n = (0, o.Sh)(t.className, e).className;
        return (0, r._)((0, i._)({}, t), { className: n });
      }
      !(function (t) {
        var e = (t.Animated = function (t) {
          return u.createElement(
            h.Y,
            (0, r._)((0, i._)({}, t), { animationMode: Boolean(t.animationMode) ? t.animationMode : c.m.FromClickPoint })
          );
        });
        (t.Primary = function (t) {
          return u.createElement(e, (0, i._)({ styleType: l.Z.Type.Button }, w(t, f.T$)));
        }),
          (t.Secondary = function (t) {
            return u.createElement(e, (0, i._)({ styleType: l.Z.Type.Button }, w(t, f.BD)));
          }),
          (t.Ghost = function (t) {
            return u.createElement(e, (0, i._)({ styleType: l.Z.Type.Button }, w(t, f.fk)));
          }),
          (t.Tertiary = function (t) {
            return u.createElement(e, (0, i._)({ styleType: l.Z.Type.Base }, w(t, f.UF)));
          }),
          (t.Flat = function (t) {
            return u.createElement(e, w(t, f.$H));
          }),
          (t.White = function (t) {
            return u.createElement(e, w(t, f.ix));
          }),
          (t.SidebarFlat = function (t) {
            return u.createElement(h.Y, (0, i._)({ styleType: l.Z.Type.H3Legacy }, w(t, f.HN)));
          }),
          (t.Caps = function (t) {
            return u.createElement(h.Y, (0, i._)({ styleType: l.Z.Type.H3Legacy }, w(t, f.Mp)));
          }),
          (t.Group = function (t) {
            var e = t.children,
              n = t.className,
              a = t.align,
              c = void 0 === a ? "horizontal" : a,
              l = t.sticky,
              h = t.name;
            return u.createElement(
              s.F.div,
              (0, r._)((0, i._)({ role: "group" }, (0, o.Sh)(n, "horizontal" === c ? (!0 === l ? f.vD : f.ru) : f.oc)), { "data-name": h }),
              e
            );
          });
      })(d || (d = {}));
      var m = function (t) {
        var e = t.title,
          n = t.titleAlign,
          i = t.buttonClass,
          r = t.iconClass,
          c = t.iconWidth,
          l = t.tooltipClass;
        return u.createElement(
          d,
          {
            name: "info-button",
            "aria-label": e,
            tag: h.X.div,
            title: u.createElement(s.F.div, (0, o.Sh)(f.bC, l), u.createElement("p", null, e)),
            titleAlign: n,
            className: i
          },
          u.createElement(a.JO.Info, { width: c, className: r })
        );
      };
    },
    50790: (t, e, n) => {
      n.d(e, { DI: () => S });
      var i = n(27378),
        r = n(54001),
        u = n(22232),
        s = n(44060),
        o = n(50474),
        a = n(64757),
        c = n(31278),
        l = n(3656),
        h = n(89894),
        f = n(24588),
        d = n(40219),
        w = n(5802);
      const m = { position: "relative", width: h.ux.percent(100) },
        g = { position: "relative", margin: `0 0 ${h.ux.rem(0.5)}` },
        _ = {
          display: "flex",
          boxSizing: "border-box",
          padding: `${h.ux.rem(1)} ${h.ux.rem(2)} ${h.ux.rem(1)} ${h.ux.rem(0.75)}`,
          width: h.ux.percent(100),
          borderRadius: h.ux.rem(d.fx),
          background: s.Il.BackgroundNotification,
          color: s.Il.CoreNeutral0,
          textAlign: "left",
          letterSpacing: 0,
          alignItems: "flex-start"
        },
        p = { width: h.ux.percent(100) },
        y = { display: "inline-block", width: h.ux.percent(100) },
        v = { margin: `${h.ux.rem(-0.5)} ${h.ux.rem(0.75)} ${h.ux.rem(-0.5)} 0` },
        b = { position: "absolute", top: 0, right: 0, marginTop: h.ux.rem(0.5), marginRight: h.ux.rem(0.4), marginLeft: h.ux.rem(0.5) },
        T = { stroke: f.FW },
        x = {
          margin: `0 0 ${h.ux.rem(0.5)}`,
          color: s.Il.CoreNeutral0,
          wordBreak: "break-word",
          fontWeight: "bold",
          fontSize: h.ux.rem(s.xv.BodySize),
          lineHeight: h.ux.rem(1.25)
        },
        C = {
          marginTop: h.ux.rem(-0.1),
          marginBottom: h.ux.rem(-0.25),
          color: s.Il.CoreNeutral0,
          fontSize: h.ux.rem(s.xv.BodySize),
          lineHeight: h.ux.rem(1.25)
        },
        F = h.ux.prefixedStylesheet("notifications", {
          wrapper: [m],
          notification: [g],
          flexibleNotification: [g, { display: "flex", width: "auto" }],
          contentWrapper: [_],
          miniContentWrapper: [_, { position: "relative", width: "auto" }],
          fullWidthNotification: [g, _, p],
          content: [y],
          miniContent: [{ flex: 1 }],
          alertIcon: [v],
          closeIconWrapper: [b],
          closeIcon: [T],
          header: [x],
          description: [C]
        });
      var S, k;
      !(function (t) {
        (t.Wrapper = ({ notification: e, onClose: r, children: u, theme: s = {} }) => {
          i.useEffect(() => e.actions.next("shown"), [e.actions]);
          const o = {
            wrapper: Boolean(s.wrapper) ? s.wrapper : n.wrapper,
            content: void 0 !== s.content ? Object.assign({}, n.content, s.content) : n.content
          };
          return i.createElement(
            "div",
            Object.assign({}, w.P.getAriaLiveProps(e), { className: o.wrapper }),
            i.createElement(t.Base, { metadata: e.metadata, onClose: r, theme: o.content }, u)
          );
        }),
          (t.Base = ({ metadata: n, onClose: r, theme: u, children: s }) =>
            i.createElement(
              "div",
              { className: u.wrapper },
              e(n, u.icon),
              i.createElement("div", { className: u.content }, s),
              !(function (t) {
                return t.priority === w.P.Priority.high || t.priority === w.P.Priority.highest;
              })(n) && i.createElement(t.CloseButton, { onClick: r, className: u.close })
            ));
        const e = (e, n) => {
          switch (e.icon) {
            case w.P.Icon.sparkles:
              return i.createElement(c.JO.Sparkles, { className: n });
            case void 0:
            case w.P.Icon.priority:
              return i.createElement(t.PriorityIcon, { priority: e.priority, className: n });
            default:
              return (0, u.vE)(e.icon);
          }
        };
        (t.AdHoc = ({ title: e, children: u, className: s, onClose: o }) =>
          i.createElement(
            "div",
            Object.assign({}, (0, r.Sh)(n.content.wrapper, s)),
            i.createElement("div", { className: n.content.content }, i.createElement(t.TitledContent, { title: e }, u)),
            i.createElement(t.CloseButton, { onClick: o, className: n.content.close })
          )),
          (t.PriorityIcon = ({ priority: t, className: e }) => {
            switch (t) {
              case w.P.Priority.lowest:
              case w.P.Priority.low:
                return i.createElement(c.JO.NotificationInfo, { className: e });
              case w.P.Priority.average:
                return i.createElement(c.JO.NotificationWarning, { className: e });
              case w.P.Priority.high:
              case w.P.Priority.highest:
                return i.createElement(c.JO.NotificationError, { className: e });
              default:
                return (0, u.vE)(t);
            }
          }),
          (t.CloseButton = ({ onClick: t, className: e }) => {
            const n = i.useContext(o.m.Context);
            return i.createElement(
              a.zx,
              { name: "closeNotification", "aria-label": n.actions.close, className: e, onClick: t },
              i.createElement(c.JO.Close, { className: F.closeIcon, width: 12 })
            );
          }),
          (t.TitledContent = ({ title: e, children: n }) =>
            Boolean(n)
              ? i.createElement(i.Fragment, null, i.createElement(l.P1, { className: F.header }, e), i.createElement(t.Content, null, n))
              : i.createElement(l.P1, { className: F.description }, e)),
          (t.Content = ({ children: t }) => i.createElement(l.XY, { className: F.description }, t));
        const n = {
          wrapper: F.wrapper,
          content: { wrapper: F.fullWidthNotification, icon: F.alertIcon, content: F.content, close: F.closeIconWrapper }
        };
      })(S || (S = {})),
        (function (t) {
          t.Wrapper = ({ notification: t, onClose: e, children: n }) => (
            i.useEffect(() => t.actions.next("shown"), [t.actions]),
            i.createElement(
              "div",
              { className: F.flexibleNotification },
              i.createElement(
                S.Base,
                {
                  metadata: t.metadata,
                  onClose: e,
                  theme: { wrapper: F.miniContentWrapper, icon: F.alertIcon, content: F.miniContent, close: F.closeIconWrapper }
                },
                n
              )
            )
          );
        })(k || (k = {}));
    },
    3656: (t, e, n) => {
      n.d(e, { CL: () => a, H4: () => r, P1: () => h, XY: () => s, Xk: () => u, ck: () => c, x4: () => o, zx: () => l });
      var i = n(1509);
      i.Z.style, i.Z.H1, i.Z.H2, i.Z.H3, i.Z.H3Legacy;
      const r = i.Z.H4,
        u = (i.Z.H5, i.Z.Paper),
        s = i.Z.Base,
        o = i.Z.Small,
        a = i.Z.SmallLight,
        c = i.Z.Lawyer,
        l = (i.Z.Title, i.Z.Button),
        h = (i.Z.Score, i.Z.P1);
    },
    40219: (t, e, n) => {
      n.d(e, {
        DY: () => l,
        I3: () => c,
        Ig: () => y,
        Jr: () => u,
        LB: () => r,
        Q9: () => m,
        VN: () => a,
        fx: () => s,
        g_: () => d,
        mA: () => o,
        mJ: () => p,
        nt: () => f,
        pZ: () => g,
        rX: () => _,
        v4: () => v,
        w$: () => h,
        xL: () => w
      });
      var i = n(32096);
      const r = i.LB,
        u = i.Jr,
        s = i.fx,
        o = i.mA,
        a = (i.Ax, i.VN),
        c = (i.FY, i.I3),
        l = (i.$n, i.DY),
        h = i.w$,
        f = i.nt,
        d = (i.cr, i.g_),
        w = i.xL,
        m = i.Q9,
        g = (i.WW, i.Ih, i.aS, i.pZ),
        _ = (i.Jg, i.MZ, i.h, i.Ee, i.OB, i.Gu, i.Gk, i.Kp, i.rX),
        p = i.mJ,
        y = i.Ig,
        v = (i.FB, i.v4);
    },
    17372: (t, e, n) => {
      var i, r;
      n.d(e, { z: () => r }),
        (function (t) {
          t.isPriorityMode = (t) => t === r.priority;
        })(i || (i = {})),
        (function (t) {
          (t.priority = "priority"), (t.all = "all");
        })(r || (r = {}));
    },
    91605: (t, e, n) => {
      n.d(e, { TV: () => r });
      var i,
        r,
        u,
        s,
        o,
        a = n(23239),
        c = n(5114),
        l = n(8125),
        h = n(66896),
        f = n(32952),
        d = n(4890),
        w = n(87363),
        m = n(17372);
      !(function (t) {
        (t[(t.EngagementHook = 0)] = "EngagementHook"),
          (t[(t.DeliveryHook = 1)] = "DeliveryHook"),
          (t[(t.PlagiarismHook = 2)] = "PlagiarismHook"),
          (t[(t.ProofitHook = 3)] = "ProofitHook"),
          (t[(t.GbVoxHook = 4)] = "GbVoxHook"),
          (t[(t.GbEnableVoxHook = 5)] = "GbEnableVoxHook");
      })(i || (i = {})),
        (function (t) {
          (t.NotAvailable = "NotAvailable"), (t.DemoDoc = "DemoDoc"), (t.EmptyDocument = "EmptyDocument");
        })(r || (r = {})),
        (function (t) {
          (t.NotAvailable = "NotAvailable"), (t.EmptyDocument = "EmptyDocument");
        })(u || (u = {})),
        (function (t) {
          t.NotAvailable = "NotAvailable";
        })(s || (s = {})),
        (function (t) {
          let e;
          !(function (t) {
            (t.default = "default"), (t.priority = "priority");
          })((e = t.LensTitleType || (t.LensTitleType = {}))),
            (t.documentActionAvailable = { kind: "available" }),
            (t.proofitDisabled = (t) => ({ kind: "disabled", reason: t })),
            (t.plagiarismDisabled = (t) => ({ kind: "disabled", reason: t })),
            (t.cheetahDisabled = (t) => ({ kind: "disabled", reason: t }));
          t.Mock = class {
            constructor(n = {}) {
              (this.activeLensId = a.h.create(h.R.SpecialId.AllAlerts).view()),
                (this.documentActions = a.h.create({
                  proofit: t.documentActionAvailable,
                  plagiarism: t.documentActionAvailable,
                  cheetah: t.cheetahDisabled(s.NotAvailable)
                })),
                (this.popover = a.h.create(c.none)),
                (this.showMuteControl = a.h.create(!1)),
                (this.isDocumentActionsDisabled = a.h.create(!1)),
                (this.lensMode = a.h.create(m.z.all)),
                (this.defaultLensMode = m.z.all),
                (this.events = new f.xQ()),
                (this.lensModeEvents = new f.xQ()),
                (this.lensTitleType = e.default),
                (this.dispose = l.Q1),
                (this.a11yContrast = !1),
                (this.cardVisualMode = a.h.create(d.j.CardVisualMode.RegularLightMode));
              const i = new w.c.Mock(n);
              this.lensPreviews = a.h.create(i.lensPreviews);
            }
          };
        })(o || (o = {}));
    },
    86819: function (t, e) {
      var n, i, r;
      void 0 === ArrayBuffer.isView &&
        (ArrayBuffer.isView = function (t) {
          return null != t && null != t.__proto__ && t.__proto__.__proto__ === Int8Array.prototype.__proto__;
        }),
        void 0 === String.prototype.startsWith &&
          Object.defineProperty(String.prototype, "startsWith", {
            value: function (t, e) {
              return (e = e || 0), this.lastIndexOf(t, e) === e;
            }
          }),
        void 0 === Math.imul &&
          (Math.imul = function (t, e) {
            return ((4294901760 & t) * (65535 & e) + (65535 & t) * (0 | e)) | 0;
          }),
        (i = [e]),
        void 0 ===
          (r =
            "function" ==
            typeof (n = function (t) {
              var e,
                n,
                i,
                r,
                u,
                s,
                o,
                a,
                c,
                l,
                h,
                f,
                d,
                w,
                m,
                g,
                _,
                p,
                y,
                v,
                b,
                T,
                x,
                C,
                F,
                S,
                k,
                N,
                $,
                I,
                q,
                D,
                M,
                A,
                E,
                R = Math.imul,
                O = ArrayBuffer.isView;
              function V() {
                var t = Object.create(null);
                return (t.foo = 1), delete t.foo, on(), t;
              }
              function z(t, e, n, i, r, u, s) {
                return (
                  (e = e === E ? ", " : e),
                  (n = n === E ? "" : n),
                  (i = i === E ? "" : i),
                  (r = r === E ? -1 : r),
                  (u = u === E ? "..." : u),
                  (s = s === E ? null : s),
                  G(t, Ei(), e, n, i, r, u, s).toString()
                );
              }
              function P(t) {
                if (0 === t.length) throw Rs("Array is empty.");
                return t[W(t)];
              }
              function j(t) {
                switch (t.length) {
                  case 0:
                    return Dt();
                  case 1:
                    return fn(t[0]);
                  default:
                    return U(t);
                }
              }
              function L(t, e) {
                return H(t, e) >= 0;
              }
              function Z(t) {
                switch (t.length) {
                  case 0:
                    return _e();
                  case 1:
                    return hn(t[0]);
                  default:
                    return B(t, ki(dn(t.length)));
                }
              }
              function Y(t, e) {
                return J(t, e) >= 0;
              }
              function G(t, e, n, i, r, u, s, o) {
                (n = n === E ? ", " : n),
                  (i = i === E ? "" : i),
                  (r = r === E ? "" : r),
                  (u = u === E ? -1 : u),
                  (s = s === E ? "..." : s),
                  (o = o === E ? null : o),
                  e.a(i);
                var a = 0,
                  c = 0,
                  l = t.length;
                t: for (; c < l; ) {
                  var h = t[c];
                  if (((c = (c + 1) | 0), (a = (a + 1) | 0) > 1 && e.a(n), !(u < 0 || a <= u))) break t;
                  De(e, h, o);
                }
                return u >= 0 && a > u && e.a(s), e.a(r), e;
              }
              function W(t) {
                return (t.length - 1) | 0;
              }
              function U(t) {
                return An(Mt(t));
              }
              function H(t, e) {
                if (null == e) {
                  var n = 0,
                    i = (t.length - 1) | 0;
                  if (n <= i)
                    do {
                      var r = n;
                      if (((n = (n + 1) | 0), null == t[r])) return r;
                    } while (n <= i);
                } else {
                  var u = 0,
                    s = (t.length - 1) | 0;
                  if (u <= s)
                    do {
                      var o = u;
                      if (((u = (u + 1) | 0), Kr(e, t[o]))) return o;
                    } while (u <= s);
                }
                return -1;
              }
              function B(t, e) {
                for (var n = 0, i = t.length; n < i; ) {
                  var r = t[n];
                  (n = (n + 1) | 0), e.b(r);
                }
                return e;
              }
              function J(t, e) {
                var n = 0,
                  i = (t.length - 1) | 0;
                if (n <= i)
                  do {
                    var r = n;
                    if (((n = (n + 1) | 0), e === t[r])) return r;
                  } while (n <= i);
                return -1;
              }
              function Q(t, e, n, i, r, u, s) {
                return (
                  (e = e === E ? ", " : e),
                  (n = n === E ? "" : n),
                  (i = i === E ? "" : i),
                  (r = r === E ? -1 : r),
                  (u = u === E ? "..." : u),
                  (s = s === E ? null : s),
                  X(t, Ei(), e, n, i, r, u, s).toString()
                );
              }
              function X(t, e, n, i, r, u, s, o) {
                (n = n === E ? ", " : n),
                  (i = i === E ? "" : i),
                  (r = r === E ? "" : r),
                  (u = u === E ? -1 : u),
                  (s = s === E ? "..." : s),
                  (o = o === E ? null : o),
                  e.a(i);
                var a = 0,
                  c = t.c();
                t: for (; c.d(); ) {
                  var l = c.e();
                  if (((a = (a + 1) | 0) > 1 && e.a(n), !(u < 0 || a <= u))) break t;
                  De(e, l, o);
                }
                return u >= 0 && a > u && e.a(s), e.a(r), e;
              }
              function K(t) {
                if (ts(t, mr)) return tt(t);
                var e = t.c();
                if (!e.d()) throw Rs("Collection is empty.");
                var n = e.e();
                if (e.d()) throw gs("Collection has more than one element.");
                return n;
              }
              function tt(t) {
                var e;
                switch (t.f()) {
                  case 0:
                    throw Rs("List is empty.");
                  case 1:
                    e = t.g(0);
                    break;
                  default:
                    throw gs("List has more than one element.");
                }
                return e;
              }
              function et(t) {
                if (ts(t, gr)) {
                  var e;
                  switch (t.f()) {
                    case 0:
                      e = _e();
                      break;
                    case 1:
                      e = hn(ts(t, mr) ? t.g(0) : t.c().e());
                      break;
                    default:
                      e = it(t, ki(dn(t.f())));
                  }
                  return e;
                }
                return be(it(t, Ci()));
              }
              function nt(t) {
                return new rt(t);
              }
              function it(t, e) {
                for (var n = t.c(); n.d(); ) {
                  var i = n.e();
                  e.b(i);
                }
                return e;
              }
              function rt(t) {
                this.h_1 = t;
              }
              function ut(t, e) {
                return e <= cn().MIN_VALUE ? Se().i_1 : Hu(t, (e - 1) | 0);
              }
              function st(t, e) {
                return t > e ? e : t;
              }
              function ot(t, e) {
                return t < e ? e : t;
              }
              function at(t, e) {
                return Ie().j(t, e, -1);
              }
              function ct(t, e, n) {
                if (e > n) throw gs("Cannot coerce value to an empty range: maximum " + n + " is less than minimum " + e + ".");
                return t < e ? e : t > n ? n : t;
              }
              function lt(t) {
                return new dt(t);
              }
              function ht(t, e) {
                if (!(e >= 0)) throw gs(Jr("Requested element count " + e + " is less than zero."));
                return 0 === e ? ue() : ts(t, se) ? t.k(e) : new ae(t, e);
              }
              function ft(t, e) {
                return new le(t, e);
              }
              function dt(t) {
                this.l_1 = t;
              }
              function wt(t, e) {
                var n = Yt(e),
                  i = null == n ? null : (t.f() + n) | 0,
                  r = ki(dn(null == i ? R(t.f(), 2) : i));
                return r.m(t), ne(r, e), r;
              }
              function mt(t, e) {
                if (!(e >= 0)) throw gs(Jr("Requested character count " + e + " is less than zero."));
                return pt(t, ot((t.length - e) | 0, 0));
              }
              function gt(t) {
                if (0 === Pr(t)) throw Rs("Char sequence is empty.");
                return Vr(t, 0);
              }
              function _t(t) {
                if (0 === Pr(t)) throw Rs("Char sequence is empty.");
                return Vr(t, Ae(t));
              }
              function pt(t, e) {
                if (!(e >= 0)) throw gs(Jr("Requested character count " + e + " is less than zero."));
                var n = st(e, t.length);
                return t.substring(0, n);
              }
              function yt(t) {
                return function (e) {
                  return e === t ? "(this Collection)" : Cr(e);
                };
              }
              function vt() {}
              function bt() {
                e = this;
              }
              function Tt() {
                return null == e && new bt(), e;
              }
              function xt(t, e) {
                return e === t ? "(this Map)" : Cr(e);
              }
              function Ct(t, e) {
                var n;
                t: {
                  for (var i = t.w().c(); i.d(); ) {
                    var r = i.e();
                    if (Kr(r.x(), e)) {
                      n = r;
                      break t;
                    }
                  }
                  n = null;
                }
                return n;
              }
              function Ft() {
                n = this;
              }
              function St() {
                return null == n && new Ft(), n;
              }
              function kt(t) {
                return function (e) {
                  return t.e1(e);
                };
              }
              function Nt() {
                St(), (this.c1_1 = null), (this.d1_1 = null);
              }
              function $t() {
                i = this;
              }
              function It() {
                return null == i && new $t(), i;
              }
              function qt(t) {
                return t.length > 0 ? ds(t) : Dt();
              }
              function Dt() {
                return Et();
              }
              function Mt(t) {
                return new Ot(t, !1);
              }
              function At() {
                (r = this), (this.k1_1 = new mu(-1478467534, -1720727600));
              }
              function Et() {
                return null == r && new At(), r;
              }
              function Rt(t) {
                return Hu(0, (t.f() - 1) | 0);
              }
              function Ot(t, e) {
                (this.n1_1 = t), (this.o1_1 = e);
              }
              function Vt() {
                u = this;
              }
              function zt() {
                return null == u && new Vt(), u;
              }
              function Pt(t) {
                return 0 === t.length ? In() : An(new Ot(t, !0));
              }
              function jt() {
                throw Ws("Index overflow has happened.");
              }
              function Lt(t) {
                return (t.f() - 1) | 0;
              }
              function Zt(t, e) {
                return ts(t, gr) ? t.f() : e;
              }
              function Yt(t) {
                return ts(t, gr) ? t.f() : null;
              }
              function Gt(t) {
                if (ts(t, gr)) {
                  var e;
                  switch (t.f()) {
                    case 0:
                      e = Wt();
                      break;
                    case 1:
                      e = wn(ts(t, mr) ? t.g(0) : t.c().e());
                      break;
                    default:
                      e = Ht(t, yi(dn(t.f())));
                  }
                  return e;
                }
                return Bt(Ht(t, mi()));
              }
              function Wt() {
                var t = Qt();
                return ts(t, pr) ? t : cu();
              }
              function Ut(t) {
                return t.length > 0 ? Xt(t, yi(dn(t.length))) : Wt();
              }
              function Ht(t, e) {
                return Kt(e, t), e;
              }
              function Bt(t) {
                return 0 === t.f() ? Wt() : t;
              }
              function Jt() {
                (s = this), (this.r1_1 = new mu(-888910638, 1920087921));
              }
              function Qt() {
                return null == s && new Jt(), s;
              }
              function Xt(t, e) {
                return te(e, t), e;
              }
              function Kt(t, e) {
                for (var n = e.c(); n.d(); ) {
                  var i = n.e(),
                    r = i.w1(),
                    u = i.x1();
                  t.y1(r, u);
                }
              }
              function te(t, e) {
                for (var n = 0, i = e.length; n < i; ) {
                  var r = e[n];
                  n = (n + 1) | 0;
                  var u = r.w1(),
                    s = r.x1();
                  t.y1(u, s);
                }
              }
              function ee(t) {
                var e = Hn(dn(t.length));
                return te(e, t), e;
              }
              function ne(t, e) {
                if (ts(e, gr)) return t.m(e);
                for (var n = !1, i = e.c(); i.d(); ) {
                  var r = i.e();
                  t.b(r) && (n = !0);
                }
                return n;
              }
              function ie() {}
              function re(t, e) {
                return new de(t, e);
              }
              function ue() {
                return me();
              }
              function se() {}
              function oe(t) {
                (this.a2_1 = t.d2_1), (this.b2_1 = t.c2_1.c());
              }
              function ae(t, e) {
                if (((this.c2_1 = t), (this.d2_1 = e), !(this.d2_1 >= 0)))
                  throw gs(Jr("count must be non-negative, but was " + this.d2_1 + "."));
              }
              function ce(t) {
                (this.f2_1 = t), (this.e2_1 = t.g2_1.c());
              }
              function le(t, e) {
                (this.g2_1 = t), (this.h2_1 = e);
              }
              function he(t) {
                (t.i2_1 = -2 === t.j2_1 ? t.k2_1.l2_1() : t.k2_1.m2_1(su(t.i2_1))), (t.j2_1 = null == t.i2_1 ? 0 : 1);
              }
              function fe(t) {
                (this.k2_1 = t), (this.i2_1 = null), (this.j2_1 = -2);
              }
              function de(t, e) {
                (this.l2_1 = t), (this.m2_1 = e);
              }
              function we() {
                o = this;
              }
              function me() {
                return null == o && new we(), o;
              }
              function ge(t) {
                return t.length > 0 ? Z(t) : _e();
              }
              function _e() {
                return ye();
              }
              function pe() {
                (a = this), (this.n2_1 = new mu(1993859828, 793161749));
              }
              function ye() {
                return null == a && new pe(), a;
              }
              function ve(t) {
                return B(t, Xn(dn(t.length)));
              }
              function be(t) {
                switch (t.f()) {
                  case 0:
                    return _e();
                  case 1:
                    return hn(t.c().e());
                  default:
                    return t;
                }
              }
              function Te(t, e, n) {
                var i;
                if (n > 0) i = t >= e ? e : (e - xe(e, t, n)) | 0;
                else {
                  if (!(n < 0)) throw gs("Step is zero.");
                  i = t <= e ? e : (e + xe(t, e, 0 | -n)) | 0;
                }
                return i;
              }
              function xe(t, e, n) {
                return Ce((Ce(t, n) - Ce(e, n)) | 0, n);
              }
              function Ce(t, e) {
                var n = t % e | 0;
                return n >= 0 ? n : (n + e) | 0;
              }
              function Fe() {
                (c = this), (this.i_1 = new ke(1, 0));
              }
              function Se() {
                return null == c && new Fe(), c;
              }
              function ke(t, e) {
                Se(), qe.call(this, t, e, 1);
              }
              function Ne(t, e, n) {
                ie.call(this),
                  (this.y2_1 = n),
                  (this.z2_1 = e),
                  (this.a3_1 = this.y2_1 > 0 ? t <= e : t >= e),
                  (this.b3_1 = this.a3_1 ? t : this.z2_1);
              }
              function $e() {
                l = this;
              }
              function Ie() {
                return null == l && new $e(), l;
              }
              function qe(t, e, n) {
                if ((Ie(), 0 === n)) throw gs("Step must be non-zero.");
                if (n === cn().MIN_VALUE) throw gs("Step must be greater than Int.MIN_VALUE to avoid overflow on negation.");
                (this.t2_1 = t), (this.u2_1 = Te(t, e, n)), (this.v2_1 = n);
              }
              function De(t, e, n) {
                null != n ? t.a(n(e)) : null == e || rs(e) ? t.a(e) : e instanceof wr ? t.d3(e.c3_1) : t.a(Cr(e));
              }
              function Me(t, e, n) {
                if (t === e) return !0;
                if (!(n = n !== E && n)) return !1;
                var i = Oi(t),
                  r = Oi(e);
                return i === r || Kr(new wr(Vr(hr(i).toLowerCase(), 0)), new wr(Vr(hr(r).toLowerCase(), 0)));
              }
              function Ae(t) {
                return (Pr(t) - 1) | 0;
              }
              function Ee(t, e, n, i) {
                if (((n = n !== E && n), (i = i === E ? 0 : i), 1 === e.length)) {
                  var r = e[0];
                  if (0 !== Pr(r)) return ze(t, r, n, i);
                }
                for (var u = lt(je(t, e, E, n, i)), s = Dn(Zt(u, 10)), o = u.c(); o.d(); ) {
                  var a;
                  (a = Pe(t, o.e())), s.b(a);
                }
                return s;
              }
              function Re(t, e, n) {
                return (n = n !== E && n), "string" == typeof e ? Oe(t, e, E, n) >= 0 : Le(t, e, 0, Pr(t), n) >= 0;
              }
              function Oe(t, e, n, i) {
                return (n = n === E ? 0 : n), (i = i !== E && i) || "string" != typeof t ? Le(t, e, n, Pr(t), i) : t.indexOf(e, n);
              }
              function Ve(t) {
                var e = 0,
                  n = (Pr(t) - 1) | 0,
                  i = !1;
                t: for (; e <= n; ) {
                  var r = Vi(Vr(t, i ? n : e));
                  if (i) {
                    if (!r) break t;
                    n = (n - 1) | 0;
                  } else r ? (e = (e + 1) | 0) : (i = !0);
                }
                return jr(t, e, (n + 1) | 0);
              }
              function ze(t, e, n, i) {
                Ze(i);
                var r = 0,
                  u = Oe(t, e, r, n);
                if (-1 === u || 1 === i) return fn(Jr(t));
                var s,
                  o = i > 0,
                  a = Dn(o ? st(i, 10) : 10);
                t: do {
                  var c;
                  if (((c = Jr(jr(t, r, u))), a.b(c), (r = (u + e.length) | 0), o && a.f() === ((i - 1) | 0))) break t;
                  u = Oe(t, e, r, n);
                } while (-1 !== u);
                return (s = Jr(jr(t, r, Pr(t)))), a.b(s), a;
              }
              function Pe(t, e) {
                return Jr(jr(t, e.s2(), (e.w2() + 1) | 0));
              }
              function je(t, e, n, i, r) {
                return (n = n === E ? 0 : n), (i = i !== E && i), Ze((r = r === E ? 0 : r)), new We(t, n, r, Je(ds(e), i));
              }
              function Le(t, e, n, i, r, u) {
                var s = (u = u !== E && u) ? at(st(n, Ae(t)), ot(i, 0)) : Hu(ot(n, 0), st(i, Pr(t)));
                if ("string" == typeof t && "string" == typeof e) {
                  var o = s.t2_1,
                    a = s.u2_1,
                    c = s.v2_1;
                  if ((c > 0 && o <= a) || (c < 0 && a <= o))
                    do {
                      var l = o;
                      if (((o = (o + c) | 0), nr(e, 0, t, l, Pr(e), r))) return l;
                    } while (l !== a);
                } else {
                  var h = s.t2_1,
                    f = s.u2_1,
                    d = s.v2_1;
                  if ((d > 0 && h <= f) || (d < 0 && f <= h))
                    do {
                      var w = h;
                      if (((h = (h + d) | 0), He(e, 0, t, w, Pr(e), r))) return w;
                    } while (w !== f);
                }
                return -1;
              }
              function Ze(t) {
                var e;
                if (!(t >= 0)) throw gs(Jr("Limit must be non-negative, but was " + t));
                return e;
              }
              function Ye(t) {
                if (t.j3_1 < 0) (t.h3_1 = 0), (t.k3_1 = null);
                else {
                  var e;
                  if (
                    (t.m3_1.p3_1 > 0 ? ((t.l3_1 = (t.l3_1 + 1) | 0), (e = t.l3_1 >= t.m3_1.p3_1)) : (e = !1), e || t.j3_1 > Pr(t.m3_1.n3_1))
                  )
                    (t.k3_1 = Hu(t.i3_1, Ae(t.m3_1.n3_1))), (t.j3_1 = -1);
                  else {
                    var n = t.m3_1.q3_1(t.m3_1.n3_1, t.j3_1);
                    if (null == n) (t.k3_1 = Hu(t.i3_1, Ae(t.m3_1.n3_1))), (t.j3_1 = -1);
                    else {
                      var i = n.w1(),
                        r = n.x1();
                      (t.k3_1 = ut(t.i3_1, i)), (t.i3_1 = (i + r) | 0), (t.j3_1 = (t.i3_1 + (0 === r ? 1 : 0)) | 0);
                    }
                  }
                  t.h3_1 = 1;
                }
              }
              function Ge(t) {
                (this.m3_1 = t),
                  (this.h3_1 = -1),
                  (this.i3_1 = ct(t.o3_1, 0, Pr(t.n3_1))),
                  (this.j3_1 = this.i3_1),
                  (this.k3_1 = null),
                  (this.l3_1 = 0);
              }
              function We(t, e, n, i) {
                (this.n3_1 = t), (this.o3_1 = e), (this.p3_1 = n), (this.q3_1 = i);
              }
              function Ue(t, e, n, i, r) {
                if (!i && 1 === e.f()) {
                  var u = K(e),
                    s = r ? Be(t, u, n) : Oe(t, u, n);
                  return s < 0 ? null : tn(s, u);
                }
                var o = r ? at(st(n, Ae(t)), 0) : Hu(ot(n, 0), Pr(t));
                if ("string" == typeof t) {
                  var a = o.t2_1,
                    c = o.u2_1,
                    l = o.v2_1;
                  if ((l > 0 && a <= c) || (l < 0 && c <= a))
                    do {
                      var h,
                        f = a;
                      a = (a + l) | 0;
                      t: {
                        for (var d = e.c(); d.d(); ) {
                          var w = d.e();
                          if (nr(w, 0, t, f, w.length, i)) {
                            h = w;
                            break t;
                          }
                        }
                        h = null;
                      }
                      if (null != h) return tn(f, h);
                    } while (f !== c);
                } else {
                  var m = o.t2_1,
                    g = o.u2_1,
                    _ = o.v2_1;
                  if ((_ > 0 && m <= g) || (_ < 0 && g <= m))
                    do {
                      var p,
                        y = m;
                      m = (m + _) | 0;
                      t: {
                        for (var v = e.c(); v.d(); ) {
                          var b = v.e();
                          if (He(b, 0, t, y, b.length, i)) {
                            p = b;
                            break t;
                          }
                        }
                        p = null;
                      }
                      if (null != p) return tn(y, p);
                    } while (y !== g);
                }
                return null;
              }
              function He(t, e, n, i, r, u) {
                if (i < 0 || e < 0 || e > ((Pr(t) - r) | 0) || i > ((Pr(n) - r) | 0)) return !1;
                var s = 0;
                if (s < r)
                  do {
                    var o = s;
                    if (((s = (s + 1) | 0), !Me(Vr(t, (e + o) | 0), Vr(n, (i + o) | 0), u))) return !1;
                  } while (s < r);
                return !0;
              }
              function Be(t, e, n, i) {
                return (n = n === E ? Ae(t) : n), (i = i !== E && i) || "string" != typeof t ? Le(t, e, n, 0, i, !0) : t.lastIndexOf(e, n);
              }
              function Je(t, e) {
                return function (n, i) {
                  var r = Ue(n, t, i, e, !1);
                  return null == r ? null : tn(r.u1_1, r.v1_1.length);
                };
              }
              function Qe(t) {
                Vs((t = t === E ? "An operation is not implemented." : t), this), tu(this, Qe);
              }
              function Xe(t, e) {
                (this.u1_1 = t), (this.v1_1 = e);
              }
              function Ke(t, e, n) {
                (this.t3_1 = t), (this.u3_1 = e), (this.v3_1 = n);
              }
              function tn(t, e) {
                return new Xe(t, e);
              }
              function en(t) {
                return t;
              }
              function nn(t) {
                return t;
              }
              function rn() {}
              function un() {}
              function sn() {
                h = this;
              }
              function on() {
                return null == h && new sn(), h;
              }
              function an() {
                (f = this), (this.MIN_VALUE = -2147483648), (this.MAX_VALUE = 2147483647), (this.SIZE_BYTES = 4), (this.SIZE_BITS = 32);
              }
              function cn() {
                return null == f && new an(), f;
              }
              function ln(t) {
                for (var e = [], n = t.c(); n.d(); ) e.push(n.e());
                return e;
              }
              function hn(t) {
                return ve([t]);
              }
              function fn(t) {
                return Pt([t]);
              }
              function dn(t) {
                return t;
              }
              function wn(t) {
                return ee([t]);
              }
              function mn(t) {
                return t < 0 && jt(), t;
              }
              function gn(t) {
                return void 0 !== t.toArray ? t.toArray() : ln(t);
              }
              function _n() {
                vt.call(this);
              }
              function pn(t) {
                (this.g4_1 = t), (this.e4_1 = 0), (this.f4_1 = -1);
              }
              function yn(t, e, n) {
                vn.call(this),
                  (this.i4_1 = t),
                  (this.j4_1 = e),
                  (this.k4_1 = 0),
                  Tt().s(this.j4_1, n, this.i4_1.f()),
                  (this.k4_1 = (n - this.j4_1) | 0);
              }
              function vn() {
                _n.call(this), (this.m4_1 = 0);
              }
              function bn(t) {
                this.o4_1 = t;
              }
              function Tn(t, e) {
                (this.p4_1 = t), (this.q4_1 = e);
              }
              function xn() {
                Sn.call(this);
              }
              function Cn(t) {
                (this.t4_1 = t), Sn.call(this);
              }
              function Fn() {
                Nt.call(this), (this.y4_1 = null), (this.z4_1 = null);
              }
              function Sn() {
                _n.call(this);
              }
              function kn() {
                d = this;
                var t = this,
                  e = Dn(0);
                (e.g3_1 = !0), (t.b5_1 = e);
              }
              function Nn() {
                return null == d && new kn(), d;
              }
              function $n(t) {
                var e;
                return (e = []), Vn.call(t, e), t;
              }
              function In() {
                return $n(iu(eu(Vn)));
              }
              function qn(t, e) {
                var n;
                return (n = []), Vn.call(e, n), e;
              }
              function Dn(t) {
                return qn(t, iu(eu(Vn)));
              }
              function Mn(t, e) {
                var n;
                return (n = gn(t)), Vn.call(e, n), e;
              }
              function An(t) {
                return Mn(t, iu(eu(Vn)));
              }
              function En(t, e) {
                var n = t.f();
                return (t.f3_1.length = (t.f() + e) | 0), n;
              }
              function Rn(t, e) {
                return Tt().q(e, t.f()), e;
              }
              function On(t, e) {
                return Tt().r(e, t.f()), e;
              }
              function Vn(t) {
                Nn(), vn.call(this), (this.f3_1 = t), (this.g3_1 = !1);
              }
              function zn() {
                w = this;
              }
              function Pn() {
                return null == w && new zn(), w;
              }
              function jn(t) {
                (this.f5_1 = t), xn.call(this);
              }
              function Ln(t, e) {
                return Fn.call(e), Bn.call(e), (e.l5_1 = t), (e.m5_1 = t.o5()), e;
              }
              function Zn(t) {
                return Ln(new si(Pn()), t), t;
              }
              function Yn() {
                return Zn(iu(eu(Bn)));
              }
              function Gn(t, e, n) {
                if ((Zn(n), !(t >= 0))) throw gs(Jr("Negative initial capacity: " + t));
                if (!(e >= 0)) throw gs(Jr("Non-positive load factor: " + e));
                return n;
              }
              function Wn(t, e) {
                return Gn(t, e, iu(eu(Bn)));
              }
              function Un(t, e) {
                return Gn(t, 0, e), e;
              }
              function Hn(t) {
                return Un(t, iu(eu(Bn)));
              }
              function Bn() {
                this.n5_1 = null;
              }
              function Jn(t, e, n) {
                return Sn.call(n), ti.call(n), (n.q5_1 = Wn(t, e)), n;
              }
              function Qn(t, e) {
                return Jn(t, 0, e), e;
              }
              function Xn(t) {
                return Qn(t, iu(eu(ti)));
              }
              function Kn(t, e) {
                return Sn.call(e), ti.call(e), (e.q5_1 = t), e;
              }
              function ti() {}
              function ei(t) {
                if (null != t.u5_1 && t.v5_1) {
                  var e = t.u5_1.length;
                  if (((t.w5_1 = (t.w5_1 + 1) | 0), t.w5_1 < e)) return 0;
                }
                if (((t.t5_1 = (t.t5_1 + 1) | 0), t.t5_1 < t.s5_1.length)) {
                  t.u5_1 = t.y5_1.a6_1[t.s5_1[t.t5_1]];
                  var n = t,
                    i = t.u5_1;
                  return (n.v5_1 = null != i && ns(i)), (t.w5_1 = 0), 0;
                }
                return (t.u5_1 = null), 1;
              }
              function ni(t, e) {
                var n = ri(t, t.z5_1.e5(e));
                if (null == n) return null;
                var i = n;
                if (null != i && ns(i)) return ii(i, t, e);
                var r = i;
                return t.z5_1.d5(r.x(), e) ? r : null;
              }
              function ii(t, e, n) {
                var i;
                t: {
                  for (var r = 0, u = t.length; r < u; ) {
                    var s = t[r];
                    if (((r = (r + 1) | 0), e.z5_1.d5(s.x(), n))) {
                      i = s;
                      break t;
                    }
                  }
                  i = null;
                }
                return i;
              }
              function ri(t, e) {
                var n = t.a6_1[e];
                return void 0 === n ? null : n;
              }
              function ui(t) {
                (this.y5_1 = t),
                  (this.r5_1 = -1),
                  (this.s5_1 = Object.keys(t.a6_1)),
                  (this.t5_1 = -1),
                  (this.u5_1 = null),
                  (this.v5_1 = !1),
                  (this.w5_1 = -1),
                  (this.x5_1 = null);
              }
              function si(t) {
                (this.z5_1 = t), (this.a6_1 = this.c6()), (this.b6_1 = 0);
              }
              function oi() {}
              function ai(t) {
                (this.f6_1 = t), (this.d6_1 = null), (this.e6_1 = null), (this.e6_1 = this.f6_1.q6_1.n6_1);
              }
              function ci() {
                m = this;
                var t = this,
                  e = yi(0);
                (e.p6_1 = !0), (t.w6_1 = e);
              }
              function li() {
                return null == m && new ci(), m;
              }
              function hi(t, e, n) {
                (this.v6_1 = t), Tn.call(this, e, n), (this.t6_1 = null), (this.u6_1 = null);
              }
              function fi(t) {
                (this.q6_1 = t), xn.call(this);
              }
              function di(t, e) {
                if (null != t.t6_1 || null != t.u6_1) throw Cs(Jr("Check failed."));
                var n = e.n6_1;
                if (null == n) (e.n6_1 = t), (t.t6_1 = t), (t.u6_1 = t);
                else {
                  var i = n.u6_1;
                  if (null == i) throw Cs(Jr("Required value was null."));
                  var r = i;
                  (t.u6_1 = r), (t.t6_1 = n), (n.u6_1 = t), (r.t6_1 = t);
                }
              }
              function wi(t) {
                return Zn(t), vi.call(t), (t.o6_1 = Yn()), t;
              }
              function mi() {
                return wi(iu(eu(vi)));
              }
              function gi(t, e, n) {
                return Gn(t, e, n), vi.call(n), (n.o6_1 = Yn()), n;
              }
              function _i(t, e) {
                return gi(t, e, iu(eu(vi)));
              }
              function pi(t, e) {
                return gi(t, 0, e), e;
              }
              function yi(t) {
                return pi(t, iu(eu(vi)));
              }
              function vi() {
                li(), (this.n6_1 = null), (this.p6_1 = !1);
              }
              function bi() {
                g = this;
                var t = this,
                  e = ki(0),
                  n = e.q5_1;
                (n instanceof vi ? n : cu()).x6(), (t.y6_1 = e);
              }
              function Ti() {
                return null == g && new bi(), g;
              }
              function xi(t) {
                return Kn(mi(), t), Ni.call(t), t;
              }
              function Ci() {
                return xi(iu(eu(Ni)));
              }
              function Fi(t, e, n) {
                return Kn(_i(t, e), n), Ni.call(n), n;
              }
              function Si(t, e) {
                return Fi(t, 0, e), e;
              }
              function ki(t) {
                return Si(t, iu(eu(Ni)));
              }
              function Ni() {
                Ti();
              }
              function $i(t) {
                return t < 0 ? 0 | -t : t;
              }
              function Ii(t) {
                return !(t == t);
              }
              function qi(t) {
                t.lastIndex = 0;
              }
              function Di(t, e) {
                return Ai(e), e;
              }
              function Mi(t) {
                return Di(t, iu(eu(Ri)));
              }
              function Ai(t) {
                return Ri.call(t, ""), t;
              }
              function Ei() {
                return Ai(iu(eu(Ri)));
              }
              function Ri(t) {
                this.a7_1 = void 0 !== t ? t : "";
              }
              function Oi(t) {
                var e = hr(t).toUpperCase();
                return e.length > 1 ? t : Vr(e, 0);
              }
              function Vi(t) {
                return ws(t);
              }
              function zi(t, e) {
                return Gi.call(e, t, _e()), e;
              }
              function Pi(t) {
                return zi(t, iu(eu(Gi)));
              }
              function ji() {
                (_ = this),
                  (this.d7_1 = new RegExp("[\\\\^$*+?.()|[\\]{}]", "g")),
                  (this.e7_1 = new RegExp("[\\\\$]", "g")),
                  (this.f7_1 = new RegExp("\\$", "g"));
              }
              function Li() {
                return null == _ && new ji(), _;
              }
              function Zi(t, e, n) {
                return function () {
                  return t.n7(e, n);
                };
              }
              function Yi(t) {
                return t.e();
              }
              function Gi(t, e) {
                Li(),
                  (this.i7_1 = t),
                  (this.j7_1 = et(e)),
                  (this.k7_1 = new RegExp(t, Wi(e, "gu"))),
                  (this.l7_1 = null),
                  (this.m7_1 = null);
              }
              function Wi(t, e) {
                return Q(t, "", e, E, E, E, Bi);
              }
              function Ui(t, e, n, i) {
                t.lastIndex = n;
                var r = t.exec(e);
                return null == r ? null : new Ki(Hu(r.index, (t.lastIndex - 1) | 0), r, i, e);
              }
              function Hi(t) {
                this.v7_1 = t;
              }
              function Bi(t) {
                return t.y7_1;
              }
              function Ji(t) {
                return function (e) {
                  return t.g(e);
                };
              }
              function Qi(t, e) {
                if (e < Ae(t.h8_1)) {
                  var n = t.h8_1.charCodeAt(e);
                  if (55296 <= n && n <= 56319) {
                    var i = t.h8_1.charCodeAt((e + 1) | 0);
                    if (56320 <= i && i <= 57343) return (e + 2) | 0;
                  }
                }
                return (e + 1) | 0;
              }
              function Xi(t, e) {
                (this.z7_1 = t), (this.a8_1 = e), vt.call(this);
              }
              function Ki(t, e, n, i) {
                (this.e8_1 = t),
                  (this.f8_1 = e),
                  (this.g8_1 = n),
                  (this.h8_1 = i),
                  (this.b8_1 = t),
                  (this.c8_1 = new Xi(e, this)),
                  (this.d8_1 = null);
              }
              function tr(t, e, n) {
                return (n = n !== E && n) ? nr(t, 0, e, 0, e.length, n) : t.startsWith(e, 0);
              }
              function er(t, e, n, i) {
                i = i !== E && i;
                var r = new RegExp(Li().g7(e), i ? "gui" : "gu"),
                  u = Li().h7(n);
                return t.replace(r, u);
              }
              function nr(t, e, n, i, r, u) {
                return He(t, e, n, i, r, (u = u !== E && u));
              }
              function ir(t) {
                return t;
              }
              function rr(t) {
                return t;
              }
              function ur(t) {
                return ir(65535 & nn(t));
              }
              function sr(t, e) {
                return (rr(t) - rr(e)) | 0;
              }
              function or(t, e) {
                return sr(t.c3_1, e instanceof wr ? e.c3_1 : cu());
              }
              function ar(t) {
                return rr(t);
              }
              function cr(t, e) {
                return e instanceof wr && rr(t) === rr(e.c3_1);
              }
              function lr(t) {
                return rr(t);
              }
              function hr(t) {
                return String.fromCharCode(rr(t));
              }
              function fr() {
                (p = this),
                  (this.i8_1 = ir(0)),
                  (this.j8_1 = ir(65535)),
                  (this.k8_1 = ir(55296)),
                  (this.l8_1 = ir(56319)),
                  (this.m8_1 = ir(56320)),
                  (this.n8_1 = ir(57343)),
                  (this.o8_1 = ir(55296)),
                  (this.p8_1 = ir(57343)),
                  (this.q8_1 = 2),
                  (this.r8_1 = 16);
              }
              function dr() {
                return null == p && new fr(), p;
              }
              function wr(t) {
                dr(), (this.c3_1 = t);
              }
              function mr() {}
              function gr() {}
              function _r() {}
              function pr() {}
              function yr() {}
              function vr() {}
              function br() {
                y = this;
              }
              function Tr() {
                return null == y && new br(), y;
              }
              function xr(t, e) {
                Tr(), (this.u8_1 = t), (this.v8_1 = e);
              }
              function Cr(t) {
                var e = null == t ? null : Jr(t);
                return null == e ? "null" : e;
              }
              function Fr(t) {
                for (var e = 1, n = [], i = 0, r = t.length; i < r; ) {
                  var u = t[i];
                  i = (i + 1) | 0;
                  var s = e,
                    o = u.prototype.$imask$,
                    a = null == o ? u.$imask$ : o;
                  null != a && (n.push(a), (s = a.length));
                  var c = u.$metadata$.iid,
                    l = null == c ? null : Sr(c);
                  null != l && (n.push(l), (s = Math.max(s, l.length))), s > e && (e = s);
                }
                return kr(e, n);
              }
              function Sr(t) {
                var e = new Int32Array((1 + (t >> 5)) | 0),
                  n = t >> 5,
                  i = 1 << (31 & t);
                return (e[n] = e[n] | i), e;
              }
              function kr(t, e) {
                for (var n = 0, i = new Int32Array(t); n < t; ) {
                  for (var r = n, u = 0, s = 0, o = e.length; s < o; ) {
                    var a = e[s];
                    (s = (s + 1) | 0), r < a.length && (u |= a[r]);
                  }
                  (i[r] = u), (n = (n + 1) | 0);
                }
                return i;
              }
              function Nr(t, e) {
                var n = e >> 5;
                if (n > t.length) return !1;
                var i = 1 << (31 & e);
                return !(0 == (t[n] & i));
              }
              function $r(t) {
                return new Ir(t);
              }
              function Ir(t) {
                (this.a9_1 = t), (this.z8_1 = 0);
              }
              function qr() {
                return Or(), v;
              }
              function Dr() {
                return Or(), b;
              }
              function Mr() {
                return Or(), T;
              }
              function Ar() {
                return Or(), x;
              }
              function Er() {
                return Or(), C;
              }
              function Rr(t) {
                return Or(), (0 | t) === t ? Yu(t) : ((Dr()[0] = t), (R(Mr()[Er()], 31) + Mr()[Ar()]) | 0);
              }
              function Or() {
                F ||
                  ((F = !0),
                  (v = new ArrayBuffer(8)),
                  (b = new Float64Array(qr())),
                  new Float32Array(qr()),
                  (T = new Int32Array(qr())),
                  (Dr()[0] = -1),
                  (x = 0 !== Mr()[0] ? 1 : 0),
                  (C = (1 - Ar()) | 0));
              }
              function Vr(t, e) {
                var n;
                if (zr(t)) {
                  var i,
                    r = t.charCodeAt(e);
                  if ((dr(), r < ar(ir(0)) ? (i = !0) : (dr(), (i = r > ar(ir(65535)))), i)) throw gs("Invalid Char code: " + r);
                  n = Uu(r);
                } else n = t.x3(e);
                return n;
              }
              function zr(t) {
                return "string" == typeof t;
              }
              function Pr(t) {
                return zr(t) ? t.length : t.w3();
              }
              function jr(t, e, n) {
                return zr(t) ? t.substring(e, n) : t.y3(e, n);
              }
              function Lr(t) {
                return z(t, ", ", "[", "]", E, E, Zr);
              }
              function Zr(t) {
                return Jr(t);
              }
              function Yr(t, e) {
                var n;
                switch (typeof t) {
                  case "number":
                    n = "number" == typeof e ? Gr(t, e) : e instanceof mu ? Gr(t, e.d9()) : Wr(t, e);
                    break;
                  case "string":
                  case "boolean":
                    n = Wr(t, e);
                    break;
                  default:
                    n = Ur(t, e);
                }
                return n;
              }
              function Gr(t, e) {
                var n;
                if (t < e) n = -1;
                else if (t > e) n = 1;
                else if (t === e) {
                  var i;
                  if (0 !== t) i = 0;
                  else {
                    var r = 1 / t;
                    i = r === 1 / e ? 0 : r < 0 ? -1 : 1;
                  }
                  n = i;
                } else n = t != t ? (e != e ? 0 : 1) : -1;
                return n;
              }
              function Wr(t, e) {
                return t < e ? -1 : t > e ? 1 : 0;
              }
              function Ur(t, e) {
                return t.t8(e);
              }
              function Hr(t) {
                return Br(t);
              }
              function Br(t) {
                if (!("kotlinHashCodeValue$" in t)) {
                  var e = (4294967296 * Math.random()) | 0,
                    n = new Object();
                  (n.value = e), (n.enumerable = !1), Object.defineProperty(t, "kotlinHashCodeValue$", n);
                }
                return t.kotlinHashCodeValue$;
              }
              function Jr(t) {
                return null == t ? "null" : Qu(t) ? "[...]" : t.toString();
              }
              function Qr(t) {
                if (null == t) return 0;
                var e;
                switch (typeof t) {
                  case "object":
                    e = "function" == typeof t.hashCode ? t.hashCode() : Br(t);
                    break;
                  case "function":
                    e = Br(t);
                    break;
                  case "number":
                    e = Rr(t);
                    break;
                  case "boolean":
                    e = t ? 1 : 0;
                    break;
                  default:
                    e = Xr(String(t));
                }
                return e;
              }
              function Xr(t) {
                var e = 0,
                  n = 0,
                  i = (t.length - 1) | 0;
                if (n <= i)
                  do {
                    var r = n;
                    n = (n + 1) | 0;
                    var u = t.charCodeAt(r);
                    e = (R(e, 31) + u) | 0;
                  } while (r !== i);
                return e;
              }
              function Kr(t, e) {
                if (null == t) return null == e;
                if (null == e) return !1;
                if ("object" == typeof t && "function" == typeof t.equals) return t.equals(e);
                if (t != t) return e != e;
                if ("number" == typeof t && "number" == typeof e) {
                  var n;
                  if (t === e) n = 0 !== t || 1 / t == 1 / e;
                  else n = !1;
                  return n;
                }
                return t === e;
              }
              function tu(t, e) {
                null != Error.captureStackTrace ? Error.captureStackTrace(t, e) : (t.stack = new Error().stack);
              }
              function eu(t) {
                return t.prototype;
              }
              function nu(t, e, n, i) {
                return Object.defineProperty(t, e, { configurable: !0, get: n, set: i });
              }
              function iu(t) {
                return Object.create(t);
              }
              function ru(t, e, n) {
                Error.call(t), uu(t, e, n);
              }
              function uu(t, e, n) {
                var i = cs(Object.getPrototypeOf(t));
                if (0 == (1 & i)) {
                  var r;
                  if (null == e) {
                    var u;
                    if (null !== e) {
                      var s = null == n ? null : n.toString();
                      u = null == s ? E : s;
                    } else u = E;
                    r = u;
                  } else r = e;
                  t.message = r;
                }
                0 == (2 & i) && (t.cause = n), (t.name = Object.getPrototypeOf(t).constructor.name);
              }
              function su(t) {
                var e;
                return null == t ? ou() : (e = t), e;
              }
              function ou() {
                throw Bs();
              }
              function au() {
                throw Xs();
              }
              function cu() {
                throw eo();
              }
              function lu(t) {
                throw ro("lateinit property " + t + " has not been initialized");
              }
              function hu() {
                throw Ts();
              }
              function fu(t, e) {
                var n = t.slice();
                (n.length = (n.length + e.f()) | 0), void 0 !== t.$type$ && (n.$type$ = t.$type$);
                for (var i = t.length, r = e.c(); r.d(); ) {
                  var u = r.e(),
                    s = i;
                  (i = (s + 1) | 0), (n[s] = u);
                }
                return n;
              }
              function du() {
                (S = this), (this.e9_1 = new mu(0, -2147483648)), (this.f9_1 = new mu(-1, 2147483647)), (this.g9_1 = 8), (this.h9_1 = 64);
              }
              function wu() {
                return null == S && new du(), S;
              }
              function mu(t, e) {
                wu(), un.call(this), (this.b9_1 = t), (this.c9_1 = e);
              }
              function gu() {
                return Zu(), k;
              }
              function _u() {
                return Zu(), N;
              }
              function pu() {
                return Zu(), $;
              }
              function yu() {
                return Zu(), I;
              }
              function vu() {
                return Zu(), q;
              }
              function bu() {
                return Zu(), D;
              }
              function Tu(t, e) {
                if ((Zu(), Iu(t, e))) return 0;
                var n = Au(t),
                  i = Au(e);
                return n && !i ? -1 : !n && i ? 1 : Au(Cu(t, e)) ? -1 : 1;
              }
              function xu(t, e) {
                Zu();
                var n = (t.c9_1 >>> 16) | 0,
                  i = 65535 & t.c9_1,
                  r = (t.b9_1 >>> 16) | 0,
                  u = 65535 & t.b9_1,
                  s = (e.c9_1 >>> 16) | 0,
                  o = 65535 & e.c9_1,
                  a = (e.b9_1 >>> 16) | 0,
                  c = 0,
                  l = 0,
                  h = 0,
                  f = 0;
                return (
                  (c =
                    ((c =
                      (c +
                        (((l =
                          ((l =
                            (l +
                              (((h = ((h = (h + (((f = (f + ((u + (65535 & e.b9_1)) | 0)) | 0) >>> 16) | 0)) | 0) + ((r + a) | 0)) | 0) >>>
                                16) |
                                0)) |
                            0) +
                            ((i + o) | 0)) |
                          0) >>>
                          16) |
                          0)) |
                      0) +
                      ((n + s) | 0)) |
                    0),
                  new mu(((h &= 65535) << 16) | (f &= 65535), ((c &= 65535) << 16) | (l &= 65535))
                );
              }
              function Cu(t, e) {
                return Zu(), xu(t, e.l9());
              }
              function Fu(t, e) {
                if ((Zu(), Eu(t))) return gu();
                if (Eu(e)) return gu();
                if (Iu(t, vu())) return Ru(e) ? vu() : gu();
                if (Iu(e, vu())) return Ru(t) ? vu() : gu();
                if (Au(t)) return Au(e) ? Fu(Ou(t), Ou(e)) : Ou(Fu(Ou(t), e));
                if (Au(e)) return Ou(Fu(t, Ou(e)));
                if (Vu(t, bu()) && Vu(e, bu())) return zu($u(t) * $u(e));
                var n = (t.c9_1 >>> 16) | 0,
                  i = 65535 & t.c9_1,
                  r = (t.b9_1 >>> 16) | 0,
                  u = 65535 & t.b9_1,
                  s = (e.c9_1 >>> 16) | 0,
                  o = 65535 & e.c9_1,
                  a = (e.b9_1 >>> 16) | 0,
                  c = 65535 & e.b9_1,
                  l = 0,
                  h = 0,
                  f = 0,
                  d = 0;
                return (
                  (f = (f + (((d = (d + R(u, c)) | 0) >>> 16) | 0)) | 0),
                  (d &= 65535),
                  (h = ((h = (h + (((f = (f + R(r, c)) | 0) >>> 16) | 0)) | 0) + (((f = ((f &= 65535) + R(u, a)) | 0) >>> 16) | 0)) | 0),
                  (f &= 65535),
                  (l =
                    ((l =
                      ((l = (l + (((h = (h + R(i, c)) | 0) >>> 16) | 0)) | 0) + (((h = ((h &= 65535) + R(r, a)) | 0) >>> 16) | 0)) | 0) +
                      (((h = ((h &= 65535) + R(u, o)) | 0) >>> 16) | 0)) |
                    0),
                  (h &= 65535),
                  (l = (l + ((((((R(n, c) + R(i, a)) | 0) + R(r, o)) | 0) + R(u, s)) | 0)) | 0),
                  new mu((f << 16) | d, ((l &= 65535) << 16) | h)
                );
              }
              function Su(t, e) {
                if ((Zu(), Eu(e))) throw Ns("division by zero");
                if (Eu(t)) return gu();
                if (Iu(t, vu())) {
                  if (Iu(e, _u()) || Iu(e, pu())) return vu();
                  if (Iu(e, vu())) return _u();
                  var n = ku(Nu(t, 1).k9(e), 1);
                  return Iu(n, gu()) ? (Au(e) ? _u() : pu()) : xu(n, Cu(t, Fu(e, n)).k9(e));
                }
                if (Iu(e, vu())) return gu();
                if (Au(t)) return Au(e) ? Ou(t).k9(Ou(e)) : Ou(Ou(t).k9(e));
                if (Au(e)) return Ou(t.k9(Ou(e)));
                for (var i = gu(), r = t; ju(r, e); ) {
                  for (
                    var u = $u(r) / $u(e),
                      s = Math.max(1, Math.floor(u)),
                      o = Math.ceil(Math.log(s) / Math.LN2),
                      a = o <= 48 ? 1 : Math.pow(2, o - 48),
                      c = zu(s),
                      l = Fu(c, e);
                    Au(l) || Pu(l, r);

                  )
                    l = Fu((c = zu((s -= a))), e);
                  Eu(c) && (c = _u()), (i = xu(i, c)), (r = Cu(r, l));
                }
                return i;
              }
              function ku(t, e) {
                Zu();
                var n = 63 & e;
                return 0 === n
                  ? t
                  : n < 32
                  ? new mu(t.b9_1 << n, (t.c9_1 << n) | (t.b9_1 >>> ((32 - n) | 0)) | 0)
                  : new mu(0, t.b9_1 << ((n - 32) | 0));
              }
              function Nu(t, e) {
                Zu();
                var n = 63 & e;
                return 0 === n
                  ? t
                  : n < 32
                  ? new mu((t.b9_1 >>> n) | 0 | (t.c9_1 << ((32 - n) | 0)), t.c9_1 >> n)
                  : new mu(t.c9_1 >> ((n - 32) | 0), t.c9_1 >= 0 ? 0 : -1);
              }
              function $u(t) {
                return Zu(), 4294967296 * t.c9_1 + Lu(t);
              }
              function Iu(t, e) {
                return Zu(), t.c9_1 === e.c9_1 && t.b9_1 === e.b9_1;
              }
              function qu(t) {
                return Zu(), t.b9_1 ^ t.c9_1;
              }
              function Du(t, e) {
                if ((Zu(), e < 2 || 36 < e)) throw Ns("radix out of range: " + e);
                if (Eu(t)) return "0";
                if (Au(t)) {
                  if (Iu(t, vu())) {
                    var n = Mu(e),
                      i = t.k9(n),
                      r = Cu(Fu(i, n), t).n9();
                    return Du(i, e) + r.toString(e);
                  }
                  return "-" + Du(Ou(t), e);
                }
                for (var u = 2 === e ? 31 : e <= 10 ? 9 : e <= 21 ? 7 : e <= 35 ? 6 : 5, s = zu(Math.pow(e, u)), o = t, a = ""; ; ) {
                  var c = o.k9(s),
                    l = Cu(o, Fu(c, s)).n9().toString(e);
                  if (Eu((o = c))) return l + a;
                  for (; l.length < u; ) l = "0" + l;
                  a = l + a;
                }
              }
              function Mu(t) {
                return Zu(), new mu(t, t < 0 ? -1 : 0);
              }
              function Au(t) {
                return Zu(), t.c9_1 < 0;
              }
              function Eu(t) {
                return Zu(), 0 === t.c9_1 && 0 === t.b9_1;
              }
              function Ru(t) {
                return Zu(), 1 == (1 & t.b9_1);
              }
              function Ou(t) {
                return Zu(), t.l9();
              }
              function Vu(t, e) {
                return Zu(), Tu(t, e) < 0;
              }
              function zu(t) {
                if ((Zu(), Ii(t))) return gu();
                if (t <= -0x8000000000000000) return vu();
                if (t + 1 >= 0x8000000000000000) return yu();
                if (t < 0) return Ou(zu(-t));
                var e = 4294967296;
                return new mu(t % e | 0, (t / e) | 0);
              }
              function Pu(t, e) {
                return Zu(), Tu(t, e) > 0;
              }
              function ju(t, e) {
                return Zu(), Tu(t, e) >= 0;
              }
              function Lu(t) {
                return Zu(), t.b9_1 >= 0 ? t.b9_1 : 4294967296 + t.b9_1;
              }
              function Zu() {
                M ||
                  ((M = !0),
                  (k = Mu(0)),
                  (N = Mu(1)),
                  ($ = Mu(-1)),
                  (I = new mu(-1, 2147483647)),
                  (q = new mu(0, -2147483648)),
                  (D = Mu(16777216)));
              }
              function Yu(t) {
                return t instanceof mu ? t.n9() : Gu(t);
              }
              function Gu(t) {
                return t > 2147483647 ? 2147483647 : t < -2147483648 ? -2147483648 : 0 | t;
              }
              function Wu(t) {
                return (t << 16) >> 16;
              }
              function Uu(t) {
                return ur(en(Wu(Yu(t))));
              }
              function Hu(t, e) {
                return new ke(t, e);
              }
              function Bu(t, e, n, i) {
                return Ju("class", t, e, n, i, null);
              }
              function Ju(t, e, n, i, r, u) {
                return { kind: t, simpleName: e, associatedObjectKey: n, associatedObjects: i, suspendArity: r, $kClass$: E, iid: u };
              }
              function Qu(t) {
                return !!Xu(t) || O(t);
              }
              function Xu(t) {
                return Array.isArray(t);
              }
              function Ku(t, e, n, i, r, u, s, o) {
                null != i && ((t.prototype = Object.create(i.prototype)), (t.prototype.constructor = t));
                var a = n(e, u, s, null == o ? [] : o);
                (t.$metadata$ = a), null != r && ((null != a.iid ? t : t.prototype).$imask$ = Fr(r));
              }
              function ts(t, e) {
                return es(t, e.$metadata$.iid);
              }
              function es(t, e) {
                var n = t.$imask$;
                return null != n && Nr(n, e);
              }
              function ns(t) {
                return !!Xu(t) && !t.$type$;
              }
              function is(t) {
                var e;
                switch (typeof t) {
                  case "string":
                  case "number":
                  case "boolean":
                  case "function":
                    e = !0;
                    break;
                  default:
                    e = t instanceof Object;
                }
                return e;
              }
              function rs(t) {
                return "string" == typeof t || ts(t, rn);
              }
              function us(t, e, n, i) {
                return Ju("interface", t, e, n, i, ss());
              }
              function ss() {
                return null == A && (A = 0), (A = (os() + 1) | 0), os();
              }
              function os() {
                if (null != A) return A;
                lu("iid");
              }
              function as(t, e, n, i) {
                return Ju("object", t, e, n, i, null);
              }
              function cs(t) {
                var e = t.constructor,
                  n = null == e ? null : e.$metadata$,
                  i = null == n ? null : n.errorInfo;
                if (null != i) return i;
                var r = 0;
                if ((ls(t, "message") && (r |= 1), ls(t, "cause") && (r |= 2), 3 !== r)) {
                  var u = hs(t);
                  u != Error.prototype && (r |= cs(u));
                }
                return null != n && (n.errorInfo = r), r;
              }
              function ls(t, e) {
                return t.hasOwnProperty(e);
              }
              function hs(t) {
                return Object.getPrototypeOf(t);
              }
              function fs(t, e) {
                return fu(t, e);
              }
              function ds(t) {
                return new Vn(t);
              }
              function ws(t) {
                var e = ar(t);
                return (
                  (9 <= e && e <= 13) ||
                  (28 <= e && e <= 32) ||
                  160 === e ||
                  (e > 4096 &&
                    (5760 === e || (8192 <= e && e <= 8202) || 8232 === e || 8233 === e || 8239 === e || 8287 === e || 12288 === e))
                );
              }
              function ms(t, e) {
                return qs(t, e), _s.call(e), e;
              }
              function gs(t) {
                var e = ms(t, iu(eu(_s)));
                return tu(e, gs), e;
              }
              function _s() {
                tu(this, _s);
              }
              function ps(t, e) {
                return qs(t, e), vs.call(e), e;
              }
              function ys(t) {
                var e = ps(t, iu(eu(vs)));
                return tu(e, ys), e;
              }
              function vs() {
                tu(this, vs);
              }
              function bs(t) {
                return Is(t), Fs.call(t), t;
              }
              function Ts() {
                var t = bs(iu(eu(Fs)));
                return tu(t, Ts), t;
              }
              function xs(t, e) {
                return qs(t, e), Fs.call(e), e;
              }
              function Cs(t) {
                var e = xs(t, iu(eu(Fs)));
                return tu(e, Cs), e;
              }
              function Fs() {
                tu(this, Fs);
              }
              function Ss(t) {
                return ru(t), $s.call(t), t;
              }
              function ks(t, e) {
                return ru(e, t), $s.call(e), e;
              }
              function Ns(t) {
                var e = ks(t, iu(eu($s)));
                return tu(e, Ns), e;
              }
              function $s() {
                tu(this, $s);
              }
              function Is(t) {
                return Ss(t), Ds.call(t), t;
              }
              function qs(t, e) {
                return ks(t, e), Ds.call(e), e;
              }
              function Ds() {
                tu(this, Ds);
              }
              function Ms(t) {
                return Is(t), Os.call(t), t;
              }
              function As() {
                var t = Ms(iu(eu(Os)));
                return tu(t, As), t;
              }
              function Es(t, e) {
                return qs(t, e), Os.call(e), e;
              }
              function Rs(t) {
                var e = Es(t, iu(eu(Os)));
                return tu(e, Rs), e;
              }
              function Os() {
                tu(this, Os);
              }
              function Vs(t, e) {
                return ru(e, t), zs.call(e), e;
              }
              function zs() {
                tu(this, zs);
              }
              function Ps(t) {
                return Is(t), Ys.call(t), t;
              }
              function js() {
                var t = Ps(iu(eu(Ys)));
                return tu(t, js), t;
              }
              function Ls(t, e) {
                return qs(t, e), Ys.call(e), e;
              }
              function Zs(t) {
                var e = Ls(t, iu(eu(Ys)));
                return tu(e, Zs), e;
              }
              function Ys() {
                tu(this, Ys);
              }
              function Gs(t, e) {
                return qs(t, e), Us.call(e), e;
              }
              function Ws(t) {
                var e = Gs(t, iu(eu(Us)));
                return tu(e, Ws), e;
              }
              function Us() {
                tu(this, Us);
              }
              function Hs(t) {
                return Is(t), Js.call(t), t;
              }
              function Bs() {
                var t = Hs(iu(eu(Js)));
                return tu(t, Bs), t;
              }
              function Js() {
                tu(this, Js);
              }
              function Qs(t) {
                return Is(t), Ks.call(t), t;
              }
              function Xs() {
                var t = Qs(iu(eu(Ks)));
                return tu(t, Xs), t;
              }
              function Ks() {
                tu(this, Ks);
              }
              function to(t) {
                return Is(t), no.call(t), t;
              }
              function eo() {
                var t = to(iu(eu(no)));
                return tu(t, eo), t;
              }
              function no() {
                tu(this, no);
              }
              function io(t, e) {
                return qs(t, e), uo.call(e), e;
              }
              function ro(t) {
                var e = io(t, iu(eu(uo)));
                return tu(e, ro), e;
              }
              function uo() {
                tu(this, uo);
              }
              return (
                Ku(rt, E, Bu),
                Ku(dt, E, Bu),
                Ku(gr, "Collection", us),
                Ku(vt, "AbstractCollection", Bu, E, [gr]),
                Ku(bt, "Companion", as),
                Ku(Ft, "Companion", as),
                Ku(pr, "Map", us),
                Ku(Nt, "AbstractMap", Bu, E, [pr]),
                Ku($t, "Companion", as),
                Ku(mr, "List", us, E, [gr]),
                Ku(At, "EmptyList", as, E, [mr]),
                Ku(Ot, "ArrayAsCollection", Bu, E, [gr]),
                Ku(Vt, "EmptyIterator", as),
                Ku(Jt, "EmptyMap", as, E, [pr]),
                Ku(ie, "IntIterator", Bu),
                Ku(se, "DropTakeSequence", us),
                Ku(oe, E, Bu),
                Ku(ae, "TakeSequence", Bu, E, [se]),
                Ku(ce, E, Bu),
                Ku(le, "TransformingSequence", Bu),
                Ku(fe, E, Bu),
                Ku(de, "GeneratorSequence", Bu),
                Ku(we, "EmptySequence", as, E, [se]),
                Ku(yr, "Set", us, E, [gr]),
                Ku(pe, "EmptySet", as, E, [yr]),
                Ku(Fe, "Companion", as),
                Ku(qe, "IntProgression", Bu),
                Ku(ke, "IntRange", Bu, qe),
                Ku(Ne, "IntProgressionIterator", Bu, ie),
                Ku($e, "Companion", as),
                Ku(Ge, E, Bu),
                Ku(We, "DelimitedRangesSequence", Bu),
                Ku(zs, "Error", Bu, Error),
                Ku(Qe, "NotImplementedError", Bu, zs),
                Ku(Xe, "Pair", Bu),
                Ku(Ke, "Triple", Bu),
                Ku(rn, "CharSequence", us),
                Ku(un, "Number", Bu),
                Ku(sn, "Unit", as),
                Ku(an, "IntCompanionObject", as),
                Ku(_n, "AbstractMutableCollection", Bu, vt, [vt, gr]),
                Ku(pn, "IteratorImpl", Bu),
                Ku(vn, "AbstractMutableList", Bu, _n, [_n, gr, mr]),
                Ku(yn, "SubList", Bu, vn),
                Ku(bn, E, Bu),
                Ku(_r, "Entry", us),
                Ku(vr, "MutableEntry", us, E, [_r]),
                Ku(Tn, "SimpleEntry", Bu, E, [vr]),
                Ku(Sn, "AbstractMutableSet", Bu, _n, [_n, yr, gr]),
                Ku(xn, "AbstractEntrySet", Bu, Sn),
                Ku(Cn, E, Bu, Sn),
                Ku(Fn, "AbstractMutableMap", Bu, Nt, [Nt, pr]),
                Ku(kn, "Companion", as),
                Ku(Vn, "ArrayList", Bu, vn, [vn, gr, mr]),
                Ku(zn, "HashCode", as),
                Ku(jn, "EntrySet", Bu, xn),
                Ku(Bn, "HashMap", Bu, Fn, [Fn, pr]),
                Ku(ti, "HashSet", Bu, Sn, [Sn, yr, gr]),
                Ku(ui, E, Bu),
                Ku(oi, "InternalMap", us),
                Ku(si, "InternalHashCodeMap", Bu, E, [oi]),
                Ku(ai, "EntryIterator", Bu),
                Ku(ci, "Companion", as),
                Ku(hi, "ChainEntry", Bu, Tn),
                Ku(fi, "EntrySet", Bu, xn),
                Ku(vi, "LinkedHashMap", Bu, Bn, [Bn, pr]),
                Ku(bi, "Companion", as),
                Ku(Ni, "LinkedHashSet", Bu, ti, [ti, yr, gr]),
                Ku(Ri, "StringBuilder", Bu, E, [rn]),
                Ku(ji, "Companion", as),
                Ku(Gi, "Regex", Bu),
                Ku(Hi, "MatchGroup", Bu),
                Ku(Xi, E, Bu, vt, [gr, vt]),
                Ku(Ki, E, Bu),
                Ku(fr, "Companion", as),
                Ku(wr, "Char", Bu),
                Ku(br, "Companion", as),
                Ku(xr, "Enum", Bu),
                Ku(Ir, E, Bu),
                Ku(du, "Companion", as),
                Ku(mu, "Long", Bu, un),
                Ku($s, "Exception", Bu, Error),
                Ku(Ds, "RuntimeException", Bu, $s),
                Ku(_s, "IllegalArgumentException", Bu, Ds),
                Ku(vs, "IndexOutOfBoundsException", Bu, Ds),
                Ku(Fs, "IllegalStateException", Bu, Ds),
                Ku(Os, "NoSuchElementException", Bu, Ds),
                Ku(Ys, "UnsupportedOperationException", Bu, Ds),
                Ku(Us, "ArithmeticException", Bu, Ds),
                Ku(Js, "NullPointerException", Bu, Ds),
                Ku(Ks, "NoWhenBranchMatchedException", Bu, Ds),
                Ku(no, "ClassCastException", Bu, Ds),
                Ku(uo, "UninitializedPropertyAccessException", Bu, Ds),
                (eu(rt).c = function () {
                  return this.h_1.c();
                }),
                (eu(dt).c = function () {
                  return this.l_1.c();
                }),
                (eu(vt).n = function (t) {
                  var e;
                  t: if (ts(this, gr) && this.o()) e = !1;
                  else {
                    for (var n = this.c(); n.d(); )
                      if (Kr(n.e(), t)) {
                        e = !0;
                        break t;
                      }
                    e = !1;
                  }
                  return e;
                }),
                (eu(vt).p = function (t) {
                  var e;
                  t: if (ts(t, gr) && t.o()) e = !0;
                  else {
                    for (var n = t.c(); n.d(); ) {
                      var i = n.e();
                      if (!this.n(i)) {
                        e = !1;
                        break t;
                      }
                    }
                    e = !0;
                  }
                  return e;
                }),
                (eu(vt).o = function () {
                  return 0 === this.f();
                }),
                (eu(vt).toString = function () {
                  return Q(this, ", ", "[", "]", E, E, yt(this));
                }),
                (eu(vt).toArray = function () {
                  return ln(this);
                }),
                (eu(bt).q = function (t, e) {
                  if (t < 0 || t >= e) throw ys("index: " + t + ", size: " + e);
                }),
                (eu(bt).r = function (t, e) {
                  if (t < 0 || t > e) throw ys("index: " + t + ", size: " + e);
                }),
                (eu(bt).s = function (t, e, n) {
                  if (t < 0 || e > n) throw ys("fromIndex: " + t + ", toIndex: " + e + ", size: " + n);
                  if (t > e) throw gs("fromIndex: " + t + " > toIndex: " + e);
                }),
                (eu(bt).t = function (t, e, n) {
                  if (t < 0 || e > n) throw ys("startIndex: " + t + ", endIndex: " + e + ", size: " + n);
                  if (t > e) throw gs("startIndex: " + t + " > endIndex: " + e);
                }),
                (eu(bt).u = function (t) {
                  for (var e = 1, n = t.c(); n.d(); ) {
                    var i = n.e(),
                      r = R(31, e),
                      u = null == i ? null : Qr(i);
                    e = (r + (null == u ? 0 : u)) | 0;
                  }
                  return e;
                }),
                (eu(bt).v = function (t, e) {
                  if (t.f() !== e.f()) return !1;
                  for (var n = e.c(), i = t.c(); i.d(); ) if (!Kr(i.e(), n.e())) return !1;
                  return !0;
                }),
                (eu(Ft).y = function (t) {
                  var e = t.x(),
                    n = null == e ? null : Qr(e),
                    i = null == n ? 0 : n,
                    r = t.z(),
                    u = null == r ? null : Qr(r);
                  return i ^ (null == u ? 0 : u);
                }),
                (eu(Ft).a1 = function (t) {
                  return Cr(t.x()) + "=" + Cr(t.z());
                }),
                (eu(Ft).b1 = function (t, e) {
                  return !(null == e || !ts(e, _r)) && !!Kr(t.x(), e.x()) && Kr(t.z(), e.z());
                }),
                (eu(Nt).f1 = function (t) {
                  return !(null == Ct(this, t));
                }),
                (eu(Nt).g1 = function (t) {
                  if (null == t || !ts(t, _r)) return !1;
                  var e = t.x(),
                    n = t.z(),
                    i = (ts(this, pr) ? this : cu()).h1(e);
                  return !(!Kr(n, i) || (null == i && !(ts(this, pr) ? this : cu()).f1(e)));
                }),
                (eu(Nt).equals = function (t) {
                  if (t === this) return !0;
                  if (null == t || !ts(t, pr)) return !1;
                  if (this.f() !== t.f()) return !1;
                  var e;
                  t: {
                    var n = t.w();
                    if (ts(n, gr) && n.o()) e = !0;
                    else {
                      for (var i = n.c(); i.d(); ) {
                        var r = i.e();
                        if (!this.g1(r)) {
                          e = !1;
                          break t;
                        }
                      }
                      e = !0;
                    }
                  }
                  return e;
                }),
                (eu(Nt).h1 = function (t) {
                  var e = Ct(this, t);
                  return null == e ? null : e.z();
                }),
                (eu(Nt).hashCode = function () {
                  return Qr(this.w());
                }),
                (eu(Nt).o = function () {
                  return 0 === this.f();
                }),
                (eu(Nt).f = function () {
                  return this.w().f();
                }),
                (eu(Nt).toString = function () {
                  return Q(this.w(), ", ", "{", "}", E, E, kt(this));
                }),
                (eu(Nt).e1 = function (t) {
                  return xt(this, t.x()) + "=" + xt(this, t.z());
                }),
                (eu($t).i1 = function (t) {
                  for (var e = 0, n = t.c(); n.d(); ) {
                    var i = n.e(),
                      r = e,
                      u = null == i ? null : Qr(i);
                    e = (r + (null == u ? 0 : u)) | 0;
                  }
                  return e;
                }),
                (eu($t).j1 = function (t, e) {
                  return t.f() === e.f() && t.p(e);
                }),
                (eu(At).equals = function (t) {
                  return !(null == t || !ts(t, mr)) && t.o();
                }),
                (eu(At).hashCode = function () {
                  return 1;
                }),
                (eu(At).toString = function () {
                  return "[]";
                }),
                (eu(At).f = function () {
                  return 0;
                }),
                (eu(At).o = function () {
                  return !0;
                }),
                (eu(At).l1 = function (t) {
                  return t.o();
                }),
                (eu(At).p = function (t) {
                  return this.l1(t);
                }),
                (eu(At).g = function (t) {
                  throw ys("Empty list doesn't contain element at index " + t + ".");
                }),
                (eu(At).c = function () {
                  return zt();
                }),
                (eu(At).m1 = function (t, e) {
                  if (0 === t && 0 === e) return this;
                  throw ys("fromIndex: " + t + ", toIndex: " + e);
                }),
                (eu(Ot).f = function () {
                  return this.n1_1.length;
                }),
                (eu(Ot).o = function () {
                  return 0 === this.n1_1.length;
                }),
                (eu(Ot).p1 = function (t) {
                  return L(this.n1_1, t);
                }),
                (eu(Ot).q1 = function (t) {
                  var e;
                  t: if (ts(t, gr) && t.o()) e = !0;
                  else {
                    for (var n = t.c(); n.d(); ) {
                      var i = n.e();
                      if (!this.p1(i)) {
                        e = !1;
                        break t;
                      }
                    }
                    e = !0;
                  }
                  return e;
                }),
                (eu(Ot).p = function (t) {
                  return this.q1(t);
                }),
                (eu(Ot).c = function () {
                  return $r(this.n1_1);
                }),
                (eu(Vt).d = function () {
                  return !1;
                }),
                (eu(Vt).e = function () {
                  throw As();
                }),
                (eu(Jt).equals = function (t) {
                  return !(null == t || !ts(t, pr)) && t.o();
                }),
                (eu(Jt).hashCode = function () {
                  return 0;
                }),
                (eu(Jt).toString = function () {
                  return "{}";
                }),
                (eu(Jt).f = function () {
                  return 0;
                }),
                (eu(Jt).o = function () {
                  return !0;
                }),
                (eu(Jt).s1 = function (t) {
                  return !1;
                }),
                (eu(Jt).f1 = function (t) {
                  return !(null != t && !is(t)) && this.s1(null == t || is(t) ? t : cu());
                }),
                (eu(Jt).t1 = function (t) {
                  return null;
                }),
                (eu(Jt).h1 = function (t) {
                  return null == t || is(t) ? this.t1(null == t || is(t) ? t : cu()) : null;
                }),
                (eu(Jt).w = function () {
                  return ye();
                }),
                (eu(ie).e = function () {
                  return this.z1();
                }),
                (eu(oe).e = function () {
                  if (0 === this.a2_1) throw As();
                  return (this.a2_1 = (this.a2_1 - 1) | 0), this.b2_1.e();
                }),
                (eu(oe).d = function () {
                  return this.a2_1 > 0 && this.b2_1.d();
                }),
                (eu(ae).k = function (t) {
                  return t >= this.d2_1 ? this : new ae(this.c2_1, t);
                }),
                (eu(ae).c = function () {
                  return new oe(this);
                }),
                (eu(ce).e = function () {
                  return this.f2_1.h2_1(this.e2_1.e());
                }),
                (eu(ce).d = function () {
                  return this.e2_1.d();
                }),
                (eu(le).c = function () {
                  return new ce(this);
                }),
                (eu(fe).e = function () {
                  if ((this.j2_1 < 0 && he(this), 0 === this.j2_1)) throw As();
                  var t = this.i2_1,
                    e = is(t) ? t : cu();
                  return (this.j2_1 = -1), e;
                }),
                (eu(fe).d = function () {
                  return this.j2_1 < 0 && he(this), 1 === this.j2_1;
                }),
                (eu(de).c = function () {
                  return new fe(this);
                }),
                (eu(we).c = function () {
                  return zt();
                }),
                (eu(we).k = function (t) {
                  return me();
                }),
                (eu(pe).equals = function (t) {
                  return !(null == t || !ts(t, yr)) && t.o();
                }),
                (eu(pe).hashCode = function () {
                  return 0;
                }),
                (eu(pe).toString = function () {
                  return "[]";
                }),
                (eu(pe).f = function () {
                  return 0;
                }),
                (eu(pe).o = function () {
                  return !0;
                }),
                (eu(pe).o2 = function (t) {
                  return !1;
                }),
                (eu(pe).n = function (t) {
                  return !1;
                }),
                (eu(pe).l1 = function (t) {
                  return t.o();
                }),
                (eu(pe).p = function (t) {
                  return this.l1(t);
                }),
                (eu(pe).c = function () {
                  return zt();
                }),
                (eu(ke).s2 = function () {
                  return this.t2_1;
                }),
                (eu(ke).w2 = function () {
                  return this.u2_1;
                }),
                (eu(ke).x2 = function (t) {
                  return this.t2_1 <= t && t <= this.u2_1;
                }),
                (eu(ke).o = function () {
                  return this.t2_1 > this.u2_1;
                }),
                (eu(ke).equals = function (t) {
                  return t instanceof ke && (!(!this.o() || !t.o()) || (this.t2_1 === t.t2_1 && this.u2_1 === t.u2_1));
                }),
                (eu(ke).hashCode = function () {
                  return this.o() ? -1 : (R(31, this.t2_1) + this.u2_1) | 0;
                }),
                (eu(ke).toString = function () {
                  return this.t2_1 + ".." + this.u2_1;
                }),
                (eu(Ne).d = function () {
                  return this.a3_1;
                }),
                (eu(Ne).z1 = function () {
                  var t = this.b3_1;
                  if (t === this.z2_1) {
                    if (!this.a3_1) throw As();
                    this.a3_1 = !1;
                  } else this.b3_1 = (this.b3_1 + this.y2_1) | 0;
                  return t;
                }),
                (eu($e).j = function (t, e, n) {
                  return new qe(t, e, n);
                }),
                (eu(qe).c = function () {
                  return new Ne(this.t2_1, this.u2_1, this.v2_1);
                }),
                (eu(qe).o = function () {
                  return this.v2_1 > 0 ? this.t2_1 > this.u2_1 : this.t2_1 < this.u2_1;
                }),
                (eu(qe).equals = function (t) {
                  return (
                    t instanceof qe && (!(!this.o() || !t.o()) || (this.t2_1 === t.t2_1 && this.u2_1 === t.u2_1 && this.v2_1 === t.v2_1))
                  );
                }),
                (eu(qe).hashCode = function () {
                  return this.o() ? -1 : (R(31, (R(31, this.t2_1) + this.u2_1) | 0) + this.v2_1) | 0;
                }),
                (eu(qe).toString = function () {
                  return this.v2_1 > 0
                    ? this.t2_1 + ".." + this.u2_1 + " step " + this.v2_1
                    : this.t2_1 + " downTo " + this.u2_1 + " step " + (0 | -this.v2_1);
                }),
                (eu(Ge).e = function () {
                  if ((-1 === this.h3_1 && Ye(this), 0 === this.h3_1)) throw As();
                  var t = this.k3_1,
                    e = t instanceof ke ? t : cu();
                  return (this.k3_1 = null), (this.h3_1 = -1), e;
                }),
                (eu(Ge).d = function () {
                  return -1 === this.h3_1 && Ye(this), 1 === this.h3_1;
                }),
                (eu(We).c = function () {
                  return new Ge(this);
                }),
                (eu(Xe).toString = function () {
                  return "(" + this.u1_1 + ", " + this.v1_1 + ")";
                }),
                (eu(Xe).w1 = function () {
                  return this.u1_1;
                }),
                (eu(Xe).x1 = function () {
                  return this.v1_1;
                }),
                (eu(Xe).hashCode = function () {
                  var t = null == this.u1_1 ? 0 : Qr(this.u1_1);
                  return (t = (R(t, 31) + (null == this.v1_1 ? 0 : Qr(this.v1_1))) | 0);
                }),
                (eu(Xe).equals = function (t) {
                  if (this === t) return !0;
                  if (!(t instanceof Xe)) return !1;
                  var e = t instanceof Xe ? t : cu();
                  return !!Kr(this.u1_1, e.u1_1) && !!Kr(this.v1_1, e.v1_1);
                }),
                (eu(Ke).toString = function () {
                  return "(" + this.t3_1 + ", " + this.u3_1 + ", " + this.v3_1 + ")";
                }),
                (eu(Ke).hashCode = function () {
                  var t = null == this.t3_1 ? 0 : Qr(this.t3_1);
                  return (
                    (t = (R(t, 31) + (null == this.u3_1 ? 0 : Qr(this.u3_1))) | 0),
                    (t = (R(t, 31) + (null == this.v3_1 ? 0 : Qr(this.v3_1))) | 0)
                  );
                }),
                (eu(Ke).equals = function (t) {
                  if (this === t) return !0;
                  if (!(t instanceof Ke)) return !1;
                  var e = t instanceof Ke ? t : cu();
                  return !!Kr(this.t3_1, e.t3_1) && !!Kr(this.u3_1, e.u3_1) && !!Kr(this.v3_1, e.v3_1);
                }),
                (eu(sn).toString = function () {
                  return "kotlin.Unit";
                }),
                (eu(an).z3 = function () {
                  return this.MIN_VALUE;
                }),
                (eu(an).a4 = function () {
                  return this.MAX_VALUE;
                }),
                (eu(an).b4 = function () {
                  return this.SIZE_BYTES;
                }),
                (eu(an).c4 = function () {
                  return this.SIZE_BITS;
                }),
                (eu(_n).m = function (t) {
                  this.d4();
                  for (var e = !1, n = t.c(); n.d(); ) {
                    var i = n.e();
                    this.b(i) && (e = !0);
                  }
                  return e;
                }),
                (eu(_n).toJSON = function () {
                  return this.toArray();
                }),
                (eu(_n).d4 = function () {}),
                (eu(pn).d = function () {
                  return this.e4_1 < this.g4_1.f();
                }),
                (eu(pn).e = function () {
                  if (!this.d()) throw As();
                  var t = this,
                    e = this.e4_1;
                  return (this.e4_1 = (e + 1) | 0), (t.f4_1 = e), this.g4_1.g(this.f4_1);
                }),
                (eu(yn).l4 = function (t, e) {
                  Tt().r(t, this.k4_1), this.i4_1.l4((this.j4_1 + t) | 0, e), (this.k4_1 = (this.k4_1 + 1) | 0);
                }),
                (eu(yn).g = function (t) {
                  return Tt().q(t, this.k4_1), this.i4_1.g((this.j4_1 + t) | 0);
                }),
                (eu(yn).f = function () {
                  return this.k4_1;
                }),
                (eu(yn).d4 = function () {
                  return this.i4_1.d4();
                }),
                (eu(vn).b = function (t) {
                  return this.d4(), this.l4(this.f(), t), !0;
                }),
                (eu(vn).c = function () {
                  return new pn(this);
                }),
                (eu(vn).n = function (t) {
                  return this.n4(t) >= 0;
                }),
                (eu(vn).n4 = function (t) {
                  var e = 0,
                    n = Lt(this);
                  if (e <= n)
                    do {
                      var i = e;
                      if (((e = (e + 1) | 0), Kr(this.g(i), t))) return i;
                    } while (i !== n);
                  return -1;
                }),
                (eu(vn).m1 = function (t, e) {
                  return new yn(this, t, e);
                }),
                (eu(vn).equals = function (t) {
                  return t === this || (!(null == t || !ts(t, mr)) && Tt().v(this, t));
                }),
                (eu(vn).hashCode = function () {
                  return Tt().u(this);
                }),
                (eu(bn).d = function () {
                  return this.o4_1.d();
                }),
                (eu(bn).e = function () {
                  return this.o4_1.e().x();
                }),
                (eu(Tn).x = function () {
                  return this.p4_1;
                }),
                (eu(Tn).z = function () {
                  return this.q4_1;
                }),
                (eu(Tn).r4 = function (t) {
                  var e = this.q4_1;
                  return (this.q4_1 = t), e;
                }),
                (eu(Tn).hashCode = function () {
                  return St().y(this);
                }),
                (eu(Tn).toString = function () {
                  return St().a1(this);
                }),
                (eu(Tn).equals = function (t) {
                  return St().b1(this, t);
                }),
                (eu(xn).n = function (t) {
                  return this.s4(t);
                }),
                (eu(Cn).u4 = function (t) {
                  throw Zs("Add is not supported on keys");
                }),
                (eu(Cn).b = function (t) {
                  return this.u4(null == t || is(t) ? t : cu());
                }),
                (eu(Cn).v4 = function (t) {
                  return this.t4_1.f1(t);
                }),
                (eu(Cn).n = function (t) {
                  return !(null != t && !is(t)) && this.v4(null == t || is(t) ? t : cu());
                }),
                (eu(Cn).c = function () {
                  return new bn(this.t4_1.w().c());
                }),
                (eu(Cn).f = function () {
                  return this.t4_1.f();
                }),
                (eu(Cn).d4 = function () {
                  return this.t4_1.d4();
                }),
                (eu(Fn).a5 = function () {
                  return null == this.y4_1 && (this.y4_1 = new Cn(this)), su(this.y4_1);
                }),
                (eu(Fn).d4 = function () {}),
                (eu(Sn).equals = function (t) {
                  return t === this || (!(null == t || !ts(t, yr)) && It().j1(this, t));
                }),
                (eu(Sn).hashCode = function () {
                  return It().i1(this);
                }),
                (eu(Vn).f = function () {
                  return this.f3_1.length;
                }),
                (eu(Vn).g = function (t) {
                  var e = this.f3_1[Rn(this, t)];
                  return null == e || is(e) ? e : cu();
                }),
                (eu(Vn).b = function (t) {
                  return this.d4(), this.f3_1.push(t), (this.m4_1 = (this.m4_1 + 1) | 0), !0;
                }),
                (eu(Vn).l4 = function (t, e) {
                  this.d4(), this.f3_1.splice(On(this, t), 0, e), (this.m4_1 = (this.m4_1 + 1) | 0);
                }),
                (eu(Vn).m = function (t) {
                  if ((this.d4(), t.o())) return !1;
                  for (var e = En(this, t.f()), n = 0, i = t.c(); i.d(); ) {
                    var r = i.e(),
                      u = n;
                    n = (u + 1) | 0;
                    var s = mn(u);
                    this.f3_1[(e + s) | 0] = r;
                  }
                  return (this.m4_1 = (this.m4_1 + 1) | 0), !0;
                }),
                (eu(Vn).n4 = function (t) {
                  return H(this.f3_1, t);
                }),
                (eu(Vn).toString = function () {
                  return Lr(this.f3_1);
                }),
                (eu(Vn).c5 = function () {
                  return [].slice.call(this.f3_1);
                }),
                (eu(Vn).toArray = function () {
                  return this.c5();
                }),
                (eu(Vn).d4 = function () {
                  if (this.g3_1) throw js();
                }),
                (eu(zn).d5 = function (t, e) {
                  return Kr(t, e);
                }),
                (eu(zn).e5 = function (t) {
                  var e = null == t ? null : Qr(t);
                  return null == e ? 0 : e;
                }),
                (eu(jn).g5 = function (t) {
                  throw Zs("Add is not supported on entries");
                }),
                (eu(jn).b = function (t) {
                  return this.g5(null != t && ts(t, vr) ? t : cu());
                }),
                (eu(jn).s4 = function (t) {
                  return this.f5_1.g1(t);
                }),
                (eu(jn).c = function () {
                  return this.f5_1.l5_1.c();
                }),
                (eu(jn).f = function () {
                  return this.f5_1.f();
                }),
                (eu(Bn).f1 = function (t) {
                  return this.l5_1.v4(t);
                }),
                (eu(Bn).w = function () {
                  return null == this.n5_1 && (this.n5_1 = this.p5()), su(this.n5_1);
                }),
                (eu(Bn).p5 = function () {
                  return new jn(this);
                }),
                (eu(Bn).h1 = function (t) {
                  return this.l5_1.h1(t);
                }),
                (eu(Bn).y1 = function (t, e) {
                  return this.l5_1.y1(t, e);
                }),
                (eu(Bn).f = function () {
                  return this.l5_1.f();
                }),
                (eu(ti).b = function (t) {
                  return null == this.q5_1.y1(t, this);
                }),
                (eu(ti).n = function (t) {
                  return this.q5_1.f1(t);
                }),
                (eu(ti).o = function () {
                  return this.q5_1.o();
                }),
                (eu(ti).c = function () {
                  return this.q5_1.a5().c();
                }),
                (eu(ti).f = function () {
                  return this.q5_1.f();
                }),
                (eu(ui).d = function () {
                  return -1 === this.r5_1 && (this.r5_1 = ei(this)), 0 === this.r5_1;
                }),
                (eu(ui).e = function () {
                  if (!this.d()) throw As();
                  var t = this.v5_1 ? this.u5_1[this.w5_1] : this.u5_1;
                  return (this.x5_1 = t), (this.r5_1 = -1), t;
                }),
                (eu(si).o5 = function () {
                  return this.z5_1;
                }),
                (eu(si).f = function () {
                  return this.b6_1;
                }),
                (eu(si).y1 = function (t, e) {
                  var n = this.z5_1.e5(t),
                    i = ri(this, n);
                  if (null == i) this.a6_1[n] = new Tn(t, e);
                  else {
                    if (null == i || !ns(i)) {
                      var r,
                        u = i;
                      return this.z5_1.d5(u.x(), t)
                        ? u.r4(e)
                        : ((r = [u, new Tn(t, e)]), (this.a6_1[n] = r), (this.b6_1 = (this.b6_1 + 1) | 0), null);
                    }
                    var s = i,
                      o = ii(s, this, t);
                    if (null != o) return o.r4(e);
                    s.push(new Tn(t, e));
                  }
                  return (this.b6_1 = (this.b6_1 + 1) | 0), null;
                }),
                (eu(si).v4 = function (t) {
                  return !(null == ni(this, t));
                }),
                (eu(si).h1 = function (t) {
                  var e = ni(this, t);
                  return null == e ? null : e.z();
                }),
                (eu(si).c = function () {
                  return new ui(this);
                }),
                (eu(ai).d = function () {
                  return !(null === this.e6_1);
                }),
                (eu(ai).e = function () {
                  if (!this.d()) throw As();
                  var t = su(this.e6_1);
                  this.d6_1 = t;
                  var e,
                    n = this,
                    i = t.t6_1;
                  return (e = i !== this.f6_1.q6_1.n6_1 ? i : null), (n.e6_1 = e), t;
                }),
                (eu(hi).r4 = function (t) {
                  return this.v6_1.d4(), eu(Tn).r4.call(this, t);
                }),
                (eu(fi).g5 = function (t) {
                  throw Zs("Add is not supported on entries");
                }),
                (eu(fi).b = function (t) {
                  return this.g5(null != t && ts(t, vr) ? t : cu());
                }),
                (eu(fi).s4 = function (t) {
                  return this.q6_1.g1(t);
                }),
                (eu(fi).c = function () {
                  return new ai(this);
                }),
                (eu(fi).f = function () {
                  return this.q6_1.f();
                }),
                (eu(fi).d4 = function () {
                  return this.q6_1.d4();
                }),
                (eu(vi).x6 = function () {
                  var t;
                  if ((this.d4(), (this.p6_1 = !0), this.f() > 0)) t = this;
                  else {
                    var e = li().w6_1;
                    t = ts(e, pr) ? e : cu();
                  }
                  return t;
                }),
                (eu(vi).f1 = function (t) {
                  return this.o6_1.f1(t);
                }),
                (eu(vi).p5 = function () {
                  return new fi(this);
                }),
                (eu(vi).h1 = function (t) {
                  var e = this.o6_1.h1(t);
                  return null == e ? null : e.z();
                }),
                (eu(vi).y1 = function (t, e) {
                  this.d4();
                  var n = this.o6_1.h1(t);
                  if (null == n) {
                    var i = new hi(this, t, e);
                    return this.o6_1.y1(t, i), di(i, this), null;
                  }
                  return n.r4(e);
                }),
                (eu(vi).f = function () {
                  return this.o6_1.f();
                }),
                (eu(vi).d4 = function () {
                  if (this.p6_1) throw js();
                }),
                (eu(Ni).d4 = function () {
                  return this.q5_1.d4();
                }),
                (eu(Ri).w3 = function () {
                  return this.a7_1.length;
                }),
                (eu(Ri).x3 = function (t) {
                  var e = this.a7_1;
                  if (!(t >= 0 && t <= Ae(e))) throw ys("index: " + t + ", length: " + this.w3() + "}");
                  return Vr(e, t);
                }),
                (eu(Ri).y3 = function (t, e) {
                  return this.a7_1.substring(t, e);
                }),
                (eu(Ri).d3 = function (t) {
                  return (this.a7_1 = this.a7_1 + new wr(t)), this;
                }),
                (eu(Ri).a = function (t) {
                  return (this.a7_1 = this.a7_1 + Cr(t)), this;
                }),
                (eu(Ri).b7 = function (t, e, n) {
                  return this.c7(null == t ? "null" : t, e, n);
                }),
                (eu(Ri).toString = function () {
                  return this.a7_1;
                }),
                (eu(Ri).c7 = function (t, e, n) {
                  var i = Jr(t);
                  Tt().t(e, n, i.length);
                  var r = this,
                    u = this.a7_1;
                  return (r.a7_1 = u + i.substring(e, n)), this;
                }),
                (eu(ji).g7 = function (t) {
                  var e = this.d7_1;
                  return t.replace(e, "\\$&");
                }),
                (eu(ji).h7 = function (t) {
                  var e = this.f7_1;
                  return t.replace(e, "$$$$");
                }),
                (eu(Gi).o7 = function (t) {
                  qi(this.k7_1);
                  var e = this.k7_1.exec(Jr(t));
                  return null != e && 0 === e.index && this.k7_1.lastIndex === Pr(t);
                }),
                (eu(Gi).n7 = function (t, e) {
                  if (e < 0 || e > Pr(t)) throw ys("Start index out of bounds: " + e + ", input length: " + Pr(t));
                  return Ui(this.k7_1, Jr(t), e, this.k7_1);
                }),
                (eu(Gi).p7 = function (t, e, n) {
                  return (e = e === E ? 0 : e), n === E ? this.n7(t, e) : n.n7.call(this, t, e);
                }),
                (eu(Gi).q7 = function (t, e) {
                  if (e < 0 || e > Pr(t)) throw ys("Start index out of bounds: " + e + ", input length: " + Pr(t));
                  return re(Zi(this, t, e), Yi);
                }),
                (eu(Gi).r7 = function (t, e, n) {
                  return (e = e === E ? 0 : e), n === E ? this.q7(t, e) : n.q7.call(this, t, e);
                }),
                (eu(Gi).s7 = function (t, e) {
                  var n = this.p7(t);
                  if (null == n) return Jr(t);
                  var i = 0,
                    r = Pr(t),
                    u = Mi(r);
                  do {
                    var s = su(n);
                    u.b7(t, i, s.t7().s2()), u.a(e(s)), (i = (s.t7().w2() + 1) | 0), (n = s.e());
                  } while (i < r && null != n);
                  return i < r && u.b7(t, i, r), u.toString();
                }),
                (eu(Gi).u7 = function (t, e) {
                  Ze(e);
                  for (var n = this.r7(t), i = 0 === e ? n : ht(n, (e - 1) | 0), r = In(), u = 0, s = i.c(); s.d(); ) {
                    var o = s.e();
                    r.b(Jr(jr(t, u, o.t7().s2()))), (u = (o.t7().w2() + 1) | 0);
                  }
                  return r.b(Jr(jr(t, u, Pr(t)))), r;
                }),
                (eu(Gi).toString = function () {
                  return this.k7_1.toString();
                }),
                (eu(Hi).toString = function () {
                  return "MatchGroup(value=" + this.v7_1 + ")";
                }),
                (eu(Hi).hashCode = function () {
                  return Xr(this.v7_1);
                }),
                (eu(Hi).equals = function (t) {
                  if (this === t) return !0;
                  if (!(t instanceof Hi)) return !1;
                  var e = t instanceof Hi ? t : cu();
                  return this.v7_1 === e.v7_1;
                }),
                (eu(Xi).f = function () {
                  return this.z7_1.length;
                }),
                (eu(Xi).c = function () {
                  return ft(nt(Rt(this)), Ji(this)).c();
                }),
                (eu(Xi).g = function (t) {
                  var e = this.z7_1[t];
                  return null == e ? null : new Hi(e);
                }),
                (eu(Ki).t7 = function () {
                  return this.b8_1;
                }),
                (eu(Ki).z = function () {
                  return su(this.f8_1[0]);
                }),
                (eu(Ki).e = function () {
                  return Ui(this.g8_1, this.h8_1, this.e8_1.o() ? Qi(this, this.e8_1.s2()) : (this.e8_1.w2() + 1) | 0, this.g8_1);
                }),
                (eu(wr).s8 = function (t) {
                  return sr(this.c3_1, t);
                }),
                (eu(wr).t8 = function (t) {
                  return or(this, t);
                }),
                (eu(wr).equals = function (t) {
                  return cr(this.c3_1, t);
                }),
                (eu(wr).hashCode = function () {
                  return lr(this.c3_1);
                }),
                (eu(wr).toString = function () {
                  return hr(this.c3_1);
                }),
                (eu(xr).w8 = function () {
                  return this.u8_1;
                }),
                (eu(xr).x8 = function () {
                  return this.v8_1;
                }),
                (eu(xr).y8 = function (t) {
                  return Yr(this.v8_1, t.v8_1);
                }),
                (eu(xr).t8 = function (t) {
                  return this.y8(t instanceof xr ? t : cu());
                }),
                (eu(xr).equals = function (t) {
                  return this === t;
                }),
                (eu(xr).hashCode = function () {
                  return Hr(this);
                }),
                (eu(xr).toString = function () {
                  return this.u8_1;
                }),
                (eu(Ir).d = function () {
                  return !(this.z8_1 === this.a9_1.length);
                }),
                (eu(Ir).e = function () {
                  if (this.z8_1 === this.a9_1.length) throw Rs("" + this.z8_1);
                  var t = this.z8_1;
                  return (this.z8_1 = (t + 1) | 0), this.a9_1[t];
                }),
                (eu(mu).i9 = function (t) {
                  return Tu(this, t);
                }),
                (eu(mu).t8 = function (t) {
                  return this.i9(t instanceof mu ? t : cu());
                }),
                (eu(mu).j9 = function (t) {
                  return xu(this, t);
                }),
                (eu(mu).k9 = function (t) {
                  return Su(this, t);
                }),
                (eu(mu).l9 = function () {
                  return this.m9().j9(new mu(1, 0));
                }),
                (eu(mu).m9 = function () {
                  return new mu(~this.b9_1, ~this.c9_1);
                }),
                (eu(mu).n9 = function () {
                  return this.b9_1;
                }),
                (eu(mu).d9 = function () {
                  return $u(this);
                }),
                (eu(mu).valueOf = function () {
                  return this.d9();
                }),
                (eu(mu).equals = function (t) {
                  return t instanceof mu && Iu(this, t);
                }),
                (eu(mu).hashCode = function () {
                  return qu(this);
                }),
                (eu(mu).toString = function () {
                  return Du(this, 10);
                }),
                (eu(si).c6 = V),
                (t.$_$ = t.$_$ || {}),
                (t.$_$.a = Dn),
                (t.$_$.b = In),
                (t.$_$.c = Pi),
                (t.$_$.d = Zs),
                (t.$_$.e = ir),
                (t.$_$.f = hr),
                (t.$_$.g = cn),
                (t.$_$.h = on),
                (t.$_$.i = gr),
                (t.$_$.j = ne),
                (t.$_$.k = mn),
                (t.$_$.l = Zt),
                (t.$_$.m = Y),
                (t.$_$.n = L),
                (t.$_$.o = gn),
                (t.$_$.p = Wt),
                (t.$_$.q = Q),
                (t.$_$.r = z),
                (t.$_$.s = P),
                (t.$_$.t = qt),
                (t.$_$.u = Ut),
                (t.$_$.v = fs),
                (t.$_$.w = wt),
                (t.$_$.x = hn),
                (t.$_$.y = ge),
                (t.$_$.z = j),
                (t.$_$.a1 = Gt),
                (t.$_$.b1 = Z),
                (t.$_$.c1 = $r),
                (t.$_$.d1 = Vr),
                (t.$_$.e1 = Pr),
                (t.$_$.f1 = Bu),
                (t.$_$.g1 = nu),
                (t.$_$.h1 = Kr),
                (t.$_$.i1 = Xr),
                (t.$_$.j1 = Qr),
                (t.$_$.k1 = us),
                (t.$_$.l1 = ns),
                (t.$_$.m1 = rs),
                (t.$_$.n1 = ts),
                (t.$_$.o1 = Hu),
                (t.$_$.p1 = as),
                (t.$_$.q1 = eu),
                (t.$_$.r1 = Ku),
                (t.$_$.s1 = Jr),
                (t.$_$.t1 = $i),
                (t.$_$.u1 = Re),
                (t.$_$.v1 = mt),
                (t.$_$.w1 = gt),
                (t.$_$.x1 = Oe),
                (t.$_$.y1 = _t),
                (t.$_$.z1 = er),
                (t.$_$.a2 = Ee),
                (t.$_$.b2 = tr),
                (t.$_$.c2 = Ve),
                (t.$_$.d2 = wr),
                (t.$_$.e2 = xr),
                (t.$_$.f2 = Qe),
                (t.$_$.g2 = Xe),
                (t.$_$.h2 = cu),
                (t.$_$.i2 = hu),
                (t.$_$.j2 = Ke),
                (t.$_$.k2 = au),
                (t.$_$.l2 = tn),
                (t.$_$.m2 = E),
                t
              );
            })
              ? n.apply(e, i)
              : n) || (t.exports = r);
    },
    67311: function (t, e, n) {
      var i, r, u;
      (r = [e, n(86819)]),
        void 0 ===
          (u =
            "function" ==
            typeof (i = function (t, e) {
              var n,
                i,
                r,
                u,
                s,
                o,
                a,
                c,
                l,
                h,
                f,
                d,
                w,
                m,
                g,
                _,
                p,
                y,
                v,
                b,
                T,
                x,
                C,
                F,
                S,
                k,
                N,
                $,
                I = Math.imul,
                q = e.$_$.f2,
                D = e.$_$.k2,
                M = e.$_$.q1,
                A = e.$_$.f1,
                E = e.$_$.m2,
                R = e.$_$.r1,
                O = e.$_$.a,
                V = e.$_$.c1,
                z = e.$_$.g2,
                P = e.$_$.a1,
                j = e.$_$.p,
                L = e.$_$.j2,
                Z = e.$_$.p1,
                Y = e.$_$.e1,
                G = e.$_$.h2,
                W = e.$_$.r,
                U = e.$_$.z,
                H = e.$_$.q,
                B = e.$_$.s,
                J = e.$_$.l1,
                Q = e.$_$.c,
                X = e.$_$.m1,
                K = e.$_$.c2,
                tt = e.$_$.s1,
                et = e.$_$.t,
                nt = e.$_$.a2,
                it = e.$_$.d1,
                rt = e.$_$.f,
                ut = e.$_$.d,
                st = e.$_$.l,
                ot = e.$_$.k,
                at = e.$_$.b,
                ct = e.$_$.v1,
                lt = e.$_$.y,
                ht = e.$_$.x,
                ft = e.$_$.w,
                dt = e.$_$.b2,
                wt = e.$_$.z1,
                mt = e.$_$.u1,
                gt = e.$_$.t1,
                _t = e.$_$.l2,
                pt = e.$_$.u,
                yt = e.$_$.x1,
                vt = e.$_$.o,
                bt = e.$_$.n,
                Tt = e.$_$.e,
                xt = e.$_$.d2,
                Ct = e.$_$.w1,
                Ft = e.$_$.y1,
                St = e.$_$.v,
                kt = e.$_$.b1,
                Nt = e.$_$.h,
                $t = e.$_$.j,
                It = e.$_$.i,
                qt = e.$_$.n1,
                Dt = e.$_$.j1,
                Mt = e.$_$.h1,
                At = e.$_$.i1,
                Et = e.$_$.k1,
                Rt = e.$_$.i2,
                Ot = e.$_$.e2,
                Vt = e.$_$.g1,
                zt = e.$_$.m,
                Pt = e.$_$.g,
                jt = e.$_$.o1;
              function Lt(t, e, n) {
                return (e = e === E ? null : e), this.t9(t, e);
              }
              function Zt(t, e, n) {
                return (e = e === E ? null : e), this.v9(t, e);
              }
              function Yt() {}
              function Gt(t, e) {
                (this.o9_1 = t), (this.p9_1 = e);
              }
              function Wt(t) {
                return t.authors;
              }
              function Ut(t) {
                return t.publishingDate();
              }
              function Ht(t) {
                return t.title;
              }
              function Bt(t) {
                return t.periodicalTitle;
              }
              function Jt(t) {
                return t.volume;
              }
              function Qt(t) {
                return t.issue;
              }
              function Xt(t) {
                return t.pagesRange;
              }
              function Kt(t) {
                return t.doi;
              }
              function te(t) {
                return t.url;
              }
              function ee() {
                var t,
                  e = this,
                  n = [new uc(".")],
                  i = new oc("authors", !0, Wt, E, E, E, new Ao(), new Qc()),
                  r = ze().aa_1,
                  u = new Kc(),
                  s = new ac([i, new oc("publishingDate", !0, Ut, "(", ")", E, r, u)], E, n, " "),
                  o = new Go(),
                  a = new el(),
                  c = new oc("title", !0, Ht, E, ".", E, o, a),
                  l = new L(!1, !0, !1),
                  h = new ta(),
                  f = new el(),
                  d = new oc("periodicalTitle", !0, Bt, E, E, l, h, f),
                  w = new Aa(),
                  m = new el(),
                  g = new L(!1, !0, !1),
                  _ = new oc("volume", !1, Jt, E, E, g, w, m),
                  p = new Ea("(", ")"),
                  y = new el(),
                  v = new ac([_, new oc("issue", !1, Qt, E, E, E, p, y)]),
                  b = new xa(),
                  T = new nl(),
                  x = [d, v, new oc("pagesRange", !1, Xt, E, E, E, b, T)];
                t = [new uc(".")];
                var C = new ac(x, E, t, ", "),
                  F = new Ca(),
                  S = new Xc(),
                  k = new oc("doi", !1, Kt, E, E, E, F, S),
                  N = new Aa(),
                  $ = new sl(),
                  I = [s, c, C, new cc(!1, [k, new oc("url", !1, te, E, E, E, N, $)])];
                e.ca_1 = new Gt(new rc([new ac(I, E, E, " ")]), ze().y9_1);
              }
              function ne(t) {
                return t.authors;
              }
              function ie(t) {
                return t.editors;
              }
              function re(t) {
                return t.publishingYear();
              }
              function ue(t) {
                return t.title;
              }
              function se(t) {
                return t.translators;
              }
              function oe(t, e) {
                return null != t.authors && 0 !== t.authors.length
                  ? new oc("editors", !1, ae, E, E, E, new Eo(), new Qc()).la(t, e)
                  : new hc([], [], !0);
              }
              function ae(t) {
                return t.editors;
              }
              function ce(t) {
                return t.edition;
              }
              function le(t) {
                return t.pagesRange;
              }
              function he(t) {
                return t.publisher;
              }
              function fe(t) {
                return t.doi;
              }
              function de(t) {
                return t.url;
              }
              function we() {
                var t = this,
                  e = [new uc(".")],
                  n = new cc(!0, [
                    new oc("authors", !0, ne, E, E, E, new Ao(), new Qc()),
                    new oc("editors", !1, ie, E, E, E, new Ro(), new Qc())
                  ]),
                  i = new Na(),
                  r = new za(),
                  u = new ac([n, new oc("publishingYear", !0, re, "(", ")", E, i, r)], E, e, " "),
                  s = [new uc(".")],
                  o = new Go(),
                  a = new el(),
                  c = new L(!1, !0, !1),
                  l = new oc("title", !0, ue, E, E, c, o, a),
                  h = [new uc("(")],
                  f = [new uc(")")],
                  d = new Lo(),
                  w = new Qc(),
                  m = new ac([new oc("translators", !1, se, E, ", Trans.", E, d, w), new sc([new dc("editors", !1)], oe)], h, f, ", "),
                  g = new ac(
                    [
                      l,
                      m,
                      new lc(
                        !1,
                        [
                          new ec("edition", ce, new Ma(new $a(), [new Ea(E, " ed.")]), new tl(1)),
                          new ec("pagesRange", le, new xa(!0), new nl())
                        ],
                        "(",
                        ")",
                        E,
                        ", "
                      )
                    ],
                    E,
                    s,
                    " "
                  ),
                  _ = new ta(),
                  p = new el(),
                  y = new oc("publisher", !0, he, E, ".", E, _, p),
                  v = new Ca(),
                  b = new Xc(),
                  T = new oc("doi", !1, fe, E, E, E, v, b),
                  x = new Aa(),
                  C = new sl(),
                  F = [u, g, y, new cc(!1, [T, new oc("url", !1, de, E, E, E, x, C)])];
                t.ma_1 = new Gt(new rc([new ac(F, E, E, " ")]), ze().y9_1);
              }
              function me(t) {
                return t.authors;
              }
              function ge(t) {
                return t.publishingYear();
              }
              function _e(t) {
                return t.title;
              }
              function pe(t) {
                return t.publicationNumber;
              }
              function ye(t) {
                return t.dissertationType;
              }
              function ve(t) {
                return t.university;
              }
              function be(t) {
                return t.database;
              }
              function Te(t) {
                return t.url;
              }
              function xe() {
                var t = this,
                  e = [
                    new oc("authors", !0, me, E, E, E, new Ao(), new Qc()),
                    new oc("publishingYear", !0, ge, "(", ")", E, new Na(), new za())
                  ],
                  n = [new uc(".")],
                  i = new ac(e, E, n, " "),
                  r = new Go(),
                  u = new el(),
                  s = new L(!1, !0, !1),
                  o = new oc("title", !0, _e, E, E, s, r, u),
                  a = new oc("publicationNumber", !1, pe, "(Publication No. ", ")", E, new Aa(), new el()),
                  c = [new uc("[")],
                  l = [
                    o,
                    a,
                    new ac(
                      [
                        new oc("dissertationType", !0, ye, E, E, E, new Go(), new el()),
                        new oc("university", !1, ve, E, E, E, new ta(), new el())
                      ],
                      c,
                      [new uc("]")],
                      ", "
                    )
                  ],
                  h = [new uc(".")],
                  f = [
                    i,
                    new ac(l, E, h, " "),
                    new oc("database", !1, be, E, ".", E, new ta(), new el()),
                    new oc("url", !1, Te, E, E, E, new Aa(), new sl())
                  ];
                t.na_1 = new Gt(new rc([new ac(f, E, E, " ")]), ze().y9_1);
              }
              function Ce(t) {
                return t.company;
              }
              function Fe(t) {
                return t.accessedDate;
              }
              function Se(t) {
                return t.productName;
              }
              function ke(t) {
                return t.modelVersion;
              }
              function Ne(t) {
                return t.modelType;
              }
              function $e(t) {
                return t.url;
              }
              function Ie(t) {
                return t.company;
              }
              function qe(t) {
                return t.accessedDate;
              }
              function De() {
                var t = this,
                  e = new oc("company", !0, Ce, E, E, E, new Aa(), new el()),
                  n = new Sa(),
                  i = new Kc(),
                  r = new oc("accessedDate", !0, Fe, "(", ")", E, n, i),
                  u = new ta(),
                  s = new el(),
                  o = new L(!1, !0, !1),
                  a = new oc("productName", !0, Se, E, E, o, u, s),
                  c = new Aa(),
                  l = new el(),
                  h = new oc("modelVersion", !1, ke, "(", ")", E, c, l),
                  f = new Aa(),
                  d = new el(),
                  w = [e, r, new ac([a, h, new oc("modelType", !1, Ne, "[", "]", E, f, d)], E, E, " ")],
                  m = [new uc(".")],
                  g = new ac(w, E, m, ". "),
                  _ = new Aa(),
                  p = new sl(),
                  y = new rc([new ac([g, new oc("url", !0, $e, E, E, E, _, p)], E, E, " ")]),
                  v = [new uc("(")],
                  b = [new uc(")")],
                  T = [new oc("company", !0, Ie, E, E, E, new Aa(), new el()), new oc("accessedDate", !0, qe, E, E, E, new Sa(), new Kc())];
                t.oa_1 = new Gt(y, new rc([new ac(T, v, b, ", ")]));
              }
              function Me(t) {
                return t.authors;
              }
              function Ae(t) {
                return t.publishingYear();
              }
              function Ee(t) {
                return t.inTextPagesCited;
              }
              function Re(t) {
                return t.authors;
              }
              function Oe(t) {
                return t.publishingYear();
              }
              function Ve() {
                n = this;
                var t = this,
                  e = [new uc("(")],
                  i = [
                    new oc("authors", !0, Me, E, E, E, new ka(bc()), new Qc()),
                    new oc("publishingYear", !0, Ae, E, E, E, new Na(), new za()),
                    new oc("inTextPagesCited", !0, Ee, E, E, E, new xa(!0), new nl())
                  ],
                  r = [new uc(")")];
                t.y9_1 = new rc([new ac(i, e, r, ", ")]);
                var u = this,
                  s = [new uc("(")],
                  o = [
                    new oc("authors", !0, Re, E, E, E, new ka(bc()), new Qc()),
                    new oc("publishingYear", !0, Oe, E, E, E, new Na(), new za())
                  ],
                  a = [new uc(")")];
                (u.z9_1 = new rc([new ac(o, s, a, ", ")])), (this.aa_1 = new Fa("yyyy, M d")), (this.ba_1 = new Fa("yyyy"));
              }
              function ze() {
                return null == n && new Ve(), n;
              }
              function Pe(t) {
                return t.creators;
              }
              function je(t) {
                return t.publishingYear();
              }
              function Le(t) {
                return t.title;
              }
              function Ze(t) {
                return t.imageDescription;
              }
              function Ye(t) {
                return t.imageSource;
              }
              function Ge(t) {
                return t.url;
              }
              function We(t) {
                return t.title;
              }
              function Ue(t) {
                return t.imageDescription;
              }
              function He(t) {
                return t.publishingYear();
              }
              function Be() {
                var t,
                  e = this,
                  n = [
                    new oc("creators", !0, Pe, E, E, E, new Ao(), new Qc()),
                    new oc("publishingYear", !0, je, "(", ")", E, new Na(), new za())
                  ],
                  i = [new uc(".")],
                  r = new ac(n, E, i, " "),
                  u = new Go(),
                  s = new el(),
                  o = new L(!1, !0, !1),
                  a = [
                    new cc(!0, [
                      new oc("title", !0, Le, E, " [Photograph]", o, u, s),
                      new oc("imageDescription", !0, Ze, "[", "]", E, new Go(), new el())
                    ])
                  ];
                t = [new uc(".")];
                var c = new ac(a, E, t),
                  l = new rc([
                    new ac(
                      [
                        r,
                        c,
                        new oc("imageSource", !1, Ye, E, ".", E, new ta(), new el()),
                        new oc("url", !1, Ge, E, E, E, new Aa(), new sl())
                      ],
                      E,
                      E,
                      " "
                    )
                  ]),
                  h = [new uc("(")],
                  f = [
                    new cc(!0, [
                      new oc("title", !0, We, E, E, E, new Go(), new el()),
                      new oc("imageDescription", !0, Ue, E, E, E, new Go(), new el())
                    ]),
                    new oc("publishingYear", !0, He, E, E, E, new Na(), new za())
                  ],
                  d = [new uc(")")];
                e.pa_1 = new Gt(l, new rc([new ac(f, h, d, ", ")]));
              }
              function Je(t) {
                return t.authors;
              }
              function Qe(t) {
                return t.publishingYear();
              }
              function Xe(t) {
                return t.title;
              }
              function Ke(t) {
                return t.periodicalTitle;
              }
              function tn(t) {
                return t.volume;
              }
              function en(t) {
                return t.issue;
              }
              function nn(t) {
                return t.pagesRange;
              }
              function rn(t) {
                return t.doi;
              }
              function un(t) {
                return t.url;
              }
              function sn() {
                var t,
                  e = this,
                  n = [new uc(".")],
                  i = new oc("authors", !0, Je, E, E, E, new Ao(), new Qc()),
                  r = new Na(),
                  u = new za(),
                  s = new ac([i, new oc("publishingYear", !0, Qe, "(", ")", E, r, u)], E, n, " "),
                  o = new Go(),
                  a = new el(),
                  c = new oc("title", !0, Xe, E, ".", E, o, a),
                  l = new L(!1, !0, !1),
                  h = new ta(),
                  f = new el(),
                  d = new oc("periodicalTitle", !0, Ke, E, E, l, h, f),
                  w = new Aa(),
                  m = new el(),
                  g = new L(!1, !0, !1),
                  _ = new oc("volume", !1, tn, E, E, g, w, m),
                  p = new Ea("(", ")"),
                  y = new el(),
                  v = new ac([_, new oc("issue", !1, en, E, E, E, p, y)]),
                  b = new xa(),
                  T = new nl(),
                  x = [d, v, new oc("pagesRange", !1, nn, E, E, E, b, T)];
                t = [new uc(".")];
                var C = new ac(x, E, t, ", "),
                  F = new Ca(),
                  S = new Xc(),
                  k = new oc("doi", !0, rn, E, E, E, F, S),
                  N = new Aa(),
                  $ = new sl(),
                  I = [s, c, C, new cc(!0, [k, new oc("url", !1, un, E, E, E, N, $)])];
                e.qa_1 = new Gt(new rc([new ac(I, E, E, " ")]), ze().z9_1);
              }
              function on(t) {
                return t.authors;
              }
              function an(t) {
                return t.publishingDate();
              }
              function cn(t) {
                return t.title;
              }
              function ln(t) {
                return t.lectureType;
              }
              function hn(t) {
                return t.publisher;
              }
              function fn(t) {
                return t.url;
              }
              function dn() {
                var t = this,
                  e = [
                    new oc("authors", !0, on, E, E, E, new Ao(), new Qc()),
                    new oc("publishingDate", !0, an, "(", ")", E, ze().aa_1, new Kc())
                  ],
                  n = [new uc(".")],
                  i = new ac(e, E, n, " "),
                  r = new Go(),
                  u = new el(),
                  s = new L(!1, !0, !1),
                  o = [new oc("title", !0, cn, E, E, s, r, u), new oc("lectureType", !0, ln, "[", "]", E, new Go(), new el())],
                  a = [new uc(".")],
                  c = [
                    i,
                    new ac(o, E, a, " "),
                    new oc("publisher", !1, hn, E, ".", E, new ta(), new el()),
                    new oc("url", !1, fn, E, E, E, new Aa(), new sl())
                  ];
                t.ra_1 = new Gt(new rc([new ac(c, E, E, " ")]), ze().y9_1);
              }
              function wn(t, e) {
                var n,
                  i = mn;
                return (
                  (n = null != t.directors && 0 !== t.directors.length ? (t.directors.length > 1 ? " (Directors)." : " (Director).") : "."),
                  new oc("directors", !0, i, E, n, E, new Ao(), new Qc()).la(t, e)
                );
              }
              function mn(t) {
                return t.directors;
              }
              function gn(t) {
                return t.publishingYear();
              }
              function _n(t) {
                return t.title;
              }
              function pn(t) {
                return t.studio;
              }
              function yn(t) {
                return t.directors;
              }
              function vn(t) {
                return t.publishingYear();
              }
              function bn(t) {
                return t.inTextTimeStamp;
              }
              function Tn() {
                var t = this,
                  e = new sc([new dc("directors", !0)], wn),
                  n = new oc("publishingYear", !1, gn, "(", ").", E, new Na(), new za()),
                  i = new Go(),
                  r = new el(),
                  u = new L(!1, !0, !1),
                  s = [n, new oc("title", !0, _n, E, " [Film]", u, i, r)],
                  o = [new uc(".")],
                  a = new ac(s, E, o, " "),
                  c = new rc([new ac([e, a, new oc("studio", !1, pn, E, ".", E, new ta(), new el())], E, E, " ")]),
                  l = [new uc("(")],
                  h = [
                    new oc("directors", !0, yn, E, E, E, new ka(bc()), new Qc()),
                    new oc("publishingYear", !0, vn, E, E, E, new Na(), new za()),
                    new oc("inTextTimeStamp", !0, bn, E, E, E, new Oa(), new ul())
                  ],
                  f = [new uc(")")];
                t.sa_1 = new Gt(c, new rc([new ac(h, l, f, ", ")]));
              }
              function xn(t) {
                return t.username;
              }
              function Cn(t) {
                return t.authors;
              }
              function Fn(t) {
                return t.publishingDate();
              }
              function Sn(t) {
                return t.title;
              }
              function kn(t) {
                return t.websiteName;
              }
              function Nn(t) {
                return t.url;
              }
              function $n(t) {
                return t.username;
              }
              function In(t) {
                return t.publishingDate();
              }
              function qn(t) {
                return t.inTextTimeStamp;
              }
              function Dn() {
                var t = this,
                  e = new oc("username", !0, xn, "[", "].", E, new ta(), new el()),
                  n = new Ao(),
                  i = new Qc(),
                  r = new oc("authors", !1, Cn, E, ".", E, n, i),
                  u = new oc("publishingDate", !0, Fn, "(", ").", E, ze().aa_1, new Kc()),
                  s = new Go(),
                  o = new el(),
                  a = new L(!1, !0, !1),
                  c = new rc([
                    new ac(
                      [
                        e,
                        r,
                        u,
                        new oc("title", !0, Sn, E, " [Video].", a, s, o),
                        new oc("websiteName", !0, kn, E, ".", E, new ta(), new el()),
                        new oc("url", !0, Nn, E, E, E, new Aa(), new sl())
                      ],
                      E,
                      E,
                      " "
                    )
                  ]),
                  l = [new uc("(")],
                  h = [
                    new oc("username", !0, $n, E, E, E, new ta(), new el()),
                    new oc("publishingDate", !0, In, E, E, E, ze().ba_1, new Kc()),
                    new oc("inTextTimeStamp", !0, qn, E, E, E, new Oa(), new ul())
                  ],
                  f = [new uc(")")];
                t.ta_1 = new Gt(c, new rc([new ac(h, l, f, ", ")]));
              }
              function Mn(t) {
                return t.authors;
              }
              function An(t) {
                return t.organization;
              }
              function En(t) {
                return t.publishingDate();
              }
              function Rn(t) {
                return t.title;
              }
              function On(t, e) {
                if (null == t.websiteName || !new el().ua(t.websiteName)) return new hc(["websiteName"], [], !1);
                var n,
                  i = [];
                if (null != t.organization && t.organization == t.websiteName) n = !0;
                else {
                  var r,
                    u = t.authors;
                  if (null == u) r = null;
                  else {
                    var s;
                    t: {
                      for (var o = V(u); o.d(); )
                        if (o.e().lastName === t.websiteName) {
                          s = !0;
                          break t;
                        }
                      s = !1;
                    }
                    r = s;
                  }
                  n = !0 === r;
                }
                return new hc(i, n ? [] : [new ol("websiteName", new ta().va(t.websiteName)), new ol(E, ".")], !0);
              }
              function Vn(t) {
                return t.accessedDate;
              }
              function zn(t) {
                return t.url;
              }
              function Pn() {
                var t = this,
                  e = [new uc(".")],
                  n = new Ao(),
                  i = new Qc(),
                  r = new oc("authors", !1, Mn, E, E, E, n, i),
                  u = new Aa(),
                  s = new el(),
                  o = new cc(!1, [r, new oc("organization", !1, An, E, E, E, u, s)]),
                  a = ze().aa_1,
                  c = new Kc(),
                  l = new ac([o, new cc(!1, [new oc("publishingDate", !1, En, "(", ")", E, a, c), new uc("(n.d.)")])], E, e, " "),
                  h = new L(!1, !0, !1),
                  f = new Go(),
                  d = new el(),
                  w = new oc("title", !0, Rn, E, ".", h, f, d),
                  m = new sc([new dc("websiteName", !0)], On),
                  g = new Ma(new Fa("M d, yyyy"), [new Ea("Retrieved ", ", from")]),
                  _ = new Kc(),
                  p = new oc("accessedDate", !1, Vn, E, E, E, g, _),
                  y = new Aa(),
                  v = new el(),
                  b = [l, w, m, p, new oc("url", !0, zn, E, E, E, y, v)];
                t.wa_1 = new Gt(new rc([new ac(b, E, E, " ")]), ze().z9_1);
              }
              function jn(t) {
                return t.title;
              }
              function Ln(t) {
                return t.publishingDate();
              }
              function Zn(t) {
                return t.url;
              }
              function Yn(t) {
                return t.title;
              }
              function Gn(t) {
                return t.publishingDate();
              }
              function Wn() {
                var t = this,
                  e = new Go(),
                  n = new el(),
                  i = new oc("title", !0, jn, E, ". ", E, e, n),
                  r = ze().aa_1,
                  u = new Kc(),
                  s = new oc("publishingDate", !0, Ln, "(", "). ", E, r, u),
                  o = new uc("In "),
                  a = new uc("Wikipedia", !0),
                  c = new uc("."),
                  l = new Aa(),
                  h = new el(),
                  f = new rc([i, s, o, a, c, new oc("url", !0, Zn, " ", E, E, l, h)]),
                  d = [new uc("(")],
                  w = new Go(),
                  m = new el(),
                  g = [new oc("title", !0, Yn, '"', '"', E, w, m), new oc("publishingDate", !0, Gn, E, E, E, new Sa(), new Kc())],
                  _ = [new uc(")")];
                t.xa_1 = new Gt(f, new rc([new ac(g, d, _, ", ")]));
              }
              function Un(t) {
                return t.username;
              }
              function Hn(t) {
                return t.authors;
              }
              function Bn(t) {
                return t.publishingDate();
              }
              function Jn(t) {
                return t.title;
              }
              function Qn(t) {
                return t.url;
              }
              function Xn(t) {
                return t.username;
              }
              function Kn(t) {
                return t.publishingDate();
              }
              function ti(t) {
                return t.inTextTimeStamp;
              }
              function ei() {
                var t = this,
                  e = new oc("username", !0, Un, E, ".", E, new ta(), new el()),
                  n = new Ao(),
                  i = new Qc(),
                  r = new cc(!0, [e, new oc("authors", !1, Hn, E, ".", E, n, i)]),
                  u = new oc("publishingDate", !0, Bn, "(", ").", E, ze().aa_1, new Kc()),
                  s = new Go(),
                  o = new el(),
                  a = new L(!1, !0, !1),
                  c = new rc([
                    new ac(
                      [
                        r,
                        u,
                        new oc("title", !0, Jn, E, " [Video].", a, s, o),
                        new uc("YouTube."),
                        new oc("url", !0, Qn, E, E, E, new Aa(), new sl())
                      ],
                      E,
                      E,
                      " "
                    )
                  ]),
                  l = [new uc("(")],
                  h = [
                    new oc("username", !0, Xn, E, E, E, new ta(), new el()),
                    new oc("publishingDate", !0, Kn, E, E, E, ze().ba_1, new Kc()),
                    new oc("inTextTimeStamp", !0, ti, E, E, E, new Oa(), new ul())
                  ],
                  f = [new uc(")")];
                t.ya_1 = new Gt(c, new rc([new ac(h, l, f, ", ")]));
              }
              function ni(t) {
                return t.authors;
              }
              function ii(t) {
                return t.title;
              }
              function ri(t) {
                return t.periodicalTitle;
              }
              function ui(t) {
                return t.publicationCity;
              }
              function si(t) {
                return t.publishingDate();
              }
              function oi(t) {
                return t.doi;
              }
              function ai(t) {
                return t.url;
              }
              function ci() {
                var t,
                  e = this,
                  n = new oc("authors", !0, ni, E, ".", E, new ua(), new Qc()),
                  i = new pa(),
                  r = new el(),
                  u = new oc("title", !0, ii, ' "', '."', E, i, r),
                  s = new L(!1, !0, !1),
                  o = new pa(),
                  a = new el(),
                  c = new oc("periodicalTitle", !0, ri, " ", E, s, o, a),
                  l = new pa(),
                  h = new el(),
                  f = new oc("publicationCity", !1, ui, " (", ")", E, l, h),
                  d = Li().bb_1,
                  w = new Kc(),
                  m = new oc("publishingDate", !0, si, ", ", ".", E, d, w),
                  g = new Ca(),
                  _ = new Xc(),
                  p = new oc("doi", !1, oi, " ", ".", E, g, _),
                  y = new Aa(),
                  v = new sl();
                (t = [p, new oc("url", !1, ai, " ", ".", E, y, v)]), (e.db_1 = new Gt(new rc([n, u, c, f, m, new cc(!1, t)]), Li().za_1));
              }
              function li(t) {
                return t.authors;
              }
              function hi(t) {
                return t.publishingYear();
              }
              function fi(t) {
                return t.title;
              }
              function di(t) {
                return t.editors;
              }
              function wi(t) {
                return t.translators;
              }
              function mi(t) {
                return t.edition;
              }
              function gi(t) {
                return t.publicationCity;
              }
              function _i(t) {
                return t.publisher;
              }
              function pi(t) {
                return t.doi;
              }
              function yi(t) {
                return t.url;
              }
              function vi() {
                var t = this,
                  e = [new uc(".")],
                  n = new oc("authors", !0, li, E, E, E, new ua(), new Qc()),
                  i = new oc("publishingYear", !0, hi, E, E, E, new Na(), new za()),
                  r = new pa(),
                  u = new el(),
                  s = new L(!1, !0, !1),
                  o = new oc("title", !0, fi, E, E, s, r, u),
                  a = new ha(),
                  c = new Qc(),
                  l = new oc("editors", !1, di, "Edited by ", E, E, a, c),
                  h = new ha(),
                  f = new Qc(),
                  d = new oc("translators", !1, wi, "Translated by ", E, E, h, f),
                  w = new oc("edition", !1, mi, E, E, E, new Ma(new $a(), [new Ea(E, " ed")]), new tl(1)),
                  m = new ac(
                    [
                      new oc("publicationCity", !1, gi, E, E, E, new pa(), new el()),
                      new oc("publisher", !0, _i, E, E, E, new pa(), new el())
                    ],
                    E,
                    E,
                    ": "
                  ),
                  g = new Ca(),
                  _ = new Xc(),
                  p = new oc("doi", !1, pi, E, E, E, g, _),
                  y = new Aa(),
                  v = new sl(),
                  b = [n, i, o, l, d, w, m, new cc(!1, [p, new oc("url", !1, yi, E, E, E, y, v)])];
                t.eb_1 = new Gt(new rc([new ac(b, E, e, ". ")]), Li().za_1);
              }
              function bi(t) {
                return t.authors;
              }
              function Ti(t) {
                return t.title;
              }
              function xi(t) {
                return t.dissertationType;
              }
              function Ci(t) {
                return t.university;
              }
              function Fi(t) {
                return t.publishingYear();
              }
              function Si() {
                var t = this,
                  e = new ua(),
                  n = new Qc(),
                  i = new oc("authors", !0, bi, E, ".", E, e, n),
                  r = [new uc(".")],
                  u = new pa(),
                  s = new el(),
                  o = [
                    new oc("title", !0, Ti, '"', '."', E, u, s),
                    new ac(
                      [
                        new oc("dissertationType", !0, xi, E, E, E, new ba(), new el()),
                        new oc("university", !1, Ci, E, E, E, new pa(), new el()),
                        new oc("publishingYear", !0, Fi, E, E, E, new Na(), new za())
                      ],
                      E,
                      E,
                      ", "
                    )
                  ],
                  a = [i, new ac(o, E, r, " ")];
                t.fb_1 = new Gt(new rc([new ac(a, E, E, " ")]), Li().za_1);
              }
              function ki(t) {
                return t.productName;
              }
              function Ni(t) {
                return t.promptDescription;
              }
              function $i(t) {
                return t.promptText;
              }
              function Ii(t) {
                return t.accessedDate;
              }
              function qi(t) {
                return t.company;
              }
              function Di(t) {
                return t.url;
              }
              function Mi(t) {
                return t.productName;
              }
              function Ai(t) {
                return t.accessedDate;
              }
              function Ei() {
                var t = this,
                  e = new oc("productName", !0, ki, E, E, E, new pa(), new el()),
                  n = new ac(
                    [
                      new oc("promptDescription", !1, Ni, E, E, E, new Aa(), new el()),
                      new oc("promptText", !1, $i, '"', '"', E, new Aa(), new el())
                    ],
                    E,
                    E,
                    " "
                  ),
                  i = new oc("accessedDate", !0, Ii, E, E, E, Li().bb_1, new Kc()),
                  r = new oc("company", !0, qi, E, E, E, new tc(), new el()),
                  u = new Aa(),
                  s = new sl(),
                  o = [e, n, i, r, new oc("url", !0, Di, E, E, E, u, s)],
                  a = [new uc(".")],
                  c = new rc([new ac(o, E, a, ", ")]),
                  l = [new uc("(")],
                  h = [new uc(")")],
                  f = [
                    new oc("productName", !0, Mi, E, E, E, new Aa(), new el()),
                    new oc("accessedDate", !0, Ai, E, E, E, new Sa(), new Kc())
                  ];
                t.gb_1 = new Gt(c, new rc([new ac(f, l, h, " ")]));
              }
              function Ri(t) {
                return t.authors;
              }
              function Oi(t) {
                return t.publishingYear();
              }
              function Vi(t) {
                return t.inTextPagesCited;
              }
              function zi(t) {
                return t.authors;
              }
              function Pi(t) {
                return t.publishingYear();
              }
              function ji() {
                i = this;
                var t = this,
                  e = [new uc("(")],
                  n = [new uc(")")],
                  r = new ac(
                    [
                      new oc("authors", !0, Ri, E, E, E, new ka(xc()), new Qc()),
                      new oc("publishingYear", !0, Oi, E, E, E, new Na(), new za())
                    ],
                    E,
                    E,
                    " "
                  ),
                  u = [new ac([r, new oc("inTextPagesCited", !0, Vi, E, E, E, new xa(!1), new nl())], E, E, ", ")];
                t.za_1 = new rc([new ac(u, e, n)]);
                var s = this,
                  o = [new uc("(")],
                  a = [new uc(")")],
                  c = [
                    new oc("authors", !0, zi, E, E, E, new ka(xc()), new Qc()),
                    new oc("publishingYear", !0, Pi, E, E, E, new Na(), new za())
                  ];
                (s.ab_1 = new rc([new ac(c, o, a, " ")])), (this.bb_1 = new Fa("M d, yyyy")), (this.cb_1 = new Fa("yyyy"));
              }
              function Li() {
                return null == i && new ji(), i;
              }
              function Zi(t) {
                return t.creators;
              }
              function Yi(t) {
                return t.title;
              }
              function Gi(t) {
                return t.publishingYear();
              }
              function Wi(t) {
                return t.imageType;
              }
              function Ui(t) {
                return t.publisher;
              }
              function Hi(t) {
                return t.publishingDate();
              }
              function Bi(t) {
                return t.creators;
              }
              function Ji(t) {
                return t.publishingDate();
              }
              function Qi() {
                var t = this,
                  e = [new uc(".")],
                  n = new oc("creators", !0, Zi, E, E, E, new ua(), new Qc()),
                  i = new L(!1, !0, !1),
                  r = new pa(),
                  u = new el(),
                  s = new oc("title", !0, Yi, E, E, i, r, u),
                  o = new oc("publishingYear", !0, Gi, E, E, E, new Na(), new za()),
                  a = new ba(),
                  c = new el(),
                  l = new oc("imageType", !1, Wi, E, E, E, a, c),
                  h = new L(!1, !0, !1),
                  f = new pa(),
                  d = new el(),
                  w = [
                    n,
                    s,
                    o,
                    l,
                    new ac(
                      [new oc("publisher", !1, Ui, E, E, h, f, d), new oc("publishingDate", !0, Hi, E, E, E, Li().bb_1, new Kc())],
                      E,
                      E,
                      ", "
                    )
                  ],
                  m = new rc([new ac(w, E, e, ". ")]),
                  g = [new uc("(")],
                  _ = [new uc(")")],
                  p = [
                    new oc("creators", !0, Bi, E, E, E, new ka(xc()), new Qc()),
                    new oc("publishingDate", !0, Ji, E, E, E, Li().cb_1, new Kc())
                  ];
                t.hb_1 = new Gt(m, new rc([new ac(p, g, _, " ")]));
              }
              function Xi(t) {
                return t.authors;
              }
              function Ki(t) {
                return t.title;
              }
              function tr(t) {
                return t.periodicalTitle;
              }
              function er(t) {
                return t.volume;
              }
              function nr(t) {
                return t.issue;
              }
              function ir(t) {
                return t.publishingYear();
              }
              function rr(t) {
                return t.pagesRange;
              }
              function ur(t) {
                return t.accessedDate;
              }
              function sr(t) {
                return t.doi;
              }
              function or(t) {
                return t.url;
              }
              function ar() {
                var t = this,
                  e = new oc("authors", !0, Xi, E, ".", E, new ua(), new Qc()),
                  n = new pa(),
                  i = new el(),
                  r = new oc("title", !0, Ki, '"', '."', E, n, i),
                  u = new L(!1, !0, !1),
                  s = new pa(),
                  o = new el(),
                  a = new oc("periodicalTitle", !0, tr, E, E, u, s, o),
                  c = new L(!1, !0, !1),
                  l = new Aa(),
                  h = new el(),
                  f = [a, new oc("volume", !1, er, E, E, c, l, h)],
                  d = [new uc(",")],
                  w = [
                    new ac(f, E, d, " "),
                    new oc("issue", !1, nr, "no. ", E, E, new Aa(), new el()),
                    new ac(
                      [
                        new oc("publishingYear", !0, ir, "(", ")", E, new Na(), new za()),
                        new oc("pagesRange", !1, rr, E, E, E, new xa(!1), new nl())
                      ],
                      E,
                      E,
                      ": "
                    )
                  ],
                  m = [new uc(".")],
                  g = new ac(w, E, m, " "),
                  _ = Li().bb_1,
                  p = new Kc(),
                  y = new oc("accessedDate", !0, ur, "Accessed ", ".", E, _, p),
                  v = new Ca(),
                  b = new Xc(),
                  T = new oc("doi", !1, sr, E, ".", E, v, b),
                  x = new Aa(),
                  C = new sl(),
                  F = [e, r, g, y, new cc(!1, [T, new oc("url", !1, or, E, ".", E, x, C)])];
                t.ib_1 = new Gt(new rc([new ac(F, E, E, " ")]), Li().ab_1);
              }
              function cr(t) {
                return t.authors;
              }
              function lr(t) {
                return t.title;
              }
              function hr(t) {
                return t.lectureType;
              }
              function fr(t) {
                return t.venue;
              }
              function dr(t) {
                return t.location;
              }
              function wr(t) {
                return t.publishingDate();
              }
              function mr(t) {
                return t.authors;
              }
              function gr(t) {
                return t.publishingDate();
              }
              function _r() {
                var t = this,
                  e = new ua(),
                  n = new Qc(),
                  i = new oc("authors", !0, cr, E, ".", E, e, n),
                  r = [new uc(".")],
                  u = new pa(),
                  s = new el(),
                  o = new oc("title", !0, lr, '"', '."', E, u, s),
                  a = new ac(
                    [new oc("lectureType", !0, hr, E, E, E, new ba(), new el()), new oc("venue", !1, fr, E, E, E, new pa(), new el())],
                    E,
                    E,
                    " at "
                  ),
                  c = [
                    o,
                    new ac(
                      [
                        a,
                        new oc("location", !1, dr, E, E, E, new pa(), new el()),
                        new oc("publishingDate", !0, wr, E, E, E, Li().bb_1, new Kc())
                      ],
                      E,
                      E,
                      ", "
                    )
                  ],
                  l = [i, new ac(c, E, r, " ")],
                  h = new rc([new ac(l, E, E, " ")]),
                  f = [new uc("(")],
                  d = [new uc(")")],
                  w = [
                    new oc("authors", !0, mr, E, E, E, new ka(xc()), new Qc()),
                    new oc("publishingDate", !0, gr, E, E, E, Li().cb_1, new Kc())
                  ];
                t.jb_1 = new Gt(h, new rc([new ac(w, f, d, " ")]));
              }
              function pr(t) {
                return t.directors;
              }
              function yr(t) {
                return t.title;
              }
              function vr(t) {
                return t.studio;
              }
              function br(t) {
                return t.publishingYear();
              }
              function Tr(t) {
                return t.movieLength;
              }
              function xr(t) {
                return t.url;
              }
              function Cr(t) {
                return t.directors;
              }
              function Fr(t) {
                return t.publishingYear();
              }
              function Sr(t) {
                return t.inTextTimeStamp;
              }
              function kr() {
                var t = this,
                  e = [new uc(".")],
                  n = new oc("directors", !0, pr, E, E, E, new oa(), new Qc()),
                  i = new L(!1, !0, !1),
                  r = new pa(),
                  u = new el(),
                  s = new oc("title", !0, yr, E, E, i, r, u),
                  o = new pa(),
                  a = new el(),
                  c = new ac(
                    [new oc("studio", !0, vr, E, E, E, o, a), new oc("publishingYear", !0, br, E, E, E, new Na(), new za())],
                    E,
                    E,
                    ", "
                  ),
                  l = new ca(),
                  h = new ul(),
                  f = new oc("movieLength", !1, Tr, E, E, E, l, h),
                  d = new Aa(),
                  w = new el(),
                  m = new rc([new ac([n, s, c, f, new oc("url", !1, xr, E, E, E, d, w)], E, e, ". ")]),
                  g = [new uc("(")],
                  _ = [new uc(")")],
                  p = new ac(
                    [
                      new oc("directors", !0, Cr, E, E, E, new ka(xc()), new Qc()),
                      new oc("publishingYear", !0, Fr, E, E, E, new Na(), new za())
                    ],
                    E,
                    E,
                    " "
                  ),
                  y = [new ac([p, new oc("inTextTimeStamp", !0, Sr, E, E, E, new Oa(), new ul())], E, E, ", ")];
                t.kb_1 = new Gt(m, new rc([new ac(y, g, _)]));
              }
              function Nr(t) {
                return t.authors;
              }
              function $r(t) {
                return t.title;
              }
              function Ir(t) {
                return t.username;
              }
              function qr(t) {
                return t.publishingDate();
              }
              function Dr(t) {
                return t.timestamp;
              }
              function Mr(t) {
                return t.url;
              }
              function Ar(t) {
                return t.username;
              }
              function Er(t) {
                return t.authors;
              }
              function Rr(t) {
                return t.publishingDate();
              }
              function Or(t) {
                return t.timestamp;
              }
              function Vr() {
                var t = this,
                  e = new ua(),
                  n = new Qc(),
                  i = new oc("authors", !1, Nr, E, ".", E, e, n),
                  r = new pa(),
                  u = new el(),
                  s = new oc("title", !0, $r, '"', '."', E, r, u),
                  o = [new uc(".")],
                  a = [
                    new oc("username", !0, Ir, E, E, E, new pa(), new el()),
                    new oc("publishingDate", !0, qr, E, E, E, Li().bb_1, new Kc()),
                    new ac(
                      [
                        new uc("Video"),
                        new oc("timestamp", !1, Dr, E, E, E, new Oa(), new ul()),
                        new oc("url", !0, Mr, E, E, E, new Aa(), new sl())
                      ],
                      E,
                      E,
                      ", "
                    )
                  ],
                  c = [i, s, new ac(a, E, o, ". ")],
                  l = new rc([new ac(c, E, E, " ")]),
                  h = [new uc("(")],
                  f = [new uc(")")],
                  d = new ac(
                    [
                      new cc(!0, [
                        new oc("username", !0, Ar, E, E, E, new pa(), new el()),
                        new oc("authors", !1, Er, E, E, E, new ka(xc()), new Qc())
                      ]),
                      new oc("publishingDate", !0, Rr, E, E, E, Li().cb_1, new Kc())
                    ],
                    E,
                    E,
                    " "
                  ),
                  w = [new ac([d, new oc("timestamp", !0, Or, E, E, E, new Oa(), new ul())], E, E, ", ")];
                t.lb_1 = new Gt(l, new rc([new ac(w, h, f)]));
              }
              function zr(t) {
                return t.authors;
              }
              function Pr(t) {
                return t.title;
              }
              function jr(t) {
                return t.websiteName;
              }
              function Lr(t) {
                return t.organization;
              }
              function Zr(t) {
                return t.publishingDate();
              }
              function Yr(t) {
                return t.accessedDate;
              }
              function Gr(t) {
                return t.doi;
              }
              function Wr(t) {
                return t.url;
              }
              function Ur(t) {
                return t.authors;
              }
              function Hr(t) {
                return t.publishingDate();
              }
              function Br() {
                var t = this,
                  e = new ua(),
                  n = new Qc(),
                  i = new oc("authors", !1, zr, E, ".", E, e, n),
                  r = new pa(),
                  u = new el(),
                  s = new oc("title", !0, Pr, '"', '."', E, r, u),
                  o = new pa(),
                  a = new el(),
                  c = new oc("websiteName", !0, jr, E, ".", E, o, a),
                  l = new pa(),
                  h = new el(),
                  f = new oc("organization", !1, Lr, E, ",", E, l, h),
                  d = Li().bb_1,
                  w = new Kc(),
                  m = new oc("publishingDate", !0, Zr, E, ".", E, d, w),
                  g = Li().bb_1,
                  _ = new Kc(),
                  p = new cc(!0, [m, new oc("accessedDate", !1, Yr, "Accessed ", ".", E, g, _)]),
                  y = new Ca(),
                  v = new Xc(),
                  b = new oc("doi", !0, Gr, E, ".", E, y, v),
                  T = new Aa(),
                  x = new sl(),
                  C = new rc([new ac([i, s, c, f, p, new cc(!0, [b, new oc("url", !1, Wr, E, ".", E, T, x)])], E, E, " ")]),
                  F = [new uc("(")],
                  S = [new uc(")")],
                  k = new oc("authors", !0, Ur, E, E, E, new ka(xc()), new Qc()),
                  N = Li().cb_1,
                  $ = new Kc(),
                  I = [k, new cc(!0, [new oc("publishingDate", !0, Hr, E, E, E, N, $), new uc("n.d.")])];
                t.mb_1 = new Gt(C, new rc([new ac(I, F, S, " ")]));
              }
              function Jr(t) {
                return t.publishingYear();
              }
              function Qr(t) {
                return t.title;
              }
              function Xr(t) {
                return t.publishingDate();
              }
              function Kr(t) {
                return t.url;
              }
              function tu(t) {
                return t.publishingYear();
              }
              function eu() {
                var t = this,
                  e = [new uc("Wikipedia.")],
                  n = new oc("publishingYear", !0, Jr, " ", ".", E, new Na(), new za()),
                  i = new pa(),
                  r = new el(),
                  u = new ac([n, new oc("title", !0, Qr, ' "', '."', E, i, r)], e, [new uc(" Wikimedia Foundation.")]),
                  s = new oc("publishingDate", !0, Xr, " Last modified ", ".", E, Li().bb_1, new Kc()),
                  o = new Aa(),
                  a = new el(),
                  c = new rc([u, s, new oc("url", !0, Kr, " ", ".", E, o, a)]),
                  l = new Na(),
                  h = new za();
                t.nb_1 = new Gt(c, new rc([new oc("publishingYear", !0, tu, "(Wikipedia ", ")", E, l, h)]));
              }
              function nu(t) {
                return t.authors;
              }
              function iu(t) {
                return t.title;
              }
              function ru(t) {
                return t.periodicalTitle;
              }
              function uu(t) {
                return t.publishingDate();
              }
              function su(t) {
                return t.pagesRange;
              }
              function ou(t) {
                return t.doi;
              }
              function au(t) {
                return t.url;
              }
              function cu(t) {
                return t.authors;
              }
              function lu(t) {
                return t.title;
              }
              function hu(t) {
                return t.inTextPagesCited;
              }
              function fu() {
                var t = this,
                  e = new ac(
                    [new oc("authors", !1, nu, E, ".", E, new Ya(), new Qc()), new oc("title", !0, iu, '"', '."', E, new tc(), new el())],
                    E,
                    E,
                    " "
                  ),
                  n = [new uc(" ")],
                  i = new tc(),
                  r = new el(),
                  u = new L(!1, !0, !1),
                  s = new ac(
                    [
                      new oc("periodicalTitle", !0, ru, E, E, u, i, r),
                      new oc("publishingDate", !0, uu, E, E, E, new Ga(), new Kc()),
                      new oc("pagesRange", !1, su, E, E, E, new xa(!0), new nl())
                    ],
                    n,
                    [new uc(".")],
                    ", "
                  ),
                  o = new Ca(),
                  a = new Xc(),
                  c = new oc("doi", !1, ou, " ", E, E, o, a),
                  l = new Aa(),
                  h = new sl(),
                  f = new rc([e, s, new cc(!1, [c, new oc("url", !1, au, " ", E, E, l, h)])]),
                  d = [new uc("(")],
                  w = new ka(Tc()),
                  m = new Qc(),
                  g = new oc("authors", !0, cu, E, E, E, w, m),
                  _ = new tc(),
                  p = new el(),
                  y = [
                    new cc(!0, [g, new oc("title", !0, lu, '"', '"', E, _, p)]),
                    new oc("inTextPagesCited", !0, hu, E, E, E, new xa(!1), new nl())
                  ],
                  v = [new uc(")")];
                t.ob_1 = new Gt(f, new rc([new ac(y, d, v, " ")]));
              }
              function du(t) {
                return t.bibleVersion;
              }
              function wu(t) {
                return t.edition;
              }
              function mu(t) {
                return t.publisher;
              }
              function gu(t) {
                return t.publishingYear();
              }
              function _u(t) {
                return t.bibleVersion;
              }
              function pu(t) {
                return t.bibleBook;
              }
              function yu(t) {
                return t.bibleChapter;
              }
              function vu(t) {
                return t.bibleVerses;
              }
              function bu() {
                var t = this,
                  e = [new uc("The Bible. ", !0)],
                  n = new oc("bibleVersion", !0, du, E, E, E, new tc(), new el()),
                  i = new oc("edition", !1, wu, E, E, E, new Ma(new $a(), [new Ea(E, " ed.")]), new tl(1)),
                  r = new tc(),
                  u = new el(),
                  s = new L(!1, !0, !1),
                  o = new rc([
                    new ac(
                      [n, i, new oc("publisher", !0, mu, E, E, s, r, u), new oc("publishingYear", !0, gu, E, E, E, new Na(), new za())],
                      e,
                      [new uc(".")],
                      ", "
                    )
                  ]),
                  a = [new uc("(")],
                  c = new tc(),
                  l = new el(),
                  h = new L(!1, !0, !1),
                  f = [
                    new oc("bibleVersion", !0, _u, E, ", ", h, c, l),
                    new oc("bibleBook", !0, pu, E, " ", E, new Aa(), new el()),
                    new ac(
                      [
                        new oc("bibleChapter", !0, yu, E, E, E, new Na(), new tl(1)),
                        new oc("bibleVerses", !0, vu, E, E, E, new xa(!1), new nl())
                      ],
                      E,
                      E,
                      "."
                    )
                  ],
                  d = [new uc(")")];
                t.pb_1 = new Gt(o, new rc([new ac(f, a, d)]));
              }
              function Tu(t) {
                return t.authors;
              }
              function xu(t) {
                return t.title;
              }
              function Cu(t) {
                return t.translators;
              }
              function Fu(t, e) {
                return new oc(
                  "editors",
                  !1,
                  Su,
                  null != t.translators && 0 !== t.translators.length ? "edited by " : "Edited by ",
                  E,
                  E,
                  new Ha(),
                  new Qc()
                ).la(t, e);
              }
              function Su(t) {
                return t.editors;
              }
              function ku(t) {
                return t.edition;
              }
              function Nu(t) {
                return t.volume;
              }
              function $u(t, e) {
                var n = t.publishingYear();
                return null == t.publicationCity || !new el().ua(t.publicationCity) || null == n || n >= 1900
                  ? new hc([], [], !0)
                  : new hc([], [new ol("publicationCity", new tc().va(t.publicationCity))], !0);
              }
              function Iu(t) {
                return t.publisher;
              }
              function qu(t) {
                return t.publishingYear();
              }
              function Du(t) {
                return t.doi;
              }
              function Mu(t) {
                return t.pagesRange;
              }
              function Au(t) {
                return t.authors;
              }
              function Eu(t) {
                return t.title;
              }
              function Ru(t) {
                return t.inTextPagesCited;
              }
              function Ou() {
                var t,
                  e = this,
                  n = new oc("authors", !1, Tu, E, ".", E, new Ya(), new Qc()),
                  i = new tc(),
                  r = new el(),
                  u = new L(!1, !0, !1),
                  s = [n, new oc("title", !0, xu, E, ".", u, i, r)];
                t = [new uc(" ")];
                var o,
                  a = new ac(s, E, t, " "),
                  c = new oc("translators", !1, Cu, "Translated by ", E, E, new Ha(), new Qc()),
                  l = new sc([new dc("editors", !1)], Fu),
                  h = new oc("edition", !1, ku, E, E, E, new Ma(new $a(), [new Ea(E, " ed.")]), new tl(1)),
                  f = new Aa(),
                  d = new el(),
                  w = new oc("volume", !1, Nu, "vol. ", E, E, f, d),
                  m = new sc([new dc("publicationCity", !1)], $u),
                  g = new tc(),
                  _ = new el(),
                  p = new L(!1, !0, !1),
                  y = [
                    c,
                    l,
                    h,
                    w,
                    m,
                    new oc("publisher", !0, Iu, E, E, p, g, _),
                    new oc("publishingYear", !0, qu, E, E, E, new Na(), new za()),
                    new oc("doi", !1, Du, E, E, E, new Ca(), new Xc())
                  ];
                o = [new uc(".")];
                var v = new rc([a, new ac(y, E, o, ", "), new oc("pagesRange", !1, Mu, " ", ".", E, new xa(!0), new nl())]),
                  b = [new uc("(")],
                  T = new ka(Tc()),
                  x = new Qc(),
                  C = new oc("authors", !0, Au, E, E, E, T, x),
                  F = new tc(),
                  S = new el(),
                  k = [
                    new cc(!0, [C, new oc("title", !0, Eu, '"', '"', E, F, S)]),
                    new oc("inTextPagesCited", !0, Ru, E, E, E, new xa(!1), new nl())
                  ],
                  N = [new uc(")")];
                e.vb_1 = new Gt(v, new rc([new ac(k, b, N, " ")]));
              }
              function Vu(t) {
                return t.authors;
              }
              function zu(t) {
                return t.title;
              }
              function Pu(t) {
                return t.publishingYear();
              }
              function ju(t) {
                return t.university;
              }
              function Lu(t) {
                return t.dissertationType;
              }
              function Zu(t) {
                return t.database;
              }
              function Yu(t) {
                return t.authors;
              }
              function Gu(t) {
                return t.title;
              }
              function Wu(t) {
                return t.inTextPagesCited;
              }
              function Uu() {
                var t = this,
                  e = new oc("authors", !1, Vu, E, ". ", E, new Ya(), new Qc()),
                  n = new tc(),
                  i = new el(),
                  r = new L(!1, !0, !1),
                  u = new oc("title", !0, zu, E, ". ", r, n, i),
                  s = new oc("publishingYear", !0, Pu, E, ". ", E, new Na(), new za()),
                  o = new oc("university", !1, ju, E, ", ", E, new tc(), new el()),
                  a = new oc("dissertationType", !0, Lu, E, ".", E, new ba(), new el()),
                  c = new tc(),
                  l = new el(),
                  h = new rc([e, u, s, o, a, new oc("database", !1, Zu, " ", ".", new L(!1, !0, !1), c, l)]),
                  f = [new uc("(")],
                  d = new ka(Tc()),
                  w = new Qc(),
                  m = new oc("authors", !0, Yu, E, E, E, d, w),
                  g = new tc(),
                  _ = new el(),
                  p = [
                    new cc(!0, [m, new oc("title", !0, Gu, '"', '"', E, g, _)]),
                    new oc("inTextPagesCited", !0, Wu, E, E, E, new xa(!1), new nl())
                  ],
                  y = [new uc(")")];
                t.wb_1 = new Gt(h, new rc([new ac(p, f, y, " ")]));
              }
              function Hu(t) {
                return t.promptText;
              }
              function Bu(t) {
                return t.promptDescription;
              }
              function Ju(t) {
                return t.productName;
              }
              function Qu(t) {
                return t.modelVersion;
              }
              function Xu(t) {
                return t.company;
              }
              function Ku(t) {
                return t.accessedDate;
              }
              function ts(t) {
                return t.url;
              }
              function es(t) {
                return t.shortenedPromptText;
              }
              function ns() {
                var t = this,
                  e = new ac(
                    [
                      new oc("promptText", !0, Hu, '"', '"', E, new Aa(), new el()),
                      new oc("promptDescription", !0, Bu, E, E, E, new Aa(), new el())
                    ],
                    E,
                    E,
                    " "
                  ),
                  n = new tc(),
                  i = new el(),
                  r = new L(!1, !0, !1),
                  u = new ac(
                    [
                      new oc("productName", !0, Ju, E, E, r, n, i),
                      new oc("modelVersion", !1, Qu, E, E, E, new Aa(), new el()),
                      new oc("company", !0, Xu, E, E, E, new tc(), new el()),
                      new oc("accessedDate", !0, Ku, E, E, E, new Ga(), new Kc())
                    ],
                    E,
                    E,
                    ", "
                  ),
                  s = new Aa(),
                  o = new sl(),
                  a = [e, u, new oc("url", !0, ts, E, E, E, s, o)],
                  c = [new uc(".")],
                  l = new rc([new ac(a, E, c, ". ")]);
                t.xb_1 = new Gt(l, new rc([new oc("shortenedPromptText", !0, es, '("', '")', E, new Aa(), new el())]));
              }
              function is(t) {
                return t.creators;
              }
              function rs(t) {
                return t.title;
              }
              function us(t) {
                return t.websiteName;
              }
              function ss(t) {
                return t.publishingDate();
              }
              function os(t) {
                return t.url;
              }
              function as(t) {
                return t.accessedDate;
              }
              function cs(t) {
                return t.creators;
              }
              function ls(t) {
                return t.title;
              }
              function hs() {
                var t = this,
                  e = new oc("creators", !1, is, E, ". ", E, new Ya(), new Qc()),
                  n = new oc("title", !0, rs, '"', '." ', E, new tc(), new el()),
                  i = [new uc(".")],
                  r = new tc(),
                  u = new el(),
                  s = new L(!1, !0, !1),
                  o = new rc([
                    e,
                    n,
                    new ac(
                      [
                        new oc("websiteName", !0, us, E, E, s, r, u),
                        new oc("publishingDate", !0, ss, E, E, E, new Ga(), new Kc()),
                        new oc("url", !0, os, E, E, E, new Va(), new sl())
                      ],
                      E,
                      i,
                      ", "
                    ),
                    new oc("accessedDate", !1, as, " Accessed ", ".", E, new Ga(), new Kc())
                  ]),
                  a = [new uc("(")],
                  c = new ka(Tc()),
                  l = new Qc(),
                  h = new oc("creators", !0, cs, E, E, E, c, l),
                  f = new tc(),
                  d = new el(),
                  w = [new cc(!0, [h, new oc("title", !0, ls, '"', '"', E, f, d)])],
                  m = [new uc(")")];
                t.yb_1 = new Gt(o, new rc([new ac(w, a, m)]));
              }
              function fs(t) {
                return t.authors;
              }
              function ds(t) {
                return t.title;
              }
              function ws(t) {
                return t.periodicalTitle;
              }
              function ms(t) {
                return t.volume;
              }
              function gs(t) {
                return t.issue;
              }
              function _s(t) {
                return t.publishingYear();
              }
              function ps(t) {
                return t.pagesRange;
              }
              function ys(t) {
                return t.doi;
              }
              function vs(t) {
                return t.url;
              }
              function bs(t) {
                return t.accessedDate;
              }
              function Ts(t) {
                return t.authors;
              }
              function xs(t) {
                return t.title;
              }
              function Cs(t) {
                return t.inTextPagesCited;
              }
              function Fs() {
                var t = this,
                  e = new ac(
                    [new oc("authors", !0, fs, E, ".", E, new Ya(), new Qc()), new oc("title", !0, ds, '"', '."', E, new tc(), new el())],
                    E,
                    E,
                    " "
                  ),
                  n = [new uc(" ")],
                  i = new tc(),
                  r = new el(),
                  u = new L(!1, !0, !1),
                  s = new oc("periodicalTitle", !0, ws, E, E, u, i, r),
                  o = new oc("volume", !1, ms, "vol. ", E, E, new Aa(), new el()),
                  a = new oc("issue", !1, gs, "no. ", E, E, new Aa(), new el()),
                  c = new oc("publishingYear", !0, _s, E, E, E, new Na(), new za()),
                  l = new oc("pagesRange", !1, ps, E, E, E, new xa(!0), new nl()),
                  h = new Ca(),
                  f = new Xc(),
                  d = new oc("doi", !0, ys, " ", E, E, h, f),
                  w = new Aa(),
                  m = new sl(),
                  g = new rc([
                    e,
                    new ac([s, o, a, c, l, new cc(!0, [d, new oc("url", !1, vs, " ", E, E, w, m)])], n, [new uc(".")], ", "),
                    new oc("accessedDate", !1, bs, " Accessed ", ".", E, new Ga(), new Kc())
                  ]),
                  _ = [new uc("(")],
                  p = new ka(Tc()),
                  y = new Qc(),
                  v = new oc("authors", !0, Ts, E, E, E, p, y),
                  b = new tc(),
                  T = new el(),
                  x = [
                    new cc(!0, [v, new oc("title", !0, xs, '"', '"', E, b, T)]),
                    new oc("inTextPagesCited", !0, Cs, E, E, E, new xa(!1), new nl())
                  ],
                  C = [new uc(")")];
                t.zb_1 = new Gt(g, new rc([new ac(x, _, C, " ")]));
              }
              function Ss(t) {
                return t.authors;
              }
              function ks(t) {
                return t.title;
              }
              function Ns(t) {
                return t.conferenceTitle;
              }
              function $s(t) {
                return t.organization;
              }
              function Is(t) {
                return t.publishingDate();
              }
              function qs(t) {
                return t.venue;
              }
              function Ds(t) {
                return t.city;
              }
              function Ms(t) {
                return t.lectureType;
              }
              function As(t) {
                return t.authors;
              }
              function Es(t) {
                return t.inTextPagesCited;
              }
              function Rs() {
                var t = this,
                  e = new oc("authors", !0, Ss, E, ". ", E, new Ya(), new Qc()),
                  n = new tc(),
                  i = new el(),
                  r = new oc("title", !0, ks, '"', '."', E, n, i),
                  u = [new uc(" ")],
                  s = new rc([
                    e,
                    r,
                    new ac(
                      [
                        new oc("conferenceTitle", !1, Ns, E, E, E, new tc(), new el()),
                        new oc("organization", !1, $s, E, E, E, new tc(), new el()),
                        new oc("publishingDate", !0, Is, E, E, E, new Ga(), new Kc()),
                        new oc("venue", !1, qs, E, E, E, new tc(), new el()),
                        new oc("city", !1, Ds, E, E, E, new tc(), new el())
                      ],
                      u,
                      [new uc(".")],
                      ", "
                    ),
                    new oc("lectureType", !0, Ms, " ", ".", E, new ba(), new el())
                  ]),
                  o = [new uc("(")],
                  a = [
                    new oc("authors", !0, As, E, E, E, new ka(Tc()), new Qc()),
                    new oc("inTextPagesCited", !0, Es, E, E, E, new xa(!1), new nl())
                  ],
                  c = [new uc(")")];
                t.ac_1 = new Gt(s, new rc([new ac(a, o, c, ", ")]));
              }
              function Os(t) {
                return t.title;
              }
              function Vs(t) {
                return t.directors;
              }
              function zs(t, e) {
                return new oc(
                  "actors",
                  !1,
                  Ps,
                  null != t.directors && 0 !== t.directors.length ? "performances by " : "Performances by ",
                  E,
                  E,
                  new Ha(),
                  new Qc()
                ).la(t, e);
              }
              function Ps(t) {
                return t.actors;
              }
              function js(t) {
                return t.studio;
              }
              function Ls(t) {
                return t.publishingYear();
              }
              function Zs(t) {
                return t.title;
              }
              function Ys(t) {
                return t.inTextTimeStamp;
              }
              function Gs() {
                var t = this,
                  e = [new uc(".")],
                  n = new tc(),
                  i = new el(),
                  r = new L(!1, !0, !1),
                  u = [
                    new oc("title", !0, Os, E, E, r, n, i),
                    new ac(
                      [
                        new oc("directors", !0, Vs, "Directed by ", E, E, new Ha(), new Qc()),
                        new sc([new dc("actors", !1)], zs),
                        new oc("studio", !0, js, E, E, E, new tc(), new el()),
                        new oc("publishingYear", !0, Ls, E, E, E, new Na(), new za())
                      ],
                      E,
                      E,
                      ", "
                    )
                  ],
                  s = new rc([new ac(u, E, e, ". ")]),
                  o = [new uc("(")],
                  a = [new uc(")")],
                  c = [
                    new oc("title", !0, Zs, E, E, new L(!1, !0, !1), new tc(), new el()),
                    new oc("inTextTimeStamp", !0, Ys, E, E, E, new Oa(), new ul())
                  ];
                t.bc_1 = new Gt(s, new rc([new ac(c, o, a, " ")]));
              }
              function Ws(t) {
                return t.authors;
              }
              function Us(t) {
                return t.title;
              }
              function Hs(t) {
                return t.websiteName;
              }
              function Bs(t) {
                return t.username;
              }
              function Js(t) {
                return t.publishingDate();
              }
              function Qs(t) {
                return t.url;
              }
              function Xs(t) {
                return t.title;
              }
              function Ks(t) {
                return t.authors;
              }
              function to(t) {
                return t.inTextTimeStamp;
              }
              function eo() {
                var t,
                  e = this,
                  n = new oc("authors", !1, Ws, E, ".", E, new Ya(), new Qc()),
                  i = new oc("title", !0, Us, '"', '."', E, new tc(), new el()),
                  r = new tc(),
                  u = new el(),
                  s = new L(!1, !0, !1),
                  o = [
                    new oc("websiteName", !0, Hs, E, E, s, r, u),
                    new oc("username", !0, Bs, "uploaded by ", E, E, new tc(), new el()),
                    new oc("publishingDate", !0, Js, E, E, E, new Ga(), new Kc()),
                    new oc("url", !0, Qs, E, E, E, new Va(), new sl())
                  ];
                t = [new uc(".")];
                var a = [n, i, new ac(o, E, t, ", ")],
                  c = new rc([new ac(a, E, E, " ")]),
                  l = [new uc("(")],
                  h = new tc(),
                  f = new el(),
                  d = new oc("title", !0, Xs, '"', '"', E, h, f),
                  w = new ka(Tc()),
                  m = new Qc(),
                  g = [
                    new cc(!0, [d, new oc("authors", !1, Ks, E, E, E, w, m)]),
                    new oc("inTextTimeStamp", !0, to, E, E, E, new Oa(), new ul())
                  ],
                  _ = [new uc(")")];
                e.cc_1 = new Gt(c, new rc([new ac(g, l, _, " ")]));
              }
              function no(t) {
                return t.authors;
              }
              function io(t) {
                return t.title;
              }
              function ro(t) {
                return t.websiteName;
              }
              function uo(t) {
                return t.publishingDate();
              }
              function so(t) {
                return t.url;
              }
              function oo(t) {
                return t.accessedDate;
              }
              function ao(t) {
                return t.authors;
              }
              function co(t) {
                return t.title;
              }
              function lo() {
                var t = this,
                  e = new oc("authors", !1, no, E, ". ", E, new Ya(), new Qc()),
                  n = new oc("title", !0, io, '"', '." ', E, new tc(), new el()),
                  i = [new uc(".")],
                  r = new tc(),
                  u = new el(),
                  s = new L(!1, !0, !1),
                  o = new rc([
                    e,
                    n,
                    new ac(
                      [
                        new oc("websiteName", !0, ro, E, E, s, r, u),
                        new oc("publishingDate", !0, uo, E, E, E, new Ga(), new Kc()),
                        new oc("url", !0, so, E, E, E, new Va(), new sl())
                      ],
                      E,
                      i,
                      ", "
                    ),
                    new oc("accessedDate", !1, oo, " Accessed ", ".", E, new Ga(), new Kc())
                  ]),
                  a = [new uc("(")],
                  c = new ka(Tc()),
                  l = new Qc(),
                  h = new oc("authors", !0, ao, E, E, E, c, l),
                  f = new tc(),
                  d = new el(),
                  w = [new cc(!0, [h, new oc("title", !0, co, '"', '"', E, f, d)])],
                  m = [new uc(")")];
                t.dc_1 = new Gt(o, new rc([new ac(w, a, m)]));
              }
              function ho(t) {
                return t.title;
              }
              function fo(t) {
                return t.publishingDate();
              }
              function wo(t) {
                return t.url;
              }
              function mo(t) {
                return t.accessedDate;
              }
              function go(t) {
                return t.title;
              }
              function _o() {
                var t = this,
                  e = new oc("title", !0, ho, '"', '."', E, new tc(), new el()),
                  n = [new uc(" "), new uc("Wikipedia", !0), new uc(", Wikimedia Foundation, ")],
                  i = new rc([
                    e,
                    new ac(
                      [new oc("publishingDate", !0, fo, E, E, E, new Ga(), new Kc()), new oc("url", !0, wo, E, E, E, new Va(), new sl())],
                      n,
                      [new uc(".")],
                      ", "
                    ),
                    new oc("accessedDate", !1, mo, " Accessed ", ".", E, new Ga(), new Kc())
                  ]);
                t.ec_1 = new Gt(i, new rc([new oc("title", !0, go, '("', '")', E, new tc(), new el())]));
              }
              function po(t) {
                return t.authors;
              }
              function yo(t) {
                return t.title;
              }
              function vo(t) {
                return t.username;
              }
              function bo(t) {
                return t.publishingDate();
              }
              function To(t) {
                return t.url;
              }
              function xo(t) {
                return t.title;
              }
              function Co(t) {
                return t.authors;
              }
              function Fo(t) {
                return t.inTextTimeStamp;
              }
              function So() {
                var t = this,
                  e = new oc("authors", !1, po, E, ".", E, new Ya(), new Qc()),
                  n = new oc("title", !0, yo, '"', '."', E, new tc(), new el()),
                  i = [new uc("YouTube, ", !0)],
                  r = [
                    e,
                    n,
                    new ac(
                      [
                        new oc("username", !0, vo, "uploaded by ", E, E, new tc(), new el()),
                        new oc("publishingDate", !0, bo, E, E, E, new Ga(), new Kc()),
                        new oc("url", !0, To, E, E, E, new Va(), new sl())
                      ],
                      i,
                      [new uc(".")],
                      ", "
                    )
                  ],
                  u = new rc([new ac(r, E, E, " ")]),
                  s = [new uc("(")],
                  o = new tc(),
                  a = new el(),
                  c = new oc("title", !0, xo, '"', '"', E, o, a),
                  l = new ka(Tc()),
                  h = new Qc(),
                  f = [
                    new cc(!0, [c, new oc("authors", !1, Co, E, E, E, l, h)]),
                    new oc("inTextTimeStamp", !0, Fo, E, E, E, new Oa(), new ul())
                  ],
                  d = [new uc(")")];
                t.fc_1 = new Gt(u, new rc([new ac(f, s, d, " ")]));
              }
              function ko(t, e, n) {
                return null == n || 0 === Y(n) ? t : 0 === Y(t) ? n : t + e + n;
              }
              function No(t, e) {
                return null == t ? null : e(t);
              }
              function $o(t) {
                var e = function (e) {
                  return t.gc(e);
                };
                return (e.callableName = "initials"), e;
              }
              function Io() {}
              function qo(t) {
                return function (e) {
                  return t.jc_1.hc(e);
                };
              }
              function Do(t) {
                return function (e) {
                  return t.jc_1.hc(e);
                };
              }
              function Mo(t) {
                return function (e) {
                  return t.jc_1.hc(e);
                };
              }
              function Ao() {
                this.jc_1 = new Io();
              }
              function Eo() {
                this.lc_1 = new Lo();
              }
              function Ro() {
                this.nc_1 = new Ao();
              }
              function Oo(t) {
                var e = function (e) {
                  return t.gc(e);
                };
                return (e.callableName = "initials"), e;
              }
              function Vo() {}
              function zo(t) {
                return function (e) {
                  return t.mc_1.hc(e);
                };
              }
              function Po(t) {
                return function (e) {
                  return t.mc_1.hc(e);
                };
              }
              function jo(t) {
                return function (e) {
                  return t.mc_1.hc(e);
                };
              }
              function Lo() {
                this.mc_1 = new Vo();
              }
              function Zo(t) {
                return Q("^\\s*([a-z])").s7(t, Yo);
              }
              function Yo(t) {
                return t.z().toUpperCase();
              }
              function Go() {}
              function Wo(t) {
                var e = function (e) {
                  return t.pc(e);
                };
                return (e.callableName = "capitalizeHyphenated"), e;
              }
              function Uo(t) {
                var e = function (e) {
                  return t.qc(e);
                };
                return (e.callableName = "capitalizeFoursOrGreaterLetterWords"), e;
              }
              function Ho(t) {
                var e = function (e) {
                  return t.oc(e);
                };
                return (e.callableName = "capitalizeTitleAndSubtitle"), e;
              }
              function Bo(t) {
                return Q("^\\s*([a-z])").s7(t, Jo);
              }
              function Jo(t) {
                return t.z().toUpperCase();
              }
              function Qo(t) {
                var e = Q("(\\w+)"),
                  n = t.z();
                return e.s7(n, Xo);
              }
              function Xo(t) {
                var e,
                  n = t.z();
                if (Y(n) > 0) {
                  var i,
                    r = it(n, 0);
                  (i = rt(r).toUpperCase()), (e = tt(i) + n.substring(1));
                } else e = n;
                return e;
              }
              function Ko(t) {
                var e,
                  n = t.z();
                if (Y(n) > 0) {
                  var i,
                    r = it(n, 0);
                  (i = rt(r).toUpperCase()), (e = tt(i) + n.substring(1));
                } else e = n;
                return e;
              }
              function ta() {}
              function ea(t) {
                var e = function (e) {
                  return t.gc(e);
                };
                return (e.callableName = "initials"), e;
              }
              function na(t) {
                var e = function (e) {
                  return t.gc(e);
                };
                return (e.callableName = "initials"), e;
              }
              function ia() {}
              function ra(t, e, n, i) {
                return 0 === n ? t.sc_1.hc(e) : n === ((i - 1) | 0) ? ", and " + t.sc_1.rc(e) : ", " + t.sc_1.rc(e);
              }
              function ua() {
                this.sc_1 = new ia();
              }
              function sa(t, e, n, i) {
                return 0 === n ? t.tc_1.hc(e) : n === ((i - 1) | 0) ? ", and " + t.tc_1.rc(e) : ", " + t.tc_1.hc(e);
              }
              function oa() {
                (this.tc_1 = new ia()), (this.uc_1 = ", director"), (this.vc_1 = this.uc_1 + "s");
              }
              function aa(t, e, n) {
                var i;
                switch (e) {
                  case null:
                  case 0:
                    return "";
                  default:
                    i = e.toString() + n;
                }
                return i;
              }
              function ca() {}
              function la(t, e, n, i) {
                return 0 === n ? t.xc_1.rc(e) : n === ((i - 1) | 0) ? ", and " + t.xc_1.rc(e) : ", " + t.xc_1.rc(e);
              }
              function ha() {
                this.xc_1 = new ia();
              }
              function fa(t) {
                var e = function (e) {
                  return t.dd(e);
                };
                return (e.callableName = "capitalizeImportantWords"), e;
              }
              function da(t) {
                var e = function (e) {
                  return t.oc(e);
                };
                return (e.callableName = "capitalizeTitleAndSubtitle"), e;
              }
              function wa(t) {
                return function (e) {
                  return t.fd(t.ed(e));
                };
              }
              function ma(t) {
                return t.z().toUpperCase();
              }
              function ga(t) {
                return function (e) {
                  return t.ed(e.z());
                };
              }
              function _a(t) {
                return function (e) {
                  var n, i;
                  if (((i = e.z().toLowerCase()), t.cd_1.n(i))) n = e.z();
                  else {
                    var r,
                      u = e.z();
                    if (Y(u) > 0) {
                      var s,
                        o = it(u, 0);
                      (s = rt(o).toUpperCase()), (r = tt(s) + u.substring(1));
                    } else r = u;
                    n = r;
                  }
                  return n;
                };
              }
              function pa() {
                (this.yc_1 = lt(["a", "an", "the"])),
                  (this.zc_1 = lt([
                    "aboard",
                    "about",
                    "above",
                    "across",
                    "after",
                    "against",
                    "along",
                    "amid",
                    "among",
                    "anti",
                    "around",
                    "as",
                    "at",
                    "before",
                    "behind",
                    "below",
                    "beneath",
                    "beside",
                    "besides",
                    "between",
                    "beyond",
                    "but",
                    "by",
                    "concerning",
                    "considering",
                    "despite",
                    "down",
                    "during",
                    "except",
                    "excepting",
                    "excluding",
                    "following",
                    "for",
                    "from",
                    "in",
                    "inside",
                    "into",
                    "like",
                    "minus",
                    "near",
                    "of",
                    "off",
                    "on",
                    "onto",
                    "opposite",
                    "outside",
                    "over",
                    "past",
                    "per",
                    "plus",
                    "regarding",
                    "round",
                    "save",
                    "since",
                    "than",
                    "through",
                    "to",
                    "toward",
                    "towards",
                    "under",
                    "underneath",
                    "unlike",
                    "until",
                    "up",
                    "upon",
                    "versus",
                    "via",
                    "with",
                    "within",
                    "with"
                  ])),
                  (this.ad_1 = lt([
                    "for",
                    "and",
                    "nor",
                    "but",
                    "or",
                    "yet",
                    "so",
                    "both",
                    "either",
                    "neither",
                    "just",
                    "as",
                    "then",
                    "rather",
                    "than",
                    "such",
                    "that",
                    "after",
                    "although",
                    "as",
                    "inasmuch",
                    "lest",
                    "though",
                    "now",
                    "even",
                    "provided",
                    "if",
                    "where",
                    "wherever",
                    "whereas",
                    "whether",
                    "since",
                    "because",
                    "whose",
                    "whoever",
                    "unless",
                    "while",
                    "before",
                    "why",
                    "so that",
                    "until",
                    "how",
                    "since",
                    "than",
                    "till",
                    "whenever",
                    "supposing",
                    "when",
                    "what"
                  ])),
                  (this.bd_1 = ht("to")),
                  (this.cd_1 = ft(ft(ft(this.yc_1, this.zc_1), this.ad_1), this.bd_1));
              }
              function ya() {
                r = this;
              }
              function va() {
                return null == r && new ya(), r;
              }
              function ba() {}
              function Ta(t) {
                return null == t.getUniqueEndPage() ? t.startPage : t.startPage + "-" + t.getUniqueEndPage();
              }
              function xa(t) {
                (t = t !== E && t), (this.gd_1 = t);
              }
              function Ca() {}
              function Fa(t, e) {
                (e = e === E ? "yyyy" : e), (this.id_1 = t), (this.jd_1 = e);
              }
              function Sa() {}
              function ka(t) {
                this.md_1 = t;
              }
              function Na() {}
              function $a() {}
              function Ia() {
                return Da(), u;
              }
              function qa() {}
              function Da() {
                s ||
                  ((s = !0),
                  (u = pt([
                    _t(1, "January"),
                    _t(2, "February"),
                    _t(3, "March"),
                    _t(4, "April"),
                    _t(5, "May"),
                    _t(6, "June"),
                    _t(7, "July"),
                    _t(8, "August"),
                    _t(9, "September"),
                    _t(10, "October"),
                    _t(11, "November"),
                    _t(12, "December")
                  ])));
              }
              function Ma(t, e) {
                (this.nd_1 = t), (this.od_1 = e);
              }
              function Aa() {}
              function Ea(t, e) {
                (t = t === E ? null : t), (e = e === E ? null : e), (this.pd_1 = t), (this.qd_1 = e);
              }
              function Ra(t, e) {
                return null == e ? "00" : e < 10 ? "0" + e : e.toString();
              }
              function Oa() {}
              function Va() {}
              function za() {}
              function Pa(t, e) {
                var n = ko(new ba().va(e.lastName), ", ", new ba().va(e.firstName));
                return ko(ko(n, " ", No(e.middleName, La(va()))), " ", e.suffix);
              }
              function ja(t, e) {
                return ko(ko(ko(new ba().va(e.firstName), " ", No(e.middleName, Za(va()))), " ", new ba().va(e.lastName)), " ", e.suffix);
              }
              function La(t) {
                var e = function (e) {
                  return t.gc(e);
                };
                return (e.callableName = "initials"), e;
              }
              function Za(t) {
                var e = function (e) {
                  return t.gc(e);
                };
                return (e.callableName = "initials"), e;
              }
              function Ya() {}
              function Ga() {}
              function Wa(t, e) {
                return ko(ko(ko(e.firstName, " ", No(e.middleName, Ua(va()))), " ", e.lastName), " ", e.suffix);
              }
              function Ua(t) {
                var e = function (e) {
                  return t.gc(e);
                };
                return (e.callableName = "initials"), e;
              }
              function Ha() {}
              function Ba(t) {
                var e = function (e) {
                  return t.dd(e);
                };
                return (e.callableName = "capitalizeImportantWords"), e;
              }
              function Ja(t) {
                var e = function (e) {
                  return t.oc(e);
                };
                return (e.callableName = "capitalizeTitleAndSubtitle"), e;
              }
              function Qa(t) {
                return Q("^\\s*([a-z])").s7(t, Xa);
              }
              function Xa(t) {
                return t.z().toUpperCase();
              }
              function Ka(t) {
                return function (e) {
                  var n, i;
                  if (((i = e.z().toLowerCase()), t.ub_1.n(i))) n = e.z();
                  else {
                    var r,
                      u = e.z();
                    if (Y(u) > 0) {
                      var s,
                        o = it(u, 0);
                      (s = rt(o).toUpperCase()), (r = tt(s) + u.substring(1));
                    } else r = u;
                    n = r;
                  }
                  return n;
                };
              }
              function tc() {
                (this.qb_1 = lt(["a", "an", "the"])),
                  (this.rb_1 = lt([
                    "aboard",
                    "about",
                    "above",
                    "across",
                    "against",
                    "along",
                    "amid",
                    "among",
                    "anti",
                    "around",
                    "at",
                    "behind",
                    "below",
                    "beneath",
                    "beside",
                    "besides",
                    "between",
                    "beyond",
                    "but",
                    "by",
                    "concerning",
                    "considering",
                    "despite",
                    "down",
                    "during",
                    "except",
                    "excepting",
                    "excluding",
                    "following",
                    "for",
                    "from",
                    "in",
                    "inside",
                    "into",
                    "like",
                    "minus",
                    "near",
                    "of",
                    "off",
                    "on",
                    "onto",
                    "opposite",
                    "outside",
                    "over",
                    "past",
                    "per",
                    "plus",
                    "regarding",
                    "round",
                    "save",
                    "since",
                    "than",
                    "through",
                    "to",
                    "toward",
                    "towards",
                    "under",
                    "underneath",
                    "unlike",
                    "until",
                    "up",
                    "upon",
                    "versus",
                    "via",
                    "with",
                    "within",
                    "with"
                  ])),
                  (this.sb_1 = lt(["and", "but", "for", "nor", "or", "so", "yet"])),
                  (this.tb_1 = ht("to")),
                  (this.ub_1 = ft(ft(ft(this.qb_1, this.rb_1), this.sb_1), this.tb_1));
              }
              function ec(t, e, n, i) {
                (this.td_1 = t), (this.ud_1 = e), (this.vd_1 = n), (this.wd_1 = i);
              }
              function nc(t, e) {
                if (bt(e, "publishingYear") && bt(e, "publishingDate")) {
                  for (var n = at(), i = 0, r = e.length; i < r; ) {
                    var u = e[i];
                    (i = (i + 1) | 0), "publishingYear" !== u && n.b(u);
                  }
                  return vt(n);
                }
                return e;
              }
              function ic(t, e) {
                var n = [new xt(Tt(46)), new xt(Tt(63)), new xt(Tt(33))],
                  i = 1,
                  r = e.length;
                if (i < r)
                  do {
                    var u = i;
                    i = (i + 1) | 0;
                    var s = e[(u - 1) | 0],
                      o = e[u];
                    if (null == o.fieldName && null != s) {
                      var a = s.value,
                        c = o.value;
                      if (a.length > 0 && c.length > 0) {
                        var l = Ct(c) === Tt(46),
                          h = bt(n, new xt(Ft(a)));
                        if (l && h) {
                          var f;
                          f = o.value.substring(1);
                          var d = new ol(o.fieldName, f, o.italicize, o.isPlaceholder);
                          e[u] = d;
                        }
                      }
                    }
                  } while (i < r);
              }
              function rc(t) {
                this.q9_1 = t;
              }
              function uc(t, e) {
                (e = e === E ? null : e), (this.fe_1 = t), (this.ge_1 = e);
              }
              function sc(t, e) {
                (this.he_1 = t), (this.ie_1 = e);
              }
              function oc(t, e, n, i, r, u, s, o) {
                (i = i === E ? null : i),
                  (r = r === E ? null : r),
                  (u = u === E ? null : u),
                  (this.da_1 = t),
                  (this.ea_1 = e),
                  (this.fa_1 = n),
                  (this.ga_1 = i),
                  (this.ha_1 = r),
                  (this.ia_1 = u),
                  (this.ja_1 = s),
                  (this.ka_1 = o);
              }
              function ac(t, e, n, i) {
                (e = e === E ? [] : e),
                  (n = n === E ? [] : n),
                  (i = i === E ? null : i),
                  (this.je_1 = t),
                  (this.ke_1 = e),
                  (this.le_1 = n),
                  (this.me_1 = i);
              }
              function cc(t, e) {
                (this.ne_1 = t), (this.oe_1 = e);
              }
              function lc(t, e, n, i, r, u) {
                (n = n === E ? null : n),
                  (i = i === E ? null : i),
                  (r = r === E ? null : r),
                  (u = u === E ? "" : u),
                  (this.pe_1 = t),
                  (this.qe_1 = e),
                  (this.re_1 = n),
                  (this.se_1 = i),
                  (this.te_1 = r),
                  (this.ue_1 = u);
              }
              function hc(t, e, n) {
                (this.ce_1 = t), (this.de_1 = e), (this.ee_1 = n);
              }
              function fc(t, e) {
                (this.fieldName = t), (this.placeholder = e);
              }
              function dc(t, e) {
                (this.ae_1 = t), (this.be_1 = e);
              }
              function wc() {}
              function mc() {}
              function gc(t, e, n, i) {
                (n = n === E ? null : n),
                  (i = i === E ? null : i),
                  (this.firstName = t),
                  (this.lastName = e),
                  (this.middleName = n),
                  (this.suffix = i);
              }
              function _c() {
                return [bc(), Tc(), xc()];
              }
              function pc(t) {
                switch (t) {
                  case "APA":
                    return bc();
                  case "MLA":
                    return Tc();
                  case "Chicago":
                    return xc();
                  default:
                    yc(), Rt();
                }
              }
              function yc() {
                if (l) return Nt();
                (l = !0), (o = new vc("APA", 0)), (a = new vc("MLA", 1)), (c = new vc("Chicago", 2));
              }
              function vc(t, e) {
                Ot.call(this, t, e);
              }
              function bc() {
                return yc(), o;
              }
              function Tc() {
                return yc(), a;
              }
              function xc() {
                return yc(), c;
              }
              function Cc(t, e, n) {
                (e = e === E ? null : e), (n = n === E ? null : n), (this.year = t), (this.month = e), (this.day = n);
              }
              function Fc(
                t,
                e,
                n,
                i,
                r,
                u,
                s,
                o,
                a,
                c,
                l,
                h,
                f,
                d,
                w,
                m,
                g,
                _,
                p,
                y,
                v,
                b,
                T,
                x,
                C,
                F,
                S,
                k,
                N,
                $,
                I,
                q,
                D,
                M,
                A,
                R,
                O,
                V,
                z,
                P,
                j,
                L,
                Z,
                Y,
                G,
                W,
                U,
                H,
                B,
                J,
                Q
              ) {
                (t = t === E ? null : t),
                  (e = e === E ? null : e),
                  (n = n === E ? null : n),
                  (i = i === E ? null : i),
                  (r = r === E ? null : r),
                  (u = u === E ? null : u),
                  (s = s === E ? null : s),
                  (o = o === E ? null : o),
                  (a = a === E ? null : a),
                  (c = c === E ? null : c),
                  (l = l === E ? null : l),
                  (h = h === E ? null : h),
                  (f = f === E ? null : f),
                  (d = d === E ? null : d),
                  (w = w === E ? null : w),
                  (m = m === E ? null : m),
                  (g = g === E ? null : g),
                  (_ = _ === E ? null : _),
                  (p = p === E ? null : p),
                  (y = y === E ? null : y),
                  (v = v === E ? null : v),
                  (b = b === E ? null : b),
                  (T = T === E ? null : T),
                  (x = x === E ? null : x),
                  (C = C === E ? null : C),
                  (F = F === E ? null : F),
                  (S = S === E ? null : S),
                  (k = k === E ? null : k),
                  (N = N === E ? null : N),
                  ($ = $ === E ? null : $),
                  (I = I === E ? null : I),
                  (q = q === E ? null : q),
                  (D = D === E ? null : D),
                  (M = M === E ? null : M),
                  (A = A === E ? null : A),
                  (R = R === E ? null : R),
                  (O = O === E ? null : O),
                  (V = V === E ? null : V),
                  (z = z === E ? null : z),
                  (P = P === E ? null : P),
                  (j = j === E ? null : j),
                  (L = L === E ? null : L),
                  (Z = Z === E ? null : Z),
                  (Y = Y === E ? null : Y),
                  (G = G === E ? null : G),
                  (W = W === E ? null : W),
                  (U = U === E ? null : U),
                  (H = H === E ? null : H),
                  (B = B === E ? null : B),
                  (J = J === E ? null : J),
                  (Q = Q === E ? null : Q),
                  (this.authors = t),
                  (this.title = e),
                  (this.periodicalTitle = n),
                  (this.w9_1 = i),
                  (this.x9_1 = r),
                  (this.volume = u),
                  (this.issue = s),
                  (this.doi = o),
                  (this.pagesRange = a),
                  (this.url = c),
                  (this.websiteName = l),
                  (this.accessedDate = h),
                  (this.publisher = f),
                  (this.translators = d),
                  (this.publicationCity = w),
                  (this.edition = m),
                  (this.editors = g),
                  (this.university = _),
                  (this.dissertationType = p),
                  (this.database = y),
                  (this.publicationNumber = v),
                  (this.lectureType = b),
                  (this.conferenceTitle = T),
                  (this.organization = x),
                  (this.venue = C),
                  (this.city = F),
                  (this.location = S),
                  (this.directors = k),
                  (this.studio = N),
                  (this.actors = $),
                  (this.movieLength = I),
                  (this.username = q),
                  (this.timestamp = D),
                  (this.bibleVersion = M),
                  (this.bibleBook = A),
                  (this.bibleChapter = R),
                  (this.bibleVerses = O),
                  (this.creators = V),
                  (this.artists = z),
                  (this.imageDescription = P),
                  (this.imageSource = j),
                  (this.imageType = L),
                  (this.company = Z),
                  (this.productName = Y),
                  (this.modelVersion = G),
                  (this.modelType = W),
                  (this.promptText = U),
                  (this.shortenedPromptText = H),
                  (this.promptDescription = B),
                  (this.inTextPagesCited = J),
                  (this.inTextTimeStamp = Q);
              }
              function Sc(t, e) {
                (e = e === E ? null : e), (this.startPage = t), (this.endPage = e);
              }
              function kc() {
                return [qc(), Dc(), Mc(), Ac(), Ec(), Rc(), Oc(), Vc(), zc(), Pc(), jc(), Lc(), Zc(), Yc(), Gc(), Wc()];
              }
              function Nc(t) {
                switch (t) {
                  case "Book":
                    return qc();
                  case "Textbook":
                    return Dc();
                  case "Website":
                    return Mc();
                  case "Wikipedia":
                    return Ac();
                  case "Image":
                    return Ec();
                  case "Newspaper":
                    return Rc();
                  case "Magazine":
                    return Oc();
                  case "Journal":
                    return Vc();
                  case "Dissertation":
                    return zc();
                  case "Lecture":
                    return Pc();
                  case "YoutubeVideo":
                    return jc();
                  case "OnlineVideo":
                    return Lc();
                  case "Movie":
                    return Zc();
                  case "Documentary":
                    return Yc();
                  case "Bible":
                    return Gc();
                  case "GenerativeAI":
                    return Wc();
                  default:
                    $c(), Rt();
                }
              }
              function $c() {
                if (k) return Nt();
                (k = !0),
                  (h = new Ic("Book", 0)),
                  (f = new Ic("Textbook", 1)),
                  (d = new Ic("Website", 2)),
                  (w = new Ic("Wikipedia", 3)),
                  (m = new Ic("Image", 4)),
                  (g = new Ic("Newspaper", 5)),
                  (_ = new Ic("Magazine", 6)),
                  (p = new Ic("Journal", 7)),
                  (y = new Ic("Dissertation", 8)),
                  (v = new Ic("Lecture", 9)),
                  (b = new Ic("YoutubeVideo", 10)),
                  (T = new Ic("OnlineVideo", 11)),
                  (x = new Ic("Movie", 12)),
                  (C = new Ic("Documentary", 13)),
                  (F = new Ic("Bible", 14)),
                  (S = new Ic("GenerativeAI", 15));
              }
              function Ic(t, e) {
                Ot.call(this, t, e);
              }
              function qc() {
                return $c(), h;
              }
              function Dc() {
                return $c(), f;
              }
              function Mc() {
                return $c(), d;
              }
              function Ac() {
                return $c(), w;
              }
              function Ec() {
                return $c(), m;
              }
              function Rc() {
                return $c(), g;
              }
              function Oc() {
                return $c(), _;
              }
              function Vc() {
                return $c(), p;
              }
              function zc() {
                return $c(), y;
              }
              function Pc() {
                return $c(), v;
              }
              function jc() {
                return $c(), b;
              }
              function Lc() {
                return $c(), T;
              }
              function Zc() {
                return $c(), x;
              }
              function Yc() {
                return $c(), C;
              }
              function Gc() {
                return $c(), F;
              }
              function Wc() {
                return $c(), S;
              }
              function Uc(t, e, n) {
                (t = t === E ? null : t), (e = e === E ? null : e), (this.hour = t), (this.minute = e), (this.second = n);
              }
              function Hc() {
                return Jc(), N;
              }
              function Bc() {}
              function Jc() {
                $ || (($ = !0), (N = Q("\\p{L}+((\\s|-)\\p{L}+)?\\.?")));
              }
              function Qc() {
                this.nj_1 = new Bc();
              }
              function Xc() {
                this.pj_1 = new rl(Q("((doi:|(https:\\/\\/)?doi\\.org\\/)?(\\d+([.]\\d+)*\\/).+)"));
              }
              function Kc() {}
              function tl(t, e) {
                (t = t === E ? Pt().MIN_VALUE : t), (e = e === E ? Pt().MAX_VALUE : e), (this.sj_1 = t), (this.tj_1 = e);
              }
              function el() {}
              function nl() {}
              function il() {}
              function rl(t) {
                this.qj_1 = t;
              }
              function ul() {}
              function sl() {
                this.xj_1 = new rl(Q("(https?://)?[a-z\\d][a-z\\d.]+\\.[a-z]{2,}(/[^/]+)*/?"));
              }
              function ol(t, e, n, i) {
                (t = t === E ? null : t),
                  (n = n !== E && n),
                  (i = i !== E && i),
                  (this.fieldName = t),
                  (this.value = e),
                  (this.italicize = n),
                  (this.isPlaceholder = i);
              }
              function al(t, e, n, i, r) {
                (this.allRequiredFieldsProvidedAndValid = t),
                  (this.allFieldsValid = e),
                  (this.isValidCitation = n),
                  (this.result = i),
                  (this.invalidFields = r);
              }
              function cl(t) {
                var e, n, i, r, u;
                ((
                  (r = (i = (n = t.com || (t.com = {})).grammarly || (n.grammarly = {})).citations || (i.citations = {})).generation ||
                  (r.generation = {})
                ).CitationGeneratorFactory = Yt),
                  ((
                    (u =
                      (r = (i = (n = t.com || (t.com = {})).grammarly || (n.grammarly = {})).citations || (i.citations = {})).model ||
                      (r.model = {})).generation || (u.generation = {})
                  ).FieldPlaceholder = fc),
                  (u =
                    (r = (i = (n = t.com || (t.com = {})).grammarly || (n.grammarly = {})).citations || (i.citations = {})).model ||
                    (r.model = {})).generation || (u.generation = {}),
                  (u =
                    (r = (i = (n = t.com || (t.com = {})).grammarly || (n.grammarly = {})).citations || (i.citations = {})).model ||
                    (r.model = {})).generation || (u.generation = {}),
                  ((e =
                    (u =
                      (r = (i = (n = t.com || (t.com = {})).grammarly || (n.grammarly = {})).citations || (i.citations = {})).model ||
                      (r.model = {})).input || (u.input = {})).Author = gc),
                  ((e =
                    (u =
                      (r = (i = (n = t.com || (t.com = {})).grammarly || (n.grammarly = {})).citations || (i.citations = {})).model ||
                      (r.model = {})).input || (u.input = {})).CitationFormat = vc),
                  (e.CitationFormat.values = _c),
                  (e.CitationFormat.valueOf = pc),
                  Vt(e.CitationFormat, "APA", bc, E),
                  Vt(e.CitationFormat, "MLA", Tc, E),
                  Vt(e.CitationFormat, "Chicago", xc, E),
                  ((e =
                    (u =
                      (r = (i = (n = t.com || (t.com = {})).grammarly || (n.grammarly = {})).citations || (i.citations = {})).model ||
                      (r.model = {})).input || (u.input = {})).Date = Cc),
                  ((e =
                    (u =
                      (r = (i = (n = t.com || (t.com = {})).grammarly || (n.grammarly = {})).citations || (i.citations = {})).model ||
                      (r.model = {})).input || (u.input = {})).GenerationInput = Fc),
                  ((e =
                    (u =
                      (r = (i = (n = t.com || (t.com = {})).grammarly || (n.grammarly = {})).citations || (i.citations = {})).model ||
                      (r.model = {})).input || (u.input = {})).PagesRange = Sc),
                  ((e =
                    (u =
                      (r = (i = (n = t.com || (t.com = {})).grammarly || (n.grammarly = {})).citations || (i.citations = {})).model ||
                      (r.model = {})).input || (u.input = {})).SourceType = Ic),
                  (e.SourceType.values = kc),
                  (e.SourceType.valueOf = Nc),
                  Vt(e.SourceType, "Book", qc, E),
                  Vt(e.SourceType, "Textbook", Dc, E),
                  Vt(e.SourceType, "Website", Mc, E),
                  Vt(e.SourceType, "Wikipedia", Ac, E),
                  Vt(e.SourceType, "Image", Ec, E),
                  Vt(e.SourceType, "Newspaper", Rc, E),
                  Vt(e.SourceType, "Magazine", Oc, E),
                  Vt(e.SourceType, "Journal", Vc, E),
                  Vt(e.SourceType, "Dissertation", zc, E),
                  Vt(e.SourceType, "Lecture", Pc, E),
                  Vt(e.SourceType, "YoutubeVideo", jc, E),
                  Vt(e.SourceType, "OnlineVideo", Lc, E),
                  Vt(e.SourceType, "Movie", Zc, E),
                  Vt(e.SourceType, "Documentary", Yc, E),
                  Vt(e.SourceType, "Bible", Gc, E),
                  Vt(e.SourceType, "GenerativeAI", Wc, E),
                  ((e =
                    (u =
                      (r = (i = (n = t.com || (t.com = {})).grammarly || (n.grammarly = {})).citations || (i.citations = {})).model ||
                      (r.model = {})).input || (u.input = {})).TimeStamp = Uc),
                  ((
                    (u =
                      (r = (i = (n = t.com || (t.com = {})).grammarly || (n.grammarly = {})).citations || (i.citations = {})).model ||
                      (r.model = {})).result || (u.result = {})
                  ).CitationPartWithFieldName = ol),
                  ((
                    (u =
                      (r = (i = (n = t.com || (t.com = {})).grammarly || (n.grammarly = {})).citations || (i.citations = {})).model ||
                      (r.model = {})).result || (u.result = {})
                  ).GenerationResult = al);
              }
              return (
                R(mc, "ICitationGeneratorFactory", Et),
                R(Yt, "CitationGeneratorFactory", A, E, [mc]),
                R(wc, "ICitationGenerator", Et),
                R(Gt, "CompleteCitationGenerator", A, E, [wc]),
                R(ee, "APAArticleCitationGenerator", A, E, [wc]),
                R(we, "APABookCitationGenerator", A, E, [wc]),
                R(xe, "APADissertationCitationGenerator", A, E, [wc]),
                R(De, "APAGenerativeAICitationGenerator", A, E, [wc]),
                R(Ve, "Companion", Z),
                R(Be, "APAImageCitationGenerator", A, E, [wc]),
                R(sn, "APAJournalCitationGenerator", A, E, [wc]),
                R(dn, "APALectureCitationGenerator", A, E, [wc]),
                R(Tn, "APAMovieCitationGenerator", A, E, [wc]),
                R(Dn, "APAOnlineVideoCitationGenerator", A, E, [wc]),
                R(Pn, "APAWebsiteCitationGenerator", A, E, [wc]),
                R(Wn, "APAWikipediaCitationGenerator", A, E, [wc]),
                R(ei, "APAYoutubeVideoCitationGenerator", A, E, [wc]),
                R(ci, "ChicagoArticleCitationGenerator", A, E, [wc]),
                R(vi, "ChicagoBookCitationGenerator", A, E, [wc]),
                R(Si, "ChicagoDissertationCitationGenerator", A, E, [wc]),
                R(Ei, "ChicagoGenerativeAICitationGenerator", A, E, [wc]),
                R(ji, "Companion", Z),
                R(Qi, "ChicagoImageCitationGenerator", A, E, [wc]),
                R(ar, "ChicagoJournalCitationGenerator", A, E, [wc]),
                R(_r, "ChicagoLectureCitationGenerator", A, E, [wc]),
                R(kr, "ChicagoMovieCitationGenerator", A, E, [wc]),
                R(Vr, "ChicagoOnlineVideoCitationGenerator", A, E, [wc]),
                R(Br, "ChicagoWebsiteCitationGenerator", A, E, [wc]),
                R(eu, "ChicagoWikipediaCitationGenerator", A, E, [wc]),
                R(fu, "MLAArticleCitationGenerator", A, E, [wc]),
                R(bu, "MLABibleCitationGenerator", A, E, [wc]),
                R(Ou, "MLABookCitationGenerator", A, E, [wc]),
                R(Uu, "MLADissertationCitationGenerator", A, E, [wc]),
                R(ns, "MLAGenerativeAICitationGenerator", A, E, [wc]),
                R(hs, "MLAImageCitationGenerator", A, E, [wc]),
                R(Fs, "MLAJournalCitationGenerator", A, E, [wc]),
                R(Rs, "MLALectureCitationGenerator", A, E, [wc]),
                R(Gs, "MLAMovieCitationGenerator", A, E, [wc]),
                R(eo, "MLAOnlineVideoCitationGenerator", A, E, [wc]),
                R(lo, "MLAWebsiteCitationGenerator", A, E, [wc]),
                R(_o, "MLAWikipediaCitationGenerator", A, E, [wc]),
                R(So, "MLAYoutubeVideoCitationGenerator", A, E, [wc]),
                R(Io, "APAAuthorFormatter", A),
                R(Ao, "APAAuthorsArrayFormatter", A),
                R(Eo, "APAEditorsArrayFormatter", A),
                R(Ro, "APAEditorsReplaceAuthorsArrayFormatter", A),
                R(Vo, "APANonAuthorFormatter", A),
                R(Lo, "APANonAuthorsArrayFormatter", A),
                R(Go, "APASentenceCaseFormatter", A),
                R(ta, "APATitleCaseFormatter", A),
                R(ia, "ChicagoAuthorFormatter", A),
                R(ua, "ChicagoAuthorsArrayFormatter", A),
                R(oa, "ChicagoDirectorsArrayFormatter", A),
                R(ca, "ChicagoMovieLengthFormatter", A),
                R(ha, "ChicagoNonAuthorsArrayFormatter", A),
                R(pa, "ChicagoTitleFormatter", A),
                R(ya, "Companion", Z),
                R(ba, "CapitalizeFirstWordFormatter", A),
                R(xa, "CitationPagesRangeArrayFormatter", A),
                R(Ca, "DOIFormatter", A),
                R(Fa, "DateFormatter", A),
                R(Sa, "DateYearOnlyFormatter", A),
                R(ka, "InTextAuthorsArrayFormatter", A),
                R(Na, "IntIdentityFormatter", A),
                R($a, "IntOrdinalFormatter", A),
                R(qa, "MonthNumberFormatter", A),
                R(Ma, "PipeFormatter", A),
                R(Aa, "StringIdentityFormatter", A),
                R(Ea, "StringWrapperFormatter", A),
                R(Oa, "TimeStampFormatter", A),
                R(Va, "URLOmitProtocolFormatter", A),
                R(za, "YearValidator", A),
                R(Ya, "MLAAuthorsArrayFormatter", A),
                R(Ga, "MLAFullCitationDateFormatter", A),
                R(Ha, "MLANonAuthorsArrayFormatter", A),
                R(tc, "MLATitleFormatter", A),
                R(ec, "FieldGetterWithFormatterAndValidator", A),
                R(rc, "SingleCitationGenerator", A),
                R(uc, "ConstCitationPartGenerationRule", A),
                R(sc, "CustomCitationPartGenerationRule", A),
                R(oc, "InputFieldCitationPartGenerationRule", A),
                R(ac, "SentenceCitationPartGenerationRule", A),
                R(cc, "SomeInputFieldCitationPartGenerationRule", A),
                R(lc, "TryAllInputFieldCitationPartGenerationRule", A),
                R(hc, "CitationPartGenerationResult", A),
                R(fc, "FieldPlaceholder", A),
                R(dc, "FieldRequirement", A),
                R(gc, "Author", A),
                R(vc, "CitationFormat", A, Ot),
                R(Cc, "Date", A),
                R(Fc, "GenerationInput", A),
                R(Sc, "PagesRange", A),
                R(Ic, "SourceType", A, Ot),
                R(Uc, "TimeStamp", A),
                R(Bc, "AuthorValidator", A),
                R(Qc, "AuthorsArrayValidator", A),
                R(Xc, "DOIValidator", A),
                R(Kc, "DateValidator", A),
                R(tl, "IntRangeValidator", A),
                R(el, "NotEmptyValidator", A),
                R(nl, "PagesRangeArrayValidator", A),
                R(il, "PagesRangeValidator", A),
                R(rl, "RegexValidator", A),
                R(ul, "TimeStampValidator", A),
                R(sl, "URLValidator", A),
                R(ol, "CitationPartWithFieldName", A),
                R(al, "GenerationResult", A),
                (M(Yt).getGenerator = function (t, e) {
                  var n;
                  switch (t.v8_1) {
                    case 0:
                      var i;
                      switch (e.v8_1) {
                        case 6:
                        case 5:
                          i = new ee();
                          break;
                        case 7:
                          i = new sn();
                          break;
                        case 0:
                        case 1:
                          i = new we();
                          break;
                        case 2:
                          i = new Pn();
                          break;
                        case 3:
                          i = new Wn();
                          break;
                        case 4:
                          i = new Be();
                          break;
                        case 8:
                          i = new xe();
                          break;
                        case 9:
                          i = new dn();
                          break;
                        case 12:
                        case 13:
                          i = new Tn();
                          break;
                        case 10:
                          i = new ei();
                          break;
                        case 11:
                          i = new Dn();
                          break;
                        case 14:
                          throw new q("An operation is not implemented: APA does not have Bible listed in reference list");
                        case 15:
                          i = new De();
                          break;
                        default:
                          D();
                      }
                      n = i;
                      break;
                    case 1:
                      var r;
                      switch (e.v8_1) {
                        case 6:
                        case 5:
                          r = new fu();
                          break;
                        case 7:
                          r = new Fs();
                          break;
                        case 0:
                        case 1:
                          r = new Ou();
                          break;
                        case 2:
                          r = new lo();
                          break;
                        case 3:
                          r = new _o();
                          break;
                        case 4:
                          r = new hs();
                          break;
                        case 8:
                          r = new Uu();
                          break;
                        case 9:
                          r = new Rs();
                          break;
                        case 12:
                        case 13:
                          r = new Gs();
                          break;
                        case 10:
                          r = new So();
                          break;
                        case 11:
                          r = new eo();
                          break;
                        case 14:
                          r = new bu();
                          break;
                        case 15:
                          r = new ns();
                          break;
                        default:
                          D();
                      }
                      n = r;
                      break;
                    case 2:
                      var u;
                      switch (e.v8_1) {
                        case 6:
                        case 5:
                          u = new ci();
                          break;
                        case 7:
                          u = new ar();
                          break;
                        case 0:
                        case 1:
                          u = new vi();
                          break;
                        case 2:
                          u = new Br();
                          break;
                        case 3:
                          u = new eu();
                          break;
                        case 4:
                          u = new Qi();
                          break;
                        case 8:
                          u = new Si();
                          break;
                        case 9:
                          u = new _r();
                          break;
                        case 12:
                        case 13:
                          u = new kr();
                          break;
                        case 10:
                        case 11:
                          u = new Vr();
                          break;
                        case 14:
                          throw new q("An operation is not implemented: Chicago does not have Bible listed in reference list");
                        case 15:
                          u = new Ei();
                          break;
                        default:
                          D();
                      }
                      n = u;
                      break;
                    default:
                      D();
                  }
                  return n;
                }),
                (M(Gt).getRequiredFields = function () {
                  return this.o9_1.r9();
                }),
                (M(Gt).getSecondaryFields = function () {
                  return this.o9_1.s9();
                }),
                (M(Gt).getInTextRequiredFields = function () {
                  return this.p9_1.r9();
                }),
                (M(Gt).t9 = function (t, e) {
                  var n;
                  if (null == e) n = null;
                  else {
                    for (var i = O(e.length), r = V(e); r.d(); ) {
                      var u,
                        s = r.e();
                      (u = new z(s.fieldName, s.placeholder)), i.b(u);
                    }
                    n = i;
                  }
                  var o = null == n ? null : P(n),
                    a = null == o ? j() : o;
                  return this.o9_1.u9(t, a);
                }),
                (M(Gt).v9 = function (t, e) {
                  var n;
                  if (null == e) n = null;
                  else {
                    for (var i = O(e.length), r = V(e); r.d(); ) {
                      var u,
                        s = r.e();
                      (u = new z(s.fieldName, s.placeholder)), i.b(u);
                    }
                    n = i;
                  }
                  var o = null == n ? null : P(n),
                    a = null == o ? j() : o;
                  return this.p9_1.u9(t, a);
                }),
                (M(ee).t9 = function (t, e) {
                  return this.ca_1.generateFullCitation(t, e);
                }),
                (M(ee).v9 = function (t, e) {
                  return this.ca_1.generateInTextCitation(t, e);
                }),
                (M(ee).getInTextRequiredFields = function () {
                  return this.ca_1.getInTextRequiredFields();
                }),
                (M(ee).getRequiredFields = function () {
                  return this.ca_1.getRequiredFields();
                }),
                (M(ee).getSecondaryFields = function () {
                  return this.ca_1.getSecondaryFields();
                }),
                (M(we).t9 = function (t, e) {
                  return this.ma_1.generateFullCitation(t, e);
                }),
                (M(we).v9 = function (t, e) {
                  return this.ma_1.generateInTextCitation(t, e);
                }),
                (M(we).getInTextRequiredFields = function () {
                  return this.ma_1.getInTextRequiredFields();
                }),
                (M(we).getRequiredFields = function () {
                  return this.ma_1.getRequiredFields();
                }),
                (M(we).getSecondaryFields = function () {
                  return this.ma_1.getSecondaryFields();
                }),
                (M(xe).t9 = function (t, e) {
                  return this.na_1.generateFullCitation(t, e);
                }),
                (M(xe).v9 = function (t, e) {
                  return this.na_1.generateInTextCitation(t, e);
                }),
                (M(xe).getInTextRequiredFields = function () {
                  return this.na_1.getInTextRequiredFields();
                }),
                (M(xe).getRequiredFields = function () {
                  return this.na_1.getRequiredFields();
                }),
                (M(xe).getSecondaryFields = function () {
                  return this.na_1.getSecondaryFields();
                }),
                (M(De).t9 = function (t, e) {
                  return this.oa_1.generateFullCitation(t, e);
                }),
                (M(De).v9 = function (t, e) {
                  return this.oa_1.generateInTextCitation(t, e);
                }),
                (M(De).getInTextRequiredFields = function () {
                  return this.oa_1.getInTextRequiredFields();
                }),
                (M(De).getRequiredFields = function () {
                  return this.oa_1.getRequiredFields();
                }),
                (M(De).getSecondaryFields = function () {
                  return this.oa_1.getSecondaryFields();
                }),
                (M(Be).t9 = function (t, e) {
                  return this.pa_1.generateFullCitation(t, e);
                }),
                (M(Be).v9 = function (t, e) {
                  return this.pa_1.generateInTextCitation(t, e);
                }),
                (M(Be).getInTextRequiredFields = function () {
                  return this.pa_1.getInTextRequiredFields();
                }),
                (M(Be).getRequiredFields = function () {
                  return this.pa_1.getRequiredFields();
                }),
                (M(Be).getSecondaryFields = function () {
                  return this.pa_1.getSecondaryFields();
                }),
                (M(sn).t9 = function (t, e) {
                  return this.qa_1.generateFullCitation(t, e);
                }),
                (M(sn).v9 = function (t, e) {
                  return this.qa_1.generateInTextCitation(t, e);
                }),
                (M(sn).getInTextRequiredFields = function () {
                  return this.qa_1.getInTextRequiredFields();
                }),
                (M(sn).getRequiredFields = function () {
                  return this.qa_1.getRequiredFields();
                }),
                (M(sn).getSecondaryFields = function () {
                  return this.qa_1.getSecondaryFields();
                }),
                (M(dn).t9 = function (t, e) {
                  return this.ra_1.generateFullCitation(t, e);
                }),
                (M(dn).v9 = function (t, e) {
                  return this.ra_1.generateInTextCitation(t, e);
                }),
                (M(dn).getInTextRequiredFields = function () {
                  return this.ra_1.getInTextRequiredFields();
                }),
                (M(dn).getRequiredFields = function () {
                  return this.ra_1.getRequiredFields();
                }),
                (M(dn).getSecondaryFields = function () {
                  return this.ra_1.getSecondaryFields();
                }),
                (M(Tn).t9 = function (t, e) {
                  return this.sa_1.generateFullCitation(t, e);
                }),
                (M(Tn).v9 = function (t, e) {
                  return this.sa_1.generateInTextCitation(t, e);
                }),
                (M(Tn).getInTextRequiredFields = function () {
                  return this.sa_1.getInTextRequiredFields();
                }),
                (M(Tn).getRequiredFields = function () {
                  return this.sa_1.getRequiredFields();
                }),
                (M(Tn).getSecondaryFields = function () {
                  return this.sa_1.getSecondaryFields();
                }),
                (M(Dn).t9 = function (t, e) {
                  return this.ta_1.generateFullCitation(t, e);
                }),
                (M(Dn).v9 = function (t, e) {
                  return this.ta_1.generateInTextCitation(t, e);
                }),
                (M(Dn).getInTextRequiredFields = function () {
                  return this.ta_1.getInTextRequiredFields();
                }),
                (M(Dn).getRequiredFields = function () {
                  return this.ta_1.getRequiredFields();
                }),
                (M(Dn).getSecondaryFields = function () {
                  return this.ta_1.getSecondaryFields();
                }),
                (M(Pn).t9 = function (t, e) {
                  return this.wa_1.generateFullCitation(t, e);
                }),
                (M(Pn).v9 = function (t, e) {
                  return this.wa_1.generateInTextCitation(t, e);
                }),
                (M(Pn).getInTextRequiredFields = function () {
                  return this.wa_1.getInTextRequiredFields();
                }),
                (M(Pn).getRequiredFields = function () {
                  return this.wa_1.getRequiredFields();
                }),
                (M(Pn).getSecondaryFields = function () {
                  return this.wa_1.getSecondaryFields();
                }),
                (M(Wn).t9 = function (t, e) {
                  return this.xa_1.generateFullCitation(t, e);
                }),
                (M(Wn).v9 = function (t, e) {
                  return this.xa_1.generateInTextCitation(t, e);
                }),
                (M(Wn).getInTextRequiredFields = function () {
                  return this.xa_1.getInTextRequiredFields();
                }),
                (M(Wn).getRequiredFields = function () {
                  return this.xa_1.getRequiredFields();
                }),
                (M(Wn).getSecondaryFields = function () {
                  return this.xa_1.getSecondaryFields();
                }),
                (M(ei).t9 = function (t, e) {
                  return this.ya_1.generateFullCitation(t, e);
                }),
                (M(ei).v9 = function (t, e) {
                  return this.ya_1.generateInTextCitation(t, e);
                }),
                (M(ei).getInTextRequiredFields = function () {
                  return this.ya_1.getInTextRequiredFields();
                }),
                (M(ei).getRequiredFields = function () {
                  return this.ya_1.getRequiredFields();
                }),
                (M(ei).getSecondaryFields = function () {
                  return this.ya_1.getSecondaryFields();
                }),
                (M(ci).t9 = function (t, e) {
                  return this.db_1.generateFullCitation(t, e);
                }),
                (M(ci).v9 = function (t, e) {
                  return this.db_1.generateInTextCitation(t, e);
                }),
                (M(ci).getInTextRequiredFields = function () {
                  return this.db_1.getInTextRequiredFields();
                }),
                (M(ci).getRequiredFields = function () {
                  return this.db_1.getRequiredFields();
                }),
                (M(ci).getSecondaryFields = function () {
                  return this.db_1.getSecondaryFields();
                }),
                (M(vi).t9 = function (t, e) {
                  return this.eb_1.generateFullCitation(t, e);
                }),
                (M(vi).v9 = function (t, e) {
                  return this.eb_1.generateInTextCitation(t, e);
                }),
                (M(vi).getInTextRequiredFields = function () {
                  return this.eb_1.getInTextRequiredFields();
                }),
                (M(vi).getRequiredFields = function () {
                  return this.eb_1.getRequiredFields();
                }),
                (M(vi).getSecondaryFields = function () {
                  return this.eb_1.getSecondaryFields();
                }),
                (M(Si).t9 = function (t, e) {
                  return this.fb_1.generateFullCitation(t, e);
                }),
                (M(Si).v9 = function (t, e) {
                  return this.fb_1.generateInTextCitation(t, e);
                }),
                (M(Si).getInTextRequiredFields = function () {
                  return this.fb_1.getInTextRequiredFields();
                }),
                (M(Si).getRequiredFields = function () {
                  return this.fb_1.getRequiredFields();
                }),
                (M(Si).getSecondaryFields = function () {
                  return this.fb_1.getSecondaryFields();
                }),
                (M(Ei).t9 = function (t, e) {
                  return this.gb_1.generateFullCitation(t, e);
                }),
                (M(Ei).v9 = function (t, e) {
                  return this.gb_1.generateInTextCitation(t, e);
                }),
                (M(Ei).getInTextRequiredFields = function () {
                  return this.gb_1.getInTextRequiredFields();
                }),
                (M(Ei).getRequiredFields = function () {
                  return this.gb_1.getRequiredFields();
                }),
                (M(Ei).getSecondaryFields = function () {
                  return this.gb_1.getSecondaryFields();
                }),
                (M(Qi).t9 = function (t, e) {
                  return this.hb_1.generateFullCitation(t, e);
                }),
                (M(Qi).v9 = function (t, e) {
                  return this.hb_1.generateInTextCitation(t, e);
                }),
                (M(Qi).getInTextRequiredFields = function () {
                  return this.hb_1.getInTextRequiredFields();
                }),
                (M(Qi).getRequiredFields = function () {
                  return this.hb_1.getRequiredFields();
                }),
                (M(Qi).getSecondaryFields = function () {
                  return this.hb_1.getSecondaryFields();
                }),
                (M(ar).t9 = function (t, e) {
                  return this.ib_1.generateFullCitation(t, e);
                }),
                (M(ar).v9 = function (t, e) {
                  return this.ib_1.generateInTextCitation(t, e);
                }),
                (M(ar).getInTextRequiredFields = function () {
                  return this.ib_1.getInTextRequiredFields();
                }),
                (M(ar).getRequiredFields = function () {
                  return this.ib_1.getRequiredFields();
                }),
                (M(ar).getSecondaryFields = function () {
                  return this.ib_1.getSecondaryFields();
                }),
                (M(_r).t9 = function (t, e) {
                  return this.jb_1.generateFullCitation(t, e);
                }),
                (M(_r).v9 = function (t, e) {
                  return this.jb_1.generateInTextCitation(t, e);
                }),
                (M(_r).getInTextRequiredFields = function () {
                  return this.jb_1.getInTextRequiredFields();
                }),
                (M(_r).getRequiredFields = function () {
                  return this.jb_1.getRequiredFields();
                }),
                (M(_r).getSecondaryFields = function () {
                  return this.jb_1.getSecondaryFields();
                }),
                (M(kr).t9 = function (t, e) {
                  return this.kb_1.generateFullCitation(t, e);
                }),
                (M(kr).v9 = function (t, e) {
                  return this.kb_1.generateInTextCitation(t, e);
                }),
                (M(kr).getInTextRequiredFields = function () {
                  return this.kb_1.getInTextRequiredFields();
                }),
                (M(kr).getRequiredFields = function () {
                  return this.kb_1.getRequiredFields();
                }),
                (M(kr).getSecondaryFields = function () {
                  return this.kb_1.getSecondaryFields();
                }),
                (M(Vr).t9 = function (t, e) {
                  return this.lb_1.generateFullCitation(t, e);
                }),
                (M(Vr).v9 = function (t, e) {
                  return this.lb_1.generateInTextCitation(t, e);
                }),
                (M(Vr).getInTextRequiredFields = function () {
                  return this.lb_1.getInTextRequiredFields();
                }),
                (M(Vr).getRequiredFields = function () {
                  return this.lb_1.getRequiredFields();
                }),
                (M(Vr).getSecondaryFields = function () {
                  return this.lb_1.getSecondaryFields();
                }),
                (M(Br).t9 = function (t, e) {
                  return this.mb_1.generateFullCitation(t, e);
                }),
                (M(Br).v9 = function (t, e) {
                  return this.mb_1.generateInTextCitation(t, e);
                }),
                (M(Br).getInTextRequiredFields = function () {
                  return this.mb_1.getInTextRequiredFields();
                }),
                (M(Br).getRequiredFields = function () {
                  return this.mb_1.getRequiredFields();
                }),
                (M(Br).getSecondaryFields = function () {
                  return this.mb_1.getSecondaryFields();
                }),
                (M(eu).t9 = function (t, e) {
                  return this.nb_1.generateFullCitation(t, e);
                }),
                (M(eu).v9 = function (t, e) {
                  return this.nb_1.generateInTextCitation(t, e);
                }),
                (M(eu).getInTextRequiredFields = function () {
                  return this.nb_1.getInTextRequiredFields();
                }),
                (M(eu).getRequiredFields = function () {
                  return this.nb_1.getRequiredFields();
                }),
                (M(eu).getSecondaryFields = function () {
                  return this.nb_1.getSecondaryFields();
                }),
                (M(fu).t9 = function (t, e) {
                  return this.ob_1.generateFullCitation(t, e);
                }),
                (M(fu).v9 = function (t, e) {
                  return this.ob_1.generateInTextCitation(t, e);
                }),
                (M(fu).getInTextRequiredFields = function () {
                  return this.ob_1.getInTextRequiredFields();
                }),
                (M(fu).getRequiredFields = function () {
                  return this.ob_1.getRequiredFields();
                }),
                (M(fu).getSecondaryFields = function () {
                  return this.ob_1.getSecondaryFields();
                }),
                (M(bu).t9 = function (t, e) {
                  return this.pb_1.generateFullCitation(t, e);
                }),
                (M(bu).v9 = function (t, e) {
                  return this.pb_1.generateInTextCitation(t, e);
                }),
                (M(bu).getInTextRequiredFields = function () {
                  return this.pb_1.getInTextRequiredFields();
                }),
                (M(bu).getRequiredFields = function () {
                  return this.pb_1.getRequiredFields();
                }),
                (M(bu).getSecondaryFields = function () {
                  return this.pb_1.getSecondaryFields();
                }),
                (M(Ou).t9 = function (t, e) {
                  return this.vb_1.generateFullCitation(t, e);
                }),
                (M(Ou).v9 = function (t, e) {
                  return this.vb_1.generateInTextCitation(t, e);
                }),
                (M(Ou).getInTextRequiredFields = function () {
                  return this.vb_1.getInTextRequiredFields();
                }),
                (M(Ou).getRequiredFields = function () {
                  return this.vb_1.getRequiredFields();
                }),
                (M(Ou).getSecondaryFields = function () {
                  return this.vb_1.getSecondaryFields();
                }),
                (M(Uu).t9 = function (t, e) {
                  return this.wb_1.generateFullCitation(t, e);
                }),
                (M(Uu).v9 = function (t, e) {
                  return this.wb_1.generateInTextCitation(t, e);
                }),
                (M(Uu).getInTextRequiredFields = function () {
                  return this.wb_1.getInTextRequiredFields();
                }),
                (M(Uu).getRequiredFields = function () {
                  return this.wb_1.getRequiredFields();
                }),
                (M(Uu).getSecondaryFields = function () {
                  return this.wb_1.getSecondaryFields();
                }),
                (M(ns).t9 = function (t, e) {
                  return this.xb_1.generateFullCitation(t, e);
                }),
                (M(ns).v9 = function (t, e) {
                  return this.xb_1.generateInTextCitation(t, e);
                }),
                (M(ns).getInTextRequiredFields = function () {
                  return this.xb_1.getInTextRequiredFields();
                }),
                (M(ns).getRequiredFields = function () {
                  return this.xb_1.getRequiredFields();
                }),
                (M(ns).getSecondaryFields = function () {
                  return this.xb_1.getSecondaryFields();
                }),
                (M(hs).t9 = function (t, e) {
                  return this.yb_1.generateFullCitation(t, e);
                }),
                (M(hs).v9 = function (t, e) {
                  return this.yb_1.generateInTextCitation(t, e);
                }),
                (M(hs).getInTextRequiredFields = function () {
                  return this.yb_1.getInTextRequiredFields();
                }),
                (M(hs).getRequiredFields = function () {
                  return this.yb_1.getRequiredFields();
                }),
                (M(hs).getSecondaryFields = function () {
                  return this.yb_1.getSecondaryFields();
                }),
                (M(Fs).t9 = function (t, e) {
                  return this.zb_1.generateFullCitation(t, e);
                }),
                (M(Fs).v9 = function (t, e) {
                  return this.zb_1.generateInTextCitation(t, e);
                }),
                (M(Fs).getInTextRequiredFields = function () {
                  return this.zb_1.getInTextRequiredFields();
                }),
                (M(Fs).getRequiredFields = function () {
                  return this.zb_1.getRequiredFields();
                }),
                (M(Fs).getSecondaryFields = function () {
                  return this.zb_1.getSecondaryFields();
                }),
                (M(Rs).t9 = function (t, e) {
                  return this.ac_1.generateFullCitation(t, e);
                }),
                (M(Rs).v9 = function (t, e) {
                  return this.ac_1.generateInTextCitation(t, e);
                }),
                (M(Rs).getInTextRequiredFields = function () {
                  return this.ac_1.getInTextRequiredFields();
                }),
                (M(Rs).getRequiredFields = function () {
                  return this.ac_1.getRequiredFields();
                }),
                (M(Rs).getSecondaryFields = function () {
                  return this.ac_1.getSecondaryFields();
                }),
                (M(Gs).t9 = function (t, e) {
                  return this.bc_1.generateFullCitation(t, e);
                }),
                (M(Gs).v9 = function (t, e) {
                  return this.bc_1.generateInTextCitation(t, e);
                }),
                (M(Gs).getInTextRequiredFields = function () {
                  return this.bc_1.getInTextRequiredFields();
                }),
                (M(Gs).getRequiredFields = function () {
                  return this.bc_1.getRequiredFields();
                }),
                (M(Gs).getSecondaryFields = function () {
                  return this.bc_1.getSecondaryFields();
                }),
                (M(eo).t9 = function (t, e) {
                  return this.cc_1.generateFullCitation(t, e);
                }),
                (M(eo).v9 = function (t, e) {
                  return this.cc_1.generateInTextCitation(t, e);
                }),
                (M(eo).getInTextRequiredFields = function () {
                  return this.cc_1.getInTextRequiredFields();
                }),
                (M(eo).getRequiredFields = function () {
                  return this.cc_1.getRequiredFields();
                }),
                (M(eo).getSecondaryFields = function () {
                  return this.cc_1.getSecondaryFields();
                }),
                (M(lo).t9 = function (t, e) {
                  return this.dc_1.generateFullCitation(t, e);
                }),
                (M(lo).v9 = function (t, e) {
                  return this.dc_1.generateInTextCitation(t, e);
                }),
                (M(lo).getInTextRequiredFields = function () {
                  return this.dc_1.getInTextRequiredFields();
                }),
                (M(lo).getRequiredFields = function () {
                  return this.dc_1.getRequiredFields();
                }),
                (M(lo).getSecondaryFields = function () {
                  return this.dc_1.getSecondaryFields();
                }),
                (M(_o).t9 = function (t, e) {
                  return this.ec_1.generateFullCitation(t, e);
                }),
                (M(_o).v9 = function (t, e) {
                  return this.ec_1.generateInTextCitation(t, e);
                }),
                (M(_o).getInTextRequiredFields = function () {
                  return this.ec_1.getInTextRequiredFields();
                }),
                (M(_o).getRequiredFields = function () {
                  return this.ec_1.getRequiredFields();
                }),
                (M(_o).getSecondaryFields = function () {
                  return this.ec_1.getSecondaryFields();
                }),
                (M(So).t9 = function (t, e) {
                  return this.fc_1.generateFullCitation(t, e);
                }),
                (M(So).v9 = function (t, e) {
                  return this.fc_1.generateInTextCitation(t, e);
                }),
                (M(So).getInTextRequiredFields = function () {
                  return this.fc_1.getInTextRequiredFields();
                }),
                (M(So).getRequiredFields = function () {
                  return this.fc_1.getRequiredFields();
                }),
                (M(So).getSecondaryFields = function () {
                  return this.fc_1.getSecondaryFields();
                }),
                (M(Io).hc = function (t) {
                  var e = ko(new ba().va(t.lastName), ", ", va().gc(t.firstName));
                  return ko(ko(e, " ", No(t.middleName, $o(va()))), ", ", t.suffix);
                }),
                (M(Io).ic = function (t) {
                  return this.hc(t instanceof gc ? t : G());
                }),
                (M(Ao).kc = function (t) {
                  if (0 === t.length) return "";
                  if (t.length <= 2) return W(t, ", & ", E, E, E, E, qo(this));
                  if (t.length < 20) {
                    var e = U(t).m1(0, (t.length - 1) | 0);
                    return H(e, ", ", E, E, E, E, Do(this)) + ", & " + this.jc_1.hc(B(t));
                  }
                  var n = U(t).m1(0, 19);
                  return H(n, ", ", E, E, E, E, Mo(this)) + ", . . .  " + this.jc_1.hc(B(t));
                }),
                (M(Ao).ic = function (t) {
                  return this.kc(null != t && J(t) ? t : G());
                }),
                (M(Eo).kc = function (t) {
                  return 0 === t.length ? "" : this.lc_1.kc(t) + (t.length < 2 ? ", Ed." : ", Eds.");
                }),
                (M(Eo).ic = function (t) {
                  return this.kc(null != t && J(t) ? t : G());
                }),
                (M(Ro).kc = function (t) {
                  return 0 === t.length ? "" : this.nc_1.kc(t) + (t.length < 2 ? " (Ed.)." : " (Eds.).");
                }),
                (M(Ro).ic = function (t) {
                  return this.kc(null != t && J(t) ? t : G());
                }),
                (M(Vo).hc = function (t) {
                  return ko(ko(ko(va().gc(t.firstName), " ", No(t.middleName, Oo(va()))), " ", new ba().va(t.lastName)), " ", t.suffix);
                }),
                (M(Vo).ic = function (t) {
                  return this.hc(t instanceof gc ? t : G());
                }),
                (M(Lo).kc = function (t) {
                  if (0 === t.length) return "";
                  if (t.length <= 2) return W(t, " & ", E, E, E, E, zo(this));
                  if (t.length < 20) {
                    var e = U(t).m1(0, (t.length - 1) | 0);
                    return H(e, ", ", E, E, E, E, Po(this)) + " & " + this.mc_1.hc(B(t));
                  }
                  var n = U(t).m1(0, 19);
                  return H(n, ", ", E, E, E, E, jo(this)) + ", . . .  " + this.mc_1.hc(B(t));
                }),
                (M(Lo).ic = function (t) {
                  return this.kc(null != t && J(t) ? t : G());
                }),
                (M(Go).va = function (t) {
                  return 0 === Y(t) ? "" : ((e = tt(K(X(t) ? t : G()))), this.oc(e));
                  var e;
                }),
                (M(Go).ic = function (t) {
                  return this.va(null != t && "string" == typeof t ? t : G());
                }),
                (M(Go).oc = function (t) {
                  for (var e = t, n = et([":", "—", "?", "!", "."]).c(); n.d(); ) {
                    var i = n.e(),
                      r = nt(e, [i]);
                    e = H(r, i, E, E, E, E, Zo);
                  }
                  return e;
                }),
                (M(ta).va = function (t) {
                  if (0 === Y(t)) return "";
                  for (var e = Wo(this), n = Uo(this), i = et([e, n, Ho(this)]), r = tt(K(X(t) ? t : G())), u = i.c(); u.d(); )
                    r = u.e()(r);
                  return r;
                }),
                (M(ta).ic = function (t) {
                  return this.va(null != t && "string" == typeof t ? t : G());
                }),
                (M(ta).oc = function (t) {
                  for (var e = t, n = et([":", "—"]).c(); n.d(); ) {
                    var i = n.e(),
                      r = nt(e, [i], E, 2);
                    e = H(r, i, E, E, E, E, Bo);
                  }
                  return e;
                }),
                (M(ta).pc = function (t) {
                  return Q("((?:\\w+-)+\\w+)").s7(t, Qo);
                }),
                (M(ta).qc = function (t) {
                  return Q("([\\w'-]{4,})").s7(t, Ko);
                }),
                (M(ia).hc = function (t) {
                  var e = ko(new ba().va(t.lastName), ", ", new ba().va(t.firstName));
                  return ko(ko(e, " ", No(t.middleName, ea(va()))), " ", t.suffix);
                }),
                (M(ia).ic = function (t) {
                  return this.hc(t instanceof gc ? t : G());
                }),
                (M(ia).rc = function (t) {
                  return ko(ko(ko(new ba().va(t.firstName), " ", No(t.middleName, na(va()))), " ", new ba().va(t.lastName)), " ", t.suffix);
                }),
                (M(ua).kc = function (t) {
                  if (0 === t.length) return "";
                  if (1 === t.length) return this.sc_1.hc(t[0]);
                  if (t.length <= 10) {
                    for (var e = O(t.length), n = 0, i = 0, r = t.length; i < r; ) {
                      var u,
                        s = t[i];
                      i = (i + 1) | 0;
                      var o = n;
                      (n = (o + 1) | 0), (u = ra(this, s, o, t.length)), e.b(u);
                    }
                    var a = e.c();
                    if (!a.d()) throw ut("Empty collection can't be reduced.");
                    for (var c = a.e(); a.d(); ) c += a.e();
                    return c;
                  }
                  for (var l = U(t).m1(0, 7), h = O(st(l, 10)), f = 0, d = l.c(); d.d(); ) {
                    var w,
                      m = f;
                    (f = (m + 1) | 0), (w = ra(this, d.e(), ot(m), t.length)), h.b(w);
                  }
                  var g = h.c();
                  if (!g.d()) throw ut("Empty collection can't be reduced.");
                  for (var _ = g.e(); g.d(); ) _ += g.e();
                  return _ + " et al";
                }),
                (M(ua).ic = function (t) {
                  return this.kc(null != t && J(t) ? t : G());
                }),
                (M(oa).kc = function (t) {
                  if (0 === t.length) return "";
                  if (1 === t.length) return this.tc_1.hc(t[0]) + this.uc_1;
                  if (2 === t.length) return this.tc_1.hc(t[0]) + ", and " + this.tc_1.rc(t[1]) + this.vc_1;
                  if (t.length <= 10) {
                    for (var e = O(t.length), n = 0, i = 0, r = t.length; i < r; ) {
                      var u,
                        s = t[i];
                      i = (i + 1) | 0;
                      var o = n;
                      (n = (o + 1) | 0), (u = sa(this, s, o, t.length)), e.b(u);
                    }
                    var a = e.c();
                    if (!a.d()) throw ut("Empty collection can't be reduced.");
                    for (var c = a.e(); a.d(); ) c += a.e();
                    return c + this.vc_1;
                  }
                  for (var l = U(t).m1(0, 7), h = O(st(l, 10)), f = 0, d = l.c(); d.d(); ) {
                    var w,
                      m = f;
                    (f = (m + 1) | 0), (w = sa(this, d.e(), ot(m), t.length)), h.b(w);
                  }
                  var g = h.c();
                  if (!g.d()) throw ut("Empty collection can't be reduced.");
                  for (var _ = g.e(); g.d(); ) _ += g.e();
                  return _ + " et al" + this.vc_1;
                }),
                (M(oa).ic = function (t) {
                  return this.kc(null != t && J(t) ? t : G());
                }),
                (M(ca).wc = function (t) {
                  for (
                    var e = et([aa(this, t.hour, " hr."), aa(this, t.minute, " min."), aa(this, t.second, " sec.")]), n = at(), i = e.c();
                    i.d();

                  ) {
                    var r = i.e();
                    r.length > 0 && n.b(r);
                  }
                  var u = H(n, ", ");
                  return null != u ? ct(u, 1) : "";
                }),
                (M(ca).ic = function (t) {
                  return this.wc(t instanceof Uc ? t : G());
                }),
                (M(ha).kc = function (t) {
                  if (0 === t.length) return "";
                  for (var e = O(t.length), n = 0, i = 0, r = t.length; i < r; ) {
                    var u,
                      s = t[i];
                    i = (i + 1) | 0;
                    var o = n;
                    (n = (o + 1) | 0), (u = la(this, s, o, t.length)), e.b(u);
                  }
                  var a = e.c();
                  if (!a.d()) throw ut("Empty collection can't be reduced.");
                  for (var c = a.e(); a.d(); ) c += a.e();
                  return c;
                }),
                (M(ha).ic = function (t) {
                  return this.kc(null != t && J(t) ? t : G());
                }),
                (M(pa).va = function (t) {
                  if (0 === Y(t)) return "";
                  for (var e = fa(this), n = et([e, da(this)]), i = tt(K(X(t) ? t : G())), r = n.c(); r.d(); ) i = r.e()(i);
                  return i;
                }),
                (M(pa).ic = function (t) {
                  return this.va(null != t && "string" == typeof t ? t : G());
                }),
                (M(pa).oc = function (t) {
                  for (var e = t, n = et([":", "—"]).c(); n.d(); ) {
                    var i = n.e(),
                      r = nt(e, [i], E, 2);
                    e = H(r, i, E, E, E, E, wa(this));
                  }
                  return e;
                }),
                (M(pa).ed = function (t) {
                  return Q("^\\s*([a-z])").s7(t, ma);
                }),
                (M(pa).fd = function (t) {
                  return Q("\\s[a-z][\\w'-]+$").s7(t, ga(this));
                }),
                (M(pa).dd = function (t) {
                  return Q("([\\w'-]+)").s7(t, _a(this));
                }),
                (M(ya).gc = function (t) {
                  for (var e = Q("(\\s|-)").u7(t, 0), n = at(), i = e.c(); i.d(); ) {
                    var r = i.e();
                    Y(r) > 0 && n.b(r);
                  }
                  for (var u = O(st(n, 10)), s = n.c(); s.d(); ) {
                    var o;
                    (o = s.e().substring(0, 1).toUpperCase()), u.b(o);
                  }
                  for (var a = "", c = u.c(); c.d(); ) a = ko(a, " ", c.e() + ".");
                  return a;
                }),
                (M(ba).va = function (t) {
                  var e;
                  if (Y(t) > 0) {
                    var n,
                      i = it(t, 0);
                    (n = rt(i).toUpperCase()), (e = tt(n) + t.substring(1));
                  } else e = t;
                  return e;
                }),
                (M(ba).ic = function (t) {
                  return this.va(null != t && "string" == typeof t ? t : G());
                }),
                (M(xa).hd = function (t) {
                  return 1 === t.length && null == t[0].getUniqueEndPage()
                    ? (this.gd_1 ? "p. " : "") + t[0].startPage
                    : (this.gd_1 ? "pp. " : "") + W(t, ", ", E, E, E, E, Ta);
                }),
                (M(xa).ic = function (t) {
                  return this.hd(null != t && J(t) ? t : G());
                }),
                (M(Ca).va = function (t) {
                  return dt(t, "https://doi.org/") ? t : dt(t, "doi:") ? "https://doi.org/" + t.substring(4) : "https://doi.org/" + t;
                }),
                (M(Ca).ic = function (t) {
                  return this.va(null != t && "string" == typeof t ? t : G());
                }),
                (M(Fa).kd = function (t) {
                  var e;
                  if (null == t.month || null == t.day) e = wt(this.jd_1, "yyyy", t.year.toString());
                  else {
                    var n = wt(wt(wt(this.id_1, "yyyy", t.year.toString()), "m", t.month.toString()), "d", t.day.toString());
                    e = mt(n, "M") ? wt(n, "M", new qa().ld(t.month)) : n;
                  }
                  return e;
                }),
                (M(Fa).ic = function (t) {
                  return this.kd(t instanceof Cc ? t : G());
                }),
                (M(Sa).kd = function (t) {
                  return t.year.toString();
                }),
                (M(Sa).ic = function (t) {
                  return this.kd(t instanceof Cc ? t : G());
                }),
                (M(ka).kc = function (t) {
                  switch (this.md_1.v8_1) {
                    case 2:
                      return 1 === t.length
                        ? t[0].lastName
                        : 2 === t.length
                        ? ko(t[0].lastName, " and ", t[1].lastName)
                        : 3 === t.length
                        ? ko(ko(t[0].lastName, ", ", t[1].lastName), ", and ", t[2].lastName)
                        : t[0].lastName + " et al.";
                    case 0:
                      return 1 === t.length
                        ? t[0].lastName
                        : 2 === t.length
                        ? ko(t[0].lastName, " & ", t[1].lastName)
                        : t[0].lastName + " et al.";
                    case 1:
                      return 1 === t.length
                        ? t[0].lastName
                        : 2 === t.length
                        ? ko(t[0].lastName, " and ", t[1].lastName)
                        : t[0].lastName + " et al.";
                    default:
                      D();
                  }
                }),
                (M(ka).ic = function (t) {
                  return this.kc(null != t && J(t) ? t : G());
                }),
                (M(Na).ld = function (t) {
                  return t.toString();
                }),
                (M(Na).ic = function (t) {
                  return this.ld(null != t && "number" == typeof t ? t : G());
                }),
                (M($a).ld = function (t) {
                  var e = gt(t) % 10 | 0;
                  return 10 <= t && t <= 20 ? t + "th" : 1 === e ? t + "st" : 2 === e ? t + "nd" : 3 === e ? t + "rd" : t + "th";
                }),
                (M($a).ic = function (t) {
                  return this.ld(null != t && "number" == typeof t ? t : G());
                }),
                (M(qa).ld = function (t) {
                  var e = Ia().h1(t);
                  return null == e ? "" : e;
                }),
                (M(qa).ic = function (t) {
                  return this.ld(null != t && "number" == typeof t ? t : G());
                }),
                (M(Ma).ic = function (t) {
                  for (var e = this.nd_1.ic(t), n = this.od_1, i = 0, r = n.length; i < r; ) {
                    var u = n[i];
                    i = (i + 1) | 0;
                    var s = e;
                    e = u.ic(s);
                  }
                  return e;
                }),
                (M(Aa).va = function (t) {
                  return t;
                }),
                (M(Aa).ic = function (t) {
                  return this.va(null != t && "string" == typeof t ? t : G());
                }),
                (M(Ea).va = function (t) {
                  var e = this.pd_1,
                    n = (null == e ? "" : e) + t,
                    i = this.qd_1;
                  return n + (null == i ? "" : i);
                }),
                (M(Ea).ic = function (t) {
                  return this.va(null != t && "string" == typeof t ? t : G());
                }),
                (M(Oa).wc = function (t) {
                  var e;
                  if (null == t.hour) {
                    var n = t.minute;
                    e = (null == n ? 0 : n) + ":" + Ra(this, t.second);
                  } else e = t.hour + ":" + Ra(this, t.minute) + ":" + Ra(this, t.second);
                  return e;
                }),
                (M(Oa).ic = function (t) {
                  return this.wc(t instanceof Uc ? t : G());
                }),
                (M(Va).va = function (t) {
                  if (mt(t, "://")) {
                    var e = (yt(t, "://") + 3) | 0;
                    return t.substring(e);
                  }
                  return t;
                }),
                (M(Va).ic = function (t) {
                  return this.va(null != t && "string" == typeof t ? t : G());
                }),
                (M(za).rd = function (t) {
                  return 0 <= t && t <= 9999;
                }),
                (M(za).sd = function (t) {
                  return this.rd(null != t && "number" == typeof t ? t : G());
                }),
                (M(Ya).kc = function (t) {
                  return 0 === t.length
                    ? ""
                    : 1 === t.length
                    ? Pa(this, t[0])
                    : 2 === t.length
                    ? ko(Pa(this, t[0]), ", and ", ja(this, t[1]))
                    : Pa(this, t[0]) + ", et al.";
                }),
                (M(Ya).ic = function (t) {
                  return this.kc(null != t && J(t) ? t : G());
                }),
                (M(Ga).kd = function (t) {
                  var e = "";
                  if ((null != t.day && (e += t.day.toString() + " "), null != t.month)) {
                    var n = new qa().ld(t.month),
                      i = 9 === t.month ? 4 : 3,
                      r = n.substring(0, i);
                    e += r + (r.length < n.length ? ". " : " ");
                  }
                  return (e += t.year.toString());
                }),
                (M(Ga).ic = function (t) {
                  return this.kd(t instanceof Cc ? t : G());
                }),
                (M(Ha).kc = function (t) {
                  if (0 === t.length) return "";
                  if (t.length < 3) {
                    for (var e = O(t.length), n = 0, i = t.length; n < i; ) {
                      var r,
                        u = t[n];
                      (n = (n + 1) | 0), (r = Wa(this, u)), e.b(r);
                    }
                    return H(e, " and ");
                  }
                  return Wa(this, t[0]) + ", et al.";
                }),
                (M(Ha).ic = function (t) {
                  return this.kc(null != t && J(t) ? t : G());
                }),
                (M(tc).va = function (t) {
                  if (0 === Y(t)) return "";
                  for (var e = Ba(this), n = et([e, Ja(this)]), i = tt(K(X(t) ? t : G())), r = n.c(); r.d(); ) i = r.e()(i);
                  return i;
                }),
                (M(tc).ic = function (t) {
                  return this.va(null != t && "string" == typeof t ? t : G());
                }),
                (M(tc).oc = function (t) {
                  for (var e = t, n = et([":", "—"]).c(); n.d(); ) {
                    var i = n.e(),
                      r = nt(e, [i], E, 2);
                    e = H(r, i, E, E, E, E, Qa);
                  }
                  return e;
                }),
                (M(tc).dd = function (t) {
                  return Q("([\\w'-]+)").s7(t, Ka(this));
                }),
                (M(ec).xd = function (t) {
                  var e = this.ud_1(t);
                  return null == e || this.wd_1.sd(e);
                }),
                (M(ec).yd = function (t) {
                  var e = this.ud_1(t);
                  if (null == e) return null;
                  var n = e;
                  return this.vd_1.ic(n);
                }),
                (M(rc).r9 = function () {
                  for (var t = this.q9_1, e = [], n = 0, i = t.length; n < i; ) {
                    var r = t[n];
                    n = (n + 1) | 0;
                    for (var u = e, s = r.zd(), o = at(), a = 0, c = s.length; a < c; ) {
                      var l = s[a];
                      (a = (a + 1) | 0), l.be_1 && o.b(l);
                    }
                    for (var h = O(st(o, 10)), f = o.c(); f.d(); ) {
                      var d;
                      (d = f.e().ae_1), h.b(d);
                    }
                    e = St(u, h);
                  }
                  return nc(this, e);
                }),
                (M(rc).s9 = function () {
                  for (var t = this.q9_1, e = [], n = 0, i = t.length; n < i; ) {
                    var r = t[n];
                    n = (n + 1) | 0;
                    for (var u = e, s = r.zd(), o = at(), a = 0, c = s.length; a < c; ) {
                      var l = s[a];
                      (a = (a + 1) | 0), l.be_1 || o.b(l);
                    }
                    for (var h = O(st(o, 10)), f = o.c(); f.d(); ) {
                      var d;
                      (d = f.e().ae_1), h.b(d);
                    }
                    e = St(u, h);
                  }
                  return nc(this, e);
                }),
                (M(rc).u9 = function (t, e) {
                  for (var n = this.q9_1, i = O(n.length), r = 0, u = n.length; r < u; ) {
                    var s,
                      o = n[r];
                    (r = (r + 1) | 0), (s = new z(o, o.la(t, e))), i.b(s);
                  }
                  for (var a = i, c = [], l = a.c(); l.d(); ) {
                    var h = c,
                      f = l.e().v1_1.ce_1;
                    c = h.concat(f);
                  }
                  for (var d = kt(c), w = vt(d), m = !0, g = a.c(); g.d(); ) {
                    var _ = m;
                    m = !!g.e().v1_1.ee_1 && _;
                  }
                  for (var p = m, y = [], v = a.c(); v.d(); ) {
                    var b = y,
                      T = v.e().v1_1.de_1;
                    y = b.concat(T);
                  }
                  var x = y;
                  ic(this, x);
                  var C = 0 === w.length;
                  return new al(p, C, !!p && C, x, w);
                }),
                (M(uc).zd = function () {
                  return [];
                }),
                (M(uc).la = function (t, e) {
                  var n = [],
                    i = this.ge_1;
                  return new hc(n, [new ol(E, this.fe_1, null != i && i)], !0);
                }),
                (M(sc).zd = function () {
                  return this.he_1;
                }),
                (M(sc).la = function (t, e) {
                  return this.ie_1(t, e);
                }),
                (M(oc).zd = function () {
                  return [new dc(this.da_1, this.ea_1)];
                }),
                (M(oc).la = function (t, e) {
                  var n = this.fa_1(t),
                    i = e.h1(this.da_1),
                    r = at();
                  if (null == n && null == i) return new hc(this.ea_1 ? [this.da_1] : [], [], !this.ea_1);
                  if (null != this.ga_1) {
                    var u = this.ia_1,
                      s = null == u ? null : u.t3_1;
                    r.b(new ol(E, this.ga_1, null != s && s));
                  }
                  var o = null != n ? this.ja_1.ic(n) : null == i ? "" : i,
                    a = this.ia_1,
                    c = null == a ? null : a.u3_1;
                  if ((r.b(new ol(this.da_1, o, null != c && c, null == n)), null != this.ha_1)) {
                    var l = this.ia_1,
                      h = null == l ? null : l.v3_1;
                    r.b(new ol(E, this.ha_1, null != h && h));
                  }
                  var f = null != n && this.ka_1.sd(n);
                  return new hc(f ? [] : [this.da_1], vt(r), !!f || !this.ea_1);
                }),
                (M(ac).zd = function () {
                  for (var t = this.je_1, e = [], n = 0, i = t.length; n < i; ) {
                    var r = t[n];
                    n = (n + 1) | 0;
                    var u = e,
                      s = r.zd();
                    e = u.concat(s);
                  }
                  return e;
                }),
                (M(ac).la = function (t, e) {
                  for (var n = this.je_1, i = O(n.length), r = 0, u = n.length; r < u; ) {
                    var s,
                      o = n[r];
                    (r = (r + 1) | 0), (s = o.la(t, e)), i.b(s);
                  }
                  for (var a = i, c = O(st(a, 10)), l = a.c(); l.d(); ) {
                    var h;
                    (h = l.e().de_1), c.b(h);
                  }
                  for (var f = at(), d = c.c(); d.d(); ) {
                    var w = d.e();
                    0 !== w.length && f.b(w);
                  }
                  for (var m = f, g = 0, _ = [], p = m.c(); p.d(); ) {
                    var y = p.e(),
                      v = g;
                    g = (v + 1) | 0;
                    var b,
                      T = _;
                    if (ot(v) < ((m.f() - 1) | 0) && null != this.me_1) {
                      var x,
                        C = T.concat(y);
                      (x = [new ol(E, this.me_1)]), (b = C.concat(x));
                    } else b = T.concat(y);
                    _ = b;
                  }
                  for (var F = _, S = [], k = a.c(); k.d(); ) {
                    var N = S,
                      $ = k.e().ce_1;
                    S = N.concat($);
                  }
                  for (var I = S, q = !0, D = a.c(); D.d(); ) {
                    var M = D.e();
                    q = !!q && M.ee_1;
                  }
                  var A = q;
                  if (0 === F.length) return new hc(I, F, A);
                  for (var R = this.ke_1, V = O(R.length), z = 0, P = R.length; z < P; ) {
                    var j,
                      L = R[z];
                    (z = (z + 1) | 0), (j = L.la(t, e).de_1), V.b(j);
                  }
                  for (var Z = [], Y = V.c(); Y.d(); ) {
                    var G = Y.e();
                    Z = Z.concat(G);
                  }
                  for (var W = Z, U = this.le_1, H = O(U.length), B = 0, J = U.length; B < J; ) {
                    var Q,
                      X = U[B];
                    (B = (B + 1) | 0), (Q = X.la(t, e).de_1), H.b(Q);
                  }
                  for (var K = [], tt = H.c(); tt.d(); ) {
                    var et = tt.e();
                    K = K.concat(et);
                  }
                  var nt = K;
                  return new hc(I, W.concat(F).concat(nt), A);
                }),
                (M(cc).zd = function () {
                  for (var t = this.oe_1, e = [], n = 0, i = t.length; n < i; ) {
                    var r = t[n];
                    n = (n + 1) | 0;
                    var u = e,
                      s = r.zd();
                    e = u.concat(s);
                  }
                  return e;
                }),
                (M(cc).la = function (t, e) {
                  for (var n = this.oe_1, i = O(n.length), r = 0, u = n.length; r < u; ) {
                    var s,
                      o = n[r];
                    (r = (r + 1) | 0), (s = o.la(t, e)), i.b(s);
                  }
                  for (var a = i, c = at(), l = a.c(); l.d(); ) {
                    var h = l.e(),
                      f = U(h.ce_1);
                    $t(c, f);
                  }
                  var d,
                    w,
                    m = vt(c);
                  t: if (qt(a, It) && a.o()) d = !1;
                  else {
                    for (var g = a.c(); g.d(); )
                      if (0 !== g.e().de_1.length) {
                        d = !0;
                        break t;
                      }
                    d = !1;
                  }
                  if (!d && !this.ne_1) return new hc(m, [], !0);
                  t: if (qt(a, It) && a.o()) w = !1;
                  else {
                    for (var _ = a.c(); _.d(); ) {
                      var p,
                        y = _.e();
                      if (0 !== y.de_1.length) {
                        var v;
                        e: {
                          for (var b = y.de_1, T = 0, x = b.length; T < x; ) {
                            var C = b[T];
                            if (((T = (T + 1) | 0), C.isPlaceholder)) {
                              v = !1;
                              break e;
                            }
                          }
                          v = !0;
                        }
                        p = v;
                      } else p = !1;
                      if (p) {
                        w = !0;
                        break t;
                      }
                    }
                    w = !1;
                  }
                  var F,
                    S = w;
                  t: {
                    for (var k = a.c(); k.d(); ) {
                      var N,
                        $ = k.e();
                      if (0 !== $.de_1.length)
                        if (S) {
                          var I;
                          e: {
                            for (var q = $.de_1, D = 0, M = q.length; D < M; ) {
                              var A = q[D];
                              if (((D = (D + 1) | 0), A.isPlaceholder)) {
                                I = !1;
                                break e;
                              }
                            }
                            I = !0;
                          }
                          N = I;
                        } else N = !0;
                      else N = !1;
                      if (N) {
                        F = $;
                        break t;
                      }
                    }
                    F = null;
                  }
                  var E,
                    R = F,
                    V = null == R ? null : R.de_1,
                    z = null == V ? [] : V,
                    P = null == R ? null : R.ce_1,
                    j = null == P ? m : P;
                  if (this.ne_1) {
                    var L,
                      Z = null == R ? null : R.ce_1;
                    (L = null == Z ? null : 0 === Z.length), (E = null != L && L);
                  } else E = !0;
                  return new hc(j, z, E);
                }),
                (M(lc).zd = function () {
                  for (var t = this.qe_1, e = O(t.length), n = 0, i = t.length; n < i; ) {
                    var r,
                      u = t[n];
                    (n = (n + 1) | 0), (r = new dc(u.td_1, this.pe_1)), e.b(r);
                  }
                  return vt(e);
                }),
                (M(lc).la = function (t, e) {
                  for (var n = this.qe_1, i = [], r = 0, u = n.length; r < u; ) {
                    var s,
                      o = n[r];
                    r = (r + 1) | 0;
                    var a = i,
                      c = e.h1(o.td_1),
                      l = o.yd(t);
                    if (null != c || null != l) {
                      var h,
                        f = null == l ? c : l,
                        d = null == f ? "" : f,
                        w = this.te_1,
                        m = null == w ? null : w.u3_1;
                      (h = [new z(new ol(o.td_1, d, null != m && m, null == l), null != l && o.xd(t))]), (s = a.concat(h));
                    } else s = a;
                    i = s;
                  }
                  for (var g = i, _ = this.qe_1, p = at(), y = 0, v = _.length; y < v; ) {
                    var b = _[y];
                    (y = (y + 1) | 0), b.xd(t) || p.b(b);
                  }
                  for (var T = O(st(p, 10)), x = p.c(); x.d(); ) {
                    var C;
                    (C = x.e().td_1), T.b(C);
                  }
                  var F = vt(T);
                  if (0 !== g.length) {
                    var S = at();
                    if (null != this.re_1) {
                      var k = this.te_1,
                        N = null == k ? null : k.t3_1;
                      S.b(new ol(E, this.re_1, null != N && N));
                    }
                    for (var $, I = 0, q = 0, D = g.length; q < D; ) {
                      var M = g[q];
                      q = (q + 1) | 0;
                      var A,
                        R = I;
                      if (((I = (R + 1) | 0), S.b(M.u1_1), R < ((g.length - 1) | 0))) {
                        var V = this.ue_1;
                        A = Y(V) > 0;
                      } else A = !1;
                      A && S.b(new ol(E, this.ue_1));
                    }
                    if (null != this.se_1) {
                      var P = this.te_1,
                        j = null == P ? null : P.v3_1;
                      S.b(new ol(E, this.se_1, null != j && j));
                    }
                    if (this.pe_1) {
                      var L;
                      t: {
                        for (var Z = 0, G = g.length; Z < G; ) {
                          var W = g[Z];
                          if (((Z = (Z + 1) | 0), W.v1_1)) {
                            L = !0;
                            break t;
                          }
                        }
                        L = !1;
                      }
                      $ = L;
                    } else $ = !0;
                    var U = $;
                    return new hc(F, vt(S), U);
                  }
                  if (!this.pe_1) return new hc(F, [], !0);
                  for (var H = this.zd(), B = O(H.length), J = 0, Q = H.length; J < Q; ) {
                    var X,
                      K = H[J];
                    (J = (J + 1) | 0), (X = K.ae_1), B.b(X);
                  }
                  return new hc(vt(B), [], !1);
                }),
                (M(hc).toString = function () {
                  return (
                    "CitationPartGenerationResult(invalidFieldNames=" +
                    tt(this.ce_1) +
                    ", result=" +
                    tt(this.de_1) +
                    ", allRequiredFieldsProvidedAndValid=" +
                    this.ee_1 +
                    ")"
                  );
                }),
                (M(hc).hashCode = function () {
                  var t = Dt(this.ce_1);
                  return (t = (I(t, 31) + Dt(this.de_1)) | 0), (t = (I(t, 31) + (0 | this.ee_1)) | 0);
                }),
                (M(hc).equals = function (t) {
                  if (this === t) return !0;
                  if (!(t instanceof hc)) return !1;
                  var e = t instanceof hc ? t : G();
                  return !!Mt(this.ce_1, e.ce_1) && !!Mt(this.de_1, e.de_1) && this.ee_1 === e.ee_1;
                }),
                (M(fc).ve = function () {
                  return this.fieldName;
                }),
                (M(fc).we = function () {
                  return this.placeholder;
                }),
                (M(fc).w1 = function () {
                  return this.fieldName;
                }),
                (M(fc).x1 = function () {
                  return this.placeholder;
                }),
                (M(fc).xe = function (t, e) {
                  return new fc(t, e);
                }),
                (M(fc).copy = function (t, e, n) {
                  return (t = t === E ? this.fieldName : t), (e = e === E ? this.placeholder : e), this.xe(t, e);
                }),
                (M(fc).toString = function () {
                  return "FieldPlaceholder(fieldName=" + this.fieldName + ", placeholder=" + this.placeholder + ")";
                }),
                (M(fc).hashCode = function () {
                  var t = At(this.fieldName);
                  return (t = (I(t, 31) + At(this.placeholder)) | 0);
                }),
                (M(fc).equals = function (t) {
                  if (this === t) return !0;
                  if (!(t instanceof fc)) return !1;
                  var e = t instanceof fc ? t : G();
                  return this.fieldName === e.fieldName && this.placeholder === e.placeholder;
                }),
                (M(dc).toString = function () {
                  return "FieldRequirement(fieldName=" + this.ae_1 + ", isRequired=" + this.be_1 + ")";
                }),
                (M(dc).hashCode = function () {
                  var t = At(this.ae_1);
                  return (t = (I(t, 31) + (0 | this.be_1)) | 0);
                }),
                (M(dc).equals = function (t) {
                  if (this === t) return !0;
                  if (!(t instanceof dc)) return !1;
                  var e = t instanceof dc ? t : G();
                  return this.ae_1 === e.ae_1 && this.be_1 === e.be_1;
                }),
                (M(gc).ye = function () {
                  return this.firstName;
                }),
                (M(gc).ze = function () {
                  return this.lastName;
                }),
                (M(gc).af = function () {
                  return this.middleName;
                }),
                (M(gc).bf = function () {
                  return this.suffix;
                }),
                (M(gc).w1 = function () {
                  return this.firstName;
                }),
                (M(gc).x1 = function () {
                  return this.lastName;
                }),
                (M(gc).cf = function () {
                  return this.middleName;
                }),
                (M(gc).df = function () {
                  return this.suffix;
                }),
                (M(gc).ef = function (t, e, n, i) {
                  return new gc(t, e, n, i);
                }),
                (M(gc).copy = function (t, e, n, i, r) {
                  return (
                    (t = t === E ? this.firstName : t),
                    (e = e === E ? this.lastName : e),
                    (n = n === E ? this.middleName : n),
                    (i = i === E ? this.suffix : i),
                    this.ef(t, e, n, i)
                  );
                }),
                (M(gc).toString = function () {
                  return (
                    "Author(firstName=" +
                    this.firstName +
                    ", lastName=" +
                    this.lastName +
                    ", middleName=" +
                    this.middleName +
                    ", suffix=" +
                    this.suffix +
                    ")"
                  );
                }),
                (M(gc).hashCode = function () {
                  var t = At(this.firstName);
                  return (
                    (t = (I(t, 31) + At(this.lastName)) | 0),
                    (t = (I(t, 31) + (null == this.middleName ? 0 : At(this.middleName))) | 0),
                    (t = (I(t, 31) + (null == this.suffix ? 0 : At(this.suffix))) | 0)
                  );
                }),
                (M(gc).equals = function (t) {
                  if (this === t) return !0;
                  if (!(t instanceof gc)) return !1;
                  var e = t instanceof gc ? t : G();
                  return (
                    this.firstName === e.firstName &&
                    this.lastName === e.lastName &&
                    this.middleName == e.middleName &&
                    this.suffix == e.suffix
                  );
                }),
                Vt(M(vc), "name", M(vc).w8, E),
                Vt(M(vc), "ordinal", M(vc).x8, E),
                (M(Cc).hf = function () {
                  return this.year;
                }),
                (M(Cc).if = function () {
                  return this.month;
                }),
                (M(Cc).jf = function () {
                  return this.day;
                }),
                (M(Cc).w1 = function () {
                  return this.year;
                }),
                (M(Cc).x1 = function () {
                  return this.month;
                }),
                (M(Cc).cf = function () {
                  return this.day;
                }),
                (M(Cc).kf = function (t, e, n) {
                  return new Cc(t, e, n);
                }),
                (M(Cc).copy = function (t, e, n, i) {
                  return (t = t === E ? this.year : t), (e = e === E ? this.month : e), (n = n === E ? this.day : n), this.kf(t, e, n);
                }),
                (M(Cc).toString = function () {
                  return "Date(year=" + this.year + ", month=" + this.month + ", day=" + this.day + ")";
                }),
                (M(Cc).hashCode = function () {
                  var t = this.year;
                  return (
                    (t = (I(t, 31) + (null == this.month ? 0 : this.month)) | 0), (t = (I(t, 31) + (null == this.day ? 0 : this.day)) | 0)
                  );
                }),
                (M(Cc).equals = function (t) {
                  if (this === t) return !0;
                  if (!(t instanceof Cc)) return !1;
                  var e = t instanceof Cc ? t : G();
                  return this.year === e.year && this.month == e.month && this.day == e.day;
                }),
                (M(Fc).lf = function () {
                  return this.authors;
                }),
                (M(Fc).mf = function () {
                  return this.title;
                }),
                (M(Fc).nf = function () {
                  return this.periodicalTitle;
                }),
                (M(Fc).of = function () {
                  return this.volume;
                }),
                (M(Fc).pf = function () {
                  return this.issue;
                }),
                (M(Fc).qf = function () {
                  return this.doi;
                }),
                (M(Fc).rf = function () {
                  return this.pagesRange;
                }),
                (M(Fc).sf = function () {
                  return this.url;
                }),
                (M(Fc).tf = function () {
                  return this.websiteName;
                }),
                (M(Fc).uf = function () {
                  return this.accessedDate;
                }),
                (M(Fc).vf = function () {
                  return this.publisher;
                }),
                (M(Fc).wf = function () {
                  return this.translators;
                }),
                (M(Fc).xf = function () {
                  return this.publicationCity;
                }),
                (M(Fc).yf = function () {
                  return this.edition;
                }),
                (M(Fc).zf = function () {
                  return this.editors;
                }),
                (M(Fc).ag = function () {
                  return this.university;
                }),
                (M(Fc).bg = function () {
                  return this.dissertationType;
                }),
                (M(Fc).cg = function () {
                  return this.database;
                }),
                (M(Fc).dg = function () {
                  return this.publicationNumber;
                }),
                (M(Fc).eg = function () {
                  return this.lectureType;
                }),
                (M(Fc).fg = function () {
                  return this.conferenceTitle;
                }),
                (M(Fc).gg = function () {
                  return this.organization;
                }),
                (M(Fc).hg = function () {
                  return this.venue;
                }),
                (M(Fc).ig = function () {
                  return this.city;
                }),
                (M(Fc).jg = function () {
                  return this.location;
                }),
                (M(Fc).kg = function () {
                  return this.directors;
                }),
                (M(Fc).lg = function () {
                  return this.studio;
                }),
                (M(Fc).mg = function () {
                  return this.actors;
                }),
                (M(Fc).ng = function () {
                  return this.movieLength;
                }),
                (M(Fc).og = function () {
                  return this.username;
                }),
                (M(Fc).pg = function () {
                  return this.timestamp;
                }),
                (M(Fc).qg = function () {
                  return this.bibleVersion;
                }),
                (M(Fc).rg = function () {
                  return this.bibleBook;
                }),
                (M(Fc).sg = function () {
                  return this.bibleChapter;
                }),
                (M(Fc).tg = function () {
                  return this.bibleVerses;
                }),
                (M(Fc).ug = function () {
                  return this.creators;
                }),
                (M(Fc).vg = function () {
                  return this.artists;
                }),
                (M(Fc).wg = function () {
                  return this.imageDescription;
                }),
                (M(Fc).xg = function () {
                  return this.imageSource;
                }),
                (M(Fc).yg = function () {
                  return this.imageType;
                }),
                (M(Fc).zg = function () {
                  return this.company;
                }),
                (M(Fc).ah = function () {
                  return this.productName;
                }),
                (M(Fc).bh = function () {
                  return this.modelVersion;
                }),
                (M(Fc).ch = function () {
                  return this.modelType;
                }),
                (M(Fc).dh = function () {
                  return this.promptText;
                }),
                (M(Fc).eh = function () {
                  return this.shortenedPromptText;
                }),
                (M(Fc).fh = function () {
                  return this.promptDescription;
                }),
                (M(Fc).gh = function () {
                  return this.inTextPagesCited;
                }),
                (M(Fc).hh = function () {
                  return this.inTextTimeStamp;
                }),
                (M(Fc).publishingYear = function () {
                  if (null != this.x9_1) return this.x9_1;
                  var t = this.w9_1;
                  return null == t ? null : t.year;
                }),
                (M(Fc).publishingDate = function () {
                  return null != this.w9_1 ? this.w9_1 : null != this.x9_1 ? new Cc(this.x9_1) : null;
                }),
                (M(Fc).w1 = function () {
                  return this.authors;
                }),
                (M(Fc).x1 = function () {
                  return this.title;
                }),
                (M(Fc).cf = function () {
                  return this.periodicalTitle;
                }),
                (M(Fc).ih = function () {
                  return this.volume;
                }),
                (M(Fc).jh = function () {
                  return this.issue;
                }),
                (M(Fc).kh = function () {
                  return this.doi;
                }),
                (M(Fc).lh = function () {
                  return this.pagesRange;
                }),
                (M(Fc).mh = function () {
                  return this.url;
                }),
                (M(Fc).nh = function () {
                  return this.websiteName;
                }),
                (M(Fc).oh = function () {
                  return this.accessedDate;
                }),
                (M(Fc).ph = function () {
                  return this.publisher;
                }),
                (M(Fc).qh = function () {
                  return this.translators;
                }),
                (M(Fc).rh = function () {
                  return this.publicationCity;
                }),
                (M(Fc).sh = function () {
                  return this.edition;
                }),
                (M(Fc).th = function () {
                  return this.editors;
                }),
                (M(Fc).uh = function () {
                  return this.university;
                }),
                (M(Fc).vh = function () {
                  return this.dissertationType;
                }),
                (M(Fc).wh = function () {
                  return this.database;
                }),
                (M(Fc).xh = function () {
                  return this.publicationNumber;
                }),
                (M(Fc).yh = function () {
                  return this.lectureType;
                }),
                (M(Fc).zh = function () {
                  return this.conferenceTitle;
                }),
                (M(Fc).ai = function () {
                  return this.organization;
                }),
                (M(Fc).bi = function () {
                  return this.venue;
                }),
                (M(Fc).ci = function () {
                  return this.city;
                }),
                (M(Fc).di = function () {
                  return this.location;
                }),
                (M(Fc).ei = function () {
                  return this.directors;
                }),
                (M(Fc).fi = function () {
                  return this.studio;
                }),
                (M(Fc).gi = function () {
                  return this.actors;
                }),
                (M(Fc).hi = function () {
                  return this.movieLength;
                }),
                (M(Fc).ii = function () {
                  return this.username;
                }),
                (M(Fc).ji = function () {
                  return this.timestamp;
                }),
                (M(Fc).ki = function () {
                  return this.bibleVersion;
                }),
                (M(Fc).li = function () {
                  return this.bibleBook;
                }),
                (M(Fc).mi = function () {
                  return this.bibleChapter;
                }),
                (M(Fc).ni = function () {
                  return this.bibleVerses;
                }),
                (M(Fc).oi = function () {
                  return this.creators;
                }),
                (M(Fc).pi = function () {
                  return this.artists;
                }),
                (M(Fc).qi = function () {
                  return this.imageDescription;
                }),
                (M(Fc).ri = function () {
                  return this.imageSource;
                }),
                (M(Fc).si = function () {
                  return this.imageType;
                }),
                (M(Fc).ti = function () {
                  return this.company;
                }),
                (M(Fc).ui = function () {
                  return this.productName;
                }),
                (M(Fc).vi = function () {
                  return this.modelVersion;
                }),
                (M(Fc).wi = function () {
                  return this.modelType;
                }),
                (M(Fc).xi = function () {
                  return this.promptText;
                }),
                (M(Fc).yi = function () {
                  return this.shortenedPromptText;
                }),
                (M(Fc).zi = function () {
                  return this.promptDescription;
                }),
                (M(Fc).aj = function () {
                  return this.inTextPagesCited;
                }),
                (M(Fc).bj = function () {
                  return this.inTextTimeStamp;
                }),
                (M(Fc).cj = function (
                  t,
                  e,
                  n,
                  i,
                  r,
                  u,
                  s,
                  o,
                  a,
                  c,
                  l,
                  h,
                  f,
                  d,
                  w,
                  m,
                  g,
                  _,
                  p,
                  y,
                  v,
                  b,
                  T,
                  x,
                  C,
                  F,
                  S,
                  k,
                  N,
                  $,
                  I,
                  q,
                  D,
                  M,
                  A,
                  E,
                  R,
                  O,
                  V,
                  z,
                  P,
                  j,
                  L,
                  Z,
                  Y,
                  G,
                  W,
                  U,
                  H,
                  B,
                  J
                ) {
                  return new Fc(
                    t,
                    e,
                    n,
                    i,
                    r,
                    u,
                    s,
                    o,
                    a,
                    c,
                    l,
                    h,
                    f,
                    d,
                    w,
                    m,
                    g,
                    _,
                    p,
                    y,
                    v,
                    b,
                    T,
                    x,
                    C,
                    F,
                    S,
                    k,
                    N,
                    $,
                    I,
                    q,
                    D,
                    M,
                    A,
                    E,
                    R,
                    O,
                    V,
                    z,
                    P,
                    j,
                    L,
                    Z,
                    Y,
                    G,
                    W,
                    U,
                    H,
                    B,
                    J
                  );
                }),
                (M(Fc).copy = function (
                  t,
                  e,
                  n,
                  i,
                  r,
                  u,
                  s,
                  o,
                  a,
                  c,
                  l,
                  h,
                  f,
                  d,
                  w,
                  m,
                  g,
                  _,
                  p,
                  y,
                  v,
                  b,
                  T,
                  x,
                  C,
                  F,
                  S,
                  k,
                  N,
                  $,
                  I,
                  q,
                  D,
                  M,
                  A,
                  R,
                  O,
                  V,
                  z,
                  P,
                  j,
                  L,
                  Z,
                  Y,
                  G,
                  W,
                  U,
                  H,
                  B,
                  J,
                  Q,
                  X
                ) {
                  return (
                    (t = t === E ? this.authors : t),
                    (e = e === E ? this.title : e),
                    (n = n === E ? this.periodicalTitle : n),
                    (i = i === E ? this.w9_1 : i),
                    (r = r === E ? this.x9_1 : r),
                    (u = u === E ? this.volume : u),
                    (s = s === E ? this.issue : s),
                    (o = o === E ? this.doi : o),
                    (a = a === E ? this.pagesRange : a),
                    (c = c === E ? this.url : c),
                    (l = l === E ? this.websiteName : l),
                    (h = h === E ? this.accessedDate : h),
                    (f = f === E ? this.publisher : f),
                    (d = d === E ? this.translators : d),
                    (w = w === E ? this.publicationCity : w),
                    (m = m === E ? this.edition : m),
                    (g = g === E ? this.editors : g),
                    (_ = _ === E ? this.university : _),
                    (p = p === E ? this.dissertationType : p),
                    (y = y === E ? this.database : y),
                    (v = v === E ? this.publicationNumber : v),
                    (b = b === E ? this.lectureType : b),
                    (T = T === E ? this.conferenceTitle : T),
                    (x = x === E ? this.organization : x),
                    (C = C === E ? this.venue : C),
                    (F = F === E ? this.city : F),
                    (S = S === E ? this.location : S),
                    (k = k === E ? this.directors : k),
                    (N = N === E ? this.studio : N),
                    ($ = $ === E ? this.actors : $),
                    (I = I === E ? this.movieLength : I),
                    (q = q === E ? this.username : q),
                    (D = D === E ? this.timestamp : D),
                    (M = M === E ? this.bibleVersion : M),
                    (A = A === E ? this.bibleBook : A),
                    (R = R === E ? this.bibleChapter : R),
                    (O = O === E ? this.bibleVerses : O),
                    (V = V === E ? this.creators : V),
                    (z = z === E ? this.artists : z),
                    (P = P === E ? this.imageDescription : P),
                    (j = j === E ? this.imageSource : j),
                    (L = L === E ? this.imageType : L),
                    (Z = Z === E ? this.company : Z),
                    (Y = Y === E ? this.productName : Y),
                    (G = G === E ? this.modelVersion : G),
                    (W = W === E ? this.modelType : W),
                    (U = U === E ? this.promptText : U),
                    (H = H === E ? this.shortenedPromptText : H),
                    (B = B === E ? this.promptDescription : B),
                    (J = J === E ? this.inTextPagesCited : J),
                    (Q = Q === E ? this.inTextTimeStamp : Q),
                    this.cj(
                      t,
                      e,
                      n,
                      i,
                      r,
                      u,
                      s,
                      o,
                      a,
                      c,
                      l,
                      h,
                      f,
                      d,
                      w,
                      m,
                      g,
                      _,
                      p,
                      y,
                      v,
                      b,
                      T,
                      x,
                      C,
                      F,
                      S,
                      k,
                      N,
                      $,
                      I,
                      q,
                      D,
                      M,
                      A,
                      R,
                      O,
                      V,
                      z,
                      P,
                      j,
                      L,
                      Z,
                      Y,
                      G,
                      W,
                      U,
                      H,
                      B,
                      J,
                      Q
                    )
                  );
                }),
                (M(Fc).toString = function () {
                  return (
                    "GenerationInput(authors=" +
                    tt(this.authors) +
                    ", title=" +
                    this.title +
                    ", periodicalTitle=" +
                    this.periodicalTitle +
                    ", publishingDate=" +
                    this.w9_1 +
                    ", publishingYear=" +
                    this.x9_1 +
                    ", volume=" +
                    this.volume +
                    ", issue=" +
                    this.issue +
                    ", doi=" +
                    this.doi +
                    ", pagesRange=" +
                    tt(this.pagesRange) +
                    ", url=" +
                    this.url +
                    ", websiteName=" +
                    this.websiteName +
                    ", accessedDate=" +
                    this.accessedDate +
                    ", publisher=" +
                    this.publisher +
                    ", translators=" +
                    tt(this.translators) +
                    ", publicationCity=" +
                    this.publicationCity +
                    ", edition=" +
                    this.edition +
                    ", editors=" +
                    tt(this.editors) +
                    ", university=" +
                    this.university +
                    ", dissertationType=" +
                    this.dissertationType +
                    ", database=" +
                    this.database +
                    ", publicationNumber=" +
                    this.publicationNumber +
                    ", lectureType=" +
                    this.lectureType +
                    ", conferenceTitle=" +
                    this.conferenceTitle +
                    ", organization=" +
                    this.organization +
                    ", venue=" +
                    this.venue +
                    ", city=" +
                    this.city +
                    ", location=" +
                    this.location +
                    ", directors=" +
                    tt(this.directors) +
                    ", studio=" +
                    this.studio +
                    ", actors=" +
                    tt(this.actors) +
                    ", movieLength=" +
                    this.movieLength +
                    ", username=" +
                    this.username +
                    ", timestamp=" +
                    this.timestamp +
                    ", bibleVersion=" +
                    this.bibleVersion +
                    ", bibleBook=" +
                    this.bibleBook +
                    ", bibleChapter=" +
                    this.bibleChapter +
                    ", bibleVerses=" +
                    tt(this.bibleVerses) +
                    ", creators=" +
                    tt(this.creators) +
                    ", artists=" +
                    tt(this.artists) +
                    ", imageDescription=" +
                    this.imageDescription +
                    ", imageSource=" +
                    this.imageSource +
                    ", imageType=" +
                    this.imageType +
                    ", company=" +
                    this.company +
                    ", productName=" +
                    this.productName +
                    ", modelVersion=" +
                    this.modelVersion +
                    ", modelType=" +
                    this.modelType +
                    ", promptText=" +
                    this.promptText +
                    ", shortenedPromptText=" +
                    this.shortenedPromptText +
                    ", promptDescription=" +
                    this.promptDescription +
                    ", inTextPagesCited=" +
                    tt(this.inTextPagesCited) +
                    ", inTextTimeStamp=" +
                    this.inTextTimeStamp +
                    ")"
                  );
                }),
                (M(Fc).hashCode = function () {
                  var t = null == this.authors ? 0 : Dt(this.authors);
                  return (
                    (t = (I(t, 31) + (null == this.title ? 0 : At(this.title))) | 0),
                    (t = (I(t, 31) + (null == this.periodicalTitle ? 0 : At(this.periodicalTitle))) | 0),
                    (t = (I(t, 31) + (null == this.w9_1 ? 0 : this.w9_1.hashCode())) | 0),
                    (t = (I(t, 31) + (null == this.x9_1 ? 0 : this.x9_1)) | 0),
                    (t = (I(t, 31) + (null == this.volume ? 0 : At(this.volume))) | 0),
                    (t = (I(t, 31) + (null == this.issue ? 0 : At(this.issue))) | 0),
                    (t = (I(t, 31) + (null == this.doi ? 0 : At(this.doi))) | 0),
                    (t = (I(t, 31) + (null == this.pagesRange ? 0 : Dt(this.pagesRange))) | 0),
                    (t = (I(t, 31) + (null == this.url ? 0 : At(this.url))) | 0),
                    (t = (I(t, 31) + (null == this.websiteName ? 0 : At(this.websiteName))) | 0),
                    (t = (I(t, 31) + (null == this.accessedDate ? 0 : this.accessedDate.hashCode())) | 0),
                    (t = (I(t, 31) + (null == this.publisher ? 0 : At(this.publisher))) | 0),
                    (t = (I(t, 31) + (null == this.translators ? 0 : Dt(this.translators))) | 0),
                    (t = (I(t, 31) + (null == this.publicationCity ? 0 : At(this.publicationCity))) | 0),
                    (t = (I(t, 31) + (null == this.edition ? 0 : this.edition)) | 0),
                    (t = (I(t, 31) + (null == this.editors ? 0 : Dt(this.editors))) | 0),
                    (t = (I(t, 31) + (null == this.university ? 0 : At(this.university))) | 0),
                    (t = (I(t, 31) + (null == this.dissertationType ? 0 : At(this.dissertationType))) | 0),
                    (t = (I(t, 31) + (null == this.database ? 0 : At(this.database))) | 0),
                    (t = (I(t, 31) + (null == this.publicationNumber ? 0 : At(this.publicationNumber))) | 0),
                    (t = (I(t, 31) + (null == this.lectureType ? 0 : At(this.lectureType))) | 0),
                    (t = (I(t, 31) + (null == this.conferenceTitle ? 0 : At(this.conferenceTitle))) | 0),
                    (t = (I(t, 31) + (null == this.organization ? 0 : At(this.organization))) | 0),
                    (t = (I(t, 31) + (null == this.venue ? 0 : At(this.venue))) | 0),
                    (t = (I(t, 31) + (null == this.city ? 0 : At(this.city))) | 0),
                    (t = (I(t, 31) + (null == this.location ? 0 : At(this.location))) | 0),
                    (t = (I(t, 31) + (null == this.directors ? 0 : Dt(this.directors))) | 0),
                    (t = (I(t, 31) + (null == this.studio ? 0 : At(this.studio))) | 0),
                    (t = (I(t, 31) + (null == this.actors ? 0 : Dt(this.actors))) | 0),
                    (t = (I(t, 31) + (null == this.movieLength ? 0 : this.movieLength.hashCode())) | 0),
                    (t = (I(t, 31) + (null == this.username ? 0 : At(this.username))) | 0),
                    (t = (I(t, 31) + (null == this.timestamp ? 0 : this.timestamp.hashCode())) | 0),
                    (t = (I(t, 31) + (null == this.bibleVersion ? 0 : At(this.bibleVersion))) | 0),
                    (t = (I(t, 31) + (null == this.bibleBook ? 0 : At(this.bibleBook))) | 0),
                    (t = (I(t, 31) + (null == this.bibleChapter ? 0 : this.bibleChapter)) | 0),
                    (t = (I(t, 31) + (null == this.bibleVerses ? 0 : Dt(this.bibleVerses))) | 0),
                    (t = (I(t, 31) + (null == this.creators ? 0 : Dt(this.creators))) | 0),
                    (t = (I(t, 31) + (null == this.artists ? 0 : Dt(this.artists))) | 0),
                    (t = (I(t, 31) + (null == this.imageDescription ? 0 : At(this.imageDescription))) | 0),
                    (t = (I(t, 31) + (null == this.imageSource ? 0 : At(this.imageSource))) | 0),
                    (t = (I(t, 31) + (null == this.imageType ? 0 : At(this.imageType))) | 0),
                    (t = (I(t, 31) + (null == this.company ? 0 : At(this.company))) | 0),
                    (t = (I(t, 31) + (null == this.productName ? 0 : At(this.productName))) | 0),
                    (t = (I(t, 31) + (null == this.modelVersion ? 0 : At(this.modelVersion))) | 0),
                    (t = (I(t, 31) + (null == this.modelType ? 0 : At(this.modelType))) | 0),
                    (t = (I(t, 31) + (null == this.promptText ? 0 : At(this.promptText))) | 0),
                    (t = (I(t, 31) + (null == this.shortenedPromptText ? 0 : At(this.shortenedPromptText))) | 0),
                    (t = (I(t, 31) + (null == this.promptDescription ? 0 : At(this.promptDescription))) | 0),
                    (t = (I(t, 31) + (null == this.inTextPagesCited ? 0 : Dt(this.inTextPagesCited))) | 0),
                    (t = (I(t, 31) + (null == this.inTextTimeStamp ? 0 : this.inTextTimeStamp.hashCode())) | 0)
                  );
                }),
                (M(Fc).equals = function (t) {
                  if (this === t) return !0;
                  if (!(t instanceof Fc)) return !1;
                  var e = t instanceof Fc ? t : G();
                  return !!(
                    Mt(this.authors, e.authors) &&
                    this.title == e.title &&
                    this.periodicalTitle == e.periodicalTitle &&
                    Mt(this.w9_1, e.w9_1) &&
                    this.x9_1 == e.x9_1 &&
                    this.volume == e.volume &&
                    this.issue == e.issue &&
                    this.doi == e.doi &&
                    Mt(this.pagesRange, e.pagesRange) &&
                    this.url == e.url &&
                    this.websiteName == e.websiteName &&
                    Mt(this.accessedDate, e.accessedDate) &&
                    this.publisher == e.publisher &&
                    Mt(this.translators, e.translators) &&
                    this.publicationCity == e.publicationCity &&
                    this.edition == e.edition &&
                    Mt(this.editors, e.editors) &&
                    this.university == e.university &&
                    this.dissertationType == e.dissertationType &&
                    this.database == e.database &&
                    this.publicationNumber == e.publicationNumber &&
                    this.lectureType == e.lectureType &&
                    this.conferenceTitle == e.conferenceTitle &&
                    this.organization == e.organization &&
                    this.venue == e.venue &&
                    this.city == e.city &&
                    this.location == e.location &&
                    Mt(this.directors, e.directors) &&
                    this.studio == e.studio &&
                    Mt(this.actors, e.actors) &&
                    Mt(this.movieLength, e.movieLength) &&
                    this.username == e.username &&
                    Mt(this.timestamp, e.timestamp) &&
                    this.bibleVersion == e.bibleVersion &&
                    this.bibleBook == e.bibleBook &&
                    this.bibleChapter == e.bibleChapter &&
                    Mt(this.bibleVerses, e.bibleVerses) &&
                    Mt(this.creators, e.creators) &&
                    Mt(this.artists, e.artists) &&
                    this.imageDescription == e.imageDescription &&
                    this.imageSource == e.imageSource &&
                    this.imageType == e.imageType &&
                    this.company == e.company &&
                    this.productName == e.productName &&
                    this.modelVersion == e.modelVersion &&
                    this.modelType == e.modelType &&
                    this.promptText == e.promptText &&
                    this.shortenedPromptText == e.shortenedPromptText &&
                    this.promptDescription == e.promptDescription &&
                    Mt(this.inTextPagesCited, e.inTextPagesCited) &&
                    Mt(this.inTextTimeStamp, e.inTextTimeStamp)
                  );
                }),
                (M(Sc).dj = function () {
                  return this.startPage;
                }),
                (M(Sc).ej = function () {
                  return this.endPage;
                }),
                (M(Sc).getUniqueEndPage = function () {
                  return this.startPage === this.endPage ? null : this.endPage;
                }),
                (M(Sc).w1 = function () {
                  return this.startPage;
                }),
                (M(Sc).x1 = function () {
                  return this.endPage;
                }),
                (M(Sc).fj = function (t, e) {
                  return new Sc(t, e);
                }),
                (M(Sc).copy = function (t, e, n) {
                  return (t = t === E ? this.startPage : t), (e = e === E ? this.endPage : e), this.fj(t, e);
                }),
                (M(Sc).toString = function () {
                  return "PagesRange(startPage=" + this.startPage + ", endPage=" + this.endPage + ")";
                }),
                (M(Sc).hashCode = function () {
                  var t = At(this.startPage);
                  return (t = (I(t, 31) + (null == this.endPage ? 0 : At(this.endPage))) | 0);
                }),
                (M(Sc).equals = function (t) {
                  if (this === t) return !0;
                  if (!(t instanceof Sc)) return !1;
                  var e = t instanceof Sc ? t : G();
                  return this.startPage === e.startPage && this.endPage == e.endPage;
                }),
                Vt(M(Ic), "name", M(Ic).w8, E),
                Vt(M(Ic), "ordinal", M(Ic).x8, E),
                (M(Uc).ij = function () {
                  return this.hour;
                }),
                (M(Uc).jj = function () {
                  return this.minute;
                }),
                (M(Uc).kj = function () {
                  return this.second;
                }),
                (M(Uc).w1 = function () {
                  return this.hour;
                }),
                (M(Uc).x1 = function () {
                  return this.minute;
                }),
                (M(Uc).cf = function () {
                  return this.second;
                }),
                (M(Uc).lj = function (t, e, n) {
                  return new Uc(t, e, n);
                }),
                (M(Uc).copy = function (t, e, n, i) {
                  return (t = t === E ? this.hour : t), (e = e === E ? this.minute : e), (n = n === E ? this.second : n), this.lj(t, e, n);
                }),
                (M(Uc).toString = function () {
                  return "TimeStamp(hour=" + this.hour + ", minute=" + this.minute + ", second=" + this.second + ")";
                }),
                (M(Uc).hashCode = function () {
                  var t = null == this.hour ? 0 : this.hour;
                  return (t = (I(t, 31) + (null == this.minute ? 0 : this.minute)) | 0), (t = (I(t, 31) + this.second) | 0);
                }),
                (M(Uc).equals = function (t) {
                  if (this === t) return !0;
                  if (!(t instanceof Uc)) return !1;
                  var e = t instanceof Uc ? t : G();
                  return this.hour == e.hour && this.minute == e.minute && this.second === e.second;
                }),
                (M(Bc).mj = function (t) {
                  return !(!Hc().o7(t.firstName) || !Hc().o7(t.lastName)) && (null == t.middleName || Hc().o7(t.middleName));
                }),
                (M(Bc).sd = function (t) {
                  return this.mj(t instanceof gc ? t : G());
                }),
                (M(Qc).oj = function (t) {
                  var e;
                  if (0 !== t.length) {
                    for (var n = O(t.length), i = 0, r = t.length; i < r; ) {
                      var u,
                        s = t[i];
                      (i = (i + 1) | 0), (u = this.nj_1.mj(s)), n.b(u);
                    }
                    var o = n.c();
                    if (!o.d()) throw ut("Empty collection can't be reduced.");
                    for (var a = o.e(); o.d(); ) {
                      var c = a,
                        l = o.e();
                      a = !!c && l;
                    }
                    e = a;
                  } else e = !1;
                  return e;
                }),
                (M(Qc).sd = function (t) {
                  return this.oj(null != t && J(t) ? t : G());
                }),
                (M(Xc).ua = function (t) {
                  return this.pj_1.ua(t);
                }),
                (M(Xc).sd = function (t) {
                  return this.ua(null != t && "string" == typeof t ? t : G());
                }),
                (M(Kc).rj = function (t) {
                  if (t.year > 9999 || t.year < 0) return !1;
                  if (null != t.day && (t.day > 31 || t.day < 0)) return !1;
                  if (null != t.month && (t.month > 12 || t.month < 0)) return !1;
                  if (null != t.month && null != t.day) {
                    var e;
                    if (((e = new Int32Array([4, 6, 9, 11])), zt(e, t.month) && t.day > 30)) return !1;
                    if (2 === t.month && t.day > 29) return !1;
                  }
                  return !0;
                }),
                (M(Kc).sd = function (t) {
                  return this.rj(t instanceof Cc ? t : G());
                }),
                (M(tl).rd = function (t) {
                  var e = this.sj_1;
                  return t <= this.tj_1 && e <= t;
                }),
                (M(tl).sd = function (t) {
                  return this.rd(null != t && "number" == typeof t ? t : G());
                }),
                (M(el).ua = function (t) {
                  return Y(t) > 0;
                }),
                (M(el).sd = function (t) {
                  return this.ua(null != t && "string" == typeof t ? t : G());
                }),
                (M(nl).uj = function (t) {
                  var e,
                    n = new il();
                  if (0 !== t.length) {
                    for (var i = O(t.length), r = 0, u = t.length; r < u; ) {
                      var s,
                        o = t[r];
                      (r = (r + 1) | 0), (s = n.vj(o)), i.b(s);
                    }
                    var a = i.c();
                    if (!a.d()) throw ut("Empty collection can't be reduced.");
                    for (var c = a.e(); a.d(); ) {
                      var l = c,
                        h = a.e();
                      c = !!l && h;
                    }
                    e = c;
                  } else e = !1;
                  return e;
                }),
                (M(nl).sd = function (t) {
                  return this.uj(null != t && J(t) ? t : G());
                }),
                (M(il).vj = function (t) {
                  var e = t.getUniqueEndPage(),
                    n = t.startPage;
                  return Y(n) > 0 && (null == e || Y(e) > 0);
                }),
                (M(il).sd = function (t) {
                  return this.vj(t instanceof Sc ? t : G());
                }),
                (M(rl).ua = function (t) {
                  return this.qj_1.o7(t);
                }),
                (M(rl).sd = function (t) {
                  return this.ua(null != t && "string" == typeof t ? t : G());
                }),
                (M(ul).wj = function (t) {
                  var e;
                  if (null == t.minute || jt(0, 59).x2(t.minute)) {
                    var n = t.second;
                    e = 0 <= n && n <= 59;
                  } else e = !1;
                  return !!e && (null == t.hour || t.hour >= 0);
                }),
                (M(ul).sd = function (t) {
                  return this.wj(t instanceof Uc ? t : G());
                }),
                (M(sl).ua = function (t) {
                  return this.xj_1.ua(t);
                }),
                (M(sl).sd = function (t) {
                  return this.ua(null != t && "string" == typeof t ? t : G());
                }),
                (M(ol).ve = function () {
                  return this.fieldName;
                }),
                (M(ol).z = function () {
                  return this.value;
                }),
                (M(ol).yj = function () {
                  return this.italicize;
                }),
                (M(ol).zj = function () {
                  return this.isPlaceholder;
                }),
                (M(ol).w1 = function () {
                  return this.fieldName;
                }),
                (M(ol).x1 = function () {
                  return this.value;
                }),
                (M(ol).cf = function () {
                  return this.italicize;
                }),
                (M(ol).df = function () {
                  return this.isPlaceholder;
                }),
                (M(ol).ak = function (t, e, n, i) {
                  return new ol(t, e, n, i);
                }),
                (M(ol).copy = function (t, e, n, i, r) {
                  return (
                    (t = t === E ? this.fieldName : t),
                    (e = e === E ? this.value : e),
                    (n = n === E ? this.italicize : n),
                    (i = i === E ? this.isPlaceholder : i),
                    this.ak(t, e, n, i)
                  );
                }),
                (M(ol).toString = function () {
                  return (
                    "CitationPartWithFieldName(fieldName=" +
                    this.fieldName +
                    ", value=" +
                    this.value +
                    ", italicize=" +
                    this.italicize +
                    ", isPlaceholder=" +
                    this.isPlaceholder +
                    ")"
                  );
                }),
                (M(ol).hashCode = function () {
                  var t = null == this.fieldName ? 0 : At(this.fieldName);
                  return (
                    (t = (I(t, 31) + At(this.value)) | 0),
                    (t = (I(t, 31) + (0 | this.italicize)) | 0),
                    (t = (I(t, 31) + (0 | this.isPlaceholder)) | 0)
                  );
                }),
                (M(ol).equals = function (t) {
                  if (this === t) return !0;
                  if (!(t instanceof ol)) return !1;
                  var e = t instanceof ol ? t : G();
                  return (
                    this.fieldName == e.fieldName &&
                    this.value === e.value &&
                    this.italicize === e.italicize &&
                    this.isPlaceholder === e.isPlaceholder
                  );
                }),
                (M(al).bk = function () {
                  return this.allRequiredFieldsProvidedAndValid;
                }),
                (M(al).ck = function () {
                  return this.allFieldsValid;
                }),
                (M(al).dk = function () {
                  return this.isValidCitation;
                }),
                (M(al).ek = function () {
                  return this.result;
                }),
                (M(al).fk = function () {
                  return this.invalidFields;
                }),
                (M(al).w1 = function () {
                  return this.allRequiredFieldsProvidedAndValid;
                }),
                (M(al).x1 = function () {
                  return this.allFieldsValid;
                }),
                (M(al).cf = function () {
                  return this.isValidCitation;
                }),
                (M(al).df = function () {
                  return this.result;
                }),
                (M(al).gk = function () {
                  return this.invalidFields;
                }),
                (M(al).hk = function (t, e, n, i, r) {
                  return new al(t, e, n, i, r);
                }),
                (M(al).copy = function (t, e, n, i, r, u) {
                  return (
                    (t = t === E ? this.allRequiredFieldsProvidedAndValid : t),
                    (e = e === E ? this.allFieldsValid : e),
                    (n = n === E ? this.isValidCitation : n),
                    (i = i === E ? this.result : i),
                    (r = r === E ? this.invalidFields : r),
                    this.hk(t, e, n, i, r)
                  );
                }),
                (M(al).toString = function () {
                  return (
                    "GenerationResult(allRequiredFieldsProvidedAndValid=" +
                    this.allRequiredFieldsProvidedAndValid +
                    ", allFieldsValid=" +
                    this.allFieldsValid +
                    ", isValidCitation=" +
                    this.isValidCitation +
                    ", result=" +
                    tt(this.result) +
                    ", invalidFields=" +
                    tt(this.invalidFields) +
                    ")"
                  );
                }),
                (M(al).hashCode = function () {
                  var t = 0 | this.allRequiredFieldsProvidedAndValid;
                  return (
                    (t = (I(t, 31) + (0 | this.allFieldsValid)) | 0),
                    (t = (I(t, 31) + (0 | this.isValidCitation)) | 0),
                    (t = (I(t, 31) + Dt(this.result)) | 0),
                    (t = (I(t, 31) + Dt(this.invalidFields)) | 0)
                  );
                }),
                (M(al).equals = function (t) {
                  if (this === t) return !0;
                  if (!(t instanceof al)) return !1;
                  var e = t instanceof al ? t : G();
                  return (
                    this.allRequiredFieldsProvidedAndValid === e.allRequiredFieldsProvidedAndValid &&
                    this.allFieldsValid === e.allFieldsValid &&
                    this.isValidCitation === e.isValidCitation &&
                    !!Mt(this.result, e.result) &&
                    !!Mt(this.invalidFields, e.invalidFields)
                  );
                }),
                (M(Gt).generateFullCitation = Lt),
                (M(Gt).generateInTextCitation = Zt),
                (M(ee).generateFullCitation = Lt),
                (M(ee).generateInTextCitation = Zt),
                (M(we).generateFullCitation = Lt),
                (M(we).generateInTextCitation = Zt),
                (M(xe).generateFullCitation = Lt),
                (M(xe).generateInTextCitation = Zt),
                (M(De).generateFullCitation = Lt),
                (M(De).generateInTextCitation = Zt),
                (M(Be).generateFullCitation = Lt),
                (M(Be).generateInTextCitation = Zt),
                (M(sn).generateFullCitation = Lt),
                (M(sn).generateInTextCitation = Zt),
                (M(dn).generateFullCitation = Lt),
                (M(dn).generateInTextCitation = Zt),
                (M(Tn).generateFullCitation = Lt),
                (M(Tn).generateInTextCitation = Zt),
                (M(Dn).generateFullCitation = Lt),
                (M(Dn).generateInTextCitation = Zt),
                (M(Pn).generateFullCitation = Lt),
                (M(Pn).generateInTextCitation = Zt),
                (M(Wn).generateFullCitation = Lt),
                (M(Wn).generateInTextCitation = Zt),
                (M(ei).generateFullCitation = Lt),
                (M(ei).generateInTextCitation = Zt),
                (M(ci).generateFullCitation = Lt),
                (M(ci).generateInTextCitation = Zt),
                (M(vi).generateFullCitation = Lt),
                (M(vi).generateInTextCitation = Zt),
                (M(Si).generateFullCitation = Lt),
                (M(Si).generateInTextCitation = Zt),
                (M(Ei).generateFullCitation = Lt),
                (M(Ei).generateInTextCitation = Zt),
                (M(Qi).generateFullCitation = Lt),
                (M(Qi).generateInTextCitation = Zt),
                (M(ar).generateFullCitation = Lt),
                (M(ar).generateInTextCitation = Zt),
                (M(_r).generateFullCitation = Lt),
                (M(_r).generateInTextCitation = Zt),
                (M(kr).generateFullCitation = Lt),
                (M(kr).generateInTextCitation = Zt),
                (M(Vr).generateFullCitation = Lt),
                (M(Vr).generateInTextCitation = Zt),
                (M(Br).generateFullCitation = Lt),
                (M(Br).generateInTextCitation = Zt),
                (M(eu).generateFullCitation = Lt),
                (M(eu).generateInTextCitation = Zt),
                (M(fu).generateFullCitation = Lt),
                (M(fu).generateInTextCitation = Zt),
                (M(bu).generateFullCitation = Lt),
                (M(bu).generateInTextCitation = Zt),
                (M(Ou).generateFullCitation = Lt),
                (M(Ou).generateInTextCitation = Zt),
                (M(Uu).generateFullCitation = Lt),
                (M(Uu).generateInTextCitation = Zt),
                (M(ns).generateFullCitation = Lt),
                (M(ns).generateInTextCitation = Zt),
                (M(hs).generateFullCitation = Lt),
                (M(hs).generateInTextCitation = Zt),
                (M(Fs).generateFullCitation = Lt),
                (M(Fs).generateInTextCitation = Zt),
                (M(Rs).generateFullCitation = Lt),
                (M(Rs).generateInTextCitation = Zt),
                (M(Gs).generateFullCitation = Lt),
                (M(Gs).generateInTextCitation = Zt),
                (M(eo).generateFullCitation = Lt),
                (M(eo).generateInTextCitation = Zt),
                (M(lo).generateFullCitation = Lt),
                (M(lo).generateInTextCitation = Zt),
                (M(_o).generateFullCitation = Lt),
                (M(_o).generateInTextCitation = Zt),
                (M(So).generateFullCitation = Lt),
                (M(So).generateInTextCitation = Zt),
                cl(t),
                t
              );
            })
              ? i.apply(e, r)
              : i) || (t.exports = u);
    },
    53860: (t, e, n) => {
      n.d(e, { ou: () => ti });
      class i extends Error {}
      class r extends i {
        constructor(t) {
          super(`Invalid DateTime: ${t.toMessage()}`);
        }
      }
      class u extends i {
        constructor(t) {
          super(`Invalid Interval: ${t.toMessage()}`);
        }
      }
      class s extends i {
        constructor(t) {
          super(`Invalid Duration: ${t.toMessage()}`);
        }
      }
      class o extends i {}
      class a extends i {
        constructor(t) {
          super(`Invalid unit ${t}`);
        }
      }
      class c extends i {}
      class l extends i {
        constructor() {
          super("Zone is an abstract class");
        }
      }
      const h = "numeric",
        f = "short",
        d = "long",
        w = { year: h, month: h, day: h },
        m = { year: h, month: f, day: h },
        g = { year: h, month: f, day: h, weekday: f },
        _ = { year: h, month: d, day: h },
        p = { year: h, month: d, day: h, weekday: d },
        y = { hour: h, minute: h },
        v = { hour: h, minute: h, second: h },
        b = { hour: h, minute: h, second: h, timeZoneName: f },
        T = { hour: h, minute: h, second: h, timeZoneName: d },
        x = { hour: h, minute: h, hourCycle: "h23" },
        C = { hour: h, minute: h, second: h, hourCycle: "h23" },
        F = { hour: h, minute: h, second: h, hourCycle: "h23", timeZoneName: f },
        S = { hour: h, minute: h, second: h, hourCycle: "h23", timeZoneName: d },
        k = { year: h, month: h, day: h, hour: h, minute: h },
        N = { year: h, month: h, day: h, hour: h, minute: h, second: h },
        $ = { year: h, month: f, day: h, hour: h, minute: h },
        I = { year: h, month: f, day: h, hour: h, minute: h, second: h },
        q = { year: h, month: f, day: h, weekday: f, hour: h, minute: h },
        D = { year: h, month: d, day: h, hour: h, minute: h, timeZoneName: f },
        M = { year: h, month: d, day: h, hour: h, minute: h, second: h, timeZoneName: f },
        A = { year: h, month: d, day: h, weekday: d, hour: h, minute: h, timeZoneName: d },
        E = { year: h, month: d, day: h, weekday: d, hour: h, minute: h, second: h, timeZoneName: d };
      class R {
        get type() {
          throw new l();
        }
        get name() {
          throw new l();
        }
        get ianaName() {
          return this.name;
        }
        get isUniversal() {
          throw new l();
        }
        offsetName(t, e) {
          throw new l();
        }
        formatOffset(t, e) {
          throw new l();
        }
        offset(t) {
          throw new l();
        }
        equals(t) {
          throw new l();
        }
        get isValid() {
          throw new l();
        }
      }
      let O = null;
      class V extends R {
        static get instance() {
          return null === O && (O = new V()), O;
        }
        get type() {
          return "system";
        }
        get name() {
          return new Intl.DateTimeFormat().resolvedOptions().timeZone;
        }
        get isUniversal() {
          return !1;
        }
        offsetName(t, { format: e, locale: n }) {
          return It(t, e, n);
        }
        formatOffset(t, e) {
          return At(this.offset(t), e);
        }
        offset(t) {
          return -new Date(t).getTimezoneOffset();
        }
        equals(t) {
          return "system" === t.type;
        }
        get isValid() {
          return !0;
        }
      }
      let z = {};
      const P = { year: 0, month: 1, day: 2, era: 3, hour: 4, minute: 5, second: 6 };
      let j = {};
      class L extends R {
        static create(t) {
          return j[t] || (j[t] = new L(t)), j[t];
        }
        static resetCache() {
          (j = {}), (z = {});
        }
        static isValidSpecifier(t) {
          return this.isValidZone(t);
        }
        static isValidZone(t) {
          if (!t) return !1;
          try {
            return new Intl.DateTimeFormat("en-US", { timeZone: t }).format(), !0;
          } catch (t) {
            return !1;
          }
        }
        constructor(t) {
          super(), (this.zoneName = t), (this.valid = L.isValidZone(t));
        }
        get type() {
          return "iana";
        }
        get name() {
          return this.zoneName;
        }
        get isUniversal() {
          return !1;
        }
        offsetName(t, { format: e, locale: n }) {
          return It(t, e, n, this.name);
        }
        formatOffset(t, e) {
          return At(this.offset(t), e);
        }
        offset(t) {
          const e = new Date(t);
          if (isNaN(e)) return NaN;
          const n =
            ((i = this.name),
            z[i] ||
              (z[i] = new Intl.DateTimeFormat("en-US", {
                hour12: !1,
                timeZone: i,
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                era: "short"
              })),
            z[i]);
          var i;
          let [r, u, s, o, a, c, l] = n.formatToParts
            ? (function (t, e) {
                const n = t.formatToParts(e),
                  i = [];
                for (let t = 0; t < n.length; t++) {
                  const { type: e, value: r } = n[t],
                    u = P[e];
                  "era" === e ? (i[u] = r) : ft(u) || (i[u] = parseInt(r, 10));
                }
                return i;
              })(n, e)
            : (function (t, e) {
                const n = t.format(e).replace(/\u200E/g, ""),
                  i = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),
                  [, r, u, s, o, a, c, l] = i;
                return [s, r, u, o, a, c, l];
              })(n, e);
          "BC" === o && (r = 1 - Math.abs(r));
          let h = +e;
          const f = h % 1e3;
          return (
            (h -= f >= 0 ? f : 1e3 + f),
            (kt({ year: r, month: u, day: s, hour: 24 === a ? 0 : a, minute: c, second: l, millisecond: 0 }) - h) / 6e4
          );
        }
        equals(t) {
          return "iana" === t.type && t.name === this.name;
        }
        get isValid() {
          return this.valid;
        }
      }
      let Z = {};
      let Y = {};
      function G(t, e = {}) {
        const n = JSON.stringify([t, e]);
        let i = Y[n];
        return i || ((i = new Intl.DateTimeFormat(t, e)), (Y[n] = i)), i;
      }
      let W = {};
      let U = {};
      let H = null;
      function B(t, e, n, i, r) {
        const u = t.listingMode(n);
        return "error" === u ? null : "en" === u ? i(e) : r(e);
      }
      class J {
        constructor(t, e, n) {
          (this.padTo = n.padTo || 0), (this.floor = n.floor || !1);
          const { padTo: i, floor: r, ...u } = n;
          if (!e || Object.keys(u).length > 0) {
            const e = { useGrouping: !1, ...n };
            n.padTo > 0 && (e.minimumIntegerDigits = n.padTo),
              (this.inf = (function (t, e = {}) {
                const n = JSON.stringify([t, e]);
                let i = W[n];
                return i || ((i = new Intl.NumberFormat(t, e)), (W[n] = i)), i;
              })(t, e));
          }
        }
        format(t) {
          if (this.inf) {
            const e = this.floor ? Math.floor(t) : t;
            return this.inf.format(e);
          }
          return yt(this.floor ? Math.floor(t) : xt(t, 3), this.padTo);
        }
      }
      class Q {
        constructor(t, e, n) {
          let i;
          if (((this.opts = n), t.zone.isUniversal)) {
            const e = (t.offset / 60) * -1,
              r = e >= 0 ? `Etc/GMT+${e}` : `Etc/GMT${e}`;
            0 !== t.offset && L.create(r).valid
              ? ((i = r), (this.dt = t))
              : ((i = "UTC"), n.timeZoneName ? (this.dt = t) : (this.dt = 0 === t.offset ? t : ti.fromMillis(t.ts + 60 * t.offset * 1e3)));
          } else "system" === t.zone.type ? (this.dt = t) : ((this.dt = t), (i = t.zone.name));
          const r = { ...this.opts };
          (r.timeZone = r.timeZone || i), (this.dtf = G(e, r));
        }
        format() {
          return this.dtf.format(this.dt.toJSDate());
        }
        formatToParts() {
          return this.dtf.formatToParts(this.dt.toJSDate());
        }
        resolvedOptions() {
          return this.dtf.resolvedOptions();
        }
      }
      class X {
        constructor(t, e, n) {
          (this.opts = { style: "long", ...n }),
            !e &&
              mt() &&
              (this.rtf = (function (t, e = {}) {
                const { base: n, ...i } = e,
                  r = JSON.stringify([t, i]);
                let u = U[r];
                return u || ((u = new Intl.RelativeTimeFormat(t, e)), (U[r] = u)), u;
              })(t, n));
        }
        format(t, e) {
          return this.rtf
            ? this.rtf.format(t, e)
            : (function (t, e, n = "always", i = !1) {
                const r = {
                    years: ["year", "yr."],
                    quarters: ["quarter", "qtr."],
                    months: ["month", "mo."],
                    weeks: ["week", "wk."],
                    days: ["day", "day", "days"],
                    hours: ["hour", "hr."],
                    minutes: ["minute", "min."],
                    seconds: ["second", "sec."]
                  },
                  u = -1 === ["hours", "minutes", "seconds"].indexOf(t);
                if ("auto" === n && u) {
                  const n = "days" === t;
                  switch (e) {
                    case 1:
                      return n ? "tomorrow" : `next ${r[t][0]}`;
                    case -1:
                      return n ? "yesterday" : `last ${r[t][0]}`;
                    case 0:
                      return n ? "today" : `this ${r[t][0]}`;
                  }
                }
                const s = Object.is(e, -0) || e < 0,
                  o = Math.abs(e),
                  a = 1 === o,
                  c = r[t],
                  l = i ? (a ? c[1] : c[2] || c[1]) : a ? r[t][0] : t;
                return s ? `${o} ${l} ago` : `in ${o} ${l}`;
              })(e, t, this.opts.numeric, "long" !== this.opts.style);
        }
        formatToParts(t, e) {
          return this.rtf ? this.rtf.formatToParts(t, e) : [];
        }
      }
      class K {
        static fromOpts(t) {
          return K.create(t.locale, t.numberingSystem, t.outputCalendar, t.defaultToEN);
        }
        static create(t, e, n, i = !1) {
          const r = t || ht.defaultLocale,
            u = r || (i ? "en-US" : H || ((H = new Intl.DateTimeFormat().resolvedOptions().locale), H)),
            s = e || ht.defaultNumberingSystem,
            o = n || ht.defaultOutputCalendar;
          return new K(u, s, o, r);
        }
        static resetCache() {
          (H = null), (Y = {}), (W = {}), (U = {});
        }
        static fromObject({ locale: t, numberingSystem: e, outputCalendar: n } = {}) {
          return K.create(t, e, n);
        }
        constructor(t, e, n, i) {
          const [r, u, s] = (function (t) {
            const e = t.indexOf("-x-");
            -1 !== e && (t = t.substring(0, e));
            const n = t.indexOf("-u-");
            if (-1 === n) return [t];
            {
              let e, i;
              try {
                (e = G(t).resolvedOptions()), (i = t);
              } catch (r) {
                const u = t.substring(0, n);
                (e = G(u).resolvedOptions()), (i = u);
              }
              const { numberingSystem: r, calendar: u } = e;
              return [i, r, u];
            }
          })(t);
          (this.locale = r),
            (this.numberingSystem = e || u || null),
            (this.outputCalendar = n || s || null),
            (this.intl = (function (t, e, n) {
              return n || e ? (t.includes("-u-") || (t += "-u"), n && (t += `-ca-${n}`), e && (t += `-nu-${e}`), t) : t;
            })(this.locale, this.numberingSystem, this.outputCalendar)),
            (this.weekdaysCache = { format: {}, standalone: {} }),
            (this.monthsCache = { format: {}, standalone: {} }),
            (this.meridiemCache = null),
            (this.eraCache = {}),
            (this.specifiedLocale = i),
            (this.fastNumbersCached = null);
        }
        get fastNumbers() {
          var t;
          return (
            null == this.fastNumbersCached &&
              (this.fastNumbersCached =
                (!(t = this).numberingSystem || "latn" === t.numberingSystem) &&
                ("latn" === t.numberingSystem ||
                  !t.locale ||
                  t.locale.startsWith("en") ||
                  "latn" === new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem)),
            this.fastNumbersCached
          );
        }
        listingMode() {
          const t = this.isEnglish(),
            e = !(
              (null !== this.numberingSystem && "latn" !== this.numberingSystem) ||
              (null !== this.outputCalendar && "gregory" !== this.outputCalendar)
            );
          return t && e ? "en" : "intl";
        }
        clone(t) {
          return t && 0 !== Object.getOwnPropertyNames(t).length
            ? K.create(
                t.locale || this.specifiedLocale,
                t.numberingSystem || this.numberingSystem,
                t.outputCalendar || this.outputCalendar,
                t.defaultToEN || !1
              )
            : this;
        }
        redefaultToEN(t = {}) {
          return this.clone({ ...t, defaultToEN: !0 });
        }
        redefaultToSystem(t = {}) {
          return this.clone({ ...t, defaultToEN: !1 });
        }
        months(t, e = !1, n = !0) {
          return B(this, t, n, zt, () => {
            const n = e ? { month: t, day: "numeric" } : { month: t },
              i = e ? "format" : "standalone";
            return (
              this.monthsCache[i][t] ||
                (this.monthsCache[i][t] = (function (t) {
                  const e = [];
                  for (let n = 1; n <= 12; n++) {
                    const i = ti.utc(2016, n, 1);
                    e.push(t(i));
                  }
                  return e;
                })((t) => this.extract(t, n, "month"))),
              this.monthsCache[i][t]
            );
          });
        }
        weekdays(t, e = !1, n = !0) {
          return B(this, t, n, Zt, () => {
            const n = e ? { weekday: t, year: "numeric", month: "long", day: "numeric" } : { weekday: t },
              i = e ? "format" : "standalone";
            return (
              this.weekdaysCache[i][t] ||
                (this.weekdaysCache[i][t] = (function (t) {
                  const e = [];
                  for (let n = 1; n <= 7; n++) {
                    const i = ti.utc(2016, 11, 13 + n);
                    e.push(t(i));
                  }
                  return e;
                })((t) => this.extract(t, n, "weekday"))),
              this.weekdaysCache[i][t]
            );
          });
        }
        meridiems(t = !0) {
          return B(
            this,
            void 0,
            t,
            () => Yt,
            () => {
              if (!this.meridiemCache) {
                const t = { hour: "numeric", hourCycle: "h12" };
                this.meridiemCache = [ti.utc(2016, 11, 13, 9), ti.utc(2016, 11, 13, 19)].map((e) => this.extract(e, t, "dayperiod"));
              }
              return this.meridiemCache;
            }
          );
        }
        eras(t, e = !0) {
          return B(this, t, e, Ht, () => {
            const e = { era: t };
            return (
              this.eraCache[t] || (this.eraCache[t] = [ti.utc(-40, 1, 1), ti.utc(2017, 1, 1)].map((t) => this.extract(t, e, "era"))),
              this.eraCache[t]
            );
          });
        }
        extract(t, e, n) {
          const i = this.dtFormatter(t, e)
            .formatToParts()
            .find((t) => t.type.toLowerCase() === n);
          return i ? i.value : null;
        }
        numberFormatter(t = {}) {
          return new J(this.intl, t.forceSimple || this.fastNumbers, t);
        }
        dtFormatter(t, e = {}) {
          return new Q(t, this.intl, e);
        }
        relFormatter(t = {}) {
          return new X(this.intl, this.isEnglish(), t);
        }
        listFormatter(t = {}) {
          return (function (t, e = {}) {
            const n = JSON.stringify([t, e]);
            let i = Z[n];
            return i || ((i = new Intl.ListFormat(t, e)), (Z[n] = i)), i;
          })(this.intl, t);
        }
        isEnglish() {
          return (
            "en" === this.locale ||
            "en-us" === this.locale.toLowerCase() ||
            new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")
          );
        }
        equals(t) {
          return this.locale === t.locale && this.numberingSystem === t.numberingSystem && this.outputCalendar === t.outputCalendar;
        }
      }
      let tt = null;
      class et extends R {
        static get utcInstance() {
          return null === tt && (tt = new et(0)), tt;
        }
        static instance(t) {
          return 0 === t ? et.utcInstance : new et(t);
        }
        static parseSpecifier(t) {
          if (t) {
            const e = t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
            if (e) return new et(qt(e[1], e[2]));
          }
          return null;
        }
        constructor(t) {
          super(), (this.fixed = t);
        }
        get type() {
          return "fixed";
        }
        get name() {
          return 0 === this.fixed ? "UTC" : `UTC${At(this.fixed, "narrow")}`;
        }
        get ianaName() {
          return 0 === this.fixed ? "Etc/UTC" : `Etc/GMT${At(-this.fixed, "narrow")}`;
        }
        offsetName() {
          return this.name;
        }
        formatOffset(t, e) {
          return At(this.fixed, e);
        }
        get isUniversal() {
          return !0;
        }
        offset() {
          return this.fixed;
        }
        equals(t) {
          return "fixed" === t.type && t.fixed === this.fixed;
        }
        get isValid() {
          return !0;
        }
      }
      class nt extends R {
        constructor(t) {
          super(), (this.zoneName = t);
        }
        get type() {
          return "invalid";
        }
        get name() {
          return this.zoneName;
        }
        get isUniversal() {
          return !1;
        }
        offsetName() {
          return null;
        }
        formatOffset() {
          return "";
        }
        offset() {
          return NaN;
        }
        equals() {
          return !1;
        }
        get isValid() {
          return !1;
        }
      }
      function it(t, e) {
        if (ft(t) || null === t) return e;
        if (t instanceof R) return t;
        if ("string" == typeof t) {
          const n = t.toLowerCase();
          return "default" === n
            ? e
            : "local" === n || "system" === n
            ? V.instance
            : "utc" === n || "gmt" === n
            ? et.utcInstance
            : et.parseSpecifier(n) || L.create(t);
        }
        return dt(t) ? et.instance(t) : "object" == typeof t && t.offset && "number" == typeof t.offset ? t : new nt(t);
      }
      let rt,
        ut = () => Date.now(),
        st = "system",
        ot = null,
        at = null,
        ct = null,
        lt = 60;
      class ht {
        static get now() {
          return ut;
        }
        static set now(t) {
          ut = t;
        }
        static set defaultZone(t) {
          st = t;
        }
        static get defaultZone() {
          return it(st, V.instance);
        }
        static get defaultLocale() {
          return ot;
        }
        static set defaultLocale(t) {
          ot = t;
        }
        static get defaultNumberingSystem() {
          return at;
        }
        static set defaultNumberingSystem(t) {
          at = t;
        }
        static get defaultOutputCalendar() {
          return ct;
        }
        static set defaultOutputCalendar(t) {
          ct = t;
        }
        static get twoDigitCutoffYear() {
          return lt;
        }
        static set twoDigitCutoffYear(t) {
          lt = t % 100;
        }
        static get throwOnInvalid() {
          return rt;
        }
        static set throwOnInvalid(t) {
          rt = t;
        }
        static resetCaches() {
          K.resetCache(), L.resetCache();
        }
      }
      function ft(t) {
        return void 0 === t;
      }
      function dt(t) {
        return "number" == typeof t;
      }
      function wt(t) {
        return "number" == typeof t && t % 1 == 0;
      }
      function mt() {
        try {
          return "undefined" != typeof Intl && !!Intl.RelativeTimeFormat;
        } catch (t) {
          return !1;
        }
      }
      function gt(t, e, n) {
        if (0 !== t.length)
          return t.reduce((t, i) => {
            const r = [e(i), i];
            return t && n(t[0], r[0]) === t[0] ? t : r;
          }, null)[1];
      }
      function _t(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      function pt(t, e, n) {
        return wt(t) && t >= e && t <= n;
      }
      function yt(t, e = 2) {
        let n;
        return (n = t < 0 ? "-" + ("" + -t).padStart(e, "0") : ("" + t).padStart(e, "0")), n;
      }
      function vt(t) {
        return ft(t) || null === t || "" === t ? void 0 : parseInt(t, 10);
      }
      function bt(t) {
        return ft(t) || null === t || "" === t ? void 0 : parseFloat(t);
      }
      function Tt(t) {
        if (!ft(t) && null !== t && "" !== t) {
          const e = 1e3 * parseFloat("0." + t);
          return Math.floor(e);
        }
      }
      function xt(t, e, n = !1) {
        const i = 10 ** e;
        return (n ? Math.trunc : Math.round)(t * i) / i;
      }
      function Ct(t) {
        return t % 4 == 0 && (t % 100 != 0 || t % 400 == 0);
      }
      function Ft(t) {
        return Ct(t) ? 366 : 365;
      }
      function St(t, e) {
        const n =
          (function (t, e) {
            return t - e * Math.floor(t / e);
          })(e - 1, 12) + 1;
        return 2 === n ? (Ct(t + (e - n) / 12) ? 29 : 28) : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
      }
      function kt(t) {
        let e = Date.UTC(t.year, t.month - 1, t.day, t.hour, t.minute, t.second, t.millisecond);
        return t.year < 100 && t.year >= 0 && ((e = new Date(e)), e.setUTCFullYear(e.getUTCFullYear() - 1900)), +e;
      }
      function Nt(t) {
        const e = (t + Math.floor(t / 4) - Math.floor(t / 100) + Math.floor(t / 400)) % 7,
          n = t - 1,
          i = (n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400)) % 7;
        return 4 === e || 3 === i ? 53 : 52;
      }
      function $t(t) {
        return t > 99 ? t : t > ht.twoDigitCutoffYear ? 1900 + t : 2e3 + t;
      }
      function It(t, e, n, i = null) {
        const r = new Date(t),
          u = { hourCycle: "h23", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" };
        i && (u.timeZone = i);
        const s = { timeZoneName: e, ...u },
          o = new Intl.DateTimeFormat(n, s).formatToParts(r).find((t) => "timezonename" === t.type.toLowerCase());
        return o ? o.value : null;
      }
      function qt(t, e) {
        let n = parseInt(t, 10);
        Number.isNaN(n) && (n = 0);
        const i = parseInt(e, 10) || 0;
        return 60 * n + (n < 0 || Object.is(n, -0) ? -i : i);
      }
      function Dt(t) {
        const e = Number(t);
        if ("boolean" == typeof t || "" === t || Number.isNaN(e)) throw new c(`Invalid unit value ${t}`);
        return e;
      }
      function Mt(t, e) {
        const n = {};
        for (const i in t)
          if (_t(t, i)) {
            const r = t[i];
            if (null == r) continue;
            n[e(i)] = Dt(r);
          }
        return n;
      }
      function At(t, e) {
        const n = Math.trunc(Math.abs(t / 60)),
          i = Math.trunc(Math.abs(t % 60)),
          r = t >= 0 ? "+" : "-";
        switch (e) {
          case "short":
            return `${r}${yt(n, 2)}:${yt(i, 2)}`;
          case "narrow":
            return `${r}${n}${i > 0 ? `:${i}` : ""}`;
          case "techie":
            return `${r}${yt(n, 2)}${yt(i, 2)}`;
          default:
            throw new RangeError(`Value format ${e} is out of range for property format`);
        }
      }
      function Et(t) {
        return (function (t, e) {
          return e.reduce((e, n) => ((e[n] = t[n]), e), {});
        })(t, ["hour", "minute", "second", "millisecond"]);
      }
      const Rt = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        Ot = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        Vt = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
      function zt(t) {
        switch (t) {
          case "narrow":
            return [...Vt];
          case "short":
            return [...Ot];
          case "long":
            return [...Rt];
          case "numeric":
            return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
          case "2-digit":
            return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
          default:
            return null;
        }
      }
      const Pt = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        jt = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        Lt = ["M", "T", "W", "T", "F", "S", "S"];
      function Zt(t) {
        switch (t) {
          case "narrow":
            return [...Lt];
          case "short":
            return [...jt];
          case "long":
            return [...Pt];
          case "numeric":
            return ["1", "2", "3", "4", "5", "6", "7"];
          default:
            return null;
        }
      }
      const Yt = ["AM", "PM"],
        Gt = ["Before Christ", "Anno Domini"],
        Wt = ["BC", "AD"],
        Ut = ["B", "A"];
      function Ht(t) {
        switch (t) {
          case "narrow":
            return [...Ut];
          case "short":
            return [...Wt];
          case "long":
            return [...Gt];
          default:
            return null;
        }
      }
      function Bt(t, e) {
        let n = "";
        for (const i of t) i.literal ? (n += i.val) : (n += e(i.val));
        return n;
      }
      const Jt = {
        D: w,
        DD: m,
        DDD: _,
        DDDD: p,
        t: y,
        tt: v,
        ttt: b,
        tttt: T,
        T: x,
        TT: C,
        TTT: F,
        TTTT: S,
        f: k,
        ff: $,
        fff: D,
        ffff: A,
        F: N,
        FF: I,
        FFF: M,
        FFFF: E
      };
      class Qt {
        static create(t, e = {}) {
          return new Qt(t, e);
        }
        static parseFormat(t) {
          let e = null,
            n = "",
            i = !1;
          const r = [];
          for (let u = 0; u < t.length; u++) {
            const s = t.charAt(u);
            "'" === s
              ? (n.length > 0 && r.push({ literal: i, val: n }), (e = null), (n = ""), (i = !i))
              : i || s === e
              ? (n += s)
              : (n.length > 0 && r.push({ literal: !1, val: n }), (n = s), (e = s));
          }
          return n.length > 0 && r.push({ literal: i, val: n }), r;
        }
        static macroTokenToFormatOpts(t) {
          return Jt[t];
        }
        constructor(t, e) {
          (this.opts = e), (this.loc = t), (this.systemLoc = null);
        }
        formatWithSystemDefault(t, e) {
          null === this.systemLoc && (this.systemLoc = this.loc.redefaultToSystem());
          return this.systemLoc.dtFormatter(t, { ...this.opts, ...e }).format();
        }
        formatDateTime(t, e = {}) {
          return this.loc.dtFormatter(t, { ...this.opts, ...e }).format();
        }
        formatDateTimeParts(t, e = {}) {
          return this.loc.dtFormatter(t, { ...this.opts, ...e }).formatToParts();
        }
        formatInterval(t, e = {}) {
          return this.loc.dtFormatter(t.start, { ...this.opts, ...e }).dtf.formatRange(t.start.toJSDate(), t.end.toJSDate());
        }
        resolvedOptions(t, e = {}) {
          return this.loc.dtFormatter(t, { ...this.opts, ...e }).resolvedOptions();
        }
        num(t, e = 0) {
          if (this.opts.forceSimple) return yt(t, e);
          const n = { ...this.opts };
          return e > 0 && (n.padTo = e), this.loc.numberFormatter(n).format(t);
        }
        formatDateTimeFromString(t, e) {
          const n = "en" === this.loc.listingMode(),
            i = this.loc.outputCalendar && "gregory" !== this.loc.outputCalendar,
            r = (e, n) => this.loc.extract(t, e, n),
            u = (e) => (t.isOffsetFixed && 0 === t.offset && e.allowZ ? "Z" : t.isValid ? t.zone.formatOffset(t.ts, e.format) : ""),
            s = () =>
              n
                ? (function (t) {
                    return Yt[t.hour < 12 ? 0 : 1];
                  })(t)
                : r({ hour: "numeric", hourCycle: "h12" }, "dayperiod"),
            o = (e, i) =>
              n
                ? (function (t, e) {
                    return zt(e)[t.month - 1];
                  })(t, e)
                : r(i ? { month: e } : { month: e, day: "numeric" }, "month"),
            a = (e, i) =>
              n
                ? (function (t, e) {
                    return Zt(e)[t.weekday - 1];
                  })(t, e)
                : r(i ? { weekday: e } : { weekday: e, month: "long", day: "numeric" }, "weekday"),
            c = (e) => {
              const n = Qt.macroTokenToFormatOpts(e);
              return n ? this.formatWithSystemDefault(t, n) : e;
            },
            l = (e) =>
              n
                ? (function (t, e) {
                    return Ht(e)[t.year < 0 ? 0 : 1];
                  })(t, e)
                : r({ era: e }, "era");
          return Bt(Qt.parseFormat(e), (e) => {
            switch (e) {
              case "S":
                return this.num(t.millisecond);
              case "u":
              case "SSS":
                return this.num(t.millisecond, 3);
              case "s":
                return this.num(t.second);
              case "ss":
                return this.num(t.second, 2);
              case "uu":
                return this.num(Math.floor(t.millisecond / 10), 2);
              case "uuu":
                return this.num(Math.floor(t.millisecond / 100));
              case "m":
                return this.num(t.minute);
              case "mm":
                return this.num(t.minute, 2);
              case "h":
                return this.num(t.hour % 12 == 0 ? 12 : t.hour % 12);
              case "hh":
                return this.num(t.hour % 12 == 0 ? 12 : t.hour % 12, 2);
              case "H":
                return this.num(t.hour);
              case "HH":
                return this.num(t.hour, 2);
              case "Z":
                return u({ format: "narrow", allowZ: this.opts.allowZ });
              case "ZZ":
                return u({ format: "short", allowZ: this.opts.allowZ });
              case "ZZZ":
                return u({ format: "techie", allowZ: this.opts.allowZ });
              case "ZZZZ":
                return t.zone.offsetName(t.ts, { format: "short", locale: this.loc.locale });
              case "ZZZZZ":
                return t.zone.offsetName(t.ts, { format: "long", locale: this.loc.locale });
              case "z":
                return t.zoneName;
              case "a":
                return s();
              case "d":
                return i ? r({ day: "numeric" }, "day") : this.num(t.day);
              case "dd":
                return i ? r({ day: "2-digit" }, "day") : this.num(t.day, 2);
              case "c":
              case "E":
                return this.num(t.weekday);
              case "ccc":
                return a("short", !0);
              case "cccc":
                return a("long", !0);
              case "ccccc":
                return a("narrow", !0);
              case "EEE":
                return a("short", !1);
              case "EEEE":
                return a("long", !1);
              case "EEEEE":
                return a("narrow", !1);
              case "L":
                return i ? r({ month: "numeric", day: "numeric" }, "month") : this.num(t.month);
              case "LL":
                return i ? r({ month: "2-digit", day: "numeric" }, "month") : this.num(t.month, 2);
              case "LLL":
                return o("short", !0);
              case "LLLL":
                return o("long", !0);
              case "LLLLL":
                return o("narrow", !0);
              case "M":
                return i ? r({ month: "numeric" }, "month") : this.num(t.month);
              case "MM":
                return i ? r({ month: "2-digit" }, "month") : this.num(t.month, 2);
              case "MMM":
                return o("short", !1);
              case "MMMM":
                return o("long", !1);
              case "MMMMM":
                return o("narrow", !1);
              case "y":
                return i ? r({ year: "numeric" }, "year") : this.num(t.year);
              case "yy":
                return i ? r({ year: "2-digit" }, "year") : this.num(t.year.toString().slice(-2), 2);
              case "yyyy":
                return i ? r({ year: "numeric" }, "year") : this.num(t.year, 4);
              case "yyyyyy":
                return i ? r({ year: "numeric" }, "year") : this.num(t.year, 6);
              case "G":
                return l("short");
              case "GG":
                return l("long");
              case "GGGGG":
                return l("narrow");
              case "kk":
                return this.num(t.weekYear.toString().slice(-2), 2);
              case "kkkk":
                return this.num(t.weekYear, 4);
              case "W":
                return this.num(t.weekNumber);
              case "WW":
                return this.num(t.weekNumber, 2);
              case "o":
                return this.num(t.ordinal);
              case "ooo":
                return this.num(t.ordinal, 3);
              case "q":
                return this.num(t.quarter);
              case "qq":
                return this.num(t.quarter, 2);
              case "X":
                return this.num(Math.floor(t.ts / 1e3));
              case "x":
                return this.num(t.ts);
              default:
                return c(e);
            }
          });
        }
        formatDurationFromString(t, e) {
          const n = (t) => {
              switch (t[0]) {
                case "S":
                  return "millisecond";
                case "s":
                  return "second";
                case "m":
                  return "minute";
                case "h":
                  return "hour";
                case "d":
                  return "day";
                case "w":
                  return "week";
                case "M":
                  return "month";
                case "y":
                  return "year";
                default:
                  return null;
              }
            },
            i = Qt.parseFormat(e),
            r = i.reduce((t, { literal: e, val: n }) => (e ? t : t.concat(n)), []);
          return Bt(
            i,
            ((t) => (e) => {
              const i = n(e);
              return i ? this.num(t.get(i), e.length) : e;
            })(t.shiftTo(...r.map(n).filter((t) => t)))
          );
        }
      }
      class Xt {
        constructor(t, e) {
          (this.reason = t), (this.explanation = e);
        }
        toMessage() {
          return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
        }
      }
      const Kt = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
      function te(...t) {
        const e = t.reduce((t, e) => t + e.source, "");
        return RegExp(`^${e}$`);
      }
      function ee(...t) {
        return (e) =>
          t
            .reduce(
              ([t, n, i], r) => {
                const [u, s, o] = r(e, i);
                return [{ ...t, ...u }, s || n, o];
              },
              [{}, null, 1]
            )
            .slice(0, 2);
      }
      function ne(t, ...e) {
        if (null == t) return [null, null];
        for (const [n, i] of e) {
          const e = n.exec(t);
          if (e) return i(e);
        }
        return [null, null];
      }
      function ie(...t) {
        return (e, n) => {
          const i = {};
          let r;
          for (r = 0; r < t.length; r++) i[t[r]] = vt(e[n + r]);
          return [i, null, n + r];
        };
      }
      const re = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
        ue = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
        se = RegExp(`${ue.source}${`(?:${re.source}?(?:\\[(${Kt.source})\\])?)?`}`),
        oe = RegExp(`(?:T${se.source})?`),
        ae = ie("weekYear", "weekNumber", "weekDay"),
        ce = ie("year", "ordinal"),
        le = RegExp(`${ue.source} ?(?:${re.source}|(${Kt.source}))?`),
        he = RegExp(`(?: ${le.source})?`);
      function fe(t, e, n) {
        const i = t[e];
        return ft(i) ? n : vt(i);
      }
      function de(t, e) {
        return [{ hours: fe(t, e, 0), minutes: fe(t, e + 1, 0), seconds: fe(t, e + 2, 0), milliseconds: Tt(t[e + 3]) }, null, e + 4];
      }
      function we(t, e) {
        const n = !t[e] && !t[e + 1],
          i = qt(t[e + 1], t[e + 2]);
        return [{}, n ? null : et.instance(i), e + 3];
      }
      function me(t, e) {
        return [{}, t[e] ? L.create(t[e]) : null, e + 1];
      }
      const ge = RegExp(`^T?${ue.source}$`),
        _e =
          /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
      function pe(t) {
        const [e, n, i, r, u, s, o, a, c] = t,
          l = "-" === e[0],
          h = a && "-" === a[0],
          f = (t, e = !1) => (void 0 !== t && (e || (t && l)) ? -t : t);
        return [
          {
            years: f(bt(n)),
            months: f(bt(i)),
            weeks: f(bt(r)),
            days: f(bt(u)),
            hours: f(bt(s)),
            minutes: f(bt(o)),
            seconds: f(bt(a), "-0" === a),
            milliseconds: f(Tt(c), h)
          }
        ];
      }
      const ye = { GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };
      function ve(t, e, n, i, r, u, s) {
        const o = { year: 2 === e.length ? $t(vt(e)) : vt(e), month: Ot.indexOf(n) + 1, day: vt(i), hour: vt(r), minute: vt(u) };
        return s && (o.second = vt(s)), t && (o.weekday = t.length > 3 ? Pt.indexOf(t) + 1 : jt.indexOf(t) + 1), o;
      }
      const be =
        /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
      function Te(t) {
        const [, e, n, i, r, u, s, o, a, c, l, h] = t,
          f = ve(e, r, i, n, u, s, o);
        let d;
        return (d = a ? ye[a] : c ? 0 : qt(l, h)), [f, new et(d)];
      }
      const xe =
          /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
        Ce =
          /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
        Fe = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
      function Se(t) {
        const [, e, n, i, r, u, s, o] = t;
        return [ve(e, r, i, n, u, s, o), et.utcInstance];
      }
      function ke(t) {
        const [, e, n, i, r, u, s, o] = t;
        return [ve(e, o, n, i, r, u, s), et.utcInstance];
      }
      const Ne = te(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, oe),
        $e = te(/(\d{4})-?W(\d\d)(?:-?(\d))?/, oe),
        Ie = te(/(\d{4})-?(\d{3})/, oe),
        qe = te(se),
        De = ee(
          function (t, e) {
            return [{ year: fe(t, e), month: fe(t, e + 1, 1), day: fe(t, e + 2, 1) }, null, e + 3];
          },
          de,
          we,
          me
        ),
        Me = ee(ae, de, we, me),
        Ae = ee(ce, de, we, me),
        Ee = ee(de, we, me);
      const Re = ee(de);
      const Oe = te(/(\d{4})-(\d\d)-(\d\d)/, he),
        Ve = te(le),
        ze = ee(de, we, me);
      const Pe = {
          weeks: { days: 7, hours: 168, minutes: 10080, seconds: 604800, milliseconds: 6048e5 },
          days: { hours: 24, minutes: 1440, seconds: 86400, milliseconds: 864e5 },
          hours: { minutes: 60, seconds: 3600, milliseconds: 36e5 },
          minutes: { seconds: 60, milliseconds: 6e4 },
          seconds: { milliseconds: 1e3 }
        },
        je = {
          years: { quarters: 4, months: 12, weeks: 52, days: 365, hours: 8760, minutes: 525600, seconds: 31536e3, milliseconds: 31536e6 },
          quarters: { months: 3, weeks: 13, days: 91, hours: 2184, minutes: 131040, seconds: 7862400, milliseconds: 78624e5 },
          months: { weeks: 4, days: 30, hours: 720, minutes: 43200, seconds: 2592e3, milliseconds: 2592e6 },
          ...Pe
        },
        Le = 365.2425,
        Ze = 30.436875,
        Ye = {
          years: {
            quarters: 4,
            months: 12,
            weeks: 52.1775,
            days: Le,
            hours: 8765.82,
            minutes: 525949.2,
            seconds: 525949.2 * 60,
            milliseconds: 525949.2 * 60 * 1e3
          },
          quarters: {
            months: 3,
            weeks: 13.044375,
            days: 91.310625,
            hours: 2191.455,
            minutes: 131487.3,
            seconds: (525949.2 * 60) / 4,
            milliseconds: 7889237999.999999
          },
          months: { weeks: 4.3481250000000005, days: Ze, hours: 730.485, minutes: 43829.1, seconds: 2629746, milliseconds: 2629746e3 },
          ...Pe
        },
        Ge = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"],
        We = Ge.slice(0).reverse();
      function Ue(t, e, n = !1) {
        const i = {
          values: n ? e.values : { ...t.values, ...(e.values || {}) },
          loc: t.loc.clone(e.loc),
          conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
          matrix: e.matrix || t.matrix
        };
        return new Be(i);
      }
      function He(t, e, n, i, r) {
        const u = t[r][n],
          s = e[n] / u,
          o =
            !(Math.sign(s) === Math.sign(i[r])) && 0 !== i[r] && Math.abs(s) <= 1
              ? (function (t) {
                  return t < 0 ? Math.floor(t) : Math.ceil(t);
                })(s)
              : Math.trunc(s);
        (i[r] += o), (e[n] -= o * u);
      }
      class Be {
        constructor(t) {
          const e = "longterm" === t.conversionAccuracy || !1;
          let n = e ? Ye : je;
          t.matrix && (n = t.matrix),
            (this.values = t.values),
            (this.loc = t.loc || K.create()),
            (this.conversionAccuracy = e ? "longterm" : "casual"),
            (this.invalid = t.invalid || null),
            (this.matrix = n),
            (this.isLuxonDuration = !0);
        }
        static fromMillis(t, e) {
          return Be.fromObject({ milliseconds: t }, e);
        }
        static fromObject(t, e = {}) {
          if (null == t || "object" != typeof t)
            throw new c("Duration.fromObject: argument expected to be an object, got " + (null === t ? "null" : typeof t));
          return new Be({
            values: Mt(t, Be.normalizeUnit),
            loc: K.fromObject(e),
            conversionAccuracy: e.conversionAccuracy,
            matrix: e.matrix
          });
        }
        static fromDurationLike(t) {
          if (dt(t)) return Be.fromMillis(t);
          if (Be.isDuration(t)) return t;
          if ("object" == typeof t) return Be.fromObject(t);
          throw new c(`Unknown duration argument ${t} of type ${typeof t}`);
        }
        static fromISO(t, e) {
          const [n] = (function (t) {
            return ne(t, [_e, pe]);
          })(t);
          return n ? Be.fromObject(n, e) : Be.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
        }
        static fromISOTime(t, e) {
          const [n] = (function (t) {
            return ne(t, [ge, Re]);
          })(t);
          return n ? Be.fromObject(n, e) : Be.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
        }
        static invalid(t, e = null) {
          if (!t) throw new c("need to specify a reason the Duration is invalid");
          const n = t instanceof Xt ? t : new Xt(t, e);
          if (ht.throwOnInvalid) throw new s(n);
          return new Be({ invalid: n });
        }
        static normalizeUnit(t) {
          const e = {
            year: "years",
            years: "years",
            quarter: "quarters",
            quarters: "quarters",
            month: "months",
            months: "months",
            week: "weeks",
            weeks: "weeks",
            day: "days",
            days: "days",
            hour: "hours",
            hours: "hours",
            minute: "minutes",
            minutes: "minutes",
            second: "seconds",
            seconds: "seconds",
            millisecond: "milliseconds",
            milliseconds: "milliseconds"
          }[t ? t.toLowerCase() : t];
          if (!e) throw new a(t);
          return e;
        }
        static isDuration(t) {
          return (t && t.isLuxonDuration) || !1;
        }
        get locale() {
          return this.isValid ? this.loc.locale : null;
        }
        get numberingSystem() {
          return this.isValid ? this.loc.numberingSystem : null;
        }
        toFormat(t, e = {}) {
          const n = { ...e, floor: !1 !== e.round && !1 !== e.floor };
          return this.isValid ? Qt.create(this.loc, n).formatDurationFromString(this, t) : "Invalid Duration";
        }
        toHuman(t = {}) {
          const e = Ge.map((e) => {
            const n = this.values[e];
            return ft(n) ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...t, unit: e.slice(0, -1) }).format(n);
          }).filter((t) => t);
          return this.loc.listFormatter({ type: "conjunction", style: t.listStyle || "narrow", ...t }).format(e);
        }
        toObject() {
          return this.isValid ? { ...this.values } : {};
        }
        toISO() {
          if (!this.isValid) return null;
          let t = "P";
          return (
            0 !== this.years && (t += this.years + "Y"),
            (0 === this.months && 0 === this.quarters) || (t += this.months + 3 * this.quarters + "M"),
            0 !== this.weeks && (t += this.weeks + "W"),
            0 !== this.days && (t += this.days + "D"),
            (0 === this.hours && 0 === this.minutes && 0 === this.seconds && 0 === this.milliseconds) || (t += "T"),
            0 !== this.hours && (t += this.hours + "H"),
            0 !== this.minutes && (t += this.minutes + "M"),
            (0 === this.seconds && 0 === this.milliseconds) || (t += xt(this.seconds + this.milliseconds / 1e3, 3) + "S"),
            "P" === t && (t += "T0S"),
            t
          );
        }
        toISOTime(t = {}) {
          if (!this.isValid) return null;
          const e = this.toMillis();
          if (e < 0 || e >= 864e5) return null;
          t = { suppressMilliseconds: !1, suppressSeconds: !1, includePrefix: !1, format: "extended", ...t };
          const n = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
          let i = "basic" === t.format ? "hhmm" : "hh:mm";
          (t.suppressSeconds && 0 === n.seconds && 0 === n.milliseconds) ||
            ((i += "basic" === t.format ? "ss" : ":ss"), (t.suppressMilliseconds && 0 === n.milliseconds) || (i += ".SSS"));
          let r = n.toFormat(i);
          return t.includePrefix && (r = "T" + r), r;
        }
        toJSON() {
          return this.toISO();
        }
        toString() {
          return this.toISO();
        }
        toMillis() {
          return this.as("milliseconds");
        }
        valueOf() {
          return this.toMillis();
        }
        plus(t) {
          if (!this.isValid) return this;
          const e = Be.fromDurationLike(t),
            n = {};
          for (const t of Ge) (_t(e.values, t) || _t(this.values, t)) && (n[t] = e.get(t) + this.get(t));
          return Ue(this, { values: n }, !0);
        }
        minus(t) {
          if (!this.isValid) return this;
          const e = Be.fromDurationLike(t);
          return this.plus(e.negate());
        }
        mapUnits(t) {
          if (!this.isValid) return this;
          const e = {};
          for (const n of Object.keys(this.values)) e[n] = Dt(t(this.values[n], n));
          return Ue(this, { values: e }, !0);
        }
        get(t) {
          return this[Be.normalizeUnit(t)];
        }
        set(t) {
          if (!this.isValid) return this;
          return Ue(this, { values: { ...this.values, ...Mt(t, Be.normalizeUnit) } });
        }
        reconfigure({ locale: t, numberingSystem: e, conversionAccuracy: n, matrix: i } = {}) {
          return Ue(this, { loc: this.loc.clone({ locale: t, numberingSystem: e }), matrix: i, conversionAccuracy: n });
        }
        as(t) {
          return this.isValid ? this.shiftTo(t).get(t) : NaN;
        }
        normalize() {
          if (!this.isValid) return this;
          const t = this.toObject();
          return (
            (function (t, e) {
              We.reduce((n, i) => (ft(e[i]) ? n : (n && He(t, e, n, e, i), i)), null);
            })(this.matrix, t),
            Ue(this, { values: t }, !0)
          );
        }
        rescale() {
          if (!this.isValid) return this;
          return Ue(
            this,
            {
              values: (function (t) {
                const e = {};
                for (const [n, i] of Object.entries(t)) 0 !== i && (e[n] = i);
                return e;
              })(this.normalize().shiftToAll().toObject())
            },
            !0
          );
        }
        shiftTo(...t) {
          if (!this.isValid) return this;
          if (0 === t.length) return this;
          t = t.map((t) => Be.normalizeUnit(t));
          const e = {},
            n = {},
            i = this.toObject();
          let r;
          for (const u of Ge)
            if (t.indexOf(u) >= 0) {
              r = u;
              let t = 0;
              for (const e in n) (t += this.matrix[e][u] * n[e]), (n[e] = 0);
              dt(i[u]) && (t += i[u]);
              const s = Math.trunc(t);
              (e[u] = s), (n[u] = (1e3 * t - 1e3 * s) / 1e3);
              for (const t in i) Ge.indexOf(t) > Ge.indexOf(u) && He(this.matrix, i, t, e, u);
            } else dt(i[u]) && (n[u] = i[u]);
          for (const t in n) 0 !== n[t] && (e[r] += t === r ? n[t] : n[t] / this.matrix[r][t]);
          return Ue(this, { values: e }, !0).normalize();
        }
        shiftToAll() {
          return this.isValid ? this.shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds") : this;
        }
        negate() {
          if (!this.isValid) return this;
          const t = {};
          for (const e of Object.keys(this.values)) t[e] = 0 === this.values[e] ? 0 : -this.values[e];
          return Ue(this, { values: t }, !0);
        }
        get years() {
          return this.isValid ? this.values.years || 0 : NaN;
        }
        get quarters() {
          return this.isValid ? this.values.quarters || 0 : NaN;
        }
        get months() {
          return this.isValid ? this.values.months || 0 : NaN;
        }
        get weeks() {
          return this.isValid ? this.values.weeks || 0 : NaN;
        }
        get days() {
          return this.isValid ? this.values.days || 0 : NaN;
        }
        get hours() {
          return this.isValid ? this.values.hours || 0 : NaN;
        }
        get minutes() {
          return this.isValid ? this.values.minutes || 0 : NaN;
        }
        get seconds() {
          return this.isValid ? this.values.seconds || 0 : NaN;
        }
        get milliseconds() {
          return this.isValid ? this.values.milliseconds || 0 : NaN;
        }
        get isValid() {
          return null === this.invalid;
        }
        get invalidReason() {
          return this.invalid ? this.invalid.reason : null;
        }
        get invalidExplanation() {
          return this.invalid ? this.invalid.explanation : null;
        }
        equals(t) {
          if (!this.isValid || !t.isValid) return !1;
          if (!this.loc.equals(t.loc)) return !1;
          for (const i of Ge)
            if (((e = this.values[i]), (n = t.values[i]), !(void 0 === e || 0 === e ? void 0 === n || 0 === n : e === n))) return !1;
          var e, n;
          return !0;
        }
      }
      const Je = "Invalid Interval";
      class Qe {
        constructor(t) {
          (this.s = t.start), (this.e = t.end), (this.invalid = t.invalid || null), (this.isLuxonInterval = !0);
        }
        static invalid(t, e = null) {
          if (!t) throw new c("need to specify a reason the Interval is invalid");
          const n = t instanceof Xt ? t : new Xt(t, e);
          if (ht.throwOnInvalid) throw new u(n);
          return new Qe({ invalid: n });
        }
        static fromDateTimes(t, e) {
          const n = ei(t),
            i = ei(e),
            r = (function (t, e) {
              return t && t.isValid
                ? e && e.isValid
                  ? e < t
                    ? Qe.invalid(
                        "end before start",
                        `The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`
                      )
                    : null
                  : Qe.invalid("missing or invalid end")
                : Qe.invalid("missing or invalid start");
            })(n, i);
          return null == r ? new Qe({ start: n, end: i }) : r;
        }
        static after(t, e) {
          const n = Be.fromDurationLike(e),
            i = ei(t);
          return Qe.fromDateTimes(i, i.plus(n));
        }
        static before(t, e) {
          const n = Be.fromDurationLike(e),
            i = ei(t);
          return Qe.fromDateTimes(i.minus(n), i);
        }
        static fromISO(t, e) {
          const [n, i] = (t || "").split("/", 2);
          if (n && i) {
            let t, r, u, s;
            try {
              (t = ti.fromISO(n, e)), (r = t.isValid);
            } catch (i) {
              r = !1;
            }
            try {
              (u = ti.fromISO(i, e)), (s = u.isValid);
            } catch (i) {
              s = !1;
            }
            if (r && s) return Qe.fromDateTimes(t, u);
            if (r) {
              const n = Be.fromISO(i, e);
              if (n.isValid) return Qe.after(t, n);
            } else if (s) {
              const t = Be.fromISO(n, e);
              if (t.isValid) return Qe.before(u, t);
            }
          }
          return Qe.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
        }
        static isInterval(t) {
          return (t && t.isLuxonInterval) || !1;
        }
        get start() {
          return this.isValid ? this.s : null;
        }
        get end() {
          return this.isValid ? this.e : null;
        }
        get isValid() {
          return null === this.invalidReason;
        }
        get invalidReason() {
          return this.invalid ? this.invalid.reason : null;
        }
        get invalidExplanation() {
          return this.invalid ? this.invalid.explanation : null;
        }
        length(t = "milliseconds") {
          return this.isValid ? this.toDuration(t).get(t) : NaN;
        }
        count(t = "milliseconds") {
          if (!this.isValid) return NaN;
          const e = this.start.startOf(t),
            n = this.end.startOf(t);
          return Math.floor(n.diff(e, t).get(t)) + 1;
        }
        hasSame(t) {
          return !!this.isValid && (this.isEmpty() || this.e.minus(1).hasSame(this.s, t));
        }
        isEmpty() {
          return this.s.valueOf() === this.e.valueOf();
        }
        isAfter(t) {
          return !!this.isValid && this.s > t;
        }
        isBefore(t) {
          return !!this.isValid && this.e <= t;
        }
        contains(t) {
          return !!this.isValid && this.s <= t && this.e > t;
        }
        set({ start: t, end: e } = {}) {
          return this.isValid ? Qe.fromDateTimes(t || this.s, e || this.e) : this;
        }
        splitAt(...t) {
          if (!this.isValid) return [];
          const e = t
              .map(ei)
              .filter((t) => this.contains(t))
              .sort(),
            n = [];
          let { s: i } = this,
            r = 0;
          for (; i < this.e; ) {
            const t = e[r] || this.e,
              u = +t > +this.e ? this.e : t;
            n.push(Qe.fromDateTimes(i, u)), (i = u), (r += 1);
          }
          return n;
        }
        splitBy(t) {
          const e = Be.fromDurationLike(t);
          if (!this.isValid || !e.isValid || 0 === e.as("milliseconds")) return [];
          let n,
            { s: i } = this,
            r = 1;
          const u = [];
          for (; i < this.e; ) {
            const t = this.start.plus(e.mapUnits((t) => t * r));
            (n = +t > +this.e ? this.e : t), u.push(Qe.fromDateTimes(i, n)), (i = n), (r += 1);
          }
          return u;
        }
        divideEqually(t) {
          return this.isValid ? this.splitBy(this.length() / t).slice(0, t) : [];
        }
        overlaps(t) {
          return this.e > t.s && this.s < t.e;
        }
        abutsStart(t) {
          return !!this.isValid && +this.e == +t.s;
        }
        abutsEnd(t) {
          return !!this.isValid && +t.e == +this.s;
        }
        engulfs(t) {
          return !!this.isValid && this.s <= t.s && this.e >= t.e;
        }
        equals(t) {
          return !(!this.isValid || !t.isValid) && this.s.equals(t.s) && this.e.equals(t.e);
        }
        intersection(t) {
          if (!this.isValid) return this;
          const e = this.s > t.s ? this.s : t.s,
            n = this.e < t.e ? this.e : t.e;
          return e >= n ? null : Qe.fromDateTimes(e, n);
        }
        union(t) {
          if (!this.isValid) return this;
          const e = this.s < t.s ? this.s : t.s,
            n = this.e > t.e ? this.e : t.e;
          return Qe.fromDateTimes(e, n);
        }
        static merge(t) {
          const [e, n] = t
            .sort((t, e) => t.s - e.s)
            .reduce(([t, e], n) => (e ? (e.overlaps(n) || e.abutsStart(n) ? [t, e.union(n)] : [t.concat([e]), n]) : [t, n]), [[], null]);
          return n && e.push(n), e;
        }
        static xor(t) {
          let e = null,
            n = 0;
          const i = [],
            r = t.map((t) => [
              { time: t.s, type: "s" },
              { time: t.e, type: "e" }
            ]),
            u = Array.prototype.concat(...r).sort((t, e) => t.time - e.time);
          for (const t of u)
            (n += "s" === t.type ? 1 : -1),
              1 === n ? (e = t.time) : (e && +e != +t.time && i.push(Qe.fromDateTimes(e, t.time)), (e = null));
          return Qe.merge(i);
        }
        difference(...t) {
          return Qe.xor([this].concat(t))
            .map((t) => this.intersection(t))
            .filter((t) => t && !t.isEmpty());
        }
        toString() {
          return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Je;
        }
        toLocaleString(t = w, e = {}) {
          return this.isValid ? Qt.create(this.s.loc.clone(e), t).formatInterval(this) : Je;
        }
        toISO(t) {
          return this.isValid ? `${this.s.toISO(t)}/${this.e.toISO(t)}` : Je;
        }
        toISODate() {
          return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Je;
        }
        toISOTime(t) {
          return this.isValid ? `${this.s.toISOTime(t)}/${this.e.toISOTime(t)}` : Je;
        }
        toFormat(t, { separator: e = " – " } = {}) {
          return this.isValid ? `${this.s.toFormat(t)}${e}${this.e.toFormat(t)}` : Je;
        }
        toDuration(t, e) {
          return this.isValid ? this.e.diff(this.s, t, e) : Be.invalid(this.invalidReason);
        }
        mapEndpoints(t) {
          return Qe.fromDateTimes(t(this.s), t(this.e));
        }
      }
      class Xe {
        static hasDST(t = ht.defaultZone) {
          const e = ti.now().setZone(t).set({ month: 12 });
          return !t.isUniversal && e.offset !== e.set({ month: 6 }).offset;
        }
        static isValidIANAZone(t) {
          return L.isValidZone(t);
        }
        static normalizeZone(t) {
          return it(t, ht.defaultZone);
        }
        static months(t = "long", { locale: e = null, numberingSystem: n = null, locObj: i = null, outputCalendar: r = "gregory" } = {}) {
          return (i || K.create(e, n, r)).months(t);
        }
        static monthsFormat(
          t = "long",
          { locale: e = null, numberingSystem: n = null, locObj: i = null, outputCalendar: r = "gregory" } = {}
        ) {
          return (i || K.create(e, n, r)).months(t, !0);
        }
        static weekdays(t = "long", { locale: e = null, numberingSystem: n = null, locObj: i = null } = {}) {
          return (i || K.create(e, n, null)).weekdays(t);
        }
        static weekdaysFormat(t = "long", { locale: e = null, numberingSystem: n = null, locObj: i = null } = {}) {
          return (i || K.create(e, n, null)).weekdays(t, !0);
        }
        static meridiems({ locale: t = null } = {}) {
          return K.create(t).meridiems();
        }
        static eras(t = "short", { locale: e = null } = {}) {
          return K.create(e, null, "gregory").eras(t);
        }
        static features() {
          return { relative: mt() };
        }
      }
      function Ke(t, e) {
        const n = (t) => t.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(),
          i = n(e) - n(t);
        return Math.floor(Be.fromMillis(i).as("days"));
      }
      function tn(t, e, n, i) {
        let [r, u, s, o] = (function (t, e, n) {
          const i = [
              ["years", (t, e) => e.year - t.year],
              ["quarters", (t, e) => e.quarter - t.quarter + 4 * (e.year - t.year)],
              ["months", (t, e) => e.month - t.month + 12 * (e.year - t.year)],
              [
                "weeks",
                (t, e) => {
                  const n = Ke(t, e);
                  return (n - (n % 7)) / 7;
                }
              ],
              ["days", Ke]
            ],
            r = {},
            u = t;
          let s, o;
          for (const [a, c] of i)
            n.indexOf(a) >= 0 && ((s = a), (r[a] = c(t, e)), (o = u.plus(r)), o > e ? (r[a]--, (t = u.plus(r))) : (t = o));
          return [t, r, o, s];
        })(t, e, n);
        const a = e - r,
          c = n.filter((t) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(t) >= 0);
        0 === c.length && (s < e && (s = r.plus({ [o]: 1 })), s !== r && (u[o] = (u[o] || 0) + a / (s - r)));
        const l = Be.fromObject(u, i);
        return c.length > 0
          ? Be.fromMillis(a, i)
              .shiftTo(...c)
              .plus(l)
          : l;
      }
      const en = {
          arab: "[٠-٩]",
          arabext: "[۰-۹]",
          bali: "[᭐-᭙]",
          beng: "[০-৯]",
          deva: "[०-९]",
          fullwide: "[０-９]",
          gujr: "[૦-૯]",
          hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
          khmr: "[០-៩]",
          knda: "[೦-೯]",
          laoo: "[໐-໙]",
          limb: "[᥆-᥏]",
          mlym: "[൦-൯]",
          mong: "[᠐-᠙]",
          mymr: "[၀-၉]",
          orya: "[୦-୯]",
          tamldec: "[௦-௯]",
          telu: "[౦-౯]",
          thai: "[๐-๙]",
          tibt: "[༠-༩]",
          latn: "\\d"
        },
        nn = {
          arab: [1632, 1641],
          arabext: [1776, 1785],
          bali: [6992, 7001],
          beng: [2534, 2543],
          deva: [2406, 2415],
          fullwide: [65296, 65303],
          gujr: [2790, 2799],
          khmr: [6112, 6121],
          knda: [3302, 3311],
          laoo: [3792, 3801],
          limb: [6470, 6479],
          mlym: [3430, 3439],
          mong: [6160, 6169],
          mymr: [4160, 4169],
          orya: [2918, 2927],
          tamldec: [3046, 3055],
          telu: [3174, 3183],
          thai: [3664, 3673],
          tibt: [3872, 3881]
        },
        rn = en.hanidec.replace(/[\[|\]]/g, "").split("");
      function un({ numberingSystem: t }, e = "") {
        return new RegExp(`${en[t || "latn"]}${e}`);
      }
      function sn(t, e = (t) => t) {
        return {
          regex: t,
          deser: ([t]) =>
            e(
              (function (t) {
                let e = parseInt(t, 10);
                if (isNaN(e)) {
                  e = "";
                  for (let n = 0; n < t.length; n++) {
                    const i = t.charCodeAt(n);
                    if (-1 !== t[n].search(en.hanidec)) e += rn.indexOf(t[n]);
                    else
                      for (const t in nn) {
                        const [n, r] = nn[t];
                        i >= n && i <= r && (e += i - n);
                      }
                  }
                  return parseInt(e, 10);
                }
                return e;
              })(t)
            )
        };
      }
      const on = `[ ${String.fromCharCode(160)}]`,
        an = new RegExp(on, "g");
      function cn(t) {
        return t.replace(/\./g, "\\.?").replace(an, on);
      }
      function ln(t) {
        return t.replace(/\./g, "").replace(an, " ").toLowerCase();
      }
      function hn(t, e) {
        return null === t ? null : { regex: RegExp(t.map(cn).join("|")), deser: ([n]) => t.findIndex((t) => ln(n) === ln(t)) + e };
      }
      function fn(t, e) {
        return { regex: t, deser: ([, t, e]) => qt(t, e), groups: e };
      }
      function dn(t) {
        return { regex: t, deser: ([t]) => t };
      }
      const wn = {
        year: { "2-digit": "yy", numeric: "yyyyy" },
        month: { numeric: "M", "2-digit": "MM", short: "MMM", long: "MMMM" },
        day: { numeric: "d", "2-digit": "dd" },
        weekday: { short: "EEE", long: "EEEE" },
        dayperiod: "a",
        dayPeriod: "a",
        hour: { numeric: "h", "2-digit": "hh" },
        minute: { numeric: "m", "2-digit": "mm" },
        second: { numeric: "s", "2-digit": "ss" },
        timeZoneName: { long: "ZZZZZ", short: "ZZZ" }
      };
      let mn = null;
      function gn(t, e) {
        return Array.prototype.concat(
          ...t.map((t) =>
            (function (t, e) {
              if (t.literal) return t;
              const n = pn(Qt.macroTokenToFormatOpts(t.val), e);
              return null == n || n.includes(void 0) ? t : n;
            })(t, e)
          )
        );
      }
      function _n(t, e, n) {
        const i = gn(Qt.parseFormat(n), t),
          r = i.map((e) =>
            (function (t, e) {
              const n = un(e),
                i = un(e, "{2}"),
                r = un(e, "{3}"),
                u = un(e, "{4}"),
                s = un(e, "{6}"),
                o = un(e, "{1,2}"),
                a = un(e, "{1,3}"),
                c = un(e, "{1,6}"),
                l = un(e, "{1,9}"),
                h = un(e, "{2,4}"),
                f = un(e, "{4,6}"),
                d = (t) => {
                  return { regex: RegExp(((e = t.val), e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"))), deser: ([t]) => t, literal: !0 };
                  var e;
                },
                w = ((w) => {
                  if (t.literal) return d(w);
                  switch (w.val) {
                    case "G":
                      return hn(e.eras("short", !1), 0);
                    case "GG":
                      return hn(e.eras("long", !1), 0);
                    case "y":
                      return sn(c);
                    case "yy":
                    case "kk":
                      return sn(h, $t);
                    case "yyyy":
                    case "kkkk":
                      return sn(u);
                    case "yyyyy":
                      return sn(f);
                    case "yyyyyy":
                      return sn(s);
                    case "M":
                    case "L":
                    case "d":
                    case "H":
                    case "h":
                    case "m":
                    case "q":
                    case "s":
                    case "W":
                      return sn(o);
                    case "MM":
                    case "LL":
                    case "dd":
                    case "HH":
                    case "hh":
                    case "mm":
                    case "qq":
                    case "ss":
                    case "WW":
                      return sn(i);
                    case "MMM":
                      return hn(e.months("short", !0, !1), 1);
                    case "MMMM":
                      return hn(e.months("long", !0, !1), 1);
                    case "LLL":
                      return hn(e.months("short", !1, !1), 1);
                    case "LLLL":
                      return hn(e.months("long", !1, !1), 1);
                    case "o":
                    case "S":
                      return sn(a);
                    case "ooo":
                    case "SSS":
                      return sn(r);
                    case "u":
                      return dn(l);
                    case "uu":
                      return dn(o);
                    case "uuu":
                    case "E":
                    case "c":
                      return sn(n);
                    case "a":
                      return hn(e.meridiems(), 0);
                    case "EEE":
                      return hn(e.weekdays("short", !1, !1), 1);
                    case "EEEE":
                      return hn(e.weekdays("long", !1, !1), 1);
                    case "ccc":
                      return hn(e.weekdays("short", !0, !1), 1);
                    case "cccc":
                      return hn(e.weekdays("long", !0, !1), 1);
                    case "Z":
                    case "ZZ":
                      return fn(new RegExp(`([+-]${o.source})(?::(${i.source}))?`), 2);
                    case "ZZZ":
                      return fn(new RegExp(`([+-]${o.source})(${i.source})?`), 2);
                    case "z":
                      return dn(/[a-z_+-/]{1,256}?/i);
                    default:
                      return d(w);
                  }
                })(t) || { invalidReason: "missing Intl.DateTimeFormat.formatToParts support" };
              return (w.token = t), w;
            })(e, t)
          ),
          u = r.find((t) => t.invalidReason);
        if (u) return { input: e, tokens: i, invalidReason: u.invalidReason };
        {
          const [t, n] = (function (t) {
              return [`^${t.map((t) => t.regex).reduce((t, e) => `${t}(${e.source})`, "")}$`, t];
            })(r),
            u = RegExp(t, "i"),
            [s, a] = (function (t, e, n) {
              const i = t.match(e);
              if (i) {
                const t = {};
                let e = 1;
                for (const r in n)
                  if (_t(n, r)) {
                    const u = n[r],
                      s = u.groups ? u.groups + 1 : 1;
                    !u.literal && u.token && (t[u.token.val[0]] = u.deser(i.slice(e, e + s))), (e += s);
                  }
                return [i, t];
              }
              return [i, {}];
            })(e, u, n),
            [c, l, h] = a
              ? (function (t) {
                  let e,
                    n = null;
                  return (
                    ft(t.z) || (n = L.create(t.z)),
                    ft(t.Z) || (n || (n = new et(t.Z)), (e = t.Z)),
                    ft(t.q) || (t.M = 3 * (t.q - 1) + 1),
                    ft(t.h) || (t.h < 12 && 1 === t.a ? (t.h += 12) : 12 === t.h && 0 === t.a && (t.h = 0)),
                    0 === t.G && t.y && (t.y = -t.y),
                    ft(t.u) || (t.S = Tt(t.u)),
                    [
                      Object.keys(t).reduce((e, n) => {
                        const i = ((t) => {
                          switch (t) {
                            case "S":
                              return "millisecond";
                            case "s":
                              return "second";
                            case "m":
                              return "minute";
                            case "h":
                            case "H":
                              return "hour";
                            case "d":
                              return "day";
                            case "o":
                              return "ordinal";
                            case "L":
                            case "M":
                              return "month";
                            case "y":
                              return "year";
                            case "E":
                            case "c":
                              return "weekday";
                            case "W":
                              return "weekNumber";
                            case "k":
                              return "weekYear";
                            case "q":
                              return "quarter";
                            default:
                              return null;
                          }
                        })(n);
                        return i && (e[i] = t[n]), e;
                      }, {}),
                      n,
                      e
                    ]
                  );
                })(a)
              : [null, null, void 0];
          if (_t(a, "a") && _t(a, "H")) throw new o("Can't include meridiem when specifying 24-hour format");
          return { input: e, tokens: i, regex: u, rawMatches: s, matches: a, result: c, zone: l, specificOffset: h };
        }
      }
      function pn(t, e) {
        if (!t) return null;
        return Qt.create(e, t)
          .formatDateTimeParts((mn || (mn = ti.fromMillis(1555555555555)), mn))
          .map((e) =>
            (function (t, e) {
              const { type: n, value: i } = t;
              if ("literal" === n) return { literal: !0, val: i };
              const r = e[n];
              let u = wn[n];
              return "object" == typeof u && (u = u[r]), u ? { literal: !1, val: u } : void 0;
            })(e, t)
          );
      }
      const yn = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
        vn = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
      function bn(t, e) {
        return new Xt("unit out of range", `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`);
      }
      function Tn(t, e, n) {
        const i = new Date(Date.UTC(t, e - 1, n));
        t < 100 && t >= 0 && i.setUTCFullYear(i.getUTCFullYear() - 1900);
        const r = i.getUTCDay();
        return 0 === r ? 7 : r;
      }
      function xn(t, e, n) {
        return n + (Ct(t) ? vn : yn)[e - 1];
      }
      function Cn(t, e) {
        const n = Ct(t) ? vn : yn,
          i = n.findIndex((t) => t < e);
        return { month: i + 1, day: e - n[i] };
      }
      function Fn(t) {
        const { year: e, month: n, day: i } = t,
          r = xn(e, n, i),
          u = Tn(e, n, i);
        let s,
          o = Math.floor((r - u + 10) / 7);
        return (
          o < 1 ? ((s = e - 1), (o = Nt(s))) : o > Nt(e) ? ((s = e + 1), (o = 1)) : (s = e),
          { weekYear: s, weekNumber: o, weekday: u, ...Et(t) }
        );
      }
      function Sn(t) {
        const { weekYear: e, weekNumber: n, weekday: i } = t,
          r = Tn(e, 1, 4),
          u = Ft(e);
        let s,
          o = 7 * n + i - r - 3;
        o < 1 ? ((s = e - 1), (o += Ft(s))) : o > u ? ((s = e + 1), (o -= Ft(e))) : (s = e);
        const { month: a, day: c } = Cn(s, o);
        return { year: s, month: a, day: c, ...Et(t) };
      }
      function kn(t) {
        const { year: e, month: n, day: i } = t;
        return { year: e, ordinal: xn(e, n, i), ...Et(t) };
      }
      function Nn(t) {
        const { year: e, ordinal: n } = t,
          { month: i, day: r } = Cn(e, n);
        return { year: e, month: i, day: r, ...Et(t) };
      }
      function $n(t) {
        const e = wt(t.year),
          n = pt(t.month, 1, 12),
          i = pt(t.day, 1, St(t.year, t.month));
        return e ? (n ? !i && bn("day", t.day) : bn("month", t.month)) : bn("year", t.year);
      }
      function In(t) {
        const { hour: e, minute: n, second: i, millisecond: r } = t,
          u = pt(e, 0, 23) || (24 === e && 0 === n && 0 === i && 0 === r),
          s = pt(n, 0, 59),
          o = pt(i, 0, 59),
          a = pt(r, 0, 999);
        return u ? (s ? (o ? !a && bn("millisecond", r) : bn("second", i)) : bn("minute", n)) : bn("hour", e);
      }
      const qn = "Invalid DateTime",
        Dn = 864e13;
      function Mn(t) {
        return new Xt("unsupported zone", `the zone "${t.name}" is not supported`);
      }
      function An(t) {
        return null === t.weekData && (t.weekData = Fn(t.c)), t.weekData;
      }
      function En(t, e) {
        const n = { ts: t.ts, zone: t.zone, c: t.c, o: t.o, loc: t.loc, invalid: t.invalid };
        return new ti({ ...n, ...e, old: n });
      }
      function Rn(t, e, n) {
        let i = t - 60 * e * 1e3;
        const r = n.offset(i);
        if (e === r) return [i, e];
        i -= 60 * (r - e) * 1e3;
        const u = n.offset(i);
        return r === u ? [i, r] : [t - 60 * Math.min(r, u) * 1e3, Math.max(r, u)];
      }
      function On(t, e) {
        const n = new Date((t += 60 * e * 1e3));
        return {
          year: n.getUTCFullYear(),
          month: n.getUTCMonth() + 1,
          day: n.getUTCDate(),
          hour: n.getUTCHours(),
          minute: n.getUTCMinutes(),
          second: n.getUTCSeconds(),
          millisecond: n.getUTCMilliseconds()
        };
      }
      function Vn(t, e, n) {
        return Rn(kt(t), e, n);
      }
      function zn(t, e) {
        const n = t.o,
          i = t.c.year + Math.trunc(e.years),
          r = t.c.month + Math.trunc(e.months) + 3 * Math.trunc(e.quarters),
          u = { ...t.c, year: i, month: r, day: Math.min(t.c.day, St(i, r)) + Math.trunc(e.days) + 7 * Math.trunc(e.weeks) },
          s = Be.fromObject({
            years: e.years - Math.trunc(e.years),
            quarters: e.quarters - Math.trunc(e.quarters),
            months: e.months - Math.trunc(e.months),
            weeks: e.weeks - Math.trunc(e.weeks),
            days: e.days - Math.trunc(e.days),
            hours: e.hours,
            minutes: e.minutes,
            seconds: e.seconds,
            milliseconds: e.milliseconds
          }).as("milliseconds"),
          o = kt(u);
        let [a, c] = Rn(o, n, t.zone);
        return 0 !== s && ((a += s), (c = t.zone.offset(a))), { ts: a, o: c };
      }
      function Pn(t, e, n, i, r, u) {
        const { setZone: s, zone: o } = n;
        if (t && 0 !== Object.keys(t).length) {
          const i = e || o,
            r = ti.fromObject(t, { ...n, zone: i, specificOffset: u });
          return s ? r : r.setZone(o);
        }
        return ti.invalid(new Xt("unparsable", `the input "${r}" can't be parsed as ${i}`));
      }
      function jn(t, e, n = !0) {
        return t.isValid ? Qt.create(K.create("en-US"), { allowZ: n, forceSimple: !0 }).formatDateTimeFromString(t, e) : null;
      }
      function Ln(t, e) {
        const n = t.c.year > 9999 || t.c.year < 0;
        let i = "";
        return (
          n && t.c.year >= 0 && (i += "+"),
          (i += yt(t.c.year, n ? 6 : 4)),
          e ? ((i += "-"), (i += yt(t.c.month)), (i += "-"), (i += yt(t.c.day))) : ((i += yt(t.c.month)), (i += yt(t.c.day))),
          i
        );
      }
      function Zn(t, e, n, i, r, u) {
        let s = yt(t.c.hour);
        return (
          e ? ((s += ":"), (s += yt(t.c.minute)), (0 === t.c.second && n) || (s += ":")) : (s += yt(t.c.minute)),
          (0 === t.c.second && n) || ((s += yt(t.c.second)), (0 === t.c.millisecond && i) || ((s += "."), (s += yt(t.c.millisecond, 3)))),
          r &&
            (t.isOffsetFixed && 0 === t.offset && !u
              ? (s += "Z")
              : t.o < 0
              ? ((s += "-"), (s += yt(Math.trunc(-t.o / 60))), (s += ":"), (s += yt(Math.trunc(-t.o % 60))))
              : ((s += "+"), (s += yt(Math.trunc(t.o / 60))), (s += ":"), (s += yt(Math.trunc(t.o % 60))))),
          u && (s += "[" + t.zone.ianaName + "]"),
          s
        );
      }
      const Yn = { month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
        Gn = { weekNumber: 1, weekday: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
        Wn = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
        Un = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
        Hn = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"],
        Bn = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
      function Jn(t) {
        const e = {
          year: "year",
          years: "year",
          month: "month",
          months: "month",
          day: "day",
          days: "day",
          hour: "hour",
          hours: "hour",
          minute: "minute",
          minutes: "minute",
          quarter: "quarter",
          quarters: "quarter",
          second: "second",
          seconds: "second",
          millisecond: "millisecond",
          milliseconds: "millisecond",
          weekday: "weekday",
          weekdays: "weekday",
          weeknumber: "weekNumber",
          weeksnumber: "weekNumber",
          weeknumbers: "weekNumber",
          weekyear: "weekYear",
          weekyears: "weekYear",
          ordinal: "ordinal"
        }[t.toLowerCase()];
        if (!e) throw new a(t);
        return e;
      }
      function Qn(t, e) {
        const n = it(e.zone, ht.defaultZone),
          i = K.fromObject(e),
          r = ht.now();
        let u, s;
        if (ft(t.year)) u = r;
        else {
          for (const e of Un) ft(t[e]) && (t[e] = Yn[e]);
          const e = $n(t) || In(t);
          if (e) return ti.invalid(e);
          const i = n.offset(r);
          [u, s] = Vn(t, i, n);
        }
        return new ti({ ts: u, zone: n, loc: i, o: s });
      }
      function Xn(t, e, n) {
        const i = !!ft(n.round) || n.round,
          r = (t, r) => {
            t = xt(t, i || n.calendary ? 0 : 2, !0);
            return e.loc.clone(n).relFormatter(n).format(t, r);
          },
          u = (i) => (n.calendary ? (e.hasSame(t, i) ? 0 : e.startOf(i).diff(t.startOf(i), i).get(i)) : e.diff(t, i).get(i));
        if (n.unit) return r(u(n.unit), n.unit);
        for (const t of n.units) {
          const e = u(t);
          if (Math.abs(e) >= 1) return r(e, t);
        }
        return r(t > e ? -0 : 0, n.units[n.units.length - 1]);
      }
      function Kn(t) {
        let e,
          n = {};
        return (
          t.length > 0 && "object" == typeof t[t.length - 1]
            ? ((n = t[t.length - 1]), (e = Array.from(t).slice(0, t.length - 1)))
            : (e = Array.from(t)),
          [n, e]
        );
      }
      class ti {
        constructor(t) {
          const e = t.zone || ht.defaultZone;
          let n = t.invalid || (Number.isNaN(t.ts) ? new Xt("invalid input") : null) || (e.isValid ? null : Mn(e));
          this.ts = ft(t.ts) ? ht.now() : t.ts;
          let i = null,
            r = null;
          if (!n) {
            if (t.old && t.old.ts === this.ts && t.old.zone.equals(e)) [i, r] = [t.old.c, t.old.o];
            else {
              const t = e.offset(this.ts);
              (i = On(this.ts, t)), (n = Number.isNaN(i.year) ? new Xt("invalid input") : null), (i = n ? null : i), (r = n ? null : t);
            }
          }
          (this._zone = e),
            (this.loc = t.loc || K.create()),
            (this.invalid = n),
            (this.weekData = null),
            (this.c = i),
            (this.o = r),
            (this.isLuxonDateTime = !0);
        }
        static now() {
          return new ti({});
        }
        static local() {
          const [t, e] = Kn(arguments),
            [n, i, r, u, s, o, a] = e;
          return Qn({ year: n, month: i, day: r, hour: u, minute: s, second: o, millisecond: a }, t);
        }
        static utc() {
          const [t, e] = Kn(arguments),
            [n, i, r, u, s, o, a] = e;
          return (t.zone = et.utcInstance), Qn({ year: n, month: i, day: r, hour: u, minute: s, second: o, millisecond: a }, t);
        }
        static fromJSDate(t, e = {}) {
          const n = ((i = t), "[object Date]" === Object.prototype.toString.call(i) ? t.valueOf() : NaN);
          var i;
          if (Number.isNaN(n)) return ti.invalid("invalid input");
          const r = it(e.zone, ht.defaultZone);
          return r.isValid ? new ti({ ts: n, zone: r, loc: K.fromObject(e) }) : ti.invalid(Mn(r));
        }
        static fromMillis(t, e = {}) {
          if (dt(t))
            return t < -Dn || t > Dn
              ? ti.invalid("Timestamp out of range")
              : new ti({ ts: t, zone: it(e.zone, ht.defaultZone), loc: K.fromObject(e) });
          throw new c(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`);
        }
        static fromSeconds(t, e = {}) {
          if (dt(t)) return new ti({ ts: 1e3 * t, zone: it(e.zone, ht.defaultZone), loc: K.fromObject(e) });
          throw new c("fromSeconds requires a numerical input");
        }
        static fromObject(t, e = {}) {
          t = t || {};
          const n = it(e.zone, ht.defaultZone);
          if (!n.isValid) return ti.invalid(Mn(n));
          const i = ht.now(),
            r = ft(e.specificOffset) ? n.offset(i) : e.specificOffset,
            u = Mt(t, Jn),
            s = !ft(u.ordinal),
            a = !ft(u.year),
            c = !ft(u.month) || !ft(u.day),
            l = a || c,
            h = u.weekYear || u.weekNumber,
            f = K.fromObject(e);
          if ((l || s) && h) throw new o("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
          if (c && s) throw new o("Can't mix ordinal dates with month/day");
          const d = h || (u.weekday && !l);
          let w,
            m,
            g = On(i, r);
          d ? ((w = Hn), (m = Gn), (g = Fn(g))) : s ? ((w = Bn), (m = Wn), (g = kn(g))) : ((w = Un), (m = Yn));
          let _ = !1;
          for (const t of w) {
            ft(u[t]) ? (u[t] = _ ? m[t] : g[t]) : (_ = !0);
          }
          const p = d
              ? (function (t) {
                  const e = wt(t.weekYear),
                    n = pt(t.weekNumber, 1, Nt(t.weekYear)),
                    i = pt(t.weekday, 1, 7);
                  return e ? (n ? !i && bn("weekday", t.weekday) : bn("week", t.week)) : bn("weekYear", t.weekYear);
                })(u)
              : s
              ? (function (t) {
                  const e = wt(t.year),
                    n = pt(t.ordinal, 1, Ft(t.year));
                  return e ? !n && bn("ordinal", t.ordinal) : bn("year", t.year);
                })(u)
              : $n(u),
            y = p || In(u);
          if (y) return ti.invalid(y);
          const v = d ? Sn(u) : s ? Nn(u) : u,
            [b, T] = Vn(v, r, n),
            x = new ti({ ts: b, zone: n, o: T, loc: f });
          return u.weekday && l && t.weekday !== x.weekday
            ? ti.invalid("mismatched weekday", `you can't specify both a weekday of ${u.weekday} and a date of ${x.toISO()}`)
            : x;
        }
        static fromISO(t, e = {}) {
          const [n, i] = (function (t) {
            return ne(t, [Ne, De], [$e, Me], [Ie, Ae], [qe, Ee]);
          })(t);
          return Pn(n, i, e, "ISO 8601", t);
        }
        static fromRFC2822(t, e = {}) {
          const [n, i] = (function (t) {
            return ne(
              (function (t) {
                return t
                  .replace(/\([^()]*\)|[\n\t]/g, " ")
                  .replace(/(\s\s+)/g, " ")
                  .trim();
              })(t),
              [be, Te]
            );
          })(t);
          return Pn(n, i, e, "RFC 2822", t);
        }
        static fromHTTP(t, e = {}) {
          const [n, i] = (function (t) {
            return ne(t, [xe, Se], [Ce, Se], [Fe, ke]);
          })(t);
          return Pn(n, i, e, "HTTP", e);
        }
        static fromFormat(t, e, n = {}) {
          if (ft(t) || ft(e)) throw new c("fromFormat requires an input string and a format");
          const { locale: i = null, numberingSystem: r = null } = n,
            u = K.fromOpts({ locale: i, numberingSystem: r, defaultToEN: !0 }),
            [s, o, a, l] = (function (t, e, n) {
              const { result: i, zone: r, specificOffset: u, invalidReason: s } = _n(t, e, n);
              return [i, r, u, s];
            })(u, t, e);
          return l ? ti.invalid(l) : Pn(s, o, n, `format ${e}`, t, a);
        }
        static fromString(t, e, n = {}) {
          return ti.fromFormat(t, e, n);
        }
        static fromSQL(t, e = {}) {
          const [n, i] = (function (t) {
            return ne(t, [Oe, De], [Ve, ze]);
          })(t);
          return Pn(n, i, e, "SQL", t);
        }
        static invalid(t, e = null) {
          if (!t) throw new c("need to specify a reason the DateTime is invalid");
          const n = t instanceof Xt ? t : new Xt(t, e);
          if (ht.throwOnInvalid) throw new r(n);
          return new ti({ invalid: n });
        }
        static isDateTime(t) {
          return (t && t.isLuxonDateTime) || !1;
        }
        static parseFormatForOpts(t, e = {}) {
          const n = pn(t, K.fromObject(e));
          return n ? n.map((t) => (t ? t.val : null)).join("") : null;
        }
        static expandFormat(t, e = {}) {
          return gn(Qt.parseFormat(t), K.fromObject(e))
            .map((t) => t.val)
            .join("");
        }
        get(t) {
          return this[t];
        }
        get isValid() {
          return null === this.invalid;
        }
        get invalidReason() {
          return this.invalid ? this.invalid.reason : null;
        }
        get invalidExplanation() {
          return this.invalid ? this.invalid.explanation : null;
        }
        get locale() {
          return this.isValid ? this.loc.locale : null;
        }
        get numberingSystem() {
          return this.isValid ? this.loc.numberingSystem : null;
        }
        get outputCalendar() {
          return this.isValid ? this.loc.outputCalendar : null;
        }
        get zone() {
          return this._zone;
        }
        get zoneName() {
          return this.isValid ? this.zone.name : null;
        }
        get year() {
          return this.isValid ? this.c.year : NaN;
        }
        get quarter() {
          return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
        }
        get month() {
          return this.isValid ? this.c.month : NaN;
        }
        get day() {
          return this.isValid ? this.c.day : NaN;
        }
        get hour() {
          return this.isValid ? this.c.hour : NaN;
        }
        get minute() {
          return this.isValid ? this.c.minute : NaN;
        }
        get second() {
          return this.isValid ? this.c.second : NaN;
        }
        get millisecond() {
          return this.isValid ? this.c.millisecond : NaN;
        }
        get weekYear() {
          return this.isValid ? An(this).weekYear : NaN;
        }
        get weekNumber() {
          return this.isValid ? An(this).weekNumber : NaN;
        }
        get weekday() {
          return this.isValid ? An(this).weekday : NaN;
        }
        get ordinal() {
          return this.isValid ? kn(this.c).ordinal : NaN;
        }
        get monthShort() {
          return this.isValid ? Xe.months("short", { locObj: this.loc })[this.month - 1] : null;
        }
        get monthLong() {
          return this.isValid ? Xe.months("long", { locObj: this.loc })[this.month - 1] : null;
        }
        get weekdayShort() {
          return this.isValid ? Xe.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
        }
        get weekdayLong() {
          return this.isValid ? Xe.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
        }
        get offset() {
          return this.isValid ? +this.o : NaN;
        }
        get offsetNameShort() {
          return this.isValid ? this.zone.offsetName(this.ts, { format: "short", locale: this.locale }) : null;
        }
        get offsetNameLong() {
          return this.isValid ? this.zone.offsetName(this.ts, { format: "long", locale: this.locale }) : null;
        }
        get isOffsetFixed() {
          return this.isValid ? this.zone.isUniversal : null;
        }
        get isInDST() {
          return (
            !this.isOffsetFixed && (this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset)
          );
        }
        get isInLeapYear() {
          return Ct(this.year);
        }
        get daysInMonth() {
          return St(this.year, this.month);
        }
        get daysInYear() {
          return this.isValid ? Ft(this.year) : NaN;
        }
        get weeksInWeekYear() {
          return this.isValid ? Nt(this.weekYear) : NaN;
        }
        resolvedLocaleOptions(t = {}) {
          const { locale: e, numberingSystem: n, calendar: i } = Qt.create(this.loc.clone(t), t).resolvedOptions(this);
          return { locale: e, numberingSystem: n, outputCalendar: i };
        }
        toUTC(t = 0, e = {}) {
          return this.setZone(et.instance(t), e);
        }
        toLocal() {
          return this.setZone(ht.defaultZone);
        }
        setZone(t, { keepLocalTime: e = !1, keepCalendarTime: n = !1 } = {}) {
          if ((t = it(t, ht.defaultZone)).equals(this.zone)) return this;
          if (t.isValid) {
            let i = this.ts;
            if (e || n) {
              const e = t.offset(this.ts),
                n = this.toObject();
              [i] = Vn(n, e, t);
            }
            return En(this, { ts: i, zone: t });
          }
          return ti.invalid(Mn(t));
        }
        reconfigure({ locale: t, numberingSystem: e, outputCalendar: n } = {}) {
          return En(this, { loc: this.loc.clone({ locale: t, numberingSystem: e, outputCalendar: n }) });
        }
        setLocale(t) {
          return this.reconfigure({ locale: t });
        }
        set(t) {
          if (!this.isValid) return this;
          const e = Mt(t, Jn),
            n = !ft(e.weekYear) || !ft(e.weekNumber) || !ft(e.weekday),
            i = !ft(e.ordinal),
            r = !ft(e.year),
            u = !ft(e.month) || !ft(e.day),
            s = r || u,
            a = e.weekYear || e.weekNumber;
          if ((s || i) && a) throw new o("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
          if (u && i) throw new o("Can't mix ordinal dates with month/day");
          let c;
          n
            ? (c = Sn({ ...Fn(this.c), ...e }))
            : ft(e.ordinal)
            ? ((c = { ...this.toObject(), ...e }), ft(e.day) && (c.day = Math.min(St(c.year, c.month), c.day)))
            : (c = Nn({ ...kn(this.c), ...e }));
          const [l, h] = Vn(c, this.o, this.zone);
          return En(this, { ts: l, o: h });
        }
        plus(t) {
          if (!this.isValid) return this;
          return En(this, zn(this, Be.fromDurationLike(t)));
        }
        minus(t) {
          if (!this.isValid) return this;
          return En(this, zn(this, Be.fromDurationLike(t).negate()));
        }
        startOf(t) {
          if (!this.isValid) return this;
          const e = {},
            n = Be.normalizeUnit(t);
          switch (n) {
            case "years":
              e.month = 1;
            case "quarters":
            case "months":
              e.day = 1;
            case "weeks":
            case "days":
              e.hour = 0;
            case "hours":
              e.minute = 0;
            case "minutes":
              e.second = 0;
            case "seconds":
              e.millisecond = 0;
          }
          if (("weeks" === n && (e.weekday = 1), "quarters" === n)) {
            const t = Math.ceil(this.month / 3);
            e.month = 3 * (t - 1) + 1;
          }
          return this.set(e);
        }
        endOf(t) {
          return this.isValid
            ? this.plus({ [t]: 1 })
                .startOf(t)
                .minus(1)
            : this;
        }
        toFormat(t, e = {}) {
          return this.isValid ? Qt.create(this.loc.redefaultToEN(e)).formatDateTimeFromString(this, t) : qn;
        }
        toLocaleString(t = w, e = {}) {
          return this.isValid ? Qt.create(this.loc.clone(e), t).formatDateTime(this) : qn;
        }
        toLocaleParts(t = {}) {
          return this.isValid ? Qt.create(this.loc.clone(t), t).formatDateTimeParts(this) : [];
        }
        toISO({
          format: t = "extended",
          suppressSeconds: e = !1,
          suppressMilliseconds: n = !1,
          includeOffset: i = !0,
          extendedZone: r = !1
        } = {}) {
          if (!this.isValid) return null;
          const u = "extended" === t;
          let s = Ln(this, u);
          return (s += "T"), (s += Zn(this, u, e, n, i, r)), s;
        }
        toISODate({ format: t = "extended" } = {}) {
          return this.isValid ? Ln(this, "extended" === t) : null;
        }
        toISOWeekDate() {
          return jn(this, "kkkk-'W'WW-c");
        }
        toISOTime({
          suppressMilliseconds: t = !1,
          suppressSeconds: e = !1,
          includeOffset: n = !0,
          includePrefix: i = !1,
          extendedZone: r = !1,
          format: u = "extended"
        } = {}) {
          if (!this.isValid) return null;
          return (i ? "T" : "") + Zn(this, "extended" === u, e, t, n, r);
        }
        toRFC2822() {
          return jn(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
        }
        toHTTP() {
          return jn(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
        }
        toSQLDate() {
          return this.isValid ? Ln(this, !0) : null;
        }
        toSQLTime({ includeOffset: t = !0, includeZone: e = !1, includeOffsetSpace: n = !0 } = {}) {
          let i = "HH:mm:ss.SSS";
          return (e || t) && (n && (i += " "), e ? (i += "z") : t && (i += "ZZ")), jn(this, i, !0);
        }
        toSQL(t = {}) {
          return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(t)}` : null;
        }
        toString() {
          return this.isValid ? this.toISO() : qn;
        }
        valueOf() {
          return this.toMillis();
        }
        toMillis() {
          return this.isValid ? this.ts : NaN;
        }
        toSeconds() {
          return this.isValid ? this.ts / 1e3 : NaN;
        }
        toUnixInteger() {
          return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
        }
        toJSON() {
          return this.toISO();
        }
        toBSON() {
          return this.toJSDate();
        }
        toObject(t = {}) {
          if (!this.isValid) return {};
          const e = { ...this.c };
          return (
            t.includeConfig &&
              ((e.outputCalendar = this.outputCalendar), (e.numberingSystem = this.loc.numberingSystem), (e.locale = this.loc.locale)),
            e
          );
        }
        toJSDate() {
          return new Date(this.isValid ? this.ts : NaN);
        }
        diff(t, e = "milliseconds", n = {}) {
          if (!this.isValid || !t.isValid) return Be.invalid("created by diffing an invalid DateTime");
          const i = { locale: this.locale, numberingSystem: this.numberingSystem, ...n },
            r = ((o = e), Array.isArray(o) ? o : [o]).map(Be.normalizeUnit),
            u = t.valueOf() > this.valueOf(),
            s = tn(u ? this : t, u ? t : this, r, i);
          var o;
          return u ? s.negate() : s;
        }
        diffNow(t = "milliseconds", e = {}) {
          return this.diff(ti.now(), t, e);
        }
        until(t) {
          return this.isValid ? Qe.fromDateTimes(this, t) : this;
        }
        hasSame(t, e) {
          if (!this.isValid) return !1;
          const n = t.valueOf(),
            i = this.setZone(t.zone, { keepLocalTime: !0 });
          return i.startOf(e) <= n && n <= i.endOf(e);
        }
        equals(t) {
          return this.isValid && t.isValid && this.valueOf() === t.valueOf() && this.zone.equals(t.zone) && this.loc.equals(t.loc);
        }
        toRelative(t = {}) {
          if (!this.isValid) return null;
          const e = t.base || ti.fromObject({}, { zone: this.zone }),
            n = t.padding ? (this < e ? -t.padding : t.padding) : 0;
          let i = ["years", "months", "days", "hours", "minutes", "seconds"],
            r = t.unit;
          return Array.isArray(t.unit) && ((i = t.unit), (r = void 0)), Xn(e, this.plus(n), { ...t, numeric: "always", units: i, unit: r });
        }
        toRelativeCalendar(t = {}) {
          return this.isValid
            ? Xn(t.base || ti.fromObject({}, { zone: this.zone }), this, {
                ...t,
                numeric: "auto",
                units: ["years", "months", "days"],
                calendary: !0
              })
            : null;
        }
        static min(...t) {
          if (!t.every(ti.isDateTime)) throw new c("min requires all arguments be DateTimes");
          return gt(t, (t) => t.valueOf(), Math.min);
        }
        static max(...t) {
          if (!t.every(ti.isDateTime)) throw new c("max requires all arguments be DateTimes");
          return gt(t, (t) => t.valueOf(), Math.max);
        }
        static fromFormatExplain(t, e, n = {}) {
          const { locale: i = null, numberingSystem: r = null } = n;
          return _n(K.fromOpts({ locale: i, numberingSystem: r, defaultToEN: !0 }), t, e);
        }
        static fromStringExplain(t, e, n = {}) {
          return ti.fromFormatExplain(t, e, n);
        }
        static get DATE_SHORT() {
          return w;
        }
        static get DATE_MED() {
          return m;
        }
        static get DATE_MED_WITH_WEEKDAY() {
          return g;
        }
        static get DATE_FULL() {
          return _;
        }
        static get DATE_HUGE() {
          return p;
        }
        static get TIME_SIMPLE() {
          return y;
        }
        static get TIME_WITH_SECONDS() {
          return v;
        }
        static get TIME_WITH_SHORT_OFFSET() {
          return b;
        }
        static get TIME_WITH_LONG_OFFSET() {
          return T;
        }
        static get TIME_24_SIMPLE() {
          return x;
        }
        static get TIME_24_WITH_SECONDS() {
          return C;
        }
        static get TIME_24_WITH_SHORT_OFFSET() {
          return F;
        }
        static get TIME_24_WITH_LONG_OFFSET() {
          return S;
        }
        static get DATETIME_SHORT() {
          return k;
        }
        static get DATETIME_SHORT_WITH_SECONDS() {
          return N;
        }
        static get DATETIME_MED() {
          return $;
        }
        static get DATETIME_MED_WITH_SECONDS() {
          return I;
        }
        static get DATETIME_MED_WITH_WEEKDAY() {
          return q;
        }
        static get DATETIME_FULL() {
          return D;
        }
        static get DATETIME_FULL_WITH_SECONDS() {
          return M;
        }
        static get DATETIME_HUGE() {
          return A;
        }
        static get DATETIME_HUGE_WITH_SECONDS() {
          return E;
        }
      }
      function ei(t) {
        if (ti.isDateTime(t)) return t;
        if (t && t.valueOf && dt(t.valueOf())) return ti.fromJSDate(t);
        if (t && "object" == typeof t) return ti.fromObject(t);
        throw new c(`Unknown datetime argument: ${t}, of type ${typeof t}`);
      }
    }
  }
]);
