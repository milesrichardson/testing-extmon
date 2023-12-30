Okta.Constants = (function () {
  function E(e, E, _, t) {
    ((t = t || {}).key = _), (t.type = E), (e.Storage[_] = t);
  }
  var e = Okta._okta.each,
    _ = {
      QuickAccessTabIdPrefix: "tab_quick_access_apps_",
      ModalCloseAccessKey: "x",
      ModalAppNameMaxLen: 100,
      ModalUsernameMaxLen: 100,
      PendoEventTrackUrl: "https://app.pendo.io/data/track",
      PendoEventTrackUrlDebug: "https://rain.okta1.com:1802/data/track",
      StoreUrls: {
        chrome: "https://chrome.google.com/webstore/detail/okta-browser-plugin/glnpjglilkicbckjpbgcfkogebgllemb",
        firefox: "https://addons.mozilla.org/firefox/addon/okta-browser-plugin/",
        safari: "https://apps.apple.com/app/okta-extension-app/id1439967473",
        "edge-chromium": "https://microsoftedge.microsoft.com/addons/detail/okta-browser-plugin/ncoafaeidnkeafiehpkfoeklhajkpgij"
      },
      PluginSurveyPath: "/plugin/okta-extension-feedback",
      BrowserType: {
        CHROME: "chrome",
        FIREFOX: "firefox",
        EDGE_CHROMIUM: "edge-chromium",
        SAFARI: "safari",
        SAFARI_WEBEXT: "safari-webext",
        OKTA_MOBILE: "OktaMobile"
      },
      Banners: { RATINGS: "ratings", NEWTAB: "newtab" },
      LogoOptions: { ICON_MIN_SIZE: 16, ICON_MAX_SIZE: 300, ICON_DATA_MAX_SIZE: 1048576, ICON_DEFAULT_SIZE: 74 },
      AuthOptions: {
        PLUGIN_CLIENT_ID: "okta.ee074f99-1b5b-513e-8ea6-f8beeab8dbb9",
        DASHBOARD_CLIENT_ID: "okta.2b1959c8-bcc0-56eb-a589-cfcfb7422f26",
        SCOPES: [
          "openid",
          "profile",
          "email",
          "okta.users.read.self",
          "okta.internal.enduser.read",
          "okta.internal.enduser.manage",
          "okta.enduser.dashboard.read",
          "okta.enduser.dashboard.manage"
        ],
        OKTA_PERSONAL_ADDITIONAL_SCOPES: [
          "groups",
          "okta.personal.manage",
          "okta.personal.read",
          "okta.personal.authenticator.manage",
          "okta.personal.authenticator.read"
        ],
        DEFAULT_MAX_CLOCK_SKEW: 300,
        PKCE: { DEFAULT_CODE_CHALLENGE_METHOD: "S256", MIN_VERIFIER_LENGTH: 43, MAX_VERIFIER_LENGTH: 128 },
        TIMEOUT: 6e4
      },
      CookieOptions: { SID_COOKIE_NAME: "sid", DT_COOKIE_NAME: "DT", IDX_COOKIE_NAME: "idx" },
      Time: { OneDay: 864e5 },
      MinFirstPartyAppVersion: "5.43.0",
      Storage: {},
      StorageOktaAccountAllowListKey: String.fromCharCode.apply(
        null,
        [79, 75, 84, 65, 95, 65, 67, 67, 79, 85, 78, 84, 95, 87, 72, 73, 84, 69, 95, 76, 73, 83, 84]
      ),
      InlineEvents: {
        IFRAME_EVENT: "okta-iframe",
        CONTENT_EVENT: "okta-iframe-content",
        ACTIONS: {
          SET_HEIGHT: "setHeight",
          FILL_NEW_PWD: "fillNewPwd",
          FILL_NEW_PWD_DONE: "fillNewPwdDone",
          FILL_NEW_CREDS: "fillNewCreds",
          SHOW_CONTENT: "showContent",
          REFRESH: "refresh",
          CLOSE_ALL_VIEWS: "closeAllViews"
        }
      },
      PopoverEvents: { GEN_PWD_MODULE: "popover-gen-pwd", ACTIONS: { PWD_EXIST_CHECK: "passwordExistCheck", FILL_NEW_PWD: "fillNewPwd" } },
      ModalEvents: { IFRAME_MODULE: "modal-iframe", ACTIONS: { PROMPT_AUTOFILL: "promptAutoFill", AUTOFILL: "autoFill" } },
      SamlTesterEvents: {
        SAML_TESTER_MODULE: "saml-tester",
        ACTIONS: {
          GET_STATUS: "getStatus",
          RUN_TEST_CASE: "runTestCase",
          GET_TEST_RESULTS: "getTestResults",
          CLEAR_TEST_RESULTS: "clearTestResults",
          PROCESS_USER_INPUT: "processUserInput",
          GET_ALLOWED_INCOGNITO_ACCESS: "getAllowedIncognitoAccess",
          UPDATE_TEST_RESULTS_SUBSCRIPTION: "updateTestResultsSubscription",
          SIGN_IN_TO_OKTA: "signInToOkta",
          SET_SECURITY_ANSWER: "setSecurityAnswer",
          TEST_RESULTS_UPDATED: "testResultsUpdated"
        }
      },
      SamlTester: { APP_EMBED_LINK_REGEX: "[^/]+/home/([^/]+)/([^/]+)/[^/]+" },
      OnTheFlyAppTemplateName: "template_onthefly",
      ScriptErrorType: { DoAutoLoginOnSignup: "doAutoLoginOnSignup", Unknown: "unknown" },
      OktaOfflineLoginPopupSavePassword: "oktaPopupLoginSavePassword",
      OktaOfflineAutofillFlow: "oktaPopupLogin",
      OktaPersonalOrgIds: ["00o13xfwhqWdGOe7i417", "00o3qqiw0vSCIwu8I0g7"],
      Auth0: {
        TopLevelDomain: "auth0.com",
        POktaIdPDomain: ["trexcloud-id-okta.eu.auth0.com"],
        SignInPathPrefix: "/u/login",
        SignUpPathPrefix: "/u/signup",
        POktaConnection: "okta-personal-social-connection"
      },
      PluginSocialAppID: "fc6496c3-f79b-5588-b02b-f4f7fae6dc08",
      API: { FormCredsPageSize: 30 },
      SignOnModeType: {
        SecurePasswordStore: "SECURE_PASSWORD_STORE",
        BrowserPlugin: "BROWSER_PLUGIN",
        BasicAuth: "BASIC_AUTH",
        AutoLogin: "AUTO_LOGIN"
      }
    };
  return (
    e(
      [
        ["POKTA_INDEX"],
        ["SESSION_COOKIE", { multiAccount: !0 }],
        ["SESSION_CUSTOM_CAN_POST", { def: !0, multiAccount: !0 }],
        ["AUTH_TOKEN", { def: {}, multiAccount: !0 }],
        ["SESSION_COOKIE_BEFORE_CONSENT"],
        ["SESSION_WAITING_FOR_TABS", { def: 0, name: "WaitingForTabs" }],
        ["SESSION_POPUP_VERIFIED", { name: "PopupVerified" }],
        ["POPOVER_OPENED_BY"],
        ["PERSONAL_PIN", { def: null, multiAccount: !0 }],
        ["IS_VAULT_ENROLLED", { def: null, multiAccount: !0 }],
        ["OIN_TEST_RESULTS_STORE", { def: null }],
        ["XSRF_TOKEN", { def: null }]
      ],
      function (e) {
        E(_, "Session", e[0], e[1]);
      }
    ),
    e(
      [
        ["FORM_SITES_NO_PW", { multiAccount: !0 }],
        ["AUTH_SITES", { multiAccount: !0 }],
        ["SOCIAL_SITES", { multiAccount: !0 }],
        ["OKTA_DOMAIN", { multiAccount: !0 }],
        ["TABS", { def: null, multiAccount: !0 }],
        ["MONITORED_SITES", { def: [], multiAccount: !0 }],
        ["ENDUSER_HOME", { def: {}, multiAccount: !0 }],
        ["WORKSPACES", { def: null, multiAccount: !0 }],
        ["NEW_TAB", { def: {}, multiAccount: !0 }],
        ["PLUGIN_SETTINGS", { def: { override: {}, orgSettings: {} }, multiAccount: !0 }],
        ["UI_VERSION", { def: null, name: "UIVersion", multiAccount: !0 }],
        ["SELF_SERVICE_SITES", { multiAccount: !0 }],
        ["LAST_SELF_SERVICE_SITES_CHECK", { multiAccount: !0 }],
        ["MY_PAGES_CACHE", { multiAccount: !0 }],
        ["DATA_VAULT_KEY_PAIR", { multiAccount: !0 }],
        ["VAULT_STATUS", { def: {} }],
        ["DBG_PLUGIN_SETTINGS", { def: { enableOnTheFlyAppAddition: !0, enableStrongPasswordSuggestion: !0 }, name: "DBGPluginSettings" }],
        ["AUTH_STATUS", { def: {} }],
        ["TRACKED_FIRST_TIME_ACTIONS", { def: {} }],
        ["ACK_TIMES", { def: {} }],
        [_.StorageOktaAccountAllowListKey, { def: [], name: "AllowListedOktaAccounts" }],
        ["TRUSTED_OKTA_DOMAIN_LIST", { def: {} }],
        ["IGNORE_LIST", { def: {} }],
        ["SELF_SERVICE_SITES_IGNORE_LIST", { def: {} }],
        ["DOMAINS", { def: {} }],
        ["CONTENT_SCRIPT", { def: null }],
        ["CONTENT_STRINGS", { def: null }],
        ["INJECTION_COUNT", { def: 0 }],
        ["OKTA_EXTENSION_LOGS", { name: "ExtensionLogs", def: { log: [], stopRecording: {} } }],
        ["EXTENSION_LOG_TIMER", { name: "ExtensionLogStartTimer" }],
        ["OKTA_ACCOUNT_UPDATE_IN_PROGRESS", { name: "OktaAccountsUpdateInProgress" }],
        ["DISABLE_ON_THE_FLY_APP_ADDITION"],
        ["DISABLE_GENERATE_PASSWORD"],
        ["ENABLE_SUPPRESS_PASSWORD"],
        ["ENDUSER_HOME_PENDING_CONSENT", { def: {} }],
        ["VERSION"],
        ["LAST_HEALTH_CHECK"],
        ["LAST_PLUGIN_STATE_REFRESH"],
        ["LAST_ERROR"],
        ["LAST_APP_SEARCH_QUERY"],
        ["OKTA_DOMAIN_PENDING_CONSENT"],
        ["USE_DOMAIN_MAPPING"],
        ["ONBOARDING_FLOW"],
        ["PENDO_ONBOARDING_DATA", { def: null }],
        ["POKTA_EXPERIENCE_SHOWED"],
        ["RATINGS", { def: {} }],
        ["USER_PINNED_ON_TOOLBAR", { def: !1 }],
        ["SECRET_KEY", { def: null, multiAccount: !0 }],
        ["HAS_POKTA_MONOLITH_VAULT", { def: null, multiAccount: !0 }],
        ["POKTA_CORE_SERVICE_VAULT_INPUT_FORMAT", { def: null, multiAccount: !0 }],
        ["POKTA_BANNER_DISMISSED", { def: !1 }]
      ],
      function (e) {
        E(_, "Persistent", e[0], e[1]);
      }
    ),
    e(
      [
        ["PROMPT_SAVE_PASSWORD", { def: null }],
        ["CURRENT_SELF_SERVICE_APP_CREDENTIALS", { def: null }],
        ["CURRENT_FAST_IDP_APP", { def: null }],
        ["CURRENT_FLOW", { def: null }],
        ["SAML_TESTER", { def: null }],
        ["CURRENT_FLOW_APP_INSTANCE_ID", { def: null }],
        ["API_TRACKER", { def: {}, name: "ApiCalled" }],
        ["MISMATCH_URLS_INFO", { def: null, name: "MismatchUrlInfo" }],
        ["PKCE_META", { def: {}, name: "PKCEMeta" }],
        ["CURRENT_SPS"],
        ["TASKS"]
      ],
      function (e) {
        E(_, "Tab", e[0], e[1]);
      }
    ),
    _
  );
})();
