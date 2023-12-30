import { binaryFromBase64, binaryToBase64 } from "../utils";
export class BloomFilter {
  add(a) {
    var r = this.indices(a);
    for (var t of r) this.data[~~(t / 32)] |= 1 << t % 32;
  }
  contains(a) {
    var r = this.indices(a);
    for (var t of r) if (0 == (this.data[~~(t / 32)] & (1 << t % 32))) return !1;
    return !0;
  }
  indices(a) {
    for (var r = this.djb2(a), t = this.sdbm(a), i = [], s = 0; s < this.k; s++) i.push(((r + s * t) >>> 0) % this.m);
    return i;
  }
  serialize() {
    var a = {};
    return (a.k = this.k), (a.m = this.m), (a.data = binaryToBase64(this.data.buffer)), a;
  }
  static deserialize(a, r) {
    var t = new BloomFilter();
    return (t.k = a.k), (t.m = a.m), (t.data = r ? a.data : new Uint32Array(binaryFromBase64(a.data))), t;
  }
  djb2(a) {
    var r = 5381;
    for (var t of a) r = (33 * r + t.charCodeAt(0)) >>> 0;
    return r;
  }
  sdbm(a) {
    var r = 0;
    for (var t of a) r = (65599 * r + t.charCodeAt(0)) >>> 0;
    return r;
  }
  getPlainObject() {
    return { k: this.k, m: this.m, data: this.data };
  }
  replace(a) {
    (this.k = a.k), (this.m = a.m), (this.data = a.data);
  }
}
