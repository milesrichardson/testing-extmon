import "/libs/safe-meeting.js";
import "/common.js";

chrome.runtime.onUpdateAvailable.addListener(function (details) {
  console.log(`Version Outdated - Updating to ${details.version}`);
  chrome.runtime.reload();
});

(async () => {
  const service = await globalThis.safeMeeting();
  service.onPageVisited((pageStatus) => {
    if (pageStatus.status === "UNSAFE") {
      chrome.runtime.sendMessage("UNSAFE");
    } else chrome.runtime.sendMessage("SAFE");
  });
})().then();
