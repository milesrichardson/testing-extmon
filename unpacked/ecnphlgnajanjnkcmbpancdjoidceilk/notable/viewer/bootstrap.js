const delegate = document.createElement("iframe");
delegate.setAttribute("src", chrome.runtime.getURL("delegate.html")),
  (delegate.style.display = "none"),
  document.body.appendChild(delegate);
