import DetectionHistory from "./detection-history-common";
import { chrome } from "../../../utils/polyfill";
export class Mv2DetectionHistory extends DetectionHistory {
  constructor() {
    super();
  }
  async addItem(r) {
    console.debug("DH: Adding item to storage", r);
    try {
      await this._saveItemToStorage(r), console.debug("DH: Added item to storage", { ...r });
    } catch (r) {
      throw (console.error("DH: Error adding item to storage", r), r);
    }
  }
  async deleteItem(r, e) {
    const t = (await this.loadSavedItems()).filter((t) => t.site !== r && t.date !== e);
    return new Promise((r, e) => {
      (chrome.storage.sync || chrome.storage.local).set({ detectionHistory: t }, () => {
        chrome.runtime.lastError
          ? (console.error("Error deleting the history to storage", chrome.runtime.lastError), e(chrome.runtime.lastError))
          : r(!0);
      });
    });
  }
  async deleteAllItems() {
    return new Promise((r, e) => {
      (chrome.storage.sync || chrome.storage.local).set({ detectionHistory: [] }, () => {
        chrome.runtime.lastError
          ? (console.error("Error deleting the history to storage", chrome.runtime.lastError), e(chrome.runtime.lastError))
          : r(!0);
      });
    });
  }
  async getAll() {
    return await this.loadSavedItems();
  }
  async loadSavedItems() {
    try {
      return (await this._itemsFromStorage()) || [];
    } catch (r) {
      throw r;
    }
  }
  async _itemsFromStorage() {
    return new Promise((r, e) => {
      (chrome.storage.sync || chrome.storage.local).get("detectionHistory", (t) => {
        chrome.runtime.lastError
          ? (console.error("Error getting detection history from storage", chrome.runtime.lastError), e(chrome.runtime.lastError))
          : r(t.detectionHistory);
      });
    });
  }
  async _saveItemToStorage(r) {
    const e = (await this._itemsFromStorage()) || [];
    return new Promise((t, o) => {
      (chrome.storage.sync || chrome.storage.local).set({ detectionHistory: [r, ...e] }, () => {
        chrome.runtime.lastError
          ? (console.error("Error saving detection history item to storage", chrome.runtime.lastError), o(chrome.runtime.lastError))
          : t();
      });
    });
  }
}