try {
  importScripts("./lib.bundle.js", "./utils.bundle.js", "./background.bundle.js");
} catch (r) {
  console.error("importScripts: " + r);
}
