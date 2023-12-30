import { chrome } from "../../../utils/polyfill";
import { isMV3, urlHost } from "../../../utils/utils";
export const DYNAMIC_RULE_ADS_PRIORITY = 1;
export const DYNAMIC_RULE_MALWARE_PRIORITY = 2;
export const DYNAMIC_RULE_ALL_PRIORITY = 3;
export const RISKY_TLDS_PRIORITY = 4;
export const RULESET_OVERRIDE_PRIORITY = 10;
export const getExistingDynamicRules = async (e) => {
  if (!isMV3()) return [];
  const t = await chrome.declarativeNetRequest.getDynamicRules();
  return e ? (Array.isArray(e) ? t.filter((t) => e.includes(t.priority)) : t.filter((t) => t.priority === e)) : t;
};
export const getExistingDynamicRulesByActionTypes = async (e, t) => {
  if (!isMV3()) return [];
  const i = await getExistingDynamicRules(t);
  return console.debug("ALL DYNAMIC RULES: ", i), i.filter((t) => e.includes(t.action.type));
};
export const getLastDynamicRuleId = async () => {
  if (!isMV3()) return [];
  let e = 1;
  const t = await getExistingDynamicRules();
  return console.debug("EXISTING_DYNAMIC_RULES", t), t.length > 0 && (e = t.at(-1).id), e;
};
export const clearAllDynamicRules = async (e) => {
  if (!isMV3()) return;
  const t = (await getExistingDynamicRules(e)).map((e) => e.id);
  await chrome.declarativeNetRequest.updateDynamicRules({ addRules: [], removeRuleIds: [...t] });
};
export const getExistingSessionRules = () => (isMV3() ? chrome.declarativeNetRequest.getSessionRules() : []);
export const getLastSessionRuleId = async () => {
  let e = 1;
  const t = await getExistingSessionRules();
  return console.debug("EXISTING_SESSION_RULES", t), t.length > 0 && (e = t.at(-1).id), e;
};
const overrideToRules = (e, t) => {
  const i = [];
  return (
    "block" === e.type
      ? (i.push({ id: t, priority: 10, action: { type: "block" }, condition: { urlFilter: e.url, resourceTypes: subFrameResourceType } }),
        i.push({
          id: t + 1,
          priority: 10,
          action: { type: "redirect", redirect: { extensionPath: "/app/eventpages/block-mv3.html?type=malware" } },
          condition: { urlFilter: e.url, resourceTypes: mainFrameResourceType }
        }))
      : (i.push({
          id: t,
          priority: 10,
          action: { type: "allow" },
          condition: { urlFilter: urlHost(e.url), resourceTypes: allResourceTypes }
        }),
        i.push({
          id: t + 1,
          priority: 10,
          action: { type: "allow" },
          condition: { urlFilter: "*", initiatorDomains: [urlHost(e.url)], resourceTypes: allResourceTypes }
        })),
    i
  );
};
export const toggleGtldDomains = async (e, t) => {
  if (isMV3())
    if (e) {
      let e = (await getLastDynamicRuleId()) + 1;
      const i = [];
      for (const s of t)
        i.push({ id: e, priority: 4, action: { type: "block" }, condition: { urlFilter: `||.${s}`, resourceTypes: allResourceTypes } }),
          (e += 1);
      await chrome.declarativeNetRequest.updateDynamicRules({ addRules: i, removeRuleIds: [] });
    } else await clearAllDynamicRules(4);
};
export const updateRulesetOverrides = async (e) => {
  if (!isMV3()) return;
  console.debug("UPDATE_OVERRIDES: overrides", { overrides: e });
  let t = await getExistingDynamicRules(10);
  t = t.filter((e) => ["allow", "block"].includes(e.action.type));
  const i = {};
  for (const e of t) {
    const t = e.action.type,
      s = e.condition.urlFilter;
    i[s] ? i[s].includes(t) || i[s].push(t) : (i[s] = [t]);
  }
  console.debug("UPDATE_OVERRIDES: urlToTypes", { urlToTypes: i });
  let s = [],
    o = [],
    r = await getLastDynamicRuleId();
  for (const t of e) {
    console.debug("UPDATE_OVERRIDES: processing", { override: t });
    const { type: e, url: n } = t;
    if (i[n] && i[n].includes(e)) {
      console.debug("UPDATE_OVERRIDES: skipping", { override: t });
      continue;
    }
    if (i[n]) {
      const e = await getExistingDynamicRules(10);
      console.debug("UPDATE_OVERRIDES: existingRules", { existingRules: e });
      const t = e
        .filter((e) => e.condition.urlFilter === urlHost(n) || (e.condition.initiatorDomains || []).includes(urlHost(n)))
        .map((e) => e.id);
      o = [...o, ...t];
    }
    const c = overrideToRules(t, r + 1);
    (s = [...s, ...c]), (r += c.length);
  }
  console.debug("UPDATE_OVERRIDES: newRules", { newAddRules: s, newRemoveRuleIds: o }),
    await chrome.declarativeNetRequest.updateDynamicRules({ addRules: s, removeRuleIds: o });
  const n = e.map((e) => e.url);
  rulesetOverrideCache.addToCache(n);
};
export class RulesetOverrideCache {
  constructor() {
    (this.CACHE = {}), this.loadCache();
  }
  async loadCache() {
    const e = (await getExistingDynamicRules(10)).filter(
      (e) => "allow" === e.action && e.condition.urlFilter && "*" !== e.condition.urlFilter
    );
    for (const t of e) this.CACHE[t.condition.urlFilter] = !0;
  }
  addToCache(e) {
    for (const t of e) this.CACHE[t] = !0;
  }
  isOverriden(e) {
    return !!this.CACHE[e];
  }
}
export const rulesetOverrideCache = new RulesetOverrideCache();
export const mainFrameResourceType = ["main_frame"];
export const subFrameResourceType = [
  "sub_frame",
  "stylesheet",
  "script",
  "image",
  "font",
  "object",
  "xmlhttprequest",
  "ping",
  "csp_report",
  "media",
  "websocket"
];
export const allResourceTypes = [...mainFrameResourceType, ...subFrameResourceType];
