//third_party/sketchology/public/web/wasm/ink_wasm-bundle.js
/**
 * @fileoverview Emscripten-generated JS wrapper around the wasm binary of the
 *   Ink rendering engine
 * @suppress {unknownDefines|undefinedVars|checkTypes|checkVars|const|suspiciousCode|uselessCode}
 */
var inkLoadWasmModule = (() => {
  var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== "undefined") _scriptDir = _scriptDir || __filename;
  return function (moduleArg = {}) {
    var Module = moduleArg;
    var readyPromiseResolve, readyPromiseReject;
    Module["ready"] = new Promise((resolve, reject) => {
      readyPromiseResolve = resolve;
      readyPromiseReject = reject;
    });
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
    var read_, readAsync, readBinary;
    if (ENVIRONMENT_IS_NODE) {
      var fs = require("fs");
      var nodePath = require("path");
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = nodePath.dirname(scriptDirectory) + "/";
      } else {
        scriptDirectory = __dirname + "/";
      }
      read_ = (filename, binary) => {
        filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
        return fs.readFileSync(filename, binary ? undefined : "utf8");
      };
      readBinary = (filename) => {
        var ret = read_(filename, true);
        if (!ret.buffer) {
          ret = new Uint8Array(ret);
        }
        return ret;
      };
      readAsync = (filename, onload, onerror, binary = true) => {
        filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
        fs.readFile(filename, binary ? undefined : "utf8", (err, data) => {
          if (err) onerror(err);
          else onload(binary ? data.buffer : data);
        });
      };
      if (!Module["thisProgram"] && process.argv.length > 1) {
        thisProgram = process.argv[1].replace(/\\/g, "/");
      }
      arguments_ = process.argv.slice(2);
      quit_ = (status, toThrow) => {
        process.exitCode = status;
        throw toThrow;
      };
      Module["inspect"] = () => "[Emscripten Module object]";
    } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href;
      } else if (typeof document != "undefined" && document.currentScript) {
        scriptDirectory = document.currentScript.src;
      }
      if (_scriptDir) {
        scriptDirectory = _scriptDir;
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
    } else {
    }
    var out = Module["print"] || console.log.bind(console);
    var err = Module["printErr"] || console.error.bind(console);
    Object.assign(Module, moduleOverrides);
    moduleOverrides = null;
    if (Module["arguments"]) arguments_ = Module["arguments"];
    if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
    if (Module["quit"]) quit_ = Module["quit"];
    var wasmBinary;
    if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
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
    var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
    function updateMemoryViews() {
      var b = wasmMemory.buffer;
      Module["HEAP8"] = HEAP8 = new Int8Array(b);
      Module["HEAP16"] = HEAP16 = new Int16Array(b);
      Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
      Module["HEAPU16"] = HEAPU16 = new Uint16Array(b);
      Module["HEAP32"] = HEAP32 = new Int32Array(b);
      Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
      Module["HEAPF32"] = HEAPF32 = new Float32Array(b);
      Module["HEAPF64"] = HEAPF64 = new Float64Array(b);
    }
    var __ATPRERUN__ = [];
    var __ATINIT__ = [];
    var __ATEXIT__ = [];
    var __ATPOSTRUN__ = [];
    var runtimeInitialized = false;
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
      if (Module["onAbort"]) {
        Module["onAbort"](what);
      }
      what = "Aborted(" + what + ")";
      err(what);
      ABORT = true;
      EXITSTATUS = 1;
      what += ". Build with -sASSERTIONS for more info.";
      var e = new WebAssembly.RuntimeError(what);
      readyPromiseReject(e);
      throw e;
    }
    var dataURIPrefix = "data:application/octet-stream;base64,";
    var isDataURI = (filename) => filename.startsWith(dataURIPrefix);
    var isFileURI = (filename) => filename.startsWith("file://");
    var wasmBinaryFile;
    wasmBinaryFile = "ink.wasm";
    if (!isDataURI(wasmBinaryFile)) {
      wasmBinaryFile = locateFile(wasmBinaryFile);
    }
    function getBinarySync(file) {
      if (file == wasmBinaryFile && wasmBinary) {
        return new Uint8Array(wasmBinary);
      }
      if (readBinary) {
        return readBinary(file);
      }
      throw "both async and sync fetching of the wasm failed";
    }
    function getBinaryPromise(binaryFile) {
      if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
        if (typeof fetch == "function" && !isFileURI(binaryFile)) {
          return fetch(binaryFile, { credentials: "same-origin" })
            .then((response) => {
              if (!response["ok"]) {
                throw "failed to load wasm binary file at '" + binaryFile + "'";
              }
              return response["arrayBuffer"]();
            })
            .catch(() => getBinarySync(binaryFile));
        } else if (readAsync) {
          return new Promise((resolve, reject) => {
            readAsync(binaryFile, (response) => resolve(new Uint8Array(response)), reject);
          });
        }
      }
      return Promise.resolve().then(() => getBinarySync(binaryFile));
    }
    function instantiateArrayBuffer(binaryFile, imports, receiver) {
      return getBinaryPromise(binaryFile)
        .then((binary) => WebAssembly.instantiate(binary, imports))
        .then((instance) => instance)
        .then(receiver, (reason) => {
          err(`failed to asynchronously prepare wasm: ${reason}`);
          abort(reason);
        });
    }
    function instantiateAsync(binary, binaryFile, imports, callback) {
      if (
        !binary &&
        typeof WebAssembly.instantiateStreaming == "function" &&
        !isDataURI(binaryFile) &&
        !isFileURI(binaryFile) &&
        !ENVIRONMENT_IS_NODE &&
        typeof fetch == "function"
      ) {
        return fetch(binaryFile, { credentials: "same-origin" }).then((response) => {
          var result = WebAssembly.instantiateStreaming(response, imports);
          return result.then(callback, function (reason) {
            err(`wasm streaming compile failed: ${reason}`);
            err("falling back to ArrayBuffer instantiation");
            return instantiateArrayBuffer(binaryFile, imports, callback);
          });
        });
      }
      return instantiateArrayBuffer(binaryFile, imports, callback);
    }
    function createWasm() {
      var info = { a: wasmImports };
      function receiveInstance(instance, module) {
        wasmExports = instance.exports;
        wasmMemory = wasmExports["Gf"];
        updateMemoryViews();
        wasmTable = wasmExports["If"];
        addOnInit(wasmExports["Hf"]);
        removeRunDependency("wasm-instantiate");
        return wasmExports;
      }
      addRunDependency("wasm-instantiate");
      function receiveInstantiationResult(result) {
        receiveInstance(result["instance"]);
      }
      if (Module["instantiateWasm"]) {
        try {
          return Module["instantiateWasm"](info, receiveInstance);
        } catch (e) {
          err(`Module.instantiateWasm callback failed with error: ${e}`);
          readyPromiseReject(e);
        }
      }
      instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult).catch(readyPromiseReject);
      return {};
    }
    var ASM_CONSTS = {
      301576: ($0, $1, $2, $3) => setTimeout(() => window.inkWasmRegistry[$3].dynCall_vi($1, $2), $0),
      301657: ($0) => {
        clearTimeout($0);
      },
      301679: ($0, $1) => {
        window.inkHostRegistry[$1].setTargetFPS($0);
      },
      301728: ($0) => {
        window.inkHostRegistry[$0].bindScreen();
      },
      301773: ($0, $1) => {
        window.inkHostRegistry[$1].requestImage(UTF8ToString($0));
      },
      301836: ($0, $1, $2, $3) => {
        window.inkHostRegistry[$3].setCursor($0, $1, $2);
      },
      301890: ($0, $1, $2) => {
        window.inkHostRegistry[$2].navigateToUri(UTF8ToString($0, $1));
      },
      301958: ($0, $1) => {
        window.inkHostRegistry[$1].setKeyboardMode($0);
      },
      302010: ($0) => window.inkHostRegistry[$0].shouldPreloadShaders(),
      302072: ($0) => window.inkHostRegistry[$0].shouldRegisterDocument(),
      302136: ($0, $1, $2, $3, $4, $5) => {
        const buf = window.inkHostRegistry[$5].renderText(HEAPU8.subarray($0, $0 + $1), $2, $3);
        HEAP8.set(buf, $4);
      },
      302250: ($0, $1, $2, $3, $4, $5) => {
        const name = window.inkHostRegistry[$0].selectMatchingFont(UTF8ToString($1, $2), $3, !!$4, $5);
        if (name) {
          const size = lengthBytesUTF8(name) + 1;
          const tempBuffer = _malloc(size);
          stringToUTF8(name, tempBuffer, size);
          return tempBuffer;
        }
        return 0;
      },
      302506: ($0, $1, $2) => {
        window.inkHostRegistry[$2].onSceneChange(new Uint8Array(HEAPU8.subarray($0, $0 + $1)));
      },
      302599: ($0, $1, $2, $3, $4, $5, $6, $7, $8) => {
        window.inkHostRegistry[$8].onImageExported(
          $0,
          $1,
          $2,
          new Uint8ClampedArray(HEAPU8.subarray($3, $3 + $4)),
          $5,
          $6,
          UTF8ToString($7)
        );
      },
      302739: ($0, $1, $2) => {
        window.inkHostRegistry[$2].onToolEvent(new Uint8Array(HEAPU8.subarray($0, $0 + $1)));
      },
      302830: ($0, $1) => {
        window.inkHostRegistry[$1].onSequencePointReached($0);
      },
      302889: ($0, $1, $2) => {
        window.inkHostRegistry[$2].onFlagChanged($0, !!$1);
      },
      302945: ($0) => {
        window.inkHostRegistry[$0].onCameraChanged();
      },
      302995: ($0, $1) => {
        window.inkHostRegistry[$1].onCameraMovementStateChanged(!!$0);
      },
      303062: ($0, $1) => {
        window.inkHostRegistry[$1].onBlockingStateChanged(!!$0);
      },
      303123: ($0) => {
        window.inkHostRegistry[$0].onInvisibleLayerActionPrevented();
      },
      303189: ($0, $1, $2) => {
        window.inkHostRegistry[$2].onPdfLoadSuccess(new Uint8Array(HEAPU8.subarray($0, $0 + $1)));
      },
      303285: ($0) => {
        window.inkHostRegistry[$0].onPdfLoadPasswordRequired();
      },
      303345: ($0, $1, $2) => {
        window.inkHostRegistry[$2].onPdfLoadFailure(UTF8ToString($0, $1));
      },
      303416: ($0, $1, $2, $3) => {
        window.inkHostRegistry[$3].onPdfSaveSuccess($0, new Uint8Array(HEAPU8.subarray($1, $1 + $2)));
      },
      303516: ($0, $1, $2, $3) => {
        window.inkHostRegistry[$3].onPdfSaveFailure($0, UTF8ToString($1, $2));
      },
      303591: ($0, $1) => {
        window.inkHostRegistry[$0].onPdfUnsupportedFeature($1);
      },
      303651: ($0) => {
        window.inkHostRegistry[$0].onPdfFormChanged();
      },
      303702: ($0, $1, $2, $3, $4, $5, $6, $7) => {
        window.inkHostRegistry[$0].onPdfFormFieldFocused($1, new Uint8Array(HEAPU8.subarray($2, $2 + $3)), $4, !!$5, UTF8ToString($6, $7));
      },
      303839: ($0, $1, $2) => {
        window.inkHostRegistry[$2].onPdfFormTextFieldFocusChanged(true, UTF8ToString($0, $1));
      },
      303931: ($0) => {
        window.inkHostRegistry[$0].onPdfFormTextFieldFocusChanged(false);
      },
      304001: ($0, $1) => {
        window.inkHostRegistry[$1].onPendingTexturesChanged(!!$0);
      },
      304064: ($0, $1, $2) => {
        const canvas = self.WorkerGlobalScope ? new OffscreenCanvas(128, 128) : document.createElement("canvas");
        const gl = canvas.getContext("webgl");
        if (gl) {
          const di = gl.getExtension("WEBGL_debug_renderer_info");
          if (di) {
            stringToUTF8(gl.getParameter(di.UNMASKED_RENDERER_WEBGL), $0, $2);
            stringToUTF8(gl.getParameter(di.UNMASKED_VENDOR_WEBGL), $1, $2);
          }
        }
      },
      304426: () => !!Module.ctx,
      304448: () => {
        debugger;
      },
      304461: () => typeof wasmOffsetConverter !== "undefined"
    };
    function em_severity_log(severity, severityName, message) {
      if (typeof globalThis === "object" && typeof globalThis["Module"] === "object" && typeof globalThis["Module"]["log"] === "function") {
        globalThis["Module"]["log"](severity, UTF8ToString(severityName), UTF8ToString(message));
      } else {
        var loggers = [console.log, console.warn, console.error];
        loggers[severity].call(console, UTF8ToString(severityName) + " " + UTF8ToString(message) + "\n");
      }
    }
    function HaveOffsetConverter() {
      return typeof wasmOffsetConverter !== "undefined";
    }
    function ExitStatus(status) {
      this.name = "ExitStatus";
      this.message = `Program terminated with exit(${status})`;
      this.status = status;
    }
    var callRuntimeCallbacks = (callbacks) => {
      while (callbacks.length > 0) {
        callbacks.shift()(Module);
      }
    };
    var dynCallLegacy = (sig, ptr, args) => {
      var f = Module["dynCall_" + sig];
      return args && args.length ? f.apply(null, [ptr].concat(args)) : f.call(null, ptr);
    };
    var wasmTable;
    var dynCall = (sig, ptr, args) => {
      var rtn = dynCallLegacy(sig, ptr, args);
      return rtn;
    };
    var noExitRuntime = Module["noExitRuntime"] || true;
    var UTF8ArrayToString = (heapOrArray, idx, maxBytesToRead) => {
      var endIdx = idx + maxBytesToRead;
      var str = "";
      while (!(idx >= endIdx)) {
        var u0 = heapOrArray[idx++];
        if (!u0) return str;
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
    };
    var UTF8ToString = (ptr, maxBytesToRead) => (ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "");
    var SYSCALLS = {
      varargs: undefined,
      get() {
        var ret = HEAP32[+SYSCALLS.varargs >> 2];
        SYSCALLS.varargs += 4;
        return ret;
      },
      getp() {
        return SYSCALLS.get();
      },
      getStr(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      }
    };
    function ___syscall_openat(dirfd, path, flags, varargs) {
      SYSCALLS.varargs = varargs;
    }
    var tupleRegistrations = {};
    var runDestructors = (destructors) => {
      while (destructors.length) {
        var ptr = destructors.pop();
        var del = destructors.pop();
        del(ptr);
      }
    };
    function simpleReadValueFromPointer(pointer) {
      return this["fromWireType"](HEAP32[pointer >> 2]);
    }
    var awaitingDependencies = {};
    var registeredTypes = {};
    var typeDependencies = {};
    var InternalError;
    var throwInternalError = (message) => {
      throw new InternalError(message);
    };
    var whenDependentTypesAreResolved = (myTypes, dependentTypes, getTypeConverters) => {
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
    };
    var __embind_finalize_value_array = (rawTupleType) => {
      var reg = tupleRegistrations[rawTupleType];
      delete tupleRegistrations[rawTupleType];
      var elements = reg.elements;
      var elementsLength = elements.length;
      var elementTypes = elements.map((elt) => elt.getterReturnType).concat(elements.map((elt) => elt.setterArgumentType));
      var rawConstructor = reg.rawConstructor;
      var rawDestructor = reg.rawDestructor;
      whenDependentTypesAreResolved([rawTupleType], elementTypes, function (elementTypes) {
        elements.forEach((elt, i) => {
          var getterReturnType = elementTypes[i];
          var getter = elt.getter;
          var getterContext = elt.getterContext;
          var setterArgumentType = elementTypes[i + elementsLength];
          var setter = elt.setter;
          var setterContext = elt.setterContext;
          elt.read = (ptr) => getterReturnType["fromWireType"](getter(getterContext, ptr));
          elt.write = (ptr, o) => {
            var destructors = [];
            setter(setterContext, ptr, setterArgumentType["toWireType"](destructors, o));
            runDestructors(destructors);
          };
        });
        return [
          {
            name: reg.name,
            fromWireType: (ptr) => {
              var rv = new Array(elementsLength);
              for (var i = 0; i < elementsLength; ++i) {
                rv[i] = elements[i].read(ptr);
              }
              rawDestructor(ptr);
              return rv;
            },
            toWireType: (destructors, o) => {
              if (elementsLength !== o.length) {
                throw new TypeError(`Incorrect number of tuple elements for ${reg.name}: expected=${elementsLength}, actual=${o.length}`);
              }
              var ptr = rawConstructor();
              for (var i = 0; i < elementsLength; ++i) {
                elements[i].write(ptr, o[i]);
              }
              if (destructors !== null) {
                destructors.push(rawDestructor, ptr);
              }
              return ptr;
            },
            argPackAdvance: GenericWireTypeSize,
            readValueFromPointer: simpleReadValueFromPointer,
            destructorFunction: rawDestructor
          }
        ];
      });
    };
    var structRegistrations = {};
    var __embind_finalize_value_object = (structType) => {
      var reg = structRegistrations[structType];
      delete structRegistrations[structType];
      var rawConstructor = reg.rawConstructor;
      var rawDestructor = reg.rawDestructor;
      var fieldRecords = reg.fields;
      var fieldTypes = fieldRecords.map((field) => field.getterReturnType).concat(fieldRecords.map((field) => field.setterArgumentType));
      whenDependentTypesAreResolved([structType], fieldTypes, (fieldTypes) => {
        var fields = {};
        fieldRecords.forEach((field, i) => {
          var fieldName = field.fieldName;
          var getterReturnType = fieldTypes[i];
          var getter = field.getter;
          var getterContext = field.getterContext;
          var setterArgumentType = fieldTypes[i + fieldRecords.length];
          var setter = field.setter;
          var setterContext = field.setterContext;
          fields[fieldName] = {
            read: (ptr) => getterReturnType["fromWireType"](getter(getterContext, ptr)),
            write: (ptr, o) => {
              var destructors = [];
              setter(setterContext, ptr, setterArgumentType["toWireType"](destructors, o));
              runDestructors(destructors);
            }
          };
        });
        return [
          {
            name: reg.name,
            fromWireType: (ptr) => {
              var rv = {};
              for (var i in fields) {
                rv[i] = fields[i].read(ptr);
              }
              rawDestructor(ptr);
              return rv;
            },
            toWireType: (destructors, o) => {
              for (var fieldName in fields) {
                if (!(fieldName in o)) {
                  throw new TypeError(`Missing field: "${fieldName}"`);
                }
              }
              var ptr = rawConstructor();
              for (fieldName in fields) {
                fields[fieldName].write(ptr, o[fieldName]);
              }
              if (destructors !== null) {
                destructors.push(rawDestructor, ptr);
              }
              return ptr;
            },
            argPackAdvance: GenericWireTypeSize,
            readValueFromPointer: simpleReadValueFromPointer,
            destructorFunction: rawDestructor
          }
        ];
      });
    };
    var __embind_register_bigint = (primitiveType, name, size, minRange, maxRange) => {};
    var embind_init_charCodes = () => {
      var codes = new Array(256);
      for (var i = 0; i < 256; ++i) {
        codes[i] = String.fromCharCode(i);
      }
      embind_charCodes = codes;
    };
    var embind_charCodes;
    var readLatin1String = (ptr) => {
      var ret = "";
      var c = ptr;
      while (HEAPU8[c]) {
        ret += embind_charCodes[HEAPU8[c++]];
      }
      return ret;
    };
    var BindingError;
    var throwBindingError = (message) => {
      throw new BindingError(message);
    };
    function sharedRegisterType(rawType, registeredInstance, options = {}) {
      var name = registeredInstance.name;
      if (!rawType) {
        throwBindingError(`type "${name}" must have a positive integer typeid pointer`);
      }
      if (registeredTypes.hasOwnProperty(rawType)) {
        if (options.ignoreDuplicateRegistrations) {
          return;
        } else {
          throwBindingError(`Cannot register type '${name}' twice`);
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
    function registerType(rawType, registeredInstance, options = {}) {
      if (!("argPackAdvance" in registeredInstance)) {
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      }
      return sharedRegisterType(rawType, registeredInstance, options);
    }
    var GenericWireTypeSize = 8;
    var __embind_register_bool = (rawType, name, trueValue, falseValue) => {
      name = readLatin1String(name);
      registerType(rawType, {
        name: name,
        fromWireType: function (wt) {
          return !!wt;
        },
        toWireType: function (destructors, o) {
          return o ? trueValue : falseValue;
        },
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: function (pointer) {
          return this["fromWireType"](HEAPU8[pointer]);
        },
        destructorFunction: null
      });
    };
    var shallowCopyInternalPointer = (o) => ({
      count: o.count,
      deleteScheduled: o.deleteScheduled,
      preservePointerOnDelete: o.preservePointerOnDelete,
      ptr: o.ptr,
      ptrType: o.ptrType,
      smartPtr: o.smartPtr,
      smartPtrType: o.smartPtrType
    });
    var throwInstanceAlreadyDeleted = (obj) => {
      function getInstanceTypeName(handle) {
        return handle.$$.ptrType.registeredClass.name;
      }
      throwBindingError(getInstanceTypeName(obj) + " instance already deleted");
    };
    var finalizationRegistry = false;
    var detachFinalizer = (handle) => {};
    var runDestructor = ($$) => {
      if ($$.smartPtr) {
        $$.smartPtrType.rawDestructor($$.smartPtr);
      } else {
        $$.ptrType.registeredClass.rawDestructor($$.ptr);
      }
    };
    var releaseClassHandle = ($$) => {
      $$.count.value -= 1;
      var toDelete = 0 === $$.count.value;
      if (toDelete) {
        runDestructor($$);
      }
    };
    var downcastPointer = (ptr, ptrClass, desiredClass) => {
      if (ptrClass === desiredClass) {
        return ptr;
      }
      if (undefined === desiredClass.baseClass) {
        return null;
      }
      var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);
      if (rv === null) {
        return null;
      }
      return desiredClass.downcast(rv);
    };
    var registeredPointers = {};
    var getInheritedInstanceCount = () => Object.keys(registeredInstances).length;
    var getLiveInheritedInstances = () => {
      var rv = [];
      for (var k in registeredInstances) {
        if (registeredInstances.hasOwnProperty(k)) {
          rv.push(registeredInstances[k]);
        }
      }
      return rv;
    };
    var deletionQueue = [];
    var flushPendingDeletes = () => {
      while (deletionQueue.length) {
        var obj = deletionQueue.pop();
        obj.$$.deleteScheduled = false;
        obj["delete"]();
      }
    };
    var delayFunction;
    var setDelayFunction = (fn) => {
      delayFunction = fn;
      if (deletionQueue.length && delayFunction) {
        delayFunction(flushPendingDeletes);
      }
    };
    var init_embind = () => {
      Module["getInheritedInstanceCount"] = getInheritedInstanceCount;
      Module["getLiveInheritedInstances"] = getLiveInheritedInstances;
      Module["flushPendingDeletes"] = flushPendingDeletes;
      Module["setDelayFunction"] = setDelayFunction;
    };
    var registeredInstances = {};
    var getBasestPointer = (class_, ptr) => {
      if (ptr === undefined) {
        throwBindingError("ptr should not be undefined");
      }
      while (class_.baseClass) {
        ptr = class_.upcast(ptr);
        class_ = class_.baseClass;
      }
      return ptr;
    };
    var getInheritedInstance = (class_, ptr) => {
      ptr = getBasestPointer(class_, ptr);
      return registeredInstances[ptr];
    };
    var makeClassHandle = (prototype, record) => {
      if (!record.ptrType || !record.ptr) {
        throwInternalError("makeClassHandle requires ptr and ptrType");
      }
      var hasSmartPtrType = !!record.smartPtrType;
      var hasSmartPtr = !!record.smartPtr;
      if (hasSmartPtrType !== hasSmartPtr) {
        throwInternalError("Both smartPtrType and smartPtr must be specified");
      }
      record.count = { value: 1 };
      return attachFinalizer(Object.create(prototype, { $$: { value: record } }));
    };
    function RegisteredPointer_fromWireType(ptr) {
      var rawPointer = this.getPointee(ptr);
      if (!rawPointer) {
        this.destructor(ptr);
        return null;
      }
      var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);
      if (undefined !== registeredInstance) {
        if (0 === registeredInstance.$$.count.value) {
          registeredInstance.$$.ptr = rawPointer;
          registeredInstance.$$.smartPtr = ptr;
          return registeredInstance["clone"]();
        } else {
          var rv = registeredInstance["clone"]();
          this.destructor(ptr);
          return rv;
        }
      }
      function makeDefaultHandle() {
        if (this.isSmartPointer) {
          return makeClassHandle(this.registeredClass.instancePrototype, {
            ptrType: this.pointeeType,
            ptr: rawPointer,
            smartPtrType: this,
            smartPtr: ptr
          });
        } else {
          return makeClassHandle(this.registeredClass.instancePrototype, { ptrType: this, ptr: ptr });
        }
      }
      var actualType = this.registeredClass.getActualType(rawPointer);
      var registeredPointerRecord = registeredPointers[actualType];
      if (!registeredPointerRecord) {
        return makeDefaultHandle.call(this);
      }
      var toType;
      if (this.isConst) {
        toType = registeredPointerRecord.constPointerType;
      } else {
        toType = registeredPointerRecord.pointerType;
      }
      var dp = downcastPointer(rawPointer, this.registeredClass, toType.registeredClass);
      if (dp === null) {
        return makeDefaultHandle.call(this);
      }
      if (this.isSmartPointer) {
        return makeClassHandle(toType.registeredClass.instancePrototype, { ptrType: toType, ptr: dp, smartPtrType: this, smartPtr: ptr });
      } else {
        return makeClassHandle(toType.registeredClass.instancePrototype, { ptrType: toType, ptr: dp });
      }
    }
    var attachFinalizer = (handle) => {
      if ("undefined" === typeof FinalizationRegistry) {
        attachFinalizer = (handle) => handle;
        return handle;
      }
      finalizationRegistry = new FinalizationRegistry((info) => {
        releaseClassHandle(info.$$);
      });
      attachFinalizer = (handle) => {
        var $$ = handle.$$;
        var hasSmartPtr = !!$$.smartPtr;
        if (hasSmartPtr) {
          var info = { $$: $$ };
          finalizationRegistry.register(handle, info, handle);
        }
        return handle;
      };
      detachFinalizer = (handle) => finalizationRegistry.unregister(handle);
      return attachFinalizer(handle);
    };
    var init_ClassHandle = () => {
      Object.assign(ClassHandle.prototype, {
        isAliasOf(other) {
          if (!(this instanceof ClassHandle)) {
            return false;
          }
          if (!(other instanceof ClassHandle)) {
            return false;
          }
          var leftClass = this.$$.ptrType.registeredClass;
          var left = this.$$.ptr;
          var rightClass = other.$$.ptrType.registeredClass;
          var right = other.$$.ptr;
          while (leftClass.baseClass) {
            left = leftClass.upcast(left);
            leftClass = leftClass.baseClass;
          }
          while (rightClass.baseClass) {
            right = rightClass.upcast(right);
            rightClass = rightClass.baseClass;
          }
          return leftClass === rightClass && left === right;
        },
        clone() {
          if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
          }
          if (this.$$.preservePointerOnDelete) {
            this.$$.count.value += 1;
            return this;
          } else {
            var clone = attachFinalizer(Object.create(Object.getPrototypeOf(this), { $$: { value: shallowCopyInternalPointer(this.$$) } }));
            clone.$$.count.value += 1;
            clone.$$.deleteScheduled = false;
            return clone;
          }
        },
        delete() {
          if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
          }
          if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
            throwBindingError("Object already scheduled for deletion");
          }
          detachFinalizer(this);
          releaseClassHandle(this.$$);
          if (!this.$$.preservePointerOnDelete) {
            this.$$.smartPtr = undefined;
            this.$$.ptr = undefined;
          }
        },
        isDeleted() {
          return !this.$$.ptr;
        },
        deleteLater() {
          if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
          }
          if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
            throwBindingError("Object already scheduled for deletion");
          }
          deletionQueue.push(this);
          if (deletionQueue.length === 1 && delayFunction) {
            delayFunction(flushPendingDeletes);
          }
          this.$$.deleteScheduled = true;
          return this;
        }
      });
    };
    function ClassHandle() {
      this.$$ = undefined;
    }
    var char_0 = 48;
    var char_9 = 57;
    var makeLegalFunctionName = (name) => {
      if (undefined === name) {
        return "_unknown";
      }
      name = name.replace(/[^a-zA-Z0-9_]/g, "$");
      var f = name.charCodeAt(0);
      if (f >= char_0 && f <= char_9) {
        return `_${name}`;
      }
      return name;
    };
    function createNamedFunction(name, body) {
      name = makeLegalFunctionName(name);
      return {
        [name]: function () {
          return body.apply(this, arguments);
        }
      }[name];
    }
    var ensureOverloadTable = (proto, methodName, humanName) => {
      if (undefined === proto[methodName].overloadTable) {
        var prevFunc = proto[methodName];
        proto[methodName] = function () {
          if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
            throwBindingError(
              `Function '${humanName}' called with an invalid number of arguments (${arguments.length}) - expects one of (${proto[methodName].overloadTable})!`
            );
          }
          return proto[methodName].overloadTable[arguments.length].apply(this, arguments);
        };
        proto[methodName].overloadTable = [];
        proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
      }
    };
    var exposePublicSymbol = (name, value, numArguments) => {
      if (Module.hasOwnProperty(name)) {
        if (
          undefined === numArguments ||
          (undefined !== Module[name].overloadTable && undefined !== Module[name].overloadTable[numArguments])
        ) {
          throwBindingError(`Cannot register public name '${name}' twice`);
        }
        ensureOverloadTable(Module, name, name);
        if (Module.hasOwnProperty(numArguments)) {
          throwBindingError(`Cannot register multiple overloads of a function with the same number of arguments (${numArguments})!`);
        }
        Module[name].overloadTable[numArguments] = value;
      } else {
        Module[name] = value;
        if (undefined !== numArguments) {
          Module[name].numArguments = numArguments;
        }
      }
    };
    function RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast) {
      this.name = name;
      this.constructor = constructor;
      this.instancePrototype = instancePrototype;
      this.rawDestructor = rawDestructor;
      this.baseClass = baseClass;
      this.getActualType = getActualType;
      this.upcast = upcast;
      this.downcast = downcast;
      this.pureVirtualFunctions = [];
    }
    var upcastPointer = (ptr, ptrClass, desiredClass) => {
      while (ptrClass !== desiredClass) {
        if (!ptrClass.upcast) {
          throwBindingError(`Expected null or instance of ${desiredClass.name}, got an instance of ${ptrClass.name}`);
        }
        ptr = ptrClass.upcast(ptr);
        ptrClass = ptrClass.baseClass;
      }
      return ptr;
    };
    function constNoSmartPtrRawPointerToWireType(destructors, handle) {
      if (handle === null) {
        if (this.isReference) {
          throwBindingError(`null is not a valid ${this.name}`);
        }
        return 0;
      }
      if (!handle.$$) {
        throwBindingError(`Cannot pass "${embindRepr(handle)}" as a ${this.name}`);
      }
      if (!handle.$$.ptr) {
        throwBindingError(`Cannot pass deleted object as a pointer of type ${this.name}`);
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      return ptr;
    }
    function genericPointerToWireType(destructors, handle) {
      var ptr;
      if (handle === null) {
        if (this.isReference) {
          throwBindingError(`null is not a valid ${this.name}`);
        }
        if (this.isSmartPointer) {
          ptr = this.rawConstructor();
          if (destructors !== null) {
            destructors.push(this.rawDestructor, ptr);
          }
          return ptr;
        } else {
          return 0;
        }
      }
      if (!handle.$$) {
        throwBindingError(`Cannot pass "${embindRepr(handle)}" as a ${this.name}`);
      }
      if (!handle.$$.ptr) {
        throwBindingError(`Cannot pass deleted object as a pointer of type ${this.name}`);
      }
      if (!this.isConst && handle.$$.ptrType.isConst) {
        throwBindingError(
          `Cannot convert argument of type ${
            handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name
          } to parameter type ${this.name}`
        );
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      if (this.isSmartPointer) {
        if (undefined === handle.$$.smartPtr) {
          throwBindingError("Passing raw pointer to smart pointer is illegal");
        }
        switch (this.sharingPolicy) {
          case 0:
            if (handle.$$.smartPtrType === this) {
              ptr = handle.$$.smartPtr;
            } else {
              throwBindingError(
                `Cannot convert argument of type ${
                  handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name
                } to parameter type ${this.name}`
              );
            }
            break;
          case 1:
            ptr = handle.$$.smartPtr;
            break;
          case 2:
            if (handle.$$.smartPtrType === this) {
              ptr = handle.$$.smartPtr;
            } else {
              var clonedHandle = handle["clone"]();
              ptr = this.rawShare(
                ptr,
                Emval.toHandle(() => clonedHandle["delete"]())
              );
              if (destructors !== null) {
                destructors.push(this.rawDestructor, ptr);
              }
            }
            break;
          default:
            throwBindingError("Unsupporting sharing policy");
        }
      }
      return ptr;
    }
    function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
      if (handle === null) {
        if (this.isReference) {
          throwBindingError(`null is not a valid ${this.name}`);
        }
        return 0;
      }
      if (!handle.$$) {
        throwBindingError(`Cannot pass "${embindRepr(handle)}" as a ${this.name}`);
      }
      if (!handle.$$.ptr) {
        throwBindingError(`Cannot pass deleted object as a pointer of type ${this.name}`);
      }
      if (handle.$$.ptrType.isConst) {
        throwBindingError(`Cannot convert argument of type ${handle.$$.ptrType.name} to parameter type ${this.name}`);
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      return ptr;
    }
    function readPointer(pointer) {
      return this["fromWireType"](HEAPU32[pointer >> 2]);
    }
    var init_RegisteredPointer = () => {
      Object.assign(RegisteredPointer.prototype, {
        getPointee(ptr) {
          if (this.rawGetPointee) {
            ptr = this.rawGetPointee(ptr);
          }
          return ptr;
        },
        destructor(ptr) {
          if (this.rawDestructor) {
            this.rawDestructor(ptr);
          }
        },
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: readPointer,
        deleteObject(handle) {
          if (handle !== null) {
            handle["delete"]();
          }
        },
        fromWireType: RegisteredPointer_fromWireType
      });
    };
    function RegisteredPointer(
      name,
      registeredClass,
      isReference,
      isConst,
      isSmartPointer,
      pointeeType,
      sharingPolicy,
      rawGetPointee,
      rawConstructor,
      rawShare,
      rawDestructor
    ) {
      this.name = name;
      this.registeredClass = registeredClass;
      this.isReference = isReference;
      this.isConst = isConst;
      this.isSmartPointer = isSmartPointer;
      this.pointeeType = pointeeType;
      this.sharingPolicy = sharingPolicy;
      this.rawGetPointee = rawGetPointee;
      this.rawConstructor = rawConstructor;
      this.rawShare = rawShare;
      this.rawDestructor = rawDestructor;
      if (!isSmartPointer && registeredClass.baseClass === undefined) {
        if (isConst) {
          this["toWireType"] = constNoSmartPtrRawPointerToWireType;
          this.destructorFunction = null;
        } else {
          this["toWireType"] = nonConstNoSmartPtrRawPointerToWireType;
          this.destructorFunction = null;
        }
      } else {
        this["toWireType"] = genericPointerToWireType;
      }
    }
    var replacePublicSymbol = (name, value, numArguments) => {
      if (!Module.hasOwnProperty(name)) {
        throwInternalError("Replacing nonexistant public symbol");
      }
      if (undefined !== Module[name].overloadTable && undefined !== numArguments) {
        Module[name].overloadTable[numArguments] = value;
      } else {
        Module[name] = value;
        Module[name].argCount = numArguments;
      }
    };
    var getDynCaller = (sig, ptr) => {
      var argCache = [];
      return function () {
        argCache.length = 0;
        Object.assign(argCache, arguments);
        return dynCall(sig, ptr, argCache);
      };
    };
    var embind__requireFunction = (signature, rawFunction) => {
      signature = readLatin1String(signature);
      function makeDynCaller() {
        return getDynCaller(signature, rawFunction);
      }
      var fp = makeDynCaller();
      if (typeof fp != "function") {
        throwBindingError(`unknown function pointer with signature ${signature}: ${rawFunction}`);
      }
      return fp;
    };
    var extendError = (baseErrorType, errorName) => {
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
          return `${this.name}: ${this.message}`;
        }
      };
      return errorClass;
    };
    var UnboundTypeError;
    var getTypeName = (type) => {
      var ptr = ___getTypeName(type);
      var rv = readLatin1String(ptr);
      _free(ptr);
      return rv;
    };
    var throwUnboundTypeError = (message, types) => {
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
      throw new UnboundTypeError(`${message}: ` + unboundTypes.map(getTypeName).join([", "]));
    };
    var __embind_register_class = (
      rawType,
      rawPointerType,
      rawConstPointerType,
      baseClassRawType,
      getActualTypeSignature,
      getActualType,
      upcastSignature,
      upcast,
      downcastSignature,
      downcast,
      name,
      destructorSignature,
      rawDestructor
    ) => {
      name = readLatin1String(name);
      getActualType = embind__requireFunction(getActualTypeSignature, getActualType);
      if (upcast) {
        upcast = embind__requireFunction(upcastSignature, upcast);
      }
      if (downcast) {
        downcast = embind__requireFunction(downcastSignature, downcast);
      }
      rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
      var legalFunctionName = makeLegalFunctionName(name);
      exposePublicSymbol(legalFunctionName, function () {
        throwUnboundTypeError(`Cannot construct ${name} due to unbound types`, [baseClassRawType]);
      });
      whenDependentTypesAreResolved(
        [rawType, rawPointerType, rawConstPointerType],
        baseClassRawType ? [baseClassRawType] : [],
        function (base) {
          base = base[0];
          var baseClass;
          var basePrototype;
          if (baseClassRawType) {
            baseClass = base.registeredClass;
            basePrototype = baseClass.instancePrototype;
          } else {
            basePrototype = ClassHandle.prototype;
          }
          var constructor = createNamedFunction(legalFunctionName, function () {
            if (Object.getPrototypeOf(this) !== instancePrototype) {
              throw new BindingError("Use 'new' to construct " + name);
            }
            if (undefined === registeredClass.constructor_body) {
              throw new BindingError(name + " has no accessible constructor");
            }
            var body = registeredClass.constructor_body[arguments.length];
            if (undefined === body) {
              throw new BindingError(
                `Tried to invoke ctor of ${name} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(
                  registeredClass.constructor_body
                ).toString()}) parameters instead!`
              );
            }
            return body.apply(this, arguments);
          });
          var instancePrototype = Object.create(basePrototype, { constructor: { value: constructor } });
          constructor.prototype = instancePrototype;
          var registeredClass = new RegisteredClass(
            name,
            constructor,
            instancePrototype,
            rawDestructor,
            baseClass,
            getActualType,
            upcast,
            downcast
          );
          if (registeredClass.baseClass) {
            if (registeredClass.baseClass.__derivedClasses === undefined) {
              registeredClass.baseClass.__derivedClasses = [];
            }
            registeredClass.baseClass.__derivedClasses.push(registeredClass);
          }
          var referenceConverter = new RegisteredPointer(name, registeredClass, true, false, false);
          var pointerConverter = new RegisteredPointer(name + "*", registeredClass, false, false, false);
          var constPointerConverter = new RegisteredPointer(name + " const*", registeredClass, false, true, false);
          registeredPointers[rawType] = { pointerType: pointerConverter, constPointerType: constPointerConverter };
          replacePublicSymbol(legalFunctionName, constructor);
          return [referenceConverter, pointerConverter, constPointerConverter];
        }
      );
    };
    var heap32VectorToArray = (count, firstElement) => {
      var array = [];
      for (var i = 0; i < count; i++) {
        array.push(HEAPU32[(firstElement + i * 4) >> 2]);
      }
      return array;
    };
    function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc, isAsync) {
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
          throwBindingError(`function ${humanName} called with ${arguments.length} arguments, expected ${expectedArgCount}`);
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
    var __embind_register_class_constructor = (rawClassType, argCount, rawArgTypesAddr, invokerSignature, invoker, rawConstructor) => {
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      invoker = embind__requireFunction(invokerSignature, invoker);
      whenDependentTypesAreResolved([], [rawClassType], function (classType) {
        classType = classType[0];
        var humanName = `constructor ${classType.name}`;
        if (undefined === classType.registeredClass.constructor_body) {
          classType.registeredClass.constructor_body = [];
        }
        if (undefined !== classType.registeredClass.constructor_body[argCount - 1]) {
          throw new BindingError(
            `Cannot register multiple constructors with identical number of parameters (${argCount - 1}) for class '${
              classType.name
            }'! Overload resolution is currently only performed using the parameter count, not actual type info!`
          );
        }
        classType.registeredClass.constructor_body[argCount - 1] = () => {
          throwUnboundTypeError(`Cannot construct ${classType.name} due to unbound types`, rawArgTypes);
        };
        whenDependentTypesAreResolved([], rawArgTypes, (argTypes) => {
          argTypes.splice(1, 0, null);
          classType.registeredClass.constructor_body[argCount - 1] = craftInvokerFunction(
            humanName,
            argTypes,
            null,
            invoker,
            rawConstructor
          );
          return [];
        });
        return [];
      });
    };
    var getFunctionName = (signature) => {
      signature = signature.trim();
      const argsIndex = signature.indexOf("(");
      if (argsIndex !== -1) {
        return signature.substr(0, argsIndex);
      } else {
        return signature;
      }
    };
    var __embind_register_class_function = (
      rawClassType,
      methodName,
      argCount,
      rawArgTypesAddr,
      invokerSignature,
      rawInvoker,
      context,
      isPureVirtual,
      isAsync
    ) => {
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      methodName = readLatin1String(methodName);
      methodName = getFunctionName(methodName);
      rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
      whenDependentTypesAreResolved([], [rawClassType], function (classType) {
        classType = classType[0];
        var humanName = `${classType.name}.${methodName}`;
        if (methodName.startsWith("@@")) {
          methodName = Symbol[methodName.substring(2)];
        }
        if (isPureVirtual) {
          classType.registeredClass.pureVirtualFunctions.push(methodName);
        }
        function unboundTypesHandler() {
          throwUnboundTypeError(`Cannot call ${humanName} due to unbound types`, rawArgTypes);
        }
        var proto = classType.registeredClass.instancePrototype;
        var method = proto[methodName];
        if (
          undefined === method ||
          (undefined === method.overloadTable && method.className !== classType.name && method.argCount === argCount - 2)
        ) {
          unboundTypesHandler.argCount = argCount - 2;
          unboundTypesHandler.className = classType.name;
          proto[methodName] = unboundTypesHandler;
        } else {
          ensureOverloadTable(proto, methodName, humanName);
          proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
        }
        whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
          var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context, isAsync);
          if (undefined === proto[methodName].overloadTable) {
            memberFunction.argCount = argCount - 2;
            proto[methodName] = memberFunction;
          } else {
            proto[methodName].overloadTable[argCount - 2] = memberFunction;
          }
          return [];
        });
        return [];
      });
    };
    var validateThis = (this_, classType, humanName) => {
      if (!(this_ instanceof Object)) {
        throwBindingError(`${humanName} with invalid "this": ${this_}`);
      }
      if (!(this_ instanceof classType.registeredClass.constructor)) {
        throwBindingError(`${humanName} incompatible with "this" of type ${this_.constructor.name}`);
      }
      if (!this_.$$.ptr) {
        throwBindingError(`cannot call emscripten binding method ${humanName} on deleted object`);
      }
      return upcastPointer(this_.$$.ptr, this_.$$.ptrType.registeredClass, classType.registeredClass);
    };
    var __embind_register_class_property = (
      classType,
      fieldName,
      getterReturnType,
      getterSignature,
      getter,
      getterContext,
      setterArgumentType,
      setterSignature,
      setter,
      setterContext
    ) => {
      fieldName = readLatin1String(fieldName);
      getter = embind__requireFunction(getterSignature, getter);
      whenDependentTypesAreResolved([], [classType], function (classType) {
        classType = classType[0];
        var humanName = `${classType.name}.${fieldName}`;
        var desc = {
          get() {
            throwUnboundTypeError(`Cannot access ${humanName} due to unbound types`, [getterReturnType, setterArgumentType]);
          },
          enumerable: true,
          configurable: true
        };
        if (setter) {
          desc.set = () => throwUnboundTypeError(`Cannot access ${humanName} due to unbound types`, [getterReturnType, setterArgumentType]);
        } else {
          desc.set = (v) => throwBindingError(humanName + " is a read-only property");
        }
        Object.defineProperty(classType.registeredClass.instancePrototype, fieldName, desc);
        whenDependentTypesAreResolved([], setter ? [getterReturnType, setterArgumentType] : [getterReturnType], function (types) {
          var getterReturnType = types[0];
          var desc = {
            get() {
              var ptr = validateThis(this, classType, humanName + " getter");
              return getterReturnType["fromWireType"](getter(getterContext, ptr));
            },
            enumerable: true
          };
          if (setter) {
            setter = embind__requireFunction(setterSignature, setter);
            var setterArgumentType = types[1];
            desc.set = function (v) {
              var ptr = validateThis(this, classType, humanName + " setter");
              var destructors = [];
              setter(setterContext, ptr, setterArgumentType["toWireType"](destructors, v));
              runDestructors(destructors);
            };
          }
          Object.defineProperty(classType.registeredClass.instancePrototype, fieldName, desc);
          return [];
        });
        return [];
      });
    };
    function handleAllocatorInit() {
      Object.assign(HandleAllocator.prototype, {
        get(id) {
          return this.allocated[id];
        },
        has(id) {
          return this.allocated[id] !== undefined;
        },
        allocate(handle) {
          var id = this.freelist.pop() || this.allocated.length;
          this.allocated[id] = handle;
          return id;
        },
        free(id) {
          this.allocated[id] = undefined;
          this.freelist.push(id);
        }
      });
    }
    function HandleAllocator() {
      this.allocated = [undefined];
      this.freelist = [];
    }
    var emval_handles = new HandleAllocator();
    var __emval_decref = (handle) => {
      if (handle >= emval_handles.reserved && 0 === --emval_handles.get(handle).refcount) {
        emval_handles.free(handle);
      }
    };
    var count_emval_handles = () => {
      var count = 0;
      for (var i = emval_handles.reserved; i < emval_handles.allocated.length; ++i) {
        if (emval_handles.allocated[i] !== undefined) {
          ++count;
        }
      }
      return count;
    };
    var init_emval = () => {
      emval_handles.allocated.push({ value: undefined }, { value: null }, { value: true }, { value: false });
      emval_handles.reserved = emval_handles.allocated.length;
      Module["count_emval_handles"] = count_emval_handles;
    };
    var Emval = {
      toValue: (handle) => {
        if (!handle) {
          throwBindingError("Cannot use deleted val. handle = " + handle);
        }
        return emval_handles.get(handle).value;
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
            return emval_handles.allocate({ refcount: 1, value: value });
          }
        }
      }
    };
    var __embind_register_emval = (rawType, name) => {
      name = readLatin1String(name);
      registerType(rawType, {
        name: name,
        fromWireType: (handle) => {
          var rv = Emval.toValue(handle);
          __emval_decref(handle);
          return rv;
        },
        toWireType: (destructors, value) => Emval.toHandle(value),
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: simpleReadValueFromPointer,
        destructorFunction: null
      });
    };
    var enumReadValueFromPointer = (name, width, signed) => {
      switch (width) {
        case 1:
          return signed
            ? function (pointer) {
                return this["fromWireType"](HEAP8[pointer >> 0]);
              }
            : function (pointer) {
                return this["fromWireType"](HEAPU8[pointer >> 0]);
              };
        case 2:
          return signed
            ? function (pointer) {
                return this["fromWireType"](HEAP16[pointer >> 1]);
              }
            : function (pointer) {
                return this["fromWireType"](HEAPU16[pointer >> 1]);
              };
        case 4:
          return signed
            ? function (pointer) {
                return this["fromWireType"](HEAP32[pointer >> 2]);
              }
            : function (pointer) {
                return this["fromWireType"](HEAPU32[pointer >> 2]);
              };
        default:
          throw new TypeError(`invalid integer width (${width}): ${name}`);
      }
    };
    var __embind_register_enum = (rawType, name, size, isSigned) => {
      name = readLatin1String(name);
      function ctor() {}
      ctor.values = {};
      registerType(rawType, {
        name: name,
        constructor: ctor,
        fromWireType: function (c) {
          return this.constructor.values[c];
        },
        toWireType: (destructors, c) => c.value,
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: enumReadValueFromPointer(name, size, isSigned),
        destructorFunction: null
      });
      exposePublicSymbol(name, ctor);
    };
    var requireRegisteredType = (rawType, humanName) => {
      var impl = registeredTypes[rawType];
      if (undefined === impl) {
        throwBindingError(humanName + " has unknown type " + getTypeName(rawType));
      }
      return impl;
    };
    var __embind_register_enum_value = (rawEnumType, name, enumValue) => {
      var enumType = requireRegisteredType(rawEnumType, "enum");
      name = readLatin1String(name);
      var Enum = enumType.constructor;
      var Value = Object.create(enumType.constructor.prototype, {
        value: { value: enumValue },
        constructor: { value: createNamedFunction(`${enumType.name}_${name}`, function () {}) }
      });
      Enum.values[enumValue] = Value;
      Enum[name] = Value;
    };
    var embindRepr = (v) => {
      if (v === null) {
        return "null";
      }
      var t = typeof v;
      if (t === "object" || t === "array" || t === "function") {
        return v.toString();
      } else {
        return "" + v;
      }
    };
    var floatReadValueFromPointer = (name, width) => {
      switch (width) {
        case 4:
          return function (pointer) {
            return this["fromWireType"](HEAPF32[pointer >> 2]);
          };
        case 8:
          return function (pointer) {
            return this["fromWireType"](HEAPF64[pointer >> 3]);
          };
        default:
          throw new TypeError(`invalid float width (${width}): ${name}`);
      }
    };
    var __embind_register_float = (rawType, name, size) => {
      name = readLatin1String(name);
      registerType(rawType, {
        name: name,
        fromWireType: (value) => value,
        toWireType: (destructors, value) => value,
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: floatReadValueFromPointer(name, size),
        destructorFunction: null
      });
    };
    var __embind_register_function = (name, argCount, rawArgTypesAddr, signature, rawInvoker, fn, isAsync) => {
      var argTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      name = readLatin1String(name);
      name = getFunctionName(name);
      rawInvoker = embind__requireFunction(signature, rawInvoker);
      exposePublicSymbol(
        name,
        function () {
          throwUnboundTypeError(`Cannot call ${name} due to unbound types`, argTypes);
        },
        argCount - 1
      );
      whenDependentTypesAreResolved([], argTypes, function (argTypes) {
        var invokerArgsArray = [argTypes[0], null].concat(argTypes.slice(1));
        replacePublicSymbol(name, craftInvokerFunction(name, invokerArgsArray, null, rawInvoker, fn, isAsync), argCount - 1);
        return [];
      });
    };
    var integerReadValueFromPointer = (name, width, signed) => {
      switch (width) {
        case 1:
          return signed ? (pointer) => HEAP8[pointer >> 0] : (pointer) => HEAPU8[pointer >> 0];
        case 2:
          return signed ? (pointer) => HEAP16[pointer >> 1] : (pointer) => HEAPU16[pointer >> 1];
        case 4:
          return signed ? (pointer) => HEAP32[pointer >> 2] : (pointer) => HEAPU32[pointer >> 2];
        default:
          throw new TypeError(`invalid integer width (${width}): ${name}`);
      }
    };
    var __embind_register_integer = (primitiveType, name, size, minRange, maxRange) => {
      name = readLatin1String(name);
      if (maxRange === -1) {
        maxRange = 4294967295;
      }
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
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: integerReadValueFromPointer(name, size, minRange !== 0),
        destructorFunction: null
      });
    };
    var __embind_register_memory_view = (rawType, dataTypeIndex, name) => {
      var typeMapping = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
      var TA = typeMapping[dataTypeIndex];
      function decodeMemoryView(handle) {
        var size = HEAPU32[handle >> 2];
        var data = HEAPU32[(handle + 4) >> 2];
        return new TA(HEAP8.buffer, data, size);
      }
      name = readLatin1String(name);
      registerType(
        rawType,
        { name: name, fromWireType: decodeMemoryView, argPackAdvance: GenericWireTypeSize, readValueFromPointer: decodeMemoryView },
        { ignoreDuplicateRegistrations: true }
      );
    };
    var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
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
    };
    var stringToUTF8 = (str, outPtr, maxBytesToWrite) => stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    var lengthBytesUTF8 = (str) => {
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
    };
    var __embind_register_std_string = (rawType, name) => {
      name = readLatin1String(name);
      var stdStringIsUTF8 = name === "std::string";
      registerType(rawType, {
        name: name,
        fromWireType(value) {
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
        toWireType(destructors, value) {
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
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: readPointer,
        destructorFunction(ptr) {
          _free(ptr);
        }
      });
    };
    var UTF16ToString = (ptr, maxBytesToRead) => {
      var str = "";
      for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
        var codeUnit = HEAP16[(ptr + i * 2) >> 1];
        if (codeUnit == 0) break;
        str += String.fromCharCode(codeUnit);
      }
      return str;
    };
    var stringToUTF16 = (str, outPtr, maxBytesToWrite) => {
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
    };
    var lengthBytesUTF16 = (str) => str.length * 2;
    var UTF32ToString = (ptr, maxBytesToRead) => {
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
    };
    var stringToUTF32 = (str, outPtr, maxBytesToWrite) => {
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
    };
    var lengthBytesUTF32 = (str) => {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        var codeUnit = str.charCodeAt(i);
        if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
        len += 4;
      }
      return len;
    };
    var __embind_register_std_wstring = (rawType, charSize, name) => {
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
        fromWireType: (value) => {
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
        toWireType: (destructors, value) => {
          if (!(typeof value == "string")) {
            throwBindingError(`Cannot pass non-string to C++ string type ${name}`);
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
        argPackAdvance: GenericWireTypeSize,
        readValueFromPointer: simpleReadValueFromPointer,
        destructorFunction(ptr) {
          _free(ptr);
        }
      });
    };
    var __embind_register_value_array = (rawType, name, constructorSignature, rawConstructor, destructorSignature, rawDestructor) => {
      tupleRegistrations[rawType] = {
        name: readLatin1String(name),
        rawConstructor: embind__requireFunction(constructorSignature, rawConstructor),
        rawDestructor: embind__requireFunction(destructorSignature, rawDestructor),
        elements: []
      };
    };
    var __embind_register_value_array_element = (
      rawTupleType,
      getterReturnType,
      getterSignature,
      getter,
      getterContext,
      setterArgumentType,
      setterSignature,
      setter,
      setterContext
    ) => {
      tupleRegistrations[rawTupleType].elements.push({
        getterReturnType: getterReturnType,
        getter: embind__requireFunction(getterSignature, getter),
        getterContext: getterContext,
        setterArgumentType: setterArgumentType,
        setter: embind__requireFunction(setterSignature, setter),
        setterContext: setterContext
      });
    };
    var __embind_register_value_object = (rawType, name, constructorSignature, rawConstructor, destructorSignature, rawDestructor) => {
      structRegistrations[rawType] = {
        name: readLatin1String(name),
        rawConstructor: embind__requireFunction(constructorSignature, rawConstructor),
        rawDestructor: embind__requireFunction(destructorSignature, rawDestructor),
        fields: []
      };
    };
    var __embind_register_value_object_field = (
      structType,
      fieldName,
      getterReturnType,
      getterSignature,
      getter,
      getterContext,
      setterArgumentType,
      setterSignature,
      setter,
      setterContext
    ) => {
      structRegistrations[structType].fields.push({
        fieldName: readLatin1String(fieldName),
        getterReturnType: getterReturnType,
        getter: embind__requireFunction(getterSignature, getter),
        getterContext: getterContext,
        setterArgumentType: setterArgumentType,
        setter: embind__requireFunction(setterSignature, setter),
        setterContext: setterContext
      });
    };
    var __embind_register_void = (rawType, name) => {
      name = readLatin1String(name);
      registerType(rawType, {
        isVoid: true,
        name: name,
        argPackAdvance: 0,
        fromWireType: () => undefined,
        toWireType: (destructors, o) => undefined
      });
    };
    var nowIsMonotonic = true;
    var __emscripten_get_now_is_monotonic = () => nowIsMonotonic;
    var __emscripten_throw_longjmp = () => {
      throw Infinity;
    };
    var __emval_as = (handle, returnType, destructorsRef) => {
      handle = Emval.toValue(handle);
      returnType = requireRegisteredType(returnType, "emval::as");
      var destructors = [];
      var rd = Emval.toHandle(destructors);
      HEAPU32[destructorsRef >> 2] = rd;
      return returnType["toWireType"](destructors, handle);
    };
    var emval_lookupTypes = (argCount, argTypes) => {
      var a = new Array(argCount);
      for (var i = 0; i < argCount; ++i) {
        a[i] = requireRegisteredType(HEAPU32[(argTypes + i * 4) >> 2], "parameter " + i);
      }
      return a;
    };
    var __emval_call = (handle, argCount, argTypes, argv) => {
      handle = Emval.toValue(handle);
      var types = emval_lookupTypes(argCount, argTypes);
      var args = new Array(argCount);
      for (var i = 0; i < argCount; ++i) {
        var type = types[i];
        args[i] = type["readValueFromPointer"](argv);
        argv += type["argPackAdvance"];
      }
      var rv = handle.apply(undefined, args);
      return Emval.toHandle(rv);
    };
    var emval_symbols = {};
    var getStringOrSymbol = (address) => {
      var symbol = emval_symbols[address];
      if (symbol === undefined) {
        return readLatin1String(address);
      }
      return symbol;
    };
    var emval_methodCallers = [];
    var __emval_call_method = (caller, handle, methodName, destructorsRef, args) => {
      caller = emval_methodCallers[caller];
      handle = Emval.toValue(handle);
      methodName = getStringOrSymbol(methodName);
      var destructors = [];
      var result = caller(handle, methodName, destructors, args);
      if (destructors.length) {
        HEAPU32[destructorsRef >> 2] = Emval.toHandle(destructors);
      }
      return result;
    };
    var emval_get_global = () => {
      if (typeof globalThis == "object") {
        return globalThis;
      }
      function testGlobal(obj) {
        obj["$$$embind_global$$$"] = obj;
        var success = typeof $$$embind_global$$$ == "object" && obj["$$$embind_global$$$"] == obj;
        if (!success) {
          delete obj["$$$embind_global$$$"];
        }
        return success;
      }
      if (typeof $$$embind_global$$$ == "object") {
        return $$$embind_global$$$;
      }
      if (typeof global == "object" && testGlobal(global)) {
        $$$embind_global$$$ = global;
      } else if (typeof self == "object" && testGlobal(self)) {
        $$$embind_global$$$ = self;
      }
      if (typeof $$$embind_global$$$ == "object") {
        return $$$embind_global$$$;
      }
      throw Error("unable to get global object.");
    };
    var __emval_get_global = (name) => {
      if (name === 0) {
        return Emval.toHandle(emval_get_global());
      } else {
        name = getStringOrSymbol(name);
        return Emval.toHandle(emval_get_global()[name]);
      }
    };
    var emval_addMethodCaller = (caller) => {
      var id = emval_methodCallers.length;
      emval_methodCallers.push(caller);
      return id;
    };
    var __emval_get_method_caller = (argCount, argTypes) => {
      var types = emval_lookupTypes(argCount, argTypes);
      var retType = types.shift();
      argCount--;
      var argN = new Array(argCount);
      var invokerFunction = (handle, name, destructors, args) => {
        var offset = 0;
        for (var i = 0; i < argCount; ++i) {
          argN[i] = types[i]["readValueFromPointer"](args + offset);
          offset += types[i]["argPackAdvance"];
        }
        var rv = handle[name].apply(handle, argN);
        for (var i = 0; i < argCount; ++i) {
          if (types[i].deleteObject) {
            types[i].deleteObject(argN[i]);
          }
        }
        return retType["toWireType"](destructors, rv);
      };
      return emval_addMethodCaller(invokerFunction);
    };
    var __emval_get_property = (handle, key) => {
      handle = Emval.toValue(handle);
      key = Emval.toValue(key);
      return Emval.toHandle(handle[key]);
    };
    var __emval_incref = (handle) => {
      if (handle > 4) {
        emval_handles.get(handle).refcount += 1;
      }
    };
    var __emval_instanceof = (object, constructor) => {
      object = Emval.toValue(object);
      constructor = Emval.toValue(constructor);
      return object instanceof constructor;
    };
    var craftEmvalAllocator = (argCount) => {
      var argsList = new Array(argCount + 1);
      return function (constructor, argTypes, args) {
        argsList[0] = constructor;
        for (var i = 0; i < argCount; ++i) {
          var argType = requireRegisteredType(HEAPU32[(argTypes + i * 4) >> 2], "parameter " + i);
          argsList[i + 1] = argType["readValueFromPointer"](args);
          args += argType["argPackAdvance"];
        }
        var obj = new (constructor.bind.apply(constructor, argsList))();
        return Emval.toHandle(obj);
      };
    };
    var emval_newers = {};
    var __emval_new = (handle, argCount, argTypes, args) => {
      handle = Emval.toValue(handle);
      var newer = emval_newers[argCount];
      if (!newer) {
        newer = craftEmvalAllocator(argCount);
        emval_newers[argCount] = newer;
      }
      return newer(handle, argTypes, args);
    };
    var __emval_new_cstring = (v) => Emval.toHandle(getStringOrSymbol(v));
    var __emval_run_destructors = (handle) => {
      var destructors = Emval.toValue(handle);
      runDestructors(destructors);
      __emval_decref(handle);
    };
    var __emval_take_value = (type, arg) => {
      type = requireRegisteredType(type, "_emval_take_value");
      var v = type["readValueFromPointer"](arg);
      return Emval.toHandle(v);
    };
    var convertI32PairToI53Checked = (lo, hi) => ((hi + 2097152) >>> 0 < 4194305 - !!lo ? (lo >>> 0) + hi * 4294967296 : NaN);
    function __munmap_js(addr, len, prot, flags, fd, offset_low, offset_high) {
      var offset = convertI32PairToI53Checked(offset_low, offset_high);
    }
    var _abort = () => {
      abort("");
    };
    var _emscripten_set_main_loop_timing = (mode, value) => {
      Browser.mainLoop.timingMode = mode;
      Browser.mainLoop.timingValue = value;
      if (!Browser.mainLoop.func) {
        return 1;
      }
      if (!Browser.mainLoop.running) {
        Browser.mainLoop.running = true;
      }
      if (mode == 0) {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setTimeout() {
          var timeUntilNextTick = Math.max(0, Browser.mainLoop.tickStartTime + value - _emscripten_get_now()) | 0;
          setTimeout(Browser.mainLoop.runner, timeUntilNextTick);
        };
        Browser.mainLoop.method = "timeout";
      } else if (mode == 1) {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_rAF() {
          Browser.requestAnimationFrame(Browser.mainLoop.runner);
        };
        Browser.mainLoop.method = "rAF";
      } else if (mode == 2) {
        if (typeof setImmediate == "undefined") {
          var setImmediates = [];
          var emscriptenMainLoopMessageId = "setimmediate";
          var Browser_setImmediate_messageHandler = (event) => {
            if (event.data === emscriptenMainLoopMessageId || event.data.target === emscriptenMainLoopMessageId) {
              event.stopPropagation();
              setImmediates.shift()();
            }
          };
          addEventListener("message", Browser_setImmediate_messageHandler, true);
          setImmediate = function Browser_emulated_setImmediate(func) {
            setImmediates.push(func);
            if (ENVIRONMENT_IS_WORKER) {
              if (Module["setImmediates"] === undefined) Module["setImmediates"] = [];
              Module["setImmediates"].push(func);
              postMessage({ target: emscriptenMainLoopMessageId });
            } else postMessage(emscriptenMainLoopMessageId, "*");
          };
        }
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setImmediate() {
          setImmediate(Browser.mainLoop.runner);
        };
        Browser.mainLoop.method = "immediate";
      }
      return 0;
    };
    var _emscripten_get_now;
    _emscripten_get_now = () => performance.now();
    var setMainLoop = (browserIterationFunc, fps, simulateInfiniteLoop, arg, noSetTiming) => {
      assert(
        !Browser.mainLoop.func,
        "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."
      );
      Browser.mainLoop.func = browserIterationFunc;
      Browser.mainLoop.arg = arg;
      var thisMainLoopId = Browser.mainLoop.currentlyRunningMainloop;
      function checkIsRunning() {
        if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) {
          return false;
        }
        return true;
      }
      Browser.mainLoop.running = false;
      Browser.mainLoop.runner = function Browser_mainLoop_runner() {
        if (ABORT) return;
        if (Browser.mainLoop.queue.length > 0) {
          var start = Date.now();
          var blocker = Browser.mainLoop.queue.shift();
          blocker.func(blocker.arg);
          if (Browser.mainLoop.remainingBlockers) {
            var remaining = Browser.mainLoop.remainingBlockers;
            var next = remaining % 1 == 0 ? remaining - 1 : Math.floor(remaining);
            if (blocker.counted) {
              Browser.mainLoop.remainingBlockers = next;
            } else {
              next = next + 0.5;
              Browser.mainLoop.remainingBlockers = (8 * remaining + next) / 9;
            }
          }
          Browser.mainLoop.updateStatus();
          if (!checkIsRunning()) return;
          setTimeout(Browser.mainLoop.runner, 0);
          return;
        }
        if (!checkIsRunning()) return;
        Browser.mainLoop.currentFrameNumber = (Browser.mainLoop.currentFrameNumber + 1) | 0;
        if (
          Browser.mainLoop.timingMode == 1 &&
          Browser.mainLoop.timingValue > 1 &&
          Browser.mainLoop.currentFrameNumber % Browser.mainLoop.timingValue != 0
        ) {
          Browser.mainLoop.scheduler();
          return;
        } else if (Browser.mainLoop.timingMode == 0) {
          Browser.mainLoop.tickStartTime = _emscripten_get_now();
        }
        Browser.mainLoop.runIter(browserIterationFunc);
        if (!checkIsRunning()) return;
        if (typeof SDL == "object" && SDL.audio && SDL.audio.queueNewAudioData) SDL.audio.queueNewAudioData();
        Browser.mainLoop.scheduler();
      };
      if (!noSetTiming) {
        if (fps && fps > 0) {
          _emscripten_set_main_loop_timing(0, 1e3 / fps);
        } else {
          _emscripten_set_main_loop_timing(1, 1);
        }
        Browser.mainLoop.scheduler();
      }
      if (simulateInfiniteLoop) {
        throw "unwind";
      }
    };
    var handleException = (e) => {
      if (e instanceof ExitStatus || e == "unwind") {
        return EXITSTATUS;
      }
      quit_(1, e);
    };
    var runtimeKeepaliveCounter = 0;
    var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;
    var _proc_exit = (code) => {
      EXITSTATUS = code;
      if (!keepRuntimeAlive()) {
        if (Module["onExit"]) Module["onExit"](code);
        ABORT = true;
      }
      quit_(code, new ExitStatus(code));
    };
    var exitJS = (status, implicit) => {
      EXITSTATUS = status;
      _proc_exit(status);
    };
    var _exit = exitJS;
    var maybeExit = () => {
      if (!keepRuntimeAlive()) {
        try {
          _exit(EXITSTATUS);
        } catch (e) {
          handleException(e);
        }
      }
    };
    var callUserCallback = (func) => {
      if (ABORT) {
        return;
      }
      try {
        func();
        maybeExit();
      } catch (e) {
        handleException(e);
      }
    };
    var safeSetTimeout = (func, timeout) =>
      setTimeout(() => {
        callUserCallback(func);
      }, timeout);
    var warnOnce = (text) => {
      if (!warnOnce.shown) warnOnce.shown = {};
      if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        if (ENVIRONMENT_IS_NODE) text = "warning: " + text;
        err(text);
      }
    };
    var Browser = {
      mainLoop: {
        running: false,
        scheduler: null,
        method: "",
        currentlyRunningMainloop: 0,
        func: null,
        arg: 0,
        timingMode: 0,
        timingValue: 0,
        currentFrameNumber: 0,
        queue: [],
        pause() {
          Browser.mainLoop.scheduler = null;
          Browser.mainLoop.currentlyRunningMainloop++;
        },
        resume() {
          Browser.mainLoop.currentlyRunningMainloop++;
          var timingMode = Browser.mainLoop.timingMode;
          var timingValue = Browser.mainLoop.timingValue;
          var func = Browser.mainLoop.func;
          Browser.mainLoop.func = null;
          setMainLoop(func, 0, false, Browser.mainLoop.arg, true);
          _emscripten_set_main_loop_timing(timingMode, timingValue);
          Browser.mainLoop.scheduler();
        },
        updateStatus() {
          if (Module["setStatus"]) {
            var message = Module["statusMessage"] || "Please wait...";
            var remaining = Browser.mainLoop.remainingBlockers;
            var expected = Browser.mainLoop.expectedBlockers;
            if (remaining) {
              if (remaining < expected) {
                Module["setStatus"](message + " (" + (expected - remaining) + "/" + expected + ")");
              } else {
                Module["setStatus"](message);
              }
            } else {
              Module["setStatus"]("");
            }
          }
        },
        runIter(func) {
          if (ABORT) return;
          if (Module["preMainLoop"]) {
            var preRet = Module["preMainLoop"]();
            if (preRet === false) {
              return;
            }
          }
          callUserCallback(func);
          if (Module["postMainLoop"]) Module["postMainLoop"]();
        }
      },
      isFullscreen: false,
      pointerLock: false,
      moduleContextCreatedCallbacks: [],
      workers: [],
      init() {
        if (Browser.initted) return;
        Browser.initted = true;
        function pointerLockChange() {
          Browser.pointerLock =
            document["pointerLockElement"] === Module["canvas"] ||
            document["mozPointerLockElement"] === Module["canvas"] ||
            document["webkitPointerLockElement"] === Module["canvas"] ||
            document["msPointerLockElement"] === Module["canvas"];
        }
        var canvas = Module["canvas"];
        if (canvas) {
          canvas.requestPointerLock =
            canvas["requestPointerLock"] ||
            canvas["mozRequestPointerLock"] ||
            canvas["webkitRequestPointerLock"] ||
            canvas["msRequestPointerLock"] ||
            (() => {});
          canvas.exitPointerLock =
            document["exitPointerLock"] ||
            document["mozExitPointerLock"] ||
            document["webkitExitPointerLock"] ||
            document["msExitPointerLock"] ||
            (() => {});
          canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
          document.addEventListener("pointerlockchange", pointerLockChange, false);
          document.addEventListener("mozpointerlockchange", pointerLockChange, false);
          document.addEventListener("webkitpointerlockchange", pointerLockChange, false);
          document.addEventListener("mspointerlockchange", pointerLockChange, false);
          if (Module["elementPointerLock"]) {
            canvas.addEventListener(
              "click",
              (ev) => {
                if (!Browser.pointerLock && Module["canvas"].requestPointerLock) {
                  Module["canvas"].requestPointerLock();
                  ev.preventDefault();
                }
              },
              false
            );
          }
        }
      },
      createContext(canvas, useWebGL, setInModule, webGLContextAttributes) {
        if (useWebGL && Module.ctx && canvas == Module.canvas) return Module.ctx;
        var ctx;
        var contextHandle;
        if (useWebGL) {
          var contextAttributes = { antialias: false, alpha: false, majorVersion: typeof WebGL2RenderingContext != "undefined" ? 2 : 1 };
          if (webGLContextAttributes) {
            for (var attribute in webGLContextAttributes) {
              contextAttributes[attribute] = webGLContextAttributes[attribute];
            }
          }
          if (typeof GL != "undefined") {
            contextHandle = GL.createContext(canvas, contextAttributes);
            if (contextHandle) {
              ctx = GL.getContext(contextHandle).GLctx;
            }
          }
        } else {
          ctx = canvas.getContext("2d");
        }
        if (!ctx) return null;
        if (setInModule) {
          if (!useWebGL)
            assert(typeof GLctx == "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
          Module.ctx = ctx;
          if (useWebGL) GL.makeContextCurrent(contextHandle);
          Module.useWebGL = useWebGL;
          Browser.moduleContextCreatedCallbacks.forEach((callback) => callback());
          Browser.init();
        }
        return ctx;
      },
      destroyContext(canvas, useWebGL, setInModule) {},
      fullscreenHandlersInstalled: false,
      lockPointer: undefined,
      resizeCanvas: undefined,
      requestFullscreen(lockPointer, resizeCanvas) {
        Browser.lockPointer = lockPointer;
        Browser.resizeCanvas = resizeCanvas;
        if (typeof Browser.lockPointer == "undefined") Browser.lockPointer = true;
        if (typeof Browser.resizeCanvas == "undefined") Browser.resizeCanvas = false;
        var canvas = Module["canvas"];
        function fullscreenChange() {
          Browser.isFullscreen = false;
          var canvasContainer = canvas.parentNode;
          if (
            (document["fullscreenElement"] ||
              document["mozFullScreenElement"] ||
              document["msFullscreenElement"] ||
              document["webkitFullscreenElement"] ||
              document["webkitCurrentFullScreenElement"]) === canvasContainer
          ) {
            canvas.exitFullscreen = Browser.exitFullscreen;
            if (Browser.lockPointer) canvas.requestPointerLock();
            Browser.isFullscreen = true;
            if (Browser.resizeCanvas) {
              Browser.setFullscreenCanvasSize();
            } else {
              Browser.updateCanvasDimensions(canvas);
            }
          } else {
            canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
            canvasContainer.parentNode.removeChild(canvasContainer);
            if (Browser.resizeCanvas) {
              Browser.setWindowedCanvasSize();
            } else {
              Browser.updateCanvasDimensions(canvas);
            }
          }
          if (Module["onFullScreen"]) Module["onFullScreen"](Browser.isFullscreen);
          if (Module["onFullscreen"]) Module["onFullscreen"](Browser.isFullscreen);
        }
        if (!Browser.fullscreenHandlersInstalled) {
          Browser.fullscreenHandlersInstalled = true;
          document.addEventListener("fullscreenchange", fullscreenChange, false);
          document.addEventListener("mozfullscreenchange", fullscreenChange, false);
          document.addEventListener("webkitfullscreenchange", fullscreenChange, false);
          document.addEventListener("MSFullscreenChange", fullscreenChange, false);
        }
        var canvasContainer = document.createElement("div");
        canvas.parentNode.insertBefore(canvasContainer, canvas);
        canvasContainer.appendChild(canvas);
        canvasContainer.requestFullscreen =
          canvasContainer["requestFullscreen"] ||
          canvasContainer["mozRequestFullScreen"] ||
          canvasContainer["msRequestFullscreen"] ||
          (canvasContainer["webkitRequestFullscreen"]
            ? () => canvasContainer["webkitRequestFullscreen"](Element["ALLOW_KEYBOARD_INPUT"])
            : null) ||
          (canvasContainer["webkitRequestFullScreen"]
            ? () => canvasContainer["webkitRequestFullScreen"](Element["ALLOW_KEYBOARD_INPUT"])
            : null);
        canvasContainer.requestFullscreen();
      },
      exitFullscreen() {
        if (!Browser.isFullscreen) {
          return false;
        }
        var CFS =
          document["exitFullscreen"] ||
          document["cancelFullScreen"] ||
          document["mozCancelFullScreen"] ||
          document["msExitFullscreen"] ||
          document["webkitCancelFullScreen"] ||
          (() => {});
        CFS.apply(document, []);
        return true;
      },
      nextRAF: 0,
      fakeRequestAnimationFrame(func) {
        var now = Date.now();
        if (Browser.nextRAF === 0) {
          Browser.nextRAF = now + 1e3 / 60;
        } else {
          while (now + 2 >= Browser.nextRAF) {
            Browser.nextRAF += 1e3 / 60;
          }
        }
        var delay = Math.max(Browser.nextRAF - now, 0);
        setTimeout(func, delay);
      },
      requestAnimationFrame(func) {
        if (typeof requestAnimationFrame == "function") {
          requestAnimationFrame(func);
          return;
        }
        var RAF = Browser.fakeRequestAnimationFrame;
        RAF(func);
      },
      safeSetTimeout(func, timeout) {
        return safeSetTimeout(func, timeout);
      },
      safeRequestAnimationFrame(func) {
        return Browser.requestAnimationFrame(() => {
          callUserCallback(func);
        });
      },
      getMimetype(name) {
        return {
          jpg: "image/jpeg",
          jpeg: "image/jpeg",
          png: "image/png",
          bmp: "image/bmp",
          ogg: "audio/ogg",
          wav: "audio/wav",
          mp3: "audio/mpeg"
        }[name.substr(name.lastIndexOf(".") + 1)];
      },
      getUserMedia(func) {
        if (!window.getUserMedia) {
          window.getUserMedia = navigator["getUserMedia"] || navigator["mozGetUserMedia"];
        }
        window.getUserMedia(func);
      },
      getMovementX(event) {
        return event["movementX"] || event["mozMovementX"] || event["webkitMovementX"] || 0;
      },
      getMovementY(event) {
        return event["movementY"] || event["mozMovementY"] || event["webkitMovementY"] || 0;
      },
      getMouseWheelDelta(event) {
        var delta = 0;
        switch (event.type) {
          case "DOMMouseScroll":
            delta = event.detail / 3;
            break;
          case "mousewheel":
            delta = event.wheelDelta / 120;
            break;
          case "wheel":
            delta = event.deltaY;
            switch (event.deltaMode) {
              case 0:
                delta /= 100;
                break;
              case 1:
                delta /= 3;
                break;
              case 2:
                delta *= 80;
                break;
              default:
                throw "unrecognized mouse wheel delta mode: " + event.deltaMode;
            }
            break;
          default:
            throw "unrecognized mouse wheel event: " + event.type;
        }
        return delta;
      },
      mouseX: 0,
      mouseY: 0,
      mouseMovementX: 0,
      mouseMovementY: 0,
      touches: {},
      lastTouches: {},
      calculateMouseEvent(event) {
        if (Browser.pointerLock) {
          if (event.type != "mousemove" && "mozMovementX" in event) {
            Browser.mouseMovementX = Browser.mouseMovementY = 0;
          } else {
            Browser.mouseMovementX = Browser.getMovementX(event);
            Browser.mouseMovementY = Browser.getMovementY(event);
          }
          if (typeof SDL != "undefined") {
            Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;
            Browser.mouseY = SDL.mouseY + Browser.mouseMovementY;
          } else {
            Browser.mouseX += Browser.mouseMovementX;
            Browser.mouseY += Browser.mouseMovementY;
          }
        } else {
          var rect = Module["canvas"].getBoundingClientRect();
          var cw = Module["canvas"].width;
          var ch = Module["canvas"].height;
          var scrollX = typeof window.scrollX != "undefined" ? window.scrollX : window.pageXOffset;
          var scrollY = typeof window.scrollY != "undefined" ? window.scrollY : window.pageYOffset;
          if (event.type === "touchstart" || event.type === "touchend" || event.type === "touchmove") {
            var touch = event.touch;
            if (touch === undefined) {
              return;
            }
            var adjustedX = touch.pageX - (scrollX + rect.left);
            var adjustedY = touch.pageY - (scrollY + rect.top);
            adjustedX = adjustedX * (cw / rect.width);
            adjustedY = adjustedY * (ch / rect.height);
            var coords = { x: adjustedX, y: adjustedY };
            if (event.type === "touchstart") {
              Browser.lastTouches[touch.identifier] = coords;
              Browser.touches[touch.identifier] = coords;
            } else if (event.type === "touchend" || event.type === "touchmove") {
              var last = Browser.touches[touch.identifier];
              if (!last) last = coords;
              Browser.lastTouches[touch.identifier] = last;
              Browser.touches[touch.identifier] = coords;
            }
            return;
          }
          var x = event.pageX - (scrollX + rect.left);
          var y = event.pageY - (scrollY + rect.top);
          x = x * (cw / rect.width);
          y = y * (ch / rect.height);
          Browser.mouseMovementX = x - Browser.mouseX;
          Browser.mouseMovementY = y - Browser.mouseY;
          Browser.mouseX = x;
          Browser.mouseY = y;
        }
      },
      resizeListeners: [],
      updateResizeListeners() {
        var canvas = Module["canvas"];
        Browser.resizeListeners.forEach((listener) => listener(canvas.width, canvas.height));
      },
      setCanvasSize(width, height, noUpdates) {
        var canvas = Module["canvas"];
        Browser.updateCanvasDimensions(canvas, width, height);
        if (!noUpdates) Browser.updateResizeListeners();
      },
      windowedWidth: 0,
      windowedHeight: 0,
      setFullscreenCanvasSize() {
        if (typeof SDL != "undefined") {
          var flags = HEAPU32[SDL.screen >> 2];
          flags = flags | 8388608;
          HEAP32[SDL.screen >> 2] = flags;
        }
        Browser.updateCanvasDimensions(Module["canvas"]);
        Browser.updateResizeListeners();
      },
      setWindowedCanvasSize() {
        if (typeof SDL != "undefined") {
          var flags = HEAPU32[SDL.screen >> 2];
          flags = flags & ~8388608;
          HEAP32[SDL.screen >> 2] = flags;
        }
        Browser.updateCanvasDimensions(Module["canvas"]);
        Browser.updateResizeListeners();
      },
      updateCanvasDimensions(canvas, wNative, hNative) {
        if (wNative && hNative) {
          canvas.widthNative = wNative;
          canvas.heightNative = hNative;
        } else {
          wNative = canvas.widthNative;
          hNative = canvas.heightNative;
        }
        var w = wNative;
        var h = hNative;
        if (Module["forcedAspectRatio"] && Module["forcedAspectRatio"] > 0) {
          if (w / h < Module["forcedAspectRatio"]) {
            w = Math.round(h * Module["forcedAspectRatio"]);
          } else {
            h = Math.round(w / Module["forcedAspectRatio"]);
          }
        }
        if (
          (document["fullscreenElement"] ||
            document["mozFullScreenElement"] ||
            document["msFullscreenElement"] ||
            document["webkitFullscreenElement"] ||
            document["webkitCurrentFullScreenElement"]) === canvas.parentNode &&
          typeof screen != "undefined"
        ) {
          var factor = Math.min(screen.width / w, screen.height / h);
          w = Math.round(w * factor);
          h = Math.round(h * factor);
        }
        if (Browser.resizeCanvas) {
          if (canvas.width != w) canvas.width = w;
          if (canvas.height != h) canvas.height = h;
          if (typeof canvas.style != "undefined") {
            canvas.style.removeProperty("width");
            canvas.style.removeProperty("height");
          }
        } else {
          if (canvas.width != wNative) canvas.width = wNative;
          if (canvas.height != hNative) canvas.height = hNative;
          if (typeof canvas.style != "undefined") {
            if (w != wNative || h != hNative) {
              canvas.style.setProperty("width", w + "px", "important");
              canvas.style.setProperty("height", h + "px", "important");
            } else {
              canvas.style.removeProperty("width");
              canvas.style.removeProperty("height");
            }
          }
        }
      }
    };
    var EGL = {
      errorCode: 12288,
      defaultDisplayInitialized: false,
      currentContext: 0,
      currentReadSurface: 0,
      currentDrawSurface: 0,
      contextAttributes: { alpha: false, depth: false, stencil: false, antialias: false },
      stringCache: {},
      setErrorCode(code) {
        EGL.errorCode = code;
      },
      chooseConfig(display, attribList, config, config_size, numConfigs) {
        if (display != 62e3) {
          EGL.setErrorCode(12296);
          return 0;
        }
        if (attribList) {
          for (;;) {
            var param = HEAP32[attribList >> 2];
            if (param == 12321) {
              var alphaSize = HEAP32[(attribList + 4) >> 2];
              EGL.contextAttributes.alpha = alphaSize > 0;
            } else if (param == 12325) {
              var depthSize = HEAP32[(attribList + 4) >> 2];
              EGL.contextAttributes.depth = depthSize > 0;
            } else if (param == 12326) {
              var stencilSize = HEAP32[(attribList + 4) >> 2];
              EGL.contextAttributes.stencil = stencilSize > 0;
            } else if (param == 12337) {
              var samples = HEAP32[(attribList + 4) >> 2];
              EGL.contextAttributes.antialias = samples > 0;
            } else if (param == 12338) {
              var samples = HEAP32[(attribList + 4) >> 2];
              EGL.contextAttributes.antialias = samples == 1;
            } else if (param == 12544) {
              var requestedPriority = HEAP32[(attribList + 4) >> 2];
              EGL.contextAttributes.lowLatency = requestedPriority != 12547;
            } else if (param == 12344) {
              break;
            }
            attribList += 8;
          }
        }
        if ((!config || !config_size) && !numConfigs) {
          EGL.setErrorCode(12300);
          return 0;
        }
        if (numConfigs) {
          HEAP32[numConfigs >> 2] = 1;
        }
        if (config && config_size > 0) {
          HEAPU32[config >> 2] = 62002;
        }
        EGL.setErrorCode(12288);
        return 1;
      }
    };
    var _eglChooseConfig = (display, attrib_list, configs, config_size, numConfigs) =>
      EGL.chooseConfig(display, attrib_list, configs, config_size, numConfigs);
    var webgl_enable_ANGLE_instanced_arrays = (ctx) => {
      var ext = ctx.getExtension("ANGLE_instanced_arrays");
      if (ext) {
        ctx["vertexAttribDivisor"] = (index, divisor) => ext["vertexAttribDivisorANGLE"](index, divisor);
        ctx["drawArraysInstanced"] = (mode, first, count, primcount) => ext["drawArraysInstancedANGLE"](mode, first, count, primcount);
        ctx["drawElementsInstanced"] = (mode, count, type, indices, primcount) =>
          ext["drawElementsInstancedANGLE"](mode, count, type, indices, primcount);
        return 1;
      }
    };
    var webgl_enable_OES_vertex_array_object = (ctx) => {
      var ext = ctx.getExtension("OES_vertex_array_object");
      if (ext) {
        ctx["createVertexArray"] = () => ext["createVertexArrayOES"]();
        ctx["deleteVertexArray"] = (vao) => ext["deleteVertexArrayOES"](vao);
        ctx["bindVertexArray"] = (vao) => ext["bindVertexArrayOES"](vao);
        ctx["isVertexArray"] = (vao) => ext["isVertexArrayOES"](vao);
        return 1;
      }
    };
    var webgl_enable_WEBGL_draw_buffers = (ctx) => {
      var ext = ctx.getExtension("WEBGL_draw_buffers");
      if (ext) {
        ctx["drawBuffers"] = (n, bufs) => ext["drawBuffersWEBGL"](n, bufs);
        return 1;
      }
    };
    var webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance = (ctx) =>
      !!(ctx.dibvbi = ctx.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
    var webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance = (ctx) =>
      !!(ctx.mdibvbi = ctx.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
    var webgl_enable_WEBGL_multi_draw = (ctx) => !!(ctx.multiDrawWebgl = ctx.getExtension("WEBGL_multi_draw"));
    var GL = {
      counter: 1,
      buffers: [],
      programs: [],
      framebuffers: [],
      renderbuffers: [],
      textures: [],
      shaders: [],
      vaos: [],
      contexts: [],
      offscreenCanvases: {},
      queries: [],
      samplers: [],
      transformFeedbacks: [],
      syncs: [],
      stringCache: {},
      stringiCache: {},
      unpackAlignment: 4,
      recordError: function recordError(errorCode) {
        if (!GL.lastError) {
          GL.lastError = errorCode;
        }
      },
      getNewId: (table) => {
        var ret = GL.counter++;
        for (var i = table.length; i < ret; i++) {
          table[i] = null;
        }
        return ret;
      },
      getSource: (shader, count, string, length) => {
        var source = "";
        for (var i = 0; i < count; ++i) {
          var len = length ? HEAP32[(length + i * 4) >> 2] : -1;
          source += UTF8ToString(HEAP32[(string + i * 4) >> 2], len < 0 ? undefined : len);
        }
        return source;
      },
      createContext: (canvas, webGLContextAttributes) => {
        if (Module["preinitializedWebGLContext"]) {
          var ctx = Module["preinitializedWebGLContext"];
          webGLContextAttributes.majorVersion = Number(ctx.getParameter(ctx.VERSION).match(/^WebGL (\d+).\d+/)[1]);
        } else {
          if (!canvas.getContextSafariWebGL2Fixed) {
            canvas.getContextSafariWebGL2Fixed = canvas.getContext;
            function fixedGetContext(ver, attrs) {
              var gl = canvas.getContextSafariWebGL2Fixed(ver, attrs);
              return (ver == "webgl") == gl instanceof WebGLRenderingContext ? gl : null;
            }
            canvas.getContext = fixedGetContext;
          }
          var ctx =
            webGLContextAttributes.majorVersion > 1
              ? canvas.getContext("webgl2", webGLContextAttributes)
              : canvas.getContext("webgl", webGLContextAttributes);
        }
        if (!ctx) return 0;
        var handle = GL.registerContext(ctx, webGLContextAttributes);
        return handle;
      },
      registerContext: (ctx, webGLContextAttributes) => {
        var handle = GL.getNewId(GL.contexts);
        var context = { handle: handle, attributes: webGLContextAttributes, version: webGLContextAttributes.majorVersion, GLctx: ctx };
        if (ctx.canvas) ctx.canvas.GLctxObject = context;
        GL.contexts[handle] = context;
        if (typeof webGLContextAttributes.enableExtensionsByDefault == "undefined" || webGLContextAttributes.enableExtensionsByDefault) {
          GL.initExtensions(context);
        }
        return handle;
      },
      makeContextCurrent: (contextHandle) => {
        GL.currentContext = GL.contexts[contextHandle];
        Module.ctx = GLctx = GL.currentContext && GL.currentContext.GLctx;
        return !(contextHandle && !GLctx);
      },
      getContext: (contextHandle) => GL.contexts[contextHandle],
      deleteContext: (contextHandle) => {
        if (GL.currentContext === GL.contexts[contextHandle]) GL.currentContext = null;
        if (typeof JSEvents == "object") JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas);
        if (GL.contexts[contextHandle] && GL.contexts[contextHandle].GLctx.canvas)
          GL.contexts[contextHandle].GLctx.canvas.GLctxObject = undefined;
        GL.contexts[contextHandle] = null;
      },
      initExtensions: (context) => {
        if (!context) context = GL.currentContext;
        if (context.initExtensionsDone) return;
        context.initExtensionsDone = true;
        var GLctx = context.GLctx;
        webgl_enable_ANGLE_instanced_arrays(GLctx);
        webgl_enable_OES_vertex_array_object(GLctx);
        webgl_enable_WEBGL_draw_buffers(GLctx);
        webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(GLctx);
        webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(GLctx);
        if (context.version >= 2) {
          GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query_webgl2");
        }
        if (context.version < 2 || !GLctx.disjointTimerQueryExt) {
          GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query");
        }
        webgl_enable_WEBGL_multi_draw(GLctx);
        var exts = GLctx.getSupportedExtensions() || [];
        exts.forEach((ext) => {
          if (!ext.includes("lose_context") && !ext.includes("debug")) {
            GLctx.getExtension(ext);
          }
        });
      }
    };
    var _eglCreateContext = (display, config, hmm, contextAttribs) => {
      if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0;
      }
      var glesContextVersion = 1;
      for (;;) {
        var param = HEAP32[contextAttribs >> 2];
        if (param == 12440) {
          glesContextVersion = HEAP32[(contextAttribs + 4) >> 2];
        } else if (param == 12344) {
          break;
        } else {
          EGL.setErrorCode(12292);
          return 0;
        }
        contextAttribs += 8;
      }
      if (glesContextVersion < 2 || glesContextVersion > 3) {
        EGL.setErrorCode(12293);
        return 0;
      }
      EGL.contextAttributes.majorVersion = glesContextVersion - 1;
      EGL.contextAttributes.minorVersion = 0;
      EGL.context = GL.createContext(Module["canvas"], EGL.contextAttributes);
      if (EGL.context != 0) {
        EGL.setErrorCode(12288);
        GL.makeContextCurrent(EGL.context);
        Module.useWebGL = true;
        Browser.moduleContextCreatedCallbacks.forEach(function (callback) {
          callback();
        });
        GL.makeContextCurrent(null);
        return 62004;
      } else {
        EGL.setErrorCode(12297);
        return 0;
      }
    };
    var _eglCreateWindowSurface = (display, config, win, attrib_list) => {
      if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0;
      }
      if (config != 62002) {
        EGL.setErrorCode(12293);
        return 0;
      }
      EGL.setErrorCode(12288);
      return 62006;
    };
    var _eglDestroyContext = (display, context) => {
      if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0;
      }
      if (context != 62004) {
        EGL.setErrorCode(12294);
        return 0;
      }
      GL.deleteContext(EGL.context);
      EGL.setErrorCode(12288);
      if (EGL.currentContext == context) {
        EGL.currentContext = 0;
      }
      return 1;
    };
    var _eglDestroySurface = (display, surface) => {
      if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0;
      }
      if (surface != 62006) {
        EGL.setErrorCode(12301);
        return 1;
      }
      if (EGL.currentReadSurface == surface) {
        EGL.currentReadSurface = 0;
      }
      if (EGL.currentDrawSurface == surface) {
        EGL.currentDrawSurface = 0;
      }
      EGL.setErrorCode(12288);
      return 1;
    };
    var _eglGetCurrentContext = () => EGL.currentContext;
    var _eglGetCurrentDisplay = () => (EGL.currentContext ? 62e3 : 0);
    var _eglGetCurrentSurface = (readdraw) => {
      if (readdraw == 12378) {
        return EGL.currentReadSurface;
      } else if (readdraw == 12377) {
        return EGL.currentDrawSurface;
      } else {
        EGL.setErrorCode(12300);
        return 0;
      }
    };
    var _eglGetDisplay = (nativeDisplayType) => {
      EGL.setErrorCode(12288);
      return 62e3;
    };
    var _eglInitialize = (display, majorVersion, minorVersion) => {
      if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0;
      }
      if (majorVersion) {
        HEAP32[majorVersion >> 2] = 1;
      }
      if (minorVersion) {
        HEAP32[minorVersion >> 2] = 4;
      }
      EGL.defaultDisplayInitialized = true;
      EGL.setErrorCode(12288);
      return 1;
    };
    var _eglMakeCurrent = (display, draw, read, context) => {
      if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0;
      }
      if (context != 0 && context != 62004) {
        EGL.setErrorCode(12294);
        return 0;
      }
      if ((read != 0 && read != 62006) || (draw != 0 && draw != 62006)) {
        EGL.setErrorCode(12301);
        return 0;
      }
      GL.makeContextCurrent(context ? EGL.context : null);
      EGL.currentContext = context;
      EGL.currentDrawSurface = draw;
      EGL.currentReadSurface = read;
      EGL.setErrorCode(12288);
      return 1;
    };
    var _eglReleaseThread = () => {
      EGL.currentContext = 0;
      EGL.currentReadSurface = 0;
      EGL.currentDrawSurface = 0;
      EGL.setErrorCode(12288);
      return 1;
    };
    var _eglSwapBuffers = (dpy, surface) => {
      if (!EGL.defaultDisplayInitialized) {
        EGL.setErrorCode(12289);
      } else if (!Module.ctx) {
        EGL.setErrorCode(12290);
      } else if (Module.ctx.isContextLost()) {
        EGL.setErrorCode(12302);
      } else {
        EGL.setErrorCode(12288);
        return 1;
      }
      return 0;
    };
    var readEmAsmArgsArray = [];
    var readEmAsmArgs = (sigPtr, buf) => {
      readEmAsmArgsArray.length = 0;
      var ch;
      while ((ch = HEAPU8[sigPtr++])) {
        var wide = ch != 105;
        wide &= ch != 112;
        buf += wide && buf % 8 ? 4 : 0;
        readEmAsmArgsArray.push(ch == 112 ? HEAPU32[buf >> 2] : ch == 105 ? HEAP32[buf >> 2] : HEAPF64[buf >> 3]);
        buf += wide ? 8 : 4;
      }
      return readEmAsmArgsArray;
    };
    var runEmAsmFunction = (code, sigPtr, argbuf) => {
      var args = readEmAsmArgs(sigPtr, argbuf);
      return ASM_CONSTS[code].apply(null, args);
    };
    var _emscripten_asm_const_int = (code, sigPtr, argbuf) => runEmAsmFunction(code, sigPtr, argbuf);
    var runMainThreadEmAsm = (code, sigPtr, argbuf, sync) => {
      var args = readEmAsmArgs(sigPtr, argbuf);
      return ASM_CONSTS[code].apply(null, args);
    };
    var _emscripten_asm_const_int_sync_on_main_thread = (code, sigPtr, argbuf) => runMainThreadEmAsm(code, sigPtr, argbuf, 1);
    var _emscripten_async_call = (func, arg, millis) => {
      function wrapper() {
        ((a1) => dynCall_vi.apply(null, [func, a1]))(arg);
      }
      if (millis >= 0 || ENVIRONMENT_IS_NODE) {
        safeSetTimeout(wrapper, millis);
      } else {
        Browser.safeRequestAnimationFrame(wrapper);
      }
    };
    var _emscripten_date_now = () => Date.now();
    var _emscripten_errn = (str, len) => err(UTF8ToString(str, len));
    var getHeapMax = () => 2147483648;
    var _emscripten_get_heap_max = () => getHeapMax();
    function _glActiveTexture(x0) {
      GLctx.activeTexture(x0);
    }
    var _emscripten_glActiveTexture = _glActiveTexture;
    var _glAttachShader = (program, shader) => {
      GLctx.attachShader(GL.programs[program], GL.shaders[shader]);
    };
    var _emscripten_glAttachShader = _glAttachShader;
    var _glBeginQuery = (target, id) => {
      GLctx.beginQuery(target, GL.queries[id]);
    };
    var _emscripten_glBeginQuery = _glBeginQuery;
    var _glBeginQueryEXT = (target, id) => {
      GLctx.disjointTimerQueryExt["beginQueryEXT"](target, GL.queries[id]);
    };
    var _emscripten_glBeginQueryEXT = _glBeginQueryEXT;
    function _glBeginTransformFeedback(x0) {
      GLctx.beginTransformFeedback(x0);
    }
    var _emscripten_glBeginTransformFeedback = _glBeginTransformFeedback;
    var _glBindAttribLocation = (program, index, name) => {
      GLctx.bindAttribLocation(GL.programs[program], index, UTF8ToString(name));
    };
    var _emscripten_glBindAttribLocation = _glBindAttribLocation;
    var _glBindBuffer = (target, buffer) => {
      if (target == 35051) {
        GLctx.currentPixelPackBufferBinding = buffer;
      } else if (target == 35052) {
        GLctx.currentPixelUnpackBufferBinding = buffer;
      }
      GLctx.bindBuffer(target, GL.buffers[buffer]);
    };
    var _emscripten_glBindBuffer = _glBindBuffer;
    var _glBindBufferBase = (target, index, buffer) => {
      GLctx.bindBufferBase(target, index, GL.buffers[buffer]);
    };
    var _emscripten_glBindBufferBase = _glBindBufferBase;
    var _glBindBufferRange = (target, index, buffer, offset, ptrsize) => {
      GLctx.bindBufferRange(target, index, GL.buffers[buffer], offset, ptrsize);
    };
    var _emscripten_glBindBufferRange = _glBindBufferRange;
    var _glBindFramebuffer = (target, framebuffer) => {
      GLctx.bindFramebuffer(target, GL.framebuffers[framebuffer]);
    };
    var _emscripten_glBindFramebuffer = _glBindFramebuffer;
    var _glBindRenderbuffer = (target, renderbuffer) => {
      GLctx.bindRenderbuffer(target, GL.renderbuffers[renderbuffer]);
    };
    var _emscripten_glBindRenderbuffer = _glBindRenderbuffer;
    var _glBindSampler = (unit, sampler) => {
      GLctx.bindSampler(unit, GL.samplers[sampler]);
    };
    var _emscripten_glBindSampler = _glBindSampler;
    var _glBindTexture = (target, texture) => {
      GLctx.bindTexture(target, GL.textures[texture]);
    };
    var _emscripten_glBindTexture = _glBindTexture;
    var _glBindTransformFeedback = (target, id) => {
      GLctx.bindTransformFeedback(target, GL.transformFeedbacks[id]);
    };
    var _emscripten_glBindTransformFeedback = _glBindTransformFeedback;
    var _glBindVertexArray = (vao) => {
      GLctx.bindVertexArray(GL.vaos[vao]);
    };
    var _emscripten_glBindVertexArray = _glBindVertexArray;
    var _glBindVertexArrayOES = _glBindVertexArray;
    var _emscripten_glBindVertexArrayOES = _glBindVertexArrayOES;
    function _glBlendColor(x0, x1, x2, x3) {
      GLctx.blendColor(x0, x1, x2, x3);
    }
    var _emscripten_glBlendColor = _glBlendColor;
    function _glBlendEquation(x0) {
      GLctx.blendEquation(x0);
    }
    var _emscripten_glBlendEquation = _glBlendEquation;
    function _glBlendEquationSeparate(x0, x1) {
      GLctx.blendEquationSeparate(x0, x1);
    }
    var _emscripten_glBlendEquationSeparate = _glBlendEquationSeparate;
    function _glBlendFunc(x0, x1) {
      GLctx.blendFunc(x0, x1);
    }
    var _emscripten_glBlendFunc = _glBlendFunc;
    function _glBlendFuncSeparate(x0, x1, x2, x3) {
      GLctx.blendFuncSeparate(x0, x1, x2, x3);
    }
    var _emscripten_glBlendFuncSeparate = _glBlendFuncSeparate;
    function _glBlitFramebuffer(x0, x1, x2, x3, x4, x5, x6, x7, x8, x9) {
      GLctx.blitFramebuffer(x0, x1, x2, x3, x4, x5, x6, x7, x8, x9);
    }
    var _emscripten_glBlitFramebuffer = _glBlitFramebuffer;
    var _glBufferData = (target, size, data, usage) => {
      if (GL.currentContext.version >= 2) {
        if (data && size) {
          GLctx.bufferData(target, HEAPU8, usage, data, size);
        } else {
          GLctx.bufferData(target, size, usage);
        }
      } else {
        GLctx.bufferData(target, data ? HEAPU8.subarray(data, data + size) : size, usage);
      }
    };
    var _emscripten_glBufferData = _glBufferData;
    var _glBufferSubData = (target, offset, size, data) => {
      if (GL.currentContext.version >= 2) {
        size && GLctx.bufferSubData(target, offset, HEAPU8, data, size);
        return;
      }
      GLctx.bufferSubData(target, offset, HEAPU8.subarray(data, data + size));
    };
    var _emscripten_glBufferSubData = _glBufferSubData;
    function _glCheckFramebufferStatus(x0) {
      return GLctx.checkFramebufferStatus(x0);
    }
    var _emscripten_glCheckFramebufferStatus = _glCheckFramebufferStatus;
    function _glClear(x0) {
      GLctx.clear(x0);
    }
    var _emscripten_glClear = _glClear;
    function _glClearBufferfi(x0, x1, x2, x3) {
      GLctx.clearBufferfi(x0, x1, x2, x3);
    }
    var _emscripten_glClearBufferfi = _glClearBufferfi;
    var _glClearBufferfv = (buffer, drawbuffer, value) => {
      GLctx.clearBufferfv(buffer, drawbuffer, HEAPF32, value >> 2);
    };
    var _emscripten_glClearBufferfv = _glClearBufferfv;
    var _glClearBufferiv = (buffer, drawbuffer, value) => {
      GLctx.clearBufferiv(buffer, drawbuffer, HEAP32, value >> 2);
    };
    var _emscripten_glClearBufferiv = _glClearBufferiv;
    var _glClearBufferuiv = (buffer, drawbuffer, value) => {
      GLctx.clearBufferuiv(buffer, drawbuffer, HEAPU32, value >> 2);
    };
    var _emscripten_glClearBufferuiv = _glClearBufferuiv;
    function _glClearColor(x0, x1, x2, x3) {
      GLctx.clearColor(x0, x1, x2, x3);
    }
    var _emscripten_glClearColor = _glClearColor;
    function _glClearDepthf(x0) {
      GLctx.clearDepth(x0);
    }
    var _emscripten_glClearDepthf = _glClearDepthf;
    function _glClearStencil(x0) {
      GLctx.clearStencil(x0);
    }
    var _emscripten_glClearStencil = _glClearStencil;
    var convertI32PairToI53 = (lo, hi) => (lo >>> 0) + hi * 4294967296;
    var _glClientWaitSync = (sync, flags, timeout_low, timeout_high) => {
      var timeout = convertI32PairToI53(timeout_low, timeout_high);
      return GLctx.clientWaitSync(GL.syncs[sync], flags, timeout);
    };
    var _emscripten_glClientWaitSync = _glClientWaitSync;
    var _glColorMask = (red, green, blue, alpha) => {
      GLctx.colorMask(!!red, !!green, !!blue, !!alpha);
    };
    var _emscripten_glColorMask = _glColorMask;
    var _glCompileShader = (shader) => {
      GLctx.compileShader(GL.shaders[shader]);
    };
    var _emscripten_glCompileShader = _glCompileShader;
    var _glCompressedTexImage2D = (target, level, internalFormat, width, height, border, imageSize, data) => {
      if (GL.currentContext.version >= 2) {
        if (GLctx.currentPixelUnpackBufferBinding || !imageSize) {
          GLctx.compressedTexImage2D(target, level, internalFormat, width, height, border, imageSize, data);
        } else {
          GLctx.compressedTexImage2D(target, level, internalFormat, width, height, border, HEAPU8, data, imageSize);
        }
        return;
      }
      GLctx.compressedTexImage2D(
        target,
        level,
        internalFormat,
        width,
        height,
        border,
        data ? HEAPU8.subarray(data, data + imageSize) : null
      );
    };
    var _emscripten_glCompressedTexImage2D = _glCompressedTexImage2D;
    var _glCompressedTexImage3D = (target, level, internalFormat, width, height, depth, border, imageSize, data) => {
      if (GLctx.currentPixelUnpackBufferBinding) {
        GLctx.compressedTexImage3D(target, level, internalFormat, width, height, depth, border, imageSize, data);
      } else {
        GLctx.compressedTexImage3D(target, level, internalFormat, width, height, depth, border, HEAPU8, data, imageSize);
      }
    };
    var _emscripten_glCompressedTexImage3D = _glCompressedTexImage3D;
    var _glCompressedTexSubImage2D = (target, level, xoffset, yoffset, width, height, format, imageSize, data) => {
      if (GL.currentContext.version >= 2) {
        if (GLctx.currentPixelUnpackBufferBinding || !imageSize) {
          GLctx.compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, data);
        } else {
          GLctx.compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, HEAPU8, data, imageSize);
        }
        return;
      }
      GLctx.compressedTexSubImage2D(
        target,
        level,
        xoffset,
        yoffset,
        width,
        height,
        format,
        data ? HEAPU8.subarray(data, data + imageSize) : null
      );
    };
    var _emscripten_glCompressedTexSubImage2D = _glCompressedTexSubImage2D;
    var _glCompressedTexSubImage3D = (target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, data) => {
      if (GLctx.currentPixelUnpackBufferBinding) {
        GLctx.compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, data);
      } else {
        GLctx.compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, HEAPU8, data, imageSize);
      }
    };
    var _emscripten_glCompressedTexSubImage3D = _glCompressedTexSubImage3D;
    function _glCopyBufferSubData(x0, x1, x2, x3, x4) {
      GLctx.copyBufferSubData(x0, x1, x2, x3, x4);
    }
    var _emscripten_glCopyBufferSubData = _glCopyBufferSubData;
    function _glCopyTexImage2D(x0, x1, x2, x3, x4, x5, x6, x7) {
      GLctx.copyTexImage2D(x0, x1, x2, x3, x4, x5, x6, x7);
    }
    var _emscripten_glCopyTexImage2D = _glCopyTexImage2D;
    function _glCopyTexSubImage2D(x0, x1, x2, x3, x4, x5, x6, x7) {
      GLctx.copyTexSubImage2D(x0, x1, x2, x3, x4, x5, x6, x7);
    }
    var _emscripten_glCopyTexSubImage2D = _glCopyTexSubImage2D;
    function _glCopyTexSubImage3D(x0, x1, x2, x3, x4, x5, x6, x7, x8) {
      GLctx.copyTexSubImage3D(x0, x1, x2, x3, x4, x5, x6, x7, x8);
    }
    var _emscripten_glCopyTexSubImage3D = _glCopyTexSubImage3D;
    var _glCreateProgram = () => {
      var id = GL.getNewId(GL.programs);
      var program = GLctx.createProgram();
      program.name = id;
      program.maxUniformLength = program.maxAttributeLength = program.maxUniformBlockNameLength = 0;
      program.uniformIdCounter = 1;
      GL.programs[id] = program;
      return id;
    };
    var _emscripten_glCreateProgram = _glCreateProgram;
    var _glCreateShader = (shaderType) => {
      var id = GL.getNewId(GL.shaders);
      GL.shaders[id] = GLctx.createShader(shaderType);
      return id;
    };
    var _emscripten_glCreateShader = _glCreateShader;
    function _glCullFace(x0) {
      GLctx.cullFace(x0);
    }
    var _emscripten_glCullFace = _glCullFace;
    var _glDeleteBuffers = (n, buffers) => {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(buffers + i * 4) >> 2];
        var buffer = GL.buffers[id];
        if (!buffer) continue;
        GLctx.deleteBuffer(buffer);
        buffer.name = 0;
        GL.buffers[id] = null;
        if (id == GLctx.currentPixelPackBufferBinding) GLctx.currentPixelPackBufferBinding = 0;
        if (id == GLctx.currentPixelUnpackBufferBinding) GLctx.currentPixelUnpackBufferBinding = 0;
      }
    };
    var _emscripten_glDeleteBuffers = _glDeleteBuffers;
    var _glDeleteFramebuffers = (n, framebuffers) => {
      for (var i = 0; i < n; ++i) {
        var id = HEAP32[(framebuffers + i * 4) >> 2];
        var framebuffer = GL.framebuffers[id];
        if (!framebuffer) continue;
        GLctx.deleteFramebuffer(framebuffer);
        framebuffer.name = 0;
        GL.framebuffers[id] = null;
      }
    };
    var _emscripten_glDeleteFramebuffers = _glDeleteFramebuffers;
    var _glDeleteProgram = (id) => {
      if (!id) return;
      var program = GL.programs[id];
      if (!program) {
        GL.recordError(1281);
        return;
      }
      GLctx.deleteProgram(program);
      program.name = 0;
      GL.programs[id] = null;
    };
    var _emscripten_glDeleteProgram = _glDeleteProgram;
    var _glDeleteQueries = (n, ids) => {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(ids + i * 4) >> 2];
        var query = GL.queries[id];
        if (!query) continue;
        GLctx.deleteQuery(query);
        GL.queries[id] = null;
      }
    };
    var _emscripten_glDeleteQueries = _glDeleteQueries;
    var _glDeleteQueriesEXT = (n, ids) => {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(ids + i * 4) >> 2];
        var query = GL.queries[id];
        if (!query) continue;
        GLctx.disjointTimerQueryExt["deleteQueryEXT"](query);
        GL.queries[id] = null;
      }
    };
    var _emscripten_glDeleteQueriesEXT = _glDeleteQueriesEXT;
    var _glDeleteRenderbuffers = (n, renderbuffers) => {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(renderbuffers + i * 4) >> 2];
        var renderbuffer = GL.renderbuffers[id];
        if (!renderbuffer) continue;
        GLctx.deleteRenderbuffer(renderbuffer);
        renderbuffer.name = 0;
        GL.renderbuffers[id] = null;
      }
    };
    var _emscripten_glDeleteRenderbuffers = _glDeleteRenderbuffers;
    var _glDeleteSamplers = (n, samplers) => {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(samplers + i * 4) >> 2];
        var sampler = GL.samplers[id];
        if (!sampler) continue;
        GLctx.deleteSampler(sampler);
        sampler.name = 0;
        GL.samplers[id] = null;
      }
    };
    var _emscripten_glDeleteSamplers = _glDeleteSamplers;
    var _glDeleteShader = (id) => {
      if (!id) return;
      var shader = GL.shaders[id];
      if (!shader) {
        GL.recordError(1281);
        return;
      }
      GLctx.deleteShader(shader);
      GL.shaders[id] = null;
    };
    var _emscripten_glDeleteShader = _glDeleteShader;
    var _glDeleteSync = (id) => {
      if (!id) return;
      var sync = GL.syncs[id];
      if (!sync) {
        GL.recordError(1281);
        return;
      }
      GLctx.deleteSync(sync);
      sync.name = 0;
      GL.syncs[id] = null;
    };
    var _emscripten_glDeleteSync = _glDeleteSync;
    var _glDeleteTextures = (n, textures) => {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(textures + i * 4) >> 2];
        var texture = GL.textures[id];
        if (!texture) continue;
        GLctx.deleteTexture(texture);
        texture.name = 0;
        GL.textures[id] = null;
      }
    };
    var _emscripten_glDeleteTextures = _glDeleteTextures;
    var _glDeleteTransformFeedbacks = (n, ids) => {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(ids + i * 4) >> 2];
        var transformFeedback = GL.transformFeedbacks[id];
        if (!transformFeedback) continue;
        GLctx.deleteTransformFeedback(transformFeedback);
        transformFeedback.name = 0;
        GL.transformFeedbacks[id] = null;
      }
    };
    var _emscripten_glDeleteTransformFeedbacks = _glDeleteTransformFeedbacks;
    var _glDeleteVertexArrays = (n, vaos) => {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(vaos + i * 4) >> 2];
        GLctx.deleteVertexArray(GL.vaos[id]);
        GL.vaos[id] = null;
      }
    };
    var _emscripten_glDeleteVertexArrays = _glDeleteVertexArrays;
    var _glDeleteVertexArraysOES = _glDeleteVertexArrays;
    var _emscripten_glDeleteVertexArraysOES = _glDeleteVertexArraysOES;
    function _glDepthFunc(x0) {
      GLctx.depthFunc(x0);
    }
    var _emscripten_glDepthFunc = _glDepthFunc;
    var _glDepthMask = (flag) => {
      GLctx.depthMask(!!flag);
    };
    var _emscripten_glDepthMask = _glDepthMask;
    function _glDepthRangef(x0, x1) {
      GLctx.depthRange(x0, x1);
    }
    var _emscripten_glDepthRangef = _glDepthRangef;
    var _glDetachShader = (program, shader) => {
      GLctx.detachShader(GL.programs[program], GL.shaders[shader]);
    };
    var _emscripten_glDetachShader = _glDetachShader;
    function _glDisable(x0) {
      GLctx.disable(x0);
    }
    var _emscripten_glDisable = _glDisable;
    var _glDisableVertexAttribArray = (index) => {
      GLctx.disableVertexAttribArray(index);
    };
    var _emscripten_glDisableVertexAttribArray = _glDisableVertexAttribArray;
    var _glDrawArrays = (mode, first, count) => {
      GLctx.drawArrays(mode, first, count);
    };
    var _emscripten_glDrawArrays = _glDrawArrays;
    var _glDrawArraysInstanced = (mode, first, count, primcount) => {
      GLctx.drawArraysInstanced(mode, first, count, primcount);
    };
    var _emscripten_glDrawArraysInstanced = _glDrawArraysInstanced;
    var _glDrawArraysInstancedANGLE = _glDrawArraysInstanced;
    var _emscripten_glDrawArraysInstancedANGLE = _glDrawArraysInstancedANGLE;
    var _glDrawArraysInstancedARB = _glDrawArraysInstanced;
    var _emscripten_glDrawArraysInstancedARB = _glDrawArraysInstancedARB;
    var _glDrawArraysInstancedEXT = _glDrawArraysInstanced;
    var _emscripten_glDrawArraysInstancedEXT = _glDrawArraysInstancedEXT;
    var _glDrawArraysInstancedNV = _glDrawArraysInstanced;
    var _emscripten_glDrawArraysInstancedNV = _glDrawArraysInstancedNV;
    var tempFixedLengthArray = [];
    var _glDrawBuffers = (n, bufs) => {
      var bufArray = tempFixedLengthArray[n];
      for (var i = 0; i < n; i++) {
        bufArray[i] = HEAP32[(bufs + i * 4) >> 2];
      }
      GLctx.drawBuffers(bufArray);
    };
    var _emscripten_glDrawBuffers = _glDrawBuffers;
    var _glDrawBuffersEXT = _glDrawBuffers;
    var _emscripten_glDrawBuffersEXT = _glDrawBuffersEXT;
    var _glDrawBuffersWEBGL = _glDrawBuffers;
    var _emscripten_glDrawBuffersWEBGL = _glDrawBuffersWEBGL;
    var _glDrawElements = (mode, count, type, indices) => {
      GLctx.drawElements(mode, count, type, indices);
    };
    var _emscripten_glDrawElements = _glDrawElements;
    var _glDrawElementsInstanced = (mode, count, type, indices, primcount) => {
      GLctx.drawElementsInstanced(mode, count, type, indices, primcount);
    };
    var _emscripten_glDrawElementsInstanced = _glDrawElementsInstanced;
    var _glDrawElementsInstancedANGLE = _glDrawElementsInstanced;
    var _emscripten_glDrawElementsInstancedANGLE = _glDrawElementsInstancedANGLE;
    var _glDrawElementsInstancedARB = _glDrawElementsInstanced;
    var _emscripten_glDrawElementsInstancedARB = _glDrawElementsInstancedARB;
    var _glDrawElementsInstancedEXT = _glDrawElementsInstanced;
    var _emscripten_glDrawElementsInstancedEXT = _glDrawElementsInstancedEXT;
    var _glDrawElementsInstancedNV = _glDrawElementsInstanced;
    var _emscripten_glDrawElementsInstancedNV = _glDrawElementsInstancedNV;
    var _glDrawRangeElements = (mode, start, end, count, type, indices) => {
      _glDrawElements(mode, count, type, indices);
    };
    var _emscripten_glDrawRangeElements = _glDrawRangeElements;
    function _glEnable(x0) {
      GLctx.enable(x0);
    }
    var _emscripten_glEnable = _glEnable;
    var _glEnableVertexAttribArray = (index) => {
      GLctx.enableVertexAttribArray(index);
    };
    var _emscripten_glEnableVertexAttribArray = _glEnableVertexAttribArray;
    function _glEndQuery(x0) {
      GLctx.endQuery(x0);
    }
    var _emscripten_glEndQuery = _glEndQuery;
    var _glEndQueryEXT = (target) => {
      GLctx.disjointTimerQueryExt["endQueryEXT"](target);
    };
    var _emscripten_glEndQueryEXT = _glEndQueryEXT;
    function _glEndTransformFeedback() {
      GLctx.endTransformFeedback();
    }
    var _emscripten_glEndTransformFeedback = _glEndTransformFeedback;
    var _glFenceSync = (condition, flags) => {
      var sync = GLctx.fenceSync(condition, flags);
      if (sync) {
        var id = GL.getNewId(GL.syncs);
        sync.name = id;
        GL.syncs[id] = sync;
        return id;
      }
      return 0;
    };
    var _emscripten_glFenceSync = _glFenceSync;
    function _glFinish() {
      GLctx.finish();
    }
    var _emscripten_glFinish = _glFinish;
    function _glFlush() {
      GLctx.flush();
    }
    var _emscripten_glFlush = _glFlush;
    var _glFramebufferRenderbuffer = (target, attachment, renderbuffertarget, renderbuffer) => {
      GLctx.framebufferRenderbuffer(target, attachment, renderbuffertarget, GL.renderbuffers[renderbuffer]);
    };
    var _emscripten_glFramebufferRenderbuffer = _glFramebufferRenderbuffer;
    var _glFramebufferTexture2D = (target, attachment, textarget, texture, level) => {
      GLctx.framebufferTexture2D(target, attachment, textarget, GL.textures[texture], level);
    };
    var _emscripten_glFramebufferTexture2D = _glFramebufferTexture2D;
    var _glFramebufferTextureLayer = (target, attachment, texture, level, layer) => {
      GLctx.framebufferTextureLayer(target, attachment, GL.textures[texture], level, layer);
    };
    var _emscripten_glFramebufferTextureLayer = _glFramebufferTextureLayer;
    function _glFrontFace(x0) {
      GLctx.frontFace(x0);
    }
    var _emscripten_glFrontFace = _glFrontFace;
    var __glGenObject = (n, buffers, createFunction, objectTable) => {
      for (var i = 0; i < n; i++) {
        var buffer = GLctx[createFunction]();
        var id = buffer && GL.getNewId(objectTable);
        if (buffer) {
          buffer.name = id;
          objectTable[id] = buffer;
        } else {
          GL.recordError(1282);
        }
        HEAP32[(buffers + i * 4) >> 2] = id;
      }
    };
    var _glGenBuffers = (n, buffers) => {
      __glGenObject(n, buffers, "createBuffer", GL.buffers);
    };
    var _emscripten_glGenBuffers = _glGenBuffers;
    var _glGenFramebuffers = (n, ids) => {
      __glGenObject(n, ids, "createFramebuffer", GL.framebuffers);
    };
    var _emscripten_glGenFramebuffers = _glGenFramebuffers;
    var _glGenQueries = (n, ids) => {
      __glGenObject(n, ids, "createQuery", GL.queries);
    };
    var _emscripten_glGenQueries = _glGenQueries;
    var _glGenQueriesEXT = (n, ids) => {
      for (var i = 0; i < n; i++) {
        var query = GLctx.disjointTimerQueryExt["createQueryEXT"]();
        if (!query) {
          GL.recordError(1282);
          while (i < n) HEAP32[(ids + i++ * 4) >> 2] = 0;
          return;
        }
        var id = GL.getNewId(GL.queries);
        query.name = id;
        GL.queries[id] = query;
        HEAP32[(ids + i * 4) >> 2] = id;
      }
    };
    var _emscripten_glGenQueriesEXT = _glGenQueriesEXT;
    var _glGenRenderbuffers = (n, renderbuffers) => {
      __glGenObject(n, renderbuffers, "createRenderbuffer", GL.renderbuffers);
    };
    var _emscripten_glGenRenderbuffers = _glGenRenderbuffers;
    var _glGenSamplers = (n, samplers) => {
      __glGenObject(n, samplers, "createSampler", GL.samplers);
    };
    var _emscripten_glGenSamplers = _glGenSamplers;
    var _glGenTextures = (n, textures) => {
      __glGenObject(n, textures, "createTexture", GL.textures);
    };
    var _emscripten_glGenTextures = _glGenTextures;
    var _glGenTransformFeedbacks = (n, ids) => {
      __glGenObject(n, ids, "createTransformFeedback", GL.transformFeedbacks);
    };
    var _emscripten_glGenTransformFeedbacks = _glGenTransformFeedbacks;
    function _glGenVertexArrays(n, arrays) {
      __glGenObject(n, arrays, "createVertexArray", GL.vaos);
    }
    var _emscripten_glGenVertexArrays = _glGenVertexArrays;
    var _glGenVertexArraysOES = _glGenVertexArrays;
    var _emscripten_glGenVertexArraysOES = _glGenVertexArraysOES;
    function _glGenerateMipmap(x0) {
      GLctx.generateMipmap(x0);
    }
    var _emscripten_glGenerateMipmap = _glGenerateMipmap;
    var __glGetActiveAttribOrUniform = (funcName, program, index, bufSize, length, size, type, name) => {
      program = GL.programs[program];
      var info = GLctx[funcName](program, index);
      if (info) {
        var numBytesWrittenExclNull = name && stringToUTF8(info.name, name, bufSize);
        if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
        if (size) HEAP32[size >> 2] = info.size;
        if (type) HEAP32[type >> 2] = info.type;
      }
    };
    var _glGetActiveAttrib = (program, index, bufSize, length, size, type, name) => {
      __glGetActiveAttribOrUniform("getActiveAttrib", program, index, bufSize, length, size, type, name);
    };
    var _emscripten_glGetActiveAttrib = _glGetActiveAttrib;
    var _glGetActiveUniform = (program, index, bufSize, length, size, type, name) => {
      __glGetActiveAttribOrUniform("getActiveUniform", program, index, bufSize, length, size, type, name);
    };
    var _emscripten_glGetActiveUniform = _glGetActiveUniform;
    var _glGetActiveUniformBlockName = (program, uniformBlockIndex, bufSize, length, uniformBlockName) => {
      program = GL.programs[program];
      var result = GLctx.getActiveUniformBlockName(program, uniformBlockIndex);
      if (!result) return;
      if (uniformBlockName && bufSize > 0) {
        var numBytesWrittenExclNull = stringToUTF8(result, uniformBlockName, bufSize);
        if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
      } else {
        if (length) HEAP32[length >> 2] = 0;
      }
    };
    var _emscripten_glGetActiveUniformBlockName = _glGetActiveUniformBlockName;
    var _glGetActiveUniformBlockiv = (program, uniformBlockIndex, pname, params) => {
      if (!params) {
        GL.recordError(1281);
        return;
      }
      program = GL.programs[program];
      if (pname == 35393) {
        var name = GLctx.getActiveUniformBlockName(program, uniformBlockIndex);
        HEAP32[params >> 2] = name.length + 1;
        return;
      }
      var result = GLctx.getActiveUniformBlockParameter(program, uniformBlockIndex, pname);
      if (result === null) return;
      if (pname == 35395) {
        for (var i = 0; i < result.length; i++) {
          HEAP32[(params + i * 4) >> 2] = result[i];
        }
      } else {
        HEAP32[params >> 2] = result;
      }
    };
    var _emscripten_glGetActiveUniformBlockiv = _glGetActiveUniformBlockiv;
    var _glGetActiveUniformsiv = (program, uniformCount, uniformIndices, pname, params) => {
      if (!params) {
        GL.recordError(1281);
        return;
      }
      if (uniformCount > 0 && uniformIndices == 0) {
        GL.recordError(1281);
        return;
      }
      program = GL.programs[program];
      var ids = [];
      for (var i = 0; i < uniformCount; i++) {
        ids.push(HEAP32[(uniformIndices + i * 4) >> 2]);
      }
      var result = GLctx.getActiveUniforms(program, ids, pname);
      if (!result) return;
      var len = result.length;
      for (var i = 0; i < len; i++) {
        HEAP32[(params + i * 4) >> 2] = result[i];
      }
    };
    var _emscripten_glGetActiveUniformsiv = _glGetActiveUniformsiv;
    var _glGetAttachedShaders = (program, maxCount, count, shaders) => {
      var result = GLctx.getAttachedShaders(GL.programs[program]);
      var len = result.length;
      if (len > maxCount) {
        len = maxCount;
      }
      HEAP32[count >> 2] = len;
      for (var i = 0; i < len; ++i) {
        var id = GL.shaders.indexOf(result[i]);
        HEAP32[(shaders + i * 4) >> 2] = id;
      }
    };
    var _emscripten_glGetAttachedShaders = _glGetAttachedShaders;
    var _glGetAttribLocation = (program, name) => GLctx.getAttribLocation(GL.programs[program], UTF8ToString(name));
    var _emscripten_glGetAttribLocation = _glGetAttribLocation;
    var writeI53ToI64 = (ptr, num) => {
      HEAPU32[ptr >> 2] = num;
      var lower = HEAPU32[ptr >> 2];
      HEAPU32[(ptr + 4) >> 2] = (num - lower) / 4294967296;
    };
    var emscriptenWebGLGet = (name_, p, type) => {
      if (!p) {
        GL.recordError(1281);
        return;
      }
      var ret = undefined;
      switch (name_) {
        case 36346:
          ret = 1;
          break;
        case 36344:
          if (type != 0 && type != 1) {
            GL.recordError(1280);
          }
          return;
        case 34814:
        case 36345:
          ret = 0;
          break;
        case 34466:
          var formats = GLctx.getParameter(34467);
          ret = formats ? formats.length : 0;
          break;
        case 33309:
          if (GL.currentContext.version < 2) {
            GL.recordError(1282);
            return;
          }
          var exts = GLctx.getSupportedExtensions() || [];
          ret = 2 * exts.length;
          break;
        case 33307:
        case 33308:
          if (GL.currentContext.version < 2) {
            GL.recordError(1280);
            return;
          }
          ret = name_ == 33307 ? 3 : 0;
          break;
      }
      if (ret === undefined) {
        var result = GLctx.getParameter(name_);
        switch (typeof result) {
          case "number":
            ret = result;
            break;
          case "boolean":
            ret = result ? 1 : 0;
            break;
          case "string":
            GL.recordError(1280);
            return;
          case "object":
            if (result === null) {
              switch (name_) {
                case 34964:
                case 35725:
                case 34965:
                case 36006:
                case 36007:
                case 32873:
                case 34229:
                case 36662:
                case 36663:
                case 35053:
                case 35055:
                case 36010:
                case 35097:
                case 35869:
                case 32874:
                case 36389:
                case 35983:
                case 35368:
                case 34068: {
                  ret = 0;
                  break;
                }
                default: {
                  GL.recordError(1280);
                  return;
                }
              }
            } else if (
              result instanceof Float32Array ||
              result instanceof Uint32Array ||
              result instanceof Int32Array ||
              result instanceof Array
            ) {
              for (var i = 0; i < result.length; ++i) {
                switch (type) {
                  case 0:
                    HEAP32[(p + i * 4) >> 2] = result[i];
                    break;
                  case 2:
                    HEAPF32[(p + i * 4) >> 2] = result[i];
                    break;
                  case 4:
                    HEAP8[(p + i) >> 0] = result[i] ? 1 : 0;
                    break;
                }
              }
              return;
            } else {
              try {
                ret = result.name | 0;
              } catch (e) {
                GL.recordError(1280);
                err(
                  "GL_INVALID_ENUM in glGet" +
                    type +
                    "v: Unknown object returned from WebGL getParameter(" +
                    name_ +
                    ")! (error: " +
                    e +
                    ")"
                );
                return;
              }
            }
            break;
          default:
            GL.recordError(1280);
            err(
              "GL_INVALID_ENUM in glGet" +
                type +
                "v: Native code calling glGet" +
                type +
                "v(" +
                name_ +
                ") and it returns " +
                result +
                " of type " +
                typeof result +
                "!"
            );
            return;
        }
      }
      switch (type) {
        case 1:
          writeI53ToI64(p, ret);
          break;
        case 0:
          HEAP32[p >> 2] = ret;
          break;
        case 2:
          HEAPF32[p >> 2] = ret;
          break;
        case 4:
          HEAP8[p >> 0] = ret ? 1 : 0;
          break;
      }
    };
    var _glGetBooleanv = (name_, p) => {
      emscriptenWebGLGet(name_, p, 4);
    };
    var _emscripten_glGetBooleanv = _glGetBooleanv;
    var _glGetBufferParameteri64v = (target, value, data) => {
      if (!data) {
        GL.recordError(1281);
        return;
      }
      writeI53ToI64(data, GLctx.getBufferParameter(target, value));
    };
    var _emscripten_glGetBufferParameteri64v = _glGetBufferParameteri64v;
    var _glGetBufferParameteriv = (target, value, data) => {
      if (!data) {
        GL.recordError(1281);
        return;
      }
      HEAP32[data >> 2] = GLctx.getBufferParameter(target, value);
    };
    var _emscripten_glGetBufferParameteriv = _glGetBufferParameteriv;
    var _glGetError = () => {
      var error = GLctx.getError() || GL.lastError;
      GL.lastError = 0;
      return error;
    };
    var _emscripten_glGetError = _glGetError;
    var _glGetFloatv = (name_, p) => {
      emscriptenWebGLGet(name_, p, 2);
    };
    var _emscripten_glGetFloatv = _glGetFloatv;
    var _glGetFragDataLocation = (program, name) => GLctx.getFragDataLocation(GL.programs[program], UTF8ToString(name));
    var _emscripten_glGetFragDataLocation = _glGetFragDataLocation;
    var _glGetFramebufferAttachmentParameteriv = (target, attachment, pname, params) => {
      var result = GLctx.getFramebufferAttachmentParameter(target, attachment, pname);
      if (result instanceof WebGLRenderbuffer || result instanceof WebGLTexture) {
        result = result.name | 0;
      }
      HEAP32[params >> 2] = result;
    };
    var _emscripten_glGetFramebufferAttachmentParameteriv = _glGetFramebufferAttachmentParameteriv;
    var emscriptenWebGLGetIndexed = (target, index, data, type) => {
      if (!data) {
        GL.recordError(1281);
        return;
      }
      var result = GLctx.getIndexedParameter(target, index);
      var ret;
      switch (typeof result) {
        case "boolean":
          ret = result ? 1 : 0;
          break;
        case "number":
          ret = result;
          break;
        case "object":
          if (result === null) {
            switch (target) {
              case 35983:
              case 35368:
                ret = 0;
                break;
              default: {
                GL.recordError(1280);
                return;
              }
            }
          } else if (result instanceof WebGLBuffer) {
            ret = result.name | 0;
          } else {
            GL.recordError(1280);
            return;
          }
          break;
        default:
          GL.recordError(1280);
          return;
      }
      switch (type) {
        case 1:
          writeI53ToI64(data, ret);
          break;
        case 0:
          HEAP32[data >> 2] = ret;
          break;
        case 2:
          HEAPF32[data >> 2] = ret;
          break;
        case 4:
          HEAP8[data >> 0] = ret ? 1 : 0;
          break;
        default:
          throw "internal emscriptenWebGLGetIndexed() error, bad type: " + type;
      }
    };
    var _glGetInteger64i_v = (target, index, data) => emscriptenWebGLGetIndexed(target, index, data, 1);
    var _emscripten_glGetInteger64i_v = _glGetInteger64i_v;
    var _glGetInteger64v = (name_, p) => {
      emscriptenWebGLGet(name_, p, 1);
    };
    var _emscripten_glGetInteger64v = _glGetInteger64v;
    var _glGetIntegeri_v = (target, index, data) => emscriptenWebGLGetIndexed(target, index, data, 0);
    var _emscripten_glGetIntegeri_v = _glGetIntegeri_v;
    var _glGetIntegerv = (name_, p) => {
      emscriptenWebGLGet(name_, p, 0);
    };
    var _emscripten_glGetIntegerv = _glGetIntegerv;
    var _glGetInternalformativ = (target, internalformat, pname, bufSize, params) => {
      if (bufSize < 0) {
        GL.recordError(1281);
        return;
      }
      if (!params) {
        GL.recordError(1281);
        return;
      }
      var ret = GLctx.getInternalformatParameter(target, internalformat, pname);
      if (ret === null) return;
      for (var i = 0; i < ret.length && i < bufSize; ++i) {
        HEAP32[(params + i * 4) >> 2] = ret[i];
      }
    };
    var _emscripten_glGetInternalformativ = _glGetInternalformativ;
    var _glGetProgramBinary = (program, bufSize, length, binaryFormat, binary) => {
      GL.recordError(1282);
    };
    var _emscripten_glGetProgramBinary = _glGetProgramBinary;
    var _glGetProgramInfoLog = (program, maxLength, length, infoLog) => {
      var log = GLctx.getProgramInfoLog(GL.programs[program]);
      if (log === null) log = "(unknown error)";
      var numBytesWrittenExclNull = maxLength > 0 && infoLog ? stringToUTF8(log, infoLog, maxLength) : 0;
      if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
    };
    var _emscripten_glGetProgramInfoLog = _glGetProgramInfoLog;
    var _glGetProgramiv = (program, pname, p) => {
      if (!p) {
        GL.recordError(1281);
        return;
      }
      if (program >= GL.counter) {
        GL.recordError(1281);
        return;
      }
      program = GL.programs[program];
      if (pname == 35716) {
        var log = GLctx.getProgramInfoLog(program);
        if (log === null) log = "(unknown error)";
        HEAP32[p >> 2] = log.length + 1;
      } else if (pname == 35719) {
        if (!program.maxUniformLength) {
          for (var i = 0; i < GLctx.getProgramParameter(program, 35718); ++i) {
            program.maxUniformLength = Math.max(program.maxUniformLength, GLctx.getActiveUniform(program, i).name.length + 1);
          }
        }
        HEAP32[p >> 2] = program.maxUniformLength;
      } else if (pname == 35722) {
        if (!program.maxAttributeLength) {
          for (var i = 0; i < GLctx.getProgramParameter(program, 35721); ++i) {
            program.maxAttributeLength = Math.max(program.maxAttributeLength, GLctx.getActiveAttrib(program, i).name.length + 1);
          }
        }
        HEAP32[p >> 2] = program.maxAttributeLength;
      } else if (pname == 35381) {
        if (!program.maxUniformBlockNameLength) {
          for (var i = 0; i < GLctx.getProgramParameter(program, 35382); ++i) {
            program.maxUniformBlockNameLength = Math.max(
              program.maxUniformBlockNameLength,
              GLctx.getActiveUniformBlockName(program, i).length + 1
            );
          }
        }
        HEAP32[p >> 2] = program.maxUniformBlockNameLength;
      } else {
        HEAP32[p >> 2] = GLctx.getProgramParameter(program, pname);
      }
    };
    var _emscripten_glGetProgramiv = _glGetProgramiv;
    var _glGetQueryObjecti64vEXT = (id, pname, params) => {
      if (!params) {
        GL.recordError(1281);
        return;
      }
      var query = GL.queries[id];
      var param;
      if (GL.currentContext.version < 2) {
        param = GLctx.disjointTimerQueryExt["getQueryObjectEXT"](query, pname);
      } else {
        param = GLctx.getQueryParameter(query, pname);
      }
      var ret;
      if (typeof param == "boolean") {
        ret = param ? 1 : 0;
      } else {
        ret = param;
      }
      writeI53ToI64(params, ret);
    };
    var _emscripten_glGetQueryObjecti64vEXT = _glGetQueryObjecti64vEXT;
    var _glGetQueryObjectivEXT = (id, pname, params) => {
      if (!params) {
        GL.recordError(1281);
        return;
      }
      var query = GL.queries[id];
      var param = GLctx.disjointTimerQueryExt["getQueryObjectEXT"](query, pname);
      var ret;
      if (typeof param == "boolean") {
        ret = param ? 1 : 0;
      } else {
        ret = param;
      }
      HEAP32[params >> 2] = ret;
    };
    var _emscripten_glGetQueryObjectivEXT = _glGetQueryObjectivEXT;
    var _glGetQueryObjectui64vEXT = _glGetQueryObjecti64vEXT;
    var _emscripten_glGetQueryObjectui64vEXT = _glGetQueryObjectui64vEXT;
    var _glGetQueryObjectuiv = (id, pname, params) => {
      if (!params) {
        GL.recordError(1281);
        return;
      }
      var query = GL.queries[id];
      var param = GLctx.getQueryParameter(query, pname);
      var ret;
      if (typeof param == "boolean") {
        ret = param ? 1 : 0;
      } else {
        ret = param;
      }
      HEAP32[params >> 2] = ret;
    };
    var _emscripten_glGetQueryObjectuiv = _glGetQueryObjectuiv;
    var _glGetQueryObjectuivEXT = _glGetQueryObjectivEXT;
    var _emscripten_glGetQueryObjectuivEXT = _glGetQueryObjectuivEXT;
    var _glGetQueryiv = (target, pname, params) => {
      if (!params) {
        GL.recordError(1281);
        return;
      }
      HEAP32[params >> 2] = GLctx.getQuery(target, pname);
    };
    var _emscripten_glGetQueryiv = _glGetQueryiv;
    var _glGetQueryivEXT = (target, pname, params) => {
      if (!params) {
        GL.recordError(1281);
        return;
      }
      HEAP32[params >> 2] = GLctx.disjointTimerQueryExt["getQueryEXT"](target, pname);
    };
    var _emscripten_glGetQueryivEXT = _glGetQueryivEXT;
    var _glGetRenderbufferParameteriv = (target, pname, params) => {
      if (!params) {
        GL.recordError(1281);
        return;
      }
      HEAP32[params >> 2] = GLctx.getRenderbufferParameter(target, pname);
    };
    var _emscripten_glGetRenderbufferParameteriv = _glGetRenderbufferParameteriv;
    var _glGetSamplerParameterfv = (sampler, pname, params) => {
      if (!params) {
        GL.recordError(1281);
        return;
      }
      HEAPF32[params >> 2] = GLctx.getSamplerParameter(GL.samplers[sampler], pname);
    };
    var _emscripten_glGetSamplerParameterfv = _glGetSamplerParameterfv;
    var _glGetSamplerParameteriv = (sampler, pname, params) => {
      if (!params) {
        GL.recordError(1281);
        return;
      }
      HEAP32[params >> 2] = GLctx.getSamplerParameter(GL.samplers[sampler], pname);
    };
    var _emscripten_glGetSamplerParameteriv = _glGetSamplerParameteriv;
    var _glGetShaderInfoLog = (shader, maxLength, length, infoLog) => {
      var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
      if (log === null) log = "(unknown error)";
      var numBytesWrittenExclNull = maxLength > 0 && infoLog ? stringToUTF8(log, infoLog, maxLength) : 0;
      if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
    };
    var _emscripten_glGetShaderInfoLog = _glGetShaderInfoLog;
    var _glGetShaderPrecisionFormat = (shaderType, precisionType, range, precision) => {
      var result = GLctx.getShaderPrecisionFormat(shaderType, precisionType);
      HEAP32[range >> 2] = result.rangeMin;
      HEAP32[(range + 4) >> 2] = result.rangeMax;
      HEAP32[precision >> 2] = result.precision;
    };
    var _emscripten_glGetShaderPrecisionFormat = _glGetShaderPrecisionFormat;
    var _glGetShaderSource = (shader, bufSize, length, source) => {
      var result = GLctx.getShaderSource(GL.shaders[shader]);
      if (!result) return;
      var numBytesWrittenExclNull = bufSize > 0 && source ? stringToUTF8(result, source, bufSize) : 0;
      if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
    };
    var _emscripten_glGetShaderSource = _glGetShaderSource;
    var _glGetShaderiv = (shader, pname, p) => {
      if (!p) {
        GL.recordError(1281);
        return;
      }
      if (pname == 35716) {
        var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
        if (log === null) log = "(unknown error)";
        var logLength = log ? log.length + 1 : 0;
        HEAP32[p >> 2] = logLength;
      } else if (pname == 35720) {
        var source = GLctx.getShaderSource(GL.shaders[shader]);
        var sourceLength = source ? source.length + 1 : 0;
        HEAP32[p >> 2] = sourceLength;
      } else {
        HEAP32[p >> 2] = GLctx.getShaderParameter(GL.shaders[shader], pname);
      }
    };
    var _emscripten_glGetShaderiv = _glGetShaderiv;
    var stringToNewUTF8 = (str) => {
      var size = lengthBytesUTF8(str) + 1;
      var ret = _malloc(size);
      if (ret) stringToUTF8(str, ret, size);
      return ret;
    };
    var _glGetString = (name_) => {
      var ret = GL.stringCache[name_];
      if (!ret) {
        switch (name_) {
          case 7939:
            var exts = GLctx.getSupportedExtensions() || [];
            exts = exts.concat(exts.map((e) => "GL_" + e));
            ret = stringToNewUTF8(exts.join(" "));
            break;
          case 7936:
          case 7937:
          case 37445:
          case 37446:
            var s = GLctx.getParameter(name_);
            if (!s) {
              GL.recordError(1280);
            }
            ret = s && stringToNewUTF8(s);
            break;
          case 7938:
            var glVersion = GLctx.getParameter(7938);
            if (GL.currentContext.version >= 2) glVersion = "OpenGL ES 3.0 (" + glVersion + ")";
            else {
              glVersion = "OpenGL ES 2.0 (" + glVersion + ")";
            }
            ret = stringToNewUTF8(glVersion);
            break;
          case 35724:
            var glslVersion = GLctx.getParameter(35724);
            var ver_re = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
            var ver_num = glslVersion.match(ver_re);
            if (ver_num !== null) {
              if (ver_num[1].length == 3) ver_num[1] = ver_num[1] + "0";
              glslVersion = "OpenGL ES GLSL ES " + ver_num[1] + " (" + glslVersion + ")";
            }
            ret = stringToNewUTF8(glslVersion);
            break;
          default:
            GL.recordError(1280);
        }
        GL.stringCache[name_] = ret;
      }
      return ret;
    };
    var _emscripten_glGetString = _glGetString;
    var _glGetStringi = (name, index) => {
      if (GL.currentContext.version < 2) {
        GL.recordError(1282);
        return 0;
      }
      var stringiCache = GL.stringiCache[name];
      if (stringiCache) {
        if (index < 0 || index >= stringiCache.length) {
          GL.recordError(1281);
          return 0;
        }
        return stringiCache[index];
      }
      switch (name) {
        case 7939:
          var exts = GLctx.getSupportedExtensions() || [];
          exts = exts.concat(
            exts.map(function (e) {
              return "GL_" + e;
            })
          );
          exts = exts.map(function (e) {
            return stringToNewUTF8(e);
          });
          stringiCache = GL.stringiCache[name] = exts;
          if (index < 0 || index >= stringiCache.length) {
            GL.recordError(1281);
            return 0;
          }
          return stringiCache[index];
        default:
          GL.recordError(1280);
          return 0;
      }
    };
    var _emscripten_glGetStringi = _glGetStringi;
    var _glGetSynciv = (sync, pname, bufSize, length, values) => {
      if (bufSize < 0) {
        GL.recordError(1281);
        return;
      }
      if (!values) {
        GL.recordError(1281);
        return;
      }
      var ret = GLctx.getSyncParameter(GL.syncs[sync], pname);
      if (ret !== null) {
        HEAP32[values >> 2] = ret;
        if (length) HEAP32[length >> 2] = 1;
      }
    };
    var _emscripten_glGetSynciv = _glGetSynciv;
    var _glGetTexParameterfv = (target, pname, params) => {
      if (!params) {
        GL.recordError(1281);
        return;
      }
      HEAPF32[params >> 2] = GLctx.getTexParameter(target, pname);
    };
    var _emscripten_glGetTexParameterfv = _glGetTexParameterfv;
    var _glGetTexParameteriv = (target, pname, params) => {
      if (!params) {
        GL.recordError(1281);
        return;
      }
      HEAP32[params >> 2] = GLctx.getTexParameter(target, pname);
    };
    var _emscripten_glGetTexParameteriv = _glGetTexParameteriv;
    var _glGetTransformFeedbackVarying = (program, index, bufSize, length, size, type, name) => {
      program = GL.programs[program];
      var info = GLctx.getTransformFeedbackVarying(program, index);
      if (!info) return;
      if (name && bufSize > 0) {
        var numBytesWrittenExclNull = stringToUTF8(info.name, name, bufSize);
        if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
      } else {
        if (length) HEAP32[length >> 2] = 0;
      }
      if (size) HEAP32[size >> 2] = info.size;
      if (type) HEAP32[type >> 2] = info.type;
    };
    var _emscripten_glGetTransformFeedbackVarying = _glGetTransformFeedbackVarying;
    var _glGetUniformBlockIndex = (program, uniformBlockName) =>
      GLctx.getUniformBlockIndex(GL.programs[program], UTF8ToString(uniformBlockName));
    var _emscripten_glGetUniformBlockIndex = _glGetUniformBlockIndex;
    var _glGetUniformIndices = (program, uniformCount, uniformNames, uniformIndices) => {
      if (!uniformIndices) {
        GL.recordError(1281);
        return;
      }
      if (uniformCount > 0 && (uniformNames == 0 || uniformIndices == 0)) {
        GL.recordError(1281);
        return;
      }
      program = GL.programs[program];
      var names = [];
      for (var i = 0; i < uniformCount; i++) names.push(UTF8ToString(HEAP32[(uniformNames + i * 4) >> 2]));
      var result = GLctx.getUniformIndices(program, names);
      if (!result) return;
      var len = result.length;
      for (var i = 0; i < len; i++) {
        HEAP32[(uniformIndices + i * 4) >> 2] = result[i];
      }
    };
    var _emscripten_glGetUniformIndices = _glGetUniformIndices;
    var jstoi_q = (str) => parseInt(str);
    var webglGetLeftBracePos = (name) => name.slice(-1) == "]" && name.lastIndexOf("[");
    var webglPrepareUniformLocationsBeforeFirstUse = (program) => {
      var uniformLocsById = program.uniformLocsById,
        uniformSizeAndIdsByName = program.uniformSizeAndIdsByName,
        i,
        j;
      if (!uniformLocsById) {
        program.uniformLocsById = uniformLocsById = {};
        program.uniformArrayNamesById = {};
        for (i = 0; i < GLctx.getProgramParameter(program, 35718); ++i) {
          var u = GLctx.getActiveUniform(program, i);
          var nm = u.name;
          var sz = u.size;
          var lb = webglGetLeftBracePos(nm);
          var arrayName = lb > 0 ? nm.slice(0, lb) : nm;
          var id = program.uniformIdCounter;
          program.uniformIdCounter += sz;
          uniformSizeAndIdsByName[arrayName] = [sz, id];
          for (j = 0; j < sz; ++j) {
            uniformLocsById[id] = j;
            program.uniformArrayNamesById[id++] = arrayName;
          }
        }
      }
    };
    var _glGetUniformLocation = (program, name) => {
      name = UTF8ToString(name);
      if ((program = GL.programs[program])) {
        webglPrepareUniformLocationsBeforeFirstUse(program);
        var uniformLocsById = program.uniformLocsById;
        var arrayIndex = 0;
        var uniformBaseName = name;
        var leftBrace = webglGetLeftBracePos(name);
        if (leftBrace > 0) {
          arrayIndex = jstoi_q(name.slice(leftBrace + 1)) >>> 0;
          uniformBaseName = name.slice(0, leftBrace);
        }
        var sizeAndId = program.uniformSizeAndIdsByName[uniformBaseName];
        if (sizeAndId && arrayIndex < sizeAndId[0]) {
          arrayIndex += sizeAndId[1];
          if ((uniformLocsById[arrayIndex] = uniformLocsById[arrayIndex] || GLctx.getUniformLocation(program, name))) {
            return arrayIndex;
          }
        }
      } else {
        GL.recordError(1281);
      }
      return -1;
    };
    var _emscripten_glGetUniformLocation = _glGetUniformLocation;
    var webglGetUniformLocation = (location) => {
      var p = GLctx.currentProgram;
      if (p) {
        var webglLoc = p.uniformLocsById[location];
        if (typeof webglLoc == "number") {
          p.uniformLocsById[location] = webglLoc = GLctx.getUniformLocation(
            p,
            p.uniformArrayNamesById[location] + (webglLoc > 0 ? "[" + webglLoc + "]" : "")
          );
        }
        return webglLoc;
      } else {
        GL.recordError(1282);
      }
    };
    var emscriptenWebGLGetUniform = (program, location, params, type) => {
      if (!params) {
        GL.recordError(1281);
        return;
      }
      program = GL.programs[program];
      webglPrepareUniformLocationsBeforeFirstUse(program);
      var data = GLctx.getUniform(program, webglGetUniformLocation(location));
      if (typeof data == "number" || typeof data == "boolean") {
        switch (type) {
          case 0:
            HEAP32[params >> 2] = data;
            break;
          case 2:
            HEAPF32[params >> 2] = data;
            break;
        }
      } else {
        for (var i = 0; i < data.length; i++) {
          switch (type) {
            case 0:
              HEAP32[(params + i * 4) >> 2] = data[i];
              break;
            case 2:
              HEAPF32[(params + i * 4) >> 2] = data[i];
              break;
          }
        }
      }
    };
    var _glGetUniformfv = (program, location, params) => {
      emscriptenWebGLGetUniform(program, location, params, 2);
    };
    var _emscripten_glGetUniformfv = _glGetUniformfv;
    var _glGetUniformiv = (program, location, params) => {
      emscriptenWebGLGetUniform(program, location, params, 0);
    };
    var _emscripten_glGetUniformiv = _glGetUniformiv;
    var _glGetUniformuiv = (program, location, params) => emscriptenWebGLGetUniform(program, location, params, 0);
    var _emscripten_glGetUniformuiv = _glGetUniformuiv;
    var emscriptenWebGLGetVertexAttrib = (index, pname, params, type) => {
      if (!params) {
        GL.recordError(1281);
        return;
      }
      var data = GLctx.getVertexAttrib(index, pname);
      if (pname == 34975) {
        HEAP32[params >> 2] = data && data["name"];
      } else if (typeof data == "number" || typeof data == "boolean") {
        switch (type) {
          case 0:
            HEAP32[params >> 2] = data;
            break;
          case 2:
            HEAPF32[params >> 2] = data;
            break;
          case 5:
            HEAP32[params >> 2] = Math.fround(data);
            break;
        }
      } else {
        for (var i = 0; i < data.length; i++) {
          switch (type) {
            case 0:
              HEAP32[(params + i * 4) >> 2] = data[i];
              break;
            case 2:
              HEAPF32[(params + i * 4) >> 2] = data[i];
              break;
            case 5:
              HEAP32[(params + i * 4) >> 2] = Math.fround(data[i]);
              break;
          }
        }
      }
    };
    var _glGetVertexAttribIiv = (index, pname, params) => {
      emscriptenWebGLGetVertexAttrib(index, pname, params, 0);
    };
    var _emscripten_glGetVertexAttribIiv = _glGetVertexAttribIiv;
    var _glGetVertexAttribIuiv = _glGetVertexAttribIiv;
    var _emscripten_glGetVertexAttribIuiv = _glGetVertexAttribIuiv;
    var _glGetVertexAttribPointerv = (index, pname, pointer) => {
      if (!pointer) {
        GL.recordError(1281);
        return;
      }
      HEAP32[pointer >> 2] = GLctx.getVertexAttribOffset(index, pname);
    };
    var _emscripten_glGetVertexAttribPointerv = _glGetVertexAttribPointerv;
    var _glGetVertexAttribfv = (index, pname, params) => {
      emscriptenWebGLGetVertexAttrib(index, pname, params, 2);
    };
    var _emscripten_glGetVertexAttribfv = _glGetVertexAttribfv;
    var _glGetVertexAttribiv = (index, pname, params) => {
      emscriptenWebGLGetVertexAttrib(index, pname, params, 5);
    };
    var _emscripten_glGetVertexAttribiv = _glGetVertexAttribiv;
    function _glHint(x0, x1) {
      GLctx.hint(x0, x1);
    }
    var _emscripten_glHint = _glHint;
    var _glInvalidateFramebuffer = (target, numAttachments, attachments) => {
      var list = tempFixedLengthArray[numAttachments];
      for (var i = 0; i < numAttachments; i++) {
        list[i] = HEAP32[(attachments + i * 4) >> 2];
      }
      GLctx.invalidateFramebuffer(target, list);
    };
    var _emscripten_glInvalidateFramebuffer = _glInvalidateFramebuffer;
    var _glInvalidateSubFramebuffer = (target, numAttachments, attachments, x, y, width, height) => {
      var list = tempFixedLengthArray[numAttachments];
      for (var i = 0; i < numAttachments; i++) {
        list[i] = HEAP32[(attachments + i * 4) >> 2];
      }
      GLctx.invalidateSubFramebuffer(target, list, x, y, width, height);
    };
    var _emscripten_glInvalidateSubFramebuffer = _glInvalidateSubFramebuffer;
    var _glIsBuffer = (buffer) => {
      var b = GL.buffers[buffer];
      if (!b) return 0;
      return GLctx.isBuffer(b);
    };
    var _emscripten_glIsBuffer = _glIsBuffer;
    function _glIsEnabled(x0) {
      return GLctx.isEnabled(x0);
    }
    var _emscripten_glIsEnabled = _glIsEnabled;
    var _glIsFramebuffer = (framebuffer) => {
      var fb = GL.framebuffers[framebuffer];
      if (!fb) return 0;
      return GLctx.isFramebuffer(fb);
    };
    var _emscripten_glIsFramebuffer = _glIsFramebuffer;
    var _glIsProgram = (program) => {
      program = GL.programs[program];
      if (!program) return 0;
      return GLctx.isProgram(program);
    };
    var _emscripten_glIsProgram = _glIsProgram;
    var _glIsQuery = (id) => {
      var query = GL.queries[id];
      if (!query) return 0;
      return GLctx.isQuery(query);
    };
    var _emscripten_glIsQuery = _glIsQuery;
    var _glIsQueryEXT = (id) => {
      var query = GL.queries[id];
      if (!query) return 0;
      return GLctx.disjointTimerQueryExt["isQueryEXT"](query);
    };
    var _emscripten_glIsQueryEXT = _glIsQueryEXT;
    var _glIsRenderbuffer = (renderbuffer) => {
      var rb = GL.renderbuffers[renderbuffer];
      if (!rb) return 0;
      return GLctx.isRenderbuffer(rb);
    };
    var _emscripten_glIsRenderbuffer = _glIsRenderbuffer;
    var _glIsSampler = (id) => {
      var sampler = GL.samplers[id];
      if (!sampler) return 0;
      return GLctx.isSampler(sampler);
    };
    var _emscripten_glIsSampler = _glIsSampler;
    var _glIsShader = (shader) => {
      var s = GL.shaders[shader];
      if (!s) return 0;
      return GLctx.isShader(s);
    };
    var _emscripten_glIsShader = _glIsShader;
    var _glIsSync = (sync) => GLctx.isSync(GL.syncs[sync]);
    var _emscripten_glIsSync = _glIsSync;
    var _glIsTexture = (id) => {
      var texture = GL.textures[id];
      if (!texture) return 0;
      return GLctx.isTexture(texture);
    };
    var _emscripten_glIsTexture = _glIsTexture;
    var _glIsTransformFeedback = (id) => GLctx.isTransformFeedback(GL.transformFeedbacks[id]);
    var _emscripten_glIsTransformFeedback = _glIsTransformFeedback;
    var _glIsVertexArray = (array) => {
      var vao = GL.vaos[array];
      if (!vao) return 0;
      return GLctx.isVertexArray(vao);
    };
    var _emscripten_glIsVertexArray = _glIsVertexArray;
    var _glIsVertexArrayOES = _glIsVertexArray;
    var _emscripten_glIsVertexArrayOES = _glIsVertexArrayOES;
    function _glLineWidth(x0) {
      GLctx.lineWidth(x0);
    }
    var _emscripten_glLineWidth = _glLineWidth;
    var _glLinkProgram = (program) => {
      program = GL.programs[program];
      GLctx.linkProgram(program);
      program.uniformLocsById = 0;
      program.uniformSizeAndIdsByName = {};
    };
    var _emscripten_glLinkProgram = _glLinkProgram;
    function _glPauseTransformFeedback() {
      GLctx.pauseTransformFeedback();
    }
    var _emscripten_glPauseTransformFeedback = _glPauseTransformFeedback;
    var _glPixelStorei = (pname, param) => {
      if (pname == 3317) {
        GL.unpackAlignment = param;
      }
      GLctx.pixelStorei(pname, param);
    };
    var _emscripten_glPixelStorei = _glPixelStorei;
    function _glPolygonOffset(x0, x1) {
      GLctx.polygonOffset(x0, x1);
    }
    var _emscripten_glPolygonOffset = _glPolygonOffset;
    var _glProgramBinary = (program, binaryFormat, binary, length) => {
      GL.recordError(1280);
    };
    var _emscripten_glProgramBinary = _glProgramBinary;
    var _glProgramParameteri = (program, pname, value) => {
      GL.recordError(1280);
    };
    var _emscripten_glProgramParameteri = _glProgramParameteri;
    var _glQueryCounterEXT = (id, target) => {
      GLctx.disjointTimerQueryExt["queryCounterEXT"](GL.queries[id], target);
    };
    var _emscripten_glQueryCounterEXT = _glQueryCounterEXT;
    function _glReadBuffer(x0) {
      GLctx.readBuffer(x0);
    }
    var _emscripten_glReadBuffer = _glReadBuffer;
    var computeUnpackAlignedImageSize = (width, height, sizePerPixel, alignment) => {
      function roundedToNextMultipleOf(x, y) {
        return (x + y - 1) & -y;
      }
      var plainRowSize = width * sizePerPixel;
      var alignedRowSize = roundedToNextMultipleOf(plainRowSize, alignment);
      return height * alignedRowSize;
    };
    var colorChannelsInGlTextureFormat = (format) => {
      var colorChannels = { 5: 3, 6: 4, 8: 2, 29502: 3, 29504: 4, 26917: 2, 26918: 2, 29846: 3, 29847: 4 };
      return colorChannels[format - 6402] || 1;
    };
    var heapObjectForWebGLType = (type) => {
      type -= 5120;
      if (type == 0) return HEAP8;
      if (type == 1) return HEAPU8;
      if (type == 2) return HEAP16;
      if (type == 4) return HEAP32;
      if (type == 6) return HEAPF32;
      if (type == 5 || type == 28922 || type == 28520 || type == 30779 || type == 30782) return HEAPU32;
      return HEAPU16;
    };
    var heapAccessShiftForWebGLHeap = (heap) => 31 - Math.clz32(heap.BYTES_PER_ELEMENT);
    var emscriptenWebGLGetTexPixelData = (type, format, width, height, pixels, internalFormat) => {
      var heap = heapObjectForWebGLType(type);
      var shift = heapAccessShiftForWebGLHeap(heap);
      var byteSize = 1 << shift;
      var sizePerPixel = colorChannelsInGlTextureFormat(format) * byteSize;
      var bytes = computeUnpackAlignedImageSize(width, height, sizePerPixel, GL.unpackAlignment);
      return heap.subarray(pixels >> shift, (pixels + bytes) >> shift);
    };
    var _glReadPixels = (x, y, width, height, format, type, pixels) => {
      if (GL.currentContext.version >= 2) {
        if (GLctx.currentPixelPackBufferBinding) {
          GLctx.readPixels(x, y, width, height, format, type, pixels);
        } else {
          var heap = heapObjectForWebGLType(type);
          GLctx.readPixels(x, y, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
        }
        return;
      }
      var pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, format);
      if (!pixelData) {
        GL.recordError(1280);
        return;
      }
      GLctx.readPixels(x, y, width, height, format, type, pixelData);
    };
    var _emscripten_glReadPixels = _glReadPixels;
    var _glReleaseShaderCompiler = () => {};
    var _emscripten_glReleaseShaderCompiler = _glReleaseShaderCompiler;
    function _glRenderbufferStorage(x0, x1, x2, x3) {
      GLctx.renderbufferStorage(x0, x1, x2, x3);
    }
    var _emscripten_glRenderbufferStorage = _glRenderbufferStorage;
    function _glRenderbufferStorageMultisample(x0, x1, x2, x3, x4) {
      GLctx.renderbufferStorageMultisample(x0, x1, x2, x3, x4);
    }
    var _emscripten_glRenderbufferStorageMultisample = _glRenderbufferStorageMultisample;
    function _glResumeTransformFeedback() {
      GLctx.resumeTransformFeedback();
    }
    var _emscripten_glResumeTransformFeedback = _glResumeTransformFeedback;
    var _glSampleCoverage = (value, invert) => {
      GLctx.sampleCoverage(value, !!invert);
    };
    var _emscripten_glSampleCoverage = _glSampleCoverage;
    var _glSamplerParameterf = (sampler, pname, param) => {
      GLctx.samplerParameterf(GL.samplers[sampler], pname, param);
    };
    var _emscripten_glSamplerParameterf = _glSamplerParameterf;
    var _glSamplerParameterfv = (sampler, pname, params) => {
      var param = HEAPF32[params >> 2];
      GLctx.samplerParameterf(GL.samplers[sampler], pname, param);
    };
    var _emscripten_glSamplerParameterfv = _glSamplerParameterfv;
    var _glSamplerParameteri = (sampler, pname, param) => {
      GLctx.samplerParameteri(GL.samplers[sampler], pname, param);
    };
    var _emscripten_glSamplerParameteri = _glSamplerParameteri;
    var _glSamplerParameteriv = (sampler, pname, params) => {
      var param = HEAP32[params >> 2];
      GLctx.samplerParameteri(GL.samplers[sampler], pname, param);
    };
    var _emscripten_glSamplerParameteriv = _glSamplerParameteriv;
    function _glScissor(x0, x1, x2, x3) {
      GLctx.scissor(x0, x1, x2, x3);
    }
    var _emscripten_glScissor = _glScissor;
    var _glShaderBinary = (count, shaders, binaryformat, binary, length) => {
      GL.recordError(1280);
    };
    var _emscripten_glShaderBinary = _glShaderBinary;
    var _glShaderSource = (shader, count, string, length) => {
      var source = GL.getSource(shader, count, string, length);
      GLctx.shaderSource(GL.shaders[shader], source);
    };
    var _emscripten_glShaderSource = _glShaderSource;
    function _glStencilFunc(x0, x1, x2) {
      GLctx.stencilFunc(x0, x1, x2);
    }
    var _emscripten_glStencilFunc = _glStencilFunc;
    function _glStencilFuncSeparate(x0, x1, x2, x3) {
      GLctx.stencilFuncSeparate(x0, x1, x2, x3);
    }
    var _emscripten_glStencilFuncSeparate = _glStencilFuncSeparate;
    function _glStencilMask(x0) {
      GLctx.stencilMask(x0);
    }
    var _emscripten_glStencilMask = _glStencilMask;
    function _glStencilMaskSeparate(x0, x1) {
      GLctx.stencilMaskSeparate(x0, x1);
    }
    var _emscripten_glStencilMaskSeparate = _glStencilMaskSeparate;
    function _glStencilOp(x0, x1, x2) {
      GLctx.stencilOp(x0, x1, x2);
    }
    var _emscripten_glStencilOp = _glStencilOp;
    function _glStencilOpSeparate(x0, x1, x2, x3) {
      GLctx.stencilOpSeparate(x0, x1, x2, x3);
    }
    var _emscripten_glStencilOpSeparate = _glStencilOpSeparate;
    var _glTexImage2D = (target, level, internalFormat, width, height, border, format, type, pixels) => {
      if (GL.currentContext.version >= 2) {
        if (GLctx.currentPixelUnpackBufferBinding) {
          GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels);
        } else if (pixels) {
          var heap = heapObjectForWebGLType(type);
          GLctx.texImage2D(
            target,
            level,
            internalFormat,
            width,
            height,
            border,
            format,
            type,
            heap,
            pixels >> heapAccessShiftForWebGLHeap(heap)
          );
        } else {
          GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, null);
        }
        return;
      }
      GLctx.texImage2D(
        target,
        level,
        internalFormat,
        width,
        height,
        border,
        format,
        type,
        pixels ? emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) : null
      );
    };
    var _emscripten_glTexImage2D = _glTexImage2D;
    var _glTexImage3D = (target, level, internalFormat, width, height, depth, border, format, type, pixels) => {
      if (GLctx.currentPixelUnpackBufferBinding) {
        GLctx.texImage3D(target, level, internalFormat, width, height, depth, border, format, type, pixels);
      } else if (pixels) {
        var heap = heapObjectForWebGLType(type);
        GLctx.texImage3D(
          target,
          level,
          internalFormat,
          width,
          height,
          depth,
          border,
          format,
          type,
          heap,
          pixels >> heapAccessShiftForWebGLHeap(heap)
        );
      } else {
        GLctx.texImage3D(target, level, internalFormat, width, height, depth, border, format, type, null);
      }
    };
    var _emscripten_glTexImage3D = _glTexImage3D;
    function _glTexParameterf(x0, x1, x2) {
      GLctx.texParameterf(x0, x1, x2);
    }
    var _emscripten_glTexParameterf = _glTexParameterf;
    var _glTexParameterfv = (target, pname, params) => {
      var param = HEAPF32[params >> 2];
      GLctx.texParameterf(target, pname, param);
    };
    var _emscripten_glTexParameterfv = _glTexParameterfv;
    function _glTexParameteri(x0, x1, x2) {
      GLctx.texParameteri(x0, x1, x2);
    }
    var _emscripten_glTexParameteri = _glTexParameteri;
    var _glTexParameteriv = (target, pname, params) => {
      var param = HEAP32[params >> 2];
      GLctx.texParameteri(target, pname, param);
    };
    var _emscripten_glTexParameteriv = _glTexParameteriv;
    function _glTexStorage2D(x0, x1, x2, x3, x4) {
      GLctx.texStorage2D(x0, x1, x2, x3, x4);
    }
    var _emscripten_glTexStorage2D = _glTexStorage2D;
    function _glTexStorage3D(x0, x1, x2, x3, x4, x5) {
      GLctx.texStorage3D(x0, x1, x2, x3, x4, x5);
    }
    var _emscripten_glTexStorage3D = _glTexStorage3D;
    var _glTexSubImage2D = (target, level, xoffset, yoffset, width, height, format, type, pixels) => {
      if (GL.currentContext.version >= 2) {
        if (GLctx.currentPixelUnpackBufferBinding) {
          GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels);
        } else if (pixels) {
          var heap = heapObjectForWebGLType(type);
          GLctx.texSubImage2D(
            target,
            level,
            xoffset,
            yoffset,
            width,
            height,
            format,
            type,
            heap,
            pixels >> heapAccessShiftForWebGLHeap(heap)
          );
        } else {
          GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, null);
        }
        return;
      }
      var pixelData = null;
      if (pixels) pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, 0);
      GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixelData);
    };
    var _emscripten_glTexSubImage2D = _glTexSubImage2D;
    var _glTexSubImage3D = (target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels) => {
      if (GLctx.currentPixelUnpackBufferBinding) {
        GLctx.texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels);
      } else if (pixels) {
        var heap = heapObjectForWebGLType(type);
        GLctx.texSubImage3D(
          target,
          level,
          xoffset,
          yoffset,
          zoffset,
          width,
          height,
          depth,
          format,
          type,
          heap,
          pixels >> heapAccessShiftForWebGLHeap(heap)
        );
      } else {
        GLctx.texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, null);
      }
    };
    var _emscripten_glTexSubImage3D = _glTexSubImage3D;
    var _glTransformFeedbackVaryings = (program, count, varyings, bufferMode) => {
      program = GL.programs[program];
      var vars = [];
      for (var i = 0; i < count; i++) vars.push(UTF8ToString(HEAP32[(varyings + i * 4) >> 2]));
      GLctx.transformFeedbackVaryings(program, vars, bufferMode);
    };
    var _emscripten_glTransformFeedbackVaryings = _glTransformFeedbackVaryings;
    var _glUniform1f = (location, v0) => {
      GLctx.uniform1f(webglGetUniformLocation(location), v0);
    };
    var _emscripten_glUniform1f = _glUniform1f;
    var miniTempWebGLFloatBuffers = [];
    var _glUniform1fv = (location, count, value) => {
      if (GL.currentContext.version >= 2) {
        count && GLctx.uniform1fv(webglGetUniformLocation(location), HEAPF32, value >> 2, count);
        return;
      }
      if (count <= 288) {
        var view = miniTempWebGLFloatBuffers[count - 1];
        for (var i = 0; i < count; ++i) {
          view[i] = HEAPF32[(value + 4 * i) >> 2];
        }
      } else {
        var view = HEAPF32.subarray(value >> 2, (value + count * 4) >> 2);
      }
      GLctx.uniform1fv(webglGetUniformLocation(location), view);
    };
    var _emscripten_glUniform1fv = _glUniform1fv;
    var _glUniform1i = (location, v0) => {
      GLctx.uniform1i(webglGetUniformLocation(location), v0);
    };
    var _emscripten_glUniform1i = _glUniform1i;
    var miniTempWebGLIntBuffers = [];
    var _glUniform1iv = (location, count, value) => {
      if (GL.currentContext.version >= 2) {
        count && GLctx.uniform1iv(webglGetUniformLocation(location), HEAP32, value >> 2, count);
        return;
      }
      if (count <= 288) {
        var view = miniTempWebGLIntBuffers[count - 1];
        for (var i = 0; i < count; ++i) {
          view[i] = HEAP32[(value + 4 * i) >> 2];
        }
      } else {
        var view = HEAP32.subarray(value >> 2, (value + count * 4) >> 2);
      }
      GLctx.uniform1iv(webglGetUniformLocation(location), view);
    };
    var _emscripten_glUniform1iv = _glUniform1iv;
    var _glUniform1ui = (location, v0) => {
      GLctx.uniform1ui(webglGetUniformLocation(location), v0);
    };
    var _emscripten_glUniform1ui = _glUniform1ui;
    var _glUniform1uiv = (location, count, value) => {
      count && GLctx.uniform1uiv(webglGetUniformLocation(location), HEAPU32, value >> 2, count);
    };
    var _emscripten_glUniform1uiv = _glUniform1uiv;
    var _glUniform2f = (location, v0, v1) => {
      GLctx.uniform2f(webglGetUniformLocation(location), v0, v1);
    };
    var _emscripten_glUniform2f = _glUniform2f;
    var _glUniform2fv = (location, count, value) => {
      if (GL.currentContext.version >= 2) {
        count && GLctx.uniform2fv(webglGetUniformLocation(location), HEAPF32, value >> 2, count * 2);
        return;
      }
      if (count <= 144) {
        var view = miniTempWebGLFloatBuffers[2 * count - 1];
        for (var i = 0; i < 2 * count; i += 2) {
          view[i] = HEAPF32[(value + 4 * i) >> 2];
          view[i + 1] = HEAPF32[(value + (4 * i + 4)) >> 2];
        }
      } else {
        var view = HEAPF32.subarray(value >> 2, (value + count * 8) >> 2);
      }
      GLctx.uniform2fv(webglGetUniformLocation(location), view);
    };
    var _emscripten_glUniform2fv = _glUniform2fv;
    var _glUniform2i = (location, v0, v1) => {
      GLctx.uniform2i(webglGetUniformLocation(location), v0, v1);
    };
    var _emscripten_glUniform2i = _glUniform2i;
    var _glUniform2iv = (location, count, value) => {
      if (GL.currentContext.version >= 2) {
        count && GLctx.uniform2iv(webglGetUniformLocation(location), HEAP32, value >> 2, count * 2);
        return;
      }
      if (count <= 144) {
        var view = miniTempWebGLIntBuffers[2 * count - 1];
        for (var i = 0; i < 2 * count; i += 2) {
          view[i] = HEAP32[(value + 4 * i) >> 2];
          view[i + 1] = HEAP32[(value + (4 * i + 4)) >> 2];
        }
      } else {
        var view = HEAP32.subarray(value >> 2, (value + count * 8) >> 2);
      }
      GLctx.uniform2iv(webglGetUniformLocation(location), view);
    };
    var _emscripten_glUniform2iv = _glUniform2iv;
    var _glUniform2ui = (location, v0, v1) => {
      GLctx.uniform2ui(webglGetUniformLocation(location), v0, v1);
    };
    var _emscripten_glUniform2ui = _glUniform2ui;
    var _glUniform2uiv = (location, count, value) => {
      count && GLctx.uniform2uiv(webglGetUniformLocation(location), HEAPU32, value >> 2, count * 2);
    };
    var _emscripten_glUniform2uiv = _glUniform2uiv;
    var _glUniform3f = (location, v0, v1, v2) => {
      GLctx.uniform3f(webglGetUniformLocation(location), v0, v1, v2);
    };
    var _emscripten_glUniform3f = _glUniform3f;
    var _glUniform3fv = (location, count, value) => {
      if (GL.currentContext.version >= 2) {
        count && GLctx.uniform3fv(webglGetUniformLocation(location), HEAPF32, value >> 2, count * 3);
        return;
      }
      if (count <= 96) {
        var view = miniTempWebGLFloatBuffers[3 * count - 1];
        for (var i = 0; i < 3 * count; i += 3) {
          view[i] = HEAPF32[(value + 4 * i) >> 2];
          view[i + 1] = HEAPF32[(value + (4 * i + 4)) >> 2];
          view[i + 2] = HEAPF32[(value + (4 * i + 8)) >> 2];
        }
      } else {
        var view = HEAPF32.subarray(value >> 2, (value + count * 12) >> 2);
      }
      GLctx.uniform3fv(webglGetUniformLocation(location), view);
    };
    var _emscripten_glUniform3fv = _glUniform3fv;
    var _glUniform3i = (location, v0, v1, v2) => {
      GLctx.uniform3i(webglGetUniformLocation(location), v0, v1, v2);
    };
    var _emscripten_glUniform3i = _glUniform3i;
    var _glUniform3iv = (location, count, value) => {
      if (GL.currentContext.version >= 2) {
        count && GLctx.uniform3iv(webglGetUniformLocation(location), HEAP32, value >> 2, count * 3);
        return;
      }
      if (count <= 96) {
        var view = miniTempWebGLIntBuffers[3 * count - 1];
        for (var i = 0; i < 3 * count; i += 3) {
          view[i] = HEAP32[(value + 4 * i) >> 2];
          view[i + 1] = HEAP32[(value + (4 * i + 4)) >> 2];
          view[i + 2] = HEAP32[(value + (4 * i + 8)) >> 2];
        }
      } else {
        var view = HEAP32.subarray(value >> 2, (value + count * 12) >> 2);
      }
      GLctx.uniform3iv(webglGetUniformLocation(location), view);
    };
    var _emscripten_glUniform3iv = _glUniform3iv;
    var _glUniform3ui = (location, v0, v1, v2) => {
      GLctx.uniform3ui(webglGetUniformLocation(location), v0, v1, v2);
    };
    var _emscripten_glUniform3ui = _glUniform3ui;
    var _glUniform3uiv = (location, count, value) => {
      count && GLctx.uniform3uiv(webglGetUniformLocation(location), HEAPU32, value >> 2, count * 3);
    };
    var _emscripten_glUniform3uiv = _glUniform3uiv;
    var _glUniform4f = (location, v0, v1, v2, v3) => {
      GLctx.uniform4f(webglGetUniformLocation(location), v0, v1, v2, v3);
    };
    var _emscripten_glUniform4f = _glUniform4f;
    var _glUniform4fv = (location, count, value) => {
      if (GL.currentContext.version >= 2) {
        count && GLctx.uniform4fv(webglGetUniformLocation(location), HEAPF32, value >> 2, count * 4);
        return;
      }
      if (count <= 72) {
        var view = miniTempWebGLFloatBuffers[4 * count - 1];
        var heap = HEAPF32;
        value >>= 2;
        for (var i = 0; i < 4 * count; i += 4) {
          var dst = value + i;
          view[i] = heap[dst];
          view[i + 1] = heap[dst + 1];
          view[i + 2] = heap[dst + 2];
          view[i + 3] = heap[dst + 3];
        }
      } else {
        var view = HEAPF32.subarray(value >> 2, (value + count * 16) >> 2);
      }
      GLctx.uniform4fv(webglGetUniformLocation(location), view);
    };
    var _emscripten_glUniform4fv = _glUniform4fv;
    var _glUniform4i = (location, v0, v1, v2, v3) => {
      GLctx.uniform4i(webglGetUniformLocation(location), v0, v1, v2, v3);
    };
    var _emscripten_glUniform4i = _glUniform4i;
    var _glUniform4iv = (location, count, value) => {
      if (GL.currentContext.version >= 2) {
        count && GLctx.uniform4iv(webglGetUniformLocation(location), HEAP32, value >> 2, count * 4);
        return;
      }
      if (count <= 72) {
        var view = miniTempWebGLIntBuffers[4 * count - 1];
        for (var i = 0; i < 4 * count; i += 4) {
          view[i] = HEAP32[(value + 4 * i) >> 2];
          view[i + 1] = HEAP32[(value + (4 * i + 4)) >> 2];
          view[i + 2] = HEAP32[(value + (4 * i + 8)) >> 2];
          view[i + 3] = HEAP32[(value + (4 * i + 12)) >> 2];
        }
      } else {
        var view = HEAP32.subarray(value >> 2, (value + count * 16) >> 2);
      }
      GLctx.uniform4iv(webglGetUniformLocation(location), view);
    };
    var _emscripten_glUniform4iv = _glUniform4iv;
    var _glUniform4ui = (location, v0, v1, v2, v3) => {
      GLctx.uniform4ui(webglGetUniformLocation(location), v0, v1, v2, v3);
    };
    var _emscripten_glUniform4ui = _glUniform4ui;
    var _glUniform4uiv = (location, count, value) => {
      count && GLctx.uniform4uiv(webglGetUniformLocation(location), HEAPU32, value >> 2, count * 4);
    };
    var _emscripten_glUniform4uiv = _glUniform4uiv;
    var _glUniformBlockBinding = (program, uniformBlockIndex, uniformBlockBinding) => {
      program = GL.programs[program];
      GLctx.uniformBlockBinding(program, uniformBlockIndex, uniformBlockBinding);
    };
    var _emscripten_glUniformBlockBinding = _glUniformBlockBinding;
    var _glUniformMatrix2fv = (location, count, transpose, value) => {
      if (GL.currentContext.version >= 2) {
        count && GLctx.uniformMatrix2fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 4);
        return;
      }
      if (count <= 72) {
        var view = miniTempWebGLFloatBuffers[4 * count - 1];
        for (var i = 0; i < 4 * count; i += 4) {
          view[i] = HEAPF32[(value + 4 * i) >> 2];
          view[i + 1] = HEAPF32[(value + (4 * i + 4)) >> 2];
          view[i + 2] = HEAPF32[(value + (4 * i + 8)) >> 2];
          view[i + 3] = HEAPF32[(value + (4 * i + 12)) >> 2];
        }
      } else {
        var view = HEAPF32.subarray(value >> 2, (value + count * 16) >> 2);
      }
      GLctx.uniformMatrix2fv(webglGetUniformLocation(location), !!transpose, view);
    };
    var _emscripten_glUniformMatrix2fv = _glUniformMatrix2fv;
    var _glUniformMatrix2x3fv = (location, count, transpose, value) => {
      count && GLctx.uniformMatrix2x3fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 6);
    };
    var _emscripten_glUniformMatrix2x3fv = _glUniformMatrix2x3fv;
    var _glUniformMatrix2x4fv = (location, count, transpose, value) => {
      count && GLctx.uniformMatrix2x4fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 8);
    };
    var _emscripten_glUniformMatrix2x4fv = _glUniformMatrix2x4fv;
    var _glUniformMatrix3fv = (location, count, transpose, value) => {
      if (GL.currentContext.version >= 2) {
        count && GLctx.uniformMatrix3fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 9);
        return;
      }
      if (count <= 32) {
        var view = miniTempWebGLFloatBuffers[9 * count - 1];
        for (var i = 0; i < 9 * count; i += 9) {
          view[i] = HEAPF32[(value + 4 * i) >> 2];
          view[i + 1] = HEAPF32[(value + (4 * i + 4)) >> 2];
          view[i + 2] = HEAPF32[(value + (4 * i + 8)) >> 2];
          view[i + 3] = HEAPF32[(value + (4 * i + 12)) >> 2];
          view[i + 4] = HEAPF32[(value + (4 * i + 16)) >> 2];
          view[i + 5] = HEAPF32[(value + (4 * i + 20)) >> 2];
          view[i + 6] = HEAPF32[(value + (4 * i + 24)) >> 2];
          view[i + 7] = HEAPF32[(value + (4 * i + 28)) >> 2];
          view[i + 8] = HEAPF32[(value + (4 * i + 32)) >> 2];
        }
      } else {
        var view = HEAPF32.subarray(value >> 2, (value + count * 36) >> 2);
      }
      GLctx.uniformMatrix3fv(webglGetUniformLocation(location), !!transpose, view);
    };
    var _emscripten_glUniformMatrix3fv = _glUniformMatrix3fv;
    var _glUniformMatrix3x2fv = (location, count, transpose, value) => {
      count && GLctx.uniformMatrix3x2fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 6);
    };
    var _emscripten_glUniformMatrix3x2fv = _glUniformMatrix3x2fv;
    var _glUniformMatrix3x4fv = (location, count, transpose, value) => {
      count && GLctx.uniformMatrix3x4fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 12);
    };
    var _emscripten_glUniformMatrix3x4fv = _glUniformMatrix3x4fv;
    var _glUniformMatrix4fv = (location, count, transpose, value) => {
      if (GL.currentContext.version >= 2) {
        count && GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 16);
        return;
      }
      if (count <= 18) {
        var view = miniTempWebGLFloatBuffers[16 * count - 1];
        var heap = HEAPF32;
        value >>= 2;
        for (var i = 0; i < 16 * count; i += 16) {
          var dst = value + i;
          view[i] = heap[dst];
          view[i + 1] = heap[dst + 1];
          view[i + 2] = heap[dst + 2];
          view[i + 3] = heap[dst + 3];
          view[i + 4] = heap[dst + 4];
          view[i + 5] = heap[dst + 5];
          view[i + 6] = heap[dst + 6];
          view[i + 7] = heap[dst + 7];
          view[i + 8] = heap[dst + 8];
          view[i + 9] = heap[dst + 9];
          view[i + 10] = heap[dst + 10];
          view[i + 11] = heap[dst + 11];
          view[i + 12] = heap[dst + 12];
          view[i + 13] = heap[dst + 13];
          view[i + 14] = heap[dst + 14];
          view[i + 15] = heap[dst + 15];
        }
      } else {
        var view = HEAPF32.subarray(value >> 2, (value + count * 64) >> 2);
      }
      GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, view);
    };
    var _emscripten_glUniformMatrix4fv = _glUniformMatrix4fv;
    var _glUniformMatrix4x2fv = (location, count, transpose, value) => {
      count && GLctx.uniformMatrix4x2fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 8);
    };
    var _emscripten_glUniformMatrix4x2fv = _glUniformMatrix4x2fv;
    var _glUniformMatrix4x3fv = (location, count, transpose, value) => {
      count && GLctx.uniformMatrix4x3fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 12);
    };
    var _emscripten_glUniformMatrix4x3fv = _glUniformMatrix4x3fv;
    var _glUseProgram = (program) => {
      program = GL.programs[program];
      GLctx.useProgram(program);
      GLctx.currentProgram = program;
    };
    var _emscripten_glUseProgram = _glUseProgram;
    var _glValidateProgram = (program) => {
      GLctx.validateProgram(GL.programs[program]);
    };
    var _emscripten_glValidateProgram = _glValidateProgram;
    function _glVertexAttrib1f(x0, x1) {
      GLctx.vertexAttrib1f(x0, x1);
    }
    var _emscripten_glVertexAttrib1f = _glVertexAttrib1f;
    var _glVertexAttrib1fv = (index, v) => {
      GLctx.vertexAttrib1f(index, HEAPF32[v >> 2]);
    };
    var _emscripten_glVertexAttrib1fv = _glVertexAttrib1fv;
    function _glVertexAttrib2f(x0, x1, x2) {
      GLctx.vertexAttrib2f(x0, x1, x2);
    }
    var _emscripten_glVertexAttrib2f = _glVertexAttrib2f;
    var _glVertexAttrib2fv = (index, v) => {
      GLctx.vertexAttrib2f(index, HEAPF32[v >> 2], HEAPF32[(v + 4) >> 2]);
    };
    var _emscripten_glVertexAttrib2fv = _glVertexAttrib2fv;
    function _glVertexAttrib3f(x0, x1, x2, x3) {
      GLctx.vertexAttrib3f(x0, x1, x2, x3);
    }
    var _emscripten_glVertexAttrib3f = _glVertexAttrib3f;
    var _glVertexAttrib3fv = (index, v) => {
      GLctx.vertexAttrib3f(index, HEAPF32[v >> 2], HEAPF32[(v + 4) >> 2], HEAPF32[(v + 8) >> 2]);
    };
    var _emscripten_glVertexAttrib3fv = _glVertexAttrib3fv;
    function _glVertexAttrib4f(x0, x1, x2, x3, x4) {
      GLctx.vertexAttrib4f(x0, x1, x2, x3, x4);
    }
    var _emscripten_glVertexAttrib4f = _glVertexAttrib4f;
    var _glVertexAttrib4fv = (index, v) => {
      GLctx.vertexAttrib4f(index, HEAPF32[v >> 2], HEAPF32[(v + 4) >> 2], HEAPF32[(v + 8) >> 2], HEAPF32[(v + 12) >> 2]);
    };
    var _emscripten_glVertexAttrib4fv = _glVertexAttrib4fv;
    var _glVertexAttribDivisor = (index, divisor) => {
      GLctx.vertexAttribDivisor(index, divisor);
    };
    var _emscripten_glVertexAttribDivisor = _glVertexAttribDivisor;
    var _glVertexAttribDivisorANGLE = _glVertexAttribDivisor;
    var _emscripten_glVertexAttribDivisorANGLE = _glVertexAttribDivisorANGLE;
    var _glVertexAttribDivisorARB = _glVertexAttribDivisor;
    var _emscripten_glVertexAttribDivisorARB = _glVertexAttribDivisorARB;
    var _glVertexAttribDivisorEXT = _glVertexAttribDivisor;
    var _emscripten_glVertexAttribDivisorEXT = _glVertexAttribDivisorEXT;
    var _glVertexAttribDivisorNV = _glVertexAttribDivisor;
    var _emscripten_glVertexAttribDivisorNV = _glVertexAttribDivisorNV;
    function _glVertexAttribI4i(x0, x1, x2, x3, x4) {
      GLctx.vertexAttribI4i(x0, x1, x2, x3, x4);
    }
    var _emscripten_glVertexAttribI4i = _glVertexAttribI4i;
    var _glVertexAttribI4iv = (index, v) => {
      GLctx.vertexAttribI4i(index, HEAP32[v >> 2], HEAP32[(v + 4) >> 2], HEAP32[(v + 8) >> 2], HEAP32[(v + 12) >> 2]);
    };
    var _emscripten_glVertexAttribI4iv = _glVertexAttribI4iv;
    function _glVertexAttribI4ui(x0, x1, x2, x3, x4) {
      GLctx.vertexAttribI4ui(x0, x1, x2, x3, x4);
    }
    var _emscripten_glVertexAttribI4ui = _glVertexAttribI4ui;
    var _glVertexAttribI4uiv = (index, v) => {
      GLctx.vertexAttribI4ui(index, HEAPU32[v >> 2], HEAPU32[(v + 4) >> 2], HEAPU32[(v + 8) >> 2], HEAPU32[(v + 12) >> 2]);
    };
    var _emscripten_glVertexAttribI4uiv = _glVertexAttribI4uiv;
    var _glVertexAttribIPointer = (index, size, type, stride, ptr) => {
      GLctx.vertexAttribIPointer(index, size, type, stride, ptr);
    };
    var _emscripten_glVertexAttribIPointer = _glVertexAttribIPointer;
    var _glVertexAttribPointer = (index, size, type, normalized, stride, ptr) => {
      GLctx.vertexAttribPointer(index, size, type, !!normalized, stride, ptr);
    };
    var _emscripten_glVertexAttribPointer = _glVertexAttribPointer;
    function _glViewport(x0, x1, x2, x3) {
      GLctx.viewport(x0, x1, x2, x3);
    }
    var _emscripten_glViewport = _glViewport;
    var _glWaitSync = (sync, flags, timeout_low, timeout_high) => {
      var timeout = convertI32PairToI53(timeout_low, timeout_high);
      GLctx.waitSync(GL.syncs[sync], flags, timeout);
    };
    var _emscripten_glWaitSync = _glWaitSync;
    var reallyNegative = (x) => x < 0 || (x === 0 && 1 / x === -Infinity);
    var convertU32PairToI53 = (lo, hi) => (lo >>> 0) + (hi >>> 0) * 4294967296;
    var reSign = (value, bits) => {
      if (value <= 0) {
        return value;
      }
      var half = bits <= 32 ? Math.abs(1 << (bits - 1)) : Math.pow(2, bits - 1);
      if (value >= half && (bits <= 32 || value > half)) {
        value = -2 * half + value;
      }
      return value;
    };
    var unSign = (value, bits) => {
      if (value >= 0) {
        return value;
      }
      return bits <= 32 ? 2 * Math.abs(1 << (bits - 1)) + value : Math.pow(2, bits) + value;
    };
    var strLen = (ptr) => {
      var end = ptr;
      while (HEAPU8[end]) ++end;
      return end - ptr;
    };
    function intArrayFromString(stringy, dontAddNull, length) {
      var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
      var u8array = new Array(len);
      var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
      if (dontAddNull) u8array.length = numBytesWritten;
      return u8array;
    }
    var formatString = (format, varargs) => {
      var textIndex = format;
      var argIndex = varargs;
      function prepVararg(ptr, type) {
        if (type === "double" || type === "i64") {
          if (ptr & 7) {
            ptr += 4;
          }
        } else {
        }
        return ptr;
      }
      function getNextArg(type) {
        var ret;
        argIndex = prepVararg(argIndex, type);
        if (type === "double") {
          ret = HEAPF64[argIndex >> 3];
          argIndex += 8;
        } else if (type == "i64") {
          ret = [HEAP32[argIndex >> 2], HEAP32[(argIndex + 4) >> 2]];
          argIndex += 8;
        } else {
          type = "i32";
          ret = HEAP32[argIndex >> 2];
          argIndex += 4;
        }
        return ret;
      }
      var ret = [];
      var curr, next, currArg;
      while (1) {
        var startTextIndex = textIndex;
        curr = HEAP8[textIndex >> 0];
        if (curr === 0) break;
        next = HEAP8[(textIndex + 1) >> 0];
        if (curr == 37) {
          var flagAlwaysSigned = false;
          var flagLeftAlign = false;
          var flagAlternative = false;
          var flagZeroPad = false;
          var flagPadSign = false;
          flagsLoop: while (1) {
            switch (next) {
              case 43:
                flagAlwaysSigned = true;
                break;
              case 45:
                flagLeftAlign = true;
                break;
              case 35:
                flagAlternative = true;
                break;
              case 48:
                if (flagZeroPad) {
                  break flagsLoop;
                } else {
                  flagZeroPad = true;
                  break;
                }
              case 32:
                flagPadSign = true;
                break;
              default:
                break flagsLoop;
            }
            textIndex++;
            next = HEAP8[(textIndex + 1) >> 0];
          }
          var width = 0;
          if (next == 42) {
            width = getNextArg("i32");
            textIndex++;
            next = HEAP8[(textIndex + 1) >> 0];
          } else {
            while (next >= 48 && next <= 57) {
              width = width * 10 + (next - 48);
              textIndex++;
              next = HEAP8[(textIndex + 1) >> 0];
            }
          }
          var precisionSet = false,
            precision = -1;
          if (next == 46) {
            precision = 0;
            precisionSet = true;
            textIndex++;
            next = HEAP8[(textIndex + 1) >> 0];
            if (next == 42) {
              precision = getNextArg("i32");
              textIndex++;
            } else {
              while (1) {
                var precisionChr = HEAP8[(textIndex + 1) >> 0];
                if (precisionChr < 48 || precisionChr > 57) break;
                precision = precision * 10 + (precisionChr - 48);
                textIndex++;
              }
            }
            next = HEAP8[(textIndex + 1) >> 0];
          }
          if (precision < 0) {
            precision = 6;
            precisionSet = false;
          }
          var argSize;
          switch (String.fromCharCode(next)) {
            case "h":
              var nextNext = HEAP8[(textIndex + 2) >> 0];
              if (nextNext == 104) {
                textIndex++;
                argSize = 1;
              } else {
                argSize = 2;
              }
              break;
            case "l":
              var nextNext = HEAP8[(textIndex + 2) >> 0];
              if (nextNext == 108) {
                textIndex++;
                argSize = 8;
              } else {
                argSize = 4;
              }
              break;
            case "L":
            case "q":
            case "j":
              argSize = 8;
              break;
            case "z":
            case "t":
            case "I":
              argSize = 4;
              break;
            default:
              argSize = null;
          }
          if (argSize) textIndex++;
          next = HEAP8[(textIndex + 1) >> 0];
          switch (String.fromCharCode(next)) {
            case "d":
            case "i":
            case "u":
            case "o":
            case "x":
            case "X":
            case "p": {
              var signed = next == 100 || next == 105;
              argSize = argSize || 4;
              currArg = getNextArg("i" + argSize * 8);
              var argText;
              if (argSize == 8) {
                currArg = next == 117 ? convertU32PairToI53(currArg[0], currArg[1]) : convertI32PairToI53(currArg[0], currArg[1]);
              }
              if (argSize <= 4) {
                var limit = Math.pow(256, argSize) - 1;
                currArg = (signed ? reSign : unSign)(currArg & limit, argSize * 8);
              }
              var currAbsArg = Math.abs(currArg);
              var prefix = "";
              if (next == 100 || next == 105) {
                argText = reSign(currArg, 8 * argSize).toString(10);
              } else if (next == 117) {
                argText = unSign(currArg, 8 * argSize).toString(10);
                currArg = Math.abs(currArg);
              } else if (next == 111) {
                argText = (flagAlternative ? "0" : "") + currAbsArg.toString(8);
              } else if (next == 120 || next == 88) {
                prefix = flagAlternative && currArg != 0 ? "0x" : "";
                if (currArg < 0) {
                  currArg = -currArg;
                  argText = (currAbsArg - 1).toString(16);
                  var buffer = [];
                  for (var i = 0; i < argText.length; i++) {
                    buffer.push((15 - parseInt(argText[i], 16)).toString(16));
                  }
                  argText = buffer.join("");
                  while (argText.length < argSize * 2) argText = "f" + argText;
                } else {
                  argText = currAbsArg.toString(16);
                }
                if (next == 88) {
                  prefix = prefix.toUpperCase();
                  argText = argText.toUpperCase();
                }
              } else if (next == 112) {
                if (currAbsArg === 0) {
                  argText = "(nil)";
                } else {
                  prefix = "0x";
                  argText = currAbsArg.toString(16);
                }
              }
              if (precisionSet) {
                while (argText.length < precision) {
                  argText = "0" + argText;
                }
              }
              if (currArg >= 0) {
                if (flagAlwaysSigned) {
                  prefix = "+" + prefix;
                } else if (flagPadSign) {
                  prefix = " " + prefix;
                }
              }
              if (argText.charAt(0) == "-") {
                prefix = "-" + prefix;
                argText = argText.substr(1);
              }
              while (prefix.length + argText.length < width) {
                if (flagLeftAlign) {
                  argText += " ";
                } else {
                  if (flagZeroPad) {
                    argText = "0" + argText;
                  } else {
                    prefix = " " + prefix;
                  }
                }
              }
              argText = prefix + argText;
              argText.split("").forEach(function (chr) {
                ret.push(chr.charCodeAt(0));
              });
              break;
            }
            case "f":
            case "F":
            case "e":
            case "E":
            case "g":
            case "G": {
              currArg = getNextArg("double");
              var argText;
              if (isNaN(currArg)) {
                argText = "nan";
                flagZeroPad = false;
              } else if (!isFinite(currArg)) {
                argText = (currArg < 0 ? "-" : "") + "inf";
                flagZeroPad = false;
              } else {
                var isGeneral = false;
                var effectivePrecision = Math.min(precision, 20);
                if (next == 103 || next == 71) {
                  isGeneral = true;
                  precision = precision || 1;
                  var exponent = parseInt(currArg.toExponential(effectivePrecision).split("e")[1], 10);
                  if (precision > exponent && exponent >= -4) {
                    next = (next == 103 ? "f" : "F").charCodeAt(0);
                    precision -= exponent + 1;
                  } else {
                    next = (next == 103 ? "e" : "E").charCodeAt(0);
                    precision--;
                  }
                  effectivePrecision = Math.min(precision, 20);
                }
                if (next == 101 || next == 69) {
                  argText = currArg.toExponential(effectivePrecision);
                  if (/[eE][-+]\d$/.test(argText)) {
                    argText = argText.slice(0, -1) + "0" + argText.slice(-1);
                  }
                } else if (next == 102 || next == 70) {
                  argText = currArg.toFixed(effectivePrecision);
                  if (currArg === 0 && reallyNegative(currArg)) {
                    argText = "-" + argText;
                  }
                }
                var parts = argText.split("e");
                if (isGeneral && !flagAlternative) {
                  while (parts[0].length > 1 && parts[0].includes(".") && (parts[0].slice(-1) == "0" || parts[0].slice(-1) == ".")) {
                    parts[0] = parts[0].slice(0, -1);
                  }
                } else {
                  if (flagAlternative && argText.indexOf(".") == -1) parts[0] += ".";
                  while (precision > effectivePrecision++) parts[0] += "0";
                }
                argText = parts[0] + (parts.length > 1 ? "e" + parts[1] : "");
                if (next == 69) argText = argText.toUpperCase();
                if (currArg >= 0) {
                  if (flagAlwaysSigned) {
                    argText = "+" + argText;
                  } else if (flagPadSign) {
                    argText = " " + argText;
                  }
                }
              }
              while (argText.length < width) {
                if (flagLeftAlign) {
                  argText += " ";
                } else {
                  if (flagZeroPad && (argText[0] == "-" || argText[0] == "+")) {
                    argText = argText[0] + "0" + argText.slice(1);
                  } else {
                    argText = (flagZeroPad ? "0" : " ") + argText;
                  }
                }
              }
              if (next < 97) argText = argText.toUpperCase();
              argText.split("").forEach(function (chr) {
                ret.push(chr.charCodeAt(0));
              });
              break;
            }
            case "s": {
              var arg = getNextArg("i8*");
              var argLength = arg ? strLen(arg) : "(null)".length;
              if (precisionSet) argLength = Math.min(argLength, precision);
              if (!flagLeftAlign) {
                while (argLength < width--) {
                  ret.push(32);
                }
              }
              if (arg) {
                for (var i = 0; i < argLength; i++) {
                  ret.push(HEAPU8[arg++ >> 0]);
                }
              } else {
                ret = ret.concat(intArrayFromString("(null)".substr(0, argLength), true));
              }
              if (flagLeftAlign) {
                while (argLength < width--) {
                  ret.push(32);
                }
              }
              break;
            }
            case "c": {
              if (flagLeftAlign) ret.push(getNextArg("i8"));
              while (--width > 0) {
                ret.push(32);
              }
              if (!flagLeftAlign) ret.push(getNextArg("i8"));
              break;
            }
            case "n": {
              var ptr = getNextArg("i32*");
              HEAP32[ptr >> 2] = ret.length;
              break;
            }
            case "%": {
              ret.push(curr);
              break;
            }
            default: {
              for (var i = startTextIndex; i < textIndex + 2; i++) {
                ret.push(HEAP8[i >> 0]);
              }
            }
          }
          textIndex += 2;
        } else {
          ret.push(curr);
          textIndex += 1;
        }
      }
      return ret;
    };
    function jsStackTrace() {
      var error = new Error();
      if (!error.stack) {
        try {
          throw new Error();
        } catch (e) {
          error = e;
        }
        if (!error.stack) {
          return "(no stack trace available)";
        }
      }
      return error.stack.toString();
    }
    function getCallstack(flags) {
      var callstack = jsStackTrace();
      var iThisFunc = callstack.lastIndexOf("_emscripten_log");
      var iThisFunc2 = callstack.lastIndexOf("_emscripten_get_callstack");
      var iNextLine = callstack.indexOf("\n", Math.max(iThisFunc, iThisFunc2)) + 1;
      callstack = callstack.slice(iNextLine);
      if (flags & 8 && typeof emscripten_source_map == "undefined") {
        warnOnce(
          'Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'
        );
        flags ^= 8;
        flags |= 16;
      }
      var lines = callstack.split("\n");
      callstack = "";
      var newFirefoxRe = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");
      var firefoxRe = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?");
      var chromeRe = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
      for (var l in lines) {
        var line = lines[l];
        var symbolName = "";
        var file = "";
        var lineno = 0;
        var column = 0;
        var parts = chromeRe.exec(line);
        if (parts && parts.length == 5) {
          symbolName = parts[1];
          file = parts[2];
          lineno = parts[3];
          column = parts[4];
        } else {
          parts = newFirefoxRe.exec(line);
          if (!parts) parts = firefoxRe.exec(line);
          if (parts && parts.length >= 4) {
            symbolName = parts[1];
            file = parts[2];
            lineno = parts[3];
            column = parts[4] | 0;
          } else {
            callstack += line + "\n";
            continue;
          }
        }
        var haveSourceMap = false;
        if (flags & 8) {
          var orig = emscripten_source_map.originalPositionFor({ line: lineno, column: column });
          haveSourceMap = orig && orig.source;
          if (haveSourceMap) {
            if (flags & 64) {
              orig.source = orig.source.substring(orig.source.replace(/\\/g, "/").lastIndexOf("/") + 1);
            }
            callstack += `    at ${symbolName} (${orig.source}:${orig.line}:${orig.column})\n`;
          }
        }
        if (flags & 16 || !haveSourceMap) {
          if (flags & 64) {
            file = file.substring(file.replace(/\\/g, "/").lastIndexOf("/") + 1);
          }
          callstack += (haveSourceMap ? `     = ${symbolName}` : `    at ${symbolName}`) + ` (${file}:${lineno}:${column})\n`;
        }
      }
      callstack = callstack.replace(/\s+$/, "");
      return callstack;
    }
    var emscriptenLog = (flags, str) => {
      if (flags & 24) {
        str = str.replace(/\s+$/, "");
        str += (str.length > 0 ? "\n" : "") + getCallstack(flags);
      }
      if (flags & 1) {
        if (flags & 4) {
          console.error(str);
        } else if (flags & 2) {
          console.warn(str);
        } else if (flags & 512) {
          console.info(str);
        } else if (flags & 256) {
          console.debug(str);
        } else {
          console.log(str);
        }
      } else if (flags & 6) {
        err(str);
      } else {
        out(str);
      }
    };
    var _emscripten_log = (flags, format, varargs) => {
      var result = formatString(format, varargs);
      var str = UTF8ArrayToString(result, 0);
      emscriptenLog(flags, str);
    };
    var _emscripten_memcpy_js = (dest, src, num) => HEAPU8.copyWithin(dest, src, src + num);
    var _emscripten_pc_get_function = (pc) => {
      abort("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER");
      return 0;
    };
    var growMemory = (size) => {
      var b = wasmMemory.buffer;
      var pages = (size - b.byteLength + 65535) / 65536;
      try {
        wasmMemory.grow(pages);
        updateMemoryViews();
        return 1;
      } catch (e) {}
    };
    var _emscripten_resize_heap = (requestedSize) => {
      var oldSize = HEAPU8.length;
      requestedSize >>>= 0;
      var maxHeapSize = getHeapMax();
      if (requestedSize > maxHeapSize) {
        return false;
      }
      var alignUp = (x, multiple) => x + ((multiple - (x % multiple)) % multiple);
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
        var replacement = growMemory(newSize);
        if (replacement) {
          return true;
        }
      }
      return false;
    };
    var convertFrameToPC = (frame) => {
      abort("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER");
      return 0;
    };
    var UNWIND_CACHE = {};
    var saveInUnwindCache = (callstack) => {
      callstack.forEach((frame) => {
        var pc = convertFrameToPC(frame);
        if (pc) {
          UNWIND_CACHE[pc] = frame;
        }
      });
    };
    function _emscripten_stack_snapshot() {
      var callstack = jsStackTrace().split("\n");
      if (callstack[0] == "Error") {
        callstack.shift();
      }
      saveInUnwindCache(callstack);
      UNWIND_CACHE.last_addr = convertFrameToPC(callstack[3]);
      UNWIND_CACHE.last_stack = callstack;
      return UNWIND_CACHE.last_addr;
    }
    var _emscripten_stack_unwind_buffer = (addr, buffer, count) => {
      var stack;
      if (UNWIND_CACHE.last_addr == addr) {
        stack = UNWIND_CACHE.last_stack;
      } else {
        stack = jsStackTrace().split("\n");
        if (stack[0] == "Error") {
          stack.shift();
        }
        saveInUnwindCache(stack);
      }
      var offset = 3;
      while (stack[offset] && convertFrameToPC(stack[offset]) != addr) {
        ++offset;
      }
      for (var i = 0; i < count && stack[i + offset]; ++i) {
        HEAP32[(buffer + i * 4) >> 2] = convertFrameToPC(stack[i + offset]);
      }
      return i;
    };
    var JSEvents = {
      inEventHandler: 0,
      removeAllEventListeners() {
        for (var i = JSEvents.eventHandlers.length - 1; i >= 0; --i) {
          JSEvents._removeHandler(i);
        }
        JSEvents.eventHandlers = [];
        JSEvents.deferredCalls = [];
      },
      registerRemoveEventListeners() {
        if (!JSEvents.removeEventListenersRegistered) {
          __ATEXIT__.push(JSEvents.removeAllEventListeners);
          JSEvents.removeEventListenersRegistered = true;
        }
      },
      deferredCalls: [],
      deferCall(targetFunction, precedence, argsList) {
        function arraysHaveEqualContent(arrA, arrB) {
          if (arrA.length != arrB.length) return false;
          for (var i in arrA) {
            if (arrA[i] != arrB[i]) return false;
          }
          return true;
        }
        for (var i in JSEvents.deferredCalls) {
          var call = JSEvents.deferredCalls[i];
          if (call.targetFunction == targetFunction && arraysHaveEqualContent(call.argsList, argsList)) {
            return;
          }
        }
        JSEvents.deferredCalls.push({ targetFunction: targetFunction, precedence: precedence, argsList: argsList });
        JSEvents.deferredCalls.sort((x, y) => x.precedence < y.precedence);
      },
      removeDeferredCalls(targetFunction) {
        for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
          if (JSEvents.deferredCalls[i].targetFunction == targetFunction) {
            JSEvents.deferredCalls.splice(i, 1);
            --i;
          }
        }
      },
      canPerformEventHandlerRequests() {
        if (navigator.userActivation) {
          return navigator.userActivation.isActive;
        }
        return JSEvents.inEventHandler && JSEvents.currentEventHandler.allowsDeferredCalls;
      },
      runDeferredCalls() {
        if (!JSEvents.canPerformEventHandlerRequests()) {
          return;
        }
        for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
          var call = JSEvents.deferredCalls[i];
          JSEvents.deferredCalls.splice(i, 1);
          --i;
          call.targetFunction.apply(null, call.argsList);
        }
      },
      eventHandlers: [],
      removeAllHandlersOnTarget: (target, eventTypeString) => {
        for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
          if (
            JSEvents.eventHandlers[i].target == target &&
            (!eventTypeString || eventTypeString == JSEvents.eventHandlers[i].eventTypeString)
          ) {
            JSEvents._removeHandler(i--);
          }
        }
      },
      _removeHandler(i) {
        var h = JSEvents.eventHandlers[i];
        h.target.removeEventListener(h.eventTypeString, h.eventListenerFunc, h.useCapture);
        JSEvents.eventHandlers.splice(i, 1);
      },
      registerOrRemoveHandler(eventHandler) {
        if (!eventHandler.target) {
          return -4;
        }
        var jsEventHandler = function jsEventHandler(event) {
          ++JSEvents.inEventHandler;
          JSEvents.currentEventHandler = eventHandler;
          JSEvents.runDeferredCalls();
          eventHandler.handlerFunc(event);
          JSEvents.runDeferredCalls();
          --JSEvents.inEventHandler;
        };
        if (eventHandler.callbackfunc) {
          eventHandler.eventListenerFunc = jsEventHandler;
          eventHandler.target.addEventListener(eventHandler.eventTypeString, jsEventHandler, eventHandler.useCapture);
          JSEvents.eventHandlers.push(eventHandler);
          JSEvents.registerRemoveEventListeners();
        } else {
          for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
            if (
              JSEvents.eventHandlers[i].target == eventHandler.target &&
              JSEvents.eventHandlers[i].eventTypeString == eventHandler.eventTypeString
            ) {
              JSEvents._removeHandler(i--);
            }
          }
        }
        return 0;
      },
      getNodeNameForTarget(target) {
        if (!target) return "";
        if (target == window) return "#window";
        if (target == screen) return "#screen";
        return target && target.nodeName ? target.nodeName : "";
      },
      fullscreenEnabled() {
        return document.fullscreenEnabled || document.webkitFullscreenEnabled;
      }
    };
    var emscripten_webgl_power_preferences = ["default", "low-power", "high-performance"];
    var specialHTMLTargets = [0, typeof document != "undefined" ? document : 0, typeof window != "undefined" ? window : 0];
    var findEventTarget = (target) => {
      try {
        if (!target) return window;
        if (typeof target == "number") target = specialHTMLTargets[target] || UTF8ToString(target);
        if (target === "#window") return window;
        else if (target === "#document") return document;
        else if (target === "#screen") return screen;
        else if (target === "#canvas") return Module["canvas"];
        return typeof target == "string" ? document.getElementById(target) : target;
      } catch (e) {
        return null;
      }
    };
    var findCanvasEventTarget = (target) => {
      if (typeof target == "number") target = UTF8ToString(target);
      if (!target || target === "#canvas") {
        if (typeof GL != "undefined" && GL.offscreenCanvases["canvas"]) return GL.offscreenCanvases["canvas"];
        return Module["canvas"];
      }
      if (typeof GL != "undefined" && GL.offscreenCanvases[target]) return GL.offscreenCanvases[target];
      return findEventTarget(target);
    };
    var _emscripten_webgl_do_create_context = (target, attributes) => {
      var a = attributes >> 2;
      var powerPreference = HEAP32[a + (24 >> 2)];
      var contextAttributes = {
        alpha: !!HEAP32[a + (0 >> 2)],
        depth: !!HEAP32[a + (4 >> 2)],
        stencil: !!HEAP32[a + (8 >> 2)],
        antialias: !!HEAP32[a + (12 >> 2)],
        premultipliedAlpha: !!HEAP32[a + (16 >> 2)],
        preserveDrawingBuffer: !!HEAP32[a + (20 >> 2)],
        powerPreference: emscripten_webgl_power_preferences[powerPreference],
        failIfMajorPerformanceCaveat: !!HEAP32[a + (28 >> 2)],
        majorVersion: HEAP32[a + (32 >> 2)],
        minorVersion: HEAP32[a + (36 >> 2)],
        enableExtensionsByDefault: HEAP32[a + (40 >> 2)],
        explicitSwapControl: HEAP32[a + (44 >> 2)],
        proxyContextToMainThread: HEAP32[a + (48 >> 2)],
        renderViaOffscreenBackBuffer: HEAP32[a + (52 >> 2)]
      };
      var canvas = findCanvasEventTarget(target);
      if (!canvas) {
        return 0;
      }
      if (contextAttributes.explicitSwapControl) {
        return 0;
      }
      var contextHandle = GL.createContext(canvas, contextAttributes);
      return contextHandle;
    };
    var _emscripten_webgl_create_context = _emscripten_webgl_do_create_context;
    var _emscripten_webgl_init_context_attributes = (attributes) => {
      var a = attributes >> 2;
      for (var i = 0; i < 56 >> 2; ++i) {
        HEAP32[a + i] = 0;
      }
      HEAP32[a + (0 >> 2)] =
        HEAP32[a + (4 >> 2)] =
        HEAP32[a + (12 >> 2)] =
        HEAP32[a + (16 >> 2)] =
        HEAP32[a + (32 >> 2)] =
        HEAP32[a + (40 >> 2)] =
          1;
    };
    var _emscripten_webgl_make_context_current = (contextHandle) => {
      var success = GL.makeContextCurrent(contextHandle);
      return success ? 0 : -5;
    };
    var ENV = {};
    var getExecutableName = () => thisProgram || "./this.program";
    var getEnvStrings = () => {
      if (!getEnvStrings.strings) {
        var lang = ((typeof navigator == "object" && navigator.languages && navigator.languages[0]) || "C").replace("-", "_") + ".UTF-8";
        var env = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: lang,
          _: getExecutableName()
        };
        for (var x in ENV) {
          if (ENV[x] === undefined) delete env[x];
          else env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(`${x}=${env[x]}`);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    };
    var stringToAscii = (str, buffer) => {
      for (var i = 0; i < str.length; ++i) {
        HEAP8[buffer++ >> 0] = str.charCodeAt(i);
      }
      HEAP8[buffer >> 0] = 0;
    };
    var _environ_get = (__environ, environ_buf) => {
      var bufSize = 0;
      getEnvStrings().forEach((string, i) => {
        var ptr = environ_buf + bufSize;
        HEAPU32[(__environ + i * 4) >> 2] = ptr;
        stringToAscii(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    };
    var _environ_sizes_get = (penviron_count, penviron_buf_size) => {
      var strings = getEnvStrings();
      HEAPU32[penviron_count >> 2] = strings.length;
      var bufSize = 0;
      strings.forEach((string) => (bufSize += string.length + 1));
      HEAPU32[penviron_buf_size >> 2] = bufSize;
      return 0;
    };
    var _fd_close = (fd) => 52;
    var _fd_read = (fd, iov, iovcnt, pnum) => 52;
    function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
      var offset = convertI32PairToI53Checked(offset_low, offset_high);
      return 70;
    }
    var printCharBuffers = [null, [], []];
    var printChar = (stream, curr) => {
      var buffer = printCharBuffers[stream];
      if (curr === 0 || curr === 10) {
        (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
        buffer.length = 0;
      } else {
        buffer.push(curr);
      }
    };
    var _fd_write = (fd, iov, iovcnt, pnum) => {
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
    };
    var initRandomFill = () => {
      if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
        return (view) => crypto.getRandomValues(view);
      } else if (ENVIRONMENT_IS_NODE) {
        try {
          var crypto_module = require("crypto");
          var randomFillSync = crypto_module["randomFillSync"];
          if (randomFillSync) {
            return (view) => crypto_module["randomFillSync"](view);
          }
          var randomBytes = crypto_module["randomBytes"];
          return (view) => (view.set(randomBytes(view.byteLength)), view);
        } catch (e) {}
      }
      abort("initRandomDevice");
    };
    var randomFill = (view) => (randomFill = initRandomFill())(view);
    var _getentropy = (buffer, size) => {
      randomFill(HEAPU8.subarray(buffer, buffer + size));
      return 0;
    };
    var isLeapYear = (year) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    var arraySum = (array, index) => {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]) {}
      return sum;
    };
    var MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var addDays = (date, days) => {
      var newDate = new Date(date.getTime());
      while (days > 0) {
        var leap = isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR)[currentMonth];
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
    };
    var writeArrayToMemory = (array, buffer) => {
      HEAP8.set(array, buffer);
    };
    var _strftime = (s, maxsize, format, tm) => {
      var tm_zone = HEAPU32[(tm + 40) >> 2];
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
      var MONTHS = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
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
        var thisDate = addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
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
        "%a": (date) => WEEKDAYS[date.tm_wday].substring(0, 3),
        "%A": (date) => WEEKDAYS[date.tm_wday],
        "%b": (date) => MONTHS[date.tm_mon].substring(0, 3),
        "%B": (date) => MONTHS[date.tm_mon],
        "%C": (date) => {
          var year = date.tm_year + 1900;
          return leadingNulls((year / 100) | 0, 2);
        },
        "%d": (date) => leadingNulls(date.tm_mday, 2),
        "%e": (date) => leadingSomething(date.tm_mday, 2, " "),
        "%g": (date) => getWeekBasedYear(date).toString().substring(2),
        "%G": (date) => getWeekBasedYear(date),
        "%H": (date) => leadingNulls(date.tm_hour, 2),
        "%I": (date) => {
          var twelveHour = date.tm_hour;
          if (twelveHour == 0) twelveHour = 12;
          else if (twelveHour > 12) twelveHour -= 12;
          return leadingNulls(twelveHour, 2);
        },
        "%j": (date) =>
          leadingNulls(date.tm_mday + arraySum(isLeapYear(date.tm_year + 1900) ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR, date.tm_mon - 1), 3),
        "%m": (date) => leadingNulls(date.tm_mon + 1, 2),
        "%M": (date) => leadingNulls(date.tm_min, 2),
        "%n": () => "\n",
        "%p": (date) => {
          if (date.tm_hour >= 0 && date.tm_hour < 12) {
            return "AM";
          }
          return "PM";
        },
        "%S": (date) => leadingNulls(date.tm_sec, 2),
        "%t": () => "\t",
        "%u": (date) => date.tm_wday || 7,
        "%U": (date) => {
          var days = date.tm_yday + 7 - date.tm_wday;
          return leadingNulls(Math.floor(days / 7), 2);
        },
        "%V": (date) => {
          var val = Math.floor((date.tm_yday + 7 - ((date.tm_wday + 6) % 7)) / 7);
          if ((date.tm_wday + 371 - date.tm_yday - 2) % 7 <= 2) {
            val++;
          }
          if (!val) {
            val = 52;
            var dec31 = (date.tm_wday + 7 - date.tm_yday - 1) % 7;
            if (dec31 == 4 || (dec31 == 5 && isLeapYear((date.tm_year % 400) - 1))) {
              val++;
            }
          } else if (val == 53) {
            var jan1 = (date.tm_wday + 371 - date.tm_yday) % 7;
            if (jan1 != 4 && (jan1 != 3 || !isLeapYear(date.tm_year))) val = 1;
          }
          return leadingNulls(val, 2);
        },
        "%w": (date) => date.tm_wday,
        "%W": (date) => {
          var days = date.tm_yday + 7 - ((date.tm_wday + 6) % 7);
          return leadingNulls(Math.floor(days / 7), 2);
        },
        "%y": (date) => (date.tm_year + 1900).toString().substring(2),
        "%Y": (date) => date.tm_year + 1900,
        "%z": (date) => {
          var off = date.tm_gmtoff;
          var ahead = off >= 0;
          off = Math.abs(off) / 60;
          off = (off / 60) * 100 + (off % 60);
          return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
        },
        "%Z": (date) => date.tm_zone,
        "%%": () => "%"
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
    };
    var _strftime_l = (s, maxsize, format, tm, loc) => _strftime(s, maxsize, format, tm);
    InternalError = Module["InternalError"] = class InternalError extends Error {
      constructor(message) {
        super(message);
        this.name = "InternalError";
      }
    };
    embind_init_charCodes();
    BindingError = Module["BindingError"] = class BindingError extends Error {
      constructor(message) {
        super(message);
        this.name = "BindingError";
      }
    };
    init_ClassHandle();
    init_embind();
    init_RegisteredPointer();
    UnboundTypeError = Module["UnboundTypeError"] = extendError(Error, "UnboundTypeError");
    handleAllocatorInit();
    init_emval();
    Module["requestFullscreen"] = (lockPointer, resizeCanvas) => Browser.requestFullscreen(lockPointer, resizeCanvas);
    Module["requestAnimationFrame"] = (func) => Browser.requestAnimationFrame(func);
    Module["setCanvasSize"] = (width, height, noUpdates) => Browser.setCanvasSize(width, height, noUpdates);
    Module["pauseMainLoop"] = () => Browser.mainLoop.pause();
    Module["resumeMainLoop"] = () => Browser.mainLoop.resume();
    Module["getUserMedia"] = () => Browser.getUserMedia();
    Module["createContext"] = (canvas, useWebGL, setInModule, webGLContextAttributes) =>
      Browser.createContext(canvas, useWebGL, setInModule, webGLContextAttributes);
    var GLctx;
    for (var i = 0; i < 32; ++i) tempFixedLengthArray.push(new Array(i));
    var miniTempWebGLFloatBuffersStorage = new Float32Array(288);
    for (var i = 0; i < 288; ++i) {
      miniTempWebGLFloatBuffers[i] = miniTempWebGLFloatBuffersStorage.subarray(0, i + 1);
    }
    var miniTempWebGLIntBuffersStorage = new Int32Array(288);
    for (var i = 0; i < 288; ++i) {
      miniTempWebGLIntBuffers[i] = miniTempWebGLIntBuffersStorage.subarray(0, i + 1);
    }
    var wasmImports = {
      D: HaveOffsetConverter,
      Ya: ___syscall_openat,
      Uc: __embind_finalize_value_array,
      A: __embind_finalize_value_object,
      Sa: __embind_register_bigint,
      sb: __embind_register_bool,
      f: __embind_register_class,
      h: __embind_register_class_constructor,
      c: __embind_register_class_function,
      d: __embind_register_class_property,
      Pa: __embind_register_emval,
      i: __embind_register_enum,
      b: __embind_register_enum_value,
      M: __embind_register_float,
      u: __embind_register_function,
      r: __embind_register_integer,
      l: __embind_register_memory_view,
      I: __embind_register_std_string,
      z: __embind_register_std_wstring,
      nd: __embind_register_value_array,
      O: __embind_register_value_array_element,
      B: __embind_register_value_object,
      p: __embind_register_value_object_field,
      Db: __embind_register_void,
      $a: __emscripten_get_now_is_monotonic,
      Va: __emscripten_throw_longjmp,
      o: __emval_as,
      P: __emval_call,
      v: __emval_call_method,
      e: __emval_decref,
      C: __emval_get_global,
      w: __emval_get_method_caller,
      m: __emval_get_property,
      k: __emval_incref,
      Ge: __emval_instanceof,
      ve: __emval_new,
      n: __emval_new_cstring,
      j: __emval_run_destructors,
      q: __emval_take_value,
      Ra: __munmap_js,
      a: _abort,
      F: _eglChooseConfig,
      Da: _eglCreateContext,
      Ca: _eglCreateWindowSurface,
      H: _eglDestroyContext,
      G: _eglDestroySurface,
      Fa: _eglGetCurrentContext,
      Ha: _eglGetCurrentDisplay,
      y: _eglGetCurrentSurface,
      Ga: _eglGetDisplay,
      Ia: _eglInitialize,
      Ea: _eglMakeCurrent,
      Ja: _eglReleaseThread,
      Ka: _eglSwapBuffers,
      Ba: em_severity_log,
      x: _emscripten_asm_const_int,
      g: _emscripten_asm_const_int_sync_on_main_thread,
      Oa: _emscripten_async_call,
      N: _emscripten_date_now,
      E: _emscripten_errn,
      Ta: _emscripten_get_heap_max,
      s: _emscripten_get_now,
      ca: _emscripten_glActiveTexture,
      ba: _emscripten_glAttachShader,
      Sc: _emscripten_glBeginQuery,
      sa: _emscripten_glBeginQueryEXT,
      zc: _emscripten_glBeginTransformFeedback,
      aa: _emscripten_glBindAttribLocation,
      $: _emscripten_glBindBuffer,
      wc: _emscripten_glBindBufferBase,
      xc: _emscripten_glBindBufferRange,
      _: _emscripten_glBindFramebuffer,
      Z: _emscripten_glBindRenderbuffer,
      Eb: _emscripten_glBindSampler,
      Y: _emscripten_glBindTexture,
      vb: _emscripten_glBindTransformFeedback,
      Ec: _emscripten_glBindVertexArray,
      ka: _emscripten_glBindVertexArrayOES,
      X: _emscripten_glBlendColor,
      W: _emscripten_glBlendEquation,
      V: _emscripten_glBlendEquationSeparate,
      U: _emscripten_glBlendFunc,
      T: _emscripten_glBlendFuncSeparate,
      Hc: _emscripten_glBlitFramebuffer,
      S: _emscripten_glBufferData,
      R: _emscripten_glBufferSubData,
      Q: _emscripten_glCheckFramebufferStatus,
      Df: _emscripten_glClear,
      $b: _emscripten_glClearBufferfi,
      ac: _emscripten_glClearBufferfv,
      cc: _emscripten_glClearBufferiv,
      bc: _emscripten_glClearBufferuiv,
      Cf: _emscripten_glClearColor,
      Bf: _emscripten_glClearDepthf,
      Af: _emscripten_glClearStencil,
      Nb: _emscripten_glClientWaitSync,
      zf: _emscripten_glColorMask,
      yf: _emscripten_glCompileShader,
      xf: _emscripten_glCompressedTexImage2D,
      Yc: _emscripten_glCompressedTexImage3D,
      wf: _emscripten_glCompressedTexSubImage2D,
      Xc: _emscripten_glCompressedTexSubImage3D,
      Zb: _emscripten_glCopyBufferSubData,
      vf: _emscripten_glCopyTexImage2D,
      uf: _emscripten_glCopyTexSubImage2D,
      Zc: _emscripten_glCopyTexSubImage3D,
      tf: _emscripten_glCreateProgram,
      sf: _emscripten_glCreateShader,
      rf: _emscripten_glCullFace,
      qf: _emscripten_glDeleteBuffers,
      pf: _emscripten_glDeleteFramebuffers,
      of: _emscripten_glDeleteProgram,
      Vc: _emscripten_glDeleteQueries,
      ua: _emscripten_glDeleteQueriesEXT,
      nf: _emscripten_glDeleteRenderbuffers,
      Gb: _emscripten_glDeleteSamplers,
      mf: _emscripten_glDeleteShader,
      Ob: _emscripten_glDeleteSync,
      lf: _emscripten_glDeleteTextures,
      ub: _emscripten_glDeleteTransformFeedbacks,
      Dc: _emscripten_glDeleteVertexArrays,
      ja: _emscripten_glDeleteVertexArraysOES,
      kf: _emscripten_glDepthFunc,
      jf: _emscripten_glDepthMask,
      hf: _emscripten_glDepthRangef,
      gf: _emscripten_glDetachShader,
      ff: _emscripten_glDisable,
      ef: _emscripten_glDisableVertexAttribArray,
      df: _emscripten_glDrawArrays,
      Sb: _emscripten_glDrawArraysInstanced,
      fa: _emscripten_glDrawArraysInstancedANGLE,
      db: _emscripten_glDrawArraysInstancedARB,
      ed: _emscripten_glDrawArraysInstancedEXT,
      eb: _emscripten_glDrawArraysInstancedNV,
      Oc: _emscripten_glDrawBuffers,
      cd: _emscripten_glDrawBuffersEXT,
      ga: _emscripten_glDrawBuffersWEBGL,
      cf: _emscripten_glDrawElements,
      Rb: _emscripten_glDrawElementsInstanced,
      ea: _emscripten_glDrawElementsInstancedANGLE,
      bb: _emscripten_glDrawElementsInstancedARB,
      cb: _emscripten_glDrawElementsInstancedEXT,
      dd: _emscripten_glDrawElementsInstancedNV,
      ad: _emscripten_glDrawRangeElements,
      bf: _emscripten_glEnable,
      af: _emscripten_glEnableVertexAttribArray,
      Rc: _emscripten_glEndQuery,
      ra: _emscripten_glEndQueryEXT,
      yc: _emscripten_glEndTransformFeedback,
      Qb: _emscripten_glFenceSync,
      $e: _emscripten_glFinish,
      _e: _emscripten_glFlush,
      Ze: _emscripten_glFramebufferRenderbuffer,
      Ye: _emscripten_glFramebufferTexture2D,
      Fc: _emscripten_glFramebufferTextureLayer,
      Xe: _emscripten_glFrontFace,
      We: _emscripten_glGenBuffers,
      Ue: _emscripten_glGenFramebuffers,
      Wc: _emscripten_glGenQueries,
      va: _emscripten_glGenQueriesEXT,
      Te: _emscripten_glGenRenderbuffers,
      Hb: _emscripten_glGenSamplers,
      Se: _emscripten_glGenTextures,
      tb: _emscripten_glGenTransformFeedbacks,
      Cc: _emscripten_glGenVertexArrays,
      ia: _emscripten_glGenVertexArraysOES,
      Ve: _emscripten_glGenerateMipmap,
      Re: _emscripten_glGetActiveAttrib,
      Qe: _emscripten_glGetActiveUniform,
      Ub: _emscripten_glGetActiveUniformBlockName,
      Vb: _emscripten_glGetActiveUniformBlockiv,
      Xb: _emscripten_glGetActiveUniformsiv,
      Pe: _emscripten_glGetAttachedShaders,
      Oe: _emscripten_glGetAttribLocation,
      Ne: _emscripten_glGetBooleanv,
      Ib: _emscripten_glGetBufferParameteri64v,
      Me: _emscripten_glGetBufferParameteriv,
      Le: _emscripten_glGetError,
      Ke: _emscripten_glGetFloatv,
      lc: _emscripten_glGetFragDataLocation,
      Je: _emscripten_glGetFramebufferAttachmentParameteriv,
      Jb: _emscripten_glGetInteger64i_v,
      Lb: _emscripten_glGetInteger64v,
      Ac: _emscripten_glGetIntegeri_v,
      Ie: _emscripten_glGetIntegerv,
      hb: _emscripten_glGetInternalformativ,
      ob: _emscripten_glGetProgramBinary,
      Fe: _emscripten_glGetProgramInfoLog,
      He: _emscripten_glGetProgramiv,
      ma: _emscripten_glGetQueryObjecti64vEXT,
      oa: _emscripten_glGetQueryObjectivEXT,
      la: _emscripten_glGetQueryObjectui64vEXT,
      Pc: _emscripten_glGetQueryObjectuiv,
      na: _emscripten_glGetQueryObjectuivEXT,
      Qc: _emscripten_glGetQueryiv,
      pa: _emscripten_glGetQueryivEXT,
      Ee: _emscripten_glGetRenderbufferParameteriv,
      xb: _emscripten_glGetSamplerParameterfv,
      yb: _emscripten_glGetSamplerParameteriv,
      Ce: _emscripten_glGetShaderInfoLog,
      Be: _emscripten_glGetShaderPrecisionFormat,
      Ae: _emscripten_glGetShaderSource,
      De: _emscripten_glGetShaderiv,
      ze: _emscripten_glGetString,
      _b: _emscripten_glGetStringi,
      Kb: _emscripten_glGetSynciv,
      ye: _emscripten_glGetTexParameterfv,
      xe: _emscripten_glGetTexParameteriv,
      uc: _emscripten_glGetTransformFeedbackVarying,
      Wb: _emscripten_glGetUniformBlockIndex,
      Yb: _emscripten_glGetUniformIndices,
      te: _emscripten_glGetUniformLocation,
      we: _emscripten_glGetUniformfv,
      ue: _emscripten_glGetUniformiv,
      mc: _emscripten_glGetUniformuiv,
      sc: _emscripten_glGetVertexAttribIiv,
      rc: _emscripten_glGetVertexAttribIuiv,
      qe: _emscripten_glGetVertexAttribPointerv,
      se: _emscripten_glGetVertexAttribfv,
      re: _emscripten_glGetVertexAttribiv,
      pe: _emscripten_glHint,
      lb: _emscripten_glInvalidateFramebuffer,
      kb: _emscripten_glInvalidateSubFramebuffer,
      oe: _emscripten_glIsBuffer,
      ne: _emscripten_glIsEnabled,
      me: _emscripten_glIsFramebuffer,
      le: _emscripten_glIsProgram,
      Tc: _emscripten_glIsQuery,
      ta: _emscripten_glIsQueryEXT,
      ke: _emscripten_glIsRenderbuffer,
      Fb: _emscripten_glIsSampler,
      je: _emscripten_glIsShader,
      Pb: _emscripten_glIsSync,
      ie: _emscripten_glIsTexture,
      rb: _emscripten_glIsTransformFeedback,
      Bc: _emscripten_glIsVertexArray,
      ha: _emscripten_glIsVertexArrayOES,
      he: _emscripten_glLineWidth,
      ge: _emscripten_glLinkProgram,
      qb: _emscripten_glPauseTransformFeedback,
      fe: _emscripten_glPixelStorei,
      ee: _emscripten_glPolygonOffset,
      nb: _emscripten_glProgramBinary,
      mb: _emscripten_glProgramParameteri,
      qa: _emscripten_glQueryCounterEXT,
      bd: _emscripten_glReadBuffer,
      de: _emscripten_glReadPixels,
      ce: _emscripten_glReleaseShaderCompiler,
      be: _emscripten_glRenderbufferStorage,
      Gc: _emscripten_glRenderbufferStorageMultisample,
      pb: _emscripten_glResumeTransformFeedback,
      ae: _emscripten_glSampleCoverage,
      Ab: _emscripten_glSamplerParameterf,
      zb: _emscripten_glSamplerParameterfv,
      Cb: _emscripten_glSamplerParameteri,
      Bb: _emscripten_glSamplerParameteriv,
      $d: _emscripten_glScissor,
      _d: _emscripten_glShaderBinary,
      Zd: _emscripten_glShaderSource,
      Yd: _emscripten_glStencilFunc,
      Xd: _emscripten_glStencilFuncSeparate,
      Wd: _emscripten_glStencilMask,
      Vd: _emscripten_glStencilMaskSeparate,
      Ud: _emscripten_glStencilOp,
      Td: _emscripten_glStencilOpSeparate,
      Sd: _emscripten_glTexImage2D,
      $c: _emscripten_glTexImage3D,
      Rd: _emscripten_glTexParameterf,
      Qd: _emscripten_glTexParameterfv,
      Pd: _emscripten_glTexParameteri,
      Od: _emscripten_glTexParameteriv,
      jb: _emscripten_glTexStorage2D,
      ib: _emscripten_glTexStorage3D,
      Nd: _emscripten_glTexSubImage2D,
      _c: _emscripten_glTexSubImage3D,
      vc: _emscripten_glTransformFeedbackVaryings,
      Md: _emscripten_glUniform1f,
      Ld: _emscripten_glUniform1fv,
      Kd: _emscripten_glUniform1i,
      Jd: _emscripten_glUniform1iv,
      kc: _emscripten_glUniform1ui,
      gc: _emscripten_glUniform1uiv,
      Hd: _emscripten_glUniform2f,
      Gd: _emscripten_glUniform2fv,
      Fd: _emscripten_glUniform2i,
      Ed: _emscripten_glUniform2iv,
      jc: _emscripten_glUniform2ui,
      fc: _emscripten_glUniform2uiv,
      Dd: _emscripten_glUniform3f,
      Cd: _emscripten_glUniform3fv,
      Bd: _emscripten_glUniform3i,
      Ad: _emscripten_glUniform3iv,
      ic: _emscripten_glUniform3ui,
      ec: _emscripten_glUniform3uiv,
      zd: _emscripten_glUniform4f,
      yd: _emscripten_glUniform4fv,
      xd: _emscripten_glUniform4i,
      wd: _emscripten_glUniform4iv,
      hc: _emscripten_glUniform4ui,
      dc: _emscripten_glUniform4uiv,
      Tb: _emscripten_glUniformBlockBinding,
      vd: _emscripten_glUniformMatrix2fv,
      Nc: _emscripten_glUniformMatrix2x3fv,
      Lc: _emscripten_glUniformMatrix2x4fv,
      ud: _emscripten_glUniformMatrix3fv,
      Mc: _emscripten_glUniformMatrix3x2fv,
      Jc: _emscripten_glUniformMatrix3x4fv,
      td: _emscripten_glUniformMatrix4fv,
      Kc: _emscripten_glUniformMatrix4x2fv,
      Ic: _emscripten_glUniformMatrix4x3fv,
      sd: _emscripten_glUseProgram,
      rd: _emscripten_glValidateProgram,
      qd: _emscripten_glVertexAttrib1f,
      pd: _emscripten_glVertexAttrib1fv,
      od: _emscripten_glVertexAttrib2f,
      md: _emscripten_glVertexAttrib2fv,
      ld: _emscripten_glVertexAttrib3f,
      kd: _emscripten_glVertexAttrib3fv,
      jd: _emscripten_glVertexAttrib4f,
      id: _emscripten_glVertexAttrib4fv,
      wb: _emscripten_glVertexAttribDivisor,
      da: _emscripten_glVertexAttribDivisorANGLE,
      fb: _emscripten_glVertexAttribDivisorARB,
      fd: _emscripten_glVertexAttribDivisorEXT,
      gb: _emscripten_glVertexAttribDivisorNV,
      qc: _emscripten_glVertexAttribI4i,
      oc: _emscripten_glVertexAttribI4iv,
      pc: _emscripten_glVertexAttribI4ui,
      nc: _emscripten_glVertexAttribI4uiv,
      tc: _emscripten_glVertexAttribIPointer,
      hd: _emscripten_glVertexAttribPointer,
      gd: _emscripten_glViewport,
      Mb: _emscripten_glWaitSync,
      za: _emscripten_log,
      ab: _emscripten_memcpy_js,
      wa: _emscripten_pc_get_function,
      Wa: _emscripten_resize_heap,
      ya: _emscripten_stack_snapshot,
      xa: _emscripten_stack_unwind_buffer,
      Ef: _emscripten_webgl_create_context,
      Ff: _emscripten_webgl_init_context_attributes,
      Id: _emscripten_webgl_make_context_current,
      Za: _environ_get,
      _a: _environ_sizes_get,
      L: _fd_close,
      J: _fd_read,
      Qa: _fd_seek,
      K: _fd_write,
      Aa: _getentropy,
      Na: invoke_ii,
      Ma: invoke_iii,
      t: invoke_vii,
      La: invoke_viiiii,
      Xa: _proc_exit,
      Ua: _strftime_l
    };
    var wasmExports = createWasm();
    var ___wasm_call_ctors = () => (___wasm_call_ctors = wasmExports["Hf"])();
    var _willPartialDraw = (Module["_willPartialDraw"] = (a0) => (_willPartialDraw = Module["_willPartialDraw"] = wasmExports["Jf"])(a0));
    var _draw = (Module["_draw"] = (a0) => (_draw = Module["_draw"] = wasmExports["Kf"])(a0));
    var _malloc = (a0) => (_malloc = wasmExports["Lf"])(a0);
    var _free = (a0) => (_free = wasmExports["Mf"])(a0);
    var ___getTypeName = (a0) => (___getTypeName = wasmExports["Nf"])(a0);
    var __embind_initialize_bindings = (Module["__embind_initialize_bindings"] = () =>
      (__embind_initialize_bindings = Module["__embind_initialize_bindings"] = wasmExports["Of"])());
    var ___errno_location = () => (___errno_location = wasmExports["__errno_location"])();
    var _setThrew = (a0, a1) => (_setThrew = wasmExports["Pf"])(a0, a1);
    var stackSave = () => (stackSave = wasmExports["Qf"])();
    var stackRestore = (a0) => (stackRestore = wasmExports["Rf"])(a0);
    var dynCall_i = (Module["dynCall_i"] = (a0) => (dynCall_i = Module["dynCall_i"] = wasmExports["Sf"])(a0));
    var dynCall_iiidd = (Module["dynCall_iiidd"] = (a0, a1, a2, a3, a4) =>
      (dynCall_iiidd = Module["dynCall_iiidd"] = wasmExports["Tf"])(a0, a1, a2, a3, a4));
    var dynCall_iidd = (Module["dynCall_iidd"] = (a0, a1, a2, a3) =>
      (dynCall_iidd = Module["dynCall_iidd"] = wasmExports["Uf"])(a0, a1, a2, a3));
    var dynCall_ii = (Module["dynCall_ii"] = (a0, a1) => (dynCall_ii = Module["dynCall_ii"] = wasmExports["Vf"])(a0, a1));
    var dynCall_vi = (Module["dynCall_vi"] = (a0, a1) => (dynCall_vi = Module["dynCall_vi"] = wasmExports["Wf"])(a0, a1));
    var dynCall_iii = (Module["dynCall_iii"] = (a0, a1, a2) => (dynCall_iii = Module["dynCall_iii"] = wasmExports["Xf"])(a0, a1, a2));
    var dynCall_vii = (Module["dynCall_vii"] = (a0, a1, a2) => (dynCall_vii = Module["dynCall_vii"] = wasmExports["Yf"])(a0, a1, a2));
    var dynCall_iiiii = (Module["dynCall_iiiii"] = (a0, a1, a2, a3, a4) =>
      (dynCall_iiiii = Module["dynCall_iiiii"] = wasmExports["Zf"])(a0, a1, a2, a3, a4));
    var dynCall_iiii = (Module["dynCall_iiii"] = (a0, a1, a2, a3) =>
      (dynCall_iiii = Module["dynCall_iiii"] = wasmExports["_f"])(a0, a1, a2, a3));
    var dynCall_viii = (Module["dynCall_viii"] = (a0, a1, a2, a3) =>
      (dynCall_viii = Module["dynCall_viii"] = wasmExports["$f"])(a0, a1, a2, a3));
    var dynCall_iiiiii = (Module["dynCall_iiiiii"] = (a0, a1, a2, a3, a4, a5) =>
      (dynCall_iiiiii = Module["dynCall_iiiiii"] = wasmExports["ag"])(a0, a1, a2, a3, a4, a5));
    var dynCall_viiii = (Module["dynCall_viiii"] = (a0, a1, a2, a3, a4) =>
      (dynCall_viiii = Module["dynCall_viiii"] = wasmExports["bg"])(a0, a1, a2, a3, a4));
    var dynCall_iiiifi = (Module["dynCall_iiiifi"] = (a0, a1, a2, a3, a4, a5) =>
      (dynCall_iiiifi = Module["dynCall_iiiifi"] = wasmExports["cg"])(a0, a1, a2, a3, a4, a5));
    var dynCall_iiiiifi = (Module["dynCall_iiiiifi"] = (a0, a1, a2, a3, a4, a5, a6) =>
      (dynCall_iiiiifi = Module["dynCall_iiiiifi"] = wasmExports["dg"])(a0, a1, a2, a3, a4, a5, a6));
    var dynCall_iiff = (Module["dynCall_iiff"] = (a0, a1, a2, a3) =>
      (dynCall_iiff = Module["dynCall_iiff"] = wasmExports["eg"])(a0, a1, a2, a3));
    var dynCall_iiiff = (Module["dynCall_iiiff"] = (a0, a1, a2, a3, a4) =>
      (dynCall_iiiff = Module["dynCall_iiiff"] = wasmExports["fg"])(a0, a1, a2, a3, a4));
    var dynCall_fi = (Module["dynCall_fi"] = (a0, a1) => (dynCall_fi = Module["dynCall_fi"] = wasmExports["gg"])(a0, a1));
    var dynCall_fii = (Module["dynCall_fii"] = (a0, a1, a2) => (dynCall_fii = Module["dynCall_fii"] = wasmExports["hg"])(a0, a1, a2));
    var dynCall_viiiii = (Module["dynCall_viiiii"] = (a0, a1, a2, a3, a4, a5) =>
      (dynCall_viiiii = Module["dynCall_viiiii"] = wasmExports["ig"])(a0, a1, a2, a3, a4, a5));
    var dynCall_vid = (Module["dynCall_vid"] = (a0, a1, a2) => (dynCall_vid = Module["dynCall_vid"] = wasmExports["jg"])(a0, a1, a2));
    var dynCall_viid = (Module["dynCall_viid"] = (a0, a1, a2, a3) =>
      (dynCall_viid = Module["dynCall_viid"] = wasmExports["kg"])(a0, a1, a2, a3));
    var dynCall_di = (Module["dynCall_di"] = (a0, a1) => (dynCall_di = Module["dynCall_di"] = wasmExports["lg"])(a0, a1));
    var dynCall_d = (Module["dynCall_d"] = (a0) => (dynCall_d = Module["dynCall_d"] = wasmExports["mg"])(a0));
    var dynCall_vif = (Module["dynCall_vif"] = (a0, a1, a2) => (dynCall_vif = Module["dynCall_vif"] = wasmExports["ng"])(a0, a1, a2));
    var dynCall_viif = (Module["dynCall_viif"] = (a0, a1, a2, a3) =>
      (dynCall_viif = Module["dynCall_viif"] = wasmExports["og"])(a0, a1, a2, a3));
    var dynCall_dii = (Module["dynCall_dii"] = (a0, a1, a2) => (dynCall_dii = Module["dynCall_dii"] = wasmExports["pg"])(a0, a1, a2));
    var dynCall_v = (Module["dynCall_v"] = (a0) => (dynCall_v = Module["dynCall_v"] = wasmExports["qg"])(a0));
    var dynCall_iidi = (Module["dynCall_iidi"] = (a0, a1, a2, a3) =>
      (dynCall_iidi = Module["dynCall_iidi"] = wasmExports["rg"])(a0, a1, a2, a3));
    var dynCall_viiiiii = (Module["dynCall_viiiiii"] = (a0, a1, a2, a3, a4, a5, a6) =>
      (dynCall_viiiiii = Module["dynCall_viiiiii"] = wasmExports["sg"])(a0, a1, a2, a3, a4, a5, a6));
    var dynCall_viiif = (Module["dynCall_viiif"] = (a0, a1, a2, a3, a4) =>
      (dynCall_viiif = Module["dynCall_viiif"] = wasmExports["tg"])(a0, a1, a2, a3, a4));
    var dynCall_viiiif = (Module["dynCall_viiiif"] = (a0, a1, a2, a3, a4, a5) =>
      (dynCall_viiiif = Module["dynCall_viiiif"] = wasmExports["ug"])(a0, a1, a2, a3, a4, a5));
    var dynCall_viiiiiiii = (Module["dynCall_viiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8) =>
      (dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = wasmExports["vg"])(a0, a1, a2, a3, a4, a5, a6, a7, a8));
    var dynCall_iiiijij = (Module["dynCall_iiiijij"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8) =>
      (dynCall_iiiijij = Module["dynCall_iiiijij"] = wasmExports["wg"])(a0, a1, a2, a3, a4, a5, a6, a7, a8));
    var dynCall_viidi = (Module["dynCall_viidi"] = (a0, a1, a2, a3, a4) =>
      (dynCall_viidi = Module["dynCall_viidi"] = wasmExports["xg"])(a0, a1, a2, a3, a4));
    var dynCall_viifi = (Module["dynCall_viifi"] = (a0, a1, a2, a3, a4) =>
      (dynCall_viifi = Module["dynCall_viifi"] = wasmExports["yg"])(a0, a1, a2, a3, a4));
    var dynCall_viiifi = (Module["dynCall_viiifi"] = (a0, a1, a2, a3, a4, a5) =>
      (dynCall_viiifi = Module["dynCall_viiifi"] = wasmExports["zg"])(a0, a1, a2, a3, a4, a5));
    var dynCall_viiid = (Module["dynCall_viiid"] = (a0, a1, a2, a3, a4) =>
      (dynCall_viiid = Module["dynCall_viiid"] = wasmExports["Ag"])(a0, a1, a2, a3, a4));
    var dynCall_fiiif = (Module["dynCall_fiiif"] = (a0, a1, a2, a3, a4) =>
      (dynCall_fiiif = Module["dynCall_fiiif"] = wasmExports["Bg"])(a0, a1, a2, a3, a4));
    var dynCall_viidiff = (Module["dynCall_viidiff"] = (a0, a1, a2, a3, a4, a5, a6) =>
      (dynCall_viidiff = Module["dynCall_viidiff"] = wasmExports["Cg"])(a0, a1, a2, a3, a4, a5, a6));
    var dynCall_iiidi = (Module["dynCall_iiidi"] = (a0, a1, a2, a3, a4) =>
      (dynCall_iiidi = Module["dynCall_iiidi"] = wasmExports["Dg"])(a0, a1, a2, a3, a4));
    var dynCall_vidii = (Module["dynCall_vidii"] = (a0, a1, a2, a3, a4) =>
      (dynCall_vidii = Module["dynCall_vidii"] = wasmExports["Eg"])(a0, a1, a2, a3, a4));
    var dynCall_vifidi = (Module["dynCall_vifidi"] = (a0, a1, a2, a3, a4, a5) =>
      (dynCall_vifidi = Module["dynCall_vifidi"] = wasmExports["Fg"])(a0, a1, a2, a3, a4, a5));
    var dynCall_viiiiiii = (Module["dynCall_viiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7) =>
      (dynCall_viiiiiii = Module["dynCall_viiiiiii"] = wasmExports["Gg"])(a0, a1, a2, a3, a4, a5, a6, a7));
    var dynCall_fif = (Module["dynCall_fif"] = (a0, a1, a2) => (dynCall_fif = Module["dynCall_fif"] = wasmExports["Hg"])(a0, a1, a2));
    var dynCall_viidii = (Module["dynCall_viidii"] = (a0, a1, a2, a3, a4, a5) =>
      (dynCall_viidii = Module["dynCall_viidii"] = wasmExports["Ig"])(a0, a1, a2, a3, a4, a5));
    var dynCall_fiii = (Module["dynCall_fiii"] = (a0, a1, a2, a3) =>
      (dynCall_fiii = Module["dynCall_fiii"] = wasmExports["Jg"])(a0, a1, a2, a3));
    var dynCall_iiiif = (Module["dynCall_iiiif"] = (a0, a1, a2, a3, a4) =>
      (dynCall_iiiif = Module["dynCall_iiiif"] = wasmExports["Kg"])(a0, a1, a2, a3, a4));
    var dynCall_viiiff = (Module["dynCall_viiiff"] = (a0, a1, a2, a3, a4, a5) =>
      (dynCall_viiiff = Module["dynCall_viiiff"] = wasmExports["Lg"])(a0, a1, a2, a3, a4, a5));
    var dynCall_iiiiid = (Module["dynCall_iiiiid"] = (a0, a1, a2, a3, a4, a5) =>
      (dynCall_iiiiid = Module["dynCall_iiiiid"] = wasmExports["Mg"])(a0, a1, a2, a3, a4, a5));
    var dynCall_iiiid = (Module["dynCall_iiiid"] = (a0, a1, a2, a3, a4) =>
      (dynCall_iiiid = Module["dynCall_iiiid"] = wasmExports["Ng"])(a0, a1, a2, a3, a4));
    var dynCall_iiiiiiii = (Module["dynCall_iiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7) =>
      (dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = wasmExports["Og"])(a0, a1, a2, a3, a4, a5, a6, a7));
    var dynCall_ji = (Module["dynCall_ji"] = (a0, a1) => (dynCall_ji = Module["dynCall_ji"] = wasmExports["Pg"])(a0, a1));
    var dynCall_viijii = (Module["dynCall_viijii"] = (a0, a1, a2, a3, a4, a5, a6) =>
      (dynCall_viijii = Module["dynCall_viijii"] = wasmExports["Qg"])(a0, a1, a2, a3, a4, a5, a6));
    var dynCall_iiiiiii = (Module["dynCall_iiiiiii"] = (a0, a1, a2, a3, a4, a5, a6) =>
      (dynCall_iiiiiii = Module["dynCall_iiiiiii"] = wasmExports["Rg"])(a0, a1, a2, a3, a4, a5, a6));
    var dynCall_vij = (Module["dynCall_vij"] = (a0, a1, a2, a3) =>
      (dynCall_vij = Module["dynCall_vij"] = wasmExports["Sg"])(a0, a1, a2, a3));
    var dynCall_vijjj = (Module["dynCall_vijjj"] = (a0, a1, a2, a3, a4, a5, a6, a7) =>
      (dynCall_vijjj = Module["dynCall_vijjj"] = wasmExports["Tg"])(a0, a1, a2, a3, a4, a5, a6, a7));
    var dynCall_vj = (Module["dynCall_vj"] = (a0, a1, a2) => (dynCall_vj = Module["dynCall_vj"] = wasmExports["Ug"])(a0, a1, a2));
    var dynCall_viij = (Module["dynCall_viij"] = (a0, a1, a2, a3, a4) =>
      (dynCall_viij = Module["dynCall_viij"] = wasmExports["Vg"])(a0, a1, a2, a3, a4));
    var dynCall_viiiiij = (Module["dynCall_viiiiij"] = (a0, a1, a2, a3, a4, a5, a6, a7) =>
      (dynCall_viiiiij = Module["dynCall_viiiiij"] = wasmExports["Wg"])(a0, a1, a2, a3, a4, a5, a6, a7));
    var dynCall_vffff = (Module["dynCall_vffff"] = (a0, a1, a2, a3, a4) =>
      (dynCall_vffff = Module["dynCall_vffff"] = wasmExports["Xg"])(a0, a1, a2, a3, a4));
    var dynCall_vf = (Module["dynCall_vf"] = (a0, a1) => (dynCall_vf = Module["dynCall_vf"] = wasmExports["Yg"])(a0, a1));
    var dynCall_viiiiiiiii = (Module["dynCall_viiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) =>
      (dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = wasmExports["Zg"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9));
    var dynCall_vff = (Module["dynCall_vff"] = (a0, a1, a2) => (dynCall_vff = Module["dynCall_vff"] = wasmExports["_g"])(a0, a1, a2));
    var dynCall_vfi = (Module["dynCall_vfi"] = (a0, a1, a2) => (dynCall_vfi = Module["dynCall_vfi"] = wasmExports["$g"])(a0, a1, a2));
    var dynCall_viff = (Module["dynCall_viff"] = (a0, a1, a2, a3) =>
      (dynCall_viff = Module["dynCall_viff"] = wasmExports["ah"])(a0, a1, a2, a3));
    var dynCall_vifff = (Module["dynCall_vifff"] = (a0, a1, a2, a3, a4) =>
      (dynCall_vifff = Module["dynCall_vifff"] = wasmExports["bh"])(a0, a1, a2, a3, a4));
    var dynCall_viffff = (Module["dynCall_viffff"] = (a0, a1, a2, a3, a4, a5) =>
      (dynCall_viffff = Module["dynCall_viffff"] = wasmExports["ch"])(a0, a1, a2, a3, a4, a5));
    var dynCall_viiiiiiiiii = (Module["dynCall_viiiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) =>
      (dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = wasmExports["dh"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10));
    var dynCall_viiiiiiiiiii = (Module["dynCall_viiiiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) =>
      (dynCall_viiiiiiiiiii = Module["dynCall_viiiiiiiiiii"] = wasmExports["eh"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11));
    var dynCall_iijjiiii = (Module["dynCall_iijjiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) =>
      (dynCall_iijjiiii = Module["dynCall_iijjiiii"] = wasmExports["fh"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9));
    var dynCall_jiji = (Module["dynCall_jiji"] = (a0, a1, a2, a3, a4) =>
      (dynCall_jiji = Module["dynCall_jiji"] = wasmExports["gh"])(a0, a1, a2, a3, a4));
    var dynCall_iiiiiiiii = (Module["dynCall_iiiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8) =>
      (dynCall_iiiiiiiii = Module["dynCall_iiiiiiiii"] = wasmExports["hh"])(a0, a1, a2, a3, a4, a5, a6, a7, a8));
    var dynCall_iiiiij = (Module["dynCall_iiiiij"] = (a0, a1, a2, a3, a4, a5, a6) =>
      (dynCall_iiiiij = Module["dynCall_iiiiij"] = wasmExports["ih"])(a0, a1, a2, a3, a4, a5, a6));
    var dynCall_iiiiijj = (Module["dynCall_iiiiijj"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8) =>
      (dynCall_iiiiijj = Module["dynCall_iiiiijj"] = wasmExports["jh"])(a0, a1, a2, a3, a4, a5, a6, a7, a8));
    var dynCall_iiiiiijj = (Module["dynCall_iiiiiijj"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) =>
      (dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = wasmExports["kh"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9));
    var ___start_em_js = (Module["___start_em_js"] = 328576);
    var ___stop_em_js = (Module["___stop_em_js"] = 329099);
    function invoke_vii(index, a1, a2) {
      var sp = stackSave();
      try {
        dynCall_vii(index, a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_ii(index, a1) {
      var sp = stackSave();
      try {
        return dynCall_ii(index, a1);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iii(index, a1, a2) {
      var sp = stackSave();
      try {
        return dynCall_iii(index, a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiii(index, a1, a2, a3, a4, a5) {
      var sp = stackSave();
      try {
        dynCall_viiiii(index, a1, a2, a3, a4, a5);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0);
      }
    }
    Module["ENV"] = ENV;
    var calledRun;
    dependenciesFulfilled = function runCaller() {
      if (!calledRun) run();
      if (!calledRun) dependenciesFulfilled = runCaller;
    };
    function run() {
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
        readyPromiseResolve(Module);
        if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
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
    run();

    return moduleArg.ready;
  };
})();
if (typeof exports === "object" && typeof module === "object") module.exports = inkLoadWasmModule;
else if (typeof define === "function" && define["amd"]) define([], () => inkLoadWasmModule);
(function () {
  // Look for a registered function to call to initialize Ink after the module has loaded.
  var globalScope = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
  if (globalScope["inkLoadWasmPostRun"]) {
    globalScope["inkLoadWasmPostRun"]();
  }
})();
