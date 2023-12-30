"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [2749],
  {
    17825: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.assertUnreachable = void 0),
        (t.assertUnreachable = function (e, t = "Didn't expect to reach this code.") {
          throw new Error(t);
        });
    },
    732663: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.asyncFilter = void 0),
        (t.asyncFilter = async function (e, t) {
          const r = await Promise.all(e.map(t));
          return e.filter((e, t) => r[t]);
        });
    },
    127627: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.asyncMapLimit = void 0);
      const n = r(504939);
      t.asyncMapLimit = (e, t, r, o = e.length) => {
        const a = e.length;
        let i = 0;
        const s = [];
        let c = 0;
        const p = (n) => (o) => {
            if (((s[n] = o), i++, a === i)) return r(s);
            c < a - 1 && (c++, t(e[c], p(c)));
          },
          u = Math.max(Math.min(a, o), 1);
        c = u - 1;
        for (let r = 0; r < u; r++) t(e[r], p(r)).catch((e) => (0, n.logWarn)({ message: e.message }));
      };
    },
    263311: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.debounce = void 0),
        (t.debounce = function (e, t) {
          let r;
          return function (n, ...o) {
            var a = this;
            clearTimeout(r),
              n.immediateCall
                ? ((r = null), e.apply(a, o))
                : (r = setTimeout(function () {
                    (r = null), e.apply(a, o);
                  }, t));
          };
        });
    },
    205851: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.decipherDatabaseRules = void 0);
      const n = r(956668),
        o = r(383570);
      t.decipherDatabaseRules = (e, t) =>
        (async (e, t) => {
          const r = await (0, n.decipherDashlaneSecureData)(t, e, "", (0, o.makeGetDerivateKeyWithCacheAndQueue)());
          return (0, n.deflatedUtf8ToUtf16)(r);
        })(e, t);
    },
    582761: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sanitizeTransactions = void 0),
        (t.sanitizeTransactions = (e) => e.filter(Boolean));
    },
    693564: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getWindowLocalStorage = void 0),
        (t.getWindowLocalStorage = function () {
          return self.localStorage || null;
        });
    },
    696186: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.inMemoryInterSessionUnsyncedSliceReducer = void 0);
      var n = r(175486);
      Object.defineProperty(t, "inMemoryInterSessionUnsyncedSliceReducer", {
        enumerable: !0,
        get: function () {
          return n.inMemoryInterSessionUnsyncedSliceReducer;
        }
      });
    },
    16373: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.resetAllLoginNotification = t.addNewLoginNotification = t.RESET_ALL_LOGIN_NOTIFICATIONS = t.ADD_NEW_LOGIN_NOTIFICATION = void 0),
        (t.ADD_NEW_LOGIN_NOTIFICATION = "ADD_NEW_LOGIN_NOTIFICATION"),
        (t.RESET_ALL_LOGIN_NOTIFICATIONS = "RESET_ALL_LOGIN_NOTIFICATIONS"),
        (t.addNewLoginNotification = (e) => ({ type: t.ADD_NEW_LOGIN_NOTIFICATION, notification: e })),
        (t.resetAllLoginNotification = () => ({ type: t.RESET_ALL_LOGIN_NOTIFICATIONS }));
    },
    171907: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(16373);
      t.default = (e = [], t) => {
        switch (t.type) {
          case n.ADD_NEW_LOGIN_NOTIFICATION:
            return [...e, t.notification];
          case n.RESET_ALL_LOGIN_NOTIFICATIONS:
            return [];
          default:
            return e;
        }
      };
    },
    175486: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.inMemoryInterSessionUnsyncedSliceReducer = void 0);
      const n = r(182422),
        o = r(171907);
      t.inMemoryInterSessionUnsyncedSliceReducer = (0, n.combineReducers)({ loginNotification: o.default });
    },
    996637: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.TsEventBusCommandQueryBus = void 0);
      var n = r(942278);
      Object.defineProperty(t, "TsEventBusCommandQueryBus", {
        enumerable: !0,
        get: function () {
          return n.TsEventBusCommandQueryBus;
        }
      });
    },
    942278: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.TsEventBusCommandQueryBus = void 0);
      const n = r(71796),
        o = r(30137),
        a = r(407036);
      class i extends o.CommandQueryBus {
        constructor(e, t, r) {
          super(e), (this.bus = r), r || (this.bus = (0, n.createEventBus)({ events: t }));
        }
        registerCommand(e, t) {
          this.bus[e].on(t);
        }
        registerQuery(e, t) {
          this.bus[e].on(t);
        }
        registerLiveQuery(e, t) {
          (0, a.connectLazySlot)(this.bus[e], t);
        }
      }
      t.TsEventBusCommandQueryBus = i;
    },
    276901: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.LocalStorageEventStore = void 0);
      const n = r(233968),
        o = r(715660);
      class a extends n.EventStore {
        constructor(e) {
          super(), (this.localStorageService = e);
        }
        async store(e) {
          await this.localStorageService.getInstance().storeEventStore(e);
        }
        async retrieve() {
          const e = await this.localStorageService.getInstance().getEventStore();
          return null === e ? o.defaultCarbonEventStore : { iconsUpdates: e.iconsUpdates || o.defaultCarbonEventStore.iconsUpdates };
        }
      }
      t.LocalStorageEventStore = a;
    },
    942898: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.EventStoreConsumer = void 0);
      const n = r(235992);
      t.EventStoreConsumer = class {
        constructor(e, t) {
          (this.eventStore = e),
            (this.hooks = t),
            (this.liveConsumptionSubs = {}),
            (this.lockIds = {}),
            (this.startTopic = (e) => {
              this.startLiveConsumption(e), this.consumeTopic(e);
            }),
            (this.lockTopic = (e) => {
              this.stopLiveConsumption(e);
              const t = (0, n.v4)();
              return (this.lockIds[e] = (this.lockIds[e] || new Set()).add(t)), t;
            }),
            (this.releaseTopic = (e, t) => {
              const r = this.lockIds[e];
              r && r.delete(t), (r && 0 !== r.size) || this.startTopic(e);
            }),
            (this.teardown = () => {
              Object.keys(this.liveConsumptionSubs).forEach(this.stopLiveConsumption);
            }),
            (this.consumeTopic = async (e) => {
              const t = await this.eventStore.getItems(e);
              for (const r of t) this.handleItem(e, r);
            }),
            (this.startLiveConsumption = (e) => {
              this.liveConsumptionSubs[e] ||
                (this.liveConsumptionSubs[e] = this.eventStore.newItems$(e).subscribe((t) => this.handleItem(e, t)));
            }),
            (this.stopLiveConsumption = (e) => {
              this.liveConsumptionSubs[e] && (this.liveConsumptionSubs[e].unsubscribe(), delete this.liveConsumptionSubs[e]);
            }),
            (this.handleItem = async (e, t) => {
              const r = this.hooks[e];
              r || (await this.eventStore.remove(e, t.id)), (await r(t.event)) && (await this.eventStore.remove(e, t.id));
            });
        }
      };
    },
    436606: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.DebugConnector = void 0);
      const n = r(71796);
      t.DebugConnector = { log: (0, n.slot)(), info: (0, n.slot)(), warning: (0, n.slot)(), error: (0, n.slot)() };
    },
    344261: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    92231: function (e, t, r) {
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, n, o);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), o(r(344261), t), o(r(436606), t);
    },
    731335: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const n = r(578759),
        o = r(391296);
      t.config = {
        commands: {},
        queries: {
          getIsBrazeContentDisabled: { selector: n.disableBrazeContentCardsSelector },
          getIsLoginFlowMigrationDisabled: { selector: n.disableLoginFlowMigrationSelector },
          getIsAutoSSOLoginDisabled: { selector: n.disableAutoSSOLoginSelector }
        },
        liveQueries: {
          liveIsBrazeContentDisabled: { operator: o.disableBrazeContentCardsOperator$ },
          liveIsLoginFlowMigrationDisabled: { operator: o.disableLoginFlowMigrationOperator$ },
          liveIsAutoSSOLoginDisabled: { operator: o.disableAutoSSOLoginOperator$ }
        }
      };
    },
    319469: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const n = r(731335);
      t.bootstrap = (e) => {
        e.register(n.config);
      };
    },
    513240: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RequestedKillSwitches = void 0),
        (function (e) {
          (e.DisableAutofill = "disableAutofill"),
            (e.BrazeContentCardsDisabled = "brazeContentCardsDisabled"),
            (e.DisableLoginFlowMigration = "disableLoginFlowMigration"),
            (e.DisableAutoSSOLogin = "disableAutoSSOLogin");
        })(t.RequestedKillSwitches || (t.RequestedKillSwitches = {}));
    },
    36641: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.triggerKillswitchCron = void 0);
      const n = r(255030);
      let o = null;
      t.triggerKillswitchCron = function (e) {
        return (
          o ||
            ((0, n.updateKillswitchState)(e),
            (o = setInterval(() => {
              try {
                (0, n.updateKillswitchState)(e);
              } catch {}
            }, 36e5))),
          o
        );
      };
    },
    800061: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      var n = r(319469);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return n.bootstrap;
        }
      });
    },
    255030: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.updateKillswitchState = void 0);
      const n = r(910295),
        o = r(366677),
        a = r(46298),
        i = r(191122),
        s = r(513240),
        c = n.z.object({
          disableAutofill: n.z.boolean().default(!1),
          brazeContentCardsDisabled: n.z.boolean().default(!1),
          disableLoginFlowMigration: n.z.boolean().default(!1),
          disableAutoSSOLogin: n.z.boolean().default(!1)
        });
      t.updateKillswitchState = async (e) => {
        const t = Object.values(s.RequestedKillSwitches),
          r = await (0, o.getKillSwitches)(e, t);
        if ((0, a.isApiError)(r)) throw new Error(`[Killswitch] - updateKillswitchState : ${r.message} (${r.code})`);
        const n = c.safeParse(r);
        if (!n.success) throw new Error("[Killswitch] - updateKillswitchState: unexpected server response shape");
        e.dispatch(
          (0, i.killswitchStateUpdated)({
            disableAutofill: n.data.disableAutofill || !1,
            brazeContentCardsDisabled: n.data.brazeContentCardsDisabled || !1,
            disableLoginFlowMigration: n.data.disableLoginFlowMigration || !1,
            disableAutoSSOLogin: n.data.disableAutoSSOLogin || !1
          })
        );
      };
    },
    391296: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.disableAutoSSOLoginOperator$ = t.disableLoginFlowMigrationOperator$ = t.disableBrazeContentCardsOperator$ = void 0);
      const n = r(518948),
        o = r(903343),
        a = r(578759);
      (t.disableBrazeContentCardsOperator$ = () =>
        (0, n.pipe)((0, o.map)(a.disableBrazeContentCardsSelector), (0, o.distinctUntilChanged)())),
        (t.disableLoginFlowMigrationOperator$ = () =>
          (0, n.pipe)((0, o.map)(a.disableLoginFlowMigrationSelector), (0, o.distinctUntilChanged)())),
        (t.disableAutoSSOLoginOperator$ = () => (0, n.pipe)((0, o.map)(a.disableAutoSSOLoginSelector), (0, o.distinctUntilChanged)()));
    },
    578759: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.disableAutoSSOLoginSelector =
          t.disableLoginFlowMigrationSelector =
          t.disableBrazeContentCardsSelector =
          t.disableAutofillSelector =
          t.killswitchSelector =
            void 0);
      const n = r(273651);
      (t.killswitchSelector = (e) => e.device.killswitch || (0, n.getEmptyKillswitchState)()),
        (t.disableAutofillSelector = (e) => (0, t.killswitchSelector)(e).disableAutofill || !1),
        (t.disableBrazeContentCardsSelector = (e) => (0, t.killswitchSelector)(e).brazeContentCardsDisabled || !1),
        (t.disableLoginFlowMigrationSelector = (e) => (0, t.killswitchSelector)(e).disableLoginFlowMigration || !1),
        (t.disableAutoSSOLoginSelector = (e) => (0, t.killswitchSelector)(e).disableAutoSSOLogin);
    },
    423299: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setupSubscriptions = void 0);
      const n = r(36641);
      t.setupSubscriptions = function (e, t) {
        e.appInitialized.on(() => {
          const { storeService: e } = t;
          (0, n.triggerKillswitchCron)(e);
        });
      };
    },
    989855: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBackupCryptError = t.BackupCryptError = t.BackupCryptErrorMessages = t.BackupCryptErrorCode = void 0);
      const n = r(392263);
      var o;
      !(function (e) {
        (e[(e.TRANSACTION_CLEAR_CONTENT_EMPTY = 0)] = "TRANSACTION_CLEAR_CONTENT_EMPTY"),
          (e[(e.EMPTY_CLEAR_FULL_BACKUP_FILE_XML = 1)] = "EMPTY_CLEAR_FULL_BACKUP_FILE_XML"),
          (e[(e.CLEAR_FULL_BACKUP_FILE_XML_NOT_AN_ARRAY = 2)] = "CLEAR_FULL_BACKUP_FILE_XML_NOT_AN_ARRAY"),
          (e[(e.EMPTY_FULL_BACKUP_FILE = 3)] = "EMPTY_FULL_BACKUP_FILE"),
          (e[(e.NULL_FULL_BACKUP_FILE_MAP = 4)] = "NULL_FULL_BACKUP_FILE_MAP"),
          (e[(e.EMPTY_FULL_BACKUP_FILE_MAP = 5)] = "EMPTY_FULL_BACKUP_FILE_MAP"),
          (e[(e.EMPTY_CLEAR_FULL_BACKUP_FILE = 6)] = "EMPTY_CLEAR_FULL_BACKUP_FILE"),
          (e[(e.CLEAR_FULL_BACKUP_FILE_NOT_XML = 7)] = "CLEAR_FULL_BACKUP_FILE_NOT_XML"),
          (e[(e.FULL_BACKUP_FILE_ITEM_WITHOUT_KWTYPE = 8)] = "FULL_BACKUP_FILE_ITEM_WITHOUT_KWTYPE"),
          (e[(e.FULL_BACKUP_FILE_ITEM_WITHOUT_ID = 9)] = "FULL_BACKUP_FILE_ITEM_WITHOUT_ID"),
          (e[(e.TRANSACTION_CONTENT_NOT_XML = 10)] = "TRANSACTION_CONTENT_NOT_XML");
      })((o = t.BackupCryptErrorCode || (t.BackupCryptErrorCode = {}))),
        (t.BackupCryptErrorMessages = {
          [o.TRANSACTION_CLEAR_CONTENT_EMPTY]: "Empty transaction content",
          [o.EMPTY_CLEAR_FULL_BACKUP_FILE_XML]: "Empty full backup file XML",
          [o.CLEAR_FULL_BACKUP_FILE_XML_NOT_AN_ARRAY]: "Full backup file XML not resolved as an array",
          [o.EMPTY_FULL_BACKUP_FILE]: "Empty full backup file",
          [o.NULL_FULL_BACKUP_FILE_MAP]: "Null full backup file map",
          [o.EMPTY_FULL_BACKUP_FILE_MAP]: "Empty full backup file map",
          [o.EMPTY_CLEAR_FULL_BACKUP_FILE]: "Deciphered full backup file content is empty",
          [o.CLEAR_FULL_BACKUP_FILE_NOT_XML]: "WRONG_PASSWORD",
          [o.FULL_BACKUP_FILE_ITEM_WITHOUT_KWTYPE]: "Full backup file item without kwType",
          [o.FULL_BACKUP_FILE_ITEM_WITHOUT_ID]: "Full backup file item without Id",
          [o.TRANSACTION_CONTENT_NOT_XML]: "WRONG_PASSWORD"
        }),
        (t.BackupCryptError = { codes: o, name: "BackupCryptError", messages: t.BackupCryptErrorMessages }),
        (t.isBackupCryptError = (e) => (0, n.isCarbonError)(e, t.BackupCryptError));
    },
    646e3: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.decryptFullBackupFile = void 0);
      const n = r(80469),
        o = r(989855),
        a = r(883638),
        i = r(956668),
        s = r(392263),
        c = r(761797),
        p = r(670252),
        u = r(358582),
        d = async (e, t) => {
          try {
            const e = await (0, c.parseDashlaneXml)(t);
            if (!e) throw new s.CarbonError(o.BackupCryptError, o.BackupCryptErrorCode.EMPTY_CLEAR_FULL_BACKUP_FILE_XML);
            if (!Array.isArray(e))
              throw new s.CarbonError(o.BackupCryptError, o.BackupCryptErrorCode.CLEAR_FULL_BACKUP_FILE_XML_NOT_AN_ARRAY);
            return e;
          } catch (t) {
            throw (e(u.announcements.decipherFullBackupParseFailed(t)), t);
          }
        },
        l = (e, t, r) => {
          if (null == t) return e(u.announcements.decipherFullBackupSkipped()), !1;
          if ("" === t) throw new s.CarbonError(o.BackupCryptError, o.BackupCryptErrorCode.EMPTY_FULL_BACKUP_FILE);
          if (null === r) throw new s.CarbonError(o.BackupCryptError, o.BackupCryptErrorCode.NULL_FULL_BACKUP_FILE_MAP);
          if (t && 0 === r.size) throw new s.CarbonError(o.BackupCryptError, o.BackupCryptErrorCode.EMPTY_FULL_BACKUP_FILE_MAP);
          return !0;
        },
        y = async (e, t, r) => {
          try {
            const t = await e.decrypt(r),
              n = (0, i.deflatedUtf8ToUtf16)(t);
            if (!n) {
              const e = new s.CarbonError(o.BackupCryptError, o.BackupCryptErrorCode.EMPTY_CLEAR_FULL_BACKUP_FILE);
              throw (p.sendExceptionLog({ error: e }), e);
            }
            if ("string" == typeof n && !n.trim().startsWith("<"))
              throw new s.CarbonError(o.BackupCryptError, o.BackupCryptErrorCode.CLEAR_FULL_BACKUP_FILE_NOT_XML);
            return n;
          } catch (o) {
            const a = (0, n.attemptReadCryptoPayload)(e, r);
            throw (t(u.announcements.decipherFullBackupDecipherFailed(o, a)), o);
          }
        },
        g = (e, t, r) => {
          const { Id: n, kwType: i } = t,
            c = r.get(n);
          if (void 0 === c)
            return (
              e(
                u.announcements.decipherFullBackupItemSkipped(new Error("Transaction not in full backup list skipped"), {
                  itemType: i,
                  itemId: n
                })
              ),
              null
            );
          const p = t instanceof Object ? Object.keys(t) : [];
          if (!i) {
            const t = new s.CarbonError(o.BackupCryptError, o.BackupCryptErrorCode.FULL_BACKUP_FILE_ITEM_WITHOUT_KWTYPE);
            throw (e(u.announcements.decipherFullBackupItemReadFailed(t.addAdditionalInfo({ itemId: n, itemKeys: p }), n)), t);
          }
          return n
            ? (e(u.announcements.decipherFullBackupItemRead(i, n, c)),
              { type: (0, a.getTransactionTypeFromDataModelType)(i), backupDate: c, action: "BACKUP_EDIT", identifier: n, content: t })
            : (e(u.announcements.decipherFullBackupItemSkipped(new Error("Transaction without id skipped"), { itemType: i })), null);
        };
      t.decryptFullBackupFile = async function (e, t, r, a) {
        try {
          if (!l(t, r, a)) return [];
          t(u.announcements.decipherFullBackupStarted());
          const o = await y(e, t, r),
            i = await d(t, o),
            s = ((e, t, r) => {
              const n = t.length,
                o = [],
                a = new Set();
              for (let i = 0; i < n; ++i) {
                const n = t[i];
                n.Id && a.add(n.Id);
                const s = g(e, n, r);
                s && o.push(s);
              }
              return (
                ((e, t, r) => {
                  for (const n in t.keys())
                    r.has(n) ||
                      e(u.announcements.decipherFullBackupItemSkipped(new Error("Missing full backup item content"), { itemId: n }));
                })(e, r, a),
                o
              );
            })(t, (0, n.fixKwType)(i), a);
          return t(u.announcements.decipherFullBackupFinished(s.length)), s;
        } catch (e) {
          if (
            (t(u.announcements.decipherFullBackupFailed(e)),
            (0, s.isCarbonError)(e, o.BackupCryptError, o.BackupCryptErrorCode.EMPTY_CLEAR_FULL_BACKUP_FILE))
          )
            return [];
          throw e;
        }
      };
    },
    463713: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.encryptSingleTransaction = t.decrypt = void 0);
      const n = r(401067),
        o = r(646e3),
        a = r(116859);
      Object.defineProperty(t, "encryptSingleTransaction", {
        enumerable: !0,
        get: function () {
          return a.encryptSingleTransaction;
        }
      });
      const i = r(859700),
        s = r(358582),
        c = (e) => (0, n.partition)((e) => "SETTINGS" === e.type, e),
        p = (e) => (0, n.partition)((e) => !!e.content, e);
      t.decrypt = async function (e, t, r, n, u) {
        if (null === u) throw new Error("null transactions");
        const d = Number(r && n.size);
        t(s.announcements.decipherStarted(d));
        const l = await (0, o.decryptFullBackupFile)(e, t, r, n);
        t(s.announcements.decipherTransactionsStarted());
        const [y, g] = c(u),
          m = await (0, a.decryptSingleTransactions)(e, t, y),
          [h, f] = p(g),
          S = (0, i.makeOpenSessionProgressService)();
        S.init(h.length);
        const T = await (0, a.decryptSingleTransactions)(e, t, h, S),
          A = ((e) => e.map((e) => ({ ...e, content: null })))(f);
        t(s.announcements.decipherTransactionsFinished());
        const v = [...l, ...m, ...A, ...T];
        return t(s.announcements.decipherFinished(v)), v;
      };
    },
    859700: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeOpenSessionProgressService = void 0);
      const n = r(319697);
      t.makeOpenSessionProgressService = () => {
        let e, t, r, o;
        const a = (a = !1) => {
          const i = (0, n.default)();
          if (!i) return;
          const s = (t / e) * 100;
          (a || (Date.now() - o >= 500 && s !== r)) &&
            ((r = s),
            (o = Date.now()),
            i.openSessionProgressChanged({ statusDescription: "percentage of work done before session opening", statusProgress: r }));
        };
        return {
          init(n) {
            (e = n), (t = 0), (r = 0), (o = Date.now()), a(!0);
          },
          incrementJobsDone() {
            if (void 0 === e) throw new Error("openSessionProgressService must be initialized before begin used");
            t++, a();
          },
          decrementJobsTodo() {
            e--;
          }
        };
      };
    },
    116859: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.encryptSingleTransaction =
          t.decryptSingleTransactions =
          t.decryptSingleTransaction =
          t.parseTransactionContentXml =
          t.decryptTransactionContent =
            void 0);
      const n = r(453576),
        o = r(80469),
        a = r(989855),
        i = r(392263),
        s = r(761797),
        c = r(670252),
        p = r(956668),
        u = r(358582);
      (t.decryptTransactionContent = async (e, t, { content: r }) => {
        try {
          const t = await e.decrypt(r);
          return (0, p.deflatedUtf8ToUtf16)(t);
        } catch (n) {
          const a = (0, o.attemptReadCryptoPayload)(e, r);
          throw (t(u.announcements.decipherTransactionDecipherFailed(n, a)), n);
        }
      }),
        (t.parseTransactionContentXml = async (e, t) => {
          try {
            return (
              ((e) => {
                if (!e) {
                  const e = new i.CarbonError(a.BackupCryptError, a.BackupCryptErrorCode.TRANSACTION_CLEAR_CONTENT_EMPTY);
                  throw (c.sendExceptionLog({ error: e }), e);
                }
              })(t),
              ((e) => {
                if ("string" == typeof e && !e.trim().startsWith("<"))
                  throw new i.CarbonError(a.BackupCryptError, a.BackupCryptErrorCode.TRANSACTION_CONTENT_NOT_XML);
              })(t),
              await (0, s.parseDashlaneXml)(t)
            );
          } catch (t) {
            throw (e(u.announcements.decipherTransactionParseFailed(t)), t);
          }
        });
      const d = (e, t) => Object.assign({}, e, { content: t });
      async function l(e, r, i) {
        try {
          r(u.announcements.decipherTransactionStarted(i));
          const n = await (0, t.decryptTransactionContent)(e, r, i),
            a = await (0, t.parseTransactionContentXml)(r, n),
            s = (0, o.fixKwType)(a),
            c = d(i, s);
          return r(u.announcements.decipherTransactionFinished(i)), c;
        } catch (e) {
          const { type: t } = i;
          if ((0, a.isBackupCryptError)(e)) {
            const { action: r, backupDate: o, identifier: a } = i,
              s = (0, n.getDataModelTypeFromTransactionType)(t);
            e.addAdditionalInfo({ itemId: a, itemType: s, action: r, backupDate: o });
          }
          if ((r(u.announcements.decipherTransactionFailed(e, i)), "SETTINGS" === t)) throw e;
          return null;
        }
      }
      (t.decryptSingleTransaction = l),
        (t.decryptSingleTransactions = async function (e, t, r, n) {
          const o = r.map(async (r) => {
            const o = await l(e, t, r);
            return n && n.incrementJobsDone(), o;
          });
          return (await Promise.all(o)).filter(Boolean);
        }),
        (t.encryptSingleTransaction = async function (e, t, r = {}) {
          const n = (0, p.utf16ToDeflatedUtf8)(t.content),
            o = await e.getInstance().encrypt(n, r);
          return { ...t, content: o };
        });
    },
    80469: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.fixKwType = t.attemptReadCryptoPayload = void 0);
      const n = r(954218);
      (t.attemptReadCryptoPayload = (e, t) => {
        try {
          return e.readCryptoPayload(t);
        } catch (e) {}
        return "";
      }),
        (t.fixKwType = function e(t) {
          return Array.isArray(t)
            ? t.map((t) => e(t))
            : (0, n.default)(t)
            ? Object.keys(t).reduce((r, n) => {
                const o = t[n];
                return "__type__" === n ? (r.kwType = o) : (r[n] = e(o)), r;
              }, {})
            : t;
        });
    },
    417936: function (e, t, r) {
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, n, o);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), o(r(844317), t);
    },
    844317: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeDiagnosticReportMonitor = void 0);
      const n = r(453576),
        o = r(454034),
        a = r(392263),
        i = r(989855);
      t.makeDiagnosticReportMonitor = () => {
        let e = "",
          t = "";
        const r = "fullBackupFile";
        return (s, { timestamp: c }) => {
          switch (s.type) {
            case "DecipherFullBackupStarted":
              (0, o.triggerSendTransactionDecipheringDiagnosticLog)({
                date: c,
                identifier: r,
                message: "[decryptFullBackupFile] - Start Decryption"
              });
              break;
            case "DecipherFullBackupItemRead":
              {
                const { itemId: e } = s;
                (0, o.triggerSendTransactionDecipheringDiagnosticLog)({
                  date: c,
                  identifier: r,
                  message: `[fullBackupFileItemsContent] - ${e} succeed`,
                  status: "succeed"
                });
              }
              break;
            case "DecipherFullBackupItemSkipped":
              {
                const { itemId: e } = s;
                (0, o.triggerSendTransactionDecipheringDiagnosticLog)({
                  date: c,
                  identifier: r,
                  message: e
                    ? `[fullBackupFileItemsContent] - ${e} does not have backupDate => return null`
                    : "[fullBackupFileItemsContent] - does not have id => return null",
                  status: "failed"
                });
              }
              break;
            case "DecipherFullBackupParseFailed":
              {
                const { error: t } = s;
                e = (0, a.isCarbonError)(t, i.BackupCryptError, i.BackupCryptErrorCode.EMPTY_CLEAR_FULL_BACKUP_FILE_XML)
                  ? "parseXml does not failed but result nothing => reject err: WRONG_PASSWORD"
                  : (0, a.isCarbonError)(t, i.BackupCryptError, i.BackupCryptErrorCode.CLEAR_FULL_BACKUP_FILE_XML_NOT_AN_ARRAY)
                  ? "parseXml result not an Array => reject err: fullBackupFileItemsContent is not an Array"
                  : `parseXml failed => reject err: ${t}`;
              }
              break;
            case "DecipherFullBackupDecipherFailed":
              {
                const { error: t } = s;
                e = (0, a.isCarbonError)(t, i.BackupCryptError, i.BackupCryptErrorCode.CLEAR_FULL_BACKUP_FILE_NOT_XML)
                  ? 'decrypt result with xml string which does not start with "<" => throw new Error WRONG_PASSWORD'
                  : (0, a.isCarbonError)(t, i.BackupCryptError, i.BackupCryptErrorCode.EMPTY_CLEAR_FULL_BACKUP_FILE)
                  ? "decrypt result with empty xml => throw new Error (Decrypt FullBackupFile empty result)"
                  : "failed to decipher fullBackupFile";
              }
              break;
            case "DecipherFullBackupFailed":
              (0, o.triggerSendTransactionDecipheringDiagnosticLog)({
                date: c,
                identifier: r,
                message: `[decryptFullBackupFile] - ${e}: null`,
                status: "failed"
              });
              break;
            case "DecipherFullBackupFinished":
              (0, o.triggerSendTransactionDecipheringDiagnosticLog)({
                date: c,
                identifier: r,
                message: `[decryptFullBackupFile] - ${e}: null`,
                status: "succeed"
              });
              break;
            case "DecipherTransactionStarted":
              {
                const { identifier: e, action: r, backupDate: a, time: i, transactionType: p } = s;
                (t = e),
                  (0, o.triggerSendTransactionDecipheringDiagnosticLog)({
                    identifier: e,
                    action: r,
                    backupDate: a,
                    time: i,
                    type: n.TransactionType[p],
                    date: c,
                    message: "[decryptSingleTransaction] - Start Decryption"
                  });
              }
              break;
            case "DecipherTransactionDecipherFailed":
              {
                const { error: t } = s;
                e = (0, a.isCarbonError)(t, i.BackupCryptError, i.BackupCryptErrorCode.TRANSACTION_CONTENT_NOT_XML)
                  ? 'decrypt resolve with xml string that does not start with "<"'
                  : (0, a.isCarbonError)(t, i.BackupCryptError, i.BackupCryptErrorCode.TRANSACTION_CLEAR_CONTENT_EMPTY)
                  ? "decrypt resolve empty xml content"
                  : "Decryption failed with error";
              }
              break;
            case "DecipherTransactionParseFailed":
              e = "failed to parse XML content";
              break;
            case "DecipherTransactionFailed":
              (0, o.triggerSendTransactionDecipheringDiagnosticLog)({
                date: c,
                identifier: t,
                message: `[decryptSingleTransaction] - ${e}: null`,
                status: "failed"
              });
              break;
            case "DecipherTransactionFinished":
              (0, o.triggerSendTransactionDecipheringDiagnosticLog)({
                date: c,
                identifier: t,
                message: "[decryptSingleTransaction] - Success",
                status: "succeed"
              });
          }
        };
      };
    },
    291453: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.formatStep = void 0);
      const n = r(2695),
        o = r(17825);
      t.formatStep = (e) => {
        switch (e) {
          case n.SyncLoggerStep.Main:
            return "[Sync]";
          case n.SyncLoggerStep.Chronological:
            return "[Sync|Chrono]";
          case n.SyncLoggerStep.Latest:
            return "[Sync|Latest]";
          case n.SyncLoggerStep.Decipher:
            return "[Sync|Decipher]";
          case n.SyncLoggerStep.DecipherFullBackup:
            return "[Sync|Decipher|FullBackup]";
          case n.SyncLoggerStep.DecipherTransactions:
            return "[Sync|Decipher|Transactions]";
          case n.SyncLoggerStep.Duplicate:
            return "[Sync|Duplicate]";
          case n.SyncLoggerStep.Cipher:
            return "[Sync|Cipher]";
          case n.SyncLoggerStep.Upload:
            return "[Sync|Upload]";
          case n.SyncLoggerStep.Save:
            return "[Sync|Save]";
          case n.SyncLoggerStep.TreatProblem:
            return "[Sync|TreatProblem]";
          case n.SyncLoggerStep.TreatProblemSummary:
            return "[Sync|TreatProblem|Summary]";
          case n.SyncLoggerStep.Sharing:
            return "[Sync|Sharing]";
          case n.SyncLoggerStep.TeamAdminData:
            return "[Sync|TeamAdminData]";
          default:
            (0, o.assertUnreachable)(e);
        }
      };
    },
    992221: function (e, t, r) {
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, n, o);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), o(r(371044), t);
    },
    71369: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.logSyncVerbose = t.logSyncDebug = t.logSyncInfo = t.logSyncWarn = t.logSyncError = void 0);
      const n = r(795623),
        o = (0, n.withTag)("Sync");
      (t.logSyncError = o(n.logError)),
        (t.logSyncWarn = o(n.logWarn)),
        (t.logSyncInfo = o(n.logInfo)),
        (t.logSyncDebug = o(n.logDebug)),
        (t.logSyncVerbose = o(n.logVerbose));
    },
    371044: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeSyncLoggerMonitor = void 0);
      const n = r(358582),
        o = r(2695),
        a = r(990635),
        i = r(291453),
        s = r(71369);
      t.makeSyncLoggerMonitor = () => {
        let e = null;
        const t = (e) => ("object" == typeof e && e.message) || `${e}`,
          r = (e, t) => `${(0, i.formatStep)(e)} ${t}`;
        return (i, { timestamp: c }) => {
          switch (i.type) {
            case "SyncStarted":
              {
                const { syncType: t } = i;
                (e = c),
                  (0, s.logSyncInfo)({
                    message: r(o.SyncLoggerStep.Main, "Start"),
                    details: { step: o.SyncLoggerStep.Main, Type: (0, a.syncTypeForSyncLogger)(t) }
                  });
              }
              break;
            case "ChronologicalSyncStarted":
              {
                const { updatesCount: t, deletesCount: n } = i;
                (0, s.logSyncDebug)({
                  message: r(o.SyncLoggerStep.Chronological, "Start"),
                  details: { step: o.SyncLoggerStep.Chronological, Timestamp: e, Update: t, Delete: n }
                });
              }
              break;
            case "LatestRequested":
              {
                const { lock: t, needsKeys: n } = i;
                (0, s.logSyncDebug)({
                  message: r(o.SyncLoggerStep.Latest, "Request"),
                  details: { step: o.SyncLoggerStep.Latest, Timestamp: e, Lock: t, SharingKeys: n }
                });
              }
              break;
            case "LatestSucceeded":
              {
                const { updatesCount: t, deletesCount: n, fullBackupSize: a } = i;
                (0, s.logSyncDebug)({
                  message: r(o.SyncLoggerStep.Latest, "Success"),
                  details: { step: o.SyncLoggerStep.Latest, Timestamp: e, Update: t, Delete: n, FullBackup: a }
                });
              }
              break;
            case "LatestFailed":
              {
                const { error: e } = i;
                (0, s.logSyncWarn)({
                  message: r(o.SyncLoggerStep.Latest, "Error"),
                  details: { step: o.SyncLoggerStep.Latest, Cause: t(e) }
                });
              }
              break;
            case "DecipherStarted":
              {
                const { fullBackupFileSize: e } = i;
                (0, s.logSyncVerbose)({
                  message: r(o.SyncLoggerStep.Decipher, "Start"),
                  details: { step: o.SyncLoggerStep.Decipher, Count: e }
                });
              }
              break;
            case "DecipherFullBackupSkipped":
              (0, s.logSyncVerbose)({
                message: r(o.SyncLoggerStep.DecipherFullBackup, "Skip"),
                details: { step: o.SyncLoggerStep.DecipherFullBackup }
              });
              break;
            case "DecipherFullBackupStarted":
              (0, s.logSyncVerbose)({
                message: r(o.SyncLoggerStep.DecipherFullBackup, "Start"),
                details: { step: o.SyncLoggerStep.DecipherFullBackup }
              });
              break;
            case "DecipherFullBackupItemRead":
              {
                const { itemType: e, itemId: t, backupDate: n } = i;
                (0, s.logSyncDebug)({
                  message: r(o.SyncLoggerStep.DecipherFullBackup, "Transaction"),
                  details: { step: o.SyncLoggerStep.DecipherFullBackup, Type: e, Id: t, Date: n }
                });
              }
              break;
            case "DecipherFullBackupItemSkipped":
              {
                const { error: e, itemType: n, itemId: a } = i;
                (0, s.logSyncDebug)({
                  message: r(o.SyncLoggerStep.DecipherFullBackup, "TransactionSkipped"),
                  details: { step: o.SyncLoggerStep.DecipherFullBackup, Type: n, Id: a, Cause: t(e) }
                });
              }
              break;
            case "DecipherFullBackupFinished":
              {
                const { itemsCount: e } = i;
                (0, s.logSyncVerbose)({
                  message: r(o.SyncLoggerStep.DecipherFullBackup, "Done"),
                  details: { step: o.SyncLoggerStep.DecipherFullBackup, Count: e }
                });
              }
              break;
            case "DecipherFullBackupFailed":
              {
                const { error: e } = i;
                (0, s.logSyncWarn)({
                  message: r(o.SyncLoggerStep.DecipherFullBackup, "Error"),
                  details: { step: o.SyncLoggerStep.DecipherFullBackup, Cause: t(e) }
                });
              }
              break;
            case "DecipherTransactionsStarted":
              (0, s.logSyncVerbose)({
                message: r(o.SyncLoggerStep.DecipherTransactions, "Start"),
                details: { step: o.SyncLoggerStep.DecipherTransactions }
              });
              break;
            case "DecipherTransactionFinished":
              {
                const { action: e, transactionType: t, identifier: n, backupDate: a } = i;
                (0, s.logSyncDebug)({
                  message: r(o.SyncLoggerStep.DecipherTransactions, "Transaction"),
                  details: { step: o.SyncLoggerStep.DecipherTransactions, Action: e, Type: t, Id: n, Date: a }
                });
              }
              break;
            case "DecipherTransactionFailed":
              {
                const { error: e, transactionType: n, identifier: a, backupDate: c } = i;
                (0, s.logSyncWarn)({
                  message: r(o.SyncLoggerStep.DecipherTransactions, "Error"),
                  details: { step: o.SyncLoggerStep.DecipherTransactions, Cause: t(e), Type: n, Id: a, Date: c }
                });
              }
              break;
            case "DecipherTransactionsFinished":
              (0, s.logSyncVerbose)({
                message: r(o.SyncLoggerStep.DecipherTransactions, "Done"),
                details: { step: o.SyncLoggerStep.DecipherTransactions }
              });
              break;
            case "DecipherFinished":
              {
                const { updatesCount: e, deletesCount: t } = i;
                (0, s.logSyncVerbose)({
                  message: r(o.SyncLoggerStep.Decipher, "Done"),
                  details: { step: o.SyncLoggerStep.Decipher, Transactions: e + t }
                });
              }
              break;
            case "TransactionDuplicated":
              {
                const { transactionType: e, identifier: t, backupDate: n } = i;
                (0, s.logSyncWarn)({
                  message: r(o.SyncLoggerStep.Duplicate, "Transaction"),
                  details: { step: o.SyncLoggerStep.Duplicate, Type: e, Id: t, Date: n }
                });
              }
              break;
            case "CipherStarted":
              (0, s.logSyncVerbose)({ message: r(o.SyncLoggerStep.Cipher, "Start"), details: { step: o.SyncLoggerStep.Cipher } });
              break;
            case "TransactionCiphered":
              {
                const { transactionType: e, itemId: t, backupDate: n } = i;
                (0, s.logSyncDebug)({
                  message: r(o.SyncLoggerStep.Cipher, "Transaction"),
                  details: { step: o.SyncLoggerStep.Cipher, Type: e, Id: t, Date: n }
                });
              }
              break;
            case "CipherFinished":
              (0, s.logSyncVerbose)({ message: r(o.SyncLoggerStep.Cipher, "Done"), details: { step: o.SyncLoggerStep.Cipher } });
              break;
            case "UploadRequested":
              {
                const { updatedCount: e, deletedCount: t } = i;
                (0, s.logSyncDebug)({
                  message: r(o.SyncLoggerStep.Upload, "Request"),
                  details: { step: o.SyncLoggerStep.Upload, Update: e, Delete: t }
                });
              }
              break;
            case "UploadSucceeded":
              {
                const { timestamp: e } = i;
                (0, s.logSyncDebug)({
                  message: r(o.SyncLoggerStep.Upload, "Success"),
                  details: { step: o.SyncLoggerStep.Upload, Timestamp: e }
                });
              }
              break;
            case "UploadFailed":
              {
                const { error: e } = i;
                (0, s.logSyncWarn)({
                  message: r(o.SyncLoggerStep.Upload, "Error"),
                  details: { step: o.SyncLoggerStep.Upload, Cause: t(e) }
                });
              }
              break;
            case "SaveStarted":
              (0, s.logSyncVerbose)({ message: r(o.SyncLoggerStep.Save, "Start"), details: { step: o.SyncLoggerStep.Save } });
              break;
            case "SaveFinished":
              (0, s.logSyncVerbose)({ message: r(o.SyncLoggerStep.Save, "Done"), details: { step: o.SyncLoggerStep.Save } });
              break;
            case "ChronologicalSyncFinished":
              {
                const { summarySize: e } = i;
                (0, s.logSyncDebug)({
                  message: r(o.SyncLoggerStep.Chronological, "Done"),
                  details: { step: o.SyncLoggerStep.Chronological, Summary: e }
                });
              }
              break;
            case "TreatProblemStarted":
              (0, s.logSyncDebug)({ message: r(o.SyncLoggerStep.TreatProblem, "Start"), details: { step: o.SyncLoggerStep.TreatProblem } });
              break;
            case "TreatProblemSummaryStarted":
              {
                const { localItemsCount: e, remoteItemsCount: t } = i;
                (0, s.logSyncDebug)({
                  message: r(o.SyncLoggerStep.TreatProblemSummary, "Start"),
                  details: { step: o.SyncLoggerStep.TreatProblemSummary, Local: e, Remote: t }
                });
              }
              break;
            case "TreatProblemSummaryCompared":
              {
                const { result: e, cause: t, transactionType: a, identifier: c, localDate: p, remoteDate: u } = i,
                  d = void 0 !== u ? { RemoteDate: u } : {},
                  l = t ? { Cause: n.TreatProblemSummaryComparedCause[t] } : {},
                  y = p ? { LocalDate: p } : {};
                (0, s.logSyncDebug)({
                  message: r(o.SyncLoggerStep.TreatProblemSummary, "Comparison"),
                  details: {
                    step: o.SyncLoggerStep.TreatProblemSummary,
                    Result: n.TreatProblemSummaryComparedResult[e],
                    ...l,
                    Type: a,
                    Id: c,
                    ...y,
                    ...d
                  }
                });
              }
              break;
            case "TreatProblemSummaryFinished":
              (0, s.logSyncDebug)({
                message: r(o.SyncLoggerStep.TreatProblemSummary, "Done"),
                details: { step: o.SyncLoggerStep.TreatProblemSummary }
              });
              break;
            case "TreatProblemDiffComputed":
              {
                const { transactionsToDownloadCount: e, transactionsToUploadCount: t } = i;
                0 === e && 0 === t
                  ? (0, s.logSyncVerbose)({
                      message: r(o.SyncLoggerStep.TreatProblem, "Diff UpToDate"),
                      details: { step: o.SyncLoggerStep.TreatProblem }
                    })
                  : (0, s.logSyncWarn)({
                      message: r(o.SyncLoggerStep.TreatProblem, "Diff"),
                      details: { step: o.SyncLoggerStep.TreatProblem, Download: e, Upload: t }
                    });
              }
              break;
            case "TreatProblemFinished":
              (0, s.logSyncDebug)({ message: r(o.SyncLoggerStep.TreatProblem, "Done"), details: { step: o.SyncLoggerStep.TreatProblem } });
              break;
            case "TeamAdminDataSyncStarted":
              (0, s.logSyncDebug)({
                message: r(o.SyncLoggerStep.TeamAdminData, "Start"),
                details: { step: o.SyncLoggerStep.TeamAdminData }
              });
              break;
            case "TeamAdminDataSyncFinished":
              (0, s.logSyncDebug)({
                message: r(o.SyncLoggerStep.TeamAdminData, "Done"),
                details: { step: o.SyncLoggerStep.TeamAdminData }
              });
              break;
            case "SharingSyncStarted":
              (0, s.logSyncDebug)({ message: r(o.SyncLoggerStep.Sharing, "Start"), details: { step: o.SyncLoggerStep.Sharing } });
              break;
            case "SharingSyncFinished":
              (0, s.logSyncDebug)({ message: r(o.SyncLoggerStep.Sharing, "Done"), details: { step: o.SyncLoggerStep.Sharing } });
              break;
            case "SyncFinished":
              (0, s.logSyncInfo)({ message: r(o.SyncLoggerStep.Main, "Done"), details: { step: o.SyncLoggerStep.Main } });
              break;
            case "SyncFailed": {
              const { error: e } = i;
              (0, s.logSyncError)({ message: r(o.SyncLoggerStep.Main, "Failed"), details: { step: o.SyncLoggerStep.Main, Cause: t(e) } });
            }
          }
        };
      };
    },
    2695: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SyncLoggerStep = void 0),
        (function (e) {
          (e[(e.Main = 0)] = "Main"),
            (e[(e.Chronological = 1)] = "Chronological"),
            (e[(e.Latest = 2)] = "Latest"),
            (e[(e.Decipher = 3)] = "Decipher"),
            (e[(e.DecipherFullBackup = 4)] = "DecipherFullBackup"),
            (e[(e.DecipherTransactions = 5)] = "DecipherTransactions"),
            (e[(e.Duplicate = 6)] = "Duplicate"),
            (e[(e.Cipher = 7)] = "Cipher"),
            (e[(e.Upload = 8)] = "Upload"),
            (e[(e.Save = 9)] = "Save"),
            (e[(e.TreatProblem = 10)] = "TreatProblem"),
            (e[(e.TreatProblemSummary = 11)] = "TreatProblemSummary"),
            (e[(e.Sharing = 12)] = "Sharing"),
            (e[(e.TeamAdminData = 13)] = "TeamAdminData");
        })(t.SyncLoggerStep || (t.SyncLoggerStep = {}));
    },
    990635: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.syncTypeForSyncLogger = void 0);
      const n = r(737898),
        o = r(17825);
      t.syncTypeForSyncLogger = (e) => {
        switch (e) {
          case n.SyncType.LIGHT_SYNC:
            return "Light";
          case n.SyncType.FULL_SYNC:
            return "Full";
          case n.SyncType.FIRST_SYNC:
            return "Initial";
          default:
            (0, o.assertUnreachable)(e);
        }
      };
    },
    298083: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.treatProblemSummaryFinished =
          t.treatProblemSummaryCompared =
          t.treatProblemSummaryStarted =
          t.transactionDuplicated =
          t.decipherTransactionFinished =
          t.decipherTransactionFailed =
          t.decipherTransactionParseFailed =
          t.decipherTransactionDecipherFailed =
          t.decipherTransactionStarted =
          t.decipherFullBackupFinished =
          t.decipherFullBackupFailed =
          t.decipherFullBackupItemReadFailed =
          t.decipherFullBackupItemSkipped =
          t.decipherFullBackupItemRead =
          t.decipherFullBackupDecipherFailed =
          t.decipherFullBackupParseFailed =
          t.decipherFullBackupStarted =
          t.decipherFullBackupSkipped =
          t.cipherFinished =
          t.transactionCiphered =
          t.cipherStarted =
          t.uploadFailed =
          t.uploadSucceeded =
          t.uploadRequested =
          t.syncTypeChanged =
          t.syncFailed =
          t.syncFinished =
          t.decipherTransactionsFinished =
          t.decipherTransactionsStarted =
          t.decipherFinished =
          t.decipherStarted =
          t.latestFailed =
          t.latestSucceeded =
          t.latestRequested =
          t.teamAdminDataSyncFinished =
          t.teamAdminDataSyncFailed =
          t.teamAdminDataSyncStarted =
          t.sharingSyncFinished =
          t.sharingSyncFailed =
          t.sharingSyncInvalidSyncData =
          t.sharingSyncStarted =
          t.treatSharingKeysFailed =
          t.treatProblemFinished =
          t.treatProblemDiffComputed =
          t.treatProblemFailed =
          t.treatProblemStarted =
          t.chronologicalSyncFinished =
          t.chronologicalSyncFailed =
          t.chronologicalSyncStarted =
          t.syncStarted =
            void 0),
        (t.saveFinished = t.saveStarted = void 0);
      const n = r(731982),
        o = r(990826),
        a = r(501347),
        i = r(363002);
      (t.syncStarted = (e, t) => ({ type: "SyncStarted", trigger: e, syncType: t })),
        (t.chronologicalSyncStarted = (e) => ({
          type: "ChronologicalSyncStarted",
          updatesCount: (0, i.countEditionUploadChanges)(e?.changesToUpload || []),
          deletesCount: (0, i.countDeletionUploadChanges)(e?.changesToUpload || [])
        })),
        (t.chronologicalSyncFailed = (e) => ({ type: "ChronologicalSyncFailed", error: e })),
        (t.chronologicalSyncFinished = (e, t) => ({
          type: "ChronologicalSyncFinished",
          summarySize: (0, n.countSyncSummaryTransactions)(e),
          fullBackupFileSize: t
        })),
        (t.treatProblemStarted = () => ({ type: "TreatProblemStarted" })),
        (t.treatProblemFailed = (e) => ({ type: "TreatProblemFailed", error: e })),
        (t.treatProblemDiffComputed = (e, t) => ({
          type: "TreatProblemDiffComputed",
          transactionsToDownloadCount: e,
          transactionsToUploadCount: t
        })),
        (t.treatProblemFinished = () => ({ type: "TreatProblemFinished" })),
        (t.treatSharingKeysFailed = (e) => ({ type: "TreatSharingKeysFailed", error: e })),
        (t.sharingSyncStarted = () => ({ type: "SharingSyncStarted" })),
        (t.sharingSyncInvalidSyncData = (e, t) => ({ type: "SharingSyncInvalidSyncData", itemGroupId: e, errorName: t })),
        (t.sharingSyncFailed = (e) => ({ type: "SharingSyncFailed", error: e })),
        (t.sharingSyncFinished = () => ({ type: "SharingSyncFinished" })),
        (t.teamAdminDataSyncStarted = () => ({ type: "TeamAdminDataSyncStarted" })),
        (t.teamAdminDataSyncFailed = (e) => ({ type: "TeamAdminDataSyncFailed", error: e })),
        (t.teamAdminDataSyncFinished = () => ({ type: "TeamAdminDataSyncFinished" })),
        (t.latestRequested = (e, t) => ({ type: "LatestRequested", lock: "nolock" !== e, needsKeys: t })),
        (t.latestSucceeded = (e) => ({
          type: "LatestSucceeded",
          updatesCount: (0, o.countEditionTransactions)(e.transactionList),
          deletesCount: (0, o.countRemoveTransactions)(e.transactionList),
          fullBackupSize: (e.fullBackupFileList || []).length
        })),
        (t.latestFailed = (e) => ({ type: "LatestFailed", error: e })),
        (t.decipherStarted = (e) => ({ type: "DecipherStarted", fullBackupFileSize: e })),
        (t.decipherFinished = (e) => ({
          type: "DecipherFinished",
          updatesCount: (0, o.countEditionTransactions)(e),
          deletesCount: (0, o.countRemoveTransactions)(e)
        })),
        (t.decipherTransactionsStarted = () => ({ type: "DecipherTransactionsStarted" })),
        (t.decipherTransactionsFinished = () => ({ type: "DecipherTransactionsFinished" })),
        (t.syncFinished = () => ({ type: "SyncFinished" })),
        (t.syncFailed = (e) => ({ type: "SyncFailed", error: e })),
        (t.syncTypeChanged = (e) => ({ type: "SyncTypeChanged", syncType: e })),
        (t.uploadRequested = (e, t) => ({ type: "UploadRequested", updatedCount: e, deletedCount: t })),
        (t.uploadSucceeded = (e, t, r) => ({ type: "UploadSucceeded", updatedCount: e, deletedCount: t, timestamp: r })),
        (t.uploadFailed = (e) => ({ type: "UploadFailed", error: e })),
        (t.cipherStarted = () => ({ type: "CipherStarted" })),
        (t.transactionCiphered = (e, t, r) => ({ type: "TransactionCiphered", transactionType: e, itemId: t, backupDate: r })),
        (t.cipherFinished = () => ({ type: "CipherFinished" })),
        (t.decipherFullBackupSkipped = () => ({ type: "DecipherFullBackupSkipped" })),
        (t.decipherFullBackupStarted = () => ({ type: "DecipherFullBackupStarted" })),
        (t.decipherFullBackupParseFailed = (e) => ({ type: "DecipherFullBackupParseFailed", error: e })),
        (t.decipherFullBackupDecipherFailed = (e, t) => ({ type: "DecipherFullBackupDecipherFailed", error: e, cryptoPayload: t })),
        (t.decipherFullBackupItemRead = (e, t, r) => ({ type: "DecipherFullBackupItemRead", itemType: e, itemId: t, backupDate: r })),
        (t.decipherFullBackupItemSkipped = (e, t) => ({
          type: "DecipherFullBackupItemSkipped",
          itemType: t?.itemType,
          itemId: t?.itemId,
          error: e
        })),
        (t.decipherFullBackupItemReadFailed = (e, t) => ({ type: "DecipherFullBackupItemReadFailed", error: e, itemId: t })),
        (t.decipherFullBackupFailed = (e) => ({ type: "DecipherFullBackupFailed", error: e })),
        (t.decipherFullBackupFinished = (e) => ({ type: "DecipherFullBackupFinished", itemsCount: e })),
        (t.decipherTransactionStarted = ({ action: e, backupDate: t, identifier: r, time: n, type: o }) => ({
          type: "DecipherTransactionStarted",
          time: n,
          action: e,
          backupDate: t,
          identifier: r,
          transactionType: o
        })),
        (t.decipherTransactionDecipherFailed = (e, t) => ({ type: "DecipherTransactionDecipherFailed", error: e, cryptoPayload: t })),
        (t.decipherTransactionParseFailed = (e) => ({ type: "DecipherTransactionParseFailed", error: e })),
        (t.decipherTransactionFailed = (e, { backupDate: t, identifier: r, type: n }) => ({
          type: "DecipherTransactionFailed",
          error: e,
          transactionType: n,
          identifier: r,
          backupDate: t
        })),
        (t.decipherTransactionFinished = ({ action: e, backupDate: t, identifier: r, type: n }) => ({
          type: "DecipherTransactionFinished",
          action: e,
          transactionType: n,
          identifier: r,
          backupDate: t
        })),
        (t.transactionDuplicated = (e, t, r) => ({ type: "TransactionDuplicated", transactionType: e, identifier: t, backupDate: r })),
        (t.treatProblemSummaryStarted = (e, t) => ({
          type: "TreatProblemSummaryStarted",
          localItemsCount: (0, a.countPersonalDataItems)(e),
          remoteItemsCount: (0, n.countSyncSummaryTransactions)(t)
        })),
        (t.treatProblemSummaryCompared = (e, t, r, n) => ({
          type: "TreatProblemSummaryCompared",
          result: e,
          transactionType: t,
          identifier: r,
          ...(n?.cause ? { cause: n.cause } : {}),
          ...(n?.localDate ? { localDate: n.localDate } : {}),
          ...(n?.remoteDate ? { remoteDate: n.remoteDate } : {})
        })),
        (t.treatProblemSummaryFinished = () => ({ type: "TreatProblemSummaryFinished" })),
        (t.saveStarted = () => ({ type: "SaveStarted" })),
        (t.saveFinished = () => ({ type: "SaveFinished" }));
    },
    358582: function (e, t, r) {
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, n, o);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.announcements = void 0);
      const a = r(298083);
      (t.announcements = a), o(r(76921), t);
    },
    76921: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TreatProblemSummaryComparedCause = t.TreatProblemSummaryComparedResult = void 0),
        (function (e) {
          (e[(e.UpToDate = 0)] = "UpToDate"), (e[(e.Upload = 1)] = "Upload"), (e[(e.Download = 2)] = "Download");
        })(t.TreatProblemSummaryComparedResult || (t.TreatProblemSummaryComparedResult = {})),
        (function (e) {
          (e[(e.OutOfDate = 0)] = "OutOfDate"), (e[(e.Missing = 1)] = "Missing");
        })(t.TreatProblemSummaryComparedCause || (t.TreatProblemSummaryComparedCause = {}));
    },
    732523: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.generateLocalDuplicates = void 0);
      const n = r(401067),
        o = r(370705),
        a = r(749551),
        i = r(278320),
        s = r(630144),
        c = r(875270),
        p = r(653628),
        u = r(421178),
        d = (e, t) => {
          const r = o.mergingRules[t.type];
          if (!r || 0 === r.length) return !1;
          if (!t.content) return !1;
          const n = (0, p.fixPersonalDataItemFromExternalSource)(t.content, t.identifier);
          for (const { property: o, canonize: a } of r) {
            let r = e[o],
              i = n[o];
            if (
              ("Domain" === o &&
                "AUTHENTIFIANT" === t.type &&
                r &&
                i &&
                ((r = new u.ParsedURL(e.Url).getRootDomain()), (i = new u.ParsedURL(n.Url).getRootDomain())),
              (a ? (0, s.canonizeText)(r) : r) !== (a ? (0, s.canonizeText)(i) : i))
            )
              return !0;
          }
          return !1;
        };
      t.generateLocalDuplicates = function (e, t, r) {
        return (0, a.filterDataModelObjects)(t, e, ["changeHistories"]).reduce((e, t) => {
          const o = ((e) => {
            const t = (0, c.findTransaction)(e.Id, r);
            return !t || (0, c.isRemovalTransaction)(t)
              ? null
              : d(e, t)
              ? {
                  duplicate: { ...(0, n.clone)(e), AnonId: (0, i.generateItemUuid)(), Id: (0, i.generateItemUuid)() },
                  duplicatedFromId: e.Id
                }
              : null;
          })(t);
          return o ? (e.push(o), e) : e;
        }, []);
      };
    },
    370705: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.mergingRules = void 0),
        (t.mergingRules = {
          ADDRESS: [
            { property: "AddressFull", canonize: !1 },
            { property: "City", canonize: !1 },
            { property: "ZipCode", canonize: !0 }
          ],
          AUTH_CATEGORY: [{ property: "CategoryName", canonize: !1 }],
          AUTHENTIFIANT: [
            { property: "Domain", canonize: !1 },
            { property: "Email", canonize: !1 },
            { property: "Login", canonize: !1 },
            { property: "Note", canonize: !1 },
            { property: "OtpSecret", canonize: !1 },
            { property: "OtpUrl", canonize: !1 },
            { property: "Password", canonize: !1 },
            { property: "SubdomainOnly", canonize: !1 },
            { property: "Title", canonize: !1 },
            { property: "TrustedUrl", canonize: !1 },
            { property: "UseFixedUrl", canonize: !1 }
          ],
          BANKSTATEMENT: [{ property: "BankAccountIBAN", canonize: !0 }],
          COMPANY: [
            { property: "Name", canonize: !1 },
            { property: "JobTitle", canonize: !1 }
          ],
          DATA_CHANGE_HISTORY: [{ property: "ObjectId", canonize: !0 }],
          DRIVERLICENCE: [{ property: "Number", canonize: !0 }],
          EMAIL: [{ property: "Email", canonize: !0 }],
          FISCALSTATEMENT: [
            { property: "FiscalNumber", canonize: !0 },
            { property: "TeledeclarantNumber", canonize: !0 }
          ],
          GENERATED_PASSWORD: [
            { property: "Domain", canonize: !1 },
            { property: "GeneratedDate", canonize: !1 },
            { property: "Password", canonize: !1 }
          ],
          IDCARD: [{ property: "Number", canonize: !0 }],
          IDENTITY: [
            { property: "FirstName", canonize: !1 },
            { property: "LastName", canonize: !1 }
          ],
          PASSPORT: [{ property: "Number", canonize: !0 }],
          PAYMENTMEAN_PAYPAL: [
            { property: "Login", canonize: !1 },
            { property: "Password", canonize: !1 }
          ],
          PAYMENTMEANS_CREDITCARD: [
            { property: "Bank", canonize: !0 },
            { property: "CardNumber", canonize: !0 },
            { property: "CardNumberLastDigits", canonize: !0 },
            { property: "ExpireMonth", canonize: !0 },
            { property: "ExpireYear", canonize: !0 },
            { property: "OwnerName", canonize: !0 }
          ],
          PERSONALWEBSITE: [{ property: "Website", canonize: !1 }],
          PHONE: [{ property: "Number", canonize: !0 }],
          PURCHASE_CATEGORY: [{ property: "CategoryName", canonize: !1 }],
          PURCHASEBASKET: [{ property: "Id", canonize: !1 }],
          PURCHASEPAIDBASKET: [
            { property: "AutoTitle", canonize: !1 },
            { property: "Comment", canonize: !1 },
            { property: "DeliveryAddressDescription", canonize: !1 },
            { property: "DeliveryAddressName", canonize: !1 },
            { property: "MerchantDomain", canonize: !0 },
            { property: "PaymentMeanDescription", canonize: !1 },
            { property: "PaymentMeanName", canonize: !1 },
            { property: "PurchaseDate", canonize: !0 },
            { property: "TotalAmount", canonize: !0 },
            { property: "UserTitle", canonize: !1 }
          ],
          SECURENOTE: [
            { property: "Title", canonize: !1 },
            { property: "Content", canonize: !1 }
          ],
          SECURENOTE_CATEGORY: [{ property: "CategoryName", canonize: !1 }],
          SOCIALSECURITYSTATEMENT: [{ property: "SocialSecurityNumber", canonize: !0 }]
        });
    },
    896457: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.mergeChangeHistories = void 0);
      const n = r(401067);
      t.mergeChangeHistories = function (e, t) {
        const r = (0, n.eqBy)((0, n.prop)("Id")),
          o = (0, n.ascend)((0, n.prop)("ModificationDate")),
          a = (0, n.unionWith)(r, e.ChangeSets, t.ChangeSets);
        return { ...e, ChangeSets: (0, n.sort)(o, a) };
      };
    },
    601947: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.mergeLocalAndRemote = t.getMergeableTransactions = t.supportedTransactionTypesForMerge = t.unMergeableTransaction = void 0);
      const n = r(401067),
        o = r(896457),
        a = r(875270);
      (t.unMergeableTransaction = [
        "DEFAULT_AUTHENTIFIANT",
        "DEFAULT_CONFIDENTIAL",
        "DEFAULT_IDENTITY",
        "DEFAULT_PAYMENTMEANS",
        "DEFAULT_MISC",
        "DEFAULT_REWARDCARD",
        "POINTS",
        "SETTINGS",
        "SECURITYALERTS"
      ]),
        (t.supportedTransactionTypesForMerge = ["DATA_CHANGE_HISTORY"]),
        (t.getMergeableTransactions = function (e, r) {
          const o = (0, n.map)((0, n.prop)("itemId"), r);
          return e
            .filter((e) => !t.unMergeableTransaction.includes(e.type))
            .filter((e) => "BACKUP_REMOVE" !== e.action)
            .filter((e) => o.includes(e.identifier))
            .filter((e) => t.supportedTransactionTypesForMerge.includes(e.type));
        }),
        (t.mergeLocalAndRemote = function (e, t) {
          const r = [],
            n = e.changeHistories.map((e) => {
              const n = (0, a.findTransaction)(e.Id, t),
                i = o.mergeChangeHistories(e, n.content);
              return r.push({ ...n, content: i }), i;
            });
          return { personalData: { ...e, changeHistories: n }, remoteTransactions: r };
        });
    },
    537744: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(401067),
        o = r(453576),
        a = r(795623),
        i = r(501347),
        s = r(670252),
        c = r(601947),
        p = r(363002),
        u = r(875270),
        d = r(883638),
        l = r(732523),
        y = r(358582),
        g = r(751064);
      t.default = function (e, t, r, m) {
        const {
          changesToUpload: h,
          editConflicts: f,
          transactionsToDownload: S
        } = (function (e, t, r) {
          if (0 === t.length) return { changesToUpload: e, transactionsToDownload: t, editConflicts: [] };
          const o = (0, n.intersection)((0, n.pluck)("identifier", t), (0, n.pluck)("itemId", e));
          if (0 === e.filter((e) => o.includes(e.itemId)).length)
            return { changesToUpload: e, transactionsToDownload: t, editConflicts: [] };
          const a = (0, n.reject)((e) => (0, p.isRemovalUploadChange)(e) && o.includes(e.itemId), e),
            i = (0, n.reject)((e) => ((0, u.isRemovalTransaction)(e) || r.has(e.identifier)) && o.includes(e.identifier), t);
          return {
            changesToUpload: a,
            transactionsToDownload: i,
            editConflicts: (0, n.intersection)((0, n.pluck)("identifier", i), (0, n.pluck)("itemId", a))
          };
        })(t.changesToUpload, m, r);
        if (0 === f.length) return { personalData: { ...t, changesToUpload: h }, remoteTransactions: [...S] };
        const T = `[Sync] conflict on local/remote changes, ${f.length} conflicts`;
        a.default.log(T), (0, s.sendExceptionLog)({ error: new Error(T), code: o.ExceptionCriticality.WARNING });
        const {
            duplicateObjects: A,
            uploadChangesWithDuplicates: v,
            usableRemoteTransactions: E
          } = (function (e, t, r, n, o) {
            if (0 === o.length) return { uploadChangesWithDuplicates: r, usableRemoteTransactions: n, duplicateObjects: [] };
            const a = (0, l.generateLocalDuplicates)(o, t, n),
              i = a.map((e) => e.duplicate),
              s = i.map((e) => ({
                action: "BACKUP_EDIT",
                backupDate: 0,
                identifier: e.Id,
                objectType: "transaction",
                time: Date.now(),
                type: (0, d.getTransactionTypeFromDataModelType)(e.kwType),
                content: e
              }));
            s.forEach(({ backupDate: t, identifier: r, type: n }) => {
              e(y.announcements.transactionDuplicated(n, r, t));
            });
            const c = a.map((e) => e.duplicatedFromId);
            return {
              uploadChangesWithDuplicates: r.filter((e) => !c.includes(e.itemId)).concat(i.map(g.createUploadChangeForItem)),
              duplicateObjects: i,
              usableRemoteTransactions: n.filter((e) => !o.includes(e.identifier) || c.includes(e.identifier)).concat(s)
            };
          })(e, t, h, S, f),
          _ = (0, i.saveObjects)(t, A),
          b = c.getMergeableTransactions(E, v);
        if (0 === b.length) return { personalData: { ..._, changesToUpload: v }, remoteTransactions: [...E] };
        const C = c.mergeLocalAndRemote(_, b);
        return { personalData: { ...C.personalData, changesToUpload: v }, remoteTransactions: [...E, ...C.remoteTransactions] };
      };
    },
    767805: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getSyncEventErrorName = t.getSyncEventExtent = t.createInitialSyncEvent = void 0);
      const n = r(660765),
        o = r(453576),
        a = r(737898),
        i = r(17825),
        s = r(392263),
        c = r(314656),
        p = r(820750);
      (t.createInitialSyncEvent = (e, r, n) => ({
        extent: (0, t.getSyncEventExtent)(e),
        trigger: r,
        timestamp: n,
        duration: { sync: 0, chronological: 0, treat_problem: 0, sharing: 0 }
      })),
        (t.getSyncEventExtent = (e) => {
          switch (e) {
            case a.SyncType.LIGHT_SYNC:
              return n.Extent.Light;
            case a.SyncType.FULL_SYNC:
              return n.Extent.Full;
            case a.SyncType.FIRST_SYNC:
              return n.Extent.Initial;
            default:
              (0, i.assertUnreachable)(e);
          }
        }),
        (t.getSyncEventErrorName = function (e) {
          let t = n.ErrorName.Other;
          return (
            (0, s.isCarbonError)(e) &&
              (e.errorType === c.HttpError
                ? (t = (({ errorCode: e }) =>
                    e === c.HttpErrorCode.CLIENT_ERROR || e === c.HttpErrorCode.SERVER_ERROR || e === c.HttpErrorCode.STATUS_CODE)(e)
                    ? n.ErrorName.HttpStatus
                    : n.ErrorName.HttpIo)
                : e.errorType === p.WSError && (t = n.ErrorName.ResponseContent)),
            e instanceof Error && e?.message && void 0 !== o.AuthenticationCode[e.message] && (t = n.ErrorName.Authentication),
            t
          );
        });
    },
    441007: function (e, t, r) {
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, n, o);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), o(r(137729), t);
    },
    137729: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeEventLoggerSyncMonitor = void 0);
      const n = r(275439),
        o = r(660765);
      t.makeEventLoggerSyncMonitor = (e, t = { sendLogOnSyncComplete: !0 }) => {
        let r = (0, n.getEmptyState)();
        return {
          monitor: async (a, i) => {
            r = (0, n.reduceState)(r, a, i);
            const { syncEvent: s } = r,
              c = t.sendLogOnSyncComplete;
            switch (a.type) {
              case "SharingSyncInvalidSyncData":
                await e.logSync(
                  new o.UserSyncEvent({
                    errorStep: o.ErrorStep.Sharing,
                    errorName: a.errorName,
                    itemGroupId: a.itemGroupId,
                    duration: s.duration,
                    error: s.error,
                    extent: s.extent,
                    fullBackupSize: s.fullBackupSize,
                    incomingDeleteCount: s.incomingDeleteCount,
                    incomingUpdateCount: s.incomingUpdateCount,
                    outgoingDeleteCount: s.outgoingDeleteCount,
                    outgoingUpdateCount: s.outgoingUpdateCount,
                    timestamp: s.timestamp,
                    trigger: s.trigger,
                    treatProblem: s.treatProblem
                  })
                );
                break;
              case "SyncFinished":
              case "SyncFailed":
                c &&
                  (await e.logSync(
                    new o.UserSyncEvent({
                      duration: s.duration,
                      error: s.error,
                      extent: s.extent,
                      fullBackupSize: s.fullBackupSize,
                      incomingDeleteCount: s.incomingDeleteCount,
                      incomingUpdateCount: s.incomingUpdateCount,
                      outgoingDeleteCount: s.outgoingDeleteCount,
                      outgoingUpdateCount: s.outgoingUpdateCount,
                      timestamp: s.timestamp,
                      trigger: s.trigger,
                      treatProblem: s.treatProblem
                    })
                  ),
                  e.flushEventQueue());
            }
          },
          getSyncEvent: () => r.syncEvent
        };
      };
    },
    275439: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.reduceState = t.getEmptyState = void 0);
      const n = r(767805),
        o = r(660765),
        a = (e, t) => ({ ...e, syncEvent: { ...e.syncEvent, ...t } }),
        i = (e, t) =>
          e > 0 && t > 0
            ? o.TreatProblem.UploadAndDownload
            : t > 0
            ? o.TreatProblem.Upload
            : e > 0
            ? o.TreatProblem.Download
            : o.TreatProblem.NotNeeded,
        s = (e) => Date.now() - e;
      (t.getEmptyState = () => ({
        syncStartTimestamp: null,
        chronologicalStartTimestamp: null,
        treatProblemStartTimestamp: null,
        sharingSyncStartTimestamp: null,
        syncEvent: null
      })),
        (t.reduceState = (e, t, r) => {
          switch (t.type) {
            case "SyncStarted":
              return ((e, { trigger: t, syncType: r }, { timestamp: o }) => ({
                ...e,
                syncStartTimestamp: o,
                syncEvent: (0, n.createInitialSyncEvent)(r, t, Math.floor(o / 1e3))
              }))(e, t, r);
            case "ChronologicalSyncStarted":
              return ((e, { timestamp: t }) => ({ ...e, chronologicalStartTimestamp: t }))(e, r);
            case "ChronologicalSyncFinished":
              return ((e, { fullBackupFileSize: t }) =>
                a(e, { duration: { ...e.syncEvent.duration, chronological: s(e.chronologicalStartTimestamp) }, fullBackupSize: t || 0 }))(
                e,
                t
              );
            case "ChronologicalSyncFailed":
              return ((e) =>
                a(e, {
                  duration: { ...e.syncEvent.duration, chronological: s(e.chronologicalStartTimestamp) },
                  error: { step: o.ErrorStep.Chronological, name: o.ErrorName.Other }
                }))(e);
            case "TreatProblemStarted":
              return ((e, { timestamp: t }) => ({ ...e, treatProblemStartTimestamp: t }))(e, r);
            case "TreatProblemDiffComputed":
              return ((e, { transactionsToDownloadCount: t, transactionsToUploadCount: r }) => a(e, { treatProblem: i(t, r) }))(e, t);
            case "TreatProblemFinished":
              return ((e) => a(e, { duration: { ...e.syncEvent.duration, treat_problem: s(e.treatProblemStartTimestamp) } }))(e);
            case "TreatProblemFailed":
              return ((e) =>
                a(e, {
                  duration: { ...e.syncEvent.duration, treat_problem: s(e.treatProblemStartTimestamp) },
                  error: { step: o.ErrorStep.TreatProblem, name: o.ErrorName.Other }
                }))(e);
            case "TreatSharingKeysFailed":
              return ((e) => a(e, { error: { step: o.ErrorStep.TreatProblem, name: o.ErrorName.Other } }))(e);
            case "SharingSyncStarted":
              return ((e, { timestamp: t }) => ({ ...e, sharingSyncStartTimestamp: t }))(e, r);
            case "SharingSyncFinished":
              return ((e) => a(e, { duration: { ...e.syncEvent.duration, sharing: s(e.sharingSyncStartTimestamp) } }))(e);
            case "SharingSyncFailed":
              return ((e) =>
                a(e, {
                  duration: { ...e.syncEvent.duration, sharing: s(e.sharingSyncStartTimestamp) },
                  error: { step: o.ErrorStep.Sharing, name: o.ErrorName.Other }
                }))(e);
            case "DecipherFinished":
              return ((e, { updatesCount: t, deletesCount: r }) => {
                const n = e.syncEvent.incomingUpdateCount || 0,
                  o = e.syncEvent.incomingDeleteCount || 0;
                return a(e, { incomingUpdateCount: n + t, incomingDeleteCount: o + r });
              })(e, t);
            case "UploadSucceeded":
              return ((e, { updatedCount: t, deletedCount: r }) => {
                const n = e.syncEvent.outgoingUpdateCount || 0,
                  o = e.syncEvent.outgoingDeleteCount || 0;
                return a(e, { outgoingUpdateCount: n + t, outgoingDeleteCount: o + r });
              })(e, t);
            case "SyncFinished":
              return ((e) => a(e, { duration: { ...e.syncEvent.duration, sync: s(e.syncStartTimestamp) } }))(e);
            case "SyncFailed":
              return ((e, { error: t }) =>
                a(e, {
                  duration: { ...e.syncEvent.duration, sync: s(e.syncStartTimestamp) },
                  error: { ...e.syncEvent.error, name: (0, n.getSyncEventErrorName)(t) }
                }))(e, t);
            case "SyncTypeChanged":
              return ((e, { syncType: t }) => a(e, { extent: (0, n.getSyncEventExtent)(t) }))(e, t);
          }
          return e;
        });
    },
    875270: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.findTransaction =
          t.isRemovalTransaction =
          t.isEditionTransaction =
          t.createNewTransaction =
          t.getTransactionXml =
          t.supportedForUploadKwTypeToTransactionTypeMap =
          t.supportedDataTypesForUpload =
            void 0);
      const n = r(401067),
        o = r(453576),
        a = r(883638),
        i = r(795623),
        s = r(670252),
        c = r(500053),
        p = r(956668),
        u = r(761797),
        d = r(358582);
      function l(e) {
        return t.supportedForUploadKwTypeToTransactionTypeMap[e.kwType]
          ? (0, u.getDashlaneXml)(e)
          : (i.default.error(`Unsupported kwType "${e.kwType}" for transformation to XML`), "");
      }
      (t.supportedDataTypesForUpload = [
        "KWAddress",
        "KWAuthCategory",
        "KWAuthentifiant",
        "KWBankStatement",
        "KWCollection",
        "KWCompany",
        "KWDataChangeHistory",
        "KWDriverLicence",
        "KWEmail",
        "KWFiscalStatement",
        "KWGeneratedPassword",
        "KWIdentity",
        "KWIDCard",
        "KWPasskey",
        "KWPassport",
        "KWPaymentMean_creditCard",
        "KWPersonalWebsite",
        "KWPhone",
        "KWSecret",
        "KWSecureFileInfo",
        "KWSecureNote",
        "KWSecureNoteCategory",
        "KWSecurityBreach",
        "KWSettingsManagerApp",
        "KWSocialSecurityStatement"
      ]),
        (t.supportedForUploadKwTypeToTransactionTypeMap = (0, n.pick)(t.supportedDataTypesForUpload, a.DATAMODEL_TYPE_TO_TRANSACTION_TYPE)),
        (t.getTransactionXml = l),
        (t.createNewTransaction = async function (e, r, n) {
          try {
            const { itemId: o, kwType: a, content: i } = n,
              s = t.supportedForUploadKwTypeToTransactionTypeMap[a];
            if ("REMOVE" === n.action) {
              const e = {
                type: s,
                action: "BACKUP_REMOVE",
                identifier: o,
                objectType: "transaction",
                time: (0, c.getUnixTimestamp)(),
                backupDate: 0,
                content: ""
              };
              return Promise.resolve(e);
            }
            const u = (0, p.utf16ToDeflatedUtf8)(l(i)),
              y = await e.encrypt(u),
              g = 0,
              m = {
                type: s,
                action: "BACKUP_EDIT",
                identifier: o,
                objectType: "transaction",
                time: (0, c.getUnixTimestamp)(),
                backupDate: g,
                content: y
              };
            return r(d.announcements.transactionCiphered(s, o, g)), m;
          } catch (e) {
            const t = new Error(`[Sync] - upload: failed to create transaction. ${e}`);
            return (0, s.sendExceptionLog)({ error: t, code: o.ExceptionCriticality.ERROR }), null;
          }
        });
      const y = (0, n.propEq)("identifier");
      (t.isEditionTransaction = (0, n.propEq)("action", "BACKUP_EDIT")),
        (t.isRemovalTransaction = (0, n.propEq)("action", "BACKUP_REMOVE")),
        (t.findTransaction = (0, n.curry)((e, t) => (0, n.find)(y(e), t)));
    },
    883638: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TransactionType =
          t.getTransactionTypeFromDataModelType =
          t.getDataModelTypeFromTransactionType =
          t.DATAMODEL_TYPE_TO_TRANSACTION_TYPE =
            void 0);
      const n = r(453576);
      Object.defineProperty(t, "DATAMODEL_TYPE_TO_TRANSACTION_TYPE", {
        enumerable: !0,
        get: function () {
          return n.DATAMODEL_TYPE_TO_TRANSACTION_TYPE;
        }
      }),
        Object.defineProperty(t, "getDataModelTypeFromTransactionType", {
          enumerable: !0,
          get: function () {
            return n.getDataModelTypeFromTransactionType;
          }
        }),
        Object.defineProperty(t, "getTransactionTypeFromDataModelType", {
          enumerable: !0,
          get: function () {
            return n.getTransactionTypeFromDataModelType;
          }
        }),
        Object.defineProperty(t, "TransactionType", {
          enumerable: !0,
          get: function () {
            return n.TransactionType;
          }
        });
    },
    990826: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.countRemoveTransactions = t.countEditionTransactions = void 0);
      const r = (e, t) => e.reduce((e, r) => (r.identifier && r.action === t ? e + 1 : e), 0);
      (t.countEditionTransactions = (e) => r(e, "BACKUP_EDIT")), (t.countRemoveTransactions = (e) => r(e, "BACKUP_REMOVE"));
    },
    58217: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getMissingIdentifiers = void 0);
      const n = r(453576),
        o = r(401067),
        a = r(584977),
        i = r(358582),
        s = r(751064);
      t.getMissingIdentifiers = function (e, t, r) {
        e(i.announcements.treatProblemSummaryStarted(t, r));
        const c = n.transactionTypes.reduce(
          (c, p) => {
            return (
              (u = c),
              (d = (function (e, t, r, c) {
                const p = n.TRANSACTION_TYPE_TO_DATAMODEL_TYPE[t];
                if (!p || !a.default[p]) return { missingLocally: [], missingRemotely: [] };
                const u = a.default[p];
                if (!r[u]) return { missingLocally: [], missingRemotely: [] };
                const d = c.transactions[t] || {},
                  l = new Set(r.changesToUpload.filter(({ kwType: e }) => e === p).map(({ itemId: e }) => e)),
                  y = r[u].filter(({ Id: e }) => !l.has(e)),
                  g = Object.keys(d).filter((e) => !l.has(e)),
                  m = (0, o.difference)(g, (0, o.pluck)("Id", y));
                m.forEach((r) => {
                  e(
                    i.announcements.treatProblemSummaryCompared(i.TreatProblemSummaryComparedResult.Download, t, r, {
                      cause: i.TreatProblemSummaryComparedCause.Missing,
                      remoteDate: d[r]
                    })
                  );
                });
                const h = i.announcements.treatProblemSummaryCompared;
                return y.reduce(
                  (r, { Id: n, LastBackupTime: o }) => {
                    const a = d[n],
                      c = 1e3 * o;
                    if (!a || a / 1e3 < o) {
                      const o = a ? { remoteDate: a } : {};
                      e(
                        h(i.TreatProblemSummaryComparedResult.Upload, t, n, {
                          cause: a ? i.TreatProblemSummaryComparedCause.OutOfDate : i.TreatProblemSummaryComparedCause.Missing,
                          localDate: c,
                          ...o
                        })
                      );
                      const u = (0, s.createUploadChange)({ action: "EDIT", kwType: p, itemId: n });
                      return { missingLocally: r.missingLocally, missingRemotely: [...r.missingRemotely, u] };
                    }
                    return a / 1e3 > o
                      ? (e(
                          h(i.TreatProblemSummaryComparedResult.Download, t, n, {
                            cause: i.TreatProblemSummaryComparedCause.OutOfDate,
                            localDate: c,
                            remoteDate: a
                          })
                        ),
                        { missingLocally: [...r.missingLocally, n], missingRemotely: r.missingRemotely })
                      : (e(h(i.TreatProblemSummaryComparedResult.UpToDate, t, n, { localDate: c })), r);
                  },
                  { missingLocally: m, missingRemotely: [] }
                );
              })(e, p, t, r)),
              { missingLocally: [...u.missingLocally, ...d.missingLocally], missingRemotely: [...u.missingRemotely, ...d.missingRemotely] }
            );
            var u, d;
          },
          { missingLocally: [], missingRemotely: [] }
        );
        return e(i.announcements.treatProblemSummaryFinished()), c;
      };
    },
    363002: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getUploadChangesWithoutSettings =
          t.isSettingUploadChange =
          t.countDeletionUploadChanges =
          t.countEditionUploadChanges =
          t.findUploadChange =
          t.isRemovalUploadChange =
          t.isEditionUploadChange =
            void 0);
      const n = r(401067),
        o = (0, n.propEq)("itemId");
      (t.isEditionUploadChange = (0, n.propEq)("action", "EDIT")),
        (t.isRemovalUploadChange = (0, n.propEq)("action", "REMOVE")),
        (t.findUploadChange = (0, n.curry)((e, t) => (0, n.find)(o(e), t))),
        (t.countEditionUploadChanges = (e) => e.filter((e) => (0, t.isEditionUploadChange)(e)).length),
        (t.countDeletionUploadChanges = (e) => e.filter((e) => (0, t.isRemovalUploadChange)(e)).length),
        (t.isSettingUploadChange = (0, n.propEq)("kwType", "KWSettingsManagerApp")),
        (t.getUploadChangesWithoutSettings = (e) => (0, n.reject)(t.isSettingUploadChange, e));
    },
    639048: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UploadChangeStatus = void 0),
        (function (e) {
          (e.ReadyForNextSync = "ReadyForNextSync"), (e.ScheduledForSync = "ScheduledForSync");
        })(t.UploadChangeStatus || (t.UploadChangeStatus = {}));
    },
    462210: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.markChangeAsReadyForNextSync = t.markChangeAsScheduled = t.filterOutUploadedChanges = void 0);
      const n = r(639048);
      t.filterOutUploadedChanges = (e, t) =>
        e.filter(({ itemId: e, status: r }) => !t.includes(e) || r !== n.UploadChangeStatus.ScheduledForSync);
      const o = (e) => (t) => ({ ...t, status: e });
      (t.markChangeAsScheduled = o(n.UploadChangeStatus.ScheduledForSync)),
        (t.markChangeAsReadyForNextSync = o(n.UploadChangeStatus.ReadyForNextSync));
    },
    751064: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createUploadChangeForDeletion = t.createUploadChangeForItem = t.createUploadChange = void 0);
      const n = r(639048);
      (t.createUploadChange = ({ itemId: e, kwType: t, action: r = "EDIT", status: o = n.UploadChangeStatus.ReadyForNextSync }) => ({
        itemId: e,
        kwType: t,
        action: r,
        status: o
      })),
        (t.createUploadChangeForItem = (e) => (0, t.createUploadChange)(((e) => ({ itemId: e.Id, kwType: e.kwType }))(e))),
        (t.createUploadChangeForDeletion = (e) => (r) => (0, t.createUploadChange)({ itemId: r, kwType: e, action: "REMOVE" }));
    },
    826632: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isUploadNeeded = t.upload = t.gatherContentsToUpload = void 0);
      const n = r(401067),
        o = r(363002),
        a = r(875270),
        i = r(990826),
        s = r(584977),
        c = r(358582),
        p = Object.keys(a.supportedForUploadKwTypeToTransactionTypeMap),
        u = (0, n.flip)(n.contains)(p),
        d = (0, n.compose)(
          n.uniq,
          (0, n.filter)((0, n.propSatisfies)(u, "kwType")),
          (0, n.filter)((0, n.propSatisfies)(Boolean, "itemId")),
          (0, n.defaultTo)([])
        );
      function l(e, t) {
        return d(e.changesToUpload)
          .map((r) => {
            const { action: a, kwType: i, itemId: c } = r,
              p = s.default[i];
            if ((0, o.isRemovalUploadChange)(r)) return { action: a, kwType: i, itemId: c, content: null };
            if ("KWSettingsManagerApp" === r.kwType && "SETTINGS_userId" === c) return { action: a, kwType: i, itemId: c, content: t };
            const u = (0, n.find)((0, n.propEq)("Id", c), e[p]);
            return u ? { action: a, kwType: i, itemId: c, content: u } : null;
          })
          .filter(n.identity);
      }
      t.gatherContentsToUpload = l;
      const y = async (e, t, r) => {
        t(c.announcements.cipherStarted());
        const n = r.map((r) => (0, a.createNewTransaction)(e, t, r)),
          o = await Promise.all(n);
        return t(c.announcements.cipherFinished()), o.filter(Boolean);
      };
      (t.upload = async function (e) {
        const { announce: t, cryptoCenterService: r, personalData: n, personalSettings: o } = e,
          a = l(n, o),
          s = await y(r, t, a);
        if (0 === s.length) return { uploadedTransactionsId: [] };
        try {
          const r = (0, i.countEditionTransactions)(s),
            n = (0, i.countRemoveTransactions)(s);
          t(c.announcements.uploadRequested(r, n));
          const o = await e.ws.backup.upload({
              login: e.login,
              uki: e.uki,
              lock: e.lock,
              transactions: s,
              privateKey: e.privateKey,
              publicKey: e.publicKey
            }),
            a = s.reduce((e, t) => (t.identifier && e.push(t.identifier), e), []);
          return (
            t(c.announcements.uploadSucceeded(r, n, o.timestamp)),
            { uploadedTransactionsId: a, lastSyncTimestamp: Number(o.timestamp), summary: o.summary }
          );
        } catch (e) {
          throw (t(c.announcements.uploadFailed(e)), e);
        }
      }),
        (t.isUploadNeeded = function (e) {
          const t = (0, n.propOr)([], "changesToUpload", e);
          return 0 !== t.length && d(t).length > 0;
        });
    },
    731982: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.countSyncSummaryTransactions = void 0),
        (t.countSyncSummaryTransactions = function (e) {
          return e ? Object.keys(e.transactions).reduce((t, r) => t + (Object.keys(e.transactions[r]) || []).length, 0) : 0;
        });
    },
    525963: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getLastSuccessfulSyncTimestamp = t.sync = t.MAX_SYNC_TIMESTAMP = t.MIN_SYNC_TIMESTAMP = void 0);
      const n = r(401067),
        o = r(737898),
        a = r(836081),
        i = r(826632),
        s = r(537744),
        c = r(795623),
        p = r(862844),
        u = r(358582),
        d = r(335668),
        l = r(363002),
        y = r(645291),
        g = r(670252),
        m = r(392263);
      function h(e, t) {
        const r = Number(t);
        return "" === t || (0, n.isNil)(t) || isNaN(r) ? e : r;
      }
      (t.MIN_SYNC_TIMESTAMP = 999999999999),
        (t.MAX_SYNC_TIMESTAMP = 2070753783e3),
        (t.sync = async function (e) {
          const { announce: r, storeService: f } = e;
          let S;
          try {
            const T = f.getState();
            !(function (e) {
              switch (e.syncType) {
                case o.SyncType.FIRST_SYNC: {
                  if (0 !== e.lastSyncTimestamp) throw new Error("Sync Error: lastSyncTimestamp should be 0 on First Sync");
                  const t = (0, l.getUploadChangesWithoutSettings)(e.personalData?.changesToUpload ?? []);
                  if (t?.length) throw new Error("Sync Error: should not have changes to upload on First Sync");
                  break;
                }
                case o.SyncType.LIGHT_SYNC:
                case o.SyncType.FULL_SYNC:
                  if (
                    null === e.lastSyncTimestamp ||
                    e.lastSyncTimestamp < t.MIN_SYNC_TIMESTAMP ||
                    e.lastSyncTimestamp > t.MAX_SYNC_TIMESTAMP
                  ) {
                    const t = new Error("Sync Error: non valid lastSyncTimestamp"),
                      r = m.CarbonError.fromAnyError(t)
                        .addContextInfo("SYNC", "verifySyncArgs")
                        .addAdditionalInfo({ libError: `lastSyncTimestamp: ${e.lastSyncTimestamp}` });
                    throw ((0, g.sendExceptionLog)({ error: r }), t);
                  }
                  break;
                default: {
                  const t = new Error("Sync Error: unexpected syncType"),
                    r = m.CarbonError.fromAnyError(t)
                      .addContextInfo("SYNC", "verifySyncArgs")
                      .addAdditionalInfo({ libError: `syncType: ${e.syncType}` });
                  throw ((0, g.sendExceptionLog)({ error: r }), t);
                }
              }
            })(e);
            const A = e.personalData || f.getPersonalData(),
              { isUploadEnabled: v } = f.getSyncStatus();
            c.Debugger.log(`[Sync] User allowed to Upload: ${v}`),
              v &&
                (0, i.isUploadNeeded)(A) &&
                (c.Debugger.log("[Sync] Found local data to upload"),
                (e.syncType = o.SyncType.FULL_SYNC),
                r(u.announcements.syncTypeChanged(e.syncType))),
              f.dispatch((0, y.scheduleChangesForSync)()),
              (S = await (0, a.latest)(e));
            const E = () => ({
              ...(0, n.dissoc)("lock", S),
              syncType: e.syncType,
              isUploadEnabled: S.isUploadEnabled,
              lastSyncTimestamp: h(e.lastSyncTimestamp, S.lastSyncTimestamp),
              uploadedTransactions: [],
              summary: S.summary
            });
            if ((0, p.changeMPinProgressSelector)(T)) return await (0, d.unlock)(e, S.lock), E();
            if (e.syncType !== o.SyncType.FULL_SYNC || !S.isUploadEnabled)
              return S.isUploadEnabled && (await (0, d.unlock)(e, S.lock)), E();
            const _ = ((e, t) => {
                const r = new Set(),
                  n = (e && e.items) || [];
                for (const e of n) e && "object" == typeof e && e.id && r.add(e.id);
                for (const e of t.items) e && "object" == typeof e && e.itemId && r.add(e.itemId);
                return r;
              })(S.sharing2, f.getSharingData()),
              { personalData: b, remoteTransactions: C } = (0, s.default)(r, A, _, S.clearTransactions),
              D = (0, n.isNil)(e.pushKeysToServer)
                ? null
                : { publicKey: e.pushKeysToServer.public, privateKey: e.pushKeysToServer.private },
              P = {
                login: e.login,
                uki: e.uki,
                lock: S.lock,
                ws: e.ws,
                cryptoCenterService: e.dataEncryptorService.getInstance(),
                personalData: b,
                personalSettings: f.getPersonalSettings(),
                ...D,
                announce: r
              },
              O = await (0, i.upload)(P);
            return (
              0 === O.uploadedTransactionsId.length && (0, d.unlock)(e, S.lock),
              f.dispatch((0, y.clearUploadedChanges)(O.uploadedTransactionsId)),
              {
                ...(0, n.dissoc)("lock", S),
                clearTransactions: C,
                syncType: e.syncType,
                isUploadEnabled: S.isUploadEnabled,
                uploadedTransactions: O.uploadedTransactionsId,
                lastSyncTimestamp: h(e.lastSyncTimestamp, O.lastSyncTimestamp),
                summary: O.summary || S.summary
              }
            );
          } catch (t) {
            throw (S && (await (0, d.unlock)(e, S.lock)), t && t.message, t);
          } finally {
            f.dispatch((0, y.unscheduleRemainingChanges)());
          }
        }),
        (t.getLastSuccessfulSyncTimestamp = h);
    },
    836081: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.buildFullBackupFileMap = t.buildLatestArgs = t.latest = void 0);
      const n = r(235992),
        o = r(401067),
        a = r(453576),
        i = r(463713),
        s = r(795623),
        c = r(737898),
        p = r(358582),
        u = r(335668),
        d = r(392263),
        l = r(670252);
      function y(e) {
        const { lastSyncTimestamp: t, login: r, needsKeys: o, storeService: a, syncType: i, transactionIds: s, uki: p } = e,
          u = s && s.length,
          y = {
            lock: i === c.SyncType.FULL_SYNC || u ? (0, n.v4)() : "nolock",
            login: r,
            needsKeys: o,
            sharing2: !0,
            teamAdminGroups: !0,
            timestamp: t,
            version: a.getPlatform().info.appVersion,
            uki: p
          };
        switch ((s && (y.transactions = s), i)) {
          case c.SyncType.FIRST_SYNC:
            if (0 !== y.timestamp) throw new Error("timestamp should be null for FIRST_SYNC");
            break;
          case c.SyncType.LIGHT_SYNC:
          case c.SyncType.FULL_SYNC:
            if (isNaN(y.timestamp)) y.timestamp = 0;
            else if (null === y.timestamp || y.timestamp < 999999999999 || y.timestamp > 2070753783e3) {
              const e = new Error("non valid lastSyncTimestamp"),
                t = d.CarbonError.fromAnyError(e)
                  .addContextInfo("SYNC", "buildLatestArgs")
                  .addAdditionalInfo({ libError: `lastSyncTimestamp: ${y.timestamp}` });
              throw ((0, l.sendExceptionLog)({ error: t }), e);
            }
            break;
          default: {
            const e = new Error("unexpected syncType"),
              t = d.CarbonError.fromAnyError(e)
                .addContextInfo("SYNC", "buildLatestArgs")
                .addAdditionalInfo({ libError: `syncType: ${i}` });
            throw ((0, l.sendExceptionLog)({ error: t }), e);
          }
        }
        return y;
      }
      function g(e) {
        const t = new Map();
        return (
          e &&
            e.forEach((e) => {
              t.set(e.identifier, e.backupDate);
            }),
          t
        );
      }
      (t.latest = async function (e) {
        const t = y(e),
          { announce: r } = e;
        let n;
        try {
          const { lock: o, needsKeys: i } = t;
          if ((r(p.announcements.latestRequested(o, i)), (n = await e.ws.backup.latest(t)), "message" === n.objectType))
            throw "Incorrect authentification" === n.content
              ? new Error(a.AuthenticationCode[a.AuthenticationCode.INVALID_UKI])
              : "Temporarily disabled" === n.content
              ? new Error("Sync service unavailable")
              : new Error(a.AuthenticationCode[a.AuthenticationCode.UNKNOWN_SYNC_ERROR]);
          if (void 0 !== n.objectType) throw new Error("unexpected objectType");
          if (!n.transactionList) throw (s.default.log("Backup sync failed"), new Error("Backup sync failed"));
          if (
            !(function (e) {
              return !e.find((e) => !e.backupDate || e.backupDate < 999999999999 || e.backupDate > 2070753783e3);
            })(n.transactionList)
          )
            throw new Error("wrongly formatted backupDate");
        } catch (e) {
          throw (r(p.announcements.latestFailed(e)), e);
        }
        r(p.announcements.latestSucceeded(n));
        const c = g(n.fullBackupFileList);
        try {
          return {
            clearTransactions: await i.decrypt(e.dataEncryptorService.getInstance(), r, n.fullBackupFile, c, n.transactionList),
            sharing2: n.sharing2,
            lastSyncTimestamp: n.timestamp,
            lock: t.lock,
            keys: n.keys,
            isUploadEnabled: (0, o.defaultTo)(!1, n.uploadEnabled),
            summary: n.summary,
            fullBackupFileSize: c.size
          };
        } catch (r) {
          throw ((0, u.unlock)(e, t.lock), r);
        }
      }),
        (t.buildLatestArgs = y),
        (t.buildFullBackupFileMap = g);
    },
    737898: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SyncType = void 0),
        (function (e) {
          (e[(e.FIRST_SYNC = 0)] = "FIRST_SYNC"), (e[(e.LIGHT_SYNC = 1)] = "LIGHT_SYNC"), (e[(e.FULL_SYNC = 2)] = "FULL_SYNC");
        })(t.SyncType || (t.SyncType = {}));
    },
    335668: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.unlock = void 0);
      const n = r(795623);
      t.unlock = async function (e, t) {
        if (
          !(function (e) {
            return e && "nolock" !== e;
          })(t)
        )
          return;
        const { login: r, ws: o, uki: a } = e;
        try {
          await o.backup.unlock({ login: r, uki: a, lock: t });
        } catch (e) {
          (0, n.logWarn)({ tag: "Sync", message: `Unlock failed: ${e}` });
        }
      };
    },
    859890: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.binaryFindLastIndex = t.binaryFindIndex = t.binaryContains = void 0);
      const n = r(401067);
      (t.binaryContains = (0, n.curry)(function e(t, r) {
        const n = t.length;
        if (0 === n) return !1;
        const o = Math.floor(n / 2),
          a = t[o];
        return a === r || e(a < r ? t.slice(o + 1, n) : t.slice(0, o), r);
      })),
        (t.binaryFindIndex = function e(t, r, n) {
          const o = t.length;
          if (0 === o) return -1;
          const a = n ? Math.min(n, o - 1) : Math.floor(o / 2);
          if (r(t[a])) {
            const n = e(t.slice(0, a), r);
            return -1 === n ? a : n;
          }
          {
            const n = e(t.slice(a + 1, o), r);
            return -1 === n ? -1 : a + n + 1;
          }
        }),
        (t.binaryFindLastIndex = function e(t, r, n) {
          const o = t.length;
          if (0 === o) return -1;
          const a = n ? Math.min(n, o - 1) : Math.floor(o / 2);
          if (r(t[a])) {
            const n = e(t.slice(a + 1, o), r);
            return -1 === n ? a : a + n + 1;
          }
          return e(t.slice(0, a), r);
        });
    },
    72365: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeDataEncryptorService = t.setObfuscatingKey = void 0);
      const n = r(956668);
      (t.setObfuscatingKey = function (e) {
        return (
          e.setInstance(
            {
              raw: [214, 238, 100, 106, 146, 140, 114]
                .concat([110, 232, 72, 104, 108, 100, 204])
                .map((e) => e / 2)
                .map((e) => String.fromCharCode(e))
                .join("")
            },
            ""
          ),
          e
        );
      }),
        (t.makeDataEncryptorService = function (e) {
          let t = null;
          return {
            setInstance: (r, o, a) => {
              t = (0, n.makeCryptoCenterService)(r, o, e, a);
            },
            getInstance: () => {
              if (!t)
                throw new Error("makeDataEncryptorService: you must call setInstance(password,serverKey) before getting the instance");
              return t;
            },
            close: () => {
              t = null;
            },
            hasBeenSet: () => Boolean(t)
          };
        });
    },
    656584: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.convertDashlaneSecureDataKWC3ToTransportableData = void 0);
      const n = r(316038);
      t.convertDashlaneSecureDataKWC3ToTransportableData = (e) => {
        const t = e.salt,
          r = (0, n.utf8ToBase64Buffer)(e.version),
          o = e.encryptedData;
        return (0, n.concatBuffers)(t, r, o);
      };
    },
    316038: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.convertBufferToHex =
          t.deflateBuffer =
          t.removeQtCompressionHeader =
          t.addQtCompressHeader =
          t.isBase64Encoded =
          t.getSubDataByteArray =
          t.concatBuffers =
          t.ab2str =
          t.str2ab =
          t.base64ToBigInteger =
          t.pemToSpki =
          t.spkitoPem =
          t.pkcs8toPem =
          t.CrlfToLF =
          t.pemTopkcs8 =
          t.base64BufferToText =
          t.utf8ToBase64 =
          t.base64ToUtf8 =
          t.utf8ToBase64Buffer =
          t.base64BufferToUtf8 =
          t.arrayBufferToText =
          t.uint8ArrayToText =
          t.utf8ChunkDecode =
          t.utf8ChunkEncode =
          t.base64ToBuffer =
          t.bufferToBase64 =
          t.applyXorOnBuffers =
            void 0);
      const n = r(493513),
        o = r(663969),
        a = r(563290),
        i = r(997224),
        s = r(810001),
        c = r(393347),
        p = r(530543),
        u = 16383,
        d = Math.pow(10, 6),
        l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        y = new Uint8Array(256);
      for (let e = 0; e < l.length; e++) y[l.charCodeAt(e)] = e;
      function g(e) {
        const t = e.length,
          r = [];
        for (let n = 0; n < t; n += 3)
          r.push(l[e[n] >> 2]),
            r.push(l[((3 & e[n]) << 4) | (e[n + 1] >> 4)]),
            r.push(l[((15 & e[n + 1]) << 2) | (e[n + 2] >> 6)]),
            r.push(l[63 & e[n + 2]]);
        return r.join("");
      }
      function m(e, t = d) {
        const r = new Uint8Array(e),
          n = r.length,
          o = t % 3,
          a = 0 === o ? t : t + (3 - o),
          i = Math.ceil(n / a);
        let s = "",
          c = -1;
        for (; c++ < i; ) {
          const e = c * a,
            t = c === i - 1 ? n : (c + 1) * a,
            o = g(r.slice(e, t));
          s = s.concat(o);
        }
        return n % 3 == 2 ? s.substring(0, s.length - 1) + "=" : n % 3 == 1 ? s.substring(0, s.length - 2) + "==" : s;
      }
      function h(e) {
        let t = 0.75 * e.length;
        const r = e.length;
        let n,
          o,
          a,
          i,
          s,
          c = 0;
        e.endsWith("=") && (t--, "=" === e[e.length - 2] && t--);
        const p = new ArrayBuffer(t),
          u = new Uint8Array(p);
        for (n = 0; n < r; n += 4)
          (o = y[e.charCodeAt(n)]),
            (a = y[e.charCodeAt(n + 1)]),
            (i = y[e.charCodeAt(n + 2)]),
            (s = y[e.charCodeAt(n + 3)]),
            (u[c++] = (o << 2) | (a >> 4)),
            (u[c++] = ((15 & a) << 4) | (i >> 2)),
            (u[c++] = ((3 & i) << 6) | (63 & s));
        return p;
      }
      function f(e, t = d) {
        const r = e.length;
        if (0 === r) return "";
        let n = "",
          o = 0,
          a = Math.min(o + t, r);
        for (; a <= r; ) {
          const i = e.charCodeAt(a - 1);
          if (i >= 55296 && i <= 56319) {
            if ((a++, a > r)) throw new Error("Invalid string provided to utf8ChunkEncode");
            continue;
          }
          const s = e.slice(o, a),
            c = p.encode(s);
          if (((n = n.concat(c)), a === r)) break;
          (o = a), (a = Math.min(o + t, r));
        }
        return n;
      }
      function S(e) {
        return e >> 6 == 2;
      }
      function T(e, t = d) {
        const r = e.length;
        if (0 === r) return "";
        let n = "",
          o = 0,
          a = Math.min(o + t, r);
        for (; a <= r; ) {
          if (
            (S((i = e.charCodeAt(a - 1))) ||
              (function (e) {
                return e >> 5 == 6 || e >> 4 == 14 || e >> 3 == 30;
              })(i)) &&
            a < r &&
            S(e.charCodeAt(a))
          ) {
            a++;
            continue;
          }
          const s = e.slice(o, a),
            c = p.decode(s);
          if (((n = n.concat(c)), a === r)) break;
          (o = a), (a = Math.min(o + t, r));
        }
        var i;
        return n;
      }
      function A(e) {
        const t = new Uint16Array(e),
          r = t.length;
        let n = "",
          o = u;
        for (let e = 0; e < r; e += o) e + o > r && (o = r - e), (n += String.fromCharCode.apply(null, t.subarray(e, e + o)));
        return n;
      }
      function v(e) {
        return A(new Uint8Array(e));
      }
      function E(e) {
        const t = new ArrayBuffer(e.length),
          r = new Uint8Array(t);
        for (let t = 0; t < e.length; ++t) r[t] = e.charCodeAt(t);
        return t;
      }
      function _(...e) {
        const t = e.reduce((e, t) => e + t.byteLength, 0),
          r = new Uint8Array(t);
        return e.reduce((e, t) => (r.set(new Uint8Array(t), e), e + t.byteLength), 0), r.buffer;
      }
      (t.applyXorOnBuffers = function (e, t) {
        if (e.byteLength !== t.byteLength) throw new Error("xorBuffer: buffers are not same length");
        const r = new Uint8Array(e),
          n = new Uint8Array(t),
          o = e.byteLength,
          a = new Uint8Array(o);
        for (let e = 0; e < o; e++) a[e] = r[e] ^ n[e];
        return a.buffer;
      }),
        (t.bufferToBase64 = m),
        (t.base64ToBuffer = h),
        (t.utf8ChunkEncode = f),
        (t.utf8ChunkDecode = T),
        (t.uint8ArrayToText = A),
        (t.arrayBufferToText = v),
        (t.base64BufferToUtf8 = function (e) {
          const t = m(e);
          return T(n.decode(t));
        }),
        (t.utf8ToBase64Buffer = function (e) {
          const t = f(e);
          return h(n.encode(t));
        }),
        (t.base64ToUtf8 = function (e) {
          return T(n.decode(e));
        }),
        (t.utf8ToBase64 = function (e) {
          const t = f(e);
          return n.encode(t);
        }),
        (t.base64BufferToText = function (e) {
          const t = m(e);
          return n.decode(t);
        }),
        (t.pemTopkcs8 = function (e) {
          const t = o.privateKeyFromPem(e),
            r = o.privateKeyToAsn1(t),
            n = o.wrapRsaPrivateKey(r);
          return E(s.toDer(n).getBytes());
        }),
        (t.CrlfToLF = (e) => e.replace(/(?:\\[r]|[\r\n]+)+/g, "\n")),
        (t.pkcs8toPem = function (e) {
          const r = new a.ByteBuffer(e),
            n = s.fromDer(r),
            i = o.privateKeyFromAsn1(n),
            c = o.privateKeyToPem(i);
          return (0, t.CrlfToLF)(c);
        }),
        (t.spkitoPem = function (e) {
          const r = new a.ByteBuffer(e),
            n = s.fromDer(r),
            i = o.publicKeyFromAsn1(n),
            c = o.publicKeyToRSAPublicKeyPem(i);
          return (0, t.CrlfToLF)(c);
        }),
        (t.pemToSpki = function (e) {
          const t = o.publicKeyFromPem(e),
            r = o.publicKeyToAsn1(t);
          return E(s.toDer(r).getBytes());
        }),
        (t.base64ToBigInteger = function (e) {
          const t = (e + "===".slice((e.length + 3) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
            r = a.decode64(t);
          return new i.BigInteger(a.bytesToHex(r), 16);
        }),
        (t.str2ab = E),
        (t.ab2str = v),
        (t.concatBuffers = _),
        (t.getSubDataByteArray = function (e, t, r) {
          return e.slice(t, r);
        }),
        (t.isBase64Encoded = function (e) {
          return e && /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/.test(e);
        }),
        (t.addQtCompressHeader = function (e) {
          var t;
          return _(
            ((t = e.byteLength), new Uint8Array([(4278190080 & t) >> 24, (16711680 & t) >> 16, (65280 & t) >> 8, 255 & t]).buffer),
            e
          );
        }),
        (t.removeQtCompressionHeader = function (e) {
          return e.slice(4);
        }),
        (t.deflateBuffer = function (e) {
          return c.deflate(new Uint8Array(e), { level: 7 }).buffer;
        }),
        (t.convertBufferToHex = function (e) {
          return Array.prototype.map.call(new Uint8Array(e), (e) => ("00" + e.toString(16)).slice(-2)).join("");
        });
    },
    655623: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getRandomValues = void 0);
      const n = r(597588),
        o = r(81106);
      t.getRandomValues = function (e) {
        const t = (0, o.getWebCrypto)();
        return t ? t.getRandomValues(new Uint8Array(e)) : (0, n.generateRandomValues)(e);
      };
    },
    203678: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.jwkToSpki = t.evpBytesToKey = void 0);
      const n = r(663969),
        o = r(810001),
        a = r(246445),
        i = r(316038);
      (t.evpBytesToKey = async function (e) {
        const { derivedKey: t, salt: r, keyLength: n, ivLength: o } = e,
          s = (0, i.concatBuffers)(t, r.slice(0, 8)),
          c = await (0, a.computeHashSha1)(s),
          p = await (0, a.computeHashSha1)((0, i.concatBuffers)(c, s)),
          u = await (0, a.computeHashSha1)((0, i.concatBuffers)(p, s)),
          d = (0, i.concatBuffers)(c, p, u);
        return Promise.resolve(d.slice(n, n + o));
      }),
        (t.jwkToSpki = (e) => {
          const { modulus: t, exponent: r } = e,
            a = n.setRsaPublicKey((0, i.base64ToBigInteger)(t), (0, i.base64ToBigInteger)(r)),
            s = n.publicKeyToAsn1(a),
            c = o.toDer(s).getBytes();
          return (0, i.str2ab)(c);
        });
    },
    164910: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getNoDerivationCryptoConfig = void 0);
      const n = r(65675),
        o = r(791301);
      t.getNoDerivationCryptoConfig = function () {
        return (0, n.parsePayload)(o.CRYPTO_NODERIVATION_HMAC64).cryptoConfig;
      };
    },
    81106: (e, t) => {
      function r() {
        return self.crypto || null;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getWebCryptoSubtle = t.getWebCrypto = void 0),
        (t.getWebCrypto = r),
        (t.getWebCryptoSubtle = function () {
          const e = r();
          return e ? (e.subtle ? e.subtle : e.webkitSubtle ? e.webkitSubtle : null) : null;
        });
    },
    133769: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.generateLocalkeyAndSetupEncryptorService = t.getEncryptionKeyBuffer = void 0);
      const n = r(164910),
        o = r(316038),
        a = r(869530),
        i = r(816356),
        s = r(25576);
      (t.getEncryptionKeyBuffer = function (e, t, r) {
        if (r.skipDerivation) {
          if (e.byteLength < 64) throw new Error(`createEncryptionKey: password should be at least 64 bytes long but is: ${e.byteLength}`);
          return (0, o.applyXorOnBuffers)(e, t);
        }
        return (0, o.concatBuffers)(t, e);
      }),
        (t.generateLocalkeyAndSetupEncryptorService = async function (e, t, r, c) {
          const p = await (0, a.generate64BytesKey)(),
            u = (0, o.base64BufferToText)(p),
            d = (0, n.getNoDerivationCryptoConfig)();
          e.setInstance({ raw: u }, "", d),
            t.dispatch((0, i.updateLocalKey)(u)),
            c === s.PersistData.PERSIST_DATA_YES && (await r.getInstance().user.persistLocalKey(u));
        });
    },
    383570: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeGetDerivateKeyWithCacheAndQueue = void 0);
      const n = r(65675),
        o = r(316038),
        a = r(886723),
        i = r(246445);
      t.makeGetDerivateKeyWithCacheAndQueue = function () {
        const e = new Map(),
          t = new Map();
        function r(t) {
          return e.get(t);
        }
        function s(r, n) {
          const o = t.get(r);
          o && o.forEach(({ resolve: e }) => e(n)), t.set(r, []), e.set(r, n);
        }
        function c(r, n, o, i) {
          return new Promise((c, p) => {
            const u = t.get(r) || [];
            u.push({ resolve: c, reject: p }), t.set(r, u);
            const d = e.get(r);
            d
              ? s(r, d)
              : 1 === u.length &&
                { pbkdf2: a.deriveKeyWithPBKDF2, argon2d: a.deriveKeyWithArgon2d }
                  [i.method](n, o, i)
                  .then((e) => {
                    s(r, e);
                  })
                  .catch((n) => {
                    !(function (r, n) {
                      const o = t.get(r);
                      o && o.forEach(({ reject: e }) => e(n)), t.set(r, []), e.delete(r);
                    })(r, n);
                  });
          });
        }
        return (e, t, a) =>
          (function (e, t, r, a, s) {
            return (function (e, t, r) {
              if ((0, n.isNoDerivation)(r)) return Promise.resolve((0, o.arrayBufferToText)(e));
              const a = (0, n.isPbkdf2Derivation)(r) ? r.iterations : r.t_cost;
              return new Promise((n, s) => {
                (0, i.computeHashSha256)((0, o.str2ab)(`${(0, o.arrayBufferToText)(e)}_${(0, o.arrayBufferToText)(t)}_${r.method}_${a}`))
                  .then((e) => (0, o.arrayBufferToText)(e))
                  .then(n, s);
              });
            })(r, a, s).then((n) => e(n) || t(n, r, a, s));
          })(r, c, e, t, a);
      };
    },
    656984: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.verify =
          t.sign =
          t.decrypt =
          t.encrypt =
          t.generateRsaOaepKeyPair =
          t.DefaultAsymmetricOptions =
          t.HashAlgorithm =
          t.RSASA_PKCS1 =
          t.RSA_OAEP =
            void 0);
      const n = r(316038);
      (t.RSA_OAEP = "RSA-OAEP"), (t.RSASA_PKCS1 = "RSASSA-PKCS1-v1_5");
      const o = new Uint8Array([1, 0, 1]);
      var a;
      !(function (e) {
        (e.SHA_1 = "SHA-1"), (e.SHA_256 = "SHA-256");
      })((a = t.HashAlgorithm || (t.HashAlgorithm = {}))),
        (t.DefaultAsymmetricOptions = { hashAlgorithm: a.SHA_256 });
      const i = (e) => ({ name: t.RSASA_PKCS1, hash: { name: e } }),
        s = (e) => ({ name: t.RSA_OAEP, hash: { name: e } });
      (t.generateRsaOaepKeyPair = async (e = a.SHA_256) => {
        const r = await self.crypto.subtle.generateKey(
            { name: t.RSA_OAEP, modulusLength: 2048, publicExponent: o, hash: { name: e } },
            !0,
            ["encrypt", "decrypt"]
          ),
          { publicKey: i, privateKey: s } = await (async function ({ privateKey: e, publicKey: t }) {
            return { privateKey: await self.crypto.subtle.exportKey("pkcs8", e), publicKey: await self.crypto.subtle.exportKey("spki", t) };
          })({ ...r });
        return (function ({ publicKey: e, privateKey: t }) {
          return { publicKey: (0, n.spkitoPem)(e), privateKey: (0, n.pkcs8toPem)(t) };
        })({ publicKey: i, privateKey: s });
      }),
        (t.encrypt = async function ({ publicKey: e, data: r, options: n = t.DefaultAsymmetricOptions }) {
          const o = await self.crypto.subtle.importKey("spki", e, s(n.hashAlgorithm), !1, ["encrypt"]);
          return await self.crypto.subtle.encrypt(s(n.hashAlgorithm), o, r);
        }),
        (t.decrypt = async function ({ privateKey: e, data: r, options: n = t.DefaultAsymmetricOptions }) {
          const o = await self.crypto.subtle.importKey("pkcs8", e, s(n.hashAlgorithm), !1, ["decrypt"]);
          return await self.crypto.subtle.decrypt(s(n.hashAlgorithm), o, r);
        }),
        (t.sign = async function ({ privateKey: e, data: r, options: n = t.DefaultAsymmetricOptions }) {
          const o = await self.crypto.subtle.importKey("pkcs8", e, i(n.hashAlgorithm), !1, ["sign"]);
          return await self.crypto.subtle.sign(i(n.hashAlgorithm), o, r);
        }),
        (t.verify = async function ({ publicKey: e, signature: r, data: n, options: o = t.DefaultAsymmetricOptions }) {
          const a = await self.crypto.subtle.importKey("spki", e, i(o.hashAlgorithm), !1, ["verify"]);
          return await self.crypto.subtle.verify(i(o.hashAlgorithm), a, r, n);
        });
    },
    73626: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deriveKeyWithArgon2d = void 0);
      const n = r(926625),
        o = r(795623),
        a = r(670252),
        i = r(635558);
      t.deriveKeyWithArgon2d = async (e, t, r) => {
        try {
          if (null === e || null === t || null === r) throw new Error("deriveKeyWithArgon2d parameters are null");
          if (!n.env.isBrowserEnvironment() && !n.env.isWorkerEnvironment()) throw new Error("Environment is not supported");
          return (async (e, t, r) => {
            const n = { argon2d: i.ArgonType.Argon2d, argon2i: i.ArgonType.Argon2i },
              { hash: o } = await (0, i.hash)({
                pass: new Uint8Array(e),
                salt: new Uint8Array(t),
                time: r.t_cost,
                mem: r.m_cost,
                hashLen: 32,
                parallelism: r.parallelism,
                type: n[r.method]
              });
            return o;
          })(e, t, r);
        } catch (e) {
          const t = new Error(`[Derivation] - deriveKeyWithArgon2d: ${e}`);
          throw (o.Debugger.error(t), (0, a.sendExceptionLog)({ error: t }), e);
        }
      };
    },
    886723: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deriveKeyWithArgon2d = t.deriveKeyWithPBKDF2 = void 0);
      var n = r(233713);
      Object.defineProperty(t, "deriveKeyWithPBKDF2", {
        enumerable: !0,
        get: function () {
          return n.deriveKeyWithPBKDF2;
        }
      });
      var o = r(73626);
      Object.defineProperty(t, "deriveKeyWithArgon2d", {
        enumerable: !0,
        get: function () {
          return o.deriveKeyWithArgon2d;
        }
      });
    },
    233713: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deriveKeyWithPBKDF2 = void 0);
      const n = r(81106),
        o = r(597588),
        a = r(400975),
        i = r(795623),
        s = r(804673),
        c = { sha1: "SHA-1", sha256: "SHA-256" };
      t.deriveKeyWithPBKDF2 = async (e, t, r) => {
        if (null === e || null === t || null === r) throw new Error("deriveKeyWithPBKDF2 parameters are null");
        const p = (0, s.getPlugins)().pbkdf2Plugin;
        if (p)
          return new Promise((n) => {
            n(p.deriveKey(new Uint8Array(e), new Uint8Array(t), r.iterations, r.hashMethod ? c[r.hashMethod] : "SHA-256", 32).buffer);
          });
        const u = (0, n.getWebCryptoSubtle)();
        if (!u) return (0, o.deriveKeyPolyfill)(e, t, r);
        try {
          const n = await u.importKey("raw", e, "PBKDF2", !1, ["deriveKey"]);
          return await u
            .deriveKey(
              { name: "PBKDF2", salt: t, iterations: r.iterations, hash: { name: r.hashMethod ? c[r.hashMethod] : "SHA-256" } },
              n,
              { name: a.AES_CBC, length: 256 },
              !0,
              ["encrypt", "decrypt"]
            )
            .then((e) => u.exportKey("raw", e));
        } catch (n) {
          return ((n) => {
            const a = new Error(`[Derivation] - deriveKeyWithPBKDF2: ${n}`);
            return i.Debugger.error(a), (0, o.deriveKeyPolyfill)(e, t, r);
          })(n);
        }
      };
    },
    246445: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hashAndSplitKey = t.computeHashMD5 = t.computeHashSha512 = t.computeHashSha256 = t.computeHashSha1 = void 0);
      const n = r(930960),
        o = r(316038);
      async function a({ hashAlgorithm: e, data: t }) {
        return await self.crypto.subtle.digest({ name: e }, t);
      }
      async function i(e) {
        return await a({ hashAlgorithm: "SHA-512", data: e });
      }
      (t.computeHashSha1 = async function (e) {
        return await a({ hashAlgorithm: "SHA-1", data: e });
      }),
        (t.computeHashSha256 = async function (e) {
          return await a({ hashAlgorithm: "SHA-256", data: e });
        }),
        (t.computeHashSha512 = i),
        (t.computeHashMD5 = (e) => {
          const t = n.create();
          return t.update(e), t.digest().toHex();
        }),
        (t.hashAndSplitKey = async function (e) {
          const t = await i(e),
            r = t.byteLength,
            n = (0, o.getSubDataByteArray)(new Uint8Array(t), 0, r / 2),
            a = (0, o.getSubDataByteArray)(new Uint8Array(t), r / 2, r);
          return { aes: n.buffer, hmac: a.buffer };
        });
    },
    869530: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.verifyHashHmacSHA256 =
          t.signHashHmacSHA256 =
          t.decryptAES256 =
          t.encryptAES256 =
          t.importKeyAES256 =
          t.generate64BytesKey =
          t.generateAESKey =
            void 0);
      const n = r(316038),
        o = "AES-CBC",
        a = 256,
        i = { name: "HMAC", hash: { name: "SHA-256" } };
      async function s() {
        const e = await self.crypto.subtle.generateKey({ name: o, length: a }, !0, ["encrypt", "decrypt"]);
        return await self.crypto.subtle.exportKey("raw", e);
      }
      async function c(e) {
        return await self.crypto.subtle.importKey("raw", e, o, !1, ["encrypt", "decrypt"]);
      }
      async function p(e) {
        return await self.crypto.subtle.importKey("raw", e, { name: "HMAC", hash: { name: "SHA-256" } }, !0, ["sign", "verify"]);
      }
      (t.generateAESKey = s),
        (t.generate64BytesKey = async function () {
          const e = await s(),
            t = await s();
          return (0, n.concatBuffers)(e, t);
        }),
        (t.importKeyAES256 = c),
        (t.encryptAES256 = async function ({ key: e, iv: t, clearData: r }) {
          const n = await c(e);
          return await self.crypto.subtle.encrypt({ name: o, iv: t }, n, r);
        }),
        (t.decryptAES256 = async function ({ key: e, iv: t, encryptedData: r }) {
          const n = await c(e);
          return await self.crypto.subtle.decrypt({ name: o, iv: t }, n, r);
        }),
        (t.signHashHmacSHA256 = async function ({ key: e, data: t }) {
          const r = await p(e);
          return await self.crypto.subtle.sign(i, r, t);
        }),
        (t.verifyHashHmacSHA256 = async function ({ key: e, signature: t, data: r }) {
          const n = await p(e);
          return await self.crypto.subtle.verify(i, n, t, r);
        });
    },
    400975: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AES_KEY_SIZE = t.AES_CBC = void 0),
        (t.AES_CBC = "AES-CBC"),
        (t.AES_KEY_SIZE = 32);
    },
    597588: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.verifyRsa =
          t.signRSA =
          t.decryptRSA =
          t.encryptRSA =
          t.generateRsaKeyPair =
          t.deriveKeyPolyfill =
          t.verifyHashHmacSHA256 =
          t.signHashHmacSHA256 =
          t.decryptAES256 =
          t.encryptAES256 =
          t.generateAESKey =
          t.computeHashSha512 =
          t.computeHashSha256 =
          t.computeHashSha1 =
          t.generateRandomValues =
          t.arrayBufferToBuffer =
            void 0);
      const n = r(661384),
        o = r(316038),
        a = r(795623),
        i = r(656984),
        s = r(400975),
        c = r(663969),
        p = r(859018),
        u = r(658654),
        d = r(563290),
        l = r(811087),
        y = r(685469),
        g = r(133803),
        m = r(515313).Buffer;
      function h(e) {
        const t = new m(e.byteLength),
          r = new Uint8Array(e);
        for (let e = 0; e < t.length; ++e) t[e] = r[e];
        return t;
      }
      (t.arrayBufferToBuffer = h),
        (t.generateRandomValues = function (e) {
          const t = p.getBytesSync(e);
          return (0, o.str2ab)(t);
        }),
        (t.computeHashSha1 = (e) =>
          new Promise((t, r) => {
            try {
              const r = (0, o.base64BufferToText)(e),
                n = l.sha1.create();
              return n.update(r), t((0, o.str2ab)(n.digest().data));
            } catch (e) {
              return a.Debugger.log("Error while using Webcrypto  Polyfill - [computeHashSha1]", e), r(e);
            }
          })),
        (t.computeHashSha256 = (e) =>
          new Promise((t, r) => {
            try {
              const r = (0, o.base64BufferToText)(e),
                n = l.sha256.create();
              return n.update(r), t((0, o.str2ab)(n.digest().data));
            } catch (e) {
              return a.Debugger.log("Error while using Webcrypto  Polyfill - [computeHashSha256]", e), r(e);
            }
          })),
        (t.computeHashSha512 = (e) =>
          new Promise((t, r) => {
            try {
              const r = (0, o.base64BufferToText)(e),
                n = l.sha512.create();
              return n.update(r), t((0, o.str2ab)(n.digest().data));
            } catch (e) {
              return a.Debugger.log("Error while using Webcrypto  Polyfill - [computeHashSha512]", e), r(e);
            }
          })),
        (t.generateAESKey = () =>
          new Promise((e, t) => {
            try {
              p.getBytes(s.AES_KEY_SIZE, function (r, n) {
                return r ? t(r) : e((0, o.str2ab)(n));
              });
            } catch (e) {
              return a.Debugger.log("Error while using Webcrypto  Polyfill - [generateAESKey]", e), t(e);
            }
          })),
        (t.encryptAES256 = (e, t, r) =>
          new Promise((n, i) => {
            try {
              const a = new d.ByteBuffer(e),
                i = new d.ByteBuffer(t),
                c = new d.ByteBuffer(r),
                p = u.createCipher(s.AES_CBC, a);
              p.start({ iv: i }), p.update(c), p.finish();
              const l = p.output.data;
              return n((0, o.str2ab)(l));
            } catch (e) {
              return a.Debugger.log("Error while using Webcrypto  Polyfill - [encryptAES256]", e), i(e);
            }
          })),
        (t.decryptAES256 = (e, t, r) =>
          new Promise((n, i) => {
            try {
              const a = new d.ByteBuffer(e),
                i = new d.ByteBuffer(t),
                c = new d.ByteBuffer(r),
                p = u.createDecipher(s.AES_CBC, a);
              p.start({ iv: i }), p.update(c), p.finish();
              const l = p.output.data;
              return n((0, o.str2ab)(l));
            } catch (e) {
              return a.Debugger.log("Error while using Webcrypto  Polyfill - [decryptAES256]", e), i(e);
            }
          })),
        (t.signHashHmacSHA256 = (e, t) =>
          new Promise((r, n) => {
            try {
              const n = (0, o.base64BufferToText)(t),
                a = (0, o.base64BufferToText)(e),
                i = y.create();
              return i.start("sha256", a), i.update(n), r((0, o.str2ab)(i.digest().data));
            } catch (e) {
              return a.Debugger.log("Error while using Webcrypto  Polyfill - [signHashHmacSHA256]", e), n(e);
            }
          })),
        (t.verifyHashHmacSHA256 = (e, r) => {
          try {
            return (0, t.signHashHmacSHA256)(e, r).then((e) => e == e);
          } catch (e) {
            return a.Debugger.log("Error while using Webcrypto  Polyfill - [verifyHashHmacSHA256]", e), Promise.reject(e);
          }
        }),
        (t.deriveKeyPolyfill = (e, t, r) =>
          new Promise((o, i) => {
            try {
              const a = (0, n.getWorkerPath)("pbkdf2PolyfillWorker");
              if (void 0 === a) {
                const n = h(e),
                  a = h(t);
                return void g.pbkdf2(n, a, r.iterations, 32, r.hashMethod, (e, t) => {
                  e ? i(e) : o(t.buffer);
                });
              }
              (0, n.getWorker)(a).then((a) => {
                (a.onmessage = function (e) {
                  o(e.data), (0, n.freeWorker)(a);
                }),
                  (a.onerror = function (e) {
                    i(new Error(`[WebCryptoPolyfill] - deriveKeyPolyfill: ${e.message}`)), (0, n.freeWorker)(a);
                  }),
                  a.postMessage([e, t, r.iterations, 32, r.hashMethod]);
              });
            } catch (e) {
              return a.Debugger.log("Error while using Webcrypto  Polyfill - [deriveKeyFrom]", e), void i(e);
            }
          })),
        (t.generateRsaKeyPair = () =>
          new Promise((e, t) => {
            try {
              const r = (0, n.getWorkerPath)("WebCryptoPolyfill");
              c.rsa.generateKeyPair({ bits: 2048, workers: -1, workerScript: r }, function (r, n) {
                if (r) return t(r);
                const a = {
                  publicKey: (0, o.CrlfToLF)(c.publicKeyToRSAPublicKeyPem(n.publicKey)),
                  privateKey: (0, o.CrlfToLF)(c.privateKeyToPem(n.privateKey))
                };
                return e(a);
              });
            } catch (e) {
              return a.Debugger.log("Error while using Webcrypto  Polyfill - [generateRsaKeyPair]", e), t(e);
            }
          })),
        (t.encryptRSA = (e, t) =>
          new Promise((r, n) => {
            try {
              const n = (0, o.spkitoPem)(e),
                a = c.publicKeyFromPem(n),
                s = (0, o.base64BufferToText)(t),
                p = a.encrypt(s, i.RSA_OAEP, { md: l.sha256.create() });
              return r((0, o.str2ab)(p));
            } catch (e) {
              return a.Debugger.log("Error while using Webcrypto  Polyfill - [encryptRSA]", e), n(e);
            }
          })),
        (t.decryptRSA = (e, t, r = i.HashAlgorithm.SHA_256) =>
          new Promise((n, s) => {
            try {
              const a = (0, o.pkcs8toPem)(e),
                s = c.privateKeyFromPem(a),
                p = (0, o.base64BufferToText)(t),
                u = s.decrypt(p, i.RSA_OAEP, { md: r === i.HashAlgorithm.SHA_256 ? l.sha256.create() : l.sha1.create() });
              return n((0, o.str2ab)(u));
            } catch (e) {
              return a.Debugger.log("Error while using Webcrypto  Polyfill - [decryptRSA]", e), s(e);
            }
          })),
        (t.signRSA = (e, t) =>
          new Promise((r, n) => {
            try {
              const n = (0, o.pkcs8toPem)(e),
                a = c.privateKeyFromPem(n),
                i = (0, o.base64BufferToText)(t),
                s = l.sha256.create();
              s.update(i);
              const p = a.sign(s);
              return r((0, o.str2ab)(p));
            } catch (e) {
              return a.Debugger.log("Error while using Webcrypto  Polyfill - [signRSA]", e), n(e);
            }
          })),
        (t.verifyRsa = (e, t, r) =>
          new Promise((n, i) => {
            try {
              const a = (0, o.spkitoPem)(e),
                i = c.publicKeyFromPem(a),
                s = (0, o.base64BufferToText)(r),
                p = (0, o.base64BufferToText)(t),
                u = l.sha256.create();
              return u.update(s), n(i.verify(u.digest().bytes(), p));
            } catch (e) {
              return a.Debugger.log("Error while using Webcrypto  Polyfill - [verifyRsa]", e), i(e);
            }
          }));
    },
    736513: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeAsymmetricEncryption = t.makeSymmetricEncryption = t.makeCryptoService = void 0);
      const n = r(393347),
        o = r(956668),
        a = r(453576),
        i = r(761797),
        s = r(869530),
        c = r(827993),
        p = r(656984),
        u = r(316038),
        d = r(203678),
        l = r(246445),
        y = r(263985);
      async function g(e, t) {
        const r = (0, u.base64ToBuffer)(t),
          n = (0, u.base64ToBuffer)(e),
          o = await (0, l.hashAndSplitKey)(n),
          a = (0, c.parseDashlaneKw5SecureData)(new Uint8Array(r)),
          i = (0, u.concatBuffers)(a.iv, a.secured),
          p = await (0, s.signHashHmacSHA256)({ key: o.hmac, data: i });
        if ((0, u.bufferToBase64)(p) !== (0, u.bufferToBase64)(a.hash)) throw new Error("Sharing - Data has been tampered with");
        return (0, s.decryptAES256)({ key: o.aes, iv: a.iv, encryptedData: a.secured });
      }
      (t.makeCryptoService = () => ({
        symmetricEncryption: (0, t.makeSymmetricEncryption)(),
        asymmetricEncryption: (0, t.makeAsymmetricEncryption)()
      })),
        (t.makeSymmetricEncryption = () => ({
          generateNewAESKey: () => (0, s.generateAESKey)().then(u.bufferToBase64),
          encryptAES256: async (e, t) => {
            const r = (0, u.base64ToBuffer)(t),
              n = (0, u.base64ToBuffer)(e),
              o = await (0, l.hashAndSplitKey)(n),
              a = (0, c.generateIV)();
            return (0, s.encryptAES256)({ key: o.aes, iv: a, clearData: r }).then(async (e) => {
              const t = (0, u.concatBuffers)(a, e),
                n = await (0, s.signHashHmacSHA256)({ key: o.hmac, data: t }),
                i = (0, c.makeKWC5DashlaneSecureData)(r, e, a, n),
                p = (0, c.convertKw5ToTransportableData)(i);
              return (0, u.bufferToBase64)(p);
            });
          },
          encryptSharingItem: async (e, r) => {
            const o = (0, t.makeSymmetricEncryption)(),
              a = (0, i.getDashlaneXml)(r),
              s = (0, u.utf8ToBase64)(a),
              c = (0, u.base64ToBuffer)(s),
              p = n.deflate(new Uint8Array(c)).buffer,
              d = (0, u.addQtCompressHeader)(p),
              l = (0, u.bufferToBase64)(d);
            return o.encryptAES256(e, l);
          },
          decryptAES256: async (e, t) => {
            const r = await g(e, t);
            let n = "";
            try {
              n = (0, u.base64BufferToUtf8)(r);
            } catch {
              n = (0, u.bufferToBase64)(r);
            }
            return n;
          },
          decryptSharingItem: async (e, t) => {
            const r = await g(e, t);
            try {
              const e = new Uint8Array(r),
                t = (0, u.uint8ArrayToText)(e);
              return JSON.parse(t);
            } catch {
              const e = (0, o.deflatedUtf8ToUtf16)(r),
                { __type__: t, ...n } = await (0, i.parseDashlaneXml)(e),
                s = { ...n, kwType: n.kwType || t };
              return (0, a.isCredential)(s)
                ? (0, y.fixCredentialTypesFromTransaction)(s)
                : (0, a.isNote)(s)
                ? (0, y.fixNoteTypesFromTransaction)(s)
                : s;
            }
          },
          signHmacSHA256: (e, t) => {
            const r = (0, u.base64ToBuffer)(t),
              n = (0, u.base64ToBuffer)(e);
            return (0, s.signHashHmacSHA256)({ key: n, data: r }).then((e) => (0, u.bufferToBase64)(e));
          },
          verifyHmacSHA256: (e, t, r) => {
            const n = (0, u.base64ToBuffer)(r),
              o = (0, u.base64ToBuffer)(e),
              a = (0, u.base64ToBuffer)(t);
            return (0, s.verifyHashHmacSHA256)({ key: o, signature: a, data: n });
          }
        })),
        (t.makeAsymmetricEncryption = (e = p.DefaultAsymmetricOptions) => ({
          generateRsaKeyPair: () => (0, p.generateRsaOaepKeyPair)(e.hashAlgorithm),
          encrypt: (t, r) => {
            const n = (0, u.base64ToBuffer)(r),
              o = (0, u.pemToSpki)(t);
            return (0, p.encrypt)({ publicKey: o, data: n, options: e }).then(u.bufferToBase64);
          },
          decrypt: (t, r) => {
            const n = (0, u.base64ToBuffer)(r),
              o = (0, u.pemTopkcs8)(t);
            return (0, p.decrypt)({ privateKey: o, data: n, options: e }).then(u.bufferToBase64);
          },
          sign: (t, r) => {
            const n = (0, u.pemTopkcs8)(t),
              o = (0, u.base64ToBuffer)(r);
            return (0, p.sign)({ privateKey: n, data: o, options: e }).then(u.bufferToBase64);
          },
          verify: (t, r, n) => {
            const o = (0, u.pemToSpki)(t),
              a = (0, u.base64ToBuffer)(n),
              i = (0, u.base64ToBuffer)(r);
            return (0, p.verify)({ publicKey: o, signature: i, data: a, options: e });
          },
          verifyJwk: (t, r, n) => {
            const o = (0, d.jwkToSpki)(t),
              a = (0, u.base64ToBuffer)(r),
              i = (0, u.base64ToBuffer)(n);
            return (0, p.verify)({ publicKey: o, signature: a, data: i, options: e });
          }
        }));
    },
    501860: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeKeyBasedCrypto = t.makeKeyDataEncryptorService = t.DATA_TAMPERED_ERROR = void 0);
      const n = r(795623),
        o = r(670252),
        a = r(316038),
        i = r(246445),
        s = r(827993),
        c = r(869530);
      (t.DATA_TAMPERED_ERROR = "KeyBasedCrypto - Data has been tampered with"),
        (t.makeKeyDataEncryptorService = function () {
          let e = null;
          return {
            setInstance: (r) => {
              e = (0, t.makeKeyBasedCrypto)(r);
            },
            getInstance: () => {
              if (!e)
                throw new Error("makeKeyDataEncryptorService: you must call setInstance(password,serverKey) before getting the instance");
              return e;
            },
            close: () => {
              e = null;
            },
            hasBeenSet: () => Boolean(e)
          };
        }),
        (t.makeKeyBasedCrypto = (e) => {
          const r = (function (e) {
            return e.raw && (0, a.isBase64Encoded)(e.raw) ? (0, a.base64ToBuffer)(e.raw) : e.raw ? (0, a.str2ab)(e.raw) : e.buffer;
          })(e);
          return {
            isKey: () => {
              throw new Error("makeKeyBasedCrypto:isKey not implemented");
            },
            encrypt: (e) =>
              Promise.resolve()
                .then(() =>
                  (0, i.hashAndSplitKey)(r).then((t) => {
                    const r = (0, s.generateIV)();
                    return (0, c.encryptAES256)({ key: t.aes, iv: r, clearData: e }).then((n) => {
                      const o = (0, a.concatBuffers)(r, n);
                      return (0, c.signHashHmacSHA256)({ key: t.hmac, data: o }).then((t) => {
                        const o = (0, s.makeKWC5DashlaneSecureData)(e, n, r, t),
                          i = (0, s.convertKw5ToTransportableData)(o);
                        return (0, a.bufferToBase64)(i);
                      });
                    });
                  })
                )
                .catch(
                  (e) => (
                    (function (e, t) {
                      const r = new Error(`[makeKeyBasedCrypto] - Error while encrypting data.: ${t}`);
                      throw ((0, o.sendExceptionLog)({ error: r }), n.Debugger.log(r), r);
                    })(0, e),
                    null
                  )
                ),
            decrypt: (e) =>
              Promise.resolve().then(() => {
                const n = (0, a.base64ToBuffer)(e);
                return (0, i.hashAndSplitKey)(r).then((e) => {
                  const r = (0, s.parseDashlaneKw5SecureData)(new Uint8Array(n)),
                    o = (0, a.concatBuffers)(r.iv, r.secured);
                  return (0, c.signHashHmacSHA256)({ key: e.hmac, data: o }).then((n) => {
                    if ((0, a.bufferToBase64)(n) !== (0, a.bufferToBase64)(r.hash)) throw new Error(t.DATA_TAMPERED_ERROR);
                    return (0, c.decryptAES256)({ key: e.aes, iv: r.iv, encryptedData: r.secured });
                  });
                });
              }),
            prepareCrypto: () => Promise.resolve(),
            readCryptoPayload: (e) => {
              const t = (0, a.base64ToBuffer)(e);
              return (0, s.parseDashlaneKw5SecureData)(new Uint8Array(t)).version;
            }
          };
        });
    },
    791301: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CRYPTO_NODERIVATION_HMAC64 = void 0),
        (t.CRYPTO_NODERIVATION_HMAC64 = "$1$noderivation$aes256$cbchmac64$16$");
    },
    956668: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.prepareCrypto =
          t.deflatedUtf8ToUtf16 =
          t.utf16ToDeflatedUtf8 =
          t.inflateUtf16 =
          t.deflateUtf16 =
          t.cipherDashlaneSecureData =
          t.decipherDashlaneSecureData =
          t.makeCryptoCenterService =
          t.PBKDF2_DEFAULT_PAYLOAD =
          t.ARGON2_DEFAULT_PAYLOAD =
            void 0);
      const n = r(393347),
        o = r(662802),
        a = r(316038),
        i = r(203678),
        s = r(65675);
      Object.defineProperty(t, "ARGON2_DEFAULT_PAYLOAD", {
        enumerable: !0,
        get: function () {
          return s.ARGON2_DEFAULT_PAYLOAD;
        }
      }),
        Object.defineProperty(t, "PBKDF2_DEFAULT_PAYLOAD", {
          enumerable: !0,
          get: function () {
            return s.PBKDF2_DEFAULT_PAYLOAD;
          }
        });
      const c = r(869530),
        p = r(246445),
        u = r(655623),
        d = r(656584),
        l = r(383570),
        y = r(795623),
        g = r(816356),
        m = r(827517);
      function h(e, t, r) {
        const n = t + r;
        return (0, s.isCryptoConfigKWC3)(e.derivation) ? (0, a.str2ab)(n) : (0, a.utf8ToBase64Buffer)(n);
      }
      (t.makeCryptoCenterService = function (e, r, n, o) {
        const i = (0, l.makeGetDerivateKeyWithCacheAndQueue)(),
          c = e.raw,
          p = (0, a.str2ab)(r + c);
        return {
          isKey: (e, t) => e + t === r + c,
          decrypt: (e, n = {}) => (0, t.decipherDashlaneSecureData)(e, c, r, i, n),
          encrypt: (e, a = {}) => {
            const { cryptoConfig: s } = a,
              p = s || o,
              u = { ...a, cryptoConfig: p };
            return (0, t.cipherDashlaneSecureData)(c, r, e, n, i, u);
          },
          prepareCrypto: () => E(n, p, i, o),
          readCryptoPayload: (e) => (0, s.readCryptoPayload)(e)
        };
      }),
        (t.decipherDashlaneSecureData = async (e, t, r, n, o = {}) => {
          const { forceKeyKWC5: i, forceSalt: p } = o,
            u = (0, a.base64ToBuffer)(e),
            d = (0, s.parseCipheredData)(new Uint8Array(u)),
            l = d.cryptoConfig;
          let y, g;
          if (
            (((0, s.isDashlaneSecureDataFlexible)(d) || (0, s.isDashlaneSecureDataKWC3)(d)) && (y = p || d.salt),
            (0, s.isDashlaneSecureDataKWC5)(d) && i)
          )
            g = i;
          else if ((0, s.isNoDerivation)(l.derivation)) g = (0, a.str2ab)(t);
          else {
            const e = h(l, r, t);
            g = await n(e, y, l.derivation);
          }
          const m = await (async function (e, t, r) {
              return "evpByteToKey" === e.cryptoConfig.ciphering.options.ivGeneration.method
                ? f(e.cryptoConfig, t, r)
                : (0, s.isDashlaneSecureDataFlexible)(e) || (0, s.isDashlaneSecureDataKWC5)(e)
                ? e.iv
                : void 0;
            })(d, y, g),
            { signatureKey: A, cipheringKey: v } = await S(d.cryptoConfig, g);
          return await T(d, A, m), await (0, c.decryptAES256)({ key: v, iv: m, encryptedData: d.cipheredContent });
        });
      const f = async (e, t, r) => {
          const n = { derivedKey: r, salt: t, keyLength: 32, ivLength: e.ciphering.options.ivLength };
          return (0, i.evpBytesToKey)(n);
        },
        S = async (e, t) => {
          if ("skip" === e.signature.method) return { signatureKey: new ArrayBuffer(0), cipheringKey: t };
          const r = "hmac64" === e.signature.method ? t : await (0, p.computeHashSha512)(t);
          if (64 !== r.byteLength) throw new Error(`[cryptoCenter][prepareKeys] - cryptoKey's length must be 64B but is ${r.byteLength}B`);
          return {
            cipheringKey: (0, a.getSubDataByteArray)(new Uint8Array(r), 0, r.byteLength / 2).buffer,
            signatureKey: (0, a.getSubDataByteArray)(new Uint8Array(r), r.byteLength / 2, r.byteLength).buffer
          };
        },
        T = (e, t, r) => {
          if ("skip" === e.cryptoConfig.signature.method) return Promise.resolve();
          const n = (0, a.concatBuffers)(r, e.cipheredContent),
            o = e;
          return (0, c.signHashHmacSHA256)({ key: t, data: n }).then((e) => {
            if ((0, a.bufferToBase64)(e) !== (0, a.bufferToBase64)(o.hash))
              throw new Error("[decipherFlexibleMarker] Data are corrupted: HMAC signature cannot be verified");
          });
        };
      (t.cipherDashlaneSecureData = async (e, t, r, n, o, i = {}) => {
        const { cryptoConfig: p, forceSalt: d, forceIv: l } = i,
          y = p || (0, s.getCryptoConfig)(n);
        let g, m;
        if ((0, s.isNoDerivation)(y.derivation)) g = (0, a.str2ab)(e);
        else {
          m = d || _(n, y.derivation);
          const r = h(y, t, e);
          g = await o(r, m, y.derivation);
        }
        const T =
            l ||
            (await (async function (e, t, r) {
              return "evpByteToKey" === e.ciphering.options.ivGeneration.method
                ? f(e, t, r)
                : (0, u.getRandomValues)(e.ciphering.options.ivLength);
            })(y, m, g)),
          { signatureKey: E, cipheringKey: b } = await S(y, g),
          C = await (0, c.encryptAES256)({ key: b, iv: T, clearData: r }),
          D = await A(C, y, E, T);
        return v(m, T, D, C, y);
      }),
        (t.deflateUtf16 = (e) => n.deflate(e, { level: 7 })),
        (t.inflateUtf16 = (e) => {
          const t = new Uint8Array(e);
          return n.inflate(t, { to: "string" });
        }),
        (t.utf16ToDeflatedUtf8 = (e, t = {}) => {
          const { skipDeflate: r, skipUtf8Encoding: n } = t,
            o = n ? e : (0, a.utf8ChunkEncode)(e),
            i = (0, a.str2ab)(o);
          return r ? i : (0, a.addQtCompressHeader)((0, a.deflateBuffer)(i));
        }),
        (t.deflatedUtf8ToUtf16 = (e, t = {}) => {
          const { skipUtf8Decoding: r, skipInflate: i, unescapeXml: s } = t,
            c = new Uint8Array(e),
            p = i
              ? c
              : ((e) => {
                  const t = (0, a.removeQtCompressionHeader)(e),
                    r = Math.pow(2, 14) - 1,
                    i = new n.Inflate({ chunkSize: r });
                  if ((i.push(t, o.Z_FINISH), i.err))
                    throw new Error(`[Crypto] - postTreatData: unable to uncompress data - ${i.msg} (code ${i.err})`);
                  return i.result;
                })(c);
          let u = (0, a.uint8ArrayToText)(p);
          if ((s && (u = decodeURI(u)), !r))
            try {
              u = (0, a.utf8ChunkDecode)(u);
            } catch (e) {
              y.Debugger.log("Cannot utf8.decode " + e);
            }
          return u;
        });
      const A = (e, t, r, n) => {
          if ("skip" === t.signature.method) return Promise.resolve().then(() => new ArrayBuffer(0));
          const o = (0, a.concatBuffers)(n, e);
          return (0, c.signHashHmacSHA256)({ key: r, data: o });
        },
        v = (e, t, r, n, o) => {
          if ((0, s.isCryptoConfigKWC3)(o.derivation)) {
            const t = (0, d.convertDashlaneSecureDataKWC3ToTransportableData)({ encryptedData: n, salt: e, version: "KWC3" });
            return (0, a.bufferToBase64)(t);
          }
          const i = { salt: e, iv: t, hash: r, cipheredContent: n, cryptoConfig: o },
            c = (0, s.convertDashlaneSecureDataFlexibleToTransportableData)(i);
          return (0, a.bufferToBase64)(c);
        };
      async function E(e, t, r, n) {
        const o = n ?? (0, s.getCryptoConfig)(e),
          a = o.derivation;
        if ("noderivation" === a.method) return;
        const i = _(e, o.derivation);
        await r(t, i, a);
      }
      function _(e, t) {
        return (0, s.isCryptoConfigKWC3)(t)
          ? (function (e) {
              if (e.getUserSession().cryptoKwc3FixedSalt) return (0, a.base64ToBuffer)(e.getUserSession().cryptoKwc3FixedSalt);
              const t = (0, u.getRandomValues)(32),
                r = (0, a.bufferToBase64)(t);
              return e.dispatch((0, g.updateCryptoKwc3FixedSalt)(r)), t;
            })(e)
          : (function (e) {
              if (e.getPersonalSettings().CryptoFixedSalt) return (0, a.base64ToBuffer)(e.getPersonalSettings().CryptoFixedSalt);
              const t = (0, u.getRandomValues)(16),
                r = { CryptoFixedSalt: (0, a.bufferToBase64)(t) };
              return e.dispatch((0, m.editPersonalSettings)(r)), t;
            })(e);
      }
      t.prepareCrypto = E;
    },
    827993: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeKWC5DashlaneSecureData = t.generateIV = t.parseDashlaneKw5SecureData = t.convertKw5ToTransportableData = void 0);
      const n = r(655623),
        o = r(316038);
      (t.convertKw5ToTransportableData = (e) => {
        let t = new ArrayBuffer(32);
        if ("KWC5" !== e.version) throw new Error("Version must be KWC5");
        if (null === e.hash) throw new Error("hmacSha2 from DashlaneSecureData is null");
        if (null === e.iv) throw new Error("iv from DashlaneSecureData is null");
        e.iv && (t = (0, o.concatBuffers)(e.iv, (0, n.getRandomValues)(16)));
        const r = (0, o.utf8ToBase64Buffer)(e.version);
        return (0, o.concatBuffers)(t, r, e.hash, e.secured);
      }),
        (t.parseDashlaneKw5SecureData = (e) => {
          if (e.byteLength < 36) throw new Error(`Data length should be at least 36 long but was ${e.byteLength}`);
          let t = 0;
          const r = (0, o.getSubDataByteArray)(e, t, 16).buffer;
          t += 32;
          const n = (0, o.getSubDataByteArray)(e, t, t + 4),
            a = (0, o.uint8ArrayToText)(n);
          if ("KWC5" !== a) throw new Error("Version must be KWC5");
          t += 4;
          const i = (0, o.getSubDataByteArray)(e, t, t + 32).buffer;
          return (t += 32), { iv: r, version: a, hash: i, secured: (0, o.getSubDataByteArray)(e, t, e.byteLength).buffer };
        }),
        (t.generateIV = () => (0, n.getRandomValues)(16)),
        (t.makeKWC5DashlaneSecureData = (e, t, r, n) => ({ version: "KWC5", clearData: e, secured: t, iv: r, hash: n }));
    },
    65675: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PBKDF2_DEFAULT_PAYLOAD =
          t.ARGON2_DEFAULT_PAYLOAD =
          t.KWC3_DEFAULT_PAYLOAD =
          t.getUserCryptoPayload =
          t.getCryptoUserPayload =
          t.getCryptoConfig =
          t.makeFlexibleMarkerCryptoConfig =
          t.makeFlexibleMarkerPbkdf2Config =
          t.makeFlexibleMarkerArgon2dConfig =
          t.makeKWC3CryptoConfig =
          t.convertDashlaneSecureDataFlexibleToTransportableData =
          t.makeFlexibleMarkerPayloadBuffer =
          t.makeFlexibleMarkerPayloadString =
          t.makeFlexibleCryptoConfig =
          t.readCryptoPayload =
          t.parseCipheredData =
          t.getFlexibleSecureData =
          t.getLegacySecureData =
          t.getLegacyMarker =
          t.getLegacyCryptoConfig =
          t.parsePayload =
          t.getSignatureConfig =
          t.getCipheringConfiguration =
          t.getDerivationConfiguration =
          t.getPbkdf2DerivationConfig =
          t.getArgon2DerivationConfig =
          t.extractNextPayloadComponent =
          t.isDashlaneSecureDataFlexible =
          t.isDashlaneSecureDataKWC5 =
          t.isDashlaneSecureDataKWC3 =
          t.DashlaneCipherVersion =
          t.isSupportedAESMode =
          t.isSupportedDerivationMethod =
          t.isCryptoConfigKWC3 =
          t.isNoDerivation =
          t.isArgon2Derivation =
          t.isPbkdf2Derivation =
            void 0);
      const n = r(401067),
        o = r(50415),
        a = r(316038);
      function i(e) {
        return "pbkdf2" === e.method;
      }
      function s(e) {
        return "noderivation" === e.method || "skip" === e.method;
      }
      function c(e) {
        return Boolean(["argon2d", "pbkdf2", "noderivation", "skip"].find((t) => t === e));
      }
      function p(e) {
        return Boolean(["cbchmac", "cbchmac64", "cbc", "gcm"].find((t) => t === e));
      }
      function u(e) {
        return {
          derivation:
            "argon2d" === e
              ? { method: "argon2d", saltLength: 16, t_cost: 3, m_cost: 32768, parallelism: 2 }
              : { method: "pbkdf2", saltLength: 16, iterations: 2e5, hashMethod: "sha256" },
          signature: { method: "hmac" },
          ciphering: { method: "aes256", options: { mode: "cbchmac", ivLength: 16, ivGeneration: { method: "data" } } }
        };
      }
      function d(e) {
        return e.getPersonalSettings().CryptoUserPayload || t.ARGON2_DEFAULT_PAYLOAD;
      }
      (t.isPbkdf2Derivation = i),
        (t.isArgon2Derivation = function (e) {
          return "argon2d" === e.method;
        }),
        (t.isNoDerivation = s),
        (t.isCryptoConfigKWC3 = function (e) {
          return i(e) && 10204 === e.iterations && "sha1" === e.hashMethod;
        }),
        (t.isSupportedDerivationMethod = c),
        (t.isSupportedAESMode = p),
        (t.DashlaneCipherVersion = (0, o.Enum)("KWC3", "KWC5")),
        (t.isDashlaneSecureDataKWC3 = (e) => e.marker === t.DashlaneCipherVersion.KWC3),
        (t.isDashlaneSecureDataKWC5 = (e) => e.marker === t.DashlaneCipherVersion.KWC5),
        (t.isDashlaneSecureDataFlexible = (e) => void 0 !== e.iv),
        (t.extractNextPayloadComponent = (e) => {
          if (null === e) return "";
          let t = e;
          return t.startsWith("$") && (t = t.substring(1, e.length)), t.substring(0, t.indexOf("$"));
        }),
        (t.getArgon2DerivationConfig = (e) => {
          let r = 0;
          const n = {};
          if (
            ((n.saltLength = Number((0, t.extractNextPayloadComponent)(e.substring(r, e.length)))),
            (r += n.saltLength.toString().length + 1),
            (n.t_cost = Number((0, t.extractNextPayloadComponent)(e.substring(r, e.length)))),
            (r += n.t_cost.toString().length + 1),
            (n.m_cost = Number((0, t.extractNextPayloadComponent)(e.substring(r, e.length)))),
            (r += n.m_cost.toString().length + 1),
            (n.parallelism = Number((0, t.extractNextPayloadComponent)(e.substring(r, e.length)))),
            (r += n.parallelism.toString().length + 1),
            isNaN(n.saltLength) ||
              0 === n.saltLength ||
              isNaN(n.t_cost) ||
              0 === n.t_cost ||
              isNaN(n.m_cost) ||
              0 === n.m_cost ||
              isNaN(n.parallelism) ||
              0 === n.parallelism)
          )
            throw new Error("Wrong parameters in payload");
          return n;
        }),
        (t.getPbkdf2DerivationConfig = (e) => {
          let r = 0;
          const n = {};
          if (
            ((n.saltLength = Number((0, t.extractNextPayloadComponent)(e.substring(r, e.length)))),
            (r += n.saltLength.toString().length + 1),
            (n.iterations = Number((0, t.extractNextPayloadComponent)(e.substring(r, e.length)))),
            (r += n.iterations.toString().length + 1),
            (n.hashMethod = String((0, t.extractNextPayloadComponent)(e.substring(r, e.length)))),
            (r += n.hashMethod.length + 1),
            isNaN(n.saltLength) || isNaN(n.iterations))
          )
            throw new Error("Wrong parameters in payload");
          return n;
        }),
        (t.getDerivationConfiguration = (e) => {
          let r = 0,
            n = {};
          const o = String((0, t.extractNextPayloadComponent)(e.substring(r, e.length)));
          if (!c(o)) throw new Error("Derivation method not supported");
          if (((n.method = o), "noderivation" === o || "skip" === o)) return n;
          if (((r += n.method.length + 1), "argon2d" === n.method)) {
            const o = (0, t.getArgon2DerivationConfig)(e.substring(r, e.length));
            n = { ...n, ...o };
          }
          if ("pbkdf2" === n.method) {
            const o = (0, t.getPbkdf2DerivationConfig)(e.substring(r, e.length));
            n = { ...n, ...o };
          }
          return n;
        }),
        (t.getCipheringConfiguration = (e) => {
          const r = { options: {} };
          let n = 0;
          if (
            ((r.method = String((0, t.extractNextPayloadComponent)(e.substring(n, e.length)))),
            (n += r.method.length + 1),
            "aes256" !== r.method)
          )
            throw new Error(`[getCipheringConfiguration]: Wrong ciphering method expected "aes256" but get ${r.method}`);
          {
            const o = String((0, t.extractNextPayloadComponent)(e.substring(n, e.length)));
            if (!p(o)) throw new Error("[getCipheringConfiguration]: unsupported AES mode");
            if (
              ((r.options.mode = o),
              (n += r.options.mode.length + 1),
              (r.options.ivLength = Number((0, t.extractNextPayloadComponent)(e.substring(n, e.length)))),
              isNaN(r.options.ivLength) || 0 === r.options.ivLength)
            )
              throw new Error("[getCipheringConfiguration]: Wrong parameters in payload");
          }
          return r;
        }),
        (t.getSignatureConfig = (e) => {
          const t = { method: "skip" };
          return "cbchmac" === e && (t.method = "hmac"), "cbchmac64" === e && (t.method = "hmac64"), t;
        }),
        (t.parsePayload = (e) => {
          if (null === e) throw new Error("parsePayload: No payload to parse");
          if (e.startsWith("$")) {
            let r = 0;
            const o = Number((0, t.extractNextPayloadComponent)(e.substring(r, e.length)));
            if (1 !== o) throw new Error(`parsePayload: version should be 1 but is ${o}`);
            r += o.toString().length + 1;
            const a = (0, t.getDerivationConfiguration)(e.substring(r, e.length)),
              i = (0, n.reduce)((e, t) => e + (`${t}`.length + 1));
            r = i(r, (0, n.values)(a));
            const s = (0, t.getCipheringConfiguration)(e.substring(r, e.length));
            (r += String(s.method).length + 1), (r = i(r, (0, n.values)(s.options)));
            const c = { method: "data" };
            return {
              cryptoConfig: {
                derivation: a,
                signature: (0, t.getSignatureConfig)(s.options.mode),
                ciphering: { method: s.method, options: { ...s.options, ivGeneration: c } }
              },
              payloadLength: r + 1
            };
          }
          throw new Error("parsePayload: Unable to parse payload");
        }),
        (t.getLegacyCryptoConfig = (e) => {
          if ("KWC3" === e)
            return {
              derivation: { method: "pbkdf2", saltLength: 32, iterations: 10204, hashMethod: "sha1" },
              signature: { method: "skip" },
              ciphering: { method: "aes256", options: { mode: "cbc", ivLength: 16, ivGeneration: { method: "evpByteToKey" } } }
            };
          if ("KWC5" === e)
            return {
              derivation: { method: "skip" },
              signature: { method: "hmac" },
              ciphering: { method: "aes256", options: { mode: "cbchmac", ivLength: 16, ivGeneration: { method: "data" } } }
            };
          throw new Error("Wrong marker");
        }),
        (t.getLegacyMarker = (e) => {
          const r = (0, a.getSubDataByteArray)(e, 32, 36),
            n = (0, a.uint8ArrayToText)(r);
          return n === t.DashlaneCipherVersion.KWC3 || n === t.DashlaneCipherVersion.KWC5 ? n : null;
        }),
        (t.getLegacySecureData = (e, r) => {
          if (e === t.DashlaneCipherVersion.KWC3)
            return {
              marker: e,
              salt: (0, a.getSubDataByteArray)(r, 0, 32).buffer,
              cipheredContent: (0, a.getSubDataByteArray)(r, 36, r.byteLength).buffer,
              cryptoConfig: (0, t.getLegacyCryptoConfig)(e)
            };
          if (e === t.DashlaneCipherVersion.KWC5) {
            const n = 16,
              o = 32;
            return {
              marker: e,
              iv: (0, a.getSubDataByteArray)(r, 0, n).buffer,
              hash: (0, a.getSubDataByteArray)(r, 36, 36 + o).buffer,
              cipheredContent: (0, a.getSubDataByteArray)(r, 36 + o, r.byteLength).buffer,
              cryptoConfig: (0, t.getLegacyCryptoConfig)(e)
            };
          }
          throw new Error("Wrong marker");
        }),
        (t.getFlexibleSecureData = (e) => {
          const r = (0, a.uint8ArrayToText)(e),
            { cryptoConfig: n, payloadLength: o } = (0, t.parsePayload)(r);
          let i = o;
          const c = s(n.derivation) ? 0 : n.derivation.saltLength,
            p = n.ciphering.options.ivLength,
            u = (0, a.getSubDataByteArray)(e, i, i + c).buffer;
          i += c;
          const d = (0, a.getSubDataByteArray)(e, i, i + p).buffer;
          i += p;
          const l = (0, a.getSubDataByteArray)(e, i, i + 32).buffer;
          return (
            (i += 32), { salt: u, iv: d, hash: l, cipheredContent: (0, a.getSubDataByteArray)(e, i, e.length).buffer, cryptoConfig: n }
          );
        }),
        (t.parseCipheredData = (e) => {
          const r = (0, t.getLegacyMarker)(e);
          if (r) return (0, t.getLegacySecureData)(r, e);
          if ("$" === (0, a.uint8ArrayToText)((0, a.getSubDataByteArray)(e, 0, 1))) return (0, t.getFlexibleSecureData)(e);
          throw new Error("Unable to parse ciphered data");
        }),
        (t.readCryptoPayload = (e) => {
          const r = (0, a.base64ToBuffer)(e),
            n = new Uint8Array(r),
            o = (0, t.getLegacyMarker)(n);
          if (o) return o;
          const i = (0, a.uint8ArrayToText)(n),
            { payloadLength: s } = (0, t.parsePayload)(i);
          return i.substr(0, s);
        }),
        (t.makeFlexibleCryptoConfig = (e) => e.cryptoConfig),
        (t.makeFlexibleMarkerPayloadString = (e) => {
          let t = "$1";
          const r = (0, n.reduce)((e, t) => ("string" == typeof t || "number" == typeof t ? e + `$${String(t)}` : e));
          return (
            (t = r(t, (0, n.values)(e.derivation))),
            (t = r(t, [e.ciphering.method])),
            (t = r(t, (0, n.values)((0, n.omit)(["ivGeneration"], e.ciphering.options)))),
            (t += "$"),
            t
          );
        }),
        (t.makeFlexibleMarkerPayloadBuffer = (e) => {
          const r = (0, t.makeFlexibleMarkerPayloadString)(e);
          return (0, a.str2ab)(r);
        }),
        (t.convertDashlaneSecureDataFlexibleToTransportableData = (e) => {
          const { cipheredContent: r, cryptoConfig: n, hash: o, iv: i, salt: c } = e,
            p = (0, t.makeFlexibleMarkerPayloadBuffer)(n);
          return s(n.derivation) ? (0, a.concatBuffers)(p, i, o, r) : (0, a.concatBuffers)(p, c, i, o, r);
        }),
        (t.makeKWC3CryptoConfig = function () {
          return {
            derivation: { method: "pbkdf2", saltLength: 32, iterations: 10204, hashMethod: "sha1" },
            signature: { method: "skip" },
            ciphering: { method: "aes256", options: { mode: "cbc", ivLength: 16, ivGeneration: { method: "evpByteToKey" } } }
          };
        }),
        (t.makeFlexibleMarkerArgon2dConfig = function () {
          return { method: "argon2d", saltLength: 16, t_cost: 3, m_cost: 32768, parallelism: 2 };
        }),
        (t.makeFlexibleMarkerPbkdf2Config = function () {
          return { method: "pbkdf2", saltLength: 16, iterations: 2e5, hashMethod: "sha256" };
        }),
        (t.makeFlexibleMarkerCryptoConfig = u),
        (t.getCryptoConfig = function (e) {
          const r = d(e);
          return (0, n.isNil)(r)
            ? u("argon2d")
            : "KWC3" === r
            ? {
                derivation: { method: "pbkdf2", saltLength: 32, iterations: 10204, hashMethod: "sha1" },
                signature: { method: "skip" },
                ciphering: { method: "aes256", options: { mode: "cbc", ivLength: 16, ivGeneration: { method: "evpByteToKey" } } }
              }
            : (0, t.parsePayload)(r).cryptoConfig;
        }),
        (t.getCryptoUserPayload = d),
        (t.getUserCryptoPayload = (e) => {
          if ("pbkdf2_kwc3" === e) return { CryptoUserPayload: t.KWC3_DEFAULT_PAYLOAD };
          const r = "argon2" === e ? "argon2d" : "pbkdf2";
          return { CryptoUserPayload: (0, n.compose)(a.base64BufferToUtf8, t.makeFlexibleMarkerPayloadBuffer, u)(r) };
        }),
        (t.KWC3_DEFAULT_PAYLOAD = "KWC3"),
        (t.ARGON2_DEFAULT_PAYLOAD = "$1$argon2d$16$3$32768$2$aes256$cbchmac$16$"),
        (t.PBKDF2_DEFAULT_PAYLOAD = "$1$pbkdf2$16$200000$sha256$aes256$cbchmac$16$");
    },
    415215: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeCanonicalRequest = void 0);
      const n = r(401067);
      t.makeCanonicalRequest = (e) => {
        const t = (e) => e.toLowerCase(),
          r = o(e.headers),
          a = e.headersToSign ? n.pick(n.map(t, n.values(e.headersToSign)), n.mapObjIndexed(t, r)) : r,
          u = i(e.uri),
          d = s(e.query),
          l = c(a),
          y = p(a);
        return { canonicalRequest: [e.method, u, d, l, y, e.hashedPayload].join("\n"), signedHeaders: y };
      };
      const o = (e) =>
          n.pipe(
            n.toPairs,
            n.map(([e, t]) => [e.toLowerCase(), t]),
            u
          )(e),
        a = (e) => e.replace(/[^A-Za-z0-9_.~\-]/g, (e) => "%" + e.charCodeAt(0).toString(16).toUpperCase()),
        i = (e) =>
          ((e) =>
            e
              .split("/")
              .map((e) => a(e))
              .join("/"))(e),
        s = (e) =>
          n.pipe(
            (e) => n.toPairs(e),
            n.sortBy((e) => e[0]),
            n.map(([e, t]) =>
              ((e, t) => {
                const r = a(e),
                  o = Array.isArray(t) ? t : [t];
                return n.pipe(
                  n.map((e) => a(e)),
                  n.map((e) => [r, e]),
                  n.sortBy(n.reduce(n.concat, ""))
                )(o);
              })(e, t)
            ),
            n.unnest,
            n.map(([e, t]) => `${e}=${t}`),
            n.join("&")
          )(e),
        c = (e) =>
          n.pipe(
            (e) => n.toPairs(e),
            n.sortBy((e) => e[0].toLowerCase()),
            n.map(([e, t]) => ((e, t) => e.toLowerCase() + ":" + t.trim().replace(/\s+/g, " ") + "\n")(e, t)),
            n.join("")
          )(e),
        p = (e) =>
          n.pipe(
            n.keys,
            n.map((e) => e.toLowerCase()),
            n.sortBy(n.identity),
            n.join(";")
          )(e),
        u = (e) => {
          const t = {};
          for (let r = 0; r < e.length; ++r) t[e[r][0]] = e[r][1];
          return t;
        };
    },
    151907: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getApiCredentials = void 0);
      const n = r(656915),
        o = r(17825),
        a = r(145956);
      t.getApiCredentials = function (e, t) {
        if (t.authenticationType === a.ApiAuthType.None) return { type: t.authenticationType };
        const r = { appKeys: (0, n.appKeysSelector)(e) };
        switch (t.authenticationType) {
          case a.ApiAuthType.App:
            return { type: a.ApiAuthType.App, ...r };
          case a.ApiAuthType.UserDevice:
            return { type: a.ApiAuthType.UserDevice, ...r, login: t.login, deviceKeys: (0, n.deviceKeysSelector)(e) };
          case a.ApiAuthType.Session:
            return {
              type: a.ApiAuthType.Session,
              ...r,
              login: t.login,
              sessionKeys: (0, n.sessionKeysSelector)(e),
              deviceId: (0, n.getDeviceIdSelector)(e, t.login)
            };
          case a.ApiAuthType.TeamDevice:
            return { type: a.ApiAuthType.TeamDevice, ...r, teamUuid: t.teamUuid, deviceKeys: (0, n.deviceKeysSelector)(e) };
          default:
            (0, o.assertUnreachable)(t.authenticationType);
        }
      };
    },
    590338: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.prepareApiEndpoint = void 0);
      const n = r(145956),
        o = r(755730);
      t.prepareApiEndpoint = function (e) {
        const { authenticationType: t, endpoint: r, group: a, method: i, version: s, accept: c, responseType: p } = e,
          u = `/${n.ApiVersion[s]}/${a}/${r}`;
        return (0, o.getMakeApiRequest)(u, t, i, p ?? "json", c);
      };
    },
    227054: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeSafeDeviceName = t.makeSafeLanguage = t.makeSafeCountry = void 0);
      t.makeSafeCountry = function (e) {
        return !e || e.length < 2 || e.length > 5 ? "ZZ" : e;
      };
      t.makeSafeLanguage = function (e) {
        return !e || e.length < 2 || e.length > 5 ? "und" : e;
      };
      t.makeSafeDeviceName = function (e) {
        return e || "Device";
      };
    },
    602978: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getCode = void 0);
      const n = r(145956);
      t.getCode = (e, t) => {
        const r = t.indexOf(e);
        return r < 0 ? n.UnknownError : t[r];
      };
    },
    684101: function (e, t, r) {
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, n, o);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), o(r(227054), t), o(r(985188), t), o(r(602978), t);
    },
    985188: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isExtraDeviceTokenValid = t.isEmailTokenValid = void 0),
        (t.isEmailTokenValid = function (e) {
          return /^\d{6}$/.test(e);
        }),
        (t.isExtraDeviceTokenValid = function (e) {
          return /^[A-Za-z0-9+/]{64}$/.test(e);
        });
    },
    46298: function (e, t, r) {
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, n, o);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.UnknownError = t.isApiErrorOfType = t.isApiError = void 0);
      var a = r(145956);
      Object.defineProperty(t, "isApiError", {
        enumerable: !0,
        get: function () {
          return a.isApiError;
        }
      }),
        Object.defineProperty(t, "isApiErrorOfType", {
          enumerable: !0,
          get: function () {
            return a.isApiErrorOfType;
          }
        }),
        Object.defineProperty(t, "UnknownError", {
          enumerable: !0,
          get: function () {
            return a.UnknownError;
          }
        }),
        o(r(591503), t),
        o(r(684101), t);
    },
    755730: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getApiClientAgentHeader =
          t.validateStatus =
          t.makeApiResponse =
          t.getMethodParams =
          t.getAuthParams =
          t.getMakeApiRequest =
            void 0);
      const n = r(500053),
        o = r(17825),
        a = r(786056),
        i = r(314656),
        s = r(656915),
        c = r(145956),
        p = r(878577),
        u = r(151907),
        d = r(348749),
        l = r(545800);
      function y(e, { login: t, teamUuid: r }) {
        switch (e) {
          case c.ApiAuthType.App:
          case c.ApiAuthType.None:
            return { authenticationType: e };
          case c.ApiAuthType.UserDevice:
          case c.ApiAuthType.Session:
            return { authenticationType: e, login: t };
          case c.ApiAuthType.TeamDevice:
            return { authenticationType: e, teamUuid: r };
          default:
            (0, o.assertUnreachable)(e);
        }
      }
      function g(e, t) {
        switch (e) {
          case c.ApiRequestMethod.GET:
            return { method: e };
          case c.ApiRequestMethod.POST:
            return { method: e, payload: t };
          default:
            (0, o.assertUnreachable)(e);
        }
      }
      function m(e) {
        const t = (function ({ errors: e }) {
          return Array.isArray(e) && e.length > 0 ? e[0] : null;
        })(e);
        return (
          t ||
          (function (e) {
            return { code: "success", data: e.data ? null : e, ...e.data };
          })(e)
        );
      }
      function h(e) {
        return JSON.stringify({
          platform: e.platformName || "unknown",
          version: e.appVersion || "unknown",
          osversion: e.osVersion || "unknown",
          language: e.lang || "unknown"
        });
      }
      (t.getMakeApiRequest = function (e, r, f, S, T) {
        return async (A, v) => {
          const E = { login: "", teamUuid: "", payload: {}, ...(v || {}) },
            _ = g(f, E.payload),
            b = y(r, { login: E.login, teamUuid: E.teamUuid }),
            C = (0, u.getApiCredentials)(A.getState(), b),
            D = {
              Accept: T ?? "application/json",
              "Content-Type": "application/json; charset=UTF-8",
              "dashlane-client-agent": h((0, a.getPlatformInfo)())
            },
            P = { ...D, Host: new URL(d.config.DASHLANE_API_HOST_WITH_SCHEME).hostname },
            O = await (async function (e, t, r, a, i) {
              if (r.type === c.ApiAuthType.None) return {};
              const u = (0, s.dashlaneServerDeltaTimestampSelector)(e.getState()) || 0,
                d = Math.round((0, n.getUnixTimestamp)() - u),
                l = (function (e) {
                  switch (e.method) {
                    case c.ApiRequestMethod.GET:
                      return "";
                    case c.ApiRequestMethod.POST:
                      return JSON.stringify(e.payload);
                    default:
                      (0, o.assertUnreachable)(e);
                  }
                })(i),
                { method: y } = i,
                g = { pathname: t, method: y, rawBody: l, headers: a };
              return { Authorization: await (0, p.signRequest)({ request: g, timestamp: d, credentials: r }) };
            })(A, e, C, P, _),
            k = { ...D, ...O, ...(0, l.getCloudflareHeaders)() },
            w = `${d.config.DASHLANE_API_HOST_WITH_SCHEME}${e}`,
            { data: M } = await (function (e, r, n, a) {
              const s = { headers: n, validateStatus: t.validateStatus, responseType: a };
              switch (e.method) {
                case c.ApiRequestMethod.GET:
                  return (0, i.get)(r, s);
                case c.ApiRequestMethod.POST:
                  return (0, i.post)(r, e.payload, s);
                default:
                  (0, o.assertUnreachable)(e);
              }
            })(_, w, k, S);
          return m(M);
        };
      }),
        (t.getAuthParams = y),
        (t.getMethodParams = g),
        (t.makeApiResponse = m),
        (t.validateStatus = (e) => e >= 100 && e <= 500),
        (t.getApiClientAgentHeader = h);
    },
    241075: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getAndEvaluateForUser = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.abtesting,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "GetAndEvaluateForUser"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.getAndEvaluateForUser = async function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    461394: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deactivateAccountRecoveryKey = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.accountRecovery,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "Deactivate"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.deactivateAccountRecoveryKey = function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    514651: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.accountInfo = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.account,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "AccountInfo"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.accountInfo = async function (e, t) {
        return i(e, { login: t, payload: {} });
      };
    },
    945468: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.createUserWithSSO = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          authenticationType: o.ApiAuthType.App,
          endpoint: "CreateUserWithSSO",
          group: o.ApiEndpointGroups.account,
          method: o.ApiRequestMethod.POST,
          version: o.ApiVersion.v1
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.createUserWithSSO = async function (e, t) {
        return i(e, { payload: t });
      };
    },
    755710: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.createUser = t.MissingContactPhone = void 0);
      const n = r(590338),
        o = r(145956);
      t.MissingContactPhone = "missing_contact_phone";
      const a = {
          group: o.ApiEndpointGroups.account,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.App,
          endpoint: "CreateUser"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.createUser = async function (e, t) {
        return i(e, { payload: t });
      };
    },
    925011: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getPremiumStatus = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.premium,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "GetPremiumStatus"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.getPremiumStatus = function (e, t) {
        return i(e, { login: t, payload: {} }).then((e) => e);
      };
    },
    31375: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getSubscriptionInformation = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.premium,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "GetSubscriptionInfo"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.getSubscriptionInformation = function (e, t) {
        return i(e, { login: t, payload: {} }).then((e) => e);
      };
    },
    297421: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.requestAccountCreation = t.AccountExistsStatus = void 0);
      const n = r(590338),
        o = r(145956);
      !(function (e) {
        (e.AccountExists = "yes"),
          (e.AccountDoesntExist = "no"),
          (e.AccountDoesntExistInvalid = "no_invalid"),
          (e.AccountDoesntExistUnlikely = "no_unlikely");
      })(t.AccountExistsStatus || (t.AccountExistsStatus = {}));
      const a = {
          group: o.ApiEndpointGroups.account,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.App,
          endpoint: "RequestAccountCreation"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.requestAccountCreation = function (e, t) {
        return i(e, { payload: t });
      };
    },
    863339: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.updateContactInfo = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.account,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "UpdateContactInfo"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.updateContactInfo = async function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    634957: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ExistingSecureRemembermeSession =
          t.MismatchedSessionSecurity =
          t.SessionNotFound =
          t.AuthenticatorNotAvailableOnDevice =
          t.AuthenticationTypeNotSupported =
          t.AuthenticatorNotRegistered =
          t.AssertionRejected =
          t.AttestationRejected =
          t.ChallengeVerificationFailed =
          t.ChallengeExpired =
          t.ChallengeNotFound =
          t.InvalidAuthentication =
          t.TwofaEmailTokenNotEnabled =
          t.UserHasNoActiveAuthenticator =
          t.FailedToContactAuthenticatorDevice =
          t.VerificationMethodDisabled =
          t.VerificationFailed =
          t.ClientVersionDoesNotSupportSSOMigration =
          t.TeamGenericError =
          t.SSOBlocked =
          t.UserNotFound =
          t.U2fBadRequest =
          t.InvalidOTPBlocked =
          t.InvalidOTPAlreadyUsed =
          t.DeviceNotFound =
          t.DeviceDeactivated =
            void 0),
        (t.DeviceDeactivated = "device_deactivated"),
        (t.DeviceNotFound = "device_not_found"),
        (t.InvalidOTPAlreadyUsed = "invalid_otp_already_used"),
        (t.InvalidOTPBlocked = "invalid_otp_blocked"),
        (t.U2fBadRequest = "u2f_bad_request"),
        (t.UserNotFound = "user_not_found"),
        (t.SSOBlocked = "SSO_BLOCKED"),
        (t.TeamGenericError = "TEAM_GENERIC_ERROR"),
        (t.ClientVersionDoesNotSupportSSOMigration = "CLIENT_VERSION_DOES_NOT_SUPPORT_SSO_MIGRATION"),
        (t.VerificationFailed = "verification_failed"),
        (t.VerificationMethodDisabled = "verification_method_disabled"),
        (t.FailedToContactAuthenticatorDevice = "FAILED_TO_CONTACT_AUTHENTICATOR_DEVICE"),
        (t.UserHasNoActiveAuthenticator = "USER_HAS_NO_ACTIVE_AUTHENTICATOR"),
        (t.TwofaEmailTokenNotEnabled = "TWOFA_EMAIL_TOKEN_NOT_ENABLED"),
        (t.InvalidAuthentication = "invalid_authentication"),
        (t.ChallengeNotFound = "CHALLENGE_NOT_FOUND"),
        (t.ChallengeExpired = "CHALLENGE_EXPIRED"),
        (t.ChallengeVerificationFailed = "CHALLENGE_VERIFICATION_FAILED"),
        (t.AttestationRejected = "ATTESTATION_REJECTED"),
        (t.AssertionRejected = "ASSERTION_REJECTED"),
        (t.AuthenticatorNotRegistered = "AUTHENTICATOR_NOT_REGISTERED"),
        (t.AuthenticationTypeNotSupported = "AUTHENTICATION_TYPE_NOT_SUPPORTED"),
        (t.AuthenticatorNotAvailableOnDevice = "AUTHENTICATOR_NOT_AVAILABLE_ON_DEVICE"),
        (t.SessionNotFound = "SESSION_NOT_FOUND"),
        (t.MismatchedSessionSecurity = "MISMATCHED_SESSION_SECURITY"),
        (t.ExistingSecureRemembermeSession = "EXISTING_SECURE_REMEMBERME_SESSION");
    },
    208124: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.completeDeviceRegistrationWithAuthTicket = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.authentication,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.App,
          endpoint: "CompleteDeviceRegistrationWithAuthTicket"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.completeDeviceRegistrationWithAuthTicket = async function (e, t) {
        return i(e, { payload: t });
      };
    },
    467747: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.completeExtraDeviceRegistrationWithToken = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.authentication,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.App,
          endpoint: "CompleteExtraDeviceRegistrationWithToken"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.completeExtraDeviceRegistrationWithToken = async function (e, t) {
        return i(e, { payload: t });
      };
    },
    462712: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.completeLoginWithAuthTicket = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          authenticationType: n.ApiAuthType.App,
          endpoint: "CompleteLoginWithAuthTicket",
          group: n.ApiEndpointGroups.authentication,
          method: n.ApiRequestMethod.POST,
          version: n.ApiVersion.v1
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.completeLoginWithAuthTicket = async function (e, t) {
        return i(e, { payload: t });
      };
    },
    613271: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.completeRememberMeOpenSession = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.authentication,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.Session,
          endpoint: "CompleteRememberMeOpenSession"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.completeRememberMeOpenSession = async function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    251837: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.completeRememberMeRegistration = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.authentication,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "CompleteRememberMeRegistration"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.completeRememberMeRegistration = async function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    434569: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.completeTotpActivation = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "CompleteTOTPActivation",
          group: n.ApiEndpointGroups.authentication,
          method: n.ApiRequestMethod.POST,
          version: n.ApiVersion.v1
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.completeTotpActivation = async function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    663619: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.completeWebAuthnAuthenticatorRegistration = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.authentication,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "CompleteWebAuthnAuthenticatorRegistration"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.completeWebAuthnAuthenticatorRegistration = async function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    908111: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deactivateRememberMe = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.authentication,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "DeactivateRememberMe"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.deactivateRememberMe = async function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    939446: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deactivateTotpVerification = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "DeactivateTOTP",
          group: n.ApiEndpointGroups.authentication,
          method: n.ApiRequestMethod.POST,
          version: n.ApiVersion.v1
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.deactivateTotpVerification = async function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    447442: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deactivateWebAuthnAuthenticator = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.authentication,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "DeactivateWebAuthnAuthenticator"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.deactivateWebAuthnAuthenticator = async function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    815152: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getAuthenticationMethodsForDevice = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.authentication,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.App,
          endpoint: "GetAuthenticationMethodsForDevice"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.getAuthenticationMethodsForDevice = async function (e, t) {
        return i(e, { payload: t });
      };
    },
    713328: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getAuthenticationMethodsForLogin = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.authentication,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.App,
          endpoint: "GetAuthenticationMethodsForLogin"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.getAuthenticationMethodsForLogin = async function (e, t) {
        return i(e, { payload: t });
      };
    },
    432924: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getAuthenticationTokenForCardUpdate = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.authentication,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "CreateTokenExtAuth"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.getAuthenticationTokenForCardUpdate = function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    460132: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getAvailableWebAuthnAuthenticators = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.authentication,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.Session,
          endpoint: "GetAvailableWebAuthnAuthenticators"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.getAvailableWebAuthnAuthenticators = async function (e, t) {
        return i(e, { login: t, payload: {} });
      };
    },
    912407: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getMasterPasswordCipheringKey = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.authentication,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.Session,
          endpoint: "GetMasterPasswordCipheringKey"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.getMasterPasswordCipheringKey = async function (e, t) {
        return i(e, { login: t, payload: {} });
      };
    },
    156736: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getTokens = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.authentication,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.GET,
          authenticationType: o.ApiAuthType.App,
          endpoint: "GetTokens"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.getTokens = async function (e) {
        return i(e);
      };
    },
    580585: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getTwoFactorAuthenticationStatus = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.authentication,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "Get2FAStatus"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.getTwoFactorAuthenticationStatus = function (e, t) {
        return i(e, { login: t, payload: {} });
      };
    },
    606862: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getU2FDevices = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "GetU2FDevices",
          group: n.ApiEndpointGroups.authentication,
          method: n.ApiRequestMethod.POST,
          version: n.ApiVersion.v1
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.getU2FDevices = async function (e, t) {
        return i(e, { login: t, payload: {} });
      };
    },
    348974: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getUnauthorizedProfiles = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.authentication,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.App,
          endpoint: "GetUnauthorizedProfiles"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.getUnauthorizedProfiles = async function (e, t) {
        return i(e, { payload: t });
      };
    },
    297343: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getUserSSOInfo = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.authentication,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.TeamDevice,
          endpoint: "GetUserSSOInfo"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.getUserSSOInfo = async function (e, t) {
        const { login: r, teamUuid: n, userServiceProviderKey: o } = t;
        return i(e, { login: r, teamUuid: n, payload: { login: r, userServiceProviderKey: o } });
      };
    },
    99850: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getWebAuthnAuthenticators = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.authentication,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "GetWebAuthnAuthenticators"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.getWebAuthnAuthenticators = async function (e, t) {
        return i(e, { login: t, payload: {} });
      };
    },
    643339: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.initRememberMasterPassword = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.authentication,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "InitRememberMasterPassword"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.initRememberMasterPassword = async function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    71336: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.performDashlaneAuthenticatorVerification = t.verificationTimeoutError = void 0);
      const n = r(359821),
        o = r(145956),
        a = r(590338);
      t.verificationTimeoutError = {
        code: n.VerificationTimeout,
        message: "The authentication request has timed out",
        type: n.BusinessError
      };
      const i = {
          authenticationType: o.ApiAuthType.App,
          endpoint: "PerformDashlaneAuthenticatorVerification",
          group: o.ApiEndpointGroups.authentication,
          method: o.ApiRequestMethod.POST,
          version: o.ApiVersion.v1
        },
        s = (0, a.prepareApiEndpoint)(i);
      t.performDashlaneAuthenticatorVerification = async function (e, t) {
        return s(e, { payload: t });
      };
    },
    787992: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.performDuoPushVerification = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          authenticationType: n.ApiAuthType.App,
          endpoint: "PerformDuoPushVerification",
          group: n.ApiEndpointGroups.authentication,
          method: n.ApiRequestMethod.POST,
          version: n.ApiVersion.v1
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.performDuoPushVerification = async function (e, t) {
        return i(e, { payload: t });
      };
    },
    904685: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.performEmailTokenVerification = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          authenticationType: n.ApiAuthType.App,
          endpoint: "PerformEmailTokenVerification",
          group: n.ApiEndpointGroups.authentication,
          method: n.ApiRequestMethod.POST,
          version: n.ApiVersion.v1
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.performEmailTokenVerification = async function (e, t) {
        return i(e, { payload: t });
      };
    },
    278876: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.performSsoVerification = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          authenticationType: n.ApiAuthType.App,
          endpoint: "PerformSsoVerification",
          group: n.ApiEndpointGroups.authentication,
          method: n.ApiRequestMethod.POST,
          version: n.ApiVersion.v1
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.performSsoVerification = async function (e, t) {
        return i(e, { payload: t });
      };
    },
    896425: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.performTotpVerification = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          authenticationType: n.ApiAuthType.App,
          endpoint: "PerformTotpVerification",
          group: n.ApiEndpointGroups.authentication,
          method: n.ApiRequestMethod.POST,
          version: n.ApiVersion.v1
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.performTotpVerification = async function (e, t) {
        return i(e, { payload: t });
      };
    },
    199289: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.performU2FVerification = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          authenticationType: n.ApiAuthType.App,
          endpoint: "PerformU2FVerification",
          group: n.ApiEndpointGroups.authentication,
          method: n.ApiRequestMethod.POST,
          version: n.ApiVersion.v1
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.performU2FVerification = async function (e, t) {
        return i(e, { payload: t });
      };
    },
    910954: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.requestEmailTokenVerification = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.authentication,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.App,
          endpoint: "RequestEmailTokenVerification"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.requestEmailTokenVerification = async function (e, t) {
        return i(e, { payload: t });
      };
    },
    658539: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.requestExternalDeviceRegistration = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.authentication,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.App,
          endpoint: "RequestExternalDeviceRegistration"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.requestExternalDeviceRegistration = async function (e, t) {
        return i(e, { payload: t });
      };
    },
    501371: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.requestExtraDeviceRegistration = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.authentication,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "RequestExtraDeviceRegistration"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.requestExtraDeviceRegistration = async function (e, t) {
        return i(e, { login: t, payload: { tokenType: "shortLived" } });
      };
    },
    851296: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.requestTOTPActivation = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "RequestTOTPActivation",
          group: n.ApiEndpointGroups.authentication,
          method: n.ApiRequestMethod.POST,
          version: n.ApiVersion.v1
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.requestTOTPActivation = async function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    248253: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.removeU2FAuthenticator = t.U2FAuthenticatorRemovalBusinessErrors = void 0);
      const n = r(590338),
        o = r(145956);
      !(function (e) {
        (e.VERIFICATION_METHOD_INVALID = "verification_method_invalid"),
          (e.INVALID_AUTH_TICKET = "invalid_auth_ticket"),
          (e.NO_KEYHANDLE_FOUND = "NO_KEYHANDLE_FOUND");
      })(t.U2FAuthenticatorRemovalBusinessErrors || (t.U2FAuthenticatorRemovalBusinessErrors = {}));
      const a = {
          group: o.ApiEndpointGroups.authentication,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "DeactivateU2FDevice"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.removeU2FAuthenticator = async function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    248730: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.requestWebauthnOpenSession = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.authentication,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.Session,
          endpoint: "RequestWebauthnOpenSession"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.requestWebauthnOpenSession = async function (e, t) {
        return i(e, { login: t, payload: {} });
      };
    },
    424925: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.requestWebauthnRegistration = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.authentication,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "RequestWebauthnRegistration"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.requestWebauthnRegistration = async function (e, t) {
        return i(e, { login: t, payload: {} });
      };
    },
    631197: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.addPrivateBreach = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.dataleakQA,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.App,
          endpoint: "AddTestLeak"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.addPrivateBreach = async function (e, t) {
        return i(e, { payload: { ...t } });
      };
    },
    377074: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.createOrUpdateDarkWebBreach = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.dataleakQA,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.App,
          endpoint: "SetTestDataBreach"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.createOrUpdateDarkWebBreach = async function (e, t) {
        return i(e, { payload: { ...t } });
      };
    },
    472579: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.createPublicBreach = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.breachesQA,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.App,
          endpoint: "CreateTestBreach"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.createPublicBreach = async function (e, t) {
        return i(e, { payload: t });
      };
    },
    682512: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getDarkWebInsightReport = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.teams,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "GetDarkWebInsightsReportDetails"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.getDarkWebInsightReport = async function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    319667: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getDarkWebInsightsSummaryRequest = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.teams,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "GetDarkWebInsightsSummary"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.getDarkWebInsightsSummaryRequest = async function (e, t) {
        return i(e, { login: t, payload: {} });
      };
    },
    891063: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.deactivateDevices = t.CLIENT_STILL_OVERFLOWING = t.PAIRING_GROUPS_NOT_FOUND = t.CLIENT_DEVICES_NOT_FOUND = void 0);
      const n = r(145956),
        o = r(590338);
      (t.CLIENT_DEVICES_NOT_FOUND = "CLIENT_DEVICES_NOT_FOUND"),
        (t.PAIRING_GROUPS_NOT_FOUND = "PAIRING_GROUPS_NOT_FOUND"),
        (t.CLIENT_STILL_OVERFLOWING = "CLIENT_STILL_OVERFLOWING");
      const a = {
          group: n.ApiEndpointGroups.devices,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "DeactivateDevices"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.deactivateDevices = async function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    218625: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listDevices = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.devices,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "ListDevices"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.listDevices = async function (e, t) {
        return i(e, { login: t, payload: {} });
      };
    },
    359821: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.InvalidTeamDeviceLogin =
          t.BasicConfigNotFound =
          t.DeactivatedTeamDevice =
          t.DeviceKeyNotFound =
          t.DeviceAccountMappingAlreadyExists =
          t.B2bSsoUserNotFound =
          t.NoFreeSlot =
          t.NotProposedNeitherAccepted =
          t.InvalidSsoToken =
          t.InvalidUser =
          t.DomainNotValidForTeam =
          t.TotpActiveOrNotSeeded =
          t.ConfigurationNotFound =
          t.TeamDeviceEncryptedConfigNotFound =
          t.InvalidTOTPStatus =
          t.VerificationMethodInvalid =
          t.InvalidAuthTicket =
          t.WrongPublicKey =
          t.VerificationTimeout =
          t.VerificationRequiresRequest =
          t.VerificationFailedTooManyTimes =
          t.UpdateOfVerificationMethodNotSupported =
          t.UnexpectedError =
          t.UnchangedPrivateKey =
          t.TwofaSettingSameAsCurrent =
          t.TwofaServerKeyProvidedIncorrectly =
          t.TwofaServerKeyNotProvided =
          t.TeamDoesNotExist =
          t.TemporaryDisabled =
          t.NoMpEncryptionKey =
          t.NotAdmin =
          t.NoSharingKeys =
          t.NothingToUpdate =
          t.NoExternalToken =
          t.MissingSettingsTransaction =
          t.InvalidSessionAccessKey =
          t.InvalidKey =
          t.InsufficientTier =
          t.ExternalTokenSignatureNotAvailableForPartner =
          t.Current2faSettingCannotBeChangedAtUpload =
          t.ConflictingUpload =
          t.AccountBlockedContactSupport =
          t.ServerError =
          t.RateLimitError =
          t.InvalidRequestError =
          t.InjectedError =
          t.BusinessError =
            void 0),
        (t.BusinessError = "business_error"),
        (t.InjectedError = "injected_error"),
        (t.InvalidRequestError = "invalid_request_error"),
        (t.RateLimitError = "rate_limit_error"),
        (t.ServerError = "server_error"),
        (t.AccountBlockedContactSupport = "account_blocked_contact_support"),
        (t.ConflictingUpload = "conflicting_upload"),
        (t.Current2faSettingCannotBeChangedAtUpload = "current_2fa_setting_cannot_be_changed_at_upload"),
        (t.ExternalTokenSignatureNotAvailableForPartner = "external_token_signature_not_available_for_partner"),
        (t.InsufficientTier = "INSUFFICIENT_TIER"),
        (t.InvalidKey = "invalid_key"),
        (t.InvalidSessionAccessKey = "invalid_session_access_key"),
        (t.MissingSettingsTransaction = "MISSING_SETTINGS_TRANSACTION"),
        (t.NoExternalToken = "no_external_token"),
        (t.NothingToUpdate = "NOTHING_TO_UPDATE"),
        (t.NoSharingKeys = "NO_SHARING_KEYS"),
        (t.NotAdmin = "NOT_ADMIN"),
        (t.NoMpEncryptionKey = "no_mp_encryption_key"),
        (t.TemporaryDisabled = "temporary_disabled"),
        (t.TeamDoesNotExist = "TEAM_DOES_NOT_EXIST"),
        (t.TwofaServerKeyNotProvided = "2fa_server_key_not_provided"),
        (t.TwofaServerKeyProvidedIncorrectly = "2fa_server_key_provided_incorrectly"),
        (t.TwofaSettingSameAsCurrent = "2fa_setting_same_as_current"),
        (t.UnchangedPrivateKey = "UNCHANGED_PRIVATE_KEY"),
        (t.UnexpectedError = "unexpected_error"),
        (t.UpdateOfVerificationMethodNotSupported = "UPDATE_OF_VERIFICATION_METHOD_NOT_SUPPORTED"),
        (t.VerificationFailedTooManyTimes = "verification_failed_too_many_times"),
        (t.VerificationRequiresRequest = "verification_requires_request"),
        (t.VerificationTimeout = "verification_timeout"),
        (t.WrongPublicKey = "WRONG_PUBLIC_KEY"),
        (t.InvalidAuthTicket = "invalid_auth_ticket"),
        (t.VerificationMethodInvalid = "verification_method_invalid"),
        (t.InvalidTOTPStatus = "invalid_totp_status"),
        (t.TeamDeviceEncryptedConfigNotFound = "TEAM_DEVICE_CONFIGURATION_NOT_FOUND"),
        (t.ConfigurationNotFound = "TEAM_DEVICE_CONFIGURATION_NOT_FOUND"),
        (t.TotpActiveOrNotSeeded = "totp_active_or_not_seeded"),
        (t.DomainNotValidForTeam = "DOMAIN_NOT_VALID_FOR_TEAM"),
        (t.InvalidUser = "invalid_user"),
        (t.InvalidSsoToken = "invalid_sso_token"),
        (t.NotProposedNeitherAccepted = "not_proposed_neither_accepted"),
        (t.NoFreeSlot = "no_free_slot"),
        (t.B2bSsoUserNotFound = "B2B_SSO_USER_NOT_FOUND"),
        (t.DeviceAccountMappingAlreadyExists = "DEVICE_ACCOUNT_MAPPING_ALREADY_EXISTS"),
        (t.DeviceKeyNotFound = "DEVICE_KEY_NOT_FOUND"),
        (t.DeactivatedTeamDevice = "DEACTIVATED_TEAM_DEVICE"),
        (t.BasicConfigNotFound = "BASIC_CONFIGURATION_NOT_FOUND"),
        (t.InvalidTeamDeviceLogin = "INVALID_TEAM_DEVICE_LOGIN");
    },
    504933: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.removeFamilyMemberErrors =
          t.leaveFamilyErrors =
          t.joinFamilyErrors =
          t.UserMustCancelPremiumPlusRenewalToDowngradeToFamily =
          t.UserNotMemberOfFamily =
          t.CannotRemoveFamilyAdmin =
          t.UserMustBeFamilyAdmin =
          t.FamilyHasBeenDiscontinued =
          t.UserSubscriptionIsUpForRenewal =
          t.JoinFamilyTokenNotFound =
          t.AlreadyJoinedThisFamily =
          t.CannotJoinMultipleFamilies =
          t.FamilyFull =
          t.BadLogin =
            void 0),
        (t.BadLogin = "BAD_LOGIN"),
        (t.FamilyFull = "FAMILY_FULL"),
        (t.CannotJoinMultipleFamilies = "CANNOT_JOIN_MULTIPLE_FAMILIES"),
        (t.AlreadyJoinedThisFamily = "ALREADY_JOINED_THIS_FAMILY"),
        (t.JoinFamilyTokenNotFound = "JOIN_FAMILY_TOKEN_NOT_FOUND"),
        (t.UserSubscriptionIsUpForRenewal = "USER_SUBSCRIPTION_IS_UP_FOR_RENEWAL"),
        (t.FamilyHasBeenDiscontinued = "FAMILY_HAS_BEEN_DISCONTINUED"),
        (t.UserMustBeFamilyAdmin = "USER_MUST_BE_FAMILY_ADMIN"),
        (t.CannotRemoveFamilyAdmin = "CANNOT_REMOVE_FAMILY_ADMIN"),
        (t.UserNotMemberOfFamily = "USER_NOT_MEMBER_OF_FAMILY"),
        (t.UserMustCancelPremiumPlusRenewalToDowngradeToFamily = "USER_MUST_CANCEL_PREMIUM_PLUS_RENEWAL_TO_DOWNGRADE_TO_FAMILY"),
        (t.joinFamilyErrors = [
          t.BadLogin,
          t.FamilyFull,
          t.CannotJoinMultipleFamilies,
          t.AlreadyJoinedThisFamily,
          t.JoinFamilyTokenNotFound,
          t.UserSubscriptionIsUpForRenewal,
          t.FamilyHasBeenDiscontinued,
          t.UserMustCancelPremiumPlusRenewalToDowngradeToFamily
        ]),
        (t.leaveFamilyErrors = [t.CannotRemoveFamilyAdmin, t.UserNotMemberOfFamily]),
        (t.removeFamilyMemberErrors = [t.UserMustBeFamilyAdmin, t.CannotRemoveFamilyAdmin, t.UserNotMemberOfFamily]);
    },
    553e3: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getFamilyDetails = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.familyplan,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "GetFamilyDetails"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.getFamilyDetails = async function (e, t) {
        return i(e, { login: t, payload: {} });
      };
    },
    11560: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.joinFamily = t.FamilyStopRenewalPlatform = t.FamilyStopRenewalState = void 0);
      const n = r(590338),
        o = r(145956);
      !(function (e) {
        (e.STOPPED = "stopped"), (e.NOT_STOPPED = "not_stopped");
      })(t.FamilyStopRenewalState || (t.FamilyStopRenewalState = {})),
        (function (e) {
          (e.IOS_APP_STORE = "ios"),
            (e.MAC_STORE = "mac"),
            (e.PLAY_STORE = "playstore"),
            (e.PAYPAL = "paypal"),
            (e.STRIPE = "stripe"),
            (e.PROCESSOUT = "processout");
        })(t.FamilyStopRenewalPlatform || (t.FamilyStopRenewalPlatform = {}));
      const a = {
          group: o.ApiEndpointGroups.familyplan,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.App,
          endpoint: "JoinFamily"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.joinFamily = async function (e, t) {
        return i(e, { payload: t });
      };
    },
    886661: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.leaveFamily = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.familyplan,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "LeaveFamily"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.leaveFamily = async function (e, t) {
        return i(e, { login: t, payload: {} });
      };
    },
    415244: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.removeFamilyMember = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.familyplan,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "RemoveFamilyMember"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.removeFamilyMember = async function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    129591: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.resetFamilyJoinToken = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.familyplan,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "ResetJoinToken"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.resetFamilyJoinToken = async function (e, t) {
        return i(e, { login: t, payload: {} });
      };
    },
    447521: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getFeatureFlip = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.features,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "GetAndEvaluateForUser"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.getFeatureFlip = function (e, t, r) {
        return i(e, { login: t, payload: { features: [r] } });
      };
    },
    464272: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isGetFilesMetaSuccess = t.getFilesMeta = t.endpoint = void 0);
      const n = r(590338),
        o = r(145956);
      t.endpoint = "GetFileMeta";
      const a = {
          group: o.ApiEndpointGroups.file,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: t.endpoint
        },
        i = (0, n.prepareApiEndpoint)(a);
      (t.getFilesMeta = (e, t, r) => i(e, { login: t, payload: r })), (t.isGetFilesMetaSuccess = (e) => "success" === e.code);
    },
    591503: function (e, t, r) {
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, n, o);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        o(r(359821), t),
        o(r(297421), t),
        o(r(755710), t),
        o(r(863339), t),
        o(r(945468), t),
        o(r(891063), t),
        o(r(218625), t),
        o(r(11560), t),
        o(r(553e3), t),
        o(r(415244), t),
        o(r(129591), t),
        o(r(886661), t),
        o(r(634957), t),
        o(r(208124), t),
        o(r(467747), t),
        o(r(462712), t),
        o(r(613271), t),
        o(r(251837), t),
        o(r(663619), t),
        o(r(939446), t),
        o(r(908111), t),
        o(r(447442), t),
        o(r(713328), t),
        o(r(815152), t),
        o(r(460132), t),
        o(r(912407), t),
        o(r(156736), t),
        o(r(580585), t),
        o(r(606862), t),
        o(r(99850), t),
        o(r(348974), t),
        o(r(643339), t),
        o(r(787992), t),
        o(r(904685), t),
        o(r(278876), t),
        o(r(896425), t),
        o(r(199289), t),
        o(r(71336), t),
        o(r(501371), t),
        o(r(910954), t),
        o(r(658539), t),
        o(r(248253), t),
        o(r(851296), t),
        o(r(424925), t),
        o(r(248730), t),
        o(r(503278), t),
        o(r(71633), t),
        o(r(619336), t),
        o(r(13445), t),
        o(r(449481), t),
        o(r(986680), t),
        o(r(418959), t),
        o(r(298802), t),
        o(r(136420), t),
        o(r(932042), t),
        o(r(542216), t),
        o(r(154268), t),
        o(r(256026), t),
        o(r(481926), t),
        o(r(528974), t),
        o(r(246583), t),
        o(r(343775), t),
        o(r(809161), t),
        o(r(334252), t),
        o(r(92006), t),
        o(r(580474), t),
        o(r(510554), t),
        o(r(241780), t),
        o(r(325094), t),
        o(r(703330), t),
        o(r(680359), t),
        o(r(874895), t);
    },
    366677: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getKillSwitches = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.killswitch,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.App,
          endpoint: "GetKillSwitches"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.getKillSwitches = async function (e, t) {
        return i(e, { payload: { requestedKillswitches: t } });
      };
    },
    703330: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.requestPairing = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.pairing,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "RequestPairing"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.requestPairing = async function (e, t) {
        return i(e, { login: t, payload: {} });
      };
    },
    448008: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getCustomerInvoice = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.payments,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "GetCustomerInvoice",
          accept: "application/pdf",
          responseType: "arraybuffer"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.getCustomerInvoice = async function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    936273: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listInvoices = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.payments,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "ListInvoices"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.listInvoices = async function (e, t) {
        return i(e, { login: t, payload: {} });
      };
    },
    848523: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.grantFullRefundAndCancelSubscription = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.payments,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "GrantFullRefundAndCancelSubscription"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.grantFullRefundAndCancelSubscription = async function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    680359: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getHashes = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.pwleak,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.App,
          endpoint: "GetHashes"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.getHashes = async function (e, t) {
        return i(e, { payload: t });
      };
    },
    503278: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.confirmMasterPasswordChangeDone = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "ConfirmMasterPasswordChangeDone",
          group: n.ApiEndpointGroups.sync,
          method: n.ApiRequestMethod.POST,
          version: n.ApiVersion.v1
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.confirmMasterPasswordChangeDone = async function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    71633: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getDataForMasterPasswordChange = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "GetDataForMasterPasswordChange",
          group: n.ApiEndpointGroups.sync,
          method: n.ApiRequestMethod.POST,
          version: n.ApiVersion.v1
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.getDataForMasterPasswordChange = async function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    619336: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getLatestContent = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.sync,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "GetLatestContent"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.getLatestContent = async function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    469214: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.uploadDataForCryptoChange = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "UploadDataForCryptoUpdate",
          group: o.ApiEndpointGroups.sync,
          method: o.ApiRequestMethod.POST,
          version: o.ApiVersion.v1
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.uploadDataForCryptoChange = async function (e, t, r) {
        return await i(e, { login: t, payload: r });
      };
    },
    13445: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.uploadDataForMasterPasswordChange = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "UploadDataForMasterPasswordChange",
          group: n.ApiEndpointGroups.sync,
          method: n.ApiRequestMethod.POST,
          version: n.ApiVersion.v1
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.uploadDataForMasterPasswordChange = async function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    449481: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.lastADSyncDate = t.lastADSyncDateErrors = void 0);
      const n = r(46298),
        o = r(590338),
        a = r(145956);
      t.lastADSyncDateErrors = [n.NotAdmin, n.InsufficientTier, n.UnknownError];
      const i = {
          group: a.ApiEndpointGroups.teams,
          version: a.ApiVersion.v1,
          method: a.ApiRequestMethod.POST,
          authenticationType: a.ApiAuthType.UserDevice,
          endpoint: "LastADSyncDate"
        },
        s = (0, o.prepareApiEndpoint)(i);
      t.lastADSyncDate = function (e, t) {
        return s(e, { login: t, payload: {} });
      };
    },
    411848: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.addSeatsRequest = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.teams,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "AddSeats"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.addSeatsRequest = async function (e, t, r) {
        return await i(e, { login: t, payload: { seats: r } });
      };
    },
    418959: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getAuditLogsQueryResults = t.InternalErrorCode = t.NotAdminErrorCode = void 0);
      const n = r(590338),
        o = r(145956);
      (t.NotAdminErrorCode = "NOT_ADMIN"), (t.InternalErrorCode = "internal_error");
      const a = {
          group: o.ApiEndpointGroups.teams,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "GetAuditLogQueryResults"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.getAuditLogsQueryResults = function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    986680: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.startAuditLogsQuery = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.teams,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "StartAuditLogsQuery"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.startAuditLogsQuery = function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    338115: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.changeTierMidCycleRequest = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.teams,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "ChangeTierMidCycle"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.changeTierMidCycleRequest = async function (e, t, r, n, o, a, s, c) {
        return await i(e, {
          login: t,
          payload: { amountToPay: r, taxes: n, planId: o, couponCode: a, seatsToAdd: s, billingContactEmail: c }
        });
      };
    },
    921712: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.computePlanPricingRequest = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.teams,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "ComputePlanPricing"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.computePlanPricingRequest = async function (e, t, r) {
        return await i(e, { login: t, payload: { seats: r } });
      };
    },
    481926: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.listTeamDevicesErrors =
          t.getTeamDeviceErrors =
          t.createTeamDeviceAccountErrors =
          t.deactivateTeamDeviceErrors =
          t.registerTeamDeviceErrors =
            void 0);
      const n = r(359821),
        o = r(145956);
      (t.registerTeamDeviceErrors = [n.NotAdmin, o.UnknownError]),
        (t.deactivateTeamDeviceErrors = [n.NotAdmin, o.UnknownError, n.DeviceKeyNotFound, n.DeactivatedTeamDevice]),
        (t.createTeamDeviceAccountErrors = [n.NotAdmin, o.UnknownError, n.DeviceAccountMappingAlreadyExists, n.InvalidTeamDeviceLogin]),
        (t.getTeamDeviceErrors = [n.NotAdmin, o.UnknownError]),
        (t.listTeamDevicesErrors = [n.NotAdmin, o.UnknownError]);
    },
    528974: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.createTeamDeviceAccount = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.teams,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "CreateTeamDeviceAccount"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.createTeamDeviceAccount = (e, t, r) => i(e, { login: t, payload: r });
    },
    343775: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deactivateTeamDevice = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.teams,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "DeactivateTeamDevice"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.deactivateTeamDevice = function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    809161: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getTeamDevice = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.teams,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "GetTeamDevice"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.getTeamDevice = async function (e, t, r) {
        return await i(e, { login: t, payload: r });
      };
    },
    334252: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listTeamDevices = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.teams,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "ListTeamDevices"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.listTeamDevices = async (e, t) => await i(e, { login: t, payload: {} });
    },
    246583: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.registerTeamDevice = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.teams,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "RegisterTeamDevice"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.registerTeamDevice = function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    298802: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    136420: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.completeDomainRegistrationErrors = t.completeDomainRegistration = void 0);
      const n = r(590338),
        o = r(145956),
        a = r(359821),
        i = {
          group: o.ApiEndpointGroups.teams,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "CompleteDomainsRegistration"
        },
        s = (0, n.prepareApiEndpoint)(i);
      (t.completeDomainRegistration = async function (e, t) {
        return s(e, { login: t, payload: {} });
      }),
        (t.completeDomainRegistrationErrors = [a.NotAdmin]);
    },
    932042: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.deactivateDomain = t.deactivateDomainErrors = void 0);
      const n = r(590338),
        o = r(145956),
        a = r(359821);
      t.deactivateDomainErrors = [a.NotAdmin, a.DomainNotValidForTeam];
      const i = {
          group: o.ApiEndpointGroups.teams,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "DeactivateDomain"
        },
        s = (0, n.prepareApiEndpoint)(i);
      t.deactivateDomain = async function (e, t, r) {
        return s(e, { login: t, payload: r });
      };
    },
    542216: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listDomains = t.listDomainErrors = void 0);
      const n = r(590338),
        o = r(145956),
        a = r(359821);
      t.listDomainErrors = [a.ServerError, a.InvalidRequestError];
      const i = {
          group: o.ApiEndpointGroups.teams,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "ListDomains"
        },
        s = (0, n.prepareApiEndpoint)(i);
      t.listDomains = async function (e, t) {
        return s(e, { login: t, payload: {} });
      };
    },
    154268: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.requestDomainRegistration =
          t.requestDomainRegistrationErrors =
          t.DomainContainsNonTeamUsers =
          t.InvalidPublicDomain =
          t.DomainAlreadyExists =
            void 0);
      const n = r(590338),
        o = r(145956),
        a = r(359821);
      (t.DomainAlreadyExists = "DOMAIN_ALREADY_EXISTS"),
        (t.InvalidPublicDomain = "INVALID_PUBLIC_DOMAIN"),
        (t.DomainContainsNonTeamUsers = "DOMAIN_CONTAINS_EXISTING_NONTEAM_USERS"),
        (t.requestDomainRegistrationErrors = [
          a.TeamDoesNotExist,
          t.DomainAlreadyExists,
          a.NotAdmin,
          t.InvalidPublicDomain,
          t.DomainContainsNonTeamUsers
        ]);
      const i = {
          group: o.ApiEndpointGroups.teams,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "RequestDomainRegistration"
        },
        s = (0, n.prepareApiEndpoint)(i);
      t.requestDomainRegistration = function (e, t, r) {
        return s(e, { login: t, payload: r });
      };
    },
    530782: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getExpectedTaxInformationRequest = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.teams,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "GetExpectedTaxInformation"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.getExpectedTaxInformationRequest = async function (e, t, r) {
        return await i(e, { login: t, payload: { priceInCents: r } });
      };
    },
    178607: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getMidCycleTierUpgradePriceRequest = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.teams,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "GetMidCycleTierUpgradePrice"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.getMidCycleTierUpgradePriceRequest = async function (e, t, r, n) {
        return await i(e, { login: t, payload: { numberOfSeats: n, newPlan: r } });
      };
    },
    247115: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getTeamOffersRequest = void 0);
      const n = r(145956),
        o = r(590338),
        a = {
          group: n.ApiEndpointGroups.teams,
          version: n.ApiVersion.v1,
          method: n.ApiRequestMethod.POST,
          authenticationType: n.ApiAuthType.UserDevice,
          endpoint: "GetTeamOffers"
        },
        i = (0, o.prepareApiEndpoint)(a);
      t.getTeamOffersRequest = async function (e, t, r) {
        return await i(e, { login: t, payload: { couponCode: r, withStarterOffer: !0 } });
      };
    },
    293934: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.changeInviteLinkTeamKey = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.teams,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "ChangeTeamKey"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.changeInviteLinkTeamKey = (e, t, r) => i(e, { login: t, payload: r });
    },
    405928: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getInviteLinkErrors = void 0);
      const n = r(453576);
      t.getInviteLinkErrors = [
        n.InviteLinkResponseErrorCode.NotAdmin,
        n.InviteLinkResponseErrorCode.InviteLinkNotFound,
        n.InviteLinkResponseErrorCode.TeamKeyNotFound,
        n.InviteLinkResponseErrorCode.UserInviteLinkNotFound
      ];
    },
    932811: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.createInviteLink = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.teams,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "CreateTeamSignUpPage"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.createInviteLink = (e, t, r) => i(e, { login: t, payload: r });
    },
    444609: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getInviteLinkForAdmin = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.teams,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "GetTeamSignUpPageForAdmin"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.getInviteLinkForAdmin = (e, t, r) => i(e, { login: t, payload: r });
    },
    306563: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getInviteLink = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.teams,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.App,
          endpoint: "GetTeamSignUpPage"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.getInviteLink = (e, t) => i(e, { payload: t });
    },
    241780: function (e, t, r) {
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, n, o);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        o(r(405928), t),
        o(r(293934), t),
        o(r(932811), t),
        o(r(306563), t),
        o(r(444609), t),
        o(r(292020), t),
        o(r(125731), t);
    },
    125731: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.requestInviteLinkToken = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.teams,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.App,
          endpoint: "RequestTeamInviteToken"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.requestInviteLinkToken = (e, t) => i(e, { payload: t });
    },
    292020: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.toggleInviteLink = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.teams,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "ToggleTeamSignUpPage"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.toggleInviteLink = (e, t, r) => i(e, { login: t, payload: r });
    },
    474528: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getRecoveryCodesAsTeamCaptain =
          t.GetRecoveryCodesAsTeamCaptainInternalErrorCode =
          t.GetRecoveryCodesAsTeamCaptainNotAdminErrorCode =
            void 0);
      const n = r(590338),
        o = r(145956);
      (t.GetRecoveryCodesAsTeamCaptainNotAdminErrorCode = "not_billing_admin"),
        (t.GetRecoveryCodesAsTeamCaptainInternalErrorCode = "internal_error");
      const a = {
          group: o.ApiEndpointGroups.teams,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "GetRecoveryCodesAsTeamCaptain"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.getRecoveryCodesAsTeamCaptain = function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    295375: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getTeamMembers = t.GetTeamMembersInternalErrorCode = t.GetTeamMembersInvalidLimitErrorCode = void 0);
      const n = r(590338),
        o = r(145956);
      (t.GetTeamMembersInvalidLimitErrorCode = "invalid_limit"), (t.GetTeamMembersInternalErrorCode = "internal_error");
      const a = {
          group: o.ApiEndpointGroups.teams,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "GetTeamMembers"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.getTeamMembers = function (e, t, r) {
        return i(e, { login: t, payload: r });
      };
    },
    92006: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.updateTeamDeviceEncryptedConfigErrors = t.getTeamDeviceEncryptedConfigErrors = void 0);
      const n = r(359821),
        o = r(145956);
      (t.getTeamDeviceEncryptedConfigErrors = [n.TeamDeviceEncryptedConfigNotFound, n.NotAdmin, o.UnknownError]),
        (t.updateTeamDeviceEncryptedConfigErrors = [n.NotAdmin, o.UnknownError, n.DeviceAccountMappingAlreadyExists, n.DeviceKeyNotFound]);
    },
    580474: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getTeamDeviceEncryptedConfig = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.teams,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "GetTeamDeviceEncryptedConfiguration"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.getTeamDeviceEncryptedConfig = (e, t, r) => i(e, { login: t, payload: r });
    },
    510554: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.updateTeamDeviceEncryptedConfig = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.teams,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "UpdateTeamDeviceEncryptedConfiguration"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.updateTeamDeviceEncryptedConfig = (e, t, r) => i(e, { login: t, payload: r });
    },
    256026: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.teamStatus = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.teams,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "TeamStatus"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.teamStatus = function (e, t) {
        return i(e, { login: t, payload: {} });
      };
    },
    325094: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getRemoteTime = void 0);
      const n = r(590338),
        o = r(145956),
        a = {
          group: o.ApiEndpointGroups.time,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.None,
          endpoint: "GetRemoteTime"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.getRemoteTime = async function (e, t) {
        return i(e, { payload: t ?? {} });
      };
    },
    874895: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.generateCredential = t.GetVpnCredentialBusinessErrors = void 0);
      const n = r(590338),
        o = r(145956);
      !(function (e) {
        (e.USER_DOESNT_HAVE_VPN_CAPABILITY = "USER_DOESNT_HAVE_VPN_CAPABILITY"),
          (e.USER_ALREADY_HAS_AN_ACCOUNT = "USER_ALREADY_HAS_AN_ACCOUNT"),
          (e.USER_ALREADY_HAS_AN_ACCOUNT_FOR_PROVIDER = "USER_ALREADY_HAS_AN_ACCOUNT_FOR_PROVIDER"),
          (e.USER_ALREADY_HAVE_ACTIVE_VPN_SUBSCRIPTION = "USER_ALREADY_HAVE_ACTIVE_VPN_SUBSCRIPTION");
      })(t.GetVpnCredentialBusinessErrors || (t.GetVpnCredentialBusinessErrors = {}));
      const a = {
          group: o.ApiEndpointGroups.vpn,
          version: o.ApiVersion.v1,
          method: o.ApiRequestMethod.POST,
          authenticationType: o.ApiAuthType.UserDevice,
          endpoint: "GetCredentials"
        },
        i = (0, n.prepareApiEndpoint)(a);
      t.generateCredential = async (e, t, r) => await i(e, { login: t, payload: r });
    },
    878577: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.signRequest =
          t.allowedUnsignedHeaders =
          t.allowedUnsignedProxyHeaders =
          t.allowedUnsignedClientHeaders =
          t.signatureAlgorithm =
            void 0);
      const n = r(401067),
        o = r(246445),
        a = r(316038),
        i = r(869530),
        s = r(500053),
        c = r(145956),
        p = r(415215),
        u = r(17825);
      function d(e) {
        const { appKeys: t } = e,
          r = ["AppAccessKey=" + t.accessKey];
        switch (e.type) {
          case c.ApiAuthType.App:
            return r;
          case c.ApiAuthType.UserDevice: {
            const { login: t, deviceKeys: n } = e;
            return [`Login=${t}`, ...r, `DeviceAccessKey=${n.accessKey}`];
          }
          case c.ApiAuthType.Session: {
            const { deviceId: t, login: n, sessionKeys: o } = e;
            return [`Login=${n}`, ...r, `SessionAccessKey=${o.accessKey}`, `DeviceAccessKey=${t}`];
          }
          case c.ApiAuthType.TeamDevice: {
            const { teamUuid: t, deviceKeys: n } = e;
            return [`TeamUuid=${t}`, ...r, `DeviceAccessKey=${n.accessKey}`];
          }
          default:
            (0, u.assertUnreachable)(e);
        }
      }
      (t.signatureAlgorithm = "DL1-HMAC-SHA256"),
        (t.allowedUnsignedClientHeaders = [
          "origin",
          "content-length",
          "content-encoding",
          "authorization",
          "user-agent",
          "accept-encoding"
        ]),
        (t.allowedUnsignedProxyHeaders = ["x-forwarded-for", "x-forwarded-proto", "x-forwarded-port", "x-amzn-trace-id"]),
        (t.allowedUnsignedHeaders = [...t.allowedUnsignedClientHeaders, ...t.allowedUnsignedProxyHeaders]),
        (t.signRequest = async (e) => {
          const { request: r, credentials: l, headersToSign: y, timestamp: g = (0, s.getUnixTimestamp)() } = e,
            { method: m, pathname: h, headers: f, query: S = {}, rawBody: T } = r,
            A = (e) => Promise.resolve(e),
            v = (0, n.compose)(a.str2ab, a.utf8ChunkEncode),
            E = (0, n.composeP)((0, n.compose)(A, a.convertBufferToHex), o.computeHashSha256, (0, n.compose)(A, v)),
            _ = await E(T),
            { canonicalRequest: b, signedHeaders: C } = (0, p.makeCanonicalRequest)({
              method: m,
              uri: h,
              headers: f,
              query: S,
              hashedPayload: _,
              headersToSign: y
            }),
            D = await E(b),
            P = [t.signatureAlgorithm, g, D].join("\n"),
            O = (function (e) {
              const { appKeys: t } = e;
              switch (e.type) {
                case c.ApiAuthType.App:
                  return t.secretKey;
                case c.ApiAuthType.UserDevice: {
                  const { deviceKeys: r } = e;
                  return `${t.secretKey}\n${r.secretKey}`;
                }
                case c.ApiAuthType.Session: {
                  const { sessionKeys: r } = e;
                  return `${t.secretKey}\n${r.secretKey}`;
                }
                case c.ApiAuthType.TeamDevice: {
                  const { deviceKeys: r } = e;
                  return `${t.secretKey}\n${r.secretKey}`;
                }
                default:
                  (0, u.assertUnreachable)(e);
              }
            })(l),
            k = v(P),
            w = await (0, i.signHashHmacSHA256)({ key: (0, a.str2ab)(O), data: k }),
            M = (0, a.convertBufferToHex)(w);
          return t.signatureAlgorithm + " " + [...d(l), `Timestamp=${g}`, `SignedHeaders=${C}`, `Signature=${M}`].join(",");
        });
    },
    145956: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isApiErrorOfType =
          t.isApiError =
          t.UnknownError =
          t.ApiEndpointGroups =
          t.ApiVersion =
          t.ApiRequestMethod =
          t.ApiAuthType =
            void 0),
        (t.ApiAuthType = { App: "App", UserDevice: "UserDevice", None: "None", Session: "Session", TeamDevice: "TeamDevice" }),
        (t.ApiRequestMethod = { GET: "GET", POST: "POST" }),
        (function (e) {
          e[(e.v1 = 0)] = "v1";
        })(t.ApiVersion || (t.ApiVersion = {})),
        (function (e) {
          (e.abtesting = "abtesting"),
            (e.account = "account"),
            (e.accountRecovery = "accountrecovery"),
            (e.authentication = "authentication"),
            (e.breachesQA = "breaches-qa"),
            (e.dataleak = "dataleak"),
            (e.dataleakQA = "dataleak-qa"),
            (e.darkwebinsights = "darkwebinsights"),
            (e.devices = "devices"),
            (e.familyplan = "familyplan"),
            (e.features = "features"),
            (e.file = "file"),
            (e.killswitch = "killswitch"),
            (e.pairing = "pairing"),
            (e.premium = "premium"),
            (e.pwleak = "pwleak"),
            (e.sync = "sync"),
            (e.teams = "teams"),
            (e.time = "time"),
            (e.payments = "payments"),
            (e.vpn = "vpn");
        })(t.ApiEndpointGroups || (t.ApiEndpointGroups = {})),
        (t.UnknownError = "UNKNOWN_ERROR"),
        (t.isApiError = function (e) {
          return "object" == typeof e && "success" !== e.code;
        }),
        (t.isApiErrorOfType = function (e, t) {
          return "object" == typeof t && t.type === e;
        });
    },
    490190: (e, t) => {
      var r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UnknownError = t.UnknownErrorMessages = t.UnknownErrorCode = void 0),
        (function (e) {
          e[(e.UNKNOWN_ERROR = 0)] = "UNKNOWN_ERROR";
        })((r = t.UnknownErrorCode || (t.UnknownErrorCode = {}))),
        (t.UnknownErrorMessages = { [r.UNKNOWN_ERROR]: "Unknown error" }),
        (t.UnknownError = { codes: r, name: "UnknownError", messages: t.UnknownErrorMessages });
    },
    392263: function (e, t, r) {
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, n, o);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isCarbonError = t.CarbonError = void 0);
      const a = r(490190);
      class i extends Error {
        constructor(e, t) {
          super(e.messages[t]),
            (this.errorType = e),
            (this.errorCode = t),
            (this.additionalInfo = {}),
            Object.setPrototypeOf(this, i.prototype),
            (this.name = "CarbonError"),
            Error.captureStackTrace && Error.captureStackTrace(this, i);
        }
        errorTypeName() {
          return this.errorType.name;
        }
        stringErrorCode() {
          const {
            errorType: { codes: e, name: t },
            errorCode: r
          } = this;
          return `${t}#${e[r]}`;
        }
        addAdditionalInfo(e) {
          return (this.additionalInfo = { ...this.additionalInfo, ...e }), this;
        }
        getAdditionalInfo() {
          return this.additionalInfo;
        }
        addContextInfo(e, t) {
          const { errorCode: r, errorType: n } = this;
          return (this.message = `[${e}] - ${t}: ${n.messages[r]}`), this;
        }
        toString() {
          return `CarbonError: ${this.message} (code ${this.stringErrorCode()})`;
        }
        static fromAnyError(e, t, r) {
          if (s(e)) return e;
          const n = new i(t || a.UnknownError, void 0 === r ? a.UnknownErrorCode.UNKNOWN_ERROR : r);
          return (
            s(n, a.UnknownError, a.UnknownErrorCode.UNKNOWN_ERROR) && (n.message = e.message || `${e}`), e.stack && (n.stack = e.stack), n
          );
        }
      }
      function s(e, t, r) {
        return e instanceof Error && "CarbonError" === e.name && (void 0 === t || t === e.errorType) && (void 0 === r || r === e.errorCode);
      }
      (t.CarbonError = i), (t.isCarbonError = s), o(r(635706), t);
    },
    635706: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    545800: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getCloudflareHeaders = t.setCloudflareHeaders = void 0);
      let r = {};
      (t.setCloudflareHeaders = (e, t) => {
        if (Object.isFrozen(r)) throw new Error("Trying to set Cloudflare headers after initialization");
        e && t && ((r = { "CF-Access-Client-Id": e, "CF-Access-Client-Secret": t }), Object.freeze(r));
      }),
        (t.getCloudflareHeaders = () => (Object.isFrozen(r) ? r : {}));
    },
    639266: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isHttpError = t.HttpError = t.HttpErrorMessages = t.HttpErrorCode = void 0);
      const n = r(392263);
      var o;
      !(function (e) {
        (e[(e.CLIENT_ERROR = 0)] = "CLIENT_ERROR"),
          (e[(e.SERVER_ERROR = 1)] = "SERVER_ERROR"),
          (e[(e.STATUS_CODE = 2)] = "STATUS_CODE"),
          (e[(e.CONNECTION_ABORTED = 3)] = "CONNECTION_ABORTED"),
          (e[(e.CONNECTION_TIMED_OUT = 4)] = "CONNECTION_TIMED_OUT"),
          (e[(e.NETWORK_ERROR = 5)] = "NETWORK_ERROR"),
          (e[(e.NO_RESPONSE = 6)] = "NO_RESPONSE"),
          (e[(e.SETUP_FAILED = 7)] = "SETUP_FAILED");
      })((o = t.HttpErrorCode || (t.HttpErrorCode = {}))),
        (t.HttpErrorMessages = {
          [o.CLIENT_ERROR]: "Http response with client error status",
          [o.SERVER_ERROR]: "Http response with server error status",
          [o.STATUS_CODE]: "Http response with non-succesful status",
          [o.CONNECTION_ABORTED]: "Connection aborted",
          [o.CONNECTION_TIMED_OUT]: "Connection timed out",
          [o.NETWORK_ERROR]: "Network error",
          [o.NO_RESPONSE]: "No response to Http request",
          [o.SETUP_FAILED]: "Failed to setup Http request"
        }),
        (t.HttpError = { codes: o, name: "HttpError", messages: t.HttpErrorMessages }),
        (t.isHttpError = (e, r) => (0, n.isCarbonError)(e, t.HttpError, r));
    },
    162628: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.get = void 0);
      const n = r(955539);
      t.get = function (e, t = {}) {
        return (0, n.httpGetUsingFetch)(e, t);
      };
    },
    955539: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.httpGetUsingFetch = void 0);
      const n = r(287248);
      t.httpGetUsingFetch = async function (e, t = {}) {
        const r = (0, n.setTimeoutAbort)();
        try {
          const o = { credentials: "omit", signal: r },
            a = t.headers ? { ...o, headers: t.headers } : o,
            i = await fetch(e, a);
          if ((t.validateStatus && !t.validateStatus(i.status)) ?? !i.ok) {
            const t = new n.FetchError(`HTTP ${i.status} - ${e}`);
            throw ((t.response = i), t);
          }
          const s = await (0, n.getResponseBody)(i, t.responseType);
          return { headers: i.headers, data: s, status: i.status, statusText: i.statusText };
        } catch (e) {
          throw (0, n.getCarbonHttpError)(e, r);
        }
      };
    },
    287248: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getCarbonHttpError = t.FetchError = t.setTimeoutAbort = t.getResponseBody = t.HttpStatusCode = void 0);
      const n = r(17825),
        o = r(392263),
        a = r(639266);
      !(function (e) {
        e[(e.GATEWAY_TIMEOUT = 504)] = "GATEWAY_TIMEOUT";
      })(t.HttpStatusCode || (t.HttpStatusCode = {})),
        (t.getResponseBody = async function (e, t = "json") {
          switch (t) {
            case "json":
              return e.json();
            case "text":
              return e.text();
            case "arraybuffer":
              return e.arrayBuffer();
            default:
              (0, n.assertUnreachable)(t);
          }
        }),
        (t.setTimeoutAbort = function (e = 6e4) {
          const t = new AbortController();
          return setTimeout(() => t.abort(), e), t.signal;
        });
      class i extends Error {
        constructor(e) {
          super(e), (this.response = void 0);
        }
      }
      (t.FetchError = i),
        (t.getCarbonHttpError = (e, t) => {
          let r = null;
          if (
            (function (e) {
              return e instanceof i;
            })(e) &&
            e.response
          ) {
            const { response: t } = e,
              { status: n } = t;
            (r =
              n >= 400 && n < 500
                ? new o.CarbonError(a.HttpError, a.HttpErrorCode.CLIENT_ERROR)
                : n >= 500
                ? new o.CarbonError(a.HttpError, a.HttpErrorCode.SERVER_ERROR)
                : new o.CarbonError(a.HttpError, a.HttpErrorCode.STATUS_CODE)),
              r.addAdditionalInfo({ response: t });
          } else
            r =
              "AbortError" === e.name && t.aborted
                ? new o.CarbonError(a.HttpError, a.HttpErrorCode.CONNECTION_TIMED_OUT)
                : "AbortError" === e.name
                ? new o.CarbonError(a.HttpError, a.HttpErrorCode.CONNECTION_ABORTED)
                : self?.navigator?.onLine
                ? new o.CarbonError(a.HttpError, a.HttpErrorCode.SETUP_FAILED)
                : new o.CarbonError(a.HttpError, a.HttpErrorCode.NETWORK_ERROR);
          return r.addAdditionalInfo({ libError: e.message }), r;
        });
    },
    314656: function (e, t, r) {
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, n, o);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.post = t.get = void 0);
      var a = r(162628);
      Object.defineProperty(t, "get", {
        enumerable: !0,
        get: function () {
          return a.get;
        }
      });
      var i = r(268109);
      Object.defineProperty(t, "post", {
        enumerable: !0,
        get: function () {
          return i.post;
        }
      }),
        o(r(639266), t);
    },
    268109: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.post = void 0);
      const n = r(880057);
      t.post = function (e, t, r = {}) {
        return (0, n.httpPostUsingFetch)(e, t, r);
      };
    },
    880057: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.httpPostUsingFetch = void 0);
      const n = r(287248);
      t.httpPostUsingFetch = async function (e, t, r = {}) {
        const o = (0, n.setTimeoutAbort)();
        try {
          const a = r.headers || {},
            i = (function (e, t = "application/json") {
              const r = t.trim().toLowerCase();
              if (r.startsWith("application/json")) return JSON.stringify(e);
              if (r.startsWith("application/x-www-form-urlencoded"))
                return new URLSearchParams(
                  (function (e) {
                    return "string" == typeof e
                      ? e
                      : Object.keys(e).reduce((t, r) => {
                          const n = e[r];
                          return void 0 === n || (t[r] = "string" == typeof n ? n : JSON.stringify(n)), t;
                        }, {});
                  })(e)
                );
              if (r.startsWith("multipart/form-data")) {
                const t = new FormData();
                for (const [r, n] of Object.entries(e)) t.append(r, n);
                return t;
              }
              if ((r.startsWith("text/plain") || r.startsWith("application/x-jsonlines")) && "string" == typeof e) return e;
              throw new Error("Unsupported Content-Type for HTTP POST");
            })(t, a["Content-Type"]),
            s = { method: "POST", headers: a, body: i, credentials: "omit", signal: o },
            c = await fetch(e, s);
          if ((r.validateStatus && !r.validateStatus(c.status)) ?? !c.ok) {
            const t = new n.FetchError(`HTTP ${c.status} - ${e}`);
            throw ((t.response = c), t);
          }
          const p = await (0, n.getResponseBody)(c, r.responseType);
          return { headers: c.headers, data: p, status: c.status, statusText: c.statusText };
        } catch (e) {
          throw (0, n.getCarbonHttpError)(e, o);
        }
      };
    },
    589021: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getBatch = void 0);
      const n = r(678912),
        o = r(859890);
      t.getBatch = function (e, t, r) {
        const a = "zero" === t.startCursor.type ? 0 : (0, o.binaryFindIndex)(r, (r) => (0, n.isAfterTokenStart)(e, t, !1, r));
        if (-1 === a) return [];
        const i = r.slice(a),
          s =
            "infinite" === t.endCursor.type
              ? i.length
              : (0, o.binaryFindIndex)(i, (r) => (0, n.isAfterTokenEnd)(e, t, !1, r), t.initialBatchSize),
          c = -1 === s ? i.length : s;
        return i.slice(0, c);
      };
    },
    920553: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getBatch = t.generatePrevToken = t.generateNextToken = t.generateFirstToken = void 0);
      var n = r(493669);
      Object.defineProperty(t, "generateFirstToken", {
        enumerable: !0,
        get: function () {
          return n.generateFirstToken;
        }
      }),
        Object.defineProperty(t, "generateNextToken", {
          enumerable: !0,
          get: function () {
            return n.generateNextToken;
          }
        }),
        Object.defineProperty(t, "generatePrevToken", {
          enumerable: !0,
          get: function () {
            return n.generatePrevToken;
          }
        });
      var o = r(589021);
      Object.defineProperty(t, "getBatch", {
        enumerable: !0,
        get: function () {
          return o.getBatch;
        }
      });
    },
    678912: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBeforeTokenStart = t.isAfterTokenEnd = t.isBeforeTokenEnd = t.isAfterTokenStart = void 0);
      const n = r(401067),
        o = r(735893);
      function a(e, t) {
        return e > t;
      }
      function i(e, t) {
        return e < t;
      }
      function s(e, t) {
        return (0, n.compose)(o.normalizeStringMapper, e[t]);
      }
      const c = (0, n.curry)(function (e, t, { 0: r, 1: n }) {
          const { direction: c, field: p } = r,
            u = s(e, p);
          return ((e) => ("ascend" === e ? a : i))(c)(u(t), (0, o.normalizeStringMapper)(n));
        }),
        p = (0, n.curry)(function (e, t, { 0: r, 1: n }) {
          const { direction: o, field: c } = r,
            p = s(e, c);
          return ((e) => ("ascend" === e ? i : a))(o)(p(t), n);
        }),
        u = (0, n.curry)(function (e, t, { 0: r, 1: n }) {
          const { field: o } = r;
          return s(e, o)(t) === n;
        });
      function d(e) {
        return void 0 !== e && [!0, !1].includes(e);
      }
      function l(e) {
        return { direction: "ascend", field: e };
      }
      const y = (e, t) => (r, o, a, i) => {
        const { sortCriteria: s, uniqField: y } = o.sortToken,
          g = "start" === t ? o.startCursor : o.endCursor;
        if ("zero" === g.type) return "after" === e;
        if ("infinite" === g.type) return "before" === e;
        const m = u(r, i),
          h = (
            (e, t) => (r) =>
              r.reduce(
                (r, n) =>
                  d(r)
                    ? r
                    : (function (e, t, r) {
                        return !!e(r) || (!!t(r) && void 0);
                      })(e, t, n),
                void 0
              )
          )("before" === e ? p(r, i) : c(r, i), m),
          f = h((0, n.zip)(s, g.sortValues));
        if (d(f)) return f;
        const S = h([{ 0: l(y), 1: g.uniqValue }]);
        return d(S) ? S : !a;
      };
      (t.isAfterTokenStart = y("after", "start")),
        (t.isBeforeTokenEnd = y("before", "end")),
        (t.isAfterTokenEnd = y("after", "end")),
        (t.isBeforeTokenStart = y("before", "start"));
    },
    433627: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.sameBatch = void 0);
      const n = r(401067);
      t.sameBatch = function (e, t) {
        return e.length === t.length && e.every((e, r) => (0, n.equals)(t[r], e));
      };
    },
    493669: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.generateFirstToken = t.generatePrevToken = t.generateNextToken = t.zeroCursor = t.infiniteCursor = void 0);
      const n = r(401067),
        o = r(735893),
        a = r(859890),
        i = r(678912);
      function s(e, t, r) {
        return r.sortCriteria.map((r) => {
          const { field: a } = r;
          return (0, n.compose)(o.normalizeStringMapper, e[a])(t);
        });
      }
      function c(e, r, n, o, a) {
        const i = o + n - 1;
        if (i >= a.length - 1) return t.infiniteCursor;
        const c = a[i];
        return { type: "positional", sortValues: s(e, c, r), uniqValue: String(e[r.uniqField](c)) };
      }
      function p(e, r, n) {
        const { initialBatchSize: o, startCursor: c, sortToken: p } = r;
        if ("zero" === c.type) throw new Error("Cannot generate cursor before zero start cursor.");
        const u = (0, a.binaryFindLastIndex)(n, (t) => (0, i.isBeforeTokenStart)(e, r, !0, t));
        if (-1 === u) return t.zeroCursor;
        const d = (function (e, r, n, o, a) {
          const i = o - n + 1;
          if (i < 0) return t.zeroCursor;
          const c = a[i];
          return { type: "positional", sortValues: s(e, c, r), uniqValue: String(e[r.uniqField](c)) };
        })(e, p, o, u, n);
        return d;
      }
      (t.infiniteCursor = { type: "infinite" }),
        (t.zeroCursor = { type: "zero" }),
        (t.generateNextToken = function (e, r, n) {
          if ("infinite" === r.endCursor.type) return;
          const o = (function (e, r, n) {
            const { initialBatchSize: o, endCursor: s, sortToken: p } = r;
            if ("infinite" === s.type) throw new Error("Cannot generate cursor after infinite end cursor.");
            const u = (0, a.binaryFindIndex)(n, (t) => (0, i.isAfterTokenEnd)(e, r, !1, t));
            return -1 === u ? t.infiniteCursor : c(e, p, o, u, n);
          })(e, r, n);
          return { ...r, startCursor: r.endCursor, endCursor: o };
        }),
        (t.generatePrevToken = function (e, t, r) {
          if ("zero" === t.startCursor.type) return;
          const n = p(e, t, r);
          return { ...t, startCursor: n, endCursor: t.startCursor };
        }),
        (t.generateFirstToken = function (e, r, n, o) {
          const { sortToken: a, filterToken: i } = r,
            s = c(e, a, n, 0, o);
          return { sortToken: a, filterToken: i, initialBatchSize: n, startCursor: t.zeroCursor, endCursor: s };
        });
    },
    804673: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getPlugins = t.setPlugins = void 0);
      let r = {};
      (t.setPlugins = function (e) {
        r = e;
      }),
        (t.getPlugins = function () {
          return r;
        });
    },
    60946: function (e, t, r) {
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, n, o);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), o(r(674211), t), o(r(620378), t);
    },
    620378: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setupProbe = void 0);
      const n = r(401067),
        o = r(795623);
      t.setupProbe =
        (...e) =>
        (...t) => {
          const r = { timestamp: Date.now() };
          (0, n.forEach)(
            (
              (e, t) => (r) =>
                (0, n.forEach)(
                  ((e, t) => (r) => {
                    try {
                      e(r, t);
                    } catch (e) {
                      (0, o.logWarn)({ message: `Monitor raised an error on announcement ${r.type}`, tag: "Probe", details: { error: e } });
                    }
                  })(r, t),
                  e
                )
            )(t, r),
            e
          );
        };
    },
    674211: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    759865: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.filterData = void 0);
      const n = r(401067),
        o = r(302974),
        a = r(17825);
      t.filterData = function (e, t, r, i) {
        return r.filterCriteria.reduce((r, i) => {
          const s = (function (e, t, r) {
            const { value: i } = r,
              s = (0, o.normalizeStringMapper)(i),
              c = (t) => (0, n.compose)(o.normalizeStringMapper, e[t]);
            switch (r.type) {
              case "equals":
                return (e) => c(r.field)(e) === s;
              case "differs":
                return (e) => c(r.field)(e) !== s;
              case "matches":
                return (e) => t(s, e);
              case "in":
                return (e) => {
                  const t = c(r.field)(e);
                  return s.indexOf(t) > -1;
                };
              case "contains":
                return (e) => {
                  const t = c(r.field)(e);
                  if (!Array.isArray(t)) throw new Error("[Query] - filter: expected an array");
                  return t.includes(s);
                };
              default:
                (0, a.assertUnreachable)(r);
            }
          })(e, t, i);
          return r.filter(s);
        }, i);
      };
    },
    735893: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.normalizeStringMapper =
          t.queryData =
          t.sortData =
          t.filterData =
          t.stringifyToken =
          t.parseToken =
          t.optimizeBatchSelector =
          t.createOptimizedSortTokenSelector =
          t.createOptimizedFilterTokenSelector =
            void 0);
      var n = r(23736);
      Object.defineProperty(t, "createOptimizedFilterTokenSelector", {
        enumerable: !0,
        get: function () {
          return n.createOptimizedFilterTokenSelector;
        }
      }),
        Object.defineProperty(t, "createOptimizedSortTokenSelector", {
          enumerable: !0,
          get: function () {
            return n.createOptimizedSortTokenSelector;
          }
        }),
        Object.defineProperty(t, "optimizeBatchSelector", {
          enumerable: !0,
          get: function () {
            return n.optimizeBatchSelector;
          }
        });
      var o = r(954410);
      Object.defineProperty(t, "parseToken", {
        enumerable: !0,
        get: function () {
          return o.parseToken;
        }
      }),
        Object.defineProperty(t, "stringifyToken", {
          enumerable: !0,
          get: function () {
            return o.stringifyToken;
          }
        });
      var a = r(759865);
      Object.defineProperty(t, "filterData", {
        enumerable: !0,
        get: function () {
          return a.filterData;
        }
      });
      var i = r(732541);
      Object.defineProperty(t, "sortData", {
        enumerable: !0,
        get: function () {
          return i.sortData;
        }
      });
      var s = r(107994);
      Object.defineProperty(t, "queryData", {
        enumerable: !0,
        get: function () {
          return s.queryData;
        }
      });
      var c = r(302974);
      Object.defineProperty(t, "normalizeStringMapper", {
        enumerable: !0,
        get: function () {
          return c.normalizeStringMapper;
        }
      });
    },
    302974: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.normalizeStringMapper = void 0);
      const n = r(401067),
        o = r(597601),
        a = (0, n.compose)(o.normalizeString, n.toLower);
      t.normalizeStringMapper = (e) => ("string" == typeof e ? a(e) : Array.isArray(e) ? e.map(t.normalizeStringMapper) : e);
    },
    107994: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.queryData = void 0);
      const n = r(759865),
        o = r(732541);
      t.queryData = function (e, t, r, a, i) {
        const s = (0, n.filterData)(e, t, a, i);
        return (0, o.sortData)(e, r, s);
      };
    },
    23736: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.optimizeBatchSelector = t.createOptimizedFilterTokenSelector = t.createOptimizedSortTokenSelector = void 0);
      const n = r(401067),
        o = r(432034);
      (t.createOptimizedSortTokenSelector = (0, o.createSelectorCreator)(
        o.defaultMemoize,
        (e, t) =>
          e.uniqField === t.uniqField &&
          e.sortCriteria.length === t.sortCriteria.length &&
          e.sortCriteria.every((e, r) => Object.keys(e).every((n) => e[n] === t.sortCriteria[r][n]))
      )),
        (t.createOptimizedFilterTokenSelector = (0, o.createSelectorCreator)(
          o.defaultMemoize,
          (e, t) =>
            e.filterCriteria.length === t.filterCriteria.length &&
            e.filterCriteria.every((e, r) => Object.keys(e).every((n) => e[n] === t.filterCriteria[r][n]))
        ));
      const a = (0, o.createSelectorCreator)(o.defaultMemoize, (e, t) => e.length === t.length && e.every((e, r) => t[r] === e));
      t.optimizeBatchSelector = (e) => a(e, n.identity);
    },
    732541: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.sortData = void 0);
      const n = r(302974),
        o = r(401067);
      function a(e, t) {
        const { direction: r } = t,
          a = (function (e, t) {
            const { field: r } = t;
            return (0, o.compose)(n.normalizeStringMapper, e[r]);
          })(e, t);
        return (function (e) {
          return "ascend" === e ? o.ascend : o.descend;
        })(r)(a);
      }
      t.sortData = function (e, t, r) {
        const n = (0, o.compose)(String, e[t.uniqField]),
          i = [...t.sortCriteria.map((t) => a(e, t)), (0, o.ascend)(n)];
        return (0, o.sortWith)(i)(r);
      };
    },
    954410: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.stringifyToken = t.parseToken = void 0);
      const n = r(316038),
        o = r(493513);
      (t.parseToken = function (e) {
        const t = o.decode(e),
          r = (0, n.utf8ChunkDecode)(t);
        return JSON.parse(r);
      }),
        (t.stringifyToken = function (e) {
          if (void 0 === e) return "";
          const t = JSON.stringify(e),
            r = (0, n.utf8ChunkEncode)(t);
          return o.encode(r);
        });
    },
    674752: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeAutoLoginService =
          t.loadMPFromStorageToStore =
          t.shouldTrigger =
          t.createMasterPasswordCipheringKey =
          t.AUTOLOGIN_EXPIRATION_DATE =
            void 0);
      const n = r(926625),
        o = r(869530),
        a = r(316038),
        i = r(816356),
        s = r(500053),
        c = r(670252),
        p = r(795623),
        u = r(656915),
        d = r(46298),
        l = r(416593),
        y = r(361740),
        g = r(798226),
        m = r(693564);
      (t.AUTOLOGIN_EXPIRATION_DATE = 1209600), (t.createMasterPasswordCipheringKey = () => (0, o.generateAESKey)());
      const h = () => {
        try {
          const e = (() => {
            const e = (0, m.getWindowLocalStorage)();
            return n.env.isBrowserEnvironment() && e ? parseInt(e["QA.EXTENSION-1474.expirationTimeSeconds"], 10) : void 0;
          })();
          if (Number.isSafeInteger(e) && e < t.AUTOLOGIN_EXPIRATION_DATE) return e;
        } catch (e) {
          (0, p.logError)(e);
        }
        return t.AUTOLOGIN_EXPIRATION_DATE;
      };
      (t.shouldTrigger = async (e, t, r) => {
        try {
          if ((t.setInstance(r), e.isAuthenticated())) return !1;
          if (!(await (0, y.hasSessionKeysInStorage)(t))) return !1;
          await (0, y.loadSessionKeysToStore)(e, t);
          const n = (0, u.sessionKeysSelector)(e.getState());
          return !!(0, y.areSessionKeysValid)(n) && t.getInstance().doesMasterPasswordExist();
        } catch (e) {
          if (e.message !== y.RememberMeErrorCode.EMPTY_SESSION_KEYS) {
            const t = new Error(`[Autologin] - shouldTrigger: ${e}`);
            (0, c.sendExceptionLog)({ error: t }), (0, p.logError)(e);
          }
          return !1;
        }
      }),
        (t.loadMPFromStorageToStore = async (e, t, r, n) => {
          const o = await (0, d.getMasterPasswordCipheringKey)(e, n);
          if ((0, d.isApiError)(o)) throw new Error(o.message);
          t.setInstance({ raw: o.rememberMasterPasswordCipheringKey }, "");
          const a = await r.getInstance().getMasterPassword();
          e.dispatch((0, i.updateMasterPassword)(a));
        }),
        (t.makeAutoLoginService = (e) => ({
          initialize: () =>
            (async (e) => {
              try {
                const { storeService: r, localStorageService: n } = e;
                if (!r.isAuthenticated()) throw new Error(y.RememberMeErrorCode.USER_NOT_AUTHENTICATED);
                const o = r.getState(),
                  c = (0, u.deviceKeysSelector)(o),
                  p = (0, u.ukiSelector)(o),
                  m = (0, u.sessionKeysSelector)(o),
                  f = (0, l.userLoginSelector)(o);
                if (!c || !p) throw new Error(y.RememberMeErrorCode.EMPTY_DEVICE_KEYS);
                if ((0, y.areSessionKeysValid)(m)) return;
                const S = await (0, t.createMasterPasswordCipheringKey)(),
                  T = (0, a.bufferToBase64)(S),
                  A = await (0, d.initRememberMasterPassword)(r, f, { rememberMasterPasswordCipheringKey: T });
                if ((0, d.isApiError)(A)) throw new Error(A.code);
                const v = (0, s.getUnixTimestamp)() + h(),
                  E = { accessKey: A.sessionAccessKey, secretKey: A.sessionSecretKey, expirationTimeSeconds: v };
                r.dispatch((0, i.loadSessionKeys)(E)),
                  await n.getInstance().storeAuthenticationKeys(E),
                  e.autoLoginEncryptorService.setInstance({ raw: null, buffer: S }, "");
                const _ = (0, l.masterPasswordSelector)(o);
                await n.getInstance().storeMasterPassword(_),
                  await (0, y.persistLocalAccountRememberMeType)(r, "autologin"),
                  r.dispatch((0, g.setRememberMeTypeAction)("autologin"));
              } catch (e) {
                const t = new Error(`[Autologin] - initialize: ${e}`);
                (0, c.sendExceptionLog)({ error: t }), (0, p.logError)(t);
              }
            })(e),
          process: (r) =>
            (async (e, r) => {
              try {
                const { storeService: n, autoLoginEncryptorService: o, localStorageService: a } = e;
                if (!(await (0, t.shouldTrigger)(n, a, r))) return;
                return await (0, t.loadMPFromStorageToStore)(n, o, a, r);
              } catch (e) {
                const t = new Error(`[Autologin] - processAutoLogin: ${e}`);
                (0, c.sendExceptionLog)({ error: t }), (0, p.logError)(t);
              }
            })(e, r),
          shouldTrigger: (r) => (0, t.shouldTrigger)(e.storeService, e.localStorageService, r)
        }));
    },
    893990: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeWebAuthnAuthenticationService = t.shouldTrigger = void 0);
      const n = r(316038),
        o = r(795623),
        a = r(869530),
        i = r(656915),
        s = r(46298),
        c = r(416593),
        p = r(816356),
        u = r(670252),
        d = r(164910),
        l = r(361740),
        y = r(798226);
      (t.shouldTrigger = async (e, t, r) => {
        try {
          if ((t.setInstance(r), (0, c.isAuthenticatedSelector)(e.getState()))) return !1;
          if (!(await (0, l.hasSessionKeysInStorage)(t))) return !1;
          await (0, l.loadSessionKeysToStore)(e, t);
          const n = (0, i.sessionKeysSelector)(e.getState());
          return !!(0, l.areSessionKeysValid)(n) && t.getInstance().doesMasterPasswordExist();
        } catch (e) {
          if (e.message !== l.RememberMeErrorCode.EMPTY_SESSION_KEYS) {
            const t = new Error(`[WebAuthnAuthentication] - shouldTrigger: ${e}`);
            (0, u.sendExceptionLog)({ error: t }), (0, o.logError)(t);
          }
          return !1;
        }
      }),
        (t.makeWebAuthnAuthenticationService = (e) => ({
          initialize: (t) =>
            (async (e, t) => {
              try {
                const { storeService: r, localStorageService: o, webAuthnAuthenticationEncryptorService: i } = e,
                  u = r.getState(),
                  g = (0, c.userLoginSelector)(u),
                  m = await (0, a.generate64BytesKey)(),
                  h = (0, n.bufferToBase64)(m),
                  f = atob(h),
                  S = await (0, s.completeRememberMeRegistration)(r, g, { masterPasswordEncryptionKey: h, authenticator: t });
                if ((0, s.isApiError)(S)) throw new Error(S.code);
                const T = {
                  accessKey: S.sessionAccessKey,
                  secretKey: S.sessionSecretKey,
                  expirationTimeSeconds: S.sessionExpirationDateUnix
                };
                r.dispatch((0, p.loadSessionKeys)(T)), await o.getInstance().storeAuthenticationKeys(T);
                const A = "",
                  v = (0, d.getNoDerivationCryptoConfig)();
                i.setInstance({ raw: f }, A, v);
                const E = (0, c.masterPasswordSelector)(u);
                return (
                  await o.getInstance().storeWebAuthnMasterPassword(E),
                  await (0, l.persistLocalAccountRememberMeType)(r, "webauthn"),
                  r.dispatch((0, y.setRememberMeTypeAction)("webauthn")),
                  !0
                );
              } catch (e) {
                const t = new Error(`[WebAuthnAuthentication] - initialize: ${e}`);
                return (0, u.sendExceptionLog)({ error: t }), (0, o.logError)(t), !1;
              }
            })(e, t),
          process: (t, r) =>
            (async (e, t, r) => {
              try {
                const { storeService: n, webAuthnAuthenticationEncryptorService: o, localStorageService: a } = e,
                  i = await (0, s.completeRememberMeOpenSession)(n, t, { authenticator: r });
                if ((0, s.isApiError)(i)) throw new Error(i.message);
                const c = "",
                  u = (0, d.getNoDerivationCryptoConfig)(),
                  l = i.masterPasswordEncryptionKey,
                  y = atob(l);
                o.setInstance({ raw: y }, c, u);
                const g = await a.getInstance().getWebAuthnMasterPassword();
                n.dispatch((0, p.updateMasterPassword)(g));
              } catch (e) {
                const t = new Error(`[WebAuthnAuthentication] - processWebAuthnAuthentication: ${e}`);
                (0, u.sendExceptionLog)({ error: t }), (0, o.logError)(t);
              }
            })(e, t, r),
          shouldTrigger: (r) => (0, t.shouldTrigger)(e.storeService, e.localStorageService, r),
          deactivate: (t) =>
            (async (e, t) => {
              const { storeService: r, localStorageService: n } = e,
                o = (0, i.deviceKeysSelector)(r.getState());
              if (!o) return !1;
              const a = await (0, s.deactivateRememberMe)(r, t, { deviceAccessKey: o.accessKey });
              return (
                !(0, s.isApiError)(a) &&
                (await n.getInstance().cleanAuthenticationKey(),
                await (0, l.persistLocalAccountRememberMeType)(r, "disabled"),
                r.dispatch((0, y.setRememberMeTypeAction)("disabled")),
                !0)
              );
            })(e, t)
        }));
    },
    361740: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.areSessionKeysValid =
          t.loadSessionKeysToStore =
          t.hasSessionKeysInStorage =
          t.shouldAskMasterPassword =
          t.cleanRememberMeStorageData =
          t.getLocalAccountRememberMeType =
          t.persistLocalAccountRememberMeType =
          t.RememberMeErrorCode =
            void 0);
      const n = r(802246),
        o = r(963739),
        a = r(25576),
        i = r(501860),
        s = r(816356),
        c = r(500053),
        p = r(416593),
        u = r(46298),
        d = r(656915),
        l = r(392263),
        y = r(670252),
        g = r(795623);
      var m;
      !(function (e) {
        (e.USER_NOT_AUTHENTICATED = "USER_NOT_AUTHENTICATED"),
          (e.EMPTY_DEVICE_KEYS = "EMPTY_DEVICE_KEYS"),
          (e.EMPTY_SESSION_KEYS = "EMPTY_SESSION_KEYS");
      })((m = t.RememberMeErrorCode || (t.RememberMeErrorCode = {}))),
        (t.persistLocalAccountRememberMeType = async (e, t) => {
          const { login: r, persistData: o } = e.getAccountInfo();
          o === a.PersistData.PERSIST_DATA_YES && (await (0, n.storeUserPublicSetting)(r, "rememberMeType", t));
        }),
        (t.getLocalAccountRememberMeType = (e) => (0, n.getUserPublicSetting)(e, "rememberMeType")),
        (t.cleanRememberMeStorageData = async (e, r) => {
          const n = (0, p.userLoginSelector)(e.getState()),
            a = [
              (0, o.removeData)(r, n, "authenticationKeys"),
              (0, o.removeData)(r, n, "registry"),
              (0, t.persistLocalAccountRememberMeType)(e, "disabled")
            ];
          if ("disabled" !== (0, d.rememberMeTypeSelector)(e.getState())) {
            const t = new Promise((t) => {
              (async (e, t) => {
                const r = (0, d.deviceKeysSelector)(e.getState());
                r && (await (0, u.deactivateRememberMe)(e, t, { deviceAccessKey: r.accessKey }));
              })(e, n)
                .then(t)
                .catch((e) => {
                  const r = l.CarbonError.fromAnyError(e).addContextInfo("RememberMe", "cleanRememberMeStorageData");
                  (0, g.logError)({ message: "Error when deactivating remember me server side" }),
                    (0, y.sendExceptionLog)({ error: r }),
                    t();
                });
            });
            a.push(t);
          }
          await Promise.all(a);
        }),
        (t.shouldAskMasterPassword = (e) => {
          const r = (0, t.getLocalAccountRememberMeType)(e);
          if (!["autologin", "webauthn"].includes(r)) return !1;
          const o = (0, n.getUserPublicSetting)(e, "lastMasterPasswordOpenSessionTimestamp") || void 0;
          return o ? Date.now() - o > 12096e5 : void 0;
        }),
        (t.hasSessionKeysInStorage = async (e) => await e.getInstance().doesAuthenticationKeysExist()),
        (t.loadSessionKeysToStore = async (e, r) => {
          try {
            if (!(0, t.hasSessionKeysInStorage)(r)) throw new Error(m.EMPTY_SESSION_KEYS);
            const n = await r.getInstance().getAuthenticationKeys();
            e.dispatch((0, s.loadSessionKeys)(n));
          } catch (e) {
            throw (e.message.indexOf(i.DATA_TAMPERED_ERROR) > -1 && r.getInstance().cleanAuthenticationKey(), e);
          }
        }),
        (t.areSessionKeysValid = (e) => e?.expirationTimeSeconds > (0, c.getUnixTimestamp)());
    },
    331937: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.restoreLastAuthenticatedUser = void 0);
      const n = r(795623),
        o = r(188610),
        a = r(670252),
        i = r(409344),
        s = r(252968),
        c = r(235924),
        p = r(578759);
      t.restoreLastAuthenticatedUser = async function (e, t) {
        try {
          const { applicationModulesAccess: r } = e,
            n = t.find((e) => e.isLastSuccessfulLogin);
          if (!n || n.hasLoginOtp) return;
          if (e.storeService.getState().userSession.ssoSettings.ssoUser) return;
          const a = n.login,
            u = e.storeService.getState().authentication.localUsers;
          if (void 0 !== u[a] && u[a].ssoActivatedUser)
            return void (
              (0, p.disableAutoSSOLoginSelector)(e.storeService.getState()) ||
              (e.storeService.dispatch((0, c.updateLoginStepInfoLogin)(a)),
              "sso" === n.rememberMeType && r.createClients().authenticationFlow.commands.initiateAutologinWithSSO({ login: a ?? "" }))
            );
          if ("webauthn" === n.rememberMeType)
            return void (function ({ storeService: e }) {
              try {
                document.featurePolicy.features().includes("publickey-credentials-get") &&
                  e.dispatch((0, i.reactivationStatusUpdated)(s.ReactivationStatus.WEBAUTHN));
              } catch (t) {
                e.dispatch((0, i.reactivationStatusUpdated)(s.ReactivationStatus.CLASSIC));
              }
            })(e);
          const d = await e.autoLoginService.shouldTrigger(a),
            l = (0, o.makeLoginController)(e);
          if (!d) return void l.openSession(a);
          await e.autoLoginService.process(a);
          const y = e.storeService.getUserSession().masterPassword;
          if (!y) return;
          await l.openSessionWithMasterPassword(a, y, { triggeredByRememberMeType: "autologin" });
        } catch (e) {
          const t = `[index] - restoreLastAuthenticatedUser: ${e}`,
            r = new Error(t);
          (0, n.logError)({ message: t, details: { error: r } }), (0, a.sendExceptionLog)({ error: r });
        }
      };
    },
    498416: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeLocalStorageService = void 0);
      const n = r(963739);
      t.makeLocalStorageService = (e) => {
        let t = null;
        return {
          setInstance: (r) => {
            t = (0, n.makeUserLocalDataService)(e, r);
          },
          getInstance: () => {
            if (!t) throw new Error("makeLocalStorageService: You must call setInstance(login: string) before getting the instance");
            return t;
          }
        };
      };
    },
    963739: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeUserLocalDataService =
          t.deleteAllLocalUserData =
          t.isDataStored =
          t.removeData =
          t.getStorageDebugKey =
          t.getStorageKey =
          t.STORAGE_VERSION =
          t.StoredUserDataTypeEnum =
            void 0);
      const n = r(453576),
        o = r(795623),
        a = r(441265),
        i = r(316038),
        s = r(416593),
        c = r(319695),
        p = r(956668),
        u = r(493513);
      (t.StoredUserDataTypeEnum = [
        "abTests",
        "authentication",
        "authenticationKeys",
        "eventStore",
        "health",
        "healthWasComputed",
        "icons",
        "localDataBackupLastLoginSuccessful",
        "localDataBackupTmp",
        "localKey",
        "localSettings",
        "notificationsStatus",
        "personalData",
        "personalSettings",
        "recoveryData",
        "recoveryLocalKey",
        "recoverySessionCredential",
        "registry",
        "remoteFileContent",
        "remoteFileMeta",
        "sharingData",
        "sharingSync",
        "teamAdminData",
        "userActivity",
        "vaultReport",
        "analyticsIds",
        "userAutofillCorrections",
        "userAutofillCorrectionsMigrated"
      ]),
        (t.STORAGE_VERSION = "v1"),
        (t.getStorageKey = (e, r, n = t.STORAGE_VERSION) => `${e}.${r}.${n}`),
        (t.getStorageDebugKey = (e, r, n = t.STORAGE_VERSION) => (0, t.getStorageKey)(e, r, n) + ".clear");
      const d = (e, t) => `${e}.${t}`,
        l = async (e, t, r) => {
          const n = await e.getLocalStorage().readItem(r);
          if ("string" != typeof n || 0 === n.length) throw new Error(`value ${t} undefined`);
          return n;
        },
        y = async (e, r, a, s) => {
          const c = r.getLocalStorage(),
            y = (0, t.getStorageKey)(a, s);
          if (await c.itemExists(y))
            return (async (e, t, r, n) => {
              const o = await l(t, r, n),
                a = await e.getInstance().decrypt(o),
                i = (0, p.inflateUtf16)(a);
              return JSON.parse(i);
            })(e, r, s, y);
          const g = d(a, s);
          if (await c.itemExists(g))
            return (async (e, t, r, a) => {
              const s = await l(t, r, a),
                c = await e.getInstance().decrypt(s),
                d = (0, p.deflatedUtf8ToUtf16)(c, { skipUtf8Decoding: !0 });
              if (0 === d.length) throw new Error(n.AuthenticationCode[n.AuthenticationCode.WRONG_PASSWORD]);
              const y = u.decode(d);
              try {
                const e = (0, i.utf8ChunkDecode)(y);
                return JSON.parse(e);
              } catch (e) {
                return o.default.log(e), y;
              }
            })(e, r, s, g);
          const m = new Error("value " + s + " undefined");
          throw (o.default.error(m), m);
        },
        g = async (e, r, n, i, s) => {
          try {
            const o = e.getLocalStorage(),
              c = (0, t.getStorageKey)(r, i);
            if ((await o.writeItem(c, n), (0, a.isInternalTestUser)(r) && s)) {
              const n = (0, t.getStorageDebugKey)(r, i);
              await e.getLocalStorage().writeItem(n, s);
            }
          } catch (e) {
            const t = new Error(`[storeData] failed for dataType: ${i} with error: ${e}`);
            throw (o.default.error(t), t);
          }
        },
        m = async (e, t, r, n, o) => {
          const a = JSON.stringify(n),
            i = (0, p.deflateUtf16)(a),
            s = await e.getInstance().encrypt(i);
          await g(t, r, s, o, n);
        };
      (t.removeData = async (e, r, n) => {
        const o = (0, t.getStorageKey)(r, n),
          i = d(r, n),
          s = (0, t.getStorageDebugKey)(r, n),
          c = ((e, t) => d(e, t) + ".clear")(r, n),
          p = e.getLocalStorage(),
          u = [p.removeItem(o), p.removeItem(i), ...((0, a.isInternalTestUser)(r) ? [p.removeItem(s), p.removeItem(c)] : [])];
        await Promise.all(u);
      }),
        (t.isDataStored = async (e, r, n) => {
          const o = e.getLocalStorage(),
            a = (0, t.getStorageKey)(r, n);
          if (await o.itemExists(a)) return !0;
          const i = d(r, n);
          return await o.itemExists(i);
        }),
        (t.deleteAllLocalUserData = async function (e, r, o) {
          const a = o.trim();
          await Promise.all(
            [...t.StoredUserDataTypeEnum, ...n.FileNamesList].map(async (r) => {
              await (0, t.removeData)(e, a, r);
            })
          ),
            await (async function (e, t) {
              await e.commands.mitigationDeleteGrapheneUserData({ login: t });
            })(r.createClients()["carbon-legacy"], o);
        }),
        (t.makeUserLocalDataService = (e, r) => {
          const a = () => {
            const { storeService: t, masterPasswordEncryptorService: r, localDataEncryptorService: n } = e;
            return (0, s.isLocalKeyActivatedSelector)(t.getState()) ? n : r;
          };
          return {
            storePersonalData: (t) => m(a(), e.storageService, r, t, "personalData"),
            getPersonalData: () => (o.default.log("Load Personal Data"), y(a(), e.storageService, r, "personalData")),
            doesPersonalDataExist: () => (
              o.default.log("Check Personal Data existence"), (0, t.isDataStored)(e.storageService, r, "personalData")
            ),
            storeLocalSettings: (t) => m(a(), e.storageService, r, t, "localSettings"),
            getLocalSettings: () => (o.default.log("Load Local Settings"), y(a(), e.storageService, r, "localSettings")),
            storePersonalSettings: (t) => m(a(), e.storageService, r, t, "personalSettings"),
            getPersonalSettings: () => (o.default.log("Load Personal Settings"), y(a(), e.storageService, r, "personalSettings")),
            storeNotificationsStatus: (t) => m(a(), e.storageService, r, t, "notificationsStatus"),
            doesNotificationStatusExist: () => (
              o.default.log("Check Notification Status existence"), (0, t.isDataStored)(e.storageService, r, "notificationsStatus")
            ),
            getNotificationStatus: () => (o.default.log("Load Notifications Status"), y(a(), e.storageService, r, "notificationsStatus")),
            storeSharingData: (t) => m(a(), e.storageService, r, t, "sharingData"),
            getSharingData: () => (o.default.log("Load Sharing Data"), y(a(), e.storageService, r, "sharingData")),
            storeSharingSync: (t) => m(a(), e.storageService, r, t, "sharingSync"),
            getSharingSync: () => (o.default.log("Load Sharing Sync"), y(a(), e.storageService, r, "sharingSync")),
            doesSharingSyncExist: () => (0, t.isDataStored)(e.storageService, r, "sharingSync"),
            storeTeamAdminData: (t) => m(a(), e.storageService, r, t, "teamAdminData"),
            getTeamAdminData: () => (o.default.log("Load Team Admin Data"), y(a(), e.storageService, r, "teamAdminData")),
            storeAuthenticationKeys: (t) => m(e.authorizationKeysEncryptorService, e.storageService, r, t, "authenticationKeys"),
            getAuthenticationKeys: () => (
              o.default.log("Load Authentication Keys"),
              y(e.authorizationKeysEncryptorService, e.storageService, r, "authenticationKeys").then((e) => e)
            ),
            doesAuthenticationKeysExist: () => (
              o.default.log("Check Authentication Keys existence"), (0, t.isDataStored)(e.storageService, r, "authenticationKeys")
            ),
            cleanAuthenticationKey: () => (0, t.removeData)(e.storageService, r, "authenticationKeys"),
            storeAuthenticationData: (t) => m(a(), e.storageService, r, t, "authentication"),
            getAuthenticationData: () => y(a(), e.storageService, r, "authentication"),
            hasAuthenticationData: () => (0, t.isDataStored)(e.storageService, r, "authentication"),
            doesMasterPasswordExist: () => (
              o.default.log("Check Master Password Keys existence"), (0, t.isDataStored)(e.storageService, r, "registry")
            ),
            getMasterPassword: () => (
              o.default.log("Load Master Password via Auto login"), y(e.autoLoginEncryptorService, e.storageService, r, "registry")
            ),
            storeMasterPassword: (t) => (
              o.default.log("Store Master Password via Auto login"), m(e.autoLoginEncryptorService, e.storageService, r, t, "registry")
            ),
            getWebAuthnMasterPassword: () => (
              o.default.log("Load Master Password via WebAuthn login"),
              y(e.webAuthnAuthenticationEncryptorService, e.storageService, r, "registry")
            ),
            storeWebAuthnMasterPassword: (t) => (
              o.default.log("Store Master Password via WebAuthn login"),
              m(e.webAuthnAuthenticationEncryptorService, e.storageService, r, t, "registry")
            ),
            getLocalKey: () => y(e.masterPasswordEncryptorService, e.storageService, r, "localKey"),
            doesLocalKeyExist: () => (0, t.isDataStored)(e.storageService, r, "localKey"),
            storeLocalKey: (t) => m(e.masterPasswordEncryptorService, e.storageService, r, t, "localKey"),
            doesLocalDataExist: () =>
              Promise.all(
                ["localSettings", "personalData", "personalSettings"].map((n) => (0, t.isDataStored)(e.storageService, r, n))
              ).then((e) => e.every((e) => e)),
            storeUserABTests: (t) => m(a(), e.storageService, r, t, "abTests"),
            getUserABTests: () => (o.default.log("Load User AB Tests"), y(a(), e.storageService, r, "abTests")),
            storeIcons: async (t) => {
              const n = (0, c.iconsToStorage)(t);
              return m(a(), e.storageService, r, n, "icons");
            },
            getIcons: async () => {
              if (!(await (0, t.isDataStored)(e.storageService, r, "icons"))) return null;
              const n = await y(a(), e.storageService, r, "icons");
              return (0, c.iconsFromStorage)(n);
            },
            doesUserActivityExist: () => (0, t.isDataStored)(e.storageService, r, "userActivity"),
            storeUserActivity: () => m(a(), e.storageService, r, {}, "userActivity"),
            getUserActivity: () => y(a(), e.storageService, r, "userActivity"),
            doesVaultReportExist: () => (0, t.isDataStored)(e.storageService, r, "vaultReport"),
            storeVaultReport: (t) => m(a(), e.storageService, r, t, "vaultReport"),
            getVaultReport: () => y(a(), e.storageService, r, "vaultReport"),
            storeEventStore: (t) => m(a(), e.storageService, r, t, "eventStore"),
            getEventStore: async () =>
              (await (0, t.isDataStored)(e.storageService, r, "eventStore")) ? y(a(), e.storageService, r, "eventStore") : null,
            storeRecoveryLocalKey: async (t) => {
              const n = e.storageService;
              return g(n, r, t, "recoveryLocalKey");
            },
            getRecoveryLocalKey: async () => {
              const n = (0, t.getStorageKey)(r, "recoveryLocalKey");
              return await l(e.storageService, "recoveryLocalKey", n);
            },
            storeRecoverySessionCredential: (t) => m(a(), e.storageService, r, t, "recoverySessionCredential"),
            getRecoverySessionCredential: async () => y(a(), e.storageService, r, "recoverySessionCredential"),
            doesRecoverySessionCredentialExist: async () => (0, t.isDataStored)(e.storageService, r, "recoverySessionCredential"),
            cleanRecoverySetupData: async () => {
              const n = e.storageService;
              return await (0, t.removeData)(n, r, "recoverySessionCredential"), await (0, t.removeData)(n, r, "recoveryLocalKey");
            },
            doesRecoveryLocalKeyExist: async () => (0, t.isDataStored)(e.storageService, r, "recoveryLocalKey"),
            cleanRecoveryData: async () => {
              const n = e.storageService;
              return await (0, t.removeData)(n, r, "recoveryData");
            },
            storeRecoveryData: async (t) => {
              const n = e.storageService;
              return await g(n, r, t, "recoveryData");
            },
            getRecoveryData: async () => {
              const n = (0, t.getStorageKey)(r, "recoveryData");
              return await l(e.storageService, "recoveryData", n);
            },
            doesRecoveryDataExist: () => (0, t.isDataStored)(e.storageService, r, "recoveryData"),
            storeAnalyticsIds: (t) => m(a(), e.storageService, r, t, "analyticsIds"),
            getAnalyticsIds: () => ((0, o.log)({ message: "Load Analytics IDs" }), y(a(), e.storageService, r, "analyticsIds")),
            doesAnalyticsIdsExist: () => (
              (0, o.log)({ message: "Check Analytics IDs existence" }), (0, t.isDataStored)(e.storageService, r, "analyticsIds")
            ),
            storeRemoteFileContent: (t, n) => m(a(), e.storageService, r, n, t),
            storeRemoteFileMeta: (t) => m(a(), e.storageService, r, t, "remoteFileMeta"),
            getRemoteFileMeta: () => y(a(), e.storageService, r, "remoteFileMeta"),
            getRemoteFileContent: (t) => y(a(), e.storageService, r, t),
            cleanAllRemoteFiles: async () => {
              const o = e.storageService;
              await (0, t.removeData)(o, r, "remoteFileMeta");
              for (const e of n.FileNamesList) await (0, t.removeData)(o, r, e);
            },
            cleanSingleFileStorage: async (n) => {
              const o = e.storageService;
              await (0, t.removeData)(o, r, n);
              const i = await y(a(), e.storageService, r, "remoteFileMeta");
              return delete i[n], m(a(), e.storageService, r, i, "remoteFileMeta");
            },
            isRemoteFileMetaDataExist: () => (0, t.isDataStored)(e.storageService, r, "remoteFileMeta"),
            isRemoteFileContentExist: (n) => (0, t.isDataStored)(e.storageService, r, n)
          };
        });
    },
    118539: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeStorageService = t.CarbonLocalStorage = void 0);
      const n = r(795623);
      (t.CarbonLocalStorage = class {
        constructor(e) {
          this._storage = e;
        }
        itemExists(e) {
          return this._storage.itemExists(e);
        }
        readItem(e) {
          return this._storage.readItem(e);
        }
        async writeItem(e, t) {
          const r = await this.backupItem(e);
          try {
            await this._storage.writeItem(e, t), r && (await r.clean());
          } catch (e) {
            n.Debugger.error("CarbonLocalStorage:writeItem error:", e),
              r
                ? (n.Debugger.error("CarbonLocalStorage couldn't save data, reverting to backup version"), await r.restoreAndClean())
                : n.Debugger.error("CarbonLocalStorage couldn't save data and no backup version to restore");
          }
        }
        removeItem(e) {
          return this._storage.removeItem(e);
        }
        async getSuitableBackupKey(e) {
          const t = (t) => e + "." + t;
          let r = 1;
          for (; await this._storage.itemExists(t(r)); ) r++;
          return t(r);
        }
        async backupItem(e) {
          if (!(await this._storage.itemExists(e))) return null;
          const t = await this.getSuitableBackupKey(e),
            r = await this._storage.readItem(e);
          await this._storage.writeItem(t, r);
          const n = this._storage;
          async function o() {
            return await n.removeItem(t);
          }
          return {
            clean: o,
            restoreAndClean: async function () {
              const r = await n.readItem(t);
              return await n.writeItem(e, r), await o();
            }
          };
        }
      }),
        (t.makeStorageService = () => {
          let e = null;
          return {
            setInstance: (t) => {
              e = t;
            },
            getLocalStorage: () => {
              if (!e) throw new Error("makeStorageService: You must call setInstance(instance: AsyncStorage) before getting the instance");
              return e;
            }
          };
        });
    },
    597601: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.normalizeString = void 0),
        (t.normalizeString = (e) =>
          e
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase());
    },
    45570: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getStyxApiCredentials = void 0);
      const n = r(145956),
        o = r(239261);
      t.getStyxApiCredentials = function (e, t) {
        if (t.authenticationType !== n.ApiAuthType.App) return { type: n.ApiAuthType.None };
        const r = { appKeys: (0, o.styxKeysSelector)(e) };
        return { type: n.ApiAuthType.App, ...r };
      };
    },
    676330: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getApiClientAgentHeader = t.getMakeStyxApiRequest = t.getEventsPayload = void 0);
      const n = r(656915),
        o = r(755730),
        a = r(145956),
        i = r(500053),
        s = r(348749),
        c = r(314656),
        p = r(17825),
        u = r(45570),
        d = r(441265),
        l = r(130913),
        y = r(859600),
        g = r(878577);
      function m(e) {
        return JSON.stringify({ platform: e.platformName, version: e.appVersion });
      }
      (t.getEventsPayload = function (e) {
        return e.map((e) => JSON.stringify(e)).join("\n");
      }),
        (t.getMakeStyxApiRequest = function (e, t, r) {
          return async (h, f) => {
            const S = { login: "", teamUuid: "", payload: "", ...(f || {}) },
              T = (0, o.getMethodParams)(r, S.payload),
              A = (0, o.getAuthParams)(t, { login: S.login, teamUuid: S.teamUuid }),
              v = "POST" === T.method ? T.payload : "",
              E = (0, n.dashlaneServerDeltaTimestampSelector)(h.getState()) || 0,
              _ = Math.round((0, i.getUnixTimestamp)() - E),
              b = (0, u.getStyxApiCredentials)(h.getState(), A),
              C = (0, n.platformInfoSelector)(h.getState()),
              D = { "Content-Type": "application/x-jsonlines", "X-TIMESTAMP": _.toString() },
              P = { "dashlane-client-agent": m(C) },
              O = (function (e) {
                const t = e.getAccountInfo().login,
                  r = t && (0, d.isInternalTestUser)(t),
                  n = (0, l.applicationBuildTypeSelector)(e.getState()),
                  o = n === y.ApplicationBuildType.DEV || n === y.ApplicationBuildType.QA;
                return r || o;
              })(h);
            O && (D["X-DL-TEST"] = "true");
            const k = Object.keys(P),
              w = await (async function (e, t, r, o, s, c) {
                if (r.type === a.ApiAuthType.None) return {};
                const p = (0, n.dashlaneServerDeltaTimestampSelector)(e.getState()) || 0,
                  u = Math.round((0, i.getUnixTimestamp)() - p),
                  d = { pathname: t, method: "POST", rawBody: c, headers: o };
                return { Authorization: await (0, g.signRequest)({ request: d, timestamp: u, credentials: r, headersToSign: s }) };
              })(h, e, b, { ...P, ...D }, k, v),
              M = { ...P, ...w, ...D },
              R = `${s.config.DASHLANE_STYX_HOST_WITH_SCHEME}${e}`,
              { data: L } = await (function (e, t, r) {
                const n = { headers: r, validateStatus: o.validateStatus };
                switch (e.method) {
                  case a.ApiRequestMethod.GET:
                    return (0, c.get)(t, n);
                  case a.ApiRequestMethod.POST:
                    return (0, c.post)(t, e.payload, n);
                  default:
                    (0, p.assertUnreachable)(e);
                }
              })(T, R, M);
            return L;
          };
        }),
        (t.getApiClientAgentHeader = m);
    },
    172636: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.SendTokenStatus = t.makeWSAuthentication = void 0);
      const n = r(666646),
        o = "authentication";
      var a;
      function i(e) {
        if ("string" != typeof e) {
          const t = JSON.stringify(e);
          throw new Error(`unsupported_response - ${t}`);
        }
      }
      (t.makeWSAuthentication = () => ({
        askServerToSendToken: (e) =>
          (function (e) {
            return (0, n._makeRequest)(o, 7, "sendtoken", e, { responseType: "text" }).then((e) => {
              if ((i(e), void 0 === a[e])) throw new Error(`unknown_status - ${e}`);
              return a[e];
            });
          })(e),
        registerUki: (e) =>
          (function (e) {
            return (0, n._makeRequest)(o, 7, "registeruki", e, { responseType: "text" }).then((e) => {
              if ((i(e), "ERROR" === e)) throw new Error("Error: Failed to register the UKI");
              return e;
            });
          })(e),
        getTemporaryToken: (e) =>
          (function (e) {
            return (0, n._makeRequest)(o, 7, "getTemporaryToken", e).then((e) => (i(e.token), e.token));
          })(e),
        validity: (e) =>
          (function (e) {
            return (0, n._makeRequest)(o, 7, "validity", e, { responseType: "text" });
          })(e)
      })),
        (function (e) {
          (e[(e.ERROR = 0)] = "ERROR"),
            (e[(e.SUCCESS = 1)] = "SUCCESS"),
            (e[(e.OTP_NEEDED = 2)] = "OTP_NEEDED"),
            (e[(e.UNKNOWN_USER = 3)] = "UNKNOWN_USER");
        })((a = t.SendTokenStatus || (t.SendTokenStatus = {})));
    },
    332239: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeWSBackup = void 0);
      const n = r(666646),
        o = "backup";
      t.makeWSBackup = () => ({ latest: (e) => a(e), upload: (e) => i(e), unlock: (e) => s(e), erase: (e) => c(e) });
      const a = (e) => (0, n._makeRequest)(o, 12, "latest", Object.assign({}, e, { sharingTimestamp: 0 })),
        i = (e) => (0, n._makeRequest)(o, 12, "upload", e),
        s = (e) => (0, n._makeRequest)(o, 12, "unlock", e),
        c = (e) => (0, n._makeRequest)(o, 12, "erase", e);
    },
    633633: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeWSBreaches = void 0);
      const n = r(666646);
      t.makeWSBreaches = () => ({ get: (e) => (0, n._makeRequest)("breaches", 1, "get", e) });
    },
    205692: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeWSContactInfo = void 0);
      const n = r(666646);
      t.makeWSContactInfo = () => ({
        getContactInfo: (e) =>
          (function (e) {
            return (0, n._makeRequest)("contactinfos", 1, "get", { login: e.login, uki: e.uki });
          })(e)
      });
    },
    269376: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeWSCountry = void 0);
      const n = r(666646);
      t.makeWSCountry = () => ({
        getCurrentCountry: (e = {}) =>
          (function (e) {
            return (0, n._makeRequest)("country", 1, "get", e).then((e) => e.content);
          })(e)
      });
    },
    932868: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeWSDataLeaks = void 0);
      const n = r(428445),
        o = r(392263),
        a = r(820750),
        i = r(348749),
        s = "dataleak",
        c = 1;
      function p(e) {
        return d(s, c, "status", e);
      }
      function u(e) {
        return d(s, c, "leaks", e);
      }
      async function d(e, t, r, s) {
        const c = `${i.config.DASHLANE_WS_HOST_WITH_SCHEME}/${t}/${e}/${r}`,
          { data: p } = await (0, n.postDataToUrl)(c, s);
        return (function (e, t) {
          if (429 === t.code || (t.error && -32600 === t.error.code))
            throw new o.CarbonError(a.WSError, a.WSErrorCode.THROTTLED).addAdditionalInfo({ webService: e });
          return t;
        })(c, p);
      }
      t.makeWSDataLeaks = () => ({ status: p, leaks: u });
    },
    835595: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeWSDevices = void 0);
      const n = r(666646),
        o = "devices";
      t.makeWSDevices = () => ({ list: (e) => a(e), deactivate: (e) => i(e), changeName: (e) => s(e) });
      const a = (e) => (0, n._makeRequest)(o, 1, "list", { login: e.login, uki: e.uki }).then((e) => e.content),
        i = (e) => (0, n._makeRequest)(o, 1, "deactivate", { login: e.login, uki: e.uki, deviceId: e.deviceId }),
        s = (e) =>
          (0, n._makeRequest)(o, 1, "changename", { login: e.login, uki: e.uki, deviceId: e.deviceId, updatedName: e.updatedDeviceName });
    },
    820750: (e, t) => {
      var r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WSError = t.WSErrorMessages = t.WSErrorCode = void 0),
        (function (e) {
          (e[(e.THROTTLED = 0)] = "THROTTLED"), (e[(e.REQUEST_FAILED = 1)] = "REQUEST_FAILED");
        })((r = t.WSErrorCode || (t.WSErrorCode = {}))),
        (t.WSErrorMessages = { [r.THROTTLED]: "THROTTLED", [r.REQUEST_FAILED]: "WebService responded with error code in payload" }),
        (t.WSError = { codes: r, name: "WSError", messages: t.WSErrorMessages });
    },
    56776: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeWSIconCrawler = void 0);
      const n = r(666646);
      t.makeWSIconCrawler = () => ({ getIcons: o });
      const o = async (e) => (0, n._makeRequest)("iconcrawler", 2, "getIcons", { domainsInfo: e });
    },
    201577: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.NewCardToken = void 0);
      const n = r(666646);
      t.NewCardToken = function (e, t) {
        return (0, n._makeRequest)(t.name, t.version, "getNewCardToken", { login: e.login, uki: e.uki, teamId: e.teamId ?? null });
      };
    },
    787327: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeWSPremium = void 0);
      const n = r(666646),
        o = "premium";
      t.makeWSPremium = () => ({
        status: (e) =>
          (function (e) {
            return (0, n._makeRequest)(o, 3, "status", {
              login: e.login,
              uki: e.uki,
              billingInformation: e.billingInformation,
              spaces: e.spaces,
              autoRenewal: e.autoRenewal,
              familyInformation: e.familyInformation,
              previousPlan: e.previousPlan,
              needsAutoRenewalFailed: e.needsAutoRenewalFailed,
              teamInformation: !1,
              capabilities: !0
            }).then((e) => {
              if (!e.success) throw new Error("failed fetching premium status");
              return (
                e.hasOwnProperty("billingInformation") &&
                  (e.billingInformation = (function (e) {
                    if (e)
                      return {
                        cardExpirationYear: Number(e.card_exp_year),
                        cardExpirationMonth: Number(e.card_exp_month),
                        cardLast4Digits: Number(e.card_last4),
                        cardType: e.card_type
                      };
                  })(e.billingInformation)),
                e
              );
            });
          })(e),
        setAutoRenewal: (e) =>
          (function (e) {
            return (0, n._makeRequest)(o, 3, "setAutoRenewal", { login: e.login, uki: e.uki, enabled: e.enabled });
          })(e),
        updateCardToken: (e) =>
          (function (e) {
            return (0, n._makeRequest)(o, 3, "updateCardToken", {
              login: e.login,
              uki: e.uki,
              tokenId: e.tokenId,
              stripeAccount: e.stripeAccount
            });
          })(e),
        getABTestingVersionDetails: (e) =>
          (function (e) {
            return (0, n._makeRequest)(o, 3, "getABTestingVersionDetails", e);
          })(e),
        getSubscriptionCode: (e) =>
          (function ({ login: e, uki: t }) {
            return (0, n._makeRequest)(o, 3, "getSubscriptionCode", { login: e, uki: t });
          })(e)
      });
    },
    655898: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeWSQA = void 0);
      const n = r(666646);
      t.makeWSQA = () => ({
        tokens: (e) =>
          (function (e) {
            return (0, n._makeRequest)("qa", 1, "tokens", e);
          })(e)
      });
    },
    456692: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeWSRecovery = void 0);
      const n = r(666646),
        o = "recovery";
      t.makeWSRecovery = () => ({
        getSetupRequisites: (e) =>
          (async function (e) {
            return (0, n._makeRequest)(o, 1, "getSetupRequisites", e);
          })(e),
        setRecoveryClientKeys: (e) =>
          (async function (e) {
            return (0, n._makeRequest)(o, 1, "setRecoveryClientKeys", e);
          })(e),
        request: (e) =>
          (async function (e) {
            return (0, n._makeRequest)(o, 1, "request", e);
          })(e),
        getPendingRequests: (e) =>
          (async function (e) {
            const { content: t } = await (0, n._makeRequest)(o, 1, "getPendingRequests", e);
            return t;
          })(e),
        acceptRequest: (e) =>
          (async function (e) {
            return (0, n._makeRequest)(o, 1, "accept", e);
          })(e),
        refuseRequest: (e) =>
          (async function (e) {
            return (0, n._makeRequest)(o, 1, "refuse", e);
          })(e),
        cancelRequest: (e) =>
          (async function (e) {
            return (0, n._makeRequest)(o, 1, "cancel", e);
          })(e)
      });
    },
    290732: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeWSSecureFile = void 0);
      const n = r(666646),
        o = 1,
        a = "securefile";
      function i(e) {
        return (0, n._makeRequest)(a, o, "getDownloadLink", e);
      }
      function s(e) {
        return (0, n._makeRequest)(a, o, "delete", e);
      }
      function c(e) {
        return (0, n._makeRequest)(a, o, "getUploadLink", e);
      }
      function p(e) {
        return (0, n._makeRequest)(a, o, "commit", e);
      }
      t.makeWSSecureFile = () => ({ getDownloadLink: i, getUploadLink: c, commit: p, delete: s });
    },
    766696: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setTeamSettings = t.getTeamSettings = t.makeWSSettings = void 0);
      const n = r(666646),
        o = 1,
        a = "teamPlans";
      function i(e) {
        return (0, n._makeRequest)(a, o, "status", e);
      }
      function s(e) {
        return (0, n._makeRequest)(a, o, "editSettings", e);
      }
      (t.makeWSSettings = () => ({ getTeamSettings: (e) => i(e), setTeamSettings: (e) => s(e) })),
        (t.getTeamSettings = i),
        (t.setTeamSettings = s);
    },
    64528: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeSharingWS = t.get = void 0);
      const n = r(666646),
        o = 2,
        a = "sharing";
      function i(e, t, r) {
        const i = { login: e, uki: t, action: JSON.stringify(r) };
        return (0, n._makeRequest)(a, o, "get", i).then(({ content: e }) => e);
      }
      (t.get = i), (t.makeSharingWS = () => ({ get: (e, t, r) => i(e, t, r) }));
    },
    898892: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeItemWS = void 0);
      const n = r(666646);
      t.makeItemWS = () => ({
        updateItem: (e, t, r) =>
          (function (e, t, r) {
            const o = { login: e, uki: t, action: JSON.stringify(r) };
            return (0, n._makeRequest)("sharing", 2, "performItemGroupAction", o).then((e) => {
              const t = e.content,
                r = t.itemErrors;
              if (r && r.length > 0) throw new Error(r[0].message);
              return t;
            });
          })(e, t, r)
      });
    },
    663698: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeItemGroupWS = void 0);
      const n = r(666646),
        o = 2,
        a = "sharing",
        i = "performItemGroupAction";
      function s(e, t, r) {
        const s = { login: e, uki: t, action: JSON.stringify(r) };
        return (0, n._makeRequest)(a, o, i, s).then((e) => {
          const t = e.content,
            r = t.itemGroupErrors;
          if (r && r.length > 0) throw new Error(r[0].message);
          const { itemGroups: n, items: o } = t;
          return { itemGroups: n, items: o };
        });
      }
      t.makeItemGroupWS = () => ({
        createSpecialItemGroup: (e, t, r) => s(e, t, r).then(({ itemGroups: e }) => e && e[0]),
        createItemGroup: s,
        deleteGroup: (e, t, r) => s(e, t, r),
        addItems: (e, t, r) => s(e, t, r),
        updateItem: (e, t, r) => s(e, t, r),
        removeItems: (e, t, r) => s(e, t, r),
        acceptItemGroup: s,
        refuseItemGroup: s,
        inviteItemGroupMembers: s,
        revokeItemGroupMembers: s,
        updateItemGroupMembers: s
      });
    },
    152931: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeUserGroupWS = void 0);
      const n = r(666646),
        o = 1,
        a = "userGroup",
        i = "performUserGroupAction";
      function s(e, t, r) {
        const s = { login: e, uki: t, action: JSON.stringify(r) };
        return (0, n._makeRequest)(a, o, i, s).then((e) => {
          const { itemGroups: t, items: r, userGroupErrors: n, userGroups: o } = e.content;
          if (n && n.length > 0) throw new Error(n[0].message);
          return { itemGroups: t, items: r, userGroups: o };
        });
      }
      t.makeUserGroupWS = () => ({
        create: (e, t, r) => s(e, t, r),
        delete: (e, t, r) => s(e, t, r),
        rename: (e, t, r) => s(e, t, r),
        invite: (e, t, r) => s(e, t, r),
        revoke: (e, t, r) => s(e, t, r),
        update: (e, t, r) => s(e, t, r),
        accept: (e, t, r) => s(e, t, r),
        refuse: (e, t, r) => s(e, t, r)
      });
    },
    612832: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CheckChangePasswordStatus = t.makeWSStrongAuth = void 0);
      const n = r(666646),
        o = r(795623);
      var a;
      (t.makeWSStrongAuth = () => ({
        checkChangeMasterPassword: (e) =>
          (function ({ login: e, otp: t, deviceId: r }) {
            return (0, n._makeRequest)("strongauth", 3, "getServerKey", { login: e, otp: t, deviceID: r, isMxAware: !0 }).then((e) => {
              if ((o.default.log("checkChangeMasterPassword: " + (e ? JSON.stringify(e) : "response null")), !e || !e.message))
                throw new Error("Unknown response from server");
              if (void 0 === a[e.message]) throw new Error(`unknown_message - ${JSON.stringify(e)}`);
              return { status: a[e.message], content: e.content };
            });
          })(e)
      })),
        (function (e) {
          (e[(e.Unauthorized = 0)] = "Unauthorized"), (e[(e.OK = 1)] = "OK");
        })((a = t.CheckChangePasswordStatus || (t.CheckChangePasswordStatus = {})));
    },
    242883: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeWSTeamPlans = void 0);
      const n = r(666646),
        o = "teamPlans";
      t.makeWSTeamPlans = () => ({
        findUserGroups: (e) =>
          (function (e) {
            return (0, n._makeRequest)(o, 1, "findUserGroups", e);
          })(e),
        proposeMembers: (e) =>
          (function (e) {
            return (0, n._makeRequest)(o, 1, "proposeMembers", e);
          })(e),
        acceptTeam: (e) =>
          (function (e) {
            return (0, n._makeRequest)(o, 1, "acceptTeam", e);
          })(e),
        addTeamAdmin: (e) =>
          (function (e) {
            return (0, n._makeRequest)(o, 1, "addTeamCaptain", e);
          })(e),
        removeTeamAdmin: (e) =>
          (function (e) {
            return (0, n._makeRequest)(o, 1, "removeTeamCaptain", e);
          })(e),
        registerFreeTrial: (e) =>
          (function (e) {
            return (0, n._makeRequest)(o, 1, "registerFreeTrial", e);
          })(e),
        confirmFreeTrial: (e) =>
          (function (e) {
            return (0, n._makeRequest)(o, 1, "confirmFreeTrial", e);
          })(e),
        getDirectorySyncRequest: (e) =>
          (function (e) {
            return (0, n._makeRequest)(o, 1, "getDirectorySyncRequest", e);
          })(e),
        updateDirectorySyncRequestStatus: (e) =>
          (function (e) {
            return (0, n._makeRequest)(o, 1, "updateDirectorySyncRequestStatus", e);
          })(e),
        spaceDeleted: (e) =>
          (function (e) {
            return (0, n._makeRequest)(o, 1, "spaceDeleted", e);
          })(e)
      });
    },
    285870: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.create = t.makeWSUserActivity = void 0);
      const n = r(666646),
        o = "useractivity",
        a = 2;
      async function i(e) {
        return await (0, n._makeRequest)(o, a, "create", e);
      }
      (t.makeWSUserActivity = () => ({ create: i })), (t.create = i);
    },
    250141: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeWSUserAlias = void 0);
      const n = r(666646);
      t.makeWSUserAlias = () => ({
        findUsersByAliases: (e) =>
          (function (e) {
            return (0, n._makeRequest)("userAlias", 1, "findUsers", { login: e.login, uki: e.uki, aliases: e.aliases }).then(
              (e) => e.content
            );
          })(e)
      });
    },
    32607: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isWSResponseSuccess = void 0),
        (t.isWSResponseSuccess = function (e) {
          return 200 === e.code;
        });
    },
    889016: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeWSService = void 0);
      const n = r(172636),
        o = r(205692),
        a = r(269376),
        i = r(932868),
        s = r(835595),
        c = r(787327),
        p = r(456692),
        u = r(612832),
        d = r(242883),
        l = r(250141),
        y = r(766696),
        g = r(663698),
        m = r(655898),
        h = r(64528),
        f = r(332239),
        S = r(633633),
        T = r(152931),
        A = r(285870),
        v = r(56776),
        E = r(290732);
      t.makeWSService = () => ({
        authentication: (0, n.makeWSAuthentication)(),
        backup: (0, f.makeWSBackup)(),
        breaches: (0, S.makeWSBreaches)(),
        contactInfo: (0, o.makeWSContactInfo)(),
        country: (0, a.makeWSCountry)(),
        dataleaks: (0, i.makeWSDataLeaks)(),
        devices: (0, s.makeWSDevices)(),
        iconCrawler: (0, v.makeWSIconCrawler)(),
        itemGroup: (0, g.makeItemGroupWS)(),
        premium: (0, c.makeWSPremium)(),
        recovery: (0, p.makeWSRecovery)(),
        settings: (0, y.makeWSSettings)(),
        strongAuth: (0, u.makeWSStrongAuth)(),
        teamPlans: (0, d.makeWSTeamPlans)(),
        userAlias: (0, l.makeWSUserAlias)(),
        sharing: (0, h.makeSharingWS)(),
        userGroup: (0, T.makeUserGroupWS)(),
        qa: (0, m.makeWSQA)(),
        userActivity: (0, A.makeWSUserActivity)(),
        secureFile: (0, E.makeWSSecureFile)()
      });
    },
    666646: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t._makeRequest = t.WsError = void 0);
      const n = r(428445),
        o = r(392263),
        a = r(545800),
        i = r(820750),
        s = r(348749);
      !(function (e) {
        e[(e.THROTTLED = -999)] = "THROTTLED";
      })(t.WsError || (t.WsError = {})),
        (t._makeRequest = function (e, t, r, c, p) {
          const u = `${s.config.DASHLANE_WS_HOST_WITH_SCHEME}/${t}/${e}/${r}`,
            d = { ...p, headers: { ...(0, a.getCloudflareHeaders)() } };
          return (0, n.postDataToUrl)(u, c, d).then((e) => {
            const t = "string" == typeof e ? e : e.data;
            return (function (e, t) {
              if ("string" == typeof t) return t;
              if (429 === t.code || (t.error && -32600 === t.error.code))
                throw new o.CarbonError(i.WSError, i.WSErrorCode.THROTTLED).addAdditionalInfo({ webService: e });
              if (("code" in t && 200 !== t.code) || ("success" in t && !t.success) || ("error" in t && t.error))
                throw new o.CarbonError(i.WSError, i.WSErrorCode.REQUEST_FAILED).addAdditionalInfo({
                  webService: e,
                  message: t.message,
                  webServiceSubMessage: t.content?.message || t.content?.error || t.content,
                  code: t.code
                });
              return t;
            })(u, t);
          });
        });
    },
    661384: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.freeWorker = t.getWorker = t.getWorkerPath = t.setWorkerPath = t.setWorkersPath = void 0);
      const n = r(926625);
      let o = {};
      (t.setWorkersPath = function (e) {
        o = e;
      }),
        (t.setWorkerPath = function (e, t) {
          o[e] = t;
        }),
        (t.getWorkerPath = function (e) {
          return o[e];
        });
      const a = [],
        i = [];
      function s(e) {
        const t = new Worker(e);
        return a.push(t), t;
      }
      (t.getWorker = function (e) {
        return new Promise((t) => {
          a.length <
          (function () {
            const e = n.navigator.getNavigator();
            return e && e.hardwareConcurrency ? e.hardwareConcurrency : 4;
          })()
            ? t(s(e))
            : i.push({ resolve: t, path: e });
        });
      }),
        (t.freeWorker = function (e) {
          const t = a.indexOf(e);
          if (t < 0) console.error("freeWorker: trying to terminate a worker that does not exist");
          else if ((e.terminate(), a.splice(t, 1), i.length > 0)) {
            const { resolve: e, path: t } = i.shift();
            e(s(t));
          }
        });
    },
    81885: (e, t) => {
      var r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.KWXMLError = t.KWXMLErrorMessages = t.KWXMLErrorCode = void 0),
        (function (e) {
          e[(e.PARSING_FAILED = 0)] = "PARSING_FAILED";
        })((r = t.KWXMLErrorCode || (t.KWXMLErrorCode = {}))),
        (t.KWXMLErrorMessages = { [r.PARSING_FAILED]: "Failed to parse Dashlane XML" }),
        (t.KWXMLError = { codes: r, name: "KWXMLError", messages: t.KWXMLErrorMessages });
    },
    761797: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.findAllKWXMLElementsOfType = t.removeNamespace = t.getDashlaneXml = t.parseDashlaneXml = void 0);
      const n = r(401067),
        o = r(244015),
        a = r(392263),
        i = r(81885),
        s = r(954218),
        c = r(351104),
        p = r(263985);
      function u(e) {
        const t = {
          KWAuthentifiant: p.fixCredentialTypesFromStore,
          KWSecureNote: p.fixNoteTypesFromStore,
          KWSecurityBreach: p.fixBreachTypesFromStore,
          KWSettingsManagerApp: c.fixPersonalSettingTypes.fromStore
        };
        let r = (0, n.compose)(
          (0, n.reject)(n.isNil),
          (0, n.omit)(
            (0, n.defaultTo)([], { KWAuthentifiant: ["domainIcon"], KWSettingsManagerApp: ["kwType", "LastBackupTime", "Id"] }[e.kwType])
          )
        )(
          (function (e, t) {
            return (function t(r) {
              return (0, s.default)(r)
                ? Object.keys(r).reduce((o, a) => {
                    const i = e[a] || a,
                      c = r[a];
                    return Array.isArray(c) ? (o[i] = c.map((0, n.unary)(t))) : (0, s.default)(c) ? (o[i] = t(c)) : (o[i] = c), o;
                  }, {})
                : r;
            })(t);
          })({ kwType: "__type__" }, e)
        );
        return t[e.kwType] && (r = t[e.kwType](r)), r;
      }
      function d(e) {
        if (e.includes(":")) {
          const t = e.indexOf(":");
          return e.substring(t + 1, e.length);
        }
        return e;
      }
      (t.parseDashlaneXml = async function (e) {
        try {
          return await new Promise((t, r) => {
            (0, o.parseXml)((e, n) => (e ? r(e) : t(n)), e, { fixType: !1 });
          });
        } catch (e) {
          throw new a.CarbonError(i.KWXMLError, i.KWXMLErrorCode.PARSING_FAILED).addAdditionalInfo({ libError: `${e}` });
        }
      }),
        (t.getDashlaneXml = function (e) {
          const t = Array.isArray(e) ? (0, n.map)(u, e) : u(e);
          return (0, o.toXml)(t, { pretty: !1, allowEmpty: !0 });
        }),
        (t.removeNamespace = d),
        (t.findAllKWXMLElementsOfType = function e(t, r, n = []) {
          if ((d(t.__type__) === r && n.push(t), t.__children__ && t.__children__.length > 0))
            for (let a = 0; a < t.__children__.length; a++) {
              const i = t.__children__[a];
              (0, o.isKWXMLElement)(i) && e(i, r, n);
            }
          return n;
        });
    }
  }
]);
