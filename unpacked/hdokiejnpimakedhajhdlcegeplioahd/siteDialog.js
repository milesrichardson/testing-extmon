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
        var t = A.domain;
        return (t = "" !== A.a ? A.a + " (" + A.domain + ")" : t);
      },
      e =
        ((SiteDialog.prototype.initialize = function (A) {
          var t, i;
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
                    var t =
                        "" !== A.favicon
                          ? A.favicon
                          : "R0lGODlhEAAQAIcAAAAAAExnf1BpgWR0iHZ6hHeBkX+GkYiOmpeaopucoaSlqqWmqrm9w7q+xL+/wry/xcXGyc3Oz9HS1NPU1tnZ2d/h4+Di5OLj5uPl5+Tk5OXm6O7u7+7v8O/w8e/w8vDw8fHx8vLy8/Pz8/Pz9PT09fX19fX29vb29vf39/f3+Pj4+Pj4+fn5+vr6+/v7/Pz8/P39/f7+/v///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAAALAAAAAAQABAAAAiQAAEIHEiw4MAFCBEmQCjBIIAFMiLK8CBjA4QIBiFu2Fgh4oYJDgpq5Chxw4KCCiqSlKigIAKVGyowYNDgAYGCB2BWsHABgwYDBQvA/CCiBAoVBQoOUNlBhAkVLV4MKCigIgenK1zAiCGgYICKIEhAhRExgFcZHEKcYEG27NkOI1K0aCvDLMEAePPqteuwr8CAADs=",
                      e = LPTools.createElement("li", "siteTypeaheadOption"),
                      a = LPTools.createElement("div", "itemIcon"),
                      t = LPTools.createElement("img", { src: "data:image/gif;base64," + t });
                    return (
                      e.appendChild(a), e.appendChild(LPTools.createElement("span", "siteTypeaheadOptionText", n(A))), a.appendChild(t), e
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
                t = A.indexOf("."),
                t = A.charAt(0).toUpperCase() + A.substring(1, 0 < t ? t : A.length),
                e,
                t =
                  (i.inputFields.name.setValue(t),
                  bg.get("g_nofolder_feature_enabled") || ((e = bg.get("siteCats")) && e[A] && i.inputFields.group.setValue(e[A])),
                  bg.Policies.getSaveSiteToPersonal()),
                a;
              t &&
                (a = LPProxy.getLinkedAccount()) &&
                e &&
                e[A] &&
                -1 === t.indexOf(A) &&
                i.inputFields.group.setValue(a._data.group + "\\" + e[A]);
            }),
            i.inputFields.unencryptedUsername.onChange(function (A) {
              var t, t, e;
              bg.Policies.getAccountSelectionBasedOnEmail() &&
                !i.userGroupOverride &&
                (t = LPProxy.getLinkedAccount()) &&
                A === t._shareInfo.decsharename &&
                -1 === i.inputFields.group.getValue().indexOf(A) &&
                ((t = i.inputFields.group.getValue()), i.inputFields.group.setValue(t ? A + "\\" + t : A));
            }),
            i.inputFields.group.onChange(function (A) {}),
            A.find("#siteDialogPasswordHistory").bind("click", function () {
              i.vaultItem.canViewPassword()
                ? LPProxy.reprompt(
                    function () {
                      LPRequest.makeRequest(LPProxy.getPasswordHistory, {
                        params: { aid: i.vaultItem.getID(), shareId: i.vaultItem.getShareID() },
                        success: function (A) {
                          e(A, i.vaultItem, Constants.HISTORY_TYPES.PASSWORD);
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
                  e(A, i.vaultItem, Constants.HISTORY_TYPES.USERNAME);
                },
                requestSuccessOptions: { closeDialog: !1 }
              });
            }),
            A.find("#siteDialogNoteHistory").bind("click", function () {
              LPRequest.makeRequest(LPProxy.getNoteHistory, {
                params: { aid: i.vaultItem.getID(), shareId: i.vaultItem.getShareID() },
                success: function (A) {
                  e(A, i.vaultItem, Constants.HISTORY_TYPES.NOTE);
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
        function (A, t, e) {
          dialogs.fieldHistory.open({ history: A, vaultItem: t, historyType: e });
        }),
      r =
        ((SiteDialog.prototype.preSetup = function (A) {
          var t = null,
            e;
          (this.siteTypeName = null),
            LPFeatures.allowOmarIA() &&
              (e = LPProxy.getConfigTypeObject("Password")) &&
              ((this.siteTypeName = e.name),
              (t = A && A.vaultItem ? Strings.translateString("Edit " + e.id) : Strings.translateString("Add " + e.id))),
            (t = t || (A && A.vaultItem ? Strings.translateString("Edit Site") : Strings.translateString("Add Site"))),
            A && (A.title = t);
        }),
        (SiteDialog.prototype.open = function (e) {
          var A, t, A, A, A, a;
          if (
            ((e = $.extend(e, { sourceFunction: LPProxy.getSiteModel })).saveAllData
              ? ((A = e.saveAllData), delete e.saveAllData, (e.defaultData = { url: A.url, save_all: !0 }), r(A.formdata, e.defaultData))
              : e.defaultData && e.defaultData.formdata && (r(e.defaultData.formdata, e.defaultData), delete e.defaultData.formdata),
            e.defaultData &&
              e.defaultData.url &&
              ((t = LPProxy.getDomain(e.defaultData.url)),
              (A = bg.get("siteCats")),
              void 0 === e.defaultData.group && A[t] && !bg.get("g_nofolder_feature_enabled") && (e.defaultData.group = A[t]),
              void 0 === e.defaultData.name) &&
              (e.defaultData.name = t),
            bg.Policies.getSaveSiteToPersonal() && (A = LPProxy.getLinkedAccount()) && (e.defaultData = { group: A._data.group }),
            e.saveOptions && e.saveOptions.checkForReplacement)
          ) {
            for (
              var t = LPProxy.getDomain(e.defaultData.url), i = [], o = LPProxy.getSiteModels(e.defaultData.url), n = 0, s = o.length;
              n < s;
              ++n
            ) {
              var l = o[n];
              LPProxy.getDomain(l.getURL()) === t && e.defaultData.unencryptedUsername === l.getUsername() && i.push(l);
            }
            if (0 < i.length)
              return void dialogs.vaultItemSelect.open({
                title: this.siteTypeName
                  ? Strings.translateString("Replace %s", this.siteTypeName)
                  : Strings.translateString("Replace Site"),
                nextButtonText: Strings.translateString("Replace"),
                backButtonText: Strings.Vault.NO,
                text: Strings.translateString("Would you like to replace an existing entry you have for %s?", t),
                items: i,
                closeHandler: this.createHandler(EditableFieldsDialog.prototype.open, e),
                handler: this.createDynamicHandler(function (A) {
                  var t = e.defaultData;
                  delete e.defaultData,
                    EditableFieldsDialog.prototype.open.call(
                      this,
                      $.extend(e, {
                        vaultItem: A[0],
                        postSetup: function (A) {
                          A.populateFields(t);
                        }
                      })
                    );
                }),
                buildOptions: { multiSelect: !1 }
              });
          }
          if (
            ("object" == typeof e.vaultItem || "string" == typeof e.vaultItem) &&
            "object" == typeof reduxApp &&
            reduxApp.getState().settings.features.react_save_site_dialog &&
            ("string" == typeof e.vaultItem && ((A = LPProxy.getSiteModel(e.vaultItem)), (e.vaultItem = A)),
            (void 0 !== e.vaultItem._data && !e.vaultItem._data.save_all) ||
              (!e.vaultItem.save_all &&
                e.vaultItem._sharedGroup &&
                e.vaultItem._sharedGroup._data &&
                !e.vaultItem._sharedGroup._data.hasOwnProperty("tld") &&
                !e.vaultItem._sharedGroup._data.hasOwnProperty("unencryptedUsername")))
          )
            return $("#dialogLoadingOverlay").removeClass("overlay"), void reduxApp.openReactSaveSiteDialog(e, "Vault");
          EditableFieldsDialog.prototype.open.call(this, e);
        }),
        (SiteDialog.prototype.setup = function (A, t) {
          EditableFieldsDialog.prototype.setup.call(this, A, t),
            this.changePasswordButton.hide(),
            this.deleteTotpSecretButton.hide(),
            this.addTotpSecretButton.show(),
            this.vaultItem
              ? (A.find(".history").show(),
                "1" === this.vaultItem._data.pwch && this.changePasswordButton.show(),
                this.inputFields.url.disableDropdown())
              : (A.find(".history").hide(), this.inputFields.url.enableDropdown()),
            !t.vaultItem && LPFeatures.allowOmarIA() ? A.find(".dialogAllSitesButton").show() : A.find(".dialogAllSitesButton").hide(),
            "" == A.find("#siteDialogTotp")[0].value
              ? (A.find("#siteDialogDeleteTotpSecret").hide(), A.find("#siteDialogAddTotpSecret").show())
              : (A.find("#siteDialogDeleteTotpSecret").show(), A.find("#siteDialogAddTotpSecret").hide()),
            (LPProxy.isEnterpriseUser() && LPFeatures.allowTwoFactorCode()) || (A.find("#totpBlock").hide(), this.setDynamicHeight());
          var e = document.querySelectorAll("[data-field-name]");
          if (void 0 !== e) {
            for (var a = 0; a < e.length; a++) i.push({ trackingName: e[a].attributes["data-field-name"].value, isDirty: !1 });
            document.getElementById("siteDialog").addEventListener("click", function (t) {
              ((t.target.attributes["data-field-name"] && "" !== t.target.attributes["data-field-name"].value) ||
                "favButton" === t.target.className ||
                t.target.classList.contains("favButtonLabel")) &&
                ("favButton" === t.target.className || t.target.classList.contains("favButtonLabel")
                  ? (o.isFavorite = !0)
                  : "Folder" === t.target.attributes["data-field-name"].value
                  ? (o.isFolderFieldDirty = !0)
                  : Object.keys(i).forEach(function (A) {
                      t.target.attributes["data-field-name"].value === i[A].trackingName && (i[A].isDirty = !0);
                    }));
            });
          }
        }),
        (SiteDialog.prototype.validate = function (A) {
          var t = EditableFieldsDialog.prototype.validate.apply(this, arguments),
            e;
          return (
            "" === A.name && (this.addError("name", Strings.translateString("Name is required.")), (t = !1)),
            bg.Policies.getAccountSelectionBasedOnEmail() &&
              (e = LPProxy.getLinkedAccount()) &&
              A.unencryptedUsername === bg.get("g_username") &&
              -1 !== A.group.indexOf(e._shareInfo.decsharename) &&
              (this.addError("group", Strings.translateString("Cannot save to folder, restricted by a policy")), (t = !1)),
            t
          );
        }),
        (SiteDialog.prototype.handleSubmit = function (A) {
          "object" != typeof bg ||
            "function" != typeof bg.disableDropDownNotification ||
            "function" != typeof bg.setSecurityScoreAlertBadge ||
            this.vaultItem ||
            bg.setSecurityScoreAlertBadge(),
            VaultItemDialog.prototype.handleSubmit.call(this, A);
          var t = [],
            A = this.data.vaultItem ? "edit" : "add";
          Object.keys(i).forEach(function (A) {
            i[A].isDirty && t.push(i[A].trackingName);
          }),
            "add" == A
              ? bg.sendLpImprove("vault_add_item_dialog_clicked", {
                  dirty_fields: JSON.stringify(t),
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
                  dirty_fields: JSON.stringify(t),
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
        function (A, t) {
          t.fields = [];
          for (var e = A.split("\n"), a = 0, i = e.length; a < i; ++a) {
            var o = e[a].split("\t"),
              n = decodeURIComponent(o[0]),
              s = decodeURIComponent(o[1]),
              l = decodeURIComponent(o[2]),
              r = decodeURIComponent(o[3]);
            if ("action" === r) t.action = l;
            else if ("method" === r) t.method = l;
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
                  t.fields.push(d);
              }
          }
        });
  })();
