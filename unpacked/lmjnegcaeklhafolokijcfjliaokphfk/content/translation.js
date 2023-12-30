(() => {
  weh.is_safe.then(() => {
    let r = combineReducers({ translate: translateReducer }),
      s = createStore(r);
    var e = null;
    try {
      e = JSON.parse(browser.i18n.getMessage("__missingI18nTags"));
    } catch {}
    function t() {
      return React.createElement(
        "a",
        { href: "#", onClick: () => weh.rpc.call("openTranslationForum") },
        "Please, share your translations"
      );
    }
    render(
      React.createElement(Provider, { store: s }, React.createElement(WehTranslationForm, { missingTags: e, footerExtra: t() })),
      document.getElementById("root")
    ),
      weh.setPageTitle(weh._("translation"));
  });
})();
