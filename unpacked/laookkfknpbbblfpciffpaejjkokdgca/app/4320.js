(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [4320],
  {
    99259: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => o });
      var a = s(8081),
        r = s.n(a),
        n = s(23645),
        i = s.n(n)()(r());
      i.push([
        e.id,
        "\n/* stylelint-disable */\n.big-search-wrapper[data-v-1053b93c] { padding-top: 8px;\n}\n.big-search-wrapper .search-form[data-v-1053b93c] { --color-icon: #FFF;\n}\n.touch .big-search-wrapper[data-v-1053b93c] .side-col { display: none;\n}\n[data-v-1053b93c] .three-col-layout--center { display: flex;\n}\n.search.big[data-v-1053b93c] { --height: 56px; height: var(--height); width: 100%; min-height: 0; min-width: 0; max-height: none; max-width: none; position: relative; border-radius: var(--height); /* z-index: Show provider dropdown over quote due to backdrop-filter */\n}\n.search.big .backdrop-filter[data-v-1053b93c] { position: absolute; inset: 0; z-index: -1; -webkit-backdrop-filter: blur(20px); backdrop-filter: blur(20px); background: hsla(0 0% 100% / 0.15); border-radius: var(--height); box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);\n}\n.touch .search.big .app-dash-icon[data-v-1053b93c] { padding: 0 !important;\n}\n.search.big[data-v-1053b93c] form { max-width: 100%;\n}\n.search-expand-enter-active[data-v-1053b93c], .search-expand-leave-active[data-v-1053b93c] { transition: all 0.5s ease\n}\n.search-expand-enter[data-v-1053b93c], .search-expand-leave-to[data-v-1053b93c] { border-radius: 50px; opacity: 0;\n}\n.search-expand-enter[data-v-1053b93c]  .app-view { height: var(--height);\n}\n\n\t/* Firefox fallback */\n@supports not ((backdrop-filter: blur(20px)) or (-webkit-backdrop-filter: blur(20px))) {\n.search.big[data-v-1053b93c] { background: var(--color-accent);\n}\n.search.big[data-v-1053b93c] .search-input, .search.big[data-v-1053b93c] .search-input::placeholder { color: var(--color-text);\n}\n.search.big[data-v-1053b93c] .icon-search { fill: var(--color-text);\n}\n}\n@media screen and (max-width: 450px) {\n.search.big[data-v-1053b93c] { --height: 52px; width: auto; margin: 0 20px !important; flex-grow: 1;\n}\n}\n@media screen and (max-height: 800px) {\n.big-search-wrapper[data-v-1053b93c] { padding-top: 1rem;\n}\n}\n.search.big[data-v-1053b93c] .chat-messages { padding: 0 var(--app-padding);\n}\n",
        ""
      ]);
      const o = i;
    },
    22745: (e, t, s) => {
      "use strict";
      s.d(t, { dS: () => r, sY: () => a });
      const a = {
          ERROR_GENERAL: "Oops! Something went wrong, please check your connection and try again.",
          ERROR_429: "We are experiencing a high amount of traffic at this time. Please try again later."
        },
        r = ["filtered_content", "validation_error"];
    },
    47932: (e, t, s) => {
      "use strict";
      s.d(t, { a: () => h });
      var a = s(63420),
        r = s(35174),
        n = s(71257);
      const i = new (class {
        async sendMessage({ content: e, parentId: t }) {
          this.cancelTokenSource = n.default.CancelToken.source();
          const { data: s } = await r.Z.post("ai/chat", { content: e, parentId: t }, { cancelToken: this.cancelTokenSource.token });
          return (this.cancelTokenSource = null), s;
        }
        async regenerate(e) {
          this.cancelTokenSource = n.default.CancelToken.source();
          const { data: t } = await r.Z.post("ai/chat", { parentId: e }, { cancelToken: this.cancelTokenSource.token });
          return (this.cancelTokenSource = null), t;
        }
        cancelRequest() {
          this.cancelTokenSource && this.cancelTokenSource.cancel();
        }
      })();
      var o = s(22745),
        c = s(20144);
      const h = (0, a.Q_)("chat", {
        state: () => ({ input: "", chat: [], processing: !1, error: null, lastResponses: [], selectedLastResponseIndex: 0 }),
        getters: {
          canSubmit: (e) => !e.processing && !e.error,
          chatMessages(e) {
            const t = [...e.chat];
            return (
              e.error
                ? t.push({ role: "assistant", content: e.error.message, error: !0 })
                : e.lastResponses.length &&
                  this.selectedLastResponse &&
                  t.push({
                    ...this.selectedLastResponse,
                    showRegenerate: !0,
                    totalResponseCount: e.lastResponses.length,
                    selectedAnswer: e.selectedLastResponseIndex
                  }),
              t
            );
          },
          lastUserMessage: (e) => [...e.chat].reverse().find((e) => "user" === e.role),
          lastAssistantMessage: (e) => [...e.chat].reverse().find((e) => "assistant" === e.role),
          selectedLastResponse: (e) => e.lastResponses[e.selectedLastResponseIndex]
        },
        actions: {
          async sendMessage(e, { idCallback: t, afterSuccess: s, afterError: a } = {}) {
            const r = { content: e };
            this.lastAssistantMessage && (r.parentId = this.lastAssistantMessage.id);
            try {
              (this.processing = !0), (this.error = null);
              const { id: e, response: a } = await i.sendMessage(r);
              e && t && t(e), this.lastResponses.push(a);
              try {
                null == s || s();
              } catch (e) {
                console.error(e);
              }
            } catch (e) {
              this.handleError(e);
              try {
                null == a || a();
              } catch (e) {
                console.error(e);
              }
            } finally {
              this.processing = !1;
            }
          },
          async resubmit(e = {}) {
            var t;
            const s = null === (t = this.lastUserMessage) || void 0 === t ? void 0 : t.content;
            !this.processing && s && (await this.sendMessage(s, e));
          },
          async submit(e = {}) {
            const t = this.input;
            if (this.processing || !t) return;
            const s = { content: t, role: "user" };
            this.selectedLastResponse &&
              (this.chat.push((({ id: e, role: t, content: s }) => ({ id: e, role: t, content: s }))(this.selectedLastResponse)),
              (this.lastResponses = []),
              (this.selectedLastResponseIndex = 0)),
              this.chat.push(s),
              (this.input = ""),
              await this.sendMessage(t, {
                ...e,
                idCallback: (e) => {
                  c.ZP.set(s, "id", e);
                }
              });
          },
          async regenerate({ afterSuccess: e, afterError: t } = {}) {
            if (this.processing) return;
            (this.processing = !0), (this.error = null);
            const s = this.selectedLastResponseIndex;
            this.selectedLastResponseIndex = this.lastResponses.length;
            const a = this.lastUserMessage && "id" in this.lastUserMessage ? this.lastUserMessage.id : "";
            if (!a) throw new Error('LastMessage "id" was not found');
            try {
              const { response: t } = await i.regenerate(a);
              this.lastResponses.push(t);
              try {
                null == e || e();
              } catch (e) {
                console.error(e);
              }
            } catch (e) {
              this.handleError(e), (this.selectedLastResponseIndex = s);
              try {
                null == t || t();
              } catch (e) {
                console.error(e);
              }
            } finally {
              this.processing = !1;
            }
          },
          handleError(e) {
            this.error = (0, r.y)(e, { 429: o.sY.ERROR_429, default: o.sY.ERROR_GENERAL });
          },
          editLastMessage() {
            var e;
            (this.error = null),
              (this.input = (null === (e = this.lastUserMessage) || void 0 === e ? void 0 : e.content) || ""),
              this.chat.pop();
          },
          clear() {
            i.cancelRequest(),
              (this.error = null),
              (this.chat = []),
              (this.lastResponses = []),
              (this.selectedLastResponseIndex = 0),
              (this.input = "");
          }
        }
      });
    },
    95756: (e, t, s) => {
      "use strict";
      s.d(t, { v: () => h });
      var a = s(63420),
        r = s(20144),
        n = s(96046),
        i = s(63139),
        o = s(7838);
      const c = (e) =>
          Object.keys(e).find((t) => {
            var s;
            return null === (s = e[t]) || void 0 === s ? void 0 : s.defaultView;
          }),
        h = (e, t) => {
          const s = (0, a.Q_)(e + "ViewState", {
              state: () => {
                var s;
                return {
                  activeViewId: null !== (s = t && c(t)) && void 0 !== s ? s : "",
                  beforeViewChange: () => Promise.resolve(!0),
                  confirmationProps: null,
                  popupActive: !1,
                  name: e
                };
              },
              getters: {
                activeView(e) {
                  if (!t) return null;
                  const s = t[e.activeViewId];
                  if (s) return s;
                  throw new Error("No view found with id: " + e.activeViewId);
                },
                focused: () => i.Z.isOnTop(e)
              },
              actions: {
                focus() {
                  i.Z.add(e);
                },
                async setActiveView(e) {
                  if (t && (await this.beforeViewChange()))
                    if ("default" === e) {
                      const e = c(t);
                      if (!e) throw new Error("No view found with defaultView: true");
                      this.activeViewId = e;
                    } else this.activeViewId = e;
                },
                async togglePopup(e) {
                  (await this.beforeViewChange()) &&
                    (await r.ZP.nextTick(),
                    (this.popupActive = null != e ? e : !this.popupActive),
                    this.popupActive ||
                      (this.resetBeforeViewChange(), (this.confirmationProps = null), await this.setActiveView("default")));
                },
                resetBeforeViewChange() {
                  this.beforeViewChange = () => Promise.resolve(!0);
                },
                async setConfirmation(e) {
                  return new Promise((t) => {
                    (this.confirmationProps = e),
                      (this.confirmationProps.confirm = () => t(!0)),
                      (this.confirmationProps.cancel = () => t(!1));
                  }).finally(() => {
                    this.confirmationProps = null;
                  });
                }
              }
            }),
            h = (0, a.Jk)(s());
          return (
            o.Z.$on(e + ":close", () => s().togglePopup(!1)),
            (0, r.YP)(h.popupActive, (t) => {
              t ? i.Z.add(e) : i.Z.remove(e);
            }),
            (0, r.YP)(h.confirmationProps, (t) => {
              (null == t ? void 0 : t.dashboardOverlay) && i.Z.add(e, !0),
                (n.Z.dashboardOverlayActive = !!(null == t ? void 0 : t.dashboardOverlay));
            }),
            s
          );
        };
    },
    94320: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => v });
      var a = function () {
        var e = this,
          t = e._self._c;
        return t("three-col-layout", {
          staticClass: "has-dash-icon big-search-wrapper",
          attrs: { "grow-center": !0, "max-center-grow": "584px" },
          scopedSlots: e._u(
            [
              {
                key: "left",
                fn: function () {
                  return [e._t("nav")];
                },
                proxy: !0
              },
              {
                key: "center",
                fn: function () {
                  return [
                    t(
                      "div",
                      { staticClass: "big search app-container hide-apps-no-fade", attrs: { "data-test": "search" } },
                      [
                        t("search-input", {
                          staticClass: "hide-apps-fade",
                          attrs: { "big-search": !0, placeholder: "Search" },
                          on: { showChatPopup: e.showChatPopup }
                        }),
                        e._v(" "),
                        t(
                          "transition",
                          { attrs: { name: "search-expand" } },
                          [
                            e.searchChatViewStateStore.popupActive
                              ? t("search-chat", {
                                  on: {
                                    close: function (t) {
                                      return e.searchChatViewStateStore.togglePopup(!1);
                                    }
                                  }
                                })
                              : e._e()
                          ],
                          1
                        ),
                        e._v(" "),
                        t("div", { staticClass: "backdrop-filter hide-apps-fade" })
                      ],
                      1
                    )
                  ];
                },
                proxy: !0
              }
            ],
            null,
            !0
          )
        });
      };
      a._withStripped = !0;
      var r = s(6800),
        n = s(40531),
        i = s(76333),
        o = s(3728),
        c = s(42223),
        h = s(47932);
      const l = (0, s(95756).v)("searchChat");
      var d = s(63420),
        p = s(7838);
      const u = new (s(81405).ZP)({ feature: "ask ai", is_paid_event: !0, location: "search" }),
        g = {
          name: "BigSearch",
          components: {
            SearchChat: () => Promise.all([s.e(9980), s.e(464), s.e(955), s.e(842), s.e(7200)]).then(s.bind(s, 7200)),
            SearchInput: i.Z,
            ThreeColLayout: o.Z
          },
          mixins: [c.Z],
          provide() {
            return { viewStateStore: this.searchChatViewStateStore, capture: u.capture.bind(u) };
          },
          computed: { ...(0, d.Kc)(h.a, l), searchVisible: () => n.ax.searchVisible && n.ax.centerBelowNavVisible },
          mounted() {
            m.widgetManager.appReady(r.id), m.trigger("bigSearch:mounted");
          },
          methods: {
            showChatPopup(e) {
              if (!this.$plus) return this.showAiChatUpsell();
              this.searchChatViewStateStore.togglePopup(!0), this.chatStore.clear(), (this.chatStore.input = e);
              const t = this.chatStore.input.length;
              this.chatStore.submit({
                afterSuccess: () => this.captureAnalyticsWithCommonProps("send message", { message_length: t }),
                afterError: () => this.captureAnalyticsWithCommonProps("send message error", { message_length: t })
              }),
                p.Z.$emit("chat:close");
            },
            showAiChatUpsell() {
              m.cmd("modal.open", "UPSELL_AI_CHAT", { eventSource: "dash" });
            },
            captureAnalyticsWithCommonProps(e, t = {}) {
              u.capture(e, {
                message_count: this.chatStore.chatMessages.length,
                ...(this.chatStore.error ? { error_type: this.chatStore.error.type, error_message: this.chatStore.error.message } : {}),
                ...t
              });
            }
          }
        };
      s(70229);
      const v = (0, s(51900).Z)(g, a, [], !1, null, "1053b93c", null).exports;
    },
    70229: (e, t, s) => {
      var a = s(99259);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.id, a, ""]]),
        a.locals && (e.exports = a.locals),
        (0, s(45346).Z)("0b840f80", a, !1, { ssrId: !0 });
    }
  }
]);
