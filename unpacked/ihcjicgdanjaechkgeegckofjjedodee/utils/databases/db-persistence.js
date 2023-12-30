import { DB_NAMES_BLOOM, DB_NAMES_RAW, REGEX_DBS, DB_DIR, DB_NAME_FEATURE_FLAGS, rulesetOverrideDbName } from "./db-consts";
import { IndexedDatabase } from "./indexed-database";
import { IndexedDatabaseFile } from "./indexed-database-file";
import { isIndexedDbAvailable, cleanDbName, objToBinary } from "../utils";
import { simpleStorageGet, simpleStorageSet } from "../storage";
import { getObjs as getObjsIndexedDb, saveObjs as saveObjsIndexedDb } from "../indexed-db";
import { fileWrite, fileDelete, queuedFileRead } from "../file";
import bundledDbVersions from "../../db/version.json";
const parseDbsParameter = (e) => {
  const a = new Set(e),
    s = DB_NAMES_BLOOM.filter((e) => a.has(e)),
    o = DB_NAMES_RAW.filter((e) => a.has(e)),
    n = s
      .map((e) => ({ name: e, cleanName: cleanDbName(e), isBloom: !0, isFeatureFlags: !1 }))
      .concat(o.map((e) => ({ name: e, cleanName: cleanDbName(e), isBloom: !1, isFeatureFlags: !1 })));
  a.has(DB_NAME_FEATURE_FLAGS) &&
    n.push({ name: DB_NAME_FEATURE_FLAGS, cleanName: cleanDbName(DB_NAME_FEATURE_FLAGS), isBloom: !1, isFeatureFlags: !0 });
  const r = rulesetOverrideDbName();
  return r.length > 0 && a.has(r[0]) && n.push({ name: r[0], cleanName: cleanDbName(r[0]), isBloom: !1, isFeatureFlags: !1 }), n;
};
export const loadBundledDatabases = async (e) => {
  console.debug("LBD: Forcing reading bundled databases at " + new Date().toLocaleString()),
    console.debug("LBD: Databases to be loaded:", e);
  const a = parseDbsParameter(e);
  console.debug("LBD: All DBs:", a);
  const s = [];
  a.forEach((e) => {
    s.push(loadBundledDb(e.name, e.isBloom, e.isFeatureFlags));
  });
  const o = [],
    n = await Promise.all(s);
  return (
    console.debug("LBD: DB Results:", JSON.stringify(n)),
    n.forEach((e) => {
      o.push(buildDbResult(e, bundledDbVersions[e.name].version));
    }),
    console.debug("LBD: Bundled unpack complete at " + new Date().toLocaleString()),
    console.log(`LBD: ${o.length} bundled databases loaded`),
    o
  );
};
export const loadCachedDatabases = async (e) => {
  if (!isIndexedDbAvailable()) return console.warn("LCD: IndexedDB not available in this browser"), [];
  const a = parseDbsParameter(e),
    s = await getObjsIndexedDb({
      dbName: "cachedDb",
      storeName: "cachedDbStore",
      storeOptions: { keyPath: "dbName" },
      waitStrategy: "allSettled",
      keys: a.map((e) => e.cleanName)
    }),
    o = [];
  s.forEach((e, s) => {
    const n = a[s];
    if ("rejected" === e.status) return void console.warn(`LCD: Error loading ${n.name} from the cache`, e.reason);
    if ("fulfilled" !== e.status) return void console.warn(`LCD: ${n.name} not loaded from cache`);
    const r = e.value;
    r
      ? r.dbName && r.data
        ? o.push(
            buildDbResult(
              {
                name: n.name,
                isBloom: n.isBloom,
                isFeatureFlags: n.isFeatureFlags,
                isRaw: !n.isBloom,
                result: n.isBloom ? new IndexedDatabase(n.name, r.data.bloomFilter) : r.data
              },
              r.version
            )
          )
        : console.debug(`LCD: No cache db for ${n.name}.`, n.name)
      : console.warn(`LCD: ${n.name} not loaded from cache`);
  });
  const n = o.filter((e) => !e.version);
  if (n.length > 0) {
    console.warn(`LCD: Found ${n.length} dbs with no version in the cache, querying simpleStorage to get the version`),
      console.debug(
        "LCD: Cache databases with no version",
        n.map((e) => e.name)
      );
    const e = (await simpleStorageGet("databases")) || {};
    n.forEach((a) => {
      (a.version = e[a.name] && e[a.name].version), console.debug(`LCD: Version for ${a.name}:`, a.version);
    });
    const a = n.filter((e) => e.version);
    a.length > 0 && (console.debug(`LCD: Re-writing ${a.length} databases in the cache, version was set`), await saveDbsToCache(a));
  }
  return console.log(`LCD: ${o.length} databases loaded from the cache`), o;
};
export const saveDbsToCache = async (e) => {
  if (!isIndexedDbAvailable()) return console.warn("SDTC: IndexedDB not available in this browser"), !1;
  var a = e.map((e) => {
    let a;
    return (
      (a = e.rawData ? e.rawData : e.data instanceof Set ? Array.from(e.data) : e.data),
      { dbName: e.cleanName, data: a, version: e.version }
    );
  });
  return await saveObjsIndexedDb({ dbName: "cachedDb", storeName: "cachedDbStore", storeOptions: { keyPath: "dbName" }, values: a }), !0;
};
export const loadIdbStorageDatabases = async (e) => {
  if (!isIndexedDbAvailable()) return console.warn("LISD: IndexedDB not available in this browser"), [];
  const a = parseDbsParameter(e),
    s = [];
  a.forEach((e) => {
    s.push(loadIdbStorageDb(e.name, e.isBloom, e.isFeatureFlags));
  });
  const o = [];
  (await Promise.allSettled(s)).forEach((e, s) => {
    const n = a[s];
    if ("rejected" == e.status) return void console.warn(`LISD: Error loading ${n.name} from the IdbStorage`, e.reason);
    const r = e.value;
    o.push(buildDbResult(r, r.version));
  });
  const n = o.filter((e) => !e.version);
  if (n.length > 0) {
    console.warn(`LISD: Found ${n.length} dbs with no version file, querying simpleStorage to get the version`),
      console.debug(
        "LISD: Databases with no version",
        n.map((e) => e.name)
      );
    const e = (await simpleStorageGet("databases")) || {},
      a = [];
    if (
      (n.forEach((s) => {
        (s.version = e[s.name] && e[s.name].version),
          console.debug(`LISD: Version for ${s.name}:`, s.version),
          s.version && a.push(saveVersionFile(s.name, s.version));
      }),
      a.length > 0)
    )
      try {
        await Promise.all(a), console.debug(`LISD: ${a.length} version files created`);
      } catch (e) {
        console.error("LISD: Error saving version files", e);
      }
  }
  return console.log(`LBD: ${o.length} databases loaded from IdbStorage`), o;
};
export const saveDownloadedDb = (e, a, s) => {
  if (!a) throw new Error("Version is required");
  return Promise.all([
    fileDelete(DB_DIR, e),
    fileWrite(DB_DIR, e, s),
    saveVersionFile(e, a),
    simpleStorageSet({ idbStorageDatabases: !0 })
  ]);
};
const saveVersionFile = (e, a) => {
    const s = objToBinary({ name: e, version: a });
    return fileWrite(DB_DIR, `${e}.version`, s);
  },
  getVersionFromVersionFile = (e, a) => {
    if (a)
      try {
        return JSON.parse(new TextDecoder().decode(a)).version;
      } catch (a) {
        return void console.warn(`GVFVF: Error parsing version file for ${e}`, a);
      }
    else console.warn(`GVFVF: Version file for ${e} is falsy`, a);
  },
  buildDbResult = (e, a) => {
    const s = {};
    return (
      (s.name = e.name),
      (s.version = a),
      (s.cleanName = cleanDbName(s.name)),
      (s.isBloom = e.isBloom),
      (s.isRaw = e.isRaw),
      (s.data = e.result),
      (s.isFeatureFlags = e.isFeatureFlags),
      "malware_urls" == s.cleanName && ((s.rawData = s.data), (s.data = new Set(s.data))),
      REGEX_DBS.includes(s.cleanName) && ((s.rawData = s.data), (s.data = s.data.map((e) => new RegExp(e, "i"))), (s.isRegex = !0)),
      s
    );
  },
  loadBundledDb = (e, a, s) => {
    const o = a && new IndexedDatabase(e),
      n = !a && new IndexedDatabaseFile(e);
    return (a ? o.parseBundled() : n.readBundled()).then((n) => ({ name: e, isBloom: a, isFeatureFlags: s, isRaw: !a, result: a ? o : n }));
  },
  loadIdbStorageDb = (e, a, s) => {
    const o = a && new IndexedDatabase(e),
      n = !a && new IndexedDatabaseFile(e),
      r = a ? o.parse() : n.read();
    return Promise.allSettled([r, queuedFileRead(`${e}.version`)]).then((n) => {
      const [r, t] = n;
      if ("rejected" == r.status) {
        if ("string" == typeof r.reason) throw new Error(`Error loading ${e} from IdbStorage: ${r.reason}`);
        throw r.reason;
      }
      const i = getVersionFromVersionFile(e, t.value);
      return { name: e, isBloom: a, isFeatureFlags: s, isRaw: !a, result: a ? o : r.value, version: i };
    });
  };
