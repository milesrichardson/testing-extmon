(User = function (e, t, n, i) {
  var s;
  (this._username = e),
    (this._accountClass = t),
    (this._roleName = i),
    (this._element = null),
    (this._userMenuText = null),
    (this._identities = n),
    (this._identityDropdown = null),
    ((s = this).identityEnableCallback = function (e) {
      var t;
      s._identityDropdown && s._identityDropdown.setValue(e._data.deciname, !1),
        s._userMenuText && s._userMenuText.children().detach(),
        e instanceof AllIdentity
          ? s._userMenuText.append(s._userInfo)
          : ((t = LPTools.createElement("ul", "userMenuText")).appendChild(
              LPTools.createElement("li", "userMenuTextSingle truncateShort", e.getName())
            ),
            s._userMenuText.append(t));
    }),
    (s.identityAddedCallback = function (e) {
      s._identities.push(e),
        s._identityDropdown ? s._identityDropdown.setIdentities(s._identities) : s.initializeIdentityDropdown(s._element.get(0).firstChild);
    }),
    Topics.get(Topics.IDENTITY_ENABLE).subscribe(s.identityEnableCallback),
    Topics.get(Topics.IDENTITY_ADDED).subscribe(s.identityAddedCallback);
}),
  (function (e) {
    User.prototype.destruct = function () {
      this._element.unbind(),
        this._element.empty(),
        this._userMenuText.empty(),
        Topics.get(Topics.IDENTITY_ENABLE).unsubscribe(this.identityEnableCallback),
        Topics.get(Topics.IDENTITY_ADDED).unsubscribe(this.identityAddedCallback),
        (this._username = null),
        (this._accountClass = null),
        (this._roleName = null),
        (this._element = null),
        (this._userMenuText = null),
        (this._identities = null),
        (this._identityDropdown = null);
    };
    var o = function (e, t, n, i, s) {
      ((s = s || {}).id = n), (s.class = "menuListItem space-clickable");
      var n = LPTools.createElement("li"),
        t = LPTools.createElement(t, s);
      return (t.textContent = i), n.appendChild(t), e.appendChild(n), n;
    };
    (User.prototype.initializeIdentityDropdown = function (e) {
      var t = LPTools.createElement("li", "menuListHeader identityDropdownMenuItem"),
        n =
          (t.appendChild(LPTools.createElement("div", { id: "identityDropdownContainer" })),
          t.children[0].appendChild(
            LPTools.createElement("img", { id: "identityDropdownIcon", src: "images/vault_4.0/Identity_Avatar.png" })
          ),
          LPTools.createElement("div")),
        i =
          (t.children[0].appendChild(n),
          LPTools.createElement("input", { id: "identityDropdown", class: "dialogInput selectDropdown", type: "text" }));
      n.appendChild(i), e.insertBefore(t, e.firstChild), (this._identityDropdown = new IdentityDropdown(i, this._identities));
      for (var s = 0, r = this._identities.length; s < r; ++s) {
        var o = this._identities[s];
        o._enabled && this._identityDropdown.setValue(o.getName(), !1);
      }
      LPPlatform.addEventListener(t, "click", function (e) {
        e.stopPropagation();
      }),
        $(t.nextElementSibling).addClass("divider");
    }),
      (User.prototype.initialize = function (e, t) {
        e.empty();
        var n = LPTools.createElement("ul"),
          i = "",
          s =
            ((this._userInfo = LPTools.createElement("ul", "userMenuText")),
            this._userInfo.appendChild(LPTools.createElement("li", "userMenuTextPrimary truncateShort", this._username)),
            (i =
              this._accountClass === Constants.USER_ENTERPRISE_ROLE
                ? LPProxy.isIdentity()
                  ? Strings.translateString("Identity %s User", this._roleName)
                  : Strings.translateString("Enterprise %s User", this._roleName)
                : LPProxy.isFamilyUser()
                ? LPProxy.isAdmin()
                  ? Strings.translateString("Manager")
                  : Strings.translateString("Member")
                : LPProxy.isIdentity()
                ? LPProxy.isAdmin()
                  ? Strings.translateString("Identity Admin")
                  : Strings.translateString("Identity User")
                : Strings.translateString(this._accountClass)),
            this._userInfo.appendChild(LPTools.createElement("li", "userMenuTextSecondary", i)),
            ""),
          r =
            (t &&
              t[0] &&
              t[0].getElementsByClassName("userMenuTextPrimary")[0] &&
              (s = t[0].getElementsByClassName("userMenuTextPrimary")[0].innerText),
            ""),
          s =
            (t &&
              t[0] &&
              t[0].getElementsByClassName("userMenuTextSecondary")[0] &&
              (r = t[0].getElementsByClassName("userMenuTextSecondary")[0].innerText),
            (s === this._username && r === i) || t.append(this._userInfo),
            $(o(n, "div", "accountSettingsIcon", Strings.Vault.ACCOUNT_SETTINGS, { tabindex: 6 })).bind("click", function () {
              Topics.get(Topics.EDIT_SETTINGS).publish({ source: "accountdropdown" }),
                bg.sendLpImprove("vault_user_menu_click", {
                  option: "account_settings",
                  os_type: getOsType(),
                  browser_type: getBrowserType()
                });
            }),
            LPVault.isAppStore &&
              $(o(n, "div", "accountManagementIcon", Strings.Vault.ACCOUNT_MANAGEMENT, { tabindex: 7 })).bind("click", function () {
                dialogs.vaultAccountManagementDialog.open();
              }),
            $(
              o(n, "a", "helpCenterIcon", Strings.Vault.SUPPORT_CENTER, {
                href: "https://support.logmeininc.com/lastpass",
                target: "_blank",
                tabindex: 8
              })
            ).bind("click", function () {
              window.open("https://support.logmeininc.com/lastpass"),
                bg.sendLpImprove("vault_user_menu_click", {
                  option: "support_center",
                  os_type: getOsType(),
                  browser_type: getBrowserType()
                });
            }),
            $(
              o(n, "a", "attendWebinarIcon", Strings.Vault.ATTEND_TRAINING, {
                href: "http://link.lastpass.com/InpUsrLpEmb",
                target: "_blank",
                tabindex: 9
              })
            ).bind("click", function () {
              window.open("http://link.lastpass.com/InpUsrLpEmb"),
                bg.sendLpImprove("vault_user_menu_click", {
                  option: "attend_traning",
                  os_type: getOsType(),
                  browser_type: getBrowserType()
                });
            }),
            10),
          r;
        reduxApp &&
          reduxApp.getState().secondaryOnboarding &&
          void 0 !== (r = reduxApp.getState().secondaryOnboarding).isEnabled &&
          !1 === r.isEnabled &&
          ($(o(n, "div", "awardIcon", Strings.Vault.STARTER_KIT, { tabindex: s })).bind("click", function () {
            reduxApp.showSecondaryOnboarding();
          }),
          s++),
          $(o(n, "div", "logoutIcon", Strings.Vault.LOGOUT, { tabindex: s })).bind("click", function () {
            bg.sendLpImprove("logout_clicked", { source: "vault" }),
              bg.sendLpImprove("vault_user_menu_click", { option: "log_out", os_type: getOsType(), browser_type: getBrowserType() }),
              LPProxy.logout();
          }),
          e.append(n),
          1 < this._identities.length && this.initializeIdentityDropdown(n),
          (this._element = e),
          (this._userMenuText = t);
      }),
      (User.prototype.isFreeOrTrial = function () {
        return this._accountClass === Constants.USER_FREE || this._accountClass === Constants.USER_PREMIUM_TRIAL;
      }),
      (User.prototype.isFree = function () {
        return this._accountClass === Constants.USER_FREE;
      });
  })(document);
