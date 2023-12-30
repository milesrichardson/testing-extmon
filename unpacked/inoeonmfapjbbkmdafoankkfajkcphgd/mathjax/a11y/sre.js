"use strict";
(function () {
  var __webpack_modules__ = {
      706: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = new Map();
        t.default = n;
      },
      8905: function (e, t, n) {
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n);
                  var i = Object.getOwnPropertyDescriptor(t, n);
                  (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                    (i = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      }
                    }),
                    Object.defineProperty(e, r, i);
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
                }),
          i =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", { enumerable: !0, value: t });
                }
              : function (e, t) {
                  e.default = t;
                }),
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
              return i(t, e), t;
            },
          s =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (i, o) {
                function s(e) {
                  try {
                    c(r.next(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function a(e) {
                  try {
                    c(r.throw(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function c(e) {
                  var t;
                  e.done
                    ? i(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(s, a);
                }
                c((r = r.apply(e, t || [])).next());
              });
            },
          a =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                i,
                o,
                s = {
                  label: 0,
                  sent: function () {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                  },
                  trys: [],
                  ops: []
                };
              return (
                (o = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function a(o) {
                return function (a) {
                  return (function (o) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; s; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) &&
                            !(i = i.call(r, o[1])).done)
                        )
                          return i;
                        switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                          case 0:
                          case 1:
                            i = o;
                            break;
                          case 4:
                            return s.label++, { value: o[1], done: !1 };
                          case 5:
                            s.label++, (r = o[1]), (o = [0]);
                            continue;
                          case 7:
                            (o = s.ops.pop()), s.trys.pop();
                            continue;
                          default:
                            if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
                              s = 0;
                              continue;
                            }
                            if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                              s.label = o[1];
                              break;
                            }
                            if (6 === o[0] && s.label < i[1]) {
                              (s.label = i[1]), (i = o);
                              break;
                            }
                            if (i && s.label < i[2]) {
                              (s.label = i[2]), s.ops.push(o);
                              break;
                            }
                            i[2] && s.ops.pop(), s.trys.pop();
                            continue;
                        }
                        o = t.call(e, s);
                      } catch (e) {
                        (o = [6, e]), (r = 0);
                      } finally {
                        n = i = 0;
                      }
                    if (5 & o[0]) throw o[1];
                    return { value: o[0] ? o[1] : void 0, done: !0 };
                  })([o, a]);
                };
              }
            },
          c =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.sreReady = t.Sre = void 0);
        var l,
          u = o(n(9037)),
          d = o(n(907)),
          h = o(n(7317)),
          p = o(n(4998)),
          f = c(n(4886)),
          m = n(3955),
          g = o(n(9009)),
          S = n(4513),
          b = c(n(706));
        !(function (e) {
          (e.locales = S.Variables.LOCALES),
            (e.sreReady = u.engineReady),
            (e.setupEngine = u.setupEngine),
            (e.engineSetup = u.engineSetup),
            (e.toEnriched = u.toEnriched),
            (e.toSpeech = u.toSpeech),
            (e.clearspeakPreferences = m.ClearspeakPreferences),
            (e.getHighlighter = g.highlighter),
            (e.getSpeechGenerator = h.generator),
            (e.getWalker = d.walker),
            (e.clearspeakStyle = function () {
              return p.DOMAIN_TO_STYLES.clearspeak;
            }),
            (e.preloadLocales = function (e) {
              return s(this, void 0, void 0, function () {
                var t;
                return a(this, function (n) {
                  return [
                    2,
                    (t = b.default.get(e))
                      ? new Promise(function (e, n) {
                          return e(JSON.stringify(t));
                        })
                      : u.localeLoader()(e)
                  ];
                });
              });
            });
        })((l = t.Sre || (t.Sre = {}))),
          (t.sreReady = l.sreReady),
          (f.default.getInstance().delay = !0),
          (t.default = l);
      },
      7306: function (e, t) {
        (t.q = void 0), (t.q = "3.2.2");
      },
      8723: function (e, t) {
        MathJax._.components.global.isObject,
          MathJax._.components.global.combineConfig,
          MathJax._.components.global.combineDefaults,
          (t.r8 = MathJax._.components.global.combineWithMathJax),
          MathJax._.components.global.MathJax;
      },
      1993: function (e, t) {
        MathJax._.components.package.PackageError, (t.GL = MathJax._.components.package.Package);
      },
      7086: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.AbstractAudioRenderer = void 0);
        const r = n(4886);
        t.AbstractAudioRenderer = class {
          constructor() {
            this.separator_ = " ";
          }
          setSeparator(e) {
            this.separator_ = e;
          }
          getSeparator() {
            return "braille" === r.default.getInstance().modality ? "" : this.separator_;
          }
          error(e) {
            return null;
          }
          merge(e) {
            let t = "";
            const n = e.length - 1;
            for (let r, i = 0; (r = e[i]); i++)
              if (((t += r.speech), i < n)) {
                const e = r.attributes.separator;
                t += void 0 !== e ? e : this.getSeparator();
              }
            return t;
          }
          finalize(e) {
            return e;
          }
          pauseValue(e) {
            let t;
            switch (e) {
              case "long":
                t = 750;
                break;
              case "medium":
                t = 500;
                break;
              case "short":
                t = 250;
                break;
              default:
                t = parseInt(e, 10);
            }
            return Math.floor((t * r.default.getInstance().getRate()) / 100);
          }
        };
      },
      9202: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.AcssRenderer = void 0);
        const r = n(4998),
          i = n(6988),
          o = n(2599),
          s = n(9610);
        class a extends s.MarkupRenderer {
          markup(e) {
            this.setScaleFunction(-2, 2, 0, 10, 0);
            const t = o.personalityMarkup(e),
              n = [],
              r = { open: [] };
            let i = null,
              s = !1;
            for (let e, a = 0; (e = t[a]); a++) {
              if (o.isMarkupElement(e)) {
                o.mergeMarkup(r, e);
                continue;
              }
              if (o.isPauseElement(e)) {
                s && (i = o.mergePause(i, e, Math.max));
                continue;
              }
              const t = '"' + this.merge(e.span) + '"';
              (s = !0), i && (n.push(this.pause(i)), (i = null));
              const a = this.prosody_(r);
              n.push(a ? "(text (" + a + ") " + t + ")" : t);
            }
            return "(exp " + n.join(" ") + ")";
          }
          error(e) {
            return '(error "' + i.Move.get(e) + '")';
          }
          prosodyElement(e, t) {
            switch (((t = this.applyScaleFunction(t)), e)) {
              case r.personalityProps.RATE:
                return "(richness . " + t + ")";
              case r.personalityProps.PITCH:
                return "(average-pitch . " + t + ")";
              case r.personalityProps.VOLUME:
                return "(stress . " + t + ")";
            }
            return "(value . " + t + ")";
          }
          pause(e) {
            return "(pause . " + this.pauseValue(e[r.personalityProps.PAUSE]) + ")";
          }
          prosody_(e) {
            const t = e.open,
              n = [];
            for (let r, i = 0; (r = t[i]); i++) n.push(this.prosodyElement(r, e[r]));
            return n.join(" ");
          }
        }
        t.AcssRenderer = a;
      },
      2599: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isSpanElement =
            t.isPauseElement =
            t.isMarkupElement =
            t.personalityMarkup =
            t.sortClose =
            t.mergeMarkup =
            t.mergePause =
              void 0);
        const r = n(1426),
          i = n(4998),
          o = n(1930);
        function s(e, t, n) {
          return (
            n ||
            function (n, r) {
              return "number" == typeof n && "number" == typeof r
                ? n + r
                : "number" == typeof n
                ? r
                : "number" == typeof r
                ? n
                : [e, t].sort()[0];
            }
          ).call(null, e, t);
        }
        (t.mergePause = function (e, t, n) {
          return e ? { pause: s(e.pause, t.pause, n) } : t;
        }),
          (t.mergeMarkup = function (e, t) {
            delete e.open, t.close.forEach((t) => delete e[t]), t.open.forEach((n) => (e[n] = t[n]));
            const n = Object.keys(e);
            e.open = n;
          }),
          (t.sortClose = function (e, t) {
            if (e.length <= 1) return e;
            const n = [];
            for (let r, i = 0; (r = t[i]), e.length; i++)
              r.close &&
                r.close.length &&
                r.close.forEach(function (t) {
                  const r = e.indexOf(t);
                  -1 !== r && (n.unshift(t), e.splice(r, 1));
                });
            return n;
          });
        let a = {},
          c = [];
        function l(e, t) {
          const n = e[e.length - 1];
          if (n) {
            if (p(t) && p(n)) {
              if (void 0 === n.join) return void (n.span = n.span.concat(t.span));
              const e = n.span.pop(),
                r = t.span.shift();
              return n.span.push(e + n.join + r), (n.span = n.span.concat(t.span)), void (n.join = t.join);
            }
            h(t) && h(n) ? (n.pause = s(n.pause, t.pause)) : e.push(t);
          } else e.push(t);
        }
        function u(e, t) {
          e.rate && (t.rate = e.rate), e.pitch && (t.pitch = e.pitch), e.volume && (t.volume = e.volume);
        }
        function d(e) {
          return "object" == typeof e && e.open;
        }
        function h(e) {
          return "object" == typeof e && 1 === Object.keys(e).length && Object.keys(e)[0] === i.personalityProps.PAUSE;
        }
        function p(e) {
          const t = Object.keys(e);
          return (
            "object" == typeof e &&
            ((1 === t.length && "span" === t[0]) ||
              (2 === t.length && (("span" === t[0] && "join" === t[1]) || ("span" === t[1] && "join" === t[0]))))
          );
        }
        function f(e, t, n, r, a, c = !1) {
          if (c) {
            const c = e[e.length - 1];
            let l;
            if ((c && (l = c[i.personalityProps.JOIN]), c && !t.speech && a && h(c))) {
              const e = i.personalityProps.PAUSE;
              (c[e] = s(c[e], a[e])), (a = null);
            }
            if (c && t.speech && 0 === Object.keys(n).length && p(c)) {
              if (void 0 !== l) {
                const e = c.span.pop();
                t = new o.Span(e.speech + l + t.speech, e.attributes);
              }
              c.span.push(t), (t = new o.Span("", {})), (c[i.personalityProps.JOIN] = r);
            }
          }
          0 !== Object.keys(n).length && e.push(n), t.speech && e.push({ span: [t], join: r }), a && e.push(a);
        }
        function m(e, t) {
          if (!t) return e;
          const n = {};
          for (const r of i.personalityPropList) {
            const i = e[r],
              o = t[r];
            if ((!i && !o) || (i && o && i === o)) continue;
            const s = i || 0;
            d(n) || ((n.open = []), (n.close = [])),
              i || n.close.push(r),
              o || n.open.push(r),
              o && i && (n.close.push(r), n.open.push(r)),
              (t[r] = s),
              (n[r] = s),
              a[r] ? a[r].push(s) : (a[r] = [s]);
          }
          if (d(n)) {
            let e = n.close.slice();
            for (; e.length > 0; ) {
              let i = c.pop();
              const o = (0, r.setdifference)(i, e);
              if (((e = (0, r.setdifference)(e, i)), (i = o), 0 !== e.length)) {
                if (0 !== i.length) {
                  (n.close = n.close.concat(i)), (n.open = n.open.concat(i));
                  for (let e, r = 0; (e = i[r]); r++) n[e] = t[e];
                }
              } else 0 !== i.length && c.push(i);
            }
            c.push(n.open);
          }
          return n;
        }
        (t.personalityMarkup = function (e) {
          (a = {}), (c = []);
          let t = [];
          const n = {};
          for (let r, o = 0; (r = e[o]); o++) {
            let e = null;
            const o = r.descriptionSpan(),
              s = r.personality,
              a = s[i.personalityProps.JOIN];
            delete s[i.personalityProps.JOIN],
              void 0 !== s[i.personalityProps.PAUSE] &&
                ((e = { [i.personalityProps.PAUSE]: s[i.personalityProps.PAUSE] }), delete s[i.personalityProps.PAUSE]);
            f(t, o, m(s, n), a, e, !0);
          }
          return (
            (t = t.concat(
              (function () {
                const e = [];
                for (let t = c.length - 1; t >= 0; t--) {
                  const n = c[t];
                  if (n.length) {
                    const t = { open: [], close: [] };
                    for (let e = 0; e < n.length; e++) {
                      const r = n[e];
                      t.close.push(r), (t[r] = 0);
                    }
                    e.push(t);
                  }
                }
                return e;
              })()
            )),
            (t = (function (e) {
              const t = {},
                n = [];
              for (let r, i = 0; (r = e[i]); i++) {
                if (!d(r)) {
                  l(n, r);
                  continue;
                }
                if (!r.close || 1 !== r.close.length || r.open.length) {
                  u(r, t), n.push(r);
                  continue;
                }
                let o = e[i + 1];
                if (!o || p(o)) {
                  u(r, t), n.push(r);
                  continue;
                }
                const s = h(o) ? o : null;
                s && (o = e[i + 2]),
                  o && d(o) && o.open[0] === r.close[0] && !o.close.length && o[o.open[0]] === t[o.open[0]]
                    ? s
                      ? (l(n, s), (i += 2))
                      : (i += 1)
                    : (u(r, t), n.push(r));
              }
              return n;
            })(t)),
            t
          );
        }),
          (t.isMarkupElement = d),
          (t.isPauseElement = h),
          (t.isSpanElement = p);
      },
      4148: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.AuditoryDescription = void 0);
        const r = n(1058),
          i = n(1930);
        class o {
          constructor({ context: e, text: t, userValue: n, annotation: r, attributes: i, personality: o, layout: s }) {
            (this.context = e || ""),
              (this.text = t || ""),
              (this.userValue = n || ""),
              (this.annotation = r || ""),
              (this.attributes = i || {}),
              (this.personality = o || {}),
              (this.layout = s || "");
          }
          static create(e, t = {}) {
            return (e.text = r.Grammar.getInstance().apply(e.text, t)), new o(e);
          }
          isEmpty() {
            return 0 === this.context.length && 0 === this.text.length && 0 === this.userValue.length && 0 === this.annotation.length;
          }
          clone() {
            let e, t;
            if (this.personality) {
              e = {};
              for (const t in this.personality) e[t] = this.personality[t];
            }
            if (this.attributes) {
              t = {};
              for (const e in this.attributes) t[e] = this.attributes[e];
            }
            return new o({
              context: this.context,
              text: this.text,
              userValue: this.userValue,
              annotation: this.annotation,
              personality: e,
              attributes: t,
              layout: this.layout
            });
          }
          toString() {
            return (
              'AuditoryDescription(context="' +
              this.context +
              '"  text="' +
              this.text +
              '"  userValue="' +
              this.userValue +
              '"  annotation="' +
              this.annotation +
              '")'
            );
          }
          descriptionString() {
            return this.context && this.text ? this.context + " " + this.text : this.context || this.text;
          }
          descriptionSpan() {
            return new i.Span(this.descriptionString(), this.attributes);
          }
          equals(e) {
            return this.context === e.context && this.text === e.text && this.userValue === e.userValue && this.annotation === e.annotation;
          }
        }
        t.AuditoryDescription = o;
      },
      4253: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isXml = t.registerRenderer = t.error = t.finalize = t.merge = t.markup = t.getSeparator = t.setSeparator = void 0);
        const r = n(4886),
          i = n(4998),
          o = n(9202),
          s = n(1292),
          a = n(1674),
          c = n(8078),
          l = n(1930),
          u = n(4115),
          d = n(6123),
          h = n(8244),
          p = n(4708),
          f = new u.SsmlRenderer(),
          m = new Map([
            [i.Markup.NONE, new h.StringRenderer()],
            [i.Markup.PUNCTUATION, new a.PunctuationRenderer()],
            [i.Markup.LAYOUT, new s.LayoutRenderer()],
            [i.Markup.ACSS, new o.AcssRenderer()],
            [i.Markup.SABLE, new c.SableRenderer()],
            [i.Markup.VOICEXML, f],
            [i.Markup.SSML, f],
            [i.Markup.SSML_STEP, new d.SsmlStepRenderer()]
          ]);
        (t.setSeparator = function (e) {
          const t = m.get(r.default.getInstance().markup);
          t && t.setSeparator(e);
        }),
          (t.getSeparator = function () {
            const e = m.get(r.default.getInstance().markup);
            return e ? e.getSeparator() : "";
          }),
          (t.markup = function (e) {
            const t = m.get(r.default.getInstance().markup);
            return t ? t.markup(e) : "";
          }),
          (t.merge = function (e) {
            const t = e.map((e) => ("string" == typeof e ? new l.Span(e, {}) : e)),
              n = m.get(r.default.getInstance().markup);
            return n ? n.merge(t) : e.join();
          }),
          (t.finalize = function (e) {
            const t = m.get(r.default.getInstance().markup);
            return t ? t.finalize(e) : e;
          }),
          (t.error = function (e) {
            const t = m.get(r.default.getInstance().markup);
            return t ? t.error(e) : "";
          }),
          (t.registerRenderer = function (e, t) {
            m.set(e, t);
          }),
          (t.isXml = function () {
            return m.get(r.default.getInstance().markup) instanceof p.XmlRenderer;
          });
      },
      1292: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.LayoutRenderer = void 0);
        const r = n(1984),
          i = n(6671),
          o = n(4998),
          s = n(2599),
          a = n(4708);
        class c extends a.XmlRenderer {
          finalize(e) {
            return (function (e) {
              l = "";
              const t = i.parseInput(`<all>${e}</all>`);
              return r.Debugger.getInstance().output(i.formatXml(t.toString())), (l = p(t)), l;
            })(e);
          }
          pause(e) {
            return "";
          }
          prosodyElement(e, t) {
            return e === o.personalityProps.LAYOUT ? `<${t}>` : "";
          }
          closeTag(e) {
            return `</${e}>`;
          }
          markup(e) {
            const t = [];
            let n = [];
            for (const r of e) {
              if (!r.layout) {
                n.push(r);
                continue;
              }
              t.push(this.processContent(n)), (n = []);
              const e = r.layout;
              e.match(/^begin/)
                ? t.push("<" + e.replace(/^begin/, "") + ">")
                : e.match(/^end/)
                ? t.push("</" + e.replace(/^end/, "") + ">")
                : console.warn("Something went wrong with layout markup: " + e);
            }
            return t.push(this.processContent(n)), t.join("");
          }
          processContent(e) {
            const t = [],
              n = s.personalityMarkup(e);
            for (let e, r = 0; (e = n[r]); r++) e.span ? t.push(this.merge(e.span)) : s.isPauseElement(e);
            return t.join("");
          }
        }
        t.LayoutRenderer = c;
        let l = "";
        const u = {
          TABLE: function (e) {
            let t = S(e);
            t.forEach((e) => {
              (e.cells = e.cells.slice(1).slice(0, -1)), (e.width = e.width.slice(1).slice(0, -1));
            });
            const [n, r] = b(t);
            return (t = N(t, r)), E(t, n);
          },
          CASES: function (e) {
            let t = S(e);
            t.forEach((e) => {
              (e.cells = e.cells.slice(0, -1)), (e.width = e.width.slice(0, -1));
            });
            const [n, r] = b(t);
            return (t = N(t, r)), E(t, n);
          },
          CAYLEY: function (e) {
            let t = S(e);
            t.forEach((e) => {
              (e.cells = e.cells.slice(1).slice(0, -1)), (e.width = e.width.slice(1).slice(0, -1)), (e.sep = e.sep + e.sep);
            });
            const [n, r] = b(t),
              i = { lfence: "", rfence: "", cells: r.map((e) => "⠐" + new Array(e).join("⠒")), width: r, height: 1, sep: t[0].sep };
            return t.splice(1, 0, i), (t = N(t, r)), E(t, n);
          },
          MATRIX: function (e) {
            let t = S(e);
            const [n, r] = b(t);
            return (t = N(t, r)), E(t, n);
          },
          CELL: p,
          FENCE: p,
          ROW: p,
          FRACTION: function (e) {
            const [t, n, , r, i] = Array.from(e.childNodes),
              o = d(n),
              s = d(r),
              a = m(o),
              c = m(s);
            let l = Math.max(a, c);
            const u = t + new Array(l + 1).join("⠒") + i;
            return (l = u.length), `${C(o, l)}\n${u}\n${C(s, l)}`;
          },
          NUMERATOR: T,
          DENOMINATOR: T
        };
        function d(e) {
          const t = i.tagName(e),
            n = u[t];
          return n ? n(e) : e.textContent;
        }
        function h(e, t) {
          if (!e || !t) return e + t;
          const n = f(e),
            r = f(t),
            i = n - r;
          (e = i < 0 ? g(e, r, m(e)) : e), (t = i > 0 ? g(t, n, m(t)) : t);
          const o = e.split(/\r\n|\r|\n/),
            s = t.split(/\r\n|\r|\n/),
            a = [];
          for (let e = 0; e < o.length; e++) a.push(o[e] + s[e]);
          return a.join("\n");
        }
        function p(e) {
          let t = "";
          for (const n of Array.from(e.childNodes)) t = n.nodeType !== i.NodeType.TEXT_NODE ? h(t, d(n)) : h(t, n.textContent);
          return t;
        }
        function f(e) {
          return e.split(/\r\n|\r|\n/).length;
        }
        function m(e) {
          return e.split(/\r\n|\r|\n/).reduce((e, t) => Math.max(t.length, e), 0);
        }
        function g(e, t, n) {
          return (
            (e = (function (e, t) {
              const n = t - f(e);
              return e + (n > 0 ? new Array(n + 1).join("\n") : "");
            })(e, t)),
            (function (e, t) {
              const n = e.split(/\r\n|\r|\n/),
                r = [];
              for (const e of n) {
                const n = t - e.length;
                r.push(e + (n > 0 ? new Array(n + 1).join("⠀") : ""));
              }
              return r.join("\n");
            })(e, n)
          );
        }
        function S(e) {
          const t = Array.from(e.childNodes),
            n = [];
          for (const e of t) e.nodeType === i.NodeType.ELEMENT_NODE && n.push(_(e));
          return n;
        }
        function b(e) {
          const t = e.reduce((e, t) => Math.max(t.height, e), 0),
            n = [];
          for (let t = 0; t < e[0].width.length; t++) n.push(e.map((e) => e.width[t]).reduce((e, t) => Math.max(e, t), 0));
          return [t, n];
        }
        function N(e, t) {
          const n = [];
          for (const r of e) {
            if (0 === r.height) continue;
            const e = [];
            for (let n = 0; n < r.cells.length; n++) e.push(g(r.cells[n], r.height, t[n]));
            (r.cells = e), n.push(r);
          }
          return n;
        }
        function E(e, t) {
          if (1 === t) return e.map((e) => e.lfence + e.cells.join(e.sep) + e.rfence).join("\n");
          const n = [];
          for (const t of e) {
            const e = y(t.sep, t.height);
            let r = t.cells.shift();
            for (; t.cells.length; ) (r = h(r, e)), (r = h(r, t.cells.shift()));
            (r = h(y(t.lfence, t.height), r)),
              (r = h(r, y(t.rfence, t.height))),
              n.push(r),
              n.push(t.lfence + new Array(m(r) - 3).join(t.sep) + t.rfence);
          }
          return n.slice(0, -1).join("\n");
        }
        function y(e, t) {
          let n = "";
          for (; t; ) (n += e + "\n"), t--;
          return n.slice(0, -1);
        }
        function A(e) {
          return e.nodeType === i.NodeType.ELEMENT_NODE && "FENCE" === i.tagName(e) ? d(e) : "";
        }
        function _(e) {
          const t = Array.from(e.childNodes),
            n = A(t[0]),
            r = A(t[t.length - 1]);
          n && t.shift(), r && t.pop();
          let o = "";
          const s = [];
          for (const e of t) {
            if (e.nodeType === i.NodeType.TEXT_NODE) {
              o = e.textContent;
              continue;
            }
            const t = d(e);
            s.push(t);
          }
          return { lfence: n, rfence: r, sep: o, cells: s, height: s.reduce((e, t) => Math.max(f(t), e), 0), width: s.map(m) };
        }
        function C(e, t) {
          const n = (t - m(e)) / 2,
            [r, i] = Math.floor(n) === n ? [n, n] : [Math.floor(n), Math.ceil(n)],
            o = e.split(/\r\n|\r|\n/),
            s = [],
            [a, c] = [new Array(r + 1).join("⠀"), new Array(i + 1).join("⠀")];
          for (const e of o) s.push(a + e + c);
          return s.join("\n");
        }
        function T(e) {
          const t = e.firstChild,
            n = p(e);
          if (t && t.nodeType === i.NodeType.ELEMENT_NODE) {
            if ("ENGLISH" === i.tagName(t)) return "⠰" + n;
            if ("NUMBER" === i.tagName(t)) return "⠼" + n;
          }
          return n;
        }
      },
      9610: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.MarkupRenderer = void 0);
        const r = n(4998),
          i = n(7086);
        class o extends i.AbstractAudioRenderer {
          constructor() {
            super(...arguments), (this.ignoreElements = [r.personalityProps.LAYOUT]), (this.scaleFunction = null);
          }
          setScaleFunction(e, t, n, r, i = 0) {
            this.scaleFunction = (o) => {
              const s = (o - e) / (t - e),
                a = n * (1 - s) + r * s;
              return +(Math.round(a + "e+" + i) + "e-" + i);
            };
          }
          applyScaleFunction(e) {
            return this.scaleFunction ? this.scaleFunction(e) : e;
          }
          ignoreElement(e) {
            return -1 !== this.ignoreElements.indexOf(e);
          }
        }
        t.MarkupRenderer = o;
      },
      1674: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.PunctuationRenderer = void 0);
        const r = n(4998),
          i = n(7086),
          o = n(2599);
        class s extends i.AbstractAudioRenderer {
          markup(e) {
            const t = o.personalityMarkup(e);
            let n = "",
              i = null,
              s = !1;
            for (let e, a = 0; (e = t[a]); a++)
              o.isMarkupElement(e) ||
                (o.isPauseElement(e)
                  ? s && (i = o.mergePause(i, e, Math.max))
                  : (i && ((n += this.pause(i[r.personalityProps.PAUSE])), (i = null)),
                    (n += (s ? this.getSeparator() : "") + this.merge(e.span)),
                    (s = !0)));
            return n;
          }
          pause(e) {
            let t;
            return (t = "number" == typeof e ? (e <= 250 ? "short" : e <= 500 ? "medium" : "long") : e), s.PAUSE_PUNCTUATION.get(t) || "";
          }
        }
        (t.PunctuationRenderer = s),
          (s.PAUSE_PUNCTUATION = new Map([
            ["short", ","],
            ["medium", ";"],
            ["long", "."]
          ]));
      },
      8078: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SableRenderer = void 0);
        const r = n(4998),
          i = n(4708);
        class o extends i.XmlRenderer {
          finalize(e) {
            return (
              '<?xml version="1.0"?><!DOCTYPE SABLE PUBLIC "-//SABLE//DTD SABLE speech mark up//EN" "Sable.v0_2.dtd" []><SABLE>' +
              this.getSeparator() +
              e +
              this.getSeparator() +
              "</SABLE>"
            );
          }
          pause(e) {
            return '<BREAK MSEC="' + this.pauseValue(e[r.personalityProps.PAUSE]) + '"/>';
          }
          prosodyElement(e, t) {
            switch (((t = this.applyScaleFunction(t)), e)) {
              case r.personalityProps.PITCH:
                return '<PITCH RANGE="' + t + '%">';
              case r.personalityProps.RATE:
                return '<RATE SPEED="' + t + '%">';
              case r.personalityProps.VOLUME:
                return '<VOLUME LEVEL="' + t + '%">';
              default:
                return "<" + e.toUpperCase() + ' VALUE="' + t + '">';
            }
          }
          closeTag(e) {
            return "</" + e.toUpperCase() + ">";
          }
        }
        t.SableRenderer = o;
      },
      1930: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Span = void 0);
        t.Span = class {
          constructor(e, t) {
            (this.speech = e), (this.attributes = t);
          }
        };
      },
      4115: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SsmlRenderer = void 0);
        const r = n(4886),
          i = n(4998),
          o = n(4708);
        class s extends o.XmlRenderer {
          finalize(e) {
            return (
              '<?xml version="1.0"?><speak version="1.1" xmlns="http://www.w3.org/2001/10/synthesis"><prosody rate="' +
              r.default.getInstance().getRate() +
              '%">' +
              this.getSeparator() +
              e +
              this.getSeparator() +
              "</prosody></speak>"
            );
          }
          pause(e) {
            return '<break time="' + this.pauseValue(e[i.personalityProps.PAUSE]) + 'ms"/>';
          }
          prosodyElement(e, t) {
            const n = (t = Math.floor(this.applyScaleFunction(t))) < 0 ? t.toString() : "+" + t.toString();
            return "<prosody " + e.toLowerCase() + '="' + n + (e === i.personalityProps.VOLUME ? ">" : '%">');
          }
          closeTag(e) {
            return "</prosody>";
          }
        }
        t.SsmlRenderer = s;
      },
      6123: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SsmlStepRenderer = void 0);
        const r = n(4115);
        class i extends r.SsmlRenderer {
          markup(e) {
            return (i.MARKS = {}), super.markup(e);
          }
          merge(e) {
            const t = [];
            for (let n = 0; n < e.length; n++) {
              const r = e[n],
                o = r.attributes.extid;
              o && !i.MARKS[o] && (t.push('<mark name="' + o + '"/>'), (i.MARKS[o] = !0)),
                1 === r.speech.length && r.speech.match(/[a-zA-Z]/)
                  ? t.push('<say-as interpret-as="' + i.CHARACTER_ATTR + '">' + r.speech + "</say-as>")
                  : t.push(r.speech);
            }
            return t.join(this.getSeparator());
          }
        }
        (t.SsmlStepRenderer = i), (i.CHARACTER_ATTR = "character"), (i.MARKS = {});
      },
      8244: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.StringRenderer = void 0);
        const r = n(7086),
          i = n(2599);
        class o extends r.AbstractAudioRenderer {
          markup(e) {
            let t = "";
            const n = (0, i.personalityMarkup)(e).filter((e) => e.span);
            if (!n.length) return t;
            const r = n.length - 1;
            for (let e, i = 0; (e = n[i]); i++) {
              if ((e.span && (t += this.merge(e.span)), i >= r)) continue;
              const n = e.join;
              t += void 0 === n ? this.getSeparator() : n;
            }
            return t;
          }
        }
        t.StringRenderer = o;
      },
      4708: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.XmlRenderer = void 0);
        const r = n(4886),
          i = n(2599),
          o = n(9610);
        class s extends o.MarkupRenderer {
          markup(e) {
            this.setScaleFunction(-2, 2, -100, 100, 2);
            const t = i.personalityMarkup(e),
              n = [],
              o = [];
            for (let e, s = 0; (e = t[s]); s++)
              if (e.span) n.push(this.merge(e.span));
              else if (i.isPauseElement(e)) n.push(this.pause(e));
              else {
                if (e.close.length)
                  for (let t = 0; t < e.close.length; t++) {
                    const t = o.pop();
                    if (-1 === e.close.indexOf(t)) throw new r.SREError("Unknown closing markup element: " + t);
                    n.push(this.closeTag(t));
                  }
                if (e.open.length) {
                  i.sortClose(e.open.slice(), t.slice(s + 1)).forEach((t) => {
                    n.push(this.prosodyElement(t, e[t])), o.push(t);
                  });
                }
              }
            return n.join(" ");
          }
        }
        t.XmlRenderer = s;
      },
      1426: function (e, t) {
        function n(e, t) {
          return e ? (t ? e.filter((e) => t.indexOf(e) < 0) : e) : [];
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.union = t.setdifference = t.interleaveLists = t.removeEmpty = void 0),
          (t.removeEmpty = function (e) {
            return e.filter((e) => e);
          }),
          (t.interleaveLists = function (e, t) {
            const n = [];
            for (; e.length || t.length; ) e.length && n.push(e.shift()), t.length && n.push(t.shift());
            return n;
          }),
          (t.setdifference = n),
          (t.union = function (e, t) {
            return e && t ? e.concat(n(t, e)) : e || t || [];
          });
      },
      9501: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadScript = t.loadMapsForIE_ = t.installWGXpath_ = t.loadWGXpath_ = t.mapsForIE = t.detectEdge = t.detectIE = void 0);
        const r = n(4755),
          i = n(5024);
        function o(e) {
          c(r.default.WGXpath), s(e);
        }
        function s(e, t) {
          let n = t || 1;
          "undefined" == typeof wgxpath && n < 10
            ? setTimeout(function () {
                s(e, n++);
              }, 200)
            : n >= 10 ||
              ((r.default.wgxpath = wgxpath),
              e ? r.default.wgxpath.install({ document: document }) : r.default.wgxpath.install(),
              (i.xpath.evaluate = document.evaluate),
              (i.xpath.result = XPathResult),
              (i.xpath.createNSResolver = document.createNSResolver));
        }
        function a() {
          c(r.default.mathmapsIePath);
        }
        function c(e) {
          const t = r.default.document.createElement("script");
          (t.type = "text/javascript"),
            (t.src = e),
            r.default.document.head ? r.default.document.head.appendChild(t) : r.default.document.body.appendChild(t);
        }
        (t.detectIE = function () {
          return "undefined" != typeof window && "ActiveXObject" in window && "clipboardData" in window && (a(), o(), !0);
        }),
          (t.detectEdge = function () {
            var e;
            return (
              "undefined" != typeof window &&
              "MSGestureEvent" in window &&
              null === (null === (e = window.chrome) || void 0 === e ? void 0 : e.loadTimes) &&
              ((document.evaluate = null), o(!0), !0)
            );
          }),
          (t.mapsForIE = null),
          (t.loadWGXpath_ = o),
          (t.installWGXpath_ = s),
          (t.loadMapsForIE_ = a),
          (t.loadScript = c);
      },
      1984: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Debugger = void 0);
        const r = n(4755);
        class i {
          constructor() {
            (this.isActive_ = !1), (this.outputFunction_ = console.info), (this.stream_ = null);
          }
          static getInstance() {
            return (i.instance = i.instance || new i()), i.instance;
          }
          init(e) {
            e && this.startDebugFile_(e), (this.isActive_ = !0);
          }
          output(...e) {
            this.isActive_ && this.output_(e);
          }
          generateOutput(e) {
            this.isActive_ && this.output_(e.apply(e, []));
          }
          exit(e = () => {}) {
            this.isActive_ && this.stream_ && this.stream_.end("", "", e);
          }
          startDebugFile_(e) {
            (this.stream_ = r.default.fs.createWriteStream(e)),
              (this.outputFunction_ = function (...e) {
                this.stream_.write(e.join(" ")), this.stream_.write("\n");
              }.bind(this)),
              this.stream_.on(
                "error",
                function (e) {
                  console.info("Invalid log file. Debug information sent to console."), (this.outputFunction_ = console.info);
                }.bind(this)
              ),
              this.stream_.on("finish", function () {
                console.info("Finalizing debug file.");
              });
          }
          output_(e) {
            this.outputFunction_.apply(
              console.info === this.outputFunction_ ? console : this.outputFunction_,
              ["Speech Rule Engine Debugger:"].concat(e)
            );
          }
        }
        t.Debugger = i;
      },
      6671: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.serializeXml =
            t.cloneNode =
            t.tagName =
            t.querySelectorAll =
            t.querySelectorAllByAttrValue =
            t.querySelectorAllByAttr =
            t.formatXml =
            t.createTextNode =
            t.createElementNS =
            t.createElement =
            t.replaceNode =
            t.NodeType =
            t.parseInput =
            t.XML_ENTITIES =
            t.trimInput_ =
            t.toArray =
              void 0);
        const r = n(4886),
          i = n(4998),
          o = n(4755),
          s = n(5024);
        function a(e) {
          const t = [];
          for (let n = 0, r = e.length; n < r; n++) t.push(e[n]);
          return t;
        }
        function c(e) {
          return (e = e.replace(/&nbsp;/g, " ")).replace(/>[ \f\n\r\t\v\u200b]+</g, "><").trim();
        }
        var l;
        function u(e, t) {
          if (!t) return [!1, ""];
          const n = e.match(/^<([^> ]+).*>/),
            r = t.match(/^<\/([^>]+)>(.*)/);
          return n && r && n[1] === r[1] ? [!0, r[2]] : [!1, ""];
        }
        (t.toArray = a),
          (t.trimInput_ = c),
          (t.XML_ENTITIES = { "&lt;": !0, "&gt;": !0, "&amp;": !0, "&quot;": !0, "&apos;": !0 }),
          (t.parseInput = function (e) {
            const t = new o.default.xmldom.DOMParser(),
              n = c(e),
              a = !!n.match(/&(?!lt|gt|amp|quot|apos)\w+;/g);
            if (!n) throw new Error("Empty input!");
            try {
              const e = t.parseFromString(n, a ? "text/html" : "text/xml");
              return r.default.getInstance().mode === i.Mode.HTTP
                ? ((s.xpath.currentDocument = e), a ? e.body.childNodes[0] : e.documentElement)
                : e.documentElement;
            } catch (e) {
              throw new r.SREError("Illegal input: " + e.message);
            }
          }),
          ((l = t.NodeType || (t.NodeType = {}))[(l.ELEMENT_NODE = 1)] = "ELEMENT_NODE"),
          (l[(l.ATTRIBUTE_NODE = 2)] = "ATTRIBUTE_NODE"),
          (l[(l.TEXT_NODE = 3)] = "TEXT_NODE"),
          (l[(l.CDATA_SECTION_NODE = 4)] = "CDATA_SECTION_NODE"),
          (l[(l.ENTITY_REFERENCE_NODE = 5)] = "ENTITY_REFERENCE_NODE"),
          (l[(l.ENTITY_NODE = 6)] = "ENTITY_NODE"),
          (l[(l.PROCESSING_INSTRUCTION_NODE = 7)] = "PROCESSING_INSTRUCTION_NODE"),
          (l[(l.COMMENT_NODE = 8)] = "COMMENT_NODE"),
          (l[(l.DOCUMENT_NODE = 9)] = "DOCUMENT_NODE"),
          (l[(l.DOCUMENT_TYPE_NODE = 10)] = "DOCUMENT_TYPE_NODE"),
          (l[(l.DOCUMENT_FRAGMENT_NODE = 11)] = "DOCUMENT_FRAGMENT_NODE"),
          (l[(l.NOTATION_NODE = 12)] = "NOTATION_NODE"),
          (t.replaceNode = function (e, t) {
            e.parentNode && (e.parentNode.insertBefore(t, e), e.parentNode.removeChild(e));
          }),
          (t.createElement = function (e) {
            return o.default.document.createElement(e);
          }),
          (t.createElementNS = function (e, t) {
            return o.default.document.createElementNS(e, t);
          }),
          (t.createTextNode = function (e) {
            return o.default.document.createTextNode(e);
          }),
          (t.formatXml = function (e) {
            let t = "",
              n = /(>)(<)(\/*)/g,
              r = 0,
              i = (e = e.replace(n, "$1\r\n$2$3")).split("\r\n");
            for (
              n = /(\.)*(<)(\/*)/g, i = i.map((e) => e.replace(n, "$1\r\n$2$3").split("\r\n")).reduce((e, t) => e.concat(t), []);
              i.length;

            ) {
              let e = i.shift();
              if (!e) continue;
              let n = 0;
              if (e.match(/^<\w[^>/]*>[^>]+$/)) {
                const t = u(e, i[0]);
                t[0] ? (t[1] ? ((e += i.shift().slice(0, -t[1].length)), t[1].trim() && i.unshift(t[1])) : (e += i.shift())) : (n = 1);
              } else if (e.match(/^<\/\w/)) 0 !== r && (r -= 1);
              else if (e.match(/^<\w[^>]*[^/]>.*$/)) n = 1;
              else if (e.match(/^<\w[^>]*\/>.+$/)) {
                const t = e.indexOf(">") + 1;
                e.slice(t).trim() && i.unshift(), (e = e.slice(0, t));
              } else n = 0;
              (t += new Array(r + 1).join("  ") + e + "\r\n"), (r += n);
            }
            return t;
          }),
          (t.querySelectorAllByAttr = function (e, t) {
            return e.querySelectorAll ? a(e.querySelectorAll(`[${t}]`)) : s.evalXPath(`.//*[@${t}]`, e);
          }),
          (t.querySelectorAllByAttrValue = function (e, t, n) {
            return e.querySelectorAll ? a(e.querySelectorAll(`[${t}="${n}"]`)) : s.evalXPath(`.//*[@${t}="${n}"]`, e);
          }),
          (t.querySelectorAll = function (e, t) {
            return e.querySelectorAll ? a(e.querySelectorAll(t)) : s.evalXPath(`.//${t}`, e);
          }),
          (t.tagName = function (e) {
            return e.tagName.toUpperCase();
          }),
          (t.cloneNode = function (e) {
            return e.cloneNode(!0);
          }),
          (t.serializeXml = function (e) {
            return new o.default.xmldom.XMLSerializer().serializeToString(e);
          });
      },
      4886: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.EnginePromise = t.SREError = void 0);
        const r = n(8310),
          i = n(4998),
          o = n(1984),
          s = n(4513);
        class a extends Error {
          constructor(e = "") {
            super(), (this.message = e), (this.name = "SRE Error");
          }
        }
        t.SREError = a;
        class c {
          constructor() {
            (this.customLoader = null),
              (this.parsers = {}),
              (this.comparator = null),
              (this.mode = i.Mode.SYNC),
              (this.init = !0),
              (this.delay = !1),
              (this.comparators = {}),
              (this.domain = "mathspeak"),
              (this.style = r.DynamicCstr.DEFAULT_VALUES[r.Axis.STYLE]),
              (this._defaultLocale = r.DynamicCstr.DEFAULT_VALUES[r.Axis.LOCALE]),
              (this.locale = this.defaultLocale),
              (this.subiso = ""),
              (this.modality = r.DynamicCstr.DEFAULT_VALUES[r.Axis.MODALITY]),
              (this.speech = i.Speech.NONE),
              (this.markup = i.Markup.NONE),
              (this.walker = "Table"),
              (this.structure = !1),
              (this.ruleSets = []),
              (this.strict = !1),
              (this.isIE = !1),
              (this.isEdge = !1),
              (this.rate = "100"),
              (this.pprint = !1),
              (this.config = !1),
              (this.rules = ""),
              (this.prune = ""),
              (this.evaluator = c.defaultEvaluator),
              (this.defaultParser = new r.DynamicCstrParser(r.DynamicCstr.DEFAULT_ORDER)),
              (this.parser = this.defaultParser),
              (this.dynamicCstr = r.DynamicCstr.defaultCstr());
          }
          set defaultLocale(e) {
            this._defaultLocale = s.Variables.ensureLocale(e, this._defaultLocale);
          }
          get defaultLocale() {
            return this._defaultLocale;
          }
          static getInstance() {
            return (c.instance = c.instance || new c()), c.instance;
          }
          static defaultEvaluator(e, t) {
            return e;
          }
          static evaluateNode(e) {
            return c.nodeEvaluator(e);
          }
          getRate() {
            const e = parseInt(this.rate, 10);
            return isNaN(e) ? 100 : e;
          }
          setDynamicCstr(e) {
            if ((this.defaultLocale && (r.DynamicCstr.DEFAULT_VALUES[r.Axis.LOCALE] = this.defaultLocale), e)) {
              const t = Object.keys(e);
              for (let n = 0; n < t.length; n++) {
                const i = t[n];
                if (-1 !== r.DynamicCstr.DEFAULT_ORDER.indexOf(i)) {
                  const t = e[i];
                  this[i] = t;
                }
              }
            }
            i.DOMAIN_TO_STYLES[this.domain] = this.style;
            const t = [this.locale, this.modality, this.domain, this.style].join("."),
              n = r.DynamicProperties.createProp(
                [r.DynamicCstr.DEFAULT_VALUES[r.Axis.LOCALE]],
                [r.DynamicCstr.DEFAULT_VALUES[r.Axis.MODALITY]],
                [r.DynamicCstr.DEFAULT_VALUES[r.Axis.DOMAIN]],
                [r.DynamicCstr.DEFAULT_VALUES[r.Axis.STYLE]]
              ),
              o = this.comparators[this.domain],
              s = this.parsers[this.domain];
            (this.parser = s || this.defaultParser),
              (this.dynamicCstr = this.parser.parse(t)),
              this.dynamicCstr.updateProperties(n.getProperties()),
              (this.comparator = o ? o() : new r.DefaultComparator(this.dynamicCstr));
          }
          configurate(e) {
            this.mode !== i.Mode.HTTP ||
              this.config ||
              (!(function (e) {
                const t = document.documentElement.querySelectorAll('script[type="text/x-sre-config"]');
                for (let n = 0, r = t.length; n < r; n++) {
                  let r;
                  try {
                    r = t[n].innerHTML;
                    const i = JSON.parse(r);
                    for (const t in i) e[t] = i[t];
                  } catch (e) {
                    o.Debugger.getInstance().output("Illegal configuration ", r);
                  }
                }
              })(e),
              (this.config = !0)),
              (function (e) {
                if ("undefined" != typeof SREfeature) for (const [t, n] of Object.entries(SREfeature)) e[t] = n;
              })(e);
          }
          setCustomLoader(e) {
            e && (this.customLoader = e);
          }
        }
        (t.default = c),
          (c.BINARY_FEATURES = ["strict", "structure", "pprint"]),
          (c.STRING_FEATURES = [
            "markup",
            "style",
            "domain",
            "speech",
            "walker",
            "defaultLocale",
            "locale",
            "delay",
            "modality",
            "rate",
            "rules",
            "subiso",
            "prune"
          ]),
          (c.nodeEvaluator = function (e) {
            return [];
          });
        class l {
          static get(e = c.getInstance().locale) {
            return l.promises[e] || Promise.resolve("");
          }
          static getall() {
            return Promise.all(Object.values(l.promises));
          }
        }
        (t.EnginePromise = l), (l.loaded = {}), (l.promises = {});
      },
      4998: function (e, t) {
        var n, r, i, o;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DOMAIN_TO_STYLES = t.Markup = t.Speech = t.personalityPropList = t.personalityProps = t.Mode = void 0),
          ((n = t.Mode || (t.Mode = {})).SYNC = "sync"),
          (n.ASYNC = "async"),
          (n.HTTP = "http"),
          (function (e) {
            (e.PITCH = "pitch"), (e.RATE = "rate"), (e.VOLUME = "volume"), (e.PAUSE = "pause"), (e.JOIN = "join"), (e.LAYOUT = "layout");
          })((r = t.personalityProps || (t.personalityProps = {}))),
          (t.personalityPropList = [r.PITCH, r.RATE, r.VOLUME, r.PAUSE, r.JOIN]),
          ((i = t.Speech || (t.Speech = {})).NONE = "none"),
          (i.SHALLOW = "shallow"),
          (i.DEEP = "deep"),
          ((o = t.Markup || (t.Markup = {})).NONE = "none"),
          (o.LAYOUT = "layout"),
          (o.PUNCTUATION = "punctuation"),
          (o.SSML = "ssml"),
          (o.SSML_STEP = "ssml_step"),
          (o.ACSS = "acss"),
          (o.SABLE = "sable"),
          (o.VOICEXML = "voicexml"),
          (t.DOMAIN_TO_STYLES = { mathspeak: "default", clearspeak: "default" });
      },
      985: function (e, t, n) {
        var r =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function s(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function a(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(s, a);
              }
              c((r = r.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.setup = void 0);
        const i = n(2371),
          o = n(5659),
          s = n(9501),
          a = n(4886),
          c = n(7129),
          l = n(4755);
        t.setup = function (e) {
          return r(this, void 0, void 0, function* () {
            const t = a.default.getInstance();
            "default" !== e.domain || ("speech" !== e.modality && e.modality && "speech" !== t.modality) || (e.domain = "mathspeak");
            const n = (n) => {
              void 0 !== e[n] && (t[n] = e[n]);
            };
            return (
              n("mode"),
              t.configurate(e),
              a.default.BINARY_FEATURES.forEach((n) => {
                void 0 !== e[n] && (t[n] = !!e[n]);
              }),
              a.default.STRING_FEATURES.forEach(n),
              e.json && (l.default.jsonPath = c.makePath(e.json)),
              e.xpath && (l.default.WGXpath = e.xpath),
              t.setCustomLoader(e.custom),
              (function (e) {
                (e.isIE = s.detectIE()), (e.isEdge = s.detectEdge());
              })(t),
              i.setLocale(),
              t.setDynamicCstr(),
              t.init
                ? ((a.EnginePromise.promises.init = new Promise((e, t) => {
                    setTimeout(() => {
                      e("init");
                    }, 10);
                  })),
                  (t.init = !1),
                  a.EnginePromise.get())
                : t.delay
                ? ((t.delay = !1), a.EnginePromise.get())
                : o.loadLocale()
            );
          });
        };
      },
      6988: function (e, t) {
        var n, r;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Event = t.EventType = t.Move = t.KeyCode = void 0),
          ((n = t.KeyCode || (t.KeyCode = {}))[(n.ENTER = 13)] = "ENTER"),
          (n[(n.ESC = 27)] = "ESC"),
          (n[(n.SPACE = 32)] = "SPACE"),
          (n[(n.PAGE_UP = 33)] = "PAGE_UP"),
          (n[(n.PAGE_DOWN = 34)] = "PAGE_DOWN"),
          (n[(n.END = 35)] = "END"),
          (n[(n.HOME = 36)] = "HOME"),
          (n[(n.LEFT = 37)] = "LEFT"),
          (n[(n.UP = 38)] = "UP"),
          (n[(n.RIGHT = 39)] = "RIGHT"),
          (n[(n.DOWN = 40)] = "DOWN"),
          (n[(n.TAB = 9)] = "TAB"),
          (n[(n.LESS = 188)] = "LESS"),
          (n[(n.GREATER = 190)] = "GREATER"),
          (n[(n.DASH = 189)] = "DASH"),
          (n[(n.ZERO = 48)] = "ZERO"),
          (n[(n.ONE = 49)] = "ONE"),
          (n[(n.TWO = 50)] = "TWO"),
          (n[(n.THREE = 51)] = "THREE"),
          (n[(n.FOUR = 52)] = "FOUR"),
          (n[(n.FIVE = 53)] = "FIVE"),
          (n[(n.SIX = 54)] = "SIX"),
          (n[(n.SEVEN = 55)] = "SEVEN"),
          (n[(n.EIGHT = 56)] = "EIGHT"),
          (n[(n.NINE = 57)] = "NINE"),
          (n[(n.A = 65)] = "A"),
          (n[(n.B = 66)] = "B"),
          (n[(n.C = 67)] = "C"),
          (n[(n.D = 68)] = "D"),
          (n[(n.E = 69)] = "E"),
          (n[(n.F = 70)] = "F"),
          (n[(n.G = 71)] = "G"),
          (n[(n.H = 72)] = "H"),
          (n[(n.I = 73)] = "I"),
          (n[(n.J = 74)] = "J"),
          (n[(n.K = 75)] = "K"),
          (n[(n.L = 76)] = "L"),
          (n[(n.M = 77)] = "M"),
          (n[(n.N = 78)] = "N"),
          (n[(n.O = 79)] = "O"),
          (n[(n.P = 80)] = "P"),
          (n[(n.Q = 81)] = "Q"),
          (n[(n.R = 82)] = "R"),
          (n[(n.S = 83)] = "S"),
          (n[(n.T = 84)] = "T"),
          (n[(n.U = 85)] = "U"),
          (n[(n.V = 86)] = "V"),
          (n[(n.W = 87)] = "W"),
          (n[(n.X = 88)] = "X"),
          (n[(n.Y = 89)] = "Y"),
          (n[(n.Z = 90)] = "Z"),
          (t.Move = new Map([
            [13, "ENTER"],
            [27, "ESC"],
            [32, "SPACE"],
            [33, "PAGE_UP"],
            [34, "PAGE_DOWN"],
            [35, "END"],
            [36, "HOME"],
            [37, "LEFT"],
            [38, "UP"],
            [39, "RIGHT"],
            [40, "DOWN"],
            [9, "TAB"],
            [188, "LESS"],
            [190, "GREATER"],
            [189, "DASH"],
            [48, "ZERO"],
            [49, "ONE"],
            [50, "TWO"],
            [51, "THREE"],
            [52, "FOUR"],
            [53, "FIVE"],
            [54, "SIX"],
            [55, "SEVEN"],
            [56, "EIGHT"],
            [57, "NINE"],
            [65, "A"],
            [66, "B"],
            [67, "C"],
            [68, "D"],
            [69, "E"],
            [70, "F"],
            [71, "G"],
            [72, "H"],
            [73, "I"],
            [74, "J"],
            [75, "K"],
            [76, "L"],
            [77, "M"],
            [78, "N"],
            [79, "O"],
            [80, "P"],
            [81, "Q"],
            [82, "R"],
            [83, "S"],
            [84, "T"],
            [85, "U"],
            [86, "V"],
            [87, "W"],
            [88, "X"],
            [89, "Y"],
            [90, "Z"]
          ])),
          ((r = t.EventType || (t.EventType = {})).CLICK = "click"),
          (r.DBLCLICK = "dblclick"),
          (r.MOUSEDOWN = "mousedown"),
          (r.MOUSEUP = "mouseup"),
          (r.MOUSEOVER = "mouseover"),
          (r.MOUSEOUT = "mouseout"),
          (r.MOUSEMOVE = "mousemove"),
          (r.SELECTSTART = "selectstart"),
          (r.KEYPRESS = "keypress"),
          (r.KEYDOWN = "keydown"),
          (r.KEYUP = "keyup"),
          (r.TOUCHSTART = "touchstart"),
          (r.TOUCHMOVE = "touchmove"),
          (r.TOUCHEND = "touchend"),
          (r.TOUCHCANCEL = "touchcancel");
        t.Event = class {
          constructor(e, t, n) {
            (this.src = e), (this.type = t), (this.callback = n);
          }
          add() {
            this.src.addEventListener(this.type, this.callback);
          }
          remove() {
            this.src.removeEventListener(this.type, this.callback);
          }
        };
      },
      7129: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.localePath = t.makePath = void 0);
        const r = n(4755);
        function i(e) {
          return e.match("/$") ? e : e + "/";
        }
        (t.makePath = i),
          (t.localePath = function (e, t = "json") {
            return i(r.default.jsonPath) + e + (t.match(/^\./) ? t : "." + t);
          });
      },
      3539: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.KeyProcessor = t.Processor = void 0);
        const r = n(6988);
        class i {
          constructor(e, t) {
            (this.name = e),
              (this.process = t.processor),
              (this.postprocess = t.postprocessor || ((e, t) => e)),
              (this.processor = this.postprocess
                ? function (e) {
                    return this.postprocess(this.process(e), e);
                  }
                : this.process),
              (this.print = t.print || i.stringify_),
              (this.pprint = t.pprint || this.print);
          }
          static stringify_(e) {
            return e ? e.toString() : e;
          }
        }
        (t.Processor = i), (i.LocalState = { walker: null, speechGenerator: null, highlighter: null });
        class o extends i {
          constructor(e, t) {
            super(e, t), (this.key = t.key || o.getKey_);
          }
          static getKey_(e) {
            return "string" == typeof e ? r.KeyCode[e.toUpperCase()] : e;
          }
        }
        t.KeyProcessor = o;
      },
      9615: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.keypress = t.output = t.print = t.process = t.set = void 0);
        const r = n(4253),
          i = n(7450),
          o = n(9009),
          s = n(4524),
          a = n(1939),
          c = n(7317),
          l = n(144),
          u = n(907),
          d = n(8835),
          h = n(6671),
          p = n(4886),
          f = n(4998),
          m = n(3539),
          g = n(5024),
          S = new Map();
        function b(e) {
          S.set(e.name, e);
        }
        function N(e) {
          const t = S.get(e);
          if (!t) throw new p.SREError("Unknown processor " + e);
          return t;
        }
        function E(e, t) {
          const n = N(e);
          try {
            return n.processor(t);
          } catch (e) {
            throw new p.SREError("Processing error for expression " + t);
          }
        }
        function y(e, t) {
          const n = N(e);
          return p.default.getInstance().pprint ? n.pprint(t) : n.print(t);
        }
        (t.set = b),
          (t.process = E),
          (t.print = y),
          (t.output = function (e, t) {
            const n = N(e);
            try {
              const e = n.processor(t);
              return p.default.getInstance().pprint ? n.pprint(e) : n.print(e);
            } catch (e) {
              throw new p.SREError("Processing error for expression " + t);
            }
          }),
          (t.keypress = function (e, t) {
            const n = N(e),
              r = n instanceof m.KeyProcessor ? n.key(t) : t,
              i = n.processor(r);
            return p.default.getInstance().pprint ? n.pprint(i) : n.print(i);
          }),
          b(
            new m.Processor("semantic", {
              processor: function (e) {
                const t = h.parseInput(e);
                return a.xmlTree(t);
              },
              postprocessor: function (e, t) {
                const n = p.default.getInstance().speech;
                if (n === f.Speech.NONE) return e;
                const i = h.cloneNode(e);
                let o = l.computeMarkup(i);
                if (n === f.Speech.SHALLOW) return e.setAttribute("speech", r.finalize(o)), e;
                const s = g.evalXPath(".//*[@id]", e),
                  a = g.evalXPath(".//*[@id]", i);
                for (let e, t, n = 0; (e = s[n]), (t = a[n]); n++) (o = l.computeMarkup(t)), e.setAttribute("speech", r.finalize(o));
                return e;
              },
              pprint: function (e) {
                return h.formatXml(e.toString());
              }
            })
          ),
          b(
            new m.Processor("speech", {
              processor: function (e) {
                const t = h.parseInput(e),
                  n = a.xmlTree(t),
                  i = l.computeSpeech(n);
                return r.finalize(r.markup(i));
              },
              pprint: function (e) {
                const t = e.toString();
                return r.isXml() ? h.formatXml(t) : t;
              }
            })
          ),
          b(
            new m.Processor("json", {
              processor: function (e) {
                const t = h.parseInput(e);
                return a.getTree(t).toJson();
              },
              postprocessor: function (e, t) {
                const n = p.default.getInstance().speech;
                if (n === f.Speech.NONE) return e;
                const i = h.parseInput(t),
                  o = a.xmlTree(i),
                  s = l.computeMarkup(o);
                if (n === f.Speech.SHALLOW) return (e.stree.speech = r.finalize(s)), e;
                const c = (e) => {
                  const t = g.evalXPath(`.//*[@id=${e.id}]`, o)[0],
                    n = l.computeMarkup(t);
                  (e.speech = r.finalize(n)), e.children && e.children.forEach(c);
                };
                return c(e.stree), e;
              },
              print: function (e) {
                return JSON.stringify(e);
              },
              pprint: function (e) {
                return JSON.stringify(e, null, 2);
              }
            })
          ),
          b(
            new m.Processor("description", {
              processor: function (e) {
                const t = h.parseInput(e),
                  n = a.xmlTree(t);
                return l.computeSpeech(n);
              },
              print: function (e) {
                return JSON.stringify(e);
              },
              pprint: function (e) {
                return JSON.stringify(e, null, 2);
              }
            })
          ),
          b(
            new m.Processor("enriched", {
              processor: function (e) {
                return i.semanticMathmlSync(e);
              },
              postprocessor: function (e, t) {
                const n = d.getSemanticRoot(e);
                let r;
                switch (p.default.getInstance().speech) {
                  case f.Speech.NONE:
                    break;
                  case f.Speech.SHALLOW:
                    (r = c.generator("Adhoc")), r.getSpeech(n, e);
                    break;
                  case f.Speech.DEEP:
                    (r = c.generator("Tree")), r.getSpeech(e, e);
                }
                return e;
              },
              pprint: function (e) {
                return h.formatXml(e.toString());
              }
            })
          ),
          b(
            new m.Processor("walker", {
              processor: function (e) {
                const t = c.generator("Node");
                (m.Processor.LocalState.speechGenerator = t),
                  t.setOptions({
                    modality: p.default.getInstance().modality,
                    locale: p.default.getInstance().locale,
                    domain: p.default.getInstance().domain,
                    style: p.default.getInstance().style
                  }),
                  (m.Processor.LocalState.highlighter = o.highlighter({ color: "black" }, { color: "white" }, { renderer: "NativeMML" }));
                const n = E("enriched", e),
                  r = y("enriched", n);
                return (
                  (m.Processor.LocalState.walker = u.walker(p.default.getInstance().walker, n, t, m.Processor.LocalState.highlighter, r)),
                  m.Processor.LocalState.walker
                );
              },
              print: function (e) {
                return m.Processor.LocalState.walker.speech();
              }
            })
          ),
          b(
            new m.KeyProcessor("move", {
              processor: function (e) {
                if (!m.Processor.LocalState.walker) return null;
                return !1 === m.Processor.LocalState.walker.move(e) ? r.error(e) : m.Processor.LocalState.walker.speech();
              }
            })
          ),
          b(
            new m.Processor("number", {
              processor: function (e) {
                const t = parseInt(e, 10);
                return isNaN(t) ? "" : s.LOCALE.NUMBERS.numberToWords(t);
              }
            })
          ),
          b(
            new m.Processor("ordinal", {
              processor: function (e) {
                const t = parseInt(e, 10);
                return isNaN(t) ? "" : s.LOCALE.NUMBERS.wordOrdinal(t);
              }
            })
          ),
          b(
            new m.Processor("numericOrdinal", {
              processor: function (e) {
                const t = parseInt(e, 10);
                return isNaN(t) ? "" : s.LOCALE.NUMBERS.numericOrdinal(t);
              }
            })
          ),
          b(
            new m.Processor("vulgar", {
              processor: function (e) {
                const [t, n] = e.split("/").map((e) => parseInt(e, 10));
                return isNaN(t) || isNaN(n) ? "" : E("speech", `<mfrac><mn>${t}</mn><mn>${n}</mn></mfrac>`);
              }
            })
          );
      },
      9037: function (e, t, n) {
        var r =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function s(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function a(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(s, a);
              }
              c((r = r.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.localePath =
            t.exit =
            t.move =
            t.walk =
            t.processFile =
            t.file =
            t.vulgar =
            t.numericOrdinal =
            t.ordinal =
            t.number =
            t.toEnriched =
            t.toDescription =
            t.toJson =
            t.toSemantic =
            t.toSpeech =
            t.localeLoader =
            t.engineReady =
            t.engineSetup =
            t.setupEngine =
            t.version =
              void 0);
        const i = n(4886),
          o = n(985),
          s = n(4998),
          a = n(7129),
          c = n(9615),
          l = n(4755),
          u = n(4513),
          d = n(5659);
        function h(e) {
          return r(this, void 0, void 0, function* () {
            return (0, o.setup)(e);
          });
        }
        function p(e, t) {
          return c.process(e, t);
        }
        function f(e, t, n) {
          switch (i.default.getInstance().mode) {
            case s.Mode.ASYNC:
              return (function (e, t, n) {
                return r(this, void 0, void 0, function* () {
                  const r = yield l.default.fs.promises.readFile(t, { encoding: "utf8" }),
                    o = c.output(e, r);
                  if (n)
                    try {
                      l.default.fs.promises.writeFile(n, o);
                    } catch (e) {
                      throw new i.SREError("Can not write to file: " + n);
                    }
                  return o;
                });
              })(e, t, n);
            case s.Mode.SYNC:
              return (function (e, t, n) {
                const r = (function (e) {
                    let t;
                    try {
                      t = l.default.fs.readFileSync(e, { encoding: "utf8" });
                    } catch (t) {
                      throw new i.SREError("Can not open file: " + e);
                    }
                    return t;
                  })(t),
                  o = c.output(e, r);
                if (n)
                  try {
                    l.default.fs.writeFileSync(n, o);
                  } catch (e) {
                    throw new i.SREError("Can not write to file: " + n);
                  }
                return o;
              })(e, t, n);
            default:
              throw new i.SREError(`Can process files in ${i.default.getInstance().mode} mode`);
          }
        }
        (t.version = u.Variables.VERSION),
          (t.setupEngine = h),
          (t.engineSetup = function () {
            const e = ["mode"].concat(i.default.STRING_FEATURES, i.default.BINARY_FEATURES),
              t = i.default.getInstance(),
              n = {};
            return (
              e.forEach(function (e) {
                n[e] = t[e];
              }),
              (n.json = l.default.jsonPath),
              (n.xpath = l.default.WGXpath),
              (n.rules = t.ruleSets.slice()),
              n
            );
          }),
          (t.engineReady = function () {
            return r(this, void 0, void 0, function* () {
              return h({}).then(() => i.EnginePromise.getall());
            });
          }),
          (t.localeLoader = d.standardLoader),
          (t.toSpeech = function (e) {
            return p("speech", e);
          }),
          (t.toSemantic = function (e) {
            return p("semantic", e);
          }),
          (t.toJson = function (e) {
            return p("json", e);
          }),
          (t.toDescription = function (e) {
            return p("description", e);
          }),
          (t.toEnriched = function (e) {
            return p("enriched", e);
          }),
          (t.number = function (e) {
            return p("number", e);
          }),
          (t.ordinal = function (e) {
            return p("ordinal", e);
          }),
          (t.numericOrdinal = function (e) {
            return p("numericOrdinal", e);
          }),
          (t.vulgar = function (e) {
            return p("vulgar", e);
          }),
          (t.file = {}),
          (t.file.toSpeech = function (e, t) {
            return f("speech", e, t);
          }),
          (t.file.toSemantic = function (e, t) {
            return f("semantic", e, t);
          }),
          (t.file.toJson = function (e, t) {
            return f("json", e, t);
          }),
          (t.file.toDescription = function (e, t) {
            return f("description", e, t);
          }),
          (t.file.toEnriched = function (e, t) {
            return f("enriched", e, t);
          }),
          (t.processFile = f),
          (t.walk = function (e) {
            return c.output("walker", e);
          }),
          (t.move = function (e) {
            return c.keypress("move", e);
          }),
          (t.exit = function (e) {
            const t = e || 0;
            i.EnginePromise.getall().then(() => process.exit(t));
          }),
          (t.localePath = a.localePath),
          l.default.documentSupported
            ? h({ mode: s.Mode.HTTP }).then(() => h({}))
            : h({ mode: s.Mode.SYNC }).then(() => h({ mode: s.Mode.ASYNC }));
      },
      4755: function (__unused_webpack_module, exports, __webpack_require__) {
        var __dirname = "/";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        const variables_1 = __webpack_require__(4513);
        class SystemExternal {
          static extRequire(library) {
            if ("undefined" != typeof process) {
              const nodeRequire = eval("require");
              return nodeRequire(library);
            }
            return null;
          }
        }
        (exports.default = SystemExternal),
          (SystemExternal.windowSupported = !("undefined" == typeof window)),
          (SystemExternal.documentSupported = SystemExternal.windowSupported && !(void 0 === window.document)),
          (SystemExternal.xmldom = SystemExternal.documentSupported ? window : SystemExternal.extRequire("xmldom-sre")),
          (SystemExternal.document = SystemExternal.documentSupported
            ? window.document
            : new SystemExternal.xmldom.DOMImplementation().createDocument("", "", 0)),
          (SystemExternal.xpath = SystemExternal.documentSupported
            ? document
            : (function () {
                const e = { document: {}, XPathResult: {} };
                return SystemExternal.extRequire("wicked-good-xpath").install(e), (e.document.XPathResult = e.XPathResult), e.document;
              })()),
          (SystemExternal.mathmapsIePath = `chrome-extension://${chrome.runtime.id}/mathjax/sre-mathmaps-ie/mathmaps_ie.js`),
          (SystemExternal.commander = SystemExternal.documentSupported ? null : SystemExternal.extRequire("commander")),
          (SystemExternal.fs = SystemExternal.documentSupported ? null : SystemExternal.extRequire("fs")),
          (SystemExternal.url = variables_1.Variables.url),
          (SystemExternal.jsonPath =
            (SystemExternal.documentSupported
              ? SystemExternal.url
              : process.env.SRE_JSON_PATH || __webpack_require__.g.SRE_JSON_PATH || __dirname + "/mathmaps") + "/"),
          (SystemExternal.WGXpath = variables_1.Variables.WGXpath),
          (SystemExternal.wgxpath = null);
      },
      4513: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Variables = void 0);
        class n {
          static ensureLocale(e, t) {
            return n.LOCALES.get(e) ? e : (console.error(`Locale ${e} does not exist! Using ${n.LOCALES.get(t)} instead.`), t);
          }
        }
        (t.Variables = n),
          (n.VERSION = "4.0.6"),
          (n.LOCALES = new Map([
            ["ca", "Catalan"],
            ["da", "Danish"],
            ["de", "German"],
            ["en", "English"],
            ["es", "Spanish"],
            ["fr", "French"],
            ["hi", "Hindi"],
            ["it", "Italian"],
            ["nb", "Bokmål"],
            ["nn", "Nynorsk"],
            ["sv", "Swedish"],
            ["nemeth", "Nemeth"]
          ])),
          (n.mathjaxVersion = "3.2.1"),
          (n.url = `chrome-extension://${chrome.runtime.id}/mathjax/mathmaps`),
          (n.WGXpath = `chrome-extension://${chrome.runtime.id}/mathjax/WGXpath/wgxpath.install.js`);
      },
      5024: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.updateEvaluator = t.evaluateString = t.evaluateBoolean = t.getLeafNodes = t.evalXPath = t.resolveNameSpace = t.xpath = void 0);
        const r = n(4886),
          i = n(4998),
          o = n(4755);
        function s() {
          return "undefined" != typeof XPathResult;
        }
        t.xpath = {
          currentDocument: null,
          evaluate: s() ? document.evaluate : o.default.xpath.evaluate,
          result: s() ? XPathResult : o.default.xpath.XPathResult,
          createNSResolver: s() ? document.createNSResolver : o.default.xpath.createNSResolver
        };
        const a = {
          xhtml: "http://www.w3.org/1999/xhtml",
          mathml: "http://www.w3.org/1998/Math/MathML",
          mml: "http://www.w3.org/1998/Math/MathML",
          svg: "http://www.w3.org/2000/svg"
        };
        function c(e) {
          return a[e] || null;
        }
        t.resolveNameSpace = c;
        class l {
          constructor() {
            this.lookupNamespaceURI = c;
          }
        }
        function u(e, n, o) {
          return r.default.getInstance().mode !== i.Mode.HTTP || r.default.getInstance().isIE || r.default.getInstance().isEdge
            ? t.xpath.evaluate(e, n, new l(), o, null)
            : t.xpath.currentDocument.evaluate(e, n, c, o, null);
        }
        function d(e, n) {
          let r;
          try {
            r = u(e, n, t.xpath.result.ORDERED_NODE_ITERATOR_TYPE);
          } catch (e) {
            return [];
          }
          const i = [];
          for (let e = r.iterateNext(); e; e = r.iterateNext()) i.push(e);
          return i;
        }
        (t.evalXPath = d),
          (t.getLeafNodes = function (e) {
            return d(".//*[count(*)=0]", e);
          }),
          (t.evaluateBoolean = function (e, n) {
            let r;
            try {
              r = u(e, n, t.xpath.result.BOOLEAN_TYPE);
            } catch (e) {
              return !1;
            }
            return r.booleanValue;
          }),
          (t.evaluateString = function (e, n) {
            let r;
            try {
              r = u(e, n, t.xpath.result.STRING_TYPE);
            } catch (e) {
              return "";
            }
            return r.stringValue;
          }),
          (t.updateEvaluator = function (e) {
            if (r.default.getInstance().mode !== i.Mode.HTTP) return;
            let n = e;
            for (; n && !n.evaluate; ) n = n.parentNode;
            n && n.evaluate ? (t.xpath.currentDocument = n) : e.ownerDocument && (t.xpath.currentDocument = e.ownerDocument);
          });
      },
      9341: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.AbstractEnrichCase = void 0);
        t.AbstractEnrichCase = class {
          constructor(e) {
            this.semantic = e;
          }
        };
      },
      4306: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CaseBinomial = void 0);
        const r = n(6671),
          i = n(9341),
          o = n(8672),
          s = n(8171);
        class a extends i.AbstractEnrichCase {
          constructor(e) {
            super(e), (this.mml = e.mathmlTree);
          }
          static test(e) {
            return !e.mathmlTree && "line" === e.type && "binomial" === e.role;
          }
          getMathml() {
            if (!this.semantic.childNodes.length) return this.mml;
            const e = this.semantic.childNodes[0];
            if (((this.mml = (0, o.walkTree)(e)), this.mml.hasAttribute(s.Attribute.TYPE))) {
              const e = r.createElement("mrow");
              e.setAttribute(s.Attribute.ADDED, "true"), r.replaceNode(this.mml, e), e.appendChild(this.mml), (this.mml = e);
            }
            return (0, s.setAttributes)(this.mml, this.semantic), this.mml;
          }
        }
        t.CaseBinomial = a;
      },
      8871: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CaseDoubleScript = void 0);
        const r = n(6671),
          i = n(9341),
          o = n(8672),
          s = n(8171);
        class a extends i.AbstractEnrichCase {
          constructor(e) {
            super(e), (this.mml = e.mathmlTree);
          }
          static test(e) {
            if (!e.mathmlTree || !e.childNodes.length) return !1;
            const t = r.tagName(e.mathmlTree),
              n = e.childNodes[0].role;
            return ("MSUBSUP" === t && "subsup" === n) || ("MUNDEROVER" === t && "underover" === n);
          }
          getMathml() {
            const e = this.semantic.childNodes[0],
              t = e.childNodes[0],
              n = this.semantic.childNodes[1],
              r = e.childNodes[1],
              i = o.walkTree(n),
              a = o.walkTree(t),
              c = o.walkTree(r);
            return (
              (0, s.setAttributes)(this.mml, this.semantic),
              this.mml.setAttribute(s.Attribute.CHILDREN, (0, s.makeIdList)([t, r, n])),
              [a, c, i].forEach((e) => o.getInnerNode(e).setAttribute(s.Attribute.PARENT, this.mml.getAttribute(s.Attribute.ID))),
              this.mml.setAttribute(s.Attribute.TYPE, e.role),
              o.addCollapsedAttribute(this.mml, [this.semantic.id, [e.id, t.id, r.id], n.id]),
              this.mml
            );
          }
        }
        t.CaseDoubleScript = a;
      },
      928: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CaseEmbellished = void 0);
        const r = n(6671),
          i = n(9444),
          o = n(9341),
          s = n(8871),
          a = n(4308),
          c = n(439),
          l = n(8672),
          u = n(8171);
        class d extends o.AbstractEnrichCase {
          constructor(e) {
            super(e),
              (this.fenced = null),
              (this.fencedMml = null),
              (this.fencedMmlNodes = []),
              (this.ofence = null),
              (this.ofenceMml = null),
              (this.ofenceMap = {}),
              (this.cfence = null),
              (this.cfenceMml = null),
              (this.cfenceMap = {}),
              (this.parentCleanup = []);
          }
          static test(e) {
            return !(!e.mathmlTree || !e.fencePointer || e.mathmlTree.getAttribute("data-semantic-type"));
          }
          static makeEmptyNode_(e) {
            const t = r.createElement("mrow"),
              n = new i.SemanticNode(e);
            return (n.type = "empty"), (n.mathmlTree = t), n;
          }
          static fencedMap_(e, t) {
            (t[e.id] = e.mathmlTree), e.embellished && d.fencedMap_(e.childNodes[0], t);
          }
          getMathml() {
            this.getFenced_(),
              (this.fencedMml = l.walkTree(this.fenced)),
              this.getFencesMml_(),
              "empty" !== this.fenced.type ||
                this.fencedMml.parentNode ||
                (this.fencedMml.setAttribute(u.Attribute.ADDED, "true"),
                this.cfenceMml.parentNode.insertBefore(this.fencedMml, this.cfenceMml)),
              this.getFencedMml_();
            return this.rewrite_();
          }
          fencedElement(e) {
            return "fenced" === e.type || "matrix" === e.type || "vector" === e.type;
          }
          getFenced_() {
            let e = this.semantic;
            for (; !this.fencedElement(e); ) e = e.childNodes[0];
            (this.fenced = e.childNodes[0]),
              (this.ofence = e.contentNodes[0]),
              (this.cfence = e.contentNodes[1]),
              d.fencedMap_(this.ofence, this.ofenceMap),
              d.fencedMap_(this.cfence, this.cfenceMap);
          }
          getFencedMml_() {
            let e = this.ofenceMml.nextSibling;
            for (e = e === this.fencedMml ? e : this.fencedMml; e && e !== this.cfenceMml; )
              this.fencedMmlNodes.push(e), (e = e.nextSibling);
          }
          getFencesMml_() {
            let e = this.semantic;
            const t = Object.keys(this.ofenceMap),
              n = Object.keys(this.cfenceMap);
            for (; !((this.ofenceMml && this.cfenceMml) || e === this.fenced); )
              -1 === t.indexOf(e.fencePointer) || this.ofenceMml || (this.ofenceMml = e.mathmlTree),
                -1 === n.indexOf(e.fencePointer) || this.cfenceMml || (this.cfenceMml = e.mathmlTree),
                (e = e.childNodes[0]);
            this.ofenceMml || (this.ofenceMml = this.ofence.mathmlTree),
              this.cfenceMml || (this.cfenceMml = this.cfence.mathmlTree),
              this.ofenceMml && (this.ofenceMml = l.ascendNewNode(this.ofenceMml)),
              this.cfenceMml && (this.cfenceMml = l.ascendNewNode(this.cfenceMml));
          }
          rewrite_() {
            let e = this.semantic,
              t = null;
            const n = this.introduceNewLayer_();
            for ((0, u.setAttributes)(n, this.fenced.parent); !this.fencedElement(e); ) {
              const i = e.mathmlTree,
                o = this.specialCase_(e, i);
              if (o) e = o;
              else {
                (0, u.setAttributes)(i, e);
                const t = [];
                for (let n, r = 1; (n = e.childNodes[r]); r++) t.push(l.walkTree(n));
                e = e.childNodes[0];
              }
              const s = r.createElement("dummy"),
                a = i.childNodes[0];
              r.replaceNode(i, s), r.replaceNode(n, i), r.replaceNode(i.childNodes[0], n), r.replaceNode(s, a), t || (t = i);
            }
            return l.walkTree(this.ofence), l.walkTree(this.cfence), this.cleanupParents_(), t || n;
          }
          specialCase_(e, t) {
            const n = r.tagName(t);
            let i,
              o = null;
            if (
              ("MSUBSUP" === n
                ? ((o = e.childNodes[0]), (i = s.CaseDoubleScript))
                : "MMULTISCRIPTS" === n &&
                  ("superscript" === e.type || "subscript" === e.type
                    ? (i = a.CaseMultiscripts)
                    : "tensor" === e.type && (i = c.CaseTensor),
                  (o = i && e.childNodes[0] && "subsup" === e.childNodes[0].role ? e.childNodes[0] : e)),
              !o)
            )
              return null;
            const l = o.childNodes[0],
              u = d.makeEmptyNode_(l.id);
            return (o.childNodes[0] = u), (t = new i(e).getMathml()), (o.childNodes[0] = l), this.parentCleanup.push(t), o.childNodes[0];
          }
          introduceNewLayer_() {
            const e = this.fullFence(this.ofenceMml),
              t = this.fullFence(this.cfenceMml);
            let n = r.createElement("mrow");
            if (
              (r.replaceNode(this.fencedMml, n),
              this.fencedMmlNodes.forEach((e) => n.appendChild(e)),
              n.insertBefore(e, this.fencedMml),
              n.appendChild(t),
              !n.parentNode)
            ) {
              const e = r.createElement("mrow");
              for (; n.childNodes.length > 0; ) e.appendChild(n.childNodes[0]);
              n.appendChild(e), (n = e);
            }
            return n;
          }
          fullFence(e) {
            const t = this.fencedMml.parentNode;
            let n = e;
            for (; n.parentNode && n.parentNode !== t; ) n = n.parentNode;
            return n;
          }
          cleanupParents_() {
            this.parentCleanup.forEach(function (e) {
              const t = e.childNodes[1].getAttribute(u.Attribute.PARENT);
              e.childNodes[0].setAttribute(u.Attribute.PARENT, t);
            });
          }
        }
        t.CaseEmbellished = d;
      },
      9763: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CaseLimit = void 0);
        const r = n(6671),
          i = n(9341),
          o = n(8672),
          s = n(8171);
        class a extends i.AbstractEnrichCase {
          constructor(e) {
            super(e), (this.mml = e.mathmlTree);
          }
          static test(e) {
            if (!e.mathmlTree || !e.childNodes.length) return !1;
            const t = r.tagName(e.mathmlTree),
              n = e.type;
            return (
              (("limupper" === n || "limlower" === n) && ("MSUBSUP" === t || "MUNDEROVER" === t)) ||
              ("limboth" === n && ("MSUB" === t || "MUNDER" === t || "MSUP" === t || "MOVER" === t))
            );
          }
          static walkTree_(e) {
            e && o.walkTree(e);
          }
          getMathml() {
            const e = this.semantic.childNodes;
            return (
              "limboth" !== this.semantic.type &&
                this.mml.childNodes.length >= 3 &&
                (this.mml = o.introduceNewLayer([this.mml], this.semantic)),
              (0, s.setAttributes)(this.mml, this.semantic),
              e[0].mathmlTree || (e[0].mathmlTree = this.semantic.mathmlTree),
              e.forEach(a.walkTree_),
              this.mml
            );
          }
        }
        t.CaseLimit = a;
      },
      7978: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CaseLine = void 0);
        const r = n(9341),
          i = n(8672),
          o = n(8171);
        class s extends r.AbstractEnrichCase {
          constructor(e) {
            super(e), (this.mml = e.mathmlTree);
          }
          static test(e) {
            return !!e.mathmlTree && "line" === e.type;
          }
          getMathml() {
            return (
              this.semantic.contentNodes.length && i.walkTree(this.semantic.contentNodes[0]),
              this.semantic.childNodes.length && i.walkTree(this.semantic.childNodes[0]),
              (0, o.setAttributes)(this.mml, this.semantic),
              this.mml
            );
          }
        }
        t.CaseLine = s;
      },
      2124: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CaseMultiindex = void 0);
        const r = n(6671),
          i = n(9341),
          o = n(8672),
          s = n(8171);
        class a extends i.AbstractEnrichCase {
          constructor(e) {
            super(e), (this.mml = e.mathmlTree);
          }
          static multiscriptIndex(e) {
            return "punctuated" === e.type && "dummy" === e.contentNodes[0].role ? o.collapsePunctuated(e) : (o.walkTree(e), e.id);
          }
          static createNone_(e) {
            const t = r.createElement("none");
            return e && (0, s.setAttributes)(t, e), t.setAttribute(s.Attribute.ADDED, "true"), t;
          }
          completeMultiscript(e, t) {
            const n = r.toArray(this.mml.childNodes).slice(1);
            let i = 0;
            const c = (e) => {
              for (let t, r = 0; (t = e[r]); r++) {
                const e = n[i];
                if (e && t === parseInt(o.getInnerNode(e).getAttribute(s.Attribute.ID)))
                  o.getInnerNode(e).setAttribute(s.Attribute.PARENT, this.semantic.id.toString()), i++;
                else {
                  const n = this.semantic.querySelectorAll((e) => e.id === t);
                  this.mml.insertBefore(a.createNone_(n[0]), e || null);
                }
              }
            };
            c(e), n[i] && "MPRESCRIPTS" !== r.tagName(n[i]) ? this.mml.insertBefore(n[i], r.createElement("mprescripts")) : i++, c(t);
          }
        }
        t.CaseMultiindex = a;
      },
      4308: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CaseMultiscripts = void 0);
        const r = n(6671),
          i = n(7984),
          o = n(2124),
          s = n(8672),
          a = n(8171);
        class c extends o.CaseMultiindex {
          static test(e) {
            if (!e.mathmlTree) return !1;
            return "MMULTISCRIPTS" === r.tagName(e.mathmlTree) && ("superscript" === e.type || "subscript" === e.type);
          }
          constructor(e) {
            super(e);
          }
          getMathml() {
            let e, t, n;
            if (
              ((0, a.setAttributes)(this.mml, this.semantic), this.semantic.childNodes[0] && "subsup" === this.semantic.childNodes[0].role)
            ) {
              const r = this.semantic.childNodes[0];
              (e = r.childNodes[0]),
                (t = o.CaseMultiindex.multiscriptIndex(this.semantic.childNodes[1])),
                (n = o.CaseMultiindex.multiscriptIndex(r.childNodes[1]));
              const c = [this.semantic.id, [r.id, e.id, n], t];
              s.addCollapsedAttribute(this.mml, c),
                this.mml.setAttribute(a.Attribute.TYPE, r.role),
                this.completeMultiscript(i.SemanticSkeleton.interleaveIds(n, t), []);
            } else {
              (e = this.semantic.childNodes[0]), (t = o.CaseMultiindex.multiscriptIndex(this.semantic.childNodes[1]));
              const n = [this.semantic.id, e.id, t];
              s.addCollapsedAttribute(this.mml, n);
            }
            const r = i.SemanticSkeleton.collapsedLeafs(n || [], t),
              c = s.walkTree(e);
            return (
              s.getInnerNode(c).setAttribute(a.Attribute.PARENT, this.semantic.id.toString()),
              r.unshift(e.id),
              this.mml.setAttribute(a.Attribute.CHILDREN, r.join(",")),
              this.mml
            );
          }
        }
        t.CaseMultiscripts = c;
      },
      5326: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CaseProof = void 0);
        const r = n(9341),
          i = n(8672),
          o = n(8171);
        class s extends r.AbstractEnrichCase {
          constructor(e) {
            super(e), (this.mml = e.mathmlTree);
          }
          static test(e) {
            return !!e.mathmlTree && ("inference" === e.type || "premises" === e.type);
          }
          getMathml() {
            return this.semantic.childNodes.length
              ? (this.semantic.contentNodes.forEach(function (e) {
                  i.walkTree(e), (0, o.setAttributes)(e.mathmlTree, e);
                }),
                this.semantic.childNodes.forEach(function (e) {
                  i.walkTree(e);
                }),
                (0, o.setAttributes)(this.mml, this.semantic),
                this.mml.getAttribute("data-semantic-id") === this.mml.getAttribute("data-semantic-parent") &&
                  this.mml.removeAttribute("data-semantic-parent"),
                this.mml)
              : this.mml;
          }
        }
        t.CaseProof = s;
      },
      6998: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CaseTable = void 0);
        const r = n(6671),
          i = n(9341),
          o = n(8672),
          s = n(8171);
        class a extends i.AbstractEnrichCase {
          constructor(e) {
            super(e), (this.inner = []), (this.mml = e.mathmlTree);
          }
          static test(e) {
            return "matrix" === e.type || "vector" === e.type || "cases" === e.type;
          }
          getMathml() {
            const e = o.cloneContentNode(this.semantic.contentNodes[0]),
              t = this.semantic.contentNodes[1] ? o.cloneContentNode(this.semantic.contentNodes[1]) : null;
            if (((this.inner = this.semantic.childNodes.map(o.walkTree)), this.mml))
              if ("MFENCED" === r.tagName(this.mml)) {
                const n = this.mml.childNodes;
                this.mml.insertBefore(e, n[0] || null), t && this.mml.appendChild(t), (this.mml = o.rewriteMfenced(this.mml));
              } else {
                const n = [e, this.mml];
                t && n.push(t), (this.mml = o.introduceNewLayer(n, this.semantic));
              }
            else this.mml = o.introduceNewLayer([e].concat(this.inner, [t]), this.semantic);
            return (0, s.setAttributes)(this.mml, this.semantic), this.mml;
          }
        }
        t.CaseTable = a;
      },
      439: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CaseTensor = void 0);
        const r = n(7984),
          i = n(2124),
          o = n(8672),
          s = n(8171);
        class a extends i.CaseMultiindex {
          static test(e) {
            return !!e.mathmlTree && "tensor" === e.type;
          }
          constructor(e) {
            super(e);
          }
          getMathml() {
            o.walkTree(this.semantic.childNodes[0]);
            const e = i.CaseMultiindex.multiscriptIndex(this.semantic.childNodes[1]),
              t = i.CaseMultiindex.multiscriptIndex(this.semantic.childNodes[2]),
              n = i.CaseMultiindex.multiscriptIndex(this.semantic.childNodes[3]),
              a = i.CaseMultiindex.multiscriptIndex(this.semantic.childNodes[4]);
            (0, s.setAttributes)(this.mml, this.semantic);
            const c = [this.semantic.id, this.semantic.childNodes[0].id, e, t, n, a];
            o.addCollapsedAttribute(this.mml, c);
            const l = r.SemanticSkeleton.collapsedLeafs(e, t, n, a);
            return (
              l.unshift(this.semantic.childNodes[0].id),
              this.mml.setAttribute(s.Attribute.CHILDREN, l.join(",")),
              this.completeMultiscript(r.SemanticSkeleton.interleaveIds(n, a), r.SemanticSkeleton.interleaveIds(e, t)),
              this.mml
            );
          }
        }
        t.CaseTensor = a;
      },
      598: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CaseText = void 0);
        const r = n(9341),
          i = n(8672),
          o = n(8171);
        class s extends r.AbstractEnrichCase {
          constructor(e) {
            super(e), (this.mml = e.mathmlTree);
          }
          static test(e) {
            return "punctuated" === e.type && ("text" === e.role || e.contentNodes.every((e) => "dummy" === e.role));
          }
          getMathml() {
            const e = [],
              t = i.collapsePunctuated(this.semantic, e);
            return (
              (this.mml = i.introduceNewLayer(e, this.semantic)),
              (0, o.setAttributes)(this.mml, this.semantic),
              this.mml.removeAttribute(o.Attribute.CONTENT),
              i.addCollapsedAttribute(this.mml, t),
              this.mml
            );
          }
        }
        t.CaseText = s;
      },
      7450: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.prepareMmlString = t.testTranslation__ = t.semanticMathml = t.semanticMathmlSync = t.semanticMathmlNode = void 0);
        const r = n(1984),
          i = n(6671),
          o = n(4886),
          s = n(1939),
          a = n(8672),
          c = n(8171);
        function l(e) {
          const t = i.cloneNode(e),
            n = s.getTree(t);
          return a.enrich(t, n);
        }
        function u(e) {
          return l(i.parseInput(e));
        }
        function d(e) {
          return e.match(/^<math/) || (e = "<math>" + e), e.match(/\/math>$/) || (e += "</math>"), e;
        }
        n(7813),
          (t.semanticMathmlNode = l),
          (t.semanticMathmlSync = u),
          (t.semanticMathml = function (e, t) {
            o.EnginePromise.getall().then(() => {
              const n = i.parseInput(e);
              t(l(n));
            });
          }),
          (t.testTranslation__ = function (e) {
            r.Debugger.getInstance().init();
            const t = u(d(e)).toString();
            return (0, c.removeAttributePrefix)(t), r.Debugger.getInstance().exit(), t;
          }),
          (t.prepareMmlString = d);
      },
      8171: function (e, t) {
        var n;
        function r(e) {
          return e
            .map(function (e) {
              return e.id;
            })
            .join(",");
        }
        function i(e, t) {
          const r = [];
          "mglyph" === t.role && r.push("image"), t.attributes.href && r.push("link"), r.length && e.setAttribute(n.POSTFIX, r.join(" "));
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.addPrefix =
            t.removeAttributePrefix =
            t.setPostfix =
            t.setAttributes =
            t.makeIdList =
            t.EnrichAttributes =
            t.Attribute =
            t.Prefix =
              void 0),
          (t.Prefix = "data-semantic-"),
          (function (e) {
            (e.ADDED = "data-semantic-added"),
              (e.ALTERNATIVE = "data-semantic-alternative"),
              (e.CHILDREN = "data-semantic-children"),
              (e.COLLAPSED = "data-semantic-collapsed"),
              (e.CONTENT = "data-semantic-content"),
              (e.EMBELLISHED = "data-semantic-embellished"),
              (e.FENCEPOINTER = "data-semantic-fencepointer"),
              (e.FONT = "data-semantic-font"),
              (e.ID = "data-semantic-id"),
              (e.ANNOTATION = "data-semantic-annotation"),
              (e.OPERATOR = "data-semantic-operator"),
              (e.OWNS = "data-semantic-owns"),
              (e.PARENT = "data-semantic-parent"),
              (e.POSTFIX = "data-semantic-postfix"),
              (e.PREFIX = "data-semantic-prefix"),
              (e.ROLE = "data-semantic-role"),
              (e.SPEECH = "data-semantic-speech"),
              (e.STRUCTURE = "data-semantic-structure"),
              (e.TYPE = "data-semantic-type");
          })((n = t.Attribute || (t.Attribute = {}))),
          (t.EnrichAttributes = [
            n.ADDED,
            n.ALTERNATIVE,
            n.CHILDREN,
            n.COLLAPSED,
            n.CONTENT,
            n.EMBELLISHED,
            n.FENCEPOINTER,
            n.FONT,
            n.ID,
            n.ANNOTATION,
            n.OPERATOR,
            n.OWNS,
            n.PARENT,
            n.POSTFIX,
            n.PREFIX,
            n.ROLE,
            n.SPEECH,
            n.STRUCTURE,
            n.TYPE
          ]),
          (t.makeIdList = r),
          (t.setAttributes = function (e, o) {
            e.setAttribute(n.TYPE, o.type);
            const s = o.allAttributes();
            for (let n, r = 0; (n = s[r]); r++) e.setAttribute(t.Prefix + n[0].toLowerCase(), n[1]);
            o.childNodes.length && e.setAttribute(n.CHILDREN, r(o.childNodes)),
              o.contentNodes.length && e.setAttribute(n.CONTENT, r(o.contentNodes)),
              o.parent && e.setAttribute(n.PARENT, o.parent.id.toString()),
              i(e, o);
          }),
          (t.setPostfix = i),
          (t.removeAttributePrefix = function (e) {
            return e.toString().replace(new RegExp(t.Prefix, "g"), "");
          }),
          (t.addPrefix = function (e) {
            return t.Prefix + e;
          });
      },
      9775: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.factory = t.getCase = void 0),
          (t.getCase = function (e) {
            for (let n, r = 0; (n = t.factory[r]); r++) if (n.test(e)) return n.constr(e);
            return null;
          }),
          (t.factory = []);
      },
      7813: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(4306),
          i = n(8871),
          o = n(928),
          s = n(9763),
          a = n(7978),
          c = n(4308),
          l = n(5326),
          u = n(6998),
          d = n(439),
          h = n(598);
        n(9775).factory.push(
          { test: s.CaseLimit.test, constr: (e) => new s.CaseLimit(e) },
          { test: o.CaseEmbellished.test, constr: (e) => new o.CaseEmbellished(e) },
          { test: i.CaseDoubleScript.test, constr: (e) => new i.CaseDoubleScript(e) },
          { test: d.CaseTensor.test, constr: (e) => new d.CaseTensor(e) },
          { test: c.CaseMultiscripts.test, constr: (e) => new c.CaseMultiscripts(e) },
          { test: a.CaseLine.test, constr: (e) => new a.CaseLine(e) },
          { test: r.CaseBinomial.test, constr: (e) => new r.CaseBinomial(e) },
          { test: l.CaseProof.test, constr: (e) => new l.CaseProof(e) },
          { test: u.CaseTable.test, constr: (e) => new u.CaseTable(e) },
          { test: h.CaseText.test, constr: (e) => new h.CaseText(e) }
        );
      },
      8672: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.printNodeList__ =
            t.collapsePunctuated =
            t.formattedOutput_ =
            t.formattedOutput =
            t.getInnerNode =
            t.setOperatorAttribute_ =
            t.createInvisibleOperator_ =
            t.rewriteMfenced =
            t.cloneContentNode =
            t.addCollapsedAttribute =
            t.parentNode_ =
            t.isIgnorable_ =
            t.unitChild_ =
            t.descendNode_ =
            t.ascendNewNode =
            t.validLca_ =
            t.pathToRoot_ =
            t.attachedElement_ =
            t.prunePath_ =
            t.mathmlLca_ =
            t.lcaType =
            t.functionApplication_ =
            t.isDescendant_ =
            t.insertNewChild_ =
            t.mergeChildren_ =
            t.collectChildNodes_ =
            t.collateChildNodes_ =
            t.childrenSubset_ =
            t.moveSemanticAttributes_ =
            t.introduceLayerAboveLca =
            t.introduceNewLayer =
            t.walkTree =
            t.enrich =
            t.SETTINGS =
              void 0);
        const r = n(1984),
          i = n(6671),
          o = n(4886),
          s = n(4020),
          a = n(2721),
          c = n(7984),
          l = n(8901),
          u = n(8171),
          d = n(9775);
        function h(e) {
          const t = (0, d.getCase)(e);
          let n;
          if (t) return (n = t.getMathml()), I(n);
          if (1 === e.mathml.length)
            return (
              r.Debugger.getInstance().output("Walktree Case 0"),
              (n = e.mathml[0]),
              u.setAttributes(n, e),
              e.childNodes.length &&
                (r.Debugger.getInstance().output("Walktree Case 0.1"),
                e.childNodes.forEach(function (e) {
                  "empty" === e.type && n.appendChild(h(e));
                })),
              I(n)
            );
          const i = e.contentNodes.map(F);
          k(e, i);
          const o = e.childNodes.map(h),
            s = c.SemanticSkeleton.combineContentChildren(e, i, o);
          if (((n = e.mathmlTree), null === n)) r.Debugger.getInstance().output("Walktree Case 1"), (n = p(s, e));
          else {
            const e = v(s);
            r.Debugger.getInstance().output("Walktree Case 2"),
              e
                ? (r.Debugger.getInstance().output("Walktree Case 2.1"), (n = e.parentNode))
                : (r.Debugger.getInstance().output("Walktree Case 2.2"), (n = U(n)));
          }
          return (n = D(n)), N(n, s, e), u.setAttributes(n, e), I(n);
        }
        function p(e, t) {
          const n = C(e);
          let o = n.node;
          const s = n.type;
          if (s !== _.VALID || !l.hasEmptyTag(o))
            if ((r.Debugger.getInstance().output("Walktree Case 1.1"), (o = i.createElement("mrow")), s === _.PRUNED))
              r.Debugger.getInstance().output("Walktree Case 1.1.0"), (o = f(o, n.node, e));
            else if (e[0]) {
              r.Debugger.getInstance().output("Walktree Case 1.1.1");
              const t = v(e),
                n = g(t.parentNode, e);
              i.replaceNode(t, o),
                n.forEach(function (e) {
                  o.appendChild(e);
                });
            }
          return t.mathmlTree || (t.mathmlTree = o), o;
        }
        function f(e, t, n) {
          let o = L(t);
          if (l.hasMathTag(o)) {
            r.Debugger.getInstance().output("Walktree Case 1.1.0.0"),
              m(o, e),
              i.toArray(o.childNodes).forEach(function (t) {
                e.appendChild(t);
              });
            const t = e;
            (e = o), (o = t);
          }
          const s = n.indexOf(t);
          return (
            (n[s] = o),
            i.replaceNode(o, e),
            e.appendChild(o),
            n.forEach(function (t) {
              e.appendChild(t);
            }),
            e
          );
        }
        function m(e, t) {
          for (const n of u.EnrichAttributes) e.hasAttribute(n) && (t.setAttribute(n, e.getAttribute(n)), e.removeAttribute(n));
        }
        function g(e, t) {
          const n = i.toArray(e.childNodes);
          let r = 1 / 0,
            o = -1 / 0;
          return (
            t.forEach(function (e) {
              const t = n.indexOf(e);
              -1 !== t && ((r = Math.min(r, t)), (o = Math.max(o, t)));
            }),
            n.slice(r, o + 1)
          );
        }
        function S(e, t, n) {
          const r = [];
          let o = i.toArray(e.childNodes),
            s = !1;
          for (; o.length; ) {
            const e = o.shift();
            if (e.hasAttribute(u.Attribute.TYPE)) {
              r.push(e);
              continue;
            }
            const t = b(e);
            0 !== t.length && (1 !== t.length ? (s ? e.setAttribute("AuxiliaryImplicit", !0) : (s = !0), (o = t.concat(o))) : r.push(e));
          }
          const a = [],
            c = n.childNodes.map(function (e) {
              return e.mathmlTree;
            });
          for (; c.length; ) {
            const e = c.pop();
            if (e) {
              if (-1 !== r.indexOf(e)) break;
              -1 !== t.indexOf(e) && a.unshift(e);
            }
          }
          return r.concat(a);
        }
        function b(e) {
          const t = [];
          let n = i.toArray(e.childNodes);
          for (; n.length; ) {
            const e = n.shift();
            e.nodeType === i.NodeType.ELEMENT_NODE &&
              (e.hasAttribute(u.Attribute.TYPE) ? t.push(e) : (n = i.toArray(e.childNodes).concat(n)));
          }
          return t;
        }
        function N(e, t, n) {
          const r = "implicit" === n.role && a.flags.combine_juxtaposition ? S(e, t, n) : i.toArray(e.childNodes);
          if (!r.length)
            return void t.forEach(function (t) {
              e.appendChild(t);
            });
          let o = 0;
          for (; t.length; ) {
            const n = t[0];
            r[o] === n || A(r[o], n) ? (t.shift(), o++) : r[o] && -1 === t.indexOf(r[o]) ? o++ : (y(n, e) || E(e, r[o], n), t.shift());
          }
        }
        function E(e, t, n) {
          if (!t) return void e.insertBefore(n, null);
          let r = t,
            i = P(r);
          for (; i && i.firstChild === r && !r.hasAttribute("AuxiliaryImplicit") && i !== e; ) (r = i), (i = P(r));
          i && (i.insertBefore(n, r), r.removeAttribute("AuxiliaryImplicit"));
        }
        function y(e, t) {
          if (!e) return !1;
          do {
            if ((e = e.parentNode) === t) return !0;
          } while (e);
          return !1;
        }
        function A(e, t) {
          const n = s.functionApplication();
          if (
            e &&
            t &&
            e.textContent &&
            t.textContent &&
            e.textContent === n &&
            t.textContent === n &&
            "true" === t.getAttribute(u.Attribute.ADDED)
          ) {
            for (let n, r = 0; (n = e.attributes[r]); r++) t.hasAttribute(n.nodeName) || t.setAttribute(n.nodeName, n.nodeValue);
            return i.replaceNode(e, t), !0;
          }
          return !1;
        }
        var _;
        function C(e) {
          const t = v(e);
          if (!t) return { type: _.INVALID, node: null };
          const n = v(e.slice().reverse());
          if (t === n) return { type: _.VALID, node: t };
          const r = M(t),
            i = T(r, e),
            o = M(n, function (e) {
              return -1 !== i.indexOf(e);
            }),
            s = o[0],
            a = i.indexOf(s);
          return -1 === a
            ? { type: _.INVALID, node: null }
            : { type: i.length !== r.length ? _.PRUNED : O(i[a + 1], o[1]) ? _.VALID : _.INVALID, node: s };
        }
        function T(e, t) {
          let n = 0;
          for (; e[n] && -1 === t.indexOf(e[n]); ) n++;
          return e.slice(0, n + 1);
        }
        function v(e) {
          let t = 0,
            n = null;
          for (; !n && t < e.length; ) e[t].parentNode && (n = e[t]), t++;
          return n;
        }
        function M(e, t) {
          const n = t || ((e) => !1),
            r = [e];
          for (; !n(e) && !l.hasMathTag(e) && e.parentNode; ) (e = P(e)), r.unshift(e);
          return r;
        }
        function O(e, t) {
          return !(!e || !t || e.previousSibling || t.nextSibling);
        }
        function I(e) {
          for (; !l.hasMathTag(e) && R(e); ) e = P(e);
          return e;
        }
        function L(e) {
          const t = i.toArray(e.childNodes);
          if (!t) return e;
          const n = t.filter(function (e) {
            return e.nodeType === i.NodeType.ELEMENT_NODE && !l.hasIgnoreTag(e);
          });
          return 1 === n.length && l.hasEmptyTag(n[0]) && !n[0].hasAttribute(u.Attribute.TYPE) ? L(n[0]) : e;
        }
        function R(e) {
          const t = P(e);
          return (
            !(!t || !l.hasEmptyTag(t)) &&
            i.toArray(t.childNodes).every(function (t) {
              return t === e || x(t);
            })
          );
        }
        function x(e) {
          if (e.nodeType !== i.NodeType.ELEMENT_NODE) return !0;
          if (!e || l.hasIgnoreTag(e)) return !0;
          const t = i.toArray(e.childNodes);
          return (
            !((!l.hasEmptyTag(e) && t.length) || l.hasDisplayTag(e) || e.hasAttribute(u.Attribute.TYPE) || l.isOrphanedGlyph(e)) &&
            i.toArray(e.childNodes).every(x)
          );
        }
        function P(e) {
          return e.parentNode;
        }
        function F(e) {
          if (e.mathml.length) return h(e);
          const n = t.SETTINGS.implicit ? w(e) : i.createElement("mrow");
          return (e.mathml = [n]), n;
        }
        function D(e) {
          if ("MFENCED" !== i.tagName(e)) return e;
          const t = i.createElement("mrow");
          for (let n, r = 0; (n = e.attributes[r]); r++)
            -1 === ["open", "close", "separators"].indexOf(n.name) && t.setAttribute(n.name, n.value);
          return (
            i.toArray(e.childNodes).forEach(function (e) {
              t.appendChild(e);
            }),
            i.replaceNode(e, t),
            t
          );
        }
        function w(e) {
          const t = i.createElement("mo"),
            n = i.createTextNode(e.textContent);
          return t.appendChild(n), u.setAttributes(t, e), t.setAttribute(u.Attribute.ADDED, "true"), t;
        }
        function k(e, t) {
          const n = e.type + (e.textContent ? "," + e.textContent : "");
          t.forEach(function (e) {
            U(e).setAttribute(u.Attribute.OPERATOR, n);
          });
        }
        function U(e) {
          const t = i.toArray(e.childNodes);
          if (!t) return e;
          const n = t.filter(function (e) {
              return !x(e);
            }),
            r = [];
          for (let e, t = 0; (e = n[t]); t++)
            if (l.hasEmptyTag(e)) {
              const t = U(e);
              t && t !== e && r.push(t);
            } else r.push(e);
          return 1 === r.length ? r[0] : e;
        }
        function B(e, t, n, r) {
          const i = r || !1;
          j(e, "Original MathML", i), j(n, "Semantic Tree", i), j(t, "Semantically enriched MathML", i);
        }
        function j(e, t, n) {
          const r = i.formatXml(e.toString());
          n ? console.info(t + ":\n```html\n" + u.removeAttributePrefix(r) + "\n```\n") : console.info(r);
        }
        (t.SETTINGS = { collapsed: !0, implicit: !0 }),
          (t.enrich = function (e, t) {
            const n = i.cloneNode(e);
            return (
              h(t.root),
              o.default.getInstance().structure && e.setAttribute(u.Attribute.STRUCTURE, c.SemanticSkeleton.fromStructure(e, t).toString()),
              r.Debugger.getInstance().generateOutput(function () {
                return B(n, e, t, !0), [];
              }),
              e
            );
          }),
          (t.walkTree = h),
          (t.introduceNewLayer = p),
          (t.introduceLayerAboveLca = f),
          (t.moveSemanticAttributes_ = m),
          (t.childrenSubset_ = g),
          (t.collateChildNodes_ = S),
          (t.collectChildNodes_ = b),
          (t.mergeChildren_ = N),
          (t.insertNewChild_ = E),
          (t.isDescendant_ = y),
          (t.functionApplication_ = A),
          (function (e) {
            (e.VALID = "valid"), (e.INVALID = "invalid"), (e.PRUNED = "pruned");
          })((_ = t.lcaType || (t.lcaType = {}))),
          (t.mathmlLca_ = C),
          (t.prunePath_ = T),
          (t.attachedElement_ = v),
          (t.pathToRoot_ = M),
          (t.validLca_ = O),
          (t.ascendNewNode = I),
          (t.descendNode_ = L),
          (t.unitChild_ = R),
          (t.isIgnorable_ = x),
          (t.parentNode_ = P),
          (t.addCollapsedAttribute = function (e, t) {
            const n = new c.SemanticSkeleton(t);
            e.setAttribute(u.Attribute.COLLAPSED, n.toString());
          }),
          (t.cloneContentNode = F),
          (t.rewriteMfenced = D),
          (t.createInvisibleOperator_ = w),
          (t.setOperatorAttribute_ = k),
          (t.getInnerNode = U),
          (t.formattedOutput = B),
          (t.formattedOutput_ = j),
          (t.collapsePunctuated = function (e, t) {
            const n = !!t,
              r = t || [],
              i = e.parent,
              o = e.contentNodes.map(function (e) {
                return e.id;
              });
            o.unshift("c");
            const s = [e.id, o];
            for (let t, o = 0; (t = e.childNodes[o]); o++) {
              const e = h(t);
              r.push(e);
              const o = U(e);
              i && !n && o.setAttribute(u.Attribute.PARENT, i.id.toString()), s.push(t.id);
            }
            return s;
          }),
          (t.printNodeList__ = function (e, t) {
            console.info(e),
              i.toArray(t).forEach(function (e) {
                console.info(e.toString());
              }),
              console.info("<<<<<<<<<<<<<<<<<");
          });
      },
      7228: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.AbstractHighlighter = void 0);
        const r = n(5024),
          i = n(8171);
        class o {
          constructor() {
            (this.color = null), (this.mactionName = ""), (this.currentHighlights = []);
          }
          highlight(e) {
            this.currentHighlights.push(
              e.map((e) => {
                const t = this.highlightNode(e);
                return this.setHighlighted(e), t;
              })
            );
          }
          highlightAll(e) {
            const t = this.getMactionNodes(e);
            for (let e, n = 0; (e = t[n]); n++) this.highlight([e]);
          }
          unhighlight() {
            const e = this.currentHighlights.pop();
            e &&
              e.forEach((e) => {
                this.isHighlighted(e.node) && (this.unhighlightNode(e), this.unsetHighlighted(e.node));
              });
          }
          unhighlightAll() {
            for (; this.currentHighlights.length > 0; ) this.unhighlight();
          }
          setColor(e) {
            this.color = e;
          }
          colorString() {
            return this.color.rgba();
          }
          addEvents(e, t) {
            const n = this.getMactionNodes(e);
            for (let e, r = 0; (e = n[r]); r++) for (const n in t) e.addEventListener(n, t[n]);
          }
          getMactionNodes(e) {
            return Array.from(e.getElementsByClassName(this.mactionName));
          }
          isMactionNode(e) {
            const t = e.className || e.getAttribute("class");
            return !!t && !!t.match(new RegExp(this.mactionName));
          }
          isHighlighted(e) {
            return e.hasAttribute(o.ATTR);
          }
          setHighlighted(e) {
            e.setAttribute(o.ATTR, "true");
          }
          unsetHighlighted(e) {
            e.removeAttribute(o.ATTR);
          }
          colorizeAll(e) {
            r.evalXPath(`.//*[@${i.Attribute.ID}]`, e).forEach((e) => this.colorize(e));
          }
          uncolorizeAll(e) {
            r.evalXPath(`.//*[@${i.Attribute.ID}]`, e).forEach((e) => this.uncolorize(e));
          }
          colorize(e) {
            const t = (0, i.addPrefix)("foreground");
            e.hasAttribute(t) && (e.setAttribute(t + "-old", e.style.color), (e.style.color = e.getAttribute(t)));
          }
          uncolorize(e) {
            const t = (0, i.addPrefix)("foreground") + "-old";
            e.hasAttribute(t) && (e.style.color = e.getAttribute(t));
          }
        }
        (t.AbstractHighlighter = o), (o.ATTR = "sre-highlight");
      },
      7567: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.ChtmlHighlighter = void 0);
        const r = n(9400);
        class i extends r.CssHighlighter {
          constructor() {
            super();
          }
          isMactionNode(e) {
            return e.tagName.toUpperCase() === this.mactionName.toUpperCase();
          }
          getMactionNodes(e) {
            return Array.from(e.getElementsByTagName(this.mactionName));
          }
        }
        t.ChtmlHighlighter = i;
      },
      1123: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.ContrastPicker = t.ColorPicker = void 0);
        const n = {
          red: { red: 255, green: 0, blue: 0 },
          green: { red: 0, green: 255, blue: 0 },
          blue: { red: 0, green: 0, blue: 255 },
          yellow: { red: 255, green: 255, blue: 0 },
          cyan: { red: 0, green: 255, blue: 255 },
          magenta: { red: 255, green: 0, blue: 255 },
          white: { red: 255, green: 255, blue: 255 },
          black: { red: 0, green: 0, blue: 0 }
        };
        function r(e, t) {
          const r = e || { color: t };
          let i = Object.prototype.hasOwnProperty.call(r, "color") ? n[r.color] : r;
          return (
            i || (i = n[t]),
            (i.alpha = Object.prototype.hasOwnProperty.call(r, "alpha") ? r.alpha : 1),
            (function (e) {
              const t = (e) => ((e = Math.max(e, 0)), (e = Math.min(255, e)), Math.round(e));
              return (
                (e.red = t(e.red)),
                (e.green = t(e.green)),
                (e.blue = t(e.blue)),
                (e.alpha = Math.max(e.alpha, 0)),
                (e.alpha = Math.min(1, e.alpha)),
                e
              );
            })(i)
          );
        }
        class i {
          constructor(e, t) {
            (this.foreground = r(t, i.DEFAULT_FOREGROUND_)), (this.background = r(e, i.DEFAULT_BACKGROUND_));
          }
          static toHex(e) {
            const t = e.toString(16);
            return 1 === t.length ? "0" + t : t;
          }
          rgba() {
            const e = function (e) {
              return "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
            };
            return { background: e(this.background), foreground: e(this.foreground) };
          }
          rgb() {
            const e = function (e) {
              return "rgb(" + e.red + "," + e.green + "," + e.blue + ")";
            };
            return {
              background: e(this.background),
              alphaback: this.background.alpha.toString(),
              foreground: e(this.foreground),
              alphafore: this.foreground.alpha.toString()
            };
          }
          hex() {
            const e = function (e) {
              return "#" + i.toHex(e.red) + i.toHex(e.green) + i.toHex(e.blue);
            };
            return {
              background: e(this.background),
              alphaback: this.background.alpha.toString(),
              foreground: e(this.foreground),
              alphafore: this.foreground.alpha.toString()
            };
          }
        }
        (t.ColorPicker = i), (i.DEFAULT_BACKGROUND_ = "blue"), (i.DEFAULT_FOREGROUND_ = "black");
        t.ContrastPicker = class {
          constructor() {
            (this.hue = 10), (this.sat = 100), (this.light = 50), (this.incr = 50);
          }
          generate() {
            return (
              (t = (function (e, t, n) {
                (t = t > 1 ? t / 100 : t), (n = n > 1 ? n / 100 : n);
                const r = (1 - Math.abs(2 * n - 1)) * t,
                  i = r * (1 - Math.abs(((e / 60) % 2) - 1)),
                  o = n - r / 2;
                let s = 0,
                  a = 0,
                  c = 0;
                return (
                  0 <= e && e < 60
                    ? ([s, a, c] = [r, i, 0])
                    : 60 <= e && e < 120
                    ? ([s, a, c] = [i, r, 0])
                    : 120 <= e && e < 180
                    ? ([s, a, c] = [0, r, i])
                    : 180 <= e && e < 240
                    ? ([s, a, c] = [0, i, r])
                    : 240 <= e && e < 300
                    ? ([s, a, c] = [i, 0, r])
                    : 300 <= e && e < 360 && ([s, a, c] = [r, 0, i]),
                  { red: s + o, green: a + o, blue: c + o }
                );
              })(this.hue, this.sat, this.light)),
              "rgb(" +
                (e = { red: Math.round(255 * t.red), green: Math.round(255 * t.green), blue: Math.round(255 * t.blue) }).red +
                "," +
                e.green +
                "," +
                e.blue +
                ")"
            );
            var e, t;
          }
          increment() {
            this.hue = (this.hue + this.incr) % 360;
          }
        };
      },
      9400: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.CssHighlighter = void 0);
        const r = n(7228);
        class i extends r.AbstractHighlighter {
          constructor() {
            super(), (this.mactionName = "mjx-maction");
          }
          highlightNode(e) {
            const t = { node: e, background: e.style.backgroundColor, foreground: e.style.color },
              n = this.colorString();
            return (e.style.backgroundColor = n.background), (e.style.color = n.foreground), t;
          }
          unhighlightNode(e) {
            (e.node.style.backgroundColor = e.background), (e.node.style.color = e.foreground);
          }
        }
        t.CssHighlighter = i;
      },
      9009: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.highlighterMapping_ = t.addEvents = t.highlighter = void 0);
        const r = n(7567),
          i = n(1123),
          o = n(9400),
          s = n(7872),
          a = n(3711),
          c = n(4662),
          l = n(3507),
          u = n(280);
        (t.highlighter = function (e, n, r) {
          const o = new i.ColorPicker(e, n),
            s =
              "NativeMML" === r.renderer && "Safari" === r.browser
                ? "MML-CSS"
                : "SVG" === r.renderer && "v3" === r.browser
                ? "SVG-V3"
                : r.renderer,
            a = new (t.highlighterMapping_[s] || t.highlighterMapping_.NativeMML)();
          return a.setColor(o), a;
        }),
          (t.addEvents = function (e, n, r) {
            const i = t.highlighterMapping_[r.renderer];
            i && new i().addEvents(e, n);
          }),
          (t.highlighterMapping_ = {
            SVG: l.SvgHighlighter,
            "SVG-V3": u.SvgV3Highlighter,
            NativeMML: c.MmlHighlighter,
            "HTML-CSS": s.HtmlHighlighter,
            "MML-CSS": a.MmlCssHighlighter,
            CommonHTML: o.CssHighlighter,
            CHTML: r.ChtmlHighlighter
          });
      },
      7872: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.HtmlHighlighter = void 0);
        const r = n(6671),
          i = n(7228);
        class o extends i.AbstractHighlighter {
          constructor() {
            super(), (this.mactionName = "maction");
          }
          highlightNode(e) {
            const t = { node: e, foreground: e.style.color, position: e.style.position },
              n = this.color.rgb();
            (e.style.color = n.foreground), (e.style.position = "relative");
            const i = e.bbox;
            if (i && i.w) {
              const o = 0.05,
                s = 0,
                a = r.createElement("span"),
                c = parseFloat(e.style.paddingLeft || "0");
              (a.style.backgroundColor = n.background),
                (a.style.opacity = n.alphaback.toString()),
                (a.style.display = "inline-block"),
                (a.style.height = i.h + i.d + 2 * o + "em"),
                (a.style.verticalAlign = -i.d + "em"),
                (a.style.marginTop = a.style.marginBottom = -o + "em"),
                (a.style.width = i.w + 2 * s + "em"),
                (a.style.marginLeft = c - s + "em"),
                (a.style.marginRight = -i.w - s - c + "em"),
                e.parentNode.insertBefore(a, e),
                (t.box = a);
            }
            return t;
          }
          unhighlightNode(e) {
            const t = e.node;
            (t.style.color = e.foreground), (t.style.position = e.position), e.box && e.box.parentNode.removeChild(e.box);
          }
        }
        t.HtmlHighlighter = o;
      },
      3711: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.MmlCssHighlighter = void 0);
        const r = n(9400);
        class i extends r.CssHighlighter {
          constructor() {
            super(), (this.mactionName = "maction");
          }
          getMactionNodes(e) {
            return Array.from(e.getElementsByTagName(this.mactionName));
          }
          isMactionNode(e) {
            return e.tagName === this.mactionName;
          }
        }
        t.MmlCssHighlighter = i;
      },
      4662: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.MmlHighlighter = void 0);
        const r = n(7228);
        class i extends r.AbstractHighlighter {
          constructor() {
            super(), (this.mactionName = "maction");
          }
          highlightNode(e) {
            let t = e.getAttribute("style");
            return (
              (t += ";background-color: " + this.colorString().background),
              (t += ";color: " + this.colorString().foreground),
              e.setAttribute("style", t),
              { node: e }
            );
          }
          unhighlightNode(e) {
            let t = e.node.getAttribute("style");
            (t = t.replace(";background-color: " + this.colorString().background, "")),
              (t = t.replace(";color: " + this.colorString().foreground, "")),
              e.node.setAttribute("style", t);
          }
          colorString() {
            return this.color.rgba();
          }
          getMactionNodes(e) {
            return Array.from(e.getElementsByTagName(this.mactionName));
          }
          isMactionNode(e) {
            return e.tagName === this.mactionName;
          }
        }
        t.MmlHighlighter = i;
      },
      3507: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SvgHighlighter = void 0);
        const r = n(6671),
          i = n(7228);
        class o extends i.AbstractHighlighter {
          constructor() {
            super(), (this.mactionName = "mjx-svg-maction");
          }
          highlightNode(e) {
            let t;
            if (this.isHighlighted(e))
              return (t = { node: e.previousSibling || e, background: e.style.backgroundColor, foreground: e.style.color }), t;
            if ("svg" === e.tagName) {
              const t = { node: e, background: e.style.backgroundColor, foreground: e.style.color };
              return (e.style.backgroundColor = this.colorString().background), (e.style.color = this.colorString().foreground), t;
            }
            const n = r.createElementNS("http://www.w3.org/2000/svg", "rect");
            let o;
            if ("use" === e.nodeName) {
              const t = r.createElementNS("http://www.w3.org/2000/svg", "g");
              e.parentNode.insertBefore(t, e), t.appendChild(e), (o = t.getBBox()), t.parentNode.replaceChild(e, t);
            } else o = e.getBBox();
            n.setAttribute("x", (o.x - 40).toString()),
              n.setAttribute("y", (o.y - 40).toString()),
              n.setAttribute("width", (o.width + 80).toString()),
              n.setAttribute("height", (o.height + 80).toString());
            const s = e.getAttribute("transform");
            return (
              s && n.setAttribute("transform", s),
              n.setAttribute("fill", this.colorString().background),
              n.setAttribute(i.AbstractHighlighter.ATTR, "true"),
              e.parentNode.insertBefore(n, e),
              (t = { node: n, foreground: e.getAttribute("fill") }),
              e.setAttribute("fill", this.colorString().foreground),
              t
            );
          }
          setHighlighted(e) {
            "svg" === e.tagName && super.setHighlighted(e);
          }
          unhighlightNode(e) {
            if ("background" in e) return (e.node.style.backgroundColor = e.background), void (e.node.style.color = e.foreground);
            e.foreground ? e.node.nextSibling.setAttribute("fill", e.foreground) : e.node.nextSibling.removeAttribute("fill"),
              e.node.parentNode.removeChild(e.node);
          }
          isMactionNode(e) {
            let t = e.className || e.getAttribute("class");
            return (t = void 0 !== t.baseVal ? t.baseVal : t), !!t && !!t.match(new RegExp(this.mactionName));
          }
        }
        t.SvgHighlighter = o;
      },
      280: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SvgV3Highlighter = void 0);
        const r = n(6671),
          i = n(5024),
          o = n(7228),
          s = n(1123),
          a = n(3507);
        class c extends a.SvgHighlighter {
          constructor() {
            super(), (this.mactionName = "maction");
          }
          highlightNode(e) {
            let t;
            if (this.isHighlighted(e))
              return (t = { node: e, background: this.colorString().background, foreground: this.colorString().foreground }), t;
            if ("svg" === e.tagName || "MJX-CONTAINER" === e.tagName)
              return (
                (t = { node: e, background: e.style.backgroundColor, foreground: e.style.color }),
                (e.style.backgroundColor = this.colorString().background),
                (e.style.color = this.colorString().foreground),
                t
              );
            const n = r.createElementNS("http://www.w3.org/2000/svg", "rect");
            n.setAttribute("sre-highlighter-added", "true");
            const i = e.getBBox();
            n.setAttribute("x", (i.x - 40).toString()),
              n.setAttribute("y", (i.y - 40).toString()),
              n.setAttribute("width", (i.width + 80).toString()),
              n.setAttribute("height", (i.height + 80).toString());
            const a = e.getAttribute("transform");
            if (
              (a && n.setAttribute("transform", a),
              n.setAttribute("fill", this.colorString().background),
              e.setAttribute(o.AbstractHighlighter.ATTR, "true"),
              e.parentNode.insertBefore(n, e),
              (t = { node: e, foreground: e.getAttribute("fill") }),
              "rect" === e.nodeName)
            ) {
              const t = new s.ColorPicker({ alpha: 0, color: "black" });
              e.setAttribute("fill", t.rgba().foreground);
            } else e.setAttribute("fill", this.colorString().foreground);
            return t;
          }
          unhighlightNode(e) {
            const t = e.node.previousSibling;
            if (t && t.hasAttribute("sre-highlighter-added"))
              return (
                e.foreground ? e.node.setAttribute("fill", e.foreground) : e.node.removeAttribute("fill"),
                void e.node.parentNode.removeChild(t)
              );
            (e.node.style.backgroundColor = e.background), (e.node.style.color = e.foreground);
          }
          isMactionNode(e) {
            return e.getAttribute("data-mml-node") === this.mactionName;
          }
          getMactionNodes(e) {
            return Array.from(i.evalXPath(`.//*[@data-mml-node="${this.mactionName}"]`, e));
          }
        }
        t.SvgV3Highlighter = c;
      },
      1473: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.StaticTrieNode = t.AbstractTrieNode = void 0);
        const r = n(1984),
          i = n(9259);
        class o {
          constructor(e, t) {
            (this.constraint = e), (this.test = t), (this.children_ = {}), (this.kind = i.TrieNodeKind.ROOT);
          }
          getConstraint() {
            return this.constraint;
          }
          getKind() {
            return this.kind;
          }
          applyTest(e) {
            return this.test(e);
          }
          addChild(e) {
            const t = e.getConstraint(),
              n = this.children_[t];
            return (this.children_[t] = e), n;
          }
          getChild(e) {
            return this.children_[e];
          }
          getChildren() {
            const e = [];
            for (const t in this.children_) e.push(this.children_[t]);
            return e;
          }
          findChildren(e) {
            const t = [];
            for (const n in this.children_) {
              const r = this.children_[n];
              r.applyTest(e) && t.push(r);
            }
            return t;
          }
          removeChild(e) {
            delete this.children_[e];
          }
          toString() {
            return this.constraint;
          }
        }
        t.AbstractTrieNode = o;
        t.StaticTrieNode = class extends o {
          constructor(e, t) {
            super(e, t), (this.rule_ = null), (this.kind = i.TrieNodeKind.STATIC);
          }
          getRule() {
            return this.rule_;
          }
          setRule(e) {
            this.rule_ && r.Debugger.getInstance().output("Replacing rule " + this.rule_ + " with " + e), (this.rule_ = e);
          }
          toString() {
            return this.getRule() ? this.constraint + "\n==> " + this.getRule().action : this.constraint;
          }
        };
      },
      2803: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Trie = void 0);
        const r = n(9259),
          i = n(9146);
        class o {
          constructor() {
            this.root = (0, i.getNode)(r.TrieNodeKind.ROOT, "", null);
          }
          static collectRules_(e) {
            const t = [];
            let n = [e];
            for (; n.length; ) {
              const e = n.shift();
              if (e.getKind() === r.TrieNodeKind.QUERY || e.getKind() === r.TrieNodeKind.BOOLEAN) {
                const n = e.getRule();
                n && t.unshift(n);
              }
              n = n.concat(e.getChildren());
            }
            return t;
          }
          static printWithDepth_(e, t, n) {
            n += new Array(t + 2).join(t.toString()) + ": " + e.toString() + "\n";
            const r = e.getChildren();
            for (let e, i = 0; (e = r[i]); i++) n = o.printWithDepth_(e, t + 1, n);
            return n;
          }
          static order_(e) {
            const t = e.getChildren();
            if (!t.length) return 0;
            const n = Math.max.apply(null, t.map(o.order_));
            return Math.max(t.length, n);
          }
          addRule(e) {
            let t = this.root;
            const n = e.context,
              i = e.dynamicCstr.getValues();
            for (let e = 0, o = i.length; e < o; e++) t = this.addNode_(t, i[e], r.TrieNodeKind.DYNAMIC, n);
            t = this.addNode_(t, e.precondition.query, r.TrieNodeKind.QUERY, n);
            const o = e.precondition.constraints;
            for (let e = 0, i = o.length; e < i; e++) t = this.addNode_(t, o[e], r.TrieNodeKind.BOOLEAN, n);
            t.setRule(e);
          }
          lookupRules(e, t) {
            let n = [this.root];
            const i = [];
            for (; t.length; ) {
              const e = t.shift(),
                i = [];
              for (; n.length; ) {
                n.shift()
                  .getChildren()
                  .forEach((t) => {
                    (t.getKind() === r.TrieNodeKind.DYNAMIC && -1 === e.indexOf(t.getConstraint())) || i.push(t);
                  });
              }
              n = i.slice();
            }
            for (; n.length; ) {
              const t = n.shift();
              if (t.getRule) {
                const e = t.getRule();
                e && i.push(e);
              }
              const r = t.findChildren(e);
              n = n.concat(r);
            }
            return i;
          }
          hasSubtrie(e) {
            let t = this.root;
            for (let n = 0, r = e.length; n < r; n++) {
              const r = e[n];
              if (((t = t.getChild(r)), !t)) return !1;
            }
            return !0;
          }
          toString() {
            return o.printWithDepth_(this.root, 0, "");
          }
          collectRules() {
            return o.collectRules_(this.root);
          }
          order() {
            return o.order_(this.root);
          }
          enumerate(e) {
            return this.enumerate_(this.root, e);
          }
          byConstraint(e) {
            let t = this.root;
            for (; e.length && t; ) {
              const n = e.shift();
              t = t.getChild(n);
            }
            return t || null;
          }
          enumerate_(e, t) {
            t = t || {};
            const n = e.getChildren();
            for (let e, i = 0; (e = n[i]); i++)
              e.kind === r.TrieNodeKind.DYNAMIC && (t[e.getConstraint()] = this.enumerate_(e, t[e.getConstraint()]));
            return t;
          }
          addNode_(e, t, n, r) {
            let o = e.getChild(t);
            return o || ((o = (0, i.getNode)(n, t, r)), e.addChild(o)), o;
          }
        }
        t.Trie = o;
      },
      9259: function (e, t) {
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TrieNodeKind = void 0),
          ((n = t.TrieNodeKind || (t.TrieNodeKind = {})).ROOT = "root"),
          (n.DYNAMIC = "dynamic"),
          (n.QUERY = "query"),
          (n.BOOLEAN = "boolean"),
          (n.STATIC = "static");
      },
      9146: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BooleanTrieNode = t.QueryTrieNode = t.constraintTest_ = t.DynamicTrieNode = t.RootTrieNode = t.getNode = void 0);
        const r = n(6671),
          i = n(5024),
          o = n(1058),
          s = n(4161),
          a = n(1473),
          c = n(1473),
          l = n(9259);
        t.getNode = function (e, t, n) {
          switch (e) {
            case l.TrieNodeKind.ROOT:
              return new u();
            case l.TrieNodeKind.DYNAMIC:
              return new d(t);
            case l.TrieNodeKind.QUERY:
              return new f(t, n);
            case l.TrieNodeKind.BOOLEAN:
              return new m(t, n);
            default:
              return null;
          }
        };
        class u extends a.AbstractTrieNode {
          constructor() {
            super("", () => !0), (this.kind = l.TrieNodeKind.ROOT);
          }
        }
        t.RootTrieNode = u;
        class d extends a.AbstractTrieNode {
          constructor(e) {
            super(e, (t) => t === e), (this.kind = l.TrieNodeKind.DYNAMIC);
          }
        }
        t.DynamicTrieNode = d;
        const h = {
          "=": (e, t) => e === t,
          "!=": (e, t) => e !== t,
          "<": (e, t) => e < t,
          ">": (e, t) => e > t,
          "<=": (e, t) => e <= t,
          ">=": (e, t) => e >= t
        };
        function p(e) {
          if (e.match(/^self::\*$/)) return (e) => !0;
          if (e.match(/^self::\w+$/)) {
            const t = e.slice(6).toUpperCase();
            return (e) => e.tagName && r.tagName(e) === t;
          }
          if (e.match(/^self::\w+:\w+$/)) {
            const t = e.split(":"),
              n = i.resolveNameSpace(t[2]);
            if (!n) return null;
            const r = t[3].toUpperCase();
            return (e) => e.localName && e.localName.toUpperCase() === r && e.namespaceURI === n;
          }
          if (e.match(/^@\w+$/)) {
            const t = e.slice(1);
            return (e) => e.hasAttribute && e.hasAttribute(t);
          }
          if (e.match(/^@\w+="[\w\d ]+"$/)) {
            const t = e.split("="),
              n = t[0].slice(1),
              r = t[1].slice(1, -1);
            return (e) => e.hasAttribute && e.hasAttribute(n) && e.getAttribute(n) === r;
          }
          if (e.match(/^@\w+!="[\w\d ]+"$/)) {
            const t = e.split("!="),
              n = t[0].slice(1),
              r = t[1].slice(1, -1);
            return (e) => !e.hasAttribute || !e.hasAttribute(n) || e.getAttribute(n) !== r;
          }
          if (e.match(/^contains\(\s*@grammar\s*,\s*"[\w\d ]+"\s*\)$/)) {
            const t = e.split('"')[1];
            return (e) => !!o.Grammar.getInstance().getParameter(t);
          }
          if (e.match(/^not\(\s*contains\(\s*@grammar\s*,\s*"[\w\d ]+"\s*\)\s*\)$/)) {
            const t = e.split('"')[1];
            return (e) => !o.Grammar.getInstance().getParameter(t);
          }
          if (e.match(/^name\(\.\.\/\.\.\)="\w+"$/)) {
            const t = e.split('"')[1].toUpperCase();
            return (e) => {
              var n, i;
              return (
                (null === (i = null === (n = e.parentNode) || void 0 === n ? void 0 : n.parentNode) || void 0 === i ? void 0 : i.tagName) &&
                r.tagName(e.parentNode.parentNode) === t
              );
            };
          }
          if (e.match(/^count\(preceding-sibling::\*\)=\d+$/)) {
            const t = e.split("="),
              n = parseInt(t[1], 10);
            return (e) => {
              var t;
              return (null === (t = e.parentNode) || void 0 === t ? void 0 : t.childNodes[n]) === e;
            };
          }
          if (e.match(/^.+\[@category!?=".+"\]$/)) {
            let [, t, n, r] = e.match(/^(.+)\[@category(!?=)"(.+)"\]$/);
            const o = r.match(/^unit:(.+)$/);
            let a = "";
            return (
              o && ((r = o[1]), (a = ":unit")),
              (e) => {
                const o = i.evalXPath(t, e)[0];
                if (o) {
                  const e = s.lookupCategory(o.textContent + a);
                  return "=" === n ? e === r : e !== r;
                }
                return !1;
              }
            );
          }
          if (e.match(/^string-length\(.+\)\W+\d+/)) {
            const [, t, n, r] = e.match(/^string-length\((.+)\)(\W+)(\d+)/),
              o = h[n] || h["="],
              s = parseInt(r, 10);
            return (e) => {
              const n = i.evalXPath(t, e)[0];
              return !!n && o(Array.from(n.textContent).length, s);
            };
          }
          return null;
        }
        t.constraintTest_ = p;
        class f extends c.StaticTrieNode {
          constructor(e, t) {
            super(e, p(e)), (this.context = t), (this.kind = l.TrieNodeKind.QUERY);
          }
          applyTest(e) {
            return this.test ? this.test(e) : this.context.applyQuery(e, this.constraint) === e;
          }
        }
        t.QueryTrieNode = f;
        class m extends c.StaticTrieNode {
          constructor(e, t) {
            super(e, p(e)), (this.context = t), (this.kind = l.TrieNodeKind.BOOLEAN);
          }
          applyTest(e) {
            return this.test ? this.test(e) : this.context.applyConstraint(e, this.constraint);
          }
        }
        t.BooleanTrieNode = m;
      },
      2371: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.completeLocale = t.getLocale = t.setLocale = t.locales = void 0);
        const r = n(4886),
          i = n(4513),
          o = n(1058),
          s = n(8597),
          a = n(9883),
          c = n(2523),
          l = n(3938),
          u = n(9139),
          d = n(1547),
          h = n(346),
          p = n(13),
          f = n(6238),
          m = n(2913),
          g = n(3305),
          S = n(9770),
          b = n(4524);
        function N() {
          const e = i.Variables.ensureLocale(r.default.getInstance().locale, r.default.getInstance().defaultLocale);
          return (r.default.getInstance().locale = e), t.locales[e]();
        }
        (t.locales = {
          ca: s.ca,
          da: a.da,
          de: c.de,
          en: l.en,
          es: u.es,
          fr: d.fr,
          hi: h.hi,
          it: p.it,
          nb: f.nb,
          nn: g.nn,
          sv: S.sv,
          nemeth: m.nemeth
        }),
          (t.setLocale = function () {
            const e = N();
            if (
              ((function (e) {
                const t = r.default.getInstance().subiso;
                -1 === e.SUBISO.all.indexOf(t) && (r.default.getInstance().subiso = e.SUBISO.default);
                e.SUBISO.current = r.default.getInstance().subiso;
              })(e),
              e)
            ) {
              for (const t of Object.getOwnPropertyNames(e)) b.LOCALE[t] = e[t];
              for (const [t, n] of Object.entries(e.CORRECTIONS)) o.Grammar.getInstance().setCorrection(t, n);
            }
          }),
          (t.getLocale = N),
          (t.completeLocale = function (e) {
            const n = t.locales[e.locale];
            if (!n) return void console.error("Locale " + e.locale + " does not exist!");
            const r = e.kind.toUpperCase(),
              i = e.messages;
            if (!i) return;
            const o = n();
            for (const [e, t] of Object.entries(i)) o[r][e] = t;
          });
      },
      4524: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.createLocale = t.LOCALE = void 0);
        const r = n(4277);
        function i() {
          return {
            FUNCTIONS: (0, r.FUNCTIONS)(),
            MESSAGES: (0, r.MESSAGES)(),
            ALPHABETS: (0, r.ALPHABETS)(),
            NUMBERS: (0, r.NUMBERS)(),
            COMBINERS: {},
            CORRECTIONS: {},
            SUBISO: (0, r.SUBISO)()
          };
        }
        (t.LOCALE = i()), (t.createLocale = i);
      },
      3319: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.localeFontCombiner =
            t.extractString =
            t.localEnclose =
            t.localRole =
            t.localFont =
            t.combinePostfixIndex =
            t.nestingToString =
              void 0);
        const r = n(4524),
          i = n(9385);
        function o(e, t) {
          return void 0 === e ? t : "string" == typeof e ? e : e[0];
        }
        (t.nestingToString = function (e) {
          switch (e) {
            case 1:
              return r.LOCALE.MESSAGES.MS.ONCE || "";
            case 2:
              return r.LOCALE.MESSAGES.MS.TWICE;
            default:
              return e.toString();
          }
        }),
          (t.combinePostfixIndex = function (e, t) {
            return e === r.LOCALE.MESSAGES.MS.ROOTINDEX || e === r.LOCALE.MESSAGES.MS.INDEX ? e : e + " " + t;
          }),
          (t.localFont = function (e) {
            return o(r.LOCALE.MESSAGES.font[e], e);
          }),
          (t.localRole = function (e) {
            return o(r.LOCALE.MESSAGES.role[e], e);
          }),
          (t.localEnclose = function (e) {
            return o(r.LOCALE.MESSAGES.enclose[e], e);
          }),
          (t.extractString = o),
          (t.localeFontCombiner = function (e) {
            return "string" == typeof e
              ? { font: e, combiner: r.LOCALE.ALPHABETS.combiner }
              : { font: e[0], combiner: r.LOCALE.COMBINERS[e[1]] || i.Combiners[e[1]] || r.LOCALE.ALPHABETS.combiner };
          });
      },
      8597: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.ca = void 0);
        const r = n(4524),
          i = n(3319),
          o = n(165),
          s = n(9385),
          a = function (e, t, n) {
            return (e = "sans serif " + (n ? n + " " + e : e)), t ? e + " " + t : e;
          };
        let c = null;
        t.ca = function () {
          return (
            c ||
              (c = (function () {
                const e = (0, r.createLocale)();
                return (
                  (e.NUMBERS = o.default),
                  (e.COMBINERS.sansserif = a),
                  (e.FUNCTIONS.fracNestDepth = (e) => !1),
                  (e.FUNCTIONS.combineRootIndex = i.combinePostfixIndex),
                  (e.FUNCTIONS.combineNestedRadical = (e, t, n) => e + n),
                  (e.FUNCTIONS.fontRegexp = (e) => RegExp("^" + e + " ")),
                  (e.FUNCTIONS.plural = (e) =>
                    /.*os$/.test(e)
                      ? e + "sos"
                      : /.*s$/.test(e)
                      ? e + "os"
                      : /.*ga$/.test(e)
                      ? e.slice(0, -2) + "gues"
                      : /.*ça$/.test(e)
                      ? e.slice(0, -2) + "ces"
                      : /.*ca$/.test(e)
                      ? e.slice(0, -2) + "ques"
                      : /.*ja$/.test(e)
                      ? e.slice(0, -2) + "ges"
                      : /.*qua$/.test(e)
                      ? e.slice(0, -3) + "qües"
                      : /.*a$/.test(e)
                      ? e.slice(0, -1) + "es"
                      : /.*(e|i)$/.test(e)
                      ? e + "ns"
                      : /.*í$/.test(e)
                      ? e.slice(0, -1) + "ins"
                      : e + "s"),
                  (e.FUNCTIONS.si = (e, t) => (
                    t.match(/^metre/) && (e = e.replace(/a$/, "à").replace(/o$/, "ò").replace(/i$/, "í")), e + t
                  )),
                  (e.ALPHABETS.combiner = s.Combiners.prefixCombiner),
                  e
                );
              })()),
            c
          );
        };
      },
      9883: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.da = void 0);
        const r = n(4524),
          i = n(3319),
          o = n(5571),
          s = n(9385);
        let a = null;
        t.da = function () {
          return (
            a ||
              (a = (function () {
                const e = (0, r.createLocale)();
                return (
                  (e.NUMBERS = o.default),
                  (e.FUNCTIONS.radicalNestDepth = i.nestingToString),
                  (e.FUNCTIONS.fontRegexp = (t) => (t === e.ALPHABETS.capPrefix.default ? RegExp("^" + t + " ") : RegExp(" " + t + "$"))),
                  (e.ALPHABETS.combiner = s.Combiners.postfixCombiner),
                  (e.ALPHABETS.digitTrans.default = o.default.numberToWords),
                  e
                );
              })()),
            a
          );
        };
      },
      2523: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.de = void 0);
        const r = n(1058),
          i = n(3319),
          o = n(4524),
          s = n(757),
          a = function (e, t, n) {
            return (
              "s" === n &&
                ((t = t
                  .split(" ")
                  .map(function (e) {
                    return e.replace(/s$/, "");
                  })
                  .join(" ")),
                (n = "")),
              (e = n ? n + " " + e : e),
              t ? t + " " + e : e
            );
          },
          c = function (e, t, n) {
            return (e = n && "s" !== n ? n + " " + e : e), t ? e + " " + t : e;
          };
        let l = null;
        t.de = function () {
          return (
            l ||
              (l = (function () {
                const e = (0, o.createLocale)();
                return (
                  (e.NUMBERS = s.default),
                  (e.COMBINERS.germanPostfix = c),
                  (e.ALPHABETS.combiner = a),
                  (e.FUNCTIONS.radicalNestDepth = (t) => (t > 1 ? e.NUMBERS.numberToWords(t) + "fach" : "")),
                  (e.FUNCTIONS.combineRootIndex = (e, t) => {
                    const n = t ? t + "wurzel" : "";
                    return e.replace("Wurzel", n);
                  }),
                  (e.FUNCTIONS.combineNestedRadical = (e, t, n) => {
                    const r = (t ? t + " " : "") + (e = n.match(/exponent$/) ? e + "r" : e);
                    return n.match(/ /) ? n.replace(/ /, " " + r + " ") : r + " " + n;
                  }),
                  (e.FUNCTIONS.fontRegexp = function (e) {
                    return (
                      (e = e
                        .split(" ")
                        .map(function (e) {
                          return e.replace(/s$/, "(|s)");
                        })
                        .join(" ")),
                      new RegExp("((^" + e + " )|( " + e + "$))")
                    );
                  }),
                  (e.CORRECTIONS.correctOne = (e) => e.replace(/^eins$/, "ein")),
                  (e.CORRECTIONS.localFontNumber = (e) =>
                    (0, i.localFont)(e)
                      .split(" ")
                      .map(function (e) {
                        return e.replace(/s$/, "");
                      })
                      .join(" ")),
                  (e.CORRECTIONS.lowercase = (e) => e.toLowerCase()),
                  (e.CORRECTIONS.article = (e) => {
                    const t = r.Grammar.getInstance().getParameter("case"),
                      n = r.Grammar.getInstance().getParameter("plural");
                    return "dative" === t ? { der: "dem", die: n ? "den" : "der", das: "dem" }[e] : e;
                  }),
                  (e.CORRECTIONS.masculine = (e) => ("dative" === r.Grammar.getInstance().getParameter("case") ? e + "n" : e)),
                  e
                );
              })()),
            l
          );
        };
      },
      3938: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.en = void 0);
        const r = n(1058),
          i = n(4524),
          o = n(3319),
          s = n(166),
          a = n(9385);
        let c = null;
        t.en = function () {
          return (
            c ||
              (c = (function () {
                const e = (0, i.createLocale)();
                return (
                  (e.NUMBERS = s.default),
                  (e.FUNCTIONS.radicalNestDepth = o.nestingToString),
                  (e.FUNCTIONS.plural = (e) => (/.*s$/.test(e) ? e : e + "s")),
                  (e.ALPHABETS.combiner = a.Combiners.prefixCombiner),
                  (e.ALPHABETS.digitTrans.default = s.default.numberToWords),
                  (e.CORRECTIONS.article = (e) => (r.Grammar.getInstance().getParameter("noArticle") ? "" : e)),
                  e
                );
              })()),
            c
          );
        };
      },
      9139: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.es = void 0);
        const r = n(4524),
          i = n(3319),
          o = n(6154),
          s = n(9385),
          a = function (e, t, n) {
            return (e = "sans serif " + (n ? n + " " + e : e)), t ? e + " " + t : e;
          };
        let c = null;
        t.es = function () {
          return (
            c ||
              (c = (function () {
                const e = (0, r.createLocale)();
                return (
                  (e.NUMBERS = o.default),
                  (e.COMBINERS.sansserif = a),
                  (e.FUNCTIONS.fracNestDepth = (e) => !1),
                  (e.FUNCTIONS.combineRootIndex = i.combinePostfixIndex),
                  (e.FUNCTIONS.combineNestedRadical = (e, t, n) => e + n),
                  (e.FUNCTIONS.fontRegexp = (e) => RegExp("^" + e + " ")),
                  (e.FUNCTIONS.plural = (e) =>
                    /.*(a|e|i|o|u)$/.test(e)
                      ? e + "s"
                      : /.*z$/.test(e)
                      ? e.slice(0, -1) + "ces"
                      : /.*c$/.test(e)
                      ? e.slice(0, -1) + "ques"
                      : /.*g$/.test(e)
                      ? e + "ues"
                      : /.*\u00f3n$/.test(e)
                      ? e.slice(0, -2) + "ones"
                      : e + "es"),
                  (e.FUNCTIONS.si = (e, t) => (
                    t.match(/^metro/) && (e = e.replace(/a$/, "á").replace(/o$/, "ó").replace(/i$/, "í")), e + t
                  )),
                  (e.ALPHABETS.combiner = s.Combiners.prefixCombiner),
                  e
                );
              })()),
            c
          );
        };
      },
      1547: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.fr = void 0);
        const r = n(1058),
          i = n(4524),
          o = n(3319),
          s = n(4394),
          a = n(9385);
        let c = null;
        t.fr = function () {
          return (
            c ||
              (c = (function () {
                const e = (0, i.createLocale)();
                return (
                  (e.NUMBERS = s.default),
                  (e.FUNCTIONS.radicalNestDepth = o.nestingToString),
                  (e.FUNCTIONS.combineRootIndex = o.combinePostfixIndex),
                  (e.FUNCTIONS.combineNestedFraction = (e, t, n) => n.replace(/ $/g, "") + t + e),
                  (e.FUNCTIONS.combineNestedRadical = (e, t, n) => n + " " + e),
                  (e.FUNCTIONS.fontRegexp = (e) => RegExp(" (en |)" + e + "$")),
                  (e.FUNCTIONS.plural = (e) => (/.*s$/.test(e) ? e : e + "s")),
                  (e.CORRECTIONS.article = (e) => (r.Grammar.getInstance().getParameter("noArticle") ? "" : e)),
                  (e.ALPHABETS.combiner = a.Combiners.romanceCombiner),
                  (e.SUBISO = { default: "fr", current: "fr", all: ["fr", "be", "ch"] }),
                  e
                );
              })()),
            c
          );
        };
      },
      346: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.hi = void 0);
        const r = n(4524),
          i = n(1779),
          o = n(9385),
          s = n(3319);
        let a = null;
        t.hi = function () {
          return (
            a ||
              (a = (function () {
                const e = (0, r.createLocale)();
                return (
                  (e.NUMBERS = i.default),
                  (e.ALPHABETS.combiner = o.Combiners.prefixCombiner),
                  (e.FUNCTIONS.radicalNestDepth = s.nestingToString),
                  e
                );
              })()),
            a
          );
        };
      },
      13: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.it = void 0);
        const r = n(3319),
          i = n(4524),
          o = n(5952),
          s = n(9385),
          a = function (e, t, n) {
            return e.match(/^[a-zA-Z]$/) && (t = t.replace("cerchiato", "cerchiata")), (e = n ? e + " " + n : e), t ? e + " " + t : e;
          };
        let c = null;
        t.it = function () {
          return (
            c ||
              (c = (function () {
                const e = (0, i.createLocale)();
                return (
                  (e.NUMBERS = o.default),
                  (e.COMBINERS.italianPostfix = a),
                  (e.FUNCTIONS.radicalNestDepth = r.nestingToString),
                  (e.FUNCTIONS.combineRootIndex = r.combinePostfixIndex),
                  (e.FUNCTIONS.combineNestedFraction = (e, t, n) => n.replace(/ $/g, "") + t + e),
                  (e.FUNCTIONS.combineNestedRadical = (e, t, n) => n + " " + e),
                  (e.FUNCTIONS.fontRegexp = (e) => RegExp(" (en |)" + e + "$")),
                  (e.ALPHABETS.combiner = s.Combiners.romanceCombiner),
                  e
                );
              })()),
            c
          );
        };
      },
      6238: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.nb = void 0);
        const r = n(4524),
          i = n(3319),
          o = n(984),
          s = n(9385);
        let a = null;
        t.nb = function () {
          return (
            a ||
              (a = (function () {
                const e = (0, r.createLocale)();
                return (
                  (e.NUMBERS = o.default),
                  (e.ALPHABETS.combiner = s.Combiners.prefixCombiner),
                  (e.ALPHABETS.digitTrans.default = o.default.numberToWords),
                  (e.FUNCTIONS.radicalNestDepth = i.nestingToString),
                  e
                );
              })()),
            a
          );
        };
      },
      2913: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.nemeth = void 0);
        const r = n(4524),
          i = n(3669),
          o = n(9385),
          s = function (e) {
            return e.match(RegExp("^" + h.ALPHABETS.languagePrefix.english)) ? e.slice(1) : e;
          },
          a = function (e, t, n) {
            return (e = s(e)), t ? e + t : e;
          },
          c = function (e, t, n) {
            return t + s(e);
          },
          l = function (e, t, n) {
            return t + (n || "") + (e = s(e)) + "⠻";
          },
          u = function (e, t, n) {
            return t + (n || "") + (e = s(e)) + "⠻⠻";
          },
          d = function (e, t, n) {
            return t + (e = s(e)) + "⠾";
          };
        let h = null;
        t.nemeth = function () {
          return (
            h ||
              (h = (function () {
                const e = (0, r.createLocale)();
                return (
                  (e.NUMBERS = i.default),
                  (e.COMBINERS = {
                    postfixCombiner: a,
                    germanCombiner: c,
                    embellishCombiner: l,
                    doubleEmbellishCombiner: u,
                    parensCombiner: d
                  }),
                  (e.FUNCTIONS.fracNestDepth = (e) => !1),
                  (e.FUNCTIONS.fontRegexp = (e) => RegExp("^" + e)),
                  (e.FUNCTIONS.si = o.identityTransformer),
                  (e.ALPHABETS.combiner = (e, t, n) => (t ? t + n + e : s(e))),
                  (e.ALPHABETS.digitTrans = { default: i.default.numberToWords }),
                  e
                );
              })()),
            h
          );
        };
      },
      3305: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.nn = void 0);
        const r = n(4524),
          i = n(3319),
          o = n(984),
          s = n(9385);
        let a = null;
        t.nn = function () {
          return (
            a ||
              (a = (function () {
                const e = (0, r.createLocale)();
                return (
                  (e.NUMBERS = o.default),
                  (e.ALPHABETS.combiner = s.Combiners.prefixCombiner),
                  (e.ALPHABETS.digitTrans.default = o.default.numberToWords),
                  (e.FUNCTIONS.radicalNestDepth = i.nestingToString),
                  (e.SUBISO = { default: "", current: "", all: ["", "alt"] }),
                  e
                );
              })()),
            a
          );
        };
      },
      9770: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.sv = void 0);
        const r = n(4524),
          i = n(3319),
          o = n(6416),
          s = n(9385);
        let a = null;
        t.sv = function () {
          return (
            a ||
              (a = (function () {
                const e = (0, r.createLocale)();
                return (
                  (e.NUMBERS = o.default),
                  (e.FUNCTIONS.radicalNestDepth = i.nestingToString),
                  (e.FUNCTIONS.fontRegexp = function (e) {
                    return new RegExp("((^" + e + " )|( " + e + "$))");
                  }),
                  (e.ALPHABETS.combiner = s.Combiners.prefixCombiner),
                  (e.ALPHABETS.digitTrans.default = o.default.numberToWords),
                  (e.CORRECTIONS.correctOne = (e) => e.replace(/^ett$/, "en")),
                  e
                );
              })()),
            a
          );
        };
      },
      4277: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SUBISO = t.FUNCTIONS = t.ALPHABETS = t.NUMBERS = t.MESSAGES = void 0);
        const r = n(9385);
        (t.MESSAGES = function () {
          return { MS: {}, MSroots: {}, font: {}, embellish: {}, role: {}, enclose: {}, navigate: {}, regexp: {}, unitTimes: "" };
        }),
          (t.NUMBERS = function () {
            return {
              zero: "zero",
              ones: [],
              tens: [],
              large: [],
              special: {},
              wordOrdinal: r.identityTransformer,
              numericOrdinal: r.identityTransformer,
              numberToWords: r.identityTransformer,
              numberToOrdinal: r.pluralCase,
              vulgarSep: " ",
              numSep: " "
            };
          }),
          (t.ALPHABETS = function () {
            return {
              latinSmall: [],
              latinCap: [],
              greekSmall: [],
              greekCap: [],
              capPrefix: { default: "" },
              smallPrefix: { default: "" },
              digitPrefix: { default: "" },
              languagePrefix: {},
              digitTrans: { default: r.identityTransformer, mathspeak: r.identityTransformer, clearspeak: r.identityTransformer },
              letterTrans: { default: r.identityTransformer },
              combiner: (e, t, n) => e
            };
          }),
          (t.FUNCTIONS = function () {
            return {
              fracNestDepth: (e) => r.vulgarFractionSmall(e, 10, 100),
              radicalNestDepth: (e) => "",
              combineRootIndex: function (e, t) {
                return e;
              },
              combineNestedFraction: r.Combiners.identityCombiner,
              combineNestedRadical: r.Combiners.identityCombiner,
              fontRegexp: function (e) {
                return new RegExp("^" + e.split(/ |-/).join("( |-)") + "( |-)");
              },
              si: r.siCombiner,
              plural: r.identityTransformer
            };
          }),
          (t.SUBISO = function () {
            return { default: "", current: "", all: [] };
          });
      },
      165: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(1058);
        function i(e) {
          const t = e % 1e3,
            n = Math.floor(t / 100),
            r = n ? (1 === n ? "cent" : a.ones[n] + "-cents") : "",
            i = (function (e) {
              const t = e % 100;
              if (t < 20) return a.ones[t];
              const n = Math.floor(t / 10),
                r = a.tens[n],
                i = a.ones[t % 10];
              return r && i ? r + (2 === n ? "-i-" : "-") + i : r || i;
            })(t % 100);
          return r && i ? r + a.numSep + i : r || i;
        }
        function o(e) {
          if (0 === e) return a.zero;
          if (e >= Math.pow(10, 36)) return e.toString();
          let t = 0,
            n = "";
          for (; e > 0; ) {
            const r = e % (t > 1 ? 1e6 : 1e3);
            if (r) {
              let e = a.large[t];
              if (t)
                if (1 === t) n = (1 === r ? "" : i(r) + a.numSep) + e + (n ? a.numSep + n : "");
                else {
                  const t = o(r);
                  (e = 1 === r ? e : e.replace(/\u00f3$/, "ons")), (n = t + a.numSep + e + (n ? a.numSep + n : ""));
                }
              else n = i(r);
            }
            (e = Math.floor(e / (t > 1 ? 1e6 : 1e3))), t++;
          }
          return n;
        }
        function s(e) {
          const t = r.Grammar.getInstance().getParameter("gender");
          return e.toString() + ("f" === t ? "a" : "n");
        }
        const a = (0, n(4277).NUMBERS)();
        (a.numericOrdinal = s),
          (a.numberToWords = o),
          (a.numberToOrdinal = function (e, t) {
            if (e > 1999) return s(e);
            if (e <= 10) return a.special.onesOrdinals[e - 1];
            const n = o(e);
            return n.match(/mil$/)
              ? n.replace(/mil$/, "mil·lèsima")
              : n.match(/u$/)
              ? n.replace(/u$/, "vena")
              : n.match(/a$/)
              ? n.replace(/a$/, "ena")
              : n + (n.match(/e$/) ? "na" : "ena");
          }),
          (t.default = a);
      },
      5571: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        function r(e, t = !1) {
          return e === a.ones[1] ? (t ? "et" : "en") : e;
        }
        function i(e, t = !1) {
          let n = e % 1e3,
            i = "",
            o = a.ones[Math.floor(n / 100)];
          if (((i += o ? r(o, !0) + " hundrede" : ""), (n %= 100), n))
            if (((i += i ? " og " : ""), (o = t ? a.special.smallOrdinals[n] : a.ones[n]), o)) i += o;
            else {
              const e = t ? a.special.tensOrdinals[Math.floor(n / 10)] : a.tens[Math.floor(n / 10)];
              (o = a.ones[n % 10]), (i += o ? r(o) + "og" + e : e);
            }
          return i;
        }
        function o(e, t = !1) {
          if (0 === e) return a.zero;
          if (e >= Math.pow(10, 36)) return e.toString();
          let n = 0,
            o = "";
          for (; e > 0; ) {
            const s = e % 1e3;
            if (s) {
              const e = i(s, t && !n);
              if (n) {
                const t = a.large[n],
                  i = s > 1 ? "er" : "";
                o = r(e, n <= 1) + " " + t + i + (o ? " og " : "") + o;
              } else o = r(e) + o;
            }
            (e = Math.floor(e / 1e3)), n++;
          }
          return o;
        }
        function s(e) {
          if (e % 100) return o(e, !0);
          const t = o(e);
          return t.match(/e$/) ? t : t + "e";
        }
        const a = (0, n(4277).NUMBERS)();
        (a.wordOrdinal = s),
          (a.numericOrdinal = function (e) {
            return e.toString() + ".";
          }),
          (a.numberToWords = o),
          (a.numberToOrdinal = function (e, t) {
            return 1 === e ? (t ? "hel" : "hele") : 2 === e ? (t ? "halv" : "halve") : s(e) + (t ? "dele" : "del");
          }),
          (t.default = a);
      },
      757: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        function r(e, t = !1) {
          return e === a.ones[1] ? (t ? "eine" : "ein") : e;
        }
        function i(e) {
          let t = e % 1e3,
            n = "",
            i = a.ones[Math.floor(t / 100)];
          if (((n += i ? r(i) + "hundert" : ""), (t %= 100), t))
            if (((n += n ? a.numSep : ""), (i = a.ones[t]), i)) n += i;
            else {
              const e = a.tens[Math.floor(t / 10)];
              (i = a.ones[t % 10]), (n += i ? r(i) + "und" + e : e);
            }
          return n;
        }
        function o(e) {
          if (0 === e) return a.zero;
          if (e >= Math.pow(10, 36)) return e.toString();
          let t = 0,
            n = "";
          for (; e > 0; ) {
            const o = e % 1e3;
            if (o) {
              const s = i(e % 1e3);
              if (t) {
                const e = a.large[t],
                  i = t > 1 && o > 1 ? (e.match(/e$/) ? "n" : "en") : "";
                n = r(s, t > 1) + e + i + n;
              } else n = r(s, t > 1) + n;
            }
            (e = Math.floor(e / 1e3)), t++;
          }
          return n.replace(/ein$/, "eins");
        }
        function s(e) {
          if (1 === e) return "erste";
          if (3 === e) return "dritte";
          if (7 === e) return "siebte";
          if (8 === e) return "achte";
          return o(e) + (e < 19 ? "te" : "ste");
        }
        const a = (0, n(4277).NUMBERS)();
        (a.wordOrdinal = s),
          (a.numericOrdinal = function (e) {
            return e.toString() + ".";
          }),
          (a.numberToWords = o),
          (a.numberToOrdinal = function (e, t) {
            return 1 === e ? "eintel" : 2 === e ? (t ? "halbe" : "halb") : s(e) + "l";
          }),
          (t.default = a);
      },
      166: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        function r(e) {
          let t = e % 1e3,
            n = "";
          return (
            (n += s.ones[Math.floor(t / 100)] ? s.ones[Math.floor(t / 100)] + s.numSep + "hundred" : ""),
            (t %= 100),
            t && ((n += n ? s.numSep : ""), (n += s.ones[t] || s.tens[Math.floor(t / 10)] + (t % 10 ? s.numSep + s.ones[t % 10] : ""))),
            n
          );
        }
        function i(e) {
          if (0 === e) return s.zero;
          if (e >= Math.pow(10, 36)) return e.toString();
          let t = 0,
            n = "";
          for (; e > 0; ) {
            e % 1e3 && (n = r(e % 1e3) + (t ? "-" + s.large[t] + "-" : "") + n), (e = Math.floor(e / 1e3)), t++;
          }
          return n.replace(/-$/, "");
        }
        function o(e) {
          let t = i(e);
          return (
            t.match(/one$/)
              ? (t = t.slice(0, -3) + "first")
              : t.match(/two$/)
              ? (t = t.slice(0, -3) + "second")
              : t.match(/three$/)
              ? (t = t.slice(0, -5) + "third")
              : t.match(/five$/)
              ? (t = t.slice(0, -4) + "fifth")
              : t.match(/eight$/)
              ? (t = t.slice(0, -5) + "eighth")
              : t.match(/nine$/)
              ? (t = t.slice(0, -4) + "ninth")
              : t.match(/twelve$/)
              ? (t = t.slice(0, -6) + "twelfth")
              : t.match(/ty$/)
              ? (t = t.slice(0, -2) + "tieth")
              : (t += "th"),
            t
          );
        }
        const s = (0, n(4277).NUMBERS)();
        (s.wordOrdinal = o),
          (s.numericOrdinal = function (e) {
            const t = e % 100,
              n = e.toString();
            if (t > 10 && t < 20) return n + "th";
            switch (e % 10) {
              case 1:
                return n + "st";
              case 2:
                return n + "nd";
              case 3:
                return n + "rd";
              default:
                return n + "th";
            }
          }),
          (s.numberToWords = i),
          (s.numberToOrdinal = function (e, t) {
            if (1 === e) return t ? "oneths" : "oneth";
            if (2 === e) return t ? "halves" : "half";
            const n = o(e);
            return t ? n + "s" : n;
          }),
          (t.default = s);
      },
      6154: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(1058);
        function i(e) {
          const t = e % 1e3,
            n = Math.floor(t / 100),
            r = o.special.hundreds[n],
            i = (function (e) {
              const t = e % 100;
              if (t < 30) return o.ones[t];
              const n = o.tens[Math.floor(t / 10)],
                r = o.ones[t % 10];
              return n && r ? n + " y " + r : n || r;
            })(t % 100);
          return 1 === n ? (i ? r + "to " + i : r) : r && i ? r + " " + i : r || i;
        }
        const o = (0, n(4277).NUMBERS)();
        (o.numericOrdinal = function (e) {
          const t = r.Grammar.getInstance().getParameter("gender");
          return e.toString() + ("f" === t ? "a" : "o");
        }),
          (o.numberToWords = function (e) {
            if (0 === e) return o.zero;
            if (e >= Math.pow(10, 36)) return e.toString();
            let t = 0,
              n = "";
            for (; e > 0; ) {
              const r = e % 1e3;
              if (r) {
                let e = o.large[t];
                const s = i(r);
                t
                  ? 1 === r
                    ? ((e = e.match("/^mil( |$)/") ? e : "un " + e), (n = e + (n ? " " + n : "")))
                    : ((e = e.replace(/\u00f3n$/, "ones")), (n = i(r) + " " + e + (n ? " " + n : "")))
                  : (n = s);
              }
              (e = Math.floor(e / 1e3)), t++;
            }
            return n;
          }),
          (o.numberToOrdinal = function (e, t) {
            if (e > 1999) return e.toString() + "a";
            if (e <= 12) return o.special.onesOrdinals[e - 1];
            const n = [];
            if ((e >= 1e3 && ((e -= 1e3), n.push("milésima")), !e)) return n.join(" ");
            let r = 0;
            return (
              (r = Math.floor(e / 100)),
              r > 0 && (n.push(o.special.hundredsOrdinals[r - 1]), (e %= 100)),
              e <= 12
                ? n.push(o.special.onesOrdinals[e - 1])
                : ((r = Math.floor(e / 10)),
                  r > 0 && (n.push(o.special.tensOrdinals[r - 1]), (e %= 10)),
                  e > 0 && n.push(o.special.onesOrdinals[e - 1])),
              n.join(" ")
            );
          }),
          (t.default = o);
      },
      4394: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(4886),
          i = n(1058),
          o = n(4277);
        function s(e) {
          let t = e % 1e3,
            n = "";
          if (((n += u.ones[Math.floor(t / 100)] ? u.ones[Math.floor(t / 100)] + "-cent" : ""), (t %= 100), t)) {
            n += n ? "-" : "";
            let e = u.ones[t];
            if (e) n += e;
            else {
              const r = u.tens[Math.floor(t / 10)];
              r.match(/-dix$/)
                ? ((e = u.ones[(t % 10) + 10]), (n += r.replace(/-dix$/, "") + "-" + e))
                : (n += r + (t % 10 ? "-" + u.ones[t % 10] : ""));
            }
          }
          const r = n.match(/s-\w+$/);
          return r ? n.replace(/s-\w+$/, r[0].slice(1)) : n.replace(/-un$/, "-et-un");
        }
        function a(e) {
          if (0 === e) return u.zero;
          if (e >= Math.pow(10, 36)) return e.toString();
          u.special["tens-" + r.default.getInstance().subiso] && (u.tens = u.special["tens-" + r.default.getInstance().subiso]);
          let t = 0,
            n = "";
          for (; e > 0; ) {
            const r = e % 1e3;
            if (r) {
              let e = u.large[t];
              const i = s(r);
              if (e && e.match(/^mille /)) {
                const r = e.replace(/^mille /, "");
                n = n.match(RegExp(r))
                  ? i + (t ? "-mille-" : "") + n
                  : n.match(RegExp(r.replace(/s$/, "")))
                  ? i + (t ? "-mille-" : "") + n.replace(r.replace(/s$/, ""), r)
                  : i + (t ? "-" + e + "-" : "") + n;
              } else (e = 1 === r && e ? e.replace(/s$/, "") : e), (n = i + (t ? "-" + e + "-" : "") + n);
            }
            (e = Math.floor(e / 1e3)), t++;
          }
          return n.replace(/-$/, "");
        }
        const c = { 1: "unième", 2: "demi", 3: "tiers", 4: "quart" };
        function l(e) {
          if (1 === e) return "première";
          let t = a(e);
          return (
            t.match(/^neuf$/)
              ? (t = t.slice(0, -1) + "v")
              : t.match(/cinq$/)
              ? (t += "u")
              : t.match(/trois$/)
              ? (t += "")
              : (t.match(/e$/) || t.match(/s$/)) && (t = t.slice(0, -1)),
            (t += "ième"),
            t
          );
        }
        const u = (0, o.NUMBERS)();
        (u.wordOrdinal = l),
          (u.numericOrdinal = function (e) {
            const t = i.Grammar.getInstance().getParameter("gender");
            return 1 === e ? e.toString() + ("m" === t ? "er" : "re") : e.toString() + "e";
          }),
          (u.numberToWords = a),
          (u.numberToOrdinal = function (e, t) {
            const n = c[e] || l(e);
            return 3 === e ? n : t ? n + "s" : n;
          }),
          (t.default = u);
      },
      1779: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(1058);
        function i(e) {
          if (0 === e) return s.zero;
          if (e >= Math.pow(10, 32)) return e.toString();
          let t = 0,
            n = "";
          const r = (function (e) {
            let t = e % 1e3,
              n = "";
            return (
              (n += s.ones[Math.floor(t / 100)] ? s.ones[Math.floor(t / 100)] + s.numSep + s.special.hundred : ""),
              (t %= 100),
              t && ((n += n ? s.numSep : ""), (n += s.ones[t])),
              n
            );
          })(e % 1e3);
          if (!(e = Math.floor(e / 1e3))) return r;
          for (; e > 0; ) {
            const r = e % 100;
            r && (n = s.ones[r] + s.numSep + s.large[t] + (n ? s.numSep + n : "")), (e = Math.floor(e / 100)), t++;
          }
          return r ? n + s.numSep + r : n;
        }
        function o(e) {
          const t = r.Grammar.getInstance().getParameter("gender");
          if (e <= 0) return e.toString();
          if (e < 10) return "f" === t ? s.special.ordinalsFeminine[e] : s.special.ordinalsMasculine[e];
          return i(e) + ("f" === t ? "वीं" : "वाँ");
        }
        const s = (0, n(4277).NUMBERS)();
        (s.wordOrdinal = o),
          (s.numericOrdinal = function (e) {
            const t = r.Grammar.getInstance().getParameter("gender");
            return e > 0 && e < 10
              ? "f" === t
                ? s.special.simpleSmallOrdinalsFeminine[e]
                : s.special.simpleSmallOrdinalsMasculine[e]
              : e
                  .toString()
                  .split("")
                  .map(function (e) {
                    const t = parseInt(e, 10);
                    return isNaN(t) ? "" : s.special.simpleNumbers[t];
                  })
                  .join("") + ("f" === t ? "वीं" : "वाँ");
          }),
          (s.numberToWords = i),
          (s.numberToOrdinal = function (e, t) {
            return e <= 10 ? s.special.smallDenominators[e] : o(e) + " अंश";
          }),
          (t.default = s);
      },
      5952: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(1058);
        function i(e) {
          let t = e % 1e3,
            n = "";
          if (((n += a.ones[Math.floor(t / 100)] ? a.ones[Math.floor(t / 100)] + a.numSep + "cento" : ""), (t %= 100), t)) {
            n += n ? a.numSep : "";
            const e = a.ones[t];
            if (e) n += e;
            else {
              let e = a.tens[Math.floor(t / 10)];
              const r = t % 10;
              (1 !== r && 8 !== r) || (e = e.slice(0, -1)), (n += e), (n += r ? a.numSep + a.ones[t % 10] : "");
            }
          }
          return n;
        }
        function o(e) {
          if (0 === e) return a.zero;
          if (e >= Math.pow(10, 36)) return e.toString();
          if (1 === e && r.Grammar.getInstance().getParameter("fraction")) return "un";
          let t = 0,
            n = "";
          for (; e > 0; ) {
            e % 1e3 && (n = i(e % 1e3) + (t ? "-" + a.large[t] + "-" : "") + n), (e = Math.floor(e / 1e3)), t++;
          }
          return n.replace(/-$/, "");
        }
        function s(e) {
          const t = "m" === r.Grammar.getInstance().getParameter("gender") ? "o" : "a";
          let n = a.special.onesOrdinals[e];
          return n ? n.slice(0, -1) + t : ((n = o(e)), n.slice(0, -1) + "esim" + t);
        }
        const a = (0, n(4277).NUMBERS)();
        (a.wordOrdinal = s),
          (a.numericOrdinal = function (e) {
            const t = r.Grammar.getInstance().getParameter("gender");
            return e.toString() + ("m" === t ? "o" : "a");
          }),
          (a.numberToWords = o),
          (a.numberToOrdinal = function (e, t) {
            if (2 === e) return t ? "mezzi" : "mezzo";
            const n = s(e);
            if (!t) return n;
            const r = n.match(/o$/) ? "i" : "e";
            return n.slice(0, -1) + r;
          }),
          (t.default = a);
      },
      3669: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        function r(e) {
          return e
            .toString()
            .split("")
            .map(function (e) {
              return i.ones[parseInt(e, 10)];
            })
            .join("");
        }
        const i = (0, n(4277).NUMBERS)();
        (i.numberToWords = r), (i.numberToOrdinal = r), (t.default = i);
      },
      984: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(4886);
        function i(e, t = !1) {
          let n = e % 1e3,
            r = "";
          const i = Math.floor(n / 100),
            s = a.ones[i];
          if (((r += s ? (1 === i ? "" : s) + "hundre" : ""), (n %= 100), n)) {
            if (((r += r ? "og" : ""), t)) {
              const e = a.special.smallOrdinals[n];
              if (e) return r + e;
              if (n % 10) return r + a.tens[Math.floor(n / 10)] + a.special.smallOrdinals[n % 10];
            }
            r += a.ones[n] || a.tens[Math.floor(n / 10)] + (n % 10 ? a.ones[n % 10] : "");
          }
          return t ? o(r) : r;
        }
        function o(e) {
          const t = a.special.endOrdinal[0];
          return "a" === t && e.match(/en$/)
            ? e.slice(0, -2) + a.special.endOrdinal
            : e.match(/(d|n)$/) || e.match(/hundre$/)
            ? e + "de"
            : e.match(/i$/)
            ? e + a.special.endOrdinal
            : "a" === t && e.match(/e$/)
            ? e.slice(0, -1) + a.special.endOrdinal
            : (e.match(/e$/), e + "nde");
        }
        function s(e) {
          return u(e, !0);
        }
        const a = (0, n(4277).NUMBERS)();
        function c(e, t = !1) {
          return e === a.ones[1] ? ("ein" === e ? "eitt " : t ? "et" : "ett") : e;
        }
        function l(e, t = !1) {
          let n = e % 1e3,
            r = "",
            i = a.ones[Math.floor(n / 100)];
          if (((r += i ? c(i) + "hundre" : ""), (n %= 100), n)) {
            if (((r += r ? "og" : ""), t)) {
              const e = a.special.smallOrdinals[n];
              if (e) return r + e;
            }
            if (((i = a.ones[n]), i)) r += i;
            else {
              const e = a.tens[Math.floor(n / 10)];
              (i = a.ones[n % 10]), (r += i ? i + "og" + e : e);
            }
          }
          return t ? o(r) : r;
        }
        function u(e, t = !1) {
          const n =
            "alt" === r.default.getInstance().subiso
              ? (function (e, t = !1) {
                  if (0 === e) return t ? a.special.smallOrdinals[0] : a.zero;
                  if (e >= Math.pow(10, 36)) return e.toString();
                  let n = 0,
                    r = "";
                  for (; e > 0; ) {
                    const i = e % 1e3;
                    if (i) {
                      const o = l(e % 1e3, !n && t);
                      !n && t && (t = !t),
                        (r =
                          (1 === n ? c(o, !0) : o) +
                          (n > 1 ? a.numSep : "") +
                          (n ? a.large[n] + (n > 1 && i > 1 ? "er" : "") : "") +
                          (n > 1 && r ? a.numSep : "") +
                          r);
                    }
                    (e = Math.floor(e / 1e3)), n++;
                  }
                  return t ? r + (r.match(/tusen$/) ? "de" : "te") : r;
                })(e, t)
              : (function (e, t = !1) {
                  if (0 === e) return t ? a.special.smallOrdinals[0] : a.zero;
                  if (e >= Math.pow(10, 36)) return e.toString();
                  let n = 0,
                    r = "";
                  for (; e > 0; ) {
                    const o = e % 1e3;
                    if (o) {
                      const s = i(e % 1e3, !n && t);
                      !n && t && (t = !t), (r = s + (n ? " " + a.large[n] + (n > 1 && o > 1 ? "er" : "") + (r ? " " : "") : "") + r);
                    }
                    (e = Math.floor(e / 1e3)), n++;
                  }
                  return t ? r + (r.match(/tusen$/) ? "de" : "te") : r;
                })(e, t);
          return n;
        }
        (a.wordOrdinal = s),
          (a.numericOrdinal = function (e) {
            return e.toString() + ".";
          }),
          (a.numberToWords = u),
          (a.numberToOrdinal = function (e, t) {
            return s(e);
          }),
          (t.default = a);
      },
      6416: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        function r(e) {
          let t = e % 1e3,
            n = "";
          const r = Math.floor(t / 100);
          return (
            (n += s.ones[r] ? (1 === r ? "" : s.ones[r] + s.numSep) + "hundra" : ""),
            (t %= 100),
            t && ((n += n ? s.numSep : ""), (n += s.ones[t] || s.tens[Math.floor(t / 10)] + (t % 10 ? s.numSep + s.ones[t % 10] : ""))),
            n
          );
        }
        function i(e, t = !1) {
          if (0 === e) return s.zero;
          if (e >= Math.pow(10, 36)) return e.toString();
          let n = 0,
            i = "";
          for (; e > 0; ) {
            const o = e % 1e3;
            if (o) {
              const a = s.large[n],
                c = o > 1 && n > 1 && !t ? "er" : "";
              i =
                (1 === n && 1 === o ? "" : (n > 1 && 1 === o ? "en" : r(e % 1e3)) + (n > 1 ? " " : "")) +
                (n ? a + c + (n > 1 ? " " : "") : "") +
                i;
            }
            (e = Math.floor(e / 1e3)), n++;
          }
          return i.replace(/ $/, "");
        }
        function o(e) {
          let t = i(e, !0);
          return (
            t.match(/^noll$/)
              ? (t = "nollte")
              : t.match(/ett$/)
              ? (t = t.replace(/ett$/, "första"))
              : t.match(/två$/)
              ? (t = t.replace(/två$/, "andra"))
              : t.match(/tre$/)
              ? (t = t.replace(/tre$/, "tredje"))
              : t.match(/fyra$/)
              ? (t = t.replace(/fyra$/, "fjärde"))
              : t.match(/fem$/)
              ? (t = t.replace(/fem$/, "femte"))
              : t.match(/sex$/)
              ? (t = t.replace(/sex$/, "sjätte"))
              : t.match(/sju$/)
              ? (t = t.replace(/sju$/, "sjunde"))
              : t.match(/åtta$/)
              ? (t = t.replace(/åtta$/, "åttonde"))
              : t.match(/nio$/)
              ? (t = t.replace(/nio$/, "nionde"))
              : t.match(/tio$/)
              ? (t = t.replace(/tio$/, "tionde"))
              : t.match(/elva$/)
              ? (t = t.replace(/elva$/, "elfte"))
              : t.match(/tolv$/)
              ? (t = t.replace(/tolv$/, "tolfte"))
              : t.match(/tusen$/)
              ? (t = t.replace(/tusen$/, "tusonde"))
              : t.match(/jard$/) || t.match(/jon$/)
              ? (t += "te")
              : (t += "de"),
            t
          );
        }
        const s = (0, n(4277).NUMBERS)();
        (s.wordOrdinal = o),
          (s.numericOrdinal = function (e) {
            const t = e.toString();
            return t.match(/11$|12$/) ? t + ":e" : t + (t.match(/1$|2$/) ? ":a" : ":e");
          }),
          (s.numberToWords = i),
          (s.numberToOrdinal = function (e, t) {
            if (1 === e) return "hel";
            if (2 === e) return t ? "halva" : "halv";
            let n = o(e);
            return (n = n.match(/de$/) ? n.replace(/de$/, "") : n), n + (t ? "delar" : "del");
          }),
          (t.default = s);
      },
      9385: function (e, t) {
        function n(e, t = "") {
          if (
            !e.childNodes ||
            !e.childNodes[0] ||
            !e.childNodes[0].childNodes ||
            e.childNodes[0].childNodes.length < 2 ||
            "number" !== e.childNodes[0].childNodes[0].tagName ||
            "integer" !== e.childNodes[0].childNodes[0].getAttribute("role") ||
            "number" !== e.childNodes[0].childNodes[1].tagName ||
            "integer" !== e.childNodes[0].childNodes[1].getAttribute("role")
          )
            return { convertible: !1, content: e.textContent };
          const n = e.childNodes[0].childNodes[1].textContent,
            r = e.childNodes[0].childNodes[0].textContent,
            i = Number(n),
            o = Number(r);
          return isNaN(i) || isNaN(o) ? { convertible: !1, content: `${r} ${t} ${n}` } : { convertible: !0, enumerator: o, denominator: i };
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.vulgarFractionSmall = t.convertVulgarFraction = t.Combiners = t.siCombiner = t.identityTransformer = t.pluralCase = void 0),
          (t.pluralCase = function (e, t) {
            return e.toString();
          }),
          (t.identityTransformer = function (e) {
            return e.toString();
          }),
          (t.siCombiner = function (e, t) {
            return e + t.toLowerCase();
          }),
          (t.Combiners = {}),
          (t.Combiners.identityCombiner = function (e, t, n) {
            return e + t + n;
          }),
          (t.Combiners.prefixCombiner = function (e, t, n) {
            return (e = n ? n + " " + e : e), t ? t + " " + e : e;
          }),
          (t.Combiners.postfixCombiner = function (e, t, n) {
            return (e = n ? n + " " + e : e), t ? e + " " + t : e;
          }),
          (t.Combiners.romanceCombiner = function (e, t, n) {
            return (e = n ? e + " " + n : e), t ? e + " " + t : e;
          }),
          (t.convertVulgarFraction = n),
          (t.vulgarFractionSmall = function (e, t, r) {
            const i = n(e);
            if (i.convertible) {
              const e = i.enumerator,
                n = i.denominator;
              return e > 0 && e < t && n > 0 && n < r;
            }
            return !1;
          });
      },
      1970: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Condition = t.BaseRuleStore = void 0);
        const r = n(4148),
          i = n(8310),
          o = n(7039),
          s = n(443);
        class a {
          constructor() {
            (this.context = new s.SpeechRuleContext()),
              (this.parseOrder = i.DynamicCstr.DEFAULT_ORDER),
              (this.parser = new i.DynamicCstrParser(this.parseOrder)),
              (this.locale = i.DynamicCstr.DEFAULT_VALUES[i.Axis.LOCALE]),
              (this.modality = i.DynamicCstr.DEFAULT_VALUES[i.Axis.MODALITY]),
              (this.domain = ""),
              (this.initialized = !1),
              (this.inherits = null),
              (this.kind = "standard"),
              (this.customTranscriptions = {}),
              (this.preconditions = new Map()),
              (this.speechRules_ = []),
              (this.rank = 0),
              (this.parseMethods = {
                Rule: this.defineRule,
                Generator: this.generateRules,
                Action: this.defineAction,
                Precondition: this.definePrecondition,
                Ignore: this.ignoreRules
              });
          }
          static compareStaticConstraints_(e, t) {
            if (e.length !== t.length) return !1;
            for (let n, r = 0; (n = e[r]); r++) if (-1 === t.indexOf(n)) return !1;
            return !0;
          }
          static comparePreconditions_(e, t) {
            const n = e.precondition,
              r = t.precondition;
            return n.query === r.query && a.compareStaticConstraints_(n.constraints, r.constraints);
          }
          defineRule(e, t, n, r, ...i) {
            const s = this.parseAction(n),
              a = this.parsePrecondition(r, i),
              c = this.parseCstr(t);
            if (!(s && a && c)) return console.error(`Rule Error: ${r}, (${t}): ${n}`), null;
            const l = new o.SpeechRule(e, c, a, s);
            return (l.precondition.rank = this.rank++), this.addRule(l), l;
          }
          addRule(e) {
            (e.context = this.context), this.speechRules_.unshift(e);
          }
          deleteRule(e) {
            const t = this.speechRules_.indexOf(e);
            -1 !== t && this.speechRules_.splice(t, 1);
          }
          findRule(e) {
            for (let t, n = 0; (t = this.speechRules_[n]); n++) if (e(t)) return t;
            return null;
          }
          findAllRules(e) {
            return this.speechRules_.filter(e);
          }
          evaluateDefault(e) {
            const t = e.textContent.slice(0);
            return t.match(/^\s+$/) ? this.evaluateWhitespace(t) : this.evaluateString(t);
          }
          evaluateWhitespace(e) {
            return [];
          }
          evaluateCustom(e) {
            const t = this.customTranscriptions[e];
            return void 0 !== t ? r.AuditoryDescription.create({ text: t }, { adjust: !0, translate: !1 }) : null;
          }
          evaluateCharacter(e) {
            return this.evaluateCustom(e) || r.AuditoryDescription.create({ text: e }, { adjust: !0, translate: !0 });
          }
          removeDuplicates(e) {
            for (let t, n = this.speechRules_.length - 1; (t = this.speechRules_[n]); n--)
              t !== e && e.dynamicCstr.equal(t.dynamicCstr) && a.comparePreconditions_(t, e) && this.speechRules_.splice(n, 1);
          }
          getSpeechRules() {
            return this.speechRules_;
          }
          setSpeechRules(e) {
            this.speechRules_ = e;
          }
          getPreconditions() {
            return this.preconditions;
          }
          parseCstr(e) {
            try {
              return this.parser.parse(this.locale + "." + this.modality + (this.domain ? "." + this.domain : "") + "." + e);
            } catch (t) {
              if ("RuleError" === t.name) return console.error("Rule Error ", `Illegal Dynamic Constraint: ${e}.`, t.message), null;
              throw t;
            }
          }
          parsePrecondition(e, t) {
            try {
              const n = this.parsePrecondition_(e);
              e = n[0];
              let r = n.slice(1);
              for (const e of t) r = r.concat(this.parsePrecondition_(e));
              return new o.Precondition(e, ...r);
            } catch (n) {
              if ("RuleError" === n.name) return console.error("Rule Error ", `Illegal preconditions: ${e}, ${t}.`, n.message), null;
              throw n;
            }
          }
          parseAction(e) {
            try {
              return o.Action.fromString(e);
            } catch (t) {
              if ("RuleError" === t.name) return console.error("Rule Error ", `Illegal action: ${e}.`, t.message), null;
              throw t;
            }
          }
          parse(e) {
            (this.modality = e.modality || this.modality),
              (this.locale = e.locale || this.locale),
              (this.domain = e.domain || this.domain),
              this.context.parse(e.functions || []),
              "actions" !== e.kind && ((this.kind = e.kind || this.kind), this.inheritRules()),
              this.parseRules(e.rules || []);
          }
          parseRules(e) {
            for (let t, n = 0; (t = e[n]); n++) {
              const e = t[0],
                n = this.parseMethods[e];
              e && n && n.apply(this, t.slice(1));
            }
          }
          generateRules(e) {
            const t = this.context.customGenerators.lookup(e);
            t && t(this);
          }
          defineAction(e, t) {
            let n;
            try {
              n = o.Action.fromString(t);
            } catch (e) {
              if ("RuleError" === e.name) return void console.error("Action Error ", t, e.message);
              throw e;
            }
            const r = this.getFullPreconditions(e);
            if (!r) return void console.error(`Action Error: No precondition for action ${e}`);
            this.ignoreRules(e);
            const i = new RegExp("^\\w+\\.\\w+\\." + (this.domain ? "\\w+\\." : ""));
            r.conditions.forEach(([t, r]) => {
              const s = this.parseCstr(t.toString().replace(i, ""));
              this.addRule(new o.SpeechRule(e, s, r, n));
            });
          }
          getFullPreconditions(e) {
            const t = this.preconditions.get(e);
            return t || !this.inherits ? t : this.inherits.getFullPreconditions(e);
          }
          definePrecondition(e, t, n, ...r) {
            const i = this.parsePrecondition(n, r),
              o = this.parseCstr(t);
            i && o ? ((i.rank = this.rank++), this.preconditions.set(e, new c(o, i))) : console.error(`Precondition Error: ${n}, (${t})`);
          }
          inheritRules() {
            if (!this.inherits || !this.inherits.getSpeechRules().length) return;
            const e = new RegExp("^\\w+\\.\\w+\\." + (this.domain ? "\\w+\\." : ""));
            this.inherits.getSpeechRules().forEach((t) => {
              const n = this.parseCstr(t.dynamicCstr.toString().replace(e, ""));
              this.addRule(new o.SpeechRule(t.name, n, t.precondition, t.action));
            });
          }
          ignoreRules(e, ...t) {
            let n = this.findAllRules((t) => t.name === e);
            if (!t.length) return void n.forEach(this.deleteRule.bind(this));
            let r = [];
            for (const e of t) {
              const t = this.parseCstr(e);
              for (const e of n) t.equal(e.dynamicCstr) ? this.deleteRule(e) : r.push(e);
              (n = r), (r = []);
            }
          }
          parsePrecondition_(e) {
            const t = this.context.customGenerators.lookup(e);
            return t ? t() : [e];
          }
        }
        t.BaseRuleStore = a;
        class c {
          constructor(e, t) {
            (this.base = e),
              (this._conditions = []),
              (this.constraints = []),
              (this.allCstr = {}),
              this.constraints.push(e),
              this.addCondition(e, t);
          }
          get conditions() {
            return this._conditions;
          }
          addConstraint(e) {
            if (this.constraints.filter((t) => t.equal(e)).length) return;
            this.constraints.push(e);
            const t = [];
            for (const [n, r] of this.conditions) this.base.equal(n) && t.push([e, r]);
            this._conditions = this._conditions.concat(t);
          }
          addBaseCondition(e) {
            this.addCondition(this.base, e);
          }
          addFullCondition(e) {
            this.constraints.forEach((t) => this.addCondition(t, e));
          }
          addCondition(e, t) {
            const n = e.toString() + " " + t.toString();
            this.allCstr.condStr || ((this.allCstr[n] = !0), this._conditions.push([e, t]));
          }
        }
        t.Condition = c;
      },
      1462: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.BrailleStore = void 0);
        const r = n(4036),
          i = n(7478);
        class o extends i.MathStore {
          constructor() {
            super(...arguments), (this.modality = "braille"), (this.customTranscriptions = { "⋊": "⠈⠡⠳" });
          }
          evaluateString(e) {
            const t = [],
              n = Array.from(e);
            for (let e = 0; e < n.length; e++) t.push(this.evaluateCharacter(n[e]));
            return t;
          }
          annotations() {
            for (let e, t = 0; (e = this.annotators[t]); t++) (0, r.activate)(this.locale, e);
          }
        }
        t.BrailleStore = o;
      },
      8310: function (e, t) {
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DefaultComparator = t.DynamicCstrParser = t.DynamicCstr = t.DynamicProperties = t.Axis = void 0),
          (function (e) {
            (e.DOMAIN = "domain"), (e.STYLE = "style"), (e.LOCALE = "locale"), (e.TOPIC = "topic"), (e.MODALITY = "modality");
          })((n = t.Axis || (t.Axis = {})));
        class r {
          constructor(e, t = Object.keys(e)) {
            (this.properties = e), (this.order = t);
          }
          static createProp(...e) {
            const t = i.DEFAULT_ORDER,
              n = {};
            for (let r = 0, i = e.length, o = t.length; r < i && r < o; r++) n[t[r]] = e[r];
            return new r(n);
          }
          getProperties() {
            return this.properties;
          }
          getOrder() {
            return this.order;
          }
          getAxes() {
            return this.order;
          }
          getProperty(e) {
            return this.properties[e];
          }
          updateProperties(e) {
            this.properties = e;
          }
          allProperties() {
            const e = [];
            return this.order.forEach((t) => e.push(this.getProperty(t).slice())), e;
          }
          toString() {
            const e = [];
            return this.order.forEach((t) => e.push(t + ": " + this.getProperty(t).toString())), e.join("\n");
          }
        }
        t.DynamicProperties = r;
        class i extends r {
          constructor(e, t) {
            const n = {};
            for (const [t, r] of Object.entries(e)) n[t] = [r];
            super(n, t), (this.components = e);
          }
          static createCstr(...e) {
            const t = i.DEFAULT_ORDER,
              n = {};
            for (let r = 0, i = e.length, o = t.length; r < i && r < o; r++) n[t[r]] = e[r];
            return new i(n);
          }
          static defaultCstr() {
            return i.createCstr.apply(
              null,
              i.DEFAULT_ORDER.map(function (e) {
                return i.DEFAULT_VALUES[e];
              })
            );
          }
          static validOrder(e) {
            const t = i.DEFAULT_ORDER.slice();
            return e.every((e) => {
              const n = t.indexOf(e);
              return -1 !== n && t.splice(n, 1);
            });
          }
          getComponents() {
            return this.components;
          }
          getValue(e) {
            return this.components[e];
          }
          getValues() {
            return this.order.map((e) => this.getValue(e));
          }
          allProperties() {
            const e = super.allProperties();
            for (let t, n, r = 0; (t = e[r]), (n = this.order[r]); r++) {
              const e = this.getValue(n);
              -1 === t.indexOf(e) && t.unshift(e);
            }
            return e;
          }
          toString() {
            return this.getValues().join(".");
          }
          equal(e) {
            const t = e.getAxes();
            if (this.order.length !== t.length) return !1;
            for (let n, r = 0; (n = t[r]); r++) {
              const t = this.getValue(n);
              if (!t || e.getValue(n) !== t) return !1;
            }
            return !0;
          }
        }
        (t.DynamicCstr = i),
          (i.DEFAULT_ORDER = [n.LOCALE, n.MODALITY, n.DOMAIN, n.STYLE, n.TOPIC]),
          (i.BASE_LOCALE = "base"),
          (i.DEFAULT_VALUE = "default"),
          (i.DEFAULT_VALUES = {
            [n.LOCALE]: "en",
            [n.DOMAIN]: i.DEFAULT_VALUE,
            [n.STYLE]: i.DEFAULT_VALUE,
            [n.TOPIC]: i.DEFAULT_VALUE,
            [n.MODALITY]: "speech"
          });
        t.DynamicCstrParser = class {
          constructor(e) {
            this.order = e;
          }
          parse(e) {
            const t = e.split("."),
              n = {};
            if (t.length > this.order.length) throw new Error("Invalid dynamic constraint: " + n);
            let r = 0;
            for (let e, i = 0; (e = this.order[i]), t.length; i++, r++) {
              const r = t.shift();
              n[e] = r;
            }
            return new i(n, this.order.slice(0, r));
          }
        };
        t.DefaultComparator = class {
          constructor(e, t = new r(e.getProperties(), e.getOrder())) {
            (this.reference = e), (this.fallback = t), (this.order = this.reference.getOrder());
          }
          getReference() {
            return this.reference;
          }
          setReference(e, t) {
            (this.reference = e), (this.fallback = t || new r(e.getProperties(), e.getOrder())), (this.order = this.reference.getOrder());
          }
          match(e) {
            const t = e.getAxes();
            return (
              t.length === this.reference.getAxes().length &&
              t.every((t) => {
                const n = e.getValue(t);
                return n === this.reference.getValue(t) || -1 !== this.fallback.getProperty(t).indexOf(n);
              })
            );
          }
          compare(e, t) {
            let n = !1;
            for (let r, i = 0; (r = this.order[i]); i++) {
              const i = e.getValue(r),
                o = t.getValue(r);
              if (!n) {
                const e = this.reference.getValue(r);
                if (e === i && e !== o) return -1;
                if (e === o && e !== i) return 1;
                if (e === i && e === o) continue;
                e !== i && e !== o && (n = !0);
              }
              const s = this.fallback.getProperty(r),
                a = s.indexOf(i),
                c = s.indexOf(o);
              if (a < c) return -1;
              if (c < a) return 1;
            }
            return 0;
          }
          toString() {
            return this.reference.toString() + "\n" + this.fallback.toString();
          }
        };
      },
      1058: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.numbersToAlpha = t.Grammar = t.ATTRIBUTE = void 0);
        const r = n(6671),
          i = n(4886),
          o = n(3319),
          s = n(4524);
        t.ATTRIBUTE = "grammar";
        class a {
          constructor() {
            (this.currentFlags = {}),
              (this.parameters_ = {}),
              (this.corrections_ = {}),
              (this.preprocessors_ = {}),
              (this.stateStack_ = []);
          }
          static getInstance() {
            return (a.instance = a.instance || new a()), a.instance;
          }
          static parseInput(e) {
            const t = {},
              n = e.split(":");
            for (let e = 0, r = n.length; e < r; e++) {
              const r = n[e].split("="),
                i = r[0].trim();
              r[1] ? (t[i] = r[1].trim()) : i.match(/^!/) ? (t[i.slice(1)] = !1) : (t[i] = !0);
            }
            return t;
          }
          static parseState(e) {
            const t = {},
              n = e.split(" ");
            for (let e = 0, r = n.length; e < r; e++) {
              const r = n[e].split(":"),
                i = r[0],
                o = r[1];
              t[i] = o || !0;
            }
            return t;
          }
          static translateString_(e) {
            if (e.match(/:unit$/)) return a.translateUnit_(e);
            const t = i.default.getInstance();
            let n = t.evaluator(e, t.dynamicCstr);
            return (n = null === n ? e : n), a.getInstance().getParameter("plural") && (n = s.LOCALE.FUNCTIONS.plural(n)), n;
          }
          static translateUnit_(e) {
            e = a.prepareUnit_(e);
            const t = i.default.getInstance(),
              n = a.getInstance().getParameter("plural"),
              r = t.strict,
              o = `${t.locale}.${t.modality}.default`;
            let c, l;
            return (
              (t.strict = !0),
              n && ((c = t.defaultParser.parse(o + ".plural")), (l = t.evaluator(e, c))),
              l
                ? ((t.strict = r), l)
                : ((c = t.defaultParser.parse(o + ".default")),
                  (l = t.evaluator(e, c)),
                  (t.strict = r),
                  l ? (n && (l = s.LOCALE.FUNCTIONS.plural(l)), l) : a.cleanUnit_(e))
            );
          }
          static prepareUnit_(e) {
            const t = e.match(/:unit$/);
            return t ? e.slice(0, t.index).replace(/\s+/g, " ") + e.slice(t.index) : e;
          }
          static cleanUnit_(e) {
            return e.match(/:unit$/) ? e.replace(/:unit$/, "") : e;
          }
          clear() {
            (this.parameters_ = {}), (this.stateStack_ = []);
          }
          setParameter(e, t) {
            const n = this.parameters_[e];
            return t ? (this.parameters_[e] = t) : delete this.parameters_[e], n;
          }
          getParameter(e) {
            return this.parameters_[e];
          }
          setCorrection(e, t) {
            this.corrections_[e] = t;
          }
          setPreprocessor(e, t) {
            this.preprocessors_[e] = t;
          }
          getCorrection(e) {
            return this.corrections_[e];
          }
          getState() {
            const e = [];
            for (const t in this.parameters_) {
              const n = this.parameters_[t];
              e.push("string" == typeof n ? t + ":" + n : t);
            }
            return e.join(" ");
          }
          pushState(e) {
            for (const t in e) e[t] = this.setParameter(t, e[t]);
            this.stateStack_.push(e);
          }
          popState() {
            const e = this.stateStack_.pop();
            for (const t in e) this.setParameter(t, e[t]);
          }
          setAttribute(e) {
            if (e && e.nodeType === r.NodeType.ELEMENT_NODE) {
              const n = this.getState();
              n && e.setAttribute(t.ATTRIBUTE, n);
            }
          }
          preprocess(e) {
            return this.runProcessors_(e, this.preprocessors_);
          }
          correct(e) {
            return this.runProcessors_(e, this.corrections_);
          }
          apply(e, t) {
            return (
              (this.currentFlags = t || {}),
              (e = this.currentFlags.adjust || this.currentFlags.preprocess ? a.getInstance().preprocess(e) : e),
              (this.parameters_.translate || this.currentFlags.translate) && (e = a.translateString_(e)),
              (e = this.currentFlags.adjust || this.currentFlags.correct ? a.getInstance().correct(e) : e),
              (this.currentFlags = {}),
              e
            );
          }
          runProcessors_(e, t) {
            for (const n in this.parameters_) {
              const r = t[n];
              if (!r) continue;
              const i = this.parameters_[n];
              e = !0 === i ? r(e) : r(e, i);
            }
            return e;
          }
        }
        function c(e, t) {
          if (!t || !e) return e;
          const n = s.LOCALE.FUNCTIONS.fontRegexp(o.localFont(t));
          return e.replace(n, "");
        }
        function l(e) {
          return e.match(/\d+/) ? s.LOCALE.NUMBERS.numberToWords(parseInt(e, 10)) : e;
        }
        (t.Grammar = a),
          (t.numbersToAlpha = l),
          a.getInstance().setCorrection("localFont", o.localFont),
          a.getInstance().setCorrection("localRole", o.localRole),
          a.getInstance().setCorrection("localEnclose", o.localEnclose),
          a.getInstance().setCorrection("ignoreFont", c),
          a.getInstance().setPreprocessor("annotation", function (e, t) {
            return e + ":" + t;
          }),
          a.getInstance().setPreprocessor("noTranslateText", function (e) {
            return e.match(new RegExp("^[" + s.LOCALE.MESSAGES.regexp.TEXT + "]+$")) && (a.getInstance().currentFlags.translate = !1), e;
          }),
          a.getInstance().setCorrection("ignoreCaps", function (e) {
            let t = s.LOCALE.ALPHABETS.capPrefix[i.default.getInstance().domain];
            return void 0 === t && (t = s.LOCALE.ALPHABETS.capPrefix.default), c(e, t);
          }),
          a.getInstance().setPreprocessor("numbers2alpha", l);
      },
      4161: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.enumerate =
            t.lookupString =
            t.lookupCategory =
            t.lookupRule =
            t.addSiUnitRules =
            t.addUnitRules =
            t.addFunctionRules =
            t.addSymbolRules =
            t.defineRule =
            t.defineRules =
            t.setSiPrefixes =
              void 0);
        const r = n(1984),
          i = n(4886),
          o = n(2371),
          s = n(4974),
          a = n(8310);
        let c = a.DynamicCstr.DEFAULT_VALUES[a.Axis.LOCALE],
          l = a.DynamicCstr.DEFAULT_VALUES[a.Axis.MODALITY],
          u = {};
        t.setSiPrefixes = function (e) {
          u = e;
        };
        const d = {};
        function h(e, t, n, r) {
          const i = E(t);
          y(i, n), i.defineRulesFromMappings(e, c, l, t, r);
        }
        function p(e) {
          if (N(e)) return;
          const t = e.names,
            n = e.mappings,
            r = e.category;
          for (let e, i = 0; (e = t[i]); i++) h(e, e, r, n);
        }
        function f(e) {
          for (const t of Object.keys(u)) {
            const n = Object.assign({}, e);
            n.mappings = {};
            const r = u[t];
            (n.key = t + n.key),
              (n.names = n.names.map(function (e) {
                return t + e;
              }));
            for (const t of Object.keys(e.mappings)) {
              n.mappings[t] = {};
              for (const i of Object.keys(e.mappings[t])) n.mappings[t][i] = o.locales[c]().FUNCTIONS.si(r, e.mappings[t][i]);
            }
            b(n);
          }
          b(e);
        }
        function m(e, t) {
          const n = d[e];
          return n ? n.lookupRule(null, t) : null;
        }
        function g(e, t) {
          const n = m(e, t);
          return n ? n.action : null;
        }
        function S(e, t) {
          return (t = t || {}), e.length ? ((t[e[0]] = S(e.slice(1), t[e[0]])), t) : t;
        }
        function b(e) {
          const t = e.names;
          t &&
            (e.names = t.map(function (e) {
              return e + ":unit";
            })),
            p(e);
        }
        function N(e) {
          return !(!e.locale && !e.modality) && ((c = e.locale || c), (l = e.modality || l), !0);
        }
        function E(e) {
          let t = d[e];
          return t ? (r.Debugger.getInstance().output("Store exists! " + e), t) : ((t = new s.MathSimpleStore()), (d[e] = t), t);
        }
        function y(e, t) {
          t && (e.category = t);
        }
        (t.defineRules = h),
          (t.defineRule = function (e, t, n, r, i, o) {
            const s = E(i);
            y(s, r), s.defineRuleFromStrings(e, c, l, t, n, i, o);
          }),
          (t.addSymbolRules = function (e) {
            if (N(e)) return;
            const t = s.MathSimpleStore.parseUnicode(e.key);
            h(e.key, t, e.category, e.mappings);
          }),
          (t.addFunctionRules = p),
          (t.addUnitRules = function (e) {
            N(e) || (e.si ? f(e) : b(e));
          }),
          (t.addSiUnitRules = f),
          (t.lookupRule = m),
          (t.lookupCategory = function (e) {
            const t = d[e];
            return t ? t.category : "";
          }),
          (t.lookupString = g),
          (i.default.getInstance().evaluator = g),
          (t.enumerate = function (e = {}) {
            for (const t of Object.values(d)) for (const [, n] of t.rules.entries()) for (const { cstr: t } of n) e = S(t.getValues(), e);
            return e;
          });
      },
      4974: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.MathSimpleStore = void 0);
        const r = n(4886),
          i = n(8310);
        class o {
          constructor() {
            (this.category = ""), (this.rules = new Map());
          }
          static parseUnicode(e) {
            const t = parseInt(e, 16);
            return String.fromCodePoint(t);
          }
          static testDynamicConstraints_(e, t) {
            return r.default.getInstance().strict ? t.cstr.equal(e) : r.default.getInstance().comparator.match(t.cstr);
          }
          defineRulesFromMappings(e, t, n, r, i) {
            for (const o in i)
              for (const s in i[o]) {
                const a = i[o][s];
                this.defineRuleFromStrings(e, t, n, o, s, r, a);
              }
          }
          getRules(e) {
            let t = this.rules.get(e);
            return t || ((t = []), this.rules.set(e, t)), t;
          }
          defineRuleFromStrings(e, t, n, i, o, s, a) {
            let c = this.getRules(t);
            const l = r.default.getInstance().parsers[i] || r.default.getInstance().defaultParser,
              u = r.default.getInstance().comparators[i],
              d = `${t}.${n}.${i}.${o}`,
              h = l.parse(d),
              p = u ? u() : r.default.getInstance().comparator,
              f = p.getReference();
            p.setReference(h);
            const m = { cstr: h, action: a };
            (c = c.filter((e) => !h.equal(e.cstr))), c.push(m), this.rules.set(t, c), p.setReference(f);
          }
          lookupRule(e, t) {
            let n = this.getRules(t.getValue(i.Axis.LOCALE));
            return (
              (n = n.filter(function (e) {
                return o.testDynamicConstraints_(t, e);
              })),
              1 === n.length ? n[0] : n.length ? n.sort((e, t) => r.default.getInstance().comparator.compare(e.cstr, t.cstr))[0] : null
            );
          }
        }
        t.MathSimpleStore = o;
      },
      7478: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.MathStore = void 0);
        const r = n(1426),
          i = n(4524),
          o = n(4036),
          s = n(1970),
          a = n(7039);
        class c extends s.BaseRuleStore {
          constructor() {
            super(),
              (this.annotators = []),
              (this.parseMethods.Alias = this.defineAlias),
              (this.parseMethods.SpecializedRule = this.defineSpecializedRule),
              (this.parseMethods.Specialized = this.defineSpecialized);
          }
          initialize() {
            this.initialized || (this.annotations(), (this.initialized = !0));
          }
          annotations() {
            for (let e, t = 0; (e = this.annotators[t]); t++) (0, o.activate)(this.domain, e);
          }
          defineAlias(e, t, ...n) {
            const r = this.parsePrecondition(t, n);
            if (!r) return void console.error(`Precondition Error: ${t} ${n}`);
            const i = this.preconditions.get(e);
            i ? i.addFullCondition(r) : console.error(`Alias Error: No precondition by the name of ${e}`);
          }
          defineRulesAlias(e, t, ...n) {
            const r = this.findAllRules(function (t) {
              return t.name === e;
            });
            if (0 === r.length) throw new a.OutputError("Rule with name " + e + " does not exist.");
            const i = [];
            r.forEach((e) => {
              ((e) => {
                const t = e.dynamicCstr.toString(),
                  n = e.action.toString();
                for (let e, r = 0; (e = i[r]); r++) if (e.action === n && e.cstr === t) return !1;
                return i.push({ cstr: t, action: n }), !0;
              })(e) && this.addAlias_(e, t, n);
            });
          }
          defineSpecializedRule(e, t, n, r) {
            const i = this.parseCstr(t),
              o = this.findRule((t) => t.name === e && i.equal(t.dynamicCstr)),
              s = this.parseCstr(n);
            if (!o && r) throw new a.OutputError("Rule named " + e + " with style " + t + " does not exist.");
            const c = r ? a.Action.fromString(r) : o.action,
              l = new a.SpeechRule(o.name, s, o.precondition, c);
            this.addRule(l);
          }
          defineSpecialized(e, t, n) {
            const r = this.parseCstr(n);
            if (!r) return void console.error(`Dynamic Constraint Error: ${n}`);
            const i = this.preconditions.get(e);
            i ? i.addConstraint(r) : console.error(`Alias Error: No precondition by the name of ${e}`);
          }
          evaluateString(e) {
            const t = [];
            if (e.match(/^\s+$/)) return t;
            let n = this.matchNumber_(e);
            if (n && n.length === e.length) return t.push(this.evaluateCharacter(n.number)), t;
            const o = r.removeEmpty(e.replace(/\s/g, " ").split(" "));
            for (let e, r = 0; (e = o[r]); r++)
              if (1 === e.length) t.push(this.evaluateCharacter(e));
              else if (e.match(new RegExp("^[" + i.LOCALE.MESSAGES.regexp.TEXT + "]+$"))) t.push(this.evaluateCharacter(e));
              else {
                let r = e;
                for (; r; ) {
                  n = this.matchNumber_(r);
                  const e = r.match(new RegExp("^[" + i.LOCALE.MESSAGES.regexp.TEXT + "]+"));
                  if (n) t.push(this.evaluateCharacter(n.number)), (r = r.substring(n.length));
                  else if (e) t.push(this.evaluateCharacter(e[0])), (r = r.substring(e[0].length));
                  else {
                    const e = Array.from(r),
                      n = e[0];
                    t.push(this.evaluateCharacter(n)), (r = e.slice(1).join(""));
                  }
                }
              }
            return t;
          }
          parse(e) {
            super.parse(e), (this.annotators = e.annotators || []);
          }
          addAlias_(e, t, n) {
            const r = this.parsePrecondition(t, n),
              i = new a.SpeechRule(e.name, e.dynamicCstr, r, e.action);
            (i.name = e.name), this.addRule(i);
          }
          matchNumber_(e) {
            const t = e.match(new RegExp("^" + i.LOCALE.MESSAGES.regexp.NUMBER)),
              n = e.match(new RegExp("^" + c.regexp.NUMBER));
            if (!t && !n) return null;
            const r = n && n[0] === e;
            if ((t && t[0] === e) || !r) return t ? { number: t[0], length: t[0].length } : null;
            return {
              number: n[0]
                .replace(new RegExp(c.regexp.DIGIT_GROUP, "g"), "X")
                .replace(new RegExp(c.regexp.DECIMAL_MARK, "g"), i.LOCALE.MESSAGES.regexp.DECIMAL_MARK)
                .replace(/X/g, i.LOCALE.MESSAGES.regexp.DIGIT_GROUP.replace(/\\/g, "")),
              length: n[0].length
            };
          }
        }
        (t.MathStore = c),
          (c.regexp = {
            NUMBER: "((\\d{1,3})(?=(,| ))((,| )\\d{3})*(\\.\\d+)?)|^\\d*\\.\\d+|^\\d+",
            DECIMAL_MARK: "\\.",
            DIGIT_GROUP: ","
          });
      },
      7039: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.OutputError = t.Precondition = t.Action = t.Component = t.ActionType = t.SpeechRule = void 0);
        const r = n(4886),
          i = n(1058);
        var o;
        function s(e) {
          switch (e) {
            case "[n]":
              return o.NODE;
            case "[m]":
              return o.MULTI;
            case "[t]":
              return o.TEXT;
            case "[p]":
              return o.PERSONALITY;
            default:
              throw "Parse error: " + e;
          }
        }
        (t.SpeechRule = class {
          constructor(e, t, n, r) {
            (this.name = e), (this.dynamicCstr = t), (this.precondition = n), (this.action = r), (this.context = null);
          }
          toString() {
            return (
              this.name + " | " + this.dynamicCstr.toString() + " | " + this.precondition.toString() + " ==> " + this.action.toString()
            );
          }
        }),
          (function (e) {
            (e.NODE = "NODE"), (e.MULTI = "MULTI"), (e.TEXT = "TEXT"), (e.PERSONALITY = "PERSONALITY");
          })((o = t.ActionType || (t.ActionType = {})));
        class a {
          constructor({ type: e, content: t, attributes: n, grammar: r }) {
            (this.type = e), (this.content = t), (this.attributes = n), (this.grammar = r);
          }
          static grammarFromString(e) {
            return i.Grammar.parseInput(e);
          }
          static fromString(e) {
            const t = { type: s(e.substring(0, 3)) };
            let n = e.slice(3).trim();
            if (!n) throw new u("Missing content.");
            switch (t.type) {
              case o.TEXT:
                if ('"' === n[0]) {
                  const e = d(n, "\\(")[0].trim();
                  if ('"' !== e.slice(-1)) throw new u("Invalid string syntax.");
                  (t.content = e), (n = n.slice(e.length).trim()), -1 === n.indexOf("(") && (n = "");
                  break;
                }
              case o.NODE:
              case o.MULTI: {
                const e = n.indexOf(" (");
                if (-1 === e) {
                  (t.content = n.trim()), (n = "");
                  break;
                }
                (t.content = n.substring(0, e).trim()), (n = n.slice(e).trim());
              }
            }
            if (n) {
              const e = a.attributesFromString(n);
              e.grammar && ((t.grammar = e.grammar), delete e.grammar), Object.keys(e).length && (t.attributes = e);
            }
            return new a(t);
          }
          static attributesFromString(e) {
            if ("(" !== e[0] || ")" !== e.slice(-1)) throw new u("Invalid attribute expression: " + e);
            const t = {},
              n = d(e.slice(1, -1), ",");
            for (let e = 0, r = n.length; e < r; e++) {
              const r = n[e],
                o = r.indexOf(":");
              if (-1 === o) t[r.trim()] = "true";
              else {
                const e = r.substring(0, o).trim(),
                  n = r.slice(o + 1).trim();
                t[e] = e === i.ATTRIBUTE ? a.grammarFromString(n) : n;
              }
            }
            return t;
          }
          toString() {
            let e = "";
            (e += (function (e) {
              switch (e) {
                case o.NODE:
                  return "[n]";
                case o.MULTI:
                  return "[m]";
                case o.TEXT:
                  return "[t]";
                case o.PERSONALITY:
                  return "[p]";
                default:
                  throw "Unknown type error: " + e;
              }
            })(this.type)),
              (e += this.content ? " " + this.content : "");
            const t = this.attributesToString();
            return (e += t ? " " + t : ""), e;
          }
          grammarToString() {
            return this.getGrammar().join(":");
          }
          getGrammar() {
            const e = [];
            for (const t in this.grammar)
              !0 === this.grammar[t] ? e.push(t) : !1 === this.grammar[t] ? e.push("!" + t) : e.push(t + "=" + this.grammar[t]);
            return e;
          }
          attributesToString() {
            const e = this.getAttributes(),
              t = this.grammarToString();
            return t && e.push("grammar:" + t), e.length > 0 ? "(" + e.join(", ") + ")" : "";
          }
          getAttributes() {
            const e = [];
            for (const t in this.attributes) {
              const n = this.attributes[t];
              "true" === n ? e.push(t) : e.push(t + ":" + n);
            }
            return e;
          }
        }
        t.Component = a;
        class c {
          constructor(e) {
            this.components = e;
          }
          static fromString(e) {
            const t = d(e, ";")
                .filter(function (e) {
                  return e.match(/\S/);
                })
                .map(function (e) {
                  return e.trim();
                }),
              n = [];
            for (let e = 0, r = t.length; e < r; e++) {
              const r = a.fromString(t[e]);
              r && n.push(r);
            }
            return new c(n);
          }
          toString() {
            return this.components
              .map(function (e) {
                return e.toString();
              })
              .join("; ");
          }
        }
        t.Action = c;
        class l {
          constructor(e, ...t) {
            (this.query = e), (this.constraints = t);
            const [n, r] = this.presetPriority();
            this.priority = n ? r : this.calculatePriority();
          }
          static constraintValue(e, t) {
            for (let n, r = 0; (n = t[r]); r++) if (e.match(n)) return ++r;
            return 0;
          }
          toString() {
            const e = this.constraints.join(", ");
            return `${this.query}, ${e} (${this.priority}, ${this.rank})`;
          }
          calculatePriority() {
            const e = l.constraintValue(this.query, l.queryPriorities);
            if (!e) return 0;
            const t = this.query.match(/^self::.+\[(.+)\]/)[1];
            return 100 * e + 10 * l.constraintValue(t, l.attributePriorities);
          }
          presetPriority() {
            if (!this.constraints.length) return [!1, 0];
            const e = this.constraints[this.constraints.length - 1].match(/^priority=(.*$)/);
            if (!e) return [!1, 0];
            this.constraints.pop();
            const t = parseFloat(e[1]);
            return [!0, isNaN(t) ? 0 : t];
          }
        }
        (t.Precondition = l),
          (l.queryPriorities = [/^self::\*\[.+\]$/, /^self::[\w-]+\[.+\]$/]),
          (l.attributePriorities = [
            /^@[\w-]+$/,
            /^@[\w-]+!=".+"$/,
            /^not\(contains\(@[\w-]+,\s*".+"\)\)$/,
            /^contains\(@[\w-]+,".+"\)$/,
            /^@[\w-]+=".+"$/
          ]);
        class u extends r.SREError {
          constructor(e) {
            super(e), (this.name = "RuleError");
          }
        }
        function d(e, t) {
          const n = [];
          let r = "";
          for (; "" !== e; ) {
            const i = e.search(t);
            if (-1 === i) {
              if ((e.match(/"/g) || []).length % 2 != 0) throw new u("Invalid string in expression: " + e);
              n.push(r + e), (r = ""), (e = "");
            } else if ((e.substring(0, i).match(/"/g) || []).length % 2 == 0)
              n.push(r + e.substring(0, i)), (r = ""), (e = e.substring(i + 1));
            else {
              const t = e.substring(i).search('"');
              if (-1 === t) throw new u("Invalid string in expression: " + e);
              (r += e.substring(0, i + t + 1)), (e = e.substring(i + t + 1));
            }
          }
          return r && n.push(r), n;
        }
        t.OutputError = u;
      },
      443: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SpeechRuleContext = void 0);
        const r = n(5024),
          i = n(3686);
        t.SpeechRuleContext = class {
          constructor() {
            (this.customQueries = new i.CustomQueries()),
              (this.customStrings = new i.CustomStrings()),
              (this.contextFunctions = new i.ContextFunctions()),
              (this.customGenerators = new i.CustomGenerators());
          }
          applyCustomQuery(e, t) {
            const n = this.customQueries.lookup(t);
            return n ? n(e) : null;
          }
          applySelector(e, t) {
            return this.applyCustomQuery(e, t) || r.evalXPath(t, e);
          }
          applyQuery(e, t) {
            const n = this.applySelector(e, t);
            return n.length > 0 ? n[0] : null;
          }
          applyConstraint(e, t) {
            return !!this.applyQuery(e, t) || r.evaluateBoolean(t, e);
          }
          constructString(e, t) {
            if (!t) return "";
            if ('"' === t.charAt(0)) return t.slice(1, -1);
            const n = this.customStrings.lookup(t);
            return n ? n(e) : r.evaluateString(t, e);
          }
          parse(e) {
            const t = Array.isArray(e) ? e : Object.entries(e);
            for (let e, n = 0; (e = t[n]); n++) {
              switch (e[0].slice(0, 3)) {
                case "CQF":
                  this.customQueries.add(e[0], e[1]);
                  break;
                case "CSF":
                  this.customStrings.add(e[0], e[1]);
                  break;
                case "CTF":
                  this.contextFunctions.add(e[0], e[1]);
                  break;
                case "CGF":
                  this.customGenerators.add(e[0], e[1]);
                  break;
                default:
                  console.error("FunctionError: Invalid function name " + e[0]);
              }
            }
          }
        };
      },
      6060: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.storeFactory = t.SpeechRuleEngine = void 0);
        const r = n(4148),
          i = n(1984),
          o = n(6671),
          s = n(4886),
          a = n(4998),
          c = n(5024),
          l = n(7278),
          u = n(9805),
          d = n(1462),
          h = n(8310),
          p = n(1058),
          f = n(7478),
          m = n(7039),
          g = n(2803);
        class S {
          constructor() {
            (this.trie = null), (this.evaluators_ = {}), (this.trie = new g.Trie());
          }
          static getInstance() {
            return (S.instance = S.instance || new S()), S.instance;
          }
          static debugSpeechRule(e, t) {
            const n = e.precondition,
              r = e.context.applyQuery(t, n.query);
            i.Debugger.getInstance().output(n.query, r ? r.toString() : r),
              n.constraints.forEach((n) => i.Debugger.getInstance().output(n, e.context.applyConstraint(t, n)));
          }
          static debugNamedSpeechRule(e, t) {
            const n = S.getInstance()
              .trie.collectRules()
              .filter((t) => t.name == e);
            for (let r, o = 0; (r = n[o]); o++)
              i.Debugger.getInstance().output("Rule", e, "DynamicCstr:", r.dynamicCstr.toString(), "number", o), S.debugSpeechRule(r, t);
          }
          evaluateNode(e) {
            (0, c.updateEvaluator)(e);
            const t = new Date().getTime();
            let n = [];
            try {
              n = this.evaluateNode_(e);
            } catch (e) {
              console.error("Something went wrong computing speech."), i.Debugger.getInstance().output(e);
            }
            const r = new Date().getTime();
            return i.Debugger.getInstance().output("Time:", r - t), n;
          }
          toString() {
            return this.trie
              .collectRules()
              .map((e) => e.toString())
              .join("\n");
          }
          runInSetting(e, t) {
            const n = s.default.getInstance(),
              r = {};
            for (const t in e) (r[t] = n[t]), (n[t] = e[t]);
            n.setDynamicCstr();
            const i = t();
            for (const e in r) n[e] = r[e];
            return n.setDynamicCstr(), i;
          }
          addStore(e) {
            const t = N(e);
            "abstract" !== t.kind && t.getSpeechRules().forEach((e) => this.trie.addRule(e)), this.addEvaluator(t);
          }
          processGrammar(e, t, n) {
            const r = {};
            for (const i in n) {
              const o = n[i];
              r[i] = "string" == typeof o ? e.constructString(t, o) : o;
            }
            p.Grammar.getInstance().pushState(r);
          }
          addEvaluator(e) {
            const t = e.evaluateDefault.bind(e),
              n = this.evaluators_[e.locale];
            if (n) return void (n[e.modality] = t);
            const r = {};
            (r[e.modality] = t), (this.evaluators_[e.locale] = r);
          }
          getEvaluator(e, t) {
            const n = this.evaluators_[e] || this.evaluators_[h.DynamicCstr.DEFAULT_VALUES[h.Axis.LOCALE]];
            return n[t] || n[h.DynamicCstr.DEFAULT_VALUES[h.Axis.MODALITY]];
          }
          enumerate(e) {
            return this.trie.enumerate(e);
          }
          evaluateNode_(e) {
            return e ? (this.updateConstraint_(), this.evaluateTree_(e)) : [];
          }
          evaluateTree_(e) {
            const t = s.default.getInstance();
            let n;
            i.Debugger.getInstance().output(t.mode !== a.Mode.HTTP ? e.toString() : e), p.Grammar.getInstance().setAttribute(e);
            const o = this.lookupRule(e, t.dynamicCstr);
            if (!o)
              return t.strict
                ? []
                : ((n = this.getEvaluator(t.locale, t.modality)(e)), e.attributes && this.addPersonality_(n, {}, !1, e), n);
            i.Debugger.getInstance().generateOutput(() => [
              "Apply Rule:",
              o.name,
              o.dynamicCstr.toString(),
              (t.mode, a.Mode.HTTP, e).toString()
            ]);
            const l = o.context,
              u = o.action.components;
            n = [];
            for (let t, i = 0; (t = u[i]); i++) {
              let i = [];
              const o = t.content || "",
                a = t.attributes || {};
              let u = !1;
              t.grammar && this.processGrammar(l, e, t.grammar);
              let d = null;
              if (a.engine) {
                d = s.default.getInstance().dynamicCstr.getComponents();
                const e = p.Grammar.parseInput(a.engine);
                s.default.getInstance().setDynamicCstr(e);
              }
              switch (t.type) {
                case m.ActionType.NODE:
                  {
                    const t = l.applyQuery(e, o);
                    t && (i = this.evaluateTree_(t));
                  }
                  break;
                case m.ActionType.MULTI:
                  {
                    u = !0;
                    const t = l.applySelector(e, o);
                    t.length > 0 &&
                      (i = this.evaluateNodeList_(
                        l,
                        t,
                        a.sepFunc,
                        l.constructString(e, a.separator),
                        a.ctxtFunc,
                        l.constructString(e, a.context)
                      ));
                  }
                  break;
                case m.ActionType.TEXT:
                  {
                    const t = a.span,
                      n = {};
                    if (t) {
                      const r = (0, c.evalXPath)(t, e);
                      r.length && (n.extid = r[0].getAttribute("extid"));
                    }
                    const s = l.constructString(e, o);
                    (s || "" === s) &&
                      (i = Array.isArray(s)
                        ? s.map(function (e) {
                            return r.AuditoryDescription.create({ text: e.speech, attributes: e.attributes }, { adjust: !0 });
                          })
                        : [r.AuditoryDescription.create({ text: s, attributes: n }, { adjust: !0 })]);
                  }
                  break;
                case m.ActionType.PERSONALITY:
                default:
                  i = [r.AuditoryDescription.create({ text: o })];
              }
              i[0] &&
                !u &&
                (a.context && (i[0].context = l.constructString(e, a.context) + (i[0].context || "")),
                a.annotation && (i[0].annotation = a.annotation)),
                this.addLayout(i, a, u),
                t.grammar && p.Grammar.getInstance().popState(),
                (n = n.concat(this.addPersonality_(i, a, u, e))),
                d && s.default.getInstance().setDynamicCstr(d);
            }
            return n;
          }
          evaluateNodeList_(e, t, n, i, o, s) {
            if (!t.length) return [];
            const a = i || "",
              c = s || "",
              l = e.contextFunctions.lookup(o),
              u = l
                ? l(t, c)
                : function () {
                    return c;
                  },
              d = e.contextFunctions.lookup(n),
              h = d
                ? d(t, a)
                : function () {
                    return [r.AuditoryDescription.create({ text: a }, { translate: !0 })];
                  };
            let p = [];
            for (let e, n = 0; (e = t[n]); n++) {
              const r = this.evaluateTree_(e);
              if (r.length > 0 && ((r[0].context = u() + (r[0].context || "")), (p = p.concat(r)), n < t.length - 1)) {
                const e = h();
                p = p.concat(e);
              }
            }
            return p;
          }
          addLayout(e, t, n) {
            const i = t.layout;
            i &&
              (i.match(/^begin/)
                ? e.unshift(new r.AuditoryDescription({ text: "", layout: i }))
                : i.match(/^end/)
                ? e.push(new r.AuditoryDescription({ text: "", layout: i }))
                : (e.unshift(new r.AuditoryDescription({ text: "", layout: `begin${i}` })),
                  e.push(new r.AuditoryDescription({ text: "", layout: `end${i}` }))));
          }
          addPersonality_(e, t, n, i) {
            const o = {};
            let s = null;
            for (const e of a.personalityPropList) {
              const n = t[e];
              if (void 0 === n) continue;
              const r = parseFloat(n),
                i = isNaN(r) ? ('"' === n.charAt(0) ? n.slice(1, -1) : n) : r;
              e === a.personalityProps.PAUSE ? (s = i) : (o[e] = i);
            }
            for (let t, n = 0; (t = e[n]); n++) this.addRelativePersonality_(t, o), this.addExternalAttributes_(t, i);
            if ((n && e.length && delete e[e.length - 1].personality[a.personalityProps.JOIN], s && e.length)) {
              const t = e[e.length - 1];
              t.text || Object.keys(t.personality).length
                ? e.push(r.AuditoryDescription.create({ text: "", personality: { pause: s } }))
                : (t.personality[a.personalityProps.PAUSE] = s);
            }
            return e;
          }
          addExternalAttributes_(e, t) {
            if (t.hasAttributes()) {
              const n = t.attributes;
              for (let t = n.length - 1; t >= 0; t--) {
                const r = n[t].name;
                !e.attributes[r] && r.match(/^ext/) && (e.attributes[r] = n[t].value);
              }
            }
          }
          addRelativePersonality_(e, t) {
            if (!e.personality) return (e.personality = t), e;
            const n = e.personality;
            for (const e in t) n[e] && "number" == typeof n[e] && "number" == typeof t[e] ? (n[e] = n[e] + t[e]) : n[e] || (n[e] = t[e]);
            return e;
          }
          updateConstraint_() {
            const e = s.default.getInstance().dynamicCstr,
              t = s.default.getInstance().strict,
              n = this.trie,
              r = {};
            let i = e.getValue(h.Axis.LOCALE),
              o = e.getValue(h.Axis.MODALITY),
              a = e.getValue(h.Axis.DOMAIN);
            n.hasSubtrie([i, o, a]) ||
              ((a = h.DynamicCstr.DEFAULT_VALUES[h.Axis.DOMAIN]),
              n.hasSubtrie([i, o, a]) ||
                ((o = h.DynamicCstr.DEFAULT_VALUES[h.Axis.MODALITY]),
                n.hasSubtrie([i, o, a]) || (i = h.DynamicCstr.DEFAULT_VALUES[h.Axis.LOCALE]))),
              (r[h.Axis.LOCALE] = [i]),
              (r[h.Axis.MODALITY] = ["summary" !== o ? o : h.DynamicCstr.DEFAULT_VALUES[h.Axis.MODALITY]]),
              (r[h.Axis.DOMAIN] = ["speech" !== o ? h.DynamicCstr.DEFAULT_VALUES[h.Axis.DOMAIN] : a]);
            const c = e.getOrder();
            for (let n, i = 0; (n = c[i]); i++)
              if (!r[n]) {
                const i = e.getValue(n),
                  o = this.makeSet_(i, e.preference),
                  s = h.DynamicCstr.DEFAULT_VALUES[n];
                t || i === s || o.push(s), (r[n] = o);
              }
            e.updateProperties(r);
          }
          makeSet_(e, t) {
            return t && Object.keys(t).length ? e.split(":") : [e];
          }
          lookupRule(e, t) {
            if (!e || (e.nodeType !== o.NodeType.ELEMENT_NODE && e.nodeType !== o.NodeType.TEXT_NODE)) return null;
            const n = this.lookupRules(e, t);
            return n.length > 0 ? this.pickMostConstraint_(t, n) : null;
          }
          lookupRules(e, t) {
            return this.trie.lookupRules(e, t.allProperties());
          }
          pickMostConstraint_(e, t) {
            const n = s.default.getInstance().comparator;
            return (
              t.sort(function (e, t) {
                return (
                  n.compare(e.dynamicCstr, t.dynamicCstr) ||
                  t.precondition.priority - e.precondition.priority ||
                  t.precondition.constraints.length - e.precondition.constraints.length ||
                  t.precondition.rank - e.precondition.rank
                );
              }),
              i.Debugger.getInstance().generateOutput((() => t.map((e) => e.name + "(" + e.dynamicCstr.toString() + ")")).bind(this)),
              t[0]
            );
          }
        }
        t.SpeechRuleEngine = S;
        const b = new Map();
        function N(e) {
          const t = `${e.locale}.${e.modality}.${e.domain}`;
          if ("actions" === e.kind) {
            const n = b.get(t);
            return n.parse(e), n;
          }
          u.init(), e && !e.functions && (e.functions = l.getStore(e.locale, e.modality, e.domain));
          const n = "braille" === e.modality ? new d.BrailleStore() : new f.MathStore();
          return b.set(t, n), e.inherits && (n.inherits = b.get(`${e.inherits}.${e.modality}.${e.domain}`)), n.parse(e), n.initialize(), n;
        }
        (t.storeFactory = N), (s.default.nodeEvaluator = S.getInstance().evaluateNode.bind(S.getInstance()));
      },
      3686: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CustomGenerators = t.ContextFunctions = t.CustomStrings = t.CustomQueries = void 0);
        class n {
          constructor(e, t) {
            (this.prefix = e), (this.store = t);
          }
          add(e, t) {
            this.checkCustomFunctionSyntax_(e) && (this.store[e] = t);
          }
          addStore(e) {
            const t = Object.keys(e.store);
            for (let n, r = 0; (n = t[r]); r++) this.add(n, e.store[n]);
          }
          lookup(e) {
            return this.store[e];
          }
          checkCustomFunctionSyntax_(e) {
            const t = new RegExp("^" + this.prefix);
            return !!e.match(t) || (console.error("FunctionError: Invalid function name. Expected prefix " + this.prefix), !1);
          }
        }
        t.CustomQueries = class extends n {
          constructor() {
            super("CQF", {});
          }
        };
        t.CustomStrings = class extends n {
          constructor() {
            super("CSF", {});
          }
        };
        t.ContextFunctions = class extends n {
          constructor() {
            super("CTF", {});
          }
        };
        t.CustomGenerators = class extends n {
          constructor() {
            super("CGF", {});
          }
        };
      },
      931: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.contentIterator = t.pauseSeparator = t.nodeCounter = void 0);
        const r = n(4148),
          i = n(5024),
          o = n(4886);
        (t.nodeCounter = function (e, t) {
          const n = e.length;
          let r = 0,
            i = t;
          return (
            t || (i = ""),
            function () {
              return r < n && (r += 1), i + " " + r;
            }
          );
        }),
          (t.pauseSeparator = function (e, t) {
            const n = parseFloat(t),
              i = isNaN(n) ? t : n;
            return function () {
              return [r.AuditoryDescription.create({ text: "", personality: { pause: i } })];
            };
          }),
          (t.contentIterator = function (e, t) {
            let n;
            return (
              (n = e.length > 0 ? i.evalXPath("../../content/*", e[0]) : []),
              function () {
                const e = n.shift(),
                  i = t ? [r.AuditoryDescription.create({ text: t }, { translate: !0 })] : [];
                if (!e) return i;
                const s = o.default.evaluateNode(e);
                return i.concat(s);
              }
            );
          });
      },
      1939: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.getTreeFromString = t.getTree = t.xmlTree = void 0);
        const r = n(6671),
          i = n(1784);
        function o(e) {
          return new i.SemanticTree(e);
        }
        (t.xmlTree = function (e) {
          return o(e).xml();
        }),
          (t.getTree = o),
          (t.getTreeFromString = function (e) {
            return o(r.parseInput(e));
          });
      },
      4036: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.annotate = t.activate = t.register = t.visitors = t.annotators = void 0);
        const r = n(241);
        (t.annotators = new Map()),
          (t.visitors = new Map()),
          (t.register = function (e) {
            const n = e.domain + ":" + e.name;
            e instanceof r.SemanticAnnotator ? t.annotators.set(n, e) : t.visitors.set(n, e);
          }),
          (t.activate = function (e, n) {
            const r = e + ":" + n,
              i = t.annotators.get(r) || t.visitors.get(r);
            i && (i.active = !0);
          }),
          (t.annotate = function (e) {
            for (const n of t.annotators.values()) n.active && n.annotate(e);
            for (const n of t.visitors.values()) n.active && n.visit(e, Object.assign({}, n.def));
          });
      },
      241: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SemanticVisitor = t.SemanticAnnotator = void 0);
        t.SemanticAnnotator = class {
          constructor(e, t, n) {
            (this.domain = e), (this.name = t), (this.func = n), (this.active = !1);
          }
          annotate(e) {
            e.childNodes.forEach(this.annotate.bind(this)), e.addAnnotation(this.domain, this.func(e));
          }
        };
        t.SemanticVisitor = class {
          constructor(e, t, n, r = {}) {
            (this.domain = e), (this.name = t), (this.func = n), (this.def = r), (this.active = !1);
          }
          visit(e, t) {
            let n = this.func(e, t);
            e.addAnnotation(this.domain, n[0]);
            for (let t, r = 0; (t = e.childNodes[r]); r++) n = this.visit(t, n[1]);
            return n;
          }
        };
      },
      4020: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.lookupSecondary =
            t.isEmbellishedType =
            t.isMatchingFence =
            t.functionApplication =
            t.invisibleComma =
            t.invisiblePlus =
            t.invisibleTimes =
            t.lookupMeaning =
            t.lookupRole =
            t.lookupType =
            t.equal =
            t.allLettersRegExp =
              void 0);
        const n = String.fromCodePoint(8291),
          r = ["，", "﹐", ",", n],
          i = ["¯", "‒", "–", "—", "―", "﹘", "-", "⁻", "₋", "−", "➖", "﹣", "－", "‐", "‑", "‾", "_"],
          o = ["~", "̃", "∼", "˜", "∽", "˷", "̴", "̰"],
          s = {
            "(": ")",
            "[": "]",
            "{": "}",
            "⁅": "⁆",
            "〈": "〉",
            "❨": "❩",
            "❪": "❫",
            "❬": "❭",
            "❮": "❯",
            "❰": "❱",
            "❲": "❳",
            "❴": "❵",
            "⟅": "⟆",
            "⟦": "⟧",
            "⟨": "⟩",
            "⟪": "⟫",
            "⟬": "⟭",
            "⟮": "⟯",
            "⦃": "⦄",
            "⦅": "⦆",
            "⦇": "⦈",
            "⦉": "⦊",
            "⦋": "⦌",
            "⦍": "⦎",
            "⦏": "⦐",
            "⦑": "⦒",
            "⦓": "⦔",
            "⦕": "⦖",
            "⦗": "⦘",
            "⧘": "⧙",
            "⧚": "⧛",
            "⧼": "⧽",
            "⸢": "⸣",
            "⸤": "⸥",
            "⸦": "⸧",
            "⸨": "⸩",
            "〈": "〉",
            "《": "》",
            "「": "」",
            "『": "』",
            "【": "】",
            "〔": "〕",
            "〖": "〗",
            "〘": "〙",
            "〚": "〛",
            "〝": "〞",
            "﴾": "﴿",
            "︗": "︘",
            "﹙": "﹚",
            "﹛": "﹜",
            "﹝": "﹞",
            "（": "）",
            "［": "］",
            "｛": "｝",
            "｟": "｠",
            "｢": "｣",
            "⌈": "⌉",
            "⌊": "⌋",
            "⌌": "⌍",
            "⌎": "⌏",
            "⌜": "⌝",
            "⌞": "⌟",
            "⎛": "⎞",
            "⎜": "⎟",
            "⎝": "⎠",
            "⎡": "⎤",
            "⎢": "⎥",
            "⎣": "⎦",
            "⎧": "⎫",
            "⎨": "⎬",
            "⎩": "⎭",
            "⎰": "⎱",
            "⎸": "⎹"
          },
          a = {
            "⎴": "⎵",
            "⏜": "⏝",
            "⏞": "⏟",
            "⏠": "⏡",
            "︵": "︶",
            "︷": "︸",
            "︹": "︺",
            "︻": "︼",
            "︽": "︾",
            "︿": "﹀",
            "﹁": "﹂",
            "﹃": "﹄",
            "﹇": "﹈"
          },
          c = Object.keys(s),
          l = Object.values(s);
        l.push("〟");
        const u = Object.keys(a),
          d = Object.values(a),
          h = ["|", "¦", "∣", "⏐", "⎸", "⎹", "❘", "｜", "￤", "︱", "︲"],
          p = ["‖", "∥", "⦀", "⫴"],
          f = [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z"
          ],
          m = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
            "ı",
            "ȷ"
          ],
          g = [
            "Ａ",
            "Ｂ",
            "Ｃ",
            "Ｄ",
            "Ｅ",
            "Ｆ",
            "Ｇ",
            "Ｈ",
            "Ｉ",
            "Ｊ",
            "Ｋ",
            "Ｌ",
            "Ｍ",
            "Ｎ",
            "Ｏ",
            "Ｐ",
            "Ｑ",
            "Ｒ",
            "Ｓ",
            "Ｔ",
            "Ｕ",
            "Ｖ",
            "Ｗ",
            "Ｘ",
            "Ｙ",
            "Ｚ"
          ],
          S = [
            "ａ",
            "ｂ",
            "ｃ",
            "ｄ",
            "ｅ",
            "ｆ",
            "ｇ",
            "ｈ",
            "ｉ",
            "ｊ",
            "ｋ",
            "ｌ",
            "ｍ",
            "ｎ",
            "ｏ",
            "ｐ",
            "ｑ",
            "ｒ",
            "ｓ",
            "ｔ",
            "ｕ",
            "ｖ",
            "ｗ",
            "ｘ",
            "ｙ",
            "ｚ"
          ],
          b = [
            "𝐀",
            "𝐁",
            "𝐂",
            "𝐃",
            "𝐄",
            "𝐅",
            "𝐆",
            "𝐇",
            "𝐈",
            "𝐉",
            "𝐊",
            "𝐋",
            "𝐌",
            "𝐍",
            "𝐎",
            "𝐏",
            "𝐐",
            "𝐑",
            "𝐒",
            "𝐓",
            "𝐔",
            "𝐕",
            "𝐖",
            "𝐗",
            "𝐘",
            "𝐙"
          ],
          N = [
            "𝐚",
            "𝐛",
            "𝐜",
            "𝐝",
            "𝐞",
            "𝐟",
            "𝐠",
            "𝐡",
            "𝐢",
            "𝐣",
            "𝐤",
            "𝐥",
            "𝐦",
            "𝐧",
            "𝐨",
            "𝐩",
            "𝐪",
            "𝐫",
            "𝐬",
            "𝐭",
            "𝐮",
            "𝐯",
            "𝐰",
            "𝐱",
            "𝐲",
            "𝐳"
          ],
          E = [
            "𝐴",
            "𝐵",
            "𝐶",
            "𝐷",
            "𝐸",
            "𝐹",
            "𝐺",
            "𝐻",
            "𝐼",
            "𝐽",
            "𝐾",
            "𝐿",
            "𝑀",
            "𝑁",
            "𝑂",
            "𝑃",
            "𝑄",
            "𝑅",
            "𝑆",
            "𝑇",
            "𝑈",
            "𝑉",
            "𝑊",
            "𝑋",
            "𝑌",
            "𝑍"
          ],
          y = [
            "𝑎",
            "𝑏",
            "𝑐",
            "𝑑",
            "𝑒",
            "𝑓",
            "𝑔",
            "ℎ",
            "𝑖",
            "𝑗",
            "𝑘",
            "𝑙",
            "𝑚",
            "𝑛",
            "𝑜",
            "𝑝",
            "𝑞",
            "𝑟",
            "𝑠",
            "𝑡",
            "𝑢",
            "𝑣",
            "𝑤",
            "𝑥",
            "𝑦",
            "𝑧",
            "𝚤",
            "𝚥"
          ],
          A = [
            "𝑨",
            "𝑩",
            "𝑪",
            "𝑫",
            "𝑬",
            "𝑭",
            "𝑮",
            "𝑯",
            "𝑰",
            "𝑱",
            "𝑲",
            "𝑳",
            "𝑴",
            "𝑵",
            "𝑶",
            "𝑷",
            "𝑸",
            "𝑹",
            "𝑺",
            "𝑻",
            "𝑼",
            "𝑽",
            "𝑾",
            "𝑿",
            "𝒀",
            "𝒁"
          ],
          _ = [
            "𝒂",
            "𝒃",
            "𝒄",
            "𝒅",
            "𝒆",
            "𝒇",
            "𝒈",
            "𝒉",
            "𝒊",
            "𝒋",
            "𝒌",
            "𝒍",
            "𝒎",
            "𝒏",
            "𝒐",
            "𝒑",
            "𝒒",
            "𝒓",
            "𝒔",
            "𝒕",
            "𝒖",
            "𝒗",
            "𝒘",
            "𝒙",
            "𝒚",
            "𝒛"
          ],
          C = [
            "𝒜",
            "ℬ",
            "𝒞",
            "𝒟",
            "ℰ",
            "ℱ",
            "𝒢",
            "ℋ",
            "ℐ",
            "𝒥",
            "𝒦",
            "ℒ",
            "ℳ",
            "𝒩",
            "𝒪",
            "𝒫",
            "𝒬",
            "ℛ",
            "𝒮",
            "𝒯",
            "𝒰",
            "𝒱",
            "𝒲",
            "𝒳",
            "𝒴",
            "𝒵",
            "℘"
          ],
          T = [
            "𝒶",
            "𝒷",
            "𝒸",
            "𝒹",
            "ℯ",
            "𝒻",
            "ℊ",
            "𝒽",
            "𝒾",
            "𝒿",
            "𝓀",
            "𝓁",
            "𝓂",
            "𝓃",
            "ℴ",
            "𝓅",
            "𝓆",
            "𝓇",
            "𝓈",
            "𝓉",
            "𝓊",
            "𝓋",
            "𝓌",
            "𝓍",
            "𝓎",
            "𝓏",
            "ℓ"
          ],
          v = [
            "𝓐",
            "𝓑",
            "𝓒",
            "𝓓",
            "𝓔",
            "𝓕",
            "𝓖",
            "𝓗",
            "𝓘",
            "𝓙",
            "𝓚",
            "𝓛",
            "𝓜",
            "𝓝",
            "𝓞",
            "𝓟",
            "𝓠",
            "𝓡",
            "𝓢",
            "𝓣",
            "𝓤",
            "𝓥",
            "𝓦",
            "𝓧",
            "𝓨",
            "𝓩"
          ],
          M = [
            "𝓪",
            "𝓫",
            "𝓬",
            "𝓭",
            "𝓮",
            "𝓯",
            "𝓰",
            "𝓱",
            "𝓲",
            "𝓳",
            "𝓴",
            "𝓵",
            "𝓶",
            "𝓷",
            "𝓸",
            "𝓹",
            "𝓺",
            "𝓻",
            "𝓼",
            "𝓽",
            "𝓾",
            "𝓿",
            "𝔀",
            "𝔁",
            "𝔂",
            "𝔃"
          ],
          O = [
            "𝔄",
            "𝔅",
            "ℭ",
            "𝔇",
            "𝔈",
            "𝔉",
            "𝔊",
            "ℌ",
            "ℑ",
            "𝔍",
            "𝔎",
            "𝔏",
            "𝔐",
            "𝔑",
            "𝔒",
            "𝔓",
            "𝔔",
            "ℜ",
            "𝔖",
            "𝔗",
            "𝔘",
            "𝔙",
            "𝔚",
            "𝔛",
            "𝔜",
            "ℨ"
          ],
          I = [
            "𝔞",
            "𝔟",
            "𝔠",
            "𝔡",
            "𝔢",
            "𝔣",
            "𝔤",
            "𝔥",
            "𝔦",
            "𝔧",
            "𝔨",
            "𝔩",
            "𝔪",
            "𝔫",
            "𝔬",
            "𝔭",
            "𝔮",
            "𝔯",
            "𝔰",
            "𝔱",
            "𝔲",
            "𝔳",
            "𝔴",
            "𝔵",
            "𝔶",
            "𝔷"
          ],
          L = [
            "𝔸",
            "𝔹",
            "ℂ",
            "𝔻",
            "𝔼",
            "𝔽",
            "𝔾",
            "ℍ",
            "𝕀",
            "𝕁",
            "𝕂",
            "𝕃",
            "𝕄",
            "ℕ",
            "𝕆",
            "ℙ",
            "ℚ",
            "ℝ",
            "𝕊",
            "𝕋",
            "𝕌",
            "𝕍",
            "𝕎",
            "𝕏",
            "𝕐",
            "ℤ"
          ],
          R = [
            "𝕒",
            "𝕓",
            "𝕔",
            "𝕕",
            "𝕖",
            "𝕗",
            "𝕘",
            "𝕙",
            "𝕚",
            "𝕛",
            "𝕜",
            "𝕝",
            "𝕞",
            "𝕟",
            "𝕠",
            "𝕡",
            "𝕢",
            "𝕣",
            "𝕤",
            "𝕥",
            "𝕦",
            "𝕧",
            "𝕨",
            "𝕩",
            "𝕪",
            "𝕫"
          ],
          x = [
            "𝕬",
            "𝕭",
            "𝕮",
            "𝕯",
            "𝕰",
            "𝕱",
            "𝕲",
            "𝕳",
            "𝕴",
            "𝕵",
            "𝕶",
            "𝕷",
            "𝕸",
            "𝕹",
            "𝕺",
            "𝕻",
            "𝕼",
            "𝕽",
            "𝕾",
            "𝕿",
            "𝖀",
            "𝖁",
            "𝖂",
            "𝖃",
            "𝖄",
            "𝖅"
          ],
          P = [
            "𝖆",
            "𝖇",
            "𝖈",
            "𝖉",
            "𝖊",
            "𝖋",
            "𝖌",
            "𝖍",
            "𝖎",
            "𝖏",
            "𝖐",
            "𝖑",
            "𝖒",
            "𝖓",
            "𝖔",
            "𝖕",
            "𝖖",
            "𝖗",
            "𝖘",
            "𝖙",
            "𝖚",
            "𝖛",
            "𝖜",
            "𝖝",
            "𝖞",
            "𝖟"
          ],
          F = [
            "𝖠",
            "𝖡",
            "𝖢",
            "𝖣",
            "𝖤",
            "𝖥",
            "𝖦",
            "𝖧",
            "𝖨",
            "𝖩",
            "𝖪",
            "𝖫",
            "𝖬",
            "𝖭",
            "𝖮",
            "𝖯",
            "𝖰",
            "𝖱",
            "𝖲",
            "𝖳",
            "𝖴",
            "𝖵",
            "𝖶",
            "𝖷",
            "𝖸",
            "𝖹"
          ],
          D = [
            "𝖺",
            "𝖻",
            "𝖼",
            "𝖽",
            "𝖾",
            "𝖿",
            "𝗀",
            "𝗁",
            "𝗂",
            "𝗃",
            "𝗄",
            "𝗅",
            "𝗆",
            "𝗇",
            "𝗈",
            "𝗉",
            "𝗊",
            "𝗋",
            "𝗌",
            "𝗍",
            "𝗎",
            "𝗏",
            "𝗐",
            "𝗑",
            "𝗒",
            "𝗓"
          ],
          w = [
            "𝗔",
            "𝗕",
            "𝗖",
            "𝗗",
            "𝗘",
            "𝗙",
            "𝗚",
            "𝗛",
            "𝗜",
            "𝗝",
            "𝗞",
            "𝗟",
            "𝗠",
            "𝗡",
            "𝗢",
            "𝗣",
            "𝗤",
            "𝗥",
            "𝗦",
            "𝗧",
            "𝗨",
            "𝗩",
            "𝗪",
            "𝗫",
            "𝗬",
            "𝗭"
          ],
          k = [
            "𝗮",
            "𝗯",
            "𝗰",
            "𝗱",
            "𝗲",
            "𝗳",
            "𝗴",
            "𝗵",
            "𝗶",
            "𝗷",
            "𝗸",
            "𝗹",
            "𝗺",
            "𝗻",
            "𝗼",
            "𝗽",
            "𝗾",
            "𝗿",
            "𝘀",
            "𝘁",
            "𝘂",
            "𝘃",
            "𝘄",
            "𝘅",
            "𝘆",
            "𝘇"
          ],
          U = [
            "𝘈",
            "𝘉",
            "𝘊",
            "𝘋",
            "𝘌",
            "𝘍",
            "𝘎",
            "𝘏",
            "𝘐",
            "𝘑",
            "𝘒",
            "𝘓",
            "𝘔",
            "𝘕",
            "𝘖",
            "𝘗",
            "𝘘",
            "𝘙",
            "𝘚",
            "𝘛",
            "𝘜",
            "𝘝",
            "𝘞",
            "𝘟",
            "𝘠",
            "𝘡"
          ],
          B = [
            "𝘢",
            "𝘣",
            "𝘤",
            "𝘥",
            "𝘦",
            "𝘧",
            "𝘨",
            "𝘩",
            "𝘪",
            "𝘫",
            "𝘬",
            "𝘭",
            "𝘮",
            "𝘯",
            "𝘰",
            "𝘱",
            "𝘲",
            "𝘳",
            "𝘴",
            "𝘵",
            "𝘶",
            "𝘷",
            "𝘸",
            "𝘹",
            "𝘺",
            "𝘻"
          ],
          j = [
            "𝘼",
            "𝘽",
            "𝘾",
            "𝘿",
            "𝙀",
            "𝙁",
            "𝙂",
            "𝙃",
            "𝙄",
            "𝙅",
            "𝙆",
            "𝙇",
            "𝙈",
            "𝙉",
            "𝙊",
            "𝙋",
            "𝙌",
            "𝙍",
            "𝙎",
            "𝙏",
            "𝙐",
            "𝙑",
            "𝙒",
            "𝙓",
            "𝙔",
            "𝙕"
          ],
          G = [
            "𝙖",
            "𝙗",
            "𝙘",
            "𝙙",
            "𝙚",
            "𝙛",
            "𝙜",
            "𝙝",
            "𝙞",
            "𝙟",
            "𝙠",
            "𝙡",
            "𝙢",
            "𝙣",
            "𝙤",
            "𝙥",
            "𝙦",
            "𝙧",
            "𝙨",
            "𝙩",
            "𝙪",
            "𝙫",
            "𝙬",
            "𝙭",
            "𝙮",
            "𝙯"
          ],
          V = [
            "𝙰",
            "𝙱",
            "𝙲",
            "𝙳",
            "𝙴",
            "𝙵",
            "𝙶",
            "𝙷",
            "𝙸",
            "𝙹",
            "𝙺",
            "𝙻",
            "𝙼",
            "𝙽",
            "𝙾",
            "𝙿",
            "𝚀",
            "𝚁",
            "𝚂",
            "𝚃",
            "𝚄",
            "𝚅",
            "𝚆",
            "𝚇",
            "𝚈",
            "𝚉"
          ],
          $ = [
            "𝚊",
            "𝚋",
            "𝚌",
            "𝚍",
            "𝚎",
            "𝚏",
            "𝚐",
            "𝚑",
            "𝚒",
            "𝚓",
            "𝚔",
            "𝚕",
            "𝚖",
            "𝚗",
            "𝚘",
            "𝚙",
            "𝚚",
            "𝚛",
            "𝚜",
            "𝚝",
            "𝚞",
            "𝚟",
            "𝚠",
            "𝚡",
            "𝚢",
            "𝚣"
          ],
          H = ["ⅅ", "ⅆ", "ⅇ", "ⅈ", "ⅉ"],
          W = ["Α", "Β", "Γ", "Δ", "Ε", "Ζ", "Η", "Θ", "Ι", "Κ", "Λ", "Μ", "Ν", "Ξ", "Ο", "Π", "Ρ", "Σ", "Τ", "Υ", "Φ", "Χ", "Ψ", "Ω"],
          X = ["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "ς", "σ", "τ", "υ", "φ", "χ", "ψ", "ω"],
          q = ["𝚨", "𝚩", "𝚪", "𝚫", "𝚬", "𝚭", "𝚮", "𝚯", "𝚰", "𝚱", "𝚲", "𝚳", "𝚴", "𝚵", "𝚶", "𝚷", "𝚸", "𝚺", "𝚻", "𝚼", "𝚽", "𝚾", "𝚿", "𝛀"],
          Y = ["𝛂", "𝛃", "𝛄", "𝛅", "𝛆", "𝛇", "𝛈", "𝛉", "𝛊", "𝛋", "𝛌", "𝛍", "𝛎", "𝛏", "𝛐", "𝛑", "𝛒", "𝛓", "𝛔", "𝛕", "𝛖", "𝛗", "𝛘", "𝛙", "𝛚"],
          K = ["𝛢", "𝛣", "𝛤", "𝛥", "𝛦", "𝛧", "𝛨", "𝛩", "𝛪", "𝛫", "𝛬", "𝛭", "𝛮", "𝛯", "𝛰", "𝛱", "𝛲", "𝛴", "𝛵", "𝛶", "𝛷", "𝛸", "𝛹", "𝛺"],
          z = ["𝛼", "𝛽", "𝛾", "𝛿", "𝜀", "𝜁", "𝜂", "𝜃", "𝜄", "𝜅", "𝜆", "𝜇", "𝜈", "𝜉", "𝜊", "𝜋", "𝜌", "𝜍", "𝜎", "𝜏", "𝜐", "𝜑", "𝜒", "𝜓", "𝜔"],
          J = ["𝜜", "𝜝", "𝜞", "𝜟", "𝜠", "𝜡", "𝜢", "𝜣", "𝜤", "𝜥", "𝜦", "𝜧", "𝜨", "𝜩", "𝜪", "𝜫", "𝜬", "𝜮", "𝜯", "𝜰", "𝜱", "𝜲", "𝜳", "𝜴"],
          Q = ["𝜶", "𝜷", "𝜸", "𝜹", "𝜺", "𝜻", "𝜼", "𝜽", "𝜾", "𝜿", "𝝀", "𝝁", "𝝂", "𝝃", "𝝄", "𝝅", "𝝆", "𝝇", "𝝈", "𝝉", "𝝊", "𝝋", "𝝌", "𝝍", "𝝎"],
          Z = ["𝝖", "𝝗", "𝝘", "𝝙", "𝝚", "𝝛", "𝝜", "𝝝", "𝝞", "𝝟", "𝝠", "𝝡", "𝝢", "𝝣", "𝝤", "𝝥", "𝝦", "𝝨", "𝝩", "𝝪", "𝝫", "𝝬", "𝝭", "𝝮"],
          ee = [
            "𝝰",
            "𝝱",
            "𝝲",
            "𝝳",
            "𝝴",
            "𝝵",
            "𝝶",
            "𝝷",
            "𝝸",
            "𝝹",
            "𝝺",
            "𝝻",
            "𝝼",
            "𝝽",
            "𝝾",
            "𝝿",
            "𝞀",
            "𝞁",
            "𝞂",
            "𝞃",
            "𝞄",
            "𝞅",
            "𝞆",
            "𝞇",
            "𝞈"
          ],
          te = ["𝞐", "𝞑", "𝞒", "𝞓", "𝞔", "𝞕", "𝞖", "𝞗", "𝞘", "𝞙", "𝞚", "𝞛", "𝞜", "𝞝", "𝞞", "𝞟", "𝞠", "𝞢", "𝞣", "𝞤", "𝞥", "𝞦", "𝞧", "𝞨"],
          ne = [
            "𝞪",
            "𝞫",
            "𝞬",
            "𝞭",
            "𝞮",
            "𝞯",
            "𝞰",
            "𝞱",
            "𝞲",
            "𝞳",
            "𝞴",
            "𝞵",
            "𝞶",
            "𝞷",
            "𝞸",
            "𝞹",
            "𝞺",
            "𝞻",
            "𝞼",
            "𝞽",
            "𝞾",
            "𝞿",
            "𝟀",
            "𝟁",
            "𝟂"
          ],
          re = ["ℼ", "ℽ", "ℾ", "ℿ"],
          ie = ["ϐ", "ϑ", "ϕ", "ϖ", "ϗ", "ϰ", "ϱ", "ϵ", "϶", "ϴ"],
          oe = ["𝛜", "𝛝", "𝛞", "𝛟", "𝛠", "𝛡"],
          se = ["𝜖", "𝜗", "𝜘", "𝜙", "𝜚", "𝜛"],
          ae = ["𝞊", "𝞋", "𝞌", "𝞍", "𝞎", "𝞏"],
          ce = ["ℵ", "ℶ", "ℷ", "ℸ"],
          le = f.concat(
            m,
            g,
            S,
            b,
            N,
            E,
            A,
            _,
            y,
            C,
            T,
            v,
            M,
            O,
            I,
            L,
            R,
            x,
            P,
            F,
            D,
            w,
            k,
            U,
            B,
            j,
            G,
            V,
            $,
            H,
            W,
            X,
            q,
            Y,
            K,
            z,
            J,
            Q,
            Z,
            ee,
            re,
            ie,
            te,
            ne,
            oe,
            se,
            ae,
            ce
          );
        t.allLettersRegExp = new RegExp(le.join("|"));
        const ue = [
            "+",
            "±",
            "∓",
            "∔",
            "∧",
            "∨",
            "∩",
            "∪",
            "⊌",
            "⊍",
            "⊎",
            "⊓",
            "⊔",
            "⊝",
            "⊞",
            "⊤",
            "⊥",
            "⊺",
            "⊻",
            "⊼",
            "⋄",
            "⋎",
            "⋏",
            "⋒",
            "⋓",
            "⩞",
            "⊕",
            "⋔"
          ],
          de = String.fromCodePoint(8292);
        ue.push(de);
        const he = ["†", "‡", "∐", "∗", "∘", "∙", "≀", "⊚", "⊛", "⊠", "⊡", "⋅", "⋆", "⋇", "⋈", "⋉", "⋊", "⋋", "⋌", "○", "·", "*", "⊗", "⊙"],
          pe = String.fromCodePoint(8290);
        he.push(pe);
        const fe = String.fromCodePoint(8289),
          me = ["¼", "½", "¾", "⅐", "⅑", "⅒", "⅓", "⅔", "⅕", "⅖", "⅗", "⅘", "⅙", "⅚", "⅛", "⅜", "⅝", "⅞", "⅟", "↉"],
          ge = ["²", "³", "¹", "⁰", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"].concat(
            ["₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉"],
            [
              "①",
              "②",
              "③",
              "④",
              "⑤",
              "⑥",
              "⑦",
              "⑧",
              "⑨",
              "⑩",
              "⑪",
              "⑫",
              "⑬",
              "⑭",
              "⑮",
              "⑯",
              "⑰",
              "⑱",
              "⑲",
              "⑳",
              "⓪",
              "⓫",
              "⓬",
              "⓭",
              "⓮",
              "⓯",
              "⓰",
              "⓱",
              "⓲",
              "⓳",
              "⓴",
              "⓵",
              "⓶",
              "⓷",
              "⓸",
              "⓹",
              "⓺",
              "⓻",
              "⓼",
              "⓽",
              "⓾",
              "⓿",
              "❶",
              "❷",
              "❸",
              "❹",
              "❺",
              "❻",
              "❼",
              "❽",
              "❾",
              "❿",
              "➀",
              "➁",
              "➂",
              "➃",
              "➄",
              "➅",
              "➆",
              "➇",
              "➈",
              "➉",
              "➊",
              "➋",
              "➌",
              "➍",
              "➎",
              "➏",
              "➐",
              "➑",
              "➒",
              "➓",
              "㉈",
              "㉉",
              "㉊",
              "㉋",
              "㉌",
              "㉍",
              "㉎",
              "㉏",
              "㉑",
              "㉒",
              "㉓",
              "㉔",
              "㉕",
              "㉖",
              "㉗",
              "㉘",
              "㉙",
              "㉚",
              "㉛",
              "㉜",
              "㉝",
              "㉞",
              "㉟",
              "㊱",
              "㊲",
              "㊳",
              "㊴",
              "㊵",
              "㊶",
              "㊷",
              "㊸",
              "㊹",
              "㊺",
              "㊻",
              "㊼",
              "㊽",
              "㊾",
              "㊿"
            ],
            ["⑴", "⑵", "⑶", "⑷", "⑸", "⑹", "⑺", "⑻", "⑼", "⑽", "⑾", "⑿", "⒀", "⒁", "⒂", "⒃", "⒄", "⒅", "⒆", "⒇"],
            [
              "⒈",
              "⒉",
              "⒊",
              "⒋",
              "⒌",
              "⒍",
              "⒎",
              "⒏",
              "⒐",
              "⒑",
              "⒒",
              "⒓",
              "⒔",
              "⒕",
              "⒖",
              "⒗",
              "⒘",
              "⒙",
              "⒚",
              "⒛",
              "🄀",
              "🄁",
              "🄂",
              "🄃",
              "🄄",
              "🄅",
              "🄆",
              "🄇",
              "🄈",
              "🄉",
              "🄊"
            ]
          ),
          Se = [
            "cos",
            "cot",
            "csc",
            "sec",
            "sin",
            "tan",
            "arccos",
            "arccot",
            "arccsc",
            "arcsec",
            "arcsin",
            "arctan",
            "arc cos",
            "arc cot",
            "arc csc",
            "arc sec",
            "arc sin",
            "arc tan"
          ].concat(
            [
              "cosh",
              "coth",
              "csch",
              "sech",
              "sinh",
              "tanh",
              "arcosh",
              "arcoth",
              "arcsch",
              "arsech",
              "arsinh",
              "artanh",
              "arccosh",
              "arccoth",
              "arccsch",
              "arcsech",
              "arcsinh",
              "arctanh"
            ],
            ["deg", "det", "dim", "hom", "ker", "Tr", "tr"],
            ["log", "ln", "lg", "exp", "expt", "gcd", "gcd", "arg", "im", "re", "Pr"]
          ),
          be = [
            {
              set: [
                "!",
                '"',
                "#",
                "%",
                "&",
                ";",
                "?",
                "@",
                "\\",
                "¡",
                "§",
                "¶",
                "¿",
                "‗",
                "†",
                "‡",
                "•",
                "‣",
                "․",
                "‥",
                "‧",
                "‰",
                "‱",
                "‸",
                "※",
                "‼",
                "‽",
                "‾",
                "⁁",
                "⁂",
                "⁃",
                "⁇",
                "⁈",
                "⁉",
                "⁋",
                "⁌",
                "⁍",
                "⁎",
                "⁏",
                "⁐",
                "⁑",
                "⁓",
                "⁕",
                "⁖",
                "⁘",
                "⁙",
                "⁚",
                "⁛",
                "⁜",
                "⁝",
                "⁞",
                "︐",
                "︔",
                "︕",
                "︖",
                "︰",
                "﹅",
                "﹆",
                "﹉",
                "﹊",
                "﹋",
                "﹌",
                "﹔",
                "﹖",
                "﹗",
                "﹟",
                "﹠",
                "﹡",
                "﹨",
                "﹪",
                "﹫",
                "！",
                "＂",
                "＃",
                "％",
                "＆",
                "＇",
                "＊",
                "／",
                "；",
                "？",
                "＠",
                "＼"
              ],
              type: "punctuation",
              role: "unknown"
            },
            { set: ["︓", ":", "：", "﹕"], type: "punctuation", role: "colon" },
            { set: r, type: "punctuation", role: "comma" },
            { set: ["…", "⋮", "⋯", "⋰", "⋱", "︙"], type: "punctuation", role: "ellipsis" },
            { set: [".", "﹒", "．"], type: "punctuation", role: "fullstop" },
            { set: i, type: "operator", role: "dash" },
            { set: o, type: "operator", role: "tilde" },
            { set: ["'", "′", "″", "‴", "‵", "‶", "‷", "⁗", "ʹ", "ʺ"], type: "punctuation", role: "prime" },
            { set: ["°"], type: "punctuation", role: "degree" },
            { set: c, type: "fence", role: "open" },
            { set: l, type: "fence", role: "close" },
            { set: u, type: "fence", role: "top" },
            { set: d, type: "fence", role: "bottom" },
            { set: h, type: "fence", role: "neutral" },
            { set: p, type: "fence", role: "metric" },
            { set: m, type: "identifier", role: "latinletter", font: "normal" },
            { set: f, type: "identifier", role: "latinletter", font: "normal" },
            { set: S, type: "identifier", role: "latinletter", font: "normal" },
            { set: g, type: "identifier", role: "latinletter", font: "normal" },
            { set: N, type: "identifier", role: "latinletter", font: "bold" },
            { set: b, type: "identifier", role: "latinletter", font: "bold" },
            { set: y, type: "identifier", role: "latinletter", font: "italic" },
            { set: E, type: "identifier", role: "latinletter", font: "italic" },
            { set: _, type: "identifier", role: "latinletter", font: "bold-italic" },
            { set: A, type: "identifier", role: "latinletter", font: "bold-italic" },
            { set: T, type: "identifier", role: "latinletter", font: "script" },
            { set: C, type: "identifier", role: "latinletter", font: "script" },
            { set: M, type: "identifier", role: "latinletter", font: "bold-script" },
            { set: v, type: "identifier", role: "latinletter", font: "bold-script" },
            { set: I, type: "identifier", role: "latinletter", font: "fraktur" },
            { set: O, type: "identifier", role: "latinletter", font: "fraktur" },
            { set: R, type: "identifier", role: "latinletter", font: "double-struck" },
            { set: L, type: "identifier", role: "latinletter", font: "double-struck" },
            { set: P, type: "identifier", role: "latinletter", font: "bold-fraktur" },
            { set: x, type: "identifier", role: "latinletter", font: "bold-fraktur" },
            { set: D, type: "identifier", role: "latinletter", font: "sans-serif" },
            { set: F, type: "identifier", role: "latinletter", font: "sans-serif" },
            { set: k, type: "identifier", role: "latinletter", font: "sans-serif-bold" },
            { set: w, type: "identifier", role: "latinletter", font: "sans-serif-bold" },
            { set: B, type: "identifier", role: "latinletter", font: "sans-serif-italic" },
            { set: U, type: "identifier", role: "latinletter", font: "sans-serif-italic" },
            { set: G, type: "identifier", role: "latinletter", font: "sans-serif-bold-italic" },
            { set: j, type: "identifier", role: "latinletter", font: "sans-serif-bold-italic" },
            { set: $, type: "identifier", role: "latinletter", font: "monospace" },
            { set: V, type: "identifier", role: "latinletter", font: "monospace" },
            { set: H, type: "identifier", role: "latinletter", font: "double-struck-italic" },
            { set: X, type: "identifier", role: "greekletter", font: "normal" },
            { set: W, type: "identifier", role: "greekletter", font: "normal" },
            { set: Y, type: "identifier", role: "greekletter", font: "bold" },
            { set: q, type: "identifier", role: "greekletter", font: "bold" },
            { set: z, type: "identifier", role: "greekletter", font: "italic" },
            { set: K, type: "identifier", role: "greekletter", font: "italic" },
            { set: Q, type: "identifier", role: "greekletter", font: "bold-italic" },
            { set: J, type: "identifier", role: "greekletter", font: "bold-italic" },
            { set: ee, type: "identifier", role: "greekletter", font: "sans-serif-bold" },
            { set: Z, type: "identifier", role: "greekletter", font: "sans-serif-bold" },
            { set: te, type: "identifier", role: "greekletter", font: "sans-serif-bold-italic" },
            { set: ne, type: "identifier", role: "greekletter", font: "sans-serif-bold-italic" },
            { set: re, type: "identifier", role: "greekletter", font: "double-struck" },
            { set: ie, type: "identifier", role: "greekletter", font: "normal" },
            { set: oe, type: "identifier", role: "greekletter", font: "bold" },
            { set: se, type: "identifier", role: "greekletter", font: "italic" },
            { set: ae, type: "identifier", role: "greekletter", font: "sans-serif-bold" },
            { set: ce, type: "identifier", role: "otherletter", font: "normal" },
            { set: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], type: "number", role: "integer", font: "normal" },
            { set: ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"], type: "number", role: "integer", font: "normal" },
            { set: ["𝟎", "𝟏", "𝟐", "𝟑", "𝟒", "𝟓", "𝟔", "𝟕", "𝟖", "𝟗"], type: "number", role: "integer", font: "bold" },
            { set: ["𝟘", "𝟙", "𝟚", "𝟛", "𝟜", "𝟝", "𝟞", "𝟟", "𝟠", "𝟡"], type: "number", role: "integer", font: "double-struck" },
            { set: ["𝟢", "𝟣", "𝟤", "𝟥", "𝟦", "𝟧", "𝟨", "𝟩", "𝟪", "𝟫"], type: "number", role: "integer", font: "sans-serif" },
            { set: ["𝟬", "𝟭", "𝟮", "𝟯", "𝟰", "𝟱", "𝟲", "𝟳", "𝟴", "𝟵"], type: "number", role: "integer", font: "sans-serif-bold" },
            { set: ["𝟶", "𝟷", "𝟸", "𝟹", "𝟺", "𝟻", "𝟼", "𝟽", "𝟾", "𝟿"], type: "number", role: "integer", font: "monospace" },
            { set: me, type: "number", role: "float" },
            { set: ge, type: "number", role: "othernumber" },
            { set: ue, type: "operator", role: "addition" },
            { set: he, type: "operator", role: "multiplication" },
            {
              set: ["¯", "-", "⁒", "⁻", "₋", "−", "∖", "∸", "≂", "⊖", "⊟", "➖", "⨩", "⨪", "⨫", "⨬", "⨺", "⩁", "﹣", "－", "‐", "‑"],
              type: "operator",
              role: "subtraction"
            },
            { set: ["/", "÷", "⁄", "∕", "⊘", "⟌", "⦼", "⨸"], type: "operator", role: "division" },
            { set: ["∀", "∃", "∆", "∇", "∂", "∁", "∄"], type: "operator", role: "prefix operator" },
            { set: ["𝛁", "𝛛", "𝟊", "𝟋"], type: "operator", role: "prefix operator", font: "bold" },
            { set: ["𝛻", "𝜕"], type: "operator", role: "prefix operator", font: "italic" },
            { set: ["𝝯", "𝞉"], type: "operator", role: "prefix operator", font: "sans-serif-bold" },
            {
              set: [
                "=",
                "~",
                "⁼",
                "₌",
                "∼",
                "∽",
                "≃",
                "≅",
                "≈",
                "≊",
                "≋",
                "≌",
                "≍",
                "≎",
                "≑",
                "≒",
                "≓",
                "≔",
                "≕",
                "≖",
                "≗",
                "≘",
                "≙",
                "≚",
                "≛",
                "≜",
                "≝",
                "≞",
                "≟",
                "≡",
                "≣",
                "⧤",
                "⩦",
                "⩮",
                "⩯",
                "⩰",
                "⩱",
                "⩲",
                "⩳",
                "⩴",
                "⩵",
                "⩶",
                "⩷",
                "⩸",
                "⋕",
                "⩭",
                "⩪",
                "⩫",
                "⩬",
                "﹦",
                "＝",
                "⩬",
                "⊜",
                "∷"
              ],
              type: "relation",
              role: "equality"
            },
            {
              set: [
                "<",
                ">",
                "≁",
                "≂",
                "≄",
                "≆",
                "≇",
                "≉",
                "≏",
                "≐",
                "≠",
                "≢",
                "≤",
                "≥",
                "≦",
                "≧",
                "≨",
                "≩",
                "≪",
                "≫",
                "≬",
                "≭",
                "≮",
                "≯",
                "≰",
                "≱",
                "≲",
                "≳",
                "≴",
                "≵",
                "≶",
                "≷",
                "≸",
                "≹",
                "≺",
                "≻",
                "≼",
                "≽",
                "≾",
                "≿",
                "⊀",
                "⊁",
                "⋖",
                "⋗",
                "⋘",
                "⋙",
                "⋚",
                "⋛",
                "⋜",
                "⋝",
                "⋞",
                "⋟",
                "⋠",
                "⋡",
                "⋦",
                "⋧",
                "⋨",
                "⋩",
                "⩹",
                "⩺",
                "⩻",
                "⩼",
                "⩽",
                "⩾",
                "⩿",
                "⪀",
                "⪁",
                "⪂",
                "⪃",
                "⪄",
                "⪅",
                "⪆",
                "⪇",
                "⪈",
                "⪉",
                "⪊",
                "⪋",
                "⪌",
                "⪍",
                "⪎",
                "⪏",
                "⪐",
                "⪑",
                "⪒",
                "⪓",
                "⪔",
                "⪕",
                "⪖",
                "⪗",
                "⪘",
                "⪙",
                "⪚",
                "⪛",
                "⪜",
                "⪝",
                "⪞",
                "⪟",
                "⪠",
                "⪡",
                "⪢",
                "⪣",
                "⪤",
                "⪥",
                "⪦",
                "⪧",
                "⪨",
                "⪩",
                "⪪",
                "⪫",
                "⪬",
                "⪭",
                "⪮",
                "⪯",
                "⪰",
                "⪱",
                "⪲",
                "⪳",
                "⪴",
                "⪵",
                "⪶",
                "⪷",
                "⪸",
                "⪹",
                "⪺",
                "⪻",
                "⪼",
                "⫷",
                "⫸",
                "⫹",
                "⫺",
                "⧀",
                "⧁",
                "﹤",
                "﹥",
                "＜",
                "＞"
              ],
              type: "relation",
              role: "inequality"
            },
            {
              set: [
                "⋢",
                "⋣",
                "⋤",
                "⋥",
                "⊂",
                "⊃",
                "⊄",
                "⊅",
                "⊆",
                "⊇",
                "⊈",
                "⊉",
                "⊊",
                "⊋",
                "⊏",
                "⊐",
                "⊑",
                "⊒",
                "⪽",
                "⪾",
                "⪿",
                "⫀",
                "⫁",
                "⫂",
                "⫃",
                "⫄",
                "⫅",
                "⫆",
                "⫇",
                "⫈",
                "⫉",
                "⫊",
                "⫋",
                "⫌",
                "⫍",
                "⫎",
                "⫏",
                "⫐",
                "⫑",
                "⫒",
                "⫓",
                "⫔",
                "⫕",
                "⫖",
                "⫗",
                "⫘",
                "⋐",
                "⋑",
                "⋪",
                "⋫",
                "⋬",
                "⋭",
                "⊲",
                "⊳",
                "⊴",
                "⊵"
              ],
              type: "relation",
              role: "set"
            },
            {
              set: [
                "⊢",
                "⊣",
                "⊦",
                "⊧",
                "⊨",
                "⊩",
                "⊪",
                "⊫",
                "⊬",
                "⊭",
                "⊮",
                "⊯",
                "⫞",
                "⫟",
                "⫠",
                "⫡",
                "⫢",
                "⫣",
                "⫤",
                "⫥",
                "⫦",
                "⫧",
                "⫨",
                "⫩",
                "⫪",
                "⫫",
                "⫬",
                "⫭"
              ],
              type: "relation",
              role: "unknown"
            },
            {
              set: [
                "←",
                "↑",
                "→",
                "↓",
                "↔",
                "↕",
                "↖",
                "↗",
                "↘",
                "↙",
                "↚",
                "↛",
                "↜",
                "↝",
                "↞",
                "↟",
                "↠",
                "↡",
                "↢",
                "↣",
                "↤",
                "↥",
                "↦",
                "↧",
                "↨",
                "↩",
                "↪",
                "↫",
                "↬",
                "↭",
                "↮",
                "↯",
                "↰",
                "↱",
                "↲",
                "↳",
                "↴",
                "↵",
                "↶",
                "↷",
                "↸",
                "↹",
                "↺",
                "↻",
                "⇄",
                "⇅",
                "⇆",
                "⇇",
                "⇈",
                "⇉",
                "⇊",
                "⇍",
                "⇎",
                "⇏",
                "⇐",
                "⇑",
                "⇒",
                "⇓",
                "⇔",
                "⇕",
                "⇖",
                "⇗",
                "⇘",
                "⇙",
                "⇚",
                "⇛",
                "⇜",
                "⇝",
                "⇞",
                "⇟",
                "⇠",
                "⇡",
                "⇢",
                "⇣",
                "⇤",
                "⇥",
                "⇦",
                "⇧",
                "⇨",
                "⇩",
                "⇪",
                "⇫",
                "⇬",
                "⇭",
                "⇮",
                "⇯",
                "⇰",
                "⇱",
                "⇲",
                "⇳",
                "⇴",
                "⇵",
                "⇶",
                "⇷",
                "⇸",
                "⇹",
                "⇺",
                "⇻",
                "⇼",
                "⇽",
                "⇾",
                "⇿",
                "⌁",
                "⌃",
                "⌄",
                "⌤",
                "⎋",
                "➔",
                "➘",
                "➙",
                "➚",
                "➛",
                "➜",
                "➝",
                "➞",
                "➟",
                "➠",
                "➡",
                "➢",
                "➣",
                "➤",
                "➥",
                "➦",
                "➧",
                "➨",
                "➩",
                "➪",
                "➫",
                "➬",
                "➭",
                "➮",
                "➯",
                "➱",
                "➲",
                "➳",
                "➴",
                "➵",
                "➶",
                "➷",
                "➸",
                "➹",
                "➺",
                "➻",
                "➼",
                "➽",
                "➾",
                "⟰",
                "⟱",
                "⟲",
                "⟳",
                "⟴",
                "⟵",
                "⟶",
                "⟷",
                "⟸",
                "⟹",
                "⟺",
                "⟻",
                "⟼",
                "⟽",
                "⟾",
                "⟿",
                "⤀",
                "⤁",
                "⤂",
                "⤃",
                "⤄",
                "⤅",
                "⤆",
                "⤇",
                "⤈",
                "⤉",
                "⤊",
                "⤋",
                "⤌",
                "⤍",
                "⤎",
                "⤏",
                "⤐",
                "⤑",
                "⤒",
                "⤓",
                "⤔",
                "⤕",
                "⤖",
                "⤗",
                "⤘",
                "⤙",
                "⤚",
                "⤛",
                "⤜",
                "⤝",
                "⤞",
                "⤟",
                "⤠",
                "⤡",
                "⤢",
                "⤣",
                "⤤",
                "⤥",
                "⤦",
                "⤧",
                "⤨",
                "⤩",
                "⤪",
                "⤭",
                "⤮",
                "⤯",
                "⤰",
                "⤱",
                "⤲",
                "⤳",
                "⤴",
                "⤵",
                "⤶",
                "⤷",
                "⤸",
                "⤹",
                "⤺",
                "⤻",
                "⤼",
                "⤽",
                "⤾",
                "⤿",
                "⥀",
                "⥁",
                "⥂",
                "⥃",
                "⥄",
                "⥅",
                "⥆",
                "⥇",
                "⥈",
                "⥉",
                "⥰",
                "⥱",
                "⥲",
                "⥳",
                "⥴",
                "⥵",
                "⥶",
                "⥷",
                "⥸",
                "⥹",
                "⥺",
                "⥻",
                "⦳",
                "⦴",
                "⦽",
                "⧪",
                "⧬",
                "⧭",
                "⨗",
                "⬀",
                "⬁",
                "⬂",
                "⬃",
                "⬄",
                "⬅",
                "⬆",
                "⬇",
                "⬈",
                "⬉",
                "⬊",
                "⬋",
                "⬌",
                "⬍",
                "⬎",
                "⬏",
                "⬐",
                "⬑",
                "⬰",
                "⬱",
                "⬲",
                "⬳",
                "⬴",
                "⬵",
                "⬶",
                "⬷",
                "⬸",
                "⬹",
                "⬺",
                "⬻",
                "⬼",
                "⬽",
                "⬾",
                "⬿",
                "⭀",
                "⭁",
                "⭂",
                "⭃",
                "⭄",
                "⭅",
                "⭆",
                "⭇",
                "⭈",
                "⭉",
                "⭊",
                "⭋",
                "⭌",
                "￩",
                "￪",
                "￫",
                "￬",
                "↼",
                "↽",
                "↾",
                "↿",
                "⇀",
                "⇁",
                "⇂",
                "⇃",
                "⇋",
                "⇌",
                "⥊",
                "⥋",
                "⥌",
                "⥍",
                "⥎",
                "⥏",
                "⥐",
                "⥑",
                "⥒",
                "⥓",
                "⥔",
                "⥕",
                "⥖",
                "⥗",
                "⥘",
                "⥙",
                "⥚",
                "⥛",
                "⥜",
                "⥝",
                "⥞",
                "⥟",
                "⥠",
                "⥡",
                "⥢",
                "⥣",
                "⥤",
                "⥥",
                "⥦",
                "⥧",
                "⥨",
                "⥩",
                "⥪",
                "⥫",
                "⥬",
                "⥭",
                "⥮",
                "⥯",
                "⥼",
                "⥽",
                "⥾",
                "⥿"
              ],
              type: "relation",
              role: "arrow"
            },
            { set: ["∈", "∊", "⋲", "⋳", "⋴", "⋵", "⋶", "⋷", "⋸", "⋹", "⋿"], type: "operator", role: "element" },
            { set: ["∉"], type: "operator", role: "nonelement" },
            { set: ["∋", "∍", "⋺", "⋻", "⋼", "⋽", "⋾"], type: "operator", role: "reelement" },
            { set: ["∌"], type: "operator", role: "renonelement" },
            {
              set: ["⅀", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨃", "⨄", "⨅", "⨆", "⨇", "⨈", "⨉", "⨊", "⨋", "⫼", "⫿"],
              type: "largeop",
              role: "sum"
            },
            {
              set: [
                "∫",
                "∬",
                "∭",
                "∮",
                "∯",
                "∰",
                "∱",
                "∲",
                "∳",
                "⨌",
                "⨍",
                "⨎",
                "⨏",
                "⨐",
                "⨑",
                "⨒",
                "⨓",
                "⨔",
                "⨕",
                "⨖",
                "⨗",
                "⨘",
                "⨙",
                "⨚",
                "⨛",
                "⨜"
              ],
              type: "largeop",
              role: "integral"
            },
            { set: ["∟", "∠", "∡", "∢", "⊾", "⊿", "△", "▷", "▽", "◁"], type: "operator", role: "geometry" },
            {
              set: ["inf", "lim", "liminf", "limsup", "max", "min", "sup", "injlim", "projlim", "inj lim", "proj lim"],
              type: "function",
              role: "limit function"
            },
            { set: Se, type: "function", role: "prefix function" },
            { set: ["mod", "rem"], type: "operator", role: "prefix function" }
          ],
          Ne = (function () {
            const e = {};
            for (let t, n = 0; (t = be[n]); n++)
              t.set.forEach(function (n) {
                e[n] = { role: t.role || "unknown", type: t.type || "unknown", font: t.font || "unknown" };
              });
            return e;
          })();
        (t.equal = function (e, t) {
          return e.type === t.type && e.role === t.role && e.font === t.font;
        }),
          (t.lookupType = function (e) {
            var t;
            return (null === (t = Ne[e]) || void 0 === t ? void 0 : t.type) || "unknown";
          }),
          (t.lookupRole = function (e) {
            var t;
            return (null === (t = Ne[e]) || void 0 === t ? void 0 : t.role) || "unknown";
          }),
          (t.lookupMeaning = function (e) {
            return Ne[e] || { role: "unknown", type: "unknown", font: "unknown" };
          }),
          (t.invisibleTimes = function () {
            return pe;
          }),
          (t.invisiblePlus = function () {
            return de;
          }),
          (t.invisibleComma = function () {
            return n;
          }),
          (t.functionApplication = function () {
            return fe;
          }),
          (t.isMatchingFence = function (e, t) {
            return -1 !== h.indexOf(e) || -1 !== p.indexOf(e) ? e === t : s[e] === t || a[e] === t;
          }),
          (t.isEmbellishedType = function (e) {
            return "operator" === e || "relation" === e || "fence" === e || "punctuation" === e;
          });
        const Ee = new Map();
        function ye(e, t) {
          return `${e} ${t}`;
        }
        function Ae(e, t, n = "") {
          for (const r of t) Ee.set(ye(e, r), n || e);
        }
        Ae("d", ["d", "ⅆ", "ｄ", "𝐝", "𝑑", "𝒹", "𝓭", "𝔡", "𝕕", "𝖉", "𝖽", "𝗱", "𝘥", "𝚍"]),
          Ae("bar", i),
          Ae("tilde", o),
          (t.lookupSecondary = function (e, t) {
            return Ee.get(ye(e, t));
          });
      },
      7405: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SemanticMeaningCollator = t.SemanticNodeCollator = t.SemanticDefault = void 0);
        const r = n(4020),
          i = n(178);
        class o {
          constructor() {
            this.map = {};
          }
          static key(e, t) {
            return t ? e + ":" + t : e;
          }
          add(e, t) {
            this.map[o.key(e, t.font)] = t;
          }
          addNode(e) {
            this.add(e.textContent, e.meaning());
          }
          retrieve(e, t) {
            return this.map[o.key(e, t)];
          }
          retrieveNode(e) {
            return this.retrieve(e.textContent, e.font);
          }
          size() {
            return Object.keys(this.map).length;
          }
        }
        t.SemanticDefault = o;
        class s {
          constructor() {
            this.map = {};
          }
          add(e, t) {
            const n = this.map[e];
            n ? n.push(t) : (this.map[e] = [t]);
          }
          retrieve(e, t) {
            return this.map[o.key(e, t)];
          }
          retrieveNode(e) {
            return this.retrieve(e.textContent, e.font);
          }
          copy() {
            const e = this.copyCollator();
            for (const t in this.map) e.map[t] = this.map[t];
            return e;
          }
          minimize() {
            for (const e in this.map) 1 === this.map[e].length && delete this.map[e];
          }
          minimalCollator() {
            const e = this.copy();
            for (const t in e.map) 1 === e.map[t].length && delete e.map[t];
            return e;
          }
          isMultiValued() {
            for (const e in this.map) if (this.map[e].length > 1) return !0;
            return !1;
          }
          isEmpty() {
            return !Object.keys(this.map).length;
          }
        }
        class a extends s {
          copyCollator() {
            return new a();
          }
          add(e, t) {
            const n = o.key(e, t.font);
            super.add(n, t);
          }
          addNode(e) {
            this.add(e.textContent, e);
          }
          toString() {
            const e = [];
            for (const t in this.map) {
              const n = Array(t.length + 3).join(" "),
                r = this.map[t],
                i = [];
              for (let e, t = 0; (e = r[t]); t++) i.push(e.toString());
              e.push(t + ": " + i.join("\n" + n));
            }
            return e.join("\n");
          }
          collateMeaning() {
            const e = new c();
            for (const t in this.map)
              e.map[t] = this.map[t].map(function (e) {
                return e.meaning();
              });
            return e;
          }
        }
        t.SemanticNodeCollator = a;
        class c extends s {
          copyCollator() {
            return new c();
          }
          add(e, t) {
            const n = this.retrieve(e, t.font);
            if (
              !n ||
              !n.find(function (e) {
                return r.equal(e, t);
              })
            ) {
              const n = o.key(e, t.font);
              super.add(n, t);
            }
          }
          addNode(e) {
            this.add(e.textContent, e.meaning());
          }
          toString() {
            const e = [];
            for (const t in this.map) {
              const n = Array(t.length + 3).join(" "),
                r = this.map[t],
                i = [];
              for (let e, t = 0; (e = r[t]); t++) i.push("{type: " + e.type + ", role: " + e.role + ", font: " + e.font + "}");
              e.push(t + ": " + i.join("\n" + n));
            }
            return e.join("\n");
          }
          reduce() {
            for (const e in this.map) 1 !== this.map[e].length && (this.map[e] = (0, i.reduce)(this.map[e]));
          }
          default() {
            const e = new o();
            for (const t in this.map) 1 === this.map[t].length && (e.map[t] = this.map[t][0]);
            return e;
          }
          newDefault() {
            const e = this.default();
            this.reduce();
            const t = this.default();
            return e.size() !== t.size() ? t : null;
          }
        }
        t.SemanticMeaningCollator = c;
      },
      5958: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SemanticMultiHeuristic = t.SemanticTreeHeuristic = t.SemanticAbstractHeuristic = void 0);
        class n {
          constructor(e, t, n = (e) => !1) {
            (this.name = e), (this.apply = t), (this.applicable = n);
          }
        }
        t.SemanticAbstractHeuristic = n;
        t.SemanticTreeHeuristic = class extends n {};
        t.SemanticMultiHeuristic = class extends n {};
      },
      2721: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.lookup = t.run = t.add = t.blacklist = t.flags = t.updateFactory = t.factory = void 0),
          (t.factory = null),
          (t.updateFactory = function (e) {
            t.factory = e;
          });
        const n = new Map();
        function r(e) {
          return n.get(e);
        }
        (t.flags = { combine_juxtaposition: !0, convert_juxtaposition: !0, multioperator: !0 }),
          (t.blacklist = {}),
          (t.add = function (e) {
            const r = e.name;
            n.set(r, e), t.flags[r] || (t.flags[r] = !1);
          }),
          (t.run = function (e, n, i) {
            const o = r(e);
            return o && !t.blacklist[e] && (t.flags[e] || o.applicable(n)) ? o.apply(n) : i ? i(n) : n;
          }),
          (t.lookup = r);
      },
      7103: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(1984),
          i = n(4886),
          o = n(4020),
          s = n(2721),
          a = n(5958),
          c = n(6161),
          l = n(7793),
          u = n(8901);
        function d(e, t, n) {
          let r = null;
          if (!e.length) return r;
          const i = n[n.length - 1],
            o = i && i.length,
            s = t && t.length,
            a = l.default.getInstance();
          if (o && s) {
            if ("infixop" === t[0].type && "implicit" === t[0].role) return (r = e.pop()), i.push(a.postfixNode_(i.pop(), e)), r;
            r = e.shift();
            const n = a.prefixNode_(t.shift(), e);
            return t.unshift(n), r;
          }
          return o ? (i.push(a.postfixNode_(i.pop(), e)), r) : (s && t.unshift(a.prefixNode_(t.shift(), e)), r);
        }
        function h(e, t, n) {
          if (!t.length) return e;
          const i = e.pop(),
            o = t.shift(),
            a = n.shift();
          if (c.isImplicitOp(o)) {
            r.Debugger.getInstance().output("Juxta Heuristic Case 2");
            const s = (i ? [i, o] : [o]).concat(a);
            return h(e.concat(s), t, n);
          }
          if (!i) return r.Debugger.getInstance().output("Juxta Heuristic Case 3"), h([o].concat(a), t, n);
          const l = a.shift();
          if (!l) {
            r.Debugger.getInstance().output("Juxta Heuristic Case 9");
            const a = s.factory.makeBranchNode("infixop", [i, t.shift()], [o], o.textContent);
            return (a.role = "implicit"), s.run("combine_juxtaposition", a), t.unshift(a), h(e, t, n);
          }
          if (c.isOperator(i) || c.isOperator(l))
            return r.Debugger.getInstance().output("Juxta Heuristic Case 4"), h(e.concat([i, o, l]).concat(a), t, n);
          let u = null;
          return (
            c.isImplicitOp(i) && c.isImplicitOp(l)
              ? (r.Debugger.getInstance().output("Juxta Heuristic Case 5"),
                i.contentNodes.push(o),
                (i.contentNodes = i.contentNodes.concat(l.contentNodes)),
                i.childNodes.push(l),
                (i.childNodes = i.childNodes.concat(l.childNodes)),
                l.childNodes.forEach((e) => (e.parent = i)),
                (o.parent = i),
                i.addMathmlNodes(o.mathml),
                i.addMathmlNodes(l.mathml),
                (u = i))
              : c.isImplicitOp(i)
              ? (r.Debugger.getInstance().output("Juxta Heuristic Case 6"),
                i.contentNodes.push(o),
                i.childNodes.push(l),
                (l.parent = i),
                (o.parent = i),
                i.addMathmlNodes(o.mathml),
                i.addMathmlNodes(l.mathml),
                (u = i))
              : c.isImplicitOp(l)
              ? (r.Debugger.getInstance().output("Juxta Heuristic Case 7"),
                l.contentNodes.unshift(o),
                l.childNodes.unshift(i),
                (i.parent = l),
                (o.parent = l),
                l.addMathmlNodes(o.mathml),
                l.addMathmlNodes(i.mathml),
                (u = l))
              : (r.Debugger.getInstance().output("Juxta Heuristic Case 8"),
                (u = s.factory.makeBranchNode("infixop", [i, l], [o], o.textContent)),
                (u.role = "implicit")),
            e.push(u),
            h(e.concat(a), t, n)
          );
        }
        s.add(
          new a.SemanticTreeHeuristic("combine_juxtaposition", function (e) {
            for (let t, n = e.childNodes.length - 1; (t = e.childNodes[n]); n--)
              c.isImplicitOp(t) &&
                !t.nobreaking &&
                (e.childNodes.splice(n, 1, ...t.childNodes),
                e.contentNodes.splice(n, 0, ...t.contentNodes),
                t.childNodes.concat(t.contentNodes).forEach(function (t) {
                  t.parent = e;
                }),
                e.addMathmlNodes(t.mathml));
            return e;
          })
        ),
          s.add(
            new a.SemanticTreeHeuristic(
              "propagateSimpleFunction",
              (e) => (
                ("infixop" !== e.type && "fraction" !== e.type) ||
                  !e.childNodes.every(c.isSimpleFunction) ||
                  (e.role = "composed function"),
                e
              ),
              (e) => "clearspeak" === i.default.getInstance().domain
            )
          ),
          s.add(
            new a.SemanticTreeHeuristic(
              "simpleNamedFunction",
              (e) => ("unit" !== e.role && -1 !== ["f", "g", "h", "F", "G", "H"].indexOf(e.textContent) && (e.role = "simple function"), e),
              (e) => "clearspeak" === i.default.getInstance().domain
            )
          ),
          s.add(
            new a.SemanticTreeHeuristic(
              "propagateComposedFunction",
              (e) => ("fenced" === e.type && "composed function" === e.childNodes[0].role && (e.role = "composed function"), e),
              (e) => "clearspeak" === i.default.getInstance().domain
            )
          ),
          s.add(
            new a.SemanticTreeHeuristic("multioperator", (e) => {
              if ("unknown" !== e.role || e.textContent.length <= 1) return;
              const t = [...e.textContent].map(o.lookupMeaning).reduce(function (e, t) {
                return e && t.role && "unknown" !== t.role && t.role !== e ? ("unknown" === e ? t.role : null) : e;
              }, "unknown");
              t && (e.role = t);
            })
          ),
          s.add(
            new a.SemanticMultiHeuristic("convert_juxtaposition", (e) => {
              let t = u.partitionNodes(e, function (e) {
                return e.textContent === o.invisibleTimes() && "operator" === e.type;
              });
              (t = t.rel.length
                ? (function (e) {
                    const t = [],
                      n = [];
                    let r = e.comp.shift(),
                      i = null,
                      o = [];
                    for (; e.comp.length; )
                      if (((o = []), r.length)) i && t.push(i), n.push(r), (i = e.rel.shift()), (r = e.comp.shift());
                      else {
                        for (i && o.push(i); !r.length && e.comp.length; ) (r = e.comp.shift()), o.push(e.rel.shift());
                        i = d(o, r, n);
                      }
                    o.length || r.length ? (t.push(i), n.push(r)) : (o.push(i), d(o, r, n));
                    return { rel: t, comp: n };
                  })(t)
                : t),
                (e = t.comp[0]);
              for (let n, r, i = 1; (n = t.comp[i]), (r = t.rel[i - 1]); i++) e.push(r), (e = e.concat(n));
              return (
                (t = u.partitionNodes(e, function (e) {
                  return e.textContent === o.invisibleTimes() && ("operator" === e.type || "infixop" === e.type);
                })),
                t.rel.length ? h(t.comp.shift(), t.rel, t.comp) : e
              );
            })
          ),
          s.add(
            new a.SemanticTreeHeuristic(
              "simple2prefix",
              (e) => (e.textContent.length > 1 && !e.textContent[0].match(/[A-Z]/) && (e.role = "prefix function"), e),
              (e) => "braille" === i.default.getInstance().modality && "identifier" === e.type
            )
          ),
          s.add(
            new a.SemanticTreeHeuristic(
              "detect_cycle",
              (e) => {
                (e.type = "matrix"), (e.role = "cycle");
                const t = e.childNodes[0];
                return (t.type = "row"), (t.role = "cycle"), (t.textContent = ""), (t.contentNodes = []), e;
              },
              (e) =>
                "fenced" === e.type &&
                "infixop" === e.childNodes[0].type &&
                "implicit" === e.childNodes[0].role &&
                e.childNodes[0].childNodes.every(function (e) {
                  return "number" === e.type;
                }) &&
                e.childNodes[0].contentNodes.every(function (e) {
                  return "space" === e.role;
                })
            )
          );
      },
      8122: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SemanticMathml = void 0);
        const r = n(6671),
          i = n(6098),
          o = n(6161),
          s = n(7793),
          a = n(8901);
        class c extends i.SemanticAbstractParser {
          constructor() {
            super("MathML"),
              (this.parseMap_ = {
                SEMANTICS: this.semantics_.bind(this),
                MATH: this.rows_.bind(this),
                MROW: this.rows_.bind(this),
                MPADDED: this.rows_.bind(this),
                MSTYLE: this.rows_.bind(this),
                MFRAC: this.fraction_.bind(this),
                MSUB: this.limits_.bind(this),
                MSUP: this.limits_.bind(this),
                MSUBSUP: this.limits_.bind(this),
                MOVER: this.limits_.bind(this),
                MUNDER: this.limits_.bind(this),
                MUNDEROVER: this.limits_.bind(this),
                MROOT: this.root_.bind(this),
                MSQRT: this.sqrt_.bind(this),
                MTABLE: this.table_.bind(this),
                MLABELEDTR: this.tableLabeledRow_.bind(this),
                MTR: this.tableRow_.bind(this),
                MTD: this.tableCell_.bind(this),
                MS: this.text_.bind(this),
                MTEXT: this.text_.bind(this),
                MSPACE: this.space_.bind(this),
                "ANNOTATION-XML": this.text_.bind(this),
                MI: this.identifier_.bind(this),
                MN: this.number_.bind(this),
                MO: this.operator_.bind(this),
                MFENCED: this.fenced_.bind(this),
                MENCLOSE: this.enclosed_.bind(this),
                MMULTISCRIPTS: this.multiscripts_.bind(this),
                ANNOTATION: this.empty_.bind(this),
                NONE: this.empty_.bind(this),
                MACTION: this.action_.bind(this)
              });
            const e = { type: "identifier", role: "numbersetletter", font: "double-struck" };
            ["C", "H", "N", "P", "Q", "R", "Z", "ℂ", "ℍ", "ℕ", "ℙ", "ℚ", "ℝ", "ℤ"].forEach(
              ((t) => this.getFactory().defaultMap.add(t, e)).bind(this)
            );
          }
          static getAttribute_(e, t, n) {
            if (!e.hasAttribute(t)) return n;
            const r = e.getAttribute(t);
            return r.match(/^\s*$/) ? null : r;
          }
          parse(e) {
            s.default.getInstance().setNodeFactory(this.getFactory());
            const t = r.toArray(e.childNodes),
              n = r.tagName(e),
              i = this.parseMap_[n],
              o = (i || this.dummy_.bind(this))(e, t);
            return (
              a.addAttributes(o, e),
              -1 !== ["MATH", "MROW", "MPADDED", "MSTYLE", "SEMANTICS"].indexOf(n) || (o.mathml.unshift(e), (o.mathmlTree = e)),
              o
            );
          }
          semantics_(e, t) {
            return t.length ? this.parse(t[0]) : this.getFactory().makeEmptyNode();
          }
          rows_(e, t) {
            const n = e.getAttribute("semantics");
            if (n && n.match("bspr_")) return s.default.proof(e, n, this.parseList.bind(this));
            let r;
            return (
              1 === (t = a.purgeNodes(t)).length
                ? ((r = this.parse(t[0])), "empty" !== r.type || r.mathmlTree || (r.mathmlTree = e))
                : (r = s.default.getInstance().row(this.parseList(t))),
              r.mathml.unshift(e),
              r
            );
          }
          fraction_(e, t) {
            if (!t.length) return this.getFactory().makeEmptyNode();
            const n = this.parse(t[0]),
              r = t[1] ? this.parse(t[1]) : this.getFactory().makeEmptyNode();
            return s.default.getInstance().fractionLikeNode(n, r, e.getAttribute("linethickness"), "true" === e.getAttribute("bevelled"));
          }
          limits_(e, t) {
            return s.default.getInstance().limitNode(r.tagName(e), this.parseList(t));
          }
          root_(e, t) {
            return t[1] ? this.getFactory().makeBranchNode("root", [this.parse(t[1]), this.parse(t[0])], []) : this.sqrt_(e, t);
          }
          sqrt_(e, t) {
            const n = this.parseList(a.purgeNodes(t));
            return this.getFactory().makeBranchNode("sqrt", [s.default.getInstance().row(n)], []);
          }
          table_(e, t) {
            const n = e.getAttribute("semantics");
            if (n && n.match("bspr_")) return s.default.proof(e, n, this.parseList.bind(this));
            const r = this.getFactory().makeBranchNode("table", this.parseList(t), []);
            return (r.mathmlTree = e), s.default.tableToMultiline(r), r;
          }
          tableRow_(e, t) {
            const n = this.getFactory().makeBranchNode("row", this.parseList(t), []);
            return (n.role = "table"), n;
          }
          tableLabeledRow_(e, t) {
            if (!t.length) return this.tableRow_(e, t);
            const n = this.parse(t[0]);
            n.role = "label";
            const r = this.getFactory().makeBranchNode("row", this.parseList(t.slice(1)), [n]);
            return (r.role = "table"), r;
          }
          tableCell_(e, t) {
            const n = this.parseList(a.purgeNodes(t));
            let r;
            r = n.length ? (1 === n.length && o.isType(n[0], "empty") ? n : [s.default.getInstance().row(n)]) : [];
            const i = this.getFactory().makeBranchNode("cell", r, []);
            return (i.role = "table"), i;
          }
          space_(e, t) {
            const n = e.getAttribute("width"),
              i = n && n.match(/[a-z]*$/);
            if (!i) return this.empty_(e, t);
            const o = i[0],
              a = parseFloat(n.slice(0, i.index)),
              c = { cm: 0.4, pc: 0.5, em: 0.5, ex: 1, in: 0.15, pt: 5, mm: 5 }[o];
            if (!c || isNaN(a) || a < c) return this.empty_(e, t);
            const l = this.getFactory().makeUnprocessed(e);
            return s.default.getInstance().text(l, r.tagName(e));
          }
          text_(e, t) {
            const n = this.leaf_(e, t);
            return e.textContent ? (n.updateContent(e.textContent, !0), s.default.getInstance().text(n, r.tagName(e))) : n;
          }
          identifier_(e, t) {
            const n = this.leaf_(e, t);
            return s.default
              .getInstance()
              .identifierNode(n, s.default.getInstance().font(e.getAttribute("mathvariant")), e.getAttribute("class"));
          }
          number_(e, t) {
            const n = this.leaf_(e, t);
            return s.default.number(n), n;
          }
          operator_(e, t) {
            const n = this.leaf_(e, t);
            return s.default.getInstance().operatorNode(n), n;
          }
          fenced_(e, t) {
            const n = this.parseList(a.purgeNodes(t)),
              r = c.getAttribute_(e, "separators", ","),
              i = c.getAttribute_(e, "open", "("),
              o = c.getAttribute_(e, "close", ")"),
              l = s.default.getInstance().mfenced(i, o, r, n);
            return s.default.getInstance().tablesInRow([l])[0];
          }
          enclosed_(e, t) {
            const n = this.parseList(a.purgeNodes(t)),
              r = this.getFactory().makeBranchNode("enclose", [s.default.getInstance().row(n)], []);
            return (r.role = e.getAttribute("notation") || "unknown"), r;
          }
          multiscripts_(e, t) {
            if (!t.length) return this.getFactory().makeEmptyNode();
            const n = this.parse(t.shift());
            if (!t.length) return n;
            const i = [],
              o = [],
              c = [],
              l = [];
            let u = !1,
              d = 0;
            for (let e, n = 0; (e = t[n]); n++)
              "MPRESCRIPTS" !== r.tagName(e)
                ? (u ? (1 & d ? i.push(e) : o.push(e)) : 1 & d ? c.push(e) : l.push(e), d++)
                : ((u = !0), (d = 0));
            return a.purgeNodes(i).length || a.purgeNodes(o).length
              ? s.default.getInstance().tensor(n, this.parseList(o), this.parseList(i), this.parseList(l), this.parseList(c))
              : s.default.getInstance().pseudoTensor(n, this.parseList(l), this.parseList(c));
          }
          empty_(e, t) {
            return this.getFactory().makeEmptyNode();
          }
          action_(e, t) {
            return t.length > 1 ? this.parse(t[1]) : this.getFactory().makeUnprocessed(e);
          }
          dummy_(e, t) {
            const n = this.getFactory().makeUnprocessed(e);
            return (n.role = e.tagName), (n.textContent = e.textContent), n;
          }
          leaf_(e, t) {
            if (1 === t.length && t[0].nodeType !== r.NodeType.TEXT_NODE) {
              const n = this.getFactory().makeUnprocessed(e);
              return (n.role = t[0].tagName), a.addAttributes(n, t[0]), n;
            }
            return this.getFactory().makeLeafNode(e.textContent, s.default.getInstance().font(e.getAttribute("mathvariant")));
          }
        }
        t.SemanticMathml = c;
      },
      9444: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SemanticNode = void 0);
        const r = n(6671),
          i = n(4020),
          o = n(8901);
        class s {
          constructor(e) {
            (this.id = e),
              (this.mathml = []),
              (this.parent = null),
              (this.type = "unknown"),
              (this.role = "unknown"),
              (this.font = "unknown"),
              (this.embellished = null),
              (this.fencePointer = ""),
              (this.childNodes = []),
              (this.textContent = ""),
              (this.mathmlTree = null),
              (this.contentNodes = []),
              (this.annotation = {}),
              (this.attributes = {}),
              (this.nobreaking = !1);
          }
          static fromXml(e) {
            const t = parseInt(e.getAttribute("id"), 10),
              n = new s(t);
            return (
              (n.type = e.tagName),
              s.setAttribute(n, e, "role"),
              s.setAttribute(n, e, "font"),
              s.setAttribute(n, e, "embellished"),
              s.setAttribute(n, e, "fencepointer", "fencePointer"),
              e.getAttribute("annotation") && n.parseAnnotation(e.getAttribute("annotation")),
              o.addAttributes(n, e),
              s.processChildren(n, e),
              n
            );
          }
          static setAttribute(e, t, n, r) {
            r = r || n;
            const i = t.getAttribute(n);
            i && (e[r] = i);
          }
          static processChildren(e, t) {
            for (const n of r.toArray(t.childNodes)) {
              if (n.nodeType === r.NodeType.TEXT_NODE) {
                e.textContent = n.textContent;
                continue;
              }
              const t = r.toArray(n.childNodes).map(s.fromXml);
              t.forEach((t) => (t.parent = e)), "CONTENT" === r.tagName(n) ? (e.contentNodes = t) : (e.childNodes = t);
            }
          }
          querySelectorAll(e) {
            let t = [];
            for (let n, r = 0; (n = this.childNodes[r]); r++) t = t.concat(n.querySelectorAll(e));
            for (let n, r = 0; (n = this.contentNodes[r]); r++) t = t.concat(n.querySelectorAll(e));
            return e(this) && t.unshift(this), t;
          }
          xml(e, t) {
            const n = function (n, r) {
                const i = r.map(function (n) {
                    return n.xml(e, t);
                  }),
                  o = e.createElementNS("", n);
                for (let e, t = 0; (e = i[t]); t++) o.appendChild(e);
                return o;
              },
              r = e.createElementNS("", this.type);
            return (
              t || this.xmlAttributes(r),
              (r.textContent = this.textContent),
              this.contentNodes.length > 0 && r.appendChild(n("content", this.contentNodes)),
              this.childNodes.length > 0 && r.appendChild(n("children", this.childNodes)),
              r
            );
          }
          toString(e = !1) {
            const t = r.parseInput("<snode/>");
            return r.serializeXml(this.xml(t, e));
          }
          allAttributes() {
            const e = [];
            return (
              e.push(["role", this.role]),
              "unknown" !== this.font && e.push(["font", this.font]),
              Object.keys(this.annotation).length && e.push(["annotation", this.xmlAnnotation()]),
              this.embellished && e.push(["embellished", this.embellished]),
              this.fencePointer && e.push(["fencepointer", this.fencePointer]),
              e.push(["id", this.id.toString()]),
              e
            );
          }
          xmlAnnotation() {
            const e = [];
            for (const t in this.annotation)
              this.annotation[t].forEach(function (n) {
                e.push(t + ":" + n);
              });
            return e.join(";");
          }
          toJson() {
            const e = {};
            e.type = this.type;
            const t = this.allAttributes();
            for (let n, r = 0; (n = t[r]); r++) e[n[0]] = n[1].toString();
            return (
              this.textContent && (e.$t = this.textContent),
              this.childNodes.length &&
                (e.children = this.childNodes.map(function (e) {
                  return e.toJson();
                })),
              this.contentNodes.length &&
                (e.content = this.contentNodes.map(function (e) {
                  return e.toJson();
                })),
              e
            );
          }
          updateContent(e, t) {
            const n = t ? e.replace(/^[ \f\n\r\t\v\u200b]*/, "").replace(/[ \f\n\r\t\v\u200b]*$/, "") : e.trim();
            if (((e = e && !n ? e : n), this.textContent === e)) return;
            const r = (0, i.lookupMeaning)(e);
            (this.textContent = e), (this.role = r.role), (this.type = r.type), (this.font = r.font);
          }
          addMathmlNodes(e) {
            for (let t, n = 0; (t = e[n]); n++) -1 === this.mathml.indexOf(t) && this.mathml.push(t);
          }
          appendChild(e) {
            this.childNodes.push(e), this.addMathmlNodes(e.mathml), (e.parent = this);
          }
          replaceChild(e, t) {
            const n = this.childNodes.indexOf(e);
            if (-1 === n) return;
            (e.parent = null), (t.parent = this), (this.childNodes[n] = t);
            const r = e.mathml.filter(function (e) {
                return -1 === t.mathml.indexOf(e);
              }),
              i = t.mathml.filter(function (t) {
                return -1 === e.mathml.indexOf(t);
              });
            this.removeMathmlNodes(r), this.addMathmlNodes(i);
          }
          appendContentNode(e) {
            e && (this.contentNodes.push(e), this.addMathmlNodes(e.mathml), (e.parent = this));
          }
          removeContentNode(e) {
            if (e) {
              const t = this.contentNodes.indexOf(e);
              -1 !== t && this.contentNodes.slice(t, 1);
            }
          }
          equals(e) {
            if (!e) return !1;
            if (
              this.type !== e.type ||
              this.role !== e.role ||
              this.textContent !== e.textContent ||
              this.childNodes.length !== e.childNodes.length ||
              this.contentNodes.length !== e.contentNodes.length
            )
              return !1;
            for (let t, n, r = 0; (t = this.childNodes[r]), (n = e.childNodes[r]); r++) if (!t.equals(n)) return !1;
            for (let t, n, r = 0; (t = this.contentNodes[r]), (n = e.contentNodes[r]); r++) if (!t.equals(n)) return !1;
            return !0;
          }
          displayTree() {
            console.info(this.displayTree_(0));
          }
          addAnnotation(e, t) {
            t && this.addAnnotation_(e, t);
          }
          getAnnotation(e) {
            const t = this.annotation[e];
            return t || [];
          }
          hasAnnotation(e, t) {
            const n = this.annotation[e];
            return !!n && -1 !== n.indexOf(t);
          }
          parseAnnotation(e) {
            const t = e.split(";");
            for (let e = 0, n = t.length; e < n; e++) {
              const n = t[e].split(":");
              this.addAnnotation(n[0], n[1]);
            }
          }
          meaning() {
            return { type: this.type, role: this.role, font: this.font };
          }
          xmlAttributes(e) {
            const t = this.allAttributes();
            for (let n, r = 0; (n = t[r]); r++) e.setAttribute(n[0], n[1]);
            this.addExternalAttributes(e);
          }
          addExternalAttributes(e) {
            for (const t in this.attributes) e.setAttribute(t, this.attributes[t]);
          }
          removeMathmlNodes(e) {
            const t = this.mathml;
            for (let n, r = 0; (n = e[r]); r++) {
              const e = t.indexOf(n);
              -1 !== e && t.splice(e, 1);
            }
            this.mathml = t;
          }
          displayTree_(e) {
            e++;
            const t = Array(e).join("  ");
            let n = "";
            (n += "\n" + t + this.toString()),
              (n += "\n" + t + "MathmlTree:"),
              (n += "\n" + t + this.mathmlTreeString()),
              (n += "\n" + t + "MathML:");
            for (let e, r = 0; (e = this.mathml[r]); r++) n += "\n" + t + e.toString();
            return (
              (n += "\n" + t + "Begin Content"),
              this.contentNodes.forEach(function (t) {
                n += t.displayTree_(e);
              }),
              (n += "\n" + t + "End Content"),
              (n += "\n" + t + "Begin Children"),
              this.childNodes.forEach(function (t) {
                n += t.displayTree_(e);
              }),
              (n += "\n" + t + "End Children"),
              n
            );
          }
          mathmlTreeString() {
            return this.mathmlTree ? this.mathmlTree.toString() : "EMPTY";
          }
          addAnnotation_(e, t) {
            const n = this.annotation[e];
            n ? n.push(t) : (this.annotation[e] = [t]);
          }
        }
        t.SemanticNode = s;
      },
      4790: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SemanticNodeFactory = void 0);
        const r = n(7405),
          i = n(7405),
          o = n(9444);
        t.SemanticNodeFactory = class {
          constructor() {
            (this.leafMap = new i.SemanticNodeCollator()), (this.defaultMap = new r.SemanticDefault()), (this.idCounter_ = -1);
          }
          makeNode(e) {
            return this.createNode_(e);
          }
          makeUnprocessed(e) {
            const t = this.createNode_();
            return (t.mathml = [e]), (t.mathmlTree = e), t;
          }
          makeEmptyNode() {
            const e = this.createNode_();
            return (e.type = "empty"), e;
          }
          makeContentNode(e) {
            const t = this.createNode_();
            return t.updateContent(e), t;
          }
          makeMultipleContentNodes(e, t) {
            const n = [];
            for (let r = 0; r < e; r++) n.push(this.makeContentNode(t));
            return n;
          }
          makeLeafNode(e, t) {
            if (!e) return this.makeEmptyNode();
            const n = this.makeContentNode(e);
            n.font = t || n.font;
            const r = this.defaultMap.retrieveNode(n);
            return r && ((n.type = r.type), (n.role = r.role), (n.font = r.font)), this.leafMap.addNode(n), n;
          }
          makeBranchNode(e, t, n, r) {
            const i = this.createNode_();
            return (
              r && i.updateContent(r),
              (i.type = e),
              (i.childNodes = t),
              (i.contentNodes = n),
              t.concat(n).forEach(function (e) {
                (e.parent = i), i.addMathmlNodes(e.mathml);
              }),
              i
            );
          }
          createNode_(e) {
            return void 0 !== e ? (this.idCounter_ = Math.max(this.idCounter_, e)) : (e = ++this.idCounter_), new o.SemanticNode(e);
          }
        };
      },
      178: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SemanticComparator = t.reduce = t.sort = t.apply = t.add = void 0);
        const n = [];
        function r(e) {
          n.push(e);
        }
        function i(e, t) {
          for (let r, i = 0; (r = n[i]); i++) {
            const n = r.compare(e, t);
            if (0 !== n) return n;
          }
          return 0;
        }
        function o(e) {
          e.sort(i);
        }
        (t.add = r),
          (t.apply = i),
          (t.sort = o),
          (t.reduce = function (e) {
            if (e.length <= 1) return e;
            const t = e.slice();
            o(t);
            const n = [];
            let r;
            do {
              (r = t.pop()), n.push(r);
            } while (r && t.length && 0 === i(t[t.length - 1], r));
            return n;
          });
        class s {
          constructor(e, t = null) {
            (this.comparator = e), (this.type = t), r(this);
          }
          compare(e, t) {
            return this.type && this.type === e.type && this.type === t.type ? this.comparator(e, t) : 0;
          }
        }
        (t.SemanticComparator = s),
          new s(function (e, t) {
            return "simple function" === e.role ? 1 : "simple function" === t.role ? -1 : 0;
          }, "identifier");
      },
      6098: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SemanticAbstractParser = void 0);
        const r = n(4790);
        t.SemanticAbstractParser = class {
          constructor(e) {
            (this.type = e), (this.factory_ = new r.SemanticNodeFactory());
          }
          getFactory() {
            return this.factory_;
          }
          setFactory(e) {
            this.factory_ = e;
          }
          getType() {
            return this.type;
          }
          parseList(e) {
            const t = [];
            for (let n, r = 0; (n = e[r]); r++) t.push(this.parse(n));
            return t;
          }
        };
      },
      6161: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isMembership =
            t.elligibleRightNeutral =
            t.elligibleLeftNeutral =
            t.compareNeutralFences =
            t.isNeutralFence =
            t.isImplicitOp =
            t.isImplicit =
            t.isPureUnit =
            t.isUnitCounter =
            t.isNumber =
            t.isSingletonSetContent =
            t.scriptedElement_ =
            t.illegalSingleton_ =
            t.isSetNode =
            t.isRightBrace =
            t.isLeftBrace =
            t.isSimpleFunction =
            t.singlePunctAtPosition =
            t.isSimpleFunctionHead =
            t.isLimitBase =
            t.isBinomial =
            t.lineIsLabelled =
            t.tableIsMultiline =
            t.tableIsCases =
            t.isFencedElement =
            t.tableIsMatrixOrVector =
            t.isTableOrMultiline =
            t.isElligibleEmbellishedFence =
            t.isFence =
            t.isPunctuation =
            t.isRelation =
            t.isOperator =
            t.isEmbellished =
            t.isGeneralFunctionBoundary =
            t.isIntegralDxBoundarySingle =
            t.isIntegralDxBoundary =
            t.isBigOpBoundary =
            t.isPrefixFunctionBoundary =
            t.isSimpleFunctionScope =
            t.isAccent =
            t.isRole =
            t.embellishedType =
            t.isType =
              void 0);
        const r = n(4020),
          i = n(8901);
        function o(e, t) {
          return e.type === t;
        }
        function s(e, t) {
          return e.embellished === t;
        }
        function a(e, t) {
          return e.role === t;
        }
        function c(e) {
          return u(e) || d(e);
        }
        function l(e) {
          return o(e, "operator") || s(e, "operator");
        }
        function u(e) {
          return o(e, "relation") || s(e, "relation");
        }
        function d(e) {
          return o(e, "punctuation") || s(e, "punctuation");
        }
        function h(e) {
          return o(e, "fence") || s(e, "fence");
        }
        function p(e) {
          return (
            !e.embellished ||
            (!(function (e) {
              return (
                o(e, "tensor") &&
                (!o(e.childNodes[1], "empty") || !o(e.childNodes[2], "empty")) &&
                (!o(e.childNodes[3], "empty") || !o(e.childNodes[4], "empty"))
              );
            })(e) &&
              (!a(e, "close") || !o(e, "tensor")) &&
              (!a(e, "open") || (!o(e, "subscript") && !o(e, "superscript"))) &&
              p(e.childNodes[0]))
          );
        }
        function f(e) {
          return !!e && (o(e, "table") || o(e, "multiline"));
        }
        function m(e) {
          return !!e && o(e, "fenced") && (a(e, "leftright") || N(e)) && 1 === e.childNodes.length;
        }
        function g(e) {
          return !!e && -1 !== ["{", "﹛", "｛"].indexOf(e.textContent);
        }
        function S(e) {
          return !!e && -1 !== ["}", "﹜", "｝"].indexOf(e.textContent);
        }
        function b(e) {
          return "number" === e.type && ("integer" === e.role || "float" === e.role);
        }
        function N(e) {
          return "neutral" === e.role || "metric" === e.role;
        }
        (t.isType = o),
          (t.embellishedType = s),
          (t.isRole = a),
          (t.isAccent = function (e) {
            const t = new RegExp("∞|᪲");
            return (
              o(e, "fence") ||
              o(e, "punctuation") ||
              (o(e, "operator") && !e.textContent.match(t)) ||
              o(e, "relation") ||
              (o(e, "identifier") && a(e, "unknown") && !e.textContent.match(r.allLettersRegExp) && !e.textContent.match(t))
            );
          }),
          (t.isSimpleFunctionScope = function (e) {
            const t = e.childNodes;
            if (0 === t.length) return !0;
            if (t.length > 1) return !1;
            const n = t[0];
            if ("infixop" === n.type) {
              if ("implicit" !== n.role) return !1;
              if (n.childNodes.some((e) => o(e, "infixop"))) return !1;
            }
            return !0;
          }),
          (t.isPrefixFunctionBoundary = function (e) {
            return (l(e) && !a(e, "division")) || o(e, "appl") || c(e);
          }),
          (t.isBigOpBoundary = function (e) {
            return l(e) || c(e);
          }),
          (t.isIntegralDxBoundary = function (e, t) {
            return !!t && o(t, "identifier") && r.lookupSecondary("d", e.textContent);
          }),
          (t.isIntegralDxBoundarySingle = function (e) {
            if (o(e, "identifier")) {
              const t = e.textContent[0];
              return t && e.textContent[1] && r.lookupSecondary("d", t);
            }
            return !1;
          }),
          (t.isGeneralFunctionBoundary = c),
          (t.isEmbellished = function (e) {
            return e.embellished ? e.embellished : r.isEmbellishedType(e.type) ? e.type : null;
          }),
          (t.isOperator = l),
          (t.isRelation = u),
          (t.isPunctuation = d),
          (t.isFence = h),
          (t.isElligibleEmbellishedFence = function (e) {
            return !(!e || !h(e)) && (!e.embellished || p(e));
          }),
          (t.isTableOrMultiline = f),
          (t.tableIsMatrixOrVector = function (e) {
            return !!e && m(e) && f(e.childNodes[0]);
          }),
          (t.isFencedElement = m),
          (t.tableIsCases = function (e, t) {
            return t.length > 0 && a(t[t.length - 1], "openfence");
          }),
          (t.tableIsMultiline = function (e) {
            return e.childNodes.every(function (e) {
              return e.childNodes.length <= 1;
            });
          }),
          (t.lineIsLabelled = function (e) {
            return o(e, "line") && e.contentNodes.length && a(e.contentNodes[0], "label");
          }),
          (t.isBinomial = function (e) {
            return 2 === e.childNodes.length;
          }),
          (t.isLimitBase = function e(t) {
            return (
              o(t, "largeop") ||
              o(t, "limboth") ||
              o(t, "limlower") ||
              o(t, "limupper") ||
              (o(t, "function") && a(t, "limit function")) ||
              ((o(t, "overscore") || o(t, "underscore")) && e(t.childNodes[0]))
            );
          }),
          (t.isSimpleFunctionHead = function (e) {
            return "identifier" === e.type || "latinletter" === e.role || "greekletter" === e.role || "otherletter" === e.role;
          }),
          (t.singlePunctAtPosition = function (e, t, n) {
            return 1 === t.length && ("punctuation" === e[n].type || "punctuation" === e[n].embellished) && e[n] === t[0];
          }),
          (t.isSimpleFunction = function (e) {
            return o(e, "identifier") && a(e, "simple function");
          }),
          (t.isLeftBrace = g),
          (t.isRightBrace = S),
          (t.isSetNode = function (e) {
            return g(e.contentNodes[0]) && S(e.contentNodes[1]);
          }),
          (t.illegalSingleton_ = ["punctuation", "punctuated", "relseq", "multirel", "table", "multiline", "cases", "inference"]),
          (t.scriptedElement_ = ["limupper", "limlower", "limboth", "subscript", "superscript", "underscore", "overscore", "tensor"]),
          (t.isSingletonSetContent = function e(n) {
            const r = n.type;
            return (
              -1 === t.illegalSingleton_.indexOf(r) &&
              ("infixop" !== r || "implicit" === n.role) &&
              ("fenced" === r ? "leftright" !== n.role || e(n.childNodes[0]) : -1 === t.scriptedElement_.indexOf(r) || e(n.childNodes[0]))
            );
          }),
          (t.isNumber = b),
          (t.isUnitCounter = function (e) {
            return b(e) || "vulgar" === e.role || "mixed" === e.role;
          }),
          (t.isPureUnit = function (e) {
            const t = e.childNodes;
            return "unit" === e.role && (!t.length || "unit" === t[0].role);
          }),
          (t.isImplicit = function (e) {
            return (
              "implicit" === e.role ||
              ("unit" === e.role && !!e.contentNodes.length && e.contentNodes[0].textContent === r.invisibleTimes())
            );
          }),
          (t.isImplicitOp = function (e) {
            return "infixop" === e.type && "implicit" === e.role;
          }),
          (t.isNeutralFence = N),
          (t.compareNeutralFences = function (e, t) {
            return N(e) && N(t) && (0, i.getEmbellishedInner)(e).textContent === (0, i.getEmbellishedInner)(t).textContent;
          }),
          (t.elligibleLeftNeutral = function (e) {
            return (
              !!N(e) &&
              (!e.embellished ||
                ("superscript" !== e.type &&
                  "subscript" !== e.type &&
                  ("tensor" !== e.type || ("empty" === e.childNodes[3].type && "empty" === e.childNodes[4].type))))
            );
          }),
          (t.elligibleRightNeutral = function (e) {
            return (
              !!N(e) && (!e.embellished || "tensor" !== e.type || ("empty" === e.childNodes[1].type && "empty" === e.childNodes[2].type))
            );
          }),
          (t.isMembership = function (e) {
            return ["element", "nonelement", "reelement", "renonelement"].includes(e.role);
          });
      },
      7793: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = n(6671),
          i = n(4020),
          o = n(2721),
          s = n(4790),
          a = n(6161),
          c = n(8901);
        class l {
          constructor() {
            (this.funcAppls = {}), (this.factory_ = new s.SemanticNodeFactory()), o.updateFactory(this.factory_);
          }
          static getInstance() {
            return (l.instance = l.instance || new l()), l.instance;
          }
          static tableToMultiline(e) {
            if (a.tableIsMultiline(e)) {
              e.type = "multiline";
              for (let t, n = 0; (t = e.childNodes[n]); n++) l.rowToLine_(t, "multiline");
              1 === e.childNodes.length &&
                !a.lineIsLabelled(e.childNodes[0]) &&
                a.isFencedElement(e.childNodes[0].childNodes[0]) &&
                l.tableToMatrixOrVector_(l.rewriteFencedLine_(e)),
                l.binomialForm_(e),
                l.classifyMultiline(e);
            } else l.classifyTable(e);
          }
          static number(e) {
            ("unknown" !== e.type && "identifier" !== e.type) || (e.type = "number"), l.numberRole_(e), l.exprFont_(e);
          }
          static classifyMultiline(e) {
            let t = 0;
            const n = e.childNodes.length;
            let r;
            for (; t < n && (!(r = e.childNodes[t]) || !r.childNodes.length); ) t++;
            if (t >= n) return;
            const i = r.childNodes[0].role;
            "unknown" !== i &&
              e.childNodes.every(function (e) {
                const t = e.childNodes[0];
                return !t || (t.role === i && (a.isType(t, "relation") || a.isType(t, "relseq")));
              }) &&
              (e.role = i);
          }
          static classifyTable(e) {
            const t = l.computeColumns_(e);
            l.classifyByColumns_(e, t, "equality") ||
              l.classifyByColumns_(e, t, "inequality", ["equality"]) ||
              l.classifyByColumns_(e, t, "arrow") ||
              l.detectCaleyTable(e);
          }
          static detectCaleyTable(e) {
            if (!e.mathmlTree) return !1;
            const t = e.mathmlTree,
              n = t.getAttribute("columnlines"),
              r = t.getAttribute("rowlines");
            return !(!n || !r) && !(!l.cayleySpacing(n) || !l.cayleySpacing(r)) && ((e.role = "cayley"), !0);
          }
          static cayleySpacing(e) {
            const t = e.split(" ");
            return ("solid" === t[0] || "dashed" === t[0]) && t.slice(1).every((e) => "none" === e);
          }
          static proof(e, t, n) {
            const r = l.separateSemantics(t);
            return l.getInstance().proof(e, r, n);
          }
          static findSemantics(e, t, n) {
            const r = null == n ? null : n,
              i = l.getSemantics(e);
            return !!i && !!i[t] && (null == r || i[t] === r);
          }
          static getSemantics(e) {
            const t = e.getAttribute("semantics");
            return t ? l.separateSemantics(t) : null;
          }
          static removePrefix(e) {
            const [, ...t] = e.split("_");
            return t.join("_");
          }
          static separateSemantics(e) {
            const t = {};
            return (
              e.split(";").forEach(function (e) {
                const [n, r] = e.split(":");
                t[l.removePrefix(n)] = r;
              }),
              t
            );
          }
          static matchSpaces_(e, t) {
            for (let n, r = 0; (n = t[r]); r++) {
              const t = e[r].mathmlTree,
                i = e[r + 1].mathmlTree;
              if (!t || !i) continue;
              const o = t.nextSibling;
              if (!o || o === i) continue;
              const s = l.getSpacer_(o);
              s && (n.mathml.push(s), (n.mathmlTree = s), (n.role = "space"));
            }
          }
          static getSpacer_(e) {
            if ("MSPACE" === r.tagName(e)) return e;
            for (; c.hasEmptyTag(e) && 1 === e.childNodes.length; ) if (((e = e.childNodes[0]), "MSPACE" === r.tagName(e))) return e;
            return null;
          }
          static fenceToPunct_(e) {
            const t = l.FENCE_TO_PUNCT_[e.role];
            if (t) {
              for (; e.embellished; )
                (e.embellished = "punctuation"), a.isRole(e, "subsup") || a.isRole(e, "underover") || (e.role = t), (e = e.childNodes[0]);
              (e.type = "punctuation"), (e.role = t);
            }
          }
          static classifyFunction_(e, t) {
            if ("appl" === e.type || "bigop" === e.type || "integral" === e.type) return "";
            if (t[0] && t[0].textContent === i.functionApplication()) {
              l.getInstance().funcAppls[e.id] = t.shift();
              let n = "simple function";
              return (
                o.run("simple2prefix", e),
                ("prefix function" !== e.role && "limit function" !== e.role) || (n = e.role),
                l.propagateFunctionRole_(e, n),
                "prefix"
              );
            }
            const n = l.CLASSIFY_FUNCTION_[e.role];
            return n || (a.isSimpleFunctionHead(e) ? "simple" : "");
          }
          static propagateFunctionRole_(e, t) {
            if (e) {
              if ("infixop" === e.type) return;
              a.isRole(e, "subsup") || a.isRole(e, "underover") || (e.role = t), l.propagateFunctionRole_(e.childNodes[0], t);
            }
          }
          static getFunctionOp_(e, t) {
            if (t(e)) return e;
            for (let n, r = 0; (n = e.childNodes[r]); r++) {
              const e = l.getFunctionOp_(n, t);
              if (e) return e;
            }
            return null;
          }
          static tableToMatrixOrVector_(e) {
            const t = e.childNodes[0];
            a.isType(t, "multiline") ? l.tableToVector_(e) : l.tableToMatrix_(e), e.contentNodes.forEach(t.appendContentNode.bind(t));
            for (let e, n = 0; (e = t.childNodes[n]); n++) l.assignRoleToRow_(e, l.getComponentRoles_(t));
            return (t.parent = null), t;
          }
          static tableToVector_(e) {
            const t = e.childNodes[0];
            (t.type = "vector"), 1 !== t.childNodes.length ? l.binomialForm_(t) : l.tableToSquare_(e);
          }
          static binomialForm_(e) {
            a.isBinomial(e) && ((e.role = "binomial"), (e.childNodes[0].role = "binomial"), (e.childNodes[1].role = "binomial"));
          }
          static tableToMatrix_(e) {
            const t = e.childNodes[0];
            (t.type = "matrix"),
              t.childNodes &&
              t.childNodes.length > 0 &&
              t.childNodes[0].childNodes &&
              t.childNodes.length === t.childNodes[0].childNodes.length
                ? l.tableToSquare_(e)
                : t.childNodes && 1 === t.childNodes.length && (t.role = "rowvector");
          }
          static tableToSquare_(e) {
            const t = e.childNodes[0];
            a.isNeutralFence(e) ? (t.role = "determinant") : (t.role = "squarematrix");
          }
          static getComponentRoles_(e) {
            const t = e.role;
            return t && "unknown" !== t ? t : e.type.toLowerCase() || "unknown";
          }
          static tableToCases_(e, t) {
            for (let t, n = 0; (t = e.childNodes[n]); n++) l.assignRoleToRow_(t, "cases");
            return (e.type = "cases"), e.appendContentNode(t), a.tableIsMultiline(e) && l.binomialForm_(e), e;
          }
          static rewriteFencedLine_(e) {
            const t = e.childNodes[0],
              n = e.childNodes[0].childNodes[0],
              r = e.childNodes[0].childNodes[0].childNodes[0];
            return (n.parent = e.parent), (e.parent = n), (r.parent = t), (n.childNodes = [e]), (t.childNodes = [r]), n;
          }
          static rowToLine_(e, t) {
            const n = t || "unknown";
            a.isType(e, "row") &&
              ((e.type = "line"),
              (e.role = n),
              1 === e.childNodes.length &&
                a.isType(e.childNodes[0], "cell") &&
                ((e.childNodes = e.childNodes[0].childNodes),
                e.childNodes.forEach(function (t) {
                  t.parent = e;
                })));
          }
          static assignRoleToRow_(e, t) {
            a.isType(e, "line")
              ? (e.role = t)
              : a.isType(e, "row") &&
                ((e.role = t),
                e.childNodes.forEach(function (e) {
                  a.isType(e, "cell") && (e.role = t);
                }));
          }
          static nextSeparatorFunction_(e) {
            let t;
            if (e) {
              if (e.match(/^\s+$/)) return null;
              t = e
                .replace(/\s/g, "")
                .split("")
                .filter(function (e) {
                  return e;
                });
            } else t = [","];
            return function () {
              return t.length > 1 ? t.shift() : t[0];
            };
          }
          static numberRole_(e) {
            if ("unknown" !== e.role) return;
            const t = [...e.textContent].filter((e) => e.match(/[^\s]/)),
              n = t.map(i.lookupMeaning);
            if (
              n.every(function (e) {
                return ("number" === e.type && "integer" === e.role) || ("punctuation" === e.type && "comma" === e.role);
              })
            )
              return (e.role = "integer"), void ("0" === t[0] && e.addAnnotation("general", "basenumber"));
            n.every(function (e) {
              return ("number" === e.type && "integer" === e.role) || "punctuation" === e.type;
            })
              ? (e.role = "float")
              : (e.role = "othernumber");
          }
          static exprFont_(e) {
            if ("unknown" !== e.font) return;
            const t = [...e.textContent].map(i.lookupMeaning).reduce(function (e, t) {
              return e && t.font && "unknown" !== t.font && t.font !== e ? ("unknown" === e ? t.font : null) : e;
            }, "unknown");
            t && (e.font = t);
          }
          static purgeFences_(e) {
            const t = e.rel,
              n = e.comp,
              r = [],
              i = [];
            for (; t.length > 0; ) {
              const e = t.shift();
              let o = n.shift();
              a.isElligibleEmbellishedFence(e)
                ? (r.push(e), i.push(o))
                : (l.fenceToPunct_(e), o.push(e), (o = o.concat(n.shift())), n.unshift(o));
            }
            return i.push(n.shift()), { rel: r, comp: i };
          }
          static rewriteFencedNode_(e) {
            const t = e.contentNodes[0],
              n = e.contentNodes[1];
            let r = l.rewriteFence_(e, t);
            return (
              (e.contentNodes[0] = r.fence),
              (r = l.rewriteFence_(r.node, n)),
              (e.contentNodes[1] = r.fence),
              (e.contentNodes[0].parent = e),
              (e.contentNodes[1].parent = e),
              (r.node.parent = null),
              r.node
            );
          }
          static rewriteFence_(e, t) {
            if (!t.embellished) return { node: e, fence: t };
            const n = t.childNodes[0],
              r = l.rewriteFence_(e, n);
            return a.isType(t, "superscript") || a.isType(t, "subscript") || a.isType(t, "tensor")
              ? (a.isRole(t, "subsup") || (t.role = e.role),
                n !== r.node && (t.replaceChild(n, r.node), (n.parent = e)),
                l.propagateFencePointer_(t, n),
                { node: t, fence: r.fence })
              : (t.replaceChild(n, r.fence),
                t.mathmlTree && -1 === t.mathml.indexOf(t.mathmlTree) && t.mathml.push(t.mathmlTree),
                { node: r.node, fence: t });
          }
          static propagateFencePointer_(e, t) {
            (e.fencePointer = t.fencePointer || t.id.toString()), (e.embellished = null);
          }
          static classifyByColumns_(e, t, n, r) {
            return (
              !!(
                (3 === t.length && l.testColumns_(t, 1, (e) => l.isPureRelation_(e, n))) ||
                (2 === t.length &&
                  (l.testColumns_(t, 1, (e) => l.isEndRelation_(e, n) || l.isPureRelation_(e, n)) ||
                    l.testColumns_(t, 0, (e) => l.isEndRelation_(e, n, !0) || l.isPureRelation_(e, n))))
              ) && ((e.role = n), !0)
            );
          }
          static isEndRelation_(e, t, n) {
            const r = n ? e.childNodes.length - 1 : 0;
            return a.isType(e, "relseq") && a.isRole(e, t) && a.isType(e.childNodes[r], "empty");
          }
          static isPureRelation_(e, t) {
            return a.isType(e, "relation") && a.isRole(e, t);
          }
          static computeColumns_(e) {
            const t = [];
            for (let n, r = 0; (n = e.childNodes[r]); r++)
              for (let e, r = 0; (e = n.childNodes[r]); r++) {
                t[r] ? t[r].push(e) : (t[r] = [e]);
              }
            return t;
          }
          static testColumns_(e, t, n) {
            const r = e[t];
            return (
              !!r &&
              r.some(function (e) {
                return e.childNodes.length && n(e.childNodes[0]);
              }) &&
              r.every(function (e) {
                return !e.childNodes.length || n(e.childNodes[0]);
              })
            );
          }
          setNodeFactory(e) {
            (l.getInstance().factory_ = e), o.updateFactory(l.getInstance().factory_);
          }
          getNodeFactory() {
            return l.getInstance().factory_;
          }
          identifierNode(e, t, n) {
            if ("MathML-Unit" === n) (e.type = "identifier"), (e.role = "unit");
            else if (
              !t &&
              1 === e.textContent.length &&
              ("integer" === e.role || "latinletter" === e.role || "greekletter" === e.role) &&
              "normal" === e.font
            )
              return (e.font = "italic"), o.run("simpleNamedFunction", e);
            return "unknown" === e.type && (e.type = "identifier"), l.exprFont_(e), o.run("simpleNamedFunction", e);
          }
          implicitNode(e) {
            if (((e = l.getInstance().getMixedNumbers_(e)), 1 === (e = l.getInstance().combineUnits_(e)).length)) return e[0];
            const t = l.getInstance().implicitNode_(e);
            return o.run("combine_juxtaposition", t);
          }
          text(e, t) {
            return (
              l.exprFont_(e),
              (e.type = "text"),
              "MS" === t ? ((e.role = "string"), e) : "MSPACE" === t || e.textContent.match(/^\s*$/) ? ((e.role = "space"), e) : e
            );
          }
          row(e) {
            return 0 ===
              (e = e.filter(function (e) {
                return !a.isType(e, "empty");
              })).length
              ? l.getInstance().factory_.makeEmptyNode()
              : ((e = l.getInstance().getFencesInRow_(e)),
                (e = l.getInstance().tablesInRow(e)),
                (e = l.getInstance().getPunctuationInRow_(e)),
                (e = l.getInstance().getTextInRow_(e)),
                (e = l.getInstance().getFunctionsInRow_(e)),
                l.getInstance().relationsInRow_(e));
          }
          limitNode(e, t) {
            if (!t.length) return l.getInstance().factory_.makeEmptyNode();
            let n,
              r = t[0],
              i = "unknown";
            if (!t[1]) return r;
            if (a.isLimitBase(r)) {
              n = l.MML_TO_LIMIT_[e];
              const o = n.length;
              if (
                ((i = n.type),
                (t = t.slice(0, n.length + 1)),
                (1 === o && a.isAccent(t[1])) || (2 === o && a.isAccent(t[1]) && a.isAccent(t[2])))
              )
                return (n = l.MML_TO_BOUNDS_[e]), l.getInstance().accentNode_(r, t, n.type, n.length, n.accent);
              if (2 === o) {
                if (a.isAccent(t[1]))
                  return (
                    (r = l.getInstance().accentNode_(r, [r, t[1]], { MSUBSUP: "subscript", MUNDEROVER: "underscore" }[e], 1, !0)),
                    t[2] ? l.getInstance().makeLimitNode_(r, [r, t[2]], null, "limupper") : r
                  );
                if (t[2] && a.isAccent(t[2]))
                  return (
                    (r = l.getInstance().accentNode_(r, [r, t[2]], { MSUBSUP: "superscript", MUNDEROVER: "overscore" }[e], 1, !0)),
                    l.getInstance().makeLimitNode_(r, [r, t[1]], null, "limlower")
                  );
                t[o] || (i = "limlower");
              }
              return l.getInstance().makeLimitNode_(r, t, null, i);
            }
            return (n = l.MML_TO_BOUNDS_[e]), l.getInstance().accentNode_(r, t, n.type, n.length, n.accent);
          }
          tablesInRow(e) {
            let t = c.partitionNodes(e, a.tableIsMatrixOrVector),
              n = [];
            for (let e, r = 0; (e = t.rel[r]); r++) (n = n.concat(t.comp.shift())), n.push(l.tableToMatrixOrVector_(e));
            (n = n.concat(t.comp.shift())), (t = c.partitionNodes(n, a.isTableOrMultiline)), (n = []);
            for (let e, r = 0; (e = t.rel[r]); r++) {
              const r = t.comp.shift();
              a.tableIsCases(e, r) && l.tableToCases_(e, r.pop()), (n = n.concat(r)), n.push(e);
            }
            return n.concat(t.comp.shift());
          }
          mfenced(e, t, n, r) {
            if (n && r.length > 0) {
              const e = l.nextSeparatorFunction_(n),
                t = [r.shift()];
              r.forEach((n) => {
                t.push(l.getInstance().factory_.makeContentNode(e())), t.push(n);
              }),
                (r = t);
            }
            return e && t
              ? l
                  .getInstance()
                  .horizontalFencedNode_(l.getInstance().factory_.makeContentNode(e), l.getInstance().factory_.makeContentNode(t), r)
              : (e && r.unshift(l.getInstance().factory_.makeContentNode(e)),
                t && r.push(l.getInstance().factory_.makeContentNode(t)),
                l.getInstance().row(r));
          }
          fractionLikeNode(e, t, n, r) {
            let i;
            if (!r && c.isZeroLength(n)) {
              const n = l.getInstance().factory_.makeBranchNode("line", [e], []),
                r = l.getInstance().factory_.makeBranchNode("line", [t], []);
              return (i = l.getInstance().factory_.makeBranchNode("multiline", [n, r], [])), l.binomialForm_(i), l.classifyMultiline(i), i;
            }
            return (i = l.getInstance().fractionNode_(e, t)), r && i.addAnnotation("general", "bevelled"), i;
          }
          tensor(e, t, n, r, i) {
            const o = l
              .getInstance()
              .factory_.makeBranchNode(
                "tensor",
                [
                  e,
                  l.getInstance().scriptNode_(t, "leftsub"),
                  l.getInstance().scriptNode_(n, "leftsuper"),
                  l.getInstance().scriptNode_(r, "rightsub"),
                  l.getInstance().scriptNode_(i, "rightsuper")
                ],
                []
              );
            return (o.role = e.role), (o.embellished = a.isEmbellished(e)), o;
          }
          pseudoTensor(e, t, n) {
            const r = (e) => !a.isType(e, "empty"),
              i = t.filter(r).length,
              o = n.filter(r).length;
            if (!i && !o) return e;
            const s = i ? (o ? "MSUBSUP" : "MSUB") : "MSUP",
              c = [e];
            return (
              i && c.push(l.getInstance().scriptNode_(t, "rightsub", !0)),
              o && c.push(l.getInstance().scriptNode_(n, "rightsuper", !0)),
              l.getInstance().limitNode(s, c)
            );
          }
          font(e) {
            const t = l.MATHJAX_FONTS[e];
            return t || e;
          }
          proof(e, t, n) {
            if ((t.inference || t.axiom || console.log("Noise"), t.axiom)) {
              const t = l.getInstance().cleanInference(e.childNodes),
                r = t.length ? l.getInstance().factory_.makeBranchNode("inference", n(t), []) : l.getInstance().factory_.makeEmptyNode();
              return (r.role = "axiom"), (r.mathmlTree = e), r;
            }
            const r = l.getInstance().inference(e, t, n);
            return t.proof && ((r.role = "proof"), (r.childNodes[0].role = "final")), r;
          }
          inference(e, t, n) {
            if (t.inferenceRule) {
              const t = l.getInstance().getFormulas(e, [], n);
              return l.getInstance().factory_.makeBranchNode("inference", [t.conclusion, t.premises], []);
            }
            const i = t.labelledRule,
              o = r.toArray(e.childNodes),
              s = [];
            ("left" !== i && "both" !== i) || s.push(l.getInstance().getLabel(e, o, n, "left")),
              ("right" !== i && "both" !== i) || s.push(l.getInstance().getLabel(e, o, n, "right"));
            const a = l.getInstance().getFormulas(e, o, n),
              c = l.getInstance().factory_.makeBranchNode("inference", [a.conclusion, a.premises], s);
            return (c.mathmlTree = e), c;
          }
          getLabel(e, t, n, i) {
            const o = l.getInstance().findNestedRow(t, "prooflabel", i),
              s = l.getInstance().factory_.makeBranchNode("rulelabel", n(r.toArray(o.childNodes)), []);
            return (s.role = i), (s.mathmlTree = o), s;
          }
          getFormulas(e, t, n) {
            const i = t.length ? l.getInstance().findNestedRow(t, "inferenceRule") : e,
              o = "up" === l.getSemantics(i).inferenceRule,
              s = o ? i.childNodes[1] : i.childNodes[0],
              a = o ? i.childNodes[0] : i.childNodes[1],
              c = s.childNodes[0].childNodes[0],
              u = r.toArray(c.childNodes[0].childNodes),
              d = [];
            let h = 1;
            for (const e of u) h % 2 && d.push(e.childNodes[0]), h++;
            const p = n(d),
              f = n(r.toArray(a.childNodes[0].childNodes))[0],
              m = l.getInstance().factory_.makeBranchNode("premises", p, []);
            m.mathmlTree = c;
            const g = l.getInstance().factory_.makeBranchNode("conclusion", [f], []);
            return (g.mathmlTree = a.childNodes[0].childNodes[0]), { conclusion: g, premises: m };
          }
          findNestedRow(e, t, n) {
            return l.getInstance().findNestedRow_(e, t, 0, n);
          }
          cleanInference(e) {
            return r.toArray(e).filter(function (e) {
              return "MSPACE" !== r.tagName(e);
            });
          }
          operatorNode(e) {
            return "unknown" === e.type && (e.type = "operator"), o.run("multioperator", e);
          }
          implicitNode_(e) {
            const t = l.getInstance().factory_.makeMultipleContentNodes(e.length - 1, i.invisibleTimes());
            l.matchSpaces_(e, t);
            const n = l.getInstance().infixNode_(e, t[0]);
            return (
              (n.role = "implicit"),
              t.forEach(function (e) {
                e.parent = n;
              }),
              (n.contentNodes = t),
              n
            );
          }
          infixNode_(e, t) {
            const n = l.getInstance().factory_.makeBranchNode("infixop", e, [t], c.getEmbellishedInner(t).textContent);
            return (n.role = t.role), o.run("propagateSimpleFunction", n);
          }
          explicitMixed_(e) {
            const t = c.partitionNodes(e, function (e) {
              return e.textContent === i.invisiblePlus();
            });
            if (!t.rel.length) return e;
            let n = [];
            for (let e, r = 0; (e = t.rel[r]); r++) {
              const i = t.comp[r],
                o = t.comp[r + 1],
                s = i.length - 1;
              if (i[s] && o[0] && a.isType(i[s], "number") && !a.isRole(i[s], "mixed") && a.isType(o[0], "fraction")) {
                const e = l.getInstance().factory_.makeBranchNode("number", [i[s], o[0]], []);
                (e.role = "mixed"), (n = n.concat(i.slice(0, s))), n.push(e), o.shift();
              } else (n = n.concat(i)), n.push(e);
            }
            return n.concat(t.comp[t.comp.length - 1]);
          }
          concatNode_(e, t, n) {
            if (0 === t.length) return e;
            const r = t
                .map(function (e) {
                  return c.getEmbellishedInner(e).textContent;
                })
                .join(" "),
              i = l.getInstance().factory_.makeBranchNode(n, [e], t, r);
            return t.length > 1 && (i.role = "multiop"), i;
          }
          prefixNode_(e, t) {
            const n = c.partitionNodes(t, (e) => a.isRole(e, "subtraction"));
            let r = l.getInstance().concatNode_(e, n.comp.pop(), "prefixop");
            for (
              1 === r.contentNodes.length &&
              "addition" === r.contentNodes[0].role &&
              "+" === r.contentNodes[0].textContent &&
              (r.role = "positive");
              n.rel.length > 0;

            )
              (r = l.getInstance().concatNode_(r, [n.rel.pop()], "prefixop")),
                (r.role = "negative"),
                (r = l.getInstance().concatNode_(r, n.comp.pop(), "prefixop"));
            return r;
          }
          postfixNode_(e, t) {
            return t.length ? l.getInstance().concatNode_(e, t, "postfixop") : e;
          }
          combineUnits_(e) {
            const t = c.partitionNodes(e, function (e) {
              return !a.isRole(e, "unit");
            });
            if (e.length === t.rel.length) return t.rel;
            const n = [];
            let r, i;
            do {
              const e = t.comp.shift();
              r = t.rel.shift();
              let o = null;
              (i = n.pop()),
                i && (e.length && a.isUnitCounter(i) ? e.unshift(i) : n.push(i)),
                1 === e.length && (o = e.pop()),
                e.length > 1 && ((o = l.getInstance().implicitNode_(e)), (o.role = "unit")),
                o && n.push(o),
                r && n.push(r);
            } while (r);
            return n;
          }
          getMixedNumbers_(e) {
            const t = c.partitionNodes(e, function (e) {
              return a.isType(e, "fraction") && a.isRole(e, "vulgar");
            });
            if (!t.rel.length) return e;
            let n = [];
            for (let e, r = 0; (e = t.rel[r]); r++) {
              const i = t.comp[r],
                o = i.length - 1;
              if (i[o] && a.isType(i[o], "number") && (a.isRole(i[o], "integer") || a.isRole(i[o], "float"))) {
                const t = l.getInstance().factory_.makeBranchNode("number", [i[o], e], []);
                (t.role = "mixed"), (n = n.concat(i.slice(0, o))), n.push(t);
              } else (n = n.concat(i)), n.push(e);
            }
            return n.concat(t.comp[t.comp.length - 1]);
          }
          getTextInRow_(e) {
            if (e.length <= 1) return e;
            const t = c.partitionNodes(e, (e) => a.isType(e, "text"));
            if (0 === t.rel.length) return e;
            const n = [];
            let r = t.comp[0];
            r.length > 0 && n.push(l.getInstance().row(r));
            for (let e, i = 0; (e = t.rel[i]); i++) n.push(e), (r = t.comp[i + 1]), r.length > 0 && n.push(l.getInstance().row(r));
            return [l.getInstance().dummyNode_(n)];
          }
          relationsInRow_(e) {
            const t = c.partitionNodes(e, a.isRelation),
              n = t.rel[0];
            if (!n) return l.getInstance().operationsInRow_(e);
            if (1 === e.length) return e[0];
            const r = t.comp.map(l.getInstance().operationsInRow_);
            let i;
            return t.rel.some(function (e) {
              return !e.equals(n);
            })
              ? ((i = l.getInstance().factory_.makeBranchNode("multirel", r, t.rel)),
                t.rel.every(function (e) {
                  return e.role === n.role;
                }) && (i.role = n.role),
                i)
              : ((i = l.getInstance().factory_.makeBranchNode("relseq", r, t.rel, c.getEmbellishedInner(n).textContent)),
                (i.role = n.role),
                i);
          }
          operationsInRow_(e) {
            if (0 === e.length) return l.getInstance().factory_.makeEmptyNode();
            if (1 === (e = l.getInstance().explicitMixed_(e)).length) return e[0];
            const t = [];
            for (; e.length > 0 && a.isOperator(e[0]); ) t.push(e.shift());
            if (0 === e.length) return l.getInstance().prefixNode_(t.pop(), t);
            if (1 === e.length) return l.getInstance().prefixNode_(e[0], t);
            e = o.run("convert_juxtaposition", e);
            const n = c.sliceNodes(e, a.isOperator),
              r = l.getInstance().prefixNode_(l.getInstance().implicitNode(n.head), t);
            return n.div ? l.getInstance().operationsTree_(n.tail, r, n.div) : r;
          }
          operationsTree_(e, t, n, r) {
            const i = r || [];
            if (0 === e.length) {
              if ((i.unshift(n), "infixop" === t.type)) {
                const e = l.getInstance().postfixNode_(t.childNodes.pop(), i);
                return t.appendChild(e), t;
              }
              return l.getInstance().postfixNode_(t, i);
            }
            const o = c.sliceNodes(e, a.isOperator);
            if (0 === o.head.length) return i.push(o.div), l.getInstance().operationsTree_(o.tail, t, n, i);
            const s = l.getInstance().prefixNode_(l.getInstance().implicitNode(o.head), i),
              u = l.getInstance().appendOperand_(t, n, s);
            return o.div ? l.getInstance().operationsTree_(o.tail, u, o.div, []) : u;
          }
          appendOperand_(e, t, n) {
            if ("infixop" !== e.type) return l.getInstance().infixNode_([e, n], t);
            const r = l.getInstance().appendDivisionOp_(e, t, n);
            return (
              r ||
              (l.getInstance().appendExistingOperator_(e, t, n)
                ? e
                : "multiplication" === t.role
                ? l.getInstance().appendMultiplicativeOp_(e, t, n)
                : l.getInstance().appendAdditiveOp_(e, t, n))
            );
          }
          appendDivisionOp_(e, t, n) {
            return "division" === t.role
              ? a.isImplicit(e)
                ? l.getInstance().infixNode_([e, n], t)
                : l.getInstance().appendLastOperand_(e, t, n)
              : "division" === e.role
              ? l.getInstance().infixNode_([e, n], t)
              : null;
          }
          appendLastOperand_(e, t, n) {
            let r = e,
              i = e.childNodes[e.childNodes.length - 1];
            for (; i && "infixop" === i.type && !a.isImplicit(i); ) (r = i), (i = r.childNodes[e.childNodes.length - 1]);
            const o = l.getInstance().infixNode_([r.childNodes.pop(), n], t);
            return r.appendChild(o), e;
          }
          appendMultiplicativeOp_(e, t, n) {
            if (a.isImplicit(e)) return l.getInstance().infixNode_([e, n], t);
            let r = e,
              i = e.childNodes[e.childNodes.length - 1];
            for (; i && "infixop" === i.type && !a.isImplicit(i); ) (r = i), (i = r.childNodes[e.childNodes.length - 1]);
            const o = l.getInstance().infixNode_([r.childNodes.pop(), n], t);
            return r.appendChild(o), e;
          }
          appendAdditiveOp_(e, t, n) {
            return l.getInstance().infixNode_([e, n], t);
          }
          appendExistingOperator_(e, t, n) {
            return (
              !(!e || "infixop" !== e.type || a.isImplicit(e)) &&
              (e.contentNodes[0].equals(t)
                ? (e.appendContentNode(t), e.appendChild(n), !0)
                : l.getInstance().appendExistingOperator_(e.childNodes[e.childNodes.length - 1], t, n))
            );
          }
          getFencesInRow_(e) {
            let t = c.partitionNodes(e, a.isFence);
            t = l.purgeFences_(t);
            const n = t.comp.shift();
            return l.getInstance().fences_(t.rel, t.comp, [], [n]);
          }
          fences_(e, t, n, r) {
            if (0 === e.length && 0 === n.length) return r[0];
            const i = (e) => a.isRole(e, "open");
            if (0 === e.length) {
              const e = r.shift();
              for (; n.length > 0; ) {
                if (i(n[0])) {
                  const t = n.shift();
                  l.fenceToPunct_(t), e.push(t);
                } else {
                  const t = c.sliceNodes(n, i),
                    o = t.head.length - 1,
                    s = l.getInstance().neutralFences_(t.head, r.slice(0, o));
                  (r = r.slice(o)), e.push(...s), t.div && t.tail.unshift(t.div), (n = t.tail);
                }
                e.push(...r.shift());
              }
              return e;
            }
            const o = n[n.length - 1],
              s = e[0].role;
            if ("open" === s || (a.isNeutralFence(e[0]) && (!o || !a.compareNeutralFences(e[0], o)))) {
              n.push(e.shift());
              const i = t.shift();
              return i && r.push(i), l.getInstance().fences_(e, t, n, r);
            }
            if (o && "close" === s && "open" === o.role) {
              const i = l.getInstance().horizontalFencedNode_(n.pop(), e.shift(), r.pop());
              return r.push(r.pop().concat([i], t.shift())), l.getInstance().fences_(e, t, n, r);
            }
            if (o && a.compareNeutralFences(e[0], o)) {
              if (!a.elligibleLeftNeutral(o) || !a.elligibleRightNeutral(e[0])) {
                n.push(e.shift());
                const i = t.shift();
                return i && r.push(i), l.getInstance().fences_(e, t, n, r);
              }
              const i = l.getInstance().horizontalFencedNode_(n.pop(), e.shift(), r.pop());
              return r.push(r.pop().concat([i], t.shift())), l.getInstance().fences_(e, t, n, r);
            }
            if (o && "close" === s && a.isNeutralFence(o) && n.some(i)) {
              const o = c.sliceNodes(n, i, !0),
                s = r.pop(),
                a = r.length - o.tail.length + 1,
                u = l.getInstance().neutralFences_(o.tail, r.slice(a));
              r = r.slice(0, a);
              const d = l.getInstance().horizontalFencedNode_(o.div, e.shift(), r.pop().concat(u, s));
              return r.push(r.pop().concat([d], t.shift())), l.getInstance().fences_(e, t, o.head, r);
            }
            const u = e.shift();
            return l.fenceToPunct_(u), r.push(r.pop().concat([u], t.shift())), l.getInstance().fences_(e, t, n, r);
          }
          neutralFences_(e, t) {
            if (0 === e.length) return e;
            if (1 === e.length) return l.fenceToPunct_(e[0]), e;
            const n = e.shift();
            if (!a.elligibleLeftNeutral(n)) {
              l.fenceToPunct_(n);
              const r = t.shift();
              return r.unshift(n), r.concat(l.getInstance().neutralFences_(e, t));
            }
            const r = c.sliceNodes(e, function (e) {
              return a.compareNeutralFences(e, n);
            });
            if (!r.div) {
              l.fenceToPunct_(n);
              const r = t.shift();
              return r.unshift(n), r.concat(l.getInstance().neutralFences_(e, t));
            }
            if (!a.elligibleRightNeutral(r.div)) return l.fenceToPunct_(r.div), e.unshift(n), l.getInstance().neutralFences_(e, t);
            const i = l.getInstance().combineFencedContent_(n, r.div, r.head, t);
            if (r.tail.length > 0) {
              const e = i.shift(),
                t = l.getInstance().neutralFences_(r.tail, i);
              return e.concat(t);
            }
            return i[0];
          }
          combineFencedContent_(e, t, n, r) {
            if (0 === n.length) {
              const n = l.getInstance().horizontalFencedNode_(e, t, r.shift());
              return r.length > 0 ? r[0].unshift(n) : (r = [[n]]), r;
            }
            const i = r.shift(),
              o = n.length - 1,
              s = r.slice(0, o),
              a = (r = r.slice(o)).shift(),
              c = l.getInstance().neutralFences_(n, s);
            i.push(...c), i.push(...a);
            const u = l.getInstance().horizontalFencedNode_(e, t, i);
            return r.length > 0 ? r[0].unshift(u) : (r = [[u]]), r;
          }
          horizontalFencedNode_(e, t, n) {
            const r = l.getInstance().row(n);
            let i = l.getInstance().factory_.makeBranchNode("fenced", [r], [e, t]);
            return (
              "open" === e.role
                ? (l.getInstance().classifyHorizontalFence_(i), (i = o.run("propagateComposedFunction", i)))
                : (i.role = e.role),
              (i = o.run("detect_cycle", i)),
              l.rewriteFencedNode_(i)
            );
          }
          classifyHorizontalFence_(e) {
            e.role = "leftright";
            const t = e.childNodes;
            if (!a.isSetNode(e) || t.length > 1) return;
            if (0 === t.length || "empty" === t[0].type) return void (e.role = "set empty");
            const n = t[0].type;
            if (1 === t.length && a.isSingletonSetContent(t[0])) return void (e.role = "set singleton");
            const r = t[0].role;
            if ("punctuated" === n && "sequence" === r) {
              if ("comma" !== t[0].contentNodes[0].role)
                return 1 !== t[0].contentNodes.length || ("vbar" !== t[0].contentNodes[0].role && "colon" !== t[0].contentNodes[0].role)
                  ? void 0
                  : ((e.role = "set extended"), void l.getInstance().setExtension_(e));
              e.role = "set collection";
            }
          }
          setExtension_(e) {
            const t = e.childNodes[0].childNodes[0];
            t &&
              "infixop" === t.type &&
              1 === t.contentNodes.length &&
              a.isMembership(t.contentNodes[0]) &&
              (t.addAnnotation("set", "intensional"), t.contentNodes[0].addAnnotation("set", "intensional"));
          }
          getPunctuationInRow_(e) {
            if (e.length <= 1) return e;
            const t = (e) => {
                const t = e.type;
                return "punctuation" === t || "text" === t || "operator" === t || "relation" === t;
              },
              n = c.partitionNodes(e, function (n) {
                if (!a.isPunctuation(n)) return !1;
                if (a.isPunctuation(n) && !a.isRole(n, "ellipsis")) return !0;
                const r = e.indexOf(n);
                if (0 === r) return !e[1] || !t(e[1]);
                const i = e[r - 1];
                if (r === e.length - 1) return !t(i);
                const o = e[r + 1];
                return !t(i) || !t(o);
              });
            if (0 === n.rel.length) return e;
            const r = [];
            let i = n.comp.shift();
            i.length > 0 && r.push(l.getInstance().row(i));
            let o = 0;
            for (; n.comp.length > 0; ) r.push(n.rel[o++]), (i = n.comp.shift()), i.length > 0 && r.push(l.getInstance().row(i));
            return [l.getInstance().punctuatedNode_(r, n.rel)];
          }
          punctuatedNode_(e, t) {
            const n = l.getInstance().factory_.makeBranchNode("punctuated", e, t);
            if (t.length === e.length) {
              const e = t[0].role;
              if (
                "unknown" !== e &&
                t.every(function (t) {
                  return t.role === e;
                })
              )
                return (n.role = e), n;
            }
            return (
              a.singlePunctAtPosition(e, t, 0)
                ? (n.role = "startpunct")
                : a.singlePunctAtPosition(e, t, e.length - 1)
                ? (n.role = "endpunct")
                : t.every((e) => a.isRole(e, "dummy"))
                ? (n.role = "text")
                : t.every((e) => a.isRole(e, "space"))
                ? (n.role = "space")
                : (n.role = "sequence"),
              n
            );
          }
          dummyNode_(e) {
            const t = l.getInstance().factory_.makeMultipleContentNodes(e.length - 1, i.invisibleComma());
            return (
              t.forEach(function (e) {
                e.role = "dummy";
              }),
              l.getInstance().punctuatedNode_(e, t)
            );
          }
          accentRole_(e, t) {
            if (!a.isAccent(e)) return !1;
            const n = e.textContent,
              r = i.lookupSecondary("bar", n) || i.lookupSecondary("tilde", n) || e.role;
            return (e.role = "underscore" === t ? "underaccent" : "overaccent"), e.addAnnotation("accent", r), !0;
          }
          accentNode_(e, t, n, r, i) {
            const o = (t = t.slice(0, r + 1))[1],
              s = t[2];
            let a;
            if (
              (!i &&
                s &&
                ((a = l.getInstance().factory_.makeBranchNode("subscript", [e, o], [])),
                (a.role = "subsup"),
                (t = [a, s]),
                (n = "superscript")),
              i)
            ) {
              const r = l.getInstance().accentRole_(o, n);
              if (s) {
                l.getInstance().accentRole_(s, "overscore") && !r
                  ? ((a = l.getInstance().factory_.makeBranchNode("overscore", [e, s], [])), (t = [a, o]), (n = "underscore"))
                  : ((a = l.getInstance().factory_.makeBranchNode("underscore", [e, o], [])), (t = [a, s]), (n = "overscore")),
                  (a.role = "underover");
              }
            }
            return l.getInstance().makeLimitNode_(e, t, a, n);
          }
          makeLimitNode_(e, t, n, r) {
            if ("limupper" === r && "limlower" === e.type) return e.childNodes.push(t[1]), (t[1].parent = e), (e.type = "limboth"), e;
            if ("limlower" === r && "limupper" === e.type)
              return e.childNodes.splice(1, -1, t[1]), (t[1].parent = e), (e.type = "limboth"), e;
            const i = l.getInstance().factory_.makeBranchNode(r, t, []),
              o = a.isEmbellished(e);
            return n && (n.embellished = o), (i.embellished = o), (i.role = e.role), i;
          }
          getFunctionsInRow_(e, t) {
            const n = t || [];
            if (0 === e.length) return n;
            const r = e.shift(),
              i = l.classifyFunction_(r, e);
            if (!i) return n.push(r), l.getInstance().getFunctionsInRow_(e, n);
            const o = l.getInstance().getFunctionsInRow_(e, []),
              s = l.getInstance().getFunctionArgs_(r, o, i);
            return n.concat(s);
          }
          getFunctionArgs_(e, t, n) {
            let r, i, o;
            switch (n) {
              case "integral": {
                const n = l.getInstance().getIntegralArgs_(t);
                if (!n.intvar && !n.integrand.length) return n.rest.unshift(e), n.rest;
                const r = l.getInstance().row(n.integrand);
                return (o = l.getInstance().integralNode_(e, r, n.intvar)), n.rest.unshift(o), n.rest;
              }
              case "prefix":
                if (t[0] && "fenced" === t[0].type) {
                  const n = t.shift();
                  return a.isNeutralFence(n) || (n.role = "leftright"), (o = l.getInstance().functionNode_(e, n)), t.unshift(o), t;
                }
                if (((r = c.sliceNodes(t, a.isPrefixFunctionBoundary)), r.head.length))
                  (i = l.getInstance().row(r.head)), r.div && r.tail.unshift(r.div);
                else {
                  if (!r.div || !a.isType(r.div, "appl")) return t.unshift(e), t;
                  i = r.div;
                }
                return (o = l.getInstance().functionNode_(e, i)), r.tail.unshift(o), r.tail;
              case "bigop":
                return (
                  (r = c.sliceNodes(t, a.isBigOpBoundary)),
                  r.head.length
                    ? ((i = l.getInstance().row(r.head)),
                      (o = l.getInstance().bigOpNode_(e, i)),
                      r.div && r.tail.unshift(r.div),
                      r.tail.unshift(o),
                      r.tail)
                    : (t.unshift(e), t)
                );
              default: {
                if (0 === t.length) return [e];
                const n = t[0];
                return "fenced" === n.type && !a.isNeutralFence(n) && a.isSimpleFunctionScope(n)
                  ? ((n.role = "leftright"),
                    l.propagateFunctionRole_(e, "simple function"),
                    (o = l.getInstance().functionNode_(e, t.shift())),
                    t.unshift(o),
                    t)
                  : (t.unshift(e), t);
              }
            }
          }
          getIntegralArgs_(e, t = []) {
            if (0 === e.length) return { integrand: t, intvar: null, rest: e };
            const n = e[0];
            if (a.isGeneralFunctionBoundary(n)) return { integrand: t, intvar: null, rest: e };
            if (a.isIntegralDxBoundarySingle(n)) return (n.role = "integral"), { integrand: t, intvar: n, rest: e.slice(1) };
            if (e[1] && a.isIntegralDxBoundary(n, e[1])) {
              const r = l.getInstance().prefixNode_(e[1], [n]);
              return (r.role = "integral"), { integrand: t, intvar: r, rest: e.slice(2) };
            }
            return t.push(e.shift()), l.getInstance().getIntegralArgs_(e, t);
          }
          functionNode_(e, t) {
            const n = l.getInstance().factory_.makeContentNode(i.functionApplication()),
              r = l.getInstance().funcAppls[e.id];
            r &&
              ((n.mathmlTree = r.mathmlTree),
              (n.mathml = r.mathml),
              (n.annotation = r.annotation),
              (n.attributes = r.attributes),
              delete l.getInstance().funcAppls[e.id]),
              (n.type = "punctuation"),
              (n.role = "application");
            const o = l.getFunctionOp_(e, function (e) {
              return a.isType(e, "function") || (a.isType(e, "identifier") && a.isRole(e, "simple function"));
            });
            return l.getInstance().functionalNode_("appl", [e, t], o, [n]);
          }
          bigOpNode_(e, t) {
            const n = l.getFunctionOp_(e, (e) => a.isType(e, "largeop"));
            return l.getInstance().functionalNode_("bigop", [e, t], n, []);
          }
          integralNode_(e, t, n) {
            (t = t || l.getInstance().factory_.makeEmptyNode()), (n = n || l.getInstance().factory_.makeEmptyNode());
            const r = l.getFunctionOp_(e, (e) => a.isType(e, "largeop"));
            return l.getInstance().functionalNode_("integral", [e, t, n], r, []);
          }
          functionalNode_(e, t, n, r) {
            const i = t[0];
            let o;
            n && ((o = n.parent), r.push(n));
            const s = l.getInstance().factory_.makeBranchNode(e, t, r);
            return (s.role = i.role), o && (n.parent = o), s;
          }
          fractionNode_(e, t) {
            const n = l.getInstance().factory_.makeBranchNode("fraction", [e, t], []);
            return (
              (n.role = n.childNodes.every(function (e) {
                return a.isType(e, "number") && a.isRole(e, "integer");
              })
                ? "vulgar"
                : n.childNodes.every(a.isPureUnit)
                ? "unit"
                : "division"),
              o.run("propagateSimpleFunction", n)
            );
          }
          scriptNode_(e, t, n) {
            let r;
            switch (e.length) {
              case 0:
                r = l.getInstance().factory_.makeEmptyNode();
                break;
              case 1:
                if (((r = e[0]), n)) return r;
                break;
              default:
                r = l.getInstance().dummyNode_(e);
            }
            return (r.role = t), r;
          }
          findNestedRow_(e, t, n, i) {
            if (n > 3) return null;
            for (let o, s = 0; (o = e[s]); s++) {
              const e = r.tagName(o);
              if ("MSPACE" !== e) {
                if ("MROW" === e) return l.getInstance().findNestedRow_(r.toArray(o.childNodes), t, n + 1, i);
                if (l.findSemantics(o, t, i)) return o;
              }
            }
            return null;
          }
        }
        (t.default = l),
          (l.FENCE_TO_PUNCT_ = { metric: "metric", neutral: "vbar", open: "openfence", close: "closefence" }),
          (l.MML_TO_LIMIT_ = {
            MSUB: { type: "limlower", length: 1 },
            MUNDER: { type: "limlower", length: 1 },
            MSUP: { type: "limupper", length: 1 },
            MOVER: { type: "limupper", length: 1 },
            MSUBSUP: { type: "limboth", length: 2 },
            MUNDEROVER: { type: "limboth", length: 2 }
          }),
          (l.MML_TO_BOUNDS_ = {
            MSUB: { type: "subscript", length: 1, accent: !1 },
            MSUP: { type: "superscript", length: 1, accent: !1 },
            MSUBSUP: { type: "subscript", length: 2, accent: !1 },
            MUNDER: { type: "underscore", length: 1, accent: !0 },
            MOVER: { type: "overscore", length: 1, accent: !0 },
            MUNDEROVER: { type: "underscore", length: 2, accent: !0 }
          }),
          (l.CLASSIFY_FUNCTION_ = {
            integral: "integral",
            sum: "bigop",
            "prefix function": "prefix",
            "limit function": "prefix",
            "simple function": "prefix",
            "composed function": "prefix"
          }),
          (l.MATHJAX_FONTS = {
            "-tex-caligraphic": "caligraphic",
            "-tex-caligraphic-bold": "caligraphic-bold",
            "-tex-calligraphic": "caligraphic",
            "-tex-calligraphic-bold": "caligraphic-bold",
            "-tex-oldstyle": "oldstyle",
            "-tex-oldstyle-bold": "oldstyle-bold",
            "-tex-mathit": "italic"
          });
      },
      7984: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SemanticSkeleton = void 0);
        const r = n(1426),
          i = n(5024),
          o = n(8171);
        class s {
          constructor(e) {
            (this.parents = null), (this.levelsMap = null), (e = 0 === e ? e : e || []), (this.array = e);
          }
          static fromTree(e) {
            return s.fromNode(e.root);
          }
          static fromNode(e) {
            return new s(s.fromNode_(e));
          }
          static fromString(e) {
            return new s(s.fromString_(e));
          }
          static simpleCollapseStructure(e) {
            return "number" == typeof e;
          }
          static contentCollapseStructure(e) {
            return !!e && !s.simpleCollapseStructure(e) && "c" === e[0];
          }
          static interleaveIds(e, t) {
            return r.interleaveLists(s.collapsedLeafs(e), s.collapsedLeafs(t));
          }
          static collapsedLeafs(...e) {
            return e.reduce((e, t) => {
              return e.concat(((n = t), s.simpleCollapseStructure(n) ? [n] : s.contentCollapseStructure(n[1]) ? n.slice(2) : n.slice(1)));
              var n;
            }, []);
          }
          static fromStructure(e, t) {
            return new s(s.tree_(e, t.root));
          }
          static combineContentChildren(e, t, n) {
            switch (e.type) {
              case "relseq":
              case "infixop":
              case "multirel":
                return r.interleaveLists(n, t);
              case "prefixop":
                return t.concat(n);
              case "postfixop":
                return n.concat(t);
              case "fenced":
                return n.unshift(t[0]), n.push(t[1]), n;
              case "appl":
                return [n[0], t[0], n[1]];
              case "root":
                return [n[1], n[0]];
              case "row":
              case "line":
                return t.length && n.unshift(t[0]), n;
              default:
                return n;
            }
          }
          static makeSexp_(e) {
            return s.simpleCollapseStructure(e)
              ? e.toString()
              : s.contentCollapseStructure(e)
              ? "(c " + e.slice(1).map(s.makeSexp_).join(" ") + ")"
              : "(" + e.map(s.makeSexp_).join(" ") + ")";
          }
          static fromString_(e) {
            let t = e.replace(/\(/g, "[");
            return (t = t.replace(/\)/g, "]")), (t = t.replace(/ /g, ",")), (t = t.replace(/c/g, '"c"')), JSON.parse(t);
          }
          static fromNode_(e) {
            if (!e) return [];
            const t = e.contentNodes;
            let n;
            t.length && ((n = t.map(s.fromNode_)), n.unshift("c"));
            const r = e.childNodes;
            if (!r.length) return t.length ? [e.id, n] : e.id;
            const i = r.map(s.fromNode_);
            return t.length && i.unshift(n), i.unshift(e.id), i;
          }
          static tree_(e, t) {
            if (!t) return [];
            if (!t.childNodes.length) return t.id;
            const n = t.id,
              r = [n],
              a = i.evalXPath(`.//self::*[@${o.Attribute.ID}=${n}]`, e)[0],
              c = s.combineContentChildren(
                t,
                t.contentNodes.map(function (e) {
                  return e;
                }),
                t.childNodes.map(function (e) {
                  return e;
                })
              );
            a && s.addOwns_(a, c);
            for (let t, n = 0; (t = c[n]); n++) r.push(s.tree_(e, t));
            return r;
          }
          static addOwns_(e, t) {
            const n = e.getAttribute(o.Attribute.COLLAPSED),
              r = n ? s.realLeafs_(s.fromString(n).array) : t.map((e) => e.id);
            e.setAttribute(o.Attribute.OWNS, r.join(" "));
          }
          static realLeafs_(e) {
            if (s.simpleCollapseStructure(e)) return [e];
            if (s.contentCollapseStructure(e)) return [];
            let t = [];
            for (let n = 1; n < e.length; n++) t = t.concat(s.realLeafs_(e[n]));
            return t;
          }
          populate() {
            (this.parents && this.levelsMap) || ((this.parents = {}), (this.levelsMap = {}), this.populate_(this.array, this.array, []));
          }
          toString() {
            return s.makeSexp_(this.array);
          }
          populate_(e, t, n) {
            if (s.simpleCollapseStructure(e)) return (this.levelsMap[e] = t), void (this.parents[e] = e === n[0] ? n.slice(1) : n);
            const r = s.contentCollapseStructure(e) ? e.slice(1) : e,
              i = [r[0]].concat(n);
            for (let t = 0, n = r.length; t < n; t++) {
              const n = r[t];
              this.populate_(n, e, i);
            }
          }
          isRoot(e) {
            return e === this.levelsMap[e][0];
          }
          directChildren(e) {
            if (!this.isRoot(e)) return [];
            return this.levelsMap[e].slice(1).map((e) => (s.simpleCollapseStructure(e) ? e : s.contentCollapseStructure(e) ? e[1] : e[0]));
          }
          subtreeNodes(e) {
            if (!this.isRoot(e)) return [];
            const t = (e, n) => {
                s.simpleCollapseStructure(e) ? n.push(e) : (s.contentCollapseStructure(e) && (e = e.slice(1)), e.forEach((e) => t(e, n)));
              },
              n = this.levelsMap[e],
              r = [];
            return t(n.slice(1), r), r;
          }
        }
        t.SemanticSkeleton = s;
      },
      1784: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SemanticTree = void 0);
        const r = n(6671),
          i = n(4036),
          o = n(241),
          s = n(8122),
          a = n(9444),
          c = n(6161);
        n(7103);
        class l {
          constructor(e) {
            (this.mathml = e),
              (this.parser = new s.SemanticMathml()),
              (this.root = this.parser.parse(e)),
              (this.collator = this.parser.getFactory().leafMap.collateMeaning());
            const t = this.collator.newDefault();
            t && ((this.parser = new s.SemanticMathml()), (this.parser.getFactory().defaultMap = t), (this.root = this.parser.parse(e))),
              u.visit(this.root, {}),
              (0, i.annotate)(this.root);
          }
          static empty() {
            const e = r.parseInput("<math/>"),
              t = new l(e);
            return (t.mathml = e), t;
          }
          static fromNode(e, t) {
            const n = l.empty();
            return (n.root = e), t && (n.mathml = t), n;
          }
          static fromRoot(e, t) {
            let n = e;
            for (; n.parent; ) n = n.parent;
            const r = l.fromNode(n);
            return t && (r.mathml = t), r;
          }
          static fromXml(e) {
            const t = l.empty();
            return e.childNodes[0] && (t.root = a.SemanticNode.fromXml(e.childNodes[0])), t;
          }
          xml(e) {
            const t = r.parseInput("<stree></stree>"),
              n = this.root.xml(t.ownerDocument, e);
            return t.appendChild(n), t;
          }
          toString(e) {
            return r.serializeXml(this.xml(e));
          }
          formatXml(e) {
            const t = this.toString(e);
            return r.formatXml(t);
          }
          displayTree() {
            this.root.displayTree();
          }
          replaceNode(e, t) {
            const n = e.parent;
            n ? n.replaceChild(e, t) : (this.root = t);
          }
          toJson() {
            const e = {};
            return (e.stree = this.root.toJson()), e;
          }
        }
        t.SemanticTree = l;
        const u = new o.SemanticVisitor("general", "unit", (e, t) => {
          if ("infixop" === e.type && ("multiplication" === e.role || "implicit" === e.role)) {
            const t = e.childNodes;
            t.length && (c.isPureUnit(t[0]) || c.isUnitCounter(t[0])) && e.childNodes.slice(1).every(c.isPureUnit) && (e.role = "unit");
          }
          return !1;
        });
      },
      8901: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.partitionNodes =
            t.sliceNodes =
            t.getEmbellishedInner =
            t.addAttributes =
            t.isZeroLength =
            t.purgeNodes =
            t.isOrphanedGlyph =
            t.hasDisplayTag =
            t.hasEmptyTag =
            t.hasIgnoreTag =
            t.hasLeafTag =
            t.hasMathTag =
            t.directSpeechKeys =
            t.DISPLAYTAGS =
            t.EMPTYTAGS =
            t.IGNORETAGS =
            t.LEAFTAGS =
              void 0);
        const r = n(6671);
        function i(e) {
          return !!e && -1 !== t.LEAFTAGS.indexOf(r.tagName(e));
        }
        function o(e, t, n) {
          n && e.reverse();
          const r = [];
          for (let i, o = 0; (i = e[o]); o++) {
            if (t(i)) return n ? { head: e.slice(o + 1).reverse(), div: i, tail: r.reverse() } : { head: r, div: i, tail: e.slice(o + 1) };
            r.push(i);
          }
          return n ? { head: [], div: null, tail: r.reverse() } : { head: r, div: null, tail: [] };
        }
        (t.LEAFTAGS = ["MO", "MI", "MN", "MTEXT", "MS", "MSPACE"]),
          (t.IGNORETAGS = ["MERROR", "MPHANTOM", "MALIGNGROUP", "MALIGNMARK", "MPRESCRIPTS", "ANNOTATION", "ANNOTATION-XML"]),
          (t.EMPTYTAGS = ["MATH", "MROW", "MPADDED", "MACTION", "NONE", "MSTYLE", "SEMANTICS"]),
          (t.DISPLAYTAGS = ["MROOT", "MSQRT"]),
          (t.directSpeechKeys = ["aria-label", "exact-speech", "alt"]),
          (t.hasMathTag = function (e) {
            return !!e && "MATH" === r.tagName(e);
          }),
          (t.hasLeafTag = i),
          (t.hasIgnoreTag = function (e) {
            return !!e && -1 !== t.IGNORETAGS.indexOf(r.tagName(e));
          }),
          (t.hasEmptyTag = function (e) {
            return !!e && -1 !== t.EMPTYTAGS.indexOf(r.tagName(e));
          }),
          (t.hasDisplayTag = function (e) {
            return !!e && -1 !== t.DISPLAYTAGS.indexOf(r.tagName(e));
          }),
          (t.isOrphanedGlyph = function (e) {
            return !!e && "MGLYPH" === r.tagName(e) && !i(e.parentNode);
          }),
          (t.purgeNodes = function (e) {
            const n = [];
            for (let i, o = 0; (i = e[o]); o++) {
              if (i.nodeType !== r.NodeType.ELEMENT_NODE) continue;
              const e = r.tagName(i);
              -1 === t.IGNORETAGS.indexOf(e) && ((-1 !== t.EMPTYTAGS.indexOf(e) && 0 === i.childNodes.length) || n.push(i));
            }
            return n;
          }),
          (t.isZeroLength = function (e) {
            if (!e) return !1;
            if (
              -1 !==
              [
                "negativeveryverythinmathspace",
                "negativeverythinmathspace",
                "negativethinmathspace",
                "negativemediummathspace",
                "negativethickmathspace",
                "negativeverythickmathspace",
                "negativeveryverythickmathspace"
              ].indexOf(e)
            )
              return !0;
            const t = e.match(/[0-9.]+/);
            return !!t && 0 === parseFloat(t[0]);
          }),
          (t.addAttributes = function (e, n) {
            if (n.hasAttributes()) {
              const r = n.attributes;
              for (let n = r.length - 1; n >= 0; n--) {
                const i = r[n].name;
                i.match(/^ext/) && ((e.attributes[i] = r[n].value), (e.nobreaking = !0)),
                  -1 !== t.directSpeechKeys.indexOf(i) && ((e.attributes["ext-speech"] = r[n].value), (e.nobreaking = !0)),
                  i.match(/texclass$/) && (e.attributes.texclass = r[n].value),
                  "href" === i && ((e.attributes.href = r[n].value), (e.nobreaking = !0));
              }
            }
          }),
          (t.getEmbellishedInner = function e(t) {
            return t && t.embellished && t.childNodes.length > 0 ? e(t.childNodes[0]) : t;
          }),
          (t.sliceNodes = o),
          (t.partitionNodes = function (e, t) {
            let n = e;
            const r = [],
              i = [];
            let s = null;
            do {
              (s = o(n, t)), i.push(s.head), r.push(s.div), (n = s.tail);
            } while (s.div);
            return r.pop(), { rel: r, comp: i };
          });
      },
      9135: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.AbstractSpeechGenerator = void 0);
        const r = n(985),
          i = n(8171),
          o = n(1848),
          s = n(144);
        t.AbstractSpeechGenerator = class {
          constructor() {
            (this.modality = i.addPrefix("speech")), (this.rebuilt_ = null), (this.options_ = {});
          }
          getRebuilt() {
            return this.rebuilt_;
          }
          setRebuilt(e) {
            this.rebuilt_ = e;
          }
          setOptions(e) {
            (this.options_ = e || {}), (this.modality = i.addPrefix(this.options_.modality || "speech"));
          }
          getOptions() {
            return this.options_;
          }
          start() {}
          end() {}
          generateSpeech(e, t) {
            return (
              this.rebuilt_ || (this.rebuilt_ = new o.RebuildStree(t)), (0, r.setup)(this.options_), s.computeMarkup(this.getRebuilt().xml)
            );
          }
        };
      },
      3153: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.AdhocSpeechGenerator = void 0);
        const r = n(9135);
        class i extends r.AbstractSpeechGenerator {
          getSpeech(e, t) {
            const n = this.generateSpeech(e, t);
            return e.setAttribute(this.modality, n), n;
          }
        }
        t.AdhocSpeechGenerator = i;
      },
      6281: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.ColorGenerator = void 0);
        const r = n(8171),
          i = n(1123),
          o = n(1848),
          s = n(8835),
          a = n(9135);
        class c extends a.AbstractSpeechGenerator {
          constructor() {
            super(...arguments), (this.modality = (0, r.addPrefix)("foreground")), (this.contrast = new i.ContrastPicker());
          }
          static visitStree_(e, t, n) {
            if (e.childNodes.length) {
              if (
                (e.contentNodes.length &&
                  ("punctuated" === e.type && e.contentNodes.forEach((e) => (n[e.id] = !0)),
                  "implicit" !== e.role && t.push(e.contentNodes.map((e) => e.id))),
                e.childNodes.length)
              ) {
                if ("implicit" === e.role) {
                  const r = [];
                  let i = [];
                  for (const t of e.childNodes) {
                    const e = [];
                    c.visitStree_(t, e, n), e.length <= 2 && r.push(e.shift()), (i = i.concat(e));
                  }
                  return t.push(r), void i.forEach((e) => t.push(e));
                }
                e.childNodes.forEach((e) => c.visitStree_(e, t, n));
              }
            } else n[e.id] || t.push(e.id);
          }
          getSpeech(e, t) {
            return s.getAttribute(e, this.modality);
          }
          generateSpeech(e, t) {
            return this.getRebuilt() || this.setRebuilt(new o.RebuildStree(e)), this.colorLeaves_(e), s.getAttribute(e, this.modality);
          }
          colorLeaves_(e) {
            const t = [];
            c.visitStree_(this.getRebuilt().streeRoot, t, {});
            for (const n of t) {
              const t = this.contrast.generate();
              let r = !1;
              (r = Array.isArray(n)
                ? n.map((n) => this.colorLeave_(e, n, t)).reduce((e, t) => e || t, !1)
                : this.colorLeave_(e, n.toString(), t)),
                r && this.contrast.increment();
            }
          }
          colorLeave_(e, t, n) {
            const r = s.getBySemanticId(e, t);
            return !!r && (r.setAttribute(this.modality, n), !0);
          }
        }
        t.ColorGenerator = c;
      },
      1565: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.DirectSpeechGenerator = void 0);
        const r = n(8835),
          i = n(9135);
        class o extends i.AbstractSpeechGenerator {
          getSpeech(e, t) {
            return r.getAttribute(e, this.modality);
          }
        }
        t.DirectSpeechGenerator = o;
      },
      7721: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.DummySpeechGenerator = void 0);
        const r = n(9135);
        class i extends r.AbstractSpeechGenerator {
          getSpeech(e, t) {
            return "";
          }
        }
        t.DummySpeechGenerator = i;
      },
      1558: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.NodeSpeechGenerator = void 0);
        const r = n(8835),
          i = n(7486);
        class o extends i.TreeSpeechGenerator {
          getSpeech(e, t) {
            return super.getSpeech(e, t), r.getAttribute(e, this.modality);
          }
        }
        t.NodeSpeechGenerator = o;
      },
      7317: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.generatorMapping_ = t.generator = void 0);
        const r = n(3153),
          i = n(6281),
          o = n(1565),
          s = n(7721),
          a = n(1558),
          c = n(5778),
          l = n(7486);
        (t.generator = function (e) {
          return (t.generatorMapping_[e] || t.generatorMapping_.Direct)();
        }),
          (t.generatorMapping_ = {
            Adhoc: () => new r.AdhocSpeechGenerator(),
            Color: () => new i.ColorGenerator(),
            Direct: () => new o.DirectSpeechGenerator(),
            Dummy: () => new s.DummySpeechGenerator(),
            Node: () => new a.NodeSpeechGenerator(),
            Summary: () => new c.SummarySpeechGenerator(),
            Tree: () => new l.TreeSpeechGenerator()
          });
      },
      144: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.computeSummary_ =
            t.retrieveSummary =
            t.connectAllMactions =
            t.connectMactions =
            t.nodeAtPosition_ =
            t.computePrefix_ =
            t.retrievePrefix =
            t.addPrefix =
            t.addModality =
            t.addSpeech =
            t.recomputeMarkup =
            t.computeMarkup =
            t.recomputeSpeech =
            t.computeSpeech =
              void 0);
        const r = n(4253),
          i = n(6671),
          o = n(5024),
          s = n(8171),
          a = n(6060),
          c = n(1784),
          l = n(8835);
        function u(e) {
          return a.SpeechRuleEngine.getInstance().evaluateNode(e);
        }
        function d(e) {
          return u(c.SemanticTree.fromNode(e).xml());
        }
        function h(e) {
          const t = d(e);
          return r.markup(t);
        }
        function p(e) {
          const t = f(e);
          return r.markup(t);
        }
        function f(e) {
          const t = c.SemanticTree.fromRoot(e),
            n = o.evalXPath('.//*[@id="' + e.id + '"]', t.xml());
          let r = n[0];
          return (
            n.length > 1 && (r = m(e, n) || r),
            r
              ? a.SpeechRuleEngine.getInstance().runInSetting(
                  { modality: "prefix", domain: "default", style: "default", strict: !0, speech: !0 },
                  function () {
                    return a.SpeechRuleEngine.getInstance().evaluateNode(r);
                  }
                )
              : []
          );
        }
        function m(e, t) {
          const n = t[0];
          if (!e.parent) return n;
          const r = [];
          for (; e; ) r.push(e.id), (e = e.parent);
          const i = function (e, t) {
            for (; t.length && t.shift().toString() === e.getAttribute("id") && e.parentNode && e.parentNode.parentNode; )
              e = e.parentNode.parentNode;
            return !t.length;
          };
          for (let e, n = 0; (e = t[n]); n++) if (i(e, r.slice())) return e;
          return n;
        }
        function g(e) {
          return e
            ? a.SpeechRuleEngine.getInstance().runInSetting({ modality: "summary", strict: !1, speech: !0 }, function () {
                return a.SpeechRuleEngine.getInstance().evaluateNode(e);
              })
            : [];
        }
        (t.computeSpeech = u),
          (t.recomputeSpeech = d),
          (t.computeMarkup = function (e) {
            const t = u(e);
            return r.markup(t);
          }),
          (t.recomputeMarkup = h),
          (t.addSpeech = function (e, t, n) {
            const o = i.querySelectorAllByAttrValue(n, "id", t.id.toString())[0],
              a = o ? r.markup(u(o)) : h(t);
            e.setAttribute(s.Attribute.SPEECH, a);
          }),
          (t.addModality = function (e, t, n) {
            const r = h(t);
            e.setAttribute(n, r);
          }),
          (t.addPrefix = function (e, t) {
            const n = p(t);
            n && e.setAttribute(s.Attribute.PREFIX, n);
          }),
          (t.retrievePrefix = p),
          (t.computePrefix_ = f),
          (t.nodeAtPosition_ = m),
          (t.connectMactions = function (e, t, n) {
            const r = i.querySelectorAll(t, "maction");
            for (let t, o = 0; (t = r[o]); o++) {
              const r = t.getAttribute("id"),
                o = i.querySelectorAllByAttrValue(e, "id", r)[0];
              if (!o) continue;
              const a = t.childNodes[1],
                c = a.getAttribute(s.Attribute.ID);
              let u = l.getBySemanticId(e, c);
              if (u && "dummy" !== u.getAttribute(s.Attribute.TYPE)) continue;
              if (((u = o.childNodes[0]), u.getAttribute("sre-highlighter-added"))) continue;
              const d = a.getAttribute(s.Attribute.PARENT);
              d && u.setAttribute(s.Attribute.PARENT, d), u.setAttribute(s.Attribute.TYPE, "dummy"), u.setAttribute(s.Attribute.ID, c);
              i.querySelectorAllByAttrValue(n, "id", c)[0].setAttribute("alternative", c);
            }
          }),
          (t.connectAllMactions = function (e, t) {
            const n = i.querySelectorAll(e, "maction");
            for (let e, r = 0; (e = n[r]); r++) {
              const n = e.childNodes[1].getAttribute(s.Attribute.ID);
              i.querySelectorAllByAttrValue(t, "id", n)[0].setAttribute("alternative", n);
            }
          }),
          (t.retrieveSummary = function (e) {
            const t = g(e);
            return r.markup(t);
          }),
          (t.computeSummary_ = g);
      },
      5778: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SummarySpeechGenerator = void 0);
        const r = n(9135),
          i = n(144);
        class o extends r.AbstractSpeechGenerator {
          getSpeech(e, t) {
            return i.connectAllMactions(t, this.getRebuilt().xml), this.generateSpeech(e, t);
          }
        }
        t.SummarySpeechGenerator = o;
      },
      7486: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.TreeSpeechGenerator = void 0);
        const r = n(8171),
          i = n(8835),
          o = n(9135),
          s = n(144);
        class a extends o.AbstractSpeechGenerator {
          getSpeech(e, t) {
            const n = this.generateSpeech(e, t),
              o = this.getRebuilt().nodeDict;
            for (const n in o) {
              const a = o[n],
                c = i.getBySemanticId(t, n),
                l = i.getBySemanticId(e, n);
              c &&
                l &&
                (this.modality && this.modality !== r.Attribute.SPEECH
                  ? s.addModality(l, a, this.modality)
                  : s.addSpeech(l, a, this.getRebuilt().xml),
                this.modality === r.Attribute.SPEECH && s.addPrefix(l, a));
            }
            return n;
          }
        }
        t.TreeSpeechGenerator = a;
      },
      650: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.INTERVALS =
            t.makeLetter =
            t.numberRules =
            t.alphabetRules =
            t.getFont =
            t.makeInterval =
            t.generate =
            t.makeDomains_ =
            t.Domains_ =
            t.Base =
            t.Embellish =
            t.Font =
              void 0);
        const r = n(4886),
          i = n(2371),
          o = n(4524),
          s = n(3319),
          a = n(4161);
        var c, l, u;
        function d() {
          const e = o.LOCALE.ALPHABETS,
            n = (e, t) => {
              const n = {};
              return Object.keys(e).forEach((e) => (n[e] = !0)), Object.keys(t).forEach((e) => (n[e] = !0)), Object.keys(n);
            };
          (t.Domains_.small = n(e.smallPrefix, e.letterTrans)),
            (t.Domains_.capital = n(e.capPrefix, e.letterTrans)),
            (t.Domains_.digit = n(e.digitPrefix, e.digitTrans));
        }
        function h(e) {
          const t = e.toString(16).toUpperCase();
          return t.length > 3 ? t : ("000" + t).slice(-4);
        }
        function p([e, t], n) {
          const r = parseInt(e, 16),
            i = parseInt(t, 16),
            o = [];
          for (let e = r; e <= i; e++) {
            let t = h(e);
            !1 !== n[t] && ((t = n[t] || t), o.push(t));
          }
          return o;
        }
        function f(e) {
          const t = "normal" === e || "fullwidth" === e ? "" : o.LOCALE.MESSAGES.font[e] || o.LOCALE.MESSAGES.embellish[e] || "";
          return (0, s.localeFontCombiner)(t);
        }
        function m(e, n, r, i, s, a) {
          const c = f(i);
          for (let i, l, u, d = 0; (i = e[d]), (l = n[d]), (u = r[d]); d++) {
            const e = a ? o.LOCALE.ALPHABETS.capPrefix : o.LOCALE.ALPHABETS.smallPrefix,
              n = a ? t.Domains_.capital : t.Domains_.small;
            S(c.combiner, i, l, u, c.font, e, s, o.LOCALE.ALPHABETS.letterTrans, n);
          }
        }
        function g(e, n, r, i, s) {
          const a = f(r);
          for (let r, c, l = 0; (r = e[l]), (c = n[l]); l++) {
            const e = o.LOCALE.ALPHABETS.digitPrefix,
              n = l + s;
            S(a.combiner, r, c, n, a.font, e, i, o.LOCALE.ALPHABETS.digitTrans, t.Domains_.digit);
          }
        }
        function S(e, t, n, r, i, o, s, c, l) {
          for (let u, d = 0; (u = l[d]); d++) {
            const l = u in c ? c[u] : c.default,
              d = u in o ? o[u] : o.default;
            a.defineRule(t.toString(), u, "default", s, n, e(l(r), i, d));
          }
        }
        !(function (e) {
          (e.BOLD = "bold"),
            (e.BOLDFRAKTUR = "bold-fraktur"),
            (e.BOLDITALIC = "bold-italic"),
            (e.BOLDSCRIPT = "bold-script"),
            (e.DOUBLESTRUCK = "double-struck"),
            (e.FULLWIDTH = "fullwidth"),
            (e.FRAKTUR = "fraktur"),
            (e.ITALIC = "italic"),
            (e.MONOSPACE = "monospace"),
            (e.NORMAL = "normal"),
            (e.SCRIPT = "script"),
            (e.SANSSERIF = "sans-serif"),
            (e.SANSSERIFITALIC = "sans-serif-italic"),
            (e.SANSSERIFBOLD = "sans-serif-bold"),
            (e.SANSSERIFBOLDITALIC = "sans-serif-bold-italic");
        })((c = t.Font || (t.Font = {}))),
          (function (e) {
            (e.SUPER = "super"),
              (e.SUB = "sub"),
              (e.CIRCLED = "circled"),
              (e.PARENTHESIZED = "parenthesized"),
              (e.PERIOD = "period"),
              (e.NEGATIVECIRCLED = "negative-circled"),
              (e.DOUBLECIRCLED = "double-circled"),
              (e.CIRCLEDSANSSERIF = "circled-sans-serif"),
              (e.NEGATIVECIRCLEDSANSSERIF = "negative-circled-sans-serif"),
              (e.COMMA = "comma"),
              (e.SQUARED = "squared"),
              (e.NEGATIVESQUARED = "negative-squared");
          })((l = t.Embellish || (t.Embellish = {}))),
          (function (e) {
            (e.LATINCAP = "latinCap"),
              (e.LATINSMALL = "latinSmall"),
              (e.GREEKCAP = "greekCap"),
              (e.GREEKSMALL = "greekSmall"),
              (e.DIGIT = "digit");
          })((u = t.Base || (t.Base = {}))),
          (t.Domains_ = { small: ["default"], capital: ["default"], digit: ["default"] }),
          (t.makeDomains_ = d),
          (t.generate = function (e) {
            const n = r.default.getInstance().locale;
            (r.default.getInstance().locale = e), i.setLocale(), a.addSymbolRules({ locale: e }), d();
            const s = t.INTERVALS;
            for (let e, t = 0; (e = s[t]); t++) {
              const t = p(e.interval, e.subst),
                n = t.map(function (e) {
                  return String.fromCodePoint(parseInt(e, 16));
                });
              if ("offset" in e) g(t, n, e.font, e.category, e.offset || 0);
              else {
                m(t, n, o.LOCALE.ALPHABETS[e.base], e.font, e.category, !!e.capital);
              }
            }
            (r.default.getInstance().locale = n), i.setLocale();
          }),
          (t.makeInterval = p),
          (t.getFont = f),
          (t.alphabetRules = m),
          (t.numberRules = g),
          (t.makeLetter = S),
          (t.INTERVALS = [
            { interval: ["1D400", "1D419"], base: u.LATINCAP, subst: {}, capital: !0, category: "Lu", font: c.BOLD },
            { interval: ["1D41A", "1D433"], base: u.LATINSMALL, subst: {}, capital: !1, category: "Ll", font: c.BOLD },
            { interval: ["1D56C", "1D585"], base: u.LATINCAP, subst: {}, capital: !0, category: "Lu", font: c.BOLDFRAKTUR },
            { interval: ["1D586", "1D59F"], base: u.LATINSMALL, subst: {}, capital: !1, category: "Ll", font: c.BOLDFRAKTUR },
            { interval: ["1D468", "1D481"], base: u.LATINCAP, subst: {}, capital: !0, category: "Lu", font: c.BOLDITALIC },
            { interval: ["1D482", "1D49B"], base: u.LATINSMALL, subst: {}, capital: !1, category: "Ll", font: c.BOLDITALIC },
            { interval: ["1D4D0", "1D4E9"], base: u.LATINCAP, subst: {}, capital: !0, category: "Lu", font: c.BOLDSCRIPT },
            { interval: ["1D4EA", "1D503"], base: u.LATINSMALL, subst: {}, capital: !1, category: "Ll", font: c.BOLDSCRIPT },
            {
              interval: ["1D538", "1D551"],
              base: u.LATINCAP,
              subst: {
                "1D53A": "2102",
                "1D53F": "210D",
                "1D545": "2115",
                "1D547": "2119",
                "1D548": "211A",
                "1D549": "211D",
                "1D551": "2124"
              },
              capital: !0,
              category: "Lu",
              font: c.DOUBLESTRUCK
            },
            { interval: ["1D552", "1D56B"], base: u.LATINSMALL, subst: {}, capital: !1, category: "Ll", font: c.DOUBLESTRUCK },
            {
              interval: ["1D504", "1D51D"],
              base: u.LATINCAP,
              subst: { "1D506": "212D", "1D50B": "210C", "1D50C": "2111", "1D515": "211C", "1D51D": "2128" },
              capital: !0,
              category: "Lu",
              font: c.FRAKTUR
            },
            { interval: ["1D51E", "1D537"], base: u.LATINSMALL, subst: {}, capital: !1, category: "Ll", font: c.FRAKTUR },
            { interval: ["FF21", "FF3A"], base: u.LATINCAP, subst: {}, capital: !0, category: "Lu", font: c.FULLWIDTH },
            { interval: ["FF41", "FF5A"], base: u.LATINSMALL, subst: {}, capital: !1, category: "Ll", font: c.FULLWIDTH },
            { interval: ["1D434", "1D44D"], base: u.LATINCAP, subst: {}, capital: !0, category: "Lu", font: c.ITALIC },
            { interval: ["1D44E", "1D467"], base: u.LATINSMALL, subst: { "1D455": "210E" }, capital: !1, category: "Ll", font: c.ITALIC },
            { interval: ["1D670", "1D689"], base: u.LATINCAP, subst: {}, capital: !0, category: "Lu", font: c.MONOSPACE },
            { interval: ["1D68A", "1D6A3"], base: u.LATINSMALL, subst: {}, capital: !1, category: "Ll", font: c.MONOSPACE },
            { interval: ["0041", "005A"], base: u.LATINCAP, subst: {}, capital: !0, category: "Lu", font: c.NORMAL },
            { interval: ["0061", "007A"], base: u.LATINSMALL, subst: {}, capital: !1, category: "Ll", font: c.NORMAL },
            {
              interval: ["1D49C", "1D4B5"],
              base: u.LATINCAP,
              subst: {
                "1D49D": "212C",
                "1D4A0": "2130",
                "1D4A1": "2131",
                "1D4A3": "210B",
                "1D4A4": "2110",
                "1D4A7": "2112",
                "1D4A8": "2133",
                "1D4AD": "211B"
              },
              capital: !0,
              category: "Lu",
              font: c.SCRIPT
            },
            {
              interval: ["1D4B6", "1D4CF"],
              base: u.LATINSMALL,
              subst: { "1D4BA": "212F", "1D4BC": "210A", "1D4C4": "2134" },
              capital: !1,
              category: "Ll",
              font: c.SCRIPT
            },
            { interval: ["1D5A0", "1D5B9"], base: u.LATINCAP, subst: {}, capital: !0, category: "Lu", font: c.SANSSERIF },
            { interval: ["1D5BA", "1D5D3"], base: u.LATINSMALL, subst: {}, capital: !1, category: "Ll", font: c.SANSSERIF },
            { interval: ["1D608", "1D621"], base: u.LATINCAP, subst: {}, capital: !0, category: "Lu", font: c.SANSSERIFITALIC },
            { interval: ["1D622", "1D63B"], base: u.LATINSMALL, subst: {}, capital: !1, category: "Ll", font: c.SANSSERIFITALIC },
            { interval: ["1D5D4", "1D5ED"], base: u.LATINCAP, subst: {}, capital: !0, category: "Lu", font: c.SANSSERIFBOLD },
            { interval: ["1D5EE", "1D607"], base: u.LATINSMALL, subst: {}, capital: !1, category: "Ll", font: c.SANSSERIFBOLD },
            { interval: ["1D63C", "1D655"], base: u.LATINCAP, subst: {}, capital: !0, category: "Lu", font: c.SANSSERIFBOLDITALIC },
            { interval: ["1D656", "1D66F"], base: u.LATINSMALL, subst: {}, capital: !1, category: "Ll", font: c.SANSSERIFBOLDITALIC },
            { interval: ["0391", "03A9"], base: u.GREEKCAP, subst: { "03A2": "03F4" }, capital: !0, category: "Lu", font: c.NORMAL },
            {
              interval: ["03B0", "03D0"],
              base: u.GREEKSMALL,
              subst: {
                "03B0": "2207",
                "03CA": "2202",
                "03CB": "03F5",
                "03CC": "03D1",
                "03CD": "03F0",
                "03CE": "03D5",
                "03CF": "03F1",
                "03D0": "03D6"
              },
              capital: !1,
              category: "Ll",
              font: c.NORMAL
            },
            { interval: ["1D6A8", "1D6C0"], base: u.GREEKCAP, subst: {}, capital: !0, category: "Lu", font: c.BOLD },
            { interval: ["1D6C1", "1D6E1"], base: u.GREEKSMALL, subst: {}, capital: !1, category: "Ll", font: c.BOLD },
            { interval: ["1D6E2", "1D6FA"], base: u.GREEKCAP, subst: {}, capital: !0, category: "Lu", font: c.ITALIC },
            { interval: ["1D6FB", "1D71B"], base: u.GREEKSMALL, subst: {}, capital: !1, category: "Ll", font: c.ITALIC },
            { interval: ["1D71C", "1D734"], base: u.GREEKCAP, subst: {}, capital: !0, category: "Lu", font: c.BOLDITALIC },
            { interval: ["1D735", "1D755"], base: u.GREEKSMALL, subst: {}, capital: !1, category: "Ll", font: c.BOLDITALIC },
            { interval: ["1D756", "1D76E"], base: u.GREEKCAP, subst: {}, capital: !0, category: "Lu", font: c.SANSSERIFBOLD },
            { interval: ["1D76F", "1D78F"], base: u.GREEKSMALL, subst: {}, capital: !1, category: "Ll", font: c.SANSSERIFBOLD },
            { interval: ["1D790", "1D7A8"], base: u.GREEKCAP, subst: {}, capital: !0, category: "Lu", font: c.SANSSERIFBOLDITALIC },
            { interval: ["1D7A9", "1D7C9"], base: u.GREEKSMALL, subst: {}, capital: !1, category: "Ll", font: c.SANSSERIFBOLDITALIC },
            { interval: ["0030", "0039"], base: u.DIGIT, subst: {}, offset: 0, category: "Nd", font: c.NORMAL },
            {
              interval: ["2070", "2079"],
              base: u.DIGIT,
              subst: { 2071: "00B9", 2072: "00B2", 2073: "00B3" },
              offset: 0,
              category: "No",
              font: l.SUPER
            },
            { interval: ["2080", "2089"], base: u.DIGIT, subst: {}, offset: 0, category: "No", font: l.SUB },
            { interval: ["245F", "2473"], base: u.DIGIT, subst: { "245F": "24EA" }, offset: 0, category: "No", font: l.CIRCLED },
            { interval: ["3251", "325F"], base: u.DIGIT, subst: {}, offset: 21, category: "No", font: l.CIRCLED },
            { interval: ["32B1", "32BF"], base: u.DIGIT, subst: {}, offset: 36, category: "No", font: l.CIRCLED },
            { interval: ["2474", "2487"], base: u.DIGIT, subst: {}, offset: 1, category: "No", font: l.PARENTHESIZED },
            { interval: ["2487", "249B"], base: u.DIGIT, subst: { 2487: "1F100" }, offset: 0, category: "No", font: l.PERIOD },
            { interval: ["2775", "277F"], base: u.DIGIT, subst: { 2775: "24FF" }, offset: 0, category: "No", font: l.NEGATIVECIRCLED },
            { interval: ["24EB", "24F4"], base: u.DIGIT, subst: {}, offset: 11, category: "No", font: l.NEGATIVECIRCLED },
            { interval: ["24F5", "24FE"], base: u.DIGIT, subst: {}, offset: 1, category: "No", font: l.DOUBLECIRCLED },
            { interval: ["277F", "2789"], base: u.DIGIT, subst: { "277F": "1F10B" }, offset: 0, category: "No", font: l.CIRCLEDSANSSERIF },
            {
              interval: ["2789", "2793"],
              base: u.DIGIT,
              subst: { 2789: "1F10C" },
              offset: 0,
              category: "No",
              font: l.NEGATIVECIRCLEDSANSSERIF
            },
            { interval: ["FF10", "FF19"], base: u.DIGIT, subst: {}, offset: 0, category: "Nd", font: c.FULLWIDTH },
            { interval: ["1D7CE", "1D7D7"], base: u.DIGIT, subst: {}, offset: 0, category: "Nd", font: c.BOLD },
            { interval: ["1D7D8", "1D7E1"], base: u.DIGIT, subst: {}, offset: 0, category: "Nd", font: c.DOUBLESTRUCK },
            { interval: ["1D7E2", "1D7EB"], base: u.DIGIT, subst: {}, offset: 0, category: "Nd", font: c.SANSSERIF },
            { interval: ["1D7EC", "1D7F5"], base: u.DIGIT, subst: {}, offset: 0, category: "Nd", font: c.SANSSERIFBOLD },
            { interval: ["1D7F6", "1D7FF"], base: u.DIGIT, subst: {}, offset: 0, category: "Nd", font: c.MONOSPACE },
            { interval: ["1F101", "1F10A"], base: u.DIGIT, subst: {}, offset: 0, category: "No", font: l.COMMA },
            { interval: ["24B6", "24CF"], base: u.LATINCAP, subst: {}, capital: !0, category: "So", font: l.CIRCLED },
            { interval: ["24D0", "24E9"], base: u.LATINSMALL, subst: {}, capital: !1, category: "So", font: l.CIRCLED },
            { interval: ["1F110", "1F129"], base: u.LATINCAP, subst: {}, capital: !0, category: "So", font: l.PARENTHESIZED },
            { interval: ["249C", "24B5"], base: u.LATINSMALL, subst: {}, capital: !1, category: "So", font: l.PARENTHESIZED },
            { interval: ["1F130", "1F149"], base: u.LATINCAP, subst: {}, capital: !0, category: "So", font: l.SQUARED },
            { interval: ["1F170", "1F189"], base: u.LATINCAP, subst: {}, capital: !0, category: "So", font: l.NEGATIVESQUARED },
            { interval: ["1F150", "1F169"], base: u.LATINCAP, subst: {}, capital: !0, category: "So", font: l.NEGATIVECIRCLED }
          ]);
      },
      3955: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Parser = t.Comparator = t.ClearspeakPreferences = void 0);
        const r = n(4886),
          i = n(4998),
          o = n(8310),
          s = n(8310),
          a = n(4161),
          c = n(6060);
        class l extends o.DynamicCstr {
          constructor(e, t) {
            super(e), (this.preference = t);
          }
          static comparator() {
            return new d(
              r.default.getInstance().dynamicCstr,
              s.DynamicProperties.createProp(
                [o.DynamicCstr.DEFAULT_VALUES[s.Axis.LOCALE]],
                [o.DynamicCstr.DEFAULT_VALUES[s.Axis.MODALITY]],
                [o.DynamicCstr.DEFAULT_VALUES[s.Axis.DOMAIN]],
                [o.DynamicCstr.DEFAULT_VALUES[s.Axis.STYLE]]
              )
            );
          }
          static fromPreference(e) {
            const t = e.split(":"),
              n = {},
              r = u.getProperties(),
              i = Object.keys(r);
            for (let e, o = 0; (e = t[o]); o++) {
              const t = e.split("_");
              if (-1 === i.indexOf(t[0])) continue;
              const o = t[1];
              o && o !== l.AUTO && -1 !== r[t[0]].indexOf(o) && (n[t[0]] = t[1]);
            }
            return n;
          }
          static toPreference(e) {
            const t = Object.keys(e),
              n = [];
            for (let r = 0; r < t.length; r++) n.push(t[r] + "_" + e[t[r]]);
            return n.length ? n.join(":") : o.DynamicCstr.DEFAULT_VALUE;
          }
          static getLocalePreferences(e) {
            const t = e || a.enumerate(c.SpeechRuleEngine.getInstance().enumerate());
            return l.getLocalePreferences_(t);
          }
          static smartPreferences(e, t) {
            const n = l.getLocalePreferences()[t];
            if (!n) return [];
            const r = e.explorers.speech,
              o = l.relevantPreferences(r.walker.getFocus().getSemanticPrimary()),
              s = i.DOMAIN_TO_STYLES.clearspeak;
            return [
              { type: "radio", content: "No Preferences", id: "clearspeak-default", variable: "speechRules" },
              { type: "radio", content: "Current Preferences", id: "clearspeak-" + s, variable: "speechRules" },
              { type: "rule" },
              { type: "label", content: "Preferences for " + o },
              { type: "rule" }
            ].concat(
              n[o].map(function (e) {
                const t = e.split("_");
                return { type: "radio", content: t[1], id: "clearspeak-" + l.addPreference(s, t[0], t[1]), variable: "speechRules" };
              })
            );
          }
          static relevantPreferences(e) {
            const t = f[e.type];
            return (t && (t[e.role] || t[""])) || "ImpliedTimes";
          }
          static findPreference(e, t) {
            if ("default" === e) return l.AUTO;
            return l.fromPreference(e)[t] || l.AUTO;
          }
          static addPreference(e, t, n) {
            if ("default" === e) return t + "_" + n;
            const r = l.fromPreference(e);
            return (r[t] = n), l.toPreference(r);
          }
          static getLocalePreferences_(e) {
            const t = {};
            for (const n in e) {
              if (!e[n].speech || !e[n].speech.clearspeak) continue;
              const r = Object.keys(e[n].speech.clearspeak),
                i = (t[n] = {});
              for (const e in u.getProperties()) {
                const t = u.getProperties()[e],
                  n = [e + "_Auto"];
                if (t) for (const i of t) -1 !== r.indexOf(e + "_" + i) && n.push(e + "_" + i);
                i[e] = n;
              }
            }
            return t;
          }
          equal(e) {
            if (!super.equal(e)) return !1;
            const t = Object.keys(this.preference),
              n = e.preference;
            if (t.length !== Object.keys(n).length) return !1;
            for (let e, r = 0; (e = t[r]); r++) if (this.preference[e] !== n[e]) return !1;
            return !0;
          }
        }
        (t.ClearspeakPreferences = l), (l.AUTO = "Auto");
        const u = new s.DynamicProperties({
          AbsoluteValue: ["Auto", "AbsEnd", "Cardinality", "Determinant"],
          Bar: ["Auto", "Conjugate"],
          Caps: ["Auto", "SayCaps"],
          CombinationPermutation: ["Auto", "ChoosePermute"],
          Currency: ["Auto", "Position", "Prefix"],
          Ellipses: ["Auto", "AndSoOn"],
          Enclosed: ["Auto", "EndEnclose"],
          Exponent: ["Auto", "AfterPower", "Ordinal", "OrdinalPower", "Exponent"],
          Fraction: ["Auto", "EndFrac", "FracOver", "General", "GeneralEndFrac", "Ordinal", "Over", "OverEndFrac", "Per"],
          Functions: ["Auto", "None", "Reciprocal"],
          ImpliedTimes: ["Auto", "MoreImpliedTimes", "None"],
          Log: ["Auto", "LnAsNaturalLog"],
          Matrix: ["Auto", "Combinatoric", "EndMatrix", "EndVector", "SilentColNum", "SpeakColNum", "Vector"],
          MultiLineLabel: ["Auto", "Case", "Constraint", "Equation", "Line", "None", "Row", "Step"],
          MultiLineOverview: ["Auto", "None"],
          MultiLinePausesBetweenColumns: ["Auto", "Long", "Short"],
          MultsymbolDot: ["Auto", "Dot"],
          MultsymbolX: ["Auto", "By", "Cross"],
          Paren: ["Auto", "CoordPoint", "Interval", "Silent", "Speak", "SpeakNestingLevel"],
          Prime: ["Auto", "Angle", "Length"],
          Roots: ["Auto", "PosNegSqRoot", "PosNegSqRootEnd", "RootEnd"],
          SetMemberSymbol: ["Auto", "Belongs", "Element", "Member", "In"],
          Sets: ["Auto", "SilentBracket", "woAll"],
          TriangleSymbol: ["Auto", "Delta"],
          Trig: ["Auto", "ArcTrig", "TrigInverse", "Reciprocal"],
          VerticalLine: ["Auto", "Divides", "Given", "SuchThat"]
        });
        class d extends s.DefaultComparator {
          constructor(e, t) {
            super(e, t), (this.preference = e instanceof l ? e.preference : {});
          }
          match(e) {
            if (!(e instanceof l)) return super.match(e);
            if ("default" === e.getComponents()[s.Axis.STYLE]) return !0;
            const t = Object.keys(e.preference);
            for (let n, r = 0; (n = t[r]); r++) if (this.preference[n] !== e.preference[n]) return !1;
            return !0;
          }
          compare(e, t) {
            const n = super.compare(e, t);
            if (0 !== n) return n;
            const r = e instanceof l,
              i = t instanceof l;
            if (!r && i) return 1;
            if (r && !i) return -1;
            if (!r && !i) return 0;
            const o = Object.keys(e.preference).length,
              s = Object.keys(t.preference).length;
            return o > s ? -1 : o < s ? 1 : 0;
          }
        }
        t.Comparator = d;
        class h extends s.DynamicCstrParser {
          constructor() {
            super([s.Axis.LOCALE, s.Axis.MODALITY, s.Axis.DOMAIN, s.Axis.STYLE]);
          }
          parse(e) {
            const t = super.parse(e);
            let n = t.getValue(s.Axis.STYLE);
            const r = t.getValue(s.Axis.LOCALE),
              i = t.getValue(s.Axis.MODALITY);
            let a = {};
            return (
              n !== o.DynamicCstr.DEFAULT_VALUE && ((a = this.fromPreference(n)), (n = this.toPreference(a))),
              new l({ locale: r, modality: i, domain: "clearspeak", style: n }, a)
            );
          }
          fromPreference(e) {
            return l.fromPreference(e);
          }
          toPreference(e) {
            return l.toPreference(e);
          }
        }
        t.Parser = h;
        const p = [
            ["AbsoluteValue", "fenced", "neutral", "metric"],
            ["Bar", "overscore", "overaccent"],
            ["Caps", "identifier", "latinletter"],
            ["CombinationPermutation", "appl", "unknown"],
            ["Ellipses", "punctuation", "ellipsis"],
            ["Exponent", "superscript", ""],
            ["Fraction", "fraction", ""],
            ["Functions", "appl", "simple function"],
            ["ImpliedTimes", "operator", "implicit"],
            ["Log", "appl", "prefix function"],
            ["Matrix", "matrix", ""],
            ["Matrix", "vector", ""],
            ["MultiLineLabel", "multiline", "label"],
            ["MultiLineOverview", "multiline", "table"],
            ["MultiLinePausesBetweenColumns", "multiline", "table"],
            ["MultiLineLabel", "table", "label"],
            ["MultiLineOverview", "table", "table"],
            ["MultiLinePausesBetweenColumns", "table", "table"],
            ["MultiLineLabel", "cases", "label"],
            ["MultiLineOverview", "cases", "table"],
            ["MultiLinePausesBetweenColumns", "cases", "table"],
            ["MultsymbolDot", "operator", "multiplication"],
            ["MultsymbolX", "operator", "multiplication"],
            ["Paren", "fenced", "leftright"],
            ["Prime", "superscript", "prime"],
            ["Roots", "root", ""],
            ["Roots", "sqrt", ""],
            ["SetMemberSymbol", "relation", "element"],
            ["Sets", "fenced", "set extended"],
            ["TriangleSymbol", "identifier", "greekletter"],
            ["Trig", "appl", "prefix function"],
            ["VerticalLine", "punctuated", "vbar"]
          ],
          f = (function () {
            const e = {};
            for (let t, n = 0; (t = p[n]); n++) {
              const n = t[0];
              let r = e[t[1]];
              r || ((r = {}), (e[t[1]] = r)), (r[t[2]] = n);
            }
            return e;
          })();
        (r.default.getInstance().comparators.clearspeak = l.comparator), (r.default.getInstance().parsers.clearspeak = new h());
      },
      127: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.ClearspeakRules = void 0);
        const r = n(8310),
          i = n(931),
          o = n(8662),
          s = n(3269),
          a = n(2110),
          c = n(7278);
        t.ClearspeakRules = function () {
          c.addStore(r.DynamicCstr.BASE_LOCALE + ".speech.clearspeak", "", {
            CTFpauseSeparator: i.pauseSeparator,
            CTFnodeCounter: o.nodeCounter,
            CTFcontentIterator: i.contentIterator,
            CSFvulgarFraction: a.vulgarFraction,
            CQFvulgarFractionSmall: o.isSmallVulgarFraction,
            CQFcellsSimple: o.allCellsSimple,
            CSFordinalExponent: o.ordinalExponent,
            CSFwordOrdinal: o.wordOrdinal,
            CQFmatchingFences: o.matchingFences,
            CSFnestingDepth: o.nestingDepth,
            CQFfencedArguments: o.fencedArguments,
            CQFsimpleArguments: o.simpleArguments,
            CQFspaceoutNumber: s.spaceoutNumber
          });
        };
      },
      8662: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.wordOrdinal =
            t.layoutFactor_ =
            t.fencedFactor_ =
            t.simpleFactor_ =
            t.simpleArguments =
            t.fencedArguments =
            t.insertNesting =
            t.matchingFences =
            t.nestingDepth =
            t.NESTING_DEPTH =
            t.ordinalExponent =
            t.allTextLastContent_ =
            t.isUnitExpression =
            t.isSmallVulgarFraction =
            t.allCellsSimple =
            t.allIndices_ =
            t.isInteger_ =
            t.simpleCell_ =
            t.simpleNode =
            t.hasPreference =
            t.isSimpleFraction_ =
            t.isSimpleNumber_ =
            t.isNumber_ =
            t.isLetter_ =
            t.isSimple_ =
            t.isSimpleLetters_ =
            t.isSimpleDegree_ =
            t.isSimpleNegative_ =
            t.isSimpleFunction_ =
            t.isSimpleExpression =
            t.nodeCounter =
              void 0);
        const r = n(6671),
          i = n(4886),
          o = n(5024),
          s = n(4524),
          a = n(9385),
          c = n(1058),
          l = n(931),
          u = n(4036),
          d = n(241),
          h = n(4020);
        function p(e) {
          return y(e) || S(e) || g(e) || m(e) || f(e);
        }
        function f(e) {
          return (
            "appl" === e.type &&
            ("prefix function" === e.childNodes[0].role || "simple function" === e.childNodes[0].role) &&
            (b(e.childNodes[1]) || ("fenced" === e.childNodes[1].type && b(e.childNodes[1].childNodes[0])))
          );
        }
        function m(e) {
          return (
            "prefixop" === e.type &&
            "negative" === e.role &&
            b(e.childNodes[0]) &&
            "prefixop" !== e.childNodes[0].type &&
            "appl" !== e.childNodes[0].type &&
            "punctuated" !== e.childNodes[0].type
          );
        }
        function g(e) {
          return (
            "punctuated" === e.type &&
            "endpunct" === e.role &&
            2 === e.childNodes.length &&
            "degree" === e.childNodes[1].role &&
            (N(e.childNodes[0]) ||
              E(e.childNodes[0]) ||
              ("prefixop" === e.childNodes[0].type &&
                "negative" === e.childNodes[0].role &&
                (N(e.childNodes[0].childNodes[0]) || E(e.childNodes[0].childNodes[0]))))
          );
        }
        function S(e) {
          return (
            N(e) ||
            ("infixop" === e.type &&
              "implicit" === e.role &&
              ((2 === e.childNodes.length && (N(e.childNodes[0]) || y(e.childNodes[0])) && N(e.childNodes[1])) ||
                (3 === e.childNodes.length && y(e.childNodes[0]) && N(e.childNodes[1]) && N(e.childNodes[2]))))
          );
        }
        function b(e) {
          return e.hasAnnotation("clearspeak", "simple");
        }
        function N(e) {
          return (
            "identifier" === e.type &&
            ("latinletter" === e.role || "greekletter" === e.role || "otherletter" === e.role || "simple function" === e.role)
          );
        }
        function E(e) {
          return "number" === e.type && ("integer" === e.role || "float" === e.role);
        }
        function y(e) {
          return E(e) || A(e);
        }
        function A(e) {
          if (_("Fraction_Over") || _("Fraction_FracOver")) return !1;
          if ("fraction" !== e.type || "vulgar" !== e.role) return !1;
          if (_("Fraction_Ordinal")) return !0;
          const t = parseInt(e.childNodes[0].textContent, 10),
            n = parseInt(e.childNodes[1].textContent, 10);
          return t > 0 && t < 20 && n > 0 && n < 11;
        }
        function _(e) {
          return i.default.getInstance().style === e;
        }
        function C(e) {
          if (!e.hasAttribute("annotation")) return !1;
          const t = e.getAttribute("annotation");
          return !!/clearspeak:simple$|clearspeak:simple;/.exec(t);
        }
        function T(e) {
          if (C(e)) return !0;
          if ("subscript" !== e.tagName) return !1;
          const t = e.childNodes[0].childNodes,
            n = t[1];
          return (
            "identifier" === t[0].tagName &&
            (v(n) || ("infixop" === n.tagName && n.hasAttribute("role") && "implicit" === n.getAttribute("role") && M(n)))
          );
        }
        function v(e) {
          return "number" === e.tagName && e.hasAttribute("role") && "integer" === e.getAttribute("role");
        }
        function M(e) {
          return o.evalXPath("children/*", e).every((e) => v(e) || "identifier" === e.tagName);
        }
        function O(e) {
          return (
            "text" === e.type ||
            ("punctuated" === e.type && "text" === e.role && E(e.childNodes[0]) && I(e.childNodes.slice(1))) ||
            ("identifier" === e.type && "unit" === e.role) ||
            ("infixop" === e.type && ("implicit" === e.role || "unit" === e.role))
          );
        }
        function I(e) {
          for (let t = 0; t < e.length - 1; t++) if ("text" !== e[t].type || "" !== e[t].textContent) return !1;
          return "text" === e[e.length - 1].type;
        }
        function L(e, t) {
          if (!t || !e) return e;
          const n = e.match(/^(open|close) /);
          return n ? n[0] + t + " " + e.substring(n[0].length) : t + " " + e;
        }
        function R(e) {
          return (
            !!e &&
            ("number" === e.tagName ||
              "identifier" === e.tagName ||
              "function" === e.tagName ||
              "appl" === e.tagName ||
              "fraction" === e.tagName)
          );
        }
        function x(e) {
          return e && ("fenced" === e.tagName || (e.hasAttribute("role") && "leftright" === e.getAttribute("role")) || P(e));
        }
        function P(e) {
          return !!e && ("matrix" === e.tagName || "vector" === e.tagName);
        }
        (t.nodeCounter = function (e, t) {
          const n = t.split("-"),
            r = l.nodeCounter(e, n[0] || ""),
            i = n[1] || "",
            o = n[2] || "";
          let s = !0;
          return function () {
            const e = r();
            return s ? ((s = !1), o + e + i) : e + i;
          };
        }),
          (t.isSimpleExpression = p),
          (t.isSimpleFunction_ = f),
          (t.isSimpleNegative_ = m),
          (t.isSimpleDegree_ = g),
          (t.isSimpleLetters_ = S),
          (t.isSimple_ = b),
          (t.isLetter_ = N),
          (t.isNumber_ = E),
          (t.isSimpleNumber_ = y),
          (t.isSimpleFraction_ = A),
          (t.hasPreference = _),
          (0, u.register)(
            new d.SemanticAnnotator("clearspeak", "simple", function (e) {
              return p(e) ? "simple" : "";
            })
          ),
          (t.simpleNode = C),
          (t.simpleCell_ = T),
          (t.isInteger_ = v),
          (t.allIndices_ = M),
          (t.allCellsSimple = function (e) {
            const t = "matrix" === e.tagName ? "children/row/children/cell/children/*" : "children/line/children/*";
            return o.evalXPath(t, e).every(T) ? [e] : [];
          }),
          (t.isSmallVulgarFraction = function (e) {
            return (0, a.vulgarFractionSmall)(e, 20, 11) ? [e] : [];
          }),
          (t.isUnitExpression = O),
          (t.allTextLastContent_ = I),
          (0, u.register)(
            new d.SemanticAnnotator("clearspeak", "unit", function (e) {
              return O(e) ? "unit" : "";
            })
          ),
          (t.ordinalExponent = function (e) {
            const t = parseInt(e.textContent, 10);
            return isNaN(t) ? e.textContent : t > 10 ? s.LOCALE.NUMBERS.numericOrdinal(t) : s.LOCALE.NUMBERS.wordOrdinal(t);
          }),
          (t.NESTING_DEPTH = null),
          (t.nestingDepth = function (e) {
            let n = 0;
            const r = e.textContent,
              i = "open" === e.getAttribute("role") ? 0 : 1;
            let o = e.parentNode;
            for (; o; ) "fenced" === o.tagName && o.childNodes[0].childNodes[i].textContent === r && n++, (o = o.parentNode);
            return (t.NESTING_DEPTH = n > 1 ? s.LOCALE.NUMBERS.wordOrdinal(n) : ""), t.NESTING_DEPTH;
          }),
          (t.matchingFences = function (e) {
            const t = e.previousSibling;
            let n, r;
            return (
              t ? ((n = t), (r = e)) : ((n = e), (r = e.nextSibling)), r && (0, h.isMatchingFence)(n.textContent, r.textContent) ? [e] : []
            );
          }),
          (t.insertNesting = L),
          c.Grammar.getInstance().setCorrection("insertNesting", L),
          (t.fencedArguments = function (e) {
            const t = r.toArray(e.parentNode.childNodes),
              n = o.evalXPath("../../children/*", e),
              i = t.indexOf(e);
            return x(n[i]) || x(n[i + 1]) ? [e] : [];
          }),
          (t.simpleArguments = function (e) {
            const t = r.toArray(e.parentNode.childNodes),
              n = o.evalXPath("../../children/*", e),
              i = t.indexOf(e);
            return R(n[i]) &&
              n[i + 1] &&
              (R(n[i + 1]) ||
                "root" === n[i + 1].tagName ||
                "sqrt" === n[i + 1].tagName ||
                ("superscript" === n[i + 1].tagName &&
                  n[i + 1].childNodes[0].childNodes[0] &&
                  ("number" === n[i + 1].childNodes[0].childNodes[0].tagName ||
                    "identifier" === n[i + 1].childNodes[0].childNodes[0].tagName) &&
                  ("2" === n[i + 1].childNodes[0].childNodes[1].textContent || "3" === n[i + 1].childNodes[0].childNodes[1].textContent)))
              ? [e]
              : [];
          }),
          (t.simpleFactor_ = R),
          (t.fencedFactor_ = x),
          (t.layoutFactor_ = P),
          (t.wordOrdinal = function (e) {
            return s.LOCALE.NUMBERS.wordOrdinal(parseInt(e.textContent, 10));
          });
      },
      5659: function (e, t, n) {
        var r =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function s(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function a(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(s, a);
              }
              c((r = r.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadAjax = t.loadFileSync = t.loadFile = t.parseMaps = t.retrieveFiles = t.standardLoader = t.loadLocale = t.store = void 0);
        const i = n(9501),
          o = n(4886),
          s = n(4998),
          a = n(7129),
          c = n(4755),
          l = n(8310),
          u = n(4161),
          d = n(6060),
          h = n(2371),
          p = n(650);
        t.store = u;
        const f = { functions: u.addFunctionRules, symbols: u.addSymbolRules, units: u.addUnitRules, si: u.setSiPrefixes };
        let m = !1;
        function g(e = o.default.getInstance().locale) {
          o.EnginePromise.loaded[e] ||
            ((o.EnginePromise.loaded[e] = [!1, !1]),
            (function (e) {
              if (o.default.getInstance().isIE && o.default.getInstance().mode === s.Mode.HTTP) return void y(e);
              b(e);
            })(e));
        }
        function S() {
          switch (o.default.getInstance().mode) {
            case s.Mode.ASYNC:
              return A;
            case s.Mode.HTTP:
              return C;
            case s.Mode.SYNC:
            default:
              return _;
          }
        }
        function b(e) {
          const t = o.default.getInstance().customLoader ? o.default.getInstance().customLoader : S(),
            n = new Promise((n) => {
              t(e).then(
                (t) => {
                  N(t), (o.EnginePromise.loaded[e] = [!0, !0]), n(e);
                },
                (t) => {
                  (o.EnginePromise.loaded[e] = [!0, !1]),
                    console.error(`Unable to load locale: ${e}`),
                    (o.default.getInstance().locale = o.default.getInstance().defaultLocale),
                    n(e);
                }
              );
            });
          o.EnginePromise.promises[e] = n;
        }
        function N(e) {
          E(JSON.parse(e));
        }
        function E(e, t) {
          let n = !0;
          for (let r, i = 0; (r = Object.keys(e)[i]); i++) {
            const i = r.split("/");
            (t && t !== i[0]) ||
              ("rules" === i[1]
                ? d.SpeechRuleEngine.getInstance().addStore(e[r])
                : "messages" === i[1]
                ? (0, h.completeLocale)(e[r])
                : (n && (p.generate(i[0]), (n = !1)), e[r].forEach(f[i[1]])));
          }
        }
        function y(e, t) {
          let n = t || 1;
          i.mapsForIE ? E(i.mapsForIE, e) : n <= 5 && setTimeout((() => y(e, n++)).bind(this), 300);
        }
        function A(e) {
          const t = a.localePath(e);
          return new Promise((e, n) => {
            c.default.fs.readFile(t, "utf8", (t, r) => {
              if (t) return n(t);
              e(r);
            });
          });
        }
        function _(e) {
          const t = a.localePath(e);
          return new Promise((e, n) => {
            let r = "{}";
            try {
              r = c.default.fs.readFileSync(t, "utf8");
            } catch (e) {
              return n(e);
            }
            e(r);
          });
        }
        function C(e) {
          let t = a.localePath(e);
          t = t.replace("//../../es5/", `chrome-extension://${chrome.runtime.id}/mathjax/`);
          const n = new XMLHttpRequest();
          return new Promise((e, r) => {
            (n.onreadystatechange = function () {
              if (4 === n.readyState) {
                const t = n.status;
                0 === t || (t >= 200 && t < 400) ? e(n.responseText) : r(t);
              }
            }),
              n.open("GET", t, !0),
              n.send();
          });
        }
        (t.loadLocale = function (e = o.default.getInstance().locale) {
          return r(this, void 0, void 0, function* () {
            return (
              m || (g(l.DynamicCstr.BASE_LOCALE), (m = !0)),
              o.EnginePromise.promises[l.DynamicCstr.BASE_LOCALE].then(() =>
                r(this, void 0, void 0, function* () {
                  const t = o.default.getInstance().defaultLocale;
                  return t
                    ? (g(t),
                      o.EnginePromise.promises[t].then(() =>
                        r(this, void 0, void 0, function* () {
                          return g(e), o.EnginePromise.promises[e];
                        })
                      ))
                    : (g(e), o.EnginePromise.promises[e]);
                })
              )
            );
          });
        }),
          (t.standardLoader = S),
          (t.retrieveFiles = b),
          (t.parseMaps = N),
          (t.loadFile = A),
          (t.loadFileSync = _),
          (t.loadAjax = C);
      },
      3784: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.leftSubscriptBrief =
            t.leftSuperscriptBrief =
            t.leftSubscriptVerbose =
            t.leftSuperscriptVerbose =
            t.baselineBrief =
            t.baselineVerbose =
              void 0);
        const r = n(3269);
        (t.baselineVerbose = function (e) {
          return r.baselineVerbose(e).replace(/-$/, "");
        }),
          (t.baselineBrief = function (e) {
            return r.baselineBrief(e).replace(/-$/, "");
          }),
          (t.leftSuperscriptVerbose = function (e) {
            return r.superscriptVerbose(e).replace(/^exposant/, "exposant gauche");
          }),
          (t.leftSubscriptVerbose = function (e) {
            return r.subscriptVerbose(e).replace(/^indice/, "indice gauche");
          }),
          (t.leftSuperscriptBrief = function (e) {
            return r.superscriptBrief(e).replace(/^sup/, "sup gauche");
          }),
          (t.leftSubscriptBrief = function (e) {
            return r.subscriptBrief(e).replace(/^sub/, "sub gauche");
          });
      },
      4972: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.MathspeakRules = void 0);
        const r = n(8310),
          i = n(931),
          o = n(3784),
          s = n(3269),
          a = n(2110),
          c = n(7278),
          l = n(9771);
        t.MathspeakRules = function () {
          c.addStore(r.DynamicCstr.BASE_LOCALE + ".speech.mathspeak", "", {
            CQFspaceoutNumber: s.spaceoutNumber,
            CQFspaceoutIdentifier: s.spaceoutIdentifier,
            CSFspaceoutText: s.spaceoutText,
            CSFopenFracVerbose: s.openingFractionVerbose,
            CSFcloseFracVerbose: s.closingFractionVerbose,
            CSFoverFracVerbose: s.overFractionVerbose,
            CSFopenFracBrief: s.openingFractionBrief,
            CSFcloseFracBrief: s.closingFractionBrief,
            CSFopenFracSbrief: s.openingFractionSbrief,
            CSFcloseFracSbrief: s.closingFractionSbrief,
            CSFoverFracSbrief: s.overFractionSbrief,
            CSFvulgarFraction: a.vulgarFraction,
            CQFvulgarFractionSmall: s.isSmallVulgarFraction,
            CSFopenRadicalVerbose: s.openingRadicalVerbose,
            CSFcloseRadicalVerbose: s.closingRadicalVerbose,
            CSFindexRadicalVerbose: s.indexRadicalVerbose,
            CSFopenRadicalBrief: s.openingRadicalBrief,
            CSFcloseRadicalBrief: s.closingRadicalBrief,
            CSFindexRadicalBrief: s.indexRadicalBrief,
            CSFopenRadicalSbrief: s.openingRadicalSbrief,
            CSFindexRadicalSbrief: s.indexRadicalSbrief,
            CQFisSmallRoot: s.smallRoot,
            CSFsuperscriptVerbose: s.superscriptVerbose,
            CSFsuperscriptBrief: s.superscriptBrief,
            CSFsubscriptVerbose: s.subscriptVerbose,
            CSFsubscriptBrief: s.subscriptBrief,
            CSFbaselineVerbose: s.baselineVerbose,
            CSFbaselineBrief: s.baselineBrief,
            CSFleftsuperscriptVerbose: s.superscriptVerbose,
            CSFleftsubscriptVerbose: s.subscriptVerbose,
            CSFrightsuperscriptVerbose: s.superscriptVerbose,
            CSFrightsubscriptVerbose: s.subscriptVerbose,
            CSFleftsuperscriptBrief: s.superscriptBrief,
            CSFleftsubscriptBrief: s.subscriptBrief,
            CSFrightsuperscriptBrief: s.superscriptBrief,
            CSFrightsubscriptBrief: s.subscriptBrief,
            CSFunderscript: s.nestedUnderscript,
            CSFoverscript: s.nestedOverscript,
            CSFendscripts: s.endscripts,
            CTFordinalCounter: a.ordinalCounter,
            CTFwordCounter: a.wordCounter,
            CTFcontentIterator: i.contentIterator,
            CQFdetIsSimple: s.determinantIsSimple,
            CSFRemoveParens: s.removeParens,
            CQFresetNesting: s.resetNestingDepth,
            CGFbaselineConstraint: s.generateBaselineConstraint,
            CGFtensorRules: s.generateTensorRules
          }),
            c.addStore("es.speech.mathspeak", r.DynamicCstr.BASE_LOCALE + ".speech.mathspeak", {
              CTFunitMultipliers: l.unitMultipliers,
              CQFoneLeft: l.oneLeft
            }),
            c.addStore("fr.speech.mathspeak", r.DynamicCstr.BASE_LOCALE + ".speech.mathspeak", {
              CSFbaselineVerbose: o.baselineVerbose,
              CSFbaselineBrief: o.baselineBrief,
              CSFleftsuperscriptVerbose: o.leftSuperscriptVerbose,
              CSFleftsubscriptVerbose: o.leftSubscriptVerbose,
              CSFleftsuperscriptBrief: o.leftSuperscriptBrief,
              CSFleftsubscriptBrief: o.leftSubscriptBrief
            });
        };
      },
      3269: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.smallRoot =
            t.generateTensorRules =
            t.removeParens =
            t.generateBaselineConstraint =
            t.determinantIsSimple =
            t.nestedOverscript =
            t.endscripts =
            t.overscoreNestingDepth =
            t.nestedUnderscript =
            t.underscoreNestingDepth =
            t.indexRadicalSbrief =
            t.openingRadicalSbrief =
            t.indexRadicalBrief =
            t.closingRadicalBrief =
            t.openingRadicalBrief =
            t.indexRadicalVerbose =
            t.closingRadicalVerbose =
            t.openingRadicalVerbose =
            t.getRootIndex =
            t.nestedRadical =
            t.radicalNestingDepth =
            t.baselineBrief =
            t.baselineVerbose =
            t.superscriptBrief =
            t.superscriptVerbose =
            t.subscriptBrief =
            t.subscriptVerbose =
            t.nestedSubSuper =
            t.isSmallVulgarFraction =
            t.overFractionSbrief =
            t.closingFractionSbrief =
            t.openingFractionSbrief =
            t.closingFractionBrief =
            t.openingFractionBrief =
            t.overFractionVerbose =
            t.closingFractionVerbose =
            t.openingFractionVerbose =
            t.nestedFraction =
            t.fractionNestingDepth =
            t.computeNestingDepth_ =
            t.containsAttr =
            t.getNestingDepth =
            t.resetNestingDepth =
            t.nestingBarriers =
            t.spaceoutIdentifier =
            t.spaceoutNumber =
            t.spaceoutNodes =
            t.spaceoutText =
              void 0);
        const r = n(1426),
          i = n(6671),
          o = n(5024),
          s = n(4524),
          a = n(7793);
        let c = {};
        function l(e, t) {
          const n = Array.from(e.textContent),
            r = [],
            i = a.default.getInstance(),
            o = e.ownerDocument;
          for (let e, s = 0; (e = n[s]); s++) {
            const n = i.getNodeFactory().makeLeafNode(e, "unknown"),
              s = i.identifierNode(n, "unknown", "");
            t(s), r.push(s.xml(o));
          }
          return r;
        }
        function u(e, n, o, s, a, l) {
          (s = s || t.nestingBarriers),
            (a = a || {}),
            (l =
              l ||
              function (e) {
                return !1;
              });
          const u = i.serializeXml(n);
          if ((c[e] || (c[e] = {}), c[e][u])) return c[e][u];
          if (l(n) || o.indexOf(n.tagName) < 0) return 0;
          const d = h(n, o, r.setdifference(s, o), a, l, 0);
          return (c[e][u] = d), d;
        }
        function d(e, t) {
          if (!e.attributes) return !1;
          const n = i.toArray(e.attributes);
          for (let e, r = 0; (e = n[r]); r++) if (t[e.nodeName] === e.nodeValue) return !0;
          return !1;
        }
        function h(e, t, n, r, o, s) {
          if (o(e) || n.indexOf(e.tagName) > -1 || d(e, r)) return s;
          if ((t.indexOf(e.tagName) > -1 && s++, !e.childNodes || 0 === e.childNodes.length)) return s;
          const a = i.toArray(e.childNodes);
          return Math.max.apply(
            null,
            a.map(function (e) {
              return h(e, t, n, r, o, s);
            })
          );
        }
        function p(e) {
          return u("fraction", e, ["fraction"], t.nestingBarriers, {}, s.LOCALE.FUNCTIONS.fracNestDepth);
        }
        function f(e, t, n) {
          const r = p(e),
            i = Array(r).fill(t);
          return n && i.push(n), i.join(s.LOCALE.MESSAGES.regexp.JOINER_FRAC);
        }
        function m(e, t, n) {
          for (; e.parentNode; ) {
            const r = e.parentNode,
              i = r.parentNode;
            if (!i) break;
            const o = e.getAttribute && e.getAttribute("role");
            (("subscript" === i.tagName && e === r.childNodes[1]) ||
              ("tensor" === i.tagName && o && ("leftsub" === o || "rightsub" === o))) &&
              (t = n.sub + s.LOCALE.MESSAGES.regexp.JOINER_SUBSUPER + t),
              (("superscript" === i.tagName && e === r.childNodes[1]) ||
                ("tensor" === i.tagName && o && ("leftsuper" === o || "rightsuper" === o))) &&
                (t = n.sup + s.LOCALE.MESSAGES.regexp.JOINER_SUBSUPER + t),
              (e = i);
          }
          return t.trim();
        }
        function g(e) {
          return u("radical", e, ["sqrt", "root"], t.nestingBarriers, {});
        }
        function S(e, t, n) {
          const r = g(e),
            i = b(e);
          return (
            (n = i ? s.LOCALE.FUNCTIONS.combineRootIndex(n, i) : n),
            1 === r ? n : s.LOCALE.FUNCTIONS.combineNestedRadical(t, s.LOCALE.FUNCTIONS.radicalNestDepth(r - 1), n)
          );
        }
        function b(e) {
          const t = "sqrt" === e.tagName ? "2" : o.evalXPath("children/*[1]", e)[0].textContent.trim();
          return s.LOCALE.MESSAGES.MSroots[t] || "";
        }
        function N(e) {
          return u("underscore", e, ["underscore"], t.nestingBarriers, {}, function (e) {
            return e.tagName && "underscore" === e.tagName && "underaccent" === e.childNodes[0].childNodes[1].getAttribute("role");
          });
        }
        function E(e) {
          return u("overscore", e, ["overscore"], t.nestingBarriers, {}, function (e) {
            return e.tagName && "overscore" === e.tagName && "overaccent" === e.childNodes[0].childNodes[1].getAttribute("role");
          });
        }
        (t.spaceoutText = function (e) {
          return Array.from(e.textContent).join(" ");
        }),
          (t.spaceoutNodes = l),
          (t.spaceoutNumber = function (e) {
            return l(e, function (e) {
              e.textContent.match(/\W/) || (e.type = "number");
            });
          }),
          (t.spaceoutIdentifier = function (e) {
            return l(e, function (e) {
              (e.font = "unknown"), (e.type = "identifier");
            });
          }),
          (t.nestingBarriers = [
            "cases",
            "cell",
            "integral",
            "line",
            "matrix",
            "multiline",
            "overscore",
            "root",
            "row",
            "sqrt",
            "subscript",
            "superscript",
            "table",
            "underscore",
            "vector"
          ]),
          (t.resetNestingDepth = function (e) {
            return (c = {}), [e];
          }),
          (t.getNestingDepth = u),
          (t.containsAttr = d),
          (t.computeNestingDepth_ = h),
          (t.fractionNestingDepth = p),
          (t.nestedFraction = f),
          (t.openingFractionVerbose = function (e) {
            return f(e, s.LOCALE.MESSAGES.MS.START, s.LOCALE.MESSAGES.MS.FRAC_V);
          }),
          (t.closingFractionVerbose = function (e) {
            return f(e, s.LOCALE.MESSAGES.MS.END, s.LOCALE.MESSAGES.MS.FRAC_V);
          }),
          (t.overFractionVerbose = function (e) {
            return f(e, s.LOCALE.MESSAGES.MS.FRAC_OVER);
          }),
          (t.openingFractionBrief = function (e) {
            return f(e, s.LOCALE.MESSAGES.MS.START, s.LOCALE.MESSAGES.MS.FRAC_B);
          }),
          (t.closingFractionBrief = function (e) {
            return f(e, s.LOCALE.MESSAGES.MS.END, s.LOCALE.MESSAGES.MS.FRAC_B);
          }),
          (t.openingFractionSbrief = function (e) {
            const t = p(e);
            return 1 === t
              ? s.LOCALE.MESSAGES.MS.FRAC_S
              : s.LOCALE.FUNCTIONS.combineNestedFraction(
                  s.LOCALE.MESSAGES.MS.NEST_FRAC,
                  s.LOCALE.FUNCTIONS.radicalNestDepth(t - 1),
                  s.LOCALE.MESSAGES.MS.FRAC_S
                );
          }),
          (t.closingFractionSbrief = function (e) {
            const t = p(e);
            return 1 === t
              ? s.LOCALE.MESSAGES.MS.ENDFRAC
              : s.LOCALE.FUNCTIONS.combineNestedFraction(
                  s.LOCALE.MESSAGES.MS.NEST_FRAC,
                  s.LOCALE.FUNCTIONS.radicalNestDepth(t - 1),
                  s.LOCALE.MESSAGES.MS.ENDFRAC
                );
          }),
          (t.overFractionSbrief = function (e) {
            const t = p(e);
            return 1 === t
              ? s.LOCALE.MESSAGES.MS.FRAC_OVER
              : s.LOCALE.FUNCTIONS.combineNestedFraction(
                  s.LOCALE.MESSAGES.MS.NEST_FRAC,
                  s.LOCALE.FUNCTIONS.radicalNestDepth(t - 1),
                  s.LOCALE.MESSAGES.MS.FRAC_OVER
                );
          }),
          (t.isSmallVulgarFraction = function (e) {
            return s.LOCALE.FUNCTIONS.fracNestDepth(e) ? [e] : [];
          }),
          (t.nestedSubSuper = m),
          (t.subscriptVerbose = function (e) {
            return m(e, s.LOCALE.MESSAGES.MS.SUBSCRIPT, { sup: s.LOCALE.MESSAGES.MS.SUPER, sub: s.LOCALE.MESSAGES.MS.SUB });
          }),
          (t.subscriptBrief = function (e) {
            return m(e, s.LOCALE.MESSAGES.MS.SUB, { sup: s.LOCALE.MESSAGES.MS.SUP, sub: s.LOCALE.MESSAGES.MS.SUB });
          }),
          (t.superscriptVerbose = function (e) {
            return m(e, s.LOCALE.MESSAGES.MS.SUPERSCRIPT, { sup: s.LOCALE.MESSAGES.MS.SUPER, sub: s.LOCALE.MESSAGES.MS.SUB });
          }),
          (t.superscriptBrief = function (e) {
            return m(e, s.LOCALE.MESSAGES.MS.SUP, { sup: s.LOCALE.MESSAGES.MS.SUP, sub: s.LOCALE.MESSAGES.MS.SUB });
          }),
          (t.baselineVerbose = function (e) {
            const t = m(e, "", { sup: s.LOCALE.MESSAGES.MS.SUPER, sub: s.LOCALE.MESSAGES.MS.SUB });
            return t
              ? t
                  .replace(new RegExp(s.LOCALE.MESSAGES.MS.SUB + "$"), s.LOCALE.MESSAGES.MS.SUBSCRIPT)
                  .replace(new RegExp(s.LOCALE.MESSAGES.MS.SUPER + "$"), s.LOCALE.MESSAGES.MS.SUPERSCRIPT)
              : s.LOCALE.MESSAGES.MS.BASELINE;
          }),
          (t.baselineBrief = function (e) {
            return m(e, "", { sup: s.LOCALE.MESSAGES.MS.SUP, sub: s.LOCALE.MESSAGES.MS.SUB }) || s.LOCALE.MESSAGES.MS.BASE;
          }),
          (t.radicalNestingDepth = g),
          (t.nestedRadical = S),
          (t.getRootIndex = b),
          (t.openingRadicalVerbose = function (e) {
            return S(e, s.LOCALE.MESSAGES.MS.NESTED, s.LOCALE.MESSAGES.MS.STARTROOT);
          }),
          (t.closingRadicalVerbose = function (e) {
            return S(e, s.LOCALE.MESSAGES.MS.NESTED, s.LOCALE.MESSAGES.MS.ENDROOT);
          }),
          (t.indexRadicalVerbose = function (e) {
            return S(e, s.LOCALE.MESSAGES.MS.NESTED, s.LOCALE.MESSAGES.MS.ROOTINDEX);
          }),
          (t.openingRadicalBrief = function (e) {
            return S(e, s.LOCALE.MESSAGES.MS.NEST_ROOT, s.LOCALE.MESSAGES.MS.STARTROOT);
          }),
          (t.closingRadicalBrief = function (e) {
            return S(e, s.LOCALE.MESSAGES.MS.NEST_ROOT, s.LOCALE.MESSAGES.MS.ENDROOT);
          }),
          (t.indexRadicalBrief = function (e) {
            return S(e, s.LOCALE.MESSAGES.MS.NEST_ROOT, s.LOCALE.MESSAGES.MS.ROOTINDEX);
          }),
          (t.openingRadicalSbrief = function (e) {
            return S(e, s.LOCALE.MESSAGES.MS.NEST_ROOT, s.LOCALE.MESSAGES.MS.ROOT);
          }),
          (t.indexRadicalSbrief = function (e) {
            return S(e, s.LOCALE.MESSAGES.MS.NEST_ROOT, s.LOCALE.MESSAGES.MS.INDEX);
          }),
          (t.underscoreNestingDepth = N),
          (t.nestedUnderscript = function (e) {
            const t = N(e);
            return Array(t).join(s.LOCALE.MESSAGES.MS.UNDER) + s.LOCALE.MESSAGES.MS.UNDERSCRIPT;
          }),
          (t.overscoreNestingDepth = E),
          (t.endscripts = function (e) {
            return s.LOCALE.MESSAGES.MS.ENDSCRIPTS;
          }),
          (t.nestedOverscript = function (e) {
            const t = E(e);
            return Array(t).join(s.LOCALE.MESSAGES.MS.OVER) + s.LOCALE.MESSAGES.MS.OVERSCRIPT;
          }),
          (t.determinantIsSimple = function (e) {
            if ("matrix" !== e.tagName || "determinant" !== e.getAttribute("role")) return [];
            const t = o.evalXPath("children/row/children/cell/children/*", e);
            for (let e, n = 0; (e = t[n]); n++)
              if ("number" !== e.tagName) {
                if ("identifier" === e.tagName) {
                  const t = e.getAttribute("role");
                  if ("latinletter" === t || "greekletter" === t || "otherletter" === t) continue;
                }
                return [];
              }
            return [e];
          }),
          (t.generateBaselineConstraint = function () {
            const e = (e) => e.map((e) => "ancestor::" + e),
              t = (e) => "not(" + e + ")",
              n = t(e(["subscript", "superscript", "tensor"]).join(" or ")),
              r = e(["relseq", "multrel"]),
              i = e(["fraction", "punctuation", "fenced", "sqrt", "root"]);
            let o = [];
            for (let e, t = 0; (e = i[t]); t++)
              o = o.concat(
                r.map(function (t) {
                  return e + "/" + t;
                })
              );
            return [["ancestor::*/following-sibling::*", n, t(o.join(" | "))].join(" and ")];
          }),
          (t.removeParens = function (e) {
            if (!e.childNodes.length || !e.childNodes[0].childNodes.length || !e.childNodes[0].childNodes[0].childNodes.length) return "";
            const t = e.childNodes[0].childNodes[0].childNodes[0].textContent;
            return t.match(/^\(.+\)$/) ? t.slice(1, -1) : t;
          });
        const y = new Map([
            [3, "CSFleftsuperscript"],
            [4, "CSFleftsubscript"],
            [2, "CSFbaseline"],
            [1, "CSFrightsubscript"],
            [0, "CSFrightsuperscript"]
          ]),
          A = new Map([
            [4, 2],
            [3, 3],
            [2, 1],
            [1, 4],
            [0, 5]
          ]);
        function _(e) {
          const t = [];
          let n = "",
            r = "",
            i = parseInt(e, 2);
          for (let e = 0; e < 5; e++) {
            const o = "children/*[" + A.get(e) + "]";
            if (1 & i) {
              const t = y.get(e % 5);
              (n = "[t] " + t + "Verbose; [n] " + o + ";" + n), (r = "[t] " + t + "Brief; [n] " + o + ";" + r);
            } else t.unshift("name(" + o + ')="empty"');
            i >>= 1;
          }
          return [t, n, r];
        }
        (t.generateTensorRules = function (e, t = !0) {
          const n = ["11111", "11110", "11101", "11100", "10111", "10110", "10101", "10100", "01111", "01110", "01101", "01100"];
          for (let r, i = 0; (r = n[i]); i++) {
            let n = "tensor" + r,
              [i, o, s] = _(r);
            e.defineRule(n, "default", o, "self::tensor", ...i),
              t && (e.defineRule(n, "brief", s, "self::tensor", ...i), e.defineRule(n, "sbrief", s, "self::tensor", ...i));
            const a = y.get(2);
            (o += "; [t]" + a + "Verbose"), (s += "; [t]" + a + "Brief"), (n += "-baseline");
            const c =
              "((.//*[not(*)])[last()]/@id)!=(((.//ancestor::fraction|ancestor::root|ancestor::sqrt|ancestor::cell|ancestor::line|ancestor::stree)[1]//*[not(*)])[last()]/@id)";
            e.defineRule(n, "default", o, "self::tensor", c, ...i),
              t && (e.defineRule(n, "brief", s, "self::tensor", c, ...i), e.defineRule(n, "sbrief", s, "self::tensor", c, ...i));
          }
        }),
          (t.smallRoot = function (e) {
            let t = Object.keys(s.LOCALE.MESSAGES.MSroots).length;
            if (!t) return [];
            if ((t++, !e.childNodes || 0 === e.childNodes.length || !e.childNodes[0].childNodes)) return [];
            const n = e.childNodes[0].childNodes[0].textContent;
            if (!/^\d+$/.test(n)) return [];
            const r = parseInt(n, 10);
            return r > 1 && r <= t ? [e] : [];
          });
      },
      9570: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.implicitIterator =
            t.relationIterator =
            t.propagateNumber =
            t.checkParent_ =
            t.NUMBER_INHIBITORS_ =
            t.NUMBER_PROPAGATORS_ =
            t.enlargeFence =
            t.indexRadical =
            t.closingRadical =
            t.openingRadical =
            t.radicalNestingDepth =
            t.nestedRadical =
            t.overBevelledFraction =
            t.overFraction =
            t.closingFraction =
            t.openingFraction =
              void 0);
        const r = n(4148),
          i = n(6671),
          o = n(5024),
          s = n(1058),
          a = n(4886),
          c = n(4036),
          l = n(241),
          u = n(4524),
          d = n(3269);
        function h(e, t) {
          const n = p(e);
          return 1 === n ? t : new Array(n).join(u.LOCALE.MESSAGES.MS.NESTED) + t;
        }
        function p(e, t) {
          const n = t || 0;
          return e.parentNode ? p(e.parentNode, "root" === e.tagName || "sqrt" === e.tagName ? n + 1 : n) : n;
        }
        function f(e) {
          const t = "⠠";
          if (1 === e.length) return t + e;
          const n = e.split("");
          return n.every(function (e) {
            return "⠳" === e;
          })
            ? t + n.join(t)
            : e.slice(0, -1) + t + e.slice(-1);
        }
        function m(e, n) {
          const r = e.parent;
          if (!r) return !1;
          const i = r.type;
          return (
            -1 !== t.NUMBER_PROPAGATORS_.indexOf(i) ||
            ("prefixop" === i && "negative" === r.role && !n.script) ||
            ("prefixop" === i && "geometry" === r.role) ||
            !("punctuated" !== i || (n.enclosed && "text" !== r.role))
          );
        }
        function g(e, n) {
          return e.childNodes.length
            ? (-1 !== t.NUMBER_INHIBITORS_.indexOf(e.type) && (n.script = !0),
              "fenced" === e.type
                ? ((n.number = !1), (n.enclosed = !0), ["", n])
                : (m(e, n) && ((n.number = !0), (n.enclosed = !1)), ["", n]))
            : (m(e, n) && ((n.number = !0), (n.script = !1), (n.enclosed = !1)),
              [n.number ? "number" : "", { number: !1, enclosed: n.enclosed, script: n.script }]);
        }
        (t.openingFraction = function (e) {
          const t = d.fractionNestingDepth(e);
          return new Array(t).join(u.LOCALE.MESSAGES.MS.FRACTION_REPEAT) + u.LOCALE.MESSAGES.MS.FRACTION_START;
        }),
          (t.closingFraction = function (e) {
            const t = d.fractionNestingDepth(e);
            return new Array(t).join(u.LOCALE.MESSAGES.MS.FRACTION_REPEAT) + u.LOCALE.MESSAGES.MS.FRACTION_END;
          }),
          (t.overFraction = function (e) {
            const t = d.fractionNestingDepth(e);
            return new Array(t).join(u.LOCALE.MESSAGES.MS.FRACTION_REPEAT) + u.LOCALE.MESSAGES.MS.FRACTION_OVER;
          }),
          (t.overBevelledFraction = function (e) {
            const t = d.fractionNestingDepth(e);
            return new Array(t).join(u.LOCALE.MESSAGES.MS.FRACTION_REPEAT) + "⠸" + u.LOCALE.MESSAGES.MS.FRACTION_OVER;
          }),
          (t.nestedRadical = h),
          (t.radicalNestingDepth = p),
          (t.openingRadical = function (e) {
            return h(e, u.LOCALE.MESSAGES.MS.STARTROOT);
          }),
          (t.closingRadical = function (e) {
            return h(e, u.LOCALE.MESSAGES.MS.ENDROOT);
          }),
          (t.indexRadical = function (e) {
            return h(e, u.LOCALE.MESSAGES.MS.ROOTINDEX);
          }),
          (t.enlargeFence = f),
          s.Grammar.getInstance().setCorrection("enlargeFence", f),
          (t.NUMBER_PROPAGATORS_ = ["multirel", "relseq", "appl", "row", "line"]),
          (t.NUMBER_INHIBITORS_ = ["subscript", "superscript", "overscore", "underscore"]),
          (t.checkParent_ = m),
          (t.propagateNumber = g),
          (0, c.register)(new l.SemanticVisitor("nemeth", "number", g, { number: !0 })),
          (t.relationIterator = function (e, t) {
            const n = e.slice(0);
            let s,
              c = !0;
            return (
              (s = e.length > 0 ? o.evalXPath("../../content/*", e[0]) : []),
              function () {
                const e = s.shift(),
                  o = n.shift(),
                  l = n[0],
                  h = t ? [r.AuditoryDescription.create({ text: t }, { translate: !0 })] : [];
                if (!e) return h;
                const p = o ? d.nestedSubSuper(o, "", { sup: u.LOCALE.MESSAGES.MS.SUPER, sub: u.LOCALE.MESSAGES.MS.SUB }) : "",
                  f =
                    (o && "EMPTY" !== i.tagName(o)) || (c && e.parentNode.parentNode && e.parentNode.parentNode.previousSibling)
                      ? [r.AuditoryDescription.create({ text: "⠀" + p }, {})]
                      : [],
                  m =
                    (l && "EMPTY" !== i.tagName(l)) || (!s.length && e.parentNode.parentNode && e.parentNode.parentNode.nextSibling)
                      ? [r.AuditoryDescription.create({ text: "⠀" }, {})]
                      : [],
                  g = a.default.evaluateNode(e);
                return (c = !1), h.concat(f, g, m);
              }
            );
          }),
          (t.implicitIterator = function (e, t) {
            const n = e.slice(0);
            let s;
            return (
              (s = e.length > 0 ? o.evalXPath("../../content/*", e[0]) : []),
              function () {
                const e = n.shift(),
                  o = n[0],
                  a = s.shift(),
                  c = t ? [r.AuditoryDescription.create({ text: t }, { translate: !0 })] : [];
                if (!a) return c;
                const l = e && "NUMBER" === i.tagName(e),
                  u = o && "NUMBER" === i.tagName(o);
                return c.concat(l && u && "space" === a.getAttribute("role") ? [r.AuditoryDescription.create({ text: "⠀" }, {})] : []);
              }
            );
          });
      },
      2110: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ordinalPosition = t.vulgarFraction = t.wordCounter = t.ordinalCounter = void 0);
        const r = n(1930),
          i = n(6671),
          o = n(4524),
          s = n(9385);
        (t.ordinalCounter = function (e, t) {
          let n = 0;
          return function () {
            return o.LOCALE.NUMBERS.numericOrdinal(++n) + " " + t;
          };
        }),
          (t.wordCounter = function (e, t) {
            let n = 0;
            return function () {
              return o.LOCALE.NUMBERS.numberToOrdinal(++n, !1) + " " + t;
            };
          }),
          (t.vulgarFraction = function (e) {
            const t = (0, s.convertVulgarFraction)(e, o.LOCALE.MESSAGES.MS.FRAC_OVER);
            return t.convertible && t.enumerator && t.denominator
              ? [
                  new r.Span(o.LOCALE.NUMBERS.numberToWords(t.enumerator), {
                    extid: e.childNodes[0].childNodes[0].getAttribute("extid"),
                    separator: ""
                  }),
                  new r.Span(o.LOCALE.NUMBERS.vulgarSep, { separator: "" }),
                  new r.Span(o.LOCALE.NUMBERS.numberToOrdinal(t.denominator, 1 !== t.enumerator), {
                    extid: e.childNodes[0].childNodes[1].getAttribute("extid")
                  })
                ]
              : [new r.Span(t.content || "", { extid: e.getAttribute("extid") })];
          }),
          (t.ordinalPosition = function (e) {
            const t = i.toArray(e.parentNode.childNodes);
            return o.LOCALE.NUMBERS.numericOrdinal(t.indexOf(e) + 1).toString();
          });
      },
      3724: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.BrailleRules = t.OtherRules = t.PrefixRules = void 0);
        const r = n(8310),
          i = n(931),
          o = n(3269),
          s = n(9570),
          a = n(2110),
          c = n(7278);
        (t.PrefixRules = function () {
          c.addStore("en.prefix.default", "", { CSFordinalPosition: a.ordinalPosition });
        }),
          (t.OtherRules = function () {
            c.addStore("en.speech.chromevox", "", { CTFnodeCounter: i.nodeCounter, CTFcontentIterator: i.contentIterator }),
              c.addStore("en.speech.emacspeak", "en.speech.chromevox", {
                CQFvulgarFractionSmall: o.isSmallVulgarFraction,
                CSFvulgarFraction: a.vulgarFraction
              });
          }),
          (t.BrailleRules = function () {
            c.addStore("nemeth.braille.default", r.DynamicCstr.BASE_LOCALE + ".speech.mathspeak", {
              CSFopenFraction: s.openingFraction,
              CSFcloseFraction: s.closingFraction,
              CSFoverFraction: s.overFraction,
              CSFoverBevFraction: s.overBevelledFraction,
              CSFopenRadical: s.openingRadical,
              CSFcloseRadical: s.closingRadical,
              CSFindexRadical: s.indexRadical,
              CSFsubscript: o.subscriptVerbose,
              CSFsuperscript: o.superscriptVerbose,
              CSFbaseline: o.baselineVerbose,
              CGFtensorRules: (e) => o.generateTensorRules(e, !1),
              CTFrelationIterator: s.relationIterator,
              CTFimplicitIterator: s.implicitIterator
            });
          });
      },
      9805: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.init = t.INIT_ = void 0);
        const r = n(127),
          i = n(4972),
          o = n(3724);
        (t.INIT_ = !1),
          (t.init = function () {
            t.INIT_ ||
              ((0, i.MathspeakRules)(),
              (0, r.ClearspeakRules)(),
              (0, o.PrefixRules)(),
              (0, o.OtherRules)(),
              (0, o.BrailleRules)(),
              (t.INIT_ = !0));
          });
      },
      7278: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.getStore = t.addStore = t.funcStore = void 0);
        const r = n(8310);
        (t.funcStore = new Map()),
          (t.addStore = function (e, n, r) {
            const i = {};
            if (n) {
              const e = t.funcStore.get(n) || {};
              Object.assign(i, e);
            }
            t.funcStore.set(e, Object.assign(i, r));
          }),
          (t.getStore = function (e, n, i) {
            return (
              t.funcStore.get([e, n, i].join(".")) ||
              t.funcStore.get([r.DynamicCstr.DEFAULT_VALUES[r.Axis.LOCALE], n, i].join(".")) ||
              t.funcStore.get([r.DynamicCstr.BASE_LOCALE, n, i].join(".")) ||
              {}
            );
          });
      },
      9771: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.oneLeft = t.leftMostUnit = t.rightMostUnit = t.unitMultipliers = void 0);
        const r = n(4148),
          i = n(5024),
          o = n(4524);
        t.unitMultipliers = function (e, t) {
          const n = e;
          let i = 0;
          return function () {
            const e = r.AuditoryDescription.create({ text: a(n[i]) && c(n[i + 1]) ? o.LOCALE.MESSAGES.unitTimes : "" }, {});
            return i++, [e];
          };
        };
        const s = ["superscript", "subscript", "overscore", "underscore"];
        function a(e) {
          for (; e; ) {
            if ("unit" === e.getAttribute("role")) return !0;
            const t = e.tagName,
              n = i.evalXPath("children/*", e);
            e = -1 !== s.indexOf(t) ? n[0] : n[n.length - 1];
          }
          return !1;
        }
        function c(e) {
          for (; e; ) {
            if ("unit" === e.getAttribute("role")) return !0;
            e = i.evalXPath("children/*", e)[0];
          }
          return !1;
        }
        (t.rightMostUnit = a),
          (t.leftMostUnit = c),
          (t.oneLeft = function (e) {
            for (; e; ) {
              if ("number" === e.tagName && "1" === e.textContent) return [e];
              if ("infixop" !== e.tagName || ("multiplication" !== e.getAttribute("role") && "implicit" !== e.getAttribute("role")))
                return [];
              e = i.evalXPath("children/*", e)[0];
            }
            return [];
          });
      },
      4660: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.AbstractWalker = void 0);
        const r = n(4148),
          i = n(4253),
          o = n(6671),
          s = n(4998),
          a = n(985),
          c = n(6988),
          l = n(8171),
          u = n(4524),
          d = n(1058),
          h = n(7984),
          p = n(7317),
          f = n(144),
          m = n(3955),
          g = n(5658),
          S = n(1848),
          b = n(8119),
          N = n(8835),
          E = n(5024);
        class y {
          constructor(e, t, n, r) {
            (this.node = e),
              (this.generator = t),
              (this.highlighter = n),
              (this.modifier = !1),
              (this.keyMapping = new Map([
                [c.KeyCode.UP, this.up.bind(this)],
                [c.KeyCode.DOWN, this.down.bind(this)],
                [c.KeyCode.RIGHT, this.right.bind(this)],
                [c.KeyCode.LEFT, this.left.bind(this)],
                [c.KeyCode.TAB, this.repeat.bind(this)],
                [c.KeyCode.DASH, this.expand.bind(this)],
                [c.KeyCode.SPACE, this.depth.bind(this)],
                [c.KeyCode.HOME, this.home.bind(this)],
                [c.KeyCode.X, this.summary.bind(this)],
                [c.KeyCode.Z, this.detail.bind(this)],
                [c.KeyCode.V, this.virtualize.bind(this)],
                [c.KeyCode.P, this.previous.bind(this)],
                [c.KeyCode.U, this.undo.bind(this)],
                [c.KeyCode.LESS, this.previousRules.bind(this)],
                [c.KeyCode.GREATER, this.nextRules.bind(this)]
              ])),
              (this.cursors = []),
              (this.xml_ = null),
              (this.rebuilt_ = null),
              (this.focus_ = null),
              (this.active_ = !1),
              this.node.id
                ? (this.id = this.node.id)
                : this.node.hasAttribute(y.SRE_ID_ATTR)
                ? (this.id = this.node.getAttribute(y.SRE_ID_ATTR))
                : (this.node.setAttribute(y.SRE_ID_ATTR, y.ID_COUNTER.toString()), (this.id = y.ID_COUNTER++)),
              (this.rootNode = N.getSemanticRoot(e)),
              (this.rootId = this.rootNode.getAttribute(l.Attribute.ID)),
              (this.xmlString_ = r),
              (this.moved = b.WalkerMoves.ENTER);
          }
          getXml() {
            return this.xml_ || (this.xml_ = o.parseInput(this.xmlString_)), this.xml_;
          }
          getRebuilt() {
            return this.rebuilt_ || this.rebuildStree(), this.rebuilt_;
          }
          isActive() {
            return this.active_;
          }
          activate() {
            this.isActive() || (this.generator.start(), this.toggleActive_());
          }
          deactivate() {
            this.isActive() && (b.WalkerState.setState(this.id, this.primaryId()), this.generator.end(), this.toggleActive_());
          }
          getFocus(e = !1) {
            return this.focus_ || (this.focus_ = this.singletonFocus(this.rootId)), e && this.updateFocus(), this.focus_;
          }
          setFocus(e) {
            this.focus_ = e;
          }
          getDepth() {
            return this.levels.depth() - 1;
          }
          isSpeech() {
            return this.generator.modality === l.Attribute.SPEECH;
          }
          focusDomNodes() {
            return this.getFocus().getDomNodes();
          }
          focusSemanticNodes() {
            return this.getFocus().getSemanticNodes();
          }
          speech() {
            const e = this.focusDomNodes();
            if (!e.length) return "";
            const t = this.specialMove();
            if (null !== t) return t;
            switch (this.moved) {
              case b.WalkerMoves.DEPTH:
                return this.depth_();
              case b.WalkerMoves.SUMMARY:
                return this.summary_();
              case b.WalkerMoves.DETAIL:
                return this.detail_();
              default: {
                const t = [],
                  n = this.focusSemanticNodes();
                for (let r = 0, i = e.length; r < i; r++) {
                  const i = e[r],
                    o = n[r];
                  t.push(i ? this.generator.getSpeech(i, this.getXml()) : f.recomputeMarkup(o));
                }
                return this.mergePrefix_(t);
              }
            }
          }
          move(e) {
            const t = this.keyMapping.get(e);
            if (!t) return null;
            const n = t();
            return (
              !(!n || n === this.getFocus()) &&
              (this.setFocus(n), this.moved === b.WalkerMoves.HOME && (this.levels = this.initLevels()), !0)
            );
          }
          up() {
            return (this.moved = b.WalkerMoves.UP), this.getFocus();
          }
          down() {
            return (this.moved = b.WalkerMoves.DOWN), this.getFocus();
          }
          left() {
            return (this.moved = b.WalkerMoves.LEFT), this.getFocus();
          }
          right() {
            return (this.moved = b.WalkerMoves.RIGHT), this.getFocus();
          }
          repeat() {
            return (this.moved = b.WalkerMoves.REPEAT), this.getFocus().clone();
          }
          depth() {
            return (this.moved = this.isSpeech() ? b.WalkerMoves.DEPTH : b.WalkerMoves.REPEAT), this.getFocus().clone();
          }
          home() {
            this.moved = b.WalkerMoves.HOME;
            return this.singletonFocus(this.rootId);
          }
          getBySemanticId(e) {
            return N.getBySemanticId(this.node, e);
          }
          primaryId() {
            return this.getFocus().getSemanticPrimary().id.toString();
          }
          expand() {
            const e = this.getFocus().getDomPrimary(),
              t = this.actionable_(e);
            return t
              ? ((this.moved = b.WalkerMoves.EXPAND), t.dispatchEvent(new Event("click")), this.getFocus().clone())
              : this.getFocus();
          }
          expandable(e) {
            return !!this.actionable_(e) && 0 === e.childNodes.length;
          }
          collapsible(e) {
            return !!this.actionable_(e) && e.childNodes.length > 0;
          }
          restoreState() {
            if (!this.highlighter) return;
            const e = b.WalkerState.getState(this.id);
            if (!e) return;
            let t = this.getRebuilt().nodeDict[e];
            const n = [];
            for (; t; ) n.push(t.id), (t = t.parent);
            for (n.pop(); n.length > 0; ) {
              this.down();
              const e = n.pop(),
                t = this.findFocusOnLevel(e);
              if (!t) break;
              this.setFocus(t);
            }
            this.moved = b.WalkerMoves.ENTER;
          }
          updateFocus() {
            this.setFocus(
              g.Focus.factory(
                this.getFocus().getSemanticPrimary().id.toString(),
                this.getFocus()
                  .getSemanticNodes()
                  .map((e) => e.id.toString()),
                this.getRebuilt(),
                this.node
              )
            );
          }
          rebuildStree() {
            (this.rebuilt_ = new S.RebuildStree(this.getXml())),
              (this.rootId = this.rebuilt_.stree.root.id.toString()),
              this.generator.setRebuilt(this.rebuilt_),
              (this.skeleton = h.SemanticSkeleton.fromTree(this.rebuilt_.stree)),
              this.skeleton.populate(),
              (this.focus_ = this.singletonFocus(this.rootId)),
              (this.levels = this.initLevels()),
              f.connectMactions(this.node, this.getXml(), this.rebuilt_.xml);
          }
          previousLevel() {
            const e = this.getFocus().getDomPrimary();
            return e ? N.getAttribute(e, l.Attribute.PARENT) : this.getFocus().getSemanticPrimary().parent.id.toString();
          }
          nextLevel() {
            const e = this.getFocus().getDomPrimary();
            let t, n;
            if (e) {
              (t = N.splitAttribute(N.getAttribute(e, l.Attribute.CHILDREN))),
                (n = N.splitAttribute(N.getAttribute(e, l.Attribute.CONTENT)));
              const r = N.getAttribute(e, l.Attribute.TYPE),
                i = N.getAttribute(e, l.Attribute.ROLE);
              return this.combineContentChildren(r, i, n, t);
            }
            const r = (e) => e.id.toString(),
              i = this.getRebuilt().nodeDict[this.primaryId()];
            return (
              (t = i.childNodes.map(r)),
              (n = i.contentNodes.map(r)),
              0 === t.length ? [] : this.combineContentChildren(i.type, i.role, n, t)
            );
          }
          singletonFocus(e) {
            this.getRebuilt();
            const t = this.retrieveVisuals(e);
            return this.focusFromId(e, t);
          }
          retrieveVisuals(e) {
            if (!this.skeleton) return [e];
            const t = parseInt(e, 10),
              n = this.skeleton.subtreeNodes(t);
            if (!n.length) return [e];
            n.unshift(t);
            const r = {},
              i = [];
            E.updateEvaluator(this.getXml());
            for (const e of n) r[e] || (i.push(e.toString()), (r[e] = !0), this.subtreeIds(e, r));
            return i;
          }
          subtreeIds(e, t) {
            const n = E.evalXPath(`//*[@data-semantic-id="${e}"]`, this.getXml());
            E.evalXPath("*//@data-semantic-id", n[0]).forEach((e) => (t[parseInt(e.textContent, 10)] = !0));
          }
          focusFromId(e, t) {
            return g.Focus.factory(e, t, this.getRebuilt(), this.node);
          }
          summary() {
            return (this.moved = this.isSpeech() ? b.WalkerMoves.SUMMARY : b.WalkerMoves.REPEAT), this.getFocus().clone();
          }
          detail() {
            return (this.moved = this.isSpeech() ? b.WalkerMoves.DETAIL : b.WalkerMoves.REPEAT), this.getFocus().clone();
          }
          specialMove() {
            return null;
          }
          virtualize(e) {
            return (
              this.cursors.push({ focus: this.getFocus(), levels: this.levels, undo: e || !this.cursors.length }),
              (this.levels = this.levels.clone()),
              this.getFocus().clone()
            );
          }
          previous() {
            const e = this.cursors.pop();
            return e ? ((this.levels = e.levels), e.focus) : this.getFocus();
          }
          undo() {
            let e;
            do {
              e = this.cursors.pop();
            } while (e && !e.undo);
            return e ? ((this.levels = e.levels), e.focus) : this.getFocus();
          }
          update(e) {
            this.generator.setOptions(e), (0, a.setup)(e).then(() => p.generator("Tree").getSpeech(this.node, this.getXml()));
          }
          nextRules() {
            const e = this.generator.getOptions();
            return "speech" !== e.modality
              ? this.getFocus()
              : ((s.DOMAIN_TO_STYLES[e.domain] = e.style),
                (e.domain = "mathspeak" === e.domain ? "clearspeak" : "mathspeak"),
                (e.style = s.DOMAIN_TO_STYLES[e.domain]),
                this.update(e),
                (this.moved = b.WalkerMoves.REPEAT),
                this.getFocus().clone());
          }
          nextStyle(e, t) {
            if ("mathspeak" === e) {
              const e = ["default", "brief", "sbrief"],
                n = e.indexOf(t);
              return -1 === n ? t : n >= e.length - 1 ? e[0] : e[n + 1];
            }
            if ("clearspeak" === e) {
              const e = m.ClearspeakPreferences.getLocalePreferences().en;
              if (!e) return "default";
              const n = m.ClearspeakPreferences.relevantPreferences(this.getFocus().getSemanticPrimary()),
                r = m.ClearspeakPreferences.findPreference(t, n),
                i = e[n].map(function (e) {
                  return e.split("_")[1];
                }),
                o = i.indexOf(r);
              if (-1 === o) return t;
              const s = o >= i.length - 1 ? i[0] : i[o + 1];
              return m.ClearspeakPreferences.addPreference(t, n, s);
            }
            return t;
          }
          previousRules() {
            const e = this.generator.getOptions();
            return "speech" !== e.modality
              ? this.getFocus()
              : ((e.style = this.nextStyle(e.domain, e.style)),
                this.update(e),
                (this.moved = b.WalkerMoves.REPEAT),
                this.getFocus().clone());
          }
          refocus() {
            let e,
              t = this.getFocus();
            for (; !t.getNodes().length; ) {
              e = this.levels.peek();
              const n = this.up();
              if (!n) break;
              this.setFocus(n), (t = this.getFocus(!0));
            }
            this.levels.push(e), this.setFocus(t);
          }
          toggleActive_() {
            this.active_ = !this.active_;
          }
          mergePrefix_(e, t = []) {
            const n = this.isSpeech() ? this.prefix_() : "";
            n && e.unshift(n);
            const r = this.isSpeech() ? this.postfix_() : "";
            return r && e.push(r), i.finalize(i.merge(t.concat(e)));
          }
          prefix_() {
            const e = this.getFocus().getDomNodes(),
              t = this.getFocus().getSemanticNodes();
            return e[0] ? N.getAttribute(e[0], l.Attribute.PREFIX) : f.retrievePrefix(t[0]);
          }
          postfix_() {
            const e = this.getFocus().getDomNodes();
            return e[0] ? N.getAttribute(e[0], l.Attribute.POSTFIX) : "";
          }
          depth_() {
            const e = d.Grammar.getInstance().getParameter("depth");
            d.Grammar.getInstance().setParameter("depth", !0);
            const t = this.getFocus().getDomPrimary(),
              n = this.expandable(t)
                ? u.LOCALE.MESSAGES.navigate.EXPANDABLE
                : this.collapsible(t)
                ? u.LOCALE.MESSAGES.navigate.COLLAPSIBLE
                : "",
              o = u.LOCALE.MESSAGES.navigate.LEVEL + " " + this.getDepth(),
              s = this.getFocus().getSemanticNodes(),
              a = f.retrievePrefix(s[0]),
              c = [
                new r.AuditoryDescription({ text: o, personality: {} }),
                new r.AuditoryDescription({ text: a, personality: {} }),
                new r.AuditoryDescription({ text: n, personality: {} })
              ];
            return d.Grammar.getInstance().setParameter("depth", e), i.finalize(i.markup(c));
          }
          actionable_(e) {
            const t = null == e ? void 0 : e.parentNode;
            return t && this.highlighter.isMactionNode(t) ? t : null;
          }
          summary_() {
            const e = this.getFocus().getSemanticPrimary().id.toString(),
              t =
                this.getRebuilt().xml.getAttribute("id") === e
                  ? this.getRebuilt().xml
                  : o.querySelectorAllByAttrValue(this.getRebuilt().xml, "id", e)[0],
              n = f.retrieveSummary(t);
            return this.mergePrefix_([n]);
          }
          detail_() {
            const e = this.getFocus().getSemanticPrimary().id.toString(),
              t =
                this.getRebuilt().xml.getAttribute("id") === e
                  ? this.getRebuilt().xml
                  : o.querySelectorAllByAttrValue(this.getRebuilt().xml, "id", e)[0],
              n = t.getAttribute("alternative");
            t.removeAttribute("alternative");
            const r = f.computeMarkup(t),
              i = this.mergePrefix_([r]);
            return t.setAttribute("alternative", n), i;
          }
        }
        (t.AbstractWalker = y), (y.ID_COUNTER = 0), (y.SRE_ID_ATTR = "sre-explorer-id");
      },
      4296: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.DummyWalker = void 0);
        const r = n(4660);
        class i extends r.AbstractWalker {
          up() {
            return null;
          }
          down() {
            return null;
          }
          left() {
            return null;
          }
          right() {
            return null;
          }
          repeat() {
            return null;
          }
          depth() {
            return null;
          }
          home() {
            return null;
          }
          getDepth() {
            return 0;
          }
          initLevels() {
            return null;
          }
          combineContentChildren(e, t, n, r) {
            return [];
          }
          findFocusOnLevel(e) {
            return null;
          }
        }
        t.DummyWalker = i;
      },
      5658: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Focus = void 0);
        const r = n(8835);
        class i {
          constructor(e, t) {
            (this.nodes = e), (this.primary = t), (this.domNodes = []), (this.domPrimary_ = null), (this.allNodes = []);
          }
          static factory(e, t, n, o) {
            const s = (e) => r.getBySemanticId(o, e),
              a = n.nodeDict,
              c = s(e),
              l = t.map(s),
              u = t.map(function (e) {
                return a[e];
              }),
              d = new i(u, a[e]);
            return (d.domNodes = l), (d.domPrimary_ = c), (d.allNodes = i.generateAllVisibleNodes_(t, l, a, o)), d;
          }
          static generateAllVisibleNodes_(e, t, n, o) {
            const s = (e) => r.getBySemanticId(o, e);
            let a = [];
            for (let r = 0, c = e.length; r < c; r++) {
              if (t[r]) {
                a.push(t[r]);
                continue;
              }
              const c = n[e[r]];
              if (!c) continue;
              const l = c.childNodes.map(function (e) {
                  return e.id.toString();
                }),
                u = l.map(s);
              a = a.concat(i.generateAllVisibleNodes_(l, u, n, o));
            }
            return a;
          }
          getSemanticPrimary() {
            return this.primary;
          }
          getSemanticNodes() {
            return this.nodes;
          }
          getNodes() {
            return this.allNodes;
          }
          getDomNodes() {
            return this.domNodes;
          }
          getDomPrimary() {
            return this.domPrimary_;
          }
          toString() {
            return "Primary:" + this.domPrimary_ + " Nodes:" + this.domNodes;
          }
          clone() {
            const e = new i(this.nodes, this.primary);
            return (e.domNodes = this.domNodes), (e.domPrimary_ = this.domPrimary_), (e.allNodes = this.allNodes), e;
          }
        }
        t.Focus = i;
      },
      1497: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.Levels = void 0);
        class n {
          constructor() {
            this.level_ = [];
          }
          push(e) {
            this.level_.push(e);
          }
          pop() {
            return this.level_.pop();
          }
          peek() {
            return this.level_[this.level_.length - 1] || null;
          }
          indexOf(e) {
            const t = this.peek();
            return t ? t.indexOf(e) : null;
          }
          find(e) {
            const t = this.peek();
            if (!t) return null;
            for (let n = 0, r = t.length; n < r; n++) if (e(t[n])) return t[n];
            return null;
          }
          get(e) {
            const t = this.peek();
            return !t || e < 0 || e >= t.length ? null : t[e];
          }
          depth() {
            return this.level_.length;
          }
          clone() {
            const e = new n();
            return (e.level_ = this.level_.slice(0)), e;
          }
          toString() {
            let e = "";
            for (let t, n = 0; (t = this.level_[n]); n++)
              e +=
                "\n" +
                t.map(function (e) {
                  return e.toString();
                });
            return e;
          }
        }
        t.Levels = n;
      },
      1848: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.RebuildStree = void 0);
        const r = n(6671),
          i = n(8171),
          o = n(4020),
          s = n(4790),
          a = n(7793),
          c = n(7984),
          l = n(1784),
          u = n(8901),
          d = n(8835);
        class h {
          constructor(e) {
            (this.mathml = e),
              (this.factory = new s.SemanticNodeFactory()),
              (this.nodeDict = {}),
              (this.mmlRoot = d.getSemanticRoot(e)),
              (this.streeRoot = this.assembleTree(this.mmlRoot)),
              (this.stree = l.SemanticTree.fromNode(this.streeRoot, this.mathml)),
              (this.xml = this.stree.xml()),
              a.default.getInstance().setNodeFactory(this.factory);
          }
          static addAttributes(e, t, n) {
            n && 1 === t.childNodes.length && t.childNodes[0].nodeType !== r.NodeType.TEXT_NODE && u.addAttributes(e, t.childNodes[0]),
              u.addAttributes(e, t);
          }
          static textContent(e, t, n) {
            if (!n && t.textContent) return void (e.textContent = t.textContent);
            const r = d.splitAttribute(d.getAttribute(t, i.Attribute.OPERATOR));
            r.length > 1 && (e.textContent = r[1]);
          }
          static isPunctuated(e) {
            return !c.SemanticSkeleton.simpleCollapseStructure(e) && e[1] && c.SemanticSkeleton.contentCollapseStructure(e[1]);
          }
          getTree() {
            return this.stree;
          }
          assembleTree(e) {
            const t = this.makeNode(e),
              n = d.splitAttribute(d.getAttribute(e, i.Attribute.CHILDREN)),
              r = d.splitAttribute(d.getAttribute(e, i.Attribute.CONTENT));
            if ((h.addAttributes(t, e, !(n.length || r.length)), 0 === r.length && 0 === n.length)) return h.textContent(t, e), t;
            if (r.length > 0) {
              const e = d.getBySemanticId(this.mathml, r[0]);
              e && h.textContent(t, e, !0);
            }
            (t.contentNodes = r.map((e) => this.setParent(e, t))), (t.childNodes = n.map((e) => this.setParent(e, t)));
            const o = d.getAttribute(e, i.Attribute.COLLAPSED);
            return o ? this.postProcess(t, o) : t;
          }
          makeNode(e) {
            const t = d.getAttribute(e, i.Attribute.TYPE),
              n = d.getAttribute(e, i.Attribute.ROLE),
              r = d.getAttribute(e, i.Attribute.FONT),
              o = d.getAttribute(e, i.Attribute.ANNOTATION) || "",
              s = d.getAttribute(e, i.Attribute.ID),
              a = d.getAttribute(e, i.Attribute.EMBELLISHED),
              c = d.getAttribute(e, i.Attribute.FENCEPOINTER),
              l = this.createNode(parseInt(s, 10));
            return (
              (l.type = t),
              (l.role = n),
              (l.font = r || "unknown"),
              l.parseAnnotation(o),
              c && (l.fencePointer = c),
              a && (l.embellished = a),
              l
            );
          }
          makePunctuation(e) {
            const t = this.createNode(e);
            return t.updateContent((0, o.invisibleComma)()), (t.role = "dummy"), t;
          }
          makePunctuated(e, t, n) {
            const r = this.createNode(t[0]);
            (r.type = "punctuated"), (r.embellished = e.embellished), (r.fencePointer = e.fencePointer), (r.role = n);
            const i = t.splice(1, 1)[0].slice(1);
            (r.contentNodes = i.map(this.makePunctuation.bind(this))), this.collapsedChildren_(t);
          }
          makeEmpty(e, t, n) {
            const r = this.createNode(t);
            (r.type = "empty"), (r.embellished = e.embellished), (r.fencePointer = e.fencePointer), (r.role = n);
          }
          makeIndex(e, t, n) {
            if (h.isPunctuated(t)) return this.makePunctuated(e, t, n), void (t = t[0]);
            c.SemanticSkeleton.simpleCollapseStructure(t) && !this.nodeDict[t.toString()] && this.makeEmpty(e, t, n);
          }
          postProcess(e, t) {
            const n = c.SemanticSkeleton.fromString(t).array;
            if ("subsup" === e.type) {
              const t = this.createNode(n[1][0]);
              return (
                (t.type = "subscript"),
                (t.role = "subsup"),
                (e.type = "superscript"),
                (t.embellished = e.embellished),
                (t.fencePointer = e.fencePointer),
                this.makeIndex(e, n[1][2], "rightsub"),
                this.makeIndex(e, n[2], "rightsuper"),
                this.collapsedChildren_(n),
                e
              );
            }
            if ("subscript" === e.type) return this.makeIndex(e, n[2], "rightsub"), this.collapsedChildren_(n), e;
            if ("superscript" === e.type) return this.makeIndex(e, n[2], "rightsuper"), this.collapsedChildren_(n), e;
            if ("tensor" === e.type)
              return (
                this.makeIndex(e, n[2], "leftsub"),
                this.makeIndex(e, n[3], "leftsuper"),
                this.makeIndex(e, n[4], "rightsub"),
                this.makeIndex(e, n[5], "rightsuper"),
                this.collapsedChildren_(n),
                e
              );
            if ("punctuated" === e.type) {
              if (h.isPunctuated(n)) {
                const t = n.splice(1, 1)[0].slice(1);
                e.contentNodes = t.map(this.makePunctuation.bind(this));
              }
              return e;
            }
            if ("underover" === e.type) {
              const t = this.createNode(n[1][0]);
              return (
                "overaccent" === e.childNodes[1].role
                  ? ((t.type = "overscore"), (e.type = "underscore"))
                  : ((t.type = "underscore"), (e.type = "overscore")),
                (t.role = "underover"),
                (t.embellished = e.embellished),
                (t.fencePointer = e.fencePointer),
                this.collapsedChildren_(n),
                e
              );
            }
            return e;
          }
          createNode(e) {
            const t = this.factory.makeNode(e);
            return (this.nodeDict[e.toString()] = t), t;
          }
          collapsedChildren_(e) {
            const t = (e) => {
              const n = this.nodeDict[e[0]];
              n.childNodes = [];
              for (let r = 1, i = e.length; r < i; r++) {
                const i = e[r];
                n.childNodes.push(c.SemanticSkeleton.simpleCollapseStructure(i) ? this.nodeDict[i] : t(i));
              }
              return n;
            };
            t(e);
          }
          setParent(e, t) {
            const n = d.getBySemanticId(this.mathml, e),
              r = this.assembleTree(n);
            return (r.parent = t), r;
          }
        }
        t.RebuildStree = h;
      },
      1937: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SemanticWalker = void 0);
        const r = n(4660),
          i = n(1497);
        class o extends r.AbstractWalker {
          constructor(e, t, n, r) {
            super(e, t, n, r), (this.node = e), (this.generator = t), (this.highlighter = n), (this.levels = null), this.restoreState();
          }
          initLevels() {
            const e = new i.Levels();
            return e.push([this.getFocus()]), e;
          }
          up() {
            super.up();
            const e = this.previousLevel();
            if (!e) return null;
            this.levels.pop();
            return this.levels.find(function (t) {
              return t.getSemanticNodes().some(function (t) {
                return t.id.toString() === e;
              });
            });
          }
          down() {
            super.down();
            const e = this.nextLevel();
            return 0 === e.length ? null : (this.levels.push(e), e[0]);
          }
          combineContentChildren(e, t, n, r) {
            switch (e) {
              case "relseq":
              case "infixop":
              case "multirel":
                return this.makePairList(r, n);
              case "prefixop":
                return [this.focusFromId(r[0], n.concat(r))];
              case "postfixop":
                return [this.focusFromId(r[0], r.concat(n))];
              case "matrix":
              case "vector":
              case "fenced":
                return [this.focusFromId(r[0], [n[0], r[0], n[1]])];
              case "cases":
                return [this.focusFromId(r[0], [n[0], r[0]])];
              case "punctuated":
                return "text" === t
                  ? r.map(this.singletonFocus.bind(this))
                  : r.length === n.length
                  ? n.map(this.singletonFocus.bind(this))
                  : this.combinePunctuations(r, n, [], []);
              case "appl":
                return [this.focusFromId(r[0], [r[0], n[0]]), this.singletonFocus(r[1])];
              case "root":
                return [this.singletonFocus(r[1]), this.singletonFocus(r[0])];
              default:
                return r.map(this.singletonFocus.bind(this));
            }
          }
          combinePunctuations(e, t, n, r) {
            if (0 === e.length) return r;
            const i = e.shift(),
              o = t.shift();
            return i === o
              ? (n.push(o), this.combinePunctuations(e, t, n, r))
              : (t.unshift(o),
                n.push(i),
                e.length === t.length
                  ? (r.push(this.focusFromId(i, n.concat(t))), r)
                  : (r.push(this.focusFromId(i, n)), this.combinePunctuations(e, t, [], r)));
          }
          makePairList(e, t) {
            if (0 === e.length) return [];
            if (1 === e.length) return [this.singletonFocus(e[0])];
            const n = [this.singletonFocus(e.shift())];
            for (let r = 0, i = e.length; r < i; r++) n.push(this.focusFromId(e[r], [t[r], e[r]]));
            return n;
          }
          left() {
            super.left();
            const e = this.levels.indexOf(this.getFocus());
            if (null === e) return null;
            const t = this.levels.get(e - 1);
            return t || null;
          }
          right() {
            super.right();
            const e = this.levels.indexOf(this.getFocus());
            if (null === e) return null;
            const t = this.levels.get(e + 1);
            return t || null;
          }
          findFocusOnLevel(e) {
            return this.levels.find((t) => t.getSemanticPrimary().id === e);
          }
        }
        t.SemanticWalker = o;
      },
      3531: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SyntaxWalker = void 0);
        const r = n(1426),
          i = n(4660),
          o = n(1497);
        class s extends i.AbstractWalker {
          constructor(e, t, n, r) {
            super(e, t, n, r), (this.node = e), (this.generator = t), (this.highlighter = n), (this.levels = null), this.restoreState();
          }
          initLevels() {
            const e = new o.Levels();
            return e.push([this.primaryId()]), e;
          }
          up() {
            super.up();
            const e = this.previousLevel();
            return e ? (this.levels.pop(), this.singletonFocus(e)) : null;
          }
          down() {
            super.down();
            const e = this.nextLevel();
            if (0 === e.length) return null;
            const t = this.singletonFocus(e[0]);
            return t && this.levels.push(e), t;
          }
          combineContentChildren(e, t, n, i) {
            switch (e) {
              case "relseq":
              case "infixop":
              case "multirel":
                return (0, r.interleaveLists)(i, n);
              case "prefixop":
                return n.concat(i);
              case "postfixop":
                return i.concat(n);
              case "matrix":
              case "vector":
              case "fenced":
                return i.unshift(n[0]), i.push(n[1]), i;
              case "cases":
                return i.unshift(n[0]), i;
              case "punctuated":
                return "text" === t ? (0, r.interleaveLists)(i, n) : i;
              case "appl":
                return [i[0], n[0], i[1]];
              case "root":
                return [i[1], i[0]];
              default:
                return i;
            }
          }
          left() {
            super.left();
            const e = this.levels.indexOf(this.primaryId());
            if (null === e) return null;
            const t = this.levels.get(e - 1);
            return t ? this.singletonFocus(t) : null;
          }
          right() {
            super.right();
            const e = this.levels.indexOf(this.primaryId());
            if (null === e) return null;
            const t = this.levels.get(e + 1);
            return t ? this.singletonFocus(t) : null;
          }
          findFocusOnLevel(e) {
            return this.singletonFocus(e.toString());
          }
          focusDomNodes() {
            return [this.getFocus().getDomPrimary()];
          }
          focusSemanticNodes() {
            return [this.getFocus().getSemanticPrimary()];
          }
        }
        t.SyntaxWalker = s;
      },
      4051: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.TableWalker = void 0);
        const r = n(6671),
          i = n(6988),
          o = n(3531),
          s = n(8119);
        class a extends o.SyntaxWalker {
          constructor(e, t, n, r) {
            super(e, t, n, r),
              (this.node = e),
              (this.generator = t),
              (this.highlighter = n),
              (this.firstJump = null),
              (this.key_ = null),
              (this.row_ = 0),
              (this.currentTable_ = null),
              this.keyMapping.set(i.KeyCode.ZERO, this.jumpCell.bind(this)),
              this.keyMapping.set(i.KeyCode.ONE, this.jumpCell.bind(this)),
              this.keyMapping.set(i.KeyCode.TWO, this.jumpCell.bind(this)),
              this.keyMapping.set(i.KeyCode.THREE, this.jumpCell.bind(this)),
              this.keyMapping.set(i.KeyCode.FOUR, this.jumpCell.bind(this)),
              this.keyMapping.set(i.KeyCode.FIVE, this.jumpCell.bind(this)),
              this.keyMapping.set(i.KeyCode.SIX, this.jumpCell.bind(this)),
              this.keyMapping.set(i.KeyCode.SEVEN, this.jumpCell.bind(this)),
              this.keyMapping.set(i.KeyCode.EIGHT, this.jumpCell.bind(this)),
              this.keyMapping.set(i.KeyCode.NINE, this.jumpCell.bind(this));
          }
          move(e) {
            this.key_ = e;
            const t = super.move(e);
            return (this.modifier = !1), t;
          }
          up() {
            return (this.moved = s.WalkerMoves.UP), this.eligibleCell_() ? this.verticalMove_(!1) : super.up();
          }
          down() {
            return (this.moved = s.WalkerMoves.DOWN), this.eligibleCell_() ? this.verticalMove_(!0) : super.down();
          }
          jumpCell() {
            if (!this.isInTable_() || null === this.key_) return this.getFocus();
            if (this.moved === s.WalkerMoves.ROW) {
              this.moved = s.WalkerMoves.CELL;
              const e = this.key_ - i.KeyCode.ZERO;
              return this.isLegalJump_(this.row_, e) ? this.jumpCell_(this.row_, e) : this.getFocus();
            }
            const e = this.key_ - i.KeyCode.ZERO;
            return e > this.currentTable_.childNodes.length
              ? this.getFocus()
              : ((this.row_ = e), (this.moved = s.WalkerMoves.ROW), this.getFocus().clone());
          }
          undo() {
            const e = super.undo();
            return e === this.firstJump && (this.firstJump = null), e;
          }
          eligibleCell_() {
            const e = this.getFocus().getSemanticPrimary();
            return this.modifier && "cell" === e.type && -1 !== a.ELIGIBLE_CELL_ROLES.indexOf(e.role);
          }
          verticalMove_(e) {
            const t = this.previousLevel();
            if (!t) return null;
            const n = this.getFocus(),
              r = this.levels.indexOf(this.primaryId()),
              i = this.levels.pop(),
              o = this.levels.indexOf(t),
              s = this.levels.get(e ? o + 1 : o - 1);
            if (!s) return this.levels.push(i), null;
            this.setFocus(this.singletonFocus(s));
            const a = this.nextLevel();
            return a[r] ? (this.levels.push(a), this.singletonFocus(a[r])) : (this.setFocus(n), this.levels.push(i), null);
          }
          jumpCell_(e, t) {
            this.firstJump ? this.virtualize(!1) : ((this.firstJump = this.getFocus()), this.virtualize(!0));
            const n = this.currentTable_.id.toString();
            let r;
            do {
              r = this.levels.pop();
            } while (-1 === r.indexOf(n));
            this.levels.push(r), this.setFocus(this.singletonFocus(n)), this.levels.push(this.nextLevel());
            const i = this.currentTable_.childNodes[e - 1];
            return (
              this.setFocus(this.singletonFocus(i.id.toString())),
              this.levels.push(this.nextLevel()),
              this.singletonFocus(i.childNodes[t - 1].id.toString())
            );
          }
          isLegalJump_(e, t) {
            const n = r.querySelectorAllByAttrValue(this.getRebuilt().xml, "id", this.currentTable_.id.toString())[0];
            if (!n || n.hasAttribute("alternative")) return !1;
            const i = this.currentTable_.childNodes[e - 1];
            if (!i) return !1;
            const o = r.querySelectorAllByAttrValue(n, "id", i.id.toString())[0];
            return !(!o || o.hasAttribute("alternative")) && !(!i || !i.childNodes[t - 1]);
          }
          isInTable_() {
            let e = this.getFocus().getSemanticPrimary();
            for (; e; ) {
              if (-1 !== a.ELIGIBLE_TABLE_TYPES.indexOf(e.type)) return (this.currentTable_ = e), !0;
              e = e.parent;
            }
            return !1;
          }
        }
        (t.TableWalker = a),
          (a.ELIGIBLE_CELL_ROLES = [
            "determinant",
            "rowvector",
            "binomial",
            "squarematrix",
            "multiline",
            "matrix",
            "vector",
            "cases",
            "table"
          ]),
          (a.ELIGIBLE_TABLE_TYPES = ["multiline", "matrix", "vector", "cases", "table"]);
      },
      8119: function (e, t) {
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.WalkerState = t.WalkerMoves = void 0),
          ((n = t.WalkerMoves || (t.WalkerMoves = {})).UP = "up"),
          (n.DOWN = "down"),
          (n.LEFT = "left"),
          (n.RIGHT = "right"),
          (n.REPEAT = "repeat"),
          (n.DEPTH = "depth"),
          (n.ENTER = "enter"),
          (n.EXPAND = "expand"),
          (n.HOME = "home"),
          (n.SUMMARY = "summary"),
          (n.DETAIL = "detail"),
          (n.ROW = "row"),
          (n.CELL = "cell");
        class r {
          static resetState(e) {
            delete r.STATE[e];
          }
          static setState(e, t) {
            r.STATE[e] = t;
          }
          static getState(e) {
            return r.STATE[e];
          }
        }
        (t.WalkerState = r), (r.STATE = {});
      },
      907: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.walkerMapping_ = t.walker = void 0);
        const r = n(4296),
          i = n(1937),
          o = n(3531),
          s = n(4051);
        (t.walker = function (e, n, r, i, o) {
          return (t.walkerMapping_[e.toLowerCase()] || t.walkerMapping_.dummy)(n, r, i, o);
        }),
          (t.walkerMapping_ = {
            dummy: (e, t, n, i) => new r.DummyWalker(e, t, n, i),
            semantic: (e, t, n, r) => new i.SemanticWalker(e, t, n, r),
            syntax: (e, t, n, r) => new o.SyntaxWalker(e, t, n, r),
            table: (e, t, n, r) => new s.TableWalker(e, t, n, r)
          });
      },
      8835: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getBySemanticId = t.getSemanticRoot = t.getAttribute = t.splitAttribute = void 0);
        const r = n(6671),
          i = n(8171);
        (t.splitAttribute = function (e) {
          return e ? e.split(/,/) : [];
        }),
          (t.getAttribute = function (e, t) {
            return e.getAttribute(t);
          }),
          (t.getSemanticRoot = function (e) {
            if (e.hasAttribute(i.Attribute.TYPE) && !e.hasAttribute(i.Attribute.PARENT)) return e;
            const t = r.querySelectorAllByAttr(e, i.Attribute.TYPE);
            for (let e, n = 0; (e = t[n]); n++) if (!e.hasAttribute(i.Attribute.PARENT)) return e;
            return e;
          }),
          (t.getBySemanticId = function (e, t) {
            return e.getAttribute(i.Attribute.ID) === t ? e : r.querySelectorAllByAttrValue(e, i.Attribute.ID, t)[0];
          });
      }
    },
    __webpack_module_cache__ = {};
  function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t) return t.exports;
    var n = (__webpack_module_cache__[e] = { exports: {} });
    return __webpack_modules__[e].call(n.exports, n, n.exports, __webpack_require__), n.exports;
  }
  (__webpack_require__.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return __webpack_require__.d(t, { a: t }), t;
  }),
    (__webpack_require__.d = function (e, t) {
      for (var n in t)
        __webpack_require__.o(t, n) && !__webpack_require__.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (__webpack_require__.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (__webpack_require__.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = __webpack_require__(8723),
        t = __webpack_require__(7306),
        n = __webpack_require__(8905),
        r = __webpack_require__.n(n);
      MathJax.loader && MathJax.loader.checkVersion("a11y/sre", t.q, "a11y"), (0, e.r8)({ _: { a11y: { sre: n } } });
      var i = __webpack_require__(1993);
      if (MathJax.startup) {
        var o = i.GL.resolvePath("[sre]", !1);
        if ("undefined" != typeof window) window.SREfeature = { json: o };
        else {
          try {
            o = MathJax.config.loader.require.resolve(o + "/base.json").replace(/\/base\.json$/, "");
          } catch (e) {}
          __webpack_require__.g.SREfeature = { json: o };
        }
      }
      MathJax.startup &&
        (("undefined" != typeof window ? window : __webpack_require__.g).SREfeature.custom = function (e) {
          return r().preloadLocales(e);
        });
    })();
})();
