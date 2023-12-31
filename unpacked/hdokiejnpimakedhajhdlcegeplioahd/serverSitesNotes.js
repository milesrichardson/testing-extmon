(LPServer.sitesAndNotes = (function () {
  var e, t;
  return {
    saveCustomNoteTemplate: function (t) {
      LPServer.lmiapi.jsonRequest({
        url: "lmiapi/note-templates",
        data: t.params,
        success: function (e) {
          t.success(LPServer.ext.translate("Custom Note Template: %s created.", e.title), e);
        },
        userSupplied: t
      });
    },
    deleteCustomNoteTemplate: function (t) {
      var s = g_note_templates.filter(function (e) {
        return e.id === t.params.id;
      });
      s &&
        0 < s.length &&
        LPServer.lmiapi.jsonRequest({
          url: "lmiapi/note-templates/" + t.params.id + "/delete",
          success: function (e) {
            t.success(LPServer.ext.translate("Custom Note Template: %s deleted.", s[0].title), e);
          },
          userSupplied: t
        });
    }
  };
})()),
  (LPServer.transact = (function () {
    var e;
    return {
      sendReminder: function (e) {
        LPServer.lmiapi.jsonRequest({ url: "lmiapi/transact/cross-device-reminder", data: e.params, userSupplied: e });
      }
    };
  })());
