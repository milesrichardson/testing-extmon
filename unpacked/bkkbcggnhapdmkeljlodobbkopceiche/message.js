/*! For license information please see message.js.LICENSE.txt */
!(function (e) {
  var t = {};
  function __webpack_require__(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, __webpack_require__), (o.l = !0), o.exports;
  }
  (__webpack_require__.m = e),
    (__webpack_require__.c = t),
    (__webpack_require__.d = function (e, t, n) {
      __webpack_require__.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (__webpack_require__.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (__webpack_require__.t = function (e, t) {
      if ((1 & t && (e = __webpack_require__(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if ((__webpack_require__.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var o in e)
          __webpack_require__.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (__webpack_require__.n = function (e) {
      var t =
        e && e.__esModule
          ? function getDefault() {
              return e.default;
            }
          : function getModuleExports() {
              return e;
            };
      return __webpack_require__.d(t, "a", t), t;
    }),
    (__webpack_require__.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (__webpack_require__.p = ""),
    __webpack_require__((__webpack_require__.s = 274));
})({
  0: function (e, t, n) {
    "use strict";
    n.d(t, "h", function () {
      return o;
    }),
      n.d(t, "o", function () {
        return r;
      }),
      n.d(t, "t", function () {
        return i;
      }),
      n.d(t, "m", function () {
        return a;
      }),
      n.d(t, "d", function () {
        return s;
      }),
      n.d(t, "i", function () {
        return c;
      }),
      n.d(t, "G", function () {
        return l;
      }),
      n.d(t, "r", function () {
        return u;
      }),
      n.d(t, "F", function () {
        return p;
      }),
      n.d(t, "s", function () {
        return _;
      }),
      n.d(t, "e", function () {
        return h;
      }),
      n.d(t, "K", function () {
        return E;
      }),
      n.d(t, "x", function () {
        return m;
      }),
      n.d(t, "J", function () {
        return O;
      }),
      n.d(t, "q", function () {
        return T;
      }),
      n.d(t, "z", function () {
        return g;
      }),
      n.d(t, "y", function () {
        return C;
      }),
      n.d(t, "p", function () {
        return I;
      }),
      n.d(t, "w", function () {
        return A;
      }),
      n.d(t, "l", function () {
        return S;
      }),
      n.d(t, "u", function () {
        return y;
      }),
      n.d(t, "n", function () {
        return v;
      }),
      n.d(t, "k", function () {
        return N;
      }),
      n.d(t, "D", function () {
        return L;
      }),
      n.d(t, "C", function () {
        return R;
      }),
      n.d(t, "v", function () {
        return b;
      }),
      n.d(t, "c", function () {
        return x;
      }),
      n.d(t, "b", function () {
        return D;
      }),
      n.d(t, "B", function () {
        return P;
      }),
      n.d(t, "j", function () {
        return w;
      }),
      n.d(t, "a", function () {
        return k;
      }),
      n.d(t, "I", function () {
        return K;
      }),
      n.d(t, "L", function () {
        return M;
      }),
      n.d(t, "O", function () {
        return B;
      }),
      n.d(t, "N", function () {
        return F;
      }),
      n.d(t, "M", function () {
        return U;
      }),
      n.d(t, "P", function () {
        return H;
      }),
      n.d(t, "E", function () {
        return G;
      }),
      n.d(t, "f", function () {
        return j;
      }),
      n.d(t, "A", function () {
        return W;
      }),
      n.d(t, "H", function () {
        return V;
      }),
      n.d(t, "g", function () {
        return q;
      });
    const o = {
        PAUSED: "paused",
        SETTINGS: "settings",
        WHITELIST: "whitelist",
        SOCIAL_CONTENT_KEYWORDS: "socialContentKeyWords",
        NUM_OF_BLOCKS: "numOfBlocks",
        NUM_OF_UNBLOCKS: "numOfUnBlocks",
        TOTAL_BLOCKS_BY_TAB_ID: "totalBlocksByTabId",
        TOTAL_BLOCKS_BY_TYPE: "totalBlocksByType",
        TOTAL_UNBLOCKS_BY_TYPE: "totalUnBlocksByType",
        BLOCKED_SITES_COUNTER: "counterBlockedSites",
        UNBLOCKED_SITES_COUNTER: "counterUnBlockedSites",
        OVERLAY_BLOCKED_LIST: "overlayBlockedList",
        USER: "user",
        LAST_USER_UPDATE_DATE: "lastUserUpdateDate",
        BLOCKED_ELEMENTS: "blockedElements",
        BLOCKED_ELEMENTS_PROMO: "blockedElementsPromo",
        BLOCKED_ELEMENTS_COUNT: "blockedElementsCount",
        DEFAULT_WHITELIST: "defaultWhitelist",
        POPULAR_SITES_FOR_BLOCK_ELEMENTS: "popularSitesForBlockElements",
        DEFAULT_WHITELIST_LAST_UPDATE: "defaultWhitelistLastUpdate",
        POPULAR_SITES_FOR_BLOCK_ELEMENTS_LAST_UPDATE: "popularSitesForBlockElementsLastUpdate",
        LAST_ALIVE_EVENT_SENT_AT: "lastAliveEventSentAt",
        AD_BLOCKING: "adBlocking",
        GENERAL_DATA: "generalData",
        PROMO_COUPON: "promoCoupon",
        WHATS_NEW: "whatsNew",
        DEFAULT_FACEBOOK_CONFIG: "facebookConfig",
        DEFAULT_SEGMENT_CONFIG: "segmentConfig",
        PUSH_NOTIFICATIONS_BLOCKER_PROMO: "pushNotificationBlockerPromo",
        RATING_STAR_CLICK: "ratingStarClick",
        RATING_US_MODAL: "ratingUsModal",
        FONT_STYLE: "fontStyle",
        RDID: "randid",
        FIRST_POPUP_BLOCK: "isFirstBlockAdds",
        PIN_TASKBAR_DATA: "pinTaskbarData",
        SPECIAL_OFFER_MODAL: "specialOfferModal",
        INSTALL_SOURCE: "installSource",
        REFRESH_MODAL: "refreshModal",
        BADGE_STATES: "badgeStates",
        INSTALL_EVENT_SENT: "installEventSent",
        HIDE_TRACKER_HOOK: "hideTrackerHook",
        TRACKER_HOOK_LAST_TIME_CLOSED: "trackerHookLastTimeClosed"
      },
      r = {
        CATEGORIES: {
          OPTIONS: "Options_menu",
          MAIN_MENU: "Menu",
          CHECKBOX: "Checkbox",
          CTA: "Button CTA",
          NAVBAR: "Navigation bar",
          MISSING: "Missing Ad",
          NOTIFICATION: "Notification",
          RATING: "Rating",
          EXTENSION: "Extension",
          REPORTS: "Reports",
          BLOCK_ELEMENT: "Block Element",
          COOKIE_CRUMBLER: "Cookie Crumbler",
          INSITE_NOTIFICATIONS: "In-site Notifications"
        },
        ACTIONS: {
          CLICK: "Click",
          VIEWED: "Viewed",
          BLOCKED_POPUP: "Popup blocked",
          DAILY_BLOCKS: "Popups blocked per day",
          BLOCKED_ELEMENT_SITE: "Blocked element site URL"
        }
      },
      i = {
        GA_EVENT: "trackEvent",
        ADD_BADGE_STATE: "addBadgeState",
        REMOVE_BADGE_STATE: "removeBadgeState",
        UPDATE_COUNTS: "updateBlockCounts",
        CREATE_CONTEXT_MENUS: "createIconContextMenu",
        SEND_ANALYTICS_EVENT: "sendAnalyticsEvent",
        SYNC_EXTENSION_ANALYTICS_DATA: "syncExtensionAnalyticsData",
        KEEN_IO: "KeenIO",
        ALLOW_ALWAYS: "allowAlways",
        RESTORE_BLOCKING: "restoreBlocking",
        REQUEST_TAB_URL: "requestTabUrl",
        REQUEST_CURRENT_TAB: "requestCurrentTab",
        OPEN_URL: "openUrl",
        UPDATE_RATING: "update-rating",
        GET_USER: "getUser",
        UPDATE_USER_INFO: "updateUserInfo",
        SUBSCRIPTION_SUCCESS: "subscription-success",
        LOGIN: "login",
        LOGOUT: "logout",
        ON_LOGOUT: "on-logout",
        START_BLOCKED_ELEMENTS: "start-blocked-elements",
        MANUAL_REMOVE_OVERLAY: "manual-remove-overlay",
        ADD_UNBLOCK_ALL_ELEMENTS_MENU: "add-unblock-all-elements-menu",
        REMOVE_UNBLOCK_ALL_ELEMENTS_MENU: "remove-unblock-all-elements-menu",
        UNBLOCK_ALL_ELEMENTS: "unblock-all-elements",
        GET_DEFAULT_WHITELIST: "get-default-whitelist",
        GET_POPULAR_SITES_FOR_BLOCK_ELEMENTS: "get-popular-sites-for-block-elements",
        INSERT_COOKIE_FILTERS: "insert-cookie-filters",
        ACTIVATE_CC_OR_SHOW_PROMO: "activate-cc-or-show-promo",
        SHOW_COOKIE_CRUMBLER_HOOK: "show-cookie-crumbler-hook",
        HIDE_COOKIE_CRUMBLER_PROMO: "hide-cookie-crumbler-promo",
        SHOW_TRIAL_PROMO: "show-trial-promo",
        CHECK_PROMO_MESSAGE: "check-promo-message",
        SHOW_COUPON_MESSAGE: "show-coupon-message",
        OPT_IN_AGREE: "opt-in-agree",
        OPT_IN_DISAGREE: "opt-in-disagree",
        SEND_ALIVE_EVENT: "send-alive-event",
        HIDE_AD_ELEMENT: "hide-ad-element",
        COUNT_AD_ELEMENT: "count-ad-element",
        UPDATE_SOCIAL_BLOCKER_CONFIG: "update-social-blocker-config",
        UPDATE_SEGMENT_DATA: "update-segment-data",
        UPDATE_BLOCK_COUNT: "update-block-count",
        UPDATE_UNBLOCK_COUNT: "update-unblock-count",
        COUNT_COOKIE_MESSAGES: "count-cookie-messages",
        TOGGLE_PUSH_NOTIFICATIONS_BLOCKING: "toggle-push-notification-blocking",
        INJECT_FONTS: "inject-font",
        FETCH_SETTINGS: "fetch-settings",
        UPDATE_REMOTE_SETTINGS: "update-remote-settings",
        UPDATE_REMOTE_AND_LOCAL_SETTINGS: "update-remote-and-local-settings",
        REQUEST_TRIAL_STATUS: "request-trial-status",
        EXTENSION_IS_PINNED: "extension-is-pinned",
        REQUEST_EXTENSION_ID: "request-extension-id",
        UPDATE_EXTENSION_ID: "update-extension-id",
        UPDATE_SCRIPT_BLOCKERS_STATE: "update-script-blockers-state",
        SETTINGS_CHANGED: "settings-changed",
        UPDATE_SETTINGS: "update-settings",
        EXTENSION_IS_ALLOWED_INCOGNITO: "extension-is-allowed-incognito",
        GET_ALL_EXTENSION_PERMISSIONS_GRANTED: "get-all-extension-permissions-granted",
        REQUEST_OPTIONAL_PERMISSIONS: "request-optional-permissions",
        UPDATE_SOCIAL_CONTENT_KEYWORDS: "update-social-content-keywords",
        ON_EXTENSION_ENABLED_STATE_UPDATED: "extension-enabled-state-updated",
        REQUEST_INSTALL_SOURCE: "request-install-source",
        GET_ALL_FEATURES_FLAGS: "get-all-features-flags",
        GET_SETTINGS: "get-settings",
        GET_EXTENSION_INFO: "get-extension-info",
        SETTINGS_CHANGED_IN_EXTENSION: "settings-changed-in-extension",
        SETTINGS_CHANGED_IN_WEBAPP: "settings-changed-in-webapp",
        POST_MESSAGE: "post-message",
        ON_EXTENSION_INFO_UPDATED: "on-extension-info-updated",
        OPEN_EXTENSION_CHECKOUT_MODAL: "open-extension-checkout-modal",
        CLOSE_EXTENSION_CHECKOUT_MODAL: "close-extension-checkout-modal",
        PAYMENT_SUCCESS_PAGE_SETTINGS_CLICK: "payment-success-page-settings-click",
        UPDATE_PREMIUM_SETTING_TOGGLE_VALUE: "update-premium-setting-toggle-value",
        CLOSE_TRACKER_HOOK: "close-tracker-hook",
        HIDE_TRACKER_HOOK: "hide-tracker-hook",
        TMP_HIDE_TRACKER_HOOK: "tmp-hide-tracker-hook"
      },
      a = {
        POPUPS: "popups",
        OVERLAYS: "overlays",
        COOKIE_CRUMBLER: "cookieCrumbler",
        FACEBOOK: "facebookAdds",
        PUSH_NOTIFICATION: "pushNotification",
        SOCIAL_CONTENT_BLOCKER: "socialContentBlocker",
        ADS_BLOCKER: "adsBlocker",
        YOUTUBE_BLOCKER: "youtubeBlocker",
        TRACKERS_BLOCKER: "trackersBlocker"
      },
      s = {
        COOKIE: "images/cookie-animation.json",
        FACEBOOK_END: "images/endTrialFacebookAnimation.json",
        PIN: "images/pinAnimation.json"
      },
      c = {
        PARENT: {
          id: "parentContextMenu",
          title: "Poperblocker",
          contexts: ["page", "frame", "selection", "link", "editable", "image", "video", "audio"]
        },
        OVERLAY: {
          id: "removeOverlay",
          title: "Remove overlay",
          contexts: ["page", "frame", "selection", "link", "editable", "image", "video", "audio"]
        },
        BLOCK_ELEMENT: {
          id: "blockElement",
          title: "Hide Element",
          contexts: ["page", "frame", "selection", "link", "editable", "image", "video", "audio"]
        },
        UNBLOCK_ALL_ELEMENTS: {
          id: "unblockAllElement",
          title: "Unblock All Elements",
          contexts: ["page", "frame", "selection", "link", "editable", "image", "video", "audio"]
        }
      },
      l = {
        BLOCK_ELEMENT_ROOT: "pb-block-element-root",
        LIMIT_NOTIFICATION_ROOT: "pb-limit-notification-root",
        PROMO_ROOT: "pb-feature-promo-root",
        BLOCKER_ELEMENT_ID: "pb-feature-elementsblocker-root",
        COOKIE_PROMO_ROOT: "pb-cookie-promo-root",
        MESSAGE_NOTIFICATION_ROOT: "pb-message-notification-root",
        ADS_HOOK_ROOT: "pb-ads-hook-root",
        CHECKOUT_MODAL: "pb-checkout-modal",
        TRACKER_BLOCKER_HOOK_ROOT: "pb-tracker-blocker-root"
      },
      u = {
        CHROME_EXTENTION_MANAGER: "chrome://extensions",
        FF_EXTENTION_MANAGER: "about:addons",
        WEB_APP: "https://app.poperblocker.com",
        CHECKOUT_YEARLY_PLAN: "https://app.poperblocker.com/checkout?selectedPlan=Yearly",
        ANALYTICS_APP: "https://analytics.poperblocker.com",
        VALID_MESSAGE_DOMAINS: "poperblocker.com".split(","),
        THANK_YOU_PAGE_CH: "https://poperblocker.com/welcome",
        THANK_YOU_PAGE_FF: "https://poperblocker.com/welcome-firefox",
        PRIVACY_POLICY_CH: "https://poperblocker.com/privacy/",
        PRIVACY_POLICY_FF: "https://addons.mozilla.org/en-US/firefox/addon/poper-blocker-pop-up-blocker/privacy/",
        UNINSTALL_PAGE_CH: "https://poperblocker.com/uninstall/?",
        UNINSTALL_PAGE_FF: "https://poperblocker.com/uninstall-firefox/?",
        FEEDBACK_PAGE: "https://poperblocker.com/feedback.html?from=ext",
        CONTACT_PAGE: "https://poperblocker.com/contact-form.html",
        CONTRIBUTE_PAGE: "https://poperblocker.com/contribute?utm_source=Extension_Popup",
        GOOGLE_FORM: "https://forms.gle/DfoB6hyd7MFtDPP8A",
        APPSTORE_CH: "https://chrome.google.com/webstore/detail/pop-up-blocker-for-chrome/bkkbcggnhapdmkeljlodobbkopceiche",
        APPSTORE_FF: "https://addons.mozilla.org/en-US/firefox/addon/poper-blocker-pop-up-blocker/",
        REVIEW_CH: "https://chrome.google.com/webstore/detail/pop-up-blocker-for-chrome/bkkbcggnhapdmkeljlodobbkopceiche/reviews",
        REVIEW_FF: "https://addons.mozilla.org/en-US/firefox/addon/poper-blocker-pop-up-blocker/reviews/add",
        REVIEW_EDGE: "https://microsoftedge.microsoft.com/addons/detail/pop-up-blocker-for-edge%E2%84%A2-/baplddocidbpmmneofgnhkjojmibmpck",
        TWITTER_SHARE:
          "https://twitter.com/intent/tweet?hashtags=popups&original_referer=https%3A%2F%2Fpoperblocker.com%3Fref%3Dfb_pp_share&related=socialmediahats&text=I'm%20using%20poper%20blocker%20to%20enjoy%20a%20popup%20free%20browsing%20experience%20pic.twitter.com%2FniqVgqfmAw&url=https%3A%2F%2Fgoo.gl%2FryoaEn&via=poper_blocker",
        FACEBOOK_SHARE:
          "https://www.facebook.com/dialog/share?app_id=1911035589168170&display=popup&href=https%3A%2F%2Fpoperblocker.com%3Fref%3Dfb_pp_share%3Fhl%3Den&hashtag=%23For_No_More_Popups_Click_Below",
        RATE_US_FORM: "https://docs.google.com/forms/d/e/1FAIpQLScqaL8rpA8H-9Qa5WiLpbYXO_Gzlg33AfS0O4qhgQZBglpjtw/formResponse",
        CHECKOUT_IFRAME_URL: "https://app.poperblocker.com/checkout-iframe"
      },
      p = { AFTER: 5, EVERY: 100 },
      d = u.WEB_APP + "/api/v1",
      f = "" + u.ANALYTICS_APP,
      _ = "?modal=login",
      h = {
        OVERLAY_CHECK: "https://api2.poperblocker.com/view/update",
        ANALYTICS_SEND_EVENT: f + "/event",
        GET_USER: d + "/user",
        GET_USER_SEGMENT: d + "/segment",
        LOGOUT: d + "/auth/logout",
        MANAGE_SUBSCRIPTION: d + "/subscriptions",
        ANALYTIC_INFO: d + "/analytics/sync",
        WHITELIST: d + "/whitelist",
        POPULAR_SITES_FOR_BLOCK_ELEMENTS: d + "/mostPopularSitesForBlockElements",
        PROMO_COUPON: d + "/promoCoupon",
        SETTINGS: d + "/settings",
        REFRESH: d + "/auth/refresh",
        SOCIALBLOCKER_CONFIG: d + "/socialblocker/config",
        ADS_BLOCKER_CONFIG: d + "/adsblocker/config",
        TRACKERS_BLOCKER_CONFIG: d + "/trackersblocker/config",
        YOUTUBE_BLOCKER_CONFIG: d + "/youtubeblocker/config",
        GROWTHBOOK: d + "/growthbook",
        COOKIE_CRUMBLER: d + "/cookieCrumbler",
        ALIVE: d + "/alive"
      },
      E = 288e5,
      m = 864e5,
      O = 5184e6,
      T = 36e5,
      g = 1,
      C = 60 * g,
      I = 12 * C,
      A = 24 * C,
      S = 3,
      y = 41,
      v = "https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&display=swa",
      N = { poper20: "poper20", poper30: "poper30" },
      L = 5,
      R = 5,
      b = 21,
      x = {
        ANALYTICS_INFO_KEY: "ANALYTICS_INFO",
        ANALYTICS_PLATFORM: "Extension",
        ANALYTICS_PRODUCT: "PoperBlocker",
        ANALYTICS_RESOURCE_TYPES: { PAID: "PAID", ORGANIC: "ORGANIC" },
        ANALYTICS_EVENT_TYPES: {
          EXTENSION_INSTALL: "EXTENSION_INSTALL",
          EXTENSION_UNINSTALL: "EXTENSION_UNINSTALL",
          EXTENSION_UPGRADE: "EXTENSION_UPGRADE",
          EXTENSION_INSTALL_GENERAL: "EXTENSION_INSTALL_GENERAL",
          EXTENSION_OPT_IN_VIEWED: "EXTENSION_OPT_IN_VIEWED",
          EXTENSION_OPT_IN_CLICKED_AGREE: "EXTENSION_OPT_IN_CLICKED_AGREE",
          EXTENSION_OPT_OUT_CLICKED_AGREE: "EXTENSION_OPT_OUT_CLICKED_AGREE",
          POPUP_BLOCKED: "POPUP_BLOCKED",
          ALLOW_POPUPS: "ALLOW_POPUPS",
          DID_WE_MISS_ONE: "DID_WE_MISS_ONE",
          ELEMENT_BLOCKED: "ELEMENT_BLOCKED",
          OVERLAY_BLOCKED: "OVERLAY_BLOCKED",
          OVERLAY_DETECTED: "OVERLAY_DETECTED",
          REMOVE_OVERLAY_FOREVER: "REMOVE_OVERLAY_FOREVER",
          UNDO_OVERLAY_REMOVAL: "UNDO_OVERLAY_REMOVAL",
          ELEMENT_BLOCKED_UNDO: "ELEMENT_BLOCKED_UNDO",
          ELEMENT_BLOCKED_SAVE: "ELEMENT_BLOCKED_SAVE",
          BLOCK_ELEMENT_PROMOTION_NOTIFICATION_VIEW: "BLOCK_ELEMENT_PROMOTION_NOTIFICATION_VIEW",
          BLOCK_ELEMENT_FREE_BLOCKS: "BLOCK_ELEMENT_FREE_BLOCKS",
          BLOCK_ELEMENT_NO_BLOCKS_VIEW: "BLOCK_ELEMENT_NO_BLOCKS_VIEW",
          BLOCK_ELEMENT_UNBLOCK_ELEMENTS: "BLOCK_ELEMENT_UNBLOCK_ELEMENTS",
          WHITELIST_ADD: "WHITELIST_ADD",
          WHITELIST_REMOVE: "WHITELIST_REMOVE",
          SETTINGS_PAGE_VIEW: "SETTINGS_PAGE_VIEW",
          COOKIE_CRUMBLER_PROMOTION_NOTIFICATION_VIEW: "COOKIE_CRUMBLER_PROMOTION_NOTIFICATION_VIEW",
          INSITE_NOTIFICATION_PROMOTION_NOTIFICATION_VIEW: "INSITE_NOTIFICATION_PROMOTION_NOTIFICATION_VIEW",
          COOKIE_CRUMBLER_TRIAL_START: "COOKIE_CRUMBLER_TRIAL_START",
          COOKIE_CRUMBLER_HIDE_FOREVER: "COOKIE_CRUMBLER_HIDE_FOREVER",
          COOKIE_CRUMBLER_IN_TRIAL: "COOKIE_CRUMBLER_IN_TRIAL",
          COOKIE_CRUMBLER_END_OF_TRIAL: "COOKIE_CRUMBLER_END_OF_TRIAL",
          COOKIE_CRUMBLER_IN_TRIAL_CLICK: "COOKIE_CRUMBLER_IN_TRIAL_CLICK",
          COOKIE_CRUMBLER_USE_CASE_CLOSE: "COOKIE_CRUMBLER_USE_CASE_CLOSE",
          COOKIE_CRUMBLER_TRIAL_PROMOTION_NOTIFICATION_CLICK: "COOKIE_CRUMBLER_TRIAL_PROMOTION_NOTIFICATION_CLICK",
          COOKIE_CRUMBLER_USE_CASE_VIEW: "COOKIE_CRUMBLER_USE_CASE_VIEW",
          COOKIE_CRUMBLER_USE_CASE_CLICK: "COOKIE_CRUMBLER_USE_CASE_CLICK",
          ALIVE: "ALIVE",
          SOCIAL_BLOCKER_TRIAL_PROMOTION_NOTIFICATION_CLICK: "SOCIAL_BLOCKER_TRIAL_PROMOTION_NOTIFICATION_CLICK",
          SOCIAL_BLOCKER_REMOVE_ADS_FOR_GOOD_CLICK: "SOCIAL_BLOCKER_REMOVE_ADS_FOR_GOOD_CLICK",
          SOCIAL_BLOCKER_TRIAL_OVER_PROMOTION_VIEW: "SOCIAL_BLOCKER_TRIAL_OVER_PROMOTION_VIEW",
          IN_PRODUCT_PROMOTION_DIALOG_CLICK: "IN_PRODUCT_PROMOTION_DIALOG_CLICK",
          IN_PRODUCT_PROMOTION_DIALOG_VIEW: "IN_PRODUCT_PROMOTION_DIALOG_VIEW",
          IN_SITE_PUSH_NOTIFICATION_ALLOW_PERMISSIONS: "IN_SITE_PUSH_NOTIFICATION_ALLOW_PERMISSIONS",
          IN_SITE_PUSH_NOTIFICATION_DENY_PERMISSIONS: "IN_SITE_PUSH_NOTIFICATION_DENY_PERMISSIONS",
          IN_SITE_PUSH_NOTIFICATION_ON: "IN_SITE_PUSH_NOTIFICATION_ON",
          IN_SITE_PUSH_NOTIFICATION_OFF: "IN_SITE_PUSH_NOTIFICATION_OFF",
          BLOCK_ALL_DISTRACTIONS_BUTTON_CLICK: "BLOCK_ALL_DISTRACTIONS_BUTTON_CLICK",
          EXPAND_NOT_BLOCKED_DROPDOWN_CLICK: "EXPAND_NOT_BLOCKED_DROPDOWN_CLICK",
          RATE_US_DIALOG_VIEW: "RATE_US_DIALOG_VIEW",
          RATE_US_DIALOG_CLICK: "RATE_US_DIALOG_CLICK",
          RATE_US_DIALOG_RESULT_VIEW: "RATE_US_DIALOG_RESULT_VIEW",
          SEGMENTATION_PROMOTION_VIEW: "SEGMENTATION_PROMOTION_VIEW",
          SEGMENTATION_PROMOTION_CLICK: "SEGMENTATION_PROMOTION_CLICK",
          ADBLOCKER_PROMOTION_VIEW: "ADBLOCKER_PROMOTION_VIEW",
          ADBLOCKER_PROMOTION_CLICK: "ADBLOCKER_PROMOTION_CLICK",
          MONETIZATION_NOIFICATION_VIEW: "MONETIZATION_NOIFICATION_VIEW",
          MONETIZATION_NOIFICATION_CTA_CLICK: "MONETIZATION_NOIFICATION_CTA_CLICK",
          MONETIZATION_NOIFICATION_COPY_CODE_CLICK: "MONETIZATION_NOIFICATION_COPY_CODE_CLICK",
          SOCIAL_BLOCKER_FEED_PROMOTION_VIEW: "SOCIAL_BLOCKER_FEED_PROMOTION_VIEW",
          SOCIAL_BLOCKER_FEED_PROMOTION_OPEN: "SOCIAL_BLOCKER_FEED_PROMOTION_OPEN",
          SOCIAL_BLOCKER_INTRIAL_PROMOTION_VIEW: "SOCIAL_BLOCKER_INTRIAL_PROMOTION_VIEW",
          SOCIAL_BLOCKER_FEED_PROMOTION_START_TRIAL: "SOCIAL_BLOCKER_FEED_PROMOTION_START_TRIAL",
          FIRST_POPUP_BLOCKED_NOTIFICATION_VIEW: "FIRST_POPUP_BLOCKED_NOTIFICATION_VIEW",
          FIRST_POPUP_BLOCKED_NOTIFICATION_CLICKED: "FIRST_POPUP_BLOCKED_NOTIFICATION_CLICKED",
          CLICK_SOCIAL_BLOCKER_IN_FEED_BANNER_ON_TRIAL: "CLICK_SOCIAL_BLOCKER_IN_FEED_BANNER_ON_TRIAL",
          CLICK_SOCIAL_BLOCKER_PROMOTION_DISCOUNT: "CLICK_SOCIAL_BLOCKER_PROMOTION_DISCOUNT",
          CLICK_COOKIE_PROMOTION_DISCOUNT: "CLICK_COOKIE_PROMOTION_DISCOUNT",
          PIN_TASKBAR_POPUP_VIEW: "PIN_TASKBAR_POPUP_VIEW",
          PIN_TASKBAR_POPUP_DISMISS_CLICK: "PIN_TASKBAR_POPUP_DISMISS_CLICK",
          TRIAL_MIGRATION: "TRIAL_MIGRATION",
          YOUTUBE_VIDEO_HOOK_SHOW: "YOUTUBE_VIDEOHOOK_SHOW",
          YOUTUBE_VIDEO_HOOK_SHOW_POSTTRIAL: "YOUTUBE_VIDEOHOOK_SHOW_POSTTRIAL",
          YOUTUBE_VIDEO_HOOK_CLICK: "YOUTUBE_VIDEOHOOK_CLICK",
          YOUTUBE_VIDEO_HOOK_CLICK_POSTTRIAL: "YOUTUBE_VIDEOHOOK_CLICK_POSTTRIAL",
          YOUTUBE_VIDEO_HOOK_DISMISS: "YOUTUBE_VIDEOHOOK_DISMISS",
          YOUTUBE_VIDEO_HOOK_DISMISS_POSTTRIAL: "YOUTUBE_VIDEOHOOK_DISMISS_POSTTRIAL",
          ADSBLOCKER_HOOK_SHOW: "ADSBLOCKER_HOOK_SHOW",
          ADSBLOCKER_HOOK_SHOW_POSTTRIAL: "ADSBLOCKER_HOOK_SHOW_POSTTRIAL",
          ADSBLOCKER_HOOK_CLICK: "ADSBLOCKER_HOOK_CLICK",
          ADSBLOCKER_HOOK_CLICK_POSTTRIAL: "ADSBLOCKER_HOOK_CLICK_POSTTRIAL",
          ADSBLOCKER_HOOK_DISMISS: "ADSBLOCKER_HOOK_DISMISS",
          ADSBLOCKER_HOOK_DISMISS_POSTTRIAL: "ADSBLOCKER_HOOK_DISMISS_POSTTRIAL",
          RATE_US_VIEW: "RATE_US_VIEW",
          RATE_US_POST_FEEDBACK_VIEW: "RATE_US_POST_FEEDBACK_VIEW",
          RATE_US_CLICK_DISMISS: "RATE_US_CLICK_DISMISS",
          RATE_US_CLICK_SUBMIT: "RATE_US_CLICK_SUBMIT",
          RATE_US_CLICK_STAR: "RATE_US_CLICK_STAR",
          RATE_US_CLICK_DISMISS_FEEDBACK: "RATE_US_CLICK_DISMISS_FEEDBACK",
          SOCIAL_CONTENT_INFEED_BANER_VIEW: "SOCIAL_CONTENT_INFEED_BANER_VIEW",
          SOCIAL_CONTENT_SHOW_POST_CLICK: "SOCIAL_CONTENT_SHOW_POST_CLICK",
          PANEL_ADREFRESH_CLICK_DISMISS: "PANEL_ADREFRESH_CLICK_DISMISS",
          PANEL_ADREFRESH_VIEW: "PANEL_ADREFRESH_VIEW",
          PANEL_ADREFRESH_CLICK_REFRESH: "PANEL_ADREFRESH_CLICK_REFRESH",
          PANEL_ADREFRESH_CLICK_GOPRO: "PANEL_ADREFRESH_CLICK_GOPRO",
          PANEL_ADREFRESH_PRO_VIEW: "PANEL_ADREFRESH_PRO_VIEW",
          PANEL_ADREFRESH_PRO_CLICK_REFRESH: "PANEL_ADREFRESH_PRO_CLICK_REFRESH",
          PANEL_SOCIAL_CONTENT_CLICK_SETUP: "PANEL_SOCIAL_CONTENT_CLICK_SETUP",
          PANEL_SUBEXP_DIALOG_VIEW: "PANEL_SUBEXP_DIALOG_VIEW",
          PANEL_SUBEXP_DIALOG_DISMISS_CLICK: "PANEL_SUBEXP_DIALOG_DISMISS_CLICK",
          PANEL_SUBEXP_DIALOG_RENEW_CLICK: "PANEL_SUBEXP_DIALOG_RENEW_CLICK",
          PANEL_SUBEXP_DIALOG_REMINDER_CLICK: "PANEL_SUBEXP_DIALOG_REMINDER_CLICK",
          PANEL_EULA_DIALOG_VIEW: "PANEL_EULA_DIALOG_VIEW",
          PANEL_EULA_DIALOG_CLOSE: "PANEL_EULA_DIALOG_CLOSE",
          PANEL_EULA_DIALOG_AGREE_CLICK: "PANEL_EULA_DIALOG_AGREE_CLICK",
          PANEL_EULA_DIALOG_DISAGREE_CLICK: "PANEL_EULA_DIALOG_DISAGREE_CLICK",
          PANEL_OVERLAY_BANNER_RED_VIEW: "PANEL_OVERLAY_BANNER_RED_VIEW",
          PANEL_OVERLAY_BANNER_RED_ACTIVATE_CLICK: "PANEL_OVERLAY_BANNER_RED_ACTIVATE_CLICK",
          TRACKER_BLOCKER_HOOK_DIALOG_VIEW_CONTROL: "TRACKER_BLOCKER_HOOK_DIALOG_VIEW_CONTROL",
          TRACKER_BLOCKER_HOOK_DIALOG_CLICK_CLOSE_CONTROL: "TRACKER_BLOCKER_HOOK_DIALOG_CLICK_CLOSE_CONTROL",
          TRACKER_BLOCKER_HOOK_DIALOG_CLICK_NEVER_SHOW_AGAIN_CONTROL: "TRACKER_BLOCKER_HOOK_DIALOG_CLICK_NEVER_SHOW_AGAIN_CONTROL",
          TRACKER_BLOCKER_HOOK_DIALOG_CLICK_CTA_CONTROL: "TRACKER_BLOCKER_HOOK_DIALOG_CLICK_CTA_CONTROL",
          TRACKER_BLOCKER_HOOK_DIALOG_VIEW_TEST: "TRACKER_BLOCKER_HOOK_DIALOG_VIEW_TEST",
          TRACKER_BLOCKER_HOOK_DIALOG_CLICK_CLOSE_TEST: "TRACKER_BLOCKER_HOOK_DIALOG_CLICK_CLOSE_TEST",
          TRACKER_BLOCKER_HOOK_DIALOG_CLICK_NEVER_SHOW_AGAIN_TEST: "TRACKER_BLOCKER_HOOK_DIALOG_CLICK_NEVER_SHOW_AGAIN_TEST",
          TRACKER_BLOCKER_HOOK_DIALOG_CLICK_CTA_TEST: "TRACKER_BLOCKER_HOOK_DIALOG_CLICK_CTA_TEST"
        },
        PAGE: { PANEL: "PANEL", PANEL_SETTINGS_TAB: "PANEL_SETTINGS_TAB" },
        FEATURE: {
          SCREEN: "SCREEN",
          WHATS_NEW_CARD: "WHATS_NEW_CARD",
          WHATS_NEW_CARD_CTA: "WHATS_NEW_CARD_CTA",
          SPECIAL_OFFER_CARD: "SPECIAL_OFFER_CARD",
          SPECIAL_OFFER_CARD_PROCTA: "SPECIAL_OFFER_CARD_PROCTA",
          SPECIAL_OFFER_CARD_REMIND_LATER: "SPECIAL_OFFER_CARD_REMIND_LATER",
          SPECIAL_OFFER_CARD_X: "SPECIAL_OFFER_CARD_X",
          EXTENSION_DISABLED_CARD: "EXTENSION_DISABLED_CARD",
          EXTENSION_DISABLED_CARD_CTA: "EXTENSION_DISABLED_CARD_CTA",
          HEADER_GO_PRO: "HEADER_GO_PRO",
          HEADER_MENU: "HEADER_MENU",
          DROP_MENU_SETTINGS: "DROP_MENU_SETTINGS",
          DROP_MENU_LOGIN: "DROP_MENU_LOGIN",
          DROP_MENU_LOGOUT: "DROP_MENU_LOGOUT",
          DROP_MENU_DISABLE: "DROP_MENU_DISABLE",
          DROP_MENU_ENABLE: "DROP_MENU_ENABLE",
          WHITELIST_SITE: "WHITELIST_SITE",
          HIDE_DISTRACTIONS: "HIDE_DISTRACTIONS",
          HIDE_DISTRACTIONS_BACK: "HIDE_DISTRACTIONS_BACK",
          HIDE_DISTRACTIONS_REMOVE_ELEMENT: "HIDE_DISTRACTIONS_REMOVE_ELEMENT",
          HIDE_DISTRACTIONS_REMOVE_OVERLAY: "HIDE_DISTRACTIONS_REMOVE_OVERLAY",
          HIDE_DISTRACTIONS_REPORT_MISSED_POPUP: "HIDE_DISTRACTIONS_REPORT_MISSED_POPUP",
          HIDE_DISTRACTIONS_REPORT_MISSED_POPUP_CONFIRMATION: "HIDE_DISTRACTIONS_REPORT_MISSED_POPUP_CONFIRMATION",
          STATISTICS_TAB: "STATISTICS_TAB",
          STATISTICS_TAB_UN_BLOCKED: "STATISTICS_TAB_UN_BLOCKED",
          STATISTICS_TAB_BLOCKED: "STATISTICS_TAB_BLOCKED",
          STATISTICS_TAB_GO_PRO_CTA: "STATISTICS_TAB_GO_PRO_CTA",
          SETTINGS_TAB: "SETTINGS_TAB",
          POPUPS: "POPUPS",
          OVERLAYS: "OVERLAYS",
          COOKIE_CRUMBLER: "COOKIE_CRUMBLER",
          FACEBOOK: "FACEBOOK",
          PUSH_NOTIFICATION: "PUSH_NOTIFICATION",
          ADS_BLOCKER: "ADS_BLOCKER",
          YOUTUBE_BLOCKER: "YOUTUBE_BLOCKER",
          ADVANCED_SETTINGS: "ADVANCED_SETTINGS",
          SOCIAL_CONTENT_BLOCKER: "SOCIAL_CONTENT_BLOCKER"
        },
        EVENT_TYPE: {
          VIEW: "VIEW",
          CLICK: "CLICK",
          CLOSE: "CLOSE",
          TOGGLE_ON: "TOGGLE_ON",
          TOGGLE_OFF: "TOGGLE_OFF",
          PANEL_SPECIAL_OFFER_X_CLICK: "PANEL_SPECIAL_OFFER_X_CLICK",
          PANEL_SPECIAL_OFFER_MAYBELATER_CLICK: "PANEL_SPECIAL_OFFER_MAYBELATER_CLICK",
          PANEL_SPECIAL_OFFER_GOPRO_CLICK: "PANEL_SPECIAL_OFFER_GOPRO_CLICK",
          PANEL_SPECIAL_OFFER_GOPRO_VIEW: "PANEL_SPECIAL_OFFER_GOPRO_VIEW",
          TRIAL_MIGRATION: "TRIAL_MIGRATION",
          START_TRIAL: "START_TRIAL"
        }
      },
      D = {
        SEGMENT_ALARM: "segmentUpdate",
        TRACKERSBLOCKER_ALARM: "trackersBlockerConfigAlarm",
        ADSBLOCKER_ALARM: "adsBlockerConfigAlarm",
        YOUTUBEBLOCKER_ALARM: "youtubeBlockerConfigAlarm",
        COOKIE_CRUMBLER_ALARM: "cookieCrumblerConfigAlarm"
      },
      P = { CONTENT_SETTINGS: "contentSettings", ALL_URLS: "<all_urls>", BLOCK: "block", ASK: "ask" },
      w = {
        HIDDEN_PROPERTY: "{display: none !important ; visibility : hidden !important ; opacity : 0 !important}",
        DISPLAY: "display",
        VISIBILITY: "visibility",
        OPACITY: "opacity"
      },
      k = { KEY_CONFIG_STORAGE: "adsBlockerConfig" },
      K = { KEY_CONFIG_STORAGE: "trackersBlockerConfig" },
      M = { KEY_CONFIG_STORAGE: "youtubeBlockerConfig" },
      B = "pbYtHANDLED",
      F = "youtube.com",
      U = { HIDE: "hide", CLICK: "click", VIDEO: "video" },
      H = { ADS_HOOK: "10000" },
      G = { COLORS: { orange: "#ffc866", green: " #2ebd92" } },
      j = {
        EXTENSION_OFF: {
          BadgeColor: "#c53929",
          TextColor: "#FFFFFF",
          BadgeIcon: "/images/icon128_disabled.png",
          Priority: 3,
          InitialText: "OFF"
        },
        WHATSNEW: { BadgeColor: "#5B96EE", TextColor: "#FFFFFF", Priority: 2, InitialText: "NEW", BadgeIcon: "/images/icon128.png" },
        DISTRACTION: {
          BadgeColor: "#8ab4f8",
          TextColor: "#FFFFFF",
          Priority: 1,
          InitialText: "",
          BadgeIcon: "/images/icon128.png",
          Tabs: []
        }
      },
      W = { PAYMENT_PENDING: 0, PAYMENT_RECIEVED: 1, FREE_TRIAL: 2, PAYMENT_DEFERED: 3, CANCELED: 4, REFUNDED: 5, PAUSED: 6 },
      V = { REMINDER_INTERVAL: 24, REMINDER_TMP_INTERVAL: 12, PERIOD_DAYS_TO_DISPLAY: 7, FEATURE_ACTIVE_DATE: "2023-09-11 00:00:00" },
      q = {
        IFRAME_SOCIAL_HOOK: "IFRAME_SOCIAL_HOOK",
        IFRAME_COOKIE_HOOK: "IFRAME_COOKIE_HOOK",
        IFRAME_ADS_HOOK_PREFIX: "IFRAME_ADS_HOOK_",
        IFRAME_TRACKER_HOOK: "IFRAME_TRACKER_HOOK",
        EXTENSION_PANEL_SETTINGS_PREFIX: "EXTENSION_PANEL_SETTINGS_",
        EXTENSION_PANEL_GO_PRO: "EXTENSION_PANEL_GO_PRO",
        EXTENSION_PANEL_STATS_GO_PRO: "EXTENSION_PANEL_STATS_GO_PRO"
      };
  },
  274: function (e, t, n) {
    "use strict";
    n.r(t);
    var o = n(32),
      r = n.n(o),
      i = n(35),
      a = n(28);
    class message_Message {
      constructor(e) {
        return (this.template = r()("#message-template").html()), (this.message = this.render({ options: e })), r()(this);
      }
      render({ options: e }) {
        const t = r()(this.template).addClass(`${e.size} ${e.cssClass}`).appendTo("body");
        return (
          e.icon &&
            t
              .find(".message-icon")
              .html('<img src="' + e.icon + '">')
              .removeClass("hidden"),
          e.title && t.find(".message-title").html(e.title).removeClass("hidden"),
          e.subTitle && t.find(".message-subtitle").html(e.subTitle).removeClass("hidden"),
          e.subTitleBold && t.find(".message-subtitle-bold").html(e.subTitleBold).removeClass("hidden"),
          this.initEvents({ message: t, options: e }),
          this.initButtons({ message: t, options: e }),
          parent.postMessage({ action: "pb-message-display", source: e.source, toastId: e.id }, "*"),
          t
        );
      }
      initEvents({ message: e, options: t }) {
        e.on("click", "div[data-id]", (e) => {
          parent.postMessage({ action: "pb-message-close", triggerEvent: !1, quickClose: !0, toastId: t.id }, "*");
        }),
          e.on("mouseover click", ".message-collapsed", () => {
            if (
              (parent.postMessage({ action: "pb-message-open", triggerEvent: !0, source: t.source, toastId: t.id }, "*"),
              e.toggleClass("big maximized"),
              e.find(".message-opened").removeClass("hidden"),
              e.find(".message-collapsed").addClass("hidden"),
              t.buttons.length)
            ) {
              let n = e.find(".message-buttons").removeClass("hidden");
              t.buttons.forEach((e) => {
                let o = r()(
                  `<button class="button">\n              <span class="button-content">\n                <div class= ${e.id} ></div>\n                <div class = button-text>${e.label}</div>\n              </span>\n              <div class="chevron-right"/>\n            </button>`
                );
                o.on("click", (n) => {
                  parent.postMessage({ action: "pb-message-btn-click", id: e.id, source: t.source, toastId: t.id }, "*"),
                    this.prevntBrowserBlock({ id: e.id, options: t });
                }),
                  n.append(o);
              });
            }
            this.initButtons({ message: e, options: t });
          }),
          e.on("click", ".message-close", () => {
            parent.postMessage({ action: "pb-message-close", toastId: t.id }, "*");
          });
      }
      initButtons({ message: e, options: t }) {
        e.find(".message-buttons > button").each((e, t) => {
          (t = r()(t)).html(t.data("label"));
        });
      }
      prevntBrowserBlock({ id: e, options: t }) {
        let n = [];
        switch (e) {
          case "allowOnce":
          case "allowAlways":
            n = t.props.winArgs;
            break;
          case "twitter":
            n = [t.config.twitter_share_link, "poper_share", "width=730,height=260,top=150,left=" + (screen.availWidth / 2 - 365)];
            break;
          case "facebook":
            n = [t.config.facebook_share_link, "poper_share", "width=730,height=360,top=150,left=" + (screen.availWidth / 2 - 365)];
            break;
          default:
            return;
        }
        /^https?\:/.test(n[0]) || /^about:blank/i.test(n[0]) || (n[0] = "http:" + (/^\/\//.test(n[0]) ? "" : "//") + n[0]),
          /firefox/i.test(navigator.userAgent) && (n[0] = "firefox/ff-open.html?u=" + encodeURIComponent(n[0])),
          window.open(n[0] || "", n[1] || "", n[2] || "");
      }
    }
    ((e) => {
      let t = decodeURIComponent(atob(location.search.substr(1))),
        n = JSON.parse(t);
      e(() => {
        !(function showNotification(e) {
          new message_Message({
            config: i.a,
            id: e.id,
            title: e.title,
            subTitle: e.subTitle,
            subTitleBold: e.subTitleBold,
            icon: e.icon,
            showHide: e.showHide,
            showResize: e.showResize,
            source: e.source,
            size: e.size,
            cssClass: e.cssClass,
            buttons: e.buttons.map((e) => ({ id: e, label: Object(a.f)(e), labelMin: Object(a.f)(e + "_min", e) })),
            props: e.props
          }).on("copyAppStoreLink", () => {
            Object(a.b)(i.a["appStore_" + Object(a.e)()]);
          });
        })(n);
      });
    })(r.a.noConflict(!0));
  },
  28: function (e, t, n) {
    "use strict";
    n.d(t, "i", function () {
      return getPrivacyPolicy;
    }),
      n.d(t, "k", function () {
        return getTabUrl;
      }),
      n.d(t, "c", function () {
        return executeCode;
      }),
      n.d(t, "m", function () {
        return isGoogleDomain;
      }),
      n.d(t, "n", function () {
        return randId;
      }),
      n.d(t, "a", function () {
        return GUID;
      }),
      n.d(t, "g", function () {
        return getManifestInfo;
      }),
      n.d(t, "b", function () {
        return copyTextToClipboard;
      }),
      n.d(t, "e", function () {
        return getBrowser;
      }),
      n.d(t, "j", function () {
        return getRandomInt;
      }),
      n.d(t, "d", function () {
        return getAbsoluteURL;
      }),
      n.d(t, "f", function () {
        return getI18N;
      }),
      n.d(t, "l", function () {
        return insertElementAfterElement;
      }),
      n.d(t, "h", function () {
        return getParentByLevel;
      });
    var o = n(35),
      r = n(0);
    function getPrivacyPolicy(e = null) {
      const t = o.a["privacy_policy_" + getBrowser()];
      return e ? e.replace(/%s/, t) : t;
    }
    function getTabUrl() {
      return new Promise((e) => {
        chrome.runtime.sendMessage({ name: "requestTabUrl" }, (t) => {
          try {
            let n = new URL(t.url);
            e({ domain: n.hostname, href: n.href });
          } catch (t) {
            e({ domain: document.domain, href: location.href });
          }
        });
      });
    }
    function executeCode(e) {
      let t = document.createElement("script");
      (t.textContent = e), insertBeforeRoot(t), t.remove();
    }
    function isGoogleDomain(e) {
      return new RegExp(".*google..*").test(e);
    }
    const getRandId = async () =>
      new Promise((e) => {
        chrome.storage.local.get(r.h.RDID, (t) => {
          e(t[r.h.RDID]);
        });
      });
    async function randId() {
      if (!(await getRandId())) {
        var rr = function () {
          return ((65536 * (1 + Math.random(Date.now() + 14))) | 0).toString(28).substring(1);
        };
        const e = rr() + rr() + rr() + rr() + rr() + rr() + rr() + rr() + rr();
        chrome.storage.local.set({ [r.h.RDID]: e });
      }
      return await getRandId();
    }
    function GUID() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
        var t = (16 * Math.random()) | 0;
        return ("x" == e ? t : (3 & t) | 8).toString(16);
      });
    }
    function getManifestInfo() {
      return chrome.runtime.getManifest();
    }
    function copyTextToClipboard(e) {
      var t = document.createElement("textarea");
      (t.style.position = "fixed"),
        (t.style.top = 0),
        (t.style.left = 0),
        (t.style.width = "2em"),
        (t.style.height = "2em"),
        (t.style.padding = 0),
        (t.style.border = "none"),
        (t.style.outline = "none"),
        (t.style.boxShadow = "none"),
        (t.style.background = "transparent"),
        (t.value = e),
        document.body.appendChild(t),
        t.select();
      try {
        document.execCommand("copy");
      } catch (e) {}
      document.body.removeChild(t);
    }
    function getBrowser() {
      return /firefox/i.test(navigator.userAgent) ? "FF" : "CH";
    }
    function getRandomInt(e, t) {
      return Math.floor(Math.random() * (t - e)) + e;
    }
    function getAbsoluteURL(e) {
      return /^about:blank/i.test(e) || /^(https?:)?\/\//.test(e) ? e : (e = location.origin + (/^\//.test(e) ? "" : "/") + e);
    }
    function getI18N(e, t) {
      return chrome.i18n.getMessage(e) || chrome.i18n.getMessage(t || e) || e;
    }
    function insertBeforeRoot(e) {
      const t = document.head;
      if (t) t.appendChild(e);
      else {
        const t = document.documentElement;
        t.insertBefore(e, t.firstChild);
      }
    }
    const insertElementAfterElement = (e, t) => {
        t.parentNode.insertBefore(e, t.nextSibling);
      },
      getParentByLevel = (e, t) => {
        let n = e;
        for (let e = t; e > 0; e--) {
          if (!n) return n;
          n = n.parentNode;
        }
        return n;
      };
  },
  32: function (e, t, n) {
    var o;
    !(function (t, n) {
      "use strict";
      "object" == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : this, function (n, r) {
      "use strict";
      var i = [],
        a = Object.getPrototypeOf,
        s = i.slice,
        c = i.flat
          ? function (e) {
              return i.flat.call(e);
            }
          : function (e) {
              return i.concat.apply([], e);
            },
        l = i.push,
        u = i.indexOf,
        p = {},
        d = p.toString,
        f = p.hasOwnProperty,
        _ = f.toString,
        h = _.call(Object),
        E = {},
        m = function isFunction2(e) {
          return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
        },
        O = function isWindow2(e) {
          return null != e && e === e.window;
        },
        T = n.document,
        g = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function DOMEval(e, t, n) {
        var o,
          r,
          i = (n = n || T).createElement("script");
        if (((i.text = e), t)) for (o in g) (r = t[o] || (t.getAttribute && t.getAttribute(o))) && i.setAttribute(o, r);
        n.head.appendChild(i).parentNode.removeChild(i);
      }
      function toType(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? p[d.call(e)] || "object" : typeof e;
      }
      var jQuery = function (e, t) {
        return new jQuery.fn.init(e, t);
      };
      function isArrayLike(e) {
        var t = !!e && "length" in e && e.length,
          n = toType(e);
        return !m(e) && !O(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
      }
      (jQuery.fn = jQuery.prototype =
        {
          jquery: "3.6.4",
          constructor: jQuery,
          length: 0,
          toArray: function () {
            return s.call(this);
          },
          get: function (e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
          },
          pushStack: function (e) {
            var t = jQuery.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return jQuery.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              jQuery.map(this, function (t, n) {
                return e.call(t, n, t);
              })
            );
          },
          slice: function () {
            return this.pushStack(s.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              jQuery.grep(this, function (e, t) {
                return (t + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              jQuery.grep(this, function (e, t) {
                return t % 2;
              })
            );
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: l,
          sort: i.sort,
          splice: i.splice
        }),
        (jQuery.extend = jQuery.fn.extend =
          function () {
            var e,
              t,
              n,
              o,
              r,
              i,
              a = arguments[0] || {},
              s = 1,
              c = arguments.length,
              l = !1;
            for (
              "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
                "object" == typeof a || m(a) || (a = {}),
                s === c && ((a = this), s--);
              s < c;
              s++
            )
              if (null != (e = arguments[s]))
                for (t in e)
                  (o = e[t]),
                    "__proto__" !== t &&
                      a !== o &&
                      (l && o && (jQuery.isPlainObject(o) || (r = Array.isArray(o)))
                        ? ((n = a[t]),
                          (i = r && !Array.isArray(n) ? [] : r || jQuery.isPlainObject(n) ? n : {}),
                          (r = !1),
                          (a[t] = jQuery.extend(l, i, o)))
                        : void 0 !== o && (a[t] = o));
            return a;
          }),
        jQuery.extend({
          expando: "jQuery" + ("3.6.4" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== d.call(e)) &&
              (!(t = a(e)) || ("function" == typeof (n = f.call(t, "constructor") && t.constructor) && _.call(n) === h))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, n) {
            DOMEval(e, { nonce: t && t.nonce }, n);
          },
          each: function (e, t) {
            var n,
              o = 0;
            if (isArrayLike(e)) for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++);
            else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
            return e;
          },
          makeArray: function (e, t) {
            var n = t || [];
            return null != e && (isArrayLike(Object(e)) ? jQuery.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n;
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : u.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, o = 0, r = e.length; o < n; o++) e[r++] = t[o];
            return (e.length = r), e;
          },
          grep: function (e, t, n) {
            for (var o = [], r = 0, i = e.length, a = !n; r < i; r++) !t(e[r], r) !== a && o.push(e[r]);
            return o;
          },
          map: function (e, t, n) {
            var o,
              r,
              i = 0,
              a = [];
            if (isArrayLike(e)) for (o = e.length; i < o; i++) null != (r = t(e[i], i, n)) && a.push(r);
            else for (i in e) null != (r = t(e[i], i, n)) && a.push(r);
            return c(a);
          },
          guid: 1,
          support: E
        }),
        "function" == typeof Symbol && (jQuery.fn[Symbol.iterator] = i[Symbol.iterator]),
        jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
          p["[object " + t + "]"] = t.toLowerCase();
        });
      var C = (function (e) {
        var t,
          n,
          o,
          r,
          i,
          a,
          s,
          c,
          l,
          u,
          p,
          d,
          f,
          _,
          h,
          E,
          m,
          O,
          T,
          g = "sizzle" + 1 * new Date(),
          C = e.document,
          I = 0,
          A = 0,
          S = createCache(),
          y = createCache(),
          v = createCache(),
          N = createCache(),
          sortOrder = function (e, t) {
            return e === t && (p = !0), 0;
          },
          L = {}.hasOwnProperty,
          R = [],
          b = R.pop,
          x = R.push,
          D = R.push,
          P = R.slice,
          indexOf2 = function (e, t) {
            for (var n = 0, o = e.length; n < o; n++) if (e[n] === t) return n;
            return -1;
          },
          w = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          k = "[\\x20\\t\\r\\n\\f]",
          K = "(?:\\\\[\\da-fA-F]{1,6}" + k + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          M =
            "\\[" +
            k +
            "*(" +
            K +
            ")(?:" +
            k +
            "*([*^$|!~]?=)" +
            k +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            K +
            "))|)" +
            k +
            "*\\]",
          B = ":(" + K + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
          F = new RegExp(k + "+", "g"),
          U = new RegExp("^" + k + "+|((?:^|[^\\\\])(?:\\\\.)*)" + k + "+$", "g"),
          H = new RegExp("^" + k + "*," + k + "*"),
          G = new RegExp("^" + k + "*([>+~]|" + k + ")" + k + "*"),
          j = new RegExp(k + "|>"),
          W = new RegExp(B),
          V = new RegExp("^" + K + "$"),
          q = {
            ID: new RegExp("^#(" + K + ")"),
            CLASS: new RegExp("^\\.(" + K + ")"),
            TAG: new RegExp("^(" + K + "|[*])"),
            ATTR: new RegExp("^" + M),
            PSEUDO: new RegExp("^" + B),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                k +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                k +
                "*(?:([+-]|)" +
                k +
                "*(\\d+)|))" +
                k +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + w + ")$", "i"),
            needsContext: new RegExp(
              "^" + k + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + k + "*((?:-\\d)?\\d*)" + k + "*\\)|)(?=[^-]|$)",
              "i"
            )
          },
          z = /HTML$/i,
          Y = /^(?:input|select|textarea|button)$/i,
          X = /^h\d$/i,
          $ = /^[^{]+\{\s*\[native \w/,
          Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          J = /[+~]/,
          Z = new RegExp("\\\\[\\da-fA-F]{1,6}" + k + "?|\\\\([^\\r\\n\\f])", "g"),
          funescape = function (e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
          },
          ee = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          fcssescape = function (e, t) {
            return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
          },
          unloadHandler = function () {
            d();
          },
          te = addCombinator(
            function (e) {
              return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
            },
            { dir: "parentNode", next: "legend" }
          );
        try {
          D.apply((R = P.call(C.childNodes)), C.childNodes), R[C.childNodes.length].nodeType;
        } catch (e) {
          D = {
            apply: R.length
              ? function (e, t) {
                  x.apply(e, P.call(t));
                }
              : function (e, t) {
                  for (var n = e.length, o = 0; (e[n++] = t[o++]); );
                  e.length = n - 1;
                }
          };
        }
        function Sizzle2(e, t, o, r) {
          var i,
            s,
            l,
            u,
            p,
            _,
            m,
            O = t && t.ownerDocument,
            C = t ? t.nodeType : 9;
          if (((o = o || []), "string" != typeof e || !e || (1 !== C && 9 !== C && 11 !== C))) return o;
          if (!r && (d(t), (t = t || f), h)) {
            if (11 !== C && (p = Q.exec(e)))
              if ((i = p[1])) {
                if (9 === C) {
                  if (!(l = t.getElementById(i))) return o;
                  if (l.id === i) return o.push(l), o;
                } else if (O && (l = O.getElementById(i)) && T(t, l) && l.id === i) return o.push(l), o;
              } else {
                if (p[2]) return D.apply(o, t.getElementsByTagName(e)), o;
                if ((i = p[3]) && n.getElementsByClassName && t.getElementsByClassName) return D.apply(o, t.getElementsByClassName(i)), o;
              }
            if (n.qsa && !N[e + " "] && (!E || !E.test(e)) && (1 !== C || "object" !== t.nodeName.toLowerCase())) {
              if (((m = e), (O = t), 1 === C && (j.test(e) || G.test(e)))) {
                for (
                  ((O = (J.test(e) && testContext(t.parentNode)) || t) === t && n.scope) ||
                    ((u = t.getAttribute("id")) ? (u = u.replace(ee, fcssescape)) : t.setAttribute("id", (u = g))),
                    s = (_ = a(e)).length;
                  s--;

                )
                  _[s] = (u ? "#" + u : ":scope") + " " + toSelector(_[s]);
                m = _.join(",");
              }
              try {
                return D.apply(o, O.querySelectorAll(m)), o;
              } catch (t) {
                N(e, !0);
              } finally {
                u === g && t.removeAttribute("id");
              }
            }
          }
          return c(e.replace(U, "$1"), t, o, r);
        }
        function createCache() {
          var e = [];
          return function cache(t, n) {
            return e.push(t + " ") > o.cacheLength && delete cache[e.shift()], (cache[t + " "] = n);
          };
        }
        function markFunction(e) {
          return (e[g] = !0), e;
        }
        function assert(e) {
          var t = f.createElement("fieldset");
          try {
            return !!e(t);
          } catch (e) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), (t = null);
          }
        }
        function addHandle(e, t) {
          for (var n = e.split("|"), r = n.length; r--; ) o.attrHandle[n[r]] = t;
        }
        function siblingCheck(e, t) {
          var n = t && e,
            o = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
          if (o) return o;
          if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
          return e ? 1 : -1;
        }
        function createInputPseudo(e) {
          return function (t) {
            return "input" === t.nodeName.toLowerCase() && t.type === e;
          };
        }
        function createButtonPseudo(e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e;
          };
        }
        function createDisabledPseudo(e) {
          return function (t) {
            return "form" in t
              ? t.parentNode && !1 === t.disabled
                ? "label" in t
                  ? "label" in t.parentNode
                    ? t.parentNode.disabled === e
                    : t.disabled === e
                  : t.isDisabled === e || (t.isDisabled !== !e && te(t) === e)
                : t.disabled === e
              : "label" in t && t.disabled === e;
          };
        }
        function createPositionalPseudo(e) {
          return markFunction(function (t) {
            return (
              (t = +t),
              markFunction(function (n, o) {
                for (var r, i = e([], n.length, t), a = i.length; a--; ) n[(r = i[a])] && (n[r] = !(o[r] = n[r]));
              })
            );
          });
        }
        function testContext(e) {
          return e && void 0 !== e.getElementsByTagName && e;
        }
        for (t in ((n = Sizzle2.support = {}),
        (i = Sizzle2.isXML =
          function (e) {
            var t = e && e.namespaceURI,
              n = e && (e.ownerDocument || e).documentElement;
            return !z.test(t || (n && n.nodeName) || "HTML");
          }),
        (d = Sizzle2.setDocument =
          function (e) {
            var t,
              r,
              a = e ? e.ownerDocument || e : C;
            return a != f && 9 === a.nodeType && a.documentElement
              ? ((_ = (f = a).documentElement),
                (h = !i(f)),
                C != f &&
                  (r = f.defaultView) &&
                  r.top !== r &&
                  (r.addEventListener
                    ? r.addEventListener("unload", unloadHandler, !1)
                    : r.attachEvent && r.attachEvent("onunload", unloadHandler)),
                (n.scope = assert(function (e) {
                  return (
                    _.appendChild(e).appendChild(f.createElement("div")),
                    void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                  );
                })),
                (n.cssHas = assert(function () {
                  try {
                    return f.querySelector(":has(*,:jqfake)"), !1;
                  } catch (e) {
                    return !0;
                  }
                })),
                (n.attributes = assert(function (e) {
                  return (e.className = "i"), !e.getAttribute("className");
                })),
                (n.getElementsByTagName = assert(function (e) {
                  return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length;
                })),
                (n.getElementsByClassName = $.test(f.getElementsByClassName)),
                (n.getById = assert(function (e) {
                  return (_.appendChild(e).id = g), !f.getElementsByName || !f.getElementsByName(g).length;
                })),
                n.getById
                  ? ((o.filter.ID = function (e) {
                      var t = e.replace(Z, funescape);
                      return function (e) {
                        return e.getAttribute("id") === t;
                      };
                    }),
                    (o.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && h) {
                        var n = t.getElementById(e);
                        return n ? [n] : [];
                      }
                    }))
                  : ((o.filter.ID = function (e) {
                      var t = e.replace(Z, funescape);
                      return function (e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t;
                      };
                    }),
                    (o.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && h) {
                        var n,
                          o,
                          r,
                          i = t.getElementById(e);
                        if (i) {
                          if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                          for (r = t.getElementsByName(e), o = 0; (i = r[o++]); )
                            if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                        }
                        return [];
                      }
                    })),
                (o.find.TAG = n.getElementsByTagName
                  ? function (e, t) {
                      return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                    }
                  : function (e, t) {
                      var n,
                        o = [],
                        r = 0,
                        i = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; (n = i[r++]); ) 1 === n.nodeType && o.push(n);
                        return o;
                      }
                      return i;
                    }),
                (o.find.CLASS =
                  n.getElementsByClassName &&
                  function (e, t) {
                    if (void 0 !== t.getElementsByClassName && h) return t.getElementsByClassName(e);
                  }),
                (m = []),
                (E = []),
                (n.qsa = $.test(f.querySelectorAll)) &&
                  (assert(function (e) {
                    var t;
                    (_.appendChild(e).innerHTML =
                      "<a id='" + g + "'></a><select id='" + g + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length && E.push("[*^$]=" + k + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length || E.push("\\[" + k + "*(?:value|" + w + ")"),
                      e.querySelectorAll("[id~=" + g + "-]").length || E.push("~="),
                      (t = f.createElement("input")).setAttribute("name", ""),
                      e.appendChild(t),
                      e.querySelectorAll("[name='']").length || E.push("\\[" + k + "*name" + k + "*=" + k + "*(?:''|\"\")"),
                      e.querySelectorAll(":checked").length || E.push(":checked"),
                      e.querySelectorAll("a#" + g + "+*").length || E.push(".#.+[+~]"),
                      e.querySelectorAll("\\\f"),
                      E.push("[\\r\\n\\f]");
                  }),
                  assert(function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = f.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length && E.push("name" + k + "*[*^$|!~]?="),
                      2 !== e.querySelectorAll(":enabled").length && E.push(":enabled", ":disabled"),
                      (_.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length && E.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      E.push(",.*:");
                  })),
                (n.matchesSelector = $.test(
                  (O = _.matches || _.webkitMatchesSelector || _.mozMatchesSelector || _.oMatchesSelector || _.msMatchesSelector)
                )) &&
                  assert(function (e) {
                    (n.disconnectedMatch = O.call(e, "*")), O.call(e, "[s!='']:x"), m.push("!=", B);
                  }),
                n.cssHas || E.push(":has"),
                (E = E.length && new RegExp(E.join("|"))),
                (m = m.length && new RegExp(m.join("|"))),
                (t = $.test(_.compareDocumentPosition)),
                (T =
                  t || $.test(_.contains)
                    ? function (e, t) {
                        var n = (9 === e.nodeType && e.documentElement) || e,
                          o = t && t.parentNode;
                        return (
                          e === o ||
                          !(
                            !o ||
                            1 !== o.nodeType ||
                            !(n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o))
                          )
                        );
                      }
                    : function (e, t) {
                        if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (sortOrder = t
                  ? function (e, t) {
                      if (e === t) return (p = !0), 0;
                      var o = !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        o ||
                        (1 & (o = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) ||
                        (!n.sortDetached && t.compareDocumentPosition(e) === o)
                          ? e == f || (e.ownerDocument == C && T(C, e))
                            ? -1
                            : t == f || (t.ownerDocument == C && T(C, t))
                            ? 1
                            : u
                            ? indexOf2(u, e) - indexOf2(u, t)
                            : 0
                          : 4 & o
                          ? -1
                          : 1)
                      );
                    }
                  : function (e, t) {
                      if (e === t) return (p = !0), 0;
                      var n,
                        o = 0,
                        r = e.parentNode,
                        i = t.parentNode,
                        a = [e],
                        s = [t];
                      if (!r || !i) return e == f ? -1 : t == f ? 1 : r ? -1 : i ? 1 : u ? indexOf2(u, e) - indexOf2(u, t) : 0;
                      if (r === i) return siblingCheck(e, t);
                      for (n = e; (n = n.parentNode); ) a.unshift(n);
                      for (n = t; (n = n.parentNode); ) s.unshift(n);
                      for (; a[o] === s[o]; ) o++;
                      return o ? siblingCheck(a[o], s[o]) : a[o] == C ? -1 : s[o] == C ? 1 : 0;
                    }),
                f)
              : f;
          }),
        (Sizzle2.matches = function (e, t) {
          return Sizzle2(e, null, null, t);
        }),
        (Sizzle2.matchesSelector = function (e, t) {
          if ((d(e), n.matchesSelector && h && !N[t + " "] && (!m || !m.test(t)) && (!E || !E.test(t))))
            try {
              var o = O.call(e, t);
              if (o || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return o;
            } catch (e) {
              N(t, !0);
            }
          return Sizzle2(t, f, null, [e]).length > 0;
        }),
        (Sizzle2.contains = function (e, t) {
          return (e.ownerDocument || e) != f && d(e), T(e, t);
        }),
        (Sizzle2.attr = function (e, t) {
          (e.ownerDocument || e) != f && d(e);
          var r = o.attrHandle[t.toLowerCase()],
            i = r && L.call(o.attrHandle, t.toLowerCase()) ? r(e, t, !h) : void 0;
          return void 0 !== i ? i : n.attributes || !h ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }),
        (Sizzle2.escape = function (e) {
          return (e + "").replace(ee, fcssescape);
        }),
        (Sizzle2.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (Sizzle2.uniqueSort = function (e) {
          var t,
            o = [],
            r = 0,
            i = 0;
          if (((p = !n.detectDuplicates), (u = !n.sortStable && e.slice(0)), e.sort(sortOrder), p)) {
            for (; (t = e[i++]); ) t === e[i] && (r = o.push(i));
            for (; r--; ) e.splice(o[r], 1);
          }
          return (u = null), e;
        }),
        (r = Sizzle2.getText =
          function (e) {
            var t,
              n = "",
              o = 0,
              i = e.nodeType;
            if (i) {
              if (1 === i || 9 === i || 11 === i) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
              } else if (3 === i || 4 === i) return e.nodeValue;
            } else for (; (t = e[o++]); ) n += r(t);
            return n;
          }),
        ((o = Sizzle2.selectors =
          {
            cacheLength: 50,
            createPseudo: markFunction,
            match: q,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(Z, funescape)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, funescape)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || Sizzle2.error(e[0]),
                      (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && Sizzle2.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                var t,
                  n = !e[6] && e[2];
                return q.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        W.test(n) &&
                        (t = a(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              }
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(Z, funescape).toLowerCase();
                return "*" === e
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function (e) {
                var t = S[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + k + ")" + e + "(" + k + "|$)")) &&
                    S(e, function (e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || ""
                      );
                    }))
                );
              },
              ATTR: function (e, t, n) {
                return function (o) {
                  var r = Sizzle2.attr(o, e);
                  return null == r
                    ? "!=" === t
                    : !t ||
                        ((r += ""),
                        "=" === t
                          ? r === n
                          : "!=" === t
                          ? r !== n
                          : "^=" === t
                          ? n && 0 === r.indexOf(n)
                          : "*=" === t
                          ? n && r.indexOf(n) > -1
                          : "$=" === t
                          ? n && r.slice(-n.length) === n
                          : "~=" === t
                          ? (" " + r.replace(F, " ") + " ").indexOf(n) > -1
                          : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function (e, t, n, o, r) {
                var i = "nth" !== e.slice(0, 3),
                  a = "last" !== e.slice(-4),
                  s = "of-type" === t;
                return 1 === o && 0 === r
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (t, n, c) {
                      var l,
                        u,
                        p,
                        d,
                        f,
                        _,
                        h = i !== a ? "nextSibling" : "previousSibling",
                        E = t.parentNode,
                        m = s && t.nodeName.toLowerCase(),
                        O = !c && !s,
                        T = !1;
                      if (E) {
                        if (i) {
                          for (; h; ) {
                            for (d = t; (d = d[h]); ) if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                            _ = h = "only" === e && !_ && "nextSibling";
                          }
                          return !0;
                        }
                        if (((_ = [a ? E.firstChild : E.lastChild]), a && O)) {
                          for (
                            T =
                              (f =
                                (l = (u = (p = (d = E)[g] || (d[g] = {}))[d.uniqueID] || (p[d.uniqueID] = {}))[e] || [])[0] === I &&
                                l[1]) && l[2],
                              d = f && E.childNodes[f];
                            (d = (++f && d && d[h]) || (T = f = 0) || _.pop());

                          )
                            if (1 === d.nodeType && ++T && d === t) {
                              u[e] = [I, f, T];
                              break;
                            }
                        } else if (
                          (O &&
                            (T = f =
                              (l = (u = (p = (d = t)[g] || (d[g] = {}))[d.uniqueID] || (p[d.uniqueID] = {}))[e] || [])[0] === I && l[1]),
                          !1 === T)
                        )
                          for (
                            ;
                            (d = (++f && d && d[h]) || (T = f = 0) || _.pop()) &&
                            ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) ||
                              !++T ||
                              (O && ((u = (p = d[g] || (d[g] = {}))[d.uniqueID] || (p[d.uniqueID] = {}))[e] = [I, T]), d !== t));

                          );
                        return (T -= r) === o || (T % o == 0 && T / o >= 0);
                      }
                    };
              },
              PSEUDO: function (e, t) {
                var n,
                  r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || Sizzle2.error("unsupported pseudo: " + e);
                return r[g]
                  ? r(t)
                  : r.length > 1
                  ? ((n = [e, e, "", t]),
                    o.setFilters.hasOwnProperty(e.toLowerCase())
                      ? markFunction(function (e, n) {
                          for (var o, i = r(e, t), a = i.length; a--; ) e[(o = indexOf2(e, i[a]))] = !(n[o] = i[a]);
                        })
                      : function (e) {
                          return r(e, 0, n);
                        })
                  : r;
              }
            },
            pseudos: {
              not: markFunction(function (e) {
                var t = [],
                  n = [],
                  o = s(e.replace(U, "$1"));
                return o[g]
                  ? markFunction(function (e, t, n, r) {
                      for (var i, a = o(e, null, r, []), s = e.length; s--; ) (i = a[s]) && (e[s] = !(t[s] = i));
                    })
                  : function (e, r, i) {
                      return (t[0] = e), o(t, null, i, n), (t[0] = null), !n.pop();
                    };
              }),
              has: markFunction(function (e) {
                return function (t) {
                  return Sizzle2(e, t).length > 0;
                };
              }),
              contains: markFunction(function (e) {
                return (
                  (e = e.replace(Z, funescape)),
                  function (t) {
                    return (t.textContent || r(t)).indexOf(e) > -1;
                  }
                );
              }),
              lang: markFunction(function (e) {
                return (
                  V.test(e || "") || Sizzle2.error("unsupported lang: " + e),
                  (e = e.replace(Z, funescape).toLowerCase()),
                  function (t) {
                    var n;
                    do {
                      if ((n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")))
                        return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root: function (e) {
                return e === _;
              },
              focus: function (e) {
                return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
              },
              enabled: createDisabledPseudo(!1),
              disabled: createDisabledPseudo(!0),
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
              },
              selected: function (e) {
                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function (e) {
                return !o.pseudos.empty(e);
              },
              header: function (e) {
                return X.test(e.nodeName);
              },
              input: function (e) {
                return Y.test(e.nodeName);
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function (e) {
                var t;
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                );
              },
              first: createPositionalPseudo(function () {
                return [0];
              }),
              last: createPositionalPseudo(function (e, t) {
                return [t - 1];
              }),
              eq: createPositionalPseudo(function (e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: createPositionalPseudo(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: createPositionalPseudo(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: createPositionalPseudo(function (e, t, n) {
                for (var o = n < 0 ? n + t : n > t ? t : n; --o >= 0; ) e.push(o);
                return e;
              }),
              gt: createPositionalPseudo(function (e, t, n) {
                for (var o = n < 0 ? n + t : n; ++o < t; ) e.push(o);
                return e;
              })
            }
          }).pseudos.nth = o.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
          o.pseudos[t] = createInputPseudo(t);
        for (t in { submit: !0, reset: !0 }) o.pseudos[t] = createButtonPseudo(t);
        function setFilters() {}
        function toSelector(e) {
          for (var t = 0, n = e.length, o = ""; t < n; t++) o += e[t].value;
          return o;
        }
        function addCombinator(e, t, n) {
          var o = t.dir,
            r = t.next,
            i = r || o,
            a = n && "parentNode" === i,
            s = A++;
          return t.first
            ? function (t, n, r) {
                for (; (t = t[o]); ) if (1 === t.nodeType || a) return e(t, n, r);
                return !1;
              }
            : function (t, n, c) {
                var l,
                  u,
                  p,
                  d = [I, s];
                if (c) {
                  for (; (t = t[o]); ) if ((1 === t.nodeType || a) && e(t, n, c)) return !0;
                } else
                  for (; (t = t[o]); )
                    if (1 === t.nodeType || a)
                      if (((u = (p = t[g] || (t[g] = {}))[t.uniqueID] || (p[t.uniqueID] = {})), r && r === t.nodeName.toLowerCase()))
                        t = t[o] || t;
                      else {
                        if ((l = u[i]) && l[0] === I && l[1] === s) return (d[2] = l[2]);
                        if (((u[i] = d), (d[2] = e(t, n, c)))) return !0;
                      }
                return !1;
              };
        }
        function elementMatcher(e) {
          return e.length > 1
            ? function (t, n, o) {
                for (var r = e.length; r--; ) if (!e[r](t, n, o)) return !1;
                return !0;
              }
            : e[0];
        }
        function condense(e, t, n, o, r) {
          for (var i, a = [], s = 0, c = e.length, l = null != t; s < c; s++)
            (i = e[s]) && ((n && !n(i, o, r)) || (a.push(i), l && t.push(s)));
          return a;
        }
        function setMatcher(e, t, n, o, r, i) {
          return (
            o && !o[g] && (o = setMatcher(o)),
            r && !r[g] && (r = setMatcher(r, i)),
            markFunction(function (i, a, s, c) {
              var l,
                u,
                p,
                d = [],
                f = [],
                _ = a.length,
                h =
                  i ||
                  (function multipleContexts(e, t, n) {
                    for (var o = 0, r = t.length; o < r; o++) Sizzle2(e, t[o], n);
                    return n;
                  })(t || "*", s.nodeType ? [s] : s, []),
                E = !e || (!i && t) ? h : condense(h, d, e, s, c),
                m = n ? (r || (i ? e : _ || o) ? [] : a) : E;
              if ((n && n(E, m, s, c), o))
                for (l = condense(m, f), o(l, [], s, c), u = l.length; u--; ) (p = l[u]) && (m[f[u]] = !(E[f[u]] = p));
              if (i) {
                if (r || e) {
                  if (r) {
                    for (l = [], u = m.length; u--; ) (p = m[u]) && l.push((E[u] = p));
                    r(null, (m = []), l, c);
                  }
                  for (u = m.length; u--; ) (p = m[u]) && (l = r ? indexOf2(i, p) : d[u]) > -1 && (i[l] = !(a[l] = p));
                }
              } else (m = condense(m === a ? m.splice(_, m.length) : m)), r ? r(null, a, m, c) : D.apply(a, m);
            })
          );
        }
        function matcherFromTokens(e) {
          for (
            var t,
              n,
              r,
              i = e.length,
              a = o.relative[e[0].type],
              s = a || o.relative[" "],
              c = a ? 1 : 0,
              u = addCombinator(
                function (e) {
                  return e === t;
                },
                s,
                !0
              ),
              p = addCombinator(
                function (e) {
                  return indexOf2(t, e) > -1;
                },
                s,
                !0
              ),
              d = [
                function (e, n, o) {
                  var r = (!a && (o || n !== l)) || ((t = n).nodeType ? u(e, n, o) : p(e, n, o));
                  return (t = null), r;
                }
              ];
            c < i;
            c++
          )
            if ((n = o.relative[e[c].type])) d = [addCombinator(elementMatcher(d), n)];
            else {
              if ((n = o.filter[e[c].type].apply(null, e[c].matches))[g]) {
                for (r = ++c; r < i && !o.relative[e[r].type]; r++);
                return setMatcher(
                  c > 1 && elementMatcher(d),
                  c > 1 && toSelector(e.slice(0, c - 1).concat({ value: " " === e[c - 2].type ? "*" : "" })).replace(U, "$1"),
                  n,
                  c < r && matcherFromTokens(e.slice(c, r)),
                  r < i && matcherFromTokens((e = e.slice(r))),
                  r < i && toSelector(e)
                );
              }
              d.push(n);
            }
          return elementMatcher(d);
        }
        return (
          (setFilters.prototype = o.filters = o.pseudos),
          (o.setFilters = new setFilters()),
          (a = Sizzle2.tokenize =
            function (e, t) {
              var n,
                r,
                i,
                a,
                s,
                c,
                l,
                u = y[e + " "];
              if (u) return t ? 0 : u.slice(0);
              for (s = e, c = [], l = o.preFilter; s; ) {
                for (a in ((n && !(r = H.exec(s))) || (r && (s = s.slice(r[0].length) || s), c.push((i = []))),
                (n = !1),
                (r = G.exec(s)) && ((n = r.shift()), i.push({ value: n, type: r[0].replace(U, " ") }), (s = s.slice(n.length))),
                o.filter))
                  !(r = q[a].exec(s)) ||
                    (l[a] && !(r = l[a](r))) ||
                    ((n = r.shift()), i.push({ value: n, type: a, matches: r }), (s = s.slice(n.length)));
                if (!n) break;
              }
              return t ? s.length : s ? Sizzle2.error(e) : y(e, c).slice(0);
            }),
          (s = Sizzle2.compile =
            function (e, t) {
              var n,
                r = [],
                i = [],
                s = v[e + " "];
              if (!s) {
                for (t || (t = a(e)), n = t.length; n--; ) (s = matcherFromTokens(t[n]))[g] ? r.push(s) : i.push(s);
                (s = v(
                  e,
                  (function matcherFromGroupMatchers(e, t) {
                    var n = t.length > 0,
                      r = e.length > 0,
                      superMatcher = function (i, a, s, c, u) {
                        var p,
                          _,
                          E,
                          m = 0,
                          O = "0",
                          T = i && [],
                          g = [],
                          C = l,
                          A = i || (r && o.find.TAG("*", u)),
                          S = (I += null == C ? 1 : Math.random() || 0.1),
                          y = A.length;
                        for (u && (l = a == f || a || u); O !== y && null != (p = A[O]); O++) {
                          if (r && p) {
                            for (_ = 0, a || p.ownerDocument == f || (d(p), (s = !h)); (E = e[_++]); )
                              if (E(p, a || f, s)) {
                                c.push(p);
                                break;
                              }
                            u && (I = S);
                          }
                          n && ((p = !E && p) && m--, i && T.push(p));
                        }
                        if (((m += O), n && O !== m)) {
                          for (_ = 0; (E = t[_++]); ) E(T, g, a, s);
                          if (i) {
                            if (m > 0) for (; O--; ) T[O] || g[O] || (g[O] = b.call(c));
                            g = condense(g);
                          }
                          D.apply(c, g), u && !i && g.length > 0 && m + t.length > 1 && Sizzle2.uniqueSort(c);
                        }
                        return u && ((I = S), (l = C)), T;
                      };
                    return n ? markFunction(superMatcher) : superMatcher;
                  })(i, r)
                )).selector = e;
              }
              return s;
            }),
          (c = Sizzle2.select =
            function (e, t, n, r) {
              var i,
                c,
                l,
                u,
                p,
                d = "function" == typeof e && e,
                f = !r && a((e = d.selector || e));
              if (((n = n || []), 1 === f.length)) {
                if ((c = f[0] = f[0].slice(0)).length > 2 && "ID" === (l = c[0]).type && 9 === t.nodeType && h && o.relative[c[1].type]) {
                  if (!(t = (o.find.ID(l.matches[0].replace(Z, funescape), t) || [])[0])) return n;
                  d && (t = t.parentNode), (e = e.slice(c.shift().value.length));
                }
                for (i = q.needsContext.test(e) ? 0 : c.length; i-- && ((l = c[i]), !o.relative[(u = l.type)]); )
                  if (
                    (p = o.find[u]) &&
                    (r = p(l.matches[0].replace(Z, funescape), (J.test(c[0].type) && testContext(t.parentNode)) || t))
                  ) {
                    if ((c.splice(i, 1), !(e = r.length && toSelector(c)))) return D.apply(n, r), n;
                    break;
                  }
              }
              return (d || s(e, f))(r, t, !h, n, !t || (J.test(e) && testContext(t.parentNode)) || t), n;
            }),
          (n.sortStable = g.split("").sort(sortOrder).join("") === g),
          (n.detectDuplicates = !!p),
          d(),
          (n.sortDetached = assert(function (e) {
            return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
          })),
          assert(function (e) {
            return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
          }) ||
            addHandle("type|href|height|width", function (e, t, n) {
              if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
          (n.attributes &&
            assert(function (e) {
              return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
            })) ||
            addHandle("value", function (e, t, n) {
              if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
            }),
          assert(function (e) {
            return null == e.getAttribute("disabled");
          }) ||
            addHandle(w, function (e, t, n) {
              var o;
              if (!n) return !0 === e[t] ? t.toLowerCase() : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
            }),
          Sizzle2
        );
      })(n);
      (jQuery.find = C),
        (jQuery.expr = C.selectors),
        (jQuery.expr[":"] = jQuery.expr.pseudos),
        (jQuery.uniqueSort = jQuery.unique = C.uniqueSort),
        (jQuery.text = C.getText),
        (jQuery.isXMLDoc = C.isXML),
        (jQuery.contains = C.contains),
        (jQuery.escapeSelector = C.escape);
      var dir = function (e, t, n) {
          for (var o = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (r && jQuery(e).is(n)) break;
              o.push(e);
            }
          return o;
        },
        siblings = function (e, t) {
          for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        I = jQuery.expr.match.needsContext;
      function nodeName(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function winnow(e, t, n) {
        return m(t)
          ? jQuery.grep(e, function (e, o) {
              return !!t.call(e, o, e) !== n;
            })
          : t.nodeType
          ? jQuery.grep(e, function (e) {
              return (e === t) !== n;
            })
          : "string" != typeof t
          ? jQuery.grep(e, function (e) {
              return u.call(t, e) > -1 !== n;
            })
          : jQuery.filter(t, e, n);
      }
      (jQuery.filter = function (e, t, n) {
        var o = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === o.nodeType
            ? jQuery.find.matchesSelector(o, e)
              ? [o]
              : []
            : jQuery.find.matches(
                e,
                jQuery.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        jQuery.fn.extend({
          find: function (e) {
            var t,
              n,
              o = this.length,
              r = this;
            if ("string" != typeof e)
              return this.pushStack(
                jQuery(e).filter(function () {
                  for (t = 0; t < o; t++) if (jQuery.contains(r[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < o; t++) jQuery.find(e, r[t], n);
            return o > 1 ? jQuery.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(winnow(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(winnow(this, e || [], !0));
          },
          is: function (e) {
            return !!winnow(this, "string" == typeof e && I.test(e) ? jQuery(e) : e || [], !1).length;
          }
        });
      var S,
        y = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((jQuery.fn.init = function (e, t, n) {
        var o, r;
        if (!e) return this;
        if (((n = n || S), "string" == typeof e)) {
          if (!(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : y.exec(e)) || (!o[1] && t))
            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (o[1]) {
            if (
              ((t = t instanceof jQuery ? t[0] : t),
              jQuery.merge(this, jQuery.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : T, !0)),
              A.test(o[1]) && jQuery.isPlainObject(t))
            )
              for (o in t) m(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
            return this;
          }
          return (r = T.getElementById(o[2])) && ((this[0] = r), (this.length = 1)), this;
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : m(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(jQuery)
          : jQuery.makeArray(e, this);
      }).prototype = jQuery.fn),
        (S = jQuery(T));
      var v = /^(?:parents|prev(?:Until|All))/,
        N = { children: !0, contents: !0, next: !0, prev: !0 };
      function sibling(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      jQuery.fn.extend({
        has: function (e) {
          var t = jQuery(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (jQuery.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            o = 0,
            r = this.length,
            i = [],
            a = "string" != typeof e && jQuery(e);
          if (!I.test(e))
            for (; o < r; o++)
              for (n = this[o]; n && n !== t; n = n.parentNode)
                if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && jQuery.find.matchesSelector(n, e))) {
                  i.push(n);
                  break;
                }
          return this.pushStack(i.length > 1 ? jQuery.uniqueSort(i) : i);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? u.call(jQuery(e), this[0])
              : u.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(e, t))));
        },
        addBack: function (e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
      }),
        jQuery.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return dir(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return dir(e, "parentNode", n);
            },
            next: function (e) {
              return sibling(e, "nextSibling");
            },
            prev: function (e) {
              return sibling(e, "previousSibling");
            },
            nextAll: function (e) {
              return dir(e, "nextSibling");
            },
            prevAll: function (e) {
              return dir(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return dir(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return dir(e, "previousSibling", n);
            },
            siblings: function (e) {
              return siblings((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return siblings(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && a(e.contentDocument)
                ? e.contentDocument
                : (nodeName(e, "template") && (e = e.content || e), jQuery.merge([], e.childNodes));
            }
          },
          function (e, t) {
            jQuery.fn[e] = function (n, o) {
              var r = jQuery.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (o = n),
                o && "string" == typeof o && (r = jQuery.filter(o, r)),
                this.length > 1 && (N[e] || jQuery.uniqueSort(r), v.test(e) && r.reverse()),
                this.pushStack(r)
              );
            };
          }
        );
      var L = /[^\x20\t\r\n\f]+/g;
      function Identity(e) {
        return e;
      }
      function Thrower(e) {
        throw e;
      }
      function adoptValue(e, t, n, o) {
        var r;
        try {
          e && m((r = e.promise)) ? r.call(e).done(t).fail(n) : e && m((r = e.then)) ? r.call(e, t, n) : t.apply(void 0, [e].slice(o));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (jQuery.Callbacks = function (e) {
        e =
          "string" == typeof e
            ? (function createOptions(e) {
                var t = {};
                return (
                  jQuery.each(e.match(L) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : jQuery.extend({}, e);
        var t,
          n,
          o,
          r,
          i = [],
          a = [],
          s = -1,
          fire = function () {
            for (r = r || e.once, o = t = !0; a.length; s = -1)
              for (n = a.shift(); ++s < i.length; ) !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && ((s = i.length), (n = !1));
            e.memory || (n = !1), (t = !1), r && (i = n ? [] : "");
          },
          c = {
            add: function () {
              return (
                i &&
                  (n && !t && ((s = i.length - 1), a.push(n)),
                  (function add(t) {
                    jQuery.each(t, function (t, n) {
                      m(n) ? (e.unique && c.has(n)) || i.push(n) : n && n.length && "string" !== toType(n) && add(n);
                    });
                  })(arguments),
                  n && !t && fire()),
                this
              );
            },
            remove: function () {
              return (
                jQuery.each(arguments, function (e, t) {
                  for (var n; (n = jQuery.inArray(t, i, n)) > -1; ) i.splice(n, 1), n <= s && s--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? jQuery.inArray(e, i) > -1 : i.length > 0;
            },
            empty: function () {
              return i && (i = []), this;
            },
            disable: function () {
              return (r = a = []), (i = n = ""), this;
            },
            disabled: function () {
              return !i;
            },
            lock: function () {
              return (r = a = []), n || t || (i = n = ""), this;
            },
            locked: function () {
              return !!r;
            },
            fireWith: function (e, n) {
              return r || ((n = [e, (n = n || []).slice ? n.slice() : n]), a.push(n), t || fire()), this;
            },
            fire: function () {
              return c.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!o;
            }
          };
        return c;
      }),
        jQuery.extend({
          Deferred: function (e) {
            var t = [
                ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2],
                ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"],
                ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]
              ],
              o = "pending",
              r = {
                state: function () {
                  return o;
                },
                always: function () {
                  return i.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return r.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return jQuery
                    .Deferred(function (n) {
                      jQuery.each(t, function (t, o) {
                        var r = m(e[o[4]]) && e[o[4]];
                        i[o[1]](function () {
                          var e = r && r.apply(this, arguments);
                          e && m(e.promise)
                            ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject)
                            : n[o[0] + "With"](this, r ? [e] : arguments);
                        });
                      }),
                        (e = null);
                    })
                    .promise();
                },
                then: function (e, o, r) {
                  var i = 0;
                  function resolve(e, t, o, r) {
                    return function () {
                      var a = this,
                        s = arguments,
                        mightThrow = function () {
                          var n, c;
                          if (!(e < i)) {
                            if ((n = o.apply(a, s)) === t.promise()) throw new TypeError("Thenable self-resolution");
                            (c = n && ("object" == typeof n || "function" == typeof n) && n.then),
                              m(c)
                                ? r
                                  ? c.call(n, resolve(i, t, Identity, r), resolve(i, t, Thrower, r))
                                  : (i++,
                                    c.call(n, resolve(i, t, Identity, r), resolve(i, t, Thrower, r), resolve(i, t, Identity, t.notifyWith)))
                                : (o !== Identity && ((a = void 0), (s = [n])), (r || t.resolveWith)(a, s));
                          }
                        },
                        c = r
                          ? mightThrow
                          : function () {
                              try {
                                mightThrow();
                              } catch (n) {
                                jQuery.Deferred.exceptionHook && jQuery.Deferred.exceptionHook(n, c.stackTrace),
                                  e + 1 >= i && (o !== Thrower && ((a = void 0), (s = [n])), t.rejectWith(a, s));
                              }
                            };
                      e ? c() : (jQuery.Deferred.getStackHook && (c.stackTrace = jQuery.Deferred.getStackHook()), n.setTimeout(c));
                    };
                  }
                  return jQuery
                    .Deferred(function (n) {
                      t[0][3].add(resolve(0, n, m(r) ? r : Identity, n.notifyWith)),
                        t[1][3].add(resolve(0, n, m(e) ? e : Identity)),
                        t[2][3].add(resolve(0, n, m(o) ? o : Thrower));
                    })
                    .promise();
                },
                promise: function (e) {
                  return null != e ? jQuery.extend(e, r) : r;
                }
              },
              i = {};
            return (
              jQuery.each(t, function (e, n) {
                var a = n[2],
                  s = n[5];
                (r[n[1]] = a.add),
                  s &&
                    a.add(
                      function () {
                        o = s;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  a.add(n[3].fire),
                  (i[n[0]] = function () {
                    return i[n[0] + "With"](this === i ? void 0 : this, arguments), this;
                  }),
                  (i[n[0] + "With"] = a.fireWith);
              }),
              r.promise(i),
              e && e.call(i, i),
              i
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              o = Array(n),
              r = s.call(arguments),
              i = jQuery.Deferred(),
              updateFunc = function (e) {
                return function (n) {
                  (o[e] = this), (r[e] = arguments.length > 1 ? s.call(arguments) : n), --t || i.resolveWith(o, r);
                };
              };
            if (t <= 1 && (adoptValue(e, i.done(updateFunc(n)).resolve, i.reject, !t), "pending" === i.state() || m(r[n] && r[n].then)))
              return i.then();
            for (; n--; ) adoptValue(r[n], updateFunc(n), i.reject);
            return i.promise();
          }
        });
      var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (jQuery.Deferred.exceptionHook = function (e, t) {
        n.console && n.console.warn && e && R.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (jQuery.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var b = jQuery.Deferred();
      function completed() {
        T.removeEventListener("DOMContentLoaded", completed), n.removeEventListener("load", completed), jQuery.ready();
      }
      (jQuery.fn.ready = function (e) {
        return (
          b.then(e).catch(function (e) {
            jQuery.readyException(e);
          }),
          this
        );
      }),
        jQuery.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --jQuery.readyWait : jQuery.isReady) ||
              ((jQuery.isReady = !0), (!0 !== e && --jQuery.readyWait > 0) || b.resolveWith(T, [jQuery]));
          }
        }),
        (jQuery.ready.then = b.then),
        "complete" === T.readyState || ("loading" !== T.readyState && !T.documentElement.doScroll)
          ? n.setTimeout(jQuery.ready)
          : (T.addEventListener("DOMContentLoaded", completed), n.addEventListener("load", completed));
      var access = function (e, t, n, o, r, i, a) {
          var s = 0,
            c = e.length,
            l = null == n;
          if ("object" === toType(n)) for (s in ((r = !0), n)) access(e, t, s, n[s], !0, i, a);
          else if (
            void 0 !== o &&
            ((r = !0),
            m(o) || (a = !0),
            l &&
              (a
                ? (t.call(e, o), (t = null))
                : ((l = t),
                  (t = function (e, t, n) {
                    return l.call(jQuery(e), n);
                  }))),
            t)
          )
            for (; s < c; s++) t(e[s], n, a ? o : o.call(e[s], s, t(e[s], n)));
          return r ? e : l ? t.call(e) : c ? t(e[0], n) : i;
        },
        x = /^-ms-/,
        D = /-([a-z])/g;
      function fcamelCase(e, t) {
        return t.toUpperCase();
      }
      function camelCase(e) {
        return e.replace(x, "ms-").replace(D, fcamelCase);
      }
      var acceptData = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function Data() {
        this.expando = jQuery.expando + Data.uid++;
      }
      (Data.uid = 1),
        (Data.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                acceptData(e) &&
                  (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))),
              t
            );
          },
          set: function (e, t, n) {
            var o,
              r = this.cache(e);
            if ("string" == typeof t) r[camelCase(t)] = n;
            else for (o in t) r[camelCase(o)] = t[o];
            return r;
          },
          get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][camelCase(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              o = e[this.expando];
            if (void 0 !== o) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t) ? t.map(camelCase) : (t = camelCase(t)) in o ? [t] : t.match(L) || []).length;
                for (; n--; ) delete o[t[n]];
              }
              (void 0 === t || jQuery.isEmptyObject(o)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !jQuery.isEmptyObject(t);
          }
        });
      var P = new Data(),
        w = new Data(),
        k = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;
      function dataAttr(e, t, n) {
        var o;
        if (void 0 === n && 1 === e.nodeType)
          if (((o = "data-" + t.replace(K, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(o)))) {
            try {
              n = (function getData(e) {
                return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : k.test(e) ? JSON.parse(e) : e));
              })(n);
            } catch (e) {}
            w.set(e, t, n);
          } else n = void 0;
        return n;
      }
      jQuery.extend({
        hasData: function (e) {
          return w.hasData(e) || P.hasData(e);
        },
        data: function (e, t, n) {
          return w.access(e, t, n);
        },
        removeData: function (e, t) {
          w.remove(e, t);
        },
        _data: function (e, t, n) {
          return P.access(e, t, n);
        },
        _removeData: function (e, t) {
          P.remove(e, t);
        }
      }),
        jQuery.fn.extend({
          data: function (e, t) {
            var n,
              o,
              r,
              i = this[0],
              a = i && i.attributes;
            if (void 0 === e) {
              if (this.length && ((r = w.get(i)), 1 === i.nodeType && !P.get(i, "hasDataAttrs"))) {
                for (n = a.length; n--; )
                  a[n] && 0 === (o = a[n].name).indexOf("data-") && ((o = camelCase(o.slice(5))), dataAttr(i, o, r[o]));
                P.set(i, "hasDataAttrs", !0);
              }
              return r;
            }
            return "object" == typeof e
              ? this.each(function () {
                  w.set(this, e);
                })
              : access(
                  this,
                  function (t) {
                    var n;
                    if (i && void 0 === t) return void 0 !== (n = w.get(i, e)) || void 0 !== (n = dataAttr(i, e)) ? n : void 0;
                    this.each(function () {
                      w.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (e) {
            return this.each(function () {
              w.remove(this, e);
            });
          }
        }),
        jQuery.extend({
          queue: function (e, t, n) {
            var o;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (o = P.get(e, t)),
                n && (!o || Array.isArray(n) ? (o = P.access(e, t, jQuery.makeArray(n))) : o.push(n)),
                o || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = jQuery.queue(e, t),
              o = n.length,
              r = n.shift(),
              i = jQuery._queueHooks(e, t);
            "inprogress" === r && ((r = n.shift()), o--),
              r &&
                ("fx" === t && n.unshift("inprogress"),
                delete i.stop,
                r.call(
                  e,
                  function () {
                    jQuery.dequeue(e, t);
                  },
                  i
                )),
              !o && i && i.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              P.get(e, n) ||
              P.access(e, n, {
                empty: jQuery.Callbacks("once memory").add(function () {
                  P.remove(e, [t + "queue", n]);
                })
              })
            );
          }
        }),
        jQuery.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? jQuery.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = jQuery.queue(this, e, t);
                    jQuery._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && jQuery.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              jQuery.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              o = 1,
              r = jQuery.Deferred(),
              i = this,
              a = this.length,
              resolve = function () {
                --o || r.resolveWith(i, [i]);
              };
            for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; )
              (n = P.get(i[a], e + "queueHooks")) && n.empty && (o++, n.empty.add(resolve));
            return resolve(), r.promise(t);
          }
        });
      var M = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        B = new RegExp("^(?:([+-])=|)(" + M + ")([a-z%]*)$", "i"),
        F = ["Top", "Right", "Bottom", "Left"],
        U = T.documentElement,
        isAttached = function (e) {
          return jQuery.contains(e.ownerDocument, e);
        },
        H = { composed: !0 };
      U.getRootNode &&
        (isAttached = function (e) {
          return jQuery.contains(e.ownerDocument, e) || e.getRootNode(H) === e.ownerDocument;
        });
      var isHiddenWithinTree = function (e, t) {
        return "none" === (e = t || e).style.display || ("" === e.style.display && isAttached(e) && "none" === jQuery.css(e, "display"));
      };
      function adjustCSS(e, t, n, o) {
        var r,
          i,
          a = 20,
          s = o
            ? function () {
                return o.cur();
              }
            : function () {
                return jQuery.css(e, t, "");
              },
          c = s(),
          l = (n && n[3]) || (jQuery.cssNumber[t] ? "" : "px"),
          u = e.nodeType && (jQuery.cssNumber[t] || ("px" !== l && +c)) && B.exec(jQuery.css(e, t));
        if (u && u[3] !== l) {
          for (c /= 2, l = l || u[3], u = +c || 1; a--; )
            jQuery.style(e, t, u + l), (1 - i) * (1 - (i = s() / c || 0.5)) <= 0 && (a = 0), (u /= i);
          (u *= 2), jQuery.style(e, t, u + l), (n = n || []);
        }
        return n && ((u = +u || +c || 0), (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]), o && ((o.unit = l), (o.start = u), (o.end = r))), r;
      }
      var G = {};
      function getDefaultDisplay(e) {
        var t,
          n = e.ownerDocument,
          o = e.nodeName,
          r = G[o];
        return (
          r ||
          ((t = n.body.appendChild(n.createElement(o))),
          (r = jQuery.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === r && (r = "block"),
          (G[o] = r),
          r)
        );
      }
      function showHide(e, t) {
        for (var n, o, r = [], i = 0, a = e.length; i < a; i++)
          (o = e[i]).style &&
            ((n = o.style.display),
            t
              ? ("none" === n && ((r[i] = P.get(o, "display") || null), r[i] || (o.style.display = "")),
                "" === o.style.display && isHiddenWithinTree(o) && (r[i] = getDefaultDisplay(o)))
              : "none" !== n && ((r[i] = "none"), P.set(o, "display", n)));
        for (i = 0; i < a; i++) null != r[i] && (e[i].style.display = r[i]);
        return e;
      }
      jQuery.fn.extend({
        show: function () {
          return showHide(this, !0);
        },
        hide: function () {
          return showHide(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                isHiddenWithinTree(this) ? jQuery(this).show() : jQuery(this).hide();
              });
        }
      });
      var j,
        W,
        V = /^(?:checkbox|radio)$/i,
        q = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        z = /^$|^module$|\/(?:java|ecma)script/i;
      (j = T.createDocumentFragment().appendChild(T.createElement("div"))),
        (W = T.createElement("input")).setAttribute("type", "radio"),
        W.setAttribute("checked", "checked"),
        W.setAttribute("name", "t"),
        j.appendChild(W),
        (E.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (j.innerHTML = "<textarea>x</textarea>"),
        (E.noCloneChecked = !!j.cloneNode(!0).lastChild.defaultValue),
        (j.innerHTML = "<option></option>"),
        (E.option = !!j.lastChild);
      var Y = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      function getAll(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : []),
          void 0 === t || (t && nodeName(e, t)) ? jQuery.merge([e], n) : n
        );
      }
      function setGlobalEval(e, t) {
        for (var n = 0, o = e.length; n < o; n++) P.set(e[n], "globalEval", !t || P.get(t[n], "globalEval"));
      }
      (Y.tbody = Y.tfoot = Y.colgroup = Y.caption = Y.thead),
        (Y.th = Y.td),
        E.option || (Y.optgroup = Y.option = [1, "<select multiple='multiple'>", "</select>"]);
      var X = /<|&#?\w+;/;
      function buildFragment(e, t, n, o, r) {
        for (var i, a, s, c, l, u, p = t.createDocumentFragment(), d = [], f = 0, _ = e.length; f < _; f++)
          if ((i = e[f]) || 0 === i)
            if ("object" === toType(i)) jQuery.merge(d, i.nodeType ? [i] : i);
            else if (X.test(i)) {
              for (
                a = a || p.appendChild(t.createElement("div")),
                  s = (q.exec(i) || ["", ""])[1].toLowerCase(),
                  c = Y[s] || Y._default,
                  a.innerHTML = c[1] + jQuery.htmlPrefilter(i) + c[2],
                  u = c[0];
                u--;

              )
                a = a.lastChild;
              jQuery.merge(d, a.childNodes), ((a = p.firstChild).textContent = "");
            } else d.push(t.createTextNode(i));
        for (p.textContent = "", f = 0; (i = d[f++]); )
          if (o && jQuery.inArray(i, o) > -1) r && r.push(i);
          else if (((l = isAttached(i)), (a = getAll(p.appendChild(i), "script")), l && setGlobalEval(a), n))
            for (u = 0; (i = a[u++]); ) z.test(i.type || "") && n.push(i);
        return p;
      }
      var $ = /^([^.]*)(?:\.(.+)|)/;
      function returnTrue() {
        return !0;
      }
      function returnFalse() {
        return !1;
      }
      function expectSync(e, t) {
        return (
          (e ===
            (function safeActiveElement() {
              try {
                return T.activeElement;
              } catch (e) {}
            })()) ==
          ("focus" === t)
        );
      }
      function on(e, t, n, o, r, i) {
        var a, s;
        if ("object" == typeof t) {
          for (s in ("string" != typeof n && ((o = o || n), (n = void 0)), t)) on(e, s, n, o, t[s], i);
          return e;
        }
        if (
          (null == o && null == r
            ? ((r = n), (o = n = void 0))
            : null == r && ("string" == typeof n ? ((r = o), (o = void 0)) : ((r = o), (o = n), (n = void 0))),
          !1 === r)
        )
          r = returnFalse;
        else if (!r) return e;
        return (
          1 === i &&
            ((a = r),
            ((r = function (e) {
              return jQuery().off(e), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = jQuery.guid++))),
          e.each(function () {
            jQuery.event.add(this, t, r, o, n);
          })
        );
      }
      function leverageNative(e, t, n) {
        n
          ? (P.set(e, t, !1),
            jQuery.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var o,
                  r,
                  i = P.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (i.length) (jQuery.event.special[t] || {}).delegateType && e.stopPropagation();
                  else if (
                    ((i = s.call(arguments)),
                    P.set(this, t, i),
                    (o = n(this, t)),
                    this[t](),
                    i !== (r = P.get(this, t)) || o ? P.set(this, t, !1) : (r = {}),
                    i !== r)
                  )
                    return e.stopImmediatePropagation(), e.preventDefault(), r && r.value;
                } else
                  i.length &&
                    (P.set(this, t, { value: jQuery.event.trigger(jQuery.extend(i[0], jQuery.Event.prototype), i.slice(1), this) }),
                    e.stopImmediatePropagation());
              }
            }))
          : void 0 === P.get(e, t) && jQuery.event.add(e, t, returnTrue);
      }
      (jQuery.event = {
        global: {},
        add: function (e, t, n, o, r) {
          var i,
            a,
            s,
            c,
            l,
            u,
            p,
            d,
            f,
            _,
            h,
            E = P.get(e);
          if (acceptData(e))
            for (
              n.handler && ((n = (i = n).handler), (r = i.selector)),
                r && jQuery.find.matchesSelector(U, r),
                n.guid || (n.guid = jQuery.guid++),
                (c = E.events) || (c = E.events = Object.create(null)),
                (a = E.handle) ||
                  (a = E.handle =
                    function (t) {
                      return void 0 !== jQuery && jQuery.event.triggered !== t.type ? jQuery.event.dispatch.apply(e, arguments) : void 0;
                    }),
                l = (t = (t || "").match(L) || [""]).length;
              l--;

            )
              (f = h = (s = $.exec(t[l]) || [])[1]),
                (_ = (s[2] || "").split(".").sort()),
                f &&
                  ((p = jQuery.event.special[f] || {}),
                  (f = (r ? p.delegateType : p.bindType) || f),
                  (p = jQuery.event.special[f] || {}),
                  (u = jQuery.extend(
                    {
                      type: f,
                      origType: h,
                      data: o,
                      handler: n,
                      guid: n.guid,
                      selector: r,
                      needsContext: r && jQuery.expr.match.needsContext.test(r),
                      namespace: _.join(".")
                    },
                    i
                  )),
                  (d = c[f]) ||
                    (((d = c[f] = []).delegateCount = 0),
                    (p.setup && !1 !== p.setup.call(e, o, _, a)) || (e.addEventListener && e.addEventListener(f, a))),
                  p.add && (p.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
                  r ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                  (jQuery.event.global[f] = !0));
        },
        remove: function (e, t, n, o, r) {
          var i,
            a,
            s,
            c,
            l,
            u,
            p,
            d,
            f,
            _,
            h,
            E = P.hasData(e) && P.get(e);
          if (E && (c = E.events)) {
            for (l = (t = (t || "").match(L) || [""]).length; l--; )
              if (((f = h = (s = $.exec(t[l]) || [])[1]), (_ = (s[2] || "").split(".").sort()), f)) {
                for (
                  p = jQuery.event.special[f] || {},
                    d = c[(f = (o ? p.delegateType : p.bindType) || f)] || [],
                    s = s[2] && new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                    a = i = d.length;
                  i--;

                )
                  (u = d[i]),
                    (!r && h !== u.origType) ||
                      (n && n.guid !== u.guid) ||
                      (s && !s.test(u.namespace)) ||
                      (o && o !== u.selector && ("**" !== o || !u.selector)) ||
                      (d.splice(i, 1), u.selector && d.delegateCount--, p.remove && p.remove.call(e, u));
                a &&
                  !d.length &&
                  ((p.teardown && !1 !== p.teardown.call(e, _, E.handle)) || jQuery.removeEvent(e, f, E.handle), delete c[f]);
              } else for (f in c) jQuery.event.remove(e, f + t[l], n, o, !0);
            jQuery.isEmptyObject(c) && P.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            o,
            r,
            i,
            a,
            s = new Array(arguments.length),
            c = jQuery.event.fix(e),
            l = (P.get(this, "events") || Object.create(null))[c.type] || [],
            u = jQuery.event.special[c.type] || {};
          for (s[0] = c, t = 1; t < arguments.length; t++) s[t] = arguments[t];
          if (((c.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, c))) {
            for (a = jQuery.event.handlers.call(this, c, l), t = 0; (r = a[t++]) && !c.isPropagationStopped(); )
              for (c.currentTarget = r.elem, n = 0; (i = r.handlers[n++]) && !c.isImmediatePropagationStopped(); )
                (c.rnamespace && !1 !== i.namespace && !c.rnamespace.test(i.namespace)) ||
                  ((c.handleObj = i),
                  (c.data = i.data),
                  void 0 !== (o = ((jQuery.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s)) &&
                    !1 === (c.result = o) &&
                    (c.preventDefault(), c.stopPropagation()));
            return u.postDispatch && u.postDispatch.call(this, c), c.result;
          }
        },
        handlers: function (e, t) {
          var n,
            o,
            r,
            i,
            a,
            s = [],
            c = t.delegateCount,
            l = e.target;
          if (c && l.nodeType && !("click" === e.type && e.button >= 1))
            for (; l !== this; l = l.parentNode || this)
              if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                for (i = [], a = {}, n = 0; n < c; n++)
                  void 0 === a[(r = (o = t[n]).selector + " ")] &&
                    (a[r] = o.needsContext ? jQuery(r, this).index(l) > -1 : jQuery.find(r, this, null, [l]).length),
                    a[r] && i.push(o);
                i.length && s.push({ elem: l, handlers: i });
              }
          return (l = this), c < t.length && s.push({ elem: l, handlers: t.slice(c) }), s;
        },
        addProp: function (e, t) {
          Object.defineProperty(jQuery.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: m(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
            }
          });
        },
        fix: function (e) {
          return e[jQuery.expando] ? e : new jQuery.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return V.test(t.type) && t.click && nodeName(t, "input") && leverageNative(t, "click", returnTrue), !1;
            },
            trigger: function (e) {
              var t = this || e;
              return V.test(t.type) && t.click && nodeName(t, "input") && leverageNative(t, "click"), !0;
            },
            _default: function (e) {
              var t = e.target;
              return (V.test(t.type) && t.click && nodeName(t, "input") && P.get(t, "click")) || nodeName(t, "a");
            }
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
            }
          }
        }
      }),
        (jQuery.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (jQuery.Event = function (e, t) {
          if (!(this instanceof jQuery.Event)) return new jQuery.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? returnTrue : returnFalse),
              (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && jQuery.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[jQuery.expando] = !0);
        }),
        (jQuery.Event.prototype = {
          constructor: jQuery.Event,
          isDefaultPrevented: returnFalse,
          isPropagationStopped: returnFalse,
          isImmediatePropagationStopped: returnFalse,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = returnTrue), e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = returnTrue), e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = returnTrue),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          }
        }),
        jQuery.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0
          },
          jQuery.event.addProp
        ),
        jQuery.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          jQuery.event.special[e] = {
            setup: function () {
              return leverageNative(this, e, expectSync), !1;
            },
            trigger: function () {
              return leverageNative(this, e), !0;
            },
            _default: function (t) {
              return P.get(t.target, e);
            },
            delegateType: t
          };
        }),
        jQuery.each(
          { mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" },
          function (e, t) {
            jQuery.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  o = this,
                  r = e.relatedTarget,
                  i = e.handleObj;
                return (
                  (r && (r === o || jQuery.contains(o, r))) ||
                    ((e.type = i.origType), (n = i.handler.apply(this, arguments)), (e.type = t)),
                  n
                );
              }
            };
          }
        ),
        jQuery.fn.extend({
          on: function (e, t, n, o) {
            return on(this, e, t, n, o);
          },
          one: function (e, t, n, o) {
            return on(this, e, t, n, o, 1);
          },
          off: function (e, t, n) {
            var o, r;
            if (e && e.preventDefault && e.handleObj)
              return (
                (o = e.handleObj),
                jQuery(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler),
                this
              );
            if ("object" == typeof e) {
              for (r in e) this.off(r, t, e[r]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = returnFalse),
              this.each(function () {
                jQuery.event.remove(this, e, n, t);
              })
            );
          }
        });
      var Q = /<script|<style|<link/i,
        J = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Z = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function manipulationTarget(e, t) {
        return (nodeName(e, "table") && nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") && jQuery(e).children("tbody")[0]) || e;
      }
      function disableScript(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function restoreScript(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
      }
      function cloneCopyEvent(e, t) {
        var n, o, r, i, a, s;
        if (1 === t.nodeType) {
          if (P.hasData(e) && (s = P.get(e).events))
            for (r in (P.remove(t, "handle events"), s)) for (n = 0, o = s[r].length; n < o; n++) jQuery.event.add(t, r, s[r][n]);
          w.hasData(e) && ((i = w.access(e)), (a = jQuery.extend({}, i)), w.set(t, a));
        }
      }
      function domManip(e, t, n, o) {
        t = c(t);
        var r,
          i,
          a,
          s,
          l,
          u,
          p = 0,
          d = e.length,
          f = d - 1,
          _ = t[0],
          h = m(_);
        if (h || (d > 1 && "string" == typeof _ && !E.checkClone && J.test(_)))
          return e.each(function (r) {
            var i = e.eq(r);
            h && (t[0] = _.call(this, r, i.html())), domManip(i, t, n, o);
          });
        if (d && ((i = (r = buildFragment(t, e[0].ownerDocument, !1, e, o)).firstChild), 1 === r.childNodes.length && (r = i), i || o)) {
          for (s = (a = jQuery.map(getAll(r, "script"), disableScript)).length; p < d; p++)
            (l = r), p !== f && ((l = jQuery.clone(l, !0, !0)), s && jQuery.merge(a, getAll(l, "script"))), n.call(e[p], l, p);
          if (s)
            for (u = a[a.length - 1].ownerDocument, jQuery.map(a, restoreScript), p = 0; p < s; p++)
              (l = a[p]),
                z.test(l.type || "") &&
                  !P.access(l, "globalEval") &&
                  jQuery.contains(u, l) &&
                  (l.src && "module" !== (l.type || "").toLowerCase()
                    ? jQuery._evalUrl && !l.noModule && jQuery._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }, u)
                    : DOMEval(l.textContent.replace(Z, ""), l, u));
        }
        return e;
      }
      function remove(e, t, n) {
        for (var o, r = t ? jQuery.filter(t, e) : e, i = 0; null != (o = r[i]); i++)
          n || 1 !== o.nodeType || jQuery.cleanData(getAll(o)),
            o.parentNode && (n && isAttached(o) && setGlobalEval(getAll(o, "script")), o.parentNode.removeChild(o));
        return e;
      }
      jQuery.extend({
        htmlPrefilter: function (e) {
          return e;
        },
        clone: function (e, t, n) {
          var o,
            r,
            i,
            a,
            s,
            c,
            l,
            u = e.cloneNode(!0),
            p = isAttached(e);
          if (!(E.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || jQuery.isXMLDoc(e)))
            for (a = getAll(u), o = 0, r = (i = getAll(e)).length; o < r; o++)
              (s = i[o]),
                (c = a[o]),
                (l = void 0),
                "input" === (l = c.nodeName.toLowerCase()) && V.test(s.type)
                  ? (c.checked = s.checked)
                  : ("input" !== l && "textarea" !== l) || (c.defaultValue = s.defaultValue);
          if (t)
            if (n) for (i = i || getAll(e), a = a || getAll(u), o = 0, r = i.length; o < r; o++) cloneCopyEvent(i[o], a[o]);
            else cloneCopyEvent(e, u);
          return (a = getAll(u, "script")).length > 0 && setGlobalEval(a, !p && getAll(e, "script")), u;
        },
        cleanData: function (e) {
          for (var t, n, o, r = jQuery.event.special, i = 0; void 0 !== (n = e[i]); i++)
            if (acceptData(n)) {
              if ((t = n[P.expando])) {
                if (t.events) for (o in t.events) r[o] ? jQuery.event.remove(n, o) : jQuery.removeEvent(n, o, t.handle);
                n[P.expando] = void 0;
              }
              n[w.expando] && (n[w.expando] = void 0);
            }
        }
      }),
        jQuery.fn.extend({
          detach: function (e) {
            return remove(this, e, !0);
          },
          remove: function (e) {
            return remove(this, e);
          },
          text: function (e) {
            return access(
              this,
              function (e) {
                return void 0 === e
                  ? jQuery.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return domManip(this, arguments, function (e) {
              (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || manipulationTarget(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return domManip(this, arguments, function (e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = manipulationTarget(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return domManip(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return domManip(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (jQuery.cleanData(getAll(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return jQuery.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return access(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  o = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Q.test(e) && !Y[(q.exec(e) || ["", ""])[1].toLowerCase()]) {
                  e = jQuery.htmlPrefilter(e);
                  try {
                    for (; n < o; n++) 1 === (t = this[n] || {}).nodeType && (jQuery.cleanData(getAll(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return domManip(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                jQuery.inArray(this, e) < 0 && (jQuery.cleanData(getAll(this)), n && n.replaceChild(t, this));
              },
              e
            );
          }
        }),
        jQuery.each(
          { appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" },
          function (e, t) {
            jQuery.fn[e] = function (e) {
              for (var n, o = [], r = jQuery(e), i = r.length - 1, a = 0; a <= i; a++)
                (n = a === i ? this : this.clone(!0)), jQuery(r[a])[t](n), l.apply(o, n.get());
              return this.pushStack(o);
            };
          }
        );
      var ee = new RegExp("^(" + M + ")(?!px)[a-z%]+$", "i"),
        te = /^--/,
        getStyles = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        swap = function (e, t, n) {
          var o,
            r,
            i = {};
          for (r in t) (i[r] = e.style[r]), (e.style[r] = t[r]);
          for (r in ((o = n.call(e)), t)) e.style[r] = i[r];
          return o;
        },
        ne = new RegExp(F.join("|"), "i"),
        oe = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g");
      function curCSS(e, t, n) {
        var o,
          r,
          i,
          a,
          s = te.test(t),
          c = e.style;
        return (
          (n = n || getStyles(e)) &&
            ((a = n.getPropertyValue(t) || n[t]),
            s && a && (a = a.replace(oe, "$1") || void 0),
            "" !== a || isAttached(e) || (a = jQuery.style(e, t)),
            !E.pixelBoxStyles() &&
              ee.test(a) &&
              ne.test(t) &&
              ((o = c.width),
              (r = c.minWidth),
              (i = c.maxWidth),
              (c.minWidth = c.maxWidth = c.width = a),
              (a = n.width),
              (c.width = o),
              (c.minWidth = r),
              (c.maxWidth = i))),
          void 0 !== a ? a + "" : a
        );
      }
      function addGetHookIf(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          }
        };
      }
      !(function () {
        function computeStyleTests() {
          if (c) {
            (s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (c.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              U.appendChild(s).appendChild(c);
            var i = n.getComputedStyle(c);
            (e = "1%" !== i.top),
              (a = 12 === roundPixelMeasures(i.marginLeft)),
              (c.style.right = "60%"),
              (r = 36 === roundPixelMeasures(i.right)),
              (t = 36 === roundPixelMeasures(i.width)),
              (c.style.position = "absolute"),
              (o = 12 === roundPixelMeasures(c.offsetWidth / 3)),
              U.removeChild(s),
              (c = null);
          }
        }
        function roundPixelMeasures(e) {
          return Math.round(parseFloat(e));
        }
        var e,
          t,
          o,
          r,
          i,
          a,
          s = T.createElement("div"),
          c = T.createElement("div");
        c.style &&
          ((c.style.backgroundClip = "content-box"),
          (c.cloneNode(!0).style.backgroundClip = ""),
          (E.clearCloneStyle = "content-box" === c.style.backgroundClip),
          jQuery.extend(E, {
            boxSizingReliable: function () {
              return computeStyleTests(), t;
            },
            pixelBoxStyles: function () {
              return computeStyleTests(), r;
            },
            pixelPosition: function () {
              return computeStyleTests(), e;
            },
            reliableMarginLeft: function () {
              return computeStyleTests(), a;
            },
            scrollboxSize: function () {
              return computeStyleTests(), o;
            },
            reliableTrDimensions: function () {
              var e, t, o, r;
              return (
                null == i &&
                  ((e = T.createElement("table")),
                  (t = T.createElement("tr")),
                  (o = T.createElement("div")),
                  (e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                  (t.style.cssText = "border:1px solid"),
                  (t.style.height = "1px"),
                  (o.style.height = "9px"),
                  (o.style.display = "block"),
                  U.appendChild(e).appendChild(t).appendChild(o),
                  (r = n.getComputedStyle(t)),
                  (i = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight),
                  U.removeChild(e)),
                i
              );
            }
          }));
      })();
      var re = ["Webkit", "Moz", "ms"],
        ie = T.createElement("div").style,
        ae = {};
      function finalPropName(e) {
        var t = jQuery.cssProps[e] || ae[e];
        return (
          t ||
          (e in ie
            ? e
            : (ae[e] =
                (function vendorPropName(e) {
                  for (var t = e[0].toUpperCase() + e.slice(1), n = re.length; n--; ) if ((e = re[n] + t) in ie) return e;
                })(e) || e))
        );
      }
      var se = /^(none|table(?!-c[ea]).+)/,
        ce = { position: "absolute", visibility: "hidden", display: "block" },
        le = { letterSpacing: "0", fontWeight: "400" };
      function setPositiveNumber(e, t, n) {
        var o = B.exec(t);
        return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || "px") : t;
      }
      function boxModelAdjustment(e, t, n, o, r, i) {
        var a = "width" === t ? 1 : 0,
          s = 0,
          c = 0;
        if (n === (o ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
          "margin" === n && (c += jQuery.css(e, n + F[a], !0, r)),
            o
              ? ("content" === n && (c -= jQuery.css(e, "padding" + F[a], !0, r)),
                "margin" !== n && (c -= jQuery.css(e, "border" + F[a] + "Width", !0, r)))
              : ((c += jQuery.css(e, "padding" + F[a], !0, r)),
                "padding" !== n
                  ? (c += jQuery.css(e, "border" + F[a] + "Width", !0, r))
                  : (s += jQuery.css(e, "border" + F[a] + "Width", !0, r)));
        return !o && i >= 0 && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - c - s - 0.5)) || 0), c;
      }
      function getWidthOrHeight(e, t, n) {
        var o = getStyles(e),
          r = (!E.boxSizingReliable() || n) && "border-box" === jQuery.css(e, "boxSizing", !1, o),
          i = r,
          a = curCSS(e, t, o),
          s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (ee.test(a)) {
          if (!n) return a;
          a = "auto";
        }
        return (
          ((!E.boxSizingReliable() && r) ||
            (!E.reliableTrDimensions() && nodeName(e, "tr")) ||
            "auto" === a ||
            (!parseFloat(a) && "inline" === jQuery.css(e, "display", !1, o))) &&
            e.getClientRects().length &&
            ((r = "border-box" === jQuery.css(e, "boxSizing", !1, o)), (i = s in e) && (a = e[s])),
          (a = parseFloat(a) || 0) + boxModelAdjustment(e, t, n || (r ? "border" : "content"), i, o, a) + "px"
        );
      }
      function Tween(e, t, n, o, r) {
        return new Tween.prototype.init(e, t, n, o, r);
      }
      jQuery.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = curCSS(e, "opacity");
                return "" === n ? "1" : n;
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, o) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var r,
              i,
              a,
              s = camelCase(t),
              c = te.test(t),
              l = e.style;
            if ((c || (t = finalPropName(s)), (a = jQuery.cssHooks[t] || jQuery.cssHooks[s]), void 0 === n))
              return a && "get" in a && void 0 !== (r = a.get(e, !1, o)) ? r : l[t];
            "string" === (i = typeof n) && (r = B.exec(n)) && r[1] && ((n = adjustCSS(e, t, r)), (i = "number")),
              null != n &&
                n == n &&
                ("number" !== i || c || (n += (r && r[3]) || (jQuery.cssNumber[s] ? "" : "px")),
                E.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(e, n, o))) || (c ? l.setProperty(t, n) : (l[t] = n)));
          }
        },
        css: function (e, t, n, o) {
          var r,
            i,
            a,
            s = camelCase(t);
          return (
            te.test(t) || (t = finalPropName(s)),
            (a = jQuery.cssHooks[t] || jQuery.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)),
            void 0 === r && (r = curCSS(e, t, o)),
            "normal" === r && t in le && (r = le[t]),
            "" === n || n ? ((i = parseFloat(r)), !0 === n || isFinite(i) ? i || 0 : r) : r
          );
        }
      }),
        jQuery.each(["height", "width"], function (e, t) {
          jQuery.cssHooks[t] = {
            get: function (e, n, o) {
              if (n)
                return !se.test(jQuery.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? getWidthOrHeight(e, t, o)
                  : swap(e, ce, function () {
                      return getWidthOrHeight(e, t, o);
                    });
            },
            set: function (e, n, o) {
              var r,
                i = getStyles(e),
                a = !E.scrollboxSize() && "absolute" === i.position,
                s = (a || o) && "border-box" === jQuery.css(e, "boxSizing", !1, i),
                c = o ? boxModelAdjustment(e, t, o, s, i) : 0;
              return (
                s &&
                  a &&
                  (c -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - boxModelAdjustment(e, t, "border", !1, i) - 0.5
                  )),
                c && (r = B.exec(n)) && "px" !== (r[3] || "px") && ((e.style[t] = n), (n = jQuery.css(e, t))),
                setPositiveNumber(0, n, c)
              );
            }
          };
        }),
        (jQuery.cssHooks.marginLeft = addGetHookIf(E.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(curCSS(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  swap(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        jQuery.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (jQuery.cssHooks[e + t] = {
            expand: function (n) {
              for (var o = 0, r = {}, i = "string" == typeof n ? n.split(" ") : [n]; o < 4; o++) r[e + F[o] + t] = i[o] || i[o - 2] || i[0];
              return r;
            }
          }),
            "margin" !== e && (jQuery.cssHooks[e + t].set = setPositiveNumber);
        }),
        jQuery.fn.extend({
          css: function (e, t) {
            return access(
              this,
              function (e, t, n) {
                var o,
                  r,
                  i = {},
                  a = 0;
                if (Array.isArray(t)) {
                  for (o = getStyles(e), r = t.length; a < r; a++) i[t[a]] = jQuery.css(e, t[a], !1, o);
                  return i;
                }
                return void 0 !== n ? jQuery.style(e, t, n) : jQuery.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          }
        }),
        (jQuery.Tween = Tween),
        (Tween.prototype = {
          constructor: Tween,
          init: function (e, t, n, o, r, i) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = r || jQuery.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = o),
              (this.unit = i || (jQuery.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = Tween.propHooks[this.prop];
            return e && e.get ? e.get(this) : Tween.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = Tween.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t = jQuery.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step && this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : Tween.propHooks._default.set(this),
              this
            );
          }
        }),
        (Tween.prototype.init.prototype = Tween.prototype),
        (Tween.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = jQuery.css(e.elem, e.prop, "")) && "auto" !== t
                ? t
                : 0;
            },
            set: function (e) {
              jQuery.fx.step[e.prop]
                ? jQuery.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType || (!jQuery.cssHooks[e.prop] && null == e.elem.style[finalPropName(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : jQuery.style(e.elem, e.prop, e.now + e.unit);
            }
          }
        }),
        (Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            }
          }),
        (jQuery.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing"
        }),
        (jQuery.fx = Tween.prototype.init),
        (jQuery.fx.step = {});
      var ue,
        pe,
        de = /^(?:toggle|show|hide)$/,
        fe = /queueHooks$/;
      function schedule() {
        pe &&
          (!1 === T.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(schedule) : n.setTimeout(schedule, jQuery.fx.interval),
          jQuery.fx.tick());
      }
      function createFxNow() {
        return (
          n.setTimeout(function () {
            ue = void 0;
          }),
          (ue = Date.now())
        );
      }
      function genFx(e, t) {
        var n,
          o = 0,
          r = { height: e };
        for (t = t ? 1 : 0; o < 4; o += 2 - t) r["margin" + (n = F[o])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
      }
      function createTween(e, t, n) {
        for (var o, r = (Animation.tweeners[t] || []).concat(Animation.tweeners["*"]), i = 0, a = r.length; i < a; i++)
          if ((o = r[i].call(n, t, e))) return o;
      }
      function Animation(e, t, n) {
        var o,
          r,
          i = 0,
          a = Animation.prefilters.length,
          s = jQuery.Deferred().always(function () {
            delete tick.elem;
          }),
          tick = function () {
            if (r) return !1;
            for (
              var t = ue || createFxNow(),
                n = Math.max(0, c.startTime + c.duration - t),
                o = 1 - (n / c.duration || 0),
                i = 0,
                a = c.tweens.length;
              i < a;
              i++
            )
              c.tweens[i].run(o);
            return s.notifyWith(e, [c, o, n]), o < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1);
          },
          c = s.promise({
            elem: e,
            props: jQuery.extend({}, t),
            opts: jQuery.extend(!0, { specialEasing: {}, easing: jQuery.easing._default }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: ue || createFxNow(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var o = jQuery.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
              return c.tweens.push(o), o;
            },
            stop: function (t) {
              var n = 0,
                o = t ? c.tweens.length : 0;
              if (r) return this;
              for (r = !0; n < o; n++) c.tweens[n].run(1);
              return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this;
            }
          }),
          l = c.props;
        for (
          !(function propFilter(e, t) {
            var n, o, r, i, a;
            for (n in e)
              if (
                ((r = t[(o = camelCase(n))]),
                (i = e[n]),
                Array.isArray(i) && ((r = i[1]), (i = e[n] = i[0])),
                n !== o && ((e[o] = i), delete e[n]),
                (a = jQuery.cssHooks[o]) && ("expand" in a))
              )
                for (n in ((i = a.expand(i)), delete e[o], i)) (n in e) || ((e[n] = i[n]), (t[n] = r));
              else t[o] = r;
          })(l, c.opts.specialEasing);
          i < a;
          i++
        )
          if ((o = Animation.prefilters[i].call(c, e, l, c.opts)))
            return m(o.stop) && (jQuery._queueHooks(c.elem, c.opts.queue).stop = o.stop.bind(o)), o;
        return (
          jQuery.map(l, createTween, c),
          m(c.opts.start) && c.opts.start.call(e, c),
          c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
          jQuery.fx.timer(jQuery.extend(tick, { elem: e, anim: c, queue: c.opts.queue })),
          c
        );
      }
      (jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return adjustCSS(n.elem, e, B.exec(t), n), n;
            }
          ]
        },
        tweener: function (e, t) {
          m(e) ? ((t = e), (e = ["*"])) : (e = e.match(L));
          for (var n, o = 0, r = e.length; o < r; o++)
            (n = e[o]), (Animation.tweeners[n] = Animation.tweeners[n] || []), Animation.tweeners[n].unshift(t);
        },
        prefilters: [
          function defaultPrefilter(e, t, n) {
            var o,
              r,
              i,
              a,
              s,
              c,
              l,
              u,
              p = "width" in t || "height" in t,
              d = this,
              f = {},
              _ = e.style,
              h = e.nodeType && isHiddenWithinTree(e),
              E = P.get(e, "fxshow");
            for (o in (n.queue ||
              (null == (a = jQuery._queueHooks(e, "fx")).unqueued &&
                ((a.unqueued = 0),
                (s = a.empty.fire),
                (a.empty.fire = function () {
                  a.unqueued || s();
                })),
              a.unqueued++,
              d.always(function () {
                d.always(function () {
                  a.unqueued--, jQuery.queue(e, "fx").length || a.empty.fire();
                });
              })),
            t))
              if (((r = t[o]), de.test(r))) {
                if ((delete t[o], (i = i || "toggle" === r), r === (h ? "hide" : "show"))) {
                  if ("show" !== r || !E || void 0 === E[o]) continue;
                  h = !0;
                }
                f[o] = (E && E[o]) || jQuery.style(e, o);
              }
            if ((c = !jQuery.isEmptyObject(t)) || !jQuery.isEmptyObject(f))
              for (o in (p &&
                1 === e.nodeType &&
                ((n.overflow = [_.overflow, _.overflowX, _.overflowY]),
                null == (l = E && E.display) && (l = P.get(e, "display")),
                "none" === (u = jQuery.css(e, "display")) &&
                  (l ? (u = l) : (showHide([e], !0), (l = e.style.display || l), (u = jQuery.css(e, "display")), showHide([e]))),
                ("inline" === u || ("inline-block" === u && null != l)) &&
                  "none" === jQuery.css(e, "float") &&
                  (c ||
                    (d.done(function () {
                      _.display = l;
                    }),
                    null == l && ((u = _.display), (l = "none" === u ? "" : u))),
                  (_.display = "inline-block"))),
              n.overflow &&
                ((_.overflow = "hidden"),
                d.always(function () {
                  (_.overflow = n.overflow[0]), (_.overflowX = n.overflow[1]), (_.overflowY = n.overflow[2]);
                })),
              (c = !1),
              f))
                c ||
                  (E ? "hidden" in E && (h = E.hidden) : (E = P.access(e, "fxshow", { display: l })),
                  i && (E.hidden = !h),
                  h && showHide([e], !0),
                  d.done(function () {
                    for (o in (h || showHide([e]), P.remove(e, "fxshow"), f)) jQuery.style(e, o, f[o]);
                  })),
                  (c = createTween(h ? E[o] : 0, o, d)),
                  o in E || ((E[o] = c.start), h && ((c.end = c.start), (c.start = 0)));
          }
        ],
        prefilter: function (e, t) {
          t ? Animation.prefilters.unshift(e) : Animation.prefilters.push(e);
        }
      })),
        (jQuery.speed = function (e, t, n) {
          var o =
            e && "object" == typeof e
              ? jQuery.extend({}, e)
              : { complete: n || (!n && t) || (m(e) && e), duration: e, easing: (n && t) || (t && !m(t) && t) };
          return (
            jQuery.fx.off
              ? (o.duration = 0)
              : "number" != typeof o.duration &&
                (o.duration in jQuery.fx.speeds ? (o.duration = jQuery.fx.speeds[o.duration]) : (o.duration = jQuery.fx.speeds._default)),
            (null != o.queue && !0 !== o.queue) || (o.queue = "fx"),
            (o.old = o.complete),
            (o.complete = function () {
              m(o.old) && o.old.call(this), o.queue && jQuery.dequeue(this, o.queue);
            }),
            o
          );
        }),
        jQuery.fn.extend({
          fadeTo: function (e, t, n, o) {
            return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: t }, e, n, o);
          },
          animate: function (e, t, n, o) {
            var r = jQuery.isEmptyObject(e),
              i = jQuery.speed(t, n, o),
              doAnimation = function () {
                var t = Animation(this, jQuery.extend({}, e), i);
                (r || P.get(this, "finish")) && t.stop(!0);
              };
            return (doAnimation.finish = doAnimation), r || !1 === i.queue ? this.each(doAnimation) : this.queue(i.queue, doAnimation);
          },
          stop: function (e, t, n) {
            var stopQueue = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  o = null != e && e + "queueHooks",
                  r = jQuery.timers,
                  i = P.get(this);
                if (o) i[o] && i[o].stop && stopQueue(i[o]);
                else for (o in i) i[o] && i[o].stop && fe.test(o) && stopQueue(i[o]);
                for (o = r.length; o--; )
                  r[o].elem !== this || (null != e && r[o].queue !== e) || (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
                (!t && n) || jQuery.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = P.get(this),
                  o = n[e + "queue"],
                  r = n[e + "queueHooks"],
                  i = jQuery.timers,
                  a = o ? o.length : 0;
                for (n.finish = !0, jQuery.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = i.length; t--; )
                  i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                for (t = 0; t < a; t++) o[t] && o[t].finish && o[t].finish.call(this);
                delete n.finish;
              })
            );
          }
        }),
        jQuery.each(["toggle", "show", "hide"], function (e, t) {
          var n = jQuery.fn[t];
          jQuery.fn[t] = function (e, o, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(genFx(t, !0), e, o, r);
          };
        }),
        jQuery.each(
          {
            slideDown: genFx("show"),
            slideUp: genFx("hide"),
            slideToggle: genFx("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" }
          },
          function (e, t) {
            jQuery.fn[e] = function (e, n, o) {
              return this.animate(t, e, n, o);
            };
          }
        ),
        (jQuery.timers = []),
        (jQuery.fx.tick = function () {
          var e,
            t = 0,
            n = jQuery.timers;
          for (ue = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || jQuery.fx.stop(), (ue = void 0);
        }),
        (jQuery.fx.timer = function (e) {
          jQuery.timers.push(e), jQuery.fx.start();
        }),
        (jQuery.fx.interval = 13),
        (jQuery.fx.start = function () {
          pe || ((pe = !0), schedule());
        }),
        (jQuery.fx.stop = function () {
          pe = null;
        }),
        (jQuery.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (jQuery.fn.delay = function (e, t) {
          return (
            (e = (jQuery.fx && jQuery.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function (t, o) {
              var r = n.setTimeout(t, e);
              o.stop = function () {
                n.clearTimeout(r);
              };
            })
          );
        }),
        (function () {
          var e = T.createElement("input"),
            t = T.createElement("select").appendChild(T.createElement("option"));
          (e.type = "checkbox"),
            (E.checkOn = "" !== e.value),
            (E.optSelected = t.selected),
            ((e = T.createElement("input")).value = "t"),
            (e.type = "radio"),
            (E.radioValue = "t" === e.value);
        })();
      var _e,
        he = jQuery.expr.attrHandle;
      jQuery.fn.extend({
        attr: function (e, t) {
          return access(this, jQuery.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            jQuery.removeAttr(this, e);
          });
        }
      }),
        jQuery.extend({
          attr: function (e, t, n) {
            var o,
              r,
              i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
              return void 0 === e.getAttribute
                ? jQuery.prop(e, t, n)
                : ((1 === i && jQuery.isXMLDoc(e)) ||
                    (r = jQuery.attrHooks[t.toLowerCase()] || (jQuery.expr.match.bool.test(t) ? _e : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void jQuery.removeAttr(e, t)
                      : r && "set" in r && void 0 !== (o = r.set(e, n, t))
                      ? o
                      : (e.setAttribute(t, n + ""), n)
                    : r && "get" in r && null !== (o = r.get(e, t))
                    ? o
                    : null == (o = jQuery.find.attr(e, t))
                    ? void 0
                    : o);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!E.radioValue && "radio" === t && nodeName(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              }
            }
          },
          removeAttr: function (e, t) {
            var n,
              o = 0,
              r = t && t.match(L);
            if (r && 1 === e.nodeType) for (; (n = r[o++]); ) e.removeAttribute(n);
          }
        }),
        (_e = {
          set: function (e, t, n) {
            return !1 === t ? jQuery.removeAttr(e, n) : e.setAttribute(n, n), n;
          }
        }),
        jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = he[t] || jQuery.find.attr;
          he[t] = function (e, t, o) {
            var r,
              i,
              a = t.toLowerCase();
            return o || ((i = he[a]), (he[a] = r), (r = null != n(e, t, o) ? a : null), (he[a] = i)), r;
          };
        });
      var Ee = /^(?:input|select|textarea|button)$/i,
        me = /^(?:a|area)$/i;
      function stripAndCollapse(e) {
        return (e.match(L) || []).join(" ");
      }
      function getClass(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function classesToArray(e) {
        return Array.isArray(e) ? e : ("string" == typeof e && e.match(L)) || [];
      }
      jQuery.fn.extend({
        prop: function (e, t) {
          return access(this, jQuery.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[jQuery.propFix[e] || e];
          });
        }
      }),
        jQuery.extend({
          prop: function (e, t, n) {
            var o,
              r,
              i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
              return (
                (1 === i && jQuery.isXMLDoc(e)) || ((t = jQuery.propFix[t] || t), (r = jQuery.propHooks[t])),
                void 0 !== n
                  ? r && "set" in r && void 0 !== (o = r.set(e, n, t))
                    ? o
                    : (e[t] = n)
                  : r && "get" in r && null !== (o = r.get(e, t))
                  ? o
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = jQuery.find.attr(e, "tabindex");
                return t ? parseInt(t, 10) : Ee.test(e.nodeName) || (me.test(e.nodeName) && e.href) ? 0 : -1;
              }
            }
          },
          propFix: { for: "htmlFor", class: "className" }
        }),
        E.optSelected ||
          (jQuery.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            }
          }),
        jQuery.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable"
          ],
          function () {
            jQuery.propFix[this.toLowerCase()] = this;
          }
        ),
        jQuery.fn.extend({
          addClass: function (e) {
            var t, n, o, r, i, a;
            return m(e)
              ? this.each(function (t) {
                  jQuery(this).addClass(e.call(this, t, getClass(this)));
                })
              : (t = classesToArray(e)).length
              ? this.each(function () {
                  if (((o = getClass(this)), (n = 1 === this.nodeType && " " + stripAndCollapse(o) + " "))) {
                    for (i = 0; i < t.length; i++) (r = t[i]), n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                    (a = stripAndCollapse(n)), o !== a && this.setAttribute("class", a);
                  }
                })
              : this;
          },
          removeClass: function (e) {
            var t, n, o, r, i, a;
            return m(e)
              ? this.each(function (t) {
                  jQuery(this).removeClass(e.call(this, t, getClass(this)));
                })
              : arguments.length
              ? (t = classesToArray(e)).length
                ? this.each(function () {
                    if (((o = getClass(this)), (n = 1 === this.nodeType && " " + stripAndCollapse(o) + " "))) {
                      for (i = 0; i < t.length; i++) for (r = t[i]; n.indexOf(" " + r + " ") > -1; ) n = n.replace(" " + r + " ", " ");
                      (a = stripAndCollapse(n)), o !== a && this.setAttribute("class", a);
                    }
                  })
                : this
              : this.attr("class", "");
          },
          toggleClass: function (e, t) {
            var n,
              o,
              r,
              i,
              a = typeof e,
              s = "string" === a || Array.isArray(e);
            return m(e)
              ? this.each(function (n) {
                  jQuery(this).toggleClass(e.call(this, n, getClass(this), t), t);
                })
              : "boolean" == typeof t && s
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : ((n = classesToArray(e)),
                this.each(function () {
                  if (s) for (i = jQuery(this), r = 0; r < n.length; r++) (o = n[r]), i.hasClass(o) ? i.removeClass(o) : i.addClass(o);
                  else
                    (void 0 !== e && "boolean" !== a) ||
                      ((o = getClass(this)) && P.set(this, "__className__", o),
                      this.setAttribute && this.setAttribute("class", o || !1 === e ? "" : P.get(this, "__className__") || ""));
                }));
          },
          hasClass: function (e) {
            var t,
              n,
              o = 0;
            for (t = " " + e + " "; (n = this[o++]); )
              if (1 === n.nodeType && (" " + stripAndCollapse(getClass(n)) + " ").indexOf(t) > -1) return !0;
            return !1;
          }
        });
      var Oe = /\r/g;
      jQuery.fn.extend({
        val: function (e) {
          var t,
            n,
            o,
            r = this[0];
          return arguments.length
            ? ((o = m(e)),
              this.each(function (n) {
                var r;
                1 === this.nodeType &&
                  (null == (r = o ? e.call(this, n, jQuery(this).val()) : e)
                    ? (r = "")
                    : "number" == typeof r
                    ? (r += "")
                    : Array.isArray(r) &&
                      (r = jQuery.map(r, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  ((t = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, r, "value")) ||
                    (this.value = r));
              }))
            : r
            ? (t = jQuery.valHooks[r.type] || jQuery.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value"))
              ? n
              : "string" == typeof (n = r.value)
              ? n.replace(Oe, "")
              : null == n
              ? ""
              : n
            : void 0;
        }
      }),
        jQuery.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = jQuery.find.attr(e, "value");
                return null != t ? t : stripAndCollapse(jQuery.text(e));
              }
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  o,
                  r = e.options,
                  i = e.selectedIndex,
                  a = "select-one" === e.type,
                  s = a ? null : [],
                  c = a ? i + 1 : r.length;
                for (o = i < 0 ? c : a ? i : 0; o < c; o++)
                  if (((n = r[o]).selected || o === i) && !n.disabled && (!n.parentNode.disabled || !nodeName(n.parentNode, "optgroup"))) {
                    if (((t = jQuery(n).val()), a)) return t;
                    s.push(t);
                  }
                return s;
              },
              set: function (e, t) {
                for (var n, o, r = e.options, i = jQuery.makeArray(t), a = r.length; a--; )
                  ((o = r[a]).selected = jQuery.inArray(jQuery.valHooks.option.get(o), i) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), i;
              }
            }
          }
        }),
        jQuery.each(["radio", "checkbox"], function () {
          (jQuery.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t)) return (e.checked = jQuery.inArray(jQuery(e).val(), t) > -1);
            }
          }),
            E.checkOn ||
              (jQuery.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (E.focusin = "onfocusin" in n);
      var Te = /^(?:focusinfocus|focusoutblur)$/,
        stopPropagationCallback = function (e) {
          e.stopPropagation();
        };
      jQuery.extend(jQuery.event, {
        trigger: function (e, t, o, r) {
          var i,
            a,
            s,
            c,
            l,
            u,
            p,
            d,
            _ = [o || T],
            h = f.call(e, "type") ? e.type : e,
            E = f.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((a = d = s = o = o || T),
            3 !== o.nodeType &&
              8 !== o.nodeType &&
              !Te.test(h + jQuery.event.triggered) &&
              (h.indexOf(".") > -1 && ((E = h.split(".")), (h = E.shift()), E.sort()),
              (l = h.indexOf(":") < 0 && "on" + h),
              ((e = e[jQuery.expando] ? e : new jQuery.Event(h, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
              (e.namespace = E.join(".")),
              (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + E.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
              (e.result = void 0),
              e.target || (e.target = o),
              (t = null == t ? [e] : jQuery.makeArray(t, [e])),
              (p = jQuery.event.special[h] || {}),
              r || !p.trigger || !1 !== p.trigger.apply(o, t)))
          ) {
            if (!r && !p.noBubble && !O(o)) {
              for (c = p.delegateType || h, Te.test(c + h) || (a = a.parentNode); a; a = a.parentNode) _.push(a), (s = a);
              s === (o.ownerDocument || T) && _.push(s.defaultView || s.parentWindow || n);
            }
            for (i = 0; (a = _[i++]) && !e.isPropagationStopped(); )
              (d = a),
                (e.type = i > 1 ? c : p.bindType || h),
                (u = (P.get(a, "events") || Object.create(null))[e.type] && P.get(a, "handle")) && u.apply(a, t),
                (u = l && a[l]) && u.apply && acceptData(a) && ((e.result = u.apply(a, t)), !1 === e.result && e.preventDefault());
            return (
              (e.type = h),
              r ||
                e.isDefaultPrevented() ||
                (p._default && !1 !== p._default.apply(_.pop(), t)) ||
                !acceptData(o) ||
                (l &&
                  m(o[h]) &&
                  !O(o) &&
                  ((s = o[l]) && (o[l] = null),
                  (jQuery.event.triggered = h),
                  e.isPropagationStopped() && d.addEventListener(h, stopPropagationCallback),
                  o[h](),
                  e.isPropagationStopped() && d.removeEventListener(h, stopPropagationCallback),
                  (jQuery.event.triggered = void 0),
                  s && (o[l] = s))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var o = jQuery.extend(new jQuery.Event(), n, { type: e, isSimulated: !0 });
          jQuery.event.trigger(o, null, t);
        }
      }),
        jQuery.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              jQuery.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return jQuery.event.trigger(e, t, n, !0);
          }
        }),
        E.focusin ||
          jQuery.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var handler = function (e) {
              jQuery.event.simulate(t, e.target, jQuery.event.fix(e));
            };
            jQuery.event.special[t] = {
              setup: function () {
                var n = this.ownerDocument || this.document || this,
                  o = P.access(n, t);
                o || n.addEventListener(e, handler, !0), P.access(n, t, (o || 0) + 1);
              },
              teardown: function () {
                var n = this.ownerDocument || this.document || this,
                  o = P.access(n, t) - 1;
                o ? P.access(n, t, o) : (n.removeEventListener(e, handler, !0), P.remove(n, t));
              }
            };
          });
      var ge = n.location,
        Ce = { guid: Date.now() },
        Ie = /\?/;
      jQuery.parseXML = function (e) {
        var t, o;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {}
        return (
          (o = t && t.getElementsByTagName("parsererror")[0]),
          (t && !o) ||
            jQuery.error(
              "Invalid XML: " +
                (o
                  ? jQuery
                      .map(o.childNodes, function (e) {
                        return e.textContent;
                      })
                      .join("\n")
                  : e)
            ),
          t
        );
      };
      var Ae = /\[\]$/,
        Se = /\r?\n/g,
        ye = /^(?:submit|button|image|reset|file)$/i,
        ve = /^(?:input|select|textarea|keygen)/i;
      function buildParams(e, t, n, o) {
        var r;
        if (Array.isArray(t))
          jQuery.each(t, function (t, r) {
            n || Ae.test(e) ? o(e, r) : buildParams(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, o);
          });
        else if (n || "object" !== toType(t)) o(e, t);
        else for (r in t) buildParams(e + "[" + r + "]", t[r], n, o);
      }
      (jQuery.param = function (e, t) {
        var n,
          o = [],
          add = function (e, t) {
            var n = m(t) ? t() : t;
            o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
          };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !jQuery.isPlainObject(e)))
          jQuery.each(e, function () {
            add(this.name, this.value);
          });
        else for (n in e) buildParams(n, e[n], t, add);
        return o.join("&");
      }),
        jQuery.fn.extend({
          serialize: function () {
            return jQuery.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = jQuery.prop(this, "elements");
              return e ? jQuery.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return this.name && !jQuery(this).is(":disabled") && ve.test(this.nodeName) && !ye.test(e) && (this.checked || !V.test(e));
              })
              .map(function (e, t) {
                var n = jQuery(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? jQuery.map(n, function (e) {
                      return { name: t.name, value: e.replace(Se, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(Se, "\r\n") };
              })
              .get();
          }
        });
      var Ne = /%20/g,
        Le = /#.*$/,
        Re = /([?&])_=[^&]*/,
        be = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        xe = /^(?:GET|HEAD)$/,
        De = /^\/\//,
        Pe = {},
        we = {},
        ke = "*/".concat("*"),
        Ke = T.createElement("a");
      function addToPrefiltersOrTransports(e) {
        return function (t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var o,
            r = 0,
            i = t.toLowerCase().match(L) || [];
          if (m(n))
            for (; (o = i[r++]); ) "+" === o[0] ? ((o = o.slice(1) || "*"), (e[o] = e[o] || []).unshift(n)) : (e[o] = e[o] || []).push(n);
        };
      }
      function inspectPrefiltersOrTransports(e, t, n, o) {
        var r = {},
          i = e === we;
        function inspect(a) {
          var s;
          return (
            (r[a] = !0),
            jQuery.each(e[a] || [], function (e, a) {
              var c = a(t, n, o);
              return "string" != typeof c || i || r[c] ? (i ? !(s = c) : void 0) : (t.dataTypes.unshift(c), inspect(c), !1);
            }),
            s
          );
        }
        return inspect(t.dataTypes[0]) || (!r["*"] && inspect("*"));
      }
      function ajaxExtend(e, t) {
        var n,
          o,
          r = jQuery.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : o || (o = {}))[n] = t[n]);
        return o && jQuery.extend(!0, e, o), e;
      }
      (Ke.href = ge.href),
        jQuery.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: ge.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ge.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": ke,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
            converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": jQuery.parseXML },
            flatOptions: { url: !0, context: !0 }
          },
          ajaxSetup: function (e, t) {
            return t ? ajaxExtend(ajaxExtend(e, jQuery.ajaxSettings), t) : ajaxExtend(jQuery.ajaxSettings, e);
          },
          ajaxPrefilter: addToPrefiltersOrTransports(Pe),
          ajaxTransport: addToPrefiltersOrTransports(we),
          ajax: function (e, t) {
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var o,
              r,
              i,
              a,
              s,
              c,
              l,
              u,
              p,
              d,
              f = jQuery.ajaxSetup({}, t),
              _ = f.context || f,
              h = f.context && (_.nodeType || _.jquery) ? jQuery(_) : jQuery.event,
              E = jQuery.Deferred(),
              m = jQuery.Callbacks("once memory"),
              O = f.statusCode || {},
              g = {},
              C = {},
              I = "canceled",
              A = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (l) {
                    if (!a) for (a = {}; (t = be.exec(i)); ) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                    t = a[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return l ? i : null;
                },
                setRequestHeader: function (e, t) {
                  return null == l && ((e = C[e.toLowerCase()] = C[e.toLowerCase()] || e), (g[e] = t)), this;
                },
                overrideMimeType: function (e) {
                  return null == l && (f.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (l) A.always(e[A.status]);
                    else for (t in e) O[t] = [O[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || I;
                  return o && o.abort(t), done(0, t), this;
                }
              };
            if (
              (E.promise(A),
              (f.url = ((e || f.url || ge.href) + "").replace(De, ge.protocol + "//")),
              (f.type = t.method || t.type || f.method || f.type),
              (f.dataTypes = (f.dataType || "*").toLowerCase().match(L) || [""]),
              null == f.crossDomain)
            ) {
              c = T.createElement("a");
              try {
                (c.href = f.url), (c.href = c.href), (f.crossDomain = Ke.protocol + "//" + Ke.host != c.protocol + "//" + c.host);
              } catch (e) {
                f.crossDomain = !0;
              }
            }
            if (
              (f.data && f.processData && "string" != typeof f.data && (f.data = jQuery.param(f.data, f.traditional)),
              inspectPrefiltersOrTransports(Pe, f, t, A),
              l)
            )
              return A;
            for (p in ((u = jQuery.event && f.global) && 0 == jQuery.active++ && jQuery.event.trigger("ajaxStart"),
            (f.type = f.type.toUpperCase()),
            (f.hasContent = !xe.test(f.type)),
            (r = f.url.replace(Le, "")),
            f.hasContent
              ? f.data &&
                f.processData &&
                0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                (f.data = f.data.replace(Ne, "+"))
              : ((d = f.url.slice(r.length)),
                f.data && (f.processData || "string" == typeof f.data) && ((r += (Ie.test(r) ? "&" : "?") + f.data), delete f.data),
                !1 === f.cache && ((r = r.replace(Re, "$1")), (d = (Ie.test(r) ? "&" : "?") + "_=" + Ce.guid++ + d)),
                (f.url = r + d)),
            f.ifModified &&
              (jQuery.lastModified[r] && A.setRequestHeader("If-Modified-Since", jQuery.lastModified[r]),
              jQuery.etag[r] && A.setRequestHeader("If-None-Match", jQuery.etag[r])),
            ((f.data && f.hasContent && !1 !== f.contentType) || t.contentType) && A.setRequestHeader("Content-Type", f.contentType),
            A.setRequestHeader(
              "Accept",
              f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + ke + "; q=0.01" : "")
                : f.accepts["*"]
            ),
            f.headers))
              A.setRequestHeader(p, f.headers[p]);
            if (f.beforeSend && (!1 === f.beforeSend.call(_, A, f) || l)) return A.abort();
            if (((I = "abort"), m.add(f.complete), A.done(f.success), A.fail(f.error), (o = inspectPrefiltersOrTransports(we, f, t, A)))) {
              if (((A.readyState = 1), u && h.trigger("ajaxSend", [A, f]), l)) return A;
              f.async &&
                f.timeout > 0 &&
                (s = n.setTimeout(function () {
                  A.abort("timeout");
                }, f.timeout));
              try {
                (l = !1), o.send(g, done);
              } catch (e) {
                if (l) throw e;
                done(-1, e);
              }
            } else done(-1, "No Transport");
            function done(e, t, a, c) {
              var p,
                d,
                T,
                g,
                C,
                I = t;
              l ||
                ((l = !0),
                s && n.clearTimeout(s),
                (o = void 0),
                (i = c || ""),
                (A.readyState = e > 0 ? 4 : 0),
                (p = (e >= 200 && e < 300) || 304 === e),
                a &&
                  (g = (function ajaxHandleResponses(e, t, n) {
                    for (var o, r, i, a, s = e.contents, c = e.dataTypes; "*" === c[0]; )
                      c.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (o)
                      for (r in s)
                        if (s[r] && s[r].test(o)) {
                          c.unshift(r);
                          break;
                        }
                    if (c[0] in n) i = c[0];
                    else {
                      for (r in n) {
                        if (!c[0] || e.converters[r + " " + c[0]]) {
                          i = r;
                          break;
                        }
                        a || (a = r);
                      }
                      i = i || a;
                    }
                    if (i) return i !== c[0] && c.unshift(i), n[i];
                  })(f, A, a)),
                !p &&
                  jQuery.inArray("script", f.dataTypes) > -1 &&
                  jQuery.inArray("json", f.dataTypes) < 0 &&
                  (f.converters["text script"] = function () {}),
                (g = (function ajaxConvert(e, t, n, o) {
                  var r,
                    i,
                    a,
                    s,
                    c,
                    l = {},
                    u = e.dataTypes.slice();
                  if (u[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                  for (i = u.shift(); i; )
                    if (
                      (e.responseFields[i] && (n[e.responseFields[i]] = t),
                      !c && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                      (c = i),
                      (i = u.shift()))
                    )
                      if ("*" === i) i = c;
                      else if ("*" !== c && c !== i) {
                        if (!(a = l[c + " " + i] || l["* " + i]))
                          for (r in l)
                            if ((s = r.split(" "))[1] === i && (a = l[c + " " + s[0]] || l["* " + s[0]])) {
                              !0 === a ? (a = l[r]) : !0 !== l[r] && ((i = s[0]), u.unshift(s[1]));
                              break;
                            }
                        if (!0 !== a)
                          if (a && e.throws) t = a(t);
                          else
                            try {
                              t = a(t);
                            } catch (e) {
                              return { state: "parsererror", error: a ? e : "No conversion from " + c + " to " + i };
                            }
                      }
                  return { state: "success", data: t };
                })(f, g, A, p)),
                p
                  ? (f.ifModified &&
                      ((C = A.getResponseHeader("Last-Modified")) && (jQuery.lastModified[r] = C),
                      (C = A.getResponseHeader("etag")) && (jQuery.etag[r] = C)),
                    204 === e || "HEAD" === f.type
                      ? (I = "nocontent")
                      : 304 === e
                      ? (I = "notmodified")
                      : ((I = g.state), (d = g.data), (p = !(T = g.error))))
                  : ((T = I), (!e && I) || ((I = "error"), e < 0 && (e = 0))),
                (A.status = e),
                (A.statusText = (t || I) + ""),
                p ? E.resolveWith(_, [d, I, A]) : E.rejectWith(_, [A, I, T]),
                A.statusCode(O),
                (O = void 0),
                u && h.trigger(p ? "ajaxSuccess" : "ajaxError", [A, f, p ? d : T]),
                m.fireWith(_, [A, I]),
                u && (h.trigger("ajaxComplete", [A, f]), --jQuery.active || jQuery.event.trigger("ajaxStop")));
            }
            return A;
          },
          getJSON: function (e, t, n) {
            return jQuery.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return jQuery.get(e, void 0, t, "script");
          }
        }),
        jQuery.each(["get", "post"], function (e, t) {
          jQuery[t] = function (e, n, o, r) {
            return (
              m(n) && ((r = r || o), (o = n), (n = void 0)),
              jQuery.ajax(jQuery.extend({ url: e, type: t, dataType: r, data: n, success: o }, jQuery.isPlainObject(e) && e))
            );
          };
        }),
        jQuery.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
        }),
        (jQuery._evalUrl = function (e, t, n) {
          return jQuery.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (e) {
              jQuery.globalEval(e, t, n);
            }
          });
        }),
        jQuery.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (m(e) && (e = e.call(this[0])),
                (t = jQuery(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return m(e)
              ? this.each(function (t) {
                  jQuery(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = jQuery(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = m(e);
            return this.each(function (n) {
              jQuery(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  jQuery(this).replaceWith(this.childNodes);
                }),
              this
            );
          }
        }),
        (jQuery.expr.pseudos.hidden = function (e) {
          return !jQuery.expr.pseudos.visible(e);
        }),
        (jQuery.expr.pseudos.visible = function (e) {
          return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (jQuery.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var Me = { 0: 200, 1223: 204 },
        Be = jQuery.ajaxSettings.xhr();
      (E.cors = !!Be && "withCredentials" in Be),
        (E.ajax = Be = !!Be),
        jQuery.ajaxTransport(function (e) {
          var t, o;
          if (E.cors || (Be && !e.crossDomain))
            return {
              send: function (r, i) {
                var a,
                  s = e.xhr();
                if ((s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (a in e.xhrFields) s[a] = e.xhrFields[a];
                for (a in (e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"),
                r))
                  s.setRequestHeader(a, r[a]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t = o = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                      "abort" === e
                        ? s.abort()
                        : "error" === e
                        ? "number" != typeof s.status
                          ? i(0, "error")
                          : i(s.status, s.statusText)
                        : i(
                            Me[s.status] || s.status,
                            s.statusText,
                            "text" !== (s.responseType || "text") || "string" != typeof s.responseText
                              ? { binary: s.response }
                              : { text: s.responseText },
                            s.getAllResponseHeaders()
                          ));
                  };
                }),
                  (s.onload = t()),
                  (o = s.onerror = s.ontimeout = t("error")),
                  void 0 !== s.onabort
                    ? (s.onabort = o)
                    : (s.onreadystatechange = function () {
                        4 === s.readyState &&
                          n.setTimeout(function () {
                            t && o();
                          });
                      }),
                  (t = t("abort"));
                try {
                  s.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              }
            };
        }),
        jQuery.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        jQuery.ajaxSetup({
          accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return jQuery.globalEval(e), e;
            }
          }
        }),
        jQuery.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        jQuery.ajaxTransport("script", function (e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (o, r) {
                (t = jQuery("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (e) {
                      t.remove(), (n = null), e && r("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  T.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              }
            };
        });
      var Fe,
        Ue = [],
        He = /(=)\?(?=&|$)|\?\?/;
      jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Ue.pop() || jQuery.expando + "_" + Ce.guid++;
          return (this[e] = !0), e;
        }
      }),
        jQuery.ajaxPrefilter("json jsonp", function (e, t, o) {
          var r,
            i,
            a,
            s =
              !1 !== e.jsonp &&
              (He.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                  He.test(e.data) &&
                  "data");
          if (s || "jsonp" === e.dataTypes[0])
            return (
              (r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              s ? (e[s] = e[s].replace(He, "$1" + r)) : !1 !== e.jsonp && (e.url += (Ie.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
              (e.converters["script json"] = function () {
                return a || jQuery.error(r + " was not called"), a[0];
              }),
              (e.dataTypes[0] = "json"),
              (i = n[r]),
              (n[r] = function () {
                a = arguments;
              }),
              o.always(function () {
                void 0 === i ? jQuery(n).removeProp(r) : (n[r] = i),
                  e[r] && ((e.jsonpCallback = t.jsonpCallback), Ue.push(r)),
                  a && m(i) && i(a[0]),
                  (a = i = void 0);
              }),
              "script"
            );
        }),
        (E.createHTMLDocument =
          (((Fe = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Fe.childNodes.length)),
        (jQuery.parseHTML = function (e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
                (E.createHTMLDocument
                  ? (((o = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href),
                    t.head.appendChild(o))
                  : (t = T)),
              (i = !n && []),
              (r = A.exec(e))
                ? [t.createElement(r[1])]
                : ((r = buildFragment([e], t, i)), i && i.length && jQuery(i).remove(), jQuery.merge([], r.childNodes)));
          var o, r, i;
        }),
        (jQuery.fn.load = function (e, t, n) {
          var o,
            r,
            i,
            a = this,
            s = e.indexOf(" ");
          return (
            s > -1 && ((o = stripAndCollapse(e.slice(s))), (e = e.slice(0, s))),
            m(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (r = "POST"),
            a.length > 0 &&
              jQuery
                .ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (i = arguments), a.html(o ? jQuery("<div>").append(jQuery.parseHTML(e)).find(o) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      a.each(function () {
                        n.apply(this, i || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        (jQuery.expr.pseudos.animated = function (e) {
          return jQuery.grep(jQuery.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (jQuery.offset = {
          setOffset: function (e, t, n) {
            var o,
              r,
              i,
              a,
              s,
              c,
              l = jQuery.css(e, "position"),
              u = jQuery(e),
              p = {};
            "static" === l && (e.style.position = "relative"),
              (s = u.offset()),
              (i = jQuery.css(e, "top")),
              (c = jQuery.css(e, "left")),
              ("absolute" === l || "fixed" === l) && (i + c).indexOf("auto") > -1
                ? ((a = (o = u.position()).top), (r = o.left))
                : ((a = parseFloat(i) || 0), (r = parseFloat(c) || 0)),
              m(t) && (t = t.call(e, n, jQuery.extend({}, s))),
              null != t.top && (p.top = t.top - s.top + a),
              null != t.left && (p.left = t.left - s.left + r),
              "using" in t ? t.using.call(e, p) : u.css(p);
          }
        }),
        jQuery.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    jQuery.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              o = this[0];
            return o
              ? o.getClientRects().length
                ? ((t = o.getBoundingClientRect()),
                  (n = o.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                o = this[0],
                r = { top: 0, left: 0 };
              if ("fixed" === jQuery.css(o, "position")) t = o.getBoundingClientRect();
              else {
                for (
                  t = this.offset(), n = o.ownerDocument, e = o.offsetParent || n.documentElement;
                  e && (e === n.body || e === n.documentElement) && "static" === jQuery.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== o &&
                  1 === e.nodeType &&
                  (((r = jQuery(e).offset()).top += jQuery.css(e, "borderTopWidth", !0)), (r.left += jQuery.css(e, "borderLeftWidth", !0)));
              }
              return { top: t.top - r.top - jQuery.css(o, "marginTop", !0), left: t.left - r.left - jQuery.css(o, "marginLeft", !0) };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (var e = this.offsetParent; e && "static" === jQuery.css(e, "position"); ) e = e.offsetParent;
              return e || U;
            });
          }
        }),
        jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
          var n = "pageYOffset" === t;
          jQuery.fn[e] = function (o) {
            return access(
              this,
              function (e, o, r) {
                var i;
                if ((O(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView), void 0 === r)) return i ? i[t] : e[o];
                i ? i.scrollTo(n ? i.pageXOffset : r, n ? r : i.pageYOffset) : (e[o] = r);
              },
              e,
              o,
              arguments.length
            );
          };
        }),
        jQuery.each(["top", "left"], function (e, t) {
          jQuery.cssHooks[t] = addGetHookIf(E.pixelPosition, function (e, n) {
            if (n) return (n = curCSS(e, t)), ee.test(n) ? jQuery(e).position()[t] + "px" : n;
          });
        }),
        jQuery.each({ Height: "height", Width: "width" }, function (e, t) {
          jQuery.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, o) {
            jQuery.fn[o] = function (r, i) {
              var a = arguments.length && (n || "boolean" != typeof r),
                s = n || (!0 === r || !0 === i ? "margin" : "border");
              return access(
                this,
                function (t, n, r) {
                  var i;
                  return O(t)
                    ? 0 === o.indexOf("outer")
                      ? t["inner" + e]
                      : t.document.documentElement["client" + e]
                    : 9 === t.nodeType
                    ? ((i = t.documentElement),
                      Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e]))
                    : void 0 === r
                    ? jQuery.css(t, n, s)
                    : jQuery.style(t, n, r, s);
                },
                t,
                a ? r : void 0,
                a
              );
            };
          });
        }),
        jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
          jQuery.fn[t] = function (e) {
            return this.on(t, e);
          };
        }),
        jQuery.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, o) {
            return this.on(t, e, n, o);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
          },
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          }
        }),
        jQuery.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            jQuery.fn[t] = function (e, n) {
              return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            };
          }
        );
      var Ge = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      (jQuery.proxy = function (e, t) {
        var n, o, r;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
          return (
            (o = s.call(arguments, 2)),
            ((r = function () {
              return e.apply(t || this, o.concat(s.call(arguments)));
            }).guid = e.guid =
              e.guid || jQuery.guid++),
            r
          );
      }),
        (jQuery.holdReady = function (e) {
          e ? jQuery.readyWait++ : jQuery.ready(!0);
        }),
        (jQuery.isArray = Array.isArray),
        (jQuery.parseJSON = JSON.parse),
        (jQuery.nodeName = nodeName),
        (jQuery.isFunction = m),
        (jQuery.isWindow = O),
        (jQuery.camelCase = camelCase),
        (jQuery.type = toType),
        (jQuery.now = Date.now),
        (jQuery.isNumeric = function (e) {
          var t = jQuery.type(e);
          return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }),
        (jQuery.trim = function (e) {
          return null == e ? "" : (e + "").replace(Ge, "$1");
        }),
        void 0 ===
          (o = function () {
            return jQuery;
          }.apply(t, [])) || (e.exports = o);
      var je = n.jQuery,
        We = n.$;
      return (
        (jQuery.noConflict = function (e) {
          return n.$ === jQuery && (n.$ = We), e && n.jQuery === jQuery && (n.jQuery = je), jQuery;
        }),
        void 0 === r && (n.jQuery = n.$ = jQuery),
        jQuery
      );
    });
  },
  35: function (e, t, n) {
    "use strict";
    t.a = {
      thank_you_page_CH: "https://poperblocker.com/welcome",
      thank_you_page_FF: "https://poperblocker.com/welcome-firefox",
      privacy_policy_CH: "https://poperblocker.com/privacy/",
      privacy_policy_FF: "https://addons.mozilla.org/en-US/firefox/addon/poper-blocker-pop-up-blocker/privacy/",
      uninstall_page_CH: "https://poperblocker.com/uninstall/?",
      uninstall_page_FF: "https://poperblocker.com/uninstall-firefox/?",
      feedback_page: "https://poperblocker.com/feedback.html?from=ext",
      contact_page: "https://poperblocker.com/contact-form.html",
      appStore_CH: "https://chrome.google.com/webstore/detail/pop-up-blocker-for-chrome/bkkbcggnhapdmkeljlodobbkopceiche",
      appStore_FF: "https://addons.mozilla.org/en-US/firefox/addon/poper-blocker-pop-up-blocker/",
      extension_review_page_CH:
        "https://chrome.google.com/webstore/detail/pop-up-blocker-for-chrome/bkkbcggnhapdmkeljlodobbkopceiche/reviews",
      extension_review_page_FF: "https://addons.mozilla.org/en-US/firefox/addon/poper-blocker-pop-up-blocker/reviews/add",
      twitter_share_link:
        "https://twitter.com/intent/tweet?hashtags=popups&original_referer=https%3A%2F%2Fpoperblocker.com%3Fref%3Dfb_pp_share&related=socialmediahats&text=I'm%20using%20poper%20blocker%20to%20enjoy%20a%20popup%20free%20browsing%20experience%20pic.twitter.com%2FniqVgqfmAw&url=https%3A%2F%2Fgoo.gl%2FryoaEn&via=poper_blocker",
      facebook_share_link:
        "https://www.facebook.com/dialog/share?app_id=1911035589168170&display=popup&href=https%3A%2F%2Fpoperblocker.com%3Fref%3Dfb_pp_share%3Fhl%3Den&hashtag=%23For_No_More_Popups_Click_Below",
      facebook_base_url: "www.facebook.com",
      overlay_check_API: "https://api2.poperblocker.com/view/update",
      overlay_blocking_context_item_contexts: ["page", "frame", "selection", "link", "editable", "image", "video", "audio"],
      googleSheetID: "1dRQsmt6DYMXGo3YeTQ442kV-xxG1LJfG41wEUpnWefM",
      dataSettings: { strKeys: ["ga_allEvent_rate", "ni"], arrKeys: ["blacklist", "whitelist"] },
      blockCountsToShowRate: 5,
      blockCountsToShowRateAgain: 100,
      totalBlockingFeatures: 2,
      blockedTypes: {
        win: "win",
        tab: "tab",
        overlay: "overlay",
        ad: "ad",
        cookie: "cookie",
        fbAd: "fbAd",
        linkedinAd: "linkedinAd",
        twitterAd: "twitterAd",
        tracker: "tracker",
        instagramAd: "instagramAd",
        youtubeAd: "youtubeAd"
      },
      defaultBlackList: [
        "adrunnr",
        "successforyu.clickfunnels.com",
        "fmovies.se",
        "in-365-tagen.info",
        "5000-settimanale.com",
        "shop.mazzugioielli.com",
        "maxigossip.com",
        "lp.yazizim.com",
        "beyourxfriend.com",
        "99tab.com",
        "zzqrt.com",
        "canuck-method.net",
        "bewomenly.com",
        "playnow.guru",
        "datingforyou-48e1.kxcdn.com",
        "trafficnetworkads24.com",
        "sistemadedinerogratis.com",
        "canuckmethodprofit.co",
        "consumerresearchnetwork.com",
        "securemacfix.com",
        "zz3d3.ru",
        "zd1.quebec-bin.com",
        "hot-games4you.xyz",
        "om.elvenar.com",
        "superpccleanup.com",
        "gomediaz.com",
        "judithi.xyz",
        "free.atozmanuals.com",
        "yoursuccess.ravpage.co.il",
        "123hop.ir",
        "quizcliente.pw",
        "aussiemethod.biz",
        "hlpnowp-c.com",
        "picbumper.com",
        "shaneless.com",
        "anacondamonster.com",
        "altrk1.com",
        "health.todaydiets.com",
        "download.weatherblink.com",
        "happyluketh.com",
        "go.ameinfo.com",
        "50kaweek.net",
        "thepornsurvey.com",
        "ofsiite.ru",
        "fulltab.com",
        "1000spins.com",
        "time2play-online.net",
        "vintacars.com",
        "welcome.pussysaga.com",
        "free-desktop-games.com",
        "download.televisionfanatic.com",
        "theprofitsmaker.net",
        "sgad.info",
        "algocashmaster.net",
        "sunmaker.com",
        "topvipdreams.com",
        "watchmygirlfriend.gfpornvideos.com",
        "filesharefanatic.com",
        "safedownloadhub.com",
        "7awlalalam.blogspot.com",
        "tvplusnewtab.com",
        "trendingpatrol.com",
        "moneymorning.com",
        "ifileyou.com",
        "classifiedcanada.ca",
        "firefan.com",
        "methode-binaire.com",
        "letmetell.com",
        "kenduktur.com",
        "getafuk.com",
        "yotraleplahnte.ru",
        "jackpot.88beto.com",
        "pwwysydh.com",
        "search.queryrouter.com",
        "v.lvztxy.com",
        "pussysaga.com",
        "saffamethod.com",
        "prezzonline.com",
        "searchprivacy.website",
        "3d2819216eb4e1035879-7c248de0c99745406e9b749fc86ec3e4.ssl.cf1.rackcdn.com",
        "only2date.com",
        "mysagagame.com",
        "themillionaireinpjs.net",
        "wlt.kd2244.com",
        "quickprivacycheck.com",
        "hotchatdate.com",
        "autotraderbot.com",
        "z1.zedo.com",
        "youlucky2014.com",
        "traffic.getmyads.com",
        "appcloudprotected.com",
        "safensecure.com-allsites3.xyz",
        "newpoptab.com",
        "static.williamhill.com",
        "myhealthyblog.co",
        "greatestmobideals.com",
        "sweetclarity.com",
        "mgid.com",
        "securepccure.com",
        "autopengebygger.com",
        "am15.net",
        "es.reimageplus.com",
        "o2.promos-info.com",
        "it.reimageplus.com",
        "westsluts.com",
        "spinandwin.com-ser.pw",
        "reimageplus.com",
        "vodafone.promos-info.com",
        "vinnmatpengar.se",
        "movie.ienjoyapps.com",
        "love4single.com",
        "origin.getprice.com.au",
        "ohmydating.com",
        "lp.want-to-win.com",
        "yabuletchrome.ru",
        "bamdad.net",
        "gotositenow.com",
        "vcrypt.pw",
        "newtabtv.com",
        "mon.setsu.xyz",
        "youforgottorenewyourhosting.com",
        "zone-telechargement.ws",
        "land.pckeeper.software",
        "ad.adpop-1.com",
        "advancedpctools.com",
        "videos.randolphcountyheraldtribune.com",
        "web-start.org",
        "softreadynow.installupgradenowfreshandforyou.website",
        "uplod.ws",
        "pornhubcasino.com",
        "maxbet.ro",
        "2016prizefeed.com",
        "thevideo.me",
        "wantubad.com",
        "tavanero.com",
        "xcusmy.club",
        "daclips.in",
        "gaymenofporn.online",
        "jackpotcitycasino.com",
        "italian-method.com",
        "getsearchincognito.com",
        "youjustwonprize.com",
        "finanz-nachrichten.me",
        "quizcliente.site",
        "da.reimageplus.com",
        "jkanime.net",
        "britmoneymethod.com",
        "uae.souq.com",
        "ka.azzer.net",
        "safensecure.xyz",
        "8t.hootingrhejkz.online",
        "www6.blinkx.com",
        "wizzcaster.com",
        "comparaison-prix.com",
        "vodlocker.lol",
        "fr.reimageplus.com",
        "free.fromdoctopdf.com",
        "userscloud.com",
        "myprivatesearch.com",
        "fanli90.cn",
        "tutticodicisconto.it",
        "mediadec.com",
        "gogamego.thewhizproducts.com",
        "download.weatherblink.com",
        "free.videodownloadconverter.com",
        "we-are-gamers.com",
        "sesso.communityadult.net",
        "lp.blpmovies.com",
        "search.queryrouter.com",
        "bbb-johannesburg.localspecific.com",
        "lp.blpmovies.com",
        "go.ppixelm.com",
        "r0.ru",
        "sesso.communityadult.net",
        "bbb-johannesburg.localspecific.com",
        "ppixelm.com",
        "cyberguardianspe.info",
        "we-are-gamers.com",
        "loginfaster.com/new",
        "www.alfacart.com",
        "www.foresee.com",
        "mobile-win.com",
        "www.plusnetwork.com",
        "www.amicafarmacia.com",
        "www.ienjoyapps.com",
        "cheapcheap.io",
        "screenaddict.thewhizproducts.com",
        "nova.rambler.ru",
        "free.gamingwonderland.com",
        "p9328ujeiw1.ru",
        "mobilecasinoclub.co.uk",
        "pfhsystem.com",
        "regtuneup.com",
        "theprofitsmaker.net",
        "bodogpromotions.eu",
        "heroesreplay.org",
        "financialsecrets.info",
        "mymoneymakingapp.com",
        "sunmaker.com",
        "888casino-promotions.com",
        "vogliosesso.com",
        "scienceremix.com",
        "allinonedocs.com",
        "arabia.starzplay.com",
        "allirishcasino.com",
        "advancepctools.info",
        "movie.ienjoyapps.com",
        "surveyform001.s3-website-us-east-1.amazonaws.com",
        "mgs188.com",
        "pfhsystem.com",
        "lpeva.com",
        "ddsh8.com",
        "theprofitsmaker.net",
        "b2.ijquery11.com",
        "sporthero.thewhizmarketing.com",
        "securefastmac.tech",
        "seen-on-screen.thewhizmarketing.com",
        "1000spins.com",
        "search.queryrouter.com",
        "pfhsystem.com",
        "reimageplus.com",
        "offer.alibaba.com",
        "searchlistings.org",
        "search.queryrouter.com",
        "search.queryrouter.com",
        "mybinaryoptionsrobot.com",
        "duplicashapp.com",
        "search.queryrouter.com",
        "bestgame.directory",
        "droidclub.net",
        ".rivalo.com",
        "yoursuperprize.com",
        "mediaexplained.com",
        "om.elvenar.com",
        "shinar.club",
        "revitoleczemacream.com",
        "freelotto.com",
        "screenaddict.thewhizproducts.com",
        "download.bringmesports.com/",
        "allinonedocs.com",
        "driver-fixer.com",
        "arabydeal.com",
        "cleanyourcomputertoday.com",
        "arabydeal.com",
        "music.mixplugin.com",
        "1se.info",
        "survey12.com",
        "freesoftwaredlul.com",
        "pldist01.com",
        "ad.adpop-1.com",
        "searchanonymous.net",
        "abrst.pro",
        "muzikfury.thewhizmarketing.com",
        "lp.mbtrx.com",
        "th1.forfun.maxisize-pro.com",
        "watchmygirlfriend.gfpornbox.com",
        "new.freelotto.com",
        "desktoptrack.com",
        "search.queryrouter.com",
        "offer.alibaba.com",
        "1000spins.com",
        "promotions.coral.co.uk",
        "search.queryrouter.com",
        "tbsia.com",
        "tbsia.com",
        "multtaepyo.com",
        "search.queryrouter.com",
        "czechmethod.com",
        "consumerview.co",
        "wayretail.com",
        "72onbase.com",
        "funsafetab.com",
        "search.queryrouter.com",
        "speedyfiledownload.com",
        "driver-fixer.com",
        "arabydeal.com",
        "cleanyourcomputertoday.com",
        "arabydeal.com",
        "music.mixplugin.com",
        "1se.info",
        "survey12.com",
        "freesoftwaredlul.com",
        "pldist01.com",
        "ad.adpop-1.com",
        "searchanonymous.net",
        "abrst.pro",
        "muzikfury.thewhizmarketing.com",
        "lp.mbtrx.com",
        "th1.forfun.maxisize-pro.com",
        "watchmygirlfriend.gfpornbox.com",
        "new.freelotto.com",
        "desktoptrack.com",
        "search.queryrouter.com",
        "offer.alibaba.com",
        "1000spins.com",
        "promotions.coral.co.uk",
        "search.queryrouter.com",
        "tbsia.com",
        "tbsia.com",
        "surveyform001.s3-website-us-east-1.amazonaws.com",
        "mgs188.com",
        "pfhsystem.com",
        "lpeva.com",
        "ddsh8.com",
        "theprofitsmaker.net",
        "quantomcoding.com",
        "sporthero.thewhizmarketing.com",
        "popads.net",
        "onclkds.com",
        "consumerview.co",
        "12kotov.ru",
        "ruhotpair2.fingta.com",
        "easytelevisionaccessnow.com",
        "ahwrd.com",
        "lpeva.com",
        "ppgzf.com",
        "zjstx.com",
        "kituure.xyz",
        "join.pro-gaming-world.com",
        "mackeeperapp.mackeeper.com",
        "tracknotify.com",
        "2075.cdn.beyondhosting.net",
        "idollash.com",
        "ds.moviegoat.com",
        "fulltab.com",
        "rackcdn.com",
        "prestoris.com",
        "adsterra.com",
        "swampssovuuhusp.top",
        "streesusa.info",
        "freesoftwaredlul.com",
        "adreactor.com",
        "a-static.com",
        "codeonclick.com",
        "heheme.com",
        "adf.ly",
        "seen-on-screen.thewhizmarketing.com",
        "openload.co"
      ]
    };
  }
});
