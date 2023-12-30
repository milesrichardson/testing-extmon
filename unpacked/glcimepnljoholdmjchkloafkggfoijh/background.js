// manifest.json V3中 service_worker 不能使用background.html 这里把所有js集中到这里

// 公共方法
// 兼容 setTimeout
async function startAlarm(name, duration, type = "timeout") {
  if (type == "timeout") {
    // when 可以是毫秒值
    await chrome.alarms.create(name, { when: Date.now() + duration });
  } else {
    // periodInMinutes必须是整数
    await chrome.alarms.create(name, { periodInMinutes: duration / 60 / 1000 });
  }
}

// utils/config.js
function get360WebshieldConfig() {
  return {
    ciuvo: {
      enabled: true,
      inject_on_safe: true
    },
    storeconsultant: {
      enabled: true,
      inject_on_safe: true
    },
    stat: {
      dau: {
        res: "UA-102283103-1",
        rate: "10"
      },
      agreement: {
        res: "UA-102283103-1",
        rate: "100"
      },
      shopping_on_off: {
        res: "UA-102283103-1",
        rate: "100"
      },
      shopping_normal: {
        res: "UA-102283103-2",
        rate: "15"
      },
      popup: {
        res: "UA-102283103-4",
        rate: "100"
      }
    },
    stat_ff: {
      dau: {
        res: "UA-102283103-5"
      },
      agreement: {
        res: "UA-102283103-5"
      },
      shopping_on_off: {
        res: "UA-102283103-5"
      },
      shopping_normal: {
        res: "UA-102283103-5"
      },
      popup: {
        res: "UA-102283103-5"
      }
    }
  };
}

// utils/debug.js
function isDebug() {
  return false;
}

function isStatDebug() {
  return false;
}

function consoleLog(msg) {
  if (isDebug()) {
    console.log(msg);
  }
}

// utils/common.js
function getBrowserInfoEx() {
  var browser = {
    version: navigator.appVersion,
    agent: navigator.userAgent,
    appname: navigator.appName,
    fullversion: "" + parseFloat(navigator.appVersion),
    majorversion: parseInt(navigator.appVersion, 10)
  };
  var nameOffset, verOffset, ix;

  // In Opera 15+, the true version is after "OPR/"
  if ((verOffset = browser.agent.indexOf("OPR/")) != -1) {
    browser.appname = "opera";
    browser.fullversion = browser.agent.substring(verOffset + 4);
  }
  // In older Opera, the true version is after "Opera" or after "Version"
  else if ((verOffset = browser.agent.indexOf("Opera")) != -1) {
    browser.appname = "opera";
    browser.fullversion = browser.agent.substring(verOffset + 6);
    if ((verOffset = browser.agent.indexOf("Version")) != -1) browser.fullversion = browser.agent.substring(verOffset + 8);
  } else if ((verOffset = browser.agent.indexOf("YaBrowser/")) != -1) {
    browser.appname = "yandex";
    browser.fullversion = browser.agent.substring(verOffset + 10);
  }
  // In MSIE, the true version is after "MSIE" in userAgent
  else if ((verOffset = browser.agent.indexOf("MSIE")) != -1) {
    browser.appname = "ie";
    browser.fullversion = browser.agent.substring(verOffset + 5);
  }
  // In Chrome, the true version is after "Chrome"
  else if ((verOffset = browser.agent.indexOf("Chrome")) != -1) {
    browser.appname = "chrome";
    if (browser.agent.indexOf("x64") != -1) {
      browser.appname += "64";
    }
    browser.fullversion = browser.agent.substring(verOffset + 7);
  }
  // In Safari, the true version is after "Safari" or after "Version"
  else if ((verOffset = browser.agent.indexOf("Safari")) != -1) {
    browser.appname = "safari";
    browser.fullversion = browser.agent.substring(verOffset + 7);
    if ((verOffset = browser.agent.indexOf("Version")) != -1) browser.fullversion = browser.agent.substring(verOffset + 8);
  }
  // In Firefox, the true version is after "Firefox"
  else if ((verOffset = browser.agent.indexOf("Firefox")) != -1) {
    browser.appname = "firefox";
    browser.fullversion = browser.agent.substring(verOffset + 8);
  }
  // In most other browsers, "name/version" is at the end of userAgent
  else if ((nameOffset = browser.agent.lastIndexOf(" ") + 1) < (verOffset = browser.agent.lastIndexOf("/"))) {
    browser.appname = browser.agent.substring(nameOffset, verOffset);
    browser.fullversion = browser.agent.substring(verOffset + 1);
    if (browser.appname.toLowerCase() == browser.appname.toUpperCase()) {
      browser.appname = navigator.appName;
    }
  }
  // trim the browser.fullversion string at semicolon/space if present
  if ((ix = browser.fullversion.indexOf(";")) != -1) browser.fullversion = browser.fullversion.substring(0, ix);
  if ((ix = browser.fullversion.indexOf(" ")) != -1) browser.fullversion = browser.fullversion.substring(0, ix);

  majorVersion = parseInt("" + browser.fullversion, 10);
  if (isNaN(majorVersion)) {
    browser.fullversion = "" + parseFloat(navigator.appVersion);
    browser.majorversion = parseInt(navigator.appVersion, 10);
  }

  return browser;
}

function getChromeExtUrl() {
  return "https://chrome.google.com/webstore/detail/360-internet-protection/glcimepnljoholdmjchkloafkggfoijh";
}

function getOperaExtUrl() {
  "https://addons.opera.com/" + getUILang().toLowerCase() + "/extensions/details/360-internet-protection";
}

function getYandexExtUrl() {
  return getOperaExtUrl();
}

function getCopyRightDesc() {
  var desc = chrome.i18n.getMessage("copy_right_desc");
  var year = new Date().getFullYear();
  return desc.replace("YEAR", year);
}

function getUILang() {
  var agent = getBrowserInfoEx().appname.toLowerCase();
  if (agent.indexOf("firefox") != -1) {
    var lang = chrome.i18n.getUILanguage();
    return lang.replace("_", "-");
  }
  return chrome.i18n.getUILanguage();
}

// utils/type.js
var Event = {
  refresh_tab: 0,
  create_tab: 1,
  update_tab: 2,
  remove_tab: 3,
  session_beat: 4,
  test_host: 5,
  installed: 6,
  repalce_tab: 7,
  request_tab: 9,
  transType_tab: 10,
  version: 1000,
  icon_status_notify: 1001,
  popup_status_query: 1002,
  popup_status_result: 1003,
  enable_netpay: 1007,
  disable_netpay: 1008,
  netpay_changed: 1009,
  scan_start: 1010,
  scan_end: 1011,
  enter_shopping: 1012,
  risk_processed: 1013,
  site_access_query: 1014,
  site_access_result: 1015,
  antitrack_status_changed: 1016,
  antitrack_host_notify: 1017,
  popup_protect_state: 1018,
  wd_helper: 1019,
  popup_privacy_page_state: 1020
};

var Request = {
  show_toast: "show_toast",
  get_product_id: "get_product_id",
  enable_toolbar_icon: "enable_toolbar_icon",
  enable_toolbar_icon_status: "enable_toolbar_icon_status",
  on_antitrack_inject: "on_antitrack_inject",
  agree_to_privacy_policy: "agree_to_privacy_policy",
  get_compatiable_state: "get_compatiable_state",
  inject_script: "inject_script",
  stat_popup: "stat_popup",
  check_promo_prerequisite: "check_promo_prerequisite",
  promo_prerequisite_ok: "promo_prerequisite_ok",
  store_consultant_accepted: "store_consultant_accepted",
  deal_price_agreement: "deal_price_agreement",
  deal_price_accepted: "deal_price_accepted",
  on_wd_helper_inject: "on_wd_helper_inject",
  on_wd_helper_support: "on_wd_helper_support",
  popup_privacy_page_agree: "popup_privacy_page_agree"
};

var CompatibleState = {
  none: "none",
  base: "base",
  compatible: "compatible",
  upgrade_env: "upgrade_env",
  upgrade_plugin: "upgrade_plugin",
  upgrade_browser: "upgrade_browser",
  enable_siteaccess: "enable_siteaccess",
  unsupported_platform: "unsupported_platform"
};

var ProductId = {
  ts: "ts",
  safe: "safe"
};

var GlovalKey = {
  areacode: "areacode",
  cid: "cid"
};

// utils/pref.js
var Prop = {
  enable_toast: "enable_toast",
  enable_toolbar: "enable_toolbar",
  agree_to_privacy_policy: "agree_to_privacy_policy",
  hide_settings: "hide_settings",
  sovetnik_installed: "sovetnik_installed",
  sovetnik_enabled: "sovetnik_enabled",
  dealprice_installed: "dealprice_installed",
  dealprice_enabled: "dealprice_enabled",
  dealprice_popup_time: "dealprice_popup_time",
  dealprice_popup_count: "dealprice_popup_count",
  next_dau_time: "next_dau_time"
};

function setPref(key, value) {
  // localStorage[key] = value;

  var obj = {};
  obj[key] = value;
  chrome.storage.local.set(obj, function () {
    consoleLog("setPref(" + key + ") = value:" + value);
  });
}

function getPref(key, defaultValue, callback) {
  // return localStorage[key];
  chrome.storage.local.get(key, function (items) {
    if (items != undefined && items[key] != undefined) {
      callback(items[key]);
      consoleLog("getPref(" + key + ") = value:" + items[key]);
    } else {
      callback(defaultValue);
      consoleLog("getPref(" + key + ") = default value:" + defaultValue);
    }
  });
}

/*
 * callback(changedValue) { var newV = changedValue.newValue; var oldV =
 * changedValue.oldValue;}
 */
function registerPrefOnChanged(key, callback) {
  chrome.storage.onChanged.addListener(function (changed, namespace) {
    if (namespace == "local") {
      if (changed[key]) {
        consoleLog("registerPrefOnChanged(" + key + "):" + JSON.stringify(changed[key]));
        callback(changed[key]);
      }
    }
  });
}

function unregisterPrefOnChanged(callback) {
  chrome.storage.onChanged.removeListener(callback);
}

function getGlobalValue(key, callback) {
  // return localStorage[key];
  chrome.storage.local.get(key, function (items) {
    if (items != undefined && items[key] != undefined) {
      callback(items[key]);
      consoleLog("getPref(" + key + ") = value:" + items[key]);
    } else {
      callback(null);
    }
  });
}

function setGlobalValue(key, value) {
  // localStorage[key] = value;
  var obj = {};
  obj[key] = value;
  chrome.storage.local.set(obj, function () {
    consoleLog("setPref(" + key + ") = value:" + value);
  });
}

// utils/product.js
var browserInfo = null;

function isStoreConsultantAvailable(pid) {
  function isLangSupportedForStoreConsultant() {
    if (browserInfo == null) {
      browserInfo = getBrowserInfoEx();
    }
    return false;
  }

  if (pid == ProductId.ts) {
    if (isLangSupportedForStoreConsultant()) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function isCiuvoAvailable(pid) {
  function isLangSupportedForCiuvo() {
    if (browserInfo == null) {
      browserInfo = getBrowserInfoEx();
    }
    return true;
  }

  function getBrowserSuportCuivo() {
    let isBrowserSuportCuivo = true;
    let agent = navigator.userAgent;
    if (agent.indexOf("OPR/") != -1 || agent.indexOf("Opera") != -1 || agent.indexOf("Chrome") != -1) {
      isBrowserSuportCuivo = false;
    }
    if (agent.indexOf("Edg") != -1) {
      isBrowserSuportCuivo = true;
    }
    return isBrowserSuportCuivo;
  }

  if (pid == ProductId.ts) {
    if (isLangSupportedForCiuvo() && getBrowserSuportCuivo()) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// utils/stat.js
var _gaq = _gaq || [];
var chromelike = getBrowserInfoEx().appname.toLowerCase().indexOf("firefox") == -1;
var privacyPolicyChecked = true;

function setPrivacyPolicy(checked) {
  privacyPolicyChecked = checked;
}

function trackPage() {
  if (!privacyPolicyChecked) {
    return;
  }

  if (chromelike) {
    trackChromePage();
  } else {
    trackFirefoxPage();
  }
}

function trackChromePage() {
  var config = Rule.getIns().getStatConfig().getDau();
  var res = config.getRes();
  var rate = config.getRate();
  var page = null;

  if (isStatDebug()) {
    page = "/background_debug.html";
  } else {
    page = "/background.html";
  }

  _gaq.push(["_setAccount", res]);
  _gaq.push(["_setSampleRate", rate]);
  _gaq.push(["_trackPageview", page]);

  consoleLog("[stat] trackPage -> page: " + page + ", res:" + res + ", sample rate:" + rate);
}

function trackFirefoxPage() {
  var config = Rule.getIns().getStatFirefoxConfig().getDau();
  var res = config.getRes();
  var page = null;

  if (isStatDebug()) {
    page = "/background_debug.html";
  } else {
    page = "/background.html";
  }

  GaCollect.getIns().trackPage(res, page);

  consoleLog("[stat] trackPage -> page: " + page + ", res:" + res);
}

var Stat = function () {
  this.params = {};
  this.params["id"] = null;
  this.params["label"] = null;
  this.params["rate"] = "100";
};
Stat.Type = {
  StoreConsultant: "store_consultant",
  Ciuvo: "ciuvo",
  Shopping: "shopping",
  Popup: "popup"
};
Stat.Action = {
  AcceptOffer: "accept_offer",
  DeclineOffer: "decline_offer",
  CancelOffer: "cancel_offer",
  Display: "display"
};
Stat.PromoAction = {
  StoreConsultant: "store_consultant",
  Ciuvo: "ciuvo",
  Normal: "normal"
};
Stat.PromoLabel = {
  On: "on",
  Off: "off",
  DeclineStoreConsultant: "decline_consultant",
  AllowStoreConsultant: "possible_consultant",
  DeclineCiuvo: "decline_ciuvo",
  AllowCiuvo: "possible_ciuvo",
  PendingCiuvo: "pending_ciuvo",
  NeverPopup: "never_pop_up"
};
Stat.PopupAction = {
  Unknown: "unknown",
  Safe: "safe",
  Shopping: "shopping",
  Payment: "payment",
  Risk: "risk",
  Checking: "checking"
};

Stat.prototype.setTrackId = function (id) {
  this.params["id"] = id;
  return this;
};
Stat.prototype.setType = function (type) {
  this.params["type"] = type;
  return this;
};
Stat.prototype.setAction = function (act) {
  this.params["action"] = act;
  return this;
};
Stat.prototype.setLabel = function (label) {
  this.params["label"] = label;
  return this;
};
Stat.prototype.setSampleRate = function (rate) {
  this.params["rate"] = rate;
  return this;
};
Stat.prototype.finish = function () {
  if (!privacyPolicyChecked) {
    return;
  }

  if (this.params["id"] == null) {
    consoleLog("[stat] id null");
    return;
  }

  if (isStatDebug()) {
    this.params["type"] = this.params["type"] + "_" + "debug";
    this.params["label"] = this.params["label"] + "_" + Math.floor(new Date().getTime() / 1000);
  }

  if (chromelike) {
    gaPush(this.params["id"], this.params["rate"], this.params["type"], this.params["action"], this.params["label"]);
  } else {
    gaPushForFirefox(this.params["id"], this.params["type"], this.params["action"], this.params["label"]);
  }

  consoleLog("[stat] finish -> " + JSON.stringify(this.params));
};

function gaPush(resid, rate, type, action, label) {
  _gaq.push(["_setAccount", resid]);
  _gaq.push(["_setSampleRate", rate]);
  _gaq.push(["_trackEvent", type, action, label]);
}

function gaPushForFirefox(resid, type, action, label) {
  GaCollect.getIns().sendEvent(resid, type, action, label);
}

// utils/rule.js
function ActionSwitcher(rule) {
  this.enabled = true;
  this.safewebsiteInjected = true;

  this.isEnabled = function () {
    return this.enabled;
  };

  this.isSafeWebsiteInjected = function () {
    return this.safewebsiteInjected;
  };

  if (rule.enabled != undefined) {
    this.enabled = rule.enabled;
  }

  if (rule.inject_on_safe != undefined) {
    this.safewebsiteInjected = rule.inject_on_safe;
  }
}

function StatRes(rule) {
  this.res = null;
  this.rate = null;

  this.getRes = function () {
    return this.res;
  };

  this.getRate = function () {
    return this.rate;
  };

  if (rule.res != undefined) {
    this.res = rule.res;
  }

  if (rule.rate != undefined) {
    this.rate = rule.rate;
  }
}

function StatConfig(rule) {
  this.dau = new StatRes({});
  this.agreement = new StatRes({});
  this.shoppingOnOff = new StatRes({});
  this.shoppingNormal = new StatRes({});
  this.popup = new StatRes({});

  this.getDau = function () {
    return this.dau;
  };
  this.getAgreement = function () {
    return this.agreement;
  };
  this.getShoppingOnOff = function () {
    return this.shoppingOnOff;
  };
  this.getShoppingNormal = function () {
    return this.shoppingNormal;
  };
  this.getPopup = function () {
    return this.popup;
  };

  if (rule.dau != undefined) {
    this.dau = new StatRes(rule.dau);
  }
  if (rule.agreement != undefined) {
    this.agreement = new StatRes(rule.agreement);
  }
  if (rule.shopping_on_off != undefined) {
    this.shoppingOnOff = new StatRes(rule.shopping_on_off);
  }
  if (rule.shopping_normal != undefined) {
    this.shoppingNormal = new StatRes(rule.shopping_normal);
  }
  if (rule.popup != undefined) {
    this.popup = new StatRes(rule.popup);
  }
}

var Rule = (function () {
  var instance;
  var dynamicSync = false;
  var cacheDirtyTimeOut = 28800;
  var syncTime = 0;
  var ciuvoRule = null;
  var storeconsultantRule = null;
  var statconfig = null;
  var statconfigff = null;

  function getCurTime() {
    return (curTime = Math.floor(new Date().getTime() / 1000));
  }

  function initConfig(config) {
    if (config.ciuvo != undefined) {
      ciuvoRule = new ActionSwitcher(config.ciuvo);
    } else {
      // rule is malformat
      ciuvoRule = new ActionSwitcher({});
    }

    if (config.storeconsultant != undefined) {
      storeconsultantRule = new ActionSwitcher(config.storeconsultant);
    } else {
      // rule is malformat
      storeconsultantRule = new ActionSwitcher({});
    }

    if (config.stat != undefined) {
      statconfig = new StatConfig(config.stat);
    } else {
      // rule is malformat
      statconfig = new StatConfig({});
    }

    if (config.stat_ff != undefined) {
      statconfigff = new StatConfig(config.stat_ff);
    } else {
      // rule is malformat
      statconfigff = new StatConfig({});
    }

    consoleLog("[rule] synced:" + JSON.stringify(config));
  }

  function checkConfig() {
    if (getCurTime() - syncTime >= cacheDirtyTimeOut) {
      fetch("https://static.ts.360.com/browser-ext/internet-protection/config.json")
        .then(function (response) {
          return response.json();
        })
        .then(function (myJson) {
          initConfig(myJson);
          syncTime = getCurTime();
        });
    }
  }

  function init() {
    initConfig(get360WebshieldConfig());

    return {
      getCiuvo: function () {
        checkConfig();
        return ciuvoRule;
      },
      getStoreConsultant: function () {
        checkConfig();
        return storeconsultantRule;
      },
      getStatConfig: function () {
        checkConfig();
        return statconfig;
      },
      getStatFirefoxConfig: function () {
        checkConfig();
        return statconfigff;
      }
    };
  }

  return {
    getIns: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();

// promo/afsrc.js
/** @suppress {duplicate} */
if (!com) var com = {};
if (!com.ciuvo) com.ciuvo = {};

/**
 * Helper object for detecting if the user came from a affiliate source and that
 * the extension should stand down completely. This affiliate sources are
 * usually marked by the "afsrc=1" query parameter, but one might also pass the
 * constructor a list of RegExp objects.
 *
 * NOTE: for Google-Chrome (and other Webkit-derivates) you need to add the
 * "webRequest" permission to the manifest.
 *
 */
com.ciuvo.ASDetector = (function () {
  var TAB_EVENT_EXPIRATION_TIME = 10 * 1000;

  /**
   * @constructor
   */
  var ASDetector = function (blockref) {
    this.pastEvents = {};
    this.listeners = [];
    this.blockref = blockref || [
      new RegExp(".*&afsrc=1|\\?afsrc=1"),
      new RegExp(".*jdoqocy.com"),
      new RegExp(".*tkqlhce.com"),
      new RegExp(".*dpbolvw.net"),
      new RegExp(".*anrdoezrs.net"),
      new RegExp(".*kqzyfj.com"),
      new RegExp(".*linksynergy.com"),
      new RegExp(".*linksynergy.onlineshoes.com"),
      new RegExp(".*linksynergy.walmart.com"),
      new RegExp(".*savings.com"),
      new RegExp(".*affiliate.rakuten.com")
    ];
    this.ciuvo_rex = [new RegExp(".*ciuvo.com"), new RegExp(".*localhost:8002")];
  };

  ASDetector.prototype = {
    /**
     * Add a new navigation event of the tab's main frame.
     *
     * @param tabId
     *            the tabId for this navigation event (required)
     * @param url
     *            the url for this navigation event (required)
     * @param requestId
     *            the request-id if available. It helps recognizing multiple
     *            urls which actually belong to one navigation event because
     *            of redirects. (optional)
     * @param timestamp
     *            the timestamp in ms of the navigation event. It is usefull
     *            for recognizing events which belong together (optional).
     * @param main_page_changed
     *            only used in firefox because there a workaround to recognize main-page changes
     *            is needed
     * @returns true if the current chain of navigation events has been
     *          marked as affiliate source. False otherwise.
     */
    onNavigationEvent: function (tabId, url, requestId, timestamp, main_page_changed) {
      timestamp = timestamp || Date.now();

      var newEvent = true;
      var lastEvent = this.getLastEvent(tabId);

      // try to detect if this is a new navigation event
      if (typeof requestId !== "undefined") {
        if (requestId == lastEvent.requestId) {
          newEvent = false;
        }
      }

      // those damn JS redirects make requestId unreliable
      var delta = timestamp - lastEvent.timestamp;
      if (delta < com.ciuvo.get_afsrc_threshold()) {
        newEvent = false;
      }
      if (lastEvent.isAfsrc) {
        if (main_page_changed !== undefined) {
          if (!main_page_changed) {
            newEvent = false;
          }
        } else if (com.ciuvo.hostname_from_url(url) === lastEvent.hostname) {
          // still on the same event
          newEvent = false;
        }
      }

      // update timestamp in any case
      lastEvent.timestamp = timestamp;

      // create a new event if one has been detected
      if (newEvent) {
        lastEvent.isAfsrc = false;
        lastEvent.isFromCiuvo = false;
        lastEvent.requestId = requestId;
      }
      lastEvent.hostname = com.ciuvo.hostname_from_url(url);
      // detect that the url is from a ciuvo extension
      for (var i = 0; i < this.ciuvo_rex.length; ++i) {
        if (this.ciuvo_rex[i].exec(url)) {
          lastEvent.isFromCiuvo = true;
        }
      }
      if (lastEvent.isFromCiuvo) {
        // ignore afsrc if ciuvo itself triggered the coupon-click
        lastEvent.isAfsrc = false;
      } else {
        // check if this is a event that marks an affiliate source
        for (var i = 0; i < this.blockref.length; i++) {
          if (this.blockref[i].exec(url)) {
            lastEvent.isAfsrc = true;
          }
        }
      }

      return lastEvent.isAfsrc;
    },

    /**
     * be nice, clean up a bit after ourselves
     */
    cleanupExpiredTabs: function () {
      now = Date.now();
      for (var tabId in this.pastEvents) {
        if (this.pastEvents.hasOwnProperty(tabId)) {
          var event = this.pastEvents[tabId];
          if (now - event.timestamp > TAB_EVENT_EXPIRATION_TIME) {
            delete this.pastEvents[tabId];
          }
        }
      }
    },

    /**
     * @param tabId
     *            the tab's id
     * @returns the last navigation event or an empty one
     */
    getLastEvent: function (tabId) {
      var lastEvent = this.pastEvents[tabId];
      if (typeof lastEvent === "undefined") {
        lastEvent = {
          isAfsrc: false,
          requestId: undefined,
          isFromCiuvo: false,
          timestamp: 0,
          hostname: undefined
        };
        this.pastEvents[tabId] = lastEvent;
      }
      return lastEvent;
    },

    /**
     * @param tabId the id of the tab to be checked for the affiliate source
     * @param cleanup will clear the affiliate source flag since displays are allowed
     *          on subsequent requests
     * @returns true if the current chain of navigation events has been
     *          marked as affiliate source. False otherwise.
     */
    isAffiliateSource: function (tabId, cleanup) {
      var isAfsrc = this.getLastEvent(tabId).isAfsrc;
      if (cleanup) {
        delete this.pastEvents[tabId];
      } else {
        this.pastEvents[tabId].timestamp = 0;
        this.pastEvents[tabId].requestId = undefined;
      }

      return isAfsrc;
    }
  };

  return ASDetector;
})();

// promo/afsrc_wex.js
(function () {
  com.ciuvo.asdetector = new com.ciuvo.ASDetector();

  function onSendHeaders(details) {
    if (details.type === "main_frame") {
      com.ciuvo.asdetector.onNavigationEvent(details.tabId, details.url, details.requestId, details.timeStamp);
    }
  }

  chrome.webRequest.onSendHeaders.addListener(
    onSendHeaders,
    {
      urls: ["http://*/*", "https://*/*"]
    },
    ["requestHeaders"]
  );
})();

com.ciuvo.hostname_from_url = function (url) {
  return new URL(url).hostname;
};

com.ciuvo.get_afsrc_threshold = (function () {
  return 800;
})(
  // promo/ciuvo-whitelist.js
  /* Ciuvo Addon SDK 2.1.4 | (c) 2011-2017 Ciuvo GmbH CIUVO CONFIDENTIAL All Rights Reserved.
NOTICE: All information contained herein is, and remains the property of  Ciuvo GmbH and its suppliers, if any. The intellectual and technical  concepts contained herein are proprietary to Ciuvo GmbH and its suppliers  and may be covered by U.S. and Foreign Patents, patents in process, and are  protected by trade secret or copyright law. Dissemination of this information  or reproduction of this material is strictly forbidden unless prior written  permission is obtained from Ciuvo GmbH.
Copyright 2011-2017 Ciuvo GmbH. Contact support@ciuvo.com for more details.

Includes jQuery | (c) jQuery Foundation and other contributors | https://jquery.org/
Includes requirejs/almond | (c) jQuery Foundation and other contributors  | https://github.com/requirejs/almond/blob/master/LICENSE
Includes json2.js | http://www.JSON.org/js.html */
  (function (root, factory) {
    /**
    if (typeof define === "function") {
        define(factory);
    } else if (typeof exports === "object") {
        module.exports = factory();
    } else {
    */
    root.ciuvoSDK = factory();
    // }
  })(this, function () {
    var requirejs, require, define;
    (function (undef) {
      var main,
        req,
        makeMap,
        handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

      function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
      }

      /**
       * Given a relative module name, like ./something, normalize it to
       * a real name that can be mapped to a path.
       * @param {String} name the relative name
       * @param {String} baseName a real name that the name arg is relative
       * to.
       * @returns {String} normalized name
       */
      function normalize(name, baseName) {
        var nameParts,
          nameSegment,
          mapValue,
          foundMap,
          lastIndex,
          foundI,
          foundStarMap,
          starI,
          i,
          j,
          part,
          normalizedBaseParts,
          baseParts = baseName && baseName.split("/"),
          map = config.map,
          starMap = (map && map["*"]) || {};

        //Adjust any relative paths.
        if (name) {
          name = name.split("/");
          lastIndex = name.length - 1;

          // If wanting node ID compatibility, strip .js from end
          // of IDs. Have to do this here, and not in nameToUrl
          // because node allows either .js or non .js to map
          // to same file.
          if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
            name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, "");
          }

          // Starts with a '.' so need the baseName
          if (name[0].charAt(0) === "." && baseParts) {
            //Convert baseName to array, and lop off the last part,
            //so that . matches that 'directory' and not name of the baseName's
            //module. For instance, baseName of 'one/two/three', maps to
            //'one/two/three.js', but we want the directory, 'one/two' for
            //this normalization.
            normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
            name = normalizedBaseParts.concat(name);
          }

          //start trimDots
          for (i = 0; i < name.length; i++) {
            part = name[i];
            if (part === ".") {
              name.splice(i, 1);
              i -= 1;
            } else if (part === "..") {
              // If at the start, or previous value is still ..,
              // keep them so that when converted to a path it may
              // still work when converted to a path, even though
              // as an ID it is less than ideal. In larger point
              // releases, may be better to just kick out an error.
              if (i === 0 || (i === 1 && name[2] === "..") || name[i - 1] === "..") {
                continue;
              } else if (i > 0) {
                name.splice(i - 1, 2);
                i -= 2;
              }
            }
          }
          //end trimDots

          name = name.join("/");
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
          nameParts = name.split("/");

          for (i = nameParts.length; i > 0; i -= 1) {
            nameSegment = nameParts.slice(0, i).join("/");

            if (baseParts) {
              //Find the longest baseName segment match in the config.
              //So, do joins on the biggest to smallest lengths of baseParts.
              for (j = baseParts.length; j > 0; j -= 1) {
                mapValue = map[baseParts.slice(0, j).join("/")];

                //baseName segment has  config, find if it has one for
                //this name.
                if (mapValue) {
                  mapValue = mapValue[nameSegment];
                  if (mapValue) {
                    //Match, update name to the new value.
                    foundMap = mapValue;
                    foundI = i;
                    break;
                  }
                }
              }
            }

            if (foundMap) {
              break;
            }

            //Check for a star map match, but just hold on to it,
            //if there is a shorter segment match later in a matching
            //config, then favor over this star map.
            if (!foundStarMap && starMap && starMap[nameSegment]) {
              foundStarMap = starMap[nameSegment];
              starI = i;
            }
          }

          if (!foundMap && foundStarMap) {
            foundMap = foundStarMap;
            foundI = starI;
          }

          if (foundMap) {
            nameParts.splice(0, foundI, foundMap);
            name = nameParts.join("/");
          }
        }

        return name;
      }

      function makeRequire(relName, forceSync) {
        return function () {
          //A version of a require function that passes a moduleName
          //value for items that may need to
          //look up paths relative to the moduleName
          var args = aps.call(arguments, 0);

          //If first arg is not require('string'), and there is only
          //one arg, it is the array form without a callback. Insert
          //a null so that the following concat is correct.
          if (typeof args[0] !== "string" && args.length === 1) {
            args.push(null);
          }
          return req.apply(undef, args.concat([relName, forceSync]));
        };
      }

      function makeNormalize(relName) {
        return function (name) {
          return normalize(name, relName);
        };
      }

      function makeLoad(depName) {
        return function (value) {
          defined[depName] = value;
        };
      }

      function callDep(name) {
        if (hasProp(waiting, name)) {
          var args = waiting[name];
          delete waiting[name];
          defining[name] = true;
          main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
          throw new Error("No " + name);
        }
        return defined[name];
      }

      //Turns a plugin!resource to [plugin, resource]
      //with the plugin being undefined if the name
      //did not have a plugin prefix.
      function splitPrefix(name) {
        var prefix,
          index = name ? name.indexOf("!") : -1;
        if (index > -1) {
          prefix = name.substring(0, index);
          name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
      }

      /**
       * Makes a name map, normalizing the name, and using a plugin
       * for normalization if necessary. Grabs a ref to plugin
       * too, as an optimization.
       */
      makeMap = function (name, relName) {
        var plugin,
          parts = splitPrefix(name),
          prefix = parts[0];

        name = parts[1];

        if (prefix) {
          prefix = normalize(prefix, relName);
          plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
          if (plugin && plugin.normalize) {
            name = plugin.normalize(name, makeNormalize(relName));
          } else {
            name = normalize(name, relName);
          }
        } else {
          name = normalize(name, relName);
          parts = splitPrefix(name);
          prefix = parts[0];
          name = parts[1];
          if (prefix) {
            plugin = callDep(prefix);
          }
        }

        //Using ridiculous property names for space reasons
        return {
          f: prefix ? prefix + "!" + name : name, //fullName
          n: name,
          pr: prefix,
          p: plugin
        };
      };

      function makeConfig(name) {
        return function () {
          return (config && config.config && config.config[name]) || {};
        };
      }

      handlers = {
        require: function (name) {
          return makeRequire(name);
        },
        exports: function (name) {
          var e = defined[name];
          if (typeof e !== "undefined") {
            return e;
          } else {
            return (defined[name] = {});
          }
        },
        module: function (name) {
          return {
            id: name,
            uri: "",
            exports: defined[name],
            config: makeConfig(name)
          };
        }
      };

      main = function (name, deps, callback, relName) {
        var cjsModule,
          depName,
          ret,
          map,
          i,
          args = [],
          callbackType = typeof callback,
          usingExports;

        //Use name if no relName
        relName = relName || name;

        //Call the callback to define the module, if necessary.
        if (callbackType === "undefined" || callbackType === "function") {
          //Pull out the defined dependencies and pass the ordered
          //values to the callback.
          //Default to [require, exports, module] if no deps
          deps = !deps.length && callback.length ? ["require", "exports", "module"] : deps;
          for (i = 0; i < deps.length; i += 1) {
            map = makeMap(deps[i], relName);
            depName = map.f;

            //Fast path CommonJS standard dependencies.
            if (depName === "require") {
              args[i] = handlers.require(name);
            } else if (depName === "exports") {
              //CommonJS module spec 1.1
              args[i] = handlers.exports(name);
              usingExports = true;
            } else if (depName === "module") {
              //CommonJS module spec 1.1
              cjsModule = args[i] = handlers.module(name);
            } else if (hasProp(defined, depName) || hasProp(waiting, depName) || hasProp(defining, depName)) {
              args[i] = callDep(depName);
            } else if (map.p) {
              map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
              args[i] = defined[depName];
            } else {
              throw new Error(name + " missing " + depName);
            }
          }

          ret = callback ? callback.apply(defined[name], args) : undefined;

          if (name) {
            //If setting exports via "module" is in play,
            //favor that over return value and exports. After that,
            //favor a non-undefined return value over exports use.
            if (cjsModule && cjsModule.exports !== undef && cjsModule.exports !== defined[name]) {
              defined[name] = cjsModule.exports;
            } else if (ret !== undef || !usingExports) {
              //Use the return value from the function.
              defined[name] = ret;
            }
          }
        } else if (name) {
          //May just be an object definition for the module. Only
          //worry about defining if have a module name.
          defined[name] = callback;
        }
      };

      requirejs =
        require =
        req =
          function (deps, callback, relName, forceSync, alt) {
            if (typeof deps === "string") {
              if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
              }
              //Just return the module wanted. In this scenario, the
              //deps arg is the module name, and second arg (if passed)
              //is just the relName.
              //Normalize module name, if it contains . or ..
              return callDep(makeMap(deps, callback).f);
            } else if (!deps.splice) {
              //deps is a config object, not an array.
              config = deps;
              if (config.deps) {
                req(config.deps, config.callback);
              }
              if (!callback) {
                return;
              }

              if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
              } else {
                deps = undef;
              }
            }

            //Support require(['a'])
            callback = callback || function () {};

            //If relName is a function, it is an errback handler,
            //so remove it.
            if (typeof relName === "function") {
              relName = forceSync;
              forceSync = alt;
            }

            //Simulate async callback;
            if (forceSync) {
              main(undef, deps, callback, relName);
            } else {
              startAlarm("timer8", 4);
              chrome.alarms.onAlarm.addListener(() => {
                main(undef, deps, callback, relName);
                chrome.alarms.clear("timer8");
              });
            }

            return req;
          };

      /**
       * Just drops the config on the floor, but returns req in case
       * the config return value is used.
       */
      req.config = function (cfg) {
        return req(cfg);
      };

      /**
       * Expose module registry for debugging and tooling
       */
      requirejs._defined = defined;

      define = function (name, deps, callback) {
        if (typeof name !== "string") {
          throw new Error("See almond README: incorrect module build, no module name");
        }

        //This module may not have dependencies
        if (!deps.splice) {
          //deps is not an array, so probably means
          //an object literal or factory function for
          //the value. Adjust args.
          callback = deps;
          deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
          waiting[name] = [name, deps, callback];
        }
      };

      define.amd = {
        jQuery: true
      };
    })();

    define("constants", {
      version: "2.1.4",
      base_url: "https://api.ciuvo.com/api/",
      media_host_url: "https://ciuvo.com/",
      get_url: function (name, settings) {
        switch (name) {
          case "api":
            return settings.base_url || this.base_url;
          case "storage":
            return (settings.media_host_url || this.media_host_url) + "ciuvo/globalstorage";
          case "bundle":
            return (settings.media_host_url || this.media_host_url) + "ciuvo/templates/";
          case "media":
            return settings.media_host_url || this.media_host_url;
          case "analyze":
            return (settings.base_url || this.base_url) + "analyze";
          case "voucher":
            return (settings.base_url || this.base_url) + "voucher";
          case "whitelist":
            return (settings.base_url || this.base_url) + "whitelist";
          default:
            throw "invalid url specifier";
        }
      }
    });

    /*
     * Copyright 2011-2015 Ciuvo GmbH. All rights reserved.
     * This file is subject to the terms and conditions defined in
     * file 'LICENSE', which is part of this source code package.
     */

    // Important: import list needs to be empty, otherwise debug will be added automatically.
    define("request", [], function () {
      var IE_SEND_TIMEOUT = 200,
        TYPE_XDR = "XDR",
        TYPE_XHR = "XHR";
      var AjaxRequest = function (method, url, params) {
        this.method = method;
        this.url = url;
        this.requestTimer = undefined;
        this.type = TYPE_XHR;
        // 用到 AjaxRequest 类的代码已修改
        this.rq = new window.XMLHttpRequest();

        if ("withCredentials" in this.rq) {
          // pass
        } else if (typeof window.XDomainRequest !== "undefined") {
          this.type = TYPE_XDR;
          this.rq = new window.XDomainRequest();
          this.rq.readyState = 1;
        }

        if (typeof params === "object") {
          var seperator = this.url.indexOf("?") === -1 ? "?" : "&";
          for (var key in params) {
            if (typeof params[key] !== "undefined") {
              this.url += seperator + key + "=" + encodeURIComponent(params[key]);
              seperator = "&";
            }
          }
        }

        this.rq.open(method, this.url, true);

        if (this.type === TYPE_XDR) {
          // IE XDR abort fix: Initialize event handlers with noops
          // @see http://social.msdn.microsoft.com/Forums/en-US/iewebdevelopment/thread/30ef3add-767c-4436-b8a9-f1ca19b4812e/
          this.rq.onprogress = function () {};
          this.rq.ontimeout = function () {};
          this.rq.onerror = function () {};
          this.rq.onload = function () {};
          this.rq.timeout = 0;
        }
      };

      AjaxRequest.prototype = {
        wrapCallback: function (callback) {
          var self = this;
          return function (result) {
            self.clearTimeout();
            callback(self.rq, result);
          };
        },

        /**
         * Sets the method to be called when the readystate changes.
         * @param callback
         */
        onReadyStateChange: function (callback) {
          if (this.type === TYPE_XDR) {
            this.rq.readyState = 3;
            this.rq.status = 200;
            this.rq.onload = this.wrapCallback(callback);
          } else {
            this.rq.onreadystatechange = this.wrapCallback(callback);
          }
        },

        /**
         * Sets the method to be called when the request has loaded.
         * @param callback
         */
        onLoad: function (callback) {
          if (this.type === TYPE_XDR) {
            this.rq.readyState = 3;
            this.rq.status = 200;
          }
          this.rq.onload = this.wrapCallback(callback);
        },

        /**
         * Sets the method to be called when the request has loaded.
         * @param callback
         */
        onError: function (callback) {
          if (this.type === TYPE_XDR) {
            this.rq.readyState = 3;
            this.rq.status = 500;
          }
          this.rq.onerror = this.wrapCallback(callback);
        },

        /**
         * Sets a header value for the request object.
         * @param header
         * @param value
         */
        setHeader: function (header, value) {
          if ("setRequestHeader" in this.rq) {
            this.rq.setRequestHeader(header, value);
          }
        },

        setTimeout: function (timeout, callback) {
          this.timeout = timeout;
          this.timeoutCallback = callback;
        },

        abort: function () {
          if (this.rq) {
            this.rq.abort();
          }
        },

        setupTimeoutTimer: function (timeout) {
          // Check if a timeout has been configured and setup hooks
          if (typeof timeout === "number") {
            var self = this;
            startAlarm("timer9", timeout);
            chrome.alarms.onAlarm.addListener(() => {
              self.rq.abort();
              if (typeof self.timeoutCallback === "function") {
                self.timeoutCallback();
              }
              chrome.alarms.clear("timer9");
            });
          }
        },

        clearTimeout: function () {
          // clearTimeout(this.requestTimer);
          this.requestTimer = undefined;
        },

        /**
         * Submits the request.
         * @param data
         */
        send: function (data) {
          var self = this;

          this.setupTimeoutTimer(this.timeout);

          // IE needs some time to get started...
          // TODO: verify that this is still required for IE.
          if (this.type === TYPE_XDR) {
            // Do not unwrap .send method.
            // Required to run on a separate thread
            startAlarm("timer10", IE_SEND_TIMEOUT);
            chrome.alarms.onAlarm.addListener(() => {
              self.rq.send(data);
              chrome.alarms.clear("timer10");
            });
          } else {
            this.rq.send(data);
          }
        }
      };

      return {
        AjaxRequest: AjaxRequest
      };
    });
    define("utils", [], function () {
      /**
       * Utility that returns a comparison function depending on
       * the type passed.
       */
      function default_cmp(a, b) {
        if (a === b) {
          return 0;
        }
        return a < b ? -1 : 1;
      }

      function getCmpFunc(primer, reverse) {
        var cmp = default_cmp;
        if (primer) {
          cmp = function (a, b) {
            return default_cmp(primer(a), primer(b));
          };
        }
        if (reverse) {
          return function (a, b) {
            return -1 * cmp(a, b);
          };
        }
        return cmp;
      }

      /**
       * Create and return a "version 4" RFC-4122 UUID string.
       *
       * randomUUID.js - Version 1.0
       *
       * Copyright 2008, Robert Kieffer
       *
       * This software is made available under the terms of the Open Software
       * License v3.0
       * (available here: http://www.opensource.org/licenses/osl-3.0.php )
       *
       * The latest version of this file can be found at:
       * http://www.broofa.com/Tools/randomUUID.js
       *
       * For more information, or to comment on this, please go to:
       * http://www.broofa.com/blog/?p=151
       */
      function generateRandomUUID() {
        var s = [],
          itoh = "0123456789ABCDEF";

        // Make array of random hex digits. The UUID only has 32 digits in it,
        // but we allocate an extra items to make room for the '-'s we'll be
        // inserting.
        for (var i = 0; i < 36; i++) {
          s[i] = Math.floor(Math.random() * 0x10);
        }

        // Conform to RFC-4122, section 4.4
        s[14] = 4; // Set 4 high bits of time_high field to version
        s[19] = (s[19] & 0x3) | 0x8; // Specify 2 high bits of clock sequence

        // Convert to hex chars
        for (i = 0; i < 36; i++) {
          s[i] = itoh[s[i]];
        }

        // Insert '-'s
        s[8] = s[13] = s[18] = s[23] = "-";
        return s.join("");
      }

      function isEmptyObject(obj) {
        for (var prop in obj) {
          if (obj.hasOwnProperty(prop)) return false;
        }

        return JSON.stringify(obj) === JSON.stringify({});
      }

      return {
        /**
         * Returns a stripped version of the passed URL that doesn't contain the URI.
         * @param url
         * @returns {*}
         */
        getHostname: function (url) {
          return url.match(/^(https?:\/\/.*?(?::\d+)?\/)/)[1];
        },

        sort: function (arr) {
          // Create field comparator functions
          var fields = [],
            field,
            name,
            cmp;
          for (var i = 1; i < arguments.length; i++) {
            field = arguments[i];
            if (typeof field === "string") {
              name = field;
              cmp = default_cmp;
            } else {
              name = field.name;
              cmp = getCmpFunc(field.primer, field.reverse);
            }
            fields.push({ name: name, cmp: cmp });
          }

          // Create final comparison function
          var compare = function (A, B) {
            var result = 0;
            for (var i = 0; i < fields.length; i++) {
              var field = fields[i];
              if (typeof A[field.name] === "undefined") {
                continue;
              }
              result = field.cmp(A[field.name], B[field.name]);
              if (result !== 0) {
                break;
              }
            }
            return result;
          };
          arr.sort(compare);
        },

        makeRandomString: function (length) {
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

          for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
          }

          return text;
        },

        settings_sanity_check: function (settings) {
          if (typeof settings !== "object") {
            throw "settings must be object";
          }

          if (!settings.tag) {
            throw "settings.tag is mandatory";
          }

          if (settings.url === "about:blank") {
            settings.url = undefined;
          }
        },

        generateRandomUUID: generateRandomUUID,

        isEmptyObject: isEmptyObject
      };
    });
    /**
     *
     */
    define("whitelist", ["constants", "request", "utils"], function (constants, request, utils) {
      var Whitelist = function (settings) {
        utils.settings_sanity_check(settings);
        this.settings = settings;
        this.partner_tag = this.settings.tag;
        this.whitelist_url = constants.get_url("whitelist", settings);
      };

      Whitelist.prototype = {
        /**
         * @param url
         *         the url to be checked if it is whitelisted
         * @param callback
         *         a function to be invoked if the url is whitelisted
         * @param err_callback
         *         a function to invoed it the url is not whitelisted or the check fails.
         */
        isWhitelisted: function (url, callback, errback) {
          if (typeof callback !== "function") {
            throw "callback must be function";
          }

          if (typeof errback !== "function") {
            throw "errback must be function";
          }

          if (typeof url !== "string") {
            throw "url must be a valid string";
          }

          var whitelist = this.cached_whitelist;
          if (typeof whitelist !== "undefined" && whitelist.length) {
            this._isWhitelisted(url, whitelist, callback, errback);
          } else {
            var self = this;
            this._loadWhitelist(function (whitelist) {
              self.cached_whitelist = whitelist;
              self._isWhitelisted(url, whitelist, callback, errback);
            }, errback);
          }
        },

        /**
         *
         */
        updateSettings: function (settings, data) {
          var update_keys = ["media_url", "event_url", "toolbar_template", "partner_tag"];
          var updated_keys = [];
          for (var i = 0; i < update_keys.length; i++) {
            var key = update_keys[i];
            if (data.hasOwnProperty(key) && data[key] !== com.ciuvo.setting(key)) {
              settings[key] = data[key];
              updated_keys.push(key);
            }
          }
          return updated_keys;
        },

        /**
         * @param url
         *         the url to be checked if it is whitelisted
         * @param whitelist
         *         the loaded whitelist
         * @param callback
         *         a function to be invoked if the url is whitelisted
         * @param err_callback
         *         a function to invoed it the url is not whitelisted or the check fails.
         */
        _isWhitelisted: function (url, whitelist, callback, errback) {
          if (this._urlInList(url, whitelist)) {
            callback();
          } else {
            errback();
          }
        },

        /**
         * @param callback
         *
         * @param errback
         *
         */
        _loadWhitelist: function (callback, errback) {
          var self = this;
          var url =
            this.whitelist_url +
            "?o=lcs" +
            "&v=" +
            encodeURIComponent(constants.version) +
            "&uuid=" +
            encodeURIComponent(this.settings.uuid) +
            "&tag=" +
            encodeURIComponent(this.partner_tag) +
            "&campaign=" +
            encodeURIComponent(this.settings.campaign);

          if (this.settings["com.ciuvo." + this.partner_tag + "-settings"]) {
            var get_settings = JSON.parse(this.settings["com.ciuvo.ciuvo-settings"]);
            if (typeof get_settings !== "undefined") {
              url += "&cfg=" + encodeURIComponent(get_settings);
            }
          }
          fetch(url)
            .then(function (res) {
              return res.json();
            })
            .then((res) => {
              function _parseList(list) {
                var target = [];
                if (typeof list === "undefined") {
                  return target;
                }
                for (var i = 0, len = list.length; i < len; i++) {
                  var reg = new RegExp(list[i]);
                  target.push(reg);
                }
                return target;
              }
              function updateSettings(settings, data) {
                var update_keys = ["media_url", "event_url", "toolbar_template", "partner_tag"];
                var updated_keys = [];
                for (var i = 0; i < update_keys.length; i++) {
                  var key = update_keys[i];
                  if (data.hasOwnProperty(key) && data[key] !== com.ciuvo.setting(key)) {
                    settings[key] = data[key];
                    updated_keys.push(key);
                  }
                }
                return updated_keys;
              }
              var data = res;
              var whitelist = data["com.ciuvo.lcs"] || _parseList(data["com.ciuvo.whitelist"]);
              updateSettings(self.settings, data);
              callback(whitelist);
            })
            .catch((e) => {
              errback(e);
            });
        },

        _parseList: function (list) {
          var target = [];
          if (typeof list === "undefined") {
            return target;
          }
          for (var i = 0, len = list.length; i < len; i++) {
            var reg = new RegExp(list[i]);
            target.push(reg);
          }
          return target;
        },

        _urlInList: function (url, urllist) {
          // iterate through all whitelist nodes
          var hostname = url.match(/^(https?:\/\/.*?\/)/)[1].toLowerCase();
          for (var i = 0, len = urllist.length; i < len; i++) {
            if (hostname.indexOf(urllist[i]) > -1) {
              return true;
            }
          }
          return false;
        }
      };

      return {
        Whitelist: Whitelist
      };
    });

    /**
     * The main module that defines the public interface for Ciuvo SDK.
     */
    define("ciuvoSDK", ["constants"], function (constants) {
      var ciuvoSDK = { version: constants.version };
      require(["whitelist"]);
      ciuvoSDK.Whitelist = require("whitelist").Whitelist;
      return ciuvoSDK;
    });
    // wrap-end.frag.js
    // change "my-lib" to your 'entry-point' module name
    return require("ciuvoSDK");
  })
);

// promo/ciuvo-background.js
/*
 * Copyright 2016 Ciuvo GmbH. All rights reserved.
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 */
function initCiuvoSettings(CONFIG) {
  var whitelistAPI = (whitelist = new ciuvoSDK.Whitelist(CONFIG));

  var random_marker =
    "_csdk_" +
    Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 10);

  /**
   *
   */
  function getContentScript(settings) {
    return (
      "(function(document) {\n" +
      "var ciuvoSettings = " +
      JSON.stringify(settings) +
      ";\n" +
      "if (!window." +
      random_marker +
      ") {\n" +
      "      window." +
      random_marker +
      " = true;\n" +
      "      (new ciuvoSDK.ContentScript(document, ciuvoSettings)).run();\n" +
      "}\n" +
      "})(document);"
    );
  }

  /**
   * Injects the ciuvo-contentscript into the webpage and sends a message to the contentscript,
   * ordering it to run the ciuvoSDK.contentscript.
   * @param the id of the tab to inject into
   */
  function injectContentScript(tabId, settings) {
    consoleLog("Whitelisted, injecting.");
    var details_ciuvo = { file: "promo/ciuvo-contentscript.js", runAt: "document_start" },
      details_my_cs = { code: getContentScript(settings), runAt: "document_end" };

    // injects the ciuvo-contentscript.min.js and afterwards sends the message
    // chrome.tabs.executeScript(tabId, details_ciuvo, function(result) {
    //     if (result) {
    //         chrome.tabs.executeScript(tabId, details_my_cs, function(result) {
    //             consoleLog("Injected: " + result);
    //         });
    //     }
    // });

    chrome.scripting.executeScript(
      {
        target: {
          tabId: tabId
        },
        files: ["promo/ciuvo-contentscript.js"]
      }.then((res) => {
        res && getContentScript(settings);
      })
    );
  }

  /**
   * Does Whitelist check, and if it passes, ciuvo's contentscript will be injected.
   **/
  function injectIfWhitelisted(tabId, url) {
    consoleLog("Running whitelist check for " + url);
    var settings = CONFIG,
      success_cb = function () {
        if (com.ciuvo.asdetector.isAffiliateSource(tabId, false)) {
          consoleLog("afsrc=1 detected, standing down");
        } else {
          injectContentScript(tabId, settings);
        }
      },
      error_cb = function (error) {
        if (typeof error !== "undefined") {
          consoleLog("Whitelist check failed:" + error);
        } else {
          consoleLog("URL is not whitelisted.");
        }
      };
    whitelistAPI.isWhitelisted(url, success_cb, error_cb);
  }

  /**
   * Listen for tab url updates
   */
  /*chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
        if (typeof changeInfo.status !== 'undefined' 
            && changeInfo.status === 'loading'
            && typeof tab.url !== 'undefined'
            && tab.url.startsWith('http')) {
            consoleLog("Injecting after updated..");
            injectIfWhitelisted(tabId, tab.url);
        }
    });*/

  /**
   * Listen for tab updates of instant pages
   */
  /*chrome.webNavigation.onTabReplaced.addListener
    chrome.tabs.onReplaced.addListener(function (addedTabId, removedTabId) {
        chrome.tabs.get(addedTabId, function(tab) {
            if (tab.id && tab.url) {
                consoleLog("Injecting after replaced..");
                injectIfWhitelisted(tab.id, tab.url);
            }
        });
    });*/

  return injectIfWhitelisted;
}

function overrideUserAgent(event) {
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  function plugin_convert(plugin_list, randstr, prePlugins) {
    if (randstr.length > 1) {
      randstr = randstr.substr(1, randstr.length - 1);
    }
    var plugins = [];
    try {
      if (plugin_list != undefined && plugin_list != null) {
        for (var i = 0; i < prePlugins.length; i++) {
          plugins.push({
            name: prePlugins[i].name,
            description: prePlugins[i].description,
            filename: prePlugins[i].filename,
            0: {
              type: prePlugins[i][0].type,
              suffixes: prePlugins[i][0].suffixes,
              description: prePlugins[i][0].description
            }
          });
        }
        for (var j = 0; j < plugin_list.length; j++) {
          plugins.push({
            name: plugin_list[j] + randstr,
            description: randstr,
            filename: randstr,
            0: {
              type: "0",
              suffixes: "",
              description: ""
            }
          });
        }
      }
    } catch (e) {
      plugins = [];
    }
    plugins = shuffle(plugins);
    return JSON.stringify(plugins);
  }

  event = JSON.parse(event);
  if ("object" != typeof event || event[0] === false) return;
  var userAgent = navigator.userAgent + "/" + event[1];
  var prePlugins = navigator.plugins;
  Object.defineProperty(navigator, "plugins", {
    get: function () {
      return plugin_convert(event[2], event[1], prePlugins);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(navigator, "userAgent", {
    get: function () {
      return userAgent;
    },
    configurable: true
  });
}

function inject360Func() {
  function wdHelper(func, parameter, callback) {
    let requestId = new Date().getTime();
    return new Promise((resolve) => {
      function t(event) {
        if (event.data.type && event.data.type == "wd_extension_recv" && event.data.requestId == requestId) {
          window.removeEventListener("message", t);
          ret = { ret: event.data.ret, err: event.data.err };
          if (typeof callback == "function") {
            callback(ret);
          } else {
            resolve(ret);
          }
        }
      }
      window.addEventListener("message", t, false);
      window.postMessage({ type: "wd_extension", requestId: requestId, func: func, parameter: parameter }, "*");
      if (typeof callback == "undefined") {
        setTimeout(() => {
          window.removeEventListener("message", t);
          resolve({ ret: null, err: 1 });
        }, 1000 * 2);
      }
    });
  }
  window.wdHelper = wdHelper;
}

// antitrack/headers.js
("use strict");
chrome.webRequest.onBeforeSendHeaders.addListener(
  function (e) {
    if (AntiTrack.settings.isEnabled()) {
      consoleLog("onBeforeSendHeaders:" + e.url);
      var find = false;
      try {
        var matchinit = "";
        var matchurl = "";
        var ismainframe = false;
        if (e.hasOwnProperty("initiator") && e.initiator != undefined) {
          matchinit = AntiTrack.getHostname(e.initiator);
        }
        if (e.hasOwnProperty("documentUrl") && e.documentUrl != undefined) {
          matchinit = AntiTrack.getHostname(e.documentUrl);
        }
        if (e.hasOwnProperty("url") && e.url != undefined) {
          matchurl = AntiTrack.getHostname(e.url);
        }
        if (e.hasOwnProperty("type") && e.type != undefined) {
          if (e.type == "main_frame") {
            ismainframe = true;
          }
        }

        if (ismainframe) {
          if (matchinit != "" || matchurl != "") {
            AntiTrack.exclude_list.forEach(function f(ex, u, a) {
              if (matchurl.indexOf(ex) != -1) {
                find = true;
              }
            });
          }
          AntiTrack.tabstate.UpdateTabState(e.tabId, find);
        } else {
          find = AntiTrack.tabstate.GetTabState(e.tabId);
        }
      } catch (e) {}
      if (find == false) {
        for (var s = 0, t = e.requestHeaders.length; s < t; ++s)
          if ("User-Agent" === e.requestHeaders[s].name) {
            e.requestHeaders[s].value += AntiTrack.useragent.GetAgent(e.tabId);
            consoleLog("onBeforeSendHeaders User-Agent:" + e.requestHeaders[s].value);
            break;
          }
        return {
          requestHeaders: e.requestHeaders
        };
      }
    }
  },
  {
    urls: ["<all_urls>"]
  },
  ["requestHeaders"]
);

// antitrack/randexp.min.js
function RandExp(min = 8, max = 20) {
  let len = (max - min + 1) * Math.random() + min;
  len = Math.floor(len);
  let arr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ];
  let res = "";
  for (let i = 0; i < len; i++) {
    let index = Math.floor(arr.length * Math.random());
    res += arr[index];
  }
  return res;
}

// antitrack/antitrack.js
//Includes randexp.min.js | v0.4.6 | https://github.com/fent/randexp.js

("use strict");
var AntiTrack = {
  enable_antitrack: false,
  beat_tick: 0,
  settings: {
    isEnabled: function () {
      return AntiTrack.enable_antitrack;
    },
    setEenabled: function (e) {
      // set enable_antitrack to storage then popup can access
      AntiTrack.enable_antitrack = e;
    }
  },
  useragent: {
    agents: {},
    RandomAgent: function () {
      return RandExp(8, 20);
    },
    GetAgent: function (id) {
      if (!AntiTrack.useragent.agents.hasOwnProperty(id)) {
        AntiTrack.useragent.agents[id] = AntiTrack.useragent.RandomAgent();
      }
      return AntiTrack.useragent.agents[id];
    },
    Update: function () {
      AntiTrack.beat_tick = 0;
      for (let id in AntiTrack.useragent.agents) {
        AntiTrack.useragent.agents[id] = AntiTrack.useragent.RandomAgent();
      }
    }
  },
  tabstate: {
    tab: {},
    GetTabState: function (id) {
      if (!this.tab.hasOwnProperty(id)) {
        this.tab[id] = false;
      }
      return this.tab[id];
    },
    UpdateTabState: function (id, state) {
      this.tab[id] = state;
    }
  },
  getHostname: function (url) {
    return new URL(url).hostname;
  },

  exclude_list: [],
  plugin_list: ["Account Helper", "Login Reminder", "Audio Clock"]
};

function AntiTrackAgentUpdate(obj) {
  if (AntiTrack.settings.isEnabled()) {
    if (AntiTrack.beat_tick >= 30) {
      AntiTrack.useragent.Update();
    }
    AntiTrack.beat_tick++;
  }
}
function AntiTrackStateChanged(obj) {
  try {
    if (!obj.hasOwnProperty("enable_antitrack")) {
      return;
    }

    if (obj.enable_antitrack) {
      AntiTrack.useragent.Update();
      setPref(Prop.enable_antitrack, obj.enable_antitrack);
      AntiTrack.settings.setEenabled(obj.enable_antitrack);
    } else {
      setPref(Prop.enable_antitrack, false);
      AntiTrack.settings.setEenabled(false);
    }
    consoleLog("AntiTrackStateChanged -> " + ",enable_antitrack:" + AntiTrack.settings.isEnabled());
    if (obj.hasOwnProperty("exclude_list")) {
      AntiTrack.exclude_list = obj.exclude_list;
    }
  } catch (e) {
    consoleLog("AntiTrackStateChanged not support AntiTrack");
  }
}

// wdsupport/wd_support.js
("use strict");

var wdHelper = {
  support: false,
  web_list: [],
  web_script: "",
  webSupport: function (url) {
    var bSupport = false;
    if (wdHelper.support != false) {
      try {
        wdHelper.web_list.forEach(function f(e, u, a) {
          if (url.indexOf(e) != -1) {
            bSupport = true;
            throw Error();
          }
        });
      } catch (error) {}
    }
    return bSupport;
  },
  webInit: function (webList, webScript) {
    if (typeof webList == "object" && typeof webScript == "string") {
      wdHelper.support = true;
      wdHelper.web_list = webList;
      wdHelper.web_script = webScript;
    }
  }
};

// background.js

var port = null;
var hbstate = 0;
var lang = getUILang();
var i18nReport = "https://info.url.cloud.360safe.com/";
var i18nPage = "/plug.php?";
var productId = null;
var compatibleState = CompatibleState.none;
var installedDetails = null;
var curExtVer = null;
var browserType = null;
var injectCiuvoScriptFunc = null;
var openerTabId = 0;

var WebStatus = {
  unknown: 0,
  checking: 1,
  safe: 2,
  risk: 3,
  shopping: 4,
  payment: 5
};

function getBrowserInfoEx() {
  var browser = {
    version: navigator.appVersion,
    agent: navigator.userAgent,
    appname: navigator.appName,
    fullversion: "" + parseFloat(navigator.appVersion),
    majorversion: parseInt(navigator.appVersion, 10)
  };
  var nameOffset, verOffset, ix;
  if ((verOffset = browser.agent.indexOf("Edg/")) != -1) {
    browser.appname = "msedge";
    browser.fullversion = browser.agent.substring(verOffset + 4);
  }
  // In Opera 15+, the true version is after "OPR/"
  else if ((verOffset = browser.agent.indexOf("OPR/")) != -1) {
    browser.appname = "opera";
    browser.fullversion = browser.agent.substring(verOffset + 4);
  }
  // In older Opera, the true version is after "Opera" or after "Version"
  else if ((verOffset = browser.agent.indexOf("Opera")) != -1) {
    browser.appname = "opera";
    browser.fullversion = browser.agent.substring(verOffset + 6);
    if ((verOffset = browser.agent.indexOf("Version")) != -1) browser.fullversion = browser.agent.substring(verOffset + 8);
  } else if ((verOffset = browser.agent.indexOf("YaBrowser/")) != -1) {
    browser.appname = "yandex";
    browser.fullversion = browser.agent.substring(verOffset + 10);
  }
  // In MSIE, the true version is after "MSIE" in userAgent
  else if ((verOffset = browser.agent.indexOf("MSIE")) != -1) {
    browser.appname = "ie";
    browser.fullversion = browser.agent.substring(verOffset + 5);
  }
  // In Chrome, the true version is after "Chrome"
  else if ((verOffset = browser.agent.indexOf("Chrome")) != -1) {
    browser.appname = "chrome";
    if (browser.agent.indexOf("x64") != -1) {
      browser.appname += "64";
    }
    browser.fullversion = browser.agent.substring(verOffset + 7);
  }
  // In Safari, the true version is after "Safari" or after "Version"
  else if ((verOffset = browser.agent.indexOf("Safari")) != -1) {
    browser.appname = "safari";
    browser.fullversion = browser.agent.substring(verOffset + 7);
    if ((verOffset = browser.agent.indexOf("Version")) != -1) browser.fullversion = browser.agent.substring(verOffset + 8);
  }
  // In Firefox, the true version is after "Firefox"
  else if ((verOffset = browser.agent.indexOf("Firefox")) != -1) {
    browser.appname = "firefox";
    browser.fullversion = browser.agent.substring(verOffset + 8);
  }
  // In most other browsers, "name/version" is at the end of userAgent
  else if ((nameOffset = browser.agent.lastIndexOf(" ") + 1) < (verOffset = browser.agent.lastIndexOf("/"))) {
    browser.appname = browser.agent.substring(nameOffset, verOffset);
    browser.fullversion = browser.agent.substring(verOffset + 1);
    if (browser.appname.toLowerCase() == browser.appname.toUpperCase()) {
      browser.appname = navigator.appName;
    }
  }
  // trim the browser.fullversion string at semicolon/space if present
  if ((ix = browser.fullversion.indexOf(";")) != -1) browser.fullversion = browser.fullversion.substring(0, ix);
  if ((ix = browser.fullversion.indexOf(" ")) != -1) browser.fullversion = browser.fullversion.substring(0, ix);

  majorVersion = parseInt("" + browser.fullversion, 10);
  if (isNaN(majorVersion)) {
    browser.fullversion = "" + parseFloat(navigator.appVersion);
    browser.majorversion = parseInt(navigator.appVersion, 10);
  }

  return browser;
}
function ProtectStateChanged(obj) {
  if (obj.status) {
    if (compatibleState == CompatibleState.enable_siteaccess) {
      compatibleState = CompatibleState.compatible;
    }
  } else {
    if (compatibleState == CompatibleState.compatible) {
      compatibleState = CompatibleState.enable_siteaccess;
    }
  }
}

function procNativeMessage(message) {
  //msg from native host
  for (var i = 0; i < message.length; i++) {
    var jsonObject = message[i];
    if (typeof jsonObject.event != "undefined") {
      consoleLog("procNativeMessage -> jsonObject:" + JSON.stringify(jsonObject));

      if (jsonObject.event == Event.session_beat) {
        hbstate = 1;
        testNativeHost(Event.test_host);
        AntiTrackAgentUpdate();
      } else if (jsonObject.event == Event.installed) {
        //install ok
        if (browserType.indexOf("firefox") != -1) {
          //var visturl = i18nReport+"plugin"+i18nPage+"la="+lang+"&rq=2";
          consoleLog("insatll ok，Event.installed:" + Event.installed);
          setPref(Prop.enable_toast, false);
          //chrome.tabs.create({
          //    url: chrome.extension.getURL("popup/privacy.html")
          //}, function (t) {
          //    openerTabId = t.id;
          //    consoleLog("insatll ok，openerTabId:" + openerTabId);
          //});
        } else {
          var visturl = i18nReport + browserType + i18nPage + "la=" + lang + "&rq=2";
          chrome.tabs.create({ url: visturl });
        }
      } else if (jsonObject.event == Event.version) {
        productId = jsonObject.pid;

        checkWebshieldVersionState(jsonObject.version_supported, jsonObject.status);

        // it's always installed by default.
        if (productId == ProductId.ts) {
          setPref(Prop.dealprice_installed, true);
          setPref(Prop.sovetnik_installed, true);
          AntiTrackStateChanged(jsonObject);
        }
        if (productId == ProductId.safe) {
          AntiTrackStateChanged(jsonObject);
        }
      } else if (jsonObject.event == Event.icon_status_notify) {
        updateToolIcon(jsonObject);
        if (compatibleState == CompatibleState.compatible) {
          trackDauState();
        }
      } else if (jsonObject.event == Event.popup_status_result) {
        if (compatibleState == CompatibleState.compatible) {
          chrome.runtime
            .sendMessage({
              type: "update-popup",
              data: jsonObject,
              antiTrack: AntiTrack.enable_antitrack
            })
            .catch(function (e) {
              console.log("catch one error", e);
            });
          checkPromoPrerequesite(jsonObject);
        }
      } else if (jsonObject.event == Event.netpay_changed) {
        if (compatibleState == CompatibleState.compatible) updateNetpayChanged(jsonObject);
      } else if (jsonObject.event == Event.scan_start) {
        if (compatibleState == CompatibleState.compatible) updateToastToScanStart(jsonObject);
      } else if (jsonObject.event == Event.scan_end) {
        if (compatibleState == CompatibleState.compatible) updateToastToScanEnd(jsonObject);
      } else if (jsonObject.event == Event.enter_shopping) {
        if (compatibleState == CompatibleState.compatible) {
          updateToastToShoppingProtectionOn(jsonObject);
          trackActivePromoState();
        }
      } else if (jsonObject.event == Event.site_access_result) {
        if (compatibleState == CompatibleState.compatible) initSiteAccessState(jsonObject);
      } else if (jsonObject.event == Event.refresh_tab) {
        var vaid = jsonObject.tabid;
        var vaurl = jsonObject.url;
        chrome.tabs.update(vaid, { url: vaurl });
      } else if (jsonObject.event == Event.antitrack_status_changed) {
        AntiTrackStateChanged(jsonObject);
        sendAntiTrackChangedMessage(jsonObject);
      } else if (jsonObject.event == Event.popup_protect_state) {
        ProtectStateChanged(jsonObject);
      } else if (jsonObject.event == Event.wd_helper && typeof wdHelper != "undefined") {
        if (jsonObject.type == 0) {
          wdHelper.webInit(jsonObject.nativeweb_list, jsonObject.nativeweb_script);
        } else if (jsonObject.type == 1) {
          chrome.tabs
            .sendMessage(jsonObject.tabid, {
              text: Request.on_wd_helper_support,
              sid: jsonObject.sid,
              ret: jsonObject.ret,
              err: jsonObject.err
            })
            .catch(function (e) {
              console.log("Failed send message, error is ", e, ", object is ", jsonObject);
            });
        }
      }
    }
  }
}

function onDisconnected() {
  port = null;
  if (hbstate == 0) {
    //native host not exist
    var os = navigator.platform;

    /*if (os.indexOf("Win") > -1) {//not exist native host
            visturl += "&rq=1";
        } else {//not win os 提示一次
            visturl += "&rq=3";
        }*/
    if (os.indexOf("Win") == -1) {
      // not supported prompt
      if (browserType.indexOf("firefox") != -1) {
        var visturl = i18nReport + "plugin" + i18nPage + "la=" + lang + "&rq=3";
        chrome.tabs.create({ url: visturl });
      } else {
        var visturl = i18nReport + browserType + i18nPage + "la=" + lang + "&rq=3";
        chrome.tabs.create({ url: visturl });
      }
    }
  }
}

function createNativeHost() {
  var hostName = "com.google.chrome.wdwedpro";
  port = chrome.runtime.connectNative(hostName);
  port.onMessage.addListener(procNativeMessage);
  port.onDisconnect.addListener(onDisconnected);
}

function callNativeHost(id, url, et) {
  var msg = [{ tabid: id, url: url, event: et }];
  if (port != null) {
    port.postMessage(msg);
  }
}

function callNativeHostWithInfo(id, url, et, opid, info) {
  var msg = [{ tabid: id, url: url, event: et, openerId: opid, info: info }];
  if (port != null) {
    port.postMessage(msg);
  }
}

function notifyUpdateTab(addid, removeid, url) {
  var msg = [{ tabid: addid, removeid: removeid, url: url, event: Event.repalce_tab }];
  if (port != null) {
    port.postMessage(msg);
  }
}

function callNative(tabid, url, sid, func, parameter) {
  var msg = [{ tabid: tabid, url: url, sid: sid, func: func, parameter: parameter, event: Event.wd_helper }];
  if (port != null) {
    port.postMessage(msg);
  }
}

function testNativeHost(et) {
  if (port != null) {
    port.postMessage([{ event: et }]);
  }
}

function procUrl(tabId, url, et) {
  callNativeHost(tabId, url, et);
}

function procUrlWithInfo(tabId, url, et, info) {
  callNativeHostWithInfo(tabId, url, et, 0, info);
}
function procUrlWithOpenerId(tabId, url, et, openerId, info) {
  callNativeHostWithInfo(tabId, url, et, openerId, info);
}

function callNativeHostWithTransType(id, url, et, transtype, transqualifiers) {
  var msg = [
    {
      tabid: id,
      url: url,
      event: et,
      transtype: transtype,
      transqualifiers: transqualifiers
    }
  ];
  if (port != null) {
    port.postMessage(msg);
  }
}

function callNativeHostWithRequestStaus(id, url, status, requestId, et, details) {
  var msg = [
    {
      tabid: id,
      requestId: requestId,
      url: url,
      event: et,
      requestStatus: status,
      details: details
    }
  ];
  if (port != null) {
    port.postMessage(msg);
  }
}

function setContextInfo() {
  var browserInfo = getBrowserInfoEx();
  if (browserInfo.appname.indexOf("firefox") != -1) {
    curExtVer = browser.runtime.getManifest().version;
  } else {
    curExtVer = chrome.runtime.getManifest().version;
  }
  consoleLog("browser name:" + browserInfo.appname + ",browser ver:" + browserInfo.version + ", ext ver:" + curExtVer);
  if (port != null) {
    var bname = browserInfo.appname;
    if (bname == "msedge") {
      bname = "chrome";
    }
    port.postMessage([{ bname: bname, bname2: browserInfo.appname, bver: browserInfo.fullversion, ever: curExtVer }]);
  }
}

// last digit build checking ignored
//
// 1: ver1 > ver2
// 0: ver1 == ver2
//-1: ver1 < ver2
function compareVersion(ver1, ver2) {
  var a = ver1.split(".");
  var b = ver2.split(".");

  for (var i = 0; i < a.length; ++i) {
    a[i] = Number(a[i]);
  }
  for (var i = 0; i < b.length; ++i) {
    b[i] = Number(b[i]);
  }

  if (a[0] > b[0]) return 1;
  if (a[0] < b[0]) return -1;
  if (a[1] > b[1]) return 1;
  if (a[1] < b[1]) return -1;

  return 0;
}

function checkWebshieldVersionState(curWebShieldVerSupported, supported) {
  var verState = compareVersion(curExtVer, curWebShieldVerSupported);

  if (verState == 1) {
    if (curWebShieldVerSupported == "2.0.14") {
      compatibleState = CompatibleState.base;
      setDefaultBrowserAction();
    } else {
      compatibleState = CompatibleState.upgrade_env;
      setUpgradeEnvAction();
    }
  } else if (verState == -1) {
    // currently silent work on base function.
    compatibleState = CompatibleState.base;
    setDefaultBrowserAction();

    //compatibleState = CompatibleState.upgrade_plugin;
    //setUpgradeExtensionAction();
  } else if (!checkBrowserVersionState()) {
    compatibleState = CompatibleState.upgrade_browser;
    setUpgradeBrowserAction();
  } else {
    compatibleState = CompatibleState.compatible;
    setDefaultBrowserAction();
    setOnConnectListener();
    resotrPrefs();

    checkSiteAccessState();

    if (isStoreConsultantAvailable(productId)) {
      //initSovetnik();
    } else if (isCiuvoAvailable(productId)) {
      initCiuvo();
    }

    initStat(productId);
  }

  consoleLog("checkWebshieldVersionState -> compatibleState:" + compatibleState);
}

function initStat(productId) {
  if (productId != ProductId.ts) {
    return;
  }
}

function checkSiteAccessState() {
  var msg = [{ event: Event.site_access_query }];
  port.postMessage(msg);
}

function checkBrowserVersionState() {
  var browserInfo = getBrowserInfoEx();
  consoleLog("browserInfo:" + JSON.stringify(browserInfo));

  if (browserInfo.appname == "opera" && compareVersion(browserInfo.fullversion, "32") == -1) {
    consoleLog("opera too old");
    return false;
  }

  return true;
}

function setUpgradeExtensionAction() {
  consoleLog("setUpgradeExtensionAction");

  chrome.action.setPopup({
    popup: "popup/upgradeext.html"
  });
  chrome.action.setIcon({
    path: {
      19: "images/unknown_icon_19.png",
      38: "images/unknown_icon_38.png"
    }
  });
  chrome.action.setTitle({
    title: chrome.i18n.getMessage("unknown_tips")
  });
}

function setSiteAccessDisabledBrowserAction() {
  consoleLog("setSiteAccessDisabledBrowserAction");

  chrome.action.setPopup({
    popup: "popup/siteaccess.html"
  });
  chrome.action.setIcon({
    path: {
      19: "images/icon_status_disable_19.png",
      38: "images/icon_status_disable_38.png"
    }
  });
  chrome.action.setTitle({
    title: chrome.i18n.getMessage("unknown_tips")
  });
}

function setSiteAccessDisabledAntiTrackBrowserAction() {
  consoleLog("setSiteAccessDisabledAntiTrackBrowserAction");

  chrome.action.setPopup({
    popup: "popup/siteaccessantitrack.html"
  });
  chrome.action.setIcon({
    path: {
      19: "images/unknown_icon_19.png",
      38: "images/unknown_icon_38.png"
    }
  });
  chrome.action.setTitle({
    title: chrome.i18n.getMessage("unknown_tips")
  });
}

function setUpgradeBrowserAction() {
  chrome.action.setPopup({
    popup: "popup/upgradebr.html"
  });
  chrome.action.setIcon({
    path: {
      19: "images/unknown_icon_19.png",
      38: "images/unknown_icon_38.png"
    }
  });
  chrome.action.setTitle({
    title: chrome.i18n.getMessage("unknown_tips")
  });
}

function setUpgradeEnvAction() {
  chrome.action.setPopup({
    popup: "popup/upgradesafe.html"
  });
  chrome.action.setIcon({
    path: {
      19: "images/unknown_icon_19.png",
      38: "images/unknown_icon_38.png"
    }
  });
  chrome.action.setTitle({
    title: chrome.i18n.getMessage("unknown_tips")
  });
}

var bListener = false;

function setStatusDisableBrowserAction() {
  consoleLog("setStatusDisableBrowserAction");
  chrome.action.setPopup({
    popup: ""
  });
  chrome.action.setIcon({
    path: {
      19: "images/icon_status_disable_19.png",
      38: "images/icon_status_disable_38.png"
    }
  });
  chrome.action.setTitle({
    title: chrome.i18n.getMessage("unknown_tips")
  });

  if (bListener == false) {
    consoleLog("chrome.action.onClicked begin, bListener = " + bListener);
    chrome.action.onClicked.addListener(function (tab) {
      consoleLog("chrome.action.onClicked,openerTabId = " + openerTabId);
      if (openerTabId > 0) {
        chrome.tabs.get(openerTabId, function (t) {
          if (t) {
            chrome.windows.update(t.windowId, { focused: true });
            chrome.tabs.update(openerTabId, { active: true });
          } else {
            chrome.tabs.create(
              {
                url: chrome.runtime.getURL("popup/privacy.html")
              },
              function (tab) {
                openerTabId = tab.id;
              }
            );
          }
        });
      } else {
        chrome.tabs.create(
          {
            url: chrome.runtime.getURL("popup/privacy.html")
          },
          function (t) {
            openerTabId = t.id;
          }
        );
      }
    });
    bListener = true;
  }
}

function setDefaultBrowserAction() {
  consoleLog("setDefaultBrowserAction");
  chrome.action.setPopup({
    popup: "popup/unknown.html"
  });
  chrome.action.setIcon({
    path: {
      19: "images/unknown_icon_19.png",
      38: "images/unknown_icon_38.png"
    }
  });
  chrome.action.setTitle({
    title: chrome.i18n.getMessage("unknown_tips")
  });
}

function setOnConnectListener() {
  chrome.runtime.onConnect.addListener(function (port) {
    consoleLog("port connected:" + port.name);

    if (port.name == "popup") {
      port.onMessage.addListener(function (curTab) {
        consoleLog("popup port: tab recieved" + JSON.stringify(curTab));
        triggerUpdatePopup(curTab.id, curTab.windowId);
      });
    }
  });
}

function resotrPrefs() {
  getPref(Prop.enable_toolbar, true, function (value) {
    enableToolIcon(value);
  });

  getPref(Prop.agree_to_privacy_policy, true, function (value) {
    setPrivacyPolicy(value);
  });
}

function updateNetpayChanged(msg) {
  consoleLog("updateNetpayChanged:" + JSON.stringify(msg));

  if (msg.status == WebStatus.shopping || msg.status == WebStatus.payment) {
    if (msg.netpay) {
      chrome.action.setIcon({
        path: {
          19: "images/shopping_icon_19.png",
          38: "images/shopping_icon_38.png"
        },
        tabId: msg.tabid
      });
    } else {
      chrome.action.setIcon({
        path: {
          19: "images/shopping_exit_icon_19.png",
          38: "images/shopping_exit_icon_38.png"
        },
        tabId: msg.tabid
      });
    }
  }
}
function IsShowUnknow(msg) {
  if (AntiTrack.enable_antitrack) {
    if (msg.hasOwnProperty("url") && msg.url != undefined) {
      if (msg.url.indexOf("http://") == 0 || msg.url.indexOf("https://") == 0) {
        return false;
      }
    }
  }
  return true;
}
function updateToolIcon(msg) {
  consoleLog("updateToolIcon:" + JSON.stringify(msg));

  getPref(Prop.enable_toast, true, function (value) {
    if (!value && !AntiTrack.settings.isEnabled() && browserType.indexOf("firefox") != -1) {
      setStatusDisableBrowserAction();
      return;
    }

    //setDefaultBrowserAction();

    if (compatibleState == CompatibleState.compatible) {
      if (msg.status == WebStatus.unknown) {
        if (IsShowUnknow(msg)) {
          consoleLog("updateToolIcon: popup/unknown.html 574");
          updateToolIconInternal(msg, "popup/unknown.html", "images/unknown_icon", chrome.i18n.getMessage("unknown_tips"));
        } else {
          consoleLog("updateToolIcon: popup/siteaccessantitrack.html 578");
          updateToolIconInternal(
            msg,
            "popup/siteaccessantitrack.html",
            "images/unknown_icon",
            chrome.i18n.getMessage("enableantitrack_tips")
          );
        }
      } else if (msg.status == WebStatus.checking) {
        updateToolIconInternal(msg, "popup/checking.html", "images/checking_icon", chrome.i18n.getMessage("checking_tips"));
      } else if (msg.status == WebStatus.safe) {
        if (AntiTrack.enable_antitrack) {
          updateToolIconInternal(msg, "popup/safe.html", "images/antitrack", chrome.i18n.getMessage("enableantitrack_tips"));
        } else updateToolIconInternal(msg, "popup/safe.html", "images/safe_icon", chrome.i18n.getMessage("safe_tips"));
      } else if (msg.status == WebStatus.risk) {
        updateToolIconInternal(msg, "popup/risk.html", "images/risk_icon", chrome.i18n.getMessage("risk_tips"));
      } else if (msg.status == WebStatus.shopping || msg.status == WebStatus.payment) {
        if (msg.netpay != undefined && msg.netpay) {
          updateToolIconInternal(msg, "popup/shopping.html", "images/shopping_icon", chrome.i18n.getMessage("shopping_tips"));
        } else {
          updateToolIconInternal(msg, "popup/shopping.html", "images/shopping_exit_icon", chrome.i18n.getMessage("shopping_tips"));
        }
      }
    } else if (CompatibleState.enable_siteaccess) {
      if (AntiTrack.enable_antitrack) {
        consoleLog("updateToolIcon: popup/siteaccessantitrack.html 602");
        updateToolIconInternal(
          msg,
          "popup/siteaccessantitrack.html",
          "images/unknown_icon",
          chrome.i18n.getMessage("enableantitrack_tips")
        );
      } else {
        updateToolIconInternal(msg, "popup/siteaccess.html", "images/icon_status_disable", chrome.i18n.getMessage("unknown_tips"));
      }
    }
  });
}

function isDauTimeUp(cb) {
  var today = new Date();
  var curTime = Math.floor(today.getTime() / 1000);
  today.setDate(today.getDate() + 1);
  today.setUTCHours(0);
  today.setUTCMinutes(0);
  today.setUTCSeconds(0);
  today.setUTCMilliseconds(0);
  var nextTime = Math.floor(today.getTime() / 1000);
  consoleLog("isDauTimeUp -> nextTime:" + nextTime);

  getGlobalValue(Prop.next_dau_time, function (savedDauTime) {
    if (savedDauTime == null) {
      setGlobalValue(Prop.next_dau_time, nextTime);
      cb();
      return true;
    } else {
      consoleLog("isDauTimeUp -> next_dau_time:" + savedDauTime);

      if (curTime >= savedDauTime) {
        setGlobalValue(Prop.next_dau_time, nextTime);
        cb();
        return true;
      }

      return false;
    }
  });
}

function isTimeUpToPopupCiuvo(cb) {
  var curTime = Math.floor(new Date().getTime() / 1000);
  consoleLog("isTimeUpToPopupCiuvo -> curTime:" + curTime);

  getGlobalValue(Prop.dealprice_popup_time, function (time) {
    if (time == null) {
      cb();
      return true;
    } else {
      getGlobalValue(Prop.dealprice_popup_count, function (count) {
        if (count == 1) {
          if (curTime - time >= 24 * 60 * 60) {
            cb();
            return true;
          } else {
            consoleLog("isTimeUpToPopupCiuvo -> count:" + count + ", not right time");
            return false;
          }
        } else if (count == 2) {
          if (curTime - time >= 3 * 24 * 60 * 60) {
            cb();
            return true;
          } else {
            consoleLog("isTimeUpToPopupCiuvo -> count:" + count + ", not right time");
            return false;
          }
        } else {
          consoleLog("isTimeUpToPopupCiuvo -> never popup");
          return false;
        }
      });
    }
  });
}

function updateTimeUpToPopupCiuvo() {
  var curTime = Math.floor(new Date().getTime() / 1000);
  consoleLog("updateTimeUpToPopupCiuvo -> curTime:" + curTime);

  getGlobalValue(Prop.dealprice_popup_time, function (time) {
    if (time == null) {
      setGlobalValue(Prop.dealprice_popup_time, curTime);
      setGlobalValue(Prop.dealprice_popup_count, 1);
      return;
    } else {
      getGlobalValue(Prop.dealprice_popup_count, function (count) {
        if (count == 1) {
          if (curTime - time >= 24 * 60 * 60) {
            setGlobalValue(Prop.dealprice_popup_time, curTime);
            setGlobalValue(Prop.dealprice_popup_count, ++count);
            return;
          } else {
            consoleLog("updateTimeUpToPopupCiuvo -> count:" + count + ", not right time");
            return;
          }
        } else if (count == 2) {
          if (curTime - time >= 3 * 24 * 60 * 60) {
            setGlobalValue(Prop.dealprice_popup_time, curTime);
            setGlobalValue(Prop.dealprice_popup_count, ++count);
            return;
          } else {
            consoleLog("updateTimeUpToPopupCiuvo -> count:" + count + ", not right time");
            return;
          }
        } else {
          consoleLog("updateTimeUpToPopupCiuvo -> never popup");
        }
      });
    }
  });
}

function trackDauState() {
  isDauTimeUp(trackPage);
}

function trackActivePromoState() {
  var shoppingOnOff =
    browserType.indexOf("firefox") != -1
      ? Rule.getIns().getStatFirefoxConfig().getShoppingOnOff()
      : Rule.getIns().getStatConfig().getShoppingOnOff();

  if (isStoreConsultantAvailable(productId)) {
    getPref(Prop.sovetnik_enabled, null, function (value) {
      new Stat()
        .setTrackId(shoppingOnOff.getRes())
        .setType(Stat.Type.Shopping)
        .setAction(Stat.PromoAction.StoreConsultant)
        .setLabel(value ? Stat.PromoLabel.On : Stat.PromoLabel.Off)
        .setSampleRate(shoppingOnOff.getRate())
        .finish();
    });
  } else if (isCiuvoAvailable(productId)) {
    getPref(Prop.dealprice_enabled, null, function (value) {
      new Stat()
        .setTrackId(shoppingOnOff.getRes())
        .setType(Stat.Type.Shopping)
        .setAction(Stat.PromoAction.Ciuvo)
        .setLabel(value ? Stat.PromoLabel.On : Stat.PromoLabel.Off)
        .setSampleRate(shoppingOnOff.getRate())
        .finish();
    });
  }
}

function updateToolIconInternal(msg, popupPath, iconPath, tips) {
  consoleLog("updateToolIconInternal begin, popupPath:" + popupPath);
  console.log("===========setPopup=========", popupPath);
  chrome.action.setPopup({
    popup: popupPath,
    tabId: msg.tabid
  });
  chrome.action.setIcon({
    path: {
      19: iconPath + "_19.png",
      38: iconPath + "_38.png"
    },
    tabId: msg.tabid
  });
  chrome.action.setTitle({
    title: tips,
    tabId: msg.tabid
  });
}

function testDOMLoad(tabId, callback, retry) {
  chrome.tabs.sendMessage(tabId, { type: "test" }, function (response) {
    retry--;

    consoleLog("testDOMLoad:" + retry);

    if (retry == 0) {
      return;
    } else if (response == undefined) {
      startAlarm("timer11", 100);
      chrome.alarms.onAlarm.addListener(() => {
        testDOMLoad(tabId, callback, retry);
        chrome.alarms.clear("timer11");
      });
    } else {
      callback();
    }
  });
}

function updateToastToShoppingProtectionOn(msg) {
  consoleLog("updateToastToShoppingProtectionOn:" + JSON.stringify(msg));

  testDOMLoad(
    msg.tabid,
    function () {
      var request = { type: Request.show_toast, pid: productId, event: msg.event };
      if (msg.name != "") {
        request.text = chrome.i18n.getMessage("shopping_protection_on") + msg.name;
      } else {
        request.text = chrome.i18n.getMessage("shopping_protection_on_without_pattern");
      }

      request.status = "safety";
      console.log("updateToastToShoppingProtectionOn");
      chrome.tabs.sendMessage(msg.tabid, request).catch(function (e) {
        console.log("Failed to send message at testDOMLoad, e is ", e);
      });
    },
    40
  );
}

function updateToastToScanStart(msg) {
  updateToastToShoppingProtectionOn(msg);
}

function updateToastToScanEnd(msg) {
  var request = { type: Request.show_toast, pid: productId, event: msg.event };
  if (msg.safe) {
    request.text = chrome.i18n.getMessage("shopping_protection_no_risk");
    request.status = "safety";
  } else {
    request.text = chrome.i18n.getMessage("shopping_protection_risk_found");
    request.status = "risky";
  }
  console.log("updateToastToScanEnd");
  chrome.tabs.sendMessage(msg.tabid, request).catch(function (e) {
    console.log("Failed to updateToastToScanEnd, errr is ", e);
  });
}

function enterNetPayMode(tabId) {
  var msg = [{ event: Event.enable_netpay, tabid: tabId }];
  port.postMessage(msg);

  console.log("========enterNetPayMode=======", msg);

  consoleLog("enterNetPayMode:" + JSON.stringify(msg));
}

function exitNetPayMode(tabId) {
  var msg = [{ event: Event.disable_netpay, tabid: tabId }];
  port.postMessage(msg);
  console.log("========exitNetPayMode=======", msg);

  consoleLog("exitNetPayMode:" + JSON.stringify(msg));
}

function initSiteAccessState(msg) {
  if (msg.siteaccess == 0) {
    compatibleState = CompatibleState.enable_siteaccess;
    if (AntiTrack.enable_antitrack) {
      setTimeout(function () {
        setSiteAccessDisabledAntiTrackBrowserAction();
      }, 1000);
    } else {
      setTimeout(function () {
        setSiteAccessDisabledAntiTrackBrowserAction();
      }, 1000);
    }
  }
}

function triggerUpdatePopup(tabId) {
  var msg = [{ tabid: tabId, event: Event.popup_status_query }];
  port.postMessage(msg);

  consoleLog("triggerUpdatePopup:" + JSON.stringify(msg));
}

function setPopupPrivacyPageState(state) {
  var msg = [{ tabid: state, event: Event.popup_privacy_page_state }];
  if (port != null) {
    port.postMessage(msg);
  }
  consoleLog("setPopupPrivacyState:" + JSON.stringify(msg));
}

function enableToolIcon(enabled) {
  if (enabled) {
    chrome.action.enable();
  } else {
    chrome.action.disable();
  }
}

function enableToolIconStatus(staus) {
  if (staus) {
    if (compatibleState == CompatibleState.none) {
      setUpgradeEnvAction();
    } else {
      setDefaultBrowserAction();
    }
  } else {
    setStatusDisableBrowserAction();
  }
}

function statPopup(id) {
  var action = null;

  if (id == "safe-container") {
    action = Stat.PopupAction.Safe;
  } else if (id == "risk-container") {
    action = Stat.PopupAction.Risk;
  } else if (id == "pay-container") {
    action = Stat.PopupAction.Payment;
  } else if (id == "shopping-container") {
    action = Stat.PopupAction.Shopping;
  } else if (id == "unknown-container") {
    action = Stat.PopupAction.Unknown;
  } else if (id == "checking-container") {
    action = Stat.PopupAction.Checking;
  } else {
    return false;
  }

  var config =
    browserType.indexOf("firefox") != -1 ? Rule.getIns().getStatFirefoxConfig().getPopup() : Rule.getIns().getStatConfig().getPopup();

  new Stat().setTrackId(config.getRes()).setType(Stat.Type.Popup).setAction(action).setSampleRate(config.getRate()).finish();
  return true;
}

function setMessageListener() {
  function promptOptin() {
    console.log("=====prompt=====");
    var ciuvoOptin = new ciuvoSDK.Optin(document, {
      tag: "threesixty",
      base_url: "https://api.ciuvo.com/api/",
      media_host_url: "https://www.ciuvo.com/"
    });
    var statusCallback = function (optinStatus, runSDKCallback) {
      if (optinStatus === "enabled") {
        console.log("enabled");
      } else if (optinStatus === "declined") {
        console.log("declined");
      } else {
      }
      runSDKCallback(null);
    };
    ciuvoOptin.on("optin-changed", function (value) {
      console.log(("New optin status: ", value));
      if (value === "enabled") {
        console.log("accept offer");
        chrome.runtime.sendMessage({ text: Request.deal_price_accepted, state: true }, function (response) {});
      } else if (value === "declined") {
        console.log("decline offer");
        chrome.runtime.sendMessage({ text: Request.deal_price_accepted, state: false }, function (response) {});
      } else {
        console.log("cancel offer");
        chrome.runtime.sendMessage({ text: Request.deal_price_accepted, state: null }, function (response) {});
      }
    });
    ciuvoOptin.run(statusCallback);
  }

  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    consoleLog("onMessage:" + JSON.stringify(sender));

    if (request.text == Request.get_product_id) {
      sendResponse(productId);
    } else if (request.text == Request.stat_popup) {
      sendResponse(statPopup(request.id));
    } else if (request.text == Request.enable_toolbar_icon) {
      sendResponse(enableToolIcon(request.state));
    } else if (request.text == Request.enable_toolbar_icon_status) {
      sendResponse(enableToolIconStatus(request.state));
    } else if (request.text == Request.on_antitrack_inject) {
      var e = [];
      e[0] = false;
      if (AntiTrack.settings.isEnabled()) {
        var find = false;
        if (request.hasOwnProperty("url")) {
          try {
            AntiTrack.exclude_list.forEach(function f(e, u, a) {
              if (request.url.indexOf(e) != -1) {
                find = true;
                throw Error();
              }
            });
          } catch (e) {}
        }
        if (!find) {
          e[0] = true;
          e[1] = AntiTrack.useragent.GetAgent(sender.tab.id);
          e[2] = AntiTrack.plugin_list;
          if (request.hasOwnProperty("url")) callNativeHost(0, request.url, Event.antitrack_host_notify);
          chrome.scripting.executeScript({
            target: { tabId: sender.tab.id, allFrames: true },
            world: "MAIN",
            func: overrideUserAgent,
            args: [JSON.stringify(e)]
          });
        }
      }
    } else if (request.text == Request.agree_to_privacy_policy) {
      sendResponse(setPrivacyPolicy(request.state));
    } else if (request.text == Request.get_compatiable_state) {
      /*
       * response: {pid:xxx, state:xxx}
       */
      sendResponse({ state: compatibleState, pid: productId });
    } else if (request.text == Request.check_promo_prerequisite) {
      sendResponse(triggerUpdatePopup(sender.tab.id, sender.tab.windowId));
    } else if (request.text == Request.inject_script) {
      if (isStoreConsultantAvailable(productId) && Rule.getIns().getStoreConsultant().isEnabled()) {
        if (
          (request.status == WebStatus.safe && Rule.getIns().getStoreConsultant().isSafeWebsiteInjected()) ||
          request.status == WebStatus.shopping
        ) {
          // prompt except malware website
          getPref(Prop.sovetnik_enabled, null, function (value) {
            consoleLog("sovetnik_enabled:" + value);

            if (value == null) {
              consoleLog("inject_script: sovetnik-inject-content.js");
              // chrome.tabs.executeScript(sender.tab.id, {file: "promo/sovetnik-inject-content.js"});
              chrome.scripting.executeScript({
                target: { tabId: sender.tab.id },
                files: ["promo/sovetnik-inject-content.js"]
              });
            } else if (value) {
              consoleLog("inject_script: sovetnik-inject-content.js");
              // chrome.tabs.executeScript(sender.tab.id, {file: "promo/sovetnik-inject-content.js"});
              chrome.scripting.executeScript({
                target: { tabId: sender.tab.id },
                files: ["promo/sovetnik-inject-content.js"]
              });
            } else {
              consoleLog("inject_script: turn off sovetnik-inject-content.js");
            }
          });
        }
      } else if (isCiuvoAvailable(productId) && Rule.getIns().getCiuvo().isEnabled()) {
        if (
          (request.status == WebStatus.safe && Rule.getIns().getCiuvo().isSafeWebsiteInjected()) ||
          request.status == WebStatus.shopping
        ) {
          getPref(Prop.dealprice_enabled, null, function (value) {
            consoleLog("ciuvo_enabled:" + value);

            const decalareCountVar = function (dealpricePopupCount) {
              window.count = dealpricePopupCount;
            };
            if (value == null) {
              isTimeUpToPopupCiuvo(function () {
                getGlobalValue(Prop.dealprice_popup_count, function (dealpricePopupCount) {
                  chrome.scripting
                    .executeScript({
                      target: { tabId: sender.tab.id, allFrames: true },
                      world: "MAIN",
                      func: decalareCountVar,
                      args: [dealpricePopupCount]
                    })
                    .then(() => {
                      return chrome.scripting.executeScript({
                        target: { tabId: sender.tab.id, allFrames: true },
                        world: "MAIN",
                        files: ["promo/ciuvo-contentscript.js"]
                      });
                    })
                    .then((res) => {
                      if (res) {
                        return chrome.scripting.executeScript({
                          target: { tabId: sender.tab.id, allFrames: true },
                          world: "MAIN",
                          func: promptOptin
                        });
                      }
                    })
                    .catch((err) => {
                      console.log("Failed to inject script, error is", err);
                    });
                });
              });
            } else if (value) {
              injectCiuvoScriptFunc(sender.tab.id, sender.tab.url);
            } else {
              consoleLog("inject_script: turn off ciuvo-contentscript.js");
            }
          });
        }
      }
      sendResponse(0);
    } else if (request.text == Request.store_consultant_accepted) {
      var config =
        browserType.indexOf("firefox") != -1
          ? Rule.getIns().getStatFirefoxConfig().getAgreement()
          : Rule.getIns().getStatConfig().getAgreement();

      if (request.state) {
        new Stat()
          .setTrackId(config.getRes())
          .setType(Stat.Type.StoreConsultant)
          .setAction(Stat.Action.AcceptOffer)
          .setSampleRate(config.getRate())
          .finish();
      } else {
        new Stat()
          .setTrackId(config.getRes())
          .setType(Stat.Type.StoreConsultant)
          .setAction(Stat.Action.DeclineOffer)
          .setSampleRate(config.getRate())
          .finish();
      }
    } else if (request.text == Request.deal_price_accepted) {
      updateTimeUpToPopupCiuvo();

      var config =
        browserType.indexOf("firefox") != -1
          ? Rule.getIns().getStatFirefoxConfig().getAgreement()
          : Rule.getIns().getStatConfig().getAgreement();

      if (request.state == null) {
        new Stat()
          .setTrackId(config.getRes())
          .setType(Stat.Type.Ciuvo)
          .setAction(Stat.Action.CancelOffer)
          .setSampleRate(config.getRate())
          .finish();
      } else if (request.state) {
        setPref(Prop.dealprice_enabled, true);
        injectCiuvoScriptFunc(sender.tab.id, sender.tab.url);
        new Stat()
          .setTrackId(config.getRes())
          .setType(Stat.Type.Ciuvo)
          .setAction(Stat.Action.AcceptOffer)
          .setSampleRate(config.getRate())
          .finish();
      } else {
        setPref(Prop.dealprice_enabled, false);
        new Stat()
          .setTrackId(config.getRes())
          .setType(Stat.Type.Ciuvo)
          .setAction(Stat.Action.DeclineOffer)
          .setSampleRate(config.getRate())
          .finish();
      }
    } else if (request.text == Request.on_wd_helper_inject && typeof wdHelper != "undefined") {
      if (wdHelper.webSupport(request.url)) {
        chrome.scripting.executeScript({
          target: { tabId: sender.tab.id, allFrames: true },
          world: "MAIN",
          func: inject360Func
        });
        sendResponse(1);
      } else {
        sendResponse(0);
      }
    } else if (request.text == Request.on_wd_helper_support) {
      callNative(sender.tab.id, sender.url, request.sid, request.func, request.parameter);
    } else if (request.text == Request.popup_privacy_page_agree) {
      sendResponse(setPopupPrivacyPageState(request.state));
    }
  });
}

function procWebNavigation(details) {
  if (details.transitionType != "auto_subframe") {
    var transitionQualifiers = 0;
    for (var i = 0; i < details.transitionQualifiers.length; i++) {
      if (details.transitionQualifiers[i] == "client_redirect") {
        transitionQualifiers |= 0x00020000;
      }
      if (details.transitionQualifiers[i] == "server_redirect") {
        transitionQualifiers |= 0x80000000;
      }
      if (details.transitionQualifiers[i] == "forward_back") {
        transitionQualifiers |= 0x00040000;
      }
      if (details.transitionQualifiers[i] == "from_address_bar") {
        transitionQualifiers |= 0x02000000;
      }
    }

    callNativeHostWithTransType(details.tabId, details.url, Event.transType_tab, details.transitionType, transitionQualifiers);
  }
}

function listenPopup() {
  chrome.runtime.onMessage.addListener(function (request) {
    var type = request.type;
    var data = request.data;
    if (type === "exit-net-pay-mode") {
      exitNetPayMode(data.tabId);
    } else if (type === "enter-net-pay-mode") {
      enterNetPayMode(data.tabId);
    }
  });
}
function initExtension() {
  browserType = getBrowserInfoEx().appname.toLowerCase();

  createNativeHost();
  setContextInfo();

  listenPopup();

  chrome.tabs.onCreated.addListener(function (tab) {
    if (!tab.url) return;
    procUrlWithInfo(tab.id, tab.url, Event.create_tab, tab);
  });
  if ("object" == typeof chrome.webNavigation && browserType.indexOf("firefox") == -1) {
    chrome.webNavigation.onCommitted.addListener(function (details) {
      procWebNavigation(details);
    });
    chrome.webNavigation.onHistoryStateUpdated.addListener(function (details) {
      procWebNavigation(details);
    });
    chrome.webRequest.onHeadersReceived.addListener(
      function (details) {
        var requestId = parseInt(details.requestId, 10);
        callNativeHostWithRequestStaus(details.tabId, details.url, details.statusCode, requestId, Event.request_tab, details);
      },
      {
        urls: ["<all_urls>"],
        types: ["main_frame"]
      },
      ["extraHeaders"]
    );
  }

  if (browserType.indexOf("firefox") != -1) {
    consoleLog("initExtension，pop privacy.html");
    setPref(Prop.enable_toast, false);
    chrome.tabs.create(
      {
        url: chrome.runtime.getURL("popup/privacy.html")
      },
      function (t) {
        openerTabId = t.id;
        consoleLog("initExtension，openerTabId:" + openerTabId);
      }
    );

    setStatusDisableBrowserAction();
  }

  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == "loading") {
      if (!tab.url) return;

      if (browserType.indexOf("firefox") != -1) {
        startAlarm("timer14", 300);
        chrome.alarms.onAlarm.addListener(() => {
          chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            var currentTab = tabs[0];
            procUrlWithInfo(currentTab.id, currentTab.url, Event.update_tab, currentTab);
          });
          chrome.alarms.clear("timer14");
        });
      } else {
        if (tab.url.search("chrome://*") != -1 || tab.url.search("edge://*") != -1) {
          procUrlWithInfo(tab.id, tab.url, Event.update_tab, tab);
        } else {
          procUrlWithOpenerId(tab.id, tab.url, Event.update_tab, tab.openerTabId, tab);
        }
      }
    }
  });

  chrome.tabs.onReplaced.addListener(function (addTabId, removeTabId) {
    chrome.tabs.get(addTabId, function (tab) {
      notifyUpdateTab(addTabId, removeTabId, tab.url);
    });
  });

  chrome.tabs.onActivated.addListener(function (activeInfo) {
    consoleLog("onActivated from tabid:" + activeInfo.tabId);
  });

  chrome.tabs.onRemoved.addListener(function (tabId, removeInfo) {
    procUrl(tabId, 0, Event.remove_tab);
  });
  startAlarm("timer15", 500);
  chrome.alarms.onAlarm.addListener(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (installedDetails != null) {
        if (installedDetails.reason == "install") {
          testNativeHost(Event.installed);
        } else if (installedDetails.reason == "update") {
        }
      }
    });
    chrome.alarms.clear("timer15");
  });
}

function checkCanonicalWebshield(retry) {
  if (compatibleState != CompatibleState.none) {
    return;
  }

  retry--;
  consoleLog("checkCanonicalWebshield:" + retry);

  if (retry == 0) {
    if (compatibleState == CompatibleState.none) {
      if (browserType.indexOf("firefox") == -1) {
        consoleLog("checkCanonicalWebshield，setUpgradeEnvAction()");
        setUpgradeEnvAction();
      }
    }
  } else {
    // startAlarm('timer16', 1000);
    // chrome.alarms.onAlarm.addListener(() => {
    //     checkCanonicalWebshield(retry);
    //     chrome.alarms.clear("timer16");
    // });
    setTimeout(function () {
      checkCanonicalWebshield(retry);
    }, 1000);
  }
}

function checkPromoPrerequesite(msg) {
  if (msg.status == WebStatus.safe || msg.status == WebStatus.shopping) {
    if (msg.netpay != undefined) {
      // neypay function turned on
      var request = { type: Request.promo_prerequisite_ok, status: msg.status };
      chrome.tabs.sendMessage(msg.tabid, request).catch(function (e) {
        console.log("Failed to checkPromoPrerequesite, error is ", e);
      });
    }
  }
}

function initCiuvo() {
  config = {
    tag: "threesixty"
  };

  injectCiuvoScriptFunc = initCiuvoSettings(config);
}

function setOninstalledListener() {
  // ASAP ready for event sent from chrome
  chrome.runtime.onInstalled.addListener(function (details) {
    consoleLog("onInstalled:" + JSON.stringify(details));

    installedDetails = details;
  });
}

(function () {
  setOninstalledListener();
  setMessageListener();

  chrome.runtime.getPlatformInfo(function (info) {
    consoleLog("checkPlatform:" + JSON.stringify(info));

    if (info.os == "win") {
      initExtension();

      checkCanonicalWebshield(5);
    } else {
      compatibleState = CompatibleState.unsupported_platform;
      try {
        enableToolIcon(false);
        AntiTrack.settings.setEenabled(false);
      } catch (e) {}
      chrome.action.setTitle({
        title: chrome.i18n.getMessage("unsupported_platform_message")
      });
    }
  });
})();
