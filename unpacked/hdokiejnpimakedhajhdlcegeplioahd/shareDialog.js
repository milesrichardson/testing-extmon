var ShareDialog = function (e) {
  var t;
  Dialog.call(this, e, { nextButtonText: Strings.translateString("Share"), buttonAlign: this.RIGHT_ALIGN }),
    (this.enterpriseInvite = null),
    (this.items = null),
    (this.existingShares = null),
    (this.friends = null),
    (this.recipients = null),
    (this.dataContainer = null),
    (this.existingItems = {}),
    ((t = this).shareItemOverrides = {
      getContextMenuItems: function (e) {
        return [new LPTools.ContextMenuItem(Constants.ACTION_REMOVE)];
      },
      getItemButtonActions: function () {
        return [Constants.ACTION_EDIT, Constants.ACTION_REMOVE];
      },
      isOverride: function (e) {
        return e === Constants.ACTION_REMOVE;
      },
      remove: function () {
        delete t.existingItems[this._model.getID()], this.destruct();
      }
    });
};
(ShareDialog.prototype = Object.create(Dialog.prototype)),
  (ShareDialog.prototype.constructor = ShareDialog),
  (function (i) {
    (ShareDialog.prototype.open = function (e, t, i) {
      (this.existingShares = t),
        (this.friends = i),
        (this.items = e),
        (this.recipients = null),
        Dialog.prototype.open.call(this, {
          title: 1 === this.getItemCount() ? Strings.translateString("Share %s", e[0].toString()) : Strings.translateString("Share an Item")
        });
    }),
      (ShareDialog.prototype.getItemCount = function () {
        return this.items ? this.items.length : 0;
      }),
      (ShareDialog.prototype.initialize = function () {
        var i;
        Dialog.prototype.initialize.apply(this, arguments),
          (i = this),
          Topics.get(Topics.REMOVED_SHARED_FOLDER_USER).subscribe(function (e) {
            i.recipients && delete i.recipients[e.getID()], i.toggleUpgradeAccountByCanAddRecipient();
          }),
          Topics.get(Topics.REMOVED_SHARE).subscribe(function (t) {
            (i.existingShares = i.existingShares.filter(function (e) {
              return e.getID() !== t.getID();
            })),
              i.toggleUpgradeAccountByCanAddRecipient();
          }),
          (i.inputFields.itemSearch = new VaultItemTypeahead(document.getElementById("shareDialogItems"), {
            sourceFunction: function () {
              var e = LPProxy.getSites().concat(LPProxy.getNotes()).concat(LPProxy.getApplications());
              return LPProxy.assignItemsToGroups(e);
            },
            filter: function (e) {
              return !i.existingItems[e._model.getID()] && !e.isExcludedAction(Constants.ACTION_SHARE);
            }
          })),
          i.inputFields.itemSearch.onChange(function (e) {
            i.addItem(e);
          });
      }),
      (ShareDialog.prototype.addItem = function (e) {
        var t;
        e &&
          (null === (t = LPProxy.getSite(e)) && (t = LPProxy.getNote(e)),
          this.containers.shareItem.addChild(t),
          (this.existingItems[e] = !0),
          this.inputFields.itemSearch.clear(),
          this.inputFields.itemSearch.focus());
      }),
      (ShareDialog.prototype.cantShare = function () {
        var e = this.containers.recipients ? this.containers.recipients.getItemChildren().length : 0,
          t = this.existingShares ? this.existingShares.length : 0,
          i = (LPProxy.isFreeUser() && 1 <= e) || (LPProxy.isFreeUser() && 1 <= t),
          e = (LPProxy.isExpiredFamilyUser() && 1 <= e) || (LPProxy.isExpiredFamilyUser() && 1 <= t);
        return !(!i && !e);
      }),
      (ShareDialog.prototype.toggleUpgradeAccountByCanAddRecipient = function () {
        var e, t, i, e, t, i;
        LPProxy.isFreeUser()
          ? ((e = "upgradePremium"), (t = "premium"), (i = document.getElementById("shareDialogFreeWarningPremium")))
          : LPProxy.isFamilyUser() &&
            ((e = "upgradeFamilies"), (t = "families"), (i = document.getElementById("shareDialogFreeWarningFamilies"))),
          this.cantShare()
            ? (this.inputFields.inviteInput.disable(),
              i.classList.remove("hidden"),
              bg.sendLpImprove("shared_folder_upgrade_shown"),
              (document.getElementById(e).onclick = function () {
                window.open("https://lastpass.com/" + t + "/payment"), bg.sendLpImprove("shared_folder_upgrade_click");
              }))
            : i && (i.classList.add("hidden"), this.inputFields.inviteInput.enable());
      }),
      (ShareDialog.prototype.setup = function (e, t) {
        this.existingShares && 0 < this.existingShares.length
          ? ((this.containers.share = new IndividualShareContainer(this.existingShares, {
              minimized: !0,
              additionalGroupClasses: "dialogItemGroup",
              excludeActions: [Constants.ACTION_EDIT, Constants.ACTION_SHARE]
            })),
            this.containers.share.initialize(i.getElementById("shareDialogExistingShares")),
            this.$element.removeClass("noShares"))
          : this.$element.addClass("noShares"),
          1 === this.getItemCount() && this.items[0] instanceof Note
            ? $("#shareDialogPermissionContainer").hide()
            : $("#shareDialogPermissionContainer").show(),
          (function (s) {
            if (
              (LPProxy.isEnterpriseUser()
                ? ($("#shareDialogFreeWarningPremium").remove(),
                  $("#shareDialogFreeWarningFamilies").remove(),
                  (s.recipients = {}),
                  s.enterpriseInvite ||
                    ((s.enterpriseInvite = !0),
                    (s.inputFields.inviteInput = new BloodhoundDropdown(
                      document.getElementById("shareDialogEmails"),
                      {
                        local: this.friends,
                        identify: function (e) {
                          return e.email;
                        },
                        remote: { url: LPProxy.getBaseURL() + "typeahead_remote.php?q=%QUERY", wildcard: "%QUERY" }
                      },
                      {
                        optionLabel: function (e) {
                          return new ShareRecipient(e).getLabel();
                        },
                        ignore: function (e) {
                          return s.recipients[e];
                        }
                      },
                      { autoCompleteBlurs: !1 }
                    )),
                    s.inputFields.inviteInput.onChange(function (e) {
                      var e = new ShareRecipient(e);
                      (s.recipients[e.getID()] = !0), s.addRecipient(e);
                    })))
                : ((null !== s.enterpriseInvite && !s.enterpriseInvite) ||
                    ((s.enterpriseInvite = !1),
                    (s.inputFields.inviteInput = new TypeaheadDropdown(document.getElementById("shareDialogEmails"), null, {
                      autoCompleteBlurs: !1
                    })),
                    s.inputFields.inviteInput.onChange(function (e) {
                      e && s.addRecipient(new ShareRecipient({ email: e }));
                    })),
                  s.inputFields.inviteInput.setValues(s.friends),
                  s.toggleUpgradeAccountByCanAddRecipient()),
              s.setupComplete && s.inputFields.inviteInput.adjustView(),
              (s.inputFields.inviteInput.autocomplete = function (e) {
                var t = e.target.value;
                if (null === this.hint && t) {
                  for (var i = s.parseRecipientInput(t), n = 0, r = i.length; n < r; ++n) s.addRecipient(i[n]);
                  e.preventDefault();
                }
                TypeaheadDropdown.prototype.autocomplete.apply(this, arguments);
              }),
              1 === s.getItemCount())
            )
              s.$element.addClass("site");
            else if (
              (s.$element.removeClass("site"),
              (s.containers.shareItem = new Container([], {
                display: VaultItemBaseDisplay.prototype.DISPLAY_LIST,
                additionalItemClasses: "dialogItem",
                allowDrag: !1,
                override: function () {
                  return s.shareItemOverrides;
                },
                publishSelect: !1
              })),
              s.containers.shareItem.initialize(i.getElementById("shareItemsContainer")),
              0 < s.getItemCount())
            )
              for (var e = 0, t = s.items.length; e < t; ++e) s.addItem(s.items[e].getID());
          })(this),
          Dialog.prototype.setup.apply(this, arguments);
      }),
      (ShareDialog.prototype.close = function () {
        var e;
        Dialog.prototype.close.apply(this, arguments) && (this.existingItems = {});
      }),
      (ShareDialog.prototype.parseRecipientInput = function (e) {
        if (null === e) throw new Error("Argument can not be null.");
        var e = e.match(Constants.EmailAddressRegularExpression);
        return e
          ? e.map(function (e) {
              var e = new ShareRecipient({ email: e });
              return e.setEditable(!0), e;
            })
          : [];
      }),
      (ShareDialog.prototype.addRecipient = function (e) {
        this.cantShare() ||
          (this.containers.recipients ||
            ((this.containers.recipients = new Container([], { additionalItemClasses: "dialogItem", keyboardNavigation: !0 })),
            this.containers.recipients.initialize(document.getElementById("shareDialogRecipients"))),
          this.containers.recipients.addChild(e),
          this.inputFields.inviteInput.clear(),
          this.inputFields.inviteInput.focus(),
          this.toggleUpgradeAccountByCanAddRecipient());
      });
    var s = function (e) {
      for (var t = [], i = 0, n = e.length; i < n; ++i) t.push(e[i].getID());
      return t;
    };
    (ShareDialog.prototype.getData = function () {
      for (
        var e = Dialog.prototype.getData.apply(this, arguments),
          t = [],
          i = (this.containers.recipients && (t = this.containers.recipients.getItemChildren()), []),
          n = 0,
          r = (t = e.inviteInput ? t.concat(this.parseRecipientInput(e.inviteInput)) : t).length;
        n < r;
        ++n
      )
        i.push(t[n].getEmail());
      return (
        (e.emails = i.join(",")),
        1 === this.getItemCount() ? (e.aids = [this.items[0].getID()]) : (e.aids = s(this.containers.shareItem.getItemModelChildren())),
        e
      );
    }),
      (ShareDialog.prototype.validate = function (e) {
        var t = Dialog.prototype.validate.apply(this, arguments);
        return (
          "" === e.emails &&
            (this.addError("inviteInput", Strings.translateString("You must enter at least one recipient email address.")), (t = !1)),
          (e.aids && 0 !== e.aids.length) ||
            (this.addError("itemSearch", Strings.translateString("You must select at least one item to share.")), (t = !1)),
          t
        );
      }),
      (ShareDialog.prototype.handleSubmit = function (e) {
        LPRequest.makeUpdateRequest(LPProxy.shareItems, { params: e }),
          reduxApp &&
            "function" == typeof reduxApp.completeSecondaryOnboardingSkill &&
            reduxApp.completeSecondaryOnboardingSkill("SharePassword");
      });
  })(document);
