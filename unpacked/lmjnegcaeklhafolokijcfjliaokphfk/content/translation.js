(() => {
  "use strict";
  var e = combineReducers({ translate: translateReducer }),
    t = createStore(e),
    r = null;
  try {
    r = JSON.parse(browser.i18n.getMessage("__missingI18nTags"));
  } catch (e) {}
  render(
    React.createElement(
      Provider,
      { store: t },
      React.createElement(WehTranslationForm, {
        missingTags: r,
        footerExtra: React.createElement(
          "a",
          {
            href: "#",
            onClick: function () {
              return weh.rpc.call("openTranslationForum");
            }
          },
          "Please, share your translations"
        )
      })
    ),
    document.getElementById("root")
  ),
    weh.setPageTitle(weh._("translation"));
})();