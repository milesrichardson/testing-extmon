import { chrome } from "../../../utils/polyfill";
import { MV2ExclusionHandler } from "./exclusions-mv2";
import { MV3ExclusionHandler } from "./exclusions-mv3";
import { EXCLUSION_ADS, EXCLUSION_MALWARE, EXCLUSION_SCAMS } from "../app-consts";
const isMV3 = 3 === chrome.runtime.getManifest().manifest_version,
  mv3ExclusionHandler = new MV3ExclusionHandler(),
  mv2ExclusionHandler = new MV2ExclusionHandler();
export const exclusionHandler = isMV3 ? mv3ExclusionHandler : mv2ExclusionHandler;
export async function migrateExclusionsToMV3() {
  if ((console.debug("MV3_Exclusion_Migrate: Migrating to MV3"), !isMV3)) return;
  const o = await mv2ExclusionHandler.getExclusions();
  console.debug("MV3_Exclusion_Migrate: Migrating Allow List", o);
  for (const [n, i] of Object.entries(o))
    try {
      console.debug("MV3_Exclusion_Migrate: Migrating Allow List for domain and ints", { domain: n, exclusionInts: i });
      const o = i.map((o) => exclusionIntToConstant(o));
      console.debug("MV3_Exclusion_Migrate: Migrating Allow List for domain and consts", { domain: n, exclusionConsts: o }),
        await mv3ExclusionHandler.exclude(n, o),
        console.debug("MV3_Exclusion_Migrate: Migrated Allow List for domain", n);
    } catch (o) {
      console.error("MV3_Exclusion_Migrate: Error migrating Allow List for domain", { domain: n, exclusionInts: i, error: o });
    }
}
const exclusionIntToConstant = (o) => {
  switch (o) {
    case 2:
    case 3:
      return EXCLUSION_ADS;
    case 4:
      return EXCLUSION_MALWARE;
    case 6:
      return EXCLUSION_SCAMS;
  }
  throw new Error(`${o} is not recognised`);
};
