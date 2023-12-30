"use strict";
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [3064],
  {
    94234: (e, t, s) => {
      s.d(t, { FZ: () => r, Ox: () => d, TF: () => h, cl: () => n, mX: () => o });
      var i = s(40671),
        a = s(40531);
      const r = {
          mixins: [s(85040).Z],
          data: () => ({ collection: new i.F() }),
          unreactive: () => ({ type: "", Model: null, dataService: null, names: {} }),
          computed: {
            emptyMessage() {
              return `No ${this.nameLCP} yet`;
            },
            data() {
              return this.collection.loaded || this.refresh(), this.collection;
            },
            visible() {
              return a.Fl[this.visibleSetting];
            }
          },
          created() {
            this.dataService || console.warn('No dataService property detected, please connect a dataService property in "unreactive"'),
              this.$e.$on(this.type + ":refresh", this.refresh),
              this.$e.$on("resetCollections", this.resetCollection);
          },
          destroyed() {
            this.$e.$off(this.type + ":refresh", this.refresh), this.$e.$off("resetCollections", this.resetCollection);
          },
          methods: {
            refresh({ queryParams: e, mode: t } = {}) {
              return new Promise((s, i) => {
                this.dataService.get({
                  queryParams: e,
                  mode: t,
                  success: (e) => {
                    this.addItemsToCollection(e), s();
                  },
                  failure: (e) => {
                    console.error(e), i(e);
                  }
                });
              });
            },
            addItemsToCollection(e, t = this.collection) {
              const s = t.items,
                i = e.map((e) => e.id);
              return (
                Object.keys(s).forEach((e) => {
                  i.includes(e) || this.$delete(s, e);
                }),
                e.forEach((e) => {
                  const t = e.id;
                  let i;
                  t in s ? (i = s[t]) : ((i = new this.Model()), this.$set(s, t, i)), i.updateData(e);
                }),
                this.$set(t, "loaded", !0),
                e
              );
            },
            add(e) {
              const t = (e.id = m.utils.uuidv4());
              this.$set(this.collection.items, t, e);
              const s = this.getAddRequestBody(e);
              return this.dataService
                .add(t, s)
                .then((t) => (this.capture && this.capture(this.fullNameLCS + " add", { context: { item: e } }), t))
                .catch((e) => {
                  throw (this.$delete(this.collection.items, t), e);
                });
            },
            update(e, t) {
              const s = this.getUpdateRequestBody(e, t);
              return this.dataService
                .update(e.id, s)
                .then((t) => (this.capture && this.capture(this.fullNameLCS + " edit", { context: { item: e } }), t));
            },
            delete(e) {
              return this.dataService
                .delete(e.id)
                .then(
                  (t) => (
                    this.capture && this.capture(this.fullNameLCS + " delete", { context: { item: e } }),
                    this.$delete(this.collection.items, e.id),
                    t
                  )
                );
            },
            archive(e) {
              return (
                this.$set(e, "archived", !0),
                this.dataService
                  .update(e.id, { archived: !0 })
                  .then((t) => (this.capture && this.capture(this.fullNameLCS + " archive", { context: { item: e } }), t))
                  .catch((t) => {
                    throw (this.$set(e, "archived", !1), t);
                  })
              );
            },
            unarchive(e) {
              return (
                this.$set(e, "archived", !1),
                this.dataService
                  .update(e.id, { archived: !1 })
                  .then((t) => (this.capture && this.capture(this.fullNameLCS + " unarchive", { context: { item: e } }), t))
                  .catch((t) => {
                    throw (this.$set(e, "archived", !0), t);
                  })
              );
            },
            getAddRequestBody(e) {
              const t = {};
              return (
                e.props.forEach((s) => {
                  void 0 !== e.editProps[s] && (t[s] = e.editProps[s]);
                }),
                t
              );
            },
            getUpdateRequestBody(e) {
              const t = {};
              return (
                e.getChanges().forEach((s) => {
                  const i = s.split(".");
                  1 === i.length ? (t[s] = e.editProps[s]) : 2 === i.length && (t[i[1]] = e.editProps[i[0]][i[1]]);
                }),
                t
              );
            },
            resetCollection() {
              this.collection = new i.F();
            }
          }
        },
        n = {
          data: () => ({ listPinnedValues: {} }),
          computed: {
            pinnedItems() {
              return this.data.loaded ? Object.values(this.data.items).filter((e) => e.pinned && !e.archived) : [];
            }
          },
          methods: {
            considerPinnedInList(e) {
              return this.listPinnedValues[e.id] ?? e.pinned;
            },
            sortPinned(e, t, s) {
              const i = this.considerPinnedInList(e),
                a = this.considerPinnedInList(t);
              return i && !a ? -1 : !i && a ? 1 : (s = "function" == typeof s ? s(e, t) : s) || (e.id > t.id ? -1 : e.id < t.id ? 1 : 0);
            },
            togglePinned(e) {
              const t = this.listPinnedValues[e.id];
              e.id in this.listPinnedValues || (this.listPinnedValues[e.id] = e.pinned),
                (e.pinned = !e.pinned),
                this.dataService
                  .update(e.id, { pinned: e.pinned })
                  .then(
                    (t) => (this.capture && this.capture(this.fullNameLCS + (e.pinned ? " pin" : " unpin"), { context: { item: e } }), t)
                  )
                  .catch(() => {
                    (e.pinned = !e.pinned), (this.listPinnedValues[e.id] = t);
                  });
            },
            clearRecentlyChangedItems() {
              this.listPinnedValues = {};
            }
          }
        },
        h = {
          created() {
            this.assignRandomItem();
          },
          watch: {
            "randomItem.pinned"(e) {
              e && this.assignRandomItem();
            },
            "randomItem.archived"(e) {
              e && this.assignRandomItem();
            },
            randomItem() {
              this.randomItem || this.assignRandomItem();
            },
            "dashItems.length"(e) {
              e || this.assignRandomItem();
            },
            "itemsArray.length"(e, t) {
              !t && e && this.assignRandomItem();
            }
          },
          computed: {
            itemsArray() {
              return Object.values(this.data.items);
            },
            showRandom() {
              return a.ax["showRandomMetric-" + this.nameCS];
            },
            randomItem() {
              return Object.values(this.data.items).find((e) => e.random);
            },
            dashItems() {
              const e =
                !this.randomItem || (!this.showRandom && this.pinnedItems.length)
                  ? [...this.pinnedItems]
                  : [this.randomItem, ...this.pinnedItems];
              return this.dashSort && e.sort(this.dashSort), e;
            }
          },
          methods: {
            getRandomItem(e) {
              const t = Object.values(e).filter((e) => !e.pinned && !e.archived);
              return t[m.utils.getRandomIntBetween(0, t.length - 1)];
            },
            assignRandomItem() {
              const e = this.$watch(
                "data.loaded",
                (t) => {
                  if (t) {
                    this.clearRandomItem();
                    const t = this.getRandomItem(this.data.items);
                    t && (t.random = !0), this.$nextTick(() => e());
                  }
                },
                { immediate: !0 }
              );
            },
            clearRandomItem() {
              this.randomItem && (this.randomItem.random = !1);
            }
          }
        },
        d = {
          computed: {
            selectedItem() {
              return Object.values(this.data.items).find((e) => e.selected);
            }
          },
          methods: {
            clearSelectedItem() {
              this.selectedItem && (this.selectedItem.selected = !1);
            }
          }
        },
        o = {
          data: () => ({ mockCollection: new i.F() }),
          computed: {
            data() {
              return this.mockCollection.loaded ? this.mockCollection : (this.collection.loaded || this.refresh(), this.collection);
            }
          },
          methods: {
            addMockData(e) {
              this.addItemsToCollection(e, this.mockCollection), (this.mockCollection.loaded = !0);
            },
            clearMockData() {
              this.mockCollection = new i.F();
            }
          }
        };
    },
    31624: (e, t, s) => {
      s.d(t, { X: () => r });
      var i = s(42935),
        a = s(24960);
      const r = {
        mixins: [
          {
            methods: {
              _mergeQueryParams(...e) {
                return Object.assign.apply(null, [{}, this.queryParams.all || {}].concat(e));
              },
              _buildQueryString(...e) {
                const t = new URLSearchParams(this._mergeQueryParams.apply(null, e)).toString();
                return t ? "?" + t : "";
              }
            }
          }
        ],
        unreactive: () => ({ type: "", path: "", mode: "sync", pathOverrides: {}, queryParams: { get: {}, update: {} } }),
        created() {
          this.type || console.error("dataSyncServiceMixin Error: You must declare a type in unreactive");
        },
        methods: {
          get({
            path: e = this.pathOverrides.get || this.path || this.type,
            success: t,
            failure: s,
            queryParams: i,
            mode: r = this.mode
          } = {}) {
            e += this._buildQueryString(this.queryParams.get, i);
            const n = [this.type, { path: e, env: this._getEnv(), mode: r }],
              h = this.type + ":refreshed";
            "server" === r
              ? (a.Z.addRecurringCrossTabMessageListener({ msgId: h, success: t, failure: s }),
                a.Z.sendMessage({ handler: "get", args: n }).then(t).catch(s))
              : a.Z.sendRecurringCrossTabMessage({ msgId: h, handler: "get", args: n, success: t, failure: s });
          },
          add(e, t, { path: s = this.pathOverrides.add || this.path || this.type, mode: i = this.mode } = {}) {
            const r = [this.type, e, t, { path: s, mode: i, env: this._getEnv() }];
            return a.Z.sendMessage({ handler: "create", args: r });
          },
          update(e, t, { path: s = this.pathOverrides.update || this.path || this.type, mode: i = this.mode, queryParams: r } = {}) {
            const n = this._buildQueryString(this.queryParams.update, r),
              h = [this.type, e, t];
            return h.push({ path: s, mode: i, env: this._getEnv(), queryString: n }), a.Z.sendMessage({ handler: "update", args: h });
          },
          delete(e, { path: t = this.pathOverrides.delete || this.path || this.type, mode: s = this.mode } = {}) {
            const i = [this.type, e, { path: t, mode: s, env: this._getEnv() }];
            return a.Z.sendMessage({ handler: "delete", args: i });
          },
          _getEnv: () => ({
            token: localStorage.getItem("token"),
            clientUuid: localStorage.getItem("client_uuid"),
            apiUrl: m.globals.urlRootApi,
            version: m.globals.version,
            tabId: i.Z
          })
        }
      };
    },
    2770: (e, t, s) => {
      s.d(t, { H: () => a, Z: () => i });
      const i = {
          data: () => ({ id: "", archived: null, selected: !1, editProps: {} }),
          methods: {
            updateData(e) {
              this.props.forEach((t) => (this[t] = e[t])), e.id && (this.id = e.id);
            },
            revertChanges() {
              this.editProps = {};
            },
            getChanges() {
              const e = (e, t) => e.getTime() === t.getTime();
              let t = [];
              return (
                this.editProps &&
                  this.props.forEach((s) => {
                    if (Array.isArray(this[s]) || Array.isArray(this.editProps[s]))
                      m.utils.arraysAreEqual(this[s], this.editProps[s]) || t.push(s);
                    else if (this[s] instanceof Date && this.editProps[s] instanceof Date) e(this[s], this.editProps[s]) || t.push(s);
                    else if ("object" == typeof this.editProps[s] && null !== this.editProps[s])
                      for (let i in this.editProps[s]) {
                        let a,
                          r = this[s][i],
                          n = this.editProps[s][i];
                        (a = r instanceof Date && n instanceof Date ? !e(r, n) : r !== n), a && t.push(`${s}.${i}`);
                      }
                    else this[s] !== this.editProps[s] && t.push(s);
                  }),
                t
              );
            },
            commitChanges() {
              this.beforeCommitChanges && this.beforeCommitChanges(),
                this.props.forEach((e) => {
                  void 0 !== this.editProps[e] && (this[e] = this.editProps[e]);
                }),
                this.revertChanges();
            },
            copyProperties() {
              for (let e of this.props)
                Array.isArray(this[e])
                  ? this.$set(this.editProps, e, [...this[e]])
                  : "object" == typeof this[e] && null !== this[e]
                  ? this.$set(this.editProps, e, { ...this[e] })
                  : this.$set(this.editProps, e, this[e]);
            }
          }
        },
        a = {
          maxCharPerLine: 14,
          computed: {
            brokenName() {
              return m.utils.lineBreakString(m.utils.removeTags(this.name), this.$options.maxCharPerLine);
            }
          }
        };
    },
    85040: (e, t, s) => {
      s.d(t, { Z: () => a });
      var i = s(84315);
      const a = {
        unreactive: () => ({ names: {} }),
        computed: {
          nameLCP() {
            return (
              this.names.lowerCasePlural ||
              this.type
                .replace(/([A-Z])/g, " $1")
                .trim()
                .toLowerCase()
            );
          },
          nameLCS() {
            return this.names.lowerCaseSingular || (0, i.singularize)(this.nameLCP);
          },
          nameCP() {
            return this.names.capitalizedPlural || m.utils.capitalizeWords(this.nameLCP);
          },
          nameCS() {
            return this.names.capitalizedSingular || m.utils.capitalizeWords(this.nameLCS);
          },
          fullNameLCP() {
            return this.names.fullLowerCasePlural || this.nameLCP;
          },
          fullNameLCS() {
            return this.names.fullLowerCaseSingular || (0, i.singularize)(this.fullNameLCP);
          },
          fullNameCP() {
            return this.names.fullCapitalizedPlural || m.utils.capitalizeWords(this.fullNameLCP);
          },
          fullNameCS() {
            return this.names.fullCapitalizedSingular || m.utils.capitalizeWords(this.fullNameLCS);
          }
        }
      };
    },
    40671: (e, t, s) => {
      s.d(t, { F: () => a });
      var i = s(99437);
      function a() {
        return new i.Z.observable({ loaded: !1, items: {} });
      }
    }
  }
]);
