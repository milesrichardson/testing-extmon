function getHtmlLanguageCode(e) {
  return e ? (2 == e.length ? e.toLowerCase() + "-" + e.toUpperCase() : e.replace("_", "-")) : "en-US";
}
