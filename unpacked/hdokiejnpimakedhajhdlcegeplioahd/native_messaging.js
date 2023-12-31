set_innertext(
  document.getElementById("native_messaging_text"),
  gs(
    "We have detected that you have not yet granted LastPass permission to access native messaging.  Native messaging is required to provide extra features such as sharing of login state with other browsers, fingerprint authentication, importing, exporting, and attachments."
  )
),
  set_innertext(document.getElementById("request_native_messaging"), gs("Enable Native Messaging")),
  document.getElementById("request_native_messaging").addEventListener("click", function () {
    LPPlatform.requestNativeMessaging();
  }),
  -1 != document.location.href.indexOf("hidenever=1")
    ? (document.getElementById("native_messaging_never_ask_again").style.display = "none")
    : (set_innertext(document.getElementById("native_messaging_never_ask_again"), gs("Never Ask Again")),
      document.getElementById("native_messaging_never_ask_again").addEventListener("click", getBG().native_messaging_never_ask_again));
