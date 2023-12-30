import { chrome } from "../../../utils/polyfill";
import { malwarebytes } from "../app";
import ExclusionHandler from "./exclusions-common";
export class MV2ExclusionHandler extends ExclusionHandler {
  constructor() {
    super();
  }
  exclude(e, s) {
    let o;
    return (
      console.debug("EXC: On MapExclusions", { host: e, exclusions: s }),
      this.exclude_mapExclusionsToInts(s)
        .then((o) => ((s = o), (e = e.toLowerCase()), this.getExclusionsForHost(e)))
        .then((o) => (console.debug("EXC: On MergeExclusions for Exclude"), this.exclude_mergeExclusions(e, o, s, !0)))
        .then(
          (s) => (
            console.debug("EXC: On SetNamedNode matching merged exclusions:", malwarebytes.EXCLUSIONS), this.exclude_setNamedNode(e, s)
          )
        )
        .then((e) => ((o = e), console.debug("EXC: On GetExclusionsNode"), this.exclude_getExclusionsNode()))
        .then((s) => (console.debug("EXC: On AddKeyToExclusionsIndex"), this.exclude_addKeyToExclusionsIndex(e, s)))
        .then((e) => (console.debug("EXC: On SetExclusionsNode"), this.exclude_setExclusionsNode(e, o)))
        .catch((e) => (console.error(e), Promise.reject(e)))
    );
  }
  async exportExclusions() {
    const e = await this.getExclusions();
    for (const s in e) e.hasOwnProperty(s) && (e[s] = await this.exclude_mapIntsToExclusions(e[s]));
    return console.debug("EXC: Exporting Exclusions", e), e;
  }
  async importExclusions(e) {
    const s = await this.exportExclusions();
    console.debug("EXC: Importing Exclusions", e);
    for (const o in e)
      if (e.hasOwnProperty(o)) {
        if (s.hasOwnProperty(o) && s[o] === e[o]) continue;
        await this.exclude(o, e[o]);
      }
  }
  getExclusions() {
    return (
      this.getIndividualExclusions(),
      this.exclude_getExclusionsNode()
        .then((e) => this.getExclusions_getExclusionsByNames(e))
        .then((e) => {
          let s = {};
          for (let o in e)
            e.hasOwnProperty(o) &&
              (e[o].some((e) => "number" != typeof e || e <= 0) &&
                ((e[o] = e[o].filter((e) => "number" == typeof e && e >= 0)),
                console.debug("EXC: Exclusion values cleaned succesfully", o, e[o])),
              (s = { ...s, [o]: e[o] }));
          return (this.EXCLUSIONS = s), Promise.resolve(s);
        })
        .catch((e) => (console.error("GE: Exclusion Get Error: ", e), Promise.reject(e)))
    );
  }
  getExclusions_getExclusionsByNames(e) {
    return new Promise((s, o) => {
      chrome.storage.sync.get(e, function (e) {
        chrome.runtime.lastError ? o({ error: chrome.runtime.lastError.message }) : s(e);
      });
    });
  }
  async removeAllExclusions() {
    await this.removeAllExclusions_clearCache();
    const e = await this.exclude_getExclusionsNode();
    return await this.removeAllExclusions_removeExclusionsByNames(e), await this.removeAllExclusions_removeIndexNode(), e;
  }
  removeExclude(e, s, o) {
    let r;
    return this.exclude_mapExclusionsToInts(s)
      .then((o) => ((s = o), (e = e.toLowerCase()), console.debug("RMX: On GetExistingData"), this.getExclusionsForHost(e)))
      .then((o) => this.exclude_removeExclusions(e, o, s))
      .then((r) =>
        o && !0 === o ? (console.log("RMX: OnMergeExclusions for Add"), this.exclude_mergeExclusions(e, r, s, !1)) : Promise.resolve(r)
      )
      .then((s) => (console.debug("RMX: On SetNamedNode matching merged exclusions:", this.EXCLUSIONS), this.exclude_setNamedNode(e, s)))
      .then((e) => ((r = e), console.debug("EXC: On GetExclusionsNode"), this.exclude_getExclusionsNode()))
      .then((s) => (console.debug("EXC: On AddKeyToExclusionsIndex"), this.exclude_addKeyToExclusionsIndex(e, s)))
      .then((e) => (console.debug("EXC: On SetExclusionsNode"), this.exclude_setExclusionsNode(e, r)))
      .catch((e) => Promise.reject(e));
  }
  removeExclusions(e) {
    return this.removeExclusions_removeCacheNode(e)
      .then((s) => this.removeExclusions_removeHostNode(e))
      .then((e) => this.exclude_getExclusionsNode())
      .then((s) => this.removeExclusions_removeHostFromIndex(e, s))
      .then((e) => this.exclude_setExclusionsNode(e))
      .catch((e) => Promise.reject(e));
  }
  excludeTemporarily(e, s) {}
  isTemporarilyExcluded(e, s) {}
  exclude_addKeyToExclusionsIndex(e, s) {
    if ((console.log("exclude_addKeyToExclusionsIndex: starting with: ", s), s)) {
      if (!Array.isArray(s)) {
        let e = s;
        s = [];
        for (let o in e) e.hasOwnProperty(o) && s.push(e);
      }
    } else s = [];
    return (
      console.debug("exclude_addKeyToExclusionsIndex: normalized to: ", s),
      s.includes(e) || s.push(e),
      console.debug("exclude_addKeyToExclusionsIndex: resolving as: "),
      console.debug(s),
      Promise.resolve(s)
    );
  }
  exclude_deduplicateMergeExclusions(e) {
    for (let s = 0; s < this.EXCLUSIONS[e].length; ++s)
      for (let o = s + 1; o < this.EXCLUSIONS[e].length; ++o)
        this.EXCLUSIONS[e][s] === this.EXCLUSIONS[e][o] && this.EXCLUSIONS[e].splice(o--, 1);
  }
  exclude_getExclusionsNode() {
    return new Promise((e, s) => {
      chrome.storage.sync.get(["exclusions"], function (o) {
        chrome.runtime.lastError
          ? (console.debug("Rejecting GetExclusionsNode after datastore"), s({ error: chrome.runtime.lastError.message }))
          : o && o.exclusions
          ? e(o.exclusions)
          : e(o);
      });
    });
  }
  exclude_makeNegative(e) {
    let s = [];
    for (let o = 0; o < e.length; o++) e[o] > 0 ? (s[o] = -1 * e[o]) : (s[o] = e[o]);
    return s;
  }
  exclude_mapExclusionsToInts(e) {
    try {
      const s = e.split(",").map((e) => ExclusionHandler.exclusionConstantToInt(e));
      return Promise.resolve(s);
    } catch (e) {
      return console.log("Rejecting MapExclusions with: ", e), Promise.reject(e);
    }
  }
  exclude_mapIntsToExclusions(e) {
    try {
      const s = [...e.map((e) => ExclusionHandler.exclusionIntToConstant(e))];
      return Promise.resolve(s.join(","));
    } catch (e) {
      return console.log("Rejecting MapInts with: ", e), Promise.reject(e);
    }
  }
  exclude_mergeExclusions(e, s, o, r) {
    let n = this.exclude_normalizeExclusions(s);
    return (
      console.debug("EME: mergeExclusions normalized arr:", n),
      n.length > 0
        ? ((n = this.exclude_unopposeMergeExclusions(n, o)),
          console.debug("EME: mergeExclusions ran 'unoppose', new arr:", n),
          r || (o = this.exclude_makeNegative(o)),
          (this.EXCLUSIONS[e] = n.concat(o)))
        : (r || (o = this.exclude_makeNegative(o)), (this.EXCLUSIONS[e] = o)),
      console.debug("EME: mergeExclusions exclusions[" + e + "] set to:", this.EXCLUSIONS[e]),
      this.exclude_deduplicateMergeExclusions(e),
      console.debug("EME: mergeExclusions exclusions[" + e + "] deduplicated to:", this.EXCLUSIONS[e]),
      Promise.resolve(this.EXCLUSIONS[e])
    );
  }
  exclude_normalizeExclusions(e) {
    let s;
    if (e)
      if (Array.isArray(e)) s = e;
      else if (((s = []), e instanceof Object)) for (let o in e) e.hasOwnProperty(o) && s.push(o);
      else e && s.push(e);
    else s = [];
    return s;
  }
  exclude_removeExclusions(e, s, o) {
    if (s && Array.isArray(s) && s.length > 0)
      for (let e = 0; e < o.length; ++e) for (let r = 0; r < s.length; ++r) s[r] === o[e] && s.splice(r--, 1);
    return (
      console.debug("Delete node? " + (!s || 0 === s.length), s),
      s && 0 !== s.length
        ? ((this.EXCLUSIONS[e] = s), Promise.resolve(this.EXCLUSIONS[e]))
        : (delete this.EXCLUSIONS[e], Promise.resolve(null))
    );
  }
  exclude_setExclusionsNode(e, s) {
    return new Promise((o, r) => {
      chrome.storage.sync.set({ exclusions: e }, function () {
        chrome.runtime.lastError
          ? (console.debug("Rejecting SetExclusionsNode"), r({ error: chrome.runtime.lastError.message }))
          : o({ success: s || !0 });
      });
    });
  }
  exclude_setNamedNode(e, s) {
    return new Promise((o, r) => {
      s
        ? (console.debug("Updating the named node"),
          chrome.storage.sync.set({ [e]: s }, function () {
            chrome.runtime.lastError
              ? (console.debug("Rejecting SetNamedNode in datastore"), r({ error: chrome.runtime.lastError.message }))
              : (console.debug("Resolving SetNamedNode in datastore"), o(s));
          }))
        : e &&
          (console.debug("Removing the named node"),
          chrome.storage.sync.remove(e, function () {
            chrome.runtime.lastError
              ? (console.debug("Rejecting SetNamedNode (remove) in datastore"), r({ error: chrome.runtime.lastError.message }))
              : (console.debug("Resolving SetNamedNode (remove) in datastore"), o({}));
          }));
    });
  }
  exclude_unopposeMergeExclusions(e, s) {
    for (let o = 0; o < s.length; o++) for (let r = 0; r < e.length; r++) (s[o] !== e[r] && s[o] !== -1 * e[r]) || e.splice(r--, 1);
    return e;
  }
  getExclusionsForHost(e) {
    let s = this.EXCLUSIONS[e];
    return s
      ? (console.debug("Resolving GetExistingData from cache:"), console.debug(s), Promise.resolve(s))
      : new Promise((s, o) => {
          chrome.storage.sync.get([e], function (e) {
            chrome.runtime.lastError
              ? (console.debug("Rejecting GetExistingData after datastore"), o({ error: chrome.runtime.lastError.message }))
              : s(e);
          });
        });
  }
  getIndividualExclusions() {
    return new Promise((e) => {
      chrome.storage.sync.get(["exclusionIndividual"], ({ exclusionIndividual: s = {} }) => {
        (this.EXCLUSION_INDIVIDUAL = s), e();
      });
    });
  }
  removeAllExclusions_clearCache() {
    return (this.EXCLUSIONS = {}), Promise.resolve(!0);
  }
  removeAllExclusions_removeExclusionsByNames(e) {
    return new Promise((s, o) => {
      chrome.storage.sync.remove(e, function () {
        chrome.runtime.lastError
          ? (console.debug("Rejecting RemoveNamedNodes"), o({ error: chrome.runtime.lastError.message }))
          : (console.debug("Resolving RemoveNamedNodes"), s({ success: !0 }));
      });
    });
  }
  removeAllExclusions_removeIndexNode() {
    return new Promise((e, s) => {
      chrome.storage.sync.remove("exclusions", function () {
        chrome.runtime.lastError
          ? (console.debug("Rejecting RemoveExclusionsNode"), s({ error: chrome.runtime.lastError.message }))
          : (console.debug("Resolving RemoveExclusionsNode"), e({ success: !0 }));
      });
    });
  }
  removeExclusions_removeCacheNode(e) {
    return new Promise((s) => {
      delete this.EXCLUSIONS[e], s({ success: !0 });
    });
  }
  removeExclusions_removeHostFromIndex(e, s) {
    for (let o = 0; o < s.length; ++o) s[o] === e && s.splice(o--, 1);
    return Promise.resolve(s);
  }
  removeExclusions_removeHostNode(e) {
    return new Promise((s, o) => {
      chrome.storage.sync.remove([e], function () {
        chrome.runtime.lastError ? o({ error: chrome.runtime.lastError.message }) : s({ success: !0 });
      });
    });
  }
}