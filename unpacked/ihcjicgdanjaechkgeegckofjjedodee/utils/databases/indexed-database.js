import { IndexedDatabaseFile } from "./indexed-database-file";
import { BloomFilter } from "./bloom-filter";
import { cleanDbName } from "../utils";
export class IndexedDatabase {
  constructor(e, t) {
    (this.name = e), t ? (this.bloomFilter = BloomFilter.deserialize(t, !0)) : (this.file = new IndexedDatabaseFile(e, cleanDbName(e)));
  }
  parse() {
    return this.file.read().then((e) => ((this.bloomFilter = BloomFilter.deserialize(e)), this));
  }
  parseBundled() {
    return (
      console.debug(`IDB: Reading the bundled database for ${this.name}`),
      this.file.readBundled().then((e) => ((this.bloomFilter = BloomFilter.deserialize(e)), this))
    );
  }
  ready() {
    return !!this.bloomFilter;
  }
  contains(e) {
    return this.ready() && this.bloomFilter.contains(e);
  }
  getBloomFilterPlainObject() {
    if (!this.ready()) throw new Error(`Database ${this.name} is not yet ready`);
    return this.bloomFilter.getPlainObject();
  }
  replaceBloomFilter(e) {
    this.bloomFilter.replace(e);
  }
}
