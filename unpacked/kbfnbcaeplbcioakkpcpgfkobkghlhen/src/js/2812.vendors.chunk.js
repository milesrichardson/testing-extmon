(self.webpackChunk = self.webpackChunk || []).push([
  [2812],
  {
    14454: (e, t, r) => {
      r.d(t, { t: () => a });
      var n = r(57050),
        i = r(40154);
      r(83257);
      function o(e, t) {
        return { decode: e.decode, encode: t.encode };
      }
      function s(e) {
        return { decode: e.decode, encode: n.yR };
      }
      i.Z_, i.Rx, i.O7, i.dX, i.mI;
      var a,
        c,
        u,
        d,
        l,
        p,
        f = r(85384),
        v = r(73915),
        h = r(73975),
        y = r(95195),
        m = r(22232),
        g = r(66268),
        I = r(98992);
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
        (p = (0, n.ls)(
          l.decode,
          y.mapLeft(function (e) {
            return new Error(i.ii(e));
          })
        )),
        (c.isSduiCardAction = function (e) {
          return (
            e.type === a.Type &&
            ((r = e.actions), y.isRight(p(r))) &&
            "object" == typeof (t = e.scope) &&
            null != t &&
            Object.keys(t).every(function (e) {
              var r = t[e];
              return "alertRefs" === e ? Array.isArray(r) : ((0, m.L0)(e), !1);
            })
          );
          var t, r;
        });
    },
    72812: (e, t, r) => {
      r.d(t, { X: () => D, x: () => x });
      var n = r(57050),
        i = r(5114),
        o = r(22232),
        s = r(71249),
        a = r(83078),
        c = r(95195),
        u = r(64015),
        d = r(81531),
        l = r(46680),
        p = r(33678),
        f = r(14454),
        v = r(9922),
        h = r(32952),
        y = r(41398),
        m = r(85985),
        g = r(77176),
        I = r(16118),
        b = r(60797),
        _ = r(2834),
        A = r(19751),
        w = r(50628),
        S = r(28811),
        C = r(78929),
        F = r(21038),
        R = r(12054),
        O = r(31668),
        E = r(26393);
      function M(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function P(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      function k(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function j(e, t, r) {
        return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
      }
      function G(e) {
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
              j(e, t, r[t]);
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
      function z(e, t) {
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
                s = !0,
                a = !1;
              try {
                for (r = r.call(e); !(s = (n = r.next()).done) && (o.push(n.value), !t || o.length !== t); s = !0);
              } catch (e) {
                (a = !0), (i = e);
              } finally {
                try {
                  s || null == r.return || r.return();
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
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(r);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return M(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var x = (function () {
        function e(t, r, n, i, o) {
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
            (this._sduiManager = r),
            (this._sduiFeedManager = n),
            (this._capiClient = i),
            (this._focusedItem = o),
            (this._platformEnvironment = s),
            (this._log = d.C8.Logging.getLogger("SduiViewModelImpl", l.i.DEBUG)),
            (this._subs = new v.w.Keeper()),
            (this.sduiActionEvents = new h.xQ()),
            (this._sduiAlertIdResolver = D(this._sduiManager.alertIdResolver, this._log)),
            this._subs.push(
              this._handleSduiActions(),
              this._handleSduiCardOnFocus(),
              this._handleSduiCardOnBlur(),
              this._handleSduiFeedRemove(),
              this._handleSduiFeedEmpty(),
              this._handleSduiOnEmptyEvents()
            );
        }
        var t, r, u;
        return (
          (t = e),
          (r = [
            {
              key: "onAssistantClose",
              value: function () {
                var e = this;
                (0, n.zG)(
                  this._sduiFeedManager.currentFeed,
                  i.map(function (e) {
                    return e.feedId;
                  }),
                  i.chain(function (t) {
                    return S.a.get(t)(e._sduiManager.state.get());
                  }),
                  i.chain(function (e) {
                    return (0, n.zG)(
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
                    var r = z(t, 2),
                      n = r[0],
                      i = r[1];
                    return e.sduiActionEvents.next({
                      type: f.t.Type,
                      sourceId: n.id,
                      cardId: i.id,
                      actions: n.onAssistantClose,
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
                        r = t[0].sduiRootId,
                        o = t[1];
                      return (0, n.zG)(
                        o,
                        i.filter(function (e) {
                          return e === r;
                        }),
                        i.isSome
                      );
                    }),
                    g.U(function (e) {
                      return z(e, 1)[0];
                    })
                  )
                  .subscribe(function (t) {
                    var r = t.sduiId,
                      n = t.sduiRootId,
                      i = t.emptyStrongAlertRef;
                    return e.sduiActionEvents.next({
                      type: f.t.Type,
                      sourceId: r,
                      cardId: n,
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
                      var r = z(t, 1)[0];
                      return (0, n.zG)(
                        r,
                        i.chain(function (t) {
                          return (0, n.zG)(
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
                      var r = z(t, 2),
                        o = r[0],
                        a = o.card,
                        c = o.parentStrongAlertRef,
                        u = r[1];
                      e.sduiActionEvents.next({
                        type: f.t.Type,
                        sourceId: a.id,
                        cardId: u,
                        actions: a.onBlur,
                        scope: {
                          alertRefs: (0, n.zG)(
                            c,
                            i.map(function (e) {
                              return e.alertIds;
                            }),
                            i.getOrElse((0, n.a9)(s.cS))
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
                      return (0, n.zG)(
                        e._sduiManager.findFirstCardWithContent(t),
                        i.map(function (e) {
                          return [e, t];
                        })
                      );
                    }),
                    b.oA
                  )
                  .subscribe(function (t) {
                    var r = z(t, 2),
                      o = r[0],
                      s = o.card,
                      a = o.parentStrongAlertRef,
                      c = r[1];
                    e._sduiFeedManager.notifyCardFocused(c),
                      e.sduiActionEvents.next({
                        type: f.t.Type,
                        sourceId: s.id,
                        cardId: c,
                        actions: s.onFocus,
                        scope: {
                          alertRefs: (0, n.zG)(
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
                      var r = t.cardId,
                        s = t.sourceId,
                        u = t.actions,
                        d = t.scope;
                      e._log.info("sdui card action:", { cardId: r, actions: u, scope: d }),
                        u.forEach(function (t) {
                          switch (t.type) {
                            case "notify":
                              return void e._sduiService.sendUserAction(t.sourceId || s, t.userAction);
                            case "removeRoot":
                              return void requestAnimationFrame(function () {
                                e._sduiManager.pushRemovedRoot([F.j.Item.Id.from(r), R.i5.RemoveRootSDUIAction]);
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
                              return;
                            case "removeAlerts":
                              return void (0, n.zG)(
                                e._sduiAlertIdResolver(d.alertRefs),
                                a.bw(function () {
                                  requestAnimationFrame(function () {
                                    e._sduiManager.pushRemovedAlerts([d.alertRefs.map(F.j.AlertId.from), R.i5.RemoveAlertsSDUIAction]);
                                  });
                                })
                              );
                            case "openLink":
                              return void e._platformEnvironment.actions.openPopup(new O.Z(t.url));
                            case "pushAssistantFeed":
                              return void requestAnimationFrame(function () {
                                return (0, n.zG)(
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
                              var u = { where: t.where, selected: t.selected, sduiRootId: F.j.Item.Id.from(r) };
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
                (0, n.zG)(
                  this._focusedItem.get(),
                  i.filter(function (t) {
                    return e.sduiRootId !== t;
                  }),
                  a.bw(function (r) {
                    return t._sduiManager.pushSwitchView(T(G({}, e), { sduiRootId: F.j.Item.Id.from(r) }));
                  })
                );
              }
            },
            {
              key: "_switchActiveFeed",
              value: function (e) {
                var t = this;
                (0, n.zG)(
                  this._sduiFeedManager.currentFeed,
                  i.filter(function (t) {
                    return t.feedId !== e.sduiRootId;
                  }),
                  a.bw(function (r) {
                    var n = r.feedId;
                    return t._sduiManager.pushSwitchView(T(G({}, e), { sduiRootId: n }));
                  })
                );
              }
            },
            {
              key: "_switchActivePopover",
              value: function (e) {
                var t = this;
                this._sduiManager.popoverManager.activePopoverView.pipe(w.P()).subscribe(
                  a.bw(function (r) {
                    var n = r.rootPopoverId;
                    t._sduiManager.pushSwitchView(T(G({}, e), { sduiRootId: n }));
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
          ]) && k(t.prototype, r),
          u && k(t, u),
          e
        );
      })();
      function D(e, t) {
        return function (r) {
          return (0, n.zG)(
            r,
            u.UI(e),
            u.vP(i.option),
            a.ew(function () {
              return t.error("Could not resolve strong alert ref for ".concat(JSON.stringify(r)));
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
