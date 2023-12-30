import * as fzstd from "fzstd";
import { chrome } from "../polyfill";
import { binaryToString, isZstd } from "../utils";
import { clearFiles, queuedFetchBinary, queuedFileRead } from "../file";
import { DB_DIR } from "./db-consts";
export class IndexedDatabaseFile {
  constructor(e, t) {
    (this.name = e), (this.cleanName = t);
  }
  async read() {
    const e = await queuedFileRead(this.name);
    return this.unpack(e);
  }
  async readBundled() {
    console.debug("READ BUNDLED FOR: ", { name: this.name, cleanName: this.cleanName });
    let e = await queuedFetchBinary(chrome.runtime.getURL(DB_DIR + "/" + this.name));
    return this.unpack(e);
  }
  unpack(e) {
    let t = this.unpackInflate(e);
    return JSON.parse(t);
  }
  unpackInflate(e) {
    const t = new Uint8Array(e);
    return isZstd(t) ? binaryToString(fzstd.decompress(t)) : binaryToString(t);
  }
  static async clear() {
    return clearFiles();
  }
}
