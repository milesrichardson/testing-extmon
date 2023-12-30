export default class UserBlocksHandler {
  constructor() {
    this.CACHE = new Set();
  }
  blockItems(e) {
    throw new Error("Cannot call this method on base class");
  }
  getBlockedItems() {
    throw new Error("Cannot call this method on base class");
  }
  loadSavedBlockedItems() {
    throw new Error("Cannot call this method on base class");
  }
  saveBlockedItems() {
    throw new Error("Cannot call this method on base class");
  }
  deleteBlockedItem(e) {
    throw new Error("Cannot call this method on a base class");
  }
  deleteAllBlockedItems() {
    throw new Error("Cannot call this method on a base class");
  }
  isBlocked(e) {
    throw new Error("Cannot call this method on a base class");
  }
}
