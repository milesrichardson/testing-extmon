/*! For license information please see service-worker.js.LICENSE.txt */
!(function (t) {
  var e = {};
  function __webpack_require__(r) {
    if (e[r]) return e[r].exports;
    var n = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(n.exports, n, n.exports, __webpack_require__), (n.l = !0), n.exports;
  }
  (__webpack_require__.m = t),
    (__webpack_require__.c = e),
    (__webpack_require__.d = function (t, e, r) {
      __webpack_require__.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (__webpack_require__.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (__webpack_require__.t = function (t, e) {
      if ((1 & e && (t = __webpack_require__(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if ((__webpack_require__.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
        for (var n in t)
          __webpack_require__.d(
            r,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return r;
    }),
    (__webpack_require__.n = function (t) {
      var e =
        t && t.__esModule
          ? function getDefault() {
              return t.default;
            }
          : function getModuleExports() {
              return t;
            };
      return __webpack_require__.d(e, "a", e), e;
    }),
    (__webpack_require__.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (__webpack_require__.p = ""),
    __webpack_require__((__webpack_require__.s = 271));
})({
  0: function (t, e, r) {
    "use strict";
    r.d(e, "h", function () {
      return n;
    }),
      r.d(e, "o", function () {
        return i;
      }),
      r.d(e, "t", function () {
        return s;
      }),
      r.d(e, "m", function () {
        return a;
      }),
      r.d(e, "d", function () {
        return o;
      }),
      r.d(e, "i", function () {
        return c;
      }),
      r.d(e, "G", function () {
        return E;
      }),
      r.d(e, "r", function () {
        return u;
      }),
      r.d(e, "F", function () {
        return _;
      }),
      r.d(e, "s", function () {
        return T;
      }),
      r.d(e, "e", function () {
        return h;
      }),
      r.d(e, "K", function () {
        return d;
      }),
      r.d(e, "x", function () {
        return I;
      }),
      r.d(e, "J", function () {
        return f;
      }),
      r.d(e, "q", function () {
        return A;
      }),
      r.d(e, "z", function () {
        return S;
      }),
      r.d(e, "y", function () {
        return C;
      }),
      r.d(e, "p", function () {
        return p;
      }),
      r.d(e, "w", function () {
        return L;
      }),
      r.d(e, "l", function () {
        return R;
      }),
      r.d(e, "u", function () {
        return N;
      }),
      r.d(e, "n", function () {
        return m;
      }),
      r.d(e, "k", function () {
        return g;
      }),
      r.d(e, "D", function () {
        return y;
      }),
      r.d(e, "C", function () {
        return b;
      }),
      r.d(e, "v", function () {
        return P;
      }),
      r.d(e, "c", function () {
        return B;
      }),
      r.d(e, "b", function () {
        return w;
      }),
      r.d(e, "B", function () {
        return D;
      }),
      r.d(e, "j", function () {
        return K;
      }),
      r.d(e, "a", function () {
        return k;
      }),
      r.d(e, "I", function () {
        return U;
      }),
      r.d(e, "L", function () {
        return F;
      }),
      r.d(e, "O", function () {
        return M;
      }),
      r.d(e, "N", function () {
        return v;
      }),
      r.d(e, "M", function () {
        return G;
      }),
      r.d(e, "P", function () {
        return H;
      }),
      r.d(e, "E", function () {
        return V;
      }),
      r.d(e, "f", function () {
        return x;
      }),
      r.d(e, "A", function () {
        return Y;
      }),
      r.d(e, "H", function () {
        return W;
      }),
      r.d(e, "g", function () {
        return j;
      });
    const n = {
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
      i = {
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
      s = {
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
      o = {
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
      E = {
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
      _ = { AFTER: 5, EVERY: 100 },
      l = u.WEB_APP + "/api/v1",
      O = "" + u.ANALYTICS_APP,
      T = "?modal=login",
      h = {
        OVERLAY_CHECK: "https://api2.poperblocker.com/view/update",
        ANALYTICS_SEND_EVENT: O + "/event",
        GET_USER: l + "/user",
        GET_USER_SEGMENT: l + "/segment",
        LOGOUT: l + "/auth/logout",
        MANAGE_SUBSCRIPTION: l + "/subscriptions",
        ANALYTIC_INFO: l + "/analytics/sync",
        WHITELIST: l + "/whitelist",
        POPULAR_SITES_FOR_BLOCK_ELEMENTS: l + "/mostPopularSitesForBlockElements",
        PROMO_COUPON: l + "/promoCoupon",
        SETTINGS: l + "/settings",
        REFRESH: l + "/auth/refresh",
        SOCIALBLOCKER_CONFIG: l + "/socialblocker/config",
        ADS_BLOCKER_CONFIG: l + "/adsblocker/config",
        TRACKERS_BLOCKER_CONFIG: l + "/trackersblocker/config",
        YOUTUBE_BLOCKER_CONFIG: l + "/youtubeblocker/config",
        GROWTHBOOK: l + "/growthbook",
        COOKIE_CRUMBLER: l + "/cookieCrumbler",
        ALIVE: l + "/alive"
      },
      d = 288e5,
      I = 864e5,
      f = 5184e6,
      A = 36e5,
      S = 1,
      C = 60 * S,
      p = 12 * C,
      L = 24 * C,
      R = 3,
      N = 41,
      m = "https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&display=swa",
      g = { poper20: "poper20", poper30: "poper30" },
      y = 5,
      b = 5,
      P = 21,
      B = {
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
      w = {
        SEGMENT_ALARM: "segmentUpdate",
        TRACKERSBLOCKER_ALARM: "trackersBlockerConfigAlarm",
        ADSBLOCKER_ALARM: "adsBlockerConfigAlarm",
        YOUTUBEBLOCKER_ALARM: "youtubeBlockerConfigAlarm",
        COOKIE_CRUMBLER_ALARM: "cookieCrumblerConfigAlarm"
      },
      D = { CONTENT_SETTINGS: "contentSettings", ALL_URLS: "<all_urls>", BLOCK: "block", ASK: "ask" },
      K = {
        HIDDEN_PROPERTY: "{display: none !important ; visibility : hidden !important ; opacity : 0 !important}",
        DISPLAY: "display",
        VISIBILITY: "visibility",
        OPACITY: "opacity"
      },
      k = { KEY_CONFIG_STORAGE: "adsBlockerConfig" },
      U = { KEY_CONFIG_STORAGE: "trackersBlockerConfig" },
      F = { KEY_CONFIG_STORAGE: "youtubeBlockerConfig" },
      M = "pbYtHANDLED",
      v = "youtube.com",
      G = { HIDE: "hide", CLICK: "click", VIDEO: "video" },
      H = { ADS_HOOK: "10000" },
      V = { COLORS: { orange: "#ffc866", green: " #2ebd92" } },
      x = {
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
      Y = { PAYMENT_PENDING: 0, PAYMENT_RECIEVED: 1, FREE_TRIAL: 2, PAYMENT_DEFERED: 3, CANCELED: 4, REFUNDED: 5, PAUSED: 6 },
      W = { REMINDER_INTERVAL: 24, REMINDER_TMP_INTERVAL: 12, PERIOD_DAYS_TO_DISPLAY: 7, FEATURE_ACTIVE_DATE: "2023-09-11 00:00:00" },
      j = {
        IFRAME_SOCIAL_HOOK: "IFRAME_SOCIAL_HOOK",
        IFRAME_COOKIE_HOOK: "IFRAME_COOKIE_HOOK",
        IFRAME_ADS_HOOK_PREFIX: "IFRAME_ADS_HOOK_",
        IFRAME_TRACKER_HOOK: "IFRAME_TRACKER_HOOK",
        EXTENSION_PANEL_SETTINGS_PREFIX: "EXTENSION_PANEL_SETTINGS_",
        EXTENSION_PANEL_GO_PRO: "EXTENSION_PANEL_GO_PRO",
        EXTENSION_PANEL_STATS_GO_PRO: "EXTENSION_PANEL_STATS_GO_PRO"
      };
  },
  11: function (t, e) {
    const r = ["Chrome", "Opera", "Edge", "SamsungBrowser", "YaBrowser"],
      n = ["Firefox", "Safari", "MSIE"];
    t.exports.BrowserAPI = (() => {
      for (const t of r) if (navigator.userAgent.indexOf(t) > -1) return !0;
      return !1;
    })()
      ? chrome
      : (() => {
          for (const t of n) if (navigator.userAgent.indexOf(t) > -1) return !0;
          return !1;
        })()
      ? browser
      : { runtime: { sendMessage: () => {} } };
  },
  12: function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return c;
    });
    var n = r(8),
      i = r(19),
      s = r(3),
      a = r(0);
    const o = class extends i.a {
      constructor(t) {
        super(),
          (this.onTrialEnded = t),
          (this.state = 0),
          (this.startTime = -1),
          (this.lastDisplayed = -1),
          (this.doNotShowAgain = !1),
          (this.lastDisplayedPromo = -1),
          (this.daysLeft = a.l);
      }
      async loadAndUpdate() {
        return await super.load(), await this.updateState(), this;
      }
      getDaysLeft() {
        return a.l - Object(s.o)(this.startTime);
      }
      daysSinceDisplayedHook() {
        const t = Date.now(),
          e = this.lastDisplayed < 0 ? t : this.lastDisplayed;
        return Object(s.I)(t - e);
      }
      daysSinceDisplayedPromo() {
        const t = Date.now(),
          e = this.lastDisplayedPromo < 0 ? t : this.lastDisplayedPromo;
        return Object(s.I)(t - e);
      }
      daysSinceStarted() {
        const t = Date.now(),
          e = this.startTime < 0 ? t : this.startTime;
        return Object(s.I)(t - e);
      }
      isTrialActive() {
        return 1 === this.state;
      }
      isTrialEnded() {
        return 2 === this.state;
      }
      isTrialStarted() {
        return this.isTrialActive() && !this.isTrialEnded();
      }
      isTrialPending() {
        return 0 === this.state;
      }
      async updateState() {
        if (!this.isTrialActive() || this.daysLeft <= 0) return;
        this.isTrialActive() ? (this.state = 1) : this.isTrialEnded() && (this.state = 2);
        const t = this.daysLeft,
          e = Object(s.o)(this.startTime);
        this.daysLeft = a.l - e;
        let r = !1;
        t !== this.daysLeft && (r = !0), this.daysLeft <= 0 && (this.endTrial(), (r = !0)), r && this.save();
      }
      async enable() {
        return (
          this.isTrialActive() ||
            this.isTrialEnded() ||
            ((this.startTime = Date.now()), (this.state = 1), (this.lastDisplayed = 0), await this.save()),
          this
        );
      }
      async endTrial() {
        return (
          this.isTrialEnded() ||
            !this.isTrialActive() ||
            ((this.daysLeft = 0), (this.state = 2), (this.doNotShowAgain = !1), await this.save(), this.onTrialEnded()),
          this
        );
      }
      toDTO() {
        return {
          startTime: this.startTime,
          daysLeft: this.daysLeft,
          lastDisplayed: this.lastDisplayed,
          state: this.state,
          doNotShowAgain: this.doNotShowAgain,
          lastDisplayedPromo: this.lastDisplayedPromo
        };
      }
      getKey() {
        return n.b;
      }
      getLegacyKeys() {
        return [];
      }
      getVersion() {
        return 2;
      }
      async migrate(t) {
        if (0 === t) {
          const t = this;
          if ("active" in t) {
            const e = Object(s.o)(this.startTime) >= a.l;
            this.state = e ? 2 : t.active ? 1 : 0;
          }
        }
      }
    };
    let c = o;
    c.getDefault = (t) => new o(t);
  },
  13: function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(3),
      s = r(8),
      a = r(12),
      o = r(18),
      c = Object.defineProperty,
      E = Object.getOwnPropertySymbols,
      u = Object.prototype.hasOwnProperty,
      _ = Object.prototype.propertyIsEnumerable,
      __defNormalProp = (t, e, r) => (e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r)),
      __spreadValues = (t, e) => {
        for (var r in e || (e = {})) u.call(e, r) && __defNormalProp(t, r, e[r]);
        if (E) for (var r of E(e)) _.call(e, r) && __defNormalProp(t, r, e[r]);
        return t;
      };
    e.a = new (class PremiumManager {
      async startPremiumFeature(t = "") {
        return (await Object(i.F)()) || Object(i.M)(t), !1;
      }
      async shouldShowDailyPromo(t) {
        const e = await a.a.getDefault(this.onTrialEnded).loadAndUpdate();
        return e.isTrialStarted() && !e.isTrialEnded() && e.daysSinceDisplayedPromo() >= 1;
      }
      async shouldShowEndPromo(t) {
        const e = await a.a.getDefault(this.onTrialEnded).loadAndUpdate(),
          r = e.startTime + n.l * n.x,
          i = e.lastDisplayedPromo > r;
        return e.isTrialEnded() && !i;
      }
      async updateHookDisplayTime(t) {
        const e = await a.a.getDefault(this.onTrialEnded).loadAndUpdate();
        (e.lastDisplayed = Date.now()), await e.save();
      }
      async updatePromoDisplayTime(t) {
        const e = await a.a.getDefault(this.onTrialEnded).loadAndUpdate();
        (e.lastDisplayedPromo = Date.now()), await e.save();
      }
      async showTrialPromoIfNeeded(t, e) {
        if (await Object(i.F)()) return;
        const r = (await this.shouldShowDailyPromo(t)) && t.ShowDailyPromo,
          s = await this.shouldShowEndPromo(t),
          a = e || {};
        (a.isShowDailyPromo = r),
          (a.isShowEndPromo = s),
          (r || s) &&
            Object(i.a)(
              () => {
                Object(i.Y)(n.t.SHOW_TRIAL_PROMO, { feature: t, extras: a }), this.updatePromoDisplayTime(t);
              },
              () => Object(i.Z)({ name: n.t.SHOW_TRIAL_PROMO, data: { feature: t, extras: a } })
            );
      }
      async getFeaturesTrialState() {
        let t;
        for (const e of Object(s.c)()) {
          const r = await a.a.getDefault(this.onTrialEnded).loadAndUpdate();
          t = __spreadValues({ [e.Name]: { TrialState: r.state, TrialLeftDays: r.getDaysLeft() } }, t);
        }
        return t;
      }
      async isPremiumFeatureAvailable(t) {
        const e = await a.a.getDefault(this.onTrialEnded).load();
        return (await Object(i.F)()) || (t.HasTrial && e.isTrialActive());
      }
      async clearTrials() {
        await a.a.getDefault(this.onTrialEnded).save();
      }
      async onTrialEnded() {
        if (!(await Object(i.F)())) for (const t of Object(s.c)()) await o.a.setFeatureEnabled(t, !1);
      }
      async getTrialEntity() {
        return await a.a.getDefault(this.onTrialEnded).loadAndUpdate();
      }
    })();
  },
  14: function (t, e, r) {
    "use strict";
    r.d(e, "b", function () {
      return i;
    }),
      r.d(e, "a", function () {
        return s;
      }),
      r.d(e, "c", function () {
        return getPremiumFeaturesList;
      }),
      r.d(e, "d", function () {
        return isPremiumFeature;
      });
    var n = r(2);
    const i = "tState",
      s = {
        SocialBlocker: {
          Name: "SocialBlocker",
          SettingsKey: "facebookAdds",
          QuickSettings: { QuickSettingsId: n.j.FACEBOOK, QuickSettingsTitleId: "settingsSocialAd" },
          HasTrial: !0,
          Style: { "margin-top": "43px" },
          ImgURL: "images/facebook-cta.svg",
          TitleStrId: "facebookadsBlocked",
          StartTrialBtnStrId: "startTrialFacebookBtn",
          EndTrialBtnStrId: "startTrialFacebookBtn",
          EndTrialLottieFile: n.c.FACEBOOK_END,
          TotalBlocksKeys: ["fbAd", "linkedinAd", "twitterAd", "instagramAd"],
          ShowDailyPromo: !1,
          Analytics: {
            EndTrialEvent: n.b.ANALYTICS_EVENT_TYPES.SOCIAL_BLOCKER_TRIAL_OVER_PROMOTION_VIEW,
            PromoView: n.b.ANALYTICS_EVENT_TYPES.SOCIAL_BLOCKER_INTRIAL_PROMOTION_VIEW,
            PromoNotificationClick: n.b.ANALYTICS_EVENT_TYPES.SOCIAL_BLOCKER_TRIAL_PROMOTION_NOTIFICATION_CLICK,
            PromoDiscountClick: n.b.ANALYTICS_EVENT_TYPES.CLICK_SOCIAL_BLOCKER_PROMOTION_DISCOUNT
          }
        },
        CookieCrumbler: {
          Name: "CookieCrumbler",
          SettingsKey: "cookieCrumbler",
          QuickSettings: { QuickSettingsId: n.j.COOKIE_CRUMBLER, QuickSettingsTitleId: "settingsCookie" },
          HasTrial: !0,
          Style: { "margin-top": "23px" },
          ImgURL: "images/cookie-blocked.svg",
          TitleStrId: "cookiesBlocked",
          StartTrialBtnStrId: "startTrialcookiesBtn",
          EndTrialBtnStrId: "removeCookieForAllGood",
          EndTrialLottieFile: n.c.COOKIE,
          TotalBlocksKeys: ["cookie"],
          ShowDailyPromo: !1,
          Analytics: {
            EndTrialEvent: n.b.ANALYTICS_EVENT_TYPES.COOKIE_CRUMBLER_END_OF_TRIAL,
            PromoView: n.b.ANALYTICS_EVENT_TYPES.COOKIE_CRUMBLER_IN_TRIAL,
            PromoNotificationClick: n.b.ANALYTICS_EVENT_TYPES.COOKIE_CRUMBLER_TRIAL_PROMOTION_NOTIFICATION_CLICK,
            PromoDiscountClick: n.b.ANALYTICS_EVENT_TYPES.CLICK_COOKIE_PROMOTION_DISCOUNT
          }
        },
        AdsBlocker: {
          Name: "AdsBlocker",
          SettingsKey: "adsBlocker",
          QuickSettings: { QuickSettingsId: "adsBlocker", QuickSettingsTitleId: "settingsAdsBlocker" },
          HasTrial: !0,
          TotalBlocksKeys: ["ad"],
          ImgURL: "images/facebook-cta.svg",
          TitleStrId: "facebookadsBlocked",
          StartTrialBtnStrId: "startTrialFacebookBtn",
          EndTrialBtnStrId: "startTrialFacebookBtn",
          EndTrialLottieFile: n.c.FACEBOOK_END,
          ShowDailyPromo: !1,
          Analytics: {
            HookShow: n.b.ANALYTICS_EVENT_TYPES.ADSBLOCKER_HOOK_SHOW,
            HookShowPostTrial: n.b.ANALYTICS_EVENT_TYPES.ADSBLOCKER_HOOK_SHOW_POSTTRIAL,
            HookClick: n.b.ANALYTICS_EVENT_TYPES.ADSBLOCKER_HOOK_CLICK,
            HookClickPostTrial: n.b.ANALYTICS_EVENT_TYPES.ADSBLOCKER_HOOK_CLICK_POSTTRIAL,
            HookDismiss: n.b.ANALYTICS_EVENT_TYPES.ADSBLOCKER_HOOK_DISMISS,
            HookDismissPostTrial: n.b.ANALYTICS_EVENT_TYPES.ADSBLOCKER_HOOK_DISMISS_POSTTRIAL
          }
        },
        YoutubeBlocker: {
          Name: "YoutubeBlocker",
          SettingsKey: "youtubeBlocker",
          QuickSettings: { QuickSettingsId: "youtubeBlocker", QuickSettingsTitleId: "settingsYoutubeAdsBlocker" },
          HasTrial: !0,
          TotalBlocksKeys: ["youtubeAd"],
          ImgURL: "images/facebook-cta.svg",
          TitleStrId: "facebookadsBlocked",
          StartTrialBtnStrId: "startTrialFacebookBtn",
          EndTrialBtnStrId: "startTrialFacebookBtn",
          EndTrialLottieFile: n.c.FACEBOOK_END,
          ShowDailyPromo: !1,
          Analytics: {
            HookShow: n.b.ANALYTICS_EVENT_TYPES.YOUTUBE_VIDEO_HOOK_SHOW,
            HookShowPostTrial: n.b.ANALYTICS_EVENT_TYPES.YOUTUBE_VIDEO_HOOK_SHOW_POSTTRIAL,
            HookClick: n.b.ANALYTICS_EVENT_TYPES.YOUTUBE_VIDEO_HOOK_CLICK,
            HookClickPostTrial: n.b.ANALYTICS_EVENT_TYPES.YOUTUBE_VIDEO_HOOK_CLICK_POSTTRIAL,
            HookDismiss: n.b.ANALYTICS_EVENT_TYPES.YOUTUBE_VIDEO_HOOK_DISMISS,
            HookDismissPostTrial: n.b.ANALYTICS_EVENT_TYPES.YOUTUBE_VIDEO_HOOK_DISMISS_POSTTRIAL
          }
        },
        TrackersBlocker: {
          Name: "TrackersBlocker",
          SettingsKey: "trackersBlocker",
          QuickSettings: { QuickSettingsId: "trackersBlocker", QuickSettingsTitleId: "settingsTrackersBlocker" },
          HasTrial: !0,
          TotalBlocksKeys: ["tracker"],
          ImgURL: "images/facebook-cta.svg",
          TitleStrId: "trackersBlockerSettingsTitle",
          EndTrialLottieFile: n.c.FACEBOOK_END,
          Analytics: {}
        }
      },
      getPremiumFeaturesList = () => Object.keys(s).map((t) => s[t]),
      isPremiumFeature = (t) =>
        getPremiumFeaturesList().some((e) => {
          return (r = t), e.Name === r.Name;
          var r;
        });
  },
  15: function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return c;
    });
    var n = r(14),
      i = r(37),
      s = r(6),
      a = r(2);
    const o = class extends i.a {
      constructor(t) {
        super(),
          (this.onTrialEnded = t),
          (this.state = 0),
          (this.startTime = -1),
          (this.lastDisplayed = -1),
          (this.doNotShowAgain = !1),
          (this.lastDisplayedPromo = -1),
          (this.daysLeft = a.i);
      }
      async loadAndUpdate() {
        return await super.load(), await this.updateState(), this;
      }
      getDaysLeft() {
        return a.i - Object(s.d)(this.startTime);
      }
      daysSinceDisplayedHook() {
        const t = Date.now(),
          e = this.lastDisplayed < 0 ? t : this.lastDisplayed;
        return Object(s.i)(t - e);
      }
      daysSinceDisplayedPromo() {
        const t = Date.now(),
          e = this.lastDisplayedPromo < 0 ? t : this.lastDisplayedPromo;
        return Object(s.i)(t - e);
      }
      daysSinceStarted() {
        const t = Date.now(),
          e = this.startTime < 0 ? t : this.startTime;
        return Object(s.i)(t - e);
      }
      isTrialActive() {
        return 1 === this.state;
      }
      isTrialEnded() {
        return 2 === this.state;
      }
      isTrialStarted() {
        return this.isTrialActive() && !this.isTrialEnded();
      }
      isTrialPending() {
        return 0 === this.state;
      }
      async updateState() {
        if (!this.isTrialActive() || this.daysLeft <= 0) return;
        this.isTrialActive() ? (this.state = 1) : this.isTrialEnded() && (this.state = 2);
        const t = this.daysLeft,
          e = Object(s.d)(this.startTime);
        this.daysLeft = a.i - e;
        let r = !1;
        t !== this.daysLeft && (r = !0), this.daysLeft <= 0 && (this.endTrial(), (r = !0)), r && this.save();
      }
      async enable() {
        return (
          this.isTrialActive() ||
            this.isTrialEnded() ||
            ((this.startTime = Date.now()), (this.state = 1), (this.lastDisplayed = 0), await this.save()),
          this
        );
      }
      async endTrial() {
        return (
          this.isTrialEnded() ||
            !this.isTrialActive() ||
            ((this.daysLeft = 0), (this.state = 2), (this.doNotShowAgain = !1), await this.save(), this.onTrialEnded()),
          this
        );
      }
      toDTO() {
        return {
          startTime: this.startTime,
          daysLeft: this.daysLeft,
          lastDisplayed: this.lastDisplayed,
          state: this.state,
          doNotShowAgain: this.doNotShowAgain,
          lastDisplayedPromo: this.lastDisplayedPromo
        };
      }
      getKey() {
        return n.b;
      }
      getLegacyKeys() {
        return [];
      }
      getVersion() {
        return 2;
      }
      async migrate(t) {
        if (0 === t) {
          const t = this;
          if ("active" in t) {
            const e = Object(s.d)(this.startTime) >= a.i;
            this.state = e ? 2 : t.active ? 1 : 0;
          }
        }
      }
    };
    let c = o;
    c.getDefault = (t) => new o(t);
  },
  17: function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return n;
    }),
      r.d(e, "b", function () {
        return getBrowserName;
      });
    var n = ((t) => (
      (t.CHROME = "chrome"),
      (t.FIREFOX = "firefox"),
      (t.OPERA = "opera"),
      (t.EDGE = "edge"),
      (t.SAFARI = "safari"),
      (t.UNKNOWN = "unknown"),
      t
    ))(n || {});
    const getBrowserName = () => {
      try {
        const t = navigator.userAgent;
        if (t.match(/opera|opr\//i)) return "opera";
        if (t.match(/firefox|fxios/i)) return "firefox";
        if (t.match(/edg/i)) return "edge";
        if (t.match(/safari/i) && !t.match(/chrome|chromium|crios/i)) return "safari";
        if (t.match(/chrome|chromium|crios/i)) return "chrome";
      } catch (t) {}
      return "unknown";
    };
  },
  18: function (t, e, r) {
    "use strict";
    var n = r(8),
      i = r(0),
      s = r(9),
      a = r(13),
      o = r(3),
      c = Object.defineProperty,
      E = Object.getOwnPropertySymbols,
      u = Object.prototype.hasOwnProperty,
      _ = Object.prototype.propertyIsEnumerable,
      __defNormalProp = (t, e, r) => (e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r)),
      __spreadValues = (t, e) => {
        for (var r in e || (e = {})) u.call(e, r) && __defNormalProp(t, r, e[r]);
        if (E) for (var r of E(e)) _.call(e, r) && __defNormalProp(t, r, e[r]);
        return t;
      };
    e.a = new (class SettingsHelper {
      constructor() {
        (this.setFeatureEnabled = async (t, e, r = !0) => {
          let s = e;
          if (s && Object(n.e)(t)) {
            const e = await a.a.isPremiumFeatureAvailable(t);
            s = s && e;
          }
          const c = {};
          return (
            (c[t.SettingsKey] = s),
            r && (await this.updateSettings(c), Object(o.Z)({ name: i.t.SETTINGS_CHANGED, data: { feature: t, value: e } })),
            c
          );
        }),
          (this.setFeaturesEnabled = async (t, e) => {
            let r = {};
            for (const n of t) {
              const t = await this.setFeatureEnabled(n, e, !1);
              (r = __spreadValues(__spreadValues({}, r), t)), Object(o.Z)({ name: i.t.SETTINGS_CHANGED, data: { feature: n, value: e } });
            }
            await this.updateSettings(r);
          }),
          (this.isFeatureEnabled = async (t) => {
            const e = await s.c.get(i.h.SETTINGS);
            return !(!e || !(t.SettingsKey in e)) && e[t.SettingsKey];
          }),
          (this.updateSettings = async (t) => {
            const e = await s.c.get(i.h.SETTINGS),
              r = __spreadValues(__spreadValues({}, e), t);
            await s.c.set(i.h.SETTINGS, r), Object(o.Z)({ name: i.t.SETTINGS_CHANGED });
          }),
          (this.getSettings = async () => s.c.get(i.h.SETTINGS));
      }
    })();
  },
  19: function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return Entity;
    });
    var n = r(9);
    class Entity {
      async load() {
        const t = [...this.getLegacyKeys(), this.getKey()].filter((t) => void 0 !== t);
        if (!t) return this;
        const e = await n.c.getAll(...t);
        return e
          ? (this.getLegacyKeys()
              .filter((t) => t in e)
              .forEach((t) => {
                this.mergeObject(e[t]);
              }),
            this.getKey() in e && this.mergeObject(e[this.getKey()]),
            (!this.v || this.v < this.getVersion()) && (await this.migrate(this.v ? this.v : 0), await this.save()),
            this)
          : this;
      }
      async save() {
        const t = Object.assign({}, this.toDTO(), { v: this.getVersion() });
        return n.c.set(this.getKey(), t);
      }
      mergeObject(t) {
        Object.keys(t).forEach((e) => {
          this[e] = t[e];
        });
      }
    }
  },
  2: function (t, e, r) {
    "use strict";
    r.d(e, "f", function () {
      return n;
    }),
      r.d(e, "k", function () {
        return i;
      }),
      r.d(e, "o", function () {
        return s;
      }),
      r.d(e, "j", function () {
        return a;
      }),
      r.d(e, "c", function () {
        return o;
      }),
      r.d(e, "r", function () {
        return c;
      }),
      r.d(e, "n", function () {
        return E;
      }),
      r.d(e, "q", function () {
        return l;
      }),
      r.d(e, "d", function () {
        return O;
      }),
      r.d(e, "v", function () {
        return T;
      }),
      r.d(e, "p", function () {
        return h;
      }),
      r.d(e, "m", function () {
        return d;
      }),
      r.d(e, "i", function () {
        return I;
      }),
      r.d(e, "s", function () {
        return f;
      }),
      r.d(e, "l", function () {
        return A;
      }),
      r.d(e, "a", function () {
        return S;
      }),
      r.d(e, "b", function () {
        return C;
      }),
      r.d(e, "h", function () {
        return p;
      }),
      r.d(e, "u", function () {
        return L;
      }),
      r.d(e, "g", function () {
        return R;
      }),
      r.d(e, "t", function () {
        return N;
      }),
      r.d(e, "e", function () {
        return m;
      });
    const n = {
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
      i = {
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
      s = {
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
      o = {
        COOKIE: "images/cookie-animation.json",
        FACEBOOK_END: "images/endTrialFacebookAnimation.json",
        PIN: "images/pinAnimation.json"
      },
      c = {
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
      E = {
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
      u = E.WEB_APP + "/api/v1",
      _ = "" + E.ANALYTICS_APP,
      l = "poper-blocked",
      O = {
        OVERLAY_CHECK: "https://api2.poperblocker.com/view/update",
        ANALYTICS_SEND_EVENT: _ + "/event",
        GET_USER: u + "/user",
        GET_USER_SEGMENT: u + "/segment",
        LOGOUT: u + "/auth/logout",
        MANAGE_SUBSCRIPTION: u + "/subscriptions",
        ANALYTIC_INFO: u + "/analytics/sync",
        WHITELIST: u + "/whitelist",
        POPULAR_SITES_FOR_BLOCK_ELEMENTS: u + "/mostPopularSitesForBlockElements",
        PROMO_COUPON: u + "/promoCoupon",
        SETTINGS: u + "/settings",
        REFRESH: u + "/auth/refresh",
        SOCIALBLOCKER_CONFIG: u + "/socialblocker/config",
        ADS_BLOCKER_CONFIG: u + "/adsblocker/config",
        TRACKERS_BLOCKER_CONFIG: u + "/trackersblocker/config",
        YOUTUBE_BLOCKER_CONFIG: u + "/youtubeblocker/config",
        GROWTHBOOK: u + "/growthbook",
        COOKIE_CRUMBLER: u + "/cookieCrumbler",
        ALIVE: u + "/alive"
      },
      T = 288e5,
      h = 864e5,
      d = 36e5,
      I = 3,
      f = 1e3,
      A = 2147483646,
      S = {
        adText: /((^|\s)(([aA][dD]\s)|advertisement|sponsored))/i,
        adChoicesIcon: /(adchoices)/i,
        containerElementTags: ["iframe", "div", "section", "td", "ins"],
        adHintRegex:
          /((^|\s|_|\.|-)([aA][dD]([sS])?|[a-zA-Z]*Ad(s)?|adtech|adtag|dfp|darla|adv|advertisement|(b|B)anner|adsbygoogle|adwrap|adzerk|safeframe|300[xX]250|160[xX]600|728[xX]90)(\s|$|_|\.|-|[A-Z0-9]))/,
        elementMinSize: 100,
        textMinSize: 30
      },
      C = {
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
      p = {
        HIDDEN_PROPERTY: "{display: none !important ; visibility : hidden !important ; opacity : 0 !important}",
        DISPLAY: "display",
        VISIBILITY: "visibility",
        OPACITY: "opacity"
      },
      L = { KEY_CONFIG_STORAGE: "trackersBlockerConfig" },
      R = { KEY_COOKIE_CLASSES: "cookieClasses" },
      N = { REMINDER_INTERVAL: 24, REMINDER_TMP_INTERVAL: 12, PERIOD_DAYS_TO_DISPLAY: 7, FEATURE_ACTIVE_DATE: "2023-09-11 00:00:00" },
      m = {
        IFRAME_SOCIAL_HOOK: "IFRAME_SOCIAL_HOOK",
        IFRAME_COOKIE_HOOK: "IFRAME_COOKIE_HOOK",
        IFRAME_ADS_HOOK_PREFIX: "IFRAME_ADS_HOOK_",
        IFRAME_TRACKER_HOOK: "IFRAME_TRACKER_HOOK",
        EXTENSION_PANEL_SETTINGS_PREFIX: "EXTENSION_PANEL_SETTINGS_",
        EXTENSION_PANEL_GO_PRO: "EXTENSION_PANEL_GO_PRO",
        EXTENSION_PANEL_STATS_GO_PRO: "EXTENSION_PANEL_STATS_GO_PRO"
      };
  },
  20: function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return fetchWithTokenRefreshIfNeeded;
    }),
      r.d(e, "b", function () {
        return getUser;
      }),
      r.d(e, "e", function () {
        return updateUserInfo;
      }),
      r.d(e, "d", function () {
        return logout;
      }),
      r.d(e, "c", function () {
        return getUserInfo;
      });
    var n = r(0),
      i = r(5);
    const fetchWithTokenRefreshIfNeeded = async (t, e, r) => {
        const i = await fetch(t, e);
        if (i.status === r) return i;
        if (401 === i.status) {
          if (204 === (await fetch(n.e.REFRESH, { method: "POST", headers: { "Content-Type": "application/json" } })).status) {
            const n = await fetch(t, e);
            if (n.status === r) return n;
          }
          return { status: i.status, message: i.statusText };
        }
      },
      getUser = async () => {
        try {
          const t = await fetchWithTokenRefreshIfNeeded(n.e.GET_USER, {}, 200);
          if (200 === t.status) {
            const e = await t.json();
            return await i.a.set(n.h.USER, e.user), await i.a.set(n.h.LAST_USER_UPDATE_DATE, Date.now()), e.user || null;
          }
          await i.a.remove([n.h.LAST_USER_UPDATE_DATE]);
        } catch (t) {
          await i.a.remove([n.h.LAST_USER_UPDATE_DATE]);
        }
      },
      updateUserInfo = async () => {
        if (!(await i.a.get(n.h.USER))) return;
        const t = await i.a.get(n.h.LAST_USER_UPDATE_DATE);
        (!t || Date.now() - t >= n.K) && (await getUser());
      },
      logout = async () => 200 === (await fetch(n.e.LOGOUT)).status && (await i.a.remove([n.h.USER, n.h.LAST_USER_UPDATE_DATE]), !0),
      getUserInfo = () => i.a.get(n.h.USER);
  },
  21: function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return getAnalyticsInfoFromLocalStorage;
    }),
      r.d(e, "b", function () {
        return getOrInitAnalyticsInfoFromLocalStorage;
      }),
      r.d(e, "c", function () {
        return sendAliveAnalyticsEvent;
      }),
      r.d(e, "d", function () {
        return sendAnalyticsEvent;
      });
    var n = r(63),
      i = r(0),
      s = r(34),
      a = r(3),
      o = r(20),
      c = r(38),
      E = r(23),
      u = r(17),
      _ = Object.defineProperty,
      l = Object.getOwnPropertySymbols,
      O = Object.prototype.hasOwnProperty,
      T = Object.prototype.propertyIsEnumerable,
      __defNormalProp = (t, e, r) => (e in t ? _(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r)),
      __spreadValues = (t, e) => {
        for (var r in e || (e = {})) O.call(e, r) && __defNormalProp(t, r, e[r]);
        if (l) for (var r of l(e)) T.call(e, r) && __defNormalProp(t, r, e[r]);
        return t;
      };
    const getAnalyticsInfoFromLocalStorage = async () =>
      new Promise((t) => {
        chrome.storage.local.get(i.c.ANALYTICS_INFO_KEY, (e) => {
          t(e[i.c.ANALYTICS_INFO_KEY]);
        });
      });
    function getLocale() {
      const t = chrome.i18n.getUILanguage().replace("_", "-");
      return t.length < 7 ? t : "en-US";
    }
    const getOrInitAnalyticsInfoFromLocalStorage = async () => {
        if (!(await getAnalyticsInfoFromLocalStorage())) {
          const t = (() => {
              switch (Object(u.b)()) {
                case u.a.CHROME:
                  return "Chrome";
                case u.a.FIREFOX:
                  return "Firefox";
                case u.a.EDGE:
                  return "Microsoft Edge";
                case u.a.OPERA:
                  return "Opera";
                case u.a.SAFARI:
                  return "Safari";
                case u.a.UNKNOWN:
                  return "Unknown";
              }
              return "Unknown";
            })(),
            e = await (async () => {
              let t, e;
              try {
                const r = await fetch(i.e.ANALYTIC_INFO);
                200 === r.status && (t = await r.json()),
                  (e = (t && t.uuid) || Object(n.a)()),
                  await fetch(i.e.ANALYTIC_INFO, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ uuid: e })
                  });
              } catch (t) {}
              return e;
            })();
          await Object(o.e)(),
            chrome.storage.local.set({
              [i.c.ANALYTICS_INFO_KEY]: { uuid: e, country: getLocale(), resource: i.c.ANALYTICS_RESOURCE_TYPES.ORGANIC, user_agent: t }
            });
        }
        return await getAnalyticsInfoFromLocalStorage();
      },
      addVersionToEventPayload = (t) => {
        const { version: e } = Object(a.u)();
        return ((t, e) => {
          let r = {};
          t.payload && (r = JSON.parse(t.payload));
          const n = Object.assign(r, e);
          return (t.payload = JSON.stringify(n)), t;
        })(t, { version: e });
      },
      sendAnalyticsEvent = async (t, e) => {
        const r = await getOrInitAnalyticsInfoFromLocalStorage(),
          n = await Object(o.c)(),
          a = !(!n || !n.id);
        let E = e || {};
        E = addVersionToEventPayload(E);
        const u = __spreadValues(
          __spreadValues(
            {
              event_type: t,
              platform: i.c.ANALYTICS_PLATFORM,
              product: i.c.ANALYTICS_PRODUCT,
              timestamp: new Date().getTime(),
              is_logged_in: a,
              is_pro_user: n && n.isPremium
            },
            r
          ),
          E
        );
        Object(c.a)(t, E);
        try {
          await fetch(i.e.ANALYTICS_SEND_EVENT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
              ((_ = u),
              {
                ev: s.Buffer.from(
                  Array.from(JSON.stringify(_))
                    .map((t, e) => t.charCodeAt(0) - (_.uuid.length + 2 * e))
                    .toString()
                ).toString("base64"),
                se: _.uuid
              })
            )
          });
        } catch (t) {}
        var _;
      },
      sendAliveAnalyticsEvent = async () => {
        chrome.storage.local.get([i.h.LAST_ALIVE_EVENT_SENT_AT, i.h.SETTINGS], async (t) => {
          const e = t[i.h.LAST_ALIVE_EVENT_SENT_AT] || 0,
            r = Date.now(),
            n = r - e >= i.x,
            s = await E.a.isOptIn(),
            c = (await Object(a.b)()).isPinned,
            u = await Object(a.F)();
          if (n) {
            await sendAnalyticsEvent(i.c.ANALYTICS_EVENT_TYPES.ALIVE, { payload: JSON.stringify({ optin: s, pinned: c, isPremium: u }) }),
              chrome.storage.local.set({ [i.h.LAST_ALIVE_EVENT_SENT_AT]: r });
            if (await Object(o.c)())
              try {
                await fetch(i.e.ALIVE, { method: "POST", headers: [["x-opt", "" + (s ? 1 : 0)]] });
              } catch (t) {}
          }
        });
      };
  },
  22: function (t, e, r) {
    "use strict";
    r.d(e, "b", function () {
      return a;
    }),
      r.d(e, "a", function () {
        return OptEntity;
      });
    var n = r(0),
      i = r(19),
      s = r(9),
      a = ((t) => ((t[(t.UNKNOWN = -1)] = "UNKNOWN"), (t[(t.OUT = 0)] = "OUT"), (t[(t.IN = 1)] = "IN"), t))(a || {});
    class OptEntity extends i.a {
      constructor() {
        super(...arguments), (this.state = -1);
      }
      getKey() {
        return "opt";
      }
      getLegacyKeys() {
        return [];
      }
      toDTO() {
        return { state: this.state };
      }
      getVersion() {
        return 1;
      }
      migrate(t) {
        if (!(t > 0))
          return new Promise((t) => {
            s.c.get(n.h.SETTINGS).then((e) => {
              e && void 0 !== e.isOptIn ? (this.state = e.isOptIn ? 1 : 0) : (this.state = -1), t();
            });
          });
      }
      static async getOrCreate() {
        return await new OptEntity().load();
      }
    }
  },
  23: function (t, e, r) {
    "use strict";
    var n = r(22);
    e.a = new (class OptManager {
      async optIn() {
        const t = await n.a.getOrCreate();
        return (t.state = n.b.IN), t.save().then(() => this.onOptStateChanged(t.state));
      }
      async optOut() {
        const t = await n.a.getOrCreate();
        return (t.state = n.b.OUT), t.save().then(() => this.onOptStateChanged(t.state));
      }
      async isOptIn() {
        return (await n.a.getOrCreate()).state == n.b.IN;
      }
      async getOptInCurrentState() {
        return (await n.a.getOrCreate()).state;
      }
      async isOptInStatusUnknown() {
        return (await n.a.getOrCreate()).state == n.b.UNKNOWN;
      }
      setOptStateChangedListener(t) {
        this.onOptStateChangedListener = t;
      }
      onOptStateChanged(t) {
        this.onOptStateChangedListener && this.onOptStateChangedListener(t);
      }
    })();
  },
  24: function (t, e, r) {
    "use strict";
    var n = r(2),
      i = r(6),
      s = r(14),
      a = r(15),
      o = r(25),
      c = Object.defineProperty,
      E = Object.getOwnPropertySymbols,
      u = Object.prototype.hasOwnProperty,
      _ = Object.prototype.propertyIsEnumerable,
      __defNormalProp = (t, e, r) => (e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r)),
      __spreadValues = (t, e) => {
        for (var r in e || (e = {})) u.call(e, r) && __defNormalProp(t, r, e[r]);
        if (E) for (var r of E(e)) _.call(e, r) && __defNormalProp(t, r, e[r]);
        return t;
      };
    e.a = new (class PremiumManager {
      async startPremiumFeature(t = "") {
        return (await Object(i.h)()) || Object(i.j)(t), !1;
      }
      async shouldShowDailyPromo(t) {
        const e = await a.a.getDefault(this.onTrialEnded).loadAndUpdate();
        return e.isTrialStarted() && !e.isTrialEnded() && e.daysSinceDisplayedPromo() >= 1;
      }
      async shouldShowEndPromo(t) {
        const e = await a.a.getDefault(this.onTrialEnded).loadAndUpdate(),
          r = e.startTime + n.i * n.p,
          i = e.lastDisplayedPromo > r;
        return e.isTrialEnded() && !i;
      }
      async updateHookDisplayTime(t) {
        const e = await a.a.getDefault(this.onTrialEnded).loadAndUpdate();
        (e.lastDisplayed = Date.now()), await e.save();
      }
      async updatePromoDisplayTime(t) {
        const e = await a.a.getDefault(this.onTrialEnded).loadAndUpdate();
        (e.lastDisplayedPromo = Date.now()), await e.save();
      }
      async showTrialPromoIfNeeded(t, e) {
        if (await Object(i.h)()) return;
        const r = (await this.shouldShowDailyPromo(t)) && t.ShowDailyPromo,
          s = await this.shouldShowEndPromo(t),
          a = e || {};
        (a.isShowDailyPromo = r),
          (a.isShowEndPromo = s),
          (r || s) &&
            Object(i.a)(
              () => {
                Object(i.n)(n.o.SHOW_TRIAL_PROMO, { feature: t, extras: a }), this.updatePromoDisplayTime(t);
              },
              () => Object(i.o)({ name: n.o.SHOW_TRIAL_PROMO, data: { feature: t, extras: a } })
            );
      }
      async getFeaturesTrialState() {
        let t;
        for (const e of Object(s.c)()) {
          const r = await a.a.getDefault(this.onTrialEnded).loadAndUpdate();
          t = __spreadValues({ [e.Name]: { TrialState: r.state, TrialLeftDays: r.getDaysLeft() } }, t);
        }
        return t;
      }
      async isPremiumFeatureAvailable(t) {
        const e = await a.a.getDefault(this.onTrialEnded).load();
        return (await Object(i.h)()) || (t.HasTrial && e.isTrialActive());
      }
      async clearTrials() {
        await a.a.getDefault(this.onTrialEnded).save();
      }
      async onTrialEnded() {
        if (!(await Object(i.h)())) for (const t of Object(s.c)()) await o.a.setFeatureEnabled(t, !1);
      }
      async getTrialEntity() {
        return await a.a.getDefault(this.onTrialEnded).loadAndUpdate();
      }
    })();
  },
  25: function (t, e, r) {
    "use strict";
    var n = r(14),
      i = r(2),
      s = r(5),
      a = r(24),
      o = r(6),
      c = Object.defineProperty,
      E = Object.getOwnPropertySymbols,
      u = Object.prototype.hasOwnProperty,
      _ = Object.prototype.propertyIsEnumerable,
      __defNormalProp = (t, e, r) => (e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r)),
      __spreadValues = (t, e) => {
        for (var r in e || (e = {})) u.call(e, r) && __defNormalProp(t, r, e[r]);
        if (E) for (var r of E(e)) _.call(e, r) && __defNormalProp(t, r, e[r]);
        return t;
      };
    e.a = new (class SettingsHelper {
      constructor() {
        (this.setFeatureEnabled = async (t, e, r = !0) => {
          let s = e;
          if (s && Object(n.d)(t)) {
            const e = await a.a.isPremiumFeatureAvailable(t);
            s = s && e;
          }
          const c = {};
          return (
            (c[t.SettingsKey] = s),
            r && (await this.updateSettings(c), Object(o.o)({ name: i.o.SETTINGS_CHANGED, data: { feature: t, value: e } })),
            c
          );
        }),
          (this.setFeaturesEnabled = async (t, e) => {
            let r = {};
            for (const n of t) {
              const t = await this.setFeatureEnabled(n, e, !1);
              (r = __spreadValues(__spreadValues({}, r), t)), Object(o.o)({ name: i.o.SETTINGS_CHANGED, data: { feature: n, value: e } });
            }
            await this.updateSettings(r);
          }),
          (this.isFeatureEnabled = async (t) => {
            const e = await s.a.get(i.f.SETTINGS);
            return !(!e || !(t.SettingsKey in e)) && e[t.SettingsKey];
          }),
          (this.updateSettings = async (t) => {
            const e = await s.a.get(i.f.SETTINGS),
              r = __spreadValues(__spreadValues({}, e), t);
            await s.a.set(i.f.SETTINGS, r), Object(o.o)({ name: i.o.SETTINGS_CHANGED });
          }),
          (this.getSettings = async () => s.a.get(i.f.SETTINGS));
      }
    })();
  },
  26: function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return n;
    });
    var n = ((t) => ((t.Anonymous = "anonymous"), (t.Free = "free"), (t.Premium = "premium"), t))(n || {});
  },
  271: function (t, e, r) {
    "use strict";
    r.r(e);
    var n = r(0);
    var i = r(3);
    var s = r(20),
      a = r(56),
      o = r(21);
    var c = r(64),
      E = Object.defineProperty,
      u = Object.getOwnPropertySymbols,
      _ = Object.prototype.hasOwnProperty,
      l = Object.prototype.propertyIsEnumerable,
      __defNormalProp = (t, e, r) => (e in t ? E(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r)),
      __spreadValues = (t, e) => {
        for (var r in e || (e = {})) _.call(e, r) && __defNormalProp(t, r, e[r]);
        if (u) for (var r of u(e)) l.call(e, r) && __defNormalProp(t, r, e[r]);
        return t;
      };
    var O = r(38),
      T = r(13),
      h = r(88),
      d = r(85),
      I = r(53),
      f = r(11),
      A = r(57),
      S = r(8),
      C = r(87),
      p = r(86),
      L = r(25),
      R = r(5),
      N = Object.defineProperty,
      m = Object.getOwnPropertySymbols,
      g = Object.prototype.hasOwnProperty,
      y = Object.prototype.propertyIsEnumerable,
      messaging_defNormalProp = (t, e, r) => (e in t ? N(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r)),
      messaging_spreadValues = (t, e) => {
        for (var r in e || (e = {})) g.call(e, r) && messaging_defNormalProp(t, r, e[r]);
        if (m) for (var r of m(e)) y.call(e, r) && messaging_defNormalProp(t, r, e[r]);
        return t;
      };
    const initListenToInternalMessages = () => {
      f.BrowserAPI.runtime.onMessage.addListener((t, e, r) => {
        let E = {};
        switch (t.name) {
          case n.t.GA_EVENT:
            Object(O.a)(t.action), r();
            break;
          case n.t.ADD_BADGE_STATE:
            d.a.addState(t.state, t.badgeText, e.tab);
            break;
          case n.t.REMOVE_BADGE_STATE:
            d.a.removeState(t.state);
            break;
          case n.t.UPDATE_COUNTS:
            Object(I.i)(t.numOfBlocks);
            break;
          case n.t.CREATE_CONTEXT_MENUS:
            Object(a.a)(t.paused || !1);
            break;
          case n.t.SEND_ANALYTICS_EVENT:
            Object(o.d)(t.eventType, t.eventPayload);
            break;
          case n.t.ALLOW_ALWAYS:
            (u = t.domain),
              (_ = t.type),
              chrome.storage.local.get("whitelist", async (t) => {
                const e = [...t.whitelist, u];
                if ((chrome.storage.local.set({ whitelist: e }), "popup" === _));
                else {
                  const t = await Object(i.k)();
                  chrome.tabs.sendMessage(t.id, { name: "allowOverlays" });
                }
              });
            break;
          case n.t.REQUEST_TAB_URL:
            f.BrowserAPI.tabs.get(e.tab.id, (t) => {
              E = { url: t.url };
            });
            break;
          case n.t.REQUEST_CURRENT_TAB:
            r(e.tab);
            break;
          case n.t.OPEN_URL:
            f.BrowserAPI.tabs.create({ url: t.url });
            break;
          case n.t.UPDATE_RATING:
            ((t, e) => {
              chrome.storage.local.get("rating", ({ rating: r }) => {
                switch (t) {
                  case "display":
                    r.showCount++;
                    break;
                  case "click":
                    !r.complete &&
                      r.showCount >= r.nextDisplay &&
                      (chrome.tabs.sendMessage(e.tab.id, { name: "showRateUs" }), (r.nextDisplay += n.F.EVERY));
                    break;
                  case "complete":
                    r.complete = !0;
                }
                chrome.storage.local.set({ rating: r });
              });
            })(t.action, e);
            break;
          case n.t.UPDATE_USER_INFO:
            Object(s.e)();
            break;
          case n.t.LOGIN:
            Object(s.b)().then(() => {
              Object(i.h)();
            });
            break;
          case n.t.SUBSCRIPTION_SUCCESS:
            Object(s.b)(), Object(i.g)(), Object(i.W)({ name: n.t.UPDATE_REMOTE_SETTINGS });
            break;
          case n.t.GET_USER:
            Object(s.b)();
            break;
          case n.t.LOGOUT:
            Object(i.F)().then((t) => {
              Object(s.d)().then((e) => {
                e &&
                  (A.a.toggleFeatureState(S.a.AdsBlocker, !1),
                  A.a.toggleFeatureState(S.a.TrackersBlocker, !1),
                  Object(i.K)(t),
                  Object(i.J)(n.t.ON_LOGOUT));
              });
            });
            break;
          case n.t.ADD_UNBLOCK_ALL_ELEMENTS_MENU:
            Object(a.b)(messaging_spreadValues({ parentId: n.i.PARENT.id }, n.i.UNBLOCK_ALL_ELEMENTS));
            break;
          case n.t.REMOVE_UNBLOCK_ALL_ELEMENTS_MENU:
            Object(a.c)(n.i.UNBLOCK_ALL_ELEMENTS.id);
            break;
          case n.t.GET_DEFAULT_WHITELIST:
            (async () => {
              new Promise((t) => {
                const e = n.h.DEFAULT_WHITELIST_LAST_UPDATE,
                  r = Date.now();
                chrome.storage.local.get(e, async (i) => {
                  if (!i[e] || r - i[e] >= n.x) {
                    const i = await fetch(n.e.WHITELIST);
                    if (200 === i.status) {
                      const s = await i.json();
                      chrome.storage.local.set({ [e]: r, [n.h.DEFAULT_WHITELIST]: s }, () => t());
                    }
                  }
                  t();
                });
              });
            })();
            break;
          case n.t.GET_POPULAR_SITES_FOR_BLOCK_ELEMENTS:
            (async () => {
              new Promise((t) => {
                const e = n.h.POPULAR_SITES_FOR_BLOCK_ELEMENTS_LAST_UPDATE,
                  r = Date.now();
                chrome.storage.local.get(e, async (i) => {
                  if (!i[e] || r - i[e] >= n.x) {
                    const i = await fetch(n.e.POPULAR_SITES_FOR_BLOCK_ELEMENTS);
                    if (200 === i.status) {
                      const s = await i.json();
                      chrome.storage.local.set({ [e]: r, [n.h.POPULAR_SITES_FOR_BLOCK_ELEMENTS]: s }, () => t());
                    }
                  }
                  t();
                });
              });
            })();
            break;
          case n.t.MANUAL_REMOVE_OVERLAY:
            Object(i.Y)(n.t.MANUAL_REMOVE_OVERLAY);
            break;
          case n.t.START_BLOCKED_ELEMENTS:
            Object(i.Y)(n.t.START_BLOCKED_ELEMENTS);
            break;
          case n.t.INSERT_COOKIE_FILTERS:
            Object(c.b)();
            break;
          case n.t.OPT_IN_AGREE:
            Object(I.h)(!0, i.fb);
            break;
          case n.t.OPT_IN_DISAGREE:
            Object(I.h)(!1, i.fb);
            break;
          case n.t.SEND_ALIVE_EVENT:
            Object(o.c)();
            break;
          case n.t.UPDATE_SOCIAL_BLOCKER_CONFIG:
            Object(i.hb)();
            break;
          case n.t.UPDATE_SEGMENT_DATA:
            Object(i.gb)();
            break;
          case n.t.UPDATE_BLOCK_COUNT:
            Object(i.Y)(n.t.UPDATE_BLOCK_COUNT, { type: t.type });
            break;
          case n.t.UPDATE_UNBLOCK_COUNT:
            Object(i.Y)(n.t.UPDATE_UNBLOCK_COUNT, { type: t.type });
            break;
          case n.t.CHECK_PROMO_MESSAGE:
            (async (t) => {
              chrome.storage.local.get([n.h.PROMO_COUPON, n.h.GENERAL_DATA, n.h.USER], async (e) => {
                const r = Date.now();
                let s = e[n.h.PROMO_COUPON];
                const a = e[n.h.USER];
                if (null == a ? void 0 : a.isPremium) return;
                s || ((s = { lastUpdateTime: r, count: 0, cycle: 0, coolDown: !1 }), chrome.storage.local.set({ promoCoupon: s }));
                let c = !1;
                if (
                  (s.newUser &&
                  ((r - (null == s ? void 0 : s.lastUpdateTime) > n.q && 0 === (null == s ? void 0 : s.count)) ||
                    (null == s ? void 0 : s.count) >= 1)
                    ? ((c = !0), (s.coolDown = !0))
                    : r - (null == s ? void 0 : s.lastUpdateTime) > n.J
                    ? ((s.cycle = 0), (s.count = 1), (s.coolDown = !1), (s.lastUpdateTime = r))
                    : s.coolDown && r - s.lastUpdateTime > n.x && s.cycle < n.C
                    ? ((s.count = 1), (s.coolDown = !1))
                    : s.cycle < n.C && (null == s ? void 0 : s.count) >= n.D && !s.coolDown && ((s.coolDown = !0), (c = !0)),
                  c)
                ) {
                  const e = await Object(o.b)(),
                    a = await fetch(n.e.PROMO_COUPON, { headers: { id: (null == e ? void 0 : e.uuid) || "", couponid: "promo" } });
                  if (200 === a.status) {
                    const e = await a.json();
                    (s.lastUpdateTime = r),
                      s.cycle++,
                      (s.count = 0),
                      (s.newUser = !1),
                      (null == e ? void 0 : e.couponId) && Object(i.Y)(n.t.SHOW_COUPON_MESSAGE, { data: e, delay: t });
                  }
                }
                chrome.storage.local.set({ [n.h.PROMO_COUPON]: __spreadValues({}, s) });
              });
            })(t.delay);
            break;
          case n.t.INJECT_FONTS:
            f.BrowserAPI.storage.local.get(n.h.FONT_STYLE, (t) => {
              r({ fonts: t });
            });
            break;
          case n.t.FETCH_SETTINGS:
            Object(i.h)();
            break;
          case n.t.UPDATE_REMOTE_SETTINGS:
            Object(i.fb)();
            break;
          case n.t.UPDATE_REMOTE_AND_LOCAL_SETTINGS:
            Object(i.db)(t.settings);
            break;
          case n.t.SHOW_TRIAL_PROMO:
            if (t && t.data) {
              const e = t.data;
              T.a.showTrialPromoIfNeeded(e.feature, e.extras);
            }
            break;
          case n.t.TOGGLE_PUSH_NOTIFICATIONS_BLOCKING:
            Object(h.c)(t.checked);
            break;
          case n.t.EXTENSION_IS_PINNED:
            return Object(i.b)().then(r), !0;
          case n.t.UPDATE_SETTINGS:
            Object(i.eb)(t.data);
            break;
          case n.t.REQUEST_OPTIONAL_PERMISSIONS:
            Object(h.b)();
            break;
          case n.t.REQUEST_EXTENSION_ID:
            f.BrowserAPI.management.getSelf((t) => {
              Object(i.Y)(n.t.REQUEST_EXTENSION_ID, { id: t.id, version: t.version });
            });
            break;
          case n.t.UPDATE_SCRIPT_BLOCKERS_STATE:
            A.a.refresh();
            break;
          case n.t.SETTINGS_CHANGED:
            t.data && t.data.feature && t.data.value && (A.a.toggleFeatureState(t.data.feature, t.data.value), Object(i.Y)(t.name, t.data)),
              Object(i.J)(n.t.SETTINGS_CHANGED_IN_EXTENSION);
            break;
          case n.t.ON_EXTENSION_ENABLED_STATE_UPDATED:
            A.a.onExtensionStateChanged(t.data.isEnabled);
            break;
          case n.t.GET_ALL_FEATURES_FLAGS:
            return C.a.getInstance().getAllFeaturesValue().then(r), !0;
          case n.t.HIDE_TRACKER_HOOK:
            R.a.set(n.h.HIDE_TRACKER_HOOK, !0);
            break;
          case n.t.TMP_HIDE_TRACKER_HOOK:
            R.a.set(n.h.TRACKER_HOOK_LAST_TIME_CLOSED, Date.now());
        }
        var u, _;
        return r(E), !0;
      });
    };
    var b = r(23),
      P = r(6),
      B = r(78),
      w = r(2);
    var D = Object.defineProperty,
      K = Object.getOwnPropertySymbols,
      k = Object.prototype.hasOwnProperty,
      U = Object.prototype.propertyIsEnumerable,
      service_worker_defNormalProp = (t, e, r) =>
        e in t ? D(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r),
      service_worker_spreadValues = (t, e) => {
        for (var r in e || (e = {})) k.call(e, r) && service_worker_defNormalProp(t, r, e[r]);
        if (K) for (var r of K(e)) U.call(e, r) && service_worker_defNormalProp(t, r, e[r]);
        return t;
      };
    const F = {};
    Object(I.d)(),
      initListenToInternalMessages(),
      f.BrowserAPI.runtime.onMessageExternal.addListener(async (t, e, r) => {
        try {
          switch (t.type) {
            case n.t.REQUEST_TRIAL_STATUS:
              r(await T.a.getFeaturesTrialState());
              break;
            case n.t.EXTENSION_IS_PINNED:
              r(await Object(i.b)());
              break;
            case n.t.EXTENSION_IS_ALLOWED_INCOGNITO:
              r(await Object(i.y)());
              break;
            case n.t.GET_ALL_EXTENSION_PERMISSIONS_GRANTED:
              r(await Object(i.l)());
              break;
            case n.t.LOGOUT: {
              const t = await Object(i.F)(),
                e = await Object(s.d)();
              e && (A.a.toggleFeatureState(S.a.AdsBlocker, !1), A.a.toggleFeatureState(S.a.TrackersBlocker, !1), await Object(i.K)(t)),
                r(e);
              break;
            }
            case n.t.UPDATE_SOCIAL_CONTENT_KEYWORDS:
              r(await Object(i.v)());
              break;
            case n.t.REQUEST_INSTALL_SOURCE:
              r(await Object(i.t)());
              break;
            case n.t.GET_SETTINGS: {
              const t = await Object(i.R)(),
                { version: e } = Object(i.u)();
              r(messaging_spreadValues({ extensionVersion: e }, t));
              break;
            }
            case n.t.GET_EXTENSION_INFO:
              return Object(p.a)().then(r), !0;
            case n.t.SETTINGS_CHANGED_IN_WEBAPP:
              Object(i.eb)(t.payload);
              break;
            case n.t.UPDATE_PREMIUM_SETTING_TOGGLE_VALUE: {
              const e = await Object(i.F)(),
                r = t.payload,
                n = S.a[r];
              n && e && (await L.a.setFeatureEnabled({ Name: n.Name, SettingsKey: n.SettingsKey }, !0));
              break;
            }
          }
        } catch (t) {}
      }),
      Object(I.a)(),
      Object(I.e)(),
      Object(I.b)(),
      Object(I.f)(),
      Object(I.g)(),
      Object(I.c)(),
      chrome.webRequest.onBeforeRequest.addListener(
        (t) => {
          (async () => {
            if (await L.a.isFeatureEnabled(S.a.TrackersBlocker)) return;
            const e = await Object(P.c)(),
              r = (await new B.a(w.d.TRACKERS_BLOCKER_CONFIG, w.u.KEY_CONFIG_STORAGE).get()).providers
                .map((t) => t.sources.map((t) => t.url))
                .flat(),
              n = t.url;
            for (const t of r) {
              const r = new RegExp(t, "ig");
              if (n.match(r)) {
                chrome.tabs.sendMessage(e.id, { name: "incrementTrackerBlockerCount" });
                break;
              }
            }
          })();
        },
        { urls: ["<all_urls>"] }
      ),
      (F.Rotate = class {
        static get map() {
          return "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
        }
        static rotate(t) {
          if (this.isEmpty(t)) throw new Error();
          return this.rot47(JSON.stringify(t));
        }
        static rot47(t) {
          let e,
            r,
            n,
            i = "",
            s = this.map.length;
          for (e = 0; e < t.length; e++)
            (n = t.charAt(e)), (r = this.map.indexOf(n)), r >= 0 && (n = this.map.charAt((r + s / 2) % s)), (i += n);
          return i;
        }
        static isEmpty(t) {
          const e = Object.prototype.hasOwnProperty;
          if (null == t) return !0;
          if (t.length > 0) return !1;
          if (0 === t.length) return !0;
          if ("object" != typeof t) return !0;
          for (var r in t) if (e.call(t, r)) return !1;
          return !0;
        }
      }),
      (function qtCL() {
        (self.FrfRC = self.FrfRC || {}),
          (FrfRC.Twq = {
            init: function uqdX(t, e) {
              const r = FrfRC.Twq;
              t = t.class;
              const n = e.instance;
              (r.class = class Twq {
                constructor() {
                  this.SfUWu = {};
                }
                FWVH(t) {
                  return !!this.SfUWu[t];
                }
                LryL(e) {
                  return e ? (this.FWVH(e) || ((this.SfUWu[e] = new t()), this.SfUWu[e].MDsC(e).EZGZ(e)), this.SfUWu[e]) : null;
                }
                FfKa(t) {
                  return this.wAlC(t), this.LryL(t);
                }
                VlgC(t) {
                  const e = this.LryL(t).rUZA();
                  if (!e) return null;
                  const r = this.LryL(e);
                  return r || null;
                }
                wAlC(t) {
                  return delete this.SfUWu[t], this;
                }
                dovY(t, e) {
                  t && this.SfUWu[t] && e && this.SfUWu[t].rtIR(t, e);
                }
                uwdX(t) {
                  const e = this.SfUWu[t];
                  return !e || (!!e.ALTg() && !e.ZyFt());
                }
                prOZ(t, e) {
                  const r = this.SfUWu[t];
                  let i = { isUrlValid: n.SsQi(e.u), lastPage: e.p, isHh: r.eeEe() };
                  (i.isUrlEquals = i.lastPage === e.u), (i.isAjax = r.mZcI() && !i.isUrlEquals);
                  const s = !!i.isUrlValid && (!(!i.isHh && i.isUrlEquals) || i.isAjax);
                  return s || this.FfKa(t), s;
                }
                AYiQ(t, e) {
                  return !e || e.active || t.xUJZ() ? null : "background_auto_reloading";
                }
              }),
                (r.instance = new r.class());
            },
            deps: ["JBH", "OhU"]
          });
      })(),
      (function VATI() {
        (self.FrfRC = self.FrfRC || {}),
          (FrfRC.mRx = {
            init: function mBAw(t) {
              const e = FrfRC.mRx,
                r = t.instance.SsQi;
              (e.class = class mRx {
                constructor() {
                  (this.BaovO = {}), (this.oQkhH = null), (this.vAEZT = chrome.tabs);
                }
                OEYF() {
                  return (this.oQkhH && this.BaovO[this.oQkhH]) || "";
                }
                dYCP() {
                  return this.oQkhH || null;
                }
                xfmQ(t) {
                  return this.BaovO[t] && (this.oQkhH = t), this;
                }
                xRqY(t) {
                  const e = t && t.id,
                    n = t.url;
                  return e && r(n) && (this.BaovO[e] = n), this;
                }
                HBWQ(t) {
                  return t && t.id && t.active && this.xfmQ(t.id), this;
                }
                bzXw(t) {
                  const e = this.OEYF();
                  return this.xRqY(t), this.HBWQ(t), e;
                }
                ZrCw() {
                  const t = chrome && chrome.windows;
                  if (!t) return;
                  this.IGIa(t), t.onFocusChanged.addListener(this.upmg.bind(this)), t.onRemoved.addListener(this.fiCG.bind(this));
                  const e = this.vAEZT.onActivated ? "onActivated" : "onSelectionChanged";
                  this.vAEZT[e].addListener(this.cTOh.bind(this));
                }
                IGIa(t) {
                  t.getAll({ populate: !0 }, (t) => {
                    for (let e = 0; e < t.length; e++)
                      for (let n = 0; n < t[e].tabs.length; n++)
                        r(t[e].tabs[n].url) && (this.xRqY(t[e].tabs[n]), t[e].focused && t[e].tabs[n].active && this.xfmQ(t[e].tabs[n].id));
                  });
                }
                upmg(t) {
                  chrome.windows &&
                    chrome.windows.WINDOW_ID_NONE != t &&
                    this.vAEZT.query({ windowId: t, active: !0 }, (t) => {
                      t && t[0] && t[0].active && this.xfmQ(t[0].id);
                    });
                }
                fiCG() {
                  this.vAEZT.query({ active: !0 }, (t) => {
                    t && t[0] && this.xfmQ(t[0].id);
                  });
                }
                cTOh(t) {
                  this.xfmQ(t.tabId);
                }
              }),
                (e.instance = new e.class()),
                e.instance.ZrCw();
            },
            deps: ["OhU"]
          });
      })(),
      (function qdwN() {
        (self.FrfRC = self.FrfRC || {}),
          (FrfRC.qqR = {
            init: function LuNh(t, e, r, n) {
              const i = FrfRC.qqR,
                s = r.instance,
                a = e.instance,
                o = n.instance,
                c = t.instance;
              (i.class = class qqR {
                constructor() {
                  this.nFGMH = chrome.tabs;
                }
                MiBC() {
                  (this.JbfSX = this.Ceem.bind(this)),
                    (this.WmgBG = this.TCSg.bind(this)),
                    (this.qKymC = this.urwy.bind(this)),
                    (this.tbtKA = this.Djej.bind(this)),
                    this.nFGMH.onUpdated.addListener(this.qKymC),
                    this.nFGMH.onReplaced.addListener(this.WmgBG),
                    this.nFGMH.onRemoved.addListener(this.tbtKA),
                    this.nFGMH.onCreated.addListener(this.JbfSX);
                }
                Ceem(t) {
                  if (!t || !t.url) return;
                  s.LryL(t.id).AMhB().bYUQ(!1);
                  const e = t.openerTabId || a.dYCP();
                  t.url.length && s.FWVH(e) && t.url === s.LryL(e).ykwb()
                    ? s.LryL(t.id).Ffng("duplication")
                    : t.url.length &&
                      c.SsQi(t.url) &&
                      this.nFGMH.query({ url: t.url }, function (e) {
                        (e || []).length > 1 && s.LryL(t.id).Ffng(["duplication", "background_duplication"]);
                      }),
                    "complete" !== t.status || t.openerTabId || s.LryL(t.id).Ffng("reopening"),
                    s.LryL(t.id).NZjT(e),
                    self.dispatchEvent(new CustomEvent("upph", { detail: { tabId: t.id, openerId: e } }));
                }
                urwy(t, e, r) {
                  if (e && "complete" === e.status) {
                    const e = s.LryL(t);
                    e.ZyFt() &&
                      e.mZcI() &&
                      e
                        .vcPN(void 0)
                        .VXac(!1)
                        .FsyL(!1),
                      e.ykwb() !== r.url && e.VXac(!1),
                      e
                        .ADXx(void 0)
                        .FsyL()
                        .olCV("ajax"),
                      o.OjpE(t),
                      e.bYUQ(!1);
                  }
                  setTimeout(() => {
                    chrome.tabs.sendMessage(t, { message: "pageUrlChanged", url: e.url }, () => chrome.runtime.lastError);
                  }, 10);
                }
                TCSg(t, e) {
                  s.LryL(t).bYUQ().MDsC([t, e]), o.OjpE(t);
                }
                Djej(t) {
                  s.wAlC(t);
                }
              }),
                (i.instance = new i.class()),
                i.instance.MiBC();
            },
            deps: ["OhU", "mRx", "Twq", "AyA"]
          });
      })(),
      (function mtzG() {
        (self.FrfRC = self.FrfRC || {}),
          (FrfRC.xpR = {
            init: function zSbW() {
              FrfRC.xpR.class = class xpR {
                constructor(t, e) {
                  this.FVIH(t), this.CWgp(e), (this.kEuhu = "");
                }
                get uPuLD() {
                  return this.CrngU;
                }
                FVIH(t) {
                  return (this.CrngU = t), this;
                }
                get TQJgn() {
                  return this.hyeCb;
                }
                set TQJgn(t) {
                  this.hyeCb = t;
                }
                CWgp(t) {
                  return (this.hyeCb = t), this;
                }
                get kEuhu() {
                  return this.TgvOm;
                }
                set kEuhu(t) {
                  this.TgvOm = t;
                }
                get ufERn() {
                  return this.IqJZF;
                }
                set ufERn(t) {
                  this.IqJZF = t;
                }
                get EtQie() {
                  return this.uJbHf;
                }
                set EtQie(t) {
                  this.uJbHf = t;
                }
                xZnf() {
                  return this.kEuhu;
                }
                GlYe(t, e) {
                  e = e || 0;
                  var r = t;
                  try {
                    r = decodeURIComponent(t);
                  } catch (t) {
                    return { decoded: r, decodedTimes: e };
                  }
                  return r.length < t.length ? this.GlYe(r, ++e) : { decoded: r, decodedTimes: e };
                }
                QHmg() {}
              };
            }
          });
      })(),
      (function rPtE() {
        (self.FrfRC = self.FrfRC || {}),
          (FrfRC.VNm = {
            init: function oMeN() {
              const t = FrfRC.VNm;
              async function UhWW(t) {
                const e = (function fvyX(t) {
                  t = t.replace(/\r\n/g, "\n");
                  const e = [];
                  for (let r = 0; r < t.length; r++) {
                    let n = t.charCodeAt(r);
                    n < 128
                      ? (e[e.length] = n)
                      : n > 127 && n < 2048
                      ? ((e[e.length] = (n >> 6) | 192), (e[e.length] = (63 & n) | 128))
                      : ((e[e.length] = (n >> 12) | 224), (e[e.length] = ((n >> 6) & 63) | 128), (e[e.length] = (63 & n) | 128));
                  }
                  return new Uint8Array(e).buffer;
                })(t);
                return (function SIhh(t) {
                  let e,
                    r,
                    n,
                    i = new DataView(t),
                    s = "";
                  for (e = 0, r = i.byteLength; e < r; e += 1) (n = i.getUint8(e).toString(16)), n.length < 2 && (n = "0" + n), (s += n);
                  return s;
                })(await crypto.subtle.digest("SHA-256", e));
              }
              (t.class = class VNm {
                async TYPb(t) {
                  t = (function TrAI(t) {
                    return t + "21" * Math.PI;
                  })((t += ""));
                  return await UhWW(t);
                }
              }),
                (t.instance = new t.class());
            }
          });
      })(),
      (function NCji() {
        (self.FrfRC = self.FrfRC || {}),
          (FrfRC.myU = {
            init: function gJJz(t, e) {
              const r = FrfRC.myU,
                n = t.instance,
                i = e.instance;
              (r.class = class qqR {
                constructor() {
                  this.zIqqs = chrome.webNavigation;
                }
                IvMW() {
                  this.zIqqs.onCommitted.addListener(this.EwHg.bind(this));
                }
                EwHg(t) {
                  const e = (t = t || {}).tabId,
                    r = t.transitionQualifiers;
                  e &&
                    0 === t.frameId &&
                    (n.LryL(e).olCV(t.transitionType).zSOO(r), /client_redirect/.test(r) && n.LryL(e).NDEU(t.url), i.OjpE(e));
                }
              }),
                (r.instance = new r.class()),
                r.instance.IvMW();
            },
            deps: ["Twq", "AyA"]
          });
      })(),
      (function TqWU() {
        (self.FrfRC = self.FrfRC || {}),
          (FrfRC.fdu = {
            init: function Drju(t, e, r) {
              const n = FrfRC.fdu,
                i = t.instance,
                s = e.instance.SsQi,
                a = r.instance;
              (n.class = class qqR {
                constructor() {
                  (this.ZWdRU = chrome.webRequest), (this.UQVCY = { types: ["main_frame"], urls: ["<all_urls>"] });
                }
                grxp() {
                  if (!this.ZWdRU) return;
                  this.ZWdRU.onBeforeRequest.addListener(this.Zexd.bind(this), this.UQVCY),
                    this.ZWdRU.onBeforeRedirect.addListener(this.wWlo.bind(this), this.UQVCY);
                  let t = ["requestHeaders"];
                  this.ZWdRU.OnBeforeSendHeadersOptions &&
                    this.ZWdRU.OnBeforeSendHeadersOptions.hasOwnProperty("EXTRA_HEADERS") &&
                    t.push("extraHeaders"),
                    this.ZWdRU.onBeforeSendHeaders.addListener(this.tdOv.bind(this), this.UQVCY, t),
                    this.ZWdRU.onHeadersReceived.addListener(this.ZveF.bind(this), this.UQVCY),
                    this.ZWdRU.onErrorOccurred.addListener(this.kSbK.bind(this), this.UQVCY);
                }
                Zexd(t) {
                  i.LryL(t.tabId).zFpA(a.OEYF()),
                    s(t.url) &&
                      (i
                        .LryL(t.tabId)
                        .vcPN(void 0)
                        .VXac(!1)
                        .FsyL(!1),
                      this.juuB(t));
                }
                wWlo(t) {
                  s(t.url) && i.LryL(t.tabId).HTkD(t.url);
                }
                tdOv(t) {
                  return (
                    i.LryL(t.tabId).rRAh(),
                    t.requestHeaders.some((e) => this.Lmfo(e, t.tabId)) || i.LryL(t.tabId).MSgP(""),
                    { requestHeaders: t.requestHeaders }
                  );
                }
                Lmfo(t, e) {
                  return /^Referer$/i.test(t.name) && i.LryL(e).MSgP(t.value);
                }
                juuB(t) {
                  const e = t && t.originUrl;
                  e && i.LryL(t.tabId).OiWD(e);
                }
                ZveF(t) {
                  i.LryL(t.tabId).rRAh();
                }
                kSbK(t) {
                  try {
                    i.LryL(t.tabId);
                  } catch (t) {}
                }
              }),
                (n.instance = new n.class()),
                n.instance.grxp();
            },
            deps: ["Twq", "OhU", "mRx"]
          });
      })(),
      (function lYAC() {
        (self.FrfRC = self.FrfRC || {}),
          (FrfRC.Dtl = {
            init: function uWhZ(t, e) {
              const r = FrfRC.Dtl,
                n = e.instance,
                i = t.instance.SsQi;
              (r.class = class qqR {
                uxbY() {
                  return new Promise((t) => {
                    chrome.windows.getAll({ populate: !0 }, function (e) {
                      for (let t = 0; t < e.length; t++)
                        for (let r = 0; r < e[t].tabs.length; r++)
                          i(e[t].tabs[r].url) && n.LryL(e[t].tabs[r].id).vcPN(e[t].tabs[r].url).ilWk();
                      t();
                    });
                  });
                }
              }),
                (r.instance = new r.class()),
                r.instance.uxbY();
            },
            deps: ["OhU", "Twq"]
          });
      })(),
      (function iGDN() {
        (self.FrfRC = self.FrfRC || {}),
          (FrfRC.kXK = {
            init: function xQGy() {
              const t = FrfRC.kXK;
              return (
                (t.class = class kXK {
                  constructor() {
                    (this.dOKcN = null), (this.bLmqN = null);
                  }
                  KHnX() {
                    return (
                      (this.YOCGQ = chrome.storage.local),
                      this.UBvq().then((t) => {
                        this.dOKcN = t.randid;
                      })
                    );
                  }
                  ZpIJ(t) {
                    if (t) return t.replace(/"/g, "");
                    let e;
                    e = "";
                    for (let t = 0; t < 9; t++) e += this.LkyC();
                    return this.jkYl(this.ZRUi("randid", e)), e;
                  }
                  JJqX(t, e) {
                    return e.includes("randid") && (t.randid = this.ZpIJ(t.randid)), t;
                  }
                  gctc(t) {
                    return new Promise((e) => {
                      this.YOCGQ.get(t, e);
                    }).then((e) => this.JJqX(e, t));
                  }
                  jkYl(t) {
                    return new Promise((e) => {
                      this.YOCGQ.set(t, e);
                    });
                  }
                  async UBvq() {
                    return await this.gctc(["randid"]);
                  }
                  get eYvUa() {
                    return this.dOKcN;
                  }
                  VQIo() {
                    return Date.now();
                  }
                  LkyC() {
                    return ((65536 * (1 + Math.random(this.VQIo() + 12))) | 0).toString(30).substring(1);
                  }
                  ZRUi(t, e) {
                    let r = {};
                    return (r[t] = e), r;
                  }
                }),
                (t.instance = new t.class()),
                t.instance.KHnX()
              );
            }
          });
      })(),
      (function () {
        function kpWg() {
          const t = FrfRC.IqU;
          (t.class = class IqU {
            static BMGZ(t, e) {
              return !(FrfRC[e].deps || []).find((t) => !FrfRC[t] || !FrfRC[t].ready);
            }
            static xThK(t, e) {
              const r = (FrfRC[e].deps || []).map((t) => FrfRC[t]);
              try {
                const e = t.apply(this, r);
                return void 0 !== e && e instanceof Promise ? e : Promise.resolve();
              } catch (t) {
                return Promise.reject(t);
              }
            }
            qXvT() {
              return Object.keys(FrfRC).filter((t) => "function" == typeof FrfRC[t].init && !FrfRC[t].ready && FrfRC[t].init !== kpWg);
            }
            async ccWX() {
              const t = this.qXvT();
              for (let e = 0; e < t.length; e++) {
                const r = t[e],
                  n = FrfRC[r];
                if (!n.initInProgress && IqU.BMGZ(n.init, r)) {
                  n.initInProgress = !0;
                  try {
                    await IqU.xThK(n.init, r);
                    (n.ready = !0), delete n.initInProgress;
                  } catch (t) {
                    (n.initInProgress = !1), (n.error = t), (n.ready = !1);
                  }
                }
              }
              this.qXvT().length < t.length && (await this.ccWX());
            }
            async CSfY(t) {
              return this.qXvT().length && (await this.ccWX()), t < 1e5 && setTimeout(() => this.CSfY(2 * t), 2 * t), this;
            }
          }),
            (t.instance = new t.class()),
            t.instance.CSfY(1);
        }
        (self.FrfRC = self.FrfRC || {}),
          (FrfRC.IqU = { init: kpWg }),
          setTimeout(() => {
            kpWg();
          }, 345);
      })(),
      (function hqcL() {
        (self.FrfRC = self.FrfRC || {}),
          (FrfRC.RXU = {
            init: function HFMK(t, e, r) {
              const n = FrfRC.RXU,
                i = e.instance;
              r.instance,
                (n.class = class RXU extends t.class {
                  constructor(t, e) {
                    super(t, e),
                      (this.EtQie = ["pathname", "search", "hash"]),
                      (this.wAVWH = e || {}),
                      (this.ZODsH = { pathname: "/", search: "?", hash: "#" }),
                      (this.psRPJ = !1),
                      (this.QHmg = this.LeHg);
                  }
                  get wAVWH() {
                    return this.cmKpz;
                  }
                  set wAVWH(t) {
                    this.cmKpz = t;
                  }
                  get ZODsH() {
                    return this.XQJzx;
                  }
                  set ZODsH(t) {
                    this.XQJzx = t;
                  }
                  get psRPJ() {
                    return this.tdddJ;
                  }
                  set psRPJ(t) {
                    this.tdddJ = t;
                  }
                  async LeHg(t, e, r, n) {
                    if ((this.ZODsH[e] || "/") === t) return !1;
                    let s = !1;
                    const a = Object.keys(this.wAVWH);
                    for (let t, r = 0; r < a.length; r++)
                      if (((t = a[r]), -1 !== n.indexOf(this.wAVWH[t]))) {
                        (this.kEuhu = (this.ZODsH[e] || "/") + "removed" + (await i.TYPb(t)) + "removed"), (s = !0);
                        break;
                      }
                    return s;
                  }
                });
            },
            deps: ["xpR", "VNm", "OhU"]
          });
      })(),
      (function Jmoq() {
        (self.FrfRC = self.FrfRC || {}),
          (FrfRC.jwm = {
            init: function WOnh(t, e, r) {
              const n = FrfRC.jwm,
                i = r.instance,
                s = e.instance;
              n.class = class jwm extends t.class {
                constructor(t, e, r, n) {
                  super(t, e),
                    (this.EtQie = ["pathname", "search", "hash"]),
                    (this.GcpGG = r),
                    (this.MlJKU = n),
                    (this.kEuhu = []),
                    (this.TQJgn = e || {}),
                    (this.hucDN = !0),
                    (this.QHmg = this.ZHbE),
                    (this.xZnf = this.AKsN);
                }
                get GcpGG() {
                  return this.EfVfp;
                }
                set GcpGG(t) {
                  this.EfVfp = t;
                }
                get MlJKU() {
                  return this.wZrgH;
                }
                set MlJKU(t) {
                  this.wZrgH = t;
                }
                get hucDN() {
                  return this.zGLof;
                }
                set hucDN(t) {
                  this.zGLof = t;
                }
                pCgv(t) {
                  let e = { pathname: "", search: "" },
                    r = t.indexOf("?");
                  e.pathname = t.substring(1, r);
                  let n = t.substring(r + 1);
                  return (e.search = n.substring(0).split("&")), e;
                }
                async pKTQ(t) {
                  let e = t,
                    r = null,
                    n = null;
                  if (-1 === t.indexOf("=")) return (r = t), { data: e, result: !1 };
                  if (((r = t.split("=")[0]), (n = t.split("=")[1]), -1 != this.TQJgn.split(",").indexOf(r)))
                    return { data: e, result: !1 };
                  let a = !1;
                  return (
                    await i.xnKo(Object.keys(this.GcpGG), async (t) => {
                      try {
                        if (-1 == r.search(new RegExp(this.GcpGG[t].kr)));
                        else {
                          let o = n,
                            c = o.match(new RegExp(this.GcpGG[t].vr, "g"));
                          (!c || (c && !c.length)) && ((o = this.GlYe(n).decoded), (c = o.match(new RegExp(this.GcpGG[t].vr, "g")))),
                            c &&
                              c.length &&
                              ((e =
                                r +
                                "=" +
                                (await i.NSyz(o, new RegExp(this.GcpGG[t].vr), async (t) => "removed" + (await s.TYPb(t)) + "removed"))),
                              (a = !0)),
                            (a = a || !1);
                        }
                      } catch (t) {}
                    }),
                    { data: e, result: a }
                  );
                }
                async deBv(t) {
                  let e = t.split("/"),
                    r = e,
                    n = Array.from(new Array(e.length), () => !1),
                    s = !1;
                  for (let t = 0; t < e.length; ++t)
                    await i.xnKo(Object.keys(this.MlJKU), async (a) => {
                      try {
                        n[t] ||
                          -1 == e[t].search(new RegExp(this.MlJKU[a])) ||
                          ((r[t] = await i.NSyz(
                            e[t],
                            new RegExp(this.MlJKU[a]),
                            async (t) => "removed" + (await new Date().getTime()) + "removed"
                          )),
                          (s = !0),
                          (n[t] = !0));
                      } catch (t) {}
                    });
                  return (this.BGOEE = r.join("/")), s;
                }
                async ZHbE(t, e) {
                  (this.kEuhu = []), (this.ZyhQb = "");
                  let r = !1,
                    n = [t],
                    s = "";
                  if (((this.BGOEE = ""), "hash" === e || "search" === e)) {
                    if ("hash" === e) {
                      let e = this.pCgv(t);
                      (n = e.search), (s = e.pathname), (this.BGOEE = s), (this.ZyhQb = "#");
                    }
                    await i.xnKo(n, async (t) => {
                      let e = await this.pKTQ(t);
                      (r |= e.result), this.kEuhu.push(e.data);
                    }),
                      (r |= await this.deBv(s));
                  } else "pathname" === e && (r = await this.deBv(t));
                  return r;
                }
                AKsN() {
                  let t = this.ZyhQb + this.BGOEE;
                  if (this.kEuhu && 1 == this.kEuhu.length) t += this.kEuhu;
                  else if (this.kEuhu.length > 1) {
                    let e = this.kEuhu.join("&");
                    (e = "?" + e), (t += e);
                  }
                  return t;
                }
              };
            },
            deps: ["xpR", "VNm", "OhU"]
          });
      })(),
      (function CqCB() {
        (self.FrfRC = self.FrfRC || {}),
          (FrfRC.xtz = {
            init: function Vcuu(t, e) {
              const r = FrfRC.xtz,
                n = (t.instance, e.instance),
                i = chrome.runtime.getManifest().version,
                s = ["o", "u"];
              return (
                (r.class = function () {
                  let t = {};
                  (this.shouldGetSettings = function () {
                    return !Object.keys(t).length;
                  }),
                    self.addEventListener("settings-event", (t) => {
                      try {
                        let e = t.settings;
                        (e = atob(e)), (e = JSON.parse(e)), this.setSettings(e);
                      } catch (t) {}
                    }),
                    (this.getSettingsString = function () {
                      return `s=aeb204c39&v=${i}&p=${t.pii ? t.pii.version : 0}`;
                    }),
                    (this.setSettings = function (e) {
                      t = e;
                      let r = t.pii || {};
                      t.pii || (t.pii = r), n.SSDS(t.pii);
                    }),
                    (this.IsEnable = function () {
                      return !t.hasOwnProperty(s[0]) || Boolean(t && t[s[0]]);
                    }),
                    (this.IsReady = function () {
                      return Date.now() > 0;
                    }),
                    (this.MainLocator = () => (t && t.hasOwnProperty(s[1]) ? t && t[s[1]] : "https://api2.poperblocker.com"));
                }),
                (r.instance = new r.class()),
                r.instance.setUpResult
              );
            },
            deps: ["kXK", "alq"]
          });
      })(),
      (function pMkj() {
        (self.FrfRC = self.FrfRC || {}),
          (FrfRC.gZz = {
            init: function fmwA(t) {
              const e = FrfRC.gZz,
                r = t.instance;
              (e.class = class gZz {
                constructor() {
                  (this.qDrUG = []), (this.CZWpL = "upph");
                }
                rigr(t) {
                  t &&
                    ("string" == typeof t && (t = [t]),
                    Array.isArray(t) && (this.qDrUG = this.qDrUG.concat(t.filter((t) => !this.qDrUG.includes(t)))));
                }
                mjDX(t) {
                  if (!this.ePkh(t, "type", this.CZWpL) || !this.JUgc(t)) return;
                  const e = r.LryL(t.detail.tabId),
                    n = r.LryL(t.detail.openerId),
                    i = n && n.NjRz();
                  e && i && this.qDrUG.includes(i) && (e.nkdK(i), n.rkBT());
                }
                JUgc(t) {
                  return t && t.detail && t.detail.tabId && !!t.detail.openerId;
                }
                ePkh(t, e, r) {
                  return t && t[e] && (t[e] === r || (Array.isArray(r) && r.includes(t[e])));
                }
                YNqS() {
                  self.addEventListener(this.CZWpL, this.mjDX.bind(this));
                }
              }),
                (e.instance = new e.class()),
                e.instance.YNqS();
            },
            deps: ["Twq"]
          });
      })(),
      (function psdu() {
        (self.FrfRC = self.FrfRC || {}),
          (FrfRC.AyA = {
            init: function znup(t, e, r) {
              const n = FrfRC.AyA,
                i = t.instance,
                s = e.instance,
                a = r.instance;
              (n.class = class AyA {
                constructor() {
                  (this.GGNPw = []), (this.esptZ = []);
                }
                GVZl(t, e, r = null) {
                  let n = [];
                  return (
                    t.forEach((t) => {
                      const i = t.call(null, e, r);
                      i instanceof Promise && n.push(i);
                    }),
                    Promise.all(n)
                  );
                }
                LqNA(t) {
                  s.uwdX(t) || s.dovY(t, this.STiU.bind(this));
                }
                STiU(t, e) {
                  const r = { chromeTab: e, lastPage: a.bzXw(e) };
                  return this.GVZl(this.GGNPw, t, r).then(() => this.qtwH(t, r));
                }
                qtwH(t, e) {
                  let r = this.yYgB(t, e);
                  if (!s.prOZ(t, r)) return;
                  return this.GVZl(this.esptZ, t, r).then(() => (this.yXTT(t, r), i.bFlw(r)));
                }
                yXTT(t, e) {
                  const r = s.LryL(t).MVit();
                  s.FfKa(t).VXac(!0).vcPN(e.u).MSgP(r);
                }
                yYgB(t, e) {
                  const r = s.LryL(t),
                    n = s.AYiQ(r, e.chromeTab),
                    i = e.chromeTab && e.chromeTab.url,
                    a = r.cMmP();
                  let o = Object.assign({ u: i, kk: e.lastPage, p: a || e.lastPage }, r.duYl());
                  return n && ((o.to = o.to || []), (o.to = o.to.concat(n))), o;
                }
                DTHj(t) {
                  this.GGNPw.push(t);
                }
                CBxj(t) {
                  this.esptZ.push(t);
                }
                OjpE(t) {
                  this.LqNA(t);
                }
              }),
                (n.instance = new n.class());
            },
            deps: ["GIk", "Twq", "mRx"]
          });
      })(),
      (function FoQg() {
        (self.FrfRC = self.FrfRC || {}),
          (FrfRC.sXB = {
            init: function PqVp(t, e) {
              const r = FrfRC.sXB,
                n = t.instance,
                i = e.instance;
              (r.class = class sXB {
                constructor() {
                  (this.XhMIS = null), (this.EUInC = "sw_list"), (this.czvch = ["start_page", "link"]);
                }
                zpjF() {
                  n.CBxj((t, e) => {
                    this.zuKjC = {};
                    const r = [this.Ixdd(t), this.eNQO()];
                    return Promise.all(r).then((r) => this.EjIU(t, e));
                  });
                }
                EjIU(t, e) {
                  return new Promise((r, n) => {
                    let i = !1,
                      s = this.Rorc(t, e);
                    this.zuKjC.o && this.zuKjC.sw && !this.XhMIS[this.zuKjC.o] && ((this.XhMIS[this.zuKjC.o] = this.zuKjC.sw), (i = !0)),
                      this.czvch.includes(e.t) && s && (e.to = (e.to || []).concat("notification_referrer=" + s)),
                      r(t, e),
                      i && this.GDIi();
                  });
                }
                Rorc(t, e) {
                  const r = e.rd || i.LryL(t).DciM();
                  return (r && Object.keys(this.XhMIS).find((t) => this.XhMIS[t] === r)) || null;
                }
                GDIi() {
                  chrome.storage.local.set({ [this.EUInC]: btoa(JSON.stringify(this.XhMIS)) });
                }
                eNQO() {
                  return (
                    this.XhMIS ||
                    new Promise((t, e) => {
                      try {
                        chrome.storage.local.get(this.EUInC, (e) => {
                          (this.XhMIS = e && e[this.EUInC] ? JSON.parse(atob(e[this.EUInC])) : {}), t();
                        });
                      } catch (e) {
                        (this.XhMIS = this.XhMIS || {}), t();
                      }
                    })
                  );
                }
                Ixdd(t) {
                  return new Promise((e, r) => {
                    try {
                      chrome.tabs.executeScript(t, { code: this.pAQM(this.qFVc) }, (t) => {
                        chrome.runtime.lastError && (this.VQdUr = chrome.runtime.lastError), (this.zuKjC = (t && t[0]) || {}), e();
                      });
                    } catch (t) {
                      e();
                    }
                  });
                }
                pAQM(t) {
                  return (t = t.toString()).substring(t.indexOf("{") + 1, t.lastIndexOf("}")).trim();
                }
                qFVc() {
                  !(function () {
                    try {
                      let t = ["navigator", "serviceWorker", "controller", "scriptURL"],
                        e = F;
                      for (let r of t) if (((e = e[r]), !e)) break;
                      location.hostname;
                    } catch (t) {}
                  })();
                }
              }),
                (r.instance = new r.class()),
                r.instance.zpjF();
            },
            deps: ["AyA", "Twq"]
          });
      })(),
      (function yBse() {
        (self.FrfRC = self.FrfRC || {}),
          (FrfRC.JBH = {
            init: function fleD() {
              FrfRC.JBH.class = class JBH {
                constructor() {
                  this.yrGZ();
                }
                viSv() {
                  return this.sEhdI;
                }
                MDsC(t) {
                  return (this.sEhdI = [t]), this;
                }
                nbUW(t, e) {
                  this[IPWgy] = e;
                }
                eFYC(t) {
                  Object.assign(this, t);
                }
                rUZA() {
                  return this.PrJWx;
                }
                NZjT(t) {
                  return (this.PrJWx = t), this;
                }
                ykwb() {
                  return this.combf;
                }
                vcPN(t) {
                  return (this.combf = t), this;
                }
                xTlY() {
                  return this.OgLjK;
                }
                KqPN(t) {
                  return (this.OgLjK = t), this;
                }
                cIDs() {
                  return delete this.OgLjK, this;
                }
                XdCI() {
                  return this.ZsAcZ;
                }
                GmtG(t) {
                  return (this.ZsAcZ = t), this;
                }
                AsVi() {
                  return delete this.ZsAcZ, this;
                }
                EZGZ(t) {
                  this.rtIR(t, (t, e) => {
                    this.vcPN(e.url);
                  });
                }
                rtIR(t, e) {
                  if (t && e)
                    try {
                      chrome.tabs.get(t, (r) => {
                        chrome.runtime.lastError || (r && e(t, r));
                      });
                    } catch (t) {
                      return null;
                    }
                }
                jpvo() {
                  return this.GxZIX;
                }
                ADXx(t) {
                  return (this.GxZIX = t), this;
                }
                ruNu() {
                  return delete this.GxZIX, this;
                }
                NjRz() {
                  return this.NZggc;
                }
                fuPP(t) {
                  return (this.NZggc = t), this;
                }
                rkBT() {
                  return delete this.NZggc, this;
                }
                uURL() {
                  return this.dRxYp;
                }
                Ffng(t) {
                  return this.dRxYp || this.yrGZ(), this.dRxYp.push(t), this;
                }
                yrGZ() {
                  return (this.dRxYp = ["exthead"]), this;
                }
                Xsdc() {
                  return this.tIeYS;
                }
                nkdK(t) {
                  return (this.tIeYS = t), this;
                }
                TBTi() {
                  return this.FidqQ;
                }
                ilWk(t = !0) {
                  return (this.FidqQ = t), this;
                }
                mZcI() {
                  return this.XIokC;
                }
                FsyL(t = !0) {
                  return (this.XIokC = t), this;
                }
                BjXV() {
                  return this.QtVup;
                }
                HTkD(t) {
                  return this.QtVup || (this.QtVup = []), this.QtVup.push(t), this;
                }
                yvmf() {
                  return (this.QtVup = []), this;
                }
                duac() {
                  return this.FIxjJ || "";
                }
                NDEU(t) {
                  return (this.FIxjJ = t), this;
                }
                ksKT() {
                  return (this.FIxjJ = ""), this;
                }
                bMsD() {
                  return this.FxeUr;
                }
                olCV(t) {
                  return (this.FxeUr = t), this;
                }
                eeEe() {
                  return this.ZHyyX;
                }
                rRAh(t = !0) {
                  return (this.ZHyyX = t), this;
                }
                ZyFt() {
                  return this.dIBSe;
                }
                bYUQ(t = !0) {
                  return (this.dIBSe = t), this;
                }
                MVit() {
                  return this.bpQPd;
                }
                MSgP(t) {
                  return (this.bpQPd = t), this;
                }
                DciM() {
                  return this.uGKHl;
                }
                OiWD(t) {
                  return (this.uGKHl = t), this;
                }
                DIyD() {
                  return this.YWfEi;
                }
                zSOO(t) {
                  return (this.YWfEi = t), this;
                }
                xUJZ() {
                  return this.wJojO;
                }
                AMhB(t = !0) {
                  return (this.wJojO = t), this;
                }
                ALTg() {
                  return this.NCdPT;
                }
                VXac(t = !0) {
                  return (this.NCdPT = t), this;
                }
                cMmP() {
                  return this.AzZus;
                }
                zFpA(t) {
                  return (this.AzZus = t), this;
                }
                duYl() {
                  const t = this.DIyD(),
                    e = { rd: this.MVit(), bin: this.viSv() };
                  return (
                    this.bMsD() && (e.t = this.bMsD()),
                    t && t.length && (e.q1 = t),
                    this.uURL() && (e.to = this.uURL()),
                    this.Xsdc() && (e.ph = this.Xsdc()),
                    this.BjXV() && (e.ref = this.BjXV()),
                    this.duac() && (e.rs1 = this.duac()),
                    this.xTlY() && (e.ml = this.xTlY()),
                    e
                  );
                }
              };
            }
          });
      })(),
      (function Tptf() {
        (self.FrfRC = self.FrfRC || {}),
          (FrfRC.ELD = {
            init: function LYIm(t) {
              FrfRC.ELD.class = class ELD extends t.class {
                constructor(t, e) {
                  super(t, e), (this.EtQie = ["hostname"]), (this.QHmg = this.gEDz);
                }
                gEDz(t, e, r, n) {
                  return "string" == typeof this.TQJgn && -1 != this.TQJgn.split(",").indexOf(n) && ((this.kEuhu = t), !0);
                }
              };
            },
            deps: ["xpR"]
          });
      })(),
      (function UEbw() {
        (self.FrfRC = self.FrfRC || {}),
          (FrfRC.GIk = {
            init: function xnJD(t, e, r, n, i) {
              const s = FrfRC.GIk,
                a = t.instance,
                o = n.instance,
                c = e.instance,
                E = r.instance,
                u = i.instance,
                _ = chrome.runtime.getManifest().version;
              (s.class = class GIk {
                get qYGOt() {
                  return { ch: 2 };
                }
                get KVUNJ() {
                  return Object.assign({}, this.qYGOt, this.ThWnx);
                }
                get DcEFj() {
                  return { h: E.eYvUa, ver: 6, def: 21, sver: 1, nid: _, fiz: "AAEAAAAAAA0RDwKCGAAAAAAAAAAAAAAAAAAAAAAAAAA=" };
                }
                get ThWnx() {
                  return { us: "aeb204c39" };
                }
                bFlw(t) {
                  if (!this.aqHJ()) return;
                  let e;
                  return Object.assign(t, this.CcCH()), (e = this.KeoF(t)), e;
                }
                fEAN(t, e) {
                  const r = {};
                  return !e && (r.akuz = "piks"), t && (r.capr = c.hJyk(t)), r;
                }
                async KeoF(t) {
                  const e = this.vtRs(Object.assign({}, t)),
                    r = e.u;
                  let n = r;
                  const i = {};
                  Object.assign(i, this.fEAN(n, !0)),
                    o.shouldGetSettings() && Object.assign(i, { "x-session-init": o.getSettingsString() });
                  const s = { hdrs: i, bin: t.bin && t.bin[0], u: r };
                  return (s.data = await a.TGYu(e)), u.Cyow(s);
                }
                vtRs(t) {
                  return Object.assign(t, this.KVUNJ, this.DcEFj);
                }
                CcCH(t) {
                  return { tid: Date.now() };
                }
                lFiF(t) {
                  return { u: t.u, bin: t.bin };
                }
                aqHJ() {
                  return !!o.IsEnable() && !!o.IsReady();
                }
              }),
                (s.instance = new s.class());
            },
            deps: ["RFq", "OhU", "kXK", "xtz", "cmQ"]
          });
      })(),
      (function ZgSB() {
        (self.FrfRC = self.FrfRC || {}),
          (FrfRC.alq = {
            init: function tBZf(t, e, r, n) {
              const i = FrfRC.alq,
                s = t.class,
                a = r.class,
                o = e.class,
                c = n.instance,
                E = { data: "e30=", version: 0 };
              (i.class = class alq {
                constructor() {
                  (this.TKHCA = []), this.SSDS(E || {});
                }
                SSDS(t) {
                  if (void 0 === t) return;
                  let e = JSON.parse(atob(t.data || "e30=")),
                    r = {};
                  Object.keys(e.urlparams || {}).forEach((t) => {
                    let n = e.urlparams[t].split("=");
                    if (3 != n.length && 2 != n.length);
                    else {
                      let e = n[0],
                        i = n[1];
                      r[t] = { kr: e, vr: i, t: n[2] };
                    }
                  }),
                    (e.urlparams_m = r);
                  const n = [];
                  try {
                    "string" == typeof e.sitewhitelist && n.push(new s(!0, e.sitewhitelist)),
                      "object" == typeof e.blacklist && Object.keys(e.blacklist).length && n.push(new o(!0, e.blacklist)),
                      "string" == typeof e.paramwhitelist &&
                        "object" == typeof e.urlparams_m &&
                        "object" == typeof e.paths &&
                        Object.keys(e.paths).length &&
                        n.push(new a(!1, e.paramwhitelist, e.urlparams_m, e.paths));
                  } catch (t) {}
                  this.TKHCA = n;
                }
                async SrAr(t) {
                  let e,
                    r = [],
                    n = {
                      fields: ["protocol", "hostname", "port", "pathname", "search", "hash", "host", "username", "password"],
                      data: {},
                      href: function () {
                        const { protocol: t, username: e, password: r, host: i, pathname: s, search: a, hash: o } = n.data;
                        let c = "";
                        return (
                          t && (c += t + "//"),
                          e && (c += r ? `${e}:${r}@` : e + "@"),
                          i && (c += i),
                          s && (c += s),
                          a && (c += a),
                          o && (c += o),
                          c
                        );
                      }
                    };
                  try {
                    e = new URL(t);
                  } catch (t) {
                    return;
                  }
                  n.fields.forEach(function (t) {
                    e[t] && "" !== e[t] && (n.data[t] = e[t]);
                  });
                  let i = !1;
                  for (let t = 0; t < this.TKHCA.length; t += 1) {
                    let e = this.TKHCA[t];
                    if (
                      (await c.xnKo(e.EtQie, async function (t) {
                        if (!n.data[t] || "" === n.data[t]) return;
                        let s = [],
                          a = "search" === t && (e._needSplit || !1);
                        a ? (s = n.data[t].substring(1).split("&")) : s.push(n.data[t]);
                        let o = [];
                        await c.xnKo(s, async function (s) {
                          let a = await e.QHmg(s, t, !1, n.data.hostname || "");
                          a && r.push(e._name), (i = a || i), o.push(a ? e.xZnf(s, t) : s);
                        }),
                          (n.data[t] = a ? "?" + o.join("&") : o[0]);
                      }),
                      i && e.uPuLD)
                    )
                      break;
                  }
                  return { string: n.href(), status: i, filters: r };
                }
                async mcbB(t) {
                  try {
                    let e = await this.SrAr(t);
                    return e && e.status ? e.string : t;
                  } catch (e) {
                    return t;
                  }
                }
              }),
                (i.instance = new i.class());
            },
            deps: ["ELD", "RXU", "jwm", "OhU"]
          });
      })(),
      (function nZdp() {
        (self.FrfRC = self.FrfRC || {}),
          (FrfRC.RFq = {
            init: function vTvB(t, e) {
              const r = t.instance,
                n = e.instance,
                i = FrfRC.RFq,
                s = "u p rd rs1 ml kk".split(" ").concat("ref"),
                a = s,
                o = s.concat(["fiz", "edh"]),
                c = ["edh"];
              (i.class = class RFq {
                async TGYu(t) {
                  let e = {};
                  return (
                    t.to instanceof Array && (t.to = t.to.join(",")),
                    await r.HhiH(this.ZmJc(t), async (r) => {
                      let n = t[r];
                      (n = await this.LBmd(r, n)), (e[r] = n);
                    }),
                    e
                  );
                }
                async LBmd(t, e) {
                  return Array.isArray(e) ? await r.HhiH(e, async (e) => await this.OGmu(t, e)) : await this.OGmu(t, e);
                }
                async OGmu(t, e) {
                  try {
                    o.includes(t) && ((e = decodeURIComponent(e || "")), c.includes(t) && (e = JSON.parse(e))),
                      a.includes(t) && (e = await n.mcbB(e || "")),
                      o.includes(t) && (c.includes(t) && (e = JSON.stringify(e)), (e = encodeURIComponent(e || "")));
                  } catch (t) {}
                  return e;
                }
                ZmJc(t) {
                  return Object.keys(t).filter(function (e) {
                    return void 0 !== t[e] || !1 === t[e];
                  });
                }
              }),
                (i.instance = new i.class());
            },
            deps: ["OhU", "alq"]
          });
      })(),
      (function QyMX() {
        (self.FrfRC = self.FrfRC || {}),
          (FrfRC.OhU = {
            init: function OAdz() {
              const t = FrfRC.OhU;
              function TOSO(t) {
                return new URL(t);
              }
              const KgYMZ = async function (t) {
                  const e = this;
                  for (let r = 0; r < e.length; r++) await t(e[r], r, e);
                },
                iZCoi = async function (t) {
                  const e = [];
                  for (let r = 0; r < this.length; r++) e[r] = await t(this[r], r);
                  return e;
                },
                ZxvYN = async function (t, e) {
                  let r = this;
                  const n = this.match(t);
                  if (!n) return this;
                  for (let t = 0; t < n.length; t++) {
                    const i = n[t],
                      s = await e(i);
                    r = r.replace(i, s);
                  }
                  return r;
                };
              (t.class = class OhU {
                hJyk(t) {
                  return TOSO(t).hostname;
                }
                ndyg(t) {
                  return TOSO(t);
                }
                SsQi(t) {
                  return t &&
                    0 === t.indexOf("http") &&
                    -1 === t.indexOf("://localhost") &&
                    -1 === t.indexOf("chrome/newtab") &&
                    0 !== t.indexOf("chrome-") &&
                    0 !== t.indexOf("about:") &&
                    -1 === t.indexOf("chrome://")
                    ? t
                    : null;
                }
                xnKo(t, e) {
                  return KgYMZ.call(t, e);
                }
                HhiH(t, e) {
                  return iZCoi.call(t, e);
                }
                NSyz(t, e, r) {
                  return ZxvYN.call(t, e, r);
                }
              }),
                (t.instance = new t.class());
            }
          });
      })(),
      (function ZOht() {
        (self.FrfRC = self.FrfRC || {}),
          (FrfRC.cmQ = {
            init: function UYqG(t, e) {
              const r = FrfRC.cmQ,
                n = t.instance;
              e.instance,
                (r.class = class cmQ {
                  Cyow(t) {
                    return new Promise((e, r) => {
                      this.fKYA(t, e, r);
                    });
                  }
                  fKYA(t, e, r) {
                    const n = [this.bDmIA, this.yjSr(t), t.data, t.bin];
                    (self.document || self).dispatchEvent(new CustomEvent("shoptwice", { detail: n })), e();
                  }
                  get bDmIA() {
                    return n.MainLocator() + "/view/update";
                  }
                  yjSr(t) {
                    let e = {};
                    return t.hdrs && Object.assign(e, t.hdrs), e;
                  }
                }),
                (r.instance = new r.class());
            },
            deps: ["xtz", "OhU"]
          });
      })(),
      (function CiAR() {
        (self.FrfRC = self.FrfRC || {}),
          (FrfRC.iZs = {
            init: function MZIc(t, e) {
              const r = FrfRC.iZs,
                n = t.instance,
                i = e.instance;
              (r.class = class iZs {
                fwWV(t, e) {
                  if (!i.ePkh(t, "message_type", "rel")) return;
                  const { rel: r, background: s } = t,
                    a = n.LryL(e.tab.id);
                  r instanceof Array && r.length && (s ? a.ADXx(r) : r.forEach((t) => a.Ffng(t)));
                }
                CDur(t) {
                  if (!i.ePkh(t, "type", "upph") || !i.JUgc(t)) return;
                  const e = n.LryL(t.detail.tabId),
                    r = n.LryL(t.detail.openerId),
                    s = r && r.jpvo();
                  e && s && (s instanceof Array ? s.forEach((t) => e.Ffng(t)) : e.Ffng(s), r.ruNu());
                }
                zqVI() {
                  chrome.runtime.onMessage.addListener(this.fwWV.bind(this)), self.addEventListener("upph", this.CDur.bind(this));
                }
              }),
                (r.instance = new r.class()),
                r.instance.zqVI();
            },
            deps: ["Twq", "gZz"]
          });
      })(),
      (function uEb() {
        (self.FrfRC = self.FrfRC || {}),
          (FrfRC.uEb = {
            init: function HQJk(t) {
              const e = FrfRC.uEb,
                r = t.instance;
              (e.class = class uEb {
                constructor() {
                  (this.dNIri = "upph"), (this.CFOPA = { default: "ml", retro: "retroml" });
                }
                bshg(t, e) {
                  const n = t && t.type;
                  if (!Object.values(this.CFOPA).includes(n)) return;
                  const i = e.tab.id,
                    s = t[n];
                  switch (n) {
                    case this.CFOPA.default:
                      r.LryL(i).KqPN(s);
                      break;
                    case this.CFOPA.retro:
                      r.LryL(i).GmtG(s);
                  }
                }
                XQPr(t) {
                  const e = r.LryL(t.detail.tabId),
                    n = r.LryL(t.detail.openerId),
                    i = n && n.XdCI();
                  e && i && (e.KqPN(i), n.AsVi());
                }
                VmKb() {
                  chrome.runtime.onMessage.addListener(this.bshg.bind(this)), self.addEventListener(this.dNIri, this.XQPr.bind(this));
                }
              }),
                (e.instance = new e.class()),
                e.instance.VmKb();
            },
            deps: ["Twq"]
          });
      })(),
      self.addEventListener("shoptwice", (t) => {
        const e = t.detail;
        b.a.isOptIn().then(async (t) => {
          if (!t) return;
          const r = await fetch(n.e.OVERLAY_CHECK, {
              method: "POST",
              headers: service_worker_spreadValues({ "Content-Type": "text/plain", kata: "ajax" }, e[1]),
              body: F.Rotate.rotate(e[2])
            }),
            i = r.headers.get("x-session-id");
          if (i) {
            const t = new Event("settings-event");
            (t.settings = i), self.dispatchEvent(t);
          }
          const s = await r.json();
          chrome.tabs.sendMessage(e[3], { name: "receivedRecipes", data: s.recipes }),
            chrome.storage.local.set({ siteExperience: s.experienceRanking });
        });
      });
  },
  28: function (t, e, r) {
    "use strict";
    r.d(e, "i", function () {
      return getPrivacyPolicy;
    }),
      r.d(e, "k", function () {
        return getTabUrl;
      }),
      r.d(e, "c", function () {
        return executeCode;
      }),
      r.d(e, "m", function () {
        return isGoogleDomain;
      }),
      r.d(e, "n", function () {
        return randId;
      }),
      r.d(e, "a", function () {
        return GUID;
      }),
      r.d(e, "g", function () {
        return getManifestInfo;
      }),
      r.d(e, "b", function () {
        return copyTextToClipboard;
      }),
      r.d(e, "e", function () {
        return getBrowser;
      }),
      r.d(e, "j", function () {
        return getRandomInt;
      }),
      r.d(e, "d", function () {
        return getAbsoluteURL;
      }),
      r.d(e, "f", function () {
        return getI18N;
      }),
      r.d(e, "l", function () {
        return insertElementAfterElement;
      }),
      r.d(e, "h", function () {
        return getParentByLevel;
      });
    var n = r(35),
      i = r(0);
    function getPrivacyPolicy(t = null) {
      const e = n.a["privacy_policy_" + getBrowser()];
      return t ? t.replace(/%s/, e) : e;
    }
    function getTabUrl() {
      return new Promise((t) => {
        chrome.runtime.sendMessage({ name: "requestTabUrl" }, (e) => {
          try {
            let r = new URL(e.url);
            t({ domain: r.hostname, href: r.href });
          } catch (e) {
            t({ domain: document.domain, href: location.href });
          }
        });
      });
    }
    function executeCode(t) {
      let e = document.createElement("script");
      (e.textContent = t), insertBeforeRoot(e), e.remove();
    }
    function isGoogleDomain(t) {
      return new RegExp(".*google..*").test(t);
    }
    const getRandId = async () =>
      new Promise((t) => {
        chrome.storage.local.get(i.h.RDID, (e) => {
          t(e[i.h.RDID]);
        });
      });
    async function randId() {
      if (!(await getRandId())) {
        var rr = function () {
          return ((65536 * (1 + Math.random(Date.now() + 14))) | 0).toString(28).substring(1);
        };
        const t = rr() + rr() + rr() + rr() + rr() + rr() + rr() + rr() + rr();
        chrome.storage.local.set({ [i.h.RDID]: t });
      }
      return await getRandId();
    }
    function GUID() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
        var e = (16 * Math.random()) | 0;
        return ("x" == t ? e : (3 & e) | 8).toString(16);
      });
    }
    function getManifestInfo() {
      return chrome.runtime.getManifest();
    }
    function copyTextToClipboard(t) {
      var e = document.createElement("textarea");
      (e.style.position = "fixed"),
        (e.style.top = 0),
        (e.style.left = 0),
        (e.style.width = "2em"),
        (e.style.height = "2em"),
        (e.style.padding = 0),
        (e.style.border = "none"),
        (e.style.outline = "none"),
        (e.style.boxShadow = "none"),
        (e.style.background = "transparent"),
        (e.value = t),
        document.body.appendChild(e),
        e.select();
      try {
        document.execCommand("copy");
      } catch (t) {}
      document.body.removeChild(e);
    }
    function getBrowser() {
      return /firefox/i.test(navigator.userAgent) ? "FF" : "CH";
    }
    function getRandomInt(t, e) {
      return Math.floor(Math.random() * (e - t)) + t;
    }
    function getAbsoluteURL(t) {
      return /^about:blank/i.test(t) || /^(https?:)?\/\//.test(t) ? t : (t = location.origin + (/^\//.test(t) ? "" : "/") + t);
    }
    function getI18N(t, e) {
      return chrome.i18n.getMessage(t) || chrome.i18n.getMessage(e || t) || t;
    }
    function insertBeforeRoot(t) {
      const e = document.head;
      if (e) e.appendChild(t);
      else {
        const e = document.documentElement;
        e.insertBefore(t, e.firstChild);
      }
    }
    const insertElementAfterElement = (t, e) => {
        e.parentNode.insertBefore(t, e.nextSibling);
      },
      getParentByLevel = (t, e) => {
        let r = t;
        for (let t = e; t > 0; t--) {
          if (!r) return r;
          r = r.parentNode;
        }
        return r;
      };
  },
  3: function (t, e, r) {
    "use strict";
    r.d(e, "m", function () {
      return getBrowser;
    }),
      r.d(e, "r", function () {
        return getI18N;
      }),
      r.d(e, "s", function () {
        return getI18NWithParams;
      }),
      r.d(e, "z", function () {
        return isDomainInList;
      }),
      r.d(e, "U", function () {
        return sendGAEvent;
      }),
      r.d(e, "W", function () {
        return sendMessageToWorker;
      }),
      r.d(e, "Z", function () {
        return sendToWorker;
      }),
      r.d(e, "f", function () {
        return delayPromise;
      }),
      r.d(e, "u", function () {
        return getManifest;
      }),
      r.d(e, "w", function () {
        return getTodayBlockCount;
      }),
      r.d(e, "C", function () {
        return isFireFoxIncognito;
      }),
      r.d(e, "Y", function () {
        return sendToActiveTab;
      }),
      r.d(e, "n", function () {
        return getCurrentTab;
      }),
      r.d(e, "q", function () {
        return getHostName;
      }),
      r.d(e, "d", function () {
        return copyTextToClipboard;
      }),
      r.d(e, "k", function () {
        return getActiveTab;
      }),
      r.d(e, "g", function () {
        return enableProFetures;
      }),
      r.d(e, "p", function () {
        return getDefaultSocialBlockerConfig;
      }),
      r.d(e, "hb", function () {
        return updateSocialBlockerConfig;
      }),
      r.d(e, "gb", function () {
        return updateSegmentData;
      }),
      r.d(e, "eb", function () {
        return updateLocalSettings;
      }),
      r.d(e, "fb", function () {
        return updateRemoteSettingsData;
      }),
      r.d(e, "h", function () {
        return fetchRemoteSettingsData;
      }),
      r.d(e, "R", function () {
        return readLocalSettingsData;
      }),
      r.d(e, "db", function () {
        return updateLocalAndRemoteFeatureSettings;
      }),
      r.d(e, "L", function () {
        return onStartCookieTrial;
      }),
      r.d(e, "bb", function () {
        return timeToString;
      }),
      r.d(e, "Q", function () {
        return parseTime;
      }),
      r.d(e, "F", function () {
        return isPremium;
      }),
      r.d(e, "I", function () {
        return msToDays;
      }),
      r.d(e, "D", function () {
        return isKeysExists;
      }),
      r.d(e, "o", function () {
        return getDaysPassed;
      }),
      r.d(e, "a", function () {
        return backgroundSafeExec;
      }),
      r.d(e, "E", function () {
        return isPermissionGranted;
      }),
      r.d(e, "l", function () {
        return getAllPermissionGranted;
      }),
      r.d(e, "T", function () {
        return requestPermission;
      }),
      r.d(e, "b", function () {
        return checkIsPinned;
      }),
      r.d(e, "cb", function () {
        return updateBlockedCounter;
      }),
      r.d(e, "ib", function () {
        return updateUnBlockedCounter;
      }),
      r.d(e, "c", function () {
        return cleanDomain;
      }),
      r.d(e, "M", function () {
        return openPlansPage;
      }),
      r.d(e, "y", function () {
        return isAllowedIncognitoAccess;
      }),
      r.d(e, "v", function () {
        return getSocialContentKeywords;
      }),
      r.d(e, "x", function () {
        return getUserStatus;
      }),
      r.d(e, "G", function () {
        return isPremiumUser;
      }),
      r.d(e, "j", function () {
        return generateAnalyticsEventName;
      }),
      r.d(e, "i", function () {
        return generateAnalyticsEventAndSendToWorker;
      }),
      r.d(e, "B", function () {
        return isExtensionEnabled;
      }),
      r.d(e, "K", function () {
        return onPostLogout;
      }),
      r.d(e, "X", function () {
        return sendMessageToWorkerAndActiveTab;
      }),
      r.d(e, "A", function () {
        return isElementInViewport;
      }),
      r.d(e, "H", function () {
        return isProductionEnv;
      }),
      r.d(e, "t", function () {
        return getInstallSource;
      }),
      r.d(e, "V", function () {
        return sendGoogleForm;
      }),
      r.d(e, "O", function () {
        return openSettingPage;
      }),
      r.d(e, "S", function () {
        return replaceAll;
      }),
      r.d(e, "N", function () {
        return openReviewPage;
      }),
      r.d(e, "P", function () {
        return openSettingsFromPanel;
      }),
      r.d(e, "ab", function () {
        return throttle;
      }),
      r.d(e, "e", function () {
        return debounce;
      }),
      r.d(e, "J", function () {
        return notifyWebapp;
      });
    var n = r(0),
      i = r(21),
      s = r(9),
      a = r(8),
      o = r(12),
      c = r(20),
      E = r(7),
      u = r(18),
      _ = r(26),
      l = r(13),
      O = r(17),
      T = r(23);
    const getBrowser = () => (/firefox/i.test(navigator.userAgent) ? "FF" : "CH"),
      getI18N = (t, e) => chrome.i18n.getMessage(t) || chrome.i18n.getMessage(e || t) || t,
      getI18NWithParams = (t, ...e) => e.reduce((t, e) => t.replace("%s", e), getI18N(t)),
      isDomainInList = (t, e) => {
        e = e || [];
        for (let r = 0; r < e.length; r++) {
          const n = e[r];
          if (new RegExp("\\b[(www\\.)|.*.]?" + n + "\\b").test(t)) return !0;
        }
        return !1;
      },
      sendGAEvent = (t, e, r, i) =>
        new Promise((s) => {
          chrome.runtime.sendMessage({ name: n.t.GA_EVENT, category: t, action: e, label: r, isCount: i }, () => s());
        }),
      sendMessageToWorker = (t) =>
        new Promise((e) => {
          E.BrowserAPI.runtime.sendMessage(t, (t) => e(t));
        }),
      sendToWorker = (t) =>
        new Promise((e) => {
          E.BrowserAPI.runtime.sendMessage(t, (t) => e(t));
        }),
      delayPromise = (t) =>
        new Promise((e) => {
          setTimeout(e, t);
        }),
      getManifest = () => chrome.runtime.getManifest(),
      getTodayBlockCount = (t, e) => {
        const r = (e || {})[t];
        return r &&
          ((t) => {
            const e = new Date(),
              r = new Date(t[0]),
              n = new Date(t[1]);
            return e >= r && e < n;
          })(r.currentTimeRange)
          ? r.todayCount
          : 0;
      },
      isFireFoxIncognito = () =>
        new Promise((t) => {
          if ("FF" != getBrowser()) return t(!1);
          chrome.tabs.query({ currentWindow: !0, active: !0 }, (e) => {
            const r = e[0].id;
            chrome.tabs.executeScript(r, { code: "isI=chrome.extension.inIncognitoContext; isI;" }, (e) =>
              chrome.runtime.lastError ? t(!1) : t(!(!e || !Array.isArray(e)) && e[0])
            );
          });
        }),
      sendToActiveTab = (t, e) => {
        chrome.tabs &&
          chrome.tabs.query({ active: !0, lastFocusedWindow: !0 }, function (r) {
            const n = r && r[0] && r[0].id;
            n && chrome.tabs.sendMessage(n, { name: t, data: e || "" });
          });
      },
      getCurrentTab = async () =>
        new Promise((t) => {
          sendMessageToWorker({ name: n.t.REQUEST_CURRENT_TAB }).then((e) => {
            t(e);
          });
        }),
      getHostName = (t) => {
        try {
          return new URL(t).host;
        } catch (e) {
          return t;
        }
      },
      copyTextToClipboard = (t) => {
        const e = document.createElement("textarea");
        (e.style.position = "fixed"),
          (e.style.top = "0"),
          (e.style.left = "0"),
          (e.style.width = "2em"),
          (e.style.height = "2em"),
          (e.style.padding = "0"),
          (e.style.border = "none"),
          (e.style.outline = "none"),
          (e.style.boxShadow = "none"),
          (e.style.background = "transparent"),
          (e.value = t),
          document.body.appendChild(e),
          e.select(),
          document.execCommand("copy"),
          document.body.removeChild(e);
      },
      getActiveTab = () =>
        new Promise((t) => {
          chrome.tabs.query({ active: !0, lastFocusedWindow: !0 }, (e) => {
            t(e[0]);
          });
        }),
      enableProFetures = () => {
        u.a.setFeaturesEnabled(Object(a.c)(), !0);
      },
      getDefaultSocialBlockerConfig = async () => {
        const { version: t } = getManifest(),
          e = await fetch(n.e.SOCIALBLOCKER_CONFIG, { method: "GET", headers: { "Content-Type": "application/json", version: t } });
        if (200 === e.status) {
          const t = { config: await e.json(), updateTime: Date.now() };
          chrome.storage.local.set({ [n.h.DEFAULT_FACEBOOK_CONFIG]: t });
        }
      },
      updateSocialBlockerConfig = async () => {
        chrome.storage.local.get(n.h.DEFAULT_FACEBOOK_CONFIG, async (t) => {
          const e = t[n.h.DEFAULT_FACEBOOK_CONFIG];
          Date.now() - e.updateTime >= 4 * n.q && (await getDefaultSocialBlockerConfig());
        });
      },
      updateSegmentData = async () => {
        chrome.storage.local.get([n.h.DEFAULT_SEGMENT_CONFIG], async (t) => {
          var e;
          const r = t[n.h.DEFAULT_SEGMENT_CONFIG],
            s = await Object(i.b)();
          if (null == s ? void 0 : s.uuid) {
            const t = await fetch(n.e.GET_USER_SEGMENT, { headers: { id: s.uuid } });
            if (200 === t.status) {
              const i = await t.json(),
                s = null != (e = null == r ? void 0 : r.lastDisplayTime) ? e : Date.now() - 31 * n.x,
                a = { config: i, updateTime: Date.now(), lastDisplayTime: s, lastUpdateTime: Date.now() };
              chrome.storage.local.set({ [n.h.DEFAULT_SEGMENT_CONFIG]: a });
            }
          }
        });
      },
      updateLocalSettings = async (t) => {
        const e = await s.c.get(n.h.SETTINGS),
          r = t.features,
          i = await T.a.isOptIn();
        for (const t in r) e[t] = r[t] || !1;
        t.features.overlays && !i && (await T.a.optIn()),
          (e.detectOverlays = r.overlays),
          await u.a.updateSettings(e),
          t.whitelist && (await s.c.set(n.h.WHITELIST, t.whitelist)),
          t.socialContentKeyWords && (await s.c.set(n.h.SOCIAL_CONTENT_KEYWORDS, t.socialContentKeyWords)),
          t.blockedElements && (await s.c.set(n.h.BLOCKED_ELEMENTS, t.blockedElements));
      },
      updateRemoteSettingsData = async () => {
        chrome.storage.local.get([n.h.BLOCKED_ELEMENTS, n.h.SETTINGS, n.h.WHITELIST, n.h.USER], async (t) => {
          const e = t[n.h.WHITELIST],
            r = t[n.h.SOCIAL_CONTENT_KEYWORDS],
            s = t[n.h.BLOCKED_ELEMENTS],
            c = t[n.h.USER],
            E = t[n.h.SETTINGS],
            u = null == c ? void 0 : c.isPremium,
            { version: _ } = getManifest(),
            O = {
              extensionVersion: _,
              features: {
                popups: void 0 === E.popups || E.popups,
                overlays: E.detectOverlays,
                hideElements: void 0 === E.hideElements || E.hideElements,
                pushNotification: !!E.pushNotification && E.pushNotification,
                socialContentBlocker: E.socialContentBlocker
              },
              whitelist: e || [],
              socialContentKeyWords: r || [],
              blockedElements: s || {}
            };
          Object(a.c)().forEach(async (t) => {
            const e = t.SettingsKey,
              r = await o.a.getDefault(l.a.onTrialEnded).loadAndUpdate();
            O.features[t.SettingsKey] = E[e] && (u || r.isTrialActive());
          });
          const T = await Object(i.b)();
          await fetch(n.e.SETTINGS, {
            method: "POST",
            headers: { "Content-Type": "application/json", id: T.uuid },
            body: JSON.stringify(O)
          });
        });
      },
      fetchRemoteSettingsData = async () => {
        chrome.storage.local.get([n.h.BLOCKED_ELEMENTS, n.h.SETTINGS, n.h.WHITELIST], async (t) => {
          try {
            let e = t[n.h.WHITELIST],
              r = t[n.h.SOCIAL_CONTENT_KEYWORDS],
              s = t[n.h.BLOCKED_ELEMENTS];
            const o = t[n.h.SETTINGS],
              E = await Object(i.b)(),
              u = await Object(c.a)(n.e.SETTINGS, { headers: { id: E.uuid } }, 200);
            if (u.ok) {
              const t = await u.json();
              Object(a.c)().forEach((e) => {
                const r = e.SettingsKey;
                o[r] = t.features[e.SettingsKey] || !1;
              }),
                (o.popups = t.features.popups),
                (o.detectOverlays = t.features.overlays),
                (o.hideElements = t.features.hideElements),
                (o.pushNotification = t.features.pushNotification),
                (o.socialContentBlocker = t.features.socialContentBlocker),
                (e = t.whitelist || []),
                (r = t.socialContentKeyWords || []),
                (s = t.blockedElements || {}),
                t.features.overlays && (o.detectOverlays = !0),
                chrome.storage.local.set({
                  [n.h.SETTINGS]: o,
                  [n.h.WHITELIST]: e,
                  [n.h.SOCIAL_CONTENT_KEYWORDS]: r,
                  [n.h.BLOCKED_ELEMENTS]: s
                });
            }
          } catch (t) {}
        });
      },
      readLocalSettingsData = async () => {
        const t = await o.a.getDefault(l.a.onTrialEnded).loadAndUpdate(),
          e = await o.a.getDefault(l.a.onTrialEnded).loadAndUpdate(),
          r = await o.a.getDefault(l.a.onTrialEnded).loadAndUpdate(),
          i = await o.a.getDefault(l.a.onTrialEnded).loadAndUpdate(),
          s = await o.a.getDefault(l.a.onTrialEnded).loadAndUpdate(),
          E = await Object(c.c)();
        return new Promise((o) => {
          chrome.storage.local.get([n.h.SETTINGS], (c) => {
            const u = c[n.h.SETTINGS],
              _ = !!E && E.isPremium,
              l = {
                popups: { isSelected: u.popups },
                overlays: { isSelected: u.detectOverlays },
                hideElements: { isSelected: u.hideElements },
                pushNotification: { isSelected: u.pushNotification },
                cookieCrumbler: {
                  isPremium: _,
                  isSelected: (u.cookieCrumbler && _) || (u.cookieCrumbler && t.isTrialActive()),
                  inTrialMode: !_ && t.isTrialActive(),
                  trialLeftDays: (t && t.daysLeft) || -1,
                  trialEndMode: t && 0 === t.daysLeft,
                  feature: a.a.CookieCrumbler
                },
                facebookAdds: {
                  isPremium: _,
                  isSelected: (u.facebookAdds && _) || (u.facebookAdds && e.isTrialActive()),
                  inTrialMode: !_ && e.isTrialActive(),
                  trialLeftDays: (e && e.daysLeft) || -1,
                  trialEndMode: e && 0 === e.daysLeft,
                  feature: a.a.SocialBlocker
                },
                adsBlocker: {
                  isPremium: _,
                  isSelected: u.adsBlocker && (_ || r.isTrialActive()),
                  inTrialMode: !_ && r.isTrialActive(),
                  trialLeftDays: (r && r.daysLeft) || -1,
                  trialEndMode: r && 0 === r.daysLeft,
                  feature: a.a.AdsBlocker
                },
                youtubeBlocker: {
                  isPremium: _,
                  isSelected: u.youtubeBlocker && (_ || s.isTrialActive()),
                  inTrialMode: !_ && s.isTrialActive(),
                  trialLeftDays: (s && s.daysLeft) || -1,
                  trialEndMode: s && 0 === s.daysLeft,
                  feature: a.a.YoutubeBlocker
                },
                trackersBlocker: {
                  isPremium: _,
                  isSelected: u.trackersBlocker && (_ || i.isTrialActive()),
                  inTrialMode: !_ && i.isTrialActive(),
                  trialLeftDays: (i && i.daysLeft) || -1,
                  trialEndMode: i && 0 === i.daysLeft,
                  feature: a.a.TrackersBlocker
                },
                socialContentBlocker: { isSelected: u.socialContentBlocker }
              };
            o(l);
          });
        });
      },
      updateLocalAndRemoteFeatureSettings = async (t) => {
        const e = await u.a.getSettings();
        Object(a.c)().forEach((r) => {
          const n = r.SettingsKey;
          e[n] = t[r.SettingsKey] || !1;
        }),
          (e.popups = t.popups || !1),
          (e.detectOverlays = t.overlays || !1),
          (e.pushNotification = t.pushNotification || !1),
          (e.socialContentBlocker = t.socialContentBlocker || !1);
        const r = await Object(i.b)(),
          s = {
            features: {
              popups: e.popups,
              overlays: e.detectOverlays,
              hideElements: e.hideElements,
              pushNotification: e.pushNotification,
              socialContentBlocker: e.socialContentBlocker
            }
          };
        Object(a.c)().forEach(async (t) => {
          const r = t.SettingsKey;
          s.features[t.SettingsKey] = e[r];
        }),
          await fetch(n.e.SETTINGS, {
            method: "POST",
            headers: { "Content-Type": "application/json", id: r.uuid },
            body: JSON.stringify(s)
          }),
          u.a.updateSettings(e);
      },
      onStartCookieTrial = () => {
        sendMessageToWorker({ name: n.t.INSERT_COOKIE_FILTERS }), sendToActiveTab(n.t.HIDE_COOKIE_CRUMBLER_PROMO);
      },
      roundTime2Digit = (t) => t.toString().padStart(2, "0"),
      timeToString = (t) => `${roundTime2Digit(t.hours)}h:${roundTime2Digit(t.minutes)}m:${roundTime2Digit(t.seconds)}s`,
      parseTime = (t) => ({
        days: Math.floor(t / 864e5),
        hours: Math.floor((t % 864e5) / 36e5),
        minutes: Math.floor((t % 36e5) / 6e4),
        seconds: Math.floor((t % 6e4) / 1e3)
      }),
      isPremium = async () => {
        const t = await s.c.get(n.h.USER);
        return !!(null == t ? void 0 : t.isPremium);
      },
      msToDays = (t) => t / n.x,
      isKeysExists = (t, e) => t.every((t) => t in e),
      getDaysPassed = (t) => {
        const e = t,
          r = Date.now() - e;
        return Math.floor(msToDays(r));
      },
      backgroundSafeExec = (t, e) => {
        void 0 !== E.BrowserAPI.tabs ? t() : e();
      },
      isPermissionGranted = (t) => new Promise((e) => E.BrowserAPI.permissions.contains(t, e)),
      getAllPermissionGranted = () => new Promise((t) => E.BrowserAPI.permissions.getAll(t)),
      requestPermission = (t) => new Promise((e) => E.BrowserAPI.permissions.request(t, e)),
      checkIsPinned = async () => ({ isPinned: (await E.BrowserAPI.action.getUserSettings()).isOnToolbar }),
      updateBlockedCounter = (t, e = {}) => {
        backgroundSafeExec(
          () => sendToActiveTab(n.t.UPDATE_BLOCK_COUNT, { type: t }),
          () => sendMessageToWorker({ name: n.t.UPDATE_BLOCK_COUNT, type: t })
        );
      },
      updateUnBlockedCounter = (t) => {
        backgroundSafeExec(
          () => sendToActiveTab(n.t.UPDATE_UNBLOCK_COUNT, { type: t }),
          () => sendMessageToWorker({ name: n.t.UPDATE_UNBLOCK_COUNT, type: t })
        );
      };
    function cleanDomain(t) {
      if (!t) return t;
      let e = t.trim();
      if (/^chrome-extension?:\/\//.test(e)) return e;
      /^https?:\/\//.test(e) || (e = "http://" + e);
      try {
        return new URL(e).hostname.replace(/^www\d*\./, "");
      } catch (t) {
        return e;
      }
    }
    const openPlansPage = (t = "") => {
        const e = `${n.r.WEB_APP}/settings?checkout=1&source=${t}`;
        backgroundSafeExec(
          () => chrome.tabs.create({ url: e }),
          () => window.postMessage({ type: n.t.OPEN_EXTENSION_CHECKOUT_MODAL, source: t }, "*")
        );
      },
      isAllowedIncognitoAccess = async () => await E.BrowserAPI.extension.isAllowedIncognitoAccess(),
      getSocialContentKeywords = async () => await s.c.get(n.h.SOCIAL_CONTENT_KEYWORDS),
      getUserStatus = (t) => {
        let e = _.a.Anonymous;
        return (null == t ? void 0 : t.id) && ((e = _.a.Free), (null == t ? void 0 : t.isPremium) && (e = _.a.Premium)), e;
      },
      isPremiumUser = (t) => !!(null == t ? void 0 : t.isPremium),
      generateAnalyticsEventName = (t, e, r) => `${n.c.PAGE[t]}_${n.c.FEATURE[e]}_${n.c.EVENT_TYPE[r]}`,
      generateAnalyticsEventAndSendToWorker = (t, e, r, i) => {
        let s = void 0;
        i && (s = { payload: JSON.stringify(i) }),
          sendMessageToWorker({ name: n.t.SEND_ANALYTICS_EVENT, eventType: generateAnalyticsEventName(t, e, r), eventPayload: s });
      },
      isExtensionEnabled = async () => !!!(await s.c.get(n.h.PAUSED)),
      onPostLogout = async (t) => {
        t && (await l.a.clearTrials()),
          await (async () => {
            for (const t of Object(a.c)()) await u.a.setFeatureEnabled(t, !1);
          })(),
          await updateRemoteSettingsData();
      },
      sendMessageToWorkerAndActiveTab = (t, e) => {
        sendToWorker({ name: t, data: e }), sendToActiveTab(t, e);
      },
      isElementInViewport = (t) => {
        const e = t.getBoundingClientRect();
        if (e.width <= 0 && e.height <= 0) return !1;
        const r = window.innerWidth || document.documentElement.clientWidth,
          n = window.innerHeight || document.documentElement.clientHeight;
        return e.top >= 0 && e.left >= 0 && e.bottom <= n && e.right <= r;
      },
      isProductionEnv = () => !0,
      getInstallSource = async () => await s.c.get(n.h.INSTALL_SOURCE),
      sendGoogleForm = async (t, e, r, i, s, a, o) => {
        try {
          await fetch(
            `${n.r.RATE_US_FORM}?entry.492049526=${o}&entry.1525226020=${t}&entry.375126611=${e}&entry.1913270847=${r}&entry.911859707=${i}&entry.1339946149=${s}&entry.1635427313=${a}`,
            { method: "POST", cache: "no-cache", headers: { "Content-Type": "application/json" } }
          );
        } catch (t) {}
      },
      openSettingPage = async () => {
        await sendMessageToWorker({ name: n.t.OPEN_URL, url: n.r.WEB_APP + "/settings" });
      },
      replaceAll = (t, e, r) => {
        const n = new RegExp(`\\b${e}\\b`, "gi");
        return t.replace(n, r);
      },
      openReviewPage = () => {
        let t = "";
        switch (Object(O.b)()) {
          case O.a.CHROME:
            t = n.r.REVIEW_CH;
            break;
          case O.a.EDGE:
            t = n.r.REVIEW_EDGE;
            break;
          case O.a.FIREFOX:
            t = n.r.REVIEW_FF;
        }
        t && sendMessageToWorker({ name: n.t.OPEN_URL, url: t });
      },
      openSettingsFromPanel = async (t) => {
        const e = `${n.r.WEB_APP}/settings${t ? "" + t : ""}`;
        await sendMessageToWorker({ name: n.t.OPEN_URL, url: e }), window.close();
      },
      throttle = (t, e) => {
        let r;
        return (...n) => {
          r ||
            (r = setTimeout(() => {
              t(...n), (r = null);
            }, e));
        };
      },
      debounce = (t, e) => {
        let r;
        return (...n) => {
          clearTimeout(r),
            (r = setTimeout(() => {
              clearTimeout(r), t(...n);
            }, e));
        };
      },
      notifyWebapp = async (t, e = {}) => {
        const r = { name: t, data: e };
        ((t, e) => {
          E.BrowserAPI.tabs &&
            E.BrowserAPI.tabs.query({}, (r) => {
              r.forEach((r) => {
                try {
                  r.id && E.BrowserAPI.tabs.sendMessage(r.id, { name: t, data: e || "" });
                } catch (t) {}
              });
            });
        })(n.t.POST_MESSAGE, r);
      };
  },
  31: function (t, e, r) {
    "use strict";
    var n = r(2),
      i = r(37),
      s = r(5),
      a = ((t) => ((t[(t.UNKNOWN = -1)] = "UNKNOWN"), (t[(t.OUT = 0)] = "OUT"), (t[(t.IN = 1)] = "IN"), t))(a || {});
    class opt_entity_OptEntity extends i.a {
      constructor() {
        super(...arguments), (this.state = -1);
      }
      getKey() {
        return "opt";
      }
      getLegacyKeys() {
        return [];
      }
      toDTO() {
        return { state: this.state };
      }
      getVersion() {
        return 1;
      }
      migrate(t) {
        if (!(t > 0))
          return new Promise((t) => {
            s.a.get(n.f.SETTINGS).then((e) => {
              e && void 0 !== e.isOptIn ? (this.state = e.isOptIn ? 1 : 0) : (this.state = -1), t();
            });
          });
      }
      static async getOrCreate() {
        return await new opt_entity_OptEntity().load();
      }
    }
    e.a = new (class opt_manager_OptManager {
      async optIn() {
        const t = await opt_entity_OptEntity.getOrCreate();
        return (t.state = a.IN), t.save().then(() => this.onOptStateChanged(t.state));
      }
      async optOut() {
        const t = await opt_entity_OptEntity.getOrCreate();
        return (t.state = a.OUT), t.save().then(() => this.onOptStateChanged(t.state));
      }
      async isOptIn() {
        return (await opt_entity_OptEntity.getOrCreate()).state == a.IN;
      }
      async getOptInCurrentState() {
        return (await opt_entity_OptEntity.getOrCreate()).state;
      }
      async isOptInStatusUnknown() {
        return (await opt_entity_OptEntity.getOrCreate()).state == a.UNKNOWN;
      }
      setOptStateChangedListener(t) {
        this.onOptStateChangedListener = t;
      }
      onOptStateChanged(t) {
        this.onOptStateChangedListener && this.onOptStateChangedListener(t);
      }
    })();
  },
  34: function (t, e, r) {
    "use strict";
    (function (t) {
      var n = r(59),
        i = r(60),
        s = r(61);
      function kMaxLength() {
        return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function createBuffer(t, e) {
        if (kMaxLength() < e) throw new RangeError("Invalid typed array length");
        return (
          Buffer.TYPED_ARRAY_SUPPORT
            ? ((t = new Uint8Array(e)).__proto__ = Buffer.prototype)
            : (null === t && (t = new Buffer(e)), (t.length = e)),
          t
        );
      }
      function Buffer(t, e, r) {
        if (!(Buffer.TYPED_ARRAY_SUPPORT || this instanceof Buffer)) return new Buffer(t, e, r);
        if ("number" == typeof t) {
          if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
          return allocUnsafe(this, t);
        }
        return from(this, t, e, r);
      }
      function from(t, e, r, n) {
        if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
          ? (function fromArrayBuffer(t, e, r, n) {
              if ((e.byteLength, r < 0 || e.byteLength < r)) throw new RangeError("'offset' is out of bounds");
              if (e.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
              e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n);
              Buffer.TYPED_ARRAY_SUPPORT ? ((t = e).__proto__ = Buffer.prototype) : (t = fromArrayLike(t, e));
              return t;
            })(t, e, r, n)
          : "string" == typeof e
          ? (function fromString(t, e, r) {
              ("string" == typeof r && "" !== r) || (r = "utf8");
              if (!Buffer.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
              var n = 0 | byteLength(e, r),
                i = (t = createBuffer(t, n)).write(e, r);
              i !== n && (t = t.slice(0, i));
              return t;
            })(t, e, r)
          : (function fromObject(t, e) {
              if (Buffer.isBuffer(e)) {
                var r = 0 | checked(e.length);
                return 0 === (t = createBuffer(t, r)).length || e.copy(t, 0, 0, r), t;
              }
              if (e) {
                if (("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer) || "length" in e)
                  return "number" != typeof e.length ||
                    (function isnan(t) {
                      return t != t;
                    })(e.length)
                    ? createBuffer(t, 0)
                    : fromArrayLike(t, e);
                if ("Buffer" === e.type && s(e.data)) return fromArrayLike(t, e.data);
              }
              throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
            })(t, e);
      }
      function assertSize(t) {
        if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
        if (t < 0) throw new RangeError('"size" argument must not be negative');
      }
      function allocUnsafe(t, e) {
        if ((assertSize(e), (t = createBuffer(t, e < 0 ? 0 : 0 | checked(e))), !Buffer.TYPED_ARRAY_SUPPORT))
          for (var r = 0; r < e; ++r) t[r] = 0;
        return t;
      }
      function fromArrayLike(t, e) {
        var r = e.length < 0 ? 0 : 0 | checked(e.length);
        t = createBuffer(t, r);
        for (var n = 0; n < r; n += 1) t[n] = 255 & e[n];
        return t;
      }
      function checked(t) {
        if (t >= kMaxLength())
          throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
        return 0 | t;
      }
      function byteLength(t, e) {
        if (Buffer.isBuffer(t)) return t.length;
        if (
          "undefined" != typeof ArrayBuffer &&
          "function" == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
        )
          return t.byteLength;
        "string" != typeof t && (t = "" + t);
        var r = t.length;
        if (0 === r) return 0;
        for (var n = !1; ; )
          switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
            case void 0:
              return utf8ToBytes(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return base64ToBytes(t).length;
            default:
              if (n) return utf8ToBytes(t).length;
              (e = ("" + e).toLowerCase()), (n = !0);
          }
      }
      function slowToString(t, e, r) {
        var n = !1;
        if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
        if (((void 0 === r || r > this.length) && (r = this.length), r <= 0)) return "";
        if ((r >>>= 0) <= (e >>>= 0)) return "";
        for (t || (t = "utf8"); ; )
          switch (t) {
            case "hex":
              return hexSlice(this, e, r);
            case "utf8":
            case "utf-8":
              return utf8Slice(this, e, r);
            case "ascii":
              return asciiSlice(this, e, r);
            case "latin1":
            case "binary":
              return latin1Slice(this, e, r);
            case "base64":
              return base64Slice(this, e, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return utf16leSlice(this, e, r);
            default:
              if (n) throw new TypeError("Unknown encoding: " + t);
              (t = (t + "").toLowerCase()), (n = !0);
          }
      }
      function swap(t, e, r) {
        var n = t[e];
        (t[e] = t[r]), (t[r] = n);
      }
      function bidirectionalIndexOf(t, e, r, n, i) {
        if (0 === t.length) return -1;
        if (
          ("string" == typeof r ? ((n = r), (r = 0)) : r > 2147483647 ? (r = 2147483647) : r < -2147483648 && (r = -2147483648),
          (r = +r),
          isNaN(r) && (r = i ? 0 : t.length - 1),
          r < 0 && (r = t.length + r),
          r >= t.length)
        ) {
          if (i) return -1;
          r = t.length - 1;
        } else if (r < 0) {
          if (!i) return -1;
          r = 0;
        }
        if (("string" == typeof e && (e = Buffer.from(e, n)), Buffer.isBuffer(e))) return 0 === e.length ? -1 : arrayIndexOf(t, e, r, n, i);
        if ("number" == typeof e)
          return (
            (e &= 255),
            Buffer.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf
              ? i
                ? Uint8Array.prototype.indexOf.call(t, e, r)
                : Uint8Array.prototype.lastIndexOf.call(t, e, r)
              : arrayIndexOf(t, [e], r, n, i)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function arrayIndexOf(t, e, r, n, i) {
        var s,
          a = 1,
          o = t.length,
          c = e.length;
        if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
          if (t.length < 2 || e.length < 2) return -1;
          (a = 2), (o /= 2), (c /= 2), (r /= 2);
        }
        function read(t, e) {
          return 1 === a ? t[e] : t.readUInt16BE(e * a);
        }
        if (i) {
          var E = -1;
          for (s = r; s < o; s++)
            if (read(t, s) === read(e, -1 === E ? 0 : s - E)) {
              if ((-1 === E && (E = s), s - E + 1 === c)) return E * a;
            } else -1 !== E && (s -= s - E), (E = -1);
        } else
          for (r + c > o && (r = o - c), s = r; s >= 0; s--) {
            for (var u = !0, _ = 0; _ < c; _++)
              if (read(t, s + _) !== read(e, _)) {
                u = !1;
                break;
              }
            if (u) return s;
          }
        return -1;
      }
      function hexWrite(t, e, r, n) {
        r = Number(r) || 0;
        var i = t.length - r;
        n ? (n = Number(n)) > i && (n = i) : (n = i);
        var s = e.length;
        if (s % 2 != 0) throw new TypeError("Invalid hex string");
        n > s / 2 && (n = s / 2);
        for (var a = 0; a < n; ++a) {
          var o = parseInt(e.substr(2 * a, 2), 16);
          if (isNaN(o)) return a;
          t[r + a] = o;
        }
        return a;
      }
      function utf8Write(t, e, r, n) {
        return blitBuffer(utf8ToBytes(e, t.length - r), t, r, n);
      }
      function asciiWrite(t, e, r, n) {
        return blitBuffer(
          (function asciiToBytes(t) {
            for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
            return e;
          })(e),
          t,
          r,
          n
        );
      }
      function latin1Write(t, e, r, n) {
        return asciiWrite(t, e, r, n);
      }
      function base64Write(t, e, r, n) {
        return blitBuffer(base64ToBytes(e), t, r, n);
      }
      function ucs2Write(t, e, r, n) {
        return blitBuffer(
          (function utf16leToBytes(t, e) {
            for (var r, n, i, s = [], a = 0; a < t.length && !((e -= 2) < 0); ++a)
              (r = t.charCodeAt(a)), (n = r >> 8), (i = r % 256), s.push(i), s.push(n);
            return s;
          })(e, t.length - r),
          t,
          r,
          n
        );
      }
      function base64Slice(t, e, r) {
        return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r));
      }
      function utf8Slice(t, e, r) {
        r = Math.min(t.length, r);
        for (var n = [], i = e; i < r; ) {
          var s,
            a,
            o,
            c,
            E = t[i],
            u = null,
            _ = E > 239 ? 4 : E > 223 ? 3 : E > 191 ? 2 : 1;
          if (i + _ <= r)
            switch (_) {
              case 1:
                E < 128 && (u = E);
                break;
              case 2:
                128 == (192 & (s = t[i + 1])) && (c = ((31 & E) << 6) | (63 & s)) > 127 && (u = c);
                break;
              case 3:
                (s = t[i + 1]),
                  (a = t[i + 2]),
                  128 == (192 & s) &&
                    128 == (192 & a) &&
                    (c = ((15 & E) << 12) | ((63 & s) << 6) | (63 & a)) > 2047 &&
                    (c < 55296 || c > 57343) &&
                    (u = c);
                break;
              case 4:
                (s = t[i + 1]),
                  (a = t[i + 2]),
                  (o = t[i + 3]),
                  128 == (192 & s) &&
                    128 == (192 & a) &&
                    128 == (192 & o) &&
                    (c = ((15 & E) << 18) | ((63 & s) << 12) | ((63 & a) << 6) | (63 & o)) > 65535 &&
                    c < 1114112 &&
                    (u = c);
            }
          null === u ? ((u = 65533), (_ = 1)) : u > 65535 && ((u -= 65536), n.push(((u >>> 10) & 1023) | 55296), (u = 56320 | (1023 & u))),
            n.push(u),
            (i += _);
        }
        return (function decodeCodePointsArray(t) {
          var e = t.length;
          if (e <= 4096) return String.fromCharCode.apply(String, t);
          var r = "",
            n = 0;
          for (; n < e; ) r += String.fromCharCode.apply(String, t.slice(n, (n += 4096)));
          return r;
        })(n);
      }
      (e.Buffer = Buffer),
        (e.SlowBuffer = function SlowBuffer(t) {
          +t != t && (t = 0);
          return Buffer.alloc(+t);
        }),
        (e.INSPECT_MAX_BYTES = 50),
        (Buffer.TYPED_ARRAY_SUPPORT =
          void 0 !== t.TYPED_ARRAY_SUPPORT
            ? t.TYPED_ARRAY_SUPPORT
            : (function typedArraySupport() {
                try {
                  var t = new Uint8Array(1);
                  return (
                    (t.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42;
                      }
                    }),
                    42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                  );
                } catch (t) {
                  return !1;
                }
              })()),
        (e.kMaxLength = kMaxLength()),
        (Buffer.poolSize = 8192),
        (Buffer._augment = function (t) {
          return (t.__proto__ = Buffer.prototype), t;
        }),
        (Buffer.from = function (t, e, r) {
          return from(null, t, e, r);
        }),
        Buffer.TYPED_ARRAY_SUPPORT &&
          ((Buffer.prototype.__proto__ = Uint8Array.prototype),
          (Buffer.__proto__ = Uint8Array),
          "undefined" != typeof Symbol &&
            Symbol.species &&
            Buffer[Symbol.species] === Buffer &&
            Object.defineProperty(Buffer, Symbol.species, { value: null, configurable: !0 })),
        (Buffer.alloc = function (t, e, r) {
          return (function alloc(t, e, r, n) {
            return (
              assertSize(e),
              e <= 0
                ? createBuffer(t, e)
                : void 0 !== r
                ? "string" == typeof n
                  ? createBuffer(t, e).fill(r, n)
                  : createBuffer(t, e).fill(r)
                : createBuffer(t, e)
            );
          })(null, t, e, r);
        }),
        (Buffer.allocUnsafe = function (t) {
          return allocUnsafe(null, t);
        }),
        (Buffer.allocUnsafeSlow = function (t) {
          return allocUnsafe(null, t);
        }),
        (Buffer.isBuffer = function isBuffer(t) {
          return !(null == t || !t._isBuffer);
        }),
        (Buffer.compare = function compare(t, e) {
          if (!Buffer.isBuffer(t) || !Buffer.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
          if (t === e) return 0;
          for (var r = t.length, n = e.length, i = 0, s = Math.min(r, n); i < s; ++i)
            if (t[i] !== e[i]) {
              (r = t[i]), (n = e[i]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (Buffer.isEncoding = function isEncoding(t) {
          switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (Buffer.concat = function concat(t, e) {
          if (!s(t)) throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return Buffer.alloc(0);
          var r;
          if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
          var n = Buffer.allocUnsafe(e),
            i = 0;
          for (r = 0; r < t.length; ++r) {
            var a = t[r];
            if (!Buffer.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
            a.copy(n, i), (i += a.length);
          }
          return n;
        }),
        (Buffer.byteLength = byteLength),
        (Buffer.prototype._isBuffer = !0),
        (Buffer.prototype.swap16 = function swap16() {
          var t = this.length;
          if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var e = 0; e < t; e += 2) swap(this, e, e + 1);
          return this;
        }),
        (Buffer.prototype.swap32 = function swap32() {
          var t = this.length;
          if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var e = 0; e < t; e += 4) swap(this, e, e + 3), swap(this, e + 1, e + 2);
          return this;
        }),
        (Buffer.prototype.swap64 = function swap64() {
          var t = this.length;
          if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var e = 0; e < t; e += 8) swap(this, e, e + 7), swap(this, e + 1, e + 6), swap(this, e + 2, e + 5), swap(this, e + 3, e + 4);
          return this;
        }),
        (Buffer.prototype.toString = function toString() {
          var t = 0 | this.length;
          return 0 === t ? "" : 0 === arguments.length ? utf8Slice(this, 0, t) : slowToString.apply(this, arguments);
        }),
        (Buffer.prototype.equals = function equals(t) {
          if (!Buffer.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          return this === t || 0 === Buffer.compare(this, t);
        }),
        (Buffer.prototype.inspect = function inspect() {
          var t = "",
            r = e.INSPECT_MAX_BYTES;
          return (
            this.length > 0 && ((t = this.toString("hex", 0, r).match(/.{2}/g).join(" ")), this.length > r && (t += " ... ")),
            "<Buffer " + t + ">"
          );
        }),
        (Buffer.prototype.compare = function compare2(t, e, r, n, i) {
          if (!Buffer.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            e < 0 || r > t.length || n < 0 || i > this.length)
          )
            throw new RangeError("out of range index");
          if (n >= i && e >= r) return 0;
          if (n >= i) return -1;
          if (e >= r) return 1;
          if (this === t) return 0;
          for (
            var s = (i >>>= 0) - (n >>>= 0),
              a = (r >>>= 0) - (e >>>= 0),
              o = Math.min(s, a),
              c = this.slice(n, i),
              E = t.slice(e, r),
              u = 0;
            u < o;
            ++u
          )
            if (c[u] !== E[u]) {
              (s = c[u]), (a = E[u]);
              break;
            }
          return s < a ? -1 : a < s ? 1 : 0;
        }),
        (Buffer.prototype.includes = function includes(t, e, r) {
          return -1 !== this.indexOf(t, e, r);
        }),
        (Buffer.prototype.indexOf = function indexOf(t, e, r) {
          return bidirectionalIndexOf(this, t, e, r, !0);
        }),
        (Buffer.prototype.lastIndexOf = function lastIndexOf(t, e, r) {
          return bidirectionalIndexOf(this, t, e, r, !1);
        }),
        (Buffer.prototype.write = function write(t, e, r, n) {
          if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
          else if (void 0 === r && "string" == typeof e) (n = e), (r = this.length), (e = 0);
          else {
            if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            (e |= 0), isFinite(r) ? ((r |= 0), void 0 === n && (n = "utf8")) : ((n = r), (r = void 0));
          }
          var i = this.length - e;
          if (((void 0 === r || r > i) && (r = i), (t.length > 0 && (r < 0 || e < 0)) || e > this.length))
            throw new RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");
          for (var s = !1; ; )
            switch (n) {
              case "hex":
                return hexWrite(this, t, e, r);
              case "utf8":
              case "utf-8":
                return utf8Write(this, t, e, r);
              case "ascii":
                return asciiWrite(this, t, e, r);
              case "latin1":
              case "binary":
                return latin1Write(this, t, e, r);
              case "base64":
                return base64Write(this, t, e, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return ucs2Write(this, t, e, r);
              default:
                if (s) throw new TypeError("Unknown encoding: " + n);
                (n = ("" + n).toLowerCase()), (s = !0);
            }
        }),
        (Buffer.prototype.toJSON = function toJSON() {
          return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
        });
      function asciiSlice(t, e, r) {
        var n = "";
        r = Math.min(t.length, r);
        for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
        return n;
      }
      function latin1Slice(t, e, r) {
        var n = "";
        r = Math.min(t.length, r);
        for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
        return n;
      }
      function hexSlice(t, e, r) {
        var n = t.length;
        (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
        for (var i = "", s = e; s < r; ++s) i += toHex(t[s]);
        return i;
      }
      function utf16leSlice(t, e, r) {
        for (var n = t.slice(e, r), i = "", s = 0; s < n.length; s += 2) i += String.fromCharCode(n[s] + 256 * n[s + 1]);
        return i;
      }
      function checkOffset(t, e, r) {
        if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
        if (t + e > r) throw new RangeError("Trying to access beyond buffer length");
      }
      function checkInt(t, e, r, n, i, s) {
        if (!Buffer.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > i || e < s) throw new RangeError('"value" argument is out of bounds');
        if (r + n > t.length) throw new RangeError("Index out of range");
      }
      function objectWriteUInt16(t, e, r, n) {
        e < 0 && (e = 65535 + e + 1);
        for (var i = 0, s = Math.min(t.length - r, 2); i < s; ++i)
          t[r + i] = (e & (255 << (8 * (n ? i : 1 - i)))) >>> (8 * (n ? i : 1 - i));
      }
      function objectWriteUInt32(t, e, r, n) {
        e < 0 && (e = 4294967295 + e + 1);
        for (var i = 0, s = Math.min(t.length - r, 4); i < s; ++i) t[r + i] = (e >>> (8 * (n ? i : 3 - i))) & 255;
      }
      function checkIEEE754(t, e, r, n, i, s) {
        if (r + n > t.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("Index out of range");
      }
      function writeFloat(t, e, r, n, s) {
        return s || checkIEEE754(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4;
      }
      function writeDouble(t, e, r, n, s) {
        return s || checkIEEE754(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8;
      }
      (Buffer.prototype.slice = function slice(t, e) {
        var r,
          n = this.length;
        if (
          ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
          (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
          e < t && (e = t),
          Buffer.TYPED_ARRAY_SUPPORT)
        )
          (r = this.subarray(t, e)).__proto__ = Buffer.prototype;
        else {
          var i = e - t;
          r = new Buffer(i, void 0);
          for (var s = 0; s < i; ++s) r[s] = this[s + t];
        }
        return r;
      }),
        (Buffer.prototype.readUIntLE = function readUIntLE(t, e, r) {
          (t |= 0), (e |= 0), r || checkOffset(t, e, this.length);
          for (var n = this[t], i = 1, s = 0; ++s < e && (i *= 256); ) n += this[t + s] * i;
          return n;
        }),
        (Buffer.prototype.readUIntBE = function readUIntBE(t, e, r) {
          (t |= 0), (e |= 0), r || checkOffset(t, e, this.length);
          for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); ) n += this[t + --e] * i;
          return n;
        }),
        (Buffer.prototype.readUInt8 = function readUInt8(t, e) {
          return e || checkOffset(t, 1, this.length), this[t];
        }),
        (Buffer.prototype.readUInt16LE = function readUInt16LE(t, e) {
          return e || checkOffset(t, 2, this.length), this[t] | (this[t + 1] << 8);
        }),
        (Buffer.prototype.readUInt16BE = function readUInt16BE(t, e) {
          return e || checkOffset(t, 2, this.length), (this[t] << 8) | this[t + 1];
        }),
        (Buffer.prototype.readUInt32LE = function readUInt32LE(t, e) {
          return e || checkOffset(t, 4, this.length), (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + 16777216 * this[t + 3];
        }),
        (Buffer.prototype.readUInt32BE = function readUInt32BE(t, e) {
          return e || checkOffset(t, 4, this.length), 16777216 * this[t] + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]);
        }),
        (Buffer.prototype.readIntLE = function readIntLE(t, e, r) {
          (t |= 0), (e |= 0), r || checkOffset(t, e, this.length);
          for (var n = this[t], i = 1, s = 0; ++s < e && (i *= 256); ) n += this[t + s] * i;
          return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n;
        }),
        (Buffer.prototype.readIntBE = function readIntBE(t, e, r) {
          (t |= 0), (e |= 0), r || checkOffset(t, e, this.length);
          for (var n = e, i = 1, s = this[t + --n]; n > 0 && (i *= 256); ) s += this[t + --n] * i;
          return s >= (i *= 128) && (s -= Math.pow(2, 8 * e)), s;
        }),
        (Buffer.prototype.readInt8 = function readInt8(t, e) {
          return e || checkOffset(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
        }),
        (Buffer.prototype.readInt16LE = function readInt16LE(t, e) {
          e || checkOffset(t, 2, this.length);
          var r = this[t] | (this[t + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (Buffer.prototype.readInt16BE = function readInt16BE(t, e) {
          e || checkOffset(t, 2, this.length);
          var r = this[t + 1] | (this[t] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (Buffer.prototype.readInt32LE = function readInt32LE(t, e) {
          return e || checkOffset(t, 4, this.length), this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24);
        }),
        (Buffer.prototype.readInt32BE = function readInt32BE(t, e) {
          return e || checkOffset(t, 4, this.length), (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3];
        }),
        (Buffer.prototype.readFloatLE = function readFloatLE(t, e) {
          return e || checkOffset(t, 4, this.length), i.read(this, t, !0, 23, 4);
        }),
        (Buffer.prototype.readFloatBE = function readFloatBE(t, e) {
          return e || checkOffset(t, 4, this.length), i.read(this, t, !1, 23, 4);
        }),
        (Buffer.prototype.readDoubleLE = function readDoubleLE(t, e) {
          return e || checkOffset(t, 8, this.length), i.read(this, t, !0, 52, 8);
        }),
        (Buffer.prototype.readDoubleBE = function readDoubleBE(t, e) {
          return e || checkOffset(t, 8, this.length), i.read(this, t, !1, 52, 8);
        }),
        (Buffer.prototype.writeUIntLE = function writeUIntLE(t, e, r, n) {
          ((t = +t), (e |= 0), (r |= 0), n) || checkInt(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
          var i = 1,
            s = 0;
          for (this[e] = 255 & t; ++s < r && (i *= 256); ) this[e + s] = (t / i) & 255;
          return e + r;
        }),
        (Buffer.prototype.writeUIntBE = function writeUIntBE(t, e, r, n) {
          ((t = +t), (e |= 0), (r |= 0), n) || checkInt(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
          var i = r - 1,
            s = 1;
          for (this[e + i] = 255 & t; --i >= 0 && (s *= 256); ) this[e + i] = (t / s) & 255;
          return e + r;
        }),
        (Buffer.prototype.writeUInt8 = function writeUInt8(t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || checkInt(this, t, e, 1, 255, 0),
            Buffer.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (Buffer.prototype.writeUInt16LE = function writeUInt16LE(t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || checkInt(this, t, e, 2, 65535, 0),
            Buffer.TYPED_ARRAY_SUPPORT ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8)) : objectWriteUInt16(this, t, e, !0),
            e + 2
          );
        }),
        (Buffer.prototype.writeUInt16BE = function writeUInt16BE(t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || checkInt(this, t, e, 2, 65535, 0),
            Buffer.TYPED_ARRAY_SUPPORT ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t)) : objectWriteUInt16(this, t, e, !1),
            e + 2
          );
        }),
        (Buffer.prototype.writeUInt32LE = function writeUInt32LE(t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || checkInt(this, t, e, 4, 4294967295, 0),
            Buffer.TYPED_ARRAY_SUPPORT
              ? ((this[e + 3] = t >>> 24), (this[e + 2] = t >>> 16), (this[e + 1] = t >>> 8), (this[e] = 255 & t))
              : objectWriteUInt32(this, t, e, !0),
            e + 4
          );
        }),
        (Buffer.prototype.writeUInt32BE = function writeUInt32BE(t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || checkInt(this, t, e, 4, 4294967295, 0),
            Buffer.TYPED_ARRAY_SUPPORT
              ? ((this[e] = t >>> 24), (this[e + 1] = t >>> 16), (this[e + 2] = t >>> 8), (this[e + 3] = 255 & t))
              : objectWriteUInt32(this, t, e, !1),
            e + 4
          );
        }),
        (Buffer.prototype.writeIntLE = function writeIntLE(t, e, r, n) {
          if (((t = +t), (e |= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1);
            checkInt(this, t, e, r, i - 1, -i);
          }
          var s = 0,
            a = 1,
            o = 0;
          for (this[e] = 255 & t; ++s < r && (a *= 256); )
            t < 0 && 0 === o && 0 !== this[e + s - 1] && (o = 1), (this[e + s] = (((t / a) >> 0) - o) & 255);
          return e + r;
        }),
        (Buffer.prototype.writeIntBE = function writeIntBE(t, e, r, n) {
          if (((t = +t), (e |= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1);
            checkInt(this, t, e, r, i - 1, -i);
          }
          var s = r - 1,
            a = 1,
            o = 0;
          for (this[e + s] = 255 & t; --s >= 0 && (a *= 256); )
            t < 0 && 0 === o && 0 !== this[e + s + 1] && (o = 1), (this[e + s] = (((t / a) >> 0) - o) & 255);
          return e + r;
        }),
        (Buffer.prototype.writeInt8 = function writeInt8(t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || checkInt(this, t, e, 1, 127, -128),
            Buffer.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (Buffer.prototype.writeInt16LE = function writeInt16LE(t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || checkInt(this, t, e, 2, 32767, -32768),
            Buffer.TYPED_ARRAY_SUPPORT ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8)) : objectWriteUInt16(this, t, e, !0),
            e + 2
          );
        }),
        (Buffer.prototype.writeInt16BE = function writeInt16BE(t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || checkInt(this, t, e, 2, 32767, -32768),
            Buffer.TYPED_ARRAY_SUPPORT ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t)) : objectWriteUInt16(this, t, e, !1),
            e + 2
          );
        }),
        (Buffer.prototype.writeInt32LE = function writeInt32LE(t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || checkInt(this, t, e, 4, 2147483647, -2147483648),
            Buffer.TYPED_ARRAY_SUPPORT
              ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8), (this[e + 2] = t >>> 16), (this[e + 3] = t >>> 24))
              : objectWriteUInt32(this, t, e, !0),
            e + 4
          );
        }),
        (Buffer.prototype.writeInt32BE = function writeInt32BE(t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || checkInt(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            Buffer.TYPED_ARRAY_SUPPORT
              ? ((this[e] = t >>> 24), (this[e + 1] = t >>> 16), (this[e + 2] = t >>> 8), (this[e + 3] = 255 & t))
              : objectWriteUInt32(this, t, e, !1),
            e + 4
          );
        }),
        (Buffer.prototype.writeFloatLE = function writeFloatLE(t, e, r) {
          return writeFloat(this, t, e, !0, r);
        }),
        (Buffer.prototype.writeFloatBE = function writeFloatBE(t, e, r) {
          return writeFloat(this, t, e, !1, r);
        }),
        (Buffer.prototype.writeDoubleLE = function writeDoubleLE(t, e, r) {
          return writeDouble(this, t, e, !0, r);
        }),
        (Buffer.prototype.writeDoubleBE = function writeDoubleBE(t, e, r) {
          return writeDouble(this, t, e, !1, r);
        }),
        (Buffer.prototype.copy = function copy(t, e, r, n) {
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            n > 0 && n < r && (n = r),
            n === r)
          )
            return 0;
          if (0 === t.length || 0 === this.length) return 0;
          if (e < 0) throw new RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
          if (n < 0) throw new RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
          var i,
            s = n - r;
          if (this === t && r < e && e < n) for (i = s - 1; i >= 0; --i) t[i + e] = this[i + r];
          else if (s < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT) for (i = 0; i < s; ++i) t[i + e] = this[i + r];
          else Uint8Array.prototype.set.call(t, this.subarray(r, r + s), e);
          return s;
        }),
        (Buffer.prototype.fill = function fill(t, e, r, n) {
          if ("string" == typeof t) {
            if (
              ("string" == typeof e ? ((n = e), (e = 0), (r = this.length)) : "string" == typeof r && ((n = r), (r = this.length)),
              1 === t.length)
            ) {
              var i = t.charCodeAt(0);
              i < 256 && (t = i);
            }
            if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
            if ("string" == typeof n && !Buffer.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
          } else "number" == typeof t && (t &= 255);
          if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
          if (r <= e) return this;
          var s;
          if (((e >>>= 0), (r = void 0 === r ? this.length : r >>> 0), t || (t = 0), "number" == typeof t))
            for (s = e; s < r; ++s) this[s] = t;
          else {
            var a = Buffer.isBuffer(t) ? t : utf8ToBytes(new Buffer(t, n).toString()),
              o = a.length;
            for (s = 0; s < r - e; ++s) this[s + e] = a[s % o];
          }
          return this;
        });
      var a = /[^+\/0-9A-Za-z-_]/g;
      function toHex(t) {
        return t < 16 ? "0" + t.toString(16) : t.toString(16);
      }
      function utf8ToBytes(t, e) {
        var r;
        e = e || 1 / 0;
        for (var n = t.length, i = null, s = [], a = 0; a < n; ++a) {
          if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319) {
                (e -= 3) > -1 && s.push(239, 191, 189);
                continue;
              }
              if (a + 1 === n) {
                (e -= 3) > -1 && s.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (e -= 3) > -1 && s.push(239, 191, 189), (i = r);
              continue;
            }
            r = 65536 + (((i - 55296) << 10) | (r - 56320));
          } else i && (e -= 3) > -1 && s.push(239, 191, 189);
          if (((i = null), r < 128)) {
            if ((e -= 1) < 0) break;
            s.push(r);
          } else if (r < 2048) {
            if ((e -= 2) < 0) break;
            s.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((e -= 3) < 0) break;
            s.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else {
            if (!(r < 1114112)) throw new Error("Invalid code point");
            if ((e -= 4) < 0) break;
            s.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (63 & r) | 128);
          }
        }
        return s;
      }
      function base64ToBytes(t) {
        return n.toByteArray(
          (function base64clean(t) {
            if (
              (t = (function stringtrim(t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
              })(t).replace(a, "")).length < 2
            )
              return "";
            for (; t.length % 4 != 0; ) t += "=";
            return t;
          })(t)
        );
      }
      function blitBuffer(t, e, r, n) {
        for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
        return i;
      }
    }).call(this, r(58));
  },
  35: function (t, e, r) {
    "use strict";
    e.a = {
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
  },
  37: function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return Entity;
    });
    var n = r(5);
    class Entity {
      async load() {
        const t = [...this.getLegacyKeys(), this.getKey()].filter((t) => void 0 !== t);
        if (!t) return this;
        const e = await n.a.getAll(...t);
        return e
          ? (this.getLegacyKeys()
              .filter((t) => t in e)
              .forEach((t) => {
                this.mergeObject(e[t]);
              }),
            this.getKey() in e && this.mergeObject(e[this.getKey()]),
            (!this.v || this.v < this.getVersion()) && (await this.migrate(this.v ? this.v : 0), await this.save()),
            this)
          : this;
      }
      async save() {
        const t = Object.assign({}, this.toDTO(), { v: this.getVersion() });
        return n.a.set(this.getKey(), t);
      }
      mergeObject(t) {
        Object.keys(t).forEach((e) => {
          this[e] = t[e];
        });
      }
    }
  },
  38: function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return ga4Event;
    });
    var n = r(21),
      i = r(3),
      s = Object.defineProperty,
      a = Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      c = Object.prototype.propertyIsEnumerable,
      __defNormalProp = (t, e, r) => (e in t ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r)),
      __spreadValues = (t, e) => {
        for (var r in e || (e = {})) o.call(e, r) && __defNormalProp(t, r, e[r]);
        if (a) for (var r of a(e)) c.call(e, r) && __defNormalProp(t, r, e[r]);
        return t;
      };
    const decode = (t) => atob(atob(atob(t))),
      ga4Event = async (t, e) => {
        const r = decode("VW5rd2QxSnJUbE5PYTFaSVRqQktVUT09"),
          s = decode("Vld4c05tVnRTbE5PVlVaVlUxZHNTMVZXU2tWa01rcHlUbGhLY2xGUlBUMD0="),
          a = await Object(n.b)();
        let o = {};
        e && e.payload && (o = JSON.parse(e.payload)),
          (o = ((t) => {
            const e = t ? Object.keys(t) : [],
              r = {};
            return (
              e.forEach((e) => {
                let n = Object(i.S)(e, "-", "_");
                n.length >= 40 && (n = n.substring(0, 40)), (r[n] = t[e]);
              }),
              r
            );
          })(o));
        try {
          fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${r}&api_secret=${s}`, {
            method: "POST",
            headers: { "Content-type": "application/x-www-form-urlencoded" },
            body: JSON.stringify({ client_id: null == a ? void 0 : a.uuid, events: [{ name: t, params: __spreadValues({}, o) }] })
          });
        } catch (t) {
          console.error(t);
        }
      };
  },
  42: function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(35),
      s = r(19);
    class BlockedItemsCounter extends s.a {
      constructor() {
        super(...arguments),
          (this.pop = 0),
          (this.win = 0),
          (this.tab = 0),
          (this.overlay = 0),
          (this.ad = 0),
          (this.cookie = 0),
          (this.fbAd = 0),
          (this.linkedinAd = 0),
          (this.twitterAd = 0),
          (this.tracker = 0),
          (this.instagramAd = 0),
          (this.socialContent = 0),
          (this.youtubeAd = 0),
          (this.keywords = 0);
      }
      getKey() {
        return n.h.TOTAL_BLOCKS_BY_TYPE;
      }
      getLegacyKeys() {
        return [];
      }
      toDTO() {
        return {
          pop: this.pop,
          win: this.win,
          tab: this.tab,
          overlay: this.overlay,
          ad: this.ad,
          cookie: this.cookie,
          fbAd: this.fbAd,
          linkedinAd: this.linkedinAd,
          twitterAd: this.twitterAd,
          tracker: this.tracker,
          instagramAd: this.instagramAd,
          socialContent: this.socialContent,
          youtubeAd: this.youtubeAd,
          keywords: this.keywords
        };
      }
      getVersion() {
        return 1;
      }
      migrate(t) {}
    }
    class BlockedItemsPerTab extends s.a {
      getKey() {
        return n.h.TOTAL_BLOCKS_BY_TAB_ID;
      }
      getLegacyKeys() {
        return [];
      }
      toDTO() {
        return this;
      }
      getVersion() {
        return 1;
      }
      migrate(t) {}
    }
    e.a = new (class BlockingManager {
      async getTotalBlocksByType() {
        return await new BlockedItemsCounter().load();
      }
      async getTotalBlockForKeys(...t) {
        const e = await this.getTotalBlocksByType();
        let r = 0;
        return (
          t.forEach((t) => {
            r += t in e ? e[t] : 0;
          }),
          r
        );
      }
      async getTotalBlocksPerTab() {
        return await new BlockedItemsPerTab().load();
      }
      async updateTotalBlocksByTabId(t, e, r, n) {
        const i = await this.getTotalBlocksPerTab();
        let s = i[t];
        (s && s.host === e) || (s = { host: e, lastUpdated: Date.now(), totalCount: 0, totalBlocksByType: this.getEmptyBlockList() }),
          (s.totalBlocksByType = this.updateBlockedItemCount(s.totalBlocksByType, r, n)),
          (s.lastUpdated = Date.now()),
          (s.totalCount += n),
          (s.host = e),
          (i[t] = s),
          await i.save();
      }
      async clearTotalBlocksOfTabIdIfNeeded(t, e) {
        if (!t) return;
        const r = await this.getTotalBlocksPerTab();
        r[t] && r[t].host !== e && delete r[t], r.save();
      }
      async clearAllTotalBlocksOfTab() {
        const t = new BlockedItemsPerTab();
        await t.save();
      }
      getEmptyBlockList() {
        return {
          pop: 0,
          win: 0,
          tab: 0,
          overlay: 0,
          ad: 0,
          cookie: 0,
          fbAd: 0,
          linkedinAd: 0,
          twitterAd: 0,
          tracker: 0,
          instagramAd: 0,
          youtubeAd: 0,
          keywords: 0
        };
      }
      updateBlockedItemCount(t, e, r) {
        const n = t;
        return (
          "pop" == e.block
            ? e.args && e.args[2] && /(?:(?:width=)|(?:height=))/.test(e.args[2])
              ? (n.win = (n.win || 0) + 1)
              : (n.tab = (n.tab || 0) + 1)
            : void 0 !== n[e.block]
            ? (n[e.block] = n[e.block] + (r || 1))
            : e.block in i.a.blockedTypes
            ? (n[e.block] = r || 1)
            : console.error("Error: Undefined block type ", e.block),
          n
        );
      }
    })();
  },
  44: function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return LocalAndRemoteConfigManager;
    });
    var n = r(9);
    class LocalAndRemoteConfigManager {
      constructor(t, e) {
        (this.remoteUrl = t), (this.storageKey = e);
      }
      async get() {
        return n.c.get(this.storageKey);
      }
      async update() {
        const t = await this.get(),
          e = await this.fetchRemoteAndStore();
        return !!(await this.updateConfigIfNeeded(t, e));
      }
      async clear() {
        await n.c.remove([this.storageKey]);
      }
      async fetchRemoteAndStore() {
        const t = await fetch(this.remoteUrl, { method: "GET" });
        return await t.json();
      }
      async updateConfigIfNeeded(t, e) {
        let r = 0;
        return t && (r = t.version), !!(e && e.version > r) && (await n.c.set(this.storageKey, e), !0);
      }
    }
  },
  5: function (t, e, r) {
    "use strict";
    var n = r(11);
    const i = new (class Storage {
      constructor(t) {
        this.storageAreaName = t;
      }
      get(t) {
        return new Promise((e, r) => {
          this.getAll(t)
            .then((r) => {
              t || e(r), e(r && t in r ? r[t] : null);
            })
            .catch(r);
        });
      }
      getAll(...t) {
        return new Promise((e, r) => {
          n.BrowserAPI.storage[this.storageAreaName].get(t, (t) => {
            var i;
            if (t) e(t);
            else {
              const t = null == (i = n.BrowserAPI.runtime) ? void 0 : i.lastError;
              t ? r(t) : e(null);
            }
          });
        });
      }
      set(t, e) {
        return new Promise((r, i) => {
          n.BrowserAPI.storage[this.storageAreaName].set({ [t]: e }, () => {
            var t;
            const e = null == (t = n.BrowserAPI.runtime) ? void 0 : t.lastError;
            e ? i(e) : r();
          });
        });
      }
      remove(t) {
        return new Promise((e, r) => {
          let i = 0;
          t.forEach((s) => {
            n.BrowserAPI.storage[this.storageAreaName].remove(s, () => {
              var s;
              const a = null == (s = n.BrowserAPI.runtime) ? void 0 : s.lastError;
              a ? r(a) : ++i == t.length && e();
            });
          });
        });
      }
    })("local");
    e.a = i;
  },
  51: function (t, e, r) {
    "use strict";
    var n = r(3),
      i = r(82),
      s = r(0),
      a = r(44),
      o = r(79),
      c = r(80);
    class AdsBlocker extends i.a {
      constructor() {
        super(2563, new a.a(s.e.ADS_BLOCKER_CONFIG, s.a.KEY_CONFIG_STORAGE), o.a), (this.cache = new c.a());
      }
      onBlockedScriptRequest(t) {
        this.cache.tryCachingBlockedScriptResult(t) && Object(n.cb)("ad", { initiator: t.initiator, url: t.url });
      }
    }
    e.a = new AdsBlocker();
  },
  52: function (t, e, r) {
    "use strict";
    var n = r(3),
      i = r(82),
      s = r(0),
      a = r(44),
      o = r(79),
      c = r(80);
    class TrackersBlocker extends i.a {
      constructor() {
        super(2564, new a.a(s.e.TRACKERS_BLOCKER_CONFIG, s.I.KEY_CONFIG_STORAGE), o.a), (this.cache = new c.a());
      }
      onBlockedScriptRequest(t) {
        this.cache.tryCachingBlockedScriptResult(t) && Object(n.cb)("tracker", { initiator: t.initiator, url: t.url });
      }
    }
    e.a = new TrackersBlocker();
  },
  53: function (t, e, r) {
    "use strict";
    r.d(e, "i", function () {
      return setUninstallURL;
    }),
      r.d(e, "h", function () {
        return setOptIn;
      }),
      r.d(e, "e", function () {
        return initOnExtensionOnInstall;
      }),
      r.d(e, "a", function () {
        return initAlarms;
      }),
      r.d(e, "b", function () {
        return initContextMenu;
      }),
      r.d(e, "f", function () {
        return initOnExtensionOnStartup;
      }),
      r.d(e, "g", function () {
        return initTabsUpdatedListener;
      }),
      r.d(e, "c", function () {
        return initFeatures;
      }),
      r.d(e, "d", function () {
        return initListeners;
      });
    var n = r(20),
      i = r(83),
      s = r(56),
      a = r(0),
      o = r(3),
      c = r(21),
      E = r(28);
    class AlarmManager {
      static getInstance() {
        return void 0 === this.instance && (this.instance = new AlarmManager()), this.instance;
      }
      async createPeriodicAlarm(t, e, r = !1) {
        await this.createIfNeeded(t, { periodInMinutes: e }, r);
      }
      async createPeriodicAlarmWithDelay(t, e, r = 0, n = !1) {
        await this.createIfNeeded(t, { delayInMinutes: r, periodInMinutes: e }, n);
      }
      async createOneTimeAlarm(t, e, r = !1) {
        await this.createIfNeeded(t, { when: e }, r);
      }
      async createDelayedAlarm(t, e, r = !1) {
        await this.createIfNeeded(t, { delayInMinutes: e }, r);
      }
      async clearAlarms() {
        return new Promise((t) => {
          chrome.alarms.clearAll((e) => {
            t(e);
          });
        });
      }
      async clearAlarm(t) {
        return new Promise((e) => {
          chrome.alarms.clear(t, (t) => {
            e(t);
          });
        });
      }
      registerAlarmListener(t) {
        t && chrome.alarms.onAlarm.addListener(t);
      }
      async getAlarm(t) {
        return new Promise((e) => {
          chrome.alarms.get(t, (t) => {
            e(t);
          });
        });
      }
      async createIfNeeded(t, e, r = !1) {
        if (await this.getAlarm(t)) {
          if (!r) return;
          await this.clearAlarm(t);
        }
        chrome.alarms.create(t, e);
      }
    }
    var u = AlarmManager,
      _ = r(85),
      l = r(7),
      O = r(57),
      T = r(51),
      h = r(52),
      d = r(42),
      I = r(44);
    class youtube_blocker_config_manager_YoutubeBlockerConfigManager extends I.a {
      constructor() {
        super(a.e.YOUTUBE_BLOCKER_CONFIG, a.L.KEY_CONFIG_STORAGE);
      }
    }
    var f = new youtube_blocker_config_manager_YoutubeBlockerConfigManager(),
      A = r(87),
      S = r(86),
      C = r(9),
      p = r(64),
      L = r(18),
      R = r(23),
      N = r(38);
    const m = u.getInstance(),
      setUninstallURL = (t) => {
        const e = "?version=" + Object(o.u)().version,
          r = "&block=" + t || !1;
        chrome.runtime.setUninstallURL(`https://app.poperblocker.com/uninstall${e}${r}&logout=true`);
      },
      setOptIn = async (t, e) => {
        await (t ? R.a.optIn() : R.a.optOut()),
          await L.a.setFeatureEnabled({ Name: "DetectOverlays", SettingsKey: "detectOverlays" }, t),
          t && _.a.clearBadge(),
          e && e();
      },
      initOnExtensionOnInstall = () => {
        chrome.runtime.onInstalled.addListener(async (t) => {
          const { reason: e, previousVersion: r } = t,
            { version: n } = Object(o.u)();
          if (
            (await Object(c.b)(),
            await Object(o.p)(),
            await (async () => {
              const t = await fetch(a.n);
              if (200 === t.status) {
                const e = await t.text();
                chrome.storage.local.set({ [a.h.FONT_STYLE]: e });
              }
            })(),
            "install" === e)
          ) {
            await A.a.getInstance().init(), Object(i.b)(), setUninstallURL(0), Object(s.a)(!1);
            try {
              const t = await Object(S.b)();
              C.c.set(a.h.INSTALL_SOURCE, t);
            } catch (t) {}
            chrome.tabs.create({ url: a.r.WEB_APP + "/welcome" }),
              (async () => {
                try {
                  if ("normal" !== (await chrome.management.getSelf()).installType) return;
                  const t = new C.b(C.a.Sync);
                  if (await t.get(a.h.INSTALL_EVENT_SENT)) return;
                  Object(N.a)(a.c.ANALYTICS_EVENT_TYPES.EXTENSION_INSTALL), t.set(a.h.INSTALL_EVENT_SENT, Date.now());
                } catch (t) {}
              })();
          } else "update" === e && (Object(s.a)(!1), Object(i.c)());
          await Object(o.fb)(),
            chrome.storage.local.get([a.h.PAUSED], ({ paused: t }) => {
              Object(s.a)(t);
            }),
            T.a.updateConfig(),
            h.a.updateConfig(),
            f.update(),
            p.a.update();
        });
      },
      initAlarms = () => {
        m.createPeriodicAlarmWithDelay(a.b.SEGMENT_ALARM, a.w, Object(E.j)(a.z, a.p), !0),
          m.createPeriodicAlarm(a.b.ADSBLOCKER_ALARM, a.w),
          m.createPeriodicAlarm(a.b.TRACKERSBLOCKER_ALARM, a.w),
          m.createPeriodicAlarm(a.b.YOUTUBEBLOCKER_ALARM, a.w),
          m.createPeriodicAlarm(a.b.COOKIE_CRUMBLER_ALARM, a.w),
          m.registerAlarmListener(async (t) => {
            switch (t.name) {
              case a.b.SEGMENT_ALARM:
                await Object(o.gb)();
                break;
              case a.b.TRACKERSBLOCKER_ALARM:
                h.a.updateConfig();
                break;
              case a.b.ADSBLOCKER_ALARM:
                T.a.updateConfig();
                break;
              case a.b.YOUTUBEBLOCKER_ALARM:
                f.update();
                break;
              case a.b.COOKIE_CRUMBLER_ALARM:
                p.a.update();
            }
          });
      },
      initContextMenu = () => {
        chrome.contextMenus.onClicked.addListener(async (t) => {
          const e = await Object(o.C)();
          switch (t.menuItemId) {
            case a.i.OVERLAY.id:
              R.a.isOptIn().then((t) => {
                t
                  ? e || Object(o.Y)("manual-remove-overlay", { source: "right-click" })
                  : Object(o.Y)("overlay-not-active", { source: "right-click" });
              });
              break;
            case a.i.BLOCK_ELEMENT.id:
              Object(o.Y)(a.t.START_BLOCKED_ELEMENTS);
              break;
            case a.i.UNBLOCK_ALL_ELEMENTS.id:
              Object(o.Y)(a.t.UNBLOCK_ALL_ELEMENTS);
          }
        });
      },
      initOnExtensionOnStartup = () => {
        chrome.runtime.onStartup.addListener(async () => {
          chrome.storage.local.get([a.h.PAUSED], ({ paused: t }) => {
            Object(s.a)(t);
          }),
            Object(n.e)(),
            await m.createPeriodicAlarmWithDelay(a.b.SEGMENT_ALARM, a.w, Object(E.j)(0, a.y));
        });
      },
      initTabsUpdatedListener = () => {
        l.BrowserAPI.tabs.onUpdated.addListener((t, e, r) => {
          O.a.onTabChanged(r, e);
        }),
          l.BrowserAPI.tabs.onRemoved.addListener(async (t, e) => {
            d.a.clearTotalBlocksOfTabIdIfNeeded(t, "");
          }),
          l.BrowserAPI.windows.onRemoved.addListener(async () => {
            await d.a.clearAllTotalBlocksOfTab();
          });
      },
      initFeatures = () => {
        O.a.onLoaded();
      },
      initListeners = () => {
        R.a.setOptStateChangedListener((t) => {
          Object(o.J)(a.t.ON_EXTENSION_INFO_UPDATED);
        });
      };
  },
  54: function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return a;
    });
    var n = r(19),
      i = r(0);
    const s = class extends n.a {
      constructor() {
        super(...arguments),
          (this.shouldBeDisplayed = !1),
          (this.shouldBeDisplayedThankMsg = !1),
          (this.rating = 0),
          (this.userFeedback = ""),
          (this.isFeedbackSubmit = !1);
      }
      getKey() {
        return i.h.RATING_US_MODAL;
      }
      getLegacyKeys() {
        return [];
      }
      toDTO() {
        return {
          shouldBeDisplayed: this.shouldBeDisplayed,
          shouldBeDisplayedThankMsg: this.shouldBeDisplayedThankMsg,
          rating: this.rating,
          userFeedback: this.userFeedback,
          isFeedbackSubmit: this.isFeedbackSubmit
        };
      }
      getVersion() {
        return 1;
      }
      migrate(t) {}
      async enable() {
        return (this.shouldBeDisplayed = !0), (this.isFeedbackSubmit = !1), await this.save(), this;
      }
      async disable() {
        return (this.isFeedbackSubmit = !0), await this.save(), this;
      }
      getShouldBeDisplayed() {
        return (this.shouldBeDisplayed || this.shouldBeDisplayedThankMsg) && !this.isFeedbackSubmit;
      }
      async displayThankMsg() {
        return (this.shouldBeDisplayedThankMsg = !0), await this.save(), this;
      }
      async setUserRating(t = 0) {
        return (this.rating = t), await this.save(), this;
      }
      async setUserFeedback(t = "") {
        return (this.userFeedback = t), await this.save(), this;
      }
      getUserFeedback() {
        return { rating: this.rating, userFeedback: this.userFeedback };
      }
      getShouldBeDisplayedThankMsg() {
        return this.shouldBeDisplayedThankMsg;
      }
    };
    let a = s;
    a.getDefault = () => new s();
  },
  56: function (t, e, r) {
    "use strict";
    r.d(e, "c", function () {
      return removeContextMenu;
    }),
      r.d(e, "b", function () {
        return createChildMenuItem;
      }),
      r.d(e, "a", function () {
        return createBrowserContextMenu;
      });
    var n = r(0),
      i = Object.defineProperty,
      s = Object.getOwnPropertySymbols,
      a = Object.prototype.hasOwnProperty,
      o = Object.prototype.propertyIsEnumerable,
      __defNormalProp = (t, e, r) => (e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r)),
      __spreadValues = (t, e) => {
        for (var r in e || (e = {})) a.call(e, r) && __defNormalProp(t, r, e[r]);
        if (s) for (var r of s(e)) o.call(e, r) && __defNormalProp(t, r, e[r]);
        return t;
      };
    const removeContextMenu = (t) => {
        chrome.contextMenus.remove(t, () => chrome.runtime.lastError);
      },
      createChildMenuItem = (t) => {
        chrome.contextMenus.create(t, () => chrome.runtime.lastError);
      },
      createBrowserContextMenu = async (t) => {
        if (t) chrome.contextMenus.removeAll();
        else {
          const t = await new Promise((t) => {
            const e = n.i.PARENT;
            chrome.contextMenus.create(e, () => (t(n.i.PARENT.id), chrome.runtime.lastError));
          });
          createChildMenuItem(__spreadValues({ parentId: t }, n.i.OVERLAY)),
            createChildMenuItem(__spreadValues({ parentId: t }, n.i.BLOCK_ELEMENT));
        }
      };
  },
  57: function (t, e, r) {
    "use strict";
    var n = r(3),
      i = r(12),
      s = r(8),
      a = r(18),
      o = r(51),
      c = r(52),
      E = r(13);
    e.a = new (class ScriptBlockersManager {
      constructor() {
        (this.tryActivateFeature = async (t) => {
          let e;
          !(await Object(n.F)()) && ((e = await i.a.getDefault(E.a.onTrialEnded).loadAndUpdate()), e.isTrialPending() || e.isTrialEnded())
            ? await t.disable()
            : await t.enable();
        }),
          (this.tryDeactivateFeature = async (t) => {
            await t.disable();
          }),
          (this.refresh = async () => {
            o.a.isEnabled() && o.a.restart(), c.a.isEnabled() && c.a.restart();
          }),
          (this.onLoaded = async () => this.toggleFeatures()),
          (this.getScriptBlockerByFeature = (t) => {
            let e;
            return Object(s.d)(t, s.a.AdsBlocker) ? (e = o.a) : Object(s.d)(t, s.a.TrackersBlocker) && (e = c.a), e;
          }),
          (this.toggleFeatureState = async (t, e) => {
            if (!t) return;
            const r = this.getScriptBlockerByFeature(t);
            r && (e ? this.tryActivateFeature(r) : this.tryDeactivateFeature(r));
          }),
          (this.onTabChanged = async (t, e) => {
            if ("loading" === (e && e.status) && (null == t ? void 0 : t.url)) return this.toggleFeatures();
          }),
          (this.toggleFeatures = async () => {
            const t = await Object(n.B)();
            await this.toggleFeatureState(s.a.AdsBlocker, t && (await a.a.isFeatureEnabled(s.a.AdsBlocker))),
              await this.toggleFeatureState(s.a.TrackersBlocker, t && (await a.a.isFeatureEnabled(s.a.TrackersBlocker)));
          }),
          (this.onExtensionStateChanged = async (t) => {
            t ? await this.refresh() : (await o.a.disable(), await c.a.disable());
          });
      }
    })();
  },
  58: function (t, e) {
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (r = window);
    }
    t.exports = r;
  },
  59: function (t, e, r) {
    "use strict";
    (e.byteLength = function byteLength(t) {
      var e = getLens(t),
        r = e[0],
        n = e[1];
      return (3 * (r + n)) / 4 - n;
    }),
      (e.toByteArray = function toByteArray(t) {
        var e,
          r,
          n = getLens(t),
          a = n[0],
          o = n[1],
          c = new s(
            (function _byteLength(t, e, r) {
              return (3 * (e + r)) / 4 - r;
            })(0, a, o)
          ),
          E = 0,
          u = o > 0 ? a - 4 : a;
        for (r = 0; r < u; r += 4)
          (e = (i[t.charCodeAt(r)] << 18) | (i[t.charCodeAt(r + 1)] << 12) | (i[t.charCodeAt(r + 2)] << 6) | i[t.charCodeAt(r + 3)]),
            (c[E++] = (e >> 16) & 255),
            (c[E++] = (e >> 8) & 255),
            (c[E++] = 255 & e);
        2 === o && ((e = (i[t.charCodeAt(r)] << 2) | (i[t.charCodeAt(r + 1)] >> 4)), (c[E++] = 255 & e));
        1 === o &&
          ((e = (i[t.charCodeAt(r)] << 10) | (i[t.charCodeAt(r + 1)] << 4) | (i[t.charCodeAt(r + 2)] >> 2)),
          (c[E++] = (e >> 8) & 255),
          (c[E++] = 255 & e));
        return c;
      }),
      (e.fromByteArray = function fromByteArray(t) {
        for (var e, r = t.length, i = r % 3, s = [], a = 0, o = r - i; a < o; a += 16383)
          s.push(encodeChunk(t, a, a + 16383 > o ? o : a + 16383));
        1 === i
          ? ((e = t[r - 1]), s.push(n[e >> 2] + n[(e << 4) & 63] + "=="))
          : 2 === i && ((e = (t[r - 2] << 8) + t[r - 1]), s.push(n[e >> 10] + n[(e >> 4) & 63] + n[(e << 2) & 63] + "="));
        return s.join("");
      });
    for (
      var n = [],
        i = [],
        s = "undefined" != typeof Uint8Array ? Uint8Array : Array,
        a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        o = 0,
        c = a.length;
      o < c;
      ++o
    )
      (n[o] = a[o]), (i[a.charCodeAt(o)] = o);
    function getLens(t) {
      var e = t.length;
      if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var r = t.indexOf("=");
      return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
    }
    function encodeChunk(t, e, r) {
      for (var i, s, a = [], o = e; o < r; o += 3)
        (i = ((t[o] << 16) & 16711680) + ((t[o + 1] << 8) & 65280) + (255 & t[o + 2])),
          a.push(n[((s = i) >> 18) & 63] + n[(s >> 12) & 63] + n[(s >> 6) & 63] + n[63 & s]);
      return a.join("");
    }
    (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
  },
  6: function (t, e, r) {
    "use strict";
    r.d(e, "f", function () {
      return getI18N;
    }),
      r.d(e, "l", function () {
        return sendGAEvent;
      }),
      r.d(e, "m", function () {
        return sendMessageToWorker;
      }),
      r.d(e, "o", function () {
        return sendToWorker;
      }),
      r.d(e, "g", function () {
        return getManifest;
      }),
      r.d(e, "n", function () {
        return sendToActiveTab;
      }),
      r.d(e, "c", function () {
        return getActiveTab;
      }),
      r.d(e, "q", function () {
        return updateRemoteSettingsData;
      }),
      r.d(e, "h", function () {
        return isPremium;
      }),
      r.d(e, "i", function () {
        return msToDays;
      }),
      r.d(e, "d", function () {
        return getDaysPassed;
      }),
      r.d(e, "a", function () {
        return backgroundSafeExec;
      }),
      r.d(e, "b", function () {
        return checkIsPinned;
      }),
      r.d(e, "j", function () {
        return openPlansPage;
      }),
      r.d(e, "e", function () {
        return getFeatureFlag;
      }),
      r.d(e, "k", function () {
        return replaceAll;
      }),
      r.d(e, "p", function () {
        return throttle;
      });
    var n = r(2),
      i = r(63),
      s = (r(34), r(5));
    const fetchWithTokenRefreshIfNeeded = async (t, e, r) => {
        const i = await fetch(t, e);
        if (i.status === r) return i;
        if (401 === i.status) {
          if (204 === (await fetch(n.d.REFRESH, { method: "POST", headers: { "Content-Type": "application/json" } })).status) {
            const n = await fetch(t, e);
            if (n.status === r) return n;
          }
          return { status: i.status, message: i.statusText };
        }
      },
      updateUserInfo = async () => {
        if (!(await s.a.get(n.f.USER))) return;
        const t = await s.a.get(n.f.LAST_USER_UPDATE_DATE);
        (!t || Date.now() - t >= n.v) &&
          (await (async () => {
            try {
              const t = await fetchWithTokenRefreshIfNeeded(n.d.GET_USER, {}, 200);
              if (200 === t.status) {
                const e = await t.json();
                return await s.a.set(n.f.USER, e.user), await s.a.set(n.f.LAST_USER_UPDATE_DATE, Date.now()), e.user || null;
              }
              await s.a.remove([n.f.LAST_USER_UPDATE_DATE]);
            } catch (t) {
              await s.a.remove([n.f.LAST_USER_UPDATE_DATE]);
            }
          })());
      };
    Object.defineProperty, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
    r(31);
    var a = ((t) => (
      (t.CHROME = "chrome"),
      (t.FIREFOX = "firefox"),
      (t.OPERA = "opera"),
      (t.EDGE = "edge"),
      (t.SAFARI = "safari"),
      (t.UNKNOWN = "unknown"),
      t
    ))(a || {});
    const getBrowserName = () => {
      try {
        const t = navigator.userAgent;
        if (t.match(/opera|opr\//i)) return "opera";
        if (t.match(/firefox|fxios/i)) return "firefox";
        if (t.match(/edg/i)) return "edge";
        if (t.match(/safari/i) && !t.match(/chrome|chromium|crios/i)) return "safari";
        if (t.match(/chrome|chromium|crios/i)) return "chrome";
      } catch (t) {}
      return "unknown";
    };
    Object.defineProperty, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
    const getAnalyticsInfoFromLocalStorage = async () =>
      new Promise((t) => {
        chrome.storage.local.get(n.b.ANALYTICS_INFO_KEY, (e) => {
          t(e[n.b.ANALYTICS_INFO_KEY]);
        });
      });
    function getLocale() {
      const t = chrome.i18n.getUILanguage().replace("_", "-");
      return t.length < 7 ? t : "en-US";
    }
    const getOrInitAnalyticsInfoFromLocalStorage = async () => {
      if (!(await getAnalyticsInfoFromLocalStorage())) {
        const t = (() => {
            switch (getBrowserName()) {
              case a.CHROME:
                return "Chrome";
              case a.FIREFOX:
                return "Firefox";
              case a.EDGE:
                return "Microsoft Edge";
              case a.OPERA:
                return "Opera";
              case a.SAFARI:
                return "Safari";
              case a.UNKNOWN:
                return "Unknown";
            }
            return "Unknown";
          })(),
          e = await (async () => {
            let t, e;
            try {
              const r = await fetch(n.d.ANALYTIC_INFO);
              200 === r.status && (t = await r.json()),
                (e = (t && t.uuid) || Object(i.a)()),
                await fetch(n.d.ANALYTIC_INFO, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ uuid: e })
                });
            } catch (t) {}
            return e;
          })();
        await updateUserInfo(),
          chrome.storage.local.set({
            [n.b.ANALYTICS_INFO_KEY]: { uuid: e, country: getLocale(), resource: n.b.ANALYTICS_RESOURCE_TYPES.ORGANIC, user_agent: t }
          });
      }
      return await getAnalyticsInfoFromLocalStorage();
    };
    var o = r(14),
      c = r(15),
      E = r(11),
      u = (r(25), r(24));
    const getI18N = (t, e) => chrome.i18n.getMessage(t) || chrome.i18n.getMessage(e || t) || t,
      sendGAEvent = (t, e, r, i) =>
        new Promise((s) => {
          chrome.runtime.sendMessage({ name: n.o.GA_EVENT, category: t, action: e, label: r, isCount: i }, () => s());
        }),
      sendMessageToWorker = (t) =>
        new Promise((e) => {
          E.BrowserAPI.runtime.sendMessage(t, (t) => e(t));
        }),
      sendToWorker = (t) =>
        new Promise((e) => {
          E.BrowserAPI.runtime.sendMessage(t, (t) => e(t));
        }),
      getManifest = () => chrome.runtime.getManifest(),
      sendToActiveTab = (t, e) => {
        chrome.tabs &&
          chrome.tabs.query({ active: !0, lastFocusedWindow: !0 }, function (r) {
            const n = r && r[0] && r[0].id;
            n && chrome.tabs.sendMessage(n, { name: t, data: e || "" });
          });
      },
      getActiveTab = () =>
        new Promise((t) => {
          chrome.tabs.query({ active: !0, lastFocusedWindow: !0 }, (e) => {
            t(e[0]);
          });
        }),
      updateRemoteSettingsData = async () => {
        chrome.storage.local.get([n.f.BLOCKED_ELEMENTS, n.f.SETTINGS, n.f.WHITELIST, n.f.USER], async (t) => {
          const e = t[n.f.WHITELIST],
            r = t[n.f.SOCIAL_CONTENT_KEYWORDS],
            i = t[n.f.BLOCKED_ELEMENTS],
            s = t[n.f.USER],
            a = t[n.f.SETTINGS],
            E = null == s ? void 0 : s.isPremium,
            { version: _ } = getManifest(),
            l = {
              extensionVersion: _,
              features: {
                popups: void 0 === a.popups || a.popups,
                overlays: a.detectOverlays,
                hideElements: void 0 === a.hideElements || a.hideElements,
                pushNotification: !!a.pushNotification && a.pushNotification,
                socialContentBlocker: a.socialContentBlocker
              },
              whitelist: e || [],
              socialContentKeyWords: r || [],
              blockedElements: i || {}
            };
          Object(o.c)().forEach(async (t) => {
            const e = t.SettingsKey,
              r = await c.a.getDefault(u.a.onTrialEnded).loadAndUpdate();
            l.features[t.SettingsKey] = a[e] && (E || r.isTrialActive());
          });
          const O = await getOrInitAnalyticsInfoFromLocalStorage();
          await fetch(n.d.SETTINGS, {
            method: "POST",
            headers: { "Content-Type": "application/json", id: O.uuid },
            body: JSON.stringify(l)
          });
        });
      },
      isPremium = async () => {
        const t = await s.a.get(n.f.USER);
        return !!(null == t ? void 0 : t.isPremium);
      },
      msToDays = (t) => t / n.p,
      getDaysPassed = (t) => {
        const e = t,
          r = Date.now() - e;
        return Math.floor(msToDays(r));
      },
      backgroundSafeExec = (t, e) => {
        void 0 !== E.BrowserAPI.tabs ? t() : e();
      },
      checkIsPinned = async () => ({ isPinned: (await E.BrowserAPI.action.getUserSettings()).isOnToolbar });
    const openPlansPage = (t = "") => {
        const e = `${n.n.WEB_APP}/settings?checkout=1&source=${t}`;
        backgroundSafeExec(
          () => chrome.tabs.create({ url: e }),
          () => window.postMessage({ type: n.o.OPEN_EXTENSION_CHECKOUT_MODAL, source: t }, "*")
        );
      },
      getFeatureFlag = async (t, e) => {
        const r = await sendToWorker({ name: n.o.GET_ALL_FEATURES_FLAGS });
        return t in r ? r[t] : e;
      },
      replaceAll = (t, e, r) => {
        const n = new RegExp(`\\b${e}\\b`, "gi");
        return t.replace(n, r);
      },
      throttle = (t, e) => {
        let r;
        return (...n) => {
          r ||
            (r = setTimeout(() => {
              t(...n), (r = null);
            }, e));
        };
      };
  },
  60: function (t, e) {
    (e.read = function (t, e, r, n, i) {
      var s,
        a,
        o = 8 * i - n - 1,
        c = (1 << o) - 1,
        E = c >> 1,
        u = -7,
        _ = r ? i - 1 : 0,
        l = r ? -1 : 1,
        O = t[e + _];
      for (_ += l, s = O & ((1 << -u) - 1), O >>= -u, u += o; u > 0; s = 256 * s + t[e + _], _ += l, u -= 8);
      for (a = s & ((1 << -u) - 1), s >>= -u, u += n; u > 0; a = 256 * a + t[e + _], _ += l, u -= 8);
      if (0 === s) s = 1 - E;
      else {
        if (s === c) return a ? NaN : (1 / 0) * (O ? -1 : 1);
        (a += Math.pow(2, n)), (s -= E);
      }
      return (O ? -1 : 1) * a * Math.pow(2, s - n);
    }),
      (e.write = function (t, e, r, n, i, s) {
        var a,
          o,
          c,
          E = 8 * s - i - 1,
          u = (1 << E) - 1,
          _ = u >> 1,
          l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          O = n ? 0 : s - 1,
          T = n ? 1 : -1,
          h = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
        for (
          e = Math.abs(e),
            isNaN(e) || e === 1 / 0
              ? ((o = isNaN(e) ? 1 : 0), (a = u))
              : ((a = Math.floor(Math.log(e) / Math.LN2)),
                e * (c = Math.pow(2, -a)) < 1 && (a--, (c *= 2)),
                (e += a + _ >= 1 ? l / c : l * Math.pow(2, 1 - _)) * c >= 2 && (a++, (c /= 2)),
                a + _ >= u
                  ? ((o = 0), (a = u))
                  : a + _ >= 1
                  ? ((o = (e * c - 1) * Math.pow(2, i)), (a += _))
                  : ((o = e * Math.pow(2, _ - 1) * Math.pow(2, i)), (a = 0)));
          i >= 8;
          t[r + O] = 255 & o, O += T, o /= 256, i -= 8
        );
        for (a = (a << i) | o, E += i; E > 0; t[r + O] = 255 & a, O += T, a /= 256, E -= 8);
        t[r + O - T] |= 128 * h;
      });
  },
  61: function (t, e) {
    var r = {}.toString;
    t.exports =
      Array.isArray ||
      function (t) {
        return "[object Array]" == r.call(t);
      };
  },
  63: function (t, e, r) {
    "use strict";
    var n,
      i = new Uint8Array(16);
    function rng() {
      if (
        !n &&
        !(n =
          ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
          ("undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
      )
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return n(i);
    }
    var s = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    for (
      var a = function validate(t) {
          return "string" == typeof t && s.test(t);
        },
        o = [],
        c = 0;
      c < 256;
      ++c
    )
      o.push((c + 256).toString(16).substr(1));
    var E = function stringify(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        r = (
          o[t[e + 0]] +
          o[t[e + 1]] +
          o[t[e + 2]] +
          o[t[e + 3]] +
          "-" +
          o[t[e + 4]] +
          o[t[e + 5]] +
          "-" +
          o[t[e + 6]] +
          o[t[e + 7]] +
          "-" +
          o[t[e + 8]] +
          o[t[e + 9]] +
          "-" +
          o[t[e + 10]] +
          o[t[e + 11]] +
          o[t[e + 12]] +
          o[t[e + 13]] +
          o[t[e + 14]] +
          o[t[e + 15]]
        ).toLowerCase();
      if (!a(r)) throw TypeError("Stringified UUID is invalid");
      return r;
    };
    e.a = function v4(t, e, r) {
      var n = (t = t || {}).random || (t.rng || rng)();
      if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
        r = r || 0;
        for (var i = 0; i < 16; ++i) e[r + i] = n[i];
        return e;
      }
      return E(n);
    };
  },
  64: function (t, e, r) {
    "use strict";
    r.d(e, "b", function () {
      return insertCookieFilters;
    });
    var n = r(78),
      i = r(2);
    class cookie_crumbler_CookieCrumblerConfigManager extends n.a {
      constructor() {
        super(i.d.COOKIE_CRUMBLER, i.g.KEY_COOKIE_CLASSES);
      }
      segmentSelectors(t, e) {
        if (!e || e <= 0) throw new Error("Error in segment size");
        const r = [];
        for (let n = 0; n < t.length; n += e) r.push(t.slice(n, n + e));
        return r;
      }
      async getAndParse() {
        const t = await super.get(),
          e = this.segmentSelectors(t.cookieClasses, t.segmentSize),
          r = [];
        return (
          e.forEach((t) => {
            r.push(t.join(","));
          }),
          r
        );
      }
    }
    e.a = new cookie_crumbler_CookieCrumblerConfigManager();
    const insertCookieFilters = async () => {
      const [t] = await chrome.tabs.query({ active: !0, currentWindow: !0 });
      (null == t ? void 0 : t.id) &&
        (await (async (t) => {
          (await new cookie_crumbler_CookieCrumblerConfigManager().getAndParse()).forEach((e) => {
            chrome.scripting
              .insertCSS({
                target: { tabId: t },
                css:
                  e +
                  " { display: none !important; height: 0 !important; z-index: -99999 !important;visibility: hidden !important; width: 0 !important; overflow: hidden !important; }"
              })
              .catch(console.error);
          });
        })(t.id));
    };
  },
  7: function (t, e) {
    const r = ["Chrome", "Opera", "Edge", "SamsungBrowser", "YaBrowser"],
      n = ["Firefox", "Safari", "MSIE"];
    t.exports.BrowserAPI = (() => {
      for (const t of r) if (navigator.userAgent.indexOf(t) > -1) return !0;
      return !1;
    })()
      ? chrome
      : (() => {
          for (const t of n) if (navigator.userAgent.indexOf(t) > -1) return !0;
          return !1;
        })()
      ? browser
      : { runtime: { sendMessage: () => {} } };
  },
  74: function (t, e, r) {
    "use strict";
    var n = r(3),
      i = r(0),
      s = r(9);
    e.a = new (class WhitelistHelper {
      list() {
        return new Promise((t) => {
          s.c.get(i.h.WHITELIST).then((e) => {
            t(e || []);
          });
        });
      }
      add(t) {
        return this.list().then((e) => {
          e.push(t), s.c.set(i.h.WHITELIST, e);
        });
      }
      remove(t) {
        return this.list().then((e) => {
          (e = e.filter((e) => e !== t)), s.c.set(i.h.WHITELIST, e);
        });
      }
      async containsDomain(t) {
        const e = await this.list();
        return (
          (t = Object(n.c)(t)),
          e.some((e) => {
            e.includes("http") || (e = "http://" + e);
            return new URL(e).hostname === t;
          })
        );
      }
    })();
  },
  76: function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return a;
    });
    var n = r(19),
      i = r(0);
    const s = class extends n.a {
      constructor() {
        super(...arguments),
          (this.shouldBeDisplayed = !0),
          (this.installTime = -1),
          (this.openSettingsPanelNumber = 0),
          (this.maybeLaterTime = -1);
      }
      getLegacyKeys() {
        return [];
      }
      toDTO() {
        return {
          shouldBeDisplayed: this.shouldBeDisplayed,
          installTime: this.installTime,
          openSettingsPanelNumber: this.openSettingsPanelNumber,
          maybeLaterTime: this.maybeLaterTime
        };
      }
      getVersion() {
        return 1;
      }
      migrate(t) {}
      async countOpenSettingsPanel() {
        return this.openSettingsPanelNumber++, await this.save(), this;
      }
      getKey() {
        return i.h.SPECIAL_OFFER_MODAL;
      }
      async initIfNeeded() {
        return -1 === this.installTime && (await this.init()), this;
      }
      isTimeToDisplayModal() {
        const t = Date.now() - this.installTime - 14 * i.x > 0,
          e = Date.now() - this.maybeLaterTime - 2 * i.x > 0,
          r = -1 === this.maybeLaterTime && (t || this.openSettingsPanelNumber > 12),
          n = this.maybeLaterTime > -1 && e;
        return this.shouldBeDisplayed && (r || n);
      }
      async disable() {
        return (this.shouldBeDisplayed = !1), await this.save(), this;
      }
      async enable() {
        return (this.shouldBeDisplayed = !0), await this.save(), this;
      }
      async updateMaybeLaterTime() {
        return (this.maybeLaterTime = Date.now()), await this.save(), this;
      }
      async init() {
        return (
          (this.installTime = Date.now()),
          (this.shouldBeDisplayed = !0),
          (this.openSettingsPanelNumber = 0),
          (this.maybeLaterTime = -1),
          await this.save(),
          this
        );
      }
    };
    let a = s;
    a.getDefault = () => new s();
  },
  78: function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return LocalAndRemoteConfigManager;
    });
    var n = r(5);
    class LocalAndRemoteConfigManager {
      constructor(t, e) {
        (this.remoteUrl = t), (this.storageKey = e);
      }
      async get() {
        return n.a.get(this.storageKey);
      }
      async update() {
        const t = await this.get(),
          e = await this.fetchRemoteAndStore();
        return !!(await this.updateConfigIfNeeded(t, e));
      }
      async clear() {
        await n.a.remove([this.storageKey]);
      }
      async fetchRemoteAndStore() {
        const t = await fetch(this.remoteUrl, { method: "GET" });
        return await t.json();
      }
      async updateConfigIfNeeded(t, e) {
        let r = 0;
        return t && (r = t.version), !!(e && e.version > r) && (await n.a.set(this.storageKey, e), !0);
      }
    }
  },
  79: function (t, e, r) {
    "use strict";
    var n = r(7);
    e.a = new (class DNRHelper extends class DeclarativeNetRequest {} {
      constructor() {
        super(...arguments),
          (this.updateDynamicRules = async (t) =>
            new Promise((e, r) => {
              n.BrowserAPI.declarativeNetRequest.updateDynamicRules(t, () => {
                var t;
                const i = null == (t = n.BrowserAPI.runtime) ? void 0 : t.lastError;
                i ? r(i) : e();
              });
            })),
          (this.getDynamicRules = async () =>
            new Promise((t, e) => {
              n.BrowserAPI.declarativeNetRequest.getDynamicRules((r) => {
                var i;
                const s = null == (i = n.BrowserAPI.runtime) ? void 0 : i.lastError;
                s ? e(s) : t(r);
              });
            })),
          (this.onRuleMatchedDebug = {
            addListener(t) {
              n.BrowserAPI.declarativeNetRequest.onRuleMatchedDebug.addListener(t);
            }
          });
      }
    })();
  },
  8: function (t, e, r) {
    "use strict";
    r.d(e, "b", function () {
      return i;
    }),
      r.d(e, "a", function () {
        return s;
      }),
      r.d(e, "c", function () {
        return getPremiumFeaturesList;
      }),
      r.d(e, "d", function () {
        return isFeatureEquals;
      }),
      r.d(e, "e", function () {
        return isPremiumFeature;
      });
    var n = r(0);
    const i = "tState",
      s = {
        SocialBlocker: {
          Name: "SocialBlocker",
          SettingsKey: "facebookAdds",
          QuickSettings: { QuickSettingsId: n.m.FACEBOOK, QuickSettingsTitleId: "settingsSocialAd" },
          HasTrial: !0,
          Style: { "margin-top": "43px" },
          ImgURL: "images/facebook-cta.svg",
          TitleStrId: "facebookadsBlocked",
          StartTrialBtnStrId: "startTrialFacebookBtn",
          EndTrialBtnStrId: "startTrialFacebookBtn",
          EndTrialLottieFile: n.d.FACEBOOK_END,
          TotalBlocksKeys: ["fbAd", "linkedinAd", "twitterAd", "instagramAd"],
          ShowDailyPromo: !1,
          Analytics: {
            EndTrialEvent: n.c.ANALYTICS_EVENT_TYPES.SOCIAL_BLOCKER_TRIAL_OVER_PROMOTION_VIEW,
            PromoView: n.c.ANALYTICS_EVENT_TYPES.SOCIAL_BLOCKER_INTRIAL_PROMOTION_VIEW,
            PromoNotificationClick: n.c.ANALYTICS_EVENT_TYPES.SOCIAL_BLOCKER_TRIAL_PROMOTION_NOTIFICATION_CLICK,
            PromoDiscountClick: n.c.ANALYTICS_EVENT_TYPES.CLICK_SOCIAL_BLOCKER_PROMOTION_DISCOUNT
          }
        },
        CookieCrumbler: {
          Name: "CookieCrumbler",
          SettingsKey: "cookieCrumbler",
          QuickSettings: { QuickSettingsId: n.m.COOKIE_CRUMBLER, QuickSettingsTitleId: "settingsCookie" },
          HasTrial: !0,
          Style: { "margin-top": "23px" },
          ImgURL: "images/cookie-blocked.svg",
          TitleStrId: "cookiesBlocked",
          StartTrialBtnStrId: "startTrialcookiesBtn",
          EndTrialBtnStrId: "removeCookieForAllGood",
          EndTrialLottieFile: n.d.COOKIE,
          TotalBlocksKeys: ["cookie"],
          ShowDailyPromo: !1,
          Analytics: {
            EndTrialEvent: n.c.ANALYTICS_EVENT_TYPES.COOKIE_CRUMBLER_END_OF_TRIAL,
            PromoView: n.c.ANALYTICS_EVENT_TYPES.COOKIE_CRUMBLER_IN_TRIAL,
            PromoNotificationClick: n.c.ANALYTICS_EVENT_TYPES.COOKIE_CRUMBLER_TRIAL_PROMOTION_NOTIFICATION_CLICK,
            PromoDiscountClick: n.c.ANALYTICS_EVENT_TYPES.CLICK_COOKIE_PROMOTION_DISCOUNT
          }
        },
        AdsBlocker: {
          Name: "AdsBlocker",
          SettingsKey: "adsBlocker",
          QuickSettings: { QuickSettingsId: "adsBlocker", QuickSettingsTitleId: "settingsAdsBlocker" },
          HasTrial: !0,
          TotalBlocksKeys: ["ad"],
          ImgURL: "images/facebook-cta.svg",
          TitleStrId: "facebookadsBlocked",
          StartTrialBtnStrId: "startTrialFacebookBtn",
          EndTrialBtnStrId: "startTrialFacebookBtn",
          EndTrialLottieFile: n.d.FACEBOOK_END,
          ShowDailyPromo: !1,
          Analytics: {
            HookShow: n.c.ANALYTICS_EVENT_TYPES.ADSBLOCKER_HOOK_SHOW,
            HookShowPostTrial: n.c.ANALYTICS_EVENT_TYPES.ADSBLOCKER_HOOK_SHOW_POSTTRIAL,
            HookClick: n.c.ANALYTICS_EVENT_TYPES.ADSBLOCKER_HOOK_CLICK,
            HookClickPostTrial: n.c.ANALYTICS_EVENT_TYPES.ADSBLOCKER_HOOK_CLICK_POSTTRIAL,
            HookDismiss: n.c.ANALYTICS_EVENT_TYPES.ADSBLOCKER_HOOK_DISMISS,
            HookDismissPostTrial: n.c.ANALYTICS_EVENT_TYPES.ADSBLOCKER_HOOK_DISMISS_POSTTRIAL
          }
        },
        YoutubeBlocker: {
          Name: "YoutubeBlocker",
          SettingsKey: "youtubeBlocker",
          QuickSettings: { QuickSettingsId: "youtubeBlocker", QuickSettingsTitleId: "settingsYoutubeAdsBlocker" },
          HasTrial: !0,
          TotalBlocksKeys: ["youtubeAd"],
          ImgURL: "images/facebook-cta.svg",
          TitleStrId: "facebookadsBlocked",
          StartTrialBtnStrId: "startTrialFacebookBtn",
          EndTrialBtnStrId: "startTrialFacebookBtn",
          EndTrialLottieFile: n.d.FACEBOOK_END,
          ShowDailyPromo: !1,
          Analytics: {
            HookShow: n.c.ANALYTICS_EVENT_TYPES.YOUTUBE_VIDEO_HOOK_SHOW,
            HookShowPostTrial: n.c.ANALYTICS_EVENT_TYPES.YOUTUBE_VIDEO_HOOK_SHOW_POSTTRIAL,
            HookClick: n.c.ANALYTICS_EVENT_TYPES.YOUTUBE_VIDEO_HOOK_CLICK,
            HookClickPostTrial: n.c.ANALYTICS_EVENT_TYPES.YOUTUBE_VIDEO_HOOK_CLICK_POSTTRIAL,
            HookDismiss: n.c.ANALYTICS_EVENT_TYPES.YOUTUBE_VIDEO_HOOK_DISMISS,
            HookDismissPostTrial: n.c.ANALYTICS_EVENT_TYPES.YOUTUBE_VIDEO_HOOK_DISMISS_POSTTRIAL
          }
        },
        TrackersBlocker: {
          Name: "TrackersBlocker",
          SettingsKey: "trackersBlocker",
          QuickSettings: { QuickSettingsId: "trackersBlocker", QuickSettingsTitleId: "settingsTrackersBlocker" },
          HasTrial: !0,
          TotalBlocksKeys: ["tracker"],
          ImgURL: "images/facebook-cta.svg",
          TitleStrId: "trackersBlockerSettingsTitle",
          EndTrialLottieFile: n.d.FACEBOOK_END,
          Analytics: {}
        }
      },
      getPremiumFeaturesList = () => Object.keys(s).map((t) => s[t]),
      isFeatureEquals = (t, e) => t.Name === e.Name,
      isPremiumFeature = (t) => getPremiumFeaturesList().some((e) => isFeatureEquals(e, t));
  },
  80: function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return ScriptBlockerCache;
    });
    var n = r(3),
      i = r(0);
    class ScriptBlockerCache {
      constructor() {
        (this.blockedSources = new Map()),
          (this.tryCachingBlockedScriptResult = (t) => {
            this.tryClearCache();
            let e = { urls: null, lastUpdated: 0 };
            const r = Object(n.c)(t.url);
            if (this.blockedSources.has(t.initiator)) {
              if (((e = this.blockedSources.get(t.initiator)), e.urls.has(r))) return !1;
              e.urls.add(r);
            } else e.urls = new Set([r]);
            return (e.lastUpdated = Date.now()), this.blockedSources.set(t.initiator, e), !0;
          });
      }
      tryClearCache() {
        const t = Date.now(),
          e = new Map(this.blockedSources);
        this.blockedSources.forEach((r, n) => {
          t - r.lastUpdated >= i.q && e.delete(n);
        }),
          (this.blockedSources = e);
      }
    }
  },
  82: function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return E;
    });
    var n = r(7),
      i = ((t) => (
        (t.BLOCK = "block"),
        (t.REDIRECT = "redirect"),
        (t.ALLOW = "allow"),
        (t.UPGRADE_SCHEME = "upgradeScheme"),
        (t.MODIFY_HEADERS = "modifyHeaders"),
        (t.ALLOW_ALL_REQUESTS = "allowAllRequests"),
        t
      ))(i || {}),
      s = ((t) => (
        (t.MAIN_FRAME = "main_frame"),
        (t.SUB_FRAME = "sub_frame"),
        (t.STYLESHEET = "stylesheet"),
        (t.SCRIPT = "script"),
        (t.IMAGE = "image"),
        (t.FONT = "font"),
        (t.OBJECT = "object"),
        (t.XMLHTTPREQUEST = "xmlhttprequest"),
        (t.PING = "ping"),
        (t.CSP_REPORT = "csp_report"),
        (t.MEDIA = "media"),
        (t.WEBSOCKET = "websocket"),
        (t.OTHER = "other"),
        t
      ))(s || {});
    class rule_AjaxBlockingRule extends class Rule {
      constructor(t) {
        (this.ruleId = t), (this.getRuleId = () => this.ruleId);
      }
      getRule() {
        const t = this.getCondition(),
          e = this.getInitiatorDomains(),
          r = this.getExcludedInitiatorDomains();
        return (
          e && (t.initiatorDomains = e),
          r && (t.excludedInitiatorDomains = r),
          { id: this.ruleId, priority: 1, condition: t, action: { type: this.getAction() } }
        );
      }
    } {
      constructor(t, e, r, n, i) {
        super(t), (this.url = e), (this.initiatorDomains = r), (this.excludedInitiatorDomains = n), (this.resourceTypes = i);
      }
      getCondition() {
        return { urlFilter: `*${this.url}*`, resourceTypes: this.resourceTypes || [s.SCRIPT, s.XMLHTTPREQUEST] };
      }
      getAction() {
        return i.BLOCK;
      }
      getInitiatorDomains() {
        return this.initiatorDomains;
      }
      getExcludedInitiatorDomains() {
        return this.excludedInitiatorDomains;
      }
    }
    var a = r(3),
      o = r(74);
    function sourceToRule(t, e, r, n) {
      return new rule_AjaxBlockingRule(
        (function generateRuleId(t, e) {
          let r = t.length;
          return (
            Array.from(t).forEach((t) => {
              r += t.charCodeAt(0);
            }),
            Math.floor(1e4 * r + e)
          );
        })(t.url, e),
        t.url,
        t.initiator,
        r,
        n
      );
    }
    const c = class {
      constructor(t, e, r) {
        if (
          ((this.uniqueRuleId = t),
          (this.configManager = e),
          (this.dnrWrapper = r),
          (this.blockedDomains = new Set()),
          (this.enabled = !1),
          (this.isEnabled = () => this.enabled),
          t > 9999 || t < 1e3)
        )
          throw Error("blocker unique id can only be between 1000 to 9999");
      }
      async enable() {
        if (this.enabled) return;
        const t = await o.a.list();
        await this.loadConfig(t), this.startMonitor(this.onBlockedScriptRequest.bind(this)), (this.enabled = !0);
      }
      async disable() {
        this.enabled && (this.stopMonitor(), await this.reset(), (this.enabled = !1));
      }
      async updateConfig() {
        (await this.configManager.update()) && this.restart();
      }
      async restart() {
        this.isEnabled() && (await this.disable(), await this.enable());
      }
      async loadConfig(t) {
        const e = await this.configManager.get();
        if (!e) throw new Error("failed getting config");
        {
          const r = [];
          e.providers.map((t) => r.push(...t.sources)), await this.addScripts(r, t, e.resourceTypes);
        }
      }
      startMonitor(t) {
        (this.requestListener = (e) => {
          if (e && e.url && c.MONITORED_REQ_TYPES.has(e.type))
            try {
              if (e.tabId < 0) return;
              if (!this.blockedDomains.has(Object(a.c)(e.url))) return;
              const { originUrl: r } = e;
              let { initiator: n } = e;
              if (((n = Object(a.c)(n || r)), !n)) return;
              const i = { tabId: e.tabId, initiator: n, url: e.url, type: e.type };
              t && t(i);
            } catch (t) {
              console.error("requestListener => " + t);
            }
        }),
          (this.requestListener = this.requestListener.bind(this)),
          n.BrowserAPI.webRequest.onBeforeRequest.addListener(this.requestListener, { urls: ["*://*/*"] });
      }
      stopMonitor() {
        n.BrowserAPI.webRequest.onBeforeRequest.removeListener(this.requestListener);
      }
      async addScripts(t, e, r) {
        const n = [...c.DEFAULT_EXCLUDED_DOMAINS, ...e, "null"],
          i = [],
          s = [];
        this.blockedDomains.clear(),
          t.forEach((t) => {
            const e = sourceToRule(t, this.uniqueRuleId, n, r);
            i.push(e.getRuleId()), s.push(e.getRule()), this.blockedDomains.add(Object(a.c)(e.url));
          }),
          await this.dnrWrapper.updateDynamicRules({ removeRuleIds: i, addRules: s });
      }
      async reset() {
        const t = (await this.dnrWrapper.getDynamicRules())
          .map((t) => t.id)
          .filter((t) =>
            (function isRelevantId(t, e) {
              const r = t.toString();
              if (r.length > 4) {
                return r.substring(r.length - 4, r.length) === e.toString();
              }
              return !1;
            })(t, this.uniqueRuleId)
          );
        await this.dnrWrapper.updateDynamicRules({ removeRuleIds: t });
      }
    };
    let E = c;
    (E.MONITORED_REQ_TYPES = new Set([s.SCRIPT])), (E.DEFAULT_EXCLUDED_DOMAINS = ["poperblocker.com"]);
  },
  83: function (t, e, r) {
    "use strict";
    r.d(e, "b", function () {
      return setDefaultConfig;
    }),
      r.d(e, "c", function () {
        return syncConfigOnUpdate;
      }),
      r.d(e, "a", function () {
        return d;
      });
    var n = r(0),
      i = r(15),
      s = r(19);
    const a = class extends s.a {
      constructor() {
        super(...arguments), (this.shouldBeDisplayed = !1);
      }
      getKey() {
        return n.h.WHATS_NEW;
      }
      getLegacyKeys() {
        return [];
      }
      toDTO() {
        return { shouldBeDisplayed: this.shouldBeDisplayed };
      }
      getVersion() {
        return 1;
      }
      migrate(t) {}
      async enable() {
        return (this.shouldBeDisplayed = !0), await this.save(), this;
      }
      async disable() {
        return (this.shouldBeDisplayed = !1), await this.save(), this;
      }
      getShouldBeDisplayed() {
        return this.shouldBeDisplayed;
      }
    };
    let o = a;
    o.getDefault = () => new a();
    var c = r(13),
      E = r(84),
      u = r(76),
      _ = r(54),
      l = Object.defineProperty,
      O = Object.getOwnPropertySymbols,
      T = Object.prototype.hasOwnProperty,
      h = Object.prototype.propertyIsEnumerable,
      __defNormalProp = (t, e, r) => (e in t ? l(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r)),
      __spreadValues = (t, e) => {
        for (var r in e || (e = {})) T.call(e, r) && __defNormalProp(t, r, e[r]);
        if (O) for (var r of O(e)) h.call(e, r) && __defNormalProp(t, r, e[r]);
        return t;
      };
    const d = {
        whitelist: [],
        socialContentKeyWords: [],
        doNotShowNotifyList: {},
        overlayBlockedList: {},
        lastNotificationDisplay: {},
        counterBlockedSites: {},
        totalBlocksByType: {
          pop: 0,
          win: 0,
          tab: 0,
          overlay: 0,
          ad: 0,
          cookie: 0,
          fbAd: 0,
          linkedinAd: 0,
          twitterAd: 0,
          tracker: 0,
          instagramAd: 0,
          socialContent: 0,
          youtubeAd: 0,
          keywords: 0
        },
        totalBlocksByTabId: {},
        numOfBlocks: 0,
        counterUnBlockedSites: {},
        totalUnBlocksByType: {
          pop: 0,
          win: 0,
          tab: 0,
          overlay: 0,
          ad: 0,
          cookie: 0,
          fbAd: 0,
          linkedinAd: 0,
          twitterAd: 0,
          tracker: 0,
          instagramAd: 0,
          socialContent: 0,
          youtubeAd: 0,
          keywords: 0
        },
        numOfUnBlocks: 0,
        paused: !1,
        settings: {
          isOptIn: void 0,
          showBadge: !0,
          showNotifications: !0,
          detectOverlays: !1,
          enableContextMenu: !0,
          enableSiteExperience: !1,
          popups: !0,
          hideElements: !0,
          cookieCrumbler: !1,
          facebookAdds: !1,
          adsBlocker: !1,
          trackersBlocker: !1,
          pushNotification: !1,
          socialContentBlocker: !1,
          youtubeBlocker: !1
        },
        isFirstBlockAdds: !0,
        rating: { showCount: 0, nextDisplay: n.F.AFTER, complete: !1 },
        siteExperience: "clean"
      },
      setDefaultConfig = () => {
        chrome.storage.local.set(d);
        const t = Date.now();
        i.a
          .getDefault(c.a.onTrialEnded)
          .loadAndUpdate()
          .then((t) => {
            (t.lastDisplayed = Date.now() - (n.x + 18e5)), t.save();
          }),
          o.getDefault().disable(),
          E.a.getDefault().init(),
          u.a.getDefault().init(),
          _.a.getDefault().enable();
        const e = { installTime: t },
          r = { newUser: !0, lastUpdateTime: t, count: 0, cycle: 0, coolDown: !1 };
        chrome.storage.local.set({ [n.h.GENERAL_DATA]: e, [n.h.PROMO_COUPON]: r });
      },
      syncConfigOnUpdate = async () => {
        chrome.storage.local.get(null, async (t) => {
          var e, r, i, s;
          const a = {
            whitelist: [],
            socialContentKeyWords: [],
            numOfBlocks: 0,
            paused: !1,
            counterBlockedSites: {},
            settings: d.settings,
            isFirstBlockAdds: !0,
            totalBlocksByType: d.totalBlocksByType,
            totalBlocksByTabId: d.totalBlocksByTabId,
            numOfUnBlocks: 0,
            counterUnBlockedSites: {},
            totalUnBlocksByType: d.totalUnBlocksByType
          };
          o.getDefault().enable();
          (await u.a.getDefault().load()).initIfNeeded(),
            chrome.storage.local.set({ [n.h.FIRST_POPUP_BLOCK]: !0 }),
            t.pb_numOfBlocks >= 0 && !t.settings
              ? ((a.numOfBlocks = t.pb_numOfBlocks),
                (a.settings.isOptIn = t.pb_detectOverlays || "In" === t.isOpted),
                (a.settings.detectOverlays = t.pb_detectOverlays || "In" === t.isOpted),
                t.pb_totalBlocksByType &&
                  ((a.totalBlocksByType = {
                    pop: t.pb_totalBlocksByType.pop,
                    win: t.pb_totalBlocksByType.win,
                    tab: t.pb_totalBlocksByType.tab,
                    overlay: t.pb_totalBlocksByType.overlay,
                    ad: t.pb_totalBlocksByType.ad,
                    cookie: t.pb_totalBlocksByType.cookie,
                    fbAd: t.pb_totalBlocksByType.fbAd,
                    twitterAd: t.pb_totalBlocksByType.twitterAd,
                    linkedinAd: t.pb_totalBlocksByType.linkedinAd,
                    instagramAd: t.pb_totalBlocksByType.instagramAd,
                    tracker: t.pb_totalBlocksByType.tracker,
                    socialContent: t.pb_totalBlocksByType.socialContent,
                    youtubeAd: t.pb_totalBlocksByType.youtubeAd,
                    keywords: t.pb_totalBlocksByType.keywords
                  }),
                  (a.counterBlockedSites = t.pb_counterBlockedSites)),
                t.pb_whitelistManager && t.pb_whitelistManager.userWhitelist && (a.whitelist = t.pb_whitelistManager.userWhitelist || []),
                chrome.storage.local.set(__spreadValues(__spreadValues({}, d), a)))
              : t.pb_numOfBlocks >= 0
              ? ((t.settings.isOptIn = t.pb_detectOverlays || "In" === t.isOpted),
                (t.settings.popups = void 0 === (null == (e = t.settings) ? void 0 : e.popups) || t.settings.popups),
                (t.settings.hideElements = void 0 === (null == (r = t.settings) ? void 0 : r.hideElements) || t.settings.hideElements),
                (t.settings.detectOverlays = t.pb_detectOverlays || "In" === t.isOpted),
                chrome.storage.local.set({ settings: __spreadValues({}, t.settings) }))
              : ((t.settings.popups = void 0 === (null == (i = t.settings) ? void 0 : i.popups) || t.settings.popups),
                (t.settings.hideElements = void 0 === (null == (s = t.settings) ? void 0 : s.hideElements) || t.settings.hideElements),
                chrome.storage.local.set({ settings: __spreadValues({}, t.settings) }));
        });
      };
  },
  84: function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return a;
    });
    var n = r(19),
      i = r(0);
    const s = class extends n.a {
      constructor() {
        super(...arguments), (this.isDisplayed = !1), (this.installTime = -1);
      }
      getKey() {
        return i.h.PIN_TASKBAR_DATA;
      }
      getLegacyKeys() {
        return [];
      }
      toDTO() {
        return { isDisplayed: this.isDisplayed, installTime: this.installTime };
      }
      getVersion() {
        return 1;
      }
      migrate(t) {}
      async setDisplayed(t) {
        return (this.isDisplayed = t), await this.save(), this;
      }
      isTimeToDisplayPromo() {
        return !this.isDisplayed;
      }
      async init() {
        return (this.installTime = Date.now()), (this.isDisplayed = !1), await this.save(), this;
      }
    };
    let a = s;
    a.getDefault = () => new s();
  },
  85: function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(7),
      s = r(19);
    const a = class extends s.a {
      constructor() {
        super(...arguments), (this.states = {});
      }
      getKey() {
        return n.h.BADGE_STATES;
      }
      getLegacyKeys() {
        return [];
      }
      toDTO() {
        return { states: this.states };
      }
      getVersion() {
        return 1;
      }
      migrate(t) {}
      getBadgeStates() {
        return this.states;
      }
      async addState(t, e) {
        return (this.states[t] = e), await this.save(), this;
      }
      async removeState(t) {
        return delete this.states[t], await this.save(), this;
      }
    };
    let o = a;
    o.getOrCreate = async () => await new a().load();
    var c = r(23),
      E = r(3);
    e.a = new (class favicon_manager_FaviconManager {
      async updateBadge() {
        const t = await this.getDisplayState(),
          e = (await i.BrowserAPI.tabs.query({})).sort((t) => (t.active ? -1 : 1));
        this.initializeBadgeProperties(t);
        const r = await c.a.isOptIn(),
          n = await Object(E.F)();
        e.forEach((e) => {
          const s = this.getTextBadgePerTab(t, e.id);
          n || r
            ? i.BrowserAPI.action.setBadgeText({ text: s, tabId: e.id })
            : (i.BrowserAPI.action.setBadgeText({ text: "!", tabId: e.id }),
              i.BrowserAPI.action.setBadgeTextColor({ color: "white" }),
              i.BrowserAPI.action.setBadgeBackgroundColor({ color: "#D80032" }));
        });
      }
      async addState(t, e, r) {
        let i = n.f[t];
        i.Tabs && e && r && (i = this.updateTextPerTab(n.f[t], e, r));
        const s = await o.getOrCreate();
        await s.addState(t, i), this.updateBadge();
      }
      async removeState(t) {
        (await o.getOrCreate()).removeState(t), this.updateBadge();
      }
      async clearBadge() {
        const t = await this.getDisplayState();
        this.initializeBadgeProperties(t), this.updateBadge();
      }
      getTextBadgePerTab(t, e) {
        if (!t.Tabs) return t.InitialText;
        const r = t.Tabs.findIndex((t) => t.tabId == e);
        return -1 === r ? t.InitialText : t.Tabs[r].text;
      }
      initializeBadgeProperties(t) {
        i.BrowserAPI.action.setIcon({ path: t.BadgeIcon }),
          i.BrowserAPI.action.setBadgeText({ text: t.InitialText }),
          i.BrowserAPI.action.setBadgeTextColor({ color: t.TextColor }),
          i.BrowserAPI.action.setBadgeBackgroundColor({ color: t.BadgeColor });
      }
      async getTotalBlocksPerTab() {
        const t = await new o().load();
        await t.save();
      }
      async getDisplayState() {
        const t = (await o.getOrCreate()).getBadgeStates();
        let e = null;
        return (
          Object.keys(t).forEach((r) => {
            (!e || t[r].Priority > e.Priority) && (e = t[r]);
          }),
          e
        );
      }
      updateTextPerTab(t, e, r) {
        if (t.Tabs && e && r) {
          const n = t.Tabs.findIndex((t) => t.tabId == r.id);
          -1 === n ? t.Tabs.push({ tabId: r.id, text: e }) : (t.Tabs[n].text = e);
        }
        return t;
      }
    })();
  },
  86: function (t, e, r) {
    "use strict";
    r.d(e, "b", function () {
      return getInstallSource;
    }),
      r.d(e, "a", function () {
        return getExtensionInfo;
      });
    var n = r(6),
      i = (r(0), r(21)),
      s = r(13),
      a = r(20),
      o = r(31);
    const getInstallSource = async () =>
        new Promise((t) => {
          chrome.windows.getAll({ populate: !0 }, (e) => {
            let r,
              n,
              i = "other";
            e.forEach((t) =>
              (t.tabs || []).some((t) => {
                const e = t.url || "";
                (n = "https://chrome.google.com/webstore/detail.*" + chrome.runtime.id), (r = new RegExp(n, "g"));
                return !!r.exec(e) && ((i = "chrome_store"), !0);
              })
            ),
              t(i);
          });
        }),
      getExtensionInfo = async () => {
        const { version: t } = Object(n.g)(),
          e = await Object(i.a)(),
          r = await s.a.getFeaturesTrialState(),
          c = await Object(a.c)(),
          E = await o.a.getOptInCurrentState();
        return { version: t, uuid: e.uuid, user: c, trial: r, optInStatus: E };
      };
  },
  87: function (t, e, r) {
    "use strict";
    function hash(t) {
      return (
        ((function hashFnv32a(t) {
          let e = 2166136261;
          const r = t.length;
          for (let n = 0; n < r; n++) (e ^= t.charCodeAt(n)), (e += (e << 1) + (e << 4) + (e << 7) + (e << 8) + (e << 24));
          return e >>> 0;
        })(t) %
          1e3) /
        1e3
      );
    }
    function getEqualWeights(t) {
      return t <= 0 ? [] : new Array(t).fill(1 / t);
    }
    r.d(e, "a", function () {
      return growthbook_ABTests;
    });
    const n = {};
    function evalCondition(t, e) {
      if ("$or" in e) return evalOr(t, e.$or);
      if ("$nor" in e) return !evalOr(t, e.$nor);
      if ("$and" in e)
        return (function evalAnd(t, e) {
          for (let r = 0; r < e.length; r++) if (!evalCondition(t, e[r])) return !1;
          return !0;
        })(t, e.$and);
      if ("$not" in e) return !evalCondition(t, e.$not);
      for (const [r, n] of Object.entries(e)) if (!evalConditionValue(n, getPath(t, r))) return !1;
      return !0;
    }
    function getPath(t, e) {
      const r = e.split(".");
      let n = t;
      for (let t = 0; t < r.length; t++) {
        if (!n || "object" != typeof n || !(r[t] in n)) return null;
        n = n[r[t]];
      }
      return n;
    }
    function evalConditionValue(t, e) {
      if ("string" == typeof t) return e + "" === t;
      if ("number" == typeof t) return 1 * e === t;
      if ("boolean" == typeof t) return !!e === t;
      if (Array.isArray(t) || !isOperatorObject(t)) return JSON.stringify(e) === JSON.stringify(t);
      for (const r in t) if (!evalOperatorCondition(r, e, t[r])) return !1;
      return !0;
    }
    function isOperatorObject(t) {
      const e = Object.keys(t);
      return e.length > 0 && e.filter((t) => "$" === t[0]).length === e.length;
    }
    function evalOperatorCondition(t, e, r) {
      switch (t) {
        case "$eq":
          return e === r;
        case "$ne":
          return e !== r;
        case "$lt":
          return e < r;
        case "$lte":
          return e <= r;
        case "$gt":
          return e > r;
        case "$gte":
          return e >= r;
        case "$exists":
          return r ? null !== e : null === e;
        case "$in":
          return r.includes(e);
        case "$nin":
          return !r.includes(e);
        case "$not":
          return !evalConditionValue(r, e);
        case "$size":
          return !!Array.isArray(e) && evalConditionValue(r, e.length);
        case "$elemMatch":
          return (function elemMatch(t, e) {
            if (!Array.isArray(t)) return !1;
            const r = isOperatorObject(e) ? (t) => evalConditionValue(e, t) : (t) => evalCondition(t, e);
            for (let e = 0; e < t.length; e++) if (t[e] && r(t[e])) return !0;
            return !1;
          })(e, r);
        case "$all":
          if (!Array.isArray(e)) return !1;
          for (let t = 0; t < r.length; t++) {
            let n = !1;
            for (let i = 0; i < e.length; i++)
              if (evalConditionValue(r[t], e[i])) {
                n = !0;
                break;
              }
            if (!n) return !1;
          }
          return !0;
        case "$regex":
          try {
            return (function getRegex(t) {
              return n[t] || (n[t] = new RegExp(t.replace(/([^\\])\//g, "$1\\/"))), n[t];
            })(r).test(e);
          } catch (t) {
            return !1;
          }
        case "$type":
          return (
            (function getType(t) {
              if (null === t) return "null";
              if (Array.isArray(t)) return "array";
              const e = typeof t;
              return ["string", "number", "boolean", "object", "undefined"].includes(e) ? e : "unknown";
            })(e) === r
          );
        default:
          return console.error("Unknown operator: " + t), !1;
      }
    }
    function evalOr(t, e) {
      if (!e.length) return !0;
      for (let r = 0; r < e.length; r++) if (evalCondition(t, e[r])) return !0;
      return !1;
    }
    var i = Object.defineProperty,
      s = Object.getOwnPropertySymbols,
      a = Object.prototype.hasOwnProperty,
      o = Object.prototype.propertyIsEnumerable,
      __defNormalProp = (t, e, r) => (e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r)),
      __spreadValues = (t, e) => {
        for (var r in e || (e = {})) a.call(e, r) && __defNormalProp(t, r, e[r]);
        if (s) for (var r of s(e)) o.call(e, r) && __defNormalProp(t, r, e[r]);
        return t;
      };
    function _defineProperty(t, e, r) {
      return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t;
    }
    const c = "undefined" != typeof window && "undefined" != typeof document,
      base64ToBuf = (t) => Uint8Array.from(atob(t), (t) => t.charCodeAt(0));
    class GrowthBook_GrowthBook {
      constructor() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        _defineProperty(this, "_renderer", null),
          _defineProperty(this, "_trackedExperiments", new Set()),
          _defineProperty(this, "_trackedFeatures", {}),
          _defineProperty(this, "debug", !1),
          _defineProperty(this, "subscriptions", new Set()),
          _defineProperty(this, "_rtQueue", []),
          _defineProperty(this, "_rtTimer", 0),
          _defineProperty(this, "assigned", new Map()),
          _defineProperty(this, "_forcedFeatureValues", new Map()),
          _defineProperty(this, "_attributeOverrides", {}),
          (this.context = t),
          c && t.enableDevMode && ((window._growthbook = this), document.dispatchEvent(new Event("gbloaded")));
      }
      render() {
        this._renderer && this._renderer();
      }
      setFeatures(t) {
        (this.context.features = t), this.render();
      }
      async setEncryptedFeatures(t, e, r) {
        if (!(r = r || (globalThis.crypto && globalThis.crypto.subtle))) throw new Error("No SubtleCrypto implementation found");
        try {
          const n = await r.importKey("raw", base64ToBuf(e), { name: "AES-CBC", length: 128 }, !0, ["encrypt", "decrypt"]),
            [i, s] = t.split("."),
            a = await r.decrypt({ name: "AES-CBC", iv: base64ToBuf(i) }, n, base64ToBuf(s));
          this.setFeatures(JSON.parse(new TextDecoder().decode(a)));
        } catch (t) {
          throw new Error("Failed to decrypt features");
        }
      }
      setAttributes(t) {
        (this.context.attributes = t), this.render();
      }
      setAttributeOverrides(t) {
        (this._attributeOverrides = t), this.render();
      }
      setForcedVariations(t) {
        (this.context.forcedVariations = t || {}), this.render();
      }
      setForcedFeatures(t) {
        (this._forcedFeatureValues = t), this.render();
      }
      getAttributes() {
        return __spreadValues(__spreadValues({}, this.context.attributes), this._attributeOverrides);
      }
      getFeatures() {
        return this.context.features || {};
      }
      subscribe(t) {
        return (
          this.subscriptions.add(t),
          () => {
            this.subscriptions.delete(t);
          }
        );
      }
      getAllResults() {
        return new Map(this.assigned);
      }
      destroy() {
        this.subscriptions.clear(),
          this.assigned.clear(),
          this._trackedExperiments.clear(),
          (this._trackedFeatures = {}),
          (this._rtQueue = []),
          this._rtTimer && clearTimeout(this._rtTimer),
          c && window._growthbook === this && delete window._growthbook;
      }
      setRenderer(t) {
        this._renderer = t;
      }
      forceVariation(t, e) {
        (this.context.forcedVariations = this.context.forcedVariations || {}), (this.context.forcedVariations[t] = e), this.render();
      }
      run(t) {
        const e = this._run(t, null);
        return this.fireSubscriptions(t, e), e;
      }
      fireSubscriptions(t, e) {
        const r = t.key,
          n = this.assigned.get(r);
        (n && n.result.inExperiment === e.inExperiment && n.result.variationId === e.variationId) ||
          (this.assigned.set(r, { experiment: t, result: e }),
          this.subscriptions.forEach((r) => {
            try {
              r(t, e);
            } catch (t) {
              console.error(t);
            }
          }));
      }
      trackFeatureUsage(t, e) {
        if ("override" === e.source) return;
        const r = JSON.stringify(e.value);
        if (this._trackedFeatures[t] !== r) {
          if (((this._trackedFeatures[t] = r), this.context.onFeatureUsage))
            try {
              this.context.onFeatureUsage(t, e);
            } catch (t) {}
          c &&
            window.fetch &&
            (this._rtQueue.push({ key: t, on: e.on }),
            this._rtTimer ||
              (this._rtTimer = window.setTimeout(() => {
                this._rtTimer = 0;
                const t = [...this._rtQueue];
                (this._rtQueue = []),
                  this.context.realtimeKey &&
                    window
                      .fetch(
                        "https://rt.growthbook.io/?key="
                          .concat(this.context.realtimeKey, "&events=")
                          .concat(encodeURIComponent(JSON.stringify(t))),
                        { cache: "no-cache", mode: "no-cors" }
                      )
                      .catch(() => {});
              }, this.context.realtimeInterval || 2e3)));
        }
      }
      getFeatureResult(t, e, r, n) {
        let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const a = { value: e, on: !!e, off: !e, source: r, ruleId: n || "" };
        return i && (a.experiment = i), s && (a.experimentResult = s), this.trackFeatureUsage(t, a), a;
      }
      isOn(t) {
        return this.evalFeature(t).on;
      }
      isOff(t) {
        return this.evalFeature(t).off;
      }
      getFeatureValue(t, e) {
        var r;
        return null !== (r = this.evalFeature(t).value) && void 0 !== r ? r : e;
      }
      feature(t) {
        return this.evalFeature(t);
      }
      evalFeature(t) {
        var e;
        if (this._forcedFeatureValues.has(t)) return this.getFeatureResult(t, this._forcedFeatureValues.get(t), "override");
        if (!this.context.features || !this.context.features[t]) return this.getFeatureResult(t, null, "unknownFeature");
        const r = this.context.features[t];
        if (r.rules)
          for (const e of r.rules) {
            if (e.condition && !this.conditionPasses(e.condition)) continue;
            if ("force" in e) {
              if ("coverage" in e) {
                const { hashValue: r } = this.getHashAttribute(e.hashAttribute);
                if (!r) continue;
                if (hash(r + t) > e.coverage) continue;
              }
              return this.getFeatureResult(t, e.force, "force", e.id);
            }
            if (!e.variations) continue;
            const r = { variations: e.variations, key: e.key || t };
            "coverage" in e && (r.coverage = e.coverage),
              e.weights && (r.weights = e.weights),
              e.hashAttribute && (r.hashAttribute = e.hashAttribute),
              e.namespace && (r.namespace = e.namespace);
            const n = this._run(r, t);
            if ((this.fireSubscriptions(r, n), n.inExperiment)) return this.getFeatureResult(t, n.value, "experiment", e.id, r, n);
          }
        return this.getFeatureResult(t, null !== (e = r.defaultValue) && void 0 !== e ? e : null, "defaultValue");
      }
      conditionPasses(t) {
        return evalCondition(this.getAttributes(), t);
      }
      _run(t, e) {
        var r;
        const n = t.key,
          i = t.variations.length;
        if (i < 2) return this.getResult(t, -1, !1, e);
        if (!1 === this.context.enabled) return this.getResult(t, -1, !1, e);
        t = this.mergeOverrides(t);
        const s = (function getQueryStringOverride(t, e, r) {
          if (!e) return null;
          const n = e.split("?")[1];
          if (!n) return null;
          const i = n
            .replace(/#.*/, "")
            .split("&")
            .map((t) => t.split("=", 2))
            .filter((e) => {
              let [r] = e;
              return r === t;
            })
            .map((t) => {
              let [, e] = t;
              return parseInt(e);
            });
          return i.length > 0 && i[0] >= 0 && i[0] < r ? i[0] : null;
        })(n, this.getContextUrl(), i);
        if (null !== s) return this.getResult(t, s, !1, e);
        if (this.context.forcedVariations && n in this.context.forcedVariations) {
          const r = this.context.forcedVariations[n];
          return this.getResult(t, r, !1, e);
        }
        if ("draft" === t.status || !1 === t.active) return this.getResult(t, -1, !1, e);
        const { hashValue: a } = this.getHashAttribute(t.hashAttribute);
        if (!a) return this.getResult(t, -1, !1, e);
        if (
          t.namespace &&
          !(function inNamespace(t, e) {
            const r = hash(t + "__" + e[0]);
            return r >= e[1] && r < e[2];
          })(a, t.namespace)
        )
          return this.getResult(t, -1, !1, e);
        if (
          t.include &&
          !(function isIncluded(t) {
            try {
              return t();
            } catch (t) {
              return console.error(t), !1;
            }
          })(t.include)
        )
          return this.getResult(t, -1, !1, e);
        if (t.condition && !this.conditionPasses(t.condition)) return this.getResult(t, -1, !1, e);
        if (t.groups && !this.hasGroupOverlap(t.groups)) return this.getResult(t, -1, !1, e);
        if (t.url && !this.urlIsValid(t.url)) return this.getResult(t, -1, !1, e);
        const o = (function getBucketRanges(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
              r = arguments.length > 2 ? arguments[2] : void 0;
            e < 0 ? (e = 0) : e > 1 && (e = 1);
            const n = getEqualWeights(t);
            (r = r || n), r.length !== t && (r = n);
            const i = r.reduce((t, e) => e + t, 0);
            (i < 0.99 || i > 1.01) && (r = n);
            let s = 0;
            return r.map((t) => {
              const r = s;
              return (s += t), [r, r + e * t];
            });
          })(i, null !== (r = t.coverage) && void 0 !== r ? r : 1, t.weights),
          c = (function chooseVariation(t, e) {
            for (let r = 0; r < e.length; r++) if (t >= e[r][0] && t < e[r][1]) return r;
            return -1;
          })(hash(a + n), o);
        if (c < 0) return this.getResult(t, -1, !1, e);
        var E;
        if ("force" in t) return this.getResult(t, null !== (E = t.force) && void 0 !== E ? E : -1, !1, e);
        if (this.context.qaMode) return this.getResult(t, -1, !1, e);
        if ("stopped" === t.status) return this.getResult(t, -1, !1, e);
        const u = this.getResult(t, c, !0, e);
        return this.track(t, u), u;
      }
      log(t, e) {
        this.debug && (this.context.log ? this.context.log(t, e) : console.log(t, e));
      }
      track(t, e) {
        if (!this.context.trackingCallback) return;
        const r = t.key,
          n = e.hashAttribute + e.hashValue + r + e.variationId;
        if (!this._trackedExperiments.has(n)) {
          this._trackedExperiments.add(n);
          try {
            this.context.trackingCallback(t, e);
          } catch (t) {
            console.error(t);
          }
        }
      }
      mergeOverrides(t) {
        const e = t.key,
          r = this.context.overrides;
        return (
          r &&
            r[e] &&
            "string" == typeof (t = Object.assign({}, t, r[e])).url &&
            (t.url = (function getUrlRegExp(t) {
              try {
                const e = t.replace(/([^\\])\//g, "$1\\/");
                return new RegExp(e);
              } catch (t) {
                return void console.error(t);
              }
            })(t.url)),
          t
        );
      }
      getHashAttribute(t) {
        const e = t || "id";
        let r = "";
        return (
          this._attributeOverrides[e]
            ? (r = this._attributeOverrides[e])
            : this.context.attributes
            ? (r = this.context.attributes[e] || "")
            : this.context.user && (r = this.context.user[e] || ""),
          { hashAttribute: e, hashValue: r }
        );
      }
      getResult(t, e, r, n) {
        let i = !0;
        (e < 0 || e >= t.variations.length) && ((e = 0), (i = !1));
        const { hashAttribute: s, hashValue: a } = this.getHashAttribute(t.hashAttribute);
        return { featureId: n, inExperiment: i, hashUsed: r, variationId: e, value: t.variations[e], hashAttribute: s, hashValue: a };
      }
      getContextUrl() {
        return this.context.url || (c ? window.location.href : "");
      }
      urlIsValid(t) {
        const e = this.getContextUrl();
        if (!e) return !1;
        const r = e.replace(/^https?:\/\//, "").replace(/^[^/]*\//, "/");
        return !!t.test(e) || !!t.test(r);
      }
      hasGroupOverlap(t) {
        const e = this.context.groups || {};
        for (let r = 0; r < t.length; r++) if (e[t[r]]) return !0;
        return !1;
      }
    }
    var E = r(21),
      u = r(0),
      _ = r(3);
    class growthbook_ABTests {
      constructor() {
        this.lastFetch = 0;
        const t = !Object(_.H)();
        this.growthbookInstance = new GrowthBook_GrowthBook({ enableDevMode: t });
      }
      static getInstance() {
        return this.abTestInstance || (this.abTestInstance = new growthbook_ABTests()), this.abTestInstance;
      }
      async updateFeaturesIfNeeded() {
        const t = Date.now() - this.lastFetch >= 4 * u.q;
        (this.existData && !t) || (await this.init());
      }
      async getFeaturesFlagFromApi() {
        try {
          const t = await fetch(u.e.GROWTHBOOK);
          return { data: 200 === t.status ? await t.json() : {}, status: t.status };
        } catch (t) {
          return {};
        }
      }
      async init() {
        const t = await this.getFeaturesFlagFromApi(),
          e = await this.userId();
        if ((null == t ? void 0 : t.status) && 200 === t.status) {
          const r = t.data;
          this.growthbookInstance.setFeatures(r.features),
            this.growthbookInstance.setAttributes({ id: e }),
            (this.existData = !0),
            (this.lastFetch = Date.now());
        }
      }
      async getAllFeaturesValue() {
        const t = {};
        await this.updateFeaturesIfNeeded();
        const e = this.growthbookInstance,
          r = this.growthbookInstance.getFeatures();
        return (
          Object.keys(r).forEach((r) => {
            t[r] = e.feature(r).value;
          }),
          t
        );
      }
      async userId() {
        const t = await Object(E.b)();
        return (null == t ? void 0 : t.uuid) ? t.uuid : "";
      }
    }
  },
  88: function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return isPushNotificationPermissionGranted;
    }),
      r.d(e, "c", function () {
        return setPushNotificationBlocker;
      }),
      r.d(e, "b", function () {
        return requestPushNotificationPermission;
      });
    var n = r(0),
      i = r(3),
      s = r(21);
    const isPushNotificationPermissionGranted = async () => {
        const t = { permissions: [n.B.CONTENT_SETTINGS], origins: [n.B.ALL_URLS] };
        return await Object(i.E)(t);
      },
      setPushNotificationBlocker = (t) => {
        chrome.contentSettings.notifications.set({ primaryPattern: n.B.ALL_URLS, setting: t ? n.B.BLOCK : n.B.ASK });
        const e = t ? n.c.ANALYTICS_EVENT_TYPES.IN_SITE_PUSH_NOTIFICATION_ON : n.c.ANALYTICS_EVENT_TYPES.IN_SITE_PUSH_NOTIFICATION_OFF;
        Object(s.d)(e);
      },
      requestPushNotificationPermission = async () => {
        const t = { permissions: [n.B.CONTENT_SETTINGS], origins: [n.B.ALL_URLS] },
          e = await Object(i.T)(t),
          r = e
            ? n.c.ANALYTICS_EVENT_TYPES.IN_SITE_PUSH_NOTIFICATION_ALLOW_PERMISSIONS
            : n.c.ANALYTICS_EVENT_TYPES.IN_SITE_PUSH_NOTIFICATION_DENY_PERMISSIONS;
        Object(s.d)(r), e && setPushNotificationBlocker(e);
      };
  },
  9: function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return i;
    }),
      r.d(e, "b", function () {
        return Storage;
      });
    var n = r(7),
      i = ((t) => ((t.Local = "local"), (t.Sync = "sync"), t))(i || {});
    class Storage {
      constructor(t) {
        this.storageAreaName = t;
      }
      get(t) {
        return new Promise((e, r) => {
          this.getAll(t)
            .then((r) => {
              t || e(r), e(r && t in r ? r[t] : null);
            })
            .catch(r);
        });
      }
      getAll(...t) {
        return new Promise((e, r) => {
          n.BrowserAPI.storage[this.storageAreaName].get(t, (t) => {
            var i;
            if (t) e(t);
            else {
              const t = null == (i = n.BrowserAPI.runtime) ? void 0 : i.lastError;
              t ? r(t) : e(null);
            }
          });
        });
      }
      set(t, e) {
        return new Promise((r, i) => {
          n.BrowserAPI.storage[this.storageAreaName].set({ [t]: e }, () => {
            var t;
            const e = null == (t = n.BrowserAPI.runtime) ? void 0 : t.lastError;
            e ? i(e) : r();
          });
        });
      }
      remove(t) {
        return new Promise((e, r) => {
          let i = 0;
          t.forEach((s) => {
            n.BrowserAPI.storage[this.storageAreaName].remove(s, () => {
              var s;
              const a = null == (s = n.BrowserAPI.runtime) ? void 0 : s.lastError;
              a ? r(a) : ++i == t.length && e();
            });
          });
        });
      }
    }
    const s = new Storage("local");
    e.c = s;
  }
});
