LPFeatures = (function () {
  var r = "feature-",
    o = "no-feature-",
    i = $(document.body),
    t = function (t) {
      var t = bg.get("g_prefoverrides")[t];
      return void 0 === t || "1" === t;
    },
    a = function (t) {
      var e,
        e = bg.get("g_prefoverrides"),
        e = "showcredmon" === t ? bg.get("g_showcredmon") : e && e[t];
      return (e = "boolean" == typeof e ? (e ? "1" : "0") : e);
    },
    u = function (t, e, n) {
      i.removeClass(o + t),
        i.removeClass(r + t),
        (void 0 !== n && !0 !== n) || e ? (void 0 !== n && !1 !== n) || !e || i.addClass(r + t) : i.addClass(o + t);
    },
    g = function () {
      return (
        null != bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures").omaria &&
        bg.get("LPContentScriptFeatures").omaria
      );
    },
    e,
    s = function () {
      return (
        null != bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures").safari_legacy_messaging &&
        bg.get("LPContentScriptFeatures").safari_legacy_messaging
      );
    },
    n,
    l,
    c,
    p,
    b,
    _,
    d,
    P,
    S,
    F,
    C,
    f,
    L,
    m,
    v,
    w = function () {
      return (
        null != bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures").emergency_access_repair &&
        bg.get("LPContentScriptFeatures").emergency_access_repair
      );
    },
    h,
    y,
    E,
    x,
    I;
  return {
    updateFeatures: function (t) {
      for (var e in t) {
        var n = a(e);
        void 0 !== n && u(e, "1" === n, t[e]);
      }
      u("omaria", g()), u("safariLegacyMessaging", s()), bg.get("g_new_settings_enabled") && $("#newSettingsMenuItem").addClass("visible");
    },
    allowIndividualSharing: function () {
      return this.allowShare() && !this.allowShareOnlyFolders();
    },
    allowSharedFolders: function () {
      return this.allowShare();
    },
    allowClipboardCopy: function () {
      return !0;
    },
    allowImport: function () {
      return t("import");
    },
    allowShare: function () {
      return t("share");
    },
    allowShareOnlyFolders: function () {
      return "1" === bg.get("g_prefoverrides").share_onlyfolders;
    },
    allowShareDomain: function (t) {
      return !0;
    },
    allowPasswordRevert: function () {
      return t("revert");
    },
    allowNotes: function () {
      return t("show_notes");
    },
    allowTwoFactorCode: function () {
      return t("show_two_factor_code");
    },
    allowFingerprint: function () {
      return t("show_fingerprint");
    },
    allowBookmarklets: function () {
      return t("bookmarklets");
    },
    allowHint: function () {
      return t("hint");
    },
    allowSecurityDashboard: function () {
      return bg.get("LPContentScriptFeatures").security_dashboard;
    },
    allowLaunchApplication: function () {
      return bg.canLaunchApplication();
    },
    allowNewSettings: function () {
      return bg.get("g_new_settings_enabled");
    },
    allowTryFamilies: function () {
      return (
        null != bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures").try_families_enabled &&
        bg.get("LPContentScriptFeatures").try_families_enabled
      );
    },
    restrictOneToOneSharing: function () {
      return (
        null != bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures").one_to_one_sharing_restricted &&
        bg.get("LPContentScriptFeatures").one_to_one_sharing_restricted
      );
    },
    pbkdf2IterartionsMigration: function () {
      return bg.get("LPContentScriptFeatures") && !!bg.get("LPContentScriptFeatures").pbkdf2_iterations_migration_enabled;
    },
    isDownloadExtensionWebPromptEnabled: function () {
      return (
        null != bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures").download_extension_web_prompt &&
        bg.get("LPContentScriptFeatures").download_extension_web_prompt
      );
    },
    restrictEmergencyAccessForFree: function () {
      return !0;
    },
    allowLicenseExpiration: function () {
      return (
        null != bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures").license_expiration &&
        bg.get("LPContentScriptFeatures").license_expiration
      );
    },
    isPromotionVaultSearchEnabled: function () {
      return bg.get("LPContentScriptFeatures").promotion_vault_search;
    },
    isPromotionExtensionSearchEnabled: function () {
      return bg.get("LPContentScriptFeatures").promotion_extension_search;
    },
    isPromotionVaultSidebarG2aEnabled: function () {
      return bg.get("LPContentScriptFeatures").promotion_vault_sidebar_g2a;
    },
    isPromotionVaultSidebarG2wEnabled: function () {
      return bg.get("LPContentScriptFeatures").promotion_vault_sidebar_g2w;
    },
    isPromotionVaultSidebarG2mVariantAEnabled: function () {
      return bg.get("LPContentScriptFeatures").promotion_vault_sidebar_g2m_variant_a;
    },
    isPromotionVaultSidebarG2mVariantBEnabled: function () {
      return bg.get("LPContentScriptFeatures").promotion_vault_sidebar_g2m_variant_b;
    },
    isPromotionMenuItemG2aEnabled: function () {
      return bg.get("LPContentScriptFeatures").promotion_extension_menu_item_g2a;
    },
    isPromotionMenuItemG2wEnabled: function () {
      return bg.get("LPContentScriptFeatures").promotion_extension_menu_item_g2w;
    },
    isPromotionMenuItemG2mEnabled: function () {
      return bg.get("LPContentScriptFeatures").promotion_extension_menu_item_g2m;
    },
    isPromotionDialogG2aEnabled: function () {
      return bg.get("LPContentScriptFeatures").promotion_extension_dialog_g2a;
    },
    isPromotionDialogG2wEnabled: function () {
      return bg.get("LPContentScriptFeatures").promotion_extension_dialog_g2w;
    },
    isVaultPremiumFeatureIndicatorEnabled: function () {
      return bg.get("LPContentScriptFeatures").show_vault_premium_feature_indicator;
    },
    isPromotionPromptEmailVerifyEnabled: function () {
      return bg.get("LPContentScriptFeatures").promotion_prompt_email_verify;
    },
    isVaultPremiumPopupsEnabled: function () {
      return bg.get("LPContentScriptFeatures").vault_premium_popups_enabled;
    },
    allowOmarIA: g,
    allowMigrationOptIn: function () {
      return (
        null != bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures").migration_opt_in &&
        bg.get("LPContentScriptFeatures").migration_opt_in
      );
    },
    allowFormfillMigration: function () {
      return !!bg.get("LPContentScriptFeatures").formfill_migration;
    },
    allowOmarDrawer: function () {
      return (
        null != bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures").omardrawer &&
        bg.get("LPContentScriptFeatures").omardrawer
      );
    },
    isDogfood: function () {
      return (
        null != bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures").isDogfood &&
        bg.get("LPContentScriptFeatures").isDogfood
      );
    },
    isFamiliesAsABenefitEnabled: function () {
      return (
        null != bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures").family_as_a_benefit &&
        bg.get("LPContentScriptFeatures").family_as_a_benefit
      );
    },
    isFamiliesAsABenefitWelcomeDialogEnabled: function () {
      return (
        null != bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures").family_as_a_benefit_welcome_dialog &&
        bg.get("LPContentScriptFeatures").family_as_a_benefit_welcome_dialog
      );
    },
    secondaryOnboardingEnabled: function () {
      return (
        null != bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures").secondary_onboarding &&
        bg.get("LPContentScriptFeatures").secondary_onboarding
      );
    },
    importPasswordsInVaultEnabled: function () {
      return (
        null != bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures").import_passwords_in_vault &&
        bg.get("LPContentScriptFeatures").import_passwords_in_vault
      );
    },
    welcomeExperimentEnabled: function () {
      return (
        null != bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures").welcome_experiment &&
        bg.get("LPContentScriptFeatures").welcome_experiment
      );
    },
    safari_legacy_messaging: s,
    hide_cloud_apps_policy_enabled: function () {
      return (
        null != bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures").hide_cloud_apps_policy_enabled &&
        bg.get("LPContentScriptFeatures").hide_cloud_apps_policy_enabled
      );
    },
    cloud_apps_filter_in_vault: function () {
      return (
        null != bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures").cloud_apps_filter_in_vault &&
        bg.get("LPContentScriptFeatures").cloud_apps_filter_in_vault
      );
    },
    familiesProvisioningUpdate: function () {
      return (
        null != bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures").families_provisioning_update &&
        bg.get("LPContentScriptFeatures").families_provisioning_update
      );
    },
    webClientFill: function () {
      return (
        null != bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures").web_client_fill &&
        bg.get("LPContentScriptFeatures").web_client_fill
      );
    },
    webClientFillTracking: function () {
      return (
        null != bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures").web_client_fill_tracking &&
        bg.get("LPContentScriptFeatures").web_client_fill_tracking
      );
    },
    webClientSave: function () {
      return (
        null != bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures").web_client_save &&
        bg.get("LPContentScriptFeatures").web_client_save
      );
    },
    webClientInfield: function () {
      return (
        null != bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures") &&
        void 0 !== bg.get("LPContentScriptFeatures").web_client_infield &&
        bg.get("LPContentScriptFeatures").web_client_infield
      );
    },
    canBackgroundOpenPopover: function () {
      return LPPlatform.canBackgroundOpenPopover();
    }
  };
})();
