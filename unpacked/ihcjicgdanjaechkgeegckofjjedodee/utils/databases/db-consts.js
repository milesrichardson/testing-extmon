import { chrome } from "../polyfill";
import { isMV3 } from "../utils";
export const DB_NAMES_BLOOM = [
  "mbgc.db.ads.2",
  "mbgc.db.adware.2",
  "mbgc.db.compromised.2",
  "mbgc.db.exploit.2",
  "mbgc.db.fraud.2",
  "mbgc.db.hijack.2",
  "mbgc.db.malvertising.2",
  "mbgc.db.pharma.2",
  "mbgc.db.phishing.2",
  "mbgc.db.ransomware.2",
  "mbgc.db.reputation.2",
  "mbgc.db.riskware.2",
  "mbgc.db.spam.2",
  "mbgc.db.spyware.2",
  "mbgc.db.trojan.2",
  "mbgc.db.whitelist.ads.2",
  "mbgc.db.whitelist.malware.2",
  "mbgc.db.worm.2",
  "mbgc.db.whitelist.scams.manual.2",
  "mbgc.db.top1m.2"
];
export const DB_NAMES_RAW = [
  "mbgc.db.malware.partial.urls.2",
  "mbgc.db.malware.patterns.2",
  "mbgc.db.malware.urls.2",
  "mbgc.db.whitelist.scams.patterns.2",
  "mbgc.db.whitelist.tracker.2"
];
export const DB_NAME_FEATURE_FLAGS = "mbgc.db.featureflags.2";
export const rulesetOverrideDbName = () => {
  const b = chrome.runtime.getManifest().version;
  return isMV3() ? [`mbgc.db.rulesetoverride.${b}`] : [];
};
export const DB_NAMES_ALL = [...DB_NAMES_BLOOM, ...DB_NAMES_RAW, DB_NAME_FEATURE_FLAGS, ...rulesetOverrideDbName()];
export const REGEX_DBS = ["malware_partial_urls", "malware_patterns", "whitelist_scams_patterns"];
export const DB_DIR = "db";
