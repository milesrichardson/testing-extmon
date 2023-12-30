function addWebsiteAbilities(T) {
  var E = document.documentElement.getAttribute("lastpass-extension"),
    E;
  (E = (E = E ? E.split(" ") : []).concat(T)), document.documentElement.setAttribute("lastpass-extension", E.join(" "));
}
((Topics = (function () {
  var c = {};
  return {
    publish: function (T, E) {
      Topics.get(T).publish(E);
    },
    get: function (T) {
      var E = T && c[T],
        s,
        i,
        o,
        E;
      return (
        E ||
          ((s = []),
          (i = function (T) {
            for (var E = 0, i = s.length; E < i; ++E) if (T === s[E]) return E;
            return -1;
          }),
          (o = function (T) {
            var T = i(T);
            -1 < T && s.splice(T, 1);
          }),
          (E = {
            publish: function () {
              for (var T = !0, E = s.slice(), i = 0, o = E.length; i < o && !1 !== T; ++i)
                try {
                  "function" == typeof E[i] && (T = E[i].apply(window, arguments));
                } catch (T) {
                  "function" == typeof LPPlatform.logException && LPPlatform.logException(T);
                }
            },
            subscribe: function (T) {
              -1 === i(T) && s.push(T);
            },
            subscribeFirst: function (T) {
              o(T), s.unshift(T);
            },
            unsubscribe: function (T) {
              o(T);
            }
          }),
          T && (c[T] = E)),
        E
      );
    }
  };
})()).ITEMS_DESELECTED = 1),
  (Topics.ITEMS_SELECTED = 2),
  (Topics.CONTEXT_MENU = 3),
  (Topics.CONFIRM = 4),
  (Topics.ITEM_SHARE = 5),
  (Topics.ERROR = 6),
  (Topics.SUCCESS = 7),
  (Topics.IDENTITY_ENABLE = 8),
  (Topics.SITE_ADDED = 9),
  (Topics.NOTE_ADDED = 10),
  (Topics.FORM_FILL_ADDED = 11),
  (Topics.EDIT_NOTE = 12),
  (Topics.EDIT_SITE = 13),
  (Topics.EDIT_FORM_FILL = 14),
  (Topics.ACCEPT_SHARE = 15),
  (Topics.REJECT_SHARE = 16),
  (Topics.GROUP_ADDED = 17),
  (Topics.RENAME_FOLDER = 18),
  (Topics.CONTEXT_CLOSE = 19),
  (Topics.EDIT_SETTINGS = 20),
  (Topics.REQUEST_START = 21),
  (Topics.REQUEST_SUCCESS = 22),
  (Topics.REQUEST_ERROR = 23),
  (Topics.COLLAPSE_ALL = 24),
  (Topics.EXPAND_ALL = 25),
  (Topics.DISPLAY_GRID = 26),
  (Topics.DISPLAY_LIST = 27),
  (Topics.CLEAR_DATA = 28),
  (Topics.EDIT_IDENTITY = 29),
  (Topics.CREATE_SUB_FOLDER = 30),
  (Topics.DIALOG_OPEN = 31),
  (Topics.DIALOG_CLOSE = 32),
  (Topics.ESCAPE = 33),
  (Topics.IDENTITY_ADDED = 34),
  (Topics.PUSH_STATE = 35),
  (Topics.EDIT_SHARED_FOLDER = 36),
  (Topics.LEFT_ARROW = 37),
  (Topics.RIGHT_ARROW = 38),
  (Topics.PASSWORD_CHANGE = 39),
  (Topics.UP_ARROW = 40),
  (Topics.DOWN_ARROW = 41),
  (Topics.ENTER = 42),
  (Topics.EDIT_SHARED_FOLDER_ACCESS = 43),
  (Topics.REMOVED_SHARED_FOLDER_USER = 44),
  (Topics.LOGIN = 45),
  (Topics.REFRESH_DATA = 46),
  (Topics.ACCOUNT_LINKED = 48),
  (Topics.ACCOUNT_UNLINKED = 49),
  (Topics.CREATE_SHARED_FOLDER = 50),
  (Topics.DIALOG_LOADING = 51),
  (Topics.DIALOG_LOADED = 52),
  (Topics.REPROMPT = 53),
  (Topics.EDIT_APPLICATION = 54),
  (Topics.ATTACHMENT_REMOVED = 55),
  (Topics.CLEAR_STATE = 56),
  (Topics.SELECT_COUNT_CHANGE = 57),
  (Topics.REAPPLY_SEARCH = 58),
  (Topics.EMERGENCY_RECIPIENT_ADDED = 59),
  (Topics.EDIT_EMERGENCY_RECIPIENT = 60),
  (Topics.UPDATE_NOTIFICATION_COUNT = 61),
  (Topics.UPDATE_VAULT_STATE = 62),
  (Topics.ENROLLED_CREDIT_MONITORING = 63),
  (Topics.ITEM_SHARED = 64),
  (Topics.REFRESH_PREFERENCES = 65),
  (Topics.DISPLAY_COMPACT = 66),
  (Topics.DISPLAY_LARGE = 67),
  (Topics.ALL_COLLAPSED = 68),
  (Topics.ALL_EXPANDED = 69),
  (Topics.APPLICATION_ADDED = 70),
  (Topics.REQUEST_STATUS = 71),
  (Topics.DIALOG_RESIZE = 72),
  (Topics.SECURENOTE_TEMPLATE_ADDED = 73),
  (Topics.INITIALIZED = 74),
  (Topics.REQUEST_FRAMEWORK_INITIALIZED = 75),
  (Topics.SITE_NOTIFICATION_STATE = 76),
  (Topics.SITE_NOTIFICATION = 77),
  (Topics.DROPDOWN_SHOWN = 78),
  (Topics.DROPDOWN_HIDE = 79),
  (Topics.FILLED_GENERATED_PW = 80),
  (Topics.VAULT_LEFT_MENU_TOGGLE = 81),
  (Topics.EMPTY_VAULT_STATE_CHANGE = 82),
  (Topics.LOGIN_FINISHED = 83),
  (Topics.ACCTS_VERSION_UPDATED = 84),
  (Topics.ITEM_REMOVED = 85),
  (Topics.INFIELD_NOTIFICATION_OPENED = 86),
  (Topics.INFIELD_NOTIFICATION_CLOSED = 87),
  (Topics.INFIELD_NOTIFICATION_FILLED = 88),
  (Topics.INFIELD_FRAME_POSITION_CHANGED = 89),
  (Topics.MIGRATION_RUNNING = 90),
  (Topics.BLOB_UPDATED = 91),
  (Topics.CONVERT_FOLDER_TO_LEGACY = 92),
  (Topics.FORM_SUBMITTED = 93),
  (Topics.INTRO_TOURS_LOADED = 94),
  (Topics.PREFERENCES_READ = 95),
  (Topics.PREFERENCES_WRITE = 96),
  (Topics.MANUAL_LOGIN_FINISHED = 97),
  (Topics.PROCESSED_FORM_SUBMIT = 98),
  (Topics.BADGE_NOTIFICATION = 99),
  (Topics.BADGE_CLEAR = 100),
  (Topics.POPOVER_RESIZE = 101),
  (Topics.MATCHING_ITEMS_CHANGED = 102),
  (Topics.PASSWORD_FORM_SUBMITTED = 103),
  (Topics.REMOVED_SHARE = 104),
  (Topics.ACCOUNT_LINKED_NEEDS_VERIFICATION = 105),
  (Topics.CONTENT_SCRIPT_ADD_SITE_DIALOG_OPENED = 106),
  (Topics.SPA_IFRAME_WEB_CLIENT_INITIALIZED = 107),
  (function (s) {
    var E;
    (s.requestFrameworkInitializer =
      ((E = function (T, E) {
        var i = T("", { name: "requestPort" });
        return (
          i.onMessage.addListener(E),
          function (T) {
            i.postMessage(T);
          }
        );
      }),
      function (T) {
        return E((chrome.runtime && chrome.runtime.connect) || parent.chrome.runtime.connect, T);
      })),
      (s.installBinary = function (E, i) {
        var o = getBG();
        chrome.permissions.contains({ permissions: ["nativeMessaging"] }, function (T) {
          E || T ? o.openURL(o.base_url + "installer/") : s.requestNativeMessaging(i);
        });
      }),
      (s.requestNativeMessaging = function (T) {
        var E = getBG();
        E.Preferences.set("native_messaging_asked", "1"),
          T
            ? window.open("/native_messaging.html?hidenever=1")
            : void 0 !== chrome.permissions &&
              chrome.permissions.request({ permissions: ["nativeMessaging", "privacy"] }, function (T) {
                T && alert(E.gs("Please restart your browser to finish enabling native messaging."));
              });
      });
  })((LPPlatform = "undefined" == typeof LPPlatform ? {} : LPPlatform)),
  addWebsiteAbilities("recovery"),
  (function () {
    var o = null,
      T,
      s = LPPlatform.requestFrameworkInitializer(function (T) {
        (T.fromExtension = !0), o && o.target.postMessage(T, o.origin);
      }),
      E;
    window.addEventListener(
      "message",
      function (T) {
        var E = T.data,
          i = E && E.data;
        !E.type ||
          !(o =
            null === o && (T.origin === window.origin || ("undefined" != typeof bg && bg.get("base_url") === T.origin + "/"))
              ? { target: T.source, origin: T.origin }
              : o) ||
          o.target !== T.source ||
          o.origin !== T.origin ||
          E.fromExtension ||
          (i && i.cmd && "Recovery" !== i.cmd[0]) ||
          s(E);
      },
      !0
    );
  })();
