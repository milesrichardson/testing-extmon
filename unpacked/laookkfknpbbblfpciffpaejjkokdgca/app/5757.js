"use strict";
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [5757],
  {
    81891: (e, t, n) => {
      t.vl = t.F5 = t.zW = void 0;
      n(83885);
      var r = n(73364);
      Object.defineProperty(t, "zW", {
        enumerable: !0,
        get: function () {
          return r.booleanProp;
        }
      });
      n(21584), n(44773), n(29145), n(81336), n(92994), n(75042);
      var o = n(17348);
      Object.defineProperty(t, "F5", {
        enumerable: !0,
        get: function () {
          return o.objectProp;
        }
      });
      var i = n(60548);
      Object.defineProperty(t, "vl", {
        enumerable: !0,
        get: function () {
          return i.functionProp;
        }
      });
      n(40740), n(20448), n(83605), n(92423), n(79209), n(75299), n(6828), n(89856);
    },
    92994: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.anyProp = void 0);
      const r = n(66152);
      t.anyProp = (e) => (0, r.propOptionsGenerator)(void 0, e);
    },
    75042: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.arrayProp = void 0);
      const r = n(66152);
      t.arrayProp = (e) => (0, r.propOptionsGenerator)(Array, e);
    },
    73364: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.booleanProp = void 0);
      const r = n(66152);
      t.booleanProp = (e) => (0, r.propOptionsGenerator)(Boolean, e);
    },
    60548: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.functionProp = void 0);
      const r = n(86844);
      t.functionProp = (e) => ({
        optional: { type: Function, required: !1, default: void 0, validator: (0, r.vuePropValidator)(e) },
        nullable: { type: Function, required: !1, default: null, validator: (0, r.vuePropValidator)(e) },
        required: { type: Function, required: !0, validator: (0, r.vuePropValidator)(e) }
      });
    },
    92423: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.instanceOfProp = void 0);
      const r = n(66152),
        o = n(86844);
      t.instanceOfProp = (e, t) => (0, r.propOptionsGenerator)(e, t, (0, o.isInstanceOf)(e));
    },
    44773: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.integerProp = void 0);
      const r = n(66152),
        o = n(86844);
      t.integerProp = (e) => (0, r.propOptionsGenerator)(Number, e, o.isInteger);
    },
    21584: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.numberProp = void 0);
      const r = n(66152);
      t.numberProp = (e) => (0, r.propOptionsGenerator)(Number, e);
    },
    17348: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.objectProp = void 0);
      const r = n(66152);
      t.objectProp = (e) => (0, r.propOptionsGenerator)(Object, e);
    },
    40740: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.oneOfProp = void 0);
      const r = n(66152),
        o = n(86844);
      t.oneOfProp = (e, t) =>
        (0, r.propOptionsGenerator)(
          ((e) => {
            const t = [
              ...new Set(
                e.flatMap((e) => {
                  var t;
                  return null == e ? [] : null !== (t = e.constructor) && void 0 !== t ? t : [];
                })
              )
            ];
            if (0 !== t.length) return 1 === t.length ? t[0] : t;
          })(e),
          t,
          (0, o.isOneOf)(e)
        );
    },
    20448: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.oneOfObjectKeysProp = void 0);
      const r = n(40740);
      t.oneOfObjectKeysProp = (e, t) => (0, r.oneOfProp)(Object.keys(e), t);
    },
    83605: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.oneOfTypesProp = void 0);
      const r = n(66152);
      t.oneOfTypesProp = (e, t) => (0, r.propOptionsGenerator)(e, t);
    },
    83885: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.stringProp = void 0);
      const r = n(66152);
      t.stringProp = (e) => (0, r.propOptionsGenerator)(String, e);
    },
    29145: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.symbolProp = void 0);
      const r = n(66152),
        o = n(86844);
      t.symbolProp = (e) => (0, r.propOptionsGenerator)(void 0, e, o.isSymbol);
    },
    81336: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.vueComponentProp = void 0);
      const r = n(66152);
      t.vueComponentProp = (e) => (0, r.propOptionsGenerator)([Object, String], e);
    },
    66152: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.propOptionsGenerator = void 0);
      const r = n(86844);
      t.propOptionsGenerator = (e, t, ...n) => ({
        optional: { type: e, required: !1, default: void 0, validator: (0, r.vuePropValidator)(t, ...n) },
        nullable: { type: e, required: !1, default: null, validator: (0, r.vuePropValidator)(t, ...n) },
        withDefault: (o) => ({ type: e, required: !1, default: o, validator: (0, r.vuePropValidator)(t, ...n) }),
        required: { type: e, required: !0, validator: (0, r.vuePropValidator)(t, ...n) }
      });
    },
    86844: function (e, t, n) {
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isSymbol = t.isOneOf = t.isInteger = t.isInstanceOf = t.vuePropValidator = void 0);
      const o = r(n(28725));
      t.vuePropValidator = function (e, ...t) {
        const n = e ? [...t, e] : t;
        if (0 !== n.length)
          return (e) => {
            for (const t of n) {
              const n = t(e);
              if (n)
                return (
                  "object" == typeof o.default && "util" in o.default
                    ? o.default.util.warn(`${n} (received: '${String(e)}')`)
                    : console.warn(`${n} (received: '${String(e)}')`),
                  !1
                );
            }
            return !0;
          };
      };
      var i = n(19753);
      Object.defineProperty(t, "isInstanceOf", {
        enumerable: !0,
        get: function () {
          return i.isInstanceOf;
        }
      });
      var s = n(20051);
      Object.defineProperty(t, "isInteger", {
        enumerable: !0,
        get: function () {
          return s.isInteger;
        }
      });
      var a = n(60823);
      Object.defineProperty(t, "isOneOf", {
        enumerable: !0,
        get: function () {
          return a.isOneOf;
        }
      });
      var l = n(76020);
      Object.defineProperty(t, "isSymbol", {
        enumerable: !0,
        get: function () {
          return l.isSymbol;
        }
      });
    },
    19753: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isInstanceOf = void 0),
        (t.isInstanceOf = (e) => (t) => {
          if (!(t instanceof e)) return `value should be an instance of ${e.name}`;
        });
    },
    20051: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isInteger = void 0),
        (t.isInteger = (e) => {
          if ("number" != typeof e || !Number.isInteger(e)) return "value should be an integer";
        });
    },
    79209: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isNegative = void 0),
        (t.isNegative = (e) => {
          if ("number" != typeof e || e >= 0 || Number.isNaN(e)) return "value should be a negative number";
        });
    },
    6828: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isNonNegative = void 0),
        (t.isNonNegative = (e) => {
          if ("number" != typeof e || e < 0 || Number.isNaN(e)) return "value should be a non-negative number";
        });
    },
    89856: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isNonPositive = void 0),
        (t.isNonPositive = (e) => {
          if ("number" != typeof e || e > 0 || Number.isNaN(e)) return "value should be a non-positive number";
        });
    },
    60823: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isOneOf = void 0),
        (t.isOneOf = (e) => (t) => {
          if (!e.includes(t)) return `value should be one of "${e.join('", "')}"`;
        });
    },
    75299: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isPositive = void 0),
        (t.isPositive = (e) => {
          if ("number" != typeof e || e <= 0 || Number.isNaN(e)) return "value should be a positive number";
        });
    },
    76020: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isSymbol = void 0),
        (t.isSymbol = (e) => {
          if ("symbol" != typeof e) return "value should be a symbol";
        });
    },
    73845: (e, t, n) => {
      n.d(t, {
        ML: () => Xe,
        hj: () => ie,
        VK: () => G,
        vc: () => nt,
        NB: () => rt,
        DK: () => ot,
        nU: () => H,
        XP: () => Ce,
        hT: () => we,
        Rw: () => Ge,
        b5: () => Ne,
        ar: () => Ae,
        AW: () => Pe,
        u9: () => Re,
        QC: () => Ie,
        Nl: () => B,
        d1: () => Ee,
        Jo: () => Me,
        tI: () => Be,
        eE: () => be,
        EG: () => Ve,
        xh: () => fe,
        Cf: () => Ze,
        K9: () => it,
        P1: () => V,
        x2: () => Qe,
        pr: () => Fe,
        zK: () => et,
        S0: () => tt
      });
      var r = n(2376),
        o = n(84348),
        i = n(82337),
        s = n(87823),
        a = n(16560);
      const l = (e, t) => !e.selection.empty && (t && t(e.tr.deleteSelection().scrollIntoView()), !0);
      const c = (e, t, n) => {
        let o = (function (e, t) {
          let { $cursor: n } = e.selection;
          return !n || (t ? !t.endOfTextblock("backward", e) : n.parentOffset > 0) ? null : n;
        })(e, n);
        if (!o) return !1;
        let i = h(o);
        if (!i) {
          let n = o.blockRange(),
            r = n && (0, a.k9)(n);
          return null != r && (t && t(e.tr.lift(n, r).scrollIntoView()), !0);
        }
        let l = i.nodeBefore;
        if (!l.type.spec.isolating && k(e, i, t)) return !0;
        if (0 == o.parent.content.size && (d(l, "end") || r.qv.isSelectable(l))) {
          let n = (0, a.dR)(e.doc, o.before(), o.after(), s.p2.empty);
          if (n && n.slice.size < n.to - n.from) {
            if (t) {
              let o = e.tr.step(n);
              o.setSelection(
                d(l, "end") ? r.Y1.findFrom(o.doc.resolve(o.mapping.map(i.pos, -1)), -1) : r.qv.create(o.doc, i.pos - l.nodeSize)
              ),
                t(o.scrollIntoView());
            }
            return !0;
          }
        }
        return !(!l.isAtom || i.depth != o.depth - 1 || (t && t(e.tr.delete(i.pos - l.nodeSize, i.pos).scrollIntoView()), 0));
      };
      function d(e, t, n = !1) {
        for (let r = e; r; r = "start" == t ? r.firstChild : r.lastChild) {
          if (r.isTextblock) return !0;
          if (n && 1 != r.childCount) return !1;
        }
        return !1;
      }
      const p = (e, t, n) => {
        let { $head: o, empty: i } = e.selection,
          s = o;
        if (!i) return !1;
        if (o.parent.isTextblock) {
          if (n ? !n.endOfTextblock("backward", e) : o.parentOffset > 0) return !1;
          s = h(o);
        }
        let a = s && s.nodeBefore;
        return !(!a || !r.qv.isSelectable(a) || (t && t(e.tr.setSelection(r.qv.create(e.doc, s.pos - a.nodeSize)).scrollIntoView()), 0));
      };
      function h(e) {
        if (!e.parent.type.spec.isolating)
          for (let t = e.depth - 1; t >= 0; t--) {
            if (e.index(t) > 0) return e.doc.resolve(e.before(t + 1));
            if (e.node(t).type.spec.isolating) break;
          }
        return null;
      }
      const u = (e, t, n) => {
          let o = (function (e, t) {
            let { $cursor: n } = e.selection;
            return !n || (t ? !t.endOfTextblock("forward", e) : n.parentOffset < n.parent.content.size) ? null : n;
          })(e, n);
          if (!o) return !1;
          let i = m(o);
          if (!i) return !1;
          let l = i.nodeAfter;
          if (k(e, i, t)) return !0;
          if (0 == o.parent.content.size && (d(l, "start") || r.qv.isSelectable(l))) {
            let n = (0, a.dR)(e.doc, o.before(), o.after(), s.p2.empty);
            if (n && n.slice.size < n.to - n.from) {
              if (t) {
                let o = e.tr.step(n);
                o.setSelection(
                  d(l, "start") ? r.Y1.findFrom(o.doc.resolve(o.mapping.map(i.pos)), 1) : r.qv.create(o.doc, o.mapping.map(i.pos))
                ),
                  t(o.scrollIntoView());
              }
              return !0;
            }
          }
          return !(!l.isAtom || i.depth != o.depth - 1 || (t && t(e.tr.delete(i.pos, i.pos + l.nodeSize).scrollIntoView()), 0));
        },
        f = (e, t, n) => {
          let { $head: o, empty: i } = e.selection,
            s = o;
          if (!i) return !1;
          if (o.parent.isTextblock) {
            if (n ? !n.endOfTextblock("forward", e) : o.parentOffset < o.parent.content.size) return !1;
            s = m(o);
          }
          let a = s && s.nodeAfter;
          return !(!a || !r.qv.isSelectable(a) || (t && t(e.tr.setSelection(r.qv.create(e.doc, s.pos)).scrollIntoView()), 0));
        };
      function m(e) {
        if (!e.parent.type.spec.isolating)
          for (let t = e.depth - 1; t >= 0; t--) {
            let n = e.node(t);
            if (e.index(t) + 1 < n.childCount) return e.doc.resolve(e.after(t + 1));
            if (n.type.spec.isolating) break;
          }
        return null;
      }
      const g = (e, t) => {
        let { $head: n, $anchor: r } = e.selection;
        return !(!n.parent.type.spec.code || !n.sameParent(r) || (t && t(e.tr.insertText("\n").scrollIntoView()), 0));
      };
      function y(e) {
        for (let t = 0; t < e.edgeCount; t++) {
          let { type: n } = e.edge(t);
          if (n.isTextblock && !n.hasRequiredAttrs()) return n;
        }
        return null;
      }
      const v = (e, t) => {
          let { $head: n, $anchor: o } = e.selection;
          if (!n.parent.type.spec.code || !n.sameParent(o)) return !1;
          let i = n.node(-1),
            s = n.indexAfter(-1),
            a = y(i.contentMatchAt(s));
          if (!a || !i.canReplaceWith(s, s, a)) return !1;
          if (t) {
            let o = n.after(),
              i = e.tr.replaceWith(o, o, a.createAndFill());
            i.setSelection(r.Y1.near(i.doc.resolve(o), 1)), t(i.scrollIntoView());
          }
          return !0;
        },
        w = (e, t) => {
          let n = e.selection,
            { $from: o, $to: i } = n;
          if (n instanceof r.C1 || o.parent.inlineContent || i.parent.inlineContent) return !1;
          let s = y(i.parent.contentMatchAt(i.indexAfter()));
          if (!s || !s.isTextblock) return !1;
          if (t) {
            let n = (!o.parentOffset && i.index() < i.parent.childCount ? o : i).pos,
              a = e.tr.insert(n, s.createAndFill());
            a.setSelection(r.Bs.create(a.doc, n + 1)), t(a.scrollIntoView());
          }
          return !0;
        },
        b = (e, t) => {
          let { $cursor: n } = e.selection;
          if (!n || n.parent.content.size) return !1;
          if (n.depth > 1 && n.after() != n.end(-1)) {
            let r = n.before();
            if ((0, a.Ax)(e.doc, r)) return t && t(e.tr.split(r).scrollIntoView()), !0;
          }
          let r = n.blockRange(),
            o = r && (0, a.k9)(r);
          return null != o && (t && t(e.tr.lift(r, o).scrollIntoView()), !0);
        };
      var x;
      function k(e, t, n) {
        let o,
          i,
          l = t.nodeBefore,
          c = t.nodeAfter;
        if (l.type.spec.isolating || c.type.spec.isolating) return !1;
        if (
          (function (e, t, n) {
            let r = t.nodeBefore,
              o = t.nodeAfter,
              i = t.index();
            return !(
              !(r && o && r.type.compatibleContent(o.type)) ||
              (!r.content.size && t.parent.canReplace(i - 1, i)
                ? (n && n(e.tr.delete(t.pos - r.nodeSize, t.pos).scrollIntoView()), 0)
                : !t.parent.canReplace(i, i + 1) ||
                  (!o.isTextblock && !(0, a.Mn)(e.doc, t.pos)) ||
                  (n && n(e.tr.clearIncompatible(t.pos, r.type, r.contentMatchAt(r.childCount)).join(t.pos).scrollIntoView()), 0))
            );
          })(e, t, n)
        )
          return !0;
        let p = t.parent.canReplace(t.index(), t.index() + 1);
        if (p && (o = (i = l.contentMatchAt(l.childCount)).findWrapping(c.type)) && i.matchType(o[0] || c.type).validEnd) {
          if (n) {
            let r = t.pos + c.nodeSize,
              i = s.HY.empty;
            for (let e = o.length - 1; e >= 0; e--) i = s.HY.from(o[e].create(null, i));
            i = s.HY.from(l.copy(i));
            let d = e.tr.step(new a.FC(t.pos - 1, r, t.pos, r, new s.p2(i, 1, 0), o.length, !0)),
              p = r + 2 * o.length;
            (0, a.Mn)(d.doc, p) && d.join(p), n(d.scrollIntoView());
          }
          return !0;
        }
        let h = r.Y1.findFrom(t, 1),
          u = h && h.$from.blockRange(h.$to),
          f = u && (0, a.k9)(u);
        if (null != f && f >= t.depth) return n && n(e.tr.lift(u, f).scrollIntoView()), !0;
        if (p && d(c, "start", !0) && d(l, "end")) {
          let r = l,
            o = [];
          for (; o.push(r), !r.isTextblock; ) r = r.lastChild;
          let i = c,
            d = 1;
          for (; !i.isTextblock; i = i.firstChild) d++;
          if (r.canReplace(r.childCount, r.childCount, i.content)) {
            if (n) {
              let r = s.HY.empty;
              for (let e = o.length - 1; e >= 0; e--) r = s.HY.from(o[e].copy(r));
              n(
                e.tr
                  .step(new a.FC(t.pos - o.length, t.pos + c.nodeSize, t.pos + d, t.pos + c.nodeSize - d, new s.p2(r, o.length, 0), 0, !0))
                  .scrollIntoView()
              );
            }
            return !0;
          }
        }
        return !1;
      }
      function S(e) {
        return function (t, n) {
          let o = t.selection,
            i = e < 0 ? o.$from : o.$to,
            s = i.depth;
          for (; i.node(s).isInline; ) {
            if (!s) return !1;
            s--;
          }
          return !!i.node(s).isTextblock && (n && n(t.tr.setSelection(r.Bs.create(t.doc, e < 0 ? i.start(s) : i.end(s)))), !0);
        };
      }
      const O = S(-1),
        M = S(1);
      function C(e, t = null) {
        return function (n, r) {
          let o = !1;
          for (let r = 0; r < n.selection.ranges.length && !o; r++) {
            let {
              $from: { pos: i },
              $to: { pos: s }
            } = n.selection.ranges[r];
            n.doc.nodesBetween(i, s, (r, i) => {
              if (o) return !1;
              if (r.isTextblock && !r.hasMarkup(e, t))
                if (r.type == e) o = !0;
                else {
                  let t = n.doc.resolve(i),
                    r = t.index();
                  o = t.parent.canReplaceWith(r, r + 1, e);
                }
            });
          }
          if (!o) return !1;
          if (r) {
            let o = n.tr;
            for (let r = 0; r < n.selection.ranges.length; r++) {
              let {
                $from: { pos: i },
                $to: { pos: s }
              } = n.selection.ranges[r];
              o.setBlockType(i, s, e, t);
            }
            r(o.scrollIntoView());
          }
          return !0;
        };
      }
      function N(...e) {
        return function (t, n, r) {
          for (let o = 0; o < e.length; o++) if (e[o](t, n, r)) return !0;
          return !1;
        };
      }
      let T = N(l, c, p),
        E = N(l, u, f);
      const D = {
          Enter: N(g, w, b, (e, t) => {
            let { $from: n, $to: o } = e.selection;
            if (e.selection instanceof r.qv && e.selection.node.isBlock)
              return !(!n.parentOffset || !(0, a.Ax)(e.doc, n.pos) || (t && t(e.tr.split(n.pos).scrollIntoView()), 0));
            if (!n.parent.isBlock) return !1;
            if (t) {
              let i = o.parentOffset == o.parent.content.size,
                s = e.tr;
              (e.selection instanceof r.Bs || e.selection instanceof r.C1) && s.deleteSelection();
              let l = 0 == n.depth ? null : y(n.node(-1).contentMatchAt(n.indexAfter(-1))),
                c = x ? [x] : i && l ? [{ type: l }] : void 0,
                d = (0, a.Ax)(s.doc, s.mapping.map(n.pos), 1, c);
              if (
                (c || d || !(0, a.Ax)(s.doc, s.mapping.map(n.pos), 1, l ? [{ type: l }] : void 0) || (l && (c = [{ type: l }]), (d = !0)),
                d && (s.split(s.mapping.map(n.pos), 1, c), !i && !n.parentOffset && n.parent.type != l))
              ) {
                let e = s.mapping.map(n.before()),
                  t = s.doc.resolve(e);
                l && n.node(-1).canReplaceWith(t.index(), t.index() + 1, l) && s.setNodeMarkup(s.mapping.map(n.before()), l);
              }
              t(s.scrollIntoView());
            }
            return !0;
          }),
          "Mod-Enter": v,
          Backspace: T,
          "Mod-Backspace": T,
          "Shift-Backspace": T,
          Delete: E,
          "Mod-Delete": E,
          "Mod-a": (e, t) => (t && t(e.tr.setSelection(new r.C1(e.doc))), !0)
        },
        A = {
          "Ctrl-h": D.Backspace,
          "Alt-Backspace": D["Mod-Backspace"],
          "Ctrl-d": D.Delete,
          "Ctrl-Alt-Backspace": D["Mod-Delete"],
          "Alt-Delete": D["Mod-Delete"],
          "Alt-d": D["Mod-Delete"],
          "Ctrl-a": O,
          "Ctrl-e": M
        };
      for (let e in D) A[e] = D[e];
      function P(e) {
        const { state: t, transaction: n } = e;
        let { selection: r } = n,
          { doc: o } = n,
          { storedMarks: i } = n;
        return {
          ...t,
          apply: t.apply.bind(t),
          applyTransaction: t.applyTransaction.bind(t),
          filterTransaction: t.filterTransaction,
          plugins: t.plugins,
          schema: t.schema,
          reconfigure: t.reconfigure.bind(t),
          toJSON: t.toJSON.bind(t),
          get storedMarks() {
            return i;
          },
          get selection() {
            return r;
          },
          get doc() {
            return o;
          },
          get tr() {
            return (r = n.selection), (o = n.doc), (i = n.storedMarks), n;
          }
        };
      }
      "undefined" != typeof navigator
        ? /Mac|iP(hone|[oa]d)/.test(navigator.platform)
        : "undefined" != typeof os && os.platform && os.platform();
      class R {
        constructor(e) {
          (this.editor = e.editor), (this.rawCommands = this.editor.extensionManager.commands), (this.customState = e.state);
        }
        get hasCustomState() {
          return !!this.customState;
        }
        get state() {
          return this.customState || this.editor.state;
        }
        get commands() {
          const { rawCommands: e, editor: t, state: n } = this,
            { view: r } = t,
            { tr: o } = n,
            i = this.buildProps(o);
          return Object.fromEntries(
            Object.entries(e).map(([e, t]) => [
              e,
              (...e) => {
                const n = t(...e)(i);
                return o.getMeta("preventDispatch") || this.hasCustomState || r.dispatch(o), n;
              }
            ])
          );
        }
        get chain() {
          return () => this.createChain();
        }
        get can() {
          return () => this.createCan();
        }
        createChain(e, t = !0) {
          const { rawCommands: n, editor: r, state: o } = this,
            { view: i } = r,
            s = [],
            a = !!e,
            l = e || o.tr,
            c = {
              ...Object.fromEntries(
                Object.entries(n).map(([e, n]) => [
                  e,
                  (...e) => {
                    const r = this.buildProps(l, t),
                      o = n(...e)(r);
                    return s.push(o), c;
                  }
                ])
              ),
              run: () => (a || !t || l.getMeta("preventDispatch") || this.hasCustomState || i.dispatch(l), s.every((e) => !0 === e))
            };
          return c;
        }
        createCan(e) {
          const { rawCommands: t, state: n } = this,
            r = e || n.tr,
            o = this.buildProps(r, !1);
          return {
            ...Object.fromEntries(Object.entries(t).map(([e, t]) => [e, (...e) => t(...e)({ ...o, dispatch: void 0 })])),
            chain: () => this.createChain(r, !1)
          };
        }
        buildProps(e, t = !0) {
          const { rawCommands: n, editor: r, state: o } = this,
            { view: i } = r,
            s = {
              tr: e,
              editor: r,
              view: i,
              state: P({ state: o, transaction: e }),
              dispatch: t ? () => {} : void 0,
              chain: () => this.createChain(e, t),
              can: () => this.createCan(e),
              get commands() {
                return Object.fromEntries(Object.entries(n).map(([e, t]) => [e, (...e) => t(...e)(s)]));
              }
            };
          return s;
        }
      }
      class I {
        constructor() {
          this.callbacks = {};
        }
        on(e, t) {
          return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this;
        }
        emit(e, ...t) {
          const n = this.callbacks[e];
          return n && n.forEach((e) => e.apply(this, t)), this;
        }
        off(e, t) {
          const n = this.callbacks[e];
          return n && (t ? (this.callbacks[e] = n.filter((e) => e !== t)) : delete this.callbacks[e]), this;
        }
        removeAllListeners() {
          this.callbacks = {};
        }
      }
      function B(e, t, n) {
        return void 0 === e.config[t] && e.parent
          ? B(e.parent, t, n)
          : "function" == typeof e.config[t]
          ? e.config[t].bind({ ...n, parent: e.parent ? B(e.parent, t, n) : null })
          : e.config[t];
      }
      function $(e) {
        return {
          baseExtensions: e.filter((e) => "extension" === e.type),
          nodeExtensions: e.filter((e) => "node" === e.type),
          markExtensions: e.filter((e) => "mark" === e.type)
        };
      }
      function z(e) {
        const t = [],
          { nodeExtensions: n, markExtensions: r } = $(e),
          o = [...n, ...r],
          i = { default: null, rendered: !0, renderHTML: null, parseHTML: null, keepOnSplit: !0, isRequired: !1 };
        return (
          e.forEach((e) => {
            const n = B(e, "addGlobalAttributes", { name: e.name, options: e.options, storage: e.storage });
            n &&
              n().forEach((e) => {
                e.types.forEach((n) => {
                  Object.entries(e.attributes).forEach(([e, r]) => {
                    t.push({ type: n, name: e, attribute: { ...i, ...r } });
                  });
                });
              });
          }),
          o.forEach((e) => {
            const n = { name: e.name, options: e.options, storage: e.storage },
              r = B(e, "addAttributes", n);
            if (!r) return;
            const o = r();
            Object.entries(o).forEach(([n, r]) => {
              const o = { ...i, ...r };
              "function" == typeof (null == o ? void 0 : o.default) && (o.default = o.default()),
                (null == o ? void 0 : o.isRequired) && void 0 === (null == o ? void 0 : o.default) && delete o.default,
                t.push({ type: e.name, name: n, attribute: o });
            });
          }),
          t
        );
      }
      function j(e, t) {
        if ("string" == typeof e) {
          if (!t.nodes[e]) throw Error(`There is no node type named '${e}'. Maybe you forgot to add the extension?`);
          return t.nodes[e];
        }
        return e;
      }
      function V(...e) {
        return e
          .filter((e) => !!e)
          .reduce((e, t) => {
            const n = { ...e };
            return (
              Object.entries(t).forEach(([e, t]) => {
                if (n[e])
                  if ("class" === e) {
                    const r = t ? t.split(" ") : [],
                      o = n[e] ? n[e].split(" ") : [],
                      i = r.filter((e) => !o.includes(e));
                    n[e] = [...o, ...i].join(" ");
                  } else n[e] = "style" === e ? [n[e], t].join("; ") : t;
                else n[e] = t;
              }),
              n
            );
          }, {});
      }
      function F(e, t) {
        return t
          .filter((e) => e.attribute.rendered)
          .map((t) => (t.attribute.renderHTML ? t.attribute.renderHTML(e.attrs) || {} : { [t.name]: e.attrs[t.name] }))
          .reduce((e, t) => V(e, t), {});
      }
      function L(e) {
        return "function" == typeof e;
      }
      function H(e, t = void 0, ...n) {
        return L(e) ? (t ? e.bind(t)(...n) : e(...n)) : e;
      }
      function q(e, t) {
        return e.style
          ? e
          : {
              ...e,
              getAttrs: (n) => {
                const r = e.getAttrs ? e.getAttrs(n) : e.attrs;
                if (!1 === r) return !1;
                const o = t.reduce((e, t) => {
                  const r = t.attribute.parseHTML
                    ? t.attribute.parseHTML(n)
                    : (function (e) {
                        return "string" != typeof e
                          ? e
                          : e.match(/^[+-]?(?:\d*\.)?\d+$/)
                          ? Number(e)
                          : "true" === e || ("false" !== e && e);
                      })(n.getAttribute(t.name));
                  return null == r ? e : { ...e, [t.name]: r };
                }, {});
                return { ...r, ...o };
              }
            };
      }
      function W(e) {
        return Object.fromEntries(
          Object.entries(e).filter(
            ([e, t]) =>
              ("attrs" !== e ||
                !(function (e = {}) {
                  return 0 === Object.keys(e).length && e.constructor === Object;
                })(t)) &&
              null != t
          )
        );
      }
      function J(e, t) {
        var n;
        const r = z(e),
          { nodeExtensions: o, markExtensions: i } = $(e),
          a = null === (n = o.find((e) => B(e, "topNode"))) || void 0 === n ? void 0 : n.name,
          l = Object.fromEntries(
            o.map((n) => {
              const o = r.filter((e) => e.type === n.name),
                i = { name: n.name, options: n.options, storage: n.storage, editor: t },
                s = W({
                  ...e.reduce((e, t) => {
                    const r = B(t, "extendNodeSchema", i);
                    return { ...e, ...(r ? r(n) : {}) };
                  }, {}),
                  content: H(B(n, "content", i)),
                  marks: H(B(n, "marks", i)),
                  group: H(B(n, "group", i)),
                  inline: H(B(n, "inline", i)),
                  atom: H(B(n, "atom", i)),
                  selectable: H(B(n, "selectable", i)),
                  draggable: H(B(n, "draggable", i)),
                  code: H(B(n, "code", i)),
                  defining: H(B(n, "defining", i)),
                  isolating: H(B(n, "isolating", i)),
                  attrs: Object.fromEntries(
                    o.map((e) => {
                      var t;
                      return [e.name, { default: null === (t = null == e ? void 0 : e.attribute) || void 0 === t ? void 0 : t.default }];
                    })
                  )
                }),
                a = H(B(n, "parseHTML", i));
              a && (s.parseDOM = a.map((e) => q(e, o)));
              const l = B(n, "renderHTML", i);
              l && (s.toDOM = (e) => l({ node: e, HTMLAttributes: F(e, o) }));
              const c = B(n, "renderText", i);
              return c && (s.toText = c), [n.name, s];
            })
          ),
          c = Object.fromEntries(
            i.map((n) => {
              const o = r.filter((e) => e.type === n.name),
                i = { name: n.name, options: n.options, storage: n.storage, editor: t },
                s = W({
                  ...e.reduce((e, t) => {
                    const r = B(t, "extendMarkSchema", i);
                    return { ...e, ...(r ? r(n) : {}) };
                  }, {}),
                  inclusive: H(B(n, "inclusive", i)),
                  excludes: H(B(n, "excludes", i)),
                  group: H(B(n, "group", i)),
                  spanning: H(B(n, "spanning", i)),
                  code: H(B(n, "code", i)),
                  attrs: Object.fromEntries(
                    o.map((e) => {
                      var t;
                      return [e.name, { default: null === (t = null == e ? void 0 : e.attribute) || void 0 === t ? void 0 : t.default }];
                    })
                  )
                }),
                a = H(B(n, "parseHTML", i));
              a && (s.parseDOM = a.map((e) => q(e, o)));
              const l = B(n, "renderHTML", i);
              return l && (s.toDOM = (e) => l({ mark: e, HTMLAttributes: F(e, o) })), [n.name, s];
            })
          );
        return new s.V_({ topNode: a, nodes: l, marks: c });
      }
      function _(e, t) {
        return t.nodes[e] || t.marks[e] || null;
      }
      function K(e, t) {
        return Array.isArray(t) ? t.some((t) => ("string" == typeof t ? t : t.name) === e.name) : t;
      }
      const Y = (e, t = 500) => {
        let n = "";
        const r = e.parentOffset;
        return (
          e.parent.nodesBetween(Math.max(0, r - t), r, (e, t, o, i) => {
            var s, a;
            const l =
              (null === (a = (s = e.type.spec).toText) || void 0 === a ? void 0 : a.call(s, { node: e, pos: t, parent: o, index: i })) ||
              e.textContent ||
              "%leaf%";
            n += l.slice(0, Math.max(0, r - t));
          }),
          n
        );
      };
      function U(e) {
        return "[object RegExp]" === Object.prototype.toString.call(e);
      }
      class G {
        constructor(e) {
          (this.find = e.find), (this.handler = e.handler);
        }
      }
      const X = (e, t) => {
        if (U(t)) return t.exec(e);
        const n = t(e);
        if (!n) return null;
        const r = [n.text];
        return (
          (r.index = n.index),
          (r.input = e),
          (r.data = n.data),
          n.replaceWith &&
            (n.text.includes(n.replaceWith) ||
              console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'),
            r.push(n.replaceWith)),
          r
        );
      };
      function Z(e) {
        var t;
        const { editor: n, from: r, to: o, text: i, rules: s, plugin: a } = e,
          { view: l } = n;
        if (l.composing) return !1;
        const c = l.state.doc.resolve(r);
        if (
          c.parent.type.spec.code ||
          (null === (t = c.nodeBefore || c.nodeAfter) || void 0 === t ? void 0 : t.marks.find((e) => e.type.spec.code))
        )
          return !1;
        let d = !1;
        const p = Y(c) + i;
        return (
          s.forEach((e) => {
            if (d) return;
            const t = X(p, e.find);
            if (!t) return;
            const s = l.state.tr,
              c = P({ state: l.state, transaction: s }),
              h = { from: r - (t[0].length - i.length), to: o },
              { commands: u, chain: f, can: m } = new R({ editor: n, state: c });
            null !== e.handler({ state: c, range: h, match: t, commands: u, chain: f, can: m }) &&
              s.steps.length &&
              (s.setMeta(a, { transform: s, from: r, to: o, text: i }), l.dispatch(s), (d = !0));
          }),
          d
        );
      }
      function Q(e) {
        const { editor: t, rules: n } = e,
          o = new r.Sy({
            state: { init: () => null, apply: (e, t) => e.getMeta(o) || (e.selectionSet || e.docChanged ? null : t) },
            props: {
              handleTextInput: (e, r, i, s) => Z({ editor: t, from: r, to: i, text: s, rules: n, plugin: o }),
              handleDOMEvents: {
                compositionend: (e) => (
                  setTimeout(() => {
                    const { $cursor: r } = e.state.selection;
                    r && Z({ editor: t, from: r.pos, to: r.pos, text: "", rules: n, plugin: o });
                  }),
                  !1
                )
              },
              handleKeyDown(e, r) {
                if ("Enter" !== r.key) return !1;
                const { $cursor: i } = e.state.selection;
                return !!i && Z({ editor: t, from: i.pos, to: i.pos, text: "\n", rules: n, plugin: o });
              }
            },
            isInputRules: !0
          });
        return o;
      }
      class ee {
        constructor(e) {
          (this.find = e.find), (this.handler = e.handler);
        }
      }
      function te(e) {
        const { editor: t, rules: n } = e;
        let o = null,
          i = !1,
          s = !1,
          a = new ClipboardEvent("paste"),
          l = new DragEvent("drop");
        const c = n.map(
          (e) =>
            new r.Sy({
              view(e) {
                const t = (t) => {
                  var n;
                  o = (null === (n = e.dom.parentElement) || void 0 === n ? void 0 : n.contains(t.target)) ? e.dom.parentElement : null;
                };
                return (
                  window.addEventListener("dragstart", t),
                  {
                    destroy() {
                      window.removeEventListener("dragstart", t);
                    }
                  }
                );
              },
              props: {
                handleDOMEvents: {
                  drop: (e, t) => ((s = o === e.dom.parentElement), (l = t), !1),
                  paste: (e, t) => {
                    var n;
                    const r = null === (n = t.clipboardData) || void 0 === n ? void 0 : n.getData("text/html");
                    return (a = t), (i = !!(null == r ? void 0 : r.includes("data-pm-slice"))), !1;
                  }
                }
              },
              appendTransaction: (n, r, o) => {
                const c = n[0],
                  d = "paste" === c.getMeta("uiEvent") && !i,
                  p = "drop" === c.getMeta("uiEvent") && !s;
                if (!d && !p) return;
                const h = r.doc.content.findDiffStart(o.doc.content),
                  u = r.doc.content.findDiffEnd(o.doc.content);
                if ("number" != typeof h || !u || h === u.b) return;
                const f = o.tr,
                  m = P({ state: o, transaction: f }),
                  g = (function (e) {
                    const { editor: t, state: n, from: r, to: o, rule: i, pasteEvent: s, dropEvent: a } = e,
                      { commands: l, chain: c, can: d } = new R({ editor: t, state: n }),
                      p = [];
                    return (
                      n.doc.nodesBetween(r, o, (e, t) => {
                        if (!e.isTextblock || e.type.spec.code) return;
                        const h = Math.max(r, t),
                          u = Math.min(o, t + e.content.size);
                        ((e, t) => {
                          if (U(t)) return [...e.matchAll(t)];
                          const n = t(e);
                          return n
                            ? n.map((t) => {
                                const n = [t.text];
                                return (
                                  (n.index = t.index),
                                  (n.input = e),
                                  (n.data = t.data),
                                  t.replaceWith &&
                                    (t.text.includes(t.replaceWith) ||
                                      console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'),
                                    n.push(t.replaceWith)),
                                  n
                                );
                              })
                            : [];
                        })(e.textBetween(h - t, u - t, void 0, "￼"), i.find).forEach((e) => {
                          if (void 0 === e.index) return;
                          const t = h + e.index + 1,
                            r = t + e[0].length,
                            o = { from: n.tr.mapping.map(t), to: n.tr.mapping.map(r) },
                            u = i.handler({ state: n, range: o, match: e, commands: l, chain: c, can: d, pasteEvent: s, dropEvent: a });
                          p.push(u);
                        });
                      }),
                      p.every((e) => null !== e)
                    );
                  })({ editor: t, state: m, from: Math.max(h - 1, 0), to: u.b - 1, rule: e, pasteEvent: a, dropEvent: l });
                return g && f.steps.length ? ((l = new DragEvent("drop")), (a = new ClipboardEvent("paste")), f) : void 0;
              }
            })
        );
        return c;
      }
      class ne {
        constructor(e, t) {
          (this.splittableMarks = []),
            (this.editor = t),
            (this.extensions = ne.resolve(e)),
            (this.schema = J(this.extensions, t)),
            this.extensions.forEach((e) => {
              var t;
              this.editor.extensionStorage[e.name] = e.storage;
              const n = { name: e.name, options: e.options, storage: e.storage, editor: this.editor, type: _(e.name, this.schema) };
              "mark" === e.type && (null === (t = H(B(e, "keepOnSplit", n))) || void 0 === t || t) && this.splittableMarks.push(e.name);
              const r = B(e, "onBeforeCreate", n);
              r && this.editor.on("beforeCreate", r);
              const o = B(e, "onCreate", n);
              o && this.editor.on("create", o);
              const i = B(e, "onUpdate", n);
              i && this.editor.on("update", i);
              const s = B(e, "onSelectionUpdate", n);
              s && this.editor.on("selectionUpdate", s);
              const a = B(e, "onTransaction", n);
              a && this.editor.on("transaction", a);
              const l = B(e, "onFocus", n);
              l && this.editor.on("focus", l);
              const c = B(e, "onBlur", n);
              c && this.editor.on("blur", c);
              const d = B(e, "onDestroy", n);
              d && this.editor.on("destroy", d);
            });
        }
        static resolve(e) {
          const t = ne.sort(ne.flatten(e)),
            n = (function (e) {
              const t = e.filter((t, n) => e.indexOf(t) !== n);
              return [...new Set(t)];
            })(t.map((e) => e.name));
          return (
            n.length &&
              console.warn(
                `[tiptap warn]: Duplicate extension names found: [${n.map((e) => `'${e}'`).join(", ")}]. This can lead to issues.`
              ),
            t
          );
        }
        static flatten(e) {
          return e
            .map((e) => {
              const t = B(e, "addExtensions", { name: e.name, options: e.options, storage: e.storage });
              return t ? [e, ...this.flatten(t())] : e;
            })
            .flat(10);
        }
        static sort(e) {
          return e.sort((e, t) => {
            const n = B(e, "priority") || 100,
              r = B(t, "priority") || 100;
            return n > r ? -1 : n < r ? 1 : 0;
          });
        }
        get commands() {
          return this.extensions.reduce((e, t) => {
            const n = B(t, "addCommands", {
              name: t.name,
              options: t.options,
              storage: t.storage,
              editor: this.editor,
              type: _(t.name, this.schema)
            });
            return n ? { ...e, ...n() } : e;
          }, {});
        }
        get plugins() {
          const { editor: e } = this,
            t = ne.sort([...this.extensions].reverse()),
            n = [],
            r = [],
            o = t
              .map((t) => {
                const o = { name: t.name, options: t.options, storage: t.storage, editor: e, type: _(t.name, this.schema) },
                  s = [],
                  a = B(t, "addKeyboardShortcuts", o);
                let l = {};
                if (("mark" === t.type && t.config.exitable && (l.ArrowRight = () => nt.handleExit({ editor: e, mark: t })), a)) {
                  const t = Object.fromEntries(Object.entries(a()).map(([t, n]) => [t, () => n({ editor: e })]));
                  l = { ...l, ...t };
                }
                const c = (0, i.h)(l);
                s.push(c);
                const d = B(t, "addInputRules", o);
                K(t, e.options.enableInputRules) && d && n.push(...d());
                const p = B(t, "addPasteRules", o);
                K(t, e.options.enablePasteRules) && p && r.push(...p());
                const h = B(t, "addProseMirrorPlugins", o);
                if (h) {
                  const e = h();
                  s.push(...e);
                }
                return s;
              })
              .flat();
          return [Q({ editor: e, rules: n }), ...te({ editor: e, rules: r }), ...o];
        }
        get attributes() {
          return z(this.extensions);
        }
        get nodeViews() {
          const { editor: e } = this,
            { nodeExtensions: t } = $(this.extensions);
          return Object.fromEntries(
            t
              .filter((e) => !!B(e, "addNodeView"))
              .map((t) => {
                const n = this.attributes.filter((e) => e.type === t.name),
                  r = { name: t.name, options: t.options, storage: t.storage, editor: e, type: j(t.name, this.schema) },
                  o = B(t, "addNodeView", r);
                return o
                  ? [
                      t.name,
                      (r, i, s, a) => {
                        const l = F(r, n);
                        return o()({ editor: e, node: r, getPos: s, decorations: a, HTMLAttributes: l, extension: t });
                      }
                    ]
                  : [];
              })
          );
        }
      }
      function re(e) {
        return (
          "Object" ===
            (function (e) {
              return Object.prototype.toString.call(e).slice(8, -1);
            })(e) &&
          e.constructor === Object &&
          Object.getPrototypeOf(e) === Object.prototype
        );
      }
      function oe(e, t) {
        const n = { ...e };
        return (
          re(e) &&
            re(t) &&
            Object.keys(t).forEach((r) => {
              re(t[r]) ? (r in e ? (n[r] = oe(e[r], t[r])) : Object.assign(n, { [r]: t[r] })) : Object.assign(n, { [r]: t[r] });
            }),
          n
        );
      }
      class ie {
        constructor(e = {}) {
          (this.type = "extension"),
            (this.name = "extension"),
            (this.parent = null),
            (this.child = null),
            (this.config = { name: this.name, defaultOptions: {} }),
            (this.config = { ...this.config, ...e }),
            (this.name = this.config.name),
            e.defaultOptions &&
              console.warn(
                `[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`
              ),
            (this.options = this.config.defaultOptions),
            this.config.addOptions && (this.options = H(B(this, "addOptions", { name: this.name }))),
            (this.storage = H(B(this, "addStorage", { name: this.name, options: this.options })) || {});
        }
        static create(e = {}) {
          return new ie(e);
        }
        configure(e = {}) {
          const t = this.extend();
          return (t.options = oe(this.options, e)), (t.storage = H(B(t, "addStorage", { name: t.name, options: t.options }))), t;
        }
        extend(e = {}) {
          const t = new ie(e);
          return (
            (t.parent = this),
            (this.child = t),
            (t.name = e.name ? e.name : t.parent.name),
            e.defaultOptions &&
              console.warn(
                `[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`
              ),
            (t.options = H(B(t, "addOptions", { name: t.name }))),
            (t.storage = H(B(t, "addStorage", { name: t.name, options: t.options }))),
            t
          );
        }
      }
      function se(e, t, n) {
        const { from: r, to: o } = t,
          { blockSeparator: i = "\n\n", textSerializers: s = {} } = n || {};
        let a = "",
          l = !0;
        return (
          e.nodesBetween(r, o, (e, n, c, d) => {
            var p;
            const h = null == s ? void 0 : s[e.type.name];
            h
              ? (e.isBlock && !l && ((a += i), (l = !0)), c && (a += h({ node: e, pos: n, parent: c, index: d, range: t })))
              : e.isText
              ? ((a += null === (p = null == e ? void 0 : e.text) || void 0 === p ? void 0 : p.slice(Math.max(r, n) - n, o - n)), (l = !1))
              : e.isBlock && !l && ((a += i), (l = !0));
          }),
          a
        );
      }
      function ae(e) {
        return Object.fromEntries(
          Object.entries(e.nodes)
            .filter(([, e]) => e.spec.toText)
            .map(([e, t]) => [e, t.spec.toText])
        );
      }
      const le = ie.create({
        name: "clipboardTextSerializer",
        addProseMirrorPlugins() {
          return [
            new r.Sy({
              key: new r.H$("clipboardTextSerializer"),
              props: {
                clipboardTextSerializer: () => {
                  const { editor: e } = this,
                    { state: t, schema: n } = e,
                    { doc: r, selection: o } = t,
                    { ranges: i } = o;
                  return se(
                    r,
                    { from: Math.min(...i.map((e) => e.$from.pos)), to: Math.max(...i.map((e) => e.$to.pos)) },
                    { textSerializers: ae(n) }
                  );
                }
              }
            })
          ];
        }
      });
      function ce(e, t, n = { strict: !0 }) {
        const r = Object.keys(t);
        return !r.length || r.every((r) => (n.strict ? t[r] === e[r] : U(t[r]) ? t[r].test(e[r]) : t[r] === e[r]));
      }
      function de(e, t, n = {}) {
        return e.find((e) => e.type === t && ce(e.attrs, n));
      }
      function pe(e, t, n = {}) {
        return !!de(e, t, n);
      }
      function he(e, t, n = {}) {
        if (!e || !t) return;
        let r = e.parent.childAfter(e.parentOffset);
        if ((e.parentOffset === r.offset && 0 !== r.offset && (r = e.parent.childBefore(e.parentOffset)), !r.node)) return;
        const o = de([...r.node.marks], t, n);
        if (!o) return;
        let i = r.index,
          s = e.start() + r.offset,
          a = i + 1,
          l = s + r.node.nodeSize;
        for (de([...r.node.marks], t, n); i > 0 && o.isInSet(e.parent.child(i - 1).marks); ) (i -= 1), (s -= e.parent.child(i).nodeSize);
        for (; a < e.parent.childCount && pe([...e.parent.child(a).marks], t, n); ) (l += e.parent.child(a).nodeSize), (a += 1);
        return { from: s, to: l };
      }
      function ue(e, t) {
        if ("string" == typeof e) {
          if (!t.marks[e]) throw Error(`There is no mark type named '${e}'. Maybe you forgot to add the extension?`);
          return t.marks[e];
        }
        return e;
      }
      function fe(e) {
        return e instanceof r.Bs;
      }
      function me(e = 0, t = 0, n = 0) {
        return Math.min(Math.max(e, t), n);
      }
      function ge(e, t = null) {
        if (!t) return null;
        const n = r.Y1.atStart(e),
          o = r.Y1.atEnd(e);
        if ("start" === t || !0 === t) return n;
        if ("end" === t) return o;
        const i = n.from,
          s = o.to;
        return "all" === t ? r.Bs.create(e, me(0, i, s), me(e.content.size, i, s)) : r.Bs.create(e, me(t, i, s), me(t, i, s));
      }
      function ye() {
        return (
          ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) ||
          (navigator.userAgent.includes("Mac") && "ontouchend" in document)
        );
      }
      function ve(e) {
        const t = `<body>${e}</body>`;
        return new window.DOMParser().parseFromString(t, "text/html").body;
      }
      function we(e, t, n) {
        if (((n = { slice: !0, parseOptions: {}, ...n }), "object" == typeof e && null !== e))
          try {
            return Array.isArray(e) && e.length > 0 ? s.HY.fromArray(e.map((e) => t.nodeFromJSON(e))) : t.nodeFromJSON(e);
          } catch (r) {
            return console.warn("[tiptap warn]: Invalid content.", "Passed value:", e, "Error:", r), we("", t, n);
          }
        if ("string" == typeof e) {
          const r = s.aw.fromSchema(t);
          return n.slice ? r.parseSlice(ve(e), n.parseOptions).content : r.parse(ve(e), n.parseOptions);
        }
        return we("", t, n);
      }
      function be() {
        return "undefined" != typeof navigator && /Mac/.test(navigator.platform);
      }
      function xe(e, t, n = {}) {
        const { from: r, to: o, empty: i } = e.selection,
          s = t ? j(t, e.schema) : null,
          a = [];
        e.doc.nodesBetween(r, o, (e, t) => {
          if (e.isText) return;
          const n = Math.max(r, t),
            i = Math.min(o, t + e.nodeSize);
          a.push({ node: e, from: n, to: i });
        });
        const l = o - r,
          c = a.filter((e) => !s || s.name === e.node.type.name).filter((e) => ce(e.node.attrs, n, { strict: !1 }));
        return i ? !!c.length : c.reduce((e, t) => e + t.to - t.from, 0) >= l;
      }
      function ke(e, t) {
        return t.nodes[e] ? "node" : t.marks[e] ? "mark" : null;
      }
      function Se(e, t) {
        const n = "string" == typeof t ? [t] : t;
        return Object.keys(e).reduce((t, r) => (n.includes(r) || (t[r] = e[r]), t), {});
      }
      function Oe(e, t, n = {}) {
        return we(e, t, { slice: !1, parseOptions: n });
      }
      function Me(e, t) {
        const n = ue(t, e.schema),
          { from: r, to: o, empty: i } = e.selection,
          s = [];
        i
          ? (e.storedMarks && s.push(...e.storedMarks), s.push(...e.selection.$head.marks()))
          : e.doc.nodesBetween(r, o, (e) => {
              s.push(...e.marks);
            });
        const a = s.find((e) => e.type.name === n.name);
        return a ? { ...a.attrs } : {};
      }
      function Ce(e, t) {
        const n = new a.wx(e);
        return (
          t.forEach((e) => {
            e.steps.forEach((e) => {
              n.step(e);
            });
          }),
          n
        );
      }
      function Ne(e, t, n) {
        const r = [];
        return (
          e.nodesBetween(t.from, t.to, (e, t) => {
            n(e) && r.push({ node: e, pos: t });
          }),
          r
        );
      }
      function Te(e) {
        return (t) =>
          (function (e, t) {
            for (let n = e.depth; n > 0; n -= 1) {
              const r = e.node(n);
              if (t(r)) return { pos: n > 0 ? e.before(n) : 0, start: e.start(n), depth: n, node: r };
            }
          })(t.$from, e);
      }
      function Ee(e, t) {
        const n = s.PW.fromSchema(t).serializeFragment(e),
          r = document.implementation.createHTMLDocument().createElement("div");
        return r.appendChild(n), r.innerHTML;
      }
      function De(e, t) {
        return J(ne.resolve(e), t);
      }
      function Ae(e, t) {
        const n = De(t);
        return Ee(s.NB.fromJSON(n, e).content, n);
      }
      function Pe(e, t) {
        const n = De(t),
          r = ve(e);
        return s.aw.fromSchema(n).parse(r).toJSON();
      }
      function Re(e, t) {
        const n = ke("string" == typeof t ? t : t.name, e.schema);
        return "node" === n
          ? (function (e, t) {
              const n = j(t, e.schema),
                { from: r, to: o } = e.selection,
                i = [];
              e.doc.nodesBetween(r, o, (e) => {
                i.push(e);
              });
              const s = i.reverse().find((e) => e.type.name === n.name);
              return s ? { ...s.attrs } : {};
            })(e, t)
          : "mark" === n
          ? Me(e, t)
          : {};
      }
      function Ie(e) {
        const { mapping: t, steps: n } = e,
          r = [];
        return (
          t.maps.forEach((e, o) => {
            const i = [];
            if (e.ranges.length)
              e.forEach((e, t) => {
                i.push({ from: e, to: t });
              });
            else {
              const { from: e, to: t } = n[o];
              if (void 0 === e || void 0 === t) return;
              i.push({ from: e, to: t });
            }
            i.forEach(({ from: e, to: n }) => {
              const i = t.slice(o).map(e, -1),
                s = t.slice(o).map(n),
                a = t.invert().map(i, -1),
                l = t.invert().map(s);
              r.push({ oldRange: { from: a, to: l }, newRange: { from: i, to: s } });
            });
          }),
          (function (e) {
            const t = (function (e, t = JSON.stringify) {
              const n = {};
              return e.filter((e) => {
                const r = t(e);
                return !Object.prototype.hasOwnProperty.call(n, r) && (n[r] = !0);
              });
            })(e);
            return 1 === t.length
              ? t
              : t.filter(
                  (e, n) =>
                    !t
                      .filter((e, t) => t !== n)
                      .some(
                        (t) =>
                          e.oldRange.from >= t.oldRange.from &&
                          e.oldRange.to <= t.oldRange.to &&
                          e.newRange.from >= t.newRange.from &&
                          e.newRange.to <= t.newRange.to
                      )
                );
          })(r)
        );
      }
      function Be(e, t, n) {
        const r = [];
        return (
          e === t
            ? n
                .resolve(e)
                .marks()
                .forEach((t) => {
                  const o = he(n.resolve(e - 1), t.type);
                  o && r.push({ mark: t, ...o });
                })
            : n.nodesBetween(e, t, (e, t) => {
                r.push(...e.marks.map((n) => ({ from: t, to: t + e.nodeSize, mark: n })));
              }),
          r
        );
      }
      function $e(e, t, n) {
        return Object.fromEntries(
          Object.entries(n).filter(([n]) => {
            const r = e.find((e) => e.type === t && e.name === n);
            return !!r && r.attribute.keepOnSplit;
          })
        );
      }
      function ze(e, t, n = {}) {
        const { empty: r, ranges: o } = e.selection,
          i = t ? ue(t, e.schema) : null;
        if (r)
          return !!(e.storedMarks || e.selection.$from.marks())
            .filter((e) => !i || i.name === e.type.name)
            .find((e) => ce(e.attrs, n, { strict: !1 }));
        let s = 0;
        const a = [];
        if (
          (o.forEach(({ $from: t, $to: n }) => {
            const r = t.pos,
              o = n.pos;
            e.doc.nodesBetween(r, o, (e, t) => {
              if (!e.isText && !e.marks.length) return;
              const n = Math.max(r, t),
                i = Math.min(o, t + e.nodeSize);
              (s += i - n), a.push(...e.marks.map((e) => ({ mark: e, from: n, to: i })));
            });
          }),
          0 === s)
        )
          return !1;
        const l = a
            .filter((e) => !i || i.name === e.mark.type.name)
            .filter((e) => ce(e.mark.attrs, n, { strict: !1 }))
            .reduce((e, t) => e + t.to - t.from, 0),
          c = a.filter((e) => !i || (e.mark.type !== i && e.mark.type.excludes(i))).reduce((e, t) => e + t.to - t.from, 0);
        return (l > 0 ? l + c : l) >= s;
      }
      function je(e, t) {
        const { nodeExtensions: n } = $(t),
          r = n.find((t) => t.name === e);
        if (!r) return !1;
        const o = H(B(r, "group", { name: r.name, options: r.options, storage: r.storage }));
        return "string" == typeof o && o.split(" ").includes("list");
      }
      function Ve(e) {
        return e instanceof r.qv;
      }
      function Fe(e, t, n) {
        const r = e.state.doc.content.size,
          o = me(t, 0, r),
          i = me(n, 0, r),
          s = e.coordsAtPos(o),
          a = e.coordsAtPos(i, -1),
          l = Math.min(s.top, a.top),
          c = Math.max(s.bottom, a.bottom),
          d = Math.min(s.left, a.left),
          p = Math.max(s.right, a.right),
          h = { top: l, bottom: c, left: d, right: p, width: p - d, height: c - l, x: d, y: l };
        return { ...h, toJSON: () => h };
      }
      function Le(e, t) {
        const n = e.storedMarks || (e.selection.$to.parentOffset && e.selection.$from.marks());
        if (n) {
          const r = n.filter((e) => (null == t ? void 0 : t.includes(e.type.name)));
          e.tr.ensureMarks(r);
        }
      }
      const He = (e, t) => {
          const n = Te((e) => e.type === t)(e.selection);
          if (!n) return !0;
          const r = e.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
          if (void 0 === r) return !0;
          const o = e.doc.nodeAt(r);
          return n.node.type !== (null == o ? void 0 : o.type) || !(0, a.Mn)(e.doc, n.pos) || (e.join(n.pos), !0);
        },
        qe = (e, t) => {
          const n = Te((e) => e.type === t)(e.selection);
          if (!n) return !0;
          const r = e.doc.resolve(n.start).after(n.depth);
          if (void 0 === r) return !0;
          const o = e.doc.nodeAt(r);
          return n.node.type !== (null == o ? void 0 : o.type) || !(0, a.Mn)(e.doc, r) || (e.join(r), !0);
        };
      var We = Object.freeze({
        __proto__: null,
        blur:
          () =>
          ({ editor: e, view: t }) => (
            requestAnimationFrame(() => {
              var n;
              e.isDestroyed ||
                (t.dom.blur(),
                null === (n = null === window || void 0 === window ? void 0 : window.getSelection()) ||
                  void 0 === n ||
                  n.removeAllRanges());
            }),
            !0
          ),
        clearContent:
          (e = !1) =>
          ({ commands: t }) =>
            t.setContent("", e),
        clearNodes:
          () =>
          ({ state: e, tr: t, dispatch: n }) => {
            const { selection: r } = t,
              { ranges: o } = r;
            return (
              !n ||
              (o.forEach(({ $from: n, $to: r }) => {
                e.doc.nodesBetween(n.pos, r.pos, (e, n) => {
                  if (e.type.isText) return;
                  const { doc: r, mapping: o } = t,
                    i = r.resolve(o.map(n)),
                    s = r.resolve(o.map(n + e.nodeSize)),
                    l = i.blockRange(s);
                  if (!l) return;
                  const c = (0, a.k9)(l);
                  if (e.type.isTextblock) {
                    const { defaultType: e } = i.parent.contentMatchAt(i.index());
                    t.setNodeMarkup(l.start, e);
                  }
                  (c || 0 === c) && t.lift(l, c);
                });
              }),
              !0)
            );
          },
        command: (e) => (t) => e(t),
        createParagraphNear:
          () =>
          ({ state: e, dispatch: t }) =>
            w(e, t),
        cut:
          (e, t) =>
          ({ editor: n, tr: o }) => {
            const { state: i } = n,
              s = i.doc.slice(e.from, e.to);
            o.deleteRange(e.from, e.to);
            const a = o.mapping.map(t);
            return o.insert(a, s.content), o.setSelection(new r.Bs(o.doc.resolve(a - 1))), !0;
          },
        deleteCurrentNode:
          () =>
          ({ tr: e, dispatch: t }) => {
            const { selection: n } = e,
              r = n.$anchor.node();
            if (r.content.size > 0) return !1;
            const o = e.selection.$anchor;
            for (let n = o.depth; n > 0; n -= 1)
              if (o.node(n).type === r.type) {
                if (t) {
                  const t = o.before(n),
                    r = o.after(n);
                  e.delete(t, r).scrollIntoView();
                }
                return !0;
              }
            return !1;
          },
        deleteNode:
          (e) =>
          ({ tr: t, state: n, dispatch: r }) => {
            const o = j(e, n.schema),
              i = t.selection.$anchor;
            for (let e = i.depth; e > 0; e -= 1)
              if (i.node(e).type === o) {
                if (r) {
                  const n = i.before(e),
                    r = i.after(e);
                  t.delete(n, r).scrollIntoView();
                }
                return !0;
              }
            return !1;
          },
        deleteRange:
          (e) =>
          ({ tr: t, dispatch: n }) => {
            const { from: r, to: o } = e;
            return n && t.delete(r, o), !0;
          },
        deleteSelection:
          () =>
          ({ state: e, dispatch: t }) =>
            l(e, t),
        enter:
          () =>
          ({ commands: e }) =>
            e.keyboardShortcut("Enter"),
        exitCode:
          () =>
          ({ state: e, dispatch: t }) =>
            v(e, t),
        extendMarkRange:
          (e, t = {}) =>
          ({ tr: n, state: o, dispatch: i }) => {
            const s = ue(e, o.schema),
              { doc: a, selection: l } = n,
              { $from: c, from: d, to: p } = l;
            if (i) {
              const e = he(c, s, t);
              if (e && e.from <= d && e.to >= p) {
                const t = r.Bs.create(a, e.from, e.to);
                n.setSelection(t);
              }
            }
            return !0;
          },
        first: (e) => (t) => {
          const n = "function" == typeof e ? e(t) : e;
          for (let e = 0; e < n.length; e += 1) if (n[e](t)) return !0;
          return !1;
        },
        focus:
          (e = null, t = {}) =>
          ({ editor: n, view: r, tr: o, dispatch: i }) => {
            t = { scrollIntoView: !0, ...t };
            const s = () => {
              ye() && r.dom.focus(),
                requestAnimationFrame(() => {
                  n.isDestroyed || (r.focus(), (null == t ? void 0 : t.scrollIntoView) && n.commands.scrollIntoView());
                });
            };
            if ((r.hasFocus() && null === e) || !1 === e) return !0;
            if (i && null === e && !fe(n.state.selection)) return s(), !0;
            const a = ge(o.doc, e) || n.state.selection,
              l = n.state.selection.eq(a);
            return i && (l || o.setSelection(a), l && o.storedMarks && o.setStoredMarks(o.storedMarks), s()), !0;
          },
        forEach: (e, t) => (n) => e.every((e, r) => t(e, { ...n, index: r })),
        insertContent:
          (e, t) =>
          ({ tr: n, commands: r }) =>
            r.insertContentAt({ from: n.selection.from, to: n.selection.to }, e, t),
        insertContentAt:
          (e, t, n) =>
          ({ tr: o, dispatch: i, editor: s }) => {
            if (i) {
              n = { parseOptions: {}, updateSelection: !0, ...n };
              const i = we(t, s.schema, { parseOptions: { preserveWhitespace: "full", ...n.parseOptions } });
              if ("<>" === i.toString()) return !0;
              let { from: l, to: c } = "number" == typeof e ? { from: e, to: e } : { from: e.from, to: e.to },
                d = !0,
                p = !0;
              if (
                ((i.toString().startsWith("<") ? i : [i]).forEach((e) => {
                  e.check(), (d = !!d && e.isText && 0 === e.marks.length), (p = !!p && e.isBlock);
                }),
                l === c && p)
              ) {
                const { parent: e } = o.doc.resolve(l);
                e.isTextblock && !e.type.spec.code && !e.childCount && ((l -= 1), (c += 1));
              }
              d
                ? Array.isArray(t)
                  ? o.insertText(t.map((e) => e.text || "").join(""), l, c)
                  : "object" == typeof t && t && t.text
                  ? o.insertText(t.text, l, c)
                  : o.insertText(t, l, c)
                : o.replaceWith(l, c, i),
                n.updateSelection &&
                  (function (e, t, n) {
                    const o = e.steps.length - 1;
                    if (o < t) return;
                    const i = e.steps[o];
                    if (!(i instanceof a.Pu || i instanceof a.FC)) return;
                    const s = e.mapping.maps[o];
                    let l = 0;
                    s.forEach((e, t, n, r) => {
                      0 === l && (l = r);
                    }),
                      e.setSelection(r.Y1.near(e.doc.resolve(l), -1));
                  })(o, o.steps.length - 1);
            }
            return !0;
          },
        joinUp:
          () =>
          ({ state: e, dispatch: t }) =>
            ((e, t) => {
              let n,
                o = e.selection,
                i = o instanceof r.qv;
              if (i) {
                if (o.node.isTextblock || !(0, a.Mn)(e.doc, o.from)) return !1;
                n = o.from;
              } else if (((n = (0, a.GJ)(e.doc, o.from, -1)), null == n)) return !1;
              if (t) {
                let o = e.tr.join(n);
                i && o.setSelection(r.qv.create(o.doc, n - e.doc.resolve(n).nodeBefore.nodeSize)), t(o.scrollIntoView());
              }
              return !0;
            })(e, t),
        joinDown:
          () =>
          ({ state: e, dispatch: t }) =>
            ((e, t) => {
              let n,
                o = e.selection;
              if (o instanceof r.qv) {
                if (o.node.isTextblock || !(0, a.Mn)(e.doc, o.to)) return !1;
                n = o.to;
              } else if (((n = (0, a.GJ)(e.doc, o.to, 1)), null == n)) return !1;
              return t && t(e.tr.join(n).scrollIntoView()), !0;
            })(e, t),
        joinBackward:
          () =>
          ({ state: e, dispatch: t }) =>
            c(e, t),
        joinForward:
          () =>
          ({ state: e, dispatch: t }) =>
            u(e, t),
        joinItemBackward:
          () =>
          ({ tr: e, state: t, dispatch: n }) => {
            try {
              const r = (0, a.GJ)(t.doc, t.selection.$from.pos, -1);
              return null != r && (e.join(r, 2), n && n(e), !0);
            } catch {
              return !1;
            }
          },
        joinItemForward:
          () =>
          ({ state: e, dispatch: t, tr: n }) => {
            try {
              const r = (0, a.GJ)(e.doc, e.selection.$from.pos, 1);
              return null != r && (n.join(r, 2), t && t(n), !0);
            } catch (e) {
              return !1;
            }
          },
        keyboardShortcut:
          (e) =>
          ({ editor: t, view: n, tr: r, dispatch: o }) => {
            const i = (function (e) {
                const t = e.split(/-(?!$)/);
                let n,
                  r,
                  o,
                  i,
                  s = t[t.length - 1];
                "Space" === s && (s = " ");
                for (let e = 0; e < t.length - 1; e += 1) {
                  const s = t[e];
                  if (/^(cmd|meta|m)$/i.test(s)) i = !0;
                  else if (/^a(lt)?$/i.test(s)) n = !0;
                  else if (/^(c|ctrl|control)$/i.test(s)) r = !0;
                  else if (/^s(hift)?$/i.test(s)) o = !0;
                  else {
                    if (!/^mod$/i.test(s)) throw new Error(`Unrecognized modifier name: ${s}`);
                    ye() || be() ? (i = !0) : (r = !0);
                  }
                }
                return n && (s = `Alt-${s}`), r && (s = `Ctrl-${s}`), i && (s = `Meta-${s}`), o && (s = `Shift-${s}`), s;
              })(e).split(/-(?!$)/),
              s = i.find((e) => !["Alt", "Ctrl", "Meta", "Shift"].includes(e)),
              a = new KeyboardEvent("keydown", {
                key: "Space" === s ? " " : s,
                altKey: i.includes("Alt"),
                ctrlKey: i.includes("Ctrl"),
                metaKey: i.includes("Meta"),
                shiftKey: i.includes("Shift"),
                bubbles: !0,
                cancelable: !0
              }),
              l = t.captureTransaction(() => {
                n.someProp("handleKeyDown", (e) => e(n, a));
              });
            return (
              null == l ||
                l.steps.forEach((e) => {
                  const t = e.map(r.mapping);
                  t && o && r.maybeStep(t);
                }),
              !0
            );
          },
        lift:
          (e, t = {}) =>
          ({ state: n, dispatch: r }) =>
            !!xe(n, j(e, n.schema), t) &&
            ((e, t) => {
              let { $from: n, $to: r } = e.selection,
                o = n.blockRange(r),
                i = o && (0, a.k9)(o);
              return null != i && (t && t(e.tr.lift(o, i).scrollIntoView()), !0);
            })(n, r),
        liftEmptyBlock:
          () =>
          ({ state: e, dispatch: t }) =>
            b(e, t),
        liftListItem:
          (e) =>
          ({ state: t, dispatch: n }) => {
            return ((r = j(e, t.schema)),
            function (e, t) {
              let { $from: n, $to: o } = e.selection,
                i = n.blockRange(o, (e) => e.childCount > 0 && e.firstChild.type == r);
              return (
                !!i &&
                (!t ||
                  (n.node(i.depth - 1).type == r
                    ? (function (e, t, n, r) {
                        let o = e.tr,
                          i = r.end,
                          l = r.$to.end(r.depth);
                        i < l &&
                          (o.step(new a.FC(i - 1, l, i, l, new s.p2(s.HY.from(n.create(null, r.parent.copy())), 1, 0), 1, !0)),
                          (r = new s.Ts(o.doc.resolve(r.$from.pos), o.doc.resolve(l), r.depth)));
                        const c = (0, a.k9)(r);
                        if (null == c) return !1;
                        o.lift(r, c);
                        let d = o.mapping.map(i, -1) - 1;
                        return (0, a.Mn)(o.doc, d) && o.join(d), t(o.scrollIntoView()), !0;
                      })(e, t, r, i)
                    : (function (e, t, n) {
                        let r = e.tr,
                          o = n.parent;
                        for (let e = n.end, t = n.endIndex - 1, i = n.startIndex; t > i; t--)
                          (e -= o.child(t).nodeSize), r.delete(e - 1, e + 1);
                        let i = r.doc.resolve(n.start),
                          l = i.nodeAfter;
                        if (r.mapping.map(n.end) != n.start + i.nodeAfter.nodeSize) return !1;
                        let c = 0 == n.startIndex,
                          d = n.endIndex == o.childCount,
                          p = i.node(-1),
                          h = i.index(-1);
                        if (!p.canReplace(h + (c ? 0 : 1), h + 1, l.content.append(d ? s.HY.empty : s.HY.from(o)))) return !1;
                        let u = i.pos,
                          f = u + l.nodeSize;
                        return (
                          r.step(
                            new a.FC(
                              u - (c ? 1 : 0),
                              f + (d ? 1 : 0),
                              u + 1,
                              f - 1,
                              new s.p2(
                                (c ? s.HY.empty : s.HY.from(o.copy(s.HY.empty))).append(d ? s.HY.empty : s.HY.from(o.copy(s.HY.empty))),
                                c ? 0 : 1,
                                d ? 0 : 1
                              ),
                              c ? 0 : 1
                            )
                          ),
                          t(r.scrollIntoView()),
                          !0
                        );
                      })(e, t, i)))
              );
            })(t, n);
            var r;
          },
        newlineInCode:
          () =>
          ({ state: e, dispatch: t }) =>
            g(e, t),
        resetAttributes:
          (e, t) =>
          ({ tr: n, state: r, dispatch: o }) => {
            let i = null,
              s = null;
            const a = ke("string" == typeof e ? e : e.name, r.schema);
            return (
              !!a &&
              ("node" === a && (i = j(e, r.schema)),
              "mark" === a && (s = ue(e, r.schema)),
              o &&
                n.selection.ranges.forEach((e) => {
                  r.doc.nodesBetween(e.$from.pos, e.$to.pos, (e, r) => {
                    i && i === e.type && n.setNodeMarkup(r, void 0, Se(e.attrs, t)),
                      s &&
                        e.marks.length &&
                        e.marks.forEach((o) => {
                          s === o.type && n.addMark(r, r + e.nodeSize, s.create(Se(o.attrs, t)));
                        });
                  });
                }),
              !0)
            );
          },
        scrollIntoView:
          () =>
          ({ tr: e, dispatch: t }) => (t && e.scrollIntoView(), !0),
        selectAll:
          () =>
          ({ tr: e, commands: t }) =>
            t.setTextSelection({ from: 0, to: e.doc.content.size }),
        selectNodeBackward:
          () =>
          ({ state: e, dispatch: t }) =>
            p(e, t),
        selectNodeForward:
          () =>
          ({ state: e, dispatch: t }) =>
            f(e, t),
        selectParentNode:
          () =>
          ({ state: e, dispatch: t }) =>
            ((e, t) => {
              let n,
                { $from: o, to: i } = e.selection,
                s = o.sharedDepth(i);
              return 0 != s && ((n = o.before(s)), t && t(e.tr.setSelection(r.qv.create(e.doc, n))), !0);
            })(e, t),
        selectTextblockEnd:
          () =>
          ({ state: e, dispatch: t }) =>
            M(e, t),
        selectTextblockStart:
          () =>
          ({ state: e, dispatch: t }) =>
            O(e, t),
        setContent:
          (e, t = !1, n = {}) =>
          ({ tr: r, editor: o, dispatch: i }) => {
            const { doc: s } = r,
              a = Oe(e, o.schema, n);
            return i && r.replaceWith(0, s.content.size, a).setMeta("preventUpdate", !t), !0;
          },
        setMark:
          (e, t = {}) =>
          ({ tr: n, state: r, dispatch: o }) => {
            const { selection: i } = n,
              { empty: s, ranges: a } = i,
              l = ue(e, r.schema);
            if (o)
              if (s) {
                const e = Me(r, l);
                n.addStoredMark(l.create({ ...e, ...t }));
              } else
                a.forEach((e) => {
                  const o = e.$from.pos,
                    i = e.$to.pos;
                  r.doc.nodesBetween(o, i, (e, r) => {
                    const s = Math.max(r, o),
                      a = Math.min(r + e.nodeSize, i);
                    e.marks.find((e) => e.type === l)
                      ? e.marks.forEach((e) => {
                          l === e.type && n.addMark(s, a, l.create({ ...e.attrs, ...t }));
                        })
                      : n.addMark(s, a, l.create(t));
                  });
                });
            return (function (e, t, n) {
              var r;
              const { selection: o } = t;
              let i = null;
              if ((fe(o) && (i = o.$cursor), i)) {
                const t = null !== (r = e.storedMarks) && void 0 !== r ? r : i.marks();
                return !!n.isInSet(t) || !t.some((e) => e.type.excludes(n));
              }
              const { ranges: s } = o;
              return s.some(({ $from: t, $to: r }) => {
                let o = 0 === t.depth && e.doc.inlineContent && e.doc.type.allowsMarkType(n);
                return (
                  e.doc.nodesBetween(t.pos, r.pos, (e, t, r) => {
                    if (o) return !1;
                    if (e.isInline) {
                      const t = !r || r.type.allowsMarkType(n),
                        i = !!n.isInSet(e.marks) || !e.marks.some((e) => e.type.excludes(n));
                      o = t && i;
                    }
                    return !o;
                  }),
                  o
                );
              });
            })(r, n, l);
          },
        setMeta:
          (e, t) =>
          ({ tr: n }) => (n.setMeta(e, t), !0),
        setNode:
          (e, t = {}) =>
          ({ state: n, dispatch: r, chain: o }) => {
            const i = j(e, n.schema);
            return i.isTextblock
              ? o()
                  .command(({ commands: e }) => !!C(i, t)(n) || e.clearNodes())
                  .command(({ state: e }) => C(i, t)(e, r))
                  .run()
              : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
          },
        setNodeSelection:
          (e) =>
          ({ tr: t, dispatch: n }) => {
            if (n) {
              const { doc: n } = t,
                o = me(e, 0, n.content.size),
                i = r.qv.create(n, o);
              t.setSelection(i);
            }
            return !0;
          },
        setTextSelection:
          (e) =>
          ({ tr: t, dispatch: n }) => {
            if (n) {
              const { doc: n } = t,
                { from: o, to: i } = "number" == typeof e ? { from: e, to: e } : e,
                s = r.Bs.atStart(n).from,
                a = r.Bs.atEnd(n).to,
                l = me(o, s, a),
                c = me(i, s, a),
                d = r.Bs.create(n, l, c);
              t.setSelection(d);
            }
            return !0;
          },
        sinkListItem:
          (e) =>
          ({ state: t, dispatch: n }) => {
            const r = j(e, t.schema);
            return ((o = r),
            function (e, t) {
              let { $from: n, $to: r } = e.selection,
                i = n.blockRange(r, (e) => e.childCount > 0 && e.firstChild.type == o);
              if (!i) return !1;
              let l = i.startIndex;
              if (0 == l) return !1;
              let c = i.parent,
                d = c.child(l - 1);
              if (d.type != o) return !1;
              if (t) {
                let n = d.lastChild && d.lastChild.type == c.type,
                  r = s.HY.from(n ? o.create() : null),
                  l = new s.p2(s.HY.from(o.create(null, s.HY.from(c.type.create(null, r)))), n ? 3 : 1, 0),
                  p = i.start,
                  h = i.end;
                t(e.tr.step(new a.FC(p - (n ? 3 : 1), h, p, h, l, 1, !0)).scrollIntoView());
              }
              return !0;
            })(t, n);
            var o;
          },
        splitBlock:
          ({ keepMarks: e = !0 } = {}) =>
          ({ tr: t, state: n, dispatch: o, editor: i }) => {
            const { selection: s, doc: l } = t,
              { $from: c, $to: d } = s,
              p = $e(i.extensionManager.attributes, c.node().type.name, c.node().attrs);
            if (s instanceof r.qv && s.node.isBlock)
              return !(
                !c.parentOffset ||
                !(0, a.Ax)(l, c.pos) ||
                (o && (e && Le(n, i.extensionManager.splittableMarks), t.split(c.pos).scrollIntoView()), 0)
              );
            if (!c.parent.isBlock) return !1;
            if (o) {
              const o = d.parentOffset === d.parent.content.size;
              s instanceof r.Bs && t.deleteSelection();
              const l =
                0 === c.depth
                  ? void 0
                  : (function (e) {
                      for (let t = 0; t < e.edgeCount; t += 1) {
                        const { type: n } = e.edge(t);
                        if (n.isTextblock && !n.hasRequiredAttrs()) return n;
                      }
                      return null;
                    })(c.node(-1).contentMatchAt(c.indexAfter(-1)));
              let h = o && l ? [{ type: l, attrs: p }] : void 0,
                u = (0, a.Ax)(t.doc, t.mapping.map(c.pos), 1, h);
              if (
                (h ||
                  u ||
                  !(0, a.Ax)(t.doc, t.mapping.map(c.pos), 1, l ? [{ type: l }] : void 0) ||
                  ((u = !0), (h = l ? [{ type: l, attrs: p }] : void 0)),
                u && (t.split(t.mapping.map(c.pos), 1, h), l && !o && !c.parentOffset && c.parent.type !== l))
              ) {
                const e = t.mapping.map(c.before()),
                  n = t.doc.resolve(e);
                c.node(-1).canReplaceWith(n.index(), n.index() + 1, l) && t.setNodeMarkup(t.mapping.map(c.before()), l);
              }
              e && Le(n, i.extensionManager.splittableMarks), t.scrollIntoView();
            }
            return !0;
          },
        splitListItem:
          (e) =>
          ({ tr: t, state: n, dispatch: o, editor: i }) => {
            var l;
            const c = j(e, n.schema),
              { $from: d, $to: p } = n.selection,
              h = n.selection.node;
            if ((h && h.isBlock) || d.depth < 2 || !d.sameParent(p)) return !1;
            const u = d.node(-1);
            if (u.type !== c) return !1;
            const f = i.extensionManager.attributes;
            if (0 === d.parent.content.size && d.node(-1).childCount === d.indexAfter(-1)) {
              if (2 === d.depth || d.node(-3).type !== c || d.index(-2) !== d.node(-2).childCount - 1) return !1;
              if (o) {
                let e = s.HY.empty;
                const n = d.index(-1) ? 1 : d.index(-2) ? 2 : 3;
                for (let t = d.depth - n; t >= d.depth - 3; t -= 1) e = s.HY.from(d.node(t).copy(e));
                const o = d.indexAfter(-1) < d.node(-2).childCount ? 1 : d.indexAfter(-2) < d.node(-3).childCount ? 2 : 3,
                  i = $e(f, d.node().type.name, d.node().attrs),
                  a = (null === (l = c.contentMatch.defaultType) || void 0 === l ? void 0 : l.createAndFill(i)) || void 0;
                e = e.append(s.HY.from(c.createAndFill(null, a) || void 0));
                const p = d.before(d.depth - (n - 1));
                t.replace(p, d.after(-o), new s.p2(e, 4 - n, 0));
                let h = -1;
                t.doc.nodesBetween(p, t.doc.content.size, (e, t) => {
                  if (h > -1) return !1;
                  e.isTextblock && 0 === e.content.size && (h = t + 1);
                }),
                  h > -1 && t.setSelection(r.Bs.near(t.doc.resolve(h))),
                  t.scrollIntoView();
              }
              return !0;
            }
            const m = p.pos === d.end() ? u.contentMatchAt(0).defaultType : null,
              g = $e(f, u.type.name, u.attrs),
              y = $e(f, d.node().type.name, d.node().attrs);
            t.delete(d.pos, p.pos);
            const v = m
              ? [
                  { type: c, attrs: g },
                  { type: m, attrs: y }
                ]
              : [{ type: c, attrs: g }];
            if (!(0, a.Ax)(t.doc, d.pos, 2)) return !1;
            if (o) {
              const { selection: e, storedMarks: r } = n,
                { splittableMarks: s } = i.extensionManager,
                a = r || (e.$to.parentOffset && e.$from.marks());
              if ((t.split(d.pos, 2, v).scrollIntoView(), !a || !o)) return !0;
              const l = a.filter((e) => s.includes(e.type.name));
              t.ensureMarks(l);
            }
            return !0;
          },
        toggleList:
          (e, t, n, r = {}) =>
          ({ editor: o, tr: i, state: s, dispatch: a, chain: l, commands: c, can: d }) => {
            const { extensions: p, splittableMarks: h } = o.extensionManager,
              u = j(e, s.schema),
              f = j(t, s.schema),
              { selection: m, storedMarks: g } = s,
              { $from: y, $to: v } = m,
              w = y.blockRange(v),
              b = g || (m.$to.parentOffset && m.$from.marks());
            if (!w) return !1;
            const x = Te((e) => je(e.type.name, p))(m);
            if (w.depth >= 1 && x && w.depth - x.depth <= 1) {
              if (x.node.type === u) return c.liftListItem(f);
              if (je(x.node.type.name, p) && u.validContent(x.node.content) && a)
                return l()
                  .command(() => (i.setNodeMarkup(x.pos, u), !0))
                  .command(() => He(i, u))
                  .command(() => qe(i, u))
                  .run();
            }
            return n && b && a
              ? l()
                  .command(() => {
                    const e = d().wrapInList(u, r),
                      t = b.filter((e) => h.includes(e.type.name));
                    return i.ensureMarks(t), !!e || c.clearNodes();
                  })
                  .wrapInList(u, r)
                  .command(() => He(i, u))
                  .command(() => qe(i, u))
                  .run()
              : l()
                  .command(() => !!d().wrapInList(u, r) || c.clearNodes())
                  .wrapInList(u, r)
                  .command(() => He(i, u))
                  .command(() => qe(i, u))
                  .run();
          },
        toggleMark:
          (e, t = {}, n = {}) =>
          ({ state: r, commands: o }) => {
            const { extendEmptyMarkRange: i = !1 } = n,
              s = ue(e, r.schema);
            return ze(r, s, t) ? o.unsetMark(s, { extendEmptyMarkRange: i }) : o.setMark(s, t);
          },
        toggleNode:
          (e, t, n = {}) =>
          ({ state: r, commands: o }) => {
            const i = j(e, r.schema),
              s = j(t, r.schema);
            return xe(r, i, n) ? o.setNode(s) : o.setNode(i, n);
          },
        toggleWrap:
          (e, t = {}) =>
          ({ state: n, commands: r }) => {
            const o = j(e, n.schema);
            return xe(n, o, t) ? r.lift(o) : r.wrapIn(o, t);
          },
        undoInputRule:
          () =>
          ({ state: e, dispatch: t }) => {
            const n = e.plugins;
            for (let r = 0; r < n.length; r += 1) {
              const o = n[r];
              let i;
              if (o.spec.isInputRules && (i = o.getState(e))) {
                if (t) {
                  const t = e.tr,
                    n = i.transform;
                  for (let e = n.steps.length - 1; e >= 0; e -= 1) t.step(n.steps[e].invert(n.docs[e]));
                  if (i.text) {
                    const n = t.doc.resolve(i.from).marks();
                    t.replaceWith(i.from, i.to, e.schema.text(i.text, n));
                  } else t.delete(i.from, i.to);
                }
                return !0;
              }
            }
            return !1;
          },
        unsetAllMarks:
          () =>
          ({ tr: e, dispatch: t }) => {
            const { selection: n } = e,
              { empty: r, ranges: o } = n;
            return (
              r ||
                (t &&
                  o.forEach((t) => {
                    e.removeMark(t.$from.pos, t.$to.pos);
                  })),
              !0
            );
          },
        unsetMark:
          (e, t = {}) =>
          ({ tr: n, state: r, dispatch: o }) => {
            var i;
            const { extendEmptyMarkRange: s = !1 } = t,
              { selection: a } = n,
              l = ue(e, r.schema),
              { $from: c, empty: d, ranges: p } = a;
            if (!o) return !0;
            if (d && s) {
              let { from: e, to: t } = a;
              const r = null === (i = c.marks().find((e) => e.type === l)) || void 0 === i ? void 0 : i.attrs,
                o = he(c, l, r);
              o && ((e = o.from), (t = o.to)), n.removeMark(e, t, l);
            } else
              p.forEach((e) => {
                n.removeMark(e.$from.pos, e.$to.pos, l);
              });
            return n.removeStoredMark(l), !0;
          },
        updateAttributes:
          (e, t = {}) =>
          ({ tr: n, state: r, dispatch: o }) => {
            let i = null,
              s = null;
            const a = ke("string" == typeof e ? e : e.name, r.schema);
            return (
              !!a &&
              ("node" === a && (i = j(e, r.schema)),
              "mark" === a && (s = ue(e, r.schema)),
              o &&
                n.selection.ranges.forEach((e) => {
                  const o = e.$from.pos,
                    a = e.$to.pos;
                  r.doc.nodesBetween(o, a, (e, r) => {
                    i && i === e.type && n.setNodeMarkup(r, void 0, { ...e.attrs, ...t }),
                      s &&
                        e.marks.length &&
                        e.marks.forEach((i) => {
                          if (s === i.type) {
                            const l = Math.max(r, o),
                              c = Math.min(r + e.nodeSize, a);
                            n.addMark(l, c, s.create({ ...i.attrs, ...t }));
                          }
                        });
                  });
                }),
              !0)
            );
          },
        wrapIn:
          (e, t = {}) =>
          ({ state: n, dispatch: r }) =>
            (function (e, t = null) {
              return function (n, r) {
                let { $from: o, $to: i } = n.selection,
                  s = o.blockRange(i),
                  l = s && (0, a.nd)(s, e, t);
                return !!l && (r && r(n.tr.wrap(s, l).scrollIntoView()), !0);
              };
            })(j(e, n.schema), t)(n, r),
        wrapInList:
          (e, t = {}) =>
          ({ state: n, dispatch: r }) =>
            (function (e, t = null) {
              return function (n, r) {
                let { $from: o, $to: i } = n.selection,
                  l = o.blockRange(i),
                  c = !1,
                  d = l;
                if (!l) return !1;
                if (l.depth >= 2 && o.node(l.depth - 1).type.compatibleContent(e) && 0 == l.startIndex) {
                  if (0 == o.index(l.depth - 1)) return !1;
                  let e = n.doc.resolve(l.start - 2);
                  (d = new s.Ts(e, e, l.depth)),
                    l.endIndex < l.parent.childCount && (l = new s.Ts(o, n.doc.resolve(i.end(l.depth)), l.depth)),
                    (c = !0);
                }
                let p = (0, a.nd)(d, e, t, l);
                return (
                  !!p &&
                  (r &&
                    r(
                      (function (e, t, n, r, o) {
                        let i = s.HY.empty;
                        for (let e = n.length - 1; e >= 0; e--) i = s.HY.from(n[e].type.create(n[e].attrs, i));
                        e.step(new a.FC(t.start - (r ? 2 : 0), t.end, t.start, t.end, new s.p2(i, 0, 0), n.length, !0));
                        let l = 0;
                        for (let e = 0; e < n.length; e++) n[e].type == o && (l = e + 1);
                        let c = n.length - l,
                          d = t.start + n.length - (r ? 2 : 0),
                          p = t.parent;
                        for (let n = t.startIndex, r = t.endIndex, o = !0; n < r; n++, o = !1)
                          !o && (0, a.Ax)(e.doc, d, c) && (e.split(d, c), (d += 2 * c)), (d += p.child(n).nodeSize);
                        return e;
                      })(n.tr, l, p, c, e).scrollIntoView()
                    ),
                  !0)
                );
              };
            })(j(e, n.schema), t)(n, r)
      });
      const Je = ie.create({ name: "commands", addCommands: () => ({ ...We }) }),
        _e = ie.create({
          name: "editable",
          addProseMirrorPlugins() {
            return [new r.Sy({ key: new r.H$("editable"), props: { editable: () => this.editor.options.editable } })];
          }
        }),
        Ke = ie.create({
          name: "focusEvents",
          addProseMirrorPlugins() {
            const { editor: e } = this;
            return [
              new r.Sy({
                key: new r.H$("focusEvents"),
                props: {
                  handleDOMEvents: {
                    focus: (t, n) => {
                      e.isFocused = !0;
                      const r = e.state.tr.setMeta("focus", { event: n }).setMeta("addToHistory", !1);
                      return t.dispatch(r), !1;
                    },
                    blur: (t, n) => {
                      e.isFocused = !1;
                      const r = e.state.tr.setMeta("blur", { event: n }).setMeta("addToHistory", !1);
                      return t.dispatch(r), !1;
                    }
                  }
                }
              })
            ];
          }
        }),
        Ye = ie.create({
          name: "keymap",
          addKeyboardShortcuts() {
            const e = () =>
                this.editor.commands.first(({ commands: e }) => [
                  () => e.undoInputRule(),
                  () =>
                    e.command(({ tr: t }) => {
                      const { selection: n, doc: o } = t,
                        { empty: i, $anchor: s } = n,
                        { pos: a, parent: l } = s,
                        c = s.parent.isTextblock ? t.doc.resolve(a - 1) : s,
                        d = c.parent.type.spec.isolating,
                        p = s.pos - s.parentOffset,
                        h = d && 1 === c.parent.childCount ? p === s.pos : r.Y1.atStart(o).from === a;
                      return !(!(i && h && l.type.isTextblock) || l.textContent.length) && e.clearNodes();
                    }),
                  () => e.deleteSelection(),
                  () => e.joinBackward(),
                  () => e.selectNodeBackward()
                ]),
              t = () =>
                this.editor.commands.first(({ commands: e }) => [
                  () => e.deleteSelection(),
                  () => e.deleteCurrentNode(),
                  () => e.joinForward(),
                  () => e.selectNodeForward()
                ]),
              n = {
                Enter: () =>
                  this.editor.commands.first(({ commands: e }) => [
                    () => e.newlineInCode(),
                    () => e.createParagraphNear(),
                    () => e.liftEmptyBlock(),
                    () => e.splitBlock()
                  ]),
                "Mod-Enter": () => this.editor.commands.exitCode(),
                Backspace: e,
                "Mod-Backspace": e,
                "Shift-Backspace": e,
                Delete: t,
                "Mod-Delete": t,
                "Mod-a": () => this.editor.commands.selectAll()
              },
              o = { ...n },
              i = {
                ...n,
                "Ctrl-h": e,
                "Alt-Backspace": e,
                "Ctrl-d": t,
                "Ctrl-Alt-Backspace": t,
                "Alt-Delete": t,
                "Alt-d": t,
                "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
                "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
              };
            return ye() || be() ? i : o;
          },
          addProseMirrorPlugins() {
            return [
              new r.Sy({
                key: new r.H$("clearDocument"),
                appendTransaction: (e, t, n) => {
                  if (!e.some((e) => e.docChanged) || t.doc.eq(n.doc)) return;
                  const { empty: o, from: i, to: s } = t.selection,
                    a = r.Y1.atStart(t.doc).from,
                    l = r.Y1.atEnd(t.doc).to;
                  if (o || i !== a || s !== l) return;
                  if (0 !== n.doc.textBetween(0, n.doc.content.size, " ", " ").length) return;
                  const c = n.tr,
                    d = P({ state: n, transaction: c }),
                    { commands: p } = new R({ editor: this.editor, state: d });
                  return p.clearNodes(), c.steps.length ? c : void 0;
                }
              })
            ];
          }
        }),
        Ue = ie.create({
          name: "tabindex",
          addProseMirrorPlugins() {
            return [new r.Sy({ key: new r.H$("tabindex"), props: { attributes: this.editor.isEditable ? { tabindex: "0" } : {} } })];
          }
        });
      var Ge = Object.freeze({
        __proto__: null,
        ClipboardTextSerializer: le,
        Commands: Je,
        Editable: _e,
        FocusEvents: Ke,
        Keymap: Ye,
        Tabindex: Ue
      });
      class Xe extends I {
        constructor(e = {}) {
          super(),
            (this.isFocused = !1),
            (this.extensionStorage = {}),
            (this.options = {
              element: document.createElement("div"),
              content: "",
              injectCSS: !0,
              injectNonce: void 0,
              extensions: [],
              autofocus: !1,
              editable: !0,
              editorProps: {},
              parseOptions: {},
              enableInputRules: !0,
              enablePasteRules: !0,
              enableCoreExtensions: !0,
              onBeforeCreate: () => null,
              onCreate: () => null,
              onUpdate: () => null,
              onSelectionUpdate: () => null,
              onTransaction: () => null,
              onFocus: () => null,
              onBlur: () => null,
              onDestroy: () => null
            }),
            (this.isCapturingTransaction = !1),
            (this.capturedTransaction = null),
            this.setOptions(e),
            this.createExtensionManager(),
            this.createCommandManager(),
            this.createSchema(),
            this.on("beforeCreate", this.options.onBeforeCreate),
            this.emit("beforeCreate", { editor: this }),
            this.createView(),
            this.injectCSS(),
            this.on("create", this.options.onCreate),
            this.on("update", this.options.onUpdate),
            this.on("selectionUpdate", this.options.onSelectionUpdate),
            this.on("transaction", this.options.onTransaction),
            this.on("focus", this.options.onFocus),
            this.on("blur", this.options.onBlur),
            this.on("destroy", this.options.onDestroy),
            window.setTimeout(() => {
              this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }));
            }, 0);
        }
        get storage() {
          return this.extensionStorage;
        }
        get commands() {
          return this.commandManager.commands;
        }
        chain() {
          return this.commandManager.chain();
        }
        can() {
          return this.commandManager.can();
        }
        injectCSS() {
          this.options.injectCSS &&
            document &&
            (this.css = (function (e, t, n) {
              const r = document.querySelector("style[data-tiptap-style]");
              if (null !== r) return r;
              const o = document.createElement("style");
              return (
                t && o.setAttribute("nonce", t),
                o.setAttribute("data-tiptap-style", ""),
                (o.innerHTML =
                  '.ProseMirror {\n  position: relative;\n}\n\n.ProseMirror {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  white-space: break-spaces;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n  font-feature-settings: "liga" 0; /* the above doesn\'t seem to work in Edge */\n}\n\n.ProseMirror [contenteditable="false"] {\n  white-space: normal;\n}\n\n.ProseMirror [contenteditable="false"] [contenteditable="true"] {\n  white-space: pre-wrap;\n}\n\n.ProseMirror pre {\n  white-space: pre-wrap;\n}\n\nimg.ProseMirror-separator {\n  display: inline !important;\n  border: none !important;\n  margin: 0 !important;\n  width: 1px !important;\n  height: 1px !important;\n}\n\n.ProseMirror-gapcursor {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n  margin: 0;\n}\n\n.ProseMirror-gapcursor:after {\n  content: "";\n  display: block;\n  position: absolute;\n  top: -2px;\n  width: 20px;\n  border-top: 1px solid black;\n  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;\n}\n\n@keyframes ProseMirror-cursor-blink {\n  to {\n    visibility: hidden;\n  }\n}\n\n.ProseMirror-hideselection *::selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection *::-moz-selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection * {\n  caret-color: transparent;\n}\n\n.ProseMirror-focused .ProseMirror-gapcursor {\n  display: block;\n}\n\n.tippy-box[data-animation=fade][data-state=hidden] {\n  opacity: 0\n}'),
                document.getElementsByTagName("head")[0].appendChild(o),
                o
              );
            })(0, this.options.injectNonce));
        }
        setOptions(e = {}) {
          (this.options = { ...this.options, ...e }),
            this.view &&
              this.state &&
              !this.isDestroyed &&
              (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
        }
        setEditable(e, t = !0) {
          this.setOptions({ editable: e }), t && this.emit("update", { editor: this, transaction: this.state.tr });
        }
        get isEditable() {
          return this.options.editable && this.view && this.view.editable;
        }
        get state() {
          return this.view.state;
        }
        registerPlugin(e, t) {
          const n = L(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e],
            r = this.state.reconfigure({ plugins: n });
          this.view.updateState(r);
        }
        unregisterPlugin(e) {
          if (this.isDestroyed) return;
          const t = "string" == typeof e ? `${e}$` : e.key,
            n = this.state.reconfigure({ plugins: this.state.plugins.filter((e) => !e.key.startsWith(t)) });
          this.view.updateState(n);
        }
        createExtensionManager() {
          const e = [...(this.options.enableCoreExtensions ? Object.values(Ge) : []), ...this.options.extensions].filter((e) =>
            ["extension", "node", "mark"].includes(null == e ? void 0 : e.type)
          );
          this.extensionManager = new ne(e, this);
        }
        createCommandManager() {
          this.commandManager = new R({ editor: this });
        }
        createSchema() {
          this.schema = this.extensionManager.schema;
        }
        createView() {
          const e = Oe(this.options.content, this.schema, this.options.parseOptions),
            t = ge(e, this.options.autofocus);
          this.view = new o.tk(this.options.element, {
            ...this.options.editorProps,
            dispatchTransaction: this.dispatchTransaction.bind(this),
            state: r.yy.create({ doc: e, selection: t || void 0 })
          });
          const n = this.state.reconfigure({ plugins: this.extensionManager.plugins });
          this.view.updateState(n), this.createNodeViews(), this.prependClass(), (this.view.dom.editor = this);
        }
        createNodeViews() {
          this.view.setProps({ nodeViews: this.extensionManager.nodeViews });
        }
        prependClass() {
          this.view.dom.className = `tiptap ${this.view.dom.className}`;
        }
        captureTransaction(e) {
          (this.isCapturingTransaction = !0), e(), (this.isCapturingTransaction = !1);
          const t = this.capturedTransaction;
          return (this.capturedTransaction = null), t;
        }
        dispatchTransaction(e) {
          if (this.view.isDestroyed) return;
          if (this.isCapturingTransaction)
            return this.capturedTransaction
              ? void e.steps.forEach((e) => {
                  var t;
                  return null === (t = this.capturedTransaction) || void 0 === t ? void 0 : t.step(e);
                })
              : void (this.capturedTransaction = e);
          const t = this.state.apply(e),
            n = !this.state.selection.eq(t.selection);
          this.view.updateState(t),
            this.emit("transaction", { editor: this, transaction: e }),
            n && this.emit("selectionUpdate", { editor: this, transaction: e });
          const r = e.getMeta("focus"),
            o = e.getMeta("blur");
          r && this.emit("focus", { editor: this, event: r.event, transaction: e }),
            o && this.emit("blur", { editor: this, event: o.event, transaction: e }),
            e.docChanged && !e.getMeta("preventUpdate") && this.emit("update", { editor: this, transaction: e });
        }
        getAttributes(e) {
          return Re(this.state, e);
        }
        isActive(e, t) {
          const n = "string" == typeof e ? e : null,
            r = "string" == typeof e ? t : e;
          return (function (e, t, n = {}) {
            if (!t) return xe(e, null, n) || ze(e, null, n);
            const r = ke(t, e.schema);
            return "node" === r ? xe(e, t, n) : "mark" === r && ze(e, t, n);
          })(this.state, n, r);
        }
        getJSON() {
          return this.state.doc.toJSON();
        }
        getHTML() {
          return Ee(this.state.doc.content, this.schema);
        }
        getText(e) {
          const { blockSeparator: t = "\n\n", textSerializers: n = {} } = e || {};
          return (function (e, t) {
            return se(e, { from: 0, to: e.content.size }, t);
          })(this.state.doc, { blockSeparator: t, textSerializers: { ...ae(this.schema), ...n } });
        }
        get isEmpty() {
          return (function (e) {
            var t;
            const n = null === (t = e.type.createAndFill()) || void 0 === t ? void 0 : t.toJSON(),
              r = e.toJSON();
            return JSON.stringify(n) === JSON.stringify(r);
          })(this.state.doc);
        }
        getCharacterCount() {
          return (
            console.warn(
              '[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'
            ),
            this.state.doc.content.size - 2
          );
        }
        destroy() {
          this.emit("destroy"), this.view && this.view.destroy(), this.removeAllListeners();
        }
        get isDestroyed() {
          var e;
          return !(null === (e = this.view) || void 0 === e ? void 0 : e.docView);
        }
      }
      function Ze(e) {
        return new G({
          find: e.find,
          handler: ({ state: t, range: n, match: r }) => {
            const o = H(e.getAttributes, void 0, r);
            if (!1 === o || null === o) return null;
            const { tr: i } = t,
              s = r[r.length - 1],
              a = r[0];
            if (s) {
              const r = a.search(/\S/),
                l = n.from + a.indexOf(s),
                c = l + s.length;
              if (
                Be(n.from, n.to, t.doc)
                  .filter((t) => t.mark.type.excluded.find((n) => n === e.type && n !== t.mark.type))
                  .filter((e) => e.to > l).length
              )
                return null;
              c < n.to && i.delete(c, n.to), l > n.from && i.delete(n.from + r, l);
              const d = n.from + r + s.length;
              i.addMark(n.from + r, d, e.type.create(o || {})), i.removeStoredMark(e.type);
            }
          }
        });
      }
      function Qe(e) {
        return new G({
          find: e.find,
          handler: ({ state: t, range: n, match: r }) => {
            const o = H(e.getAttributes, void 0, r) || {},
              { tr: i } = t,
              s = n.from;
            let a = n.to;
            const l = e.type.create(o);
            if (r[1]) {
              let e = s + r[0].lastIndexOf(r[1]);
              e > a ? (e = a) : (a = e + r[1].length);
              const t = r[0][r[0].length - 1];
              i.insertText(t, s + r[0].length - 1), i.replaceWith(e, a, l);
            } else r[0] && i.insert(s - 1, e.type.create(o)).delete(i.mapping.map(s), i.mapping.map(a));
            i.scrollIntoView();
          }
        });
      }
      function et(e) {
        return new G({
          find: e.find,
          handler: ({ state: t, range: n, match: r }) => {
            const o = t.doc.resolve(n.from),
              i = H(e.getAttributes, void 0, r) || {};
            if (!o.node(-1).canReplaceWith(o.index(-1), o.indexAfter(-1), e.type)) return null;
            t.tr.delete(n.from, n.to).setBlockType(n.from, n.from, e.type, i);
          }
        });
      }
      function tt(e) {
        return new G({
          find: e.find,
          handler: ({ state: t, range: n, match: r, chain: o }) => {
            const i = H(e.getAttributes, void 0, r) || {},
              s = t.tr.delete(n.from, n.to),
              l = s.doc.resolve(n.from).blockRange(),
              c = l && (0, a.nd)(l, e.type, i);
            if (!c) return null;
            if ((s.wrap(l, c), e.keepMarks && e.editor)) {
              const { selection: n, storedMarks: r } = t,
                { splittableMarks: o } = e.editor.extensionManager,
                i = r || (n.$to.parentOffset && n.$from.marks());
              if (i) {
                const e = i.filter((e) => o.includes(e.type.name));
                s.ensureMarks(e);
              }
            }
            if (e.keepAttributes) {
              const t = "bulletList" === e.type.name || "orderedList" === e.type.name ? "listItem" : "taskList";
              o().updateAttributes(t, i).run();
            }
            const d = s.doc.resolve(n.from - 1).nodeBefore;
            d && d.type === e.type && (0, a.Mn)(s.doc, n.from - 1) && (!e.joinPredicate || e.joinPredicate(r, d)) && s.join(n.from - 1);
          }
        });
      }
      class nt {
        constructor(e = {}) {
          (this.type = "mark"),
            (this.name = "mark"),
            (this.parent = null),
            (this.child = null),
            (this.config = { name: this.name, defaultOptions: {} }),
            (this.config = { ...this.config, ...e }),
            (this.name = this.config.name),
            e.defaultOptions &&
              console.warn(
                `[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`
              ),
            (this.options = this.config.defaultOptions),
            this.config.addOptions && (this.options = H(B(this, "addOptions", { name: this.name }))),
            (this.storage = H(B(this, "addStorage", { name: this.name, options: this.options })) || {});
        }
        static create(e = {}) {
          return new nt(e);
        }
        configure(e = {}) {
          const t = this.extend();
          return (t.options = oe(this.options, e)), (t.storage = H(B(t, "addStorage", { name: t.name, options: t.options }))), t;
        }
        extend(e = {}) {
          const t = new nt(e);
          return (
            (t.parent = this),
            (this.child = t),
            (t.name = e.name ? e.name : t.parent.name),
            e.defaultOptions &&
              console.warn(
                `[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`
              ),
            (t.options = H(B(t, "addOptions", { name: t.name }))),
            (t.storage = H(B(t, "addStorage", { name: t.name, options: t.options }))),
            t
          );
        }
        static handleExit({ editor: e, mark: t }) {
          const { tr: n } = e.state,
            r = e.state.selection.$from;
          if (r.pos === r.end()) {
            const o = r.marks();
            if (!o.find((e) => (null == e ? void 0 : e.type.name) === t.name)) return !1;
            const i = o.find((e) => (null == e ? void 0 : e.type.name) === t.name);
            return i && n.removeStoredMark(i), n.insertText(" ", r.pos), e.view.dispatch(n), !0;
          }
          return !1;
        }
      }
      class rt {
        constructor(e = {}) {
          (this.type = "node"),
            (this.name = "node"),
            (this.parent = null),
            (this.child = null),
            (this.config = { name: this.name, defaultOptions: {} }),
            (this.config = { ...this.config, ...e }),
            (this.name = this.config.name),
            e.defaultOptions &&
              console.warn(
                `[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`
              ),
            (this.options = this.config.defaultOptions),
            this.config.addOptions && (this.options = H(B(this, "addOptions", { name: this.name }))),
            (this.storage = H(B(this, "addStorage", { name: this.name, options: this.options })) || {});
        }
        static create(e = {}) {
          return new rt(e);
        }
        configure(e = {}) {
          const t = this.extend();
          return (t.options = oe(this.options, e)), (t.storage = H(B(t, "addStorage", { name: t.name, options: t.options }))), t;
        }
        extend(e = {}) {
          const t = new rt(e);
          return (
            (t.parent = this),
            (this.child = t),
            (t.name = e.name ? e.name : t.parent.name),
            e.defaultOptions &&
              console.warn(
                `[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`
              ),
            (t.options = H(B(t, "addOptions", { name: t.name }))),
            (t.storage = H(B(t, "addStorage", { name: t.name, options: t.options }))),
            t
          );
        }
      }
      class ot {
        constructor(e, t, n) {
          (this.isDragging = !1),
            (this.component = e),
            (this.editor = t.editor),
            (this.options = { stopEvent: null, ignoreMutation: null, ...n }),
            (this.extension = t.extension),
            (this.node = t.node),
            (this.decorations = t.decorations),
            (this.getPos = t.getPos),
            this.mount();
        }
        mount() {}
        get dom() {
          return this.editor.view.dom;
        }
        get contentDOM() {
          return null;
        }
        onDragStart(e) {
          var t, n, o, i, s, a, l;
          const { view: c } = this.editor,
            d = e.target,
            p =
              3 === d.nodeType
                ? null === (t = d.parentElement) || void 0 === t
                  ? void 0
                  : t.closest("[data-drag-handle]")
                : d.closest("[data-drag-handle]");
          if (!this.dom || (null === (n = this.contentDOM) || void 0 === n ? void 0 : n.contains(d)) || !p) return;
          let h = 0,
            u = 0;
          if (this.dom !== p) {
            const t = this.dom.getBoundingClientRect(),
              n = p.getBoundingClientRect(),
              r = null !== (o = e.offsetX) && void 0 !== o ? o : null === (i = e.nativeEvent) || void 0 === i ? void 0 : i.offsetX,
              l = null !== (s = e.offsetY) && void 0 !== s ? s : null === (a = e.nativeEvent) || void 0 === a ? void 0 : a.offsetY;
            (h = n.x - t.x + r), (u = n.y - t.y + l);
          }
          null === (l = e.dataTransfer) || void 0 === l || l.setDragImage(this.dom, h, u);
          const f = r.qv.create(c.state.doc, this.getPos()),
            m = c.state.tr.setSelection(f);
          c.dispatch(m);
        }
        stopEvent(e) {
          var t;
          if (!this.dom) return !1;
          if ("function" == typeof this.options.stopEvent) return this.options.stopEvent({ event: e });
          const n = e.target;
          if (!this.dom.contains(n) || (null === (t = this.contentDOM) || void 0 === t ? void 0 : t.contains(n))) return !1;
          const o = e.type.startsWith("drag"),
            i = "drop" === e.type;
          if ((["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(n.tagName) || n.isContentEditable) && !i && !o) return !0;
          const { isEditable: s } = this.editor,
            { isDragging: a } = this,
            l = !!this.node.type.spec.draggable,
            c = r.qv.isSelectable(this.node),
            d = "copy" === e.type,
            p = "paste" === e.type,
            h = "cut" === e.type,
            u = "mousedown" === e.type;
          if ((!l && c && o && e.preventDefault(), l && o && !a)) return e.preventDefault(), !1;
          if (l && s && !a && u) {
            const e = n.closest("[data-drag-handle]");
            e &&
              (this.dom === e || this.dom.contains(e)) &&
              ((this.isDragging = !0),
              document.addEventListener(
                "dragend",
                () => {
                  this.isDragging = !1;
                },
                { once: !0 }
              ),
              document.addEventListener(
                "drop",
                () => {
                  this.isDragging = !1;
                },
                { once: !0 }
              ),
              document.addEventListener(
                "mouseup",
                () => {
                  this.isDragging = !1;
                },
                { once: !0 }
              ));
          }
          return !(a || i || d || p || h || (u && c));
        }
        ignoreMutation(e) {
          return (
            !this.dom ||
            !this.contentDOM ||
            ("function" == typeof this.options.ignoreMutation
              ? this.options.ignoreMutation({ mutation: e })
              : !(!this.node.isLeaf && !this.node.isAtom) ||
                ("selection" !== e.type &&
                  !(
                    this.dom.contains(e.target) &&
                    "childList" === e.type &&
                    (ye() || "Android" === navigator.platform || /android/i.test(navigator.userAgent)) &&
                    this.editor.isFocused &&
                    [...Array.from(e.addedNodes), ...Array.from(e.removedNodes)].every((e) => e.isContentEditable)
                  ) &&
                  ((this.contentDOM === e.target && "attributes" === e.type) || !this.contentDOM.contains(e.target))))
          );
        }
        updateAttributes(e) {
          this.editor.commands.command(({ tr: t }) => {
            const n = this.getPos();
            return t.setNodeMarkup(n, void 0, { ...this.node.attrs, ...e }), !0;
          });
        }
        deleteNode() {
          const e = this.getPos(),
            t = e + this.node.nodeSize;
          this.editor.commands.deleteRange({ from: e, to: t });
        }
      }
      function it(e) {
        return new ee({
          find: e.find,
          handler: ({ state: t, range: n, match: r, pasteEvent: o }) => {
            const i = H(e.getAttributes, void 0, r, o);
            if (!1 === i || null === i) return null;
            const { tr: s } = t,
              a = r[r.length - 1],
              l = r[0];
            let c = n.to;
            if (a) {
              const r = l.search(/\S/),
                o = n.from + l.indexOf(a),
                d = o + a.length;
              if (
                Be(n.from, n.to, t.doc)
                  .filter((t) => t.mark.type.excluded.find((n) => n === e.type && n !== t.mark.type))
                  .filter((e) => e.to > o).length
              )
                return null;
              d < n.to && s.delete(d, n.to),
                o > n.from && s.delete(n.from + r, o),
                (c = n.from + r + a.length),
                s.addMark(n.from + r, c, e.type.create(i || {})),
                s.removeStoredMark(e.type);
            }
          }
        });
      }
    },
    45757: (e, t, n) => {
      n.d(t, { ML: () => st, kg: () => at, ms: () => lt, T5: () => ct, uf: () => ut, Un: () => pt });
      var r = n(73845),
        o = n(2376);
      function i(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function s(e) {
        return e instanceof i(e).Element || e instanceof Element;
      }
      function a(e) {
        return e instanceof i(e).HTMLElement || e instanceof HTMLElement;
      }
      function l(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof i(e).ShadowRoot || e instanceof ShadowRoot);
      }
      var c = Math.max,
        d = Math.min,
        p = Math.round;
      function h() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands)
          ? e.brands
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function u() {
        return !/^((?!chrome|android).)*safari/i.test(h());
      }
      function f(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var r = e.getBoundingClientRect(),
          o = 1,
          l = 1;
        t &&
          a(e) &&
          ((o = (e.offsetWidth > 0 && p(r.width) / e.offsetWidth) || 1), (l = (e.offsetHeight > 0 && p(r.height) / e.offsetHeight) || 1));
        var c = (s(e) ? i(e) : window).visualViewport,
          d = !u() && n,
          h = (r.left + (d && c ? c.offsetLeft : 0)) / o,
          f = (r.top + (d && c ? c.offsetTop : 0)) / l,
          m = r.width / o,
          g = r.height / l;
        return { width: m, height: g, top: f, right: h + m, bottom: f + g, left: h, x: h, y: f };
      }
      function m(e) {
        var t = i(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function g(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function y(e) {
        return ((s(e) ? e.ownerDocument : e.document) || window.document).documentElement;
      }
      function v(e) {
        return f(y(e)).left + m(e).scrollLeft;
      }
      function w(e) {
        return i(e).getComputedStyle(e);
      }
      function b(e) {
        var t = w(e),
          n = t.overflow,
          r = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r);
      }
      function x(e, t, n) {
        void 0 === n && (n = !1);
        var r,
          o,
          s = a(t),
          l =
            a(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                n = p(t.width) / e.offsetWidth || 1,
                r = p(t.height) / e.offsetHeight || 1;
              return 1 !== n || 1 !== r;
            })(t),
          c = y(t),
          d = f(e, l, n),
          h = { scrollLeft: 0, scrollTop: 0 },
          u = { x: 0, y: 0 };
        return (
          (s || (!s && !n)) &&
            (("body" !== g(t) || b(c)) &&
              (h = (r = t) !== i(r) && a(r) ? { scrollLeft: (o = r).scrollLeft, scrollTop: o.scrollTop } : m(r)),
            a(t) ? (((u = f(t, !0)).x += t.clientLeft), (u.y += t.clientTop)) : c && (u.x = v(c))),
          { x: d.left + h.scrollLeft - u.x, y: d.top + h.scrollTop - u.y, width: d.width, height: d.height }
        );
      }
      function k(e) {
        var t = f(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
        return (
          Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - r) <= 1 && (r = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
        );
      }
      function S(e) {
        return "html" === g(e) ? e : e.assignedSlot || e.parentNode || (l(e) ? e.host : null) || y(e);
      }
      function O(e) {
        return ["html", "body", "#document"].indexOf(g(e)) >= 0 ? e.ownerDocument.body : a(e) && b(e) ? e : O(S(e));
      }
      function M(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = O(e),
          o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          s = i(r),
          a = o ? [s].concat(s.visualViewport || [], b(r) ? r : []) : r,
          l = t.concat(a);
        return o ? l : l.concat(M(S(a)));
      }
      function C(e) {
        return ["table", "td", "th"].indexOf(g(e)) >= 0;
      }
      function N(e) {
        return a(e) && "fixed" !== w(e).position ? e.offsetParent : null;
      }
      function T(e) {
        for (var t = i(e), n = N(e); n && C(n) && "static" === w(n).position; ) n = N(n);
        return n && ("html" === g(n) || ("body" === g(n) && "static" === w(n).position))
          ? t
          : n ||
              (function (e) {
                var t = /firefox/i.test(h());
                if (/Trident/i.test(h()) && a(e) && "fixed" === w(e).position) return null;
                var n = S(e);
                for (l(n) && (n = n.host); a(n) && ["html", "body"].indexOf(g(n)) < 0; ) {
                  var r = w(n);
                  if (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    "paint" === r.contain ||
                    -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                    (t && "filter" === r.willChange) ||
                    (t && r.filter && "none" !== r.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      var E = "top",
        D = "bottom",
        A = "right",
        P = "left",
        R = "auto",
        I = [E, D, A, P],
        B = "start",
        $ = "end",
        z = "viewport",
        j = "popper",
        V = I.reduce(function (e, t) {
          return e.concat([t + "-" + B, t + "-" + $]);
        }, []),
        F = [].concat(I, [R]).reduce(function (e, t) {
          return e.concat([t, t + "-" + B, t + "-" + $]);
        }, []),
        L = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
      function H(e) {
        var t = new Map(),
          n = new Set(),
          r = [];
        function o(e) {
          n.add(e.name),
            [].concat(e.requires || [], e.requiresIfExists || []).forEach(function (e) {
              if (!n.has(e)) {
                var r = t.get(e);
                r && o(r);
              }
            }),
            r.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            n.has(e.name) || o(e);
          }),
          r
        );
      }
      var q = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function W() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function J(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          o = t.defaultOptions,
          i = void 0 === o ? q : o;
        return function (e, t, n) {
          void 0 === n && (n = i);
          var o,
            a,
            l = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, q, i),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {}
            },
            c = [],
            d = !1,
            p = {
              state: l,
              setOptions: function (n) {
                var o = "function" == typeof n ? n(l.options) : n;
                h(),
                  (l.options = Object.assign({}, i, l.options, o)),
                  (l.scrollParents = { reference: s(e) ? M(e) : e.contextElement ? M(e.contextElement) : [], popper: M(t) });
                var a,
                  d,
                  u = (function (e) {
                    var t = H(e);
                    return L.reduce(function (e, n) {
                      return e.concat(
                        t.filter(function (e) {
                          return e.phase === n;
                        })
                      );
                    }, []);
                  })(
                    ((a = [].concat(r, l.options.modifiers)),
                    (d = a.reduce(function (e, t) {
                      var n = e[t.name];
                      return (
                        (e[t.name] = n
                          ? Object.assign({}, n, t, {
                              options: Object.assign({}, n.options, t.options),
                              data: Object.assign({}, n.data, t.data)
                            })
                          : t),
                        e
                      );
                    }, {})),
                    Object.keys(d).map(function (e) {
                      return d[e];
                    }))
                  );
                return (
                  (l.orderedModifiers = u.filter(function (e) {
                    return e.enabled;
                  })),
                  l.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      n = e.options,
                      r = void 0 === n ? {} : n,
                      o = e.effect;
                    if ("function" == typeof o) {
                      var i = o({ state: l, name: t, instance: p, options: r });
                      c.push(i || function () {});
                    }
                  }),
                  p.update()
                );
              },
              forceUpdate: function () {
                if (!d) {
                  var e = l.elements,
                    t = e.reference,
                    n = e.popper;
                  if (W(t, n)) {
                    (l.rects = { reference: x(t, T(n), "fixed" === l.options.strategy), popper: k(n) }),
                      (l.reset = !1),
                      (l.placement = l.options.placement),
                      l.orderedModifiers.forEach(function (e) {
                        return (l.modifiersData[e.name] = Object.assign({}, e.data));
                      });
                    for (var r = 0; r < l.orderedModifiers.length; r++)
                      if (!0 !== l.reset) {
                        var o = l.orderedModifiers[r],
                          i = o.fn,
                          s = o.options,
                          a = void 0 === s ? {} : s,
                          c = o.name;
                        "function" == typeof i && (l = i({ state: l, options: a, name: c, instance: p }) || l);
                      } else (l.reset = !1), (r = -1);
                  }
                }
              },
              update:
                ((o = function () {
                  return new Promise(function (e) {
                    p.forceUpdate(), e(l);
                  });
                }),
                function () {
                  return (
                    a ||
                      (a = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (a = void 0), e(o());
                        });
                      })),
                    a
                  );
                }),
              destroy: function () {
                h(), (d = !0);
              }
            };
          if (!W(e, t)) return p;
          function h() {
            c.forEach(function (e) {
              return e();
            }),
              (c = []);
          }
          return (
            p.setOptions(n).then(function (e) {
              !d && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            p
          );
        };
      }
      var _ = { passive: !0 };
      function K(e) {
        return e.split("-")[0];
      }
      function Y(e) {
        return e.split("-")[1];
      }
      function U(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function G(e) {
        var t,
          n = e.reference,
          r = e.element,
          o = e.placement,
          i = o ? K(o) : null,
          s = o ? Y(o) : null,
          a = n.x + n.width / 2 - r.width / 2,
          l = n.y + n.height / 2 - r.height / 2;
        switch (i) {
          case E:
            t = { x: a, y: n.y - r.height };
            break;
          case D:
            t = { x: a, y: n.y + n.height };
            break;
          case A:
            t = { x: n.x + n.width, y: l };
            break;
          case P:
            t = { x: n.x - r.width, y: l };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var c = i ? U(i) : null;
        if (null != c) {
          var d = "y" === c ? "height" : "width";
          switch (s) {
            case B:
              t[c] = t[c] - (n[d] / 2 - r[d] / 2);
              break;
            case $:
              t[c] = t[c] + (n[d] / 2 - r[d] / 2);
          }
        }
        return t;
      }
      var X = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Z(e) {
        var t,
          n = e.popper,
          r = e.popperRect,
          o = e.placement,
          s = e.variation,
          a = e.offsets,
          l = e.position,
          c = e.gpuAcceleration,
          d = e.adaptive,
          h = e.roundOffsets,
          u = e.isFixed,
          f = a.x,
          m = void 0 === f ? 0 : f,
          g = a.y,
          v = void 0 === g ? 0 : g,
          b = "function" == typeof h ? h({ x: m, y: v }) : { x: m, y: v };
        (m = b.x), (v = b.y);
        var x = a.hasOwnProperty("x"),
          k = a.hasOwnProperty("y"),
          S = P,
          O = E,
          M = window;
        if (d) {
          var C = T(n),
            N = "clientHeight",
            R = "clientWidth";
          C === i(n) && "static" !== w((C = y(n))).position && "absolute" === l && ((N = "scrollHeight"), (R = "scrollWidth")),
            (o === E || ((o === P || o === A) && s === $)) &&
              ((O = D), (v -= (u && C === M && M.visualViewport ? M.visualViewport.height : C[N]) - r.height), (v *= c ? 1 : -1)),
            (o !== P && ((o !== E && o !== D) || s !== $)) ||
              ((S = A), (m -= (u && C === M && M.visualViewport ? M.visualViewport.width : C[R]) - r.width), (m *= c ? 1 : -1));
        }
        var I,
          B = Object.assign({ position: l }, d && X),
          z =
            !0 === h
              ? (function (e, t) {
                  var n = e.x,
                    r = e.y,
                    o = t.devicePixelRatio || 1;
                  return { x: p(n * o) / o || 0, y: p(r * o) / o || 0 };
                })({ x: m, y: v }, i(n))
              : { x: m, y: v };
        return (
          (m = z.x),
          (v = z.y),
          c
            ? Object.assign(
                {},
                B,
                (((I = {})[O] = k ? "0" : ""),
                (I[S] = x ? "0" : ""),
                (I.transform =
                  (M.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + v + "px)" : "translate3d(" + m + "px, " + v + "px, 0)"),
                I)
              )
            : Object.assign({}, B, (((t = {})[O] = k ? v + "px" : ""), (t[S] = x ? m + "px" : ""), (t.transform = ""), t))
        );
      }
      const Q = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (e) {
          var t = e.state;
          Object.keys(t.elements).forEach(function (e) {
            var n = t.styles[e] || {},
              r = t.attributes[e] || {},
              o = t.elements[e];
            a(o) &&
              g(o) &&
              (Object.assign(o.style, n),
              Object.keys(r).forEach(function (e) {
                var t = r[e];
                !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t);
              }));
          });
        },
        effect: function (e) {
          var t = e.state,
            n = {
              popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" },
              arrow: { position: "absolute" },
              reference: {}
            };
          return (
            Object.assign(t.elements.popper.style, n.popper),
            (t.styles = n),
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function () {
              Object.keys(t.elements).forEach(function (e) {
                var r = t.elements[e],
                  o = t.attributes[e] || {},
                  i = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function (e, t) {
                    return (e[t] = ""), e;
                  }, {});
                a(r) &&
                  g(r) &&
                  (Object.assign(r.style, i),
                  Object.keys(o).forEach(function (e) {
                    r.removeAttribute(e);
                  }));
              });
            }
          );
        },
        requires: ["computeStyles"]
      };
      var ee = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function te(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return ee[e];
        });
      }
      var ne = { start: "end", end: "start" };
      function re(e) {
        return e.replace(/start|end/g, function (e) {
          return ne[e];
        });
      }
      function oe(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && l(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function ie(e) {
        return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
      }
      function se(e, t, n) {
        return t === z
          ? ie(
              (function (e, t) {
                var n = i(e),
                  r = y(e),
                  o = n.visualViewport,
                  s = r.clientWidth,
                  a = r.clientHeight,
                  l = 0,
                  c = 0;
                if (o) {
                  (s = o.width), (a = o.height);
                  var d = u();
                  (d || (!d && "fixed" === t)) && ((l = o.offsetLeft), (c = o.offsetTop));
                }
                return { width: s, height: a, x: l + v(e), y: c };
              })(e, n)
            )
          : s(t)
          ? (function (e, t) {
              var n = f(e, !1, "fixed" === t);
              return (
                (n.top = n.top + e.clientTop),
                (n.left = n.left + e.clientLeft),
                (n.bottom = n.top + e.clientHeight),
                (n.right = n.left + e.clientWidth),
                (n.width = e.clientWidth),
                (n.height = e.clientHeight),
                (n.x = n.left),
                (n.y = n.top),
                n
              );
            })(t, n)
          : ie(
              (function (e) {
                var t,
                  n = y(e),
                  r = m(e),
                  o = null == (t = e.ownerDocument) ? void 0 : t.body,
                  i = c(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                  s = c(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
                  a = -r.scrollLeft + v(e),
                  l = -r.scrollTop;
                return (
                  "rtl" === w(o || n).direction && (a += c(n.clientWidth, o ? o.clientWidth : 0) - i), { width: i, height: s, x: a, y: l }
                );
              })(y(e))
            );
      }
      function ae(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function le(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      function ce(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.placement,
          o = void 0 === r ? e.placement : r,
          i = n.strategy,
          l = void 0 === i ? e.strategy : i,
          p = n.boundary,
          h = void 0 === p ? "clippingParents" : p,
          u = n.rootBoundary,
          m = void 0 === u ? z : u,
          v = n.elementContext,
          b = void 0 === v ? j : v,
          x = n.altBoundary,
          k = void 0 !== x && x,
          O = n.padding,
          C = void 0 === O ? 0 : O,
          N = ae("number" != typeof C ? C : le(C, I)),
          P = b === j ? "reference" : j,
          R = e.rects.popper,
          B = e.elements[k ? P : b],
          $ = (function (e, t, n, r) {
            var o =
                "clippingParents" === t
                  ? (function (e) {
                      var t = M(S(e)),
                        n = ["absolute", "fixed"].indexOf(w(e).position) >= 0 && a(e) ? T(e) : e;
                      return s(n)
                        ? t.filter(function (e) {
                            return s(e) && oe(e, n) && "body" !== g(e);
                          })
                        : [];
                    })(e)
                  : [].concat(t),
              i = [].concat(o, [n]),
              l = i[0],
              p = i.reduce(
                function (t, n) {
                  var o = se(e, n, r);
                  return (
                    (t.top = c(o.top, t.top)),
                    (t.right = d(o.right, t.right)),
                    (t.bottom = d(o.bottom, t.bottom)),
                    (t.left = c(o.left, t.left)),
                    t
                  );
                },
                se(e, l, r)
              );
            return (p.width = p.right - p.left), (p.height = p.bottom - p.top), (p.x = p.left), (p.y = p.top), p;
          })(s(B) ? B : B.contextElement || y(e.elements.popper), h, m, l),
          V = f(e.elements.reference),
          F = G({ reference: V, element: R, strategy: "absolute", placement: o }),
          L = ie(Object.assign({}, R, F)),
          H = b === j ? L : V,
          q = {
            top: $.top - H.top + N.top,
            bottom: H.bottom - $.bottom + N.bottom,
            left: $.left - H.left + N.left,
            right: H.right - $.right + N.right
          },
          W = e.modifiersData.offset;
        if (b === j && W) {
          var J = W[o];
          Object.keys(q).forEach(function (e) {
            var t = [A, D].indexOf(e) >= 0 ? 1 : -1,
              n = [E, D].indexOf(e) >= 0 ? "y" : "x";
            q[e] += J[n] * t;
          });
        }
        return q;
      }
      function de(e, t, n) {
        return c(e, d(t, n));
      }
      function pe(e, t, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x }
        );
      }
      function he(e) {
        return [E, A, D, P].some(function (t) {
          return e[t] >= 0;
        });
      }
      var ue = J({
          defaultModifiers: [
            {
              name: "eventListeners",
              enabled: !0,
              phase: "write",
              fn: function () {},
              effect: function (e) {
                var t = e.state,
                  n = e.instance,
                  r = e.options,
                  o = r.scroll,
                  s = void 0 === o || o,
                  a = r.resize,
                  l = void 0 === a || a,
                  c = i(t.elements.popper),
                  d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                return (
                  s &&
                    d.forEach(function (e) {
                      e.addEventListener("scroll", n.update, _);
                    }),
                  l && c.addEventListener("resize", n.update, _),
                  function () {
                    s &&
                      d.forEach(function (e) {
                        e.removeEventListener("scroll", n.update, _);
                      }),
                      l && c.removeEventListener("resize", n.update, _);
                  }
                );
              },
              data: {}
            },
            {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function (e) {
                var t = e.state,
                  n = e.name;
                t.modifiersData[n] = G({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement
                });
              },
              data: {}
            },
            {
              name: "computeStyles",
              enabled: !0,
              phase: "beforeWrite",
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  r = n.gpuAcceleration,
                  o = void 0 === r || r,
                  i = n.adaptive,
                  s = void 0 === i || i,
                  a = n.roundOffsets,
                  l = void 0 === a || a,
                  c = {
                    placement: K(t.placement),
                    variation: Y(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: o,
                    isFixed: "fixed" === t.options.strategy
                  };
                null != t.modifiersData.popperOffsets &&
                  (t.styles.popper = Object.assign(
                    {},
                    t.styles.popper,
                    Z(
                      Object.assign({}, c, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: s,
                        roundOffsets: l
                      })
                    )
                  )),
                  null != t.modifiersData.arrow &&
                    (t.styles.arrow = Object.assign(
                      {},
                      t.styles.arrow,
                      Z(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l }))
                    )),
                  (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement }));
              },
              data: {}
            },
            Q,
            {
              name: "offset",
              enabled: !0,
              phase: "main",
              requires: ["popperOffsets"],
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  r = e.name,
                  o = n.offset,
                  i = void 0 === o ? [0, 0] : o,
                  s = F.reduce(function (e, n) {
                    return (
                      (e[n] = (function (e, t, n) {
                        var r = K(e),
                          o = [P, E].indexOf(r) >= 0 ? -1 : 1,
                          i = "function" == typeof n ? n(Object.assign({}, t, { placement: e })) : n,
                          s = i[0],
                          a = i[1];
                        return (s = s || 0), (a = (a || 0) * o), [P, A].indexOf(r) >= 0 ? { x: a, y: s } : { x: s, y: a };
                      })(n, t.rects, i)),
                      e
                    );
                  }, {}),
                  a = s[t.placement],
                  l = a.x,
                  c = a.y;
                null != t.modifiersData.popperOffsets && ((t.modifiersData.popperOffsets.x += l), (t.modifiersData.popperOffsets.y += c)),
                  (t.modifiersData[r] = s);
              }
            },
            {
              name: "flip",
              enabled: !0,
              phase: "main",
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  r = e.name;
                if (!t.modifiersData[r]._skip) {
                  for (
                    var o = n.mainAxis,
                      i = void 0 === o || o,
                      s = n.altAxis,
                      a = void 0 === s || s,
                      l = n.fallbackPlacements,
                      c = n.padding,
                      d = n.boundary,
                      p = n.rootBoundary,
                      h = n.altBoundary,
                      u = n.flipVariations,
                      f = void 0 === u || u,
                      m = n.allowedAutoPlacements,
                      g = t.options.placement,
                      y = K(g),
                      v =
                        l ||
                        (y !== g && f
                          ? (function (e) {
                              if (K(e) === R) return [];
                              var t = te(e);
                              return [re(e), t, re(t)];
                            })(g)
                          : [te(g)]),
                      w = [g].concat(v).reduce(function (e, n) {
                        return e.concat(
                          K(n) === R
                            ? (function (e, t) {
                                void 0 === t && (t = {});
                                var n = t,
                                  r = n.placement,
                                  o = n.boundary,
                                  i = n.rootBoundary,
                                  s = n.padding,
                                  a = n.flipVariations,
                                  l = n.allowedAutoPlacements,
                                  c = void 0 === l ? F : l,
                                  d = Y(r),
                                  p = d
                                    ? a
                                      ? V
                                      : V.filter(function (e) {
                                          return Y(e) === d;
                                        })
                                    : I,
                                  h = p.filter(function (e) {
                                    return c.indexOf(e) >= 0;
                                  });
                                0 === h.length && (h = p);
                                var u = h.reduce(function (t, n) {
                                  return (t[n] = ce(e, { placement: n, boundary: o, rootBoundary: i, padding: s })[K(n)]), t;
                                }, {});
                                return Object.keys(u).sort(function (e, t) {
                                  return u[e] - u[t];
                                });
                              })(t, { placement: n, boundary: d, rootBoundary: p, padding: c, flipVariations: f, allowedAutoPlacements: m })
                            : n
                        );
                      }, []),
                      b = t.rects.reference,
                      x = t.rects.popper,
                      k = new Map(),
                      S = !0,
                      O = w[0],
                      M = 0;
                    M < w.length;
                    M++
                  ) {
                    var C = w[M],
                      N = K(C),
                      T = Y(C) === B,
                      $ = [E, D].indexOf(N) >= 0,
                      z = $ ? "width" : "height",
                      j = ce(t, { placement: C, boundary: d, rootBoundary: p, altBoundary: h, padding: c }),
                      L = $ ? (T ? A : P) : T ? D : E;
                    b[z] > x[z] && (L = te(L));
                    var H = te(L),
                      q = [];
                    if (
                      (i && q.push(j[N] <= 0),
                      a && q.push(j[L] <= 0, j[H] <= 0),
                      q.every(function (e) {
                        return e;
                      }))
                    ) {
                      (O = C), (S = !1);
                      break;
                    }
                    k.set(C, q);
                  }
                  if (S)
                    for (
                      var W = function (e) {
                          var t = w.find(function (t) {
                            var n = k.get(t);
                            if (n)
                              return n.slice(0, e).every(function (e) {
                                return e;
                              });
                          });
                          if (t) return (O = t), "break";
                        },
                        J = f ? 3 : 1;
                      J > 0 && "break" !== W(J);
                      J--
                    );
                  t.placement !== O && ((t.modifiersData[r]._skip = !0), (t.placement = O), (t.reset = !0));
                }
              },
              requiresIfExists: ["offset"],
              data: { _skip: !1 }
            },
            {
              name: "preventOverflow",
              enabled: !0,
              phase: "main",
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  r = e.name,
                  o = n.mainAxis,
                  i = void 0 === o || o,
                  s = n.altAxis,
                  a = void 0 !== s && s,
                  l = n.boundary,
                  p = n.rootBoundary,
                  h = n.altBoundary,
                  u = n.padding,
                  f = n.tether,
                  m = void 0 === f || f,
                  g = n.tetherOffset,
                  y = void 0 === g ? 0 : g,
                  v = ce(t, { boundary: l, rootBoundary: p, padding: u, altBoundary: h }),
                  w = K(t.placement),
                  b = Y(t.placement),
                  x = !b,
                  S = U(w),
                  O = "x" === S ? "y" : "x",
                  M = t.modifiersData.popperOffsets,
                  C = t.rects.reference,
                  N = t.rects.popper,
                  R = "function" == typeof y ? y(Object.assign({}, t.rects, { placement: t.placement })) : y,
                  I = "number" == typeof R ? { mainAxis: R, altAxis: R } : Object.assign({ mainAxis: 0, altAxis: 0 }, R),
                  $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                  z = { x: 0, y: 0 };
                if (M) {
                  if (i) {
                    var j,
                      V = "y" === S ? E : P,
                      F = "y" === S ? D : A,
                      L = "y" === S ? "height" : "width",
                      H = M[S],
                      q = H + v[V],
                      W = H - v[F],
                      J = m ? -N[L] / 2 : 0,
                      _ = b === B ? C[L] : N[L],
                      G = b === B ? -N[L] : -C[L],
                      X = t.elements.arrow,
                      Z = m && X ? k(X) : { width: 0, height: 0 },
                      Q = t.modifiersData["arrow#persistent"]
                        ? t.modifiersData["arrow#persistent"].padding
                        : { top: 0, right: 0, bottom: 0, left: 0 },
                      ee = Q[V],
                      te = Q[F],
                      ne = de(0, C[L], Z[L]),
                      re = x ? C[L] / 2 - J - ne - ee - I.mainAxis : _ - ne - ee - I.mainAxis,
                      oe = x ? -C[L] / 2 + J + ne + te + I.mainAxis : G + ne + te + I.mainAxis,
                      ie = t.elements.arrow && T(t.elements.arrow),
                      se = ie ? ("y" === S ? ie.clientTop || 0 : ie.clientLeft || 0) : 0,
                      ae = null != (j = null == $ ? void 0 : $[S]) ? j : 0,
                      le = H + oe - ae,
                      pe = de(m ? d(q, H + re - ae - se) : q, H, m ? c(W, le) : W);
                    (M[S] = pe), (z[S] = pe - H);
                  }
                  if (a) {
                    var he,
                      ue = "x" === S ? E : P,
                      fe = "x" === S ? D : A,
                      me = M[O],
                      ge = "y" === O ? "height" : "width",
                      ye = me + v[ue],
                      ve = me - v[fe],
                      we = -1 !== [E, P].indexOf(w),
                      be = null != (he = null == $ ? void 0 : $[O]) ? he : 0,
                      xe = we ? ye : me - C[ge] - N[ge] - be + I.altAxis,
                      ke = we ? me + C[ge] + N[ge] - be - I.altAxis : ve,
                      Se =
                        m && we
                          ? (function (e, t, n) {
                              var r = de(e, t, n);
                              return r > n ? n : r;
                            })(xe, me, ke)
                          : de(m ? xe : ye, me, m ? ke : ve);
                    (M[O] = Se), (z[O] = Se - me);
                  }
                  t.modifiersData[r] = z;
                }
              },
              requiresIfExists: ["offset"]
            },
            {
              name: "arrow",
              enabled: !0,
              phase: "main",
              fn: function (e) {
                var t,
                  n = e.state,
                  r = e.name,
                  o = e.options,
                  i = n.elements.arrow,
                  s = n.modifiersData.popperOffsets,
                  a = K(n.placement),
                  l = U(a),
                  c = [P, A].indexOf(a) >= 0 ? "height" : "width";
                if (i && s) {
                  var d = (function (e, t) {
                      return ae(
                        "number" != typeof (e = "function" == typeof e ? e(Object.assign({}, t.rects, { placement: t.placement })) : e)
                          ? e
                          : le(e, I)
                      );
                    })(o.padding, n),
                    p = k(i),
                    h = "y" === l ? E : P,
                    u = "y" === l ? D : A,
                    f = n.rects.reference[c] + n.rects.reference[l] - s[l] - n.rects.popper[c],
                    m = s[l] - n.rects.reference[l],
                    g = T(i),
                    y = g ? ("y" === l ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
                    v = f / 2 - m / 2,
                    w = d[h],
                    b = y - p[c] - d[u],
                    x = y / 2 - p[c] / 2 + v,
                    S = de(w, x, b),
                    O = l;
                  n.modifiersData[r] = (((t = {})[O] = S), (t.centerOffset = S - x), t);
                }
              },
              effect: function (e) {
                var t = e.state,
                  n = e.options.element,
                  r = void 0 === n ? "[data-popper-arrow]" : n;
                null != r &&
                  ("string" != typeof r || (r = t.elements.popper.querySelector(r))) &&
                  oe(t.elements.popper, r) &&
                  (t.elements.arrow = r);
              },
              requires: ["popperOffsets"],
              requiresIfExists: ["preventOverflow"]
            },
            {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (e) {
                var t = e.state,
                  n = e.name,
                  r = t.rects.reference,
                  o = t.rects.popper,
                  i = t.modifiersData.preventOverflow,
                  s = ce(t, { elementContext: "reference" }),
                  a = ce(t, { altBoundary: !0 }),
                  l = pe(s, r),
                  c = pe(a, o, i),
                  d = he(l),
                  p = he(c);
                (t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: d, hasPopperEscaped: p }),
                  (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                    "data-popper-reference-hidden": d,
                    "data-popper-escaped": p
                  }));
              }
            }
          ]
        }),
        fe = "tippy-content",
        me = "tippy-backdrop",
        ge = "tippy-arrow",
        ye = "tippy-svg-arrow",
        ve = { passive: !0, capture: !0 },
        we = function () {
          return document.body;
        };
      function be(e, t, n) {
        if (Array.isArray(e)) {
          var r = e[t];
          return null == r ? (Array.isArray(n) ? n[t] : n) : r;
        }
        return e;
      }
      function xe(e, t) {
        var n = {}.toString.call(e);
        return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1;
      }
      function ke(e, t) {
        return "function" == typeof e ? e.apply(void 0, t) : e;
      }
      function Se(e, t) {
        return 0 === t
          ? e
          : function (r) {
              clearTimeout(n),
                (n = setTimeout(function () {
                  e(r);
                }, t));
            };
        var n;
      }
      function Oe(e) {
        return [].concat(e);
      }
      function Me(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function Ce(e) {
        return [].slice.call(e);
      }
      function Ne(e) {
        return Object.keys(e).reduce(function (t, n) {
          return void 0 !== e[n] && (t[n] = e[n]), t;
        }, {});
      }
      function Te() {
        return document.createElement("div");
      }
      function Ee(e) {
        return ["Element", "Fragment"].some(function (t) {
          return xe(e, t);
        });
      }
      function De(e, t) {
        e.forEach(function (e) {
          e && (e.style.transitionDuration = t + "ms");
        });
      }
      function Ae(e, t) {
        e.forEach(function (e) {
          e && e.setAttribute("data-state", t);
        });
      }
      function Pe(e, t, n) {
        var r = t + "EventListener";
        ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
          e[r](t, n);
        });
      }
      function Re(e, t) {
        for (var n = t; n; ) {
          var r;
          if (e.contains(n)) return !0;
          n = null == n.getRootNode || null == (r = n.getRootNode()) ? void 0 : r.host;
        }
        return !1;
      }
      var Ie = { isTouch: !1 },
        Be = 0;
      function $e() {
        Ie.isTouch || ((Ie.isTouch = !0), window.performance && document.addEventListener("mousemove", ze));
      }
      function ze() {
        var e = performance.now();
        e - Be < 20 && ((Ie.isTouch = !1), document.removeEventListener("mousemove", ze)), (Be = e);
      }
      function je() {
        var e,
          t = document.activeElement;
        if ((e = t) && e._tippy && e._tippy.reference === e) {
          var n = t._tippy;
          t.blur && !n.state.isVisible && t.blur();
        }
      }
      var Ve = !("undefined" == typeof window || "undefined" == typeof document || !window.msCrypto),
        Fe = Object.assign(
          {
            appendTo: we,
            aria: { content: "auto", expanded: "auto" },
            delay: 0,
            duration: [300, 250],
            getReferenceClientRect: null,
            hideOnClick: !0,
            ignoreAttributes: !1,
            interactive: !1,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            moveTransition: "",
            offset: [0, 10],
            onAfterUpdate: function () {},
            onBeforeUpdate: function () {},
            onCreate: function () {},
            onDestroy: function () {},
            onHidden: function () {},
            onHide: function () {},
            onMount: function () {},
            onShow: function () {},
            onShown: function () {},
            onTrigger: function () {},
            onUntrigger: function () {},
            onClickOutside: function () {},
            placement: "top",
            plugins: [],
            popperOptions: {},
            render: null,
            showOnCreate: !1,
            touch: !0,
            trigger: "mouseenter focus",
            triggerTarget: null
          },
          { animateFill: !1, followCursor: !1, inlinePositioning: !1, sticky: !1 },
          { allowHTML: !1, animation: "fade", arrow: !0, content: "", inertia: !1, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 }
        ),
        Le = Object.keys(Fe);
      function He(e) {
        var t = (e.plugins || []).reduce(function (t, n) {
          var r,
            o = n.name,
            i = n.defaultValue;
          return o && (t[o] = void 0 !== e[o] ? e[o] : null != (r = Fe[o]) ? r : i), t;
        }, {});
        return Object.assign({}, e, t);
      }
      function qe(e, t) {
        var n = Object.assign(
          {},
          t,
          { content: ke(t.content, [e]) },
          t.ignoreAttributes
            ? {}
            : (function (e, t) {
                return (t ? Object.keys(He(Object.assign({}, Fe, { plugins: t }))) : Le).reduce(function (t, n) {
                  var r = (e.getAttribute("data-tippy-" + n) || "").trim();
                  if (!r) return t;
                  if ("content" === n) t[n] = r;
                  else
                    try {
                      t[n] = JSON.parse(r);
                    } catch (e) {
                      t[n] = r;
                    }
                  return t;
                }, {});
              })(e, t.plugins)
        );
        return (
          (n.aria = Object.assign({}, Fe.aria, n.aria)),
          (n.aria = {
            expanded: "auto" === n.aria.expanded ? t.interactive : n.aria.expanded,
            content: "auto" === n.aria.content ? (t.interactive ? null : "describedby") : n.aria.content
          }),
          n
        );
      }
      var We = function () {
        return "innerHTML";
      };
      function Je(e, t) {
        e[We()] = t;
      }
      function _e(e) {
        var t = Te();
        return !0 === e ? (t.className = ge) : ((t.className = ye), Ee(e) ? t.appendChild(e) : Je(t, e)), t;
      }
      function Ke(e, t) {
        Ee(t.content)
          ? (Je(e, ""), e.appendChild(t.content))
          : "function" != typeof t.content && (t.allowHTML ? Je(e, t.content) : (e.textContent = t.content));
      }
      function Ye(e) {
        var t = e.firstElementChild,
          n = Ce(t.children);
        return {
          box: t,
          content: n.find(function (e) {
            return e.classList.contains(fe);
          }),
          arrow: n.find(function (e) {
            return e.classList.contains(ge) || e.classList.contains(ye);
          }),
          backdrop: n.find(function (e) {
            return e.classList.contains(me);
          })
        };
      }
      function Ue(e) {
        var t = Te(),
          n = Te();
        (n.className = "tippy-box"), n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
        var r = Te();
        function o(n, r) {
          var o = Ye(t),
            i = o.box,
            s = o.content,
            a = o.arrow;
          r.theme ? i.setAttribute("data-theme", r.theme) : i.removeAttribute("data-theme"),
            "string" == typeof r.animation ? i.setAttribute("data-animation", r.animation) : i.removeAttribute("data-animation"),
            r.inertia ? i.setAttribute("data-inertia", "") : i.removeAttribute("data-inertia"),
            (i.style.maxWidth = "number" == typeof r.maxWidth ? r.maxWidth + "px" : r.maxWidth),
            r.role ? i.setAttribute("role", r.role) : i.removeAttribute("role"),
            (n.content === r.content && n.allowHTML === r.allowHTML) || Ke(s, e.props),
            r.arrow
              ? a
                ? n.arrow !== r.arrow && (i.removeChild(a), i.appendChild(_e(r.arrow)))
                : i.appendChild(_e(r.arrow))
              : a && i.removeChild(a);
        }
        return (
          (r.className = fe),
          r.setAttribute("data-state", "hidden"),
          Ke(r, e.props),
          t.appendChild(n),
          n.appendChild(r),
          o(e.props, e.props),
          { popper: t, onUpdate: o }
        );
      }
      Ue.$$tippy = !0;
      var Ge = 1,
        Xe = [],
        Ze = [];
      function Qe(e, t) {
        var n,
          r,
          o,
          i,
          s,
          a,
          l,
          c,
          d = qe(e, Object.assign({}, Fe, He(Ne(t)))),
          p = !1,
          h = !1,
          u = !1,
          f = !1,
          m = [],
          g = Se(K, d.interactiveDebounce),
          y = Ge++,
          v = (c = d.plugins).filter(function (e, t) {
            return c.indexOf(e) === t;
          }),
          w = {
            id: y,
            reference: e,
            popper: Te(),
            popperInstance: null,
            props: d,
            state: { isEnabled: !0, isVisible: !1, isDestroyed: !1, isMounted: !1, isShown: !1 },
            plugins: v,
            clearDelayTimeouts: function () {
              clearTimeout(n), clearTimeout(r), cancelAnimationFrame(o);
            },
            setProps: function (t) {
              if (!w.state.isDestroyed) {
                R("onBeforeUpdate", [w, t]), J();
                var n = w.props,
                  r = qe(e, Object.assign({}, n, Ne(t), { ignoreAttributes: !0 }));
                (w.props = r),
                  W(),
                  n.interactiveDebounce !== r.interactiveDebounce && ($(), (g = Se(K, r.interactiveDebounce))),
                  n.triggerTarget && !r.triggerTarget
                    ? Oe(n.triggerTarget).forEach(function (e) {
                        e.removeAttribute("aria-expanded");
                      })
                    : r.triggerTarget && e.removeAttribute("aria-expanded"),
                  B(),
                  P(),
                  k && k(n, r),
                  w.popperInstance &&
                    (X(),
                    Q().forEach(function (e) {
                      requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
                    })),
                  R("onAfterUpdate", [w, t]);
              }
            },
            setContent: function (e) {
              w.setProps({ content: e });
            },
            show: function () {
              var e = w.state.isVisible,
                t = w.state.isDestroyed,
                n = !w.state.isEnabled,
                r = Ie.isTouch && !w.props.touch,
                o = be(w.props.duration, 0, Fe.duration);
              if (!(e || t || n || r || T().hasAttribute("disabled") || (R("onShow", [w], !1), !1 === w.props.onShow(w)))) {
                if (
                  ((w.state.isVisible = !0),
                  N() && (x.style.visibility = "visible"),
                  P(),
                  F(),
                  w.state.isMounted || (x.style.transition = "none"),
                  N())
                ) {
                  var i = D();
                  De([i.box, i.content], 0);
                }
                var s, l, c;
                (a = function () {
                  var e;
                  if (w.state.isVisible && !f) {
                    if (((f = !0), x.offsetHeight, (x.style.transition = w.props.moveTransition), N() && w.props.animation)) {
                      var t = D(),
                        n = t.box,
                        r = t.content;
                      De([n, r], o), Ae([n, r], "visible");
                    }
                    I(),
                      B(),
                      Me(Ze, w),
                      null == (e = w.popperInstance) || e.forceUpdate(),
                      R("onMount", [w]),
                      w.props.animation &&
                        N() &&
                        (function (e, t) {
                          H(e, function () {
                            (w.state.isShown = !0), R("onShown", [w]);
                          });
                        })(o);
                  }
                }),
                  (l = w.props.appendTo),
                  (c = T()),
                  (s = (w.props.interactive && l === we) || "parent" === l ? c.parentNode : ke(l, [c])).contains(x) || s.appendChild(x),
                  (w.state.isMounted = !0),
                  X();
              }
            },
            hide: function () {
              var e = !w.state.isVisible,
                t = w.state.isDestroyed,
                n = !w.state.isEnabled,
                r = be(w.props.duration, 1, Fe.duration);
              if (!(e || t || n) && (R("onHide", [w], !1), !1 !== w.props.onHide(w))) {
                if (
                  ((w.state.isVisible = !1),
                  (w.state.isShown = !1),
                  (f = !1),
                  (p = !1),
                  N() && (x.style.visibility = "hidden"),
                  $(),
                  L(),
                  P(!0),
                  N())
                ) {
                  var o = D(),
                    i = o.box,
                    s = o.content;
                  w.props.animation && (De([i, s], r), Ae([i, s], "hidden"));
                }
                I(),
                  B(),
                  w.props.animation
                    ? N() &&
                      (function (e, t) {
                        H(e, function () {
                          !w.state.isVisible && x.parentNode && x.parentNode.contains(x) && t();
                        });
                      })(r, w.unmount)
                    : w.unmount();
              }
            },
            hideWithInteractivity: function (e) {
              E().addEventListener("mousemove", g), Me(Xe, g), g(e);
            },
            enable: function () {
              w.state.isEnabled = !0;
            },
            disable: function () {
              w.hide(), (w.state.isEnabled = !1);
            },
            unmount: function () {
              w.state.isVisible && w.hide(),
                w.state.isMounted &&
                  (Z(),
                  Q().forEach(function (e) {
                    e._tippy.unmount();
                  }),
                  x.parentNode && x.parentNode.removeChild(x),
                  (Ze = Ze.filter(function (e) {
                    return e !== w;
                  })),
                  (w.state.isMounted = !1),
                  R("onHidden", [w]));
            },
            destroy: function () {
              w.state.isDestroyed ||
                (w.clearDelayTimeouts(), w.unmount(), J(), delete e._tippy, (w.state.isDestroyed = !0), R("onDestroy", [w]));
            }
          };
        if (!d.render) return w;
        var b = d.render(w),
          x = b.popper,
          k = b.onUpdate;
        x.setAttribute("data-tippy-root", ""), (x.id = "tippy-" + w.id), (w.popper = x), (e._tippy = w), (x._tippy = w);
        var S = v.map(function (e) {
            return e.fn(w);
          }),
          O = e.hasAttribute("aria-expanded");
        return (
          W(),
          B(),
          P(),
          R("onCreate", [w]),
          d.showOnCreate && ee(),
          x.addEventListener("mouseenter", function () {
            w.props.interactive && w.state.isVisible && w.clearDelayTimeouts();
          }),
          x.addEventListener("mouseleave", function () {
            w.props.interactive && w.props.trigger.indexOf("mouseenter") >= 0 && E().addEventListener("mousemove", g);
          }),
          w
        );
        function M() {
          var e = w.props.touch;
          return Array.isArray(e) ? e : [e, 0];
        }
        function C() {
          return "hold" === M()[0];
        }
        function N() {
          var e;
          return !(null == (e = w.props.render) || !e.$$tippy);
        }
        function T() {
          return l || e;
        }
        function E() {
          var e,
            t,
            n = T().parentNode;
          return n ? (null != (t = Oe(n)[0]) && null != (e = t.ownerDocument) && e.body ? t.ownerDocument : document) : document;
        }
        function D() {
          return Ye(x);
        }
        function A(e) {
          return (w.state.isMounted && !w.state.isVisible) || Ie.isTouch || (i && "focus" === i.type)
            ? 0
            : be(w.props.delay, e ? 0 : 1, Fe.delay);
        }
        function P(e) {
          void 0 === e && (e = !1),
            (x.style.pointerEvents = w.props.interactive && !e ? "" : "none"),
            (x.style.zIndex = "" + w.props.zIndex);
        }
        function R(e, t, n) {
          var r;
          void 0 === n && (n = !0),
            S.forEach(function (n) {
              n[e] && n[e].apply(n, t);
            }),
            n && (r = w.props)[e].apply(r, t);
        }
        function I() {
          var t = w.props.aria;
          if (t.content) {
            var n = "aria-" + t.content,
              r = x.id;
            Oe(w.props.triggerTarget || e).forEach(function (e) {
              var t = e.getAttribute(n);
              if (w.state.isVisible) e.setAttribute(n, t ? t + " " + r : r);
              else {
                var o = t && t.replace(r, "").trim();
                o ? e.setAttribute(n, o) : e.removeAttribute(n);
              }
            });
          }
        }
        function B() {
          !O &&
            w.props.aria.expanded &&
            Oe(w.props.triggerTarget || e).forEach(function (e) {
              w.props.interactive
                ? e.setAttribute("aria-expanded", w.state.isVisible && e === T() ? "true" : "false")
                : e.removeAttribute("aria-expanded");
            });
        }
        function $() {
          E().removeEventListener("mousemove", g),
            (Xe = Xe.filter(function (e) {
              return e !== g;
            }));
        }
        function z(t) {
          if (!Ie.isTouch || (!u && "mousedown" !== t.type)) {
            var n = (t.composedPath && t.composedPath()[0]) || t.target;
            if (!w.props.interactive || !Re(x, n)) {
              if (
                Oe(w.props.triggerTarget || e).some(function (e) {
                  return Re(e, n);
                })
              ) {
                if (Ie.isTouch) return;
                if (w.state.isVisible && w.props.trigger.indexOf("click") >= 0) return;
              } else R("onClickOutside", [w, t]);
              !0 === w.props.hideOnClick &&
                (w.clearDelayTimeouts(),
                w.hide(),
                (h = !0),
                setTimeout(function () {
                  h = !1;
                }),
                w.state.isMounted || L());
            }
          }
        }
        function j() {
          u = !0;
        }
        function V() {
          u = !1;
        }
        function F() {
          var e = E();
          e.addEventListener("mousedown", z, !0),
            e.addEventListener("touchend", z, ve),
            e.addEventListener("touchstart", V, ve),
            e.addEventListener("touchmove", j, ve);
        }
        function L() {
          var e = E();
          e.removeEventListener("mousedown", z, !0),
            e.removeEventListener("touchend", z, ve),
            e.removeEventListener("touchstart", V, ve),
            e.removeEventListener("touchmove", j, ve);
        }
        function H(e, t) {
          var n = D().box;
          function r(e) {
            e.target === n && (Pe(n, "remove", r), t());
          }
          if (0 === e) return t();
          Pe(n, "remove", s), Pe(n, "add", r), (s = r);
        }
        function q(t, n, r) {
          void 0 === r && (r = !1),
            Oe(w.props.triggerTarget || e).forEach(function (e) {
              e.addEventListener(t, n, r), m.push({ node: e, eventType: t, handler: n, options: r });
            });
        }
        function W() {
          var e;
          C() && (q("touchstart", _, { passive: !0 }), q("touchend", Y, { passive: !0 })),
            ((e = w.props.trigger), e.split(/\s+/).filter(Boolean)).forEach(function (e) {
              if ("manual" !== e)
                switch ((q(e, _), e)) {
                  case "mouseenter":
                    q("mouseleave", Y);
                    break;
                  case "focus":
                    q(Ve ? "focusout" : "blur", U);
                    break;
                  case "focusin":
                    q("focusout", U);
                }
            });
        }
        function J() {
          m.forEach(function (e) {
            var t = e.node,
              n = e.eventType,
              r = e.handler,
              o = e.options;
            t.removeEventListener(n, r, o);
          }),
            (m = []);
        }
        function _(e) {
          var t,
            n = !1;
          if (w.state.isEnabled && !G(e) && !h) {
            var r = "focus" === (null == (t = i) ? void 0 : t.type);
            (i = e),
              (l = e.currentTarget),
              B(),
              !w.state.isVisible &&
                xe(e, "MouseEvent") &&
                Xe.forEach(function (t) {
                  return t(e);
                }),
              "click" === e.type && (w.props.trigger.indexOf("mouseenter") < 0 || p) && !1 !== w.props.hideOnClick && w.state.isVisible
                ? (n = !0)
                : ee(e),
              "click" === e.type && (p = !n),
              n && !r && te(e);
          }
        }
        function K(e) {
          var t = e.target,
            n = T().contains(t) || x.contains(t);
          if ("mousemove" !== e.type || !n) {
            var r = Q()
              .concat(x)
              .map(function (e) {
                var t,
                  n = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
                return n ? { popperRect: e.getBoundingClientRect(), popperState: n, props: d } : null;
              })
              .filter(Boolean);
            (function (e, t) {
              var n = t.clientX,
                r = t.clientY;
              return e.every(function (e) {
                var t = e.popperRect,
                  o = e.popperState,
                  i = e.props.interactiveBorder,
                  s = o.placement.split("-")[0],
                  a = o.modifiersData.offset;
                if (!a) return !0;
                var l = "bottom" === s ? a.top.y : 0,
                  c = "top" === s ? a.bottom.y : 0,
                  d = "right" === s ? a.left.x : 0,
                  p = "left" === s ? a.right.x : 0,
                  h = t.top - r + l > i,
                  u = r - t.bottom - c > i,
                  f = t.left - n + d > i,
                  m = n - t.right - p > i;
                return h || u || f || m;
              });
            })(r, e) && ($(), te(e));
          }
        }
        function Y(e) {
          G(e) || (w.props.trigger.indexOf("click") >= 0 && p) || (w.props.interactive ? w.hideWithInteractivity(e) : te(e));
        }
        function U(e) {
          (w.props.trigger.indexOf("focusin") < 0 && e.target !== T()) ||
            (w.props.interactive && e.relatedTarget && x.contains(e.relatedTarget)) ||
            te(e);
        }
        function G(e) {
          return !!Ie.isTouch && C() !== e.type.indexOf("touch") >= 0;
        }
        function X() {
          Z();
          var t = w.props,
            n = t.popperOptions,
            r = t.placement,
            o = t.offset,
            i = t.getReferenceClientRect,
            s = t.moveTransition,
            l = N() ? Ye(x).arrow : null,
            c = i ? { getBoundingClientRect: i, contextElement: i.contextElement || T() } : e,
            d = [
              { name: "offset", options: { offset: o } },
              { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } },
              { name: "flip", options: { padding: 5 } },
              { name: "computeStyles", options: { adaptive: !s } },
              {
                name: "$$tippy",
                enabled: !0,
                phase: "beforeWrite",
                requires: ["computeStyles"],
                fn: function (e) {
                  var t = e.state;
                  if (N()) {
                    var n = D().box;
                    ["placement", "reference-hidden", "escaped"].forEach(function (e) {
                      "placement" === e
                        ? n.setAttribute("data-placement", t.placement)
                        : t.attributes.popper["data-popper-" + e]
                        ? n.setAttribute("data-" + e, "")
                        : n.removeAttribute("data-" + e);
                    }),
                      (t.attributes.popper = {});
                  }
                }
              }
            ];
          N() && l && d.push({ name: "arrow", options: { element: l, padding: 3 } }),
            d.push.apply(d, (null == n ? void 0 : n.modifiers) || []),
            (w.popperInstance = ue(c, x, Object.assign({}, n, { placement: r, onFirstUpdate: a, modifiers: d })));
        }
        function Z() {
          w.popperInstance && (w.popperInstance.destroy(), (w.popperInstance = null));
        }
        function Q() {
          return Ce(x.querySelectorAll("[data-tippy-root]"));
        }
        function ee(e) {
          w.clearDelayTimeouts(), e && R("onTrigger", [w, e]), F();
          var t = A(!0),
            r = M(),
            o = r[0],
            i = r[1];
          Ie.isTouch && "hold" === o && i && (t = i),
            t
              ? (n = setTimeout(function () {
                  w.show();
                }, t))
              : w.show();
        }
        function te(e) {
          if ((w.clearDelayTimeouts(), R("onUntrigger", [w, e]), w.state.isVisible)) {
            if (
              !(
                w.props.trigger.indexOf("mouseenter") >= 0 &&
                w.props.trigger.indexOf("click") >= 0 &&
                ["mouseleave", "mousemove"].indexOf(e.type) >= 0 &&
                p
              )
            ) {
              var t = A(!1);
              t
                ? (r = setTimeout(function () {
                    w.state.isVisible && w.hide();
                  }, t))
                : (o = requestAnimationFrame(function () {
                    w.hide();
                  }));
            }
          } else L();
        }
      }
      function et(e, t) {
        void 0 === t && (t = {});
        var n = Fe.plugins.concat(t.plugins || []);
        document.addEventListener("touchstart", $e, ve), window.addEventListener("blur", je);
        var r,
          o = Object.assign({}, t, { plugins: n }),
          i = ((r = e),
          Ee(r)
            ? [r]
            : (function (e) {
                return xe(e, "NodeList");
              })(r)
            ? Ce(r)
            : Array.isArray(r)
            ? r
            : Ce(document.querySelectorAll(r))).reduce(function (e, t) {
            var n = t && Qe(t, o);
            return n && e.push(n), e;
          }, []);
        return Ee(e) ? i[0] : i;
      }
      (et.defaultProps = Fe),
        (et.setDefaultProps = function (e) {
          Object.keys(e).forEach(function (t) {
            Fe[t] = e[t];
          });
        }),
        (et.currentInput = Ie),
        Object.assign({}, Q, {
          effect: function (e) {
            var t = e.state,
              n = {
                popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" },
                arrow: { position: "absolute" },
                reference: {}
              };
            Object.assign(t.elements.popper.style, n.popper),
              (t.styles = n),
              t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow);
          }
        }),
        et.setDefaultProps({ render: Ue });
      const tt = et;
      class nt {
        constructor({ editor: e, element: t, view: n, tippyOptions: o = {}, updateDelay: i = 250, shouldShow: s }) {
          (this.preventHide = !1),
            (this.shouldShow = ({ view: e, state: t, from: n, to: o }) => {
              const { doc: i, selection: s } = t,
                { empty: a } = s,
                l = !i.textBetween(n, o).length && (0, r.xh)(t.selection),
                c = this.element.contains(document.activeElement);
              return !((!e.hasFocus() && !c) || a || l || !this.editor.isEditable);
            }),
            (this.mousedownHandler = () => {
              this.preventHide = !0;
            }),
            (this.dragstartHandler = () => {
              this.hide();
            }),
            (this.focusHandler = () => {
              setTimeout(() => this.update(this.editor.view));
            }),
            (this.blurHandler = ({ event: e }) => {
              var t;
              this.preventHide
                ? (this.preventHide = !1)
                : ((null == e ? void 0 : e.relatedTarget) &&
                    (null === (t = this.element.parentNode) || void 0 === t ? void 0 : t.contains(e.relatedTarget))) ||
                  this.hide();
            }),
            (this.tippyBlurHandler = (e) => {
              this.blurHandler({ event: e });
            }),
            (this.handleDebouncedUpdate = (e, t) => {
              const n = !(null == t ? void 0 : t.selection.eq(e.state.selection)),
                r = !(null == t ? void 0 : t.doc.eq(e.state.doc));
              (n || r) &&
                (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer),
                (this.updateDebounceTimer = window.setTimeout(() => {
                  this.updateHandler(e, n, r, t);
                }, this.updateDelay)));
            }),
            (this.updateHandler = (e, t, n, o) => {
              var i, s, a;
              const { state: l, composing: c } = e,
                { selection: d } = l;
              if (c || (!t && !n)) return;
              this.createTooltip();
              const { ranges: p } = d,
                h = Math.min(...p.map((e) => e.$from.pos)),
                u = Math.max(...p.map((e) => e.$to.pos));
              (
                null === (i = this.shouldShow) || void 0 === i
                  ? void 0
                  : i.call(this, { editor: this.editor, view: e, state: l, oldState: o, from: h, to: u })
              )
                ? (null === (s = this.tippy) ||
                    void 0 === s ||
                    s.setProps({
                      getReferenceClientRect:
                        (null === (a = this.tippyOptions) || void 0 === a ? void 0 : a.getReferenceClientRect) ||
                        (() => {
                          if ((0, r.EG)(l.selection)) {
                            let t = e.nodeDOM(h);
                            const n = t.dataset.nodeViewWrapper ? t : t.querySelector("[data-node-view-wrapper]");
                            if ((n && (t = n.firstChild), t)) return t.getBoundingClientRect();
                          }
                          return (0, r.pr)(e, h, u);
                        })
                    }),
                  this.show())
                : this.hide();
            }),
            (this.editor = e),
            (this.element = t),
            (this.view = n),
            (this.updateDelay = i),
            s && (this.shouldShow = s),
            this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }),
            this.view.dom.addEventListener("dragstart", this.dragstartHandler),
            this.editor.on("focus", this.focusHandler),
            this.editor.on("blur", this.blurHandler),
            (this.tippyOptions = o),
            this.element.remove(),
            (this.element.style.visibility = "visible");
        }
        createTooltip() {
          const { element: e } = this.editor.options,
            t = !!e.parentElement;
          !this.tippy &&
            t &&
            ((this.tippy = tt(e, {
              duration: 0,
              getReferenceClientRect: null,
              content: this.element,
              interactive: !0,
              trigger: "manual",
              placement: "top",
              hideOnClick: "toggle",
              ...this.tippyOptions
            })),
            this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
        }
        update(e, t) {
          const { state: n } = e,
            r = n.selection.$from.pos !== n.selection.$to.pos;
          if (this.updateDelay > 0 && r) return void this.handleDebouncedUpdate(e, t);
          const o = !(null == t ? void 0 : t.selection.eq(e.state.selection)),
            i = !(null == t ? void 0 : t.doc.eq(e.state.doc));
          this.updateHandler(e, o, i, t);
        }
        show() {
          var e;
          null === (e = this.tippy) || void 0 === e || e.show();
        }
        hide() {
          var e;
          null === (e = this.tippy) || void 0 === e || e.hide();
        }
        destroy() {
          var e, t;
          (null === (e = this.tippy) || void 0 === e ? void 0 : e.popper.firstChild) &&
            this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler),
            null === (t = this.tippy) || void 0 === t || t.destroy(),
            this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }),
            this.view.dom.removeEventListener("dragstart", this.dragstartHandler),
            this.editor.off("focus", this.focusHandler),
            this.editor.off("blur", this.blurHandler);
        }
      }
      r.hj.create({
        name: "bubbleMenu",
        addOptions: () => ({ element: null, tippyOptions: {}, pluginKey: "bubbleMenu", updateDelay: void 0, shouldShow: null }),
        addProseMirrorPlugins() {
          return this.options.element
            ? [
                ((e = {
                  pluginKey: this.options.pluginKey,
                  editor: this.editor,
                  element: this.options.element,
                  tippyOptions: this.options.tippyOptions,
                  updateDelay: this.options.updateDelay,
                  shouldShow: this.options.shouldShow
                }),
                new o.Sy({
                  key: "string" == typeof e.pluginKey ? new o.H$(e.pluginKey) : e.pluginKey,
                  view: (t) => new nt({ view: t, ...e })
                }))
              ]
            : [];
          var e;
        }
      });
      class rt {
        constructor({ editor: e, element: t, view: n, tippyOptions: r = {}, shouldShow: o }) {
          (this.preventHide = !1),
            (this.shouldShow = ({ view: e, state: t }) => {
              const { selection: n } = t,
                { $anchor: r, empty: o } = n,
                i = 1 === r.depth,
                s = r.parent.isTextblock && !r.parent.type.spec.code && !r.parent.textContent;
              return !!(e.hasFocus() && o && i && s && this.editor.isEditable);
            }),
            (this.mousedownHandler = () => {
              this.preventHide = !0;
            }),
            (this.focusHandler = () => {
              setTimeout(() => this.update(this.editor.view));
            }),
            (this.blurHandler = ({ event: e }) => {
              var t;
              this.preventHide
                ? (this.preventHide = !1)
                : ((null == e ? void 0 : e.relatedTarget) &&
                    (null === (t = this.element.parentNode) || void 0 === t ? void 0 : t.contains(e.relatedTarget))) ||
                  this.hide();
            }),
            (this.tippyBlurHandler = (e) => {
              this.blurHandler({ event: e });
            }),
            (this.editor = e),
            (this.element = t),
            (this.view = n),
            o && (this.shouldShow = o),
            this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }),
            this.editor.on("focus", this.focusHandler),
            this.editor.on("blur", this.blurHandler),
            (this.tippyOptions = r),
            this.element.remove(),
            (this.element.style.visibility = "visible");
        }
        createTooltip() {
          const { element: e } = this.editor.options,
            t = !!e.parentElement;
          !this.tippy &&
            t &&
            ((this.tippy = tt(e, {
              duration: 0,
              getReferenceClientRect: null,
              content: this.element,
              interactive: !0,
              trigger: "manual",
              placement: "right",
              hideOnClick: "toggle",
              ...this.tippyOptions
            })),
            this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
        }
        update(e, t) {
          var n, o, i;
          const { state: s } = e,
            { doc: a, selection: l } = s,
            { from: c, to: d } = l;
          (t && t.doc.eq(a) && t.selection.eq(l)) ||
            (this.createTooltip(),
            (
              null === (n = this.shouldShow) || void 0 === n
                ? void 0
                : n.call(this, { editor: this.editor, view: e, state: s, oldState: t })
            )
              ? (null === (o = this.tippy) ||
                  void 0 === o ||
                  o.setProps({
                    getReferenceClientRect:
                      (null === (i = this.tippyOptions) || void 0 === i ? void 0 : i.getReferenceClientRect) || (() => (0, r.pr)(e, c, d))
                  }),
                this.show())
              : this.hide());
        }
        show() {
          var e;
          null === (e = this.tippy) || void 0 === e || e.show();
        }
        hide() {
          var e;
          null === (e = this.tippy) || void 0 === e || e.hide();
        }
        destroy() {
          var e, t;
          (null === (e = this.tippy) || void 0 === e ? void 0 : e.popper.firstChild) &&
            this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler),
            null === (t = this.tippy) || void 0 === t || t.destroy(),
            this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }),
            this.editor.off("focus", this.focusHandler),
            this.editor.off("blur", this.blurHandler);
        }
      }
      r.hj.create({
        name: "floatingMenu",
        addOptions: () => ({ element: null, tippyOptions: {}, pluginKey: "floatingMenu", shouldShow: null }),
        addProseMirrorPlugins() {
          return this.options.element
            ? [
                ((e = {
                  pluginKey: this.options.pluginKey,
                  editor: this.editor,
                  element: this.options.element,
                  tippyOptions: this.options.tippyOptions,
                  shouldShow: this.options.shouldShow
                }),
                new o.Sy({
                  key: "string" == typeof e.pluginKey ? new o.H$(e.pluginKey) : e.pluginKey,
                  view: (t) => new rt({ view: t, ...e })
                }))
              ]
            : [];
          var e;
        }
      });
      var ot = n(20144),
        it = n(81891);
      class st extends r.ML {
        constructor() {
          super(...arguments), (this.contentComponent = null);
        }
      }
      const at = {
          name: "EditorContent",
          props: { editor: { default: null, type: Object } },
          watch: {
            editor: {
              immediate: !0,
              handler(e) {
                e &&
                  e.options.element &&
                  this.$nextTick(() => {
                    const t = this.$el;
                    t &&
                      e.options.element.firstChild &&
                      (t.append(...e.options.element.childNodes),
                      (e.contentComponent = this),
                      e.setOptions({ element: t }),
                      e.createNodeViews());
                  });
              }
            }
          },
          render: (e) => e("div"),
          beforeDestroy() {
            const { editor: e } = this;
            if (!e) return;
            if ((e.isDestroyed || e.view.setProps({ nodeViews: {} }), (e.contentComponent = null), !e.options.element.firstChild)) return;
            const t = document.createElement("div");
            t.append(...e.options.element.childNodes), e.setOptions({ element: t });
          }
        },
        lt = {
          props: { as: { type: String, default: "div" } },
          render(e) {
            return e(this.as, { style: { whiteSpace: "pre-wrap" }, attrs: { "data-node-view-content": "" } });
          }
        },
        ct = {
          props: { as: { type: String, default: "div" } },
          inject: ["onDragStart", "decorationClasses"],
          render(e) {
            return e(
              this.as,
              {
                class: this.decorationClasses.value,
                style: { whiteSpace: "normal" },
                attrs: { "data-node-view-wrapper": "" },
                on: { dragstart: this.onDragStart }
              },
              this.$slots.default
            );
          }
        };
      class dt {
        constructor(e, t) {
          const n = "function" == typeof e ? e : ot.ZP.extend(e);
          this.ref = new n(t).$mount();
        }
        get element() {
          return this.ref.$el;
        }
        updateProps(e = {}) {
          var t, n, r;
          if (!this.ref.$props) return;
          const o =
              null !==
                (r =
                  null === (n = null === (t = this.ref.$props.editor) || void 0 === t ? void 0 : t.contentComponent) || void 0 === n
                    ? void 0
                    : n.$options._base) && void 0 !== r
                ? r
                : ot.ZP,
            i = o.config.silent;
          (o.config.silent = !0),
            Object.entries(e).forEach(([e, t]) => {
              this.ref.$props[e] = t;
            }),
            (o.config.silent = i);
        }
        destroy() {
          this.ref.$destroy();
        }
      }
      const pt = {
        editor: (0, it.F5)().required,
        node: (0, it.F5)().required,
        decorations: (0, it.F5)().required,
        selected: (0, it.zW)().required,
        extension: (0, it.F5)().required,
        getPos: (0, it.vl)().required,
        updateAttributes: (0, it.vl)().required,
        deleteNode: (0, it.vl)().required
      };
      class ht extends r.DK {
        mount() {
          var e, t;
          const n = {
              editor: this.editor,
              node: this.node,
              decorations: this.decorations,
              selected: !1,
              extension: this.extension,
              getPos: () => this.getPos(),
              updateAttributes: (e = {}) => this.updateAttributes(e),
              deleteNode: () => this.deleteNode()
            },
            r = this.onDragStart.bind(this);
          this.decorationClasses = ot.ZP.observable({ value: this.getDecorationClasses() });
          const o = (
            null !== (t = null === (e = this.editor.contentComponent) || void 0 === e ? void 0 : e.$options._base) && void 0 !== t
              ? t
              : ot.ZP
          )
            .extend(this.component)
            .extend({ props: Object.keys(n), provide: () => ({ onDragStart: r, decorationClasses: this.decorationClasses }) });
          this.renderer = new dt(o, { parent: this.editor.contentComponent, propsData: n });
        }
        get dom() {
          if (!this.renderer.element.hasAttribute("data-node-view-wrapper"))
            throw Error("Please use the NodeViewWrapper component for your node view.");
          return this.renderer.element;
        }
        get contentDOM() {
          return this.node.isLeaf ? null : this.dom.querySelector("[data-node-view-content]") || this.dom;
        }
        update(e, t) {
          const n = (e) => {
            (this.decorationClasses.value = this.getDecorationClasses()), this.renderer.updateProps(e);
          };
          if ("function" == typeof this.options.update) {
            const r = this.node,
              o = this.decorations;
            return (
              (this.node = e),
              (this.decorations = t),
              this.options.update({
                oldNode: r,
                oldDecorations: o,
                newNode: e,
                newDecorations: t,
                updateProps: () => n({ node: e, decorations: t })
              })
            );
          }
          return (
            e.type === this.node.type &&
            ((e === this.node && this.decorations === t) || ((this.node = e), (this.decorations = t), n({ node: e, decorations: t })), !0)
          );
        }
        selectNode() {
          this.renderer.updateProps({ selected: !0 }), this.renderer.element.classList.add("ProseMirror-selectednode");
        }
        deselectNode() {
          this.renderer.updateProps({ selected: !1 }), this.renderer.element.classList.remove("ProseMirror-selectednode");
        }
        getDecorationClasses() {
          return this.decorations
            .map((e) => e.type.attrs.class)
            .flat()
            .join(" ");
        }
        destroy() {
          this.renderer.destroy();
        }
      }
      function ut(e, t) {
        return (n) => (n.editor.contentComponent ? new ht(e, n, t) : {});
      }
    },
    82337: (e, t, n) => {
      n.d(t, { $: () => f, h: () => u });
      for (
        var r = {
            8: "Backspace",
            9: "Tab",
            10: "Enter",
            12: "NumLock",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            44: "PrintScreen",
            45: "Insert",
            46: "Delete",
            59: ";",
            61: "=",
            91: "Meta",
            92: "Meta",
            106: "*",
            107: "+",
            108: ",",
            109: "-",
            110: ".",
            111: "/",
            144: "NumLock",
            145: "ScrollLock",
            160: "Shift",
            161: "Shift",
            162: "Control",
            163: "Control",
            164: "Alt",
            165: "Alt",
            173: "-",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'"
          },
          o = {
            48: ")",
            49: "!",
            50: "@",
            51: "#",
            52: "$",
            53: "%",
            54: "^",
            55: "&",
            56: "*",
            57: "(",
            59: ":",
            61: "+",
            173: "_",
            186: ":",
            187: "+",
            188: "<",
            189: "_",
            190: ">",
            191: "?",
            192: "~",
            219: "{",
            220: "|",
            221: "}",
            222: '"'
          },
          i = "undefined" != typeof navigator && /Mac/.test(navigator.platform),
          s = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),
          a = 0;
        a < 10;
        a++
      )
        r[48 + a] = r[96 + a] = String(a);
      for (a = 1; a <= 24; a++) r[a + 111] = "F" + a;
      for (a = 65; a <= 90; a++) (r[a] = String.fromCharCode(a + 32)), (o[a] = String.fromCharCode(a));
      for (var l in r) o.hasOwnProperty(l) || (o[l] = r[l]);
      var c = n(2376);
      const d = "undefined" != typeof navigator && /Mac|iP(hone|[oa]d)/.test(navigator.platform);
      function p(e) {
        let t,
          n,
          r,
          o,
          i = e.split(/-(?!$)/),
          s = i[i.length - 1];
        "Space" == s && (s = " ");
        for (let e = 0; e < i.length - 1; e++) {
          let s = i[e];
          if (/^(cmd|meta|m)$/i.test(s)) o = !0;
          else if (/^a(lt)?$/i.test(s)) t = !0;
          else if (/^(c|ctrl|control)$/i.test(s)) n = !0;
          else if (/^s(hift)?$/i.test(s)) r = !0;
          else {
            if (!/^mod$/i.test(s)) throw new Error("Unrecognized modifier name: " + s);
            d ? (o = !0) : (n = !0);
          }
        }
        return t && (s = "Alt-" + s), n && (s = "Ctrl-" + s), o && (s = "Meta-" + s), r && (s = "Shift-" + s), s;
      }
      function h(e, t, n = !0) {
        return (
          t.altKey && (e = "Alt-" + e),
          t.ctrlKey && (e = "Ctrl-" + e),
          t.metaKey && (e = "Meta-" + e),
          n && t.shiftKey && (e = "Shift-" + e),
          e
        );
      }
      function u(e) {
        return new c.Sy({ props: { handleKeyDown: f(e) } });
      }
      function f(e) {
        let t = (function (e) {
          let t = Object.create(null);
          for (let n in e) t[p(n)] = e[n];
          return t;
        })(e);
        return function (e, n) {
          let a,
            l = (function (e) {
              var t =
                (!(
                  (i && e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey) ||
                  (s && e.shiftKey && e.key && 1 == e.key.length) ||
                  "Unidentified" == e.key
                ) &&
                  e.key) ||
                (e.shiftKey ? o : r)[e.keyCode] ||
                e.key ||
                "Unidentified";
              return (
                "Esc" == t && (t = "Escape"),
                "Del" == t && (t = "Delete"),
                "Left" == t && (t = "ArrowLeft"),
                "Up" == t && (t = "ArrowUp"),
                "Right" == t && (t = "ArrowRight"),
                "Down" == t && (t = "ArrowDown"),
                t
              );
            })(n),
            c = t[h(l, n)];
          if (c && c(e.state, e.dispatch, e)) return !0;
          if (1 == l.length && " " != l) {
            if (n.shiftKey) {
              let r = t[h(l, n, !1)];
              if (r && r(e.state, e.dispatch, e)) return !0;
            }
            if ((n.shiftKey || n.altKey || n.metaKey || l.charCodeAt(0) > 127) && (a = r[n.keyCode]) && a != l) {
              let r = t[h(a, n)];
              if (r && r(e.state, e.dispatch, e)) return !0;
            }
          }
          return !1;
        };
      }
    },
    87823: (e, t, n) => {
      function r(e) {
        this.content = e;
      }
      n.d(t, {
        aw: () => X,
        PW: () => ae,
        HY: () => a,
        vc: () => p,
        ZU: () => Y,
        NB: () => A,
        Ts: () => E,
        e4: () => h,
        V_: () => U,
        p2: () => u
      }),
        (r.prototype = {
          constructor: r,
          find: function (e) {
            for (var t = 0; t < this.content.length; t += 2) if (this.content[t] === e) return t;
            return -1;
          },
          get: function (e) {
            var t = this.find(e);
            return -1 == t ? void 0 : this.content[t + 1];
          },
          update: function (e, t, n) {
            var o = n && n != e ? this.remove(n) : this,
              i = o.find(e),
              s = o.content.slice();
            return -1 == i ? s.push(n || e, t) : ((s[i + 1] = t), n && (s[i] = n)), new r(s);
          },
          remove: function (e) {
            var t = this.find(e);
            if (-1 == t) return this;
            var n = this.content.slice();
            return n.splice(t, 2), new r(n);
          },
          addToStart: function (e, t) {
            return new r([e, t].concat(this.remove(e).content));
          },
          addToEnd: function (e, t) {
            var n = this.remove(e).content.slice();
            return n.push(e, t), new r(n);
          },
          addBefore: function (e, t, n) {
            var o = this.remove(t),
              i = o.content.slice(),
              s = o.find(e);
            return i.splice(-1 == s ? i.length : s, 0, t, n), new r(i);
          },
          forEach: function (e) {
            for (var t = 0; t < this.content.length; t += 2) e(this.content[t], this.content[t + 1]);
          },
          prepend: function (e) {
            return (e = r.from(e)).size ? new r(e.content.concat(this.subtract(e).content)) : this;
          },
          append: function (e) {
            return (e = r.from(e)).size ? new r(this.subtract(e).content.concat(e.content)) : this;
          },
          subtract: function (e) {
            var t = this;
            e = r.from(e);
            for (var n = 0; n < e.content.length; n += 2) t = t.remove(e.content[n]);
            return t;
          },
          toObject: function () {
            var e = {};
            return (
              this.forEach(function (t, n) {
                e[t] = n;
              }),
              e
            );
          },
          get size() {
            return this.content.length >> 1;
          }
        }),
        (r.from = function (e) {
          if (e instanceof r) return e;
          var t = [];
          if (e) for (var n in e) t.push(n, e[n]);
          return new r(t);
        });
      const o = r;
      function i(e, t, n) {
        for (let r = 0; ; r++) {
          if (r == e.childCount || r == t.childCount) return e.childCount == t.childCount ? null : n;
          let o = e.child(r),
            s = t.child(r);
          if (o != s) {
            if (!o.sameMarkup(s)) return n;
            if (o.isText && o.text != s.text) {
              for (let e = 0; o.text[e] == s.text[e]; e++) n++;
              return n;
            }
            if (o.content.size || s.content.size) {
              let e = i(o.content, s.content, n + 1);
              if (null != e) return e;
            }
            n += o.nodeSize;
          } else n += o.nodeSize;
        }
      }
      function s(e, t, n, r) {
        for (let o = e.childCount, i = t.childCount; ; ) {
          if (0 == o || 0 == i) return o == i ? null : { a: n, b: r };
          let a = e.child(--o),
            l = t.child(--i),
            c = a.nodeSize;
          if (a != l) {
            if (!a.sameMarkup(l)) return { a: n, b: r };
            if (a.isText && a.text != l.text) {
              let e = 0,
                t = Math.min(a.text.length, l.text.length);
              for (; e < t && a.text[a.text.length - e - 1] == l.text[l.text.length - e - 1]; ) e++, n--, r--;
              return { a: n, b: r };
            }
            if (a.content.size || l.content.size) {
              let e = s(a.content, l.content, n - 1, r - 1);
              if (e) return e;
            }
            (n -= c), (r -= c);
          } else (n -= c), (r -= c);
        }
      }
      class a {
        constructor(e, t) {
          if (((this.content = e), (this.size = t || 0), null == t)) for (let t = 0; t < e.length; t++) this.size += e[t].nodeSize;
        }
        nodesBetween(e, t, n, r = 0, o) {
          for (let i = 0, s = 0; s < t; i++) {
            let a = this.content[i],
              l = s + a.nodeSize;
            if (l > e && !1 !== n(a, r + s, o || null, i) && a.content.size) {
              let o = s + 1;
              a.nodesBetween(Math.max(0, e - o), Math.min(a.content.size, t - o), n, r + o);
            }
            s = l;
          }
        }
        descendants(e) {
          this.nodesBetween(0, this.size, e);
        }
        textBetween(e, t, n, r) {
          let o = "",
            i = !0;
          return (
            this.nodesBetween(
              e,
              t,
              (s, a) => {
                s.isText
                  ? ((o += s.text.slice(Math.max(e, a) - a, t - a)), (i = !n))
                  : s.isLeaf
                  ? (r ? (o += "function" == typeof r ? r(s) : r) : s.type.spec.leafText && (o += s.type.spec.leafText(s)), (i = !n))
                  : !i && s.isBlock && ((o += n), (i = !0));
              },
              0
            ),
            o
          );
        }
        append(e) {
          if (!e.size) return this;
          if (!this.size) return e;
          let t = this.lastChild,
            n = e.firstChild,
            r = this.content.slice(),
            o = 0;
          for (t.isText && t.sameMarkup(n) && ((r[r.length - 1] = t.withText(t.text + n.text)), (o = 1)); o < e.content.length; o++)
            r.push(e.content[o]);
          return new a(r, this.size + e.size);
        }
        cut(e, t = this.size) {
          if (0 == e && t == this.size) return this;
          let n = [],
            r = 0;
          if (t > e)
            for (let o = 0, i = 0; i < t; o++) {
              let s = this.content[o],
                a = i + s.nodeSize;
              a > e &&
                ((i < e || a > t) &&
                  (s = s.isText
                    ? s.cut(Math.max(0, e - i), Math.min(s.text.length, t - i))
                    : s.cut(Math.max(0, e - i - 1), Math.min(s.content.size, t - i - 1))),
                n.push(s),
                (r += s.nodeSize)),
                (i = a);
            }
          return new a(n, r);
        }
        cutByIndex(e, t) {
          return e == t ? a.empty : 0 == e && t == this.content.length ? this : new a(this.content.slice(e, t));
        }
        replaceChild(e, t) {
          let n = this.content[e];
          if (n == t) return this;
          let r = this.content.slice(),
            o = this.size + t.nodeSize - n.nodeSize;
          return (r[e] = t), new a(r, o);
        }
        addToStart(e) {
          return new a([e].concat(this.content), this.size + e.nodeSize);
        }
        addToEnd(e) {
          return new a(this.content.concat(e), this.size + e.nodeSize);
        }
        eq(e) {
          if (this.content.length != e.content.length) return !1;
          for (let t = 0; t < this.content.length; t++) if (!this.content[t].eq(e.content[t])) return !1;
          return !0;
        }
        get firstChild() {
          return this.content.length ? this.content[0] : null;
        }
        get lastChild() {
          return this.content.length ? this.content[this.content.length - 1] : null;
        }
        get childCount() {
          return this.content.length;
        }
        child(e) {
          let t = this.content[e];
          if (!t) throw new RangeError("Index " + e + " out of range for " + this);
          return t;
        }
        maybeChild(e) {
          return this.content[e] || null;
        }
        forEach(e) {
          for (let t = 0, n = 0; t < this.content.length; t++) {
            let r = this.content[t];
            e(r, n, t), (n += r.nodeSize);
          }
        }
        findDiffStart(e, t = 0) {
          return i(this, e, t);
        }
        findDiffEnd(e, t = this.size, n = e.size) {
          return s(this, e, t, n);
        }
        findIndex(e, t = -1) {
          if (0 == e) return c(0, e);
          if (e == this.size) return c(this.content.length, e);
          if (e > this.size || e < 0) throw new RangeError(`Position ${e} outside of fragment (${this})`);
          for (let n = 0, r = 0; ; n++) {
            let o = r + this.child(n).nodeSize;
            if (o >= e) return o == e || t > 0 ? c(n + 1, o) : c(n, r);
            r = o;
          }
        }
        toString() {
          return "<" + this.toStringInner() + ">";
        }
        toStringInner() {
          return this.content.join(", ");
        }
        toJSON() {
          return this.content.length ? this.content.map((e) => e.toJSON()) : null;
        }
        static fromJSON(e, t) {
          if (!t) return a.empty;
          if (!Array.isArray(t)) throw new RangeError("Invalid input for Fragment.fromJSON");
          return new a(t.map(e.nodeFromJSON));
        }
        static fromArray(e) {
          if (!e.length) return a.empty;
          let t,
            n = 0;
          for (let r = 0; r < e.length; r++) {
            let o = e[r];
            (n += o.nodeSize),
              r && o.isText && e[r - 1].sameMarkup(o)
                ? (t || (t = e.slice(0, r)), (t[t.length - 1] = o.withText(t[t.length - 1].text + o.text)))
                : t && t.push(o);
          }
          return new a(t || e, n);
        }
        static from(e) {
          if (!e) return a.empty;
          if (e instanceof a) return e;
          if (Array.isArray(e)) return this.fromArray(e);
          if (e.attrs) return new a([e], e.nodeSize);
          throw new RangeError(
            "Can not convert " +
              e +
              " to a Fragment" +
              (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : "")
          );
        }
      }
      a.empty = new a([], 0);
      const l = { index: 0, offset: 0 };
      function c(e, t) {
        return (l.index = e), (l.offset = t), l;
      }
      function d(e, t) {
        if (e === t) return !0;
        if (!e || "object" != typeof e || !t || "object" != typeof t) return !1;
        let n = Array.isArray(e);
        if (Array.isArray(t) != n) return !1;
        if (n) {
          if (e.length != t.length) return !1;
          for (let n = 0; n < e.length; n++) if (!d(e[n], t[n])) return !1;
        } else {
          for (let n in e) if (!(n in t) || !d(e[n], t[n])) return !1;
          for (let n in t) if (!(n in e)) return !1;
        }
        return !0;
      }
      class p {
        constructor(e, t) {
          (this.type = e), (this.attrs = t);
        }
        addToSet(e) {
          let t,
            n = !1;
          for (let r = 0; r < e.length; r++) {
            let o = e[r];
            if (this.eq(o)) return e;
            if (this.type.excludes(o.type)) t || (t = e.slice(0, r));
            else {
              if (o.type.excludes(this.type)) return e;
              !n && o.type.rank > this.type.rank && (t || (t = e.slice(0, r)), t.push(this), (n = !0)), t && t.push(o);
            }
          }
          return t || (t = e.slice()), n || t.push(this), t;
        }
        removeFromSet(e) {
          for (let t = 0; t < e.length; t++) if (this.eq(e[t])) return e.slice(0, t).concat(e.slice(t + 1));
          return e;
        }
        isInSet(e) {
          for (let t = 0; t < e.length; t++) if (this.eq(e[t])) return !0;
          return !1;
        }
        eq(e) {
          return this == e || (this.type == e.type && d(this.attrs, e.attrs));
        }
        toJSON() {
          let e = { type: this.type.name };
          for (let t in this.attrs) {
            e.attrs = this.attrs;
            break;
          }
          return e;
        }
        static fromJSON(e, t) {
          if (!t) throw new RangeError("Invalid input for Mark.fromJSON");
          let n = e.marks[t.type];
          if (!n) throw new RangeError(`There is no mark type ${t.type} in this schema`);
          return n.create(t.attrs);
        }
        static sameSet(e, t) {
          if (e == t) return !0;
          if (e.length != t.length) return !1;
          for (let n = 0; n < e.length; n++) if (!e[n].eq(t[n])) return !1;
          return !0;
        }
        static setFrom(e) {
          if (!e || (Array.isArray(e) && 0 == e.length)) return p.none;
          if (e instanceof p) return [e];
          let t = e.slice();
          return t.sort((e, t) => e.type.rank - t.type.rank), t;
        }
      }
      p.none = [];
      class h extends Error {}
      class u {
        constructor(e, t, n) {
          (this.content = e), (this.openStart = t), (this.openEnd = n);
        }
        get size() {
          return this.content.size - this.openStart - this.openEnd;
        }
        insertAt(e, t) {
          let n = m(this.content, e + this.openStart, t);
          return n && new u(n, this.openStart, this.openEnd);
        }
        removeBetween(e, t) {
          return new u(f(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
        }
        eq(e) {
          return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
        }
        toString() {
          return this.content + "(" + this.openStart + "," + this.openEnd + ")";
        }
        toJSON() {
          if (!this.content.size) return null;
          let e = { content: this.content.toJSON() };
          return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
        }
        static fromJSON(e, t) {
          if (!t) return u.empty;
          let n = t.openStart || 0,
            r = t.openEnd || 0;
          if ("number" != typeof n || "number" != typeof r) throw new RangeError("Invalid input for Slice.fromJSON");
          return new u(a.fromJSON(e, t.content), n, r);
        }
        static maxOpen(e, t = !0) {
          let n = 0,
            r = 0;
          for (let r = e.firstChild; r && !r.isLeaf && (t || !r.type.spec.isolating); r = r.firstChild) n++;
          for (let n = e.lastChild; n && !n.isLeaf && (t || !n.type.spec.isolating); n = n.lastChild) r++;
          return new u(e, n, r);
        }
      }
      function f(e, t, n) {
        let { index: r, offset: o } = e.findIndex(t),
          i = e.maybeChild(r),
          { index: s, offset: a } = e.findIndex(n);
        if (o == t || i.isText) {
          if (a != n && !e.child(s).isText) throw new RangeError("Removing non-flat range");
          return e.cut(0, t).append(e.cut(n));
        }
        if (r != s) throw new RangeError("Removing non-flat range");
        return e.replaceChild(r, i.copy(f(i.content, t - o - 1, n - o - 1)));
      }
      function m(e, t, n, r) {
        let { index: o, offset: i } = e.findIndex(t),
          s = e.maybeChild(o);
        if (i == t || s.isText) return r && !r.canReplace(o, o, n) ? null : e.cut(0, t).append(n).append(e.cut(t));
        let a = m(s.content, t - i - 1, n);
        return a && e.replaceChild(o, s.copy(a));
      }
      function g(e, t, n) {
        if (n.openStart > e.depth) throw new h("Inserted content deeper than insertion position");
        if (e.depth - n.openStart != t.depth - n.openEnd) throw new h("Inconsistent open depths");
        return y(e, t, n, 0);
      }
      function y(e, t, n, r) {
        let o = e.index(r),
          i = e.node(r);
        if (o == t.index(r) && r < e.depth - n.openStart) {
          let s = y(e, t, n, r + 1);
          return i.copy(i.content.replaceChild(o, s));
        }
        if (n.content.size) {
          if (n.openStart || n.openEnd || e.depth != r || t.depth != r) {
            let { start: o, end: s } = (function (e, t) {
              let n = t.depth - e.openStart,
                r = t.node(n).copy(e.content);
              for (let e = n - 1; e >= 0; e--) r = t.node(e).copy(a.from(r));
              return { start: r.resolveNoCache(e.openStart + n), end: r.resolveNoCache(r.content.size - e.openEnd - n) };
            })(n, e);
            return k(i, S(e, o, s, t, r));
          }
          {
            let r = e.parent,
              o = r.content;
            return k(r, o.cut(0, e.parentOffset).append(n.content).append(o.cut(t.parentOffset)));
          }
        }
        return k(i, O(e, t, r));
      }
      function v(e, t) {
        if (!t.type.compatibleContent(e.type)) throw new h("Cannot join " + t.type.name + " onto " + e.type.name);
      }
      function w(e, t, n) {
        let r = e.node(n);
        return v(r, t.node(n)), r;
      }
      function b(e, t) {
        let n = t.length - 1;
        n >= 0 && e.isText && e.sameMarkup(t[n]) ? (t[n] = e.withText(t[n].text + e.text)) : t.push(e);
      }
      function x(e, t, n, r) {
        let o = (t || e).node(n),
          i = 0,
          s = t ? t.index(n) : o.childCount;
        e && ((i = e.index(n)), e.depth > n ? i++ : e.textOffset && (b(e.nodeAfter, r), i++));
        for (let e = i; e < s; e++) b(o.child(e), r);
        t && t.depth == n && t.textOffset && b(t.nodeBefore, r);
      }
      function k(e, t) {
        return e.type.checkContent(t), e.copy(t);
      }
      function S(e, t, n, r, o) {
        let i = e.depth > o && w(e, t, o + 1),
          s = r.depth > o && w(n, r, o + 1),
          l = [];
        return (
          x(null, e, o, l),
          i && s && t.index(o) == n.index(o)
            ? (v(i, s), b(k(i, S(e, t, n, r, o + 1)), l))
            : (i && b(k(i, O(e, t, o + 1)), l), x(t, n, o, l), s && b(k(s, O(n, r, o + 1)), l)),
          x(r, null, o, l),
          new a(l)
        );
      }
      function O(e, t, n) {
        let r = [];
        return x(null, e, n, r), e.depth > n && b(k(w(e, t, n + 1), O(e, t, n + 1)), r), x(t, null, n, r), new a(r);
      }
      u.empty = new u(a.empty, 0, 0);
      class M {
        constructor(e, t, n) {
          (this.pos = e), (this.path = t), (this.parentOffset = n), (this.depth = t.length / 3 - 1);
        }
        resolveDepth(e) {
          return null == e ? this.depth : e < 0 ? this.depth + e : e;
        }
        get parent() {
          return this.node(this.depth);
        }
        get doc() {
          return this.node(0);
        }
        node(e) {
          return this.path[3 * this.resolveDepth(e)];
        }
        index(e) {
          return this.path[3 * this.resolveDepth(e) + 1];
        }
        indexAfter(e) {
          return (e = this.resolveDepth(e)), this.index(e) + (e != this.depth || this.textOffset ? 1 : 0);
        }
        start(e) {
          return 0 == (e = this.resolveDepth(e)) ? 0 : this.path[3 * e - 1] + 1;
        }
        end(e) {
          return (e = this.resolveDepth(e)), this.start(e) + this.node(e).content.size;
        }
        before(e) {
          if (!(e = this.resolveDepth(e))) throw new RangeError("There is no position before the top-level node");
          return e == this.depth + 1 ? this.pos : this.path[3 * e - 1];
        }
        after(e) {
          if (!(e = this.resolveDepth(e))) throw new RangeError("There is no position after the top-level node");
          return e == this.depth + 1 ? this.pos : this.path[3 * e - 1] + this.path[3 * e].nodeSize;
        }
        get textOffset() {
          return this.pos - this.path[this.path.length - 1];
        }
        get nodeAfter() {
          let e = this.parent,
            t = this.index(this.depth);
          if (t == e.childCount) return null;
          let n = this.pos - this.path[this.path.length - 1],
            r = e.child(t);
          return n ? e.child(t).cut(n) : r;
        }
        get nodeBefore() {
          let e = this.index(this.depth),
            t = this.pos - this.path[this.path.length - 1];
          return t ? this.parent.child(e).cut(0, t) : 0 == e ? null : this.parent.child(e - 1);
        }
        posAtIndex(e, t) {
          t = this.resolveDepth(t);
          let n = this.path[3 * t],
            r = 0 == t ? 0 : this.path[3 * t - 1] + 1;
          for (let t = 0; t < e; t++) r += n.child(t).nodeSize;
          return r;
        }
        marks() {
          let e = this.parent,
            t = this.index();
          if (0 == e.content.size) return p.none;
          if (this.textOffset) return e.child(t).marks;
          let n = e.maybeChild(t - 1),
            r = e.maybeChild(t);
          if (!n) {
            let e = n;
            (n = r), (r = e);
          }
          let o = n.marks;
          for (var i = 0; i < o.length; i++)
            !1 !== o[i].type.spec.inclusive || (r && o[i].isInSet(r.marks)) || (o = o[i--].removeFromSet(o));
          return o;
        }
        marksAcross(e) {
          let t = this.parent.maybeChild(this.index());
          if (!t || !t.isInline) return null;
          let n = t.marks,
            r = e.parent.maybeChild(e.index());
          for (var o = 0; o < n.length; o++)
            !1 !== n[o].type.spec.inclusive || (r && n[o].isInSet(r.marks)) || (n = n[o--].removeFromSet(n));
          return n;
        }
        sharedDepth(e) {
          for (let t = this.depth; t > 0; t--) if (this.start(t) <= e && this.end(t) >= e) return t;
          return 0;
        }
        blockRange(e = this, t) {
          if (e.pos < this.pos) return e.blockRange(this);
          for (let n = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); n >= 0; n--)
            if (e.pos <= this.end(n) && (!t || t(this.node(n)))) return new E(this, e, n);
          return null;
        }
        sameParent(e) {
          return this.pos - this.parentOffset == e.pos - e.parentOffset;
        }
        max(e) {
          return e.pos > this.pos ? e : this;
        }
        min(e) {
          return e.pos < this.pos ? e : this;
        }
        toString() {
          let e = "";
          for (let t = 1; t <= this.depth; t++) e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
          return e + ":" + this.parentOffset;
        }
        static resolve(e, t) {
          if (!(t >= 0 && t <= e.content.size)) throw new RangeError("Position " + t + " out of range");
          let n = [],
            r = 0,
            o = t;
          for (let t = e; ; ) {
            let { index: e, offset: i } = t.content.findIndex(o),
              s = o - i;
            if ((n.push(t, e, r + i), !s)) break;
            if (((t = t.child(e)), t.isText)) break;
            (o = s - 1), (r += i + 1);
          }
          return new M(t, n, o);
        }
        static resolveCached(e, t) {
          for (let n = 0; n < C.length; n++) {
            let r = C[n];
            if (r.pos == t && r.doc == e) return r;
          }
          let n = (C[N] = M.resolve(e, t));
          return (N = (N + 1) % T), n;
        }
      }
      let C = [],
        N = 0,
        T = 12;
      class E {
        constructor(e, t, n) {
          (this.$from = e), (this.$to = t), (this.depth = n);
        }
        get start() {
          return this.$from.before(this.depth + 1);
        }
        get end() {
          return this.$to.after(this.depth + 1);
        }
        get parent() {
          return this.$from.node(this.depth);
        }
        get startIndex() {
          return this.$from.index(this.depth);
        }
        get endIndex() {
          return this.$to.indexAfter(this.depth);
        }
      }
      const D = Object.create(null);
      class A {
        constructor(e, t, n, r = p.none) {
          (this.type = e), (this.attrs = t), (this.marks = r), (this.content = n || a.empty);
        }
        get nodeSize() {
          return this.isLeaf ? 1 : 2 + this.content.size;
        }
        get childCount() {
          return this.content.childCount;
        }
        child(e) {
          return this.content.child(e);
        }
        maybeChild(e) {
          return this.content.maybeChild(e);
        }
        forEach(e) {
          this.content.forEach(e);
        }
        nodesBetween(e, t, n, r = 0) {
          this.content.nodesBetween(e, t, n, r, this);
        }
        descendants(e) {
          this.nodesBetween(0, this.content.size, e);
        }
        get textContent() {
          return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
        }
        textBetween(e, t, n, r) {
          return this.content.textBetween(e, t, n, r);
        }
        get firstChild() {
          return this.content.firstChild;
        }
        get lastChild() {
          return this.content.lastChild;
        }
        eq(e) {
          return this == e || (this.sameMarkup(e) && this.content.eq(e.content));
        }
        sameMarkup(e) {
          return this.hasMarkup(e.type, e.attrs, e.marks);
        }
        hasMarkup(e, t, n) {
          return this.type == e && d(this.attrs, t || e.defaultAttrs || D) && p.sameSet(this.marks, n || p.none);
        }
        copy(e = null) {
          return e == this.content ? this : new A(this.type, this.attrs, e, this.marks);
        }
        mark(e) {
          return e == this.marks ? this : new A(this.type, this.attrs, this.content, e);
        }
        cut(e, t = this.content.size) {
          return 0 == e && t == this.content.size ? this : this.copy(this.content.cut(e, t));
        }
        slice(e, t = this.content.size, n = !1) {
          if (e == t) return u.empty;
          let r = this.resolve(e),
            o = this.resolve(t),
            i = n ? 0 : r.sharedDepth(t),
            s = r.start(i),
            a = r.node(i).content.cut(r.pos - s, o.pos - s);
          return new u(a, r.depth - i, o.depth - i);
        }
        replace(e, t, n) {
          return g(this.resolve(e), this.resolve(t), n);
        }
        nodeAt(e) {
          for (let t = this; ; ) {
            let { index: n, offset: r } = t.content.findIndex(e);
            if (((t = t.maybeChild(n)), !t)) return null;
            if (r == e || t.isText) return t;
            e -= r + 1;
          }
        }
        childAfter(e) {
          let { index: t, offset: n } = this.content.findIndex(e);
          return { node: this.content.maybeChild(t), index: t, offset: n };
        }
        childBefore(e) {
          if (0 == e) return { node: null, index: 0, offset: 0 };
          let { index: t, offset: n } = this.content.findIndex(e);
          if (n < e) return { node: this.content.child(t), index: t, offset: n };
          let r = this.content.child(t - 1);
          return { node: r, index: t - 1, offset: n - r.nodeSize };
        }
        resolve(e) {
          return M.resolveCached(this, e);
        }
        resolveNoCache(e) {
          return M.resolve(this, e);
        }
        rangeHasMark(e, t, n) {
          let r = !1;
          return t > e && this.nodesBetween(e, t, (e) => (n.isInSet(e.marks) && (r = !0), !r)), r;
        }
        get isBlock() {
          return this.type.isBlock;
        }
        get isTextblock() {
          return this.type.isTextblock;
        }
        get inlineContent() {
          return this.type.inlineContent;
        }
        get isInline() {
          return this.type.isInline;
        }
        get isText() {
          return this.type.isText;
        }
        get isLeaf() {
          return this.type.isLeaf;
        }
        get isAtom() {
          return this.type.isAtom;
        }
        toString() {
          if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
          let e = this.type.name;
          return this.content.size && (e += "(" + this.content.toStringInner() + ")"), R(this.marks, e);
        }
        contentMatchAt(e) {
          let t = this.type.contentMatch.matchFragment(this.content, 0, e);
          if (!t) throw new Error("Called contentMatchAt on a node with invalid content");
          return t;
        }
        canReplace(e, t, n = a.empty, r = 0, o = n.childCount) {
          let i = this.contentMatchAt(e).matchFragment(n, r, o),
            s = i && i.matchFragment(this.content, t);
          if (!s || !s.validEnd) return !1;
          for (let e = r; e < o; e++) if (!this.type.allowsMarks(n.child(e).marks)) return !1;
          return !0;
        }
        canReplaceWith(e, t, n, r) {
          if (r && !this.type.allowsMarks(r)) return !1;
          let o = this.contentMatchAt(e).matchType(n),
            i = o && o.matchFragment(this.content, t);
          return !!i && i.validEnd;
        }
        canAppend(e) {
          return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
        }
        check() {
          this.type.checkContent(this.content);
          let e = p.none;
          for (let t = 0; t < this.marks.length; t++) e = this.marks[t].addToSet(e);
          if (!p.sameSet(e, this.marks))
            throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((e) => e.type.name)}`);
          this.content.forEach((e) => e.check());
        }
        toJSON() {
          let e = { type: this.type.name };
          for (let t in this.attrs) {
            e.attrs = this.attrs;
            break;
          }
          return (
            this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((e) => e.toJSON())), e
          );
        }
        static fromJSON(e, t) {
          if (!t) throw new RangeError("Invalid input for Node.fromJSON");
          let n = null;
          if (t.marks) {
            if (!Array.isArray(t.marks)) throw new RangeError("Invalid mark data for Node.fromJSON");
            n = t.marks.map(e.markFromJSON);
          }
          if ("text" == t.type) {
            if ("string" != typeof t.text) throw new RangeError("Invalid text node in JSON");
            return e.text(t.text, n);
          }
          let r = a.fromJSON(e, t.content);
          return e.nodeType(t.type).create(t.attrs, r, n);
        }
      }
      A.prototype.text = void 0;
      class P extends A {
        constructor(e, t, n, r) {
          if ((super(e, t, null, r), !n)) throw new RangeError("Empty text nodes are not allowed");
          this.text = n;
        }
        toString() {
          return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : R(this.marks, JSON.stringify(this.text));
        }
        get textContent() {
          return this.text;
        }
        textBetween(e, t) {
          return this.text.slice(e, t);
        }
        get nodeSize() {
          return this.text.length;
        }
        mark(e) {
          return e == this.marks ? this : new P(this.type, this.attrs, this.text, e);
        }
        withText(e) {
          return e == this.text ? this : new P(this.type, this.attrs, e, this.marks);
        }
        cut(e = 0, t = this.text.length) {
          return 0 == e && t == this.text.length ? this : this.withText(this.text.slice(e, t));
        }
        eq(e) {
          return this.sameMarkup(e) && this.text == e.text;
        }
        toJSON() {
          let e = super.toJSON();
          return (e.text = this.text), e;
        }
      }
      function R(e, t) {
        for (let n = e.length - 1; n >= 0; n--) t = e[n].type.name + "(" + t + ")";
        return t;
      }
      class I {
        constructor(e) {
          (this.validEnd = e), (this.next = []), (this.wrapCache = []);
        }
        static parse(e, t) {
          let n = new B(e, t);
          if (null == n.next) return I.empty;
          let r = $(n);
          n.next && n.err("Unexpected trailing text");
          let o = (function (e) {
            let t = Object.create(null);
            return (function n(r) {
              let o = [];
              r.forEach((t) => {
                e[t].forEach(({ term: t, to: n }) => {
                  if (!t) return;
                  let r;
                  for (let e = 0; e < o.length; e++) o[e][0] == t && (r = o[e][1]);
                  H(e, n).forEach((e) => {
                    r || o.push([t, (r = [])]), -1 == r.indexOf(e) && r.push(e);
                  });
                });
              });
              let i = (t[r.join(",")] = new I(r.indexOf(e.length - 1) > -1));
              for (let e = 0; e < o.length; e++) {
                let r = o[e][1].sort(L);
                i.next.push({ type: o[e][0], next: t[r.join(",")] || n(r) });
              }
              return i;
            })(H(e, 0));
          })(
            (function (e) {
              let t = [[]];
              return (
                o(
                  (function e(t, i) {
                    if ("choice" == t.type) return t.exprs.reduce((t, n) => t.concat(e(n, i)), []);
                    if ("seq" != t.type) {
                      if ("star" == t.type) {
                        let s = n();
                        return r(i, s), o(e(t.expr, s), s), [r(s)];
                      }
                      if ("plus" == t.type) {
                        let s = n();
                        return o(e(t.expr, i), s), o(e(t.expr, s), s), [r(s)];
                      }
                      if ("opt" == t.type) return [r(i)].concat(e(t.expr, i));
                      if ("range" == t.type) {
                        let s = i;
                        for (let r = 0; r < t.min; r++) {
                          let r = n();
                          o(e(t.expr, s), r), (s = r);
                        }
                        if (-1 == t.max) o(e(t.expr, s), s);
                        else
                          for (let i = t.min; i < t.max; i++) {
                            let i = n();
                            r(s, i), o(e(t.expr, s), i), (s = i);
                          }
                        return [r(s)];
                      }
                      if ("name" == t.type) return [r(i, void 0, t.value)];
                      throw new Error("Unknown expr type");
                    }
                    for (let r = 0; ; r++) {
                      let s = e(t.exprs[r], i);
                      if (r == t.exprs.length - 1) return s;
                      o(s, (i = n()));
                    }
                  })(e, 0),
                  n()
                ),
                t
              );
              function n() {
                return t.push([]) - 1;
              }
              function r(e, n, r) {
                let o = { term: r, to: n };
                return t[e].push(o), o;
              }
              function o(e, t) {
                e.forEach((e) => (e.to = t));
              }
            })(r)
          );
          return (
            (function (e, t) {
              for (let n = 0, r = [e]; n < r.length; n++) {
                let e = r[n],
                  o = !e.validEnd,
                  i = [];
                for (let t = 0; t < e.next.length; t++) {
                  let { type: n, next: s } = e.next[t];
                  i.push(n.name), !o || n.isText || n.hasRequiredAttrs() || (o = !1), -1 == r.indexOf(s) && r.push(s);
                }
                o &&
                  t.err(
                    "Only non-generatable nodes (" +
                      i.join(", ") +
                      ") in a required position (see https://prosemirror.net/docs/guide/#generatable)"
                  );
              }
            })(o, n),
            o
          );
        }
        matchType(e) {
          for (let t = 0; t < this.next.length; t++) if (this.next[t].type == e) return this.next[t].next;
          return null;
        }
        matchFragment(e, t = 0, n = e.childCount) {
          let r = this;
          for (let o = t; r && o < n; o++) r = r.matchType(e.child(o).type);
          return r;
        }
        get inlineContent() {
          return 0 != this.next.length && this.next[0].type.isInline;
        }
        get defaultType() {
          for (let e = 0; e < this.next.length; e++) {
            let { type: t } = this.next[e];
            if (!t.isText && !t.hasRequiredAttrs()) return t;
          }
          return null;
        }
        compatible(e) {
          for (let t = 0; t < this.next.length; t++)
            for (let n = 0; n < e.next.length; n++) if (this.next[t].type == e.next[n].type) return !0;
          return !1;
        }
        fillBefore(e, t = !1, n = 0) {
          let r = [this];
          return (function o(i, s) {
            let l = i.matchFragment(e, n);
            if (l && (!t || l.validEnd)) return a.from(s.map((e) => e.createAndFill()));
            for (let e = 0; e < i.next.length; e++) {
              let { type: t, next: n } = i.next[e];
              if (!t.isText && !t.hasRequiredAttrs() && -1 == r.indexOf(n)) {
                r.push(n);
                let e = o(n, s.concat(t));
                if (e) return e;
              }
            }
            return null;
          })(this, []);
        }
        findWrapping(e) {
          for (let t = 0; t < this.wrapCache.length; t += 2) if (this.wrapCache[t] == e) return this.wrapCache[t + 1];
          let t = this.computeWrapping(e);
          return this.wrapCache.push(e, t), t;
        }
        computeWrapping(e) {
          let t = Object.create(null),
            n = [{ match: this, type: null, via: null }];
          for (; n.length; ) {
            let r = n.shift(),
              o = r.match;
            if (o.matchType(e)) {
              let e = [];
              for (let t = r; t.type; t = t.via) e.push(t.type);
              return e.reverse();
            }
            for (let e = 0; e < o.next.length; e++) {
              let { type: i, next: s } = o.next[e];
              i.isLeaf ||
                i.hasRequiredAttrs() ||
                i.name in t ||
                (r.type && !s.validEnd) ||
                (n.push({ match: i.contentMatch, type: i, via: r }), (t[i.name] = !0));
            }
          }
          return null;
        }
        get edgeCount() {
          return this.next.length;
        }
        edge(e) {
          if (e >= this.next.length) throw new RangeError(`There's no ${e}th edge in this content match`);
          return this.next[e];
        }
        toString() {
          let e = [];
          return (
            (function t(n) {
              e.push(n);
              for (let r = 0; r < n.next.length; r++) -1 == e.indexOf(n.next[r].next) && t(n.next[r].next);
            })(this),
            e
              .map((t, n) => {
                let r = n + (t.validEnd ? "*" : " ") + " ";
                for (let n = 0; n < t.next.length; n++) r += (n ? ", " : "") + t.next[n].type.name + "->" + e.indexOf(t.next[n].next);
                return r;
              })
              .join("\n")
          );
        }
      }
      I.empty = new I(!0);
      class B {
        constructor(e, t) {
          (this.string = e),
            (this.nodeTypes = t),
            (this.inline = null),
            (this.pos = 0),
            (this.tokens = e.split(/\s*(?=\b|\W|$)/)),
            "" == this.tokens[this.tokens.length - 1] && this.tokens.pop(),
            "" == this.tokens[0] && this.tokens.shift();
        }
        get next() {
          return this.tokens[this.pos];
        }
        eat(e) {
          return this.next == e && (this.pos++ || !0);
        }
        err(e) {
          throw new SyntaxError(e + " (in content expression '" + this.string + "')");
        }
      }
      function $(e) {
        let t = [];
        do {
          t.push(z(e));
        } while (e.eat("|"));
        return 1 == t.length ? t[0] : { type: "choice", exprs: t };
      }
      function z(e) {
        let t = [];
        do {
          t.push(j(e));
        } while (e.next && ")" != e.next && "|" != e.next);
        return 1 == t.length ? t[0] : { type: "seq", exprs: t };
      }
      function j(e) {
        let t = (function (e) {
          if (e.eat("(")) {
            let t = $(e);
            return e.eat(")") || e.err("Missing closing paren"), t;
          }
          if (!/\W/.test(e.next)) {
            let t = (function (e, t) {
              let n = e.nodeTypes,
                r = n[t];
              if (r) return [r];
              let o = [];
              for (let e in n) {
                let r = n[e];
                r.groups.indexOf(t) > -1 && o.push(r);
              }
              return 0 == o.length && e.err("No node type or group '" + t + "' found"), o;
            })(e, e.next).map(
              (t) => (
                null == e.inline ? (e.inline = t.isInline) : e.inline != t.isInline && e.err("Mixing inline and block content"),
                { type: "name", value: t }
              )
            );
            return e.pos++, 1 == t.length ? t[0] : { type: "choice", exprs: t };
          }
          e.err("Unexpected token '" + e.next + "'");
        })(e);
        for (;;)
          if (e.eat("+")) t = { type: "plus", expr: t };
          else if (e.eat("*")) t = { type: "star", expr: t };
          else if (e.eat("?")) t = { type: "opt", expr: t };
          else {
            if (!e.eat("{")) break;
            t = F(e, t);
          }
        return t;
      }
      function V(e) {
        /\D/.test(e.next) && e.err("Expected number, got '" + e.next + "'");
        let t = Number(e.next);
        return e.pos++, t;
      }
      function F(e, t) {
        let n = V(e),
          r = n;
        return (
          e.eat(",") && (r = "}" != e.next ? V(e) : -1),
          e.eat("}") || e.err("Unclosed braced range"),
          { type: "range", min: n, max: r, expr: t }
        );
      }
      function L(e, t) {
        return t - e;
      }
      function H(e, t) {
        let n = [];
        return (
          (function t(r) {
            let o = e[r];
            if (1 == o.length && !o[0].term) return t(o[0].to);
            n.push(r);
            for (let e = 0; e < o.length; e++) {
              let { term: r, to: i } = o[e];
              r || -1 != n.indexOf(i) || t(i);
            }
          })(t),
          n.sort(L)
        );
      }
      function q(e) {
        let t = Object.create(null);
        for (let n in e) {
          let r = e[n];
          if (!r.hasDefault) return null;
          t[n] = r.default;
        }
        return t;
      }
      function W(e, t) {
        let n = Object.create(null);
        for (let r in e) {
          let o = t && t[r];
          if (void 0 === o) {
            let t = e[r];
            if (!t.hasDefault) throw new RangeError("No value supplied for attribute " + r);
            o = t.default;
          }
          n[r] = o;
        }
        return n;
      }
      function J(e) {
        let t = Object.create(null);
        if (e) for (let n in e) t[n] = new K(e[n]);
        return t;
      }
      class _ {
        constructor(e, t, n) {
          (this.name = e),
            (this.schema = t),
            (this.spec = n),
            (this.markSet = null),
            (this.groups = n.group ? n.group.split(" ") : []),
            (this.attrs = J(n.attrs)),
            (this.defaultAttrs = q(this.attrs)),
            (this.contentMatch = null),
            (this.inlineContent = null),
            (this.isBlock = !(n.inline || "text" == e)),
            (this.isText = "text" == e);
        }
        get isInline() {
          return !this.isBlock;
        }
        get isTextblock() {
          return this.isBlock && this.inlineContent;
        }
        get isLeaf() {
          return this.contentMatch == I.empty;
        }
        get isAtom() {
          return this.isLeaf || !!this.spec.atom;
        }
        get whitespace() {
          return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
        }
        hasRequiredAttrs() {
          for (let e in this.attrs) if (this.attrs[e].isRequired) return !0;
          return !1;
        }
        compatibleContent(e) {
          return this == e || this.contentMatch.compatible(e.contentMatch);
        }
        computeAttrs(e) {
          return !e && this.defaultAttrs ? this.defaultAttrs : W(this.attrs, e);
        }
        create(e = null, t, n) {
          if (this.isText) throw new Error("NodeType.create can't construct text nodes");
          return new A(this, this.computeAttrs(e), a.from(t), p.setFrom(n));
        }
        createChecked(e = null, t, n) {
          return (t = a.from(t)), this.checkContent(t), new A(this, this.computeAttrs(e), t, p.setFrom(n));
        }
        createAndFill(e = null, t, n) {
          if (((e = this.computeAttrs(e)), (t = a.from(t)).size)) {
            let e = this.contentMatch.fillBefore(t);
            if (!e) return null;
            t = e.append(t);
          }
          let r = this.contentMatch.matchFragment(t),
            o = r && r.fillBefore(a.empty, !0);
          return o ? new A(this, e, t.append(o), p.setFrom(n)) : null;
        }
        validContent(e) {
          let t = this.contentMatch.matchFragment(e);
          if (!t || !t.validEnd) return !1;
          for (let t = 0; t < e.childCount; t++) if (!this.allowsMarks(e.child(t).marks)) return !1;
          return !0;
        }
        checkContent(e) {
          if (!this.validContent(e)) throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
        }
        allowsMarkType(e) {
          return null == this.markSet || this.markSet.indexOf(e) > -1;
        }
        allowsMarks(e) {
          if (null == this.markSet) return !0;
          for (let t = 0; t < e.length; t++) if (!this.allowsMarkType(e[t].type)) return !1;
          return !0;
        }
        allowedMarks(e) {
          if (null == this.markSet) return e;
          let t;
          for (let n = 0; n < e.length; n++) this.allowsMarkType(e[n].type) ? t && t.push(e[n]) : t || (t = e.slice(0, n));
          return t ? (t.length ? t : p.none) : e;
        }
        static compile(e, t) {
          let n = Object.create(null);
          e.forEach((e, r) => (n[e] = new _(e, t, r)));
          let r = t.spec.topNode || "doc";
          if (!n[r]) throw new RangeError("Schema is missing its top node type ('" + r + "')");
          if (!n.text) throw new RangeError("Every schema needs a 'text' type");
          for (let e in n.text.attrs) throw new RangeError("The text node type should not have attributes");
          return n;
        }
      }
      class K {
        constructor(e) {
          (this.hasDefault = Object.prototype.hasOwnProperty.call(e, "default")), (this.default = e.default);
        }
        get isRequired() {
          return !this.hasDefault;
        }
      }
      class Y {
        constructor(e, t, n, r) {
          (this.name = e), (this.rank = t), (this.schema = n), (this.spec = r), (this.attrs = J(r.attrs)), (this.excluded = null);
          let o = q(this.attrs);
          this.instance = o ? new p(this, o) : null;
        }
        create(e = null) {
          return !e && this.instance ? this.instance : new p(this, W(this.attrs, e));
        }
        static compile(e, t) {
          let n = Object.create(null),
            r = 0;
          return e.forEach((e, o) => (n[e] = new Y(e, r++, t, o))), n;
        }
        removeFromSet(e) {
          for (var t = 0; t < e.length; t++) e[t].type == this && ((e = e.slice(0, t).concat(e.slice(t + 1))), t--);
          return e;
        }
        isInSet(e) {
          for (let t = 0; t < e.length; t++) if (e[t].type == this) return e[t];
        }
        excludes(e) {
          return this.excluded.indexOf(e) > -1;
        }
      }
      class U {
        constructor(e) {
          this.cached = Object.create(null);
          let t = (this.spec = {});
          for (let n in e) t[n] = e[n];
          (t.nodes = o.from(e.nodes)),
            (t.marks = o.from(e.marks || {})),
            (this.nodes = _.compile(this.spec.nodes, this)),
            (this.marks = Y.compile(this.spec.marks, this));
          let n = Object.create(null);
          for (let e in this.nodes) {
            if (e in this.marks) throw new RangeError(e + " can not be both a node and a mark");
            let t = this.nodes[e],
              r = t.spec.content || "",
              o = t.spec.marks;
            (t.contentMatch = n[r] || (n[r] = I.parse(r, this.nodes))),
              (t.inlineContent = t.contentMatch.inlineContent),
              (t.markSet = "_" == o ? null : o ? G(this, o.split(" ")) : "" != o && t.inlineContent ? null : []);
          }
          for (let e in this.marks) {
            let t = this.marks[e],
              n = t.spec.excludes;
            t.excluded = null == n ? [t] : "" == n ? [] : G(this, n.split(" "));
          }
          (this.nodeFromJSON = this.nodeFromJSON.bind(this)),
            (this.markFromJSON = this.markFromJSON.bind(this)),
            (this.topNodeType = this.nodes[this.spec.topNode || "doc"]),
            (this.cached.wrappings = Object.create(null));
        }
        node(e, t = null, n, r) {
          if ("string" == typeof e) e = this.nodeType(e);
          else {
            if (!(e instanceof _)) throw new RangeError("Invalid node type: " + e);
            if (e.schema != this) throw new RangeError("Node type from different schema used (" + e.name + ")");
          }
          return e.createChecked(t, n, r);
        }
        text(e, t) {
          let n = this.nodes.text;
          return new P(n, n.defaultAttrs, e, p.setFrom(t));
        }
        mark(e, t) {
          return "string" == typeof e && (e = this.marks[e]), e.create(t);
        }
        nodeFromJSON(e) {
          return A.fromJSON(this, e);
        }
        markFromJSON(e) {
          return p.fromJSON(this, e);
        }
        nodeType(e) {
          let t = this.nodes[e];
          if (!t) throw new RangeError("Unknown node type: " + e);
          return t;
        }
      }
      function G(e, t) {
        let n = [];
        for (let r = 0; r < t.length; r++) {
          let o = t[r],
            i = e.marks[o],
            s = i;
          if (i) n.push(i);
          else
            for (let t in e.marks) {
              let r = e.marks[t];
              ("_" == o || (r.spec.group && r.spec.group.split(" ").indexOf(o) > -1)) && n.push((s = r));
            }
          if (!s) throw new SyntaxError("Unknown mark type: '" + t[r] + "'");
        }
        return n;
      }
      class X {
        constructor(e, t) {
          (this.schema = e),
            (this.rules = t),
            (this.tags = []),
            (this.styles = []),
            t.forEach((e) => {
              e.tag ? this.tags.push(e) : e.style && this.styles.push(e);
            }),
            (this.normalizeLists = !this.tags.some((t) => {
              if (!/^(ul|ol)\b/.test(t.tag) || !t.node) return !1;
              let n = e.nodes[t.node];
              return n.contentMatch.matchType(n);
            }));
        }
        parse(e, t = {}) {
          let n = new re(this, t, !1);
          return n.addAll(e, t.from, t.to), n.finish();
        }
        parseSlice(e, t = {}) {
          let n = new re(this, t, !0);
          return n.addAll(e, t.from, t.to), u.maxOpen(n.finish());
        }
        matchTag(e, t, n) {
          for (let r = n ? this.tags.indexOf(n) + 1 : 0; r < this.tags.length; r++) {
            let n = this.tags[r];
            if (oe(e, n.tag) && (void 0 === n.namespace || e.namespaceURI == n.namespace) && (!n.context || t.matchesContext(n.context))) {
              if (n.getAttrs) {
                let t = n.getAttrs(e);
                if (!1 === t) continue;
                n.attrs = t || void 0;
              }
              return n;
            }
          }
        }
        matchStyle(e, t, n, r) {
          for (let o = r ? this.styles.indexOf(r) + 1 : 0; o < this.styles.length; o++) {
            let r = this.styles[o],
              i = r.style;
            if (
              !(
                0 != i.indexOf(e) ||
                (r.context && !n.matchesContext(r.context)) ||
                (i.length > e.length && (61 != i.charCodeAt(e.length) || i.slice(e.length + 1) != t))
              )
            ) {
              if (r.getAttrs) {
                let e = r.getAttrs(t);
                if (!1 === e) continue;
                r.attrs = e || void 0;
              }
              return r;
            }
          }
        }
        static schemaRules(e) {
          let t = [];
          function n(e) {
            let n = null == e.priority ? 50 : e.priority,
              r = 0;
            for (; r < t.length; r++) {
              let e = t[r];
              if ((null == e.priority ? 50 : e.priority) < n) break;
            }
            t.splice(r, 0, e);
          }
          for (let t in e.marks) {
            let r = e.marks[t].spec.parseDOM;
            r &&
              r.forEach((e) => {
                n((e = ie(e))), e.mark || e.ignore || e.clearMark || (e.mark = t);
              });
          }
          for (let t in e.nodes) {
            let r = e.nodes[t].spec.parseDOM;
            r &&
              r.forEach((e) => {
                n((e = ie(e))), e.node || e.ignore || e.mark || (e.node = t);
              });
          }
          return t;
        }
        static fromSchema(e) {
          return e.cached.domParser || (e.cached.domParser = new X(e, X.schemaRules(e)));
        }
      }
      const Z = {
          address: !0,
          article: !0,
          aside: !0,
          blockquote: !0,
          canvas: !0,
          dd: !0,
          div: !0,
          dl: !0,
          fieldset: !0,
          figcaption: !0,
          figure: !0,
          footer: !0,
          form: !0,
          h1: !0,
          h2: !0,
          h3: !0,
          h4: !0,
          h5: !0,
          h6: !0,
          header: !0,
          hgroup: !0,
          hr: !0,
          li: !0,
          noscript: !0,
          ol: !0,
          output: !0,
          p: !0,
          pre: !0,
          section: !0,
          table: !0,
          tfoot: !0,
          ul: !0
        },
        Q = { head: !0, noscript: !0, object: !0, script: !0, style: !0, title: !0 },
        ee = { ol: !0, ul: !0 };
      function te(e, t, n) {
        return null != t ? (t ? 1 : 0) | ("full" === t ? 2 : 0) : e && "pre" == e.whitespace ? 3 : -5 & n;
      }
      class ne {
        constructor(e, t, n, r, o, i, s) {
          (this.type = e),
            (this.attrs = t),
            (this.marks = n),
            (this.pendingMarks = r),
            (this.solid = o),
            (this.options = s),
            (this.content = []),
            (this.activeMarks = p.none),
            (this.stashMarks = []),
            (this.match = i || (4 & s ? null : e.contentMatch));
        }
        findWrapping(e) {
          if (!this.match) {
            if (!this.type) return [];
            let t = this.type.contentMatch.fillBefore(a.from(e));
            if (!t) {
              let t,
                n = this.type.contentMatch;
              return (t = n.findWrapping(e.type)) ? ((this.match = n), t) : null;
            }
            this.match = this.type.contentMatch.matchFragment(t);
          }
          return this.match.findWrapping(e.type);
        }
        finish(e) {
          if (!(1 & this.options)) {
            let e,
              t = this.content[this.content.length - 1];
            if (t && t.isText && (e = /[ \t\r\n\u000c]+$/.exec(t.text))) {
              let n = t;
              t.text.length == e[0].length
                ? this.content.pop()
                : (this.content[this.content.length - 1] = n.withText(n.text.slice(0, n.text.length - e[0].length)));
            }
          }
          let t = a.from(this.content);
          return (
            !e && this.match && (t = t.append(this.match.fillBefore(a.empty, !0))),
            this.type ? this.type.create(this.attrs, t, this.marks) : t
          );
        }
        popFromStashMark(e) {
          for (let t = this.stashMarks.length - 1; t >= 0; t--) if (e.eq(this.stashMarks[t])) return this.stashMarks.splice(t, 1)[0];
        }
        applyPending(e) {
          for (let t = 0, n = this.pendingMarks; t < n.length; t++) {
            let r = n[t];
            (this.type ? this.type.allowsMarkType(r.type) : se(r.type, e)) &&
              !r.isInSet(this.activeMarks) &&
              ((this.activeMarks = r.addToSet(this.activeMarks)), (this.pendingMarks = r.removeFromSet(this.pendingMarks)));
          }
        }
        inlineContext(e) {
          return this.type
            ? this.type.inlineContent
            : this.content.length
            ? this.content[0].isInline
            : e.parentNode && !Z.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
        }
      }
      class re {
        constructor(e, t, n) {
          (this.parser = e), (this.options = t), (this.isOpen = n), (this.open = 0);
          let r,
            o = t.topNode,
            i = te(null, t.preserveWhitespace, 0) | (n ? 4 : 0);
          (r = o
            ? new ne(o.type, o.attrs, p.none, p.none, !0, t.topMatch || o.type.contentMatch, i)
            : new ne(n ? null : e.schema.topNodeType, null, p.none, p.none, !0, null, i)),
            (this.nodes = [r]),
            (this.find = t.findPositions),
            (this.needsBlock = !1);
        }
        get top() {
          return this.nodes[this.open];
        }
        addDOM(e) {
          3 == e.nodeType ? this.addTextNode(e) : 1 == e.nodeType && this.addElement(e);
        }
        withStyleRules(e, t) {
          let n = e.getAttribute("style");
          if (!n) return t();
          let r = this.readStyles(
            (function (e) {
              let t,
                n = /\s*([\w-]+)\s*:\s*([^;]+)/g,
                r = [];
              for (; (t = n.exec(e)); ) r.push(t[1], t[2].trim());
              return r;
            })(n)
          );
          if (!r) return;
          let [o, i] = r,
            s = this.top;
          for (let e = 0; e < i.length; e++) this.removePendingMark(i[e], s);
          for (let e = 0; e < o.length; e++) this.addPendingMark(o[e]);
          t();
          for (let e = 0; e < o.length; e++) this.removePendingMark(o[e], s);
          for (let e = 0; e < i.length; e++) this.addPendingMark(i[e]);
        }
        addTextNode(e) {
          let t = e.nodeValue,
            n = this.top;
          if (2 & n.options || n.inlineContext(e) || /[^ \t\r\n\u000c]/.test(t)) {
            if (1 & n.options) t = 2 & n.options ? t.replace(/\r\n?/g, "\n") : t.replace(/\r?\n|\r/g, " ");
            else if (((t = t.replace(/[ \t\r\n\u000c]+/g, " ")), /^[ \t\r\n\u000c]/.test(t) && this.open == this.nodes.length - 1)) {
              let r = n.content[n.content.length - 1],
                o = e.previousSibling;
              (!r || (o && "BR" == o.nodeName) || (r.isText && /[ \t\r\n\u000c]$/.test(r.text))) && (t = t.slice(1));
            }
            t && this.insertNode(this.parser.schema.text(t)), this.findInText(e);
          } else this.findInside(e);
        }
        addElement(e, t) {
          let n,
            r = e.nodeName.toLowerCase();
          ee.hasOwnProperty(r) &&
            this.parser.normalizeLists &&
            (function (e) {
              for (let t = e.firstChild, n = null; t; t = t.nextSibling) {
                let e = 1 == t.nodeType ? t.nodeName.toLowerCase() : null;
                e && ee.hasOwnProperty(e) && n ? (n.appendChild(t), (t = n)) : "li" == e ? (n = t) : e && (n = null);
              }
            })(e);
          let o = (this.options.ruleFromNode && this.options.ruleFromNode(e)) || (n = this.parser.matchTag(e, this, t));
          if (o ? o.ignore : Q.hasOwnProperty(r)) this.findInside(e), this.ignoreFallback(e);
          else if (!o || o.skip || o.closeParent) {
            o && o.closeParent ? (this.open = Math.max(0, this.open - 1)) : o && o.skip.nodeType && (e = o.skip);
            let t,
              n = this.top,
              i = this.needsBlock;
            if (Z.hasOwnProperty(r))
              n.content.length && n.content[0].isInline && this.open && (this.open--, (n = this.top)),
                (t = !0),
                n.type || (this.needsBlock = !0);
            else if (!e.firstChild) return void this.leafFallback(e);
            o && o.skip ? this.addAll(e) : this.withStyleRules(e, () => this.addAll(e)), t && this.sync(n), (this.needsBlock = i);
          } else
            this.withStyleRules(e, () => {
              this.addElementByRule(e, o, !1 === o.consuming ? n : void 0);
            });
        }
        leafFallback(e) {
          "BR" == e.nodeName && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode("\n"));
        }
        ignoreFallback(e) {
          "BR" != e.nodeName || (this.top.type && this.top.type.inlineContent) || this.findPlace(this.parser.schema.text("-"));
        }
        readStyles(e) {
          let t = p.none,
            n = p.none;
          for (let r = 0; r < e.length; r += 2)
            for (let o; ; ) {
              let i = this.parser.matchStyle(e[r], e[r + 1], this, o);
              if (!i) break;
              if (i.ignore) return null;
              if (
                (i.clearMark
                  ? this.top.pendingMarks.concat(this.top.activeMarks).forEach((e) => {
                      i.clearMark(e) && (n = e.addToSet(n));
                    })
                  : (t = this.parser.schema.marks[i.mark].create(i.attrs).addToSet(t)),
                !1 !== i.consuming)
              )
                break;
              o = i;
            }
          return [t, n];
        }
        addElementByRule(e, t, n) {
          let r, o, i;
          t.node
            ? ((o = this.parser.schema.nodes[t.node]),
              o.isLeaf
                ? this.insertNode(o.create(t.attrs)) || this.leafFallback(e)
                : (r = this.enter(o, t.attrs || null, t.preserveWhitespace)))
            : ((i = this.parser.schema.marks[t.mark].create(t.attrs)), this.addPendingMark(i));
          let s = this.top;
          if (o && o.isLeaf) this.findInside(e);
          else if (n) this.addElement(e, n);
          else if (t.getContent) this.findInside(e), t.getContent(e, this.parser.schema).forEach((e) => this.insertNode(e));
          else {
            let n = e;
            "string" == typeof t.contentElement
              ? (n = e.querySelector(t.contentElement))
              : "function" == typeof t.contentElement
              ? (n = t.contentElement(e))
              : t.contentElement && (n = t.contentElement),
              this.findAround(e, n, !0),
              this.addAll(n);
          }
          r && this.sync(s) && this.open--, i && this.removePendingMark(i, s);
        }
        addAll(e, t, n) {
          let r = t || 0;
          for (let o = t ? e.childNodes[t] : e.firstChild, i = null == n ? null : e.childNodes[n]; o != i; o = o.nextSibling, ++r)
            this.findAtPoint(e, r), this.addDOM(o);
          this.findAtPoint(e, r);
        }
        findPlace(e) {
          let t, n;
          for (let r = this.open; r >= 0; r--) {
            let o = this.nodes[r],
              i = o.findWrapping(e);
            if (i && (!t || t.length > i.length) && ((t = i), (n = o), !i.length)) break;
            if (o.solid) break;
          }
          if (!t) return !1;
          this.sync(n);
          for (let e = 0; e < t.length; e++) this.enterInner(t[e], null, !1);
          return !0;
        }
        insertNode(e) {
          if (e.isInline && this.needsBlock && !this.top.type) {
            let e = this.textblockFromContext();
            e && this.enterInner(e);
          }
          if (this.findPlace(e)) {
            this.closeExtra();
            let t = this.top;
            t.applyPending(e.type), t.match && (t.match = t.match.matchType(e.type));
            let n = t.activeMarks;
            for (let r = 0; r < e.marks.length; r++) (t.type && !t.type.allowsMarkType(e.marks[r].type)) || (n = e.marks[r].addToSet(n));
            return t.content.push(e.mark(n)), !0;
          }
          return !1;
        }
        enter(e, t, n) {
          let r = this.findPlace(e.create(t));
          return r && this.enterInner(e, t, !0, n), r;
        }
        enterInner(e, t = null, n = !1, r) {
          this.closeExtra();
          let o = this.top;
          o.applyPending(e), (o.match = o.match && o.match.matchType(e));
          let i = te(e, r, o.options);
          4 & o.options && 0 == o.content.length && (i |= 4),
            this.nodes.push(new ne(e, t, o.activeMarks, o.pendingMarks, n, null, i)),
            this.open++;
        }
        closeExtra(e = !1) {
          let t = this.nodes.length - 1;
          if (t > this.open) {
            for (; t > this.open; t--) this.nodes[t - 1].content.push(this.nodes[t].finish(e));
            this.nodes.length = this.open + 1;
          }
        }
        finish() {
          return (this.open = 0), this.closeExtra(this.isOpen), this.nodes[0].finish(this.isOpen || this.options.topOpen);
        }
        sync(e) {
          for (let t = this.open; t >= 0; t--) if (this.nodes[t] == e) return (this.open = t), !0;
          return !1;
        }
        get currentPos() {
          this.closeExtra();
          let e = 0;
          for (let t = this.open; t >= 0; t--) {
            let n = this.nodes[t].content;
            for (let t = n.length - 1; t >= 0; t--) e += n[t].nodeSize;
            t && e++;
          }
          return e;
        }
        findAtPoint(e, t) {
          if (this.find)
            for (let n = 0; n < this.find.length; n++)
              this.find[n].node == e && this.find[n].offset == t && (this.find[n].pos = this.currentPos);
        }
        findInside(e) {
          if (this.find)
            for (let t = 0; t < this.find.length; t++)
              null == this.find[t].pos && 1 == e.nodeType && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
        }
        findAround(e, t, n) {
          if (e != t && this.find)
            for (let r = 0; r < this.find.length; r++)
              null == this.find[r].pos &&
                1 == e.nodeType &&
                e.contains(this.find[r].node) &&
                t.compareDocumentPosition(this.find[r].node) & (n ? 2 : 4) &&
                (this.find[r].pos = this.currentPos);
        }
        findInText(e) {
          if (this.find)
            for (let t = 0; t < this.find.length; t++)
              this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
        }
        matchesContext(e) {
          if (e.indexOf("|") > -1) return e.split(/\s*\|\s*/).some(this.matchesContext, this);
          let t = e.split("/"),
            n = this.options.context,
            r = !(this.isOpen || (n && n.parent.type != this.nodes[0].type)),
            o = -(n ? n.depth + 1 : 0) + (r ? 0 : 1),
            i = (e, s) => {
              for (; e >= 0; e--) {
                let a = t[e];
                if ("" == a) {
                  if (e == t.length - 1 || 0 == e) continue;
                  for (; s >= o; s--) if (i(e - 1, s)) return !0;
                  return !1;
                }
                {
                  let e = s > 0 || (0 == s && r) ? this.nodes[s].type : n && s >= o ? n.node(s - o).type : null;
                  if (!e || (e.name != a && -1 == e.groups.indexOf(a))) return !1;
                  s--;
                }
              }
              return !0;
            };
          return i(t.length - 1, this.open);
        }
        textblockFromContext() {
          let e = this.options.context;
          if (e)
            for (let t = e.depth; t >= 0; t--) {
              let n = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
              if (n && n.isTextblock && n.defaultAttrs) return n;
            }
          for (let e in this.parser.schema.nodes) {
            let t = this.parser.schema.nodes[e];
            if (t.isTextblock && t.defaultAttrs) return t;
          }
        }
        addPendingMark(e) {
          let t = (function (e, t) {
            for (let n = 0; n < t.length; n++) if (e.eq(t[n])) return t[n];
          })(e, this.top.pendingMarks);
          t && this.top.stashMarks.push(t), (this.top.pendingMarks = e.addToSet(this.top.pendingMarks));
        }
        removePendingMark(e, t) {
          for (let n = this.open; n >= 0; n--) {
            let r = this.nodes[n];
            if (r.pendingMarks.lastIndexOf(e) > -1) r.pendingMarks = e.removeFromSet(r.pendingMarks);
            else {
              r.activeMarks = e.removeFromSet(r.activeMarks);
              let t = r.popFromStashMark(e);
              t && r.type && r.type.allowsMarkType(t.type) && (r.activeMarks = t.addToSet(r.activeMarks));
            }
            if (r == t) break;
          }
        }
      }
      function oe(e, t) {
        return (e.matches || e.msMatchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector).call(e, t);
      }
      function ie(e) {
        let t = {};
        for (let n in e) t[n] = e[n];
        return t;
      }
      function se(e, t) {
        let n = t.schema.nodes;
        for (let r in n) {
          let o = n[r];
          if (!o.allowsMarkType(e)) continue;
          let i = [],
            s = (e) => {
              i.push(e);
              for (let n = 0; n < e.edgeCount; n++) {
                let { type: r, next: o } = e.edge(n);
                if (r == t) return !0;
                if (i.indexOf(o) < 0 && s(o)) return !0;
              }
            };
          if (s(o.contentMatch)) return !0;
        }
      }
      class ae {
        constructor(e, t) {
          (this.nodes = e), (this.marks = t);
        }
        serializeFragment(e, t = {}, n) {
          n || (n = ce(t).createDocumentFragment());
          let r = n,
            o = [];
          return (
            e.forEach((e) => {
              if (o.length || e.marks.length) {
                let n = 0,
                  i = 0;
                for (; n < o.length && i < e.marks.length; ) {
                  let t = e.marks[i];
                  if (this.marks[t.type.name]) {
                    if (!t.eq(o[n][0]) || !1 === t.type.spec.spanning) break;
                    n++, i++;
                  } else i++;
                }
                for (; n < o.length; ) r = o.pop()[1];
                for (; i < e.marks.length; ) {
                  let n = e.marks[i++],
                    s = this.serializeMark(n, e.isInline, t);
                  s && (o.push([n, r]), r.appendChild(s.dom), (r = s.contentDOM || s.dom));
                }
              }
              r.appendChild(this.serializeNodeInner(e, t));
            }),
            n
          );
        }
        serializeNodeInner(e, t) {
          let { dom: n, contentDOM: r } = ae.renderSpec(ce(t), this.nodes[e.type.name](e));
          if (r) {
            if (e.isLeaf) throw new RangeError("Content hole not allowed in a leaf node spec");
            this.serializeFragment(e.content, t, r);
          }
          return n;
        }
        serializeNode(e, t = {}) {
          let n = this.serializeNodeInner(e, t);
          for (let r = e.marks.length - 1; r >= 0; r--) {
            let o = this.serializeMark(e.marks[r], e.isInline, t);
            o && ((o.contentDOM || o.dom).appendChild(n), (n = o.dom));
          }
          return n;
        }
        serializeMark(e, t, n = {}) {
          let r = this.marks[e.type.name];
          return r && ae.renderSpec(ce(n), r(e, t));
        }
        static renderSpec(e, t, n = null) {
          if ("string" == typeof t) return { dom: e.createTextNode(t) };
          if (null != t.nodeType) return { dom: t };
          if (t.dom && null != t.dom.nodeType) return t;
          let r,
            o = t[0],
            i = o.indexOf(" ");
          i > 0 && ((n = o.slice(0, i)), (o = o.slice(i + 1)));
          let s = n ? e.createElementNS(n, o) : e.createElement(o),
            a = t[1],
            l = 1;
          if (a && "object" == typeof a && null == a.nodeType && !Array.isArray(a)) {
            l = 2;
            for (let e in a)
              if (null != a[e]) {
                let t = e.indexOf(" ");
                t > 0 ? s.setAttributeNS(e.slice(0, t), e.slice(t + 1), a[e]) : s.setAttribute(e, a[e]);
              }
          }
          for (let o = l; o < t.length; o++) {
            let i = t[o];
            if (0 === i) {
              if (o < t.length - 1 || o > l) throw new RangeError("Content hole must be the only child of its parent node");
              return { dom: s, contentDOM: s };
            }
            {
              let { dom: t, contentDOM: o } = ae.renderSpec(e, i, n);
              if ((s.appendChild(t), o)) {
                if (r) throw new RangeError("Multiple content holes");
                r = o;
              }
            }
          }
          return { dom: s, contentDOM: r };
        }
        static fromSchema(e) {
          return e.cached.domSerializer || (e.cached.domSerializer = new ae(this.nodesFromSchema(e), this.marksFromSchema(e)));
        }
        static nodesFromSchema(e) {
          let t = le(e.nodes);
          return t.text || (t.text = (e) => e.text), t;
        }
        static marksFromSchema(e) {
          return le(e.marks);
        }
      }
      function le(e) {
        let t = {};
        for (let n in e) {
          let r = e[n].spec.toDOM;
          r && (t[n] = r);
        }
        return t;
      }
      function ce(e) {
        return e.document || window.document;
      }
    },
    2376: (e, t, n) => {
      n.d(t, { Bs: () => d, C1: () => f, H$: () => T, Sy: () => M, Y1: () => s, qv: () => h, yy: () => S });
      var r = n(87823),
        o = n(16560);
      const i = Object.create(null);
      class s {
        constructor(e, t, n) {
          (this.$anchor = e), (this.$head = t), (this.ranges = n || [new a(e.min(t), e.max(t))]);
        }
        get anchor() {
          return this.$anchor.pos;
        }
        get head() {
          return this.$head.pos;
        }
        get from() {
          return this.$from.pos;
        }
        get to() {
          return this.$to.pos;
        }
        get $from() {
          return this.ranges[0].$from;
        }
        get $to() {
          return this.ranges[0].$to;
        }
        get empty() {
          let e = this.ranges;
          for (let t = 0; t < e.length; t++) if (e[t].$from.pos != e[t].$to.pos) return !1;
          return !0;
        }
        content() {
          return this.$from.doc.slice(this.from, this.to, !0);
        }
        replace(e, t = r.p2.empty) {
          let n = t.content.lastChild,
            o = null;
          for (let e = 0; e < t.openEnd; e++) (o = n), (n = n.lastChild);
          let i = e.steps.length,
            s = this.ranges;
          for (let a = 0; a < s.length; a++) {
            let { $from: l, $to: c } = s[a],
              d = e.mapping.slice(i);
            e.replaceRange(d.map(l.pos), d.map(c.pos), a ? r.p2.empty : t),
              0 == a && y(e, i, (n ? n.isInline : o && o.isTextblock) ? -1 : 1);
          }
        }
        replaceWith(e, t) {
          let n = e.steps.length,
            r = this.ranges;
          for (let o = 0; o < r.length; o++) {
            let { $from: i, $to: s } = r[o],
              a = e.mapping.slice(n),
              l = a.map(i.pos),
              c = a.map(s.pos);
            o ? e.deleteRange(l, c) : (e.replaceRangeWith(l, c, t), y(e, n, t.isInline ? -1 : 1));
          }
        }
        static findFrom(e, t, n = !1) {
          let r = e.parent.inlineContent ? new d(e) : g(e.node(0), e.parent, e.pos, e.index(), t, n);
          if (r) return r;
          for (let r = e.depth - 1; r >= 0; r--) {
            let o =
              t < 0
                ? g(e.node(0), e.node(r), e.before(r + 1), e.index(r), t, n)
                : g(e.node(0), e.node(r), e.after(r + 1), e.index(r) + 1, t, n);
            if (o) return o;
          }
          return null;
        }
        static near(e, t = 1) {
          return this.findFrom(e, t) || this.findFrom(e, -t) || new f(e.node(0));
        }
        static atStart(e) {
          return g(e, e, 0, 0, 1) || new f(e);
        }
        static atEnd(e) {
          return g(e, e, e.content.size, e.childCount, -1) || new f(e);
        }
        static fromJSON(e, t) {
          if (!t || !t.type) throw new RangeError("Invalid input for Selection.fromJSON");
          let n = i[t.type];
          if (!n) throw new RangeError(`No selection type ${t.type} defined`);
          return n.fromJSON(e, t);
        }
        static jsonID(e, t) {
          if (e in i) throw new RangeError("Duplicate use of selection JSON ID " + e);
          return (i[e] = t), (t.prototype.jsonID = e), t;
        }
        getBookmark() {
          return d.between(this.$anchor, this.$head).getBookmark();
        }
      }
      s.prototype.visible = !0;
      class a {
        constructor(e, t) {
          (this.$from = e), (this.$to = t);
        }
      }
      let l = !1;
      function c(e) {
        l ||
          e.parent.inlineContent ||
          ((l = !0), console.warn("TextSelection endpoint not pointing into a node with inline content (" + e.parent.type.name + ")"));
      }
      class d extends s {
        constructor(e, t = e) {
          c(e), c(t), super(e, t);
        }
        get $cursor() {
          return this.$anchor.pos == this.$head.pos ? this.$head : null;
        }
        map(e, t) {
          let n = e.resolve(t.map(this.head));
          if (!n.parent.inlineContent) return s.near(n);
          let r = e.resolve(t.map(this.anchor));
          return new d(r.parent.inlineContent ? r : n, n);
        }
        replace(e, t = r.p2.empty) {
          if ((super.replace(e, t), t == r.p2.empty)) {
            let t = this.$from.marksAcross(this.$to);
            t && e.ensureMarks(t);
          }
        }
        eq(e) {
          return e instanceof d && e.anchor == this.anchor && e.head == this.head;
        }
        getBookmark() {
          return new p(this.anchor, this.head);
        }
        toJSON() {
          return { type: "text", anchor: this.anchor, head: this.head };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.anchor || "number" != typeof t.head) throw new RangeError("Invalid input for TextSelection.fromJSON");
          return new d(e.resolve(t.anchor), e.resolve(t.head));
        }
        static create(e, t, n = t) {
          let r = e.resolve(t);
          return new this(r, n == t ? r : e.resolve(n));
        }
        static between(e, t, n) {
          let r = e.pos - t.pos;
          if (((n && !r) || (n = r >= 0 ? 1 : -1), !t.parent.inlineContent)) {
            let e = s.findFrom(t, n, !0) || s.findFrom(t, -n, !0);
            if (!e) return s.near(t, n);
            t = e.$head;
          }
          return (
            e.parent.inlineContent ||
              ((0 == r || (e = (s.findFrom(e, -n, !0) || s.findFrom(e, n, !0)).$anchor).pos < t.pos != r < 0) && (e = t)),
            new d(e, t)
          );
        }
      }
      s.jsonID("text", d);
      class p {
        constructor(e, t) {
          (this.anchor = e), (this.head = t);
        }
        map(e) {
          return new p(e.map(this.anchor), e.map(this.head));
        }
        resolve(e) {
          return d.between(e.resolve(this.anchor), e.resolve(this.head));
        }
      }
      class h extends s {
        constructor(e) {
          let t = e.nodeAfter,
            n = e.node(0).resolve(e.pos + t.nodeSize);
          super(e, n), (this.node = t);
        }
        map(e, t) {
          let { deleted: n, pos: r } = t.mapResult(this.anchor),
            o = e.resolve(r);
          return n ? s.near(o) : new h(o);
        }
        content() {
          return new r.p2(r.HY.from(this.node), 0, 0);
        }
        eq(e) {
          return e instanceof h && e.anchor == this.anchor;
        }
        toJSON() {
          return { type: "node", anchor: this.anchor };
        }
        getBookmark() {
          return new u(this.anchor);
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.anchor) throw new RangeError("Invalid input for NodeSelection.fromJSON");
          return new h(e.resolve(t.anchor));
        }
        static create(e, t) {
          return new h(e.resolve(t));
        }
        static isSelectable(e) {
          return !e.isText && !1 !== e.type.spec.selectable;
        }
      }
      (h.prototype.visible = !1), s.jsonID("node", h);
      class u {
        constructor(e) {
          this.anchor = e;
        }
        map(e) {
          let { deleted: t, pos: n } = e.mapResult(this.anchor);
          return t ? new p(n, n) : new u(n);
        }
        resolve(e) {
          let t = e.resolve(this.anchor),
            n = t.nodeAfter;
          return n && h.isSelectable(n) ? new h(t) : s.near(t);
        }
      }
      class f extends s {
        constructor(e) {
          super(e.resolve(0), e.resolve(e.content.size));
        }
        replace(e, t = r.p2.empty) {
          if (t == r.p2.empty) {
            e.delete(0, e.doc.content.size);
            let t = s.atStart(e.doc);
            t.eq(e.selection) || e.setSelection(t);
          } else super.replace(e, t);
        }
        toJSON() {
          return { type: "all" };
        }
        static fromJSON(e) {
          return new f(e);
        }
        map(e) {
          return new f(e);
        }
        eq(e) {
          return e instanceof f;
        }
        getBookmark() {
          return m;
        }
      }
      s.jsonID("all", f);
      const m = {
        map() {
          return this;
        },
        resolve: (e) => new f(e)
      };
      function g(e, t, n, r, o, i = !1) {
        if (t.inlineContent) return d.create(e, n);
        for (let s = r - (o > 0 ? 0 : 1); o > 0 ? s < t.childCount : s >= 0; s += o) {
          let r = t.child(s);
          if (r.isAtom) {
            if (!i && h.isSelectable(r)) return h.create(e, n - (o < 0 ? r.nodeSize : 0));
          } else {
            let t = g(e, r, n + o, o < 0 ? r.childCount : 0, o, i);
            if (t) return t;
          }
          n += r.nodeSize * o;
        }
        return null;
      }
      function y(e, t, n) {
        let r = e.steps.length - 1;
        if (r < t) return;
        let i,
          a = e.steps[r];
        (a instanceof o.Pu || a instanceof o.FC) &&
          (e.mapping.maps[r].forEach((e, t, n, r) => {
            null == i && (i = r);
          }),
          e.setSelection(s.near(e.doc.resolve(i), n)));
      }
      class v extends o.wx {
        constructor(e) {
          super(e.doc),
            (this.curSelectionFor = 0),
            (this.updated = 0),
            (this.meta = Object.create(null)),
            (this.time = Date.now()),
            (this.curSelection = e.selection),
            (this.storedMarks = e.storedMarks);
        }
        get selection() {
          return (
            this.curSelectionFor < this.steps.length &&
              ((this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor))),
              (this.curSelectionFor = this.steps.length)),
            this.curSelection
          );
        }
        setSelection(e) {
          if (e.$from.doc != this.doc) throw new RangeError("Selection passed to setSelection must point at the current document");
          return (
            (this.curSelection = e),
            (this.curSelectionFor = this.steps.length),
            (this.updated = -3 & (1 | this.updated)),
            (this.storedMarks = null),
            this
          );
        }
        get selectionSet() {
          return (1 & this.updated) > 0;
        }
        setStoredMarks(e) {
          return (this.storedMarks = e), (this.updated |= 2), this;
        }
        ensureMarks(e) {
          return r.vc.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
        }
        addStoredMark(e) {
          return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
        }
        removeStoredMark(e) {
          return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
        }
        get storedMarksSet() {
          return (2 & this.updated) > 0;
        }
        addStep(e, t) {
          super.addStep(e, t), (this.updated = -3 & this.updated), (this.storedMarks = null);
        }
        setTime(e) {
          return (this.time = e), this;
        }
        replaceSelection(e) {
          return this.selection.replace(this, e), this;
        }
        replaceSelectionWith(e, t = !0) {
          let n = this.selection;
          return (
            t && (e = e.mark(this.storedMarks || (n.empty ? n.$from.marks() : n.$from.marksAcross(n.$to) || r.vc.none))),
            n.replaceWith(this, e),
            this
          );
        }
        deleteSelection() {
          return this.selection.replace(this), this;
        }
        insertText(e, t, n) {
          let r = this.doc.type.schema;
          if (null == t) return e ? this.replaceSelectionWith(r.text(e), !0) : this.deleteSelection();
          {
            if ((null == n && (n = t), (n = null == n ? t : n), !e)) return this.deleteRange(t, n);
            let o = this.storedMarks;
            if (!o) {
              let e = this.doc.resolve(t);
              o = n == t ? e.marks() : e.marksAcross(this.doc.resolve(n));
            }
            return this.replaceRangeWith(t, n, r.text(e, o)), this.selection.empty || this.setSelection(s.near(this.selection.$to)), this;
          }
        }
        setMeta(e, t) {
          return (this.meta["string" == typeof e ? e : e.key] = t), this;
        }
        getMeta(e) {
          return this.meta["string" == typeof e ? e : e.key];
        }
        get isGeneric() {
          for (let e in this.meta) return !1;
          return !0;
        }
        scrollIntoView() {
          return (this.updated |= 4), this;
        }
        get scrolledIntoView() {
          return (4 & this.updated) > 0;
        }
      }
      function w(e, t) {
        return t && e ? e.bind(t) : e;
      }
      class b {
        constructor(e, t, n) {
          (this.name = e), (this.init = w(t.init, n)), (this.apply = w(t.apply, n));
        }
      }
      const x = [
        new b("doc", { init: (e) => e.doc || e.schema.topNodeType.createAndFill(), apply: (e) => e.doc }),
        new b("selection", { init: (e, t) => e.selection || s.atStart(t.doc), apply: (e) => e.selection }),
        new b("storedMarks", { init: (e) => e.storedMarks || null, apply: (e, t, n, r) => (r.selection.$cursor ? e.storedMarks : null) }),
        new b("scrollToSelection", { init: () => 0, apply: (e, t) => (e.scrolledIntoView ? t + 1 : t) })
      ];
      class k {
        constructor(e, t) {
          (this.schema = e),
            (this.plugins = []),
            (this.pluginsByKey = Object.create(null)),
            (this.fields = x.slice()),
            t &&
              t.forEach((e) => {
                if (this.pluginsByKey[e.key]) throw new RangeError("Adding different instances of a keyed plugin (" + e.key + ")");
                this.plugins.push(e), (this.pluginsByKey[e.key] = e), e.spec.state && this.fields.push(new b(e.key, e.spec.state, e));
              });
        }
      }
      class S {
        constructor(e) {
          this.config = e;
        }
        get schema() {
          return this.config.schema;
        }
        get plugins() {
          return this.config.plugins;
        }
        apply(e) {
          return this.applyTransaction(e).state;
        }
        filterTransaction(e, t = -1) {
          for (let n = 0; n < this.config.plugins.length; n++)
            if (n != t) {
              let t = this.config.plugins[n];
              if (t.spec.filterTransaction && !t.spec.filterTransaction.call(t, e, this)) return !1;
            }
          return !0;
        }
        applyTransaction(e) {
          if (!this.filterTransaction(e)) return { state: this, transactions: [] };
          let t = [e],
            n = this.applyInner(e),
            r = null;
          for (;;) {
            let o = !1;
            for (let i = 0; i < this.config.plugins.length; i++) {
              let s = this.config.plugins[i];
              if (s.spec.appendTransaction) {
                let a = r ? r[i].n : 0,
                  l = r ? r[i].state : this,
                  c = a < t.length && s.spec.appendTransaction.call(s, a ? t.slice(a) : t, l, n);
                if (c && n.filterTransaction(c, i)) {
                  if ((c.setMeta("appendedTransaction", e), !r)) {
                    r = [];
                    for (let e = 0; e < this.config.plugins.length; e++) r.push(e < i ? { state: n, n: t.length } : { state: this, n: 0 });
                  }
                  t.push(c), (n = n.applyInner(c)), (o = !0);
                }
                r && (r[i] = { state: n, n: t.length });
              }
            }
            if (!o) return { state: n, transactions: t };
          }
        }
        applyInner(e) {
          if (!e.before.eq(this.doc)) throw new RangeError("Applying a mismatched transaction");
          let t = new S(this.config),
            n = this.config.fields;
          for (let r = 0; r < n.length; r++) {
            let o = n[r];
            t[o.name] = o.apply(e, this[o.name], this, t);
          }
          return t;
        }
        get tr() {
          return new v(this);
        }
        static create(e) {
          let t = new k(e.doc ? e.doc.type.schema : e.schema, e.plugins),
            n = new S(t);
          for (let r = 0; r < t.fields.length; r++) n[t.fields[r].name] = t.fields[r].init(e, n);
          return n;
        }
        reconfigure(e) {
          let t = new k(this.schema, e.plugins),
            n = t.fields,
            r = new S(t);
          for (let t = 0; t < n.length; t++) {
            let o = n[t].name;
            r[o] = this.hasOwnProperty(o) ? this[o] : n[t].init(e, r);
          }
          return r;
        }
        toJSON(e) {
          let t = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
          if ((this.storedMarks && (t.storedMarks = this.storedMarks.map((e) => e.toJSON())), e && "object" == typeof e))
            for (let n in e) {
              if ("doc" == n || "selection" == n) throw new RangeError("The JSON fields `doc` and `selection` are reserved");
              let r = e[n],
                o = r.spec.state;
              o && o.toJSON && (t[n] = o.toJSON.call(r, this[r.key]));
            }
          return t;
        }
        static fromJSON(e, t, n) {
          if (!t) throw new RangeError("Invalid input for EditorState.fromJSON");
          if (!e.schema) throw new RangeError("Required config field 'schema' missing");
          let o = new k(e.schema, e.plugins),
            i = new S(o);
          return (
            o.fields.forEach((o) => {
              if ("doc" == o.name) i.doc = r.NB.fromJSON(e.schema, t.doc);
              else if ("selection" == o.name) i.selection = s.fromJSON(i.doc, t.selection);
              else if ("storedMarks" == o.name) t.storedMarks && (i.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
              else {
                if (n)
                  for (let r in n) {
                    let s = n[r],
                      a = s.spec.state;
                    if (s.key == o.name && a && a.fromJSON && Object.prototype.hasOwnProperty.call(t, r))
                      return void (i[o.name] = a.fromJSON.call(s, e, t[r], i));
                  }
                i[o.name] = o.init(e, i);
              }
            }),
            i
          );
        }
      }
      function O(e, t, n) {
        for (let r in e) {
          let o = e[r];
          o instanceof Function ? (o = o.bind(t)) : "handleDOMEvents" == r && (o = O(o, t, {})), (n[r] = o);
        }
        return n;
      }
      class M {
        constructor(e) {
          (this.spec = e), (this.props = {}), e.props && O(e.props, this, this.props), (this.key = e.key ? e.key.key : N("plugin"));
        }
        getState(e) {
          return e[this.key];
        }
      }
      const C = Object.create(null);
      function N(e) {
        return e in C ? e + "$" + ++C[e] : ((C[e] = 0), e + "$");
      }
      class T {
        constructor(e = "key") {
          this.key = N(e);
        }
        get(e) {
          return e.config.pluginsByKey[this.key];
        }
        getState(e) {
          return e[this.key];
        }
      }
    },
    16560: (e, t, n) => {
      n.d(t, {
        Ax: () => O,
        FC: () => v,
        GJ: () => N,
        Mn: () => M,
        Pu: () => y,
        dR: () => E,
        k9: () => x,
        nd: () => k,
        nj: () => T,
        vs: () => l,
        wx: () => H
      });
      var r = n(87823);
      const o = Math.pow(2, 16);
      function i(e) {
        return 65535 & e;
      }
      class s {
        constructor(e, t, n) {
          (this.pos = e), (this.delInfo = t), (this.recover = n);
        }
        get deleted() {
          return (8 & this.delInfo) > 0;
        }
        get deletedBefore() {
          return (5 & this.delInfo) > 0;
        }
        get deletedAfter() {
          return (6 & this.delInfo) > 0;
        }
        get deletedAcross() {
          return (4 & this.delInfo) > 0;
        }
      }
      class a {
        constructor(e, t = !1) {
          if (((this.ranges = e), (this.inverted = t), !e.length && a.empty)) return a.empty;
        }
        recover(e) {
          let t = 0,
            n = i(e);
          if (!this.inverted) for (let e = 0; e < n; e++) t += this.ranges[3 * e + 2] - this.ranges[3 * e + 1];
          return (
            this.ranges[3 * n] +
            t +
            (function (e) {
              return (e - (65535 & e)) / o;
            })(e)
          );
        }
        mapResult(e, t = 1) {
          return this._map(e, t, !1);
        }
        map(e, t = 1) {
          return this._map(e, t, !0);
        }
        _map(e, t, n) {
          let r = 0,
            i = this.inverted ? 2 : 1,
            a = this.inverted ? 1 : 2;
          for (let l = 0; l < this.ranges.length; l += 3) {
            let c = this.ranges[l] - (this.inverted ? r : 0);
            if (c > e) break;
            let d = this.ranges[l + i],
              p = this.ranges[l + a],
              h = c + d;
            if (e <= h) {
              let i = c + r + ((d ? (e == c ? -1 : e == h ? 1 : t) : t) < 0 ? 0 : p);
              if (n) return i;
              let a = e == c ? 2 : e == h ? 1 : 4;
              return (t < 0 ? e != c : e != h) && (a |= 8), new s(i, a, e == (t < 0 ? c : h) ? null : l / 3 + (e - c) * o);
            }
            r += p - d;
          }
          return n ? e + r : new s(e + r, 0, null);
        }
        touches(e, t) {
          let n = 0,
            r = i(t),
            o = this.inverted ? 2 : 1,
            s = this.inverted ? 1 : 2;
          for (let t = 0; t < this.ranges.length; t += 3) {
            let i = this.ranges[t] - (this.inverted ? n : 0);
            if (i > e) break;
            let a = this.ranges[t + o];
            if (e <= i + a && t == 3 * r) return !0;
            n += this.ranges[t + s] - a;
          }
          return !1;
        }
        forEach(e) {
          let t = this.inverted ? 2 : 1,
            n = this.inverted ? 1 : 2;
          for (let r = 0, o = 0; r < this.ranges.length; r += 3) {
            let i = this.ranges[r],
              s = i - (this.inverted ? o : 0),
              a = i + (this.inverted ? 0 : o),
              l = this.ranges[r + t],
              c = this.ranges[r + n];
            e(s, s + l, a, a + c), (o += c - l);
          }
        }
        invert() {
          return new a(this.ranges, !this.inverted);
        }
        toString() {
          return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
        }
        static offset(e) {
          return 0 == e ? a.empty : new a(e < 0 ? [0, -e, 0] : [0, 0, e]);
        }
      }
      a.empty = new a([]);
      class l {
        constructor(e = [], t, n = 0, r = e.length) {
          (this.maps = e), (this.mirror = t), (this.from = n), (this.to = r);
        }
        slice(e = 0, t = this.maps.length) {
          return new l(this.maps, this.mirror, e, t);
        }
        copy() {
          return new l(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
        }
        appendMap(e, t) {
          (this.to = this.maps.push(e)), null != t && this.setMirror(this.maps.length - 1, t);
        }
        appendMapping(e) {
          for (let t = 0, n = this.maps.length; t < e.maps.length; t++) {
            let r = e.getMirror(t);
            this.appendMap(e.maps[t], null != r && r < t ? n + r : void 0);
          }
        }
        getMirror(e) {
          if (this.mirror) for (let t = 0; t < this.mirror.length; t++) if (this.mirror[t] == e) return this.mirror[t + (t % 2 ? -1 : 1)];
        }
        setMirror(e, t) {
          this.mirror || (this.mirror = []), this.mirror.push(e, t);
        }
        appendMappingInverted(e) {
          for (let t = e.maps.length - 1, n = this.maps.length + e.maps.length; t >= 0; t--) {
            let r = e.getMirror(t);
            this.appendMap(e.maps[t].invert(), null != r && r > t ? n - r - 1 : void 0);
          }
        }
        invert() {
          let e = new l();
          return e.appendMappingInverted(this), e;
        }
        map(e, t = 1) {
          if (this.mirror) return this._map(e, t, !0);
          for (let n = this.from; n < this.to; n++) e = this.maps[n].map(e, t);
          return e;
        }
        mapResult(e, t = 1) {
          return this._map(e, t, !1);
        }
        _map(e, t, n) {
          let r = 0;
          for (let n = this.from; n < this.to; n++) {
            let o = this.maps[n].mapResult(e, t);
            if (null != o.recover) {
              let t = this.getMirror(n);
              if (null != t && t > n && t < this.to) {
                (n = t), (e = this.maps[t].recover(o.recover));
                continue;
              }
            }
            (r |= o.delInfo), (e = o.pos);
          }
          return n ? e : new s(e, r, null);
        }
      }
      const c = Object.create(null);
      class d {
        getMap() {
          return a.empty;
        }
        merge(e) {
          return null;
        }
        static fromJSON(e, t) {
          if (!t || !t.stepType) throw new RangeError("Invalid input for Step.fromJSON");
          let n = c[t.stepType];
          if (!n) throw new RangeError(`No step type ${t.stepType} defined`);
          return n.fromJSON(e, t);
        }
        static jsonID(e, t) {
          if (e in c) throw new RangeError("Duplicate use of step JSON ID " + e);
          return (c[e] = t), (t.prototype.jsonID = e), t;
        }
      }
      class p {
        constructor(e, t) {
          (this.doc = e), (this.failed = t);
        }
        static ok(e) {
          return new p(e, null);
        }
        static fail(e) {
          return new p(null, e);
        }
        static fromReplace(e, t, n, o) {
          try {
            return p.ok(e.replace(t, n, o));
          } catch (e) {
            if (e instanceof r.e4) return p.fail(e.message);
            throw e;
          }
        }
      }
      function h(e, t, n) {
        let o = [];
        for (let r = 0; r < e.childCount; r++) {
          let i = e.child(r);
          i.content.size && (i = i.copy(h(i.content, t, i))), i.isInline && (i = t(i, n, r)), o.push(i);
        }
        return r.HY.fromArray(o);
      }
      class u extends d {
        constructor(e, t, n) {
          super(), (this.from = e), (this.to = t), (this.mark = n);
        }
        apply(e) {
          let t = e.slice(this.from, this.to),
            n = e.resolve(this.from),
            o = n.node(n.sharedDepth(this.to)),
            i = new r.p2(
              h(t.content, (e, t) => (e.isAtom && t.type.allowsMarkType(this.mark.type) ? e.mark(this.mark.addToSet(e.marks)) : e), o),
              t.openStart,
              t.openEnd
            );
          return p.fromReplace(e, this.from, this.to, i);
        }
        invert() {
          return new f(this.from, this.to, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return (t.deleted && n.deleted) || t.pos >= n.pos ? null : new u(t.pos, n.pos, this.mark);
        }
        merge(e) {
          return e instanceof u && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from
            ? new u(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark)
            : null;
        }
        toJSON() {
          return { stepType: "addMark", mark: this.mark.toJSON(), from: this.from, to: this.to };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to) throw new RangeError("Invalid input for AddMarkStep.fromJSON");
          return new u(t.from, t.to, e.markFromJSON(t.mark));
        }
      }
      d.jsonID("addMark", u);
      class f extends d {
        constructor(e, t, n) {
          super(), (this.from = e), (this.to = t), (this.mark = n);
        }
        apply(e) {
          let t = e.slice(this.from, this.to),
            n = new r.p2(
              h(t.content, (e) => e.mark(this.mark.removeFromSet(e.marks)), e),
              t.openStart,
              t.openEnd
            );
          return p.fromReplace(e, this.from, this.to, n);
        }
        invert() {
          return new u(this.from, this.to, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return (t.deleted && n.deleted) || t.pos >= n.pos ? null : new f(t.pos, n.pos, this.mark);
        }
        merge(e) {
          return e instanceof f && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from
            ? new f(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark)
            : null;
        }
        toJSON() {
          return { stepType: "removeMark", mark: this.mark.toJSON(), from: this.from, to: this.to };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to) throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
          return new f(t.from, t.to, e.markFromJSON(t.mark));
        }
      }
      d.jsonID("removeMark", f);
      class m extends d {
        constructor(e, t) {
          super(), (this.pos = e), (this.mark = t);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return p.fail("No node at mark step's position");
          let n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
          return p.fromReplace(e, this.pos, this.pos + 1, new r.p2(r.HY.from(n), 0, t.isLeaf ? 0 : 1));
        }
        invert(e) {
          let t = e.nodeAt(this.pos);
          if (t) {
            let e = this.mark.addToSet(t.marks);
            if (e.length == t.marks.length) {
              for (let n = 0; n < t.marks.length; n++) if (!t.marks[n].isInSet(e)) return new m(this.pos, t.marks[n]);
              return new m(this.pos, this.mark);
            }
          }
          return new g(this.pos, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new m(t.pos, this.mark);
        }
        toJSON() {
          return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos) throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
          return new m(t.pos, e.markFromJSON(t.mark));
        }
      }
      d.jsonID("addNodeMark", m);
      class g extends d {
        constructor(e, t) {
          super(), (this.pos = e), (this.mark = t);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return p.fail("No node at mark step's position");
          let n = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
          return p.fromReplace(e, this.pos, this.pos + 1, new r.p2(r.HY.from(n), 0, t.isLeaf ? 0 : 1));
        }
        invert(e) {
          let t = e.nodeAt(this.pos);
          return t && this.mark.isInSet(t.marks) ? new m(this.pos, this.mark) : this;
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new g(t.pos, this.mark);
        }
        toJSON() {
          return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos) throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
          return new g(t.pos, e.markFromJSON(t.mark));
        }
      }
      d.jsonID("removeNodeMark", g);
      class y extends d {
        constructor(e, t, n, r = !1) {
          super(), (this.from = e), (this.to = t), (this.slice = n), (this.structure = r);
        }
        apply(e) {
          return this.structure && w(e, this.from, this.to)
            ? p.fail("Structure replace would overwrite content")
            : p.fromReplace(e, this.from, this.to, this.slice);
        }
        getMap() {
          return new a([this.from, this.to - this.from, this.slice.size]);
        }
        invert(e) {
          return new y(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return t.deletedAcross && n.deletedAcross ? null : new y(t.pos, Math.max(t.pos, n.pos), this.slice);
        }
        merge(e) {
          if (!(e instanceof y) || e.structure || this.structure) return null;
          if (this.from + this.slice.size != e.from || this.slice.openEnd || e.slice.openStart) {
            if (e.to != this.from || this.slice.openStart || e.slice.openEnd) return null;
            {
              let t =
                this.slice.size + e.slice.size == 0
                  ? r.p2.empty
                  : new r.p2(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
              return new y(e.from, this.to, t, this.structure);
            }
          }
          {
            let t =
              this.slice.size + e.slice.size == 0
                ? r.p2.empty
                : new r.p2(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
            return new y(this.from, this.to + (e.to - e.from), t, this.structure);
          }
        }
        toJSON() {
          let e = { stepType: "replace", from: this.from, to: this.to };
          return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to) throw new RangeError("Invalid input for ReplaceStep.fromJSON");
          return new y(t.from, t.to, r.p2.fromJSON(e, t.slice), !!t.structure);
        }
      }
      d.jsonID("replace", y);
      class v extends d {
        constructor(e, t, n, r, o, i, s = !1) {
          super(),
            (this.from = e),
            (this.to = t),
            (this.gapFrom = n),
            (this.gapTo = r),
            (this.slice = o),
            (this.insert = i),
            (this.structure = s);
        }
        apply(e) {
          if (this.structure && (w(e, this.from, this.gapFrom) || w(e, this.gapTo, this.to)))
            return p.fail("Structure gap-replace would overwrite content");
          let t = e.slice(this.gapFrom, this.gapTo);
          if (t.openStart || t.openEnd) return p.fail("Gap is not a flat range");
          let n = this.slice.insertAt(this.insert, t.content);
          return n ? p.fromReplace(e, this.from, this.to, n) : p.fail("Content does not fit in gap");
        }
        getMap() {
          return new a([this.from, this.gapFrom - this.from, this.insert, this.gapTo, this.to - this.gapTo, this.slice.size - this.insert]);
        }
        invert(e) {
          let t = this.gapTo - this.gapFrom;
          return new v(
            this.from,
            this.from + this.slice.size + t,
            this.from + this.insert,
            this.from + this.insert + t,
            e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from),
            this.gapFrom - this.from,
            this.structure
          );
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1),
            r = e.map(this.gapFrom, -1),
            o = e.map(this.gapTo, 1);
          return (t.deletedAcross && n.deletedAcross) || r < t.pos || o > n.pos
            ? null
            : new v(t.pos, n.pos, r, o, this.slice, this.insert, this.structure);
        }
        toJSON() {
          let e = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert
          };
          return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
        }
        static fromJSON(e, t) {
          if (
            "number" != typeof t.from ||
            "number" != typeof t.to ||
            "number" != typeof t.gapFrom ||
            "number" != typeof t.gapTo ||
            "number" != typeof t.insert
          )
            throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
          return new v(t.from, t.to, t.gapFrom, t.gapTo, r.p2.fromJSON(e, t.slice), t.insert, !!t.structure);
        }
      }
      function w(e, t, n) {
        let r = e.resolve(t),
          o = n - t,
          i = r.depth;
        for (; o > 0 && i > 0 && r.indexAfter(i) == r.node(i).childCount; ) i--, o--;
        if (o > 0) {
          let e = r.node(i).maybeChild(r.indexAfter(i));
          for (; o > 0; ) {
            if (!e || e.isLeaf) return !0;
            (e = e.firstChild), o--;
          }
        }
        return !1;
      }
      function b(e, t, n) {
        return (0 == t || e.canReplace(t, e.childCount)) && (n == e.childCount || e.canReplace(0, n));
      }
      function x(e) {
        let t = e.parent.content.cutByIndex(e.startIndex, e.endIndex);
        for (let n = e.depth; ; --n) {
          let r = e.$from.node(n),
            o = e.$from.index(n),
            i = e.$to.indexAfter(n);
          if (n < e.depth && r.canReplace(o, i, t)) return n;
          if (0 == n || r.type.spec.isolating || !b(r, o, i)) break;
        }
        return null;
      }
      function k(e, t, n = null, r = e) {
        let o = (function (e, t) {
            let { parent: n, startIndex: r, endIndex: o } = e,
              i = n.contentMatchAt(r).findWrapping(t);
            if (!i) return null;
            let s = i.length ? i[0] : t;
            return n.canReplaceWith(r, o, s) ? i : null;
          })(e, t),
          i =
            o &&
            (function (e, t) {
              let { parent: n, startIndex: r, endIndex: o } = e,
                i = n.child(r),
                s = t.contentMatch.findWrapping(i.type);
              if (!s) return null;
              let a = (s.length ? s[s.length - 1] : t).contentMatch;
              for (let e = r; a && e < o; e++) a = a.matchType(n.child(e).type);
              return a && a.validEnd ? s : null;
            })(r, t);
        return i ? o.map(S).concat({ type: t, attrs: n }).concat(i.map(S)) : null;
      }
      function S(e) {
        return { type: e, attrs: null };
      }
      function O(e, t, n = 1, r) {
        let o = e.resolve(t),
          i = o.depth - n,
          s = (r && r[r.length - 1]) || o.parent;
        if (
          i < 0 ||
          o.parent.type.spec.isolating ||
          !o.parent.canReplace(o.index(), o.parent.childCount) ||
          !s.type.validContent(o.parent.content.cutByIndex(o.index(), o.parent.childCount))
        )
          return !1;
        for (let e = o.depth - 1, t = n - 2; e > i; e--, t--) {
          let n = o.node(e),
            i = o.index(e);
          if (n.type.spec.isolating) return !1;
          let s = n.content.cutByIndex(i, n.childCount),
            a = r && r[t + 1];
          a && (s = s.replaceChild(0, a.type.create(a.attrs)));
          let l = (r && r[t]) || n;
          if (!n.canReplace(i + 1, n.childCount) || !l.type.validContent(s)) return !1;
        }
        let a = o.indexAfter(i),
          l = r && r[0];
        return o.node(i).canReplaceWith(a, a, l ? l.type : o.node(i + 1).type);
      }
      function M(e, t) {
        let n = e.resolve(t),
          r = n.index();
        return C(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
      }
      function C(e, t) {
        return !(!e || !t || e.isLeaf || !e.canAppend(t));
      }
      function N(e, t, n = -1) {
        let r = e.resolve(t);
        for (let e = r.depth; ; e--) {
          let o,
            i,
            s = r.index(e);
          if (
            (e == r.depth
              ? ((o = r.nodeBefore), (i = r.nodeAfter))
              : n > 0
              ? ((o = r.node(e + 1)), s++, (i = r.node(e).maybeChild(s)))
              : ((o = r.node(e).maybeChild(s - 1)), (i = r.node(e + 1))),
            o && !o.isTextblock && C(o, i) && r.node(e).canReplace(s, s + 1))
          )
            return t;
          if (0 == e) break;
          t = n < 0 ? r.before(e) : r.after(e);
        }
      }
      function T(e, t, n) {
        let r = e.resolve(t);
        if (!n.content.size) return t;
        let o = n.content;
        for (let e = 0; e < n.openStart; e++) o = o.firstChild.content;
        for (let e = 1; e <= (0 == n.openStart && n.size ? 2 : 1); e++)
          for (let t = r.depth; t >= 0; t--) {
            let n = t == r.depth ? 0 : r.pos <= (r.start(t + 1) + r.end(t + 1)) / 2 ? -1 : 1,
              i = r.index(t) + (n > 0 ? 1 : 0),
              s = r.node(t),
              a = !1;
            if (1 == e) a = s.canReplace(i, i, o);
            else {
              let e = s.contentMatchAt(i).findWrapping(o.firstChild.type);
              a = e && s.canReplaceWith(i, i, e[0]);
            }
            if (a) return 0 == n ? r.pos : n < 0 ? r.before(t + 1) : r.after(t + 1);
          }
        return null;
      }
      function E(e, t, n = t, o = r.p2.empty) {
        if (t == n && !o.size) return null;
        let i = e.resolve(t),
          s = e.resolve(n);
        return D(i, s, o) ? new y(t, n, o) : new A(i, s, o).fit();
      }
      function D(e, t, n) {
        return !n.openStart && !n.openEnd && e.start() == t.start() && e.parent.canReplace(e.index(), t.index(), n.content);
      }
      d.jsonID("replaceAround", v);
      class A {
        constructor(e, t, n) {
          (this.$from = e), (this.$to = t), (this.unplaced = n), (this.frontier = []), (this.placed = r.HY.empty);
          for (let t = 0; t <= e.depth; t++) {
            let n = e.node(t);
            this.frontier.push({ type: n.type, match: n.contentMatchAt(e.indexAfter(t)) });
          }
          for (let t = e.depth; t > 0; t--) this.placed = r.HY.from(e.node(t).copy(this.placed));
        }
        get depth() {
          return this.frontier.length - 1;
        }
        fit() {
          for (; this.unplaced.size; ) {
            let e = this.findFittable();
            e ? this.placeNodes(e) : this.openMore() || this.dropNode();
          }
          let e = this.mustMoveInline(),
            t = this.placed.size - this.depth - this.$from.depth,
            n = this.$from,
            o = this.close(e < 0 ? this.$to : n.doc.resolve(e));
          if (!o) return null;
          let i = this.placed,
            s = n.depth,
            a = o.depth;
          for (; s && a && 1 == i.childCount; ) (i = i.firstChild.content), s--, a--;
          let l = new r.p2(i, s, a);
          return e > -1
            ? new v(n.pos, e, this.$to.pos, this.$to.end(), l, t)
            : l.size || n.pos != this.$to.pos
            ? new y(n.pos, o.pos, l)
            : null;
        }
        findFittable() {
          let e = this.unplaced.openStart;
          for (let t = this.unplaced.content, n = 0, r = this.unplaced.openEnd; n < e; n++) {
            let o = t.firstChild;
            if ((t.childCount > 1 && (r = 0), o.type.spec.isolating && r <= n)) {
              e = n;
              break;
            }
            t = o.content;
          }
          for (let t = 1; t <= 2; t++)
            for (let n = 1 == t ? e : this.unplaced.openStart; n >= 0; n--) {
              let e,
                o = null;
              n ? ((o = I(this.unplaced.content, n - 1).firstChild), (e = o.content)) : (e = this.unplaced.content);
              let i = e.firstChild;
              for (let e = this.depth; e >= 0; e--) {
                let s,
                  { type: a, match: l } = this.frontier[e],
                  c = null;
                if (1 == t && (i ? l.matchType(i.type) || (c = l.fillBefore(r.HY.from(i), !1)) : o && a.compatibleContent(o.type)))
                  return { sliceDepth: n, frontierDepth: e, parent: o, inject: c };
                if (2 == t && i && (s = l.findWrapping(i.type))) return { sliceDepth: n, frontierDepth: e, parent: o, wrap: s };
                if (o && l.matchType(o.type)) break;
              }
            }
        }
        openMore() {
          let { content: e, openStart: t, openEnd: n } = this.unplaced,
            o = I(e, t);
          return !(
            !o.childCount ||
            o.firstChild.isLeaf ||
            ((this.unplaced = new r.p2(e, t + 1, Math.max(n, o.size + t >= e.size - n ? t + 1 : 0))), 0)
          );
        }
        dropNode() {
          let { content: e, openStart: t, openEnd: n } = this.unplaced,
            o = I(e, t);
          if (o.childCount <= 1 && t > 0) {
            let i = e.size - t <= t + o.size;
            this.unplaced = new r.p2(P(e, t - 1, 1), t - 1, i ? t - 1 : n);
          } else this.unplaced = new r.p2(P(e, t, 1), t, n);
        }
        placeNodes({ sliceDepth: e, frontierDepth: t, parent: n, inject: o, wrap: i }) {
          for (; this.depth > t; ) this.closeFrontierNode();
          if (i) for (let e = 0; e < i.length; e++) this.openFrontierNode(i[e]);
          let s = this.unplaced,
            a = n ? n.content : s.content,
            l = s.openStart - e,
            c = 0,
            d = [],
            { match: p, type: h } = this.frontier[t];
          if (o) {
            for (let e = 0; e < o.childCount; e++) d.push(o.child(e));
            p = p.matchFragment(o);
          }
          let u = a.size + e - (s.content.size - s.openEnd);
          for (; c < a.childCount; ) {
            let e = a.child(c),
              t = p.matchType(e.type);
            if (!t) break;
            c++,
              (c > 1 || 0 == l || e.content.size) &&
                ((p = t), d.push(B(e.mark(h.allowedMarks(e.marks)), 1 == c ? l : 0, c == a.childCount ? u : -1)));
          }
          let f = c == a.childCount;
          f || (u = -1),
            (this.placed = R(this.placed, t, r.HY.from(d))),
            (this.frontier[t].match = p),
            f && u < 0 && n && n.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
          for (let e = 0, t = a; e < u; e++) {
            let e = t.lastChild;
            this.frontier.push({ type: e.type, match: e.contentMatchAt(e.childCount) }), (t = e.content);
          }
          this.unplaced = f
            ? 0 == e
              ? r.p2.empty
              : new r.p2(P(s.content, e - 1, 1), e - 1, u < 0 ? s.openEnd : e - 1)
            : new r.p2(P(s.content, e, c), s.openStart, s.openEnd);
        }
        mustMoveInline() {
          if (!this.$to.parent.isTextblock) return -1;
          let e,
            t = this.frontier[this.depth];
          if (
            !t.type.isTextblock ||
            !$(this.$to, this.$to.depth, t.type, t.match, !1) ||
            (this.$to.depth == this.depth && (e = this.findCloseLevel(this.$to)) && e.depth == this.depth)
          )
            return -1;
          let { depth: n } = this.$to,
            r = this.$to.after(n);
          for (; n > 1 && r == this.$to.end(--n); ) ++r;
          return r;
        }
        findCloseLevel(e) {
          e: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
            let { match: n, type: r } = this.frontier[t],
              o = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)),
              i = $(e, t, r, n, o);
            if (i) {
              for (let n = t - 1; n >= 0; n--) {
                let { match: t, type: r } = this.frontier[n],
                  o = $(e, n, r, t, !0);
                if (!o || o.childCount) continue e;
              }
              return { depth: t, fit: i, move: o ? e.doc.resolve(e.after(t + 1)) : e };
            }
          }
        }
        close(e) {
          let t = this.findCloseLevel(e);
          if (!t) return null;
          for (; this.depth > t.depth; ) this.closeFrontierNode();
          t.fit.childCount && (this.placed = R(this.placed, t.depth, t.fit)), (e = t.move);
          for (let n = t.depth + 1; n <= e.depth; n++) {
            let t = e.node(n),
              r = t.type.contentMatch.fillBefore(t.content, !0, e.index(n));
            this.openFrontierNode(t.type, t.attrs, r);
          }
          return e;
        }
        openFrontierNode(e, t = null, n) {
          let o = this.frontier[this.depth];
          (o.match = o.match.matchType(e)),
            (this.placed = R(this.placed, this.depth, r.HY.from(e.create(t, n)))),
            this.frontier.push({ type: e, match: e.contentMatch });
        }
        closeFrontierNode() {
          let e = this.frontier.pop().match.fillBefore(r.HY.empty, !0);
          e.childCount && (this.placed = R(this.placed, this.frontier.length, e));
        }
      }
      function P(e, t, n) {
        return 0 == t ? e.cutByIndex(n, e.childCount) : e.replaceChild(0, e.firstChild.copy(P(e.firstChild.content, t - 1, n)));
      }
      function R(e, t, n) {
        return 0 == t ? e.append(n) : e.replaceChild(e.childCount - 1, e.lastChild.copy(R(e.lastChild.content, t - 1, n)));
      }
      function I(e, t) {
        for (let n = 0; n < t; n++) e = e.firstChild.content;
        return e;
      }
      function B(e, t, n) {
        if (t <= 0) return e;
        let o = e.content;
        return (
          t > 1 && (o = o.replaceChild(0, B(o.firstChild, t - 1, 1 == o.childCount ? n - 1 : 0))),
          t > 0 &&
            ((o = e.type.contentMatch.fillBefore(o).append(o)),
            n <= 0 && (o = o.append(e.type.contentMatch.matchFragment(o).fillBefore(r.HY.empty, !0)))),
          e.copy(o)
        );
      }
      function $(e, t, n, r, o) {
        let i = e.node(t),
          s = o ? e.indexAfter(t) : e.index(t);
        if (s == i.childCount && !n.compatibleContent(i.type)) return null;
        let a = r.fillBefore(i.content, !0, s);
        return a &&
          !(function (e, t, n) {
            for (let r = n; r < t.childCount; r++) if (!e.allowsMarks(t.child(r).marks)) return !0;
            return !1;
          })(n, i.content, s)
          ? a
          : null;
      }
      function z(e, t, n, o, i) {
        if (t < n) {
          let r = e.firstChild;
          e = e.replaceChild(0, r.copy(z(r.content, t + 1, n, o, r)));
        }
        if (t > o) {
          let t = i.contentMatchAt(0),
            n = t.fillBefore(e).append(e);
          e = n.append(t.matchFragment(n).fillBefore(r.HY.empty, !0));
        }
        return e;
      }
      function j(e, t) {
        let n = [];
        for (let r = Math.min(e.depth, t.depth); r >= 0; r--) {
          let o = e.start(r);
          if (
            o < e.pos - (e.depth - r) ||
            t.end(r) > t.pos + (t.depth - r) ||
            e.node(r).type.spec.isolating ||
            t.node(r).type.spec.isolating
          )
            break;
          (o == t.start(r) ||
            (r == e.depth && r == t.depth && e.parent.inlineContent && t.parent.inlineContent && r && t.start(r - 1) == o - 1)) &&
            n.push(r);
        }
        return n;
      }
      class V extends d {
        constructor(e, t, n) {
          super(), (this.pos = e), (this.attr = t), (this.value = n);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return p.fail("No node at attribute step's position");
          let n = Object.create(null);
          for (let e in t.attrs) n[e] = t.attrs[e];
          n[this.attr] = this.value;
          let o = t.type.create(n, null, t.marks);
          return p.fromReplace(e, this.pos, this.pos + 1, new r.p2(r.HY.from(o), 0, t.isLeaf ? 0 : 1));
        }
        getMap() {
          return a.empty;
        }
        invert(e) {
          return new V(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new V(t.pos, this.attr, this.value);
        }
        toJSON() {
          return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos || "string" != typeof t.attr) throw new RangeError("Invalid input for AttrStep.fromJSON");
          return new V(t.pos, t.attr, t.value);
        }
      }
      d.jsonID("attr", V);
      class F extends d {
        constructor(e, t) {
          super(), (this.attr = e), (this.value = t);
        }
        apply(e) {
          let t = Object.create(null);
          for (let n in e.attrs) t[n] = e.attrs[n];
          t[this.attr] = this.value;
          let n = e.type.create(t, e.content, e.marks);
          return p.ok(n);
        }
        getMap() {
          return a.empty;
        }
        invert(e) {
          return new F(this.attr, e.attrs[this.attr]);
        }
        map(e) {
          return this;
        }
        toJSON() {
          return { stepType: "docAttr", attr: this.attr, value: this.value };
        }
        static fromJSON(e, t) {
          if ("string" != typeof t.attr) throw new RangeError("Invalid input for DocAttrStep.fromJSON");
          return new F(t.attr, t.value);
        }
      }
      d.jsonID("docAttr", F);
      let L = class extends Error {};
      (L = function e(t) {
        let n = Error.call(this, t);
        return (n.__proto__ = e.prototype), n;
      }),
        ((L.prototype = Object.create(Error.prototype)).constructor = L),
        (L.prototype.name = "TransformError");
      class H {
        constructor(e) {
          (this.doc = e), (this.steps = []), (this.docs = []), (this.mapping = new l());
        }
        get before() {
          return this.docs.length ? this.docs[0] : this.doc;
        }
        step(e) {
          let t = this.maybeStep(e);
          if (t.failed) throw new L(t.failed);
          return this;
        }
        maybeStep(e) {
          let t = e.apply(this.doc);
          return t.failed || this.addStep(e, t.doc), t;
        }
        get docChanged() {
          return this.steps.length > 0;
        }
        addStep(e, t) {
          this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), (this.doc = t);
        }
        replace(e, t = e, n = r.p2.empty) {
          let o = E(this.doc, e, t, n);
          return o && this.step(o), this;
        }
        replaceWith(e, t, n) {
          return this.replace(e, t, new r.p2(r.HY.from(n), 0, 0));
        }
        delete(e, t) {
          return this.replace(e, t, r.p2.empty);
        }
        insert(e, t) {
          return this.replaceWith(e, e, t);
        }
        replaceRange(e, t, n) {
          return (
            (function (e, t, n, o) {
              if (!o.size) return e.deleteRange(t, n);
              let i = e.doc.resolve(t),
                s = e.doc.resolve(n);
              if (D(i, s, o)) return e.step(new y(t, n, o));
              let a = j(i, e.doc.resolve(n));
              0 == a[a.length - 1] && a.pop();
              let l = -(i.depth + 1);
              a.unshift(l);
              for (let e = i.depth, t = i.pos - 1; e > 0; e--, t--) {
                let n = i.node(e).type.spec;
                if (n.defining || n.definingAsContext || n.isolating) break;
                a.indexOf(e) > -1 ? (l = e) : i.before(e) == t && a.splice(1, 0, -e);
              }
              let c = a.indexOf(l),
                d = [],
                p = o.openStart;
              for (let e = o.content, t = 0; ; t++) {
                let n = e.firstChild;
                if ((d.push(n), t == o.openStart)) break;
                e = n.content;
              }
              for (let e = p - 1; e >= 0; e--) {
                let t = d[e],
                  n = (h = t.type).spec.defining || h.spec.definingForContent;
                if (n && !t.sameMarkup(i.node(Math.abs(l) - 1))) p = e;
                else if (n || !t.type.isTextblock) break;
              }
              var h;
              for (let t = o.openStart; t >= 0; t--) {
                let l = (t + p + 1) % (o.openStart + 1),
                  h = d[l];
                if (h)
                  for (let t = 0; t < a.length; t++) {
                    let d = a[(t + c) % a.length],
                      p = !0;
                    d < 0 && ((p = !1), (d = -d));
                    let u = i.node(d - 1),
                      f = i.index(d - 1);
                    if (u.canReplaceWith(f, f, h.type, h.marks))
                      return e.replace(i.before(d), p ? s.after(d) : n, new r.p2(z(o.content, 0, o.openStart, l), l, o.openEnd));
                  }
              }
              let u = e.steps.length;
              for (let r = a.length - 1; r >= 0 && (e.replace(t, n, o), !(e.steps.length > u)); r--) {
                let e = a[r];
                e < 0 || ((t = i.before(e)), (n = s.after(e)));
              }
            })(this, e, t, n),
            this
          );
        }
        replaceRangeWith(e, t, n) {
          return (
            (function (e, t, n, o) {
              if (!o.isInline && t == n && e.doc.resolve(t).parent.content.size) {
                let r = (function (e, t, n) {
                  let r = e.resolve(t);
                  if (r.parent.canReplaceWith(r.index(), r.index(), n)) return t;
                  if (0 == r.parentOffset)
                    for (let e = r.depth - 1; e >= 0; e--) {
                      let t = r.index(e);
                      if (r.node(e).canReplaceWith(t, t, n)) return r.before(e + 1);
                      if (t > 0) return null;
                    }
                  if (r.parentOffset == r.parent.content.size)
                    for (let e = r.depth - 1; e >= 0; e--) {
                      let t = r.indexAfter(e);
                      if (r.node(e).canReplaceWith(t, t, n)) return r.after(e + 1);
                      if (t < r.node(e).childCount) return null;
                    }
                  return null;
                })(e.doc, t, o.type);
                null != r && (t = n = r);
              }
              e.replaceRange(t, n, new r.p2(r.HY.from(o), 0, 0));
            })(this, e, t, n),
            this
          );
        }
        deleteRange(e, t) {
          return (
            (function (e, t, n) {
              let r = e.doc.resolve(t),
                o = e.doc.resolve(n),
                i = j(r, o);
              for (let t = 0; t < i.length; t++) {
                let n = i[t],
                  s = t == i.length - 1;
                if ((s && 0 == n) || r.node(n).type.contentMatch.validEnd) return e.delete(r.start(n), o.end(n));
                if (n > 0 && (s || r.node(n - 1).canReplace(r.index(n - 1), o.indexAfter(n - 1)))) return e.delete(r.before(n), o.after(n));
              }
              for (let i = 1; i <= r.depth && i <= o.depth; i++)
                if (t - r.start(i) == r.depth - i && n > r.end(i) && o.end(i) - n != o.depth - i) return e.delete(r.before(i), n);
              e.delete(t, n);
            })(this, e, t),
            this
          );
        }
        lift(e, t) {
          return (
            (function (e, t, n) {
              let { $from: o, $to: i, depth: s } = t,
                a = o.before(s + 1),
                l = i.after(s + 1),
                c = a,
                d = l,
                p = r.HY.empty,
                h = 0;
              for (let e = s, t = !1; e > n; e--) t || o.index(e) > 0 ? ((t = !0), (p = r.HY.from(o.node(e).copy(p))), h++) : c--;
              let u = r.HY.empty,
                f = 0;
              for (let e = s, t = !1; e > n; e--)
                t || i.after(e + 1) < i.end(e) ? ((t = !0), (u = r.HY.from(i.node(e).copy(u))), f++) : d++;
              e.step(new v(c, d, a, l, new r.p2(p.append(u), h, f), p.size - h, !0));
            })(this, e, t),
            this
          );
        }
        join(e, t = 1) {
          return (
            (function (e, t, n) {
              let o = new y(t - n, t + n, r.p2.empty, !0);
              e.step(o);
            })(this, e, t),
            this
          );
        }
        wrap(e, t) {
          return (
            (function (e, t, n) {
              let o = r.HY.empty;
              for (let e = n.length - 1; e >= 0; e--) {
                if (o.size) {
                  let t = n[e].type.contentMatch.matchFragment(o);
                  if (!t || !t.validEnd)
                    throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
                }
                o = r.HY.from(n[e].type.create(n[e].attrs, o));
              }
              let i = t.start,
                s = t.end;
              e.step(new v(i, s, i, s, new r.p2(o, 0, 0), n.length, !0));
            })(this, e, t),
            this
          );
        }
        setBlockType(e, t = e, n, o = null) {
          return (
            (function (e, t, n, o, i) {
              if (!o.isTextblock) throw new RangeError("Type given to setBlockType should be a textblock");
              let s = e.steps.length;
              e.doc.nodesBetween(t, n, (t, n) => {
                if (
                  t.isTextblock &&
                  !t.hasMarkup(o, i) &&
                  (function (e, t, n) {
                    let r = e.resolve(t),
                      o = r.index();
                    return r.parent.canReplaceWith(o, o + 1, n);
                  })(e.doc, e.mapping.slice(s).map(n), o)
                ) {
                  e.clearIncompatible(e.mapping.slice(s).map(n, 1), o);
                  let a = e.mapping.slice(s),
                    l = a.map(n, 1),
                    c = a.map(n + t.nodeSize, 1);
                  return e.step(new v(l, c, l + 1, c - 1, new r.p2(r.HY.from(o.create(i, null, t.marks)), 0, 0), 1, !0)), !1;
                }
              });
            })(this, e, t, n, o),
            this
          );
        }
        setNodeMarkup(e, t, n = null, o) {
          return (
            (function (e, t, n, o, i) {
              let s = e.doc.nodeAt(t);
              if (!s) throw new RangeError("No node at given position");
              n || (n = s.type);
              let a = n.create(o, null, i || s.marks);
              if (s.isLeaf) return e.replaceWith(t, t + s.nodeSize, a);
              if (!n.validContent(s.content)) throw new RangeError("Invalid content for node type " + n.name);
              e.step(new v(t, t + s.nodeSize, t + 1, t + s.nodeSize - 1, new r.p2(r.HY.from(a), 0, 0), 1, !0));
            })(this, e, t, n, o),
            this
          );
        }
        setNodeAttribute(e, t, n) {
          return this.step(new V(e, t, n)), this;
        }
        setDocAttribute(e, t) {
          return this.step(new F(e, t)), this;
        }
        addNodeMark(e, t) {
          return this.step(new m(e, t)), this;
        }
        removeNodeMark(e, t) {
          if (!(t instanceof r.vc)) {
            let n = this.doc.nodeAt(e);
            if (!n) throw new RangeError("No node at position " + e);
            if (!(t = t.isInSet(n.marks))) return this;
          }
          return this.step(new g(e, t)), this;
        }
        split(e, t = 1, n) {
          return (
            (function (e, t, n = 1, o) {
              let i = e.doc.resolve(t),
                s = r.HY.empty,
                a = r.HY.empty;
              for (let e = i.depth, t = i.depth - n, l = n - 1; e > t; e--, l--) {
                s = r.HY.from(i.node(e).copy(s));
                let t = o && o[l];
                a = r.HY.from(t ? t.type.create(t.attrs, a) : i.node(e).copy(a));
              }
              e.step(new y(t, t, new r.p2(s.append(a), n, n), !0));
            })(this, e, t, n),
            this
          );
        }
        addMark(e, t, n) {
          return (
            (function (e, t, n, r) {
              let o,
                i,
                s = [],
                a = [];
              e.doc.nodesBetween(t, n, (e, l, c) => {
                if (!e.isInline) return;
                let d = e.marks;
                if (!r.isInSet(d) && c.type.allowsMarkType(r.type)) {
                  let c = Math.max(l, t),
                    p = Math.min(l + e.nodeSize, n),
                    h = r.addToSet(d);
                  for (let e = 0; e < d.length; e++)
                    d[e].isInSet(h) || (o && o.to == c && o.mark.eq(d[e]) ? (o.to = p) : s.push((o = new f(c, p, d[e]))));
                  i && i.to == c ? (i.to = p) : a.push((i = new u(c, p, r)));
                }
              }),
                s.forEach((t) => e.step(t)),
                a.forEach((t) => e.step(t));
            })(this, e, t, n),
            this
          );
        }
        removeMark(e, t, n) {
          return (
            (function (e, t, n, o) {
              let i = [],
                s = 0;
              e.doc.nodesBetween(t, n, (e, a) => {
                if (!e.isInline) return;
                s++;
                let l = null;
                if (o instanceof r.ZU) {
                  let t,
                    n = e.marks;
                  for (; (t = o.isInSet(n)); ) (l || (l = [])).push(t), (n = t.removeFromSet(n));
                } else o ? o.isInSet(e.marks) && (l = [o]) : (l = e.marks);
                if (l && l.length) {
                  let r = Math.min(a + e.nodeSize, n);
                  for (let e = 0; e < l.length; e++) {
                    let n,
                      o = l[e];
                    for (let e = 0; e < i.length; e++) {
                      let t = i[e];
                      t.step == s - 1 && o.eq(i[e].style) && (n = t);
                    }
                    n ? ((n.to = r), (n.step = s)) : i.push({ style: o, from: Math.max(a, t), to: r, step: s });
                  }
                }
              }),
                i.forEach((t) => e.step(new f(t.from, t.to, t.style)));
            })(this, e, t, n),
            this
          );
        }
        clearIncompatible(e, t, n) {
          return (
            (function (e, t, n, o = n.contentMatch) {
              let i = e.doc.nodeAt(t),
                s = [],
                a = t + 1;
              for (let t = 0; t < i.childCount; t++) {
                let l = i.child(t),
                  c = a + l.nodeSize,
                  d = o.matchType(l.type);
                if (d) {
                  o = d;
                  for (let t = 0; t < l.marks.length; t++) n.allowsMarkType(l.marks[t].type) || e.step(new f(a, c, l.marks[t]));
                  if (l.isText && !n.spec.code) {
                    let e,
                      t,
                      o = /\r?\n|\r/g;
                    for (; (e = o.exec(l.text)); )
                      t || (t = new r.p2(r.HY.from(n.schema.text(" ", n.allowedMarks(l.marks))), 0, 0)),
                        s.push(new y(a + e.index, a + e.index + e[0].length, t));
                  }
                } else s.push(new y(a, c, r.p2.empty));
                a = c;
              }
              if (!o.validEnd) {
                let t = o.fillBefore(r.HY.empty, !0);
                e.replace(a, a, new r.p2(t, 0, 0));
              }
              for (let t = s.length - 1; t >= 0; t--) e.step(s[t]);
            })(this, e, t, n),
            this
          );
        }
      }
    },
    84348: (e, t, n) => {
      n.d(t, { EH: () => Vt, p: () => $t, tk: () => ln });
      var r = n(2376),
        o = n(87823),
        i = n(16560);
      const s = function (e) {
          for (var t = 0; ; t++) if (!(e = e.previousSibling)) return t;
        },
        a = function (e) {
          let t = e.assignedSlot || e.parentNode;
          return t && 11 == t.nodeType ? t.host : t;
        };
      let l = null;
      const c = function (e, t, n) {
          let r = l || (l = document.createRange());
          return r.setEnd(e, null == n ? e.nodeValue.length : n), r.setStart(e, t || 0), r;
        },
        d = function (e, t, n, r) {
          return n && (h(e, t, n, r, -1) || h(e, t, n, r, 1));
        },
        p = /^(img|br|input|textarea|hr)$/i;
      function h(e, t, n, r, o) {
        for (;;) {
          if (e == n && t == r) return !0;
          if (t == (o < 0 ? 0 : u(e))) {
            let n = e.parentNode;
            if (!n || 1 != n.nodeType || f(e) || p.test(e.nodeName) || "false" == e.contentEditable) return !1;
            (t = s(e) + (o < 0 ? 0 : 1)), (e = n);
          } else {
            if (1 != e.nodeType) return !1;
            if ("false" == (e = e.childNodes[t + (o < 0 ? -1 : 0)]).contentEditable) return !1;
            t = o < 0 ? u(e) : 0;
          }
        }
      }
      function u(e) {
        return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length;
      }
      function f(e) {
        let t;
        for (let n = e; n && !(t = n.pmViewDesc); n = n.parentNode);
        return t && t.node && t.node.isBlock && (t.dom == e || t.contentDOM == e);
      }
      const m = function (e) {
        return e.focusNode && d(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset);
      };
      function g(e, t) {
        let n = document.createEvent("Event");
        return n.initEvent("keydown", !0, !0), (n.keyCode = e), (n.key = n.code = t), n;
      }
      const y = "undefined" != typeof navigator ? navigator : null,
        v = "undefined" != typeof document ? document : null,
        w = (y && y.userAgent) || "",
        b = /Edge\/(\d+)/.exec(w),
        x = /MSIE \d/.exec(w),
        k = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(w),
        S = !!(x || k || b),
        O = x ? document.documentMode : k ? +k[1] : b ? +b[1] : 0,
        M = !S && /gecko\/(\d+)/i.test(w);
      M && (/Firefox\/(\d+)/.exec(w) || [0, 0])[1];
      const C = !S && /Chrome\/(\d+)/.exec(w),
        N = !!C,
        T = C ? +C[1] : 0,
        E = !S && !!y && /Apple Computer/.test(y.vendor),
        D = E && (/Mobile\/\w+/.test(w) || (!!y && y.maxTouchPoints > 2)),
        A = D || (!!y && /Mac/.test(y.platform)),
        P = !!y && /Win/.test(y.platform),
        R = /Android \d/.test(w),
        I = !!v && "webkitFontSmoothing" in v.documentElement.style,
        B = I ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
      function $(e) {
        return { left: 0, right: e.documentElement.clientWidth, top: 0, bottom: e.documentElement.clientHeight };
      }
      function z(e, t) {
        return "number" == typeof e ? e : e[t];
      }
      function j(e) {
        let t = e.getBoundingClientRect(),
          n = t.width / e.offsetWidth || 1,
          r = t.height / e.offsetHeight || 1;
        return { left: t.left, right: t.left + e.clientWidth * n, top: t.top, bottom: t.top + e.clientHeight * r };
      }
      function V(e, t, n) {
        let r = e.someProp("scrollThreshold") || 0,
          o = e.someProp("scrollMargin") || 5,
          i = e.dom.ownerDocument;
        for (let s = n || e.dom; s; s = a(s)) {
          if (1 != s.nodeType) continue;
          let e = s,
            n = e == i.body,
            a = n ? $(i) : j(e),
            l = 0,
            c = 0;
          if (
            (t.top < a.top + z(r, "top")
              ? (c = -(a.top - t.top + z(o, "top")))
              : t.bottom > a.bottom - z(r, "bottom") &&
                (c = t.bottom - t.top > a.bottom - a.top ? t.top + z(o, "top") - a.top : t.bottom - a.bottom + z(o, "bottom")),
            t.left < a.left + z(r, "left")
              ? (l = -(a.left - t.left + z(o, "left")))
              : t.right > a.right - z(r, "right") && (l = t.right - a.right + z(o, "right")),
            l || c)
          )
            if (n) i.defaultView.scrollBy(l, c);
            else {
              let n = e.scrollLeft,
                r = e.scrollTop;
              c && (e.scrollTop += c), l && (e.scrollLeft += l);
              let o = e.scrollLeft - n,
                i = e.scrollTop - r;
              t = { left: t.left - o, top: t.top - i, right: t.right - o, bottom: t.bottom - i };
            }
          if (n || /^(fixed|sticky)$/.test(getComputedStyle(s).position)) break;
        }
      }
      function F(e) {
        let t = [],
          n = e.ownerDocument;
        for (let r = e; r && (t.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), e != n); r = a(r));
        return t;
      }
      function L(e, t) {
        for (let n = 0; n < e.length; n++) {
          let { dom: r, top: o, left: i } = e[n];
          r.scrollTop != o + t && (r.scrollTop = o + t), r.scrollLeft != i && (r.scrollLeft = i);
        }
      }
      let H = null;
      function q(e, t) {
        let n,
          r,
          o,
          i,
          s = 2e8,
          a = 0,
          l = t.top,
          d = t.top;
        for (let p = e.firstChild, h = 0; p; p = p.nextSibling, h++) {
          let e;
          if (1 == p.nodeType) e = p.getClientRects();
          else {
            if (3 != p.nodeType) continue;
            e = c(p).getClientRects();
          }
          for (let c = 0; c < e.length; c++) {
            let u = e[c];
            if (u.top <= l && u.bottom >= d) {
              (l = Math.max(u.bottom, l)), (d = Math.min(u.top, d));
              let e = u.left > t.left ? u.left - t.left : u.right < t.left ? t.left - u.right : 0;
              if (e < s) {
                (n = p),
                  (s = e),
                  (r = e && 3 == n.nodeType ? { left: u.right < t.left ? u.right : u.left, top: t.top } : t),
                  1 == p.nodeType && e && (a = h + (t.left >= (u.left + u.right) / 2 ? 1 : 0));
                continue;
              }
            } else
              u.top > t.top &&
                !o &&
                u.left <= t.left &&
                u.right >= t.left &&
                ((o = p), (i = { left: Math.max(u.left, Math.min(u.right, t.left)), top: u.top }));
            !n && ((t.left >= u.right && t.top >= u.top) || (t.left >= u.left && t.top >= u.bottom)) && (a = h + 1);
          }
        }
        return (
          !n && o && ((n = o), (r = i), (s = 0)),
          n && 3 == n.nodeType
            ? (function (e, t) {
                let n = e.nodeValue.length,
                  r = document.createRange();
                for (let o = 0; o < n; o++) {
                  r.setEnd(e, o + 1), r.setStart(e, o);
                  let n = Y(r, 1);
                  if (n.top != n.bottom && W(t, n)) return { node: e, offset: o + (t.left >= (n.left + n.right) / 2 ? 1 : 0) };
                }
                return { node: e, offset: 0 };
              })(n, r)
            : !n || (s && 1 == n.nodeType)
            ? { node: e, offset: a }
            : q(n, r)
        );
      }
      function W(e, t) {
        return e.left >= t.left - 1 && e.left <= t.right + 1 && e.top >= t.top - 1 && e.top <= t.bottom + 1;
      }
      function J(e, t, n) {
        let r = e.childNodes.length;
        if (r && n.top < n.bottom)
          for (let o = Math.max(0, Math.min(r - 1, Math.floor((r * (t.top - n.top)) / (n.bottom - n.top)) - 2)), i = o; ; ) {
            let n = e.childNodes[i];
            if (1 == n.nodeType) {
              let e = n.getClientRects();
              for (let r = 0; r < e.length; r++) {
                let o = e[r];
                if (W(t, o)) return J(n, t, o);
              }
            }
            if ((i = (i + 1) % r) == o) break;
          }
        return e;
      }
      function _(e, t) {
        let n,
          r = e.dom.ownerDocument,
          o = 0,
          i = (function (e, t, n) {
            if (e.caretPositionFromPoint)
              try {
                let r = e.caretPositionFromPoint(t, n);
                if (r) return { node: r.offsetNode, offset: r.offset };
              } catch (e) {}
            if (e.caretRangeFromPoint) {
              let r = e.caretRangeFromPoint(t, n);
              if (r) return { node: r.startContainer, offset: r.startOffset };
            }
          })(r, t.left, t.top);
        i && ({ node: n, offset: o } = i);
        let s,
          l = (e.root.elementFromPoint ? e.root : r).elementFromPoint(t.left, t.top);
        if (!l || !e.dom.contains(1 != l.nodeType ? l.parentNode : l)) {
          let n = e.dom.getBoundingClientRect();
          if (!W(t, n)) return null;
          if (((l = J(e.dom, t, n)), !l)) return null;
        }
        if (E) for (let e = l; n && e; e = a(e)) e.draggable && (n = void 0);
        if (
          ((l = (function (e, t) {
            let n = e.parentNode;
            return n && /^li$/i.test(n.nodeName) && t.left < e.getBoundingClientRect().left ? n : e;
          })(l, t)),
          n)
        ) {
          if (M && 1 == n.nodeType && ((o = Math.min(o, n.childNodes.length)), o < n.childNodes.length)) {
            let e,
              r = n.childNodes[o];
            "IMG" == r.nodeName && (e = r.getBoundingClientRect()).right <= t.left && e.bottom > t.top && o++;
          }
          let r;
          I &&
            o &&
            1 == n.nodeType &&
            1 == (r = n.childNodes[o - 1]).nodeType &&
            "false" == r.contentEditable &&
            r.getBoundingClientRect().top >= t.top &&
            o--,
            n == e.dom && o == n.childNodes.length - 1 && 1 == n.lastChild.nodeType && t.top > n.lastChild.getBoundingClientRect().bottom
              ? (s = e.state.doc.content.size)
              : (0 != o && 1 == n.nodeType && "BR" == n.childNodes[o - 1].nodeName) ||
                (s = (function (e, t, n, r) {
                  let o = -1;
                  for (let n = t, i = !1; n != e.dom; ) {
                    let t = e.docView.nearestDesc(n, !0);
                    if (!t) return null;
                    if (1 == t.dom.nodeType && ((t.node.isBlock && t.parent && !i) || !t.contentDOM)) {
                      let e = t.dom.getBoundingClientRect();
                      if (
                        (t.node.isBlock &&
                          t.parent &&
                          !i &&
                          ((i = !0),
                          e.left > r.left || e.top > r.top
                            ? (o = t.posBefore)
                            : (e.right < r.left || e.bottom < r.top) && (o = t.posAfter)),
                        !t.contentDOM && o < 0 && !t.node.isText)
                      )
                        return (t.node.isBlock ? r.top < (e.top + e.bottom) / 2 : r.left < (e.left + e.right) / 2)
                          ? t.posBefore
                          : t.posAfter;
                    }
                    n = t.dom.parentNode;
                  }
                  return o > -1 ? o : e.docView.posFromDOM(t, n, -1);
                })(e, n, o, t));
        }
        null == s &&
          (s = (function (e, t, n) {
            let { node: r, offset: o } = q(t, n),
              i = -1;
            if (1 == r.nodeType && !r.firstChild) {
              let e = r.getBoundingClientRect();
              i = e.left != e.right && n.left > (e.left + e.right) / 2 ? 1 : -1;
            }
            return e.docView.posFromDOM(r, o, i);
          })(e, l, t));
        let c = e.docView.nearestDesc(l, !0);
        return { pos: s, inside: c ? c.posAtStart - c.border : -1 };
      }
      function K(e) {
        return e.top < e.bottom || e.left < e.right;
      }
      function Y(e, t) {
        let n = e.getClientRects();
        if (n.length) {
          let e = n[t < 0 ? 0 : n.length - 1];
          if (K(e)) return e;
        }
        return Array.prototype.find.call(n, K) || e.getBoundingClientRect();
      }
      const U = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
      function G(e, t, n) {
        let { node: r, offset: o, atom: i } = e.docView.domFromPos(t, n < 0 ? -1 : 1),
          s = I || M;
        if (3 == r.nodeType) {
          if (!s || (!U.test(r.nodeValue) && (n < 0 ? o : o != r.nodeValue.length))) {
            let e = o,
              t = o,
              i = n < 0 ? 1 : -1;
            return (
              n < 0 && !o ? (t++, (i = -1)) : n >= 0 && o == r.nodeValue.length ? (e--, (i = 1)) : n < 0 ? e-- : t++,
              X(Y(c(r, e, t), i), i < 0)
            );
          }
          {
            let e = Y(c(r, o, o), n);
            if (M && o && /\s/.test(r.nodeValue[o - 1]) && o < r.nodeValue.length) {
              let t = Y(c(r, o - 1, o - 1), -1);
              if (t.top == e.top) {
                let n = Y(c(r, o, o + 1), -1);
                if (n.top != e.top) return X(n, n.left < t.left);
              }
            }
            return e;
          }
        }
        if (!e.state.doc.resolve(t - (i || 0)).parent.inlineContent) {
          if (null == i && o && (n < 0 || o == u(r))) {
            let e = r.childNodes[o - 1];
            if (1 == e.nodeType) return Z(e.getBoundingClientRect(), !1);
          }
          if (null == i && o < u(r)) {
            let e = r.childNodes[o];
            if (1 == e.nodeType) return Z(e.getBoundingClientRect(), !0);
          }
          return Z(r.getBoundingClientRect(), n >= 0);
        }
        if (null == i && o && (n < 0 || o == u(r))) {
          let e = r.childNodes[o - 1],
            t = 3 == e.nodeType ? c(e, u(e) - (s ? 0 : 1)) : 1 != e.nodeType || ("BR" == e.nodeName && e.nextSibling) ? null : e;
          if (t) return X(Y(t, 1), !1);
        }
        if (null == i && o < u(r)) {
          let e = r.childNodes[o];
          for (; e.pmViewDesc && e.pmViewDesc.ignoreForCoords; ) e = e.nextSibling;
          let t = e ? (3 == e.nodeType ? c(e, 0, s ? 0 : 1) : 1 == e.nodeType ? e : null) : null;
          if (t) return X(Y(t, -1), !0);
        }
        return X(Y(3 == r.nodeType ? c(r) : r, -n), n >= 0);
      }
      function X(e, t) {
        if (0 == e.width) return e;
        let n = t ? e.left : e.right;
        return { top: e.top, bottom: e.bottom, left: n, right: n };
      }
      function Z(e, t) {
        if (0 == e.height) return e;
        let n = t ? e.top : e.bottom;
        return { top: n, bottom: n, left: e.left, right: e.right };
      }
      function Q(e, t, n) {
        let r = e.state,
          o = e.root.activeElement;
        r != t && e.updateState(t), o != e.dom && e.focus();
        try {
          return n();
        } finally {
          r != t && e.updateState(r), o != e.dom && o && o.focus();
        }
      }
      const ee = /[\u0590-\u08ac]/;
      let te = null,
        ne = null,
        re = !1;
      class oe {
        constructor(e, t, n, r) {
          (this.parent = e), (this.children = t), (this.dom = n), (this.contentDOM = r), (this.dirty = 0), (n.pmViewDesc = this);
        }
        matchesWidget(e) {
          return !1;
        }
        matchesMark(e) {
          return !1;
        }
        matchesNode(e, t, n) {
          return !1;
        }
        matchesHack(e) {
          return !1;
        }
        parseRule() {
          return null;
        }
        stopEvent(e) {
          return !1;
        }
        get size() {
          let e = 0;
          for (let t = 0; t < this.children.length; t++) e += this.children[t].size;
          return e;
        }
        get border() {
          return 0;
        }
        destroy() {
          (this.parent = void 0), this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
          for (let e = 0; e < this.children.length; e++) this.children[e].destroy();
        }
        posBeforeChild(e) {
          for (let t = 0, n = this.posAtStart; ; t++) {
            let r = this.children[t];
            if (r == e) return n;
            n += r.size;
          }
        }
        get posBefore() {
          return this.parent.posBeforeChild(this);
        }
        get posAtStart() {
          return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
        }
        get posAfter() {
          return this.posBefore + this.size;
        }
        get posAtEnd() {
          return this.posAtStart + this.size - 2 * this.border;
        }
        localPosFromDOM(e, t, n) {
          if (this.contentDOM && this.contentDOM.contains(1 == e.nodeType ? e : e.parentNode)) {
            if (n < 0) {
              let n, r;
              if (e == this.contentDOM) n = e.childNodes[t - 1];
              else {
                for (; e.parentNode != this.contentDOM; ) e = e.parentNode;
                n = e.previousSibling;
              }
              for (; n && (!(r = n.pmViewDesc) || r.parent != this); ) n = n.previousSibling;
              return n ? this.posBeforeChild(r) + r.size : this.posAtStart;
            }
            {
              let n, r;
              if (e == this.contentDOM) n = e.childNodes[t];
              else {
                for (; e.parentNode != this.contentDOM; ) e = e.parentNode;
                n = e.nextSibling;
              }
              for (; n && (!(r = n.pmViewDesc) || r.parent != this); ) n = n.nextSibling;
              return n ? this.posBeforeChild(r) : this.posAtEnd;
            }
          }
          let r;
          if (e == this.dom && this.contentDOM) r = t > s(this.contentDOM);
          else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
            r = 2 & e.compareDocumentPosition(this.contentDOM);
          else if (this.dom.firstChild) {
            if (0 == t)
              for (let t = e; ; t = t.parentNode) {
                if (t == this.dom) {
                  r = !1;
                  break;
                }
                if (t.previousSibling) break;
              }
            if (null == r && t == e.childNodes.length)
              for (let t = e; ; t = t.parentNode) {
                if (t == this.dom) {
                  r = !0;
                  break;
                }
                if (t.nextSibling) break;
              }
          }
          return (null == r ? n > 0 : r) ? this.posAtEnd : this.posAtStart;
        }
        nearestDesc(e, t = !1) {
          for (let n = !0, r = e; r; r = r.parentNode) {
            let o,
              i = this.getDesc(r);
            if (i && (!t || i.node)) {
              if (!n || !(o = i.nodeDOM) || (1 == o.nodeType ? o.contains(1 == e.nodeType ? e : e.parentNode) : o == e)) return i;
              n = !1;
            }
          }
        }
        getDesc(e) {
          let t = e.pmViewDesc;
          for (let e = t; e; e = e.parent) if (e == this) return t;
        }
        posFromDOM(e, t, n) {
          for (let r = e; r; r = r.parentNode) {
            let o = this.getDesc(r);
            if (o) return o.localPosFromDOM(e, t, n);
          }
          return -1;
        }
        descAt(e) {
          for (let t = 0, n = 0; t < this.children.length; t++) {
            let r = this.children[t],
              o = n + r.size;
            if (n == e && o != n) {
              for (; !r.border && r.children.length; ) r = r.children[0];
              return r;
            }
            if (e < o) return r.descAt(e - n - r.border);
            n = o;
          }
        }
        domFromPos(e, t) {
          if (!this.contentDOM) return { node: this.dom, offset: 0, atom: e + 1 };
          let n = 0,
            r = 0;
          for (let t = 0; n < this.children.length; n++) {
            let o = this.children[n],
              i = t + o.size;
            if (i > e || o instanceof pe) {
              r = e - t;
              break;
            }
            t = i;
          }
          if (r) return this.children[n].domFromPos(r - this.children[n].border, t);
          for (let e; n && !(e = this.children[n - 1]).size && e instanceof ie && e.side >= 0; n--);
          if (t <= 0) {
            let e,
              r = !0;
            for (; (e = n ? this.children[n - 1] : null), e && e.dom.parentNode != this.contentDOM; n--, r = !1);
            return e && t && r && !e.border && !e.domAtom
              ? e.domFromPos(e.size, t)
              : { node: this.contentDOM, offset: e ? s(e.dom) + 1 : 0 };
          }
          {
            let e,
              r = !0;
            for (; (e = n < this.children.length ? this.children[n] : null), e && e.dom.parentNode != this.contentDOM; n++, r = !1);
            return e && r && !e.border && !e.domAtom
              ? e.domFromPos(0, t)
              : { node: this.contentDOM, offset: e ? s(e.dom) : this.contentDOM.childNodes.length };
          }
        }
        parseRange(e, t, n = 0) {
          if (0 == this.children.length)
            return { node: this.contentDOM, from: e, to: t, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
          let r = -1,
            o = -1;
          for (let i = n, a = 0; ; a++) {
            let n = this.children[a],
              l = i + n.size;
            if (-1 == r && e <= l) {
              let o = i + n.border;
              if (e >= o && t <= l - n.border && n.node && n.contentDOM && this.contentDOM.contains(n.contentDOM))
                return n.parseRange(e, t, o);
              e = i;
              for (let t = a; t > 0; t--) {
                let n = this.children[t - 1];
                if (n.size && n.dom.parentNode == this.contentDOM && !n.emptyChildAt(1)) {
                  r = s(n.dom) + 1;
                  break;
                }
                e -= n.size;
              }
              -1 == r && (r = 0);
            }
            if (r > -1 && (l > t || a == this.children.length - 1)) {
              t = l;
              for (let e = a + 1; e < this.children.length; e++) {
                let n = this.children[e];
                if (n.size && n.dom.parentNode == this.contentDOM && !n.emptyChildAt(-1)) {
                  o = s(n.dom);
                  break;
                }
                t += n.size;
              }
              -1 == o && (o = this.contentDOM.childNodes.length);
              break;
            }
            i = l;
          }
          return { node: this.contentDOM, from: e, to: t, fromOffset: r, toOffset: o };
        }
        emptyChildAt(e) {
          if (this.border || !this.contentDOM || !this.children.length) return !1;
          let t = this.children[e < 0 ? 0 : this.children.length - 1];
          return 0 == t.size || t.emptyChildAt(e);
        }
        domAfterPos(e) {
          let { node: t, offset: n } = this.domFromPos(e, 0);
          if (1 != t.nodeType || n == t.childNodes.length) throw new RangeError("No node after pos " + e);
          return t.childNodes[n];
        }
        setSelection(e, t, n, r = !1) {
          let o = Math.min(e, t),
            i = Math.max(e, t);
          for (let s = 0, a = 0; s < this.children.length; s++) {
            let l = this.children[s],
              c = a + l.size;
            if (o > a && i < c) return l.setSelection(e - a - l.border, t - a - l.border, n, r);
            a = c;
          }
          let a = this.domFromPos(e, e ? -1 : 1),
            l = t == e ? a : this.domFromPos(t, t ? -1 : 1),
            c = n.getSelection(),
            p = !1;
          if ((M || E) && e == t) {
            let { node: e, offset: t } = a;
            if (3 == e.nodeType) {
              if (((p = !(!t || "\n" != e.nodeValue[t - 1])), p && t == e.nodeValue.length))
                for (let t, n = e; n; n = n.parentNode) {
                  if ((t = n.nextSibling)) {
                    "BR" == t.nodeName && (a = l = { node: t.parentNode, offset: s(t) + 1 });
                    break;
                  }
                  let e = n.pmViewDesc;
                  if (e && e.node && e.node.isBlock) break;
                }
            } else {
              let n = e.childNodes[t - 1];
              p = n && ("BR" == n.nodeName || "false" == n.contentEditable);
            }
          }
          if (M && c.focusNode && c.focusNode != l.node && 1 == c.focusNode.nodeType) {
            let e = c.focusNode.childNodes[c.focusOffset];
            e && "false" == e.contentEditable && (r = !0);
          }
          if (!(r || (p && E)) && d(a.node, a.offset, c.anchorNode, c.anchorOffset) && d(l.node, l.offset, c.focusNode, c.focusOffset))
            return;
          let h = !1;
          if ((c.extend || e == t) && !p) {
            c.collapse(a.node, a.offset);
            try {
              e != t && c.extend(l.node, l.offset), (h = !0);
            } catch (e) {}
          }
          if (!h) {
            if (e > t) {
              let e = a;
              (a = l), (l = e);
            }
            let n = document.createRange();
            n.setEnd(l.node, l.offset), n.setStart(a.node, a.offset), c.removeAllRanges(), c.addRange(n);
          }
        }
        ignoreMutation(e) {
          return !this.contentDOM && "selection" != e.type;
        }
        get contentLost() {
          return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
        }
        markDirty(e, t) {
          for (let n = 0, r = 0; r < this.children.length; r++) {
            let o = this.children[r],
              i = n + o.size;
            if (n == i ? e <= i && t >= n : e < i && t > n) {
              let r = n + o.border,
                s = i - o.border;
              if (e >= r && t <= s)
                return (
                  (this.dirty = e == n || t == i ? 2 : 1),
                  void (e != r || t != s || (!o.contentLost && o.dom.parentNode == this.contentDOM)
                    ? o.markDirty(e - r, t - r)
                    : (o.dirty = 3))
                );
              o.dirty = o.dom != o.contentDOM || o.dom.parentNode != this.contentDOM || o.children.length ? 3 : 2;
            }
            n = i;
          }
          this.dirty = 2;
        }
        markParentsDirty() {
          let e = 1;
          for (let t = this.parent; t; t = t.parent, e++) {
            let n = 1 == e ? 2 : 1;
            t.dirty < n && (t.dirty = n);
          }
        }
        get domAtom() {
          return !1;
        }
        get ignoreForCoords() {
          return !1;
        }
      }
      class ie extends oe {
        constructor(e, t, n, r) {
          let o,
            i = t.type.toDOM;
          if (("function" == typeof i && (i = i(n, () => (o ? (o.parent ? o.parent.posBeforeChild(o) : void 0) : r))), !t.type.spec.raw)) {
            if (1 != i.nodeType) {
              let e = document.createElement("span");
              e.appendChild(i), (i = e);
            }
            (i.contentEditable = "false"), i.classList.add("ProseMirror-widget");
          }
          super(e, [], i, null), (this.widget = t), (this.widget = t), (o = this);
        }
        matchesWidget(e) {
          return 0 == this.dirty && e.type.eq(this.widget.type);
        }
        parseRule() {
          return { ignore: !0 };
        }
        stopEvent(e) {
          let t = this.widget.spec.stopEvent;
          return !!t && t(e);
        }
        ignoreMutation(e) {
          return "selection" != e.type || this.widget.spec.ignoreSelection;
        }
        destroy() {
          this.widget.type.destroy(this.dom), super.destroy();
        }
        get domAtom() {
          return !0;
        }
        get side() {
          return this.widget.type.side;
        }
      }
      class se extends oe {
        constructor(e, t, n, r) {
          super(e, [], t, null), (this.textDOM = n), (this.text = r);
        }
        get size() {
          return this.text.length;
        }
        localPosFromDOM(e, t) {
          return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t;
        }
        domFromPos(e) {
          return { node: this.textDOM, offset: e };
        }
        ignoreMutation(e) {
          return "characterData" === e.type && e.target.nodeValue == e.oldValue;
        }
      }
      class ae extends oe {
        constructor(e, t, n, r) {
          super(e, [], n, r), (this.mark = t);
        }
        static create(e, t, n, r) {
          let i = r.nodeViews[t.type.name],
            s = i && i(t, r, n);
          return (s && s.dom) || (s = o.PW.renderSpec(document, t.type.spec.toDOM(t, n))), new ae(e, t, s.dom, s.contentDOM || s.dom);
        }
        parseRule() {
          return 3 & this.dirty || this.mark.type.spec.reparseInView
            ? null
            : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
        }
        matchesMark(e) {
          return 3 != this.dirty && this.mark.eq(e);
        }
        markDirty(e, t) {
          if ((super.markDirty(e, t), 0 != this.dirty)) {
            let e = this.parent;
            for (; !e.node; ) e = e.parent;
            e.dirty < this.dirty && (e.dirty = this.dirty), (this.dirty = 0);
          }
        }
        slice(e, t, n) {
          let r = ae.create(this.parent, this.mark, !0, n),
            o = this.children,
            i = this.size;
          t < i && (o = Oe(o, t, i, n)), e > 0 && (o = Oe(o, 0, e, n));
          for (let e = 0; e < o.length; e++) o[e].parent = r;
          return (r.children = o), r;
        }
      }
      class le extends oe {
        constructor(e, t, n, r, o, i, s, a, l) {
          super(e, [], o, i), (this.node = t), (this.outerDeco = n), (this.innerDeco = r), (this.nodeDOM = s);
        }
        static create(e, t, n, r, i, s) {
          let a,
            l = i.nodeViews[t.type.name],
            c = l && l(t, i, () => (a ? (a.parent ? a.parent.posBeforeChild(a) : void 0) : s), n, r),
            d = c && c.dom,
            p = c && c.contentDOM;
          if (t.isText)
            if (d) {
              if (3 != d.nodeType) throw new RangeError("Text must be rendered as a DOM text node");
            } else d = document.createTextNode(t.text);
          else d || ({ dom: d, contentDOM: p } = o.PW.renderSpec(document, t.type.spec.toDOM(t)));
          p ||
            t.isText ||
            "BR" == d.nodeName ||
            (d.hasAttribute("contenteditable") || (d.contentEditable = "false"), t.type.spec.draggable && (d.draggable = !0));
          let h = d;
          return (
            (d = we(d, n, t)),
            c
              ? (a = new he(e, t, n, r, d, p || null, h, c, i, s + 1))
              : t.isText
              ? new de(e, t, n, r, d, h, i)
              : new le(e, t, n, r, d, p || null, h, i, s + 1)
          );
        }
        parseRule() {
          if (this.node.type.spec.reparseInView) return null;
          let e = { node: this.node.type.name, attrs: this.node.attrs };
          if (("pre" == this.node.type.whitespace && (e.preserveWhitespace = "full"), this.contentDOM))
            if (this.contentLost) {
              for (let t = this.children.length - 1; t >= 0; t--) {
                let n = this.children[t];
                if (this.dom.contains(n.dom.parentNode)) {
                  e.contentElement = n.dom.parentNode;
                  break;
                }
              }
              e.contentElement || (e.getContent = () => o.HY.empty);
            } else e.contentElement = this.contentDOM;
          else e.getContent = () => this.node.content;
          return e;
        }
        matchesNode(e, t, n) {
          return 0 == this.dirty && e.eq(this.node) && be(t, this.outerDeco) && n.eq(this.innerDeco);
        }
        get size() {
          return this.node.nodeSize;
        }
        get border() {
          return this.node.isLeaf ? 0 : 1;
        }
        updateChildren(e, t) {
          let n = this.node.inlineContent,
            r = t,
            i = e.composing ? this.localCompositionInfo(e, t) : null,
            s = i && i.pos > -1 ? i : null,
            a = i && i.pos < 0,
            l = new ke(this, s && s.node, e);
          !(function (e, t, n, r) {
            let o = t.locals(e),
              i = 0;
            if (0 == o.length) {
              for (let n = 0; n < e.childCount; n++) {
                let s = e.child(n);
                r(s, o, t.forChild(i, s), n), (i += s.nodeSize);
              }
              return;
            }
            let s = 0,
              a = [],
              l = null;
            for (let c = 0; ; ) {
              let d, p, h, u;
              for (; s < o.length && o[s].to == i; ) {
                let e = o[s++];
                e.widget && (d ? (p || (p = [d])).push(e) : (d = e));
              }
              if (d)
                if (p) {
                  p.sort(Se);
                  for (let e = 0; e < p.length; e++) n(p[e], c, !!l);
                } else n(d, c, !!l);
              if (l) (u = -1), (h = l), (l = null);
              else {
                if (!(c < e.childCount)) break;
                (u = c), (h = e.child(c++));
              }
              for (let e = 0; e < a.length; e++) a[e].to <= i && a.splice(e--, 1);
              for (; s < o.length && o[s].from <= i && o[s].to > i; ) a.push(o[s++]);
              let f = i + h.nodeSize;
              if (h.isText) {
                let e = f;
                s < o.length && o[s].from < e && (e = o[s].from);
                for (let t = 0; t < a.length; t++) a[t].to < e && (e = a[t].to);
                e < f && ((l = h.cut(e - i)), (h = h.cut(0, e - i)), (f = e), (u = -1));
              }
              r(h, h.isInline && !h.isLeaf ? a.filter((e) => !e.inline) : a.slice(), t.forChild(i, h), u), (i = f);
            }
          })(
            this.node,
            this.innerDeco,
            (t, i, s) => {
              t.spec.marks
                ? l.syncToMarks(t.spec.marks, n, e)
                : t.type.side >= 0 && !s && l.syncToMarks(i == this.node.childCount ? o.vc.none : this.node.child(i).marks, n, e),
                l.placeWidget(t, e, r);
            },
            (t, o, s, c) => {
              let d;
              l.syncToMarks(t.marks, n, e),
                l.findNodeMatch(t, o, s, c) ||
                  (a &&
                    e.state.selection.from > r &&
                    e.state.selection.to < r + t.nodeSize &&
                    (d = l.findIndexWithChild(i.node)) > -1 &&
                    l.updateNodeAt(t, o, s, d, e)) ||
                  l.updateNextNode(t, o, s, e, c, r) ||
                  l.addNode(t, o, s, e, r),
                (r += t.nodeSize);
            }
          ),
            l.syncToMarks([], n, e),
            this.node.isTextblock && l.addTextblockHacks(),
            l.destroyRest(),
            (l.changed || 2 == this.dirty) &&
              (s && this.protectLocalComposition(e, s),
              ue(this.contentDOM, this.children, e),
              D &&
                (function (e) {
                  if ("UL" == e.nodeName || "OL" == e.nodeName) {
                    let t = e.style.cssText;
                    (e.style.cssText = t + "; list-style: square !important"), window.getComputedStyle(e).listStyle, (e.style.cssText = t);
                  }
                })(this.dom));
        }
        localCompositionInfo(e, t) {
          let { from: n, to: o } = e.state.selection;
          if (!(e.state.selection instanceof r.Bs) || n < t || o > t + this.node.content.size) return null;
          let i = e.domSelectionRange(),
            s = (function (e, t) {
              for (;;) {
                if (3 == e.nodeType) return e;
                if (1 == e.nodeType && t > 0) {
                  if (e.childNodes.length > t && 3 == e.childNodes[t].nodeType) return e.childNodes[t];
                  t = u((e = e.childNodes[t - 1]));
                } else {
                  if (!(1 == e.nodeType && t < e.childNodes.length)) return null;
                  (e = e.childNodes[t]), (t = 0);
                }
              }
            })(i.focusNode, i.focusOffset);
          if (!s || !this.dom.contains(s.parentNode)) return null;
          if (this.node.inlineContent) {
            let e = s.nodeValue,
              r = (function (e, t, n, r) {
                for (let o = 0, i = 0; o < e.childCount && i <= r; ) {
                  let s = e.child(o++),
                    a = i;
                  if (((i += s.nodeSize), !s.isText)) continue;
                  let l = s.text;
                  for (; o < e.childCount; ) {
                    let t = e.child(o++);
                    if (((i += t.nodeSize), !t.isText)) break;
                    l += t.text;
                  }
                  if (i >= n) {
                    if (i >= r && l.slice(r - t.length - a, r - a) == t) return r - t.length;
                    let e = a < r ? l.lastIndexOf(t, r - a - 1) : -1;
                    if (e >= 0 && e + t.length + a >= n) return a + e;
                    if (n == r && l.length >= r + t.length - a && l.slice(r - a, r - a + t.length) == t) return r;
                  }
                }
                return -1;
              })(this.node.content, e, n - t, o - t);
            return r < 0 ? null : { node: s, pos: r, text: e };
          }
          return { node: s, pos: -1, text: "" };
        }
        protectLocalComposition(e, { node: t, pos: n, text: r }) {
          if (this.getDesc(t)) return;
          let o = t;
          for (; o.parentNode != this.contentDOM; o = o.parentNode) {
            for (; o.previousSibling; ) o.parentNode.removeChild(o.previousSibling);
            for (; o.nextSibling; ) o.parentNode.removeChild(o.nextSibling);
            o.pmViewDesc && (o.pmViewDesc = void 0);
          }
          let i = new se(this, o, t, r);
          e.input.compositionNodes.push(i), (this.children = Oe(this.children, n, n + r.length, e, i));
        }
        update(e, t, n, r) {
          return !(3 == this.dirty || !e.sameMarkup(this.node) || (this.updateInner(e, t, n, r), 0));
        }
        updateInner(e, t, n, r) {
          this.updateOuterDeco(t),
            (this.node = e),
            (this.innerDeco = n),
            this.contentDOM && this.updateChildren(r, this.posAtStart),
            (this.dirty = 0);
        }
        updateOuterDeco(e) {
          if (be(e, this.outerDeco)) return;
          let t = 1 != this.nodeDOM.nodeType,
            n = this.dom;
          (this.dom = ye(this.dom, this.nodeDOM, ge(this.outerDeco, this.node, t), ge(e, this.node, t))),
            this.dom != n && ((n.pmViewDesc = void 0), (this.dom.pmViewDesc = this)),
            (this.outerDeco = e);
        }
        selectNode() {
          1 == this.nodeDOM.nodeType && this.nodeDOM.classList.add("ProseMirror-selectednode"),
            (!this.contentDOM && this.node.type.spec.draggable) || (this.dom.draggable = !0);
        }
        deselectNode() {
          1 == this.nodeDOM.nodeType && this.nodeDOM.classList.remove("ProseMirror-selectednode"),
            (!this.contentDOM && this.node.type.spec.draggable) || this.dom.removeAttribute("draggable");
        }
        get domAtom() {
          return this.node.isAtom;
        }
      }
      function ce(e, t, n, r, o) {
        we(r, t, e);
        let i = new le(void 0, e, t, n, r, r, r, o, 0);
        return i.contentDOM && i.updateChildren(o, 0), i;
      }
      class de extends le {
        constructor(e, t, n, r, o, i, s) {
          super(e, t, n, r, o, null, i, s, 0);
        }
        parseRule() {
          let e = this.nodeDOM.parentNode;
          for (; e && e != this.dom && !e.pmIsDeco; ) e = e.parentNode;
          return { skip: e || !0 };
        }
        update(e, t, n, r) {
          return !(
            3 == this.dirty ||
            (0 != this.dirty && !this.inParent()) ||
            !e.sameMarkup(this.node) ||
            (this.updateOuterDeco(t),
            (0 == this.dirty && e.text == this.node.text) ||
              e.text == this.nodeDOM.nodeValue ||
              ((this.nodeDOM.nodeValue = e.text), r.trackWrites == this.nodeDOM && (r.trackWrites = null)),
            (this.node = e),
            (this.dirty = 0),
            0)
          );
        }
        inParent() {
          let e = this.parent.contentDOM;
          for (let t = this.nodeDOM; t; t = t.parentNode) if (t == e) return !0;
          return !1;
        }
        domFromPos(e) {
          return { node: this.nodeDOM, offset: e };
        }
        localPosFromDOM(e, t, n) {
          return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, n);
        }
        ignoreMutation(e) {
          return "characterData" != e.type && "selection" != e.type;
        }
        slice(e, t, n) {
          let r = this.node.cut(e, t),
            o = document.createTextNode(r.text);
          return new de(this.parent, r, this.outerDeco, this.innerDeco, o, o, n);
        }
        markDirty(e, t) {
          super.markDirty(e, t), this.dom == this.nodeDOM || (0 != e && t != this.nodeDOM.nodeValue.length) || (this.dirty = 3);
        }
        get domAtom() {
          return !1;
        }
      }
      class pe extends oe {
        parseRule() {
          return { ignore: !0 };
        }
        matchesHack(e) {
          return 0 == this.dirty && this.dom.nodeName == e;
        }
        get domAtom() {
          return !0;
        }
        get ignoreForCoords() {
          return "IMG" == this.dom.nodeName;
        }
      }
      class he extends le {
        constructor(e, t, n, r, o, i, s, a, l, c) {
          super(e, t, n, r, o, i, s, l, c), (this.spec = a);
        }
        update(e, t, n, r) {
          if (3 == this.dirty) return !1;
          if (this.spec.update) {
            let o = this.spec.update(e, t, n);
            return o && this.updateInner(e, t, n, r), o;
          }
          return !(!this.contentDOM && !e.isLeaf) && super.update(e, t, n, r);
        }
        selectNode() {
          this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
        }
        deselectNode() {
          this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
        }
        setSelection(e, t, n, r) {
          this.spec.setSelection ? this.spec.setSelection(e, t, n) : super.setSelection(e, t, n, r);
        }
        destroy() {
          this.spec.destroy && this.spec.destroy(), super.destroy();
        }
        stopEvent(e) {
          return !!this.spec.stopEvent && this.spec.stopEvent(e);
        }
        ignoreMutation(e) {
          return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
        }
      }
      function ue(e, t, n) {
        let r = e.firstChild,
          o = !1;
        for (let i = 0; i < t.length; i++) {
          let s = t[i],
            a = s.dom;
          if (a.parentNode == e) {
            for (; a != r; ) (r = xe(r)), (o = !0);
            r = r.nextSibling;
          } else (o = !0), e.insertBefore(a, r);
          if (s instanceof ae) {
            let t = r ? r.previousSibling : e.lastChild;
            ue(s.contentDOM, s.children, n), (r = t ? t.nextSibling : e.firstChild);
          }
        }
        for (; r; ) (r = xe(r)), (o = !0);
        o && n.trackWrites == e && (n.trackWrites = null);
      }
      const fe = function (e) {
        e && (this.nodeName = e);
      };
      fe.prototype = Object.create(null);
      const me = [new fe()];
      function ge(e, t, n) {
        if (0 == e.length) return me;
        let r = n ? me[0] : new fe(),
          o = [r];
        for (let i = 0; i < e.length; i++) {
          let s = e[i].type.attrs;
          if (s) {
            s.nodeName && o.push((r = new fe(s.nodeName)));
            for (let e in s) {
              let i = s[e];
              null != i &&
                (n && 1 == o.length && o.push((r = new fe(t.isInline ? "span" : "div"))),
                "class" == e
                  ? (r.class = (r.class ? r.class + " " : "") + i)
                  : "style" == e
                  ? (r.style = (r.style ? r.style + ";" : "") + i)
                  : "nodeName" != e && (r[e] = i));
            }
          }
        }
        return o;
      }
      function ye(e, t, n, r) {
        if (n == me && r == me) return t;
        let o = t;
        for (let t = 0; t < r.length; t++) {
          let i = r[t],
            s = n[t];
          if (t) {
            let t;
            (s && s.nodeName == i.nodeName && o != e && (t = o.parentNode) && t.nodeName.toLowerCase() == i.nodeName) ||
              ((t = document.createElement(i.nodeName)), (t.pmIsDeco = !0), t.appendChild(o), (s = me[0])),
              (o = t);
          }
          ve(o, s || me[0], i);
        }
        return o;
      }
      function ve(e, t, n) {
        for (let r in t) "class" == r || "style" == r || "nodeName" == r || r in n || e.removeAttribute(r);
        for (let r in n) "class" != r && "style" != r && "nodeName" != r && n[r] != t[r] && e.setAttribute(r, n[r]);
        if (t.class != n.class) {
          let r = t.class ? t.class.split(" ").filter(Boolean) : [],
            o = n.class ? n.class.split(" ").filter(Boolean) : [];
          for (let t = 0; t < r.length; t++) -1 == o.indexOf(r[t]) && e.classList.remove(r[t]);
          for (let t = 0; t < o.length; t++) -1 == r.indexOf(o[t]) && e.classList.add(o[t]);
          0 == e.classList.length && e.removeAttribute("class");
        }
        if (t.style != n.style) {
          if (t.style) {
            let n,
              r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g;
            for (; (n = r.exec(t.style)); ) e.style.removeProperty(n[1]);
          }
          n.style && (e.style.cssText += n.style);
        }
      }
      function we(e, t, n) {
        return ye(e, e, me, ge(t, n, 1 != e.nodeType));
      }
      function be(e, t) {
        if (e.length != t.length) return !1;
        for (let n = 0; n < e.length; n++) if (!e[n].type.eq(t[n].type)) return !1;
        return !0;
      }
      function xe(e) {
        let t = e.nextSibling;
        return e.parentNode.removeChild(e), t;
      }
      class ke {
        constructor(e, t, n) {
          (this.lock = t),
            (this.view = n),
            (this.index = 0),
            (this.stack = []),
            (this.changed = !1),
            (this.top = e),
            (this.preMatch = (function (e, t) {
              let n = t,
                r = n.children.length,
                o = e.childCount,
                i = new Map(),
                s = [];
              e: for (; o > 0; ) {
                let a;
                for (;;)
                  if (r) {
                    let e = n.children[r - 1];
                    if (!(e instanceof ae)) {
                      (a = e), r--;
                      break;
                    }
                    (n = e), (r = e.children.length);
                  } else {
                    if (n == t) break e;
                    (r = n.parent.children.indexOf(n)), (n = n.parent);
                  }
                let l = a.node;
                if (l) {
                  if (l != e.child(o - 1)) break;
                  --o, i.set(a, o), s.push(a);
                }
              }
              return { index: o, matched: i, matches: s.reverse() };
            })(e.node.content, e));
        }
        destroyBetween(e, t) {
          if (e != t) {
            for (let n = e; n < t; n++) this.top.children[n].destroy();
            this.top.children.splice(e, t - e), (this.changed = !0);
          }
        }
        destroyRest() {
          this.destroyBetween(this.index, this.top.children.length);
        }
        syncToMarks(e, t, n) {
          let r = 0,
            o = this.stack.length >> 1,
            i = Math.min(o, e.length);
          for (; r < i && (r == o - 1 ? this.top : this.stack[(r + 1) << 1]).matchesMark(e[r]) && !1 !== e[r].type.spec.spanning; ) r++;
          for (; r < o; ) this.destroyRest(), (this.top.dirty = 0), (this.index = this.stack.pop()), (this.top = this.stack.pop()), o--;
          for (; o < e.length; ) {
            this.stack.push(this.top, this.index + 1);
            let r = -1;
            for (let t = this.index; t < Math.min(this.index + 3, this.top.children.length); t++) {
              let n = this.top.children[t];
              if (n.matchesMark(e[o]) && !this.isLocked(n.dom)) {
                r = t;
                break;
              }
            }
            if (r > -1)
              r > this.index && ((this.changed = !0), this.destroyBetween(this.index, r)), (this.top = this.top.children[this.index]);
            else {
              let r = ae.create(this.top, e[o], t, n);
              this.top.children.splice(this.index, 0, r), (this.top = r), (this.changed = !0);
            }
            (this.index = 0), o++;
          }
        }
        findNodeMatch(e, t, n, r) {
          let o,
            i = -1;
          if (r >= this.preMatch.index && (o = this.preMatch.matches[r - this.preMatch.index]).parent == this.top && o.matchesNode(e, t, n))
            i = this.top.children.indexOf(o, this.index);
          else
            for (let r = this.index, o = Math.min(this.top.children.length, r + 5); r < o; r++) {
              let o = this.top.children[r];
              if (o.matchesNode(e, t, n) && !this.preMatch.matched.has(o)) {
                i = r;
                break;
              }
            }
          return !(i < 0 || (this.destroyBetween(this.index, i), this.index++, 0));
        }
        updateNodeAt(e, t, n, r, o) {
          let i = this.top.children[r];
          return (
            3 == i.dirty && i.dom == i.contentDOM && (i.dirty = 2),
            !!i.update(e, t, n, o) && (this.destroyBetween(this.index, r), this.index++, !0)
          );
        }
        findIndexWithChild(e) {
          for (;;) {
            let t = e.parentNode;
            if (!t) return -1;
            if (t == this.top.contentDOM) {
              let t = e.pmViewDesc;
              if (t) for (let e = this.index; e < this.top.children.length; e++) if (this.top.children[e] == t) return e;
              return -1;
            }
            e = t;
          }
        }
        updateNextNode(e, t, n, r, o, i) {
          for (let s = this.index; s < this.top.children.length; s++) {
            let a = this.top.children[s];
            if (a instanceof le) {
              let l = this.preMatch.matched.get(a);
              if (null != l && l != o) return !1;
              let c,
                d = a.dom,
                p =
                  this.isLocked(d) &&
                  !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && 3 != a.dirty && be(t, a.outerDeco));
              if (!p && a.update(e, t, n, r))
                return this.destroyBetween(this.index, s), a.dom != d && (this.changed = !0), this.index++, !0;
              if (!p && (c = this.recreateWrapper(a, e, t, n, r, i)))
                return (
                  (this.top.children[this.index] = c),
                  c.contentDOM && ((c.dirty = 2), c.updateChildren(r, i + 1), (c.dirty = 0)),
                  (this.changed = !0),
                  this.index++,
                  !0
                );
              break;
            }
          }
          return !1;
        }
        recreateWrapper(e, t, n, r, o, i) {
          if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content)) return null;
          let s = le.create(this.top, t, n, r, o, i);
          if (s.contentDOM) {
            (s.children = e.children), (e.children = []);
            for (let e of s.children) e.parent = s;
          }
          return e.destroy(), s;
        }
        addNode(e, t, n, r, o) {
          let i = le.create(this.top, e, t, n, r, o);
          i.contentDOM && i.updateChildren(r, o + 1), this.top.children.splice(this.index++, 0, i), (this.changed = !0);
        }
        placeWidget(e, t, n) {
          let r = this.index < this.top.children.length ? this.top.children[this.index] : null;
          if (!r || !r.matchesWidget(e) || (e != r.widget && r.widget.type.toDOM.parentNode)) {
            let r = new ie(this.top, e, t, n);
            this.top.children.splice(this.index++, 0, r), (this.changed = !0);
          } else this.index++;
        }
        addTextblockHacks() {
          let e = this.top.children[this.index - 1],
            t = this.top;
          for (; e instanceof ae; ) (t = e), (e = t.children[t.children.length - 1]);
          (!e || !(e instanceof de) || /\n$/.test(e.node.text) || (this.view.requiresGeckoHackNode && /\s$/.test(e.node.text))) &&
            ((E || N) && e && "false" == e.dom.contentEditable && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
        }
        addHackNode(e, t) {
          if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e)) this.index++;
          else {
            let n = document.createElement(e);
            "IMG" == e && ((n.className = "ProseMirror-separator"), (n.alt = "")), "BR" == e && (n.className = "ProseMirror-trailingBreak");
            let r = new pe(this.top, [], n, null);
            t != this.top ? t.children.push(r) : t.children.splice(this.index++, 0, r), (this.changed = !0);
          }
        }
        isLocked(e) {
          return this.lock && (e == this.lock || (1 == e.nodeType && e.contains(this.lock.parentNode)));
        }
      }
      function Se(e, t) {
        return e.type.side - t.type.side;
      }
      function Oe(e, t, n, r, o) {
        let i = [];
        for (let s = 0, a = 0; s < e.length; s++) {
          let l = e[s],
            c = a,
            d = (a += l.size);
          c >= n || d <= t
            ? i.push(l)
            : (c < t && i.push(l.slice(0, t - c, r)), o && (i.push(o), (o = void 0)), d > n && i.push(l.slice(n - c, l.size, r)));
        }
        return i;
      }
      function Me(e, t = null) {
        let n = e.domSelectionRange(),
          o = e.state.doc;
        if (!n.focusNode) return null;
        let i = e.docView.nearestDesc(n.focusNode),
          a = i && 0 == i.size,
          l = e.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
        if (l < 0) return null;
        let c,
          d,
          p = o.resolve(l);
        if (m(n)) {
          for (c = p; i && !i.node; ) i = i.parent;
          let e = i.node;
          if (
            i &&
            e.isAtom &&
            r.qv.isSelectable(e) &&
            i.parent &&
            (!e.isInline ||
              !(function (e, t, n) {
                for (let r = 0 == t, o = t == u(e); r || o; ) {
                  if (e == n) return !0;
                  let t = s(e);
                  if (!(e = e.parentNode)) return !1;
                  (r = r && 0 == t), (o = o && t == u(e));
                }
              })(n.focusNode, n.focusOffset, i.dom))
          ) {
            let e = i.posBefore;
            d = new r.qv(l == e ? p : o.resolve(e));
          }
        } else {
          let t = e.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
          if (t < 0) return null;
          c = o.resolve(t);
        }
        return d || (d = Ie(e, c, p, "pointer" == t || (e.state.selection.head < p.pos && !a) ? 1 : -1)), d;
      }
      function Ce(e) {
        return e.editable ? e.hasFocus() : $e(e) && document.activeElement && document.activeElement.contains(e.dom);
      }
      function Ne(e, t = !1) {
        let n = e.state.selection;
        if ((Pe(e, n), Ce(e))) {
          if (!t && e.input.mouseDown && e.input.mouseDown.allowDefault && N) {
            let t = e.domSelectionRange(),
              n = e.domObserver.currentSelection;
            if (t.anchorNode && n.anchorNode && d(t.anchorNode, t.anchorOffset, n.anchorNode, n.anchorOffset))
              return (e.input.mouseDown.delayedSelectionSync = !0), void e.domObserver.setCurSelection();
          }
          if ((e.domObserver.disconnectSelection(), e.cursorWrapper))
            !(function (e) {
              let t = e.domSelection(),
                n = document.createRange(),
                r = e.cursorWrapper.dom,
                o = "IMG" == r.nodeName;
              o ? n.setEnd(r.parentNode, s(r) + 1) : n.setEnd(r, 0),
                n.collapse(!1),
                t.removeAllRanges(),
                t.addRange(n),
                !o && !e.state.selection.visible && S && O <= 11 && ((r.disabled = !0), (r.disabled = !1));
            })(e);
          else {
            let o,
              i,
              { anchor: s, head: a } = n;
            !Te ||
              n instanceof r.Bs ||
              (n.$from.parent.inlineContent || (o = Ee(e, n.from)), n.empty || n.$from.parent.inlineContent || (i = Ee(e, n.to))),
              e.docView.setSelection(s, a, e.root, t),
              Te && (o && Ae(o), i && Ae(i)),
              n.visible
                ? e.dom.classList.remove("ProseMirror-hideselection")
                : (e.dom.classList.add("ProseMirror-hideselection"),
                  "onselectionchange" in document &&
                    (function (e) {
                      let t = e.dom.ownerDocument;
                      t.removeEventListener("selectionchange", e.input.hideSelectionGuard);
                      let n = e.domSelectionRange(),
                        r = n.anchorNode,
                        o = n.anchorOffset;
                      t.addEventListener(
                        "selectionchange",
                        (e.input.hideSelectionGuard = () => {
                          (n.anchorNode == r && n.anchorOffset == o) ||
                            (t.removeEventListener("selectionchange", e.input.hideSelectionGuard),
                            setTimeout(() => {
                              (Ce(e) && !e.state.selection.visible) || e.dom.classList.remove("ProseMirror-hideselection");
                            }, 20));
                        })
                      );
                    })(e));
          }
          e.domObserver.setCurSelection(), e.domObserver.connectSelection();
        }
      }
      const Te = E || (N && T < 63);
      function Ee(e, t) {
        let { node: n, offset: r } = e.docView.domFromPos(t, 0),
          o = r < n.childNodes.length ? n.childNodes[r] : null,
          i = r ? n.childNodes[r - 1] : null;
        if (E && o && "false" == o.contentEditable) return De(o);
        if (!((o && "false" != o.contentEditable) || (i && "false" != i.contentEditable))) {
          if (o) return De(o);
          if (i) return De(i);
        }
      }
      function De(e) {
        return (e.contentEditable = "true"), E && e.draggable && ((e.draggable = !1), (e.wasDraggable = !0)), e;
      }
      function Ae(e) {
        (e.contentEditable = "false"), e.wasDraggable && ((e.draggable = !0), (e.wasDraggable = null));
      }
      function Pe(e, t) {
        if (t instanceof r.qv) {
          let n = e.docView.descAt(t.from);
          n != e.lastSelectedViewDesc && (Re(e), n && n.selectNode(), (e.lastSelectedViewDesc = n));
        } else Re(e);
      }
      function Re(e) {
        e.lastSelectedViewDesc &&
          (e.lastSelectedViewDesc.parent && e.lastSelectedViewDesc.deselectNode(), (e.lastSelectedViewDesc = void 0));
      }
      function Ie(e, t, n, o) {
        return e.someProp("createSelectionBetween", (r) => r(e, t, n)) || r.Bs.between(t, n, o);
      }
      function Be(e) {
        return !(e.editable && !e.hasFocus()) && $e(e);
      }
      function $e(e) {
        let t = e.domSelectionRange();
        if (!t.anchorNode) return !1;
        try {
          return (
            e.dom.contains(3 == t.anchorNode.nodeType ? t.anchorNode.parentNode : t.anchorNode) &&
            (e.editable || e.dom.contains(3 == t.focusNode.nodeType ? t.focusNode.parentNode : t.focusNode))
          );
        } catch (e) {
          return !1;
        }
      }
      function ze(e, t) {
        let { $anchor: n, $head: o } = e.selection,
          i = t > 0 ? n.max(o) : n.min(o),
          s = i.parent.inlineContent ? (i.depth ? e.doc.resolve(t > 0 ? i.after() : i.before()) : null) : i;
        return s && r.Y1.findFrom(s, t);
      }
      function je(e, t) {
        return e.dispatch(e.state.tr.setSelection(t).scrollIntoView()), !0;
      }
      function Ve(e, t, n) {
        let o = e.state.selection;
        if (!(o instanceof r.Bs)) {
          if (o instanceof r.qv && o.node.isInline) return je(e, new r.Bs(t > 0 ? o.$to : o.$from));
          {
            let n = ze(e.state, t);
            return !!n && je(e, n);
          }
        }
        if (n.indexOf("s") > -1) {
          let { $head: n } = o,
            i = n.textOffset ? null : t < 0 ? n.nodeBefore : n.nodeAfter;
          if (!i || i.isText || !i.isLeaf) return !1;
          let s = e.state.doc.resolve(n.pos + i.nodeSize * (t < 0 ? -1 : 1));
          return je(e, new r.Bs(o.$anchor, s));
        }
        if (!o.empty) return !1;
        if (e.endOfTextblock(t > 0 ? "forward" : "backward")) {
          let n = ze(e.state, t);
          return !!(n && n instanceof r.qv) && je(e, n);
        }
        if (!(A && n.indexOf("m") > -1)) {
          let n,
            i = o.$head,
            s = i.textOffset ? null : t < 0 ? i.nodeBefore : i.nodeAfter;
          if (!s || s.isText) return !1;
          let a = t < 0 ? i.pos - s.nodeSize : i.pos;
          return (
            !!(s.isAtom || ((n = e.docView.descAt(a)) && !n.contentDOM)) &&
            (r.qv.isSelectable(s)
              ? je(e, new r.qv(t < 0 ? e.state.doc.resolve(i.pos - s.nodeSize) : i))
              : !!I && je(e, new r.Bs(e.state.doc.resolve(t < 0 ? a : a + s.nodeSize))))
          );
        }
      }
      function Fe(e) {
        return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length;
      }
      function Le(e, t) {
        let n = e.pmViewDesc;
        return n && 0 == n.size && (t < 0 || e.nextSibling || "BR" != e.nodeName);
      }
      function He(e, t) {
        return t < 0
          ? (function (e) {
              let t = e.domSelectionRange(),
                n = t.focusNode,
                r = t.focusOffset;
              if (!n) return;
              let o,
                i,
                a = !1;
              for (M && 1 == n.nodeType && r < Fe(n) && Le(n.childNodes[r], -1) && (a = !0); ; )
                if (r > 0) {
                  if (1 != n.nodeType) break;
                  {
                    let e = n.childNodes[r - 1];
                    if (Le(e, -1)) (o = n), (i = --r);
                    else {
                      if (3 != e.nodeType) break;
                      (n = e), (r = n.nodeValue.length);
                    }
                  }
                } else {
                  if (qe(n)) break;
                  {
                    let t = n.previousSibling;
                    for (; t && Le(t, -1); ) (o = n.parentNode), (i = s(t)), (t = t.previousSibling);
                    if (t) (n = t), (r = Fe(n));
                    else {
                      if (((n = n.parentNode), n == e.dom)) break;
                      r = 0;
                    }
                  }
                }
              a ? We(e, n, r) : o && We(e, o, i);
            })(e)
          : (function (e) {
              let t = e.domSelectionRange(),
                n = t.focusNode,
                r = t.focusOffset;
              if (!n) return;
              let o,
                i,
                a = Fe(n);
              for (;;)
                if (r < a) {
                  if (1 != n.nodeType) break;
                  if (!Le(n.childNodes[r], 1)) break;
                  (o = n), (i = ++r);
                } else {
                  if (qe(n)) break;
                  {
                    let t = n.nextSibling;
                    for (; t && Le(t, 1); ) (o = t.parentNode), (i = s(t) + 1), (t = t.nextSibling);
                    if (t) (n = t), (r = 0), (a = Fe(n));
                    else {
                      if (((n = n.parentNode), n == e.dom)) break;
                      r = a = 0;
                    }
                  }
                }
              o && We(e, o, i);
            })(e);
      }
      function qe(e) {
        let t = e.pmViewDesc;
        return t && t.node && t.node.isBlock;
      }
      function We(e, t, n) {
        if (3 != t.nodeType) {
          let e, r;
          (r = (function (e, t) {
            for (; e && t == e.childNodes.length && !f(e); ) (t = s(e) + 1), (e = e.parentNode);
            for (; e && t < e.childNodes.length; ) {
              let n = e.childNodes[t];
              if (3 == n.nodeType) return n;
              if (1 == n.nodeType && "false" == n.contentEditable) break;
              (e = n), (t = 0);
            }
          })(t, n))
            ? ((t = r), (n = 0))
            : (e = (function (e, t) {
                for (; e && !t && !f(e); ) (t = s(e)), (e = e.parentNode);
                for (; e && t; ) {
                  let n = e.childNodes[t - 1];
                  if (3 == n.nodeType) return n;
                  if (1 == n.nodeType && "false" == n.contentEditable) break;
                  t = (e = n).childNodes.length;
                }
              })(t, n)) && ((t = e), (n = e.nodeValue.length));
        }
        let r = e.domSelection();
        if (m(r)) {
          let e = document.createRange();
          e.setEnd(t, n), e.setStart(t, n), r.removeAllRanges(), r.addRange(e);
        } else r.extend && r.extend(t, n);
        e.domObserver.setCurSelection();
        let { state: o } = e;
        setTimeout(() => {
          e.state == o && Ne(e);
        }, 50);
      }
      function Je(e, t) {
        let n = e.state.doc.resolve(t);
        if (!N && !P && n.parent.inlineContent) {
          let r = e.coordsAtPos(t);
          if (t > n.start()) {
            let n = e.coordsAtPos(t - 1),
              o = (n.top + n.bottom) / 2;
            if (o > r.top && o < r.bottom && Math.abs(n.left - r.left) > 1) return n.left < r.left ? "ltr" : "rtl";
          }
          if (t < n.end()) {
            let n = e.coordsAtPos(t + 1),
              o = (n.top + n.bottom) / 2;
            if (o > r.top && o < r.bottom && Math.abs(n.left - r.left) > 1) return n.left > r.left ? "ltr" : "rtl";
          }
        }
        return "rtl" == getComputedStyle(e.dom).direction ? "rtl" : "ltr";
      }
      function _e(e, t, n) {
        let o = e.state.selection;
        if ((o instanceof r.Bs && !o.empty) || n.indexOf("s") > -1) return !1;
        if (A && n.indexOf("m") > -1) return !1;
        let { $from: i, $to: s } = o;
        if (!i.parent.inlineContent || e.endOfTextblock(t < 0 ? "up" : "down")) {
          let n = ze(e.state, t);
          if (n && n instanceof r.qv) return je(e, n);
        }
        if (!i.parent.inlineContent) {
          let n = t < 0 ? i : s,
            a = o instanceof r.C1 ? r.Y1.near(n, t) : r.Y1.findFrom(n, t);
          return !!a && je(e, a);
        }
        return !1;
      }
      function Ke(e, t) {
        if (!(e.state.selection instanceof r.Bs)) return !0;
        let { $head: n, $anchor: o, empty: i } = e.state.selection;
        if (!n.sameParent(o)) return !0;
        if (!i) return !1;
        if (e.endOfTextblock(t > 0 ? "forward" : "backward")) return !0;
        let s = !n.textOffset && (t < 0 ? n.nodeBefore : n.nodeAfter);
        if (s && !s.isText) {
          let r = e.state.tr;
          return t < 0 ? r.delete(n.pos - s.nodeSize, n.pos) : r.delete(n.pos, n.pos + s.nodeSize), e.dispatch(r), !0;
        }
        return !1;
      }
      function Ye(e, t, n) {
        e.domObserver.stop(), (t.contentEditable = n), e.domObserver.start();
      }
      function Ue(e, t) {
        e.someProp("transformCopied", (n) => {
          t = n(t, e);
        });
        let n = [],
          { content: r, openStart: i, openEnd: s } = t;
        for (; i > 1 && s > 1 && 1 == r.childCount && 1 == r.firstChild.childCount; ) {
          i--, s--;
          let e = r.firstChild;
          n.push(e.type.name, e.attrs != e.type.defaultAttrs ? e.attrs : null), (r = e.content);
        }
        let a = e.someProp("clipboardSerializer") || o.PW.fromSchema(e.state.schema),
          l = it(),
          c = l.createElement("div");
        c.appendChild(a.serializeFragment(r, { document: l }));
        let d,
          p = c.firstChild,
          h = 0;
        for (; p && 1 == p.nodeType && (d = rt[p.nodeName.toLowerCase()]); ) {
          for (let e = d.length - 1; e >= 0; e--) {
            let t = l.createElement(d[e]);
            for (; c.firstChild; ) t.appendChild(c.firstChild);
            c.appendChild(t), h++;
          }
          p = c.firstChild;
        }
        return (
          p && 1 == p.nodeType && p.setAttribute("data-pm-slice", `${i} ${s}${h ? ` -${h}` : ""} ${JSON.stringify(n)}`),
          { dom: c, text: e.someProp("clipboardTextSerializer", (n) => n(t, e)) || t.content.textBetween(0, t.content.size, "\n\n") }
        );
      }
      function Ge(e, t, n, r, i) {
        let s,
          a,
          l = i.parent.type.spec.code;
        if (!n && !t) return null;
        let c = t && (r || l || !n);
        if (c) {
          if (
            (e.someProp("transformPastedText", (n) => {
              t = n(t, l || r, e);
            }),
            l)
          )
            return t ? new o.p2(o.HY.from(e.state.schema.text(t.replace(/\r\n?/g, "\n"))), 0, 0) : o.p2.empty;
          let n = e.someProp("clipboardTextParser", (n) => n(t, i, r, e));
          if (n) a = n;
          else {
            let n = i.marks(),
              { schema: r } = e.state,
              a = o.PW.fromSchema(r);
            (s = document.createElement("div")),
              t.split(/(?:\r\n?|\n)+/).forEach((e) => {
                let t = s.appendChild(document.createElement("p"));
                e && t.appendChild(a.serializeNode(r.text(e, n)));
              });
          }
        } else
          e.someProp("transformPastedHTML", (t) => {
            n = t(n, e);
          }),
            (s = (function (e) {
              let t = /^(\s*<meta [^>]*>)*/.exec(e);
              t && (e = e.slice(t[0].length));
              let n,
                r = it().createElement("div"),
                o = /<([a-z][^>\s]+)/i.exec(e);
              if (
                ((n = o && rt[o[1].toLowerCase()]) &&
                  (e =
                    n.map((e) => "<" + e + ">").join("") +
                    e +
                    n
                      .map((e) => "</" + e + ">")
                      .reverse()
                      .join("")),
                (r.innerHTML = e),
                n)
              )
                for (let e = 0; e < n.length; e++) r = r.querySelector(n[e]) || r;
              return r;
            })(n)),
            I &&
              (function (e) {
                let t = e.querySelectorAll(N ? "span:not([class]):not([style])" : "span.Apple-converted-space");
                for (let n = 0; n < t.length; n++) {
                  let r = t[n];
                  1 == r.childNodes.length &&
                    " " == r.textContent &&
                    r.parentNode &&
                    r.parentNode.replaceChild(e.ownerDocument.createTextNode(" "), r);
                }
              })(s);
        let d = s && s.querySelector("[data-pm-slice]"),
          p = d && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(d.getAttribute("data-pm-slice") || "");
        if (p && p[3])
          for (let e = +p[3]; e > 0; e--) {
            let e = s.firstChild;
            for (; e && 1 != e.nodeType; ) e = e.nextSibling;
            if (!e) break;
            s = e;
          }
        if (!a) {
          let t = e.someProp("clipboardParser") || e.someProp("domParser") || o.aw.fromSchema(e.state.schema);
          a = t.parseSlice(s, {
            preserveWhitespace: !(!c && !p),
            context: i,
            ruleFromNode: (e) =>
              "BR" != e.nodeName || e.nextSibling || !e.parentNode || Xe.test(e.parentNode.nodeName) ? null : { ignore: !0 }
          });
        }
        if (p)
          a = (function (e, t) {
            if (!e.size) return e;
            let n,
              r = e.content.firstChild.type.schema;
            try {
              n = JSON.parse(t);
            } catch (t) {
              return e;
            }
            let { content: i, openStart: s, openEnd: a } = e;
            for (let e = n.length - 2; e >= 0; e -= 2) {
              let t = r.nodes[n[e]];
              if (!t || t.hasRequiredAttrs()) break;
              (i = o.HY.from(t.create(n[e + 1], i))), s++, a++;
            }
            return new o.p2(i, s, a);
          })(nt(a, +p[1], +p[2]), p[4]);
        else if (
          ((a = o.p2.maxOpen(
            (function (e, t) {
              if (e.childCount < 2) return e;
              for (let n = t.depth; n >= 0; n--) {
                let r,
                  i = t.node(n).contentMatchAt(t.index(n)),
                  s = [];
                if (
                  (e.forEach((e) => {
                    if (!s) return;
                    let t,
                      n = i.findWrapping(e.type);
                    if (!n) return (s = null);
                    if ((t = s.length && r.length && Qe(n, r, e, s[s.length - 1], 0))) s[s.length - 1] = t;
                    else {
                      s.length && (s[s.length - 1] = et(s[s.length - 1], r.length));
                      let t = Ze(e, n);
                      s.push(t), (i = i.matchType(t.type)), (r = n);
                    }
                  }),
                  s)
                )
                  return o.HY.from(s);
              }
              return e;
            })(a.content, i),
            !0
          )),
          a.openStart || a.openEnd)
        ) {
          let e = 0,
            t = 0;
          for (let t = a.content.firstChild; e < a.openStart && !t.type.spec.isolating; e++, t = t.firstChild);
          for (let e = a.content.lastChild; t < a.openEnd && !e.type.spec.isolating; t++, e = e.lastChild);
          a = nt(a, e, t);
        }
        return (
          e.someProp("transformPasted", (t) => {
            a = t(a, e);
          }),
          a
        );
      }
      const Xe = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
      function Ze(e, t, n = 0) {
        for (let r = t.length - 1; r >= n; r--) e = t[r].create(null, o.HY.from(e));
        return e;
      }
      function Qe(e, t, n, r, i) {
        if (i < e.length && i < t.length && e[i] == t[i]) {
          let s = Qe(e, t, n, r.lastChild, i + 1);
          if (s) return r.copy(r.content.replaceChild(r.childCount - 1, s));
          if (r.contentMatchAt(r.childCount).matchType(i == e.length - 1 ? n.type : e[i + 1]))
            return r.copy(r.content.append(o.HY.from(Ze(n, e, i + 1))));
        }
      }
      function et(e, t) {
        if (0 == t) return e;
        let n = e.content.replaceChild(e.childCount - 1, et(e.lastChild, t - 1)),
          r = e.contentMatchAt(e.childCount).fillBefore(o.HY.empty, !0);
        return e.copy(n.append(r));
      }
      function tt(e, t, n, r, i, s) {
        let a = t < 0 ? e.firstChild : e.lastChild,
          l = a.content;
        return (
          e.childCount > 1 && (s = 0),
          i < r - 1 && (l = tt(l, t, n, r, i + 1, s)),
          i >= n &&
            (l =
              t < 0
                ? a
                    .contentMatchAt(0)
                    .fillBefore(l, s <= i)
                    .append(l)
                : l.append(a.contentMatchAt(a.childCount).fillBefore(o.HY.empty, !0))),
          e.replaceChild(t < 0 ? 0 : e.childCount - 1, a.copy(l))
        );
      }
      function nt(e, t, n) {
        return (
          t < e.openStart && (e = new o.p2(tt(e.content, -1, t, e.openStart, 0, e.openEnd), t, e.openEnd)),
          n < e.openEnd && (e = new o.p2(tt(e.content, 1, n, e.openEnd, 0, 0), e.openStart, n)),
          e
        );
      }
      const rt = {
        thead: ["table"],
        tbody: ["table"],
        tfoot: ["table"],
        caption: ["table"],
        colgroup: ["table"],
        col: ["table", "colgroup"],
        tr: ["table", "tbody"],
        td: ["table", "tbody", "tr"],
        th: ["table", "tbody", "tr"]
      };
      let ot = null;
      function it() {
        return ot || (ot = document.implementation.createHTMLDocument("title"));
      }
      const st = {},
        at = {},
        lt = { touchstart: !0, touchmove: !0 };
      class ct {
        constructor() {
          (this.shiftKey = !1),
            (this.mouseDown = null),
            (this.lastKeyCode = null),
            (this.lastKeyCodeTime = 0),
            (this.lastClick = { time: 0, x: 0, y: 0, type: "" }),
            (this.lastSelectionOrigin = null),
            (this.lastSelectionTime = 0),
            (this.lastIOSEnter = 0),
            (this.lastIOSEnterFallbackTimeout = -1),
            (this.lastFocus = 0),
            (this.lastTouch = 0),
            (this.lastAndroidDelete = 0),
            (this.composing = !1),
            (this.composingTimeout = -1),
            (this.compositionNodes = []),
            (this.compositionEndedAt = -2e8),
            (this.compositionID = 1),
            (this.compositionPendingChanges = 0),
            (this.domChangeCount = 0),
            (this.eventHandlers = Object.create(null)),
            (this.hideSelectionGuard = null);
        }
      }
      function dt(e, t) {
        (e.input.lastSelectionOrigin = t), (e.input.lastSelectionTime = Date.now());
      }
      function pt(e) {
        e.someProp("handleDOMEvents", (t) => {
          for (let n in t) e.input.eventHandlers[n] || e.dom.addEventListener(n, (e.input.eventHandlers[n] = (t) => ht(e, t)));
        });
      }
      function ht(e, t) {
        return e.someProp("handleDOMEvents", (n) => {
          let r = n[t.type];
          return !!r && (r(e, t) || t.defaultPrevented);
        });
      }
      function ut(e, t) {
        if (!t.bubbles) return !0;
        if (t.defaultPrevented) return !1;
        for (let n = t.target; n != e.dom; n = n.parentNode)
          if (!n || 11 == n.nodeType || (n.pmViewDesc && n.pmViewDesc.stopEvent(t))) return !1;
        return !0;
      }
      function ft(e) {
        return { left: e.clientX, top: e.clientY };
      }
      function mt(e, t, n, r, o) {
        if (-1 == r) return !1;
        let i = e.state.doc.resolve(r);
        for (let r = i.depth + 1; r > 0; r--)
          if (e.someProp(t, (t) => (r > i.depth ? t(e, n, i.nodeAfter, i.before(r), o, !0) : t(e, n, i.node(r), i.before(r), o, !1))))
            return !0;
        return !1;
      }
      function gt(e, t, n) {
        e.focused || e.focus();
        let r = e.state.tr.setSelection(t);
        "pointer" == n && r.setMeta("pointer", !0), e.dispatch(r);
      }
      function yt(e, t, n, r) {
        return mt(e, "handleDoubleClickOn", t, n, r) || e.someProp("handleDoubleClick", (n) => n(e, t, r));
      }
      function vt(e, t, n, o) {
        return (
          mt(e, "handleTripleClickOn", t, n, o) ||
          e.someProp("handleTripleClick", (n) => n(e, t, o)) ||
          (function (e, t, n) {
            if (0 != n.button) return !1;
            let o = e.state.doc;
            if (-1 == t) return !!o.inlineContent && (gt(e, r.Bs.create(o, 0, o.content.size), "pointer"), !0);
            let i = o.resolve(t);
            for (let t = i.depth + 1; t > 0; t--) {
              let n = t > i.depth ? i.nodeAfter : i.node(t),
                s = i.before(t);
              if (n.inlineContent) gt(e, r.Bs.create(o, s + 1, s + 1 + n.content.size), "pointer");
              else {
                if (!r.qv.isSelectable(n)) continue;
                gt(e, r.qv.create(o, s), "pointer");
              }
              return !0;
            }
          })(e, n, o)
        );
      }
      function wt(e) {
        return Ct(e);
      }
      (at.keydown = (e, t) => {
        let n = t;
        if (
          ((e.input.shiftKey = 16 == n.keyCode || n.shiftKey),
          !kt(e, n) && ((e.input.lastKeyCode = n.keyCode), (e.input.lastKeyCodeTime = Date.now()), !R || !N || 13 != n.keyCode))
        )
          if ((229 != n.keyCode && e.domObserver.forceFlush(), !D || 13 != n.keyCode || n.ctrlKey || n.altKey || n.metaKey))
            e.someProp("handleKeyDown", (t) => t(e, n)) ||
            (function (e, t) {
              let n = t.keyCode,
                r = (function (e) {
                  let t = "";
                  return e.ctrlKey && (t += "c"), e.metaKey && (t += "m"), e.altKey && (t += "a"), e.shiftKey && (t += "s"), t;
                })(t);
              if (8 == n || (A && 72 == n && "c" == r)) return Ke(e, -1) || He(e, -1);
              if ((46 == n && !t.shiftKey) || (A && 68 == n && "c" == r)) return Ke(e, 1) || He(e, 1);
              if (13 == n || 27 == n) return !0;
              if (37 == n || (A && 66 == n && "c" == r)) {
                let t = 37 == n ? ("ltr" == Je(e, e.state.selection.from) ? -1 : 1) : -1;
                return Ve(e, t, r) || He(e, t);
              }
              if (39 == n || (A && 70 == n && "c" == r)) {
                let t = 39 == n ? ("ltr" == Je(e, e.state.selection.from) ? 1 : -1) : 1;
                return Ve(e, t, r) || He(e, t);
              }
              return 38 == n || (A && 80 == n && "c" == r)
                ? _e(e, -1, r) || He(e, -1)
                : 40 == n || (A && 78 == n && "c" == r)
                ? (function (e) {
                    if (!E || e.state.selection.$head.parentOffset > 0) return !1;
                    let { focusNode: t, focusOffset: n } = e.domSelectionRange();
                    if (t && 1 == t.nodeType && 0 == n && t.firstChild && "false" == t.firstChild.contentEditable) {
                      let n = t.firstChild;
                      Ye(e, n, "true"), setTimeout(() => Ye(e, n, "false"), 20);
                    }
                    return !1;
                  })(e) ||
                  _e(e, 1, r) ||
                  He(e, 1)
                : r == (A ? "m" : "c") && (66 == n || 73 == n || 89 == n || 90 == n);
            })(e, n)
              ? n.preventDefault()
              : dt(e, "key");
          else {
            let t = Date.now();
            (e.input.lastIOSEnter = t),
              (e.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
                e.input.lastIOSEnter == t && (e.someProp("handleKeyDown", (t) => t(e, g(13, "Enter"))), (e.input.lastIOSEnter = 0));
              }, 200));
          }
      }),
        (at.keyup = (e, t) => {
          16 == t.keyCode && (e.input.shiftKey = !1);
        }),
        (at.keypress = (e, t) => {
          let n = t;
          if (kt(e, n) || !n.charCode || (n.ctrlKey && !n.altKey) || (A && n.metaKey)) return;
          if (e.someProp("handleKeyPress", (t) => t(e, n))) return void n.preventDefault();
          let o = e.state.selection;
          if (!(o instanceof r.Bs && o.$from.sameParent(o.$to))) {
            let t = String.fromCharCode(n.charCode);
            /[\r\n]/.test(t) ||
              e.someProp("handleTextInput", (n) => n(e, o.$from.pos, o.$to.pos, t)) ||
              e.dispatch(e.state.tr.insertText(t).scrollIntoView()),
              n.preventDefault();
          }
        });
      const bt = A ? "metaKey" : "ctrlKey";
      st.mousedown = (e, t) => {
        let n = t;
        e.input.shiftKey = n.shiftKey;
        let r = wt(e),
          o = Date.now(),
          i = "singleClick";
        o - e.input.lastClick.time < 500 &&
          (function (e, t) {
            let n = t.x - e.clientX,
              r = t.y - e.clientY;
            return n * n + r * r < 100;
          })(n, e.input.lastClick) &&
          !n[bt] &&
          ("singleClick" == e.input.lastClick.type ? (i = "doubleClick") : "doubleClick" == e.input.lastClick.type && (i = "tripleClick")),
          (e.input.lastClick = { time: o, x: n.clientX, y: n.clientY, type: i });
        let s = e.posAtCoords(ft(n));
        s &&
          ("singleClick" == i
            ? (e.input.mouseDown && e.input.mouseDown.done(), (e.input.mouseDown = new xt(e, s, n, !!r)))
            : ("doubleClick" == i ? yt : vt)(e, s.pos, s.inside, n)
            ? n.preventDefault()
            : dt(e, "pointer"));
      };
      class xt {
        constructor(e, t, n, o) {
          let i, s;
          if (
            ((this.view = e),
            (this.pos = t),
            (this.event = n),
            (this.flushed = o),
            (this.delayedSelectionSync = !1),
            (this.mightDrag = null),
            (this.startDoc = e.state.doc),
            (this.selectNode = !!n[bt]),
            (this.allowDefault = n.shiftKey),
            t.inside > -1)
          )
            (i = e.state.doc.nodeAt(t.inside)), (s = t.inside);
          else {
            let n = e.state.doc.resolve(t.pos);
            (i = n.parent), (s = n.depth ? n.before() : 0);
          }
          const a = o ? null : n.target,
            l = a ? e.docView.nearestDesc(a, !0) : null;
          this.target = l ? l.dom : null;
          let { selection: c } = e.state;
          ((0 == n.button && i.type.spec.draggable && !1 !== i.type.spec.selectable) || (c instanceof r.qv && c.from <= s && c.to > s)) &&
            (this.mightDrag = {
              node: i,
              pos: s,
              addAttr: !(!this.target || this.target.draggable),
              setUneditable: !(!this.target || !M || this.target.hasAttribute("contentEditable"))
            }),
            this.target &&
              this.mightDrag &&
              (this.mightDrag.addAttr || this.mightDrag.setUneditable) &&
              (this.view.domObserver.stop(),
              this.mightDrag.addAttr && (this.target.draggable = !0),
              this.mightDrag.setUneditable &&
                setTimeout(() => {
                  this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
                }, 20),
              this.view.domObserver.start()),
            e.root.addEventListener("mouseup", (this.up = this.up.bind(this))),
            e.root.addEventListener("mousemove", (this.move = this.move.bind(this))),
            dt(e, "pointer");
        }
        done() {
          this.view.root.removeEventListener("mouseup", this.up),
            this.view.root.removeEventListener("mousemove", this.move),
            this.mightDrag &&
              this.target &&
              (this.view.domObserver.stop(),
              this.mightDrag.addAttr && this.target.removeAttribute("draggable"),
              this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"),
              this.view.domObserver.start()),
            this.delayedSelectionSync && setTimeout(() => Ne(this.view)),
            (this.view.input.mouseDown = null);
        }
        up(e) {
          if ((this.done(), !this.view.dom.contains(e.target))) return;
          let t = this.pos;
          this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(ft(e))),
            this.updateAllowDefault(e),
            this.allowDefault || !t
              ? dt(this.view, "pointer")
              : (function (e, t, n, o, i) {
                  return (
                    mt(e, "handleClickOn", t, n, o) ||
                    e.someProp("handleClick", (n) => n(e, t, o)) ||
                    (i
                      ? (function (e, t) {
                          if (-1 == t) return !1;
                          let n,
                            o,
                            i = e.state.selection;
                          i instanceof r.qv && (n = i.node);
                          let s = e.state.doc.resolve(t);
                          for (let e = s.depth + 1; e > 0; e--) {
                            let t = e > s.depth ? s.nodeAfter : s.node(e);
                            if (r.qv.isSelectable(t)) {
                              o =
                                n && i.$from.depth > 0 && e >= i.$from.depth && s.before(i.$from.depth + 1) == i.$from.pos
                                  ? s.before(i.$from.depth)
                                  : s.before(e);
                              break;
                            }
                          }
                          return null != o && (gt(e, r.qv.create(e.state.doc, o), "pointer"), !0);
                        })(e, n)
                      : (function (e, t) {
                          if (-1 == t) return !1;
                          let n = e.state.doc.resolve(t),
                            o = n.nodeAfter;
                          return !!(o && o.isAtom && r.qv.isSelectable(o)) && (gt(e, new r.qv(n), "pointer"), !0);
                        })(e, n))
                  );
                })(this.view, t.pos, t.inside, e, this.selectNode)
              ? e.preventDefault()
              : 0 == e.button &&
                (this.flushed ||
                  (E && this.mightDrag && !this.mightDrag.node.isAtom) ||
                  (N &&
                    !this.view.state.selection.visible &&
                    Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2))
              ? (gt(this.view, r.Y1.near(this.view.state.doc.resolve(t.pos)), "pointer"), e.preventDefault())
              : dt(this.view, "pointer");
        }
        move(e) {
          this.updateAllowDefault(e), dt(this.view, "pointer"), 0 == e.buttons && this.done();
        }
        updateAllowDefault(e) {
          !this.allowDefault &&
            (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) &&
            (this.allowDefault = !0);
        }
      }
      function kt(e, t) {
        return (
          !!e.composing || (!!(E && Math.abs(t.timeStamp - e.input.compositionEndedAt) < 500) && ((e.input.compositionEndedAt = -2e8), !0))
        );
      }
      (st.touchstart = (e) => {
        (e.input.lastTouch = Date.now()), wt(e), dt(e, "pointer");
      }),
        (st.touchmove = (e) => {
          (e.input.lastTouch = Date.now()), dt(e, "pointer");
        }),
        (st.contextmenu = (e) => wt(e));
      const St = R ? 5e3 : -1;
      function Ot(e, t) {
        clearTimeout(e.input.composingTimeout), t > -1 && (e.input.composingTimeout = setTimeout(() => Ct(e), t));
      }
      function Mt(e) {
        for (
          e.composing &&
          ((e.input.composing = !1),
          (e.input.compositionEndedAt = (function () {
            let e = document.createEvent("Event");
            return e.initEvent("event", !0, !0), e.timeStamp;
          })()));
          e.input.compositionNodes.length > 0;

        )
          e.input.compositionNodes.pop().markParentsDirty();
      }
      function Ct(e, t = !1) {
        if (!(R && e.domObserver.flushingSoon >= 0)) {
          if ((e.domObserver.forceFlush(), Mt(e), t || (e.docView && e.docView.dirty))) {
            let t = Me(e);
            return t && !t.eq(e.state.selection) ? e.dispatch(e.state.tr.setSelection(t)) : e.updateState(e.state), !0;
          }
          return !1;
        }
      }
      (at.compositionstart = at.compositionupdate =
        (e) => {
          if (!e.composing) {
            e.domObserver.flush();
            let { state: t } = e,
              n = t.selection.$from;
            if (
              t.selection.empty &&
              (t.storedMarks || (!n.textOffset && n.parentOffset && n.nodeBefore.marks.some((e) => !1 === e.type.spec.inclusive)))
            )
              (e.markCursor = e.state.storedMarks || n.marks()), Ct(e, !0), (e.markCursor = null);
            else if ((Ct(e), M && t.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length)) {
              let t = e.domSelectionRange();
              for (let n = t.focusNode, r = t.focusOffset; n && 1 == n.nodeType && 0 != r; ) {
                let t = r < 0 ? n.lastChild : n.childNodes[r - 1];
                if (!t) break;
                if (3 == t.nodeType) {
                  e.domSelection().collapse(t, t.nodeValue.length);
                  break;
                }
                (n = t), (r = -1);
              }
            }
            e.input.composing = !0;
          }
          Ot(e, St);
        }),
        (at.compositionend = (e, t) => {
          e.composing &&
            ((e.input.composing = !1),
            (e.input.compositionEndedAt = t.timeStamp),
            (e.input.compositionPendingChanges = e.domObserver.pendingRecords().length ? e.input.compositionID : 0),
            e.input.compositionPendingChanges && Promise.resolve().then(() => e.domObserver.flush()),
            e.input.compositionID++,
            Ot(e, 20));
        });
      const Nt = (S && O < 15) || (D && B < 604);
      function Tt(e, t, n, r, i) {
        let s = Ge(e, t, n, r, e.state.selection.$from);
        if (e.someProp("handlePaste", (t) => t(e, i, s || o.p2.empty))) return !0;
        if (!s) return !1;
        let a = (function (e) {
            return 0 == e.openStart && 0 == e.openEnd && 1 == e.content.childCount ? e.content.firstChild : null;
          })(s),
          l = a ? e.state.tr.replaceSelectionWith(a, r) : e.state.tr.replaceSelection(s);
        return e.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
      }
      function Et(e) {
        let t = e.getData("text/plain") || e.getData("Text");
        if (t) return t;
        let n = e.getData("text/uri-list");
        return n ? n.replace(/\r?\n/g, " ") : "";
      }
      (st.copy = at.cut =
        (e, t) => {
          let n = t,
            r = e.state.selection,
            o = "cut" == n.type;
          if (r.empty) return;
          let i = Nt ? null : n.clipboardData,
            s = r.content(),
            { dom: a, text: l } = Ue(e, s);
          i
            ? (n.preventDefault(), i.clearData(), i.setData("text/html", a.innerHTML), i.setData("text/plain", l))
            : (function (e, t) {
                if (!e.dom.parentNode) return;
                let n = e.dom.parentNode.appendChild(document.createElement("div"));
                n.appendChild(t), (n.style.cssText = "position: fixed; left: -10000px; top: 10px");
                let r = getSelection(),
                  o = document.createRange();
                o.selectNodeContents(t),
                  e.dom.blur(),
                  r.removeAllRanges(),
                  r.addRange(o),
                  setTimeout(() => {
                    n.parentNode && n.parentNode.removeChild(n), e.focus();
                  }, 50);
              })(e, a),
            o && e.dispatch(e.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
        }),
        (at.paste = (e, t) => {
          let n = t;
          if (e.composing && !R) return;
          let r = Nt ? null : n.clipboardData,
            o = e.input.shiftKey && 45 != e.input.lastKeyCode;
          r && Tt(e, Et(r), r.getData("text/html"), o, n)
            ? n.preventDefault()
            : (function (e, t) {
                if (!e.dom.parentNode) return;
                let n = e.input.shiftKey || e.state.selection.$from.parent.type.spec.code,
                  r = e.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
                n || (r.contentEditable = "true"), (r.style.cssText = "position: fixed; left: -10000px; top: 10px"), r.focus();
                let o = e.input.shiftKey && 45 != e.input.lastKeyCode;
                setTimeout(() => {
                  e.focus(),
                    r.parentNode && r.parentNode.removeChild(r),
                    n ? Tt(e, r.value, null, o, t) : Tt(e, r.textContent, r.innerHTML, o, t);
                }, 50);
              })(e, n);
        });
      class Dt {
        constructor(e, t, n) {
          (this.slice = e), (this.move = t), (this.node = n);
        }
      }
      const At = A ? "altKey" : "ctrlKey";
      (st.dragstart = (e, t) => {
        let n = t,
          o = e.input.mouseDown;
        if ((o && o.done(), !n.dataTransfer)) return;
        let i,
          s = e.state.selection,
          a = s.empty ? null : e.posAtCoords(ft(n));
        if (a && a.pos >= s.from && a.pos <= (s instanceof r.qv ? s.to - 1 : s.to));
        else if (o && o.mightDrag) i = r.qv.create(e.state.doc, o.mightDrag.pos);
        else if (n.target && 1 == n.target.nodeType) {
          let t = e.docView.nearestDesc(n.target, !0);
          t && t.node.type.spec.draggable && t != e.docView && (i = r.qv.create(e.state.doc, t.posBefore));
        }
        let l = (i || e.state.selection).content(),
          { dom: c, text: d } = Ue(e, l);
        n.dataTransfer.clearData(),
          n.dataTransfer.setData(Nt ? "Text" : "text/html", c.innerHTML),
          (n.dataTransfer.effectAllowed = "copyMove"),
          Nt || n.dataTransfer.setData("text/plain", d),
          (e.dragging = new Dt(l, !n[At], i));
      }),
        (st.dragend = (e) => {
          let t = e.dragging;
          window.setTimeout(() => {
            e.dragging == t && (e.dragging = null);
          }, 50);
        }),
        (at.dragover = at.dragenter = (e, t) => t.preventDefault()),
        (at.drop = (e, t) => {
          let n = t,
            s = e.dragging;
          if (((e.dragging = null), !n.dataTransfer)) return;
          let a = e.posAtCoords(ft(n));
          if (!a) return;
          let l = e.state.doc.resolve(a.pos),
            c = s && s.slice;
          c
            ? e.someProp("transformPasted", (t) => {
                c = t(c, e);
              })
            : (c = Ge(e, Et(n.dataTransfer), Nt ? null : n.dataTransfer.getData("text/html"), !1, l));
          let d = !(!s || n[At]);
          if (e.someProp("handleDrop", (t) => t(e, n, c || o.p2.empty, d))) return void n.preventDefault();
          if (!c) return;
          n.preventDefault();
          let p = c ? (0, i.nj)(e.state.doc, l.pos, c) : l.pos;
          null == p && (p = l.pos);
          let h = e.state.tr;
          if (d) {
            let { node: e } = s;
            e ? e.replace(h) : h.deleteSelection();
          }
          let u = h.mapping.map(p),
            f = 0 == c.openStart && 0 == c.openEnd && 1 == c.content.childCount,
            m = h.doc;
          if ((f ? h.replaceRangeWith(u, u, c.content.firstChild) : h.replaceRange(u, u, c), h.doc.eq(m))) return;
          let g = h.doc.resolve(u);
          if (f && r.qv.isSelectable(c.content.firstChild) && g.nodeAfter && g.nodeAfter.sameMarkup(c.content.firstChild))
            h.setSelection(new r.qv(g));
          else {
            let t = h.mapping.map(p);
            h.mapping.maps[h.mapping.maps.length - 1].forEach((e, n, r, o) => (t = o)), h.setSelection(Ie(e, g, h.doc.resolve(t)));
          }
          e.focus(), e.dispatch(h.setMeta("uiEvent", "drop"));
        }),
        (st.focus = (e) => {
          (e.input.lastFocus = Date.now()),
            e.focused ||
              (e.domObserver.stop(),
              e.dom.classList.add("ProseMirror-focused"),
              e.domObserver.start(),
              (e.focused = !0),
              setTimeout(() => {
                e.docView && e.hasFocus() && !e.domObserver.currentSelection.eq(e.domSelectionRange()) && Ne(e);
              }, 20));
        }),
        (st.blur = (e, t) => {
          let n = t;
          e.focused &&
            (e.domObserver.stop(),
            e.dom.classList.remove("ProseMirror-focused"),
            e.domObserver.start(),
            n.relatedTarget && e.dom.contains(n.relatedTarget) && e.domObserver.currentSelection.clear(),
            (e.focused = !1));
        }),
        (st.beforeinput = (e, t) => {
          if (N && R && "deleteContentBackward" == t.inputType) {
            e.domObserver.flushSoon();
            let { domChangeCount: t } = e.input;
            setTimeout(() => {
              if (e.input.domChangeCount != t) return;
              if ((e.dom.blur(), e.focus(), e.someProp("handleKeyDown", (t) => t(e, g(8, "Backspace"))))) return;
              let { $cursor: n } = e.state.selection;
              n && n.pos > 0 && e.dispatch(e.state.tr.delete(n.pos - 1, n.pos).scrollIntoView());
            }, 50);
          }
        });
      for (let e in at) st[e] = at[e];
      function Pt(e, t) {
        if (e == t) return !0;
        for (let n in e) if (e[n] !== t[n]) return !1;
        for (let n in t) if (!(n in e)) return !1;
        return !0;
      }
      class Rt {
        constructor(e, t) {
          (this.toDOM = e), (this.spec = t || jt), (this.side = this.spec.side || 0);
        }
        map(e, t, n, r) {
          let { pos: o, deleted: i } = e.mapResult(t.from + r, this.side < 0 ? -1 : 1);
          return i ? null : new $t(o - n, o - n, this);
        }
        valid() {
          return !0;
        }
        eq(e) {
          return (
            this == e ||
            (e instanceof Rt && ((this.spec.key && this.spec.key == e.spec.key) || (this.toDOM == e.toDOM && Pt(this.spec, e.spec))))
          );
        }
        destroy(e) {
          this.spec.destroy && this.spec.destroy(e);
        }
      }
      class It {
        constructor(e, t) {
          (this.attrs = e), (this.spec = t || jt);
        }
        map(e, t, n, r) {
          let o = e.map(t.from + r, this.spec.inclusiveStart ? -1 : 1) - n,
            i = e.map(t.to + r, this.spec.inclusiveEnd ? 1 : -1) - n;
          return o >= i ? null : new $t(o, i, this);
        }
        valid(e, t) {
          return t.from < t.to;
        }
        eq(e) {
          return this == e || (e instanceof It && Pt(this.attrs, e.attrs) && Pt(this.spec, e.spec));
        }
        static is(e) {
          return e.type instanceof It;
        }
        destroy() {}
      }
      class Bt {
        constructor(e, t) {
          (this.attrs = e), (this.spec = t || jt);
        }
        map(e, t, n, r) {
          let o = e.mapResult(t.from + r, 1);
          if (o.deleted) return null;
          let i = e.mapResult(t.to + r, -1);
          return i.deleted || i.pos <= o.pos ? null : new $t(o.pos - n, i.pos - n, this);
        }
        valid(e, t) {
          let n,
            { index: r, offset: o } = e.content.findIndex(t.from);
          return o == t.from && !(n = e.child(r)).isText && o + n.nodeSize == t.to;
        }
        eq(e) {
          return this == e || (e instanceof Bt && Pt(this.attrs, e.attrs) && Pt(this.spec, e.spec));
        }
        destroy() {}
      }
      class $t {
        constructor(e, t, n) {
          (this.from = e), (this.to = t), (this.type = n);
        }
        copy(e, t) {
          return new $t(e, t, this.type);
        }
        eq(e, t = 0) {
          return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
        }
        map(e, t, n) {
          return this.type.map(e, this, t, n);
        }
        static widget(e, t, n) {
          return new $t(e, e, new Rt(t, n));
        }
        static inline(e, t, n, r) {
          return new $t(e, t, new It(n, r));
        }
        static node(e, t, n, r) {
          return new $t(e, t, new Bt(n, r));
        }
        get spec() {
          return this.type.spec;
        }
        get inline() {
          return this.type instanceof It;
        }
        get widget() {
          return this.type instanceof Rt;
        }
      }
      const zt = [],
        jt = {};
      class Vt {
        constructor(e, t) {
          (this.local = e.length ? e : zt), (this.children = t.length ? t : zt);
        }
        static create(e, t) {
          return t.length ? Jt(t, e, 0, jt) : Ft;
        }
        find(e, t, n) {
          let r = [];
          return this.findInner(null == e ? 0 : e, null == t ? 1e9 : t, r, 0, n), r;
        }
        findInner(e, t, n, r, o) {
          for (let i = 0; i < this.local.length; i++) {
            let s = this.local[i];
            s.from <= t && s.to >= e && (!o || o(s.spec)) && n.push(s.copy(s.from + r, s.to + r));
          }
          for (let i = 0; i < this.children.length; i += 3)
            if (this.children[i] < t && this.children[i + 1] > e) {
              let s = this.children[i] + 1;
              this.children[i + 2].findInner(e - s, t - s, n, r + s, o);
            }
        }
        map(e, t, n) {
          return this == Ft || 0 == e.maps.length ? this : this.mapInner(e, t, 0, 0, n || jt);
        }
        mapInner(e, t, n, r, o) {
          let i;
          for (let s = 0; s < this.local.length; s++) {
            let a = this.local[s].map(e, n, r);
            a && a.type.valid(t, a) ? (i || (i = [])).push(a) : o.onRemove && o.onRemove(this.local[s].spec);
          }
          return this.children.length
            ? (function (e, t, n, r, o, i, s) {
                let a = e.slice();
                for (let e = 0, t = i; e < n.maps.length; e++) {
                  let r = 0;
                  n.maps[e].forEach((e, n, i, s) => {
                    let l = s - i - (n - e);
                    for (let s = 0; s < a.length; s += 3) {
                      let c = a[s + 1];
                      if (c < 0 || e > c + t - r) continue;
                      let d = a[s] + t - r;
                      n >= d ? (a[s + 1] = e <= d ? -2 : -1) : i >= o && l && ((a[s] += l), (a[s + 1] += l));
                    }
                    r += l;
                  }),
                    (t = n.maps[e].map(t, -1));
                }
                let l = !1;
                for (let t = 0; t < a.length; t += 3)
                  if (a[t + 1] < 0) {
                    if (-2 == a[t + 1]) {
                      (l = !0), (a[t + 1] = -1);
                      continue;
                    }
                    let c = n.map(e[t] + i),
                      d = c - o;
                    if (d < 0 || d >= r.content.size) {
                      l = !0;
                      continue;
                    }
                    let p = n.map(e[t + 1] + i, -1) - o,
                      { index: h, offset: u } = r.content.findIndex(d),
                      f = r.maybeChild(h);
                    if (f && u == d && u + f.nodeSize == p) {
                      let r = a[t + 2].mapInner(n, f, c + 1, e[t] + i + 1, s);
                      r != Ft ? ((a[t] = d), (a[t + 1] = p), (a[t + 2] = r)) : ((a[t + 1] = -2), (l = !0));
                    } else l = !0;
                  }
                if (l) {
                  let l = (function (e, t, n, r, o, i, s) {
                      function a(e, t) {
                        for (let i = 0; i < e.local.length; i++) {
                          let a = e.local[i].map(r, o, t);
                          a ? n.push(a) : s.onRemove && s.onRemove(e.local[i].spec);
                        }
                        for (let n = 0; n < e.children.length; n += 3) a(e.children[n + 2], e.children[n] + t + 1);
                      }
                      for (let n = 0; n < e.length; n += 3) -1 == e[n + 1] && a(e[n + 2], t[n] + i + 1);
                      return n;
                    })(a, e, t, n, o, i, s),
                    c = Jt(l, r, 0, s);
                  t = c.local;
                  for (let e = 0; e < a.length; e += 3) a[e + 1] < 0 && (a.splice(e, 3), (e -= 3));
                  for (let e = 0, t = 0; e < c.children.length; e += 3) {
                    let n = c.children[e];
                    for (; t < a.length && a[t] < n; ) t += 3;
                    a.splice(t, 0, c.children[e], c.children[e + 1], c.children[e + 2]);
                  }
                }
                return new Vt(t.sort(_t), a);
              })(this.children, i || [], e, t, n, r, o)
            : i
            ? new Vt(i.sort(_t), zt)
            : Ft;
        }
        add(e, t) {
          return t.length ? (this == Ft ? Vt.create(e, t) : this.addInner(e, t, 0)) : this;
        }
        addInner(e, t, n) {
          let r,
            o = 0;
          e.forEach((e, i) => {
            let s,
              a = i + n;
            if ((s = qt(t, e, a))) {
              for (r || (r = this.children.slice()); o < r.length && r[o] < i; ) o += 3;
              r[o] == i ? (r[o + 2] = r[o + 2].addInner(e, s, a + 1)) : r.splice(o, 0, i, i + e.nodeSize, Jt(s, e, a + 1, jt)), (o += 3);
            }
          });
          let i = Ht(o ? Wt(t) : t, -n);
          for (let t = 0; t < i.length; t++) i[t].type.valid(e, i[t]) || i.splice(t--, 1);
          return new Vt(i.length ? this.local.concat(i).sort(_t) : this.local, r || this.children);
        }
        remove(e) {
          return 0 == e.length || this == Ft ? this : this.removeInner(e, 0);
        }
        removeInner(e, t) {
          let n = this.children,
            r = this.local;
          for (let r = 0; r < n.length; r += 3) {
            let o,
              i = n[r] + t,
              s = n[r + 1] + t;
            for (let t, n = 0; n < e.length; n++) (t = e[n]) && t.from > i && t.to < s && ((e[n] = null), (o || (o = [])).push(t));
            if (!o) continue;
            n == this.children && (n = this.children.slice());
            let a = n[r + 2].removeInner(o, i + 1);
            a != Ft ? (n[r + 2] = a) : (n.splice(r, 3), (r -= 3));
          }
          if (r.length)
            for (let n, o = 0; o < e.length; o++)
              if ((n = e[o]))
                for (let e = 0; e < r.length; e++) r[e].eq(n, t) && (r == this.local && (r = this.local.slice()), r.splice(e--, 1));
          return n == this.children && r == this.local ? this : r.length || n.length ? new Vt(r, n) : Ft;
        }
        forChild(e, t) {
          if (this == Ft) return this;
          if (t.isLeaf) return Vt.empty;
          let n, r;
          for (let t = 0; t < this.children.length; t += 3)
            if (this.children[t] >= e) {
              this.children[t] == e && (n = this.children[t + 2]);
              break;
            }
          let o = e + 1,
            i = o + t.content.size;
          for (let e = 0; e < this.local.length; e++) {
            let t = this.local[e];
            if (t.from < i && t.to > o && t.type instanceof It) {
              let e = Math.max(o, t.from) - o,
                n = Math.min(i, t.to) - o;
              e < n && (r || (r = [])).push(t.copy(e, n));
            }
          }
          if (r) {
            let e = new Vt(r.sort(_t), zt);
            return n ? new Lt([e, n]) : e;
          }
          return n || Ft;
        }
        eq(e) {
          if (this == e) return !0;
          if (!(e instanceof Vt) || this.local.length != e.local.length || this.children.length != e.children.length) return !1;
          for (let t = 0; t < this.local.length; t++) if (!this.local[t].eq(e.local[t])) return !1;
          for (let t = 0; t < this.children.length; t += 3)
            if (
              this.children[t] != e.children[t] ||
              this.children[t + 1] != e.children[t + 1] ||
              !this.children[t + 2].eq(e.children[t + 2])
            )
              return !1;
          return !0;
        }
        locals(e) {
          return Kt(this.localsInner(e));
        }
        localsInner(e) {
          if (this == Ft) return zt;
          if (e.inlineContent || !this.local.some(It.is)) return this.local;
          let t = [];
          for (let e = 0; e < this.local.length; e++) this.local[e].type instanceof It || t.push(this.local[e]);
          return t;
        }
      }
      (Vt.empty = new Vt([], [])), (Vt.removeOverlap = Kt);
      const Ft = Vt.empty;
      class Lt {
        constructor(e) {
          this.members = e;
        }
        map(e, t) {
          const n = this.members.map((n) => n.map(e, t, jt));
          return Lt.from(n);
        }
        forChild(e, t) {
          if (t.isLeaf) return Vt.empty;
          let n = [];
          for (let r = 0; r < this.members.length; r++) {
            let o = this.members[r].forChild(e, t);
            o != Ft && (o instanceof Lt ? (n = n.concat(o.members)) : n.push(o));
          }
          return Lt.from(n);
        }
        eq(e) {
          if (!(e instanceof Lt) || e.members.length != this.members.length) return !1;
          for (let t = 0; t < this.members.length; t++) if (!this.members[t].eq(e.members[t])) return !1;
          return !0;
        }
        locals(e) {
          let t,
            n = !0;
          for (let r = 0; r < this.members.length; r++) {
            let o = this.members[r].localsInner(e);
            if (o.length)
              if (t) {
                n && ((t = t.slice()), (n = !1));
                for (let e = 0; e < o.length; e++) t.push(o[e]);
              } else t = o;
          }
          return t ? Kt(n ? t : t.sort(_t)) : zt;
        }
        static from(e) {
          switch (e.length) {
            case 0:
              return Ft;
            case 1:
              return e[0];
            default:
              return new Lt(e.every((e) => e instanceof Vt) ? e : e.reduce((e, t) => e.concat(t instanceof Vt ? t : t.members), []));
          }
        }
      }
      function Ht(e, t) {
        if (!t || !e.length) return e;
        let n = [];
        for (let r = 0; r < e.length; r++) {
          let o = e[r];
          n.push(new $t(o.from + t, o.to + t, o.type));
        }
        return n;
      }
      function qt(e, t, n) {
        if (t.isLeaf) return null;
        let r = n + t.nodeSize,
          o = null;
        for (let t, i = 0; i < e.length; i++) (t = e[i]) && t.from > n && t.to < r && ((o || (o = [])).push(t), (e[i] = null));
        return o;
      }
      function Wt(e) {
        let t = [];
        for (let n = 0; n < e.length; n++) null != e[n] && t.push(e[n]);
        return t;
      }
      function Jt(e, t, n, r) {
        let o = [],
          i = !1;
        t.forEach((t, s) => {
          let a = qt(e, t, s + n);
          if (a) {
            i = !0;
            let e = Jt(a, t, n + s + 1, r);
            e != Ft && o.push(s, s + t.nodeSize, e);
          }
        });
        let s = Ht(i ? Wt(e) : e, -n).sort(_t);
        for (let e = 0; e < s.length; e++) s[e].type.valid(t, s[e]) || (r.onRemove && r.onRemove(s[e].spec), s.splice(e--, 1));
        return s.length || o.length ? new Vt(s, o) : Ft;
      }
      function _t(e, t) {
        return e.from - t.from || e.to - t.to;
      }
      function Kt(e) {
        let t = e;
        for (let n = 0; n < t.length - 1; n++) {
          let r = t[n];
          if (r.from != r.to)
            for (let o = n + 1; o < t.length; o++) {
              let i = t[o];
              if (i.from != r.from) {
                i.from < r.to && (t == e && (t = e.slice()), (t[n] = r.copy(r.from, i.from)), Yt(t, o, r.copy(i.from, r.to)));
                break;
              }
              i.to != r.to && (t == e && (t = e.slice()), (t[o] = i.copy(i.from, r.to)), Yt(t, o + 1, i.copy(r.to, i.to)));
            }
        }
        return t;
      }
      function Yt(e, t, n) {
        for (; t < e.length && _t(n, e[t]) > 0; ) t++;
        e.splice(t, 0, n);
      }
      function Ut(e) {
        let t = [];
        return (
          e.someProp("decorations", (n) => {
            let r = n(e.state);
            r && r != Ft && t.push(r);
          }),
          e.cursorWrapper && t.push(Vt.create(e.state.doc, [e.cursorWrapper.deco])),
          Lt.from(t)
        );
      }
      const Gt = { childList: !0, characterData: !0, characterDataOldValue: !0, attributes: !0, attributeOldValue: !0, subtree: !0 },
        Xt = S && O <= 11;
      class Zt {
        constructor() {
          (this.anchorNode = null), (this.anchorOffset = 0), (this.focusNode = null), (this.focusOffset = 0);
        }
        set(e) {
          (this.anchorNode = e.anchorNode),
            (this.anchorOffset = e.anchorOffset),
            (this.focusNode = e.focusNode),
            (this.focusOffset = e.focusOffset);
        }
        clear() {
          this.anchorNode = this.focusNode = null;
        }
        eq(e) {
          return (
            e.anchorNode == this.anchorNode &&
            e.anchorOffset == this.anchorOffset &&
            e.focusNode == this.focusNode &&
            e.focusOffset == this.focusOffset
          );
        }
      }
      class Qt {
        constructor(e, t) {
          (this.view = e),
            (this.handleDOMChange = t),
            (this.queue = []),
            (this.flushingSoon = -1),
            (this.observer = null),
            (this.currentSelection = new Zt()),
            (this.onCharData = null),
            (this.suppressingSelectionUpdates = !1),
            (this.observer =
              window.MutationObserver &&
              new window.MutationObserver((e) => {
                for (let t = 0; t < e.length; t++) this.queue.push(e[t]);
                S &&
                O <= 11 &&
                e.some(
                  (e) =>
                    ("childList" == e.type && e.removedNodes.length) ||
                    ("characterData" == e.type && e.oldValue.length > e.target.nodeValue.length)
                )
                  ? this.flushSoon()
                  : this.flush();
              })),
            Xt &&
              (this.onCharData = (e) => {
                this.queue.push({ target: e.target, type: "characterData", oldValue: e.prevValue }), this.flushSoon();
              }),
            (this.onSelectionChange = this.onSelectionChange.bind(this));
        }
        flushSoon() {
          this.flushingSoon < 0 &&
            (this.flushingSoon = window.setTimeout(() => {
              (this.flushingSoon = -1), this.flush();
            }, 20));
        }
        forceFlush() {
          this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), (this.flushingSoon = -1), this.flush());
        }
        start() {
          this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, Gt)),
            this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData),
            this.connectSelection();
        }
        stop() {
          if (this.observer) {
            let e = this.observer.takeRecords();
            if (e.length) {
              for (let t = 0; t < e.length; t++) this.queue.push(e[t]);
              window.setTimeout(() => this.flush(), 20);
            }
            this.observer.disconnect();
          }
          this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
        }
        connectSelection() {
          this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
        }
        disconnectSelection() {
          this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
        }
        suppressSelectionUpdates() {
          (this.suppressingSelectionUpdates = !0), setTimeout(() => (this.suppressingSelectionUpdates = !1), 50);
        }
        onSelectionChange() {
          if (Be(this.view)) {
            if (this.suppressingSelectionUpdates) return Ne(this.view);
            if (S && O <= 11 && !this.view.state.selection.empty) {
              let e = this.view.domSelectionRange();
              if (e.focusNode && d(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)) return this.flushSoon();
            }
            this.flush();
          }
        }
        setCurSelection() {
          this.currentSelection.set(this.view.domSelectionRange());
        }
        ignoreSelectionChange(e) {
          if (!e.focusNode) return !0;
          let t,
            n = new Set();
          for (let t = e.focusNode; t; t = a(t)) n.add(t);
          for (let r = e.anchorNode; r; r = a(r))
            if (n.has(r)) {
              t = r;
              break;
            }
          let r = t && this.view.docView.nearestDesc(t);
          return r && r.ignoreMutation({ type: "selection", target: 3 == t.nodeType ? t.parentNode : t })
            ? (this.setCurSelection(), !0)
            : void 0;
        }
        pendingRecords() {
          if (this.observer) for (let e of this.observer.takeRecords()) this.queue.push(e);
          return this.queue;
        }
        flush() {
          let { view: e } = this;
          if (!e.docView || this.flushingSoon > -1) return;
          let t = this.pendingRecords();
          t.length && (this.queue = []);
          let n = e.domSelectionRange(),
            o = !this.suppressingSelectionUpdates && !this.currentSelection.eq(n) && Be(e) && !this.ignoreSelectionChange(n),
            i = -1,
            s = -1,
            a = !1,
            l = [];
          if (e.editable)
            for (let e = 0; e < t.length; e++) {
              let n = this.registerMutation(t[e], l);
              n && ((i = i < 0 ? n.from : Math.min(n.from, i)), (s = s < 0 ? n.to : Math.max(n.to, s)), n.typeOver && (a = !0));
            }
          if (M && l.length > 1) {
            let e = l.filter((e) => "BR" == e.nodeName);
            if (2 == e.length) {
              let t = e[0],
                n = e[1];
              t.parentNode && t.parentNode.parentNode == n.parentNode ? n.remove() : t.remove();
            }
          }
          let c = null;
          i < 0 &&
          o &&
          e.input.lastFocus > Date.now() - 200 &&
          Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 &&
          m(n) &&
          (c = Me(e)) &&
          c.eq(r.Y1.near(e.state.doc.resolve(0), 1))
            ? ((e.input.lastFocus = 0), Ne(e), this.currentSelection.set(n), e.scrollToSelection())
            : (i > -1 || o) &&
              (i > -1 &&
                (e.docView.markDirty(i, s),
                (function (e) {
                  if (
                    !en.has(e) &&
                    (en.set(e, null), -1 !== ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(e.dom).whiteSpace))
                  ) {
                    if (((e.requiresGeckoHackNode = M), tn)) return;
                    console.warn(
                      "ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."
                    ),
                      (tn = !0);
                  }
                })(e)),
              this.handleDOMChange(i, s, a, l),
              e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(n) || Ne(e),
              this.currentSelection.set(n));
        }
        registerMutation(e, t) {
          if (t.indexOf(e.target) > -1) return null;
          let n = this.view.docView.nearestDesc(e.target);
          if (
            "attributes" == e.type &&
            (n == this.view.docView ||
              "contenteditable" == e.attributeName ||
              ("style" == e.attributeName && !e.oldValue && !e.target.getAttribute("style")))
          )
            return null;
          if (!n || n.ignoreMutation(e)) return null;
          if ("childList" == e.type) {
            for (let n = 0; n < e.addedNodes.length; n++) t.push(e.addedNodes[n]);
            if (n.contentDOM && n.contentDOM != n.dom && !n.contentDOM.contains(e.target)) return { from: n.posBefore, to: n.posAfter };
            let r = e.previousSibling,
              o = e.nextSibling;
            if (S && O <= 11 && e.addedNodes.length)
              for (let t = 0; t < e.addedNodes.length; t++) {
                let { previousSibling: n, nextSibling: i } = e.addedNodes[t];
                (!n || Array.prototype.indexOf.call(e.addedNodes, n) < 0) && (r = n),
                  (!i || Array.prototype.indexOf.call(e.addedNodes, i) < 0) && (o = i);
              }
            let i = r && r.parentNode == e.target ? s(r) + 1 : 0,
              a = n.localPosFromDOM(e.target, i, -1),
              l = o && o.parentNode == e.target ? s(o) : e.target.childNodes.length;
            return { from: a, to: n.localPosFromDOM(e.target, l, 1) };
          }
          return "attributes" == e.type
            ? { from: n.posAtStart - n.border, to: n.posAtEnd + n.border }
            : { from: n.posAtStart, to: n.posAtEnd, typeOver: e.target.nodeValue == e.oldValue };
        }
      }
      let en = new WeakMap(),
        tn = !1;
      function nn(e) {
        let t = e.pmViewDesc;
        if (t) return t.parseRule();
        if ("BR" == e.nodeName && e.parentNode) {
          if (E && /^(ul|ol)$/i.test(e.parentNode.nodeName)) {
            let e = document.createElement("div");
            return e.appendChild(document.createElement("li")), { skip: e };
          }
          if (e.parentNode.lastChild == e || (E && /^(tr|table)$/i.test(e.parentNode.nodeName))) return { ignore: !0 };
        } else if ("IMG" == e.nodeName && e.getAttribute("mark-placeholder")) return { ignore: !0 };
        return null;
      }
      const rn =
        /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
      function on(e, t, n) {
        return Math.max(n.anchor, n.head) > t.content.size ? null : Ie(e, t.resolve(n.anchor), t.resolve(n.head));
      }
      function sn(e, t, n) {
        let r = e.depth,
          o = t ? e.end() : e.pos;
        for (; r > 0 && (t || e.indexAfter(r) == e.node(r).childCount); ) r--, o++, (t = !1);
        if (n) {
          let t = e.node(r).maybeChild(e.indexAfter(r));
          for (; t && !t.isLeaf; ) (t = t.firstChild), o++;
        }
        return o;
      }
      function an(e) {
        if (2 != e.length) return !1;
        let t = e.charCodeAt(0),
          n = e.charCodeAt(1);
        return t >= 56320 && t <= 57343 && n >= 55296 && n <= 56319;
      }
      class ln {
        constructor(e, t) {
          (this._root = null),
            (this.focused = !1),
            (this.trackWrites = null),
            (this.mounted = !1),
            (this.markCursor = null),
            (this.cursorWrapper = null),
            (this.lastSelectedViewDesc = void 0),
            (this.input = new ct()),
            (this.prevDirectPlugins = []),
            (this.pluginViews = []),
            (this.requiresGeckoHackNode = !1),
            (this.dragging = null),
            (this._props = t),
            (this.state = t.state),
            (this.directPlugins = t.plugins || []),
            this.directPlugins.forEach(un),
            (this.dispatch = this.dispatch.bind(this)),
            (this.dom = (e && e.mount) || document.createElement("div")),
            e && (e.appendChild ? e.appendChild(this.dom) : "function" == typeof e ? e(this.dom) : e.mount && (this.mounted = !0)),
            (this.editable = pn(this)),
            dn(this),
            (this.nodeViews = hn(this)),
            (this.docView = ce(this.state.doc, cn(this), Ut(this), this.dom, this)),
            (this.domObserver = new Qt(this, (e, t, n, i) =>
              (function (e, t, n, i, s) {
                let a = e.input.compositionPendingChanges || (e.composing ? e.input.compositionID : 0);
                if (((e.input.compositionPendingChanges = 0), t < 0)) {
                  let t = e.input.lastSelectionTime > Date.now() - 50 ? e.input.lastSelectionOrigin : null,
                    n = Me(e, t);
                  if (n && !e.state.selection.eq(n)) {
                    if (
                      N &&
                      R &&
                      13 === e.input.lastKeyCode &&
                      Date.now() - 100 < e.input.lastKeyCodeTime &&
                      e.someProp("handleKeyDown", (t) => t(e, g(13, "Enter")))
                    )
                      return;
                    let r = e.state.tr.setSelection(n);
                    "pointer" == t ? r.setMeta("pointer", !0) : "key" == t && r.scrollIntoView(),
                      a && r.setMeta("composition", a),
                      e.dispatch(r);
                  }
                  return;
                }
                let l = e.state.doc.resolve(t),
                  c = l.sharedDepth(n);
                (t = l.before(c + 1)), (n = e.state.doc.resolve(n).after(c + 1));
                let d,
                  p,
                  h = e.state.selection,
                  u = (function (e, t, n) {
                    let r,
                      { node: i, fromOffset: s, toOffset: a, from: l, to: c } = e.docView.parseRange(t, n),
                      d = e.domSelectionRange(),
                      p = d.anchorNode;
                    if (
                      (p &&
                        e.dom.contains(1 == p.nodeType ? p : p.parentNode) &&
                        ((r = [{ node: p, offset: d.anchorOffset }]), m(d) || r.push({ node: d.focusNode, offset: d.focusOffset })),
                      N && 8 === e.input.lastKeyCode)
                    )
                      for (let e = a; e > s; e--) {
                        let t = i.childNodes[e - 1],
                          n = t.pmViewDesc;
                        if ("BR" == t.nodeName && !n) {
                          a = e;
                          break;
                        }
                        if (!n || n.size) break;
                      }
                    let h = e.state.doc,
                      u = e.someProp("domParser") || o.aw.fromSchema(e.state.schema),
                      f = h.resolve(l),
                      g = null,
                      y = u.parse(i, {
                        topNode: f.parent,
                        topMatch: f.parent.contentMatchAt(f.index()),
                        topOpen: !0,
                        from: s,
                        to: a,
                        preserveWhitespace: "pre" != f.parent.type.whitespace || "full",
                        findPositions: r,
                        ruleFromNode: nn,
                        context: f
                      });
                    if (r && null != r[0].pos) {
                      let e = r[0].pos,
                        t = r[1] && r[1].pos;
                      null == t && (t = e), (g = { anchor: e + l, head: t + l });
                    }
                    return { doc: y, sel: g, from: l, to: c };
                  })(e, t, n),
                  f = e.state.doc,
                  y = f.slice(u.from, u.to);
                8 === e.input.lastKeyCode && Date.now() - 100 < e.input.lastKeyCodeTime
                  ? ((d = e.state.selection.to), (p = "end"))
                  : ((d = e.state.selection.from), (p = "start")),
                  (e.input.lastKeyCode = null);
                let v = (function (e, t, n, r, o) {
                  let i = e.findDiffStart(t, n);
                  if (null == i) return null;
                  let { a: s, b: a } = e.findDiffEnd(t, n + e.size, n + t.size);
                  if (("end" == o && (r -= s + Math.max(0, i - Math.min(s, a)) - i), s < i && e.size < t.size)) {
                    let e = r <= i && r >= s ? i - r : 0;
                    (i -= e), i && i < t.size && an(t.textBetween(i - 1, i + 1)) && (i += e ? 1 : -1), (a = i + (a - s)), (s = i);
                  } else if (a < i) {
                    let t = r <= i && r >= a ? i - r : 0;
                    (i -= t), i && i < e.size && an(e.textBetween(i - 1, i + 1)) && (i += t ? 1 : -1), (s = i + (s - a)), (a = i);
                  }
                  return { start: i, endA: s, endB: a };
                })(y.content, u.doc.content, u.from, d, p);
                if (
                  ((D && e.input.lastIOSEnter > Date.now() - 225) || R) &&
                  s.some((e) => 1 == e.nodeType && !rn.test(e.nodeName)) &&
                  (!v || v.endA >= v.endB) &&
                  e.someProp("handleKeyDown", (t) => t(e, g(13, "Enter")))
                )
                  return void (e.input.lastIOSEnter = 0);
                if (!v) {
                  if (
                    !(i && h instanceof r.Bs && !h.empty && h.$head.sameParent(h.$anchor)) ||
                    e.composing ||
                    (u.sel && u.sel.anchor != u.sel.head)
                  ) {
                    if (u.sel) {
                      let t = on(e, e.state.doc, u.sel);
                      if (t && !t.eq(e.state.selection)) {
                        let n = e.state.tr.setSelection(t);
                        a && n.setMeta("composition", a), e.dispatch(n);
                      }
                    }
                    return;
                  }
                  v = { start: h.from, endA: h.to, endB: h.to };
                }
                if (N && e.cursorWrapper && u.sel && u.sel.anchor == e.cursorWrapper.deco.from && u.sel.head == u.sel.anchor) {
                  let e = v.endB - v.start;
                  u.sel = { anchor: u.sel.anchor + e, head: u.sel.anchor + e };
                }
                e.input.domChangeCount++,
                  e.state.selection.from < e.state.selection.to &&
                    v.start == v.endB &&
                    e.state.selection instanceof r.Bs &&
                    (v.start > e.state.selection.from && v.start <= e.state.selection.from + 2 && e.state.selection.from >= u.from
                      ? (v.start = e.state.selection.from)
                      : v.endA < e.state.selection.to &&
                        v.endA >= e.state.selection.to - 2 &&
                        e.state.selection.to <= u.to &&
                        ((v.endB += e.state.selection.to - v.endA), (v.endA = e.state.selection.to))),
                  S &&
                    O <= 11 &&
                    v.endB == v.start + 1 &&
                    v.endA == v.start &&
                    v.start > u.from &&
                    "  " == u.doc.textBetween(v.start - u.from - 1, v.start - u.from + 1) &&
                    (v.start--, v.endA--, v.endB--);
                let w,
                  b = u.doc.resolveNoCache(v.start - u.from),
                  x = u.doc.resolveNoCache(v.endB - u.from),
                  k = f.resolve(v.start),
                  M = b.sameParent(x) && b.parent.inlineContent && k.end() >= v.endA;
                if (
                  ((D && e.input.lastIOSEnter > Date.now() - 225 && (!M || s.some((e) => "DIV" == e.nodeName || "P" == e.nodeName))) ||
                    (!M &&
                      b.pos < u.doc.content.size &&
                      !b.sameParent(x) &&
                      (w = r.Y1.findFrom(u.doc.resolve(b.pos + 1), 1, !0)) &&
                      w.head == x.pos)) &&
                  e.someProp("handleKeyDown", (t) => t(e, g(13, "Enter")))
                )
                  return void (e.input.lastIOSEnter = 0);
                if (
                  e.state.selection.anchor > v.start &&
                  (function (e, t, n, r, o) {
                    if (!r.parent.isTextblock || n - t <= o.pos - r.pos || sn(r, !0, !1) < o.pos) return !1;
                    let i = e.resolve(t);
                    if (i.parentOffset < i.parent.content.size || !i.parent.isTextblock) return !1;
                    let s = e.resolve(sn(i, !0, !0));
                    return (
                      !(!s.parent.isTextblock || s.pos > n || sn(s, !0, !1) < n) &&
                      r.parent.content.cut(r.parentOffset).eq(s.parent.content)
                    );
                  })(f, v.start, v.endA, b, x) &&
                  e.someProp("handleKeyDown", (t) => t(e, g(8, "Backspace")))
                )
                  return void (R && N && e.domObserver.suppressSelectionUpdates());
                N && R && v.endB == v.start && (e.input.lastAndroidDelete = Date.now()),
                  R &&
                    !M &&
                    b.start() != x.start() &&
                    0 == x.parentOffset &&
                    b.depth == x.depth &&
                    u.sel &&
                    u.sel.anchor == u.sel.head &&
                    u.sel.head == v.endA &&
                    ((v.endB -= 2),
                    (x = u.doc.resolveNoCache(v.endB - u.from)),
                    setTimeout(() => {
                      e.someProp("handleKeyDown", function (t) {
                        return t(e, g(13, "Enter"));
                      });
                    }, 20));
                let C,
                  T,
                  E,
                  A = v.start,
                  P = v.endA;
                if (M)
                  if (b.pos == x.pos)
                    S && O <= 11 && 0 == b.parentOffset && (e.domObserver.suppressSelectionUpdates(), setTimeout(() => Ne(e), 20)),
                      (C = e.state.tr.delete(A, P)),
                      (T = f.resolve(v.start).marksAcross(f.resolve(v.endA)));
                  else if (
                    v.endA == v.endB &&
                    (E = (function (e, t) {
                      let n,
                        r,
                        i,
                        s = e.firstChild.marks,
                        a = t.firstChild.marks,
                        l = s,
                        c = a;
                      for (let e = 0; e < a.length; e++) l = a[e].removeFromSet(l);
                      for (let e = 0; e < s.length; e++) c = s[e].removeFromSet(c);
                      if (1 == l.length && 0 == c.length) (r = l[0]), (n = "add"), (i = (e) => e.mark(r.addToSet(e.marks)));
                      else {
                        if (0 != l.length || 1 != c.length) return null;
                        (r = c[0]), (n = "remove"), (i = (e) => e.mark(r.removeFromSet(e.marks)));
                      }
                      let d = [];
                      for (let e = 0; e < t.childCount; e++) d.push(i(t.child(e)));
                      if (o.HY.from(d).eq(e)) return { mark: r, type: n };
                    })(b.parent.content.cut(b.parentOffset, x.parentOffset), k.parent.content.cut(k.parentOffset, v.endA - k.start())))
                  )
                    (C = e.state.tr), "add" == E.type ? C.addMark(A, P, E.mark) : C.removeMark(A, P, E.mark);
                  else if (b.parent.child(b.index()).isText && b.index() == x.index() - (x.textOffset ? 0 : 1)) {
                    let t = b.parent.textBetween(b.parentOffset, x.parentOffset);
                    if (e.someProp("handleTextInput", (n) => n(e, A, P, t))) return;
                    C = e.state.tr.insertText(t, A, P);
                  }
                if ((C || (C = e.state.tr.replace(A, P, u.doc.slice(v.start - u.from, v.endB - u.from))), u.sel)) {
                  let t = on(e, C.doc, u.sel);
                  t &&
                    !(
                      (N &&
                        R &&
                        e.composing &&
                        t.empty &&
                        (v.start != v.endB || e.input.lastAndroidDelete < Date.now() - 100) &&
                        (t.head == A || t.head == C.mapping.map(P) - 1)) ||
                      (S && t.empty && t.head == A)
                    ) &&
                    C.setSelection(t);
                }
                T && C.ensureMarks(T), a && C.setMeta("composition", a), e.dispatch(C.scrollIntoView());
              })(this, e, t, n, i)
            )),
            this.domObserver.start(),
            (function (e) {
              for (let t in st) {
                let n = st[t];
                e.dom.addEventListener(
                  t,
                  (e.input.eventHandlers[t] = (t) => {
                    !ut(e, t) || ht(e, t) || (!e.editable && t.type in at) || n(e, t);
                  }),
                  lt[t] ? { passive: !0 } : void 0
                );
              }
              E && e.dom.addEventListener("input", () => null), pt(e);
            })(this),
            this.updatePluginViews();
        }
        get composing() {
          return this.input.composing;
        }
        get props() {
          if (this._props.state != this.state) {
            let e = this._props;
            this._props = {};
            for (let t in e) this._props[t] = e[t];
            this._props.state = this.state;
          }
          return this._props;
        }
        update(e) {
          e.handleDOMEvents != this._props.handleDOMEvents && pt(this);
          let t = this._props;
          (this._props = e), e.plugins && (e.plugins.forEach(un), (this.directPlugins = e.plugins)), this.updateStateInner(e.state, t);
        }
        setProps(e) {
          let t = {};
          for (let e in this._props) t[e] = this._props[e];
          t.state = this.state;
          for (let n in e) t[n] = e[n];
          this.update(t);
        }
        updateState(e) {
          this.updateStateInner(e, this._props);
        }
        updateStateInner(e, t) {
          var n;
          let r = this.state,
            o = !1,
            i = !1;
          e.storedMarks && this.composing && (Mt(this), (i = !0)), (this.state = e);
          let s = r.plugins != e.plugins || this._props.plugins != t.plugins;
          if (s || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
            let e = hn(this);
            (function (e, t) {
              let n = 0,
                r = 0;
              for (let r in e) {
                if (e[r] != t[r]) return !0;
                n++;
              }
              for (let e in t) r++;
              return n != r;
            })(e, this.nodeViews) && ((this.nodeViews = e), (o = !0));
          }
          (s || t.handleDOMEvents != this._props.handleDOMEvents) && pt(this), (this.editable = pn(this)), dn(this);
          let a = Ut(this),
            l = cn(this),
            c =
              r.plugins == e.plugins || r.doc.eq(e.doc)
                ? e.scrollToSelection > r.scrollToSelection
                  ? "to selection"
                  : "preserve"
                : "reset",
            p = o || !this.docView.matchesNode(e.doc, l, a);
          (!p && e.selection.eq(r.selection)) || (i = !0);
          let h =
            "preserve" == c &&
            i &&
            null == this.dom.style.overflowAnchor &&
            (function (e) {
              let t,
                n,
                r = e.dom.getBoundingClientRect(),
                o = Math.max(0, r.top);
              for (let i = (r.left + r.right) / 2, s = o + 1; s < Math.min(innerHeight, r.bottom); s += 5) {
                let r = e.root.elementFromPoint(i, s);
                if (!r || r == e.dom || !e.dom.contains(r)) continue;
                let a = r.getBoundingClientRect();
                if (a.top >= o - 20) {
                  (t = r), (n = a.top);
                  break;
                }
              }
              return { refDOM: t, refTop: n, stack: F(e.dom) };
            })(this);
          if (i) {
            this.domObserver.stop();
            let t =
              p &&
              (S || N) &&
              !this.composing &&
              !r.selection.empty &&
              !e.selection.empty &&
              (function (e, t) {
                let n = Math.min(e.$anchor.sharedDepth(e.head), t.$anchor.sharedDepth(t.head));
                return e.$anchor.start(n) != t.$anchor.start(n);
              })(r.selection, e.selection);
            if (p) {
              let n = N ? (this.trackWrites = this.domSelectionRange().focusNode) : null;
              (!o && this.docView.update(e.doc, l, a, this)) ||
                (this.docView.updateOuterDeco([]), this.docView.destroy(), (this.docView = ce(e.doc, l, a, this.dom, this))),
                n && !this.trackWrites && (t = !0);
            }
            t ||
            !(
              this.input.mouseDown &&
              this.domObserver.currentSelection.eq(this.domSelectionRange()) &&
              (function (e) {
                let t = e.docView.domFromPos(e.state.selection.anchor, 0),
                  n = e.domSelectionRange();
                return d(t.node, t.offset, n.anchorNode, n.anchorOffset);
              })(this)
            )
              ? Ne(this, t)
              : (Pe(this, e.selection), this.domObserver.setCurSelection()),
              this.domObserver.start();
          }
          this.updatePluginViews(r),
            (null === (n = this.dragging) || void 0 === n ? void 0 : n.node) &&
              !r.doc.eq(e.doc) &&
              this.updateDraggedNode(this.dragging, r),
            "reset" == c
              ? (this.dom.scrollTop = 0)
              : "to selection" == c
              ? this.scrollToSelection()
              : h &&
                (function ({ refDOM: e, refTop: t, stack: n }) {
                  let r = e ? e.getBoundingClientRect().top : 0;
                  L(n, 0 == r ? 0 : r - t);
                })(h);
        }
        scrollToSelection() {
          let e = this.domSelectionRange().focusNode;
          if (this.someProp("handleScrollToSelection", (e) => e(this)));
          else if (this.state.selection instanceof r.qv) {
            let t = this.docView.domAfterPos(this.state.selection.from);
            1 == t.nodeType && V(this, t.getBoundingClientRect(), e);
          } else V(this, this.coordsAtPos(this.state.selection.head, 1), e);
        }
        destroyPluginViews() {
          let e;
          for (; (e = this.pluginViews.pop()); ) e.destroy && e.destroy();
        }
        updatePluginViews(e) {
          if (e && e.plugins == this.state.plugins && this.directPlugins == this.prevDirectPlugins)
            for (let t = 0; t < this.pluginViews.length; t++) {
              let n = this.pluginViews[t];
              n.update && n.update(this, e);
            }
          else {
            (this.prevDirectPlugins = this.directPlugins), this.destroyPluginViews();
            for (let e = 0; e < this.directPlugins.length; e++) {
              let t = this.directPlugins[e];
              t.spec.view && this.pluginViews.push(t.spec.view(this));
            }
            for (let e = 0; e < this.state.plugins.length; e++) {
              let t = this.state.plugins[e];
              t.spec.view && this.pluginViews.push(t.spec.view(this));
            }
          }
        }
        updateDraggedNode(e, t) {
          let n = e.node,
            o = -1;
          if (this.state.doc.nodeAt(n.from) == n.node) o = n.from;
          else {
            let e = n.from + (this.state.doc.content.size - t.doc.content.size);
            (e > 0 && this.state.doc.nodeAt(e)) == n.node && (o = e);
          }
          this.dragging = new Dt(e.slice, e.move, o < 0 ? void 0 : r.qv.create(this.state.doc, o));
        }
        someProp(e, t) {
          let n,
            r = this._props && this._props[e];
          if (null != r && (n = t ? t(r) : r)) return n;
          for (let r = 0; r < this.directPlugins.length; r++) {
            let o = this.directPlugins[r].props[e];
            if (null != o && (n = t ? t(o) : o)) return n;
          }
          let o = this.state.plugins;
          if (o)
            for (let r = 0; r < o.length; r++) {
              let i = o[r].props[e];
              if (null != i && (n = t ? t(i) : i)) return n;
            }
        }
        hasFocus() {
          if (S) {
            let e = this.root.activeElement;
            if (e == this.dom) return !0;
            if (!e || !this.dom.contains(e)) return !1;
            for (; e && this.dom != e && this.dom.contains(e); ) {
              if ("false" == e.contentEditable) return !1;
              e = e.parentElement;
            }
            return !0;
          }
          return this.root.activeElement == this.dom;
        }
        focus() {
          this.domObserver.stop(),
            this.editable &&
              (function (e) {
                if (e.setActive) return e.setActive();
                if (H) return e.focus(H);
                let t = F(e);
                e.focus(
                  null == H
                    ? {
                        get preventScroll() {
                          return (H = { preventScroll: !0 }), !0;
                        }
                      }
                    : void 0
                ),
                  H || ((H = !1), L(t, 0));
              })(this.dom),
            Ne(this),
            this.domObserver.start();
        }
        get root() {
          let e = this._root;
          if (null == e)
            for (let e = this.dom.parentNode; e; e = e.parentNode)
              if (9 == e.nodeType || (11 == e.nodeType && e.host))
                return e.getSelection || (Object.getPrototypeOf(e).getSelection = () => e.ownerDocument.getSelection()), (this._root = e);
          return e || document;
        }
        updateRoot() {
          this._root = null;
        }
        posAtCoords(e) {
          return _(this, e);
        }
        coordsAtPos(e, t = 1) {
          return G(this, e, t);
        }
        domAtPos(e, t = 0) {
          return this.docView.domFromPos(e, t);
        }
        nodeDOM(e) {
          let t = this.docView.descAt(e);
          return t ? t.nodeDOM : null;
        }
        posAtDOM(e, t, n = -1) {
          let r = this.docView.posFromDOM(e, t, n);
          if (null == r) throw new RangeError("DOM position not inside the editor");
          return r;
        }
        endOfTextblock(e, t) {
          return (function (e, t, n) {
            return te == t && ne == n
              ? re
              : ((te = t),
                (ne = n),
                (re =
                  "up" == n || "down" == n
                    ? (function (e, t, n) {
                        let r = t.selection,
                          o = "up" == n ? r.$from : r.$to;
                        return Q(e, t, () => {
                          let { node: t } = e.docView.domFromPos(o.pos, "up" == n ? -1 : 1);
                          for (;;) {
                            let n = e.docView.nearestDesc(t, !0);
                            if (!n) break;
                            if (n.node.isBlock) {
                              t = n.contentDOM || n.dom;
                              break;
                            }
                            t = n.dom.parentNode;
                          }
                          let r = G(e, o.pos, 1);
                          for (let e = t.firstChild; e; e = e.nextSibling) {
                            let t;
                            if (1 == e.nodeType) t = e.getClientRects();
                            else {
                              if (3 != e.nodeType) continue;
                              t = c(e, 0, e.nodeValue.length).getClientRects();
                            }
                            for (let e = 0; e < t.length; e++) {
                              let o = t[e];
                              if (
                                o.bottom > o.top + 1 &&
                                ("up" == n ? r.top - o.top > 2 * (o.bottom - r.top) : o.bottom - r.bottom > 2 * (r.bottom - o.top))
                              )
                                return !1;
                            }
                          }
                          return !0;
                        });
                      })(e, t, n)
                    : (function (e, t, n) {
                        let { $head: r } = t.selection;
                        if (!r.parent.isTextblock) return !1;
                        let o = r.parentOffset,
                          i = !o,
                          s = o == r.parent.content.size,
                          a = e.domSelection();
                        return ee.test(r.parent.textContent) && a.modify
                          ? Q(e, t, () => {
                              let { focusNode: t, focusOffset: o, anchorNode: i, anchorOffset: s } = e.domSelectionRange(),
                                l = a.caretBidiLevel;
                              a.modify("move", n, "character");
                              let c = r.depth ? e.docView.domAfterPos(r.before()) : e.dom,
                                { focusNode: d, focusOffset: p } = e.domSelectionRange(),
                                h = (d && !c.contains(1 == d.nodeType ? d : d.parentNode)) || (t == d && o == p);
                              try {
                                a.collapse(i, s), t && (t != i || o != s) && a.extend && a.extend(t, o);
                              } catch (e) {}
                              return null != l && (a.caretBidiLevel = l), h;
                            })
                          : "left" == n || "backward" == n
                          ? i
                          : s;
                      })(e, t, n)));
          })(this, t || this.state, e);
        }
        pasteHTML(e, t) {
          return Tt(this, "", e, !1, t || new ClipboardEvent("paste"));
        }
        pasteText(e, t) {
          return Tt(this, e, null, !0, t || new ClipboardEvent("paste"));
        }
        destroy() {
          this.docView &&
            ((function (e) {
              e.domObserver.stop();
              for (let t in e.input.eventHandlers) e.dom.removeEventListener(t, e.input.eventHandlers[t]);
              clearTimeout(e.input.composingTimeout), clearTimeout(e.input.lastIOSEnterFallbackTimeout);
            })(this),
            this.destroyPluginViews(),
            this.mounted
              ? (this.docView.update(this.state.doc, [], Ut(this), this), (this.dom.textContent = ""))
              : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom),
            this.docView.destroy(),
            (this.docView = null));
        }
        get isDestroyed() {
          return null == this.docView;
        }
        dispatchEvent(e) {
          return (function (e, t) {
            ht(e, t) || !st[t.type] || (!e.editable && t.type in at) || st[t.type](e, t);
          })(this, e);
        }
        dispatch(e) {
          let t = this._props.dispatchTransaction;
          t ? t.call(this, e) : this.updateState(this.state.apply(e));
        }
        domSelectionRange() {
          return E &&
            11 === this.root.nodeType &&
            (function (e) {
              let t = e.activeElement;
              for (; t && t.shadowRoot; ) t = t.shadowRoot.activeElement;
              return t;
            })(this.dom.ownerDocument) == this.dom
            ? (function (e) {
                let t;
                function n(e) {
                  e.preventDefault(), e.stopImmediatePropagation(), (t = e.getTargetRanges()[0]);
                }
                e.dom.addEventListener("beforeinput", n, !0),
                  document.execCommand("indent"),
                  e.dom.removeEventListener("beforeinput", n, !0);
                let r = t.startContainer,
                  o = t.startOffset,
                  i = t.endContainer,
                  s = t.endOffset,
                  a = e.domAtPos(e.state.selection.anchor);
                return (
                  d(a.node, a.offset, i, s) && ([r, o, i, s] = [i, s, r, o]),
                  { anchorNode: r, anchorOffset: o, focusNode: i, focusOffset: s }
                );
              })(this)
            : this.domSelection();
        }
        domSelection() {
          return this.root.getSelection();
        }
      }
      function cn(e) {
        let t = Object.create(null);
        return (
          (t.class = "ProseMirror"),
          (t.contenteditable = String(e.editable)),
          e.someProp("attributes", (n) => {
            if (("function" == typeof n && (n = n(e.state)), n))
              for (let e in n)
                "class" == e
                  ? (t.class += " " + n[e])
                  : "style" == e
                  ? (t.style = (t.style ? t.style + ";" : "") + n[e])
                  : t[e] || "contenteditable" == e || "nodeName" == e || (t[e] = String(n[e]));
          }),
          t.translate || (t.translate = "no"),
          [$t.node(0, e.state.doc.content.size, t)]
        );
      }
      function dn(e) {
        if (e.markCursor) {
          let t = document.createElement("img");
          (t.className = "ProseMirror-separator"),
            t.setAttribute("mark-placeholder", "true"),
            t.setAttribute("alt", ""),
            (e.cursorWrapper = { dom: t, deco: $t.widget(e.state.selection.head, t, { raw: !0, marks: e.markCursor }) });
        } else e.cursorWrapper = null;
      }
      function pn(e) {
        return !e.someProp("editable", (t) => !1 === t(e.state));
      }
      function hn(e) {
        let t = Object.create(null);
        function n(e) {
          for (let n in e) Object.prototype.hasOwnProperty.call(t, n) || (t[n] = e[n]);
        }
        return e.someProp("nodeViews", n), e.someProp("markViews", n), t;
      }
      function un(e) {
        if (e.spec.state || e.spec.filterTransaction || e.spec.appendTransaction)
          throw new RangeError("Plugins passed directly to the view must not have a state component");
      }
    }
  }
]);
