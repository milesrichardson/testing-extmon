import {
  MSG_IS_PREMIUM,
  MSG_IS_TRIAL,
  MSG_SETTINGS_GET,
  MSG_SETTINGS_SET,
  MSG_TAB_DATA_GET,
  RELOAD_ON_CLOSE_PORT,
  SETTING_KILLSWITCH,
  SETTING_NATIVE_MESSAGING,
  SETTING_TELEMETRY_CONSENT
} from "../app-consts";
import { chrome } from "../../../utils/polyfill";
import { msgPromptNativeMsg, msgRemoveNativeMessaging } from "../../../utils/native-messaging";
export const PageType = {
  NORMAL: "NORMAL",
  SYSTEM: "SYSTEM",
  EXTENSION: "EXTENSION",
  BROWSER_GUARD: "BROWSER_GUARD",
  BLANK_NEW_TAB: "BLANK_NEW_TAB",
  CHROME_WEBSTORE: "CHROME_WEBSTORE"
};
const port = { reload: null };
export const reloadOnClose = function () {
  port.reload ||
    ((port.reload = chrome.runtime.connect({ name: RELOAD_ON_CLOSE_PORT })), console.debug("Began listening for a popup close event"));
};
const settingsGet = function (e, t, s) {
  s || (s = (e) => console.error(e)),
    chrome.runtime.sendMessage({ type: MSG_SETTINGS_GET, payload: e }, function (e) {
      !e || e.error ? s("Error calling settingsGet: " + (e ? e.error : "No response received")) : t(e.success);
    });
};
export const settingsGetAsync = (e) =>
  new Promise((t, s) => {
    chrome.runtime.sendMessage({ type: MSG_SETTINGS_GET, payload: e }, function (e) {
      !e || e.error
        ? (console.debug("SETTINGS GET ASYNC: ERROR CALLING settingsGet"),
          s(`Error calling settingsGet: ${e ? e.error : "No response received"}`))
        : t(e.success);
    });
  });
export const settingsSetAsync = (e) =>
  new Promise((t, s) => {
    chrome.runtime.sendMessage({ type: MSG_SETTINGS_SET, payload: e }, function (e) {
      !e || e.error ? s(`Error calling settingsSet: ${e ? e.error : "No response received"}`) : t(e.success);
    });
  });
export const updateCheckboxDisabledState = function (e, t) {
  $(e).prop("disabled", t), updateCheckboxParentToState(e);
};
const linkCheckboxToKillswitch = async function (e, t) {
  if (t !== SETTING_KILLSWITCH && t !== SETTING_TELEMETRY_CONSENT && t !== SETTING_NATIVE_MESSAGING && e) {
    const t = await getKillswitchStateAsync();
    $(e).prop("disabled", !1 === t);
  }
};
export const getKillswitchState = function (e) {
  settingsGet(SETTING_KILLSWITCH, e);
};
export const getKillswitchStateAsync = () => settingsGetAsync(SETTING_KILLSWITCH);
export const updateCheckboxParentToState = (e) => {
  let t = $(e).parent();
  e.checked ? t.addClass("checked") : t.removeClass("checked"),
    !0 === $(e).prop("disabled") ? t.addClass("disabled") : t.removeClass("disabled");
};
const bindSettingsCheckboxEvent = async function (e, t, s) {
    e.addEventListener("change", async () => {
      let o = $(e).prop("disabled");
      console.debug("CB: Default state of " + e.id + " is " + (o ? "disabled" : "active")), $(e).prop("disabled", !0);
      let r = {};
      (r[t] = $(e).prop("checked")),
        updateCheckboxParentToState(e),
        t === SETTING_NATIVE_MESSAGING && (r[t] ? (r[t] = await msgPromptNativeMsg()) : (r[t] = await msgRemoveNativeMessaging())),
        t !== SETTING_KILLSWITCH && (await settingsSetAsync(r)),
        console.debug("CB: Setting has been stored for " + e.id),
        s && s(),
        setTimeout(() => {
          console.debug("CB: Restoring " + e.id + " to " + (o ? "disabled" : "active")), updateCheckboxDisabledState(e, o);
        }, 750),
        t !== SETTING_KILLSWITCH && reloadOnClose();
    });
  },
  validatePageForInjection = (e) =>
    new Promise((t, s) => {
      let o = {
        id: e.id,
        url: e.url,
        isValid: !0,
        pageType: PageType.NORMAL,
        host: e.url,
        blocked: { totals: {} },
        redirectType: null,
        redirectSubType: null
      };
      if (o.url.startsWith("chrome://"))
        (o.isValid = !1), o.url.startsWith("chrome://newtab/") ? (o.pageType = PageType.BLANK_NEW_TAB) : (o.pageType = PageType.SYSTEM);
      else if (o.url.startsWith("chrome-extension://") || o.url.startsWith("moz-extension://") || o.url.startsWith("extension://"))
        if (
          ((o.isValid = !1),
          o.url.startsWith(`chrome-extension://${chrome.runtime.id}/`) ||
            (window.browser && o.url.startsWith(`moz-extension://${chrome.i18n.getMessage("@@extension_id")}/`)) ||
            o.url.startsWith(`extension://${chrome.runtime.id}/`))
        ) {
          o.pageType = PageType.BROWSER_GUARD;
          let t = new URL(e.url).searchParams;
          t.has("url") && (o.url = t.get("url")),
            t.has("host") && (o.host = t.get("host")),
            t.has("type") && (o.redirectType = t.get("type")),
            t.has("subtype") && (o.redirectSubType = t.get("subtype"));
        } else o.pageType = PageType.EXTENSION;
      else
        o.url.startsWith("about:")
          ? ((o.isValid = !1),
            ["about:newtab", "about:blank"].some((e) => o.url.startsWith(e))
              ? (o.pageType = PageType.BLANK_NEW_TAB)
              : (o.pageType = PageType.SYSTEM))
          : o.url.startsWith("edge://")
          ? ((o.isValid = !1), o.url.startsWith("edge://newtab/") ? (o.pageType = PageType.BLANK_NEW_TAB) : (o.pageType = PageType.SYSTEM))
          : o.url.indexOf("chrome.google.com/webstore") >= 0 && ((o.isValid = !1), (o.pageType = PageType.CHROME_WEBSTORE));
      t(o);
    });
export const sharedAddBackground = () => {
  document.body.classList.add("mb-landscape");
};
export const sharedRemoveBackground = () => {
  document.body.classList.remove("mb-landscape");
};
export const sharedSwitchToAppBar = (e, t) => {
  $(".mb-current-website-tab span").text(e),
    $(".header-container-tabs .first-tab").removeAttr("style"),
    $(".header-container-tabs .first-tab").removeClass("mb-tabs"),
    $(".header-container-tabs .first-tab").addClass("mb-dynamic-tab"),
    !0 === t && $(".mb-current-website-tab span").addClass("needs-premium"),
    $("#dashboard-stats-tab").css("display", "none"),
    $("#dashboard-upsell-tab").css("display", "none"),
    $(".back-span").css("display", "flex"),
    $(".globe").css("display", "none"),
    $(".mb-stats-tab").addClass("hidden");
};
export const linkCheckboxToSetting = async function (e, t, s, o) {
  s && $(s).addClass("active");
  let r = document.getElementById(e);
  if (!r) return;
  await linkCheckboxToKillswitch(r, t);
  const a = await settingsGetAsync(t);
  (r.checked = t !== SETTING_NATIVE_MESSAGING ? !1 !== a : a),
    updateCheckboxParentToState(r),
    s && $(s).removeClass("active"),
    await bindSettingsCheckboxEvent(r, t, o);
};
export const isTrial = (e, t) => {
  t || (t = (e) => console.error(e)),
    chrome.runtime.sendMessage({ type: MSG_IS_TRIAL }, function (s) {
      !s || s.error ? t("Error calling isTrial: " + (s ? s.error : "No response received")) : e(s.success);
    });
};
export const isPremium = () =>
  new Promise((e, t) => {
    chrome.runtime.sendMessage({ type: MSG_IS_PREMIUM }, function (s) {
      !s || s.error
        ? (console.error("Failed to check if premium: " + s.error), t(s.error))
        : (console.debug("Is premium: " + s.success), e(s.success));
    });
  });
export const getCurrentTabData = (e, t) => {
  t || (t = (e) => console.error(e)),
    new Promise((e) => {
      chrome.tabs.query({ currentWindow: !0, active: !0 }, function (t) {
        e(t);
      });
    })
      .then((e) => validatePageForInjection(e[0]))
      .then((t) => {
        t.isValid
          ? chrome.runtime.sendMessage({ type: MSG_TAB_DATA_GET, payload: t.id }, function (s) {
              !s || s.error
                ? (e(t), console.error("Error calling getCurrentTabData: " + (s ? s.error : "No response received")))
                : ((t.blocked = s.success.blocked), (t.host = s.success.host), (t.excluded = s.success.excluded), e(t));
            })
          : e(t);
      })
      .catch((e) => {
        t(e);
      });
};
export const ellipsisSlice = (e, t = 22) => `${e.slice(0, t)}...`;
