import { chrome } from "../../../utils/polyfill";
import { malwarebytes } from "../app";
import ExclusionHandler from "./exclusions-common";
export class MV2ExclusionHandler extends ExclusionHandler {
  constructor() {
    super();
  }
  exclude(e, o) {
    let s;
    return (
      console.debug("EXC: On MapExclusions", { host: e, exclusions: o }),
      this.exclude_mapExclusionsToInts(o)
        .then((s) => ((o = s), (e = e.toLowerCase()), this.getExclusionsForHost(e)))
        .then((s) => (console.debug("EXC: On MergeExclusions for Exclude"), this.exclude_mergeExclusions(e, s, o, !0)))
        .then(
          (o) => (
            console.debug("EXC: On SetNamedNode matching merged exclusions:", malwarebytes.EXCLUSIONS), this.exclude_setNamedNode(e, o)
          )
        )
        .then((e) => ((s = e), console.debug("EXC: On GetExclusionsNode"), this.exclude_getExclusionsNode()))
        .then((o) => (console.debug("EXC: On AddKeyToExclusionsIndex"), this.exclude_addKeyToExclusionsIndex(e, o)))
        .then((e) => (console.debug("EXC: On SetExclusionsNode"), this.exclude_setExclusionsNode(e, s)))
        .catch((e) => (console.error(e), Promise.reject(e)))
    );
  }
  async exportExclusions() {
    const e = await this.getExclusions();
    for (const o in e) e.hasOwnProperty(o) && (e[o] = await this.exclude_mapIntsToExclusions(e[o]));
    return console.debug("EXC: Exporting Exclusions", e), e;
  }
  async importExclusions(e) {
    const o = await this.exportExclusions();
    console.debug("EXC: Importing Exclusions", e);
    for (const s in e)
      if (e.hasOwnProperty(s)) {
        if (o.hasOwnProperty(s) && o[s] === e[s]) continue;
        await this.exclude(s, e[s]);
      }
  }
  getExclusions() {
    return (
      this.getIndividualExclusions(),
      this.exclude_getExclusionsNode()
        .then((e) => this.getExclusions_getExclusionsByNames(e))
        .then((e) => {
          let o = {};
          for (let s in e)
            e.hasOwnProperty(s) &&
              (e[s].some((e) => "number" != typeof e || e <= 0) &&
                ((e[s] = e[s].filter((e) => "number" == typeof e && e >= 0)),
                console.debug("EXC: Exclusion values cleaned succesfully", s, e[s])),
              (o = { ...o, [s]: e[s] }));
          return (this.EXCLUSIONS = o), Promise.resolve(o);
        })
        .catch((e) => (console.error("GE: Exclusion Get Error: ", e), Promise.reject(e)))
    );
  }
  getExclusions_getExclusionsByNames(e) {
    return new Promise((o, s) => {
      chrome.storage.local.get(e, function (e) {
        chrome.runtime.lastError ? s({ error: chrome.runtime.lastError.message }) : o(e);
      });
    });
  }
  async removeAllExclusions() {
    await this.removeAllExclusions_clearCache();
    const e = await this.exclude_getExclusionsNode();
    return await this.removeAllExclusions_removeExclusionsByNames(e), await this.removeAllExclusions_removeIndexNode(), e;
  }
  removeExclude(e, o, s) {
    let r;
    return this.exclude_mapExclusionsToInts(o)
      .then((s) => ((o = s), (e = e.toLowerCase()), console.debug("RMX: On GetExistingData"), this.getExclusionsForHost(e)))
      .then((s) => this.exclude_removeExclusions(e, s, o))
      .then((r) =>
        null == r
          ? Promise.resolve(null)
          : s && !0 === s
          ? (console.log("RMX: OnMergeExclusions for Add"), this.exclude_mergeExclusions(e, r, o, !1))
          : Promise.resolve(r)
      )
      .then((o) => (console.debug("RMX: On SetNamedNode matching merged exclusions:", this.EXCLUSIONS), this.exclude_setNamedNode(e, o)))
      .then((e) => ((r = e), console.debug("EXC: On GetExclusionsNode"), this.exclude_getExclusionsNode()))
      .then((o) => (console.debug("EXC: On AddKeyToExclusionsIndex"), this.exclude_addKeyToExclusionsIndex(e, o)))
      .then((e) => (console.debug("EXC: On SetExclusionsNode"), this.exclude_setExclusionsNode(e, r)))
      .then((o) => (!0 === o && delete this.EXCLUSIONS[e], Promise.resolve(o)))
      .catch((e) => Promise.reject(e));
  }
  removeExclusions(e) {
    return this.removeExclusions_removeCacheNode(e)
      .then((o) => this.removeExclusions_removeHostNode(e))
      .then((e) => this.exclude_getExclusionsNode())
      .then((o) => this.removeExclusions_removeHostFromIndex(e, o))
      .then((e) => this.exclude_setExclusionsNode(e))
      .catch((e) => Promise.reject(e));
  }
  excludeTemporarily(e, o) {}
  isTemporarilyExcluded(e, o) {}
  exclude_addKeyToExclusionsIndex(e, o) {
    if ((console.log("exclude_addKeyToExclusionsIndex: starting with: ", o), o)) {
      if (!Array.isArray(o)) {
        let e = o;
        o = [];
        for (let s in e) e.hasOwnProperty(s) && o.push(e);
      }
    } else o = [];
    return (
      console.debug("exclude_addKeyToExclusionsIndex: normalized to: ", o),
      o.includes(e) || o.push(e),
      console.debug("exclude_addKeyToExclusionsIndex: resolving as: "),
      console.debug(o),
      Promise.resolve(o)
    );
  }
  exclude_deduplicateMergeExclusions(e) {
    for (let o = 0; o < this.EXCLUSIONS[e].length; ++o)
      for (let s = o + 1; s < this.EXCLUSIONS[e].length; ++s)
        this.EXCLUSIONS[e][o] === this.EXCLUSIONS[e][s] && this.EXCLUSIONS[e].splice(s--, 1);
  }
  exclude_getExclusionsNode() {
    return new Promise((e, o) => {
      chrome.storage.local.get(["exclusions"], function (s) {
        chrome.runtime.lastError
          ? (console.debug("Rejecting GetExclusionsNode after datastore"), o({ error: chrome.runtime.lastError.message }))
          : s && s.exclusions
          ? e(s.exclusions)
          : e(s);
      });
    });
  }
  exclude_makeNegative(e) {
    let o = [];
    for (let s = 0; s < e.length; s++) e[s] > 0 ? (o[s] = -1 * e[s]) : (o[s] = e[s]);
    return o;
  }
  exclude_mapExclusionsToInts(e) {
    try {
      const o = e.split(",").map((e) => ExclusionHandler.exclusionConstantToInt(e));
      return Promise.resolve(o);
    } catch (e) {
      return console.log("Rejecting MapExclusions with: ", e), Promise.reject(e);
    }
  }
  exclude_mapIntsToExclusions(e) {
    try {
      const o = [...e.map((e) => ExclusionHandler.exclusionIntToConstant(e))];
      return Promise.resolve(o.join(","));
    } catch (e) {
      return console.log("Rejecting MapInts with: ", e), Promise.reject(e);
    }
  }
  exclude_mergeExclusions(e, o, s, r) {
    let n = this.exclude_normalizeExclusions(o);
    return (
      console.debug("EME: mergeExclusions normalized arr:", n),
      n.length > 0
        ? ((n = this.exclude_unopposeMergeExclusions(n, s)),
          console.debug("EME: mergeExclusions ran 'unoppose', new arr:", n),
          r || (s = this.exclude_makeNegative(s)),
          (this.EXCLUSIONS[e] = n.concat(s)))
        : (r || (s = this.exclude_makeNegative(s)), (this.EXCLUSIONS[e] = s)),
      console.debug("EME: mergeExclusions exclusions[" + e + "] set to:", this.EXCLUSIONS[e]),
      this.exclude_deduplicateMergeExclusions(e),
      console.debug("EME: mergeExclusions exclusions[" + e + "] deduplicated to:", this.EXCLUSIONS[e]),
      Promise.resolve(this.EXCLUSIONS[e])
    );
  }
  exclude_normalizeExclusions(e) {
    let o;
    if (e)
      if (Array.isArray(e)) o = e;
      else if (((o = []), e instanceof Object)) for (let s in e) e.hasOwnProperty(s) && o.push(s);
      else e && o.push(e);
    else o = [];
    return o;
  }
  exclude_removeExclusions(e, o, s) {
    if (o && Array.isArray(o) && o.length > 0)
      for (let e = 0; e < s.length; ++e) for (let r = 0; r < o.length; ++r) o[r] === s[e] && o.splice(r--, 1);
    return (
      console.debug("Delete node? " + (!o || 0 === o.length), o),
      o && 0 !== o.length
        ? ((this.EXCLUSIONS[e] = o), Promise.resolve(this.EXCLUSIONS[e]))
        : (delete this.EXCLUSIONS[e], Promise.resolve(null))
    );
  }
  exclude_setExclusionsNode(e, o) {
    return new Promise((s, r) => {
      chrome.storage.local.set({ exclusions: e }, function () {
        chrome.runtime.lastError
          ? (console.debug("Rejecting SetExclusionsNode"), r({ error: chrome.runtime.lastError.message }))
          : s({ success: o || !0 });
      });
    });
  }
  exclude_setNamedNode(e, o) {
    return new Promise((s, r) => {
      o
        ? (console.debug("Updating the named node"),
          chrome.storage.local.set({ [e]: o }, function () {
            chrome.runtime.lastError
              ? (console.debug("Rejecting SetNamedNode in datastore"), r({ error: chrome.runtime.lastError.message }))
              : (console.debug("Resolving SetNamedNode in datastore"), s(o));
          }))
        : e &&
          (console.debug("Removing the named node"),
          chrome.storage.sync.remove(e, function () {
            chrome.runtime.lastError
              ? (console.debug("Rejecting SetNamedNode (remove) in datastore"), r({ error: chrome.runtime.lastError.message }))
              : (console.debug("Resolving SetNamedNode (remove) in datastore"), s({}));
          }));
    });
  }
  exclude_unopposeMergeExclusions(e, o) {
    for (let s = 0; s < o.length; s++) for (let r = 0; r < e.length; r++) (o[s] !== e[r] && o[s] !== -1 * e[r]) || e.splice(r--, 1);
    return e;
  }
  getExclusionsForHost(e) {
    let o = this.EXCLUSIONS[e];
    return o
      ? (console.debug("Resolving GetExistingData from cache:"), console.debug(o), Promise.resolve(o))
      : new Promise((o, s) => {
          chrome.storage.local.get([e], function (e) {
            chrome.runtime.lastError
              ? (console.debug("Rejecting GetExistingData after datastore"), s({ error: chrome.runtime.lastError.message }))
              : o(e);
          });
        });
  }
  getIndividualExclusions() {
    return new Promise((e) => {
      chrome.storage.local.get(["exclusionIndividual"], ({ exclusionIndividual: o = {} }) => {
        (this.EXCLUSION_INDIVIDUAL = o), e();
      });
    });
  }
  removeAllExclusions_clearCache() {
    return (this.EXCLUSIONS = {}), Promise.resolve(!0);
  }
  removeAllExclusions_removeExclusionsByNames(e) {
    return new Promise((o, s) => {
      chrome.storage.sync.remove(e, function () {
        chrome.runtime.lastError
          ? (console.debug("Rejecting RemoveNamedNodes"), s({ error: chrome.runtime.lastError.message }))
          : (console.debug("Resolving RemoveNamedNodes"), o({ success: !0 }));
      });
    });
  }
  removeAllExclusions_removeIndexNode() {
    return new Promise((e, o) => {
      chrome.storage.sync.remove("exclusions", function () {
        chrome.runtime.lastError
          ? (console.debug("Rejecting RemoveExclusionsNode"), o({ error: chrome.runtime.lastError.message }))
          : (console.debug("Resolving RemoveExclusionsNode"), e({ success: !0 }));
      });
    });
  }
  removeExclusions_removeCacheNode(e) {
    return new Promise((o) => {
      delete this.EXCLUSIONS[e], o({ success: !0 });
    });
  }
  removeExclusions_removeHostFromIndex(e, o) {
    for (let s = 0; s < o.length; ++s) o[s] === e && o.splice(s--, 1);
    return Promise.resolve(o);
  }
  removeExclusions_removeHostNode(e) {
    return new Promise((o, s) => {
      chrome.storage.sync.remove([e], function () {
        chrome.runtime.lastError ? s({ error: chrome.runtime.lastError.message }) : o({ success: !0 });
      });
    });
  }
}
