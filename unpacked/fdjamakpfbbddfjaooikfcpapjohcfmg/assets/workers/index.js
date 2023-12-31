"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.freeWorker = exports.getWorker = exports.getWorkerPath = exports.setWorkerPath = exports.setWorkersPath = void 0);
const browser_utils_1 = require("@dashlane/browser-utils");
let instance = {};
function setWorkersPath(e) {
  instance = e;
}
function setWorkerPath(e, r) {
  instance[e] = r;
}
function getWorkerPath(e) {
  return instance[e];
}
(exports.setWorkersPath = setWorkersPath), (exports.setWorkerPath = setWorkerPath), (exports.getWorkerPath = getWorkerPath);
const pool = [],
  queue = [];
function getNbLimitOfWorkers() {
  const e = browser_utils_1.navigator.getNavigator();
  return e && e.hardwareConcurrency ? e.hardwareConcurrency : 4;
}
function createAndPoolWorker(e) {
  const r = new Worker(e);
  return pool.push(r), r;
}
function getWorker(e) {
  return new Promise((r) => {
    pool.length < getNbLimitOfWorkers() ? r(createAndPoolWorker(e)) : queue.push({ resolve: r, path: e });
  });
}
function freeWorker(e) {
  const r = pool.indexOf(e);
  if (r < 0) console.error("freeWorker: trying to terminate a worker that does not exist");
  else if ((e.terminate(), pool.splice(r, 1), queue.length > 0)) {
    const { resolve: e, path: r } = queue.shift();
    e(createAndPoolWorker(r));
  }
}
(exports.getWorker = getWorker), (exports.freeWorker = freeWorker);
