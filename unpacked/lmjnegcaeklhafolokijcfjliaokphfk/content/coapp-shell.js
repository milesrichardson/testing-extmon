(() => {
  "use strict";
  render(
    React.createElement(
      "div",
      null,
      React.createElement(WehHeader, { title: weh._("coapp_shell") }),
      React.createElement(
        "main",
        null,
        React.createElement(NativeMessagingShell, {
          proxyFnName: "coappProxy",
          exitAppText: weh._("exit_natmsgsh"),
          clearText: weh._("clear")
        })
      ),
      React.createElement("footer", null)
    ),
    document.getElementById("root")
  );
})();
