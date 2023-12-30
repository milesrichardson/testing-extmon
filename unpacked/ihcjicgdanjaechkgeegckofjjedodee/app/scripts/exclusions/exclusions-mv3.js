import { chrome } from "../../../utils/polyfill";
import { MV2ExclusionHandler } from "./exclusions-mv2";
import { EXCLUSION_ADS, EXCLUSION_MALWARE } from "../app-consts";
import {
  allResourceTypes,
  DYNAMIC_RULE_ADS_PRIORITY,
  DYNAMIC_RULE_ALL_PRIORITY,
  DYNAMIC_RULE_MALWARE_PRIORITY,
  RULESET_OVERRIDE_PRIORITY,
  getExistingDynamicRulesByActionTypes,
  getExistingSessionRules,
  getLastDynamicRuleId,
  getLastSessionRuleId,
  mainFrameResourceType,
  subFrameResourceType
} from "../mv3/dynamic-rule-utils";
export class MV3ExclusionHandler extends MV2ExclusionHandler {
  constructor() {
    super(), (this.TEMPORARY_EXCLUSIONS = {}), this.loadTemporaryExclusions();
  }
  extractExclusions(i) {
    return Array.isArray(i) ? i : i.split(",");
  }
  exportExclusions() {
    return {};
  }
  importExclusions(i) {}
  getPriorityForExclusions(i) {
    let t,
      e = DYNAMIC_RULE_ALL_PRIORITY;
    return i
      ? ((t = Array.isArray(i) ? i : i.split(",")),
        1 == t.length && t.includes(EXCLUSION_ADS)
          ? (e = DYNAMIC_RULE_ADS_PRIORITY)
          : 1 == t.length && t.includes(EXCLUSION_MALWARE) && (e = DYNAMIC_RULE_MALWARE_PRIORITY),
        e)
      : e;
  }
  async exclude(i, t) {
    let e;
    if (
      (console.debug("MV3: EXCLUDE: ", i, t),
      (e = Array.isArray(t) ? await super.exclude(i, t.join(",")) : await super.exclude(i, t)),
      await this.whitelistRuleExistsForHost(i, t))
    )
      return e;
    let s = await getLastDynamicRuleId();
    const o = this.getPriorityForExclusions(t);
    let n;
    n =
      o === DYNAMIC_RULE_MALWARE_PRIORITY
        ? mainFrameResourceType
        : o === DYNAMIC_RULE_ADS_PRIORITY
        ? subFrameResourceType
        : allResourceTypes;
    const r = [
      { id: s + 1, priority: o, action: { type: "allow" }, condition: { urlFilter: i, resourceTypes: n } },
      { id: s + 2, priority: o, action: { type: "allow" }, condition: { urlFilter: "*", initiatorDomains: [i], resourceTypes: n } }
    ];
    return (
      console.debug("MV3: ADD RULE: ", r),
      console.debug("MV3_updateDynamicRulesStart: ", new Date().toString()),
      await chrome.declarativeNetRequest.updateDynamicRules({ addRules: [...r], removeRuleIds: [] }),
      console.debug("MV3_updateDynamicRulesEnd: ", new Date().toString()),
      e
    );
  }
  async getExclusions() {
    const i = await super.getExclusions(),
      t = await this.getExistingWhitelistDynamicRules(),
      e = new Set();
    for (const i of t)
      i.condition.urlFilter && "*" !== i.condition.urlFilter
        ? e.add(i.condition.urlFilter)
        : i.condition.initiatorDomains && i.condition.initiatorDomains.length > 0 && i.condition.initiatorDomains.forEach((i) => e.add(i));
    const s = Array.from(e),
      o = Object.entries(i).filter(([i, t]) => s.includes(i));
    return Object.fromEntries(o);
  }
  async getExclusions_getExclusionsByNames(i) {
    0 === Object.keys(i).length && (i = []);
    const t = await super.getExclusions_getExclusionsByNames(i);
    console.debug("HOSTNAMES: HOSTNAMES=", { hostNames: i, exclusions: t }), (i = i.map((i) => i.toLowerCase()));
    const e = await this.getExistingWhitelistDynamicRules(),
      s = new Set();
    for (const t of e)
      t.condition.urlFilter && i.includes(t.condition.urlFilter)
        ? s.add(t.condition.urlFilter)
        : t.condition.initiatorDomains && t.condition.initiatorDomains.length > 0 && t.condition.initiatorDomains.forEach((i) => s.add(i));
    const o = Array.from(s),
      n = Object.entries(t).filter(([i, t]) => o.includes(i));
    return Object.fromEntries(n);
  }
  async removeAllExclusions() {
    const i = await super.removeAllExclusions(),
      t = (await this.getExistingWhitelistDynamicRules()).map((i) => i.id);
    return await chrome.declarativeNetRequest.updateDynamicRules({ addRules: [], removeRuleIds: [...t] }), i;
  }
  async removeExclude(i, t, e) {
    const s = await super.removeExclude(i, t, e),
      o = await this.getExistingWhitelistDynamicRules(),
      n = [];
    for (const e of o) this._whitelistRuleAffectsHost(e, i) && e.priority === this.getPriorityForExclusions(t) && n.push(e.id);
    return await chrome.declarativeNetRequest.updateDynamicRules({ addRules: [], removeRuleIds: [...n] }), s;
  }
  async removeExclusions(i) {
    const t = await super.removeExclusions(i);
    console.debug("REMOVE EXCLUSIONS RESULT: ", t);
    const e = await this.getExistingWhitelistDynamicRules(),
      s = [];
    for (const t of e) this._whitelistRuleAffectsHost(t, i) && s.push(t.id);
    return await chrome.declarativeNetRequest.updateDynamicRules({ addRules: [], removeRuleIds: [...s] }), t;
  }
  async loadTemporaryExclusions() {
    const i = await getExistingSessionRules();
    for (const t of i)
      if (t.condition.initiatorDomains && t.condition.tabIds)
        for (const i of t.condition.tabIds) this.TEMPORARY_EXCLUSIONS[i] = t.condition.initiatorDomains;
  }
  async excludeTemporarily(i, t) {
    if (await this.whitelistRuleExistsForHost(i)) return void console.debug("EXCLUDE_TEMP: WHITELIST RULE EXISTS FOR HOST: ", { host: i });
    const e =
      (await getExistingDynamicRulesByActionTypes(["block"], RULESET_OVERRIDE_PRIORITY)).filter((t) => t.condition.urlFilter === i).length >
      0;
    t = +t;
    let s = await getLastSessionRuleId();
    console.debug("EXCLUDE_TEMP: TABID: ", { tabId: t });
    const o = [
      {
        id: s + 1,
        priority: e ? DYNAMIC_RULE_MALWARE_PRIORITY + RULESET_OVERRIDE_PRIORITY : DYNAMIC_RULE_MALWARE_PRIORITY,
        action: { type: "allow" },
        condition: { urlFilter: i, resourceTypes: allResourceTypes, tabIds: [t] }
      },
      {
        id: s + 2,
        priority: e ? DYNAMIC_RULE_MALWARE_PRIORITY + RULESET_OVERRIDE_PRIORITY : DYNAMIC_RULE_MALWARE_PRIORITY,
        action: { type: "allow" },
        condition: { urlFilter: "*", initiatorDomains: [i], resourceTypes: allResourceTypes, tabIds: [t] }
      }
    ];
    console.debug("MV3: ADD RULE: ", o),
      await chrome.declarativeNetRequest.updateSessionRules({ addRules: [...o], removeRuleIds: [] }),
      this.TEMPORARY_EXCLUSIONS[t]
        ? (this.TEMPORARY_EXCLUSIONS[t] = Array.from(new Set([...this.TEMPORARY_EXCLUSIONS[t], i])))
        : (this.TEMPORARY_EXCLUSIONS[t] = [i]);
  }
  isTemporarilyExcluded(i, t) {
    return !!this.TEMPORARY_EXCLUSIONS[t] && this.TEMPORARY_EXCLUSIONS[t].includes(i);
  }
  _whitelistRuleAffectsHost(i, t) {
    return (
      !(!i.condition.urlFilter || i.condition.urlFilter !== t) ||
      !!(i.condition.initiatorDomains && i.condition.initiatorDomains.length > 0 && i.condition.initiatorDomains.includes(t))
    );
  }
  async whitelistRuleExistsForHost(i, t) {
    const e = await this.getExistingWhitelistDynamicRules();
    for (const s of e) if (this._whitelistRuleAffectsHost(s, i) && s.priority === this.getPriorityForExclusions(t)) return !0;
    return !1;
  }
  async getExistingWhitelistDynamicRules() {
    return getExistingDynamicRulesByActionTypes(
      ["allow"],
      [DYNAMIC_RULE_ADS_PRIORITY, DYNAMIC_RULE_MALWARE_PRIORITY, DYNAMIC_RULE_ALL_PRIORITY]
    );
  }
}
