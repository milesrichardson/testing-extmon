window.addEventListener("message", (e) => {
  if (e.origin === window.location.origin && e.data && e.data.command)
    switch (e.data.command) {
      case "th-ms-signedout":
        chrome.runtime.sendMessage({ command: "thswsignedout" });
        break;
      case "th-ms-signout-close-window":
        chrome.runtime.sendMessage({ command: "thswclosemslogout" });
        break;
      case "th-ms-signout-active":
        chrome.runtime.sendMessage({ command: "thswmslogoutactive", active: e.data.active });
      case "th-ms-signedin":
        chrome.runtime.sendMessage({ command: "thswauthorised", account: e.data.account });
    }
});
