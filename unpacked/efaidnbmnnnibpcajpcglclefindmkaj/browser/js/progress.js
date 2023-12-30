/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by all applicable intellectual property laws,
 * including trade secret and or copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/
$(function () {
  var e,
    o,
    n,
    t = function () {
      util.messageToMain({ main_op: "file_spec_done", dest_folder: $(".selected").parent().data("id"), filename: $(".filename").val() });
    },
    s = $.Deferred();
  function a(e) {
    $(".selected").removeClass("selected"), e.children(".folder-display").addClass("selected");
  }
  function r(e) {
    var o,
      n,
      t = $(".folder").detach();
    function s(e, o, n, s) {
      var a = t
        .clone()
        .data("id", o)
        .css("margin-left", s + "px")
        .addClass("folder-found")
        .appendTo(n);
      return a.find(".folder-name").text(e || "root"), a;
    }
    (n = s(
      (o = $.grep(e.folders, function (e) {
        return "root" === e.object_type;
      })[0]).name,
      o.id,
      $(".folders"),
      0
    )),
      (function e(o, n, t, a) {
        var r = $.grep(o, function (e) {
          return e.parent_id === n;
        });
        $.each(r, function (n, r) {
          var l = s(r.name, r.id, t, a);
          e(o, r.id, l, a + 20);
        });
      })(e.folders, o.id, n, 20),
      a(n),
      1 === e.folders.length && $(".nofolders-message").removeClass("hidden");
  }
  function l(e) {
    $(".header-text").text(e).removeClass("hidden");
  }
  function i(e) {
    e ? $(".progress").removeClass("hidden") : $(".progress").addClass("hidden");
  }
  function d(e) {
    i(!1), $("#error").removeClass("hidden").text(e), $(".content, .footer").addClass("hidden");
  }
  function c(e) {
    return decodeURIComponent(e.replace(/\+/g, " "));
  }
  $(".translate").each(function () {
    util.translateElement(this);
  }),
    location.hash.length > 1 &&
      ((e = location.hash.substring(1).split("&")),
      $.each(e, function () {
        "filename" === (o = this.split("="))[0] &&
          ((n = c(o[1])),
          $(".fileicon").removeClass("hidden"),
          $(".done").removeClass("hidden"),
          $(".filelabel").text(n).removeClass("hidden"),
          $(".filename").val(n).removeClass("hidden"),
          $(".folders").removeClass("hidden"),
          i(!1)),
          "message" === o[0] && l(c(o[1])),
          "busy" === o[0] && i("true" === o[1]),
          SETTINGS.USE_ECHO_SERVICE &&
            "progress_op" === o[0] &&
            "htmlToPdf" === o[1] &&
            (t = function () {
              s.then(function (e) {
                $.ajax("http://127.0.0.1:1234/", { type: "POST", data: JSON.stringify(e), contentType: "application/json" }).then(
                  function (e) {
                    self.close();
                  },
                  function () {
                    d("To see intermediate results, run the local echo service");
                  }
                );
              });
            }),
          "unavailable" === o[0] &&
            (l("Oops!"),
            "html_to_pdf" === o[1] &&
              ($("#message")
                .addClass("error")
                .text("HTML to PDF not yet available.We know you want it.  We want it too. Please give us a few months to work on it.")
                .removeClass("hidden"),
              $(".right-content, .progress").addClass("hidden")),
            "flickr" === o[1] &&
              ($("#message").addClass("error").text("Flickr apps not yet available.").removeClass("hidden"),
              $(".right-content, .progress").addClass("hidden")));
      }),
      (window.location.hash = "")),
    $(".folders").click(function (e) {
      $(e.target).is(".folder-display *") && a($(e.target).parent().parent());
    }),
    $(".done").click(function () {
      var e = $(".filename").val();
      $(".fileicon").removeClass("hidden"),
        $(".filelabel").text(e).removeClass("hidden"),
        $(".done, .right-content").addClass("hidden"),
        i(!0),
        t();
    }),
    util.addMainListener(function (e) {
      if (
        (util.consoleLog("handler message: "),
        "set-text" === e.progress_op && (l(e.text), i(e.busy)),
        "set-error" === e.progress_op && d(e.text),
        "folders" === e.progress_op && r(e),
        "html-blob" === e.progress_op)
      )
        if ((util.consoleLog(e.blob.html.length), util.consoleLog("received html blob"), i(!1), e.error))
          d(e.error),
            l("Oops!"),
            util.consoleLog(e.error),
            (n = acom_analytics.e.HTML_SOURCE_SIZE_TOO_LARGE_ERROR),
            acom_analytics.event(n);
        else {
          l("HTML Ready for Upload and Conversion"), s.resolve(e.blob);
          var o = e.blob.currentSize / 1048576;
          acom_analytics.checkAndLogHTMLBlobSize(o);
        }
      var n;
    });
});
