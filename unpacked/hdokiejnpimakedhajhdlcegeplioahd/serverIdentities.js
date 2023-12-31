LPServer.identities = (function () {
  var i = function (e, i) {
      var t = {
        iid: e.params.identity.iid,
        iname: e.params.identity.iname,
        edit: "1",
        aids: e.params.identity.aids,
        ffids: e.params.identity.ffids,
        appaids: e.params.identity.appaids
      };
      e.params.identity.pw_prompt && (t.pwprotect = "on"),
        LPServer.xmlRequest({ url: "identity.php", data: t, success: i, userSupplied: e });
    },
    e,
    t,
    d;
  return {
    add: function (e) {
      i(e, "identadded");
    },
    remove: function (e) {
      LPServer.xmlRequest({
        url: "identity.php",
        data: { src: "website", deleteext: 1, iid: e.params.id },
        success: "identdeleted",
        userSupplied: e
      });
    },
    update: function (e) {
      i(e, "identupdated");
    }
  };
})();
