var SiteDialog = function (A) {
  EditableFieldsDialog.call(this, A, { closeButtonEnabled: !0, maximizeButtonEnabled: !0, dynamicHeight: !0, type: Account }),
    (this.changePasswordButton = null),
    (this.addTotpSecretButton = null),
    (this.deleteTotpSecretButton = null);
};
(SiteDialog.prototype = Object.create(EditableFieldsDialog.prototype)),
  (SiteDialog.prototype.constructor = SiteDialog),
  (function () {
    var i = [],
      o = { isFavorite: !1, isFolderFieldDirty: !1 },
      n = function (A) {
        var e = A.domain;
        return (e = "" !== A.a ? A.a + " (" + A.domain + ")" : e);
      },
      t =
        ((SiteDialog.prototype.initialize = function (A) {
          var e, i;
          EditableFieldsDialog.prototype.initialize.apply(this, arguments),
            (this.changePasswordButton = $("#autoChangePassword")),
            (this.addTotpSecretButton = $("#siteDialogAddTotpSecret")),
            (this.deleteTotpSecretButton = $("#siteDialogDeleteTotpSecret")),
            this.inputFields.password.getElement().LP_addPasswordMeter(this.inputFields.unencryptedUsername.getElement()),
            (this.inputFields.url = new BloodhoundDropdown(
              document.getElementById("siteDialogURL"),
              {
                identify: function (A) {
                  return A.domain;
                },
                remote: { url: LPProxy.getBaseURL() + "typeahead_addsite.php?q=%QUERY", wildcard: "%QUERY" }
              },
              {
                optionLabel: n,
                elementTemplate: {
                  template: function (A) {
                    var e =
                        "" !== A.favicon
                          ? A.favicon
                          : "R0lGODlhEAAQAIcAAAAAAExnf1BpgWR0iHZ6hHeBkX+GkYiOmpeaopucoaSlqqWmqrm9w7q+xL+/wry/xcXGyc3Oz9HS1NPU1tnZ2d/h4+Di5OLj5uPl5+Tk5OXm6O7u7+7v8O/w8e/w8vDw8fHx8vLy8/Pz8/Pz9PT09fX19fX29vb29vf39/f3+Pj4+Pj4+fn5+vr6+/v7/Pz8/P39/f7+/v///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAAALAAAAAAQABAAAAiQAAEIHEiw4MAFCBEmQCjBIIAFMiLK8CBjA4QIBiFu2Fgh4oYJDgpq5Chxw4KCCiqSlKigIAKVGyowYNDgAYGCB2BWsHABgwYDBQvA/CCiBAoVBQoOUNlBhAkVLV4MKCigIgenK1zAiCGgYICKIEhAhRExgFcZHEKcYEG27NkOI1K0aCvDLMEAePPqteuwr8CAADs=",
                      t = LPTools.createElement("li", "siteTypeaheadOption"),
                      a = LPTools.createElement("div", "itemIcon"),
                      e = LPTools.createElement("img", { src: "data:image/gif;base64," + e });
                    return (
                      t.appendChild(a), t.appendChild(LPTools.createElement("span", "siteTypeaheadOptionText", n(A))), a.appendChild(e), t
                    );
                  },
                  value: function (A) {
                    return A.url;
                  },
                  hint: n
                }
              }
            )),
            this.addFavButton().appendChild(this.editFormFieldsButton.get(0)),
            ((i = this).userGroupOverride = !1),
            i.inputFields.url.onChange(function (A) {
              var A = LPProxy.getDomain(A.domain),
                e = A.indexOf("."),
                e = A.charAt(0).toUpperCase() + A.substring(1, 0 < e ? e : A.length),
                t,
                e =
                  (i.inputFields.name.setValue(e),
                  bg.get("g_nofolder_feature_enabled") || ((t = bg.get("siteCats")) && t[A] && i.inputFields.group.setValue(t[A])),
                  bg.Policies.getSaveSiteToPersonal()),
                a;
              e &&
                (a = LPProxy.getLinkedAccount()) &&
                t &&
                t[A] &&
                -1 === e.indexOf(A) &&
                i.inputFields.group.setValue(a._data.group + "\\" + t[A]);
            }),
            i.inputFields.unencryptedUsername.onChange(function (A) {
              var e, e, t;
              bg.Policies.getAccountSelectionBasedOnEmail() &&
                !i.userGroupOverride &&
                (e = LPProxy.getLinkedAccount()) &&
                A === e._shareInfo.decsharename &&
                -1 === i.inputFields.group.getValue().indexOf(A) &&
                ((e = i.inputFields.group.getValue()), i.inputFields.group.setValue(e ? A + "\\" + e : A));
            }),
            i.inputFields.group.onChange(function (A) {}),
            A.find("#siteDialogPasswordHistory").bind("click", function () {
              i.vaultItem.canViewPassword()
                ? LPProxy.reprompt(
                    function () {
                      LPRequest.makeRequest(LPProxy.getPasswordHistory, {
                        params: { aid: i.vaultItem.getID(), shareId: i.vaultItem.getShareID() },
                        success: function (A) {
                          t(A, i.vaultItem, Constants.HISTORY_TYPES.PASSWORD);
                        },
                        requestSuccessOptions: { closeDialog: !1 }
                      }),
                        bg.loglogin(i.vaultItem.getID());
                    },
                    { types: AccountBaseWithFields.prototype.REPROMPT_TYPE_VIEW_PW }
                  )
                : Topics.get(Topics.ERROR).publish(
                    Strings.translateString("This is a shared site. You are not permitted to view the password.")
                  );
            }),
            A.find("#siteDialogAddTotpSecret").bind("click", function () {
              dialogs.addTotpDialog.open();
            }),
            A.find("#siteDialogDeleteTotpSecret").bind("click", function () {
              dialogs.confirmation.open({
                title: Strings.translateString("Confirm Deletion"),
                text: [Strings.translateString("Are you sure?")],
                nextButtonText: Strings.Vault.DELETE,
                backButtonText: Strings.Vault.CANCEL,
                handler: function () {
                  (A.find("#siteDialogTotp")[0].value = ""),
                    (A.find("#siteDialogTotpCode")[0].value = ""),
                    A.find("#siteDialogDeleteTotpSecret").hide(),
                    A.find("#siteDialogAddTotpSecret").show();
                }
              });
            }),
            A.find("#siteDialogUsernameHistory").bind("click", function () {
              LPRequest.makeRequest(LPProxy.getUsernameHistory, {
                params: { aid: i.vaultItem.getID(), shareId: i.vaultItem.getShareID() },
                success: function (A) {
                  t(A, i.vaultItem, Constants.HISTORY_TYPES.USERNAME);
                },
                requestSuccessOptions: { closeDialog: !1 }
              });
            }),
            A.find("#siteDialogNoteHistory").bind("click", function () {
              LPRequest.makeRequest(LPProxy.getNoteHistory, {
                params: { aid: i.vaultItem.getID(), shareId: i.vaultItem.getShareID() },
                success: function (A) {
                  t(A, i.vaultItem, Constants.HISTORY_TYPES.NOTE);
                },
                requestSuccessOptions: { closeDialog: !1 }
              });
            }),
            i.changePasswordButton.bind("click", function () {
              var A = function () {
                LPProxy.autoChangePassword(i.vaultItem.getID()), i.close(!0);
              };
              i.vaultItem.canViewPassword()
                ? i.isModified()
                  ? dialogs.confirmation.open({
                      title: Strings.translateString("Auto Change Password"),
                      text: Strings.translateString("Changes you have made have not been saved. Are you sure you want to continue?"),
                      handler: A
                    })
                  : A()
                : Topics.get(Topics.ERROR).publish(
                    Strings.translateString("This is a shared site. You are not permitted to view the password.")
                  );
            });
        }),
        function (A, e, t) {
          dialogs.fieldHistory.open({ history: A, vaultItem: e, historyType: t });
        }),
      r =
        ((SiteDialog.prototype.preSetup = function (A) {
          var e = null,
            t;
          (this.siteTypeName = null),
            LPFeatures.allowOmarIA() &&
              (t = LPProxy.getConfigTypeObject("Password")) &&
              ((this.siteTypeName = t.name),
              (e = A && A.vaultItem ? Strings.translateString("Edit " + t.id) : Strings.translateString("Add " + t.id))),
            (e = e || (A && A.vaultItem ? Strings.translateString("Edit Site") : Strings.translateString("Add Site"))),
            A && (A.title = e);
        }),
        (SiteDialog.prototype.open = function (t) {
          var A, e, A, A, A, a;
          if (
            ((t = $.extend(t, { sourceFunction: LPProxy.getSiteModel })).saveAllData
              ? ((A = t.saveAllData), delete t.saveAllData, (t.defaultData = { url: A.url, save_all: !0 }), r(A.formdata, t.defaultData))
              : t.defaultData && t.defaultData.formdata && (r(t.defaultData.formdata, t.defaultData), delete t.defaultData.formdata),
            t.defaultData &&
              t.defaultData.url &&
              ((e = LPProxy.getDomain(t.defaultData.url)),
              (A = bg.get("siteCats")),
              void 0 === t.defaultData.group && A[e] && !bg.get("g_nofolder_feature_enabled") && (t.defaultData.group = A[e]),
              void 0 === t.defaultData.name) &&
              (t.defaultData.name = e),
            bg.Policies.getSaveSiteToPersonal() && (A = LPProxy.getLinkedAccount()) && (t.defaultData = { group: A._data.group }),
            t.saveOptions && t.saveOptions.checkForReplacement)
          ) {
            for (
              var e = LPProxy.getDomain(t.defaultData.url), i = [], o = LPProxy.getSiteModels(t.defaultData.url), n = 0, s = o.length;
              n < s;
              ++n
            ) {
              var l = o[n];
              LPProxy.getDomain(l.getURL()) === e && t.defaultData.unencryptedUsername === l.getUsername() && i.push(l);
            }
            if (0 < i.length)
              return void dialogs.vaultItemSelect.open({
                title: this.siteTypeName
                  ? Strings.translateString("Replace %s", this.siteTypeName)
                  : Strings.translateString("Replace Site"),
                nextButtonText: Strings.translateString("Replace"),
                backButtonText: Strings.Vault.NO,
                text: Strings.translateString("Would you like to replace an existing entry you have for %s?", e),
                items: i,
                closeHandler: this.createHandler(EditableFieldsDialog.prototype.open, t),
                handler: this.createDynamicHandler(function (A) {
                  var e = t.defaultData;
                  delete t.defaultData,
                    EditableFieldsDialog.prototype.open.call(
                      this,
                      $.extend(t, {
                        vaultItem: A[0],
                        postSetup: function (A) {
                          A.populateFields(e);
                        }
                      })
                    );
                }),
                buildOptions: { multiSelect: !1 }
              });
          }
          if (
            ("object" == typeof t.vaultItem || "string" == typeof t.vaultItem) &&
            "object" == typeof reduxApp &&
            reduxApp.getState().settings.features.react_save_site_dialog &&
            ("string" == typeof t.vaultItem && ((A = LPProxy.getSiteModel(t.vaultItem)), (t.vaultItem = A)),
            (void 0 !== t.vaultItem._data && !t.vaultItem._data.save_all) ||
              (!t.vaultItem.save_all &&
                !t.vaultItem._sharedGroup._data.hasOwnProperty("tld") &&
                !t.vaultItem._sharedGroup._data.hasOwnProperty("unencryptedUsername")))
          )
            return $("#dialogLoadingOverlay").removeClass("overlay"), void reduxApp.openReactSaveSiteDialog(t, "Vault");
          EditableFieldsDialog.prototype.open.call(this, t);
        }),
        (SiteDialog.prototype.setup = function (A, e) {
          EditableFieldsDialog.prototype.setup.call(this, A, e),
            this.changePasswordButton.hide(),
            this.deleteTotpSecretButton.hide(),
            this.addTotpSecretButton.show(),
            this.vaultItem
              ? (A.find(".history").show(),
                "1" === this.vaultItem._data.pwch && this.changePasswordButton.show(),
                this.inputFields.url.disableDropdown())
              : (A.find(".history").hide(), this.inputFields.url.enableDropdown()),
            !e.vaultItem && LPFeatures.allowOmarIA() ? A.find(".dialogAllSitesButton").show() : A.find(".dialogAllSitesButton").hide(),
            "" == A.find("#siteDialogTotp")[0].value
              ? (A.find("#siteDialogDeleteTotpSecret").hide(), A.find("#siteDialogAddTotpSecret").show())
              : (A.find("#siteDialogDeleteTotpSecret").show(), A.find("#siteDialogAddTotpSecret").hide()),
            (LPProxy.isEnterpriseUser() && LPFeatures.allowTwoFactorCode()) || (A.find("#totpBlock").hide(), this.setDynamicHeight());
          var t = document.querySelectorAll("[data-field-name]");
          if (void 0 !== t) {
            for (var a = 0; a < t.length; a++) i.push({ trackingName: t[a].attributes["data-field-name"].value, isDirty: !1 });
            document.getElementById("siteDialog").addEventListener("click", function (e) {
              ((e.target.attributes["data-field-name"] && "" !== e.target.attributes["data-field-name"].value) ||
                "favButton" === e.target.className ||
                e.target.classList.contains("favButtonLabel")) &&
                ("favButton" === e.target.className || e.target.classList.contains("favButtonLabel")
                  ? (o.isFavorite = !0)
                  : "Folder" === e.target.attributes["data-field-name"].value
                  ? (o.isFolderFieldDirty = !0)
                  : Object.keys(i).forEach(function (A) {
                      e.target.attributes["data-field-name"].value === i[A].trackingName && (i[A].isDirty = !0);
                    }));
            });
          }
        }),
        (SiteDialog.prototype.validate = function (A) {
          var e = EditableFieldsDialog.prototype.validate.apply(this, arguments),
            t;
          return (
            "" === A.name && (this.addError("name", Strings.translateString("Name is required.")), (e = !1)),
            bg.Policies.getAccountSelectionBasedOnEmail() &&
              (t = LPProxy.getLinkedAccount()) &&
              A.unencryptedUsername === bg.get("g_username") &&
              -1 !== A.group.indexOf(t._shareInfo.decsharename) &&
              (this.addError("group", Strings.translateString("Cannot save to folder, restricted by a policy")), (e = !1)),
            e
          );
        }),
        (SiteDialog.prototype.handleSubmit = function (A) {
          "object" != typeof bg ||
            "function" != typeof bg.disableDropDownNotification ||
            "function" != typeof bg.setSecurityScoreAlertBadge ||
            this.vaultItem ||
            bg.setSecurityScoreAlertBadge(),
            VaultItemDialog.prototype.handleSubmit.call(this, A);
          var e = [],
            A = this.data.vaultItem ? "edit" : "add";
          Object.keys(i).forEach(function (A) {
            i[A].isDirty && e.push(i[A].trackingName);
          }),
            "add" == A
              ? bg.sendLpImprove("vault_add_item_dialog_clicked", {
                  dirty_fields: JSON.stringify(e),
                  attachment: "No",
                  favorite: o.isFavorite ? "Yes" : "No",
                  folder: o.isFolderFieldDirty ? "Yes" : "No",
                  item_type: "Password",
                  source: "Vault",
                  action: "Save",
                  os_type: getOsType(),
                  browser_type: getBrowserType()
                })
              : "edit" == A &&
                bg.sendLpImprove("vault_edit_item_dialog_clicked", {
                  dirty_fields: JSON.stringify(e),
                  attachment: "No",
                  favorite: o.isFavorite ? "Yes" : "No",
                  folder: o.isFolderFieldDirty ? "Yes" : "No",
                  item_type: "Password",
                  source: "Vault",
                  action: "Save",
                  os_type: getOsType(),
                  browser_type: getBrowserType()
                });
        }),
        (SiteDialog.prototype.close = function (A) {
          Dialog.prototype.close.apply(this, arguments) && (i = []);
        }),
        function (A, e) {
          e.fields = [];
          for (var t = A.split("\n"), a = 0, i = t.length; a < i; ++a) {
            var o = t[a].split("\t"),
              n = decodeURIComponent(o[0]),
              s = decodeURIComponent(o[1]),
              l = decodeURIComponent(o[2]),
              r = decodeURIComponent(o[3]);
            if ("action" === r) e.action = l;
            else if ("method" === r) e.method = l;
            else if (s)
              switch (r) {
                case "email":
                case "text":
                case "url":
                case "tel":
                case "password":
                case "checkbox":
                case "radio":
                case "select":
                case "select-one":
                  var d = { formname: n, name: s, type: r, value: l };
                  if ("checkbox" === r) (d.value = "-1" === l.substring(l.length - 2)), (d.valueAttribute = l.substring(0, l.length - 2));
                  else if ("radio" === r) {
                    if ("-1" !== l.substring(l.length - 2)) continue;
                    d.value = l.substring(0, l.length - 2);
                  }
                  e.fields.push(d);
              }
          }
        });
  })();
