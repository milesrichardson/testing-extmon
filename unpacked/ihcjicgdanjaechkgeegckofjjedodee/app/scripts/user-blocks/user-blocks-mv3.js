import { chrome } from "../../../utils/polyfill";
import UserBlocksHandler from "./user-blocks-common";
import {
  getExistingDynamicRulesByActionTypes,
  getLastDynamicRuleId,
  subFrameResourceType,
  mainFrameResourceType,
  DYNAMIC_RULE_ALL_PRIORITY
} from "../mv3/dynamic-rule-utils";
export class Mv3UserBlocksHandler extends UserBlocksHandler {
  constructor() {
    super();
  }
  async blockItems(e) {
    this.CACHE || (this.CACHE = new Set());
    for (const s of e) this.CACHE.add(s);
    await this.saveBlockedItems();
  }
  async getBlockedItems() {
    return await this.loadSavedBlockedItems(), Array.from(this.CACHE);
  }
  async loadSavedBlockedItems() {
    const e = await this._getItemsFromDynamicRuleStorage();
    if ((console.debug("Mv3UserBlocksHandler.loadSavedBlockedItems - rules: ", e), !e)) return [];
    this.CACHE || (this.CACHE = new Set());
    const s = e.map((e) => e.condition.urlFilter);
    for (const e of s) this.CACHE.add(e);
    console.debug("Mv3UserBlocksHandler.loadSavedBlockedItems - cache: ", this.CACHE);
  }
  async saveBlockedItems() {
    if (!this.CACHE) return;
    const e = Array.from(this.CACHE);
    await this._saveNewItemsToDynamicRuleStorage(e);
  }
  async deleteBlockedItem(e) {
    if (this.CACHE) {
      console.debug("Mv3UserBlocksHandler.deleteBlockedItem - url and cache: ", { url: e, cache: this.CACHE }), this.CACHE.delete(e);
      const s = (await this._getExistingDynamicRules()).filter((s) => s.condition.urlFilter === e),
        t = s.map((e) => e.id);
      return (
        console.debug("Mv3UserBlocksHandler.deleteBlockedItem - ruleIdsToDelete: ", { ruleIdsToDelete: t, rulesMatchingDeletedUrls: s }),
        await chrome.declarativeNetRequest.updateDynamicRules({ addRules: [], removeRuleIds: [...t] }),
        console.debug("Mv3UserBlocksHandler.deleteBlockedItem - Deleted Item from dynamic rule storage "),
        !0
      );
    }
    return !1;
  }
  async deleteAllBlockedItems() {
    if (this.CACHE) {
      console.debug("Mv3UserBlocksHandler.deleteAllBlockedItems - cache: ", { cache: this.CACHE }), this.CACHE.clear();
      const e = await this._getExistingDynamicRules(),
        s = e.map((e) => e.id);
      return (
        console.debug("Mv3UserBlocksHandler.deleteAllBlockedItems - ruleIdsToDelete: ", {
          ruleIdsToDelete: s,
          rulesMatchingDeletedUrls: e
        }),
        await chrome.declarativeNetRequest.updateDynamicRules({ addRules: [], removeRuleIds: [...s] }),
        console.debug("Mv3UserBlocksHandler.deleteAllBlockedItems - Deleted All Items from dynamic rule storage "),
        !0
      );
    }
    return !1;
  }
  isBlocked(e) {
    return !!this.CACHE && this.CACHE.has(e);
  }
  async _getItemsFromDynamicRuleStorage() {
    const e = await this._getExistingDynamicRules();
    console.debug("Mv3UserBlocksHandler._getItemsFromDynamicRuleStorage - existing dynamic rules ", { existingDynamicRules: e });
    const s = e.filter((e) => e.condition.urlFilter);
    return Array.from(new Set(s));
  }
  async _saveNewItemsToDynamicRuleStorage(e) {
    console.debug("Mv3UserBlocksHandler._saveItemsToDynamicRuleStorage - urls: ", e);
    const s = await this._getExistingDynamicRules();
    console.debug("Mv3UserBlocksHandler._saveItemsToDynamicRuleStorage - existingDynamicRules: ", s);
    const t = s.map((e) => e.condition.urlFilter);
    console.debug("Mv3UserBlocksHandler._saveItemsToDynamicRuleStorage - alreadyBlockedUrls: ", t);
    const l = e.filter((e) => !t.includes(e));
    console.debug("Mv3UserBlocksHandler._saveItemsToDynamicRuleStorage - urlsToBlock: ", l);
    const o = await this._buildMv3BlockRules(l);
    console.debug("Mv3UserBlocksHandler._saveItemsToDynamicRuleStorage - newRules: ", o),
      await chrome.declarativeNetRequest.updateDynamicRules({ addRules: [...o], removeRuleIds: [] });
  }
  async _buildMv3BlockRules(e) {
    let s = await getLastDynamicRuleId();
    const t = [];
    for (const l of e)
      t.push({
        id: ++s,
        priority: DYNAMIC_RULE_ALL_PRIORITY,
        action: { type: "block" },
        condition: { urlFilter: l, resourceTypes: subFrameResourceType }
      }),
        t.push({
          id: ++s,
          priority: DYNAMIC_RULE_ALL_PRIORITY,
          action: { type: "redirect", redirect: { extensionPath: "/app/eventpages/block-mv3.html?type=user-block" } },
          condition: { urlFilter: l, resourceTypes: mainFrameResourceType }
        });
    return t;
  }
  async _getExistingDynamicRules() {
    return getExistingDynamicRulesByActionTypes(["block", "redirect"], [DYNAMIC_RULE_ALL_PRIORITY]);
  }
}
