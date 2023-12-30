(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [399],
  {
    963888: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => n });
      const n = a(225026);
    },
    580443: (e, t, a) => {
      "use strict";
      a.d(t, {
        AF: () => c,
        B$: () => E,
        Fz: () => N,
        LF: () => M,
        MU: () => u,
        NG: () => m,
        Sm: () => f,
        Tg: () => I,
        Uo: () => A,
        YD: () => D,
        b1: () => b,
        f1: () => g,
        p6: () => x,
        pF: () => v,
        pq: () => p,
        ry: () => h,
        sZ: () => y,
        t0: () => T,
        wt: () => d,
        yf: () => k
      });
      var n = a(593039),
        i = a(543956),
        s = a(365580),
        r = a(170226);
      const o = { [i.rR.Legacy]: i.rR.Team, [i.rR.Free]: i.rR.Team, [i.rR.Entreprise]: i.rR.Team },
        l = { STARTER: "leeloo_teamplan_starter", BUSINESS: "leeloo_teamplan_business", TEAM: "leeloo_teamplan_team" };
      function c(e) {
        return e && Array.isArray(e.spaces) && e.spaces.some((e) => "accepted" === e.status);
      }
      function d(e) {
        return c(e) && (e.spaces || []).some((e) => "teamTrial" === e.planType);
      }
      const u = (e) => {
          var t;
          return !!e && c(e) && (null != (t = e.spaces) ? t : []).some((e) => e.isTeamAdmin || e.isBillingAdmin);
        },
        p = (e) => {
          var t;
          return (null != (t = e?.spaces) ? t : []).some((e) => "team" === e.tier);
        },
        m = (e) => {
          var t;
          return (null != (t = e?.spaces) ? t : []).some((e) => "business" === e.tier);
        },
        g = (e) => {
          var t;
          return (null != (t = e?.spaces) ? t : []).some((e) => "starter" === e.tier);
        };
      function h(e) {
        return Boolean(e?.familyMembership);
      }
      function x(e) {
        return Boolean(e?.familyMembership?.isAdmin);
      }
      function k(e) {
        return e?.statusCode === i.lU.PREMIUM || e?.statusCode === i.lU.PREMIUM_CANCELLED;
      }
      function y(e) {
        const t = k(e) && "essentials" === e?.planFeature;
        return e.planName ? t && e.planName.includes("essentials") : t;
      }
      function M(e) {
        return !!e.planName && k(e) && e.planName.includes("advanced");
      }
      function b(e) {
        return e?.statusCode === i.lU.NEW_USER;
      }
      function f(e) {
        return k(e) && "sync" === e?.planFeature;
      }
      function I(e) {
        return "premiumplus" === e?.planFeature;
      }
      function N(e) {
        return e.spaces?.find((e) => e.status === i.fE.Accepted);
      }
      function D(e) {
        return h(e) ? n.Plan.Family : y(e) ? n.Plan.Essentials : f(e) ? n.Plan.Premium : n.Plan.Free;
      }
      function T(e) {
        return o[e] || e;
      }
      function A({ tier: e, translate: t }) {
        const a = T(e);
        switch (a) {
          case i.rR.Starter:
            return t(l.STARTER);
          case i.rR.Team:
            return t(l.TEAM);
          case i.rR.Business:
            return t(l.BUSINESS);
          default:
            (0, s.U)(a);
        }
      }
      function E(e) {
        return e && ("free_trial" === e.planType || e.statusCode === i.lU.NEW_USER) && e.endDate ? (0, r.PY)(e.endDate) : void 0;
      }
      function v(e) {
        return "monthly" === e?.autoRenewInfo?.periodicity ? n.PlanBillingPeriod.Monthly : n.PlanBillingPeriod.Yearly;
      }
    },
    368976: (e, t, a) => {
      "use strict";
      a.d(t, { u: () => c, w: () => l });
      var n = a(696832),
        i = a(851285),
        s = a(876307),
        r = a(962899),
        o = a(488203);
      const l = (0, n.createContext)({}),
        c = ({ children: e, portalId: t, alertSize: a }) => {
          const [c, d] = (0, n.useState)(0),
            { translate: u } = (0, o.Z)(),
            p = (0, n.useRef)(),
            m = (0, n.useRef)({ children: null, showIcon: !0 }),
            g = (0, n.useCallback)(() => {
              window.clearTimeout(p?.current);
            }, []);
          (0, n.useEffect)(() => g, [g]);
          const h = document.getElementById(t);
          return (0, s.tZ)(
            n.Fragment,
            null,
            (0, s.tZ)(
              l.Provider,
              {
                value: {
                  showAlert: (e, t, a = !0, n, i, s = 5e3) => {
                    g(),
                      (m.current = { children: e, severity: t, showIcon: a, actionText: n, onAction: i }),
                      d((e) => ++e),
                      (p.current = window.setTimeout(() => {
                        d(0);
                      }, s));
                  }
                }
              },
              e
            ),
            c && h
              ? (0, i.createPortal)((0, s.tZ)(r.bZj, { ...m.current, size: a, closeIconName: u("_common_alert_dismiss_button") }), h)
              : null
          );
        };
    },
    86498: (e, t, a) => {
      "use strict";
      a.d(t, { V: () => s });
      var n = a(696832),
        i = a(368976);
      const s = () => (0, n.useContext)(i.w);
    },
    374301: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => r });
      var n = a(495326),
        i = a.n(n),
        s = a(342868);
      class r {
        constructor() {
          (this.WSURL = "https://ws1.dashlane.com"),
            (this.WSVERSION = 0),
            (this.WSNAME = ""),
            (this.CLOUDFLARE_ACCESS_KEY = ""),
            (this.CLOUDFLARE_SECRET_KEY = "");
        }
        _makeRequest(e, t, a = {}) {
          if ("dummy-login@example.com" === t.login && "userlog" !== this.WSNAME)
            throw new Error("API Base: A dummy login has reached actual API calling layer");
          return i()
            .post(`${this.WSURL}/${this.WSVERSION}/${this.WSNAME}/${e}`, t, { transformRequest: [(e) => s.stringify(e)] })
            .then((e) => {
              if (a.rawResult) return e.data;
              if ("object" != typeof e.data) throw new Error("Invalid incoming data: " + e);
              const t = (200 !== e.data.code && !e.data.success && ("code" in e.data || "success" in e.data)) || "error" in e.data,
                n = "Incorrect authentification" === e.data.content;
              if (t || n) {
                if (
                  e.data.content &&
                  [
                    "no_free_slot",
                    "no_free_slot_free_plan",
                    "not_authorized",
                    "cannot_remove_last_billing_admin",
                    "team_name_already_exists"
                  ].includes(e.data.content.error)
                )
                  throw new Error(e.data.content.error);
                throw new Error(e.data.message || e.data.content || e.data.error.message);
              }
              return e.data;
            });
        }
      }
    },
    891828: (e, t, a) => {
      "use strict";
      a.d(t, { L: () => h, Z: () => x });
      var n = a(374301);
      function i() {
        return new Promise((e) => {
          setTimeout(() => e({ code: 200 }), 500);
        });
      }
      var s = a(692077),
        r = a(543956),
        o = a(241185),
        l = a(438042),
        c = a(433117);
      const d = {};
      function u(e, t) {
        return Math.round(Math.random() * (t - e) + e);
      }
      function p() {
        let e = "";
        for (let t = 0; t < u(2, 4); t++) e += "bcdfghjklmnprstvwz"[u(0, 17)] + "aeiou"[u(0, 4)];
        return e;
      }
      function m() {
        if (!d.members) {
          const e = [
            { isCaptain: !0 },
            { isBillingAdmin: !0 },
            {},
            { status: r.fE.Pending },
            { status: r.fE.Removed, revokedDate: "2001-02-09" }
          ];
          for (let t = 0; t < 120; t++) e.push({});
          d.members = e.map((e, t) => {
            var a, n, i, s, r, o, d, m, g, h;
            const x = [u(2010, 2016), u(101, 112).toString().substr(1, 2), u(101, 128).toString().substr(1, 2)].join("-"),
              k = u(1, 250),
              y = u(0, k),
              M = u(0, k),
              b = u(0, k);
            return {
              login: t ? `${(null != (a = e.name) ? a : "") + t}@example.com` : "dummy-login@example.com",
              status: e.status ? e.status : "accepted",
              isBillingAdmin: !!e.isCaptain,
              isTeamCaptain: !!e.isCaptain,
              name: null != (n = e.name) ? n : p(),
              lastUpdateDateUnix: (0, l.Z)((0, c.Z)(null != (i = e.lastLogin) ? i : x)),
              revokedDateUnix: e.revokedDate ? (0, l.Z)((0, c.Z)(e.revokedDate)) : null,
              securityIndex: null != (s = e.securityIndex) ? s : u(1, 100),
              passwordStrength80_100Count: null != (r = e.passwordStrength80_100Count) ? r : u(1, 100),
              nbrPasswords: null != (o = e.nbrPasswords) ? o : k,
              compromisedPasswords: null != (d = e.compromisedPasswords) ? d : y,
              weakPasswords: null != (m = e.weakPasswords) ? m : M,
              reused: null != (g = e.reused) ? g : b,
              reusedDistinct: null != (h = e.reusedDistinct) ? h : 0
            };
          });
        }
        return d.members;
      }
      let g = { isCacheUpToDate: {}, members: { lastUpdateTimestamp: 0 }, status: { lastUpdateTimestamp: 0 } };
      function h() {
        g = { isCacheUpToDate: {}, members: { lastUpdateTimestamp: 0 }, status: { lastUpdateTimestamp: 0 } };
      }
      class x extends n.Z {
        constructor(...e) {
          super(...e), (this.WSVERSION = 1), (this.WSNAME = "teamPlans");
        }
        _isDummyLogin(e) {
          return "dummy-login@example.com" === e.login;
        }
        _cache(e, t, a, n) {
          return (
            g[e].promise ||
              (g[e].promise = this._isCacheUpToDate(e, t)
                .then((t) =>
                  t.isUpToDate
                    ? (delete g[e].promise, g[e].data)
                    : a().then(
                        (a) => (
                          delete g[e].promise, n && (a = n(a)), (g[e].data = a), (g[e].lastUpdateTimestamp = t.remoteLastUpdateTimestamp), a
                        )
                      )
                )
                .catch((t) => {
                  throw (delete g[e].promise, t);
                })),
            g[e].promise
          );
        }
        _isCacheUpToDate(e, t) {
          return (
            (g.isCacheUpToDate.promise = this._makeRequest("getTeamLastUpdateTs", {
              login: t.auth.login,
              uki: t.auth.uki,
              teamId: t.auth.teamId
            }).then(
              (t) => (
                delete g.isCacheUpToDate.promise,
                {
                  isUpToDate: 200 === t.code && t.content && t.content.timestamp && g[e].lastUpdateTimestamp === t.content.timestamp,
                  remoteLastUpdateTimestamp: t.content.timestamp
                }
              )
            )),
            g.isCacheUpToDate.promise
          );
        }
        status(e) {
          return this._isDummyLogin(e.auth)
            ? (function () {
                const e = new Date(),
                  t = Math.floor(e.getTime() / 1e3);
                return new Promise((a) => {
                  setTimeout(
                    () =>
                      a({
                        code: 200,
                        content: {
                          team: {
                            assignedPlanDetails: {
                              currency: "usd",
                              duration: "y-1",
                              name: "stripeAnnualC_team",
                              planType: "stripe",
                              priceRanges: [
                                { startMembers: 0, price: 2400, equivalentPrice: 2400 },
                                { startMembers: 11, price: 1800, equivalentPrice: 1800 },
                                { startMembers: 16, price: 1500, equivalentPrice: 1500 }
                              ]
                            },
                            planDetails: {
                              currency: "usd",
                              duration: "y-1",
                              name: "stripeAnnualC_team",
                              planType: "stripe",
                              priceRanges: [
                                { startMembers: 0, price: 2400, equivalentPrice: 2400 },
                                { startMembers: 11, price: 1800, equivalentPrice: 1800 },
                                { startMembers: 16, price: 1500, equivalentPrice: 1500 }
                              ]
                            },
                            info: {
                              name: "Testers",
                              teamDomains: ["team.com"],
                              sharingDisabled: !1,
                              mpPersistenceDisabled: !1,
                              forcedDomainsEnabled: !1,
                              removeForcedContentEnabled: !1,
                              lockOnExit: !1,
                              collectSensitiveDataAuditLogsEnabled: !1,
                              autologinDomainDisabledArray: ["evil.com", "bigcorp.com"],
                              forceAutomaticLogout: 30,
                              cryptoForcedPayload: ""
                            },
                            membersNumber: 150,
                            extraFreeSlots: 5,
                            isFreeTrial: !1,
                            isExpiringSoon: !1,
                            isGracePeriod: !1,
                            creationDateUnix: t,
                            lastBillingDateUnix: t,
                            nextBillingDetails: { amount: 23992, currency: "usd", dateUnix: Math.floor((0, o.Z)(e, 1).getTime() / 1e3) },
                            planId: "freetrial_1month30licenses",
                            planType: "free_trial",
                            planTier: r.rR.Legacy,
                            remainingSlots: 30 - m().length,
                            statusCode: 1,
                            usersToBeRenewedCount: m().filter((e) => "removed" !== e.status).length,
                            securityIndex: 42
                          }
                        },
                        message: "OK"
                      }),
                    1e3
                  );
                });
              })()
            : this._cache("status", e, () =>
                this._makeRequest("status", { login: e.auth.login, uki: e.auth.uki, teamId: e.auth.teamId, members: "false" })
              );
        }
        revokeMembers(e) {
          return this._isDummyLogin(e.auth)
            ? (function (e) {
                if ((0, s.NW)().includes("pretendRevokeFailed")) {
                  const t = {},
                    a = {},
                    n = {};
                  return (
                    e.memberLogins.forEach((e) => {
                      "dummy-login@example.com" === e
                        ? (a[e] = "cannot_remove_last_captain")
                        : "john@example.com" === e
                        ? (a[e] = "cannot_remove_last_billing_admin")
                        : "joseph@example.com" === e
                        ? (n[e] = !0)
                        : (t[e] = !0);
                    }),
                    new Promise((e) => {
                      setTimeout(() => e({ code: 200, content: { removedMembers: t, refusedMembers: a, unproposedMembers: n } }), 500);
                    })
                  );
                }
                return new Promise((e) => {
                  setTimeout(() => e({ code: 200 }), 500);
                });
              })(e)
            : this._makeRequest("removeMembers", {
                login: e.auth.login,
                uki: e.auth.uki,
                teamId: e.auth.teamId,
                removedMemberLogins: JSON.stringify(e.memberLogins),
                members: "false"
              });
        }
        editSettings(e) {
          return this._isDummyLogin(e.auth)
            ? i()
            : this._makeRequest("editSettings", {
                login: e.auth.login,
                uki: e.auth.uki,
                teamId: e.auth.teamId,
                operations: JSON.stringify(e.operations)
              });
        }
        addSeats(e) {
          return this._isDummyLogin(e.auth)
            ? i()
            : this._makeRequest("addSeats", { login: e.auth.login, uki: e.auth.uki, teamId: e.auth.teamId, seats: e.seats });
        }
        updateBillingAdmin(e) {
          return this._isDummyLogin(e.auth)
            ? i()
            : this._makeRequest("updateBillingAdmin", {
                login: e.auth.login,
                uki: e.auth.uki,
                teamId: e.auth.teamId,
                newAdminLogin: e.newAdminLogin,
                oldAdminLogin: e.oldAdminLogin,
                updateTeamCaptain: !1
              });
        }
        invoiceTeamUpgrade(e) {
          return this._makeRequest("invoiceTeamUpgrade", {
            login: e.auth.login,
            planId: e.planId,
            tokenId: e.tokenId,
            membersNumber: e.membersNumber,
            amountToPay: e.amount
          }).then((e) => e.content);
        }
        updatePaymentMean(e) {
          return this._isDummyLogin(e.auth)
            ? i()
            : this._makeRequest("updatePaymentMean", {
                login: e.auth.login,
                uki: e.auth.uki,
                teamId: e.auth.teamId,
                tokenId: e.tokenId,
                customerId: e.customerId,
                stripeAccount: e.stripeAccount
              }).then((e) => e.content);
        }
        upgrade(e) {
          return "dummy-login@example.com" === e.login ? i() : this._makeRequest("upgrade", e);
        }
        acceptTeam(e) {
          return this._makeRequest("acceptTeam", { token: e.token });
        }
        getNewCardToken(e) {
          return this._makeRequest("getNewCardToken", { login: e.auth.login, uki: e.auth.uki, teamId: e.auth.teamId }).then(
            (e) => e.content
          );
        }
      }
    },
    176014: (e, t, a) => {
      "use strict";
      let n;
      function i() {
        if (!n) throw new Error("No application client available");
        return n;
      }
      function s(e) {
        n = e;
      }
      a.d(t, { B: () => i, Q: () => s });
    },
    365580: (e, t, a) => {
      "use strict";
      function n(e) {
        throw new Error(`Didn't expect to reach this code ${e}.`);
      }
      a.d(t, { U: () => n });
    },
    83175: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => d, J: () => u });
      var n,
        i = a(696832),
        s = a(962899),
        r = a(148038),
        o = a(459522),
        l = a(561605),
        c = a(740300);
      let d = (function (e) {
        return (e.ADD = "add"), (e.UPDATE = "update"), (e.REPLACE = "replace"), e;
      })({});
      const u = ({ b2c: e, setPaymentLoading: t, mode: a }) => (
        (function (e, t, a) {
          const n = i.useRef(),
            s = (i.useRef(0), i.useRef(null), (0, r.qr)({ queryConfig: { query: c.C.requestPaymentUpdateAuthenticationToken } }, [])),
            d = (e) => {
              e.origin.includes(o.ef) && window.clearInterval(n.current);
            };
          i.useEffect(
            () => (
              window.addEventListener("message", d),
              () => {
                window.removeEventListener("message", d);
              }
            ),
            []
          ),
            i.useEffect(() => {
              (0, l.Yk)(
                (function (e, t) {
                  const a = e ? o.Jw : o.rP;
                  return t ? `${a}&mode=${t}` : a;
                })(e, a),
                { type: "subscriptionManagement", action: "goToPayments" },
                { newTab: !0 }
              ),
                t(!1);
            }, [s]);
        })(e, t, a),
        n || (n = i.createElement(s.HoD, { color: "primaries.5", strokeWidth: 1 }))
      );
    },
    91333: (e, t, a) => {
      "use strict";
      a.d(t, { S: () => o });
      var n = a(71796),
        i = a(492486),
        s = a(849594),
        r = a(498558);
      const o = (0, n.combineEvents)(i.N, s.X, r.D);
    },
    740300: (e, t, a) => {
      "use strict";
      a.d(t, { C: () => i });
      var n = a(397769);
      a(886730);
      const i = (0, n.Co)();
    },
    886730: (e, t, a) => {
      "use strict";
      a(825601);
      var n = a(71796);
      a(91333);
      class i extends n.GenericChannel {
        constructor({ worker: e, type: t, isHost: a, timeout: n }) {
          n
            ? (super(n), (this.isHost = void 0), (this.type = void 0), (this.worker = void 0))
            : (super(), (this.isHost = void 0), (this.type = void 0), (this.worker = void 0)),
            (this.type = t),
            (this.isHost = a),
            e && this.setWorker(e);
        }
        setWorker(e) {
          (this.worker = e),
            this.worker.addEventListener(
              "message",
              ({ data: e }) => {
                if (e && e.type === this.type)
                  return "connected" === e.content
                    ? (this.isHost || this.signalConnected(), void this._connected())
                    : void this._messageReceived(e.content);
              },
              !1
            ),
            this.isHost && this.signalConnected();
        }
        send(e) {
          if (!this.worker) throw new Error("[workerChannel]: send was called before worker was set");
          this.worker.postMessage({ type: this.type, content: e });
        }
        signalConnected() {
          if (!this.worker) throw new Error("[workerChannel]: signalConnected was called before worker was set");
          this.worker.postMessage({ type: this.type, content: "connected" });
        }
      }
      new i({ type: "CarbonLeeloo", isHost: !1, timeout: 6e5 });
    },
    397769: (e, t, a) => {
      "use strict";
      a.d(t, { Co: () => l, yd: () => c });
      var n = a(71796),
        i = a(864803),
        s = a(91333),
        r = a(740300),
        o = a(74929);
      const l = () => {
          if (!i.Z) throw new Error("App is not packaged in extension, this shouldn't happen");
          const e = [i.Z];
          return (0, n.createEventBus)({ events: s.S, channels: e });
        },
        c = (e) => (
          ((e) => {
            r.C.getLocalAccountsList(null).then(({ localAccounts: t }) => {
              e.dispatch((0, o.gE)()), e.dispatch((0, o.u1)(t));
            });
          })(e),
          ((e) =>
            r.C.resumeSession({}).then((t) => {
              t || e.dispatch((0, o.fL)());
            }))(e)
        );
    },
    864803: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => o });
      var n = a(71796),
        i = a(505441),
        s = a(957459);
      class r extends n.GenericChannel {
        constructor(e = {}) {
          super(e.timeout), (this._port = null), this.setup();
        }
        autoReconnect() {
          this.setup();
        }
        send(e) {
          if (!this._port) throw new Error("WebExtensionChannel: no port");
          this._port.postMessage(e);
        }
        setup() {
          const e = (0, s.Z)();
          (this._port = (0, i.$)({ name: `leeloo-${e}` })),
            this._port &&
              (this._port.onMessage.addListener((e) => this._messageReceived(e)),
              this._port.onDisconnect.addListener(() => {
                (this._port = null), this._disconnected();
              }),
              this._connected());
        }
      }
      const o = ("undefined" != typeof browser && (chrome = browser), new r({ timeout: 6e5 }));
    },
    584953: (e, t, a) => {
      "use strict";
      a.d(t, { e: () => s });
      var n = a(148038);
      const i = a(32046),
        s = (
          e,
          t,
          {
            spaceId: a = null,
            filterQuery: s = null,
            limit: r,
            uniqField: o = "id",
            sort: l = "lastUse",
            sortDirection: c = "ascend",
            additionalFilters: d = []
          } = {}
        ) => {
          const u = [];
          null !== a && u.push({ type: "equals", value: a, field: "spaceId" }),
            null !== s && u.push({ type: "matches", value: s }),
            u.push(...d.filter((e) => "matches" !== e.type && "spaceId" !== e.field));
          const p = {
              filterToken: { filterCriteria: u },
              sortToken: { sortCriteria: [{ field: l, direction: c }], uniqField: o },
              limit: r
            },
            m = i.encodeBase64(JSON.stringify(p), !0);
          return (0, n.qr)({ queryConfig: { query: e, queryParam: p }, liveConfig: t ? { live: t, liveParam: m } : void 0 }, [a, s, r]);
        };
    },
    777550: (e, t, a) => {
      "use strict";
      a.d(t, { B: () => s });
      var n = a(148038),
        i = a(740300);
      function s() {
        const e = (0, n.qr)({ queryConfig: { query: i.C.getAccountInfo, queryParam: null } }, []);
        return e.status !== n.rq.Success ? null : e.data;
      }
    },
    906786: (e, t, a) => {
      "use strict";
      a.d(t, { m: () => s });
      var n = a(148038),
        i = a(740300);
      function s() {
        return (0, n.qr)({ queryConfig: { query: i.C.getAnalyticsInstallationId } }, []);
      }
    },
    615394: (e, t, a) => {
      "use strict";
      a.d(t, { II: () => o, gW: () => s, rp: () => r });
      var n = a(148038),
        i = a(114943);
      function s(e) {
        const t = (0, i.Y)();
        return t.status === n.rq.Success && t.data
          ? { status: n.rq.Success, data: e.every((e) => t.data.capabilities?.[e].enabled) }
          : { status: n.rq.Loading };
      }
      function r(e) {
        const t = s(e);
        return t.status === n.rq.Success && t.data;
      }
      function o(e) {
        const t = s(e);
        return t.status === n.rq.Success && !t.data;
      }
    },
    377377: (e, t, a) => {
      "use strict";
      a.d(t, { w: () => s });
      var n = a(148038),
        i = a(361607);
      const s = (e) => {
        const t = (0, i._)();
        return t.status === n.rq.Success && !!t.data[e];
      };
    },
    463204: (e, t, a) => {
      "use strict";
      a.d(t, { rR: () => r, rU: () => o, uv: () => l });
      var n = a(638819),
        i = a(148038),
        s = a(740300);
      const r = (e) => {
          var t;
          const a = [];
          e?.currentYearFilter && a.push({ field: "startYear", value: e.currentYearFilter, type: "equals" }),
            e?.currentPlanFilter && a.push({ field: "planName", value: e.currentPlanFilter, type: "equals" });
          const r = e?.sortDirection === n._.ascending ? "ascend" : "descend",
            o = (0, i.qr)(
              {
                queryConfig: {
                  query: s.C.getInvoiceList,
                  queryParam: {
                    filterToken: { filterCriteria: a },
                    sortToken: {
                      sortCriteria: [{ direction: r, field: null != (t = e?.sortField) ? t : "startDate" }],
                      uniqField: "invoiceId"
                    }
                  }
                }
              },
              [e?.currentYearFilter, e?.currentPlanFilter, e?.sortDirection, e?.sortField]
            );
          return o.status === i.rq.Success && o?.data?.items ? o.data.items : [];
        },
        o = (e) => {
          const t = (0, i.qr)({ queryConfig: { query: s.C.getInvoicesCount } }, [e]);
          return t.status === i.rq.Success && t?.data ? t.data : 0;
        },
        l = () => {
          const e = (0, i.qr)({ queryConfig: { query: s.C.getInvoiceListYears } }, []);
          return e.status === i.rq.Success && e?.data ? e.data : [];
        };
    },
    28976: (e, t, a) => {
      "use strict";
      a.d(t, { k: () => s });
      var n = a(148038),
        i = a(740300);
      const s = () => {
        const e = (0, n.qr)({ queryConfig: { query: i.C.isAllowedToShare } }, []);
        return e.status === n.rq.Success && e.data;
      };
    },
    977334: (e, t, a) => {
      "use strict";
      a.d(t, { V: () => o, a: () => r });
      var n = a(348958),
        i = a(799852),
        s = a(133354);
      const r = () => (0, i.k)(n.X, "sharingEnabled"),
        o = () => {
          const e = r();
          return e.status === s.rq.Success && e.data;
        };
    },
    499906: (e, t, a) => {
      "use strict";
      a.d(t, { t: () => s });
      var n = a(148038),
        i = a(740300);
      const s = () => {
        const e = (0, n.qr)({ queryConfig: { query: i.C.getLoginStepInfo }, liveConfig: { live: i.C.liveLoginStepInfo } }, []);
        return e.status === n.rq.Success ? e.data : void 0;
      };
    },
    115607: (e, t, a) => {
      "use strict";
      a.d(t, { JS: () => s, eW: () => o, lZ: () => r });
      var n = a(148038),
        i = a(740300);
      function s() {
        return (0, n.qr)({ queryConfig: { query: i.C.getNodePremiumStatus } }, []);
      }
      function r() {
        const e = s();
        if (e.status === n.rq.Loading) return { isLoading: !0 };
        if (e.status === n.rq.Error)
          return {
            isLoading: !1,
            planFeature: void 0,
            planCopy: void 0,
            isTeamSoftDiscontinued: void 0,
            isTrial: void 0,
            isBillingOrFullAdmin: void 0
          };
        const t = e.data.b2bStatus?.currentTeam,
          a = t?.planFeature,
          i = t?.teamMembership ? t.teamMembership.isBillingAdmin || t.teamMembership.isTeamAdmin : void 0,
          r = a ? ("team" === a ? "team_account_teamplan_team" : "team_account_teamplan_business") : void 0,
          o = t?.isSoftDiscontinued,
          l = t?.isTrial;
        return { isLoading: !1, planFeature: a, planCopy: r, isTeamSoftDiscontinued: o, isTrial: l, isBillingOrFullAdmin: i };
      }
      function o() {
        var e;
        const t = s();
        return t.status !== n.rq.Success
          ? { isLoading: !0, isFreeB2C: null }
          : {
              isLoading: !1,
              isFreeB2C: 0 === t.data.statusCode && 0 === Object.keys(null != (e = t.data.b2bStatus) ? e : {}).length && !t.data.isTrial
            };
      }
    },
    379846: (e, t, a) => {
      "use strict";
      a.d(t, { d: () => l, m: () => o });
      var n = a(696832),
        i = a(506295),
        s = a(148038),
        r = a(740300);
      const o = (e) => {
          const { current: t } = n.useRef(() => r.C.markNotificationAsSeen(e)),
            a = (0, s.qr)({ queryConfig: { query: r.C.getNotificationStatus }, liveConfig: { live: r.C.liveNotificationStatus } }, []);
          return { unseen: a.status === s.rq.Success && a.data[e] === i.E.Unseen, setAsSeen: t };
        },
        l = (e) => {
          const { current: t } = n.useRef(() => r.C.markNotificationAsInteracted(e)),
            a = (0, s.qr)({ queryConfig: { query: r.C.getNotificationStatus }, liveConfig: { live: r.C.liveNotificationStatus } }, []);
          return {
            interacted: a.status === s.rq.Loading || (a.status === s.rq.Success && a.data[e] === i.E.Interacted),
            setAsInteracted: t,
            status: a.status
          };
        };
    },
    540681: (e, t, a) => {
      "use strict";
      a.d(t, { E: () => s });
      var n = a(148038),
        i = a(740300);
      const s = () => (0, n.A0)({ query: i.C.getPersonalSettings, queryParam: null }, []);
    },
    114943: (e, t, a) => {
      "use strict";
      a.d(t, { Y: () => s });
      var n = a(148038),
        i = a(740300);
      function s() {
        return (0, n.qr)({ queryConfig: { query: i.C.getPremiumStatus } }, []);
      }
    },
    632197: (e, t, a) => {
      "use strict";
      a.d(t, { q: () => s });
      var n = a(148038),
        i = a(740300);
      const s = () =>
        (0, n.qr)({ queryConfig: { query: i.C.arePasswordsProtected }, liveConfig: { live: i.C.liveArePasswordsProtected } }, []);
    },
    933823: (e, t, a) => {
      "use strict";
      a.d(t, { j: () => o });
      var n = a(434710),
        i = a(799852),
        s = a(133354),
        r = a(300044);
      const o = () => {
        const e = (0, r.f)(),
          t = (0, i.k)(n.Q, "sessionState", { email: null != e ? e : "" });
        return t.status === s.rq.Success ? t.data : void 0;
      };
    },
    319686: (e, t, a) => {
      "use strict";
      a.d(t, { Z1: () => s });
      var n = a(172721),
        i = a(799852);
      const s = () => (0, i.k)(n.a, "getSharedCollectionsCount");
    },
    718108: (e, t, a) => {
      "use strict";
      a.d(t, { E: () => s });
      var n = a(148038),
        i = a(740300);
      const s = () => (0, n.qr)({ queryConfig: { query: i.C.getActiveSpaces } }, []);
    },
    264997: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => s });
      var n = a(148038),
        i = a(740300);
      function s() {
        return (0, n.qr)(
          { queryConfig: { query: i.C.getSubscriptionInformation }, liveConfig: { live: i.C.liveSubscriptionInformation } },
          []
        );
      }
    },
    58037: (e, t, a) => {
      "use strict";
      a.d(t, { j: () => s });
      var n = a(148038),
        i = a(740300);
      const s = () => {
        const e = (0, n.qr)({ queryConfig: { query: i.C.getUserLoginStatus }, liveConfig: { live: i.C.liveLoginStatus } }, []);
        return e.status === n.rq.Success ? e.data : void 0;
      };
    },
    560791: (e, t, a) => {
      "use strict";
      a.d(t, { CA: () => h });
      var n = a(543956),
        i = a(74929),
        s = a(740300),
        r = a(326021),
        o = a(197446),
        l = a(500358),
        c = a(38452),
        d = a(522640),
        u = a(814691);
      function p(e) {
        const t = (0, c.xO)(e.getState());
        t &&
          t.teamId &&
          t.details.info.recoveryEnabled &&
          t.details.isTeamAdmin &&
          (0, d.mP)({ teamId: Number(t.teamId) }).catch((e) => {
            u.Qy.error({ message: "getMasterPasswordResetDemandList failed", content: { error: e.message } });
          });
      }
      const m = [];
      var g = a(421484);
      const h = (e) => {
        s.C.loginStatusChanged.on((t) => {
          let a = { loginStatus: t };
          if (t.loggedIn)
            s.C.getUki(null).then(({ uki: a }) => {
              e.dispatch(r.m8({ uki: a, login: t.login }));
            }),
              (function (e) {
                p(e), m.push(self.setInterval(() => p(e), 6e4));
              })(e);
          else {
            m.forEach((e) => clearInterval(e));
            const { abtesting: t, localAccounts: n, currentLocation: s } = e.getState().carbon;
            (a = Object.assign({}, i.Zu, { abtesting: t, localAccounts: n, currentLocation: s })), e.dispatch(r._e());
          }
          t.needsSSOMigration || e.dispatch(i.Jx(a));
        }),
          s.C.serverSidePairingStatusChanged.on((t) => {
            e.dispatch(i.p_(t));
          }),
          s.C.deactivateDeviceResult.on((t) => {
            t.success && e.dispatch(i.ow(t.devicesList));
          }),
          s.C.updatePaymentCardTokenResult.on((t) => {
            t && e.dispatch((0, o.Z)(new Error(t.reason)));
          }),
          s.C.changeDeviceNameResult.on((t) => {
            t.success && e.dispatch(i.P6(t.devicesList));
          }),
          s.C.localAccountsListUpdated.on((t) => {
            e.dispatch(i.u1(t.localAccounts));
          }),
          s.C.accountInfoChanged.on(({ accountInfo: t, spaceData: a }) => {
            if (a?.spaces) {
              const { spaces: t } = a,
                i = t.reduce(
                  (e, t) => {
                    const { isTeamAdmin: a, isBillingAdmin: n, isGroupManager: i } = t.details;
                    return {
                      isTeamAdmin: a || e.isTeamAdmin,
                      isBillingAdmin: n || e.isBillingAdmin,
                      isGroupManager: Boolean(i) || e.isGroupManager
                    };
                  },
                  { isTeamAdmin: !1, isBillingAdmin: !1, isGroupManager: !1 }
                ),
                s = new Set();
              i.isTeamAdmin && n.a1.forEach((e) => s.add(e)),
                i.isBillingAdmin && s.add("BILLING"),
                i.isGroupManager && n.Io.forEach((e) => s.add(e)),
                e.dispatch(r.t1({ permissions: { tacAccessPermissions: s } }));
            }
            e.dispatch(i.Wm(t));
          }),
          s.C.accountFeaturesChanged.on((t) => {
            e.dispatch(i.Dl(t));
          }),
          s.C.spaceDataUpdated.on((t) => {
            e.dispatch(i.Tp(t));
          }),
          s.C.teamAdminDataUpdated.on((t) => {
            const { teams: a } = (0, g.e)(e.getState());
            Object.keys(t.teams).forEach((e) => {
              a[e] = Object.assign({}, a[e], t.teams[e]);
            }),
              e.dispatch(i.R3({ teams: a }));
          }),
          s.C.webOnboardingModeUpdated.on((t) => {
            e.dispatch(i.W7(t));
          }),
          s.C.abTestingChanged.on((t) => {
            e.dispatch(i.uw(t));
          }),
          s.C.currentLocationUpdated.on((t) => {
            e.dispatch(i.vJ(t));
          }),
          s.C.checkDirectorySyncKeyRequest.on((t) => {
            e.dispatch((0, l.Qz)(t));
          });
      };
    },
    74929: (e, t, a) => {
      "use strict";
      a.d(t, {
        Dl: () => d,
        Jx: () => o,
        P6: () => x,
        R3: () => p,
        Tp: () => u,
        W7: () => m,
        Wm: () => c,
        ZP: () => f,
        Zu: () => s,
        fL: () => b,
        gE: () => M,
        ow: () => k,
        p_: () => l,
        u1: () => y,
        uw: () => g,
        vJ: () => h
      });
      var n = a(543956),
        i = a(435681);
      const s = {
          abtesting: { version: null },
          currentLocation: { country: null, isEu: null },
          loginStatus: { loggedIn: !1, login: "" },
          serverSidePairingStatus: n.LT.UNPAIRED,
          devices: [],
          accountInfo: {},
          accountFeatures: { list: {} },
          hasLoadedLocalAccountListAFirstTime: !1,
          hasNoSessionToResume: !1,
          localAccounts: null,
          spaceData: { spaces: [] },
          teamAdminData: { teams: {} },
          webOnboardingMode: {
            flowCredentialInApp: !1,
            flowLoginCredentialOnWeb: !1,
            flowSaveCredentialOnWeb: !1,
            flowImportPasswords: !1,
            flowTryAutofillOnWeb: !1,
            completedSteps: {
              saveCredentialInApp: void 0,
              loginCredentialOnWeb: void 0,
              saveCredentialOnWeb: void 0,
              importPasswordsShown: void 0,
              onboardingHubShown: void 0,
              tryAutofillOnWeb: void 0
            }
          }
        },
        r = (0, i.Z)("CARBON", Object.assign({}, s)),
        o = r.registerAction("login-status-updated", (e, t) => Object.assign({}, e, t)),
        l = r.registerAction("server-side-pairing-status-updated", (e, t) => Object.assign({}, e, t)),
        c = r.registerAction("account-info-updated", (e, t) => Object.assign({}, e, { accountInfo: t })),
        d = r.registerAction("account-features-updated", (e, t) => Object.assign({}, e, { accountFeatures: t })),
        u = r.registerAction("space-data-updated", (e, t) => Object.assign({}, e, { spaceData: t })),
        p = r.registerAction("team-admin-data-updated", (e, t) => Object.assign({}, e, { teamAdminData: t })),
        m = r.registerAction("web-onboarding-mode-update", (e, t) => Object.assign({}, e, { webOnboardingMode: t })),
        g = r.registerAction("ab-testing-updated", (e, t) => Object.assign({}, e, { abtesting: t })),
        h = r.registerAction("current-location-updated", (e, t) => ({ ...e, currentLocation: t })),
        x = r.registerAction("devices-list-updated", (e, t = []) => ({ ...e, devices: t })),
        k = r.registerAction("device-deactivation-confirmed", (e, t = []) => {
          const a = { ...e.accountInfo.premiumStatus, devicesCount: t ? t.length : 0 };
          return Object.assign({}, e, { premiumStatus: a, devices: t });
        }),
        y = r.registerAction("local-accounts-list-updated", (e, t = []) => ({ ...e, localAccounts: t })),
        M = r.registerAction("loaded-local-accounts-list-a-first-time", (e) => ({ ...e, hasLoadedLocalAccountListAFirstTime: !0 })),
        b = r.registerAction("no-session-to-resume", (e) => ({ ...e, hasNoSessionToResume: !0 })),
        f = r;
    },
    38452: (e, t, a) => {
      "use strict";
      a.d(t, { ev: () => r, kA: () => o, xO: () => s });
      var n = a(421484),
        i = a(526849);
      const s = (e) => e.carbon.spaceData.spaces.find((e) => "accepted" === e.details.status),
        r = (e) => {
          const t = s(e);
          return t && (0, i.is)(String, t.teamId) ? Number(t.teamId) : null;
        },
        o = (e) => {
          var t;
          const a = r(e);
          return null != (t = a && (0, n.e)(e)[a]) ? t : void 0;
        };
    },
    421484: (e, t, a) => {
      "use strict";
      a.d(t, { e: () => n });
      const n = (e) => {
        var t;
        return null != (t = e.carbon.teamAdminData) ? t : { teams: {} };
      };
    },
    522640: (e, t, a) => {
      "use strict";
      a.d(t, {
        $Y: () => b,
        FU: () => s,
        J0: () => r,
        JQ: () => h,
        Lx: () => x,
        QV: () => k,
        RR: () => u,
        VK: () => m,
        YY: () => g,
        Z8: () => p,
        et: () => y,
        hh: () => l,
        j_: () => o,
        jy: () => d,
        mP: () => c,
        vp: () => M,
        wZ: () => i
      });
      var n = a(740300);
      const i = (e, t) =>
          new Promise((e, a) => {
            n.C.createUserGroup(t).then(({ error: t }) => {
              if (t) return a(t);
              e();
            });
          }),
        s = (e) =>
          new Promise((t, a) => {
            n.C.deleteUserGroup(e).then(({ error: e }) => {
              e ? a(e) : t();
            });
          }),
        r = (e) =>
          new Promise((t, a) => {
            n.C.renameUserGroup(e).then(({ error: e }) => {
              e ? a(e) : t();
            });
          }),
        o = (e) => n.C.inviteUserGroupMembers(e),
        l = (e) =>
          new Promise((t, a) => {
            n.C.teamUpdated(e).then(({ errors: e }) => {
              e ? a(e) : t();
            });
          }),
        c = (e) =>
          new Promise((t, a) => {
            n.C.getMasterPasswordResetDemandList(e).then(({ demands: e, error: n }) => (n ? a(new Error(n.message)) : t(e)));
          }),
        d = (e) =>
          new Promise((t, a) => {
            n.C.setTeamSettings(e).then(({ error: e }) => (e ? a(e) : t()));
          }),
        u = (e) =>
          new Promise((t) => {
            n.C.checkIfMasterPasswordIsValid(e).then((e) => t(e.isMasterPasswordValid));
          }),
        p = (e) =>
          new Promise((t, a) => {
            n.C.acceptMasterPasswordResetDemand(e).then(({ error: e }) => (e ? a(new Error(e.message)) : t()));
          }),
        m = (e) =>
          new Promise((t, a) => {
            n.C.declineMasterPasswordResetDemand(e).then(({ error: e }) => (e ? a(new Error(e.message)) : t()));
          }),
        g = (e) =>
          new Promise((t, a) => {
            n.C.getMembers(e).then((e) => (e.success ? t(e.members) : a(e.error)));
          }),
        h = (e) =>
          new Promise((t, a) => {
            n.C.addTeamAdmin(e).then(({ error: e }) => (e ? a(e) : t()));
          }),
        x = (e) =>
          new Promise((t, a) => {
            n.C.removeTeamAdmin(e).then(({ error: e }) => (e ? a(e) : t()));
          }),
        k = (e, t) => n.C.checkDirectorySyncKeyResponse({ ...e, response: t }),
        y = (e) =>
          new Promise((t, a) => {
            const i = e.queries.length;
            n.C.queryStaticDataCollections(e).then(({ error: e, results: n }) =>
              e
                ? a(e)
                : n.length !== i
                ? a(new Error("Unexpected response from carbonConnector.queryStaticDataCollections: invalid number of collections"))
                : t(n)
            );
          }),
        M = (e, t, a) => n.C.sendSharingResponse({ status: e, itemGroups: t, userGroups: a }),
        b = (e, t, a) => n.C.shareItem({ itemId: e, permission: t, recipients: a });
    },
    689611: (e, t, a) => {
      "use strict";
      a.d(t, { $: () => l });
      var n = a(696832),
        i = a(526849),
        s = a(71796),
        r = a(238802);
      const o = !1;
      function l(e, t) {
        var a;
        return (
          ((a = class extends n.Component {
            constructor(...e) {
              super(...e),
                (this.subscriptions = {}),
                (this.getEmptyInjected = (e) => Object.keys(t).reduce((t, a) => ({ ...t, [a]: { type: e } }), {})),
                (this.getEmptyState = (e) => ({ injected: this.getEmptyInjected(e) })),
                (this.state = this.getEmptyState("NotAsked")),
                (this.updateInjectedInState = (e, t, a) => ({ ...e, injected: { ...e.injected, [t]: a } })),
                (this.setInjectedInState = (e, t, a) => {
                  const n = this.updateInjectedInState(e, t, a);
                  this.setState(n);
                }),
                (this.setOneLoading = (e) => this.setInjectedInState(this.state, e, (0, r.Kv)())),
                (this.setAllLoading = () => this.setState({ ...this.state, injected: this.getEmptyInjected("Loading") })),
                (this.loadOneState = (e) => {
                  const a = t[e],
                    n = this.getQueryParam(a.queryParam, this.props),
                    i = a.query;
                  if (!i) return;
                  const s = `${e}-reload`;
                  o && console.time(s),
                    i(n)
                      .then((t) => {
                        o && console.timeEnd(s), this.setInjectedInState(this.state, e, (0, r.fs)(t));
                      })
                      .catch((t) => this.setInjectedInState(this.state, e, (0, r.$l)(t)));
                }),
                (this.loadAllInitialState = () => {
                  this.setAllLoading(), Object.keys(t).forEach(this.loadOneState);
                }),
                (this.listenToOneLive = (e) => {
                  const a = t[e],
                    n = this.getLiveParam(a.liveParam, this.props),
                    i = a.live;
                  i && (this.subscriptions[e] = i.on(n, (t) => this.setInjectedInState(this.state, e, (0, r.fs)(t))));
                }),
                (this.listenToAllLive = () => Object.keys(t).forEach(this.listenToOneLive)),
                (this.stopListeningToOneLive = (e) => {
                  this.subscriptions[e] && (this.subscriptions[e](), delete this.subscriptions[e]);
                }),
                (this.stopListeningToAllLive = () => Object.keys(this.subscriptions).forEach(this.stopListeningToOneLive));
            }
            getLiveParam(e, t) {
              return "string" == typeof e ? t[e] : "function" == typeof e ? e(t) : s.DEFAULT_PARAM;
            }
            getQueryParam(e, t) {
              return "string" == typeof e ? t[e] : "function" == typeof e ? e(t) : null;
            }
            componentDidMount() {
              this.loadAllInitialState(), this.listenToAllLive();
            }
            componentWillUnmount() {
              this.stopListeningToAllLive();
            }
            componentDidUpdate(e) {
              Object.keys(t).forEach((a) => {
                const n = t[a],
                  s = this.getLiveParam(n.liveParam, e),
                  r = this.getLiveParam(n.liveParam, this.props),
                  o = this.getQueryParam(n.queryParam, e),
                  l = this.getQueryParam(n.queryParam, this.props);
                !(0, i.equals)(s, r) && (this.stopListeningToOneLive(a), this.listenToOneLive(a)),
                  !(0, i.equals)(o, l) && (this.setOneLoading(a), this.loadOneState(a));
              });
            }
            render() {
              const t = { ...this.props, ...this.state.injected };
              return n.createElement(e, { ...t });
            }
          }).displayName = "CarbonApiConsumerWrapper"),
          a
        );
      }
    },
    402337: (e, t, a) => {
      "use strict";
      a.d(t, { H: () => s, R: () => i }), a(459522);
      var n = a(580443);
      a(740300), a(561605);
      const i = (e) => {
          var t, a;
          return (0, n.AF)(e)
            ? null != (t = e.spaces?.some((e) => e.isTeamAdmin)) && t
              ? "full"
              : null != (a = e.spaces?.some((e) => e.isBillingAdmin)) && a
              ? "billing"
              : null
            : null;
        },
        s = (e, t, a) => a();
    },
    850506: (e, t, a) => {
      "use strict";
      a.d(t, { S: () => l, n: () => i });
      var n = a(914662);
      let i = (function (e) {
        return (
          (e[(e.EUROPE = 0)] = "EUROPE"),
          (e[(e.SPANISH = 1)] = "SPANISH"),
          (e[(e.JAPAN = 2)] = "JAPAN"),
          (e[(e.NORTH_AMERICA_AND_ASIA = 3)] = "NORTH_AMERICA_AND_ASIA"),
          e
        );
      })({});
      const s = new Set([
          n.cH.AT,
          n.cH.BE,
          n.cH.BG,
          n.cH.HR,
          n.cH.CY,
          n.cH.CZ,
          n.cH.DK,
          n.cH.EE,
          n.cH.FI,
          n.cH.FR,
          n.cH.DE,
          n.cH.GR,
          n.cH.HU,
          n.cH.IE,
          n.cH.IT,
          n.cH.LV,
          n.cH.LT,
          n.cH.LU,
          n.cH.MT,
          n.cH.NL,
          n.cH.PL,
          n.cH.PT,
          n.cH.RO,
          n.cH.SK,
          n.cH.SI,
          n.cH.ES,
          n.cH.SE
        ]),
        r = new Set([n.cH.AR, n.cH.CL, n.cH.CO, n.cH.MX, n.cH.PE, n.cH.PT, n.cH.ES]),
        o = new Set([n.cH.JP]),
        l = (e) => (s.has(e) ? i.EUROPE : r.has(e) ? i.SPANISH : o.has(e) ? i.JAPAN : i.NORTH_AMERICA_AND_ASIA);
    },
    893379: (e, t, a) => {
      "use strict";
      a.d(t, { T: () => c });
      var n = a(696832),
        i = a(383849),
        s = a.n(i),
        r = a(962899);
      const o = {
        container: "container--QSZ8VzuK_r",
        notification: "notification--CkM4DBmLI4",
        showArrow: "showArrow--Vb5CfdQqbz",
        dark: "dark--hQ67accajV",
        light: "light--O2Hoc_0k78",
        topRight: "topRight--DiIRmFVdFz",
        topLeft: "topLeft--kbVipqnzjp",
        sideLeft: "sideLeft--XgZ0EWVH0a",
        sideLeftTop: "sideLeftTop--_JEMJRgLaj",
        bottomLeft: "bottomLeft--Z_6vMBPRjs",
        inner: "inner--Nb4viFjAkW",
        content: "content--BRTURdkh7n",
        innerContainer: "innerContainer--HO5B2FA22r",
        icon: "icon--Ls_aMg1Qq3",
        title: "title--mTEjBLm1tU",
        description: "description--SXQO3aOE3Q",
        actions: "actions--RHZNqiGXrS",
        secondaryWithConfirm: "secondaryWithConfirm--Vh5V_JBuDL",
        remove: "remove--sFoskL8uAg",
        image: "image--s9XoakdA9N",
        marginLeft: "marginLeft--z5xqQbVahs"
      };
      var l;
      const c = ({ mode: e = "dark", onSeen: t = () => {}, onAppear: a = () => {}, ...i }) => (
        n.useEffect(() => (a(), t), []),
        i.show
          ? n.createElement(
              "div",
              { className: s()(o.container, i.className) },
              n.createElement(
                "div",
                {
                  className: s()(
                    o[e],
                    o.notification,
                    { [o.showArrow]: i.arrowPosition },
                    i.arrowPosition ? { [o[i.arrowPosition]]: i.arrowPosition } : {}
                  ),
                  style: i.style
                },
                n.createElement(
                  "div",
                  { className: s()(o[e], o.inner) },
                  n.createElement(
                    "div",
                    { className: o.content },
                    n.createElement(
                      "div",
                      { className: o.innerContainer },
                      n.createElement(
                        "div",
                        null,
                        n.createElement(
                          "h1",
                          { className: s()(o[e], o.title) },
                          i.title,
                          i.secondTitle && n.createElement("div", null, l || (l = n.createElement("br", null)), i.secondTitle)
                        ),
                        i.description && n.createElement("h2", { className: s()(o[e], o.description) }, i.description)
                      )
                    ),
                    i.imageSrc && n.createElement("img", { className: o.image, src: i.imageSrc }),
                    (i.confirmLabel || i.cancelLabel) &&
                      n.createElement(
                        "div",
                        { className: o.actions },
                        i.cancelLabel &&
                          i.onCancel &&
                          n.createElement(r.zxk, { nature: "secondary", type: "button", theme: e, onClick: i.onCancel }, i.cancelLabel),
                        i.confirmLabel &&
                          i.onConfirm &&
                          n.createElement(r.zxk, { type: "button", className: o.marginLeft, onClick: i.onConfirm }, i.confirmLabel)
                      )
                  )
                )
              )
            )
          : null
      );
    },
    868505: (e, t, a) => {
      "use strict";
      a.d(t, { e: () => u });
      var n = a(696832),
        i = a(383849),
        s = a.n(i),
        r = a(773817),
        o = a(876307),
        l = a(207867);
      const c = (e) =>
        n.createElement(
          l.j,
          { onOutsideClick: e.onClickOutside },
          n.createElement("div", { className: s()("popupContainer--kv_8QPKyd6", e.className) }, e.children)
        );
      var d = a(66485);
      const u = (0, n.forwardRef)(
        (
          {
            buttonLabel: e,
            confirmButtonLabel: t,
            cancelButtonLabel: a,
            onConfirmButtonClick: i,
            onCancelButtonClick: l,
            onPopupOpen: u,
            confirmButtonDisabled: p,
            popupClassName: m,
            buttonMood: g = "brand",
            buttonIntensity: h = "catchy",
            buttonIconName: x = "ActionAddOutlined",
            children: k
          },
          y
        ) => {
          const { openDialog: M, shouldShowTrialDiscontinuedDialog: b } = (0, d.yp)(),
            [f, I] = (0, n.useState)(!1),
            [N, D] = (0, n.useState)(!1),
            T = () => {
              D(!1), I(!1);
            };
          (0, n.useImperativeHandle)(y, () => ({
            hidePopup() {
              T();
            }
          }));
          const A = (e) => {
              e && e.preventDefault(), !p && i && (I(!0), D(!0), i());
            },
            E = () => {
              T(), l?.();
            };
          return null === b
            ? null
            : (0, r.tZ)(
                "div",
                { style: { position: "relative" } },
                (0, r.tZ)(
                  o.zx,
                  {
                    mood: g,
                    intensity: h,
                    onClick: () => {
                      b ? M() : (I(!0), u?.());
                    },
                    disabled: f,
                    layout: "iconLeading",
                    icon: (0, r.tZ)(o.JO, { name: x })
                  },
                  e
                ),
                f &&
                  (0, r.tZ)(
                    c,
                    { className: s()("popup--hci83jx5BO", m), onClickOutside: E },
                    (0, r.tZ)(
                      "form",
                      { onSubmit: A },
                      k,
                      (0, r.tZ)(
                        "div",
                        { sx: { display: "flex", justifyContent: "right" } },
                        (0, r.tZ)(o.zx, { style: { marginRight: 16 }, onClick: E, mood: "neutral", intensity: "supershy" }, a),
                        (0, r.tZ)(o.zx, { isLoading: N, disabled: p, onClick: A }, t)
                      )
                    )
                  )
              );
        }
      );
    },
    72133: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => r });
      var n = a(198019),
        i = a.n(n),
        s = a(696832);
      const r = s.memo(({ animationParams: e, containerClassName: t, eventListeners: a = [], height: n, width: r }) => {
        const o = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            if (!o || !o.current) return () => {};
            const t = i().loadAnimation({ ...e, container: o.current });
            return (
              a.forEach(({ eventName: e, callback: a }) => {
                t.addEventListener(e, a);
              }),
              () => {
                a.forEach(({ eventName: e, callback: a }) => {
                  t.removeEventListener(e, a);
                }),
                  t && t.destroy();
              }
            );
          }, [e, o, a]),
          s.createElement("div", { style: { height: n, width: r }, ref: o, className: t })
        );
      });
    },
    320733: (e, t, a) => {
      "use strict";
      a.d(t, { S: () => l });
      var n = a(696832),
        i = a(993542),
        s = a(210051),
        r = a(568197),
        o = a(896915);
      const l = ({ email: e, placeholderTextType: t, avatarSize: a, placeholderFontSize: l, avatarStyleOptions: c = {} }) => {
        const { border: d = "" } = c,
          u = (0, s.vV)(e) ? n.createElement(i.h, { email: e, size: a }) : null;
        return n.createElement(
          "div",
          { role: null !== u ? void 0 : "img", "aria-label": null !== u ? void 0 : "blank avatar image", style: { width: a, height: a } },
          n.createElement(
            "div",
            { className: o.Z.placeholderTextAndImgContainer, style: { border: d } },
            n.createElement(
              "span",
              { className: o.Z.placeholderText, role: "presentation", "aria-hidden": "true", style: { fontSize: l ? `${l}px` : "" } },
              t &&
                ("firstTwoCharacters" === t
                  ? ((e) => ((e = e.trim()).length <= 2 ? e : e.charAt(0).toUpperCase() + e.slice(1, 2)))(e)
                  : null)
            ),
            (0, r.BK)() && u ? n.createElement("div", { className: o.Z.placeholderImg, style: { border: d } }, u) : null
          )
        );
      };
    },
    232814: (e, t, a) => {
      "use strict";
      a.d(t, { q: () => d });
      var n = a(696832),
        i = a(383849),
        s = a.n(i),
        r = a(993542),
        o = a(210051),
        l = a(568197),
        c = a(896915);
      const d = (0, n.memo)(({ className: e, email: t, size: a }) => {
        const i = (0, o.vV)(t) ? n.createElement(r.h, { email: t, size: a }) : null;
        return (0, l.BK)() && i
          ? n.createElement("div", { className: s()(c.Z.avatar, e), style: { width: a, height: a } }, i)
          : n.createElement("div", {
              className: s()(c.Z.avatar, e),
              role: "img",
              "aria-label": "blank avatar image",
              style: { width: a, height: a }
            });
      });
    },
    993542: (e, t, a) => {
      "use strict";
      a.d(t, { h: () => r });
      var n = a(696832),
        i = a(381136),
        s = a.n(i);
      const r = ({ email: e, size: t }) => {
        const a = Math.ceil(window.devicePixelRatio);
        try {
          const i = s()(e, { default: "blank", size: t * a, rating: "g" });
          return n.createElement("img", { src: i, width: t, height: t, alt: "Avatar" });
        } catch {
          return null;
        }
      };
    },
    491684: (e, t, a) => {
      "use strict";
      a.d(t, { R: () => s });
      var n = a(876307),
        i = a(962899);
      const s = ({ children: e }) =>
        (0, n.tZ)(
          i.T5p,
          { gridTemplateAreas: "'leftBar content'", gridTemplateColumns: "4px auto", gap: "8px" },
          (0, n.tZ)(i.dDn, {
            as: "div",
            gridArea: "leftBar",
            sx: { backgroundColor: "ds.oddity.brand", height: "100%", width: "4px", borderRadius: "8px", marginRight: "10px" }
          }),
          (0, n.tZ)(i.dDn, { gridArea: "content" }, e)
        );
    },
    873670: (e, t, a) => {
      "use strict";
      a.d(t, { M: () => s });
      var n = a(962899),
        i = a(876307);
      const s = ({
        loading: e = !1,
        content: t,
        children: a,
        mood: s,
        intensity: r,
        placement: o,
        neverShowTooltip: l,
        tooltipSx: c,
        ...d
      }) =>
        (0, i.tZ)(
          n.ua7,
          { content: t, passThrough: !d.disabled || e || l, placement: o, sx: c || {} },
          (0, i.tZ)(
            "span",
            { sx: { display: "inline-block", cursor: d.disabled ? "not-allowed" : "auto" } },
            (0, i.tZ)(
              i.zx,
              { ...d, mood: s, intensity: r, sx: d.disabled ? { pointerEvents: "none" } : {}, isLoading: e, disabled: d.disabled || e },
              a
            )
          )
        );
    },
    879869: (e, t, a) => {
      "use strict";
      a.d(t, { h: () => s });
      var n = a(773817),
        i = a(962899);
      const s = (0, a(696832).forwardRef)(({ icon: e, style: t, ...a }, s) =>
        (0, n.tZ)(i.zxk, { style: { padding: "10px", minWidth: "auto", ...t }, ...a, ref: s }, e)
      );
    },
    418554: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => n });
      const n = (0, a(598286).Z)("danger--cC3HaxWzdo");
    },
    57341: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => n });
      const n = (0, a(598286).Z)("dropdown--iWtEuBDYEQ", {
        spinnerClassName: "loading--dBMDQCX6Gp",
        labelClassName: "labelContainer--b_cSc7I5dz"
      });
    },
    598286: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => l });
      var n = a(696832),
        i = a(383849),
        s = a.n(i);
      const r = {
          button: "button--_XLjA7IRLA",
          medium: "medium--LN8Kzsy1VY",
          small: "small--WA4AGcltwv",
          large: "large--YW1bQ5WrSp",
          icon: "icon--PeruN80FKg",
          left: "left--K1Q7t4TFlo",
          right: "right--MYmmOrtxFU",
          labelContainer: "labelContainer--iprqay9OXd",
          iconContainer: "iconContainer--paseRa9HIY",
          iconPositionRow: "iconPositionRow--UX1bxYoFoO",
          iconPositionRowReverse: "iconPositionRowReverse--XhCqh_LEfT",
          iconHover: "iconHover--ms6slW_Xmd",
          loading: "loading--gIfCESEyK3",
          rotate: "rotate--KeCopIpGCf",
          fullWidth: "fullWidth--W3w_PxZk1_",
          buttonContents: "buttonContents--hxOvG0el9V",
          hiddenContent: "hiddenContent--lq5pdn9DNU"
        },
        o = ({
          marginSide: e = "none",
          size: t = "medium",
          mode: a = "light",
          iconButton: i,
          classNames: o = [],
          fullWidth: l = !1,
          darkClassName: c,
          type: d,
          iconClassName: u,
          closeDropdown: p,
          noCloseDropdown: m,
          icon: g,
          iconHover: h,
          iconPosition: x = "left",
          labelClassName: k,
          spinnerClassName: y,
          disabled: M,
          loading: b,
          buttonRef: f,
          onClick: I,
          style: N,
          title: D,
          label: T,
          ...A
        }) => {
          const E = s()(
              r.button,
              r[e],
              { [r.small]: "small" === t, [r.medium]: "medium" === t, [r.large]: "large" === t, [r.icon]: i, [r.fullWidth]: l },
              { ...(c ? { [c]: "dark" === a } : {}) },
              ...o
            ),
            v = d || "button",
            w = { "data-close-dropdown": p, "data-no-close-dropdown": m },
            C = n.createElement(
              "span",
              { className: s()(r.iconContainer, u), ...w },
              n.createElement("span", { className: r.icon, ...w }, g),
              n.createElement("span", { className: r.iconHover, ...w }, h || g)
            ),
            j = n.createElement(
              "span",
              { className: s()(r.labelContainer, k), ...w },
              b ? n.createElement("span", { className: s()(r.loading, y) }) : null,
              n.createElement(
                "span",
                { className: s()(r.buttonContents, { [r.hiddenContent]: b }), ...w },
                g ? n.createElement("div", { className: "left" === x ? r.iconPositionRow : r.iconPositionRowReverse, ...w }, C, T) : T
              )
            );
          return n.createElement(
            "button",
            {
              className: E,
              "data-close-dropdown": p,
              "data-no-close-dropdown": m,
              disabled: b || M,
              onClick: I,
              ref: f,
              style: N,
              type: v,
              title: D,
              ...A
            },
            j
          );
        },
        l = (e, t = {}) => {
          const a = n.forwardRef((a, i) =>
            n.createElement(o, {
              buttonRef: i,
              ...t,
              ...a,
              classNames: [e, ...(t.classNames || []), ...(a.classNames || [])],
              spinnerClassName: s()(t.spinnerClassName, a.spinnerClassName)
            })
          );
          return (a.displayName = "InnerButton"), a;
        };
    },
    599203: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => n });
      const n = (0, a(598286).Z)("primary--dgvSPzNWR1", { spinnerClassName: "loading--p7UdBJFjuM", darkClassName: "dark--MYQTuAPqNX" });
    },
    196266: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => n });
      const n = (0, a(598286).Z)("secondary--QKoCQIWgjh", { spinnerClassName: "loading--AqDmlLsTcF", darkClassName: "dark--Q_dqhf2eqQ" });
    },
    784099: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => n });
      const n = (0, a(598286).Z)("transparent--zszv36M0j_");
    },
    40010: (e, t, a) => {
      "use strict";
      a.d(t, { X: () => l });
      var n = a(876307),
        i = a(696832),
        s = a(692077),
        r = a(488203);
      const o = "_common_form_unsaved_changes_description",
        l = ({ dirty: e, onLeavePage: t, onKeepEditing: a, onUnsavedChangesCaught: l, titleText: c, bodyText: d }) => {
          const { translate: u } = (0, r.Z)(),
            [p, m] = (0, i.useState)(!1),
            [g, h] = (0, i.useState)(null),
            [x, k] = (0, i.useState)(!1);
          (0, i.useEffect)(() => {
            const t = (t) => {
              t.preventDefault(), e && (t.returnValue = u(o));
            };
            return (
              window.addEventListener("beforeunload", t),
              () => {
                window.removeEventListener("beforeunload", t);
              }
            );
          }, [e]);
          return x && g
            ? (0, n.tZ)(s.l_, { to: g.pathname })
            : (0, n.tZ)(
                i.Fragment,
                null,
                (0, n.tZ)(s.NL, { when: e, message: (e) => (l?.(), h(e), m(!0), !1) }),
                (0, n.tZ)(
                  n.Vq,
                  {
                    title: null != c ? c : u("_common_form_unsaved_changes_title"),
                    closeActionLabel: u("_common_dialog_dismiss_button"),
                    disableScrolling: !1,
                    isOpen: p,
                    onClose: () => {
                      m(!1), a?.();
                    },
                    isDestructive: !0,
                    actions: {
                      primary: {
                        children: u("_common_form_unsaved_changes_discard"),
                        onClick: () => {
                          t?.(), m(!1), k(!0);
                        }
                      },
                      secondary: { children: u("_common_form_unsaved_changes_keep_editing"), onClick: () => m(!1) }
                    }
                  },
                  (0, n.tZ)(n.nv, null, null != d ? d : u(o))
                )
              );
        };
    },
    928136: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => l });
      var n = a(696832);
      const i = { label: "label--fuJgpkiXc6", checkbox: "checkbox--UKLKG4X4kv", checkboxContainer: "checkboxContainer--LNaB3vqMab" };
      var s,
        r = a(383849),
        o = a.n(r);
      class l extends n.Component {
        constructor(...e) {
          super(...e), (this.el = n.createRef()), (this.isChecked = () => Boolean(this.el.current?.checked));
        }
        render() {
          return n.createElement(
            "label",
            { className: i.label, style: this.props.style },
            n.createElement(
              "div",
              { className: i.checkboxContainer },
              n.createElement("input", {
                key: "checkbox",
                "aria-label": this.props.ariaLabel,
                defaultChecked: this.props.defaultChecked,
                checked: this.props.checked,
                disabled: this.props.disabled,
                className: i.checkbox,
                name: this.props.name,
                onChange: () => {
                  this.props.onCheck && this.props.onCheck(this.isChecked());
                },
                ref: this.el,
                type: "checkbox"
              }),
              s || (s = n.createElement("span", null))
            ),
            n.createElement("span", { className: o()(i.text, this.props.labelClass) }, this.props.label)
          );
        }
      }
    },
    833090: (e, t, a) => {
      "use strict";
      a.d(t, { q: () => l });
      var n = a(696832),
        i = a(773817),
        s = a(962899),
        r = a(488203),
        o = a(876307);
      const l = ({ copyValue: e, buttonText: t, disabled: a, iconProps: l, ...c }) => {
        const { translate: d } = (0, r.Z)(),
          [u, p] = (0, n.useState)(!1),
          m = a || !e,
          g = m || Boolean(t && !u);
        return (0, i.tZ)(
          s.ua7,
          { content: d(u ? "input_copied_button_feedback" : "input_copy_button"), placement: "bottom", passThrough: g },
          (0, i.tZ)(
            o.zx,
            {
              icon: (0, i.tZ)(o.JO, { name: "ActionCopyOutlined", size: "small", ...l }),
              layout: "iconLeading",
              mood: "brand",
              size: "medium",
              onClick: async () => {
                await navigator.clipboard.writeText(e), p(!0);
              },
              disabled: m,
              ...c,
              onMouseLeave: () => p(!1)
            },
            t
          )
        );
      };
    },
    285473: (e, t, a) => {
      "use strict";
      a.d(t, { Q: () => c, o: () => l });
      var n,
        i,
        s = a(696832),
        r = a(876307),
        o = a(626555);
      let l = (function (e) {
        return (e.XSMALL = "xsmall"), (e.SMALL = "small"), (e.MEDIUM = "medium"), (e.LARGE = "large"), e;
      })({});
      const c = (0, s.memo)(
        ({
          title: e = "",
          login: t = "",
          email: a = "",
          size: c = l.SMALL,
          domain: d,
          shared: u = !1,
          showTitleIcons: p = !0,
          autoProtected: m = !1,
          fullWidth: g = !1,
          children: h = null,
          nativeIcon: x,
          tag: k,
          sxProps: y = {}
        }) => {
          const M = c === l.SMALL,
            b = c === l.SMALL ? t || a : null;
          return (0, r.tZ)(
            "div",
            {
              "data-testid": "credential-info-container",
              title: e,
              sx: (0, r.jM)([y, { display: "flex", alignItems: "center" }, g ? { width: "100%" } : {}])
            },
            (0, r.tZ)(
              "div",
              { role: "img", "aria-hidden": !0, "data-testsize": c, "data-testid": "credential-info-thumbnail" },
              (0, r.tZ)(o.h, { size: c, title: e, domain: d, nativeIcon: x })
            ),
            (0, r.tZ)(
              "span",
              {
                "data-testid": "credential-info-content",
                sx: (0, r.jM)([
                  {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    marginLeft: "16px",
                    minWidth: 0,
                    width: "100%"
                  },
                  g ? { width: "100%" } : {}
                ])
              },
              (0, r.tZ)(
                "span",
                { sx: { display: "flex", alignItems: "center" } },
                (0, r.tZ)(
                  r.nv,
                  {
                    textStyle: "ds.body.standard.regular",
                    color: "ds.text.neutral.catchy",
                    sx: { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }
                  },
                  e
                ),
                k ? (0, r.tZ)("span", { sx: { mr: "5px", ml: "8px" } }, k) : null,
                M && p
                  ? (0, r.tZ)(
                      s.Fragment,
                      null,
                      u
                        ? (0, r.tZ)(
                            "span",
                            {
                              role: "img",
                              "aria-hidden": !0,
                              "data-testid": "credential-info-sharing-status-icon",
                              sx: { marginLeft: "5px" }
                            },
                            n || (n = (0, r.tZ)(r.JO, { name: "SharedOutlined", size: "xsmall", color: "ds.text.neutral.quiet" }))
                          )
                        : null,
                      m
                        ? (0, r.tZ)(
                            "span",
                            {
                              role: "img",
                              "aria-hidden": !0,
                              "data-testid": "credential-info-autoprotect-status-icon",
                              sx: { marginLeft: "5px" }
                            },
                            i || (i = (0, r.tZ)(r.JO, { name: "LockOutlined", size: "xsmall", color: "ds.text.neutral.quiet" }))
                          )
                        : null
                    )
                  : null
              ),
              b
                ? (0, r.tZ)(
                    r.nv,
                    {
                      "data-testid": "credential-info-login-text",
                      color: "ds.text.neutral.quiet",
                      textStyle: "ds.body.reduced.regular",
                      sx: { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }
                    },
                    b
                  )
                : null,
              h
            )
          );
        }
      );
    },
    626555: (e, t, a) => {
      "use strict";
      a.d(t, { h: () => c });
      var n = a(876307),
        i = a(962899),
        s = a(696832),
        r = a(915206),
        o = a(285473),
        l = a(709421);
      const c = ({ size: e = o.o.SMALL, title: t, domain: a = "", nativeIcon: c }) => {
        const { icon: d } = (0, r.z)(a),
          u = (function (e) {
            switch (e) {
              case o.o.XSMALL:
              case o.o.SMALL:
                return ["46x30@2x", "118x98@2x"];
              case o.o.MEDIUM:
                return ["118x98@2x", "46x30@2x"];
              case o.o.LARGE:
                return ["160x106@2x", "118x98@2x"];
            }
          })(e).find((e) => {
            var t;
            return e in (null != (t = d?.urls) ? t : {});
          }),
          p = u ? d?.urls[u] : void 0,
          m = (0, s.useMemo)(() => (0, l.d)({ backgroundColor: d?.backgroundColor, mainColor: d?.mainColor, iconSource: p }), [d]);
        return (0, n.tZ)(i.plG, {
          size: e,
          text: t,
          iconSource: p,
          icon: c,
          iconColor: n.O9.lightTheme.ds.text.brand.standard,
          backgroundColor: m
        });
      };
    },
    709421: (e, t, a) => {
      "use strict";
      a.d(t, { d: () => m });
      var n = a(969821),
        i = a.n(n),
        s = a(962899);
      let r = (function (e) {
        return (e.THUMBNAIL = "thumbnail"), (e.HEADER = "header"), e;
      })({});
      const o = s.colors.dashGreen00,
        l = 1.3,
        c = i()("white"),
        d = /^#([0-9A-F]{3}){1,2}$/i;
      function u(e) {
        const t = e && (e.includes("#") ? e : `#${e}`);
        return t && d.test(t) ? t : "";
      }
      function p(e) {
        if (!e) return e;
        try {
          return i()(e).contrast(c) <= l ? "" : e;
        } catch {
          return "";
        }
      }
      function m({ backgroundColor: e, mainColor: t, iconSource: a, variant: n = r.THUMBNAIL }) {
        const i = u(t),
          s = u(e);
        return a ? (n === r.HEADER ? (p(s) ? s : p(i) ? i : o) : s || i || o) : p(i) ? i : p(s) ? s : o;
      }
    },
    904967: (e, t, a) => {
      "use strict";
      a.d(t, { r: () => r }), a(696832);
      var n = a(876307);
      const i = {
          detailedItem: "detailedItem--VrAL9EH7Hn",
          disabled: "disabled--a4qrjvBVBw",
          detailedItemDetails: "detailedItemDetails--i5PNBeuQLo",
          detailedItemLogo: "detailedItemLogo--ALuaxlbAyO",
          detailedItemInfoAction: "detailedItemInfoAction--I7HroQdXSZ",
          itemDetails: "itemDetails--SxVjLx93Lt",
          itemTitle: "itemTitle--EOQINp9cfO",
          itemTitleLogo: "itemTitleLogo--MUbQl3Ih4d"
        },
        s = a(383849),
        r = (e) => {
          const { title: t, text: a, logo: r, infoAction: o, titleLogo: l, disabled: c, permissionBadge: d } = e,
            u = s(i.detailedItem, { [i.disabled]: c });
          return (0, n.tZ)(
            "div",
            { className: u },
            (0, n.tZ)(
              "div",
              { className: i.detailedItemDetails },
              (0, n.tZ)("div", { className: i.detailedItemLogo }, r),
              (0, n.tZ)(
                "div",
                { className: i.itemDetails },
                (0, n.tZ)(
                  "div",
                  { className: i.itemTitle },
                  (0, n.tZ)(
                    "div",
                    {
                      className: i.itemTitleText,
                      sx: {
                        color: "ds.text.neutral.catchy",
                        variant: "text.ds.body.standard.regular",
                        lineHeight: "20px",
                        flexShrink: 1e4,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      }
                    },
                    t
                  ),
                  l && (0, n.tZ)("div", { className: i.itemTitleLogo }, l)
                ),
                a &&
                  (0, n.tZ)(
                    "div",
                    { sx: { color: "ds.text.neutral.quiet", variant: "text.ds.body.helper.regular", lineHeight: "16px" } },
                    a
                  ),
                d || null
              )
            ),
            o && (0, n.tZ)("div", { className: i.detailedItemInfoAction }, o)
          );
        };
    },
    901286: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => r });
      var n = a(773817),
        i = a(962899),
        s = a(488203);
      const r = ({
        onChange: e,
        defaultValue: t,
        isMasterPasswordInvalid: a,
        onKeyDown: r,
        onDismiss: o,
        onConfirm: l,
        labelDismiss: c,
        labelConfirm: d,
        title: u,
        ctaIsDisabled: p,
        isOpen: m,
        children: g
      }) => {
        const { translate: h } = (0, s.Z)();
        return (0, n.tZ)(
          i.VqE,
          { closeIconName: h("_common_dialog_dismiss_button"), isOpen: m, onClose: o, disableUserInputTrap: !0 },
          (0, n.tZ)(i.$N8, null, (0, n.tZ)(i.X6q, { size: "small", sx: { marginBottom: "16px" } }, u)),
          (0, n.tZ)(
            i.a7O,
            null,
            (0, n.tZ)("div", { className: "textWrapper--VTPPCeBn51" }, g),
            (0, n.tZ)(i.WUg, {
              defaultValue: t,
              onChange: e,
              feedbackText: a ? h("team_settings_confirmation_dialog_error_message") : "",
              label: h("webapp_lock_items_security_settings_title"),
              feedbackType: a ? "error" : void 0,
              hidePasswordTooltipText: h("team_settings_confirmation_dialog_password_field_hide_label"),
              showPasswordTooltipText: h("team_settings_confirmation_dialog_password_field_show_label"),
              onKeyDown: r,
              placeholder: h("team_settings_confirmation_dialog_password_field_hint_text")
            })
          ),
          (0, n.tZ)(i.cNS, {
            primaryButtonTitle: d,
            primaryButtonOnClick: l,
            primaryButtonProps: { disabled: p },
            secondaryButtonTitle: c,
            secondaryButtonOnClick: o,
            intent: "primary"
          })
        );
      };
    },
    107427: (e, t, a) => {
      "use strict";
      a.d(t, { $: () => s });
      var n = a(773817),
        i = a(962899);
      const s = ({ children: e }) =>
        (0, n.tZ)(i.X6q, { id: "dialogTitle", size: "small", sx: { paddingRight: "24px", marginBottom: "16px" } }, e);
    },
    717676: (e, t, a) => {
      "use strict";
      a.d(t, { o: () => d });
      var n = a(383849),
        i = a.n(n),
        s = a(773817),
        r = a(962899),
        o = a(837527),
        l = a(488203),
        c = a(107427);
      const d = (e) => {
        const t = i()(e.className, { [o.Ht]: e.disableBackgroundPanelClose }),
          { translate: a } = (0, l.Z)();
        return (0, s.tZ)(
          r.VqE,
          {
            modalContentClassName: t,
            disableScrolling: !1,
            closeIconName: e.showCloseIcon ? a("_common_dialog_dismiss_button") : void 0,
            isOpen: e.isOpen,
            onClose: e.onRequestClose,
            disableOutsideClickClose: e.disableOutsideClickClose
          },
          "string" == typeof e.title ? (0, s.tZ)(c.$, null, e.title) : null,
          e.title && "string" != typeof e.title ? e.title : null,
          e.children ? (e.replaceDialogBody ? e.children : (0, s.tZ)(r.a7O, null, e.children)) : null,
          e.footer
        );
      };
    },
    454661: (e, t, a) => {
      "use strict";
      a.d(t, { o: () => c });
      var n,
        i = a(773817),
        s = a(962899),
        r = a(876307),
        o = a(488203),
        l = a(354760);
      const c = ({ downloadString: e, fileName: t, fileType: a, buttonText: c, type: d = "button", disabled: u, ...p }) => {
        const { translate: m } = (0, o.Z)(),
          g = u || Boolean(c);
        return (0, i.tZ)(
          s.ua7,
          { content: m("team_settings_encryption_service_config_download_button"), placement: "bottom", passThrough: g },
          (0, i.tZ)(
            r.zx,
            {
              type: d,
              mood: "neutral",
              intensity: "quiet",
              layout: "iconLeading",
              onClick: () => {
                (0, l.S)(e, t, a);
              },
              icon: n || (n = (0, i.tZ)(r.JO, { name: "DownloadOutlined", size: "small" })),
              size: "medium",
              disabled: u,
              ...p
            },
            c
          )
        );
      };
    },
    925918: (e, t, a) => {
      "use strict";
      a.d(t, { Lt: () => h, oA: () => g, ir: () => m });
      var n = a(696832),
        i = a(383849),
        s = a.n(i),
        r = a(139632),
        o = a(876307);
      const l = {
          dropdown: "dropdown--ETohnczJvg",
          backdrop: "backdrop--F6VHwx3DRP",
          dropdownWrapper: "dropdownWrapper--ebPxZKN7WL",
          dropdownContent: "dropdownContent--ek3yMRuYDN",
          enter: "enter--_bv35Q4xJR",
          enterActive: "enterActive--qCUHGy7_Y0",
          exit: "exit--tt4x2NVOMF",
          exitActive: "exitActive--UW1o1MBXJF",
          bottom: "bottom--bgg2fV8Ag5",
          top: "top--mZ5GUS8iwP",
          right: "right--lakc330lnY",
          left: "left--DXlkERbC98",
          start: "start--ZBfX4emqTm",
          end: "end--XgHcgFuIMY",
          middle: "middle--I3iAWS7f7W",
          arrow: "arrow--jDtZIW1Glw"
        },
        c = {
          enter: "enter--tbczuX_7pm",
          enterActive: "enterActive--cdRS3LPspZ",
          exit: "exit--iJ6B5r5eO0",
          exitActive: "exitActive--UuUOHi54l1"
        };
      var d = a(851285);
      const u = (e, t, a = []) => {
          const n = t?.parentElement;
          return n && n !== e ? u(e, n, a.concat([n])) : a;
        },
        p = (e) => e.charAt(0).toLowerCase() + e.slice(1);
      let m = (function (e) {
          return (e[(e.Top = 0)] = "Top"), (e[(e.Bottom = 1)] = "Bottom"), (e[(e.Right = 2)] = "Right"), (e[(e.Left = 3)] = "Left"), e;
        })({}),
        g = (function (e) {
          return (e[(e.Start = 0)] = "Start"), (e[(e.Middle = 1)] = "Middle"), (e[(e.End = 2)] = "End"), e;
        })({});
      const h = ({ children: e, renderRoot: t, position: a, alignment: i, withBackdrop: h, onToggle: x, anchor: k }) => {
        const y = (0, n.createRef)(),
          [M, b] = (0, n.useState)(!1),
          f = () => {
            x?.(!1), b(!1);
          },
          I = (e) => {
            if (!M) return;
            if (!(e.target instanceof Element)) throw new Error(`invalid target: ${e.target}`);
            if (e.target.getAttribute("data-no-close-dropdown")) return;
            const t = y.current;
            !t || t.contains(e.target) || f();
            const a = ((e) => {
              const t = d.findDOMNode(e);
              if (!(t instanceof Element || null === t)) throw new Error(`invalid element: ${JSON.stringify(t)}`);
              return t;
            })(e.target);
            u(t, a, [a]).some((e) => e?.getAttribute("data-close-dropdown")) && f();
          };
        (0, n.useEffect)(
          () => (
            document.addEventListener("click", I),
            () => {
              document.removeEventListener("click", I);
            }
          )
        );
        const N = p(m[a]),
          D = p(g[i]),
          T = s()(l.dropdownWrapper, l[D], l[N]);
        return (0, o.tZ)(
          "div",
          {
            onKeyDown: (e) => {
              "Escape" === e.key && f();
            }
          },
          (0, o.tZ)(
            r.Z,
            { key: "CSSTransition", classNames: { ...c }, timeout: 150, in: h && M, unmountOnExit: !0 },
            (0, o.tZ)("div", { className: l.backdrop })
          ),
          (0, o.tZ)(
            "div",
            { key: "dropdown", className: l.dropdown, ref: y },
            t(() => {
              x?.(!M), b(!M);
            }),
            k,
            (0, o.tZ)(
              r.Z,
              { classNames: { ...l }, timeout: 150, in: M, unmountOnExit: !0 },
              (0, o.tZ)(
                "div",
                { className: T },
                (0, o.tZ)("div", { className: l.dropdownContent }, (0, o.tZ)("div", { className: l.arrow }), e)
              )
            )
          )
        );
      };
    },
    321143: (e, t, a) => {
      "use strict";
      a.d(t, { c: () => i });
      var n = a(773817);
      const i = ({ width: e = 0, height: t = 0 }) => (0, n.tZ)("div", { sx: { width: e, height: t } });
    },
    824107: (e, t, a) => {
      "use strict";
      a.d(t, { X: () => h });
      var n = a(696832),
        i = a(383849),
        s = a.n(i),
        r = a(876307),
        o = a(89368),
        l = a(365580);
      var c = a(418402),
        d = a.n(c),
        u = (function (e) {
          return (e[(e.Pristine = 0)] = "Pristine"), (e[(e.Edit = 1)] = "Edit"), (e[(e.Request = 2)] = "Request"), e;
        })(u || {}),
        p = (function (e) {
          return (e[(e.Default = 0)] = "Default"), (e[(e.Error = 1)] = "Error"), (e[(e.Success = 2)] = "Success"), e;
        })(p || {});
      const m = (e, t) => {
          switch (t.type) {
            case "reset":
              return { hintState: p.Default, fieldState: u.Pristine, hintText: "" };
            case "request":
              return { ...e, fieldState: u.Request };
            case "edit":
              return { ...e, fieldState: u.Edit };
            case "success":
              return { ...e, hintState: p.Success, fieldState: u.Pristine, hintText: t.data };
            case "error":
              return { ...e, hintState: p.Error, fieldState: u.Edit, hintText: t.data };
            default:
              return e;
          }
        },
        g = (e, t, a) => {
          switch (e) {
            case u.Request:
            case u.Edit:
              return { layout: "labelOnly", icon: void 0 };
            case u.Pristine:
            default:
              return { layout: null != t ? t : "labelOnly", icon: a };
          }
        },
        h = ({
          defaultValue: e,
          saveBtnLabel: t,
          savingBtnLabel: a,
          editBtnLabel: i,
          isDisabled: c,
          placeholder: h,
          successMessage: x,
          onSave: k,
          onFocus: y,
          onBlur: M,
          multiLine: b,
          inputStyle: f,
          hintStyle: I,
          textFieldClassName: N,
          inputFieldClassName: D,
          buttonClassName: T,
          ariaLabelledBy: A,
          layout: E,
          icon: v
        }) => {
          const [w, C] = (0, n.useState)(e),
            [j, S] = (0, n.useReducer)(m, { fieldState: u.Pristine, hintState: p.Default, hintText: "" }),
            { fieldState: L, hintText: _, hintState: z } = j;
          (0, n.useEffect)(() => {
            C(e);
          }, [e]);
          const O = (0, n.useRef)(null),
            Z = (0, n.useRef)(null),
            P = c || L === u.Request || void 0 === e,
            B = async (t) => {
              if ((t && (t.preventDefault(), t.stopPropagation()), M && M(), w !== e))
                try {
                  S({ type: "request" }), await k(w), S({ type: "success", data: x }), setTimeout(() => S({ type: "reset" }), 500);
                } catch (e) {
                  S({ type: "error", data: e.message }), O.current && O.current.focus();
                }
              else S({ type: "reset" });
            };
          return (0, r.tZ)(
            "form",
            { ref: Z, onSubmit: B, className: "container--kjjwN4PrWn" },
            (0, r.tZ)(
              "div",
              { className: N || "textFieldColumn--fs40lEiSv3" },
              (0, r.tZ)(o.n, {
                "aria-labelledby": A,
                multiLine: b,
                isDisabled: P,
                placeholder: h,
                hintStyle: { ...I, ...(z === p.Default ? { color: d()["--grey-02"] } : {}) },
                hintText: z === p.Default ? _ : null,
                successText: z === p.Success ? _ : null,
                errorText: z === p.Error ? _ : null,
                onBlur: B,
                onFocus: () => {
                  S({ type: "edit" }), y && y();
                },
                onKeyDown: (t) => {
                  "Escape" === t.key && (C(e), setTimeout(() => O.current?.blur(), 0));
                },
                onChange: (e) => {
                  C(e.currentTarget.value);
                },
                ref: O,
                inputStyle: { ...f },
                inputClassName: s()("inputField--OZ1_0ObvrX", D),
                value: w
              })
            ),
            (0, r.tZ)(
              "div",
              { className: T },
              (0, r.tZ)(
                r.zx,
                {
                  mood: "neutral",
                  intensity: "quiet",
                  layout: g(L, E, v).layout,
                  icon: g(L, E, v).icon,
                  disabled: P,
                  onClick: () => O.current && O.current.focus()
                },
                (() => {
                  switch (L) {
                    case u.Request:
                      return a;
                    case u.Edit:
                      return t;
                    case u.Pristine:
                      return i;
                    default:
                      return (0, l.U)(L);
                  }
                })()
              )
            )
          );
        };
    },
    891032: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => c });
      var n = a(696832),
        i = a(314922),
        s = a(383849),
        r = a.n(s),
        o = a(418402);
      const l = { outline: "2px solid " + a.n(o)()["--mid-green-00"] };
      class c extends n.Component {
        constructor(...e) {
          super(...e),
            (this.handle = (e) => {
              Promise.all(
                e.map((e) => {
                  return (
                    (t = e),
                    new Promise((e, a) => {
                      const n = new FileReader();
                      (n.onerror = a),
                        (n.onload = () => {
                          n.result ? e(n.result) : a();
                        }),
                        n.readAsText(t);
                    })
                  );
                  var t;
                })
              )
                .then((e) => this.props.onChange(e))
                .catch(this.props.onError);
            });
        }
        render() {
          return n.createElement(
            i.ZP,
            { accept: this.props.accept.join(","), onDrop: this.handle, noClick: this.props.passClicksThrough },
            ({ getRootProps: e, getInputProps: t, isDragActive: a }) =>
              n.createElement(
                "div",
                { ...e({ style: a ? l : void 0 }), className: r()("dropZone--fYgl9MtvuK", this.props.className) },
                n.createElement("input", { ...t() }),
                this.props.children
              )
          );
        }
      }
    },
    786980: (e, t, a) => {
      "use strict";
      a.d(t, { $: () => s });
      var n = a(696832),
        i = a(488203);
      const s = () => {
        const { translate: e } = (0, i.Z)();
        return n.createElement(
          "footer",
          { className: "footer--HHTLUO3zmy" },
          n.createElement(
            "div",
            { className: "footerWrapper--YPDFGxxJA2" },
            n.createElement("p", { className: "copyright--SGUYmaypKv" }, e("footer_copyright")),
            n.createElement("p", { className: "description--sI6lcTdiPv" }, e("footer_description"))
          )
        );
      };
    },
    573630: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => r });
      var n = a(696832),
        i = a(383849),
        s = a.n(i);
      class r extends n.Component {
        constructor(e) {
          super(e),
            (this.containerRef = null),
            (this.setContainerRef = (e) => {
              this.containerRef = e;
            }),
            (this.state = { tooltipActive: !0 });
        }
        componentDidMount() {
          this.setState({ tooltipActive: this.isTooltipNeeded() });
        }
        componentDidUpdate(e, t) {
          const a = this.isTooltipNeeded();
          a !== t.tooltipActive && this.setState({ tooltipActive: a });
        }
        isTooltipNeeded() {
          return !!this.containerRef && this.containerRef.offsetWidth < this.containerRef.scrollWidth;
        }
        render() {
          let e;
          if (this.state.tooltipActive) {
            const { tooltipText: t = this.props.children } = this.props;
            "string" == typeof t && (e = t);
          }
          return n.createElement(
            "span",
            { ref: this.setContainerRef, title: e, className: s()("container--IEYO88Rp_q", this.props.className) },
            this.props.children
          );
        }
      }
    },
    324047: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => c }), a(696832);
      var n = a(962899),
        i = a(773817);
      const { midGreen00: s, dashGreen00: r, dashDarkerGreen00: o } = n.colors,
        l = { color: s, activeColor: o, hoverColor: r },
        c = ({ children: e, ...t }) => {
          const a = "_blank" === t.target ? { rel: "noopener noreferrer" } : {};
          return (0, i.tZ)(n.rUS, { sx: { textDecoration: "revert", fontWeight: 400 }, ...l, ...t, ...a }, e);
        };
    },
    567328: (e, t, a) => {
      "use strict";
      a.d(t, { h: () => i });
      var n = a(876307);
      const i = ({ height: e, width: t }) => {
        const a = n.O9.lightTheme.ds.container.agnostic.neutral.supershy,
          i = n.O9.lightTheme.ds.background.alternate;
        return (0, n.tZ)("div", {
          sx: {
            height: e,
            width: t,
            animation: "shimmer 0.8s linear infinite alternate",
            "@keyframes shimmer": { from: { backgroundColor: a, opacity: 0.5 }, to: { backgroundColor: i, opacity: 1 } }
          }
        });
      };
    },
    411538: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => c });
      var n = a(696832),
        i = a(72133),
        s = a(383849),
        r = a.n(s);
      const o = JSON.parse(
          '{"v":"5.5.9","fr":30,"ip":0,"op":26,"w":240,"h":240,"nm":"Loading Dark Theme","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"Null 4","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[120,122,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"load","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,151,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[250,250,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[88,88],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0,0.435294147566,0.576470588235,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0.5,-60.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[10]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"t":12.5,"s":[42]},{"t":25,"s":[10]}],"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.2],"y":[0]},"t":0,"s":[-19]},{"t":25,"s":[341]}],"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":106.197876042479,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"load 2","parent":1,"sr":1,"ks":{"o":{"a":0,"k":10,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,151,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[250,250,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[88,88],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0.5,-60.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":106.197876042479,"st":0,"bm":0}],"markers":[]}'
        ),
        l = JSON.parse(
          '{"v":"5.5.9","fr":30,"ip":0,"op":26,"w":240,"h":240,"nm":"Loading Light Theme","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"Null 4","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[120,122,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"load","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,151,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[250,250,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[88,88],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.054901964524,0.207843152214,0.239215701234,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0.5,-60.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[10]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"t":12.5,"s":[42]},{"t":25,"s":[10]}],"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.2],"y":[0]},"t":0,"s":[-19]},{"t":25,"s":[341]}],"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":106.197876042479,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"load 2","parent":1,"sr":1,"ks":{"o":{"a":0,"k":10,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,151,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[250,250,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[88,88],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.054901964524,0.207843152214,0.239215701234,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0.5,-60.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":106.197876042479,"st":0,"bm":0}],"markers":[]}'
        ),
        c = ({ size: e = 100, containerClassName: t, containerStyle: a = {}, mode: s = "light" }) =>
          n.createElement(
            "div",
            { className: r()("loadingContainer--kpDAOyZerZ", t), style: a },
            n.createElement(i.Z, {
              height: e,
              width: e,
              animationParams: { renderer: "svg", loop: !0, autoplay: !0, animationData: "dark" === s ? o : l }
            })
          );
    },
    303431: (e, t, a) => {
      "use strict";
      a.d(t, { J: () => d });
      var n = a(773817),
        i = a(696832),
        s = a(383849),
        r = a.n(s);
      a(21869);
      const o = ["Tab", " ", ";", ","],
        l = (0, i.forwardRef)((e, t) => {
          const a = (0, i.useRef)(null),
            s = (0, i.useCallback)(
              () =>
                new Promise((e) => {
                  setImmediate(() => {
                    var t;
                    const n = null != (t = a?.current?.innerText?.trim()) ? t : "";
                    e(n);
                  });
                }),
              []
            );
          return (
            (0, i.useEffect)(() => {
              const t = a?.current;
              if (!t) return;
              const n = (a) => {
                let n;
                a.clipboardData?.getData &&
                  ((n = a.clipboardData.getData("text/plain")), (t.innerText = n), e.onChange(n), a.preventDefault()),
                  setImmediate(() => {
                    s().then(e.onSubmit);
                  });
              };
              return (
                t.addEventListener("paste", n),
                () => {
                  t.removeEventListener("paste", n);
                }
              );
            }, [s, e, e.onSubmit]),
            (0, i.useImperativeHandle)(t, () => ({
              focus() {
                a?.current?.focus();
              },
              getOffsetTop() {
                var e;
                return null != (e = a?.current?.offsetTop) ? e : 0;
              },
              getOffsetLeft() {
                var e;
                return null != (e = a?.current?.offsetLeft) ? e : 0;
              }
            })),
            (0, n.tZ)("span", {
              placeholder: e.placeholder,
              ref: a,
              className: e.className,
              contentEditable: !0,
              onKeyDown: (t) => {
                o.includes(t.key) && a.current && (t.preventDefault(), e.onSubmit(a.current.innerText)), e.onKeyDown(t);
              },
              onKeyUp: () => {
                s().then(e.onChange);
              },
              onFocus: e.onFocus,
              onBlur: e.onBlur
            })
          );
        });
      var c;
      const d = (e) => {
        var t;
        const a = (0, i.useRef)(null),
          s = (0, i.useRef)(null),
          o = (0, i.useRef)(null),
          [d, u] = (0, i.useState)(!1),
          [p, m] = (0, i.useState)(0),
          [g, h] = (0, i.useState)(!1),
          [x, k] = (0, i.useState)(!1),
          [y, M] = (0, i.useState)("empty"),
          [b, f] = (0, i.useState)(null != (t = e.defaultValue) ? t : []),
          [I, N] = (0, i.useState)({ left: 0, top: 0 }),
          [D, T] = (0, i.useState)(""),
          A = () => 0 === D.length,
          E = () => g && !A(),
          v = () => {
            k(!0);
          },
          w = () => {
            k(!1);
          };
        (0, i.useEffect)(() => {
          const t = o.current;
          return (
            e.autoFocus && a.current && a.current.focus(),
            o.current && (o.current.addEventListener("mouseover", v), o.current.addEventListener("mouseout", w)),
            () => {
              t && (t.removeEventListener("mouseover", v), t.removeEventListener("mouseout", w));
            }
          );
        }, [e.autoFocus]);
        const C = (e) => {
            a.current && a.current.focus(), e && e.preventDefault();
          },
          j = () => {
            if (!a.current || !s.current) return;
            const e = {
              top: a.current.getOffsetTop() - s.current.scrollTop + 22,
              left: a.current.getOffsetLeft() - s.current.scrollLeft + 2
            };
            (e.top === I.top && e.left === I.left) || N(e);
          },
          S = (t) => {
            const a = b.filter((e) => e !== t);
            return e.onChange && e.onChange(a), j(), k(!1), f(a), { hovered: !1, selectedItems: a };
          },
          L = (t) => {
            if (!t) return e.onError(new Error("no_matching_proposal")), void u(!0);
            if (e.isItemValid && !e.isItemValid(t)) return e.onError(new Error("item_is_not_valid")), void u(!0);
            const n = b.concat([t]);
            e.onChange && e.onChange(n),
              m(0),
              h(!0),
              k(!1),
              M(new Date().getTime().toString()),
              T(""),
              f(n),
              a.current && a.current.focus();
          },
          _ = () => e.dataSource.filter((e) => !b.includes(e.text)),
          z = (e) => {
            _().some((t) => t.text === e) && L(e);
          },
          O = () => {
            const t = { icon: e.getCurrentSelectionAvatar(D), text: D.trim() };
            let a;
            try {
              a = new RegExp(D);
            } catch (e) {
              return [t];
            }
            return [t].concat(
              _()
                .filter((e) => -1 !== e.text.search(a))
                .slice(0, 4)
            );
          },
          Z = () => {
            const e = O()[p];
            return e ? e.text : "";
          };
        return (0, n.tZ)(
          "div",
          { style: { position: "relative" } },
          (0, n.tZ)(
            "div",
            { className: r()("mainContainer--e5wHkCTfCs", e.className, { "focus--oet3gFWFk4": g }), ref: s, onMouseDown: C },
            b.map((e) =>
              (0, n.tZ)(
                "div",
                { key: e, className: "selectedItem--BcRHNsiLTB itemLabel--PYc9hu1QB3" },
                (0, n.tZ)("div", { className: "selectedItemContainer--M6R8Bg1ljN" }, e),
                (0, n.tZ)(
                  "span",
                  {
                    className: "deselectIcon--TbA1vXaNXP",
                    onClick: (t) =>
                      ((e, t) => {
                        e.stopPropagation(), S(t);
                      })(t, e)
                  },
                  c ||
                    (c = (0, n.tZ)("img", {
                      src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgMTQgMTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTAuNSAxMy41TDEzLjUgMC41TTEzLjUgMTMuNUwwLjUgMC41IiBzdHJva2U9IiM3Qjc0NkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                    }))
                )
              )
            ),
            (0, n.tZ)(
              "div",
              { className: "inputContainer--iJu_aZQ88G itemLabel--PYc9hu1QB3" },
              (0, n.tZ)(l, {
                placeholder: b.length ? void 0 : e.placeholder,
                ref: a,
                key: y,
                className: r()({ "greyInputContainer--_ZUH23Qert": !A() }),
                onBlur: () => {
                  h(!1), m(0);
                },
                onChange: (e) => {
                  const t = Z();
                  e && e === t ? z(e) : (T(e), C(), j());
                },
                onFocus: () => {
                  d && e.onError(), u(!1), h(!0);
                },
                onKeyDown: (e) => {
                  if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                    e.preventDefault();
                    const t = "ArrowDown" === e.key ? 1 : -1,
                      a = O().length;
                    let n = (p + t) % a;
                    n < 0 && (n = a + n), m(n);
                  }
                  if ("Enter" !== e.key || (e.preventDefault(), !E()))
                    return "Backspace" !== e.key || D ? void 0 : (e.preventDefault(), void S(b[b.length - 1]));
                  L(Z());
                },
                onSubmit: z
              })
            )
          ),
          (0, n.tZ)(
            "div",
            { ref: o },
            E() &&
              (0, n.tZ)(
                "div",
                { key: "dropdown", className: "dropdown--Sp6ztTrHdp", style: I },
                O().map((e, t) =>
                  (0, n.tZ)(
                    "div",
                    {
                      key: e.text,
                      onMouseDown: (t) =>
                        ((e, t) => {
                          e.preventDefault(), L(t);
                        })(t, e.text),
                      className: r()("candidateItem--Jg1DUztd8g", { "highlightedItem--AmJdmmjKDi": t === p && !x })
                    },
                    e.icon,
                    e.text
                  )
                )
              )
          )
        );
      };
    },
    428746: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => c });
      var n = a(876307);
      var i, s, r, o;
      const l = { minWidth: "12px", height: "20px" },
        c = ({ currentPageIndex: e, isShort: t, itemsLength: a, itemsPerPage: c, onChange: d }) => {
          const u = () => String(65535 * Math.random()).replace(/\./, "");
          function p(t, a) {
            return [...Array((a || t) + 1).keys()]
              .slice(t)
              .map((t) =>
                t === e
                  ? (0, n.tZ)(
                      "li",
                      { key: u() },
                      (0, n.tZ)(n.zx, { mood: "neutral", intensity: "quiet", onClick: () => d(t) }, (0, n.tZ)("span", { sx: l }, t + 1))
                    )
                  : (0, n.tZ)(
                      "li",
                      { key: u() },
                      (0, n.tZ)(n.zx, { mood: "neutral", intensity: "supershy", onClick: () => d(t) }, (0, n.tZ)("span", { sx: l }, t + 1))
                    )
              );
          }
          const m = a ? Math.ceil(a / c) - 1 : 0;
          return (0, n.tZ)(
            "ul",
            { className: "container--biH1xFvLjC" },
            0 === e
              ? (0, n.tZ)(
                  "li",
                  { key: u() },
                  r ||
                    (r = (0, n.tZ)(n.zx, {
                      disabled: !0,
                      layout: "iconOnly",
                      icon: "CaretLeftOutlined",
                      mood: "neutral",
                      intensity: "supershy"
                    }))
                )
              : (0, n.tZ)(
                  "li",
                  { key: u() },
                  (0, n.tZ)(n.zx, {
                    layout: "iconOnly",
                    icon: "CaretLeftOutlined",
                    mood: "neutral",
                    intensity: "supershy",
                    onClick: () => d(e - 1)
                  })
                ),
            !t &&
              (function () {
                if (m < 7) return p(0, m);
                const t = 0 === e ? e + 1 : e === m ? e - 1 : e;
                return []
                  .concat(t > 2 ? p(0) : p(0, t + 1))
                  .concat([
                    (0, n.tZ)(
                      "li",
                      { key: u() },
                      i ||
                        (i = (0, n.tZ)(n.zx, { disabled: !0, mood: "neutral", intensity: "supershy" }, (0, n.tZ)("span", { sx: l }, "...")))
                    )
                  ])
                  .concat(t > 2 && t < m - 2 ? p(t - 1, t + 1) : [])
                  .concat(
                    t > 2 && t < m - 2
                      ? [
                          (0, n.tZ)(
                            "li",
                            { key: u() },
                            s ||
                              (s = (0, n.tZ)(
                                n.zx,
                                { disabled: !0, mood: "neutral", intensity: "supershy" },
                                (0, n.tZ)("span", { sx: l }, "...")
                              ))
                          )
                        ]
                      : []
                  )
                  .concat(t < m - 2 ? p(m) : p(t - 1, m));
              })(),
            e === m
              ? (0, n.tZ)(
                  "li",
                  { key: u() },
                  o ||
                    (o = (0, n.tZ)(n.zx, {
                      disabled: !0,
                      layout: "iconOnly",
                      icon: "CaretRightOutlined",
                      mood: "neutral",
                      intensity: "supershy"
                    }))
                )
              : (0, n.tZ)(
                  "li",
                  { key: u() },
                  (0, n.tZ)(n.zx, {
                    layout: "iconOnly",
                    icon: "CaretLeftOutlined",
                    mood: "neutral",
                    intensity: "supershy",
                    onClick: () => d(e + 1)
                  })
                )
          );
        };
    },
    509746: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => i });
      var n = a(696832);
      const i = ({ progress: e }) =>
        n.createElement(
          "div",
          { className: "container--ePD0o06EYo" },
          n.createElement("div", { className: "progress--KSf4rxSequ", style: { width: `${e}%` } }),
          n.createElement("span", { className: "text--OYnUAOp8ud" }, Math.floor(e), "%")
        );
    },
    319474: (e, t, a) => {
      "use strict";
      a.d(t, { E: () => r, S: () => o });
      var n = a(696832),
        i = a(383849),
        s = a.n(i);
      const r = ({ children: e, className: t, key: a, disabled: i, labelClassName: r, ...o }) =>
          n.createElement(
            "label",
            { key: a, className: s()({ "disabled--fwKkDf_oxD": i }, "radioWrapper--RcTuxALmeZ", t) },
            n.createElement(
              "span",
              { className: "circleContainer--knNgdXInmY" },
              n.createElement("input", { disabled: i, ...o, type: "radio" }),
              n.createElement("span", { className: "check--Ktv_gazaYv" })
            ),
            n.createElement("div", { className: s()("radioLabel--N8OAaJm1o1", r) }, e)
          ),
        o = (e) =>
          n.createElement(
            n.Fragment,
            { key: e.key },
            n.Children.map(e.children, (t) =>
              null !== t && t.type === r
                ? n.cloneElement(t, {
                    checked: e.value === t.props.value,
                    name: e.groupName,
                    onChange: e.onChange,
                    disabled: e.disabled || t.props.disabled
                  })
                : t
            )
          );
    },
    259284: (e, t, a) => {
      "use strict";
      a.d(t, { t: () => r, m: () => o });
      var n = a(696832),
        i = a(139378);
      const s = {
          container: "container--RPu5zMMG1m",
          disabled: "disabled--rWfem3bPHS",
          label: "label--utl8Zu7YVc",
          select: "select--axcOtNIrz8",
          firstLine: "firstLine--SnJAKriwV5",
          focus: "focus--gCePJQqNqi",
          success: "success--nb3sYpt1YH",
          secondLine: "secondLine--BOnhRnKzAQ",
          error: "error--Nerq7bqFMd",
          hint: "hint--VHQBrqQeO9"
        },
        r = (e) => {
          const t = (0, i.omit)(e, ["primaryText"]);
          return n.createElement("option", { className: s.option, ...t }, e.primaryText);
        };
      class o extends n.Component {
        constructor(e) {
          super(e), (this.state = { isFocused: !1 });
        }
        onChange(e) {
          this.props.onChange && this.props.onChange(e);
          const t = e.target;
          if (!t) return;
          const a = t.options[t.selectedIndex];
          a && this.props.onChangeExtended && this.props.onChangeExtended(e, t.selectedIndex, a.value);
        }
        onFocus(e) {
          this.props.onFocus && this.props.onFocus(e), this.setState({ isFocused: !0 });
        }
        onBlur(e) {
          this.props.onBlur && this.props.onBlur(e), this.setState({ isFocused: !1 });
        }
        render() {
          const e = (0, i.omit)(this.props, [
              "onChange",
              "onChangeExtended",
              "onFocus",
              "onBlur",
              "children",
              "errorStyle",
              "errorText",
              "floatingLabelStyle",
              "floatingLabelText",
              "hintStyle",
              "hintText",
              "style",
              "successText"
            ]),
            t = !!this.props.errorText,
            a = !!this.props.successText,
            r = [
              s.container,
              this.props.disabled ? s.disabled : "",
              this.state.isFocused ? s.focus : "",
              t ? s.error : "",
              a ? s.success : ""
            ].join(" "),
            o =
              this.props.floatingLabelText &&
              n.createElement("label", { className: s.label, style: this.props.floatingLabelStyle }, this.props.floatingLabelText),
            l =
              ((!this.props.value && this.props.hintText) || a || t) &&
              n.createElement(
                "span",
                { className: s.hint, style: this.props.hintStyle },
                this.props.errorText || this.props.successText || this.props.hintText
              );
          return n.createElement(
            "div",
            { className: r, style: this.props.style },
            o,
            n.createElement(
              "select",
              {
                className: s.select,
                onChange: this.onChange.bind(this),
                onFocus: this.onFocus.bind(this),
                onBlur: this.onBlur.bind(this),
                ...e
              },
              this.props.children
            ),
            n.createElement(
              "div",
              null,
              n.createElement("hr", { className: s.firstLine }),
              n.createElement("hr", { className: s.secondLine })
            ),
            l
          );
        }
      }
    },
    23914: (e, t, a) => {
      "use strict";
      a.d(t, { w: () => u });
      var n,
        i,
        s = a(696832),
        r = a(773817),
        o = a(962899);
      const l = "4px",
        c = "44px",
        d = {
          bg: "ds.container.expressive.brand.catchy.idle",
          borderColor: "ds.text.inverse.quiet",
          borderStyle: "solid",
          borderWidth: "1px",
          cursor: "pointer",
          display: "flex",
          fontFamily: "monospace",
          fontSize: 5,
          justifyContent: "center",
          lineHeight: "20px",
          width: c,
          p: "10px",
          "& path": { fill: "neutrals.0" },
          ":disabled": {
            bg: "ds.container.expressive.brand.catchy.disabled",
            borderColor: "ds.text.inverse.quiet",
            cursor: "not-allowed",
            "& path": { fill: "ds.text.oddity.disabled" }
          },
          ":hover:not(:disabled)": { bg: "ds.container.expressive.brand.catchy.hover" },
          ":active:not(:disabled)": { bg: "ds.container.expressive.brand.catchy.idle" }
        },
        u = ({ id: e, inputWidth: t = "100%", label: a, minValue: u, onChange: p, defaultValue: m }) => {
          const [g, h] = (0, s.useState)(m),
            x = (e) => {
              h(e), p(e);
            },
            k = g <= u;
          return (0, r.tZ)(
            o.T5p,
            {
              fullWidth: !0,
              alignItems: "center",
              gridTemplateColumns: `auto ${c} ${t} ${c}`,
              gridTemplateRows: "auto auto",
              gridTemplateAreas: "'label decrement textInput increment'"
            },
            (0, r.tZ)(o.dDn, { gridArea: "label", as: "label", id: `${e}-label` }, a),
            (0, r.tZ)(
              o.dDn,
              { gridArea: "decrement" },
              (0, r.tZ)(
                "button",
                {
                  "aria-hidden": "true",
                  type: "button",
                  sx: { ...d, borderRightWidth: "0", borderBottomLeftRadius: l, borderTopLeftRadius: l },
                  onClick: () => {
                    x(g - 1);
                  },
                  disabled: k
                },
                n || (n = (0, r.tZ)(o.b2Y, { size: 20 }))
              )
            ),
            (0, r.tZ)(o.oil, {
              id: e,
              "aria-labelledby": `${e}-label`,
              fullWidth: !0,
              autoFocus: !0,
              sx: {
                alignSelf: "end",
                gridArea: "textInput",
                height: "42px",
                textAlign: "right",
                px: "8px",
                borderRadius: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderColor: "ds.text.inverse.quiet",
                "&:hover, &:hover:not(:focus):not(:disabled), &:focus": { borderColor: "ds.text.inverse.quiet" },
                "-moz-appearance": "textfield",
                "&::-webkit-outer-spin-button,&::-webkit-inner-spin-button": { display: "none" }
              },
              value: g,
              min: u,
              onChange: (e) => {
                const t = parseInt(e.currentTarget.value, 10);
                x(t || u);
              },
              step: 1,
              type: "number"
            }),
            (0, r.tZ)(
              "button",
              {
                "aria-hidden": "true",
                type: "button",
                sx: { ...d, borderBottomRightRadius: l, borderLeftWidth: "0", borderTopRightRadius: l, gridArea: "increment" },
                onClick: () => {
                  x(g + 1);
                }
              },
              i || (i = (0, r.tZ)(o.dtP, { size: 20 }))
            )
          );
        };
    },
    966136: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => m });
      var n = a(696832),
        i = a(383849),
        s = a.n(i),
        r = a(962899),
        o = a(876307),
        l = a(488203),
        c = a(692077),
        d = a(418402),
        u = a.n(d);
      var p;
      const m = ({ logoComponent: e, tabs: t, includeLockup: a, lockupSize: i, classes: d, children: m }) => {
        const { translate: g } = (0, l.Z)(),
          h = (e) => {
            const t = {
              key: e.id,
              className: s()("tab--BSA51UsdVR", { "tabActive--lmnIRd2jkF": e.active }),
              children: (0, o.tZ)(
                n.Fragment,
                null,
                e.text,
                e.items ? (0, o.tZ)("span", { className: "tabArrow--GljByEwoQi" }) : null,
                e.hasNotification ? (0, o.tZ)("span", { className: "notification--W48M_uYlqN" }) : null
              ),
              onClick: (t) => {
                e.onClick && e.onClick(t);
              }
            };
            return e.url && !e.active ? (0, o.tZ)(c.rU, { ...t, to: e.url }) : (0, o.tZ)("span", { ...t });
          },
          x = a
            ? (0, o.tZ)(r.D1W, { color: r.vei.White, size: i || r.r1z.Size64, title: g("_common_dashlane_logo_title") })
            : (0, o.tZ)(r.TRl, { color: u()["--white"] }),
          k = null != e ? e : p || (p = (0, o.tZ)(c.rU, { to: "/", target: "self" }));
        return (0, o.tZ)(
          "header",
          { className: s()("standardHeader--cKERFddnV5", d?.standardHeader) },
          (0, o.tZ)(
            "div",
            { className: s()("logoContainer--q75XLKL74x", d?.logoContainer) },
            (0, o.tZ)(k.type, { className: d?.logo, ...k.props }, x)
          ),
          (0, o.tZ)(
            "div",
            { className: s()("tabs--vUGxlyRRtY", d?.tab) },
            (t || []).map((e) => {
              const t = h(e);
              return (0, o.tZ)(
                "div",
                { className: "tabContainer--UHDnFbVZrr", key: e.id },
                t,
                e.items ? (0, o.tZ)("div", { className: "subTabs--YzvYBznO_6" }, e.items.map(h)) : null
              );
            }),
            m
          )
        );
      };
    },
    723104: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => m });
      var n = a(962899),
        i = a(773817),
        s = a(876307),
        r = a(696832);
      var o, l, c;
      const { grey00: d, accessibleValidatorGreen: u, accessibleValidatorRed: p } = n.colors;
      class m extends r.Component {
        constructor(e) {
          super(e),
            (this.handleSwitchToggled = async () => {
              this.setState({ isSavingField: !0 });
              try {
                await this.props.saveValueFunction(this.props.value),
                  this.setState({ errorMessage: "", showSaveFieldFeedbackMessage: !0 }),
                  setTimeout(() => {
                    this.setState({ showSaveFieldFeedbackMessage: !1 });
                  }, 1e3);
              } catch (e) {
                const t = e instanceof Error ? e.message : this.props.genericErrorMessage;
                this.setState({ errorMessage: t, showSaveFieldFeedbackMessage: !1 });
              } finally {
                this.setState({ isSavingField: !1 });
              }
            }),
            (this.isDisabled = () => this.props.isDisabled || this.state.isSavingField),
            (this.FEEDBACK_MESSAGE_TYPE = {
              SAVING: { textColor: u, messageIcon: (0, i.tZ)(n.HoD, { color: u, size: 20, sx: { mr: "2px" } }) },
              SAVED: { textColor: u, messageIcon: o || (o = (0, i.tZ)(n.rE2, { size: 22, color: u })) },
              ERROR: { textColor: p, messageIcon: void 0 },
              DISABLED: { textColor: d, messageIcon: l || (l = (0, i.tZ)(n.uMt, { size: 20 })) }
            }),
            (this.getFeedbackMessage = () =>
              this.state.isSavingField
                ? { feedbackMessage: this.props.savingMessage, feedbackMessageType: this.FEEDBACK_MESSAGE_TYPE.SAVING }
                : this.state.showSaveFieldFeedbackMessage
                ? { feedbackMessage: this.props.successMessage, feedbackMessageType: this.FEEDBACK_MESSAGE_TYPE.SAVED }
                : this.props.isDisabled
                ? { feedbackMessage: this.props.disabledFeedbackMessage, feedbackMessageType: this.FEEDBACK_MESSAGE_TYPE.DISABLED }
                : { feedbackMessage: this.state.errorMessage, feedbackMessageType: this.FEEDBACK_MESSAGE_TYPE.ERROR }),
            (this.state = { isSavingField: !1, errorMessage: "", showSaveFieldFeedbackMessage: !1 });
        }
        render() {
          const { feedbackMessage: e, feedbackMessageType: t } = this.getFeedbackMessage(),
            a = this.isDisabled() ? { "aria-disabled": !0 } : {},
            r = this.props.value;
          return (0, i.tZ)(
            "div",
            { className: "switchContainer--sqJ43r9s5Q", ...a },
            this.props.isLoading && !this.state.isSavingField
              ? c || (c = (0, i.tZ)(n.HoD, { size: 25, color: "ds.border.brand.standard.idle" }))
              : (0, i.tZ)(s.ZD, {
                  "aria-labelledby": this.props.ariaLabelledBy,
                  checked: r,
                  onChange: this.handleSwitchToggled,
                  disabled: this.isDisabled(),
                  readOnly: this.props.isReadOnly
                }),
            e
              ? (0, i.tZ)(
                  n.Ejs,
                  {
                    alignItems: "center",
                    flexDirection: "row",
                    sx: { height: "22px" },
                    className: this.props.isDisabled ? "errorFeedbackContainer--Y4YTdlKg09" : void 0
                  },
                  t.messageIcon,
                  (0, i.tZ)(n.nvN, { size: "x-small", color: t.textColor, sx: { ml: "5px", flex: 1, lineHeight: 0 } }, e)
                )
              : null
          );
        }
      }
    },
    24653: (e, t, a) => {
      "use strict";
      a.d(t, { m: () => c }), a(696832);
      var n = a(876307);
      const i = {
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          cssFloat: "left",
          fontSize: "12px",
          fontWeight: 600,
          lineHeight: "14px",
          height: "100%",
          minHeight: "24px",
          textTransform: "uppercase",
          boxSizing: "border-box",
          whiteSpace: "nowrap",
          borderBottomWidth: "3px",
          borderBottomStyle: "solid",
          borderBottomColor: "transparent"
        },
        s = { color: "ds.text.neutral.standard", "&:hover": { borderBottomColor: "ds.border.neutral.standard.active" } },
        r = { color: "ds.text.brand.standard", borderBottomColor: "ds.border.brand.standard.active" },
        o = (e) => {
          const { active: t, label: a, onClick: o, tabIconElement: l } = e,
            c = (0, n.jM)([i, t ? r : s]);
          return (0, n.tZ)(
            "li",
            {
              onClick: o,
              sx: c,
              tabIndex: 0,
              onKeyPress: (e) => {
                if (["Enter", " "].includes(e.key)) return o();
              },
              role: "tab",
              "aria-selected": t
            },
            (0, n.tZ)("span", null, a),
            l
          );
        },
        l = { display: "flex", height: "100%", width: "100%", gap: "32px" },
        c = ({ tabs: e }) =>
          (0, n.tZ)(
            "nav",
            { role: "navigation" },
            (0, n.tZ)(
              "ul",
              { sx: l, "data-testid": "details_tabs" },
              e.map((e) => (0, n.tZ)(o, { ...e, tabIconElement: e.tabIconElement, key: e.label }))
            )
          );
    },
    164467: (e, t, a) => {
      "use strict";
      a.d(t, { L: () => u });
      var n = a(696832),
        i = a(383849),
        s = a.n(i);
      const r = (e) => {
        const { value: t, validate: a, handleEdit: i, handleRemove: r } = e,
          o = s()("tag--pUC_Lweu3w", { "invalid--kVM0YruuQt": !a(t) });
        return n.createElement(
          "span",
          {
            className: o,
            onClick: () => {
              i(t);
            }
          },
          n.createElement("span", { className: "tagContent--gTYphEaDdF" }, t),
          n.createElement("span", {
            className: "close--EByXC6I2ck",
            onClick: (e) => {
              e.stopPropagation(), r(t);
            }
          })
        );
      };
      a(21869);
      var o = a(773817);
      const l = a.p + "0578496791d7520e21f0.gif",
        c = new Set([",", ";", "Enter", " ", "Tab"]),
        d = new Set([8]),
        u = (e) => {
          const t = (0, n.useRef)(null),
            [a, i] = (0, n.useState)(!1),
            [u, p] = (0, n.useState)(""),
            m = (t) => e.setTags(e.tags.filter((e) => e !== t)),
            g = (t) => e.setTags([...e.tags, ...t]),
            h = (e) => m(e),
            x = () => {
              t?.current?.focus();
            },
            k = (e) => {
              p(e), m(e), x();
            },
            y = () => u,
            M = () => {
              "" !== y().trim() && (g([y().trim()]), p(""));
            },
            b = (t) => {
              const a = ((e) => c.has(e.key))(t),
                n = ((t) => d.has(t.keyCode) && e.tags.length > 0 && "" === y().trim())(t);
              (a || n) && (t.preventDefault(), t.stopPropagation()),
                a
                  ? M()
                  : n &&
                    (() => {
                      const t = [...e.tags].pop();
                      void 0 !== t && (p(t), m(t));
                    })();
            },
            f = s()(e.className || "tags--Nl6ni2GgmR", { "focus--Jv1qt0Ldkh": a }),
            I = e.tags.map((t) => (0, o.tZ)(r, { key: t, value: t, validate: e.validate, handleEdit: k, handleRemove: h }));
          return (0, o.tZ)(
            "div",
            { className: f, onClick: x },
            (0, o.tZ)(
              "div",
              { sx: { width: "100%", height: "100%", overflowY: "auto" } },
              I,
              (0, o.tZ)("input", {
                type: "text",
                ref: t,
                className: "input--LSkOobZnep",
                placeholder: e.placeholder,
                onKeyPress: b,
                onKeyDown: b,
                onChange: (t) => {
                  const a = t.target.value;
                  p(a), 0 === a.length && e.onFirstChange && e.onFirstChange();
                },
                value: u,
                onFocus: () => i(!0),
                onBlur: () => {
                  M(), i(!1);
                },
                autoFocus: !0,
                onPaste: () => {
                  e.setIsOverlayVisible(!0),
                    setImmediate(() => {
                      const t = e.formatToTags(y());
                      e.setIsOverlayVisible(!1), t.length && !t.some((t) => !e.validate(t)) && (g(t), p(""));
                    });
                }
              })
            ),
            (0, o.tZ)("span", {
              sx: {
                display: "block",
                width: "100%",
                height: "100%",
                position: "absolute",
                left: 0,
                top: 0,
                textAlign: "center",
                backgroundImage: `url("${l}")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundColor: "hsl(0, 0%, 100%)",
                visibility: e.isOverlayVisible ? "visible" : "hidden"
              }
            })
          );
        };
    },
    89368: (e, t, a) => {
      "use strict";
      a.d(t, { n: () => l });
      var n = a(696832),
        i = a(139378),
        s = a(383849),
        r = a.n(s);
      const o = {
        container: "container--yyZzcuykqz",
        label: "label--A2hll8UL96",
        field: "field--QMiQR_9iEB",
        error: "error--ZbgIOstGD2",
        hint: "hint--t19a7Q5_Iy",
        input: "input--NXicCK7MrA",
        textarea: "textarea--U0_hCXSKnl",
        inputWithIcon: "inputWithIcon--v9a9Brxw8i input--NXicCK7MrA",
        noWrap: "noWrap--Ya0I7SD_1h",
        fieldDecorator: "fieldDecorator--VIEEvuCLZe",
        fieldDecoratorError: "fieldDecoratorError--yhBUV2qTxr",
        fieldDecoratorDisabled: "fieldDecoratorDisabled--v8MMxfqJC3"
      };
      class l extends n.Component {
        constructor(e) {
          super(e),
            (this._field = void 0),
            (this.handleOnKeyDown = (e) => {
              this.props.onKeyDown && this.props.onKeyDown(e);
            }),
            (this.getValue = () => (this._field ? this._field.value : "")),
            (this.state = {
              value: e.defaultValue,
              rowHeight: this.calculateRowHeight(e.textareaStyle),
              rowCount: this.calculateRowCount(e.defaultValue)
            });
        }
        updateValue(e) {
          this.setState({ value: e }), this.props.multiLine && this.setState({ rowCount: this.calculateRowCount(e) });
        }
        handleFieldChange(e) {
          const { target: t } = e;
          this.props.onChange && this.props.onChange(e), this.updateValue(t.value);
        }
        handleFieldFocus(e) {
          this.props.isDisabled || (this.props.onFocus && this.props.onFocus(e));
        }
        handleFieldBlur(e) {
          this.props.onBlur && this.props.onBlur(e);
        }
        calculateRowCount(e) {
          return this.props.multiLine && e ? (e.match(/\n/g) || []).length + 3 : 4;
        }
        calculateRowHeight(e) {
          return e && "number" == typeof e.fontSize && "number" == typeof e.lineHeight ? e.lineHeight * e.fontSize : 16;
        }
        blur() {
          this._field && this._field.blur();
        }
        focus() {
          this._field && this._field.focus();
        }
        render() {
          const e = (0, i.omit)(this.props, [
              "children",
              "asideElement",
              "keepHintArea",
              "inputClassName",
              "containerClassName",
              "containerStyle",
              "defaultValue",
              "errorStyle",
              "errorText",
              "fieldContainerStyle",
              "hasHorizontalScroll",
              "hintStyle",
              "hintText",
              "inputStyle",
              "isDisabled",
              "multiLine",
              "labelStyle",
              "labelText",
              "placeholderIcon",
              "successText",
              "textareaStyle",
              "onBlur",
              "onChange",
              "onFocus"
            ]),
            t = { [o.error]: !!this.props.errorText, [o.noWrap]: this.props.hasHorizontalScroll, [o.success]: !!this.props.successText };
          this.props.containerClassName && (t[this.props.containerClassName] = !0);
          const a = r()(o.container, t),
            s = this.props.labelText
              ? n.createElement("div", { className: o.label, style: this.props.labelStyle }, this.props.labelText)
              : null,
            l = {
              [o.textarea]: this.props.multiLine,
              [o.input]: !this.props.multiLine,
              [o.inputWithIcon]: this.props.placeholderIcon,
              [o.error]: !!this.props.errorText
            };
          this.props.inputClassName && (l[this.props.inputClassName] = !0);
          const c = r()(o.field, l),
            d = {
              autoFocus: this.props.autoFocus,
              className: c,
              defaultValue: this.props.defaultValue,
              disabled: this.props.isDisabled,
              onBlur: this.handleFieldBlur.bind(this),
              onChange: this.handleFieldChange.bind(this),
              onFocus: this.handleFieldFocus.bind(this),
              onKeyDown: this.handleOnKeyDown.bind(this),
              ref: (e) => (this._field = e),
              ...e
            },
            u = r()(o.fieldDecorator, {
              [o.fieldDecoratorError]: !!this.props.errorText,
              [o.fieldDecoratorDisabled]: this.props.isDisabled
            }),
            p = {
              ...(this.props.inputStyle || {}),
              ...(this.props.placeholderIcon ? { backgroundImage: `url(${this.props.placeholderIcon})` } : {}),
              ...(this.props.multiLine ? { height: this.state.rowCount * this.state.rowHeight } : {})
            },
            m =
              this.props.keepHintArea || (!this.props.value && this.props.hintText) || this.props.successText || this.props.errorText
                ? n.createElement(
                    "div",
                    { className: o.hint, style: this.props.hintStyle },
                    this.props.errorText || this.props.successText || this.props.hintText
                  )
                : null;
          return n.createElement(
            "div",
            { className: a, style: this.props.containerStyle },
            s,
            n.createElement(
              "div",
              { className: u },
              this.props.multiLine ? n.createElement("textarea", { style: p, ...d }) : n.createElement("input", { style: p, ...d }),
              this.props.asideElement
            ),
            m
          );
        }
      }
    },
    347418: (e, t, a) => {
      "use strict";
      a.d(t, { h: () => r });
      var n = a(773817),
        i = a(962899),
        s = a(879869);
      const r = ({ replacementActions: e, iconButtonProps: t, textInputProps: a, passwordInputProps: r, tooltipProps: o }) =>
        (0, n.tZ)(
          i.T5p,
          { gap: "8px", gridAutoFlow: "column", gridTemplateColumns: "1fr", gridAutoColumns: "auto", fullWidth: !0 },
          r ? (0, n.tZ)(i.WUg, { ...r }) : (0, n.tZ)(i.oil, { ...a }),
          e || null,
          t
            ? (0, n.tZ)(
                "div",
                { sx: { alignSelf: a?.readOnly ? "flex-end" : "initial" } },
                (0, n.tZ)(i.ua7, { placement: "left", ...o }, (0, n.tZ)(s.h, { type: "button", nature: "secondary", size: "medium", ...t }))
              )
            : null
        );
    },
    165911: (e, t, a) => {
      "use strict";
      a.d(t, { x: () => c });
      var n,
        i = a(876307),
        s = a(962899),
        r = a(696832),
        o = a(488203);
      const l = "input_copy_button",
        c = (e) => {
          const { value: t, isLoading: a, ...c } = e,
            { translate: d } = (0, o.Z)(),
            [u, p] = (0, r.useState)(!1),
            m = (0, r.useCallback)(async () => {
              t && (await navigator.clipboard.writeText(`${t}`), p(!0));
            }, [t]),
            g = (0, r.useCallback)(() => {
              p(!1);
            }, []);
          return (0, i.tZ)(i.qo, {
            value: t,
            ...c,
            actions: [
              (0, i.tZ)(
                s.ua7,
                { key: "copy-button", placement: "left", content: d(u ? "input_copied_button_feedback" : l), passThrough: !t },
                (0, i.tZ)(i.zx, {
                  isLoading: a,
                  disabled: !t,
                  "aria-label": d(l),
                  mood: "neutral",
                  intensity: "supershy",
                  onClick: m,
                  onMouseLeave: g,
                  layout: "iconOnly",
                  icon: n || (n = (0, i.tZ)(s.TIy, null))
                })
              )
            ]
          });
        };
    },
    501234: (e, t, a) => {
      "use strict";
      a.d(t, { x: () => c });
      var n,
        i = a(773817),
        s = a(962899),
        r = a(488203),
        o = a(347418),
        l = a(696832);
      const c = ({ inputValue: e, textInputProps: t, tooltipProps: a, passwordInputProps: c, iconButtonProps: d }) => {
        const { translate: u } = (0, r.Z)(),
          [p, m] = (0, l.useState)(!1),
          g = c
            ? {
                ...c,
                value: e,
                hidePasswordTooltipText: u("_common_password_hide_label"),
                showPasswordTooltipText: u("_common_password_show_label")
              }
            : void 0;
        return (0, i.tZ)(o.h, {
          passwordInputProps: g,
          textInputProps: { ...t, value: e },
          iconButtonProps: {
            icon: n || (n = (0, i.tZ)(s.TIy, null)),
            onClick: async () => {
              await navigator.clipboard.writeText(e), m(!0);
            },
            onMouseLeave: () => {
              m(!1);
            },
            ...d
          },
          tooltipProps: { passThrough: d?.disabled, content: u(p ? "input_copied_button_feedback" : "input_copy_button"), ...a }
        });
      };
    },
    989572: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => s });
      var n = a(696832);
      const i = { groupIconWrapper: "groupIconWrapper--OSeY3Q_kAF" },
        s = () =>
          n.createElement(
            "div",
            { className: i.groupIconWrapper },
            n.createElement("img", {
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05Ljk0NDc1IDE1LjQ4OTJDMTAuMDMwNCAxNS4yMjgzIDEwLjE1NzQgMTQuOTMyNiAxMC4zNDQ3IDE0LjYzOTJDMTAuODQ4NiAxMy44NTAzIDExLjg1MjYgMTIuOTcxMiAxMy45OTc3IDEyLjk3MTJDMTYuMTQyOSAxMi45NzEyIDE3LjE0NjggMTMuODUwMiAxNy42NTA1IDE0LjYzOTJDMTcuODM3OCAxNC45MzI1IDE3Ljk2NDggMTUuMjI4MyAxOC4wNTA0IDE1LjQ4OTJIOS45NDQ3NVpNMTkuNzE1NiAxNi4yMTA1TDE5LjcxNTYgMTYuMjA5NUwxOS43MTU1IDE2LjIwNzJMMTkuNzE1MiAxNi4yMDE0TDE5LjcxNDIgMTYuMTg1M0MxOS43MTM0IDE2LjE3MjcgMTkuNzEyMyAxNi4xNTYzIDE5LjcxMDYgMTYuMTM2MkMxOS43MDczIDE2LjA5NjEgMTkuNzAxOSAxNi4wNDE1IDE5LjY5MzMgMTUuOTc0NEMxOS42NzYxIDE1Ljg0MDUgMTkuNjQ1OCAxNS42NTU0IDE5LjU5MjcgMTUuNDM2MUMxOS40ODcyIDE0Ljk5OTggMTkuMjg4IDE0LjQxMyAxOC45MTAxIDEzLjgyMTNDMTguMTI3NiAxMi41OTU4IDE2LjY0NjcgMTEuNDYwNCAxMy45OTc3IDExLjQ2MDRDMTEuMzQ4NyAxMS40NjA0IDkuODY3NzUgMTIuNTk1OCA5LjA4NTE2IDEzLjgyMTJDOC43MDcyOSAxNC40MTI5IDguNTA3OTkgMTQuOTk5OCA4LjQwMjQzIDE1LjQzNkM4LjM0OTM2IDE1LjY1NTQgOC4zMTkwNyAxNS44NDA0IDguMzAxODQgMTUuOTc0M0M4LjI5MzIyIDE2LjA0MTQgOC4yODc4MiAxNi4wOTYgOC4yODQ0OCAxNi4xMzYxQzguMjgyODEgMTYuMTU2MiA4LjI4MTY1IDE2LjE3MjcgOC4yODA4NSAxNi4xODUzTDguMjc5OTIgMTYuMjAxM0w4LjI3OTYzIDE2LjIwNzFMOC4yNzk1MiAxNi4yMDk0TDguMjc5NDcgMTYuMjEwNUw4LjI0NTAyIDE3SDE5Ljc1TDE5LjcxNTYgMTYuMjEwNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMS43NTA1IDYuNzc2OThDMTEuNzUwNSA1LjUyNTQgMTIuNzU2NiA0LjUxMDc5IDEzLjk5NzcgNC41MTA3OUMxNS4yMzg4IDQuNTEwNzkgMTYuMjQ1IDUuNTI1NCAxNi4yNDUgNi43NzY5OEMxNi4yNDUgNy4wMDQ5MyAxNi4yMTE2IDcuMjI1MDIgMTYuMTQ5NSA3LjQzMjU1TDE3LjM0ODkgOC40NjU1NkMxNy42MDEyIDcuOTU3NDIgMTcuNzQzMSA3LjM4MzkyIDE3Ljc0MzEgNi43NzY5OEMxNy43NDMxIDQuNjkxMDEgMTYuMDY2MyAzIDEzLjk5NzcgM0MxMS45MjkyIDMgMTAuMjUyMyA0LjY5MTAxIDEwLjI1MjMgNi43NzY5OEMxMC4yNTIzIDguODYyOTQgMTEuOTI5MiAxMC41NTQgMTMuOTk3NyAxMC41NTRDMTUuMDMxNCAxMC41NTQgMTUuOTY3MyAxMC4xMzE3IDE2LjY0NTEgOS40NDg4TDE1LjQ5OTkgOC40NjI1QzE1LjEwMTggOC44MjM1IDE0LjU3NTIgOS4wNDMxNiAxMy45OTc3IDkuMDQzMTZDMTIuNzU2NiA5LjA0MzE2IDExLjc1MDUgOC4wMjg1NiAxMS43NTA1IDYuNzc2OThaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNS4wOTAxNCAxMy44MjEyQzUuODI2MjUgMTIuNjY4NiA3LjE4MDI1IDExLjU5NTYgOS41NDI5NyAxMS40NzIyTDcuNTk0OTkgMTMuNDkwOUM2Ljk5MzM0IDEzLjgxMTUgNi42MDY1NSAxNC4yMzcxIDYuMzQ5NzIgMTQuNjM5MkM2LjE2MjM4IDE0LjkzMjYgNi4wMzUzOCAxNS4yMjgzIDUuOTQ5NzMgMTUuNDg5Mkg2Ljc4NjQyQzYuNzI2MDIgMTUuNzQ3OCA2LjYzNTgyIDE2LjgzNDIgNi42MTQ0OSAxN0g0LjI1TDQuNDA3NDEgMTUuNDM2QzQuNTEyOTcgMTQuOTk5OCA0LjcxMjI3IDE0LjQxMjkgNS4wOTAxNCAxMy44MjEyWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTkuNjMwMzkgOS4wMTIyMUM4LjU2NjQ0IDguODMzMzQgNy43NTU0MyA3LjkwMDY3IDcuNzU1NDMgNi43NzY5OEM3Ljc1NTQzIDUuNjUzMyA4LjU2NjQzIDQuNzIwNjMgOS42MzAzOCA0LjU0MTc1QzkuOTExOTMgMy45ODM4MSAxMC4yOTU2IDMuNDg3MDYgMTAuNzU2NSAzLjA3NjU0QzEwLjUxMyAzLjAyNjM1IDEwLjI2MDkgMyAxMC4wMDI3IDNDNy45MzQxNCAzIDYuMjU3MjUgNC42OTEwMSA2LjI1NzI1IDYuNzc2OThDNi4yNTcyNSA4Ljg2Mjk1IDcuOTM0MTQgMTAuNTU0IDEwLjAwMjcgMTAuNTU0QzEwLjI2MDkgMTAuNTU0IDEwLjUxMyAxMC41Mjc2IDEwLjc1NjYgMTAuNDc3NEMxMC4yOTU2IDEwLjA2NjkgOS45MTE5NSA5LjU3MDE1IDkuNjMwMzkgOS4wMTIyMVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xLjA5MDE0IDEzLjgyMTJDMS44MjYyNSAxMi42Njg2IDMuMTgwMjUgMTEuNTk1NiA1LjU0Mjk3IDExLjQ3MjJMMy41OTQ5OSAxMy40OTA5QzIuOTkzMzQgMTMuODExNSAyLjYwNjU1IDE0LjIzNyAyLjM0OTcyIDE0LjYzOTJDMi4xNjIzOCAxNC45MzI2IDIuMDM1MzggMTUuMjI4MyAxLjk0OTczIDE1LjQ4OTJIMi43ODY0MkMyLjcyNjAxIDE1Ljc0NzggMi42MzU4MiAxNi44MzQyIDIuNjE0NDkgMTdIMC4yNUwwLjQwNzQxIDE1LjQzNkMwLjUxMjk3NSAxNC45OTk4IDAuNzEyMjY3IDE0LjQxMjkgMS4wOTAxNCAxMy44MjEyWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTUuNjMwMzkgOS4wMTIyMUM0LjU2NjQ0IDguODMzMzMgMy43NTU0MyA3LjkwMDY3IDMuNzU1NDMgNi43NzY5OEMzLjc1NTQzIDUuNjUzMyA0LjU2NjQzIDQuNzIwNjMgNS42MzAzOCA0LjU0MTc1QzUuOTExOTMgMy45ODM4MSA2LjI5NTU5IDMuNDg3MDYgNi43NTY1NCAzLjA3NjUzQzYuNTEzMDMgMy4wMjYzNSA2LjI2MDkxIDMgNi4wMDI2OCAzQzMuOTM0MTQgMyAyLjI1NzI1IDQuNjkxMDEgMi4yNTcyNSA2Ljc3Njk4QzIuMjU3MjUgOC44NjI5NCAzLjkzNDE0IDEwLjU1NCA2LjAwMjY4IDEwLjU1NEM2LjI2MDkyIDEwLjU1NCA2LjUxMzA0IDEwLjUyNzYgNi43NTY1NyAxMC40Nzc0QzYuMjk1NjEgMTAuMDY2OSA1LjkxMTk1IDkuNTcwMTUgNS42MzAzOSA5LjAxMjIxWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==",
              className: i.groupIcon
            })
          );
    },
    303198: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => n });
      const n = (0, a(435681).Z)("DIALOG", { isOpenGoPremiumDialog: !1 });
    },
    385993: (e, t, a) => {
      "use strict";
      a.d(t, { a: () => c });
      var n,
        i = a(876307),
        s = a(962899),
        r = a(561605),
        o = a(488203);
      const l = {
          LINK: { width: "100%", fontSize: " 15px", fontStyle: "normal", lineHeight: "20px ", color: "ds.text.neutral.catchy" },
          CONTAINER: { display: "flex", fontWeight: "400", padding: "10px 6px", alignItems: "center", gap: "8px" }
        },
        c = ({ dropdownItems: e, titleKey: t }) => {
          const { translate: a } = (0, o.Z)();
          return (0, i.tZ)(
            s.h_2,
            {
              sx: { zIndex: 1001 },
              placement: "bottom-start",
              content: Object.keys(e).map((t) =>
                (0, i.tZ)(
                  s.W7o,
                  { key: e[t].i18nKey, sx: l.LINK, onClick: () => (0, r.Yo)(e[t].url) },
                  (0, i.tZ)(
                    "div",
                    { sx: l.CONTAINER, role: "link" },
                    n || (n = (0, i.tZ)(i.JO, { name: "ActionOpenExternalLinkOutlined", color: "ds.text.neutral.catchy" })),
                    a(e[t].i18nKey)
                  )
                )
              )
            },
            (0, i.tZ)(i.zx, { mood: "brand", intensity: "supershy", icon: "CaretDownOutlined", layout: "iconTrailing" }, a(t))
          );
        };
    },
    367198: (e, t, a) => {
      "use strict";
      a.d(t, { r: () => l });
      var n = a(696832),
        i = a(962899),
        s = a(768593),
        r = a(488203);
      const o = ({ onCloseError: e }) => {
          const { translate: t } = (0, r.Z)();
          return n.createElement(
            i.bZj,
            {
              severity: i.BLW.ERROR,
              size: i.k3y.MEDIUM,
              onClose: e,
              showIcon: !0,
              onAction: e,
              actionText: t("_common_dialog_dismiss_button")
            },
            t("_common_generic_error")
          );
        },
        l = ({ moduleName: e, useCaseName: t, lee: a, children: i }) =>
          n.createElement(
            s.S,
            { moduleName: e, useCaseName: t, onError: a?.reportError, errorView: (e) => n.createElement(o, { onCloseError: e }) },
            i
          );
    },
    714124: (e, t, a) => {
      "use strict";
      a.d(t, { ET: () => l, Me: () => d, Sk: () => s, eJ: () => r, hy: () => o, kL: () => c });
      var n = a(263272),
        i = a(648593);
      function s(e = "") {
        return e.startsWith("chrome-extension://");
      }
      function r(e = "") {
        return e.startsWith("chrome-extension://") && n.isChrome();
      }
      function o(e = "") {
        return e.startsWith("ms-browser-extension://");
      }
      function l(e = "") {
        return e.startsWith("moz-extension://");
      }
      function c(e = "") {
        return e.startsWith("chrome-extension://") && n.isEdge();
      }
      const d = () => (0, i.z)();
    },
    561605: (e, t, a) => {
      "use strict";
      a.d(t, { C0: () => c, Tx: () => d, YT: () => l, Yk: () => o, Yo: () => s, nL: () => r });
      var n = a(342868),
        i = a(724715);
      function s(e) {
        (0, i.U)({ url: e }).catch(() => {
          const t = window.open() || window;
          (t.opener = null), t.location.replace(e);
        });
      }
      function r(e) {
        window.location.replace(e);
      }
      function o(e, t, a = { newTab: !0 }) {
        const i = n.parse(n.extract(e)),
          r = e.indexOf("?"),
          o = r > -1 ? e.slice(0, r) : e,
          l = Object.assign({}, i, {
            utm_source: "webapp",
            utm_medium: t.type,
            utm_campaign: t.subtype,
            utm_term: t.action,
            utm_content: t.subaction
          }),
          c = o + "?" + n.stringify(l);
        a.newTab ? s(c) : window.location.assign(c);
      }
      const l = (e) => (t) => {
          t.preventDefault(), o(t.currentTarget.href, e);
        },
        c = (e) => {
          const t = window.location,
            a = t.host,
            i = t.pathname,
            s = new URL(e),
            r = n.parse(s.search);
          if (((r.frag = "true"), a.startsWith("qa"))) r.redirect = "web_qa";
          else if (a.startsWith("preview")) r.redirect = "web_preview";
          else if (a.startsWith("beta")) r.redirect = "web_beta";
          else if (a.startsWith("console")) r.redirect = "web_console";
          else if (a.startsWith("localhost")) r.redirect = "localhost";
          else {
            const e = i.split("/");
            e.find((e) => "branch" === e) && ((r.redirect = "web_branch"), (r.redirectBranch = e[2]));
          }
          return (s.search = n.stringify(r)), s.protocol + "//" + s.host + s.pathname + s.search;
        },
        d = (e) => e.startsWith("https://support.dashlane.com") || e.startsWith("https://dashlane.com");
    },
    354760: (e, t, a) => {
      "use strict";
      a.d(t, { S: () => i, W: () => s });
      var n = a(263272);
      const i = (e, t, a) => {
          if (e) {
            const i = Array.isArray(e) ? e : [e];
            n.isSafari()
              ? (async (e) => {
                  const t = new FileReader();
                  (t.onloadend = () => {
                    const e = document.createElement("iframe");
                    (e.src = t.result), (e.style.display = "none"), document.body.appendChild(e);
                  }),
                    t.readAsDataURL(e);
                })(new Blob(i, { type: "application/octet-stream" }))
              : ((e, t) => {
                  const a = document.createElement("a");
                  (a.href = window.URL.createObjectURL(e)), (a.download = t), a.click();
                })(new Blob(i, { type: a }), t);
          }
        },
        s = (e, t) => i(e, t, "text/plain");
    },
    466424: (e, t, a) => {
      "use strict";
      a.d(t, { B: () => r });
      var n = a(172721),
        i = a(799852),
        s = a(133354);
      const r = (e) => {
        const t = ((e) => (0, i.k)(n.a, "getItemIdsInSharedCollections", { itemIds: e }))(e);
        return t.status === s.rq.Success ? t.data : [];
      };
    },
    281551: (e, t, a) => {
      "use strict";
      a.d(t, { a: () => n });
      const n = (e) => e.hasBillingAccess || e.hasFullAccess;
    },
    156501: (e, t, a) => {
      "use strict";
      a.d(t, { _: () => r });
      var n = a(172721),
        i = a(799852),
        s = a(133354);
      const r = (e) => {
        const t = ((e) => (0, i.k)(n.a, "usersAndGroupsInCollection", { collectionUUIDs: e }))(e);
        return t.status === s.rq.Success ? t.data : {};
      };
    },
    174537: (e, t, a) => {
      "use strict";
      a.d(t, { v: () => l });
      var n = a(995445),
        i = a(242714),
        s = a(133354),
        r = a(375062),
        o = a(68691);
      const l = () => {
        const e = (0, o.C)(),
          { hasSeenNotificationTrialExtended: t, hasSeenOfferToExtendFreeTrial: a } = (0, n.Y)(
            r.t,
            { hasSeenNotificationTrialExtended: {}, hasSeenOfferToExtendFreeTrial: {} },
            []
          ),
          l = (0, i.o)("ecommerce_web_offerToExtend_phase1");
        if (!e || t.status !== s.rq.Success || a.status !== s.rq.Success || null == l) return null;
        const c = (e.isFreeTrial && !e.isGracePeriod && !e.daysLeftInTrial && !a.data) || (e.isGracePeriod && !t.data);
        return l && c;
      };
    },
    528893: (e, t, a) => {
      "use strict";
      a.d(t, { Y: () => c });
      var n = a(696832),
        i = a(482598),
        s = a(361607),
        r = a(133354),
        o = a(299074),
        l = a(300044);
      a(416702), a(842403), a(798849), a(978895), a(445595), a(325676);
      const c = () => {
        const { migrateCategories: e } = (0, i.u)(o.v),
          t = (0, l.f)(),
          a = (0, s._)(),
          c = a.status === r.rq.Success && a.data.vault_web_collection_migration_space_prod_v2;
        (0, n.useEffect)(() => {
          t &&
            c &&
            (async (e) => {
              const t = new TextEncoder().encode(e),
                a = await crypto.subtle.digest("SHA-256", t);
              return Array.from(new Uint8Array(a))
                .map((e) => e.toString(16).padStart(2, "0"))
                .join("");
            })(t)
              .then((t) => {
                e(t);
              })
              .catch(() => {});
        }, [t, c]);
      };
    },
    650188: (e, t, a) => {
      "use strict";
      a.d(t, { D: () => r });
      var n = a(172721),
        i = a(799852),
        s = a(133354);
      const r = (e) => {
        const t = ((e) => (0, i.k)(n.a, "getCollectionsForUserOrGroup", { targetId: e }))(e);
        return t.status === s.rq.Success ? t.data?.collections : [];
      };
    },
    980936: (e, t, a) => {
      "use strict";
      a.d(t, { I: () => s });
      var n = a(115607),
        i = a(148038);
      const s = () => {
        const e = (0, n.JS)();
        if (e.status !== i.rq.Success) return { status: e.status };
        const t =
          !!e.data.b2bStatus && "in_team" === e.data.b2bStatus.statusCode && !e.data.b2bStatus.currentTeam?.teamInfo.personalSpaceEnabled;
        return { status: i.rq.Success, isDisabled: t };
      };
    },
    909748: (e, t, a) => {
      "use strict";
      a.d(t, { U: () => r });
      var n = a(65255),
        i = a(242714),
        s = a(115607);
      const r = () => {
        const e = (0, s.lZ)(),
          t = (0, i.o)(n.w.EcommerceWebB2BDiscontinuationPhase2);
        return e.isLoading || "boolean" != typeof t ? null : t && !!e.isTeamSoftDiscontinued && !!e.isTrial;
      };
    },
    779602: (e, t, a) => {
      "use strict";
      a.d(t, { q: () => i });
      var n = a(692077);
      const i = () => {
        const { routes: e } = (0, n.Xo)(),
          t = (0, n.k6)();
        return { openTeamConsole: () => t.push(e.teamRoutesBasePath) };
      };
    },
    209063: (e, t, a) => {
      "use strict";
      a.d(t, { L: () => s });
      var n = a(172721),
        i = a(799852);
      const s = () => (0, i.k)(n.a, "sharedCollectionsWithItems");
    },
    27144: (e, t, a) => {
      "use strict";
      a.d(t, { s: () => r });
      var n = a(799852),
        i = a(133354),
        s = a(551453);
      const r = () => {
        const e = (0, n.k)(s.o, "getTeamBillingInformation");
        return e.status === i.rq.Success ? e.data : null;
      };
    },
    798423: (e, t, a) => {
      "use strict";
      a.d(t, { M: () => o });
      var n = a(799852),
        i = a(133354),
        s = a(551453),
        r = a(581598);
      const o = () => {
        var e;
        const t = (0, n.k)(s.o, "getTeamCancellationStatus");
        return t.status === i.rq.Loading
          ? { isLoading: !0, status: r.Uz.None }
          : { isLoading: !1, status: null != (e = t.data) ? e : r.Uz.None };
      };
    },
    68691: (e, t, a) => {
      "use strict";
      a.d(t, { C: () => r });
      var n = a(799852),
        i = a(133354),
        s = a(551453);
      const r = () => {
        const e = (0, n.k)(s.o, "getTeamTrialStatus");
        return e.status === i.rq.Success ? e.data : null;
      };
    },
    430959: (e, t, a) => {
      "use strict";
      a.d(t, { _: () => p });
      var n = a(696832),
        i = a(589341),
        s = a(143489),
        r = a(791205),
        o = a(243689),
        l = a(438839),
        c = a(939956),
        d = a(148038),
        u = a(740300);
      const p = () => {
        const e = (0, d.qr)({ queryConfig: { query: u.C.getPublicUserId } }, []),
          t = e.status === d.rq.Success ? e.data : null;
        (0, n.useEffect)(() => {
          if (t) {
            const e = "815a5037-0fe2-4adf-b045-33959c4e5d89",
              a = "sdk.iad-01.braze.com";
            i.j(e, { baseUrl: a, allowUserSuppliedJavascript: !0 }),
              s.f(),
              r.u(function (e) {
                o.g(e);
              }),
              l.changeUser(t),
              c.U();
          }
        }, [t]);
      };
    },
    80237: (e, t, a) => {
      "use strict";
      a.d(t, { M: () => i });
      var n = a(696832);
      function i({ hasMore: e, scrollContainerRef: t, bottomRef: a, loadMore: i }) {
        n.useEffect(() => {
          const n = a.current,
            s = t.current;
          if (!s || !n || !e) return;
          s?.scrollTo(0, 0);
          const r = new IntersectionObserver(
            ([e]) => {
              e.isIntersecting && i();
            },
            { root: null, rootMargin: "0px", threshold: 1 }
          );
          return r.observe(n), () => r.disconnect();
        }, [e, t, a, i]);
      }
    },
    778301: (e, t, a) => {
      "use strict";
      a.d(t, { a: () => u });
      var n = a(929986),
        i = a(482598),
        s = a(703381);
      a(374301);
      let r = { status: null };
      var o = a(891828);
      var l = a(814691),
        c = a(13403),
        d = a(622677);
      const u = (e) => {
        const { logout: t } = (0, i.u)(n.V);
        return async () => {
          e((0, c.hX)()), e((0, l.LM)()), (0, s.L)(), (r = { status: null }), (0, o.L)(), await t(), (0, d.x)();
        };
      };
    },
    300044: (e, t, a) => {
      "use strict";
      a.d(t, { f: () => s });
      var n = a(148038),
        i = a(740300);
      const s = () => {
        const e = (0, n.qr)({ queryConfig: { query: i.C.getUserLogin } }, []);
        return e.status === n.rq.Success ? e.data : void 0;
      };
    },
    229004: (e, t, a) => {
      "use strict";
      a.d(t, { O: () => s, b: () => r });
      var n = a(696832),
        i = a(133392);
      const s = (0, n.createContext)({ translate: i.Iu }),
        r = s.Provider;
    },
    616782: (e, t, a) => {
      "use strict";
      a.d(t, { U5: () => s, _T: () => i, a1: () => o, qG: () => r, t5: () => n });
      const n = (e) => e.includes("_markup");
      let i = (function (e) {
          return (
            (e.L = "L"),
            (e.l = "l"),
            (e.ll = "ll"),
            (e.LL = "LL"),
            (e.lll = "lll"),
            (e.L_M_D = "L_M_D"),
            (e.YYYY = "YYYY"),
            (e.M = "M"),
            (e.MM = "MM"),
            (e.MMM = "MMM"),
            (e.MMM_YYYY = "MMM_YYYY"),
            (e.MMMM = "MMMM"),
            (e.MMMM_D = "MMMM_D"),
            (e.MMMM_YYYY = "MMMM_YYYY"),
            (e.LT = "LT"),
            e
          );
        })({}),
        s = (function (e) {
          return (e.yMMddHHmmss = "yMMddHHmmss"), e;
        })({});
      const r = {
          L: { year: "numeric", month: "2-digit", day: "2-digit" },
          l: { year: "numeric", month: "numeric", day: "numeric" },
          ll: { year: "numeric", month: "short", day: "numeric" },
          LL: { year: "numeric", month: "long", day: "numeric" },
          lll: { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric" },
          L_M_D: { month: "short", day: "numeric" },
          YYYY: { year: "numeric" },
          M: { month: "numeric" },
          MM: { month: "2-digit" },
          MMM: { month: "short" },
          MMMM: { month: "long" },
          MMMM_D: { month: "long", day: "numeric" },
          MMM_YYYY: { month: "short", year: "numeric" },
          MMMM_YYYY: { month: "long", year: "numeric" },
          LT: { hour: "numeric", minute: "numeric" }
        },
        o = { yMMddHHmmss: "yMMddHHmmss" };
    },
    133392: (e, t, a) => {
      "use strict";
      a.d(t, { eG: () => I, Iu: () => f });
      var n = a(696832),
        i = a(307973),
        s = a(526849);
      function r(e) {
        const t = e.navigator;
        return { languages: t.languages, language: t.language, userLanguage: t.userLanguage, systemLanguage: t.systemLanguage };
      }
      var o = a(158296);
      function l(e) {
        const t = {};
        return (
          Object.keys(e).forEach((a) => {
            const n = e[a];
            t[a] = "string" == typeof n ? n.replace(/%(?!\()/g, "%%") : l(n);
          }),
          t
        );
      }
      function c(e, t, n) {
        const i = { counterpart: { pluralize: a(405992) } };
        e.registerTranslations(t, Object.assign(i, l(n))),
          e.registerTranslations("ja", a(691996)),
          e.registerTranslations("ko", a(278144)),
          e.registerTranslations("zh", a(759998)),
          e.setLocale(t);
      }
      var d = a(605961),
        u = a.n(d),
        p = a(324047),
        m = a(616782);
      const g = a(689273),
        h = a(703956).Instance,
        x = a(246594),
        k = g.i18n.locales,
        y = (0, s.memoize)(() => {
          const e = new h();
          return c(e, "en", x), e;
        }),
        M = (e, t) => y().translate(e, t),
        b = { "en-context": "en", "en-pending": "en", "en-pseudo": "en", zh: "zh-cn", pt: "pt-br" },
        f = (function () {
          const e = new h(),
            t = (t, a) => {
              const n = e.translate(t, a);
              return ((e) => !e || "missing translation:" === e.substr(0, 20))(n) ? (a ? M(t, a) : M(t)) : n;
            };
          return (
            (t.localizedCountries = {}),
            (t.registerTranslations = e.registerTranslations.bind(e)),
            (t.getLocale = e.getLocale.bind(e)),
            (t.localeMeta = void 0),
            (t.setLocale = async (n) => {
              "en" === n
                ? c(e, n, x)
                : await (function (e) {
                    return function (t) {
                      return (
                        document.querySelector("html")?.setAttribute("lang", t.substr(0, 2)),
                        (function (e) {
                          return a(593020)(`./${e}.json`);
                        })(t).then((a) => {
                          c(e, t, a);
                        })
                      );
                    };
                  })(e)(n),
                (t.localizedCountries = await (function (e) {
                  return new Promise(
                    "de" === e
                      ? (e) => {
                          Promise.all([
                            a.e(2410),
                            a.e(3005),
                            a.e(2204),
                            a.e(4695),
                            a.e(7777),
                            a.e(3557),
                            a.e(557),
                            a.e(8114),
                            a.e(6505),
                            a.e(3762),
                            a.e(8440),
                            a.e(5552),
                            a.e(9342),
                            a.e(1903)
                          ])
                            .then(
                              ((t) => {
                                e(a(346196));
                              }).bind(null, a)
                            )
                            .catch(a.oe);
                        }
                      : "en" === e
                      ? (e) => {
                          Promise.all([
                            a.e(2410),
                            a.e(3005),
                            a.e(2204),
                            a.e(4695),
                            a.e(7777),
                            a.e(3557),
                            a.e(557),
                            a.e(8114),
                            a.e(6505),
                            a.e(3762),
                            a.e(8440),
                            a.e(5552),
                            a.e(9342),
                            a.e(1903)
                          ])
                            .then(
                              ((t) => {
                                e(a(301321));
                              }).bind(null, a)
                            )
                            .catch(a.oe);
                        }
                      : "es" === e
                      ? (e) => {
                          Promise.all([
                            a.e(2410),
                            a.e(3005),
                            a.e(2204),
                            a.e(4695),
                            a.e(7777),
                            a.e(3557),
                            a.e(557),
                            a.e(8114),
                            a.e(6505),
                            a.e(3762),
                            a.e(8440),
                            a.e(5552),
                            a.e(9342),
                            a.e(1903)
                          ])
                            .then(
                              ((t) => {
                                e(a(449661));
                              }).bind(null, a)
                            )
                            .catch(a.oe);
                        }
                      : "fr" === e
                      ? (e) => {
                          Promise.all([
                            a.e(2410),
                            a.e(3005),
                            a.e(2204),
                            a.e(4695),
                            a.e(7777),
                            a.e(3557),
                            a.e(557),
                            a.e(8114),
                            a.e(6505),
                            a.e(3762),
                            a.e(8440),
                            a.e(5552),
                            a.e(9342),
                            a.e(1903)
                          ])
                            .then(
                              ((t) => {
                                e(a(770408));
                              }).bind(null, a)
                            )
                            .catch(a.oe);
                        }
                      : "it" === e
                      ? (e) => {
                          Promise.all([
                            a.e(2410),
                            a.e(3005),
                            a.e(2204),
                            a.e(4695),
                            a.e(7777),
                            a.e(3557),
                            a.e(557),
                            a.e(8114),
                            a.e(6505),
                            a.e(3762),
                            a.e(8440),
                            a.e(5552),
                            a.e(9342),
                            a.e(1903)
                          ])
                            .then(
                              ((t) => {
                                e(a(921421));
                              }).bind(null, a)
                            )
                            .catch(a.oe);
                        }
                      : "ja" === e
                      ? (e) => {
                          Promise.all([
                            a.e(2410),
                            a.e(3005),
                            a.e(2204),
                            a.e(4695),
                            a.e(7777),
                            a.e(3557),
                            a.e(557),
                            a.e(8114),
                            a.e(6505),
                            a.e(3762),
                            a.e(8440),
                            a.e(5552),
                            a.e(9342),
                            a.e(1903)
                          ])
                            .then(
                              ((t) => {
                                e(a(358148));
                              }).bind(null, a)
                            )
                            .catch(a.oe);
                        }
                      : "pt" === e
                      ? (e) => {
                          Promise.all([
                            a.e(2410),
                            a.e(3005),
                            a.e(2204),
                            a.e(4695),
                            a.e(7777),
                            a.e(3557),
                            a.e(557),
                            a.e(8114),
                            a.e(6505),
                            a.e(3762),
                            a.e(8440),
                            a.e(5552),
                            a.e(9342),
                            a.e(1903)
                          ])
                            .then(
                              ((t) => {
                                e(a(686491));
                              }).bind(null, a)
                            )
                            .catch(a.oe);
                        }
                      : "ko" === e
                      ? (e) => {
                          Promise.all([
                            a.e(2410),
                            a.e(3005),
                            a.e(2204),
                            a.e(4695),
                            a.e(7777),
                            a.e(3557),
                            a.e(557),
                            a.e(8114),
                            a.e(6505),
                            a.e(3762),
                            a.e(8440),
                            a.e(5552),
                            a.e(9342),
                            a.e(1903)
                          ])
                            .then(
                              ((t) => {
                                e(a(782621));
                              }).bind(null, a)
                            )
                            .catch(a.oe);
                        }
                      : "zh" === e
                      ? (e) => {
                          Promise.all([
                            a.e(2410),
                            a.e(3005),
                            a.e(2204),
                            a.e(4695),
                            a.e(7777),
                            a.e(3557),
                            a.e(557),
                            a.e(8114),
                            a.e(6505),
                            a.e(3762),
                            a.e(8440),
                            a.e(5552),
                            a.e(9342),
                            a.e(1903)
                          ])
                            .then(
                              ((t) => {
                                e(a(85472));
                              }).bind(null, a)
                            )
                            .catch(a.oe);
                        }
                      : "nl" === e
                      ? (e) => {
                          Promise.all([
                            a.e(2410),
                            a.e(3005),
                            a.e(2204),
                            a.e(4695),
                            a.e(7777),
                            a.e(3557),
                            a.e(557),
                            a.e(8114),
                            a.e(6505),
                            a.e(3762),
                            a.e(8440),
                            a.e(5552),
                            a.e(9342),
                            a.e(1903)
                          ])
                            .then(
                              ((t) => {
                                e(a(423948));
                              }).bind(null, a)
                            )
                            .catch(a.oe);
                        }
                      : "sv" === e
                      ? (e) => {
                          Promise.all([
                            a.e(2410),
                            a.e(3005),
                            a.e(2204),
                            a.e(4695),
                            a.e(7777),
                            a.e(3557),
                            a.e(557),
                            a.e(8114),
                            a.e(6505),
                            a.e(3762),
                            a.e(8440),
                            a.e(5552),
                            a.e(9342),
                            a.e(1903)
                          ])
                            .then(
                              ((t) => {
                                e(a(586301));
                              }).bind(null, a)
                            )
                            .catch(a.oe);
                        }
                      : (e) => {
                          Promise.all([
                            a.e(2410),
                            a.e(3005),
                            a.e(2204),
                            a.e(4695),
                            a.e(7777),
                            a.e(3557),
                            a.e(557),
                            a.e(8114),
                            a.e(6505),
                            a.e(3762),
                            a.e(8440),
                            a.e(5552),
                            a.e(9342),
                            a.e(1903)
                          ])
                            .then(
                              ((t) => {
                                e(a(301321));
                              }).bind(null, a)
                            )
                            .catch(a.oe);
                        }
                  );
                })(n)),
                (t.localeMeta = await ((e) =>
                  new Promise(
                    "de" === e
                      ? (e) => {
                          Promise.all([
                            a.e(2410),
                            a.e(3005),
                            a.e(2204),
                            a.e(4695),
                            a.e(7777),
                            a.e(3557),
                            a.e(557),
                            a.e(8114),
                            a.e(6505),
                            a.e(3762),
                            a.e(8440),
                            a.e(5552),
                            a.e(9342),
                            a.e(1903)
                          ])
                            .then(
                              ((t) => {
                                e(a(716160));
                              }).bind(null, a)
                            )
                            .catch(a.oe);
                        }
                      : "en" === e
                      ? (e) => {
                          Promise.all([
                            a.e(2410),
                            a.e(3005),
                            a.e(2204),
                            a.e(4695),
                            a.e(7777),
                            a.e(3557),
                            a.e(557),
                            a.e(8114),
                            a.e(6505),
                            a.e(3762),
                            a.e(8440),
                            a.e(5552),
                            a.e(9342),
                            a.e(1903)
                          ])
                            .then(
                              ((t) => {
                                e(a(268835));
                              }).bind(null, a)
                            )
                            .catch(a.oe);
                        }
                      : "es" === e
                      ? (e) => {
                          Promise.all([
                            a.e(2410),
                            a.e(3005),
                            a.e(2204),
                            a.e(4695),
                            a.e(7777),
                            a.e(3557),
                            a.e(557),
                            a.e(8114),
                            a.e(6505),
                            a.e(3762),
                            a.e(8440),
                            a.e(5552),
                            a.e(9342),
                            a.e(1903)
                          ])
                            .then(
                              ((t) => {
                                e(a(84223));
                              }).bind(null, a)
                            )
                            .catch(a.oe);
                        }
                      : "fr" === e
                      ? (e) => {
                          Promise.all([
                            a.e(2410),
                            a.e(3005),
                            a.e(2204),
                            a.e(4695),
                            a.e(7777),
                            a.e(3557),
                            a.e(557),
                            a.e(8114),
                            a.e(6505),
                            a.e(3762),
                            a.e(8440),
                            a.e(5552),
                            a.e(9342),
                            a.e(1903)
                          ])
                            .then(
                              ((t) => {
                                e(a(241602));
                              }).bind(null, a)
                            )
                            .catch(a.oe);
                        }
                      : "it" === e
                      ? (e) => {
                          Promise.all([
                            a.e(2410),
                            a.e(3005),
                            a.e(2204),
                            a.e(4695),
                            a.e(7777),
                            a.e(3557),
                            a.e(557),
                            a.e(8114),
                            a.e(6505),
                            a.e(3762),
                            a.e(8440),
                            a.e(5552),
                            a.e(9342),
                            a.e(1903)
                          ])
                            .then(
                              ((t) => {
                                e(a(820198));
                              }).bind(null, a)
                            )
                            .catch(a.oe);
                        }
                      : "ja" === e
                      ? (e) => {
                          Promise.all([
                            a.e(2410),
                            a.e(3005),
                            a.e(2204),
                            a.e(4695),
                            a.e(7777),
                            a.e(3557),
                            a.e(557),
                            a.e(8114),
                            a.e(6505),
                            a.e(3762),
                            a.e(8440),
                            a.e(5552),
                            a.e(9342),
                            a.e(1903)
                          ])
                            .then(
                              ((t) => {
                                e(a(536505));
                              }).bind(null, a)
                            )
                            .catch(a.oe);
                        }
                      : "pt-br" === e
                      ? (e) => {
                          Promise.all([
                            a.e(2410),
                            a.e(3005),
                            a.e(2204),
                            a.e(4695),
                            a.e(7777),
                            a.e(3557),
                            a.e(557),
                            a.e(8114),
                            a.e(6505),
                            a.e(3762),
                            a.e(8440),
                            a.e(5552),
                            a.e(9342),
                            a.e(1903)
                          ])
                            .then(
                              ((t) => {
                                e(a(723135));
                              }).bind(null, a)
                            )
                            .catch(a.oe);
                        }
                      : "ko" === e
                      ? (e) => {
                          Promise.all([
                            a.e(2410),
                            a.e(3005),
                            a.e(2204),
                            a.e(4695),
                            a.e(7777),
                            a.e(3557),
                            a.e(557),
                            a.e(8114),
                            a.e(6505),
                            a.e(3762),
                            a.e(8440),
                            a.e(5552),
                            a.e(9342),
                            a.e(1903)
                          ])
                            .then(
                              ((t) => {
                                e(a(116649));
                              }).bind(null, a)
                            )
                            .catch(a.oe);
                        }
                      : "zh-cn" === e
                      ? (e) => {
                          Promise.all([
                            a.e(2410),
                            a.e(3005),
                            a.e(2204),
                            a.e(4695),
                            a.e(7777),
                            a.e(3557),
                            a.e(557),
                            a.e(8114),
                            a.e(6505),
                            a.e(3762),
                            a.e(8440),
                            a.e(5552),
                            a.e(9342),
                            a.e(1903)
                          ])
                            .then(
                              ((t) => {
                                e(a(649813));
                              }).bind(null, a)
                            )
                            .catch(a.oe);
                        }
                      : "nl" === e
                      ? (e) => {
                          Promise.all([
                            a.e(2410),
                            a.e(3005),
                            a.e(2204),
                            a.e(4695),
                            a.e(7777),
                            a.e(3557),
                            a.e(557),
                            a.e(8114),
                            a.e(6505),
                            a.e(3762),
                            a.e(8440),
                            a.e(5552),
                            a.e(9342),
                            a.e(1903)
                          ])
                            .then(
                              ((t) => {
                                e(a(190594));
                              }).bind(null, a)
                            )
                            .catch(a.oe);
                        }
                      : "sv" === e
                      ? (e) => {
                          Promise.all([
                            a.e(2410),
                            a.e(3005),
                            a.e(2204),
                            a.e(4695),
                            a.e(7777),
                            a.e(3557),
                            a.e(557),
                            a.e(8114),
                            a.e(6505),
                            a.e(3762),
                            a.e(8440),
                            a.e(5552),
                            a.e(9342),
                            a.e(1903)
                          ])
                            .then(
                              ((t) => {
                                e(a(912305));
                              }).bind(null, a)
                            )
                            .catch(a.oe);
                        }
                      : (e) => {
                          Promise.all([
                            a.e(2410),
                            a.e(3005),
                            a.e(2204),
                            a.e(4695),
                            a.e(7777),
                            a.e(3557),
                            a.e(557),
                            a.e(8114),
                            a.e(6505),
                            a.e(3762),
                            a.e(8440),
                            a.e(5552),
                            a.e(9342),
                            a.e(1903)
                          ])
                            .then(
                              ((t) => {
                                e(a(268835));
                              }).bind(null, a)
                            )
                            .catch(a.oe);
                        }
                  ))(n in b ? b[n] : n));
            }),
            (t.namespace = (e) => {
              const a = (a, n) => t(e + a, n);
              return (a.markup = (a, n, i) => t.markup(e + a, n, i)), (a.localeMeta = t.localeMeta), a;
            }),
            (t.shortDate = (e = new Date(), a = m._T.L) => {
              if ("object" == typeof a) return e.toLocaleString(t.localeMeta?.code, a);
              if (a in m._T) return e.toLocaleString(t.localeMeta?.code, m.qG[m._T[a]]);
              const n = a in m.U5 ? m.a1[m.U5[a]] : a;
              return "string" == typeof a ? (0, i.Z)(e, n, { locale: t.localeMeta }) : "";
            }),
            (t.priceSymbol = (e) =>
              Intl.NumberFormat(void 0, { notation: "standard", currency: e.toUpperCase(), style: "currency" })
                .format(0)
                .replace(/\d|\.|,]/g, "")
                .trim()),
            (t.price = (e, t, a) =>
              Intl.NumberFormat(void 0, {
                notation: "standard",
                currency: e.toUpperCase(),
                style: "currency",
                ...(null != a ? a : {})
              }).format(t)),
            (t.markup = (t, a = {}, i = {}, s) => {
              if (!t.endsWith("_markup")) throw new Error("Markup keys must end with _markup");
              const { linkTarget: r, onLinkClicked: o = () => {} } = i;
              let l = e.translate(t, a);
              null == l && console.error("rawTranslation is null or undefined"), (l = l || "");
              const c = l.indexOf("\n") > -1;
              return n.createElement(u(), {
                source: l,
                allowedTypes: ["Text", "Link", "Emph", "Strong", "Paragraph", "Softbreak", "List", "Item"],
                containerTagName: "span",
                softBreak: "br",
                renderers: {
                  Paragraph: c ? "p" : "span",
                  Link: function (e) {
                    return n.createElement(
                      p.Z,
                      {
                        ...s,
                        "aria-label": l,
                        href: e.href,
                        target: r,
                        onClick: () => {
                          o(e.href);
                        }
                      },
                      e.children
                    );
                  }
                }
              });
            }),
            t
          );
        })();
      function I(e) {
        const t = (function (e, t, a) {
          const n = (function (e, t) {
            const a = r(e);
            let n = "";
            a.languages && ((n = a.languages.find((e) => !!t.find((t) => e.substr(0, 2) === t)) || ""), (n = n ? n.substr(0, 2) : n));
            const i = a.userLanguage || a.language,
              s = t.find((e) => i.substr(0, 2) === e);
            return n || s;
          })(window, t);
          return (e || n || a).toLowerCase();
        })(e.getState().locale.language, k, g.i18n.defaultLocale);
        return (
          e.dispatch(o.YB({ language: t })),
          f.setLocale(t).then(() => {
            const t = (function (e, t, a) {
              return (
                (function (e) {
                  const t = r(window),
                    a = t.userLanguage || t.language;
                  let n = "";
                  return a.length >= 5 && (n = a.substr(3, 2)), n;
                })() ||
                e ||
                a
              ).toUpperCase();
            })(e.getState().locale.country, 0, g.i18n.defaultCountry);
            return e.dispatch(o.i8({ country: t })), f;
          })
        );
      }
    },
    53506: (e, t, a) => {
      "use strict";
      a.d(t, { v: () => r });
      var n = a(696832),
        i = a(616782),
        s = a(488203);
      const r = ({ date: e, format: t = i._T.lll }) => {
        const { translate: a } = (0, s.Z)(),
          { shortDate: r } = a,
          o = r(e, t);
        return n.createElement("time", { dateTime: e.toISOString() }, o);
      };
    },
    915622: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => d });
      var n = a(876307),
        i = a(696832),
        s = a(99314),
        r = a(657318),
        o = a(488203),
        l = a(616782);
      const c = 36e5,
        d = ({ date: e, i18n: t }) => {
          const [a, d] = (0, i.useState)(""),
            { translate: u } = (0, o.Z)(),
            { localeMeta: p, shortDate: m } = u;
          (0, i.useEffect)(() => {
            let a = null;
            const n = () => {
              const i = ((e) => (t) => ({ friendly: (0, s.Z)(t, { addSuffix: !0, locale: e }), diffInMs: (0, r.Z)(Date.now(), t) }))(p),
                { friendly: o, diffInMs: l } = i(e),
                m = t ? u(t.key, { [t.param]: o }) : o;
              d(m);
              const g = l < 6e4 ? 1e4 : l < c ? 6e4 : c;
              null !== a && window.clearTimeout(a), (a = window.setTimeout(n, g));
            };
            return (
              n(),
              () => {
                null !== a && clearTimeout(a);
              }
            );
          }, [p, e]);
          const g = p ? m(e, l._T.lll) : "";
          return (0, n.tZ)("time", { dateTime: e.toISOString(), title: g }, a);
        };
    },
    158296: (e, t, a) => {
      "use strict";
      a.d(t, { YB: () => i, ZP: () => r, i8: () => s });
      const n = (0, a(435681).Z)("LOCALE", { language: "", country: "" }),
        i =
          (n.registerAction("LANGUAGE_USER_CHANGED", (e, { language: t }) => Object.assign({}, e, { language: t })),
          n.registerAction("LANGUAGE_LOADED", (e, { language: t }) => Object.assign({}, e, { language: t }))),
        s =
          (n.registerAction("COUNTRY_USER_CHANGED", (e, { country: t }) => Object.assign({}, e, { country: t })),
          n.registerAction("COUNTRY_LOADED", (e, { country: t }) => Object.assign({}, e, { country: t }))),
        r = n;
    },
    488203: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => s });
      var n = a(696832),
        i = a(229004);
      const s = function () {
        const e = (0, n.useContext)(i.O);
        if (void 0 === e) throw new Error("useTranslate must be used with I18n Provider");
        return { translate: e.translate };
      };
    },
    589923: (e, t, a) => {
      "use strict";
      a.d(t, { Y: () => r });
      var n = a(696832),
        i = a(488203);
      const s = (e) => (t) => {
        if ("string" == typeof t) return e(t);
        {
          var a, n;
          const i = null != (a = t.linkParams) ? a : {};
          return t.markup || t.params
            ? e.markup(t.key, t.params, { ...i, linkTarget: null != (n = i.linkTarget) ? n : "_blank" })
            : e(t.key);
        }
      };
      function r() {
        const { translate: e } = (0, i.Z)();
        return (0, n.useMemo)(() => ({ translateWithMarkup: s(e) }), [e]);
      }
    },
    902039: (e, t, a) => {
      "use strict";
      a.d(t, { H: () => s });
      var n = a(696832),
        i = a(488203);
      const s = (e) => (t) => {
        const { translate: a } = (0, i.Z)();
        return n.createElement(e, { ...t, translate: a });
      };
    },
    548122: (e, t, a) => {
      "use strict";
      a.d(t, { Ij: () => s, J2: () => l, MG: () => c, R2: () => i, bC: () => n, co: () => r, x5: () => o });
      const n = "credentials-list-sorting-options",
        i = "password-history-list-sort-preferences",
        s = "secure-notes-list-preferences",
        r = "secrets-list-preferences",
        o = "sharing-group-list-sort-preference",
        l = "sharing-user-list-sort-preference",
        c = "remember-me-for-sso-preference";
    },
    197446: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => s });
      var n = a(429705),
        i = a(814691);
      const s = function (e, t) {
        const [a, s] = "string" == typeof e ? [e, t] : [e.message, null != e ? e : t];
        n.sY && (console.warn(a.replace(/:$/, "") + ":"), console.error(null != s ? s : new Error(a)));
        const r = {};
        return (
          s &&
            Object.getOwnPropertyNames(s)
              .filter((e) => "message" !== e)
              .forEach((e) => (r[e] = s[e])),
          i.Qy.error({
            message: a,
            content: {
              ...r,
              scripts: Array.prototype.map.call(
                window.document.querySelectorAll("script"),
                (e) => e.src || e.getAttribute("src") || (e.textContent ? e.textContent.trim().substr(0, 200) : "")
              ),
              hostname: window.location.hostname,
              host: window.location.host,
              pathname: window.location.pathname
            }
          })
        );
      };
    },
    952092: (e, t, a) => {
      "use strict";
      a.d(t, { $: () => s });
      var n = a(593039),
        i = a(45272);
      const s = (e, t) => {
        let a;
        (a =
          0 === Object.keys(e).length
            ? { has_cookie: !1 }
            : { has_cookie: !0, heap_identity: e.trackingId, gclid: e.gclid, everflow_transaction_id: e.transaction_id }),
          (0, i.Kz)(new n.UserCreateAccountEvent({ isMarketingOptIn: t, status: n.AccountCreationStatus.Success, webMarketing: a }));
      };
    },
    833840: (e, t, a) => {
      "use strict";
      a.d(t, { k: () => r });
      var n = a(593039),
        i = a(164718),
        s = a(45272);
      const r = async (e, t) => {
        const a = new i.Y(t).getRootDomain();
        (0, s.Kz)(
          new n.UserOpenExternalVaultItemLinkEvent({ domainType: n.DomainType.Web, itemId: e, itemType: n.ItemTypeWithLink.Credential })
        ),
          (0, s.Kz)(
            new n.AnonymousOpenExternalVaultItemLinkEvent({
              itemType: n.ItemTypeWithLink.Credential,
              domain: { id: await (0, n.hashDomain)(a), type: n.DomainType.Web }
            })
          );
      };
    },
    825960: (e, t, a) => {
      "use strict";
      a.d(t, { Ab: () => p, GV: () => d, Mx: () => u, Q_: () => m, X0: () => l, bx: () => c, kb: () => o });
      var n = a(593039),
        i = a(382706),
        s = a(45272);
      const r = (e, t, a, i, r = n.Highlight.None) => {
          (0, s.Kz)(new n.UserSelectVaultItemEvent({ highlight: r, index: a, itemId: e, itemType: t, totalCount: i }));
        },
        o = (e, t, a, i = n.Highlight.None) => {
          r(e, n.ItemType.Credential, t, a, i);
        },
        l = (e, t, a, i = n.Highlight.None) => {
          r(e, n.ItemType.SecureNote, t, a, i);
        },
        c = (e, t, a, i, s = n.Highlight.None) => {
          r(e, t, a, i, s);
        },
        d = (e, t, a, i = n.Highlight.None) => {
          r(e, n.ItemType.CreditCard, t, a, i);
        },
        u = (e, t, a, i = n.Highlight.None) => {
          r(e, n.ItemType.BankStatement, t, a, i);
        },
        p = {
          [i.U.DriversLicense]: n.ItemType.DriverLicence,
          [i.U.FiscalId]: n.ItemType.FiscalStatement,
          [i.U.IdCard]: n.ItemType.IdCard,
          [i.U.Passport]: n.ItemType.Passport,
          [i.U.SocialSecurityId]: n.ItemType.SocialSecurity
        },
        m = (e, t, a, i, s = n.Highlight.None) => {
          r(e, t, a, i, s);
        };
    },
    787685: (e, t, a) => {
      "use strict";
      a.d(t, { D: () => l, r: () => o });
      var n = a(975077),
        i = a(329),
        s = a(459522);
      const r = "userFunnelCookie",
        o = async () => {
          const e = await (0, i.g)({ domain: s.zi, name: r });
          if (!e[0]) return {};
          {
            const t = decodeURIComponent(e[0].value);
            try {
              return JSON.parse(t);
            } catch (e) {
              return {};
            }
          }
        },
        l = () => {
          try {
            const e = n.Q(document.cookie);
            return JSON.parse(e[r]);
          } catch (e) {
            return {};
          }
        };
    },
    668531: (e, t, a) => {
      "use strict";
      a.d(t, { V: () => i });
      var n = a(593039);
      const i = {
        chose_other_password_manager: n.PossibleFormAnswers.ChoseOtherPasswordManager,
        downsized_employee_count: n.PossibleFormAnswers.DownsizedEmployeeCount,
        missing_critical_features: n.PossibleFormAnswers.MissingCriticalFeatures,
        no_internal_usage: n.PossibleFormAnswers.NoInternalUsage,
        other: n.PossibleFormAnswers.Other,
        technical_issues: n.PossibleFormAnswers.TechnicalIssues,
        too_expensive: n.PossibleFormAnswers.TooExpensive
      };
    },
    814691: (e, t, a) => {
      "use strict";
      a.d(t, { LM: () => s, Qy: () => c, pI: () => r });
      var n = a(447614);
      const i = (e, t, a) => {
          e("logs", { kind: t, details: a });
        },
        s = n.Z.registerAction("FLUSH_LOGS_REQUESTED", (e) => Object.assign({}, e, { flushLogsRequested: !0 })),
        r = n.Z.registerAction("FLUSH_LOGS_INITIATED", (e) => Object.assign({}, e, { flushLogsRequested: !1 })),
        o = function (e, t) {
          i(e, "website", Object.assign({}, t, { level: "info" }));
        };
      (o.warn = (e, t) => {
        i(e, "website", Object.assign({}, t, { level: "warn" }));
      }),
        (o.error = (e, t) => {
          i(e, "website", Object.assign({}, t, { level: "error" }));
        });
      const l = n.Z.registerAction("WEBSITE_LOG", (e, t) => Object.assign({}, e, { website: e.website.concat([{ ...t, level: "info" }]) }));
      (l.warn = n.Z.registerAction("WEBSITE_LOG", (e, t) =>
        Object.assign({}, e, { website: e.website.concat([{ ...t, level: "warn" }]) })
      )),
        (l.error = n.Z.registerAction("WEBSITE_LOG", (e, t) =>
          Object.assign({}, e, { website: e.website.concat([{ ...t, level: "error" }]) })
        ));
      const c = l;
    },
    909673: (e, t, a) => {
      "use strict";
      a.d(t, { G: () => r, w: () => o });
      var n = a(696832),
        i = a(45272);
      const s = n.createContext(""),
        r = ({ children: e }) => {
          const t = (0, i.tJ)();
          return n.createElement(s.Provider, { value: t }, e);
        },
        o = () => (0, n.useContext)(s);
    },
    45272: (e, t, a) => {
      "use strict";
      a.d(t, { Kz: () => l, Nc: () => c, tJ: () => d });
      var n = a(696832),
        i = a(227257),
        s = a(593039),
        r = a(740300);
      let o;
      const l = (e) => {
          r.C.logEvent({ event: e });
        },
        c = (e, t = s.BrowseComponent.MainApp) => {
          r.C.logPageView({ pageView: e, browseComponent: t }), o && o.next(e);
        },
        d = () => {
          const [e, t] = (0, n.useState)("");
          return (
            (0, n.useEffect)(() => {
              const e = new i.y((e) => {
                o = e;
              }).subscribe({ next: (e) => t(e) });
              return () => e.unsubscribe();
            }, []),
            e
          );
        };
    },
    908319: (e, t, a) => {
      "use strict";
      a.d(t, { u: () => s });
      var n = a(593039),
        i = a(45272);
      const s = (e, t) => {
        const a = {
            [t.userCredentials]: n.PageView.ItemCredentialList,
            [t.userSecureNotes]: n.PageView.ItemSecureNoteList,
            [t.userSecrets]: n.PageView.ItemSecureNoteList,
            [t.userPersonalInfo]: n.PageView.ItemPersonalInfoList,
            [t.userPayments]: n.PageView.ItemPaymentList,
            [t.userIdsDocuments]: n.PageView.ItemIdList,
            [t.userPasswordHealth]: n.PageView.ToolsPasswordHealthOverview,
            [t.darkWebMonitoring]: n.PageView.ToolsDarkWebMonitoringList,
            [t.importData]: n.PageView.ImportSelectPasswordSource
          },
          s = Object.keys(a).find((t) => e.startsWith(t));
        s && (0, i.Nc)(a[s]);
      };
    },
    447614: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => o });
      var n = a(975077),
        i = a(435681),
        s = a(806193),
        r = a(957459);
      const o = (0, i.Z)("LOG", {
        ...(0, s.Z)(),
        flushLogsRequested: !1,
        desktopAnonymousComputerId: n.Q(document.cookie).anonid,
        device: (0, r.Z)(),
        websiteTrackingId: (() => {
          try {
            const e = n.Q(document.cookie);
            return JSON.parse(e.userFunnelCookie).trackingId;
          } catch (e) {
            return "";
          }
        })(),
        userAgent: window.navigator.userAgent
      });
    },
    182510: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => D });
      var n = a(139378),
        i = a(447614),
        s = a(806193);
      const r = i.Z.registerAction("SEND", (e) => Object.assign({}, e, (0, s.Z)())),
        o = i.Z.registerAction("SEND_WEBSITE_FAILURE", (e, t) => Object.assign({}, e, { website: e.website.concat(t) }));
      var l = a(160399),
        c = a(489618),
        d = a(287279),
        u = a(374301);
      class p extends u.Z {
        constructor(...e) {
          super(...e), (this.WSURL = "https://kck3hlb9.dashlane.com"), (this.WSVERSION = 1), (this.WSNAME = "websitelog");
        }
        create({ level: e, message: t, data: a }) {
          const n = Object.assign({}, a, { originLog: "leeloo" }),
            i = { level: e, message: t, data: JSON.stringify(n) };
          return this._makeRequest("websitelogs", i).then(() => null);
        }
      }
      var m = a(740300),
        g = a(176014);
      let h,
        x = {};
      const k = {
          website: {
            send: async (e, t) => {
              if (!1 === (await m.C.getGlobalExtensionSettings()).interactionDataConsent) return null;
              const a = await (async function () {
                if (!h)
                  try {
                    const e = (0, g.B)(),
                      t = await (0, l.z)(e.platformInfo.queries.platformInfo().pipe((0, c.V)(200)));
                    h = (0, d.d6)(t) ? (0, d.db)(t).appVersion : "unknown";
                  } catch {
                    h = "unknown";
                  }
                return h;
              })();
              return Promise.all(
                e.map((e) =>
                  (function (e, t, a) {
                    const n = e.message || "UNKNOWN_EXCEPTION";
                    if (((x[n] = x[n] || 0), x[n]++, !(x[n] > 10))) return a();
                    console.log("Exception sent too many times, stop reporting it", e);
                  })(e, 0, () =>
                    ((e, t, a) =>
                      new p()
                        .create({
                          level: "" + e.level,
                          message: e.message,
                          data: { ...e.content, version: a, userAgent: t.userAgent, sessionId: t.sessionId }
                        })
                        .then(() => null))(e, t, a)
                  )
                )
              ).then(() => null);
            },
            fail: o
          }
        },
        y = function (e, t, a, n) {
          e(r());
          const i = {
            desktopAnonymousComputerId: n.desktopAnonymousComputerId,
            device: n.device.toUpperCase(),
            websiteTrackingId: n.websiteTrackingId,
            anonymousUserId: t,
            sessionId: a,
            userAgent: n.userAgent
          };
          Object.keys(k)
            .filter((e) => n[e].length)
            .forEach((e) => {
              k[e].send(n[e], i).catch(() => {});
            });
        },
        M = (0, n.debounce)((0, n.throttle)(y, 3e3), 100),
        b = (e) =>
          Object.keys(k)
            .map((t) => e[t] && e[t].length)
            .reduce((e, t) => e + t),
        f = (e, t, a, n) => {
          b(n) && y(e, t, a, n);
        };
      var I = a(127521),
        N = a(814691);
      function D(e) {
        e.subscribe(() => {
          const t = e.getState().logs;
          if (t.flushLogsRequested) return f(e.dispatch, (0, I.n5)(e), (0, I.MQ)(e), t), void e.dispatch((0, N.pI)());
          !(function (e, t, a, n) {
            b(n) && M(e, t, a, n);
          })(e.dispatch, (0, I.n5)(e), (0, I.MQ)(e), t);
        });
      }
    },
    806193: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => n });
      const n = () => ({ website: [] });
    },
    973183: (e, t, a) => {
      "use strict";
      a.d(t, { FV: () => s, L1: () => r, wN: () => i });
      var n = a(75743);
      const i = n.Z.registerAction("ADD_NOTIFICATION", (e, t) => ({ ...e, list: e.list.filter((e) => e.key !== t.key).concat(t) })),
        s = n.Z.registerAction("REMOVE_NOTIFICATION", (e, t) => ({ ...e, list: e.list.filter((e) => e.key !== t) })),
        r = n.Z.registerAction("CLEAR_NOTIFICATIONS", (e) => ({ ...e, list: [] }));
    },
    75743: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => n });
      const n = (0, a(435681).Z)("NOTIFICATIONS", { list: [] });
    },
    207867: (e, t, a) => {
      "use strict";
      a.d(t, { j: () => s });
      var n = a(696832),
        i = a(228788);
      const s = (e) => {
        const { ignoredClassName: t, onOutsideClick: a, ...s } = e,
          r = n.useCallback(
            (e) => {
              if (!t) return void a(e);
              let n = e.target;
              const i = t.split(" ");
              for (; n; ) {
                if (i.find((e) => n?.classList?.contains(e))) return;
                n = n.parentElement;
              }
              a(e);
            },
            [t, a]
          );
        return n.createElement(i.default, { onOutsideClick: r, ...s });
      };
    },
    137205: (e, t, a) => {
      "use strict";
      a.d(t, { G: () => x });
      var n = a(696832),
        i = a(526849),
        s = a(724966),
        r = a(198187),
        o = a(386924),
        l = a(227257),
        c = a(357897),
        d = a(87065),
        u = a(530523),
        p = a(109462),
        m = a(536414),
        g = a(243978),
        h = a(238802);
      function x(e, t) {
        function a(e, t, a) {
          const { pages: n } = e;
          if (!n.get(a)) return e;
          const i = new Map(n);
          return i.set(a, t), { ...e, pages: i };
        }
        function x(e, t, a) {
          const n = new Map(e.pages);
          return n.set(a, t), { ...e, pages: n };
        }
        function k(e, t, a) {
          const n = [[a, t], ...e.pages],
            i = new Map(n);
          return { ...e, pages: i };
        }
        function y(e, t) {
          const a = new Map(e.pages);
          return a.delete(t), { ...e, pages: a };
        }
        return class extends n.Component {
          constructor(...t) {
            super(...t),
              (this.globalSubs = []),
              (this.configSubs = []),
              (this.liveSubs = new Map()),
              (this.defaultBatchesCount = 10),
              (this.state$ = void 0),
              (this.tokenParams$ = new s.X(this.props.tokenParams)),
              (this.loadNext$ = new r.x()),
              (this.loadPrevious$ = new r.x()),
              (this.initialState = { pages: new Map() }),
              (this.state = this.initialState),
              (this.hasNext = (e) => {
                const t = [...e.pages];
                if (0 === t.length) return !1;
                const [a, n] = t[t.length - 1];
                return !!a && "NotAsked" === n.type;
              }),
              (this.hasPrevious = (e) => {
                const t = [...e.pages];
                if (t.length < 2) return !1;
                const [a, n] = t[0];
                return !!a && "NotAsked" === n.type;
              }),
              (this.isLoading = (e) => {
                const t = [...e.pages];
                if (0 === t.length) return !1;
                const [, a] = t[t.length - 1],
                  [, n] = t[0];
                return "Loading" === a.type || "Loading" === n.type;
              }),
              (this.getBatches = () => {
                const { pages: e } = this.state;
                return new Map(
                  [...e].filter(([, e]) => "Success" === e.type).map(([e, t]) => [e, "Success" === t.type ? t.data.batch : []])
                );
              }),
              (this.loadNext = (e) => this.loadNext$.next(e)),
              (this.loadPrevious = (e) => this.loadPrevious$.next(e)),
              (this.getLastToken = (e) => {
                const t = [...e.pages.keys()];
                return t[t.length - 1];
              }),
              (this.getFirstToken = (e) => [...e.pages.keys()][0]),
              (this.loadFirstToken = (t, a) => {
                const { tokenEndpoint: n } = e,
                  i = n(a);
                (0, o.D)(i)
                  .pipe(
                    (0, c.M)(t),
                    (0, d.U)(([e, t]) => x(t, (0, h.Es)(), e))
                  )
                  .subscribe((e) => t.next(e));
              }),
              (this.subscribeToLiveBatch = (t, n) => {
                const { batchLiveEndpoint: i } = e,
                  s = new l.y((e) => i.on(n, (t) => e.next(t)))
                    .pipe(
                      (0, c.M)(t),
                      (0, d.U)(([e, t]) =>
                        (function (e, t, n) {
                          const { pages: i } = e,
                            s = i.get(n);
                          return s && "Success" === s.type ? a(e, (0, h.fs)({ ...s.data, batch: t }), n) : e;
                        })(t, e, n)
                      )
                    )
                    .subscribe((e) => t.next(e)),
                  r = this.liveSubs.get(n);
                r && r.unsubscribe(), this.liveSubs.set(n, s);
              }),
              (this.removePrependedNotAsked = (e) => {
                const { pages: t } = e;
                if (0 === t.size) return e;
                const a = [...t.keys()][0],
                  n = t.get(a);
                return n && "NotAsked" === n.type ? y(e, a) : e;
              }),
              (this.removeAppendedNotAsked = (e) => {
                const { pages: t } = e;
                if (0 === t.size) return e;
                const a = [...t.keys()],
                  n = a[a.length - 1],
                  i = t.get(n);
                return i && "NotAsked" === i.type ? y(e, n) : e;
              }),
              (this.unloadFirstPage = (e) => {
                if (0 === e.pages.size) return e;
                const t = this.removePrependedNotAsked(e);
                if (0 === t.pages.size) return t;
                const a = [...t.pages.keys()],
                  n = a[0];
                this.unsubscribeFromLiveBatch(n);
                const i = y(t, n),
                  s = i.pages.get(a[1]);
                if (!s || "Success" !== s.type) return i;
                const { prevToken: r } = s.data;
                return r ? k(i, (0, h.Es)(), r) : i;
              }),
              (this.unloadLastPage = (e) => {
                if (0 === e.pages.size) return e;
                const t = this.removeAppendedNotAsked(e);
                if (0 === t.pages.size) return t;
                const a = [...t.pages.keys()],
                  n = a[a.length - 1];
                this.unsubscribeFromLiveBatch(n);
                const i = y(t, n),
                  s = i.pages.get(a[a.length - 2]);
                if (!s || "Success" !== s.type) return i;
                const { nextToken: r } = s.data;
                return r ? x(i, (0, h.Es)(), r) : i;
              }),
              (this.requestPage = (0, i.curry)((e, t, n, i, s, r) => {
                const l = this.getPage(s);
                return (0, o.D)(l).pipe(
                  (0, c.M)(i),
                  (0, d.U)(([o, l]) => {
                    const c = a(l, o, s);
                    if ("Success" !== o.type) return c;
                    this.subscribeToLiveBatch(i, s);
                    const d = o.data[e],
                      u = d ? t(c, (0, h.Es)(), d) : c;
                    return [...u.pages.values()].filter((e) => "Success" === e.type).length > this.defaultBatchesCount && r ? n(u) : u;
                  })
                );
              })),
              (this.requestNextPage = this.requestPage("nextToken", x, this.unloadFirstPage)),
              (this.requestPreviousPage = this.requestPage("prevToken", k, this.unloadLastPage)),
              (this.subscribeToLoadNext = (e) =>
                this.loadNext$
                  .pipe(
                    (0, c.M)(e),
                    (0, u.h)(([, e]) => this.hasNext(e)),
                    (0, d.U)(([e, t]) => ({ canUnload: e, token: this.getLastToken(t) })),
                    (0, p.g)("token"),
                    (0, m.z)(({ canUnload: t, token: a }) => this.requestNextPage(e, a, t))
                  )
                  .subscribe((t) => e.next(t))),
              (this.subscribeToLoadPrevious = (e) =>
                this.loadPrevious$
                  .pipe(
                    (0, c.M)(e),
                    (0, u.h)(([, e]) => this.hasPrevious(e)),
                    (0, d.U)(([e, t]) => ({ canUnload: e, token: this.getFirstToken(t) })),
                    (0, p.g)("token"),
                    (0, m.z)(({ canUnload: t, token: a }) => this.requestPreviousPage(e, a, t))
                  )
                  .subscribe((t) => e.next(t))),
              (this.getStateObservableFromConfig = (e) => {
                const t = new s.X(this.initialState),
                  a = this.subscribeToLoadNext(t),
                  n = this.subscribeToLoadPrevious(t);
                return this.configSubs.push(a), this.configSubs.push(n), this.loadFirstToken(t, e), t;
              }),
              (this.getPage = async (t) => {
                const { pageEndpoint: a } = e;
                try {
                  const e = await a(t);
                  return (0, h.fs)(e);
                } catch (e) {
                  return (0, h.$l)(e);
                }
              }),
              (this.resetGlobalSubs = () => {
                this.globalSubs.forEach((e) => e.unsubscribe()), (this.globalSubs = []);
              }),
              (this.resetConfigSubs = () => {
                this.configSubs.forEach((e) => e.unsubscribe()), (this.configSubs = []);
              }),
              (this.getState$ = () => this.tokenParams$.pipe((0, g.w)(this.getStateObservableFromConfig))),
              (this.listenToStateUpdates = () => {
                this.state$ = this.getState$();
                const e = this.state$.subscribe((e) => this.setState(e));
                this.globalSubs.push(e);
              }),
              (this.listenToConfigChanges = () => {
                const e = this.tokenParams$.subscribe(() => {
                  this.resetConfigSubs(), this.unsubscribeFromAllLiveBatches();
                });
                this.globalSubs.push(e);
              }),
              (this.unsubscribeFromLiveBatch = (e) => {
                const t = this.liveSubs.get(e);
                t && (t.unsubscribe(), this.liveSubs.delete(e));
              }),
              (this.unsubscribeFromAllLiveBatches = () => {
                [...this.liveSubs.keys()].forEach(this.unsubscribeFromLiveBatch);
              });
          }
          componentDidMount() {
            this.init();
          }
          componentWillUnmount() {
            this.resetGlobalSubs(), this.resetConfigSubs(), this.unsubscribeFromAllLiveBatches();
          }
          componentDidUpdate(e) {
            const t = this.props.tokenParams;
            (0, i.equals)(e.tokenParams, t) || this.tokenParams$.next(t);
          }
          render() {
            const { ...e } = this.props,
              a = {
                ...e,
                hasNext: this.hasNext(this.state),
                hasPrevious: this.hasPrevious(this.state),
                isLoading: this.isLoading(this.state),
                loadNext: this.loadNext,
                loadPrevious: this.loadPrevious,
                paginatedData: this.getBatches()
              };
            return n.createElement(t, { ...a });
          }
          init() {
            this.listenToConfigChanges(), this.listenToStateUpdates();
          }
        };
      }
    },
    459152: (e, t, a) => {
      "use strict";
      a.d(t, { v: () => s });
      var n = a(696832),
        i = a(139378);
      const s = ({
        customContainer: e,
        throttle: t = 5,
        threshold: a = 400,
        hasNext: s,
        hasPrevious: r,
        loadNext: o,
        loadPrevious: l,
        isLoading: c,
        children: d
      }) => {
        const u = n.useRef(null),
          p = n.useRef(null),
          m = n.useRef(null),
          g = n.useRef(0),
          h = n.useCallback(
            () => (e?.current ? e.current : m.current ? m.current : void console.error("[InfiniteScroll] - container not registered")),
            [e]
          ),
          x = () => {
            if (u.current) return u.current;
            console.error("[InfiniteScroll] - bottomSentinel not registered");
          },
          k = n.useCallback(() => {
            const e = h()?.getBoundingClientRect().bottom,
              t = x()?.getBoundingClientRect().top;
            if (t && e) return t > e;
            console.error("[InfiniteScroll][fullPage] - Error retrieving bottomSentinel or container elements");
          }, [h]),
          y = n.useCallback(() => {
            const e = x()?.getBoundingClientRect().top,
              t = h()?.getBoundingClientRect().bottom;
            if (e && t) return e - t < a;
            console.error("[InfiniteScroll][reachingBottom] - Error retrieving bottomSentinel or container elements");
          }, [h, a]),
          M = n.useCallback(() => {
            const e = (() => {
                if (p.current) return p.current;
                console.error("[InfiniteScroll] - topSentinel not registered");
              })()?.getBoundingClientRect().bottom,
              t = h()?.getBoundingClientRect().top;
            if (e && t) return e + a > t;
            console.error("[InfiniteScroll][reachingTop] - Error retrieving topSentinelBottom or container elements");
          }, [h, a]),
          b = n.useCallback(() => {
            if (!c && s && y()) {
              const e = k();
              if (void 0 === e) return void console.error("[InfiniteScroll][checkNext] - Full page calcluation failed, unable to loadNext");
              o(e);
            }
          }, [c, s, y, o, k]),
          f = n.useCallback(() => {
            if (!c && r && M()) {
              const e = k();
              if (void 0 === e)
                return void console.error("[InfiniteScroll][checkPrevious] - Full page calcluation failed, unable to loadNext");
              l(e);
            }
          }, [c, r, M, l, k]),
          I = n.useCallback(() => {
            const e = x()?.getBoundingClientRect().top;
            if (!e) return void console.error("[InfiniteScroll][checkWindowScroll] - BottomSentinelTop calculation failed, returning.");
            const t = e < g.current;
            (g.current = e), t ? b() : f();
          }, [f, b]),
          N = n.useCallback(() => {
            b(), f();
          }, [b, f]);
        return (
          n.useEffect(() => {
            const e = (0, i.throttle)(I, t),
              a = (0, i.throttle)(N, t);
            return (
              h()?.addEventListener("scroll", e),
              h()?.addEventListener("resize", a),
              "object" == typeof window && window.addEventListener && window.addEventListener("resize", a),
              () => {
                h()?.removeEventListener("scroll", e),
                  h()?.removeEventListener("resize", a),
                  "object" == typeof window && window.removeEventListener && window.removeEventListener("resize", a);
              }
            );
          }, [e, h, t, I]),
          n.useEffect(() => {
            b();
          }, [e, m, p, u, c, s, b, d]),
          n.createElement(
            "ul",
            { className: "wrapper--yaKpDy2GWA", ref: m },
            n.createElement("li", { role: "none", ref: p }),
            d,
            n.createElement("li", { role: "none", ref: u })
          )
        );
      };
    },
    321501: (e, t, a) => {
      "use strict";
      a.d(t, { SO: () => n, Yh: () => i, q0: () => s });
      const n = 25,
        i = {
          0: "zxcvbn_weakest_password",
          1: "zxcvbn_weak_password",
          2: "zxcvbn_acceptable_password",
          3: "zxcvbn_good_password",
          4: "zxcvbn_awesome_password"
        },
        s = (e) => [0, 1, 2, 3, 4].includes(e);
    },
    30432: (e, t, a) => {
      "use strict";
      a.d(t, { R: () => s });
      var n = a(696832),
        i = a(321501);
      const s = () => {
        const [e, t] = (0, n.useState)(null),
          a = ((e) => !!e && e.score >= 2)(e);
        return {
          passwordStrength: e,
          resetPasswordStrength: () => {
            t(null);
          },
          setPasswordStrength: (e) => {
            const a = e.score / i.SO;
            t({ ...e, score: a });
          },
          isPasswordStrengthScore: i.q0,
          isPasswordStrongEnough: a
        };
      };
    },
    108403: (e, t, a) => {
      "use strict";
      a.d(t, { a9: () => x, nL: () => g, v0: () => h });
      var n = a(696832),
        i = a(242714),
        s = a(799852),
        r = a(133354),
        o = a(65255),
        l = a(252484),
        c = a(692077),
        d = a(413368),
        u = a(135361);
      const p = n.createContext({ openPaywall: () => {} }),
        m = "popup",
        g = () => n.useContext(p),
        h = () => {
          const e = (0, i.o)(o.w.B2CRestrictPasswordFreePlanPhase1),
            t = (0, s.k)(l.Z, "getPasswordLimitStatus");
          if ("boolean" != typeof e || t.status !== r.rq.Success) return { isLoading: !0 };
          const { hasLimit: a, passwordsLeft: n } = t.data;
          return e && a && void 0 !== n
            ? { isLoading: !1, shouldShowNearLimitContent: n > 0 && n <= 5, shouldShowAtOrOverLimitContent: n <= 0, passwordsLeft: n }
            : { isLoading: !1, shouldShowAtOrOverLimitContent: !1, shouldShowNearLimitContent: !1 };
        },
        x = ({ children: e }) => {
          const t = (0, c.TH)(),
            [a, i] = n.useState(m),
            [s, r] = n.useState(void 0),
            o = n.useCallback(() => {
              r(void 0), a && i(m);
            }, [a]);
          n.useEffect(() => {
            s && !Object.values(u.sW).includes(t.pathname) && o();
          }, [s, t, a, o]);
          const { current: l } = n.useRef({
            openPaywall: (e, t) => {
              r(e), t && i(t);
            }
          });
          return n.createElement(p.Provider, { value: l }, e, n.createElement(d.QR, { paywall: s, closePaywall: o, mode: a }));
        };
    },
    956854: (e, t, a) => {
      "use strict";
      a.d(t, { c: () => n });
      const n = (e) => (e?.periodicity && "other" !== e.periodicity ? e.periodicity : "yearly");
    },
    13403: (e, t, a) => {
      "use strict";
      a.d(t, { hX: () => r, q7: () => s, zi: () => i });
      var n = a(712369);
      const i = n.Z.registerAction("REGISTER_REDIRECT_PATH", (e, t) => ({ ...e, redirectPath: t })),
        s = n.Z.registerAction("REDIRECT_PATH_USED", (e) => ({ ...e, redirectPath: void 0, hasBeenRedirected: !0 })),
        r = n.Z.registerAction("CLEAR_REDIRECT_PATH", (e) => ({ ...e, redirectPath: void 0, hasBeenRedirected: !1 }));
    },
    572492: (e, t, a) => {
      "use strict";
      a.d(t, { O: () => c });
      var n = a(696832),
        i = a(692077),
        s = a(895980),
        r = a(13403),
        o = a(276376),
        l = a(952296);
      const c = () => {
        const e = (0, i.TH)(),
          t = `${e.pathname}${e.search}`,
          a = (0, o.Xo)();
        return (
          (0, s.a)(),
          n.useEffect(() => {
            if (a.store.getState().afterLogin.hasBeenRedirected) return;
            const e = (0, l.Ur)(t);
            e && a.store.dispatch((0, r.zi)(e));
          }, [a.store, t]),
          null
        );
      };
    },
    952296: (e, t, a) => {
      "use strict";
      a.d(t, { Ur: () => p, et: () => u });
      var n = a(65255),
        i = a(692077),
        s = a(13403),
        r = a(459522),
        o = a(714124),
        l = a(740300);
      const c = [r.SF, r.P, r.$F, r.Qz, r.w0, r.S, r.TT, r.bE, r.rM, r.Sm],
        d = (e, t, a) => {
          var i, s;
          const l = !1 === t.completedSteps?.onboardingHubShown,
            c = null != (i = a[n.w.SaexOnboardingHubAddPasswords]) && i;
          var d;
          e = (d = e) ? `${d.startsWith("/") ? "" : "/"}${d}`.replace(/\/$/, "") : "";
          const u = (null != (s = window?.location.href.split("#")?.[1]) ? s : "").includes("/console"),
            p = e.includes("/console");
          return e || u || p || !l || !c
            ? ((e, t, a) => {
                const n = e ? r.wi : "/";
                return a && e === t && a.startsWith(n) ? a : n;
              })(u, p, e)
            : ((m = window.location.href), (0, o.Sk)(m) ? r.rR : r.Nq);
          var m;
        },
        u = async (e) => {
          const { afterLogin: t } = e.getState(),
            { loggedIn: a } = await l.C.getUserLoginStatus();
          if (!a || t.hasBeenRedirected) return;
          const n = await l.C.getWebOnboardingMode(),
            r = await l.C.getFeatures(),
            { redirectPath: o = "" } = t,
            c = d(o, n, r);
          (0, i.uX)(c), e.dispatch((0, s.q7)());
        },
        p = (e) => {
          var t;
          return (t = e), c.some((e) => t.startsWith(e)) ? null : decodeURIComponent(e);
        };
    },
    712369: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => n });
      const n = (0, a(435681).Z)("DEEP_LNK", { hasBeenRedirected: !1 });
    },
    102984: (e, t, a) => {
      "use strict";
      a.d(t, { S: () => o, V: () => r });
      var n = a(696832),
        i = a(692077);
      const s = (e, t = "") =>
          Object.values(e)
            .flat()
            .map((e) => `${t}${e}`),
        r = (e) => {
          var t;
          const a = (0, i.TH)(),
            s = ((e, t) => {
              const a = Object.entries(e).reduce((e, a) => {
                if (e) return e;
                const [n, i] = a,
                  s = i.find((e) => t.startsWith(e));
                return s ? { route: n, alias: s } : null;
              }, null);
              return a ? t.replace(a.alias, a.route) : null;
            })(e.aliases, a.pathname.replace(null != (t = e.basePath) ? t : "", "")),
            r = s ? `${e.basePath}${s}${a.search}` : null;
          return r ? n.createElement(i.l_, { to: r }) : null;
        },
        o = (e = "") => ({
          basePath: e,
          path: s(
            {
              "/account-recovery/admin-assisted-recovery/change-master-password": ["/master-password-reset"],
              "/credentials": ["/passwords"],
              "/credentials/account-settings": ["/account-settings"],
              "/credentials/account-settings?view=devices": ["/devices"],
              "/credentials/account-settings?view=security-settings": ["/security-settings"],
              "/darkweb-monitoring": ["/dark-web-monitoring", "/security-dashboard"],
              "/ids": ["/id-documents"],
              "/ids/driver-licenses": ["/driver-licenses"],
              "/ids/fiscal-ids": ["/fiscals"],
              "/ids/id-cards": ["/id-cards"],
              "/ids/passports": ["/passports"],
              "/ids/social-security-ids": ["/social-security-numbers"],
              "/notifications": ["/sharing"],
              "/onboarding": ["/getting-started"],
              "/payments/bank-account": ["/bank-accounts"],
              "/payments/card": ["/credit-cards"],
              "/personal-info/addresses": ["/addresses"],
              "/personal-info/companies": ["/companies"],
              "/personal-info/emails": ["/emails"],
              "/personal-info/identities": ["/identities"],
              "/personal-info/phones": ["/phones"],
              "/personal-info": ["/websites"],
              "/secure-notes": ["/notes"],
              "/login?askmp": ["/askmp"]
            },
            e
          ),
          aliases: {
            "/account-recovery/admin-assisted-recovery/change-master-password": ["/master-password-reset"],
            "/credentials": ["/passwords"],
            "/credentials/account-settings": ["/account-settings"],
            "/credentials/account-settings?view=devices": ["/devices"],
            "/credentials/account-settings?view=security-settings": ["/security-settings"],
            "/darkweb-monitoring": ["/dark-web-monitoring", "/security-dashboard"],
            "/ids": ["/id-documents"],
            "/ids/driver-licenses": ["/driver-licenses"],
            "/ids/fiscal-ids": ["/fiscals"],
            "/ids/id-cards": ["/id-cards"],
            "/ids/passports": ["/passports"],
            "/ids/social-security-ids": ["/social-security-numbers"],
            "/notifications": ["/sharing"],
            "/onboarding": ["/getting-started"],
            "/payments/bank-account": ["/bank-accounts"],
            "/payments/card": ["/credit-cards"],
            "/personal-info/addresses": ["/addresses"],
            "/personal-info/companies": ["/companies"],
            "/personal-info/emails": ["/emails"],
            "/personal-info/identities": ["/identities"],
            "/personal-info/phones": ["/phones"],
            "/personal-info": ["/websites"],
            "/secure-notes": ["/notes"],
            "/login?askmp": ["/askmp"]
          }
        });
    },
    943280: (e, t, a) => {
      "use strict";
      a.d(t, { L: () => s });
      var n = a(696832),
        i = a(692077);
      const s = (e) => {
        const t = (0, i.TH)(),
          a = `${t.pathname}${t.search}`,
          s = a.replace("/new", "/add");
        return a !== s ? n.createElement(i.l_, { to: s }) : null;
      };
    },
    448547: (e, t, a) => {
      "use strict";
      a.d(t, { N: () => r });
      var n = a(696832),
        i = a(692077),
        s = a(459522);
      const r = (e) => {
        const t = (0, i.TH)(),
          a = (r = `${t.pathname}${t.search}`).includes("ssoToken=") && !r.includes(s.rM) ? `${s.rM}?${r.slice(1)}` : "";
        var r;
        return a ? n.createElement(i.l_, { to: a }) : null;
      };
    },
    343875: (e, t, a) => {
      "use strict";
      a.d(t, { Q: () => s, r: () => o });
      var n = a(696832),
        i = a(692077);
      const s = "{([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})}",
        r = new RegExp(s),
        o = (e) => {
          const t = (0, i.TH)();
          if (!r.exec(t.pathname)) return null;
          const a = `${t.pathname.replace(r, "$1")}${t.search}`;
          return n.createElement(i.l_, { to: a });
        };
    },
    238802: (e, t, a) => {
      "use strict";
      a.d(t, { $l: () => r, Es: () => i, Kv: () => n, fs: () => s });
      const n = () => ({ type: "Loading" }),
        i = () => ({ type: "NotAsked" }),
        s = (e) => ({ type: "Success", data: e }),
        r = (e) => ({ type: "Err", message: String(e) });
    },
    886662: (e, t, a) => {
      "use strict";
      a.d(t, { i: () => i });
      var n = a(696832);
      function i(e, t) {
        var a;
        return (
          ((a = class extends n.Component {
            constructor(...e) {
              super(...e),
                (this.getRemoteDataInProps = (e) => this.props[e]),
                (this.canRender = () => Object.keys(t.strategies).every((e) => "Success" === this.props[e].type)),
                (this.getValues = () => {
                  const e = {};
                  for (const a in t.strategies) {
                    const t = this.getRemoteDataInProps(a);
                    "Success" === t.type && (e[a] = t.data);
                  }
                  return e;
                }),
                (this.hasStatus = (e) => Object.keys(t.strategies).some((t) => this.props[t].type === e)),
                (this.getWrapperProps = () => {
                  const e = new Set(Object.keys(t.strategies));
                  return Object.keys(this.props)
                    .filter((t) => !e.has(t))
                    .reduce((e, t) => ({ ...e, [t]: this.props[t] }), {});
                }),
                (this.getFirstError = () => {
                  for (const e in t.strategies) {
                    const t = this.getRemoteDataInProps(e);
                    if ("Err" === t.type) return t.message;
                  }
                  return "";
                }),
                (this.getLoadingComponent = () => {
                  const { loadingComponent: e } = t;
                  return e ? ("function" == typeof e ? e(this.props) : e) : null;
                }),
                (this.getErrorComponent = (e) => {
                  const { errorComponent: a } = t;
                  return a ? ("function" == typeof a ? a(this.props, e) : a) : null;
                });
            }
            render() {
              if (this.hasStatus("Loading") || this.hasStatus("NotAsked")) return this.getLoadingComponent();
              if (this.hasStatus("Err")) {
                const e = this.getFirstError();
                return this.getErrorComponent(e);
              }
              if (this.canRender()) {
                const t = { ...this.getWrapperProps(), ...this.getValues() };
                return n.createElement(e, { ...t });
              }
              return null;
            }
          }).displayName = "RemoteDataAdapterWrapper"),
          a
        );
      }
    },
    276376: (e, t, a) => {
      "use strict";
      a.d(t, { Xo: () => r, v1: () => s });
      var n = a(696832);
      const i = n.createContext({
          host: "",
          basePath: "",
          store: { getState: () => ({ carbon: {} }) },
          reducer: {},
          translate: {},
          routes: {}
        }),
        s = i.Provider,
        r = () => (0, n.useContext)(i);
    },
    232535: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => x });
      var n = a(696832),
        i = a(15192),
        s = a(158432),
        r = a(805008),
        o = a(807371),
        l = a(526849);
      const c = [],
        d = (e, t) => (0, l.isEmpty)((0, l.symmetricDifference)(Array.isArray(e) ? e : [e], Array.isArray(t) ? t : [t])),
        u = (e, t) => {
          if (!e) throw new Error("Missing path when registering path and reducer");
          ((e, t, a) => e.some((e) => e.reducer === a && d(e.path, t)))(c, e, t) || c.push({ reducer: t, reducerKey: t.key, path: e });
        },
        p = (e, t) => {
          if (!t) throw new Error("Missing currentPath when making cursor");
          const a = [];
          return c
            .filter(({ path: e }) =>
              ((e, t) => (Array.isArray(e) ? d(e, t) : ((e, t) => (Array.isArray(t) ? t : [t]).some((t) => e.startsWith(t)))(e, t)))(t, e)
            )
            .map(({ reducer: e }) => (a.push(e.key), e))
            .reduce((e, t) => e.child(t), e);
        };
      var m = a(276376),
        g = a(459522);
      const h = {},
        x = (e) => {
          const t = (0, m.Xo)();
          return n.useMemo(
            () =>
              n.createElement(i.AW, { ...e }, (a) => {
                var l;
                if (!t || (!a.match && !e.stayMounted)) return null;
                const c = ((e, t) => {
                  var a;
                  const n = (0, s.J$)(e.store, e.reducer),
                    i = { carbonState: e.store.getState().carbon, cursor: n, translate: e.translate, routes: e.routes },
                    l = null != (a = t?.path) ? a : null;
                  return t.reducer ? (u(l, t.reducer), (0, o.Z)({ ...i, cursor: p(n, l) })) : (0, r.Z)(i);
                })(t, e);
                var d;
                if (e.permission && !e.permission(c.permission))
                  return n.createElement(i.l_, { to: null != (d = e.redirectPath) ? d : g.TT });
                const m = { ...a, lee: c, options: null != (l = e.options) ? l : h };
                return e.children(m);
              }),
            [e, t]
          );
        };
    },
    177650: (e, t, a) => {
      "use strict";
      a.d(t, { ZB: () => g, sc: () => m });
      var n = a(696832),
        i = a(383849),
        s = a.n(i),
        r = a(851285),
        o = a(480225),
        l = a(139632),
        c = a(232535);
      const d = {
        appear: "appear--ZMpWPDe2E7",
        appearActive: "appearActive--eTdu0AGVU8",
        enter: "enter--WCLCoWHoCw",
        enterActive: "enterActive--pGck5fAMGK",
        exit: "exit--yeaIGuZFq2",
        exitActive: "exitActive--DC1sVYha6Q"
      };
      var u = a(899877),
        p = a(168783);
      const m = 300,
        g = n.memo((e) => {
          const { component: t, additionalProps: a, ...i } = e;
          return n.createElement(c.A, { ...i, stayMounted: !0 }, (e) => {
            const i = !!e.match,
              c = document.getElementById("side-panel-portal");
            return c
              ? (0, r.createPortal)(
                  n.createElement(
                    n.Fragment,
                    null,
                    i && n.createElement("div", { className: p.Z.overlay }),
                    n.createElement(
                      "div",
                      { className: s()(u.Z.parentSlider, { [u.Z.parentSliderOpen]: i }) },
                      n.createElement(
                        o.Z,
                        null,
                        i &&
                          n.createElement(
                            l.Z,
                            { key: e.location.pathname, classNames: d, timeout: m },
                            t ? n.createElement(t, { ...e, ...a }) : n.createElement("div", { ...e, ...a })
                          )
                      )
                    )
                  ),
                  c
                )
              : null;
          });
        });
    },
    692077: (e, t, a) => {
      "use strict";
      a.d(t, {
        Vy: () => o,
        rU: () => n.rU,
        OL: () => n.OL,
        TX: () => p,
        ZB: () => l.ZB,
        NL: () => i.NL,
        l_: () => i.l_,
        AW: () => i.AW,
        F0: () => i.F0,
        v1: () => u.v1,
        rs: () => i.rs,
        GB: () => c,
        NW: () => k,
        CN: () => M,
        zN: () => y,
        uX: () => x,
        JB: () => h,
        k6: () => i.k6,
        TH: () => i.TH,
        UO: () => i.UO,
        $B: () => i.$B,
        Xo: () => u.Xo
      });
      var n = a(29270),
        i = a(15192),
        s = a(696832),
        r = a(232535);
      const o = s.memo((e) => {
        const { component: t = "div", additionalProps: a, ...n } = e;
        return s.createElement(r.A, { ...n }, (e) => s.createElement(t, { ...e, ...a }));
      });
      var l = a(177650);
      const c = s.memo((e) => {
        const { children: t, component: a = "div", additionalProps: n, ...i } = e;
        return s.createElement(r.A, { ...i }, ({ staticContext: e, ...i }) => {
          const r = "div" === a ? i : { ...i, staticContext: e };
          return s.createElement(a, { ...r, ...n }, t);
        });
      });
      var d,
        u = a(276376);
      const p = () => d || (d = s.createElement(i.l_, { to: "/" }));
      let m = null;
      const g = { push: !0 },
        h = (e) => {
          m = e;
        },
        x = (e, t = g) => {
          m && (t.push ? m.push(e) : m.replace(e));
        },
        k = (e = window.location.href) => {
          const t = e.replace("#/", "/");
          return new URL(t).search;
        },
        y = (e) => new URLSearchParams(e),
        M = (e = window.location.href) => {
          const t = k(e);
          return y(t);
        };
    },
    491198: (e, t, a) => {
      "use strict";
      a.d(t, { _: () => n });
      let n = (function (e) {
        return (e.ascending = "ascending"), (e.descending = "descending"), e;
      })({});
    },
    718835: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => r });
      const n = {},
        i = {},
        s = {
          bkgGrey: "",
          bkgGreyDarker: "",
          bkgGreyDarkest: "",
          bkgGreyLighter: "",
          bkgTealDark: "",
          bkgTealMed: "",
          black20percent: "",
          black25percent: "",
          black60percent: "",
          white75percent: "",
          callToAction: "",
          fontfamilyMonospace: "",
          fontfamilyTac: "",
          fontfamilyWebapp: "",
          textBlack: "",
          textGreen: "",
          textGrey: "",
          textGreyDark: "",
          textGreyDarker: "",
          textGreyLighter: "",
          textGreyLightest: "",
          textRed: "",
          textTeal: "",
          webappAccentTeal: "",
          webappActiveLink: "",
          webappBackgroundGreyDarker: "",
          webappBackgroundOk: "",
          webappCredentialLogoBorder: "",
          webappTextBlack: "",
          webappTextLightgrey: "",
          bkgWebappAccountCreationHeader: "",
          backgroundGrey: "",
          black: "",
          blueberryBlue: "",
          blueberryBlueDark1: "",
          blueberryBlueDark2: "",
          blueberryBlueDark3: "",
          blueberryBlueDark4: "",
          blueberryBlueDark5: "",
          blueberryBlueLight1: "",
          blueberryBlueLight2: "",
          blueberryBlueLight3: "",
          blueberryBlueLight4: "",
          blueberryBlueLight5: "",
          cobaltYellow: "",
          cobaltYellowDark1: "",
          cobaltYellowDark2: "",
          cobaltYellowLight1: "",
          cobaltYellowLight2: "",
          darkGrey: "",
          deepMagenta: "",
          deepMagentaDark1: "",
          deepMagentaDark2: "",
          deepMagentaDark3: "",
          deepMagentaDark4: "",
          deepMagentaDark5: "",
          deepMagentaLight1: "",
          deepMagentaLight2: "",
          deepMagentaLight3: "",
          deepMagentaLight4: "",
          deepMagentaLight5: "",
          grey: "",
          highlightGrey: "",
          intenseOrange: "",
          intenseOrangeDark1: "",
          intenseOrangeDark2: "",
          intenseOrangeDark3: "",
          intenseOrangeDark4: "",
          intenseOrangeDark5: "",
          intenseOrangeLight1: "",
          intenseOrangeLight2: "",
          intenseOrangeLight3: "",
          intenseOrangeLight4: "",
          intenseOrangeLight5: "",
          lightGrey: "",
          skyBlue: "",
          skyBlueDark1: "",
          skyBlueDark2: "",
          skyBlueDark3: "",
          skyBlueDark4: "",
          skyBlueDark5: "",
          skyBlueLight1: "",
          skyBlueLight2: "",
          skyBlueLight3: "",
          skyBlueLight4: "",
          skyBlueLight5: "",
          teal: "",
          tealDark1: "",
          tealDark1Accent: "",
          tealDark2: "",
          tealDark3: "",
          tealDark4: "",
          tealDark5: "",
          tealLight1: "",
          tealLight2: "",
          tealLight3: "",
          tealLight4: "",
          tealLight5: "",
          vibrantGreen: "",
          vibrantGreenDark1: "",
          vibrantGreenDark2: "",
          vibrantGreenDark3: "",
          vibrantGreenDark4: "",
          vibrantGreenDark5: "",
          vibrantGreenLight1: "",
          vibrantGreenLight2: "",
          vibrantGreenLight3: "",
          vibrantGreenLight4: "",
          vibrantGreenLight5: "",
          warningRed: "",
          warningRedDark1: "",
          warningRedDark2: "",
          warningRedLight1: "",
          warningRedLight2: "",
          white: ""
        };
      Object.keys(n)
        .filter((e) => e.startsWith("--dashlane-"))
        .forEach((e) => {
          const t = e.replace(/^--dashlane-/, "").replace(/-[a-z0-9]/g, (e) => e.substr(1).toUpperCase());
          t in s && (s[t] = n[e]);
        }),
        Object.keys(i).forEach((e) => {
          const t = e.replace(/^--/, "").replace(/-[a-z0-9]/g, (e) => e.substr(1).toUpperCase());
          t in s && (s[t] = i[e]);
        });
      const r = s;
    },
    61890: (e, t, a) => {
      "use strict";
      a.d(t, { g: () => n });
      const n = { PLAYSTORE: "https://play.google.com/store/account/subscriptions", APPLE: "https://support.apple.com/HT202039" };
    },
    853049: () => {
      window.addEventListener(
        "touchstart",
        function e() {
          (document.body.className += " has-touch"), window.removeEventListener("touchstart", e);
        },
        !1
      );
    },
    198983: (e, t, a) => {
      "use strict";
      a.d(t, { b: () => k });
      var n = a(696832),
        i = a(876307),
        s = a(242714),
        r = a(65255),
        o = a(581598),
        l = a(777550),
        c = a(115607),
        d = a(68691),
        u = a(488203),
        p = a(909673),
        m = a(119471),
        g = a(170226),
        h = a(651937);
      const x = "trial_banner_buy_dashlane",
        k = () => {
          const e = (0, p.w)(),
            t = (0, l.B)(),
            a = (0, c.lZ)(),
            k = (0, d.C)(),
            y = (0, s.o)(r.w.EcommerceWebB2BDiscontinuationPhase1),
            { translate: M } = (0, u.Z)();
          if (!k || "boolean" != typeof y || a.isLoading) return null;
          const b = k.spaceTier === o.lD.Team,
            f = k.spaceTier === o.lD.Business,
            { isTeamSoftDiscontinued: I, isTrial: N } = a;
          if (!k.isFreeTrial) return null;
          if (!b && !f) return null;
          if (!y && I) return null;
          const D = k.daysLeftInTrial,
            T = `button:buy_dashlane+click_origin:banner+origin_page:${e || void 0}+origin_component:main_app`,
            A = `${m.ub}?plan=${b ? "team" : "business"}&subCode=${t?.subscriptionCode}&utm_source=${T}`,
            E = (() => {
              if (I && N)
                return {
                  sxStyle: (0, i.jM)([h.L.BANNER, h.L.DISCONTINUED]),
                  mainText: M("trial_banner_plan_discontinued"),
                  linkText: M(x),
                  testId: "plan-discontinued-banner"
                };
              if (k.isGracePeriod)
                return {
                  sxStyle: (0, i.jM)([h.L.BANNER, h.L.GRACE_PERIOD]),
                  mainText:
                    1 === D
                      ? M.markup("trial_banner_1_day_left_grace_period_extended_markup")
                      : M.markup("trial_banner_other_days_left_grace_period_extended_markup", { daysLeft: D }),
                  linkText: M(b ? "trial_banner_buy_dashlane_team" : "trial_banner_buy_dashlane_business"),
                  testId: "grace-period-banner"
                };
              const e = (0, i.jM)([h.L.BANNER, k.isSecondStageOfTrial ? h.L.FREE_TRIAL_STAGE_TWO : h.L.FREE_TRIAL_STAGE_ONE]);
              let t;
              return (
                (t = b
                  ? 1 === D
                    ? M.markup("trial_banner_1_day_left_team_free_trial_markup")
                    : M.markup("trial_banner_other_days_left_team_free_trial_markup", { daysLeft: D })
                  : 1 === D
                  ? M.markup("trial_banner_1_day_left_business_free_trial_markup")
                  : M.markup("trial_banner_other_days_left_business_free_trial_markup", { daysLeft: D })),
                { sxStyle: e, mainText: t, linkText: M(x), testId: "free-trial-banner" }
              );
            })();
          return E
            ? (0, i.tZ)(
                n.Fragment,
                null,
                (0, i.tZ)(
                  "div",
                  { sx: E.sxStyle, "data-testid": E.testId },
                  (0, i.tZ)("span", null, E.mainText),
                  (0, i.tZ)("a", { href: A, key: E.linkText, target: "_blank", rel: "noopener noreferrer", onClick: g.U_ }, E.linkText)
                )
              )
            : null;
        };
    },
    157829: (e, t, a) => {
      "use strict";
      a.d(t, { I: () => h });
      var n = a(696832),
        i = a(148038),
        s = a(876307),
        r = a(242714),
        o = a(65255),
        l = a(459522),
        c = a(115607),
        d = a(777550),
        u = a(488203),
        p = a(170226),
        m = a(651937);
      const g = o.w.B2CWebPostTrialBanner,
        h = () => {
          var e, t, a;
          const { translate: o } = (0, u.Z)(),
            h = (0, d.B)(),
            x = `${l.G9}?subCode=${null != (e = h?.subscriptionCode) ? e : ""}`,
            k = (0, c.JS)(),
            y = k.status === i.rq.Success && k.data ? k.data : null,
            M = (0, r.o)(g);
          if (!y) return null;
          const b = (0, p.PY)(null != (t = y.endDateUnix) ? t : 0),
            f = (0, p.GH)(null != (a = y.previousPlan?.endDateUnix) ? a : 0);
          return (0, s.tZ)(
            n.Fragment,
            null,
            y.isTrial
              ? (0, s.tZ)(
                  "div",
                  { sx: (0, s.jM)([m.L.BANNER, m.L.FREE_TRIAL_STAGE_ONE]) },
                  (0, s.tZ)(
                    "span",
                    null,
                    1 === b
                      ? o.markup("trial_banner_b2c_free_trial_1_day_left_markup")
                      : o.markup("trial_banner_b2c_free_trial_other_days_left_markup", { daysLeft: b })
                  ),
                  (0, s.tZ)(
                    "a",
                    { sx: m.L.LINK, href: x, target: "_blank", rel: "noopener noreferrer", onClick: p.U_ },
                    o("trial_banner_buy_dashlane")
                  )
                )
              : null,
            M && f >= 1 && f <= 15
              ? (0, s.tZ)(
                  "div",
                  { sx: (0, s.jM)([m.L.BANNER, m.L.GRACE_PERIOD]) },
                  (0, s.tZ)(
                    "span",
                    null,
                    1 === f ? o("b2c_post_trial_banner_1_day_expired") : o("b2c_post_trial_banner_other_days_expired", { daysExpired: f })
                  ),
                  (0, s.tZ)(
                    "a",
                    { sx: m.L.LINK, href: x, target: "_blank", rel: "noopener noreferrer", onClick: p.U_ },
                    o("b2c_post_trial_banner_buy_dashlane")
                  )
                )
              : null
          );
        };
    },
    651937: (e, t, a) => {
      "use strict";
      a.d(t, { L: () => n });
      const n = {
        BANNER: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "13px",
          lineHeight: "18px",
          fontWeight: "400",
          width: "100%",
          height: "34px",
          gap: "4px",
          zIndex: "3"
        },
        FREE_TRIAL_STAGE_ONE: {
          backgroundColor: "ds.container.expressive.brand.catchy.idle",
          color: "ds.text.inverse.catchy",
          "> a": { color: "ds.text.inverse.catchy" }
        },
        FREE_TRIAL_STAGE_TWO: {
          backgroundColor: "ds.container.expressive.brand.quiet.idle",
          color: "ds.text.brand.standard",
          "> a": { color: "ds.text.brand.standard" }
        },
        GRACE_PERIOD: {
          backgroundColor: "ds.container.expressive.warning.catchy.idle",
          color: "ds.text.inverse.catchy",
          "> a": { color: "ds.text.inverse.catchy" }
        },
        DISCONTINUED: {
          backgroundColor: "ds.container.expressive.danger.quiet.idle",
          color: "ds.text.danger.standard",
          "> a": { color: "ds.text.danger.standard" }
        }
      };
    },
    170226: (e, t, a) => {
      "use strict";
      a.d(t, { GH: () => l, PY: () => o, U_: () => c, _P: () => d });
      var n = a(850793),
        i = a(210994),
        s = a(593039),
        r = a(45272);
      const o = (e) => (0, n.Z)((0, i.Z)(e), new Date()),
        l = (e) => Math.abs(o(e)),
        c = () => {
          (0, r.Kz)(new s.UserClickEvent({ button: s.Button.BuyDashlane, clickOrigin: s.ClickOrigin.Banner }));
        },
        d = (e) => {
          (0, r.Kz)(
            new s.UserCallToActionEvent({
              callToActionList: [s.CallToAction.PayWithCreditCard, s.CallToAction.PayByInvoice, s.CallToAction.Dismiss],
              chosenAction: e,
              hasChosenNoAction: !1
            })
          );
        };
    },
    618854: (e, t, a) => {
      "use strict";
      a.d(t, { XA: () => z, s9: () => _ });
      var n = a(696832),
        i = a(876307),
        s = a(593039),
        r = a(242714),
        o = a(482598),
        l = a(995445),
        c = a(133354),
        d = a(287279),
        u = a(375062),
        p = a(551453),
        m = a(581598),
        g = a(65255),
        h = a(115607),
        x = a(68691),
        k = a(45272),
        y = a(692077),
        M = a(777550),
        b = a(561605),
        f = a(488203),
        I = a(119471);
      const N = { ITEM: { display: "flex", flexDirection: "row", alignItems: "center" } },
        D = ({ iconName: e, title: t, subtitle: a }) => {
          const { translate: n } = (0, f.Z)();
          return (0, i.tZ)(
            "div",
            { sx: N.ITEM },
            (0, i.tZ)(i.JO, { name: e, size: "xlarge" }),
            (0, i.tZ)(
              "div",
              { sx: { padding: "10px" } },
              (0, i.tZ)(i.nv, { textStyle: "ds.title.block.medium", sx: { marginBottom: "5px" } }, n(t)),
              (0, i.tZ)(i.nv, { textStyle: "ds.body.reduced.regular" }, n(a))
            )
          );
        },
        T = ({ isOpen: e, handleClose: t, handleExtendTrial: a, isTeamPlan: r }) => {
          const { translate: l } = (0, f.Z)(),
            c = (0, M.B)(),
            d = (0, o.u)(u.t),
            p = `${I.ub}?plan=${r ? "team" : "business"}&subCode=${c?.subscriptionCode}`;
          return (
            (0, n.useEffect)(() => {
              e && (0, k.Nc)(s.PageView.TacModalTrialExpiresToday);
            }, [e]),
            (0, i.tZ)(
              i.Vq,
              {
                isOpen: e,
                onClose: t,
                title: l(r ? "team_dashboard_extend_trial_dialog_title_team" : "team_dashboard_extend_trial_dialog_title_business"),
                closeActionLabel: l("_common_dialog_dismiss_button"),
                actions: {
                  primary: {
                    children: l("team_dashboard_buy_dashlane_button"),
                    onClick: () => {
                      (0, k.Kz)(
                        new s.UserCallToActionEvent({
                          callToActionList: [s.CallToAction.ExtendTrial, s.CallToAction.BuyDashlane, s.CallToAction.Dismiss],
                          chosenAction: s.CallToAction.BuyDashlane,
                          hasChosenNoAction: !1
                        })
                      ),
                        d.markOfferToExtendFreeTrialSeen(),
                        (0, b.Yo)(p);
                    }
                  },
                  secondary: { children: l("team_dashboard_extend_trial_button"), onClick: a }
                }
              },
              (0, i.tZ)(i.nv, { sx: { marginBottom: "25px" } }, l("team_dashboard_extend_trial_dialog_subtitle")),
              (0, i.tZ)(D, {
                iconName: "ToolsOutlined",
                title: r ? "team_dashboard_extend_trial_dialog_core_features_title" : "team_dashboard_extend_trial_dialog_sso_title",
                subtitle: r
                  ? "team_dashboard_extend_trial_dialog_core_features_subtitle"
                  : "team_dashboard_extend_trial_dialog_sso_subtitle"
              }),
              (0, i.tZ)(D, {
                iconName: r ? "FeatureVpnOutlined" : "GroupOutlined",
                title: r ? "team_dashboard_extend_trial_dialog_vpn_title" : "team_dashboard_extend_trial_dialog_family_friends_title",
                subtitle: r
                  ? "team_dashboard_extend_trial_dialog_vpn_subtitle"
                  : "team_dashboard_extend_trial_dialog_family_friends_subtitle"
              })
            )
          );
        },
        A = ({ isOpen: e, handleClose: t }) => {
          const { translate: a } = (0, f.Z)(),
            [r, o] = (0, n.useState)({
              [s.PossibleFormAnswers.NeedMoreTimeTeamUsage]: !1,
              [s.PossibleFormAnswers.NeedMoreTimeConvince]: !1,
              [s.PossibleFormAnswers.NotAwareTrialEnding]: !1,
              [s.PossibleFormAnswers.NeedHelpSso]: !1,
              [s.PossibleFormAnswers.NeedHelpScim]: !1,
              [s.PossibleFormAnswers.NeedSalesRep]: !1,
              [s.PossibleFormAnswers.Other]: !1
            });
          (0, n.useEffect)(() => {
            e && (0, k.Nc)(s.PageView.TacModalReasonsToExtendTrial);
          }, [e]);
          const l = (e) => {
            const t = !r[e];
            o({ ...r, [e]: t });
          };
          return (0, i.tZ)(
            i.Vq,
            {
              isOpen: e,
              isMandatory: !0,
              onClose: () => {
                (0, k.Kz)(
                  new s.UserCallToActionEvent({ callToActionList: [s.CallToAction.Skip, s.CallToAction.Send], hasChosenNoAction: !0 })
                ),
                  t();
              },
              title: a("team_trial_extension_survey_title"),
              actions: {
                primary: {
                  children: a("team_trial_extension_survey_button_send"),
                  onClick: () => {
                    (0, k.Kz)(
                      new s.UserCallToActionEvent({
                        callToActionList: [s.CallToAction.Skip, s.CallToAction.Send],
                        chosenAction: s.CallToAction.Send,
                        hasChosenNoAction: !1
                      })
                    ),
                      (0, k.Kz)(
                        new s.UserSubmitInProductFormAnswerEvent({
                          formName: s.FormName.ReasonToExtendTrial,
                          answerList: [
                            s.PossibleFormAnswers.NeedMoreTimeTeamUsage,
                            s.PossibleFormAnswers.NeedMoreTimeConvince,
                            s.PossibleFormAnswers.NotAwareTrialEnding,
                            s.PossibleFormAnswers.NeedHelpSso,
                            s.PossibleFormAnswers.NeedHelpScim,
                            s.PossibleFormAnswers.NeedSalesRep,
                            s.PossibleFormAnswers.Other
                          ],
                          chosenAnswerList: Object.keys(r).filter((e) => r[e])
                        })
                      ),
                      t();
                  }
                },
                secondary: {
                  children: a("team_trial_extension_survey_button_skip"),
                  onClick: () => {
                    (0, k.Kz)(
                      new s.UserCallToActionEvent({
                        callToActionList: [s.CallToAction.Skip, s.CallToAction.Send],
                        chosenAction: s.CallToAction.Skip,
                        hasChosenNoAction: !1
                      })
                    ),
                      t();
                  }
                }
              },
              closeActionLabel: a("_common_dialog_dismiss_button")
            },
            (0, i.tZ)(i.nv, { sx: { marginBottom: "20px" }, as: "h2" }, a.markup("team_trial_extension_survey_subtitle_markup")),
            (0, i.tZ)(i.nv, { sx: { marginBottom: "10px" }, as: "h3" }, a("team_trial_extension_survey_options_title")),
            (0, i.tZ)(
              "div",
              { sx: { display: "flex", flexDirection: "column", gap: "20px" } },
              (0, i.tZ)(i.XZ, {
                label: a("team_trial_extension_survey_option_time_for_team"),
                checked: r.need_more_time_team_usage,
                onChange: () => l(s.PossibleFormAnswers.NeedMoreTimeTeamUsage)
              }),
              (0, i.tZ)(i.XZ, {
                label: a("team_trial_extension_survey_option_time_for_decision_maker"),
                checked: r.need_more_time_convince,
                onChange: () => l(s.PossibleFormAnswers.NeedMoreTimeConvince)
              }),
              (0, i.tZ)(i.XZ, {
                label: a("team_trial_extension_survey_option_unaware"),
                checked: r.not_aware_trial_ending,
                onChange: () => l(s.PossibleFormAnswers.NotAwareTrialEnding)
              }),
              (0, i.tZ)(i.XZ, {
                label: a("team_trial_extension_survey_option_help_sso"),
                checked: r.need_help_sso,
                onChange: () => l(s.PossibleFormAnswers.NeedHelpSso)
              }),
              (0, i.tZ)(i.XZ, {
                label: a("team_trial_extension_survey_option_help_scim"),
                checked: r.need_help_scim,
                onChange: () => l(s.PossibleFormAnswers.NeedHelpScim)
              }),
              (0, i.tZ)(i.XZ, {
                label: a("team_trial_extension_survey_option_sales_rep"),
                checked: r.need_sales_rep,
                onChange: () => l(s.PossibleFormAnswers.NeedSalesRep)
              }),
              (0, i.tZ)(i.XZ, {
                sx: { marginBottom: "8px" },
                label: a("team_trial_extension_survey_option_other"),
                checked: r.other,
                onChange: () => l(s.PossibleFormAnswers.Other)
              })
            )
          );
        };
      var E = a(210994),
        v = a(799852),
        w = a(616782);
      const C = ({ onClose: e, primaryActionLabel: t, primaryActionOnClick: a, secondaryActionLabel: r, secondaryActionOnClick: o }) => {
          const { translate: l } = (0, f.Z)(),
            { shortDate: d } = l,
            u = (0, v.k)(p.o, "getTeamBillingInformation"),
            g = u.status === c.rq.Success && u.data ? u.data : null;
          if (
            ((0, n.useEffect)(() => {
              g && (0, k.Nc)(s.PageView.TacModalTrialHasBeenExtended);
            }, [g]),
            !g)
          )
            return null;
          const h = g.spaceTier === m.lD.Team,
            x = g.nextBillingDetails.dateUnix,
            y = g.daysLeftUntilNextBillingPeriod,
            M = d((0, E.Z)(x), w._T.LL);
          return (0, i.tZ)(
            i.Vq,
            {
              closeActionLabel: l("_common_dialog_dismiss_button"),
              onClose: e,
              isOpen: !0,
              title: l("team_trial_extended_dialog_title"),
              actions: { primary: { children: t, onClick: a }, secondary: { children: r, onClick: o } }
            },
            (0, i.tZ)(
              i.nv,
              { textStyle: "ds.body.standard.strong", sx: { marginBottom: "5px" } },
              l(h ? "team_trial_extended_dialog_days_left_team_plan" : "team_trial_extended_dialog_days_left", { count: y })
            ),
            (0, i.tZ)(i.nv, { textStyle: "ds.body.standard.regular" }, l("team_trial_extended_dialog_description_date", { endDate: M }))
          );
        },
        j = ({ isOpen: e, onClose: t }) => {
          const { translate: a } = (0, f.Z)();
          return e
            ? (0, i.tZ)(C, {
                onClose: t,
                primaryActionLabel: a("team_trial_extended_dialog_close_button"),
                primaryActionOnClick: t,
                secondaryActionLabel: a("team_trial_extended_dialog_see_plans_button"),
                secondaryActionOnClick: () => {
                  (0, k.Kz)(
                    new s.UserCallToActionEvent({
                      callToActionList: [s.CallToAction.SeeAllPlans, s.CallToAction.Close, s.CallToAction.Dismiss],
                      chosenAction: s.CallToAction.SeeAllPlans,
                      hasChosenNoAction: !1
                    })
                  ),
                    (0, b.Yo)(I.tz);
                }
              })
            : null;
        },
        S = ({ isOpen: e, onClose: t, isTeamPlan: a }) => {
          const { translate: n } = (0, f.Z)(),
            r = (0, M.B)(),
            l = (0, o.u)(u.t),
            c = `${I.ub}?plan=${a ? "team" : "business"}&subCode=${r?.subscriptionCode}`;
          return e
            ? (0, i.tZ)(C, {
                onClose: t,
                primaryActionLabel: n("team_trial_extended_dialog_buy_dashlane_button"),
                primaryActionOnClick: () => {
                  (0, k.Kz)(
                    new s.UserCallToActionEvent({
                      callToActionList: [s.CallToAction.BuyDashlane, s.CallToAction.Dismiss],
                      chosenAction: s.CallToAction.BuyDashlane,
                      hasChosenNoAction: !1
                    })
                  ),
                    l.markNotificationTrialExtendedSeen(),
                    (0, b.Yo)(c);
                },
                secondaryActionLabel: n("team_trial_extended_dialog_dismiss_button"),
                secondaryActionOnClick: t
              })
            : null;
        },
        L = g.w.EcommerceWebOfferToExtendPhase1;
      let _ = (function (e) {
        return (
          (e.NONE = "none"),
          (e.EXTEND_TRIAL = "extendTrial"),
          (e.SURVEY = "survey"),
          (e.TRIAL_EXTENDED_CONFIRMATION = "trialExtendedConfirmation"),
          (e.TRIAL_EXTENDED_NOTIFICATION = "trialExtendedNotification"),
          e
        );
      })({});
      const z = ({ initialDialog: e }) => {
        const [t, a] = (0, n.useState)(null != e ? e : _.NONE),
          g = !!(0, r.o)(L),
          M = (0, o.u)(u.t),
          b = (0, o.u)(p.o),
          f = (0, x.C)(),
          I = (0, l.Y)(u.t, { hasSeenOfferToExtendFreeTrial: {}, hasSeenNotificationTrialExtended: {} }, []),
          N = (0, h.lZ)(),
          D = (0, y.CN)().get("extendTrialStep"),
          E = !!D && "true" === D,
          v = I.hasSeenOfferToExtendFreeTrial.status === c.rq.Success ? I.hasSeenOfferToExtendFreeTrial.data : null,
          w = I.hasSeenNotificationTrialExtended.status === c.rq.Success ? I.hasSeenNotificationTrialExtended.data : null,
          C = f && !N.isLoading && null !== v && null !== w;
        if (
          ((0, n.useEffect)(() => {
            C &&
              f.isFreeTrial &&
              !1 === N.isTeamSoftDiscontinued &&
              (f.isGracePeriod || 0 !== f.daysLeftInTrial || (E ? a(_.SURVEY) : v || a(_.EXTEND_TRIAL)),
              f.isGracePeriod && !w && a(_.TRIAL_EXTENDED_NOTIFICATION));
          }, [C, w, v, E, N, f]),
          !C)
        )
          return null;
        if (!g || N.isTeamSoftDiscontinued) return null;
        const z = f.spaceTier === m.lD.Team;
        return (0, i.tZ)(
          n.Fragment,
          null,
          (0, i.tZ)(T, {
            isOpen: t === _.EXTEND_TRIAL,
            handleClose: () => {
              (0, k.Kz)(
                new s.UserCallToActionEvent({
                  callToActionList: [s.CallToAction.ExtendTrial, s.CallToAction.BuyDashlane, s.CallToAction.Dismiss],
                  chosenAction: s.CallToAction.Dismiss,
                  hasChosenNoAction: !1
                })
              ),
                M.markOfferToExtendFreeTrialSeen(),
                a(_.NONE);
            },
            isTeamPlan: z,
            handleExtendTrial: () => {
              (0, k.Kz)(
                new s.UserCallToActionEvent({
                  callToActionList: [s.CallToAction.ExtendTrial, s.CallToAction.BuyDashlane, s.CallToAction.Dismiss],
                  chosenAction: s.CallToAction.ExtendTrial,
                  hasChosenNoAction: !1
                })
              ),
                M.markOfferToExtendFreeTrialSeen(),
                M.markNotificationTrialExtendedSeen(),
                a(_.SURVEY);
            }
          }),
          (0, i.tZ)(A, {
            isOpen: t === _.SURVEY,
            handleClose: () => {
              b.extendFreeTrial().then((e) => {
                (0, d.d6)(e)
                  ? (a(_.TRIAL_EXTENDED_CONFIRMATION), M.markOfferToExtendFreeTrialSeen(), M.markNotificationTrialExtendedSeen())
                  : a(_.NONE);
              });
            }
          }),
          (0, i.tZ)(j, {
            isOpen: t === _.TRIAL_EXTENDED_CONFIRMATION,
            onClose: () => {
              (0, k.Kz)(
                new s.UserCallToActionEvent({
                  callToActionList: [s.CallToAction.SeeAllPlans, s.CallToAction.Close],
                  chosenAction: s.CallToAction.Close,
                  hasChosenNoAction: !1
                })
              ),
                M.markNotificationTrialExtendedSeen(),
                a(_.NONE);
            }
          }),
          (0, i.tZ)(S, {
            isOpen: t === _.TRIAL_EXTENDED_NOTIFICATION,
            isTeamPlan: z,
            onClose: () => {
              (0, k.Kz)(
                new s.UserCallToActionEvent({
                  callToActionList: [s.CallToAction.BuyDashlane, s.CallToAction.Dismiss],
                  chosenAction: s.CallToAction.Dismiss,
                  hasChosenNoAction: !1
                })
              ),
                M.markNotificationTrialExtendedSeen(),
                a(_.NONE);
            }
          })
        );
      };
    },
    66485: (e, t, a) => {
      "use strict";
      a.d(t, { gD: () => L, dw: () => z, yp: () => _ });
      var n = a(696832),
        i = a(876307),
        s = a(909748),
        r = a(799852),
        o = a(242714),
        l = a(133354),
        c = a(375062),
        d = a(65255),
        u = a(210994),
        p = a(593039),
        m = a(482598),
        g = a(581598),
        h = a(777550),
        x = a(561605),
        k = a(68691),
        y = a(45272),
        M = a(488203),
        b = a(27144),
        f = a(115607),
        I = a(616782),
        N = a(170226),
        D = a(119471);
      const T = {
          OUTER_CONTAINER: {
            display: "flex",
            padding: "24px",
            alignItems: "flex-start",
            flex: "1 0 0",
            borderRadius: "8px",
            border: "1px solid ds.border.neutral.standard.idle",
            background: "ds.container.agnostic.neutral.supershy",
            "&:hover": { borderColor: "ds.border.neutral.standard.hover", cursor: "pointer" },
            "&:active": { borderColor: "ds.border.neutral.standard.active", cursor: "pointer" }
          },
          INNER_CONTAINER: {
            display: "flex",
            paddingBottom: "8px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flex: "1 0 0"
          },
          ICON: { margin: "8px" },
          HEADER: { marginBottom: "4px" }
        },
        A = ({ title: e, subtitle: t, iconName: a, handleClick: n }) =>
          (0, i.tZ)(
            "button",
            { sx: T.OUTER_CONTAINER, onClick: n },
            (0, i.tZ)(
              "div",
              { sx: T.INNER_CONTAINER },
              (0, i.tZ)(i.JO, { name: a, color: "ds.text.brand.standard", size: "xlarge", sx: T.ICON }),
              (0, i.tZ)(i.X6, { as: "h3", color: "ds.text.brand.standard", textStyle: "ds.title.block.medium", sx: T.HEADER }, e),
              (0, i.tZ)(i.nv, { color: "ds.text.neutral.quiet", textStyle: "ds.body.reduced.regular" }, t)
            )
          );
      var E;
      const v = {
          BANNER: {
            display: "flex",
            padding: "16px",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "stretch",
            borderRadius: "4px",
            background: "ds.container.agnostic.neutral.quiet"
          },
          CARD_AREA: { display: "flex", alignItems: "flex-start", gap: "16px", alignSelf: "stretch" },
          CONTENT_AREA: { display: "flex", flexDirection: "column", gap: "32px" }
        },
        w = ({ onClose: e }) => {
          const { translate: t } = (0, M.Z)(),
            a = (0, h.B)(),
            s = (0, k.C)(),
            r = (0, b.s)(),
            o = (0, f.lZ)(),
            l = (0, m.u)(c.t),
            d = s?.spaceTier === g.lD.Team,
            T = s?.spaceTier === g.lD.Business,
            w = !o.isLoading && !!o.isTeamSoftDiscontinued && !!o.isTrial && (d || T);
          if (
            ((0, n.useEffect)(() => {
              w && (0, y.Nc)(p.PageView.TacAccountTrialEndModal);
            }, [w]),
            !s || !r || o.isLoading)
          )
            return null;
          if (!w) return null;
          const C = `${D.ub}?plan=${d ? "team" : "business"}&subCode=${a?.subscriptionCode}`;
          return (0, i.tZ)(
            i.Vq,
            {
              title: t(T ? "team_dashboard_discontinuation_dialog_title_business" : "team_dashboard_discontinuation_dialog_title_team"),
              closeActionLabel: t("_common_dialog_dismiss_button"),
              onClose: () => {
                (0, N._P)(p.CallToAction.Dismiss), l.markB2BPlanDiscontinuedSeen(), e();
              },
              isOpen: !0,
              footerSlot: (0, i.tZ)(
                "div",
                { sx: { display: "flex", gap: "8px" } },
                (0, i.tZ)(
                  i.nv,
                  { textStyle: "ds.body.reduced.regular", color: "ds.text.neutral.quiet" },
                  t("team_dashboard_discontinuation_dialog_help")
                ),
                (0, i.tZ)(
                  "a",
                  {
                    href: D.hc,
                    sx: { textDecoration: "none", display: "flex", gap: "8px", alignItems: "center" },
                    onClick: () => {
                      (0, y.Kz)(new p.UserClickEvent({ button: p.Button.ContactSupportTeam }));
                    }
                  },
                  (0, i.tZ)(
                    i.nv,
                    { textStyle: "ds.title.block.small", color: "ds.text.brand.standard" },
                    t("team_dashboard_discontinuation_dialog_get_in_touch")
                  ),
                  E || (E = (0, i.tZ)(i.JO, { name: "ActionOpenExternalLinkOutlined", color: "ds.text.brand.standard", size: "small" }))
                )
              )
            },
            (0, i.tZ)(
              "div",
              { sx: v.CONTENT_AREA },
              (0, i.tZ)(i.nv, { color: "ds.text.neutral.standard" }, t("team_dashboard_discontinuation_dialog_subtitle")),
              (0, i.tZ)(
                "div",
                { sx: v.BANNER },
                (0, i.tZ)(
                  i.nv,
                  { color: "ds.text.neutral.standard" },
                  t(
                    T
                      ? "team_dashboard_discontinuation_dialog_free_trial_ended_business"
                      : "team_dashboard_discontinuation_dialog_free_trial_ended_team"
                  )
                ),
                (0, i.tZ)(i.Ct, {
                  layout: "labelOnly",
                  mood: "danger",
                  intensity: "quiet",
                  label: t("team_dashboard_discontinuation_dialog_free_trial_ended_date", {
                    endDate: t.shortDate((0, u.Z)(r.lastBillingDateUnix), I.qG.LL)
                  })
                })
              ),
              (0, i.tZ)(
                "div",
                { sx: v.CARD_AREA },
                (0, i.tZ)(A, {
                  title: t("team_dashboard_discontinuation_dialog_credit_card"),
                  subtitle: t("team_dashboard_discontinuation_dialog_payment_details"),
                  iconName: "ItemPaymentOutlined",
                  handleClick: () => {
                    (0, N._P)(p.CallToAction.PayWithCreditCard), l.markB2BPlanDiscontinuedSeen(), (0, x.Yo)(C);
                  }
                }),
                (0, i.tZ)(A, {
                  title: t("team_dashboard_discontinuation_dialog_invoice"),
                  subtitle: t("team_dashboard_discontinuation_dialog_contact_support"),
                  iconName: "ItemTaxNumberOutlined",
                  handleClick: () => {
                    (0, N._P)(p.CallToAction.PayByInvoice), l.markB2BPlanDiscontinuedSeen(), (0, x.Yo)(D.FL);
                  }
                })
              )
            )
          );
        };
      var C = a(692077),
        j = a(773917);
      const S = ({ adminAccess: e, openOnDemand: t = !1 }) => {
          const [a, s] = (0, n.useState)(!1),
            { closeDialog: u } = _(),
            { isLogoutDialogOpen: p } = (0, j.q)(),
            m = (0, r.k)(c.t, "hasSeenB2BPlanDiscontinued"),
            g = (0, o.o)(d.w.EcommerceWebB2BDiscontinuationPhase1),
            h = (0, C.CN)().get("trialDiscontinued"),
            x = !!h && "true" === h,
            k = m.status === l.rq.Success ? m.data : null,
            { hasBillingAccess: y, hasFullAccess: M } = e;
          return (
            (0, n.useEffect)(() => {
              "boolean" != typeof k || (k && !t && !x) || (!y && !M) || p || s(!0);
            }, [y, M, k, p, x, t]),
            "boolean" == typeof k && g && a
              ? (0, i.tZ)(w, {
                  onClose: () => {
                    u(), s(!1);
                  }
                })
              : null
          );
        },
        L = (0, n.createContext)({ openDialog: () => {}, closeDialog: () => {}, shouldShowTrialDiscontinuedDialog: null }),
        _ = () => (0, n.useContext)(L),
        z = ({ adminAccess: e, children: t }) => {
          const [a, r] = (0, n.useState)(!1),
            [o, l] = (0, n.useState)(null),
            c = (0, s.U)();
          (0, n.useEffect)(() => {
            null !== c && l(c);
          }, [o, c]);
          const d = { openDialog: () => r(!0), closeDialog: () => r(!1), shouldShowTrialDiscontinuedDialog: o };
          return (0, i.tZ)(L.Provider, { value: d }, t, (0, i.tZ)(S, { adminAccess: e, openOnDemand: a }));
        };
    },
    568197: (e, t, a) => {
      "use strict";
      a.d(t, { BK: () => o, Th: () => s, UQ: () => i, Yw: () => n, g3: () => r });
      const n = (e) => e.replace(/([^:]\/)\/+/g, "$1"),
        i = (e, t) => n(e + "/" + t),
        s = (e, t) => {
          const a = e.substring(0, e.indexOf(t));
          return n(a);
        };
      function r(e, t) {
        return [
          e,
          "?",
          Object.keys(t)
            .map((e) => (e ? `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}` : void 0))
            .join("&")
        ].join("");
      }
      function o() {
        return navigator.onLine;
      }
    },
    344554: (e, t, a) => {
      "use strict";
      a.d(t, { Hv: () => i, ql: () => s });
      var n = a(740300);
      const i = ({ type: e }) => n.C.addUserMessage({ type: e }),
        s = ({ type: e }) => n.C.dismissUserMessages({ type: e });
      a(148038);
    },
    63756: (e, t, a) => {
      "use strict";
      a.d(t, { D: () => s });
      var n = a(148038),
        i = a(740300);
      function s() {
        const e = (0, n.qr)({ queryConfig: { query: i.C.getUserMessages }, liveConfig: { live: i.C.liveUserMessages } }, []);
        return e.status === n.rq.Success ? e.data : [];
      }
    },
    210051: (e, t, a) => {
      "use strict";
      a.d(t, { CU: () => n, vV: () => i });
      const n = /^[^\s@]+@([^\s@])+\.([^\s@])+$/i;
      function i(e) {
        return !!e && n.test(e);
      }
    },
    739649: (e, t, a) => {
      "use strict";
      a.d(t, { B: () => i });
      const n = (e) => (((e) => "function" == typeof e.getState)(e) ? e.getState() : e);
      function i(e) {
        return n(e).webapp.currentSpaceId;
      }
    },
    300572: (e, t, a) => {
      "use strict";
      a.d(t, { Bn: () => s, ZP: () => r, eO: () => i });
      const n = (0, a(435681).Z)("WEBAPP", { currentSpaceId: null }),
        i = n.registerAction("USER_SWITCHED_SPACE", (e, t) => ({ ...e, currentSpaceId: t })),
        s = n.registerAction("STATIC_DATA_RETRIEVED", (e, { callingCodes: t, geographicStates: a }) => ({
          ...e,
          callingCodes: t,
          geographicStates: a
        })),
        r = n;
    },
    277899: (e, t, a) => {
      "use strict";
      a.d(t, { B: () => o });
      var n = a(696832),
        i = a(876307),
        s = a(72133),
        r = a(421548);
      const o = ({ isLoading: e = !0, children: t }) =>
        e
          ? (0, i.tZ)(
              "div",
              { sx: { minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" } },
              (0, i.tZ)(s.Z, { height: 150, width: 150, animationParams: { renderer: "svg", animationData: r, loop: !0, autoplay: !0 } })
            )
          : (0, i.tZ)(n.Fragment, null, t);
    },
    501346: (e, t, a) => {
      "use strict";
      a.d(t, { r: () => c });
      var n = a(696832),
        i = a(692077),
        s = a(962899),
        r = a(488203);
      var o = a(459522),
        l = a(778301);
      const c = ({ dispatchGlobal: e }) => {
        const { translate: t } = (0, r.Z)(),
          a = (0, i.k6)(),
          c = (0, l.a)(e);
        return n.createElement(
          "div",
          { className: "logoutContainer--Ov8PWjYtop" },
          n.createElement(
            s.zxk,
            {
              nature: "secondary",
              type: "button",
              onClick: () => {
                c(), a.replace(o.TT);
              }
            },
            t("webapp_account_recovery_back_to_login")
          )
        );
      };
    },
    418402: (e) => {
      e.exports = {
        "--dash-green-00": "#0e353d",
        "--dash-green-01": "#3e5d64",
        "--dash-green-02": "#6e868b",
        "--dash-green-03": "#9faeb1",
        "--dash-green-04": "#cfd7d8",
        "--dash-green-05": "#d9dfe0",
        "--dash-green-06": "#f5f7f7",
        "--dash-darker-green-00": "#071a1e",
        "--mid-green-00": "#0e6476",
        "--mid-green-01": "#3e8391",
        "--mid-green-02": "#6ea2ad",
        "--mid-green-03": "#9fc1c8",
        "--mid-green-04": "#cfe0e4",
        "--mid-green-05": "#d9e6e9",
        "--pink-00": "#fdb5af",
        "--pink-01": "#fdc4bf",
        "--pink-02": "#fed3cf",
        "--pink-03": "#fee1df",
        "--pink-04": "#fff0ef",
        "--pink-05": "#fff3f2",
        "--orange-00": "#fe5b33",
        "--orange-01": "#fe7c5c",
        "--orange-02": "#fe9d85",
        "--orange-03": "#ffbdad",
        "--orange-04": "#ffded6",
        "--orange-05": "#ffe5de",
        "--dark-orange-00": "#bf2600",
        "--functional-red-00": "#4e000d",
        "--functional-red-01": "#8b0018",
        "--functional-red-02": "#ff002d",
        "--functional-red-03": "#ffa49f",
        "--red-00": "#bf0a33",
        "--red-01": "#cc3b5c",
        "--red-02": "#d96c85",
        "--red-03": "#e59dad",
        "--red-04": "#f2ced6",
        "--red-05": "#f5d8de",
        "--black": "#000000",
        "--white": "#ffffff",
        "--grey-00": "#615b57",
        "--grey-01": "#999592",
        "--grey-02": "#ccc7c2",
        "--grey-03": "#d6d2ce",
        "--grey-04": "#e0ddda",
        "--grey-05": "#ebe9e7",
        "--grey-06": "#f5f4f3",
        "--validator-green": "#20b422",
        "--validator-red": "var(--functional-red-02)",
        "--accessible-validator-green": "#278637",
        "--accessible-validator-red": "#e00635",
        "--red": "var(--red-00)",
        "--orange": "var(--orange-00)",
        "--pink": "var(--pink-00)",
        "--dash-green": "var(--dash-green-00)",
        "--mid-green": "var(--mid-green-00)",
        "--modal-box-shadow-color": "rgba(0, 0, 0, 0.2)",
        "--transparent-black-color": "rgba(0, 0, 0, 0.75)",
        "--transparent-dark-background-color": "rgba(71, 71, 71, 0.75)",
        "--transparent-white-color": "rgba(255, 255, 255, 0.75)",
        "--transparent-dash-green-00-background-color": "rgba(14, 53, 61, 0.9)"
      };
    },
    562150: (e) => {
      e.exports = {
        "--dashlane-fontfamily-primary": "'Public Sans', 'Helvetica Neue', Helvetica,\n    Arial, 'Lucida Grande', sans-serif",
        "--dashlane-fontfamily-secondary": "'GT Walsheim Pro', 'Helvetica', 'Arial',\n    sans-serif",
        "--dashlane-fontfamily-mono": "'Apercu Mono Pro', 'Courier New', Courier,\n    monospace",
        "--password-font-size": "20px",
        "--password-line-height": "24px",
        "--password-letter-spacing": "-0.03em",
        "--dashlane-font-size-webapp-cta-small": "14px",
        "--dashlane-font-size-webapp-cta-medium": "16px",
        "--dashlane-font-size-webapp-x-jumbo": "80px",
        "--dashlane-font-size-webapp-jumbo": "40px",
        "--dashlane-font-size-webapp-bigger": "32px",
        "--dashlane-font-size-webapp-big": "24px",
        "--dashlane-font-size-webapp-medium-plus": "20px",
        "--dashlane-font-size-webapp-medium": "16px",
        "--dashlane-font-size-webapp-small-plus": "14px",
        "--dashlane-font-size-webapp-small": "13px",
        "--dashlane-font-size-webapp-x-small": "12px",
        "--dashlane-font-weight-thin": "100",
        "--dashlane-font-weight-extra-light": "200",
        "--dashlane-font-weight-light": "300",
        "--dashlane-font-weight-regular": "400",
        "--dashlane-font-weight-medium": "500",
        "--dashlane-font-weight-semi-bold": "600",
        "--dashlane-font-weight-bold": "700",
        "--dashlane-line-height-webapp-jumbo": "48px",
        "--dashlane-line-height-webapp-bigger": "40px",
        "--dashlane-line-height-webapp-medium-plus": "24px",
        "--dashlane-line-height-webapp-medium": "20px",
        "--dashlane-line-height-webapp-small-plus": "18px",
        "--dashlane-line-height-webapp-small": "17px",
        "--dashlane-line-height-webapp-x-small": "16px",
        "--dashlane-line-height-webapp-x-x-small": "14px"
      };
    },
    300697: (e) => {
      e.exports = {
        "--z-index-base": "1",
        "--z-index-below": "-1",
        "--z-index-content-overlap": "2",
        "--z-index-content-overlap-plus": "10",
        "--z-index-content-overlap-plus-plus": "99",
        "--z-index-content-overlap-plus-plus-plus": "100",
        "--z-index-content-overlap-plus-plus-plus-plus": "101",
        "--z-index-content-overlap-plus-plus-plus-plus-plus": "102",
        "--z-index-webapp-panel": "103",
        "--z-index-above-panel": "104",
        "--z-index-above-panel-foreground": "105",
        "--z-index-above-panel-plus": "109",
        "--z-index-above-panel-plus-plus": "110",
        "--z-index-account-creation-password-field": "var(--z-index-base)",
        "--z-index-edit-panel-alert": "var(--z-index-base)",
        "--z-index-global-action-menu": "var(--z-index-base)",
        "--z-index-login-form-input-button": "var(--z-index-base)",
        "--z-index-login-form-select-menu-outer": "var(--z-index-base)",
        "--z-index-password-health-header": "var(--z-index-content-overlap)",
        "--z-index-password-health-icon-wrapper": "var(--z-index-base)",
        "--z-index-password-health-list-header": "var(--z-index-base)",
        "--z-index-team-members-multiple-assign-menu": "var(--z-index-base)",
        "--z-index-ui-component-dropdown": "var(--z-index-base)",
        "--z-index-webapp-family-dashboard-popup-alert-wrapper": "var(--z-index-base)",
        "--z-index-webapp-feature-onboarding-overlay": "var(--z-index-base)",
        "--z-index-webapp-sidemenu-collapse-button": "var(--z-index-base)",
        "--z-index-standard-header": "var(--z-index-content-overlap)",
        "--z-index-standard-header-sub-tabs": "var(--z-index-content-overlap)",
        "--z-index-page-header-stacking-context": "var(--z-index-content-overlap)",
        "--z-index-action-with-popup-container": "var(--z-index-content-overlap-plus)",
        "--z-index-dropdown-backdrop": "var(--z-index-content-overlap-plus-plus)",
        "--z-index-credentials-overlay": "var(--z-index-content-overlap-plus-plus)",
        "--z-index-password-strength": "var(--z-index-content-overlap-plus-plus)",
        "--z-index-wac-header": "var(--z-index-content-overlap-plus-plus-plus)",
        "--z-index-credentials-above": "var(--z-index-content-overlap-plus-plus-plus)",
        "--z-index-webapp-sidemenu-notification-stacking-context": "var(\n    --z-index-content-overlap-plus-plus-plus-plus\n  )",
        "--z-index-sidemenu-spaces-switch-container": "var(\n    --z-index-content-overlap-plus-plus-plus-plus\n  )",
        "--z-index-webapp-onboarding-top-level-wrapper": "var(\n    --z-index-content-overlap-plus-plus-plus-plus-plus\n  )",
        "--z-index-webapp-personal-data-section-view-main-container": "var(\n    --z-index-content-overlap-plus-plus-plus-plus-plus\n  )",
        "--z-index-webapp-personal-data-section-view-overlay": "var(\n    --z-index-webapp-panel\n  )",
        "--z-index-account-panel": "var(--z-index-above-panel-foreground)",
        "--z-index-change-master-password": "var(--z-index-above-panel)",
        "--z-index-dialog-background": "var(--z-index-above-panel)",
        "--z-index-dialog-foreground": "var(--z-index-above-panel-foreground)",
        "--z-index-dropdown-exit": "var(--z-index-above-panel-plus)",
        "--z-index-dropdown-content": "var(--z-index-above-panel-plus-plus)",
        "--z-index-action-notification": "var(--z-index-above-panel-plus-plus)"
      };
    },
    896915: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => n });
      const n = {
        avatar: "avatar--g6JofpfE9m",
        placeholderTextAndImgContainer: "placeholderTextAndImgContainer--SqXaoy4miG",
        placeholderText: "placeholderText--TuCQ4XPosS",
        placeholderImg: "placeholderImg--LwxxyABf6j"
      };
    },
    168783: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => n });
      const n = { overlay: "overlay--duBJmhTNdo" };
    },
    225026: (e) => {
      const t = window.document,
        a = window.navigator,
        n = window.location,
        i = {};
      let s = null,
        r = null,
        o = null,
        l = null,
        c = null;
      const d = {
        detectButtons: function () {
          const e = ["savedata", "signup", "checkout"];
          for (let a = 0; a < e.length; a++) {
            const n = t.getElementsByTagName("dl:" + e[a]);
            for (let t = 0, s = n.length; t < s; t++) this.setupButton(n[t], e[a], i.global.getDomain(), i.global.getDeveloperId());
          }
        },
        setupButton: function (e, a, n, i) {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          (e.style.width = "200px"), (e.style.height = "53px");
          const s = "domain=" + n + "&developerId=" + i + "#" + a,
            r = t.createElement("iframe");
          (r.style.width = "200px"),
            (r.style.height = "53px"),
            (r.style.overflow = "hidden"),
            (r.style.border = "none"),
            (r.scrolling = "no"),
            (r.title = "Dashlane"),
            (r.src = "/api/dashlaneButton.html?" + s),
            e.appendChild(r);
        },
        saveData: {
          dataRequest: function (e) {
            const t = "function" == typeof s ? s.call(null) : s;
            c && c.name && (t.websiteName = c.name),
              d.actionProcess(
                function (e) {
                  e.callAPI("saveDataObjectsResponse", t, function (e, t) {});
                },
                function (e, t) {}
              );
          },
          responseRequest: function (e) {
            try {
              "function" == typeof r && r.call(null, e.error);
            } catch (e) {}
          }
        },
        signup: {
          requiredDetailsRequest: function (e) {
            const t = "function" == typeof o ? o.call(null) : o;
            c && c.name && (t.websiteName = c.name),
              d.actionProcess(
                function (e) {
                  e.callAPI("signupRequiredDetailsResponse", t, function (e, t) {});
                },
                function (e, t) {}
              );
          },
          fullDataRequest: function (e) {
            try {
              "function" == typeof l && l.call(null, e);
            } catch (e) {}
          }
        },
        checkout: {},
        libelles: {
          downloadConfirm: function () {
            return "fr" === d.getLang()
              ? "Il semble que Dashlane ne soit pas installé sur cette machine. Souhaitez-vous utiliser Dashlane pour sécuriser vos données personnelles ?"
              : "You don’t seem to have Dashlane on this device. Do you want to secure your personal data with Dashlane?";
          }
        },
        actionProcess: function (e, t) {
          i.global.isInstalled(function (a, n, s) {
            a
              ? t(501, a)
              : n
              ? i.global.isUserLoggedin(s, function (a, n) {
                  if (a) t(503, a);
                  else if (n)
                    try {
                      e(s);
                    } catch (e) {
                      t(504, e);
                    }
                  else
                    try {
                      i.global.openDashlaneApplication(s), t(102, null);
                    } catch (e) {
                      t(102, e);
                    }
                })
              : (i.global.openDownloadPage(), t(101, null));
          });
        },
        getLang: function () {
          return "fr" === c.language || "en" === c.language ? c.language : "fr" === a.language ? "fr" : "en";
        }
      };
      let u = null,
        p = null;
      const m = (function () {
        const e = {},
          t = [];
        let a = 0;
        const s = (n.hasOwnProperty && n.hasOwnProperty("origin") && n.origin) || n.protocol + "//" + n.host;
        e.callAPI = function (e, i, s) {
          t.push({ id: ++a, cb: s });
          const r = { type: "DashlaneAPIRequest", id: a, request: e, args: i };
          window.postMessage(r, n.origin);
        };
        const r = function (e) {
          if (e.origin === s && e.data.hasOwnProperty("type") && "DashlaneAPIResponse" === e.data.type)
            if (e.data.hasOwnProperty("request")) {
              const t = e.data.request;
              "signalDashlaneRpcClient" === t ? ((u = m), p && p()) : i.request(null, t, e.data.data);
            } else if (e.data.hasOwnProperty("id"))
              for (let a = 0, n = t.length; a < n; ++a)
                if (t[a].id === e.data.id) {
                  const n = (e.data.hasOwnProperty("result") && e.data.result) || null,
                    i = (e.data.hasOwnProperty("error") && e.data.error) || null;
                  t[a].cb.call(null, i, n), t.splice(a, 1);
                  break;
                }
        };
        return (
          window.addEventListener ? window.addEventListener("message", r, !1) : window.attachEvent && window.attachEvent("message", r), e
        );
      })();
      (i.rpc = m),
        (i.init = function (e) {
          try {
            return (
              (c = e),
              d.detectButtons(),
              setTimeout(function () {
                i.global.isInstalled(function (e, t, a) {});
              }, 800),
              !0
            );
          } catch (e) {
            return !1;
          }
        }),
        (i.request = function (e, t, a) {
          if ("signalDashlaneClient" === t) return (u = a), void (p && p());
          let n = null;
          try {
            a.content &&
              window.JSON &&
              window.JSON.parse &&
              (n = window.JSON.parse(a.content, function (e, t) {
                return "string" == typeof t && (t = t.replace(/--endl--/g, " ")), t;
              }));
          } catch (e) {
            return !1;
          }
          null !== n &&
            ("saveDataObjectsRequest" !== t
              ? "saveDataResponseRequest" !== t
                ? "signupRequiredDetailsRequest" !== t
                  ? "signupFullDataRequest" !== t || d.signup.fullDataRequest(n)
                  : d.signup.requiredDetailsRequest(n)
                : d.saveData.responseRequest(n)
              : d.saveData.dataRequest(n));
        }),
        (i.global = {
          isInstalled: function (e) {
            try {
              if (u) return void e(null, !0, u);
              const a = setTimeout(function () {
                p && p();
              }, 800);
              p = function () {
                clearTimeout(a), (p = null), u ? e(null, !0, u) : e(null, !1, null);
              };
              try {
                i.rpc && i.rpc.callAPI && i.rpc.callAPI("rpcInit", {}, function () {});
              } catch (e) {}
              const n = t.getElementsByTagName("body");
              if (n) {
                const a = n[0];
                if (a)
                  if (t.createEvent) {
                    let n;
                    if (window.CustomEvent)
                      (n = t.createEvent("CustomEvent")), n.initCustomEvent("dashlaneAPIEvent", !1, !1, { dashlane: i });
                    else
                      try {
                        (n = t.createEvent("datacontainerevents")),
                          n.initEvent("dashlaneAPIEvent", !1, !1),
                          n.setData("message", { dashlane: i });
                      } catch (e) {
                        (n = t.createEvent("CustomEvent")), n.initCustomEvent("dashlaneAPIEvent", !1, !1, { dashlane: i });
                      }
                    a.dispatchEvent(n);
                  } else if (
                    "object" == typeof kw__injected &&
                    kw__injected.communication &&
                    kw__injected.communication.api &&
                    "object" == typeof kw__injected.communication.api
                  )
                    (u = kw__injected.communication.api), p && p();
                  else {
                    const e = t.createEventObject();
                    a.fireEvent("ondashlaneAPIEvent", e);
                  }
              }
            } catch (t) {
              e(t, !1, null);
            }
          },
          getAPIObject: function (e) {
            try {
              this.isInstalled(function (t, a, n) {
                t ? e(t, null) : e(null, n);
              });
            } catch (t) {
              e(t, null);
            }
          },
          getAPIVersion: function () {
            return "1.6.0";
          },
          getClientVersion: function (e, t) {
            try {
              e.callAPI("getClientVersion", null, function (e, a) {
                e ? t(e, "") : t(null, a.clientVersion);
              });
            } catch (e) {
              t(e, "");
            }
          },
          getMinimumClientVersion: function () {
            return "1.6.0";
          },
          isUserLoggedin: function (e, t) {
            try {
              e.callAPI("isUserLoggedin", null, function (e, a) {
                e ? t(e, !1) : t(null, "true" === a.loggedin);
              });
            } catch (e) {
              t(e, !1);
            }
          },
          openDashlaneApplication: function (e) {
            e.callAPI("openDashlaneApplication", null, null);
          },
          openDownloadPage: function () {
            try {
              if (!window.confirm(d.libelles.downloadConfirm())) return;
              const e = "https://www.dashlane.com/" + d.getLang() + "/features/passwordmanager";
              void 0 === window.open(e) && (window.location = e);
            } catch (e) {}
          },
          getDomain: function () {
            return n.host;
          },
          getDeveloperId: function () {
            const e = t.getElementsByTagName("head");
            if (e && e.length > 0) {
              const t = e[0].getElementsByTagName("script");
              if (t)
                for (let e = 0; e < t.length; e++) {
                  const a = t[e].src.match(/dashlaneapi(Debug)?\.js\?developerId=([a-z0-9-]+)[&#]?/i);
                  if (a && 3 === a.length) return a[2];
                }
            }
            return "unknown";
          }
        }),
        (i.saveData = {
          init: function (e, t) {
            if ("object" != typeof e && "function" != typeof e) throw new Error("data must be an object or a function");
            if ("function" != typeof t) throw new Error("saveDataCallack must be a function");
            (s = e), (r = t);
          },
          clicked: function (e) {
            d.actionProcess(
              function (e) {
                const t = { domain: i.global.getDomain(), developerId: i.global.getDeveloperId() };
                e.callAPI("userWantsToSaveData", t, function (e, t) {});
              },
              function (e, t) {}
            );
          }
        }),
        (i.signup = {
          init: function (e, t) {
            if ("object" != typeof e && "function" != typeof e) throw new Error("dataRequested must be an object or a function");
            if ("function" != typeof t) throw new Error("signupCallback must be a function");
            (o = e), (l = t);
          },
          registrationSucceed: function (e) {
            if ("object" != typeof e) throw new Error("credentialData must be an object");
            const t = { login: e.login, password: e.password };
            d.actionProcess(
              function (e) {
                e.callAPI("signupFullDataSuccessResponse", t, function (e, t) {});
              },
              function (e, t) {}
            );
          },
          registrationFailed: function (e) {
            if ("object" != typeof e) throw new Error("missingFields must be an object");
            const t = e;
            d.actionProcess(
              function (e) {
                e.callAPI("signupFullDataErrorResponse", t, function (e, t) {});
              },
              function (e, t) {}
            );
          }
        }),
        (i.checkout = {});
      const g = function (e) {
        return function (t, a) {
          i.global.isInstalled(function (n, i, s) {
            return n
              ? a(n)
              : i
              ? void s.callAPI("webAccountCreation_" + e, t, function (e, t) {
                  return a(e);
                })
              : a(new Error("dashlane not installed"));
          });
        };
      };
      (i.webAccountCreation = {
        accountCreated: g("accountCreated"),
        createAccount: g("createAccount"),
        doNotShowReactivation: g("doNotShowReactivation"),
        downloadApp: g("downloadApp"),
        started: g("started")
      }),
        (e.exports = i);
    },
    461253: (e) => {
      "use strict";
      e.exports = function (e) {
        return e.other;
      };
    },
    691996: (e, t, a) => {
      "use strict";
      const n = a(436322);
      e.exports = { counterpart: { ...n.counterpart, pluralize: a(461253) } };
    },
    278144: (e, t, a) => {
      "use strict";
      e.exports = a(691996);
    },
    759998: (e, t, a) => {
      "use strict";
      e.exports = a(691996);
    },
    783856: (e) => {
      "use strict";
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQ4IiBoZWlnaHQ9IjIyOCIgdmlld0JveD0iMCAwIDM0OCAyMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFfZCkiPgo8cmVjdCB3aWR0aD0iMzQ4IiBoZWlnaHQ9IjE1MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA3NikiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjE1IiB5PSI5NyIgd2lkdGg9IjY1IiBoZWlnaHQ9IjE0IiByeD0iMiIgZmlsbD0iI0NDQzdDMiIvPgo8cmVjdCB4PSI0MC43NSIgeT0iMjAxIiB3aWR0aD0iMTA4IiBoZWlnaHQ9IjE0IiByeD0iMiIgZmlsbD0iI0VCRTlFNyIvPgo8cGF0aCBkPSJNMjguOTYyNCAyMDguMDg4QzI4Ljk4NzQgMjA3LjkgMjguOTk5OSAyMDcuNzA2IDI4Ljk5OTkgMjA3LjVDMjguOTk5OSAyMDcuMyAyOC45ODc0IDIwNy4xIDI4Ljk1NjIgMjA2LjkxM0wzMC4yMjQ5IDIwNS45MjVDMzAuMzM3NCAyMDUuODM4IDMwLjM2ODcgMjA1LjY2OSAzMC4yOTk5IDIwNS41NDRMMjkuMDk5OSAyMDMuNDY5QzI5LjAyNDkgMjAzLjMzMSAyOC44Njg3IDIwMy4yODggMjguNzMxMiAyMDMuMzMxTDI3LjIzNzQgMjAzLjkzMUMyNi45MjQ5IDIwMy42OTQgMjYuNTkzNyAyMDMuNDk0IDI2LjIyNDkgMjAzLjM0NEwyNS45OTk5IDIwMS43NTZDMjUuOTc0OSAyMDEuNjA2IDI1Ljg0OTkgMjAxLjUgMjUuNjk5OSAyMDEuNUgyMy4yOTk5QzIzLjE0OTkgMjAxLjUgMjMuMDMxMiAyMDEuNjA2IDIzLjAwNjIgMjAxLjc1NkwyMi43ODEyIDIwMy4zNDRDMjIuNDEyNCAyMDMuNDk0IDIyLjA3NDkgMjAzLjcgMjEuNzY4NyAyMDMuOTMxTDIwLjI3NDkgMjAzLjMzMUMyMC4xMzc0IDIwMy4yODEgMTkuOTgxMiAyMDMuMzMxIDE5LjkwNjIgMjAzLjQ2OUwxOC43MTI0IDIwNS41NDRDMTguNjM3NCAyMDUuNjc1IDE4LjY2MjQgMjA1LjgzOCAxOC43ODc0IDIwNS45MjVMMjAuMDU2MiAyMDYuOTEzQzIwLjAyNDkgMjA3LjEgMTkuOTk5OSAyMDcuMzA2IDE5Ljk5OTkgMjA3LjVDMTkuOTk5OSAyMDcuNjk0IDIwLjAxMjQgMjA3LjkgMjAuMDQzNyAyMDguMDg4TDE4Ljc3NDkgMjA5LjA3NUMxOC42NjI0IDIwOS4xNjMgMTguNjMxMiAyMDkuMzMxIDE4LjY5OTkgMjA5LjQ1NkwxOS44OTk5IDIxMS41MzFDMTkuOTc0OSAyMTEuNjY5IDIwLjEzMTIgMjExLjcxMyAyMC4yNjg3IDIxMS42NjlMMjEuNzYyNCAyMTEuMDY5QzIyLjA3NDkgMjExLjMwNiAyMi40MDYyIDIxMS41MDYgMjIuNzc0OSAyMTEuNjU2TDIyLjk5OTkgMjEzLjI0NEMyMy4wMzEyIDIxMy4zOTQgMjMuMTQ5OSAyMTMuNSAyMy4yOTk5IDIxMy41SDI1LjY5OTlDMjUuODQ5OSAyMTMuNSAyNS45NzQ5IDIxMy4zOTQgMjUuOTkzNyAyMTMuMjQ0TDI2LjIxODcgMjExLjY1NkMyNi41ODc0IDIxMS41MDYgMjYuOTI0OSAyMTEuMzA2IDI3LjIzMTIgMjExLjA2OUwyOC43MjQ5IDIxMS42NjlDMjguODYyNCAyMTEuNzE5IDI5LjAxODcgMjExLjY2OSAyOS4wOTM3IDIxMS41MzFMMzAuMjkzNyAyMDkuNDU2QzMwLjM2ODcgMjA5LjMxOSAzMC4zMzc0IDIwOS4xNjMgMzAuMjE4NyAyMDkuMDc1TDI4Ljk2MjQgMjA4LjA4OFpNMjQuNDk5OSAyMDkuNzVDMjMuMjYyNCAyMDkuNzUgMjIuMjQ5OSAyMDguNzM4IDIyLjI0OTkgMjA3LjVDMjIuMjQ5OSAyMDYuMjYzIDIzLjI2MjQgMjA1LjI1IDI0LjQ5OTkgMjA1LjI1QzI1LjczNzQgMjA1LjI1IDI2Ljc0OTkgMjA2LjI2MyAyNi43NDk5IDIwNy41QzI2Ljc0OTkgMjA4LjczOCAyNS43Mzc0IDIwOS43NSAyNC40OTk5IDIwOS43NVoiIGZpbGw9IiNFQkU5RTciLz4KPHJlY3QgeD0iMTUiIHk9IjExNiIgd2lkdGg9IjI4NCIgaGVpZ2h0PSIxNCIgcng9IjIiIGZpbGw9IiNFQkU5RTciLz4KPHJlY3QgeD0iMTUiIHk9IjEzNiIgd2lkdGg9IjY1IiBoZWlnaHQ9IjE0IiByeD0iMiIgZmlsbD0iI0VCRTlFNyIvPgo8cGF0aCBkPSJNMzEuMzQzNyAxNjguNjE4QzMxLjM0MzcgMTY4LjUxOCAzMS4yNDM1IDE2OC40MTggMzEuMTAzMSAxNjguMzc4TDI5LjQxOSAxNjcuNzU2QzI5LjEzODMgMTY3LjYzNiAyOC44MTc2IDE2Ny43NzYgMjguODE3NiAxNjcuOTc3VjE3NS4zMDVDMjguODI1NSAxNzUuMzYyIDI4Ljg0ODEgMTc1LjQxNyAyOC44ODMyIDE3NS40NjJDMjguOTE4NCAxNzUuNTA4IDI4Ljk2NDkgMTc1LjU0NCAyOS4wMTgxIDE3NS41NjZMMzAuNzQyNCAxNzYuMTg4QzMxLjAwMyAxNzYuMjg4IDMxLjM0MzkgMTc2LjE0NyAzMS4zNDM5IDE3NS45MjdMMzEuMzQzNyAxNjguNjE4Wk0yNy4wNzE4IDE3NC4yMDJDMjcuMDcxOCAxNzQuMTAyIDI2Ljk3MTYgMTc0LjAwMiAyNi44MzEyIDE3My45NjJMMjUuMTQ3MiAxNzMuMzRDMjQuODY2NSAxNzMuMjIgMjQuNTQ1NyAxNzMuMzYgMjQuNTQ1NyAxNzMuNTYxVjE3OC4xMzJDMjQuNTUzNiAxNzguMTg5IDI0LjU3NjIgMTc4LjI0MyAyNC42MTE0IDE3OC4yODlDMjQuNjQ2NSAxNzguMzM1IDI0LjY5MyAxNzguMzcxIDI0Ljc0NjIgMTc4LjM5M0wyNi40NzA1IDE3OS4wMTVDMjYuNzMxMSAxNzkuMTE1IDI3LjA3MiAxNzguOTc0IDI3LjA3MiAxNzguNzU0TDI3LjA3MTggMTc0LjIwMlpNMjcuMDcxOCAxNjQuODU5QzI3LjA3MTggMTY0Ljc1OSAyNi45NzE2IDE2NC42NTggMjYuODMxMiAxNjQuNjE4TDI1LjE0NzIgMTYzLjk5N0MyNC44NjY1IDE2My44NzYgMjQuNTQ1NyAxNjQuMDE3IDI0LjU0NTcgMTY0LjIxN1YxNjguNzg5QzI0LjU1MzYgMTY4Ljg0NiAyNC41NzYyIDE2OC45IDI0LjYxMTQgMTY4Ljk0NkMyNC42NDY1IDE2OC45OTEgMjQuNjkzIDE2OS4wMjcgMjQuNzQ2MiAxNjkuMDQ5TDI2LjQ3MDUgMTY5LjY3MUMyNi43MzExIDE2OS43NzEgMjcuMDcyIDE2OS42MzEgMjcuMDcyIDE2OS40MUwyNy4wNzE4IDE2NC44NTlaTTIyLjgyMTYgMTY0LjUwOEMyMi44MjE2IDE2NC40MDggMjIuNzIxMyAxNjQuMzA4IDIyLjU4MSAxNjQuMjY4TDIwLjg5NjkgMTYzLjY0NkMyMC42MTYyIDE2My41MjYgMjAuMjk1NCAxNjMuNjY2IDIwLjI5NTQgMTYzLjg2N1YxNzguNTAzQzIwLjMwMzMgMTc4LjU2IDIwLjMyNTkgMTc4LjYxNCAyMC4zNjExIDE3OC42NkMyMC4zOTYzIDE3OC43MDYgMjAuNDQyNyAxNzguNzQxIDIwLjQ5NTkgMTc4Ljc2NEwyMi4yMjAyIDE3OS4zODVDMjIuNDgwOSAxNzkuNDg2IDIyLjgyMTcgMTc5LjM0NSAyMi44MjE3IDE3OS4xMjVMMjIuODIxNiAxNjQuNTA4WiIgZmlsbD0iIzBFNjQ3NiIvPgo8cmVjdCB4PSI0MC43NSIgeT0iMTY1IiB3aWR0aD0iMTY1IiBoZWlnaHQ9IjE0IiByeD0iMiIgZmlsbD0iIzk5OTU5MiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI1NS41IDE2N0gyNjIuNVYxNjguNUgyNjEuNVYxNzIuNUwyNjMgMTc0VjE3NS41SDI1OS41VjE4MEgyNTguNVYxNzUuNUgyNTVWMTc0TDI1Ni41IDE3Mi41VjE2OC41SDI1NS41VjE2N1pNMjU3Ljg4OSAxNjguNVYxNzMuMDc3TDI1NyAxNzMuNTM4VjE3NEgyNjFWMTczLjUzOEwyNjAuMTExIDE3My4wNzdWMTY4LjVIMjU3Ljg4OVoiIGZpbGw9IiNDNEM0QzQiLz4KPHBhdGggZD0iTTI5OSAxNjlDMjk5IDE2OS41NTIgMjk5LjQ0OCAxNzAgMzAwIDE3MEMzMDAuNTUyIDE3MCAzMDEgMTY5LjU1MiAzMDEgMTY5QzMwMSAxNjguNDQ4IDMwMC41NTIgMTY4IDMwMCAxNjhDMjk5LjQ0OCAxNjggMjk5IDE2OC40NDggMjk5IDE2OVoiIGZpbGw9IiNDNEM0QzQiLz4KPHBhdGggZD0iTTI5OSAxNzJDMjk5IDE3Mi41NTIgMjk5LjQ0OCAxNzMgMzAwIDE3M0MzMDAuNTUyIDE3MyAzMDEgMTcyLjU1MiAzMDEgMTcyQzMwMSAxNzEuNDQ4IDMwMC41NTIgMTcxIDMwMCAxNzFDMjk5LjQ0OCAxNzEgMjk5IDE3MS40NDggMjk5IDE3MloiIGZpbGw9IiNDNEM0QzQiLz4KPHBhdGggZD0iTTI5OSAxNzVDMjk5IDE3NS41NTIgMjk5LjQ0OCAxNzYgMzAwIDE3NkMzMDAuNTUyIDE3NiAzMDEgMTc1LjU1MiAzMDEgMTc1QzMwMSAxNzQuNDQ4IDMwMC41NTIgMTc0IDMwMCAxNzRDMjk5LjQ0OCAxNzQgMjk5IDE3NC40NDggMjk5IDE3NVoiIGZpbGw9IiNDNEM0QzQiLz4KPGxpbmUgeDE9IjQuMzcxMTRlLTA4IiB5MT0iMTkwLjUiIHgyPSIzMjEiIHkyPSIxOTAuNSIgc3Ryb2tlPSIjREFEQ0RGIi8+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIyX2QpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNzIuNTkxIDE4NC41MTZMMjc3LjIzNyAxODIuODY1TDI2NC43NSAxNzZMMjY4LjM5IDE4OS43NzZMMjcxLjExNiAxODUuNjY4TDI3NC4zOCAxODkuODQ1TDI3NS44NTQgMTg4LjY5M0wyNzIuNTkxIDE4NC41MTZaIiBmaWxsPSIjMzYzQjNFIi8+CjxwYXRoIGQ9Ik0yNzMuNDEyIDE4NC43NTVMMjc3LjQwNCAxODMuMzM2TDI3OC40NTMgMTgyLjk2M0wyNzcuNDc3IDE4Mi40MjdMMjY0Ljk5MSAxNzUuNTYyTDI2My45NjkgMTc1TDI2NC4yNjcgMTc2LjEyOEwyNjcuOTA3IDE4OS45MDRMMjY4LjE5MSAxOTAuOTgxTDI2OC44MDcgMTkwLjA1M0wyNzEuMTQ5IDE4Ni41MjJMMjczLjk4NiAxOTAuMTUzTDI3NC4yOTQgMTkwLjU0N0wyNzQuNjg4IDE5MC4yMzlMMjc2LjE2MiAxODkuMDg3TDI3Ni41NTYgMTg4Ljc4TDI3Ni4yNDggMTg4LjM4NkwyNzMuNDEyIDE4NC43NTVaIiBzdHJva2U9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yNzMuNDEyIDE4NC43NTVMMjc3LjQwNCAxODMuMzM2TDI3OC40NTMgMTgyLjk2M0wyNzcuNDc3IDE4Mi40MjdMMjY0Ljk5MSAxNzUuNTYyTDI2My45NjkgMTc1TDI2NC4yNjcgMTc2LjEyOEwyNjcuOTA3IDE4OS45MDRMMjY4LjE5MSAxOTAuOTgxTDI2OC44MDcgMTkwLjA1M0wyNzEuMTQ5IDE4Ni41MjJMMjczLjk4NiAxOTAuMTUzTDI3NC4yOTQgMTkwLjU0N0wyNzQuNjg4IDE5MC4yMzlMMjc2LjE2MiAxODkuMDg3TDI3Ni41NTYgMTg4Ljc4TDI3Ni4yNDggMTg4LjM4NkwyNzMuNDEyIDE4NC43NTVaIiBzdHJva2U9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yNzMuNDEyIDE4NC43NTVMMjc3LjQwNCAxODMuMzM2TDI3OC40NTMgMTgyLjk2M0wyNzcuNDc3IDE4Mi40MjdMMjY0Ljk5MSAxNzUuNTYyTDI2My45NjkgMTc1TDI2NC4yNjcgMTc2LjEyOEwyNjcuOTA3IDE4OS45MDRMMjY4LjE5MSAxOTAuOTgxTDI2OC44MDcgMTkwLjA1M0wyNzEuMTQ5IDE4Ni41MjJMMjczLjk4NiAxOTAuMTUzTDI3NC4yOTQgMTkwLjU0N0wyNzQuNjg4IDE5MC4yMzlMMjc2LjE2MiAxODkuMDg3TDI3Ni41NTYgMTg4Ljc4TDI3Ni4yNDggMTg4LjM4NkwyNzMuNDEyIDE4NC43NTVaIiBzdHJva2U9IndoaXRlIi8+CjwvZz4KPHBhdGggZD0iTTI2Mi41IDE2N0gyNTUuNVYxNjguNUgyNTYuNVYxNzIuNUwyNTUgMTc0VjE3NS41SDI1OC41VjE4MEgyNTkuNVYxNzUuNUgyNjNWMTc0TDI2MS41IDE3Mi41VjE2OC41SDI2Mi41VjE2N1oiIGZpbGw9IiM2RDlERTkiLz4KPC9nPgo8L2c+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgo8cmVjdCB3aWR0aD0iMzQ4IiBoZWlnaHQ9IjM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDQwKSIgZmlsbD0id2hpdGUiLz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjNfZCkiPgo8cmVjdCB5PSI0MCIgd2lkdGg9IjM0OCIgaGVpZ2h0PSIzNiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8cmVjdCB5PSI3NSIgd2lkdGg9IjM0OCIgaGVpZ2h0PSIxIiBmaWxsPSIjRDZEMkNFIi8+CjxjaXJjbGUgY3g9IjMyNi41IiBjeT0iNTcuNSIgcj0iOS41IiBmaWxsPSIjQzRDNEM0Ii8+CjxyZWN0IHg9Ii0xMjQiIHk9IjQ0IiB3aWR0aD0iMzkyIiBoZWlnaHQ9IjI4IiByeD0iMTQiIGZpbGw9IiNFRkYxRjQiLz4KPHBhdGggZD0iTTI1MCA1MS42NjlMMjUxLjI3NyA1NS43MzU3TDI1MS4zODggNTYuMDg5NUwyNTEuNzU5IDU2LjA4NTlMMjU2LjAyMSA1Ni4wNDM2TDI1Mi41NDggNTguNTE0N0wyNTIuMjQ2IDU4LjcyOTdMMjUyLjM2NCA1OS4wODEzTDI1My43MjEgNjMuMTIxOUwyNTAuMjk4IDYwLjU4MjRMMjUwIDYwLjM2MTVMMjQ5LjcwMiA2MC41ODI0TDI0Ni4yNzkgNjMuMTIxOUwyNDcuNjM2IDU5LjA4MTNMMjQ3Ljc1NCA1OC43Mjk3TDI0Ny40NTIgNTguNTE0N0wyNDMuOTc5IDU2LjA0MzZMMjQ4LjI0MSA1Ni4wODU5TDI0OC42MTIgNTYuMDg5NUwyNDguNzIzIDU1LjczNTdMMjUwIDUxLjY2OVoiIHN0cm9rZT0iIzRCNEQ1MiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI4OSA1MkMyODkgNTAuODk1NCAyODkuODk1IDUwIDI5MSA1MEMyOTIuMTA1IDUwIDI5MyA1MC44OTU0IDI5MyA1MlY1M0gyOTVDMjk2LjEwNSA1MyAyOTcgNTMuODk1NCAyOTcgNTVWNTdIMjk4QzI5OS4xMDUgNTcgMzAwIDU3Ljg5NTQgMzAwIDU5QzMwMCA2MC4xMDQ2IDI5OS4xMDUgNjEgMjk4IDYxSDI5N1Y2M0MyOTcgNjQuMTA0NiAyOTYuMTA1IDY1IDI5NSA2NUgyOTNWNjRDMjkzIDYyLjg5NTQgMjkyLjEwNSA2MiAyOTEgNjJDMjg5Ljg5NSA2MiAyODkgNjIuODk1NCAyODkgNjRWNjVIMjg3QzI4NS44OTUgNjUgMjg1IDY0LjEwNDYgMjg1IDYzVjYxSDI4NkMyODcuMTA1IDYxIDI4OCA2MC4xMDQ2IDI4OCA1OUMyODggNTcuODk1NCAyODcuMTA1IDU3IDI4NiA1N0gyODVWNTVDMjg1IDUzLjg5NTQgMjg1Ljg5NSA1MyAyODcgNTNIMjg5VjUyWiIgZmlsbD0iIzYwNjM2NyIvPgo8L2c+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMSkiPgo8cGF0aCBkPSJNMCA2LjRDMCA0LjE1OTc5IDAgMy4wMzk2OSAwLjQzNTk3NCAyLjE4NDA0QzAuODE5NDY3IDEuNDMxMzkgMS40MzEzOSAwLjgxOTQ2NyAyLjE4NDA0IDAuNDM1OTc0QzMuMDM5NjkgMCA0LjE1OTc5IDAgNi40IDBIMzQxLjZDMzQzLjg0IDAgMzQ0Ljk2IDAgMzQ1LjgxNiAwLjQzNTk3NEMzNDYuNTY5IDAuODE5NDY3IDM0Ny4xODEgMS40MzEzOSAzNDcuNTY0IDIuMTg0MDRDMzQ4IDMuMDM5NjkgMzQ4IDQuMTU5NzkgMzQ4IDYuNFY0MEgwVjYuNFoiIGZpbGw9IiNFMUU0RUIiLz4KPHBhdGggZD0iTTI2NSAyNEgyNzVNMjcwIDE5VjI5IiBzdHJva2U9IiM0QjRENTIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik02IDE2QzYgMTEuNTgxNyA5LjU4MTcyIDggMTQgOEgyMzhDMjQyLjQxOCA4IDI0NiAxMS41ODE3IDI0NiAxNlY0MEg2VjE2WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIyOSAyMUwyMzUgMjdNMjM1IDIxTDIyOSAyNyIgc3Ryb2tlPSIjNEI0RDUyIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yNTQgNDBIMjQ2VjMyQzI0NiAzNi40MTgzIDI0OS41ODIgNDAgMjU0IDQwWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTS0yIDQwSDZWMzJDNiAzNi40MTgzIDIuNDE4MjcgNDAgLTIgNDBaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2QiIHg9Ii04IiB5PSI3MiIgd2lkdGg9IjM2NCIgaGVpZ2h0PSIxNjgiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0IGR5PSI0Ii8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjQiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMTYgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPGZpbHRlciBpZD0iZmlsdGVyMV9kIiB4PSItOCIgeT0iNzIiIHdpZHRoPSIzNjQiIGhlaWdodD0iMTY4IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU9mZnNldCBkeT0iNCIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI0Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjE2IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjxmaWx0ZXIgaWQ9ImZpbHRlcjJfZCIgeD0iMjYwLjE4NyIgeT0iMTcyIiB3aWR0aD0iMjIuNDgyNiIgaGVpZ2h0PSIyNC4xODUzIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU9mZnNldCBkeT0iMSIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxLjUiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMjUgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPGZpbHRlciBpZD0iZmlsdGVyM19kIiB4PSIwIiB5PSI0MCIgd2lkdGg9IjM0OCIgaGVpZ2h0PSIzNyIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC45Mzc3MjUgMCAwIDAgMCAwLjk0NDEwNSAwIDAgMCAwIDAuOTU2ODYzIDAgMCAwIDEgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIzNDgiIGhlaWdodD0iMzYiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDQwKSIvPgo8L2NsaXBQYXRoPgo8Y2xpcFBhdGggaWQ9ImNsaXAxIj4KPHJlY3Qgd2lkdGg9IjM0OCIgaGVpZ2h0PSI0MCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K";
    },
    656810: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"v":"5.6.1","fr":30,"ip":0,"op":26,"w":240,"h":240,"nm":"Loading Fail","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Layer 1 Outlines","parent":3,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":0.5,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-1.5,1.5,0],"ix":2},"a":{"a":0,"k":[141.75,141.75,0],"ix":1},"s":{"a":0,"k":[81,81,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[32.032,-42.45],[42.45,-32.032],[10.418,0],[42.45,32.032],[32.032,42.45],[0,10.418],[-32.032,42.45],[-42.45,32.032],[-10.418,0],[-42.45,-32.032],[-32.032,-42.45],[0,-10.418]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.749019607843,0.039215686275,0.2,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[141.752,141.749],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"load 4","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-3,1,0],"ix":2},"a":{"a":0,"k":[0,-60.4,0],"ix":1},"s":{"a":0,"k":[245,245,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[88,88],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.749019607843,0.039215686275,0.2,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0.5,-60.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.3],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":14.5,"s":[6]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.3],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":14.5,"s":[100]}],"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.3],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[359]},{"t":14.5,"s":[484]}],"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":106.197876042479,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":3,"nm":"Null 3","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.34],"y":[1]},"o":{"x":[0.03],"y":[0.85]},"t":0,"s":[-45]},{"t":6,"s":[0]}],"ix":10},"p":{"a":0,"k":[123,121,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[97,97,100],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0}],"markers":[]}'
      );
    },
    421548: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"v":"5.6.5","fr":30,"ip":18,"op":60,"w":500,"h":500,"nm":"LOGO_IN_OUT_FAST","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Column_08","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[792.749,543.122,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[4.703,1.662],[0,0],[0,-7.202],[0,0],[-4.703,-1.661],[0,0],[0,7.202]],"o":[[0,-3.484],[0,0],[-9.727,-3.436],[0,0],[0,3.484],[0,0],[9.728,3.436],[0,0]],"v":[[44.699,-248.482],[37.066,-256.832],[-23.135,-278.929],[-44.699,-270.58],[-44.699,248.482],[-37.066,256.831],[23.135,278.929],[44.699,270.58]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1586,"st":-214,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Column_07","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[904.252,360.339,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,7.202],[0,0],[4.704,1.662],[0,0],[0,-7.202],[0,0],[-4.703,-1.661]],"o":[[0,0],[9.728,3.436],[0,0],[0,-3.483],[0,0],[-9.727,-3.436],[0,0],[0,3.484],[0,0]],"v":[[-36.679,446.076],[23.523,468.174],[45.087,459.826],[44.7,-71.916],[37.067,-80.265],[-23.135,-102.362],[-44.7,-94.013],[-44.312,437.727],[-36.679,446.076]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1586,"st":-214,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Column_06","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1015.747,418.048,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,7.203],[0,0],[4.703,1.661],[0,0],[0,-7.202],[0,0],[-4.703,-1.662]],"o":[[0,0],[9.727,3.437],[0,0],[0,-3.484],[0,0],[-9.727,-3.436],[0,0],[0,3.484],[0,0]],"v":[[-37.184,347.182],[23.018,369.279],[44.582,360.93],[44.7,-65.208],[37.066,-73.557],[-23.135,-95.654],[-44.7,-87.305],[-44.817,338.833],[-37.184,347.182]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1586,"st":-214,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Column_05","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1127.241,555,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.704,1.661],[0,0],[0,-7.203],[0,0],[-4.703,-1.662],[0,0],[0,7.203],[0,0]],"o":[[0,0],[-9.727,-3.437],[0,0],[0,3.484],[0,0],[9.727,3.437],[0,0],[0,-3.483]],"v":[[37.066,-122.545],[-23.136,-144.643],[-44.7,-136.294],[-44.7,114.197],[-37.067,122.546],[23.135,144.643],[44.7,136.294],[44.7,-114.197]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-213,"bm":0}]},{"id":"comp_1","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Logo_Negative-2 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,540,0],"ix":2},"a":{"a":0,"k":[562.5,1218,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.001,-28.981],[10.231,1.882],[5.454,1.967],[15.581,5.739],[1.373,0.921],[0,0],[0.001,-30.912],[11.399,2.427],[2.648,0.97],[17.911,6.639],[0,8.481],[0,7.56],[0,0],[0,-21.717],[13.518,4.692],[15.127,5.532],[4.497,1.723],[0.002,7.687],[-0.001,15.123],[0,0],[0,0],[12.286,3.969],[11.392,4.16],[8.701,3.295],[0,7.586],[0,65.58],[0,0],[0,0],[0,0],[0,0]],"o":[[0,28.981],[0,10.231],[-5.655,-1.04],[-15.619,-5.632],[-2.505,-0.923],[0,0],[0.002,30.912],[0,11.478],[-2.745,-0.585],[-17.935,-6.575],[-8.011,-2.97],[-0.001,-7.56],[0,0],[0,21.717],[0,13.986],[-15.215,-5.28],[-4.523,-1.654],[-7.259,-2.782],[-0.005,-15.123],[0,0],[0,0],[0,12.517],[-11.533,-3.725],[-8.74,-3.193],[-7.228,-2.738],[-0.002,-65.581],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[214.268,-587.514],[213.768,-480.07],[197.108,-465.941],[180.547,-471.227],[125.765,-491.833],[120.038,-494.488],[103.188,-490.282],[102.692,-394.046],[84.286,-379.33],[76.242,-381.457],[18.462,-401.748],[9.281,-414.984],[9.78,-441.166],[-9.511,-429.819],[-9.01,-354.168],[-30.789,-338.902],[-78.693,-355.937],[-92.253,-360.925],[-100.976,-373.538],[-101.978,-428.908],[-120.653,-430.085],[-122.153,-359.839],[-142.412,-345.327],[-176.649,-357.626],[-205.318,-367.338],[-213.767,-379.496],[-213.268,-583.737],[-562.5,-581.933],[-562.5,600.309],[562.5,600.309],[562.5,-589.31]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":4,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[562.5,1846.69],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,84.422],[-12.161,-3.752],[-10.614,-3.865],[-9.643,-3.623],[0,-7.615],[0,0],[0,0],[0,0],[-13.681,-4.836],[-16.679,-6.123],[-3.087,-1.22],[-0.003,-6.802],[-0.001,-9.423],[0,0],[-13.598,-4.811],[-15.903,-5.838],[-4.17,-1.645],[0.009,-5.255],[0.003,-24.139],[0,0],[0,0],[-10.203,-0.075],[-2.763,-0.994],[-19.006,-7.008],[0,-8.259],[0,-32.016],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,-84.421],[0,-12.426],[10.783,3.327],[9.679,3.525],[7.163,2.691],[0,0],[0,0],[0,0],[0,-14.165],[16.75,5.922],[3.116,1.144],[6.369,2.516],[0.004,9.423],[0,0],[0.114,-13.966],[15.969,5.649],[4.209,1.545],[4.636,1.829],[-0.039,24.14],[0,0],[0,0],[0,-10.139],[2.929,0.021],[19.06,6.858],[7.786,2.871],[0.001,32.017],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-215.269,614.978],[-215.769,585.683],[-214.269,338.419],[-193.963,320.301],[-162.05,331.687],[-130.059,343.891],[-121.656,356.077],[-120.156,362.251],[-102.48,350.251],[-102.48,331.364],[-80.35,316.028],[-26.794,333.841],[-17.461,337.318],[-9.516,348.937],[-9.514,377.205],[9.284,395.441],[31.415,380.415],[82.64,397.882],[95.259,402.543],[102.241,412.874],[101.191,479.791],[120.275,488.135],[120.275,480.384],[138.216,467.43],[146.968,469.05],[204.04,489.926],[213.267,503.201],[213.267,599.251],[562.5,611.251],[562.5,-636.749],[-562.5,-636.749],[-562.5,618.749]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":4,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[562.5,618.749],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":318,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Layer 13","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.508,"y":0},"t":0,"s":[0,-888,0],"to":[0,33.333,0],"ti":[0,-33.333,0]},{"t":62,"s":[0,-688,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.704,1.661],[0,0],[0,-7.203],[0,0],[-4.703,-1.662],[0,0],[0,7.203],[0,0]],"o":[[0,0],[-9.727,-3.437],[0,0],[0,3.484],[0,0],[9.727,3.437],[0,0],[0,-3.483]],"v":[[37.066,-122.545],[-23.136,-144.643],[-44.7,-136.294],[-44.7,114.197],[-37.067,122.546],[23.135,144.643],[44.7,136.294],[44.7,-114.197]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":3,"ty":3,"nm":"Layer 6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.324,"y":1},"o":{"x":0.508,"y":0},"t":0,"s":[1127.241,555,0],"to":[0,114.667,0],"ti":[0,-114.667,0]},{"t":62,"s":[1127.241,1243,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Layer 7","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-167.241,-392.942,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.704,1.661],[0,0],[0,-7.203],[0,0],[-4.703,-1.662],[0,0],[0,7.203],[0,0]],"o":[[0,0],[-9.727,-3.437],[0,0],[0,3.484],[0,0],[9.727,3.437],[0,0],[0,-3.483]],"v":[[204.308,-107.545],[144.106,-129.643],[122.542,-121.294],[122.542,129.196],[130.175,137.545],[190.377,159.643],[211.941,151.294],[211.941,-99.197]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Layer 12","parent":17,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-1131,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[4.703,1.662],[0,0],[0,-7.202],[0,0],[-4.703,-1.661],[0,0],[0,7.202]],"o":[[0,-3.484],[0,0],[-9.727,-3.436],[0,0],[0,3.484],[0,0],[9.728,3.436],[0,0]],"v":[[44.699,-248.482],[37.066,-256.832],[-23.135,-278.929],[-44.699,-270.58],[-44.699,248.482],[-37.066,256.831],[23.135,278.929],[44.699,270.58]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Layer 11","parent":18,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-900.221,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,7.202],[0,0],[4.704,1.662],[0,0],[0,-7.202],[0,0],[-4.703,-1.661]],"o":[[0,0],[9.728,3.436],[0,0],[0,-3.483],[0,0],[-9.727,-3.436],[0,0],[0,3.484],[0,0]],"v":[[-37.066,80.053],[23.135,102.151],[44.7,93.802],[44.7,-71.705],[37.067,-80.054],[-23.135,-102.151],[-44.7,-93.802],[-44.7,71.704],[-37.066,80.053]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Layer 10","parent":18,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-1266,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,7.202],[0,0],[4.704,1.662],[0,0],[0,-7.202],[0,0],[-4.703,-1.661]],"o":[[0,0],[9.728,3.436],[0,0],[0,-3.483],[0,0],[-9.727,-3.436],[0,0],[0,3.484],[0,0]],"v":[[-37.066,80.264],[23.135,102.362],[44.7,94.013],[44.7,-71.916],[37.067,-80.265],[-23.135,-102.362],[-44.7,-94.013],[-44.7,71.915],[-37.066,80.264]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Layer 9","parent":19,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-701.21,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,7.203],[0,0],[4.703,1.661],[0,0],[0,-7.202],[0,0],[-4.703,-1.662]],"o":[[0,0],[9.727,3.437],[0,0],[0,-3.484],[0,0],[-9.727,-3.436],[0,0],[0,3.484],[0,0]],"v":[[-37.066,73.557],[23.135,95.654],[44.7,87.305],[44.7,-65.208],[37.066,-73.557],[-23.135,-95.654],[-44.7,-87.305],[-44.7,65.208],[-37.066,73.557]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Layer 8","parent":19,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-975,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,7.203],[0,0],[4.703,1.661],[0,0],[0,-7.202],[0,0],[-4.703,-1.662]],"o":[[0,0],[9.727,3.437],[0,0],[0,-3.484],[0,0],[-9.727,-3.436],[0,0],[0,3.484],[0,0]],"v":[[-37.066,73.557],[23.135,95.654],[44.7,87.305],[44.7,-65.208],[37.066,-73.557],[-23.135,-95.654],[-44.7,-87.305],[-44.7,65.208],[-37.066,73.557]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"Isolation Mode 6","parent":17,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0.009,-618.76,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,7.202],[0,0],[4.703,1.662],[0,0],[0,-7.202],[0,0],[-4.704,-1.662]],"o":[[0,0],[9.727,3.436],[0,0],[0,-3.484],[0,0],[-9.727,-3.436],[0,0],[0,3.484],[0,0]],"v":[[-37.066,199.643],[23.136,221.741],[44.699,213.392],[44.699,-191.294],[37.067,-199.643],[-23.135,-221.74],[-44.699,-213.391],[-44.699,191.294],[-37.066,199.643]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"Isolation Mode 5","parent":19,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-200.729,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,7.203],[0,0],[4.704,1.662],[0,0],[0,-7.203],[0,0],[-4.704,-1.662]],"o":[[0,0],[9.727,3.436],[0,0],[0,-3.484],[0,0],[-9.726,-3.436],[0,0],[0,3.484],[0,0]],"v":[[-37.066,51.816],[23.136,73.914],[44.699,65.564],[44.699,-43.467],[37.066,-51.816],[-23.136,-73.913],[-44.699,-65.564],[-44.699,43.467],[-37.066,51.816]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"Isolation Mode 4","parent":19,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-439.086,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,7.202],[0,0],[4.704,1.661],[0,0],[0,-7.203],[0,0],[-4.704,-1.662]],"o":[[0,0],[9.727,3.436],[0,0],[0,-3.483],[0,0],[-9.726,-3.437],[0,0],[0,3.484],[0,0]],"v":[[-37.066,135.783],[23.136,157.88],[44.699,149.531],[44.699,-127.434],[37.066,-135.782],[-23.136,-157.88],[-44.699,-149.531],[-44.699,127.433],[-37.066,135.783]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"Isolation Mode 3","parent":18,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0.001,-694.379,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,7.202],[0,0],[4.704,1.662],[0,0],[0,-7.202],[0,0],[-4.704,-1.661]],"o":[[0,0],[9.727,3.436],[0,0],[0,-3.484],[0,0],[-9.727,-3.436],[0,0],[0,3.484],[0,0]],"v":[[-37.066,69.229],[23.136,91.327],[44.699,82.979],[44.699,-60.881],[37.066,-69.23],[-23.136,-91.328],[-44.699,-82.978],[-44.699,60.88],[-37.066,69.229]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"Isolation Mode 2","parent":18,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0.001,-371.057,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,7.202],[0,0],[4.704,1.662],[0,0],[0,-7.203],[0,0],[-4.704,-1.662]],"o":[[0,0],[9.727,3.436],[0,0],[0,-3.484],[0,0],[-9.727,-3.438],[0,0],[0,3.484],[0,0]],"v":[[-37.066,163.775],[23.136,185.872],[44.699,177.523],[44.699,-155.426],[37.066,-163.775],[-23.136,-185.871],[-44.699,-177.523],[-44.699,155.425],[-37.066,163.775]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"Isolation Mode","parent":17,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0.009,-336.587,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,7.202],[0,0],[4.703,1.662],[0,0],[0,-7.203],[0,0],[-4.704,-1.661]],"o":[[0,0],[9.727,3.436],[0,0],[0,-3.483],[0,0],[-9.727,-3.437],[0,0],[0,3.484],[0,0]],"v":[[-37.066,30.891],[23.136,52.989],[44.699,44.64],[44.699,-22.544],[37.067,-30.892],[-23.135,-52.989],[-44.699,-44.64],[-44.699,22.542],[-37.066,30.891]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":17,"ty":3,"nm":"Layer 5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":1,"y":1},"o":{"x":0.508,"y":0},"t":10,"s":[792.749,543.122,0],"to":[0,114.667,0],"ti":[0,-188.5,0]},{"i":{"x":0.121,"y":1},"o":{"x":0.167,"y":0.167},"t":46,"s":[792.749,1231.122,0],"to":[0,188.5,0],"ti":[0,-73.833,0]},{"t":79,"s":[792.749,1674.122,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":18,"ty":3,"nm":"Layer 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":1,"y":1},"o":{"x":0.508,"y":0},"t":5,"s":[904.252,360.339,0],"to":[0,114.667,0],"ti":[0,-211,0]},{"i":{"x":0.193,"y":1},"o":{"x":0.167,"y":0.167},"t":41,"s":[904.252,1048.339,0],"to":[0,211,0],"ti":[0,-96.333,0]},{"t":79,"s":[904.252,1626.339,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":19,"ty":3,"nm":"Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":1,"y":1},"o":{"x":0.508,"y":0},"t":7,"s":[1015.747,418.048,0],"to":[0,114.667,0],"ti":[0,-162.5,0]},{"i":{"x":0.166,"y":1},"o":{"x":0.167,"y":0.167},"t":43,"s":[1015.747,1106.048,0],"to":[0,162.5,0],"ti":[0,-47.833,0]},{"t":79,"s":[1015.747,1393.048,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":1587,"st":-151,"bm":0}]},{"id":"comp_2","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Logo_Negative-2 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,540,0],"ix":2},"a":{"a":0,"k":[562.5,1218,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.001,-28.981],[10.231,1.882],[5.454,1.967],[15.581,5.739],[1.373,0.921],[0,0],[0.001,-30.912],[11.399,2.427],[2.648,0.97],[17.911,6.639],[0,8.481],[0,7.56],[0,0],[0,-21.717],[13.518,4.692],[15.127,5.532],[4.497,1.723],[0.002,7.687],[-0.001,15.123],[0,0],[0,0],[12.286,3.969],[11.392,4.16],[8.701,3.295],[0,7.586],[0,65.58],[0,0],[0,0],[0,0],[0,0]],"o":[[0,28.981],[0,10.231],[-5.655,-1.04],[-15.619,-5.632],[-2.505,-0.923],[0,0],[0.002,30.912],[0,11.478],[-2.745,-0.585],[-17.935,-6.575],[-8.011,-2.97],[-0.001,-7.56],[0,0],[0,21.717],[0,13.986],[-15.215,-5.28],[-4.523,-1.654],[-7.259,-2.782],[-0.005,-15.123],[0,0],[0,0],[0,12.517],[-11.533,-3.725],[-8.74,-3.193],[-7.228,-2.738],[-0.002,-65.581],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[214.268,-587.514],[213.768,-480.07],[197.108,-465.941],[180.547,-471.227],[125.765,-491.833],[120.038,-494.488],[103.188,-490.282],[102.692,-394.046],[84.286,-379.33],[76.242,-381.457],[18.462,-401.748],[9.281,-414.984],[9.78,-441.166],[-9.511,-429.819],[-9.01,-354.168],[-30.789,-338.902],[-78.693,-355.937],[-92.253,-360.925],[-100.976,-373.538],[-101.978,-428.908],[-120.653,-430.085],[-122.153,-359.839],[-142.412,-345.327],[-176.649,-357.626],[-205.318,-367.338],[-213.767,-379.496],[-213.268,-583.737],[-562.5,-581.933],[-562.5,600.309],[562.5,600.309],[562.5,-589.31]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":4,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[562.5,1846.69],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,84.422],[-12.161,-3.752],[-10.614,-3.865],[-9.643,-3.623],[0,-7.615],[0,0],[0,0],[0,0],[-13.681,-4.836],[-16.679,-6.123],[-3.087,-1.22],[-0.003,-6.802],[-0.001,-9.423],[0,0],[-13.598,-4.811],[-15.903,-5.838],[-4.17,-1.645],[0.009,-5.255],[0.003,-24.139],[0,0],[0,0],[-10.203,-0.075],[-2.763,-0.994],[-19.006,-7.008],[0,-8.259],[0,-32.016],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,-84.421],[0,-12.426],[10.783,3.327],[9.679,3.525],[7.163,2.691],[0,0],[0,0],[0,0],[0,-14.165],[16.75,5.922],[3.116,1.144],[6.369,2.516],[0.004,9.423],[0,0],[0.114,-13.966],[15.969,5.649],[4.209,1.545],[4.636,1.829],[-0.039,24.14],[0,0],[0,0],[0,-10.139],[2.929,0.021],[19.06,6.858],[7.786,2.871],[0.001,32.017],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-215.269,614.978],[-215.769,585.683],[-214.269,338.419],[-193.963,320.301],[-162.05,331.687],[-130.059,343.891],[-121.656,356.077],[-120.156,362.251],[-102.48,350.251],[-102.48,331.364],[-80.35,316.028],[-26.794,333.841],[-17.461,337.318],[-9.516,348.937],[-9.514,377.205],[9.284,395.441],[31.415,380.415],[82.64,397.882],[95.259,402.543],[102.241,412.874],[101.191,479.791],[120.275,488.135],[120.275,480.384],[138.216,467.43],[146.968,469.05],[204.04,489.926],[213.267,503.201],[213.267,599.251],[562.5,611.251],[562.5,-636.749],[-562.5,-636.749],[-562.5,618.749]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":4,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[562.5,618.749],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1656,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Layer 6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.324,"y":1},"o":{"x":0.508,"y":0},"t":0,"s":[1127.241,555,0],"to":[0,114.667,0],"ti":[0,-114.667,0]},{"t":62,"s":[1127.241,1243,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.704,1.661],[0,0],[0,-7.203],[0,0],[-4.703,-1.662],[0,0],[0,7.203],[0,0]],"o":[[0,0],[-9.727,-3.437],[0,0],[0,3.484],[0,0],[9.727,3.437],[0,0],[0,-3.483]],"v":[[37.066,-122.545],[-23.136,-144.643],[-44.7,-136.294],[-44.7,114.197],[-37.067,122.546],[23.135,144.643],[44.7,136.294],[44.7,-114.197]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Layer 7","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-167.241,-392.942,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.704,1.661],[0,0],[0,-7.203],[0,0],[-4.703,-1.662],[0,0],[0,7.203],[0,0]],"o":[[0,0],[-9.727,-3.437],[0,0],[0,3.484],[0,0],[9.727,3.437],[0,0],[0,-3.483]],"v":[[204.308,-107.545],[144.106,-129.643],[122.542,-121.294],[122.542,129.196],[130.175,137.545],[190.377,159.643],[211.941,151.294],[211.941,-99.197]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"Isolation Mode 6","parent":17,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0.009,-618.76,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,7.202],[0,0],[4.703,1.662],[0,0],[0,-7.202],[0,0],[-4.704,-1.662]],"o":[[0,0],[9.727,3.436],[0,0],[0,-3.484],[0,0],[-9.727,-3.436],[0,0],[0,3.484],[0,0]],"v":[[-37.066,199.643],[23.136,221.741],[44.699,213.392],[44.699,-191.294],[37.067,-199.643],[-23.135,-221.74],[-44.699,-213.391],[-44.699,191.294],[-37.066,199.643]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"Isolation Mode 5","parent":19,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-200.729,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,7.203],[0,0],[4.704,1.662],[0,0],[0,-7.203],[0,0],[-4.704,-1.662]],"o":[[0,0],[9.727,3.436],[0,0],[0,-3.484],[0,0],[-9.726,-3.436],[0,0],[0,3.484],[0,0]],"v":[[-37.066,51.816],[23.136,73.914],[44.699,65.564],[44.699,-43.467],[37.066,-51.816],[-23.136,-73.913],[-44.699,-65.564],[-44.699,43.467],[-37.066,51.816]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"Isolation Mode 4","parent":19,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-439.086,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,7.202],[0,0],[4.704,1.661],[0,0],[0,-7.203],[0,0],[-4.704,-1.662]],"o":[[0,0],[9.727,3.436],[0,0],[0,-3.483],[0,0],[-9.726,-3.437],[0,0],[0,3.484],[0,0]],"v":[[-37.066,135.783],[23.136,157.88],[44.699,149.531],[44.699,-127.434],[37.066,-135.782],[-23.136,-157.88],[-44.699,-149.531],[-44.699,127.433],[-37.066,135.783]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"Isolation Mode 3","parent":18,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0.001,-694.379,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,7.202],[0,0],[4.704,1.662],[0,0],[0,-7.202],[0,0],[-4.704,-1.661]],"o":[[0,0],[9.727,3.436],[0,0],[0,-3.484],[0,0],[-9.727,-3.436],[0,0],[0,3.484],[0,0]],"v":[[-37.066,69.229],[23.136,91.327],[44.699,82.979],[44.699,-60.881],[37.066,-69.23],[-23.136,-91.328],[-44.699,-82.978],[-44.699,60.88],[-37.066,69.229]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"Isolation Mode 2","parent":18,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0.001,-371.057,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,7.202],[0,0],[4.704,1.662],[0,0],[0,-7.203],[0,0],[-4.704,-1.662]],"o":[[0,0],[9.727,3.436],[0,0],[0,-3.484],[0,0],[-9.727,-3.438],[0,0],[0,3.484],[0,0]],"v":[[-37.066,163.775],[23.136,185.872],[44.699,177.523],[44.699,-155.426],[37.066,-163.775],[-23.136,-185.871],[-44.699,-177.523],[-44.699,155.425],[-37.066,163.775]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"Isolation Mode","parent":17,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0.009,-336.587,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,7.202],[0,0],[4.703,1.662],[0,0],[0,-7.203],[0,0],[-4.704,-1.661]],"o":[[0,0],[9.727,3.436],[0,0],[0,-3.483],[0,0],[-9.727,-3.437],[0,0],[0,3.484],[0,0]],"v":[[-37.066,30.891],[23.136,52.989],[44.699,44.64],[44.699,-22.544],[37.067,-30.892],[-23.135,-52.989],[-44.699,-44.64],[-44.699,22.542],[-37.066,30.891]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":17,"ty":4,"nm":"Layer 5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":1,"y":1},"o":{"x":0.508,"y":0},"t":10,"s":[792.749,543.122,0],"to":[0,114.667,0],"ti":[0,-188.5,0]},{"i":{"x":0.121,"y":1},"o":{"x":0.167,"y":0.167},"t":46,"s":[792.749,1231.122,0],"to":[0,188.5,0],"ti":[0,-73.833,0]},{"t":79,"s":[792.749,1674.122,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[4.703,1.662],[0,0],[0,-7.202],[0,0],[-4.703,-1.661],[0,0],[0,7.202]],"o":[[0,-3.484],[0,0],[-9.727,-3.436],[0,0],[0,3.484],[0,0],[9.728,3.436],[0,0]],"v":[[44.699,-248.482],[37.066,-256.832],[-23.135,-278.929],[-44.699,-270.58],[-44.699,248.482],[-37.066,256.831],[23.135,278.929],[44.699,270.58]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":18,"ty":4,"nm":"Layer 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":1,"y":1},"o":{"x":0.508,"y":0},"t":5,"s":[904.252,360.339,0],"to":[0,114.667,0],"ti":[0,-211,0]},{"i":{"x":0.193,"y":1},"o":{"x":0.167,"y":0.167},"t":41,"s":[904.252,1048.339,0],"to":[0,211,0],"ti":[0,-96.333,0]},{"t":79,"s":[904.252,1626.339,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,7.202],[0,0],[4.704,1.662],[0,0],[0,-7.202],[0,0],[-4.703,-1.661]],"o":[[0,0],[9.728,3.436],[0,0],[0,-3.483],[0,0],[-9.727,-3.436],[0,0],[0,3.484],[0,0]],"v":[[-37.066,80.264],[23.135,102.362],[44.7,94.013],[44.7,-71.916],[37.067,-80.265],[-23.135,-102.362],[-44.7,-94.013],[-44.7,71.915],[-37.066,80.264]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":19,"ty":4,"nm":"Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":1,"y":1},"o":{"x":0.508,"y":0},"t":7,"s":[1015.747,418.048,0],"to":[0,114.667,0],"ti":[0,-162.5,0]},{"i":{"x":0.166,"y":1},"o":{"x":0.167,"y":0.167},"t":43,"s":[1015.747,1106.048,0],"to":[0,162.5,0],"ti":[0,-47.833,0]},{"t":79,"s":[1015.747,1393.048,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,7.203],[0,0],[4.703,1.661],[0,0],[0,-7.202],[0,0],[-4.703,-1.662]],"o":[[0,0],[9.727,3.437],[0,0],[0,-3.484],[0,0],[-9.727,-3.436],[0,0],[0,3.484],[0,0]],"v":[[-37.066,73.557],[23.135,95.654],[44.7,87.305],[44.7,-65.208],[37.066,-73.557],[-23.135,-95.654],[-44.7,-87.305],[-44.7,65.208],[-37.066,73.557]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":20,"ty":4,"nm":"Layer 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":1,"y":1},"o":{"x":0.508,"y":0},"t":0,"s":[904.252,726.118,0],"to":[0,114.667,0],"ti":[0,-114.667,0]},{"t":36,"s":[904.252,1414.118,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,7.202],[0,0],[4.704,1.662],[0,0],[0,-7.202],[0,0],[-4.703,-1.661]],"o":[[0,0],[9.728,3.436],[0,0],[0,-3.483],[0,0],[-9.727,-3.436],[0,0],[0,3.484],[0,0]],"v":[[-37.066,80.053],[23.135,102.151],[44.7,93.802],[44.7,-71.705],[37.067,-80.054],[-23.135,-102.151],[-44.7,-93.802],[-44.7,71.704],[-37.066,80.053]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-151,"bm":0},{"ddd":0,"ind":21,"ty":4,"nm":"Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":1,"y":1},"o":{"x":0.508,"y":0},"t":0,"s":[1015.747,691.838,0],"to":[0,114.667,0],"ti":[0,-114.667,0]},{"t":36,"s":[1015.747,1379.838,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,7.203],[0,0],[4.703,1.661],[0,0],[0,-7.202],[0,0],[-4.703,-1.662]],"o":[[0,0],[9.727,3.437],[0,0],[0,-3.484],[0,0],[-9.727,-3.436],[0,0],[0,3.484],[0,0]],"v":[[-37.066,73.557],[23.135,95.654],[44.7,87.305],[44.7,-65.208],[37.066,-73.557],[-23.135,-95.654],[-44.7,-87.305],[-44.7,65.208],[-37.066,73.557]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784313725,0.20784313725490197,0.23921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1587,"st":-151,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"Null 1","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[82,82,100],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"D_MAtte","parent":1,"td":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2},"a":{"a":0,"k":[960,540,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":1920,"h":1080,"ip":37,"op":60,"st":37,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"D_2_Logo_IN","parent":1,"tt":1,"refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2},"a":{"a":0,"k":[960,540,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"tm":{"a":1,"k":[{"i":{"x":[0.196],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":37,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[2.7]},{"t":1624,"s":[52.9]}],"ix":2},"w":1920,"h":1080,"ip":37,"op":60,"st":37,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"D_MAtte","parent":1,"td":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2},"a":{"a":0,"k":[960,540,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":1920,"h":1080,"ip":0,"op":23,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"D_2_Logo_IN","parent":1,"tt":1,"refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2},"a":{"a":0,"k":[960,540,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"tm":{"a":1,"k":[{"i":{"x":[0.196],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"t":25,"s":[2.7]},{"t":1587,"s":[52.9]}],"ix":2},"w":1920,"h":1080,"ip":0,"op":23,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":0,"nm":"D_MAtte","parent":1,"td":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2},"a":{"a":0,"k":[960,540,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":1920,"h":1080,"ip":20,"op":42,"st":20,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"D_2_Logo_OUT","parent":1,"tt":1,"refId":"comp_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2},"a":{"a":0,"k":[960,540,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"tm":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.701],"y":[0]},"t":20,"s":[0]},{"t":45,"s":[2.7]}],"ix":2},"w":1920,"h":1080,"ip":20,"op":42,"st":20,"bm":0}],"markers":[]}'
      );
    },
    809205: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"v":"5.6.1","fr":30,"ip":0,"op":25,"w":240,"h":240,"nm":"Checkmark Light Theme","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"Null 5","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[121,123,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"load 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[120,122,0],"ix":2},"a":{"a":0,"k":[0,-60.4,0],"ix":1},"s":{"a":0,"k":[238,238,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[88,88],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.054901960784,0.392156862745,0.462745098039,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0.5,-60.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.3],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":14.5,"s":[6]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.3],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":14.5,"s":[100]}],"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.3],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[359]},{"t":14.5,"s":[484]}],"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":106.197876042479,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Layer 1 copy Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[121.37,121.5,0],"ix":2},"a":{"a":0,"k":[141.75,141.75,0],"ix":1},"s":{"a":0,"k":[80,80,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0.167},"t":11,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-16.684,43.382],[5.054,20.793],[-7.657,8.493],[-16.503,17.76],[-42.482,-9.859],[-55.367,2.258]],"c":true}]},{"t":20,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-16.684,43.382],[55.367,-31.082],[42.656,-43.382],[-16.503,17.76],[-42.482,-9.859],[-55.367,2.258]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901960784,0.392156862745,0.462745098039,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[143.858,135.768],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":11,"op":150,"st":0,"bm":0}],"markers":[]}'
      );
    }
  }
]);
