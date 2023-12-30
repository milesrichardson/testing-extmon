const agreeBtn = document.querySelector("#agree");
const disagreeBtn = document.querySelector("#disagree");

chrome.runtime.getBackgroundPage(function (backgroundPage) {
  backgroundPage.isPolicyAgreed((isPolicyAgreed) => {
    if (isPolicyAgreed !== 0) {
      window.close();
    } else {
      backgroundPage.rejectPolicy(() => {});
    }
  });

  agreeBtn.addEventListener("click", async () => {
    const service = await backgroundPage.safeMeeting();
    service.enable();
    await new Promise((r) => backgroundPage.agreePolicy(r));
    window.close();
  });

  disagreeBtn.addEventListener("click", async () => {
    await new Promise((r) => backgroundPage.rejectPolicy(r));
    window.close();
  });
});
