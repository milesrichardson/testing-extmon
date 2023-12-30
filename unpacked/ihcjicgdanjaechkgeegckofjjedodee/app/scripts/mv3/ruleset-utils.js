import { chrome } from "../../../utils/polyfill";
import {
  MV3_PROTECTION_ADS,
  MV3_PROTECTION_MALWARE,
  MV3_FEATURE_ADS_TRACKERS,
  MV3_FEATURE_MALWARE,
  MV3_FEATURE_ALL,
  MV3_FEATURE_MALICIOUS_NOTIFICATIONS,
  MV3_FEATURE_MONTHLY_NOTIFICATIONS
} from "../app-consts";
import { browserName } from "../../../utils/utils";
export const optionalRulesets = ["mbgc.mv3.ads_2", "mbgc.mv3.malware_1"];
export const defaultRulesets = ["mbgc.mv3.whitelist_1", "mbgc.mv3.ads_1"];
const featureRulesets = {
  [MV3_FEATURE_MALWARE]: ["mbgc.mv3.malware_1"],
  [MV3_FEATURE_ADS_TRACKERS]: ["mbgc.mv3.ads_2"],
  [MV3_FEATURE_ALL]: optionalRulesets
};
export const tryInitMV3Rulesets = async (e) => {
  console.debug("INDB: INITMV3RULESETS WITH: ", e);
  const t = featureRulesets[e] || optionalRulesets;
  console.debug("INDB: INITMV3RULESETS RULESETS: ", t);
  try {
    await tryUpdateEnabledRulesets(t);
  } catch (e) {
    throw (console.error("INDB: initMV3Rulesets failed with error: ", e), showRulesetErrorPage(), e);
  }
};
export const tryUpdateEnabledRulesets = async (e) => {
  if (0 === e.length) return;
  let t = 0;
  const s = await chrome.declarativeNetRequest.getAvailableStaticRuleCount();
  for (console.debug("RULESET: Available rule count: ", s); s >= 3e4 && t < e.length; ) {
    await chrome.declarativeNetRequest.updateEnabledRulesets({ enableRulesetIds: [e[t]] }),
      console.debug("RULESET: Enabled ruleset ", e[t]);
    const s = await chrome.declarativeNetRequest.getAvailableStaticRuleCount();
    console.debug("RULESET: Available rule count: ", s), t++;
  }
};
export const checkForAdditionalRuleSpace = async () => {
  const e = await chrome.declarativeNetRequest.getEnabledRulesets();
  if (!e || 0 === e.length) return;
  const t = optionalRulesets.filter((t) => !e.includes(t));
  0 !== t.length && (await tryUpdateEnabledRulesets(t));
};
const showRulesetErrorPage = async () => {
    const { dynamicRuleCount: e, staticRuleCount: t, staticRulesetCount: s } = await getRuleStats(),
      a =
        ("Firefox" === browserName ? "moz-extension://" : "chrome-extension://") +
        chrome.i18n.getMessage("@@extension_id") +
        `/app/eventpages/ruleset-error.html?dCnt=${e}&sCnt=${t}&srCnt=${s}`;
    (await isRulesetErrorPageOpen()) ||
      chrome.tabs.create({ url: a, active: !0 }, (e) => {
        console.debug("RULESET: Ruleset error page created", e);
      });
  },
  getRuleStats = async () => ({
    dynamicRuleCount: ((await chrome.declarativeNetRequest.getDynamicRules()) || []).length,
    staticRuleCount: 33e4 - ((await chrome.declarativeNetRequest.getAvailableStaticRuleCount()) || 0),
    staticRulesetCount: ((await chrome.declarativeNetRequest.getEnabledRulesets()) || []).length
  }),
  isRulesetErrorPageOpen = async () => {
    const e = await chrome.tabs.query({ currentWindow: !0 });
    for (const t of e) if (t.url.includes("/ruleset-error.html")) return !0;
    return !1;
  };
export const toggleEnabledRuleset = async (e, t) => {
  const s = await chrome.declarativeNetRequest.getEnabledRulesets(),
    a = optionalRulesets.filter((e) => !s.includes(e)),
    l = nameForProtectionConst(e);
  let o = [];
  (o = t
    ? [...defaultRulesets, ...s, ...a].filter((e) => {
        const t = e.split("."),
          s = t[t.length - 1].split("_")[0];
        return l === s;
      })
    : s.filter((e) => {
        const t = e.split("."),
          s = t[t.length - 1].split("_")[0];
        return l === s;
      })),
    console.debug(`RULESET: toggleEnabledRuleset: ${e} -> : `, o);
  try {
    await chrome.declarativeNetRequest.updateEnabledRulesets({ disableRulesetIds: t ? [] : [...o], enableRulesetIds: t ? [...o] : [] });
  } catch (e) {
    throw e;
  }
};
export const toggleAllEnabledRulesets = async (e) => {
  const t = await chrome.declarativeNetRequest.getEnabledRulesets();
  console.debug("RULESET: Enabled rulesets: ", t);
  const s = optionalRulesets.filter((e) => !t.includes(e)),
    a = Array.from(new Set([...defaultRulesets, ...t, ...s]));
  if (e) console.debug("RULESET: Enabling rulesets: ", a), await tryUpdateEnabledRulesets(a);
  else {
    console.debug("RULESET: Disabling rulesets: ", t);
    try {
      await chrome.declarativeNetRequest.updateEnabledRulesets({ disableRulesetIds: [...t] });
    } catch (e) {
      throw e;
    }
  }
};
const nameForProtectionConst = (e) => {
  switch (e) {
    case MV3_PROTECTION_ADS:
    default:
      return "ads";
    case MV3_PROTECTION_MALWARE:
      return "malware";
    case MV3_FEATURE_MALICIOUS_NOTIFICATIONS:
      return "malicious_notifications";
    case MV3_FEATURE_MONTHLY_NOTIFICATIONS:
      return "monthly_notifications";
  }
};
