import { chrome } from "../../../utils/polyfill";
import { Mv3UserBlocksHandler } from "./user-blocks-mv3";
import { Mv2UserBlocksHandler } from "./user-blocks-mv2";
const isMV3 = 3 === chrome.runtime.getManifest().manifest_version,
  mv3UserBlocksHandler = new Mv3UserBlocksHandler(),
  mv2UserBlocksHandler = new Mv2UserBlocksHandler();
export const userBlocksHandler = isMV3 ? mv3UserBlocksHandler : mv2UserBlocksHandler;
export async function migrateUserBlocksToMV3() {
  if ((console.debug("MV3_UserBlocks_Migrate: Migrating to MV3"), isMV3))
    try {
      const e = await mv2UserBlocksHandler.getBlockedItems();
      console.debug("MV3_UserBlocks_Migrate: Migrating user blocks", e),
        await mv3UserBlocksHandler.blockItems(e),
        console.debug("MV3_UserBlocks_Migrate: Migrated user blocks", e);
    } catch (e) {
      console.error("MV3_UserBlocks_Migrate: Error migrating user blocks", e);
    }
}
