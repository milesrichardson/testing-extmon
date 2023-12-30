const agreeBtn = document.querySelector("#agree");
const disagreeBtn = document.querySelector("#disagree");

chrome.runtime.getBackgroundPage(function (backgroundPage) {
  const redirectTo = "/popup/popup.html";

  backgroundPage.isPolicyAgreed((isPolicyAgreed) => {
    if (isPolicyAgreed !== 0) {
      location.href = redirectTo;
    }
  });

  agreeBtn.addEventListener("click", async () => {
    const service = await backgroundPage.safeMeeting();
    service.enable();
    await new Promise((r) => backgroundPage.agreePolicy(r));
    location.href = redirectTo;
  });

  disagreeBtn.addEventListener("click", async () => {
    await new Promise((r) => backgroundPage.rejectPolicy(r));
    location.href = redirectTo;
  });
});
