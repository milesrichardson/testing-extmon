!(function () {
  var s = !1,
    e = function (t, e) {
      var n = this,
        o = LPTools.getOption(e, "enabled", !0),
        i = LPTools.createElement("div", "moreItem moreActions moreItem-override backgroundCircle fa-stack"),
        s = LPTools.createElement("div", {
          class: "fa fa-circle fa-stack-2x circle",
          vaultaction: o ? e.vaultaction : Constants.ACTION_DO_NOTHING,
          title: e.title
        }),
        a = (i.appendChild(s), $(s)),
        r = a,
        l,
        p =
          (e.type
            ? ((l = LPTools.createElement("div", "fa fa-" + e.type + " fa-stack-1x fontAwesomeIcon")), s.appendChild(l))
            : ((l = LPTools.createElement("span", "fa " + e.iconClass + " fa-stack-1x")), i.appendChild(l), (r = $(l))),
          o || $(s).addClass("empty"),
          function () {
            o
              ? (a.addClass("circleHover"), t.setSecondaryActionText(e.title), (t.currentAction = t.actions.indexOf(n)))
              : t.setSecondaryActionText("");
          }),
        u = function () {
          t.keyboardNavActive && (a.removeClass("circleHover"), t.hideSecondaryActionText(), (t.currentAction = -1));
        },
        c = null;
      r.bind("mouseenter", function () {
        clearTimeout(c), (c = setTimeout(p, 50));
      }),
        r.bind("mouseleave", function () {
          clearTimeout(c), (c = setTimeout(u, 50));
        }),
        (this.getButton = function () {
          return a;
        }),
        (this.getElement = function () {
          return i;
        }),
        (this.enter = function () {
          s.click();
        }),
        (this.focus = function () {
          "function" == typeof e.onFocus && e.onFocus(), p();
        }),
        (this.blur = function (t) {
          "function" == typeof e.onBlur && e.onBlur(), t ? (clearTimeout(c), (c = setTimeout(u, 50))) : u();
        }),
        (this.enabled = function () {
          return o;
        });
    },
    n,
    o,
    t,
    i,
    a,
    r;
  function l(t) {
    switch (t) {
      case Constants.ACTION_FILL:
      case Constants.ACTION_FILL_SITE:
        return "Fill";
      case Constants.ACTION_LAUNCH:
        return "Launch";
      case Constants.ACTION_EDIT:
        return "Edit";
      case Constants.ACTION_OPEN_IN_CONTEXT_OPTIONS:
        return "Copy";
    }
  }
  (VaultItemBase.prototype.reprompt =
    ((n = VaultItemBase.prototype.reprompt),
    (o = function (t) {
      return function () {
        t.apply(this, arguments), LPPlatform.closePopup();
      };
    }),
    function (t, e) {
      s = n.call(this, o(t), e);
    })),
    ((VaultItemBaseDisplay =
      ((t = VaultItemBaseDisplay.prototype.constructor),
      (((i = function () {
        t.apply(this, arguments), this.resetActions();
      }).prototype = t.prototype).constructor = i))).prototype.resetActions = function () {
      (this.actions = []),
        (this.currentAction = -1),
        (this.copyDropdown = null),
        (this.copyDropdownButton = null),
        (this.copyDrowndownShown = !1),
        (this.keyboardNavActive = !0);
    }),
    (VaultItemBaseDisplay.prototype.build = function (t) {
      this.resetActions(), (t = t || {});
      var e,
        e = (e = ["extensionMenuItem"]).concat(this.getMenuItemClass()),
        n = (t && t.isZiggySet && (e = e.concat("ziggyOverride")), LPTools.createElement("li", e)),
        e =
          (t && t.isOmarSet && (t.useSquareIcon = !0),
          t && t.additionalItemClasses && LPTools.addClass(n, t.additionalItemClasses),
          this.buildItemIconElement(t)),
        e = (null !== e && n.appendChild(e), this.buildItemInfoTextElements(t)),
        o = (0 < e.length && n.appendChild(e[0]), this.buildMoreOptionsButtons(t, n));
      if (o)
        if (o instanceof Array) for (var i = 0, s = o.length; i < s; ++i) o[i] && n.appendChild(o[i]);
        else n.appendChild(o);
      return n;
    }),
    (VaultItemBaseDisplay.prototype.getMenuItemClass = function () {
      return "item";
    }),
    (VaultItemBaseDisplay.prototype.destruct =
      ((a = VaultItemBaseDisplay.prototype.destruct),
      function () {
        this.copyDropdown && this.copyDropdown.remove(),
          this.copyDropdownOverlay &&
            this.copyDropdownOverlay.parentElement &&
            this.copyDropdownOverlay.parentElement.removeChild(this.copyDropdownOverlay),
          a.apply(this, arguments);
      })),
    (VaultItemBaseDisplay.prototype.buildZiggyCopyDropdown = function () {
      var t = this,
        e =
          ((this.copyDropdown = this.generateInContextDropdown()),
          (this.copyDropdownButton = this.buildZiggyVaultActionButton({
            type: "clone",
            enabled: !!this.copyDropdown,
            vaultaction: Constants.ACTION_OPEN_IN_CONTEXT_OPTIONS,
            title: this.copyDropdown ? Strings.Vault.COPY : Strings.translateString("Nothing to copy"),
            onFocus: function () {
              t.showInContextOptions();
            },
            onBlur: function () {
              t.hideInContextOptions();
            }
          })),
          this.copyDropdownButton.getButton()),
        n = LPTools.createElement("div", "fa fa-circle fa-stack-2x circle dropDownCircle");
      return (
        n.appendChild(LPTools.createElement("div", "fa fa-caret-down fa-stack-1x fontAwesomeIcon dropDownIcon")),
        e.append(n),
        this.copyDropdown && (e.append(this.copyDropdown), this.copyDropdown.bind("click", this._eventHandler)),
        this.copyDropdownButton
      );
    }),
    (VaultItemBaseDisplay.prototype.buildZiggyVaultActionButton = function (t) {
      var t = new e(this, t);
      return this.actions.push(t), t;
    }),
    (VaultItemBaseDisplay.prototype.pushKeyboardNavigation = function (t, e) {
      LPTools.pushKeyBoardNavigation(t, e), (this.keyboardNavActive = !1);
    }),
    (VaultItemBaseDisplay.prototype.popKeyboardNavigation = function () {
      LPTools.popKeyBoardNavigation(), (this.keyboardNavActive = !0);
    }),
    (VaultItemBaseDisplay.prototype.generateDropDownElement = function (t, e) {
      var n, o;
      return LPTools.createElement(
        "li",
        { class: "contextOptionsDropdownElement", title: Strings.translateString(e), vaultaction: t },
        Strings.translateString(e)
      );
    }),
    (VaultItemBaseDisplay.prototype.generateInContextButtons = function (t) {
      var e = [],
        n,
        o = {
          Account: [
            { action: Constants.ACTION_COPY_USERNAME, title: Strings.Vault.COPY_USERNAME },
            { action: Constants.ACTION_COPY_PASSWORD, title: Strings.Vault.COPY_PASSWORD },
            { action: Constants.ACTION_COPY_TOTP, title: Strings.Vault.COPY_TOTP }
          ],
          Address: [
            { action: Constants.ACTION_COPY_ADDRESS_1, title: Strings.Vault.COPY_ADDRESS_1 },
            { action: Constants.ACTION_COPY_ADDRESS_2, title: Strings.Vault.COPY_ADDRESS_2 },
            { action: Constants.ACTION_COPY_CITY_SLASH_TOWN, title: Strings.Vault.COPY_CITY_SLASH_TOWN },
            { action: Constants.ACTION_COPY_ZIP_SLASH_POSTAL_CODE, title: Strings.Vault.COPY_ZIP_SLASH_POSTAL_CODE },
            { action: Constants.ACTION_COPY_PHONE_NUMBER, title: Strings.Vault.COPY_PHONE_NUMBER },
            { action: Constants.ACTION_COPY_EMAIL_ADDRESS, title: Strings.Vault.COPY_EMAIL_ADDRESS }
          ],
          "Bank Account": [
            { action: Constants.ACTION_COPY_ACCOUNT_NUMBER, title: Strings.Vault.COPY_ACCOUNT_NUMBER },
            { action: Constants.ACTION_COPY_ROUTING_NUMBER, title: Strings.Vault.COPY_ROUTING_NUMBER }
          ],
          "Credit Card": [
            { action: Constants.ACTION_COPY_NUMBER, title: Strings.Vault.COPY_NUMBER },
            { action: Constants.ACTION_COPY_SECURITY_CODE, title: Strings.Vault.COPY_SECURITY_CODE }
          ],
          Database: [
            { action: Constants.ACTION_COPY_HOSTNAME, title: Strings.Vault.COPY_HOSTNAME },
            { action: Constants.ACTION_COPY_USERNAME, title: Strings.Vault.COPY_USERNAME },
            { action: Constants.ACTION_COPY_NOTE_PASSWORD, title: Strings.Vault.COPY_PASSWORD }
          ],
          "Driver's License": [{ action: Constants.ACTION_COPY_NUMBER, title: Strings.Vault.COPY_NUMBER }],
          "Health Insurance": [
            { action: Constants.ACTION_COPY_POLICY_NUMBER, title: Strings.Vault.COPY_POLICY_NUMBER },
            { action: Constants.ACTION_COPY_GROUP_ID, title: Strings.Vault.COPY_GROUP_ID },
            { action: Constants.ACTION_COPY_MEMBER_ID, title: Strings.Vault.COPY_MEMBER_ID }
          ],
          Insurance: [{ action: Constants.ACTION_COPY_POLICY_NUMBER, title: Strings.Vault.COPY_POLICY_NUMBER }],
          Membership: [{ action: Constants.ACTION_COPY_MEMBERSHIP_NUMBER, title: Strings.Vault.COPY_MEMBERSHIP_NUMBER }],
          Passport: [{ action: Constants.ACTION_COPY_NUMBER, title: Strings.Vault.COPY_NUMBER }],
          "Social Security": [{ action: Constants.ACTION_COPY_NUMBER, title: Strings.Vault.COPY_NUMBER }],
          "Software License": [
            { action: Constants.ACTION_COPY_LICENSE_KEY, title: Strings.Vault.COPY_LICENSE_KEY },
            { action: Constants.ACTION_COPY_ORDER_NUMBER, title: Strings.Vault.COPY_ORDER_NUMBER }
          ],
          "SSH Key": [
            { action: Constants.ACTION_COPY_SSH_PASSPHRASE, title: Strings.Vault.COPY_SSH_PASSPHRASE },
            { action: Constants.ACTION_COPY_SSH_PUBLIC_KEY, title: Strings.Vault.COPY_SSH_PUBLIC_KEY },
            { action: Constants.ACTION_COPY_HOSTNAME, title: Strings.Vault.COPY_HOSTNAME }
          ],
          "Wi-Fi Password": [{ action: Constants.ACTION_COPY_NOTE_PASSWORD, title: Strings.Vault.COPY_PASSWORD }],
          Server: [
            { action: Constants.ACTION_COPY_HOSTNAME, title: Strings.Vault.COPY_HOSTNAME },
            { action: Constants.ACTION_COPY_NOTE_USERNAME, title: Strings.Vault.COPY_USERNAME },
            { action: Constants.ACTION_COPY_NOTE_PASSWORD, title: Strings.Vault.COPY_PASSWORD }
          ],
          "Instant Messenger": [
            { action: Constants.ACTION_COPY_USERNAME, title: Strings.Vault.COPY_USERNAME },
            { action: Constants.ACTION_COPY_NOTE_PASSWORD, title: Strings.Vault.COPY_PASSWORD }
          ],
          "Email Account": [
            { action: Constants.ACTION_COPY_USERNAME, title: Strings.Vault.COPY_USERNAME },
            { action: Constants.ACTION_COPY_NOTE_PASSWORD, title: Strings.Vault.COPY_PASSWORD }
          ],
          Generic: [{ action: Constants.ACTION_COPY_NOTE, title: Strings.Vault.COPY_NOTE }]
        }[t];
      if (o)
        for (index in o) this.isExcludedAction(o[index].action) || e.push(this.generateDropDownElement(o[index].action, o[index].title));
      return e;
    }),
    (VaultItemBaseDisplay.prototype.generateInContextDropdown = function () {
      var t = this.generateInContextButtons(this.getRecordType());
      if (0 < t.length) {
        for (var e = LPTools.createElement("ul", { class: "contextOptionsDropdown displaynone" }), n = 0, o = t.length; n < o; n++)
          e.appendChild(t[n]);
        return $(e);
      }
      return null;
    }),
    (VaultItemBaseDisplay.prototype.buildMoreOptionsButtons = function (t, e) {
      var n = [],
        t,
        o,
        i,
        i;
      return (
        t && t.isZiggySet
          ? ((o = t = ""),
            (i = this._model.getRecordType()),
            ExtensionDropdown.isMatchingSite(this._model.getID()) || "Address" === i || "Bank Account" === i || "Credit Card" === i
              ? ((t = Constants.ACTION_FILL), (o = Strings.Vault.FILL))
              : "Account" === i && ((t = Constants.ACTION_LAUNCH), (o = Strings.Vault.LAUNCH)),
            t && n.push(this.buildZiggyVaultActionButton({ iconClass: "lp-fill", vaultaction: t, title: o }).getElement()),
            (i = this.buildZiggyCopyDropdown()) && n.push(i.getElement()),
            n.push(
              this.buildZiggyVaultActionButton({
                type: "pencil",
                vaultaction: Constants.ACTION_EDIT,
                title: Strings.Vault.EDIT
              }).getElement()
            ))
          : n.push(
              LPTools.createElement("div", {
                class: "moreItem moreActions background",
                vaultaction: Constants.ACTION_OPEN_MORE_OPTIONS,
                title: Strings.Vault.MORE_OPTIONS
              })
            ),
        n
      );
    }),
    (VaultItemBaseDisplay.prototype.buildItemIconElement = function (t) {
      var e = LPTools.createElement("div", "itemIcon");
      return e.appendChild(this.getIconElement(t)), e.appendChild(LPTools.createElement("div", "itemIconOverlay")), e;
    }),
    (VaultItemBaseDisplay.prototype.buildItemMenuOption = function (t) {
      var e = LPTools.createElement("li", { class: "extensionMenuItem", vaultaction: t });
      return (
        (e.textContent = Strings.Vault[Constants.CONTEXT_MENU_ITEMS[t]]), LPPlatform.addEventListener(e, "click", this._eventHandler), e
      );
    }),
    (VaultItemBaseDisplay.prototype.buildMoreOptions = function (t) {
      for (
        var e = this.getContainer()._buildOptions,
          n =
            (void 0 === t && (t = LPTools.getOption(e, "moreOptionsElement", this._element ? this._element.parentElement : null)),
            LPTools.removeDOMChildren(t),
            this.build(e)),
          o = (this.postBuild(n, e), t.appendChild(n), this._$_element.unbind("contextmenu"), this.getMoreOptions()),
          i = [],
          s = 0,
          a = o.length;
        s < a;
        ++s
      ) {
        var r = o[s],
          r;
        this.isExcludedAction(r) || ((r = this.buildItemMenuOption(r)), i.push(r), t.appendChild(r));
      }
      LPTools.addKeyBoardNavigation(i, { useRightArrow: !1, selectFirst: !0 }),
        ExtensionDropdown.setGroupLabel(LPProxy.getGroupByName(this._model.getGroupName()));
    }),
    (VaultItemBaseDisplay.prototype.openMoreOptions = function () {
      this.pushState(LPTools.getOption(this.getContainer()._buildOptions, "moreOptionsState", void 0)), this.buildMoreOptions();
      var t = LPTools.getOption(this.getContainer()._buildOptions, "moreOptionsCallback", void 0);
      t && t();
    }),
    (VaultItemBaseDisplay.prototype.hideInContextOptions = function () {
      (this.copyDropdownShown = !1),
        this.copyDropdown &&
          (this.copyDropdown.LP_hide(),
          this.popKeyboardNavigation(),
          this.copyDropdown.css({ top: "", left: "", right: "" }),
          this.copyDropdownParent && this.copyDropdownParent.appendChild(this.copyDropdown.get(0)),
          this.copyDropdownOverlay) &&
          this.copyDropdownOverlay.parentElement &&
          this.copyDropdownOverlay.parentElement.removeChild(this.copyDropdownOverlay);
    }),
    (VaultItemBaseDisplay.prototype.setupListeners =
      ((r = VaultItemBaseDisplay.prototype.setupListeners),
      function (t, e) {
        r.apply(this, arguments);
        var n = this;
        t.get(0).addEventListener(
          "click",
          function (t) {
            var t = l(n.getVaultAction(t.target));
            t &&
              top.reduxApp &&
              top.reduxApp.segmentService &&
              top.reduxApp.segmentService("Extension Toolbar Menu Vault Record Clicked", { Action: t, Source: e.source });
          },
          !0
        );
      })),
    (VaultItemBaseDisplay.prototype.showInContextOptions = function () {
      var e = this,
        t =
          ((this.copyDropdownShown = !0),
          this.copyDropdown.LP_show(),
          this.pushKeyboardNavigation(this.copyDropdown.children()),
          this.copyDropdownOverlay ||
            ((this.copyDropdownOverlay = LPTools.createElement("div", "subMenuOverlay")),
            this.copyDropdownOverlay.addEventListener("click", function (t) {
              e.copyDropdownButton.blur(!0);
              var t = document.elementFromPoint(t.clientX, t.clientY);
              t && $(t).mouseenter();
            })),
          document.body.appendChild(this.copyDropdownOverlay),
          this.copyDropdown.get(0)),
        n = t.getBoundingClientRect(),
        o = n.top;
      n.bottom > window.innerHeight && (o = n.top - t.clientHeight - 2 * t.offsetTop),
        this.copyDropdown.css({ top: o, left: n.left, right: "auto" }),
        (this.copyDropdownParent = t.parentElement),
        document.body.appendChild(t);
    }),
    (VaultItemBaseDisplay.prototype.openInContextOptions = function () {
      this.copyDropdownShown ? this.hideInContextOptions() : this.showInContextOptions();
    }),
    (VaultItemBaseDisplay.prototype.pushState = function (t) {
      (t = t || ExtensionDropdown.State.GroupState), Topics.get(Topics.PUSH_STATE).publish(new t(this._parent));
    }),
    (VaultItemBaseDisplay.prototype.handleEvent = function (t, e) {
      var n,
        n = $("#recentSites").is(":visible")
          ? "recent"
          : $("#matchingSites").is(":visible")
          ? "matchnav"
          : $("#favoriteSites").is(":visible")
          ? "favorites"
          : $(".matchingSitesIsVisible").is(":visible")
          ? $(".topLevelMatchesShadow").is(":visible")
            ? "matchscroll"
            : "matchfew"
          : "all",
        o = { source: "icon", approach: n, isTrusted: t.isTrusted || (t.originalEvent && t.originalEvent.isTrusted) };
      switch (t.type) {
        case "click":
          var i = this.getVaultAction(t.target);
          switch (
            (this.getRecordType() &&
              this.getBuildOptions().trackAction &&
              "openInContextOptions" !== i &&
              bg.sendLpImprove("itemaction", $.extend({}, o, { action: i, type: this.getRecordType() })),
            this.handleClickEvent(i, o),
            i)
          ) {
            case Constants.ACTION_DO_NOTHING:
            case Constants.ACTION_OPEN_MORE_OPTIONS:
            case Constants.ACTION_OPEN_IN_CONTEXT_OPTIONS:
            case Constants.ACTION_TOGGLE_OPEN:
              s = !0;
          }
          s && (t.stopPropagation(), t.preventDefault(), (s = !1));
          break;
        case "contextmenu":
          this.getBuildOptions().isOmarSet ||
            (this.handleClickEvent(Constants.ACTION_OPEN_MORE_OPTIONS, o), t.stopPropagation(), t.preventDefault());
      }
    }),
    (VaultItemBaseDisplay.prototype.isMatching = function () {
      return !1;
    }),
    (VaultItemDisplay.prototype.nextAction = function (t, e) {
      for (
        var n = this.currentAction, o = this.actions.length + 1;
        (n = ((n + o + t + 1) % o) - 1) !== this.currentAction && -1 < n && !this.actions[n].enabled();

      );
      -1 < this.currentAction && this.actions[this.currentAction].blur(), !e && -1 < n && this.actions[n].focus(), (this.currentAction = n);
    }),
    (VaultItemDisplay.prototype.arrowRightOverride = function () {
      return this.nextAction(1), 0 === this.actions.length;
    }),
    (VaultItemDisplay.prototype.arrowLeftOverride = function () {
      var t = -1 === this.currentAction;
      return this.nextAction(-1, t), t;
    }),
    (VaultItemDisplay.prototype.keyboardEnterOverride = function () {
      var t = this.currentAction;
      return -1 < this.currentAction && this.actions[this.currentAction].enter(), -1 === t;
    }),
    (VaultItemDisplay.prototype.navigateFrom = function () {
      -1 < this.currentAction && this.actions[this.currentAction].blur();
    }),
    (VaultItemDisplay.prototype.postBuild = function (t) {
      VaultItemBaseDisplay.prototype.postBuild.apply(this, arguments), this.updateTextElements();
    }),
    (GroupDisplay.prototype.getDisplayName = function () {
      return this._model.getGroupName();
    }),
    (GroupDisplay.prototype.build = function (t) {
      var e = VaultItemBaseDisplay.prototype.build.apply(this, arguments);
      return e.setAttribute("vaultaction", Constants.ACTION_TOGGLE_OPEN), e;
    }),
    (GroupDisplay.prototype.buildItemIconElement = function () {
      return null;
    }),
    (GroupDisplay.prototype.getMenuItemClass = function () {
      return "group";
    }),
    (GroupDisplay.prototype.buildMoreOptionsButtons = function () {
      return LPTools.createElement("div", "more");
    }),
    (GroupDisplay.prototype.setupListeners = function (t, e) {
      $(t).bind("click", this._eventHandler);
    }),
    (GroupDisplay.prototype.toggleOpen = function (t) {
      this.pushState(), this.rebuildItems(this._element.parentElement, !t.isTrusted), ExtensionDropdown.setGroupLabel(this._model);
    }),
    (GroupDisplay.prototype.rebuildItems = function (t, e) {
      var n = this.getContainer();
      if (
        ((t = t || n._element),
        0 === this.getSubGroups().length &&
          1 === this.getItems().length &&
          LPTools.getOption(n._buildOptions, "autoExpandSingleItem", !0) &&
          !LPTools.getOption(n._buildOptions, "isOmarSet", !1))
      )
        this.getItems()[0].buildMoreOptions(t);
      else {
        LPTools.removeDOMChildren(t);
        var o = this.favoritesGroup && !this.favoritesGroup.isEmpty(),
          i = (o && this.buildItems([this.favoritesGroup], t, n._buildOptions), 0),
          s = [],
          a = null;
        if (bg.get("g_nofolder_feature_enabled"))
          for (var r = 0, l = this.getSubGroups().length; r < l; r++)
            this.getSubGroups()[r] instanceof DefaultGroupDisplay
              ? (i = (a = this.getSubGroups()[r]).getItems() ? a.getItems().length : 0)
              : s.push(this.getSubGroups()[r]);
        var p = a ? s : this.getSubGroups(),
          t =
            (this.buildItems(p, t, n._buildOptions),
            this.buildItems(this.getItems(), t, n._buildOptions),
            a && 0 < i && this.buildItems(a.getItems(), t, n._buildOptions),
            0 < p.length && (0 < this.getItems().length || 0 < i) && p[p.length - 1]._$_element.removeClass("last"),
            []),
          o =
            (o && t.push(this.favoritesGroup),
            (t = t.concat(p, this.getItems())),
            (t = a && 0 < i ? t.concat(a.getItems()) : t).map(function (t) {
              return t._element;
            })),
          u;
        bg.get("LPContentScriptFeatures").ziggy
          ? LPTools.addKeyBoardNavigation(o, { selectFirst: e, displayItems: t, useRightArrow: !0 })
          : LPTools.addKeyBoardNavigation(o, { rightArrowSelector: ".moreItem", selectFirst: e }),
          LPTools.getOption(n._buildOptions, "addLastClass", !0) || $(o[o.length - 1]).removeClass("last");
      }
    }),
    (GroupDisplay.prototype.getItemContainer = function () {
      return this.getContainer()._element;
    }),
    (GroupDisplay.prototype.getSubFolderContainer = GroupDisplay.prototype.getItemContainer),
    (AccountDisplay.prototype.build = function (t) {
      var e = VaultItemBaseDisplay.prototype.build.apply(this, arguments);
      return (
        ExtensionDropdown.isMatchingSite(this._model.getID())
          ? (e.setAttribute("vaultaction", Constants.ACTION_FILL_SITE),
            e.setAttribute("title", Strings.Vault.FILL + " " + this.getDisplayName()))
          : (e.setAttribute("vaultaction", Constants.ACTION_LAUNCH),
            e.setAttribute("title", Strings.Vault.LAUNCH + " " + this.getDisplayName())),
        e
      );
    }),
    (AccountDisplay.prototype.setupListeners = function (t, e) {
      VaultItemBaseDisplay.prototype.setupListeners.apply(this, arguments);
    }),
    (AccountDisplay.prototype.getMoreOptions = function () {
      var t = [
        Constants.ACTION_COPY_USERNAME,
        Constants.ACTION_COPY_PASSWORD,
        Constants.ACTION_COPY_TOTP,
        Constants.ACTION_COPY_URL,
        Constants.ACTION_GO_TO_URL,
        Constants.ACTION_EDIT,
        Constants.ACTION_DELETE
      ];
      return ExtensionDropdown.isMatchingSite(this._model.getID()) && t.unshift(Constants.ACTION_FILL_SITE), t;
    }),
    (NoteDisplay.prototype.build = function (t) {
      var e = VaultItemBaseDisplay.prototype.build.apply(this, arguments),
        n = (LPTools.addClass(e, "note"), this._model.getRecordType());
      return (
        ExtensionDropdown.isMatchingSite(this._model.getID()) || "Address" === n || "Bank Account" === n || "Credit Card" === n
          ? (e.setAttribute("vaultaction", Constants.ACTION_FILL),
            e.setAttribute("title", Strings.Vault.FILL + " " + this.getDisplayName()))
          : (e.setAttribute("vaultaction", Constants.ACTION_EDIT),
            e.setAttribute("title", Strings.Vault.EDIT + " " + this.getDisplayName())),
        e
      );
    }),
    (NoteDisplay.prototype.getMoreOptions = function () {
      var t = [];
      return (
        this._model.hasUsername() && t.push(Constants.ACTION_COPY_USERNAME),
        this._model.hasPassword() && t.push(Constants.ACTION_COPY_PASSWORD),
        t.push(Constants.ACTION_COPY_NOTE),
        this._model.hasPrivateKey() && t.push(Constants.ACTION_COPY_KEY),
        t.push(Constants.ACTION_EDIT),
        t.push(Constants.ACTION_DELETE),
        t
      );
    }),
    (NoteDisplay.prototype.setupListeners = function (t, e) {
      VaultItemBaseDisplay.prototype.setupListeners.apply(this, arguments);
    }),
    (FormFillDisplay.prototype.getMoreOptions = function () {
      return [Constants.ACTION_EDIT, Constants.ACTION_FILL];
    }),
    (FormFillDisplay.prototype.setupListeners = function (t, e) {
      VaultItemBaseDisplay.prototype.setupListeners.apply(this, arguments);
    }),
    (FormFillDisplay.prototype.build = function (t) {
      var e = VaultItemBaseDisplay.prototype.build.apply(this, arguments);
      return (
        LPTools.addClass(e, "formFill"),
        e.setAttribute("vaultaction", Constants.ACTION_FILL),
        e.setAttribute("title", Strings.Vault.FILL + " " + this.getDisplayName()),
        e
      );
    }),
    (FormFillDisplay.prototype.includeCreditInfo = function () {
      return !1;
    }),
    (IdentityDisplay.prototype.build = function (t) {
      var e = VaultItemBaseDisplay.prototype.build.apply(this, arguments);
      return (
        e.setAttribute("vaultaction", Constants.ACTION_ENABLE),
        e.setAttribute("title", Strings.Vault.ENABLE + " " + this.getDisplayName()),
        e
      );
    }),
    (AllIdentityDisplay.prototype.build = IdentityDisplay.prototype.build),
    (IdentityDisplay.prototype.buildMoreOptionsButtons = function () {
      return null;
    }),
    (IdentityDisplay.prototype.openMoreOptions = function () {}),
    ((MatchingAccountDisplay = function (t) {
      AccountDisplay.call(this, t);
    }).prototype = Object.create(AccountDisplay.prototype)),
    ((MatchingAccountDisplay.prototype.constructor = MatchingAccountDisplay).prototype.build = function (t) {
      var e = AccountDisplay.prototype.build.apply(this, arguments);
      return LPTools.addClass(e, "matchingSite"), e;
    }),
    (MatchingAccountDisplay.prototype.buildMoreOptionsButtons = function (t, e) {
      var n = [],
        t,
        o,
        o;
      return (
        t && t.isZiggySet
          ? ((o = t = ""),
            (o = ExtensionDropdown.isMatchingSite(this._model.getID())
              ? ((t = Constants.ACTION_FILL), Strings.Vault.FILL)
              : ((t = Constants.ACTION_LAUNCH), Strings.Vault.LAUNCH)),
            n.push(this.buildZiggyVaultActionButton({ iconClass: "lp-fill", vaultaction: t, title: o }).getElement()),
            n.push(this.buildZiggyCopyDropdown().getElement()),
            n.push(
              this.buildZiggyVaultActionButton({
                type: "pencil",
                vaultaction: Constants.ACTION_EDIT,
                title: Strings.Vault.EDIT
              }).getElement()
            ))
          : (this.isExcludedAction(Constants.ACTION_COPY_USERNAME) ||
              n.push(
                LPTools.createElement("div", {
                  class: "moreItem copyUsername",
                  title: Strings.Vault.COPY_USERNAME,
                  vaultaction: Constants.ACTION_COPY_USERNAME
                })
              ),
            this.isExcludedAction(Constants.ACTION_COPY_PASSWORD) ||
              n.push(
                LPTools.createElement("div", {
                  class: "moreItem copyPassword",
                  title: Strings.Vault.COPY_PASSWORD,
                  vaultaction: Constants.ACTION_COPY_PASSWORD
                })
              ),
            n.push(
              LPTools.createElement("div", {
                class: "moreItem background",
                title: Strings.Vault.MORE_OPTIONS,
                vaultaction: Constants.ACTION_OPEN_MORE_OPTIONS
              })
            )),
        n
      );
    }),
    (MatchingAccountDisplay.prototype.isMatching = function () {
      return bg.get("LPContentScriptFeatures").ziggy;
    }),
    ((MatchingNoteDisplay = function (t, e) {
      (this._language = e), NoteDisplay.call(this, t);
    }).prototype = Object.create(NoteDisplay.prototype)),
    ((MatchingNoteDisplay.prototype.constructor = MatchingNoteDisplay).prototype.build = function (t) {
      var e = VaultItemBaseDisplay.prototype.build.apply(this, arguments);
      return (
        LPTools.addClass(e, "matchingSite matchingNote"),
        e.setAttribute("vaultaction", Constants.ACTION_FILL),
        e.setAttribute("title", Strings.Vault.FILL + " " + this.getDisplayName()),
        e
      );
    }),
    (MatchingNoteDisplay.prototype.getDisplayName = function () {
      return this._model.getName() + (this._language ? " (" + this._language + ")" : "");
    }),
    (MatchingNoteDisplay.prototype.isMatching = function () {
      return bg.get("LPContentScriptFeatures").ziggy;
    }),
    (ApplicationDisplay.prototype.getMoreOptions = function () {
      return [Constants.ACTION_EDIT, Constants.ACTION_COPY_USERNAME, Constants.ACTION_COPY_PASSWORD, Constants.ACTION_DELETE];
    }),
    (ApplicationDisplay.prototype.build = function (t) {
      var e = VaultItemBaseDisplay.prototype.build.apply(this, arguments);
      return (
        LPFeatures.allowLaunchApplication()
          ? (e.setAttribute("vaultaction", Constants.ACTION_LAUNCH),
            e.setAttribute("title", Strings.Vault.LAUNCH + " " + this.getDisplayName()))
          : (e.setAttribute("vaultaction", Constants.ACTION_EDIT),
            e.setAttribute("title", Strings.Vault.EDIT + " " + this.getDisplayName())),
        e
      );
    }),
    ((AddCustomItem = function (t) {
      VaultItem.call(this, $.extend({}, { name: t.title }, t));
    }).prototype = Object.create(VaultItem.prototype)),
    ((AddCustomItem.prototype.constructor = AddCustomItem).prototype.toString = function () {
      return Strings.translateString("Add ") + this._data.name;
    });
  var p = null;
  ((AddCustomItemDisplay = function (t) {
    VaultItemDisplay.call(this, new AddCustomItem(t)), p || ((p = LPProxy.getRecordConfig().icons.custom), (p += " menuIcon"));
  }).prototype = Object.create(VaultItemDisplay.prototype)),
    ((AddCustomItemDisplay.prototype.constructor = AddCustomItemDisplay).prototype.build = function (t) {
      var e = LPTools.createElement("li", { class: "extensionMenuItem omariaMenuItem addOmariaItem" });
      return e.appendChild(LPTools.createElement("i", p)), e.appendChild(LPTools.createElement("span", "name", this._model.getName())), e;
    }),
    (AddCustomItemDisplay.prototype.handleClickEvent = function (t, e) {
      bg.LPPlatform.openTabDialog("note", { defaultData: { notetype: "Custom_" + this._model._data.id } });
    });
})();
