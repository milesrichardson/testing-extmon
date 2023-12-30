const disableService = () => safeMeeting().then((service) => service.disable());
const enableService = () => safeMeeting().then((service) => service.enable());

const rejectPolicy = () =>
  new Promise((r) => {
    disableService();

    chrome.storage.local.set({ POLICY_AGREEMENT: 1 }, function () {
      r();
    });
  });

const agreePolicy = () =>
  new Promise((r) => {
    enableService;

    chrome.storage.local.set({ POLICY_AGREEMENT: 2 }, function () {
      r();
    });
  });

const isPolicyAgreed = () =>
  new Promise((r) => {
    chrome.storage.local.get(["POLICY_AGREEMENT"], function (result) {
      r(result.POLICY_AGREEMENT || 0);
    });
  });

const client_lib = {
  disableService,
  enableService,
  rejectPolicy,
  agreePolicy,
  isPolicyAgreed
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (client_lib.hasOwnProperty(request.type)) {
    client_lib[request.type]().then((res) => {
      sendResponse({ res });
    });

    return true;
  }
});

// Below is the consent screen
async function k() {
  const policyAgreed = await isPolicyAgreed();

  if (policyAgreed === 0 /* unset */) {
    const w = await new Promise((r) =>
      chrome.windows.create(
        {
          focused: true,
          width: 360,
          height: 360,
          type: "popup",
          url: chrome.runtime.getURL("popup/consentpopup.html")
        },
        r
      )
    );
  }
}
k();
