(self.webpackChunk = self.webpackChunk || []).push([
  [6550],
  {
    51072: (e, t, r) => {
      r.d(t, { Vi: () => a });
      var n = r(95574);
      function a(e) {
        return e().then(n.MH);
      }
    },
    31668: (e, t, r) => {
      r.d(t, { Z: () => c });
      var n = r(82900),
        a = r(74923),
        o = r(18775),
        i = r(98314),
        s = r(22232);
      var c = (function () {
        function e(t) {
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URLSearchParams();
          (0, n._)(this, e), (0, o._)(this, "base", void 0), (0, o._)(this, "params", void 0), (this.base = t), (this.params = r);
          var a = e._toString(t, r).length;
          (0, s.kG)(a < e.MAX_URL_LENGTH, "url exceeded length limit", String(a));
        }
        return (
          (0, a._)(
            e,
            [
              {
                key: "addParams",
                value: function (t) {
                  var r,
                    n = Object.entries(t).reduce(
                      function (e, t) {
                        var r = (0, i._)(t, 2),
                          n = r[0],
                          a = r[1];
                        return e.append(n, a), e;
                      },
                      ((r = this.params), new URLSearchParams(r.toString()))
                    );
                  return new e(this.base, n);
                }
              },
              {
                key: "toString",
                value: function () {
                  return e._toString(this.base, this.params);
                }
              }
            ],
            [
              {
                key: "_toString",
                value: function (e, t) {
                  var r = t.toString();
                  return "".concat(e).concat(r.length ? "?".concat(r) : "");
                }
              }
            ]
          ),
          e
        );
      })();
      (0, o._)(c, "MAX_URL_LENGTH", 2083);
    },
    624: (e, t, r) => {
      r.d(t, { J: () => J });
      var n,
        a,
        o,
        i,
        s,
        c,
        l,
        u,
        d,
        f,
        v,
        p,
        h,
        m,
        b,
        g,
        w,
        y,
        k,
        S,
        C,
        P,
        G,
        O = r(23239),
        A = r(5114),
        z = r(22232),
        M = r(79880),
        I = r(57050),
        x = r(64015),
        F = r(40154),
        B = r(85384),
        E = r(73915),
        T = r(71249),
        R = r(8125),
        U = r(55415),
        j = r(83078),
        D = r(95195),
        _ = r(17889),
        L = r(98992),
        V = r(80432),
        q = r(18208);
      function N(e, t, r) {
        return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
      }
      function X(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              N(e, t, r[t]);
            });
        }
        return e;
      }
      function H(e, t) {
        return (
          (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  t &&
                    (n = n.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
                }
                return r;
              })(Object(t)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
          e
        );
      }
      function K(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
        }
        return a;
      }
      function Q(e) {
        return V.f.includes(e.type);
      }
      function Y(e, t, r) {
        return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
      }
      !(function (e) {
        (e.isStrongAlertRefComponent = function (e) {
          return "child" in e;
        }),
          (e.isStrongAlertRefBehavior = function (e) {
            return !("child" in e);
          });
      })(n || (n = {})),
        (function (e) {
          (e.isStrongAlertRef = function (e) {
            return "strongAlertRef" === e.type;
          }),
            (e.create = function (e, t, r) {
              return { type: "strongAlertRef", alertIds: t, child: e, onEmpty: r, id: S.from("strongAlertRef") };
            });
        })(a || (a = {})),
        (function (e) {
          (e.isLongFormCard = function (e) {
            return "longFormCard" === e.type;
          }),
            (e.create = function (e, t, r) {
              return {
                type: "longFormCard",
                fullContent: e,
                collapsedContent: t,
                id: S.from("longFormCard"),
                behaviors: [i.StrongAlertRef.create(r, [])],
                feedProperties: {}
              };
            });
        })(o || (o = {})),
        (function (e) {
          let t, r;
          (e.isStrongAlertRef = function (e) {
            return "behavior:strongAlertRef" === e.type;
          }),
            (function (e) {
              e.create = function (e, t) {
                return { id: S.from("behavior:strongAlertRef"), type: "behavior:strongAlertRef", alertIds: e, onEmpty: t };
              };
              e.eq = E.n(B.z2)(L.lY);
            })((t = e.StrongAlertRef || (e.StrongAlertRef = {}))),
            (e.isPopoverAnchor = function (e) {
              return "behavior:popoverAnchor" === e.type;
            }),
            (function (e) {
              e.create = function (e, t) {
                return { type: "behavior:popoverAnchor", id: e, positionHint: t };
              };
              e.nonEmpty = (e) => !!e.view;
            })((r = e.PopoverAnchor || (e.PopoverAnchor = {})));
        })(i || (i = {})),
        (function (e) {
          (e.create = function (e, t, r, n, a) {
            return {
              type: "row",
              left: e,
              right: t,
              spacing: r,
              verticalAlign: n,
              id: S.from("row"),
              behaviors: a ? [i.PopoverAnchor.create(a, M.Ly.Top)] : void 0
            };
          }),
            (e.isRow = function (e) {
              return "row" === e.type;
            });
        })(s || (s = {})),
        (function (e) {
          e.create = function (e) {
            return { type: "column", children: e, id: S.from("column") };
          };
        })(c || (c = {})),
        (function (e) {
          var t = (e.Type = "block");
          (e.create = function (e, r, n, ...a) {
            return { type: t, name: C.unknown(e), parts: a, spacing: r, innerSpacing: n, id: S.from(e) };
          }),
            (e.isBlock = function (e) {
              return e.type === t;
            }),
            (e.hasOnlyTextParts = function (e) {
              return e.parts.every(u.isText);
            });
        })(l || (l = {})),
        (function (e) {
          var t = (e.Type = "text");
          (e.create = function (e, r, n, a, o, i, s = {}) {
            return { type: t, text: e, size: r, format: n, textColor: a, backgroundColor: o, outlineColor: i, id: S.from(t), meta: s };
          }),
            (e.isText = function (e) {
              return e.type === t;
            });
        })(u || (u = {})),
        (function (e) {
          e.create = function (e, t) {
            return { label: e, preview: t };
          };
        })(d || (d = {})),
        (function (e) {
          e.create = function (e, ...t) {
            return { type: "alternativeChoice", alternatives: t, id: S.from("alternativeChoice"), meta: e };
          };
        })(f || (f = {})),
        (function (e) {
          e.create = function (e, t) {
            return { type: "viewStack", id: S.from("ViewStack"), views: t, selected: e };
          };
        })(v || (v = {})),
        (function (e) {
          var t = (e.Type = "button");
          let r;
          !(function (e) {
            (e.isTransitionAction = function (e) {
              return "transition" === e.type;
            }),
              (e.isApplyAlertsAction = function (e) {
                return "applyAlerts" === e.type;
              }),
              (e.createSelectAlternativeAction = function (e) {
                return { type: "selectAlternative", alternativeIndex: e };
              });
          })((r = e.Action || (e.Action = {}))),
            (e.isButton = function (e) {
              return "button" === e.type;
            }),
            (e.create = function (e, r, n, a, o, i, s = M.jL.Square, c = {}) {
              const d = S.from(e);
              return {
                type: t,
                id: d,
                name: C.unknown(e),
                tooltip: o,
                kind: a,
                state: M.BN.Enabled,
                label: {
                  type: l.Type,
                  name: C.unknown(""),
                  parts: [u.create(r, M.yH.Regular, [], M.Il.CoreNeutral0, void 0, void 0)],
                  spacing: i,
                  id: S.from("label-button-" + d)
                },
                actions: n,
                shape: s,
                meta: c
              };
            }),
            (e.createIcon = function (e, r, n, a, o, i = M.jL.Square, s = {}) {
              const c = S.from(e),
                u = "icon-button-" + e;
              return {
                type: t,
                id: c,
                name: C.unknown(e),
                tooltip: o,
                kind: a,
                state: M.BN.Enabled,
                label: {
                  type: l.Type,
                  name: C.unknown(u),
                  spacing: m.create("0", "0.25", "0", "0.25"),
                  parts: [h.create(r, void 0)],
                  id: S.from(u)
                },
                actions: n,
                shape: i,
                meta: s
              };
            });
        })(p || (p = {})),
        (function (e) {
          var t = (e.Type = "icon");
          let r;
          !(function (e) {
            (e.createKnown = function (e) {
              return { kind: "known", name: e };
            }),
              (e.createUrl = function (e, t, r) {
                return { kind: "url", name: t, url: e, size: r };
              });
          })((r = e.Source || (e.Source = {}))),
            (e.create = function (e, r, n = {}) {
              return { type: t, source: e, backgroundColor: r, id: S.from(t), meta: n };
            });
        })(h || (h = {})),
        (function (e) {
          e.create = function (e, t, r, n) {
            return { top: e, bottom: r, left: n, right: t };
          };
        })(m || (m = {})),
        (function (e) {
          e.create = function (e, t) {
            return { vertical: t, horizontal: e };
          };
        })(b || (b = {})),
        (function (e) {
          var t = (e.Type = "count");
          e.create = function (e, r, n = {}) {
            return { type: "count", backgroundColor: r, value: e, id: S.from(t), meta: n };
          };
        })(g || (g = {})),
        (function (e) {
          let t;
          !(function (e) {
            e.create = function (e, t, r) {
              return { type: "sliderChoice", id: S.from("slider-choice-" + t.toLowerCase()), icon: e, label: t, actions: r };
            };
          })((t = e.Choice || (e.Choice = {}))),
            (e.create = function (e, t, r, n = {}) {
              return { type: "slider", segmentSize: e, fillColor: t, choices: r, id: S.from("slider"), meta: n };
            });
        })(w || (w = {})),
        (function (e) {
          let t;
          !(function (e) {
            e.create = function (e, t, r, n) {
              return { id: S.from("alternative-slider-choice-" + t.toLowerCase()), icon: e, label: t, actions: r, preview: n };
            };
          })((t = e.Choice || (e.Choice = {}))),
            (e.create = function (e, t, r, n = {}) {
              return { type: "alternativeSlider", segmentSize: e, fillColor: t, choices: r, id: S.from("alternativeSlider"), meta: n };
            });
        })(y || (y = {})),
        (function (e) {
          let t;
          (e.create = function (e, t = {}) {
            return { type: "list", items: e, id: S.from("list"), meta: t };
          }),
            (function (e) {
              e.create = function (e, t, r, n, a = {}) {
                return { id: S.from("listItem"), label: e, behaviors: r, actions: t, secondaryButtons: n, meta: a };
              };
            })((t = e.Item || (e.Item = {})));
        })(k || (k = {})),
        (function (e) {
          e.from = function (e) {
            return e + "#" + q.fg(6);
          };
        })(S || (S = {})),
        (function (e) {
          e.unknown = function (e) {
            return { kind: "unknown", value: e };
          };
        })(C || (C = {})),
        (function (e) {
          (e.create = function (e, t, r) {
            return { type: "popoverStack", id: e, views: r, selected: t };
          }),
            (e.createView = function (e, t, r, n) {
              return { id: e, rootPopoverId: t, child: r, anchor: { kind: "component", id: n || q.fg(3) } };
            });
        })(P || (P = {})),
        (function (e) {
          let t;
          function r(e, r, n = t.PreOrder, a = []) {
            const o = [...a, e.id];
            switch (n) {
              case t.PreOrder:
                return r(e, o), O(e, r, n, o);
              case t.PostOrder:
                return O(e, r, n, o), r(e, o);
              default:
                (0, z.vE)(n);
            }
          }
          function* a(e, r = t.PreOrder) {
            yield* S(e, r, []);
          }
          function o(e, t, r, n) {
            let a = n;
            return G.forEach(e, (e, r) => (a = t(a, e, r)), r), a;
          }
          !(function (e) {
            (e.PreOrder = "PreOrder"), (e.PostOrder = "PstOrder");
          })((t = e.TreeTraversal || (e.TreeTraversal = {}))),
            (e.forEach = r),
            (e.traverse = a),
            (e.reduce = o),
            (e.findFirst = function (e, t, r = G.TreeTraversal.PreOrder) {
              for (let n of a(e, r)) if (n.type === t) return A.some(n);
              return A.none;
            }),
            (e.findFirstWithPredicate = function (e, t, r = G.TreeTraversal.PreOrder) {
              for (let n of a(e, r)) if (t(n)) return A.some(n);
              return A.none;
            });
          var s = (e.over = (e, r, n) => {
            const [a, ...o] = r;
            return T.xb(o) && a === e.id ? n(e) : k(e, I.Q1, t.PreOrder, (t) => (e.id === a && t.id === o[0] ? s(t, o, n) : A.some(t)));
          });
          function c(e, r, n = t.PreOrder) {
            switch (n) {
              case t.PreOrder:
                return (0, I.zG)(r(e), (e) => b(e, r, n));
              case t.PostOrder:
                return (0, I.zG)(b(e, r, n), A.map(r));
              default:
                (0, z.vE)(n);
            }
          }
          function l(e, r, n = t.PreOrder) {
            switch (n) {
              case t.PreOrder:
                return (0, I.zG)(
                  e,
                  A.fromPredicate(r),
                  A.chain((e) =>
                    (0, I.zG)(
                      g(e, r, n),
                      A.map((t) => X({}, e, t))
                    )
                  )
                );
              case t.PostOrder:
                return (0, I.zG)(
                  g(e, r, n),
                  A.chain((t) => A.fromPredicate(r)(X({}, e, t)))
                );
              default:
                (0, z.vE)(n);
            }
          }
          function u(e, r, n = t.PreOrder) {
            switch (n) {
              case t.PreOrder:
                return (0, I.zG)(
                  r(e),
                  A.chain((e) =>
                    (0, I.zG)(
                      w(e, r, n),
                      A.map((t) => X({}, e, t))
                    )
                  )
                );
              case t.PostOrder:
                return (0, I.zG)(
                  w(e, r, n),
                  A.chain((t) => r(X({}, e, t)))
                );
              default:
                (0, z.vE)(n);
            }
          }
          function d(e) {
            return l(e, (0, R.ff)(m), t.PostOrder);
          }
          (e.map = c), (e.filter = l), (e.filterMap = u), (e.compact = d);
          var f = (e.getAlertRefs = (e) => {
            switch (e.type) {
              case "alternativeChoice":
              case "alternativeSlider":
              case "block":
              case "button":
              case "count":
              case "alertsCount":
              case "icon":
              case "image":
              case "row":
              case "box":
              case "slider":
              case "text":
              case "clickableText":
              case "column":
              case "scroll":
              case "assistantFeed":
              case "assistantCard":
              case "popoverStack":
              case "gButton":
              case "lensesSwitchPanel":
              case "nativeSkillsModal":
              case "nativeSkillsList":
              case "nativeSkillsView":
              case "nativeToneInsightsModal":
              case "nativeLearnMoreModal":
              case "nativeSettingsModal":
              case "nativeFeedbackModal":
              case "nativeGetStartedChecklistModal":
              case "nativeKeyTakeawaysAssistantCard":
              case "nativeProofitModal":
              case "viewStack":
              case "proofitButton":
              case "dropDownMenuButton":
              case "selectableDropDownMenu":
              case "radioButtonsGroup":
              case "nativeExperimentalGBToneInsightsUpsellFooter":
              case "nativeExperimentalGBConsistencyUpsellFooter":
              case "collapsedCard":
              case "nativeInlineCardContent":
              case "progressBar":
              case "horizontalRule":
              case "tooltip":
                return A.none;
              case "shortFormCard":
                return f(e.child);
              case "longFormCard":
                return (0, I.zG)(e.behaviors, x.hX(i.isStrongAlertRef), _.nI);
              case "strongAlertRef":
                return A.some([e]);
              case "inlineCard":
                return (0, I.zG)((0, I.zG)(e.behaviors, A.fromNullable, A.chain((0, I.ls)(x.hX(i.isStrongAlertRef), _.nI))));
              case "list":
                return (0, I.zG)(
                  e.items,
                  x.UI((e) => (0, I.zG)(e.behaviors, A.fromNullable, A.chain((0, I.ls)(T.hX(i.isStrongAlertRef), _.nI)))),
                  A.sequenceArray,
                  A.map(_.xH)
                );
              default:
                if (Q(e)) return A.none;
                (0, z.vE)(e);
            }
          });
          (e.getAlertIds = (0, I.ls)(f, A.chain((0, I.ls)(x.tS(U.ei("alertIds")), _.c2)))),
            (e.getAllAlertIds = (e) =>
              o(
                e,
                (e, t) =>
                  (0, I.zG)(
                    G.getAlertIds(t),
                    A.map((t) => e.concat(t)),
                    A.getOrElse(() => e)
                  ),
                t.PreOrder,
                []
              )),
            (e.getSDUIId = (e) => A.fromNullable(e.id)),
            (e.setPopoverView = (e, t) =>
              c(e, (e) => {
                switch (e.type) {
                  case "box":
                  case "row":
                  case "button":
                    return (0, I.zG)(
                      A.fromNullable(e.behaviors),
                      A.chain(x.Ew(i.isPopoverAnchor)),
                      A.fold((0, I.a9)(e), (r) => {
                        var { view: n } = r,
                          a = K(r, ["view"]);
                        return (0, I.zG)(
                          A.fromNullable(n),
                          A.fold(
                            () =>
                              (0, I.zG)(
                                t,
                                A.filter((e) => "component" === e.anchor.kind && e.anchor.id === a.id),
                                A.fold((0, I.a9)(e), (t) => H(X({}, e), { behaviors: [H(X({}, a), { view: t })] }))
                              ),
                            (r) =>
                              (0, I.zG)(
                                t,
                                A.filter((e) => U.Xy(e.anchor, r.anchor)),
                                A.fold(
                                  () => H(X({}, e), { behaviors: [a] }),
                                  (t) =>
                                    t.rootPopoverId === r.rootPopoverId && t.id === r.id
                                      ? e
                                      : H(X({}, e), { behaviors: [H(X({}, a), { view: t })] })
                                )
                              )
                          )
                        );
                      })
                    );
                  default:
                    return e;
                }
              })),
            (e.removeStrongAlertRef = (e) => (t) => {
              const r = (0, I.zG)(
                  t,
                  x.UI((e) => e.alertIds),
                  x.xH,
                  (e) => new Set(e)
                ),
                a = (0, I.zG)(t, _.hX(n.isStrongAlertRefComponent)),
                o = (0, I.zG)(t, _.hX(n.isStrongAlertRefBehavior));
              return (0, I.zG)(u(e, p(r, a, o)), A.chain(d));
            });
          const v = (e, t) => {
              var r;
              return H(X({}, e), {
                behaviors:
                  null === (r = e.behaviors) || void 0 === r
                    ? void 0
                    : r.map((e) =>
                        "behavior:strongAlertRef" === e.type ? H(X({}, e), { alertIds: e.alertIds.filter((e) => !t.has(e)) }) : e
                      )
              });
            },
            p = (e, t, r) => (n) => {
              switch (n.type) {
                case "alternativeChoice":
                case "alternativeSlider":
                case "box":
                case "block":
                case "button":
                case "count":
                case "alertsCount":
                case "icon":
                case "image":
                case "row":
                case "slider":
                case "text":
                case "column":
                case "scroll":
                case "assistantFeed":
                case "assistantCard":
                case "popoverStack":
                case "gButton":
                case "lensesSwitchPanel":
                case "clickableText":
                case "nativeExperimentalGBToneInsightsUpsellFooter":
                case "nativeExperimentalGBConsistencyUpsellFooter":
                case "nativeGetStartedChecklistModal":
                case "nativeToneInsightsModal":
                case "nativeLearnMoreModal":
                case "nativeSettingsModal":
                case "nativeFeedbackModal":
                case "nativeKeyTakeawaysAssistantCard":
                case "nativeProofitModal":
                case "nativeSkillsModal":
                case "nativeSkillsList":
                case "nativeSkillsView":
                case "viewStack":
                case "proofitButton":
                case "dropDownMenuButton":
                case "selectableDropDownMenu":
                case "radioButtonsGroup":
                case "collapsedCard":
                case "nativeInlineCardContent":
                case "progressBar":
                case "horizontalRule":
                case "tooltip":
                  return A.some(n);
                case "shortFormCard":
                  return p(e, t, r)(n.child);
                case "longFormCard":
                  return A.some(
                    H(X({}, n), {
                      behaviors: n.behaviors.map((t) =>
                        i.isStrongAlertRef(t) ? H(X({}, t), { alertIds: t.alertIds.filter((t) => !e.has(t)) }) : t
                      )
                    })
                  );
                case "strongAlertRef":
                  return (0, I.zG)(
                    t,
                    A.exists((e) => e.some((e) => h.equals(n, e)))
                  )
                    ? A.none
                    : A.some(H(X({}, n), { alertIds: n.alertIds.filter((t) => !e.has(t)) }));
                case "inlineCard":
                  return n.behaviors &&
                    n.behaviors.some(
                      (e) =>
                        i.isStrongAlertRef(e) &&
                        (0, I.zG)(
                          r,
                          A.exists((t) => t.some((t) => i.StrongAlertRef.eq.equals(e, t)))
                        )
                    )
                    ? A.none
                    : A.some(v(n, e));
                case "list":
                  const a = n.items.filter(
                    (e) =>
                      !e.behaviors ||
                      !e.behaviors.some(
                        (e) =>
                          i.isStrongAlertRef(e) &&
                          (0, I.zG)(
                            r,
                            A.exists((t) => t.some((t) => i.StrongAlertRef.eq.equals(e, t)))
                          )
                      )
                  );
                  return 0 === a.length ? A.none : A.some(H(X({}, n), { items: a.map((t) => v(t, e)) }));
                default:
                  if (Q(n)) return A.some(n);
                  (0, z.vE)(n);
              }
            };
          (e.switchViewStack = (e, t, r) =>
            (0, I.zG)(
              s(e, t, (e) =>
                ("viewStack" !== e.type && "popoverStack" !== e.type) || null == e.views[r]
                  ? A.some(e)
                  : A.some(H(X({}, e), { selected: r }))
              ),
              A.fold(() => e, I.yR)
            )),
            (e.toContentMap = (e) => G.reduce(e, (e, t, r) => ((e[t.id] = { content: t, path: r }), e), t.PreOrder, {}));
          var h = (e.eq = E.n(B.z2)(L.VY)),
            m = (e.isEmpty = (e) => {
              if (null == e) return !0;
              switch (e.type) {
                case "column":
                  return x.xb(e.children);
                case "assistantCard":
                  return null == e.child && null == e.footer;
                case "box":
                case "scroll":
                case "strongAlertRef":
                case "collapsedCard":
                case "inlineCard":
                case "shortFormCard":
                case "tooltip":
                  return null == e.child;
                case "row":
                  return x.xb(e.left) && x.xb(e.right);
                case "block":
                  return x.xb(e.parts);
                case "list":
                  return x.xb(e.items);
                case "button":
                  return null == e.label;
                case "alternativeChoice":
                  return x.xb(e.alternatives);
                case "alternativeSlider":
                  return x.xb(e.choices);
                case "assistantFeed":
                  return null == e.header && null == e.footer;
                case "viewStack":
                  return U.Qr(e.views);
                case "longFormCard":
                  return null == e.fullContent;
                case "count":
                case "alertsCount":
                case "icon":
                case "image":
                case "slider":
                case "text":
                case "clickableText":
                case "gButton":
                case "lensesSwitchPanel":
                case "proofitButton":
                case "nativeSkillsModal":
                case "nativeSkillsList":
                case "nativeSkillsView":
                case "nativeToneInsightsModal":
                case "nativeLearnMoreModal":
                case "nativeSettingsModal":
                case "nativeFeedbackModal":
                case "nativeGetStartedChecklistModal":
                case "nativeKeyTakeawaysAssistantCard":
                case "nativeProofitModal":
                case "dropDownMenuButton":
                case "selectableDropDownMenu":
                case "radioButtonsGroup":
                case "nativeExperimentalGBToneInsightsUpsellFooter":
                case "nativeExperimentalGBConsistencyUpsellFooter":
                case "nativeInlineCardContent":
                case "progressBar":
                case "horizontalRule":
                case "popoverStack":
                  return !1;
                default:
                  if (Q(e)) return !1;
                  (0, z.vE)(e);
              }
            });
          e.isSwitchViewAction = (e) => "switchView" === e.type;
          (e.bulkSwitchView = function (e, t, r) {
            const n = null != r ? r : G.toContentMap(e);
            return t.reduce(
              (e, { selected: t, where: r }) =>
                (0, I.zG)(
                  n[r],
                  A.fromNullable,
                  A.map(U.ei("path")),
                  A.fold(
                    () => e,
                    (r) => G.switchViewStack(e, r, t)
                  )
                ),
              e
            );
          }),
            (e.getCardPropsForFeed = function (e) {
              return e.filtering.filter((e) => e.condition === M.j2.EqualTo).reduce((e, t) => H(X({}, e), { [t.property]: t.value }), {});
            });
          const b = (e, r, n = t.PreOrder) => k(e, r, n, c),
            g = (e, r, n = t.PreOrder) => k(e, r, n, l),
            w = (e, r, n = t.PreOrder) => k(e, r, n, u),
            y = (e, r, n = t.PreOrder, a) =>
              (0, I.zG)(
                e,
                x.u4(
                  new Array(),
                  (e, t) => (
                    (0, I.zG)(
                      a(t, r, n),
                      A.fold(I.Q1, (t) => e.push(t))
                    ),
                    e
                  )
                )
              ),
            k = (e, r, n = t.PreOrder, a) => {
              switch (e.type) {
                case "column":
                  return (0, I.zG)(y(e.children, r, n, a), (t) => H(X({}, e), { children: t }), A.some);
                case "assistantCard":
                  const t = (0, I.zG)(
                    A.fromNullable(e.footer),
                    A.chain((e) => a(e, r, n)),
                    A.getOrElse(() => {})
                  );
                  return (0, I.zG)(
                    a(e.child, r, n),
                    A.map((r) => H(X({}, e), { child: r, footer: t }))
                  );
                case "strongAlertRef":
                case "scroll":
                case "inlineCard":
                case "shortFormCard":
                case "box":
                case "tooltip":
                  return (0, I.zG)(
                    a(e.child, r, n),
                    A.map((t) => H(X({}, e), { child: t }))
                  );
                case "row":
                  const o = y(e.right, r, n, a),
                    i = y(e.left, r, n, a);
                  return A.some(H(X({}, e), { left: i, right: o }));
                case "block":
                  return (0, I.zG)(y(e.parts, r, n, a), (t) => H(X({}, e), { parts: t }), A.some);
                case "list":
                  return (0, I.zG)(
                    e.items,
                    x.UI((e) =>
                      (0, I.zG)(
                        a(e.label, r, n),
                        A.map((t) => H(X({}, e), { label: t }))
                      )
                    ),
                    x.hX(A.isSome),
                    x.UI(j.MH),
                    (t) => H(X({}, e), { items: t }),
                    A.some
                  );
                case "button":
                  return (0, I.zG)(
                    a(e.label, r, n),
                    A.map((t) => H(X({}, e), { label: t }))
                  );
                case "alternativeChoice":
                  return (0, I.zG)(
                    e.alternatives,
                    x.UI((e) =>
                      (0, I.zG)(
                        [a(e.label, r, n), a(e.preview, r, n)],
                        A.sequenceArray,
                        A.map((e) => e),
                        A.map(([t, r]) => H(X({}, e), { label: t, preview: r }))
                      )
                    ),
                    x.hX(A.isSome),
                    x.UI(j.MH),
                    (t) => H(X({}, e), { alternatives: t }),
                    A.some
                  );
                case "alternativeSlider":
                  return (0, I.zG)(
                    e.choices,
                    x.UI((e) =>
                      (0, I.zG)(
                        a(e.preview, r, n),
                        A.map((t) => H(X({}, e), { preview: t }))
                      )
                    ),
                    x.hX(A.isSome),
                    x.UI(j.MH),
                    (t) => H(X({}, e), { choices: t }),
                    A.some
                  );
                case "assistantFeed":
                  return (0, I.zG)(
                    A.fromNullable(e.footer),
                    A.chain((e) => a(e, r, n)),
                    A.map((t) => H(X({}, e), { footer: t })),
                    A.alt(() => A.some(e)),
                    A.chain((e) =>
                      (0, I.zG)(
                        a(e.header, r, n),
                        A.map((t) => H(X({}, e), { header: t }))
                      )
                    )
                  );
                case "popoverStack":
                  return (0, I.zG)(
                    Object.keys(e.views),
                    x.u4({}, (t, o) =>
                      (0, I.zG)(
                        a(e.views[o].child, r, n),
                        A.fold(
                          () => (delete t[o], t),
                          (r) => ((t[o] = H(X({}, e.views[o]), { child: r })), t)
                        )
                      )
                    ),
                    (t) => H(X({}, e), { views: t }),
                    A.some
                  );
                case "viewStack":
                  return (0, I.zG)(
                    Object.keys(e.views),
                    x.u4({}, (t, o) =>
                      (0, I.zG)(
                        a(e.views[o], r, n),
                        A.fold(
                          () => (delete t[o], t),
                          (e) => ((t[o] = e), t)
                        )
                      )
                    ),
                    (t) => H(X({}, e), { views: t }),
                    A.some
                  );
                case "collapsedCard":
                  const s = (0, I.zG)(
                    A.fromNullable(e.quickActions),
                    A.chain((e) => a(e, r, n)),
                    A.getOrElse(() => {})
                  );
                  return (0, I.zG)(
                    a(e.child, r, n),
                    A.map((t) => H(X({}, e), { child: t, quickActions: s }))
                  );
                case "longFormCard":
                  return (0, I.zG)(
                    a(e.fullContent, r, n),
                    A.chain((t) =>
                      (0, I.zG)(
                        a(e.collapsedContent, r, n),
                        A.map((r) => H(X({}, e), { fullContent: t, collapsedContent: r }))
                      )
                    )
                  );
                case "globalPart":
                  return (0, I.zG)(
                    a(e.content, r, n),
                    A.map((t) => H(X({}, e), { content: t }))
                  );
                case "icon":
                case "image":
                case "text":
                case "clickableText":
                case "count":
                case "alertsCount":
                case "slider":
                case "gButton":
                case "lensesSwitchPanel":
                case "proofitButton":
                case "nativeSkillsModal":
                case "nativeSkillsList":
                case "nativeSkillsView":
                case "nativeToneInsightsModal":
                case "nativeLearnMoreModal":
                case "nativeSettingsModal":
                case "nativeFeedbackModal":
                case "nativeGetStartedChecklistModal":
                case "nativeKeyTakeawaysAssistantCard":
                case "nativeProofitModal":
                case "nativeExperimentalGBToneInsightsUpsellFooter":
                case "nativeExperimentalGBConsistencyUpsellFooter":
                case "nativeInlineCardContent":
                case "progressBar":
                case "horizontalRule":
                case "dropDownMenuButton":
                case "selectableDropDownMenu":
                case "radioButtonsGroup":
                  return A.some(e);
                default:
                  if (Q(e)) return A.some(e);
                  (0, z.vE)(e);
              }
            };
          function* S(e, r = t.PreOrder, n = []) {
            const a = [...n, e.id];
            switch (r) {
              case t.PreOrder:
                yield e, yield* V(e, r, a);
                break;
              case t.PostOrder:
                yield* V(e, r, a), yield e;
                break;
              default:
                (0, z.vE)(r);
            }
          }
          const C = (e, n, a = t.PreOrder, o) => e.forEach((e) => r(e, n, a, o));
          function* P(e, r = t.PreOrder, n) {
            for (let t = 0; t < e.length; t++) yield* S(e[t], r, n);
          }
          const O = (e, n, a = t.PreOrder, o) => {
            switch (e.type) {
              case "column":
                return C(e.children, n, a, o);
              case "assistantCard":
                return null != e.footer && r(e.footer, n, a, o), r(e.child, n, a, o);
              case "popoverStack":
                return C(
                  Object.values(e.views).map((e) => e.child),
                  n,
                  a,
                  o
                );
              case "strongAlertRef":
              case "box":
              case "scroll":
              case "inlineCard":
              case "shortFormCard":
              case "tooltip":
                return r(e.child, n, a, o);
              case "row":
                return C(e.left, n, a, o), C(e.right, n, a, o);
              case "block":
                return C(e.parts, n, a, o);
              case "list":
                return C(
                  e.items.map((e) => e.label),
                  n,
                  a,
                  o
                );
              case "button":
                return r(e.label, n, a, o);
              case "alternativeChoice":
                return e.alternatives.forEach(({ label: e, preview: t }) => C([e, t], n, a, o));
              case "alternativeSlider":
                return e.choices.forEach(({ preview: e }) => r(e, n, a, o));
              case "assistantFeed":
                return null != e.footer && r(e.footer, n, a, o), r(e.header, n, a, o);
              case "viewStack":
                return C(Object.values(e.views), n, a, o);
              case "collapsedCard":
                return null != e.quickActions && r(e.quickActions, n, a, o), r(e.child, n, a, o);
              case "longFormCard":
                return r(e.collapsedContent, n, a, o), r(e.fullContent, n, a, o);
              case "globalPart":
                return r(e.content, n, a, o);
              case "icon":
              case "image":
              case "text":
              case "clickableText":
              case "count":
              case "alertsCount":
              case "slider":
              case "gButton":
              case "lensesSwitchPanel":
              case "proofitButton":
              case "nativeSkillsModal":
              case "nativeSkillsList":
              case "nativeSkillsView":
              case "nativeToneInsightsModal":
              case "nativeLearnMoreModal":
              case "nativeSettingsModal":
              case "nativeFeedbackModal":
              case "nativeGetStartedChecklistModal":
              case "nativeKeyTakeawaysAssistantCard":
              case "nativeProofitModal":
              case "nativeExperimentalGBToneInsightsUpsellFooter":
              case "nativeExperimentalGBConsistencyUpsellFooter":
              case "nativeInlineCardContent":
              case "progressBar":
              case "horizontalRule":
              case "dropDownMenuButton":
              case "selectableDropDownMenu":
              case "radioButtonsGroup":
                return;
              default:
                if (Q(e)) return;
                (0, z.vE)(e);
            }
          };
          function* V(e, r = t.PreOrder, n) {
            switch (e.type) {
              case "column":
                yield* P(e.children, r, n);
                break;
              case "assistantCard":
                null != e.footer && (yield* S(e.footer, r, n)), yield* S(e.child, r, n);
                break;
              case "popoverStack":
                yield* P(
                  Object.values(e.views).map((e) => e.child),
                  r,
                  n
                );
                break;
              case "strongAlertRef":
              case "box":
              case "scroll":
              case "inlineCard":
              case "shortFormCard":
              case "tooltip":
                yield* S(e.child, r, n);
                break;
              case "row":
                yield* P(e.left, r, n), yield* P(e.right, r, n);
                break;
              case "block":
                yield* P(e.parts, r, n);
                break;
              case "list":
                yield* P(
                  e.items.map((e) => e.label),
                  r,
                  n
                );
                break;
              case "button":
                yield* S(e.label, r, n);
                break;
              case "alternativeChoice":
                for (let t = 0; t < e.alternatives.length; t++) {
                  const { label: a, preview: o } = e.alternatives[t];
                  yield* P([a, o], r, n);
                }
                break;
              case "alternativeSlider":
                for (let t = 0; t < e.choices.length; t++) {
                  const { preview: a } = e.choices[t];
                  yield* S(a, r, n);
                }
                break;
              case "assistantFeed":
                null != e.footer && (yield* S(e.footer, r, n)), yield* S(e.header, r, n);
                break;
              case "viewStack":
                yield* P(Object.values(e.views), r, n);
                break;
              case "collapsedCard":
                null != e.quickActions && (yield* S(e.quickActions, r, n)), yield* S(e.child, r, n);
                break;
              case "longFormCard":
                yield* S(e.collapsedContent, r, n), yield* S(e.fullContent, r, n);
                break;
              case "icon":
              case "image":
              case "text":
              case "clickableText":
              case "count":
              case "alertsCount":
              case "slider":
              case "gButton":
              case "lensesSwitchPanel":
              case "proofitButton":
              case "nativeSkillsModal":
              case "nativeSkillsList":
              case "nativeSkillsView":
              case "nativeToneInsightsModal":
              case "nativeLearnMoreModal":
              case "nativeSettingsModal":
              case "nativeFeedbackModal":
              case "nativeGetStartedChecklistModal":
              case "nativeKeyTakeawaysAssistantCard":
              case "nativeProofitModal":
              case "nativeExperimentalGBToneInsightsUpsellFooter":
              case "nativeExperimentalGBConsistencyUpsellFooter":
              case "nativeInlineCardContent":
              case "progressBar":
              case "horizontalRule":
              case "dropDownMenuButton":
              case "selectableDropDownMenu":
              case "radioButtonsGroup":
                return;
              default:
                if (Q(e)) return;
                (0, z.vE)(e);
            }
          }
          e.Functor = { map: (e, r) => c(e, r, t.PreOrder) };
          const q = E.n(F.z2)(L.VY);
          e.dslRootParser = (0, I.ls)(
            q.decode,
            D.mapLeft((e) => new Error(F.ii(e)))
          );
        })(G || (G = {}));
      class J {
        getInteractionActions(e, t, r) {
          return (0, I.zG)(
            this._state.get(),
            (e) => e.dsl,
            A.filter((r) => r.id === e && r.selected === t),
            A.map((e) => e.views[e.selected]),
            A.fold(
              () => [],
              (e) => {
                switch (r) {
                  case M.fP.Fulfill:
                    return e.onFulfill || [];
                  case M.fP.Dismiss:
                    return e.onDismiss || [];
                  default:
                    (0, z.L0)(r);
                }
              }
            )
          );
        }
        addPopover(e, t) {
          this._state.modify((r) => {
            const n = void 0 !== t && r.revision > t,
              a = void 0 !== t && r.revision === t,
              o = (0, I.zG)(
                r.dsl,
                A.exists((t) => t.id === e.id)
              ),
              i = !A.isNone(r.dsl);
            return n || o || (a && i) ? r : { dsl: A.some(e), revision: null != t ? t : r.revision };
          });
        }
        removePopover(e, t) {
          this._state.modify((r) => {
            const n = void 0 !== t && r.revision > t,
              a = (0, I.zG)(
                r.dsl,
                A.exists((t) => t.id === e)
              );
            return n || !a ? r : { dsl: A.none, revision: null != t ? t : r.revision };
          });
        }
        switchView(e) {
          this._state.modify((t) =>
            (0, I.zG)(
              t.dsl,
              A.filter((t) => t.id === e.sduiRootId),
              A.map((t) => G.bulkSwitchView(t, [{ where: e.where, selected: e.selected, type: "switchView" }])),
              A.filter((e) => "popoverStack" === e.type),
              A.fold(
                () => t,
                (e) => ({ dsl: A.some(e), revision: t.revision })
              )
            )
          );
        }
        constructor() {
          Y(this, "activePopoverStack", void 0),
            Y(this, "activePopoverView", void 0),
            Y(this, "_state", void 0),
            (this._state = O.h.create({ dsl: A.none, revision: -1 })),
            (this.activePopoverStack = this._state.view("dsl")),
            (this.activePopoverView = this.activePopoverStack.view(A.chain((e) => A.fromNullable(e.views[e.selected]))));
        }
      }
    },
    31903: (e, t, r) => {
      r.d(t, { Q: () => l });
      var n = r(57050),
        a = r(37492),
        o = r(51072),
        i = r(81531);
      function s(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function c(e, t, r) {
        return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
      }
      var l = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, e),
            c(this, "_capiSDUIClient", void 0),
            c(this, "_log", void 0),
            (this._capiSDUIClient = t),
            (this._log = i.C8.Logging.getLogger("SDUIFeedbackServiceImpl"));
        }
        var t, r, l;
        return (
          (t = e),
          (r = [
            {
              key: "sendUserAction",
              value: function (e, t) {
                var r = this;
                this._log.debug("Sending user action", { componentId: e, userAction: t }),
                  (0, n.zG)(this._capiSDUIClient.sendUserAction(e, t), o.Vi, function (e) {
                    return e.catch(function (e) {
                      a.EP.isDroppedError(e)
                        ? r._log.debug("Stopped listening for sendUserAction message acknowledge", e)
                        : a.YG.isNotConnectedError(e)
                        ? r._log.warn("Failed to sendUserAction as CAPI was not connected", e)
                        : r._log.error("Failed to sendUserAction", e);
                    });
                  });
              }
            }
          ]) && s(t.prototype, r),
          l && s(t, l),
          e
        );
      })();
    }
  }
]);
