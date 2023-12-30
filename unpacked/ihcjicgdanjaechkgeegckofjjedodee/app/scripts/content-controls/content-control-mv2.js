import ContentControls from "./content-control-common";
import { chrome } from "../../../utils/polyfill";
export class Mv2ContentControls extends ContentControls {
  constructor() {
    super();
  }
  async addItem(t, e) {
    console.debug("CCTRL: Adding item to cache", { url: t, category: e }), this.CACHE || (this.CACHE = new Map());
    try {
      const o = this.CACHE.has(t) ? new Set(this.CACHE.get(t)) : new Set();
      o.add(e),
        this.CACHE.set(t, o),
        console.debug("CCTRL: Added item to cache", { url: t, category: e, cache: this.CACHE }),
        await this.saveItems();
    } catch (t) {
      throw (console.error("CCTRL: Error adding item to cache", t), t);
    }
  }
  async deleteItem(t) {
    return (
      !!this.CACHE &&
      (this.CACHE.delete(t), console.debug("CCTRL: Deleted item from cache", { url: t, cache: this.CACHE }), await this.saveItems(), !0)
    );
  }
  async deleteAllItems() {
    return !!this.CACHE && (this.CACHE.clear(), await this.saveItems(), !0);
  }
  existsForUrl(t) {
    return this.CACHE.has(t);
  }
  async getAll() {
    return await this.loadSavedItems(), this.CACHE;
  }
  async export() {
    try {
      console.debug("CCTRL: Loading items to export");
      const t = await this._itemsFromStorage();
      return console.debug("CCTRL: Loaded items to export", { entries: t }), t || {};
    } catch (t) {
      throw (console.error("CCTRL: Failed to load saved items", { cache: this.CACHE, err: t }), t);
    }
  }
  async import(t) {
    this.CACHE || (this.CACHE = new Map());
    try {
      console.debug("CCTRL: Importing items", { data: t });
      for (const e in t)
        if (Object.prototype.hasOwnProperty.call(t, e)) {
          const o = t[e];
          this.CACHE.set(e, new Set(o));
        }
      console.debug("CCTRL: Imported items", { cache: this.CACHE }), await this.saveItems();
    } catch (t) {
      throw (console.error("CCTRL: Failed to import items", { cache: this.CACHE, err: t }), t);
    }
  }
  getForUrl(t) {
    return this.CACHE.get(t);
  }
  async saveItems() {
    if (!this.CACHE) return void console.debug("CCTRL: User blocks cache does not yet exist");
    const t = {};
    for (const [e, o] of this.CACHE.entries()) t[e] = Array.from(o);
    console.debug("CCTRL: Saving items to storage", { cache: this.CACHE, entries: t }), await this._saveItemsToStorage(t);
  }
  async loadSavedItems() {
    this.CACHE || (this.CACHE = new Map());
    try {
      const t = await this._itemsFromStorage();
      if (!t) return;
      for (const e in t)
        if (Object.prototype.hasOwnProperty.call(t, e)) {
          const o = t[e];
          this.CACHE.set(e, new Set(o));
        }
    } catch (t) {
      throw (console.error("CCTRL: Failed to load saved items", { cache: this.CACHE, err: t }), t);
    }
  }
  async _itemsFromStorage() {
    return new Promise((t, e) => {
      chrome.storage.local.get("contentControls", (o) => {
        chrome.runtime.lastError
          ? (console.error("Error getting content controls from storage", chrome.runtime.lastError), e(chrome.runtime.lastError))
          : t(o.contentControls);
      });
    });
  }
  async _saveItemsToStorage(t) {
    return new Promise((e, o) => {
      chrome.storage.local.set({ contentControls: t }, () => {
        chrome.runtime.lastError
          ? (console.error("Error saving content controls to storage", chrome.runtime.lastError), o(chrome.runtime.lastError))
          : e();
      });
    });
  }
}
