(self.webpackChunk = self.webpackChunk || []).push([
  [4650],
  {
    78929: (e, t, n) => {
      n.d(t, { E: () => U, G: () => te });
      var r,
        o,
        i,
        u = n(64015),
        a = n(17889),
        s = n(57050),
        c = n(23239),
        d = n(19429),
        f = n(81670),
        l = n(92843),
        v = n(93756),
        p = n(5114),
        m = n(95195),
        h = n(71249),
        I = n(55415),
        y = n(83078),
        w = n(22232),
        g = n(8125),
        b = n(81531),
        S = n(46680),
        R = n(21038),
        A = n(12054),
        _ = n(64681);
      function O(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function D(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i = [],
                u = !0,
                a = !1;
              try {
                for (n = n.call(e); !(u = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); u = !0);
              } catch (e) {
                (a = !0), (o = e);
              } finally {
                try {
                  u || null == n.return || n.return();
                } finally {
                  if (a) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return O(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      ((o = r || (r = {})).iso = function () {
        return _.k4();
      }),
        (o.empty = function () {
          return { sduiQueue: new Map() };
        }),
        (o.removeAllBySduiId = function (e) {
          return function (t) {
            return (0, s.zG)(
              r.toQueueValuesArray(t),
              h.hX(function (t) {
                return 0 === t.id.indexOf("".concat(e.event.sduiRootId, "_"));
              }),
              function (e) {
                return r.removeItems(e)(t), e;
              }
            );
          };
        }),
        (o.removeEarlierItemsBySduiId = function (e) {
          return function (t) {
            return (0, s.zG)(
              r.toQueueValuesArray(t),
              h.hX(function (t) {
                return 0 === t.id.indexOf("".concat(e.event.sduiRootId, "_")) && t.order < e.order;
              }),
              function (e) {
                return r.removeItems(e)(t), e;
              }
            );
          };
        }),
        (o.addItem = function (e) {
          return function (t) {
            t.sduiQueue.set(e.id, e);
          };
        }),
        (o.removeItems = function (e) {
          return function (t) {
            e.forEach(function (e) {
              return t.sduiQueue.delete(e.id);
            });
          };
        }),
        (o.toQueueValuesArray = function (e) {
          return Array.from(e.sduiQueue.values());
        }),
        (function (e) {
          var t,
            n,
            o,
            i = function e() {
              !(function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              })(this, e);
            };
          (o = 0),
            (n = "QueueCounter") in (t = i)
              ? Object.defineProperty(t, n, { value: o, enumerable: !0, configurable: !0, writable: !0 })
              : (t[n] = o);
          e.show = {
            show: function (e) {
              return Array.from(r.iso().unwrap(e).sduiQueue.entries())
                .map(function (e) {
                  var t = D(e, 2),
                    n = t[0],
                    r = t[1];
                  return ""
                    .concat(n, " - { id: ")
                    .concat(r.id, " sduiRootId: ")
                    .concat(r.event.sduiRootId, ", kind: ")
                    .concat(r.event.kind);
                })
                .join(";\n");
            }
          };
          !(function (e) {
            var t;
            !(function (e) {
              e.from = function (e) {
                return "".concat(e);
              };
            })((t = e.Id || (e.Id = {})));
            e.fromEvent = function (e) {
              return { id: t.from("".concat(e.sduiRootId, "_").concat(++i.QueueCounter)), order: i.QueueCounter, event: e };
            };
          })(e.Item || (e.Item = {}));
          (e.empty = function () {
            return r.iso().wrap(r.empty());
          }),
            (e.removeAllBySduiId = function (e) {
              return function (t) {
                return (0, s.zG)(r.iso().unwrap(t), r.removeAllBySduiId(e));
              };
            }),
            (e.addItem = function (e) {
              return function (t) {
                return (0, s.zG)(r.iso().unwrap(t), r.addItem(e));
              };
            }),
            (e.removeItems = function (e) {
              return function (t) {
                return (0, s.zG)(r.iso().unwrap(t), r.removeItems(e));
              };
            }),
            (e.removeEarlierItemsBySduiId = function (e) {
              return function (t) {
                return (0, s.zG)(r.iso().unwrap(t), r.removeEarlierItemsBySduiId(e));
              };
            }),
            (e.toQueueValuesArray = function (e) {
              return (0, s.zG)(r.iso().unwrap(e), r.toQueueValuesArray);
            });
        })(i || (i = {}));
      var U,
        E = n(28811),
        k = n(31539),
        j = n(32952),
        z = n(9922),
        P = n(24209),
        G = n(77843),
        C = n(93508),
        M = n(77176),
        F = n(2834),
        V = n(67434),
        T = n(60797),
        x = n(36919),
        Q = n(85985),
        K = n(41398),
        B = n(24055),
        N = n(26393),
        L = n(4477);
      function q(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function J(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      function W(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }
      function X(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function Z(e) {
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
              X(e, t, n[t]);
            });
        }
        return e;
      }
      function $(e, t) {
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
      function H(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i = [],
                u = !0,
                a = !1;
              try {
                for (n = n.call(e); !(u = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); u = !0);
              } catch (e) {
                (a = !0), (o = e);
              } finally {
                try {
                  u || null == n.return || n.return();
                } finally {
                  if (a) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return q(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return q(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      !(function (e) {
        (e.create = function (e, t) {
          return { card: e, parentStrongAlertRef: t };
        }),
          (e.isAssistantCardContent = function (e) {
            return "assistantCard" === e.card.type;
          }),
          (e.isInlineCardContent = function (e) {
            return "inlineCard" === e.card.type;
          });
      })(U || (U = {}));
      var Y,
        ee,
        te = (function () {
          function e(t, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new L.J(),
              o = this;
            J(this, e),
              X(this, "alertIdResolver", void 0),
              X(this, "popoverManager", void 0),
              X(this, "_state", void 0),
              X(this, "state", void 0),
              X(this, "_onAlertsRefEmpty", void 0),
              X(this, "_removedAlerts", void 0),
              X(this, "_removedRoot", void 0),
              X(this, "_switchView", void 0),
              X(this, "_sessionEvents", void 0),
              X(this, "_reviseSduiQueue", void 0),
              X(this, "_flush", void 0),
              X(this, "_flushViewSwitch", void 0),
              X(this, "_subs", void 0),
              X(this, "_log", void 0),
              X(this, "loadItems", void 0),
              X(this, "_arrayToDiff", void 0),
              X(this, "findFirstCardWithContent", void 0),
              X(this, "notifyAlertsChanged", void 0),
              X(this, "onSessionStarted", void 0),
              X(this, "onFirstCheckingFinished", void 0),
              X(this, "_processEvents", void 0),
              X(this, "_getAllAlertsIdsFromEvent", void 0),
              X(this, "_getAlertsIdsFromAlertRef", void 0),
              X(this, "_getAlertsIdsFromDSL", void 0),
              X(this, "_resolveAlertIds", void 0),
              X(this, "_hasAllAlerts", void 0),
              X(this, "_toInternalDiff", void 0),
              X(this, "_preserveViewStackForCAPIUpdates", void 0),
              X(this, "_normalizeSDUIEvents", void 0),
              X(this, "_toSDUIItem", void 0),
              X(this, "_emitDomainEvent", void 0),
              X(this, "_debugLogState", void 0),
              X(this, "_getBufferObs", void 0),
              (this.alertIdResolver = n),
              (this.popoverManager = r),
              (this._state = c.h.create(k.l.empty)),
              (this.state = this._state.view(function (e) {
                return k.l.iso.wrap(e);
              })),
              (this._onAlertsRefEmpty = new j.xQ()),
              (this._removedAlerts = new j.xQ()),
              (this._removedRoot = new j.xQ()),
              (this._switchView = new j.xQ()),
              (this._sessionEvents = new j.xQ()),
              (this._reviseSduiQueue = new j.xQ()),
              (this._flush = new j.xQ()),
              (this._flushViewSwitch = new j.xQ()),
              (this._subs = new z.w.Keeper()),
              (this._log = b.C8.Logging.getLogger("SDUIManager", S.i.TRACE, S.T.Manager.getColor())),
              (this.loadItems = function (e) {
                var t = (0, s.zG)(
                    e,
                    u.uK(function (e) {
                      return "popoverStack" === e.content.type;
                    })
                  ),
                  n = t.right,
                  r = t.left;
                n.forEach(function (e) {
                  var t = e.content;
                  "popoverStack" === t.type && o.popoverManager.addPopover(t);
                }),
                  (0, s.zG)(
                    r,
                    u.UI(function (e) {
                      return $(Z({}, e), { invalid: !0 });
                    }),
                    o._arrayToDiff,
                    k.l.applyDiff,
                    d.UI(
                      f.T.recover(function (e) {
                        return o._log.error("conflicts on diff apply", e);
                      })
                    ),
                    function (e) {
                      return o._state.modify(e);
                    }
                  );
              }),
              (this._arrayToDiff = function (e) {
                return l.v.fromMutation(function (t) {
                  return u.UI(function (e) {
                    t.set(e.id, v.F2(e));
                  })(e);
                });
              }),
              (this.findFirstCardWithContent = function (e) {
                return (0, s.zG)(
                  o.state.get(),
                  E.a.get(e),
                  p.map(function (e) {
                    var t = e.content;
                    return N.ab.reduce(
                      t,
                      function (e, t) {
                        return (0, s.zG)(
                          e,
                          m.fold(function (e) {
                            return "strongAlertRef" === t.type
                              ? m.left(p.some(t))
                              : "assistantCard" === t.type || "inlineCard" === t.type
                              ? m.right(U.create(t, e))
                              : m.left(e);
                          }, m.right)
                        );
                      },
                      N.ab.TreeTraversal.PreOrder,
                      m.left(p.none)
                    );
                  }),
                  p.chain(p.fromEither)
                );
              }),
              (this.notifyAlertsChanged = function () {
                return o._reviseSduiQueue.next();
              }),
              (this.onSessionStarted = function () {
                return o._sessionEvents.next(ee.Start);
              }),
              (this.onFirstCheckingFinished = function () {
                return o._sessionEvents.next(ee.FirstCheckingFinished);
              }),
              (this._processEvents = function (e) {
                return function (t, n) {
                  var r = (0, s.zG)(
                    n,
                    m.fold(
                      function (n) {
                        return (0, s.zG)(i.toQueueValuesArray(t), h.hX(e));
                      },
                      function (n) {
                        if (n.kind === B.e.SduiEventKind.Remove) {
                          o._log.debug("[IN - ".concat(n.kind, ", {id: ").concat(n.sduiRootId, "}] removeAllBySduiId"));
                          var r = i.Item.fromEvent(n);
                          return i.removeAllBySduiId(r)(t), [r];
                        }
                        var u = i.Item.fromEvent(n);
                        return e(u)
                          ? (o._log.debug(
                              "[IN - "
                                .concat(u.event.kind, " {sduiRootId: ")
                                .concat(u.event.sduiRootId, ", id: ")
                                .concat(u.id, " refs: ")
                                .concat(JSON.stringify(N.ab.getAlertIds(u.event.sdui)), "}, ] hasAllAlerts")
                            ),
                            [u])
                          : (i.addItem(u)(t),
                            o._log.debug(
                              "[IN - "
                                .concat(u.event.kind, " {sduiRootId: ")
                                .concat(u.event.sduiRootId, ", id: ")
                                .concat(u.id, " refs: ")
                                .concat(JSON.stringify(N.ab.getAlertIds(u.event.sdui)), "}] add to queue, [queue]: ")
                                .concat(i.show.show(t))
                            ),
                            []);
                      }
                    ),
                    function (e) {
                      return (
                        o._log.debug(
                          "[completeItems] "
                            .concat(
                              e
                                .map(function (e) {
                                  return e.id;
                                })
                                .join(", "),
                              ", [queue]: "
                            )
                            .concat(i.show.show(t))
                        ),
                        i.removeItems(e)(t),
                        e.forEach(function (e) {
                          return i.removeEarlierItemsBySduiId(e)(t);
                        }),
                        e
                      );
                    },
                    h.UI(I.ei("event"))
                  );
                  return $(Z({}, t), { completeEvents: r });
                };
              }),
              (this._getAllAlertsIdsFromEvent = function (e, t) {
                return (0, s.ls)(
                  function (e) {
                    return e.sdui;
                  },
                  o._getAlertsIdsFromDSL(e, t)
                );
              }),
              (this._getAlertsIdsFromAlertRef = function (e, t) {
                return function (n) {
                  return (0, s.zG)(
                    n,
                    N.ab.getAlertIds,
                    y.ew(function () {
                      return t === Y.Silent
                        ? {}
                        : o._log.error(
                            "Provided SDUI dsl doesn't contain alertIds array. StrongAlertRef: ".concat(
                              JSON.stringify({ id: n.id, type: n.type, name: n.name, alertIds: n.alertIds })
                            )
                          );
                    }),
                    p.fold(function () {
                      return [];
                    }, s.yR),
                    o._resolveAlertIds(e, t)
                  );
                };
              }),
              (this._getAlertsIdsFromDSL = function (e, t) {
                return function (n) {
                  return (0, s.zG)(
                    n,
                    N.ab.getAllAlertIds,
                    function (e) {
                      return Array.from(new Set(e));
                    },
                    function (e) {
                      return u.xb(e)
                        ? (o._log.trace("Provided SDUI dsl doesn't contain any alertIds references. DSL id: ".concat(n.id)), e)
                        : e;
                    },
                    o._resolveAlertIds(e, t)
                  );
                };
              }),
              (this._resolveAlertIds = function (e, t) {
                return function (n) {
                  return (0, s.zG)(
                    n,
                    u.UI(function (n) {
                      return (0, s.zG)(
                        R.j.AlertId.from(n),
                        e,
                        y.ew(function () {
                          return t === Y.Silent
                            ? {}
                            : o._log.error(
                                "Alert with raw id ".concat(n, ", can not be found. It was either deleted or was not added yet.")
                              );
                        })
                      );
                    }),
                    u.vP(p.option)
                  );
                };
              }),
              (this._hasAllAlerts = function (e, t) {
                return (0, s.ls)(o._getAllAlertsIdsFromEvent(e, t), p.isSome);
              }),
              (this._toInternalDiff = function (e) {
                return function (t) {
                  var n = H(t, 2),
                    r = n[0],
                    i = n[1],
                    u = k.l.MutableInternalDiff.empty();
                  return (0, s.zG)(
                    r,
                    a.u4(u, function (t, n) {
                      return n.kind === B.e.SduiEventKind.Remove
                        ? o._handleSDUIRemove(n, i, t)
                        : (0, s.zG)(
                            o._getAllAlertsIdsFromEvent(e, Y.Silent)(n),
                            p.map(o._toSDUIItem(n)),
                            p.fold(
                              function () {
                                return o._log.trace(ne.internalDiffParsingError([N.ab.getAllAlertIds(n.sdui).join(", "), n.sduiRootId]));
                              },
                              function (e) {
                                var r = n.kind;
                                switch (r) {
                                  case B.e.SduiEventKind.Add:
                                    o._handleSDUIAdd(e, n.rev, i, t);
                                    break;
                                  case B.e.SduiEventKind.Update:
                                    o._handleSDUIUpdate(e, i, t);
                                    break;
                                  default:
                                    (0, w.vE)(r);
                                }
                              }
                            ),
                            function (e) {
                              return t;
                            }
                          );
                    })
                  );
                };
              }),
              (this._preserveViewStackForCAPIUpdates = function (e) {
                return (0, s.zG)(
                  e,
                  a.UI(function (e) {
                    return e.kind !== B.e.SduiEventKind.Update || e.source !== A.i5.CAPI
                      ? e
                      : A.R6.of(
                          e.sduiRootId,
                          e.source,
                          e.rev
                        )(
                          p.fold(
                            function () {
                              return p.some(e.sdui);
                            },
                            (0, s.ls)(
                              N.ab.toContentMap,
                              function (t) {
                                return (0, s.zG)(
                                  t,
                                  Object.values,
                                  h.DZ(function (e) {
                                    var t = e.content;
                                    return "viewStack" === t.type
                                      ? p.some({ type: "switchView", where: t.id, selected: t.selected })
                                      : p.none;
                                  }),
                                  function (n) {
                                    return N.ab.bulkSwitchView(e.sdui, n, t);
                                  }
                                );
                              },
                              p.some
                            )
                          )
                        );
                  })
                );
              }),
              (this._normalizeSDUIEvents = function (e) {
                var t = H(e, 2),
                  n = t[0],
                  r = t[1];
                return (0, s.zG)(
                  n,
                  u.DZ(function (e) {
                    return "sdui_lazy_update" !== e.kind ? p.some(e) : o._handleSDUILazyUpdate(e, r);
                  })
                );
              }),
              (this._toSDUIItem = function (e) {
                return function (t) {
                  return { id: R.j.Item.Id.from(e.sduiRootId), content: e.sdui, alertIds: t };
                };
              }),
              (this._emitDomainEvent = function (e) {
                o._log.debug("internalDiff", k.l.InternalDiff.show.show(e)),
                  (0, s.zG)(
                    e,
                    k.l.createDiff,
                    f.T.recover(function (e) {
                      return o._log.error("conflicts on diff creating", e);
                    }),
                    function (e) {
                      return o._log.debug("SDUIItemsCollectionDiff", k.l.diffShow.show(e)), e;
                    },
                    k.l.applyDiff,
                    d.UI(
                      f.T.recover(function (e) {
                        return o._log.error("conflicts on diff apply", e);
                      })
                    ),
                    function (e) {
                      return o._state.modify(e);
                    }
                  );
              }),
              (this._debugLogState = function (e) {
                return o._log.debug(
                  "[SDUIManagerState] (SDUIItemsCollection)",
                  "_latestChangeDiff: "
                    .concat(k.l.diffShow.show(e.latestChangeDiff), ",\n _entriesIds: ")
                    .concat(k.l.InternalDiff.showMapKeys.show(e.entries), "}")
                );
              }),
              (this._getBufferObs = function () {
                return {
                  bufferObsForSDUIEvents: P.T(G.F(100).pipe(C.O(0)), o._flush),
                  bufferObsForViewSwitchEvents: P.T(G.F(100).pipe(C.O(0)), o._flushViewSwitch)
                };
              });
            var _ = t.pipe(M.U(A.al.fromSource(A.i5.CAPI))),
              O = this._getBufferObs(),
              D = O.bufferObsForSDUIEvents,
              q = O.bufferObsForViewSwitchEvents,
              W = (0, A.yU)(
                this._removedAlerts.asObservable(),
                this._removedRoot.asObservable(),
                this.state,
                this._switchView.asObservable(),
                this.popoverManager,
                this._log,
                q
              ),
              te = W.emptyAlertsRefReasonTuple,
              re = W.optimisticRemoveSDUIEvent,
              oe = W.emptyStrongAlertRefUpdate,
              ie = W.viewStackUpdates,
              ue = W.activePopoverUpdates,
              ae = P.T(_, re, oe).pipe(
                F.b(function (e) {
                  return o._log.debug("Received SDUI event: ".concat(A.al.show.show(e), " from: ").concat(e.source));
                }),
                V.R(
                  function (e, t) {
                    var n = t.source;
                    switch (n) {
                      case A.i5.RemoveAlertsSDUIAction:
                      case A.i5.RemoveRootSDUIAction:
                      case A.i5.RemoveDuplicate:
                      case A.i5.TextChange:
                        return (
                          t.kind === B.e.SduiEventKind.Remove && e.optRemovedSDUIRootIds.add(t.sduiRootId),
                          $(Z({}, e), { event: p.some(t) })
                        );
                      case A.i5.CAPI:
                        return (0, s.zG)(
                          t,
                          p.fromPredicate(function (t) {
                            return e.optRemovedSDUIRootIds.has(t.sduiRootId);
                          }),
                          y.bw(function (t) {
                            return e.optRemovedSDUIRootIds.delete(t.sduiRootId);
                          }),
                          p.chain(p.fromPredicate((0, g.Kg)(A.G0, A.eQ))),
                          p.fold(
                            function () {
                              return $(Z({}, e), { event: p.some(t) });
                            },
                            function (t) {
                              return t.kind === B.e.SduiEventKind.Remove
                                ? $(Z({}, e), { event: p.none })
                                : $(Z({}, e), { event: p.some($(Z({}, t), { kind: B.e.SduiEventKind.Add })) });
                            }
                          )
                        );
                      case A.i5.SwitchView:
                        return $(Z({}, e), { event: p.some(t) });
                      default:
                        (0, w.vE)(n);
                    }
                  },
                  { optRemovedSDUIRootIds: new Set(), event: p.none }
                ),
                M.U(I.ei("event")),
                T.oA,
                M.U(m.right)
              ),
              se = (0, s.ls)(I.ei("event"), this._hasAllAlerts(this.alertIdResolver, Y.Silent)),
              ce = P.T(ae, this._reviseSduiQueue.pipe(M.U(m.left))).pipe(
                V.R(this._processEvents(se), $(Z({}, i.empty()), { completeEvents: [] })),
                M.U(I.ei("completeEvents"))
              ),
              de = P.T(ce, ie, ue).pipe(
                x.f(D),
                M.U(function (e) {
                  return u.xH(e);
                }),
                Q.h(u.Od)
              ),
              fe = de.pipe(M.U(this._preserveViewStackForCAPIUpdates), K.M(this._state), M.U(this._normalizeSDUIEvents), Q.h(u.Od)),
              le = this._sessionEvents.pipe(
                Q.h(function (e) {
                  return e === ee.Start;
                }),
                K.M(this._state),
                M.U(function (e) {
                  var t = H(e, 2);
                  t[0];
                  return t[1];
                }),
                Q.h(function (e) {
                  return e.entries.size > 0;
                }),
                M.U(
                  k.l.MutableInternalDiff.fromState(function (e, t) {
                    var n = $(Z({}, t), { invalid: !0 });
                    return R.j.Item.eq.equals(t, n) || e.updated.set(t.id, [t, n]), e;
                  })
                )
              ),
              ve = this._sessionEvents.pipe(
                Q.h(function (e) {
                  return e === ee.FirstCheckingFinished;
                }),
                K.M(this._state),
                M.U(function (e) {
                  var t = H(e, 2);
                  t[0];
                  return t[1];
                }),
                Q.h(function (e) {
                  return e.entries.size > 0;
                }),
                M.U(
                  k.l.MutableInternalDiff.fromState(function (e, t) {
                    var n;
                    return null !== (n = t.invalid) && void 0 !== n && n && e.removed.set(t.id, t), e;
                  })
                )
              ),
              pe = P.T(le, ve);
            this._subs.push(
              this._state.pipe(F.b(this._debugLogState)).subscribe(),
              te.subscribe(function (e) {
                var t = H(e, 1)[0];
                return o._onAlertsRefEmpty.next(t);
              }),
              fe
                .pipe(
                  K.M(this._state),
                  M.U(this._toInternalDiff(this.alertIdResolver)),
                  Q.h((0, s.ff)(k.l.InternalDiff.isEmpty)),
                  M.U(this._emitDomainEvent)
                )
                .subscribe(),
              pe.subscribe(this._emitDomainEvent)
            );
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: "onAlertsRefEmpty",
                get: function () {
                  return this._onAlertsRefEmpty.asObservable();
                }
              },
              {
                key: "pushRemovedRoot",
                value: function (e) {
                  this._removedRoot.next(e);
                }
              },
              {
                key: "pushRemovedAlerts",
                value: function (e) {
                  this._removedAlerts.next(e);
                }
              },
              {
                key: "pushSwitchView",
                value: function (e) {
                  this._switchView.next(e);
                }
              },
              {
                key: "flush",
                value: function () {
                  this._flush.next(), this._flushViewSwitch.next(), this._flush.next();
                }
              },
              {
                key: "resolveStrongAlertRefAlerts",
                value: function (e) {
                  var t = this;
                  return (0, s.zG)(
                    this._getAlertsIdsFromAlertRef(this.alertIdResolver, Y.Error)(e),
                    y.ew(function () {
                      return t._log.error(
                        "Alert ids from the provided component were not removed, because AlertIds for the provided DSL was not resolved. SDUI content ".concat(
                          JSON.stringify({ id: e.id, type: e.type, name: e.name, alertIds: e.alertIds })
                        )
                      );
                    })
                  );
                }
              },
              {
                key: "_handleSDUIAdd",
                value: function (e, t, n, r) {
                  var o = this;
                  return "popoverStack" === e.content.type
                    ? (this.popoverManager.addPopover(e.content, t), k.l.MutableInternalDiff.empty())
                    : ((0, s.zG)(
                        n,
                        k.l.get(e.id),
                        p.fold(
                          function () {
                            if (
                              ((0, w.kG)(
                                !r.updated.has(e.id),
                                "SDUI item can not be in the diff.updated until it gets to the collection",
                                function () {
                                  return k.l.InternalDiff.show.show(r) + k.l.diffShow.show(k.l.diff(k.l.empty, n));
                                }
                              ),
                              r.removed.has(e.id))
                            )
                              return o._log.trace(ne.actionOnRemovedItem([e.id, "added"]));
                            r.added.set(e.id, e);
                          },
                          function (t) {
                            if (
                              ((0, w.kG)(
                                !r.added.has(e.id),
                                "SDUI item can not be in the diff.added when it is already in the collection",
                                function () {
                                  return k.l.InternalDiff.show.show(r) + k.l.diffShow.show(k.l.diff(k.l.empty, n));
                                }
                              ),
                              r.removed.has(e.id))
                            )
                              return o._log.trace(ne.actionOnRemovedItem([e.id, "added"]));
                            r.updated.set(e.id, [t, e]);
                          }
                        )
                      ),
                      r);
                }
              },
              {
                key: "_handleSDUIUpdate",
                value: function (e, t, n) {
                  var r = this;
                  return (
                    (0, s.zG)(
                      t,
                      k.l.get(e.id),
                      p.fold(
                        function () {
                          return (
                            (0, w.kG)(
                              !n.updated.has(e.id),
                              "SDUI item can not be in the diff.updated until it gets to the collection" +
                                k.l.InternalDiff.show.show(n) +
                                k.l.diffShow.show(k.l.diff(k.l.empty, t))
                            ),
                            n.removed.has(e.id)
                              ? r._log.trace(ne.actionOnRemovedItem([e.id, "updated"]))
                              : n.added.has(e.id)
                              ? (r._log.trace(ne.updateIdMissingFound([e.id])), void n.added.set(e.id, e))
                              : r._log.error(ne.updateIdMissingNotFound([e.id]))
                          );
                        },
                        function (o) {
                          return (
                            (0, w.kG)(
                              !n.added.has(e.id),
                              "SDUI item can not be in the diff.added when it is already in the collection" +
                                k.l.InternalDiff.show.show(n) +
                                k.l.diffShow.show(k.l.diff(k.l.empty, t))
                            ),
                            n.removed.has(e.id)
                              ? r._log.trace(ne.actionOnRemovedItem([e.id, "update"]))
                              : R.j.Item.eq.equals(o, e)
                              ? r._log.trace(ne.updateItemsAreEqual([e.id]))
                              : void n.updated.set(e.id, [o, e])
                          );
                        }
                      )
                    ),
                    n
                  );
                }
              },
              {
                key: "_handleSDUIRemove",
                value: function (e, t, n) {
                  var r = this,
                    o = R.j.Item.Id.from(e.sduiRootId);
                  return (
                    this.popoverManager.removePopover(o, e.rev),
                    (0, s.zG)(
                      t,
                      k.l.get(o),
                      p.fold(
                        function () {
                          if (
                            ((0, w.kG)(
                              !n.updated.has(o),
                              "SDUI item can not be in the diff.updated until it gets to the collection" +
                                k.l.InternalDiff.show.show(n) +
                                k.l.diffShow.show(k.l.diff(k.l.empty, t))
                            ),
                            !n.added.has(o))
                          )
                            return r._log.trace(ne.removeIdMissingNotFound([o]));
                          r._log.trace(ne.removeIdMissingFound([o])), n.added.delete(o);
                        },
                        function (e) {
                          (0, w.kG)(
                            !n.added.has(e.id),
                            "SDUI item can not be in the diff.added when it is already in the collection" +
                              k.l.InternalDiff.show.show(n) +
                              k.l.diffShow.show(k.l.diff(k.l.empty, t))
                          ),
                            n.updated.delete(o) ? r._log.trace(ne.idRemovedFrom([o, "diff.updated"])) : (0, s.Q1)(),
                            n.removed.set(o, e);
                        }
                      )
                    ),
                    n
                  );
                }
              },
              {
                key: "_handleSDUILazyUpdate",
                value: function (e, t) {
                  var n = this;
                  return (0, s.zG)(
                    t,
                    k.l.get(e.sduiRootId),
                    y.ew(function () {
                      return n._log.trace("SDUI Item with sduiRootId ".concat(e.sduiRootId, "  was not found"));
                    }),
                    p.fold(
                      function () {
                        return e.toContent(p.none);
                      },
                      function (t) {
                        var r = t.content;
                        return (0, s.zG)(
                          e.toContent(p.some(r)),
                          p.filter(function (e) {
                            return !N.ab.eq.equals(e, r);
                          }),
                          y.ew(function () {
                            return n._log.trace(
                              "SDUI Update event ".concat(
                                JSON.stringify(e),
                                " will be skipped, because the new DSL is the same as an old one"
                              )
                            );
                          })
                        );
                      }
                    ),
                    p.map(function (t) {
                      return {
                        kind: B.e.SduiEventKind.Update,
                        sdui: t,
                        sduiRootId: B.e.RawSduiItem.Id.create(e.sduiRootId),
                        rev: e.rev,
                        source: e.source
                      };
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
            ]) && W(t.prototype, n),
            r && W(t, r),
            e
          );
        })(),
        ne = {
          removeIdMissingFound: function (e) {
            var t = H(e, 1)[0];
            return "[Remove] SDUI item with ID ".concat(t, " was found in the added messages. Removing it.");
          },
          removeIdMissingNotFound: function (e) {
            var t = H(e, 1)[0];
            return "[Remove] It is not possible to remove SDUI item with ID ".concat(
              t,
              ". It is missing from SDUIItemsCollectionInternal and diff.add, probably it was deleted earlier. Skipping the message"
            );
          },
          idRemovedFrom: function (e) {
            var t = H(e, 2),
              n = t[0],
              r = t[1];
            return "[Remove] SDUI item with ID "
              .concat(n, " is going to be removed. ")
              .concat(r, " contains the item with ID ")
              .concat(n, " too. Remove ")
              .concat(n, " from ")
              .concat(r);
          },
          actionOnRemovedItem: function (e) {
            var t = H(e, 2),
              n = t[0],
              r = t[1];
            return "["
              .concat(r, "] It is not possible to ")
              .concat(r, " SDUI item with ID ")
              .concat(n, ". Because it was already removed. Skipping the ")
              .concat(r, ".");
          },
          viewStackUpdateIdMissing: function (e) {
            var t = H(e, 1)[0];
            return "[ViewStackUpdate] SDUI item with ID ".concat(t, " was found. Skipping the update.");
          },
          updateIdMissingFound: function (e) {
            var t = H(e, 1)[0];
            return "[Update] SDUI item with ID ".concat(t, " was found in added messages. Updating it in added messages");
          },
          updateIdMissingNotFound: function (e) {
            var t = H(e, 1)[0];
            return "[Update] It is not possible to update SDUI item with ID ".concat(
              t,
              ". It is missing from SDUIItemsCollectionInternal and diff.added, probably it was deleted earlier. Skipping the message"
            );
          },
          updateItemsAreEqual: function (e) {
            var t = H(e, 1)[0];
            return "[Update] Received sdui item (sduiId: ".concat(t, ") is the same as in the state. Skipping the update message");
          },
          internalDiffMissingAlertsIds: function () {
            return "missing AlertIDs";
          },
          internalDiffParsingError: function (e) {
            var t = H(e, 2),
              n = t[0],
              r = t[1];
            return "toInternalDiff, either can not resolve "
              .concat(n, " for ")
              .concat(r, " or id of the sdui item is missing . The item will be skipped");
          }
        };
      !(function (e) {
        (e.Silent = "Silent"), (e.Error = "Error");
      })(Y || (Y = {})),
        (function (e) {
          (e.Start = "Start"), (e.FirstCheckingFinished = "FirstCheckingFinished");
        })(ee || (ee = {}));
    },
    12054: (e, t, n) => {
      n.d(t, { al: () => N, R6: () => q, i5: () => L, yU: () => K, eQ: () => W, G0: () => J });
      var r,
        o,
        i,
        u,
        a,
        s,
        c = n(17889),
        d = n(64015),
        f = n(32243),
        l = n(57050),
        v = n(71249),
        p = n(5114),
        m = n(41398),
        h = n(2834),
        I = n(77176),
        y = n(66310),
        w = n(12126),
        g = n(38194),
        b = n(85985),
        S = n(24209),
        R = n(36919),
        A = n(2844),
        _ = n(24055),
        O = n(26393),
        D = n(21038),
        U = n(28811),
        E = n(64681),
        k = n(83078),
        j = n(40330);
      function z(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function P(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function G(e, t) {
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
      function C(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      function M(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i = [],
                u = !0,
                a = !1;
              try {
                for (n = n.call(e); !(u = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); u = !0);
              } catch (e) {
                (a = !0), (o = e);
              } finally {
                try {
                  u || null == n.return || n.return();
                } finally {
                  if (a) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return z(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return z(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function F(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function V(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
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
      function x(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i = [],
                u = !0,
                a = !1;
              try {
                for (n = n.call(e); !(u = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); u = !0);
              } catch (e) {
                (a = !0), (o = e);
              } finally {
                try {
                  u || null == n.return || n.return();
                } finally {
                  if (a) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return F(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return F(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      (u = r || (r = {})),
        ((i = u.EmptyMessage || (u.EmptyMessage = {})).fromItem = function (e) {
          return e.alertIds, C(e, ["alertIds"]);
        }),
        (i.show = {
          show: function (e) {
            var t = e.sduiId,
              n = e.sduiRootId;
            return JSON.stringify({ sduiId: t, sduiRootId: n });
          }
        }),
        ((u.EmptyItem || (u.EmptyItem = {})).isRootItem = function (e) {
          return e.sduiId === e.sduiRootId;
        }),
        (function (e) {
          e.fromSDUI = function (e) {
            return function (r) {
              return O.ab.reduce(
                r.content,
                function (o, i) {
                  return (0, l.zG)(
                    o,
                    p.chain(function (t) {
                      return (0, l.zG)(
                        i,
                        O.ab.getAlertIds,
                        p.chain(e),
                        p.map(n(t)),
                        p.alt(function () {
                          return o;
                        })
                      );
                    }),
                    p.alt(function () {
                      return (0, l.zG)(i, O.ab.getAlertRefs, p.chain(t(r.id, e)));
                    })
                  );
                },
                O.ab.TreeTraversal.PreOrder,
                p.none
              );
            };
          };
          var t = function (e, t) {
              return function (r) {
                return r.reduce(function (r, o) {
                  return (0, l.zG)(
                    r,
                    p.map(function (e) {
                      return (0, l.zG)(
                        o.alertIds,
                        t,
                        p.fold(function () {
                          return e;
                        }, n(e))
                      );
                    }),
                    p.alt(function () {
                      return p.some({
                        emptyStrongAlertRef: o,
                        sduiId: e,
                        sduiRootId: e,
                        alertIds: new Set((0, l.zG)(o.alertIds, t, p.getOrElse((0, l.a9)(v.cS))))
                      });
                    })
                  );
                }, p.none);
              };
            },
            n =
              ((e.fromStrongAlertRef = function (e) {
                return function (t, n) {
                  return (0, l.zG)(
                    e(t.alertIds),
                    p.map(function (e) {
                      return { sduiRootId: n, sduiId: D.j.Item.Id.from(t.id), emptyStrongAlertRef: t, alertIds: new Set(e) };
                    })
                  );
                };
              }),
              (e.fromStrongAlertRefBehavior = function (e) {
                return function (t, n, r) {
                  return (0, l.zG)(
                    e(t.alertIds),
                    p.map(function (e) {
                      return { sduiRootId: r, sduiId: n, emptyStrongAlertRef: t, alertIds: new Set(e) };
                    })
                  );
                };
              }),
              (e.show = {
                show: function (e) {
                  return "StrAlertRef.Item: { sduiId: "
                    .concat(e.sduiId, ", sduiRootId: ")
                    .concat(e.sduiRootId, ", alertIds: [")
                    .concat(Array.from(e.alertIds.values()).join(", "), "]}");
                }
              }),
              (e.addAlertIds = function (e) {
                return function (t) {
                  return (
                    t.forEach(function (t) {
                      return e.alertIds.add(t);
                    }),
                    e
                  );
                };
              }));
        })((a = u.Item || (u.Item = {}))),
        (function (e) {
          (e.iso = E.k4()),
            (e.empty = function () {
              return { alertRefMapping: new Map() };
            }),
            (e.size = function (e) {
              return e.alertRefMapping.size;
            }),
            (e.show = {
              show: function (e) {
                return Array.from(e.alertRefMapping.entries())
                  .map(function (e) {
                    var t = M(e, 2),
                      n = t[0],
                      r = t[1];
                    return "".concat(n, ": [\n").concat(r.map(a.show.show).join("\n"), "\n]");
                  })
                  .join("\n");
              }
            });
          var t = function (e) {
              return function (t) {
                return (0, l.zG)(t.alertRefMapping.get(e), p.fromNullable);
              };
            },
            n =
              ((e.get = function (e) {
                return function (n) {
                  return (0, l.zG)(
                    t(e)(n),
                    p.map(
                      v.UI(function (e) {
                        return G(
                          (function (e) {
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
                                  P(e, t, n[t]);
                                });
                            }
                            return e;
                          })({}, e),
                          { alertIds: new Set(e.alertIds) }
                        );
                      })
                    )
                  );
                };
              }),
              (e.updateWithRemovedAlerts = function (e) {
                return function (n) {
                  return (0, l.zG)(
                    e,
                    d.tS(function (e) {
                      return (0, l.zG)(
                        n,
                        t(e),
                        p.map(
                          v.hX(function (t) {
                            return t.alertIds.delete(e) && 0 === t.alertIds.size;
                          })
                        ),
                        p.fold(
                          function () {
                            return [];
                          },
                          function (t) {
                            return n.alertRefMapping.delete(e), t.map(r.EmptyMessage.fromItem);
                          }
                        )
                      );
                    })
                  );
                };
              }),
              (e.add = function (e, t) {
                return function (r) {
                  j.uZ.isStrongAlertRefBehavior(e.emptyStrongAlertRef)
                    ? (0, l.zG)(a.fromStrongAlertRefBehavior(t)(e.emptyStrongAlertRef, e.sduiId, e.sduiRootId), k.bw(n(r)))
                    : O.ab.forEach(
                        e.emptyStrongAlertRef,
                        (0, l.ls)(
                          (function (e, t) {
                            return function (n) {
                              return (0, l.zG)(
                                n,
                                O.ab.getAlertRefs,
                                p.fold(
                                  (0, l.a9)(d.cS),
                                  d.DZ(function (r) {
                                    return j.uZ.isStrongAlertRefBehavior(r)
                                      ? a.fromStrongAlertRefBehavior(t)(r, D.j.Item.Id.from(n.id), e)
                                      : a.fromStrongAlertRef(t)(r, e);
                                  })
                                )
                              );
                            };
                          })(e.sduiRootId, t),
                          v.UI(n(r))
                        ),
                        O.ab.TreeTraversal.PostOrder
                      );
                };
              }),
              function (e) {
                var t = o(e);
                return function (e) {
                  e.alertIds.forEach(function (n) {
                    return t(n, [e]);
                  });
                };
              }),
            o = function (e) {
              return function (t, n) {
                var r = e.alertRefMapping.get(t);
                e.alertRefMapping.set(t, null != r ? r.concat(n) : n);
              };
            };
          e.remove = function (e) {
            return function (n) {
              return (0, l.zG)(
                Array.from(e.alertIds.keys()),
                v.u4(new Array(), function (r, i) {
                  return (
                    (0, l.zG)(
                      n,
                      t(i),
                      p.map(
                        v.hX(function (t) {
                          return t.sduiRootId !== e.sduiRootId;
                        })
                      ),
                      p.fold(
                        function () {
                          r.push("failed to remove SDUI by alertId ".concat(i, ", alertRefMapping doesn't contain alertId ").concat(i));
                        },
                        function (e) {
                          return (function (e) {
                            return function (t, n) {
                              0 === n.length ? e.alertRefMapping.delete(t) : o(e)(t, n);
                            };
                          })(n)(i, e);
                        }
                      )
                    ),
                    r
                  );
                })
              );
            };
          };
        })(s || (s = {})),
        ((o = u.Collection || (u.Collection = {})).empty = function () {
          return s.iso.wrap(s.empty());
        }),
        (o.size = function (e) {
          return (0, l.zG)(s.iso.unwrap(e), s.size);
        }),
        (o.show = {
          show: function (e) {
            return (0, l.zG)(s.iso.unwrap(e), s.show.show);
          }
        }),
        (o.get = function (e) {
          return function (t) {
            return (0, l.zG)(s.iso.unwrap(t), s.get(e));
          };
        }),
        (o.add = function (e, t) {
          return function (n) {
            return (0, l.zG)(s.iso.unwrap(n), s.add(e, t));
          };
        }),
        (o.remove = function (e) {
          return function (t) {
            return (0, l.zG)(s.iso.unwrap(e), s.remove(t));
          };
        }),
        (o.updateWithRemovedAlerts = function (e) {
          return function (t) {
            return (0, l.zG)(s.iso.unwrap(t), s.updateWithRemovedAlerts(e));
          };
        });
      var Q = (0, l.ls)(v.UI(D.j.AlertId.from), p.some),
        K = function (e, t, n, o, i, u, a) {
          var s = e.pipe(
              m.M(n),
              h.b(function (e) {
                var t = x(e, 1),
                  n = x(t[0], 2),
                  r = n[0],
                  o = n[1];
                u.trace(
                  "[Optimistic update] emptyAlertsRefReasonTuple > Removed alerts. Reason: "
                    .concat(o, ", removedAlertIds: [")
                    .concat(r.join(", "), "]")
                );
              }),
              I.U(function (e) {
                var t = x(e, 2),
                  n = x(t[0], 2),
                  o = n[0],
                  i = n[1],
                  a = t[1];
                return [(0, l.zG)(a, B(u), r.Collection.updateWithRemovedAlerts(o)), i];
              }),
              h.b(function (e) {
                var t = x(e, 2),
                  n = t[0],
                  o = t[1];
                return u.trace(
                  "[Optimistic update] emptyAlertsRefReasonTuple > Reason: "
                    .concat(o, " found emptyAlertsRef: [")
                    .concat(n.map(r.EmptyMessage.show.show).join(", "), "]")
                );
              }),
              y.w(function (e) {
                var t = x(e, 2),
                  n = t[0],
                  r = t[1];
                return (0, l.zG)(
                  n,
                  d.UI(function (e) {
                    return [e, r];
                  }),
                  function (e) {
                    return w.D(e);
                  }
                );
              }),
              g.B()
            ),
            E = s.pipe(
              b.h(function (e) {
                var t = x(e, 1)[0];
                return r.EmptyItem.isRootItem(t);
              }),
              I.U(function (e) {
                var t = x(e, 2),
                  n = t[0],
                  r = t[1];
                return N.toRemovedEvent(r)(_.e.RawSduiItem.Id.create(n.sduiRootId));
              })
            ),
            k = t.pipe(
              I.U(function (e) {
                var t = x(e, 2),
                  n = t[0],
                  r = t[1];
                return N.toRemovedEvent(r)(_.e.RawSduiItem.Id.create(n));
              })
            ),
            j = S.T(E, k),
            z = s.pipe(
              b.h(function (e) {
                var t = x(e, 1)[0];
                return !r.EmptyItem.isRootItem(t);
              }),
              m.M(n),
              I.U(function (e) {
                var t = x(e, 2),
                  n = x(t[0], 2),
                  r = n[0],
                  o = n[1],
                  i = t[1],
                  u = _.e.RawSduiItem.Id.create(r.sduiRootId);
                return (0, l.zG)(
                  U.a.get(D.j.Item.Id.from(r.sduiRootId))(i),
                  p.chain(function (e) {
                    return O.ab.removeStrongAlertRef(e.content)([r.emptyStrongAlertRef]);
                  }),
                  p.fold(
                    function () {
                      return N.toRemovedEvent(o)(_.e.RawSduiItem.Id.create(r.sduiRootId));
                    },
                    function (e) {
                      return N.toUpdatedEvent(o)(e, u);
                    }
                  )
                );
              })
            );
          return {
            emptyAlertsRefReasonTuple: s,
            optimisticRemoveSDUIEvent: j,
            emptyStrongAlertRefUpdate: z,
            viewStackUpdates: o.pipe(
              R.f(a),
              b.h(v.Od),
              I.U(
                (0, l.ls)(
                  c.vM(function (e) {
                    return e.sduiRootId;
                  }),
                  f.AO,
                  d.UI(function (e) {
                    var t = x(e, 2),
                      n = t[0],
                      r = t[1];
                    return (
                      r.forEach(function (e) {
                        return i.switchView(e);
                      }),
                      q.of(
                        n,
                        "switchView"
                      )(
                        p.chain(function (e) {
                          return (0, l.zG)(
                            O.ab.bulkSwitchView(
                              e,
                              r.map(function (e) {
                                return { where: e.where, selected: e.selected, type: "switchView" };
                              })
                            ),
                            p.some
                          );
                        })
                      )
                    );
                  })
                )
              )
            ),
            activePopoverUpdates: A.aj([i.activePopoverView, n.pipe(I.U(U.a.sduiRoots()))]).pipe(
              I.U(function (e) {
                var t = x(e, 2),
                  n = t[0];
                return t[1].map(function (e) {
                  return q.of(
                    e,
                    "switchView"
                  )(
                    p.chain(function (e) {
                      return O.ab.setPopoverView(e, n);
                    })
                  );
                });
              })
            )
          };
        };
      function B(e) {
        return U.a.reduce(r.Collection.empty(), function (t, n) {
          return (0, l.zG)(
            r.Item.fromSDUI(Q)(n),
            p.fold(
              function () {
                return e.trace("SDUI item ".concat(D.j.Item.show.show(n), " does not contain AlertRef, skipping it"));
              },
              function (e) {
                return r.Collection.add(e, Q)(t);
              }
            ),
            function (e) {
              return t;
            }
          );
        });
      }
      var N,
        L,
        q,
        J = function (e) {
          return e.kind == _.e.SduiEventKind.Update;
        },
        W = function (e) {
          return e.kind == _.e.SduiEventKind.Remove;
        };
      !(function (e) {
        (e.fromSource = function (e) {
          return function (t) {
            return T(
              (function (e) {
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
                      V(e, t, n[t]);
                    });
                }
                return e;
              })({}, t),
              { source: e }
            );
          };
        }),
          (e.toRemovedEvent = function (e) {
            return function (t) {
              return { kind: _.e.SduiEventKind.Remove, sduiRootId: t, source: e, rev: 0 };
            };
          }),
          (e.toUpdatedEvent = function (e) {
            return function (t, n) {
              return { kind: _.e.SduiEventKind.Update, sdui: t, sduiRootId: n, source: e, rev: 0 };
            };
          }),
          (e.show = {
            show: function (e) {
              return "SduiRootId: ".concat(e.sduiRootId, ", Kind: ").concat(e.kind, ", Source: ").concat(e.source);
            }
          });
      })(N || (N = {})),
        (function (e) {
          (e.CAPI = "capi"),
            (e.TextChange = "textChange"),
            (e.RemoveAlertsSDUIAction = "removeAlerts"),
            (e.RemoveRootSDUIAction = "removeRoot"),
            (e.RemoveDuplicate = "removeDuplicate"),
            (e.SwitchView = "switchView");
        })(L || (L = {})),
        (function (e) {
          e.of = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            return function (r) {
              return { kind: "sdui_lazy_update", toContent: r, sduiRootId: D.j.Item.Id.from(e), rev: n, source: t };
            };
          };
        })(q || (q = {}));
    },
    4477: (e, t, n) => {
      n.d(t, { J: () => f });
      var r = n(23239),
        o = n(5114),
        i = n(22232),
        u = n(79880),
        a = n(57050),
        s = n(26393);
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }
      function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      var f = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, e),
            d(this, "activePopoverStack", void 0),
            d(this, "activePopoverView", void 0),
            d(this, "_state", void 0),
            (this._state = r.h.create({ dsl: o.none, revision: -1 })),
            (this.activePopoverStack = this._state.view("dsl")),
            (this.activePopoverView = this.activePopoverStack.view(
              o.chain(function (e) {
                return o.fromNullable(e.views[e.selected]);
              })
            ));
        }
        var t, n, f;
        return (
          (t = e),
          (n = [
            {
              key: "getInteractionActions",
              value: function (e, t, n) {
                return (0, a.zG)(
                  this._state.get(),
                  function (e) {
                    return e.dsl;
                  },
                  o.filter(function (n) {
                    return n.id === e && n.selected === t;
                  }),
                  o.map(function (e) {
                    return e.views[e.selected];
                  }),
                  o.fold(
                    function () {
                      return [];
                    },
                    function (e) {
                      switch (n) {
                        case u.fP.Fulfill:
                          return e.onFulfill || [];
                        case u.fP.Dismiss:
                          return e.onDismiss || [];
                        default:
                          (0, i.L0)(n);
                      }
                    }
                  )
                );
              }
            },
            {
              key: "addPopover",
              value: function (e, t) {
                this._state.modify(function (n) {
                  var r = void 0 !== t && n.revision > t,
                    i = void 0 !== t && n.revision === t,
                    u = (0, a.zG)(
                      n.dsl,
                      o.exists(function (t) {
                        return t.id === e.id;
                      })
                    ),
                    s = !o.isNone(n.dsl);
                  return r || u || (i && s) ? n : { dsl: o.some(e), revision: null != t ? t : n.revision };
                });
              }
            },
            {
              key: "removePopover",
              value: function (e, t) {
                this._state.modify(function (n) {
                  var r = void 0 !== t && n.revision > t,
                    i = (0, a.zG)(
                      n.dsl,
                      o.exists(function (t) {
                        return t.id === e;
                      })
                    );
                  return r || !i ? n : { dsl: o.none, revision: null != t ? t : n.revision };
                });
              }
            },
            {
              key: "switchView",
              value: function (e) {
                this._state.modify(function (t) {
                  return (0, a.zG)(
                    t.dsl,
                    o.filter(function (t) {
                      return t.id === e.sduiRootId;
                    }),
                    o.map(function (t) {
                      return s.ab.bulkSwitchView(t, [{ where: e.where, selected: e.selected, type: "switchView" }]);
                    }),
                    o.filter(function (e) {
                      return "popoverStack" === e.type;
                    }),
                    o.fold(
                      function () {
                        return t;
                      },
                      function (e) {
                        return { dsl: o.some(e), revision: t.revision };
                      }
                    )
                  );
                });
              }
            }
          ]) && c(t.prototype, n),
          f && c(t, f),
          e
        );
      })();
    },
    24055: (e, t, n) => {
      var r;
      n.d(t, { e: () => r }),
        (function (e) {
          var t;
          !(function (e) {
            !(function (e) {
              e.create = function (e) {
                return e.toString();
              };
            })(e.Id || (e.Id = {}));
          })(e.RawSduiItem || (e.RawSduiItem = {})),
            (function (e) {
              (e.Add = "sdui_add"), (e.Remove = "sdui_remove"), (e.Update = "sdui_update");
            })((t = e.SduiEventKind || (e.SduiEventKind = {}))),
            (e.isSduiEvent = function (e) {
              return e.kind === t.Add || e.kind === t.Remove || e.kind === t.Update;
            });
        })(r || (r = {}));
    },
    83257: (e, t, n) => {
      n.d(t, {
        AG: () => i,
        IM: () => c,
        IX: () => d,
        OT: () => m,
        Sm: () => v,
        Vo: () => p,
        bc: () => f,
        dt: () => a,
        id: () => I,
        n_: () => u,
        ov: () => y,
        qm: () => w,
        r$: () => s,
        wf: () => l
      });
      var r = n(18164),
        o = n(57050);
      function i(e) {
        return {
          encode: function (t) {
            return null === t ? null : e.encode(t);
          }
        };
      }
      function u(e) {
        return {
          encode: function (t) {
            var n = {};
            for (var r in e) n[r] = e[r].encode(t[r]);
            return n;
          }
        };
      }
      var a = u;
      function s(e) {
        return {
          encode: function (t) {
            var n = {};
            for (var r in e) {
              var o = t[r];
              r in t && (n[r] = void 0 === o ? void 0 : e[r].encode(o));
            }
            return n;
          }
        };
      }
      function c(e) {
        return {
          encode: function (t) {
            var n = {};
            for (var r in t) n[r] = e.encode(t[r]);
            return n;
          }
        };
      }
      function d(e) {
        return {
          encode: function (t) {
            return t.map(e.encode);
          }
        };
      }
      function f() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return {
          encode: function (t) {
            return e.map(function (e, n) {
              return e.encode(t[n]);
            });
          }
        };
      }
      var l = function (e) {
        return function (t) {
          return {
            encode: function (n) {
              return (0, r.U)(t.encode(n), e.encode(n));
            }
          };
        };
      };
      function v(e) {
        return function (t) {
          return {
            encode: function (n) {
              return t[n[e]].encode(n);
            }
          };
        };
      }
      function p(e) {
        var t = (0, r.H)(e);
        return {
          encode: function (e) {
            return t().encode(e);
          }
        };
      }
      var m = o.yR,
        h = function (e, t) {
          return {
            encode: function (n) {
              return e.encode(t(n));
            }
          };
        };
      function I() {
        return { encode: o.yR };
      }
      var y = "io-ts/Encoder",
        w = { URI: y, contramap: h };
    }
  }
]);
