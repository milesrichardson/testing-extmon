import UserBlocksHandler from "./user-blocks-common";
import { chrome } from "../../../utils/polyfill";
export class Mv2UserBlocksHandler extends UserBlocksHandler {
  constructor() {
    super();
  }
  async blockItems(e) {
    this.CACHE || (this.CACHE = new Set());
    for (const t of e) this.CACHE.add(t);
    await this.saveBlockedItems();
  }
  async getBlockedItems() {
    return await this.loadSavedBlockedItems(), Array.from(this.CACHE);
  }
  async loadSavedBlockedItems() {
    const e = await this._blockedItemsFromStorage();
    if (e) {
      this.CACHE || (this.CACHE = new Set());
      for (let t of e) this.CACHE.add(t);
    }
  }
  async saveBlockedItems() {
    if (!this.CACHE) return void console.debug("SBI: User blocks cache does not yet exist");
    const e = Array.from(this.CACHE);
    await this._saveItemsToStorage(e);
  }
  async deleteBlockedItem(e) {
    return !!this.CACHE && (this.CACHE.delete(e), await this.saveBlockedItems(), !0);
  }
  async deleteAllBlockedItems() {
    return !!this.CACHE && (this.CACHE.clear(), await this.saveBlockedItems(), !0);
  }
  isBlocked(e) {
    return !!this.CACHE && this.CACHE.has(e);
  }
  async _blockedItemsFromStorage() {
    return new Promise((e, t) => {
      chrome.storage.local.get("blockedItems", (s) => {
        chrome.runtime.lastError ? t(chrome.runtime.lastError) : e(s.blockedItems);
      });
    });
  }
  async _saveItemsToStorage(e) {
    return new Promise((t, s) => {
      chrome.storage.local.set({ blockedItems: e }, () => {
        chrome.runtime.lastError ? s(chrome.runtime.lastError) : t(!0);
      });
    });
  }
}
