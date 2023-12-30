import { ALLOWED_EXCLUSION_OPTIONS } from "../app-consts";
export default class ExclusionHandler {
  constructor() {
    (this.EXCLUSIONS = {}), (this.EXCLUSION_INDIVIDUAL = {});
  }
  static exclusionConstantToInt(o) {
    const s = ALLOWED_EXCLUSION_OPTIONS.find((s) => s.constantKey === o);
    if (void 0 !== s) return s.value;
    throw new Error(`${o} is not recognised`);
  }
  static exclusionIntToConstant(o) {
    const s = ALLOWED_EXCLUSION_OPTIONS.find((s) => s.value === o);
    if (void 0 !== s) return s.constantKey;
    throw new Error(`${o} is not recognised`);
  }
  exclude(o, s) {
    throw new Error("Cannot call this method on base class");
  }
  getExclusions() {
    throw new Error("Cannot call this method on base class");
  }
  exportExclusions() {
    throw new Error("Cannot call this method on base class");
  }
  importExclusions(o) {
    throw new Error("Cannot call this method on base class");
  }
  getExclusions_getExclusionsByNames(o) {
    throw new Error("Cannot call this method on base class");
  }
  removeAllExclusions() {
    throw new Error("Cannot call this method on base class");
  }
  removeExclude(o, s, n) {
    throw new Error("Cannot call this method on base class");
  }
  removeExclusions(o) {
    throw new Error("Cannot call this method on base class");
  }
  excludeTemporarily(o, s) {
    throw new Error("Cannot call this method on base class");
  }
  isTemporarilyExcluded(o, s) {
    throw new Error("Cannot call this method on base class");
  }
}
