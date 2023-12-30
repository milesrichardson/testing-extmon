var g_CS = {},
  g_CS_count = {},
  g_CS_tabs = {},
  g_nexttabid = 1,
  g_CS_tops = {},
  g_breach_data = null,
  sendchallengescore = !1,
  g_secret_cache = {},
  g_cached_hash = null,
  g_hash_live = 0,
  g_breach_alert_set = 0,
  poll_timeout = 6e4,
  debug = !1,
  g_possiblemax_tuple = [],
  g_is_company_owner = !1,
  g_local_key = null,
  g_local_key_hex = null,
  g_local_hash = null,
  g_local_key_hash = null,
  g_username = null,
  g_username_hash = null,
  g_is_restricted = !1,
  g_migrate_expired_shared_folders = !1,
  g_has_credit_monitoring_premium = !1,
  g_primary_device_switches_left = null,
  g_infield_multidevice_paywall_tracking = !1,
  g_uid = null,
  g_cid = null,
  g_pwdeckey = null,
  g_token = "",
  g_identity = "",
  g_sites = {},
  g_tlds = {},
  g_securenotes = {},
  g_applications = {},
  g_prompts = {},
  g_local_accts_version = -1,
  g_server_accts_version = -1,
  iconsversion,
  g_identities = [],
  g_formfills = [],
  g_neverurls = new Array(),
  g_equivalentdomains = {},
  g_strictequivalentdomains = {},
  g_urlrules = new Array(),
  g_prefoverrides = {},
  g_pendings = new Array(),
  g_pending_shares = new Array(),
  g_shareeautopushes = new Array(),
  g_shareeautopushests = 0,
  g_loglogins = !1,
  g_isadmin = !1,
  g_iscompanyadmin = !1,
  g_showcredmon = !1,
  g_launches = new Array(),
  g_last_launch = new Array(),
  ischrome = !0,
  g_icons = new Array(),
  g_bigicons = {},
  g_bigsquareicons = {},
  g_icons_length = 0,
  g_loggedinoffline = !1,
  g_loggedinonline = !1,
  g_account_type = "",
  g_enterprise_version = "",
  g_fillSessionId = "",
  LegacyFillTracking = (function () {
    var r = {},
      e,
      t,
      a;
    return {
      track: function (e, t, a, n) {
        (g_fillSessionId = reduxApp.sfTracking.createFillSessionId()),
          (r[n || g_currenttabid] = { sessionId: g_fillSessionId, type: e, source: t, submissionType: a });
      },
      fillInitiated: function (e) {
        var t = r[g_currenttabid];
        t &&
          t.sessionId === e &&
          !t.initiated &&
          ((t.initiated = !0), reduxApp.sfTracking.fillInitiated(e, t.type, t.source, t.submissionType));
      },
      fillModified: function (e) {
        var t = r[g_currenttabid];
        t && t.sessionId === e && reduxApp.sfTracking.fillModified(e, t.type, t.source);
      }
    };
  })(),
  g_shares = new Array(),
  g_emer_sharers = [],
  g_emer_sharees = [],
  g_totp = {},
  g_disablepwalerts = -1,
  g_accountVersionTracking = !1,
  g_notification_type = null,
  g_notification_data = null,
  g_site_data = null,
  g_img_data = null,
  g_audio_data = null,
  g_formfill_data = null,
  g_reprompt_callback = null,
  g_reprompt_error_callback = null,
  g_omnikey_callback = null,
  g_is_premium_trial = 0,
  g_product_price = null,
  g_local_currency = null,
  g_enterprisemodel = 0,
  EnterpriseModel = { ENTERPRISE: "0", TEAMS: "1", FAMILIES: "2" },
  g_enterpriseoffering = null,
  EnterpriseOffering = { MFA: "1", ENTERPRISE: "2", IDAAS: "3" },
  g_lastpollcheck = 0,
  g_lastpoll = 0,
  g_logoff_other_ses = !1,
  g_generatedpw = !1,
  g_fillfieldsmatches = new Array(),
  g_fillfieldsmatchescurridx = new Array(),
  g_fillfield_confirm_perfield = {},
  g_fillfield_did_fillbest = {},
  g_currenturl = "",
  g_currenttabid = "",
  g_tabsWithForms = [],
  g_badgedata = null,
  g_saveall_url,
  g_saveall_framestotal,
  g_saveall_framesdone,
  g_saveall_docnumsdone,
  g_saveall_formdata,
  g_saveall_tabid,
  g_saveall_done,
  g_genpws = new Array(),
  g_lp_hotkeys = new Array(
    "generateHk",
    "recheckHk",
    "searchHk",
    "nextHk",
    "prevHk",
    "homeHk",
    "submitHk",
    "saveallHk",
    "logoffHk",
    "defaultffidHk",
    "openpopoverHk"
  ),
  g_generate_url = "",
  g_generate_url_prev = "",
  g_changepwnewpw = "",
  g_changepwtld = "",
  g_changepwexcludeid = 0,
  g_curr_fill_aid = 0,
  g_is_win = "undefined" != typeof navigator && -1 != navigator.appVersion.indexOf("Windows"),
  g_is_mac = "undefined" != typeof navigator && -1 != navigator.appVersion.indexOf("Mac"),
  g_is_linux =
    "undefined" != typeof navigator && (-1 != navigator.appVersion.indexOf("Linux") || -1 != navigator.appVersion.indexOf("X11")),
  g_can_open_popover = "undefined" != typeof SafariExtensionPopover,
  g_retryonlinetimerid = null,
  g_notifytimerid = null,
  g_loggedLogins = new Array(),
  g_master_password_saved = !1,
  g_create_account_data = null,
  g_nplastpass = null,
  g_loginstarted = !1,
  g_persistent_notifications = new Array(),
  g_rejectedaddsites = new Array(),
  g_checkgeneratepasswordcallback = null,
  g_db_transaction_tested = !1,
  g_db_transaction_worked = !1,
  g_events = [],
  g_offer_popupfill = !1,
  g_offer_popupfill,
  do_experimental_popupfill = (g_offer_popupfill = !0),
  g_is_selenium = !1,
  g_selenium_bits = -1,
  g_lp_mpw_user = "",
  g_hidevault = !1,
  g_hideshowvault = !1,
  g_hidenotes = !1,
  g_hideidentities = !1,
  g_hideexport = !1,
  g_hideimport = !1,
  g_hidesharing = !1,
  g_hideprint = !1,
  g_hidecreate = !1,
  g_hidecreatepop = !1,
  g_hideacctsettings = !1,
  g_nopoll = !1,
  g_norecovery = !1,
  g_nosharingkeys = !1,
  g_skiphttptest = !0,
  g_hidesearch = !1,
  g_hidesessions = !1,
  g_hideseccheck = !1,
  g_hidelogoffprefs = !1,
  g_hidescreenkeyboard = !1,
  g_hideabout = !1,
  g_hiderecheckpage = !1,
  g_hidecheckupdates = !1,
  g_hidegopremium = !1,
  g_hideappearancebox = !1,
  g_hiderecentlyusedlistsize = !1,
  g_helpurl = base_url + "help.php?fromwebsite=1",
  g_dopushserver = !0,
  g_checkiterationsreduction = !0,
  g_forgotpwurl = base_url + "forgot.php",
  g_vaulturloverride = "",
  g_protect_plug2web = !0,
  g_shownewloginoption = !0,
  g_hideopenfavs = !1,
  g_hideaboutmanuallink = !1,
  g_showvaultdefault = 0,
  g_showvaultalways = 0,
  g_hidesaedhotkey = !1,
  g_hidemenubar = !1,
  g_showupgradenotes = !0,
  g_showhistorylinks = !0,
  g_useshortlang = !1,
  g_showweakdupalerts = !0,
  g_runchallenge = !0,
  g_skipurltest = !1,
  lppassusernamehash = !1,
  lpusername = null,
  lphash = null,
  lp_rsaprivatekeyhex = "",
  lp_rsaprivatekeyenchex = "",
  lp_rsaprivatekeyenchexserverhash = "",
  g_privkeyattempts = 0,
  g_selectedtabid = -1,
  g_selectedtab = null,
  g_export_output = "",
  g_editfieldsopener = null,
  g_currenttld = null,
  SpecialSites = {},
  BigIconList = null,
  g_cachedffdat = null,
  g_didchangepw = [],
  g_plug2web_timeout = 20,
  g_plug2web_last_initiated = 0,
  g_wlan_works = !1,
  g_wlan_has_exe = !1,
  g_partner_type = "",
  g_session_is_valid_until = null,
  g_session_lifetime_policy_interval_handle = null,
  g_show_billing_address_notification = !1,
  g_show_device_limit_notification = !1,
  g_device_limit_releaseTS = 16290684e5;
function lpobjrejectedaddsite() {
  var e, t, a, n;
}
var g_opera_button = null,
  g_firefox_login_panel = null,
  g_firefox_panel = null,
  g_firefox_preload_menu = !0,
  g_firefox_delay_menu_data = !0,
  g_firefox_button_clicked = !1,
  g_firefox_html_panel = null,
  g_firefox_html_dialog = null,
  g_username_vals = new Array(),
  g_datacache = [],
  g_prefs_read = !1,
  g_manual_login = !1,
  g_pplastpass_loaded = !1,
  g_enable_full_menu = !0,
  g_flags = {},
  g_basicauth_timer_started = !1,
  g_onload_started = !1,
  g_pending_launch = null,
  pass = !0,
  g_show_pw_in_logs = !1,
  g_innerHTML_debug = !1,
  g_robots_txt = !1,
  g_skip_ad_frames = !0,
  g_pending_pw_change = {},
  g_fennec_menu_id = null,
  g_sharing_enabled = !0,
  g_folder_sharing_enabled = !0,
  g_generate_pw_pattern_hints = {},
  g_queeg_mode = !1,
  g_legacy_enabled = !1,
  g_enable_checkpoint = !1,
  g_lp_model = 1,
  g_trial_available = !1,
  g_premium_trial_exp_days = null,
  g_company_trial_exp_days = null,
  g_company_license_exp_days = null,
  g_is_company_subscription_expired = null,
  g_show_original_language_changed_notification = null,
  g_company_is_autorenewal = null,
  g_original_language = null,
  g_is_recovery_login = !1,
  HUMANIZE_DELAY_QUANTUM = 401,
  g_last_ui_warning = 0,
  g_40notify = !0,
  g_40fieldicon = !0,
  g_usercache = {},
  g_ask_totp = {},
  g_note_templates = [],
  g_reminders = [],
  g_first_time_login = !1,
  g_blob_version = {},
  g_is_legacy_premium = !1,
  g_is_families_trial_started = !1,
  LPDebugLogs = {},
  VAULT_PAGE = "vault.html",
  g_multifactorProvider = "",
  g_fillSessionIds = {},
  g_fillTrackingItemModifiedIsSent = {},
  secondary_onboarding_skill_list = "",
  EXPORT_OUTPUT_DEFAULT = "url,username,password,totp,extra,name,grouping,fav\n";
function setup_wlan_variables() {
  (g_is_win || g_is_mac) && have_binary_function("wlan_works")
    ? call_binary_function("wlan_works", function (e) {
        g_wlan_works = e;
      })
    : (g_wlan_works = !1),
    g_is_win && have_binary_function("wlan_has_exe")
      ? call_binary_function("wlan_has_exe", function (e) {
          g_wlan_has_exe = e;
        })
      : (g_wlan_has_exe = !0);
}
function buttonclick() {
  (lploggedin ||
    (!shouldOpenLogin() &&
      g_badgedata &&
      "notification" == g_badgedata.cmd &&
      ("error" == g_badgedata.type || "mpwchange" == g_badgedata.type))
    ? (update_menus(), toggle_menu)
    : open_login)();
}
(g_open_native_messaging_html = !1),
  (g_have_native_messaging_permission = !1),
  !have_nplastpass() &&
    supports_native_messaging() &&
    "undefined" != typeof g_do_native_messaging &&
    g_do_native_messaging &&
    test_native_messaging(function (e) {
      void 0 === e
        ? (g_do_native_messaging = !1)
        : e
        ? ((g_have_native_messaging_permission = !0), connect_native_messaging())
        : (g_open_native_messaging_html = !0);
    });
var shouldOpenDropdown = function () {
    return !(
      !lploggedin ||
      (g_badgedata &&
        "notification" === g_badgedata.cmd &&
        "duplicate" !== g_badgedata.alerttype &&
        "error" !== g_badgedata.type &&
        "weak" !== g_badgedata.alerttype &&
        "mpwchange" !== g_badgedata.type &&
        "lpalert" !== g_badgedata.type)
    );
  },
  shouldOpenLogin = function () {
    return !lploggedin;
  },
  shouldShowErrorDialogue = function () {
    return g_badgedata && "notification" === g_badgedata.cmd && "error" === g_notification_type;
  },
  g_popoverstartpage = 0;
function gettabid(e) {
  if (g_ischrome || g_iscasper)
    try {
      return e ? e.id : -1;
    } catch (e) {
      return -1;
    }
  else if (g_issafari_appext) return e.tabID;
}
function get_all_windows(e, t) {
  g_ischrome ? chrome.windows.getAll(e, t) : LPPlatform.getWindowIDs && t(LPPlatform.getWindowIDs());
}
function updatePrefsHandler() {
  reduxApp.getPreference("storeLostOTP") || DeleteOTP(),
    lpdbg("idle", "updating prefs, idleLogoffVal is " + reduxApp.getPreference("idleLogoffVal")),
    (reduxApp.getPreference("logoffWhenCloseBrowser") || 0 < reduxApp.getPreference("idleLogoffVal")) &&
      !reduxApp.getPreference("rememberpassword") &&
      deletesavedpw(g_username),
    startIdleChecker(),
    setprefs("all", "all"),
    setup_hotkeys(),
    drawIconAtRotation(0);
}
function get_tabs(e) {
  if (g_issafari_appext) return LPPlatform.getWindowTabDetails(e);
  try {
    return e.tabs;
  } catch (e) {
    return new Array();
  }
}
function get_tabs_length(e) {
  try {
    return get_tabs(e).length;
  } catch (e) {
    return 0;
  }
}
function close_tab(a) {
  g_issafari_appext
    ? LPPlatform.closeTab(a)
    : get_all_windows({ populate: !0 }, function (e) {
        var t = !1;
        if (
          (1 == e.length && 1 == get_tabs_length(e[0]) && gettabid(get_tabs(e[0])[0]) == gettabid(a) && openURL("about:newtab"), g_ischrome)
        )
          try {
            chrome.tabs.remove(gettabid(a));
          } catch (e) {
            console_error(e);
          }
      });
}
function cleanup_tabs() {}
var message_handler = Raven.wrap(function (o) {
  switch (o.name) {
    case "writeAllPrefs":
      break;
    case "closepop":
      closePop();
      break;
    case "connect":
      connect_eventHandler(o);
      break;
    case "focus":
      var e = lp_gettld_url(gettaburl(o.message));
      compare_tlds(e, g_currenttld) || (update_menus(), (g_currenttld = e));
      break;
    case "message":
      receiveCS(gettabidfromevent(o), o.message, 0, { tab: geteventtarget(o) });
      break;
    case "processCS":
      var e = LPJSON.parse(o.message.data);
      (e.callback = function (e) {
        event_dispatch_message(o, "website_event_callback", { data: LPJSON.stringify(e) });
      }),
        processCS(null, e, null);
      break;
    case "disablepasswordmanager":
      disablepasswordmanager(o.message.disable);
      break;
    case "LP_do_login":
      (g_manual_login = o.message.manual_login),
        LP_do_login(
          o.message.u,
          o.message.p,
          o.message.rememberemail,
          o.message.rememberpassword,
          o.message.donotclearmultifactor,
          o.message.showvault,
          o.message.lpkey,
          o.message.lphash
        );
      break;
    case "openURL":
      var e;
      void 0 !== o.message.g_site_data &&
        ((g_site_data = LPJSON.parse(o.message.g_site_data)), (e = get_record(get_record_id(g_site_data)))) &&
        (g_site_data.fields = e.fields),
        openURL(o.message.url);
      break;
    case "start_trial":
      start_trial();
      break;
    case "install_binary":
      install_binary();
      break;
    case "reprompt_error_callback":
      g_reprompt_error_callback_save();
      break;
    case "omnikey_callback":
      g_omnikey_callback_save(o.message.pin);
      break;
    case "update_prefs":
      "generate" == o.message.page && (g_genpws = o.message.g_genpws);
      break;
    case "setup_hotkeys":
      setup_hotkeys();
      break;
    case "copytoclipboard":
      LPPlatform.copyToClipboard(o.message.g_data);
      break;
    case "update_prompts":
      g_prompts = JSON.parse(o.message.g_prompts);
      break;
    case "openall":
      openall(o.message.group);
      break;
    case "openAllSites":
      openAllSites(o.message.sites);
      break;
    case "deleteGroup":
      deleteGroup(o.message.group, null, function () {
        event_dispatch_message(o, "delete_group_callback", {});
      });
      break;
    case "copyusername":
      var t = void 0 !== o.message.fromiframe && o.message.fromiframe ? 1 : 0,
        a = gettabidfromevent(o);
      copyusername(o.message.aid, t, a);
      break;
    case "copypassword":
      var t = void 0 !== o.message.fromiframe && o.message.fromiframe ? 1 : 0,
        a = gettabidfromevent(o);
      copypassword(o.message.aid, null, t, a);
      break;
    case "copyurl":
      var t = void 0 !== o.message.fromiframe && o.message.fromiframe ? 1 : 0,
        a = gettabidfromevent(o);
      copyurl(o.message.aid, t, a);
      break;
    case "copynote":
      copynote(o.message.aid);
      break;
    case "deleteAid":
      deleteAid(o.message.aid, null, !1, !1, function () {
        event_dispatch_message(o, "delete_aid_callback", {});
      });
      break;
    case "editAid":
      editAid(o.message.aid, null, null, o.message.openchpw);
      break;
    case "unlock_plug2web":
      unlock_plug2web();
      break;
    case "gotourl":
      gotourl(o.message.aid);
      break;
    case "launch":
      var n = o.message.aid,
        r = o.message.skip_pwprotect;
      setTimeout(function () {
        launch(n, r);
      }, 0);
      break;
    case "open_login":
      open_login(o.message.forcetab);
      break;
    case "addprofile":
      addprofile(null, o.message.source);
      break;
    case "update_create_account_data":
      g_create_account_data = LPJSON.parse(o.message.create_account_data);
      break;
    case "addcreditcard":
      addcreditcard(null, o.message.source);
      break;
    case "editprofile":
      editprofile(o.message.ffid, null, o.message.source);
      break;
    case "openprefs":
      openprefs(o.message.tab);
      break;
    case "openbaseurl":
      openbaseurl(o.message.suffix);
      break;
    case "changemasterpassword":
      changemasterpassword();
      break;
    case "addDomainToMPWNever":
      addDomainToMPWNever();
      break;
    case "MPWNoNag":
      MPWNoNag();
      break;
    case "openaddsecurenote":
      openaddsecurenote();
      break;
    case "openeditsecurenote":
      openeditsecurenote();
      break;
    case "loggedOut":
      loggedOut(o.message.skiprequest, o.message.from);
      break;
    case "switch_identity":
      switch_identity(o.message.iid, o.message.skip_reprompt);
      break;
    case "renameGroup":
      renameGroup(o.message.origgrp, o.message.newgrp);
      break;
    case "addEmptyGroup":
      addEmptyGroup(o.message.newgrp);
      break;
    case "moveSelectedToGroup":
      moveSelectedToGroup(o.message.group, o.message.aids);
      break;
    case "security_prompt":
      security_prompt(function () {
        event_dispatch_message(o, "security_prompt_callback", {});
      });
      break;
    case "savePassword":
      var a, i, e;
      (a = null == o.message.tabid ? gettabidfromevent(o) : o.message.tabid),
        (e = null != o.message.saveOptions ? o.message.saveOptions : {}),
        (i = null != o.message.nofill && o.message.nofill),
        savePassword(o.message.pass, o.message.url, a, i, e);
      break;
    case "checkgeneratepassword":
      (g_checkgeneratepasswordcallback = function () {
        event_dispatch_message(o, "generatepasswordfound", {});
      }),
        sendCS(o.message.tabid, { cmd: "checkgeneratepassword" });
      break;
    case "fillform":
      fillform(o.message.ffid, !1, o.message.origtabid, o.message.ccffid);
      break;
    case "changePassword":
      changePassword(o.message.password, o.message.aids);
      break;
    case "receiveTS":
      receiveTS(null, o.message);
      break;
    case "deleteformfill":
      deleteformfill(o.message.ffid, null, o.message.fromiframe, gettabidfromevent(o), null, null, o.message.source);
      break;
    case "addeditformfill":
      addeditformfill(LPJSON.parse(o.message.ffdata), LPJSON.parse(o.message.site), o.message.source);
      break;
    case "fix_tlds":
      fix_tlds(o.message.oldtld, o.message.newtld, o.message.aid);
      break;
    case "moveIntoSharedFolder":
      moveIntoSharedFolder(
        LPJSON.parse(o.message.shareinfo),
        LPJSON.parse(o.message.shareinfoorig),
        LPJSON.parse(o.message.aidsThatChangedGroups),
        LPJSON.parse(o.message.aidsnewgrps),
        o.message.copy,
        o.message.onlycheck,
        o.message.skipcheck
      );
      break;
    case "increment_local_accts_version":
      increment_local_accts_version();
      break;
    case "rewritelocalfile":
      rewritelocalfile();
      break;
    case "saveSite":
      saveSite(o.message.postdata, o.message.acct);
      break;
    case "openLinkedSites":
      openLinkedSites(o.message.password, o.message.tld, o.message.excludeid);
      break;
    case "generate":
      opengenpw();
      break;
    case "ping_ack":
    case "basicauthmoreinfobtn":
    case "basicauthneverbtn":
    case "changepw":
    case "chooseprofilecc":
    case "createaccountbtn":
    case "custombtn":
    case "disablebtn":
    case "feedbackbtn":
    case "starttrialbtn":
    case "fillformffid":
    case "popupfillresize":
    case "recheckpagecontext":
    case "savesiteicon":
    case "savethesite":
    case "startsaveall":
    case "tryagainbtn":
      var a;
      processCS((a = gettabidfromevent(o)), o.message);
      break;
    case "saveAllSite":
      saveAllSite(o.message.postdata, fix_fields(LPJSON.parse(o.message.acct)));
      break;
    case "saveSiteFromSubmit":
      saveSiteFromSubmit(o.message.postdata, fix_fields(LPJSON.parse(o.message.acct)));
      break;
    case "saveFields":
      saveFields(o.message.getdata, o.message.postdata, fix_fields(LPJSON.parse(o.message.aData)));
      break;
    case "set_editfieldsopener":
      set_editfieldsopener(geteventtarget(o));
      break;
    case "close_editfieldsopener":
      close_editfieldsopener();
      break;
    case "unprotect_data":
      unprotect_data(o.message.data, o.message.windowsonly, function (e) {
        event_dispatch_message(o, "unprotect_data_callback", { protected_data: o.message.data, unprotected_data: e });
      });
      break;
    case "change_master_password":
      event_dispatch_message(o, "change_master_password_callback", {
        newdata: change_master_password(o.message.newusername, o.message.newpassword, o.message.toserver)
      });
      break;
    case "make_lp_key_hash_iterations":
      make_lp_key_hash_iterations(o.message.u, o.message.p, get_key_iterations(o.message.u), function (e, t) {
        event_dispatch_message(o, "make_lp_key_hash_iterations_callback", { lpkey: e, lphash: t });
      });
      break;
    case "lpvt_store_data_and_setsinglefactortype":
      lpvt_store_data_and_setsinglefactortype(o.message.data);
      break;
    case "delete_file":
      delete_file(o.message.f);
      break;
    case "lpevent":
      lpevent(o.message.w);
      break;
    case "update_site":
      var i = fix_fields(LPJSON.parse(o.message.site));
      is_application(i) ? (g_applications[i.appaid] = i) : i.sn ? (g_securenotes[i.aid] = i) : (g_sites[i.aid] = i);
      break;
    case "fastDecryptAttachment":
      fastDecryptAttachment(o.message.id, o.message.mimetype, o.message.data, o.message.attachkey, o.message.key, function (e) {
        event_dispatch_message(o, "fast_decryptatt_callback", { result: e, id: o.message.id, mimetype: o.message.mimetype });
      });
      break;
    case "fastEncryptAttachments":
      fastEncryptAttachments(o.message.akey, LPJSON.parse(o.message.attachments), function (e) {
        event_dispatch_message(o, "fast_encryptatt_callback", { data: LPJSON.stringify(e) });
      });
      break;
    case "get_saved_logins":
      get_saved_logins(function (e) {
        event_dispatch_message(o, "get_saved_logins_callback", { rows: e });
      });
      break;
    case "delete_saved_login":
      delete_saved_login(o.message.username);
      break;
    case "update_fields":
      (g_sites[o.message.aid].fields = LPJSON.parse(o.message.fields)), (g_sites[o.message.aid] = fix_fields(g_sites[o.message.aid]));
      break;
    case "select_selectedtabid":
      select_selectedtabid();
      break;
    case "closecurrenttab":
      closecurrenttab(o.message.page);
      break;
    case "add_identity":
      add_identity();
      break;
    case "checkforupdates":
      checkforupdates();
      break;
    case "clearforms":
      clearforms(o.message.source);
      break;
    case "clearrecent":
      clearrecent();
      break;
    case "openabout":
      openabout();
      break;
    case "openaddsite":
      openaddsite();
      break;
    case "openeditsite":
      openeditsite();
      break;
    case "openchooseprofilecc":
      openchooseprofilecc();
      break;
    case "openexport":
      openexport();
      break;
    case "openfavorites":
      openfavorites();
      break;
    case "openfeedback":
      openfeedback();
      break;
    case "opengenpw":
      opengenpw();
      break;
    case "openhelp":
      openhelp(o.message.topic);
      break;
    case "openimport":
      openimport();
      break;
    case "doimport":
      doimport(o.message.source, o.message.filename);
      break;
    case "openlastpassexport":
      openlastpassexport();
      break;
    case "wlanexport":
      wlanexport();
      break;
    case "formfillexport":
      formfillexport();
      break;
    case "openpremium":
      openpremium();
      break;
    case "openenterprisepayment":
      openenterprisepayment();
      break;
    case "openteamspayment":
      openteamspayment();
      break;
    case "openfamiliespayment":
      openfamiliespayment();
      break;
    case "openpricing":
      openpricing();
      break;
    case "openTranslationsReadMore":
      openTranslationsReadMore();
      break;
    case "openentconsole":
      openentconsole();
      break;
    case "openfamilyconsole":
      openFamilyConsole();
      break;
    case "openseccheck":
      openseccheck();
      break;
    case "opensessions":
      opensessions();
      break;
    case "openmyaccount":
      openmyaccount();
      break;
    case "openvault":
      openvault();
      break;
    case "recheckpage":
      recheckpage();
      break;
    case "refreshsites":
      refreshsites();
      break;
    case "saveall":
      saveall();
      break;
    case "upgradetoserver":
      upgradetoserver();
      break;
    case "clearCache":
      clearCache(o.message.noprompt);
      break;
    case "loglogin":
      loglogin(o.message.aid);
      break;
    case "deleteNever":
      deleteNever(LPJSON.parse(o.message.n));
      break;
    case "fillaid":
      fillaid(o.message.aid);
      break;
    case "openprint":
      openprint(o.message.notes);
      break;
    case "getnotificationdata":
      var a = gettabidfromevent(o),
        s;
      void 0 !== g_datacache[a] &&
        ((s = { cmd: "gotnotificationdata", html: g_datacache[a].html, extra: g_datacache[a].extra }), sendCS(a, s, "all"));
      break;
    case "getcpwmsg":
      var a = gettabidfromevent(o),
        s;
      CPWbot_bg &&
        ((s = { cmd: "gotcpwmsg", msg: CPWbot_bg.get_last_overlay_message(), minimize_state: cpwbot_get_minimize_dialog_state() }),
        sendCS(a, s, "all"));
      break;
    case "disabletotp":
      disabletotp(o.message.tld);
      break;
    case "enabletotp":
      enabletotp(o.message.tld, gettabidfromevent(o), null, o.target.port);
      break;
    case "invitetotp":
      invitetotp(o.message.email, o.message.phone);
      break;
    case "closepopupfills":
    case "hidecontext":
    case "hideoverlay":
    case "hidetotp":
    case "slidedownoverlay":
    case "slideupoverlay":
      var a;
      sendCS((a = gettabidfromevent(o)), { cmd: o.name }, "all"),
        "hideoverlay" == o.name ? ((g_persistent_notifications[a] = null), clear_badge()) : "hidetotp" == o.name && (g_ask_totp[a] = null);
      break;
    case "popupfillscreateack":
      var a = gettabidfromevent(o);
      do_popupfillscreateack(a);
      break;
    case "autofillaid":
    case "autologinaid":
      var a = gettabidfromevent(o);
      (o.message.topurl = geteventtargeturl(o)), handleFill(a, o.message);
      break;
    case "raven_transport":
      LPRavenTransport({
        data: o.message.data,
        auth: o.message.auth,
        onSuccess: function () {
          event_dispatch_message(o, "raven_response", { requestId: o.message.requestId });
        },
        onError: function (e) {
          event_dispatch_message(o, "raven_response", { requestId: o.message.requestId, error: e });
        }
      });
      break;
    case "fillcurrentaid":
      fillcurrent(o.message.aid);
      break;
    case "never":
    case "neverautofill":
    case "neverpage":
    case "neverdomain":
      var a = gettabidfromevent(o),
        e = o.message.url;
      handleNever(a, o.message),
        void 0 !== o.message.fromsave && ((g_persistent_notifications[a] = null), clear_badge()),
        (hasNeverAutologin(e, lp_gettld_url(e)) ||
          hasNeverFormFill(e, lp_gettld_url(e)) ||
          hasNeverGenerate(e, lp_gettld_url(e)) ||
          hasNeverShowIcon(e, lp_gettld_url(e)) ||
          hasNeverSave(e, lp_gettld_url(e))) &&
          (handleGetNevers(a, e), closeclickables(a), recheckpage(!0));
      break;
    case "getdata":
      getdata_eventHandler(o);
      break;
    case "save_opened":
      sendCS(gettabidfromevent(o), { cmd: "save_opened" }, "all");
      break;
    case "getpopupfilldata":
      var a = gettabidfromevent(o),
        l = do_getpopupfilldata(a);
      sendCS(a, l, "all");
      break;
    case "popupfillinputget":
      var a = gettabidfromevent(o),
        l;
      (l = do_popupfillinputget(a)) && sendCS(a, l, "all");
      break;
    case "popupfillgetgenerateprefs":
      var a = gettabidfromevent(o),
        l;
      ((l = do_popupfillgetgenerateprefs(a, o.message)).cmd = "gotpopupfillgenerateprefs"), sendCS(a, l, "all");
      break;
    case "popupfillsetgenerateprefs":
      var a = gettabidfromevent(o);
      do_popupfillsetgenerateprefs(a, o.message);
      break;
    case "deleteaid":
      var t = void 0 !== o.message.fromiframe && o.message.fromiframe ? 1 : 0,
        a = gettabidfromevent(o);
      deleteAid(
        o.message.aid,
        null,
        !1,
        !0,
        function () {
          recheckpage(!0);
        },
        null,
        t,
        a
      );
      break;
    case "editaid":
      editAid(o.message.aid);
      break;
    case "openchooseprofilecc":
      openchooseprofilecc();
      break;
    case "dosaveiframe":
      var a = gettabidfromevent(o),
        l = savesite_from_iframe(o.message, a);
      break;
    case "popupfillsaveget":
      var l;
      if ((l = g_popupfill_save_data).formdata2) {
        var _ = new Array(),
          n,
          c;
        for (n in g_sites) {
          !check_ident_aid(n) || "" == (c = g_sites[n].group) || lp_in_array(c, _) || (_[_.length] = c);
        }
        _.sort(function (e, t) {
          return e.toLowerCase() < t.toLowerCase() ? -1 : 1;
        }),
          (l.groups = _),
          void 0 !== o.message.url && (l.group = get_default_group(o.message.url));
      } else void 0 === l.close && g_prompts.view_pw_prompt && (l.prompting = !0);
      var a = gettabidfromevent(o);
      (l.cmd = "gotpopupfillsave"), sendCS(a, l, "all");
      break;
    case "dologinaction":
      lploggedin || open_login();
      break;
    case "dopwchallenge":
      var a = gettabidfromevent(o);
      security_prompt(
        function () {
          var e;
          sendCS(a, { cmd: "didpwchallenge", result: 1 }, "all");
        },
        function () {
          var e;
          sendCS(a, { cmd: "didpwchallenge", result: 1 }, "all");
        },
        !1
      );
      break;
    case "set_share_folder_id":
      set_share_folder_id(o.message.id);
      break;
    case "set_share_folder_group":
      set_share_folder_group(o.message.group);
      break;
    case "disablesitealert":
      disablesitealert(o.message.aid);
      break;
    case "disableallalerts":
      disableallalerts();
      break;
    case "lpdbg":
      lpdbg(o.message.type, o.message.string);
      break;
    case "cpwbot_finish_ack":
      var a;
      g_cpwbot && CPWbot_bg && ((a = gettabidfromevent(o)), CPWbot_bg.cpwbot_finish_ack_handler(a, o.message));
      break;
    case "cpwbot_validate_state_result":
      var a, s;
      g_cpwbot && CPWbot_bg && ((a = gettabidfromevent(o)), (s = o.message), CPWbot_bg.cpwbot_validate_state_result_handler(a, s));
      break;
    case "dopwchange":
      var g = gettabidfromevent(o),
        i = geteventtarget(o),
        r = !1;
      dopwchange(o.message.aid, r, i);
      break;
    case "cpwbot_get_user_debug_messages":
      var a, p, d;
      g_cpwbot &&
        CPWbot_bg &&
        ((a = gettabidfromevent(o)),
        (p = cpwbot_get_user_debug_messages()),
        (d = LPJSON.stringify(p)),
        event_dispatch_message(o, "cpwbot_got_user_debug_messages", { value: d }));
      break;
    case "cpwbot_getpwchangestate":
      var a = gettabidfromevent(o),
        p = cpwbot_getpwchangestate(),
        d = LPJSON.stringify(p);
      event_dispatch_message(o, "cpwbot_gotpwchangestate", { value: d });
      break;
    case "cpwbot_get_dialog_msg":
      var a, p, d;
      g_cpwbot &&
        CPWbot_bg &&
        ((a = gettabidfromevent(o)),
        (p = cpwbot_get_dialog_msg()),
        (d = LPJSON.stringify(p)),
        event_dispatch_message(o, "cpwbot_got_dialog_msg", { value: d }));
      break;
    case "cpwbot_preinit":
      g_cpwbot && CPWbot_bg && cpwbot_preinit();
      break;
    case "cpwbot_halt":
      g_cpwbot && CPWbot_bg && cpwbot_halt();
      break;
    case "close_cpw_tabs":
      var e;
      g_cpwbot && CPWbot_bg && ((e = geteventtarget(o)), cpwbot_close_cpw_tab_handler(e));
      break;
    case "send_sms_passcodes":
      send_sms_passcodes(o.message.postdata, function (e) {
        event_dispatch_message(o, "send_sms_passcodes_callback", { result: e });
      });
      break;
    case "create_account":
      create_account(
        o.message.postdata,
        function (e) {
          event_dispatch_message(o, "create_account_success_callback", {
            req: { readyState: e.readyState, status: e.status, responseText: e.responseText }
          });
        },
        function () {
          event_dispatch_message(o, "create_account_failure_callback", {});
        }
      );
      break;
    case "enable_credit_monitoring":
      enable_credit_monitoring(
        o.message.postdata,
        function (e) {
          event_dispatch_message(o, "enable_credit_monitoring_success_callback", {
            req: { readyState: e.readyState, status: e.status, responseText: e.responseText }
          });
        },
        function () {
          event_dispatch_message(o, "enable_credit_monitoring_failure_callback", {});
        }
      );
      break;
    case "clear_badge":
      clear_badge();
      break;
    case "resize_panel":
      g_firefox_panel.resize(o.message.width, o.message.height);
      break;
    case "resize_login_panel":
      g_firefox_login_panel && g_firefox_login_panel.resize(o.message.width, o.message.height);
      break;
    case "resize_html_panel":
      g_firefox_html_panel && g_firefox_html_panel.resize(o.message.width, o.message.height);
      break;
    case "resize_html_dialog":
      g_firefox_html_dialog &&
        (g_firefox_html_dialog.resizeTo(o.message.width, o.message.height),
        g_firefox_html_dialog.moveTo(
          g_firefox_html_dialog.screen.left + (g_firefox_html_dialog.screen.width - o.message.width) / 2,
          g_firefox_html_dialog.screen.top + (g_firefox_html_dialog.screen.height - o.message.height) / 2
        ));
      break;
    case "deletesavedpw":
      deletesavedpw(o.message.username);
      break;
    case "sr_add_secret":
      SecureReprompter.add_secret(o.message.aid, o.message.acct, o.message.t, o.message.hash);
      break;
    case "minimize_cpw_dialog":
      g_cpwbot && CPWbot_bg && (CPWbot_bg.cpw_dialog_minimize_state = 1);
      break;
    case "maximize_cpw_dialog":
      g_cpwbot && CPWbot_bg && (CPWbot_bg.cpw_dialog_minimize_state = 0);
      break;
    case "onload_done":
      g_firefox_preload_menu &&
        g_firefox_button_clicked &&
        (g_firefox_panel.show({ position: g_firefox_button }), (g_firefox_button_clicked = !1)),
        void 0 !== o.message.need_data &&
          o.message.need_data &&
          setTimeout(function () {
            var e = new Object(),
              t = new Array(),
              a;
            for (a in g_sites) check_ident_aid(g_sites[a].aid) && (t[a] = g_sites[a]);
            e.g_sites = LPJSON.stringify(t);
            var n = new Array(),
              a;
            for (a in g_securenotes) check_ident_aid(g_securenotes[a].aid) && (n[a] = g_securenotes[a]);
            e.g_securenotes = LPJSON.stringify(n);
            var r = new Array(),
              a;
            for (a in g_applications) check_ident_appaid(g_applications[a].appaid) && (r[a] = g_applications[a]);
            e.g_applications = LPJSON.stringify(r);
            for (var i = new Array(), a = 0; a < g_formfills.length; a++)
              check_ident_ffid(g_formfills[a].ffid) && (i[i.length] = g_formfills[a]);
            (e.g_formfills = LPJSON.stringify(i)), event_dispatch_message(o, "data_callback", e);
          }, 200);
      break;
    case "openlastpasslegacy":
      openlastpasslegacy();
      break;
    case "opendebugtab":
      is_user_debug_enabled() && opendebugtab();
      break;
    case "reset_history":
      is_user_debug_enabled() && reset_history();
      break;
    case "savesite_dialog_changed":
      savesite_dialog_changed_handler(gettabidfromevent(o), o.message);
      break;
    case "lpimprove":
      sendLpImprove(request.event, request.properties);
      break;
    case "openOnNewTab":
      openOnNewTab(request.url);
      break;
    case "switchLanguage":
      switchLanguage(request.languageCode);
      break;
    case "saveUserLanguage":
      saveUserLanguage(request.languageCode);
  }
});
function disablepasswordmanager(e, t, a) {
  if (g_ischrome)
    if (e) {
      if ((reduxApp.setExtensionPreferences({ disablepasswordmanagerasked: !!a }), g_ischrome))
        if (void 0 !== chrome.privacy && void 0 !== chrome.privacy.services && void 0 !== chrome.privacy.services.passwordSavingEnabled) {
          if ((chrome.privacy.services.passwordSavingEnabled.set({ value: !1 }), t))
            try {
              t.close(!0);
            } catch (e) {
              L("dialog already closed");
            }
        } else
          chrome.permissions.request({ permissions: ["privacy"] }, function (e) {
            disablepasswordmanager(e, t, !0);
          });
    } else if (t)
      try {
        t.close(!0);
      } catch (e) {
        L("dialog already closed");
      }
}
var share_folder_id = "";
function set_share_folder_id(e) {
  share_folder_id = e;
}
var share_folder_group = "";
function set_share_folder_group(e) {
  share_folder_group = e;
}
function totp_tld_convert(e) {
  return (e = "force.com" == e ? "salesforce.com" : e);
}
var totp_domains = {
  "amazon.com": !0,
  "dropbox.com": !0,
  "evernote.com": !0,
  "facebook.com": !0,
  "google.com": !0,
  "mailchimp.com": !0,
  "salesforce.com": !0
};
function add_totp_data(e, t, a, n) {
  var a;
  (t = totp_tld_convert(t)),
    void 0 !== g_usercache[t] &&
      void 0 !== g_totp.domains &&
      void 0 !== g_totp.domains[t] &&
      void 0 !== g_totp.domains[t][SHA256(g_usercache[t].trim().toLowerCase())] &&
      (n.can_get_totp = !0),
    lploggedin &&
      a &&
      void 0 !== g_ask_totp[e] &&
      g_ask_totp[e] == t &&
      void 0 !== g_usercache[t] &&
      ((a = !1),
      (a =
        (void 0 !== g_totp.domains &&
          void 0 !== g_totp.domains.disabled &&
          void 0 !== g_totp.domains.disabled.all &&
          g_totp.domains.disabled.all) ||
        (void 0 !== g_totp.domains &&
          void 0 !== g_totp.domains.disabled &&
          void 0 !== g_totp.domains.disabled[t] &&
          g_totp.domains.disabled[t])
          ? !0
          : a) ||
        ((n.ask_totp = !0),
        (n.ask_totp_multifactorenabled = void 0 !== g_totp.multifactorenabled && g_totp.multifactorenabled),
        (n.ask_totp_lastpassauthenabled = void 0 !== g_totp.lastpassauthenabled && g_totp.lastpassauthenabled),
        (n.ask_totp_username = g_username))),
    (n.do_totp = g_do_totp);
}
function connect_eventHandler(e) {
  var t = !1,
    a = !0,
    n = gettabidfromevent(e),
    r = e.message.docnum,
    a =
      (void 0 !== e.message.top && ((t = e.message.top), (a = !1)),
      (t || (a && e.message.name == geteventtargeturl(e))) &&
        (cleanup_tabs(), (g_CS[n] = new Array()), (g_CS_count[n] = 0), (g_loggedLogins = new Array()), (t = !0), (g_CS_tops[n] = r)),
      (void 0 !== g_CS[n] && g_CS[n]) || ((g_CS[n] = new Array()), (g_CS_count[n] = 0)),
      (g_CS[n][r] = geteventtarget(e)),
      register_new_cs(n, r, e.message.name, t, e.message.docstate, e.message.docflags),
      g_CS_count[n]++,
      { cmd: "setdocnum", docnum: r }),
    i = lp_gettld_url(e.message.name),
    o,
    o;
  hasNeverSave(e.message.name, i) && (a.neversave = !0),
    (!t && is_max_frames_exceeded(n, g_CS_count)) || hasNeverEnableLP(e.message.name, i)
      ? (L("set killswitch for tab:" + n + " url:" + e.message.name), (a.killswitch = 1), set_killswitch_value(n, r, a.killswitch))
      : !t && g_skip_ad_frames && skip_CS_by_score(n, r)
      ? (console.warn("EXPERIMENT: skipping ads/rich content frame " + e.message.name),
        (a.killswitch = 1),
        set_killswitch_value(n, r, a.killswitch))
      : ((o = 0 < i.lastIndexOf(".") ? i.substr(i.lastIndexOf(".") + 1) : ""),
        (a.tld = o),
        (a.tlddata = LPJSON.stringify(void 0 === lp_all_tlds[o] ? [] : lp_all_tlds[o])),
        set_killswitch_value(n, r, 0),
        (o =
          null !== g_pending_launch &&
          void 0 !== g_last_launch &&
          void 0 !== g_last_launch[g_pending_launch] &&
          new Date().getTime() - g_last_launch[g_pending_launch] <= 25e3),
        (a.is_launch = o)),
    add_totp_data(n, i, t, a),
    sendCS(n, a, r),
    t
      ? (void 0 !== g_persistent_notifications[n] && g_persistent_notifications[n] && sendCS(n, g_persistent_notifications[n]),
        g_cpwbot && CPWbot_bg && CPWbot_bg.score_topdoc(n, r, e.message.name))
      : void 0 !== g_persistent_notifications[n] &&
        g_persistent_notifications[n] &&
        -1 != e.message.name.indexOf("streetscape.com") &&
        setTimeout(function () {
          sendCS(n, g_persistent_notifications[n], "all");
        }, 10),
    !t && is_max_frames_exceeded(n, g_CS_count) && (debug && L("exceeded max frames on tabid " + n), delete g_CS[n][r]);
}
function passwordValidator() {
  return passwordHardeningHelper;
}
function getdata_eventHandler(t, e) {
  if (g_isedge && "toolstrip" == t.message.page && !e)
    get_selected_tab(null, function (e) {
      setcurrenttabid(e.id), setcurrenturl(gettaburl(e)), getdata_eventHandler(t, !0);
    });
  else {
    var a = {
      g_username: g_username,
      ischrome: ischrome,
      LPISLOC: LPISLOC,
      LPISUPEK: LPISUPEK,
      LPISUPEKCAPABLE: LPISUPEKCAPABLE,
      g_promptsstr: LPJSON.stringify(g_prompts),
      lploggedin: lploggedin,
      g_can_copy_to_clipboard: can_copy_to_clipboard(),
      g_can_clear_clipboard: can_clear_clipboard()
    };
    switch (
      ((a.g_is_win = g_is_win),
      (a.g_is_linux = g_is_linux),
      (a.g_is_mac = g_is_mac),
      (a.g_have_nplastpass = have_nplastpass()),
      (a.g_have_native_messaging = have_native_messaging()),
      (a.g_have_pplastpass = have_pplastpass()),
      (a.g_have_ws = have_ws()),
      (a.g_isadmin = g_isadmin),
      (a.g_iscompanyadmin = g_iscompanyadmin),
      (a.g_enterprisemodel = g_enterprisemodel),
      (a.g_showcredmon = g_showcredmon),
      (a.g_is_premium_trial = g_is_premium_trial),
      (a.g_is_company_subscription_expired = g_is_company_subscription_expired),
      (a.base_url = base_url),
      (a.g_hidevault = g_hidevault),
      (a.g_hideshowvault = g_hideshowvault),
      (a.g_hidenotes = g_hidenotes),
      (a.g_hideidentities = g_hideidentities),
      (a.g_hideexport = g_hideexport),
      (a.g_hideimport = g_hideimport),
      (a.g_hidesharing = g_hidesharing),
      (a.g_hideprint = g_hideprint),
      (a.g_hidecreate = g_hidecreate),
      (a.g_hideacctsettings = g_hideacctsettings),
      (a.g_nopoll = g_nopoll),
      (a.g_norecovery = g_norecovery),
      (a.g_nosharingkeys = g_nosharingkeys),
      (a.g_skiphttptest = g_skiphttptest),
      (a.g_hidesearch = g_hidesearch),
      (a.g_offer_popupfill = g_offer_popupfill),
      (a.g_hidesessions = g_hidesessions),
      (a.g_hideseccheck = g_hideseccheck),
      (a.g_hidelogoffprefs = g_hidelogoffprefs),
      (a.g_hidescreenkeyboard = g_hidescreenkeyboard),
      (a.g_hideappearancebox = g_hideappearancebox),
      (a.g_hiderecentlyusedlistsize = g_hiderecentlyusedlistsize),
      (a.g_hideaboutmanuallink = g_hideaboutmanuallink),
      (a.g_hideabout = g_hideabout),
      (a.g_hiderecheckpage = g_hiderecheckpage),
      (a.g_hidecheckupdates = g_hidecheckupdates),
      (a.g_hidegopremium = g_hidegopremium),
      (a.g_shownewloginoption = g_shownewloginoption),
      (a.g_hideopenfavs = g_hideopenfavs),
      (a.g_showvaultdefault = g_showvaultdefault),
      (a.g_showvaultalways = g_showvaultalways),
      (a.g_hidesaedhotkey = g_hidesaedhotkey),
      (a.g_key_iterations = get_key_iterations(g_username)),
      (a.g_cpwbot = g_cpwbot),
      (a.g_chrome_url = getchromeurl("", !0)),
      (a.g_lp_model = g_lp_model),
      (a.g_newvault = !0),
      (a.g_loggedinoffline = g_loggedinoffline),
      (a.g_loggedinonline = g_loggedinonline),
      (a.g_is_chrome_portable = g_is_chrome_portable),
      (a.g_first_time_login = g_first_time_login),
      (a.rsaprivatekeyhex = lp_rsaprivatekeyhex),
      t.message.page)
    ) {
      case "about":
        (a.g_nplastpass_version = get_nplastpass_version()),
          (a.g_nplastpass_build_date_time = get_nplastpass_build_date_time()),
          (a.g_native_messaging_version = g_native_messaging_version),
          (a.g_native_messaging_build_date = g_native_messaging_build_date),
          (a.g_native_messaging_build_time = g_native_messaging_build_time);
        break;
      case "import_other":
        (a.g_wlan_works = g_wlan_works), (a.g_wlan_has_exe = g_wlan_has_exe);
        break;
      case "img":
        (a.g_img_data = LPJSON.stringify(g_img_data)), (a.g_audio_data = LPJSON.stringify(g_audio_data));
        break;
      case "login":
        (a.g_badgedata = g_badgedata),
          (a.g_notification_type = g_notification_type),
          (a.g_notification_data = g_notification_data),
          g_reprompt_callback &&
            ((a.g_reprompt_callback = "g_reprompt_callback"),
            (g_reprompt_callback_save = g_reprompt_callback),
            (g_reprompt_callback = null),
            (a.g_local_key = g_local_key),
            (a.g_cached_hash = g_cached_hash),
            (a.g_local_key_hex = g_local_key_hex),
            (a.g_can_allow_reprompt_skip = !(g_prompts.company_login_site_prompt || g_prompts.company_copyview_site_prompt))),
          g_reprompt_error_callback &&
            ((a.g_reprompt_error_callback = "g_reprompt_error_callback"),
            (g_reprompt_error_callback_save = g_reprompt_error_callback),
            (g_reprompt_error_callback = null)),
          (a.g_forgotpwurl = g_forgotpwurl),
          (a.lptoken = lptoken);
        var n = new Array(),
          r;
        for (r in g_sites) check_ident_aid(g_sites[r].aid) && (n[r] = g_sites[r]);
        (a.g_sites = LPJSON.stringify(n)), (a.g_prefoverrides = LPJSON.stringify(g_prefoverrides));
        break;
      case "omnikey":
        g_omnikey_callback &&
          ((a.g_omnikey_callback = "g_omnikey_callback"), (g_omnikey_callback_save = g_omnikey_callback), (g_omnikey_callback = null));
        break;
      case "export":
        (a.g_export_output = g_export_output), (g_export_output = "");
        break;
      case "prefs":
        (a.g_can_open_popover = g_can_open_popover),
          (a.g_pref_tab = g_pref_tab),
          (g_pref_tab = null),
          (a.g_master_password_saved = g_master_password_saved);
        for (var i = new Array(), r = 0; r < g_formfills.length; r++)
          check_ident_ffid(g_formfills[r].ffid) && (i[i.length] = g_formfills[r]);
        (a.g_formfills = LPJSON.stringify(i)),
          (a.g_prefoverrides = LPJSON.stringify(g_prefoverrides)),
          (a.g_flags = LPJSON.stringify(g_flags)),
          (a.g_opera_context = !1),
          (a.g_firefoxsdk_context = !1),
          (a.lppassusernamehash = lppassusernamehash);
        break;
      case "vault":
        if (
          ((a.g_username = g_username),
          (a.g_local_accts_version = g_local_accts_version),
          (a.lploggedin = lploggedin),
          (a.g_identity = g_identity),
          (a.g_isadmin = g_isadmin),
          (a.g_icons_length = g_icons_length),
          (a.recentCount = getRecentCount()),
          (a.g_enterprisemodel = g_enterprisemodel),
          (a.g_iscompanyadmin = g_iscompanyadmin),
          (a.g_is_company_subscription_expired = g_is_company_subscription_expired),
          (a.g_showcredmon = g_showcredmon),
          (a.g_token = g_token),
          (a.g_sharing_enabled = g_sharing_enabled),
          (a.g_folder_sharing_enabled = g_folder_sharing_enabled),
          (a.g_prefoverrides = LPJSON.stringify(g_prefoverrides)),
          void 0 === t.message.g_username ||
            g_username != t.message.g_username ||
            g_local_accts_version > t.message.g_local_accts_version ||
            lploggedin != t.message.lploggedin ||
            g_identity != t.message.g_identity ||
            g_isadmin != t.message.g_isadmin)
        ) {
          (a.g_hideidentities = g_hideidentities), (a.g_identities = JSON.stringify(g_identities));
          var n = {},
            r;
          for (r in g_sites) check_ident_aid(g_sites[r].aid) && (n[r] = g_sites[r]);
          (a.g_sites = JSON.stringify(n)), (a.g_shares = JSON.stringify(g_shares));
          var o = {},
            r;
          for (r in g_securenotes) check_ident_aid(g_securenotes[r].aid) && (o[r] = g_securenotes[r]);
          a.g_securenotes = JSON.stringify(o);
          var s = {},
            r;
          for (r in g_applications) check_ident_appaid(g_applications[r].appaid) && (s[r] = g_applications[r]);
          a.g_applications = JSON.stringify(s);
          for (var i = [], r = 0; r < g_formfills.length; r++) check_ident_ffid(g_formfills[r].ffid) && i.push(g_formfills[r]);
          a.g_formfills = JSON.stringify(i);
          for (var l = [], r = 0; r < g_pendings.length; r++) check_ident_aid(g_pendings[r].aid) && l.push(g_pendings[r]);
          (a.g_pendings = JSON.stringify(l)),
            (a.g_username_hash = g_username_hash),
            (a.searchinnotes = get_searchNotesPref()),
            (a.lpclearrecent = lpclearrecent),
            (a.g_icons_length = g_icons_length),
            (a.clearRecentTime = getClearRecentTime()),
            (a.g_icons = LPJSON.stringify(g_icons)),
            (a.g_bigicons = LPJSON.stringify(g_bigicons)),
            (a.g_local_key = g_local_key),
            (a.g_local_key_hex = g_local_key_hex),
            (a.g_promptsstr = LPJSON.stringify(g_prompts)),
            (a.g_emer_sharers = JSON.stringify(g_emer_sharers)),
            (a.g_emer_sharees = JSON.stringify(g_emer_sharees)),
            (a.g_pending_shares = JSON.stringify(g_pending_shares)),
            (a.g_note_templates = JSON.stringify(g_note_templates)),
            (a.g_reminders = JSON.stringify(g_reminders)),
            (a.g_genpws = g_genpws);
        }
        break;
      case "toolstrip":
      case "toolstripchangepw":
        var _ = void 0 !== t.message.delay_data && t.message.delay_data;
        if (
          (g_isedge && (a.g_bigicons = JSON.stringify(g_bigicons)),
          (a.g_shares = LPJSON.stringify(g_shares)),
          (a.sitepwlen = LP.sitepwlen),
          (a.g_wlan_works = g_wlan_works),
          (a.g_wlan_has_exe = g_wlan_has_exe),
          (a.g_secret_cache = g_secret_cache),
          ("string" == typeof g_generate_url && "" != g_generate_url) || (g_generate_url = getcurrenturl()),
          "" != (a.g_generate_url = g_generate_url) && (g_generate_url_prev = g_generate_url),
          (g_generate_url = ""),
          (a.allowmultifactortrust = allowmultifactortrust),
          (a.hidemultifactordisable = hidemultifactordisable),
          (a.g_changepwnewpw = g_changepwnewpw),
          (a.g_changepwtld = g_changepwtld),
          (a.g_changepwexcludeid = g_changepwexcludeid),
          (a.lploggedin = lploggedin),
          (a.g_genpws = g_genpws),
          (a.g_local_key = g_local_key),
          (a.g_local_key_hex = g_local_key_hex),
          (a.g_badgedata = g_badgedata),
          (a.g_notification_type = g_notification_type),
          (a.g_notification_data = g_notification_data),
          (a.g_is_premium_trial = g_is_premium_trial),
          (a.g_enterprisemodel = g_enterprisemodel),
          (a.g_is_company_subscription_expired = g_is_company_subscription_expired),
          (a.g_hideexport = g_hideexport),
          (a.g_hideidentities = g_hideidentities),
          (a.g_hideimport = g_hideimport),
          (a.g_hidenotes = g_hidenotes),
          (a.g_hideprint = g_hideprint),
          (a.g_identity = g_identity),
          (a.clearRecentTime = getClearRecentTime()),
          _)
        ) {
          var c = !1,
            r;
          for (r in g_applications)
            if (check_ident_appaid(g_applications[r].appaid)) {
              c = !0;
              break;
            }
          a.g_have_application = c;
        } else {
          var n = new Array();
          if (g_enable_full_menu) for (var r in g_sites) g_sites[r] && check_ident_aid(g_sites[r].aid) && (n[r] = g_sites[r]);
          a.g_sites = LPJSON.stringify(n);
          var o = new Array();
          if (g_enable_full_menu) for (var r in g_securenotes) check_ident_aid(g_securenotes[r].aid) && (o[r] = g_securenotes[r]);
          a.g_securenotes = LPJSON.stringify(o);
          var s = new Array();
          if (g_enable_full_menu) for (var r in g_applications) check_ident_appaid(g_applications[r].appaid) && (s[r] = g_applications[r]);
          a.g_applications = LPJSON.stringify(s);
        }
        a.g_breach_data = LPJSON.stringify(g_breach_data);
        var g = getcurrenturl(),
          p = getsites(
            "toolstripchangepw" == t.message.page ? g_changepwtld : lp_gettld_url(g),
            "toolstripchangepw" == t.message.page,
            "toolstripchangepw" == t.message.page ? g_changepwexcludeid : 0
          ),
          d = ("toolstrip" == t.message.page && (p = reorderOnURL(p, g)), new Array());
        if (g_enable_full_menu) for (var u in p) d[(u = "toolstrip" == t.message.page ? p[u].aid : u)] = g_sites[u];
        if (((a.g_sites_tld = LPJSON.stringify(d)), !_)) {
          var i = new Array();
          if (g_enable_full_menu)
            for (var r = 0; r < g_formfills.length; r++) check_ident_ffid(g_formfills[r].ffid) && (i[i.length] = g_formfills[r]);
          a.g_formfills = JSON.stringify(i);
        }
        (a.g_identities = LPJSON.stringify(g_identities)),
          (a.g_nevers = LPJSON.stringify(getnevers())),
          (a.g_icons = LPJSON.stringify(g_enable_full_menu ? g_icons : [])),
          g_firefox_preload_menu || (a.g_bigicons = LPJSON.stringify(g_enable_full_menu ? g_icons : [])),
          (a.g_menuheight = getmenuheight(!0, !0, !0, !0)),
          (a.g_tabid = getcurrenttabid()),
          (a.g_language = reduxApp.getPreference("language")),
          (a.g_prefoverrides = LPJSON.stringify(g_prefoverrides));
        break;
      case "formfill":
        (a.g_shares = LPJSON.stringify(g_shares)),
          (a.g_formfill_data = LPJSON.stringify(g_formfill_data)),
          (g_formfill_data = null),
          (a.countryfromip = countryfromip),
          (a.g_generatedpw = g_generatedpw),
          (a.lploggedin = lploggedin),
          (a.g_local_key = g_local_key),
          (a.g_local_key_hex = g_local_key_hex);
        break;
      case "site":
        var g = g_site_data ? g_site_data.url : "",
          n =
            ((a.g_site_data = LPJSON.stringify(g_site_data)),
            (g_site_data = null),
            (a.g_generatedpw = g_generatedpw),
            (a.g_showhistorylinks = g_showhistorylinks),
            (a.g_local_key = g_local_key),
            (a.g_local_key_hex = g_local_key_hex),
            (a.g_secret_cache = LPJSON.stringify(g_secret_cache)),
            new Array()),
          r;
        for (r in g_sites) check_ident_aid(g_sites[r].aid) && (n[r] = g_sites[r]);
        a.g_sites = LPJSON.stringify(n);
        var p = getsites(g, !0),
          n = new Array(),
          u;
        for (u in p) n[u] = g_sites[u];
        (a.g_sites_tld = LPJSON.stringify(n)), (a.g_shares = LPJSON.stringify(g_shares));
        var o = new Array(),
          r;
        for (r in g_securenotes) check_ident_aid(g_securenotes[r].aid) && (o[r] = g_securenotes[r]);
        a.g_securenotes = LPJSON.stringify(o);
        var s = new Array(),
          r;
        for (r in g_applications) check_ident_appaid(g_applications[r].appaid) && (s[r] = g_applications[r]);
        (a.g_applications = LPJSON.stringify(s)),
          (a.lploggedin = lploggedin),
          (a.g_prompts = g_prompts),
          (a.g_savesitestopersonal = LPJSON.stringify("undefined" != typeof g_savesitestopersonal ? g_savesitestopersonal : new Array())),
          (a.g_sharing_enabled = g_sharing_enabled);
        break;
      case "create_account":
      case "reenter_password":
        a.g_create_account_data = LPJSON.stringify(g_create_account_data);
        break;
      case "siterefresh":
        var n = new Array(),
          r;
        for (r in g_sites) check_ident_aid(g_sites[r].aid) && (n[r] = g_sites[r]);
        a.g_sites = LPJSON.stringify(n);
        var p = getsites(g, !0),
          n = new Array(),
          u;
        for (u in p) n[u] = g_sites[u];
        a.g_sites_tld = LPJSON.stringify(n);
        var p = getsites(g, !0);
        (a.g_shares = LPJSON.stringify(g_shares)), (a.g_pending_pw_change = g_pending_pw_change);
        break;
      case "breach":
        (a.g_breach_data = LPJSON.stringify(g_breach_data)), (a.g_username = g_username);
        var n = new Array(),
          u;
        for (u in g_sites) n[u] = g_sites[u];
        var f = new Array(),
          u;
        for (u in p) f[u] = g_sites[u];
        (a.g_sites = LPJSON.stringify(n)), (a.g_shares = LPJSON.stringify(f)), (a.g_local_key = g_local_key);
        break;
      case "debug":
        (a.g_historybuf = gethistorybuf()), (a.g_user_debug_enabled = is_user_debug_enabled());
    }
    event_dispatch_message(t, "gotdata", a);
  }
}
function update_menus(t) {
  g_ischrome &&
    get_selected_tab(null, function (e) {
      t && (LPContextMenus.lastcontexturl = null), LPContextMenus.rebuildcontext(gettaburl(e), gettabid(e));
    });
}
function toggle_menu(e) {
  for (var t = 0; t < safari.extension.bars.length; t++)
    "LPMenu" == safari.extension.bars[t].identifier &&
      (e || safari.extension.bars[t].visible ? safari.extension.bars[t].hide() : safari.extension.bars[t].show());
}
function close_menu() {
  "undefined" == typeof SafariExtensionPopover && toggle_menu(!0);
}
var g_alert_reinstall = !1;
function alert_reinstall() {
  g_alert_reinstall = g_alert_reinstall || !0;
}
var showFirefoxPanel = (function () {
    var e = function () {
      shouldOpenDropdown()
        ? LPPlatform.openDropdownPopover()
        : ((g_firefox_button_clicked = !0), g_firefox_panel.port.emit("message", { messagetype: "runonload" }));
    };
    return function () {
      e();
    };
  })(),
  onconnect_listener,
  listener;
function create_firefox_button() {
  "undefined" != typeof g_ui_button_toggle &&
    (g_firefox_button = g_ui_button_toggle.ToggleButton({
      id: "lastpass-button",
      label: "LastPass",
      icon: { 19: self.data.url("images/iconset2/19x19_Gray.png"), 38: self.data.url("images/iconset2/19x19_Gray_2x.png") },
      onChange: function (e) {
        e.checked &&
          getsinglefactortype(function (e) {
            !g_ask_native_messaging_from_button &&
            (lploggedin || null != g_badgedata || ("" == e && reduxApp.getPreference("enablenewlogin")))
              ? (lploggedin ? showFirefoxPanel : open_login_panel)()
              : (g_firefox_button.state("window", { checked: !1 }), open_login(!0));
          });
      }
    }));
}
function onLoad(e) {
  if (
    ((g_onload_started = !0),
    L("BG : loaded"),
    e ||
      (void 0 !== LPPlatform.initialize && LPPlatform.initialize(),
      LPPlatform.onTabUpdated &&
        LPPlatform.onTabUpdated(function (e) {
          (g_issafari_appext && !e.tabDetails.browser) ||
            (g_badgedata &&
              g_badgedata.type &&
              "alert" === g_badgedata.type &&
              g_badgedata.tabid &&
              g_badgedata.tabid === e.tabDetails.tabID &&
              (compare_tlds(lp_gettld_url(e.tabDetails.tabURL), g_badgedata.tld) || ((g_badgedata = null), drawIconAtRotation(0))),
            removeFormfillTab(e.tabDetails.tabID),
            setcurrenttabid(e.tabDetails.tabID),
            setbadgetext(e.tabDetails.tabURL),
            LPContextMenus.rebuildcontext(e.tabDetails.tabURL, e.tabDetails.tabID));
        }),
      LPPlatform.onTabActivated &&
        LPPlatform.onTabActivated(function (e) {
          (g_issafari_appext && !e.tabDetails.browser) ||
            (setcurrenttabid(e.tabDetails.tabID),
            setbadgetext(e.tabDetails.tabURL),
            LPContextMenus.rebuildcontext(e.tabDetails.tabURL, e.tabDetails.tabID));
        })),
    have_binary_function("lpvt_setup_if") && call_binary_function("lpvt_setup_if"),
    have_binary_function("file_exists") &&
      (call_binary_function("file_exists", "LPISLOC", function (e) {
        e &&
          call_binary_function("read_file", "LPISLOC", function (e) {
            call_binary_function("lpvt_verify_file_contents", e, function (e) {
              e ? (LPISLOC = !0) : alert_reinstall();
            });
          });
      }),
      call_binary_function("file_exists", "LPISUPEK", function (e) {
        e &&
          call_binary_function("read_file", "LPISUPEK", function (e) {
            call_binary_function("lpvt_verify_file_contents", e, function (e) {
              e ? (LPISUPEK = !0) : alert_reinstall();
            });
          });
      }),
      call_binary_function("file_exists", "LPISUPEKCAPABLE", function (e) {
        e &&
          call_binary_function("read_file", "LPISUPEKCAPABLE", function (e) {
            call_binary_function("lpvt_verify_file_contents", e, function (e) {
              e ? (LPISUPEKCAPABLE = !0) : alert_reinstall();
            });
          });
      })),
    !e &&
      g_ischrome &&
      ("function" == typeof chrome.browserAction.setPopup &&
        chrome.browserAction.onClicked.addListener(function (e) {
          g_ask_native_messaging_from_button
            ? ((g_ask_native_messaging_from_button = !1), request_native_messaging(), drawIconAtRotation(0))
            : open_login(!0);
        }),
      chrome.tabs.onCreated.addListener(function (e) {
        clear_badge_text(), (LPContextMenus.lastcontexturl = "");
      })),
    drawIconAtRotation(0),
    get_reg_bool("hidevault", g_hidevault, function (e) {
      g_hidevault = e;
    }),
    get_reg_bool("hidenotes", g_hidenotes, function (e) {
      g_hidenotes = e;
    }),
    get_reg_bool("hideidentities", g_hideidentities, function (e) {
      g_hideidentities = e;
    }),
    get_reg_bool("hideexport", g_hideexport, function (e) {
      g_hideexport = e;
    }),
    get_reg_bool("hideimport", g_hideimport, function (e) {
      g_hideimport = e;
    }),
    get_reg_bool("hidesharing", g_hidesharing, function (e) {
      g_hidesharing = e;
    }),
    get_reg_bool("hideprint", g_hideprint, function (e) {
      g_hideprint = e;
    }),
    LPISLOC && (g_hideidentities = g_hidesharing = g_hideprint = !0),
    e
      ? reduxApp.getPreference("enablenamedpipes") && have_binary() && lpnp_init()
      : (lpReadAllPrefs(function (e) {
          var t = getLanguage();
          handleLanguageOffline(t),
            LPContextMenus.createContextMenus(),
            drawIconAtRotation(0),
            lplog("base_url=" + base_url),
            get_all_windows({ populate: !0 }, function (e) {
              for (var t = 0; t < e.length; t++)
                for (var a = 0; a < get_tabs_length(e[t]); a++) {
                  var n = get_tabs(e[t])[a],
                    r = gettabid(n),
                    n = gettaburl(n);
                  !n ||
                    (-1 == n.indexOf("https://lastpass.com/install.php") && -1 == n.indexOf(base_url + "install.php")) ||
                    (lplog("Reloading install.php page"), chrome.tabs.reload(r));
                }
            }),
            reduxApp.setIntroTutorialversion(g_ischrome || g_isfirefoxwebext || g_isedge ? "context" : "vault"),
            reduxApp.getPreference("enablenamedpipes") && have_binary() && lpnp_init(),
            lp_ws.startProcessing(),
            g_offer_popupfill && (do_experimental_popupfill = reduxApp.getState().settings.extensionPreferences.usepopupfill),
            (!LPISLOC && g_np_init) || httptest();
        }),
        setup_poll_timer(),
        DeleteOldDynamicFiles(),
        -1 != getchromeurl("needtoreinstall.html").indexOf("kegdhfdpgckamaoikbjiemmikleploeh") &&
          openURL(base_url + "/needtoreinstall.html")),
    setTimeout(function () {
      g_ischrome &&
        !g_basicauth_timer_started &&
        have_binary_function("setup_basicauth_timer") &&
        ((g_basicauth_timer_started = !0), call_binary_function("setup_basicauth_timer"));
    }, 100),
    !e)
  ) {
    LoadSpecialSites(), setTimeout(check_key_for_changes, 6e4);
    try {
      g_ischrome &&
        chrome.webRequest.onAuthRequired.addListener(
          function (e, t) {
            var a = {};
            if (!reduxApp.getState().settings.features.web_client_fill && !reduxApp.getState().settings.isRestricted)
              try {
                if (void 0 !== g_launches[e.tabId] && g_launches[e.tabId]) {
                  var n = g_launches[e.tabId],
                    r;
                  void 0 !== g_sites[n] &&
                    ((r = g_sites[n]), compare_tlds(lp_gettld_url(r.url), lp_gettld_url(gettaburl(e)))) &&
                    ((a.authCredentials = { username: getusernamefromacct(r), password: getpasswordfromacct(r) }),
                    (g_launches[e.tabId] = null));
                } else {
                  var i = gettaburl(e),
                    o = reorderOnURL(getsites(i), i, !0),
                    s;
                  for (s in o)
                    if (
                      (1 == o[s].basic_auth && write_history({ cmd: "check_autologin3", tabid: tabid, aid: o[s].aid, submit: "tbd" }),
                      1 == o[s].basic_auth && check_autologin(!1, o[s]))
                    ) {
                      a.authCredentials = { username: getusernamefromacct(o[s]), password: getpasswordfromacct(o[s]) };
                      break;
                    }
                }
              } catch (e) {}
            return a;
          },
          { urls: ["<all_urls>"] },
          ["blocking"]
        );
    } catch (e) {}
  }
}
function chromeGetSelf(e) {
  chrome && chrome.management && "function" == typeof chrome.management.getSelf ? chrome.management.getSelf(e) : e(null);
}
function get_reg_bool(e, t, a) {
  get_registry_value("Software\\LastPass", e, "-1", function (e) {
    a(-1 == e ? t : "1" == e);
  });
}
function onUnload() {
  var e;
  close_lpctypeslib(),
    g_fennec_menu_id &&
      void 0 !== (e = g_window_utils.getMostRecentBrowserWindow()).NativeWindow &&
      e.NativeWindow.menu.remove(g_fennec_menu_id);
}
function check_key_for_changes() {
  null != g_local_key_hash &&
    "" != g_local_key &&
    null != g_local_key_hash &&
    SHA256(g_local_key) != g_local_key_hash &&
    (L("LOGGING OFF : cosmicrays"), loggedOut(), lpReportError("INVESTIGATE! KEY_HASH IS WRONG! COSMIC RAYS?")),
    this.setTimeout(check_key_for_changes, 6e4);
}
function isSenderSafe(e) {
  try {
    return void 0 === e.origin ? !0 : new URL(e.url).origin === e.origin;
  } catch (e) {
    return !1;
  }
}
function getShareType(e, t) {
  var e = get_record(e),
    a = "",
    a = e && !0 === e.individualshare ? "individual" : e && e.sharefolderid ? "folder" : "none";
  return t && "function" == typeof t && t(a), a;
}
function disabletotp(e) {
  (e = totp_tld_convert(e)),
    void 0 === g_totp.domains && (g_totp.domains = {}),
    void 0 === g_totp.domains.disabled && (g_totp.domains.disabled = {}),
    (g_totp.domains.disabled[e] = !0),
    g_local_accts_version++,
    rewritelocalfile(),
    lpMakeRequest(
      base_url + "totp.php",
      "token=" + encodeURIComponent(g_token) + "&disable=1&tld=" + encodeURIComponent(e),
      function () {}
    );
}
function enabletotp(n, r, i, e) {
  (n = totp_tld_convert(n)), (g_ask_totp[r] = null);
  var o = SHA256(g_usercache[n].trim().toLowerCase());
  lpMakeRequest(
    base_url + "totp.php",
    "token=" + encodeURIComponent(g_token) + "&enable=1&tld=" + encodeURIComponent(n) + "&usernamehash=" + encodeURIComponent(o),
    function (e) {
      var e, t, a, a;
      4 == e.readyState &&
        200 == e.status &&
        null != e.responseXML &&
        null != e.responseXML.documentElement &&
        ((e = e.responseXML.documentElement),
        void 0 === g_totp.domains && (g_totp.domains = {}),
        void 0 === g_totp.domains[n] && (g_totp.domains[n] = {}),
        (g_totp.domains[n][o] = !0),
        g_local_accts_version++,
        rewritelocalfile(),
        0 < e.getElementsByTagName("ok").length
          ? i
            ? i({ ok: !0 })
            : sendCS(r, (a = { cmd: "enabletotp_response", ok: !0 }), "all")
          : i
          ? i({ ok: !1 })
          : sendCS(r, (a = { cmd: "enabletotp_response", ok: !1 }), "all"));
    }
  );
}
function invitetotp(e, t) {
  lpMakeRequest(
    base_url + "totp.php",
    "token=" + encodeURIComponent(g_token) + "&invite=1&email=" + encodeURIComponent(e) + "&phone=" + encodeURIComponent(t),
    function () {}
  );
}
function disconnectCS(e) {
  if (void 0 !== g_CS[e] && g_CS[e]) {
    for (var t in g_CS[e]) g_CS[e][t].disconnect(), (g_CS[e][t] = null), delete_cs_for_docnum(e, t);
    (g_CS_count[e] = 0), g_cpwbot && CPWbot_bg && (L("disconnect clear score [tabid:" + e + "]"), CPWbot_bg.reset_scores(e));
  }
}
g_ischrome &&
  ((onconnect_listener = Raven.wrap(function (t) {
    var e, a, n, e, r, i, e, o, s, s;
    0 !== t.name.indexOf("requestPort") &&
      0 !== t.name.indexOf("extensionMessaging") &&
      "sync" !== t.name &&
      isSenderSafe(t.sender) &&
      ((e = !1),
      (a = t.name),
      g_isedge && a.match(/^(0|1)\|/) && ((e = "1" == a.charAt(0)), (a = a.substring(2))),
      (a = reduxApp.parsePageUrl(a)),
      (n = !1),
      t.sender.tab &&
        gettaburl(t.sender.tab) &&
        punycode.URLToASCII(a) == gettaburl(t.sender.tab) &&
        0 === t.sender.frameId &&
        ((g_loggedLogins = new Array()),
        (n = !0),
        (g_datacache[t.sender.tab.id] = { html: "", extra: "" }),
        (g_popupforminput[t.sender.tab.id] = []),
        do_popupkbdnavreset(t.sender.tab.id),
        g_isedge) &&
        e &&
        ((g_CS[t.sender.tab.id] = new Array()), (g_CS_count[t.sender.tab.id] = 0)),
      t.sender.tab &&
        (L("RAW TAB URL CS[" + t.sender.tab.id + "] = " + t.sender.tab.url),
        L("RAW TAB URL NAME CS[" + t.sender.tab.id + "] = " + a),
        L("CS[" + t.sender.tab.id + "] -> BG : CONNECT from tab with url=" + gettaburl(t.sender.tab))),
      void 0 !== t.sender) &&
      void 0 !== t.sender.tab &&
      void 0 !== t.sender.tab.id &&
      ((e = t.sender.tab.id),
      (void 0 !== g_CS[t.sender.tab.id] && g_CS[t.sender.tab.id]) ||
        ((g_CS[t.sender.tab.id] = new Array()), (g_CS_count[t.sender.tab.id] = 0)),
      (r = g_CS[t.sender.tab.id].length),
      (g_CS[t.sender.tab.id][r] = t),
      g_CS_count[t.sender.tab.id]++,
      (i = { cmd: "setdocnum", docnum: r }),
      2 <= g_CS_count[t.sender.tab.id] && ("http://chat.major-design.ru/" == a || 0 < a.indexOf("facebook.com/ajax/"))
        ? ((e = t.sender.tab.id),
          lpdbg("connect", "skipping connect to document with tabcount=" + g_CS_count[t.sender.tab.id] + ", istop=" + n + ", url=" + a),
          sendCS(e, { cmd: "remove_event_listener" }, r),
          delete g_CS[e][r])
        : (register_new_cs(e, r, a, n),
          (o = lp_gettld_url(a)),
          hasNeverSave(a, o) && (i.neversave = !0),
          (!n && is_max_frames_exceeded(t.sender.tab.id, g_CS_count)) || hasNeverEnableLP(a, o)
            ? (L("set killswitch for tab:" + t.sender.tab.id + " url:" + a), (i.killswitch = 1), set_killswitch_value(e, r, i.killswitch))
            : !n && g_skip_ad_frames && skip_CS_by_score(e, r)
            ? (console.warn("EXPERIMENT: skipping ads/rich content frame " + a),
              (i.killswitch = 1),
              set_killswitch_value(e, r, i.killswitch))
            : ((s = 0 < o.lastIndexOf(".") ? o.substr(o.lastIndexOf(".") + 1) : ""),
              (i.tld = s),
              (i.tlddata = LPJSON.stringify(void 0 === lp_all_tlds[s] ? [] : lp_all_tlds[s])),
              set_killswitch_value(e, r, 0),
              (s =
                null !== g_pending_launch &&
                void 0 !== g_last_launch &&
                void 0 !== g_last_launch[g_pending_launch] &&
                new Date().getTime() - g_last_launch[g_pending_launch] <= 25e3),
              (i.is_launch = s)),
          add_totp_data(e, o, n, i),
          sendCS(t.sender.tab.id, i, r),
          n
            ? ((g_CS_tops[t.sender.tab.id] = r),
              void 0 !== g_persistent_notifications[t.sender.tab.id] &&
                g_persistent_notifications[t.sender.tab.id] &&
                sendCS(t.sender.tab.id, g_persistent_notifications[t.sender.tab.id]),
              g_cpwbot && CPWbot_bg && CPWbot_bg.score_topdoc(t.sender.tab.id, r, a))
            : (g_CS_tops[t.sender.tab.id] == r &&
                (console.warn("page reload case, new topdoc != old topdoc, new topdoc has not registered yet"),
                console.warn("delete g_CS_tops[" + t.sender.tab.id + "]"),
                delete g_CS_tops[t.sender.tab.id],
                g_cpwbot) &&
                CPWbot_bg &&
                (CPWbot_bg.clear_frame_score(t.sender.tab.id, r, a), CPWbot_bg.in_validate()) &&
                CPWbot_bg.force_validate_retry(!0),
              void 0 !== g_persistent_notifications[t.sender.tab.id] &&
                g_persistent_notifications[t.sender.tab.id] &&
                -1 != a.indexOf("streetscape.com") &&
                setTimeout(function () {
                  sendCS(t.sender.tab.id, g_persistent_notifications[t.sender.tab.id], "all");
                }, 10)),
          !n && is_max_frames_exceeded(t.sender.tab.id, g_CS_count)
            ? delete g_CS[t.sender.tab.id][r]
            : no_persistent_messaging() ||
              ((t.sender.url = reduxApp.parsePageUrl(t.sender.url)),
              (t.sender.tab.url = reduxApp.parsePageUrl(t.sender.tab.url)),
              t.onMessage.addListener(
                Raven.wrap(function (e) {
                  e.url && (e.url = reduxApp.parsePageUrl(e.url)), receiveCS(t.sender.tab.id, e, 0, t);
                })
              ),
              t.onDisconnect.addListener(
                Raven.wrap(function () {
                  receiveCS(t.sender.tab.id, null, 1, t);
                })
              ))));
  })),
  void 0 !== chrome.runtime && void 0 !== chrome.runtime.onConnect && chrome.runtime.onConnect
    ? chrome.runtime.onConnect.addListener(onconnect_listener)
    : void 0 !== chrome.extension &&
      void 0 !== chrome.extension.onConnect &&
      chrome.extension.onConnect &&
      chrome.extension.onConnect.addListener(onconnect_listener),
  (listener = Raven.wrap(function (e, t, a) {
    if (void 0 !== e.cmd)
      if ("getnotificationdata" == e.cmd) void 0 !== g_datacache[t.tab.id] && a(g_datacache[t.tab.id]);
      else if (
        "hideoverlay" == e.cmd ||
        "slidedownoverlay" == e.cmd ||
        "slideupoverlay" == e.cmd ||
        "hidecontext" == e.cmd ||
        "hidetotp" == e.cmd
      )
        sendCS(t.tab.id, { cmd: e.cmd }, "hidetotp" == e.cmd ? "all" : null),
          "hideoverlay" == e.cmd
            ? ((g_persistent_notifications[t.tab.id] = null), clear_badge())
            : "hidetotp" == e.cmd && (g_ask_totp[t.tab.id] = null);
      else if ("disabletotp" == e.cmd) disabletotp(e.tld);
      else {
        if ("enabletotp" == e.cmd) return enabletotp(e.tld, t.tab.id, a), !0;
        if ("invitetotp" == e.cmd) invitetotp(e.email, e.phone);
        else if ("popupfillscreateack" == e.cmd) void 0 !== t.tab && lploggedin && do_popupfillscreateack(t.tab.id);
        else if ("closepopupfills" == e.cmd) {
          var n;
          void 0 !== t.tab &&
            ((n = t.tab.id),
            null != typeof g_popup_tab_docnum[n]
              ? sendCS(t.tab.id, { cmd: e.cmd }, g_popup_tab_docnum[n])
              : sendCS(t.tab.id, { cmd: e.cmd }, "all"),
            delete g_popup_tab_docnum[n],
            clear_popup_heartbeat(n),
            e.option) &&
            sendLpImprove("infieldclose", { source: "form", option: e.option });
        } else if ("fillgenpassword" == e.cmd) {
          (e.cmd = "populategeneratedpassword"), (e.url = t.tab.url), sendCS(t.tab.id, e);
          var r = {},
            i = e.saveOptions,
            o;
          for (o in i) r[o] = i[o];
          (r.action = "formfill"), sendLpImprove("genpassword", r, !0);
        } else if (void 0 !== e.action && "never" == e.action) {
          handleNever(t.tab.id, e), void 0 !== e.fromsave && ((g_persistent_notifications[t.tab.id] = null), clear_badge());
          var s = gettaburl(t.tab);
          (hasNeverAutologin(s, lp_gettld_url(s)) ||
            hasNeverFormFill(s, lp_gettld_url(s)) ||
            hasNeverGenerate(s, lp_gettld_url(s)) ||
            hasNeverShowIcon(s, lp_gettld_url(s)) ||
            hasNeverSave(s, lp_gettld_url(s))) &&
            (handleGetNevers(n, s), closeclickables(n), (g_popupform_active[n] = 0), recheckpage(!(g_popupform_active_choose[n] = 0)));
        } else if ("searchvault" == e.cmd) {
          var l;
          void 0 !== t.tab &&
            void 0 !== g_datacache[t.tab.id] &&
            lploggedin &&
            a((l = do_searchvault(e.searchQuery, e.searchType, t.tab.id)));
        } else if ("getpopupfilldata" == e.cmd) {
          var l;
          void 0 !== t.tab && void 0 !== g_datacache[t.tab.id] && lploggedin && a((l = do_getpopupfilldata(t.tab.id)));
        } else if ("popupfillinputget" == e.cmd) {
          var n, l;
          void 0 !== t.tab && lploggedin && ((n = t.tab.id), (l = do_popupfillinputget(n))) && a(l);
        } else if ("dosaveiframe" == e.cmd) {
          var l;
          void 0 !== t.tab && lploggedin && a((l = savesite_from_iframe(e, t.tab.id)));
        } else if ("popupfillsaveget" == e.cmd) {
          if (void 0 !== t.tab && lploggedin) {
            var l;
            if ((l = g_popupfill_save_data).formdata2) {
              var _ = new Array(),
                c,
                g;
              for (c in g_sites) {
                !check_ident_aid(c) || "" == (g = g_sites[c].group) || lp_in_array(g, _) || (_[_.length] = g);
              }
              _.sort(function (e, t) {
                return e.toLowerCase() < t.toLowerCase() ? -1 : 1;
              }),
                (l.groups = _),
                void 0 !== e.url && (l.group = get_default_group(e.url));
            }
            a(l), (g_popupfill_save_data = {});
          }
        } else {
          var n, l, n, p;
          "popupfillgetgenerateprefs" == e.cmd
            ? ((n = t.tab.id), a((l = do_popupfillgetgenerateprefs(n, e))))
            : "popupfillsetgenerateprefs" == e.cmd
            ? ((n = t.tab.id), do_popupfillsetgenerateprefs(n, e))
            : "savePassword" == e.cmd
            ? void 0 !== t.tab &&
              lploggedin &&
              ((p = !1),
              Checkpoint.assert(e.url === gettaburl(t.tab), sprintf("generate url mismatch %s != %s", e.url, gettaburl(t.tab))),
              savePassword(e.pass, gettaburl(t.tab), t.tab.id, !1, e.saveOptions))
            : "dopwchallenge" == e.cmd
            ? ((g_popupfill_pw_challenge = null),
              security_prompt(
                function () {
                  g_popupfill_pw_challenge = !0;
                },
                function () {
                  g_popupfill_pw_challenge = !1;
                },
                !1
              ))
            : "getpwchallengeresult" == e.cmd
            ? (a(g_popupfill_pw_challenge),
              e.reset,
              (g_popupfill_pw_challenge = null) !== g_popupfill_pw_challenge && (g_popupfill_pw_challenge = null))
            : "getcpwmsg" == e.cmd
            ? CPWbot_bg && a({ msg: CPWbot_bg.get_last_overlay_message(), minimize_state: cpwbot_get_minimize_dialog_state() })
            : no_persistent_messaging() && "connect" == e.cmd
            ? onconnect_listener({ sender: t, name: e.name })
            : receiveCS(t.tab.id, e, 0, { tab: t.tab, sender: t });
        }
      }
  })),
  (void 0 !== chrome.runtime && void 0 !== chrome.runtime.onMessage ? chrome.runtime.onMessage : chrome.extension.onRequest).addListener(
    listener
  ),
  chrome.runtime.onMessage.addListener(function (e, t, a) {
    "getTranslations" === e.action && a(lptranslations);
  }));
var MAX_RETRY_SEND_CS = 5;
function sendCS(e, t, a, n) {
  if (g_issafari_appext) LPPlatform.sendLegacyContentScript(e, t, a);
  else if (
    (void 0 === n || 0 == n ? (n = 0) : 1 == n && (n = 1),
    debug &&
      ("loadurl" == t.cmd
        ? L("BG -> CS[" + e + "] : initial " + t.cmd + " url:" + t.url)
        : "gotpopupfillinput" != t.cmd && L("BG -> CS[" + e + "] : initial " + t.cmd)),
    0 < n && void 0 === t.cmd && L("BG -> CS[" + e + "] : retry=" + n),
    "all" == e)
  )
    for (var r in g_CS)
      for (var i in g_CS[e])
        try {
          debug && L("calling sendCS[" + r + "][" + i + "] cmd=" + t.cmd), sendCS(r[i], t);
        } catch (e) {
          "saveall" == t.cmd && g_saveall_framestotal--;
        }
  else {
    var o;
    if (void 0 === g_CS[e] || !g_CS[e])
      return n < 0 || MAX_RETRY_SEND_CS <= n
        ? void 0
        : void setTimeout(function () {
            sendCS(e, t, a, n + 1);
          }, 150 * n);
    (t.urlprefix = getchromeurl("", !0)), (t.lplanguage = get_lplanguage());
    var s = !0,
      r;
    for (r in g_CS[e]) {
      if (void 0 === a || null == a) {
        if (!s) continue;
        s = !1;
      } else if ("all" != a && a != r) continue;
      if (0 < get_killswitch_value(e, r)) {
        var l = getcsinfo(e, r),
          l = l ? l.url : "unknown";
        if ("setdocnum" != t.cmd) {
          write_history({ cmd: "info", msg: sprintf("killswitch, ignoring %s to %s", t.cmd, l), tabid: e, docnum: r }),
            is_human_initiated_action(t) &&
              hasNeverEnableLP(l, lp_gettld_url(l)) &&
              60 < g_last_ui_warning - LPPerl.time() &&
              ((g_last_ui_warning = LPPerl.time()), alertfrombg("manual fill blocked due to never rule"));
          continue;
        }
      }
      try {
        g_ischrome && (no_persistent_messaging() ? chrome.tabs.sendMessage(e, t) : g_CS[e][r].postMessage(t));
      } catch (e) {}
    }
  }
}
function receiveCS(e, t, a, n) {
  var a;
  a
    ? (-1 < (a = g_CS[e] && g_CS[e].indexOf(n)) && ((g_CS[e][a] = null), --g_CS_count[e]),
      (g_CS_count[e] <= 0 || (punycode.URLToASCII(n.name) == gettaburl(n.sender.tab) && 0 === n.sender.frameId)) &&
        ((g_CS[e] = null), delete_cs_for_tab(e), g_cpwbot) &&
        CPWbot_bg &&
        (L("disconnect clear score [tabid:" + e + "]"), CPWbot_bg.reset_scores(e)))
    : (void 0 !== t.cmd && processCS(e, t, n)) || L("CS[" + e + "] -> BG : INVALIDMSG");
}
var g_safari_error_notifications = !0;
function sendTS(e, t) {
  try {
    if (("notification" == e.cmd && "upgrade" != e.type && set_badge(e), "notification" == e.cmd && "upgrade" == e.type)) {
      var a = void 0 === t ? "all" : t,
        n = !1,
        r = chrome.extension.getViews(),
        i;
      for (i in r)
        if (
          "function" == typeof r[i].receiveBG &&
          ("all" == a || (void 0 !== r[i].g_toolstripid && a == r[i].g_toolstripid)) &&
          (L("BG -> TS : cmd=" + e.cmd), r[i].receiveBG(e), (n = !0), "all" != a)
        )
          break;
      n || L("BG -> TS : FAILED");
    }
  } catch (e) {
    L("BG -> TS : FAILED error=" + e);
  }
}
function set_badge(e) {
  (g_badgedata = e), reduxApp.setNotification(e), (currrotation = 0), animateFlip(), Topics.get(Topics.BADGE_NOTIFICATION).publish();
}
var lastbadgeurl = null;
function setbadgetext(e) {
  var e;
  reduxApp.getState().settings.features.web_client_fill ||
    reduxApp.getState().settings.isRestricted ||
    (lastbadgeurl != e &&
      ((lastbadgeurl = e), 0 < (e = reorderOnURL(getsites(e), e, !0, !1)).length ? set_badge_text(e.length) : clear_badge_text()));
}
function clear_badge() {
  (currrotation = numrotations),
    (g_notification_type = g_badgedata = null),
    drawIconAtRotation(0),
    Topics.get(Topics.BADGE_CLEAR).publish();
}
function set_badge_text(e) {
  reduxApp.getState().settings.features.web_client_fill ||
    reduxApp.getState().settings.isRestricted ||
    (do_experimental_popupfill &&
      reduxApp.getPreference("showmatchingbadge") &&
      (LPPlatform.setBadgeText
        ? LPPlatform.setBadgeText(e)
        : ("string" != typeof e && (e = "" + e),
          lploggedin || (e = ""),
          chrome.browserAction.setBadgeBackgroundColor({ color: "#555" }),
          chrome.browserAction.setBadgeText({ text: e }))));
}
function clear_badge_text() {
  reduxApp.getState().settings.features.web_client_fill ||
    reduxApp.getState().settings.isRestricted ||
    (LPPlatform.setBadgeText ? LPPlatform.setBadgeText("") : g_iscasper || chrome.browserAction.setBadgeText({ text: "" }));
}
function receiveTS(e, t) {
  if (void 0 === t.cmd) return L("TS[" + e + "] -> BG : INVALIDMSG"), null;
  switch ((L("TS[" + e + "] -> BG : cmd=" + t.cmd), t.cmd)) {
    case "getloginstate":
      lploggedin && sendTS({ cmd: "login" }, e);
      break;
    case "sesameauth":
      sesame_auth(t.otp, t.label);
      break;
    case "yubikeyauth":
      yubikey_auth(t.otp, t.label);
      break;
    case "googleauthauth":
      googleauth_auth(t.otp, t.label);
      break;
    case "outofbandauth":
      outofband_auth(t.otp, t.label);
      break;
    case "settrustlabel":
      g_trustlabel = t.trustlabel;
      break;
    case "securityquestionauth":
      securityquestion_auth(t.otp, t.label);
      break;
    case "gridauth":
      grid_auth(t.gridvalues, t.label);
      break;
    case "multifactorauth":
      multifactor_auth(["multifactorresponse"], t.label);
      break;
    case "lostkey":
      lostkey();
      break;
    case "googleauthlostkey":
      googleauthlostkey();
      break;
    case "securityquestionlostkey":
      securityquestionlostkey();
      break;
    case "sesamelostkey":
      sesamelostkey();
      break;
    case "gridlostkey":
      gridlostkey();
      break;
    case "multifactorlostkey":
      multifactorlostkey(t.type);
      break;
    case "turnofficon":
      lpTurnOffIcon();
      break;
    case "of":
      of(t.a);
      break;
    default:
      return L("TS[" + g_toolstripid + "] -> BG : INVALIDMSG"), null;
  }
}
function alertmpwchange(e) {
  (g_notification_type = "mpwchange"), set_badge((g_notification_data = e)), drawIconAtRotation(0);
}
function omnikey_get_pin(e) {
  (g_omnikey_callback = e), openURL(getchromeurl("omnikey.html"));
}
function processCS(t, a, e) {
  switch ((void 0 !== a.url && (a.url = punycode.URLToASCII(a.url)), void 0 !== a.timestamp && update_cs_timestamp(t, a), a.cmd)) {
    case "set_possiblemax":
      var n = (a.max, a.max);
      g_possiblemax_tuple = n < 0 || 100 < n ? [] : [t, n];
      break;
    case "rsadecrypt":
      var n, W, r, i, o, i;
      lp_url_is_lastpass(a.url) &&
        ((n = a.sharerpublickeyhex),
        (W = a.sharekeyenchexsig),
        (r = a.sharekeyenchex),
        (i = o = i = ""),
        n && r
          ? ((i = lprsa_rsadecrypt(r)),
            sendCS(t, { cmd: "rsadecrypt", rc: (o = null == i || "" == i ? "rsaerror" : "ok"), sharekeyhex: i }))
          : sendCS(t, { cmd: "rsadecrypt", rc: (o = "rsaerror"), sharekeyhex: "" }));
      break;
    case "rsaencryptmultiple":
      var r, o, n;
      lp_url_is_lastpass(a.url) &&
        ((n = o = ""),
        (r = a.data)
          ? ((n = lprsa_encryptmultiple(r)),
            sendCS(t, { cmd: "rsaencryptmultiple", rc: (o = null == n || "" == n ? "rsaerror" : "ok"), dataout: n }))
          : sendCS(t, { cmd: "rsaencryptmultiple", rc: (o = "rsaerror"), dataout: "" }));
      break;
    case "ipcgetdata":
    case "plug2web":
      if (lp_url_is_lastpass(a.url)) {
        if (g_protect_plug2web && g_plug2web_last_initiated < lp_get_gmt_timestamp() - g_plug2web_timeout) break;
        g_plug2web_last_initiated = 0;
        var s,
          l = (s = lpParseUri(a.url)).directory,
          _ = s.file,
          i,
          r,
          n,
          r,
          c;
        if ("" != (l = l.replace(new RegExp("^/~[^/]*"), "")) && "/" != l && "/sso/" != l && "/sso/webroot/" != l && "/sso/aso/" != l) {
          lpdbg("error", "Keyplug2web request from invalid directory: " + l);
          break;
        }
        if (
          "" != (_ = _.replace(new RegExp("#"), "")) &&
          "index.php" != _ &&
          "misc_login.php" != _ &&
          "import.php" != _ &&
          "export.php" != _ &&
          "otp.php" != _ &&
          "frameset.php" != _ &&
          "frame_login.php" != _ &&
          "gettopost.php" != _ &&
          "misc_challenge.php" != _ &&
          "misc_challenge2.php" != _ &&
          "enterprise_users.php" != _ &&
          "acctsiframe.php" != _
        ) {
          lpdbg("error", "Keyplug2web request from invalid file: " + _);
          break;
        }
        null != g_username &&
          "" != g_username &&
          (a.username && "" != a.username && fix_username(a.username) != fix_username(g_username)
            ? loggedOut(!1, "plug2webA")
            : "ipcgetdata" == a.cmd
            ? ((i = JSON.parse(localStorage_getItem(SHA256(g_username) + "_passwordless_data") || null)),
              (r = null),
              (top || window).system &&
                ((n = (top || window).system.appInfo), (r = navigator.userAgent.indexOf(n.appName + "/" + n.appVersion))),
              (c = {
                cmd: "ipcgotdata",
                username: g_username,
                key: btoa(g_local_key),
                version: lpversion,
                identity: g_identity,
                iterations: get_key_iterations(g_username),
                passwordlessDeviceId: i ? i.deviceId : null,
                app: r
              }),
              void 0 !== a.callback ? a.callback(c) : sendCS(t, c, a.docnum))
            : (sendCS(
                t,
                {
                  cmd: "plug2web",
                  username: g_username,
                  key: AES.bin2hex(g_local_key),
                  version: lpversion,
                  identity: g_identity,
                  hash: g_local_hash,
                  g_cpwbot: g_cpwbot
                },
                a.docnum
              ),
              "gettopost.php" == _ && unlock_plug2web()));
      }
      break;
    case "openlogindialog":
      open_login();
      break;
    case "getversion":
      sendCS(
        t,
        { cmd: "getversion", version: lpversion, builddate: build_date, versionpre: lpversionpre, isloggedin: lploggedin ? 1 : 0 },
        a.docnum
      );
      break;
    case "setdefaultloginusername":
      set_default_login_username(a.username);
      break;
    case "getdebuginfo":
      var M = "";
      sendCS(t, { cmd: "getdebuginfo", info: "" }, a.docnum);
      break;
    case "web2plug":
      lp_url_is_lastpass(a.url) && web2plug(a);
      break;
    case "savesiteicon":
      (g_popupfill_save_data = {}), savesiteicon_real(t, a);
      break;
    case "logout":
    case "logoff":
      lp_url_is_lastpass(a.url) && lploggedin && loggedOut(!1, "logoff");
      break;
    case "login":
      lp_url_is_lastpass(a.url) && loginfromwebsite(a);
      break;
    case "trackFill":
      "fillInitiated" === a.event ? LegacyFillTracking.fillInitiated(a.sessionId) : LegacyFillTracking.fillModified(a.sessionId);
      break;
    case "infieldfillpw":
    case "fill":
    case "autofillaid":
    case "autologinaid":
      "infieldfillpw" === a.cmd && ((a.cmd = "autofillaid"), LegacyFillTracking.track("Password", "Infield V2")),
        void 0 !== a.docstate && update_cs_docstate(t, a),
        void 0 !== a.docflags && update_cs_docflags(t, a),
        ("autofillaid" !== a.cmd && "autologinaid" !== a.cmd) ||
          (sendLpImprove("sitelogin", { copy: 0, shareType: getShareType(a.aid), autologin: 0, source: a.source }, !0),
          (a.source = "notrack")),
        (a.topurl = g_ischrome ? gettaburl(e.sender.tab) : gettaburl(e.tab)),
        handleFill(t, a);
      break;
    case "checkgenpwfillforms":
      lploggedin && checkgenpwfillforms(t, a.url, a.hasff);
      break;
    case "neverautofill":
    case "neverpage":
    case "neverdomain":
      var g = g_ischrome ? gettaburl(e.sender.tab) : gettaburl(e.tab),
        F,
        p;
      handleNever(t, a),
        void 0 !== a.fromsave &&
          void 0 === a.frompopupiframe &&
          ((g_persistent_notifications[t] = null),
          (a.notificationdata = LPJSON.parse(a.notificationdata)),
          lpAddRejectedSite((F = a.notificationdata.username), (p = a.notificationdata.password), a.tld),
          clear_badge()),
        (hasNeverAutologin(g, lp_gettld_url(g)) ||
          hasNeverFormFill(g, lp_gettld_url(g)) ||
          hasNeverGenerate(g, lp_gettld_url(g)) ||
          hasNeverShowIcon(g, lp_gettld_url(g)) ||
          hasNeverSave(g, lp_gettld_url(g))) &&
          (handleGetNevers(t, g), closeclickables(t), (g_popupform_active[t] = 0), recheckpage(!(g_popupform_active_choose[t] = 0)));
      break;
    case "clearnotification":
      clear_badge(), (g_persistent_notifications[t] = null);
      break;
    case "notnow":
      var F, p;
      (a.notificationdata = LPJSON.parse(a.notificationdata)),
        lpAddRejectedSite((F = a.notificationdata.username), (p = a.notificationdata.password), a.tld),
        (g_persistent_notifications[t] = null),
        clear_badge();
      break;
    case "startsaveall":
      void 0 !== a.iframe && 1 == a.iframe && g_ischrome && (g_popupfill_save_data = { close: 1 }), saveall();
      break;
    case "savethesite":
      var d = a.notificationdata,
        u,
        f;
      void 0 !== a.iframe && 1 == a.iframe && g_popup_tabid_save
        ? (g_popup_tab_docnum[t] != g_CS_tops[t] &&
            (u = g_ischrome ? gettaburl(e.sender.tab) : gettaburl(e.tab)) &&
            0 < u.length &&
            (d.url = u),
          (g_popupfill_save_data = d))
        : (void 0 !== (d = "object" != typeof d ? LPJSON.parse(d) : d).formdata2 && parse_formdata(d),
          (d.addsite = 1),
          shouldUseSaveAll(d.url)
            ? ((g_saveall_url = d.url),
              (g_saveall_done = !0),
              (g_saveall_tabid = t),
              d.url.indexOf("streetscape.com") && (d.formdata = d.formdata.replace(/logon2/g, "logon1")),
              (g_saveall_formdata = d.formdata),
              handleSaveAll(g_saveall_tabid, { cmd: "saveall", addsite: 1, url: g_saveall_url, formdata: g_saveall_formdata }))
            : ((f = {
                defaultData: {
                  url: d.url,
                  unencryptedUsername: d.username,
                  password: d.password,
                  basic_auth: void 0 === d.realm ? "0" : "1",
                  realm_data: d.realm || "",
                  formdata: d.formdata
                },
                saveOptions: { saveFromSubmit: void 0 !== d.formdata, checkForReplacement: !0, source: "bar" }
              }),
              IntroTutorial.getState(function (e) {
                e.enabled && e.tile && (f.saveOptions.source += e.tile), LPPlatform.openTabDialog(e.enabled ? "siteTutorial" : "site", f);
              })),
          (g_persistent_notifications[t] = null),
          clear_badge());
      break;
    case "changepw":
      var d,
        m = 0,
        n =
          (void 0 !== (d = void 0 === (d = a.notificationdata).sitecount ? LPJSON.parse(a.notificationdata) : d).fromiframe &&
            (m = d.fromiframe),
          (g_didchangepw[SHA256(d.newpw + d.tld)] = new Date().getTime()),
          getsites(d.tld, !0)),
        q = "",
        b = 0,
        h = 0,
        J = 0,
        p;
      if ("" != d.oldpw && void 0 !== d.oldpw && null !== d.oldpw) {
        for (var v in n) {
          h++, (p = getpasswordfromacct(g_sites[v])) != d.oldpw ? (b++, (q += "," + v + ",")) : (J = v);
        }
        h - b == 1 ? ((d.singleaid = J), (d.sitecount = 1)) : h != b && (d.excludeid = q);
      }
      if (1 == d.sitecount) {
        var y = !0,
          w;
        for (w in g_sites) w == d.singleaid && g_sites[w].pwprotect && (y = !1);
        if (
          !check_for_frame_mismatch_ok(
            t,
            m,
            gs("Are you sure you would like to change your LastPass password for this site?"),
            "replace password"
          )
        )
          return;
        y
          ? changepw_wrapper(d)
          : security_prompt(function () {
              changepw_wrapper(d);
            });
      } else {
        var y = !0,
          G;
        for (G in n)
          if (g_sites[G].pwprotect) {
            y = !1;
            break;
          }
        if (
          !check_for_frame_mismatch_ok(
            t,
            m,
            gs("Are you sure you would like to change your LastPass password for this site?"),
            "replace password(s)"
          )
        )
          return;
        y
          ? openchangepw_wrapper(d)
          : security_prompt(function () {
              openchangepw_wrapper(d);
            });
      }
      (g_persistent_notifications[t] = null), clear_badge();
      break;
    case "save":
      var i = getcsinfo_top(t, a.docnum);
      i && a.docnum != i.docnum && (a.topdocurl = i.url), handleSave(t, a);
      break;
    case "saveall":
      void 0 === g_saveall_docnumsdone[a.docnum] &&
        ((g_saveall_docnumsdone[a.docnum] = 1), (g_saveall_formdata += a.formdata), ++g_saveall_framesdone >= g_saveall_framestotal) &&
        finish_saveall();
      break;
    case "clearcache":
      lp_url_is_lastpass(a.url) && clearCache(!0, !1, !1);
      break;
    case "getimportdata":
      if (lp_url_is_lastpass(a.url)) {
        var s,
          l = (s = lpParseUri(a.url)).directory,
          _ = s.file;
        if ("" != (l = l.replace(new RegExp("^/~[^/]*"), "")) && "/" != l && "/sso/" != l) break;
        if ("import.php" != _) break;
        var r = AES.ok(lpimportdata);
        sendCS(t, {
          cmd: "gotimportdata",
          source: lpimportsource,
          data: r ? lpimportdata : btoa(AES._utf8_encode(lpimportdata)),
          b64: r ? "0" : "1"
        }),
          (lpimportsource = lpimportdata = "");
      }
      break;
    case "initmpw":
      (g_lp_mpw_user = localStorage.LPMPU),
        (g_lp_iterations = localStorage[g_lp_mpw_user + "_key_iter"]),
        unprotect_data(localStorage[g_lp_mpw_user + "LPMPS"], !0, function (e) {
          "" === e && "" !== localStorage[g_lp_mpw_user + "LPMPS"] && (e = localStorage[g_lp_mpw_user + "LPMPS"]), (g_lp_mpw_salt = e);
        }),
        unprotect_data(localStorage[g_lp_mpw_user + "LPMPH"], !0, function (e) {
          "" === e && "" !== localStorage[g_lp_mpw_user + "LPMPH"] && (e = localStorage[g_lp_mpw_user + "LPMPH"]), (g_lp_mpw_hash = e);
        }),
        unprotect_data(localStorage[g_lp_mpw_user + "LPMPD"], !0, function (e) {
          g_lp_mpw_uid = e;
        }),
        unprotect_data(localStorage[g_lp_mpw_user + "LPMEX"], !0, function (e) {
          try {
            g_lp_mpw_exclude = JSON.parse(e);
          } catch (e) {
            g_lp_mpw_exclude = null;
          }
          null === g_lp_mpw_exclude && (g_lp_mpw_exclude = {});
        }),
        unprotect_data(localStorage[g_lp_mpw_user + "LPMDD"], !0, function (e) {
          try {
            g_lp_mpw_dedupe = JSON.parse(e);
          } catch (e) {
            g_lp_mpw_dedupe = null;
          }
          null === g_lp_mpw_dedupe && (g_lp_mpw_dedupe = {});
        }),
        (g_lp_mpw_nonag = 1 == localStorage[g_lp_mpw_user + "LPMNN"]);
      break;
    case "chkmpw":
      var V = function () {
        var e;
        (g_lp_mpw_bad_url = lp_gettld_url(a.url)),
          (!requirechangereuse() &&
            (g_lp_mpw_nonag || g_lp_mpw_bad_url in g_lp_mpw_exclude || hasNeverMPReuse(a.url, lp_gettld_url(a.url)))) ||
            ((g_requirechangereuse = requirechangereuse()),
            (e = { cmd: "notification", tld: g_lp_mpw_bad_url, type: "mpwchange" }),
            g_requirechangereuse &&
              (setTimeout(function () {
                loggedOut();
              }, 1e3),
              (e.msg = gs(
                "Security Alert: This site has the same password as your LastPass account. To protect all of your online accounts, you have been logged off from LastPass, and you will be required to change your LastPass Master Password next time you login."
              ))),
            alertmpwchange(e)),
          !reduxApp.getState().encryptedVaultDataSource.isEnterpriseUser ||
            !lploggedin ||
            (!requirechangereuse() && g_lp_mpw_bad_url in g_lp_mpw_dedupe) ||
            (logmpwreuse(g_lp_mpw_bad_url),
            (g_lp_mpw_dedupe[g_lp_mpw_bad_url] = 1),
            localStorage_setItem(g_lp_mpw_user + "LPMDD", JSON.stringify(g_lp_mpw_dedupe)));
      };
      lp_url_is_lastpass(a.url)
        ? !lp_url_is_lastpass(a.url) &&
          "undefined" != typeof g_lp_iterations &&
          g_username &&
          make_lp_key_hash_iterations(g_lp_mpw_salt, a.pw, g_lp_iterations, function (e, t) {
            t == g_lp_mpw_hash && V();
          })
        : reduxApp.checkMasterPasswordReuse(a.pw, V);
      break;
    case "recover":
      lp_url_is_lastpass(a.url) && ((g_is_recovery_login = !0), recover(t, a.url, a.username, a.docnum));
      break;
    case "launchautologin":
      lp_url_is_lastpass(a.url) && launchautologin(a.aid);
      break;
    case "setformfillsactivetab":
      void 0 !== t && addFormfillTab(t);
      break;
    case "getprefs":
      (g_username_vals[a.url] = a.username_val),
        void 0 !== a.docstate && update_cs_docstate(t, a),
        void 0 !== a.docflags && update_cs_docflags(t, a);
      var B = {};
      if (void 0 !== a.actionlastparts)
        for (var k = 0; k < a.actionlastparts.length; k++)
          void 0 !== lp_all_tlds[a.actionlastparts[k]] && (B[a.actionlastparts[k]] = lp_all_tlds[a.actionlastparts[k]]);
      setprefs(t, a.docnum, a.url, B);
      break;
    case "getuuid":
      getuuid(
        function (e) {
          sendCS(t, { cmd: "setuuid", uuid: e }, a.docnum);
        },
        a.username && "" != a.username ? SHA256(a.username) : null
      );
      break;
    case "setuuid":
      setuuid(a.uuid, a.username && "" != a.username ? SHA256(a.username) : null);
      break;
    case "clearuuid":
      clearuuid(a.username && "" != a.username ? SHA256(a.username) : null);
      break;
    case "setupmultifactor":
      var P;
      (a.tabid = t),
        a.username == g_username
          ? ((P = "type=" + LP.en(a.type) + "&username=" + LP.en(a.username)),
            lpMakeRequest(
              base_url + "setupmultifactor.php",
              P,
              lpSetupMultifactorResponse,
              function () {
                lpSetupMultifactorError(a);
              },
              a
            ))
          : sendCS(t, { cmd: "setupmultifactor", result: "error" }, a.docnum);
      break;
    case "setupsinglefactor":
      var P, S, x, c;
      lpdbg("singlefactor", "setting up single factor"),
        (a.tabid = t),
        a.username == g_username || "1" == a.silent
          ? ((P = "type=" + LP.en(a.type) + "&username=" + LP.en(a.username)),
            (S = !0),
            (x = function () {
              var e;
              lpdbg("singlefactor", "make_request_if: " + S),
                S
                  ? (lpdbg("singlefactor", "making request"),
                    lpMakeRequest(
                      base_url + "setupmultifactor.php",
                      P,
                      lpSetupMultifactorResponse,
                      function () {
                        lpSetupMultifactorError(a);
                      },
                      a
                    ))
                  : "1" != a.silent &&
                    ((e = { cmd: "setupsinglefactor", result: "error" }), void 0 !== a.callback ? a.callback(e) : sendCS(t, e, a.docnum));
            }),
            "omnikey" == a.type
              ? omnikey_get_pin(function (e) {
                  var t = "",
                    a = function () {
                      "" == t ? (S = !1) : (P += "&secret=" + encodeURIComponent(t)), x();
                    };
                  have_binary_function("omnikey_get_public_key")
                    ? call_binary_function("omnikey_get_public_key", e, function (e) {
                        (t = e), a();
                      })
                    : a();
                })
              : x())
          : "1" != a.silent &&
            ((c = { cmd: "setupsinglefactor", result: "error" }), void 0 !== a.callback ? a.callback(c) : sendCS(t, c, a.docnum));
      break;
    case "checkmultifactorsupport":
      var C = "",
        H = "error",
        A = function () {
          var e = { cmd: "checkmultifactorsupport", type: C, result: H };
          void 0 !== a.callback ? a.callback(e) : sendCS(t, e, a.docnum);
        },
        I;
      have_binary()
        ? ((I = new Array()),
          call_binary_function_if("nymi_supported", function (e) {
            e && (I[I.length] = "nymi"),
              call_binary_function_if("omnikey_supported", function (e) {
                e && (I[I.length] = "omnikey"),
                  call_binary_function_if("winbio_supported", function (e) {
                    e && (I[I.length] = "winbio"), 0 < I.length && ((C = I.join()), (H = "done")), A();
                  });
              });
          }))
        : ((g_is_win || g_is_mac || g_is_linux) &&
            (C =
              g_do_native_messaging && !g_have_native_messaging_permission && supports_native_messaging()
                ? "needs_native_messaging"
                : "nobinary"),
          A());
      break;
    case "verifymultifactor":
      var C;
      "winbio" == (C = a.eventdata1)
        ? have_binary_function("winbio_verify_user") &&
          call_binary_function(
            "winbio_verify_user",
            "",
            gs("Swipe finger"),
            gs("Swipe your finger on the fingerprint sensor"),
            gs("Cancel"),
            function (e) {
              sendCS(t, { cmd: "verifymultifactor", eventdata3: enc(e), eventdata2: "done" }, e.docnum);
            }
          )
        : "nymi" == C &&
          have_binary_function("nymi_validate") &&
          call_binary_function("nymi_validate", function (e) {
            sendCS(t, { cmd: "verifymultifactor", eventdata3: enc(e), eventdata2: "done" }, e.docnum);
          });
      break;
    case "multifactorauth":
      var T = "",
        A = function () {
          var e;
          sendCS(t, { cmd: "multifactorauth", multifactorresponse: T, result: "" != T ? "done" : "error" }, a.docnum);
        };
      if ("trueapi" == a.type) {
        var O = SHA256(SHA256(fix_username(a.username) + a.type));
        if (64 != O.length && have_binary_function("trueapi_get_hash"))
          return void call_binary_function("trueapi_get_hash", a.username, function (e) {
            "" != (O = e) && (T = SHA256(O + a.challenge)), A();
          });
        "" != O && (T = SHA256(O + a.challenge)), A();
      } else
        "omnikey" == a.type &&
          omnikey_get_pin(function (e) {
            have_binary_function("omnikey_decrypt")
              ? call_binary_function("omnikey_decrypt", a.challenge, e, function (e) {
                  (T = e), A();
                })
              : A();
          });
      break;
    case "multifactorreprompt":
      var j, z;
      security_prompt(
        function () {
          sendCS(t, { cmd: "multifactorauth", result: "done" }, a.docnum);
        },
        function () {
          sendCS(t, { cmd: "multifactorauth", result: "error" }, a.docnum);
        }
      );
      break;
    case "refresh":
      lp_url_is_lastpass(a.url) &&
        ("settings" == a.from ? lplogincheck("2" == a.type ? "websiterefreshrsa" : "websiterefresh") : get_accts());
      break;
    case "switchidentity":
      lp_url_is_lastpass(a.url) && switch_identity(a.iid, !0, !0);
      break;
    case "fillfieldconfirm":
      var n;
      (a.topurl = g_ischrome ? gettaburl(e.sender.tab) : gettaburl(e.tab)),
        write_history({
          cmd: "fillfieldconfirm",
          tabid: t,
          url: a.url,
          aid: a.aid,
          result: a.result,
          docnum: a.docnum,
          manualfill: a.manualfill,
          allowforce: a.allowforce,
          name: a.name,
          force_fillbest: a.force_fillbest
        }),
        fillfieldsconfirm(a),
        "FILL_F4" === a.originator && a.result && LPTabState.setLastFillSource("Autofill"),
        !0 === a.manualfill && 1 === a.from_iframe && LPTabState.setLastFillSource("Infield"),
        !0 === a.manualfill && "Icon Dropdown" === a.originator && LPTabState.setLastFillSource("Icon Dropdown"),
        !1 === a.manualfill && "FILL_F3" === a.originator && LPTabState.setLastFillSource("Vault"),
        !0 === a.manualfill && 1 !== a.from_iframe && "autofillaid" === a.originator && LPTabState.setLastFillSource("Context Menu"),
        reduxApp.getState().user.launchSiteTrackingEnabled &&
          a.result &&
          ((n = get_record(a.aid)), SiteLaunchObserver.startFillTracking(t, n));
      break;
    case "deleteaid":
      var m = void 0 !== a.fromiframe && a.fromiframe ? 1 : 0;
      deleteAid(
        a.aid,
        null,
        !1,
        !0,
        function () {
          recheckpage(!0);
        },
        null,
        m,
        t
      );
      break;
    case "savenotificationhtml":
      var i;
      void 0 === g_datacache[t]
        ? (g_datacache[t] = { html: a.text, extra: a.extra })
        : ((i = ""),
          null != t &&
            null != g_popupfill_hint[t] &&
            null != g_popupfill_last_active[t] &&
            null != g_popupfill_hint[t][g_popupfill_last_active[t]] &&
            (i = g_popupfill_hint[t][g_popupfill_last_active[t]]),
          (g_datacache[t] = { html: a.text, extra: a.extra, popuphtml: g_datacache[t].popuphtml, url: g_datacache[t].url, rowtype: i }),
          (g_popupforminput[t] = []),
          (g_popupform_active[t] = 0),
          (g_popupform_active_choose[t] = 0));
      break;
    case "savepopupfillhtml":
      var u = g_ischrome ? gettaburl(e.sender.tab) : gettaburl(e.tab);
      void 0 === g_datacache[t]
        ? (g_datacache[t] = { popuphtml: a.text, url: u, rowtype: a.rowtype })
        : (g_datacache[t] = { html: g_datacache[t].html, extra: g_datacache[t].extra, popuphtml: a.text, url: u, rowtype: a.rowtype }),
        (g_popupforminput[t] = []),
        (g_popupform_active[t] = 0),
        (g_popupform_active_choose[t] = 0);
      break;
    case "rebuildcontext":
      LPContextMenus.rebuildcontext(a.url, t);
      break;
    case "setbadgetext":
      setbadgetext(a.url);
      break;
    case "runhotkey":
      switch (a.hotkey) {
        case "generateHk":
          LPTabState.setLastFillSource("HotKey"), opengenpw("hotkey");
          break;
        case "recheckHk":
          recheckpage();
          break;
        case "searchHk":
          opensearch();
          break;
        case "nextHk":
          LPTabState.setLastFillSource("HotKey"), fillnext(1);
          break;
        case "prevHk":
          LPTabState.setLastFillSource("HotKey"), fillnext(-1);
          break;
        case "homeHk":
          openvault();
          break;
        case "submitHk":
          fillnext(0, !0);
          break;
        case "saveallHk":
          saveall();
          break;
        case "logoffHk":
          loggedOut(!1, "hotkey");
          break;
        case "defaultffidHk":
          LPTabState.setLastFillSource("HotKey"), fill_default_ffid("hotkey");
          break;
        case "openpopoverHk":
          buttonclick();
      }
      break;
    case "reporterror":
      lpReportError(a.e, "");
      break;
    case "recheckpage":
      recheckpage(!0);
      break;
    case "copyusername":
      var m = void 0 !== a.fromiframe && a.fromiframe ? 1 : 0;
      copyusername(a.aid, m, t);
      break;
    case "copypassword":
      var m = void 0 !== a.fromiframe && a.fromiframe ? 1 : 0;
      copypassword(a.aid, null, m, t), sendLpImprove("copypass", { action: "sitepassword", source: a.source });
      break;
    case "copyurl":
      var m = void 0 !== a.fromiframe && a.fromiframe ? 1 : 0;
      copyurl(a.aid, m, t);
      break;
    case "editprofile":
      var N = void 0 !== a.source && a.source ? a.source : "vault";
      editprofile(a.ffid, null, N);
      break;
    case "fillformffid":
      var l,
        l,
        s = null;
      if ((l = void 0 !== a.fromiframe ? a.fromiframe : 0) && !frame_and_topdoc_has_same_domain(t)) {
        if (
          (ftd_report_error(t, "fillform"),
          !lpConfirmYesNo(
            gs("Are you sure you would like your LastPass Form Fill information to be filled into the following site?") +
              "\n\n" +
              lp_gettld_url(ftd_get_frameparenturl(t))
          ))
        )
          return !1;
        s = !0;
      }
      var N = void 0 !== a.source && a.source ? a.source : "vault";
      fillform(a.ffid, null, null, null, l, s, N);
      break;
    case "addprofile":
      var N;
      addprofile(null, (N = void 0 !== a.source && a.source ? a.source : "vault"));
      break;
    case "addcreditcard":
      var N;
      addcreditcard(null, (N = void 0 !== a.source && a.source ? a.source : "vault"));
      break;
    case "clearforms":
      var N;
      clearforms((N = void 0 !== a.source && a.source ? a.source : "vault"));
      break;
    case "chooseprofilecc":
      var N;
      openchooseprofilecc((N = void 0 !== a.source && a.source ? a.source : "vault"));
      break;
    case "generate":
      opengenpw();
      break;
    case "fillcurrentaid":
      fillcurrent(a.aid);
      break;
    case "generatepasswordfound":
      g_checkgeneratepasswordcallback && (g_checkgeneratepasswordcallback(), (g_checkgeneratepasswordcallback = null));
      break;
    case "log":
      console_log(a.msg);
      break;
    case "disablebtn":
      var _ = "string" == typeof a.notificationdata ? JSON.parse(a.notificationdata) : a.notificationdata;
      openURL(base_url + _.multifactor_disable_url);
      break;
    case "createaccountbtn":
      g_hidecreate || LPPlatform.openTabDialog("createAccountSimple");
      break;
    case "tryagainbtn":
      open_login();
      break;
    case "custombtn":
      openURL(LPJSON.parse(a.notificationdata).customaction);
      break;
    case "feedbackbtn":
      openfeedback();
      break;
    case "starttrialbtn":
      start_trial();
      break;
    case "basicauthneverbtn":
      reduxApp.setExtensionPreferences({ basicauthnever: !0 });
      break;
    case "basicauthmoreinfobtn":
      have_binary() ? openURL(base_url + "chromebasicauth.php") : install_binary(!1, !0);
      break;
    case "gohome":
      var r = "",
        c,
        n;
      void 0 !== a.cmd2 && (r = "?cmd=" + encodeURIComponent(a.cmd2)),
        void 0 !== a.cmdparams && 0 < a.cmdparams.length && (r += "&" + a.cmdparams),
        g_isedge
          ? ((c = new Date().getTime()),
            ("undefined" == typeof g_last_gohome || 1e3 < c - g_last_gohome) &&
              ((g_last_gohome = c),
              openURL(getchromeurl(VAULT_PAGE + r), function () {
                chrome.tabs.remove(t);
              })))
          : g_ischrome && chrome.tabs.update(t, { url: getchromeurl(VAULT_PAGE + r) }),
        "" != a.email &&
          "" != a.sesameotp &&
          (lplog("LOGGING OFF : gohome"),
          lplogoff(!1, "gohome"),
          sesame_setotp(a.sesameotp),
          (n = { sesameusername: a.email }),
          LPPlatform.openTabDialog("loginSimple", n));
      break;
    case "lpshownotificationtop":
      sendCS(t, { cmd: "lpshownotification", type: a.type, data: a.data, do_40notify: g_40notify }, "all");
      break;
    case "getpopupfillsites":
      do_getpopupfillsites(t, a);
      break;
    case "setpopupfilllastactive":
      do_setpopupfilllastactive(t, a);
      break;
    case "addnevercrossdomain":
      lplog("XDOMAIN:Adding addnevercrossdomain url=" + a.url);
      var g = lpcanonizeUrl(a.url),
        P = "url=" + en(AES.url2hex(g));
      (P += "&type=3"),
        g_neverurls.neverautologins.push(g),
        lpMakeRequest(base_url + "add_never.php", P, null, null),
        g_local_accts_version++,
        rewritelocalfile();
      break;
    case "deletenevercrossdomain":
      var g,
        i =
          ("https://" == (g = a.url).substring(0, 8) ? (g = g.substring(8)) : "http://" == g.substring(0, 7) && (g = g.substring(7)),
          lplog("XDOMAIN:Deleting addnevercrossdomain url=" + g),
          new Array());
      (i.type = "neverautologins"), (i.url = g), deleteNever(i, !0);
      break;
    case "setpopupfillhint":
      do_setpopupfillhint(t, a);
      break;
    case "getisadmin":
      sendCS(t, { cmd: "gotisadmin", isadmin: g_isadmin }, a.docnum);
      break;
    case "getloggedin":
      sendCS(t, { cmd: "gotloggedin", lploggedin: lploggedin }, a.docnum);
      break;
    case "popupfillinputsave":
      do_popupfillinputsave(t, a);
      break;
    case "popupregister":
      do_popupregister(t, a);
      break;
    case "getnevers":
      handleGetNevers(t, a.url);
      break;
    case "popupfillresize":
      doPopupResize(t, a.width, a.height);
      break;
    case "popupfilliconnumber":
      var R, E;
      null == a && (E = R = -1),
        (R = null == a.sitenumber ? -1 : parseInt(a.sitenumber)),
        (E = null == a.formfillsnumber ? -1 : parseInt(a.formfillsnumber)),
        doPopupIconHint(t, R, E);
      break;
    case "popupfillinputfocusdecrement":
      do_popupfillinputfocusdecrement(t, a);
      break;
    case "popupfillinputfocusincrement":
      do_popupfillinputfocusincrement(t, a);
      break;
    case "popupfillinputfocuschoose":
      do_popupfillinputfocuschoose(t, a);
      break;
    case "popupfillinputmoreopen":
      do_popupfillinputmoreopen(t, a);
      break;
    case "popupfillinputshownavbar":
      do_popupfillinputshownavbar(t, a);
      break;
    case "lpimprove":
      sendLpImprove(a.event, a.properties);
      break;
    case "editaid":
      editAid(a.aid);
      break;
    case "openchooseprofilecc":
      var N;
      openchooseprofilecc((N = void 0 !== a.source && a.source ? a.source : "vault"));
      break;
    case "iframescrollenable":
      do_iframescrollenable(t);
      break;
    case "dologinaction":
      lploggedin || open_login();
      break;
    case "deleteformfill":
      var m = void 0 !== a.fromiframe && a.fromiframe ? 1 : 0,
        N = void 0 !== a.source && a.source ? a.source : "vault";
      deleteformfill(a.ffid, null, m, t, null, null, N);
      break;
    case "setboolpref":
      reduxApp.setExtensionPreference(a.name, a.value);
      break;
    case "request_native_messaging":
      openURL(getchromeurl("native_messaging.html?hidenever=1"));
      break;
    case "checkduo":
      void 0 !== a.uuid && a.uuid && "" != a.uuid && setuuid(a.uuid, g_username_hash),
        closecurrenttab("duo.php"),
        outofband_auth("checkduo" + encodeURIComponent(a.code), "");
      break;
    case "closepopuptoplevel":
      closepopuptoplevel_handler(t, a);
      break;
    case "createpopuptoplevelfromframe":
      createpopuptoplevel_handler(t, a);
      break;
    case "cpwbot_click_ack":
      g_cpwbot && CPWbot_bg && CPWbot_bg.push_event_queue("click_ack", t, a);
      break;
    case "cpwbot_fill_ack":
      g_cpwbot && CPWbot_bg && CPWbot_bg.push_event_queue("fill_ack", t, a);
      break;
    case "cpwbot_finish_ack":
      g_cpwbot &&
        CPWbot_bg &&
        (!g_v2engine || CPWbot_bg.in_bagration() || CPWbot_bg.get_okstate() || CPWbot_bg.get_failstate()
          ? CPWbot_bg.cpwbot_finish_ack_handler(t, a)
          : CPWbot_bg.push_event_queue("finish_ack", t, a));
      break;
    case "cpwbot_validate_state_result":
      g_cpwbot && CPWbot_bg && CPWbot_bg.push_event_queue("validate_response", t, a);
      break;
    case "ping_ack":
      ping_ack_handler(t, a);
      break;
    case "got_inner_text":
      got_inner_text_handler(t, a);
      break;
    case "got_inner_html":
      got_inner_html_handler(t, a);
      break;
    case "CS_unload":
      var u = a.docnum,
        g = a.url,
        l = a.docstate;
      write_history({ cmd: "CS_unload", docnum: u, tabid: t, docstate: l }),
        L("received CS_unload from [tabid:" + t + "][docnum:" + u + "] docstate=" + l + " url=" + g),
        null === u &&
          ((u = find_docnum_for_tabid_by_url(t, g)), L("CS_unload guessing assigned docnum to " + g + " is " + u), (a.docnum = u)),
        delete_cs_for_docnum(t, u),
        g_cpwbot &&
          CPWbot_bg &&
          (L("CS_unload clear score [tabid:" + t + "][docnum:" + u + "]"),
          CPWbot_bg.clear_frame_score(t, u, null),
          CPWbot_bg.push_event_queue("unload", t, a)),
        g_CS_tops && g_CS_tops[t] === u && clear_popup_heartbeat(t);
      break;
    case "cpwbot_js_ack":
      g_cpwbot && CPWbot_bg && (CPWbot_bg.js_ack_handler(t, a), CPWbot_bg.push_event_queue("js_ack", t, a));
      break;
    case "minimize_cpw_dialog":
      g_cpwbot && CPWbot_bg && (CPWbot_bg.cpw_dialog_minimize_state = 1);
      break;
    case "maximize_cpw_dialog":
      g_cpwbot && CPWbot_bg && (CPWbot_bg.cpw_dialog_minimize_state = 0);
      break;
    case "copytoclipboard":
      void 0 !== a.g_data && LPPlatform.copyToClipboard(a.g_data),
        a.action && sendLpImprove("copypass", { action: a.action, source: a.source });
      break;
    case "debug_checkpoint":
      debug_checkpoint_handler(t, a);
      break;
    case "support_pwchg":
      if (!lploggedin) return !1;
      sendCS(t, { cmd: "support_pwchg", support: g_cpwbot, answer_loc: a.answer_location }, g_CS_tops[t]);
      break;
    case "support_pwchg_batch":
      if (!lploggedin) return !1;
      sendCS(t, { cmd: "support_pwchg_batch", support: g_cpwbot_batch, answer_loc: a.answer_location }, g_CS_tops[t]);
      break;
    case "auto_pwchg":
      if (!lploggedin) return !1;
      g_cpwbot &&
        lp_url_is_lastpass(a.url) &&
        ((g_cpw_server_initiated_tabid = t), a.keep_in_frame ? start_pwchange_from_server(t, a.aid) : editAid(a.aid, null, !1, 1));
      break;
    case "auto_pwchg_batch_alive":
      if (!lploggedin) return !1;
      if ("undefined" == typeof g_batchpagealive) return;
      g_batchpagealive = !0;
      break;
    case "auto_pwchg_batch":
      if (!lploggedin) return !1;
      g_cpwfast = !0;
      var X = 1;
      if (g_cpwbot && lp_url_is_lastpass(a.url)) {
        var s,
          _,
          D =
            ((CPWbatch = CPWbatch || new CPWbatch_lib()),
            a.n && ((s = a.n), (_ = parseInt(s)), isNaN(_) || (CPWbatch.m_max_workers = _)),
            {}),
          U;
        try {
          D = JSON.parse(a.aids);
        } catch (e) {
          (D = {}), console.error("JSON error, auto_pwchg_batch: " + e);
        }
        for (U in D) D.hasOwnProperty(U) && CPWbatch.cpw_queue_push(D[U]);
        (g_cpw_server_initiated_tabid = t), a.keep_in_frame && CPWbatch.cpw_batch_begin();
      }
      break;
    case "kill_batch_background":
      if (!lploggedin) return !1;
      CPWbatch && CPWbatch.cpw_batch_end();
      break;
    case "auto_pwchg_hide":
      if (!lploggedin) return !1;
      g_cpwbot && CPWbatch && (end_pwchange_from_server(t, a.aid), CPWbatch.cpw_get_batchjob_state()) && CPWbatch.cpw_batch_end();
      break;
    case "auto_pwchg_status_update_ack":
      if (!lploggedin) return !1;
      g_cpwbot && CPWbatch && CPWbatch.cpw_set_status_update_ack();
      break;
    case "clear_popup_heartbeat":
      clear_popup_heartbeat(t);
      break;
    case "got_generate_pattern":
      var c = a.pattern_cooked,
        r = a.desc_cooked,
        n = "",
        i = "";
      c && (n = JSON.parse(c)), r && (i = JSON.parse(r)), (g_generate_pw_pattern_hints[t] = { pattern: n, desc: i });
      break;
    case "starttrial":
      start_trial() && sendCS(t, { cmd: "trialstarted" }, g_CS_tops[t]);
      break;
    case "from_selenium":
      var U;
      g_cpwbot &&
        (!g_is_selenium && CPWbot_bg && CPWbot_bg.userlog(0, "Detected Selenium"),
        write_history({ cmd: "SELENIUM", tabid: t, docnum: a.docnum, url: a.url, docstate: a.docstate, msg: "Selenium Bits: " + U }),
        (g_is_selenium = !0),
        void 0 !== a.bits) &&
        ((U = parseInt(a.bits)), isNaN(U) || (g_selenium_bits != U && CPWbot_bg.userlog(0, "Selenium Bits: " + U), (g_selenium_bits = U)));
      break;
    case "resizeIframe":
    case "moveIframe":
      t && (void 0 !== g_iframe_hack_src[t] ? sendCS(t, a, g_CS_tops[t]) : sendCS(t, a, "all"));
      break;
    case "get_plugin_capabilities":
      get_plugin_capabilities_handler(t);
      break;
    case "get_frame_loc":
      break;
    case "iframe_close_request":
      iframe_close_request_handler(t, a);
      break;
    case "savesite_dialog_changed":
      savesite_dialog_changed_handler(t, a);
      break;
    case "get_totp":
      get_totp(a.tld, t, null, a.name, a.id, a.className);
      break;
    case "usercacheset":
      g_usercache[a.tld] = a.username;
      break;
    case "ask_totp":
      g_ask_totp[t] = a.tld;
      break;
    case "storeaccountlinktoken":
      storeAccountLinkToken(a.token);
      break;
    case "setpasswordlessdata":
      setPasswordlessData(a.value);
      break;
    case "removepasswordlessdata":
      removePasswordlessData();
      break;
    case "start_passwordless_enrollment_setup":
      startPasswordlessEnrollmentSetup();
      break;
    default:
      return L("CS[" + t + "] -> BG : INVALIDMSG"), !1;
  }
  return !0;
}
var g_last_get_totp = {};
function get_totp(n, r, i, o, s, l) {
  var e;
  void 0 !== g_usercache[n] &&
    (!i && void 0 !== g_last_get_totp[n] && new Date().getTime() - g_last_get_totp[n] < 25e3
      ? lpReportError("skipped totp2push for domain=" + n + " because we already did it within the past 25 seconds")
      : ((g_last_get_totp[n] = new Date().getTime()),
        (e =
          "tld=" +
          encodeURIComponent(n) +
          "&usernamehash=" +
          encodeURIComponent(SHA256(g_usercache[n].trim().toLowerCase())) +
          "&token=" +
          encodeURIComponent(g_token)),
        i && (e += "&api_token=" + encodeURIComponent(i)),
        o && (e += "&name=" + encodeURIComponent(o)),
        s && (e += "&id=" + encodeURIComponent(s)),
        l && (e += "&className=" + encodeURIComponent(l)),
        lpMakeRequest(
          base_url + "get_totp.php",
          e,
          function (e) {
            var e, t, a, a;
            4 == e.readyState &&
              200 == e.status &&
              null != e.responseXML &&
              null != e.responseXML.documentElement &&
              0 < (e = e.responseXML.documentElement.getElementsByTagName("ok")).length &&
              ("allowed" == (t = e[0].getAttribute("status"))
                ? ((a = e[0].getAttribute("totp_code")), sendCS(r, { cmd: "got_totp", tld: n, totp_code: a }))
                : "poll" == t
                ? (i ||
                    ((a = !1),
                    (a =
                      !!(
                        (void 0 !== g_totp.domains &&
                          void 0 !== g_totp.domains.disabled &&
                          void 0 !== g_totp.domains.disabled.all &&
                          g_totp.domains.disabled.all) ||
                        (void 0 !== g_totp.domains &&
                          void 0 !== g_totp.domains.disabled &&
                          void 0 !== g_totp.domains.disabled[n] &&
                          g_totp.domains.disabled[n])
                      ) || a)) ||
                    sendCS(r, { cmd: "getting_totp", tld: n }),
                  get_totp(n, r, e[0].getAttribute("token"), o, s, l))
                : "declined" != t || i || sendCS(r, { cmd: "set_totp_form", tld: n }));
          },
          function () {}
        )));
}
function open_login(r, t) {
  getsinglefactortype(function (n) {
    if (!t && "trueapi" == n && have_binary_function("trueapi_default_login_exists"))
      call_binary_function("trueapi_default_login_exists", function (e) {
        e
          ? call_binary_function("trueapi_get_default_login", function (e) {
              if ("" != e) {
                var e = e.split("|"),
                  t,
                  a,
                  e;
                if (3 == e.length)
                  return (
                    (t = atob(e[0])),
                    (a = atob(e[1])),
                    (e = atob(e[2])),
                    multifactor_setdata("password_offline", e),
                    multifactor_setdata("type", n),
                    (g_manual_login = !0),
                    void LP_do_login(t, a, null, null, !0)
                  );
              }
              open_login(r, !0);
            })
          : open_login(r, !0);
      });
    else {
      var e;
      if (!t && (LPISUPEK || "vtapi" == n))
        if (have_binary_function("lpvt_verify_user"))
          return (
            (e = encodeURIComponent(lpCreatePass(8, 1, 1, 1, 0, 1, 0, 1))),
            void call_binary_function(
              "lpvt_verify_user",
              e,
              gs("Swipe finger"),
              gs("Swipe your finger on the fingerprint sensor"),
              gs("Cancel"),
              gs("Swipe current user's finger"),
              function (e) {
                if ("" != e) {
                  var e = e.split("|");
                  if (2 == e.length) return (g_manual_login = !0), void LP_do_login(decodeURIComponent(e[0]), decodeURIComponent(e[1]));
                }
                LPISUPEK && LPISLOC
                  ? call_binary_function("lpvt_has_data", function (e) {
                      lpshowError(
                        e
                          ? gs("LoginError")
                          : gs(
                              "Before you can use LastPass, you must first connect your fingerprint reader and enroll one or more fingers."
                            ),
                        !1,
                        !0
                      );
                    })
                  : open_login(r, !0);
              }
            )
          );
      if (!t && "validity" == n && have_binary_function("validity_verify_user"))
        call_binary_function(
          "validity_verify_user",
          "",
          gs("Swipe finger"),
          gs("Swipe your finger on the fingerprint sensor"),
          gs("Cancel"),
          function (e) {
            if ("" != e) {
              var e = e.split("|");
              if (2 == e.length) return (g_manual_login = !0), void LP_do_login(decodeURIComponent(e[0]), decodeURIComponent(e[1]));
            }
            open_login(r, !0);
          }
        );
      else if (!t && "winbio" == n && have_binary_function("winbio_verify_user"))
        call_binary_function(
          "winbio_verify_user",
          "",
          gs("Swipe finger"),
          gs("Swipe your finger on the fingerprint sensor"),
          gs("Cancel"),
          function (e) {
            if ("" != e) {
              var e = e.split("|");
              if (2 == e.length) return (g_manual_login = !0), void LP_do_login(decodeURIComponent(e[0]), decodeURIComponent(e[1]));
            }
            open_login(r, !0);
          }
        );
      else if (!t && "nymi" == n && have_binary_function("nymi_validate"))
        call_binary_function("nymi_validate", function (e) {
          if ("" != e) {
            var e = e.split("|");
            if (2 == e.length) return (g_manual_login = !0), void LP_do_login(decodeURIComponent(e[0]), decodeURIComponent(e[1]));
          }
          open_login(r, !0);
        });
      else {
        try {
          if (shouldOpenLogin()) return void LPPlatform.openLoginPopover();
        } catch (e) {
          g_can_open_popover = !1;
        }
        LPPlatform.openLogin();
      }
    }
  });
}
function open_login_panel() {
  shouldOpenLogin() ? LPPlatform.openLoginPopover() : null != g_badgedata && showFirefoxPanel(), LPPlatform.openLoginPopover();
}
function closePop() {
  LPPlatform.closePopovers();
}
function fillnext(r, i) {
  lploggedin
    ? get_selected_tab(null, function (e) {
        var t = getBG(),
          a = (t.setcurrenttabid(gettabid(e)), t.setcurrenturl(gettaburl(e)), getmatchingsites(1));
        if (0 < a.length) {
          for (var n = 0; n < a.length && a[n].aid != g_curr_fill_aid; n++);
          (g_curr_fill_aid = (
            n == a.length
              ? -1 == r
                ? a[a.length - 1]
                : a[0]
              : (1 == r ? ++n >= a.length && (n = 0) : -1 == r && --n < 0 && (n = a.length - 1), a[n])
          ).aid),
            i
              ? fill({
                  tabid: getcurrenttabid(),
                  acct: g_sites[g_curr_fill_aid],
                  docid: null,
                  submit: !0,
                  doconfirm: !1,
                  docnum: "all",
                  allowforce: !1,
                  skip_pwprotect: !1,
                  manualfill: !0,
                  desc: "fill_A1",
                  source: "notrack"
                })
              : fillaid(g_curr_fill_aid, !1, "notrack"),
            sendLpImprove(
              "sitelogin",
              {
                shareType: getShareType(g_curr_fill_aid),
                copy: 0,
                autologin: g_sites[g_curr_fill_aid].autologin ? 1 : 0,
                source: "hotkey"
              },
              !0
            );
        }
      })
    : open_login();
}
function getInt(e) {
  var e = parseInt(e);
  return (e = "" != e && NaN != e ? e : 0);
}
function loggedIn(e, t, a) {
  var t, a, a;
  L("BG : loggedIn"),
    (lploggedin = !0),
    t || (server_tries = 0),
    reduxApp &&
      reduxApp.login(
        {
          username: g_username,
          csrf: g_token,
          key: g_local_key,
          uid: g_uid,
          type: g_account_type,
          enterpriseVersion: g_enterprise_version,
          iterations: get_key_iterations(g_username)
        },
        iconsversion,
        sendchallengescore,
        secondary_onboarding_skill_list,
        a
      ),
    lpReadAllPrefs(postlogin),
    "undefined" != typeof localStorage &&
      ((t = localStorage_getItem(db_prepend("lastversion"))),
      (a = !1),
      (a = localStorage_setItem(db_prepend("lastversion"), lpversion) ? a : !0) || checkOpenUpgradePage(t),
      (a = opendb()),
      createSavedLoginsTable(a),
      a &&
        (g_indexeddb
          ? (a
              .transaction("LastPassSavedLogins2", "readonly")
              .objectStore("LastPassSavedLogins2")
              .openCursor(IDBKeyRange.only(g_username)).onsuccess = function (e) {
              e.target.result && "" != e.target.result.value.password && (g_master_password_saved = !0);
            })
          : a.transaction(function (e) {
              e.executeSql(
                "SELECT * FROM LastPassSavedLogins2 WHERE username = ? AND password != ''",
                [g_username],
                function (e, t) {
                  0 < t.rows.length && (g_master_password_saved = !0);
                },
                function (e, t) {}
              );
            })),
      e &&
        setTimeout(function () {
          refresh_windows();
        }, 500),
      "undefined" != typeof CPWbot_bg_lib && (CPWbot_bg = CPWbot_bg || new CPWbot_bg_lib()),
      drawIconAtRotation(0),
      sendTS({ cmd: "login" }),
      Topics.get(Topics.LOGIN).publish(),
      LPTabs.get({ interface: "ContentScriptInterface" }).forEach(function (e) {
        e.forEachWindow({
          each: function (e) {
            void 0 !== e.Topics && e.Topics.publish(Topics.LOGIN);
          }
        });
      }));
}
function checkOpenUpgradePage(e) {
  if (g_showupgradenotes) {
    var t = e,
      a = lpversion,
      n = 0,
      r = 0,
      i = 0,
      o = 0,
      s = 0,
      l = 0;
    if (t)
      for (var _ = t.split("."), c = 0; c < _.length; c++)
        0 == c ? (n = parseInt(_[c])) : 1 == c ? (r = parseInt(_[c])) : 2 == c && (i = parseInt(_[c]));
    for (var g = a.split("."), c = 0; c < g.length; c++)
      0 == c ? (o = parseInt(g[c])) : 1 == c ? (s = parseInt(g[c])) : 2 == c && (l = parseInt(g[c]));
    t &&
      "null" != t &&
      n < o &&
      (L("Lastversion: " + e + " this version: " + lpversion + " amaj:" + n + " aminor:" + r + " bmaj:" + o + " bminor:" + s),
      openURL(base_url + "upgrade.php?ver=" + lpversion + "&lastver=" + e + "&type=" + encodeURIComponent(get_method()) + "&upgrade=" + t));
  }
}
function get_searchNotesPref() {
  return !!reduxApp.getPreference("searchNotes");
}
function postlogin() {
  var e = new Date().getTime();
  (g_lastpollcheck = lastlogin = e),
    reduxApp.getPreference("logoffWhenCloseBrowser") &&
      0 < reduxApp.getPreference("logoffWhenCloseBrowserVal") &&
      reduxApp.setExtensionPreferences({ lastpollcheck: g_lastpollcheck }),
    drawIconAtRotation(0),
    g_offer_popupfill &&
      ((do_experimental_popupfill = reduxApp.getState().settings.extensionPreferences.usepopupfill),
      reduxApp.getPreference("changedpopupfill") ||
        reduxApp.setExtensionPreferences({
          showFormFillNotifications: !1,
          showGenerateNotifications: !1,
          showNotificationsAfterClick: !1,
          changedpopupfill: !0
        }));
}
function lplogin() {
  open_login();
}
function lplogoff(e, t) {
  var a;
  loggedOut(!1, void 0 !== t ? t : "lplogoff");
}
function lplogoff_if() {
  lploggedin && loggedOut(!1, "lplogoff_if");
}
var rotation = 0,
  numrotations = 0,
  currrotation = 0;
function animateFlip() {
  1 <= (rotation += 1 / 36) && --rotation,
    ++currrotation >= numrotations
      ? (rotation = 0)
      : setTimeout(function () {
          animateFlip();
        }, 10),
    drawIconAtRotation(rotation);
}
function drawIconAtRotation() {
  g_issafari_appext && LPPlatform.updateToolbarItemIcon();
}
function ease(e) {
  return (1 - Math.sin(Math.PI / 2 + e * Math.PI)) / 2;
}
function lpAddRejectedSite(e, t, a) {
  var n = new lpobjrejectedaddsite();
  (n.username = e),
    (n.encryptedPassword = enc(t)),
    (n.tld = a),
    (n.rejectedTime = lp_get_gmt_timestamp()),
    (g_rejectedaddsites[g_rejectedaddsites.length] = n);
}
function loggedOut(e, t) {
  L("BG : loggedOut from=" + t);
  var t = reduxApp.getState().settings.extensionPreferences.clearfilledfieldsonlogoff,
    a =
      (reduxApp && reduxApp.logout(),
      get_all_windows({ populate: !(g_manual_login = !1) }, function (e) {
        for (var t = 0; t < e.length; t++)
          for (var a = 0; a < get_tabs_length(e[t]); a++) {
            var n = gettaburl(get_tabs(e[t])[a]);
            n &&
              lp_url_is_lastpassext(n) &&
              -1 == n.indexOf(VAULT_PAGE) &&
              -1 == n.indexOf("native_messaging.html") &&
              -1 == n.indexOf("dialog=login") &&
              -1 == n.indexOf("dialog=createAccountSimple") &&
              close_tab(get_tabs(e[t])[a]);
          }
      }),
      lploggedin && (LPPlatform.closePopovers(), lpnp_notify("logout")),
      LPNotifications.closeNotifications(),
      closeallnotifications(),
      closeallclickables(),
      yubikey_cleardata(),
      googleauth_cleardata(),
      outofband_cleardata(),
      securityquestion_cleardata(),
      sesame_cleardata(),
      grid_cleardata(),
      multifactor_cleardata(),
      !1),
    a,
    n;
  lploggedin || (a = !0),
    (lploggedin = !1),
    (last_idle_check = 0),
    (g_local_hash = lphash = g_local_key_hex = g_local_key = null),
    (g_username = lpusername = g_local_key_hash = null),
    (lpusername_hash = g_username_hash = lphash = null),
    (lpmpstrength = null),
    (lpsendmpstrength = sendchallengescore = !1),
    (g_uid = lpuid = null),
    (g_pwdeckey = null),
    (g_sites = {}),
    (g_tlds = {}),
    (g_securenotes = new Array()),
    (g_applications = new Array()),
    (g_prompts = new Array()),
    (g_icons = new Array()),
    (g_bigicons = {}),
    (g_icons_length = 0),
    (g_server_accts_version = g_local_accts_version = g_disablepwalerts = -1),
    (g_identities = new Array()),
    (g_pendings = new Array()),
    (g_shareeautopushes = new Array()),
    (g_formfills = new Array()),
    (g_emer_sharees = []),
    (g_emer_sharers = []),
    (g_pending_shares = []),
    (g_totp = {}),
    (g_neverurls = new Array()),
    (g_equivalentdomains = {}),
    (g_strictequivalentdomains = {}),
    (g_urlrules = new Array()),
    (g_identity = ""),
    (g_showcredmon = g_iscompanyadmin = g_isadmin = g_loglogins = !(g_prefoverrides = {})),
    (g_launches = new Array()),
    (g_fillfieldsmatches = new Array()),
    (g_fillfieldsmatchescurridx = new Array()),
    (lp_phpsessid = ""),
    (g_premium_trial = 0),
    (g_enterprisemodel = 0),
    (g_is_company_subscription_expired = null),
    (g_loginstarted = g_is_legacy_premium = g_loggedinonline = g_loggedinoffline = !1),
    lpReadAllPrefs(),
    (rotation = 0),
    drawIconAtRotation(),
    null != g_badgedata &&
      ("notification" != g_badgedata.cmd || ("error" != g_badgedata.type && "mpwchange" != g_badgedata.type)) &&
      clear_badge(),
    rsa_clearvars(),
    rsa_setpendingsharests(!0),
    (g_genpws = new Array()),
    GenPassHistory.clear(),
    (g_master_password_saved = !1),
    (g_persistent_notifications = new Array()),
    (g_rejectedaddsites = new Array()),
    (g_shares = new Array()),
    (lpdisableoffline = !(g_datacache = [])),
    (countryfromip = ""),
    (g_flags = {}),
    (g_privkeyattempts = 0),
    sendTS({ cmd: "logoff" }),
    (g_generate_pw_pattern_hints = {}),
    (g_popupfill_hint = {}),
    (g_popupfill_hint_generate = {}),
    (g_popupfill_hint_save = {}),
    (g_popupfill_hint_type = {}),
    (g_popupfill_last_active = {}),
    (g_popupfill_last_active_fieldid = {}),
    (g_popupfill_last_active_fieldtype = {}),
    (g_popup_tab_docnum = []),
    (g_popup_url_by_tabid = []),
    (g_iframe_hack_src = []),
    (g_pending_pw_change = {}),
    (OVERRIDENOREFRESH = !0),
    (secondary_onboarding_skill_list = ""),
    a ||
      setTimeout(function () {
        refresh_windows(OVERRIDENOREFRESH);
      }, 500),
    e
      ? reduxApp && reduxApp.webLoginRedirect()
      : ((a = ""),
        g_token && g_token.length && (a += "&token=" + encodeURIComponent(g_token)),
        (n = new XMLHttpRequest()).open("POST", base_url + "logout.php?chrome_plugin=1&noredirect=1"),
        n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
        (n.onload = function () {
          var e, e, a;
          n &&
          n.response &&
          ((e = JSON.parse(n.response)), Array.isArray(e.singleLogoutUrls)) &&
          ((e = e.singleLogoutUrls.filter(function (t) {
            try {
              return new URL(t), !0;
            } catch (e) {
              return lpReportError("invalid logout url recieved from server: " + t), !1;
            }
          })),
          0 < (a = e.length))
            ? e.forEach(function (e) {
                var t = new XMLHttpRequest();
                t.open("GET", e),
                  (t.onload =
                    t.onerror =
                    t.onabort =
                      function () {
                        0 === --a && reduxApp && reduxApp.webLoginRedirect();
                      }),
                  t.send();
              })
            : reduxApp && reduxApp.webLoginRedirect();
        }),
        n.send(a)),
    (g_token = ""),
    LPServer.clearCSRFToken(),
    "undefined" != typeof g_oldpbkdf2 && (g_oldpbkdf2 = 0),
    update_menus(!0),
    t && clear_all_filled_fields(),
    (g_fillfield_confirm_perfield = {}),
    (g_fillfield_did_fillbest = {}),
    (g_popupfill_hint = {}),
    (g_popupfill_hint_generate = {}),
    (g_popupfill_hint_save = {}),
    (g_popupfill_last_active = {}),
    (g_popupfill_last_active_fieldid = {}),
    (g_popupfill_last_active_fieldtype = {}),
    (g_popupfill_save_data = {}),
    (g_popupforminput = []),
    (g_pendo_jwt_token = void 0),
    (g_pendo_signing_key_name = void 0),
    g_cpwbot && CPWbot_bg && "object" == typeof CPWbot_bg && (CPWbot_bg.logout(), (CPWbot_bg = null)),
    (g_cpw_server_initiated_tabid = null),
    (g_cpw_aid_queue = []),
    g_cpwbot && CPWbatch && "object" == typeof CPWbatch && (CPWbatch.cpw_set_batchjob_state(F_NONE), CPWbatch.logout(), (CPWbatch = null)),
    cleardeccache(),
    clear_badge_text(),
    shutdown_push_listener(),
    (g_usercache = {}),
    Topics.get(Topics.CLEAR_DATA).publish(),
    LPTabs.get({ interface: "ContentScriptInterface" }).forEach(function (e) {
      e.forEachWindow({
        each: function (e) {
          void 0 !== e.Topics && e.Topics.publish(Topics.CLEAR_DATA);
        }
      });
    });
}
function getmenurowheight() {
  return 20;
}
function getmatchingsitesheight(e) {
  var e = e.length * getmenurowheight();
  return (e = 200 < e ? 200 : e);
}
function getmenuheight(e, t, a, n) {
  var r = 15,
    i =
      ((reduxApp.getState().encryptedVaultDataSource.premiumExp > lp_get_local_timestamp() ||
        reduxApp.getState().encryptedVaultDataSource.isEnterpriseUser) &&
        --r,
      getmenurowheight()),
    r = r * i,
    e;
  return (
    (void 0 === e || e) && 0 < (e = getmatchingsites()).length && (r = (r += i) + getmatchingsitesheight(e)),
    (void 0 !== t && !t) || (r += 32),
    (void 0 !== a && !a) || (r += 15),
    n && (r -= 50),
    r
  );
}
function contextmenufill(e) {
  g_sites[e] ? fillaid(e, !1, "context") : fillitem(e, !1, null, !1, !1, "context");
}
function fillaid(e, t, a) {
  var n = getcurrenttabid(),
    r = "Icon Dropdown";
  if (!g_sites || !lploggedin) return !1;
  write_history({ cmd: "fillaid", aid: e });
  var i = !!t,
    t = ((g_last_launch[e] = new Date().getTime()), g_sites[e]),
    n =
      (void 0 !== t &&
        "autofill" !== a &&
        "notrack" !== a &&
        (sendLpImprove("sitelogin", { shareType: getShareType(e), copy: 0, autologin: t.autologin, source: a || "hotkey" }, !0), a !== r) &&
        (a = "notrack"),
      getcurrenttabid()),
    t;
  return void 0 !== t && t && "1" == t.basic_auth
    ? (setTimeout(function () {
        fill({
          tabid: n,
          acct: g_sites[e],
          docid: null,
          submit: !1,
          doconfirm: !0,
          docnum: "all",
          allowforce: !0,
          skip_pwprotect: i,
          manualfill: !0,
          desc: "fill_A2",
          source: a
        });
      }, 100),
      !0)
    : ((t = a === r ? a : "fill_A3"),
      fill({
        tabid: n,
        acct: g_sites[e],
        docid: null,
        submit: !1,
        doconfirm: !0,
        docnum: "all",
        allowforce: !0,
        skip_pwprotect: i,
        manualfill: !0,
        desc: t,
        source: a
      }));
}
function setcurrenturl(e) {
  g_currenturl = e;
}
function setcurrenttabid(e) {
  g_currenttabid = e;
}
function addFormfillTab(e) {
  g_tabsWithForms.includes(e) || g_tabsWithForms.unshift(e);
  var e = LPTabs.get({ tabID: e });
  e &&
    e.forEachWindow({
      each: function (e) {
        e.Topics.publish(Topics.MATCHING_ITEMS_CHANGED, getmatchingsites(!1, !0, !1));
      }
    });
}
function removeFormfillTab(e) {
  -1 < g_tabsWithForms.indexOf(e) && g_tabsWithForms.splice(g_tabsWithForms.indexOf(e), 1);
}
function getmatchingsites(e, t, a) {
  if (reduxApp.getState().settings.isRestricted) return [];
  if (reduxApp.getState().settings.features.web_client_fill)
    return reduxApp.getToolbarFillRecords().map(function (e) {
      var t = "Password" === e.recordType ? "account" : "note";
      return { aid: e.id, type: t };
    });
  var n = getcurrenturl(),
    r = lpcanonizeUrl(n),
    i = getsites(n),
    o,
    s,
    s,
    i = reorderOnURL(i, n, t, a),
    l = [],
    _;
  for (o in i)
    (s = i[o].aid),
      void 0 !== g_sites[s] &&
        ((s = g_sites[s]), l.push({ aid: s.aid, name: s.name, username: getusernamefromacct(s), fiid: s.fiid, type: "account" }));
  return (
    g_tabsWithForms.includes(getcurrenttabid()) &&
      reduxApp.getState().settings.features.omar_ia &&
      Object.keys(g_securenotes).forEach(function (e) {
        var e = g_securenotes[e],
          t = e.notetype;
        isFillableNoteType(t) && l.push({ aid: e.aid, name: e.name, fiid: e.fiid, type: "note" });
      }),
    l
  );
}
var isFillableNoteType = function (e) {
  if (!e) return !1;
  switch (e) {
    case "Credit Card":
    case "Address":
    case "Bank Account":
    case "Social Security":
      return !0;
    default:
      var t = e.match(/^Custom_(\d+)$/);
      return t && 2 === t.length;
  }
};
function getnevers(e) {
  var e = e || getcurrenturl(),
    t = lp_gettld_url(e),
    a = [];
  return (
    getneverfor(a, "neveraccounts", e, t),
    getneverfor(a, "neverautologins", e, t),
    getneverfor(a, "neverformfills", e, t),
    getneverfor(a, "nevergenerates", e, t),
    getneverfor(a, "neverautofills", e, t),
    getneverfor(a, "nevershowicons", e, t),
    getneverfor(a, "neverenablelp", e, t),
    a
  );
}
function getneverfor(e, t, a, n) {
  var r = lpcanonizeUrl(a);
  if (g_neverurls[t] && 0 < g_neverurls[t].length)
    for (var i = 0; g_neverurls[t] && i < g_neverurls[t].length; i++) {
      var o = g_neverurls[t][i];
      o === r
        ? e.push({ type: t, url: o, domain: 0 })
        : o === n
        ? e.push({ type: t, url: o, domain: 1 })
        : hasNever(a, n, !1, t) && e.push({ type: t, url: r, domain: 0 });
    }
}
function getStrictMatchingEquivalentDomains(e) {
  try {
    var t = new URL(e),
      a = {},
      n;
    for (n in g_strictequivalentdomains)
      g_strictequivalentdomains.hasOwnProperty(n) &&
        -1 < g_strictequivalentdomains[n].indexOf(t.hostname) &&
        g_strictequivalentdomains[n].forEach(function (e) {
          a[e] = !0;
        });
    return Object.keys(a);
  } catch (e) {
    return [];
  }
}
function getsites(e, t, a) {
  var n = lp_gettld_url(e),
    r,
    i = {},
    o;
  if (null != n && null != g_equivalentdomains) {
    if (
      (void 0 !== g_equivalentdomains[n]
        ? ((o = g_equivalentdomains[n]), void 0 !== g_equivalentdomains[o] && (r = g_equivalentdomains[o]))
        : (r = [n]),
      void 0 !== r)
    )
      for (var s = 0; s < r.length; s++)
        if (void 0 !== g_tlds[r[s]])
          for (var l in g_tlds[r[s]])
            if (void 0 !== g_sites[l]) {
              if (t) {
                if (g_sites[l].genpw) continue;
                var _ = issharedfolder(g_shares, g_sites[l].group);
                if (!checkreadonly(_, !0)) continue;
              }
              !check_ident_aid(g_sites[l].aid) ||
                (a && g_sites[l].aid == a) ||
                (a && -1 != a.indexOf("," + g_sites[l].aid + ",")) ||
                (i[l] = g_tlds[r[s]][l]);
            }
    if (e && e.includes("://")) {
      var c = getStrictMatchingEquivalentDomains(e),
        g;
      for (g in g_sites) g_sites.hasOwnProperty(g) && isStrictDomainMatch(g_sites[g].url, c) && (i[g] = !0);
    }
  }
  return i;
}
function accthaspassword(e) {
  if (!e) return !1;
  if (e.save_all) {
    for (var t = 0; t < e.fields.length; t++) if ("password" == e.fields[t].type && "" != e.fields[t].value) return !0;
    return !1;
  }
  return "" != e.password;
}
function lp_url_is_lastpass(e, t) {
  var t, a;
  return (
    !(null == e || (g_skipurltest && t)) &&
    ((t = /^https:\/\/([a-z0-9-]+\.)?lastpass\.(eu|com)\//i),
    0 == e.indexOf(base_url) ||
      0 == e.indexOf("https://lastpass.com/") ||
      ("undefined" != typeof g_loosebasematching ? ((a = lp_gettld_url(e)), new RegExp(a + "/$").test(base_url)) : t.test(e)))
  );
}
function lp_url_is_lastpassext(e) {
  var t = getchromeurl("", !0);
  return !(!e || 0 != e.indexOf(t));
}
function openvault(e, t, a, n) {
  var r, i;
  e || lploggedin
    ? ((r = "" == g_vaulturloverride ? getchromeurl(VAULT_PAGE) : g_vaulturloverride),
      t && (r += (-1 != r.indexOf("?") ? "&" : "?") + "cmd=" + t),
      e
        ? ((i = "function" == typeof n ? n : a),
          get_all_windows({ populate: !0 }, function (e) {
            for (var t = 0, a; t < e.length; t++)
              for (var n = 0; n < get_tabs_length(e[t]); n++) {
                if (gettaburl(get_tabs(e[t])[n]).split("?")[0] === r) return;
              }
            openURL(r, i);
          }))
        : openURL(r, a))
    : open_login();
}
function openURLIfNotOpen(l) {
  get_all_windows({ populate: !0 }, function (e) {
    for (var t = new URL(l), a = t.hostname + t.pathname, n = 0; n < e.length; n++)
      for (var r = 0; r < get_tabs_length(e[n]); r++) {
        var i = gettaburl(get_tabs(e[n])[r]),
          o = new URL(i);
        if (a === o.hostname + o.pathname) {
          var s = !0;
          if (
            (t.searchParams.forEach(function (e, t) {
              (o.searchParams.has(t) && o.searchParams.get(t) === e) || (s = !1);
            }),
            s)
          )
            return;
        }
      }
    openURL(l);
  });
}
function openimport(e) {
  var t, e, e;
  lploggedin &&
    (reduxApp && reduxApp.getState().settings.features.import_passwords_in_vault
      ? openvault(!1, "import")
      : ((t = ""),
        e && ((t = "&source=" + e), sendLpImprove("import_page_open", { source: e })),
        unlock_plug2web(),
        (e = "function" == typeof LPPlatform.isSPA && LPPlatform.isSPA()),
        (e = base_url + "import.php?" + (e ? "" : "hasplugin=" + LP.en(lpversion)) + t + get_identity_param()),
        openURL((e = lppassusernamehash ? base_url + "gettopost.php?posturl=" + LP.en(e) : e))));
}
function doimport(t, a) {
  var n = function (e) {
    var e;
    "" != (lpimportdata = e) && null != lpimportdata
      ? ((lpimportsource = t),
        unlock_plug2web(),
        (e = base_url + "import.php?fromplugin=1" + get_identity_param()),
        openURL((e = lppassusernamehash ? base_url + "gettopost.php?posturl=" + LP.en(e) : e)))
      : a && alertfrombg(gs("That file is missing or empty.  Please enter the full path of the file to import."));
  };
  "wlan" == t
    ? ((t = "csv"), call_binary_function("wlan_pull_csv", n))
    : "safari" == t
    ? ((t = "csv"), call_binary_function("get_safari_passwords", n))
    : "opera" == t
    ? ((t = "csv"), call_binary_function("get_opera_passwords", n))
    : "firefox" == t
    ? ((t = "csv"),
      g_passwords.search({
        onComplete: function (e) {
          for (var t = "url,username_field,username,password_field,password\n", a = 0; a < e.length; a++)
            t +=
              csv_encode(e[a].url || "") +
              "," +
              csv_encode(e[a].usernameField || "") +
              "," +
              csv_encode(e[a].username || "") +
              "," +
              csv_encode(e[a].passwordField || "") +
              "," +
              csv_encode(e[a].password || "") +
              "\n";
          n(t);
        }
      }))
    : a
    ? call_binary_function("read_file", a, !0, n)
    : call_binary_function("choose_file", null, null, null, !0, function (e) {
        (e = e && atob(e)), n(e);
      });
}
function wlanexport(e) {
  if (reduxApp.getPreference("noexport")) alertfrombg(gs("CompanyPolicyProhibits"));
  else if (have_binary())
    if (g_wlan_works)
      if (g_generatedpw || e) {
        var t = "",
          a,
          n;
        for (a in g_securenotes) {
          check_ident_aid(a) &&
            ((n = lpmdec_acct(g_securenotes[a].extra, !0, g_securenotes[a], g_shares)), "Wi-Fi Password" == getNoteValue("NoteType", n)) &&
            (t += n + "\n\n");
        }
        "" != t && (loglogin("export"), call_binary_function("wlan_push", t));
      } else
        security_prompt(function () {
          wlanexport(!0);
        });
    else
      g_wlan_has_exe
        ? alertfrombg(gs("No Wi-Fi adapter was detected on this computer.  This feature requires a Wi-Fi adapter."))
        : confirm(
            gs(
              "The LastPass Wi-Fi utility was not detected on this computer.  Would you like to run the LastPass Universal Installer in order to install it?"
            )
          ) && openbaseurl("installer/");
  else
    confirm(gs("This feature requires the binary version of this browser extension. Would you like to install it now?")) &&
      install_binary();
}
function openprint(e) {
  unlock_plug2web();
  var t = base_url + "export.php?plug=1&print=1&hasplugin=" + LP.en(lpversion) + get_identity_param();
  e && (t += "&notes=1"), openURL((t = lppassusernamehash ? base_url + "gettopost.php?posturl=" + LP.en(t) : t));
}
function openprefs(e) {
  LPPlatform.openTabDialog("preferences");
}
function openhelp(e) {
  var t = g_helpurl;
  e && (t += "&topic=" + e), openURL(t);
}
function openpremium() {
  openURL(base_url + "premium.php");
}
function openenterprisepayment() {
  openURL(base_url + "enterprisepayment.php");
}
function openteamspayment() {
  openURL(base_url + "teamspayment.php");
}
function openfamiliespayment() {
  openURL(base_url + "families/payment");
}
function openpricing() {
  openURL(base_url + "pricing");
}
function openTranslationsReadMore() {
  openURL(base_url + "translation-read-more");
}
function openentconsole() {
  openURL(base_url + "company/#/dashboard");
}
function openFamilyConsole() {
  openURL(base_url + "family/#/users/");
}
function openPremiumPaymentPage() {
  openURL(base_url + "premium/payment");
}
function openEnterprisePaymentPage() {
  openURL(base_url + "enterprisepayment.php");
}
function openTeamsPaymentPage() {
  openURL(base_url + "teamspayment.php");
}
function openFamiliesPaymentPage() {
  openURL(base_url + "families/payment");
}
function openPricingPage() {
  openURL(base_url + "pricing");
}
function openAllSites(e) {
  for (var t = 0; t < e.length; t++) {
    var a = e[t];
    (g_last_launch[a.aid] = new Date().getTime()),
      openURL(
        a.url,
        function (e, t) {
          console_log("setting aid " + gettabid(e) + " " + t), (g_launches[gettabid(e)] = t);
        },
        a.aid,
        !0
      );
  }
}
function openall(e, t) {
  var a = null;
  if (e == gs("favorites")) openfavorites();
  else if (e == gs("recently usedlower")) openallrecent();
  else {
    var n = new Array(),
      r = !1,
      i;
    for (i in g_sites)
      check_ident_aid(g_sites[i].aid) &&
        g_sites[i].group == e &&
        "http://group" != g_sites[i].url &&
        (n.push(g_sites[i]), (r |= g_sites[i].pwprotect), null == a) &&
        g_sites[i].pwprotect &&
        (a = i);
    0 != n.length &&
      (t || (!r && !g_prompts.login_site_prompt)
        ? openAllSites(n)
        : security_prompt(
            function () {
              openall(e, !0);
            },
            null,
            !0,
            !0,
            a,
            !1
          ));
  }
}
function openallrecent(e) {
  var t = new Array(),
    a;
  for (a in g_sites) check_ident_aid(g_sites[a].aid) && t.push(g_sites[a]);
  t.sort(function (e, t) {
    return e.last_touch > t.last_touch ? 1 : -1;
  });
  for (var n = new Array(), r = !1, a = 0; n.length < 10 && a < t.length; a++)
    "http://group" != t[t.length - a - 1].url && ((r |= t[t.length - a - 1].pwprotect), (n[n.length] = t[t.length - a - 1]));
  if (0 != n.length)
    if (e || (!r && !g_prompts.login_site_prompt))
      for (var a = 0; a < n.length; a++) {
        var i = n[a];
        (g_last_launch[i.aid] = new Date().getTime()),
          openURL(
            i.url,
            function (e, t) {
              console_log("setting aid " + gettabid(e) + " " + t), (g_launches[gettabid(e)] = t);
            },
            i.aid,
            !0
          );
      }
    else
      security_prompt(function () {
        openallrecent(!0);
      });
}
function openfavorites(e, t) {
  var a = new Array(),
    n = !1,
    r;
  for (r in g_sites) check_ident_aid(g_sites[r].aid) && "1" == g_sites[r].fav && (a.push(g_sites[r]), (n |= g_sites[r].pwprotect));
  if (0 == a.length) alertfrombg(gs("NoFavorites"));
  else if (e || (!n && !g_prompts.login_site_prompt)) {
    for (var r = 0, i; r < a.length; r++) {
      var o = a[r];
      (g_last_launch[o.aid] = new Date().getTime()),
        openURL(
          o.url,
          function (e, t) {
            console_log("setting aid " + gettabid(e) + " " + t), (g_launches[gettabid(e)] = t);
          },
          o.aid,
          !0
        );
    }
    sendLpImprove("openfavorites", void 0 !== t ? { source: t } : {});
  } else
    security_prompt(function () {
      openfavorites(!0);
    });
}
function canSaveAttach() {
  return !!have_binary_function("write_file");
}
function saveall() {
  lploggedin
    ? get_selected_tab(null, function (e) {
        (g_saveall_url = gettaburl(e)),
          (g_saveall_framestotal = g_CS_count[gettabid(e)]),
          (g_saveall_framesdone = 0),
          (g_saveall_docnumsdone = new Array()),
          (g_saveall_formdata = ""),
          (g_saveall_tabid = gettabid(e)),
          (g_saveall_done = !1),
          sendCS(g_saveall_tabid, { cmd: "saveall" }, "all"),
          setTimeout(function () {
            finish_saveall();
          }, 1e3);
      })
    : open_login();
}
function finish_saveall() {
  g_saveall_done ||
    ((g_saveall_done = !0),
    handleSaveAll(g_saveall_tabid, { cmd: "saveall", addsite: 1, url: g_saveall_url, formdata: g_saveall_formdata }));
}
function alertfrombg(e) {
  LPNotifications.createNotification({ title: "LastPass", message: e });
}
function openfeedback() {
  openURL(base_url + "feedback.php");
}
function opengenpw(a) {
  "hotkey" != a && (a = "context"),
    get_selected_tab(null, function (e) {
      var t = reduxApp.getState().settings.features.omar_password_generator ? "betterGeneratePassword" : "generatePassword";
      LPPlatform.openPopoverDialog(t, { tabID: e.id, tabURL: gettaburl(e), saveOptions: { source: a } });
    });
}
function openchooseprofilecc(t) {
  get_selected_tab(null, function (e) {
    var e = gettabid(e);
    LPPlatform.openPopoverDialog("chooseProfile", { tabID: e, saveOptions: { source: t } });
  });
}
function openchangepw(e, t, a) {
  LPPlatform.openTabDialog("changePassword", { newPassword: e, domain: t, excluded: a });
}
function opensearch(e) {
  var t;
  lploggedin ? ((t = "home.html"), e && "" != e && (t += "?searchstr=" + encodeURIComponent(e)), openURL(getchromeurl(t))) : open_login();
}
function recheckpage(e) {
  (!lploggedin && e) ||
    (lploggedin
      ? get_selected_tab(null, function (e) {
          var t;
          sendCS(gettabid(e), { cmd: "recheck" }, "all");
        })
      : open_login());
}
function refreshsites() {
  cleardeccache(), get_accts();
}
function clearAllData() {
  var e = opendb();
  createDataTable(e),
    e &&
      (g_indexeddb
        ? e.transaction("LastPassData", "readwrite").objectStore("LastPassData").clear()
        : e.transaction(function (e) {
            e.executeSql(
              "DELETE FROM LastPassData",
              [],
              function (e, t) {
                console_log("DESTROYING LastPassData Table");
              },
              function (e, t) {
                console_log(t);
              }
            );
          }));
}
function strEndsWith(e, t) {
  return e.match(t + "$") == t;
}
function clearCache(e, t, a, n) {
  if (
    (void 0 === t && (t = !0), (a = void 0 === a ? !0 : a) && lplog("clearCache : clearing otp"), null != g_username && "" != g_username)
  ) {
    var r = g_username_hash;
    if (!LPISLOC) {
      if ("undefined" != typeof localStorage) {
        t && (localStorage_removeItem("lp.uid"), localStorage_removeItem(db_prepend(r))),
          localStorage_removeItem(db_prepend(r + "_lt.cac"));
        for (var i = 0; i < localStorage.length; i++) {
          var o = localStorage.key(i);
          (strEndsWith(o, ".att") || (t && (strEndsWith(o, ".savedtree") || strEndsWith(o, ".sch")))) &&
            localStorage_removeItem(localStorage.key(i));
        }
        t &&
          ((g_lp_mpw_user = localStorage.LPMPU),
          localStorage_removeItem("LPMPU"),
          localStorage_removeItem(g_lp_mpw_user + "_key_iter"),
          localStorage_removeItem(g_lp_mpw_user + "LPMPS"),
          localStorage_removeItem(g_lp_mpw_user + "LPMPH"),
          localStorage_removeItem(g_lp_mpw_user + "LPMPD"),
          localStorage_removeItem(g_lp_mpw_user + "LPMNN"),
          localStorage_removeItem(g_lp_mpw_user + "LPMEX"),
          localStorage_removeItem(g_lp_mpw_user + "LPMDD"));
      }
      have_binary_function("delete_file") &&
        (call_binary_function("delete_file", db_prepend(r) + "_lt.cac"),
        n ||
          (call_binary_function("delete_file", db_prepend(r) + "_lpall.slps"),
          call_binary_function("delete_file", db_prepend(r) + "_lpall.lps"))),
        t && have_binary_function("delete_files_by_extension") && call_binary_function("delete_files_by_extension", db_prepend(r), ".att");
    }
    var s = {},
      l = "",
      _ =
        (t || ((s.icons = !0), (s.rsakey = !0), (l += " AND type != 'icons' AND type != 'rsakey'")),
        a || ((s.otp = !0), (l += " AND type != 'otp'")),
        LPISLOC && ((s.key = !0), (s.accts = !0), (l += " AND type != 'key' AND type != 'accts'")),
        n && ((s.key = !0), (l += " AND type != 'key'")),
        opendb()),
      a,
      n;
    createDataTable(_),
      _ &&
        (g_indexeddb
          ? (_.transaction("LastPassData", "readonly")
              .objectStore("LastPassData")
              .index("username_hash")
              .openCursor(IDBKeyRange.only(r)).onsuccess = function (e) {
              var e = e.target.result;
              e &&
                (void 0 === s[e.value.type] &&
                  _.transaction("LastPassData", "readwrite")
                    .objectStore("LastPassData")
                    .delete(r + "_" + e.value.type),
                e.continue());
            })
          : _.transaction(function (e) {
              e.executeSql(
                "UPDATE LastPassData SET username_hash=? WHERE username_hash=?" + l,
                ["deleteme", db_prepend(r)],
                function (e, t) {
                  var a = opendb();
                  createDataTable(a),
                    a &&
                      a.transaction(function (e) {
                        e.executeSql(
                          "DELETE FROM LastPassData WHERE username_hash=?" + l,
                          ["deleteme"],
                          function (e, t) {},
                          function (e, t) {
                            console_log(t);
                          }
                        );
                      });
                },
                function (e, t) {
                  console_log(t);
                }
              );
            })),
      t &&
        null != (a = lpreadretryfile()) &&
        0 < a.length &&
        ((n = gs(
          "A retry file has been found. This likely means that not all of your site changes have been saved. Would you like to delete this file and potentially lose some changes?"
        )),
        e || confirm(n)) &&
        lpdeleteretry();
  }
}
function openabout() {
  (is_prebuild() || g_isdebug) && have_binary_function("debug_windows") && call_binary_function("debug_windows"),
    openURL(getchromeurl("about.html"));
}
function opensessions() {
  openURL(base_url + "sess.php");
}
function openmyaccount() {
  openURL(base_url + "my.php");
}
function openseccheck() {
  var e = window.navigator.userAgent,
    t = e.indexOf("MSIE "),
    e = e.indexOf("Trident/"),
    t = 0 < t || 0 < e,
    e = !t && !!window.StyleMedia;
  t || e ? (unlock_plug2web(), openURL(base_url + "?securitychallenge=1&lpnorefresh=1")) : openvault(!0, "opendashboard");
}
function openaddsite() {
  ((g_site_data = createNewAcct()).addsite = "1"),
    (g_site_data.noreplace = "1"),
    get_selected_tab(null, function (e) {
      (g_site_data.url = gettaburl(e)), openURL(getchromeurl("site.html"));
    }) || ((g_site_data.url = ""), openURL(getchromeurl("site.html")));
}
function openeditsite(e) {
  LPPlatform.openTabDialog("site", { vaultItem: e });
}
function openaddsecurenote() {
  lploggedin
    ? reduxApp.getState().settings.features.omar_ia
      ? LPPlatform.openTabDialog("addItem")
      : LPPlatform.openTabDialog("notes")
    : open_login(1);
}
function openeditsecurenote(e) {
  LPPlatform.openTabDialog("note", { vaultItem: e });
}
function checkforupdates() {
  (g_notification_data = { checking: !0 }),
    sendTS({ cmd: "notification", type: (g_notification_type = "upgrade") }),
    setTimeout(function () {
      lpMakeRequest(
        base_url + "upgrade.php?binary=" + (have_nplastpass() ? 1 : 0) + "&x=1&ver=" + LP.en(lpversion),
        "",
        upgrade_response,
        null
      );
    }, 250);
}
function normalizeccdate(e) {
  function t(e) {
    return e < 10 ? "0" + e : e;
  }
  var a;
  return (
    e instanceof Date || ((e = [(a = e.split(","))[0], "01,", a[1]].join("")), (e = new Date(e))),
    e.getFullYear() + "-" + t(e.getMonth() + 1)
  );
}
function fillitem(g, e, p, d, u, f, m) {
  var b;
  !check_ident_aid(g) ||
    Object.keys(g_securenotes).indexOf(g) < 0 ||
    (loglogin(g),
    (b = g_securenotes[g]),
    e || (!b.pwprotect && !g_prompts.view_ff_prompt)
      ? get_selected_tab(null, function (e) {
          var t = p || gettabid(e),
            a = new Array(),
            n = new Array(),
            r;
          for (r in b)
            "aid" == r || "notetype" == r || "pwprotect" == r || "decprofilename" == r || "name" == r
              ? (a[r] = b[r])
              : ((a[r] = lpmdec_acct(b[r], !0, b, g_shares)),
                "profilelanguage" == r && void 0 !== translations[a[r]] && (n[a[r]] = translations[a[r]]));
          var i = document.createElement("a");
          if (((i.href = e.url), logformfill(g, i.hostname, f, null, a.notetype, m), a.extra))
            switch (a.notetype) {
              case "Credit Card":
                (a.ccname = LP.getNoteValue("Name on Card", a.extra)),
                  (a.cctype = LP.getNoteValue("Type", a.extra)),
                  (a.ccnum = LP.getNoteValue("Number", a.extra)),
                  (a.cccsc = LP.getNoteValue("Security Code", a.extra)),
                  (a.ccstart = normalizeccdate(LP.getNoteValue("Start Date", a.extra))),
                  (a.ccexp = normalizeccdate(LP.getNoteValue("Expiration Date", a.extra)));
                break;
              case "Bank Account":
                (a.bankname = LP.getNoteValue("Bank Name", a.extra)),
                  (a.bankroutingnum = LP.getNoteValue("Routing Number", a.extra)),
                  (a.bankacctnum = LP.getNoteValue("Account Number", a.extra)),
                  a.bankacctnum || (a.bankacctnum = LP.getNoteValue("IBAN Number", a.extra));
                break;
              case "Address":
                (a.title = LP.getNoteValue("Title", a.extra)),
                  (a.firstname = LP.getNoteValue("First Name", a.extra)),
                  (a.middlename = LP.getNoteValue("Middle Name", a.extra)),
                  (a.lastname = LP.getNoteValue("Last Name", a.extra)),
                  (a.username = LP.getNoteValue("Username", a.extra)),
                  (a.gender = LP.getNoteValue("Gender", a.extra)),
                  (a.birthday = new Date(formatBirthday(LP.getNoteValue("Birthday", a.extra)))),
                  (a.company = LP.getNoteValue("Company", a.extra)),
                  (a.address1 = LP.getNoteValue("Address 1", a.extra)),
                  (a.address2 = LP.getNoteValue("Address 2", a.extra)),
                  (a.address3 = LP.getNoteValue("Address 3", a.extra)),
                  (a.city = LP.getNoteValue("City / Town", a.extra)),
                  (a.county = LP.getNoteValue("County", a.extra)),
                  (a.state = LP.getNoteValue("State", a.extra)),
                  (a.zip = LP.getNoteValue("Zip / Postal Code", a.extra));
                var o = all_countries.find(function (e) {
                    return e.cc2l === LP.getNoteValue("Country", a.extra);
                  }),
                  o =
                    (o && ((a.country = o.cc2l), (a.country_cc3l = o.cc3l), (a.country_name = o.name)),
                    (a.timezone = LP.getNoteValue("Timezone", a.extra)),
                    (a.email = LP.getNoteValue("Email Address", a.extra)),
                    LP.getNoteValue("Phone", a.extra, null, !0)),
                  o =
                    ((a.phone = o.num), (a.phone3lcc = o.cc3l), (a.phoneext = o.ext), LP.getNoteValue("Evening Phone", a.extra, null, !0)),
                  o =
                    ((a.evephone = o.num),
                    (a.evephone3lcc = o.cc3l),
                    (a.evephoneext = o.ext),
                    LP.getNoteValue("Mobile Phone", a.extra, null, !0)),
                  o =
                    ((a.mobilephone = o.num),
                    (a.mobilephone3lcc = o.cc3l),
                    (a.mobilephoneext = o.ext),
                    LP.getNoteValue("Fax", a.extra, null, !0));
                (a.fax = o.num), (a.fax3lcc = o.cc3l), (a.faxphoneext = o.ext);
                break;
              case "Social Security":
                (a.ssn = LP.getNoteValue("Number", a.extra)), (a.ssnname = LP.getNoteValue("Name", a.extra));
                break;
              default:
                if ("Custom_" === a.notetype.substring(0, 7))
                  for (var s = a.extra.split(/\n/), l = 0, _ = 0; _ < s.length; _++) {
                    var c = s[_].split(/:/);
                    "NoteType" !== c[0] &&
                      ("Language" === c[0]
                        ? (a.profilelanguage = c[1])
                        : ((a["custom_field" + l] = { cfid: l, text: c[0], value: c[1], alttext: "" }), l++));
                  }
            }
          void 0 === n["en-US"] && (n["en-US"] = translations["en-US"]);
          var e = LPJSON.stringify(a);
          null == u && (u = !1),
            sendCS(
              t,
              {
                cmd: "fillform",
                toformfill: e,
                translations: LPJSON.stringify(translations),
                fromiframe: d,
                xdomasked: u,
                sessionId: g_fillSessionId
              },
              "all"
            );
        })
      : get_selected_tab(null, function (e) {
          var t = p || gettabid(e);
          security_prompt(function () {
            fillitem(g, !0, t, d, u, f, m);
          });
        }));
}
function fillform(c, e, g, p, d, u, f) {
  if (check_ident_ffid(c) && (!p || check_ident_ffid(p))) {
    for (var m = 0, b; m < g_formfills.length && g_formfills[m].ffid != c; m++);
    if (m != g_formfills.length) {
      if (p) {
        for (b = 0; b < g_formfills.length && g_formfills[b].ffid != p; b++);
        if (b == g_formfills.length) return;
      }
      !e && (g_formfills[m].pwprotect || (p && g_formfills[b].pwprotect) || g_prompts.view_ff_prompt)
        ? get_selected_tab(null, function (e) {
            var t = g || gettabid(e);
            security_prompt(function () {
              fillform(c, !0, t, p, d, u, f);
            });
          })
        : get_selected_tab(null, function (e) {
            var t = g || gettabid(e),
              a = g_formfills[m],
              n = p ? g_formfills[b] : null,
              r = new Array(),
              i = new Array(),
              o;
            for (o in a)
              if (
                "ffid" == o ||
                "profiletype" == o ||
                "pwprotect" == o ||
                "creditmon" == o ||
                "decprofilename" == o ||
                "group" == o ||
                "sharefolderid" == o
              )
                r[o] = a[o];
              else if ("custom_fields" == o) {
                r[o] = new Array();
                for (var s = 0; s < a[o].length; s++) {
                  var l = "custom_field" + s;
                  (r[l] = new Array()),
                    (r[l].cfid = a[o][s].cfid),
                    (r[l].text = lpmdec_acct(a[o][s].text, !0, a, g_shares)),
                    (r[l].value = lpmdec_acct(a[o][s].value, !0, a, g_shares)),
                    (r[l].alttext = lpmdec_acct(a[o][s].alttext, !0, a, g_shares));
                }
              } else
                p && 0 == o.indexOf("cc")
                  ? (r[o] = lpmdec_acct(n[o], !0, n, g_shares))
                  : ((r[o] = lpmdec_acct(a[o], !0, a, g_shares)),
                    "profilelanguage" == o && void 0 !== translations[r[o]] && (i[r[o]] = translations[r[o]]));
            void 0 === i["en-US"] && (i["en-US"] = translations["en-US"]);
            var _ = LPJSON.stringify(r),
              t =
                (null == u && (u = !1),
                sendCS(
                  t,
                  {
                    cmd: "fillform",
                    toformfill: _,
                    translations: LPJSON.stringify(translations),
                    fromiframe: d,
                    xdomasked: u,
                    sessionId: g_fillSessionId
                  },
                  "all"
                ),
                document.createElement("a")),
              _ = ((t.href = e.url), t.hostname);
            logformfill(c, _, f, r.profilelanguage, r.notetype);
          });
    }
  }
}
function getacceptabletlds(e) {
  var e = lp_gettld_url(e),
    t = e,
    a = null;
  if ((a = void 0 !== g_equivalentdomains[e] ? g_equivalentdomains[e] : a))
    for (var n in g_equivalentdomains) n == a && (t += "," + g_equivalentdomains[n]);
  return t;
}
function fillcurrent(a, e, n) {
  e || (!g_sites[a].pwprotect && !g_prompts.login_site_prompt)
    ? get_selected_tab(null, function (e) {
        var t;
        sendCS(
          n || gettabid(e),
          {
            cmd: "fillcurrent",
            password: getpasswordfromacct(g_sites[a]),
            domains: getacceptabletlds(g_sites[a].url),
            strictDomains: getStrictMatchingEquivalentDomains(g_sites[a].url)
          },
          "all"
        );
      })
    : get_selected_tab(null, function (e) {
        var t = n || gettabid(e);
        security_prompt(function () {
          fillcurrent(a, !0, t);
        });
      });
}
function openbaseurl(e) {
  openURL(base_url + e);
}
function addprofile(e, t) {
  var a;
  lploggedin
    ? ((a = { defaultData: { profiletype: 0 } }), t && (a.saveOptions = { source: t }), LPPlatform.openTabDialog("formFill", a))
    : open_login(1);
}
function addcreditcard(e, t) {
  var a;
  lploggedin
    ? ((a = { defaultData: { profiletype: 1 } }), t && (a.saveOptions = { source: t }), LPPlatform.openTabDialog("formFill", a))
    : open_login(1);
}
function editprofile(e, t, a) {
  var e;
  lploggedin ? ((e = { vaultItem: e }), a && (e.saveOptions = { source: a }), LPPlatform.openTabDialog("formFill", e)) : open_login(1);
}
function clearforms(n) {
  get_selected_tab(null, function (e) {
    var t,
      a = (sendCS(gettabid(e), { cmd: "clearforms" }, "all"), document.createElement("a")),
      e = ((a.href = e.url), a.hostname);
    logclearform(e, n);
  });
}
function lostkey() {
  openURL(base_url + "lostkey.php?cmd=sendemail&username=" + en(g_username));
}
function googleauthlostkey() {
  openURL(base_url + "lostkey.php?cmd=sendemail&username=" + en(g_username) + "&type=googleauth");
}
function securityquestionlostkey() {
  var e = securityquestion_getdata("reseturl");
  openURL(e && "" != e ? e : base_url + "lostkey.php?cmd=sendemail&username=" + en(g_username) + "&type=securityquestion");
}
function sesamelostkey() {
  openURL(base_url + "sesamedisable.php?cmd=sendemail&username=" + en(g_username));
}
function gridlostkey() {
  openURL(base_url + "griddisable.php?cmd=sendemail&username=" + en(g_username));
}
function multifactorlostkey(e) {
  openURL(base_url + "multifactordisable.php?cmd=sendemail&username=" + en(g_username) + "&type=" + en(e));
}
g_pref_tab = null;
var g_showerrorlastmsg = "",
  g_showerrorlastts = 0;
function lpshowError(e, t, a, n, r, i, o, s, l, _) {
  g_hidecreate && (n = !1), (g_notification_type = "error");
  var c = e;
  (e = (e = gs(e)).replace(/\n/g, "<br/>")),
    (g_notification_data = {
      msg: e,
      showFeedback: t,
      showLogin: a,
      showCreateAccount: n,
      multifactor_disable_url: r,
      yellow: i,
      custombutton: o,
      customaction: s,
      showStartTrial: l
    }),
    sendTS({ cmd: "notification", type: "error" }),
    (void 0 !== _ && _) ||
      setTimeout(function () {
        get_selected_tab(null, function (e) {
          sendCS(gettabid(e), {
            cmd: "showerrornotification",
            text: gs(c).replace(/\n/g, " "),
            do_40notify: g_40notify,
            notificationdata: g_notification_data
          });
        });
      }, 100),
    console_log(e);
}
function launch(e, t) {
  if (
    "function" == typeof LPPlatform.isSPA &&
    LPPlatform.isSPA() &&
    top.document.documentElement.getAttribute("data-extension-enabled") &&
    reduxApp
  )
    reduxApp.sendLaunchMessage(e);
  else {
    if (t) {
      if (LPPlatform.launchSafari) return void LPPlatform.launchSafari(e);
      if (
        reduxApp.getState().settings.features.web_client_fill &&
        reduxApp &&
        ("function" != typeof LPPlatform.isSPA || !LPPlatform.isSPA())
      )
        return void reduxApp.launch(e);
    }
    var a, n, t;
    is_application(e)
      ? g_is_win && have_binary()
        ? lpnp_notify("launch", { data0: LP.get_appaid(e) })
        : editAid(e, null, t)
      : is_formfill(e)
      ? fillform(LP.get_ffid(e))
      : check_ident_aid(e) &&
        (a = get_record(e)) &&
        (a.sn
          ? editAid(e)
          : ((n = a.pwprotect),
            t || (!n && !g_prompts.login_site_prompt)
              ? ((t = a.url).match(/^[a-z]+?\:\/\//i) || (t = "http://" + t),
                (g_last_launch[a.aid] = new Date().getTime()),
                (g_pending_launch = a.aid),
                openURL(
                  t,
                  function (e, t) {
                    var e = gettabid(e);
                    LegacyFillTracking.track("Password", "Autofill", reduxApp.sfTracking.SubmissionType.Launch, e),
                      reduxApp.getState().user.launchSiteTrackingEnabled && SiteLaunchObserver.startLaunchSite(e, a),
                      (g_launches[e] = t);
                  },
                  a.aid
                ))
              : n
              ? security_prompt(
                  function () {
                    launch(e, !0);
                  },
                  null,
                  null,
                  !0,
                  e,
                  !1
                )
              : security_prompt(function () {
                  launch(e, !0);
                })));
  }
}
var singlefactor_reprompt = (function () {
    var r = function (e, t, a, n) {
      if (g_prompts.multifactor_reprompt || LPISUPEK) {
        var r = multifactor_getdata("password_offline");
        if (r && "" != r) {
          var r = multifactor_getdata("type");
          if ("trueapi" == r && have_binary_function("trueapi_get_hash"))
            return void call_binary_function("trueapi_get_hash", g_username, function (e) {
              (hash_check == e ? a : t)();
            });
        }
        if ((LPISUPEK || "vtapi" == e) && have_binary_function("lpvt_verify_user"))
          return void call_binary_function(
            "lpvt_verify_user",
            "",
            gs("Swipe finger"),
            gs("Swipe your finger on the fingerprint sensor"),
            gs("Cancel"),
            gs("Swipe current user's finger"),
            function (e) {
              if ("" != e) {
                var e = e.split("|");
                if (
                  2 == e.length &&
                  null != g_local_key &&
                  "" != g_local_key &&
                  g_local_key ==
                    make_lp_key_iterations(
                      fix_username(decodeURIComponent(e[0])),
                      decodeURIComponent(e[1]),
                      get_key_iterations(fix_username(decodeURIComponent(e[0])))
                    )
                )
                  return void a();
              }
              LPISUPEK && LPISLOC ? "function" == typeof n && n() : t();
            }
          );
        if ("validity" == e && have_binary_function("validity_verify_user"))
          return void call_binary_function(
            "validity_verify_user",
            "",
            gs("Swipe finger"),
            gs("Swipe your finger on the fingerprint sensor"),
            gs("Cancel"),
            function (e) {
              if ("" != e) {
                var e = e.split("|");
                if (
                  2 == e.length &&
                  null != g_local_key &&
                  "" != g_local_key &&
                  g_local_key ==
                    make_lp_key_iterations(
                      fix_username(decodeURIComponent(e[0])),
                      decodeURIComponent(e[1]),
                      get_key_iterations(fix_username(decodeURIComponent(e[0])))
                    )
                )
                  return void a();
              }
              t();
            }
          );
        if ("winbio" == e && have_binary_function("winbio_verify_user"))
          return void call_binary_function(
            "winbio_verify_user",
            "",
            gs("Swipe finger"),
            gs("Swipe your finger on the fingerprint sensor"),
            gs("Cancel"),
            function (e) {
              if ("" != e) {
                var e = e.split("|");
                if (
                  2 == e.length &&
                  null != g_local_key &&
                  "" != g_local_key &&
                  g_local_key ==
                    make_lp_key_iterations(
                      fix_username(decodeURIComponent(e[0])),
                      decodeURIComponent(e[1]),
                      get_key_iterations(fix_username(decodeURIComponent(e[0])))
                    )
                )
                  return void a();
              }
              t();
            }
          );
        if ("nymi" == e && have_binary_function("nymi_validate"))
          return void call_binary_function("nymi_validate", function (e) {
            if ("" != e) {
              var e = e.split("|");
              if (
                2 == e.length &&
                null != g_local_key &&
                "" != g_local_key &&
                g_local_key ==
                  make_lp_key_iterations(
                    fix_username(decodeURIComponent(e[0])),
                    decodeURIComponent(e[1]),
                    get_key_iterations(fix_username(decodeURIComponent(e[0])))
                  )
              )
                return void a();
            }
            t();
          });
      }
      reduxApp.isCurrentUserFederated()
        ? FederatedLogin.getPassword(
            g_username,
            function (e) {
              (null != g_local_key &&
                "" != g_local_key &&
                g_local_key == make_lp_key_iterations(fix_username(g_username), e, get_key_iterations(fix_username(g_username)))
                ? a
                : n)();
            },
            function (e) {
              n(e);
            }
          )
        : t();
    };
    return function (t, a, n) {
      getsinglefactortype(function (e) {
        r(e, t, a, n);
      });
    };
  })(),
  security_prompt = (function () {
    var o = function (e, t, a, n, r, i) {
      var o = reduxApp.getPreference("reprompttime"),
        s = new Date().getTime(),
        r = get_record(r);
      s > get_last_reprompt_time() && s - get_last_reprompt_time() <= 1e3 * o && !needs_secure_reprompt(r)
        ? e()
        : ((reprompt_callback = g_reprompt_callback = e),
          (g_reprompt_error_callback = t),
          (n = !1),
          r && r.pwprotect && needs_secure_reprompt(r),
          LPPlatform.openTabDialog("reprompt"));
    };
    return function (e, t, a, n, r, i) {
      a
        ? o(e, t, a, n, r, i)
        : singlefactor_reprompt(
            function () {
              o(e, t, a, n, r, i);
            },
            e,
            t
          );
    };
  })();
function get_identity_param() {
  return "&iid=" + LP.en(g_identity);
}
function add_ident_aid(e) {
  if ("" != g_identity) {
    for (var t = 0, a; t < g_identities.length && g_identities[t].iid != g_identity; t++);
    t >= g_identities.length || ("" != (a = g_identities[t]).aids && (a.aids += ","), (a.aids += e), (a.aidarr = a.aids.split(",")));
  }
}
function add_ident_ffid(e) {
  if ("" != g_identity) {
    for (var t = 0, a; t < g_identities.length && g_identities[t].iid != g_identity; t++);
    t >= g_identities.length || ("" != (a = g_identities[t]).ffids && (a.ffids += ","), (a.ffids += e), (a.ffidarr = a.ffids.split(",")));
  }
}
function check_ident_aid(e) {
  if ("" == g_identity) return !0;
  for (var t = 0, a; t < g_identities.length && g_identities[t].iid != g_identity; t++);
  return (
    !(t >= g_identities.length) && (void 0 === (a = g_identities[t]).aidarr && (a.aidarr = a.aids.split(",")), lp_in_array(e, a.aidarr))
  );
}
function check_ident_appaid(e) {
  if ("" == g_identity) return !0;
  for (var t = 0, a; t < g_identities.length && g_identities[t].iid != g_identity; t++);
  return (
    !(t >= g_identities.length) &&
    (void 0 === (a = g_identities[t]).appaidarr && (a.appaidarr = a.appaids.split(",")), lp_in_array(e, a.appaidarr))
  );
}
function check_ident_ffid(e) {
  if ("" == g_identity) return !0;
  for (var t = 0, a; t < g_identities.length && g_identities[t].iid != g_identity; t++);
  return (
    !(t >= g_identities.length) && (void 0 === (a = g_identities[t]).ffidarr && (a.ffidarr = a.ffids.split(",")), lp_in_array(e, a.ffidarr))
  );
}
function switch_identity(e, t, a, n, r) {
  if (e != g_identity && void 0 !== e) {
    var i = !1;
    if ("" != e) {
      for (var o = 0; o < g_identities.length; o++)
        if (g_identities[o].iid == e) {
          g_identities[o].pw_prompt && (i = !0);
          break;
        }
      if (o >= g_identities.length) return;
    } else
      for (var o = 0; o < g_identities.length; o++)
        if (g_identities[o].pw_prompt) {
          i = !0;
          break;
        }
    t || (!i && !g_prompts.switch_identity_prompt)
      ? ((g_identity = "" + e),
        n || lpnp_notify("switchidentity", { data0: g_identity }),
        reduxApp.setExtensionPreferences({ identity: g_identity }),
        a || refresh_windows(),
        update_menus(!0))
      : (r && closePop(),
        security_prompt(function () {
          switch_identity(e, !0);
        }));
  }
}
function add_identity() {
  unlock_plug2web(), openURL(base_url + "?ac=1&addidentity=1");
}
function setup_poll_timer() {
  setTimeout(function () {
    poll_server();
  }, 6e4);
}
function compare_tlds(e, t) {
  return (
    "string" == typeof e &&
    "string" == typeof t &&
    ((e = e.toLowerCase()) == (t = t.toLowerCase()) ||
      (void 0 !== g_equivalentdomains[e] && void 0 !== g_equivalentdomains[t] && g_equivalentdomains[e] == g_equivalentdomains[t]))
  );
}
var LP = this;
function lpreadretry() {
  var e;
  return "undefined" == typeof localStorage ? null : localStorage_getItem(db_prepend(g_username_hash + ".retry"));
}
function lpdeleteretry() {
  if ("undefined" == typeof localStorage) return null;
  localStorage_removeItem(db_prepend(g_username_hash + ".retry"));
}
function lpwriteretry(e) {
  return (
    "" != g_username_hash &&
    null != g_username_hash &&
    "undefined" != typeof localStorage &&
    !!localStorage_setItem(db_prepend(g_username_hash + ".retry"), e)
  );
}
function getuuid(t, a) {
  if (LPISLOC) t("");
  else if ("undefined" == typeof localStorage) t("");
  else
    try {
      var n = function (e) {
          try {
            return (
              (e = JSON.parse(e)),
              a ? ((e[a] && "" != e[a]) || ((e[a] = lpCreatePass(32, 1, 1, 1, 1, 1, 1, 1)), setuuid(e[a], a)), e[a]) : e
            );
          } catch (e) {
            return console.log(e), "";
          }
        },
        e,
        e;
      have_binary_function("read_file")
        ? call_binary_function("read_file", db_prepend("lp.suids"), function (e) {
            e
              ? unprotect_data(e, !0, function (e) {
                  t(n(e));
                })
              : call_binary_function("read_file", db_prepend("lp.suid"), function (e) {
                  e
                    ? unprotect_data(e, !0, t)
                    : g_is_win
                    ? call_binary_function("read_file", db_prepend("lp.uid"), function (e) {
                        e && setuuid(e), t(e);
                      })
                    : t("");
                });
          })
        : (e = (e = localStorage_getItem(db_prepend("lp.uids"))) ? n(e) : localStorage_getItem(db_prepend("lp.uid")))
        ? t(e)
        : reduxApp.getTrustedUids(t, a);
    } catch (e) {
      console_log("Error in getuuid: " + e), t("");
    }
}
function setuuid(t, a, n) {
  (t || n) &&
    (a &&
      getuuid(function (e) {
        "object" != typeof e && (e = {}),
          "" == t && n ? delete e[a] : (e[a] = t),
          (e = JSON.stringify(e)),
          have_binary_function("write_file")
            ? protect_data(e, !0, null, function (e) {
                call_binary_function("write_file", db_prepend("lp.suids"), e);
              })
            : localStorage_setItem(db_prepend("lp.uids"), e);
      }),
    have_binary_function("write_file")
      ? protect_data(t, !0, null, function (e) {
          call_binary_function("write_file", db_prepend("lp.suid"), e);
        })
      : localStorage_setItem(db_prepend("lp.uid"), t));
}
function clearuuid(e) {
  e
    ? setuuid("", e, !0)
    : (delete_file("lp.suid"), delete_file("lp.uid"), "undefined" != typeof localStorage && localStorage_removeItem("lp.uid"));
}
var lperrorcount = 0;
function lpReportError(e, t) {
  var e = e,
    a,
    a,
    a;
  0 == g_prompts.improve ||
    100 < ++lperrorcount ||
    ((a = e.match(/^(.*)location:\s+/)) && (e = a[1]),
    (a = ""),
    g_ischrome ? (a = "chrome") : g_isfirefox && (a = "firefox"),
    (a = "msg=cr() " + a + " lp(" + lpversion + ") errors(" + lperrorcount + "): " + LP.en(e)),
    lpMakeRequest(base_url + "error.php?", a, null, null));
}
function lpatob(e) {
  return atob(e);
}
function lpbtoa(e) {
  return btoa(e);
}
function lpGetCurrentWindow() {
  return window;
}
function bin2hex(e) {
  return AES.bin2hex(e);
}
function url2hex(e) {
  return AES.url2hex(e);
}
function hex2url(e) {
  return AES.hex2url(e);
}
function hex2bin(e) {
  return AES.hex2bin(e);
}
function lp_hex2bin(e) {
  return AES.hex2bin(e);
}
var lastopenauthwin = 0,
  mpw_num_sites,
  mpw_retval;
function ismultifactortaburl(e) {
  return (
    -1 != e.indexOf("browseraction=1&yubikey=1") ||
    -1 != e.indexOf("browseraction=1&googleauth=1") ||
    -1 != e.indexOf("browseraction=1&outofband=1") ||
    -1 != e.indexOf("browseraction=1&securityquestion=1") ||
    -1 != e.indexOf("browseraction=1&sesame=1") ||
    -1 != e.indexOf("browseraction=1&grid=1")
  );
}
function getLanguage() {
  var e = "en-US",
    t = localStorage_getItem("language_" + g_username_hash)
      ? JSON.parse(localStorage_getItem("language_" + g_username_hash)).language
      : null,
    a = localStorage_getItem("loggedOutLanguage") || null,
    n = reduxApp.getPreference("language"),
    r = g_ischrome && "undefined" != typeof chrome ? chrome.i18n.getUILanguage() : null;
  return (
    t ? (e = t) : a ? (e = a) : n ? (e = n) : r ? (e = r) : navigator.language && (e = navigator.language), (e = transformLocaleCode(e))
  );
}
function openURL(n, r, i, e, t, a, o, s) {
  var l, _, c, _, g, p, e, t, d;
  function u(t, a) {
    function e(e) {
      return -1 < e.indexOf("securitychallenge=1");
    }
    function n(e) {
      return -1 < e.indexOf("import.php");
    }
    function r(e) {
      return -1 < e.indexOf("company/#/dashboard");
    }
    function i(e) {
      return -1 < e.indexOf("family/#/users/");
    }
    e(t) || n(t) || r(t) || i(t)
      ? LPServer.lmiapi.jsonRequest({
          url: "lmiapi/token/session-sync",
          success: function (e) {
            r(t) ? (t = base_url + "admin_console_redirect.php") : i(t) && (t = base_url + "family_console_redirect.php"),
              (t = (t += -1 == t.indexOf("?") ? "?" : "&") + "token=" + e.token),
              a(t);
          }
        })
      : a(t);
  }
  n &&
    (n.startsWith("http://") || n.startsWith("https://") || n.startsWith("ssh://") || n.startsWith("ftp://") || ischromeurl(n)
      ? "undefined" != typeof Preferences && Preferences.get("htmlindialog") && ischromeurl(n) && -1 == n.indexOf(VAULT_PAGE) && g_ischrome
        ? LPPlatform.openDialogWindow({ url: n, loadHandler: r })
        : ((l = !1),
          void 0 === t && (t = !1),
          void 0 === e && (e = !1),
          void 0 === a && (a = !1),
          void 0 === s && (s = !1),
          0 == n.indexOf(base_url)
            ? (n = (n += -1 == n.indexOf("?") ? "?" : "&") + "lang=" + LP.en(getLanguage()))
            : (n == g_forgotpwurl || n == g_helpurl) &&
              ((n += -1 == n.indexOf("?") ? "?" : "&"), (_ = getLanguage())) &&
              (n += "lang=" + LP.en(g_useshortlang ? _.substring(0, 2) : _)),
          (c = ""),
          get_selected_tab(null, function (e) {
            (g_selectedtabid = gettabid(e)), (g_selectedtab = e);
          }),
          0 < n.indexOf("sesameusername") &&
            get_all_windows({ populate: !0 }, function (e) {
              for (var t = [], a = e.length - 1; 0 <= a; --a)
                for (var n = get_tabs_length(e[a]) - 1; 0 <= n; --n) {
                  var r = gettaburl(get_tabs(e[a])[n]);
                  r && lp_url_is_lastpassext(r) && close_tab(get_tabs(e[a])[n]);
                }
            }),
          (_ = !1),
          ismultifactortaburl(n)
            ? (lastopenauthwin = new Date().getTime())
            : -1 != n.indexOf(VAULT_PAGE) && new Date().getTime() - 1e3 < lastopenauthwin && (_ = !0),
          (r = r || function (e) {}),
          "windows" ==
            (p =
              "same" != (p = reduxApp.getPreference("openpref")) || (!e && 6 != n.indexOf("-extension://") && 0 != n.indexOf("javascript:"))
                ? p
                : "tabs") &&
            t &&
            (p = "tabs"),
          (e = getcurrenturl()) && 0 == e.indexOf(getchromeurl("launch.html", !0)) && (p = "same"),
          g_issafari_appext
            ? u(n, function (e) {
                e.includes("opendashboard") || e === getchromeurl("vault.html")
                  ? LPPlatform.openVault(e)
                  : "same" === p
                  ? LPPlatform.openSame({
                      url: e,
                      inactive: a,
                      loadHandler: function (e) {
                        r(e.tabDetails, i);
                      }
                    })
                  : "windows" === p
                  ? LPPlatform.openWindow({
                      url: e,
                      inactive: a,
                      loadHandler: function (e) {
                        r(e.tabDetails, i);
                      }
                    })
                  : LPPlatform.openTab({
                      url: e,
                      inactive: a,
                      loadHandler: function (e) {
                        r(e.tabDetails, i);
                      }
                    });
              })
            : "same" == p
            ? g_ischrome &&
              get_selected_tab(null, function (e) {
                chrome.tabs.update(e.id, { url: n }, function (e) {
                  L("call openURL:loadurl with " + n), r(e, i);
                });
              })
            : "windows" == p
            ? g_ischrome &&
              chrome.windows.create({ url: n }, function (e) {
                0 < e.tabs.length && r(e.tabs[0], i);
              })
            : ((t = !_),
              g_ischrome
                ? ((d = { url: n, active: !a }),
                  is_firefox_webext() || (d.selected = t),
                  s
                    ? chrome.windows.getAll(null, function (e) {
                        var t,
                          e = e.filter(function (e) {
                            return !e.incognito;
                          }),
                          a,
                          t =
                            e.find(function (e) {
                              return e.focused;
                            }) ||
                            e[0] ||
                            null;
                        t
                          ? ((d.windowId = t.id),
                            (d.active = !0),
                            chrome.tabs.create(d, function (e) {
                              t.focused || g_isedge
                                ? r(e, i)
                                : chrome.windows.update(t.id, { focused: !0 }, function () {
                                    r(e, i);
                                  });
                            }))
                          : chrome.windows.create({ url: n, incognito: !1 }, function () {
                              chrome.tabs.getCurrent(function (e) {
                                r(e, i);
                              });
                            });
                      })
                    : LPPlatform.isElectron()
                    ? (top || window).LastpassApp.navigation.openUrl(n)
                    : chrome.tabs.create(d, function (e) {
                        r(e, i);
                      }))
                : "function" == typeof LPPlatform.isSPA && LPPlatform.isSPA() && window.open(n, "_blank")))
      : console.log("refusing to open unsafe url: " + n));
}
function copyusername(e, t, a) {
  var e;
  return (
    !(
      !lploggedin ||
      null === (e = get_record(e)) ||
      (t &&
        a &&
        !check_for_frame_mismatch_ok(
          a,
          t,
          gs("Are you sure you would like to copy your LastPass site's username to the clipboard?"),
          "copyusername"
        ))
    ) && LPPlatform.copyToClipboard(getusernamefromacct(e))
  );
}
function copypassword(e, t, a, n) {
  var r;
  return (
    !(
      !lploggedin ||
      null === (r = get_record(e)) ||
      (a &&
        n &&
        !check_for_frame_mismatch_ok(
          n,
          a,
          gs("Are you sure you would like to copy your LastPass site's password to the clipboard?"),
          "copypassword"
        ))
    ) &&
    (null != r.sharedfromaid && "" != r.sharedfromaid && "0" != r.sharedfromaid && "null" != r.sharedfromaid
      ? (alertfrombg(gs("This is a shared site. You are not permitted to view the password.")), !1)
      : !t && (r.pwprotect || g_prompts.view_pw_prompt || g_prompts.login_site_prompt)
      ? (security_prompt(function () {
          copypassword(e, !0, a, n);
        }),
        !1)
      : LPPlatform.copyToClipboard(getpasswordfromacct(r)))
  );
}
function copyurl(e, t, a) {
  var e;
  return (
    !(
      !lploggedin ||
      null === (e = get_record(e)) ||
      (t &&
        a &&
        !check_for_frame_mismatch_ok(a, t, gs("Are you sure you would like to copy your LastPass site's URL to the clipboard?"), "copyurl"))
    ) && LPPlatform.copyToClipboard(geturlfromacct(e))
  );
}
function copytotp(e, t, a) {
  var e;
  return (
    !(
      !lploggedin ||
      null === (e = get_record(e)) ||
      (t &&
        a &&
        !check_for_frame_mismatch_ok(
          a,
          t,
          gs("Are you sure you would like to copy your LastPass site's TOTP to the clipboard?"),
          "copytotp"
        ))
    ) && LPPlatform.copyToClipboard(e.totp)
  );
}
function copynote(e, t, a) {
  var n = get_record(e),
    r,
    t;
  t || (!n.pwprotect && !g_prompts.edit_sn_prompt)
    ? (issharedfolder(g_shares, n.group) && loglogin(get_record_id(n)),
      (t = void 0 !== n.extra ? lpmdec_acct(n.extra, !0, n, g_shares) : ""),
      LPPlatform.copyToClipboard(t))
    : security_prompt(function () {
        copynote(e, !0);
      });
}
function copyprop(e, t, a, n, r, i) {
  var o = get_record(e),
    a,
    o;
  a || (!o.pwprotect && !g_prompts.edit_sn_prompt)
    ? ((a = void 0 !== o.extra ? lpmdec_acct(o.extra, !0, o, g_shares) : ""),
      (o = LP.getNoteValue(t, a)),
      i && (o = (o = JSON.parse(o))[i]),
      LPPlatform.copyToClipboard(o))
    : security_prompt(function () {
        copyprop(e, t, !0, n, r, i);
      });
}
function refresh_windows(e) {
  var r = void 0 !== e && e ? !0 : !1;
  get_all_windows({ populate: !0 }, function (e) {
    for (var t = 0; t < e.length; t++)
      for (var a = 0, n, n; a < get_tabs_length(e[t]); a++) {
        lp_url_is_lastpass(gettaburl(get_tabs(e[t])[a]), !0) &&
          (-1 == gettaburl(get_tabs(e[t])[a]).indexOf("lpnorefresh=1") || r) &&
          ((n = (n = (n = gettaburl(get_tabs(e[t])[a])).replace("&nk=1", "")).replace("&showdeleted=1", "")),
          L("refresh_windows() loadurl url:" + n),
          sendCS(gettabid(get_tabs(e[t])[a]), { cmd: "loadurl", url: n }));
      }
  });
}
function clear_all_filled_fields() {
  get_all_windows({ populate: !0 }, function (e) {
    for (var t = 0; t < e.length; t++)
      for (var a = 0; a < get_tabs_length(e[t]); a++) sendCS(gettabid(get_tabs(e[t])[a]), { cmd: "clearfilledfields" }, "all");
  });
}
function closeallnotifications(n, r) {
  void 0 === n && (n = !1),
    void 0 === r && (r = !1),
    get_all_windows({ populate: !0 }, function (e) {
      for (var t = 0; t < e.length; t++)
        for (var a = 0; a < get_tabs_length(e[t]); a++)
          sendCS(gettabid(get_tabs(e[t])[a]), { cmd: "closenotification", includeerror: n, excludeother: r });
    });
}
function recheckall() {
  L("BG : recheckall()"),
    get_all_windows({ populate: !0 }, function (e) {
      for (var t = 0; t < e.length; t++)
        for (var a = 0; a < get_tabs_length(e[t]); a++) sendCS(gettabid(get_tabs(e[t])[a]), { cmd: "recheck" }, "all");
    }),
    setprefs("all", "all");
}
function closecurrenttab(n) {
  get_selected_tab(null, function (e) {
    if ("" != n) {
      var t = gettaburl(e),
        a = getchromeurl(n, !0);
      if (-1 == t.indexOf(a) && -1 == t.indexOf(punycode.URLToASCII(a)) && -1 == t.indexOf(base_url + "/" + n)) return;
    }
    close_tab(e), select_selectedtabid();
  });
}
function MPWNoNag() {
  confirm(gs("Are you sure you do not want LastPass to tell you when your Master Password is at risk?")) &&
    (localStorage_setItem(g_lp_mpw_user + "LPMNN", 1), (g_lp_mpw_nonag = !0));
}
function addDomainToMPWNever() {
  confirm(gs("Disable LastPass Master Password risk warning on this site?")) &&
    ((g_lp_mpw_exclude[g_lp_mpw_bad_url] = 1), localStorage_setItem(g_lp_mpw_user + "LPMEX", JSON.stringify(g_lp_mpw_exclude)));
}
function mpw_checkVault(e, t, a) {
  var n, a;
  a && ((mpw_num_sites = e.length), (mpw_retval = "")),
    e.length &&
      ("" === (a = (n = e.pop()).passworddec)
        ? mpw_num_sites--
        : make_lp_key_hash_iterations(g_lp_mpw_salt, a, 100, function (e, t) {
            t == g_lp_loggedinhsh && ("" === mpw_retval ? (mpw_retval = n.id) : (mpw_retval += "." + n.id)), mpw_num_sites--;
          })),
    0 !== mpw_num_sites
      ? setTimeout(function () {
          mpw_checkVault(e, t, !1);
        }, 0)
      : t(mpw_retval);
}
function fill_default_ffid(e) {
  if (lploggedin) {
    var t = reduxApp.getPreference("defaultffid");
    if (check_ident_ffid(t))
      for (var a = 0; a < g_formfills.length; a++) if (g_formfills[a].ffid == t) return void fillform(t, null, null, null, null, null, e);
    confirm(gs("You have not yet chosen a default form fill profile.  Would you like to choose one now?")) && openprefs();
  } else open_login();
}
function setprefs(e, t, a, n) {
  for (
    var r = reduxApp.getPreference("warninsecureforms"),
      i = 1 === getInt(g_cid) ? 1 : 0,
      o,
      s,
      l,
      _,
      c,
      g,
      p,
      d,
      u = {
        cmd: "setprefs",
        warninsecureforms: r,
        infieldPopupEnabled: reduxApp.getPreference("infieldPopupEnabled"),
        dontfillautocompleteoff: reduxApp.getPreference("dontfillautocompleteoff"),
        donotoverwritefilledfields: reduxApp.getPreference("donotoverwritefilledfields"),
        showGenerateNotifications: reduxApp.getPreference("showGenerateNotifications"),
        showFormFillNotifications: reduxApp.getPreference("showFormFillNotifications"),
        showNotificationsAfterClick: reduxApp.getPreference("showNotificationsAfterClick"),
        alwayschooseprofilecc: reduxApp.getPreference("alwayschooseprofilecc"),
        automaticallyFill: reduxApp.getPreference("automaticallyFill"),
        webClientFill: reduxApp.getState().settings.features.web_client_fill,
        isRestricted: reduxApp.getState().settings.isRestricted,
        proxies: reduxApp.getState().tabs.urlProxies,
        g_cpwbot: g_cpwbot,
        do_40notify: g_40notify
      },
      f = 0;
    f < g_lp_hotkeys.length;
    f++
  ) {
    var m = g_lp_hotkeys[f];
    (u[m + "KeyCode"] = reduxApp.getPreference(m + "KeyCode")), (u[m + "Mods"] = reduxApp.getPreference(m + "Mods"));
  }
  (u.do_hotkeys = !0), a && isSpecialSite(a) && (u.specialsite = "1");
  var b = getcsinfo(e, t),
    r = getcsinfo_top(e, t),
    r,
    h,
    r,
    v,
    r,
    v,
    r,
    r,
    v;
  r && ((u.top_origin = r.origin), (u.top_domain = r.domain)),
    !g_cpwbot ||
    !CPWbot_bg ||
    null === CPWbot_bg.get_pwchangestate() ||
    CPWbot_bg.get_okstate() ||
    CPWbot_bg.get_failstate() ||
    CPWbot_bg.in_bagration() ||
    CPWbot_bg.get_pwchangetabid() != e
      ? g_cpwbot && (u.in_cpwbot = 0)
      : ((u.in_cpwbot = 1),
        (u.docaptcha = CPWbot_bg.get_docaptchastate() ? 1 : 0),
        CPWbot_bg && g_CS_tops && g_CS_tops[e] == t && (r = CPWbot_bg.get_last_overlay_message()) && (u.msg = JSON.stringify({ msg: r })),
        CPWbot_bg.show_cpwbot_overlay(e, null, null)),
    (!debug && !g_isdebug) ||
      !CPWbot_bg ||
      (!0 !== CPWbot_bg.get_failstate() && !0 !== CPWbot_bg.get_okstate()) ||
      (e == CPWbot_bg.get_selenium_tabid() &&
        (L("force result div again WTF"),
        !0 === CPWbot_bg.get_failstate()
          ? CPWbot_bg.show_selenium_fail(e)
          : !0 === CPWbot_bg.get_okstate() && CPWbot_bg.show_selenium_ok(e))),
    (u.do_experimental_popupfill = do_experimental_popupfill),
    (u.lploggedin = lploggedin),
    (u.ff_currpass_regexp = get_ff_translation("ff_currpass_regexp")),
    (u.ff_username_regexp = get_ff_translation("ff_username_regexp")),
    (u.ff_loginform_regexp = get_ff_translation("ff_loginform_regexp")),
    (u.ff_bankacctnum_regexp = get_ff_translation("ff_bankacctnum_regexp")),
    (u.ff_email_regexp = get_ff_translation("ff_email_regexp")),
    (u.ff_company_regexp = get_ff_translation("ff_company_regexp")),
    (u.ff_firstname_regexp = get_ff_translation("ff_firstname_regexp")),
    (u.ff_search_regexp = get_ff_translation("ff_search_regexp")),
    (u.ff_captcha_regexp = get_ff_translation("ff_captcha_regexp")),
    (u.ff_cctype_regexp = get_ff_translation("ff_cctype_regexp")),
    (u.ff_lastname_regexp = get_ff_translation("ff_lastname_regexp")),
    (u.ff_address1_regexp = get_ff_translation("ff_address1_regexp")),
    (u.ff_remember_regexp = get_ff_translation("ff_remember_regexp")),
    (u.ff_combineddummy_regexp = get_ff_translation("ff_combineddummy_regexp")),
    (u.ff_password_regexp = get_ff_translation("ff_password_regexp")),
    (u.ff_question_answer_regexp = get_ff_translation("ff_question_answer_regexp")),
    (u.ff_country_regexp = get_ff_translation("ff_country_regexp")),
    (u.ff_city_regexp = get_ff_translation("ff_city_regexp")),
    (u.ff_forgot_regexp = get_ff_translation("ff_forgot_regexp")),
    (u.ff_canceltxt_regexp = get_ff_translation("ff_canceltxt_regexp")),
    (u.ff_signuptxt_regexp = get_ff_translation("ff_signuptxt_regexp")),
    (u.ff_helptxt_regexp = get_ff_translation("ff_helptxt_regexp")),
    (u.ff_signintxt_regexp = get_ff_translation("ff_signintxt_regexp")),
    a &&
      ((u.nevers = LPJSON.stringify(getnevers(a))),
      (r = g_CS_tops[e]),
      g_CS_tops &&
        null != r &&
        r != t &&
        ((v = g_CS[e][r]), (r = !(r = gettaburl(g_CS[e][r])) && v && v.name ? punycode.URLToASCII(v.name) : r)) &&
        (getnevers_given(r, (v = getnevers())), (u.nevers = LPJSON.stringify(v))),
      (r = getsites(a)),
      (r = reorderOnURL(r, a, !0)),
      (u.sitescount = r.length)),
    n && (u.actiontlds = n),
    (u.language_data = g_language_data),
    "all" == e
      ? (get_all_windows({ populate: !0 }, function (e) {
          for (var t = 0; t < e.length; t++) for (var a = 0; a < get_tabs_length(e[t]); a++) sendCS(gettabid(get_tabs(e[t])[a]), u, "all");
        }),
        (g_generate_pw_pattern_hints = {}))
      : (sendCS(e, u, t),
        g_cpwbot &&
          CPWbot_bg &&
          ((v = { cmd: "loadurl", docnum: t, tld: lp_gettld_url(a), url: a }), CPWbot_bg.push_event_queue("loadurl", e, v)),
        (g_generate_pw_pattern_hints[e] = null));
}
function get_registry_value(e, t, a, n) {
  var r = a;
  g_is_win && have_binary_function("get_registry_value")
    ? call_binary_function("get_registry_value", e, t, a, function (e) {
        n((e = "string" != typeof e ? a : e));
      })
    : n(r);
}
function gotourl(e) {
  var e = get_record(e),
    e;
  e && "" != (e = geturlfromacct(e)) && openURL((e = e.match(/^[a-z]+?\:\/\//i) ? e : "http://" + e));
}
function deleteNever(i, e) {
  var o = void 0 !== e && e,
    t = 0;
  switch (i.type) {
    case "nevergenerates":
      t = 1;
      break;
    case "neverformfills":
      t = 2;
      break;
    case "neverautologins":
      t = 3;
      break;
    case "neverautofills":
      t = 4;
      break;
    case "nevershowicons":
      t = 6;
      break;
    case "neverenablelp":
      t = 8;
  }
  var e = "delete=1&type=" + LP.en(t) + "&url=" + LP.en(i.url);
  lpMakeRequest(
    base_url + "add_never.php",
    e,
    function (e) {
      if (4 == e.readyState && 200 == e.status && null != e.responseXML && null != e.responseXML.documentElement) {
        var e = e.responseXML.documentElement,
          t = e.getElementsByTagName("ok"),
          e = e.getElementsByTagName("error"),
          t;
        if (0 < t.length) {
          for (var a = new Array(), n = 0; g_neverurls[i.type] && n < g_neverurls[i.type].length; n++) {
            var r = g_neverurls[i.type][n];
            r != i.url && a.push(r);
          }
          (g_neverurls[i.type] = a), g_local_accts_version++, rewritelocalfile();
        } else {
          e.length && (t = e[0].getAttribute("message")) && !o && LP.alert(t);
        }
      }
    },
    function () {},
    null
  );
}
function db_prepend(e) {
  return (e = LPISLOC ? "local_" + e : e);
}
function changemasterpassword() {
  setTimeout(function () {
    openbaseurl("?ac=1&opensettings=1");
  }, 100);
}
function change_master_password(e, t, a, n) {
  var r = get_key_iterations(e),
    i = make_lp_key_iterations(e, t, r),
    o = [],
    s = [],
    l = [],
    _ = [],
    c = [],
    g = getBG(),
    p,
    i;
  if (
    g.reencrypt(o, g.g_sites, i) &&
    g.reencrypt(s, g.g_securenotes, i) &&
    g.reencrypt(l, g.g_applications, i) &&
    g.reencrypt(_, g.g_formfills, i)
  )
    return a
      ? ((p = g.g_local_key),
        (g.g_local_key = i),
        (g.g_local_key_hex = AES.bin2hex(i)),
        (g.g_local_key_hash = SHA256(i)),
        (i = flattendata(
          g_local_accts_version + 1,
          o,
          s,
          g_prompts,
          _,
          g_identities,
          g_equivalentdomains,
          g_neverurls,
          reduxApp.getState().encryptedVaultDataSource.premiumExp,
          encecb(e),
          g_pendings,
          g_shareeautopushes,
          lpmaxid,
          g_urlrules,
          g_prefoverrides,
          g_shares,
          l,
          reduxApp.getState().encryptedVaultDataSource.isEnterpriseUser,
          reduxApp.getState().encryptedVaultDataSource.attachments
        )),
        (g.g_local_key = p),
        (g.g_local_key_hex = AES.bin2hex(p)),
        (g.g_local_key_hash = SHA256(p)),
        n && n(i),
        i)
      : ((g.g_sites = o),
        (g.g_securenotes = s),
        (g.g_applications = l),
        (g.g_formfills = _),
        g.g_local_accts_version++,
        (g.g_local_key = make_lp_key_iterations(e, t, r)),
        (g.g_local_hash = lphash = make_lp_hash_iterations(g.g_local_key, t, r)),
        (g.g_local_key_hex = AES.bin2hex(g.g_local_key)),
        (g.g_local_key_hash = SHA256(g.g_local_key)),
        (g.g_username = e),
        (g.g_username_hash = lpusername_hash = SHA256(e)),
        g.rewritelocalfile(!1, !0),
        (g.g_pwdeckey = g.g_local_key),
        g.lpWriteKeyFile(),
        g.lpnp_notify("local_pwchange", { data0: g_username, data1: t }),
        alertfrombg(gs("Password updated!")),
        void g.closecurrenttab(""));
  alertfrombg(gs("An error occurred")), a && n && n();
}
function reencrypt(e, t, a) {
  for (var n in t) {
    var r = [];
    if (!reencryptArray(r, t[n], a, !1)) return !1;
    e[n] = r;
  }
  return !0;
}
var keystoreencrypt = [
  "username",
  "password",
  "extra",
  "profilename",
  "firstname",
  "middlename",
  "lastname",
  "email",
  "company",
  "ssn",
  "birthday",
  "address1",
  "address2",
  "city",
  "state",
  "state_name",
  "zip",
  "country",
  "country_cc3l",
  "country_name",
  "mobilephone",
  "mobilephone3lcc",
  "mobileext",
  "evephone",
  "evephone3lcc",
  "eveext",
  "phone",
  "phone3lcc",
  "phoneext",
  "fax",
  "fax3lcc",
  "faxext",
  "ccnum",
  "ccexp",
  "cccsc",
  "address3",
  "title",
  "gender",
  "driverslicensenum",
  "taxid",
  "bankname",
  "bankacctnum",
  "bankroutingnum",
  "timezone",
  "county",
  "ccstart",
  "ccname",
  "ccissuenum",
  "notes",
  "text",
  "alttext",
  "profilelanguage",
  "lastname2",
  "mobileemail",
  "firstname2",
  "firstname3",
  "lastname3"
];
function reencryptArray(e, t, a, n) {
  try {
    for (var r in t)
      if ("object" == typeof t[r]) {
        var i = [],
          o = "custom_fields" == r ? 2 : n || "fields" == r;
        if (!reencryptArray(i, t[r], a, o)) return !1;
        e[r] = i;
      } else if (lp_in_array(r, keystoreencrypt) || ("value" == r && (2 == n || (n && fieldisencrypted(t))))) {
        var s = lpmdec(t[r], !0);
        if ((null == s || "" == s) && null != t[r] && "" != t[r]) return !1;
        var l = lpmenc(s, !0, a);
        e[r] = l;
      } else e[r] = t[r];
  } catch (e) {
    return console_error(e), !1;
  }
  return !0;
}
function fieldisencrypted(e) {
  for (var t in e) {
    if ("type" == t && ("password" == e[t] || "text" == e[t] || "hidden" == e[t] || "textarea" == e[t] || "email" == e[t] || "tel" == e[t]))
      return !0;
    if ("id" == t) return !0;
  }
  return !1;
}
var lpclearrecent = !1;
function clearrecent() {
  "undefined" != typeof localStorage && (localStorage_setItem(g_username_hash + "recent", lp_get_gmt_timestamp()), (lpclearrecent = !0));
}
function getClearRecentTime() {
  var e;
  return "undefined" == typeof localStorage || null == (e = localStorage_getItem(g_username_hash + "recent")) ? 0 : e;
}
function getRecentCount() {
  return reduxApp.getPreference("recentUsedCount");
}
function IsIconsUpdated(e) {
  return lpclearrecent ? !(lpclearrecent = !1) : g_icons_length != e;
}
function upgradetoserver() {
  confirm(
    gs(
      "Please note that upgrading from LastPass Local to LastPass Online will result in your password data being uploaded in its encrypted format to LastPass servers.  You will be able to access your data from anywhere, and LastPass will not be able to read it.  Would you like to continue?"
    )
  ) &&
    security_prompt(function () {
      LPPlatform.openTabDialog("createAccountSimple");
    });
}
function renameGroup(e, t, a, n, r) {
  ((a = a || {}).successCallback = n), (a.errorCallback = r);
  var r = void 0 !== a.skipConfirm && a.skipConfirm;
  if (e != gs("favorites") && e != gs("recently usedlower")) {
    var i = issharedfolder(g_shares, e);
    if (0 != i && i.decsharename == e) alertfrombg(gs("You cannot rename a top level Shared folder"));
    else {
      var o = issharedfolder(g_shares, t);
      if (checkmove(o, i) && checkreadonly(o) && checkreadonly(i)) {
        var s = 0 == o ? g_local_key : o.sharekey,
          l = t;
        if ((o && (l = t.substr(o.decsharename.length + 1)), (!o && !i) || (o && i && o.id === i.id))) {
          var _,
            c = [],
            g = [],
            p = [],
            d,
            u,
            f,
            m,
            l,
            b,
            l;
          for (d in (_ = [g_sites, g_securenotes, g_applications])) {
            for (f in (u = _[d])) {
              (m = u[f]).group == e
                ? ((m.group = t),
                  void 0 === c[e] ? (g[(p[p.length] = e)] = get_record_id(m)) : (g[e] += "," + get_record_id(m)),
                  (l = t),
                  o && (l = l.substr(o.decsharename.length + 1)),
                  (c[e] = l))
                : 0 == m.group.indexOf(e + "\\") &&
                  ((b = m.group),
                  (m.group = m.group.replace(e + "\\", t + "\\")),
                  void 0 === c[b] ? (g[(p[p.length] = b)] = get_record_id(m)) : (g[b] += "," + get_record_id(m)),
                  (l = m.group),
                  o && (l = l.substr(o.decsharename.length + 1)),
                  (c[b] = l));
            }
          }
          g_local_accts_version++, rewritelocalfile(), n && n();
          for (var h = "xml=1", v = 0; v < p.length; v++)
            h += "&ids" + v + "=" + LP.en(g[p[v]]) + "&newgrp" + v + "=" + LP.en(enc(c[p[v]], s));
          (h += 0 == o ? "" : "&sharedfolderid=" + en(o.id)),
            lpMakeRequest(
              base_url + "groups.php",
              h,
              function () {},
              function () {},
              null
            );
        } else {
          var y = [],
            w = [],
            _ = [g_sites, g_securenotes, g_applications],
            k = o ? t.substr(o.decsharename.length + 1) : "",
            d,
            u,
            f,
            m,
            P;
          for (d in _) {
            for (f in (u = _[d])) {
              ((m = u[f]).group != e && 0 != m.group.indexOf(e + "\\")) ||
                ((y[y.length] = get_record_id(m)),
                (P = t),
                m.group != e && 0 < m.group.indexOf("\\") && (P = t + m.group.substr(m.group.indexOf("\\"))),
                (w[get_record_id(m)] = P));
            }
          }
          moveIntoSharedFolder(o, i, y, w, !1, !1, r, a);
        }
      }
    }
  }
}
function getacct(e) {
  return get_record(e);
}
function moveIntoSharedFolder(e, t, b, a, n, r, i, o) {
  var s = e && t && e.id === t.id;
  if (!i && !s) {
    var l = gs(
      "You are moving sites to a shared folder. This will potentially make them available to others.\n\nAre you sure you would like to continue?"
    );
    if (
      (void 0 !== e && e
        ? void 0 !== t &&
          t &&
          (l = gs(
            "You are moving sites to a different shared folder. This may change who has access to the sites.\n\n Do you want to continue?"
          ))
        : (l = gs(
            "You are moving sites from a shared folder into your general vault. This will potentially make them unavailable to others.\n\n Do you want to continue?"
          )),
      !confirm(l))
    )
      return !1;
  }
  var _ = void 0 !== e && e ? e.sharekey : g_local_key,
    c = void 0 !== t && t ? t.sharekey : g_local_key,
    g = void 0 !== e && e ? e.id : g_uid,
    p = void 0 !== t && t ? t.id : "",
    d = "cmd=uploadaccounts&username=" + en(g_username),
    u = "",
    h = new Array(),
    v = {},
    f;
  for (f in b)
    if (b.hasOwnProperty(f)) {
      if (!("number" == typeof f || ("string" == typeof f && f.match(/^\d+$/))))
        return alertfrombg(gs("An error occurred") + " i=" + gs(f) + " type " + typeof f), !1;
      var m,
        y,
        w = ("object" == typeof b[f] ? ((y = !1), (m = b[f])) : ((m = getacct(b[f])), (y = !0)), m.aid),
        k = !1;
      if (null == m) return alertfrombg(gs("Error: This folder has already been moved?")), !1;
      if (void 0 !== m.individualshare && m.individualshare) {
        if (null != m.sharedfromaid && "" != m.sharedfromaid && "0" != m.sharedfromaid)
          return alertfrombg(gs("You cannot move individually shared sites into a shared folder.")), !1;
        if (!n && !i) {
          var l = gs(
            "Any item that is currently shared with another user cannot be moved into a shared folder.\n\nWould you like to make a copy?"
          );
          if (!confirm(l)) return !1;
        }
        k = !0;
      }
      if (!r) {
        if (void 0 !== m.sharefolderid && "" != p && m.sharefolderid != p && m.sharefolderid != g)
          return alertfrombg(gs("Please move sites from only one shared folder at a time.")), !1;
        var P = {},
          S;
        for (S in m) m.hasOwnProperty(S) && (P[S] = m[S]);
        P.attacharraychanges = { add: [], remove: [] };
        var x = e ? a[w].substr(e.decsharename.length + 1) : a[w],
          L,
          C,
          L,
          A =
            ((P.group = e ? e.decsharename : ""),
            "" != P.group && "" != x && (P.group += "\\"),
            (P.group += x),
            y && (P.extra = lpmenc(lpmdec(m.extra, !0, c), !0, _)),
            is_application(m)
              ? (L =
                  "&appname" +
                  f +
                  "=" +
                  en(m.appname) +
                  "&name" +
                  f +
                  "=" +
                  en(enc(m.name, _)) +
                  "&type" +
                  f +
                  "=" +
                  en("cr") +
                  "&group" +
                  f +
                  "=" +
                  en(enc(x, _)) +
                  "&extra" +
                  f +
                  "=" +
                  en(crypto_btoa(P.extra)) +
                  "&script" +
                  f +
                  "=" +
                  en(m.script) +
                  "&pwprotect" +
                  f +
                  "=" +
                  en(m.pwprotect ? 1 : 0) +
                  "&wininfo" +
                  f +
                  "=" +
                  en(m.wininfo) +
                  "&wintitle" +
                  f +
                  "=" +
                  en(m.wintitle) +
                  "&exeversion" +
                  f +
                  "=" +
                  en(m.exeversion) +
                  "&exehash" +
                  f +
                  "=" +
                  en(m.exehash) +
                  "&fiid" +
                  f +
                  "=" +
                  en(m.fiid))
              : (y && (P.username = lpmenc(lpmdec(m.username, !0, c), !0, _)),
                y && (P.password = lpmenc(lpmdec(m.password, !0, c), !0, _)),
                y && (P.totp = lpmenc(lpmdec(m.totp, !0, c), !0, _)),
                y && (P.realm_data = lpmenc(lpmdec(m.realm_data, !0, c), !0, _)),
                (C = reduxApp.getState().settings.features.url_encryption && "http://sn" !== m.url && "http://group" !== m.url),
                (L =
                  "&url" +
                  f +
                  "=" +
                  en(C ? crypto_btoa(lpmenc(m.url, !0, _)) : AES.url2hex(m.url)) +
                  "&username" +
                  f +
                  "=" +
                  en(crypto_btoa(P.username)) +
                  "&password" +
                  f +
                  "=" +
                  en(crypto_btoa(P.password)) +
                  "&totp" +
                  f +
                  "=" +
                  en(crypto_btoa(P.totp)) +
                  "&name" +
                  f +
                  "=" +
                  en(enc(m.name, _)) +
                  "&type" +
                  f +
                  "=" +
                  en("cr") +
                  "&grouping" +
                  f +
                  "=" +
                  en(enc(x, _)) +
                  "&extra" +
                  f +
                  "=" +
                  en(crypto_btoa(P.extra)) +
                  "&pwprotect" +
                  f +
                  "=" +
                  en(m.pwprotect ? 1 : 0) +
                  "&realm" +
                  f +
                  "=" +
                  en(crypto_btoa(P.realm_data))),
                m.save_all && (L += "&save_all" + f + "=1"),
                void 0 !== m.basic_auth && "1" == m.basic_auth && (L += "&basic_auth" + f + "=1"),
                void 0 !== m.notetype && m.notetype && m.notetype.length && (L += "&notetype" + f + "=" + en(m.notetype)),
                void 0 !== m.template && m.template && m.template.length && (L += "&template" + f + "=" + en(m.template))),
            g != g_uid ? (P.sharefolderid = g) : void 0 !== P.sharefolderid && delete P.sharefolderid,
            void 0 !== m.attachkey &&
              "" != m.attachkey &&
              (y && (P.attachkey = enc(dec(m.attachkey, c), _)), (L += "&attachkey" + f + "=" + en(P.attachkey))),
            (L += "&origaid" + f + "=" + LP.en(w)),
            "");
        P.fields = new Array();
        for (var S = 0; S < m.fields.length; S++) {
          for (var I in ((P.fields[S] = {}), m.fields[S])) m.fields[S].hasOwnProperty(I) && (P.fields[S][I] = m.fields[S][I]);
          var T = m.fields[S].value,
            O = m.fields[S].type;
          is_application(m) || "text" == O || "email" == O || "tel" == O || "password" == O || "textarea" == O || "hidden" == O
            ? (y && (P.fields[S].value = lpmenc(lpmdec(T, !0, c), !0, _)), (T = crypto_btoa(P.fields[S].value)))
            : ("checkbox" != O && "radio" != O) || (T += m.fields[S].checked ? "-1" : "-0"),
            is_application(m)
              ? (A +=
                  "&fields" +
                  f +
                  "id" +
                  S +
                  "=" +
                  en(m.fields[S].id) +
                  "&fields" +
                  f +
                  "type" +
                  S +
                  "=" +
                  en(m.fields[S].type) +
                  "&fields" +
                  f +
                  "value" +
                  S +
                  "=" +
                  en(T))
              : (A +=
                  "&fields" +
                  f +
                  "name" +
                  S +
                  "=" +
                  en(m.fields[S].name) +
                  "&fields" +
                  f +
                  "type" +
                  S +
                  "=" +
                  en(m.fields[S].type) +
                  "&fields" +
                  f +
                  "value" +
                  S +
                  "=" +
                  en(T) +
                  "&fields" +
                  f +
                  "formname" +
                  S +
                  "=" +
                  en(void 0 === m.fields[S].formname ? "" : m.fields[S].formname));
        }
        (v[w] = P), (d = d + L + A), k || n || ((u += en(w) + ","), (h[h.length] = w));
      }
    }
  return (
    r ||
      ((d += "&sharedfolderid=" + en(g)),
      null != typeof e && t && (d += "&origsharedfolderid=" + en(t.id)),
      n || (d += "&todelete=" + u),
      4 == (4 & g_loglogins) && (d += "&reportname=" + en(m.name)),
      8 == (8 & g_loglogins) && (d += "&reportusername=" + en(m.unencryptedUsername)),
      lpMakeRequest(
        base_url + "lastpass/api.php",
        d,
        function (e, t, a) {
          if (4 == e.readyState && 200 == e.status && e.responseXML && e.responseXML.documentElement) {
            var n = e.responseXML.documentElement.getElementsByTagName("result"),
              n,
              r,
              r,
              r;
            if (0 < n.length) {
              var i = !0,
                o;
              for (o in b)
                if (b.hasOwnProperty(o)) {
                  var s = "object" == typeof b[o] ? b[o] : getacct(b[o]),
                    l = s.aid,
                    _ = v[l];
                  if (s && _)
                    if (is_application(s)) {
                      if (
                        (lp_in_array(l, h) && delete g_applications[get_appaid(l)], (_.appaid = n[0].getAttribute("aidmap" + l)), !_.appaid)
                      ) {
                        i = !1;
                        break;
                      }
                      (_.appaid = get_appaid(_.appaid)), (g_applications[_.appaid] = _);
                    } else {
                      var c = lp_gettld_url(s.url);
                      if (
                        (lp_in_array(l, h) &&
                          ("http://sn" == s.url ? delete g_securenotes[l] : delete g_sites[l], void 0 !== g_tlds[c]) &&
                          void 0 !== g_tlds[c][l] &&
                          delete g_tlds[c][l],
                        (_.aid = n[0].getAttribute("aidmap" + l)),
                        !_.aid)
                      ) {
                        i = !1;
                        break;
                      }
                      "http://sn" == _.url ? (g_securenotes[_.aid] = _) : (g_sites[_.aid] = _),
                        void 0 === g_tlds[c] && (g_tlds[c] = {}),
                        (g_tlds[c][_.aid] = !0);
                      var g = reduxApp.getState().encryptedVaultDataSource.attachments,
                        p;
                      for (p in g)
                        if (g.hasOwnProperty(p) && g[p].parent == l) {
                          var d = g[p],
                            u = new Array(),
                            f;
                          for (f in d) d.hasOwnProperty(f) && (u[f] = d[f]);
                          var m = d.id;
                          if (
                            ((u.id = n[0].getAttribute("attachidmap" + m)),
                            (u.storagekey = n[0].getAttribute("storagekeymap" + m)),
                            !u.id || !u.storagekey)
                          ) {
                            i = !1;
                            break;
                          }
                          _.attacharraychanges.add.push(u),
                            _.attacharraychanges.remove.push(d.id),
                            (u.parent = _.aid),
                            lp_in_array(l, h) ? (g[p] = u) : (g[g.length] = u);
                        }
                      if (!i) break;
                    }
                }
              i && a && a.successCallback && a.successCallback(v);
              var r = parseInt(n[0].getAttribute("accts_version"));
              reduxApp.sendAccountVersionNumber(r),
                compare_accounts_versions(r, parseInt(g_local_accts_version) + 1) &&
                  ((g_server_accts_version = g_local_accts_version = r), i) &&
                  (rewritelocalfile(), refresh_windows(), lpdbgchallenge("running update because of item moved."), runChallenge());
            } else {
              (r =
                "SERVER_uploadfailed" == (n = e.responseXML.documentElement.getAttribute("rc"))
                  ? gs("Your Shared Folder action failed. Please check your permissions before trying again")
                  : "SERVER_sharedfolder_passwordsmustbehidden" == n
                  ? gs("Your do not have permission to view this account password so you cannot move it from the current Shared Folder.")
                  : gs("Your Shared Folder action failed.")),
                a && a.errorCallback ? a.errorCallback(r) : alertfrombg(r);
            }
          }
        },
        function () {
          var e = gs("An error occurred");
          o && o.errorCallback ? o.errorCallback(e) : alertfrombg(e);
        },
        o
      )),
    !0
  );
}
function moveSelectedToGroup(e, t, a, n, r) {
  ((a = a || {}).successCallback = n), (a.errorCallback = r);
  var n = void 0 !== a.skipConfirm && a.skipConfirm,
    i = t.split(","),
    o = !1,
    s = issharedfolder(g_shares, e),
    l = null;
  if (checkreadonly(s)) {
    for (var _ = !1, c = 0; c < i.length; c++) {
      var g,
        p = getacct(i[c]),
        l = issharedfolder(g_shares, p.group);
      if (!checkreadonly(l)) return;
      if (!checkmove(s, l)) return;
      (!s && !l) || (s && l && s.id === l.id) || (_ = !0);
    }
    if (_) {
      for (var d = [], c = 0; c < i.length; c++) d[i[c]] = e;
      moveIntoSharedFolder(s, l, i, d, !1, !1, n, a);
    } else {
      var u = new Array(),
        r = new Array();
      if (e == gs("favorites"))
        for (var c = 0; c < i.length; c++) {
          var f = getacct(i[c]);
          f && "0" == f.fav && (u[u.length] = i[c]);
        }
      (0 < i.length || 0 < u.length || 0 < r.length) && changeGroupAndFavorites(i, u, r, e, s, a);
    }
  }
}
function changeGroupAndFavorites(e, t, a, n, r, i) {
  var o = "",
    s = "",
    l = "",
    _ = "",
    c = new Array();
  updated = {};
  for (var g = 0, p, d; g < e.length; g++) {
    (d = getacct((p = e[g]))) && n != gs("favorites") && ((c[c.length] = p), (d.group = n), (updated[d.aid] = d), (o += _ + p), (_ = ","));
  }
  for (var _ = "", g = 0, p, d; g < t.length; g++) {
    (d = getacct((p = t[g]))) && ((c[c.length] = p), (d.fav = "1"), (updated[d.aid] = d), (s += _ + p), (_ = ","));
  }
  g_local_accts_version++,
    g_server_accts_version++,
    rewritelocalfile(),
    reduxApp.sendAccountVersionNumber(g_server_accts_version),
    i && i.successCallback && i.successCallback(updated);
  var i = 0 == r ? g_local_key : r.sharekey,
    u = n,
    u =
      (r && (u = n.substr(r.decsharename.length + 1)),
      "aids=" + LP.en(o) + "&newfavaids=" + LP.en(s) + "&oldfavaids=" + LP.en("") + "&newgrp=" + LP.en(enc(u, i)) + "&xml=1");
  (u += 0 == r ? "" : "&sharedfolderid=" + en(r.id)), lpMakeRequest(base_url + "groups.php", u, lpChangeGroupResponse);
}
function lpChangeGroupResponse(e) {
  e && 4 == e.readyState && 200 == e.status && null != e.responseXML && e.responseXML.documentElement;
}
function lpReadFile(e, t) {
  have_binary_function("read_file") ? call_binary_function("read_file", e, t) : t("");
}
function setup_is_chrome_portable() {
  have_binary_function("is_chrome_portable") &&
    call_binary_function("is_chrome_portable", function (e) {
      g_is_chrome_portable = e;
    });
}
function is_chrome_portable() {
  return g_is_chrome_portable;
}
function openexport() {
  doexport(
    !1,
    function (e) {
      LPPlatform.export("lastpass_export.csv", e), (export_output = EXPORT_OUTPUT_DEFAULT);
    },
    !1
  );
}
function openlastpassexport() {
  doexport(
    !1,
    function (e) {
      LPPlatform.export("lastpass_encrypted_export.csv", e), (export_output = EXPORT_OUTPUT_DEFAULT);
    },
    !0
  );
}
function handleExportForRestrictedUser() {
  var a = function () {
      LPServer.lmiapi.jsonRequest({ url: "lmiapi/export-tokens", type: "DELETE" });
    },
    e,
    t = function () {
      LPServer.lmiapi.jsonRequest({
        url: "lmiapi/export-tokens",
        type: "POST",
        success: function (e) {
          e.message.length && "undefined" != typeof reduxApp && reduxApp.saveSettingsState("successMessagetext", e.message);
        },
        error: function () {
          "undefined" != typeof reduxApp &&
            reduxApp.saveSettingsState(
              "alertMessagetext",
              Strings.translateString("Try again. We couldn't finish the export process just now.")
            );
        }
      });
    },
    n,
    r = function () {
      LPPlatform.openTabDialog("reprompt", {
        isRestrictedExport: g_is_restricted,
        successCallback: function (e) {
          get_accts_to_export(
            e,
            function (e) {
              var t;
              dodecrypt(e.responseText.split("\n"), 1, !1, "", function (e) {
                LPPlatform.export("lastpass_export.csv", e);
              }),
                a();
            },
            function (e) {
              openvault(!0), reduxApp.saveSettingsState("hasExportError", !0);
            }
          );
        }
      });
    };
  LPServer.lmiapi.jsonRequest({
    url: "lmiapi/export-tokens",
    type: "GET",
    success: function (e) {
      e.hasToken && e.isTokenApproved ? e.isTokenApproved && r() : t();
    },
    error: function () {
      "undefined" != typeof reduxApp &&
        reduxApp.saveSettingsState(
          "settings.alertMessagetext",
          Strings.translateString("Try again. We couldn't finish the export process just now.")
        );
    }
  });
}
function dodecrypt(e, t, a, n, r) {
  for (var i = 30 < e.length - t ? t + 30 : e.length, o = t; o < i; o++) {
    var s = e[o].split(","),
      s;
    s.length &&
      ((s = s.reduce(function (e, t, a) {
        var n, n, n;
        return 0 !== a && isNaN(t)
          ? ((n = t.replace(/\r\n|\r/g, "")), (n = dec(n)).length || (n = ""), e + "," + (n = (n = csv_encode(n)).replace(/\$/g, "$$$$")))
          : 0 === a
          ? e + t
          : e + "," + t;
      }, "")),
      (export_output = export_output + s + "\n"),
      (t += 1));
  }
  t < e.length ? dodecrypt(e, t, a, n, r) : finalizeExportOutput(export_output, a, n, r);
}
function finalizeExportOutput(e, t, a, n) {
  var r = e;
  t && (r = enc(e, make_lp_key_iterations("encryptedExport", a, 100100))), loglogin("export"), n && n(r);
}
"undefined" == typeof g_is_chrome_portable && (g_is_chrome_portable = !1);
var export_output = EXPORT_OUTPUT_DEFAULT;
function doexport(a, n, r, e) {
  if (lploggedin)
    if (reduxApp.getPreference("noexport"))
      setTimeout(function () {
        alertfrombg(gs("CompanyPolicyProhibits"));
      }, 0);
    else if (r && !e)
      LPPlatform.openTabDialog("encryptedExportDialog", {
        callback: function (e, t) {
          e && doexport(a, n, r, t);
        }
      });
    else if (g_is_restricted) handleExportForRestrictedUser();
    else if (g_generatedpw || a) {
      var t = new Array(),
        i,
        i;
      for (i in g_sites) check_ident_aid(i) && "http://group" != g_sites[i].url && (t[t.length] = g_sites[i]);
      for (i in g_securenotes) check_ident_aid(i) && (t[t.length] = g_securenotes[i]);
      for (var o = 0; o < t.length; o++) {
        var s = t[o];
        if (null == s.sharedfromaid || "" == s.sharedfromaid || "0" == s.sharedfromaid) {
          for (
            var l = new Array(),
              _ =
                ((l[0] = s.url),
                (l[1] = getusernamefromacct(s)),
                (l[2] = getpasswordfromacct(s)),
                (l[3] = s.totp),
                (l[4] = lpmdec_acct(s.extra, !0, s, g_shares)),
                (l[5] = s.name),
                (l[6] = s.group),
                (l[7] = s.fav),
                ""),
              c = "",
              g = 0,
              p;
            g < l.length;
            g++
          ) {
            (_ += c + csv_encode(l[g])), (c = ",");
          }
          export_output += _ += "\n";
        }
      }
      finalizeExportOutput(export_output, r, e, n);
    } else
      security_prompt(function () {
        doexport(!0, n, r);
      });
}
function formfillexport(e) {
  if (reduxApp.getPreference("noexport"))
    setTimeout(function () {
      alertfrombg(gs("CompanyPolicyProhibits"));
    }, 0);
  else if (g_generatedpw || e) {
    for (
      var t = new Array(
          "profilename",
          "profilelanguage",
          "title",
          "firstname",
          "firstname2",
          "firstname3",
          "middlename",
          "lastname",
          "lastname2",
          "lastname3",
          "username",
          "gender",
          "birthday",
          "ssn",
          "company",
          "address1",
          "address2",
          "address3",
          "city",
          "county",
          "state",
          "state_name",
          "zip",
          "country",
          "country_cc3l",
          "country_name",
          "timezone",
          "email",
          "mobileemail",
          "phone3lcc",
          "phone",
          "phoneext",
          "fax3lcc",
          "fax",
          "faxext",
          "evephone3lcc",
          "evephone",
          "eveext",
          "mobilephone3lcc",
          "mobilephone",
          "mobileext",
          "ccname",
          "ccnum",
          "ccstart",
          "ccexp",
          "cccsc",
          "ccissuenum",
          "bankname",
          "bankacctnum",
          "bankroutingnum",
          "notes"
        ),
        a = "",
        n = "",
        r = "",
        i = !0,
        o = 0,
        s = 0;
      s < g_formfills.length;
      s++
    )
      if (check_ident_ffid(g_formfills[s].ffid)) {
        for (var l = "", _ = 0; _ < t.length; _++) {
          var c = t[_];
          i && ((a += n + csv_encode(c)), (n = ",")),
            (r += l + csv_encode(lpmdec_acct(g_formfills[s][c], !0, g_formfills[s], g_shares))),
            (l = ",");
        }
        g_formfills[s].custom_fields.length > o && (o = g_formfills[s].custom_fields.length);
        for (var g = 0; g < g_formfills[s].custom_fields.length; g++)
          r +=
            "," +
            csv_encode(lpmdec_acct(g_formfills[s].custom_fields[g].text, !0, g_formfills[s], g_shares)) +
            "," +
            csv_encode(lpmdec_acct(g_formfills[s].custom_fields[g].value, !0, g_formfills[s], g_shares)) +
            "," +
            csv_encode(lpmdec_acct(g_formfills[s].custom_fields[g].alttext, !0, g_formfills[s], g_shares));
        (r += "\n"), (i = !1);
      }
    for (var g = 1; g <= o; g++)
      a +=
        "," +
        csv_encode("customfield" + g + "text") +
        "," +
        csv_encode("customfield" + g + "value") +
        "," +
        csv_encode("customfield" + g + "alttext");
    (r = a + "\n" + r), loglogin("export"), LPPlatform.export("lastpass_formfill_export.csv", r);
  } else
    security_prompt(function () {
      formfillexport(!0);
    });
}
function can_save_file() {
  return !!have_binary_function("save_file");
}
function fix_tlds(e, t, a) {
  delete g_tlds[e][a], void 0 === g_tlds[t] && (g_tlds[t] = {}), (g_tlds[t][a] = !0);
}
function increment_local_accts_version() {
  g_local_accts_version++;
}
function set_editfieldsopener(e) {
  g_editfieldsopener = e;
}
function close_editfieldsopener() {
  g_editfieldsopener && (g_editfieldsopener.close(), (g_editfieldsopener = null));
}
function getcurrenturl() {
  return punycode.URLToASCII(g_currenturl);
}
function getcurrenttabid() {
  return g_currenttabid;
}
function getsinglefactortype(n) {
  var t = function (t) {
    var a = reduxApp.getPreference("singlefactortype");
    g_prefs_read && t != a
      ? have_binary_function("file_exists")
        ? call_binary_function("file_exists", "singlefactortype", function (e) {
            setsinglefactortype((t = e ? t : a)), n(t);
          })
        : (setsinglefactortype(a), n(a))
      : n(t);
  };
  have_binary_function("read_file")
    ? call_binary_function("read_file", "singlefactortype", function (e) {
        t(lptrim(e));
      })
    : t("");
}
function setsinglefactortype(e) {
  have_binary_function("write_file") && call_binary_function("write_file", "singlefactortype", e),
    reduxApp.setExtensionPreferences({ singlefactortype: e });
}
function get_method() {
  return is_opera_chromium()
    ? "op"
    : is_edge()
    ? "edge"
    : is_edge_chromium()
    ? "edgecr"
    : g_isfirefoxwebext
    ? "ff"
    : g_ischrome || LPPlatform.isElectron()
    ? "cr"
    : g_issafari_appext
    ? "sfx_appstore"
    : "function" == typeof LPPlatform.isSPA && LPPlatform.isSPA()
    ? "spa"
    : void 0;
}
function get_method_async(e) {
  e(get_method());
}
function select_selectedtabid() {
  try {
    g_ischrome &&
      -1 != g_selectedtabid &&
      (chrome.tabs.update(g_selectedtabid, { selected: !0 }), chrome.runtime.lastError) &&
      debug &&
      L(chrome.runtime.lastError);
  } catch (e) {}
}
function addEmptyGroup(e, t, a) {
  var n = issharedfolder(g_shares, e);
  if (checkreadonly(n)) {
    var r = 0 == n ? g_local_key : n.sharekey,
      i = e;
    if (n) {
      if (!checkreadonly(n)) return;
      i = e.substr(n.decsharename.length + 1);
    }
    var o = createNewAcct(),
      e =
        ((o.url = "http://group"),
        (o.group = e),
        (o.aid = "0"),
        "ajax=1&extjs=1&name=&url=" +
          LP.en(url2hex(o.url)) +
          "&grouping=" +
          LP.en(enc(i, r)) +
          "&username=&password=&extra=&aid=0&openid_url=&isbookmark=0"),
      e = (e += 0 == n ? "" : "&sharedfolderid=" + en(n.id)) + get_identity_param();
    lpMakeRequest(base_url + "show.php", e, lpSaveSiteResponse, null, { acct: o, successCallback: t, errorCallback: a });
  }
}
function hassites() {
  var e = !1,
    t,
    t;
  for (t in g_sites)
    if (g_sites.hasOwnProperty(t)) {
      e = !0;
      break;
    }
  for (t in g_securenotes)
    if (g_securenotes.hasOwnProperty(t)) {
      e = !0;
      break;
    }
  return e;
}
var g_basicauth_found = !(addEmptyGroups = function (e, t, a) {
    function n(e) {
      var t = createNewAcct();
      return (
        (t.url = "http://group"),
        (t.group = e),
        (t.aid = "0"),
        { url: AES.url2hex(t.url), grouping: lpenc(e, g_local_key), iid: g_identity, token: g_token }
      );
    }
    var r = [];
    e.forEach(function (e) {
      r.push(n(e));
    }),
      LPPlatform.ajax({
        url: base_url + "lmiapi/vault/folders/create-many",
        headers: { "X-CSRF-TOKEN": decodeURIComponent(g_token) },
        data: JSON.stringify({ folders: r }),
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        success: function (e) {
          t();
        },
        failure: a
      });
  }),
  g_basicauth_origurl = "",
  g_basicauth_url = "",
  g_basicauth_realm = "",
  g_basicauth_tabid = 0;
function basicauth_found(e, t, a) {
  e != g_basicauth_found &&
    (g_basicauth_found = e) &&
    get_selected_tab(null, function (e) {
      compare_tlds(lp_gettld_url(a), lp_gettld_url(gettaburl(e)))
        ? ((g_basicauth_tabid = gettabid(e)),
          (g_basicauth_origurl = punycode.URLToASCII(a)),
          (g_basicauth_url = gettaburl(e)),
          (g_basicauth_realm = t),
          handleFill(gettabid(e), { url: gettaburl(e), topurl: gettaburl(e), docid: 0, force: !1, docnum: 0 }))
        : (g_basicauth_found = !1);
    });
}
function basicauth_save(e, t, a, n, r) {
  lpdbg("basicauth", "basicauth_save called"),
    lploggedin
      ? ("" == e && "" == t) ||
        ((a = a || g_basicauth_realm),
        (n = n || g_basicauth_url),
        LPTabState.processBasicAuthentication({ username: e, password: t, url: n, realm: a }),
        lpdbg("basicauth", "basicauth_save done"))
      : lpdbg("basicauth", "not logged in, aborting");
}
function DeleteOldDynamicFiles() {
  var e = localStorage_getItem("ff.dat"),
    t,
    e;
  null != e &&
    -1 != (t = e.indexOf("\n")) &&
    ((e = e.substr(0, t)), 0 < CompareLastPassVersions(ffver, e)) &&
    localStorage_removeItem("ff.dat");
}
function geteventtargeturl(e) {
  return g_issafari_appext ? gettaburl(geteventtarget(e)) : punycode.URLToASCII(e.target.url);
}
function geteventtarget(e) {
  return e.target;
}
function GetStringResource(e, t) {
  have_binary_function("GetStringResource") ? call_binary_function("GetStringResource", "", e, t) : t("");
}
function GetImageResource(e, t) {
  have_binary_function("GetImageResource")
    ? call_binary_function("GetImageResource", "", e, function (e) {
        t("data:image/png;base64," + e);
      })
    : t("");
}
function event_dispatch_message(e, t, a) {
  g_isedge ? ((a.messagetype = t), e.callback(a)) : g_issafari_appext && e.callback({ name: t, message: a });
}
function gettabidfromevent(e) {
  return gettabid(geteventtarget(e));
}
function LoadData(e, t) {
  var a = [],
    n = localStorage_getItem(e),
    n;
  if (null != n && "" != n) for (var r = n.split("\n"), i = 0; i < r.length; i++) (t && -1 == r[i].indexOf(".")) || (a[r[i].trim()] = "");
  return (debug || g_isdebug) && ((n = Object.keys(a).length), write_history({ cmd: "LoadData", file: e, num: n })), a;
}
function LoadSpecialSites() {
  SpecialSites = LoadData("sites.dat", !0);
}
function LoadBigIconList() {
  BigIconList = LoadData("bigicons.dat");
}
function isSpecialSite(e) {
  return null != e && void 0 !== SpecialSites[lpcanonizeUrl(e)];
}
function unlock_plug2web() {
  g_plug2web_last_initiated = lp_get_gmt_timestamp();
}
function setup_push_listener(e) {
  var t, e, a, e;
  g_dopushserver &&
    (60 * reduxApp.getPreference("pollServerVal") <= 0
      ? console.log("No poll timer so no push notifications server.")
      : ((a = (e = e.split(" "))[0]),
        (e = e[1]),
        console.info("[PUSH] First connection to push ws.", [a, e]),
        lp.pushClient.connect(a, e, trigger_poll_server_request, 3e4)));
}
function shutdown_push_listener() {
  lp.pushClient.disconnect();
}
function trigger_poll_server_request() {
  console.log("Poll server call triggered by push."),
    g_accountVersionTracking && sendLpImprove("push_message_received"),
    poll_server_request();
}
function contextMenuOnClick(e, t) {
  console.log("item " + e.menuItemId + " was clicked"),
    console.log("info: " + JSON.stringify(e)),
    console.log("tab: " + JSON.stringify(t)),
    lploggedin || open_login();
}
function isadmin() {
  return g_isadmin;
}
function getbaseurl() {
  return base_url;
}
function update_create_account_data() {}
function lpvt_store_data_and_setsinglefactortype(e) {
  var t = getBG();
  t.have_binary_function("lpvt_store_data") &&
    t.call_binary_function(
      "lpvt_store_data",
      e,
      gs("Swipe finger"),
      gs("Swipe your finger on the fingerprint sensor"),
      gs("Cancel"),
      gs("Swipe current user's finger"),
      function (e) {
        e && t.setsinglefactortype("vtapi");
      }
    );
}
function delete_file(e) {
  var t = getBG();
  t.have_binary_function("delete_file") && t.call_binary_function("delete_file", e);
}
function log(e) {
  console_error(e);
}
function ReadFileGeneric(e, t, a) {
  var n = function (e) {
    lplog("ReadFileGeneric : callback2 called"),
      null == e
        ? (lplog("ReadFileGeneric : callback2 called -- failed cuz data=null"), a(""))
        : (t &&
            t < e.length &&
            (lplog("ReadFileGeneric : callback2 called -- truncating from=" + e.length + " to=" + t), (e = e.substring(0, t))),
          void 0 !== a && (lplog("ReadFileGeneric : callback2 calling callback"), a(e)));
  };
  have_binary_function("read_file")
    ? (lplog("ReadFileGeneric : calling read_file binary function filename=" + e + " filename2=" + db_prepend(e)),
      call_binary_function("read_file", db_prepend(e), n))
    : (lplog("ReadFileGeneric : calling localStorage_getItem filename=" + e), n(localStorage_getItem(e)));
}
function WriteFileGeneric(e, t) {
  have_binary_function("write_file") ? call_binary_function("write_file", db_prepend(e), t) : localStorage_setItem(e, t);
}
function DeleteFileGeneric(t) {
  if (have_binary_function("delete_file")) call_binary_function("delete_file", db_prepend(t));
  else
    try {
      localStorage_removeItem(t);
    } catch (e) {
      L("Failed to removeItem(" + t + ") e: " + e);
    }
}
function lpevent(e) {
  void 0 === g_events[e] && (g_events[e] = 0), (g_events[e] = g_events[e] + 1);
}
function fastDecryptAttachment(e, t, a, n, r, i) {
  var n = dec(n, r);
  "function" == typeof i && !have_nplastpass() && have_pplastpass()
    ? "!" == a.charAt(0)
      ? pplastpass_send_message({ cmd: "decryptcbc", key: n, input: a }, i)
      : pplastpass_send_message({ cmd: "decrypt", key: n, input: a }, i)
    : dec(a, AES.hex2bin(n), !1, i);
}
function fastEncryptAttachments(e, a, n) {
  var r = [],
    i = 0,
    t,
    t;
  for (t in a) a.hasOwnProperty(t) && void 0 !== a[t] && i++;
  for (t in a)
    a.hasOwnProperty(t) &&
      void 0 !== a[t] &&
      !(function (t) {
        enccbc(a[t].bytes, e, function (e) {
          (r[r.length] = { id: a[t].id, data: e }), r.length == i && n(r);
        });
      })(t);
}
function allow_nplastpass() {
  return !0;
}
(this.lpgs = function (e, t) {
  return gs(e, t);
}),
  "undefined" != typeof chrome &&
    void 0 !== chrome.omnibox &&
    (chrome.omnibox.onInputChanged.addListener(function (e, t) {
      if (lploggedin) {
        if (0 != e.length) {
          var a = [],
            n = !g_prompts.edit_sn_prompt && get_searchNotesPref(),
            r = search_results(e.toLowerCase(), n),
            i = (r.sort(lp_sort_case_insensitive_name), 0),
            o;
          for (o in r) {
            var s = r[o],
              l,
              _ = "id",
              l,
              s;
            if (
              (s.sn ? ((l = of(s.name)), (_ = "sn")) : ((l = of(s.name)), "" != (s = getusernamefromacct(s)) && (l += " (" + of(s) + ")")),
              a.push({ content: gs("Launch") + " " + l + "     " + _ + ":" + get_record_id(r[o]), description: l }),
              7 < i++)
            )
              break;
          }
          t(a);
        }
      } else t([{ content: "login", description: gs("Login to LastPass") }]);
    }),
    chrome.omnibox.onInputEntered.addListener(function (e) {
      var t, a, t, a, t, a;
      (lploggedin && "login" != e) || open_login(),
        /id:\d+$/.test(e)
          ? ((a = (t = e.split("id:"))[1]), launchautologin(a))
          : /id:app\d+$/.test(e)
          ? launch((a = (t = e.split("id:"))[1]))
          : /sn:\d+$/.test(e) && ((a = (t = e.split("sn:"))[1]), editAid(a));
    })),
  (g_fixpbkdf2 = !0);
var g_onloaddelay = 0;
function get_safari_version() {
  var e = navigator.appVersion.match(/Version\/(\d+\.\d+)(\.\d+)? Safari/),
    t = 0;
  return (t = e ? parseFloat(e[1]) : t);
}
function handleContextMenu(e) {
  reduxApp.getPreference("hideContextMenus") || e.contextMenu.appendContextMenuItem("LPContextMenuClick", gs("LastPass"));
}
function pplastpass_load(e) {
  g_ischrome &&
    "pplastpass" == e.target.id &&
    pplastpass_send_message({ cmd: "ping" }, function (e) {
      "pong" == e && (g_pplastpass_loaded = !0);
    });
}
function pplastpass_message(e) {
  var e = JSON.parse(e.data),
    t;
  "function" == typeof g_pplastpass_callbacks[e.id] &&
    ((t = g_pplastpass_callbacks[e.id]), (g_pplastpass_callbacks[e.id] = null), t(e.retval));
}
function have_pplastpass() {
  return g_pplastpass_loaded;
}
(doDelayedOnload = function () {
  var e;
  g_ischrome && !is_edge() && g_do_native_messaging
    ? (g_onloaddelay++,
      (e = localStorage_getItem("hadNativeMessaging")),
      have_binary() || (null == e && 5 < g_onloaddelay) || 20 < g_onloaddelay
        ? onLoad()
        : setTimeout(function () {
            doDelayedOnload();
          }, 100))
    : window.openDatabase || !window.indexedDB || (0 == g_onloaddelay && opendb(), g_onloaddelay++, g_db) || 20 < g_onloaddelay
    ? onLoad()
    : setTimeout(function () {
        doDelayedOnload();
      }, 100);
}),
  "undefined" != typeof document
    ? ("function" == typeof LPPlatform.isSPA && LPPlatform.isSPA()
        ? top.Topics.get(top.Topics.SPA_IFRAME_WEB_CLIENT_INITIALIZED).subscribe(function () {
            top.document.documentElement.getAttribute("data-extension-enabled")
              ? reduxApp.getLoginDataFromExtension().then(function (e) {
                  var t;
                  (g_local_key = AES.hex2bin(e.key)),
                    e.username &&
                      ((g_username = e.username),
                      (g_username_hash = SHA256(e.username)),
                      (t = 0 < e.iterations ? e.iterations : localStorage_getItem(g_username_hash + "_key_iter"))) &&
                      (reduxApp.updateIterations(e.username, t), localStorage_setItem(g_username_hash + "_key_iter", t)),
                    doDelayedOnload();
                })
              : doDelayedOnload();
          })
        : document.addEventListener("DOMContentLoaded", function () {
            window.addEventListener("load", function () {
              setTimeout(function () {
                doDelayedOnload();
              }, 0);
            });
          }),
      window.addEventListener("unload", function () {
        onUnload();
      }))
    : doDelayedOnload();
var g_pplastpass_callbacks = new Object();
function pplastpass_send_message(e, t) {
  var a = new Date().getTime() + "_" + Math.floor(100 * Math.random());
  (g_pplastpass_callbacks[a] = t), (e.id = a), document.getElementById("pplastpass").postMessage(JSON.stringify(e));
}
function disablesitealert(e) {
  var t = g_sites[e],
    e,
    t;
  t &&
    ((t.noalert = 1),
    (e = "id=" + LP.en(e)),
    (e += 0 == (t = issharedfolder(g_shares, t.group)) ? "" : "&sharedfolderid=" + en(t.id)),
    lpMakeRequest(
      base_url + "update_alert.php",
      e,
      function () {},
      function () {}
    ),
    setTimeout(function () {
      rewritelocalfile();
    }, 0));
}
function disableDropDownNotification(e) {
  "securityScore" === e && localStorage_setItem(g_username_hash + "_ignoreSecurityScoreAlert", !0);
}
function dopwchange(r, e, i, t) {
  if (!g_cpwbot) return !1;
  if (!check_ident_aid(r)) return !1;
  var a = get_record(r);
  if (!a) return !1;
  var n = a.pwprotect;
  if (!e && (n || g_prompts.login_site_prompt))
    return (
      security_prompt(function () {
        dopwchange(r, !0, i);
      }),
      !1
    );
  g_cpwbot && CPWbot_bg && (CPWbot_bg.site_html_url = geturlfromacct(a)),
    (CPWbot_bg = "undefined" != typeof CPWbot_bg_lib ? CPWbot_bg || new CPWbot_bg_lib() : CPWbot_bg).mark_timestamp("dopwchange"),
    CPWbot_bg.preinit();
  var o = new Date().getTime(),
    s = CPWbot_bg.new_session(a.url);
  return (
    (CPWbot_bg.broken_hearted_st_id = setTimeout(function () {
      CPWbot_bg.broken_hearted(s);
    }, 60001)),
    g_ischrome &&
      chrome.tabs.onRemoved.addListener(function (e, t) {
        !CPWbot_bg ||
          e != CPWbot_bg.get_pwchangetabid() ||
          (CPWbatch && CPWbatch.cpw_get_batchjob_state() && CPWbatch.cpw_get_batchjob_state() != F_DONE) ||
          cpwbot_halt();
      }),
    get_recipe_for_url(a.url, function (e) {
      if (CPWbot_bg && e) {
        var t = !0,
          a = !0;
        if ((CPWbot_bg.mark_timestamp("recipe_callback"), !CPWbot_bg.get_login_url(e)))
          return console_error("bad recipe - login_url property is not defined"), CPWbot_bg.panic("bad recipe"), !1;
        null != i
          ? ((CPWbot_bg.originating_tabid = gettabid(i)), (CPWbot_bg.originating_tab = i))
          : ((CPWbot_bg.originating_tabid = null), (CPWbot_bg.originating_tab = null));
        var n = { aid: r, recipe: e };
        return (
          openURL(
            CPWbot_bg.get_login_url(e),
            function (e, t) {
              var a = gettabid(e),
                n;
              (CPWbot_bg.destination_tabid = a),
                (CPWbot_bg.destination_tab = e),
                CPWbot_bg.mark_timestamp("openurl_callback"),
                CPWbot_bg.initialize({ tabid: a, aid: t.aid, recipe: t.recipe }),
                CPWbatch && CPWbatch.cpw_get_batchjob_state() && CPWbatch.register_worker(a, t.aid),
                g_robots_txt ||
                  ((n = 2),
                  CPWbot_bg.do_milestone(a, 2, t.recipe),
                  CPWbot_bg.initiate_on_complete(a, t),
                  (g_launches[gettabid(e)] = t.aid));
            },
            n,
            !0,
            !0,
            !0,
            !0
          ),
          !0
        );
      }
      return !1;
    }),
    !0
  );
}
function disableallalerts() {
  var e;
  (g_disablepwalerts = !0),
    lpMakeRequest(
      base_url + "update_alert.php",
      "all=1",
      function () {},
      function () {}
    );
}
function checkgeneratepassword(e) {
  sendCS(e, { cmd: "checkgeneratepassword" }, "all");
}
function parse_formdata(e) {
  for (var t = e.formdata2.split("\n"), a = !1, n = !1, r = "", i = "", o = new Array(), s = 0; s < t.length; s++) {
    var l,
      _ = t[s].split("\t"),
      c,
      _;
    (4 != _.length && 5 != _.length) ||
      ((c = decodeURIComponent(_[2])),
      (_ = _[3]),
      (a && n) || ("text" != _ && "email" != _ && "tel" != _) || !c.length || ((r = c), (a = !0)),
      "password" == _ && ((o[o.length] = c), !n) && c.length && ((i = c), (n = !0)));
  }
  (e.username = r), (e.password = i), (e.formdata = e.formdata2);
}
function handleGetNevers(e, t) {
  var a;
  setcurrenturl(t), sendCS(e, { cmd: "gotnevers", g_nevers: LPJSON.stringify(getnevers()) }, "all");
}
function isEmptyObject(e) {
  return 0 === Object.keys(e).length;
}
function can_allow_reprompt_skip() {
  return !(g_prompts.company_login_site_prompt || g_prompts.company_copyview_site_prompt);
}
function update_prefs() {}
function changepw_wrapper(e) {
  changePassword(e.newpw, new Array(e.singleaid), void 0 !== e.autochange ? e.autochange : null);
}
function openchangepw_wrapper(e) {
  openchangepw(e.newpw, e.tld, void 0 === e.excludeid ? "" : e.excludeid);
}
function remember_changed_pw(e, t) {
  return !(!e || !t || ((g_didchangepw[SHA256(e + t)] = new Date().getTime()), 0));
}
var g_inner_text = [];
function got_inner_text_handler(e, t) {
  g_cpwbot, (g_inner_text[e] = t.buf);
}
function got_inner_html_handler(e, t) {
  return !0;
}
function get_cs_inner_text(e, t) {
  sendCS(e, { cmd: "get_inner_text" }, t);
}
function browser_focus() {
  g_ischrome && chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, { focused: !0 });
}
function send_sms_passcodes(e, t) {
  (t = t || function () {}),
    lpMakeRequest(
      base_url + "send_sms_passcodes.php",
      e,
      function () {
        t(gs("An SMS passcode has been sent to your mobile device."));
      },
      function () {
        t(gs("Request failed; is your Internet connection down?"));
      }
    );
}
function create_account_safe(e, t, a) {
  (e =
    (e = (e += "&language2=" + encodeURIComponent(getLanguage())) + "&method=" + encodeURIComponent(get_method())) +
    get_devicetype_param()),
    lpMakeRequest(
      base_url + "create_account.php",
      e,
      function (e) {
        4 === e.readyState && 200 === e.status && t(e.responseText);
      },
      a
    );
}
function create_account(e, t, a) {
  (e =
    (e = (e += "&language2=" + encodeURIComponent(getLanguage())) + "&method=" + encodeURIComponent(get_method())) +
    get_devicetype_param()),
    lpMakeRequest(base_url + "create_account.php", e, t, a);
}
function enable_credit_monitoring(e, t, a) {
  lpMakeRequest(base_url + "creditmon.php", e, t, a);
}
var g_hotkeys = [];
function setup_hotkeys() {}
function base64_to_binary_ciphertext(e) {
  var t = e.split("|"),
    a = "",
    n,
    t,
    a;
  return (a =
    2 == t.length ? ((n = t[0].slice(1)), (t = t[1]), "!" + atob(n) + atob(t)) : "!" == e.charAt(0) ? atob(e.slice(1)) : "!" + atob(e));
}
function aidkiller(e, t, a) {
  setTimeout(function () {
    void 0 !== a && a && ((g_cached_hash = null), (g_hash_live = 0));
  }, t);
}
function fix_sites_secure_reprompt() {}
function getLoginSitePrompt() {
  return g_prompts.login_site_prompt;
}
function getNameUsernameFromLPA(e) {
  var t, e;
  return e ? ((t = e.name), "" != (e = getusernamefromacct(e)) && (t += " (" + e + ")"), t) : "";
}
function get_breach_data() {
  return g_breach_data;
}
function needs_secure_reprompt(e) {
  if (e && "string" != typeof e.appaid) {
    var t = get_record(e.aid),
      a,
      a;
    for (a in t) if (t[a] == SecureReprompter.secure_reprompt_token) return !0;
    for (a in t.fields) if (t.fields[a] == SecureReprompter.secure_reprompt_token) return !0;
  }
  return !1;
}
function frame_and_topdoc_has_same_domain(e) {
  var t = ftd_get_frameparenturl(e),
    e = ftd_get_topurl(e);
  return !!(t && e && compare_tlds(lp_gettld_url(e), lp_gettld_url(t)));
}
function ftd_report_error(e, t) {
  var t = sprintf(
    "cmd=showiframeconfirm type=%s tldurl=%s tldurliframe=%s",
    t,
    lpcanonizeUrl(ftd_get_topurl(e)),
    lpcanonizeUrl(ftd_get_frameparenturl(e))
  );
  return lplog("ftd_report_error : " + t), lpReportError(t);
}
function ftd_get_frameparenturl(e) {
  return null === g_popup_url_by_tabid || null === e || void 0 === g_popup_url_by_tabid[e] ? "" : g_popup_url_by_tabid[e];
}
function ftd_get_topurl(e) {
  if (null === g_CS_tops || null === g_CS || void 0 === g_CS[e] || null === g_CS[e] || null === e) return "";
  var t = "",
    a = g_CS_tops[e],
    a,
    n;
  if (null == a) {
    if ((console.warn("no topdocnum for tabid=" + e), g_ischrome))
      try {
        for (n in g_CS[e])
          if (
            g_CS[e].hasOwnProperty(n) &&
            void 0 !== g_CS[e][n].sender &&
            g_CS[e][n].sender &&
            g_CS[e][n].sender.tab &&
            g_CS[e][n].sender.tab.url
          ) {
            t = g_CS[e][n].sender.tab.url;
            break;
          }
      } catch (e) {}
  } else
    g_CS[e] &&
      (a = g_CS[e][a]) &&
      !(t = gettaburl(a)) &&
      a.name &&
      ((t = a.name), g_isedge) &&
      0 < t.indexOf("|") &&
      (t = t.substring(t.indexOf("|") + 1));
  return t;
}
function lpConfirmYesNo(e, t) {
  return confirm(e);
}
function getnevers_given(e, t) {
  var a,
    n,
    r,
    n,
    r,
    a,
    e = (e ? ((a = e), (n = getcurrenturl()), (r = lp_gettld_url(n))) : ((r = n = ""), (a = getcurrenturl())), lp_gettld_url(a)),
    a = lpcanonizeUrl(a),
    t = t ? t : [];
  return (
    i(t, "neveraccounts", a, e, n, r),
    i(t, "neverautologins", a, e, n, r),
    i(t, "neverformfills", a, e, n, r),
    i(t, "nevergenerates", a, e, n, r),
    i(t, "neverautofills", a, e, n, r),
    i(t, "nevershowicons", a, e, n, r),
    i(t, "neverenablelp", a, e, n, r),
    t
  );
  function i(e, t, a, n, r, i) {
    if (g_neverurls[t] && 0 < g_neverurls[t].length)
      for (var o = 0; g_neverurls[t] && o < g_neverurls[t].length; o++) {
        var s = g_neverurls[t][o];
        s == a
          ? (e.push({ type: t, url: s, domain: 0 }), e.push({ type: t, url: r, domain: 0 }))
          : s == n && (e.push({ type: t, url: s, domain: 1 }), e.push({ type: t, url: i, domain: 1 }));
      }
  }
}
function openlastpasslegacy() {
  g_legacy_enabled && (unlock_plug2web(), openURL(base_url + "?dolegacy=1&lpnorefresh=1"));
}
function get_equiv_domains_for_tab(e) {}
function start_trial() {
  var e = multifactor_getdata("postdata");
  return !(
    !g_trial_available ||
    !e ||
    "" == e ||
    ((e += "&starttrial=1"), lpMakeRequest(base_url + "login.php", e, lpLoginResponse, lpLoginError), 0)
  );
}
function cleardeccache() {
  "undefined" != typeof mdec_cache && (mdec_cache = new Array()), "undefined" != typeof mdec_cache_key && (mdec_cache_key = null);
}
function is_human_initiated_action(e) {
  var t = !1;
  return (t = lp_in_array(e.cmd, ["fillfield", "fillbest"]) && e.manualfill ? !0 : t);
}
function repromptSuccess() {
  g_reprompt_callback();
}
function get_plugin_capabilities_handler(e, t) {
  try {
    var a = {
      lpversion: lpversion,
      have_nplastpass: have_nplastpass(),
      nplastpass_version: get_nplastpass_version(),
      have_native_messaging: have_native_messaging(),
      have_native_messaging_permission: g_have_native_messaging_permission,
      have_ws: have_ws(),
      have_pplastpass: have_pplastpass(),
      can_cpwbot: g_cpwbot ? 1 : 0,
      can_disable_lp: 1
    };
    e && sendCS(e, { cmd: "got_plugin_capabilities", capabilities: JSON.stringify(a) });
  } catch (e) {
    return console_warn(e), !1;
  }
  return !0;
}
function refreshGroupNames(e) {
  LPPlatform.refreshGroupNames(e);
}
(SecureReprompter = new (function () {
  (this.secretcache = {}),
    (this.secure_reprompt_token = "<SECURE_REPROMPT>"),
    (this.most_recent_aid = null),
    (this.add_secret = function (e, t, a, n) {
      for (var r in ((this.most_recent_aid = e), t.fields))
        "password" == t.fields[r].type && (t.fields[r].value = base64_to_binary_ciphertext(t.fields[r].value));
      var i = this.get_secret_field(t),
        o,
        s = base64_to_binary_ciphertext(t[i]);
      (t[i] = s),
        0 === (a *= 1e3) || (void 0 === a && void 0 !== n) ? (a = 3e3) : (g_cached_hash = n),
        a < 3e3 && (a = 3e3),
        (this.secretcache[e] = [t, !0]),
        (g_secret_cache = this.secretcache),
        g_hash_live < a ? (aidkiller(e, a, 1), (g_hash_live = a)) : aidkiller(e, a);
    }),
    (this.get_secret = function (e) {
      if (void 0 === e && void 0 === this.most_recent_aid) return null;
      void 0 === e && (e = this.most_recent_aid);
      var e = this.secretcache[e];
      return void 0 === e ? null : (e[1], e[0]);
    }),
    (this.get_secret_field = function (e) {
      return "http://sn" === e.url ? "extra" : "password";
    }),
    (this.should_secure_reprompt = function (e) {
      if ("http://sn" == e.url) {
        if (e.extra == this.secure_reprompt_token) return !0;
      } else if (e.password == this.secure_reprompt_token) return !0;
      for (var t in e.fields) if ("password" == e.fields[t].type && e.fields[t].value == this.secure_reprompt_token) return !0;
      return !1;
    }),
    (this.g_secure_reprompt_token = "<SECURE_REPROMPT>"),
    (this.set_securereprompt_secret = function (e) {
      this.g_securereprompt_secret = e;
    }),
    (this.get_securereprompt_secret = function () {
      var e = this.g_securereprompt_secret;
      return (this.g_securereprompt_secret = null), e;
    });
})()),
  (LPData = (function (n) {
    var e, t;
    return {
      getData: function (e) {
        var t = !1;
        if (e.triggers)
          for (var a in ((t = !0), e.triggers))
            if (e.triggers[a] !== n[a]) {
              t = !1;
              break;
            }
        e.callback(
          Interfaces.getPrimitives({ context: e.context, interface: Interfaces.BackgroundInterface, source: n, syncronizedOnly: t })
        );
      },
      setValue: function (e, t) {
        LPReflection.setValue(Interfaces.BackgroundInterface, e, t);
      }
    };
  })(this));
var IntroTutorial = (function () {
    var n = {},
      e = (d(), !1),
      t = !1;
    function a() {
      Topics.get(Topics.MANUAL_LOGIN_FINISHED).subscribeFirst(function () {
        (e = !0), r();
      }),
        Topics.get(Topics.ACCTS_VERSION_UPDATED).subscribeFirst(function () {
          (t = !0), r();
        }),
        Topics.get(Topics.CLEAR_DATA).subscribeFirst(function () {
          e = t = !1;
        }),
        Topics.get(Topics.LOGIN_FINISHED).subscribeFirst(function () {
          var e = Preferences.get("ShowIntroTutorialLater", null);
          (e && Date.now() < new Date(e)) ||
            g_is_restricted ||
            !reduxApp.getState().user.showIconVault ||
            g_manual_login ||
            reduxApp.getState().settings.features.secondary_onboarding ||
            (reduxApp.setShowIconVault(!1), openvault("false", "openInContextOnboarding"));
        });
    }
    function r() {
      e &&
        t &&
        ((t = e = !1),
        reduxApp.getState().settings.features.safari_legacy_messaging
          ? LPPlatform.openTab({ url: "https://lastpass.com/safariAppExtension.php?source=login" })
          : g_is_restricted || "context" !== reduxApp.getState().user.introTutorialVersion
          ? g_manual_login && (reduxApp.getPreference("showvault") || g_showvaultalways) && openvault(1)
          : LPPlatform.getCurrentTabDetails(function (e) {
              var t;
              hassites()
                ? g_manual_login && (reduxApp.getPreference("showvault") || g_showvaultalways) && openvault(1)
                : Preferences.get("showIntroTutorial")
                ? o(e)
                  ? ((t = e.tabURL), s(e) && (t = f(e.tabURL)), LPPlatform.navigateTab({ tabId: e.tabID, url: t, loadHandler: u }))
                  : removeModalOverlay(e.tabID)
                : i(e) || (removeModalOverlay(e.tabID), LPPlatform.hideYoureAlmostDoneMarketingOverlay(e.tabID));
            }));
    }
    function i(e) {
      return 0 <= e.tabURL.indexOf("lastpass.com") && 0 <= e.tabURL.indexOf("storeRedirect");
    }
    function o(e) {
      return 0 <= e.tabURL.indexOf("lastpass.com") && 0 <= e.tabURL.indexOf("lpInstall");
    }
    function s(e) {
      return 0 <= e.tabURL.indexOf("lastpass.com") && 0 <= e.tabURL.indexOf("families");
    }
    function l(e, t) {
      var a;
    }
    function _() {
      n.isInContext
        ? setTimeout(function () {
            get_selected_tab(null, function (e) {
              var t = gettabid(e);
              p(e.url)
                ? LPTabs.get({ tabID: t })
                    .getTop()
                    .LPFrame.openDialog("inContextTutorialLogoutPromptDialog", { hasOverlay: !0 }, { css: { top: 0, right: 0 } })
                : IntroTutorial.resetState();
            });
          }, 2e3)
        : openvault(),
        Topics.get(Topics.SITE_ADDED).unsubscribe(_);
    }
    function c(e) {
      for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
      n.enabled ? Topics.get(Topics.SITE_ADDED).subscribe(_) : Topics.get(Topics.SITE_ADDED).unsubscribe(_);
    }
    function g(e) {
      var t = {},
        a;
      for (a in n) n.hasOwnProperty(a) && (t[a] = n[a]);
      if (!e) return t;
      e(t);
    }
    function p(e) {
      for (var t = 0; t < IntroTutorial.getState().domains.length; t++) if (e.includes(IntroTutorial.getState().domains[t])) return !0;
      return !1;
    }
    function d() {
      n = {
        enabled: !1,
        domains: [],
        firstLogin: !0,
        name: null,
        isInContext: !1,
        isLoginTheLastPassWay: !1,
        isAllSet: !1,
        isSiteSaved: !1
      };
    }
    function u(e) {
      var t = Preferences.get("ShowIntroTutorialLater", null),
        a;
      (t && Date.now() < new Date(t)) ||
        (e && e.tabDetails && e.getTop().LPFrame.openDialog("inContextTutorialWelcomeDialog", null, { css: { top: 0, right: 0 } }));
    }
    function f(e) {
      var t;
      return e.substr(0, e.indexOf("?")) + "/thanksinstall";
    }
    function m(t) {
      var a = { css: { top: 0, right: 0, width: "331px", height: "200px" } };
      "skipped" === t.textChoice && ((a.css.width = "100%"), (a.css.height = "100%")),
        get_selected_tab(null, function (e) {
          var e = gettabid(e);
          LPTabs.get({ tabID: e }).getTop().LPFrame.openDialog("inContextTutorialCompleteDialog", t, a);
        });
    }
    return { init: a, setState: c, getState: g, resetState: d, completeTutorial: m, isOnStateDomain: p };
  })(),
  LPIcons =
    (IntroTutorial.init(),
    (function () {
      var e;
      return {
        get: function (e) {
          return getbigicon(e.url, e);
        }
      };
    })()),
  OmsNotificationPopup = {
    startOms: function () {
      omsNotification.startOms();
    },
    cancelNotification: function () {
      omsNotification.cancelNotification();
    },
    postponeNotification: function (e) {
      omsNotification.postponeNotification(e);
    },
    setState: function (e) {
      omsNotification.setState(e);
    },
    getState: function () {
      return omsNotification.getState();
    }
  };
function showModalOverlay(e) {
  LPPlatform.showModalOverlay(e);
}
function removeModalOverlay(e) {
  LPPlatform.removeModalOverlay(e);
}
function autoChangePassword(e) {
  sendLpImprove("auto_change_password_click"), editAid(e, null, null, "1");
}
function getLinkedAccount(e) {
  e && e(getacct(get_personal_linked()));
}
function getVersion(e) {
  e && e(lpversion);
}
function userHasAccount(t) {
  t &&
    LPServer.lmiapi.jsonRequest({
      url: "lmiapi/user/has-account",
      type: "GET",
      CSRFToken: !1,
      success: function (e) {
        t("1" === e.hasAccount);
      },
      callbacks: [
        function () {
          t(!1);
        }
      ]
    });
}
function getCompanyLicensing(e) {
  LPServer.lmiapi.jsonRequest({
    type: "GET",
    url: "teams-api/my-company/showlicensing",
    success: e,
    callbacks: { TrialExpired: e, Expired: e, RecentlyExpired: e }
  });
}
function isCompanyExpired(e) {
  LPServer.lmiapi.jsonRequest({ type: "GET", url: "lmiapi/my-company/is-expired", success: e });
}
function openOnNewTab(e) {
  openURL(LP.lp_base + e, function () {}, null, !0, !0, !1, !1);
}
function setLanguagePreference(e, t) {
  reduxApp.setLanguage(t);
}
function switchLanguage(e) {
  var t = checkCorrectLanguageCodeFormat((e = e || "en-US"));
  if (!t) throw new Error("Invalid Language Code Format");
  reduxApp.setLanguage(e),
    include_language(transformLocaleCode(t)),
    g_issafari_appext && Preferences.set("language", transformLocaleCode(t));
  var a = {};
  (a.language = t),
    (a.shouldUpdateOnNextLogin = !!g_loggedinoffline),
    localStorage_setItem("language_" + g_username_hash, JSON.stringify(a)),
    localStorage_setItem("loggedOutLanguage", t),
    setLanguagePreference(g_username_hash, transformLocaleCode(e));
}
function saveUserLanguage(e, t) {
  var e = checkCorrectLanguageCodeFormat((e = e || "en-US"));
  if (!e) throw new Error("Invalid Language Code Format");
  var a = JSON.parse(localStorage_getItem("language_" + g_username_hash));
  LPServer.lmiapi.jsonRequest({
    type: "POST",
    url: "lmiapi/users/me/language",
    data: { language: e },
    success: function () {
      a.shouldUpdateOnNextLogin &&
        ((a.shouldUpdateOnNextLogin = !1), localStorage_setItem("language_" + g_username_hash, JSON.stringify(a))),
        "function" == typeof t && t();
    }
  });
}
function checkCorrectLanguageCodeFormat(e) {
  var t,
    e = e.match(/([a-zA-Z]{2})[_-]?(.+)?/);
  return !(!e || !e.length) && [e[1].toLowerCase(), (e[2] || e[1]).toUpperCase()].join("-");
}
function setLanguageNotificationDismissal(e) {
  LPServer.lmiapi.jsonRequest({
    type: "POST",
    url: "lmiapi/users/me/language/dismiss-notification",
    success: function () {
      (g_show_original_language_changed_notification = !1), e();
    }
  });
}
function checkShouldShowBillingAddressNotification(t) {
  LPServer.lmiapi.jsonRequest({
    type: "GET",
    url: "lmiapi/users/me/billing-info/should-show-notification",
    success: function (e) {
      (g_show_billing_address_notification = e.result), t();
    }
  });
}
function hideBillingAddressNotification() {
  g_show_billing_address_notification = !1;
}
function setPrimaryDevice(t, a) {
  var e = get_method();
  LPPlatform.ajax({
    url: getbaseurl() + "lmiapi/users/me/primary-device",
    headers: { "X-CSRF-TOKEN": decodeURIComponent(g_token) },
    data: JSON.stringify({ primaryDevice: e }),
    type: "POST",
    dataType: "json",
    contentType: "application/json",
    success: function (e) {
      (g_is_restricted = !1), drawIconAtRotation(), reduxApp.setMultiDeviceRestriction({ isRestricted: g_is_restricted }), t(e);
    },
    error: function (e) {
      console.log("Error setting primary device. Error: " + e), a();
    }
  });
}
function setDisplayRetrialOffer(e, t, a) {
  LPPlatform.ajax({
    url: base_url + "lmiapi/users/me/premium-retrial",
    headers: { "X-CSRF-TOKEN": decodeURIComponent(g_token) },
    data: JSON.stringify({ status: e ? "started" : "dismissed" }),
    type: "POST",
    dataType: "json",
    contentType: "application/json",
    success: function () {
      reduxApp.setFeatures({ premium_retrial: !1 }), e && (LP.lplogincheck(!0), Topics.get(Topics.ACCTS_VERSION_UPDATED).publish()), t();
    },
    error: function (e) {
      console.log("Error setting display of retrial offer. Error: ", e), a();
    }
  });
}
function getRetrialOfferDeepLinkEnabled(t) {
  LPPlatform.ajax({
    url: base_url + "lmiapi/users/me/premium-retrial/eligible",
    headers: { "X-CSRF-TOKEN": decodeURIComponent(g_token) },
    type: "GET",
    success: function (e) {
      !0 === e.eligible && t(e);
    },
    error: function (e) {
      console.error("Error setting display of retrial offer. Error: ", e);
    }
  });
}
function setUpSessionLifetimeOverrideCheck(e) {
  var t, a;
  g_session_lifetime_policy_interval_handle && clearInterval(g_session_lifetime_policy_interval_handle),
    (g_session_is_valid_until = null),
    e &&
      ((e = parseInt(e)),
      (g_session_is_valid_until = new Date(Date.now())).setSeconds(g_session_is_valid_until.getSeconds() + e),
      (t = !1),
      (a = setInterval(function () {
        !t &&
          g_session_is_valid_until.getTime() - Date.now() < 12e4 &&
          ((t = !0),
          lpshowError(
            gs("For your protection, your session will expire in 2 minutes. This is required by your organization's security policy.")
          )),
          g_session_is_valid_until.getTime() - Date.now() < -1e4 && (clearInterval(a), loggedOut(!1, "SessionLifetimeOverride"));
      }, 1e4)));
}
function formatBirthday(e) {
  if (!e) return e;
  var t = e.split(",");
  if (!t || 3 != t.length) return e;
  var a = t[1],
    n = t[2],
    r;
  switch (t[0]) {
    case "January":
      r = "01";
      break;
    case "February":
      r = "02";
      break;
    case "March":
      r = "03";
      break;
    case "April":
      r = "04";
      break;
    case "May":
      r = "05";
      break;
    case "June":
      r = "06";
      break;
    case "July":
      r = "07";
      break;
    case "August":
      r = "08";
      break;
    case "September":
      r = "09";
      break;
    case "October":
      r = "10";
      break;
    case "November":
      r = "11";
      break;
    case "December":
      r = "12";
  }
  return r ? n + "-" + r + "-" + a + "T00:00:00.000+00:00" : e;
}
function makeLoginCheck() {
  lplogincheck2();
}
function setDeviceLimitNotification(e) {
  g_show_device_limit_notification = e;
}
function setWeakPasswordBadge(e) {
  set_badge(
    (g_notification_data = {
      cmd: "notification",
      type: (g_notification_type = "alert"),
      alerttype: "weak",
      name: e.defaultData.name,
      username: e.defaultData.unencryptedUsername,
      tld: e.defaultData.domain
    })
  ),
    drawIconAtRotation(0);
}
var timoutOfSetSecurityScoreAlertBadge = null;
function setSecurityScoreAlertBadge() {
  timoutOfSetSecurityScoreAlertBadge && clearTimeout(timoutOfSetSecurityScoreAlertBadge),
    (timoutOfSetSecurityScoreAlertBadge = setTimeout(function () {
      setActualSecurityScoreAlertBadge(), (timoutOfSetSecurityScoreAlertBadge = null);
    }, 15e3));
}
function setActualSecurityScoreAlertBadge() {
  var e = 0,
    e =
      ("undefined" != typeof reduxApp &&
        (e += Object.values(reduxApp.getState().vaultData.passwords).filter(function (e) {
          return !e.record.sharedFolderId;
        }).length),
      ("undefined" != typeof reduxApp && 75 <= reduxApp.getState().securityDashboard.score) ||
        e < 5 ||
        Object.keys(g_sites).length < 4 ||
        (null !== g_badgedata && ("duplicate" === g_badgedata.alerttype || "weak" === g_badgedata.alerttype)));
  localStorage_getItem(g_username_hash + "_ignoreSecurityScoreAlert") || e
    ? null != g_badgedata && "securityScore" === g_badgedata.alerttype && (set_badge((g_notification_data = null)), drawIconAtRotation())
    : (set_badge((g_notification_data = { cmd: "notification", type: (g_notification_type = "alert"), alerttype: "securityScore" })),
      drawIconAtRotation());
}
function checkDuplicatePasswordAndSetBadge(e) {
  try {
    var t = !1,
      a = e.dialogData.password,
      n;
    if (a)
      for (var r in g_sites) {
        if (!g_sites[r].sharefolderid)
          if (getpasswordfromacct(g_sites[r]) === a) {
            t = !0;
            break;
          }
      }
    t &&
      (set_badge(
        (g_notification_data = {
          cmd: "notification",
          type: (g_notification_type = "alert"),
          alerttype: "duplicate",
          name: e.defaultData.name,
          username: e.defaultData.unencryptedUsername,
          tld: e.defaultData.domain
        })
      ),
      drawIconAtRotation(0));
  } catch (e) {
    console.error("Reused password check error:", e);
  }
}
function fillNoteFromDropdown(e, t, a) {
  var n = g_securenotes[e];
  LegacyFillTracking.track(n.notetype, "Icon Dropdown"), fillitem(e, !0, void 0, void 0, void 0, t, a);
}
function singlefactorWinbioSet(e) {
  localStorage_setItem(g_username_hash + ".singlefactorWinbio", e);
}
function singlefactorWinbioGet() {
  var e = localStorage_getItem("lastusernamehash");
  return localStorage_getItem(e + ".singlefactorWinbio");
}
function isSiglefactorWinbioEnabled() {
  return have_binary() && singlefactorWinbioGet();
}
