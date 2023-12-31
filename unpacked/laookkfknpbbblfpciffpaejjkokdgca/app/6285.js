(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [6285],
  {
    18023: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => s });
      const s = {
        props: { viewManager: { type: Object, required: !0 } },
        created() {
          var e, t, i;
          this.viewManager.setActiveBodyComponentInstance(this),
            (this._viewId = this.viewManager.activeViewId),
            this.viewManager.$on(`viewOpened:${this._viewId}`, this._afterEnterWrapper),
            this.viewManager.$on(`viewClosed:${this._viewId}`, this._afterLeaveWrapper),
            null === (e = this.viewManager) ||
              void 0 === e ||
              null === (t = e.views[this._viewId]) ||
              void 0 === t ||
              null === (i = t.beforeEnter) ||
              void 0 === i ||
              i.call(t),
            this.beforeEnter();
        },
        destroyed() {
          this.viewManager.$emit("resolveShowView:" + this._viewId);
        },
        methods: {
          beforeEnter() {},
          afterEnter() {},
          beforeLeave() {},
          afterLeave() {},
          _afterLeaveWrapper() {
            var e, t;
            null === (e = this.viewManager.views[this._viewId]) || void 0 === e || null === (t = e.afterLeave) || void 0 === t || t.call(e),
              this.afterLeave(),
              this._removeListeners();
          },
          _afterEnterWrapper() {
            var e, t;
            null === (e = this.viewManager.views[this._viewId]) || void 0 === e || null === (t = e.afterEnter) || void 0 === t || t.call(e),
              this.afterEnter();
          },
          _removeListeners() {
            this.viewManager.$off(`viewClosed:${this._viewId}`, this._afterLeaveWrapper),
              this.viewManager.$off(`viewOpened:${this._viewId}`, this._afterEnterWrapper);
          }
        }
      };
    },
    80090: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => o });
      var s = i(8081),
        a = i.n(s),
        n = i(23645),
        r = i.n(n)()(a());
      r.push([
        e.id,
        "\n/* stylelint-disable */\n.edit-form[data-v-140763f4] { display: flex; flex-direction: column;\n}\n.button.add-margin-bottom[data-v-140763f4] { margin-bottom: 20px;\n}\n.button.button-save-secondary[data-v-140763f4] { min-width: auto; padding: 15px 15px 13px; background: none; color: var(--color-active);\n}\n.button.button-save-secondary[data-v-140763f4]:hover { box-shadow: unset;\n}\n.form-message[data-v-140763f4] { margin-bottom: 20px;\n}\n",
        ""
      ]);
      const o = r;
    },
    44467: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => o });
      var s = i(8081),
        a = i.n(s),
        n = i(23645),
        r = i.n(n)()(a());
      r.push([
        e.id,
        "\n/* stylelint-disable */\n.form-message[data-v-47deb1f6] { width: 100%; margin-top: 0; position: relative; display: flex; gap: 8px; align-items: center; font-size: 0.9375rem; line-height: 1.2; user-select: text;\n}\n.form-message .icon[data-v-47deb1f6] { flex-shrink: 0;\n}\n.form-message a[data-v-47deb1f6] { text-decoration: underline;\n}\n",
        ""
      ]);
      const o = r;
    },
    66285: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => v });
      var s = function () {
        var e = this,
          t = e._self._c;
        return t("div", [
          t(
            "div",
            {
              staticClass: "edit-form",
              on: {
                submit: function (e) {
                  e.preventDefault();
                }
              }
            },
            [
              e._l(e.fieldsToRender, function (i, s) {
                return t("edit-field", {
                  key: s,
                  ref: "newProps",
                  refInFor: !0,
                  attrs: {
                    "auto-focus": !s,
                    field: i,
                    "view-manager": e.viewManager,
                    "field-warnings": e.fieldWarnings,
                    "component-field-warnings": e.componentFieldWarnings
                  },
                  on: { "clear-warnings": e.clearWarnings }
                });
              }),
              e._v(" "),
              t(
                "transition",
                { attrs: { name: "fade", mode: "out-in" } },
                [e.error ? t("form-message", { attrs: { message: e.error, error: !!e.error } }) : e._e()],
                1
              ),
              e._v(" "),
              t("div", { staticClass: "save-button-container" }, [
                t(
                  "button",
                  {
                    staticClass: "button button-primary button-save",
                    attrs: { disabled: e.saving || e.activeItem.disableSave, type: "button", "data-test": "submit-button" },
                    on: {
                      click: function (t) {
                        return e.saveItem(null, !e.viewManager.activeItem.canSaveAsDraft && null);
                      }
                    }
                  },
                  [e._v(e._s(e.buttonText))]
                ),
                e._v(" "),
                e.viewManager.activeItem.canSaveAsDraft
                  ? t(
                      "button",
                      {
                        staticClass: "button button-save-secondary",
                        attrs: { disabled: e.saving, type: "button", "data-test": "submit-button" },
                        on: {
                          click: function (t) {
                            return e.saveItem(null, !0);
                          }
                        }
                      },
                      [e._v("Save as draft")]
                    )
                  : e._e()
              ])
            ],
            2
          )
        ]);
      };
      s._withStripped = !0;
      var a = i(65550),
        n = i(92729);
      const r = {
        maxLength({ value: e, arg: t }) {
          if (e.length > t) throw n.Qj.MAX_INPUT_LENGTH_EXCEEDED;
        },
        validUrl({ value: e }) {
          if (!m.utils.isValidUrl(m.utils.ensureUrlScheme(e))) throw n.Qj.INVALID_URL;
        }
      };
      var o = i(83554),
        d = i(25552),
        l = i(18023);
      const h = {
        name: "EditForm",
        components: { EditField: o.Z, FormMessage: d.Z },
        mixins: [l.Z],
        props: {
          addButtonText: { type: String, default: "Add" },
          addButtonLoadingText: { type: String, default: "Adding…" },
          saveButtonText: { type: String, default: "Save" },
          saveButtonLoadingText: { type: String, default: "Saving…" },
          suppressFlashMessages: { type: Boolean, default: !1 }
        },
        data: () => ({ error: "", saving: !1, fieldWarnings: [], componentFieldWarnings: [] }),
        computed: {
          collection() {
            return this.viewManager.collection;
          },
          adding() {
            return this.viewManager.adding;
          },
          fields() {
            return this.collection.fields;
          },
          fieldsToRender() {
            return this.fields.filter((e) => this.shouldRenderField(e, this.editProps));
          },
          buttonText() {
            return this.saving
              ? this.adding
                ? this.addButtonLoadingText
                : this.saveButtonLoadingText
              : this.adding
              ? this.addButtonText
              : this.saveButtonText;
          },
          activeItem() {
            return this.viewManager.activeItem;
          },
          editProps() {
            return this.activeItem.editProps;
          }
        },
        created() {
          Object.keys(this.viewManager.editProps).length || this.viewManager.activeItem.copyProperties(),
            this.clearWarnings(),
            this.viewManager.$on("showDeleteConf", this.showDeleteConf),
            a.Z.registerEventListener("editFormEnter", "keyup", 13, this.saveItem);
        },
        destroyed() {
          a.Z.removeEventListener("editFormEnter", "keyup", 13),
            this.viewManager.$off("showDeleteConf", this.showDeleteConf),
            this.clearWarnings();
        },
        methods: {
          deleteItem() {
            return this.collection
              .delete(this.viewManager.activeItem)
              .then(() => {
                this.suppressFlashMessages ||
                  this.$e.$emit("flashMessage", { message: this.collection.nameCS + " deleted.", icon: this.collection.icon });
              })
              .catch((e) => {
                this.error = this.handleError(e);
              });
          },
          shouldValidateField(e, t) {
            return e.validate && !(this.adding ? e.editingOnly : e.addingOnly) && !this.isHiddenInForm(e, t);
          },
          shouldRequireField(e, t) {
            return e.required && !(this.adding ? e.editingOnly : e.addingOnly) && !this.isHiddenInForm(e, t);
          },
          emptyCheck() {
            this.componentFieldWarnings = [];
            let e = !1;
            for (let t of this.fields)
              if (this.shouldRequireField(t, this.editProps) && m.utils.access(t.required, this.editProps, this.activeItem)) {
                const i = m.utils.access(t.requiredComponentFields, this.editProps);
                i
                  ? i.forEach((i) => {
                      (!this.editProps[t.property][i] ||
                        ("string" == typeof this.editProps[t.property][i] && this.editProps[t.property][i].trim().length <= 0)) &&
                        ((e = !0), this.fieldWarnings.push(t.property), this.componentFieldWarnings.push(i));
                    })
                  : (null == this.editProps[t.property] ||
                      ("string" == typeof this.editProps[t.property] && this.editProps[t.property].trim().length <= 0)) &&
                    ((e = !0), this.fieldWarnings.push(t.property));
              }
            return e;
          },
          validate() {
            this.componentFieldWarnings = [];
            for (let e of this.fields) {
              if (!this.shouldValidateField(e, this.editProps)) continue;
              const t = (e, t, i) => r[e]({ value: t, arg: i }),
                i = this.editProps[e.property];
              try {
                "string" == typeof e.validate
                  ? t(e.validate, i)
                  : "object" == typeof e.validate && Object.entries(e.validate).forEach(([e, s]) => t(e, i, s));
              } catch (t) {
                return (this.error = this.handleError(t)), this.fieldWarnings.push(e.property), !1;
              }
            }
            return !0;
          },
          clearWarnings() {
            (this.error = ""), (this.fieldWarnings = []), (this.componentFieldWarnings = []);
          },
          revertChanges() {
            var e, t;
            null === (e = this.activeItem) || void 0 === e || null === (t = e.revertChanges) || void 0 === t || t.call(e),
              this.viewManager.clearItem();
          },
          commitChanges() {
            var e, t;
            null === (e = this.activeItem) || void 0 === e || null === (t = e.commitChanges) || void 0 === t || t.call(e),
              this.viewManager.clearItem(),
              (this.saving = !1);
          },
          activeItemHasChanges() {
            return (
              (this.activeItem.getChanges && 0 !== this.activeItem.getChanges().length) ||
              (this.activeItem.getSublinkChanges && 0 !== this.viewManager.activeItem.getSublinkChanges().length)
            );
          },
          autoCapitalizeFields() {
            this.fields.forEach((e) => {
              const t = this.editProps[e.property];
              e.autoCapitalize && t && (this.editProps[e.property] = m.utils.capitalizeFirstLetter(t));
            });
          },
          saveItem(e, t) {
            if ((this.clearWarnings(), this.saving || this.emptyCheck() || !this.validate())) return;
            let i = !e && this.getSaveConfInfo();
            if (i) return void this.showSaveConf(i);
            this.activeItem.canSaveAsDraft && "boolean" == typeof t && (this.activeItem.editProps.draft = t);
            let s = this.adding ? "add" : "update";
            "update" !== s || this.activeItemHasChanges()
              ? ((this.saving = !0),
                this.collection[s](this.viewManager.activeItem)
                  .then(() => {
                    this.activeItem.refreshAfterSave && this.collection.refresh(),
                      this.viewManager.showView("default", {
                        doNotBlock: !0,
                        afterLeave: () => {
                          this.autoCapitalizeFields(), this.commitChanges(), this.clearWarnings(), (this.saving = !1);
                        }
                      }),
                      this.suppressFlashMessages ||
                        this.$e.$emit("flashMessage", {
                          message: this.collection.nameCS + ("add" === s ? " added." : " saved."),
                          icon: this.collection.icon
                        });
                  })
                  .catch((e) => {
                    (this.saving = !1), (this.error = this.handleError(e));
                  }))
              : this.viewManager.showView("default", {
                  doNotBlock: !0,
                  afterLeave: () => {
                    this.revertChanges(), this.clearWarnings(), (this.saving = !1);
                  }
                });
          },
          handleError: (e) =>
            "string" == typeof e
              ? e
              : "Network Error" === e.message
              ? n.Qj.SERVER_ERROR_NETWORK
              : e.response && 500 === e.response.status
              ? n.Qj.SERVER_ERROR_GENERAL
              : e.message,
          isHiddenInForm: (e, t) => m.utils.access(e.hiddenInForm, t),
          shouldRenderField(e, t) {
            return "hidden" !== e.type && !this.isHiddenInForm(e, t) && (this.adding ? !e.editingOnly : !e.addingOnly);
          },
          showSaveConf(e) {
            (e.onProceed = () => this.saveItem(!0)),
              (e.class = ("string" == typeof e.class ? e.class + " " : "") + "save-conf"),
              this.viewManager.showConfirmationOverlay(e);
          },
          showDeleteConf() {
            this.viewManager.showConfirmationOverlay({
              heading: this.activeItem.name ? `Delete "${this.activeItem.name}"?` : "Delete?",
              subheading: "This can't be undone",
              class: "delete-conf",
              onProceed: () => this.deleteItem().then(() => this.viewManager.showView("default", { doNotBlock: !0 }))
            });
          },
          getSaveConfInfo() {
            let e, t;
            return (
              this.activeItem.getChanges().forEach((i) => {
                (t = this.fields.find((e) => e.name === i)), t && t.confirmChange && (e = t.confirmChange(this.viewManager.activeItem));
              }),
              e
            );
          },
          showCancelConf(e) {
            this.viewManager.showConfirmationOverlay({
              heading: "Are you sure you want to cancel?",
              subheading: "Any changes will be lost.",
              class: "cancel-conf",
              onProceed: e,
              dashboardOverlay: !0
            });
          },
          beforeLeave(e) {
            if (!e)
              return (
                !this.viewManager.confirmationOverlayActive && (this.activeItemHasChanges() ? new Promise(this.showCancelConf) : void 0)
              );
          }
        }
      };
      i(45860);
      const v = (0, i(51900).Z)(h, s, [], !1, null, "140763f4", null).exports;
    },
    25552: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => n });
      var s = function () {
        var e = this,
          t = e._self._c;
        return t(
          "div",
          { staticClass: "form-message", attrs: { "data-test": e.testAttribute || "form-message" } },
          [
            e.error ? t("inline-svg", { staticClass: "icon icon-alert", attrs: { src: i(63741) } }) : e._e(),
            e._v(" "),
            t(
              "span",
              { staticClass: "form-message-text" },
              [
                e._t("default", function () {
                  return [e._v(e._s(e.message))];
                }),
                e._v(" "),
                e.contact
                  ? t("span", [
                      e._v(" Please try again or "),
                      t("a", { attrs: { href: "https://momentumdash.com/contact" } }, [e._v("contact us")]),
                      e._v(".")
                    ])
                  : e._e()
              ],
              2
            )
          ],
          1
        );
      };
      s._withStripped = !0;
      const a = {
        name: "FormMessage",
        props: {
          error: { type: Boolean, default: !1 },
          message: { type: String, default: "" },
          testAttribute: { type: String, default: "" },
          contact: { type: Boolean, default: !1 }
        }
      };
      i(67709);
      const n = (0, i(51900).Z)(a, s, [], !1, null, "47deb1f6", null).exports;
    },
    45860: (e, t, i) => {
      var s = i(80090);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[e.id, s, ""]]),
        s.locals && (e.exports = s.locals),
        (0, i(45346).Z)("f4503e8e", s, !1, { ssrId: !0 });
    },
    67709: (e, t, i) => {
      var s = i(44467);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[e.id, s, ""]]),
        s.locals && (e.exports = s.locals),
        (0, i(45346).Z)("968c3912", s, !1, { ssrId: !0 });
    }
  }
]);
