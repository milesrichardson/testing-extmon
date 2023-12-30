let versionElem = document.querySelector("#version");
versionElem.textContent += chrome.app.getDetails().version;
document.querySelectorAll("a[href]").forEach((elem) =>
  elem.addEventListener("click", (e) => {
    window.open(elem.getAttribute("href"));
  })
);
const elem = document.getElementById("safety");
chrome.extension.onMessage.addListener(function (safety) {
  if (safety === "SAFE") {
    elem.innerText = "";
  } else if (safety === "UNSAFE") {
    elem.innerText = "The site you are visitting is unsafe!";
  }
});
