var Module = typeof Module != "undefined" ? Module : {};
var moduleOverrides = Object.assign({}, Module);
var arguments_ = [];
var thisProgram = "./this.program";
var quit_ = (status, toThrow) => {
  throw toThrow;
};
var ENVIRONMENT_IS_WEB = typeof window == "object";
var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
var ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
var scriptDirectory = "";
function locateFile(path) {
  if (Module["locateFile"]) {
    return Module["locateFile"](path, scriptDirectory);
  }
  return scriptDirectory + path;
}
var read_, readAsync, readBinary, setWindowTitle;
function logExceptionOnExit(e) {
  if (e instanceof ExitStatus) return;
  let toLog = e;
  err("exiting due to exception: " + toLog);
}
if (ENVIRONMENT_IS_NODE) {
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = require("path").dirname(scriptDirectory) + "/";
  } else {
    scriptDirectory = __dirname + "/";
  }
  var fs, nodePath;
  if (typeof require === "function") {
    fs = require("fs");
    nodePath = require("path");
  }
  read_ = (filename, binary) => {
    filename = nodePath["normalize"](filename);
    return fs.readFileSync(filename, binary ? undefined : "utf8");
  };
  readBinary = (filename) => {
    var ret = read_(filename, true);
    if (!ret.buffer) {
      ret = new Uint8Array(ret);
    }
    return ret;
  };
  readAsync = (filename, onload, onerror) => {
    filename = nodePath["normalize"](filename);
    fs.readFile(filename, function (err, data) {
      if (err) onerror(err);
      else onload(data.buffer);
    });
  };
  if (process["argv"].length > 1) {
    thisProgram = process["argv"][1].replace(/\\/g, "/");
  }
  arguments_ = process["argv"].slice(2);
  if (typeof module != "undefined") {
    module["exports"] = Module;
  }
  process["on"]("uncaughtException", function (ex) {
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });
  process["on"]("unhandledRejection", function (reason) {
    throw reason;
  });
  quit_ = (status, toThrow) => {
    if (keepRuntimeAlive()) {
      process["exitCode"] = status;
      throw toThrow;
    }
    logExceptionOnExit(toThrow);
    process["exit"](status);
  };
  Module["inspect"] = function () {
    return "[Emscripten Module object]";
  };
} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = self.location.href;
  } else if (typeof document != "undefined" && document.currentScript) {
    scriptDirectory = document.currentScript.src;
  }
  if (scriptDirectory.indexOf("blob:") !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
  } else {
    scriptDirectory = "";
  }
  {
    read_ = (url) => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, false);
      xhr.send(null);
      return xhr.responseText;
    };
    if (ENVIRONMENT_IS_WORKER) {
      readBinary = (url) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        xhr.responseType = "arraybuffer";
        xhr.send(null);
        return new Uint8Array(xhr.response);
      };
    }
    readAsync = (url, onload, onerror) => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.responseType = "arraybuffer";
      xhr.onload = () => {
        if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
          onload(xhr.response);
          return;
        }
        onerror();
      };
      xhr.onerror = onerror;
      xhr.send(null);
    };
  }
  setWindowTitle = (title) => (document.title = title);
} else {
}
var out = Module["print"] || console.log.bind(console);
var err = Module["printErr"] || console.warn.bind(console);
Object.assign(Module, moduleOverrides);
moduleOverrides = null;
if (Module["arguments"]) arguments_ = Module["arguments"];
if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
if (Module["quit"]) quit_ = Module["quit"];
var POINTER_SIZE = 4;
var wasmBinary;
if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
var noExitRuntime = Module["noExitRuntime"] || true;
if (typeof WebAssembly != "object") {
  abort("no native wasm support detected");
}
var wasmMemory;
var ABORT = false;
var EXITSTATUS;
function assert(condition, text) {
  if (!condition) {
    abort(text);
  }
}
var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;
function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
  if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
    return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
  }
  var str = "";
  while (idx < endPtr) {
    var u0 = heapOrArray[idx++];
    if (!(u0 & 128)) {
      str += String.fromCharCode(u0);
      continue;
    }
    var u1 = heapOrArray[idx++] & 63;
    if ((u0 & 224) == 192) {
      str += String.fromCharCode(((u0 & 31) << 6) | u1);
      continue;
    }
    var u2 = heapOrArray[idx++] & 63;
    if ((u0 & 240) == 224) {
      u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
    } else {
      u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
    }
    if (u0 < 65536) {
      str += String.fromCharCode(u0);
    } else {
      var ch = u0 - 65536;
      str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
    }
  }
  return str;
}
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
}
function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) return 0;
  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1;
  for (var i = 0; i < str.length; ++i) {
    var u = str.charCodeAt(i);
    if (u >= 55296 && u <= 57343) {
      var u1 = str.charCodeAt(++i);
      u = (65536 + ((u & 1023) << 10)) | (u1 & 1023);
    }
    if (u <= 127) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 2047) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 192 | (u >> 6);
      heap[outIdx++] = 128 | (u & 63);
    } else if (u <= 65535) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 224 | (u >> 12);
      heap[outIdx++] = 128 | ((u >> 6) & 63);
      heap[outIdx++] = 128 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      heap[outIdx++] = 240 | (u >> 18);
      heap[outIdx++] = 128 | ((u >> 12) & 63);
      heap[outIdx++] = 128 | ((u >> 6) & 63);
      heap[outIdx++] = 128 | (u & 63);
    }
  }
  heap[outIdx] = 0;
  return outIdx - startIdx;
}
function stringToUTF8(str, outPtr, maxBytesToWrite) {
  return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
}
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    var c = str.charCodeAt(i);
    if (c <= 127) {
      len++;
    } else if (c <= 2047) {
      len += 2;
    } else if (c >= 55296 && c <= 57343) {
      len += 4;
      ++i;
    } else {
      len += 3;
    }
  }
  return len;
}
var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module["HEAP8"] = HEAP8 = new Int8Array(buf);
  Module["HEAP16"] = HEAP16 = new Int16Array(buf);
  Module["HEAP32"] = HEAP32 = new Int32Array(buf);
  Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
  Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
  Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
  Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
  Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
}
var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 16777216;
var wasmTable;
var __ATPRERUN__ = [];
var __ATINIT__ = [];
var __ATMAIN__ = [];
var __ATPOSTRUN__ = [];
var runtimeInitialized = false;
function keepRuntimeAlive() {
  return noExitRuntime;
}
function preRun() {
  if (Module["preRun"]) {
    if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
    while (Module["preRun"].length) {
      addOnPreRun(Module["preRun"].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}
function initRuntime() {
  runtimeInitialized = true;
  callRuntimeCallbacks(__ATINIT__);
}
function preMain() {
  callRuntimeCallbacks(__ATMAIN__);
}
function postRun() {
  if (Module["postRun"]) {
    if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
    while (Module["postRun"].length) {
      addOnPostRun(Module["postRun"].shift());
    }
  }
  callRuntimeCallbacks(__ATPOSTRUN__);
}
function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}
function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}
function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null;
function addRunDependency(id) {
  runDependencies++;
  if (Module["monitorRunDependencies"]) {
    Module["monitorRunDependencies"](runDependencies);
  }
}
function removeRunDependency(id) {
  runDependencies--;
  if (Module["monitorRunDependencies"]) {
    Module["monitorRunDependencies"](runDependencies);
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback();
    }
  }
}
function abort(what) {
  {
    if (Module["onAbort"]) {
      Module["onAbort"](what);
    }
  }
  what = "Aborted(" + what + ")";
  err(what);
  ABORT = true;
  EXITSTATUS = 1;
  what += ". Build with -sASSERTIONS for more info.";
  var e = new WebAssembly.RuntimeError(what);
  throw e;
}
var dataURIPrefix = "data:application/octet-stream;base64,";
function isDataURI(filename) {
  return filename.startsWith(dataURIPrefix);
}
function isFileURI(filename) {
  return filename.startsWith("file://");
}
var wasmBinaryFile;
wasmBinaryFile = "WTS.wasm";
if (!isDataURI(wasmBinaryFile)) {
  wasmBinaryFile = locateFile(wasmBinaryFile);
}
function getBinary(file) {
  try {
    if (file == wasmBinaryFile && wasmBinary) {
      return new Uint8Array(wasmBinary);
    }
    if (readBinary) {
      return readBinary(file);
    }
    throw "both async and sync fetching of the wasm failed";
  } catch (err) {
    abort(err);
  }
}
function getBinaryPromise() {
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
    if (typeof fetch == "function" && !isFileURI(wasmBinaryFile)) {
      return fetch(wasmBinaryFile, { credentials: "same-origin" })
        .then(function (response) {
          if (!response["ok"]) {
            throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
          }
          return response["arrayBuffer"]();
        })
        .catch(function () {
          return getBinary(wasmBinaryFile);
        });
    } else {
      if (readAsync) {
        return new Promise(function (resolve, reject) {
          readAsync(
            wasmBinaryFile,
            function (response) {
              resolve(new Uint8Array(response));
            },
            reject
          );
        });
      }
    }
  }
  return Promise.resolve().then(function () {
    return getBinary(wasmBinaryFile);
  });
}
function createWasm() {
  var info = { env: asmLibraryArg, wasi_snapshot_preview1: asmLibraryArg };
  function receiveInstance(instance, module) {
    var exports = instance.exports;
    Module["asm"] = exports;
    wasmMemory = Module["asm"]["memory"];
    updateGlobalBufferAndViews(wasmMemory.buffer);
    wasmTable = Module["asm"]["__indirect_function_table"];
    addOnInit(Module["asm"]["__wasm_call_ctors"]);
    removeRunDependency("wasm-instantiate");
  }
  addRunDependency("wasm-instantiate");
  function receiveInstantiationResult(result) {
    receiveInstance(result["instance"]);
  }
  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise()
      .then(function (binary) {
        return WebAssembly.instantiate(binary, info);
      })
      .then(function (instance) {
        return instance;
      })
      .then(receiver, function (reason) {
        err("failed to asynchronously prepare wasm: " + reason);
        abort(reason);
      });
  }
  function instantiateAsync() {
    if (
      !wasmBinary &&
      typeof WebAssembly.instantiateStreaming == "function" &&
      !isDataURI(wasmBinaryFile) &&
      !isFileURI(wasmBinaryFile) &&
      !ENVIRONMENT_IS_NODE &&
      typeof fetch == "function"
    ) {
      return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function (response) {
        var result = WebAssembly.instantiateStreaming(response, info);
        return result.then(receiveInstantiationResult, function (reason) {
          err("wasm streaming compile failed: " + reason);
          err("falling back to ArrayBuffer instantiation");
          return instantiateArrayBuffer(receiveInstantiationResult);
        });
      });
    } else {
      return instantiateArrayBuffer(receiveInstantiationResult);
    }
  }
  if (Module["instantiateWasm"]) {
    try {
      var exports = Module["instantiateWasm"](info, receiveInstance);
      return exports;
    } catch (e) {
      err("Module.instantiateWasm callback failed with error: " + e);
      return false;
    }
  }
  instantiateAsync();
  return {};
}
var tempDouble;
var tempI64;
var ASM_CONSTS = {
  83572: ($0) => {
    Webroot_Background.onNONJSresponse(UTF8ToString($0));
  },
  83625: ($0) => {
    Webroot_Background.onNONJSresponse(UTF8ToString($0));
  },
  83678: ($0) => {
    Webroot_Background.onNONJSresponse(UTF8ToString($0));
  },
  83731: () => {
    onModuleLoaded();
  },
  83748: ($0) => {
    Webroot_Background.onNONJSresponse(UTF8ToString($0));
  },
  83801: ($0) => {
    Webroot_Background.onNONJSresponse(UTF8ToString($0));
  },
  83854: ($0) => {
    Webroot_Background.onNONJSresponse(UTF8ToString($0));
  },
  83907: ($0) => {
    Webroot_Background.onNONJSresponse(UTF8ToString($0));
  },
  83960: ($0) => {
    Webroot_Background.onNONJSresponse(UTF8ToString($0));
  },
  84013: ($0, $1) => {
    var chrKCExpDate = UTF8ToString($0, $1);
    var newDate = chrKCExpDate.replace(" ", "T");
    const ichrKCExpDate = Date.parse(newDate);
    const iTNow = Date.now();
    const dTDays = (ichrKCExpDate - iTNow) / (1e3 * 3600 * 24);
    const dTiDays = Math.ceil(dTDays);
    return dTiDays;
  },
  84285: ($0) => {
    Webroot_urlCache.addUrl(UTF8ToString($0));
  },
  84327: ($0) => {
    Webroot_Background.onNONJSresponse(UTF8ToString($0));
  },
  84380: ($0) => {
    Webroot_Background.onNONJSresponse(UTF8ToString($0));
  },
  84433: ($0) => {
    Webroot_Background.onNONJSresponse(UTF8ToString($0));
  },
  84486: ($0, $1) => {
    Webroot_urlCache.appendToUrl(UTF8ToString($0), UTF8ToString($1));
  },
  84551: ($0) => {
    Webroot_Background.onNONJSresponse(UTF8ToString($0));
  },
  84604: ($0, $1) => {
    Webroot_urlCache.appendToUrl(UTF8ToString($0), UTF8ToString($1));
  },
  84669: ($0) => {
    Webroot_Background.onNONJSresponse(UTF8ToString($0));
  },
  84722: ($0) => {
    if (Webroot_Background.RTAPCtrTimer) clearInterval(Webroot_Background.RTAPCtrTimer);
    Webroot_Background.RTAPCtrTimer = setInterval(function () {
      Module.SendCounter();
    }, $0);
  },
  84899: () => {
    clearInterval(ipm_timer);
  },
  84924: ($0) => {
    ipm_timer = setInterval(IPMAlarm, $0 * 60 * 1e3);
  },
  84974: () => {
    clearInterval(ipm_timer);
  },
  84999: () => {
    var jsString = chrome.i18n.getUILanguage();
    if (jsString == undefined) return null;
    var lengthBytes = lengthBytesUTF8(jsString) + 1;
    var stringOnWasmHeap = _malloc(lengthBytes);
    stringToUTF8(jsString, stringOnWasmHeap, lengthBytes + 1);
    return stringOnWasmHeap;
  },
  85265: ($0, $1) => {
    var sIPMs = UTF8ToString($0, $1);
    chrome.storage.local.set({ IPMs: sIPMs }, function () {
      if (chrome.runtime.lastError) {
        console.log("WTS: Error writing IPMs to storage - error:", chrome.runtime.lastError);
      }
    });
  },
  85484: ($0, $1, $2, $3) => {
    browser.runtime.sendNativeMessage(
      "application.id",
      { message: UTF8ToString($0, $1) + "|" + UTF8ToString($2, $3) },
      function (response) {
        console.log("WTS: Received sendNativeMessage response:");
        console.log("WTS: ", response);
      }
    );
  },
  85718: ($0, $1, $2, $3, $4, $5) => {
    registration.showNotification(UTF8ToString($0, $1), { type: "basic", body: UTF8ToString($2, $3), icon: UTF8ToString($4, $5) });
  },
  85850: ($0) => {
    chrome.storage.local.set({ whList: UTF8ToString($0) }, function () {
      if (chrome.runtime.lastError) {
        console.log("WTS: Failed to store 'whListServer' (", chrome.runtime.lastError, ")");
      }
    });
  },
  86043: ($0) => {
    const iTNow = Date.now() / 1e3;
    const dTSeconds = iTNow - $0;
    return dTSeconds;
  },
  86132: ($0, $1) => {
    var sKC = UTF8ToString($0, $1);
    chrome.storage.local.set({ KC: sKC }, function () {
      if (chrome.runtime.lastError) {
        console.log("WTS: Error writing KC to storage - error:", chrome.runtime.lastError);
      }
    });
  },
  86343: ($0) => {
    chrome.storage.local.set({ rulesLastAttempt: $0 }, function () {
      if (chrome.runtime.lastError) {
        console.log("WTS: Error writing rulesLastAttempt to storage - error:", chrome.runtime.lastError);
      }
    });
  },
  86549: ($0) => {
    chrome.storage.local.set({ WSACheckAttempt: $0 }, function () {
      if (chrome.runtime.lastError) {
        console.log("WTS: Error writing WSACheckAttempt to storage - error:", chrome.runtime.lastError);
      }
    });
  },
  86753: ($0) => {
    chrome.storage.local.set({ Mode: $0 }, function () {
      if (chrome.runtime.lastError) {
        console.log("WTS: Error writing Mode to storage - error:", chrome.runtime.lastError);
      }
    });
  },
  86935: ($0, $1) => {
    var sConfigRules = UTF8ToString($0, $1);
    var jsnConfigRules = JSON.parse(sConfigRules);
    chrome.storage.local.set({ ConfigRules: jsnConfigRules }, function () {
      if (chrome.runtime.lastError) {
        console.log("WTS: Error writing ConfigRules to storage - error:", chrome.runtime.lastError);
      }
    });
  },
  87231: ($0, $1) => {
    var sSettings = UTF8ToString($0, $1);
    var jsnSettings = JSON.parse(sSettings);
    chrome.storage.local.set({ Settings: jsnSettings }, function () {
      if (chrome.runtime.lastError) {
        console.log("WTS: Error writing Settings to storage - error:", chrome.runtime.lastError);
      }
    });
  },
  87509: ($0, $1) => {
    var sMIDs = UTF8ToString($0, $1);
    chrome.storage.local.set({ MIDs: sMIDs }, function () {
      if (chrome.runtime.lastError) {
        console.log("WTS: Error writing MIDs to storage - error:", chrome.runtime.lastError);
      }
    });
  },
  87728: ($0, $1) => {
    var sRTAPcounter = UTF8ToString($0, $1);
    var jsnRTAPcounter = JSON.parse(sRTAPcounter);
    chrome.storage.local.set({ rtapcounter: jsnRTAPcounter }, function () {
      if (chrome.runtime.lastError) {
        console.log("WTS: Error writing 'rtapcounter' to storage - error:", chrome.runtime.lastError);
      }
    });
  },
  88026: () => {
    chrome.storage.local.remove("rtapcounter");
  },
  88069: ($0) => {
    var jsnObj = JSON.parse(UTF8ToString($0));
    chrome.storage.local.set(jsnObj, function () {
      if (chrome.runtime.lastError) {
        console.log("WTS: Error writing Auth to storage - error:", chrome.runtime.lastError);
      }
    });
  },
  88286: ($0) => {
    Webroot_Background.onNONJSresponse(UTF8ToString($0));
  },
  88339: ($0) => {
    Webroot_Background.onNONJSresponse(UTF8ToString($0));
  },
  88392: ($0) => {
    Webroot_Background.onNONJSresponse(UTF8ToString($0));
  },
  88445: ($0) => {
    Webroot_Background.onNONJSresponse(UTF8ToString($0));
  }
};
function CfgLoaderTimeouts(dwSelectPeriod) {
  if (dwSelectPeriod == 1)
    setTimeout(function () {
      Module.CheckConfigUpdates();
    }, 20 * 1e3);
  if (dwSelectPeriod == 2)
    setTimeout(
      function () {
        Module.CheckConfigUpdates();
      },
      5 * 60 * 1e3
    );
  if (dwSelectPeriod == 3)
    setTimeout(
      function () {
        Module.CheckConfigUpdates();
      },
      6 * 60 * 60 * 1e3
    );
  if (dwSelectPeriod == 4)
    setTimeout(
      function () {
        Module.CheckConfigUpdates();
      },
      10 * 60 * 1e3
    );
}
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
}
function callRuntimeCallbacks(callbacks) {
  while (callbacks.length > 0) {
    callbacks.shift()(Module);
  }
}
function ___assert_fail(condition, filename, line, func) {
  abort(
    "Assertion failed: " +
      UTF8ToString(condition) +
      ", at: " +
      [filename ? UTF8ToString(filename) : "unknown filename", line, func ? UTF8ToString(func) : "unknown function"]
  );
}
function ___cxa_allocate_exception(size) {
  return _malloc(size + 24) + 24;
}
var exceptionCaught = [];
function exception_addRef(info) {
  info.add_ref();
}
var uncaughtExceptionCount = 0;
function ___cxa_begin_catch(ptr) {
  var info = new ExceptionInfo(ptr);
  if (!info.get_caught()) {
    info.set_caught(true);
    uncaughtExceptionCount--;
  }
  info.set_rethrown(false);
  exceptionCaught.push(info);
  exception_addRef(info);
  return info.get_exception_ptr();
}
var exceptionLast = 0;
function ExceptionInfo(excPtr) {
  this.excPtr = excPtr;
  this.ptr = excPtr - 24;
  this.set_type = function (type) {
    HEAPU32[(this.ptr + 4) >> 2] = type;
  };
  this.get_type = function () {
    return HEAPU32[(this.ptr + 4) >> 2];
  };
  this.set_destructor = function (destructor) {
    HEAPU32[(this.ptr + 8) >> 2] = destructor;
  };
  this.get_destructor = function () {
    return HEAPU32[(this.ptr + 8) >> 2];
  };
  this.set_refcount = function (refcount) {
    HEAP32[this.ptr >> 2] = refcount;
  };
  this.set_caught = function (caught) {
    caught = caught ? 1 : 0;
    HEAP8[(this.ptr + 12) >> 0] = caught;
  };
  this.get_caught = function () {
    return HEAP8[(this.ptr + 12) >> 0] != 0;
  };
  this.set_rethrown = function (rethrown) {
    rethrown = rethrown ? 1 : 0;
    HEAP8[(this.ptr + 13) >> 0] = rethrown;
  };
  this.get_rethrown = function () {
    return HEAP8[(this.ptr + 13) >> 0] != 0;
  };
  this.init = function (type, destructor) {
    this.set_adjusted_ptr(0);
    this.set_type(type);
    this.set_destructor(destructor);
    this.set_refcount(0);
    this.set_caught(false);
    this.set_rethrown(false);
  };
  this.add_ref = function () {
    var value = HEAP32[this.ptr >> 2];
    HEAP32[this.ptr >> 2] = value + 1;
  };
  this.release_ref = function () {
    var prev = HEAP32[this.ptr >> 2];
    HEAP32[this.ptr >> 2] = prev - 1;
    return prev === 1;
  };
  this.set_adjusted_ptr = function (adjustedPtr) {
    HEAPU32[(this.ptr + 16) >> 2] = adjustedPtr;
  };
  this.get_adjusted_ptr = function () {
    return HEAPU32[(this.ptr + 16) >> 2];
  };
  this.get_exception_ptr = function () {
    var isPointer = ___cxa_is_pointer_type(this.get_type());
    if (isPointer) {
      return HEAPU32[this.excPtr >> 2];
    }
    var adjusted = this.get_adjusted_ptr();
    if (adjusted !== 0) return adjusted;
    return this.excPtr;
  };
}
function ___cxa_free_exception(ptr) {
  return _free(new ExceptionInfo(ptr).ptr);
}
var wasmTableMirror = [];
function getWasmTableEntry(funcPtr) {
  var func = wasmTableMirror[funcPtr];
  if (!func) {
    if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
    wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
  }
  return func;
}
function exception_decRef(info) {
  if (info.release_ref() && !info.get_rethrown()) {
    var destructor = info.get_destructor();
    if (destructor) {
      getWasmTableEntry(destructor)(info.excPtr);
    }
    ___cxa_free_exception(info.excPtr);
  }
}
function ___cxa_end_catch() {
  _setThrew(0);
  var info = exceptionCaught.pop();
  exception_decRef(info);
  exceptionLast = 0;
}
function ___resumeException(ptr) {
  if (!exceptionLast) {
    exceptionLast = ptr;
  }
  throw ptr;
}
function ___cxa_find_matching_catch_2() {
  var thrown = exceptionLast;
  if (!thrown) {
    setTempRet0(0);
    return 0;
  }
  var info = new ExceptionInfo(thrown);
  info.set_adjusted_ptr(thrown);
  var thrownType = info.get_type();
  if (!thrownType) {
    setTempRet0(0);
    return thrown;
  }
  for (var i = 0; i < arguments.length; i++) {
    var caughtType = arguments[i];
    if (caughtType === 0 || caughtType === thrownType) {
      break;
    }
    var adjusted_ptr_addr = info.ptr + 16;
    if (___cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
      setTempRet0(caughtType);
      return thrown;
    }
  }
  setTempRet0(thrownType);
  return thrown;
}
function ___cxa_find_matching_catch_3() {
  var thrown = exceptionLast;
  if (!thrown) {
    setTempRet0(0);
    return 0;
  }
  var info = new ExceptionInfo(thrown);
  info.set_adjusted_ptr(thrown);
  var thrownType = info.get_type();
  if (!thrownType) {
    setTempRet0(0);
    return thrown;
  }
  for (var i = 0; i < arguments.length; i++) {
    var caughtType = arguments[i];
    if (caughtType === 0 || caughtType === thrownType) {
      break;
    }
    var adjusted_ptr_addr = info.ptr + 16;
    if (___cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
      setTempRet0(caughtType);
      return thrown;
    }
  }
  setTempRet0(thrownType);
  return thrown;
}
function ___cxa_rethrow() {
  var info = exceptionCaught.pop();
  if (!info) {
    abort("no exception to throw");
  }
  var ptr = info.excPtr;
  if (!info.get_rethrown()) {
    exceptionCaught.push(info);
    info.set_rethrown(true);
    info.set_caught(false);
    uncaughtExceptionCount++;
  }
  exceptionLast = ptr;
  throw ptr;
}
function ___cxa_throw(ptr, type, destructor) {
  var info = new ExceptionInfo(ptr);
  info.init(type, destructor);
  exceptionLast = ptr;
  uncaughtExceptionCount++;
  throw ptr;
}
function ___cxa_uncaught_exceptions() {
  return uncaughtExceptionCount;
}
function __embind_register_bigint(primitiveType, name, size, minRange, maxRange) {}
function getShiftFromSize(size) {
  switch (size) {
    case 1:
      return 0;
    case 2:
      return 1;
    case 4:
      return 2;
    case 8:
      return 3;
    default:
      throw new TypeError("Unknown type size: " + size);
  }
}
function embind_init_charCodes() {
  var codes = new Array(256);
  for (var i = 0; i < 256; ++i) {
    codes[i] = String.fromCharCode(i);
  }
  embind_charCodes = codes;
}
var embind_charCodes = undefined;
function readLatin1String(ptr) {
  var ret = "";
  var c = ptr;
  while (HEAPU8[c]) {
    ret += embind_charCodes[HEAPU8[c++]];
  }
  return ret;
}
var awaitingDependencies = {};
var registeredTypes = {};
var typeDependencies = {};
var char_0 = 48;
var char_9 = 57;
function makeLegalFunctionName(name) {
  if (undefined === name) {
    return "_unknown";
  }
  name = name.replace(/[^a-zA-Z0-9_]/g, "$");
  var f = name.charCodeAt(0);
  if (f >= char_0 && f <= char_9) {
    return "_" + name;
  }
  return name;
}
function createNamedFunction(name, body) {
  name = makeLegalFunctionName(name);
  return function () {
    "use strict";
    return body.apply(this, arguments);
  };
}
function extendError(baseErrorType, errorName) {
  var errorClass = createNamedFunction(errorName, function (message) {
    this.name = errorName;
    this.message = message;
    var stack = new Error(message).stack;
    if (stack !== undefined) {
      this.stack = this.toString() + "\n" + stack.replace(/^Error(:[^\n]*)?\n/, "");
    }
  });
  errorClass.prototype = Object.create(baseErrorType.prototype);
  errorClass.prototype.constructor = errorClass;
  errorClass.prototype.toString = function () {
    if (this.message === undefined) {
      return this.name;
    } else {
      return this.name + ": " + this.message;
    }
  };
  return errorClass;
}
var BindingError = undefined;
function throwBindingError(message) {
  throw new BindingError(message);
}
var InternalError = undefined;
function throwInternalError(message) {
  throw new InternalError(message);
}
function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
  myTypes.forEach(function (type) {
    typeDependencies[type] = dependentTypes;
  });
  function onComplete(typeConverters) {
    var myTypeConverters = getTypeConverters(typeConverters);
    if (myTypeConverters.length !== myTypes.length) {
      throwInternalError("Mismatched type converter count");
    }
    for (var i = 0; i < myTypes.length; ++i) {
      registerType(myTypes[i], myTypeConverters[i]);
    }
  }
  var typeConverters = new Array(dependentTypes.length);
  var unregisteredTypes = [];
  var registered = 0;
  dependentTypes.forEach((dt, i) => {
    if (registeredTypes.hasOwnProperty(dt)) {
      typeConverters[i] = registeredTypes[dt];
    } else {
      unregisteredTypes.push(dt);
      if (!awaitingDependencies.hasOwnProperty(dt)) {
        awaitingDependencies[dt] = [];
      }
      awaitingDependencies[dt].push(() => {
        typeConverters[i] = registeredTypes[dt];
        ++registered;
        if (registered === unregisteredTypes.length) {
          onComplete(typeConverters);
        }
      });
    }
  });
  if (0 === unregisteredTypes.length) {
    onComplete(typeConverters);
  }
}
function registerType(rawType, registeredInstance, options = {}) {
  if (!("argPackAdvance" in registeredInstance)) {
    throw new TypeError("registerType registeredInstance requires argPackAdvance");
  }
  var name = registeredInstance.name;
  if (!rawType) {
    throwBindingError('type "' + name + '" must have a positive integer typeid pointer');
  }
  if (registeredTypes.hasOwnProperty(rawType)) {
    if (options.ignoreDuplicateRegistrations) {
      return;
    } else {
      throwBindingError("Cannot register type '" + name + "' twice");
    }
  }
  registeredTypes[rawType] = registeredInstance;
  delete typeDependencies[rawType];
  if (awaitingDependencies.hasOwnProperty(rawType)) {
    var callbacks = awaitingDependencies[rawType];
    delete awaitingDependencies[rawType];
    callbacks.forEach((cb) => cb());
  }
}
function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
  var shift = getShiftFromSize(size);
  name = readLatin1String(name);
  registerType(rawType, {
    name: name,
    fromWireType: function (wt) {
      return !!wt;
    },
    toWireType: function (destructors, o) {
      return o ? trueValue : falseValue;
    },
    argPackAdvance: 8,
    readValueFromPointer: function (pointer) {
      var heap;
      if (size === 1) {
        heap = HEAP8;
      } else if (size === 2) {
        heap = HEAP16;
      } else if (size === 4) {
        heap = HEAP32;
      } else {
        throw new TypeError("Unknown boolean type size: " + name);
      }
      return this["fromWireType"](heap[pointer >> shift]);
    },
    destructorFunction: null
  });
}
var emval_free_list = [];
var emval_handle_array = [{}, { value: undefined }, { value: null }, { value: true }, { value: false }];
function __emval_decref(handle) {
  if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
    emval_handle_array[handle] = undefined;
    emval_free_list.push(handle);
  }
}
function count_emval_handles() {
  var count = 0;
  for (var i = 5; i < emval_handle_array.length; ++i) {
    if (emval_handle_array[i] !== undefined) {
      ++count;
    }
  }
  return count;
}
function get_first_emval() {
  for (var i = 5; i < emval_handle_array.length; ++i) {
    if (emval_handle_array[i] !== undefined) {
      return emval_handle_array[i];
    }
  }
  return null;
}
function init_emval() {
  Module["count_emval_handles"] = count_emval_handles;
  Module["get_first_emval"] = get_first_emval;
}
var Emval = {
  toValue: (handle) => {
    if (!handle) {
      throwBindingError("Cannot use deleted val. handle = " + handle);
    }
    return emval_handle_array[handle].value;
  },
  toHandle: (value) => {
    switch (value) {
      case undefined:
        return 1;
      case null:
        return 2;
      case true:
        return 3;
      case false:
        return 4;
      default: {
        var handle = emval_free_list.length ? emval_free_list.pop() : emval_handle_array.length;
        emval_handle_array[handle] = { refcount: 1, value: value };
        return handle;
      }
    }
  }
};
function simpleReadValueFromPointer(pointer) {
  return this["fromWireType"](HEAP32[pointer >> 2]);
}
function __embind_register_emval(rawType, name) {
  name = readLatin1String(name);
  registerType(rawType, {
    name: name,
    fromWireType: function (handle) {
      var rv = Emval.toValue(handle);
      __emval_decref(handle);
      return rv;
    },
    toWireType: function (destructors, value) {
      return Emval.toHandle(value);
    },
    argPackAdvance: 8,
    readValueFromPointer: simpleReadValueFromPointer,
    destructorFunction: null
  });
}
function floatReadValueFromPointer(name, shift) {
  switch (shift) {
    case 2:
      return function (pointer) {
        return this["fromWireType"](HEAPF32[pointer >> 2]);
      };
    case 3:
      return function (pointer) {
        return this["fromWireType"](HEAPF64[pointer >> 3]);
      };
    default:
      throw new TypeError("Unknown float type: " + name);
  }
}
function __embind_register_float(rawType, name, size) {
  var shift = getShiftFromSize(size);
  name = readLatin1String(name);
  registerType(rawType, {
    name: name,
    fromWireType: function (value) {
      return value;
    },
    toWireType: function (destructors, value) {
      return value;
    },
    argPackAdvance: 8,
    readValueFromPointer: floatReadValueFromPointer(name, shift),
    destructorFunction: null
  });
}
function runDestructors(destructors) {
  while (destructors.length) {
    var ptr = destructors.pop();
    var del = destructors.pop();
    del(ptr);
  }
}
function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) {
  var argCount = argTypes.length;
  if (argCount < 2) {
    throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");
  }
  var isClassMethodFunc = argTypes[1] !== null && classType !== null;
  var needsDestructorStack = false;
  for (var i = 1; i < argTypes.length; ++i) {
    if (argTypes[i] !== null && argTypes[i].destructorFunction === undefined) {
      needsDestructorStack = true;
      break;
    }
  }
  var returns = argTypes[0].name !== "void";
  var expectedArgCount = argCount - 2;
  var argsWired = new Array(expectedArgCount);
  var invokerFuncArgs = [];
  var destructors = [];
  return function () {
    if (arguments.length !== expectedArgCount) {
      throwBindingError(
        "function " + humanName + " called with " + arguments.length + " arguments, expected " + expectedArgCount + " args!"
      );
    }
    destructors.length = 0;
    var thisWired;
    invokerFuncArgs.length = isClassMethodFunc ? 2 : 1;
    invokerFuncArgs[0] = cppTargetFunc;
    if (isClassMethodFunc) {
      thisWired = argTypes[1]["toWireType"](destructors, this);
      invokerFuncArgs[1] = thisWired;
    }
    for (var i = 0; i < expectedArgCount; ++i) {
      argsWired[i] = argTypes[i + 2]["toWireType"](destructors, arguments[i]);
      invokerFuncArgs.push(argsWired[i]);
    }
    var rv = cppInvokerFunc.apply(null, invokerFuncArgs);
    function onDone(rv) {
      if (needsDestructorStack) {
        runDestructors(destructors);
      } else {
        for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; i++) {
          var param = i === 1 ? thisWired : argsWired[i - 2];
          if (argTypes[i].destructorFunction !== null) {
            argTypes[i].destructorFunction(param);
          }
        }
      }
      if (returns) {
        return argTypes[0]["fromWireType"](rv);
      }
    }
    return onDone(rv);
  };
}
function ensureOverloadTable(proto, methodName, humanName) {
  if (undefined === proto[methodName].overloadTable) {
    var prevFunc = proto[methodName];
    proto[methodName] = function () {
      if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
        throwBindingError(
          "Function '" +
            humanName +
            "' called with an invalid number of arguments (" +
            arguments.length +
            ") - expects one of (" +
            proto[methodName].overloadTable +
            ")!"
        );
      }
      return proto[methodName].overloadTable[arguments.length].apply(this, arguments);
    };
    proto[methodName].overloadTable = [];
    proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
  }
}
function exposePublicSymbol(name, value, numArguments) {
  if (Module.hasOwnProperty(name)) {
    if (
      undefined === numArguments ||
      (undefined !== Module[name].overloadTable && undefined !== Module[name].overloadTable[numArguments])
    ) {
      throwBindingError("Cannot register public name '" + name + "' twice");
    }
    ensureOverloadTable(Module, name, name);
    if (Module.hasOwnProperty(numArguments)) {
      throwBindingError("Cannot register multiple overloads of a function with the same number of arguments (" + numArguments + ")!");
    }
    Module[name].overloadTable[numArguments] = value;
  } else {
    Module[name] = value;
    if (undefined !== numArguments) {
      Module[name].numArguments = numArguments;
    }
  }
}
function heap32VectorToArray(count, firstElement) {
  var array = [];
  for (var i = 0; i < count; i++) {
    array.push(HEAPU32[(firstElement + i * 4) >> 2]);
  }
  return array;
}
function replacePublicSymbol(name, value, numArguments) {
  if (!Module.hasOwnProperty(name)) {
    throwInternalError("Replacing nonexistant public symbol");
  }
  if (undefined !== Module[name].overloadTable && undefined !== numArguments) {
    Module[name].overloadTable[numArguments] = value;
  } else {
    Module[name] = value;
    Module[name].argCount = numArguments;
  }
}
function dynCallLegacy(sig, ptr, args) {
  var f = Module["dynCall_" + sig];
  return args && args.length ? f.apply(null, [ptr].concat(args)) : f.call(null, ptr);
}
function dynCall(sig, ptr, args) {
  if (sig.includes("j")) {
    return dynCallLegacy(sig, ptr, args);
  }
  var rtn = getWasmTableEntry(ptr).apply(null, args);
  return rtn;
}
function getDynCaller(sig, ptr) {
  var argCache = [];
  return function () {
    argCache.length = 0;
    Object.assign(argCache, arguments);
    return dynCall(sig, ptr, argCache);
  };
}
function embind__requireFunction(signature, rawFunction) {
  signature = readLatin1String(signature);
  function makeDynCaller() {
    if (signature.includes("j")) {
      return getDynCaller(signature, rawFunction);
    }
    return getWasmTableEntry(rawFunction);
  }
  var fp = makeDynCaller();
  if (typeof fp != "function") {
    throwBindingError("unknown function pointer with signature " + signature + ": " + rawFunction);
  }
  return fp;
}
var UnboundTypeError = undefined;
function getTypeName(type) {
  var ptr = ___getTypeName(type);
  var rv = readLatin1String(ptr);
  _free(ptr);
  return rv;
}
function throwUnboundTypeError(message, types) {
  var unboundTypes = [];
  var seen = {};
  function visit(type) {
    if (seen[type]) {
      return;
    }
    if (registeredTypes[type]) {
      return;
    }
    if (typeDependencies[type]) {
      typeDependencies[type].forEach(visit);
      return;
    }
    unboundTypes.push(type);
    seen[type] = true;
  }
  types.forEach(visit);
  throw new UnboundTypeError(message + ": " + unboundTypes.map(getTypeName).join([", "]));
}
function __embind_register_function(name, argCount, rawArgTypesAddr, signature, rawInvoker, fn) {
  var argTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
  name = readLatin1String(name);
  rawInvoker = embind__requireFunction(signature, rawInvoker);
  exposePublicSymbol(
    name,
    function () {
      throwUnboundTypeError("Cannot call " + name + " due to unbound types", argTypes);
    },
    argCount - 1
  );
  whenDependentTypesAreResolved([], argTypes, function (argTypes) {
    var invokerArgsArray = [argTypes[0], null].concat(argTypes.slice(1));
    replacePublicSymbol(name, craftInvokerFunction(name, invokerArgsArray, null, rawInvoker, fn), argCount - 1);
    return [];
  });
}
function integerReadValueFromPointer(name, shift, signed) {
  switch (shift) {
    case 0:
      return signed
        ? function readS8FromPointer(pointer) {
            return HEAP8[pointer];
          }
        : function readU8FromPointer(pointer) {
            return HEAPU8[pointer];
          };
    case 1:
      return signed
        ? function readS16FromPointer(pointer) {
            return HEAP16[pointer >> 1];
          }
        : function readU16FromPointer(pointer) {
            return HEAPU16[pointer >> 1];
          };
    case 2:
      return signed
        ? function readS32FromPointer(pointer) {
            return HEAP32[pointer >> 2];
          }
        : function readU32FromPointer(pointer) {
            return HEAPU32[pointer >> 2];
          };
    default:
      throw new TypeError("Unknown integer type: " + name);
  }
}
function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
  name = readLatin1String(name);
  if (maxRange === -1) {
    maxRange = 4294967295;
  }
  var shift = getShiftFromSize(size);
  var fromWireType = (value) => value;
  if (minRange === 0) {
    var bitshift = 32 - 8 * size;
    fromWireType = (value) => (value << bitshift) >>> bitshift;
  }
  var isUnsignedType = name.includes("unsigned");
  var checkAssertions = (value, toTypeName) => {};
  var toWireType;
  if (isUnsignedType) {
    toWireType = function (destructors, value) {
      checkAssertions(value, this.name);
      return value >>> 0;
    };
  } else {
    toWireType = function (destructors, value) {
      checkAssertions(value, this.name);
      return value;
    };
  }
  registerType(primitiveType, {
    name: name,
    fromWireType: fromWireType,
    toWireType: toWireType,
    argPackAdvance: 8,
    readValueFromPointer: integerReadValueFromPointer(name, shift, minRange !== 0),
    destructorFunction: null
  });
}
function __embind_register_memory_view(rawType, dataTypeIndex, name) {
  var typeMapping = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
  var TA = typeMapping[dataTypeIndex];
  function decodeMemoryView(handle) {
    handle = handle >> 2;
    var heap = HEAPU32;
    var size = heap[handle];
    var data = heap[handle + 1];
    return new TA(buffer, data, size);
  }
  name = readLatin1String(name);
  registerType(
    rawType,
    { name: name, fromWireType: decodeMemoryView, argPackAdvance: 8, readValueFromPointer: decodeMemoryView },
    { ignoreDuplicateRegistrations: true }
  );
}
function __embind_register_std_string(rawType, name) {
  name = readLatin1String(name);
  var stdStringIsUTF8 = name === "std::string";
  registerType(rawType, {
    name: name,
    fromWireType: function (value) {
      var length = HEAPU32[value >> 2];
      var payload = value + 4;
      var str;
      if (stdStringIsUTF8) {
        var decodeStartPtr = payload;
        for (var i = 0; i <= length; ++i) {
          var currentBytePtr = payload + i;
          if (i == length || HEAPU8[currentBytePtr] == 0) {
            var maxRead = currentBytePtr - decodeStartPtr;
            var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
            if (str === undefined) {
              str = stringSegment;
            } else {
              str += String.fromCharCode(0);
              str += stringSegment;
            }
            decodeStartPtr = currentBytePtr + 1;
          }
        }
      } else {
        var a = new Array(length);
        for (var i = 0; i < length; ++i) {
          a[i] = String.fromCharCode(HEAPU8[payload + i]);
        }
        str = a.join("");
      }
      _free(value);
      return str;
    },
    toWireType: function (destructors, value) {
      if (value instanceof ArrayBuffer) {
        value = new Uint8Array(value);
      }
      var length;
      var valueIsOfTypeString = typeof value == "string";
      if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
        throwBindingError("Cannot pass non-string to std::string");
      }
      if (stdStringIsUTF8 && valueIsOfTypeString) {
        length = lengthBytesUTF8(value);
      } else {
        length = value.length;
      }
      var base = _malloc(4 + length + 1);
      var ptr = base + 4;
      HEAPU32[base >> 2] = length;
      if (stdStringIsUTF8 && valueIsOfTypeString) {
        stringToUTF8(value, ptr, length + 1);
      } else {
        if (valueIsOfTypeString) {
          for (var i = 0; i < length; ++i) {
            var charCode = value.charCodeAt(i);
            if (charCode > 255) {
              _free(ptr);
              throwBindingError("String has UTF-16 code units that do not fit in 8 bits");
            }
            HEAPU8[ptr + i] = charCode;
          }
        } else {
          for (var i = 0; i < length; ++i) {
            HEAPU8[ptr + i] = value[i];
          }
        }
      }
      if (destructors !== null) {
        destructors.push(_free, base);
      }
      return base;
    },
    argPackAdvance: 8,
    readValueFromPointer: simpleReadValueFromPointer,
    destructorFunction: function (ptr) {
      _free(ptr);
    }
  });
}
var UTF16Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : undefined;
function UTF16ToString(ptr, maxBytesToRead) {
  var endPtr = ptr;
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;
  if (endPtr - ptr > 32 && UTF16Decoder) return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  var str = "";
  for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
    var codeUnit = HEAP16[(ptr + i * 2) >> 1];
    if (codeUnit == 0) break;
    str += String.fromCharCode(codeUnit);
  }
  return str;
}
function stringToUTF16(str, outPtr, maxBytesToWrite) {
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 2147483647;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2;
  var startPtr = outPtr;
  var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    var codeUnit = str.charCodeAt(i);
    HEAP16[outPtr >> 1] = codeUnit;
    outPtr += 2;
  }
  HEAP16[outPtr >> 1] = 0;
  return outPtr - startPtr;
}
function lengthBytesUTF16(str) {
  return str.length * 2;
}
function UTF32ToString(ptr, maxBytesToRead) {
  var i = 0;
  var str = "";
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(ptr + i * 4) >> 2];
    if (utf32 == 0) break;
    ++i;
    if (utf32 >= 65536) {
      var ch = utf32 - 65536;
      str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}
function stringToUTF32(str, outPtr, maxBytesToWrite) {
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 2147483647;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 55296 && codeUnit <= 57343) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = (65536 + ((codeUnit & 1023) << 10)) | (trailSurrogate & 1023);
    }
    HEAP32[outPtr >> 2] = codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  HEAP32[outPtr >> 2] = 0;
  return outPtr - startPtr;
}
function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
    len += 4;
  }
  return len;
}
function __embind_register_std_wstring(rawType, charSize, name) {
  name = readLatin1String(name);
  var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
  if (charSize === 2) {
    decodeString = UTF16ToString;
    encodeString = stringToUTF16;
    lengthBytesUTF = lengthBytesUTF16;
    getHeap = () => HEAPU16;
    shift = 1;
  } else if (charSize === 4) {
    decodeString = UTF32ToString;
    encodeString = stringToUTF32;
    lengthBytesUTF = lengthBytesUTF32;
    getHeap = () => HEAPU32;
    shift = 2;
  }
  registerType(rawType, {
    name: name,
    fromWireType: function (value) {
      var length = HEAPU32[value >> 2];
      var HEAP = getHeap();
      var str;
      var decodeStartPtr = value + 4;
      for (var i = 0; i <= length; ++i) {
        var currentBytePtr = value + 4 + i * charSize;
        if (i == length || HEAP[currentBytePtr >> shift] == 0) {
          var maxReadBytes = currentBytePtr - decodeStartPtr;
          var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
          if (str === undefined) {
            str = stringSegment;
          } else {
            str += String.fromCharCode(0);
            str += stringSegment;
          }
          decodeStartPtr = currentBytePtr + charSize;
        }
      }
      _free(value);
      return str;
    },
    toWireType: function (destructors, value) {
      if (!(typeof value == "string")) {
        throwBindingError("Cannot pass non-string to C++ string type " + name);
      }
      var length = lengthBytesUTF(value);
      var ptr = _malloc(4 + length + charSize);
      HEAPU32[ptr >> 2] = length >> shift;
      encodeString(value, ptr + 4, length + charSize);
      if (destructors !== null) {
        destructors.push(_free, ptr);
      }
      return ptr;
    },
    argPackAdvance: 8,
    readValueFromPointer: simpleReadValueFromPointer,
    destructorFunction: function (ptr) {
      _free(ptr);
    }
  });
}
function __embind_register_void(rawType, name) {
  name = readLatin1String(name);
  registerType(rawType, {
    isVoid: true,
    name: name,
    argPackAdvance: 0,
    fromWireType: function () {
      return undefined;
    },
    toWireType: function (destructors, o) {
      return undefined;
    }
  });
}
var nowIsMonotonic = true;
function __emscripten_get_now_is_monotonic() {
  return nowIsMonotonic;
}
function readI53FromI64(ptr) {
  return HEAPU32[ptr >> 2] + HEAP32[(ptr + 4) >> 2] * 4294967296;
}
function __localtime_js(time, tmPtr) {
  var date = new Date(readI53FromI64(time) * 1e3);
  HEAP32[tmPtr >> 2] = date.getSeconds();
  HEAP32[(tmPtr + 4) >> 2] = date.getMinutes();
  HEAP32[(tmPtr + 8) >> 2] = date.getHours();
  HEAP32[(tmPtr + 12) >> 2] = date.getDate();
  HEAP32[(tmPtr + 16) >> 2] = date.getMonth();
  HEAP32[(tmPtr + 20) >> 2] = date.getFullYear() - 1900;
  HEAP32[(tmPtr + 24) >> 2] = date.getDay();
  var start = new Date(date.getFullYear(), 0, 1);
  var yday = ((date.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24)) | 0;
  HEAP32[(tmPtr + 28) >> 2] = yday;
  HEAP32[(tmPtr + 36) >> 2] = -(date.getTimezoneOffset() * 60);
  var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
  var winterOffset = start.getTimezoneOffset();
  var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
  HEAP32[(tmPtr + 32) >> 2] = dst;
}
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}
function _tzset_impl(timezone, daylight, tzname) {
  var currentYear = new Date().getFullYear();
  var winter = new Date(currentYear, 0, 1);
  var summer = new Date(currentYear, 6, 1);
  var winterOffset = winter.getTimezoneOffset();
  var summerOffset = summer.getTimezoneOffset();
  var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
  HEAP32[timezone >> 2] = stdTimezoneOffset * 60;
  HEAP32[daylight >> 2] = Number(winterOffset != summerOffset);
  function extractZone(date) {
    var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
    return match ? match[1] : "GMT";
  }
  var winterName = extractZone(winter);
  var summerName = extractZone(summer);
  var winterNamePtr = allocateUTF8(winterName);
  var summerNamePtr = allocateUTF8(summerName);
  if (summerOffset < winterOffset) {
    HEAPU32[tzname >> 2] = winterNamePtr;
    HEAPU32[(tzname + 4) >> 2] = summerNamePtr;
  } else {
    HEAPU32[tzname >> 2] = summerNamePtr;
    HEAPU32[(tzname + 4) >> 2] = winterNamePtr;
  }
}
function __tzset_js(timezone, daylight, tzname) {
  if (__tzset_js.called) return;
  __tzset_js.called = true;
  _tzset_impl(timezone, daylight, tzname);
}
function _abort() {
  abort("");
}
var readAsmConstArgsArray = [];
function readAsmConstArgs(sigPtr, buf) {
  readAsmConstArgsArray.length = 0;
  var ch;
  buf >>= 2;
  while ((ch = HEAPU8[sigPtr++])) {
    buf += (ch != 105) & buf;
    readAsmConstArgsArray.push(ch == 105 ? HEAP32[buf] : HEAPF64[buf++ >> 1]);
    ++buf;
  }
  return readAsmConstArgsArray;
}
function _emscripten_asm_const_int(code, sigPtr, argbuf) {
  var args = readAsmConstArgs(sigPtr, argbuf);
  return ASM_CONSTS[code].apply(null, args);
}
var _emscripten_asm_const_double = _emscripten_asm_const_int;
function _emscripten_date_now() {
  return Date.now();
}
var _emscripten_get_now;
if (ENVIRONMENT_IS_NODE) {
  _emscripten_get_now = () => {
    var t = process["hrtime"]();
    return t[0] * 1e3 + t[1] / 1e6;
  };
} else _emscripten_get_now = () => performance.now();
function _emscripten_memcpy_big(dest, src, num) {
  HEAPU8.copyWithin(dest, src, src + num);
}
function _emscripten_random() {
  return Math.random();
}
function getHeapMax() {
  return 2147483648;
}
function emscripten_realloc_buffer(size) {
  try {
    wasmMemory.grow((size - buffer.byteLength + 65535) >>> 16);
    updateGlobalBufferAndViews(wasmMemory.buffer);
    return 1;
  } catch (e) {}
}
function _emscripten_resize_heap(requestedSize) {
  var oldSize = HEAPU8.length;
  requestedSize = requestedSize >>> 0;
  var maxHeapSize = getHeapMax();
  if (requestedSize > maxHeapSize) {
    return false;
  }
  let alignUp = (x, multiple) => x + ((multiple - (x % multiple)) % multiple);
  for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
    var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
    overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
    var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
    var replacement = emscripten_realloc_buffer(newSize);
    if (replacement) {
      return true;
    }
  }
  return false;
}
var ENV = {};
function getExecutableName() {
  return thisProgram || "./this.program";
}
function getEnvStrings() {
  if (!getEnvStrings.strings) {
    var lang = ((typeof navigator == "object" && navigator.languages && navigator.languages[0]) || "C").replace("-", "_") + ".UTF-8";
    var env = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: lang, _: getExecutableName() };
    for (var x in ENV) {
      if (ENV[x] === undefined) delete env[x];
      else env[x] = ENV[x];
    }
    var strings = [];
    for (var x in env) {
      strings.push(x + "=" + env[x]);
    }
    getEnvStrings.strings = strings;
  }
  return getEnvStrings.strings;
}
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    HEAP8[buffer++ >> 0] = str.charCodeAt(i);
  }
  if (!dontAddNull) HEAP8[buffer >> 0] = 0;
}
var SYSCALLS = {
  varargs: undefined,
  get: function () {
    SYSCALLS.varargs += 4;
    var ret = HEAP32[(SYSCALLS.varargs - 4) >> 2];
    return ret;
  },
  getStr: function (ptr) {
    var ret = UTF8ToString(ptr);
    return ret;
  }
};
function _environ_get(__environ, environ_buf) {
  var bufSize = 0;
  getEnvStrings().forEach(function (string, i) {
    var ptr = environ_buf + bufSize;
    HEAPU32[(__environ + i * 4) >> 2] = ptr;
    writeAsciiToMemory(string, ptr);
    bufSize += string.length + 1;
  });
  return 0;
}
function _environ_sizes_get(penviron_count, penviron_buf_size) {
  var strings = getEnvStrings();
  HEAPU32[penviron_count >> 2] = strings.length;
  var bufSize = 0;
  strings.forEach(function (string) {
    bufSize += string.length + 1;
  });
  HEAPU32[penviron_buf_size >> 2] = bufSize;
  return 0;
}
function _fd_close(fd) {
  return 52;
}
function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
  return 70;
}
var printCharBuffers = [null, [], []];
function printChar(stream, curr) {
  var buffer = printCharBuffers[stream];
  if (curr === 0 || curr === 10) {
    (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
    buffer.length = 0;
  } else {
    buffer.push(curr);
  }
}
function _fd_write(fd, iov, iovcnt, pnum) {
  var num = 0;
  for (var i = 0; i < iovcnt; i++) {
    var ptr = HEAPU32[iov >> 2];
    var len = HEAPU32[(iov + 4) >> 2];
    iov += 8;
    for (var j = 0; j < len; j++) {
      printChar(fd, HEAPU8[ptr + j]);
    }
    num += len;
  }
  HEAPU32[pnum >> 2] = num;
  return 0;
}
function __isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function __arraySum(array, index) {
  var sum = 0;
  for (var i = 0; i <= index; sum += array[i++]) {}
  return sum;
}
var __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function __addDays(date, days) {
  var newDate = new Date(date.getTime());
  while (days > 0) {
    var leap = __isLeapYear(newDate.getFullYear());
    var currentMonth = newDate.getMonth();
    var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
    if (days > daysInCurrentMonth - newDate.getDate()) {
      days -= daysInCurrentMonth - newDate.getDate() + 1;
      newDate.setDate(1);
      if (currentMonth < 11) {
        newDate.setMonth(currentMonth + 1);
      } else {
        newDate.setMonth(0);
        newDate.setFullYear(newDate.getFullYear() + 1);
      }
    } else {
      newDate.setDate(newDate.getDate() + days);
      return newDate;
    }
  }
  return newDate;
}
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}
function writeArrayToMemory(array, buffer) {
  HEAP8.set(array, buffer);
}
function _strftime(s, maxsize, format, tm) {
  var tm_zone = HEAP32[(tm + 40) >> 2];
  var date = {
    tm_sec: HEAP32[tm >> 2],
    tm_min: HEAP32[(tm + 4) >> 2],
    tm_hour: HEAP32[(tm + 8) >> 2],
    tm_mday: HEAP32[(tm + 12) >> 2],
    tm_mon: HEAP32[(tm + 16) >> 2],
    tm_year: HEAP32[(tm + 20) >> 2],
    tm_wday: HEAP32[(tm + 24) >> 2],
    tm_yday: HEAP32[(tm + 28) >> 2],
    tm_isdst: HEAP32[(tm + 32) >> 2],
    tm_gmtoff: HEAP32[(tm + 36) >> 2],
    tm_zone: tm_zone ? UTF8ToString(tm_zone) : ""
  };
  var pattern = UTF8ToString(format);
  var EXPANSION_RULES_1 = {
    "%c": "%a %b %d %H:%M:%S %Y",
    "%D": "%m/%d/%y",
    "%F": "%Y-%m-%d",
    "%h": "%b",
    "%r": "%I:%M:%S %p",
    "%R": "%H:%M",
    "%T": "%H:%M:%S",
    "%x": "%m/%d/%y",
    "%X": "%H:%M:%S",
    "%Ec": "%c",
    "%EC": "%C",
    "%Ex": "%m/%d/%y",
    "%EX": "%H:%M:%S",
    "%Ey": "%y",
    "%EY": "%Y",
    "%Od": "%d",
    "%Oe": "%e",
    "%OH": "%H",
    "%OI": "%I",
    "%Om": "%m",
    "%OM": "%M",
    "%OS": "%S",
    "%Ou": "%u",
    "%OU": "%U",
    "%OV": "%V",
    "%Ow": "%w",
    "%OW": "%W",
    "%Oy": "%y"
  };
  for (var rule in EXPANSION_RULES_1) {
    pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule]);
  }
  var WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  function leadingSomething(value, digits, character) {
    var str = typeof value == "number" ? value.toString() : value || "";
    while (str.length < digits) {
      str = character[0] + str;
    }
    return str;
  }
  function leadingNulls(value, digits) {
    return leadingSomething(value, digits, "0");
  }
  function compareByDay(date1, date2) {
    function sgn(value) {
      return value < 0 ? -1 : value > 0 ? 1 : 0;
    }
    var compare;
    if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
      if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
        compare = sgn(date1.getDate() - date2.getDate());
      }
    }
    return compare;
  }
  function getFirstWeekStartDate(janFourth) {
    switch (janFourth.getDay()) {
      case 0:
        return new Date(janFourth.getFullYear() - 1, 11, 29);
      case 1:
        return janFourth;
      case 2:
        return new Date(janFourth.getFullYear(), 0, 3);
      case 3:
        return new Date(janFourth.getFullYear(), 0, 2);
      case 4:
        return new Date(janFourth.getFullYear(), 0, 1);
      case 5:
        return new Date(janFourth.getFullYear() - 1, 11, 31);
      case 6:
        return new Date(janFourth.getFullYear() - 1, 11, 30);
    }
  }
  function getWeekBasedYear(date) {
    var thisDate = __addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
    var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
    var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
    var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
    var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
    if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
      if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
        return thisDate.getFullYear() + 1;
      }
      return thisDate.getFullYear();
    }
    return thisDate.getFullYear() - 1;
  }
  var EXPANSION_RULES_2 = {
    "%a": function (date) {
      return WEEKDAYS[date.tm_wday].substring(0, 3);
    },
    "%A": function (date) {
      return WEEKDAYS[date.tm_wday];
    },
    "%b": function (date) {
      return MONTHS[date.tm_mon].substring(0, 3);
    },
    "%B": function (date) {
      return MONTHS[date.tm_mon];
    },
    "%C": function (date) {
      var year = date.tm_year + 1900;
      return leadingNulls((year / 100) | 0, 2);
    },
    "%d": function (date) {
      return leadingNulls(date.tm_mday, 2);
    },
    "%e": function (date) {
      return leadingSomething(date.tm_mday, 2, " ");
    },
    "%g": function (date) {
      return getWeekBasedYear(date).toString().substring(2);
    },
    "%G": function (date) {
      return getWeekBasedYear(date);
    },
    "%H": function (date) {
      return leadingNulls(date.tm_hour, 2);
    },
    "%I": function (date) {
      var twelveHour = date.tm_hour;
      if (twelveHour == 0) twelveHour = 12;
      else if (twelveHour > 12) twelveHour -= 12;
      return leadingNulls(twelveHour, 2);
    },
    "%j": function (date) {
      return leadingNulls(
        date.tm_mday + __arraySum(__isLeapYear(date.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon - 1),
        3
      );
    },
    "%m": function (date) {
      return leadingNulls(date.tm_mon + 1, 2);
    },
    "%M": function (date) {
      return leadingNulls(date.tm_min, 2);
    },
    "%n": function () {
      return "\n";
    },
    "%p": function (date) {
      if (date.tm_hour >= 0 && date.tm_hour < 12) {
        return "AM";
      }
      return "PM";
    },
    "%S": function (date) {
      return leadingNulls(date.tm_sec, 2);
    },
    "%t": function () {
      return "\t";
    },
    "%u": function (date) {
      return date.tm_wday || 7;
    },
    "%U": function (date) {
      var days = date.tm_yday + 7 - date.tm_wday;
      return leadingNulls(Math.floor(days / 7), 2);
    },
    "%V": function (date) {
      var val = Math.floor((date.tm_yday + 7 - ((date.tm_wday + 6) % 7)) / 7);
      if ((date.tm_wday + 371 - date.tm_yday - 2) % 7 <= 2) {
        val++;
      }
      if (!val) {
        val = 52;
        var dec31 = (date.tm_wday + 7 - date.tm_yday - 1) % 7;
        if (dec31 == 4 || (dec31 == 5 && __isLeapYear((date.tm_year % 400) - 1))) {
          val++;
        }
      } else if (val == 53) {
        var jan1 = (date.tm_wday + 371 - date.tm_yday) % 7;
        if (jan1 != 4 && (jan1 != 3 || !__isLeapYear(date.tm_year))) val = 1;
      }
      return leadingNulls(val, 2);
    },
    "%w": function (date) {
      return date.tm_wday;
    },
    "%W": function (date) {
      var days = date.tm_yday + 7 - ((date.tm_wday + 6) % 7);
      return leadingNulls(Math.floor(days / 7), 2);
    },
    "%y": function (date) {
      return (date.tm_year + 1900).toString().substring(2);
    },
    "%Y": function (date) {
      return date.tm_year + 1900;
    },
    "%z": function (date) {
      var off = date.tm_gmtoff;
      var ahead = off >= 0;
      off = Math.abs(off) / 60;
      off = (off / 60) * 100 + (off % 60);
      return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
    },
    "%Z": function (date) {
      return date.tm_zone;
    },
    "%%": function () {
      return "%";
    }
  };
  pattern = pattern.replace(/%%/g, "\0\0");
  for (var rule in EXPANSION_RULES_2) {
    if (pattern.includes(rule)) {
      pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date));
    }
  }
  pattern = pattern.replace(/\0\0/g, "%");
  var bytes = intArrayFromString(pattern, false);
  if (bytes.length > maxsize) {
    return 0;
  }
  writeArrayToMemory(bytes, s);
  return bytes.length - 1;
}
function _strftime_l(s, maxsize, format, tm, loc) {
  return _strftime(s, maxsize, format, tm);
}
function wtsfetch_fetch_native(fetchStruc, onSuccess, onError, onProgress) {
  const url = HEAPU32[(fetchStruc + wtsFetchC.wtsfetch_t.url) >> 2];
  if (!url) {
    console.error("fetch: XHR failed, no URL specified!");
    onerror(fetchStruc, 0, "no url specified!");
    return;
  }
  const url_ = UTF8ToString(url);
  const fetch_attr = fetchStruc + wtsFetchC.wtsfetch_t.__attributes;
  var requestMethod = UTF8ToString(fetch_attr);
  if (!requestMethod) requestMethod = "GET";
  const userData = HEAPU32[(fetchStruc + wtsFetchC.wtsfetch_t.userData) >> 2];
  const fetchAttributes = HEAPU32[(fetch_attr + wtsFetchC.wtsfetch_attr_t.attributes) >> 2];
  const timeoutMsecs = HEAPU32[(fetch_attr + wtsFetchC.wtsfetch_attr_t.timeoutMSecs) >> 2];
  const destinationPath = HEAPU32[(fetch_attr + wtsFetchC.wtsfetch_attr_t.destinationPath) >> 2];
  var requestHeaders = HEAPU32[(fetch_attr + wtsFetchC.wtsfetch_attr_t.requestHeaders) >> 2];
  const dataPtr = HEAPU32[(fetch_attr + wtsFetchC.wtsfetch_attr_t.requestData) >> 2];
  const dataLength = HEAPU32[(fetch_attr + wtsFetchC.wtsfetch_attr_t.requestDataSize) >> 2];
  const payload = dataPtr && dataLength ? HEAPU8.slice(dataPtr, dataPtr + dataLength) : null;
  var jsnRequestHeaders = {};
  if (requestHeaders) {
    for (;;) {
      var key = HEAPU32[requestHeaders >> 2];
      if (!key) break;
      var value = HEAPU32[(requestHeaders + 4) >> 2];
      if (!value) break;
      requestHeaders += 8;
      var keyStr = UTF8ToString(key);
      var valueStr = UTF8ToString(value);
      if (valueStr) jsnRequestHeaders[keyStr] = valueStr;
    }
  }
  fetch(url_, { method: requestMethod, headers: jsnRequestHeaders, body: payload })
    .then((response) => {
      if (!response.ok) {
        const responseError = { statusText: response.statusText, status: response.status };
        throw responseError;
      }
      return response;
    })
    .then((response) => {
      if (fetchAttributes & (1 == 1)) {
        var headers = {};
        var hdrCount = 0;
        response.headers.forEach((value, key) => {
          headers[key] = value;
          hdrCount++;
        });
        if (hdrCount > 0) {
          const sHeaders = JSON.stringify(headers);
          const sHeadersLenBytes = lengthBytesUTF8(sHeaders) + 1;
          const ptr = _malloc(sHeadersLenBytes);
          if (ptr) {
            stringToUTF8(sHeaders, ptr, sHeadersLenBytes);
            HEAPU32[(fetchStruc + wtsFetchC.wtsfetch_t.responseHeaders) >> 2] = ptr;
          }
        }
      }
      return response.arrayBuffer();
    })
    .then((payload) => {
      const payloadBytes = new Uint8Array(payload);
      HEAPU16[(fetchStruc + wtsFetchC.wtsfetch_t.status) >> 1] = 200;
      stringToUTF8("Ok", fetchStruc + wtsFetchC.wtsfetch_t.statusText, 64);
      if (payloadBytes && payloadBytes.byteLength > 0) {
        ptr = _malloc(payloadBytes.byteLength);
        if (!ptr) {
          const responseError = { statusText: "Payload to large; failed to allocate", status: 413 };
          throw responseError;
        }
        HEAPU8.set(payloadBytes, ptr);
        HEAPU32[(fetchStruc + wtsFetchC.wtsfetch_t.data) >> 2] = ptr;
        setu64(fetchStruc + wtsFetchC.wtsfetch_t.numBytes, payloadBytes.byteLength);
        setu64(fetchStruc + wtsFetchC.wtsfetch_t.totalBytes, payloadBytes.byteLength);
        setu64(fetchStruc + wtsFetchC.wtsfetch_t.dataOffset, 0);
      }
      if (onSuccess) onSuccess(fetchStruc);
    })
    .catch(function (error) {
      var err = error;
      if (typeof error !== "object" || error.message) {
        err = { statusText: "not found", status: 400, error: error };
      } else console.log("wtsFetch catch", url_, error);
      HEAPU16[(fetchStruc + wtsFetchC.wtsfetch_t.status) >> 1] = err.status;
      if (err.statusText) stringToUTF8(err.statusText, fetchStruc + wtsFetchC.wtsfetch_t.statusText, 64);
      if (onError) onError(fetchStruc);
    });
}
var wtsFetchC = {
  wtsfetch_attr_t: {
    __size__: 68,
    requestMethod: 0,
    userData: 32,
    onsuccess: 36,
    onerror: 40,
    onprogress: 44,
    attributes: 48,
    timeoutMSecs: 52,
    requestHeaders: 56,
    requestData: 60,
    requestDataSize: 64
  },
  wtsfetch_t: {
    __size__: 184,
    magicBytes: 0,
    userData: 4,
    url: 8,
    data: 12,
    numBytes: 16,
    dataOffset: 24,
    totalBytes: 32,
    status: 40,
    statusText: 44,
    responseHeaders: 108,
    __attributes: 112
  }
};
function setu64(addr, val) {
  HEAPU32[addr >> 2] = val;
  HEAPU32[(addr + 4) >> 2] = (val / 4294967296) | 0;
}
function _wtsfetch_start_fetch(fetchStruc) {
  const fetch_attr = fetchStruc + wtsFetchC.wtsfetch_t.__attributes;
  const onsuccess = HEAPU32[(fetch_attr + wtsFetchC.wtsfetch_attr_t.onsuccess) >> 2];
  const onerror = HEAPU32[(fetch_attr + wtsFetchC.wtsfetch_attr_t.onerror) >> 2];
  const onprogress = HEAPU32[(fetch_attr + wtsFetchC.wtsfetch_attr_t.onprogress) >> 2];
  var reportSuccess = function (fetchStruc) {
    if (onsuccess) getWasmTableEntry(onsuccess)(fetchStruc);
  };
  var reportProgress = function (fetchStruc) {
    if (onprogress) getWasmTableEntry(onprogress)(fetchStruc);
  };
  var reportError = function (fetchStruc) {
    if (onerror) getWasmTableEntry(onerror)(fetchStruc);
  };
  wtsfetch_fetch_native(fetchStruc, reportSuccess, reportError, reportProgress);
  return fetchStruc;
}
function _proc_exit(code) {
  EXITSTATUS = code;
  if (!keepRuntimeAlive()) {
    if (Module["onExit"]) Module["onExit"](code);
    ABORT = true;
  }
  quit_(code, new ExitStatus(code));
}
function exitJS(status, implicit) {
  EXITSTATUS = status;
  _proc_exit(status);
}
function handleException(e) {
  if (e instanceof ExitStatus || e == "unwind") {
    return EXITSTATUS;
  }
  quit_(1, e);
}
embind_init_charCodes();
BindingError = Module["BindingError"] = extendError(Error, "BindingError");
InternalError = Module["InternalError"] = extendError(Error, "InternalError");
init_emval();
UnboundTypeError = Module["UnboundTypeError"] = extendError(Error, "UnboundTypeError");
var asmLibraryArg = {
  CfgLoaderTimeouts: CfgLoaderTimeouts,
  __assert_fail: ___assert_fail,
  __cxa_allocate_exception: ___cxa_allocate_exception,
  __cxa_begin_catch: ___cxa_begin_catch,
  __cxa_end_catch: ___cxa_end_catch,
  __cxa_find_matching_catch_2: ___cxa_find_matching_catch_2,
  __cxa_find_matching_catch_3: ___cxa_find_matching_catch_3,
  __cxa_free_exception: ___cxa_free_exception,
  __cxa_rethrow: ___cxa_rethrow,
  __cxa_throw: ___cxa_throw,
  __cxa_uncaught_exceptions: ___cxa_uncaught_exceptions,
  __resumeException: ___resumeException,
  _embind_register_bigint: __embind_register_bigint,
  _embind_register_bool: __embind_register_bool,
  _embind_register_emval: __embind_register_emval,
  _embind_register_float: __embind_register_float,
  _embind_register_function: __embind_register_function,
  _embind_register_integer: __embind_register_integer,
  _embind_register_memory_view: __embind_register_memory_view,
  _embind_register_std_string: __embind_register_std_string,
  _embind_register_std_wstring: __embind_register_std_wstring,
  _embind_register_void: __embind_register_void,
  _emscripten_get_now_is_monotonic: __emscripten_get_now_is_monotonic,
  _localtime_js: __localtime_js,
  _tzset_js: __tzset_js,
  abort: _abort,
  emscripten_asm_const_double: _emscripten_asm_const_double,
  emscripten_asm_const_int: _emscripten_asm_const_int,
  emscripten_date_now: _emscripten_date_now,
  emscripten_get_now: _emscripten_get_now,
  emscripten_memcpy_big: _emscripten_memcpy_big,
  emscripten_random: _emscripten_random,
  emscripten_resize_heap: _emscripten_resize_heap,
  environ_get: _environ_get,
  environ_sizes_get: _environ_sizes_get,
  fd_close: _fd_close,
  fd_seek: _fd_seek,
  fd_write: _fd_write,
  invoke_diii: invoke_diii,
  invoke_djj: invoke_djj,
  invoke_f: invoke_f,
  invoke_fiii: invoke_fiii,
  invoke_i: invoke_i,
  invoke_ii: invoke_ii,
  invoke_iii: invoke_iii,
  invoke_iiii: invoke_iiii,
  invoke_iiiii: invoke_iiiii,
  invoke_iiiiii: invoke_iiiiii,
  invoke_iiiiiii: invoke_iiiiiii,
  invoke_iiiiiiii: invoke_iiiiiiii,
  invoke_iiiiiiiiiii: invoke_iiiiiiiiiii,
  invoke_iiiiiiiiiiii: invoke_iiiiiiiiiiii,
  invoke_iiiiiiiiiiiii: invoke_iiiiiiiiiiiii,
  invoke_iiiiij: invoke_iiiiij,
  invoke_iij: invoke_iij,
  invoke_j: invoke_j,
  invoke_ji: invoke_ji,
  invoke_jiii: invoke_jiii,
  invoke_jiiii: invoke_jiiii,
  invoke_v: invoke_v,
  invoke_vi: invoke_vi,
  invoke_vii: invoke_vii,
  invoke_viif: invoke_viif,
  invoke_viii: invoke_viii,
  invoke_viiii: invoke_viiii,
  invoke_viiiii: invoke_viiiii,
  invoke_viiiiii: invoke_viiiiii,
  invoke_viiiiiii: invoke_viiiiiii,
  invoke_viiiiiiiiii: invoke_viiiiiiiiii,
  invoke_viiiiiiiiiiiiiii: invoke_viiiiiiiiiiiiiii,
  strftime: _strftime,
  strftime_l: _strftime_l,
  wtsfetch_start_fetch: _wtsfetch_start_fetch
};
var asm = createWasm();
var ___wasm_call_ctors = (Module["___wasm_call_ctors"] = function () {
  return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["__wasm_call_ctors"]).apply(null, arguments);
});
var getTempRet0 = (Module["getTempRet0"] = function () {
  return (getTempRet0 = Module["getTempRet0"] = Module["asm"]["getTempRet0"]).apply(null, arguments);
});
var __Z13Dbg_Set_Level17DEBUG_WASM_LEVELS = (Module["__Z13Dbg_Set_Level17DEBUG_WASM_LEVELS"] = function () {
  return (__Z13Dbg_Set_Level17DEBUG_WASM_LEVELS = Module["__Z13Dbg_Set_Level17DEBUG_WASM_LEVELS"] =
    Module["asm"]["_Z13Dbg_Set_Level17DEBUG_WASM_LEVELS"]).apply(null, arguments);
});
var __Z7WTS_Log17DEBUG_WASM_LEVELSPKcS1_ = (Module["__Z7WTS_Log17DEBUG_WASM_LEVELSPKcS1_"] = function () {
  return (__Z7WTS_Log17DEBUG_WASM_LEVELSPKcS1_ = Module["__Z7WTS_Log17DEBUG_WASM_LEVELSPKcS1_"] =
    Module["asm"]["_Z7WTS_Log17DEBUG_WASM_LEVELSPKcS1_"]).apply(null, arguments);
});
var _free = (Module["_free"] = function () {
  return (_free = Module["_free"] = Module["asm"]["free"]).apply(null, arguments);
});
var __Z13Dbg_Get_Levelv = (Module["__Z13Dbg_Get_Levelv"] = function () {
  return (__Z13Dbg_Get_Levelv = Module["__Z13Dbg_Get_Levelv"] = Module["asm"]["_Z13Dbg_Get_Levelv"]).apply(null, arguments);
});
var _htonl = (Module["_htonl"] = function () {
  return (_htonl = Module["_htonl"] = Module["asm"]["htonl"]).apply(null, arguments);
});
var _malloc = (Module["_malloc"] = function () {
  return (_malloc = Module["_malloc"] = Module["asm"]["malloc"]).apply(null, arguments);
});
var __Z13WTS_IsLogging17DEBUG_WASM_LEVELS = (Module["__Z13WTS_IsLogging17DEBUG_WASM_LEVELS"] = function () {
  return (__Z13WTS_IsLogging17DEBUG_WASM_LEVELS = Module["__Z13WTS_IsLogging17DEBUG_WASM_LEVELS"] =
    Module["asm"]["_Z13WTS_IsLogging17DEBUG_WASM_LEVELS"]).apply(null, arguments);
});
var __Z7WTS_Log17DEBUG_WASM_LEVELSPKc = (Module["__Z7WTS_Log17DEBUG_WASM_LEVELSPKc"] = function () {
  return (__Z7WTS_Log17DEBUG_WASM_LEVELSPKc = Module["__Z7WTS_Log17DEBUG_WASM_LEVELSPKc"] =
    Module["asm"]["_Z7WTS_Log17DEBUG_WASM_LEVELSPKc"]).apply(null, arguments);
});
var __Z7WTS_Log17DEBUG_WASM_LEVELSPKcm = (Module["__Z7WTS_Log17DEBUG_WASM_LEVELSPKcm"] = function () {
  return (__Z7WTS_Log17DEBUG_WASM_LEVELSPKcm = Module["__Z7WTS_Log17DEBUG_WASM_LEVELSPKcm"] =
    Module["asm"]["_Z7WTS_Log17DEBUG_WASM_LEVELSPKcm"]).apply(null, arguments);
});
var ___errno_location = (Module["___errno_location"] = function () {
  return (___errno_location = Module["___errno_location"] = Module["asm"]["__errno_location"]).apply(null, arguments);
});
var _main = (Module["_main"] = function () {
  return (_main = Module["_main"] = Module["asm"]["main"]).apply(null, arguments);
});
var ___getTypeName = (Module["___getTypeName"] = function () {
  return (___getTypeName = Module["___getTypeName"] = Module["asm"]["__getTypeName"]).apply(null, arguments);
});
var __embind_initialize_bindings = (Module["__embind_initialize_bindings"] = function () {
  return (__embind_initialize_bindings = Module["__embind_initialize_bindings"] = Module["asm"]["_embind_initialize_bindings"]).apply(
    null,
    arguments
  );
});
var _htons = (Module["_htons"] = function () {
  return (_htons = Module["_htons"] = Module["asm"]["htons"]).apply(null, arguments);
});
var _ntohs = (Module["_ntohs"] = function () {
  return (_ntohs = Module["_ntohs"] = Module["asm"]["ntohs"]).apply(null, arguments);
});
var _setThrew = (Module["_setThrew"] = function () {
  return (_setThrew = Module["_setThrew"] = Module["asm"]["setThrew"]).apply(null, arguments);
});
var setTempRet0 = (Module["setTempRet0"] = function () {
  return (setTempRet0 = Module["setTempRet0"] = Module["asm"]["setTempRet0"]).apply(null, arguments);
});
var stackSave = (Module["stackSave"] = function () {
  return (stackSave = Module["stackSave"] = Module["asm"]["stackSave"]).apply(null, arguments);
});
var stackRestore = (Module["stackRestore"] = function () {
  return (stackRestore = Module["stackRestore"] = Module["asm"]["stackRestore"]).apply(null, arguments);
});
var stackAlloc = (Module["stackAlloc"] = function () {
  return (stackAlloc = Module["stackAlloc"] = Module["asm"]["stackAlloc"]).apply(null, arguments);
});
var ___cxa_can_catch = (Module["___cxa_can_catch"] = function () {
  return (___cxa_can_catch = Module["___cxa_can_catch"] = Module["asm"]["__cxa_can_catch"]).apply(null, arguments);
});
var ___cxa_is_pointer_type = (Module["___cxa_is_pointer_type"] = function () {
  return (___cxa_is_pointer_type = Module["___cxa_is_pointer_type"] = Module["asm"]["__cxa_is_pointer_type"]).apply(null, arguments);
});
var dynCall_iij = (Module["dynCall_iij"] = function () {
  return (dynCall_iij = Module["dynCall_iij"] = Module["asm"]["dynCall_iij"]).apply(null, arguments);
});
var dynCall_jiii = (Module["dynCall_jiii"] = function () {
  return (dynCall_jiii = Module["dynCall_jiii"] = Module["asm"]["dynCall_jiii"]).apply(null, arguments);
});
var dynCall_djj = (Module["dynCall_djj"] = function () {
  return (dynCall_djj = Module["dynCall_djj"] = Module["asm"]["dynCall_djj"]).apply(null, arguments);
});
var dynCall_j = (Module["dynCall_j"] = function () {
  return (dynCall_j = Module["dynCall_j"] = Module["asm"]["dynCall_j"]).apply(null, arguments);
});
var dynCall_jiji = (Module["dynCall_jiji"] = function () {
  return (dynCall_jiji = Module["dynCall_jiji"] = Module["asm"]["dynCall_jiji"]).apply(null, arguments);
});
var dynCall_ji = (Module["dynCall_ji"] = function () {
  return (dynCall_ji = Module["dynCall_ji"] = Module["asm"]["dynCall_ji"]).apply(null, arguments);
});
var dynCall_iiiiij = (Module["dynCall_iiiiij"] = function () {
  return (dynCall_iiiiij = Module["dynCall_iiiiij"] = Module["asm"]["dynCall_iiiiij"]).apply(null, arguments);
});
var dynCall_viijii = (Module["dynCall_viijii"] = function () {
  return (dynCall_viijii = Module["dynCall_viijii"] = Module["asm"]["dynCall_viijii"]).apply(null, arguments);
});
var dynCall_jiiii = (Module["dynCall_jiiii"] = function () {
  return (dynCall_jiiii = Module["dynCall_jiiii"] = Module["asm"]["dynCall_jiiii"]).apply(null, arguments);
});
var dynCall_iiiiijj = (Module["dynCall_iiiiijj"] = function () {
  return (dynCall_iiiiijj = Module["dynCall_iiiiijj"] = Module["asm"]["dynCall_iiiiijj"]).apply(null, arguments);
});
var dynCall_iiiiiijj = (Module["dynCall_iiiiiijj"] = function () {
  return (dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = Module["asm"]["dynCall_iiiiiijj"]).apply(null, arguments);
});
var _g_debugWasmLevel = (Module["_g_debugWasmLevel"] = 83024);
var ___start_em_js = (Module["___start_em_js"] = 88498);
var ___stop_em_js = (Module["___stop_em_js"] = 88918);
function invoke_ii(index, a1) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiii(index, a1, a2, a3, a4) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1, a2, a3, a4);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiii(index, a1, a2, a3, a4) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1, a2, a3, a4);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiiii(index, a1, a2, a3, a4, a5, a6) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iii(index, a1, a2) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1, a2);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viii(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_i(index) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)();
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiii(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_vii(index, a1, a2) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1, a2);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiii(index, a1, a2, a3, a4, a5) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1, a2, a3, a4, a5);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_v(index) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)();
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_vi(index, a1) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_f(index) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)();
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiii(index, a1, a2, a3, a4, a5) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1, a2, a3, a4, a5);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiii(index, a1, a2, a3, a4, a5, a6) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_fiii(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_diii(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_viif(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iij(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    return dynCall_iij(index, a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_djj(index, a1, a2, a3, a4) {
  var sp = stackSave();
  try {
    return dynCall_djj(index, a1, a2, a3, a4);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_jiii(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    return dynCall_jiii(index, a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_j(index) {
  var sp = stackSave();
  try {
    return dynCall_j(index);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_ji(index, a1) {
  var sp = stackSave();
  try {
    return dynCall_ji(index, a1);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiij(index, a1, a2, a3, a4, a5, a6) {
  var sp = stackSave();
  try {
    return dynCall_iiiiij(index, a1, a2, a3, a4, a5, a6);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
function invoke_jiiii(index, a1, a2, a3, a4) {
  var sp = stackSave();
  try {
    return dynCall_jiiii(index, a1, a2, a3, a4);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    _setThrew(1, 0);
  }
}
var calledRun;
dependenciesFulfilled = function runCaller() {
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller;
};
function callMain(args) {
  var entryFunction = Module["_main"];
  var argc = 0;
  var argv = 0;
  try {
    var ret = entryFunction(argc, argv);
    exitJS(ret, true);
    return ret;
  } catch (e) {
    return handleException(e);
  }
}
function run(args) {
  args = args || arguments_;
  if (runDependencies > 0) {
    return;
  }
  preRun();
  if (runDependencies > 0) {
    return;
  }
  function doRun() {
    if (calledRun) return;
    calledRun = true;
    Module["calledRun"] = true;
    if (ABORT) return;
    initRuntime();
    preMain();
    if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
    if (shouldRunNow) callMain(args);
    postRun();
  }
  if (Module["setStatus"]) {
    Module["setStatus"]("Running...");
    setTimeout(function () {
      setTimeout(function () {
        Module["setStatus"]("");
      }, 1);
      doRun();
    }, 1);
  } else {
    doRun();
  }
}
if (Module["preInit"]) {
  if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
  while (Module["preInit"].length > 0) {
    Module["preInit"].pop()();
  }
}
var shouldRunNow = true;
if (Module["noInitialRun"]) shouldRunNow = false;
run();
