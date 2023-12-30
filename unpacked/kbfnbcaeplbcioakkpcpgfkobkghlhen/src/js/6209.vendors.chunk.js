(self.webpackChunk = self.webpackChunk || []).push([
  [6209],
  {
    55826: (e, t, r) => {
      r.d(t, { A: () => R });
      var n = r(57050),
        i = r(84966),
        o = r(80358),
        a = r(74660),
        s = r(70996),
        u = r(4390),
        c = r(9922),
        l = r(16118),
        d = r(77176),
        f = r(85985),
        h = r(8125),
        p = r(5114),
        v = r(92843),
        m = r(71249),
        y = r(81531),
        b = r(46680),
        g = r(78929),
        A = r(12054),
        w = r(21038),
        I = r(24055),
        _ = r(4477);
      function S(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function O(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      function C(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function P(e, t, r) {
        return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
      }
      function E(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != r) {
              var n,
                i,
                o = [],
                a = !0,
                s = !1;
              try {
                for (r = r.call(e); !(a = (n = r.next()).done) && (o.push(n.value), !t || o.length !== t); a = !0);
              } catch (e) {
                (s = !0), (i = e);
              } finally {
                try {
                  a || null == r.return || r.return();
                } finally {
                  if (s) throw i;
                }
              }
              return o;
            }
          })(e, t) ||
          M(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function j(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return S(e);
          })(e) ||
          (function (e) {
            if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
          })(e) ||
          M(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function M(e, t) {
        if (e) {
          if ("string" == typeof e) return S(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(r)
              : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? S(e, t)
              : void 0
          );
        }
      }
      var R = (function () {
        function e(t, r, S) {
          var C = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new _.J(),
            E = this;
          O(this, e),
            P(this, "_getByRawAlertId", void 0),
            P(this, "popoverManager", void 0),
            P(this, "state", void 0),
            P(this, "_sduiManager", void 0),
            P(this, "_subs", void 0),
            P(this, "_log", void 0),
            P(this, "alertIdResolver", void 0),
            P(this, "findFirstCardWithContent", void 0),
            P(this, "onSessionStarted", void 0),
            P(this, "onFirstCheckingFinished", void 0),
            P(this, "notifyAlertsChanged", void 0),
            P(this, "loadItems", void 0),
            P(this, "_toRemovedAlertIdsByClient", void 0),
            (this._getByRawAlertId = S),
            (this.popoverManager = C),
            (this._subs = new c.w.Keeper()),
            (this._log = y.C8.Logging.getLogger("SDUIManager", b.i.TRACE, b.T.Manager.getColor())),
            (this.findFirstCardWithContent = function (e) {
              return E._sduiManager.findFirstCardWithContent(e);
            }),
            (this.onSessionStarted = function () {
              return E._sduiManager.onSessionStarted();
            }),
            (this.onFirstCheckingFinished = function () {
              return E._sduiManager.onFirstCheckingFinished();
            }),
            (this.notifyAlertsChanged = function () {
              return E._sduiManager.notifyAlertsChanged();
            }),
            (this.loadItems = function (e) {
              return E._sduiManager.loadItems(e);
            }),
            (this._toRemovedAlertIdsByClient = function (e) {
              var t = function (e, t, r) {
                return (0, h.Kg)(a.bZ.isRemovedByTextChange, a.bZ.isDuplicated)(t.alert)
                  ? (0, n.zG)(
                      r,
                      p.fromNullable,
                      p.chain(function (e) {
                        return e.alert.rawId;
                      }),
                      p.alt(function () {
                        return t.alert.rawId;
                      }),
                      p.fold(
                        function () {
                          return e;
                        },
                        function (r) {
                          var n,
                            i = a.bZ.isRemovedByTextChange(t.alert) ? A.i5.TextChange : A.i5.RemoveDuplicate;
                          return (
                            E._log.debug(
                              "[Optimistic update] alert ".concat(a.bZ.State.Type.REMOVED, " by ").concat(i, " ").concat(s.h.show.show(t))
                            ),
                            e.set(i, j(null !== (n = e.get(i)) && void 0 !== n ? n : []).concat([w.j.AlertId.from(r)]))
                          );
                        }
                      )
                    )
                  : e;
              };
              return e.pipe(
                l.G(),
                d.U((0, n.og)(u.p.diff)),
                d.U(function (e) {
                  return v.v.reduce(
                    new Map(),
                    function (e, r) {
                      return t(e, r);
                    },
                    function (e, r, n) {
                      return t(e, n, r);
                    },
                    n.yR
                  )(e);
                }),
                f.h(function (e) {
                  return (0, n.zG)(Array.from(e.values()), m.xH, (0, h.ff)(m.xb));
                })
              );
            });
          var M = r.pipe(f.h(I.e.isSduiEvent), d.U(A.al.fromSource(A.i5.CAPI))),
            R = (0, n.ls)(
              i.wQ.Id.create,
              this._getByRawAlertId,
              p.map(function (e) {
                return w.j.AlertId.from(e.id);
              })
            );
          (this._sduiManager = new g.G(M, R, C)),
            (this.alertIdResolver = R),
            (this.state = this._sduiManager.state),
            this._subs.push(
              t.subscribe(function (e) {
                return E._sduiManager.notifyAlertsChanged();
              }),
              this._toRemovedAlertIdsByClient(t).subscribe(function (e) {
                return e.forEach(function (e, t) {
                  return E.pushRemovedAlerts([e, t]);
                });
              }),
              r
                .pipe(
                  f.h(o.h.is("session_started")),
                  f.h(function (e) {
                    return e.isNewSession;
                  })
                )
                .subscribe(function (e) {
                  return E._sduiManager.onSessionStarted();
                }),
              r
                .pipe(
                  f.h(o.h.is("finish")),
                  f.h(function (e) {
                    return 0 === e.revision;
                  })
                )
                .subscribe(function (e) {
                  return E._sduiManager.onFirstCheckingFinished();
                })
            );
        }
        var t, r, S;
        return (
          (t = e),
          (r = [
            {
              key: "onAlertsRefEmpty",
              get: function () {
                return this._sduiManager.onAlertsRefEmpty;
              }
            },
            {
              key: "pushRemovedRoot",
              value: function (e) {
                this._sduiManager.pushRemovedRoot(e);
              }
            },
            {
              key: "pushRemovedAlerts",
              value: function (e) {
                var t = E(e, 2),
                  r = t[0],
                  n = t[1];
                this._sduiManager.pushRemovedAlerts([r, n]);
              }
            },
            {
              key: "pushRemovedDenaliAlerts",
              value: function (e) {
                var t = E(e, 2),
                  r = t[0],
                  n = t[1];
                this._sduiManager.pushRemovedAlerts([r.map(w.j.AlertId.from), n]);
              }
            },
            {
              key: "pushSwitchView",
              value: function (e) {
                this._sduiManager.pushSwitchView(e);
              }
            },
            {
              key: "resolveStrongAlertRefAlerts",
              value: function (e) {
                return this._sduiManager.resolveStrongAlertRefAlerts(e);
              }
            },
            {
              key: "flush",
              value: function () {
                this._sduiManager.flush();
              }
            },
            {
              key: "dispose",
              value: function () {
                this._subs.dispose(), this._sduiManager.dispose();
              }
            }
          ]) && C(t.prototype, r),
          S && C(t, S),
          e
        );
      })();
    },
    64998: (e, t, r) => {
      r.d(t, { i: () => n });
      var n,
        i = r(57050),
        o = r(8125),
        a = r(95195),
        s = r(5114),
        u = r(83078),
        c = r(81531),
        l = r(35416),
        d = r(98182),
        f = r(26393),
        h = r(79880);
      function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function v(e, t, r) {
        return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
      }
      function m(e) {
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
              v(e, t, r[t]);
            });
        }
        return e;
      }
      function y(e, t) {
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
      function b(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != r) {
              var n,
                i,
                o = [],
                a = !0,
                s = !1;
              try {
                for (r = r.call(e); !(a = (n = r.next()).done) && (o.push(n.value), !t || o.length !== t); a = !0);
              } catch (e) {
                (s = !0), (i = e);
              } finally {
                try {
                  a || null == r.return || r.return();
                } finally {
                  if (s) throw i;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return p(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(r);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return p(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      !(function (e) {
        var t = (0, o.HP)(c.C8.Logging.getLogger);
        !(function (e) {
          e.create = function (e) {
            var r = t("SingleCardAssistant.Transformers.disablePrevNextButtons");
            return function (t) {
              var n = t.state,
                o = t.metadata;
              if (!l.nL.hasItems(n)) return r.trace("state has no feed items, returning original state"), a.left({ state: n, metadata: o });
              var c = n;
              return (0, i.zG)(
                c.currentLens.cardIndex,
                s.chain(function (e) {
                  return (0, i.zG)(
                    l.In.getActiveItem(n.currentLens),
                    s.map(function (t) {
                      return (0, i.bc)(t, e);
                    })
                  );
                }),
                s.map(function (t) {
                  var r = b(t, 2),
                    i = r[0],
                    o = r[1];
                  return l.nL.Prism.getLensWithItems().modify(function (t) {
                    if (!d.e.isSDUIItem(i) || !s.isSome(i.cardDSL)) return t;
                    var r = e.clone(i),
                      a = u.MH(r.cardDSL),
                      c = !1,
                      l = f.ab.map(a, function (e) {
                        if ("button" === e.type && e.name.value === h.MU.ButtonPrev) {
                          var t = 0 === o ? h.BN.Disabled : h.BN.Enabled;
                          return (c = c || t !== e.state), y(m({}, e), { state: t });
                        }
                        if ("button" === e.type && e.name.value === h.MU.ButtonNext) {
                          var r = o === n.currentLens.items.size - 1 ? h.BN.Disabled : h.BN.Enabled;
                          return (c = c || r !== e.state), y(m({}, e), { state: r });
                        }
                        return e;
                      });
                    return s.isSome(l) && c ? ((r = Object.assign(r, { cardDSL: l })), y(m({}, t), { items: t.items.add(r) })) : t;
                  }, c);
                }),
                s.getOrElse(function () {
                  return n;
                }),
                function (e) {
                  return a.left({ state: e, metadata: o });
                }
              );
            };
          };
        })(e.DisablePrevNextButtons || (e.DisablePrevNextButtons = {}));
      })(n || (n = {}));
    },
    84174: (e, t, r) => {
      r.d(t, { q: () => N });
      var n = r(57050),
        i = r(5114),
        o = r(95195),
        a = r(83078),
        s = r(22232),
        u = r(71249),
        c = r(8125),
        l = r(64015),
        d = r(81531),
        f = r(46680),
        h = r(33678),
        p = r(74660),
        v = r(66896),
        m = r(66268),
        y = r(14454),
        b = r(35416),
        g = r(6100),
        A = r(9922),
        w = r(32952),
        I = r(28043),
        _ = r(77176),
        S = r(98403),
        O = r(85985),
        C = r(19751),
        P = r(40151),
        E = r(16892),
        j = r(21038),
        M = r(17594),
        R = r(98182),
        k = r(52976),
        L = r(72812),
        D = r(23239);
      function T(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function x(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      function G(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function F(e, t, r) {
        return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
      }
      function z(e, t) {
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
      function B(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != r) {
              var n,
                i,
                o = [],
                a = !0,
                s = !1;
              try {
                for (r = r.call(e); !(a = (n = r.next()).done) && (o.push(n.value), !t || o.length !== t); a = !0);
              } catch (e) {
                (s = !0), (i = e);
              } finally {
                try {
                  a || null == r.return || r.return();
                } finally {
                  if (s) throw i;
                }
              }
              return o;
            }
          })(e, t) ||
          V(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function U(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return T(e);
          })(e) ||
          (function (e) {
            if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
          })(e) ||
          V(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function V(e, t) {
        if (e) {
          if ("string" == typeof e) return T(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(r)
              : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? T(e, t)
              : void 0
          );
        }
      }
      var W,
        N = (function () {
          function e(t, r, o, a, s, u, c, p) {
            var v,
              m = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : new h.A(),
              y = this;
            x(this, e),
              F(this, "_checksFeedCapabilities", void 0),
              F(this, "_lensState", void 0),
              F(this, "_alertReader", void 0),
              F(this, "_capiClient", void 0),
              F(this, "_platformEnvironment", void 0),
              F(this, "_sduiViewModel", void 0),
              F(this, "sduiActionEvents", void 0),
              F(this, "_sduiAlertIdResolver", void 0),
              F(this, "_log", void 0),
              F(this, "_subs", void 0),
              F(this, "actionEvents", void 0),
              F(this, "_focusedItem", void 0),
              F(this, "_mapToDenaliAlerts", void 0),
              (this._checksFeedCapabilities = r),
              (this._lensState = o),
              (this._alertReader = u),
              (this._capiClient = c),
              (this._platformEnvironment = m),
              (this._log = d.C8.Logging.getLogger("SDUICardsViewModelImpl", f.i.DEBUG)),
              (this._subs = new A.w.Keeper()),
              (this.actionEvents = new w.xQ()),
              (this._focusedItem = this._lensState.view(function (e) {
                return b.nL.hasItems(e)
                  ? (0, n.zG)(
                      e.currentLens.cardIndex,
                      i.chain(function (t) {
                        return e.currentLens.items.getAt(t);
                      })
                    )
                  : i.none;
              })),
              (this._mapToDenaliAlerts = function (e) {
                return (0, n.zG)(
                  e,
                  l.fw(i.option)(function (e) {
                    return y._alertReader.getById(y._mapToDenaliAlertId(e));
                  }),
                  i.filter(l.Od)
                );
              }),
              (this._sduiAlertIdResolver = (0, L.X)(a.alertIdResolver, this._log));
            var g = D.h.create(i.none);
            (this._sduiViewModel = new L.x(t, a, s, c, g, m)),
              (this.sduiActionEvents = this._sduiViewModel.sduiActionEvents),
              (v = this._subs).push.apply(
                v,
                U(this._integrateCardsViewModel(p)).concat([
                  (0, n.zG)(
                    this._focusedItem,
                    I.x(function (e, t) {
                      return i.getEq(E.s.eqById).equals(e, t);
                    }),
                    _.U(i.chain(i.fromPredicate(R.e.isSDUIItem))),
                    _.U(
                      i.map(function (e) {
                        return j.j.Item.Id.from(e.id);
                      })
                    )
                  ).subscribe(S.wW(g)),
                  this._sduiViewModel
                ])
              );
          }
          var t, r, c;
          return (
            (t = e),
            (r = [
              {
                key: "_integrateCardsViewModel",
                value: function (e) {
                  return [
                    this.actionEvents.subscribe(e.actionEvents),
                    e.actionEvents.pipe(O.h(y.t.isSduiCardAction)).subscribe(this.sduiActionEvents)
                  ];
                }
              },
              {
                key: "_sduiActionsHandler",
                value: function () {
                  var e = this;
                  return this.sduiActionEvents.pipe(
                    C.skipBy(y.t.eq),
                    _.U(function (t) {
                      var r = t.cardId,
                        u = t.actions,
                        c = t.scope;
                      return function (t) {
                        return (
                          e._log.info("sdui card action:", { cardId: r, actions: u }),
                          (0, n.zG)(
                            u,
                            l.u4(t, function (t, u) {
                              switch (u.type) {
                                case "notify":
                                case "nextCard":
                                case "prevCard":
                                case "openSettings":
                                case "openToneDetector":
                                case "openFeedback":
                                case "upgradeToPremium":
                                case "openLearnMore":
                                case "transition":
                                case "openCreateSnippetModal":
                                case "nativeOpenAssistant":
                                case "showHighlights":
                                case "hideHighlights":
                                case "selectAlternative":
                                case "openLink":
                                case "copyToClipboard":
                                case "pushAssistantFeed":
                                case "popAssistantFeed":
                                case "focusAssistantCard":
                                case "switchView":
                                case "newRevision":
                                case "stopApplyingAlerts":
                                case "closePopover":
                                case "interactPopover":
                                case "openGrammarlyGo":
                                case "enablePlagiarismCheck":
                                case "disablePlagiarismCheck":
                                case "openPerformanceScore":
                                  return t;
                                case "removeRoot":
                                  return (0, n.zG)(
                                    t.currentLens.items.get(r),
                                    i.map(function (e) {
                                      return e.value;
                                    }),
                                    i.map(e._checksFeedCapabilities.remove(n.W8, n.W8)),
                                    i.map(function (e) {
                                      return b.nL.Prism.getLens()
                                        .compose(g.v.Prism.items)
                                        .set(
                                          t.currentLens.items.modifyWith([[e.id, e]], function () {
                                            return e;
                                          }),
                                          t
                                        );
                                    }),
                                    i.getOrElse((0, n.a9)(t))
                                  );
                                case "applyAlerts":
                                  return (0, n.zG)(
                                    t.currentLens.items.get(r),
                                    i.map(function (e) {
                                      return e.value;
                                    }),
                                    o.fromOption(function () {
                                      return new Error("unknown cardId: ".concat(r));
                                    }),
                                    o.bimap(
                                      function (t) {
                                        return e._log.error("error in processing applyAlerts action", t);
                                      },
                                      function (t) {
                                        (0, n.zG)(
                                          e._sduiAlertIdResolver(c.alertRefs),
                                          a.bw(function (r) {
                                            requestAnimationFrame(function () {
                                              (0, n.zG)(
                                                r,
                                                e._mapToDenaliAlerts,
                                                i.map(
                                                  l.UI(function (r) {
                                                    return e.actionEvents.next({
                                                      type: m.lY.Type.alertApply,
                                                      id: t.id,
                                                      eligibleForSurvey: r.acceptSurvey,
                                                      eligibleForGbPrompt: r.gbPrompt,
                                                      alertId: r.id,
                                                      alternativeIndex: u.alternativeIndex,
                                                      cardType: m.lY.getCardType({ activeAlert: M.$.fromModel(r) })
                                                    });
                                                  })
                                                )
                                              );
                                            });
                                          })
                                        );
                                      }
                                    ),
                                    function () {
                                      return t.patch({ alertSource: p.l$.sidebar });
                                    }
                                  );
                                case "closeCard":
                                  return t.patch({
                                    currentLens: b.nL.hasItems(t) ? e._checksFeedCapabilities.unselectItem()(t.currentLens) : t.currentLens,
                                    switchOrder: "lensOrder",
                                    alertSource: p.l$.sidebar
                                  });
                                case "removeAlerts":
                                  return (
                                    (0, n.zG)(
                                      e._sduiAlertIdResolver(c.alertRefs),
                                      a.bw(function (t) {
                                        requestAnimationFrame(function () {
                                          (0, n.zG)(
                                            t,
                                            e._mapToDenaliAlerts,
                                            i.map(
                                              l.UI(function (t) {
                                                return e.actionEvents.next({
                                                  type: m.lY.Type.alertIgnore,
                                                  id: r,
                                                  alertId: t.id,
                                                  eligibleForSurvey: t.dismissSurvey
                                                });
                                              })
                                            )
                                          );
                                        });
                                      })
                                    ),
                                    t.patch({ alertSource: p.l$.sidebar })
                                  );
                                case "highlightAlert":
                                  return (0, n.zG)(
                                    e._sduiAlertIdResolver(c.alertRefs),
                                    i.chain(e._mapToDenaliAlerts),
                                    i.map(function (e) {
                                      if (!b.nL.hasItems(t)) return t;
                                      var r = function (e, t) {
                                          return function (r) {
                                            return (0, n.zG)(
                                              r.items.update(e, function (e) {
                                                return (0, n.zG)(
                                                  e,
                                                  i.fromPredicate(k.P.isAlertRefSDUIItem),
                                                  i.chain(k.P.Capabilities.setActiveAlertId(t)),
                                                  i.chain(k.P.Capabilities.setActiveHighlightIndex(u.highlightIndex)),
                                                  i.getOrElse((0, n.a9)(e))
                                                );
                                              }),
                                              o.fold(
                                                function () {
                                                  return r;
                                                },
                                                function (e) {
                                                  return z(
                                                    (function (e) {
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
                                                            F(e, t, r[t]);
                                                          });
                                                      }
                                                      return e;
                                                    })({}, r),
                                                    { items: e }
                                                  );
                                                }
                                              )
                                            );
                                          };
                                        },
                                        a = e[0];
                                      return (0, n.zG)(
                                        b.In.getActiveItem(t.currentLens),
                                        i.map(function (e) {
                                          return b.nL.Prism.getLensWithItems().modify(r(e.id, a.id), t);
                                        }),
                                        i.map(function (e) {
                                          return e.patch({ alertSource: p.l$.sidebar });
                                        }),
                                        i.getOrElse((0, n.a9)(t))
                                      );
                                    }),
                                    i.getOrElse((0, n.a9)(t))
                                  );
                                default:
                                  (0, s.L0)(u);
                              }
                            })
                          )
                        );
                      };
                    })
                  );
                }
              },
              {
                key: "getApplicatorEffects",
                value: function () {
                  return (0, n.zG)(
                    [[this._sduiActionsHandler(), "sduiActions"]],
                    u.UI(function (e) {
                      var t = B(e, 2),
                        r = t[0],
                        n = t[1];
                      return { id: "cardsViewModel.effects.".concat(n), when: v.R.isWithAlertsId, what: b.nL.Effect.Applicator.create(r) };
                    })
                  );
                }
              },
              {
                key: "onAssistantClose",
                value: function () {
                  this._sduiViewModel.onAssistantClose();
                }
              },
              {
                key: "dispose",
                value: function () {
                  this._subs.dispose();
                }
              },
              {
                key: "_mapToDenaliAlertId",
                value: function (e) {
                  return "".concat(e);
                }
              }
            ]),
            r && G(t.prototype, r),
            c && G(t, c),
            e
          );
        })();
      !(function (e) {
        (e.itemsLens = b.nL.Prism.getLens().compose(g.v.Prism.items)),
          (e.createLegacy = function (e, t, r, s, u, c, l) {
            var d = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : new h.A(),
              f = {
                enablePlagiarismSearch: function () {
                  return Promise.resolve(o.right(void 0));
                },
                disablePlagiarismSearch: function () {
                  return Promise.resolve(o.right(void 0));
                }
              };
            return (0, n.zG)(
              a.gz(e, s, u),
              i.fold(
                function () {
                  return new W.Mock();
                },
                function (e) {
                  var n = B(e, 3),
                    i = n[0],
                    o = n[1],
                    a = n[2];
                  return new N(i, t, r, o, a, c, f, l, d);
                }
              )
            );
          });
        e.Mock = function e() {
          x(this, e),
            F(this, "actionEvents", new w.xQ()),
            F(this, "sduiActionEvents", new w.xQ()),
            F(this, "sideEffect", { id: "cardsViewModelMock", when: v.R.isWithAlertsId, what: b.nL.Effect.Applicator.create(P.E) }),
            F(this, "getApplicatorEffects", function () {
              return [{ id: "cardsViewModelMock", when: v.R.isWithAlertsId, what: b.nL.Effect.Applicator.create(P.E) }];
            }),
            F(this, "onAssistantClose", c.Q1),
            F(this, "dispose", c.Q1);
        };
      })(W || (W = {}));
    }
  }
]);
