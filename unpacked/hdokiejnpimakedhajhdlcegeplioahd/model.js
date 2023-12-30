"function" != typeof Object.create &&
  (Object.create = function (t) {
    function e() {}
    return (e.prototype = t), new e();
  }),
  (function () {
    var o = function (t, e) {
      var t;
      (this._data = $.extend(!0, {}, t)),
        (this._sharedGroup = e)
          ? ((t = this.getTopLevelGroupName()),
            e.getName() !== t && (this._data.group = e.getName() + this._data.group.substring(t.length)))
          : !this.useSharePrefix() &&
            this._data.group &&
            0 === this._data.group.indexOf(this.SHARED_FOLDER_NAME_PREFIX) &&
            (this._data.group = this._data.group.substring(this.SHARED_FOLDER_NAME_PREFIX.length));
    };
    (VaultItemBase = function (t, e) {
      (this._views = []), o.apply(this, arguments);
    }).prototype.refresh = function (t, e) {
      return o.apply(this, arguments), this;
    };
  })(),
  (VaultItemBase.prototype.defaultFields = function (t, e) {
    for (var o in ((e = e || this._data), t)) void 0 === e[o] && (e[o] = t[o]);
  }),
  (VaultItemBase.prototype.SHARED_FOLDER_NAME_PREFIX = "Shared-"),
  (VaultItemBase.prototype.useSharePrefix = function () {
    var t;
    return !!this.getSharedGroup() && this._sharedGroup.useSharePrefix();
  }),
  (VaultItemBase.prototype.getTopLevelGroupName = function () {
    var t = this._data.group || "",
      e = t.indexOf("\\");
    return -1 < (e = this.getSharedGroup() instanceof LinkedSharedGroup ? t.indexOf("\\", e + 1) : e) ? t.substring(0, e) : t;
  }),
  ((VaultItem = (function () {
    var o = { pwprotect: !1 },
      t;
    return function (t, e) {
      VaultItemBase.call(this, t, e), this.defaultFields(o);
    };
  })()).prototype = Object.create(VaultItemBase.prototype)),
  (VaultItem.prototype.constructor = VaultItem),
  ((AccountBase = (function () {
    var o = {
        action: "",
        aid: "0",
        basic_auth: "0",
        captcha_id: "",
        custom_js: "",
        extra: "",
        fields: [],
        group: "",
        fiid: "",
        genpw: !1,
        individualshare: !1,
        last_touch: "0",
        method: "",
        newvalues: [],
        realm_data: "",
        sharedfromuid: "",
        submit_id: "",
        urid: "0",
        fav: "0",
        username: "",
        password: "",
        totp: ""
      },
      t;
    return function (t, e) {
      VaultItem.call(this, t, e), this.defaultFields(o);
    };
  })()).prototype = Object.create(VaultItem.prototype)),
  (AccountBase.prototype.constructor = AccountBase),
  ((AccountBaseWithFields = function (t, e) {
    AccountBase.call(this, t, e);
  }).prototype = Object.create(AccountBase.prototype)),
  (AccountBaseWithFields.prototype.constructor = AccountBaseWithFields),
  ((Account = function (t, e) {
    AccountBaseWithFields.call(this, t, e), (this._data.sn = 0);
  }).prototype = Object.create(AccountBaseWithFields.prototype)),
  ((Account.prototype.constructor = Account).prototype.getDisplayClass = function () {
    return "Cloud Apps" === this.getRecordType() ? CloudAppDisplay : AccountDisplay;
  }),
  (Account.prototype.TYPE = "Account"),
  (Account.prototype.getRecordType = function () {
    return LPFeatures.cloud_apps_filter_in_vault() &&
      void 0 !== this._data.aid &&
      "string" == typeof this._data.aid &&
      "sso_" === this._data.aid.substr(0, 4)
      ? "Cloud Apps"
      : Account.prototype.TYPE;
  }),
  ((AuroraAccount = function (t, e) {
    Account.call(this, t, e), (this.currentSearch = { searchToken: null, matchSource: null, searchTextLength: null });
  }).prototype = Object.create(Account.prototype)),
  ((AuroraAccount.prototype.constructor = AuroraAccount).prototype.getDisplayClass = function () {
    return AuroraAccountDisplay;
  }),
  ((Group = function (t, e) {
    AccountBase.call(this, t, e), (this._data.url = "http://group");
  }).prototype = Object.create(AccountBase.prototype)),
  ((Group.prototype.constructor = Group).prototype.getDisplayClass = function () {
    return GroupDisplay;
  }),
  (Group.prototype.TYPE = "Group"),
  ((DummyGroup = function (t, e) {
    Group.call(this, { group: t }, e);
  }).prototype = Object.create(Group.prototype)),
  ((DummyGroup.prototype.constructor = DummyGroup).prototype.destruct = function () {
    this._views.forEach(function (t) {
      "function" == typeof t.destruct && t.destruct();
    });
  }),
  (DummyGroup.prototype.getDisplayClass = function () {
    return DummyGroupDisplay;
  }),
  ((DefaultGroup = function (t) {
    DummyGroup.call(this, t);
  }).prototype = Object.create(DummyGroup.prototype)),
  ((DefaultGroup.prototype.constructor = DefaultGroup).prototype.getDisplayClass = function () {
    return DefaultGroupDisplay;
  }),
  (function () {
    var a = {
        accepted: "1",
        association: "0",
        associative: "0",
        can_administer: "1",
        cgid: "0",
        deleted: "0",
        download: "1",
        give: "1",
        id: "0",
        invisible: "0",
        outside_enterprise: "0",
        readonly: "0",
        shareid: "0"
      },
      o = function (t, e) {
        this.useSharePrefix() &&
          0 !== this._data.group.indexOf(this.SHARED_FOLDER_NAME_PREFIX) &&
          (this._data.group = this.SHARED_FOLDER_NAME_PREFIX + this._data.group),
          (this._data.group = this.getTopLevelGroupName()),
          (e = $.extend(!0, {}, e));
        var o = LPTools.get_gmt_timestamp();
        (a.create = o),
          (a.last_modified = o),
          this.defaultFields(a, e),
          (this._shareInfo = e),
          (this._shareInfo.name = this.getShareGroupName()),
          (this._shareInfo.decsharename = this._data.group),
          this.setID(this._data.aid);
      };
    ((SharedGroup = function (t, e) {
      Group.call(this, t), o.apply(this, arguments);
    }).prototype = Object.create(Group.prototype)),
      ((SharedGroup.prototype.constructor = SharedGroup).prototype.refresh = function (t, e) {
        return Group.prototype.refresh.call(this, t), o.apply(this, arguments), this;
      });
  })(),
  (SharedGroup.prototype.getDisplayClass = function () {
    return SharedGroupDisplay;
  }),
  ((LinkedGroup = function (t, e) {
    SharedGroup.call(this, t, e);
  }).prototype = Object.create(SharedGroup.prototype)),
  ((LinkedGroup.prototype.constructor = LinkedGroup).prototype.getDisplayClass = function () {
    return LinkedGroupDisplay;
  }),
  ((LinkedSharedGroup = function (t, e) {
    LinkedGroup.call(this, t, e);
  }).prototype = Object.create(LinkedGroup.prototype)),
  ((LinkedSharedGroup.prototype.constructor = LinkedSharedGroup).prototype.getDisplayClass = function () {
    return LinkedSharedGroupDisplay;
  }),
  (LinkedSharedGroup.prototype.useSharePrefix = function () {
    return !1;
  }),
  (LinkedSharedGroup.prototype.getTopLevelGroupName = function () {
    return this._data.group;
  }),
  ((EmergencyAccessGroup = function (t, e) {
    LinkedGroup.call(this, t, e);
  }).prototype = Object.create(LinkedGroup.prototype)),
  ((EmergencyAccessGroup.prototype.constructor = EmergencyAccessGroup).prototype.getDisplayClass = function () {
    return EmergencyAccessGroupDisplay;
  }),
  ((AuroraGroup = function (t) {
    Group.call(this, t);
  }).prototype = Object.create(Group.prototype)),
  ((AuroraGroup.prototype.constructor = AuroraGroup).prototype.getDisplayClass = function () {
    return AuroraGroupDisplay;
  }),
  (function () {
    var a = function (t, e, o) {
        (this._data.sn = 1), (this._data.url = "http://sn"), (this._attachments = o || []);
        for (var a = 0, r = this._attachments.length; a < r; ++a) this._attachments[a].setParentNote(this);
      },
      e =
        (((Note = function (t, e, o) {
          AccountBase.call(this, t, e), a.apply(this, arguments);
        }).prototype = Object.create(AccountBase.prototype)),
        ((Note.prototype.constructor = Note).prototype.refresh = function (t, e, o) {
          return AccountBase.prototype.refresh.apply(this, arguments), a.apply(this, arguments), this;
        }),
        (Note.prototype.edit = function (t) {
          return e(this), VaultItemBase.prototype.edit.apply(this, arguments), this;
        }),
        function (t) {
          t._data.individualshare &&
            t._data.sharedfromaid &&
            $.ajax({
              method: "get",
              url: (bg.get("base_url") || "/") + "lmiapi/shares/" + t._data.aid + "/is-active",
              success: function (t) {
                t.isShareActive ||
                  (Notifications.initialize(),
                  Notifications.displayErrorMessage(Strings.translateString("The owner of this item is no longer sharing it with you.")),
                  top.get_accts());
              },
              error: function () {}
            });
        });
  })(),
  (Note.prototype.getDisplayClass = function () {
    return NoteDisplay;
  }),
  (Note.prototype.TYPE = "Note"),
  ((FormFill = (function () {
    var o = {
        address1: "",
        address2: "",
        address3: "",
        bankacctnum: "",
        bankname: "",
        bankroutingnum: "",
        birthday: "",
        cccsc: "",
        ccexp: "",
        ccissuenum: "",
        ccname: "",
        ccnum: "",
        ccstart: "",
        city: "",
        company: "",
        country: "",
        country_cc3l: "",
        country_name: "",
        county: "",
        creditmon: "",
        customfield1alttext: "",
        customfield1cfid: "0",
        customfield1text: "",
        customfield1value: "",
        customfield2alttext: "",
        customfield2cfid: "0",
        customfield2text: "",
        customfield2value: "",
        customfield3alttext: "",
        customfield3cfid: "0",
        customfield3text: "",
        customfield3value: "",
        deleteext: 0,
        driverlicensenum: "",
        email: "",
        eveext: "",
        evephone: "",
        evephone3lcc: "",
        fax: "",
        fax3lcc: "",
        faxext: "",
        ffid: 0,
        firstname: "",
        firstname2: "",
        firstname3: "",
        gender: "",
        group: "",
        lastname: "",
        lastname2: "",
        lastname3: "",
        middlename: "",
        mobileemail: "",
        mobileext: "",
        mobilephone: "",
        mobilephone3lcc: "",
        notes: "",
        phone: "",
        phone3lcc: "",
        phoneext: "",
        profilelanguage: "",
        profilename: "",
        profiletype: 0,
        ssn: "",
        state: "",
        state_name: "",
        taxid: "",
        timezone: "",
        title: "",
        username: "",
        zip: ""
      },
      t;
    return function (t, e) {
      VaultItem.call(this, t, e),
        this.defaultFields(o),
        void 0 === this._data.decprofilename &&
          (this._data.decprofilename = LPProxy.decryptMobile(this._data.profilename, !0, this.getKey()));
    };
  })()).prototype = Object.create(VaultItem.prototype)),
  ((FormFill.prototype.constructor = FormFill).prototype.getDisplayClass = function () {
    return FormFillDisplay;
  }),
  (FormFill.prototype.TYPE = "FormFill"),
  (FormFill.prototype.getRecordType = function () {
    return FormFill.prototype.TYPE;
  }),
  ((Attachment = function (t) {
    VaultItemBase.call(this, t), (this._filename = null);
  }).prototype = Object.create(VaultItemBase.prototype)),
  ((Attachment.prototype.constructor = Attachment).prototype.getDisplayClass = function () {
    return AttachmentDisplay;
  }),
  ((Identity = function (t) {
    VaultItemBase.call(this, t),
      this.defaultFields({ iid: "0" }),
      (this._enabled = !1),
      void 0 === this._data.deciname && (this._data.deciname = LPProxy.decrypt(this._data.iname, this.getKey()));
  }).prototype = Object.create(VaultItemBase.prototype)),
  ((Identity.prototype.constructor = Identity).prototype.getDisplayClass = function () {
    return IdentityDisplay;
  }),
  ((AllIdentity = function () {
    Identity.call(this), (this._data.deciname = Strings.translateString("All")), (this._data.iid = "");
  }).prototype = Object.create(Identity.prototype)),
  ((AllIdentity.prototype.constructor = AllIdentity).prototype.getDisplayClass = function () {
    return AllIdentityDisplay;
  }),
  ((Application = (function () {
    var o = { appaid: "0" },
      t;
    return function (t, e) {
      AccountBaseWithFields.call(this, t, e), this.defaultFields(o), this.setSaveAll();
    };
  })()).prototype = Object.create(AccountBaseWithFields.prototype)),
  (Application.prototype.constructor = AccountBaseWithFields),
  (Application.prototype.getDisplayClass = function () {
    return ApplicationDisplay;
  }),
  (Application.prototype.getRecordType = function () {
    return Application.prototype.TYPE;
  }),
  (Application.prototype.TYPE = "Application"),
  (function (n, G, h, g) {
    var r,
      s,
      e,
      a,
      o,
      i,
      p,
      c,
      u,
      l,
      d,
      y,
      f,
      t,
      m,
      _,
      S,
      v,
      B,
      I,
      A,
      T,
      E,
      b,
      N,
      V,
      M,
      U,
      C,
      D,
      P,
      x,
      Y,
      K,
      R,
      q,
      W,
      H,
      j,
      F,
      O,
      z,
      J,
      X,
      w,
      k,
      L,
      $,
      Z,
      Q,
      tt;
    (r = function (t, e, o) {
      return e < t ? (o ? 1 : -1) : t < e ? (o ? -1 : 1) : 0;
    }),
      (VaultItemBase.prototype.getRecordType = function () {
        return null;
      }),
      (VaultItemBase.prototype.sortByFunction = function (t, e, o, a) {
        var t = t[o].apply(t),
          o = e[o].apply(e);
        return r(t, o, a);
      }),
      (VaultItemBase.prototype.sortByTextFunction =
        ((s = function (t, e) {
          var e = t[e].apply(t);
          return "string" == typeof e ? e.toLowerCase() : "";
        }),
        function (t, e, o, a) {
          return r(s(t, o), s(e, o), a);
        })),
      (VaultItemBase.prototype.sortByNameAsc = function (t, e) {
        return VaultItemBase.prototype.sortByTextFunction(t, e, "getName", !0);
      }),
      (VaultItemBase.prototype.sortByNameDesc = function (t, e) {
        return VaultItemBase.prototype.sortByTextFunction(t, e, "getName", !1);
      }),
      (VaultItemBase.prototype.lockForUpdate = function () {
        for (var t = 0, e = this._views.length; t < e; ++t) this._views[t].lockForUpdate();
      }),
      (VaultItemBase.prototype.unlock = function () {
        for (var t = 0, e = this._views.length; t < e; ++t) this._views[t].unlock();
      }),
      (VaultItemBase.prototype.updateViews = function (t, e) {
        for (var o = this._views.slice(), a = 0, r = o.length; a < r; ++a) o[a].updateView(t, e);
      }),
      (VaultItemBase.prototype.destroyViews = function () {
        for (var t = this._views.slice(), e = 0, o = t.length; e < o; ++e) t[e].destruct();
        this._views = [];
      }),
      (VaultItemBase.prototype.newDisplayObject = function () {
        var t;
        return new (this.getDisplayClass())(this);
      }),
      (VaultItemBase.prototype.addView = function (t) {
        this._views.push(t);
      }),
      (VaultItemBase.prototype.removeView = function (t) {
        if (this._views)
          for (var e = 0, o = this._views.length; e < o; ++e)
            if (this._views[e] === t) {
              this._views.splice(e, 1);
              break;
            }
      }),
      (VaultItemBase.prototype.isNew = function () {
        return "0" === this.getID();
      }),
      (VaultItemBase.prototype.createHandler = function (t) {
        var e = this;
        if (1 < arguments.length) {
          for (var o = [], a = 1, r = arguments.length; a < r; ++a) o.push(arguments[a]);
          return function () {
            t.apply(e, o);
          };
        }
        return function () {
          t.apply(e, arguments);
        };
      }),
      (VaultItemBase.prototype.update = function (t, e, o) {
        var t, a, t, a, e;
        g.removeItem(this),
          t && (this._data = t),
          g.addItem(this),
          (this._sharedGroup = e ? e.getSharedGroup() : null),
          h.getOption(o, "updateViews", !0) &&
            ((t = null),
            Array.isArray(this._views) && (t = (a = this._views[0]) && a._parent ? a._parent._model : null),
            this.updateViews(e, o),
            bg.get("g_nofolder_feature_enabled")) &&
            t &&
            t._data &&
            t._views &&
            ((a = t._data.group === Strings.Consts.NONE_GROUP), (e = 0 === t._views.length), a) &&
            e &&
            g.removeItem(t);
      }),
      (VaultItemBase.prototype.deleteUpdates = function (t) {
        (void 0 !== t && !t) || this.publishDeleteSuccess(1);
        var t = Array.isArray(this._views) && this._views[0] && this._views[0]._parent ? this._views[0]._parent._model : null,
          e,
          o;
        this.destroyViews(),
          g.removeItem(this),
          Topics.get(Topics.ITEM_REMOVED).publish(),
          bg.get("g_nofolder_feature_enabled") &&
            t &&
            t._data &&
            t._views &&
            ((e = t._data.group === Strings.Consts.NONE_GROUP), (o = 0 === t._views.length), e) &&
            o &&
            g.removeItem(t);
      }),
      (VaultItemBase.prototype.getRepromptType = function () {
        return null;
      }),
      (VaultItemBase.prototype.publishAdd = function (t, e, o) {
        g.addItem(this), this.publishAddSuccess(1), Topics.get(t).publish(this, e, o);
      }),
      (VaultItemBase.prototype.getSuccessfulAddMessage = function (t) {
        return 1 < t ? Strings.translateString("%d items were added.", t) : Strings.translateString("%s was added.", this.toString());
      }),
      (VaultItemBase.prototype.getSuccessfulDeleteMessage = function (t) {
        return 1 < t ? Strings.translateString("%d items were deleted.", t) : Strings.translateString("%s was deleted.", this.toString());
      }),
      (VaultItemBase.prototype.getSuccessfulDeleteMessage = function (t) {
        return 1 < t ? Strings.translateString("%d items were deleted.", t) : Strings.translateString("%s was deleted.", this.toString());
      }),
      (VaultItemBase.prototype.getSuccessfulRestoreMessage = function (t) {
        return 1 < t ? Strings.translateString("%d items were restored.", t) : Strings.translateString("%s was restored.", this.toString());
      }),
      (VaultItemBase.prototype.getSuccessfulRenameMessage = function (t) {
        return 1 < t ? Strings.translateString("%d items were renamed.", t) : Strings.translateString("%s was renamed.", this.toString());
      }),
      (VaultItemBase.prototype.getSuccessfulRemoveMessage = function (t) {
        return 1 < t ? Strings.translateString("%d items were removed.", t) : Strings.translateString("%s was removed.", this.toString());
      }),
      (VaultItemBase.prototype.getSuccessfulSaveMessage = function (t) {
        return 1 < t ? Strings.translateString("%d items were saved.", t) : Strings.translateString("%s was saved.", this.toString());
      }),
      (VaultItemBase.prototype.getSuccessfulPurgeMessage = function (t) {
        return 1 < t ? Strings.translateString("%d items were purged.", t) : Strings.translateString("%s was purged.", this.toString());
      }),
      (VaultItemBase.prototype.getSuccessfulMoveMessage = function (t, e) {
        return 1 < t
          ? Strings.translateString("%d items were moved to %s.", t, e)
          : Strings.translateString("%s was moved to %s.", this.toString(), e);
      }),
      (VaultItemBase.prototype.getSuccessfulOrganizeMessage = function (t, e) {
        return 1 < t
          ? Strings.translateString("%d items were organized to %s.", t, e)
          : Strings.translateString("%s was organized to %s.", this.toString(), e);
      }),
      (VaultItemBase.prototype.getSuccessfulAddToFavoritesMessage = function (t) {
        return 1 < t
          ? Strings.translateString("%d items were added to Favorites.", t)
          : Strings.translateString("%s was added to Favorites.", this.toString());
      }),
      (VaultItemBase.prototype.publishAddSuccess = function (t) {
        Topics.get(Topics.SUCCESS).publish(this.getSuccessfulAddMessage(t));
      }),
      (VaultItemBase.prototype.publishDeleteSuccess = function (t) {
        Topics.get(Topics.SUCCESS).publish(this.getSuccessfulDeleteMessage(t));
      }),
      (VaultItemBase.prototype.publishRenameSuccess = function (t) {
        Topics.get(Topics.SUCCESS).publish(this.getSuccessfulRenameMessage(t));
      }),
      (VaultItemBase.prototype.publishRemoveSuccess = function (t) {
        Topics.get(Topics.SUCCESS).publish(this.getSuccessfulRemoveMessage(t));
      }),
      (VaultItemBase.prototype.publishRestoreSuccess = function (t) {
        Topics.get(Topics.SUCCESS).publish(this.getSuccessfulRestoreMessage(t));
      }),
      (VaultItemBase.prototype.publishSaveSuccess = function (t) {
        Topics.get(Topics.SUCCESS).publish(this.getSuccessfulSaveMessage(t));
      }),
      (VaultItemBase.prototype.publishPurgeSuccess = function (t) {
        Topics.get(Topics.SUCCESS).publish(this.getSuccessfulPurgeMessage(t));
      }),
      (VaultItemBase.prototype.publishMoveSuccess = function (t, e) {
        Topics.get(Topics.SUCCESS).publish(this.getSuccessfulMoveMessage(t, e));
      }),
      (VaultItemBase.prototype.publishOrganizeSuccess = function (t, e) {
        Topics.get(Topics.SUCCESS).publish(this.getSuccessfulOrganizeMessage(t, e));
      }),
      (VaultItemBase.prototype.publishAddToFavoritesSuccess = function (t) {
        Topics.get(Topics.SUCCESS).publish(this.getSuccessfulAddToFavoritesMessage(t));
      }),
      (VaultItemBase.prototype.handleClickEvent = function (t, e) {
        switch (t) {
          case Constants.ACTION_EDIT:
            this.edit(e);
            break;
          case Constants.ACTION_DELETE:
            this.deleteItem(e);
            break;
          case Constants.ACTION_PURGE:
            this.purge(e);
            break;
          case Constants.ACTION_RESTORE:
            this.restore(e);
            break;
          case Constants.ACTION_MOVE_TO_FOLDER:
            this.moveToFolder(e.group, e.itemsForAction, e);
        }
      }),
      (VaultItemBase.prototype.isShared = function () {
        var t = this.getSharedGroup();
        return t && !(t instanceof LinkedGroup);
      }),
      (VaultItemBase.prototype.shouldPasswordProtectShare = function () {
        return !0;
      }),
      (VaultItemBase.prototype.passwordProtect = function (t, e) {
        for (var o = h.getOption(e, "itemsForAction", [this]), a = !1, r = {}, s = 0, n = o.length; s < n; ++s) {
          var i = o[s];
          if (i.passwordProtected()) {
            a = !0;
            break;
          }
          i.shouldPasswordProtectShare() && i.isShared() && (r.switch_f_prompt = !0);
        }
        (e = e || {}), a ? delete e.types : (e.types = h.getProperties(r).concat(h.getOption(e, "types", []))), this.reprompt(t, e);
      }),
      (VaultItemBase.prototype.reprompt = function (t, e) {
        return g.reprompt(
          this.createHandler(function () {
            t.apply(this);
          }),
          e
        );
      }),
      (e = function (t, e) {
        for (var o = t.itemsForAction, a, r = 0, s = o.length; r < s; ++r) {
          var n = o[r];
          if (void 0 === a) a = n.getShareID();
          else if (a !== n.getShareID())
            return void Topics.get(Topics.ERROR).publish(
              Strings.translateString(
                "Sorry, you cannot perform this operation on a mix of shared and non-shared folders, or multiple shared folders at once."
              )
            );
        }
        e(t, a);
      }),
      (VaultItemBase.prototype.purge =
        ((a = function (t) {
          return 1 < t.length
            ? this instanceof Group
              ? Strings.translateString(Strings.VaultDynamic.CONFIRM_PURGE_PLURAL)
              : Strings.translateString(Strings.VaultDynamic.CONFRIM_PURGE_FOLDER)
            : Strings.translateString(Strings.VaultDynamic.CONFIRM_PURGE, t[0].toString());
        }),
        (o = function (t, e) {
          var o = t.itemsForAction;
          LPRequest.makeUpdateRequest(g.purgeDeletedItems, {
            parameters: [o, e],
            success: function () {
              for (var t = 0, e = o.length; t < e; t++) o[t].deleteUpdates(!1);
              o[0].publishPurgeSuccess(o.length);
            },
            confirm: { title: Strings.Vault.PURGE, text: a.call(this, o) }
          });
        }),
        function (t) {
          e(t, o);
        })),
      (VaultItemBase.prototype.restore =
        ((i = function (t) {
          return 1 < t.length
            ? this instanceof Group
              ? Strings.translateString(Strings.VaultDynamic.CONFIRM_RESTORE_FOLDER)
              : Strings.translateString(Strings.VaultDynamic.CONFIRM_RESTORE_PLURAL)
            : Strings.translateString(Strings.VaultDynamic.CONFIRM_RESTORE, t[0].toString());
        }),
        (p = function (t, e) {
          var o = t.itemsForAction;
          LPRequest.makeRequest(g.restoreDeletedItems, {
            parameters: [o, e],
            success: function () {
              for (var t = 0, e = o.length; t < e; t++) o[t].deleteUpdates(!1);
              o[0].publishRestoreSuccess(o.length), g.refreshSites();
            },
            confirm: { title: Strings.Vault.RESTORE, text: i.call(this, o) }
          });
        }),
        function (t) {
          e(t, p);
        })),
      (VaultItemBase.prototype.confirmDelete = function (t) {
        for (var e = !1, o = 0; o < (t ? t.length : 0); o++)
          if (!1 !== t[o].isReceivedShare()) {
            e = !0;
            break;
          }
        var a = e ? "<br/><br/>" + Strings.translateString(Strings.VaultDynamic.DELETE_SHARED) : "",
          r;
        return t && 1 < t.length
          ? { title: Strings.Vault.DELETE, text: Strings.translateString(Strings.VaultDynamic.DELETE_CONFIRM_PLURAL) + a }
          : ((r = this),
            { title: Strings.Vault.DELETE, text: Strings.translateString(Strings.VaultDynamic.DELETE_CONFIRM_SITE, r.getName()) + a });
      }),
      (VaultItemBase.prototype.isDeleted = function () {
        return "1" === this._data.deleted;
      }),
      (VaultItemBase.prototype.getName = function () {
        var t = this._data.name;
        return t || "";
      }),
      (VaultItemBase.prototype.getURL = function () {
        return this._data.url;
      }),
      (VaultItemBase.prototype.isFavorite = function () {
        return "1" === this._data.fav;
      }),
      (VaultItemBase.prototype.setFavorite = function (t) {
        this._data.fav = t ? "1" : "0";
      }),
      (VaultItemBase.prototype.processEnteredData = function (t, e, o) {
        for (var a in t) {
          var r = this._data[a];
          "boolean" != typeof t[a] || ("0" !== r && "1" !== r) || (t[a] = t[a] ? "1" : "0");
        }
        e && e.getSharedGroup() ? (t.sharefolderid = e.getShareID()) : delete t.sharefolderid;
      }),
      (VaultItemBase.prototype.saveFromDialog = function (t, e, o) {
        var a = (e || this).getKey();
        this.processEnteredData(t, e, a, o), (t = n.extend({}, this._data, t)), this.save(t, e, o), this.noFolderTrackingEvent(t);
      }),
      (VaultItemBase.prototype.addFromDialog = function (t, e, o) {
        var a = (e || this).getKey();
        this.processEnteredData(t, e, a, o), n.extend(this._data, t), this.add(e, o), this.noFolderTrackingEvent(t);
      }),
      (VaultItemBase.prototype.getFormData = function (t) {
        var e = {},
          o;
        for (o in t) {
          var a = "pwprotect" === o || "autologin" === o || "never_autofill" === o || "fav" === o,
            r = this._data[o];
          a && "1" === r ? (e[o] = !0) : a && "0" === r ? (e[o] = !1) : void 0 !== r && "object" != typeof r && (e[o] = r);
        }
        return e;
      }),
      (VaultItemBase.prototype.getKey = function () {
        var t = this.getSharedGroup();
        return t ? t.getKey() : g.getLocalKey();
      }),
      (VaultItemBase.prototype.getShareID = function () {
        var t = this.getSharedGroup();
        return t ? t.getID() : this._data.sharefolderid || "";
      }),
      (VaultItemBase.prototype.isReadOnly = function () {
        var t = this.getSharedGroup();
        return !!t && t.isReadOnly();
      }),
      (VaultItemBase.prototype.getShareInfo = function () {
        var t = this.getSharedGroup();
        return t ? t._shareInfo : null;
      }),
      (VaultItemBase.prototype.getSharedGroup = function () {
        return this._sharedGroup || null;
      }),
      (VaultItemBase.prototype.getURLArguments = function (t, e, o) {
        return n.param(this.getPostData(t, e, o));
      }),
      (VaultItemBase.prototype.getGroupName = function () {
        return this._data.group;
      }),
      (VaultItemBase.prototype.getGroupParentName = function () {
        var t = this._data.group,
          e = t.lastIndexOf("\\");
        return 0 < e ? t.substring(0, e) : "";
      }),
      (VaultItemBase.prototype.getSearchTokens = function (t) {
        return [this.getName()];
      }),
      (VaultItemBase.prototype.getPostData = function (t, e, o) {
        var a = { extjs: 1, localupdate: 1, ajax: 1 };
        return (
          o && (o.source && (a.source = o.source), o.folder) && (a.folder = o.folder),
          bg.Policies.logNameEnabled() && (a.n = bg.AES.url2hex(t.name)),
          bg.Policies.logUserNameEnabled() && (a.un = bg.AES.url2hex(t.unencryptedUsername)),
          "" === t.totp && (a.totp = ""),
          a
        );
      }),
      (VaultItemBase.prototype.passwordProtected = function () {
        return this.getRepromptType() && bg.get("g_prompts")[this.getRepromptType()];
      }),
      (VaultItemBase.prototype.getLastTouch = function () {
        return 0;
      }),
      (VaultItemBase.prototype.edit = function (t) {
        Topics.get(this.getEditTopicID()).publish({ vaultItem: this, dialogActions: t.dialogActions });
      }),
      (VaultItemBase.prototype.encryptIfNecessary = function (t, e, o) {
        var a = this.getKey();
        return g.decryptMobile(this._data[t], !0, a) !== e || o !== a ? g.encryptMobile(e, !0, o) : this._data[t];
      }),
      (VaultItemBase.prototype.noFolderTrackingEvent = function (t) {
        var e = t.group;
        if (e && e !== Strings.Consts.NONE_GROUP) {
          for (var o = g.getGroups(), a = !1, r = !1, s = 0, n = o.length, i; s < n; ++s) {
            switch (o[s].getName()) {
              case e:
                a = !0;
                break;
              case Strings.Consts.NONE_GROUP:
                r = !0;
            }
          }
          var p = { folder: e, foldercount: r ? o.length : o.length + 1, nofolderfeatureenabled: !!bg.get("g_nofolder_feature_enabled") };
          t.hasOwnProperty("groupParent") && (p.source = "manual"), a || bg.sendLpImprove("no_folder::user_folder_created", p);
        }
      }),
      (VaultItem.prototype.handleClickEvent = function (t, e) {
        t === Constants.ACTION_SHARE ? this.share(e) : VaultItemBase.prototype.handleClickEvent.apply(this, arguments);
      }),
      (VaultItem.prototype.share = function (t) {
        this.passwordProtect(function () {
          Topics.get(Topics.ITEM_SHARE).publish(t.itemsForAction);
        }, t);
      }),
      (VaultItem.prototype.revertPasswordChange = function (t) {
        LPRequest.makeUpdateRequest(g.revertPasswordChange, {
          params: { key: this.getKey(), aid: this.getID(), shareId: this.getShareID() },
          success: function () {
            t && "function" == typeof t.success && t.success();
          },
          error: function () {
            t && "function" == typeof t.error && t.error();
          }
        });
      }),
      (VaultItem.prototype.deleteItem = function (o) {
        for (var a = (o && o.itemsForAction) || [this], t, e = 0, r = a.length; e < r; ++e) {
          var s = a[e];
          if (s.isReadOnly())
            return void Topics.get(Topics.ERROR).publish(
              Strings.translateString(Strings.VaultDynamic.PERMISSION_ERROR_DELETE, s.getSharedGroup().toString())
            );
          if (void 0 === t) t = s.getSharedGroup();
          else if (t !== s.getSharedGroup())
            return void Topics.get(Topics.ERROR).publish(
              Strings.translateString(
                "Sorry, you cannot perform this operation on a mix of shared and non-shared folders, or multiple shared folders at once."
              )
            );
        }
        var n = !(!a[0]._data.individualshare && !a[0]._data.sharedfromaid);
        bg.sendLpImprove("Delete Item Button Clicked", { type: a[0]._noteType || "password", shared: n.toString() }),
          this.passwordProtect(function () {
            LPRequest.makeLockItemUpdateRequest(g.deleteItem, {
              parameters: [a],
              items: a,
              success: function (t) {
                bg.sendLpImprove("Delete Item", { type: a[0]._noteType || "password" }), a[0].publishDeleteSuccess(a.length);
                for (var e = 0; e < a.length; ++e) a[e].deleteUpdates(!1);
                o.success && o.success();
              },
              error: function () {
                o.error && "function" == typeof o.error && o.error();
              },
              confirm: h.getOption(o, "confirm", !0) ? a[0].confirmDelete(a) : null
            });
          }, o);
      }),
      (VaultItem.prototype.moveToFolderPostCheck = function (o, t, a, r) {
        var s, e;
        (0 < o.length || 0 < t.length) &&
          ((s = h.getOption(
            r,
            "saveFromDialog",
            !(e = function () {
              var e = o.concat(t);
              LPRequest.makeLockItemUpdateRequest(g.moveToFolder, {
                parameters: [e, a],
                items: e,
                success: function (t) {
                  var t;
                  c(o, t, a, r),
                    u(t, a, r),
                    s ||
                      ((t = a.toString()),
                      bg.get("g_nofolder_feature_enabled")
                        ? (t === Strings.Vault.GROUP + " " + Strings.Consts.NONE_GROUP && (t = Strings.Vault.NO_FOLDER),
                          e[0].publishOrganizeSuccess(e.length, t))
                        : e[0].publishMoveSuccess(e.length, t)),
                    r && r.success && r.success();
                },
                confirm: l(o, a)
              });
            })
          ))
            ? e()
            : this.passwordProtect(e, { itemsForAction: o.concat(t) }));
      }),
      (Group.prototype.moveToFolderPostCheck = function (e, t, o, a) {
        var r = n.extend(!0, {}, this._data),
          s;
        (r.group = o.getName() + "\\" + this.getGroupName()),
          (s = this),
          LPRequest.makeUpdateRequest(g.renameGroup, {
            parameters: [s, r],
            success: function (t) {
              c([s], t, o, a), c(e, t, o, n.extend(a, { updateViews: !1 })), u(t, o, a), s.publishMoveSuccess(1, o.toString());
            },
            confirm: l(e, o)
          });
      }),
      (c = function (t, e, o, a) {
        for (var r = 0, s = t.length; r < s; ++r) {
          var n = t[r],
            i = n.getID();
          e && e[i] ? (n.update(e[i], o, a), delete e[i]) : n.update(n._data, o, a);
        }
      }),
      (u = function (t, e, o) {
        for (var a in t) {
          var a = t[a];
          a.sn
            ? new Note(a, e.getSharedGroup()).publishAdd(Topics.NOTE_ADDED, e, o)
            : new (a.appaid ? Application : Account)(a, e.getSharedGroup()).publishAdd(Topics.SITE_ADDED, e, o);
        }
      }),
      (l = function (t, e) {
        for (var o = null, a = !1, r = !1, s = !1, n = !1, i = e ? e.getSharedGroup() : null, p = 0, c = t.length, e; p < c; ++p) {
          var u = t[p],
            l = u.getSharedGroup();
          l
            ? i
              ? l !== i && (a = !0)
              : l instanceof LinkedGroup || (n = !0)
            : !i || i instanceof LinkedGroup || (u._data.individualshare ? (s = !0) : (r = !0));
        }
        return (
          (a || r || n || s) &&
            ((e = []),
            a &&
              e.push(Strings.translateString("You are moving items to a different shared folder. This may change who has access to them.")),
            r && e.push(Strings.translateString("You are moving sites to a shared folder. Others may now have access to them.")),
            n &&
              e.push(Strings.translateString("You are moving items from a shared folder into your vault. Others may lose access to them.")),
            s
              ? (e.push(
                  Strings.translateString("Any item that is currently shared with another user cannot be moved into a shared folder.")
                ),
                e.push(Strings.translateString("Would you like to make a copy?")))
              : e.push(Strings.translateString("Do you want to continue?")),
            (o = { title: Strings.translateString("Shared Folders"), text: e })),
          o
        );
      }),
      (AccountBase.prototype.saveFromDialog = function (t, e) {
        var o = l([this], e);
        if (o) {
          for (var a = [VaultItem.prototype.saveFromDialog], r = 0, s = arguments.length; r < s; ++r) a.push(arguments[r]);
          (o.handler = this.createHandler.apply(this, a)), Topics.get(Topics.CONFIRM).publish(o);
        } else VaultItem.prototype.saveFromDialog.apply(this, arguments);
      }),
      (VaultItem.prototype.moveToFolder = function (t, e, o) {
        if (t.isReadOnly())
          Topics.get(Topics.ERROR).publish(Strings.translateString(Strings.VaultDynamic.PERMISSION_ERROR_MOVE, t.toString()));
        else {
          for (var a = [], r = [], s = [], n = [], i = t.getSharedGroup(), p = 0, c = e.length; p < c; ++p) {
            var u = e[p];
            (u.isReadOnly() ? s : i && u._data.individualshare ? (0 < parseInt(u._data.sharedfromaid) ? r : a) : n).push(u);
          }
          var l = [];
          0 < r.length &&
            l.push({
              type: "alert",
              title: Strings.translateString("An error occurred. Please try again later."),
              text: [
                Strings.translateString(
                  "The following items have been individually shared with you and cannot be moved into a shared folder:"
                ),
                h.buildDialogItemContainer(r)
              ]
            }),
            0 < s.length &&
              l.push({
                type: "alert",
                title: Strings.translateString("An error occurred. Please try again later."),
                text: [
                  Strings.translateString("You do not have permission to move the following items from their respective shared folders:"),
                  h.buildDialogItemContainer(s)
                ]
              }),
            0 < a.length &&
              l.push({
                type: "confirmation",
                title: Strings.translateString("An error occurred. Please try again later."),
                text: [
                  Strings.translateString(
                    "The following items have already been shared individually and cannot be moved to a shared folder:"
                  ),
                  Strings.translateString("Would you like to make a copy?"),
                  h.buildDialogItemContainer(a)
                ],
                closeHandler: function () {
                  a.splice(0, a.length);
                }
              }),
            0 < l.length
              ? h.openAlerts(
                  l,
                  ((d = this),
                  function () {
                    d.moveToFolderPostCheck.call(d, n, a, t, o);
                  })
                )
              : this.moveToFolderPostCheck.call(this, n, a, t, o);
        }
        var d;
      }),
      (VaultItem.prototype.passwordProtected = function () {
        return this._data.pwprotect || VaultItemBase.prototype.passwordProtected.apply(this, arguments);
      }),
      (VaultItem.prototype.getPostData = function (t, e) {
        var o = VaultItemBase.prototype.getPostData.apply(this, arguments);
        return t.pwprotect && (o.pwprotect = "on"), o;
      }),
      (AccountBase.prototype.getLastTouch = function () {
        return parseInt(this._data.last_touch);
      }),
      (AccountBase.prototype.getID = function () {
        return this._data.aid;
      }),
      (AccountBase.prototype.setID = function (t) {
        this._data.aid = t;
      }),
      (AccountBase.prototype.getFormData = function (t) {
        var e = VaultItem.prototype.getFormData.apply(this, arguments);
        return (e.extra = g.decryptMobile(this._data.extra, !0, this.getKey())), e;
      }),
      (AccountBase.prototype.getPostData = function (t, e) {
        var o = VaultItem.prototype.getPostData.apply(this, arguments),
          a = e ? e.getKey() : g.getLocalKey(),
          r =
            ((o.aid = this.getID()),
            (o.name = g.encryptWithKey(t.name, a)),
            (o.extra = g.encryptWithBTOA(t.extra)),
            e ? e.getSharedGroup() : null);
        r
          ? ((o.sharedfolderid = r.getID()), (o.grouping = g.encryptWithKey(t.group.substring(r.getName().length + 1), a)))
          : (o.grouping = g.encryptWithKey(t.group, a));
        try {
          var s = bg.get("LPContentScriptFeatures").url_encryption,
            n = "http://sn" !== t.url && "http://group" !== t.url;
          s && n && (t.url.match(/^[a-z\-]+?[0-9]*\:\/\//i) || (t.url = "http://" + t.url), (o.url = g.encryptWithKey(t.url, a)));
        } catch (t) {
          console.warn("Cannot encrypt url!");
        }
        return t.pwprotect && (o.pwprotect = "on"), "1" === t.fav && (o.fav = "on"), t.totp && (o.totp = g.encryptWithBTOA(t.totp)), o;
      }),
      (AccountBase.prototype.checkForSharedGroupChange = function (t) {
        var e = this.getSharedGroup(),
          t = t.getSharedGroup();
        return (null !== e || null !== t) && e !== t;
      }),
      (AccountBase.prototype.handleClickEvent = function (t, e) {
        switch (t) {
          case Constants.ACTION_COPY_TOTP:
            this.copyTotp();
            break;
          case Constants.ACTION_COPY_USERNAME:
            this.copyUsername();
            break;
          case Constants.ACTION_COPY_PASSWORD:
            this.copyPassword(e);
            break;
          case Constants.ACTION_CLONE:
            this.cloneItem();
            break;
          default:
            VaultItem.prototype.handleClickEvent.apply(this, arguments);
        }
      }),
      (AccountBase.prototype.getSearchTokens = function (t) {
        var e = VaultItem.prototype.getSearchTokens.apply(this, arguments);
        return (
          t.searchNotes && this._data.extra && !this.passwordProtected() && e.push(g.decryptMobile(this._data.extra, !0, this.getKey())), e
        );
      }),
      (AccountBase.prototype.getCloneData = function () {
        var t = this.getFormData(DialogInput.getProperties(this._data));
        return (t.name = t.name + " - " + Strings.translateString("Copy")), delete t.aid, t;
      }),
      (AccountBase.prototype.processEnteredData = function (t, e, o) {
        VaultItem.prototype.processEnteredData.apply(this, arguments),
          (t.encgroup = this.encryptIfNecessary("encgroup", t.group, o) || ""),
          (t.encname = this.encryptIfNecessary("encname", t.name, o)),
          t.action && (t.action = bg.AES.bin2hex(t.action));
      }),
      (AccountBase.prototype.isShared = function () {
        return VaultItem.prototype.isShared.apply(this, arguments) || this._data.individualshare || this._data.sharedfromaid;
      }),
      (AccountBase.prototype.isSharingEnabled = function () {
        return !(
          null !== this.getSharedGroup() ||
          (this._data.individualshare && this._data.sharedfromaid && "" !== this._data.sharedfromaid)
        );
      }),
      (AccountBase.prototype.copyTotp = function () {
        g.copyTotp(this);
      }),
      (AccountBase.prototype.copyUsername = function () {
        g.copyUsername(this);
      }),
      (AccountBase.prototype.copyPassword = function () {
        this.canViewPassword()
          ? this.passwordProtect(function () {
              g.copyPassword(this);
            })
          : Topics.get(Topics.ERROR).publish(Strings.translateString("This is a shared site. You are not permitted to copy the password."));
      }),
      (AccountBase.prototype.isReceivedShare = function () {
        return this._data.individualshare && this._data.sharedfromaid;
      }),
      (AccountBaseWithFields.prototype.REPROMPT_TYPE_VIEW_PW = "view_pw_prompt"),
      (AccountBaseWithFields.prototype.getFormData = function (t) {
        var e = AccountBase.prototype.getFormData.apply(this, arguments);
        e.fields = [];
        for (var o = 0, a = this._data.fields.length; o < a; ++o) {
          var r = this._data.fields[o],
            s = { name: r.name || r.id, type: r.type, value: this.getFieldValue(r, !0), formname: r.formname };
          "checkbox" === s.type && (s.valueAttribute = r.value), e.fields.push(s);
        }
        return (e.save_all = this._data.save_all), e;
      }),
      (AccountBaseWithFields.prototype.processEnteredData = function (t, e, o, a) {
        AccountBase.prototype.processEnteredData.apply(this, arguments);
        var r = this.getKey(),
          s = t.unencryptedUsername,
          n = t.password;
        if (
          ((t.username = this.encryptIfNecessary("username", t.unencryptedUsername, o)),
          (t.password = this.encryptIfNecessary("password", t.password, o)),
          (t.extra = this.encryptIfNecessary("extra", t.extra, o)),
          (t.totp = this.encryptIfNecessary("totp", t.totp, o)),
          t.fields)
        )
          for (var i = 0; i < t.fields.length; ++i) {
            var p = t.fields[i],
              c = this.getFieldValue(p),
              u = this._data.fields[i],
              l;
            c !== this.getFieldValue(u, !0) || r !== o || p.formname !== u.formname || p.name !== u.name
              ? (this.processEnteredFieldData(p, e, o),
                c === s && "password" !== p.type
                  ? (p.value = t.username)
                  : n === c && "password" === p.type
                  ? (p.value = t.password)
                  : (a.saveFields = !0))
              : (t.fields[i] = u);
          }
      }),
      (AccountBaseWithFields.prototype.getFieldValue = function (t, e) {
        var o = null;
        if (t)
          switch (((o = t.value), t.type)) {
            case "checkbox":
              void 0 !== t.checked && (o = t.checked);
              break;
            case "radio":
            case "select":
            case "select-one":
              break;
            default:
              e && (o = g.decryptMobile(t.value, !0, this.getKey()));
          }
        return o;
      }),
      (AccountBaseWithFields.prototype.processEnteredFieldData = function (t, e, o) {
        switch ((this.defaultFieldValues(t), t.type)) {
          case "checkbox":
            (t.checked = t.value), (t.value = t.valueAttribute || "");
            break;
          case "radio":
          case "select":
          case "select-one":
            break;
          default:
            void 0 === o && (o = (e || this).getKey()), (t.value = g.encryptMobile(t.value, !0, o));
        }
      }),
      (AccountBaseWithFields.prototype.getFieldPostData = function (t, e) {
        var o = t.value;
        switch (t.type) {
          case "checkbox":
            e && (o += t.checked ? "-1" : "-0");
            break;
          case "radio":
            o += "-1";
            break;
          case "select":
          case "select-one":
            break;
          default:
            o = g.encryptWithBTOA(t.value);
        }
        var a = { name: t.name, type: t.type, value: o, urid: t.urid };
        return t.formname && (a.formname = t.formname), a;
      }),
      (AccountBaseWithFields.prototype.defaultFieldValues =
        ((d = { checked: !1, formname: "", name: "", otherfield: !1, otherlogin: "0", type: "", urid: "0", url: "", value: "" }),
        function (t) {
          this.defaultFields(d, t);
        })),
      (AccountBaseWithFields.prototype.removeField = function (t) {
        this._data.fields.splice(t, 1);
      }),
      (AccountBaseWithFields.prototype.addField = function (t, e) {
        return void 0 === e && (e = this._data.fields), (t = n.extend({}, t)), this.defaultFieldValues(t), e.push(t), e.length - 1;
      }),
      (AccountBaseWithFields.prototype.canViewPassword = function () {
        var t = this.getSharedGroup();
        return !t || t.hasPasswordAccess();
      }),
      (AccountBaseWithFields.prototype.cloneItem = function () {
        this.canViewPassword()
          ? this.passwordProtect(
              function () {
                Topics.get(this.getEditTopicID()).publish({ defaultData: this.getCloneData() });
              },
              { types: this.REPROMPT_TYPE_VIEW_PW }
            )
          : Topics.get(Topics.ERROR).publish(Strings.translateString("This is a shared site. You are not permitted to copy the password."));
      }),
      (Account.prototype.REPROMPT_TYPE = "edit_site_prompt"),
      (Account.prototype.isURLLaunchable = function () {
        return (
          void 0 !== this._data.url &&
          (0 === this._data.url.indexOf("http://") || 0 === this._data.url.indexOf("https://") || 0 === this._data.url.indexOf("ssh://"))
        );
      }),
      (Account.prototype.isSharingEnabled = function () {
        return this._data.url && AccountBase.prototype.isSharingEnabled.apply(this, arguments);
      }),
      (Account.prototype.isLaunchEnabled = function () {
        return this.isURLLaunchable();
      }),
      (Account.prototype.canViewPassword = function () {
        return AccountBaseWithFields.prototype.canViewPassword.apply(this, arguments) && !this.isReceivedShare();
      }),
      (Account.prototype.getEditTopicID = function () {
        return Topics.EDIT_SITE;
      }),
      (Account.prototype.getTotp = function () {
        var t, e;
        return this._data.totp ? ((t = g.decryptMobile(this._data.totp, !0, this.getKey())), new jsOTP.totp().getOtp(t)) : "";
      }),
      (Account.prototype.getPassword = function () {
        if (this._data.save_all) {
          for (var t = 0, e = this._data.fields.length; t < e; ++t) {
            var o = this._data.fields[t];
            if ("password" === o.type && o.value) return g.decryptMobile(o.value, !0, this.getKey());
          }
          return "";
        }
        return g.decryptMobile(this._data.password, !0, this.getKey());
      }),
      (Account.prototype.getSearchTokens = function (t) {
        var e = AccountBaseWithFields.prototype.getSearchTokens.apply(this, arguments),
          o = this.getUsername();
        return o && e.push(o), this._data.url && e.push(bg.hostof(this._data.url)), this._data.aid && e.push(this._data.aid), e;
      }),
      (Account.prototype.getRepromptType = function () {
        return this.REPROMPT_TYPE;
      }),
      (Account.prototype.getUsername = function () {
        if (this._data.save_all)
          for (var t = 0, e = this._data.fields.length; t < e; ++t) {
            var o = this._data.fields[t];
            switch (o.type) {
              case "text":
              case "email":
              case "tel":
                if (o.value) return g.decryptMobile(o.value, !0, this.getKey());
            }
          }
        return (
          void 0 === this._data.unencryptedUsername &&
            (this._data.unencryptedUsername = g.decryptMobile(this._data.username, !0, this.getKey())),
          this._data.unencryptedUsername
        );
      }),
      (Account.prototype.hasGeneratedPassword = function () {
        return this._data.genpw || 0 === this.getName().indexOf(Strings.Vault.GENERATED_PREFIX);
      }),
      (Account.prototype.toString = function () {
        return Strings.Vault.SITE + ": " + this._data.name;
      }),
      (Account.prototype.handleClickEvent = function (t, e) {
        switch (t) {
          case Constants.ACTION_COPY_URL:
            this.copyURL();
            break;
          case Constants.ACTION_LAUNCH:
            this.launch(e);
            break;
          case Constants.ACTION_GO_TO_URL:
            this.goToURL();
            break;
          case Constants.ACTION_FILL:
          case Constants.ACTION_FILL_SITE:
            this.fill(e);
            break;
          default:
            AccountBase.prototype.handleClickEvent.apply(this, arguments);
        }
      }),
      (Account.prototype.launch = function (t) {
        this.passwordProtect(
          function () {
            g.launchSite(this, t);
          },
          { types: "login_site_prompt" }
        );
      }),
      (Account.prototype.fill = function (t) {
        parent.reduxApp && parent.reduxApp.dropdownFill && bg.get("LPContentScriptFeatures").web_client_fill
          ? parent.reduxApp.dropdownFill(this.getID())
          : this.passwordProtect(
              function () {
                bg.sendLpImprove(
                  "sitelogin",
                  {
                    copy: 0,
                    shareType: this.getShareType(),
                    autologin: this._data && this._data.autologin ? 1 : 0,
                    source: t && t.source ? t.source : null,
                    approach: t && t.approach ? t.approach : null
                  },
                  !0
                ),
                  g.fillSite(this);
              },
              { types: "login_site_prompt" }
            );
      }),
      (Account.prototype.copyPassword = function (t) {
        this.canViewPassword()
          ? this.passwordProtect(
              function () {
                bg.sendLpImprove(
                  "sitelogin",
                  {
                    copy: 1,
                    shareType: this.getShareType(),
                    autologin: this._data && this._data.autologin ? 1 : 0,
                    source: t && t.source ? t.source : null,
                    approach: t && t.approach ? t.approach : null
                  },
                  !0
                ),
                  g.copyPassword(this, t);
              },
              { types: this.REPROMPT_TYPE_VIEW_PW }
            )
          : Topics.get(Topics.ERROR).publish(Strings.translateString("This is a shared site. You are not permitted to copy the password."));
      }),
      (Account.prototype.copyURL = function () {
        g.copyURL(this);
      }),
      (Account.prototype.goToURL = function () {
        g.goToURL(this);
      }),
      (Account.prototype.getShareType = function () {
        var t = this._data;
        return t && !0 === t.individualshare ? "individual" : t && t.sharefolderid ? "folder" : "none";
      }),
      (Account.prototype.processEnteredData = function (t, e, o) {
        t.save_all && (delete t.unencryptedUsername, delete t.password),
          AccountBaseWithFields.prototype.processEnteredData.apply(this, arguments),
          t.url && (t.url = bg.punycode.URLToUnicode(t.url.trim())),
          t.realm_data && (t.realm_data = g.encryptMobile(t.realm_data, !0, o));
      }),
      (Account.prototype.getFormData = function (t) {
        var e = AccountBaseWithFields.prototype.getFormData.apply(this, arguments);
        if (e.url)
          try {
            e.url = bg.punycode.URLToUnicode(e.url);
          } catch (t) {
            (e.url = ""), console.error("Encountered an error while decoding the URL of the account", t);
          }
        return (
          t.password && (e.password = this.getPassword()),
          t.unencryptedUsername && (e.unencryptedUsername = this.getUsername()),
          t.totp && ((e.totp = g.decryptMobile(this._data.totp, !0, this.getKey())), "" != e.totp) && (e.totpCode = "******"),
          e
        );
      }),
      (y = function (t, e) {
        for (var o = g.getDomain(t.getURL()), a = [], r = g.getSiteModels(), s = 0, n = r.length; s < n; ++s) {
          var i = r[s];
          i !== t && g.getDomain(i.getURL()) === o && i.getPassword() === e && a.push(i);
        }
        0 < a.length && dialogs.changePassword.open({ domain: o, items: a, newPassword: t.getPassword() });
      }),
      (Account.prototype.save = function (t, a, r) {
        var s;
        (s = this),
          LPRequest.makeUpdateRequest(g.saveSite, {
            parameters: [s, t, a, r],
            success: function (t) {
              var e = s.getPassword(),
                o;
              s.update(t, a), s.publishSaveSuccess(1), e !== s.getPassword() && y(s, e), r.success && r.success(s);
            },
            requestSuccessOptions: { closeDialog: !0 }
          });
      }),
      (Account.prototype.add = function (e, o) {
        var a;
        (a = this),
          LPRequest.makeUpdateRequest(g.addSite, {
            parameters: [a, e, o],
            success: function (t) {
              a.update(t, e), a.publishAdd(Topics.SITE_ADDED, e), o.success && o.success(a);
            }
          });
      }),
      (Account.prototype.getPostData = function (t, e, o) {
        var a = AccountBaseWithFields.prototype.getPostData.apply(this, arguments),
          r =
            ((a.username = t.username ? g.encryptWithBTOA(t.username) : ""),
            (a.password = t.password ? g.encryptWithBTOA(t.password) : ""),
            (a.domain = bg.AES.url2hex(bg.lp_gettld_url(t.url))),
            bg.AES.url2hex(t.url));
        try {
          var s = bg.get("LPContentScriptFeatures").url_encryption,
            n = "http://sn" !== t.url && "http://group" !== t.url;
          s && n && (r = a.url);
        } catch (t) {
          console.warn("Cannot use encrypt url!");
        }
        return (
          h.getOption(o, "saveFromSubmit", !1) ? ((a.ref = r), this.isNew() || (a.replacing = 1)) : (a.url = r),
          t.never_autofill && (a.never_autofill = "on"),
          t.autologin && (a.autologin = "on"),
          (t.save_all || h.getOption(o, "saveFromSubmit", !1)) && (a.data = this.getFieldFormData(t.fields)),
          t.save_all && (a.save_all = 1),
          (a.urid = t.urid),
          "1" === t.basic_auth && (a.basic_auth = "1"),
          t.realm_data && (a.realm = g.encryptWithBTOA(t.realm_data)),
          a
        );
      }),
      (Account.prototype.getFieldFormData = function (t) {
        for (var e = "", o = 0, a = t.length; o < a; ++o) {
          var r = t[o],
            s = this.getFieldPostData(r, !0).value;
          e += r.formname + "\t" + encodeURIComponent(r.name) + "\t" + encodeURIComponent(s) + "\t" + encodeURIComponent(r.type) + "\n";
        }
        return bg.AES.bin2hex(e);
      }),
      (AuroraAccount.products = {
        g2a: {
          name: "GoToAssist",
          promotionText: "GoToAssist",
          freeTrialTagDisplay: "block",
          icon: "logMeInIcon",
          tooltip: "Radically refreshing remote support",
          productId: "g2a"
        },
        g2w: {
          id: "g2w",
          name: "GoToWebinar",
          promotionText: "GoToWebinar",
          freeTrialTagDisplay: "block",
          icon: "logMeInIcon",
          tooltip: "Everything you need for great webinars",
          productId: "g2w"
        },
        g2ma: {
          name: "GoToMeeting",
          promotionText: "Try GoToMeeting Free",
          freeTrialTagDisplay: "none",
          icon: "goToMeetingIcon",
          tooltip: "As a customer, you're eligible for a free 30-day trial of GoToMeeting with unlimited time limits.",
          productId: "g2m"
        },
        g2mb: {
          name: "GoToMeeting",
          promotionText: "Free Meetings, On Us",
          freeTrialTagDisplay: "none",
          icon: "goToMeetingIcon",
          tooltip: "As a customer, you're eligible for a free 30-day trial of GoToMeeting with unlimited time limits.",
          productId: "g2m"
        }
      }),
      (AuroraAccount.prototype.createGoToAssistData = function () {
        return {
          auroraId: "g2a",
          name: AuroraAccount.products.g2a.name,
          storageKey: "promotion_g2a_clicked_" + bg.get("g_username_hash"),
          description:
            "GoToAssist helps service and support professionals resolve technical issues by delivering instant web-based support to customer, end users, unattended computers and servers.",
          imageUrl: "./images/vault_4.0/promotion/gotoassist.png",
          searchResultKeywords: ["teamviewer", "webex", "beyondtrust"],
          competitorProductNames: ["TeamViewer", "Cisco Webex", "Bomgar"],
          login: 1 === bg.localStorage_getItem("promotion_g2a_clicked_" + bg.get("g_username_hash"))
        };
      }),
      (AuroraAccount.prototype.createGoToWebinarData = function () {
        return {
          auroraId: "g2w",
          name: AuroraAccount.products.g2w.name,
          storageKey: "promotion_g2w_clicked_" + bg.get("g_username_hash"),
          description: "Create captivating online events that build brand awareness and help organizations spread their message.",
          imageUrl: "./images/vault_4.0/promotion/gotowebinar.png",
          searchResultKeywords: ["zoom", "webex", "microsoft-teams", "on24", "adobeconnect"],
          competitorProductNames: ["Zoom", "Cisco Webex", "MS Teams Live Events", "On24", "Adobe Connect"],
          login: 1 === bg.localStorage_getItem("promotion_g2w_clicked_" + bg.get("g_username_hash"))
        };
      }),
      (AuroraAccount.prototype.toString = function () {
        return this._data.name;
      }),
      (AuroraAccount.prototype.handleClickEvent = function (t, e) {
        var a = this,
          r = arguments,
          s = this._data.auroraId,
          n = this._data.name;
        t === Constants.ACTION_GO_TO_URL
          ? (bg.sendLpImprove("promotion_vault_product_clicked", {
              product: this._data.auroraId,
              searchToken: this.currentSearch.searchToken,
              matchSource: this.currentSearch.matchSource,
              searchTextLength: this.currentSearch.searchTextLength
            }),
            bg.BackgroundServer.aurora.getOneClickSignupUrls({
              success: function (t) {
                var e = "promotion_" + s + "_clicked_" + bg.get("g_username_hash"),
                  o;
                t &&
                  t[s] &&
                  ((o = a._data.login || !!bg.localStorage_getItem(e)) ||
                    (bg.localStorage_setItem(e, 1),
                    (a._data.login = !0),
                    new Account().addFromDialog({ name: n, url: t[s].login }, null, {
                      success: function () {
                        return null;
                      }
                    })),
                  (a._data.url = o ? t[s].login : t[s].signup)),
                  Account.prototype.handleClickEvent.apply(a, r);
              }
            }))
          : Account.prototype.handleClickEvent.apply(this, arguments);
      }),
      (AuroraAccount.prototype.isURLLaunchable = function () {
        return !0;
      }),
      (AuroraAccount.prototype.getSearchTokens = function (t) {
        var e = VaultItem.prototype.getSearchTokens.call(this, t);
        this._data.url && e.push(bg.hostof(this._data.url));
        for (var o = 0, a = this._data.competitorProductNames.length; o < a; o++) e.push(this._data.competitorProductNames[o]);
        return e;
      }),
      (AuroraAccount.prototype.deleteItem = function (t) {
        var e = this,
          o = [e];
        LPRequest.makeLockItemUpdateRequest(f, {
          parameters: [o],
          items: o,
          success: function () {
            e.deleteUpdates(),
              bg.sendLpImprove("promotion_vault_do_not_show_again", { product: e._data.auroraId }),
              t.success && t.success();
          },
          confirm: h.getOption(t, "confirm", !0) ? e.confirmDelete() : null
        });
      }),
      (AuroraAccount.prototype.confirmDelete = function () {
        return { title: "Remove this suggestion?", text: "Don't show this suggested product again: " + this.toString() };
      }),
      (AuroraAccount.prototype.deleteUpdates = function () {
        this.destroyViews(), Topics.get(Topics.ITEM_REMOVED).publish();
      }),
      (f = function (t, e, o) {
        try {
          bg.Preferences.set("hide_aurora_" + t[0]._data.auroraId, !0), e();
        } catch (t) {
          o();
        }
      }),
      (Application.prototype.toString = function () {
        return Strings.Vault.APPLICATION + " " + this.getName();
      }),
      (Application.prototype.getEditTopicID = function () {
        return Topics.EDIT_APPLICATION;
      }),
      (Application.prototype.shouldPasswordProtectShare = function () {
        return !1;
      }),
      (Application.prototype.getCloneData = function () {
        var t = AccountBaseWithFields.prototype.getCloneData.apply(this, arguments);
        return delete t.appaid, t;
      }),
      (Application.prototype.getID = function (t) {
        var e = this._data.appaid;
        return (e = t ? "app" + e : e);
      }),
      (Application.prototype.setID = function (t) {
        this._data.appaid = t;
      }),
      (Application.prototype.isSharingEnabled = function () {
        return !1;
      }),
      (Application.prototype.getLastTouch = AccountBase.prototype.getLastTouch),
      (Application.prototype.handleClickEvent = function (t, e) {
        t === Constants.ACTION_LAUNCH ? g.launchApplication(this) : AccountBaseWithFields.prototype.handleClickEvent.apply(this, arguments);
      }),
      (Application.prototype.update = function () {
        AccountBaseWithFields.prototype.update.apply(this, arguments), this.setSaveAll();
      }),
      (Application.prototype.addField = function () {
        AccountBaseWithFields.prototype.addField.apply(this, arguments), this.setSaveAll();
      }),
      (Application.prototype.removeField = function () {
        AccountBaseWithFields.prototype.removeField.apply(this, arguments), this.setSaveAll();
      }),
      (Application.prototype.setSaveAll = function () {
        for (var t, e, o = 0; o < this._data.fields.length; ++o) {
          var a = this._data.fields[o];
          switch (a.type) {
            case "password":
              t = void 0 === t ? a : null;
              break;
            case "":
              e = void 0 === e ? a : null;
          }
        }
        e && t
          ? ((this._data.save_all = !1),
            (this._data.unencryptedUsername = g.decryptMobile(e.value, !0, this.getKey())),
            (this._data.username = e.value),
            (this._data.password = t.value))
          : ((this._data.save_all = !0), delete this._data.unencryptedUsername, delete this._data.username, delete this._data.password);
      }),
      (Application.prototype.getUsername = function () {
        for (var t = 0; t < this._data.fields.length; ++t) {
          var e = this._data.fields[t];
          if ("password" !== e.type && e.value) return g.decryptMobile(e.value, !0, this.getKey());
        }
      }),
      (Application.prototype.getPassword = function () {
        for (var t = 0; t < this._data.fields.length; ++t) {
          var e = this._data.fields[t];
          if ("password" === e.type && e.value) return g.decryptMobile(e.value, !0, this.getKey());
        }
      }),
      (Application.prototype.getFormData = function (t) {
        var e = AccountBaseWithFields.prototype.getFormData.apply(this, arguments);
        return this._data.save_all || (e.password = g.decryptMobile(this._data.password, !0, this.getKey())), e;
      }),
      (Application.prototype.getSearchTokens = function () {
        var t = VaultItem.prototype.getSearchTokens.apply(this, arguments);
        return t.push(this._data.appname), t;
      }),
      (Application.prototype.add = function (e, t) {
        var o;
        (o = this),
          LPRequest.makeUpdateRequest(g.addApplication, {
            parameters: [o, e, t],
            success: function (t) {
              o.update(t, e), o.publishAdd(Topics.APPLICATION_ADDED, e);
            }
          });
      }),
      (Application.prototype.save = function (t, e, o) {
        var a;
        (a = this),
          LPRequest.makeUpdateRequest(g.saveApplication, {
            parameters: [a, t, e, o],
            success: function () {
              a.update(t, e), a.publishSaveSuccess(1);
            }
          });
      }),
      (Application.prototype.getPostData = function (t, e) {
        var o = AccountBase.prototype.getPostData.apply(this, arguments);
        if (((o.appname = t.appname), t.fields))
          for (var a = 0; a < t.fields.length; ++a) {
            var r = t.fields[a];
            (o["fieldid" + a] = r.name || r.id), (o["fieldtype" + a] = r.type), (o["fieldvalue" + a] = this.getFieldPostData(r).value);
          }
        return (o.appaid = o.aid), delete o.aid, this.isNew() || (o.cmd = "updatelpaa"), o;
      }),
      (Group.prototype.getDisplayClass = function () {
        return GroupDisplay;
      }),
      (Group.prototype.toString = function () {
        return Strings.Vault.GROUP + " " + this._data.group;
      }),
      (Group.prototype.getName = function () {
        return this._data.group;
      }),
      (Group.prototype.getGroupName = function () {
        return this._data.group.substring(this._data.group.lastIndexOf("\\") + 1);
      }),
      (Group.prototype.handleClickEvent = function (t, e) {
        switch (t) {
          case Constants.ACTION_RENAME:
            Topics.get(Topics.RENAME_FOLDER).publish(this);
            break;
          case Constants.ACTION_CREATE_SUB_FOLDER:
            Topics.get(Topics.CREATE_SUB_FOLDER).publish(this);
            break;
          case Constants.ACTION_SHARE:
            Topics.get(Topics.CREATE_SHARED_FOLDER).publish(this, e.itemsForAction);
            break;
          default:
            VaultItemBase.prototype.handleClickEvent.apply(this, arguments);
        }
      }),
      (Group.prototype.confirmDelete = function (t) {
        return 0 < t
          ? ((e = this),
            {
              title: Strings.Vault.DELETE,
              text: Strings.translateString(
                Strings.VaultDynamic.DELETE_CONFIRM,
                Strings.translateString("%s containing %d item(s)", e.toString(), t)
              )
            })
          : VaultItemBase.prototype.confirmDelete.apply(this);
        var e;
      }),
      (Group.prototype.deleteItem = function (t) {
        var e = t.itemsForAction.filter(function (t) {
            return !(t instanceof Group);
          }),
          o;
        LPRequest.makeLockItemUpdateRequest(g.deleteFolder, {
          parameters: [t.itemsForAction],
          items: t.itemsForAction,
          success: function () {
            o.deleteUpdates();
          },
          confirm: (o = this).confirmDelete(e.length)
        });
      }),
      (Group.prototype.add = function (e) {
        var o;
        (o = this),
          LPRequest.makeUpdateRequest(g.addGroup, {
            parameters: o,
            success: function (t) {
              o.update(t, e), o.publishAdd(Topics.GROUP_ADDED, e);
            }
          });
      }),
      (Group.prototype.save = function (t, e) {
        var o;
        (o = this),
          LPRequest.makeUpdateRequest(g.renameGroup, {
            parameters: [o, t],
            success: function () {
              o.update(t, e), o.publishRenameSuccess(1);
            }
          });
      }),
      (Group.prototype.getFormData = function (t) {
        var e = VaultItemBase.prototype.getFormData.apply(this, arguments);
        return (e.groupName = this.getGroupName()), (e.groupParent = this.getGroupParentName()), e;
      }),
      (Group.prototype.processEnteredData = function (t) {
        VaultItemBase.prototype.processEnteredData.apply(this, arguments),
          t.groupName &&
            (t.groupParent ? ((t.group = t.groupParent + "\\" + t.groupName), delete t.groupParent) : (t.group = t.groupName),
            delete t.groupName);
      }),
      (SharedGroup.prototype.setID = function (t) {
        Group.prototype.setID.apply(this, arguments),
          (this._data.sharefolderid = t),
          (this._shareInfo.id = t),
          (this._shareInfo.shareid = t);
      }),
      (SharedGroup.prototype.useSharePrefix = function () {
        return !0;
      }),
      (SharedGroup.prototype.update = function (t) {
        t && (this._shareInfo.decsharename = t.group), Group.prototype.update.apply(this, arguments);
      }),
      (SharedGroup.prototype.isReadOnly = function () {
        return "1" === this._shareInfo.readonly;
      }),
      (SharedGroup.prototype.canAdminister = function () {
        return "1" === this._shareInfo.can_administer;
      }),
      (SharedGroup.prototype.isPending = function () {
        return "0" === this._shareInfo.accepted;
      }),
      (SharedGroup.prototype.canConvertToLegacy = function () {
        return (
          g.isEligibleForLegacySharedFolders() &&
          this.canAdminister() &&
          "0" !== this._shareInfo.cid &&
          bg.get("LPContentScriptFeatures").family_legacy_shared_folders_enabled
        );
      }),
      (SharedGroup.prototype.canConvertToEnterprise = function () {
        return g.isEnterpriseUser() && this.canAdminister() && "1" === this._shareInfo.outside_enterprise && "0" === this._shareInfo.cid;
      }),
      (SharedGroup.prototype.isDownloaded = function () {
        return "1" === this._shareInfo.download;
      }),
      (SharedGroup.prototype.hasPasswordAccess = function () {
        return "1" === this._shareInfo.give;
      }),
      (SharedGroup.prototype.isDeleted = function () {
        return "1" === this._shareInfo.deleted;
      }),
      (SharedGroup.prototype.isSharingEnabled = function () {
        return !1;
      }),
      (SharedGroup.prototype.getShareName = function () {
        return this._shareInfo.sharename;
      }),
      (SharedGroup.prototype.handleClickEvent = function (t, e) {
        switch (t) {
          case Constants.ACTION_START_DOWNLOADING:
            this.startDownloading();
            break;
          case Constants.ACTION_STOP_DOWNLOADING:
            this.stopDownloading();
            break;
          case Constants.ACTION_MANAGE:
          case Constants.ACTION_MANAGE_RECIPIENTS:
            this.manage();
            break;
          case Constants.ACTION_MANAGE_ITEMS:
            reduxApp.openSharingDrawer(this._data.sharefolderid),
              bg.sendLpImprove("Manage Items Clicked", { source: "Sharing Center Actions menu" });
            break;
          case Constants.ACTION_RESTORE_SHARED_FOLDER:
            this.restoreSharedFolder();
            break;
          case Constants.ACTION_PURGE_SHARED_FOLDER:
            this.purgeSharedFolder();
            break;
          case Constants.ACTION_ACCEPT:
            this.accept();
            break;
          case Constants.ACTION_REJECT:
            this.reject();
            break;
          case Constants.ACTION_CONVERT:
            this.convert();
            break;
          default:
            Group.prototype.handleClickEvent.apply(this, arguments);
        }
      }),
      (SharedGroup.prototype.convert = function () {
        dialogs.convertLegacySharedFolder.open({ shareId: this._shareInfo.id, groupName: this.getGroupName() });
      }),
      (SharedGroup.prototype.manage =
        ((t = function () {
          this.canConvertToEnterprise() ? this.convertToEnterprise() : Topics.get(Topics.EDIT_SHARED_FOLDER).publish(this);
        }),
        function () {
          this.passwordProtect(t);
        })),
      (SharedGroup.prototype.accept =
        ((m = function (t) {
          "bad" == t.result && "verificationrequired" == t.status
            ? dialogs.verifyEmail.open({ email: bg.get("g_username") })
            : (Topics.get(Topics.UPDATE_NOTIFICATION_COUNT).publish(), this.refresh(t.sharedFolder, t.shareInfo), this.update());
        }),
        function () {
          LPRequest.makeRequest(bg.BackgroundServer.sharing.folder.accept, {
            params: { sharedFolder: this._data, shareInfo: this._shareInfo },
            lockItems: !0,
            items: this,
            success: this.createHandler(m)
          });
        })),
      (SharedGroup.prototype.reject =
        ((_ = function () {
          Topics.get(Topics.UPDATE_NOTIFICATION_COUNT).publish(), this.deleteUpdates(!1);
        }),
        function () {
          LPRequest.makeUpdateRequest(bg.BackgroundServer.sharing.folder.reject, {
            params: { sharedFolder: this._data, shareInfo: this._shareInfo },
            lockItems: !0,
            items: this,
            success: this.createHandler(_),
            confirm: {
              title: Strings.Vault.REJECT,
              text: [Strings.translateString("Are you sure you want to reject %s?", this.toString())]
            }
          });
        })),
      (SharedGroup.prototype.stopDownloading =
        ((S = function (t) {
          this.refresh(t.sharedFolder, t.shareInfo), this.update();
        }),
        function () {
          LPRequest.makeUpdateRequest(g.stopDownloadingFolder, {
            params: { sharedFolder: this._data, shareInfo: this._shareInfo },
            lockItems: !0,
            items: this,
            success: this.createHandler(S),
            successMessage: Strings.translateString("%s will no longer be downloaded.", this.toString()),
            confirm: {
              title: Strings.Vault.STOP_DOWNLOADING,
              text: [
                Strings.translateString(
                  "You are choosing to stop downloading the content of this Shared Folder to your vault. You may always begin downloading the folder content again in the Sharing Center."
                ),
                Strings.translateString("Do you want to continue?")
              ]
            }
          });
        })),
      (SharedGroup.prototype.add =
        ((v = function (t, e, o) {
          var a = [],
            r = {};
          if (t) {
            var s = t.getName(),
              n = o.getName(),
              i = function (t) {
                a.push(t.getID()), (r[t.getID()] = t._data.group.replace(s, n));
              };
            if (e)
              for (var p = 0, c = e.length; p < c; ++p) {
                var u = e[p];
                u instanceof DummyGroup || i(u);
              }
            t instanceof DummyGroup || i(t);
          }
          return { itemsToMove: a, parentMap: r };
        }),
        function (e, o, a) {
          var r = v(e, o, this);
          LPRequest.makeUpdateRequest(g.createSharedFolder, {
            params: { sharedFolder: this._data, shareInfo: this._shareInfo },
            successMessage: 0 < r.itemsToMove.length ? "" : void 0,
            success: this.createHandler(function (t) {
              this.refresh(t.sharedFolder, t.shareInfo),
                this.update(),
                0 < r.itemsToMove.length
                  ? LPRequest.makeRequest(g.moveIntoSharedFolder, {
                      params: n.extend(r, { toShareInfo: this._shareInfo }),
                      success: this.createHandler(function () {
                        this.publishAdd(Topics.GROUP_ADDED),
                          o &&
                            o.forEach(function (t) {
                              t.update(t._data, this);
                            }, this),
                          e && e.destruct();
                      })
                    })
                  : (this.publishAdd(Topics.GROUP_ADDED), e && e.destruct()),
                "function" == typeof a && a(t);
            })
          });
        })),
      (SharedGroup.prototype.deleteItem =
        ((B = function (t) {
          this.refresh(t.sharedFolder, t.shareInfo), this.update();
        }),
        function () {
          reduxApp.openDeleteSharedFolderModal(this._data.sharefolderid);
        })),
      (SharedGroup.prototype.getFormData = function (t) {
        var e = Group.prototype.getFormData.apply(this, arguments);
        return (e.groupName = this.getShareGroupName()), e;
      }),
      (SharedGroup.prototype.processEnteredData = function (t) {
        (t.group = this.SHARED_FOLDER_NAME_PREFIX + t.groupName), delete t.groupName;
      }),
      (SharedGroup.prototype.getShareGroupName = function (t) {
        return (t = void 0 === t ? this._data.group : t).substring(this.SHARED_FOLDER_NAME_PREFIX.length);
      }),
      (SharedGroup.prototype.saveFromDialog = function (t, e) {
        VaultItem.prototype.saveFromDialog.apply(this, arguments);
      }),
      (SharedGroup.prototype.save =
        ((I = function (t) {
          this.refresh(t.sharedFolder, t.shareInfo), this.update();
        }),
        function (t) {
          LPRequest.makeUpdateRequest(g.renameSharedGroup, {
            params: { sharedFolder: t, shareInfo: this._shareInfo },
            success: this.createHandler(I),
            successMessage: this.getSuccessfulRenameMessage()
          });
        })),
      (SharedGroup.prototype.getKey = function () {
        return this._shareInfo.key;
      }),
      (SharedGroup.prototype.getSharedGroup = function () {
        return this;
      }),
      (SharedGroup.prototype.startDownloading =
        ((A = function (t) {
          this.refresh(t.sharedFolder, t.shareInfo), this.update();
        }),
        function () {
          LPRequest.makeRequest(g.startDownloadingFolder, {
            params: { sharedFolder: this._data, shareInfo: this._shareInfo },
            lockItems: !0,
            items: this,
            success: this.createHandler(A),
            successMessage: Strings.translateString("%s will now be downloaded.", this.toString())
          });
        })),
      (SharedGroup.prototype.restoreSharedFolder =
        ((T = function (t) {
          this.refresh(t.sharedFolder, t.shareInfo), this.update();
        }),
        function () {
          LPRequest.makeRequest(g.restoreDeletedSharedFolder, {
            params: { sharedFolder: this._data, shareInfo: this._shareInfo },
            lockItems: !0,
            items: this,
            success: this.createHandler(T),
            successMessage: this.getSuccessfulRestoreMessage()
          });
        })),
      (SharedGroup.prototype.purgeSharedFolder =
        ((E = function () {
          this.publishPurgeSuccess(1), this.deleteUpdates(!1);
        }),
        function () {
          LPRequest.makeLockItemUpdateRequest(g.purgeDeletedSharedFolder, {
            params: { sharedFolder: this._data, shareInfo: this._shareInfo },
            items: this,
            success: this.createHandler(E),
            confirm: { title: Strings.Vault.PURGE, text: Strings.translateString(Strings.VaultDynamic.CONFIRM_PURGE, this.toString()) }
          });
        })),
      (SharedGroup.prototype.convertToEnterprise =
        ((b = function (t) {
          this.refresh(t.sharedFolder, t.shareInfo), this.update();
        }),
        function () {
          LPRequest.makeLockItemUpdateRequest(bg.BackgroundServer.sharing.folder.convertToEnterprise, {
            params: { sharedFolder: this._data, shareInfo: this._shareInfo },
            items: this,
            success: this.createHandler(b),
            confirm: {
              title: Strings.translateString("Convert to Enterprise"),
              text: [
                Strings.translateString(
                  "This was a shared family folder, but you are now a part of a LastPass Enterprise account.  In order to continue administering this shared folder, you must move it into the enterprise account.  This may mean certain other members of the enterprise account will have access to it."
                ),
                Strings.translateString("Do you want to continue?")
              ]
            }
          });
        })),
      (SharedGroup.prototype.toString = function () {
        return Strings.Vault.SHARED_FOLDER + ": " + this.getName();
      }),
      (LinkedGroup.prototype.useSharePrefix = function () {
        return !1;
      }),
      (LinkedGroup.prototype.handleClickEvent = function (t, e) {
        var o = this;
        t === Constants.ACTION_UNLINK
          ? g.reprompt(function () {
              o.unlink();
            })(o)
          : SharedGroup.prototype.handleClickEvent.apply(this, arguments);
      }),
      (LinkedGroup.prototype.unlink =
        ((N = function () {
          g.removeLinkedAccountInIe(),
            "function" == typeof bg.removeaccountlinktoken && bg.removeAccountLinkToken(),
            Topics.get(Topics.SUCCESS).publish(Strings.translateString("Account (%s) unlinked.", this.getName())),
            this.deleteUpdates(!1),
            g.refreshSites(),
            Topics.get(Topics.ACCOUNT_UNLINKED).publish();
          for (var t = g.getFormFillModels(), e = 0, o = t.length; e < o; ++e) {
            var a = t[e];
            a.getSharedGroup() === this && a.deleteUpdates(!1);
          }
        }),
        function () {
          LPRequest.makeUpdateRequest(g.unlinkAccount, {
            params: { id: this.getID() },
            success: this.createHandler(N),
            confirm: {
              title: Strings.Vault.UNLINK,
              text: Strings.translateString("Are you sure you want to unlink your personal account (%s)", this.getName())
            }
          });
        })),
      (EmergencyAccessGroup.prototype.unlink =
        ((V = function () {
          Topics.get(Topics.SUCCESS).publish(Strings.translateString("Account (%s) unlinked.", this.getName())), this.deleteUpdates(!1);
        }),
        function () {
          LPRequest.makeUpdateRequest(g.unlinkEmergencyAccessAccount, {
            params: { folderID: this.getID(), email: this.getName() },
            success: this.createHandler(V),
            confirm: {
              title: Strings.Vault.UNLINK,
              text: Strings.translateString("Are you sure you want to unlink your personal account (%s)", this.getName())
            }
          });
        })),
      (AuroraGroup.prototype.deleteItem = function (t) {
        var e;
        LPRequest.makeLockItemUpdateRequest(M, {
          parameters: [t.itemsForAction],
          items: t.itemsForAction,
          success: function () {
            e.deleteUpdates();
          },
          confirm: (e = this).confirmDelete()
        });
      }),
      (AuroraGroup.prototype.confirmDelete = function () {
        return { title: "Do not show again", text: "Are you sure you do not want to see " + this.toString() + " again?" };
      }),
      (AuroraGroup.prototype.deleteUpdates = function () {
        this.destroyViews(), Topics.get(Topics.ITEM_REMOVED).publish();
      }),
      (M = function (t, e, o) {
        try {
          for (var a = 0; a < t.length; a++)
            t[a] instanceof AuroraGroup
              ? (bg.Preferences.set("hide_aurora_group", !0), bg.sendLpImprove("promotion_vault_do_not_show_again", { product: "all" }))
              : t[a] instanceof AuroraAccount && bg.Preferences.set("hide_aurora_" + t[a]._data.auroraId, !0);
          e();
        } catch (t) {
          o();
        }
      }),
      (Note.prototype.NOTE_TYPES = {
        ADDRESS: "Address",
        BANK: "Bank Account",
        CREDIT: "Credit Card",
        DATABASE: "Database",
        DRIVERS_LICENSE: "Driver's License",
        EMAIL: "Email Account",
        GENERIC: "Generic",
        HEALTH_INSURANCE: "Health Insurance",
        IM: "Instant Messenger",
        INSURANCE: "Insurance",
        MEMBERSHIP: "Membership",
        PASSPORT: "Passport",
        SERVER: "Server",
        SSN: "Social Security",
        SOFTWARE_LICENSE: "Software License",
        SSH_KEY: "SSH Key",
        WIFI: "Wi-Fi Password",
        CUSTOM: "Custom"
      }),
      (U = (function () {
        var t = {},
          e;
        for (e in Note.prototype.NOTE_TYPES) t[Note.prototype.NOTE_TYPES[e]] = !0;
        return t;
      })()),
      (Note.prototype.REPROMPT_TYPE = "edit_sn_prompt"),
      (C = function (t) {
        var t;
        return !!t && (t = t.match(/^Custom_(\d+)$/)) && 2 == t.length;
      }),
      (D = function (t) {
        return C(t) || U[t];
      }),
      (P = function (t) {
        var e;
        return (
          -1 !==
          [
            "zh-CN",
            "zh-TW",
            "da-DK",
            "nl-NL",
            "en-US",
            "en-GB",
            "fi-FI",
            "fr-FR",
            "fr-CA",
            "de-DE",
            "hu-HU",
            "it-IT",
            "ja-JP",
            "ko-FR",
            "nb-NO",
            "pl-PL",
            "pt-PT",
            "pt-BR",
            "ru-RU",
            "sk-SK",
            "es-ES",
            "es-MX",
            "sv-SE"
          ].indexOf(t)
        );
      }),
      (Note.prototype.isValidLanguage = P),
      (Note.prototype.getNoteType = function () {
        var t;
        return (
          void 0 === this._noteType &&
            ((t = this._data.notetype || this.getKeyValuePairs().NoteType), (this._noteType = D(t) ? t : this.NOTE_TYPES.GENERIC)),
          this._noteType
        );
      }),
      (Note.prototype.getLanguage = function () {
        var t;
        return (
          void 0 === this._language &&
            ((t = this._data.language || this.getKeyValuePairs().Language),
            P(t) || (t = navigator.language),
            (this._language = P(t) ? t : "en-US")),
          this._language
        );
      }),
      (Note.prototype.getRecordType = function () {
        var t = this.getNoteType();
        return C(t) ? "Custom" : t;
      }),
      (Note.prototype.getTemplate = function () {
        return this._data.template;
      }),
      (Note.prototype.isCustom = function () {
        return C(this.getNoteType());
      }),
      (Note.prototype.getAttachmentKey = function () {
        return this._data.attachkey ? bg.AES.hex2bin(g.decrypt(this._data.attachkey, this.getKey())) : null;
      }),
      (Note.prototype.debugAttachmentKey = function (t, e, o) {
        var a = null,
          o =
            (null !== o ? (a = o) : this._data.attachkey && (a = this._data.attachkey),
            "undefined" != typeof reduxApp && "function" == typeof reduxApp.getState
              ? reduxApp.getState().user.uid
              : "undefined" != typeof bg && bg.get("g_uid")
              ? bg.get("g_uid")
              : "undefined" !== g_uid
              ? g_uid
              : 0),
          t = {
            attachment_action: !0,
            action_type: t,
            user_id: o,
            attachment_id: e,
            attachment_key_hash: null !== a ? bg.SHA256(a.slice(0, 50) + o) : null
          };
        n.ajax({ global: !1, type: "POST", cache: !1, dataType: "json", data: t, url: g.getBaseURL() + "debug.php" });
      }),
      (Note.prototype.cloneItem = function () {
        this.passwordProtect(function () {
          Topics.get(Topics.EDIT_NOTE).publish({ defaultData: this.getCloneData() });
        });
      }),
      (Note.prototype.getRepromptType = function () {
        return this.REPROMPT_TYPE;
      }),
      (Note.prototype.getEditTopicID = function () {
        return Topics.EDIT_NOTE;
      }),
      (Note.prototype.handleClickEvent = function (t, e) {
        switch (t) {
          case Constants.ACTION_COPY_NOTE:
            this.copyNote();
            break;
          case Constants.ACTION_COPY_KEY:
            this.copyPrivateKey();
            break;
          case Constants.ACTION_FILL:
            this.fill(e);
            break;
          case Constants.ACTION_COPY_ADDRESS_1:
            this.copyNoteField("Address 1");
            break;
          case Constants.ACTION_COPY_ADDRESS_2:
            this.copyNoteField("Address 2");
            break;
          case Constants.ACTION_COPY_CITY_SLASH_TOWN:
            this.copyNoteField("City / Town");
            break;
          case Constants.ACTION_COPY_ZIP_SLASH_POSTAL_CODE:
            this.copyNoteField("Zip / Postal Code");
            break;
          case Constants.ACTION_COPY_EMAIL_ADDRESS:
            this.copyNoteField("Email Address");
            break;
          case Constants.ACTION_COPY_PHONE_NUMBER:
            this.copyPhoneNumber();
            break;
          case Constants.ACTION_COPY_BANK_NAME:
            this.copyNoteField("Bank Name");
            break;
          case Constants.ACTION_COPY_ACCOUNT_NUMBER:
            this.copyNoteField("Account Number");
            break;
          case Constants.ACTION_COPY_ROUTING_NUMBER:
            this.copyNoteField("Routing Number");
            break;
          case Constants.ACTION_COPY_NAME_ON_CARD:
            this.copyNoteField("Name on Card");
            break;
          case Constants.ACTION_COPY_SECURITY_CODE:
            this.copyNoteField("Security Code");
            break;
          case Constants.ACTION_COPY_POLICY_NUMBER:
          case Constants.ACTION_COPY_HEATH_INS_POLICY_NUMBER:
            this.copyNoteField("Policy Number");
            break;
          case Constants.ACTION_COPY_GROUP_ID:
            this.copyNoteField("Group ID");
            break;
          case Constants.ACTION_COPY_MEMBER_ID:
            this.copyNoteField("Member ID");
            break;
          case Constants.ACTION_COPY_INS_POLICY_NUMBER:
            this.copyNoteField("Policy Number");
            break;
          case Constants.ACTION_COPY_MEMBERSHIP_NUMBER:
            this.copyNoteField("Membership Number");
            break;
          case Constants.ACTION_COPY_PASSPORT_NUMBER:
          case Constants.ACTION_COPY_NUMBER:
            this.copyNoteField("Number");
            break;
          case Constants.ACTION_COPY_LICENSE_KEY:
            this.copyNoteField("License Key");
            break;
          case Constants.ACTION_COPY_ORDER_NUMBER:
            this.copyNoteField("Number");
            break;
          case Constants.ACTION_COPY_SSH_PASSPHRASE:
            this.copyNoteField("Passphrase");
            break;
          case Constants.ACTION_COPY_SSH_PUBLIC_KEY:
            this.copyNoteField("Public Key");
            break;
          case Constants.ACTION_COPY_HOSTNAME:
            this.copyNoteField("Hostname");
            break;
          case Constants.ACTION_COPY_NOTE_USERNAME:
            this.copyNoteField("Username");
            break;
          case Constants.ACTION_COPY_NOTE_PASSWORD:
            this.copyNoteField("Password");
            break;
          default:
            AccountBase.prototype.handleClickEvent.apply(this, arguments);
        }
      }),
      (Note.prototype.fill = function (t) {
        var e, o;
        parent.reduxApp && parent.reduxApp.dropdownFill && bg.get("LPContentScriptFeatures").web_client_fill
          ? parent.reduxApp.dropdownFill(this.getID())
          : ((o = e = ""),
            t && t.source && (e = t.source),
            t && t.approach && (o = t.approach),
            this.passwordProtect(function () {
              bg.fillNoteFromDropdown(this.getID(), e, o);
            }));
      }),
      (Note.prototype.copyNote =
        ((x = function () {
          g.copyToClipboard(this.getNoteField("Notes")), bg.loglogin(this.getID());
        }),
        function () {
          this.passwordProtect(x);
        })),
      (Note.prototype.copyNoteField = function (t) {
        this.passwordProtect(function () {
          g.copyToClipboard(this.getNoteField(t)), bg.loglogin(this.getID());
        });
      }),
      (Note.prototype.copyPhoneNumber =
        ((Y = function () {
          g.copyToClipboard(JSON.parse(this.getNoteField("Phone")).num);
        }),
        function () {
          this.passwordProtect(Y);
        })),
      (Note.prototype.copyPrivateKey =
        ((K = function (t) {
          var t = this.getPrivateKey(t.extra);
          if (-1 === t.indexOf("-----BEGIN") && -1 === t.indexOf("END-----")) g.copyToClipboard(t);
          else {
            for (
              var e = t.split(/-----BEGIN.*KEY-----|-----END.*KEY-----/), t = t.split(/-----/), o = e[1], a = "", r = 0, s = o.length;
              r < s;
              ++r
            )
              ":" !== o.charAt(r - 1) ? (a += o[r].replace(/\u0020/g, "\n")) : (a += o[r]);
            var e = "-----" + t[1] + "-----\n" + a + "\n-----" + t[3] + "-----";
            g.copyToClipboard(e);
          }
          bg.loglogin(this.getID());
        }),
        function (t) {
          var e = this;
          this.passwordProtect(function () {
            K.call(e, t);
          });
        })),
      (Note.prototype.getNoteField = function (t, e) {
        var o = this.getKeyValuePairs(e),
          a;
        for (a in o) {
          var r = o[a];
          if (a === t && "" !== r) return r;
        }
        return null;
      }),
      (Note.prototype.getPassword = function () {
        return this.getNoteField("Password");
      }),
      (Note.prototype.hasPassword = function () {
        return null !== this.getPassword();
      }),
      (Note.prototype.getUsername = function () {
        return this.getNoteField("Username");
      }),
      (Note.prototype.hasUsername = function () {
        return null !== this.getUsername();
      }),
      (Note.prototype.getPrivateKey = function (t) {
        return this.getNoteField("Private Key", t);
      }),
      (Note.prototype.hasPrivateKey = function () {
        return null !== this.getPrivateKey();
      }),
      (Note.prototype.hasNoteField = function (t) {
        return null !== this.getNoteField(t);
      }),
      (Note.prototype.toString = function () {
        if (LPFeatures.allowOmarIA()) {
          if (!this._displayName)
            for (var t = bg.get("RecordTypeConfig"), e = 0, o; e < t.types.length; ++e) {
              if (t.types[e].recordType === this.getRecordType()) {
                this._displayName = Strings.translateString(t.types[e].name) + ": " + this._data.name;
                break;
              }
            }
          return this._displayName;
        }
        return Strings.Vault.SECURE_NOTE + ": " + this._data.name;
      }),
      (Note.prototype.getKeyValuePairs =
        ((R = "NoteType:"),
        function (t) {
          var e = g.decryptMobile(this._data.extra, !0, this.getKey()),
            o = new DialogInput.NestedFields(),
            a = 0 === e.indexOf(R),
            r = !this._noteType || "Generic" !== this._noteType;
          if (e && a && r && D(e.substring(R.length, e.indexOf("\n"))))
            for (var s, e, n = {}, i = 0, p = (e = e.split("\n")).length; i < p; ++i) {
              var c = e[i],
                u = c.indexOf(":");
              if (0 < u) {
                var l = c.substring(0, u);
                if (void 0 === n[l] && ("object" != typeof t || t[l])) {
                  (o[l] = c.substring(u + 1)), (n[(s = l)] = !0);
                  continue;
                }
              }
              s && (o[s] += "\n" + c);
            }
          else o.Notes = e;
          return o;
        })),
      (Note.prototype.getFormData = function (t) {
        var e = VaultItem.prototype.getFormData.apply(this, arguments);
        return (e.extra = this.getKeyValuePairs(t.extra)), (e.notetype = this.getNoteType()), (e.template = this._data.template), e;
      }),
      (Note.prototype.processEnteredData = function (t, e, o) {
        AccountBase.prototype.processEnteredData.apply(this, arguments);
        var a = "";
        if (t.notetype !== this.NOTE_TYPES.GENERIC) {
          (a = "NoteType:" + t.notetype), LPFeatures.allowOmarIA() && (a += "\nLanguage:" + (t.language || "en-US"));
          var r = t.extra,
            s;
          for (s in r) "function" != typeof r[s] && (a += "\n" + s + ":" + r[s]);
        } else a = t.extra.Notes;
        if (
          ((t.extra = this.encryptIfNecessary("extra", a, o)),
          this.getKey() !== o && (t.attachkey = g.encrypt(g.decrypt(this._data.attachkey, this.getKey()), o)),
          t.attacharraychanges && t.attacharraychanges.add && 0 < t.attacharraychanges.add.length)
        ) {
          var n = this.getAttachmentKey(),
            i = null,
            p = "";
          if (null === n)
            (n = bg.SHA256(bg.lpCreatePass(32, 1, 1, 1, 1, 1, 1, 1))),
              (t.attachkey = g.encrypt(n, o)),
              (n = bg.AES.hex2bin(n)),
              (i = t.attachkey),
              (p = "first_");
          else if (!n) throw new AttachmentKeyException();
          this.debugAttachmentKey(p + "attachment_key_uploading", t.storageKey, i);
          for (var c = 0, u = t.attacharraychanges.add.length; c < u; ++c) {
            var l = t.attacharraychanges.add[c],
              d = this.getID();
            "0" !== d && ((l.id = d + "-" + l.id), (l.parent = d)), (l.filename = g.encrypt(l.filename, n));
          }
        }
      }),
      (Note.prototype.getPostData =
        ((q = function (t, e) {
          if (e.attacharraychanges && e.attacharraychanges.remove)
            for (var o = 0, a = e.attacharraychanges.remove.length; o < a; ++o) t["rmattach" + o] = e.attacharraychanges.remove[o];
        }),
        (W = function (t, e) {
          if (e.attacharraychanges && e.attacharraychanges.add)
            for (var o = 0, a = e.attacharraychanges.add.length; o < a; ++o) {
              var r = e.attacharraychanges.add[o];
              (t["filename" + o] = r.filename),
                (t["mimetype" + o] = r.mimetype),
                (t["attachid" + o] = r.id.substring(r.id.indexOf("-") + 1)),
                (t["attachbytes" + o] = r.bytes);
            }
        }),
        function (t) {
          var e = AccountBase.prototype.getPostData.apply(this, arguments);
          return (
            (e.url = bg.AES.url2hex(this._data.url)),
            (e.u = e.url),
            (e.username = ""),
            (e.password = ""),
            (e.template = t.template),
            (e.hexName = bg.AES.url2hex(t.name)),
            (e.notetype = t.notetype),
            t.attachkey && (e.attachkey = t.attachkey),
            q(e, t),
            W(e, t),
            e
          );
        })),
      (Note.prototype.update =
        ((H = function (t) {
          if (t && t.remove) for (var e = 0, o = t.remove.length; e < o; ++e) this.removeAttachment(t.remove[e]);
        }),
        (j = function (t) {
          if (t && t.add) for (var e = 0, o = t.add.length; e < o; ++e) this.addAttachment(new Attachment(t.add[e]));
        }),
        function (t, e, o) {
          t && t.attacharraychanges && (o = JSON.parse(JSON.stringify(t.attacharraychanges))),
            AccountBase.prototype.update.apply(this, arguments),
            g.refreshSites(),
            H.call(this, o),
            j.call(this, o),
            (t.attachpresent = 0 < this._attachments.length ? "1" : ""),
            (t.attacharraychanges = { add: [], remove: [] });
        })),
      (Note.prototype.add = function (o, t) {
        var a, r;
        (r = (a = this)._data.attacharraychanges),
          LPRequest.makeUpdateRequest(g.addNote, {
            parameters: [a, o, t],
            showTimeWarningTimeout: 5e4,
            noDefaultMessage: !0,
            success: function (t) {
              var e = null != r ? JSON.parse(JSON.stringify(r)) : r;
              a.update(t, o, e), a.publishAdd(Topics.NOTE_ADDED, o);
            },
            error: function () {
              LPPlatform.logError("When sends the save request to the LPProxy to add note."),
                Topics.get(Topics.ERROR).publish(Strings.translateString("Changes to your note couldn't be saved. Try again."));
            }
          });
      }),
      (Note.prototype.save = function (e, o, t) {
        var a = this;
        LPRequest.makeUpdateRequest(g.saveNote, {
          parameters: [a, e, o, t],
          showTimeWarningTimeout: 5e4,
          noDefaultMessage: !0,
          success: function (t) {
            a.update(t, o, e.attacharraychanges), a.publishSaveSuccess(1);
          },
          error: function () {
            LPPlatform.logError("When sends the save request to the LPProxy to modify note."),
              Topics.get(Topics.ERROR).publish(Strings.translateString("Changes to your note couldn't be saved. Try again."));
          }
        });
      }),
      (Note.prototype.hasAttachments = function () {
        return 0 < this._attachments.length;
      }),
      (Note.prototype.getAttachments = function () {
        return this._attachments;
      }),
      (Note.prototype.addAttachment = function (t) {
        t.setParentNote(this), this._attachments.push(t);
      }),
      (Note.prototype.removeAttachment = function (t) {
        for (var e = 0, o = this._attachments.length; e < o; ++e)
          if (this._attachments[e] === t || this._attachments[e].getID() === t) return void this._attachments.splice(e, 1);
      }),
      (Attachment.prototype.setParentNote = function (t) {
        (this._parentNote = t) && (this._data.parent = t.getID());
      }),
      (Attachment.prototype.getID = function () {
        return this._data.id;
      }),
      (Attachment.prototype.getName = function () {
        var t, e, t;
        return (
          null === this._filename &&
            (null !== this._data.filename && this._data.filename.length
              ? (t = this._parentNote ? this._parentNote.getAttachmentKey() : null) && (this._filename = g.decrypt(this._data.filename, t))
              : ((t = ""),
                0 === (e = this._data.mimetype).indexOf("other:")
                  ? (t = "." + e.substring(6))
                  : (0 !== e.indexOf("data:audio") && 0 !== e.indexOf("data:image")) || (t = "." + e.substring(11)),
                (this._filename = "attachment" + t))),
          this._filename || this._data.filename
        );
      }),
      (Attachment.prototype.getType = function () {
        return this._data.mimetype;
      }),
      (Attachment.prototype.getBytes = function () {
        return this._data.bytes;
      }),
      (Attachment.prototype.getStorageKey = function () {
        return this._data.storagekey;
      }),
      (Attachment.prototype.getParentNote = function () {
        return this._parentNote;
      }),
      (Attachment.prototype.handleClickEvent = function (t, e) {
        switch (t) {
          case Constants.ACTION_DOWNLOAD:
            bg.sendLpImprove("download_attachment_clicked", {
              source: LPPlatform.lpIsExtension() ? "extension" : "webvault",
              usingbinary: "0"
            }),
              this.download();
            break;
          case Constants.ACTION_DELETE:
            bg.sendLpImprove("delete_attachment_clicked", {
              source: LPPlatform.lpIsExtension() ? "extension" : "webvault",
              usingbinary: "0"
            }),
              VaultItemBase.prototype.handleClickEvent.apply(this, arguments);
            break;
          default:
            VaultItemBase.prototype.handleClickEvent.apply(this, arguments);
        }
      }),
      (Attachment.prototype.download = function () {
        LPPlatform.downloadAttachment(this);
      }),
      (Attachment.prototype.deleteItem = function () {
        Topics.get(Topics.ATTACHMENT_REMOVED).publish(this), this.destroyViews();
      }),
      (Attachment.prototype.toString = function () {
        return Strings.Vault.DOWNLOAD + " " + this.getName();
      }),
      (FormFill.prototype.REPROMPT_TYPE = "view_ff_prompt"),
      (FormFill.prototype.FORM_FILL_TYPE_GENERIC = "0"),
      (FormFill.prototype.FORM_FILL_TYPE_CREDIT_CARD = "1"),
      (FormFill.prototype.getRepromptType = function () {
        return this.REPROMPT_TYPE;
      }),
      (FormFill.prototype.getEditTopicID = function () {
        return Topics.EDIT_FORM_FILL;
      }),
      (FormFill.prototype.getName = function () {
        return this._data.decprofilename;
      }),
      (FormFill.prototype.getID = function () {
        return this._data.ffid;
      }),
      (FormFill.prototype.setID = function (t) {
        this._data.ffid = t;
      }),
      (FormFill.prototype.isCreditCard = function () {
        return this._data.profiletype === this.FORM_FILL_TYPE_CREDIT_CARD;
      }),
      (FormFill.prototype.toString = function () {
        return Strings.Vault.FORM_FILL + ": " + this._data.decprofilename;
      }),
      (FormFill.prototype.handleClickEvent = function (t, e) {
        t === Constants.ACTION_FILL ? this.fill(e) : VaultItem.prototype.handleClickEvent.apply(this, arguments);
      }),
      (FormFill.prototype.fill = function (t) {
        var t = t ? t.source : "vault";
        g.fillProfile(this, t);
      }),
      (FormFill.prototype.deleteItem = function (t) {
        var e;
        this.passwordProtect(
          ((e = this),
          function () {
            LPRequest.makeLockItemUpdateRequest(g.deleteFormFill, {
              parameters: [e, t],
              items: e,
              success: function () {
                e.deleteUpdates();
              },
              confirm: e.confirmDelete()
            });
          })
        );
      }),
      (FormFill.prototype.enableCreditMonitoring = function () {
        LPRequest.makeUpdateRequest(g.createCreditMonitoringProfile, { parameters: this });
      }),
      (FormFill.prototype.add = function (t, e) {
        var o;
        (o = this),
          LPRequest.makeUpdateRequest(g.addFormFill, {
            parameters: [o, e],
            success: function (t) {
              o.update(t), o._data.creditmon && o.enableCreditMonitoring(), o.publishAdd(Topics.FORM_FILL_ADDED);
            },
            confirm: o._data.creditmon ? F(o._data, o.getKey()) : null
          });
      }),
      (O = function (t, e, o) {
        var a = h.createElement("tr", "settingsRow"),
          e;
        a.appendChild(h.createElement("td", "settingLabel", e)),
          "string" == typeof o
            ? a.appendChild(h.createElement("td", null, o))
            : ((e = h.createElement("td")).appendChild(o), a.appendChild(e)),
          t.appendChild(a);
      }),
      (z = function (t, e) {
        var o = h.createElement("div");
        return (
          t.address1 && o.appendChild(h.createElement("p", null, g.decryptMobile(t.address1, !0, e))),
          t.address2 && o.appendChild(h.createElement("p", null, g.decryptMobile(t.address2, !0, e))),
          t.address3 && o.appendChild(h.createElement("p", null, g.decryptMobile(t.address3, !0, e))),
          o.appendChild(
            h.createElement(
              "p",
              null,
              g.decryptMobile(t.city, !0, e) + ", " + g.decryptMobile(t.state, !0, e) + " " + g.decryptMobile(t.zip, !0, e)
            )
          ),
          o
        );
      }),
      (J = function (t) {
        return "•••• " + t.slice(-4);
      }),
      (X = function (t) {
        return "(" + (t = 11 === t.length ? t.substring(1) : t).substring(0, 3) + ") " + t.substring(3, 6) + "-" + t.substring(6);
      }),
      (F = function (t, e) {
        var o = [
            Strings.translateString("Only the below information will be sent to LastPass."),
            Strings.translateString("Other confidential Form Fill information, such as credit card numbers, will not be sent.")
          ],
          a = h.createElement("table", "settings creditMonConfirm"),
          t =
            (O(a, Strings.translateString("Name"), g.decryptMobile(t.firstname, !0, e) + " " + g.decryptMobile(t.lastname, !0, e)),
            O(a, Strings.translateString("Birthday"), g.decryptMobile(t.birthday, !0, e)),
            O(a, Strings.translateString("Social Security Number"), J(g.decryptMobile(t.ssn, !0, e))),
            O(a, Strings.translateString("Phone Number"), X(g.decryptMobile(t.phone, !0, e))),
            O(a, Strings.translateString("Address"), z(t, e)),
            h.addZebraStriping(a),
            o.push(a),
            h.createElement("p", { compoundtranslation: !0, class: "dialogText" }, "I have read and agree with the "));
        return (
          t.appendChild(
            h.createElement(
              "a",
              { target: "_blank", href: g.getBaseURL() + "creditmonitoring.php?cmd=showterms" },
              "LastPass Terms and Conditions"
            )
          ),
          Strings.translate(t),
          o.push(t),
          {
            title: Strings.Vault.ADD_CREDIT_MON,
            text: o,
            nextButtonText: Strings.translateString("I Agree"),
            backButtonText: Strings.translateString("I Do Not Agree")
          }
        );
      }),
      (FormFill.prototype.save = function (t, e, o) {
        var a;
        (a = this),
          LPRequest.makeUpdateRequest(g.saveFormFill, {
            parameters: [a, t, o],
            success: function () {
              a.update(t), a.publishSaveSuccess(1);
            },
            confirm: t.creditmon && !a._data.creditmon ? F(t, a.getKey()) : null
          });
      }),
      (FormFill.prototype.update = function (t) {
        var e = !1;
        t.creditmon && !this._data.creditmon && (e = !0),
          VaultItem.prototype.update.apply(this, arguments),
          e && this.enableCreditMonitoring();
      }),
      (FormFill.prototype.getPostData = function (t) {
        var e = VaultItem.prototype.getPostData.apply(this, arguments),
          o = this.getKey(),
          a;
        for (a in t) {
          var r = t[a];
          if (this.isEncryptedField(a)) e[a] = g.encryptWithKey(g.decryptMobile(r, !0, o), o);
          else
            switch (a) {
              case "creditmon":
              case "pwprotect":
                break;
              default:
                e[a] = r;
            }
        }
        return (e.ffid = this.getID()), void 0 !== e.custom_fields && delete e.custom_fields, t.creditmon && (e.creditmon = "on"), e;
      }),
      (FormFill.prototype.isEncryptedField = function (t) {
        if (-1 !== t.indexOf("cfid")) return !1;
        switch (t) {
          case "decprofilename":
          case "pwprotect":
          case "creditmon":
          case "custom_fields":
          case "profiletype":
            return !1;
          default:
            return !0;
        }
      }),
      (w = function (t, e) {
        try {
          var o = JSON.parse(t[e]);
          delete t[e],
            (t[e + "ext"] = o.ext),
            (t["phone" === e || "fax" === e ? e : e + "phone"] = o.num),
            (t["phone" === e || "fax" === e ? e + "3lcc" : e + "phone3lcc"] = o.cc3l);
        } catch (t) {}
      }),
      (k = function (t, e, o) {
        var a = {};
        return (
          (a.ext = g.decryptMobile(t[e + "ext"], !0, o)),
          (a.num = g.decryptMobile(t["phone" === e || "fax" === e ? e : e + "phone"], !0, o)),
          (a.cc3l = g.decryptMobile(t["phone" === e || "fax" === e ? e + "3lcc" : e + "phone3lcc"], !0, o)),
          JSON.stringify(a)
        );
      }),
      (FormFill.prototype.processEnteredData = function (t, e, o) {
        for (var a in (w(t, "phone"), w(t, "mobile"), w(t, "eve"), w(t, "fax"), t)) {
          var r = t[a];
          if ("custom_fields" === a)
            for (var s = "customfield", n = 0, i = r.length; n < i; ++n) {
              var p = r[n],
                c = s + (n + 1);
              (t[c + "cfid"] = p.cfid),
                (t[c + "text"] = g.encryptMobile(p.text, !0, o)),
                (t[c + "value"] = g.encryptMobile(p.value, !0, o)),
                (t[c + "alttext"] = "");
            }
          else this.isEncryptedField(a) && (t[a] = this.encryptIfNecessary(a, t[a], o));
        }
        delete t.custom_fields, (t.profilename = g.encryptMobile(t.decprofilename, !0, o));
      }),
      (FormFill.prototype.getFormData = function (t) {
        var e = {},
          o = this.getKey(),
          a;
        for (a in t) this.isEncryptedField(a) ? (e[a] = g.decryptMobile(this._data[a], !0, o)) : (e[a] = this._data[a]);
        if (t.custom_fields) {
          e.custom_fields = [];
          for (var r = 0, s = this._data.custom_fields.length; r < s; ++r) {
            var n = this._data.custom_fields[r],
              i = {},
              n =
                ((i.cfid = n.cfid),
                (i.text = g.decryptMobile(n.text, !0, o)),
                (i.value = g.decryptMobile(n.value, !0, o)),
                g.decryptMobile(n.alttext, !0, o));
            "" !== n && (i.value += "\n" + n), e.custom_fields.push(i);
          }
        }
        return (
          (e.phone = k(this._data, "phone", o)),
          (e.mobile = k(this._data, "mobile", o)),
          (e.eve = k(this._data, "eve", o)),
          (e.fax = k(this._data, "fax", o)),
          e
        );
      }),
      (Identity.prototype.REPROMPT_TYPE = "switch_identity_prompt"),
      (Identity.prototype.getRepromptType = function () {
        return this.REPROMPT_TYPE;
      }),
      (Identity.prototype.getName = function () {
        return this._data.deciname;
      }),
      (Identity.prototype.getID = function () {
        return this._data.iid;
      }),
      (Identity.prototype.setID = function (t) {
        this._data.iid = t;
      }),
      (Identity.prototype.handleClickEvent = function (t, e) {
        t === Constants.ACTION_ENABLE ? this.enable() : VaultItemBase.prototype.handleClickEvent.apply(this, arguments);
      }),
      (Identity.prototype.getEditTopicID = function (t) {
        return Topics.EDIT_IDENTITY;
      }),
      (Identity.prototype.enable =
        ((L = function () {
          Topics.get(Topics.IDENTITY_ENABLE).publish(this), (this._enabled = !0), this.updateViews();
        }),
        function (t) {
          h.getOption(t, "reprompt", !0)
            ? this.passwordProtect(function () {
                L.apply(this), t && t.callback && t.callback();
              })
            : L.apply(this);
        })),
      (Identity.prototype.disable = function () {
        (this._enabled = !1), this.updateViews();
      }),
      (Identity.prototype.processEnteredData = function (t, e, o) {
        t.iname = g.encryptAES(t.deciname, o);
      }),
      (Identity.prototype.save =
        (($ = function (t) {
          this.update(t), this.publishSaveSuccess(1);
        }),
        function (t) {
          LPRequest.makeUpdateRequest(g.saveIdentity, { params: { identity: t }, success: this.createHandler($) });
        })),
      (Identity.prototype.add =
        ((Z = function (t) {
          this.update(t), this.publishAdd(Topics.IDENTITY_ADDED);
        }),
        function () {
          LPRequest.makeUpdateRequest(g.addIdentity, { params: { identity: this._data }, success: this.createHandler(Z) });
        })),
      (Identity.prototype.deleteItem =
        ((Q = function () {
          this.deleteUpdates();
        }),
        (tt = function () {
          g.logEvent("v_did"),
            LPRequest.makeLockItemUpdateRequest(g.deleteIdentity, {
              params: { id: this.getID() },
              items: this,
              success: this.createHandler(Q),
              confirm: this.confirmDelete()
            });
        }),
        function () {
          this._enabled
            ? Topics.get(Topics.ERROR).publish(Strings.translateString("%s cannot be deleted while enabled.", this.toString()))
            : this.passwordProtect(tt);
        })),
      (Identity.prototype.toString = function () {
        return Strings.Vault.IDENTITY + ": " + this.getName();
      });
  })($, document, LPTools, LPProxy);
