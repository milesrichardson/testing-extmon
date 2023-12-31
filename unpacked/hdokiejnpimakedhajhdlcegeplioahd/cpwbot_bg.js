var CPWbot_bg,
  g_v2engine = !0,
  g_v3engine = !1,
  CPWbot_bg = CPWbot_bg || new CPWbot_bg_lib(),
  g_cpw_server_initiated_tabid = null,
  g_cpw_do_fakeui = !1,
  TYPE_ID = "id",
  TYPE_NAME = "name",
  TYPE_XPATH = "xpath",
  FN_LOGIN = 1,
  FN_PASSWORD = 2,
  FN_LOGIN_OTHER = 5,
  FN_CURRENT_PASS = 10,
  FN_NEW_PASS = 11,
  FN_NEW_PASS_CONFIRM = 12,
  FN_CPW_OTHER = 13,
  FN_CPW_INVALID = 14,
  FN_LOGIN_INVALID = 15,
  FN_LOGIN_SUCCESS = 16,
  FN_LOGIN_SUCCESS_INVALID = 17,
  FN_NAVIGATE_TO_CPW = 18,
  FN_CPW_SUCCESS = 19,
  FN_CPW_SUCCESS_INVALID = 20,
  FN_NAVIGATE_TO_ACCTMGMT = 21,
  FN_CPW_SUBMIT = 22,
  FN_IS_LOGGED_IN = 23,
  FN_IS_LOGGED_IN_NEGATION = 24,
  FN_LOGIN_SUBMIT = 25,
  FN_POPUP_EXISTS = 26,
  FN_POPUP_DISMISS = 27,
  FN_REVEAL_LOGIN = 28,
  FN_CHALLENGE_LOGIN = 29,
  FN_CHALLENGE_PASSWORD = 30,
  FN_CHALLENGE_OTHER = 31,
  FN_CHALLENGE_SUBMIT = 32,
  FN_CHALLENGE_INVALID = 33,
  FN_CHALLENGE_SUCCESS = 34,
  FN_CHALLENGE_SUCCESS_INVALID = 35,
  FN_EPHEMERAL_STATE = 37,
  FN_NAVIGATE_TO_LOGOUT = 38,
  FN_CAPTCHA = 39,
  FN_MULTI_FACTOR = 40,
  FN_PASSWORD_HINT = 41,
  FN_POPUP_EXISTS_INVALID = 42,
  FN_FAKEUI_LOGGED_OUT_1 = 43,
  FN_FAKEUI_LOGGED_OUT_2 = 44,
  FN_FAKEUI_LOGGED_OUT_3 = 45,
  FN_FAKEUI_LOGGED_OUT_INPUT = 46,
  FN_FAKEUI_LOGGED_IN_1 = 47,
  FN_FAKEUI_LOGGED_IN_2 = 48,
  FN_FAKEUI_LOGGED_IN_3 = 49,
  FN_FAKEUI_LOGGED_IN_INPUT = 50,
  FN_FORCE_FAIL = 51,
  FN_CAPTCHA_SUCCESS = 52,
  FN_MULTI_FACTOR_SUCCESS = 53,
  FN_PASSWORD_HINT_SUCCESS = 54,
  FN_LOGIN_ENTRY_INVALID = 55,
  FN_LOGIN_ENTRY_USERNAME = 56,
  FN_LOGIN_ENTRY_SUBMIT = 57,
  FN_LOGIN_ENTRY_PASSWORD = 58,
  FN_LOGIN_ENTRY_SUCCESS_INVALID = 59,
  FN_LOGIN_ENTRY_SUCCESS = 60,
  FN_REVEAL_LOGOUT = 61,
  CONST_CLICK_NOMINAL = 0,
  CONST_CLICK_NO_FOCUS = 1,
  CONST_CLICK_MOUSEDOWN = 2,
  CONST_CLICK_STRANGE = 3,
  JS_PRE_NAVIGATE_CPW = 1,
  JS_PRE_LOGIN = 2,
  JS_POST_NAVIGATE_CPW = 3,
  JS_POST_LOGIN = 4,
  JS_PRE_CPW = 5,
  JS_POST_CPW = 6,
  JS_PRE_ACCTMGMT = 7,
  JS_POST_ACCTMGMT = 8,
  JS_LOGIN_REVEAL = 9,
  JS_VALIDATE_LOGIN_SUCCESS = 10,
  JS_VALIDATE_CPW_SUCCESS = 11,
  JS_LOGIN_SUBMIT = 12,
  JS_FINISH = 13,
  JS_PRE_CHALLENGE = 14,
  JS_POST_CHALLENGE = 15,
  JS_CHALLENGE_SUBMIT = 16,
  JS_VALIDATE_CHALLENGE_SUCCESS = 17,
  JS_BEGIN = 18,
  JS_PRE_LOGOUT = 19,
  JS_POST_LOGOUT = 20,
  JS_LOGIN_ENTRY_SUBMIT = 21,
  JS_PRE_LOGIN_ENTRY = 22,
  JS_POST_LOGIN_ENTRY = 23,
  JS_VALIDATE_LOGIN_ENTRY_SUCCESS = 24,
  JS_PRE_DOCAPTCHA = 25,
  JS_POST_DOCAPTCHA = 26;
function replace_constants(e) {
  if (!e) return null;
  if (void 0 !== e.field_info)
    for (var t = 0; t < e.field_info.length; t++) {
      if (void 0 !== e.field_info[t].id_type)
        switch (e.field_info[t].id_type) {
          case "TYPE_ID":
            e.field_info[t].id_type = TYPE_ID;
            break;
          case "TYPE_NAME":
            e.field_info[t].id_type = TYPE_NAME;
            break;
          case "TYPE_XPATH":
            e.field_info[t].id_type = TYPE_XPATH;
        }
      if (void 0 !== e.field_info[t].id_function)
        switch (e.field_info[t].id_function) {
          case "FN_LOGIN":
            e.field_info[t].id_function = FN_LOGIN;
            break;
          case "FN_PASSWORD":
            e.field_info[t].id_function = FN_PASSWORD;
            break;
          case "FN_LOGIN_OTHER":
            e.field_info[t].id_function = FN_LOGIN_OTHER;
            break;
          case "FN_CURRENT_PASS":
            e.field_info[t].id_function = FN_CURRENT_PASS;
            break;
          case "FN_NEW_PASS":
            e.field_info[t].id_function = FN_NEW_PASS;
            break;
          case "FN_NEW_PASS_CONFIRM":
            e.field_info[t].id_function = FN_NEW_PASS_CONFIRM;
            break;
          case "FN_CPW_OTHER":
            e.field_info[t].id_function = FN_CPW_OTHER;
            break;
          case "FN_CPW_INVALID":
            e.field_info[t].id_function = FN_CPW_INVALID;
            break;
          case "FN_LOGIN_INVALID":
            e.field_info[t].id_function = FN_LOGIN_INVALID;
            break;
          case "FN_LOGIN_SUCCESS":
            e.field_info[t].id_function = FN_LOGIN_SUCCESS;
            break;
          case "FN_LOGIN_SUCCESS_INVALID":
            e.field_info[t].id_function = FN_LOGIN_SUCCESS_INVALID;
            break;
          case "FN_NAVIGATE_TO_CPW":
            e.field_info[t].id_function = FN_NAVIGATE_TO_CPW;
            break;
          case "FN_CPW_SUCCESS":
            e.field_info[t].id_function = FN_CPW_SUCCESS;
            break;
          case "FN_CPW_SUCCESS_INVALID":
            e.field_info[t].id_function = FN_CPW_SUCCESS_INVALID;
            break;
          case "FN_NAVIGATE_TO_ACCTMGMT":
            e.field_info[t].id_function = FN_NAVIGATE_TO_ACCTMGMT;
            break;
          case "FN_CPW_SUBMIT":
            e.field_info[t].id_function = FN_CPW_SUBMIT;
            break;
          case "FN_IS_LOGGED_IN":
            e.field_info[t].id_function = FN_IS_LOGGED_IN;
            break;
          case "FN_IS_LOGGED_IN_NEGATION":
            e.field_info[t].id_function = FN_IS_LOGGED_IN_NEGATION;
            break;
          case "FN_LOGIN_SUBMIT":
            e.field_info[t].id_function = FN_LOGIN_SUBMIT;
            break;
          case "FN_POPUP_EXISTS":
            e.field_info[t].id_function = FN_POPUP_EXISTS;
            break;
          case "FN_POPUP_DISMISS":
            e.field_info[t].id_function = FN_POPUP_DISMISS;
            break;
          case "FN_REVEAL_LOGIN":
            e.field_info[t].id_function = FN_REVEAL_LOGIN;
            break;
          case "FN_CHALLENGE_LOGIN":
            e.field_info[t].id_function = FN_CHALLENGE_LOGIN;
            break;
          case "FN_CHALLENGE_PASSWORD":
            e.field_info[t].id_function = FN_CHALLENGE_PASSWORD;
            break;
          case "FN_CHALLENGE_OTHER":
            e.field_info[t].id_function = FN_CHALLENGE_OTHER;
            break;
          case "FN_CHALLENGE_SUBMIT":
            e.field_info[t].id_function = FN_CHALLENGE_SUBMIT;
            break;
          case "FN_CHALLENGE_INVALID":
            e.field_info[t].id_function = FN_CHALLENGE_INVALID;
            break;
          case "FN_CHALLENGE_SUCCESS":
            e.field_info[t].id_function = FN_CHALLENGE_SUCCESS;
            break;
          case "FN_CHALLENGE_SUCCESS_INVALID":
            e.field_info[t].id_function = FN_CHALLENGE_SUCCESS_INVALID;
            break;
          case "FN_NAVIGATE_TO_LOGOUT":
            e.field_info[t].id_function = FN_NAVIGATE_TO_LOGOUT;
            break;
          case "FN_EPHEMERAL_STATE":
            e.field_info[t].id_function = FN_EPHEMERAL_STATE;
            break;
          case "FN_CAPTCHA":
            e.field_info[t].id_function = FN_CAPTCHA;
            break;
          case "FN_MULTI_FACTOR":
            e.field_info[t].id_function = FN_MULTI_FACTOR;
            break;
          case "FN_PASSWORD_HINT":
            e.field_info[t].id_function = FN_PASSWORD_HINT;
            break;
          case "FN_POPUP_EXISTS_INVALID":
            e.field_info[t].id_function = FN_POPUP_EXISTS_INVALID;
            break;
          case "FN_FORCE_FAIL":
            e.field_info[t].id_function = FN_FORCE_FAIL;
            break;
          case "FN_CAPTCHA_SUCCESS":
            e.field_info[t].id_function = FN_CAPTCHA_SUCCESS;
            break;
          case "FN_MULTI_FACTOR_SUCCESS":
            e.field_info[t].id_function = FN_MULTI_FACTOR_SUCCESS;
            break;
          case "FN_PASSWORD_HINT_SUCCESS":
            e.field_info[t].id_function = FN_PASSWORD_HINT_SUCCESS;
            break;
          case "FN_LOGIN_ENTRY_INVALID":
            e.field_info[t].id_function = FN_LOGIN_ENTRY_INVALID;
            break;
          case "FN_LOGIN_ENTRY_USERNAME":
            e.field_info[t].id_function = FN_LOGIN_ENTRY_USERNAME;
            break;
          case "FN_LOGIN_ENTRY_PASSWORD":
            e.field_info[t].id_function = FN_LOGIN_ENTRY_PASSWORD;
            break;
          case "FN_LOGIN_ENTRY_SUBMIT":
            e.field_info[t].id_function = FN_LOGIN_ENTRY_SUBMIT;
            break;
          case "FN_LOGIN_ENTRY_SUCCESS":
            e.field_info[t].id_function = FN_LOGIN_ENTRY_SUCCESS;
            break;
          case "FN_LOGIN_ENTRY_SUCCESS_INVALID":
            e.field_info[t].id_function = FN_LOGIN_ENTRY_SUCCESS_INVALID;
            break;
          case "FN_REVEAL_LOGOUT":
            e.field_info[t].id_function = FN_REVEAL_LOGOUT;
            break;
          case "FN_FAKEUI_LOGGED_IN_1":
            e.field_info[t].id_function = FN_FAKEUI_LOGGED_IN_1;
            break;
          case "FN_FAKEUI_LOGGED_IN_2":
            e.field_info[t].id_function = FN_FAKEUI_LOGGED_IN_2;
            break;
          case "FN_FAKEUI_LOGGED_IN_3":
            e.field_info[t].id_function = FN_FAKEUI_LOGGED_IN_3;
            break;
          case "FN_FAKEUI_LOGGED_IN_INPUT":
            e.field_info[t].id_function = FN_FAKEUI_LOGGED_IN_INPUT;
            break;
          case "FN_FAKEUI_LOGGED_OUT_1":
            e.field_info[t].id_function = FN_FAKEUI_LOGGED_OUT_1;
            break;
          case "FN_FAKEUI_LOGGED_OUT_2":
            e.field_info[t].id_function = FN_FAKEUI_LOGGED_OUT_2;
            break;
          case "FN_FAKEUI_LOGGED_OUT_3":
            e.field_info[t].id_function = FN_FAKEUI_LOGGED_OUT_3;
            break;
          case "FN_FAKEUI_LOGGED_OUT_OUTPUT":
            e.field_info[t].id_function = FN_FAKEUI_LOGGED_OUT_INPUT;
        }
    }
  if (void 0 !== e.jsfrags)
    for (var t = 0; t < e.jsfrags.length; t++)
      if (void 0 !== e.jsfrags[t].jstype)
        switch (e.jsfrags[t].jstype) {
          case "JS_PRE_NAVIGATE_CPW":
            e.jsfrags[t].jstype = JS_PRE_NAVIGATE_CPW;
            break;
          case "JS_PRE_LOGIN":
            e.jsfrags[t].jstype = JS_PRE_LOGIN;
            break;
          case "JS_POST_NAVIGATE_CPW":
            e.jsfrags[t].jstype = JS_POST_NAVIGATE_CPW;
            break;
          case "JS_POST_LOGIN":
            e.jsfrags[t].jstype = JS_POST_LOGIN;
            break;
          case "JS_PRE_CPW":
            e.jsfrags[t].jstype = JS_PRE_CPW;
            break;
          case "JS_POST_CPW":
            e.jsfrags[t].jstype = JS_POST_CPW;
            break;
          case "JS_PRE_ACCTMGMT":
            e.jsfrags[t].jstype = JS_PRE_ACCTMGMT;
            break;
          case "JS_POST_ACCTMGMT":
            e.jsfrags[t].jstype = JS_POST_ACCTMGMT;
            break;
          case "JS_LOGIN_REVEAL":
            e.jsfrags[t].jstype = JS_LOGIN_REVEAL;
            break;
          case "JS_VALIDATE_LOGIN_SUCCESS":
            e.jsfrags[t].jstype = JS_VALIDATE_LOGIN_SUCCESS;
            break;
          case "JS_VALIDATE_CPW_SUCCESS":
            e.jsfrags[t].jstype = JS_VALIDATE_CPW_SUCCESS;
            break;
          case "JS_LOGIN_SUBMIT":
            e.jsfrags[t].jstype = JS_LOGIN_SUBMIT;
            break;
          case "JS_FINISH":
            e.jsfrags[t].jstype = JS_FINISH;
            break;
          case "JS_PRE_CHALLENGE":
            e.jsfrags[t].jstype = JS_PRE_CHALLENGE;
            break;
          case "JS_POST_CHALLENGE":
            e.jsfrags[t].jstype = JS_POST_CHALLENGE;
            break;
          case "JS_CHALLENGE_SUBMIT":
            e.jsfrags[t].jstype = JS_CHALLENGE_SUBMIT;
            break;
          case "JS_VALIDATE_CHALLENGE_SUCCESS":
            e.jsfrags[t].jstype = JS_VALIDATE_CHALLENGE_SUCCESS;
            break;
          case "JS_BEGIN":
            e.jsfrags[t].jstype = JS_BEGIN;
            break;
          case "JS_PRE_LOGOUT":
            e.jsfrags[t].jstype = JS_PRE_LOGOUT;
            break;
          case "JS_POST_LOGOUT":
            e.jsfrags[t].jstype = JS_POST_LOGOUT;
            break;
          case "JS_PRE_LOGIN_ENTRY":
            e.jsfrags[t].jstype = JS_PRE_LOGIN_ENTRY;
            break;
          case "JS_POST_LOGIN_ENTRY":
            e.jsfrags[t].jstype = JS_POST_LOGIN_ENTRY;
            break;
          case "JS_LOGIN_ENTRY_SUBMIT":
            e.jsfrags[t].jstype = JS_LOGIN_ENTRY_SUBMIT;
            break;
          case "JS_PRE_DOCAPTCHA":
            e.jsfrags[t].jstype = JS_PRE_DOCAPTCHA;
            break;
          case "JS_POST_DOCAPTCHA":
            e.jsfrags[t].jstype = JS_POST_DOCAPTCHA;
        }
  if (void 0 !== e.click_flavor)
    switch (e.click_flavor) {
      case "CLICK_NO_FOCUS":
        e.click_flavor = CONST_CLICK_NO_FOCUS;
        break;
      case "CLICK_MOUSEDOWN":
        e.click_flavor = CONST_CLICK_MOUSEDOWN;
        break;
      case "CLICK_STRANGE":
        e.click_flavor = CONST_CLICK_STRANGE;
        break;
      default:
        e.click_flavor = CONST_CLICK_NOMINAL;
    }
  return e;
}
var DEFAULT_CLICK_DELAY = 250,
  DEFAULT_FILL_DELAY = 250,
  DEFAULT_SESSION_TIMEOUT = 12e4,
  DEFAULT_VALIDATE_TIMEOUT = 1e4,
  CLICK_RETRY_TIME = 5e3,
  recipe_template = {
    version: 1,
    symbolic: "",
    login_url: "",
    acctmgmt_url: null,
    cpw_url: "",
    logout_url: "",
    login_entry_url: "",
    fakeui_loggedout_url: "",
    fakeui_loggedin_url: "",
    validate_timeout: 5e3,
    field_info: [],
    jsfrags: [],
    cpw_delay: 250,
    login_delay: 250,
    acctmgmt_delay: 250,
    login_reveal_delay: 250,
    logout_reveal_delay: 250,
    logout_delay: 250,
    fill_field_delay: 250,
    click_field_delay: 250,
    trigger_cpw_delay: 0,
    cpw_change_success_url: null,
    cpw_change_failure_url: null,
    login_failure_url: null,
    login_success_url: null,
    login_entry_failure_url: null,
    login_entry_success_url: null,
    challenge_invalidate_url: null,
    challenge_validate_url: null,
    click_flavor: CONST_CLICK_NOMINAL,
    generate_pref_overrides: null,
    reveal_login_js_delay: 0,
    reveal_cpw_js_delay: 0,
    navigate_acctmgmt_js_delay: 0,
    postreveallogin_sleep: 0,
    postacctmgmt_sleep: 0,
    postrevealcpw_sleep: 0,
    posttrigger_sleep: 0,
    postlogout_sleep: 0,
    start_delay: 0,
    post_login_submit_delay: 1100,
    post_js_begin_delay: 5555,
    js_finish_delay: 2e3,
    session_timeout: DEFAULT_SESSION_TIMEOUT,
    document_complete_timeout: 0,
    proceed_on_interactive: 0,
    click_on_fields_on_fill: 0,
    fill_password_fields_via_keys: 0
  },
  r_tesco = {},
  r_netflix = {},
  minimal_recipe = { symbolic: "", login_url: "", field_info: [], generate_pref_overrides: { minlength: 6 } },
  telegraph = { symbolic: "Daily Telegraph" },
  amex = { symbolic: "American Express", field_info: [], jsfrag: [] },
  boa = {
    symbolic: "Bank of America",
    login_url: "https://www.bankofamerica.com/sitemap/hub/signin.go",
    field_info: [
      { id_type: "TYPE_ID", id_value: "userId", id_function: "FN_LOGIN" },
      { id_type: "TYPE_ID", id_value: "password", id_function: "FN_PASSWORD" }
    ],
    jsfrag: []
  },
  capitalone = { generate_pref_overrides: { mindigits: 2, digits: 1, special: 0 } },
  capitalone360 = {},
  testrig = {
    symbolic: "Test",
    login_url: "http://www.netrot.net/~chang/form/formtest1.html",
    field_info: [
      { id_type: "TYPE_ID", id_value: "email", id_function: "FN_LOGIN" },
      { id_type: "TYPE_NAME", id_value: "password", id_function: "FN_PASSWORD" },
      { id_type: "TYPE_XPATH", id_value: "//input[@type='submit']", id_function: "FN_LOGIN_SUBMIT" },
      { id_type: "TYPE_ID", id_value: "email", id_function: "FN_IS_LOGGED_IN_NEGATION" },
      { id_type: "TYPE_XPATH", id_value: "//input[@type='submit']", id_function: "FN_CPW_SUBMIT" }
    ],
    jsfrag: [],
    generate_pref_overrides: { mindigits: 1, digits: 1, special: 0, minlength: 6 }
  };
function CPWbot_bg_lib() {
  var _ = this,
    Ee = 0,
    _e = null,
    p = null,
    ie = null,
    b = null,
    h = 0,
    oe = null,
    ae = null,
    re = null,
    Pe = null,
    l = null,
    N = (rt(), null),
    m = [],
    we = !1,
    Ie = !1,
    Ae = !1,
    Te = !1,
    le = !1,
    e = !1,
    i = "",
    u = !1,
    g = !1,
    se = !1,
    Oe = !1,
    ke = !1,
    ce = !1,
    Fe = !1,
    We = !1,
    o = !1,
    f = !1,
    Ge = !1,
    S = !1,
    v = {},
    E = !1,
    P = !1,
    w = !1,
    I = !1,
    A = !0,
    T = !1,
    O = !1,
    G = !1,
    ye = !1,
    y = !1,
    D = !1,
    U = !1,
    R = M,
    M = 0,
    j = 1,
    H = 2,
    V = 3,
    J = 4,
    B = 5,
    K = 6,
    x = 7,
    Y = 8,
    q = 9,
    z = 63,
    X = 64,
    Z = 65,
    Q = 66,
    $ = 67,
    ee = 68,
    te = 69,
    ne = 70,
    De = 71,
    Ue = 72,
    Re = 73,
    Me = 74,
    je = 75,
    He = 76,
    s = 128,
    Ve = 129,
    Je = 130,
    Be = 131,
    Ke = 132,
    xe = 133,
    Ye = 134,
    qe = 135,
    ze = 136,
    Xe = 137,
    Ze = 138,
    Qe = 139,
    $e = 140,
    et = 141,
    tt = 192,
    nt = 224,
    _t = 240,
    it = 248,
    c = [];
  function ot() {
    return m_last_overlay_msg;
  }
  function at(e) {
    m_last_overlay_msg = e;
  }
  function rt() {
    at("");
  }
  function lt(e) {
    return e ? e.login_url : null;
  }
  function st(e) {
    return e ? e.cpw_url : null;
  }
  function ct(e) {
    return e ? e.acctmgmt_url : null;
  }
  function ut(e) {
    return e ? e.logout_url : null;
  }
  function dt(e) {
    e && e.login_entry_url;
  }
  function gt(e) {
    return e ? e.fakeui_loggedout_url : null;
  }
  function ft(e) {
    return e ? e.fakeui_loggedin_url : null;
  }
  function ue(e) {
    if (!e) return null;
    var t = e.click_flavor;
    if ("string" == typeof t) {
      var t = parseInt(t);
      if (!isNaN(t)) return t;
    }
    return e.click_flavor;
  }
  function pt(e) {
    return t(e, FN_PASSWORD);
  }
  function bt(e) {
    return t(e, FN_LOGIN);
  }
  function mt(e) {
    return t(e, FN_CURRENT_PASS);
  }
  function vt(e) {
    return t(e, FN_NEW_PASS);
  }
  function Ct(e) {
    return t(e, FN_NEW_PASS_CONFIRM);
  }
  function ht(e) {
    return t(e, FN_NAVIGATE_TO_CPW);
  }
  function Nt(e) {
    return t(e, FN_NAVIGATE_TO_ACCTMGMT);
  }
  function St(e) {
    return t(e, FN_NAVIGATE_TO_LOGOUT);
  }
  function Lt(e) {
    return t(e, FN_CPW_SUBMIT);
  }
  function Et(e) {
    return t(e, FN_LOGIN_SUBMIT);
  }
  function Pt(e) {
    return t(e, FN_REVEAL_LOGIN);
  }
  function wt(e) {
    return t(e, FN_CHALLENGE_PASSWORD);
  }
  function It(e) {
    return t(e, FN_CHALLENGE_LOGIN);
  }
  function At(e) {
    return t(e, FN_CHALLENGE_SUBMIT);
  }
  function Tt(e) {
    return t(e, FN_LOGIN_ENTRY_USERNAME);
  }
  function Ot(e) {
    return t(e, FN_LOGIN_ENTRY_PASSWORD);
  }
  function kt(e) {
    return t(e, FN_LOGIN_ENTRY_SUBMIT);
  }
  function Ft(e) {
    t(e, FN_FAKEUI_LOGGED_IN_1);
  }
  function Wt(e) {
    t(e, FN_FAKEUI_LOGGED_IN_2);
  }
  function Gt(e) {
    t(e, FN_FAKEUI_LOGGED_IN_3);
  }
  function yt(e) {
    t(e, FN_FAKEUI_LOGGED_IN_INPUT);
  }
  function Dt(e) {
    t(e, FN_FAKEUI_LOGGED_OUT_1);
  }
  function Ut(e) {
    t(e, FN_FAKEUI_LOGGED_OUT_2);
  }
  function Rt(e) {
    t(e, FN_FAKEUI_LOGGED_OUT_3);
  }
  function Mt(e) {
    t(e, FN_FAKEUI_LOGGED_OUT_INPUT);
  }
  function t(e, t) {
    if (!e || !e.field_info) return null;
    for (var n, _ = null, i = null, n = 0; n < e.field_info.length; n++)
      if ((_ = e.field_info[n]).id_function == t) {
        i = { id_type: _.id_type, id_value: _.id_value };
        break;
      }
    return i;
  }
  function jt(e) {
    return n(e, JS_PRE_NAVIGATE_CPW);
  }
  function Ht(e) {
    return n(e, JS_POST_NAVIGATE_CPW);
  }
  function Vt(e) {
    return n(e, JS_PRE_ACCTMGMT);
  }
  function Jt(e) {
    return n(e, JS_POST_ACCTMGMT);
  }
  function Bt(e) {
    return n(e, JS_PRE_CPW);
  }
  function Kt(e) {
    return n(e, JS_POST_CPW);
  }
  function xt(e) {
    return n(e, JS_PRE_LOGIN);
  }
  function Yt(e) {
    return n(e, JS_POST_LOGIN);
  }
  function qt(e) {
    return n(e, JS_LOGIN_REVEAL);
  }
  function zt(e) {
    return n(e, JS_LOGIN_SUBMIT);
  }
  function Xt(e) {
    return n(e, JS_LOGIN_ENTRY_SUBMIT);
  }
  function Zt(e) {
    return n(e, JS_VALIDATE_LOGIN_SUCCESS);
  }
  function Qt(e) {
    return n(e, JS_VALIDATE_CPW_SUCCESS);
  }
  function $t(e) {
    return n(e, JS_FINISH);
  }
  function en(e) {
    return n(e, JS_PRE_CHALLENGE);
  }
  function tn(e) {
    return n(e, JS_POST_CHALLENGE);
  }
  function nn(e) {
    return n(e, JS_CHALLENGE_SUBMIT);
  }
  function _n(e) {
    return n(e, JS_VALIDATE_CHALLENGE_SUCCESS);
  }
  function on(e) {
    return n(e, JS_BEGIN);
  }
  function an(e) {
    return n(e, JS_PRE_LOGOUT);
  }
  function rn(e) {
    return n(e, JS_POST_LOGOUT);
  }
  function ln(e) {
    return n(e, JS_PRE_LOGIN_ENTRY);
  }
  function sn(e) {
    return n(e, JS_POST_LOGIN_ENTRY);
  }
  function cn(e) {
    return n(e, JS_VALIDATE_LOGIN_ENTRY_SUCCESS);
  }
  function un(e) {
    return n(e, JS_PRE_DOCAPTCHA);
  }
  function dn(e) {
    return n(e, JS_POST_DOCAPTCHA);
  }
  function gn(e) {
    var t = null;
    return (t = e && void 0 !== e.cpw_change_success_url ? e.cpw_change_success_url : t);
  }
  function fn(e) {
    var t = null;
    return (t = e && void 0 !== e.cpw_change_failure_url ? e.cpw_change_failure_url : t);
  }
  function pn(e) {
    var t = null;
    return (t = e && void 0 !== e.login_failure_url ? e.login_failure_url : t);
  }
  function bn(e) {
    var t = null;
    return (t = e && void 0 !== e.login_success_url ? e.login_success_url : t);
  }
  function mn(e) {
    var t = null;
    return (t = e && void 0 !== e.login_entry_failure_url ? e.login_entry_failure_url : t);
  }
  function vn(e) {
    var t = null;
    return (t = e && void 0 !== e.login_entry_success_url ? e.login_entry_success_url : t);
  }
  function Cn(e) {
    var t = null;
    return (t = e && void 0 !== e.challenge_invalidate_url ? e.challenge_invalidate_url : t);
  }
  function hn(e) {
    var t = null;
    return (t = e && void 0 !== e.challenge_validate_url ? e.challenge_validate_url : t);
  }
  function Nn(e) {}
  function Sn(e) {}
  function n(e, t) {
    if (!e || !e.jsfrags) return null;
    for (var n, _, i, n = 0; n < e.jsfrags.length; n++)
      if ((_ = e.jsfrags[n]).jstype == t) {
        i = _.jsfrag;
        break;
      }
    return i;
  }
  function de(e, t, n) {
    var n, t, _, t, i, o, o, i;
    return t && n
      ? !!(n = n(t)) &&
          (null === (t = new Date().getTime()) && (t = 0),
          (t = (_ = "function" == typeof lp_sha256 ? lp_sha256 : SHA256)(e.toString() + n + t.toString())),
          (i = (o =
            "function" == typeof fasthash
              ? fasthash
              : "function" == typeof crc32
              ? crc32
              : "function(j) { if (j) { return j.length; } return 0; }")(n)),
          verbose_log("injecting javascript fragment into CS: " + n),
          F(C, "Injected Javascript into Document"),
          sendCS(e, { cmd: "run_cpwbot_js", req_id: t, js: n, hash: i }, "all"),
          !0)
      : null;
  }
  function Ln(e) {
    return "undefined" != typeof g_sites ? g_sites[e] : "undefined" != typeof lpaccts ? lpaccts[e] : null;
  }
  function En(e, t, n, _, i, o, a) {
    var r, l, r;
    n &&
      (null === _ && (_ = 0),
      null === o && (o = 0),
      null == i && (i = DEFAULT_FILL_DELAY),
      F(C, "Filling Field"),
      null === (r = new Date().getTime()) && (r = 0),
      (r = ("function" == typeof lp_sha256 ? lp_sha256 : SHA256)(e.toString() + n.id_value + r.toString())),
      sendCS(
        e,
        {
          cmd: "cpwbot_fill_field",
          req_id: r,
          id_type: n.id_type,
          id_value: n.id_value,
          field_value: t,
          type: "text",
          formname: "",
          should_click: _,
          should_fill_via_keys: o,
          delay: i
        },
        "all"
      ));
  }
  function Pn(e, t, n, _, i, o, a) {
    var r, l, r;
    n &&
      (null === _ && (_ = 0),
      null === o && (o = 0),
      null == i && (i = DEFAULT_FILL_DELAY),
      F(C, "Filling Password Field"),
      null === (r = new Date().getTime()) && (r = 0),
      (r = ("function" == typeof lp_sha256 ? lp_sha256 : SHA256)(e.toString() + n.id_value + r.toString())),
      sendCS(
        e,
        {
          cmd: "cpwbot_fill_field",
          req_id: r,
          id_type: n.id_type,
          id_value: n.id_value,
          field_value: t,
          type: "password",
          formname: "",
          should_click: _,
          should_fill_via_keys: o,
          delay: i,
          flavor: a
        },
        "all"
      ));
  }
  function wn(e, t, n, _) {
    var i, o, i, i;
    t &&
      (null == n && (n = DEFAULT_CLICK_DELAY),
      void 0 === _ && (_ = CONST_CLICK_NOMINAL),
      (wi = new Date().getTime() + CLICK_RETRY_TIME + n),
      (Ii = !1),
      F(C, "Clicking"),
      null === (i = new Date().getTime()) && (i = 0),
      (i = ("function" == typeof lp_sha256 ? lp_sha256 : SHA256)(e.toString() + t.id_value + i.toString())),
      verbose_log("click_field id=" + i + " saved to m_pwchange_last_click_field_id"),
      (Ai = 0),
      (i = { cmd: "cpwbot_click_field", msgid: (l = i), pwchangestate: _e, id_type: t.id_type, id_value: t.id_value, delay: n, flavor: _ }),
      sendCS(e, i, "all"),
      (m_lastclick_metadata = i));
  }
  function In(e, t, n, _) {
    if (e) {
      var i = !0,
        o;
      if (g_isfirefox) {
        var a = n(e);
        for (o = 0; o < a.length; o++) {
          var r = a[o].id_type,
            l = a[o].id_value,
            s;
          if (!(s = getElementByIdentifier(doc, r, l))) {
            i = !1;
            break;
          }
        }
        if (i)
          for (var c = _(e), o = 0; o < c.length; o++) {
            var r = c[o].id_type,
              l = c[o].id_value,
              s;
            if ((s = getElementByIdentifier(doc, r, l))) {
              i = !1;
              break;
            }
          }
      } else console_log("this probably will only works for firefox");
    }
  }
  function An(e, t, n) {
    if (!t || !n) return !1;
    var _ = "",
      i = "",
      n = Ln(n.aid);
    if (!n) return Bi("given invalid aid - data consistency error?"), !1;
    CPWbot_bg.do_milestone(e, ee, t), L("pre-login-form-js"), de(e, t, xt);
    var o = bt(t),
      a = pt(t),
      r = I_(t),
      l = A_(t),
      s = 0,
      c = (rnd2 = 0),
      u = (U && ((c = W()), (rnd2 = W())), 0),
      d = ue(t);
    return (
      o && (u++, En(e, (_ = getusernamefromacct(n)), o, r, 0 * u + c, !1, d)),
      a && (u++, Pn(e, (i = getpasswordfromacct(n)), a, r, 0 * u + c + rnd2, l, d)),
      L("post-login-form-js"),
      de(e, t, Yt),
      !0
    );
  }
  function Tn(e, t, n) {
    if (!t) return !1;
    CPWbot_bg.do_milestone(e, te, t);
    var _ = !1,
      i = ((Oe = !1), Et(t)),
      o,
      a;
    return (
      i && ((o = DEFAULT_CLICK_DELAY), void 0 !== t.login_delay && (o = t.login_delay), (Oe = !0), wn(e, i, o, (a = ue(t))), (_ = !0)),
      (!de(e, t, zt) && !_) || null
    );
  }
  function On(e, t, n) {
    if (!t || !n) return !1;
    var _ = "",
      i = "",
      n = Ln(n.aid);
    if (!n) return Bi("given invalid aid - data consistency error?"), !1;
    CPWbot_bg.do_milestone(e, je, t), de(e, t, ln);
    var o = Tt(t),
      a = Ot(t),
      r = I_(t),
      l = A_(t),
      s = 0,
      c = (rnd2 = 0),
      u = (U && ((c = W()), (rnd2 = W())), 0),
      d = ue(t);
    return (
      o && (u++, En(e, (_ = getusernamefromacct(n)), o, r, 0 * u + c, !1, d)),
      a && (u++, Pn(e, (i = getpasswordfromacct(n)), a, r, 0 * u + c + rnd2, l, d)),
      de(e, t, sn),
      !0
    );
  }
  function kn(e, t, n) {
    if (!t) return !1;
    CPWbot_bg.do_milestone(e, Me, t);
    var _ = !1,
      i = ((S = !1), kt(t)),
      o,
      a;
    return (
      i &&
        ((o = DEFAULT_CLICK_DELAY),
        void 0 !== t.login_delay && (o = t.login_delay),
        (S = !0),
        wn(e, i, o, (a = ue(t))),
        CPWbot_bg.mark_timestamp("wait_for_click_ack_M"),
        (_ = !0)),
      (!de(e, t, Xt) && !_) || null
    );
  }
  function Fn(e, t, n) {
    if (t && n) {
      F(k, "Updating with New Password");
      var t = !0,
        _ = n.aid,
        i = (console_log("cpwbot initiate: save_replace for aid=" + _), Ln(_)),
        o,
        n,
        o,
        n,
        a;
      if (i)
        return (
          (o = lpdec_acct(n.newpw, i, "undefined" == typeof g_shares ? lpshares : g_shares)),
          (n = lpdec_acct(n.curpw, i, "undefined" == typeof g_shares ? lpshares : g_shares)),
          i && o && n
            ? (i.pwprotect && (t = !1),
              console_log("cpwbot initiate: calling changepw logic for aid=" + _),
              g_isfirefox
                ? (t || LP.securityPrompt()) && lpchangepw(null, o, _, null, null, null, !0)
                : ((a = { singleaid: _.toString(), newpw: o, autochange: 1 }),
                  t
                    ? changepw_wrapper(a)
                    : security_prompt(function () {
                        changepw_wrapper(a);
                      })))
            : verbose_log(
                "no passwords to save? acct.aid = " +
                  (i ? i.aid : "null") +
                  " cur=" +
                  (g_show_pw_in_logs || g_isadmin ? n : "REDACTED") +
                  " newpw=" +
                  (g_show_pw_in_logs || g_isadmin ? o : "REDACTED")
              ),
          1
        );
      Bi("given invalid aid - data consistency error?");
    }
  }
  function ge(e) {
    var t;
    verbose_log("entered cpwbot_cs_finish to clean up " + e),
      null !== p &&
        (p != e
          ? null !== p &&
            verbose_log("stale call: started up a new password change on different tab - ABORT - tabid==" + e + " g_pwchangetabid=" + p)
          : ((t = { aid: h, recipe: b, desc: "cpwbot_finish" }),
            g_v2engine
              ? CPWbot_bg.wait_for_doc_complete(
                  e,
                  null,
                  function (e) {
                    verbose_log("cpwbot_finish callback!  on tabid=" + e), sendCS(e, { cmd: "cpwbot_finish" }, "all");
                  },
                  t
                )
              : sendCS(e, { cmd: "cpwbot_finish" })));
  }
  function Wn(e) {
    for (var t = [], n = [FN_CPW_OTHER, FN_CURRENT_PASS, FN_NEW_PASS, FN_NEW_PASS_CONFIRM], _, _ = 0; _ < n.length; _++) {
      var i = r(e, n[_]);
      i && 0 < i.length && (t = t.concat(i));
    }
    return t;
  }
  function Gn(e) {
    for (var t = [], n = [FN_CPW_INVALID], _, i, _ = 0; _ < n.length; _++) {
      var o = r(e, n[_]);
      if (o && 0 < o.length)
        for (i = 0; i < o.length; i++) {
          var a = o[i];
          a && t.push(a);
        }
    }
    return t;
  }
  function yn(e) {
    for (var t = [], n = [FN_CURRENT_PASS, FN_NEW_PASS, FN_NEW_PASS_CONFIRM], _, _ = 0; _ < n.length; _++) {
      var i = r(e, n[_]);
      i && 0 < i.length && (t = t.concat(i));
    }
  }
  function Dn(e) {
    for (var t = [], n = [FN_PASSWORD, FN_LOGIN_OTHER], _, _ = 0; _ < n.length; _++) {
      var i = r(e, n[_]);
      i && 0 < i.length && (t = t.concat(i));
    }
    return t;
  }
  function Un(e) {
    for (var t = [], n = [FN_LOGIN_INVALID], _, _ = 0; _ < n.length; _++) {
      var i = r(e, n[_]);
      i && 0 < i.length && (t = t.concat(i));
    }
    return t;
  }
  function Rn(e) {
    for (var t = [], n = [FN_LOGIN_ENTRY_USERNAME, FN_LOGIN_ENTRY_PASSWORD, FN_LOGIN_ENTRY_SUBMIT], _, _ = 0; _ < n.length; _++) {
      var i = r(e, n[_]);
      i && 0 < i.length && (t = t.concat(i));
    }
    return t;
  }
  function Mn(e) {
    for (var t = [], n = [FN_LOGIN_ENTRY_USERNAME], _, _ = 0; _ < n.length; _++) {
      var i = r(e, n[_]);
      i && 0 < i.length && (t = t.concat(i));
    }
    return t;
  }
  function jn(e) {
    for (var t = [], n = [FN_LOGIN_ENTRY_INVALID], _, _ = 0; _ < n.length; _++) {
      var i = r(e, n[_]);
      i && 0 < i.length && (t = t.concat(i));
    }
    return t;
  }
  function Hn(e) {
    for (var t = [], n = [FN_LOGIN_SUCCESS], _, _ = 0; _ < n.length; _++) {
      var i = r(e, n[_]);
      i && 0 < i.length && (t = t.concat(i));
    }
    return t;
  }
  function Vn(e) {
    for (var t = [], n = [FN_LOGIN_SUCCESS_INVALID], _, _ = 0; _ < n.length; _++) {
      var i = r(e, n[_]);
      i && 0 < i.length && (t = t.concat(i));
    }
    return t;
  }
  function Jn(e) {
    for (var t = [], n = [FN_LOGIN_ENTRY_SUCCESS], _, _ = 0; _ < n.length; _++) {
      var i = r(e, n[_]);
      i && 0 < i.length && (t = t.concat(i));
    }
    return t;
  }
  function Bn(e) {
    for (var t = [], n = [FN_LOGIN_ENTRY_SUCCESS_INVALID], _, _ = 0; _ < n.length; _++) {
      var i = r(e, n[_]);
      i && 0 < i.length && (t = t.concat(i));
    }
    return t;
  }
  function Kn(e) {
    for (var t = [], n = [FN_CPW_SUCCESS], _, _ = 0; _ < n.length; _++) {
      var i = r(e, n[_]);
      i && 0 < i.length && (t = t.concat(i));
    }
    return t;
  }
  function xn(e) {
    for (var t = [], n = [FN_CPW_SUCCESS_INVALID], _, _ = 0; _ < n.length; _++) {
      var i = r(e, n[_]);
      i && 0 < i.length && (t = t.concat(i));
    }
    return t;
  }
  function Yn(e) {
    for (var t = [], n = [FN_IS_LOGGED_IN], _, _ = 0; _ < n.length; _++) {
      var i = r(e, n[_]);
      i && 0 < i.length && (t = t.concat(i));
    }
    return t;
  }
  function qn(e) {
    for (var t = [], n = [FN_IS_LOGGED_IN_NEGATION], _, _ = 0; _ < n.length; _++) {
      var i = r(e, n[_]);
      i && 0 < i.length && (t = t.concat(i));
    }
    return t;
  }
  function zn(e) {
    for (var t = [], n = [FN_CHALLENGE_PASSWORD, FN_CHALLENGE_OTHER], _, _ = 0; _ < n.length; _++) {
      var i = r(e, n[_]);
      i && 0 < i.length && (t = t.concat(i));
    }
    return t;
  }
  function Xn(e) {
    for (var t = [], n = [FN_CHALLENGE_INVALID], _, _ = 0; _ < n.length; _++) {
      var i = r(e, n[_]);
      i && 0 < i.length && (t = t.concat(i));
    }
    return t;
  }
  function Zn(e) {
    return t(recipe_obj, FN_CHALLENGE_SUCCESS);
  }
  function Qn(e) {
    return t(recipe_obj, FN_CHALLENGE_SUCCESS_INVALID);
  }
  function $n(e) {
    for (var t = [], n = [FN_CAPTCHA], _, _ = 0; _ < n.length; _++) {
      var i = r(e, n[_]);
      i && 0 < i.length && (t = t.concat(i));
    }
    return t;
  }
  function e_(e) {
    for (var t = [], n = [FN_MULTI_FACTOR], _, _ = 0; _ < n.length; _++) {
      var i = r(e, n[_]);
      i && 0 < i.length && (t = t.concat(i));
    }
    return t;
  }
  function t_(e) {
    for (var t = [], n = [FN_PASSWORD_HINT], _, _ = 0; _ < n.length; _++) {
      var i = r(e, n[_]);
      i && 0 < i.length && (t = t.concat(i));
    }
    return t;
  }
  function n_(e) {
    for (var t = [], n = [FN_CAPTCHA, FN_PASSWORD_HINT, FN_MULTI_FACTOR], _, _ = 0; _ < n.length; _++) {
      var i = r(e, n[_]);
      i && 0 < i.length && (t = t.concat(i));
    }
    return t;
  }
  function __(e) {
    for (var t = [], n = [FN_CAPTCHA_SUCCESS, FN_PASSWORD_HINT_SUCCESS, FN_MULTI_FACTOR_SUCCESS], _, _ = 0; _ < n.length; _++) {
      var i = r(e, n[_]);
      i && 0 < i.length && (t = t.concat(i));
    }
    return t;
  }
  function i_(e) {
    for (var t = [], n = [FN_FAKEUI_LOGGED_IN_1, FN_FAKEUI_LOGGED_IN_2, FN_FAKEUI_LOGGED_IN_3], _, _ = 0; _ < n.length; _++) {
      var i = r(e, n[_]);
      i && 0 < i.length && (t = t.concat(i));
    }
  }
  function o_(e) {
    for (var t = [], n = [FN_FAKEUI_LOGGED_OUT_1, FN_FAKEUI_LOGGED_OUT_2, FN_FAKEUI_LOGGED_OUT_3], _, _ = 0; _ < n.length; _++) {
      var i = r(e, n[_]);
      i && 0 < i.length && (t = t.concat(i));
    }
  }
  function a_(e) {
    for (var t = [], n = [FN_FAKEUI_LOGGED_IN_INPUT], _, _ = 0; _ < n.length; _++) {
      var i = r(e, n[_]);
      i && 0 < i.length && (t = t.concat(i));
    }
  }
  function r_(e) {
    for (var t = [], n = [FN_FAKEUI_LOGGED_OUT_INPUT], _, _ = 0; _ < n.length; _++) {
      var i = r(e, n[_]);
      i && 0 < i.length && (t = t.concat(i));
    }
  }
  function r(e, t) {
    var n = [];
    if (e && e.field_info)
      for (var _, i, i, _ = 0; _ < e.field_info.length; _++)
        (i = e.field_info[_]).id_function == t && ((i = { id_type: i.id_type, id_value: i.id_value }), n.push(i));
    return n;
  }
  function l_(e) {
    var t = DEFAULT_VALIDATE_TIMEOUT,
      e;
    return (t = e && void 0 !== e.validate_timeout && (e = parseInt(e.validate_timeout)) && !isNaN(e) ? e : t);
  }
  function fe(e, t, n) {
    if ((null === n && (n = 1), null === e || !t)) return !1;
    var _ = t.desc,
      n = t.recipe,
      i = t.fn_url_failed,
      o = t.fn_url_success,
      a = t.fn_required,
      r = t.fn_rejected,
      l = t.fn_captcha,
      s = ((be = !0), (oi = new Date().getTime()), !(P = E = !1)),
      t = (console_log("cpwbot check_tab_for_state for " + _), a ? a(n) : []),
      a = r ? r(n) : [],
      c = CPWbot_bg.JSON.stringify(t),
      u = CPWbot_bg.JSON.stringify(a),
      r = n_(n),
      r = CPWbot_bg.JSON.stringify(r);
    if (((N = z_(e)), 0 == t.length && 0 == a.length && !o && !i))
      return L("WARN: " + _ + " has no field or url criteria defined to validate against"), !0;
    var t = l_(n),
      a = o ? o(n) : null,
      o = i ? i(n) : null,
      i = new Date().getTime();
    null === i && (i = 0);
    var d,
      g = ("function" == typeof lp_sha256 ? lp_sha256 : SHA256)(e.toString() + _ + i.toString()),
      i =
        ((ae = g),
        (Si = c),
        (Li = u),
        verbose_log("interrogate id=" + ae + " desc=" + _),
        (m = []),
        {
          cmd: "cpwbot_validate_state",
          desc: _,
          required_fields: c,
          rejected_fields: u,
          id: ae,
          validate_timeout: t,
          timestamp: i,
          proceed_on_interactive: N_(n) ? 1 : 0,
          interactive_fields: r
        });
    return (
      a && (i.required_url = a),
      o && (i.rejected_url = o),
      (oe = i),
      (re = _),
      sendCS(e, i, "all"),
      verbose_log("setup setimeout for " + t / 1e3 + " seconds finish_cpwbot_validate_state"),
      setTimeout(function () {
        CPWbot_bg && CPWbot_bg.finish_cpwbot_validate_state(e, g, c, u, _);
      }, t),
      null
    );
  }
  function a() {
    return null;
  }
  function s_(e, t, n, _) {
    var _, t;
    (!_ && CPWbot_bg.get_docaptchastate()) ||
      (t ? at(t) : (t = ot()),
      (_ = { msg: t, symbolic: _o((n = n || b)) }),
      (t = CPWbot_bg.JSON.stringify(_)),
      sendCS(e, { cmd: "do_cpwbot_overlay", msg: t }, g_CS_tops[e]));
  }
  function c_(e) {
    sendCS(e, { cmd: "hide_cpwbot_overlay" }, "all");
  }
  function u_(e) {
    var t = null;
    return (t = e && void 0 !== e.generate_pref_overrides ? e.generate_pref_overrides : t);
  }
  function d_(e) {
    var t = 0;
    return e ? (void 0 !== e.postacctmgmt_sleep ? e.postacctmgmt_sleep : t) : null;
  }
  function g_(e) {
    var t = 0;
    return e ? (void 0 !== e.postrevealcpw_sleep ? e.postrevealcpw_sleep : t) : null;
  }
  function f_(e) {
    var t = 0;
    return e ? (void 0 !== e.posttrigger_sleep ? e.posttrigger_sleep : t) : null;
  }
  function p_(e) {
    var t = 0;
    return e ? (void 0 !== e.postreveallogin_sleep ? e.postreveallogin_sleep : t) : null;
  }
  function b_(e) {
    var t = 0;
    return e ? (void 0 !== e.postlogout_sleep ? e.postlogout_sleep : t) : null;
  }
  function m_(e) {
    var t = !1;
    return e ? (void 0 !== e.reveal_login_js_delay ? !!e.reveal_login_js_delay : t) : null;
  }
  function v_(e) {
    var t = !1;
    return e
      ? (void 0 === e.navigate_acctmgmt_js_delay || ((t = !!e.navigate_acctmgmt_js_delay), "0" !== e.navigate_acctmgmt_js_delay)) && t
      : null;
  }
  function C_(e) {
    var t = !1;
    return e ? (void 0 === e.reveal_cpw_js_delay || ((t = !!e.reveal_cpw_js_delay), "0" !== e.reveal_cpw_js_delay)) && t : null;
  }
  function h_(e) {
    var t = !1;
    return e ? (void 0 === e.logout_js_delay || ((t = !!e.logout_js_delay), "0" !== e.logout_js_delay)) && t : null;
  }
  function N_(e) {
    var t = !1;
    return e ? (void 0 === e.proceed_on_interactive || ((t = !!e.proceed_on_interactive), "0" !== e.proceed_on_interactive)) && t : null;
  }
  function S_(e) {
    var t = 0;
    return e ? (void 0 !== e.start_delay ? e.start_delay : t) : null;
  }
  function L_(e) {
    var t = 0;
    return e ? (void 0 !== e.post_login_submit_delay ? e.post_login_submit_delay : t) : null;
  }
  function E_(e) {
    var t = 0;
    return e ? (void 0 !== e.post_js_begin_delay ? e.post_js_begin_delay : t) : null;
  }
  function P_(e) {
    var t = 0;
    return e ? (void 0 !== e.js_finish_delay ? e.js_finish_delay : t) : null;
  }
  function w_(e) {
    var t = 0;
    return e ? (void 0 !== e.session_timeout && "number" == typeof e.session_timeout ? e.session_timeout : t) : null;
  }
  function I_(e) {
    var t = 0;
    return e ? (void 0 !== e.click_on_fields_on_fill ? (e.click_on_fields_on_fill ? 1 : 0) : t) : null;
  }
  function A_(e) {
    var t = 0;
    return e ? (void 0 !== e.fill_password_fields_via_keys ? (e.fill_password_fields_via_keys ? 1 : 0) : t) : null;
  }
  function T_(e) {
    var t;
    return e
      ? ((t = DEFAULT_FILL_DELAY),
        "number" == typeof e.fill_field_delay && (t = e.fill_field_delay),
        verbose_log("fill field delay : " + t),
        t)
      : null;
  }
  function O_(e) {
    var t = !1;
    return e ? (void 0 !== e.document_complete_timeout ? e.document_complete_timeout : t) : null;
  }
  (c[0] = ""),
    (c[1] = gs("LastPass is loading...")),
    (c[2] = gs("LastPass is loading website...")),
    (c[3] = gs("LastPass is logging in...")),
    (c[4] = gs("LastPass is changing your password now...")),
    (c[5] = gs("LastPass is changing your password now...")),
    (c[6] = gs("LastPass is changing your password now...")),
    (c[7] = gs("LastPass is changing your password now...")),
    (c[8] = gs("LastPass is logging in...")),
    (c[q] = gs("The website needs you to enter information. Please switch to the tab and enter it.")),
    (c[63] = gs(
      "Congratulations! Your password for %s was updated, and is now saved in your LastPass vault. Your change will sync on every device."
    )),
    (c[s] = gs("We're sorry. We were not able to change your password automatically for %s. Your password was not changed.")),
    (c[it] = c[s] + " " + gs("The random password that was generated has been saved to your vault.")),
    (c[ze] = c[s]),
    (c[xe] = gs("Timed out waiting for the page to load.  Retry?")),
    (c[Je] = c[s]),
    (c[Ve] = c[s]),
    (c[Ye] = c[s]),
    (c[qe] = c[s]),
    (c[Be] = c[s]),
    (c[Ke] = c[s]),
    (c[Xe] = c[s]),
    (c[Ze] = gs("Halt Requested")),
    (c[Qe] = gs("Unable to proceed, the website does not allow automated password change.")),
    (c[$e] = gs("Timed out")),
    (c[et] = c[s]),
    "function" == typeof alertfrombg && (this.alert = alertfrombg),
    g_isfirefox && (this.alert = alert),
    (this.JSON = JSON) || (this.JSON = LPJSON),
    LPJSON,
    (this.get_pwchangestate = function () {
      return _e;
    }),
    (this.get_pwchangetabid = function () {
      return p;
    }),
    (this.get_login_url = lt),
    (this.get_cpw_url = st),
    (this.get_acctmgmt_url = ct),
    (this.conditional_js_exec = de),
    (this.show_cpwbot_overlay = function (e, t, n) {
      return s_(e, t, n);
    }),
    (this.in_validate = function () {
      return oe && ae && null != re && "" != re && void 0 !== re;
    }),
    (this.in_validate_outer = function () {
      return _.in_validate() || be || ve;
    }),
    (this.get_last_overlay_message = ot),
    (this.get_fakeui_loggedout_url = gt),
    (this.get_fakeui_loggedin_url = ft),
    (this.reveal_cpw = function (e, t) {
      if (!t) return !1;
      var n = t.recipe,
        _ = t.payload,
        i = _.aid;
      if (!n || !_) return !1;
      L("reveal_cpw called after wait-for-document-complete tabid=" + e),
        CPWbot_bg.mark_timestamp("reveal_cpw"),
        F(k, "Reveal Change-Password Form"),
        (Ie = !(_e = "D")),
        de(e, n, jt);
      var o = st(n),
        a;
      if (o)
        return (
          L("call cpw:loadurl with " + o),
          (a = null),
          g_CS_tops && ((a = g_CS_tops[e]), g_ischrome) && 0 != a && L("loadurl is not sending to docnum==0 ! " + a),
          sendCS(e, { cmd: "loadurl", url: o }, a),
          (me = !0),
          verbose_log("m_in_loadurl set"),
          (b = n),
          (ie = _),
          (Ie = !0),
          null
        );
      ce = !1;
      var o = ht(n),
        a,
        r,
        l;
      return (
        o &&
          (verbose_log("click on FN_NAVIGATE_TO_CPW field!"),
          (a = DEFAULT_CLICK_DELAY),
          void 0 !== n.cpw_delay && (a = n.cpw_delay),
          (ce = !0),
          L("now waiting for click_ack_D"),
          wn(e, o, a, (r = ue(n))),
          CPWbot_bg.mark_timestamp("wait_for_click_ack_D")),
        C_(n) && ((Ie = !0), g_(n))
          ? null
          : (de(e, n, Ht),
            t.didcallout
              ? (L("end of reveal_cpw thread with callout to CS - hack Dpickup to resume for aid=" + i), (_e = "Dpickup"), null)
              : (L("no callout to CS, so reveal_cpw does not end thread, returning to initiate"), !0))
      );
    }),
    (this.navigate_to_acctmgmt = function (e, t) {
      if (!t) return !1;
      var n = t.recipe,
        _ = t.payload,
        i = _.aid;
      if (
        (L("navigate_to_acctmgmt called after wait-for-document-complete tabid=" + e),
        CPWbot_bg.mark_timestamp("acctmgmt_nav"),
        (_e = "C"),
        !n)
      )
        return !1;
      F(k, "Navigate to Account Management Page"), (Ae = !1), de(e, n, Vt);
      var o = ct(n),
        a;
      if (o)
        return (
          L("call acctmgmt:loadurl with " + o),
          (a = null),
          g_CS_tops && (a = g_CS_tops[e]),
          sendCS(e, { cmd: "loadurl", url: o }, a),
          (me = !0),
          verbose_log("m_in_loadurl set"),
          (b = n),
          (ie = _),
          (Ae = !0),
          null
        );
      ke = !1;
      var o = Nt(n),
        a,
        r,
        l;
      return (
        o &&
          (verbose_log("click on FN_NAVIGATE_TO_ACCTMGMT field!"),
          (a = DEFAULT_CLICK_DELAY),
          void 0 !== n.acctmgmt_delay && (a = n.acctmgmt_delay),
          (ke = !0),
          L("now waiting for click_ack C"),
          wn(e, o, a, (r = ue(n))),
          CPWbot_bg.mark_timestamp("wait_for_click_ack_C")),
        v_(n) && ((Ae = !0), d_(n))
          ? null
          : (de(e, n, Jt),
            t.didcallout
              ? (L("end of navigate_to_acctmgmt thread with callout to CS - hack Cpickup to resume for aid=" + i), (_e = "Cpickup"), null)
              : (g_v2engine || L("no callout to CS, so nav_to_acctmgmt does not end thread, returning to initiate"), !0))
      );
    }),
    (this.trigger_cpw = function (e, t) {
      if (D) return !1;
      if (((D = !0), verbose_log("trigger_cpw entered"), CPWbot_bg.mark_timestamp("trigger_cpw"), !t)) return !1;
      var n = t.recipe,
        _ = t.payload;
      if (!n || !_) return !1;
      var i = I_(n),
        o = A_(n),
        a = (L("trigger_cpw called after wait-for-document-complete tabid=" + e), (_e = "E"), !0),
        r = _.aid,
        l = Ln(r),
        s = "";
      if (!l) return Bi("given invalid aid - data consistency error?"), !1;
      (s = l.url), de(e, n, Bt);
      var c = mt(n),
        u = vt(n),
        d = Ct(n),
        g = Lt(n),
        f = ue(n),
        p = 15,
        b = 1,
        m = 1,
        v = 1,
        C = 0,
        h = 1,
        N = 0,
        S = 1,
        E = null,
        P,
        w,
        I =
          (g_isfirefox
            ? (LP.lpprefsHasUserValue("genpw_passlen") && (p = LP.lpprefsGetIntPref("genpw_passlen")),
              LP.lpprefsHasUserValue("genpw_upper") && (b = LP.lpprefsGetBoolPref("genpw_upper") ? 1 : 0),
              LP.lpprefsHasUserValue("genpw_lower") && (m = LP.lpprefsGetBoolPref("genpw_lower") ? 1 : 0),
              LP.lpprefsHasUserValue("genpw_digits") && (v = LP.lpprefsGetBoolPref("genpw_digits") ? 1 : 0),
              LP.lpprefsHasUserValue("genpw_special") && (C = LP.lpprefsGetBoolPref("genpw_special") ? 1 : 0),
              LP.lpprefsHasUserValue("genpw_mindigits") && (h = LP.lpprefsGetIntPref("genpw_mindigits") ? 1 : 0),
              LP.lpprefsHasUserValue("genpw_ambig") && (N = LP.lpprefsGetBoolPref("genpw_ambig") ? 1 : 0),
              LP.lpprefsHasUserValue("genpw_reqevery") && (S = LP.lpprefsGetBoolPref("genpw_reqevery") ? 1 : 0),
              LP.lpprefsHasUserValue("genpw_pronounceable") && (E = LP.lpprefsGetBoolPref("genpw_pronounceable") ? 1 : 0))
            : ((p = reduxApp.getPreference("generate_length")),
              (b = reduxApp.getPreference("generate_upper")),
              (m = reduxApp.getPreference("generate_lower")),
              (v = reduxApp.getPreference("generate_digits")),
              (C = reduxApp.getPreference("generate_special")),
              (h = reduxApp.getPreference("generate_mindigits")),
              (N = reduxApp.getPreference("generate_ambig")),
              (S = reduxApp.getPreference("generate_reqevery")),
              (E = reduxApp.getPreference("generate_pronounceable"))),
          0 == b && 0 == m && 0 == v && 0 == C && (b = m = v = 1),
          getpasswordfromacct(l)),
        A = (I.length > p && (p = I.length), u_(n));
      null !== A &&
        (void 0 !== A.length && null !== A.length && (p = A.length),
        void 0 !== A.maxlength && null !== A.maxlength && p > A.maxlength && (p = A.maxlength),
        void 0 !== A.minlength && null !== A.minlength && p < A.minlength && (p = A.minlength),
        void 0 !== A.special && null !== A.special && (C = A.special ? 1 : 0),
        void 0 !== A.digits && null !== A.digits && (v = A.digits ? 1 : 0),
        void 0 !== A.upper && null !== A.upper && (b = A.upper ? 1 : 0),
        void 0 !== A.lower && null !== A.lower && (m = A.lower ? 1 : 0),
        void 0 !== A.mindigits) &&
        null !== A.mindigits &&
        (h = A.mindigits),
        F(
          k,
          "Generating a new password that is " +
            p +
            " chars long, " +
            (b ? "with" : "without") +
            " uppercase chars, " +
            (m ? "with" : "without") +
            " lowercase chars, " +
            (v ? "with" : "without") +
            " numeric chars, " +
            (C ? "with" : "without") +
            " special chars, with at least " +
            h +
            " numbers,"
        );
      var T,
        A = (g_isfirefox ? LP.lpCreatePass : lpCreatePass)(p, b, m, v, C, h, N, S, E),
        p =
          (L("generated new password: " + (g_show_pw_in_logs || g_isadmin ? A : "REDACTED")),
          L("saving " + (g_show_pw_in_logs || g_isadmin ? A : "REDACTED") + " to " + s + " as generated password"),
          g_isfirefox ? ff_save_generated_password(A, s, !0, !0) : savePassword(A, s, e, 1),
          g_isfirefox ? null !== LP.lpgenpwlist && LP.lpgenpwlist.unshift(A) : null !== g_genpws && g_genpws.unshift(A),
          CPWbot_bg.do_milestone(e, 73, n),
          (_.newpw = lpenc_acct(A, l, "undefined" == typeof g_shares ? lpshares : g_shares)),
          (_.curpw = lpenc_acct(I, l, "undefined" == typeof g_shares ? lpshares : g_shares)),
          (Pe = (ie = _).newpw),
          F(k, "Filling Change-Password Form"),
          T_(n)),
        b = (rnd2 = rnd3 = rnd4 = 0),
        m = (U && ((b = W()), (rnd2 = W()), (rnd3 = W()), (rnd4 = W())), 0),
        v,
        O,
        O,
        f;
      return (
        c && Pn(e, I, c, i, p * (m += 1) + b, o, f),
        u && Pn(e, A, u, i, p * (m += 1) + b + rnd2, o, f),
        d && Pn(e, A, d, i, p * (m += 1) + b + rnd2 + rnd3, o, f),
        g &&
          ((se = !0),
          L("now waiting for click_ack E"),
          (v = null),
          void 0 !== n.trigger_cpw_delay && (v = n.trigger_cpw_delay),
          verbose_log("trigger cpw delay : " + v + " + " + p * m),
          wn(e, g, (O = null === (O = v) ? p * m : v + p * m + rnd4), (f = ue(n))),
          CPWbot_bg.mark_timestamp("wait_for_click_ack_E")),
        pass,
        de(e, n, Kt),
        t.didcallout
          ? (L("end of trigger_cpw thread with callout to CS - hack Epickup to resume for aid=" + r), (_e = "Epickup"), null)
          : (L("no callout to CS, so trigger_cpw does not end thread, returning to initiate"), !0)
      );
    }),
    (this.navigate_to_login = function (e, t) {
      var n, _, i, o, a;
      return (
        !!t &&
        ((n = t.recipe), (we = !(_e = "B")), !!n) &&
        ((_ = !1),
        F(k, "Navigate to Login"),
        (i = lt(n))
          ? (L("call login:loadurl with " + i),
            (o = null),
            g_CS_tops && ((o = g_CS_tops[e]), g_ischrome) && 0 != o && L("loadurl is not sending to docnum==0 ! " + o),
            sendCS(e, { cmd: "loadurl", url: i }, o),
            (me = !0),
            verbose_log("m_in_loadurl set"),
            (b = n),
            (ie = t),
            (we = !0),
            null)
          : !g_v2engine && (m_(n) && ((we = !0), p_(n)) ? null : (de(e, n, qt), !0)))
      );
    }),
    (this.check_is_logged_in = function (e, t, n) {
      var _, t, _, i, o;
      return (
        !!t &&
        ((_ = null),
        CPWbot_bg.should_wait_for_document_complete(
          e,
          (t = { recipe: t, desc: "validate_website_is_loggedin", fn_required: Yn, fn_rejected: qn, fn_url_success: a, fn_url_failed: a })
        )
          ? ((be = !0), CPWbot_bg.wait_for_doc_complete(e, null, fe, t), null)
          : (L("validate_website_is_loggedin returns true, no wait "), !0))
      );
    }),
    (this.validate_login_success = function (e, t, n) {
      if (!t) return !1;
      de(e, t, Zt);
      var t = { recipe: t, desc: "validate_login_success", fn_required: Hn, fn_rejected: Vn, fn_url_success: bn, fn_url_failed: pn };
      return CPWbot_bg.should_wait_for_document_complete(e, t)
        ? ((be = !0), CPWbot_bg.wait_for_doc_complete(e, null, fe, t), null)
        : (L("validate_login_success returns true, no wait "), !0);
    }),
    (this.validate_login_entry_success = function (e, t, n) {
      if (!t) return !1;
      de(e, t, cn);
      var t = { recipe: t, desc: "validate_login_entry_success", fn_required: Jn, fn_rejected: Bn, fn_url_success: vn, fn_url_failed: mn };
      return CPWbot_bg.should_wait_for_document_complete(e, t)
        ? ((be = !0), CPWbot_bg.wait_for_doc_complete(e, null, fe, t), null)
        : (L("validate_login_entry_success returns true, no wait "), !0);
    }),
    (this.validate_cpw_success = function (e, t, n) {
      if (!t) return !1;
      de(e, t, Qt);
      var t = { recipe: t, desc: "validate_cpw_success", fn_required: Kn, fn_rejected: xn, fn_url_success: gn, fn_url_failed: fn };
      return CPWbot_bg.should_wait_for_document_complete(e, t)
        ? ((be = !0), CPWbot_bg.wait_for_doc_complete(e, null, fe, t), null)
        : (L("validate_cpw_success returns true, no wait "), !0);
    }),
    (this.validate_login_form = function (e, t, n) {
      var t;
      return (
        !!t &&
        (CPWbot_bg.should_wait_for_document_complete(
          e,
          (t = { recipe: t, desc: "validate_login_form", fn_required: Dn, fn_rejected: Un, fn_url_success: a, fn_url_failed: a })
        )
          ? ((be = !0), CPWbot_bg.wait_for_doc_complete(e, null, fe, t), null)
          : (L("validate_login_form returns true, no wait "), !0))
      );
    }),
    (this.validate_cpw_form = function (e, t, n) {
      var t;
      return (
        !!t &&
        (CPWbot_bg.should_wait_for_document_complete(
          e,
          (t = { recipe: t, desc: "validate_cpw_form", fn_required: Wn, fn_rejected: Gn, fn_url_success: a, fn_url_failed: a })
        )
          ? ((be = !0), CPWbot_bg.wait_for_doc_complete(e, null, fe, t), null)
          : (L("validate_cpw_form returns true, no wait "), !0))
      );
    }),
    (this.validate_login_entry_form = function (e, t, n) {
      var t;
      return (
        !!t &&
        (CPWbot_bg.should_wait_for_document_complete(
          e,
          (t = { recipe: t, desc: "validate_login_entry_form", fn_required: Mn, fn_rejected: jn, fn_url_success: a, fn_url_failed: a })
        )
          ? ((be = !0), CPWbot_bg.wait_for_doc_complete(e, null, fe, t), null)
          : (L("validate_login_entry_form returns true, no wait "), !0))
      );
    }),
    (this.revert_password = function (e, t, n) {
      return !!t && (alert("REVERT: TODO"), !0);
    }),
    (this.initiate = function (e, t, n, _) {}),
    (this.cpwbot_cs_finish_complete = function (e) {
      verbose_log("cpwbot_cs_finish_complete on tabid=" + e),
        p != e
          ? null !== p &&
            verbose_log("stale call: started up a new password change on different tab - ABORT - tabid==" + e + " g_pwchangetabid=" + p)
          : (null !== CPWbot_bg.session_timeout_st_id && clearTimeout(CPWbot_bg.session_timeout_st_id),
            (CPWbot_bg.session_timeout_st_id = null) !== CPWbot_bg.docaptcha_si_id && clearInterval(CPWbot_bg.docaptcha_si_id),
            (CPWbot_bg.docaptcha_si_id = null),
            CPWbot_bg.mark_timestamp("finish_complete"),
            CPWbot_bg.logout(),
            c_(e),
            CPWbot_bg.do_milestone(e, 66, null));
    }),
    (this.finish_cpwbot_validate_state = function (e, t, n, _, i) {
      verbose_log("ENTERED finish_cpwbot_validate_state");
      var o = !1,
        a,
        r = !1,
        l;
      if (p != e) verbose_log("finish_cpwbot_validate_state: !tabid, abort");
      else if (t != ae)
        (l = ""),
          verbose_log(
            "finish_cpwbot_validate_state: ignoring stale request, current validate is " +
              re +
              "/" +
              ae +
              ", stale req is " +
              i +
              "/" +
              t +
              " "
          );
      else {
        var s,
          c = l_(b),
          u = ae;
        if (E && !P)
          (P = !(E = !1)),
            L("finish_cpwbot_validate_state: reload1 extending timeout for " + i),
            setTimeout(function () {
              CPWbot_bg.finish_cpwbot_validate_state(e, u, n, _, i);
            }, c);
        else if ((verbose_log("finish_cpwbot_validate_state: closing out request " + i + "/" + t), null === m))
          verbose_log("finish_cpwbot_validate_state: dup, abort");
        else if (null === g_CS[e])
          lploggedin
            ? (L("finish_cpwbot_validate_state: reload2 extending timeout for " + i),
              setTimeout(function () {
                CPWbot_bg.finish_cpwbot_validate_state(e, u, n, _, i);
              }, c))
            : (verbose_log("finish_cpwbot_validate_state: tab " + e + " closed "), CPWbot_bg.panic("logged out?"));
        else {
          var t = N;
          for (g_CS[e].length == m.length && (r = !0), a = 0; a < m.length; a++)
            if (m[a]) {
              o = !0;
              break;
            }
          r ||
            verbose_log(
              "finish_cpwbot_validate_state: sent out " +
                g_CS[e].length +
                " messages, received " +
                m.length +
                " messages, skipped " +
                t +
                " frames"
            );
          var d = 0,
            g = 0,
            f,
            c,
            r,
            t;
          for (f in v) !v.hasOwnProperty(f) || this.skip_frame_by_score(f) || (d++, m[f] && g++);
          g < d && console_warn("CASE : still waiting to hear from important frames, expected to hear from " + d + ", heard from " + g),
            o || ((c = JSON.parse(n)), (r = JSON.parse(_)), 0 == c.length && 0 < r.length && (o = !0)),
            (oe = m = null),
            (N = 0),
            g_v2engine
              ? ((ve = be = !1),
                L("VALIDATE_IN_DOCWAIT=false"),
                (Ce = o),
                (he = {}),
                console_log("finish_cpwbot_validate_state complete result=" + o + ", wait for next engine cycle at " + _e),
                pass)
              : ((t = { aid: h, recipe: b, validate_result: o }),
                console_log("finish_cpwbot_validate_state resumed initiate with state=" + _e),
                CPWbot_bg.initiate(e, t, _e));
        }
      }
      return !1;
    }),
    (this.chk_cpw_resume = function (e, t) {
      return !1;
    }),
    (this.cpwbot_validate_state_result_handler = function (e, t) {
      var n = !1;
      if (CPWbot_bg && null !== p && e == p) {
        var _ = t.docnum;
        if (void 0 !== _ && CPWbot_bg && null !== m) {
          var i = JSON.parse(t.result),
            o = JSON.parse(t.rejected_fields),
            a = JSON.parse(t.required_fields),
            r = !1,
            l = null,
            s = (t.result_obj && (l = JSON.parse(t.result_obj)), t.desc),
            c = t.id;
          if (
            (L("received a " + s + " validate result from [" + e + "][" + _ + "][" + t.url + "][" + t.docstate + "][" + t.state + "]=" + i),
            (re && re != s) || (ae && ae != c))
          )
            return (
              L("unexpected validate msg - perhaps from the last validate call.... ignoring it"),
              void L("got " + s + "/" + c + " expected " + re + "/" + ae)
            );
          var c = !1,
            t =
              (l &&
                (t.required_url &&
                  F(
                    C,
                    "[" +
                      e +
                      "][" +
                      _ +
                      "] validate given success_url, result=" +
                      l.url_success_match +
                      " when matching success url = " +
                      t.required_url
                  ),
                t.rejected_url &&
                  F(
                    C,
                    "[" +
                      e +
                      "][" +
                      _ +
                      "] validate given bad_url, result=" +
                      l.url_failure_match +
                      " when matching failure url = " +
                      t.rejected_url
                  ),
                F(
                  C,
                  sprintf(
                    "[%s][%d] %s found %d/%d success fields, given %d invalid fields and %s invalid fields, %s captcha-ish fields",
                    e,
                    _,
                    s,
                    l.num_ok_matches,
                    l.num_okfields,
                    l.num_badfields,
                    l.found_bad_match ? "found" : "did not find",
                    l.found_interactive ? "found" : "did not find"
                  )
                ),
                0 < l.num_ok_matches ? (K_(e, t), l.found_interactive && (c = !0)) : l.found_bad_match ? (K_(e, t), (c = !0)) : x_(e, t),
                l.found_interactive) &&
                (r = !0),
              (m[_] = i),
              z_(e));
          if (null === g_CS[e] && CPWbot_bg && oe)
            return L("interrupted by a page load/refresh, reissuing validate for state " + _e), (m = []), void sendCS(e, oe, "all");
          g_CS[e] && g_CS[e].length == m.length && (n = !0),
            null === g_CS[e]
              ? verbose_log("tab is reloading but cannot retry validate ? WTF")
              : verbose_log(
                  "[" + e + "] " + s + " sent " + g_CS[e].length + " messages, heard from " + m.length + ", skipped " + t + " frames"
                ),
            (i || n || c || r) &&
              ((m = null) === i && (i = !1),
              (oe = null),
              (ve = be = !1),
              L("VALIDATE_IN_DOCWAIT=false"),
              L("validate complete, result is " + i + " current state=" + _e),
              (Ce = i),
              (he = l));
        } else debug && L("stale2? validate result tabid=" + e + " g_pwchangetabid=" + p + " g_pwchange_validate_desc=" + re);
      } else debug && L("stale1? validate result tabid=" + e + " g_pwchangetabid=" + p + " g_pwchange_validate_desc=" + re);
    }),
    (this.cpwbot_finish_ack_handler = function (e, t) {
      var n, _;
      null !== e &&
        t &&
        (sendCS(e, { cmd: "cpwbot_finish_ack" }, "all"),
        sendCS(e, { cmd: "hide_cpwbot_overlay" }, "all"),
        g_CS_tops[e] != t.docnum &&
          (null == g_CS_tops[e] || void 0 === g_CS_tops[e]
            ? console_error("webpage has not finished loading")
            : (console_error("WTF : top " + g_CS_tops[e] + " but docnum is " + t.docnum),
              (n = getcsinfo(e, t.docnum)),
              (_ = getcsinfo(e, g_CS_tops[e])) && verbose_log("[" + g_CS_tops[e] + "] topdoc is " + _.url),
              n && verbose_log("[" + t.docnum + "] other doc is " + n.url),
              n && n.parent_docnum == n.docnum
                ? verbose_log("CS table says that " + t.docnum + " is top")
                : _ && _.parent_docnum == _.docnum
                ? verbose_log("CS table says that " + g_CS_tops[e] + " is top")
                : verbose_log("CS table mismatch, or reloading ? "))),
        CPWbot_bg.cpwbot_cs_finish_complete(e));
    }),
    (this.cpwbot_skip_url = function (e, t) {
      return !1;
    }),
    (this.originating_tabid = null),
    (this.destination_tabid = null),
    (this.originating_tab = null),
    (this.destination_tab = null),
    (this.logout = function () {
      (Ee = 0),
        rt(),
        (P = E = u = g = !1),
        (l = v = Pe = p = ae = re = oe = ie = b = h = _e = null),
        this.clear_event_queue(),
        (S = se = Ge = ce = ke = We = Fe = !1);
    }),
    (this.initialize = function (e) {
      e
        ? ((p = e.tabid),
          debug && (Pi = e.tabid),
          (b = e.recipe),
          (h = e.aid),
          (_e = 0),
          rt(),
          (g = se = u = !1),
          g_robots_txt && sendCS(e.tabid, { cmd: "get_robots_txt" }, g_CS_tops[e.tabid]),
          (l = null),
          (ei = ""),
          (y = ye = G = O = T = I = w = P = E = !(v = {})),
          (si = 0),
          CPWbot_bg.clear_event_queue(),
          U_(),
          (D = !(Le = 1)),
          (CPWbot_bg.broken_hearted_st_id = null),
          (gi = di = ui = me = !1),
          (Ai = 0),
          (this.cpw_dialog_minimize_state = 0))
        : console_error("passed invalid params");
    }),
    (this.pwchangetabid_is_still_valid = function () {
      var e;
      return !!CPWbot_bg && !(null === (e = p) || !g_CS || void 0 === g_CS[e] || null === g_CS[e]);
    }),
    (this.panic = function (e) {
      (e = e || "UNEXPECTED ERROR"),
        L("panic=" + e + ", g_pwchangetabid == " + p),
        CPWbot_bg.do_milestone(p, s, b, e),
        ge(p),
        CPWbot_bg.cpwbot_cs_finish_complete(p);
    }),
    (this.setmsg_cpwbot_overlay = function (e, t) {
      s_(e, t);
    }),
    (this.initiate_on_complete = function (e, t, n) {
      var _ = null,
        i = 900,
        o = 45;
      if (!g_cpwbot || !CPWbot_bg || 45 < n)
        return CPWbot_bg.do_milestone(e, xe, r, "initiate_on_complete"), CPWbot_bg.panic("TIMEOUT-initiate"), null;
      var a = t.aid,
        r = t.recipe,
        l,
        s,
        l,
        c,
        u;
      if ((null == n && (n = 1), !G_(r)))
        return (
          (s = "(null)"),
          (l = Ln(a)) && l.url && (s = this.JSON.stringify(l.url)),
          F(F_, (l = "Bad Recipe")),
          (c = "Error for recipe on aid=" + a + ", url=" + s),
          CPWbot_bg.phone_home(null, null, { severity: "fatal", msg: l }),
          CPWbot_bg.panic(c),
          null
        );
      if (!ki) {
        var l,
          l = (l = O_(r)) || i,
          c = g_CS_tops[e];
        if (null !== c) {
          var i,
            s,
            _ = getcsinfo(e, g_CS_tops[e]);
          if (_)
            if ("complete" == _.docstate)
              return (
                CPWbot_bg.mark_timestamp("doc_complete"),
                ping(e),
                (i = n ? (n * l) / 1e3 : 0),
                isNaN(i) && verbose_log("WTF NaN: ctr=" + n + " url=" + s + " aid=" + a),
                0 < (i = d && 0 < (s = d.doc_complete - d.openurl_callback) && 0 != d.doc_complete && d.openurl_callback ? s / 1e3 : i) &&
                  F(C, "Waited " + i + " seconds for document-complete before calling initialize_engine"),
                CPWbot_bg.initialize_engine(e, t)
              );
        }
        return ki || !lploggedin
          ? (L("abort wait-for-doc-complete initiate"), !1)
          : (null !== c ? ping(e, c) : ping(e),
            verbose_log("waiting for tabid " + e + " topdocnum=" + c + " docstate=" + (_ ? _.docstate : "null")),
            setTimeout(function () {
              CPWbot_bg.initiate_on_complete(e, t, n + 1);
            }, l),
            !0);
      }
      Vi(e, r);
    }),
    (this.get_user_debug_messages = function (e, t) {
      return i;
    });
  var C = 0,
    k = 1,
    k_ = 2,
    F_ = 3;
  function F(e, t) {
    var n, e;
    return (
      (e < C || F_ < e) && (e = C),
      !!((g_isfirefox && lpisadmin) || g_isdebug || g_isadmin) &&
        ((i += e = "[" + ["DEBUG", "INFO", "WARN", "ERR"][e] + "] " + t + "\n"), verbose_log(e), write_history({ cmd: "CPW", msg: e }), !0)
    );
  }
  function W_(e, t) {
    var n = !1;
    if (t && e)
      try {
        var _ = new (g_isfirefox ? e.defaultView.XPathEvaluator : XPathEvaluator)();
        if (!_ && debug) return L("NO XPATH EVALUATOR AVAILABLE ????"), !0;
        var i = _.evaluate(
            t,
            e.documentElement,
            null,
            (g_isfirefox ? e.defaultView.XPathResult : XPathResult).FIRST_ORDERED_NODE_TYPE,
            null
          ),
          n = !0;
      } catch (e) {
        console_error("error validating '" + t + "', exception: " + e), (n = !1);
      }
    else debug && L("validate_xpath: none");
    return n;
  }
  function G_(e) {
    var t = g_isfirefox ? LP.getBrowser().selectedTab.linkedBrowser.contentDocument : document,
      n,
      _,
      i;
    if (!t || !e) return L("Bad Recipe: none"), !1;
    if (!lt(e)) return L("Bad Recipe: no login url"), !1;
    if (!_o(e)) return L("Bad Recipe: no symbolic"), !1;
    if (!e.field_info || e.field_info.length <= 0) return L("Bad Recipe: no fields"), !1;
    if (!y_(e)) return !1;
    for (var o = !1, a = !1, r = !1, l = !1, s = !1, c = !1, u = !1, d = !1, g = !1, n = 0; n < e.field_info.length; n++)
      switch ((_ = e.field_info[n]).id_function) {
        case FN_LOGIN:
        case FN_LOGIN_SUBMIT:
        case FN_PASSWORD:
          o = !0;
          break;
        case FN_CURRENT_PASS:
        case FN_NEW_PASS:
        case FN_NEW_PASS_CONFIRM:
        case FN_CPW_SUBMIT:
          s = !0;
          break;
        case FN_CPW_SUCCESS:
        case FN_CPW_SUCCESS_INVALID:
          c = !0;
          break;
        case FN_LOGIN_SUCCESS:
        case FN_LOGIN_SUCCESS_INVALID:
          r = !0;
          break;
        case FN_IS_LOGGED_IN:
        case FN_IS_LOGGED_IN_NEGATION:
          a = !0;
          break;
        case FN_NAVIGATE_TO_LOGOUT:
          d = !0;
      }
    if (
      ((gn(e) || fn(e) || Qt(e)) && (u = !0),
      (bn(e) || pn(e) || Zt(e)) && (l = !0),
      ut(e) && (g = !0),
      !(o && a && (r || l) && s && (d || g) && (c || u)))
    )
      return (
        L(
          "Bad Recipe for " +
            _o(e) +
            ": has_login_fields?" +
            o +
            " has_logged_in_fields?" +
            a +
            " has_login_success_fields?" +
            r +
            " has_login_success_alt?" +
            l +
            " has_logout_field?" +
            d +
            " has_logout_alt?" +
            g +
            " has_cpw_fields?" +
            s +
            " has_cpw_success_fields?" +
            c +
            " has_cpw_success_alt?" +
            u
        ),
        !1
      );
    for (n = 0; n < e.field_info.length; n++)
      if ((_ = e.field_info[n]).id_type == TYPE_XPATH) {
        if (!W_(t, _.id_value)) return L("Bad Recipe: bad xpath"), !1;
        if (_.id_value && 0 < _.id_value.indexOf("@clas,")) return L("Bad Recipe: @clas mispell"), !1;
      } else if (
        (_.id_type == TYPE_ID || _.id_type == TYPE_NAME) &&
        _.id_value &&
        (0 <= _.id_value.indexOf("//") || 0 <= _.id_value.indexOf("text()") || 0 <= _.id_value.indexOf("contents("))
      )
        return L("Bad Recipe: xpath in non-xpath field def"), !1;
    return !0;
  }
  function y_(e) {
    var t,
      n,
      _,
      i = !0,
      o = { id_function: 1, id_value: 1, id_type: 1 };
    if (!e.field_info || e.field_info.length <= 0) return !1;
    for (n = 0; n < e.field_info.length; n++)
      for (_ in ((t = e.field_info[n]) &&
        "number" != typeof t.id_function &&
        (verbose_log(sprintf("field %s has invalid function '%s'", t.id_value, t.id_function)), (i = !1)),
      t))
        !t.hasOwnProperty(_) || o[_] || (verbose_log(sprintf("found invalid field property '%s'", _)), (i = !1));
    if (((o = { jsfrag: 1, jstype: 1 }), e.jsfrags && 0 < e.jsfrags.length))
      for (n = 0; n < e.jsfrags.length; n++)
        for (_ in ((t = e.jsfrags[n]) &&
          "number" != typeof t.jstype &&
          (verbose_log(sprintf("js with invalid type '%s'", t.jstype)), (i = !1)),
        t))
          !t.hasOwnProperty(_) || o[_] || (verbose_log(sprintf("found invalid javascript property '%s'", _)), (i = !1));
    if (
      ((o = { length: 1, maxlength: 1, minlength: 1, special: 1, digits: 1, upper: 1, lower: 1, mindigits: 1 }), e.generate_pref_overrides)
    )
      for (_ in e.generate_pref_overrides)
        !e.generate_pref_overrides.hasOwnProperty(_) ||
          o[_] ||
          (verbose_log(sprintf("found invalid generate preference '%s'", _)), (i = !1));
    return i;
  }
  function D_() {
    return se || ce || ke || Oe || Ge || S || Fe || We;
  }
  function U_() {
    We = Fe = S = Ge = Oe = ke = ce = se = !1;
  }
  function R_(e, t, n) {}
  function M_(e, t, n) {
    var _;
    0 < $n(t).length || pass;
  }
  function j_(e, t, n) {
    var _;
    0 < e_(t).length || pass;
  }
  function H_(e, t, n) {
    var _;
    0 < t_(t).length || pass;
  }
  function V_(e, t, n) {
    var _;
    n_(t).length;
  }
  function J_(e, t, n) {
    var _;
    return 0 < __(t).length;
  }
  function B_(e, t) {}
  function K_(e, t) {
    var n = t.docnum,
      t = t.url,
      _ = 2;
    null !== v && ((null !== v[n] && void 0 !== v[n]) || CPWbot_bg.clear_frame_score(e, n, t), (v[n] = v[n] + 2));
  }
  function x_(e, t) {
    var n = t.docnum,
      t = t.url,
      _ = -2;
    null !== v && ((null !== v[n] && void 0 !== v[n]) || CPWbot_bg.clear_frame_score(e, n, t), (v[n] = v[n] + -2));
  }
  function Y_(e, t) {}
  function q_(e, t, n) {}
  function z_(e) {
    if (null === v || null === e) return 0;
    var t,
      n = 0,
      _,
      t;
    for (_ in CS_table)
      CS_table.hasOwnProperty(_) &&
        (t = CS_table[_]).tabid === e &&
        ((t = t.docnum), CPWbot_bg.skip_frame_by_score(t) || skip_CS_by_score(e, t)) &&
        n++;
    return n;
  }
  function X_() {}
  function Z_(e, t) {}
  function Q_(e, t, n) {
    var _, i, n, o, a, r, l, s, c, u, d;
    t &&
      n &&
      ((i = _ = ""),
      (n = Ln(n.aid))
        ? (L("pre-challenge-form-js"),
          de(e, t, en),
          (o = It(t)),
          (a = wt(t)),
          (r = I_(t)),
          (l = A_(t)),
          (s = T_(t)),
          (c = rnd2 = 0),
          U && ((c = W()), (rnd2 = W())),
          (u = 0),
          (d = ue(t)),
          o && (u++, En(e, (_ = getusernamefromacct(n)), o, r, s * u + c, !1, d)),
          a && (u++, Pn(e, (i = getpasswordfromacct(n)), a, r, s * u + c + rnd2, l, d)),
          L("post-challenge-form-js"),
          de(e, t, tn))
        : Bi("given invalid aid - data consistency error?"));
  }
  function $_(e, t, n) {
    var _, i, o, a;
    t &&
      ((f = _ = !1),
      (i = At(t)) &&
        ((o = DEFAULT_CLICK_DELAY), void 0 !== t.login_delay && (o = t.login_delay), (f = !0), wn(e, i, o, (a = ue(t))), (_ = !0)),
      de(e, t, nn)) &&
      (_ = !0);
  }
  (this.userlog = F),
    (this.click_ack_handler = function (e, t) {
      var n = t.docnum,
        _ = t.url,
        i = t.docstate,
        o = t.msgid,
        a = t.pwchangestate,
        r = t.found;
      return (
        L(
          "[T:" +
            e +
            "][D:" +
            n +
            "] cpwbot click_ack on " +
            t.id_value +
            " found=" +
            r +
            " url=" +
            _ +
            " docstate=" +
            i +
            " pwchangestate=" +
            a
        ),
        l != o
          ? (console_error("response for last click request overlaps current click-wait, ignoring it, found=" + r),
            L("m_pwchange_last_click_field_id=" + l),
            L("found=" + r + " msgid = " + o),
            r && console_error("Bad Mojo"))
          : r &&
            ((se = se && !1),
            (Oe = Oe && !1),
            (ce = ce && !1),
            (ke = ke && !1),
            (Fe = Fe && !1),
            (We = We && !1),
            (Ge = Ge && !1),
            (S = S && !1)),
        !0
      );
    }),
    (this.fill_ack_handler = function (e, t) {
      var n = t.docnum,
        _ = t.url,
        i = t.docstate,
        o = t.msgid,
        a = t.pwchangestate,
        r = t.found;
      return (
        verbose_log(
          sprintf(
            "[%s][%s] cpwbot fill ack on %s found=%s docstate=%s url=%s req_id=%s",
            e,
            t.docnum,
            t.id_value,
            t.found,
            t.docstate || "null",
            t.url || "null",
            t.req_id || "null"
          )
        ),
        !0
      );
    }),
    (this.js_ack_handler = function (e, t) {
      var n = "";
      try {
        n = JSON.parse(t.result);
      } catch (e) {
        console_warn("js_ack_handler: " + e);
      }
      return (
        verbose_log(
          sprintf(
            "[%s][%s] cpwbot js ack result=%s docstate=%s url=%s req_id=%s",
            e,
            t.docnum,
            n ? ofa(n) : "null",
            t.docstate || "null",
            t.url || "null",
            t.req_id || "null"
          )
        ),
        !0
      );
    }),
    (this.check_for_robots = function (e, t, n) {}),
    (this.check_robot_txt = function (e, t, n) {
      if (g_robots_txt) {
        if (!e) return !0;
        var _ = lt(e);
        if (null !== t) {
          for (var i, o = 0, a = t.split("\n"), r = !1, l = !1, o = 0; o < a.length; o++)
            ((0 == (i = a[o]).length && "" == i) || "\r" == i) && (l = r = !1),
              "#" != i.charAt(0) &&
                (0 == i.indexOf("User-agent: LastPass") || 0 == i.indexOf("User-agent: *")
                  ? (r = !0)
                  : 0 == i.indexOf("Disallow: /") && (l = !0));
          return !r || !l;
        }
        g_tmp_recipe = e;
      }
    }),
    (this.score_frame = function (e, t) {
      var n = t.docnum,
        _ = t.url,
        i,
        o = -100,
        a = -100,
        r = 0,
        l = 100,
        s = lp_gettld_url(_),
        c = 0,
        u = [
          "doubleclick.net",
          "appads.com",
          "crwdcntrl.net",
          "googleadservices.com",
          "quantserve.com",
          "questionmarket.com",
          "advertising.com",
          "zedo.com",
          "checkm8.com",
          "zvents.com",
          "doubleclick.com",
          "yldmgrimg.net",
          "optmd.com",
          "casalemedia.com",
          "scorecardresearch.com",
          "quotemedia.com",
          "tacoda.net",
          "daylife.com",
          "brightcove.com",
          "wibiya.com",
          "clickability.com",
          "stats.com",
          "google-analytics.com",
          "adfusion.com",
          "2mdn.net",
          "adsonar.com",
          "everyclick.com",
          "shopica.com",
          "yeah.com",
          "vectorportal.com",
          "cnomy.com",
          "phpbb.com",
          "tracking101.com",
          "revsci.net",
          "revsci.com",
          "atdmt.com",
          "mmismm.com",
          "googlesyndication.com",
          "247realmedia.com",
          "pointroll.com",
          "bluekai.com",
          "serving-sys.com",
          "vizu.com",
          "cleanprint.com",
          "outbrain.com",
          "tweetmeme.com",
          "visiblemeasures.com",
          "starwave.com",
          "kaango.com",
          "gabriels.net",
          "overture.com",
          "yieldmanager.net",
          "2mdn.com",
          "eyewonder.com",
          "imgdownloads.com",
          "liverail.com",
          "adnxs.com",
          "addthis.com",
          "addthiscdn.com",
          "imshopping.com",
          "adtech.de",
          "2o7.net",
          "glanceguide.com",
          "performgroup.com",
          "undertone.com",
          "undertonevideo.com",
          "martiniadnetwork.com",
          "chartbeat.net",
          "omtrdc.net",
          "zoomflow.com",
          "crowdscience.com",
          "imrworldwide.com",
          "fwmrm.net",
          "tremormedia.com",
          "webtrends.com",
          "adzerk.net",
          "adzerk.com",
          "qubitproducts.com",
          "maxymiser.net",
          "maxymiser.com",
          "newrelic.com",
          "mathtag.com",
          "adroll.com",
          "criteo.com",
          "liveperson.com",
          "getclicky.com",
          "sitemeter.com",
          "displaymarketplace.com",
          "yieldmanager.com",
          "media6degrees.com",
          "betrad.com",
          "360yield.com",
          "adpredictive.com",
          "burstnet.com",
          "adtechus.com",
          "adsafeprotected.com",
          "turn.com",
          "contextweb.com",
          "p-td.com",
          "lijit.com",
          "rubiconproject.com",
          "ru4.com",
          "admeld.com",
          "openx.net",
          "pubmatic.com",
          "localyokelmedia.com",
          "qnsr.com",
          "wrating.com",
          "audienceiq.com",
          "mydas.mobi",
          "mopub.com",
          "visualrevenue.com",
          "adsymptotic.com",
          "admob.com",
          "adtrking.com",
          "4dsply.com",
          "adshostnet.com",
          "adziff.com",
          "33across.com",
          "vindicosuite.com",
          "securepaths.com",
          "taboola.com",
          "trk4.com",
          "crwdcntrl.com",
          "connexity.com",
          "connexity.net",
          "effectivemeasure.net",
          "visualdna.com",
          "amazon-adsystem.com",
          "4dsply.com",
          "adblade.com",
          "doubleverify.com",
          "technoratimedia.com",
          "adjuggler.com",
          "opbandit.com",
          "iesnare.com",
          "adexcite.com",
          "adadvisor.net",
          "agkn.com",
          "dntx.com",
          "revenuehits.com",
          "tribalfusion.com"
        ],
        d = [
          "ads.cnn.com",
          "metrics.post-gazette.com",
          "ads.nwsource.com",
          "adbox.sina.com.cn",
          "ads.sina.com.cn",
          "ad.afy11.net",
          "avatar.cnn.com",
          "ads.cnn.com",
          "metrics.apple.com",
          "trailers.apple.com",
          "metrics.philly.com",
          "adsatt.espn.go.com",
          "player.ooyala.com",
          "seg.sharethis.com",
          "edge.sharethis.com",
          "bender.spoutable.com",
          "engine.spoutable.com"
        ],
        g = [
          "facebook.com/plugins",
          "facebook.com/connect/xd_arbiter",
          "youtube.com/embed/",
          "platform.twitter.com/widget",
          "platform.twitter.com/tweet_button",
          "libsyn.com/embed",
          "amazon.com/gp/widget"
        ];
      for (g_CS_tops && g_CS_tops[e] == t.docnum && (r = l), i = 0; i < u.length; i++)
        if (s == u[i]) {
          (r = o), (c = 1);
          break;
        }
      if (!c)
        for (i = 0; i < d.length; i++)
          if (0 <= _.indexOf(d[i])) {
            (r = o), (c = 1);
            break;
          }
      if (!c)
        for (i = 0; i < g.length; i++)
          if (0 <= _.indexOf(g[i])) {
            (r = a), (c = 1);
            break;
          }
      return v && (v[n] = r), r;
    }),
    (this.score_topdoc = function (e, t, n) {
      var _ = 100;
      if (null === v) return !1;
      (null !== v[t] && void 0 !== v[t]) || CPWbot_bg.clear_frame_score(e, t, n);
      var n = getcsinfo(e, t);
      return (n && (state_param = n.flags) && state_param.has_frameset) || (v[t] = v[t] + _), !0;
    }),
    (this.clear_frame_score = function (e, t, n) {
      var _ = 0;
      return null !== v && !(v[t] = 0);
    }),
    (this.reset_scores = function (e) {
      return !(v = null);
    }),
    (this.skip_frame_by_score = function (e) {
      var t;
      return null === v || null === e || ((t = 0), L("skip? docnum =" + e + " score=" + v[e]), v[e] < 0);
    }),
    (this.recompute_scores_for_tab = function (e) {
      return !0;
    }),
    (this.retry_validate = function (e, t) {
      null === t && (t = "all"), oe && ((m = []), sendCS(e, oe, t));
    }),
    (this.wait_for_doc_complete = function (e, t, n, _, i, o) {
      var a,
        r,
        l = _.aid,
        s = _.recipe,
        c = null,
        u = N_(s);
      i = i || 0;
      var s,
        s = (s = O_(_.recipe)) || 900,
        d = g_CS_tops[e];
      if ((void 0 === d && (d = null), null !== (t = null == t ? d : t) && (r = getcsinfo(e, t)))) {
        var g,
          c = r.docstate;
        if (f(r.docstate) && f(o))
          return (
            (g = i ? (i * s) / 1e3 : 0),
            isNaN(g) && verbose_log("WTF NaN: recursion_ctr=" + i + " aid=" + l),
            0 < g &&
              F(
                C,
                sprintf("Waited %d seconds for %s on [tabid:%s][docnum:%d] to execute %s", g, u ? "interactive" : "complete", e, t, _.desc)
              ),
            null !== CPWbot_bg.get_pwchangetabid() &&
              CPWbot_bg.in_validate() &&
              ((ve = !1), L("WAITED DONE, calling " + _.desc + " VALIDATE_IN_DOCWAIT=false")),
            n(e, _)
          );
      }
      return ki || !lploggedin || null === _e
        ? (L("abort wait-for-doc-complete " + _.desc), !1)
        : (ping(e),
          verbose_log(
            "waiting for tabid " +
              e +
              " topdocnum=" +
              d +
              " passed_docnum=" +
              t +
              " docstate=" +
              (r ? r.docstate : "null") +
              " last_state=" +
              o
          ),
          t != d &&
            (console_error("edge case - top docnum changed due to page reload?  will wait for that instead" + t + "!=" + d), (t = d)),
          setTimeout(function () {
            lploggedin && CPWbot_bg && CPWbot_bg.wait_for_doc_complete(e, t, n, _, i + 1, c);
          }, s),
          !0);
      function f(e) {
        return u ? "complete" == e || "interactive" == e : "complete" == e;
      }
    }),
    (this.should_wait_for_document_complete = function (e, t) {
      if (null === e || !t) return !1;
      var e = t.desc,
        n = t.recipe,
        _ = !0,
        i = t.fn_url_failed,
        o = t.fn_url_success,
        a = t.fn_required,
        r = t.fn_rejected,
        a = a ? a(n) : [],
        r = r ? r(n) : [],
        n = t.target_url,
        l = t.target_field,
        t = t.target_js;
      if ((_ = null == n && null == l && null == t ? _ : !1)) {
        if (0 == a.length && 0 == r.length && !o && !i)
          return L("should_wait returns false, WARN: " + e + " has no field or url criteria defined to validate against"), !1;
      } else if (!n && !l && !t) return L("should_wait returns false, no wait criteria, " + e), !1;
      return L("should_wait returns true for " + e + " is_validate=" + _), !0;
    }),
    (this.handle_challenge = function (e, t) {}),
    (this.validate_challenge_page = function (e, t, n) {
      var t;
      return (
        !!t &&
        (CPWbot_bg.should_wait_for_document_complete(
          e,
          (t = { recipe: t, desc: "validate_challenge_form", fn_required: zn, fn_rejected: Xn, fn_url_success: hn, fn_url_failed: Cn })
        )
          ? ((be = !0), CPWbot_bg.wait_for_doc_complete(e, null, fe, t), null)
          : (L("validate_challenge_form returns false, no criteria to check, no wait"), !1))
      );
    }),
    (this.force_validate_retry = function (e) {
      E = e;
    }),
    (this.validate_challenge_success = function (e, t, n) {
      if (!t) return !1;
      de(e, t, _n);
      var t = { recipe: t, desc: "validate_challenge_success", fn_required: Zn, fn_rejected: Qn, fn_url_success: a, fn_url_failed: a };
      return CPWbot_bg.should_wait_for_document_complete(e, t)
        ? ((be = !0), CPWbot_bg.wait_for_doc_complete(e, null, fe, t), null)
        : (L("validate_challenge_success returns true, no wait "), !0);
    });
  var ei = "";
  function ti(e, t) {
    null !== e && null !== g_CS_tops[e] && sendCS(e, { cmd: "do_result_div", msg: t }, g_CS_tops[e]);
  }
  function ni(e) {
    var t = g_CS_tops[e],
      e = getcsinfo(e, t);
    e && e.flags && e.flags.need_dynamic_delay;
  }
  (this.set_dialog_msg = function (e) {
    return (ei = e), !0;
  }),
    (this.get_dialog_msg = function () {
      return ei;
    }),
    (this.clear_dialog_msg = function () {
      return !(ei = "");
    }),
    (this.get_failstate = function () {
      return T;
    }),
    (this.get_okstate = function () {
      return O;
    }),
    (this.get_captchastate = function () {
      return G;
    }),
    (this.get_docaptchastate = function () {
      return ye;
    }),
    (this.get_brokenheartstate = function () {
      return y;
    }),
    (this.get_failpwsavedstate = function () {
      return Fi;
    }),
    (this.get_fail_pending = function () {
      return u;
    }),
    (this.get_success_pending = function () {
      return g;
    }),
    (this.show_selenium_ok = function (e) {
      ti(e, "OK");
    }),
    (this.show_selenium_fail = function (e) {
      ti(e, "FAIL");
    }),
    (this.preinit = function () {
      (_e = "preinit"),
        (R = 0),
        rt(),
        (i = ei = ""),
        null !== CPWbot_bg.broken_hearted_st_id && clearTimeout(CPWbot_bg.broken_hearted_st_id),
        (CPWbot_bg.broken_hearted_st_id = null),
        (Fi = O = y = T = ye = G = ki = !1);
    }),
    (this.do_milestone = function (e, t, n, _) {
      var i = null;
      if (((n = n || { symbolic: "" }), (R = t), null == _ && (_ = ""), "undefined" != typeof Date)) {
        var o = "",
          a = new Date().toString(),
          r,
          r,
          i,
          r,
          l;
        switch ((c[t] && ((r = (r = _o(n)) || gs("unnamed site")), (i = sprintf(c[t], r))), t)) {
          case 1:
          case 2:
            break;
          case 3:
          case 8:
            break;
          case 4:
            verbose_log("C: GOTO ACCTMGMT ");
            break;
          case 5:
            verbose_log("D: REVEAL");
            break;
          case 6:
            verbose_log("E: TRIGGER");
            break;
          case 7:
            verbose_log("F: VALIDATE");
            break;
          case q:
            An(e, n, ie),
              de(e, n, un),
              (ye = !0),
              g_isfirefox && s_(e, gs("The website needs you to enter information. Please close this overlay and enter it."), n, !0),
              c_(e),
              CPWbot_bg.session_timeout_st_id && (clearTimeout(CPWbot_bg.session_timeout_st_id), (CPWbot_bg.session_timeout_st_id = null)),
              CPWbot_bg.docaptcha_si_id && clearInterval(CPWbot_bg.docaptcha_si_id),
              (CPWbot_bg.docaptcha_si_id = setInterval(function () {
                ye && fe(e, { desc: "docaptcha", recipe: n, fn_required: __ });
              }, 1e3));
            break;
          case 63:
            F(k, "Saved and Replaced"),
              (O = !0),
              (debug || g_isdebug) && (F(k, "showing selenium ok result"), CPWbot_bg.show_selenium_ok(e)),
              (g = !0),
              CPWbot_bg.mark_timestamp("success");
            break;
          case 65:
            F(k, g_v2engine ? sprintf("[%s] v2 %s", a, gs("BEGIN")) : sprintf("[%s] %s", a, gs("BEGIN")));
            break;
          case 66:
            F(k, g_v2engine ? sprintf("[%s] v2 %s", a, gs("End").toUpperCase()) : sprintf("[%s] %s", a, gs("End").toUpperCase()));
            break;
          case 67:
            verbose_log("USER IS ALREADY LOGGED IN, SKIP LOGIN STATE"), F(k, "Appears to be Logged Into Site");
            break;
          case je:
          case ee:
            F(k, "Filling Login Form");
            break;
          case Me:
          case te:
            F(k, "Submit Login Form");
            break;
          case 70:
            F(k, "Going to Login"), verbose_log("B: GOTO LOGIN");
            break;
          case 71:
            F(k, "Perform Logout");
            break;
          case 72:
            1 != Le && F(k, sprintf("Adjusting for %s site, %6.2f", 1 < Le ? "slow" : "fast", Le));
            break;
          case 73:
            (Fi = !0), F(k, "Generated Random Password and Saved to Vault");
            break;
          case s:
            o = "UNEXPECTED ERROR";
            break;
          case Be:
            o = "FILL LOGIN FORM [PW CHALLENGE] FAILED!";
            break;
          case Ke:
            o = "SUBMIT LOGIN FORM [PW CHALLENGE] FAILED!";
            break;
          case Ye:
            o = "Expected Change-Password Form";
            break;
          case qe:
            o = "Change Password Failed";
            break;
          case Je:
            o = "Expected Login Form";
            break;
          case Ve:
          case et:
            o = "Login to Website Failed!";
            break;
          case ze:
            o = "Unable to Save New Password";
            break;
          case Xe:
            o = "Unable to Log Out of Website";
            break;
          case xe:
            (o = gs("Timed out waiting for the page to load.  Retry?")), (y = !0);
            break;
          case $e:
            o = "Session Timeout";
            break;
          case Ze:
            o = "Halt Requested";
            break;
          case Qe:
            (G = !0), (o = "Interaction required; cannot proceed");
            break;
          default:
            i = "";
        }
        return (
          (t & s) == s
            ? ((T = !0),
              F(F_, o),
              (debug || g_isdebug) && (F(k, "showing selenium fail result"), CPWbot_bg.show_selenium_fail(e)),
              (u = !0),
              CPWbot_bg.mark_timestamp("fail"),
              (r = { severity: "fatal", msg: sprintf("%s[debug=%s]", o, _) }),
              CPWbot_bg.phone_home(e, n, r),
              Fi && (i = sprintf(c[it], _o(n))))
            : 64 == (64 & t) && (i = ""),
          i && (s_(e, i, n), CPWbot_bg.set_dialog_msg(i)),
          CPWbatch &&
            CPWbatch.cpw_get_batchjob_state() != F_NONE &&
            ((l = ""), 63 == t ? (l = "OK") : t == xe || t == $e ? (l = "TIMEOUT") : (t & s) == s && t != xe && t != $e && (l = "FAIL")),
          CPWbatch && CPWbatch.conditional_website_status_update({ tabid: e, recipe: n, state: t, msg: i }),
          !0
        );
      }
    });
  var _i = null,
    ii = null,
    pe = null,
    oi = null,
    be = !1,
    ai = !1,
    ri = !1,
    be = !1,
    li = [],
    si = 0,
    ci = [],
    me = !1,
    ui = !1,
    di = !1,
    gi = !1,
    fi = !1,
    pi = !1,
    bi = !1,
    mi = !1,
    vi = !1,
    Ci = !1,
    hi = !1,
    Ni = !1,
    ve = null,
    Ce = null,
    he = {},
    Ne = null,
    Si = null,
    Li = null,
    Ei = !1,
    Pi = null,
    wi = null,
    Ii = null,
    Ai = 0,
    Ti = 10,
    Oi = null,
    ki = !1,
    Fi = !1;
  function Wi(t, e) {
    var e,
      e = (e = w_(e)) || DEFAULT_SESSION_TIMEOUT,
      n = (null !== Le && 0 < Le && !isNaN(Le) && (e *= Le), CPWbot_bg.get_session());
    CPWbot_bg.session_timeout_st_id = setTimeout(function () {
      var e;
      n != CPWbot_bg.get_session()
        ? verbose_log("stale timeout")
        : (CPWbot_bg.mark_timestamp("session_timeout"),
          (e = CPWbot_bg.get_timestamp("session_timeout") - CPWbot_bg.get_timestamp("initial_cycle")),
          verbose_log(sprintf("session timeout at %6.2f seconds after T=0", e / 1e3)),
          verbose_log("SESSION TIMEOUT WAKEUP"),
          u || g || p != t
            ? (ge(t), CPWbot_bg.cpwbot_cs_finish_complete(t))
            : (Ji("timeout: a change is still running ? tabid=" + t + "last state =" + _e), CPWbot_bg.panic("session timeout")));
    }, e);
  }
  (this.broken_hearted_st_id = null), (this.session_timeout_st_id = null), (this.docaptcha_si_id = null);
  var Gi = 0;
  function yi(e, t, n) {
    var _ = "",
      i = (verbose_log("B1: validate_login_form "), (_e = "B1"), null),
      o = { aid: n.aid, recipe: t },
      i;
    null === (i = CPWbot_bg.validate_login_form(e, t, o))
      ? (verbose_log("B1: validate_login_form / CS callout "), (ve = !0), L("VALIDATE_IN_DOCWAIT=true"))
      : i
      ? do_A4(e, t, n)
      : (CPWbot_bg.do_milestone(e, Je, t, ""), ge(e));
  }
  function Di(e, t, n) {
    var _;
    setTimeout(function () {
      lploggedin && CPWbot_bg && CPWbot_bg.engine(e, t, n);
    }, 250);
  }
  function Ui() {
    for (var e, t, e = 0; e < ci.length; e++) if ("validate_response" == (t = ci[e]).type) return 1;
  }
  function Ri(e, t) {
    var n = m_lastclick_metadata;
    Ti < Ai && verbose_log("too many click retries"),
      n && (F(k, "Retry Click"), verbose_log("tabid=" + e + " id_type=" + n.id_type + " id_value=" + n.id_value), sendCS(e, n, t), Ai++);
  }
  function Se(e) {
    var t = new Date().getTime(),
      n;
    wi < t && !Ii && ((Ii = !0), Ri(e, "all"));
  }
  function Mi(e) {
    var t, n;
    d && 1e4 < (n = d.initial_cycle - d.dopwchange) && 0 != d.initial_cycle && 0 != d.dopwchange && ji(e, (Le = 2));
  }
  function ji(e, t) {
    L(sprintf("[%s] time factor adjustment=%6.2f", _o(e), t));
  }
  (this.engine = function (e, U, _) {
    var t = _.aid,
      n = _.recipe,
      a = new Date().getTime(),
      i = !1;
    if (
      (0 == si &&
        (CPWbot_bg.mark_timestamp("initial_cycle"),
        Mi(n),
        CPWbot_bg.do_milestone(e, 72, n),
        null !== CPWbot_bg.broken_hearted_st_id && clearTimeout(CPWbot_bg.broken_hearted_st_id),
        (CPWbot_bg.broken_hearted_st_id = null),
        Wi(e, n)),
      N("engine awaken tick=" + ++si),
      null === _e)
    )
      ge(e);
    else if (ki || !lploggedin) Vi(e, n);
    else {
      if (!ye) {
        var o,
          o = (o = w_(n)) || DEFAULT_SESSION_TIMEOUT,
          r = CPWbot_bg.get_timestamp("docaptcha_success"),
          r;
        if ((r = (r = r || CPWbot_bg.get_timestamp("initial_cycle")) || _i) + o * Le < a)
          return (i = !0), CPWbot_bg.do_milestone(e, $e, n, "engine"), void CPWbot_bg.panic("TIMEOUT-engine");
      }
      var r = l_(n);
      if (
        (be &&
          0 < oi &&
          oi + r < a &&
          (Ui(n) ? pass : ((ve = !1), L("ENGINE - VALIDATE_IN_DOCWAIT=false"), CPWbot_bg.finish_cpwbot_validate_state(e, ae, Si, Li, re))),
        U && le)
      ) {
        if (!(pe < a)) return N("CONTINUE SLEEPING"), void Di(e, _e, _);
        N("AWAKEN FROM SLEEP");
      }
      for (var R = {}, l = null, s, c, s = 0; s < ci.length; s++) {
        var c,
          u = (c = ci[s]).data.docnum;
        switch ((N(sprintf("[%s][%s] processing event#%d cmd=%s", e, u, s, c.data.cmd)), c.type)) {
          case "validate_response":
            CPWbot_bg.cpwbot_validate_state_result_handler(c.tabid, c.data);
            break;
          case "fill_ack":
            CPWbot_bg && CPWbot_bg.fill_ack_handler(c.tabid, c.data);
            break;
          case "click_ack":
            CPWbot_bg && CPWbot_bg.click_ack_handler(c.tabid, c.data);
            break;
          case "js_ack":
            CPWbot_bg && CPWbot_bg.js_ack_handler(c.tabid, c.data);
            break;
          case "finish_ack":
            CPWbot_bg && CPWbot_bg.cpwbot_finish_ack_handler(c.tabid, c.data);
            break;
          case "loadurl":
            if (g_CS_tops && g_CS_tops[e] == u)
              switch (
                (me && ((me = !1), N("m_in_loadurl cleared")),
                N("loadurl/setprefs against top :" + g_CS_tops[e] + " == " + u + " start_state=" + CPWbot_bg.get_pwchangestate()),
                _e)
              ) {
                case "A1":
                case "A2":
                case "A3":
                case "M":
                case "B1":
                case "F":
                  CPWbot_bg && oe && (CPWbot_bg.force_validate_retry(!0), CPWbot_bg.retry_validate(e));
                  break;
                case "B1R":
                case "A3R":
                  break;
                case "FK0":
                case "FKLL0":
                  break;
                case 0:
                case "0":
                  N("engine called in initial state - ignoring");
              }
            else
              null !== CPWbot_bg.get_pwchangetabid() && CPWbot_bg.in_validate()
                ? (L("processing loadurl event, reissue last validate to new doc [" + e + "][" + u + "]"), CPWbot_bg.retry_validate(e, u))
                : null !== CPWbot_bg.get_pwchangetabid() &&
                  D_() &&
                  (L("loadurl sent while waiting for a click, issue last click to new frame" + u), (Ni = !0), Ri(e, u));
            break;
          case "unload":
            break;
          default:
            N("need to handle this msg: " + c.data.cmd);
        }
      }
      CPWbot_bg.clear_event_queue(), N("current state is " + _e);
      var d = ie,
        l,
        g,
        f,
        p,
        f,
        p,
        b,
        m,
        v,
        b,
        m,
        v,
        M,
        p,
        C,
        p,
        g,
        v,
        v,
        h,
        g,
        b,
        m;
      switch ((_e && null === d && (d = { aid: t }), _e)) {
        case 0:
          z(e, n, d);
          break;
        case "A1":
          CPWbot_bg.in_validate() || ve
            ? (N("waiting for validate to end, " + _e), pass)
            : di
            ? (N("waiting for doc-complete for Cnav, " + _e), pass)
            : be
            ? N("A1: wait on m_in_validate")
            : (g = l = Ce)
            ? (CPWbot_bg.do_milestone(e, 67, n), X(e, n, _))
            : null === g
            ? CPWbot_bg.alert("A1 unexpected")
            : k(e, n, _);
          break;
        case "A3R":
          Fe ? (N("waiting for click_ack, " + _e), Se(e), pass) : me ? (N("waiting for loadurl , " + _e), pass) : F(e, n, _);
          break;
        case "B1Rpre":
          q(e, n, _);
          break;
        case "B1R":
          We
            ? (N("waiting for click_ack, " + _e), Se(e), pass)
            : me
            ? (N("waiting for loadurl , " + _e), pass)
            : be
            ? N("B1R: wait on m_in_validate")
            : yi(e, n, _);
          break;
        case "B1":
          if (CPWbot_bg.in_validate() || ve) N("waiting for validate to end, " + _e), pass;
          else if (be) N("B1: wait on m_in_validate");
          else {
            var h = (l = Ce),
              p;
            if (he && he.found_interactive) return console_error("B1: found interactive field"), void no(e, n);
            if (!h)
              return (
                debug && g_innerHTML_debug && he.innerhtml && verbose_log("VALIDATE FAILURE, final innerHTML is " + he.innerhtml),
                (p = ""),
                CPWbot_bg.do_milestone(e, Je, n, p),
                void ge(e)
              );
            G(e, n, _);
          }
          break;
        case "A2":
          if (CPWbot_bg.in_validate() || ve) N("waiting for validate to end, " + _e), pass;
          else if (be) N("A2: wait on m_in_validate");
          else if (di) N("A2: wait on navigate");
          else {
            if (he && he.found_interactive) return console_error("A2: found interactive field"), void no(e, n);
            if (!(f = l = Ce)) return (p = ""), CPWbot_bg.do_milestone(e, Ve, n, p), void ge(e);
            S(e, n, _);
          }
          break;
        case "A3":
          if (CPWbot_bg.in_validate() || ve || be) N("waiting for validate to end, " + _e), pass;
          else {
            var h = (l = Ce);
            if (he && he.found_interactive) return console_error("A3: found interactive field"), void no(e, n);
            (h
              ? (N("A3: has login form, calling do_A4"), he && he.found_interactive && N("A3: found_interactive=true"), G)
              : (debug && g_innerHTML_debug && he.innerhtml && verbose_log("VALIDATE FAILURE, final innerHTML is " + he.innerhtml), Y))(
              e,
              n,
              _
            );
          }
          break;
        case "M":
          if (CPWbot_bg.in_validate() || ve || be) N("waiting for validate to end, " + _e), pass;
          else {
            var g = (l = Ce);
            if (he && he.found_interactive) return console_error("M: found interactive field"), void no(e, n);
            (g
              ? $
              : (verbose_log("did not find initial stage login form"),
                he.innerhtml && verbose_log("final innerHTML is " + he.innerhtml),
                (_.check_login_entry_form = !1),
                W))(e, n, _);
          }
          break;
        case "M2":
          if (CPWbot_bg.in_validate() || ve) N("waiting for validate to end, " + _e), pass;
          else if (be) N("M2: wait on m_in_validate");
          else if (di) N("M2: wait on navigate");
          else {
            if (he && he.found_interactive) return console_error("M2: found interactive field"), void no(e, n);
            if (!(f = l = Ce))
              return (
                (p = ""),
                he &&
                  (p = sprintf(
                    "found_bad_match=%s, num_ok_matches=%s, retval=%s, url_success_match=%s, url_failure_match=%s",
                    he.found_bad_match,
                    he.num_ok_matches,
                    he.retval,
                    he.url_success_match,
                    he.url_failure_match
                  )),
                CPWbot_bg.do_milestone(e, et, n, p),
                void ge(e)
              );
            (_.check_login_entry_form = !1), W(e, n, _);
          }
          break;
        case "A4":
          break;
        case "A5":
          y(e, n, _);
          break;
        case "M5":
          te(e, n, _);
          break;
        case "A":
          console_warn("engine state=A todo");
          break;
        case "B":
          me
            ? (N("waiting for loadurl to complete, " + _e), pass)
            : fi
            ? (N("waiting for doc-complete after loadurl, " + _e), pass)
            : D(e, n, _);
          break;
        case "Bsleep":
          fi ? (N("waiting for doc-complete after loadurl, " + _e), pass) : D(e, n, _);
          break;
        case "C":
          ke
            ? (N("waiting for click_ack, " + _e), Se(e), pass)
            : me
            ? (N("waiting for loadurl , " + _e), pass)
            : gi
            ? (N("waiting for reveal-cpw doc-complete, " + _e), pass)
            : ((m = null) !== (b = void 0 === (b = g_CS_tops[e]) ? null : b)
                ? (m = getcsinfo(e, b))
                  ? ((v = m.docstate),
                    "complete" == m.docstate && "complete" == v
                      ? (N("C: wait completed " + _e), E(e, n, _))
                      : N("C: wait docstate:" + m.docstate + ",last:" + v))
                  : N("C: fail")
                : N("C: wtf - wait for page to finish loading?"),
              null !== b ? ping(e, b) : ping(e));
          break;
        case "Cnav":
          L("aid = " + Ne.payload.aid), CPWbot_bg.navigate_to_acctmgmt(e, Ne), (Ne = null);
          break;
        case "Cpickup":
          ke && (L("still waiting for click-C"), N("waiting for click_ack, " + _e), Se(e)),
            gi ? L("still waiting for document-complete to run reveal_cpw") : E(e, n, _);
          break;
        case "A3Rsleep":
          F(e, n, _);
          break;
        case "B1Rsleep":
          W(e, n, _);
          break;
        case "Csleep":
          gi ? L("still waiting for document-complete to run reveal_cpw") : E(e, n, _);
          break;
        case "Dpickup":
          iscpwfast() && CPWbatch.conditional_website_status_update({ aid: t, state: 76, msg: "SLOW" }),
            ce ? (L("still waiting for click-D"), N("waiting for click_ack, " + _e), Se(e)) : w(e, n, _);
          break;
        case "Dsleep":
          w(e, n, _);
          break;
        case "Epickup":
          iscpwfast() && CPWbatch.conditional_website_status_update({ aid: t, state: 76, msg: "SLOW" }),
            se ? (L("still waiting for click-E"), N("waiting for click_ack, " + _e), Se(e)) : ((_.validate_result = null), O(e, n, _));
          break;
        case "Esleep":
          (_.validate_result = null), O(e, n, _);
          break;
        case "D":
          N("engine handle D"),
            ce || me
              ? (ce ? (N("waiting for click_ack, " + _e), Se(e)) : N("waiting for load to complete, " + _e), pass)
              : ((m = null) !== (b = void 0 === (b = g_CS_tops[e]) ? null : b)
                  ? (m = getcsinfo(e, b))
                    ? ((v = m.docstate),
                      "complete" == m.docstate && "complete" == v
                        ? (N("D: wait completed " + _e), w(e, n, _))
                        : N("D: wait docstate:" + m.docstate + ",last:" + v))
                    : N("D: fail")
                  : N("D: wtf - wait for page to finish loading?"),
                null !== b ? ping(e, b) : ping(e));
          break;
        case "Dreveal":
          var j = CPWbot_bg.reveal_cpw(e, Ne);
          Ne = null;
          break;
        case "D1":
          if (CPWbot_bg.in_validate() || ve) N("waiting for validate to end, " + _e), pass;
          else if (be) N("D1: wait on m_in_validate");
          else if (ui) N("D1: wait on doc-complete for trigger_cpw");
          else {
            var h = (l = Ce);
            if (he && he.found_interactive) return console_error("D1: found interactive field"), void no(e, n);
            (h ? T : I)(e, n, _);
          }
          break;
        case "D2":
          if (CPWbot_bg.in_validate() || ve) N("waiting for validate to end, " + _e), pass;
          else if (be) N("D2: wait on m_in_validate");
          else {
            if (!(l = Ce)) return (p = ""), CPWbot_bg.do_milestone(e, Ye, n, p), void ge(e);
            A(e, n, _);
          }
          break;
        case "D4":
          break;
        case "D5":
          Oe ? (N("waiting for click_ack, " + _e), Se(e)) : ui ? N("D5: wait on doc-complete for trigger_cpw") : T(e, n, _);
          break;
        case "D3":
          console_error("D3 reached - should not happen");
          break;
        case "D_validate_cpw_form":
          fe(e, Ne), (Ne = null);
          break;
        case "E":
          console_error("E: should not occur");
          break;
        case "Etrigger":
          se
            ? (N("waiting for click_ack, " + _e), Se(e))
            : me
            ? console_error("Etrigger: m_in_loadurl should not happen")
            : be
            ? console_error("Etrigger: m_in_validate should not happen")
            : (CPWbot_bg.trigger_cpw(e, Ne), (Ne = null));
          break;
        case "F":
          CPWbot_bg.in_validate() || ve
            ? (N("waiting for validate to end, " + _e), pass)
            : me
            ? (N("waiting for loadurl and doc-complete"), pass)
            : be
            ? (N("F: wait on m_in_validate"), pass)
            : (CPWbot_bg.bagration(),
              null !== (C = l = Ce) &&
                (verbose_log("F: VALIDATE return from CS, returned " + C),
                debug && g_innerHTML_debug && Ce.innerhtml && !C && verbose_log("VALIDATE FAILURE, final innerHTML is " + Ce.innerhtml),
                (p = ""),
                C
                  ? (verbose_log("cpwbot initiate: validate cpw succeeded, now updating user record"),
                    Fn(e, n, d)
                      ? (CPWbot_bg.do_milestone(e, 63, n),
                        (g = Ln(t)),
                        (v = lpdec_acct(Pe, g, "undefined" == typeof g_shares ? lpshares : g_shares)),
                        (h = lt(n)),
                        (g = lp_gettld_url(h)),
                        verbose_log(
                          'remember to g_didchangepw for pw="' + (g_show_pw_in_logs || g_isadmin ? v : "REDACTED") + '" tld=' + g
                        ),
                        remember_changed_pw(v, g) ||
                          verbose_log(
                            'save to g_didchangepw failed for pw="' + (g_show_pw_in_logs || g_isadmin ? v : "REDACTED") + '" tld=' + g
                          ),
                        K(e, n, _))
                      : CPWbot_bg.do_milestone(e, ze, n, p))
                  : CPWbot_bg.do_milestone(e, qe, n, p)),
              ge(e),
              (i = !0));
          break;
        case "G":
          break;
        case "L":
          Ge
            ? (N("waiting for click_ack, " + _e), Se(e), pass)
            : me
            ? (N("waiting for loadurl , " + _e), pass)
            : ((m = null) !== (b = void 0 === (b = g_CS_tops[e]) ? null : b) &&
                ((m = getcsinfo(e, b)) ? "complete" == m.docstate && (N("L: wait completed " + _e), Z(e, n, _)) : N("L: fail")),
              null !== b ? ping(e, b) : ping(e));
          break;
        case "Lsleep":
          Z(e, n, _);
          break;
        case "Bagration":
          break;
        case "FK0":
          Yi(e, n, _);
          break;
        case "FK1":
          qi(e, n, _);
          break;
        case "FK2":
          zi(e, n, _);
          break;
        case "FKI":
          Xi(e, n, _);
          break;
        case "FK3":
          k(e, n, _);
          break;
        case "FKLL0":
          Zi(e, n, _);
          break;
        case "FKLL1":
          Qi(e, n, _);
          break;
        case "FKLL2":
          $i(e, n, _);
          break;
        case "FKLLI":
          eo(e, n, _);
          break;
        case "FKLL3":
          S(e, n, _);
          break;
        default:
          pass;
      }
      i || Di(e, _e, _);
    }
    function N(e) {
      var e;
      debug && ((e = sprintf("[%s][%s] : %s", new Date().toString(), "engine", e)), console_log(e));
    }
    function S(e, t, n) {
      var _,
        _ = { aid: n.aid, recipe: n.recipe },
        _ =
          (verbose_log("do_C " + _e),
          CPWbot_bg.do_milestone(e, 4, t),
          {
            desc: "navigate_to_acctmgmt",
            didcallout: !1,
            payload: _,
            recipe: t,
            target_field: Nt(t),
            target_js: Vt(t) + "" + Jt(t),
            target_url: ct(t)
          }),
        _ = CPWbot_bg.should_wait_for_document_complete(e, _)
          ? (L("wrapped navigate_to_acctmgmt around wait-for-document-complete"),
            (_.didcallout = !0),
            (di = !0),
            CPWbot_bg.wait_for_doc_complete(
              e,
              null,
              function (e, t) {
                L("Cnav milestone"), (_e = "Cnav"), (Ne = t);
              },
              _
            ),
            null)
          : ((_.didcallout = !1), L("execute navigate_to_acctmgmt, no wait "), CPWbot_bg.navigate_to_acctmgmt(e, _));
      null === _
        ? L("callout to CS : navigate_to_acctmgmt")
        : (!1 === _ && console_error("C error"), L("execute navigate_to_acctmgmt, no wait "), P(e, t, n));
    }
    function E(e, t, n) {
      le = !1;
      var _ = d_(t),
        _;
      (_ = _ || 2500) && !mi
        ? ((_e = "Csleep"), L("C sleeping " + _), (pe = (ii = a) + _), (mi = le = !0))
        : ((mi = !0), Ae && de(e, t, Jt), P(e, t, n));
    }
    function P(e, t, n) {
      var _,
        _ = (verbose_log("do_D " + _e), { aid: n.aid, recipe: n.recipe }),
        _ =
          ((gi = !1),
          CPWbot_bg.do_milestone(e, 5, t),
          {
            desc: "reveal_cpw",
            payload: _,
            recipe: t,
            didcallout: !1,
            target_field: ht(t),
            target_js: jt(t) + "" + Ht(t),
            target_url: st(t)
          }),
        _ = CPWbot_bg.should_wait_for_document_complete(e, _)
          ? (L("wrapped reveal_cpw around wait-for-document-complete"),
            (_.didcallout = !0),
            (gi = !0),
            CPWbot_bg.wait_for_doc_complete(
              e,
              null,
              function (e, t) {
                L("Dreveal milestone"), (_e = "Dreveal"), (Ne = t);
              },
              _
            ),
            null)
          : ((_.didcallout = !1), L("execute reveal_cpw, no wait "), CPWbot_bg.reveal_cpw(e, _));
      return _ ? (L("execute reveal_cpw, no wait "), T(e, t, n)) : (L("callout to CS : reveal_cpw"), _);
    }
    function w(e, t, n) {
      le = !1;
      var _ = g_(t),
        _;
      (_ = _ || 2500) && !vi
        ? ((_e = "Dsleep"), L("D sleeping " + _), (pe = (ii = a) + _), (vi = le = !0))
        : ((vi = !0), Ie && de(e, t, Ht), H(e, t, n));
    }
    function H(e, t, n) {
      L("entered do_D1");
      var _ = { aid: n.aid, recipe: t },
        i = ((_e = "D1"), null),
        i;
      return null === (i = CPWbot_bg.validate_cpw_form(e, t, _))
        ? (verbose_log("D1: validate_cpw_form / CS callout "), (ve = !0), L("VALIDATE_IN_DOCWAIT=true"), null)
        : i
        ? void 0
        : I(e, t, n);
    }
    function I(e, t, n) {
      var _ = "",
        i = { aid: n.aid, recipe: t },
        o = ((_e = "D2"), null),
        o;
      return null === CPWbot_bg.validate_login_form(e, t, i)
        ? ((ve = !0), L("VALIDATE_IN_DOCWAIT=true"), verbose_log("D2: validate_login_form / CS callout "), null)
        : C
        ? A(e, t, n)
        : (CPWbot_bg.do_milestone(e, Ye, t, ""), ge(e), !1);
    }
    function A(e, t, n) {
      var _ = "",
        i = ((_e = "D4"), verbose_log("D4: FILL LOGIN/CHALLENGE"), null),
        i;
      return An(e, t, d) ? V(e, t, n) : (CPWbot_bg.do_milestone(e, Be, t, ""), ge(e), !1);
    }
    function V(e, t, n) {
      var _ = "",
        i = (verbose_log("D5: SUBMIT LOGIN"), (_e = "D5"), 1100),
        o = L_(t),
        o = ((i = o ? o : i) && verbose_log("waiting " + i + " ms after login waiting for site to bootstrap"), Tn(e, t, d));
      return !1 === o
        ? (CPWbot_bg.do_milestone(e, Ke, t, ""), ge(e), !1)
        : null === o
        ? (i && ((le = !0), (pe = (ii = a) + i)), null)
        : T(e, t, n);
    }
    function J(e, t, n) {}
    function T(e, t, n) {
      var _,
        _ = (verbose_log("do_E " + _e), { aid: n.aid, recipe: n.recipe }),
        _ =
          (CPWbot_bg.do_milestone(e, 6, t),
          { desc: "trigger_cpw", payload: _, recipe: t, target_field: Lt(t), target_js: Bt(t) + "" + Kt(t), target_url: null }),
        _ = CPWbot_bg.should_wait_for_document_complete(e, _)
          ? (L("wrapped trigger_cpw around wait-for-document-complete"),
            (_.didcallout = !0),
            (ui = !0),
            CPWbot_bg.wait_for_doc_complete(
              e,
              null,
              function (e, t) {
                L("Etrigger milestone"), (_e = "Etrigger"), (Ne = t);
              },
              _
            ),
            null)
          : ((_.didcallout = !1), L("execute trigger_cpw, no wait "), CPWbot_bg.trigger_cpw(e, _));
      return _ ? (L("execute trigger_cpw, no wait "), O(e, t, n)) : (L("callout to CS : trigger_cpw"), _);
    }
    function O(e, t, n) {
      le = !1;
      var _ = f_(t),
        _;
      return (_ = _ || 2500) && !Ci
        ? ((_e = "Esleep"), L("E sleeping " + _), (pe = (ii = a) + _), (Ci = le = !0), null)
        : ((Ci = !0), (n.validate_result = null), B(e, t, n));
    }
    function B(e, t, n) {
      var _;
      return (
        CPWbot_bg.mark_timestamp("verify_cpw"),
        CPWbot_bg.do_milestone(e, 7, t),
        (_e = "F"),
        null === (_ = CPWbot_bg.validate_cpw_success(e, t, d))
          ? (verbose_log("F: VALIDATE callout to CS"), (ve = !0), L("VALIDATE_IN_DOCWAIT=true"), null)
          : (verbose_log("F: VALIDATE no callout to CS"), Ji("no verify-cpw criteria defined"), CPWbot_bg.panic("fail"), !1)
      );
    }
    function K(e, t, n) {
      var _, i;
      $t(t) &&
        ((_ = 1234),
        (i = P_(t)) && (_ = i),
        setTimeout(function () {
          CPWbot_bg.conditional_js_exec(e, t, $t);
        }, _)),
        console_error("The End.");
    }
    function k(e, t, n) {
      CPWbot_bg.do_milestone(e, 3, t);
      var _ = Pt(t),
        i,
        o;
      return _
        ? ((_e = "A3R"),
          verbose_log("A3R: login-form-reveal"),
          (i = DEFAULT_CLICK_DELAY),
          void 0 !== t.login_reveal_delay && (i = t.login_reveal_delay),
          (Fe = !0),
          L("now waiting for click_ack A3R"),
          wn(e, _, i, (o = ue(t))),
          CPWbot_bg.mark_timestamp("wait_for_click_ack_A3R"),
          null)
        : F(e, t, n);
    }
    function F(e, t, n) {
      L("post_A3R"), (le = !1);
      var _ = p_(t);
      return (
        verbose_log("A3R sleepval=" + _),
        (_ = _ || 1e3) && !pi
          ? ((_e = "A3Rsleep"), L("A3R sleeping " + _), (pe = (ii = a) + _), (pi = le = !0), null)
          : ((pi = !0), (n.validate_result = null), verbose_log("calling reveal JS after A3 state"), de(e, t, qt), W(e, t, n))
      );
    }
    function W(e, t, n) {
      CPWbot_bg.do_milestone(e, 3, t);
      var _ = !0;
      if ((void 0 !== n.check_login_entry_form && (_ = !!n.check_login_entry_form), (_e = "A3"), _ && Rn(t))) {
        verbose_log("M: validate_login_entry_form"), CPWbot_bg.mark_timestamp("login_entry"), (_e = "M");
        var _ = null;
        if ((verbose_log("calling validate_login_entry_form"), null === (_ = CPWbot_bg.validate_login_entry_form(e, t, d))))
          return verbose_log("M: validate_login_entry_form / CS callout "), (ve = !0), L("VALIDATE_IN_DOCWAIT=true"), null;
        verbose_log("M: validate_login_entry_form returns " + _ + " no call to CS");
      }
      verbose_log("A3: validate_login_form"), (_e = "A3");
      var _ = null;
      return (
        verbose_log("calling validate_login_form"),
        null === (_ = CPWbot_bg.validate_login_form(e, t, d))
          ? (verbose_log("A3: validate_login_form / CS callout "), (ve = !0), L("VALIDATE_IN_DOCWAIT=true"), null)
          : (verbose_log("A3: validate_login_form returns " + _ + " no call to CS"), (_ ? G : Y)(e, t, n))
      );
    }
    function G(e, t, n) {
      CPWbot_bg.mark_timestamp("login_cpw");
      var _ = "",
        i = (verbose_log("A4: FILL LOGIN"), (_e = "A4"), null),
        i;
      return An(e, t, d) ? x(e, t, n) : (CPWbot_bg.do_milestone(e, Je, t, ""), ge(e), !1);
    }
    function x(e, t, n) {
      verbose_log("A5: SUBMIT LOGIN"), (_e = "A5");
      var _ = "",
        i = 1100,
        o = L_(t),
        o = ((i = o ? o : i) && verbose_log("waiting " + i + " ms after login waiting for site to bootstrap"), Tn(e, t, d));
      return !1 === o
        ? (CPWbot_bg.do_milestone(e, Ve, t, ""), ge(e), !1)
        : null === o
        ? (i && ((le = !0), (pe = (ii = a) + i)), null)
        : y(e, t, n);
    }
    function y(e, t, n) {
      verbose_log("A2: validate_login_success "), (_e = "A2");
      var _ = null,
        _,
        _,
        i,
        o;
      return null === (_ = CPWbot_bg.validate_login_success(e, t, d))
        ? (verbose_log("A2: validate_login_success / CS callout "), (ve = !0), L("VALIDATE_IN_DOCWAIT=true"), null)
        : (verbose_log("A2: validate_login_success " + _ + " no CS callout "),
          _
            ? void (g_cpw_do_fakeui
                ? ((_ = xi(e, t, n)),
                  (i = T_(t)),
                  setTimeout(
                    function () {
                      S(e, t, n);
                    },
                    i * _ + 1021
                  ))
                : S(e, t, n))
            : (CPWbot_bg.do_milestone(e, Ve, t, p), ge(e), retval));
    }
    function Y(e, t, n) {
      CPWbot_bg.mark_timestamp("navlogin_cpw"), Ee++, CPWbot_bg.do_milestone(e, 70, t);
      var _ = { aid: n.aid, recipe: n.recipe },
        _ = CPWbot_bg.navigate_to_login(e, _);
      _ && D(e, t, n);
    }
    function q(e, t, n) {
      We = !1;
      var _ = Pt(t),
        i,
        o;
      _
        ? ((_e = "B1R"),
          verbose_log("B1R: login-form-reveal"),
          verbose_log("click on FN_REVEAL_LOGIN field!"),
          (i = DEFAULT_CLICK_DELAY),
          void 0 !== t.login_reveal_delay && (i = t.login_reveal_delay),
          (We = !0),
          verbose_log("now waiting for click_ack B1R"),
          wn(e, _, i, (o = ue(t))),
          CPWbot_bg.mark_timestamp("wait_for_click_ack_B1R"))
        : yi(e, t, n);
    }
    function D(e, t, n) {
      verbose_log("post_B"), (le = !1);
      var _ = p_(t),
        _;
      (_ = _ || 1e3) && !bi
        ? ((_e = "Bsleep"), L("B sleeping " + _), (pe = (ii = a) + _), (bi = le = !0))
        : ((bi = !0),
          (n.desc = "post_B/Breveal"),
          (n.validate_result = null),
          (g_v2engine || we) && (verbose_log("calling reveal JS after B state"), de(e, t, qt)),
          (fi = !0),
          CPWbot_bg.wait_for_doc_complete(
            e,
            null,
            function (e, t) {
              L("B-reveal milestone"), (_e = "B1Rpre"), (Ne = t);
            },
            n
          ));
    }
    function z(e, t, n) {
      _e = "A1";
      var n = CPWbot_bg.check_is_logged_in(e, t, n);
      null === n
        ? (verbose_log("A1: check_is_logged_in / CS callout "), (ve = !0), L("VALIDATE_IN_DOCWAIT=true"))
        : (verbose_log("A1: check_is_logged_in returns " + n + " no CS callout "), ((n = l = Ce) ? X : k)(e, t, _));
    }
    function X(e, t, n) {
      var _ = "",
        i = (CPWbot_bg.do_milestone(e, 71, t), (_e = "L"), CPWbot_bg.mark_timestamp("logout_cpw"), CPWbot_bg.navigate_to_logout(e, n));
      null === i ? verbose_log("L: navigate_to_logout / CS callout ") : i ? k(e, t, n) : (CPWbot_bg.do_milestone(e, Xe, t, ""), ge(e));
    }
    function Z(e, t, n) {
      L("post_L"), (le = !1);
      var _ = b_(t),
        _,
        i,
        o,
        _;
      (_ = _ || 1e3) && !hi
        ? ((_e = "Lsleep"), L("L sleeping " + _), (pe = (ii = a) + _), (hi = le = !0))
        : ((hi = !0),
          Te && de(e, t, rn),
          g_cpw_do_fakeui
            ? ((_ = Ki(e, t, n)),
              (i = T_(t)),
              setTimeout(
                function () {
                  k(e, t, n);
                },
                i * _ + 1017
              ))
            : k(e, t, n));
    }
    function Q(e, t, n) {
      L("do_Z");
    }
    function $(e, t, n) {
      CPWbot_bg.mark_timestamp("login_entry");
      var _ = "",
        i = (verbose_log("M4: FILL LOGIN"), (_e = "M4"), null),
        i;
      On(e, t, d) ? ee(e, t, n) : (CPWbot_bg.do_milestone(e, Je, t, ""), ge(e));
    }
    function ee(e, t, n) {
      verbose_log("M5: SUBMIT LOGIN ENTRY"), (_e = "M5");
      var _ = "",
        i = 1100,
        o = L_(t),
        o = ((i = o ? o : i) && verbose_log("waiting " + i + " ms after login waiting for site to bootstrap"), kn(e, t, d));
      return !1 === o
        ? (CPWbot_bg.do_milestone(e, et, t, ""), ge(e), !1)
        : null === o
        ? (i && ((le = !0), (pe = (ii = a) + i)), null)
        : te(e, t, n);
    }
    function te(e, t, n) {
      verbose_log("M2: validate_login_entry_success "), (_e = "M2");
      var _ = null,
        _;
      return null === (_ = CPWbot_bg.validate_login_entry_success(e, t, d))
        ? (verbose_log("M2: validate_login_entry_success / CS callout "), (ve = !0), L("VALIDATE_IN_DOCWAIT=true"), null)
        : (verbose_log("M2: validate_login_entry_success " + _ + " no CS callout "),
          _ ? ((n.check_login_entry_form = !1), void W(e, t, n)) : (CPWbot_bg.do_milestone(e, et, t, p), ge(e), retval));
    }
    function ne(e, t, n) {}
  }),
    (this.initialize_engine = function (e, t) {
      _i = new Date().getTime();
      var n = t.recipe,
        _ = t.aid,
        i = ((ie = t), CPWbot_bg.mark_timestamp("initialize_engine"), 0),
        o =
          ((m_in_logout_reveal = fi = gi = di = ui = me = !1),
          (Fi = be = le = hi = Ci = vi = mi = bi = pi = !1),
          CPWbot_bg.do_milestone(e, 65, n),
          S_(n)),
        o,
        a;
      o
        ? w ||
          ((w = !0),
          setTimeout(function () {
            return Di(e, 0, t), !1;
          }, o))
        : on(n) && !I
        ? ((o = 5e3),
          (a = E_(n)) && (o = a),
          (I = !0),
          verbose_log("initial JS inject before beginning - inject, and wait "),
          CPWbot_bg.conditional_js_exec(e, n, on),
          setTimeout(function () {
            return Di(e, 0, t), !1;
          }, o))
        : Di(e, 0, t);
    }),
    (this.push_event_queue = function (e, t, n) {
      var _;
      "validate_response" == e && void 0 !== n.desc && "docaptcha" == n.desc
        ? ye &&
          0 < JSON.parse(n.result_obj).num_ok_matches &&
          (CPWbot_bg.mark_timestamp("docaptcha_success"),
          de(t, b, dn),
          (ye = !1),
          CPWbot_bg.show_cpwbot_overlay(t, null, null),
          Wi(t, b),
          (oe = null),
          (be = !1),
          (he.found_interactive = !1),
          (Ce = !0),
          Di(t, _e, ie))
        : (((_ = {}).type = e),
          (_.data = n),
          (_.tabid = t),
          (_.docnum = n.docnum),
          (_.addtime = new Date()),
          null === ci && (ci = []),
          void 0 !== _.docnum && verbose_log(sprintf("[%s][%d] pushed event : %s cmd=%s", t, _.docnum, e, n.cmd)),
          ci.push(_));
    }),
    (this.clear_event_queue = function () {
      ci = [];
    }),
    (this.select_execute = function (e, t, n, _) {
      var i;
    }),
    (this.select = function () {}),
    (this.bagration = function () {
      _e = "Bagration";
    }),
    (this.in_bagration = function () {
      return "Bagration" == _e;
    }),
    (this.get_selenium_tabid = function () {
      return Pi;
    }),
    (this.navigate_to_logout = function (e, t) {
      if (!t) return !1;
      Te = !(_e = "L");
      var n = t.recipe;
      if (!n) return !1;
      var _ = t.aid,
        i = !1,
        o = !1,
        o = de(e, n, an),
        a = (F(k, "Navigate to Logout"), ut(n)),
        r;
      if (a)
        return (
          L("call logout:loadurl with " + a),
          (r = null),
          g_CS_tops && (r = g_CS_tops[e]),
          sendCS(e, { cmd: "loadurl", url: a }, r),
          (me = !0),
          verbose_log("m_in_loadurl set"),
          (b = n),
          (ie = t),
          (Te = !0),
          null
        );
      Ge = !1;
      var a = St(n),
        r,
        l,
        s;
      return (
        a &&
          (verbose_log("click on FN_NAVIGATE_TO_LOGOUT field!"),
          (r = DEFAULT_CLICK_DELAY),
          void 0 !== n.logout_delay && (r = n.logout_delay),
          (Ge = !0),
          verbose_log("now waiting for click_ack L"),
          wn(e, a, r, (l = ue(n))),
          CPWbot_bg.mark_timestamp("wait_for_click_ack_L"),
          (i = null)),
        h_(n) && ((Te = !0), b_(n)) ? null : ((o = o || de(e, n, rn)), !(!1 !== i || !o) || i)
      );
    });
  var Le = 1,
    d = null;
  function Hi() {
    var e = 0,
      t = 0,
      n = 0,
      _ = 0,
      i = 0,
      o = 0,
      a = 0,
      r = 0,
      l = 0,
      s = 0,
      c = 0,
      u = 0,
      d = 0,
      g = 0,
      f = 0,
      p = 0,
      b = 0,
      m = 0,
      v = 0,
      C = 0,
      h = 0,
      N = 0,
      S = 0,
      L = 0,
      E = 0,
      P = 0,
      w = 0,
      I = 0;
  }
  function Vi(e, t) {
    CPWbot_bg.do_milestone(e, Ze, t), ge(e), CPWbot_bg.cpwbot_cs_finish_complete(e);
  }
  function Ji(e) {
    var t;
    CPWbot_bg && (F(F_, e), CPWbot_bg.phone_home(null, null, { severity: "fatal", msg: e }));
  }
  function Bi(e) {
    var t;
    return F(k_, e), CPWbot_bg.phone_home(null, null, { severity: "warning", msg: e });
  }
  function Ki(e, t, n) {
    var _;
    return t && n && null !== e && g_cpw_do_fakeui && ((_e = "FK0"), verbose_log("entered do_logged_out_fake_ui"), (_ = 0)), 0;
  }
  function xi(e, t, n) {
    var _;
    return t && n && null !== e && g_cpw_do_fakeui && ((_e = "FKLL0"), verbose_log("entered do_logged_in_fake_ui"), (_ = 0)), 0;
  }
  function Yi(e, t, n) {}
  function qi(e, t, n) {}
  function zi(e, t, n) {}
  function Xi(e, t, n) {}
  function Zi(e, t, n) {}
  function Qi(e, t, n) {}
  function $i(e, t, n) {}
  function eo(e, t, n) {}
  function to(e, t, n) {}
  function no(e, t) {
    J_(e, t) ? CPWbot_bg.do_milestone(e, q, t) : (CPWbot_bg.do_milestone(e, Qe, t), ge(e));
  }
  function _o(e) {
    return e ? e.symbolic : "";
  }
  function W(e) {
    return (e = e || 100), "undefined" == typeof Math ? 0 : Math.floor(Math.random(e) + 10);
  }
  function io(e, t) {
    return (e = e || 100), !1;
    var n;
  }
  return (
    (this.get_timestamp = function (e) {
      return e ? (d = null === d ? new Hi() : d)[e] : null;
    }),
    (this.get_timestamps = function () {
      return d;
    }),
    (this.mark_timestamp = function (e) {
      (null !== d && "dopwchange" != e) || (d = new Hi());
      var t = new Date().getTime();
      return (d[e] = t), !0;
    }),
    (this.dump_timestamps = function () {
      var e;
      if (d) for (e in d) L(sprintf("[%s] timestamp %s : %d", _o(b), e, d[e]));
      return ji(b, Le), !0;
    }),
    (this.get_last_timestamp = function (e) {
      var t,
        n = "dopwchange";
      if (d) {
        for (t in d) (!e || ("fail" !== t && "finish_complete" != t && "success" != t)) && d[t] > d[n] && (n = t);
        return n;
      }
      return null;
    }),
    (this.broken_hearted = function (e) {
      var e, t, e, n;
      CPWbot_bg &&
        (e != CPWbot_bg.get_session()
          ? F(C, "stale setTimeout - clearTimeout did not work")
          : ((e = CPWbot_bg.get_timestamp("initial_cycle")),
            (t = new Date().getTime()),
            (e = void 0 === e ? null : e) ||
              ("preinit" != _e && _e) ||
              CPWbot_bg.get_okstate() ||
              CPWbot_bg.get_failstate() ||
              CPWbot_bg.in_bagration() ||
              ((e = p), (n = b), CPWbot_bg.do_milestone(e, xe, n, "brokenhearted"), CPWbot_bg.panic("TIMEOUT-brokenhearted"))));
    }),
    (this.new_session = function (e) {
      e = e || "";
      var t = new Date().getTime(),
        n = (null === t && (t = 0), "function" == typeof lp_sha256 ? lp_sha256 : SHA256);
      return (Oi = n(e.toString() + t.toString()));
    }),
    (this.get_session = function () {
      return Oi;
    }),
    (this.clear_session = function () {
      Oi = "";
    }),
    (this.halt = function (e) {
      if (e && void 0 !== e.aid && CPWbot_bg.getpwchangeaid() !== e.aid) return !1;
      null !== CPWbot_bg.docaptcha_si_id && clearInterval(CPWbot_bg.docaptcha_si_id),
        (CPWbot_bg.docaptcha_si_id = null),
        (ki = !0),
        L("Halt Requested");
    }),
    (this.cpw_dialog_minimize_state = 0),
    (this.getpwchangeaid = function () {
      return h;
    }),
    (this.phone_home = function (e, t, n) {
      if (!n) return !1;
      t = t || b;
      var _ = new Date().getTime(),
        i = (_ - CPWbot_bg.get_timestamp("dopwchange")) / 1e3,
        _ = ((i < 0 || isNaN(i)) && (i = 0), (_ - CPWbot_bg.get_timestamp("initial_cycle")) / 1e3),
        o = ((_ < 0 || isNaN(_)) && (_ = 0), !0),
        a = CPWbot_bg.get_last_timestamp(!0),
        r = n.severity || "",
        n = n.msg || "",
        r = sprintf(
          "[%s][%s][R=%s][L=%s][M=%s][%6.2fsec elapsed][%2.1f TF][%6.2fsec TiE]",
          "cpw",
          r,
          t ? _o(t) : "bad-recipe",
          a,
          n,
          i,
          Le,
          _
        );
      return L(r), logger.info(r, {}), !0;
    }),
    (this.warning_phone_home = Bi),
    (this.site_html_url = ""),
    "undefined" != typeof g_iscasper &&
      g_iscasper &&
      ((this.get_validate_timeout = function (e) {
        return l_.apply(this, arguments);
      }),
      (this.get_symbolic = function (e) {
        return _o.apply(this, arguments);
      }),
      (this.get_logout_url = function (e) {
        return ut.apply(this, arguments);
      }),
      (this.get_generate_prefs_from_recipe = function (e) {
        return u_.apply(this, arguments);
      }),
      (this.set_last_overlay_message = function (e) {
        return at.apply(this, arguments);
      }),
      (this.clear_last_overlay_message = function (e) {
        return rt.apply(this, arguments);
      }),
      (this.validate_xpath = function (e) {
        return W_.apply(this, arguments);
      }),
      (this.validate_recipe = G_),
      (this.get_cpw_login_password_field = function (e) {
        return pt.apply(this, arguments);
      }),
      (this.get_cpw_login_username_field = function (e) {
        return bt.apply(this, arguments);
      }),
      (this.get_login_submit_field = function (e) {
        return Et.apply(this, arguments);
      }),
      (this.get_login_reveal_field = function (e) {
        return Pt.apply(this, arguments);
      }),
      (this.replace_constants = function (e) {
        return replace_constants.apply(this, arguments);
      }),
      (this.set_pwchangestate = function (e) {
        return (_e = e), !0;
      }),
      (this.in_wait_for_click = D_),
      (this.submit_login_form = Tn),
      (this.fill_login_form = An),
      (this.clear_wait_for_clicks = U_),
      (this.get_event_queue = function () {
        return ci;
      }),
      (this.reset_private_test_vars = function () {
        ve = be = D = !1;
      }),
      (this.should_click_on_fill = I_),
      (this.should_fill_password_fields_via_keys = A_),
      (this.get_fill_delay = T_),
      (this.random_delay = W),
      (this.random_sleep = io),
      (this.get_cpw_session_timeout = w_),
      (this.fill_login_entry_form = On),
      (this.submit_login_entry_form = kn),
      (this.set_pwchange_validate_desc = function (e) {
        return (re = e), !0;
      }),
      (this.check_recipe_symbols = y_),
      (this.set_in_validate_outer = function () {
        return (ve = be = !0);
      }),
      (this.set_in_validate_inner = function (e, t) {
        (oe = { cmd: "cpwbot_validate_state", desc: t, id: e }), (ae = e), _.set_pwchange_validate_desc(t), null === m && (m = []);
      }),
      (this.get_in_sleep = function () {
        return le;
      }),
      (this.clear_sleeps = function () {
        le = hi = Ci = vi = mi = bi = pi = !1;
      })),
    !0
  );
}
function get_recipe_for_url(e, n) {
  var t = lp_gettld_url(e),
    _ = null,
    i,
    o,
    o = g_isfirefox ? ((i = LP.lpMakeRequest), LP.lp_base) : ((i = lpMakeRequest), base_url);
  i(
    o + "get_recipe.php",
    "url=" + encodeURIComponent(e),
    function (e) {
      if (4 == e.readyState) {
        if (200 == e.status && null != e.responseXML && null != e.responseXML.documentElement) {
          var e = e.responseXML.documentElement.getElementsByTagName("result");
          if (0 < e.length) {
            var e = e[0].getAttribute("recipe"),
              t;
            if ("" != e) return void n(replace_constants(JSON.parse(e)));
            (CPWbatch && CPWbatch.cpw_get_batchjob_state()) || CPWbot_bg.alert("This url is not supported yet"),
              CPWbot_bg.do_milestone(null, 128, null, "no recipe");
          }
        }
        n(null);
      }
    },
    function () {
      n(null);
    }
  );
}
function ping_ack_handler(e, t) {
  var n = t.docnum,
    _ = t.url,
    i = t.id,
    o = t.delta,
    a,
    r = new Date().getTime() - t.timestamp,
    i =
      (debug &&
        L(
          "received ping response from [tabid:" +
            e +
            "][docnum:" +
            n +
            "][id:" +
            i +
            " sent: " +
            o +
            "ms, response: " +
            r +
            "ms docstate=" +
            t.docstate +
            " url=" +
            _
        ),
      getcsinfo(e, n));
  i || (((i = new CS_t()).docnum = n), (i.tabid = e)), (i.url = _), (i.docstate = t.docstate), (i.flags = t.flags), setcsinfo(e, n, i);
}
function ping(e, t) {
  var n = new Date().getTime(),
    _ = null == e ? !0 : !1;
  null == t && (t = "all");
  var i,
    o = ("function" == typeof lp_sha256 ? lp_sha256 : SHA256)(g_username + "" + e + t + n);
  if ((debug && L("sending ping id=" + o), _)) for (e in g_CS) null != e && sendCS(e, { cmd: "ping_req", id: o, timestamp: n }, t);
  else sendCS(e, { cmd: "ping_req", id: o, timestamp: n }, t);
}
function cpwbot_getpwchangestate() {
  return g_cpwbot && CPWbot_bg
    ? "Bagration" == CPWbot_bg.get_pwchangestate()
      ? !0 === CPWbot_bg.get_failstate()
        ? !0 === CPWbot_bg.get_failpwsavedstate()
          ? "FAIL_PW_SAVED"
          : "FAIL"
        : !0 === CPWbot_bg.get_okstate()
        ? "OK"
        : null
      : !0 === CPWbot_bg.get_captchastate()
      ? "CAPTCHA"
      : !0 === CPWbot_bg.get_docaptchastate()
      ? "DOCAPTCHA"
      : !0 === CPWbot_bg.get_brokenheartstate()
      ? "TIMEOUT"
      : "preinit" == CPWbot_bg.get_pwchangestate()
      ? null
      : !0 === CPWbot_bg.get_failstate()
      ? !0 === CPWbot_bg.get_failpwsavedstate()
        ? "FAIL_PW_SAVED"
        : "FAIL"
      : !0 === CPWbot_bg.get_okstate()
      ? "OK"
      : CPWbot_bg.get_pwchangestate()
    : "FAIL";
}
function cpwbot_preinit() {
  CPWbot_bg && CPWbot_bg.preinit();
}
function cpwbot_get_user_debug_messages() {
  if (CPWbot_bg) return CPWbot_bg.get_user_debug_messages();
}
function cpwbot_get_dialog_msg() {
  if (CPWbot_bg) return CPWbot_bg.get_dialog_msg();
}
function cpwbot_halt() {
  if (CPWbot_bg) return CPWbot_bg.halt();
}
function cpwbot_minimize_dialog() {
  CPWbot_bg && (CPWbot_bg.cpw_dialog_minimize_state = 1);
}
function cpwbot_maximize_dialog() {
  CPWbot_bg && (CPWbot_bg.cpw_dialog_minimize_state = 0);
}
function cpwbot_get_minimize_dialog_state() {
  if (CPWbot_bg) return CPWbot_bg.cpw_dialog_minimize_state;
}
