(self.webpackChunk = self.webpackChunk || []).push([
  [2812],
  {
    14454: (e, t, n) => {
      n.d(t, { t: () => a });
      var r = n(57050),
        i = n(40154);
      n(83257);
      function o(e, t) {
        return { decode: e.decode, encode: t.encode };
      }
      function s(e) {
        return { decode: e.decode, encode: r.yR };
      }
      i.Z_, i.Rx, i.O7, i.dX, i.mI;
      var a,
        c,
        u,
        d,
        l,
        p,
        f = n(85384),
        v = n(73915),
        h = n(73975),
        y = n(95195),
        m = n(22232),
        g = n(66268),
        I = n(98992);
      (c = a || (a = {})),
        (u = c.Type = g.lY.Type.sduiCardAction),
        (d = v.n(f.z2)(I.eX)),
        (c.eq = h.f7(function (e, t) {
          return e.type === u && e.type === t.type && e.cardId === t.cardId && d.equals(e.actions, t.actions) && e.scope === t.scope;
        })),
        (l = o(v.n(i.z2)(I.eX), {
          encode: function (e) {
            return e;
          }
        })),
        (p = (0, r.ls)(
          l.decode,
          y.mapLeft(function (e) {
            return new Error(i.ii(e));
          })
        )),
        (c.isSduiCardAction = function (e) {
          return (
            e.type === a.Type &&
            ((n = e.actions), y.isRight(p(n))) &&
            "object" == typeof (t = e.scope) &&
            null != t &&
            Object.keys(t).every(function (e) {
              var n = t[e];
              return "alertRefs" === e ? Array.isArray(n) : ((0, m.L0)(e), !1);
            })
          );
          var t, n;
        });
    },
    72812: (e, t, n) => {
      n.d(t, { X: () => U, x: () => x });
      var r = n(57050),
        i = n(5114),
        o = n(22232),
        s = n(71249),
        a = n(83078),
        c = n(95195),
        u = n(64015),
        d = n(81531),
        l = n(46680),
        p = n(33678),
        f = n(14454),
        v = n(9922),
        h = n(32952),
        y = n(41398),
        m = n(85985),
        g = n(77176),
        I = n(16118),
        b = n(60797),
        _ = n(2834),
        A = n(19751),
        w = n(50628),
        S = n(28811),
        C = n(78929),
        F = n(21038),
        O = n(12054),
        R = n(31668),
        E = n(26393);
      function M(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function P(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      function k(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }
      function j(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function G(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              j(e, t, n[t]);
            });
        }
        return e;
      }
      function T(e, t) {
        return (
          (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t &&
                    (r = r.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
                }
                return n;
              })(Object(t)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
          e
        );
      }
      function z(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != n) {
              var r,
                i,
                o = [],
                s = !0,
                a = !1;
              try {
                for (n = n.call(e); !(s = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); s = !0);
              } catch (e) {
                (a = !0), (i = e);
              } finally {
                try {
                  s || null == n.return || n.return();
                } finally {
                  if (a) throw i;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return M(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return M(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var x = (function () {
        function e(t, n, r, i, o) {
          var s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new p.A();
          P(this, e),
            j(this, "_sduiService", void 0),
            j(this, "_sduiManager", void 0),
            j(this, "_sduiFeedManager", void 0),
            j(this, "_capiClient", void 0),
            j(this, "_focusedItem", void 0),
            j(this, "_platformEnvironment", void 0),
            j(this, "_log", void 0),
            j(this, "_subs", void 0),
            j(this, "_sduiAlertIdResolver", void 0),
            j(this, "sduiActionEvents", void 0),
            (this._sduiService = t),
            (this._sduiManager = n),
            (this._sduiFeedManager = r),
            (this._capiClient = i),
            (this._focusedItem = o),
            (this._platformEnvironment = s),
            (this._log = d.C8.Logging.getLogger("SduiViewModelImpl", l.i.DEBUG)),
            (this._subs = new v.w.Keeper()),
            (this.sduiActionEvents = new h.xQ()),
            (this._sduiAlertIdResolver = U(this._sduiManager.alertIdResolver, this._log)),
            this._subs.push(
              this._handleSduiActions(),
              this._handleSduiCardOnFocus(),
              this._handleSduiCardOnBlur(),
              this._handleSduiFeedRemove(),
              this._handleSduiFeedEmpty(),
              this._handleSduiOnEmptyEvents()
            );
        }
        var t, n, u;
        return (
          (t = e),
          (n = [
            {
              key: "onAssistantClose",
              value: function () {
                var e = this;
                (0, r.zG)(
                  this._sduiFeedManager.currentFeed,
                  i.map(function (e) {
                    return e.feedId;
                  }),
                  i.chain(function (t) {
                    return S.a.get(t)(e._sduiManager.state.get());
                  }),
                  i.chain(function (e) {
                    return (0, r.zG)(
                      E.ab.findFirst(e.content, "assistantFeed"),
                      i.filter(function (e) {
                        return Array.isArray(e.onAssistantClose) && e.onAssistantClose.length > 0;
                      }),
                      i.map(function (t) {
                        return [t, e];
                      })
                    );
                  }),
                  i.map(function (t) {
                    var n = z(t, 2),
                      r = n[0],
                      i = n[1];
                    return e.sduiActionEvents.next({
                      type: f.t.Type,
                      sourceId: r.id,
                      cardId: i.id,
                      actions: r.onAssistantClose,
                      scope: { alertRefs: i.alertIds }
                    });
                  })
                );
              }
            },
            {
              key: "_handleSduiOnEmptyEvents",
              value: function () {
                var e = this;
                return this._sduiManager.onAlertsRefEmpty
                  .pipe(
                    y.M(this._focusedItem),
                    m.h(function (e) {
                      var t = z(e, 2),
                        n = t[0].sduiRootId,
                        o = t[1];
                      return (0, r.zG)(
                        o,
                        i.filter(function (e) {
                          return e === n;
                        }),
                        i.isSome
                      );
                    }),
                    g.U(function (e) {
                      return z(e, 1)[0];
                    })
                  )
                  .subscribe(function (t) {
                    var n = t.sduiId,
                      r = t.sduiRootId,
                      i = t.emptyStrongAlertRef;
                    return e.sduiActionEvents.next({
                      type: f.t.Type,
                      sourceId: n,
                      cardId: r,
                      actions: i.onEmpty,
                      scope: { alertRefs: i.alertIds }
                    });
                  });
              }
            },
            {
              key: "_handleSduiFeedRemove",
              value: function () {
                var e = this;
                return this._sduiFeedManager.onFeedRemove.subscribe(function (t) {
                  (0, o.kG)("assistantFeed" === t.content.type),
                    e.sduiActionEvents.next({
                      type: f.t.Type,
                      sourceId: t.id,
                      cardId: t.id,
                      actions: t.content.onRemove,
                      scope: { alertRefs: [] }
                    });
                });
              }
            },
            {
              key: "_handleSduiFeedEmpty",
              value: function () {
                var e = this;
                return this._sduiFeedManager.onFeedEmpty.subscribe(function (t) {
                  (0, o.kG)("assistantFeed" === t.content.type),
                    t.content.onEmpty &&
                      e.sduiActionEvents.next({
                        type: f.t.Type,
                        sourceId: t.id,
                        cardId: t.id,
                        actions: t.content.onEmpty,
                        scope: { alertRefs: [] }
                      });
                });
              }
            },
            {
              key: "_handleSduiCardOnBlur",
              value: function () {
                var e = this;
                return this._focusedItem
                  .pipe(
                    I.G(),
                    g.U(function (t) {
                      var n = z(t, 1)[0];
                      return (0, r.zG)(
                        n,
                        i.chain(function (t) {
                          return (0, r.zG)(
                            e._sduiManager.findFirstCardWithContent(t),
                            i.filter(C.E.isAssistantCardContent),
                            i.map(function (e) {
                              return [e, t];
                            })
                          );
                        })
                      );
                    }),
                    b.oA,
                    _.b(function (t) {
                      var n = z(t, 2),
                        o = n[0],
                        a = o.card,
                        c = o.parentStrongAlertRef,
                        u = n[1];
                      e.sduiActionEvents.next({
                        type: f.t.Type,
                        sourceId: a.id,
                        cardId: u,
                        actions: a.onBlur,
                        scope: {
                          alertRefs: (0, r.zG)(
                            c,
                            i.map(function (e) {
                              return e.alertIds;
                            }),
                            i.getOrElse((0, r.a9)(s.cS))
                          )
                        }
                      });
                    })
                  )
                  .subscribe();
              }
            },
            {
              key: "_handleSduiCardOnFocus",
              value: function () {
                var e = this;
                return this._focusedItem
                  .pipe(
                    b.oA,
                    g.U(function (t) {
                      return (0, r.zG)(
                        e._sduiManager.findFirstCardWithContent(t),
                        i.map(function (e) {
                          return [e, t];
                        })
                      );
                    }),
                    b.oA
                  )
                  .subscribe(function (t) {
                    var n = z(t, 2),
                      o = n[0],
                      s = o.card,
                      a = o.parentStrongAlertRef,
                      c = n[1];
                    e._sduiFeedManager.notifyCardFocused(c),
                      e.sduiActionEvents.next({
                        type: f.t.Type,
                        sourceId: s.id,
                        cardId: c,
                        actions: s.onFocus,
                        scope: {
                          alertRefs: (0, r.zG)(
                            a,
                            i.map(function (e) {
                              return e.alertIds;
                            }),
                            i.getOrElse(function () {
                              return [];
                            })
                          )
                        }
                      });
                  });
              }
            },
            {
              key: "_handleSduiActions",
              value: function () {
                var e = this;
                return this.sduiActionEvents
                  .pipe(
                    A.skipBy(f.t.eq),
                    _.b(function (t) {
                      var n = t.cardId,
                        s = t.sourceId,
                        u = t.actions,
                        d = t.scope;
                      e._log.info("sdui card action:", { cardId: n, actions: u, scope: d }),
                        u.forEach(function (t) {
                          switch (t.type) {
                            case "notify":
                              return void e._sduiService.sendUserAction(t.sourceId || s, t.userAction);
                            case "removeRoot":
                              return void requestAnimationFrame(function () {
                                e._sduiManager.pushRemovedRoot([F.j.Item.Id.from(n), O.i5.RemoveRootSDUIAction]);
                              });
                            case "applyAlerts":
                            case "closeCard":
                            case "highlightAlert":
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
                            case "stopApplyingAlerts":
                            case "selectAlternative":
                            case "copyToClipboard":
                            case "newRevision":
                            case "openGrammarlyGo":
                            case "openPerformanceScore":
                            case "nativeOpenUserSatisfactionFeedback":
                              return;
                            case "removeAlerts":
                              return void (0, r.zG)(
                                e._sduiAlertIdResolver(d.alertRefs),
                                a.bw(function () {
                                  requestAnimationFrame(function () {
                                    e._sduiManager.pushRemovedAlerts([d.alertRefs.map(F.j.AlertId.from), O.i5.RemoveAlertsSDUIAction]);
                                  });
                                })
                              );
                            case "openLink":
                              return void e._platformEnvironment.actions.openPopup(new R.Z(t.url));
                            case "pushAssistantFeed":
                              return void requestAnimationFrame(function () {
                                return (0, r.zG)(
                                  e._sduiFeedManager.pushFeed(F.j.Item.Id.from(t.feedId), t.cardId),
                                  c.mapLeft(function (t) {
                                    return e._log.error(t), t;
                                  })
                                );
                              });
                            case "popAssistantFeed":
                              return void requestAnimationFrame(function () {
                                return e._sduiFeedManager.popFeed(i.fromNullable(t.fallbackFeed));
                              });
                            case "focusAssistantCard":
                              return void requestAnimationFrame(function () {
                                return e._sduiFeedManager.focusCard(t.cardId);
                              });
                            case "switchView":
                              var u = { where: t.where, selected: t.selected, sduiRootId: F.j.Item.Id.from(n) };
                              return e._switchCallerCard(u), e._switchActiveCard(u), e._switchActiveFeed(u), void e._switchActivePopover(u);
                            case "interactPopover":
                              var l = e._sduiManager.popoverManager.getInteractionActions(t.rootPopoverId, t.popoverViewId, t.interaction);
                              return void (
                                l.length > 0 &&
                                e.sduiActionEvents.next({
                                  type: f.t.Type,
                                  sourceId: t.rootPopoverId,
                                  cardId: t.popoverViewId,
                                  actions: l,
                                  scope: d
                                })
                              );
                            case "closePopover":
                              return (
                                e._sduiManager.popoverManager.removePopover(t.rootPopoverId),
                                void e.sduiActionEvents.next({
                                  type: f.t.Type,
                                  sourceId: t.rootPopoverId,
                                  cardId: t.rootPopoverId,
                                  actions: [{ type: "removeRoot" }],
                                  scope: d
                                })
                              );
                            case "enablePlagiarismCheck":
                              return void e._capiClient.enablePlagiarismSearch();
                            case "disablePlagiarismCheck":
                              return void e._capiClient.disablePlagiarismSearch();
                            default:
                              (0, o.L0)(t);
                          }
                        });
                    })
                  )
                  .subscribe();
              }
            },
            {
              key: "_switchCallerCard",
              value: function (e) {
                this._sduiManager.pushSwitchView(e);
              }
            },
            {
              key: "_switchActiveCard",
              value: function (e) {
                var t = this;
                (0, r.zG)(
                  this._focusedItem.get(),
                  i.filter(function (t) {
                    return e.sduiRootId !== t;
                  }),
                  a.bw(function (n) {
                    return t._sduiManager.pushSwitchView(T(G({}, e), { sduiRootId: F.j.Item.Id.from(n) }));
                  })
                );
              }
            },
            {
              key: "_switchActiveFeed",
              value: function (e) {
                var t = this;
                (0, r.zG)(
                  this._sduiFeedManager.currentFeed,
                  i.filter(function (t) {
                    return t.feedId !== e.sduiRootId;
                  }),
                  a.bw(function (n) {
                    var r = n.feedId;
                    return t._sduiManager.pushSwitchView(T(G({}, e), { sduiRootId: r }));
                  })
                );
              }
            },
            {
              key: "_switchActivePopover",
              value: function (e) {
                var t = this;
                this._sduiManager.popoverManager.activePopoverView.pipe(w.P()).subscribe(
                  a.bw(function (n) {
                    var r = n.rootPopoverId;
                    t._sduiManager.pushSwitchView(T(G({}, e), { sduiRootId: r }));
                  })
                );
              }
            },
            {
              key: "dispose",
              value: function () {
                this._subs.dispose();
              }
            }
          ]) && k(t.prototype, n),
          u && k(t, u),
          e
        );
      })();
      function U(e, t) {
        return function (n) {
          return (0, r.zG)(
            n,
            u.UI(e),
            u.vP(i.option),
            a.ew(function () {
              return t.error("Could not resolve strong alert ref for ".concat(JSON.stringify(n)));
            }),
            i.filter(u.Od),
            a.ew(function () {
              return t.error("Strong alert refs are empty");
            })
          );
        };
      }
    }
  }
]);
