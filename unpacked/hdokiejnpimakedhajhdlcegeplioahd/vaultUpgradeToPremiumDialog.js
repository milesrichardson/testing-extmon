var VaultUpgradeToPremiumDialog = function (e) {
  Dialog.call(this, e, {
    dynamicHeight: !0,
    buttonsInsideContent: !0,
    closeButtonEnabled: !1,
    hidePreviousDialogs: !0,
    hideHeader: !0,
    hideButtons: !0,
    overlayDialog: !0
  });
};
(VaultUpgradeToPremiumDialog.prototype = Object.create(Dialog.prototype)),
  ((VaultUpgradeToPremiumDialog.prototype.constructor = VaultUpgradeToPremiumDialog).prototype.initialize = function (e) {
    var t;
    Dialog.prototype.initialize.apply(this, arguments),
      (t = this),
      $("#closeDialog").on("click", function () {
        t.close(!0);
      });
  }),
  (VaultUpgradeToPremiumDialog.prototype.productType = {
    paywall: "Premium",
    sharing: "Families",
    emergency_access: "Premium",
    emergency_access_families: "Families",
    families: "Premium"
  }),
  (VaultUpgradeToPremiumDialog.prototype.dialogType = null),
  (VaultUpgradeToPremiumDialog.prototype.getProductType = function () {
    return this.productType[this.dialogType];
  }),
  (VaultUpgradeToPremiumDialog.prototype.purchasePremiumAction = function (e, t) {
    LPPlatform.purchasePremium(this.getProductType(), e, t);
  }),
  (VaultUpgradeToPremiumDialog.prototype.setType = function (e) {
    this.dialogType = e;
  }),
  (VaultUpgradeToPremiumDialog.prototype.setup = function (e, t, r) {
    Dialog.prototype.setup.apply(this, arguments);
    var a = $("#vaultUpgradeToPremiumDialogMainTitle"),
      i = $("#vaultUpgradeToPremiumDialogSubTitle"),
      s = $("#vaultUpgradeToPremiumDialogFeatureHeader"),
      n = $("#premiumDialogUpgradeButton"),
      o = $("#premiumDialogLearnMoreButton"),
      u = $("#closeDialog"),
      l = LPProxy.getAccountClass(),
      c = $("#featureTitle1"),
      m = $("#featureSubTitle1"),
      p = $("#featureImg1"),
      g = $("#featureTitle2"),
      d = $("#featureSubTitle2"),
      S = $("#featureImg2"),
      h = $("#featureTitle3"),
      y = $("#featureSubTitle3"),
      P = $("#featureImg3"),
      f = $("#featureItem3"),
      _ = this,
      b = $("#termsAndConditions"),
      v = $("#termsAndConditionsDescription"),
      L = $("#termsAndConditionsFooter"),
      U = function (e) {
        var t,
          e = e + getHtmlLanguageCode(bg.get("g_language")).slice(0, 2);
        console.log(e), bg.openURL(e);
      },
      T = function (e) {
        bg.sendLpImprove("upgrade_prompt_action", {
          feature: "Purchase Premium",
          action: e,
          userType: LPProxy.getAccountClass(),
          product: "Premium",
          source: "Vault Pop Up"
        });
      },
      F = function () {
        var e,
          t = '<a id="termsLink" href="#">' + Strings.translateString("Terms of Service") + "</a>",
          r,
          a = '<a id="privacyLink" href="#">' + Strings.translateString("Privacy Policy") + "</a>";
        v.text(
          Strings.translateString(
            "Your subscription will renew automatically every year and payment will be charged to your iTunes Account within 24 hours prior to the end of the current period. Subscription automatically renews unless auto-renew is turned off at least 24-hours before the end of the current period. Any unused portion of a free trial period will be forfeited when you purchase a subscription. You can turn off auto-renewal by going to your Account Settings after purchase. No cancellation of your subscription is allowed during the active subscription period."
          )
        ),
          L.text(""),
          L.append(Strings.translateString("By using our app you agree to the %s and %s.", t, a)),
          $("#termsLink").on("click", function () {
            var e;
            U("https://lastpass.com/terms.php?lang="), T("Terms");
          }),
          $("#privacyLink").on("click", function () {
            var e;
            bg.openURL("https://lastpass.com/privacy.php?lang="), T("Privacy Policy");
          });
      };
    switch (
      (bg.LPPlatform.isSafariAppStore(function (e) {
        e ? (o.hide(), F(), b.show()) : (o.show(), b.hide());
      }),
      this.dialogType)
    ) {
      case "paywall":
        n.unbind("click"),
          o.unbind("click"),
          a.text(Strings.translateString("Control your digital life")),
          s.text(Strings.translateString("Upgrade to LastPass Premium to keep access to advanced features.")),
          c.text(Strings.translateString("One-to-many sharing")),
          m.text(Strings.translateString("Share vital passwords with family and friends")),
          p.attr("src", "images/vault_4.0/upgradeToPremiumDialog/unlimited_sharing.svg"),
          g.text(Strings.translateString("Unlimited device access")),
          d.text(Strings.translateString("Use LastPass on all computers & mobiles")),
          S.attr("src", "images/vault_4.0/upgradeToPremiumDialog/unlimited_devices.svg"),
          h.text(Strings.translateString("Dark web monitoring")),
          y.text(Strings.translateString("Monitor accounts for data breaches")),
          P.attr("src", "images/vault_4.0/upgradeToPremiumDialog/dark_web_monitoring.svg");
        var D = Strings.translateString("Go Premium for only <currency><price>/month"),
          D;
        (D = (D = D.replace("<price>", t.price)).replace("<currency>", t.currency)),
          n.text(D),
          o.text(Strings.translateString("Learn more about Premium")),
          bg.sendLpImprove("upgrade_prompt_shown", {
            feature: "Purchase Premium",
            userType: l,
            product: l === Constants.USER_FAMILY_ADMIN ? "Families" : "Premium",
            source: "Vault Pop Up"
          }),
          n.on("click", function () {
            _.submit(),
              bg.sendLpImprove("upgrade_prompt_action", {
                feature: "Purchase Premium",
                action: "Purchase",
                userType: l,
                product: l === Constants.USER_FAMILY_ADMIN ? "Families" : "Premium",
                source: "Vault Pop Up"
              });
          }),
          o.on("click", function () {
            bg.openURL(LPProxy.getBaseURL() + "/premium-password-manager"),
              bg.sendLpImprove("upgrade_prompt_action", {
                feature: "Purchase Premium",
                action: "Learn More",
                userType: l,
                product: l === Constants.USER_FAMILY_ADMIN ? "Families" : "Premium",
                source: "Vault Pop Up"
              });
          }),
          u.on("click", function () {
            bg.sendLpImprove("upgrade_prompt_action", {
              feature: "Purchase Premium",
              action: "Dismiss",
              userType: l,
              product: l === Constants.USER_FAMILY_ADMIN ? "Families" : "Premium",
              source: "Vault Pop Up"
            });
          });
        break;
      case "sharing":
        n.unbind("click"),
          o.unbind("click"),
          a.text(Strings.translateString("Upgrade to LastPass Families for unlimited shared folders")),
          i.text(Strings.translateString("Securely share passwords and other sensitive information, arranged in convenient folders.")),
          c.text(Strings.translateString("6 Premium-level licences")),
          m.text(
            Strings.translateString(
              "Each family member has their own personal vault, plus the ability to create shared folders amongst the family."
            )
          ),
          (document.getElementById("featureImg1").src = "images/vault_4.0/upgradeToPremiumDialog/premium_level_access.svg"),
          g.text(Strings.translateString("Family manager dashboard")),
          d.text(Strings.translateString("Invite the clan to your LastPass Families account using their email address")),
          S.attr("src", "images/vault_4.0/upgradeToPremiumDialog/dashboard.svg"),
          f.hide(),
          n.text(Strings.translateString("Upgrade to Families")),
          o.text(Strings.translateString("Learn more about Families")),
          s.text(Strings.translateString("Here’s what else you get with LastPass Families!")),
          bg.sendLpImprove("upgrade_prompt_shown", {
            feature: "Shared Folders",
            userType: l,
            product: l === Constants.USER_FAMILY_ADMIN ? "Families" : "Premium",
            source: "Vault Pop Up"
          }),
          n.on("click", function () {
            _.submit(),
              bg.sendLpImprove("upgrade_prompt_action", {
                feature: "Shared Folders",
                action: "Purchase",
                userType: l,
                product: l === Constants.USER_FAMILY_ADMIN ? "Families" : "Premium",
                source: "Vault Pop Up"
              });
          }),
          o.on("click", function () {
            bg.openURL(LPProxy.getBaseURL() + "/family-password-manager"),
              bg.sendLpImprove("upgrade_prompt_action", {
                feature: "Shared Folders",
                action: "Learn More",
                userType: l,
                product: l === Constants.USER_FAMILY_ADMIN ? "Families" : "Premium",
                source: "Vault Pop Up"
              });
          }),
          u.on("click", function () {
            bg.sendLpImprove("upgrade_prompt_action", {
              feature: "Shared Folders",
              action: "Dismiss",
              userType: l,
              product: l === Constants.USER_FAMILY_ADMIN ? "Families" : "Premium",
              source: "Vault Pop Up"
            });
          });
        break;
      case "families":
        n.unbind("click"),
          o.unbind("click"),
          a.text(Strings.translateString("Upgrade to LastPass Families for family manager dashboard")),
          i.text(Strings.translateString("Invite the clan to your Families account using their email address.")),
          c.text(Strings.translateString("6 Premium-level licences")),
          m.text(
            Strings.translateString(
              "Each family member has their own personal vault, plus the ability to create shared folders amongst the family."
            )
          ),
          p.attr("src", "images/vault_4.0/upgradeToPremiumDialog/premium_level_access.svg"),
          g.text(Strings.translateString("Unlimited Shared Folders")),
          d.text(Strings.translateString("Securely share passwords and other sensitive information, arranged in convenient folders.")),
          S.attr("src", "images/vault_4.0/upgradeToPremiumDialog/unlimited_shared_folders.svg"),
          f.hide(),
          n.text(Strings.translateString("Upgrade to Families")),
          o.text(Strings.translateString("Learn more about Families")),
          s.text(Strings.translateString("Here’s what else you get with LastPass Families!")),
          bg.sendLpImprove("upgrade_prompt_shown", {
            feature: "Families Dashboard",
            userType: l,
            product: "Families",
            source: "Vault Pop Up"
          }),
          n.on("click", function () {
            _.submit(),
              bg.sendLpImprove("upgrade_prompt_action", {
                feature: "Families Dashboard",
                action: "Purchase",
                userType: l,
                product: "Families",
                source: "Vault Pop Up"
              });
          }),
          o.on("click", function () {
            bg.openURL(LPProxy.getBaseURL() + "/family-password-manager"),
              bg.sendLpImprove("upgrade_prompt_action", {
                feature: "Families Dashboard",
                action: "Learn More",
                userType: l,
                product: "Families",
                source: "Vault Pop Up"
              });
          }),
          u.on("click", function () {
            bg.sendLpImprove("upgrade_prompt_action", {
              feature: "Families Dashboard",
              action: "Dismiss",
              userType: l,
              product: "Families",
              source: "Vault Pop Up"
            });
          });
        break;
      case "emergency_access":
        n.unbind("click"),
          o.unbind("click"),
          f.show(),
          a.text(Strings.translateString("Upgrade to LastPass Premium for Emergency Access")),
          i.text(Strings.translateString("Keep your digital life alive. Designate an emergency contact & digital heir.")),
          c.text(Strings.translateString("One-to-many sharing")),
          m.text(Strings.translateString("Share vital passwords with family and friends")),
          p.attr("src", "images/vault_4.0/upgradeToPremiumDialog/unlimited_sharing.svg"),
          g.text(Strings.translateString("Unlimited device access")),
          d.text(Strings.translateString("Use LastPass on all computers & mobiles")),
          S.attr("src", "images/vault_4.0/upgradeToPremiumDialog/unlimited_devices.svg"),
          h.text(Strings.translateString("Dark web monitoring")),
          y.text(Strings.translateString("Monitor accounts for data breaches")),
          P.attr("src", "images/vault_4.0/upgradeToPremiumDialog/dark_web_monitoring.svg"),
          n.text(Strings.translateString("Upgrade to Premium")),
          o.text(Strings.translateString("Learn more about Premium")),
          s.text(Strings.translateString("Here’s what else you get with LastPass Premium!")),
          bg.sendLpImprove("upgrade_prompt_shown", {
            feature: "Emergency Access",
            userType: l,
            product: l === Constants.USER_FAMILY_ADMIN ? "Families" : "Premium",
            source: "Vault Pop Up"
          }),
          n.on("click", function () {
            _.submit(),
              bg.sendLpImprove("upgrade_prompt_action", {
                feature: "Emergency Access",
                action: "Purchase",
                userType: l,
                product: l === Constants.USER_FAMILY_ADMIN ? "Families" : "Premium",
                source: "Vault Pop Up"
              });
          }),
          o.on("click", function () {
            bg.openURL(LPProxy.getBaseURL() + "/premium-password-manager"),
              bg.sendLpImprove("upgrade_prompt_action", {
                feature: "Emergency Access",
                action: "Learn More",
                userType: l,
                product: l === Constants.USER_FAMILY_ADMIN ? "Families" : "Premium",
                source: "Vault Pop Up"
              });
          }),
          u.on("click", function () {
            bg.sendLpImprove("upgrade_prompt_action", {
              feature: "Emergency Access",
              action: "Dismiss",
              userType: l,
              product: l === Constants.USER_FAMILY_ADMIN ? "Families" : "Premium",
              source: "Vault Pop Up"
            });
          });
        break;
      case "emergency_access_families":
        n.unbind("click"),
          o.unbind("click"),
          a.text(Strings.translateString("Upgrade to LastPass Families for Emergency Access")),
          i.text(Strings.translateString("Keep your digital life alive. Designate an emergency contact & digital heir.")),
          c.text(Strings.translateString("6 Premium-level licences")),
          m.text(
            Strings.translateString(
              "Each family member has their own personal vault, plus the ability to create shared folders amongst the family."
            )
          ),
          p.attr("src", "images/vault_4.0/upgradeToPremiumDialog/premium_level_access.svg"),
          g.text(Strings.translateString("Unlimited Shared Folders")),
          d.text(Strings.translateString("Securely share passwords and other sensitive information, arranged in convenient folders.")),
          S.attr("src", "images/vault_4.0/upgradeToPremiumDialog/dashboard.svg"),
          f.hide(),
          n.text(Strings.translateString("Upgrade to Families")),
          o.text(Strings.translateString("Learn more about Families")),
          s.text(Strings.translateString("Here’s what else you get with LastPass Families!")),
          bg.sendLpImprove("upgrade_prompt_shown", {
            feature: "Families Emergency Access",
            userType: l,
            product: "Families",
            source: "Vault Pop Up"
          }),
          n.on("click", function () {
            _.submit(),
              bg.sendLpImprove("upgrade_prompt_action", {
                feature: "Families Emergency Access",
                action: "Purchase",
                userType: l,
                product: "Families",
                source: "Vault Pop Up"
              });
          }),
          o.on("click", function () {
            bg.openURL(LPProxy.getBaseURL() + "/family-password-manager"),
              bg.sendLpImprove("upgrade_prompt_action", {
                feature: "Families Emergency Access",
                action: "Learn More",
                userType: l,
                product: "Families",
                source: "Vault Pop Up"
              });
          }),
          u.on("click", function () {
            bg.sendLpImprove("upgrade_prompt_action", {
              feature: "Families Emergency Access",
              action: "Dismiss",
              userType: l,
              product: "Families",
              source: "Vault Pop Up"
            });
          });
    }
  });
