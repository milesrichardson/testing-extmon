(LPServer.vault = LPServer.vault || {}),
  (LPServer.vault.history = (function () {
    "use strict";
    var s = function (r, a) {
        for (var e = [], s = 0; s < r.length; s++) {
          var t = r[s];
          e[s] = { value: t[0], date: t[1], whom: 2 < t.length ? t[2] : "" };
        }
        a.success(e);
      },
      r = function (e) {
        return function (r) {
          if (!r || !r.params || !r.params.aid) throw new Error("Missing parameter values.");
          var a = { aid: r.params.aid };
          r.params.shareId && (a.sharedfolderid = r.params.shareId), LPServer.jsonRequest({ url: e, data: a, success: s, userSupplied: r });
        };
      },
      e = r("getPasswordHist.php"),
      a = r("getUsernameHist.php"),
      r = r("getNoteHist.php"),
      t;
    return {
      revertPasswordChange: function (a) {
        if (!(a && a.params && a.params.key && a.params.aid)) throw new Error("Missing parameter values.");
        var r;
        e({
          params: { aid: a.params.aid, shareId: a.params.shareId },
          success: function (r) {
            var r, r;
            0 < r.length &&
              ((r = r[r.length - 1].value), (r = dec(r, a.params.key)), changePassword(r, [a.params.aid], !1, a.success, a.error));
          },
          error: a.error
        });
      },
      getPasswordHistory: e,
      getUsernameHistory: a,
      getNoteHistory: r
    };
  })());
