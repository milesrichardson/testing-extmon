(self.webpackChunk = self.webpackChunk || []).push([
  [1442],
  {
    31442: (e, t, n) => {
      n.d(t, { _: () => R });
      var r = n(35214),
        o = n(57050),
        i = n(23239),
        u = n(32952),
        f = n(16782),
        d = n(95300),
        a = n(9922),
        c = n(24209),
        s = n(77176),
        l = n(60797),
        h = n(40649),
        p = n(41398),
        v = n(85985),
        g = n(93508),
        y = n(16118),
        b = n(24713),
        _ = n(95195),
        m = n(95574),
        I = n(19429),
        F = n(81670),
        w = n(5114),
        k = n(92843),
        O = n(8125),
        S = n(45701),
        j = n(22232),
        C = n(83078),
        T = n(93756),
        x = n(48044),
        U = n(81531),
        z = n(46680),
        G = n(21038),
        P = n(28811),
        N = n(31539),
        A = n(79880),
        E = n(26393);
      function M(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function D(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }
      function V(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function Q(e) {
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
      }
      function X(e, t) {
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
      function L(e, t) {
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
                f = !1;
              try {
                for (n = n.call(e); !(u = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); u = !0);
              } catch (e) {
                (f = !0), (o = e);
              } finally {
                try {
                  u || null == n.return || n.return();
                } finally {
                  if (f) throw o;
                }
              }
              return i;
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
      var R = (function () {
        function e(t) {
          var n = this;
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, e),
            V(this, "onFeedRemove", new u.xQ()),
            V(this, "onFeedEmpty", new u.xQ()),
            V(this, "_header", new f.t(1)),
            V(this, "_footer", new f.t(1)),
            V(this, "_feeds", new Map()),
            V(this, "_currentCards", i.h.create(N.l.empty)),
            V(this, "_feed", new d.X(void 0)),
            V(this, "_feedStack", new d.X([])),
            V(this, "_cardIdToFocus", new u.xQ()),
            V(this, "_subs", new a.w.Keeper()),
            V(this, "_log", U.C8.Logging.getLogger("SDUIFeedManager", z.i.TRACE, z.T.Manager.getColor())),
            V(this, "_forceFeedInternalInfo", new u.xQ()),
            V(
              this,
              "_getFeedContent",
              (0, o.ls)(
                this._getFeed,
                _.map(function (e) {
                  return e.content;
                }),
                m.MH
              )
            ),
            V(this, "_changeFeed", function (e) {
              n._feed.next(e),
                (0, o.zG)(
                  e.cards,
                  N.l.applyDiff,
                  I.UI(
                    F.T.recover(function (e) {
                      return n._log.error("conflicts on diff apply", e);
                    })
                  ),
                  function (t) {
                    var r = n._currentCards.get(),
                      o = t(r);
                    if (r.entries.size > 0 && 0 === o.entries.size) {
                      var i = n._feeds.get(e.feedId);
                      void 0 !== i && n.onFeedEmpty.next(i);
                    }
                    n._currentCards.modify(t);
                  }
                );
            });
          var r = c.T(
              this._feedStack.pipe(
                s.U(function (e) {
                  return w.fromNullable(e[e.length - 1]);
                }),
                l.oA,
                s.U(function (e) {
                  return n._getFeedInternalInfo(e.feedId, e.focusedCardId);
                })
              ),
              this._forceFeedInternalInfo
            ),
            O = c.T(
              this._feedStack.pipe(
                h.g("length"),
                s.U(function (e) {
                  return w.fromNullable(e[e.length - 1]);
                }),
                l.oA,
                s.U(function (e) {
                  return n._getFeedInternalInfo(e.feedId, e.focusedCardId);
                })
              ),
              this._forceFeedInternalInfo
            ),
            S = this._cardIdToFocus.pipe(
              p.M(
                this._feedStack.pipe(
                  s.U(function (e) {
                    var t;
                    return null === (t = e[e.length - 1]) || void 0 === t ? void 0 : t.focusedCardId;
                  })
                )
              ),
              v.h(function (e) {
                var t = L(e, 2);
                return t[0] !== t[1];
              }),
              s.U(function (e) {
                return L(e, 1)[0];
              }),
              p.M(this.feed),
              s.U(function (e) {
                var t = L(e, 2),
                  r = t[0],
                  o = t[1];
                return n._getFeedInternalInfo(o.feedId, G.j.Item.Id.from(r));
              })
            ),
            j = t.pipe(
              g.O(P.a.empty),
              y.G(),
              s.U(function (e) {
                var t = L(e, 2),
                  n = t[0],
                  r = t[1];
                return P.a.diff(n, r);
              }),
              s.U(function (e) {
                return n._processSDUIItems(e);
              }),
              p.M(r),
              s.U(function (e) {
                var t = L(e, 2),
                  n = t[0],
                  r = t[1],
                  i = r.feedOrd,
                  u = r.feedFilter;
                return {
                  feedId: r.feedId,
                  cards: (0, o.zG)(
                    n,
                    k.v.filter(
                      u,
                      function (e, t) {
                        return u(t);
                      },
                      u
                    )
                  ),
                  feedOrd: i,
                  itemIdToSelect: w.none
                };
              })
            ),
            C = c.T(O, S).pipe(
              p.M(t, this._currentCards),
              s.U(function (e) {
                var t = L(e, 3),
                  n = t[0],
                  r = n.feedOrd,
                  i = n.feedFilter,
                  u = n.feedId,
                  f = n.itemIdToSelect,
                  d = t[1],
                  a = t[2],
                  c = (0, o.zG)(d, N.l.iso.unwrap, function (e) {
                    return (0, o.zG)(e.entries, x.hX(i));
                  });
                return { feedId: u, cards: N.l.diffFromEntries(a.entries, c), feedOrd: r, itemIdToSelect: f };
              })
            );
          this._subs.push(c.T(j, C).subscribe(this._changeFeed)),
            this._subs.push(
              O.pipe(b.j("header")).subscribe(function (e) {
                return n._header.next(e);
              })
            ),
            this._subs.push(
              O.pipe(b.j("footer")).subscribe(function (e) {
                return n._footer.next(e);
              })
            );
        }
        var t, n, E;
        return (
          (t = e),
          (n = [
            {
              key: "header",
              get: function () {
                return this._header.asObservable();
              }
            },
            {
              key: "footer",
              get: function () {
                return this._footer.asObservable();
              }
            },
            {
              key: "feed",
              get: function () {
                return this._feed.pipe(v.h(O.$K));
              }
            },
            {
              key: "currentFeed",
              get: function () {
                return w.fromNullable(this._feed.getValue());
              }
            },
            {
              key: "_getFeed",
              value: function (e) {
                var t = this._feeds.get(e);
                return void 0 === t ? _.left("Cannot switch to feed. Feed with id '".concat(e, "' not found.")) : _.right(t);
              }
            },
            {
              key: "_getFeedInternalInfo",
              value: function (e, t) {
                var n = this._getFeedContent(e);
                return {
                  feedId: e,
                  feedFilter: function (e) {
                    var t = $(e.content);
                    return (
                      !w.isNone(t) &&
                      n.filtering.reduce(function (e, n) {
                        return !1 === e
                          ? e
                          : (0, o.zG)(
                              t,
                              w.chain(function (e) {
                                return w.fromNullable(e[n.property]);
                              }),
                              w.fold(
                                function () {
                                  return n.condition === A.j2.NotEqualTo;
                                },
                                function (e) {
                                  return n.condition === A.j2.EqualTo ? e === n.value : e !== n.value;
                                }
                              )
                            );
                      }, !0)
                    );
                  },
                  feedOrd: (0, r.fold)(S.getMonoid())(
                    n.ordering.map(function (e) {
                      return (0, o.zG)(
                        S.ordNumber,
                        S.contramap(
                          (0, o.ls)(
                            $,
                            w.chain(function (t) {
                              return w.fromNullable(t[e.orderBy]);
                            }),
                            w.fold(
                              function () {
                                return Number.MAX_VALUE;
                              },
                              function (t) {
                                return e.direction === A.di.Asc ? t : -1 * t;
                              }
                            )
                          )
                        )
                      );
                    })
                  ),
                  itemIdToSelect: w.some(t),
                  header: n.header,
                  footer: w.fromNullable(n.footer)
                };
              }
            },
            {
              key: "pushFeed",
              value: function (e, t) {
                var n = this;
                return (0, o.zG)(
                  this._getFeed(e),
                  _.map(function () {
                    var r = n._feedStack.getValue();
                    return (r = r.concat({ feedId: e, focusedCardId: t ? G.j.Item.Id.from(t) : void 0 })), n._feedStack.next(r), null;
                  })
                );
              }
            },
            {
              key: "popFeed",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w.none,
                  t = this,
                  n = this._feedStack.getValue();
                if (n.length > 1) return (n = n.slice(0, n.length - 1)), void this._feedStack.next(n);
                (0, o.zG)(
                  e,
                  w.fold(
                    function () {
                      return t._log.warn(
                        "Invoked `popFeed()` when there are less than 2 feeds in the feed stack, this is a no-op. No fallback feed provided."
                      );
                    },
                    function (e) {
                      t.pushFeed(G.j.Item.Id.from(e.feedId), e.cardId),
                        t._log.debug(
                          "Invoked 'popFeed()' when there are less than 2 feeds in the feed stack. Switching to the provided fallback feed. ".concat(
                            JSON.stringify(e)
                          )
                        );
                    }
                  )
                );
              }
            },
            {
              key: "focusCard",
              value: function (e) {
                var t = this;
                return (0, o.zG)(
                  this.currentFeed,
                  _.fromOption(function () {
                    return "Cannot focus card when there is no active feed.";
                  }),
                  _.map(function () {
                    return t._cardIdToFocus.next(e), null;
                  })
                );
              }
            },
            {
              key: "notifyCardFocused",
              value: function (e) {
                var t = this._feedStack.getValue(),
                  n = t[t.length - 1];
                (0, j.kG)(void 0 !== n, "notifyCardFocused: Feed stack cannot be empty."),
                  (t = t.slice(0, t.length - 1).concat(X(Q({}, n), { focusedCardId: e }))),
                  this._feedStack.next(t);
              }
            },
            {
              key: "_processSDUIItems",
              value: function (e) {
                var t = this;
                return k.v.fromMutation(function (n) {
                  (0, o.zG)(
                    e,
                    k.v.forEach(
                      function (e) {
                        void 0 !== t._feeds.get(e.id)
                          ? (t._feeds.delete(e.id),
                            (0, o.zG)(
                              t.currentFeed,
                              w.filter(function (t) {
                                return t.feedId.toString() === e.id.toString();
                              }),
                              C.bw(function () {
                                return t.onFeedRemove.next(e);
                              })
                            ))
                          : n.set(e.id, T.t$(e));
                      },
                      function (e, r) {
                        if ("assistantFeed" === r.content.type) {
                          var i = r.content;
                          void 0 !== t._feeds.get(e.id)
                            ? (t._feeds.set(e.id, X(Q({}, r), { content: i })),
                              (0, o.zG)(
                                t.currentFeed,
                                w.filter(function (t) {
                                  return t.feedId === e.id;
                                }),
                                w.map(function (e) {
                                  t._header.next(i.header), t._footer.next(w.fromNullable(i.footer));
                                })
                              ))
                            : t._log.warn("Feed with id '".concat(e.id, "' not found for update"));
                        } else n.set(e.id, T.Hk(e, r));
                      },
                      function (e) {
                        if ("assistantFeed" === e.content.type) {
                          var r = e.content;
                          t._feeds.set(e.id, X(Q({}, e), { content: r }));
                        } else n.set(e.id, T.F2(e));
                      }
                    )
                  );
                });
              }
            },
            {
              key: "dispose",
              value: function () {
                this._subs.dispose();
              }
            }
          ]),
          n && D(t.prototype, n),
          E && D(t, E),
          e
        );
      })();
      function $(e) {
        var t = !0,
          n = !1,
          r = void 0;
        try {
          for (var o, i = E.ab.traverse(e)[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
            var u = o.value;
            if ("longFormCard" === u.type) return w.some(u.feedProperties);
            if ("assistantCard" === u.type && u.properties) return w.some(u.properties);
          }
        } catch (e) {
          (n = !0), (r = e);
        } finally {
          try {
            t || null == i.return || i.return();
          } finally {
            if (n) throw r;
          }
        }
        return w.none;
      }
    }
  }
]);
