var EmergencyAccessUserContainer = function (e, t) {
    (this.pendingGroup = new SharedSiteGroup(Strings.translateString("Pending"), "pendingFolder")),
      (this.acceptedGroup = new SharedSiteGroup(Strings.translateString("People I Trust"), "acceptedFolder")),
      (this.declinedGroup = new SharedSiteGroup(Strings.translateString("Declined Offers"), "declinedFolder")),
      Container.call(this, [this.declinedGroup, this.pendingGroup, this.acceptedGroup], t);
    for (var s = 0, n = e.length; s < n; ++s) this.addChild(e[s]);
  },
  EmergencyAccessRecipientContainer =
    ((EmergencyAccessUserContainer.prototype = Object.create(SharingContainer.prototype)),
    ((EmergencyAccessUserContainer.prototype.constructor = EmergencyAccessUserContainer).prototype.addChild = (function () {
      var e = function (e) {
        e._model.hasAccepted()
          ? this.acceptedGroup.addChild(e)
          : e._model.hasDeclined()
          ? this.addDeclined(e)
          : this.pendingGroup.addChild(e);
      };
      return function () {
        this.checkForStateChange(e, arguments);
      };
    })()),
    (EmergencyAccessUserContainer.prototype.addDeclined = function () {}),
    function (e, t) {
      EmergencyAccessUserContainer.call(this, e, t);
    }),
  EmergencyAccessSharerContainer =
    ((EmergencyAccessRecipientContainer.prototype = Object.create(EmergencyAccessUserContainer.prototype)),
    ((EmergencyAccessRecipientContainer.prototype.constructor = EmergencyAccessRecipientContainer).prototype.addDeclined = function (e) {
      this.declinedGroup.addChild(e);
    }),
    function (e, t) {
      EmergencyAccessUserContainer.call(this, e, t),
        (this.acceptedGroup._model._data.group = Strings.translateString("People Who Trust Me"));
    }),
  EmergencyAccessUserDisplay =
    ((EmergencyAccessSharerContainer.prototype = Object.create(EmergencyAccessUserContainer.prototype)),
    (EmergencyAccessSharerContainer.prototype.constructor = EmergencyAccessSharerContainer),
    !(function () {
      var t = function () {
        this._data.override_date && (this._data.override_date = new Date(this._data.override_date));
      };
      ((EmergencyAccessUser = function (e) {
        VaultItemBase.call(this, e), t.call(this);
      }).prototype = Object.create(VaultItemBase.prototype)),
        ((EmergencyAccessUser.prototype.constructor = EmergencyAccessUser).prototype.refresh = function (e) {
          return VaultItemBase.prototype.refresh.call(this, e), t.call(this), this;
        });
    })(),
    (EmergencyAccessUser.prototype.getName = function () {
      return this._data.username;
    }),
    (EmergencyAccessUser.prototype.getID = EmergencyAccessUser.prototype.getName),
    (EmergencyAccessUser.prototype.getFormData = function (e) {
      var t = VaultItemBase.prototype.getFormData.apply(this, arguments);
      return (t.hours_to_override = this.getHours()), t;
    }),
    (EmergencyAccessUser.prototype.getHours = function () {
      return this._data.hours_to_override;
    }),
    (EmergencyAccessUser.prototype.isLinked = function () {
      return "1" === this._data.linked;
    }),
    (EmergencyAccessUser.prototype.hasAccepted = function () {
      return "1" === this._data.accepted;
    }),
    (EmergencyAccessUser.prototype.hasDeclined = function () {
      return "-1" === this._data.accepted;
    }),
    (EmergencyAccessUser.prototype.hasRequestedAccess = function () {
      return "1" === this._data.confirmed;
    }),
    (EmergencyAccessUser.prototype.allowedAccess = function () {
      return "1" === this._data.allowed_access;
    }),
    (EmergencyAccessUser.prototype.getAccessDate = function () {
      return this._data.override_date;
    }),
    (EmergencyAccessUser.prototype.getAccessDateAsString = function () {
      return this._data.override_date.toLocaleString();
    }),
    function (e) {
      VaultItemBaseDisplay.call(this, e);
    }),
  EmergencyAccessRecipientDisplay =
    ((EmergencyAccessUserDisplay.prototype = Object.create(VaultItemBaseDisplay.prototype)),
    ((EmergencyAccessUserDisplay.prototype.constructor = EmergencyAccessUserDisplay).prototype.buildItemInfoTextElements = function () {
      var e = VaultItemBaseDisplay.prototype.buildItemInfoTextElements.apply(this, arguments),
        t = [];
      return (
        this._model.hasRequestedAccess()
          ? (Date.now() < this._model._data.override_date
              ? t.push(LPTools.createElement("p", "small infoLabel", Strings.Vault.ACCESS_PENDING))
              : t.push(LPTools.createElement("p", "small infoLabel", Strings.Vault.ACCESS_GRANTED)),
            t.push(this.createTextElement("p", this.getAccessDate, "small")))
          : (t.push(LPTools.createElement("p", "small infoLabel", Strings.Vault.WAITING_PERIOD)),
            t.push(this.createTextElement("p", this.getHoursAsString, "small"))),
        e.push(this.buildItemInfoTextElement(t)),
        e
      );
    }),
    (EmergencyAccessUserDisplay.prototype.getIconElement = function () {
      return LPTools.createElement("img", { src: "images/vault_4.0/Identity_Avatar.png", class: "bigIcon" });
    }),
    (EmergencyAccessUserDisplay.prototype.getHoursAsString = function () {
      var e = parseInt(this._model.getHours()),
        e;
      return (e =
        0 === e
          ? Strings.translateString("Immediately")
          : e < 72
          ? Strings.translateString("%d hours", e)
          : Strings.translateString("%d days", parseInt(e / 24)));
    }),
    (EmergencyAccessUserDisplay.prototype.getAccessDate = function () {
      return this._model.getAccessDateAsString();
    }),
    ((EmergencyAccessRecipient = function (e) {
      EmergencyAccessUser.call(this, e);
    }).prototype = Object.create(EmergencyAccessUser.prototype)),
    ((EmergencyAccessRecipient.prototype.constructor = EmergencyAccessRecipient).prototype.getDisplayClass = function () {
      return EmergencyAccessRecipientDisplay;
    }),
    (EmergencyAccessRecipient.prototype.handleClickEvent = function (e, t) {
      switch (e) {
        case Constants.ACTION_EMAIL:
          this.resendOffer();
          break;
        case Constants.ACTION_REVOKE:
        case Constants.ACTION_CANCEL:
          this.revokeOffer();
          break;
        default:
          VaultItemBase.prototype.handleClickEvent.apply(this, arguments);
      }
    }),
    (EmergencyAccessRecipient.prototype.edit = function () {
      LPProxy.isExpiredFamilyUser() ? LPVault.openRestrictedEmergencyAccess() : Topics.get(Topics.EDIT_EMERGENCY_RECIPIENT).publish(this);
    }),
    (EmergencyAccessRecipient.prototype.revokeOffer = (function () {
      var e = function () {
        Topics.get(Topics.SUCCESS).publish(Strings.translateString("Revoked")), this.deleteUpdates(!1);
      };
      return function () {
        LPRequest.makeRequest(LPProxy.revokeEmergencyAccessOffer, {
          params: { email: this.getName() },
          success: this.createHandler(e),
          lockItems: !0,
          items: this,
          confirm: {
            title: Strings.Vault.REVOKE,
            text: Strings.translateString("Are you sure you want to revoke emergency access for %s?", this.getName())
          }
        });
      };
    })()),
    (EmergencyAccessRecipient.prototype.add = (function () {
      var e = function () {
        Topics.get(Topics.EMERGENCY_RECIPIENT_ADDED).publish(this),
          Topics.get(Topics.SUCCESS).publish(Strings.translateString("Invitation sent."));
      };
      return function () {
        LPRequest.makeUpdateRequest(LPProxy.addEmergencyAccessRecipient, {
          params: { recipient: this._data },
          success: this.createHandler(e)
        });
      };
    })()),
    (EmergencyAccessRecipient.prototype.save = (function () {
      var t = function (e) {
        this.update(e), this.publishSaveSuccess(1);
      };
      return function (e) {
        LPRequest.makeUpdateRequest(LPProxy.updateEmergencyAccessRecipient, { params: { recipient: e }, success: this.createHandler(t) });
      };
    })()),
    (EmergencyAccessRecipient.prototype.resendOffer = (function () {
      var e = function () {
        Topics.get(Topics.SUCCESS).publish(Strings.translateString("Invitation sent."));
      };
      return function () {
        LPRequest.makeUpdateRequest(LPProxy.updateEmergencyAccessRecipient, {
          params: { recipient: this._data },
          lockItems: !0,
          items: this,
          success: e
        });
      };
    })()),
    (EmergencyAccessRecipient.prototype.toString = function () {
      return Strings.Vault.EMERGENCY_ACCESS_RECIPIENT + ": " + this.getName();
    }),
    function (e) {
      EmergencyAccessUserDisplay.call(this, e);
    }),
  EmergencyAccessSharerDisplay =
    ((EmergencyAccessRecipientDisplay.prototype = Object.create(EmergencyAccessUserDisplay.prototype)),
    ((EmergencyAccessRecipientDisplay.prototype.constructor = EmergencyAccessRecipientDisplay).prototype.getItemButtonActions =
      function () {
        return this._model.hasAccepted()
          ? [Constants.ACTION_EDIT, Constants.ACTION_REVOKE]
          : [Constants.ACTION_EDIT, Constants.ACTION_EMAIL, Constants.ACTION_CANCEL];
      }),
    (EmergencyAccessRecipientDisplay.prototype.getContextMenuItems = function (e) {
      var t = [new LPTools.ContextMenuItem(Constants.ACTION_EDIT)];
      return (
        this._model.hasAccepted()
          ? t.push(new LPTools.ContextMenuItem(Constants.ACTION_REVOKE))
          : (t.push(new LPTools.ContextMenuItem(Constants.ACTION_EMAIL)), t.push(new LPTools.ContextMenuItem(Constants.ACTION_CANCEL))),
        t
      );
    }),
    (EmergencyAccessRecipientDisplay.prototype.createSecondaryNameTextElement = function () {
      var e;
      return this._model.isLinked()
        ? ((e = LPTools.createElement("p", "small infoLabel", Strings.Vault.LINKED)).insertBefore(
            LPTools.createElement("i", "badge danger small"),
            e.firstChild
          ),
          e)
        : null;
    }),
    ((EmergencyAccessSharer = function (e) {
      EmergencyAccessUser.call(this, e);
    }).prototype = Object.create(EmergencyAccessUser.prototype)),
    ((EmergencyAccessSharer.prototype.constructor = EmergencyAccessSharer).prototype.getDisplayClass = function () {
      return EmergencyAccessSharerDisplay;
    }),
    (EmergencyAccessSharer.prototype.handleClickEvent = function (e, t) {
      switch (e) {
        case Constants.ACTION_ACCESS:
          this.requestAccess();
          break;
        case Constants.ACTION_ACCEPT:
          this.acceptOffer();
          break;
        case Constants.ACTION_REJECT:
          this.declineOffer();
          break;
        case Constants.ACTION_UNLINK:
          this.unlinkAccount();
          break;
        default:
          VaultItemBase.prototype.handleClickEvent.apply(this, arguments);
      }
    }),
    (EmergencyAccessSharer.prototype.requestAccess = (function () {
      var e = function (e) {
        this.update(e);
      };
      return function () {
        LPRequest.makeRequest(LPProxy.requestEmergencyAccess, {
          params: { sharer: this._data },
          lockItems: !0,
          items: this,
          success: this.createHandler(e),
          confirm: {
            title: Strings.Vault.CONFIRM_REQUEST_ACCESS,
            text: [
              Strings.translateString(
                "Emergency Access should only be requested if there is a valid emergency situation and you need to manage another user's vault."
              ),
              Strings.translateString("Are you sure you want to continue?")
            ]
          }
        });
      };
    })()),
    (EmergencyAccessSharer.prototype.unlinkAccount = (function () {
      var e = function () {
        Topics.get(Topics.SUCCESS).publish(Strings.translateString("Account (%s) unlinked.", this.getName())),
          Topics.get(Topics.REFRESH_DATA).publish();
      };
      return function () {
        LPRequest.makeRequest(LPProxy.unlinkEmergencyAccessAccount, { params: { email: this.getName() }, success: this.createHandler(e) });
      };
    })()),
    (EmergencyAccessSharer.prototype.acceptOffer = (function () {
      var e = function (e) {
        this.update(e),
          Topics.get(Topics.SUCCESS).publish(Strings.translateString("Accepted")),
          Topics.get(Topics.UPDATE_NOTIFICATION_COUNT).publish();
      };
      return function () {
        LPRequest.makeUpdateRequest(LPProxy.acceptEmergencyAccessOffer, {
          params: { sharer: this._data },
          lockItems: !0,
          items: this,
          success: this.createHandler(e)
        });
      };
    })()),
    (EmergencyAccessSharer.prototype.declineOffer = (function () {
      var e = function () {
        Topics.get(Topics.UPDATE_NOTIFICATION_COUNT).publish(),
          Topics.get(Topics.SUCCESS).publish(Strings.translateString("Declined")),
          this.deleteUpdates(!1);
      };
      return function () {
        LPRequest.makeUpdateRequest(LPProxy.declineEmergencyAccessOffer, {
          params: { email: this.getName() },
          success: this.createHandler(e),
          lockItems: !0,
          items: this,
          confirm: {
            title: Strings.translateString("Decline"),
            text: Strings.translateString("Are you sure you want to decline to be the emergency access contact for %s?", this.getName())
          }
        });
      };
    })()),
    function (e) {
      EmergencyAccessUserDisplay.call(this, e);
    });
(EmergencyAccessSharerDisplay.prototype = Object.create(EmergencyAccessUserDisplay.prototype)),
  ((EmergencyAccessSharerDisplay.prototype.constructor = EmergencyAccessSharerDisplay).prototype.getLaunchElementAction = function () {
    var e = null;
    return (
      this._model.hasAccepted()
        ? this._model.isLinked()
          ? (e = Constants.ACTION_UNLINK)
          : this._model.hasRequestedAccess() || (e = Constants.ACTION_ACCESS)
        : (e = Constants.ACTION_ACCEPT),
      e
    );
  }),
  (EmergencyAccessSharerDisplay.prototype.getItemButtonActions = function () {
    var e = [Constants.ACTION_REJECT];
    return this._model.hasAccepted() || e.unshift(Constants.ACTION_ACCEPT), e;
  }),
  (EmergencyAccessSharerDisplay.prototype.getContextMenuItems = function (e) {
    var t = [new LPTools.ContextMenuItem(Constants.ACTION_REJECT)];
    return (
      this._model.hasAccepted()
        ? this._model.isLinked()
          ? t.unshift(new LPTools.ContextMenuItem(Constants.ACTION_UNLINK, { text: Strings.Vault.UNLINK }))
          : t.unshift(new LPTools.ContextMenuItem(Constants.ACTION_ACCESS))
        : t.unshift(new LPTools.ContextMenuItem(Constants.ACTION_ACCEPT)),
      t
    );
  }),
  (EmergencyAccessSharerDisplay.prototype.createSecondaryNameTextElement = function () {
    var e;
    return this._model.isLinked()
      ? ((e = LPTools.createElement("p", "small infoLabel", Strings.Vault.LINKED)).insertBefore(
          LPTools.createElement("i", "badge success small"),
          e.firstChild
        ),
        e)
      : null;
  }),
  (EmergencyAccessSharerDisplay.prototype.updateView = function () {
    this.rebuild();
    var e = this.getContainer();
    e && (this._parent.removeChild(this), e.addChild(this));
  });
