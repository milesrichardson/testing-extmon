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

BG_WRAPPER.isPolicyAgreed().then((isPolicyAgreed) => {
  if (isPolicyAgreed !== 0) window.close();

  BG_WRAPPER.rejectPolicy();
});

agreeBtn.addEventListener("click", async () => {
  await BG_WRAPPER.agreePolicy();
  window.close();
});

disagreeBtn.addEventListener("click", async () => {
  await BG_WRAPPER.rejectPolicy();
  window.close();
});
