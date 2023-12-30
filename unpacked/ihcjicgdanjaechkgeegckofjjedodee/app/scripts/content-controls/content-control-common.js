export default class ContentControls {
  constructor() {
    this.CACHE = new Map();
  }
  export() {
    throw new Error("Cannot call this method on base class");
  }
  import(o) {
    throw new Error("Cannot call this method on base class");
  }
  addItem(o, t) {
    throw new Error("Cannot call this method on base class");
  }
  deleteItem(o, t) {
    throw new Error("Cannot call this method on base class");
  }
  deleteAllItems() {
    throw new Error("Cannot call this method on base class");
  }
  existsForUrl(o) {
    throw new Error("Cannot call this method on base class");
  }
  getAll() {
    throw new Error("Cannot call this method on base class");
  }
  getForUrl(o) {
    throw new Error("Cannot call this method on base class");
  }
  saveItems() {
    throw new Error("Cannot call this method on base class");
  }
  loadSavedItems() {
    throw new Error("Cannot call this method on base class");
  }
}
