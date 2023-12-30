const BG_WRAPPER = new Proxy(
  {},
  {
    get(t, p, r) {
      const v = Reflect.get(t, p, r);
      if (typeof v !== "undefined") return v;

      return () => chrome.runtime.sendMessage({ type: p }).then((k) => k.res);
    }
  }
);

const agreeBtn = document.querySelector("#agree");
const disagreeBtn = document.querySelector("#disagree");

const redirectTo = "/popup/popup.html";

BG_WRAPPER.isPolicyAgreed().then((isPolicyAgreed) => {
  console.log(isPolicyAgreed);
  if (isPolicyAgreed !== 0) {
    location.href = redirectTo;
  }
});

agreeBtn.addEventListener("click", async () => {
  await BG_WRAPPER.agreePolicy();
  location.href = redirectTo;
});

disagreeBtn.addEventListener("click", async () => {
  await BG_WRAPPER.rejectPolicy();
  location.href = redirectTo;
});
