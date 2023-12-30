(Interfaces.BackgroundInterface = (function (e) {
  var n = e.TYPE_FUNCTION,
    t = e.TYPE_SYNC_FUNCTION,
    i = e.TYPE_STRING,
    o = e.TYPE_BOOLEAN,
    r = e.TYPE_OBJECT,
    a = e.TYPE_NUMBER,
    s = e.Definition;
  return {
    base_url: new s(i),
    FILENAME_FRAGMENT_VALID: new s(a, { include: ["vault", "note"] }),
    g_bigicons: new s(r, { include: ["vault", "extensionDropdown", "vaultItemSelect"], sendIndirect: !1, write: !0 }),
    g_icons: new s(r, { include: ["vault", "extensionDropdown", "vaultItemSelect"] }),
    g_applications: new s(r, {
      include: ["vault", "extensionDropdown", "application"],
      sourceFunction: function () {
        return "undefined" != typeof g_applications ? g_applications : reduxApp.getNativeAppPasswords();
      }
    }),
    g_emer_sharees: new s(r, { include: "vault" }),
    g_emer_sharers: new s(r, { include: "vault" }),
    g_enterpriseuser: new s(i, {
      sync: !0,
      sourceFunction: function () {
        return "undefined" != typeof g_enterpriseuser
          ? g_enterpriseuser
          : reduxApp.getState().encryptedVaultDataSource.isEnterpriseUser
          ? "1"
          : "0";
      }
    }),
    g_enterprisemodel: new s(a, { sync: !0 }),
    g_enterpriseoffering: new s(a, { sync: !0 }),
    g_enterpriseuserrole: new s(i, { sync: !0 }),
    g_formfills: new s(r, { include: ["vault", "extensionDropdown", "formFill", "chooseProfile", "preferences"] }),
    g_genpws: new s(r, { include: ["vault", "extensionDropdown"], write: !0 }),
    g_identities: new s(r, { include: ["vault", "extensionDropdown"] }),
    g_identity: new s(i, { include: ["vault", "extensionDropdown"], sync: !0 }),
    g_iscompanyadmin: new s(o, { sync: !0 }),
    g_is_company_subscription_expired: new s(o, { sync: !0 }),
    g_show_billing_address_notification: new s(o, {
      sync: !0,
      sourceFunction: function () {
        return "undefined" != typeof reduxApp
          ? reduxApp.getState().user.showBillingAddressNotification
          : "undefined" != typeof g_show_billing_address_notification && g_show_billing_address_notification;
      }
    }),
    g_token: new s(i),
    g_is_premium_as_a_perk: new s(o, { sync: !0 }),
    g_is_restricted: new s(o),
    g_has_credit_monitoring_premium: new s(o),
    g_primary_device_switches_left: new s(a),
    g_is_company_owner: new s(o),
    g_display_premium_retrial_offer: new s(o),
    g_infield_multidevice_paywall_tracking: new s(o, {
      sourceFunction: function () {
        return "undefined" != typeof LPContentScriptFeatures
          ? LPContentScriptFeatures.g_infield_multidevice_paywall_tracking
          : reduxApp.getState().settings.features.infield_multidevice_paywall_tracking;
      }
    }),
    g_local_accts_version: new s(i, { include: ["vault", "extensionDropdown"], sync: !0 }),
    g_local_key: new s(i),
    g_pendings: new s(r, { include: "vault" }),
    g_prefoverrides: new s(r),
    gRecovery: new s(i),
    g_premium_exp: new s(r, {
      sourceFunction: function () {
        return "undefined" != typeof g_premium_exp ? g_premium_exp : reduxApp.getState().encryptedVaultDataSource.premiumExp;
      }
    }),
    g_is_premium_trial: new s(r),
    g_product_price: new s(a),
    g_local_currency: new s(i),
    g_premium_trial_exp_days: new s(a),
    g_hasplugin: new s(o),
    g_2fa_inprocess: new s(o, { include: "vault" }),
    g_is_legacy_premium: new s(a, { sync: !0 }),
    g_is_families_trial_started: new s(a, { sync: !0 }),
    g_predates_families: new s(a, { sync: !0 }),
    g_seen_vault_post_families: new s(a, { sync: !0 }),
    g_prompts: new s(r),
    g_securenotes: new s(r, { include: ["vault", "extensionDropdown", "note", "vaultItemSelect"] }),
    g_shares: new s(r),
    g_showcredmon: new s(o, { include: "vault", sync: !0 }),
    g_sites: new s(r, { include: ["vault", "extensionDropdown", "site", "note", "formFill", "contentScriptSite"] }),
    g_pending_shares: new s(r, { include: ["vault"] }),
    g_note_templates: new s(r, { include: ["vault", "note", "addItem", "extensionDropdown"] }),
    g_language: new s(i),
    g_uid: new s(a),
    g_username: new s(i),
    g_username_hash: new s(i, { include: "vault" }),
    g_new_settings_enabled: new s(o, {
      include: "vault",
      sourceFunction: function () {
        return "undefined" != typeof LPContentScriptFeatures
          ? LPContentScriptFeatures.g_new_settings_enabled
          : reduxApp.getState().user.newSettingsEnabled;
      }
    }),
    g_nofolder_feature_enabled: new s(o, {
      include: [
        "vault",
        "preferences",
        "extensionDropdown",
        "contentScript",
        "siteDialog",
        "site",
        "note",
        "formFill",
        "contentScriptSite"
      ],
      sourceFunction: function () {
        return "undefined" != typeof reduxApp
          ? reduxApp.getState().settings.features.no_auto_folder
          : "undefined" != typeof g_nofolder_feature_enabled && g_nofolder_feature_enabled;
      }
    }),
    g_basicauth_feature_enabled: new s(o, {
      include: [
        "vault",
        "preferences",
        "extensionDropdown",
        "contentScript",
        "siteDialog",
        "site",
        "note",
        "formFill",
        "contentScriptSite"
      ],
      sourceFunction: function () {
        return "undefined" != typeof reduxApp
          ? reduxApp.getState().settings.features.basic_auth
          : "undefined" != typeof g_basicauth_feature_enabled && g_basicauth_feature_enabled;
      }
    }),
    g_family_shared_folders_enabled: new s(o, { include: "vault" }),
    lp_attaches: new s(r, {
      include: ["vault", "note"],
      sourceFunction: function () {
        return "undefined" != typeof lp_attaches ? lp_attaches : reduxApp.getState().encryptedVaultDataSource.attachments;
      }
    }),
    lploggedin: new s(o, { sync: !0 }),
    loginCheckFinished: new s(o, { sync: !0 }),
    lpversion: new s(i, { include: "vault" }),
    rsaprivatekeyhex: new s(i, {
      include: "vault",
      write: !0,
      sourceFunction: function () {
        return lp_rsaprivatekeyhex;
      }
    }),
    siteCats: new s(r, { include: ["vault", "site"] }),
    LPContentScriptFeatures: new s(r, {
      sourceFunction: function () {
        var e;
        return "undefined" != typeof LPContentScriptFeatures
          ? LPContentScriptFeatures
          : ((e = reduxApp.getFeatureFlags()), "function" == typeof isDogfood && (e.isDogfood = isDogfood()), e);
      }
    }),
    g_bigsquareicons: new s(r, { include: ["vault"] }),
    g_isie: new s(o),
    g_isedge: new s(o, { include: ["note", "extensionDropdown", "contentScript"] }),
    RecordTypeConfig: new s(r, { include: ["vault", "note", "site", "addItem", "extensionDropdown"] }),
    addeditformfill: new s(n),
    addEmptyGroup: new s(n),
    addEmptyGroups: new s(n),
    LPServer: { ajax: new s(n), xmlRequest: new s(n), textRequest: new s(n), jsonRequest: new s(n) },
    LPRavenTransport: new s(n),
    BackgroundServer: {
      emergencyAccess: {
        acceptOffer: new s(n),
        addRecipient: new s(n),
        declineOffer: new s(n),
        denyAccess: new s(n),
        getRecipientInfo: new s(n),
        getSharerInfo: new s(n),
        removeRecipient: new s(n),
        requestAccess: new s(n),
        unlinkAccount: new s(n),
        updateRecipient: new s(n),
        updateShareeKey: new s(n)
      },
      identities: { add: new s(n), remove: new s(n), update: new s(n) },
      vault: {
        history: { revertPasswordChange: new s(n), getPasswordHistory: new s(n), getUsernameHistory: new s(n), getNoteHistory: new s(n) }
      },
      sharing: {
        individual: {
          shareItems: new s(n),
          unshareItem: new s(n),
          acceptShare: new s(n),
          rejectShare: new s(n),
          inviteFriends: new s(n),
          getSentShareData: new s(n),
          getReceivedShareData: new s(n)
        },
        folder: {
          getFolders: new s(n),
          getPublicKeys: new s(n),
          create: new s(n),
          rename: new s(n),
          remove: new s(n),
          accept: new s(n),
          reject: new s(n),
          addMembers: new s(n),
          getMembers: new s(n),
          removeMember: new s(n),
          reinviteMember: new s(n),
          updateMemberPermissions: new s(n),
          getRestrictions: new s(n),
          updateRestrictions: new s(n),
          startDownloading: new s(n),
          stopDownloading: new s(n),
          restoreDeleted: new s(n),
          purgeDeleted: new s(n),
          convertToEnterprise: new s(n),
          convertToLegacy: new s(n)
        }
      },
      sitesAndNotes: { saveCustomNoteTemplate: new s(n), deleteCustomNoteTemplate: new s(n) },
      transact: { sendReminder: new s(n), sendMobileDownload: new s(n) },
      families: { getMembers: new s(n), existingUserTrial: new s(n), getInvitations: new s(n) },
      licensing: { getCompanyLicensing: new s(n), isCompanyExpired: new s(n), setCompanyExpired: new s(n) },
      invitation: { acceptInvitation: new s(n), dismissInvitation: new s(n), getMembers: new s(n) },
      aurora: { getOneClickSignupUrls: new s(n) }
    },
    changePassword: new s(n),
    deleteAid: new s(n),
    deleteformfill: new s(n),
    deleteGroup: new s(n),
    editAid: new s(n),
    fastEncryptAttachments: new s(n),
    generateSharingKeysFromVault: new s(n),
    generate_key: new s(n),
    get_securityChallengeScore: new s(n),
    gotourl: new s(n),
    launch: new s(n),
    launchApp: new s(n),
    loggedOut: new s(n),
    loglogin: new s(n),
    make_lp_hash_iterations: new s(n),
    make_lp_key_hash: new s(n),
    make_lp_key_iterations: new s(n),
    moveIntoSharedFolder: new s(n),
    moveSelectedToGroup: new s(n),
    openAllSites: new s(n),
    openexport: new s(n),
    openentconsole: new s(n),
    openOnNewTab: new s(n),
    openFamilyConsole: new s(n),
    openPremiumPaymentPage: new s(n),
    openEnterprisePaymentPage: new s(n),
    openTeamsPaymentPage: new s(n),
    openFamiliesPaymentPage: new s(n),
    openPricingPage: new s(n),
    openfavorites: new s(n),
    openimport: new s(n),
    openseccheck: new s(n),
    openURL: new s(n),
    uploadSharingKeysWeb: new s(n),
    processCS: new s(n),
    storeAccountLinkToken: new s(n),
    setPasswordlessData: new s(n),
    removePasswordlessData: new s(n),
    startPasswordlessEnrollmentSetup: new s(n),
    removeAccountLinkToken: new s(n),
    refreshGroupNames: new s(n),
    refreshsites: new s(n),
    renameGroup: new s(n),
    saveFields: new s(n),
    saveSite: new s(n),
    singlefactor_reprompt: new s(n),
    switch_identity: new s(n),
    unlock_plug2web: new s(n),
    install_binary: new s(n),
    request_native_messaging: new s(n),
    singlefactorWinbioSet: new s(n),
    increment_local_accts_version: new s(n),
    AES: { bin2hex: new s(t), Decrypt: new s(t), Encrypt: new s(t), hex2bin: new s(t), hex2url: new s(t), url2hex: new s(t) },
    ab2bin: new s(t),
    bin2ab: new s(t),
    reorderOnURL: new s(t),
    can_copy_to_clipboard: new s(t),
    canLaunchApplication: new s(t),
    check_filename_badchars: new s(t),
    crypto_btoa: new s(t),
    db_prepend: new s(t),
    dec: new s(t),
    enc: new s(t),
    enccbc: new s(t),
    encode_private_key: new s(t),
    encode_public_key: new s(t),
    fix_username: new s(t),
    get_last_reprompt_time: new s(t),
    get_mimetype_from_filename: new s(t),
    get_personal_linked: new s(t),
    get_personal_linked_needs_verification: new s(t),
    get_show_expired_subscription_messaging: new s(t),
    isAllowedFileExtension: new s(t),
    getAllowedFileExtensions: new s(t),
    getInvalidFileExtensionMessageStrings: new s(t),
    removeLinkedAccount: new s(t),
    get_random_password: new s(t),
    getbigicon: new s(t),
    geticonurlfromrecord: new s(t),
    gs: new s(t),
    have_binary: new s(t),
    have_binary_function: new s(t),
    isOffline: new s(t),
    localStorage_getItem: new s(t),
    localStorage_setItem: new s(t),
    lp_gettld_url: new s(t),
    lpCreatePass: new s(t),
    lpdec: new s(t),
    lpenc: new s(t),
    lpevent: new s(t),
    lpmdec: new s(t),
    lpmenc: new s(t),
    parse_public_key: new s(t),
    parse_private_key: new s(t),
    parsemobile: new s(t),
    punycode: { URLToASCII: new s(t), URLToUnicode: new s(t) },
    RSAKey: new s(e.TYPE_CONSTRUCTOR),
    set_last_reprompt_time: new s(t),
    SHA256: new s(t),
    hostof: new s(t),
    StringUtils: { translate: new s(t) },
    Preferences: { get: new s(t), set: new s(t, { sendIndirect: !0 }) },
    rsa_encrypt_privatekey: new s(t),
    sendLpImprove: new s(n),
    sendLpImproveCallback: new s(n),
    Provisioning: {
      provisioning: {
        checkUserState: new s(n, { include: "provisioning" }),
        sendApiCalls: new s(n, { include: "provisioning" }),
        getLocalKey: new s(n, { include: "provisioning" })
      }
    },
    ExtensionPreferences: {
      getConst: new s(n),
      getDefault: new s(n),
      read: new s(n),
      write: new s(n),
      getUnavailablePreferences: new s(n)
    },
    LPPlatform: {
      getUILanguage: new s(t),
      fill: new s(n),
      downloadAttachment: new s(n),
      copyToClipboard: new s(t),
      setProductPriceUpdatesObserver: new s(n),
      isSafariAppStore: new s(n)
    },
    get_method_async: new s(n),
    MigrationBackground: {
      getShouldStartMigration: new s(n),
      setShouldStartMigration: new s(n),
      getBlobVersion: new s(n),
      getIdentities: new s(n),
      getLinkedUsername: new s(n),
      getLinkedBlobVersion: new s(n),
      subscribeToState: new s(n),
      subscribeToStateOnce: new s(n),
      wasMigration: new s(n),
      publishState: new s(n),
      saveBlobVersion: new s(n),
      saveLinkedBlobVersion: new s(n),
      sendSegmentEvent: new s(n),
      shouldShowMigrationNotification: new s(t),
      hasFormFills: new s(n),
      postponeMigration: new s(n),
      setMigrationState: new s(n)
    },
    FormfillMigrationBackground: {
      isEnabled: new s(n),
      getFormfills: new s(n),
      getLinkedFormfills: new s(n),
      createCustomNoteType: new s(n),
      saveNote: new s(n)
    },
    Feature: { isEnabled: new s(n) },
    Policies: {
      logNameEnabled: new s(n, {
        include: [
          "vault",
          "preferences",
          "extensionDropdown",
          "contentScript",
          "siteDialog",
          "site",
          "note",
          "formFill",
          "contentScriptSite"
        ],
        appendAdditionalArguments: !0
      }),
      logUserNameEnabled: new s(n, {
        include: [
          "vault",
          "preferences",
          "extensionDropdown",
          "contentScript",
          "siteDialog",
          "site",
          "note",
          "formFill",
          "contentScriptSite"
        ],
        appendAdditionalArguments: !0
      }),
      logUrlEnabled: new s(n, {
        include: [
          "vault",
          "preferences",
          "extensionDropdown",
          "contentScript",
          "siteDialog",
          "site",
          "note",
          "formFill",
          "contentScriptSite"
        ],
        appendAdditionalArguments: !0
      }),
      getSaveSiteToPersonal: new s(n, {
        include: [
          "vault",
          "preferences",
          "extensionDropdown",
          "contentScript",
          "siteDialog",
          "site",
          "note",
          "formFill",
          "contentScriptSite"
        ],
        appendAdditionalArguments: !0
      }),
      getAccountSelectionBasedOnEmail: new s(n, {
        include: [
          "vault",
          "preferences",
          "extensionDropdown",
          "contentScript",
          "siteDialog",
          "site",
          "note",
          "formFill",
          "contentScriptSite"
        ],
        appendAdditionalArguments: !0
      }),
      showSecureNotes: new s(n, {
        include: [
          "vault",
          "preferences",
          "extensionDropdown",
          "contentScript",
          "siteDialog",
          "site",
          "note",
          "formFill",
          "contentScriptSite"
        ],
        appendAdditionalArguments: !0
      })
    },
    FederatedLogin: {
      isFederated: new s(n, {
        include: [
          "login",
          "acctsiframe",
          "update_phone",
          "misc_challenge",
          "enterprise_options",
          "delete_account",
          "otp",
          "misc_login",
          "enterprise_users"
        ]
      }),
      getPassword: new s(n, {
        include: [
          "acctsiframe",
          "update_phone",
          "misc_challenge",
          "enterprise_options",
          "delete_account",
          "otp",
          "misc_login",
          "enterprise_users"
        ]
      })
    },
    getVersion: new s(n),
    LPPartner: { getPartnerInfo: new s(n) },
    onSettingsIframeClose: new s(n, { include: ["vault"], appendAdditionalArguments: !0 }),
    closeSettingsIframe: new s(n, { include: ["acctsiframe", "contentScript", "vault"], appendAdditionalArguments: !0 }),
    GenPassHistory: { add: new s(n), clear: new s(n), getWithDate: new s(n), getWithReadableDate: new s(n), getWithoutDate: new s(n) },
    FieldOverrides: { getAll: new s(n), getSite: new s(n) },
    switchLanguage: new s(n),
    saveUserLanguage: new s(n),
    setRestriction: new s(n),
    setLanguageNotificationDismissal: new s(n),
    setPrimaryDevice: new s(n),
    setDisplayRetrialOffer: new s(n),
    getRetrialOfferDeepLinkEnabled: new s(n),
    hideBillingAddressNotification: new s(n),
    Recovery: { getOtpHash: new s(n) },
    g_pendo_jwt_token: new s(i),
    g_pendo_signing_key_name: new s(i)
  };
})(Interfaces)),
  (function (e) {
    var n = Interfaces.TYPE_FUNCTION,
      t = Interfaces.TYPE_SYNC_FUNCTION,
      i = Interfaces.TYPE_STRING,
      o = Interfaces.TYPE_NUMBER,
      r = Interfaces.TYPE_BOOLEAN,
      a = Interfaces.TYPE_OBJECT,
      s = Interfaces.Definition,
      a = {
        g_is_company_owner: new s(r),
        g_enterprisemodel: new s(o),
        g_enterpriseoffering: new s(o),
        countryfromip: new s(i),
        g_is_federated_user: new s(r, {
          sourceFunction: function () {
            return reduxApp.isCurrentUserFederated();
          }
        }),
        g_product_price: new s(o),
        g_local_currency: new s(i),
        g_premium_trial_exp_days: new s(o),
        g_company_trial_exp_days: new s(o),
        g_company_license_exp_days: new s(o),
        g_show_billing_address_notification: new s(r),
        g_device_limit_releaseTS: new s(o),
        g_show_device_limit_notification: new s(r, { write: !0, sync: !0 }),
        g_is_company_subscription_expired: new s(r, { sync: !0 }),
        g_company_renewalstatus: new s(i),
        g_show_original_language_changed_notification: new s(r),
        g_original_language: new s(i),
        g_loggedinoffline: new s(i, { include: ["vault", "site", "preferences"] }),
        g_loggedinonline: new s(i, { include: ["vault", "preferences"] }),
        g_badgedata: new s(a, { include: ["login", "extensionDropdown", "vault"] }),
        g_flags: new s(a, { include: "preferences" }),
        extensionPreferences: new s(a, {
          sync: !0,
          sourceFunction: function () {
            var e = reduxApp.getState().settings,
              n = e.extensionPreferences,
              e = e.language;
            return Object.assign({}, n, { language: e });
          }
        }),
        g_hideappearancebox: new s(r, { include: "preferences" }),
        g_2fa_inprocess: new s(r, { include: "vault" }),
        g_hidelogoffprefs: new s(r, { include: "preferences" }),
        g_hidenotes: new s(r, { include: "preferences" }),
        g_hiderecentlyusedlistsize: new s(r, { include: "preferences" }),
        g_hidesaedhotkey: new s(r, { include: "preferences" }),
        g_hidesearch: new s(r, { include: "preferences" }),
        g_hidevault: new s(r, { include: "preferences" }),
        g_hideshowvault: new s(r, { include: "preferences" }),
        g_is_linux: new s(r, { include: "preferences" }),
        g_is_win: new s(r, { include: ["vault", "preferences"] }),
        g_is_mac: new s(r, { include: "preferences" }),
        g_issafari_appext: new s(r, { include: "preferences" }),
        g_langs: new s(a, { include: "preferences" }),
        g_basicauth_feature_enabled: new s(a, {
          include: [
            "vault",
            "preferences",
            "extensionDropdown",
            "contentScript",
            "siteDialog",
            "site",
            "note",
            "formFill",
            "contentScriptSite",
            "contentScriptDialog"
          ]
        }),
        g_manual_login: new s(r, { include: "login", write: !0 }),
        g_master_password_saved: new s(r, { include: "preferences" }),
        g_disableautofill: new s(r, {
          include: "preferences",
          sourceFunction: function () {
            var e = reduxApp.getState().settings.enterpriseOverridePreferences.automaticallyFill;
            return void 0 !== e && !e;
          }
        }),
        g_password_strength_hardening_enabled: new s(r, {
          sourceFunction: function () {
            return reduxApp.getState().settings.features.password_strength_hardening;
          }
        }),
        g_nopoll: new s(r, { include: "preferences" }),
        g_notification_data: new s(a, { include: ["login", "extensionDropdown", "vault"] }),
        g_notification_type: new s(a, { include: ["login", "extensionDropdown"] }),
        g_offer_popupfill: new s(r, { include: "preferences" }),
        g_shownewloginoption: new s(r, { include: "preferences" }),
        lp_phpsessid: new s(i),
        lppassusernamehash: new s(r, { include: "preferences" }),
        remembersignons: new s(r, { include: "login" }),
        clearRecentTime: new s(r, { include: "extensionDropdown", sourceFunction: "getClearRecentTime" }),
        g_sites_tld: new s(r, {
          include: ["extensionDropdown", "contentScript"],
          sourceFunction: function () {
            return getmatchingsites(!1, !0, !1);
          }
        }),
        g_can_clear_clipboard: new s(r, { sourceFunction: "can_clear_clipboard" }),
        g_can_copy_to_clipboard: new s(r, { sourceFunction: "can_copy_to_clipboard" }),
        g_is_chrome_portable: new s(r),
        g_is_restricted: new s(r),
        g_has_credit_monitoring_premium: new s(r),
        g_primary_device_switches_left: new s(o),
        g_display_premium_retrial_offer: new s(r),
        g_user_debug_enabled: new s(r, { sourceFunction: "is_user_debug_enabled" }),
        g_have_binary: new s(r, { sourceFunction: "have_binary" }),
        extensionBaseURL: new s(i, {
          include: "contentScript",
          sourceFunction: function () {
            return getchromeurl("", !0);
          }
        }),
        makeLoginCheck: new s(n),
        create_account_safe: new s(n),
        clear_badge: new s(t, { sendIndirect: !0 }),
        clear_badge_text: new s(n),
        set_badge_text: new s(n),
        clearCache: new s(n),
        clearforms: new s(n),
        clearrecent: new s(n),
        LPContextMenus: { createContextMenus: new s(n) },
        DeleteOTP: new s(n),
        disableallalerts: new s(n),
        disablepasswordmanager: new s(n),
        disablesitealert: new s(n),
        disableDropDownNotification: new s(n),
        formfillexport: new s(n),
        getConsoleLogs: new s(n),
        get_saved_logins: new s(n),
        delete_saved_login: new s(n),
        generateSharingKeys: new s(n),
        get_selected_tab: new s(n),
        get_selected_tab_data_no_extension: new s(n),
        loggedOut: new s(n),
        LP_do_login: new s(n),
        setPasswordlessData: new s(n),
        removePasswordlessData: new s(n),
        startPasswordlessEnrollmentSetup: new s(n),
        lpevent: new s(n),
        setCompanyExpired: new s(n),
        switchLanguage: new s(n),
        saveUserLanguage: new s(n),
        setDeviceLimitNotification: new s(n),
        setLanguageNotificationDismissal: new s(n),
        setPrimaryDevice: new s(n),
        setDisplayRetrialOffer: new s(n),
        getRetrialOfferDeepLinkEnabled: new s(n),
        setWeakPasswordBadge: new s(n),
        setSecurityScoreAlertBadge: new s(n),
        checkDuplicatePasswordAndSetBadge: new s(n),
        checkShouldShowBillingAddressNotification: new s(n),
        hideBillingAddressNotification: new s(n),
        LPData: { getData: new s(n), setValue: new s(n) },
        LPPlatform: {
          getCurrentTabDetails: new s(n),
          getFavicon: new s(n),
          openTabDialog: new s(n),
          openSame: new s(n),
          navigateTab: new s(n),
          openPopoverDialog: new s(n),
          isMac: new s(t),
          isWin: new s(t),
          postLegacyMessage: new s(n, { appendAdditionalArguments: !0, include: ["contentScript", "infieldPopup"] }),
          connectLegacyMessaging: new s(n, { appendAdditionalArguments: !0, include: "contentScript" }),
          openAcctsIframe: new s(n, { appendAdditionalArguments: !0, include: "vault" }),
          makeNativeRequest: new s(n),
          isSafariAppExtensionEnabled: new s(n),
          isSelfDistributed: new s(n),
          doAjax: new s(n),
          isSafariAppStore: new s(n),
          purchasePremium: new s(n),
          fetchProduct: new s(n),
          updateProductPrice: new s(n),
          setProductPriceUpdatesObserver: new s(n),
          registerProduct: new s(n),
          openFileDialog: new s(n),
          saveFile: new s(n),
          openNativeFileSelector: new s(n),
          copyToClipboard: new s(n),
          copyLastCopiedString: new s(n),
          writeAndOpenAttachmentFile: new s(n),
          deleteAccount: new s(n)
        },
        reduxApp: {
          trackPasswordEntry: new s(n),
          setMultifactorEnabledState: new s(n),
          trustedDeviceUpdated: new s(n),
          setDisablePasswordAlerts: new s(n),
          updateTrustedDeviceList: new s(n),
          closePasswordChangedSuccessVaultBanner: new s(n)
        },
        openabout: new s(n),
        deletesavedpw: new s(n),
        openpricing: new s(n),
        openTranslationsReadMore: new s(n),
        openpremium: new s(n),
        openenterprisepayment: new s(n),
        openteamspayment: new s(n),
        openfamiliespayment: new s(n),
        opendebugtab: new s(n),
        openentconsole: new s(n),
        openFamilyConsole: new s(n),
        passwordValidator: new s(n),
        openexport: new s(n),
        openfavorites: new s(n),
        openhelp: new s(n),
        openimport: new s(n),
        openlastpassexport: new s(n),
        openmyaccount: new s(n),
        openprefs: new s(n),
        openprint: new s(n),
        openseccheck: new s(n),
        opensessions: new s(n),
        openURL: new s(n),
        openvault: new s(n),
        saveall: new s(n),
        start_trial: new s(n),
        unprotect_data: new s(n),
        wlanexport: new s(n),
        saveSiteFromSubmit: new s(n),
        get_selected_tab_data: new s(n),
        fillGeneratedPassword: new s(n),
        saveAllSite: new s(n),
        session_storage_get_item: new s(n),
        session_storage_set_item: new s(n),
        repromptSuccess: new s(n),
        open_login: new s(n),
        fillaid: new s(n),
        fillform: new s(n),
        fillitem: new s(n),
        fillNoteFromDropdown: new s(n),
        setup_hotkeys: new s(n),
        getShareType: new s(n),
        IntroTutorial: {
          getState: new s(n),
          setState: new s(n),
          resetState: new s(n),
          completeTutorial: new s(n),
          isOnStateDomain: new s(n)
        },
        sendLpImprove: new s(n),
        handleNeverURL: new s(n),
        runChallenge3: new s(n),
        can_clear_clipboard: new s(t),
        fix_username: new s(t),
        get_lplanguage: new s(t),
        getClearRecentTime: new s(t, { include: "extensionDropdown" }),
        getmatchingsites: new s(t),
        gettaburl: new s(t),
        gs: new s(t),
        have_binary: new s(t),
        have_binary_function: new s(t),
        include_language: new s(t),
        is_chrome_portable: new s(t),
        is_opera_chromium: new s(t),
        is_firefox_webext: new s(t),
        is_user_debug_enabled: new s(t),
        setcurrenttabid: new s(t, { sendIndirect: !0 }),
        setcurrenturl: new s(t, { sendIndirect: !0 }),
        get_method_async: new s(n),
        updateFieldsFromSubmit: new s(n, { include: "contentScriptSiteDialog" }),
        LPIcons: { get: new s(n) },
        LPTabState: {
          getSiteNotification: new s(n, { include: "contentScript", appendAdditionalArguments: !0 }),
          processTextSubmit: new s(n, { include: "contentScript", appendAdditionalArguments: !0 }),
          processPasswordSubmit: new s(n, { include: "contentScript", appendAdditionalArguments: !0 }),
          clear: new s(n, { include: ["contentScript", "contentScriptSite"], appendAdditionalArguments: !0 }),
          getState: new s(n, { include: "contentScript", appendAdditionalArguments: !0 }),
          setLoginRequestRecentlyResolved: new s(n, { include: "contentScript", appendAdditionalArguments: !0 }),
          setCopiedGeneratedPassword: new s(n, { include: ["generatePassword", "infieldPopup"] }),
          getCopiedGeneratedPassword: new s(n, { include: "contentScript" }),
          clearFillSource: new s(n),
          setLastFillSource: new s(n),
          getLastFillSource: new s(n),
          getWebRequestSiteNotificationData: new s(n)
        },
        SiteLaunchObserver: {
          startFillTracking: new s(n, { include: "contentScript", appendAdditionalArguments: !0 }),
          isFeatureEnabled: new s(n, { include: "contentScript", appendAdditionalArguments: !0 }),
          formSubmitted: new s(n, { include: "contentScript", appendAdditionalArguments: !0 }),
          initiateFormExists: new s(n, { include: "contentScript", appendAdditionalArguments: !0 }),
          hasFormWithPassword: new s(n, { include: "contentScript", appendAdditionalArguments: !0 })
        },
        showModalOverlay: new s(n),
        removeModalOverlay: new s(n),
        userHasAccount: new s(n),
        hideYoureAlmostDoneMarketingOverlay: new s(n),
        InfieldCommands: {
          getPopupFillData: new s(n, { include: ["infieldPopup"], appendAdditionalArguments: !0 }),
          setActiveFormData: new s(n, { include: ["contentScript"], appendAdditionalArguments: !0 }),
          copyPassword: new s(n, { include: ["infieldPopup"], appendAdditionalArguments: !0 }),
          copyUserName: new s(n, { include: ["infieldPopup"], appendAdditionalArguments: !0 }),
          copyUrl: new s(n, { include: ["infieldPopup"], appendAdditionalArguments: !0 }),
          copyProp: new s(n, { include: ["infieldPopup"], appendAdditionalArguments: !0 }),
          copyTotp: new s(n, { include: ["infieldPopup"], appendAdditionalArguments: !0 }),
          getGeneratePasswordPrefs: new s(n, { include: ["infieldPopup"], appendAdditionalArguments: !0 }),
          setGeneratePasswordPrefs: new s(n, { include: ["infieldPopup"], appendAdditionalArguments: !0 }),
          searchVault: new s(n, { include: ["infieldPopup"], appendAdditionalArguments: !0 }),
          searchVaultAll: new s(n, { include: ["infieldPopup"], appendAdditionalArguments: !0 }),
          fillUserData: new s(n, { include: ["infieldPopup"], appendAdditionalArguments: !0 }),
          fillGeneratedPassword: new s(n, { include: ["infieldPopup"], appendAdditionalArguments: !0 }),
          editFormFill: new s(n, { include: ["infieldPopup"], appendAdditionalArguments: !0 }),
          fillForm: new s(n, { include: ["infieldPopup"], appendAdditionalArguments: !0 }),
          editSite: new s(n, { include: ["infieldPopup"], appendAdditionalArguments: !0 }),
          canCopy: new s(n, { include: ["infieldPopup"], appendAdditionalArguments: !0 })
        },
        basicAuth: {
          isBasicAuth: new s(n, { include: ["contentScript"], appendAdditionalArguments: !0 }),
          setAuthCredential: new s(n, { include: ["contentScript"], appendAdditionalArguments: !0 }),
          removeAuth: new s(n, { include: ["contentScript"], appendAdditionalArguments: !0 }),
          cancelBasicAuth: new s(n, { include: ["contentScript"], appendAdditionalArguments: !0 }),
          hasFeature: new s(n, { include: ["contentScript"], appendAdditionalArguments: !0 }),
          closeNotification: new s(n, { include: ["contentScript"], appendAdditionalArguments: !0 }),
          isNotificationClosed: new s(n, { include: ["contentScript"], appendAdditionalArguments: !0 })
        },
        autoChangePassword: new s(n),
        LPFeatures: {
          getSaveSiteToPersonal: new s(n, {
            include: [
              "vault",
              "preferences",
              "extensionDropdown",
              "contentScript",
              "siteDialog",
              "site",
              "note",
              "formFill",
              "contentScriptSite"
            ]
          })
        },
        Policies: {
          logNameEnabled: new s(n, {
            include: [
              "vault",
              "preferences",
              "extensionDropdown",
              "contentScript",
              "siteDialog",
              "site",
              "note",
              "formFill",
              "contentScriptSite"
            ],
            appendAdditionalArguments: !0
          }),
          logUserNameEnabled: new s(n, {
            include: [
              "vault",
              "preferences",
              "extensionDropdown",
              "contentScript",
              "siteDialog",
              "site",
              "note",
              "formFill",
              "contentScriptSite"
            ],
            appendAdditionalArguments: !0
          }),
          logUrlEnabled: new s(n, {
            include: [
              "vault",
              "preferences",
              "extensionDropdown",
              "contentScript",
              "siteDialog",
              "site",
              "note",
              "formFill",
              "contentScriptSite"
            ],
            appendAdditionalArguments: !0
          }),
          getAccountSelectionBasedOnEmail: new s(n, {
            include: [
              "vault",
              "preferences",
              "extensionDropdown",
              "contentScript",
              "siteDialog",
              "site",
              "note",
              "formFill",
              "contentScriptSite"
            ],
            appendAdditionalArguments: !0
          }),
          getSaveSiteToPersonal: new s(n, {
            include: [
              "vault",
              "preferences",
              "extensionDropdown",
              "contentScript",
              "siteDialog",
              "site",
              "note",
              "formFill",
              "contentScriptSiteDialog",
              "contentScriptSite",
              "contentScriptSite"
            ],
            appendAdditionalArguments: !0
          })
        },
        FederatedLogin: {
          login: new s(n, { include: ["login"] }),
          validateK1Encryption: new s(n, { include: "contentScript", appendAdditionalArguments: !0 })
        },
        getLinkedAccount: new s(n, {
          include: [
            "vault",
            "preferences",
            "extensionDropdown",
            "contentScript",
            "siteDialog",
            "site",
            "note",
            "formFill",
            "contentScriptSite"
          ],
          appendAdditionalArguments: !0
        }),
        consent: { getCreateAccountDetails: new s(n, {}) },
        LPModule: {
          callService: new s(n, { includes: ["contentScript", "extensionDropdown", "vault"], appendAdditionalArguments: !0 }),
          callRepository: new s(n, { includes: ["contentScript", "extensionDropdown", "vault"], appendAdditionalArguments: !0 })
        },
        MPWNoNag: new s(n),
        addDomainToMPWNever: new s(n),
        sendLpEvent: new s(n),
        get_method: new s(n),
        mv3_extension_used_to_get_key: new s(r, { includes: ["vault"], sync: !0 })
      };
    Interfaces.extend(e, a);
  })(Interfaces.BackgroundInterface);
