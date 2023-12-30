"use strict";
(() => {
  const functors = [
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        $h‍_imports([]);
        const universalThis = globalThis;
        $h‍_once.universalThis(universalThis);
        const {
          Array: Array,
          Date: Date,
          FinalizationRegistry: FinalizationRegistry,
          Float32Array: Float32Array,
          JSON: JSON,
          Map: Map,
          Math: Math,
          Number: Number,
          Object: Object,
          Promise: Promise,
          Proxy: Proxy,
          Reflect: Reflect,
          RegExp: FERAL_REG_EXP,
          Set: Set,
          String: String,
          Symbol: Symbol,
          WeakMap: WeakMap,
          WeakSet: WeakSet
        } = globalThis;
        $h‍_once.Array(Array),
          $h‍_once.Date(Date),
          $h‍_once.FinalizationRegistry(FinalizationRegistry),
          $h‍_once.Float32Array(Float32Array),
          $h‍_once.JSON(JSON),
          $h‍_once.Map(Map),
          $h‍_once.Math(Math),
          $h‍_once.Number(Number),
          $h‍_once.Object(Object),
          $h‍_once.Promise(Promise),
          $h‍_once.Proxy(Proxy),
          $h‍_once.Reflect(Reflect),
          $h‍_once.FERAL_REG_EXP(FERAL_REG_EXP),
          $h‍_once.Set(Set),
          $h‍_once.String(String),
          $h‍_once.Symbol(Symbol),
          $h‍_once.WeakMap(WeakMap),
          $h‍_once.WeakSet(WeakSet);
        const {
          Error: FERAL_ERROR,
          RangeError: RangeError,
          ReferenceError: ReferenceError,
          SyntaxError: SyntaxError,
          TypeError: TypeError
        } = globalThis;
        $h‍_once.FERAL_ERROR(FERAL_ERROR),
          $h‍_once.RangeError(RangeError),
          $h‍_once.ReferenceError(ReferenceError),
          $h‍_once.SyntaxError(SyntaxError),
          $h‍_once.TypeError(TypeError);
        const {
          assign: assign,
          create: create,
          defineProperties: defineProperties,
          entries: entries,
          freeze: freeze,
          getOwnPropertyDescriptor: getOwnPropertyDescriptor,
          getOwnPropertyDescriptors: getOwnPropertyDescriptors,
          getOwnPropertyNames: getOwnPropertyNames,
          getPrototypeOf: getPrototypeOf,
          is: is,
          isFrozen: isFrozen,
          isSealed: isSealed,
          isExtensible: isExtensible,
          keys: keys,
          prototype: objectPrototype,
          seal: seal,
          preventExtensions: preventExtensions,
          setPrototypeOf: setPrototypeOf,
          values: values,
          fromEntries: fromEntries
        } = Object;
        $h‍_once.assign(assign),
          $h‍_once.create(create),
          $h‍_once.defineProperties(defineProperties),
          $h‍_once.entries(entries),
          $h‍_once.freeze(freeze),
          $h‍_once.getOwnPropertyDescriptor(getOwnPropertyDescriptor),
          $h‍_once.getOwnPropertyDescriptors(getOwnPropertyDescriptors),
          $h‍_once.getOwnPropertyNames(getOwnPropertyNames),
          $h‍_once.getPrototypeOf(getPrototypeOf),
          $h‍_once.is(is),
          $h‍_once.isFrozen(isFrozen),
          $h‍_once.isSealed(isSealed),
          $h‍_once.isExtensible(isExtensible),
          $h‍_once.keys(keys),
          $h‍_once.objectPrototype(objectPrototype),
          $h‍_once.seal(seal),
          $h‍_once.preventExtensions(preventExtensions),
          $h‍_once.setPrototypeOf(setPrototypeOf),
          $h‍_once.values(values),
          $h‍_once.fromEntries(fromEntries);
        const {
          species: speciesSymbol,
          toStringTag: toStringTagSymbol,
          iterator: iteratorSymbol,
          matchAll: matchAllSymbol,
          unscopables: unscopablesSymbol,
          keyFor: symbolKeyFor,
          for: symbolFor
        } = Symbol;
        $h‍_once.speciesSymbol(speciesSymbol),
          $h‍_once.toStringTagSymbol(toStringTagSymbol),
          $h‍_once.iteratorSymbol(iteratorSymbol),
          $h‍_once.matchAllSymbol(matchAllSymbol),
          $h‍_once.unscopablesSymbol(unscopablesSymbol),
          $h‍_once.symbolKeyFor(symbolKeyFor),
          $h‍_once.symbolFor(symbolFor);
        const { isInteger: isInteger } = Number;
        $h‍_once.isInteger(isInteger);
        const { stringify: stringifyJson } = JSON;
        $h‍_once.stringifyJson(stringifyJson);
        const { defineProperty: originalDefineProperty } = Object;
        $h‍_once.defineProperty((object, prop, descriptor) => {
          const result = originalDefineProperty(object, prop, descriptor);
          if (result !== object)
            throw TypeError(
              `Please report that the original defineProperty silently failed to set ${stringifyJson(
                String(prop)
              )}. (SES_DEFINE_PROPERTY_FAILED_SILENTLY)`
            );
          return result;
        });
        const {
          apply: apply,
          construct: construct,
          get: reflectGet,
          getOwnPropertyDescriptor: reflectGetOwnPropertyDescriptor,
          has: reflectHas,
          isExtensible: reflectIsExtensible,
          ownKeys: ownKeys,
          preventExtensions: reflectPreventExtensions,
          set: reflectSet
        } = Reflect;
        $h‍_once.apply(apply),
          $h‍_once.construct(construct),
          $h‍_once.reflectGet(reflectGet),
          $h‍_once.reflectGetOwnPropertyDescriptor(reflectGetOwnPropertyDescriptor),
          $h‍_once.reflectHas(reflectHas),
          $h‍_once.reflectIsExtensible(reflectIsExtensible),
          $h‍_once.ownKeys(ownKeys),
          $h‍_once.reflectPreventExtensions(reflectPreventExtensions),
          $h‍_once.reflectSet(reflectSet);
        const { isArray: isArray, prototype: arrayPrototype } = Array;
        $h‍_once.isArray(isArray), $h‍_once.arrayPrototype(arrayPrototype);
        const { prototype: mapPrototype } = Map;
        $h‍_once.mapPrototype(mapPrototype);
        const { revocable: proxyRevocable } = Proxy;
        $h‍_once.proxyRevocable(proxyRevocable);
        const { prototype: regexpPrototype } = RegExp;
        $h‍_once.regexpPrototype(regexpPrototype);
        const { prototype: setPrototype } = Set;
        $h‍_once.setPrototype(setPrototype);
        const { prototype: stringPrototype } = String;
        $h‍_once.stringPrototype(stringPrototype);
        const { prototype: weakmapPrototype } = WeakMap;
        $h‍_once.weakmapPrototype(weakmapPrototype);
        const { prototype: weaksetPrototype } = WeakSet;
        $h‍_once.weaksetPrototype(weaksetPrototype);
        const { prototype: functionPrototype } = Function;
        $h‍_once.functionPrototype(functionPrototype);
        const { prototype: promisePrototype } = Promise;
        $h‍_once.promisePrototype(promisePrototype);
        const typedArrayPrototype = getPrototypeOf(Uint8Array.prototype);
        $h‍_once.typedArrayPrototype(typedArrayPrototype);
        const { bind: bind } = functionPrototype,
          uncurryThis = bind.bind(bind.call);
        $h‍_once.uncurryThis(uncurryThis);
        const objectHasOwnProperty = uncurryThis(objectPrototype.hasOwnProperty);
        $h‍_once.objectHasOwnProperty(objectHasOwnProperty);
        const arrayFilter = uncurryThis(arrayPrototype.filter);
        $h‍_once.arrayFilter(arrayFilter);
        const arrayForEach = uncurryThis(arrayPrototype.forEach);
        $h‍_once.arrayForEach(arrayForEach);
        const arrayIncludes = uncurryThis(arrayPrototype.includes);
        $h‍_once.arrayIncludes(arrayIncludes);
        const arrayJoin = uncurryThis(arrayPrototype.join);
        $h‍_once.arrayJoin(arrayJoin);
        const arrayMap = uncurryThis(arrayPrototype.map);
        $h‍_once.arrayMap(arrayMap);
        const arrayPop = uncurryThis(arrayPrototype.pop);
        $h‍_once.arrayPop(arrayPop);
        const arrayPush = uncurryThis(arrayPrototype.push);
        $h‍_once.arrayPush(arrayPush);
        const arraySlice = uncurryThis(arrayPrototype.slice);
        $h‍_once.arraySlice(arraySlice);
        const arraySome = uncurryThis(arrayPrototype.some);
        $h‍_once.arraySome(arraySome);
        const arraySort = uncurryThis(arrayPrototype.sort);
        $h‍_once.arraySort(arraySort);
        const iterateArray = uncurryThis(arrayPrototype[iteratorSymbol]);
        $h‍_once.iterateArray(iterateArray);
        const mapSet = uncurryThis(mapPrototype.set);
        $h‍_once.mapSet(mapSet);
        const mapGet = uncurryThis(mapPrototype.get);
        $h‍_once.mapGet(mapGet);
        const mapHas = uncurryThis(mapPrototype.has);
        $h‍_once.mapHas(mapHas);
        const mapDelete = uncurryThis(mapPrototype.delete);
        $h‍_once.mapDelete(mapDelete);
        const mapEntries = uncurryThis(mapPrototype.entries);
        $h‍_once.mapEntries(mapEntries);
        const iterateMap = uncurryThis(mapPrototype[iteratorSymbol]);
        $h‍_once.iterateMap(iterateMap);
        const setAdd = uncurryThis(setPrototype.add);
        $h‍_once.setAdd(setAdd);
        const setDelete = uncurryThis(setPrototype.delete);
        $h‍_once.setDelete(setDelete);
        const setForEach = uncurryThis(setPrototype.forEach);
        $h‍_once.setForEach(setForEach);
        const setHas = uncurryThis(setPrototype.has);
        $h‍_once.setHas(setHas);
        const iterateSet = uncurryThis(setPrototype[iteratorSymbol]);
        $h‍_once.iterateSet(iterateSet);
        const regexpTest = uncurryThis(regexpPrototype.test);
        $h‍_once.regexpTest(regexpTest);
        const regexpExec = uncurryThis(regexpPrototype.exec);
        $h‍_once.regexpExec(regexpExec);
        const matchAllRegExp = uncurryThis(regexpPrototype[matchAllSymbol]);
        $h‍_once.matchAllRegExp(matchAllRegExp);
        const stringEndsWith = uncurryThis(stringPrototype.endsWith);
        $h‍_once.stringEndsWith(stringEndsWith);
        const stringIncludes = uncurryThis(stringPrototype.includes);
        $h‍_once.stringIncludes(stringIncludes);
        const stringIndexOf = uncurryThis(stringPrototype.indexOf);
        $h‍_once.stringIndexOf(stringIndexOf);
        const stringMatch = uncurryThis(stringPrototype.match);
        $h‍_once.stringMatch(stringMatch);
        const stringReplace = uncurryThis(stringPrototype.replace);
        $h‍_once.stringReplace(stringReplace);
        const stringSearch = uncurryThis(stringPrototype.search);
        $h‍_once.stringSearch(stringSearch);
        const stringSlice = uncurryThis(stringPrototype.slice);
        $h‍_once.stringSlice(stringSlice);
        const stringSplit = uncurryThis(stringPrototype.split);
        $h‍_once.stringSplit(stringSplit);
        const stringStartsWith = uncurryThis(stringPrototype.startsWith);
        $h‍_once.stringStartsWith(stringStartsWith);
        const iterateString = uncurryThis(stringPrototype[iteratorSymbol]);
        $h‍_once.iterateString(iterateString);
        const weakmapDelete = uncurryThis(weakmapPrototype.delete);
        $h‍_once.weakmapDelete(weakmapDelete);
        const weakmapGet = uncurryThis(weakmapPrototype.get);
        $h‍_once.weakmapGet(weakmapGet);
        const weakmapHas = uncurryThis(weakmapPrototype.has);
        $h‍_once.weakmapHas(weakmapHas);
        const weakmapSet = uncurryThis(weakmapPrototype.set);
        $h‍_once.weakmapSet(weakmapSet);
        const weaksetAdd = uncurryThis(weaksetPrototype.add);
        $h‍_once.weaksetAdd(weaksetAdd);
        const weaksetHas = uncurryThis(weaksetPrototype.has);
        $h‍_once.weaksetHas(weaksetHas);
        const functionToString = uncurryThis(functionPrototype.toString);
        $h‍_once.functionToString(functionToString);
        const { all: all } = Promise;
        $h‍_once.promiseAll((promises) => apply(all, Promise, [promises]));
        const promiseCatch = uncurryThis(promisePrototype.catch);
        $h‍_once.promiseCatch(promiseCatch);
        const promiseThen = uncurryThis(promisePrototype.then);
        $h‍_once.promiseThen(promiseThen);
        const finalizationRegistryRegister = FinalizationRegistry && uncurryThis(FinalizationRegistry.prototype.register);
        $h‍_once.finalizationRegistryRegister(finalizationRegistryRegister);
        const finalizationRegistryUnregister = FinalizationRegistry && uncurryThis(FinalizationRegistry.prototype.unregister);
        $h‍_once.finalizationRegistryUnregister(finalizationRegistryUnregister);
        $h‍_once.getConstructorOf((fn) => reflectGet(getPrototypeOf(fn), "constructor"));
        const immutableObject = freeze(create(null));
        $h‍_once.immutableObject(immutableObject);
        $h‍_once.isObject((value) => Object(value) === value);
        $h‍_once.isError((value) => value instanceof FERAL_ERROR);
        const FERAL_EVAL = eval;
        $h‍_once.FERAL_EVAL(FERAL_EVAL);
        const FERAL_FUNCTION = Function;
        $h‍_once.FERAL_FUNCTION(FERAL_FUNCTION);
        $h‍_once.noEvalEvaluate(() => {
          throw TypeError('Cannot eval with evalTaming set to "noEval" (SES_NO_EVAL)');
        });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let TypeError;
        if (
          ($h‍_imports([["./commons.js", [["TypeError", [($h‍_a) => (TypeError = $h‍_a)]]]]]),
          (function () {
            return this;
          })())
        )
          throw TypeError("SES failed to initialize, sloppy mode (SES_NO_SLOPPY)");
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        $h‍_imports([]);
        const { freeze: freeze } = Object,
          { apply: apply } = Reflect,
          arrayPush = ((fn = Array.prototype.push), (receiver, ...args) => apply(fn, receiver, args));
        var fn;
        const q = JSON.stringify,
          Fail = (literals, ...args) => {
            let msg = literals[0];
            for (let i = 0; i < args.length; i += 1) msg = `${msg}${args[i]}${literals[i + 1]}`;
            throw Error(msg);
          },
          makeEnvironmentCaptor = (aGlobal) => {
            const capturedEnvironmentOptionNames = [],
              getEnvironmentOption = (optionName, defaultSetting) => {
                "string" == typeof optionName || Fail`Environment option name ${q(optionName)} must be a string.`,
                  "string" == typeof defaultSetting || Fail`Environment option default setting ${q(defaultSetting)} must be a string.`;
                let setting = defaultSetting;
                const globalProcess = aGlobal.process;
                if (globalProcess && "object" == typeof globalProcess) {
                  const globalEnv = globalProcess.env;
                  if (globalEnv && "object" == typeof globalEnv && optionName in globalEnv) {
                    arrayPush(capturedEnvironmentOptionNames, optionName);
                    const optionValue = globalEnv[optionName];
                    "string" == typeof optionValue ||
                      Fail`Environment option named ${q(optionName)}, if present, must have a corresponding string value, got ${q(
                        optionValue
                      )}`,
                      (setting = optionValue);
                  }
                }
                return setting;
              };
            freeze(getEnvironmentOption);
            const getCapturedEnvironmentOptionNames = () => freeze([...capturedEnvironmentOptionNames]);
            return (
              freeze(getCapturedEnvironmentOptionNames),
              freeze({ getEnvironmentOption: getEnvironmentOption, getCapturedEnvironmentOptionNames: getCapturedEnvironmentOptionNames })
            );
          };
        $h‍_once.makeEnvironmentCaptor(makeEnvironmentCaptor), freeze(makeEnvironmentCaptor);
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        $h‍_imports([["./src/env-options.js", []]]);
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let Set,
          String,
          isArray,
          arrayJoin,
          arraySlice,
          arraySort,
          arrayMap,
          keys,
          fromEntries,
          freeze,
          is,
          isError,
          setAdd,
          setHas,
          stringIncludes,
          stringStartsWith,
          stringifyJson,
          toStringTagSymbol;
        $h‍_imports([
          [
            "../commons.js",
            [
              ["Set", [($h‍_a) => (Set = $h‍_a)]],
              ["String", [($h‍_a) => (String = $h‍_a)]],
              ["isArray", [($h‍_a) => (isArray = $h‍_a)]],
              ["arrayJoin", [($h‍_a) => (arrayJoin = $h‍_a)]],
              ["arraySlice", [($h‍_a) => (arraySlice = $h‍_a)]],
              ["arraySort", [($h‍_a) => (arraySort = $h‍_a)]],
              ["arrayMap", [($h‍_a) => (arrayMap = $h‍_a)]],
              ["keys", [($h‍_a) => (keys = $h‍_a)]],
              ["fromEntries", [($h‍_a) => (fromEntries = $h‍_a)]],
              ["freeze", [($h‍_a) => (freeze = $h‍_a)]],
              ["is", [($h‍_a) => (is = $h‍_a)]],
              ["isError", [($h‍_a) => (isError = $h‍_a)]],
              ["setAdd", [($h‍_a) => (setAdd = $h‍_a)]],
              ["setHas", [($h‍_a) => (setHas = $h‍_a)]],
              ["stringIncludes", [($h‍_a) => (stringIncludes = $h‍_a)]],
              ["stringStartsWith", [($h‍_a) => (stringStartsWith = $h‍_a)]],
              ["stringifyJson", [($h‍_a) => (stringifyJson = $h‍_a)]],
              ["toStringTagSymbol", [($h‍_a) => (toStringTagSymbol = $h‍_a)]]
            ]
          ]
        ]);
        $h‍_once.enJoin((terms, conjunction) => {
          if (0 === terms.length) return "(none)";
          if (1 === terms.length) return terms[0];
          if (2 === terms.length) {
            const [first, second] = terms;
            return `${first} ${conjunction} ${second}`;
          }
          return `${arrayJoin(arraySlice(terms, 0, -1), ", ")}, ${conjunction} ${terms[terms.length - 1]}`;
        });
        const an = (str) => ((str = `${str}`).length >= 1 && stringIncludes("aeiouAEIOU", str[0]) ? `an ${str}` : `a ${str}`);
        $h‍_once.an(an), freeze(an);
        const bestEffortStringify = (payload, spaces = undefined) => {
          const seenSet = new Set(),
            replacer = (_, val) => {
              switch (typeof val) {
                case "object": {
                  if (null === val) return null;
                  if (setHas(seenSet, val)) return "[Seen]";
                  if ((setAdd(seenSet, val), isError(val))) return `[${val.name}: ${val.message}]`;
                  if (toStringTagSymbol in val) return `[${val[toStringTagSymbol]}]`;
                  if (isArray(val)) return val;
                  const names = keys(val);
                  if (names.length < 2) return val;
                  let sorted = !0;
                  for (let i = 1; i < names.length; i += 1)
                    if (names[i - 1] >= names[i]) {
                      sorted = !1;
                      break;
                    }
                  if (sorted) return val;
                  arraySort(names);
                  const entries = arrayMap(names, (name) => [name, val[name]]);
                  return fromEntries(entries);
                }
                case "function":
                  return `[Function ${val.name || "<anon>"}]`;
                case "string":
                  return stringStartsWith(val, "[") ? `[${val}]` : val;
                case "undefined":
                case "symbol":
                  return `[${String(val)}]`;
                case "bigint":
                  return `[${val}n]`;
                case "number":
                  return is(val, NaN) ? "[NaN]" : val === 1 / 0 ? "[Infinity]" : val === -1 / 0 ? "[-Infinity]" : val;
                default:
                  return val;
              }
            };
          try {
            return stringifyJson(payload, replacer, spaces);
          } catch (_err) {
            return "[Something that failed to stringify]";
          }
        };
        $h‍_once.bestEffortStringify(bestEffortStringify), freeze(bestEffortStringify);
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        $h‍_imports([]);
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        $h‍_imports([]);
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        $h‍_imports([["./internal-types.js", []]]);
        const { freeze: freeze } = Object,
          { isSafeInteger: isSafeInteger } = Number,
          makeSelfCell = (data) => {
            const selfCell = { next: void 0, prev: void 0, data: data };
            return (selfCell.next = selfCell), (selfCell.prev = selfCell), selfCell;
          },
          spliceAfter = (prev, selfCell) => {
            if (prev === selfCell) throw TypeError("Cannot splice a cell into itself");
            if (selfCell.next !== selfCell || selfCell.prev !== selfCell) throw TypeError("Expected self-linked cell");
            const cell = selfCell,
              next = prev.next;
            return (cell.prev = prev), (cell.next = next), (prev.next = cell), (next.prev = cell), cell;
          },
          spliceOut = (cell) => {
            const { prev: prev, next: next } = cell;
            (prev.next = next), (next.prev = prev), (cell.prev = cell), (cell.next = cell);
          },
          makeLRUCacheMap = (keysBudget) => {
            if (!isSafeInteger(keysBudget) || keysBudget < 0) throw TypeError("keysBudget must be a safe non-negative integer number");
            const keyToCell = new WeakMap();
            let size = 0;
            const head = makeSelfCell(void 0),
              touchCell = (key) => {
                const cell = keyToCell.get(key);
                if (void 0 !== cell && void 0 !== cell.data) return spliceOut(cell), spliceAfter(head, cell), cell;
              },
              has = (key) => void 0 !== touchCell(key);
            freeze(has);
            const get = (key) => {
              const cell = touchCell(key);
              return cell && cell.data && cell.data.get(key);
            };
            freeze(get);
            const set = (key, value) => {
              if (keysBudget < 1) return lruCacheMap;
              let cell = touchCell(key);
              if ((void 0 === cell && ((cell = makeSelfCell(void 0)), spliceAfter(head, cell)), !cell.data))
                for (size += 1, cell.data = new WeakMap(), keyToCell.set(key, cell); size > keysBudget; ) {
                  const condemned = head.prev;
                  spliceOut(condemned), (condemned.data = void 0), (size -= 1);
                }
              return cell.data.set(key, value), lruCacheMap;
            };
            freeze(set);
            const deleteIt = (key) => {
              const cell = keyToCell.get(key);
              return (
                void 0 !== cell && (spliceOut(cell), keyToCell.delete(key), void 0 !== cell.data && ((cell.data = void 0), (size -= 1), !0))
              );
            };
            freeze(deleteIt);
            const lruCacheMap = freeze({ has: has, get: get, set: set, delete: deleteIt, [Symbol.toStringTag]: "LRUCacheMap" });
            return lruCacheMap;
          };
        $h‍_once.makeLRUCacheMap(makeLRUCacheMap), freeze(makeLRUCacheMap);
        const makeNoteLogArgsArrayKit = (errorsBudget = 1e3, argsPerErrorBudget = 100) => {
          if (!isSafeInteger(argsPerErrorBudget) || argsPerErrorBudget < 1)
            throw TypeError("argsPerErrorBudget must be a safe positive integer number");
          const noteLogArgsArrayMap = makeLRUCacheMap(errorsBudget),
            addLogArgs = (error, logArgs) => {
              const logArgsArray = noteLogArgsArrayMap.get(error);
              void 0 !== logArgsArray
                ? (logArgsArray.length >= argsPerErrorBudget && logArgsArray.shift(), logArgsArray.push(logArgs))
                : noteLogArgsArrayMap.set(error, [logArgs]);
            };
          freeze(addLogArgs);
          const takeLogArgsArray = (error) => {
            const result = noteLogArgsArrayMap.get(error);
            return noteLogArgsArrayMap.delete(error), result;
          };
          return freeze(takeLogArgsArray), freeze({ addLogArgs: addLogArgs, takeLogArgsArray: takeLogArgsArray });
        };
        $h‍_once.makeNoteLogArgsArrayKit(makeNoteLogArgsArrayKit), freeze(makeNoteLogArgsArrayKit);
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let RangeError,
          TypeError,
          WeakMap,
          arrayJoin,
          arrayMap,
          arrayPop,
          arrayPush,
          assign,
          freeze,
          globalThis,
          is,
          isError,
          regexpTest,
          stringIndexOf,
          stringReplace,
          stringSlice,
          stringStartsWith,
          weakmapDelete,
          weakmapGet,
          weakmapHas,
          weakmapSet,
          an,
          bestEffortStringify,
          makeNoteLogArgsArrayKit;
        $h‍_imports([
          [
            "../commons.js",
            [
              ["RangeError", [($h‍_a) => (RangeError = $h‍_a)]],
              ["TypeError", [($h‍_a) => (TypeError = $h‍_a)]],
              ["WeakMap", [($h‍_a) => (WeakMap = $h‍_a)]],
              ["arrayJoin", [($h‍_a) => (arrayJoin = $h‍_a)]],
              ["arrayMap", [($h‍_a) => (arrayMap = $h‍_a)]],
              ["arrayPop", [($h‍_a) => (arrayPop = $h‍_a)]],
              ["arrayPush", [($h‍_a) => (arrayPush = $h‍_a)]],
              ["assign", [($h‍_a) => (assign = $h‍_a)]],
              ["freeze", [($h‍_a) => (freeze = $h‍_a)]],
              ["globalThis", [($h‍_a) => (globalThis = $h‍_a)]],
              ["is", [($h‍_a) => (is = $h‍_a)]],
              ["isError", [($h‍_a) => (isError = $h‍_a)]],
              ["regexpTest", [($h‍_a) => (regexpTest = $h‍_a)]],
              ["stringIndexOf", [($h‍_a) => (stringIndexOf = $h‍_a)]],
              ["stringReplace", [($h‍_a) => (stringReplace = $h‍_a)]],
              ["stringSlice", [($h‍_a) => (stringSlice = $h‍_a)]],
              ["stringStartsWith", [($h‍_a) => (stringStartsWith = $h‍_a)]],
              ["weakmapDelete", [($h‍_a) => (weakmapDelete = $h‍_a)]],
              ["weakmapGet", [($h‍_a) => (weakmapGet = $h‍_a)]],
              ["weakmapHas", [($h‍_a) => (weakmapHas = $h‍_a)]],
              ["weakmapSet", [($h‍_a) => (weakmapSet = $h‍_a)]]
            ]
          ],
          [
            "./stringify-utils.js",
            [
              ["an", [($h‍_a) => (an = $h‍_a)]],
              ["bestEffortStringify", [($h‍_a) => (bestEffortStringify = $h‍_a)]]
            ]
          ],
          ["./types.js", []],
          ["./internal-types.js", []],
          ["./note-log-args.js", [["makeNoteLogArgsArrayKit", [($h‍_a) => (makeNoteLogArgsArrayKit = $h‍_a)]]]]
        ]);
        const declassifiers = new WeakMap(),
          quote = (payload, spaces = undefined) => {
            const result = freeze({ toString: freeze(() => bestEffortStringify(payload, spaces)) });
            return weakmapSet(declassifiers, result, payload), result;
          };
        freeze(quote);
        const canBeBare = freeze(/^[\w:-]( ?[\w:-])*$/),
          bare = (payload, spaces = undefined) => {
            if ("string" != typeof payload || !regexpTest(canBeBare, payload)) return quote(payload, spaces);
            const result = freeze({ toString: freeze(() => payload) });
            return weakmapSet(declassifiers, result, payload), result;
          };
        freeze(bare);
        const hiddenDetailsMap = new WeakMap(),
          getMessageString = ({ template: template, args: args }) => {
            const parts = [template[0]];
            for (let i = 0; i < args.length; i += 1) {
              const arg = args[i];
              let argStr;
              (argStr = weakmapHas(declassifiers, arg) ? `${arg}` : isError(arg) ? `(${an(arg.name)})` : `(${an(typeof arg)})`),
                arrayPush(parts, argStr, template[i + 1]);
            }
            return arrayJoin(parts, "");
          },
          DetailsTokenProto = freeze({
            toString() {
              const hiddenDetails = weakmapGet(hiddenDetailsMap, this);
              return void 0 === hiddenDetails ? "[Not a DetailsToken]" : getMessageString(hiddenDetails);
            }
          });
        freeze(DetailsTokenProto.toString);
        const redactedDetails = (template, ...args) => {
          const detailsToken = freeze({ __proto__: DetailsTokenProto });
          return weakmapSet(hiddenDetailsMap, detailsToken, { template: template, args: args }), detailsToken;
        };
        freeze(redactedDetails);
        const unredactedDetails = (template, ...args) => (
          (args = arrayMap(args, (arg) => (weakmapHas(declassifiers, arg) ? arg : quote(arg)))), redactedDetails(template, ...args)
        );
        $h‍_once.unredactedDetails(unredactedDetails), freeze(unredactedDetails);
        const getLogArgs = ({ template: template, args: args }) => {
            const logArgs = [template[0]];
            for (let i = 0; i < args.length; i += 1) {
              let arg = args[i];
              weakmapHas(declassifiers, arg) && (arg = weakmapGet(declassifiers, arg));
              const priorWithoutSpace = stringReplace(arrayPop(logArgs) || "", / $/, "");
              "" !== priorWithoutSpace && arrayPush(logArgs, priorWithoutSpace);
              const nextWithoutSpace = stringReplace(template[i + 1], /^ /, "");
              arrayPush(logArgs, arg, nextWithoutSpace);
            }
            return "" === logArgs[logArgs.length - 1] && arrayPop(logArgs), logArgs;
          },
          hiddenMessageLogArgs = new WeakMap();
        let errorTagNum = 0;
        const errorTags = new WeakMap(),
          tagError = (err, optErrorName = err.name) => {
            let errorTag = weakmapGet(errorTags, err);
            return (
              void 0 !== errorTag ||
                ((errorTagNum += 1), (errorTag = `${optErrorName}#${errorTagNum}`), weakmapSet(errorTags, err, errorTag)),
              errorTag
            );
          },
          makeError = (optDetails = redactedDetails`Assert failed`, ErrorConstructor = globalThis.Error, { errorName: errorName } = {}) => {
            "string" == typeof optDetails && (optDetails = redactedDetails([optDetails]));
            const hiddenDetails = weakmapGet(hiddenDetailsMap, optDetails);
            if (void 0 === hiddenDetails) throw TypeError(`unrecognized details ${quote(optDetails)}`);
            const error = new ErrorConstructor(getMessageString(hiddenDetails));
            return (
              weakmapSet(hiddenMessageLogArgs, error, getLogArgs(hiddenDetails)), void 0 !== errorName && tagError(error, errorName), error
            );
          };
        freeze(makeError);
        const { addLogArgs: addLogArgs, takeLogArgsArray: takeLogArgsArray } = makeNoteLogArgsArrayKit(),
          hiddenNoteCallbackArrays = new WeakMap(),
          note = (error, detailsNote) => {
            "string" == typeof detailsNote && (detailsNote = redactedDetails([detailsNote]));
            const hiddenDetails = weakmapGet(hiddenDetailsMap, detailsNote);
            if (void 0 === hiddenDetails) throw TypeError(`unrecognized details ${quote(detailsNote)}`);
            const logArgs = getLogArgs(hiddenDetails),
              callbacks = weakmapGet(hiddenNoteCallbackArrays, error);
            if (void 0 !== callbacks) for (const callback of callbacks) callback(error, logArgs);
            else addLogArgs(error, logArgs);
          };
        freeze(note);
        const loggedErrorHandler = {
          getStackString:
            globalThis.getStackString ||
            ((error) => {
              if (!("stack" in error)) return "";
              const stackString = `${error.stack}`,
                pos = stringIndexOf(stackString, "\n");
              return stringStartsWith(stackString, " ") || -1 === pos ? stackString : stringSlice(stackString, pos + 1);
            }),
          tagError: (error) => tagError(error),
          resetErrorTagNum: () => {
            errorTagNum = 0;
          },
          getMessageLogArgs: (error) => weakmapGet(hiddenMessageLogArgs, error),
          takeMessageLogArgs: (error) => {
            const result = weakmapGet(hiddenMessageLogArgs, error);
            return weakmapDelete(hiddenMessageLogArgs, error), result;
          },
          takeNoteLogArgsArray: (error, callback) => {
            const result = takeLogArgsArray(error);
            if (void 0 !== callback) {
              const callbacks = weakmapGet(hiddenNoteCallbackArrays, error);
              callbacks ? arrayPush(callbacks, callback) : weakmapSet(hiddenNoteCallbackArrays, error, [callback]);
            }
            return result || [];
          }
        };
        $h‍_once.loggedErrorHandler(loggedErrorHandler), freeze(loggedErrorHandler);
        const makeAssert = (optRaise = undefined, unredacted = !1) => {
          const details = unredacted ? unredactedDetails : redactedDetails,
            assertFailedDetails = details`Check failed`,
            fail = (optDetails = assertFailedDetails, ErrorConstructor = globalThis.Error) => {
              const reason = makeError(optDetails, ErrorConstructor);
              throw (void 0 !== optRaise && optRaise(reason), reason);
            };
          freeze(fail);
          const Fail = (template, ...args) => fail(details(template, ...args));
          const equal = (actual, expected, optDetails = undefined, ErrorConstructor = undefined) => {
            is(actual, expected) || fail(optDetails || details`Expected ${actual} is same as ${expected}`, ErrorConstructor || RangeError);
          };
          freeze(equal);
          const assertTypeof = (specimen, typename, optDetails) => {
            if (typeof specimen !== typename) {
              if (("string" == typeof typename || Fail`${quote(typename)} must be a string`, void 0 === optDetails)) {
                const typeWithDeterminer = an(typename);
                optDetails = details`${specimen} must be ${bare(typeWithDeterminer)}`;
              }
              fail(optDetails, TypeError);
            }
          };
          freeze(assertTypeof);
          const assert = assign(
            function (flag, optDetails = undefined, ErrorConstructor = undefined) {
              flag || fail(optDetails, ErrorConstructor);
            },
            {
              error: makeError,
              fail: fail,
              equal: equal,
              typeof: assertTypeof,
              string: (specimen, optDetails = undefined) => assertTypeof(specimen, "string", optDetails),
              note: note,
              details: details,
              Fail: Fail,
              quote: quote,
              bare: bare,
              makeAssert: makeAssert
            }
          );
          return freeze(assert);
        };
        $h‍_once.makeAssert(makeAssert), freeze(makeAssert);
        const assert = makeAssert();
        $h‍_once.assert(assert);
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let Set,
          String,
          TypeError,
          WeakMap,
          WeakSet,
          globalThis,
          apply,
          arrayForEach,
          defineProperty,
          freeze,
          getOwnPropertyDescriptor,
          getOwnPropertyDescriptors,
          getPrototypeOf,
          isInteger,
          isObject,
          objectHasOwnProperty,
          ownKeys,
          preventExtensions,
          setAdd,
          setForEach,
          setHas,
          toStringTagSymbol,
          typedArrayPrototype,
          weakmapGet,
          weakmapSet,
          weaksetAdd,
          weaksetHas,
          assert;
        $h‍_imports([
          [
            "./commons.js",
            [
              ["Set", [($h‍_a) => (Set = $h‍_a)]],
              ["String", [($h‍_a) => (String = $h‍_a)]],
              ["TypeError", [($h‍_a) => (TypeError = $h‍_a)]],
              ["WeakMap", [($h‍_a) => (WeakMap = $h‍_a)]],
              ["WeakSet", [($h‍_a) => (WeakSet = $h‍_a)]],
              ["globalThis", [($h‍_a) => (globalThis = $h‍_a)]],
              ["apply", [($h‍_a) => (apply = $h‍_a)]],
              ["arrayForEach", [($h‍_a) => (arrayForEach = $h‍_a)]],
              ["defineProperty", [($h‍_a) => (defineProperty = $h‍_a)]],
              ["freeze", [($h‍_a) => (freeze = $h‍_a)]],
              ["getOwnPropertyDescriptor", [($h‍_a) => (getOwnPropertyDescriptor = $h‍_a)]],
              ["getOwnPropertyDescriptors", [($h‍_a) => (getOwnPropertyDescriptors = $h‍_a)]],
              ["getPrototypeOf", [($h‍_a) => (getPrototypeOf = $h‍_a)]],
              ["isInteger", [($h‍_a) => (isInteger = $h‍_a)]],
              ["isObject", [($h‍_a) => (isObject = $h‍_a)]],
              ["objectHasOwnProperty", [($h‍_a) => (objectHasOwnProperty = $h‍_a)]],
              ["ownKeys", [($h‍_a) => (ownKeys = $h‍_a)]],
              ["preventExtensions", [($h‍_a) => (preventExtensions = $h‍_a)]],
              ["setAdd", [($h‍_a) => (setAdd = $h‍_a)]],
              ["setForEach", [($h‍_a) => (setForEach = $h‍_a)]],
              ["setHas", [($h‍_a) => (setHas = $h‍_a)]],
              ["toStringTagSymbol", [($h‍_a) => (toStringTagSymbol = $h‍_a)]],
              ["typedArrayPrototype", [($h‍_a) => (typedArrayPrototype = $h‍_a)]],
              ["weakmapGet", [($h‍_a) => (weakmapGet = $h‍_a)]],
              ["weakmapSet", [($h‍_a) => (weakmapSet = $h‍_a)]],
              ["weaksetAdd", [($h‍_a) => (weaksetAdd = $h‍_a)]],
              ["weaksetHas", [($h‍_a) => (weaksetHas = $h‍_a)]]
            ]
          ],
          ["./error/assert.js", [["assert", [($h‍_a) => (assert = $h‍_a)]]]]
        ]);
        const typedArrayToStringTag = getOwnPropertyDescriptor(typedArrayPrototype, toStringTagSymbol);
        assert(typedArrayToStringTag);
        const getTypedArrayToStringTag = typedArrayToStringTag.get;
        assert(getTypedArrayToStringTag);
        const isTypedArray = (object) => void 0 !== apply(getTypedArrayToStringTag, object, []);
        $h‍_once.isTypedArray(isTypedArray);
        const freezeTypedArray = (array) => {
          preventExtensions(array),
            arrayForEach(ownKeys(array), (name) => {
              const desc = getOwnPropertyDescriptor(array, name);
              assert(desc),
                ((propertyKey) => {
                  const n = +String(propertyKey);
                  return isInteger(n) && String(n) === propertyKey;
                })(name) || defineProperty(array, name, { ...desc, writable: !1, configurable: !1 });
            });
        };
        $h‍_once.makeHardener(() => {
          if ("function" == typeof globalThis.harden) {
            return globalThis.harden;
          }
          const hardened = new WeakSet(),
            { harden: harden } = {
              harden(root) {
                const toFreeze = new Set(),
                  paths = new WeakMap();
                function enqueue(val, path = undefined) {
                  if (!isObject(val)) return;
                  const type = typeof val;
                  if ("object" !== type && "function" !== type) throw TypeError(`Unexpected typeof: ${type}`);
                  weaksetHas(hardened, val) || setHas(toFreeze, val) || (setAdd(toFreeze, val), weakmapSet(paths, val, path));
                }
                function freezeAndTraverse(obj) {
                  isTypedArray(obj) ? freezeTypedArray(obj) : freeze(obj);
                  const path = weakmapGet(paths, obj) || "unknown",
                    descs = getOwnPropertyDescriptors(obj);
                  enqueue(getPrototypeOf(obj), `${path}.__proto__`),
                    arrayForEach(ownKeys(descs), (name) => {
                      const pathname = `${path}.${String(name)}`,
                        desc = descs[name];
                      objectHasOwnProperty(desc, "value")
                        ? enqueue(desc.value, `${pathname}`)
                        : (enqueue(desc.get, `${pathname}(get)`), enqueue(desc.set, `${pathname}(set)`));
                    });
                }
                function markHardened(value) {
                  weaksetAdd(hardened, value);
                }
                return enqueue(root), setForEach(toFreeze, freezeAndTraverse), setForEach(toFreeze, markHardened), root;
              }
            };
          return harden;
        });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        $h‍_imports([]);
        const constantProperties = { Infinity: 1 / 0, NaN: NaN, undefined: void 0 };
        $h‍_once.constantProperties(constantProperties);
        $h‍_once.universalPropertyNames({
          isFinite: "isFinite",
          isNaN: "isNaN",
          parseFloat: "parseFloat",
          parseInt: "parseInt",
          decodeURI: "decodeURI",
          decodeURIComponent: "decodeURIComponent",
          encodeURI: "encodeURI",
          encodeURIComponent: "encodeURIComponent",
          Array: "Array",
          ArrayBuffer: "ArrayBuffer",
          BigInt: "BigInt",
          BigInt64Array: "BigInt64Array",
          BigUint64Array: "BigUint64Array",
          Boolean: "Boolean",
          DataView: "DataView",
          EvalError: "EvalError",
          Float32Array: "Float32Array",
          Float64Array: "Float64Array",
          Int8Array: "Int8Array",
          Int16Array: "Int16Array",
          Int32Array: "Int32Array",
          Map: "Map",
          Number: "Number",
          Object: "Object",
          Promise: "Promise",
          Proxy: "Proxy",
          RangeError: "RangeError",
          ReferenceError: "ReferenceError",
          Set: "Set",
          String: "String",
          SyntaxError: "SyntaxError",
          TypeError: "TypeError",
          Uint8Array: "Uint8Array",
          Uint8ClampedArray: "Uint8ClampedArray",
          Uint16Array: "Uint16Array",
          Uint32Array: "Uint32Array",
          URIError: "URIError",
          WeakMap: "WeakMap",
          WeakSet: "WeakSet",
          Iterator: "Iterator",
          AsyncIterator: "AsyncIterator",
          JSON: "JSON",
          Reflect: "Reflect",
          escape: "escape",
          unescape: "unescape",
          lockdown: "lockdown",
          harden: "harden",
          HandledPromise: "HandledPromise"
        });
        $h‍_once.initialGlobalPropertyNames({
          Date: "%InitialDate%",
          Error: "%InitialError%",
          RegExp: "%InitialRegExp%",
          Math: "%InitialMath%",
          getStackString: "%InitialGetStackString%"
        });
        $h‍_once.sharedGlobalPropertyNames({
          Date: "%SharedDate%",
          Error: "%SharedError%",
          RegExp: "%SharedRegExp%",
          Symbol: "%SharedSymbol%",
          Math: "%SharedMath%"
        });
        $h‍_once.uniqueGlobalPropertyNames({
          globalThis: "%UniqueGlobalThis%",
          eval: "%UniqueEval%",
          Function: "%UniqueFunction%",
          Compartment: "%UniqueCompartment%"
        });
        const NativeErrors = [EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError];
        $h‍_once.NativeErrors(NativeErrors);
        const FunctionInstance = { "[[Proto]]": "%FunctionPrototype%", length: "number", name: "string" };
        $h‍_once.FunctionInstance(FunctionInstance);
        const AsyncFunctionInstance = { "[[Proto]]": "%AsyncFunctionPrototype%" };
        $h‍_once.AsyncFunctionInstance(AsyncFunctionInstance);
        const fn = FunctionInstance,
          asyncFn = AsyncFunctionInstance,
          getter = { get: fn, set: "undefined" },
          accessor = { get: fn, set: fn };
        function NativeError(prototype) {
          return { "[[Proto]]": "%SharedError%", prototype: prototype };
        }
        function NativeErrorPrototype(constructor) {
          return { "[[Proto]]": "%ErrorPrototype%", constructor: constructor, message: "string", name: "string", toString: !1, cause: !1 };
        }
        function TypedArray(prototype) {
          return { "[[Proto]]": "%TypedArray%", BYTES_PER_ELEMENT: "number", prototype: prototype };
        }
        function TypedArrayPrototype(constructor) {
          return { "[[Proto]]": "%TypedArrayPrototype%", BYTES_PER_ELEMENT: "number", constructor: constructor };
        }
        $h‍_once.isAccessorPermit((permit) => permit === getter || permit === accessor);
        const CommonMath = {
            E: "number",
            LN10: "number",
            LN2: "number",
            LOG10E: "number",
            LOG2E: "number",
            PI: "number",
            SQRT1_2: "number",
            SQRT2: "number",
            "@@toStringTag": "string",
            abs: fn,
            acos: fn,
            acosh: fn,
            asin: fn,
            asinh: fn,
            atan: fn,
            atanh: fn,
            atan2: fn,
            cbrt: fn,
            ceil: fn,
            clz32: fn,
            cos: fn,
            cosh: fn,
            exp: fn,
            expm1: fn,
            floor: fn,
            fround: fn,
            hypot: fn,
            imul: fn,
            log: fn,
            log1p: fn,
            log10: fn,
            log2: fn,
            max: fn,
            min: fn,
            pow: fn,
            round: fn,
            sign: fn,
            sin: fn,
            sinh: fn,
            sqrt: fn,
            tan: fn,
            tanh: fn,
            trunc: fn,
            idiv: !1,
            idivmod: !1,
            imod: !1,
            imuldiv: !1,
            irem: !1,
            mod: !1
          },
          permitted = {
            "[[Proto]]": null,
            "%ThrowTypeError%": fn,
            Infinity: "number",
            NaN: "number",
            undefined: "undefined",
            "%UniqueEval%": fn,
            isFinite: fn,
            isNaN: fn,
            parseFloat: fn,
            parseInt: fn,
            decodeURI: fn,
            decodeURIComponent: fn,
            encodeURI: fn,
            encodeURIComponent: fn,
            Object: {
              "[[Proto]]": "%FunctionPrototype%",
              assign: fn,
              create: fn,
              defineProperties: fn,
              defineProperty: fn,
              entries: fn,
              freeze: fn,
              fromEntries: fn,
              getOwnPropertyDescriptor: fn,
              getOwnPropertyDescriptors: fn,
              getOwnPropertyNames: fn,
              getOwnPropertySymbols: fn,
              getPrototypeOf: fn,
              hasOwn: fn,
              is: fn,
              isExtensible: fn,
              isFrozen: fn,
              isSealed: fn,
              keys: fn,
              preventExtensions: fn,
              prototype: "%ObjectPrototype%",
              seal: fn,
              setPrototypeOf: fn,
              values: fn,
              groupBy: fn
            },
            "%ObjectPrototype%": {
              "[[Proto]]": null,
              constructor: "Object",
              hasOwnProperty: fn,
              isPrototypeOf: fn,
              propertyIsEnumerable: fn,
              toLocaleString: fn,
              toString: fn,
              valueOf: fn,
              "--proto--": accessor,
              __defineGetter__: fn,
              __defineSetter__: fn,
              __lookupGetter__: fn,
              __lookupSetter__: fn
            },
            "%UniqueFunction%": { "[[Proto]]": "%FunctionPrototype%", prototype: "%FunctionPrototype%" },
            "%InertFunction%": { "[[Proto]]": "%FunctionPrototype%", prototype: "%FunctionPrototype%" },
            "%FunctionPrototype%": {
              apply: fn,
              bind: fn,
              call: fn,
              constructor: "%InertFunction%",
              toString: fn,
              "@@hasInstance": fn,
              caller: !1,
              arguments: !1
            },
            Boolean: { "[[Proto]]": "%FunctionPrototype%", prototype: "%BooleanPrototype%" },
            "%BooleanPrototype%": { constructor: "Boolean", toString: fn, valueOf: fn },
            "%SharedSymbol%": {
              "[[Proto]]": "%FunctionPrototype%",
              asyncDispose: "symbol",
              asyncIterator: "symbol",
              dispose: "symbol",
              for: fn,
              hasInstance: "symbol",
              isConcatSpreadable: "symbol",
              iterator: "symbol",
              keyFor: fn,
              match: "symbol",
              matchAll: "symbol",
              prototype: "%SymbolPrototype%",
              replace: "symbol",
              search: "symbol",
              species: "symbol",
              split: "symbol",
              toPrimitive: "symbol",
              toStringTag: "symbol",
              unscopables: "symbol",
              useSimple: !1,
              useSetter: !1
            },
            "%SymbolPrototype%": {
              constructor: "%SharedSymbol%",
              description: getter,
              toString: fn,
              valueOf: fn,
              "@@toPrimitive": fn,
              "@@toStringTag": "string"
            },
            "%InitialError%": {
              "[[Proto]]": "%FunctionPrototype%",
              prototype: "%ErrorPrototype%",
              captureStackTrace: fn,
              stackTraceLimit: accessor,
              prepareStackTrace: accessor
            },
            "%SharedError%": {
              "[[Proto]]": "%FunctionPrototype%",
              prototype: "%ErrorPrototype%",
              captureStackTrace: fn,
              stackTraceLimit: accessor,
              prepareStackTrace: accessor
            },
            "%ErrorPrototype%": {
              constructor: "%SharedError%",
              message: "string",
              name: "string",
              toString: fn,
              at: !1,
              stack: accessor,
              cause: !1
            },
            EvalError: NativeError("%EvalErrorPrototype%"),
            RangeError: NativeError("%RangeErrorPrototype%"),
            ReferenceError: NativeError("%ReferenceErrorPrototype%"),
            SyntaxError: NativeError("%SyntaxErrorPrototype%"),
            TypeError: NativeError("%TypeErrorPrototype%"),
            URIError: NativeError("%URIErrorPrototype%"),
            "%EvalErrorPrototype%": NativeErrorPrototype("EvalError"),
            "%RangeErrorPrototype%": NativeErrorPrototype("RangeError"),
            "%ReferenceErrorPrototype%": NativeErrorPrototype("ReferenceError"),
            "%SyntaxErrorPrototype%": NativeErrorPrototype("SyntaxError"),
            "%TypeErrorPrototype%": NativeErrorPrototype("TypeError"),
            "%URIErrorPrototype%": NativeErrorPrototype("URIError"),
            Number: {
              "[[Proto]]": "%FunctionPrototype%",
              EPSILON: "number",
              isFinite: fn,
              isInteger: fn,
              isNaN: fn,
              isSafeInteger: fn,
              MAX_SAFE_INTEGER: "number",
              MAX_VALUE: "number",
              MIN_SAFE_INTEGER: "number",
              MIN_VALUE: "number",
              NaN: "number",
              NEGATIVE_INFINITY: "number",
              parseFloat: fn,
              parseInt: fn,
              POSITIVE_INFINITY: "number",
              prototype: "%NumberPrototype%"
            },
            "%NumberPrototype%": {
              constructor: "Number",
              toExponential: fn,
              toFixed: fn,
              toLocaleString: fn,
              toPrecision: fn,
              toString: fn,
              valueOf: fn
            },
            BigInt: {
              "[[Proto]]": "%FunctionPrototype%",
              asIntN: fn,
              asUintN: fn,
              prototype: "%BigIntPrototype%",
              bitLength: !1,
              fromArrayBuffer: !1
            },
            "%BigIntPrototype%": { constructor: "BigInt", toLocaleString: fn, toString: fn, valueOf: fn, "@@toStringTag": "string" },
            "%InitialMath%": { ...CommonMath, random: fn },
            "%SharedMath%": { ...CommonMath, random: fn },
            "%InitialDate%": { "[[Proto]]": "%FunctionPrototype%", now: fn, parse: fn, prototype: "%DatePrototype%", UTC: fn },
            "%SharedDate%": { "[[Proto]]": "%FunctionPrototype%", now: fn, parse: fn, prototype: "%DatePrototype%", UTC: fn },
            "%DatePrototype%": {
              constructor: "%SharedDate%",
              getDate: fn,
              getDay: fn,
              getFullYear: fn,
              getHours: fn,
              getMilliseconds: fn,
              getMinutes: fn,
              getMonth: fn,
              getSeconds: fn,
              getTime: fn,
              getTimezoneOffset: fn,
              getUTCDate: fn,
              getUTCDay: fn,
              getUTCFullYear: fn,
              getUTCHours: fn,
              getUTCMilliseconds: fn,
              getUTCMinutes: fn,
              getUTCMonth: fn,
              getUTCSeconds: fn,
              setDate: fn,
              setFullYear: fn,
              setHours: fn,
              setMilliseconds: fn,
              setMinutes: fn,
              setMonth: fn,
              setSeconds: fn,
              setTime: fn,
              setUTCDate: fn,
              setUTCFullYear: fn,
              setUTCHours: fn,
              setUTCMilliseconds: fn,
              setUTCMinutes: fn,
              setUTCMonth: fn,
              setUTCSeconds: fn,
              toDateString: fn,
              toISOString: fn,
              toJSON: fn,
              toLocaleDateString: fn,
              toLocaleString: fn,
              toLocaleTimeString: fn,
              toString: fn,
              toTimeString: fn,
              toUTCString: fn,
              valueOf: fn,
              "@@toPrimitive": fn,
              getYear: fn,
              setYear: fn,
              toGMTString: fn
            },
            String: {
              "[[Proto]]": "%FunctionPrototype%",
              fromCharCode: fn,
              fromCodePoint: fn,
              prototype: "%StringPrototype%",
              raw: fn,
              fromArrayBuffer: !1
            },
            "%StringPrototype%": {
              length: "number",
              at: fn,
              charAt: fn,
              charCodeAt: fn,
              codePointAt: fn,
              concat: fn,
              constructor: "String",
              endsWith: fn,
              includes: fn,
              indexOf: fn,
              lastIndexOf: fn,
              localeCompare: fn,
              match: fn,
              matchAll: fn,
              normalize: fn,
              padEnd: fn,
              padStart: fn,
              repeat: fn,
              replace: fn,
              replaceAll: fn,
              search: fn,
              slice: fn,
              split: fn,
              startsWith: fn,
              substring: fn,
              toLocaleLowerCase: fn,
              toLocaleUpperCase: fn,
              toLowerCase: fn,
              toString: fn,
              toUpperCase: fn,
              trim: fn,
              trimEnd: fn,
              trimStart: fn,
              valueOf: fn,
              "@@iterator": fn,
              substr: fn,
              anchor: fn,
              big: fn,
              blink: fn,
              bold: fn,
              fixed: fn,
              fontcolor: fn,
              fontsize: fn,
              italics: fn,
              link: fn,
              small: fn,
              strike: fn,
              sub: fn,
              sup: fn,
              trimLeft: fn,
              trimRight: fn,
              compare: !1,
              isWellFormed: fn,
              toWellFormed: fn,
              unicodeSets: fn
            },
            "%StringIteratorPrototype%": { "[[Proto]]": "%IteratorPrototype%", next: fn, "@@toStringTag": "string" },
            "%InitialRegExp%": {
              "[[Proto]]": "%FunctionPrototype%",
              prototype: "%RegExpPrototype%",
              "@@species": getter,
              input: !1,
              $_: !1,
              lastMatch: !1,
              "$&": !1,
              lastParen: !1,
              "$+": !1,
              leftContext: !1,
              "$`": !1,
              rightContext: !1,
              "$'": !1,
              $1: !1,
              $2: !1,
              $3: !1,
              $4: !1,
              $5: !1,
              $6: !1,
              $7: !1,
              $8: !1,
              $9: !1
            },
            "%SharedRegExp%": { "[[Proto]]": "%FunctionPrototype%", prototype: "%RegExpPrototype%", "@@species": getter },
            "%RegExpPrototype%": {
              constructor: "%SharedRegExp%",
              exec: fn,
              dotAll: getter,
              flags: getter,
              global: getter,
              hasIndices: getter,
              ignoreCase: getter,
              "@@match": fn,
              "@@matchAll": fn,
              multiline: getter,
              "@@replace": fn,
              "@@search": fn,
              source: getter,
              "@@split": fn,
              sticky: getter,
              test: fn,
              toString: fn,
              unicode: getter,
              unicodeSets: getter,
              compile: !1
            },
            "%RegExpStringIteratorPrototype%": { "[[Proto]]": "%IteratorPrototype%", next: fn, "@@toStringTag": "string" },
            Array: {
              "[[Proto]]": "%FunctionPrototype%",
              from: fn,
              isArray: fn,
              of: fn,
              prototype: "%ArrayPrototype%",
              "@@species": getter,
              at: fn,
              fromAsync: fn
            },
            "%ArrayPrototype%": {
              at: fn,
              length: "number",
              concat: fn,
              constructor: "Array",
              copyWithin: fn,
              entries: fn,
              every: fn,
              fill: fn,
              filter: fn,
              find: fn,
              findIndex: fn,
              flat: fn,
              flatMap: fn,
              forEach: fn,
              includes: fn,
              indexOf: fn,
              join: fn,
              keys: fn,
              lastIndexOf: fn,
              map: fn,
              pop: fn,
              push: fn,
              reduce: fn,
              reduceRight: fn,
              reverse: fn,
              shift: fn,
              slice: fn,
              some: fn,
              sort: fn,
              splice: fn,
              toLocaleString: fn,
              toString: fn,
              unshift: fn,
              values: fn,
              "@@iterator": fn,
              "@@unscopables": {
                "[[Proto]]": null,
                copyWithin: "boolean",
                entries: "boolean",
                fill: "boolean",
                find: "boolean",
                findIndex: "boolean",
                flat: "boolean",
                flatMap: "boolean",
                includes: "boolean",
                keys: "boolean",
                values: "boolean",
                at: "boolean",
                findLast: "boolean",
                findLastIndex: "boolean",
                toReversed: "boolean",
                toSorted: "boolean",
                toSpliced: "boolean",
                with: "boolean",
                group: "boolean",
                groupToMap: "boolean",
                groupBy: "boolean"
              },
              findLast: fn,
              findLastIndex: fn,
              toReversed: fn,
              toSorted: fn,
              toSpliced: fn,
              with: fn,
              group: fn,
              groupToMap: fn,
              groupBy: fn
            },
            "%ArrayIteratorPrototype%": { "[[Proto]]": "%IteratorPrototype%", next: fn, "@@toStringTag": "string" },
            "%TypedArray%": {
              "[[Proto]]": "%FunctionPrototype%",
              from: fn,
              of: fn,
              prototype: "%TypedArrayPrototype%",
              "@@species": getter
            },
            "%TypedArrayPrototype%": {
              at: fn,
              buffer: getter,
              byteLength: getter,
              byteOffset: getter,
              constructor: "%TypedArray%",
              copyWithin: fn,
              entries: fn,
              every: fn,
              fill: fn,
              filter: fn,
              find: fn,
              findIndex: fn,
              forEach: fn,
              includes: fn,
              indexOf: fn,
              join: fn,
              keys: fn,
              lastIndexOf: fn,
              length: getter,
              map: fn,
              reduce: fn,
              reduceRight: fn,
              reverse: fn,
              set: fn,
              slice: fn,
              some: fn,
              sort: fn,
              subarray: fn,
              toLocaleString: fn,
              toString: fn,
              values: fn,
              "@@iterator": fn,
              "@@toStringTag": getter,
              findLast: fn,
              findLastIndex: fn,
              toReversed: fn,
              toSorted: fn,
              with: fn
            },
            BigInt64Array: TypedArray("%BigInt64ArrayPrototype%"),
            BigUint64Array: TypedArray("%BigUint64ArrayPrototype%"),
            Float32Array: TypedArray("%Float32ArrayPrototype%"),
            Float64Array: TypedArray("%Float64ArrayPrototype%"),
            Int16Array: TypedArray("%Int16ArrayPrototype%"),
            Int32Array: TypedArray("%Int32ArrayPrototype%"),
            Int8Array: TypedArray("%Int8ArrayPrototype%"),
            Uint16Array: TypedArray("%Uint16ArrayPrototype%"),
            Uint32Array: TypedArray("%Uint32ArrayPrototype%"),
            Uint8Array: TypedArray("%Uint8ArrayPrototype%"),
            Uint8ClampedArray: TypedArray("%Uint8ClampedArrayPrototype%"),
            "%BigInt64ArrayPrototype%": TypedArrayPrototype("BigInt64Array"),
            "%BigUint64ArrayPrototype%": TypedArrayPrototype("BigUint64Array"),
            "%Float32ArrayPrototype%": TypedArrayPrototype("Float32Array"),
            "%Float64ArrayPrototype%": TypedArrayPrototype("Float64Array"),
            "%Int16ArrayPrototype%": TypedArrayPrototype("Int16Array"),
            "%Int32ArrayPrototype%": TypedArrayPrototype("Int32Array"),
            "%Int8ArrayPrototype%": TypedArrayPrototype("Int8Array"),
            "%Uint16ArrayPrototype%": TypedArrayPrototype("Uint16Array"),
            "%Uint32ArrayPrototype%": TypedArrayPrototype("Uint32Array"),
            "%Uint8ArrayPrototype%": TypedArrayPrototype("Uint8Array"),
            "%Uint8ClampedArrayPrototype%": TypedArrayPrototype("Uint8ClampedArray"),
            Map: { "[[Proto]]": "%FunctionPrototype%", "@@species": getter, prototype: "%MapPrototype%", groupBy: fn },
            "%MapPrototype%": {
              clear: fn,
              constructor: "Map",
              delete: fn,
              entries: fn,
              forEach: fn,
              get: fn,
              has: fn,
              keys: fn,
              set: fn,
              size: getter,
              values: fn,
              "@@iterator": fn,
              "@@toStringTag": "string"
            },
            "%MapIteratorPrototype%": { "[[Proto]]": "%IteratorPrototype%", next: fn, "@@toStringTag": "string" },
            Set: { "[[Proto]]": "%FunctionPrototype%", prototype: "%SetPrototype%", "@@species": getter },
            "%SetPrototype%": {
              add: fn,
              clear: fn,
              constructor: "Set",
              delete: fn,
              entries: fn,
              forEach: fn,
              has: fn,
              keys: fn,
              size: getter,
              values: fn,
              "@@iterator": fn,
              "@@toStringTag": "string"
            },
            "%SetIteratorPrototype%": { "[[Proto]]": "%IteratorPrototype%", next: fn, "@@toStringTag": "string" },
            WeakMap: { "[[Proto]]": "%FunctionPrototype%", prototype: "%WeakMapPrototype%" },
            "%WeakMapPrototype%": { constructor: "WeakMap", delete: fn, get: fn, has: fn, set: fn, "@@toStringTag": "string" },
            WeakSet: { "[[Proto]]": "%FunctionPrototype%", prototype: "%WeakSetPrototype%" },
            "%WeakSetPrototype%": { add: fn, constructor: "WeakSet", delete: fn, has: fn, "@@toStringTag": "string" },
            ArrayBuffer: {
              "[[Proto]]": "%FunctionPrototype%",
              isView: fn,
              prototype: "%ArrayBufferPrototype%",
              "@@species": getter,
              fromString: !1,
              fromBigInt: !1
            },
            "%ArrayBufferPrototype%": {
              byteLength: getter,
              constructor: "ArrayBuffer",
              slice: fn,
              "@@toStringTag": "string",
              concat: !1,
              transfer: fn,
              resize: fn,
              resizable: getter,
              maxByteLength: getter,
              transferToFixedLength: fn,
              detached: getter
            },
            SharedArrayBuffer: !1,
            "%SharedArrayBufferPrototype%": !1,
            DataView: { "[[Proto]]": "%FunctionPrototype%", BYTES_PER_ELEMENT: "number", prototype: "%DataViewPrototype%" },
            "%DataViewPrototype%": {
              buffer: getter,
              byteLength: getter,
              byteOffset: getter,
              constructor: "DataView",
              getBigInt64: fn,
              getBigUint64: fn,
              getFloat32: fn,
              getFloat64: fn,
              getInt8: fn,
              getInt16: fn,
              getInt32: fn,
              getUint8: fn,
              getUint16: fn,
              getUint32: fn,
              setBigInt64: fn,
              setBigUint64: fn,
              setFloat32: fn,
              setFloat64: fn,
              setInt8: fn,
              setInt16: fn,
              setInt32: fn,
              setUint8: fn,
              setUint16: fn,
              setUint32: fn,
              "@@toStringTag": "string"
            },
            Atomics: !1,
            JSON: { parse: fn, stringify: fn, "@@toStringTag": "string", rawJSON: fn, isRawJSON: fn },
            Iterator: { "[[Proto]]": "%FunctionPrototype%", prototype: "%IteratorPrototype%", from: fn },
            "%IteratorPrototype%": {
              "@@iterator": fn,
              constructor: "Iterator",
              map: fn,
              filter: fn,
              take: fn,
              drop: fn,
              flatMap: fn,
              reduce: fn,
              toArray: fn,
              forEach: fn,
              some: fn,
              every: fn,
              find: fn,
              "@@toStringTag": "string",
              toAsync: fn
            },
            "%WrapForValidIteratorPrototype%": { "[[Proto]]": "%IteratorPrototype%", next: fn, return: fn },
            "%IteratorHelperPrototype%": { "[[Proto]]": "%IteratorPrototype%", next: fn, return: fn, "@@toStringTag": "string" },
            AsyncIterator: { "[[Proto]]": "%FunctionPrototype%", prototype: "%AsyncIteratorPrototype%", from: fn },
            "%AsyncIteratorPrototype%": {
              "@@asyncIterator": fn,
              constructor: "AsyncIterator",
              map: fn,
              filter: fn,
              take: fn,
              drop: fn,
              flatMap: fn,
              reduce: fn,
              toArray: fn,
              forEach: fn,
              some: fn,
              every: fn,
              find: fn,
              "@@toStringTag": "string"
            },
            "%WrapForValidAsyncIteratorPrototype%": { "[[Proto]]": "%AsyncIteratorPrototype%", next: fn, return: fn },
            "%AsyncIteratorHelperPrototype%": { "[[Proto]]": "%AsyncIteratorPrototype%", next: fn, return: fn, "@@toStringTag": "string" },
            "%InertGeneratorFunction%": { "[[Proto]]": "%InertFunction%", prototype: "%Generator%" },
            "%Generator%": {
              "[[Proto]]": "%FunctionPrototype%",
              constructor: "%InertGeneratorFunction%",
              prototype: "%GeneratorPrototype%",
              "@@toStringTag": "string"
            },
            "%InertAsyncGeneratorFunction%": { "[[Proto]]": "%InertFunction%", prototype: "%AsyncGenerator%" },
            "%AsyncGenerator%": {
              "[[Proto]]": "%FunctionPrototype%",
              constructor: "%InertAsyncGeneratorFunction%",
              prototype: "%AsyncGeneratorPrototype%",
              length: "number",
              "@@toStringTag": "string"
            },
            "%GeneratorPrototype%": {
              "[[Proto]]": "%IteratorPrototype%",
              constructor: "%Generator%",
              next: fn,
              return: fn,
              throw: fn,
              "@@toStringTag": "string"
            },
            "%AsyncGeneratorPrototype%": {
              "[[Proto]]": "%AsyncIteratorPrototype%",
              constructor: "%AsyncGenerator%",
              next: fn,
              return: fn,
              throw: fn,
              "@@toStringTag": "string"
            },
            HandledPromise: {
              "[[Proto]]": "Promise",
              applyFunction: fn,
              applyFunctionSendOnly: fn,
              applyMethod: fn,
              applyMethodSendOnly: fn,
              get: fn,
              getSendOnly: fn,
              prototype: "%PromisePrototype%",
              resolve: fn
            },
            Promise: {
              "[[Proto]]": "%FunctionPrototype%",
              all: fn,
              allSettled: fn,
              any: !1,
              prototype: "%PromisePrototype%",
              race: fn,
              reject: fn,
              resolve: fn,
              "@@species": getter
            },
            "%PromisePrototype%": {
              catch: fn,
              constructor: "Promise",
              finally: fn,
              then: fn,
              "@@toStringTag": "string",
              "UniqueSymbol(async_id_symbol)": accessor,
              "UniqueSymbol(trigger_async_id_symbol)": accessor,
              "UniqueSymbol(destroyed)": accessor
            },
            "%InertAsyncFunction%": { "[[Proto]]": "%InertFunction%", prototype: "%AsyncFunctionPrototype%" },
            "%AsyncFunctionPrototype%": {
              "[[Proto]]": "%FunctionPrototype%",
              constructor: "%InertAsyncFunction%",
              length: "number",
              "@@toStringTag": "string"
            },
            Reflect: {
              apply: fn,
              construct: fn,
              defineProperty: fn,
              deleteProperty: fn,
              get: fn,
              getOwnPropertyDescriptor: fn,
              getPrototypeOf: fn,
              has: fn,
              isExtensible: fn,
              ownKeys: fn,
              preventExtensions: fn,
              set: fn,
              setPrototypeOf: fn,
              "@@toStringTag": "string"
            },
            Proxy: { "[[Proto]]": "%FunctionPrototype%", revocable: fn },
            escape: fn,
            unescape: fn,
            "%UniqueCompartment%": { "[[Proto]]": "%FunctionPrototype%", prototype: "%CompartmentPrototype%", toString: fn },
            "%InertCompartment%": { "[[Proto]]": "%FunctionPrototype%", prototype: "%CompartmentPrototype%", toString: fn },
            "%CompartmentPrototype%": {
              constructor: "%InertCompartment%",
              evaluate: fn,
              globalThis: getter,
              name: getter,
              toString: fn,
              import: asyncFn,
              load: asyncFn,
              importNow: fn,
              module: fn
            },
            lockdown: fn,
            harden: { ...fn, isFake: "boolean" },
            "%InitialGetStackString%": fn
          };
        $h‍_once.permitted(permitted);
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let TypeError,
          WeakSet,
          arrayFilter,
          create,
          defineProperty,
          entries,
          freeze,
          getOwnPropertyDescriptor,
          getOwnPropertyDescriptors,
          globalThis,
          is,
          isObject,
          objectHasOwnProperty,
          values,
          weaksetHas,
          constantProperties,
          sharedGlobalPropertyNames,
          universalPropertyNames,
          permitted;
        $h‍_imports([
          [
            "./commons.js",
            [
              ["TypeError", [($h‍_a) => (TypeError = $h‍_a)]],
              ["WeakSet", [($h‍_a) => (WeakSet = $h‍_a)]],
              ["arrayFilter", [($h‍_a) => (arrayFilter = $h‍_a)]],
              ["create", [($h‍_a) => (create = $h‍_a)]],
              ["defineProperty", [($h‍_a) => (defineProperty = $h‍_a)]],
              ["entries", [($h‍_a) => (entries = $h‍_a)]],
              ["freeze", [($h‍_a) => (freeze = $h‍_a)]],
              ["getOwnPropertyDescriptor", [($h‍_a) => (getOwnPropertyDescriptor = $h‍_a)]],
              ["getOwnPropertyDescriptors", [($h‍_a) => (getOwnPropertyDescriptors = $h‍_a)]],
              ["globalThis", [($h‍_a) => (globalThis = $h‍_a)]],
              ["is", [($h‍_a) => (is = $h‍_a)]],
              ["isObject", [($h‍_a) => (isObject = $h‍_a)]],
              ["objectHasOwnProperty", [($h‍_a) => (objectHasOwnProperty = $h‍_a)]],
              ["values", [($h‍_a) => (values = $h‍_a)]],
              ["weaksetHas", [($h‍_a) => (weaksetHas = $h‍_a)]]
            ]
          ],
          [
            "./permits.js",
            [
              ["constantProperties", [($h‍_a) => (constantProperties = $h‍_a)]],
              ["sharedGlobalPropertyNames", [($h‍_a) => (sharedGlobalPropertyNames = $h‍_a)]],
              ["universalPropertyNames", [($h‍_a) => (universalPropertyNames = $h‍_a)]],
              ["permitted", [($h‍_a) => (permitted = $h‍_a)]]
            ]
          ]
        ]);
        const isFunction = (obj) => "function" == typeof obj;
        function initProperty(obj, name, desc) {
          if (objectHasOwnProperty(obj, name)) {
            const preDesc = getOwnPropertyDescriptor(obj, name);
            if (
              !preDesc ||
              !is(preDesc.value, desc.value) ||
              preDesc.get !== desc.get ||
              preDesc.set !== desc.set ||
              preDesc.writable !== desc.writable ||
              preDesc.enumerable !== desc.enumerable ||
              preDesc.configurable !== desc.configurable
            )
              throw TypeError(`Conflicting definitions of ${name}`);
          }
          defineProperty(obj, name, desc);
        }
        function sampleGlobals(globalObject, newPropertyNames) {
          const newIntrinsics = { __proto__: null };
          for (const [globalName, intrinsicName] of entries(newPropertyNames))
            objectHasOwnProperty(globalObject, globalName) && (newIntrinsics[intrinsicName] = globalObject[globalName]);
          return newIntrinsics;
        }
        const makeIntrinsicsCollector = () => {
          const intrinsics = create(null);
          let pseudoNatives;
          const addIntrinsics = (newIntrinsics) => {
            !(function (obj, descs) {
              for (const [name, desc] of entries(descs)) initProperty(obj, name, desc);
            })(intrinsics, getOwnPropertyDescriptors(newIntrinsics));
          };
          freeze(addIntrinsics);
          const completePrototypes = () => {
            for (const [name, intrinsic] of entries(intrinsics)) {
              if (!isObject(intrinsic)) continue;
              if (!objectHasOwnProperty(intrinsic, "prototype")) continue;
              const permit = permitted[name];
              if ("object" != typeof permit) throw TypeError(`Expected permit object at whitelist.${name}`);
              const namePrototype = permit.prototype;
              if (!namePrototype) throw TypeError(`${name}.prototype property not whitelisted`);
              if ("string" != typeof namePrototype || !objectHasOwnProperty(permitted, namePrototype))
                throw TypeError(`Unrecognized ${name}.prototype whitelist entry`);
              const intrinsicPrototype = intrinsic.prototype;
              if (objectHasOwnProperty(intrinsics, namePrototype)) {
                if (intrinsics[namePrototype] !== intrinsicPrototype) throw TypeError(`Conflicting bindings of ${namePrototype}`);
              } else intrinsics[namePrototype] = intrinsicPrototype;
            }
          };
          freeze(completePrototypes);
          const finalIntrinsics = () => (
            freeze(intrinsics), (pseudoNatives = new WeakSet(arrayFilter(values(intrinsics), isFunction))), intrinsics
          );
          freeze(finalIntrinsics);
          const isPseudoNative = (obj) => {
            if (!pseudoNatives) throw TypeError("isPseudoNative can only be called after finalIntrinsics");
            return weaksetHas(pseudoNatives, obj);
          };
          freeze(isPseudoNative);
          const intrinsicsCollector = {
            addIntrinsics: addIntrinsics,
            completePrototypes: completePrototypes,
            finalIntrinsics: finalIntrinsics,
            isPseudoNative: isPseudoNative
          };
          return (
            freeze(intrinsicsCollector),
            addIntrinsics(constantProperties),
            addIntrinsics(sampleGlobals(globalThis, universalPropertyNames)),
            intrinsicsCollector
          );
        };
        $h‍_once.makeIntrinsicsCollector(makeIntrinsicsCollector);
        $h‍_once.getGlobalIntrinsics((globalObject) => {
          const { addIntrinsics: addIntrinsics, finalIntrinsics: finalIntrinsics } = makeIntrinsicsCollector();
          return addIntrinsics(sampleGlobals(globalObject, sharedGlobalPropertyNames)), finalIntrinsics();
        });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let permitted,
          FunctionInstance,
          isAccessorPermit,
          Map,
          String,
          Symbol,
          TypeError,
          arrayFilter,
          arrayIncludes,
          arrayMap,
          entries,
          getOwnPropertyDescriptor,
          getPrototypeOf,
          isObject,
          mapGet,
          objectHasOwnProperty,
          ownKeys,
          symbolKeyFor;
        $h‍_imports([
          [
            "./permits.js",
            [
              ["permitted", [($h‍_a) => (permitted = $h‍_a)]],
              ["FunctionInstance", [($h‍_a) => (FunctionInstance = $h‍_a)]],
              ["isAccessorPermit", [($h‍_a) => (isAccessorPermit = $h‍_a)]]
            ]
          ],
          [
            "./commons.js",
            [
              ["Map", [($h‍_a) => (Map = $h‍_a)]],
              ["String", [($h‍_a) => (String = $h‍_a)]],
              ["Symbol", [($h‍_a) => (Symbol = $h‍_a)]],
              ["TypeError", [($h‍_a) => (TypeError = $h‍_a)]],
              ["arrayFilter", [($h‍_a) => (arrayFilter = $h‍_a)]],
              ["arrayIncludes", [($h‍_a) => (arrayIncludes = $h‍_a)]],
              ["arrayMap", [($h‍_a) => (arrayMap = $h‍_a)]],
              ["entries", [($h‍_a) => (entries = $h‍_a)]],
              ["getOwnPropertyDescriptor", [($h‍_a) => (getOwnPropertyDescriptor = $h‍_a)]],
              ["getPrototypeOf", [($h‍_a) => (getPrototypeOf = $h‍_a)]],
              ["isObject", [($h‍_a) => (isObject = $h‍_a)]],
              ["mapGet", [($h‍_a) => (mapGet = $h‍_a)]],
              ["objectHasOwnProperty", [($h‍_a) => (objectHasOwnProperty = $h‍_a)]],
              ["ownKeys", [($h‍_a) => (ownKeys = $h‍_a)]],
              ["symbolKeyFor", [($h‍_a) => (symbolKeyFor = $h‍_a)]]
            ]
          ]
        ]),
          $h‍_once.default(function (intrinsics, markVirtualizedNativeFunction) {
            const primitives = ["undefined", "boolean", "number", "string", "symbol"],
              wellKnownSymbolNames = new Map(
                Symbol
                  ? arrayMap(
                      arrayFilter(
                        entries(permitted["%SharedSymbol%"]),
                        ([name, permit]) => "symbol" === permit && "symbol" == typeof Symbol[name]
                      ),
                      ([name]) => [Symbol[name], `@@${name}`]
                    )
                  : []
              );
            function asStringPropertyName(path, prop) {
              if ("string" == typeof prop) return prop;
              const wellKnownSymbol = mapGet(wellKnownSymbolNames, prop);
              if ("symbol" == typeof prop) {
                if (wellKnownSymbol) return wellKnownSymbol;
                {
                  const registeredKey = symbolKeyFor(prop);
                  return void 0 !== registeredKey ? `RegisteredSymbol(${registeredKey})` : `Unique${String(prop)}`;
                }
              }
              throw TypeError(`Unexpected property name type ${path} ${prop}`);
            }
            function isAllowedPropertyValue(path, value, prop, permit) {
              if ("object" == typeof permit) return visitProperties(path, value, permit), !0;
              if (!1 === permit) return !1;
              if ("string" == typeof permit)
                if ("prototype" === prop || "constructor" === prop) {
                  if (objectHasOwnProperty(intrinsics, permit)) {
                    if (value !== intrinsics[permit]) throw TypeError(`Does not match whitelist ${path}`);
                    return !0;
                  }
                } else if (arrayIncludes(primitives, permit)) {
                  if (typeof value !== permit) throw TypeError(`At ${path} expected ${permit} not ${typeof value}`);
                  return !0;
                }
              throw TypeError(`Unexpected whitelist permit ${permit} at ${path}`);
            }
            function isAllowedProperty(path, obj, prop, permit) {
              const desc = getOwnPropertyDescriptor(obj, prop);
              if (!desc) throw TypeError(`Property ${prop} not found at ${path}`);
              if (objectHasOwnProperty(desc, "value")) {
                if (isAccessorPermit(permit)) throw TypeError(`Accessor expected at ${path}`);
                return isAllowedPropertyValue(path, desc.value, prop, permit);
              }
              if (!isAccessorPermit(permit)) throw TypeError(`Accessor not expected at ${path}`);
              return (
                isAllowedPropertyValue(`${path}<get>`, desc.get, prop, permit.get) &&
                isAllowedPropertyValue(`${path}<set>`, desc.set, prop, permit.set)
              );
            }
            function getSubPermit(obj, permit, prop) {
              const permitProp = "__proto__" === prop ? "--proto--" : prop;
              return objectHasOwnProperty(permit, permitProp)
                ? permit[permitProp]
                : "function" == typeof obj && objectHasOwnProperty(FunctionInstance, permitProp)
                ? FunctionInstance[permitProp]
                : void 0;
            }
            function visitProperties(path, obj, permit) {
              if (null == obj) return;
              !(function (path, obj, protoName) {
                if (!isObject(obj)) throw TypeError(`Object expected: ${path}, ${obj}, ${protoName}`);
                const proto = getPrototypeOf(obj);
                if (null !== proto || null !== protoName) {
                  if (void 0 !== protoName && "string" != typeof protoName) throw TypeError(`Malformed whitelist permit ${path}.__proto__`);
                  if (proto !== intrinsics[protoName || "%ObjectPrototype%"])
                    throw TypeError(`Unexpected intrinsic ${path}.__proto__ at ${protoName}`);
                }
              })(path, obj, permit["[[Proto]]"]),
                "function" == typeof obj && markVirtualizedNativeFunction(obj);
              for (const prop of ownKeys(obj)) {
                const propString = asStringPropertyName(path, prop),
                  subPath = `${path}.${propString}`,
                  subPermit = getSubPermit(obj, permit, propString);
                if (!subPermit || !isAllowedProperty(subPath, obj, prop, subPermit)) {
                  !1 !== subPermit && console.warn(`Removing ${subPath}`);
                  try {
                    delete obj[prop];
                  } catch (err) {
                    if (prop in obj) {
                      if ("function" == typeof obj && "prototype" === prop && ((obj.prototype = void 0), void 0 === obj.prototype)) {
                        console.warn(`Tolerating undeletable ${subPath} === undefined`);
                        continue;
                      }
                      console.error(`failed to delete ${subPath}`, err);
                    } else console.error(`deleting ${subPath} threw`, err);
                    throw err;
                  }
                }
              }
            }
            visitProperties("intrinsics", intrinsics, permitted);
          });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let FERAL_FUNCTION, SyntaxError, TypeError, defineProperties, getPrototypeOf, setPrototypeOf, freeze;
        $h‍_imports([
          [
            "./commons.js",
            [
              ["FERAL_FUNCTION", [($h‍_a) => (FERAL_FUNCTION = $h‍_a)]],
              ["SyntaxError", [($h‍_a) => (SyntaxError = $h‍_a)]],
              ["TypeError", [($h‍_a) => (TypeError = $h‍_a)]],
              ["defineProperties", [($h‍_a) => (defineProperties = $h‍_a)]],
              ["getPrototypeOf", [($h‍_a) => (getPrototypeOf = $h‍_a)]],
              ["setPrototypeOf", [($h‍_a) => (setPrototypeOf = $h‍_a)]],
              ["freeze", [($h‍_a) => (freeze = $h‍_a)]]
            ]
          ]
        ]),
          $h‍_once.default(function () {
            try {
              FERAL_FUNCTION.prototype.constructor("return 1");
            } catch (ignore) {
              return freeze({});
            }
            const newIntrinsics = {};
            function repairFunction(name, intrinsicName, declaration) {
              let FunctionInstance;
              try {
                FunctionInstance = (0, eval)(declaration);
              } catch (e) {
                if (e instanceof SyntaxError) return;
                throw e;
              }
              const FunctionPrototype = getPrototypeOf(FunctionInstance),
                InertConstructor = function () {
                  throw TypeError("Function.prototype.constructor is not a valid constructor.");
                };
              defineProperties(InertConstructor, {
                prototype: { value: FunctionPrototype },
                name: { value: name, writable: !1, enumerable: !1, configurable: !0 }
              }),
                defineProperties(FunctionPrototype, { constructor: { value: InertConstructor } }),
                InertConstructor !== FERAL_FUNCTION.prototype.constructor &&
                  setPrototypeOf(InertConstructor, FERAL_FUNCTION.prototype.constructor),
                (newIntrinsics[intrinsicName] = InertConstructor);
            }
            return (
              repairFunction("Function", "%InertFunction%", "(function(){})"),
              repairFunction("GeneratorFunction", "%InertGeneratorFunction%", "(function*(){})"),
              repairFunction("AsyncFunction", "%InertAsyncFunction%", "(async function(){})"),
              repairFunction("AsyncGeneratorFunction", "%InertAsyncGeneratorFunction%", "(async function*(){})"),
              newIntrinsics
            );
          });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let Date, TypeError, apply, construct, defineProperties;
        $h‍_imports([
          [
            "./commons.js",
            [
              ["Date", [($h‍_a) => (Date = $h‍_a)]],
              ["TypeError", [($h‍_a) => (TypeError = $h‍_a)]],
              ["apply", [($h‍_a) => (apply = $h‍_a)]],
              ["construct", [($h‍_a) => (construct = $h‍_a)]],
              ["defineProperties", [($h‍_a) => (defineProperties = $h‍_a)]]
            ]
          ]
        ]),
          $h‍_once.default(function (dateTaming = "safe") {
            if ("safe" !== dateTaming && "unsafe" !== dateTaming) throw TypeError(`unrecognized dateTaming ${dateTaming}`);
            const OriginalDate = Date,
              DatePrototype = OriginalDate.prototype,
              tamedMethods = {
                now() {
                  throw TypeError("secure mode Calling %SharedDate%.now() throws");
                }
              },
              makeDateConstructor = ({ powers: powers = "none" } = {}) => {
                let ResultDate;
                return (
                  (ResultDate =
                    "original" === powers
                      ? function (...rest) {
                          return void 0 === new.target ? apply(OriginalDate, void 0, rest) : construct(OriginalDate, rest, new.target);
                        }
                      : function (...rest) {
                          if (void 0 === new.target) throw TypeError("secure mode Calling %SharedDate% constructor as a function throws");
                          if (0 === rest.length) throw TypeError("secure mode Calling new %SharedDate%() with no arguments throws");
                          return construct(OriginalDate, rest, new.target);
                        }),
                  defineProperties(ResultDate, {
                    length: { value: 7 },
                    prototype: { value: DatePrototype, writable: !1, enumerable: !1, configurable: !1 },
                    parse: { value: OriginalDate.parse, writable: !0, enumerable: !1, configurable: !0 },
                    UTC: { value: OriginalDate.UTC, writable: !0, enumerable: !1, configurable: !0 }
                  }),
                  ResultDate
                );
              },
              InitialDate = makeDateConstructor({ powers: "original" }),
              SharedDate = makeDateConstructor({ powers: "none" });
            return (
              defineProperties(InitialDate, { now: { value: OriginalDate.now, writable: !0, enumerable: !1, configurable: !0 } }),
              defineProperties(SharedDate, { now: { value: tamedMethods.now, writable: !0, enumerable: !1, configurable: !0 } }),
              defineProperties(DatePrototype, { constructor: { value: SharedDate } }),
              { "%InitialDate%": InitialDate, "%SharedDate%": SharedDate }
            );
          });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let Math, TypeError, create, getOwnPropertyDescriptors, objectPrototype;
        $h‍_imports([
          [
            "./commons.js",
            [
              ["Math", [($h‍_a) => (Math = $h‍_a)]],
              ["TypeError", [($h‍_a) => (TypeError = $h‍_a)]],
              ["create", [($h‍_a) => (create = $h‍_a)]],
              ["getOwnPropertyDescriptors", [($h‍_a) => (getOwnPropertyDescriptors = $h‍_a)]],
              ["objectPrototype", [($h‍_a) => (objectPrototype = $h‍_a)]]
            ]
          ]
        ]),
          $h‍_once.default(function (mathTaming = "safe") {
            if ("safe" !== mathTaming && "unsafe" !== mathTaming) throw TypeError(`unrecognized mathTaming ${mathTaming}`);
            const originalMath = Math,
              initialMath = originalMath,
              { random: _, ...otherDescriptors } = getOwnPropertyDescriptors(originalMath);
            return {
              "%InitialMath%": initialMath,
              "%SharedMath%": create(objectPrototype, {
                ...otherDescriptors,
                random: {
                  value: {
                    random() {
                      throw TypeError("secure mode %SharedMath%.random() throws");
                    }
                  }.random,
                  writable: !0,
                  enumerable: !1,
                  configurable: !0
                }
              })
            };
          });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let FERAL_REG_EXP, TypeError, construct, defineProperties, getOwnPropertyDescriptor, speciesSymbol;
        $h‍_imports([
          [
            "./commons.js",
            [
              ["FERAL_REG_EXP", [($h‍_a) => (FERAL_REG_EXP = $h‍_a)]],
              ["TypeError", [($h‍_a) => (TypeError = $h‍_a)]],
              ["construct", [($h‍_a) => (construct = $h‍_a)]],
              ["defineProperties", [($h‍_a) => (defineProperties = $h‍_a)]],
              ["getOwnPropertyDescriptor", [($h‍_a) => (getOwnPropertyDescriptor = $h‍_a)]],
              ["speciesSymbol", [($h‍_a) => (speciesSymbol = $h‍_a)]]
            ]
          ]
        ]),
          $h‍_once.default(function (regExpTaming = "safe") {
            if ("safe" !== regExpTaming && "unsafe" !== regExpTaming) throw TypeError(`unrecognized regExpTaming ${regExpTaming}`);
            const RegExpPrototype = FERAL_REG_EXP.prototype,
              makeRegExpConstructor = (_ = {}) => {
                const ResultRegExp = function (...rest) {
                    return void 0 === new.target ? FERAL_REG_EXP(...rest) : construct(FERAL_REG_EXP, rest, new.target);
                  },
                  speciesDesc = getOwnPropertyDescriptor(FERAL_REG_EXP, speciesSymbol);
                if (!speciesDesc) throw TypeError("no RegExp[Symbol.species] descriptor");
                return (
                  defineProperties(ResultRegExp, {
                    length: { value: 2 },
                    prototype: { value: RegExpPrototype, writable: !1, enumerable: !1, configurable: !1 },
                    [speciesSymbol]: speciesDesc
                  }),
                  ResultRegExp
                );
              },
              InitialRegExp = makeRegExpConstructor(),
              SharedRegExp = makeRegExpConstructor();
            return (
              "unsafe" !== regExpTaming && delete RegExpPrototype.compile,
              defineProperties(RegExpPrototype, { constructor: { value: SharedRegExp } }),
              { "%InitialRegExp%": InitialRegExp, "%SharedRegExp%": SharedRegExp }
            );
          });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        $h‍_imports([]);
        $h‍_once.minEnablements({
          "%ObjectPrototype%": { toString: !0 },
          "%FunctionPrototype%": { toString: !0 },
          "%ErrorPrototype%": { name: !0 }
        });
        const moderateEnablements = {
          "%ObjectPrototype%": { toString: !0, valueOf: !0 },
          "%ArrayPrototype%": { toString: !0, push: !0 },
          "%FunctionPrototype%": { constructor: !0, bind: !0, toString: !0 },
          "%ErrorPrototype%": { constructor: !0, message: !0, name: !0, toString: !0 },
          "%TypeErrorPrototype%": { constructor: !0, message: !0, name: !0 },
          "%SyntaxErrorPrototype%": { message: !0, name: !0 },
          "%RangeErrorPrototype%": { message: !0, name: !0 },
          "%URIErrorPrototype%": { message: !0, name: !0 },
          "%EvalErrorPrototype%": { message: !0, name: !0 },
          "%ReferenceErrorPrototype%": { message: !0, name: !0 },
          "%PromisePrototype%": { constructor: !0 },
          "%TypedArrayPrototype%": "*",
          "%Generator%": { constructor: !0, name: !0, toString: !0 },
          "%IteratorPrototype%": { toString: !0 }
        };
        $h‍_once.moderateEnablements(moderateEnablements);
        const severeEnablements = {
          ...moderateEnablements,
          "%ObjectPrototype%": "*",
          "%TypedArrayPrototype%": "*",
          "%MapPrototype%": "*",
          "%SetPrototype%": "*"
        };
        $h‍_once.severeEnablements(severeEnablements);
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let Set,
          String,
          TypeError,
          arrayForEach,
          defineProperty,
          getOwnPropertyDescriptor,
          getOwnPropertyDescriptors,
          getOwnPropertyNames,
          isObject,
          objectHasOwnProperty,
          ownKeys,
          setHas,
          minEnablements,
          moderateEnablements,
          severeEnablements;
        $h‍_imports([
          [
            "./commons.js",
            [
              ["Set", [($h‍_a) => (Set = $h‍_a)]],
              ["String", [($h‍_a) => (String = $h‍_a)]],
              ["TypeError", [($h‍_a) => (TypeError = $h‍_a)]],
              ["arrayForEach", [($h‍_a) => (arrayForEach = $h‍_a)]],
              ["defineProperty", [($h‍_a) => (defineProperty = $h‍_a)]],
              ["getOwnPropertyDescriptor", [($h‍_a) => (getOwnPropertyDescriptor = $h‍_a)]],
              ["getOwnPropertyDescriptors", [($h‍_a) => (getOwnPropertyDescriptors = $h‍_a)]],
              ["getOwnPropertyNames", [($h‍_a) => (getOwnPropertyNames = $h‍_a)]],
              ["isObject", [($h‍_a) => (isObject = $h‍_a)]],
              ["objectHasOwnProperty", [($h‍_a) => (objectHasOwnProperty = $h‍_a)]],
              ["ownKeys", [($h‍_a) => (ownKeys = $h‍_a)]],
              ["setHas", [($h‍_a) => (setHas = $h‍_a)]]
            ]
          ],
          [
            "./enablements.js",
            [
              ["minEnablements", [($h‍_a) => (minEnablements = $h‍_a)]],
              ["moderateEnablements", [($h‍_a) => (moderateEnablements = $h‍_a)]],
              ["severeEnablements", [($h‍_a) => (severeEnablements = $h‍_a)]]
            ]
          ]
        ]),
          $h‍_once.default(function (intrinsics, overrideTaming, overrideDebug = []) {
            const debugProperties = new Set(overrideDebug);
            function enable(path, obj, prop, desc) {
              if ("value" in desc && desc.configurable) {
                const { value: value } = desc;
                function getter() {
                  return value;
                }
                defineProperty(getter, "originalValue", { value: value, writable: !1, enumerable: !1, configurable: !1 });
                const isDebug = setHas(debugProperties, prop);
                function setter(newValue) {
                  if (obj === this) throw TypeError(`Cannot assign to read only property '${String(prop)}' of '${path}'`);
                  objectHasOwnProperty(this, prop)
                    ? (this[prop] = newValue)
                    : (isDebug && console.error(TypeError(`Override property ${prop}`)),
                      defineProperty(this, prop, { value: newValue, writable: !0, enumerable: !0, configurable: !0 }));
                }
                defineProperty(obj, prop, { get: getter, set: setter, enumerable: desc.enumerable, configurable: desc.configurable });
              }
            }
            function enableProperty(path, obj, prop) {
              const desc = getOwnPropertyDescriptor(obj, prop);
              desc && enable(path, obj, prop, desc);
            }
            function enableAllProperties(path, obj) {
              const descs = getOwnPropertyDescriptors(obj);
              descs && arrayForEach(ownKeys(descs), (prop) => enable(path, obj, prop, descs[prop]));
            }
            let plan;
            switch (overrideTaming) {
              case "min":
                plan = minEnablements;
                break;
              case "moderate":
                plan = moderateEnablements;
                break;
              case "severe":
                plan = severeEnablements;
                break;
              default:
                throw TypeError(`unrecognized overrideTaming ${overrideTaming}`);
            }
            !(function enableProperties(path, obj, plan) {
              for (const prop of getOwnPropertyNames(plan)) {
                const desc = getOwnPropertyDescriptor(obj, prop);
                if (!desc || desc.get || desc.set) continue;
                const subPath = `${path}.${String(prop)}`,
                  subPlan = plan[prop];
                if (!0 === subPlan) enableProperty(subPath, obj, prop);
                else if ("*" === subPlan) enableAllProperties(subPath, desc.value);
                else {
                  if (!isObject(subPlan)) throw TypeError(`Unexpected override enablement plan ${subPath}`);
                  enableProperties(subPath, desc.value, subPlan);
                }
              }
            })("root", intrinsics, plan);
          });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let Number, String, TypeError, defineProperty, getOwnPropertyNames, isObject, regexpExec, assert;
        $h‍_imports([
          [
            "./commons.js",
            [
              ["Number", [($h‍_a) => (Number = $h‍_a)]],
              ["String", [($h‍_a) => (String = $h‍_a)]],
              ["TypeError", [($h‍_a) => (TypeError = $h‍_a)]],
              ["defineProperty", [($h‍_a) => (defineProperty = $h‍_a)]],
              ["getOwnPropertyNames", [($h‍_a) => (getOwnPropertyNames = $h‍_a)]],
              ["isObject", [($h‍_a) => (isObject = $h‍_a)]],
              ["regexpExec", [($h‍_a) => (regexpExec = $h‍_a)]]
            ]
          ],
          ["./error/assert.js", [["assert", [($h‍_a) => (assert = $h‍_a)]]]]
        ]);
        const { Fail: Fail, quote: q } = assert,
          localePattern = /^(\w*[a-z])Locale([A-Z]\w*)$/,
          tamedMethods = {
            localeCompare(arg) {
              if (null == this) throw TypeError('Cannot localeCompare with null or undefined "this" value');
              const s = `${this}`,
                that = `${arg}`;
              return s < that ? -1 : s > that ? 1 : (s === that || Fail`expected ${q(s)} and ${q(that)} to compare`, 0);
            },
            toString() {
              return `${this}`;
            }
          },
          nonLocaleCompare = tamedMethods.localeCompare,
          numberToString = tamedMethods.toString;
        $h‍_once.default(function (intrinsics, localeTaming = "safe") {
          if ("safe" !== localeTaming && "unsafe" !== localeTaming) throw TypeError(`unrecognized localeTaming ${localeTaming}`);
          if ("unsafe" !== localeTaming) {
            defineProperty(String.prototype, "localeCompare", { value: nonLocaleCompare });
            for (const intrinsicName of getOwnPropertyNames(intrinsics)) {
              const intrinsic = intrinsics[intrinsicName];
              if (isObject(intrinsic))
                for (const methodName of getOwnPropertyNames(intrinsic)) {
                  const match = regexpExec(localePattern, methodName);
                  if (match) {
                    "function" == typeof intrinsic[methodName] || Fail`expected ${q(methodName)} to be a function`;
                    const nonLocaleMethodName = `${match[1]}${match[2]}`,
                      method = intrinsic[nonLocaleMethodName];
                    "function" == typeof method || Fail`function ${q(nonLocaleMethodName)} not found`,
                      defineProperty(intrinsic, methodName, { value: method });
                  }
                }
            }
            defineProperty(Number.prototype, "toLocaleString", { value: numberToString });
          }
        });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        $h‍_imports([]);
        $h‍_once.makeEvalFunction((safeEvaluate) => (source) => ("string" != typeof source ? source : safeEvaluate(source)));
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let FERAL_FUNCTION, arrayJoin, arrayPop, defineProperties, getPrototypeOf, assert;
        $h‍_imports([
          [
            "./commons.js",
            [
              ["FERAL_FUNCTION", [($h‍_a) => (FERAL_FUNCTION = $h‍_a)]],
              ["arrayJoin", [($h‍_a) => (arrayJoin = $h‍_a)]],
              ["arrayPop", [($h‍_a) => (arrayPop = $h‍_a)]],
              ["defineProperties", [($h‍_a) => (defineProperties = $h‍_a)]],
              ["getPrototypeOf", [($h‍_a) => (getPrototypeOf = $h‍_a)]]
            ]
          ],
          ["./error/assert.js", [["assert", [($h‍_a) => (assert = $h‍_a)]]]]
        ]);
        const { Fail: Fail } = assert;
        $h‍_once.makeFunctionConstructor((safeEvaluate) => {
          const newFunction = function (_body) {
            const bodyText = `${arrayPop(arguments) || ""}`,
              parameters = `${arrayJoin(arguments, ",")}`;
            new FERAL_FUNCTION(parameters, ""), new FERAL_FUNCTION(bodyText);
            return safeEvaluate(`(function anonymous(${parameters}\n) {\n${bodyText}\n})`);
          };
          return (
            defineProperties(newFunction, {
              prototype: { value: FERAL_FUNCTION.prototype, writable: !1, enumerable: !1, configurable: !1 }
            }),
            getPrototypeOf(FERAL_FUNCTION) === FERAL_FUNCTION.prototype || Fail`Function prototype is the same accross compartments`,
            getPrototypeOf(newFunction) === FERAL_FUNCTION.prototype ||
              Fail`Function constructor prototype is the same accross compartments`,
            newFunction
          );
        });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let TypeError,
          assign,
          create,
          defineProperty,
          entries,
          freeze,
          objectHasOwnProperty,
          unscopablesSymbol,
          makeEvalFunction,
          makeFunctionConstructor,
          constantProperties,
          universalPropertyNames;
        $h‍_imports([
          [
            "./commons.js",
            [
              ["TypeError", [($h‍_a) => (TypeError = $h‍_a)]],
              ["assign", [($h‍_a) => (assign = $h‍_a)]],
              ["create", [($h‍_a) => (create = $h‍_a)]],
              ["defineProperty", [($h‍_a) => (defineProperty = $h‍_a)]],
              ["entries", [($h‍_a) => (entries = $h‍_a)]],
              ["freeze", [($h‍_a) => (freeze = $h‍_a)]],
              ["objectHasOwnProperty", [($h‍_a) => (objectHasOwnProperty = $h‍_a)]],
              ["unscopablesSymbol", [($h‍_a) => (unscopablesSymbol = $h‍_a)]]
            ]
          ],
          ["./make-eval-function.js", [["makeEvalFunction", [($h‍_a) => (makeEvalFunction = $h‍_a)]]]],
          ["./make-function-constructor.js", [["makeFunctionConstructor", [($h‍_a) => (makeFunctionConstructor = $h‍_a)]]]],
          [
            "./permits.js",
            [
              ["constantProperties", [($h‍_a) => (constantProperties = $h‍_a)]],
              ["universalPropertyNames", [($h‍_a) => (universalPropertyNames = $h‍_a)]]
            ]
          ]
        ]);
        $h‍_once.setGlobalObjectSymbolUnscopables((globalObject) => {
          defineProperty(
            globalObject,
            unscopablesSymbol,
            freeze(
              assign(create(null), {
                set: freeze(() => {
                  throw TypeError("Cannot set Symbol.unscopables of a Compartment's globalThis");
                }),
                enumerable: !1,
                configurable: !1
              })
            )
          );
        });
        $h‍_once.setGlobalObjectConstantProperties((globalObject) => {
          for (const [name, constant] of entries(constantProperties))
            defineProperty(globalObject, name, { value: constant, writable: !1, enumerable: !1, configurable: !1 });
        });
        $h‍_once.setGlobalObjectMutableProperties(
          (
            globalObject,
            {
              intrinsics: intrinsics,
              newGlobalPropertyNames: newGlobalPropertyNames,
              makeCompartmentConstructor: makeCompartmentConstructor,
              markVirtualizedNativeFunction: markVirtualizedNativeFunction
            }
          ) => {
            for (const [name, intrinsicName] of entries(universalPropertyNames))
              objectHasOwnProperty(intrinsics, intrinsicName) &&
                defineProperty(globalObject, name, { value: intrinsics[intrinsicName], writable: !0, enumerable: !1, configurable: !0 });
            for (const [name, intrinsicName] of entries(newGlobalPropertyNames))
              objectHasOwnProperty(intrinsics, intrinsicName) &&
                defineProperty(globalObject, name, { value: intrinsics[intrinsicName], writable: !0, enumerable: !1, configurable: !0 });
            const perCompartmentGlobals = { globalThis: globalObject };
            perCompartmentGlobals.Compartment = makeCompartmentConstructor(
              makeCompartmentConstructor,
              intrinsics,
              markVirtualizedNativeFunction
            );
            for (const [name, value] of entries(perCompartmentGlobals))
              defineProperty(globalObject, name, { value: value, writable: !0, enumerable: !1, configurable: !0 }),
                "function" == typeof value && markVirtualizedNativeFunction(value);
          }
        );
        $h‍_once.setGlobalObjectEvaluators((globalObject, evaluator, markVirtualizedNativeFunction) => {
          {
            const f = makeEvalFunction(evaluator);
            markVirtualizedNativeFunction(f),
              defineProperty(globalObject, "eval", { value: f, writable: !0, enumerable: !1, configurable: !0 });
          }
          {
            const f = makeFunctionConstructor(evaluator);
            markVirtualizedNativeFunction(f),
              defineProperty(globalObject, "Function", { value: f, writable: !0, enumerable: !1, configurable: !0 });
          }
        });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let Proxy, String, TypeError, ReferenceError, create, freeze, getOwnPropertyDescriptors, globalThis, immutableObject, assert;
        $h‍_imports([
          [
            "./commons.js",
            [
              ["Proxy", [($h‍_a) => (Proxy = $h‍_a)]],
              ["String", [($h‍_a) => (String = $h‍_a)]],
              ["TypeError", [($h‍_a) => (TypeError = $h‍_a)]],
              ["ReferenceError", [($h‍_a) => (ReferenceError = $h‍_a)]],
              ["create", [($h‍_a) => (create = $h‍_a)]],
              ["freeze", [($h‍_a) => (freeze = $h‍_a)]],
              ["getOwnPropertyDescriptors", [($h‍_a) => (getOwnPropertyDescriptors = $h‍_a)]],
              ["globalThis", [($h‍_a) => (globalThis = $h‍_a)]],
              ["immutableObject", [($h‍_a) => (immutableObject = $h‍_a)]]
            ]
          ],
          ["./error/assert.js", [["assert", [($h‍_a) => (assert = $h‍_a)]]]]
        ]);
        const { Fail: Fail, quote: q } = assert,
          alwaysThrowHandler = new Proxy(
            immutableObject,
            freeze({
              get(_shadow, prop) {
                Fail`Please report unexpected scope handler trap: ${q(String(prop))}`;
              }
            })
          );
        $h‍_once.alwaysThrowHandler(alwaysThrowHandler);
        const strictScopeTerminatorHandler = freeze(
          create(
            alwaysThrowHandler,
            getOwnPropertyDescriptors({
              get(_shadow, _prop) {},
              set(_shadow, prop, _value) {
                throw ReferenceError(`${String(prop)} is not defined`);
              },
              has: (_shadow, prop) => prop in globalThis,
              getPrototypeOf: (_shadow) => null,
              getOwnPropertyDescriptor(_shadow, prop) {
                const quotedProp = q(String(prop));
                console.warn(`getOwnPropertyDescriptor trap on scopeTerminatorHandler for ${quotedProp}`, TypeError().stack);
              },
              ownKeys: (_shadow) => []
            })
          )
        );
        $h‍_once.strictScopeTerminatorHandler(strictScopeTerminatorHandler);
        const strictScopeTerminator = new Proxy(immutableObject, strictScopeTerminatorHandler);
        $h‍_once.strictScopeTerminator(strictScopeTerminator);
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let Proxy, create, freeze, getOwnPropertyDescriptors, immutableObject, reflectSet, strictScopeTerminatorHandler, alwaysThrowHandler;
        $h‍_imports([
          [
            "./commons.js",
            [
              ["Proxy", [($h‍_a) => (Proxy = $h‍_a)]],
              ["create", [($h‍_a) => (create = $h‍_a)]],
              ["freeze", [($h‍_a) => (freeze = $h‍_a)]],
              ["getOwnPropertyDescriptors", [($h‍_a) => (getOwnPropertyDescriptors = $h‍_a)]],
              ["immutableObject", [($h‍_a) => (immutableObject = $h‍_a)]],
              ["reflectSet", [($h‍_a) => (reflectSet = $h‍_a)]]
            ]
          ],
          [
            "./strict-scope-terminator.js",
            [
              ["strictScopeTerminatorHandler", [($h‍_a) => (strictScopeTerminatorHandler = $h‍_a)]],
              ["alwaysThrowHandler", [($h‍_a) => (alwaysThrowHandler = $h‍_a)]]
            ]
          ]
        ]);
        const createSloppyGlobalsScopeTerminator = (globalObject) => {
          const scopeProxyHandlerProperties = {
              ...strictScopeTerminatorHandler,
              set: (_shadow, prop, value) => reflectSet(globalObject, prop, value),
              has: (_shadow, _prop) => !0
            },
            sloppyGlobalsScopeTerminatorHandler = freeze(
              create(alwaysThrowHandler, getOwnPropertyDescriptors(scopeProxyHandlerProperties))
            );
          return new Proxy(immutableObject, sloppyGlobalsScopeTerminatorHandler);
        };
        $h‍_once.createSloppyGlobalsScopeTerminator(createSloppyGlobalsScopeTerminator), freeze(createSloppyGlobalsScopeTerminator);
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let FERAL_EVAL, create, defineProperties, freeze, assert;
        $h‍_imports([
          [
            "./commons.js",
            [
              ["FERAL_EVAL", [($h‍_a) => (FERAL_EVAL = $h‍_a)]],
              ["create", [($h‍_a) => (create = $h‍_a)]],
              ["defineProperties", [($h‍_a) => (defineProperties = $h‍_a)]],
              ["freeze", [($h‍_a) => (freeze = $h‍_a)]]
            ]
          ],
          ["./error/assert.js", [["assert", [($h‍_a) => (assert = $h‍_a)]]]]
        ]);
        const { Fail: Fail } = assert;
        $h‍_once.makeEvalScopeKit(() => {
          const evalScope = create(null),
            oneTimeEvalProperties = freeze({ eval: { get: () => (delete evalScope.eval, FERAL_EVAL), enumerable: !1, configurable: !0 } }),
            evalScopeKit = {
              evalScope: evalScope,
              allowNextEvalToBeUnsafe() {
                const { revoked: revoked } = evalScopeKit;
                null !== revoked && Fail`a handler did not reset allowNextEvalToBeUnsafe ${revoked.err}`,
                  defineProperties(evalScope, oneTimeEvalProperties);
              },
              revoked: null
            };
          return evalScopeKit;
        });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let FERAL_REG_EXP, regexpExec, stringSlice;
        $h‍_imports([
          [
            "./commons.js",
            [
              ["FERAL_REG_EXP", [($h‍_a) => (FERAL_REG_EXP = $h‍_a)]],
              ["regexpExec", [($h‍_a) => (regexpExec = $h‍_a)]],
              ["stringSlice", [($h‍_a) => (stringSlice = $h‍_a)]]
            ]
          ]
        ]);
        const sourceMetaEntriesRegExp = new FERAL_REG_EXP(
          "(?:\\s*//\\s*[@#]\\s*([a-zA-Z][a-zA-Z0-9]*)\\s*=\\s*([^\\s\\*]*)|/\\*\\s*[@#]\\s*([a-zA-Z][a-zA-Z0-9]*)\\s*=\\s*([^\\s\\*]*)\\s*\\*/)\\s*$"
        );
        $h‍_once.getSourceURL((src) => {
          let sourceURL = "<unknown>";
          for (; src.length > 0; ) {
            const match = regexpExec(sourceMetaEntriesRegExp, src);
            if (null === match) break;
            (src = stringSlice(src, 0, src.length - match[0].length)),
              "sourceURL" === match[3] ? (sourceURL = match[4]) : "sourceURL" === match[1] && (sourceURL = match[2]);
          }
          return sourceURL;
        });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let FERAL_REG_EXP, SyntaxError, stringReplace, stringSearch, stringSlice, stringSplit, freeze, getSourceURL;
        function getLineNumber(src, pattern) {
          const index = stringSearch(src, pattern);
          if (index < 0) return -1;
          const adjustment = "\n" === src[index] ? 1 : 0;
          return stringSplit(stringSlice(src, 0, index), "\n").length + adjustment;
        }
        $h‍_imports([
          [
            "./commons.js",
            [
              ["FERAL_REG_EXP", [($h‍_a) => (FERAL_REG_EXP = $h‍_a)]],
              ["SyntaxError", [($h‍_a) => (SyntaxError = $h‍_a)]],
              ["stringReplace", [($h‍_a) => (stringReplace = $h‍_a)]],
              ["stringSearch", [($h‍_a) => (stringSearch = $h‍_a)]],
              ["stringSlice", [($h‍_a) => (stringSlice = $h‍_a)]],
              ["stringSplit", [($h‍_a) => (stringSplit = $h‍_a)]],
              ["freeze", [($h‍_a) => (freeze = $h‍_a)]]
            ]
          ],
          ["./get-source-url.js", [["getSourceURL", [($h‍_a) => (getSourceURL = $h‍_a)]]]]
        ]);
        const htmlCommentPattern = new FERAL_REG_EXP("(?:\x3c!--|--\x3e)", "g"),
          rejectHtmlComments = (src) => {
            const lineNumber = getLineNumber(src, htmlCommentPattern);
            if (lineNumber < 0) return src;
            const name = getSourceURL(src);
            throw SyntaxError(`Possible HTML comment rejected at ${name}:${lineNumber}. (SES_HTML_COMMENT_REJECTED)`);
          };
        $h‍_once.rejectHtmlComments(rejectHtmlComments);
        const evadeHtmlCommentTest = (src) => stringReplace(src, htmlCommentPattern, (match) => ("<" === match[0] ? "< ! --" : "-- >"));
        $h‍_once.evadeHtmlCommentTest(evadeHtmlCommentTest);
        const importPattern = new FERAL_REG_EXP("(^|[^.]|\\.\\.\\.)\\bimport(\\s*(?:\\(|/[/*]))", "g"),
          rejectImportExpressions = (src) => {
            const lineNumber = getLineNumber(src, importPattern);
            if (lineNumber < 0) return src;
            const name = getSourceURL(src);
            throw SyntaxError(`Possible import expression rejected at ${name}:${lineNumber}. (SES_IMPORT_REJECTED)`);
          };
        $h‍_once.rejectImportExpressions(rejectImportExpressions);
        const evadeImportExpressionTest = (src) => stringReplace(src, importPattern, (_, p1, p2) => `${p1}__import__${p2}`);
        $h‍_once.evadeImportExpressionTest(evadeImportExpressionTest);
        const someDirectEvalPattern = new FERAL_REG_EXP("(^|[^.])\\beval(\\s*\\()", "g"),
          rejectSomeDirectEvalExpressions = (src) => {
            const lineNumber = getLineNumber(src, someDirectEvalPattern);
            if (lineNumber < 0) return src;
            const name = getSourceURL(src);
            throw SyntaxError(`Possible direct eval expression rejected at ${name}:${lineNumber}. (SES_EVAL_REJECTED)`);
          };
        $h‍_once.rejectSomeDirectEvalExpressions(rejectSomeDirectEvalExpressions);
        const mandatoryTransforms = (source) => ((source = rejectHtmlComments(source)), (source = rejectImportExpressions(source)));
        $h‍_once.mandatoryTransforms(mandatoryTransforms);
        const applyTransforms = (source, transforms) => {
          for (const transform of transforms) source = transform(source);
          return source;
        };
        $h‍_once.applyTransforms(applyTransforms);
        const transforms = freeze({
          rejectHtmlComments: freeze(rejectHtmlComments),
          evadeHtmlCommentTest: freeze(evadeHtmlCommentTest),
          rejectImportExpressions: freeze(rejectImportExpressions),
          evadeImportExpressionTest: freeze(evadeImportExpressionTest),
          rejectSomeDirectEvalExpressions: freeze(rejectSomeDirectEvalExpressions),
          mandatoryTransforms: freeze(mandatoryTransforms),
          applyTransforms: freeze(applyTransforms)
        });
        $h‍_once.transforms(transforms);
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let arrayFilter, arrayIncludes, getOwnPropertyDescriptor, getOwnPropertyNames, objectHasOwnProperty, regexpTest;
        $h‍_imports([
          [
            "./commons.js",
            [
              ["arrayFilter", [($h‍_a) => (arrayFilter = $h‍_a)]],
              ["arrayIncludes", [($h‍_a) => (arrayIncludes = $h‍_a)]],
              ["getOwnPropertyDescriptor", [($h‍_a) => (getOwnPropertyDescriptor = $h‍_a)]],
              ["getOwnPropertyNames", [($h‍_a) => (getOwnPropertyNames = $h‍_a)]],
              ["objectHasOwnProperty", [($h‍_a) => (objectHasOwnProperty = $h‍_a)]],
              ["regexpTest", [($h‍_a) => (regexpTest = $h‍_a)]]
            ]
          ]
        ]);
        const keywords = [
            "await",
            "break",
            "case",
            "catch",
            "class",
            "const",
            "continue",
            "debugger",
            "default",
            "delete",
            "do",
            "else",
            "export",
            "extends",
            "finally",
            "for",
            "function",
            "if",
            "import",
            "in",
            "instanceof",
            "new",
            "return",
            "super",
            "switch",
            "this",
            "throw",
            "try",
            "typeof",
            "var",
            "void",
            "while",
            "with",
            "yield",
            "let",
            "static",
            "enum",
            "implements",
            "package",
            "protected",
            "interface",
            "private",
            "public",
            "await",
            "null",
            "true",
            "false",
            "this",
            "arguments"
          ],
          identifierPattern = /^[a-zA-Z_$][\w$]*$/,
          isValidIdentifierName = (name) => "eval" !== name && !arrayIncludes(keywords, name) && regexpTest(identifierPattern, name);
        function isImmutableDataProperty(obj, name) {
          const desc = getOwnPropertyDescriptor(obj, name);
          return desc && !1 === desc.configurable && !1 === desc.writable && objectHasOwnProperty(desc, "value");
        }
        $h‍_once.isValidIdentifierName(isValidIdentifierName);
        $h‍_once.getScopeConstants((globalObject, moduleLexicals = {}) => {
          const globalObjectNames = getOwnPropertyNames(globalObject),
            moduleLexicalNames = getOwnPropertyNames(moduleLexicals),
            moduleLexicalConstants = arrayFilter(
              moduleLexicalNames,
              (name) => isValidIdentifierName(name) && isImmutableDataProperty(moduleLexicals, name)
            );
          return {
            globalObjectConstants: arrayFilter(
              globalObjectNames,
              (name) =>
                !arrayIncludes(moduleLexicalNames, name) && isValidIdentifierName(name) && isImmutableDataProperty(globalObject, name)
            ),
            moduleLexicalConstants: moduleLexicalConstants
          };
        });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let FERAL_FUNCTION, arrayJoin, apply, getScopeConstants;
        function buildOptimizer(constants, name) {
          return 0 === constants.length ? "" : `const {${arrayJoin(constants, ",")}} = this.${name};`;
        }
        $h‍_imports([
          [
            "./commons.js",
            [
              ["FERAL_FUNCTION", [($h‍_a) => (FERAL_FUNCTION = $h‍_a)]],
              ["arrayJoin", [($h‍_a) => (arrayJoin = $h‍_a)]],
              ["apply", [($h‍_a) => (apply = $h‍_a)]]
            ]
          ],
          ["./scope-constants.js", [["getScopeConstants", [($h‍_a) => (getScopeConstants = $h‍_a)]]]]
        ]);
        $h‍_once.makeEvaluate((context) => {
          const { globalObjectConstants: globalObjectConstants, moduleLexicalConstants: moduleLexicalConstants } = getScopeConstants(
              context.globalObject,
              context.moduleLexicals
            ),
            globalObjectOptimizer = buildOptimizer(globalObjectConstants, "globalObject"),
            moduleLexicalOptimizer = buildOptimizer(moduleLexicalConstants, "moduleLexicals"),
            evaluateFactory = FERAL_FUNCTION(
              `\n    with (this.scopeTerminator) {\n      with (this.globalObject) {\n        with (this.moduleLexicals) {\n          with (this.evalScope) {\n            ${globalObjectOptimizer}\n            ${moduleLexicalOptimizer}\n            return function() {\n              'use strict';\n              return eval(arguments[0]);\n            };\n          }\n        }\n      }\n    }\n  `
            );
          return apply(evaluateFactory, context, []);
        });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let apply,
          freeze,
          strictScopeTerminator,
          createSloppyGlobalsScopeTerminator,
          makeEvalScopeKit,
          applyTransforms,
          mandatoryTransforms,
          makeEvaluate,
          assert;
        $h‍_imports([
          [
            "./commons.js",
            [
              ["apply", [($h‍_a) => (apply = $h‍_a)]],
              ["freeze", [($h‍_a) => (freeze = $h‍_a)]]
            ]
          ],
          ["./strict-scope-terminator.js", [["strictScopeTerminator", [($h‍_a) => (strictScopeTerminator = $h‍_a)]]]],
          [
            "./sloppy-globals-scope-terminator.js",
            [["createSloppyGlobalsScopeTerminator", [($h‍_a) => (createSloppyGlobalsScopeTerminator = $h‍_a)]]]
          ],
          ["./eval-scope.js", [["makeEvalScopeKit", [($h‍_a) => (makeEvalScopeKit = $h‍_a)]]]],
          [
            "./transforms.js",
            [
              ["applyTransforms", [($h‍_a) => (applyTransforms = $h‍_a)]],
              ["mandatoryTransforms", [($h‍_a) => (mandatoryTransforms = $h‍_a)]]
            ]
          ],
          ["./make-evaluate.js", [["makeEvaluate", [($h‍_a) => (makeEvaluate = $h‍_a)]]]],
          ["./error/assert.js", [["assert", [($h‍_a) => (assert = $h‍_a)]]]]
        ]);
        const { Fail: Fail } = assert;
        $h‍_once.makeSafeEvaluator(
          ({
            globalObject: globalObject,
            moduleLexicals: moduleLexicals = {},
            globalTransforms: globalTransforms = [],
            sloppyGlobalsMode: sloppyGlobalsMode = !1
          }) => {
            const scopeTerminator = sloppyGlobalsMode ? createSloppyGlobalsScopeTerminator(globalObject) : strictScopeTerminator,
              evalScopeKit = makeEvalScopeKit(),
              { evalScope: evalScope } = evalScopeKit,
              evaluateContext = freeze({
                evalScope: evalScope,
                moduleLexicals: moduleLexicals,
                globalObject: globalObject,
                scopeTerminator: scopeTerminator
              });
            let evaluate;
            return {
              safeEvaluate: (source, options) => {
                const { localTransforms: localTransforms = [] } = options || {};
                let err;
                evaluate || (evaluate = makeEvaluate(evaluateContext)),
                  (source = applyTransforms(source, [...localTransforms, ...globalTransforms, mandatoryTransforms]));
                try {
                  return evalScopeKit.allowNextEvalToBeUnsafe(), apply(evaluate, globalObject, [source]);
                } catch (e) {
                  throw ((err = e), e);
                } finally {
                  const unsafeEvalWasStillExposed = "eval" in evalScope;
                  delete evalScope.eval,
                    unsafeEvalWasStillExposed &&
                      ((evalScopeKit.revoked = { err: err }), Fail`handler did not reset allowNextEvalToBeUnsafe ${err}`);
                }
              }
            };
          }
        );
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let WeakSet, defineProperty, freeze, functionPrototype, functionToString, stringEndsWith, weaksetAdd, weaksetHas;
        $h‍_imports([
          [
            "./commons.js",
            [
              ["WeakSet", [($h‍_a) => (WeakSet = $h‍_a)]],
              ["defineProperty", [($h‍_a) => (defineProperty = $h‍_a)]],
              ["freeze", [($h‍_a) => (freeze = $h‍_a)]],
              ["functionPrototype", [($h‍_a) => (functionPrototype = $h‍_a)]],
              ["functionToString", [($h‍_a) => (functionToString = $h‍_a)]],
              ["stringEndsWith", [($h‍_a) => (stringEndsWith = $h‍_a)]],
              ["weaksetAdd", [($h‍_a) => (weaksetAdd = $h‍_a)]],
              ["weaksetHas", [($h‍_a) => (weaksetHas = $h‍_a)]]
            ]
          ]
        ]);
        let markVirtualizedNativeFunction;
        $h‍_once.tameFunctionToString(() => {
          if (void 0 === markVirtualizedNativeFunction) {
            const virtualizedNativeFunctions = new WeakSet();
            defineProperty(functionPrototype, "toString", {
              value: {
                toString() {
                  const str = functionToString(this);
                  return stringEndsWith(str, ") { [native code] }") || !weaksetHas(virtualizedNativeFunctions, this)
                    ? str
                    : `function ${this.name}() { [native code] }`;
                }
              }.toString
            }),
              (markVirtualizedNativeFunction = freeze((func) => weaksetAdd(virtualizedNativeFunctions, func)));
          }
          return markVirtualizedNativeFunction;
        });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let TypeError, globalThis, getOwnPropertyDescriptor, defineProperty;
        function tameDomains(domainTaming = "safe") {
          if ("safe" !== domainTaming && "unsafe" !== domainTaming) throw TypeError(`unrecognized domainTaming ${domainTaming}`);
          if ("unsafe" !== domainTaming && "object" == typeof globalThis.process && null !== globalThis.process) {
            const domainDescriptor = getOwnPropertyDescriptor(globalThis.process, "domain");
            if (void 0 !== domainDescriptor && void 0 !== domainDescriptor.get)
              throw TypeError("SES failed to lockdown, Node.js domains have been initialized (SES_NO_DOMAINS)");
            defineProperty(globalThis.process, "domain", { value: null, configurable: !1, writable: !1, enumerable: !1 });
          }
        }
        $h‍_imports([
          [
            "./commons.js",
            [
              ["TypeError", [($h‍_a) => (TypeError = $h‍_a)]],
              ["globalThis", [($h‍_a) => (globalThis = $h‍_a)]],
              ["getOwnPropertyDescriptor", [($h‍_a) => (getOwnPropertyDescriptor = $h‍_a)]],
              ["defineProperty", [($h‍_a) => (defineProperty = $h‍_a)]]
            ]
          ]
        ]),
          Object.defineProperty(tameDomains, "name", { value: "tameDomains" }),
          $h‍_once.tameDomains(tameDomains);
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let WeakSet, arrayFilter, arrayMap, arrayPush, defineProperty, freeze, fromEntries, isError, stringEndsWith, weaksetAdd, weaksetHas;
        $h‍_imports([
          [
            "../commons.js",
            [
              ["WeakSet", [($h‍_a) => (WeakSet = $h‍_a)]],
              ["arrayFilter", [($h‍_a) => (arrayFilter = $h‍_a)]],
              ["arrayMap", [($h‍_a) => (arrayMap = $h‍_a)]],
              ["arrayPush", [($h‍_a) => (arrayPush = $h‍_a)]],
              ["defineProperty", [($h‍_a) => (defineProperty = $h‍_a)]],
              ["freeze", [($h‍_a) => (freeze = $h‍_a)]],
              ["fromEntries", [($h‍_a) => (fromEntries = $h‍_a)]],
              ["isError", [($h‍_a) => (isError = $h‍_a)]],
              ["stringEndsWith", [($h‍_a) => (stringEndsWith = $h‍_a)]],
              ["weaksetAdd", [($h‍_a) => (weaksetAdd = $h‍_a)]],
              ["weaksetHas", [($h‍_a) => (weaksetHas = $h‍_a)]]
            ]
          ],
          ["./types.js", []],
          ["./internal-types.js", []]
        ]);
        const consoleLevelMethods = freeze([
            ["debug", "debug"],
            ["log", "log"],
            ["info", "info"],
            ["warn", "warn"],
            ["error", "error"],
            ["trace", "log"],
            ["dirxml", "log"],
            ["group", "log"],
            ["groupCollapsed", "log"]
          ]),
          consoleOtherMethods = freeze([
            ["assert", "error"],
            ["timeLog", "log"],
            ["clear", void 0],
            ["count", "info"],
            ["countReset", void 0],
            ["dir", "log"],
            ["groupEnd", "log"],
            ["table", "log"],
            ["time", "info"],
            ["timeEnd", "info"],
            ["profile", void 0],
            ["profileEnd", void 0],
            ["timeStamp", void 0]
          ]),
          consoleWhitelist = freeze([...consoleLevelMethods, ...consoleOtherMethods]);
        $h‍_once.consoleWhitelist(consoleWhitelist);
        const makeLoggingConsoleKit = (loggedErrorHandler, { shouldResetForDebugging: shouldResetForDebugging = !1 } = {}) => {
          shouldResetForDebugging && loggedErrorHandler.resetErrorTagNum();
          let logArray = [];
          const loggingConsole = fromEntries(
            arrayMap(consoleWhitelist, ([name, _]) => {
              const method = (...args) => {
                arrayPush(logArray, [name, ...args]);
              };
              return defineProperty(method, "name", { value: name }), [name, freeze(method)];
            })
          );
          freeze(loggingConsole);
          const takeLog = () => {
            const result = freeze(logArray);
            return (logArray = []), result;
          };
          freeze(takeLog);
          return freeze({ loggingConsole: loggingConsole, takeLog: takeLog });
        };
        $h‍_once.makeLoggingConsoleKit(makeLoggingConsoleKit), freeze(makeLoggingConsoleKit);
        const ErrorInfo = { NOTE: "ERROR_NOTE:", MESSAGE: "ERROR_MESSAGE:" };
        freeze(ErrorInfo);
        const makeCausalConsole = (baseConsole, loggedErrorHandler) => {
          const {
              getStackString: getStackString,
              tagError: tagError,
              takeMessageLogArgs: takeMessageLogArgs,
              takeNoteLogArgsArray: takeNoteLogArgsArray
            } = loggedErrorHandler,
            extractErrorArgs = (logArgs, subErrorsSink) =>
              arrayMap(logArgs, (arg) => (isError(arg) ? (arrayPush(subErrorsSink, arg), `(${tagError(arg)})`) : arg)),
            logErrorInfo = (severity, error, kind, logArgs, subErrorsSink) => {
              const errorTag = tagError(error),
                errorName = kind === ErrorInfo.MESSAGE ? `${errorTag}:` : `${errorTag} ${kind}`,
                argTags = extractErrorArgs(logArgs, subErrorsSink);
              baseConsole[severity](errorName, ...argTags);
            },
            logSubErrors = (severity, subErrors, optTag = undefined) => {
              if (0 === subErrors.length) return;
              if (1 === subErrors.length && void 0 === optTag) return void logError(severity, subErrors[0]);
              let label;
              (label = 1 === subErrors.length ? "Nested error" : `Nested ${subErrors.length} errors`),
                void 0 !== optTag && (label = `${label} under ${optTag}`),
                baseConsole.group(label);
              try {
                for (const subError of subErrors) logError(severity, subError);
              } finally {
                baseConsole.groupEnd();
              }
            },
            errorsLogged = new WeakSet(),
            logError = (severity, error) => {
              if (weaksetHas(errorsLogged, error)) return;
              const errorTag = tagError(error);
              weaksetAdd(errorsLogged, error);
              const subErrors = [],
                messageLogArgs = takeMessageLogArgs(error),
                noteLogArgsArray = takeNoteLogArgsArray(
                  error,
                  ((severity) => (error, noteLogArgs) => {
                    const subErrors = [];
                    logErrorInfo(severity, error, ErrorInfo.NOTE, noteLogArgs, subErrors),
                      logSubErrors(severity, subErrors, tagError(error));
                  })(severity)
                );
              void 0 === messageLogArgs
                ? baseConsole[severity](`${errorTag}:`, error.message)
                : logErrorInfo(severity, error, ErrorInfo.MESSAGE, messageLogArgs, subErrors);
              let stackString = getStackString(error);
              "string" == typeof stackString && stackString.length >= 1 && !stringEndsWith(stackString, "\n") && (stackString += "\n"),
                baseConsole[severity](stackString);
              for (const noteLogArgs of noteLogArgsArray) logErrorInfo(severity, error, ErrorInfo.NOTE, noteLogArgs, subErrors);
              logSubErrors(severity, subErrors, errorTag);
            },
            levelMethods = arrayMap(consoleLevelMethods, ([level, _]) => {
              const levelMethod = (...logArgs) => {
                const subErrors = [],
                  argTags = extractErrorArgs(logArgs, subErrors);
                baseConsole[level](...argTags), logSubErrors(level, subErrors);
              };
              return defineProperty(levelMethod, "name", { value: level }), [level, freeze(levelMethod)];
            }),
            otherMethodNames = arrayFilter(consoleOtherMethods, ([name, _]) => name in baseConsole),
            otherMethods = arrayMap(otherMethodNames, ([name, _]) => {
              const otherMethod = (...args) => {
                baseConsole[name](...args);
              };
              return defineProperty(otherMethod, "name", { value: name }), [name, freeze(otherMethod)];
            }),
            causalConsole = fromEntries([...levelMethods, ...otherMethods]);
          return freeze(causalConsole);
        };
        $h‍_once.makeCausalConsole(makeCausalConsole), freeze(makeCausalConsole);
        const filterConsole = (baseConsole, filter, _topic = undefined) => {
          const whitelist = arrayFilter(consoleWhitelist, ([name, _]) => name in baseConsole),
            methods = arrayMap(whitelist, ([name, severity]) => [
              name,
              freeze((...args) => {
                (void 0 === severity || filter.canLog(severity)) && baseConsole[name](...args);
              })
            ]),
            filteringConsole = fromEntries(methods);
          return freeze(filteringConsole);
        };
        $h‍_once.filterConsole(filterConsole), freeze(filterConsole);
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let FinalizationRegistry,
          Map,
          mapGet,
          mapDelete,
          WeakMap,
          mapSet,
          finalizationRegistryRegister,
          weakmapSet,
          weakmapGet,
          mapEntries,
          mapHas;
        $h‍_imports([
          [
            "../commons.js",
            [
              ["FinalizationRegistry", [($h‍_a) => (FinalizationRegistry = $h‍_a)]],
              ["Map", [($h‍_a) => (Map = $h‍_a)]],
              ["mapGet", [($h‍_a) => (mapGet = $h‍_a)]],
              ["mapDelete", [($h‍_a) => (mapDelete = $h‍_a)]],
              ["WeakMap", [($h‍_a) => (WeakMap = $h‍_a)]],
              ["mapSet", [($h‍_a) => (mapSet = $h‍_a)]],
              ["finalizationRegistryRegister", [($h‍_a) => (finalizationRegistryRegister = $h‍_a)]],
              ["weakmapSet", [($h‍_a) => (weakmapSet = $h‍_a)]],
              ["weakmapGet", [($h‍_a) => (weakmapGet = $h‍_a)]],
              ["mapEntries", [($h‍_a) => (mapEntries = $h‍_a)]],
              ["mapHas", [($h‍_a) => (mapHas = $h‍_a)]]
            ]
          ]
        ]);
        $h‍_once.makeRejectionHandlers((reportReason) => {
          if (void 0 === FinalizationRegistry) return;
          let lastReasonId = 0;
          const idToReason = new Map();
          let cancelChecking;
          const removeReasonId = (reasonId) => {
              mapDelete(idToReason, reasonId), cancelChecking && 0 === idToReason.size && (cancelChecking(), (cancelChecking = void 0));
            },
            promiseToReasonId = new WeakMap(),
            promiseToReason = new FinalizationRegistry((heldReasonId) => {
              if (mapHas(idToReason, heldReasonId)) {
                const reason = mapGet(idToReason, heldReasonId);
                removeReasonId(heldReasonId), reportReason(reason);
              }
            });
          return {
            rejectionHandledHandler: (pr) => {
              const reasonId = weakmapGet(promiseToReasonId, pr);
              removeReasonId(reasonId);
            },
            unhandledRejectionHandler: (reason, pr) => {
              lastReasonId += 1;
              const reasonId = lastReasonId;
              mapSet(idToReason, reasonId, reason),
                weakmapSet(promiseToReasonId, pr, reasonId),
                finalizationRegistryRegister(promiseToReason, pr, reasonId, pr);
            },
            processTerminationHandler: () => {
              for (const [reasonId, reason] of mapEntries(idToReason)) removeReasonId(reasonId), reportReason(reason);
            }
          };
        });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let TypeError, globalThis, defaultHandler, makeCausalConsole, makeRejectionHandlers;
        $h‍_imports([
          [
            "../commons.js",
            [
              ["TypeError", [($h‍_a) => (TypeError = $h‍_a)]],
              ["globalThis", [($h‍_a) => (globalThis = $h‍_a)]]
            ]
          ],
          ["./assert.js", [["loggedErrorHandler", [($h‍_a) => (defaultHandler = $h‍_a)]]]],
          ["./console.js", [["makeCausalConsole", [($h‍_a) => (makeCausalConsole = $h‍_a)]]]],
          ["./unhandled-rejection.js", [["makeRejectionHandlers", [($h‍_a) => (makeRejectionHandlers = $h‍_a)]]]],
          ["./types.js", []],
          ["./internal-types.js", []]
        ]);
        const originalConsole = console;
        $h‍_once.tameConsole(
          (consoleTaming = "safe", errorTrapping = "platform", unhandledRejectionTrapping = "report", optGetStackString = undefined) => {
            if ("safe" !== consoleTaming && "unsafe" !== consoleTaming) throw TypeError(`unrecognized consoleTaming ${consoleTaming}`);
            let loggedErrorHandler;
            loggedErrorHandler = void 0 === optGetStackString ? defaultHandler : { ...defaultHandler, getStackString: optGetStackString };
            const ourConsole = "unsafe" === consoleTaming ? originalConsole : makeCausalConsole(originalConsole, loggedErrorHandler);
            if (
              ("none" !== errorTrapping &&
                void 0 !== globalThis.process &&
                globalThis.process.on("uncaughtException", (error) => {
                  ourConsole.error(error),
                    "platform" === errorTrapping || "exit" === errorTrapping
                      ? globalThis.process.exit(globalThis.process.exitCode || -1)
                      : "abort" === errorTrapping && globalThis.process.abort();
                }),
              "none" !== unhandledRejectionTrapping && void 0 !== globalThis.process)
            ) {
              const h = makeRejectionHandlers((reason) => {
                ourConsole.error("SES_UNHANDLED_REJECTION:", reason);
              });
              h &&
                (globalThis.process.on("unhandledRejection", h.unhandledRejectionHandler),
                globalThis.process.on("rejectionHandled", h.rejectionHandledHandler),
                globalThis.process.on("exit", h.processTerminationHandler));
            }
            if (
              ("none" !== errorTrapping &&
                void 0 !== globalThis.window &&
                void 0 !== globalThis.window.addEventListener &&
                globalThis.window.addEventListener("error", (event) => {
                  event.preventDefault(),
                    ourConsole.error(event.error),
                    ("exit" !== errorTrapping && "abort" !== errorTrapping) || (globalThis.window.location.href = "about:blank");
                }),
              "none" !== unhandledRejectionTrapping && void 0 !== globalThis.window && void 0 !== globalThis.window.addEventListener)
            ) {
              const h = makeRejectionHandlers((reason) => {
                ourConsole.error("SES_UNHANDLED_REJECTION:", reason);
              });
              h &&
                (globalThis.window.addEventListener("unhandledrejection", (event) => {
                  event.preventDefault(), h.unhandledRejectionHandler(event.reason, event.promise);
                }),
                globalThis.window.addEventListener("rejectionhandled", (event) => {
                  event.preventDefault(), h.rejectionHandledHandler(event.promise);
                }),
                globalThis.window.addEventListener("beforeunload", (_event) => {
                  h.processTerminationHandler();
                }));
            }
            return { console: ourConsole };
          }
        );
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let WeakMap,
          WeakSet,
          apply,
          arrayFilter,
          arrayJoin,
          arrayMap,
          arraySlice,
          create,
          defineProperties,
          fromEntries,
          reflectSet,
          regexpExec,
          regexpTest,
          weakmapGet,
          weakmapSet,
          weaksetAdd,
          weaksetHas;
        $h‍_imports([
          [
            "../commons.js",
            [
              ["WeakMap", [($h‍_a) => (WeakMap = $h‍_a)]],
              ["WeakSet", [($h‍_a) => (WeakSet = $h‍_a)]],
              ["apply", [($h‍_a) => (apply = $h‍_a)]],
              ["arrayFilter", [($h‍_a) => (arrayFilter = $h‍_a)]],
              ["arrayJoin", [($h‍_a) => (arrayJoin = $h‍_a)]],
              ["arrayMap", [($h‍_a) => (arrayMap = $h‍_a)]],
              ["arraySlice", [($h‍_a) => (arraySlice = $h‍_a)]],
              ["create", [($h‍_a) => (create = $h‍_a)]],
              ["defineProperties", [($h‍_a) => (defineProperties = $h‍_a)]],
              ["fromEntries", [($h‍_a) => (fromEntries = $h‍_a)]],
              ["reflectSet", [($h‍_a) => (reflectSet = $h‍_a)]],
              ["regexpExec", [($h‍_a) => (regexpExec = $h‍_a)]],
              ["regexpTest", [($h‍_a) => (regexpTest = $h‍_a)]],
              ["weakmapGet", [($h‍_a) => (weakmapGet = $h‍_a)]],
              ["weakmapSet", [($h‍_a) => (weakmapSet = $h‍_a)]],
              ["weaksetAdd", [($h‍_a) => (weaksetAdd = $h‍_a)]],
              ["weaksetHas", [($h‍_a) => (weaksetHas = $h‍_a)]]
            ]
          ]
        ]);
        const safeV8CallSiteMethodNames = [
            "getTypeName",
            "getFunctionName",
            "getMethodName",
            "getFileName",
            "getLineNumber",
            "getColumnNumber",
            "getEvalOrigin",
            "isToplevel",
            "isEval",
            "isNative",
            "isConstructor",
            "isAsync",
            "getPosition",
            "getScriptNameOrSourceURL",
            "toString"
          ],
          safeV8CallSiteFacet = (callSite) => {
            const o = fromEntries(
              arrayMap(safeV8CallSiteMethodNames, (name) => {
                const method = callSite[name];
                return [name, () => apply(method, callSite, [])];
              })
            );
            return create(o, {});
          },
          FILENAME_CENSORS = [
            /\/node_modules\//,
            /^(?:node:)?internal\//,
            /\/packages\/ses\/src\/error\/assert.js$/,
            /\/packages\/eventual-send\/src\//
          ],
          filterFileName = (fileName) => {
            if (!fileName) return !0;
            for (const filter of FILENAME_CENSORS) if (regexpTest(filter, fileName)) return !1;
            return !0;
          };
        $h‍_once.filterFileName(filterFileName);
        const CALLSITE_PATTERNS = [/^((?:.*[( ])?)[:/\w_-]*\/\.\.\.\/(.+)$/, /^((?:.*[( ])?)[:/\w_-]*\/(packages\/.+)$/],
          shortenCallSiteString = (callSiteString) => {
            for (const filter of CALLSITE_PATTERNS) {
              const match = regexpExec(filter, callSiteString);
              if (match) return arrayJoin(arraySlice(match, 1), "");
            }
            return callSiteString;
          };
        $h‍_once.shortenCallSiteString(shortenCallSiteString);
        $h‍_once.tameV8ErrorConstructor((OriginalError, InitialError, errorTaming, stackFiltering) => {
          const originalCaptureStackTrace = OriginalError.captureStackTrace,
            callSiteFilter = (callSite) => "verbose" === stackFiltering || filterFileName(callSite.getFileName()),
            callSiteStringifier = (callSite) => {
              let callSiteString = `${callSite}`;
              return "concise" === stackFiltering && (callSiteString = shortenCallSiteString(callSiteString)), `\n  at ${callSiteString}`;
            },
            stackStringFromSST = (_error, sst) => arrayJoin(arrayMap(arrayFilter(sst, callSiteFilter), callSiteStringifier), ""),
            stackInfos = new WeakMap(),
            tamedMethods = {
              captureStackTrace(error, optFn = tamedMethods.captureStackTrace) {
                "function" != typeof originalCaptureStackTrace
                  ? reflectSet(error, "stack", "")
                  : apply(originalCaptureStackTrace, OriginalError, [error, optFn]);
              },
              getStackString(error) {
                let stackInfo = weakmapGet(stackInfos, error);
                if (
                  (void 0 === stackInfo &&
                    (error.stack,
                    (stackInfo = weakmapGet(stackInfos, error)),
                    stackInfo || ((stackInfo = { stackString: "" }), weakmapSet(stackInfos, error, stackInfo))),
                  void 0 !== stackInfo.stackString)
                )
                  return stackInfo.stackString;
                const stackString = stackStringFromSST(0, stackInfo.callSites);
                return weakmapSet(stackInfos, error, { stackString: stackString }), stackString;
              },
              prepareStackTrace(error, sst) {
                if ("unsafe" === errorTaming) {
                  const stackString = stackStringFromSST(0, sst);
                  return weakmapSet(stackInfos, error, { stackString: stackString }), `${error}${stackString}`;
                }
                return weakmapSet(stackInfos, error, { callSites: sst }), "";
              }
            },
            defaultPrepareFn = tamedMethods.prepareStackTrace;
          OriginalError.prepareStackTrace = defaultPrepareFn;
          const systemPrepareFnSet = new WeakSet([defaultPrepareFn]),
            systemPrepareFnFor = (inputPrepareFn) => {
              if (weaksetHas(systemPrepareFnSet, inputPrepareFn)) return inputPrepareFn;
              const systemMethods = {
                prepareStackTrace: (error, sst) => (
                  weakmapSet(stackInfos, error, { callSites: sst }),
                  inputPrepareFn(error, ((sst) => arrayMap(sst, safeV8CallSiteFacet))(sst))
                )
              };
              return weaksetAdd(systemPrepareFnSet, systemMethods.prepareStackTrace), systemMethods.prepareStackTrace;
            };
          return (
            defineProperties(InitialError, {
              captureStackTrace: { value: tamedMethods.captureStackTrace, writable: !0, enumerable: !1, configurable: !0 },
              prepareStackTrace: {
                get: () => OriginalError.prepareStackTrace,
                set(inputPrepareStackTraceFn) {
                  if ("function" == typeof inputPrepareStackTraceFn) {
                    const systemPrepareFn = systemPrepareFnFor(inputPrepareStackTraceFn);
                    OriginalError.prepareStackTrace = systemPrepareFn;
                  } else OriginalError.prepareStackTrace = defaultPrepareFn;
                },
                enumerable: !1,
                configurable: !0
              }
            }),
            tamedMethods.getStackString
          );
        });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let FERAL_ERROR,
          TypeError,
          apply,
          construct,
          defineProperties,
          setPrototypeOf,
          getOwnPropertyDescriptor,
          defineProperty,
          NativeErrors,
          tameV8ErrorConstructor;
        $h‍_imports([
          [
            "../commons.js",
            [
              ["FERAL_ERROR", [($h‍_a) => (FERAL_ERROR = $h‍_a)]],
              ["TypeError", [($h‍_a) => (TypeError = $h‍_a)]],
              ["apply", [($h‍_a) => (apply = $h‍_a)]],
              ["construct", [($h‍_a) => (construct = $h‍_a)]],
              ["defineProperties", [($h‍_a) => (defineProperties = $h‍_a)]],
              ["setPrototypeOf", [($h‍_a) => (setPrototypeOf = $h‍_a)]],
              ["getOwnPropertyDescriptor", [($h‍_a) => (getOwnPropertyDescriptor = $h‍_a)]],
              ["defineProperty", [($h‍_a) => (defineProperty = $h‍_a)]]
            ]
          ],
          ["../permits.js", [["NativeErrors", [($h‍_a) => (NativeErrors = $h‍_a)]]]],
          ["./tame-v8-error-constructor.js", [["tameV8ErrorConstructor", [($h‍_a) => (tameV8ErrorConstructor = $h‍_a)]]]]
        ]);
        const stackDesc = getOwnPropertyDescriptor(FERAL_ERROR.prototype, "stack"),
          stackGetter = stackDesc && stackDesc.get,
          tamedMethods = {
            getStackString: (error) =>
              "function" == typeof stackGetter ? apply(stackGetter, error, []) : "stack" in error ? `${error.stack}` : ""
          };
        $h‍_once.default(function (errorTaming = "safe", stackFiltering = "concise") {
          if ("safe" !== errorTaming && "unsafe" !== errorTaming) throw TypeError(`unrecognized errorTaming ${errorTaming}`);
          if ("concise" !== stackFiltering && "verbose" !== stackFiltering)
            throw TypeError(`unrecognized stackFiltering ${stackFiltering}`);
          const ErrorPrototype = FERAL_ERROR.prototype,
            platform = "function" == typeof FERAL_ERROR.captureStackTrace ? "v8" : "unknown",
            { captureStackTrace: originalCaptureStackTrace } = FERAL_ERROR,
            makeErrorConstructor = (_ = {}) => {
              const ResultError = function (...rest) {
                let error;
                return (
                  (error = void 0 === new.target ? apply(FERAL_ERROR, this, rest) : construct(FERAL_ERROR, rest, new.target)),
                  "v8" === platform && apply(originalCaptureStackTrace, FERAL_ERROR, [error, ResultError]),
                  error
                );
              };
              return (
                defineProperties(ResultError, {
                  length: { value: 1 },
                  prototype: { value: ErrorPrototype, writable: !1, enumerable: !1, configurable: !1 }
                }),
                ResultError
              );
            },
            InitialError = makeErrorConstructor({ powers: "original" }),
            SharedError = makeErrorConstructor({ powers: "none" });
          defineProperties(ErrorPrototype, { constructor: { value: SharedError } });
          for (const NativeError of NativeErrors) setPrototypeOf(NativeError, SharedError);
          defineProperties(InitialError, {
            stackTraceLimit: {
              get() {
                if ("number" == typeof FERAL_ERROR.stackTraceLimit) return FERAL_ERROR.stackTraceLimit;
              },
              set(newLimit) {
                "number" == typeof newLimit && ("number" != typeof FERAL_ERROR.stackTraceLimit || (FERAL_ERROR.stackTraceLimit = newLimit));
              },
              enumerable: !1,
              configurable: !0
            }
          }),
            defineProperties(SharedError, { stackTraceLimit: { get() {}, set(_newLimit) {}, enumerable: !1, configurable: !0 } }),
            "v8" === platform &&
              defineProperties(SharedError, {
                prepareStackTrace: { get: () => () => "", set(_prepareFn) {}, enumerable: !1, configurable: !0 },
                captureStackTrace: {
                  value: (errorish, _constructorOpt) => {
                    defineProperty(errorish, "stack", { value: "" });
                  },
                  writable: !1,
                  enumerable: !1,
                  configurable: !0
                }
              });
          let initialGetStackString = tamedMethods.getStackString;
          return (
            "v8" === platform
              ? (initialGetStackString = tameV8ErrorConstructor(FERAL_ERROR, InitialError, errorTaming, stackFiltering))
              : defineProperties(
                  ErrorPrototype,
                  "unsafe" === errorTaming
                    ? {
                        stack: {
                          get() {
                            return initialGetStackString(this);
                          },
                          set(newValue) {
                            defineProperties(this, { stack: { value: newValue, writable: !0, enumerable: !0, configurable: !0 } });
                          }
                        }
                      }
                    : {
                        stack: {
                          get() {
                            return `${this}`;
                          },
                          set(newValue) {
                            defineProperties(this, { stack: { value: newValue, writable: !0, enumerable: !0, configurable: !0 } });
                          }
                        }
                      }
                ),
            { "%InitialGetStackString%": initialGetStackString, "%InitialError%": InitialError, "%SharedError%": SharedError }
          );
        });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let ReferenceError,
          TypeError,
          Map,
          Set,
          arrayJoin,
          arrayMap,
          arrayPush,
          create,
          freeze,
          mapGet,
          mapHas,
          mapSet,
          setAdd,
          promiseCatch,
          promiseThen,
          values,
          weakmapGet,
          assert;
        $h‍_imports([
          [
            "./commons.js",
            [
              ["ReferenceError", [($h‍_a) => (ReferenceError = $h‍_a)]],
              ["TypeError", [($h‍_a) => (TypeError = $h‍_a)]],
              ["Map", [($h‍_a) => (Map = $h‍_a)]],
              ["Set", [($h‍_a) => (Set = $h‍_a)]],
              ["arrayJoin", [($h‍_a) => (arrayJoin = $h‍_a)]],
              ["arrayMap", [($h‍_a) => (arrayMap = $h‍_a)]],
              ["arrayPush", [($h‍_a) => (arrayPush = $h‍_a)]],
              ["create", [($h‍_a) => (create = $h‍_a)]],
              ["freeze", [($h‍_a) => (freeze = $h‍_a)]],
              ["mapGet", [($h‍_a) => (mapGet = $h‍_a)]],
              ["mapHas", [($h‍_a) => (mapHas = $h‍_a)]],
              ["mapSet", [($h‍_a) => (mapSet = $h‍_a)]],
              ["setAdd", [($h‍_a) => (setAdd = $h‍_a)]],
              ["promiseCatch", [($h‍_a) => (promiseCatch = $h‍_a)]],
              ["promiseThen", [($h‍_a) => (promiseThen = $h‍_a)]],
              ["values", [($h‍_a) => (values = $h‍_a)]],
              ["weakmapGet", [($h‍_a) => (weakmapGet = $h‍_a)]]
            ]
          ],
          ["./error/assert.js", [["assert", [($h‍_a) => (assert = $h‍_a)]]]]
        ]);
        const { Fail: Fail, details: d, quote: q } = assert,
          noop = () => {};
        $h‍_once.makeAlias((compartment, specifier) => freeze({ compartment: compartment, specifier: specifier }));
        const loadRecord = (
            compartmentPrivateFields,
            moduleAliases,
            compartment,
            moduleSpecifier,
            staticModuleRecord,
            pendingJobs,
            moduleLoads,
            errors,
            importMeta
          ) => {
            const { resolveHook: resolveHook, moduleRecords: moduleRecords } = weakmapGet(compartmentPrivateFields, compartment),
              resolvedImports = ((imports, resolveHook, fullReferrerSpecifier) => {
                const resolvedImports = create(null);
                for (const importSpecifier of imports) {
                  const fullSpecifier = resolveHook(importSpecifier, fullReferrerSpecifier);
                  resolvedImports[importSpecifier] = fullSpecifier;
                }
                return freeze(resolvedImports);
              })(staticModuleRecord.imports, resolveHook, moduleSpecifier),
              moduleRecord = freeze({
                compartment: compartment,
                staticModuleRecord: staticModuleRecord,
                moduleSpecifier: moduleSpecifier,
                resolvedImports: resolvedImports,
                importMeta: importMeta
              });
            for (const fullSpecifier of values(resolvedImports)) {
              const dependencyLoaded = memoizedLoadWithErrorAnnotation(
                compartmentPrivateFields,
                moduleAliases,
                compartment,
                fullSpecifier,
                pendingJobs,
                moduleLoads,
                errors
              );
              setAdd(
                pendingJobs,
                promiseThen(dependencyLoaded, noop, (error) => {
                  arrayPush(errors, error);
                })
              );
            }
            return mapSet(moduleRecords, moduleSpecifier, moduleRecord), moduleRecord;
          },
          memoizedLoadWithErrorAnnotation = async (
            compartmentPrivateFields,
            moduleAliases,
            compartment,
            moduleSpecifier,
            pendingJobs,
            moduleLoads,
            errors
          ) => {
            const { name: compartmentName } = weakmapGet(compartmentPrivateFields, compartment);
            let compartmentLoading = mapGet(moduleLoads, compartment);
            void 0 === compartmentLoading && ((compartmentLoading = new Map()), mapSet(moduleLoads, compartment, compartmentLoading));
            let moduleLoading = mapGet(compartmentLoading, moduleSpecifier);
            return (
              void 0 !== moduleLoading ||
                ((moduleLoading = promiseCatch(
                  (async (compartmentPrivateFields, moduleAliases, compartment, moduleSpecifier, pendingJobs, moduleLoads, errors) => {
                    const {
                      importHook: importHook,
                      moduleMap: moduleMap,
                      moduleMapHook: moduleMapHook,
                      moduleRecords: moduleRecords
                    } = weakmapGet(compartmentPrivateFields, compartment);
                    let aliasNamespace = moduleMap[moduleSpecifier];
                    if (
                      (void 0 === aliasNamespace && void 0 !== moduleMapHook && (aliasNamespace = moduleMapHook(moduleSpecifier)),
                      "string" == typeof aliasNamespace)
                    )
                      assert.fail(
                        d`Cannot map module ${q(moduleSpecifier)} to ${q(aliasNamespace)} in parent compartment, not yet implemented`,
                        TypeError
                      );
                    else if (void 0 !== aliasNamespace) {
                      const alias = weakmapGet(moduleAliases, aliasNamespace);
                      void 0 === alias &&
                        assert.fail(
                          d`Cannot map module ${q(
                            moduleSpecifier
                          )} because the value is not a module exports namespace, or is from another realm`,
                          ReferenceError
                        );
                      const aliasRecord = await memoizedLoadWithErrorAnnotation(
                        compartmentPrivateFields,
                        moduleAliases,
                        alias.compartment,
                        alias.specifier,
                        pendingJobs,
                        moduleLoads,
                        errors
                      );
                      return mapSet(moduleRecords, moduleSpecifier, aliasRecord), aliasRecord;
                    }
                    if (mapHas(moduleRecords, moduleSpecifier)) return mapGet(moduleRecords, moduleSpecifier);
                    const staticModuleRecord = await importHook(moduleSpecifier);
                    if (
                      ((null !== staticModuleRecord && "object" == typeof staticModuleRecord) ||
                        Fail`importHook must return a promise for an object, for module ${q(moduleSpecifier)} in compartment ${q(
                          compartment.name
                        )}`,
                      void 0 !== staticModuleRecord.specifier)
                    ) {
                      if (void 0 !== staticModuleRecord.record) {
                        if (void 0 !== staticModuleRecord.compartment)
                          throw TypeError("Cannot redirect to an explicit record with a specified compartment");
                        const {
                            compartment: aliasCompartment = compartment,
                            specifier: aliasSpecifier = moduleSpecifier,
                            record: aliasModuleRecord,
                            importMeta: importMeta
                          } = staticModuleRecord,
                          aliasRecord = loadRecord(
                            compartmentPrivateFields,
                            moduleAliases,
                            aliasCompartment,
                            aliasSpecifier,
                            aliasModuleRecord,
                            pendingJobs,
                            moduleLoads,
                            errors,
                            importMeta
                          );
                        return mapSet(moduleRecords, moduleSpecifier, aliasRecord), aliasRecord;
                      }
                      if (void 0 !== staticModuleRecord.compartment) {
                        if (void 0 !== staticModuleRecord.importMeta)
                          throw TypeError("Cannot redirect to an implicit record with a specified importMeta");
                        const aliasRecord = await memoizedLoadWithErrorAnnotation(
                          compartmentPrivateFields,
                          moduleAliases,
                          staticModuleRecord.compartment,
                          staticModuleRecord.specifier,
                          pendingJobs,
                          moduleLoads,
                          errors
                        );
                        return mapSet(moduleRecords, moduleSpecifier, aliasRecord), aliasRecord;
                      }
                      throw TypeError("Unnexpected RedirectStaticModuleInterface record shape");
                    }
                    return loadRecord(
                      compartmentPrivateFields,
                      moduleAliases,
                      compartment,
                      moduleSpecifier,
                      staticModuleRecord,
                      pendingJobs,
                      moduleLoads,
                      errors
                    );
                  })(compartmentPrivateFields, moduleAliases, compartment, moduleSpecifier, pendingJobs, moduleLoads, errors),
                  (error) => {
                    throw (
                      (assert.note(error, d`${error.message}, loading ${q(moduleSpecifier)} in compartment ${q(compartmentName)}`), error)
                    );
                  }
                )),
                mapSet(compartmentLoading, moduleSpecifier, moduleLoading)),
              moduleLoading
            );
          };
        $h‍_once.load(async (compartmentPrivateFields, moduleAliases, compartment, moduleSpecifier) => {
          const { name: compartmentName } = weakmapGet(compartmentPrivateFields, compartment),
            pendingJobs = new Set(),
            moduleLoads = new Map(),
            errors = [],
            dependencyLoaded = memoizedLoadWithErrorAnnotation(
              compartmentPrivateFields,
              moduleAliases,
              compartment,
              moduleSpecifier,
              pendingJobs,
              moduleLoads,
              errors
            );
          setAdd(
            pendingJobs,
            promiseThen(dependencyLoaded, noop, (error) => {
              arrayPush(errors, error);
            })
          );
          for (const job of pendingJobs) await job;
          if (errors.length > 0)
            throw TypeError(
              `Failed to load module ${q(moduleSpecifier)} in package ${q(compartmentName)} (${
                errors.length
              } underlying failures: ${arrayJoin(
                arrayMap(errors, (error) => error.message),
                ", "
              )}`
            );
        });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let makeAlias,
          Proxy,
          TypeError,
          create,
          freeze,
          mapGet,
          mapHas,
          mapSet,
          ownKeys,
          reflectGet,
          reflectGetOwnPropertyDescriptor,
          reflectHas,
          reflectIsExtensible,
          reflectPreventExtensions,
          weakmapSet,
          assert;
        $h‍_imports([
          ["./module-load.js", [["makeAlias", [($h‍_a) => (makeAlias = $h‍_a)]]]],
          [
            "./commons.js",
            [
              ["Proxy", [($h‍_a) => (Proxy = $h‍_a)]],
              ["TypeError", [($h‍_a) => (TypeError = $h‍_a)]],
              ["create", [($h‍_a) => (create = $h‍_a)]],
              ["freeze", [($h‍_a) => (freeze = $h‍_a)]],
              ["mapGet", [($h‍_a) => (mapGet = $h‍_a)]],
              ["mapHas", [($h‍_a) => (mapHas = $h‍_a)]],
              ["mapSet", [($h‍_a) => (mapSet = $h‍_a)]],
              ["ownKeys", [($h‍_a) => (ownKeys = $h‍_a)]],
              ["reflectGet", [($h‍_a) => (reflectGet = $h‍_a)]],
              ["reflectGetOwnPropertyDescriptor", [($h‍_a) => (reflectGetOwnPropertyDescriptor = $h‍_a)]],
              ["reflectHas", [($h‍_a) => (reflectHas = $h‍_a)]],
              ["reflectIsExtensible", [($h‍_a) => (reflectIsExtensible = $h‍_a)]],
              ["reflectPreventExtensions", [($h‍_a) => (reflectPreventExtensions = $h‍_a)]],
              ["weakmapSet", [($h‍_a) => (weakmapSet = $h‍_a)]]
            ]
          ],
          ["./error/assert.js", [["assert", [($h‍_a) => (assert = $h‍_a)]]]]
        ]);
        const { quote: q } = assert,
          deferExports = () => {
            let active = !1;
            const proxiedExports = create(null);
            return freeze({
              activate() {
                active = !0;
              },
              proxiedExports: proxiedExports,
              exportsProxy: new Proxy(proxiedExports, {
                get(_target, name, receiver) {
                  if (!active)
                    throw TypeError(`Cannot get property ${q(name)} of module exports namespace, the module has not yet begun to execute`);
                  return reflectGet(proxiedExports, name, receiver);
                },
                set(_target, name, _value) {
                  throw TypeError(`Cannot set property ${q(name)} of module exports namespace`);
                },
                has(_target, name) {
                  if (!active) throw TypeError(`Cannot check property ${q(name)}, the module has not yet begun to execute`);
                  return reflectHas(proxiedExports, name);
                },
                deleteProperty(_target, name) {
                  throw TypeError(`Cannot delete property ${q(name)}s of module exports namespace`);
                },
                ownKeys(_target) {
                  if (!active) throw TypeError("Cannot enumerate keys, the module has not yet begun to execute");
                  return ownKeys(proxiedExports);
                },
                getOwnPropertyDescriptor(_target, name) {
                  if (!active) throw TypeError(`Cannot get own property descriptor ${q(name)}, the module has not yet begun to execute`);
                  return reflectGetOwnPropertyDescriptor(proxiedExports, name);
                },
                preventExtensions(_target) {
                  if (!active)
                    throw TypeError("Cannot prevent extensions of module exports namespace, the module has not yet begun to execute");
                  return reflectPreventExtensions(proxiedExports);
                },
                isExtensible() {
                  if (!active)
                    throw TypeError("Cannot check extensibility of module exports namespace, the module has not yet begun to execute");
                  return reflectIsExtensible(proxiedExports);
                },
                getPrototypeOf: (_target) => null,
                setPrototypeOf(_target, _proto) {
                  throw TypeError("Cannot set prototype of module exports namespace");
                },
                defineProperty(_target, name, _descriptor) {
                  throw TypeError(`Cannot define property ${q(name)} of module exports namespace`);
                },
                apply(_target, _thisArg, _args) {
                  throw TypeError("Cannot call module exports namespace, it is not a function");
                },
                construct(_target, _args) {
                  throw TypeError("Cannot construct module exports namespace, it is not a constructor");
                }
              })
            });
          };
        $h‍_once.deferExports(deferExports);
        $h‍_once.getDeferredExports((compartment, compartmentPrivateFields, moduleAliases, specifier) => {
          const { deferredExports: deferredExports } = compartmentPrivateFields;
          if (!mapHas(deferredExports, specifier)) {
            const deferred = deferExports();
            weakmapSet(moduleAliases, deferred.exportsProxy, makeAlias(compartment, specifier)),
              mapSet(deferredExports, specifier, deferred);
          }
          return mapGet(deferredExports, specifier);
        });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let TypeError,
          arrayPush,
          create,
          getOwnPropertyDescriptors,
          evadeHtmlCommentTest,
          evadeImportExpressionTest,
          rejectSomeDirectEvalExpressions,
          makeSafeEvaluator;
        $h‍_imports([
          [
            "./commons.js",
            [
              ["TypeError", [($h‍_a) => (TypeError = $h‍_a)]],
              ["arrayPush", [($h‍_a) => (arrayPush = $h‍_a)]],
              ["create", [($h‍_a) => (create = $h‍_a)]],
              ["getOwnPropertyDescriptors", [($h‍_a) => (getOwnPropertyDescriptors = $h‍_a)]]
            ]
          ],
          [
            "./transforms.js",
            [
              ["evadeHtmlCommentTest", [($h‍_a) => (evadeHtmlCommentTest = $h‍_a)]],
              ["evadeImportExpressionTest", [($h‍_a) => (evadeImportExpressionTest = $h‍_a)]],
              ["rejectSomeDirectEvalExpressions", [($h‍_a) => (rejectSomeDirectEvalExpressions = $h‍_a)]]
            ]
          ],
          ["./make-safe-evaluator.js", [["makeSafeEvaluator", [($h‍_a) => (makeSafeEvaluator = $h‍_a)]]]]
        ]);
        const provideCompartmentEvaluator = (compartmentFields, options) => {
          const { sloppyGlobalsMode: sloppyGlobalsMode = !1, __moduleShimLexicals__: __moduleShimLexicals__ } = options;
          let safeEvaluate;
          if (void 0 !== __moduleShimLexicals__ || sloppyGlobalsMode) {
            let { globalTransforms: globalTransforms } = compartmentFields;
            const { globalObject: globalObject } = compartmentFields;
            let moduleLexicals;
            void 0 !== __moduleShimLexicals__ &&
              ((globalTransforms = void 0), (moduleLexicals = create(null, getOwnPropertyDescriptors(__moduleShimLexicals__)))),
              ({ safeEvaluate: safeEvaluate } = makeSafeEvaluator({
                globalObject: globalObject,
                moduleLexicals: moduleLexicals,
                globalTransforms: globalTransforms,
                sloppyGlobalsMode: sloppyGlobalsMode
              }));
          } else ({ safeEvaluate: safeEvaluate } = compartmentFields);
          return { safeEvaluate: safeEvaluate };
        };
        $h‍_once.provideCompartmentEvaluator(provideCompartmentEvaluator);
        $h‍_once.compartmentEvaluate((compartmentFields, source, options) => {
          if ("string" != typeof source) throw TypeError("first argument of evaluate() must be a string");
          const {
              transforms: transforms = [],
              __evadeHtmlCommentTest__: __evadeHtmlCommentTest__ = !1,
              __evadeImportExpressionTest__: __evadeImportExpressionTest__ = !1,
              __rejectSomeDirectEvalExpressions__: __rejectSomeDirectEvalExpressions__ = !0
            } = options,
            localTransforms = [...transforms];
          !0 === __evadeHtmlCommentTest__ && arrayPush(localTransforms, evadeHtmlCommentTest),
            !0 === __evadeImportExpressionTest__ && arrayPush(localTransforms, evadeImportExpressionTest),
            !0 === __rejectSomeDirectEvalExpressions__ && arrayPush(localTransforms, rejectSomeDirectEvalExpressions);
          const { safeEvaluate: safeEvaluate } = provideCompartmentEvaluator(compartmentFields, options);
          return safeEvaluate(source, { localTransforms: localTransforms });
        });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let assert,
          getDeferredExports,
          ReferenceError,
          SyntaxError,
          TypeError,
          arrayForEach,
          arrayIncludes,
          arrayPush,
          arraySome,
          arraySort,
          create,
          defineProperty,
          entries,
          freeze,
          isArray,
          keys,
          mapGet,
          weakmapGet,
          reflectHas,
          assign,
          compartmentEvaluate;
        $h‍_imports([
          ["./error/assert.js", [["assert", [($h‍_a) => (assert = $h‍_a)]]]],
          ["./module-proxy.js", [["getDeferredExports", [($h‍_a) => (getDeferredExports = $h‍_a)]]]],
          [
            "./commons.js",
            [
              ["ReferenceError", [($h‍_a) => (ReferenceError = $h‍_a)]],
              ["SyntaxError", [($h‍_a) => (SyntaxError = $h‍_a)]],
              ["TypeError", [($h‍_a) => (TypeError = $h‍_a)]],
              ["arrayForEach", [($h‍_a) => (arrayForEach = $h‍_a)]],
              ["arrayIncludes", [($h‍_a) => (arrayIncludes = $h‍_a)]],
              ["arrayPush", [($h‍_a) => (arrayPush = $h‍_a)]],
              ["arraySome", [($h‍_a) => (arraySome = $h‍_a)]],
              ["arraySort", [($h‍_a) => (arraySort = $h‍_a)]],
              ["create", [($h‍_a) => (create = $h‍_a)]],
              ["defineProperty", [($h‍_a) => (defineProperty = $h‍_a)]],
              ["entries", [($h‍_a) => (entries = $h‍_a)]],
              ["freeze", [($h‍_a) => (freeze = $h‍_a)]],
              ["isArray", [($h‍_a) => (isArray = $h‍_a)]],
              ["keys", [($h‍_a) => (keys = $h‍_a)]],
              ["mapGet", [($h‍_a) => (mapGet = $h‍_a)]],
              ["weakmapGet", [($h‍_a) => (weakmapGet = $h‍_a)]],
              ["reflectHas", [($h‍_a) => (reflectHas = $h‍_a)]],
              ["assign", [($h‍_a) => (assign = $h‍_a)]]
            ]
          ],
          ["./compartment-evaluate.js", [["compartmentEvaluate", [($h‍_a) => (compartmentEvaluate = $h‍_a)]]]]
        ]);
        const { quote: q } = assert;
        $h‍_once.makeThirdPartyModuleInstance(
          (compartmentPrivateFields, staticModuleRecord, compartment, moduleAliases, moduleSpecifier, resolvedImports) => {
            const {
                exportsProxy: exportsProxy,
                proxiedExports: proxiedExports,
                activate: activate
              } = getDeferredExports(compartment, weakmapGet(compartmentPrivateFields, compartment), moduleAliases, moduleSpecifier),
              notifiers = create(null);
            if (staticModuleRecord.exports) {
              if (!isArray(staticModuleRecord.exports) || arraySome(staticModuleRecord.exports, (name) => "string" != typeof name))
                throw TypeError(
                  `SES third-party static module record "exports" property must be an array of strings for module ${moduleSpecifier}`
                );
              arrayForEach(staticModuleRecord.exports, (name) => {
                let value = proxiedExports[name];
                const updaters = [];
                defineProperty(proxiedExports, name, {
                  get: () => value,
                  set: (newValue) => {
                    value = newValue;
                    for (const updater of updaters) updater(newValue);
                  },
                  enumerable: !0,
                  configurable: !1
                }),
                  (notifiers[name] = (update) => {
                    arrayPush(updaters, update), update(value);
                  });
              }),
                (notifiers["*"] = (update) => {
                  update(proxiedExports);
                });
            }
            const localState = { activated: !1 };
            return freeze({
              notifiers: notifiers,
              exportsProxy: exportsProxy,
              execute() {
                if (reflectHas(localState, "errorFromExecute")) throw localState.errorFromExecute;
                if (!localState.activated) {
                  activate(), (localState.activated = !0);
                  try {
                    staticModuleRecord.execute(proxiedExports, compartment, resolvedImports);
                  } catch (err) {
                    throw ((localState.errorFromExecute = err), err);
                  }
                }
              }
            });
          }
        );
        $h‍_once.makeModuleInstance((privateFields, moduleAliases, moduleRecord, importedInstances) => {
          const {
              compartment: compartment,
              moduleSpecifier: moduleSpecifier,
              staticModuleRecord: staticModuleRecord,
              importMeta: moduleRecordMeta
            } = moduleRecord,
            {
              reexports: exportAlls = [],
              __syncModuleProgram__: functorSource,
              __fixedExportMap__: fixedExportMap = {},
              __liveExportMap__: liveExportMap = {},
              __reexportMap__: reexportMap = {},
              __needsImportMeta__: needsImportMeta = !1,
              __syncModuleFunctor__: __syncModuleFunctor__
            } = staticModuleRecord,
            compartmentFields = weakmapGet(privateFields, compartment),
            { __shimTransforms__: __shimTransforms__, importMetaHook: importMetaHook } = compartmentFields,
            {
              exportsProxy: exportsProxy,
              proxiedExports: proxiedExports,
              activate: activate
            } = getDeferredExports(compartment, compartmentFields, moduleAliases, moduleSpecifier),
            exportsProps = create(null),
            moduleLexicals = create(null),
            onceVar = create(null),
            liveVar = create(null),
            importMeta = create(null);
          moduleRecordMeta && assign(importMeta, moduleRecordMeta),
            needsImportMeta && importMetaHook && importMetaHook(moduleSpecifier, importMeta);
          const localGetNotify = create(null),
            notifiers = create(null);
          arrayForEach(entries(fixedExportMap), ([fixedExportName, [localName]]) => {
            let fixedGetNotify = localGetNotify[localName];
            if (!fixedGetNotify) {
              let value,
                tdz = !0,
                optUpdaters = [];
              const get = () => {
                  if (tdz) throw ReferenceError(`binding ${q(localName)} not yet initialized`);
                  return value;
                },
                init = freeze((initValue) => {
                  if (!tdz) throw TypeError(`Internal: binding ${q(localName)} already initialized`);
                  value = initValue;
                  const updaters = optUpdaters;
                  (optUpdaters = null), (tdz = !1);
                  for (const updater of updaters || []) updater(initValue);
                  return initValue;
                });
              (fixedGetNotify = {
                get: get,
                notify: (updater) => {
                  updater !== init && (tdz ? arrayPush(optUpdaters || [], updater) : updater(value));
                }
              }),
                (localGetNotify[localName] = fixedGetNotify),
                (onceVar[localName] = init);
            }
            (exportsProps[fixedExportName] = { get: fixedGetNotify.get, set: void 0, enumerable: !0, configurable: !1 }),
              (notifiers[fixedExportName] = fixedGetNotify.notify);
          }),
            arrayForEach(entries(liveExportMap), ([liveExportName, [localName, setProxyTrap]]) => {
              let liveGetNotify = localGetNotify[localName];
              if (!liveGetNotify) {
                let value,
                  tdz = !0;
                const updaters = [],
                  get = () => {
                    if (tdz) throw ReferenceError(`binding ${q(liveExportName)} not yet initialized`);
                    return value;
                  },
                  update = freeze((newValue) => {
                    (value = newValue), (tdz = !1);
                    for (const updater of updaters) updater(newValue);
                  }),
                  set = (newValue) => {
                    if (tdz) throw ReferenceError(`binding ${q(localName)} not yet initialized`);
                    value = newValue;
                    for (const updater of updaters) updater(newValue);
                  };
                (liveGetNotify = {
                  get: get,
                  notify: (updater) => {
                    updater !== update && (arrayPush(updaters, updater), tdz || updater(value));
                  }
                }),
                  (localGetNotify[localName] = liveGetNotify),
                  setProxyTrap && defineProperty(moduleLexicals, localName, { get: get, set: set, enumerable: !0, configurable: !1 }),
                  (liveVar[localName] = update);
              }
              (exportsProps[liveExportName] = { get: liveGetNotify.get, set: void 0, enumerable: !0, configurable: !1 }),
                (notifiers[liveExportName] = liveGetNotify.notify);
            });
          function imports(updateRecord) {
            const candidateAll = create(null);
            candidateAll.default = !1;
            for (const [specifier, importUpdaters] of updateRecord) {
              const instance = mapGet(importedInstances, specifier);
              instance.execute();
              const { notifiers: importNotifiers } = instance;
              for (const [importName, updaters] of importUpdaters) {
                const importNotify = importNotifiers[importName];
                if (!importNotify)
                  throw SyntaxError(`The requested module '${specifier}' does not provide an export named '${importName}'`);
                for (const updater of updaters) importNotify(updater);
              }
              if (arrayIncludes(exportAlls, specifier))
                for (const [importAndExportName, importNotify] of entries(importNotifiers))
                  void 0 === candidateAll[importAndExportName]
                    ? (candidateAll[importAndExportName] = importNotify)
                    : (candidateAll[importAndExportName] = !1);
              if (reexportMap[specifier])
                for (const [localName, exportedName] of reexportMap[specifier]) candidateAll[exportedName] = importNotifiers[localName];
            }
            for (const [exportName, notify] of entries(candidateAll))
              if (!notifiers[exportName] && !1 !== notify) {
                let value;
                notifiers[exportName] = notify;
                notify((newValue) => (value = newValue)),
                  (exportsProps[exportName] = { get: () => value, set: void 0, enumerable: !0, configurable: !1 });
              }
            arrayForEach(arraySort(keys(exportsProps)), (k) => defineProperty(proxiedExports, k, exportsProps[k])),
              freeze(proxiedExports),
              activate();
          }
          let optFunctor;
          (notifiers["*"] = (update) => {
            update(proxiedExports);
          }),
            (optFunctor =
              void 0 !== __syncModuleFunctor__
                ? __syncModuleFunctor__
                : compartmentEvaluate(compartmentFields, functorSource, {
                    globalObject: compartment.globalThis,
                    transforms: __shimTransforms__,
                    __moduleShimLexicals__: moduleLexicals
                  }));
          let thrownError,
            didThrow = !1;
          return freeze({
            notifiers: notifiers,
            exportsProxy: exportsProxy,
            execute: function () {
              if (optFunctor) {
                const functor = optFunctor;
                optFunctor = null;
                try {
                  functor(freeze({ imports: freeze(imports), onceVar: freeze(onceVar), liveVar: freeze(liveVar), importMeta: importMeta }));
                } catch (e) {
                  (didThrow = !0), (thrownError = e);
                }
              }
              if (didThrow) throw thrownError;
            }
          });
        });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let assert,
          makeModuleInstance,
          makeThirdPartyModuleInstance,
          Map,
          ReferenceError,
          TypeError,
          entries,
          isArray,
          isObject,
          mapGet,
          mapHas,
          mapSet,
          weakmapGet;
        $h‍_imports([
          ["./error/assert.js", [["assert", [($h‍_a) => (assert = $h‍_a)]]]],
          [
            "./module-instance.js",
            [
              ["makeModuleInstance", [($h‍_a) => (makeModuleInstance = $h‍_a)]],
              ["makeThirdPartyModuleInstance", [($h‍_a) => (makeThirdPartyModuleInstance = $h‍_a)]]
            ]
          ],
          [
            "./commons.js",
            [
              ["Map", [($h‍_a) => (Map = $h‍_a)]],
              ["ReferenceError", [($h‍_a) => (ReferenceError = $h‍_a)]],
              ["TypeError", [($h‍_a) => (TypeError = $h‍_a)]],
              ["entries", [($h‍_a) => (entries = $h‍_a)]],
              ["isArray", [($h‍_a) => (isArray = $h‍_a)]],
              ["isObject", [($h‍_a) => (isObject = $h‍_a)]],
              ["mapGet", [($h‍_a) => (mapGet = $h‍_a)]],
              ["mapHas", [($h‍_a) => (mapHas = $h‍_a)]],
              ["mapSet", [($h‍_a) => (mapSet = $h‍_a)]],
              ["weakmapGet", [($h‍_a) => (weakmapGet = $h‍_a)]]
            ]
          ]
        ]);
        const { Fail: Fail, quote: q } = assert,
          link = (compartmentPrivateFields, moduleAliases, compartment, moduleSpecifier) => {
            const { name: compartmentName, moduleRecords: moduleRecords } = weakmapGet(compartmentPrivateFields, compartment),
              moduleRecord = mapGet(moduleRecords, moduleSpecifier);
            if (void 0 === moduleRecord)
              throw ReferenceError(`Missing link to module ${q(moduleSpecifier)} from compartment ${q(compartmentName)}`);
            return instantiate(compartmentPrivateFields, moduleAliases, moduleRecord);
          };
        $h‍_once.link(link);
        const instantiate = (compartmentPrivateFields, moduleAliases, moduleRecord) => {
          const {
              compartment: compartment,
              moduleSpecifier: moduleSpecifier,
              resolvedImports: resolvedImports,
              staticModuleRecord: staticModuleRecord
            } = moduleRecord,
            { instances: instances } = weakmapGet(compartmentPrivateFields, compartment);
          if (mapHas(instances, moduleSpecifier)) return mapGet(instances, moduleSpecifier);
          !(function (staticModuleRecord, moduleSpecifier) {
            isObject(staticModuleRecord) ||
              Fail`Static module records must be of type object, got ${q(staticModuleRecord)}, for module ${q(moduleSpecifier)}`;
            const { imports: imports, exports: exports, reexports: reexports = [] } = staticModuleRecord;
            isArray(imports) ||
              Fail`Property 'imports' of a static module record must be an array, got ${q(imports)}, for module ${q(moduleSpecifier)}`,
              isArray(exports) ||
                Fail`Property 'exports' of a precompiled module record must be an array, got ${q(exports)}, for module ${q(
                  moduleSpecifier
                )}`,
              isArray(reexports) ||
                Fail`Property 'reexports' of a precompiled module record must be an array if present, got ${q(reexports)}, for module ${q(
                  moduleSpecifier
                )}`;
          })(staticModuleRecord, moduleSpecifier);
          const importedInstances = new Map();
          let moduleInstance;
          if (
            (function (staticModuleRecord) {
              return "string" == typeof staticModuleRecord.__syncModuleProgram__;
            })(staticModuleRecord)
          )
            !(function (staticModuleRecord, moduleSpecifier) {
              const { __fixedExportMap__: __fixedExportMap__, __liveExportMap__: __liveExportMap__ } = staticModuleRecord;
              isObject(__fixedExportMap__) ||
                Fail`Property '__fixedExportMap__' of a precompiled module record must be an object, got ${q(
                  __fixedExportMap__
                )}, for module ${q(moduleSpecifier)}`,
                isObject(__liveExportMap__) ||
                  Fail`Property '__liveExportMap__' of a precompiled module record must be an object, got ${q(
                    __liveExportMap__
                  )}, for module ${q(moduleSpecifier)}`;
            })(staticModuleRecord, moduleSpecifier),
              (moduleInstance = makeModuleInstance(compartmentPrivateFields, moduleAliases, moduleRecord, importedInstances));
          else {
            if (
              !(function (staticModuleRecord) {
                return "function" == typeof staticModuleRecord.execute;
              })(staticModuleRecord)
            )
              throw TypeError(`importHook must return a static module record, got ${q(staticModuleRecord)}`);
            !(function (staticModuleRecord, moduleSpecifier) {
              const { exports: exports } = staticModuleRecord;
              isArray(exports) ||
                Fail`Property 'exports' of a third-party static module record must be an array, got ${q(exports)}, for module ${q(
                  moduleSpecifier
                )}`;
            })(staticModuleRecord, moduleSpecifier),
              (moduleInstance = makeThirdPartyModuleInstance(
                compartmentPrivateFields,
                staticModuleRecord,
                compartment,
                moduleAliases,
                moduleSpecifier,
                resolvedImports
              ));
          }
          mapSet(instances, moduleSpecifier, moduleInstance);
          for (const [importSpecifier, resolvedSpecifier] of entries(resolvedImports)) {
            const importedInstance = link(compartmentPrivateFields, moduleAliases, compartment, resolvedSpecifier);
            mapSet(importedInstances, importSpecifier, importedInstance);
          }
          return moduleInstance;
        };
        $h‍_once.instantiate(instantiate);
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let Map,
          ReferenceError,
          TypeError,
          WeakMap,
          assign,
          defineProperties,
          entries,
          promiseThen,
          weakmapGet,
          weakmapSet,
          setGlobalObjectSymbolUnscopables,
          setGlobalObjectConstantProperties,
          setGlobalObjectMutableProperties,
          setGlobalObjectEvaluators,
          sharedGlobalPropertyNames,
          load,
          link,
          getDeferredExports,
          assert,
          compartmentEvaluate,
          makeSafeEvaluator;
        $h‍_imports([
          [
            "./commons.js",
            [
              ["Map", [($h‍_a) => (Map = $h‍_a)]],
              ["ReferenceError", [($h‍_a) => (ReferenceError = $h‍_a)]],
              ["TypeError", [($h‍_a) => (TypeError = $h‍_a)]],
              ["WeakMap", [($h‍_a) => (WeakMap = $h‍_a)]],
              ["assign", [($h‍_a) => (assign = $h‍_a)]],
              ["defineProperties", [($h‍_a) => (defineProperties = $h‍_a)]],
              ["entries", [($h‍_a) => (entries = $h‍_a)]],
              ["promiseThen", [($h‍_a) => (promiseThen = $h‍_a)]],
              ["weakmapGet", [($h‍_a) => (weakmapGet = $h‍_a)]],
              ["weakmapSet", [($h‍_a) => (weakmapSet = $h‍_a)]]
            ]
          ],
          [
            "./global-object.js",
            [
              ["setGlobalObjectSymbolUnscopables", [($h‍_a) => (setGlobalObjectSymbolUnscopables = $h‍_a)]],
              ["setGlobalObjectConstantProperties", [($h‍_a) => (setGlobalObjectConstantProperties = $h‍_a)]],
              ["setGlobalObjectMutableProperties", [($h‍_a) => (setGlobalObjectMutableProperties = $h‍_a)]],
              ["setGlobalObjectEvaluators", [($h‍_a) => (setGlobalObjectEvaluators = $h‍_a)]]
            ]
          ],
          ["./permits.js", [["sharedGlobalPropertyNames", [($h‍_a) => (sharedGlobalPropertyNames = $h‍_a)]]]],
          ["./module-load.js", [["load", [($h‍_a) => (load = $h‍_a)]]]],
          ["./module-link.js", [["link", [($h‍_a) => (link = $h‍_a)]]]],
          ["./module-proxy.js", [["getDeferredExports", [($h‍_a) => (getDeferredExports = $h‍_a)]]]],
          ["./error/assert.js", [["assert", [($h‍_a) => (assert = $h‍_a)]]]],
          ["./compartment-evaluate.js", [["compartmentEvaluate", [($h‍_a) => (compartmentEvaluate = $h‍_a)]]]],
          ["./make-safe-evaluator.js", [["makeSafeEvaluator", [($h‍_a) => (makeSafeEvaluator = $h‍_a)]]]]
        ]);
        const { quote: q } = assert,
          moduleAliases = new WeakMap(),
          privateFields = new WeakMap(),
          assertModuleHooks = (compartment) => {
            const { importHook: importHook, resolveHook: resolveHook } = weakmapGet(privateFields, compartment);
            if ("function" != typeof importHook || "function" != typeof resolveHook)
              throw TypeError("Compartment must be constructed with an importHook and a resolveHook for it to be able to load modules");
          },
          InertCompartment = function (_endowments = {}, _modules = {}, _options = {}) {
            throw TypeError("Compartment.prototype.constructor is not a valid constructor.");
          };
        $h‍_once.InertCompartment(InertCompartment);
        const compartmentImportNow = (compartment, specifier) => {
            const { execute: execute, exportsProxy: exportsProxy } = link(privateFields, moduleAliases, compartment, specifier);
            return execute(), exportsProxy;
          },
          CompartmentPrototype = {
            constructor: InertCompartment,
            get globalThis() {
              return weakmapGet(privateFields, this).globalObject;
            },
            get name() {
              return weakmapGet(privateFields, this).name;
            },
            evaluate(source, options = {}) {
              const compartmentFields = weakmapGet(privateFields, this);
              return compartmentEvaluate(compartmentFields, source, options);
            },
            toString: () => "[object Compartment]",
            module(specifier) {
              if ("string" != typeof specifier) throw TypeError("first argument of module() must be a string");
              assertModuleHooks(this);
              const { exportsProxy: exportsProxy } = getDeferredExports(this, weakmapGet(privateFields, this), moduleAliases, specifier);
              return exportsProxy;
            },
            async import(specifier) {
              if ("string" != typeof specifier) throw TypeError("first argument of import() must be a string");
              return (
                assertModuleHooks(this),
                promiseThen(load(privateFields, moduleAliases, this, specifier), () => ({
                  namespace: compartmentImportNow(this, specifier)
                }))
              );
            },
            async load(specifier) {
              if ("string" != typeof specifier) throw TypeError("first argument of load() must be a string");
              return assertModuleHooks(this), load(privateFields, moduleAliases, this, specifier);
            },
            importNow(specifier) {
              if ("string" != typeof specifier) throw TypeError("first argument of importNow() must be a string");
              return assertModuleHooks(this), compartmentImportNow(this, specifier);
            }
          };
        $h‍_once.CompartmentPrototype(CompartmentPrototype),
          defineProperties(InertCompartment, { prototype: { value: CompartmentPrototype } });
        $h‍_once.makeCompartmentConstructor((targetMakeCompartmentConstructor, intrinsics, markVirtualizedNativeFunction) => {
          function Compartment(endowments = {}, moduleMap = {}, options = {}) {
            if (void 0 === new.target) throw TypeError("Class constructor Compartment cannot be invoked without 'new'");
            const {
                name: name = "<unknown>",
                transforms: transforms = [],
                __shimTransforms__: __shimTransforms__ = [],
                resolveHook: resolveHook,
                importHook: importHook,
                moduleMapHook: moduleMapHook,
                importMetaHook: importMetaHook
              } = options,
              globalTransforms = [...transforms, ...__shimTransforms__],
              moduleRecords = new Map(),
              instances = new Map(),
              deferredExports = new Map();
            for (const [specifier, aliasNamespace] of entries(moduleMap || {})) {
              if ("string" == typeof aliasNamespace)
                throw TypeError(`Cannot map module ${q(specifier)} to ${q(aliasNamespace)} in parent compartment`);
              if (void 0 === weakmapGet(moduleAliases, aliasNamespace))
                throw ReferenceError(`Cannot map module ${q(specifier)} because it has no known compartment in this realm`);
            }
            const globalObject = {};
            setGlobalObjectSymbolUnscopables(globalObject), setGlobalObjectConstantProperties(globalObject);
            const { safeEvaluate: safeEvaluate } = makeSafeEvaluator({
              globalObject: globalObject,
              globalTransforms: globalTransforms,
              sloppyGlobalsMode: !1
            });
            setGlobalObjectMutableProperties(globalObject, {
              intrinsics: intrinsics,
              newGlobalPropertyNames: sharedGlobalPropertyNames,
              makeCompartmentConstructor: targetMakeCompartmentConstructor,
              markVirtualizedNativeFunction: markVirtualizedNativeFunction
            }),
              setGlobalObjectEvaluators(globalObject, safeEvaluate, markVirtualizedNativeFunction),
              assign(globalObject, endowments),
              weakmapSet(privateFields, this, {
                name: `${name}`,
                globalTransforms: globalTransforms,
                globalObject: globalObject,
                safeEvaluate: safeEvaluate,
                resolveHook: resolveHook,
                importHook: importHook,
                moduleMap: moduleMap,
                moduleMapHook: moduleMapHook,
                importMetaHook: importMetaHook,
                moduleRecords: moduleRecords,
                __shimTransforms__: __shimTransforms__,
                deferredExports: deferredExports,
                instances: instances
              });
          }
          return (Compartment.prototype = CompartmentPrototype), Compartment;
        });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let FERAL_FUNCTION,
          Float32Array,
          Map,
          Set,
          String,
          getOwnPropertyDescriptor,
          getPrototypeOf,
          iterateArray,
          iterateMap,
          iterateSet,
          iterateString,
          matchAllRegExp,
          matchAllSymbol,
          regexpPrototype,
          globalThis,
          InertCompartment;
        function getConstructorOf(obj) {
          return getPrototypeOf(obj).constructor;
        }
        $h‍_imports([
          [
            "./commons.js",
            [
              ["FERAL_FUNCTION", [($h‍_a) => (FERAL_FUNCTION = $h‍_a)]],
              ["Float32Array", [($h‍_a) => (Float32Array = $h‍_a)]],
              ["Map", [($h‍_a) => (Map = $h‍_a)]],
              ["Set", [($h‍_a) => (Set = $h‍_a)]],
              ["String", [($h‍_a) => (String = $h‍_a)]],
              ["getOwnPropertyDescriptor", [($h‍_a) => (getOwnPropertyDescriptor = $h‍_a)]],
              ["getPrototypeOf", [($h‍_a) => (getPrototypeOf = $h‍_a)]],
              ["iterateArray", [($h‍_a) => (iterateArray = $h‍_a)]],
              ["iterateMap", [($h‍_a) => (iterateMap = $h‍_a)]],
              ["iterateSet", [($h‍_a) => (iterateSet = $h‍_a)]],
              ["iterateString", [($h‍_a) => (iterateString = $h‍_a)]],
              ["matchAllRegExp", [($h‍_a) => (matchAllRegExp = $h‍_a)]],
              ["matchAllSymbol", [($h‍_a) => (matchAllSymbol = $h‍_a)]],
              ["regexpPrototype", [($h‍_a) => (regexpPrototype = $h‍_a)]],
              ["globalThis", [($h‍_a) => (globalThis = $h‍_a)]]
            ]
          ],
          ["./compartment.js", [["InertCompartment", [($h‍_a) => (InertCompartment = $h‍_a)]]]]
        ]);
        $h‍_once.getAnonymousIntrinsics(() => {
          const InertFunction = FERAL_FUNCTION.prototype.constructor,
            argsCalleeDesc = getOwnPropertyDescriptor(
              (function () {
                return arguments;
              })(),
              "callee"
            ),
            ThrowTypeError = argsCalleeDesc && argsCalleeDesc.get,
            StringIteratorObject = iterateString(new String()),
            StringIteratorPrototype = getPrototypeOf(StringIteratorObject),
            RegExpStringIterator = regexpPrototype[matchAllSymbol] && matchAllRegExp(/./),
            RegExpStringIteratorPrototype = RegExpStringIterator && getPrototypeOf(RegExpStringIterator),
            ArrayIteratorObject = iterateArray([]),
            ArrayIteratorPrototype = getPrototypeOf(ArrayIteratorObject),
            TypedArray = getPrototypeOf(Float32Array),
            MapIteratorObject = iterateMap(new Map()),
            MapIteratorPrototype = getPrototypeOf(MapIteratorObject),
            SetIteratorObject = iterateSet(new Set()),
            SetIteratorPrototype = getPrototypeOf(SetIteratorObject),
            IteratorPrototype = getPrototypeOf(ArrayIteratorPrototype);
          const GeneratorFunction = getConstructorOf(function* () {}),
            Generator = GeneratorFunction.prototype;
          const AsyncGeneratorFunction = getConstructorOf(async function* () {}),
            AsyncGenerator = AsyncGeneratorFunction.prototype,
            AsyncGeneratorPrototype = AsyncGenerator.prototype,
            AsyncIteratorPrototype = getPrototypeOf(AsyncGeneratorPrototype);
          const intrinsics = {
            "%InertFunction%": InertFunction,
            "%ArrayIteratorPrototype%": ArrayIteratorPrototype,
            "%InertAsyncFunction%": getConstructorOf(async function () {}),
            "%AsyncGenerator%": AsyncGenerator,
            "%InertAsyncGeneratorFunction%": AsyncGeneratorFunction,
            "%AsyncGeneratorPrototype%": AsyncGeneratorPrototype,
            "%AsyncIteratorPrototype%": AsyncIteratorPrototype,
            "%Generator%": Generator,
            "%InertGeneratorFunction%": GeneratorFunction,
            "%IteratorPrototype%": IteratorPrototype,
            "%MapIteratorPrototype%": MapIteratorPrototype,
            "%RegExpStringIteratorPrototype%": RegExpStringIteratorPrototype,
            "%SetIteratorPrototype%": SetIteratorPrototype,
            "%StringIteratorPrototype%": StringIteratorPrototype,
            "%ThrowTypeError%": ThrowTypeError,
            "%TypedArray%": TypedArray,
            "%InertCompartment%": InertCompartment
          };
          return (
            globalThis.Iterator &&
              ((intrinsics["%IteratorHelperPrototype%"] = getPrototypeOf(globalThis.Iterator.from([]).take(0))),
              (intrinsics["%WrapForValidIteratorPrototype%"] = getPrototypeOf(globalThis.Iterator.from({ next() {} })))),
            globalThis.AsyncIterator &&
              ((intrinsics["%AsyncIteratorHelperPrototype%"] = getPrototypeOf(globalThis.AsyncIterator.from([]).take(0))),
              (intrinsics["%WrapForValidAsyncIteratorPrototype%"] = getPrototypeOf(globalThis.AsyncIterator.from({ next() {} })))),
            intrinsics
          );
        });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let TypeError, freeze;
        $h‍_imports([
          [
            "./commons.js",
            [
              ["TypeError", [($h‍_a) => (TypeError = $h‍_a)]],
              ["freeze", [($h‍_a) => (freeze = $h‍_a)]]
            ]
          ]
        ]);
        const tameHarden = (safeHarden, hardenTaming) => {
          if ("safe" !== hardenTaming && "unsafe" !== hardenTaming) throw TypeError(`unrecognized fakeHardenOption ${hardenTaming}`);
          if ("safe" === hardenTaming) return safeHarden;
          if (
            ((Object.isExtensible = () => !1),
            (Object.isFrozen = () => !0),
            (Object.isSealed = () => !0),
            (Reflect.isExtensible = () => !1),
            safeHarden.isFake)
          )
            return safeHarden;
          const fakeHarden = (arg) => arg;
          return (fakeHarden.isFake = !0), freeze(fakeHarden);
        };
        $h‍_once.tameHarden(tameHarden), freeze(tameHarden);
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let Symbol, entries, fromEntries, getOwnPropertyDescriptors, defineProperties, arrayMap;
        $h‍_imports([
          [
            "./commons.js",
            [
              ["Symbol", [($h‍_a) => (Symbol = $h‍_a)]],
              ["entries", [($h‍_a) => (entries = $h‍_a)]],
              ["fromEntries", [($h‍_a) => (fromEntries = $h‍_a)]],
              ["getOwnPropertyDescriptors", [($h‍_a) => (getOwnPropertyDescriptors = $h‍_a)]],
              ["defineProperties", [($h‍_a) => (defineProperties = $h‍_a)]],
              ["arrayMap", [($h‍_a) => (arrayMap = $h‍_a)]]
            ]
          ]
        ]);
        $h‍_once.tameSymbolConstructor(() => {
          const OriginalSymbol = Symbol,
            SymbolPrototype = OriginalSymbol.prototype,
            SharedSymbol = (description) => OriginalSymbol(description);
          defineProperties(SymbolPrototype, { constructor: { value: SharedSymbol } });
          const originalDescsEntries = entries(getOwnPropertyDescriptors(OriginalSymbol)),
            descs = fromEntries(arrayMap(originalDescsEntries, ([name, desc]) => [name, { ...desc, configurable: !0 }]));
          return defineProperties(SharedSymbol, descs), { "%SharedSymbol%": SharedSymbol };
        });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let makeEnvironmentCaptor,
          FERAL_FUNCTION,
          FERAL_EVAL,
          TypeError,
          arrayFilter,
          globalThis,
          is,
          ownKeys,
          stringSplit,
          noEvalEvaluate,
          makeHardener,
          makeIntrinsicsCollector,
          whitelistIntrinsics,
          tameFunctionConstructors,
          tameDateConstructor,
          tameMathObject,
          tameRegExpConstructor,
          enablePropertyOverrides,
          tameLocaleMethods,
          setGlobalObjectConstantProperties,
          setGlobalObjectMutableProperties,
          setGlobalObjectEvaluators,
          makeSafeEvaluator,
          initialGlobalPropertyNames,
          tameFunctionToString,
          tameDomains,
          tameConsole,
          tameErrorConstructor,
          assert,
          makeAssert,
          getAnonymousIntrinsics,
          makeCompartmentConstructor,
          tameHarden,
          tameSymbolConstructor;
        $h‍_imports([
          ["@endo/env-options", [["makeEnvironmentCaptor", [($h‍_a) => (makeEnvironmentCaptor = $h‍_a)]]]],
          [
            "./commons.js",
            [
              ["FERAL_FUNCTION", [($h‍_a) => (FERAL_FUNCTION = $h‍_a)]],
              ["FERAL_EVAL", [($h‍_a) => (FERAL_EVAL = $h‍_a)]],
              ["TypeError", [($h‍_a) => (TypeError = $h‍_a)]],
              ["arrayFilter", [($h‍_a) => (arrayFilter = $h‍_a)]],
              ["globalThis", [($h‍_a) => (globalThis = $h‍_a)]],
              ["is", [($h‍_a) => (is = $h‍_a)]],
              ["ownKeys", [($h‍_a) => (ownKeys = $h‍_a)]],
              ["stringSplit", [($h‍_a) => (stringSplit = $h‍_a)]],
              ["noEvalEvaluate", [($h‍_a) => (noEvalEvaluate = $h‍_a)]]
            ]
          ],
          ["./make-hardener.js", [["makeHardener", [($h‍_a) => (makeHardener = $h‍_a)]]]],
          ["./intrinsics.js", [["makeIntrinsicsCollector", [($h‍_a) => (makeIntrinsicsCollector = $h‍_a)]]]],
          ["./permits-intrinsics.js", [["default", [($h‍_a) => (whitelistIntrinsics = $h‍_a)]]]],
          ["./tame-function-constructors.js", [["default", [($h‍_a) => (tameFunctionConstructors = $h‍_a)]]]],
          ["./tame-date-constructor.js", [["default", [($h‍_a) => (tameDateConstructor = $h‍_a)]]]],
          ["./tame-math-object.js", [["default", [($h‍_a) => (tameMathObject = $h‍_a)]]]],
          ["./tame-regexp-constructor.js", [["default", [($h‍_a) => (tameRegExpConstructor = $h‍_a)]]]],
          ["./enable-property-overrides.js", [["default", [($h‍_a) => (enablePropertyOverrides = $h‍_a)]]]],
          ["./tame-locale-methods.js", [["default", [($h‍_a) => (tameLocaleMethods = $h‍_a)]]]],
          [
            "./global-object.js",
            [
              ["setGlobalObjectConstantProperties", [($h‍_a) => (setGlobalObjectConstantProperties = $h‍_a)]],
              ["setGlobalObjectMutableProperties", [($h‍_a) => (setGlobalObjectMutableProperties = $h‍_a)]],
              ["setGlobalObjectEvaluators", [($h‍_a) => (setGlobalObjectEvaluators = $h‍_a)]]
            ]
          ],
          ["./make-safe-evaluator.js", [["makeSafeEvaluator", [($h‍_a) => (makeSafeEvaluator = $h‍_a)]]]],
          ["./permits.js", [["initialGlobalPropertyNames", [($h‍_a) => (initialGlobalPropertyNames = $h‍_a)]]]],
          ["./tame-function-tostring.js", [["tameFunctionToString", [($h‍_a) => (tameFunctionToString = $h‍_a)]]]],
          ["./tame-domains.js", [["tameDomains", [($h‍_a) => (tameDomains = $h‍_a)]]]],
          ["./error/tame-console.js", [["tameConsole", [($h‍_a) => (tameConsole = $h‍_a)]]]],
          ["./error/tame-error-constructor.js", [["default", [($h‍_a) => (tameErrorConstructor = $h‍_a)]]]],
          [
            "./error/assert.js",
            [
              ["assert", [($h‍_a) => (assert = $h‍_a)]],
              ["makeAssert", [($h‍_a) => (makeAssert = $h‍_a)]]
            ]
          ],
          ["./get-anonymous-intrinsics.js", [["getAnonymousIntrinsics", [($h‍_a) => (getAnonymousIntrinsics = $h‍_a)]]]],
          ["./compartment.js", [["makeCompartmentConstructor", [($h‍_a) => (makeCompartmentConstructor = $h‍_a)]]]],
          ["./tame-harden.js", [["tameHarden", [($h‍_a) => (tameHarden = $h‍_a)]]]],
          ["./tame-symbol-constructor.js", [["tameSymbolConstructor", [($h‍_a) => (tameSymbolConstructor = $h‍_a)]]]]
        ]);
        const { Fail: Fail, details: d, quote: q } = assert;
        let priorRepairIntrinsics, priorHardenIntrinsics;
        const safeHarden = makeHardener();
        $h‍_once.repairIntrinsics((options = {}) => {
          const { getEnvironmentOption: getenv } = makeEnvironmentCaptor(globalThis),
            {
              errorTaming: errorTaming = getenv("LOCKDOWN_ERROR_TAMING", "safe"),
              errorTrapping: errorTrapping = getenv("LOCKDOWN_ERROR_TRAPPING", "platform"),
              unhandledRejectionTrapping: unhandledRejectionTrapping = getenv("LOCKDOWN_UNHANDLED_REJECTION_TRAPPING", "report"),
              regExpTaming: regExpTaming = getenv("LOCKDOWN_REGEXP_TAMING", "safe"),
              localeTaming: localeTaming = getenv("LOCKDOWN_LOCALE_TAMING", "safe"),
              consoleTaming: consoleTaming = getenv("LOCKDOWN_CONSOLE_TAMING", "safe"),
              overrideTaming: overrideTaming = getenv("LOCKDOWN_OVERRIDE_TAMING", "moderate"),
              stackFiltering: stackFiltering = getenv("LOCKDOWN_STACK_FILTERING", "concise"),
              domainTaming: domainTaming = getenv("LOCKDOWN_DOMAIN_TAMING", "safe"),
              evalTaming: evalTaming = getenv("LOCKDOWN_EVAL_TAMING", "safeEval"),
              overrideDebug: overrideDebug = arrayFilter(
                stringSplit(getenv("LOCKDOWN_OVERRIDE_DEBUG", ""), ","),
                (debugName) => "" !== debugName
              ),
              __hardenTaming__: __hardenTaming__ = getenv("LOCKDOWN_HARDEN_TAMING", "safe"),
              dateTaming: dateTaming = "safe",
              mathTaming: mathTaming = "safe",
              ...extraOptions
            } = options;
          "unsafeEval" === evalTaming ||
            "safeEval" === evalTaming ||
            "noEval" === evalTaming ||
            Fail`lockdown(): non supported option evalTaming: ${q(evalTaming)}`;
          const extraOptionsNames = ownKeys(extraOptions);
          0 === extraOptionsNames.length || Fail`lockdown(): non supported option ${q(extraOptionsNames)}`,
            void 0 === priorRepairIntrinsics ||
              assert.fail(d`Already locked down at ${priorRepairIntrinsics} (SES_ALREADY_LOCKED_DOWN)`, TypeError),
            (priorRepairIntrinsics = TypeError("Prior lockdown (SES_ALREADY_LOCKED_DOWN)")),
            priorRepairIntrinsics.stack,
            (() => {
              let allowed = !1;
              try {
                (allowed = FERAL_FUNCTION(
                  "eval",
                  "SES_changed",
                  '        eval("SES_changed = true");\n        return SES_changed;\n      '
                )(FERAL_EVAL, !1)),
                  allowed || delete globalThis.SES_changed;
              } catch (_error) {
                allowed = !0;
              }
              if (!allowed)
                throw TypeError(
                  "SES cannot initialize unless 'eval' is the original intrinsic 'eval', suitable for direct-eval (dynamically scoped eval) (SES_DIRECT_EVAL)"
                );
            })();
          if (
            globalThis.Function.prototype.constructor !== globalThis.Function &&
            "function" == typeof globalThis.harden &&
            "function" == typeof globalThis.lockdown &&
            globalThis.Date.prototype.constructor !== globalThis.Date &&
            "function" == typeof globalThis.Date.now &&
            is(globalThis.Date.prototype.constructor.now(), NaN)
          )
            throw TypeError("Already locked down but not by this SES instance (SES_MULTIPLE_INSTANCES)");
          tameDomains(domainTaming);
          const markVirtualizedNativeFunction = tameFunctionToString(),
            {
              addIntrinsics: addIntrinsics,
              completePrototypes: completePrototypes,
              finalIntrinsics: finalIntrinsics
            } = makeIntrinsicsCollector(),
            tamedHarden = tameHarden(safeHarden, __hardenTaming__);
          addIntrinsics({ harden: tamedHarden }),
            addIntrinsics(tameFunctionConstructors()),
            addIntrinsics(tameDateConstructor(dateTaming)),
            addIntrinsics(tameErrorConstructor(errorTaming, stackFiltering)),
            addIntrinsics(tameMathObject(mathTaming)),
            addIntrinsics(tameRegExpConstructor(regExpTaming)),
            addIntrinsics(tameSymbolConstructor()),
            addIntrinsics(getAnonymousIntrinsics()),
            completePrototypes();
          const intrinsics = finalIntrinsics();
          let optGetStackString;
          "unsafe" !== errorTaming && (optGetStackString = intrinsics["%InitialGetStackString%"]);
          const consoleRecord = tameConsole(consoleTaming, errorTrapping, unhandledRejectionTrapping, optGetStackString);
          if (
            ((globalThis.console = consoleRecord.console),
            "unsafe" === errorTaming && globalThis.assert === assert && (globalThis.assert = makeAssert(void 0, !0)),
            tameLocaleMethods(intrinsics, localeTaming),
            whitelistIntrinsics(intrinsics, markVirtualizedNativeFunction),
            setGlobalObjectConstantProperties(globalThis),
            setGlobalObjectMutableProperties(globalThis, {
              intrinsics: intrinsics,
              newGlobalPropertyNames: initialGlobalPropertyNames,
              makeCompartmentConstructor: makeCompartmentConstructor,
              markVirtualizedNativeFunction: markVirtualizedNativeFunction
            }),
            "noEval" === evalTaming)
          )
            setGlobalObjectEvaluators(globalThis, noEvalEvaluate, markVirtualizedNativeFunction);
          else if ("safeEval" === evalTaming) {
            const { safeEvaluate: safeEvaluate } = makeSafeEvaluator({ globalObject: globalThis });
            setGlobalObjectEvaluators(globalThis, safeEvaluate, markVirtualizedNativeFunction);
          }
          return () => (
            void 0 === priorHardenIntrinsics ||
              assert.fail(d`Already locked down at ${priorHardenIntrinsics} (SES_ALREADY_LOCKED_DOWN)`, TypeError),
            (priorHardenIntrinsics = TypeError("Prior lockdown (SES_ALREADY_LOCKED_DOWN)")),
            priorHardenIntrinsics.stack,
            enablePropertyOverrides(intrinsics, overrideTaming, overrideDebug),
            tamedHarden(intrinsics),
            tamedHarden
          );
        });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let globalThis, repairIntrinsics;
        $h‍_imports([
          ["./assert-sloppy-mode.js", []],
          ["./commons.js", [["globalThis", [($h‍_a) => (globalThis = $h‍_a)]]]],
          ["./lockdown.js", [["repairIntrinsics", [($h‍_a) => (repairIntrinsics = $h‍_a)]]]]
        ]),
          (globalThis.lockdown = (options) => {
            const hardenIntrinsics = repairIntrinsics(options);
            globalThis.harden = hardenIntrinsics();
          }),
          (globalThis.repairIntrinsics = (options) => {
            const hardenIntrinsics = repairIntrinsics(options);
            globalThis.hardenIntrinsics = () => {
              globalThis.harden = hardenIntrinsics();
            };
          });
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let globalThis, makeCompartmentConstructor, tameFunctionToString, getGlobalIntrinsics;
        $h‍_imports([
          ["./commons.js", [["globalThis", [($h‍_a) => (globalThis = $h‍_a)]]]],
          ["./compartment.js", [["makeCompartmentConstructor", [($h‍_a) => (makeCompartmentConstructor = $h‍_a)]]]],
          ["./tame-function-tostring.js", [["tameFunctionToString", [($h‍_a) => (tameFunctionToString = $h‍_a)]]]],
          ["./intrinsics.js", [["getGlobalIntrinsics", [($h‍_a) => (getGlobalIntrinsics = $h‍_a)]]]]
        ]);
        const markVirtualizedNativeFunction = tameFunctionToString();
        globalThis.Compartment = makeCompartmentConstructor(
          makeCompartmentConstructor,
          getGlobalIntrinsics(globalThis),
          markVirtualizedNativeFunction
        );
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        let globalThis, assert;
        $h‍_imports([
          ["./commons.js", [["globalThis", [($h‍_a) => (globalThis = $h‍_a)]]]],
          ["./error/assert.js", [["assert", [($h‍_a) => (assert = $h‍_a)]]]]
        ]),
          (globalThis.assert = assert);
      },
      ({ imports: $h‍_imports, liveVar: $h‍_live, onceVar: $h‍_once, importMeta: $h‍____meta }) => {
        $h‍_imports([
          ["./src/lockdown-shim.js", []],
          ["./src/compartment-shim.js", []],
          ["./src/assert-shim.js", []]
        ]);
      }
    ],
    cell = (name, value = undefined) => {
      const observers = [];
      return Object.freeze({
        get: Object.freeze(() => value),
        set: Object.freeze((newValue) => {
          value = newValue;
          for (const observe of observers) observe(value);
        }),
        observe: Object.freeze((observe) => {
          observers.push(observe), observe(value);
        }),
        enumerable: !0
      });
    },
    cells = [
      {
        globalThis: cell(),
        Array: cell(),
        Date: cell(),
        FinalizationRegistry: cell(),
        Float32Array: cell(),
        JSON: cell(),
        Map: cell(),
        Math: cell(),
        Number: cell(),
        Object: cell(),
        Promise: cell(),
        Proxy: cell(),
        Reflect: cell(),
        FERAL_REG_EXP: cell(),
        Set: cell(),
        String: cell(),
        Symbol: cell(),
        WeakMap: cell(),
        WeakSet: cell(),
        FERAL_ERROR: cell(),
        RangeError: cell(),
        ReferenceError: cell(),
        SyntaxError: cell(),
        TypeError: cell(),
        assign: cell(),
        create: cell(),
        defineProperties: cell(),
        entries: cell(),
        freeze: cell(),
        getOwnPropertyDescriptor: cell(),
        getOwnPropertyDescriptors: cell(),
        getOwnPropertyNames: cell(),
        getPrototypeOf: cell(),
        is: cell(),
        isFrozen: cell(),
        isSealed: cell(),
        isExtensible: cell(),
        keys: cell(),
        objectPrototype: cell(),
        seal: cell(),
        preventExtensions: cell(),
        setPrototypeOf: cell(),
        values: cell(),
        fromEntries: cell(),
        speciesSymbol: cell(),
        toStringTagSymbol: cell(),
        iteratorSymbol: cell(),
        matchAllSymbol: cell(),
        unscopablesSymbol: cell(),
        symbolKeyFor: cell(),
        symbolFor: cell(),
        isInteger: cell(),
        stringifyJson: cell(),
        defineProperty: cell(),
        apply: cell(),
        construct: cell(),
        reflectGet: cell(),
        reflectGetOwnPropertyDescriptor: cell(),
        reflectHas: cell(),
        reflectIsExtensible: cell(),
        ownKeys: cell(),
        reflectPreventExtensions: cell(),
        reflectSet: cell(),
        isArray: cell(),
        arrayPrototype: cell(),
        mapPrototype: cell(),
        proxyRevocable: cell(),
        regexpPrototype: cell(),
        setPrototype: cell(),
        stringPrototype: cell(),
        weakmapPrototype: cell(),
        weaksetPrototype: cell(),
        functionPrototype: cell(),
        promisePrototype: cell(),
        typedArrayPrototype: cell(),
        uncurryThis: cell(),
        objectHasOwnProperty: cell(),
        arrayFilter: cell(),
        arrayForEach: cell(),
        arrayIncludes: cell(),
        arrayJoin: cell(),
        arrayMap: cell(),
        arrayPop: cell(),
        arrayPush: cell(),
        arraySlice: cell(),
        arraySome: cell(),
        arraySort: cell(),
        iterateArray: cell(),
        mapSet: cell(),
        mapGet: cell(),
        mapHas: cell(),
        mapDelete: cell(),
        mapEntries: cell(),
        iterateMap: cell(),
        setAdd: cell(),
        setDelete: cell(),
        setForEach: cell(),
        setHas: cell(),
        iterateSet: cell(),
        regexpTest: cell(),
        regexpExec: cell(),
        matchAllRegExp: cell(),
        stringEndsWith: cell(),
        stringIncludes: cell(),
        stringIndexOf: cell(),
        stringMatch: cell(),
        stringReplace: cell(),
        stringSearch: cell(),
        stringSlice: cell(),
        stringSplit: cell(),
        stringStartsWith: cell(),
        iterateString: cell(),
        weakmapDelete: cell(),
        weakmapGet: cell(),
        weakmapHas: cell(),
        weakmapSet: cell(),
        weaksetAdd: cell(),
        weaksetHas: cell(),
        functionToString: cell(),
        promiseAll: cell(),
        promiseCatch: cell(),
        promiseThen: cell(),
        finalizationRegistryRegister: cell(),
        finalizationRegistryUnregister: cell(),
        getConstructorOf: cell(),
        immutableObject: cell(),
        isObject: cell(),
        isError: cell(),
        FERAL_EVAL: cell(),
        FERAL_FUNCTION: cell(),
        noEvalEvaluate: cell()
      },
      {},
      { makeEnvironmentCaptor: cell() },
      {},
      { an: cell(), bestEffortStringify: cell(), enJoin: cell() },
      {},
      {},
      { makeLRUCacheMap: cell(), makeNoteLogArgsArrayKit: cell() },
      { unredactedDetails: cell(), loggedErrorHandler: cell(), makeAssert: cell(), assert: cell() },
      { isTypedArray: cell(), makeHardener: cell() },
      {
        constantProperties: cell(),
        universalPropertyNames: cell(),
        initialGlobalPropertyNames: cell(),
        sharedGlobalPropertyNames: cell(),
        uniqueGlobalPropertyNames: cell(),
        NativeErrors: cell(),
        FunctionInstance: cell(),
        AsyncFunctionInstance: cell(),
        isAccessorPermit: cell(),
        permitted: cell()
      },
      { makeIntrinsicsCollector: cell(), getGlobalIntrinsics: cell() },
      { default: cell() },
      { default: cell() },
      { default: cell() },
      { default: cell() },
      { default: cell() },
      { minEnablements: cell(), moderateEnablements: cell(), severeEnablements: cell() },
      { default: cell() },
      { default: cell() },
      { makeEvalFunction: cell() },
      { makeFunctionConstructor: cell() },
      {
        setGlobalObjectSymbolUnscopables: cell(),
        setGlobalObjectConstantProperties: cell(),
        setGlobalObjectMutableProperties: cell(),
        setGlobalObjectEvaluators: cell()
      },
      { alwaysThrowHandler: cell(), strictScopeTerminatorHandler: cell(), strictScopeTerminator: cell() },
      { createSloppyGlobalsScopeTerminator: cell() },
      { makeEvalScopeKit: cell() },
      { getSourceURL: cell() },
      {
        rejectHtmlComments: cell(),
        evadeHtmlCommentTest: cell(),
        rejectImportExpressions: cell(),
        evadeImportExpressionTest: cell(),
        rejectSomeDirectEvalExpressions: cell(),
        mandatoryTransforms: cell(),
        applyTransforms: cell(),
        transforms: cell()
      },
      { isValidIdentifierName: cell(), getScopeConstants: cell() },
      { makeEvaluate: cell() },
      { makeSafeEvaluator: cell() },
      { tameFunctionToString: cell() },
      { tameDomains: cell() },
      { makeLoggingConsoleKit: cell(), makeCausalConsole: cell(), filterConsole: cell(), consoleWhitelist: cell() },
      { makeRejectionHandlers: cell() },
      { tameConsole: cell() },
      { filterFileName: cell(), shortenCallSiteString: cell(), tameV8ErrorConstructor: cell() },
      { default: cell() },
      { makeAlias: cell(), load: cell() },
      { deferExports: cell(), getDeferredExports: cell() },
      { provideCompartmentEvaluator: cell(), compartmentEvaluate: cell() },
      { makeThirdPartyModuleInstance: cell(), makeModuleInstance: cell() },
      { link: cell(), instantiate: cell() },
      { InertCompartment: cell(), CompartmentPrototype: cell(), makeCompartmentConstructor: cell() },
      { getAnonymousIntrinsics: cell() },
      { tameHarden: cell() },
      { tameSymbolConstructor: cell() },
      { repairIntrinsics: cell() },
      {},
      {},
      {},
      {}
    ];
  Object.defineProperties(cells[3], Object.getOwnPropertyDescriptors(cells[2]));
  const namespaces = cells.map((cells) => Object.freeze(Object.create(null, cells)));
  for (let index = 0; index < namespaces.length; index += 1) cells[index]["*"] = cell(0, namespaces[index]);
  function observeImports(map, importName, importIndex) {
    for (const [name, observers] of map.get(importName)) {
      const cell = cells[importIndex][name];
      if (void 0 === cell) throw new ReferenceError(`Cannot import name ${name}`);
      for (const observer of observers) cell.observe(observer);
    }
  }
  functors[0]({
    imports(entries) {
      new Map(entries);
    },
    liveVar: {},
    onceVar: {
      universalThis: cells[0].globalThis.set,
      Array: cells[0].Array.set,
      Date: cells[0].Date.set,
      FinalizationRegistry: cells[0].FinalizationRegistry.set,
      Float32Array: cells[0].Float32Array.set,
      JSON: cells[0].JSON.set,
      Map: cells[0].Map.set,
      Math: cells[0].Math.set,
      Number: cells[0].Number.set,
      Object: cells[0].Object.set,
      Promise: cells[0].Promise.set,
      Proxy: cells[0].Proxy.set,
      Reflect: cells[0].Reflect.set,
      FERAL_REG_EXP: cells[0].FERAL_REG_EXP.set,
      Set: cells[0].Set.set,
      String: cells[0].String.set,
      Symbol: cells[0].Symbol.set,
      WeakMap: cells[0].WeakMap.set,
      WeakSet: cells[0].WeakSet.set,
      FERAL_ERROR: cells[0].FERAL_ERROR.set,
      RangeError: cells[0].RangeError.set,
      ReferenceError: cells[0].ReferenceError.set,
      SyntaxError: cells[0].SyntaxError.set,
      TypeError: cells[0].TypeError.set,
      assign: cells[0].assign.set,
      create: cells[0].create.set,
      defineProperties: cells[0].defineProperties.set,
      entries: cells[0].entries.set,
      freeze: cells[0].freeze.set,
      getOwnPropertyDescriptor: cells[0].getOwnPropertyDescriptor.set,
      getOwnPropertyDescriptors: cells[0].getOwnPropertyDescriptors.set,
      getOwnPropertyNames: cells[0].getOwnPropertyNames.set,
      getPrototypeOf: cells[0].getPrototypeOf.set,
      is: cells[0].is.set,
      isFrozen: cells[0].isFrozen.set,
      isSealed: cells[0].isSealed.set,
      isExtensible: cells[0].isExtensible.set,
      keys: cells[0].keys.set,
      objectPrototype: cells[0].objectPrototype.set,
      seal: cells[0].seal.set,
      preventExtensions: cells[0].preventExtensions.set,
      setPrototypeOf: cells[0].setPrototypeOf.set,
      values: cells[0].values.set,
      fromEntries: cells[0].fromEntries.set,
      speciesSymbol: cells[0].speciesSymbol.set,
      toStringTagSymbol: cells[0].toStringTagSymbol.set,
      iteratorSymbol: cells[0].iteratorSymbol.set,
      matchAllSymbol: cells[0].matchAllSymbol.set,
      unscopablesSymbol: cells[0].unscopablesSymbol.set,
      symbolKeyFor: cells[0].symbolKeyFor.set,
      symbolFor: cells[0].symbolFor.set,
      isInteger: cells[0].isInteger.set,
      stringifyJson: cells[0].stringifyJson.set,
      defineProperty: cells[0].defineProperty.set,
      apply: cells[0].apply.set,
      construct: cells[0].construct.set,
      reflectGet: cells[0].reflectGet.set,
      reflectGetOwnPropertyDescriptor: cells[0].reflectGetOwnPropertyDescriptor.set,
      reflectHas: cells[0].reflectHas.set,
      reflectIsExtensible: cells[0].reflectIsExtensible.set,
      ownKeys: cells[0].ownKeys.set,
      reflectPreventExtensions: cells[0].reflectPreventExtensions.set,
      reflectSet: cells[0].reflectSet.set,
      isArray: cells[0].isArray.set,
      arrayPrototype: cells[0].arrayPrototype.set,
      mapPrototype: cells[0].mapPrototype.set,
      proxyRevocable: cells[0].proxyRevocable.set,
      regexpPrototype: cells[0].regexpPrototype.set,
      setPrototype: cells[0].setPrototype.set,
      stringPrototype: cells[0].stringPrototype.set,
      weakmapPrototype: cells[0].weakmapPrototype.set,
      weaksetPrototype: cells[0].weaksetPrototype.set,
      functionPrototype: cells[0].functionPrototype.set,
      promisePrototype: cells[0].promisePrototype.set,
      typedArrayPrototype: cells[0].typedArrayPrototype.set,
      uncurryThis: cells[0].uncurryThis.set,
      objectHasOwnProperty: cells[0].objectHasOwnProperty.set,
      arrayFilter: cells[0].arrayFilter.set,
      arrayForEach: cells[0].arrayForEach.set,
      arrayIncludes: cells[0].arrayIncludes.set,
      arrayJoin: cells[0].arrayJoin.set,
      arrayMap: cells[0].arrayMap.set,
      arrayPop: cells[0].arrayPop.set,
      arrayPush: cells[0].arrayPush.set,
      arraySlice: cells[0].arraySlice.set,
      arraySome: cells[0].arraySome.set,
      arraySort: cells[0].arraySort.set,
      iterateArray: cells[0].iterateArray.set,
      mapSet: cells[0].mapSet.set,
      mapGet: cells[0].mapGet.set,
      mapHas: cells[0].mapHas.set,
      mapDelete: cells[0].mapDelete.set,
      mapEntries: cells[0].mapEntries.set,
      iterateMap: cells[0].iterateMap.set,
      setAdd: cells[0].setAdd.set,
      setDelete: cells[0].setDelete.set,
      setForEach: cells[0].setForEach.set,
      setHas: cells[0].setHas.set,
      iterateSet: cells[0].iterateSet.set,
      regexpTest: cells[0].regexpTest.set,
      regexpExec: cells[0].regexpExec.set,
      matchAllRegExp: cells[0].matchAllRegExp.set,
      stringEndsWith: cells[0].stringEndsWith.set,
      stringIncludes: cells[0].stringIncludes.set,
      stringIndexOf: cells[0].stringIndexOf.set,
      stringMatch: cells[0].stringMatch.set,
      stringReplace: cells[0].stringReplace.set,
      stringSearch: cells[0].stringSearch.set,
      stringSlice: cells[0].stringSlice.set,
      stringSplit: cells[0].stringSplit.set,
      stringStartsWith: cells[0].stringStartsWith.set,
      iterateString: cells[0].iterateString.set,
      weakmapDelete: cells[0].weakmapDelete.set,
      weakmapGet: cells[0].weakmapGet.set,
      weakmapHas: cells[0].weakmapHas.set,
      weakmapSet: cells[0].weakmapSet.set,
      weaksetAdd: cells[0].weaksetAdd.set,
      weaksetHas: cells[0].weaksetHas.set,
      functionToString: cells[0].functionToString.set,
      promiseAll: cells[0].promiseAll.set,
      promiseCatch: cells[0].promiseCatch.set,
      promiseThen: cells[0].promiseThen.set,
      finalizationRegistryRegister: cells[0].finalizationRegistryRegister.set,
      finalizationRegistryUnregister: cells[0].finalizationRegistryUnregister.set,
      getConstructorOf: cells[0].getConstructorOf.set,
      immutableObject: cells[0].immutableObject.set,
      isObject: cells[0].isObject.set,
      isError: cells[0].isError.set,
      FERAL_EVAL: cells[0].FERAL_EVAL.set,
      FERAL_FUNCTION: cells[0].FERAL_FUNCTION.set,
      noEvalEvaluate: cells[0].noEvalEvaluate.set
    },
    importMeta: {}
  }),
    functors[1]({
      imports(entries) {
        observeImports(new Map(entries), "./commons.js", 0);
      },
      liveVar: {},
      onceVar: {},
      importMeta: {}
    }),
    functors[2]({
      imports(entries) {
        new Map(entries);
      },
      liveVar: {},
      onceVar: { makeEnvironmentCaptor: cells[2].makeEnvironmentCaptor.set },
      importMeta: {}
    }),
    functors[3]({
      imports(entries) {
        observeImports(new Map(entries), "./src/env-options.js", 2);
      },
      liveVar: {},
      onceVar: {},
      importMeta: {}
    }),
    functors[4]({
      imports(entries) {
        observeImports(new Map(entries), "../commons.js", 0);
      },
      liveVar: {},
      onceVar: { an: cells[4].an.set, bestEffortStringify: cells[4].bestEffortStringify.set, enJoin: cells[4].enJoin.set },
      importMeta: {}
    }),
    functors[5]({
      imports(entries) {
        new Map(entries);
      },
      liveVar: {},
      onceVar: {},
      importMeta: {}
    }),
    functors[6]({
      imports(entries) {
        new Map(entries);
      },
      liveVar: {},
      onceVar: {},
      importMeta: {}
    }),
    functors[7]({
      imports(entries) {
        observeImports(new Map(entries), "./internal-types.js", 6);
      },
      liveVar: {},
      onceVar: { makeLRUCacheMap: cells[7].makeLRUCacheMap.set, makeNoteLogArgsArrayKit: cells[7].makeNoteLogArgsArrayKit.set },
      importMeta: {}
    }),
    functors[8]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "../commons.js", 0),
          observeImports(map, "./stringify-utils.js", 4),
          observeImports(map, "./types.js", 5),
          observeImports(map, "./internal-types.js", 6),
          observeImports(map, "./note-log-args.js", 7);
      },
      liveVar: {},
      onceVar: {
        unredactedDetails: cells[8].unredactedDetails.set,
        loggedErrorHandler: cells[8].loggedErrorHandler.set,
        makeAssert: cells[8].makeAssert.set,
        assert: cells[8].assert.set
      },
      importMeta: {}
    }),
    functors[9]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "./commons.js", 0), observeImports(map, "./error/assert.js", 8);
      },
      liveVar: {},
      onceVar: { isTypedArray: cells[9].isTypedArray.set, makeHardener: cells[9].makeHardener.set },
      importMeta: {}
    }),
    functors[10]({
      imports(entries) {
        new Map(entries);
      },
      liveVar: {},
      onceVar: {
        constantProperties: cells[10].constantProperties.set,
        universalPropertyNames: cells[10].universalPropertyNames.set,
        initialGlobalPropertyNames: cells[10].initialGlobalPropertyNames.set,
        sharedGlobalPropertyNames: cells[10].sharedGlobalPropertyNames.set,
        uniqueGlobalPropertyNames: cells[10].uniqueGlobalPropertyNames.set,
        NativeErrors: cells[10].NativeErrors.set,
        FunctionInstance: cells[10].FunctionInstance.set,
        AsyncFunctionInstance: cells[10].AsyncFunctionInstance.set,
        isAccessorPermit: cells[10].isAccessorPermit.set,
        permitted: cells[10].permitted.set
      },
      importMeta: {}
    }),
    functors[11]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "./commons.js", 0), observeImports(map, "./permits.js", 10);
      },
      liveVar: {},
      onceVar: { makeIntrinsicsCollector: cells[11].makeIntrinsicsCollector.set, getGlobalIntrinsics: cells[11].getGlobalIntrinsics.set },
      importMeta: {}
    }),
    functors[12]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "./permits.js", 10), observeImports(map, "./commons.js", 0);
      },
      liveVar: {},
      onceVar: { default: cells[12].default.set },
      importMeta: {}
    }),
    functors[13]({
      imports(entries) {
        observeImports(new Map(entries), "./commons.js", 0);
      },
      liveVar: {},
      onceVar: { default: cells[13].default.set },
      importMeta: {}
    }),
    functors[14]({
      imports(entries) {
        observeImports(new Map(entries), "./commons.js", 0);
      },
      liveVar: {},
      onceVar: { default: cells[14].default.set },
      importMeta: {}
    }),
    functors[15]({
      imports(entries) {
        observeImports(new Map(entries), "./commons.js", 0);
      },
      liveVar: {},
      onceVar: { default: cells[15].default.set },
      importMeta: {}
    }),
    functors[16]({
      imports(entries) {
        observeImports(new Map(entries), "./commons.js", 0);
      },
      liveVar: {},
      onceVar: { default: cells[16].default.set },
      importMeta: {}
    }),
    functors[17]({
      imports(entries) {
        new Map(entries);
      },
      liveVar: {},
      onceVar: {
        minEnablements: cells[17].minEnablements.set,
        moderateEnablements: cells[17].moderateEnablements.set,
        severeEnablements: cells[17].severeEnablements.set
      },
      importMeta: {}
    }),
    functors[18]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "./commons.js", 0), observeImports(map, "./enablements.js", 17);
      },
      liveVar: {},
      onceVar: { default: cells[18].default.set },
      importMeta: {}
    }),
    functors[19]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "./commons.js", 0), observeImports(map, "./error/assert.js", 8);
      },
      liveVar: {},
      onceVar: { default: cells[19].default.set },
      importMeta: {}
    }),
    functors[20]({
      imports(entries) {
        new Map(entries);
      },
      liveVar: {},
      onceVar: { makeEvalFunction: cells[20].makeEvalFunction.set },
      importMeta: {}
    }),
    functors[21]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "./commons.js", 0), observeImports(map, "./error/assert.js", 8);
      },
      liveVar: {},
      onceVar: { makeFunctionConstructor: cells[21].makeFunctionConstructor.set },
      importMeta: {}
    }),
    functors[22]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "./commons.js", 0),
          observeImports(map, "./make-eval-function.js", 20),
          observeImports(map, "./make-function-constructor.js", 21),
          observeImports(map, "./permits.js", 10);
      },
      liveVar: {},
      onceVar: {
        setGlobalObjectSymbolUnscopables: cells[22].setGlobalObjectSymbolUnscopables.set,
        setGlobalObjectConstantProperties: cells[22].setGlobalObjectConstantProperties.set,
        setGlobalObjectMutableProperties: cells[22].setGlobalObjectMutableProperties.set,
        setGlobalObjectEvaluators: cells[22].setGlobalObjectEvaluators.set
      },
      importMeta: {}
    }),
    functors[23]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "./commons.js", 0), observeImports(map, "./error/assert.js", 8);
      },
      liveVar: {},
      onceVar: {
        alwaysThrowHandler: cells[23].alwaysThrowHandler.set,
        strictScopeTerminatorHandler: cells[23].strictScopeTerminatorHandler.set,
        strictScopeTerminator: cells[23].strictScopeTerminator.set
      },
      importMeta: {}
    }),
    functors[24]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "./commons.js", 0), observeImports(map, "./strict-scope-terminator.js", 23);
      },
      liveVar: {},
      onceVar: { createSloppyGlobalsScopeTerminator: cells[24].createSloppyGlobalsScopeTerminator.set },
      importMeta: {}
    }),
    functors[25]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "./commons.js", 0), observeImports(map, "./error/assert.js", 8);
      },
      liveVar: {},
      onceVar: { makeEvalScopeKit: cells[25].makeEvalScopeKit.set },
      importMeta: {}
    }),
    functors[26]({
      imports(entries) {
        observeImports(new Map(entries), "./commons.js", 0);
      },
      liveVar: {},
      onceVar: { getSourceURL: cells[26].getSourceURL.set },
      importMeta: {}
    }),
    functors[27]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "./commons.js", 0), observeImports(map, "./get-source-url.js", 26);
      },
      liveVar: {},
      onceVar: {
        rejectHtmlComments: cells[27].rejectHtmlComments.set,
        evadeHtmlCommentTest: cells[27].evadeHtmlCommentTest.set,
        rejectImportExpressions: cells[27].rejectImportExpressions.set,
        evadeImportExpressionTest: cells[27].evadeImportExpressionTest.set,
        rejectSomeDirectEvalExpressions: cells[27].rejectSomeDirectEvalExpressions.set,
        mandatoryTransforms: cells[27].mandatoryTransforms.set,
        applyTransforms: cells[27].applyTransforms.set,
        transforms: cells[27].transforms.set
      },
      importMeta: {}
    }),
    functors[28]({
      imports(entries) {
        observeImports(new Map(entries), "./commons.js", 0);
      },
      liveVar: {},
      onceVar: { isValidIdentifierName: cells[28].isValidIdentifierName.set, getScopeConstants: cells[28].getScopeConstants.set },
      importMeta: {}
    }),
    functors[29]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "./commons.js", 0), observeImports(map, "./scope-constants.js", 28);
      },
      liveVar: {},
      onceVar: { makeEvaluate: cells[29].makeEvaluate.set },
      importMeta: {}
    }),
    functors[30]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "./commons.js", 0),
          observeImports(map, "./strict-scope-terminator.js", 23),
          observeImports(map, "./sloppy-globals-scope-terminator.js", 24),
          observeImports(map, "./eval-scope.js", 25),
          observeImports(map, "./transforms.js", 27),
          observeImports(map, "./make-evaluate.js", 29),
          observeImports(map, "./error/assert.js", 8);
      },
      liveVar: {},
      onceVar: { makeSafeEvaluator: cells[30].makeSafeEvaluator.set },
      importMeta: {}
    }),
    functors[31]({
      imports(entries) {
        observeImports(new Map(entries), "./commons.js", 0);
      },
      liveVar: {},
      onceVar: { tameFunctionToString: cells[31].tameFunctionToString.set },
      importMeta: {}
    }),
    functors[32]({
      imports(entries) {
        observeImports(new Map(entries), "./commons.js", 0);
      },
      liveVar: {},
      onceVar: { tameDomains: cells[32].tameDomains.set },
      importMeta: {}
    }),
    functors[33]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "../commons.js", 0), observeImports(map, "./types.js", 5), observeImports(map, "./internal-types.js", 6);
      },
      liveVar: {},
      onceVar: {
        makeLoggingConsoleKit: cells[33].makeLoggingConsoleKit.set,
        makeCausalConsole: cells[33].makeCausalConsole.set,
        filterConsole: cells[33].filterConsole.set,
        consoleWhitelist: cells[33].consoleWhitelist.set
      },
      importMeta: {}
    }),
    functors[34]({
      imports(entries) {
        observeImports(new Map(entries), "../commons.js", 0);
      },
      liveVar: {},
      onceVar: { makeRejectionHandlers: cells[34].makeRejectionHandlers.set },
      importMeta: {}
    }),
    functors[35]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "../commons.js", 0),
          observeImports(map, "./assert.js", 8),
          observeImports(map, "./console.js", 33),
          observeImports(map, "./unhandled-rejection.js", 34),
          observeImports(map, "./types.js", 5),
          observeImports(map, "./internal-types.js", 6);
      },
      liveVar: {},
      onceVar: { tameConsole: cells[35].tameConsole.set },
      importMeta: {}
    }),
    functors[36]({
      imports(entries) {
        observeImports(new Map(entries), "../commons.js", 0);
      },
      liveVar: {},
      onceVar: {
        filterFileName: cells[36].filterFileName.set,
        shortenCallSiteString: cells[36].shortenCallSiteString.set,
        tameV8ErrorConstructor: cells[36].tameV8ErrorConstructor.set
      },
      importMeta: {}
    }),
    functors[37]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "../commons.js", 0),
          observeImports(map, "../permits.js", 10),
          observeImports(map, "./tame-v8-error-constructor.js", 36);
      },
      liveVar: {},
      onceVar: { default: cells[37].default.set },
      importMeta: {}
    }),
    functors[38]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "./commons.js", 0), observeImports(map, "./error/assert.js", 8);
      },
      liveVar: {},
      onceVar: { makeAlias: cells[38].makeAlias.set, load: cells[38].load.set },
      importMeta: {}
    }),
    functors[39]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "./module-load.js", 38), observeImports(map, "./commons.js", 0), observeImports(map, "./error/assert.js", 8);
      },
      liveVar: {},
      onceVar: { deferExports: cells[39].deferExports.set, getDeferredExports: cells[39].getDeferredExports.set },
      importMeta: {}
    }),
    functors[40]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "./commons.js", 0),
          observeImports(map, "./transforms.js", 27),
          observeImports(map, "./make-safe-evaluator.js", 30);
      },
      liveVar: {},
      onceVar: {
        provideCompartmentEvaluator: cells[40].provideCompartmentEvaluator.set,
        compartmentEvaluate: cells[40].compartmentEvaluate.set
      },
      importMeta: {}
    }),
    functors[41]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "./error/assert.js", 8),
          observeImports(map, "./module-proxy.js", 39),
          observeImports(map, "./commons.js", 0),
          observeImports(map, "./compartment-evaluate.js", 40);
      },
      liveVar: {},
      onceVar: {
        makeThirdPartyModuleInstance: cells[41].makeThirdPartyModuleInstance.set,
        makeModuleInstance: cells[41].makeModuleInstance.set
      },
      importMeta: {}
    }),
    functors[42]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "./error/assert.js", 8),
          observeImports(map, "./module-instance.js", 41),
          observeImports(map, "./commons.js", 0);
      },
      liveVar: {},
      onceVar: { link: cells[42].link.set, instantiate: cells[42].instantiate.set },
      importMeta: {}
    }),
    functors[43]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "./commons.js", 0),
          observeImports(map, "./global-object.js", 22),
          observeImports(map, "./permits.js", 10),
          observeImports(map, "./module-load.js", 38),
          observeImports(map, "./module-link.js", 42),
          observeImports(map, "./module-proxy.js", 39),
          observeImports(map, "./error/assert.js", 8),
          observeImports(map, "./compartment-evaluate.js", 40),
          observeImports(map, "./make-safe-evaluator.js", 30);
      },
      liveVar: {},
      onceVar: {
        InertCompartment: cells[43].InertCompartment.set,
        CompartmentPrototype: cells[43].CompartmentPrototype.set,
        makeCompartmentConstructor: cells[43].makeCompartmentConstructor.set
      },
      importMeta: {}
    }),
    functors[44]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "./commons.js", 0), observeImports(map, "./compartment.js", 43);
      },
      liveVar: {},
      onceVar: { getAnonymousIntrinsics: cells[44].getAnonymousIntrinsics.set },
      importMeta: {}
    }),
    functors[45]({
      imports(entries) {
        observeImports(new Map(entries), "./commons.js", 0);
      },
      liveVar: {},
      onceVar: { tameHarden: cells[45].tameHarden.set },
      importMeta: {}
    }),
    functors[46]({
      imports(entries) {
        observeImports(new Map(entries), "./commons.js", 0);
      },
      liveVar: {},
      onceVar: { tameSymbolConstructor: cells[46].tameSymbolConstructor.set },
      importMeta: {}
    }),
    functors[47]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "@endo/env-options", 3),
          observeImports(map, "./commons.js", 0),
          observeImports(map, "./make-hardener.js", 9),
          observeImports(map, "./intrinsics.js", 11),
          observeImports(map, "./permits-intrinsics.js", 12),
          observeImports(map, "./tame-function-constructors.js", 13),
          observeImports(map, "./tame-date-constructor.js", 14),
          observeImports(map, "./tame-math-object.js", 15),
          observeImports(map, "./tame-regexp-constructor.js", 16),
          observeImports(map, "./enable-property-overrides.js", 18),
          observeImports(map, "./tame-locale-methods.js", 19),
          observeImports(map, "./global-object.js", 22),
          observeImports(map, "./make-safe-evaluator.js", 30),
          observeImports(map, "./permits.js", 10),
          observeImports(map, "./tame-function-tostring.js", 31),
          observeImports(map, "./tame-domains.js", 32),
          observeImports(map, "./error/tame-console.js", 35),
          observeImports(map, "./error/tame-error-constructor.js", 37),
          observeImports(map, "./error/assert.js", 8),
          observeImports(map, "./get-anonymous-intrinsics.js", 44),
          observeImports(map, "./compartment.js", 43),
          observeImports(map, "./tame-harden.js", 45),
          observeImports(map, "./tame-symbol-constructor.js", 46);
      },
      liveVar: {},
      onceVar: { repairIntrinsics: cells[47].repairIntrinsics.set },
      importMeta: {}
    }),
    functors[48]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "./assert-sloppy-mode.js", 1), observeImports(map, "./commons.js", 0), observeImports(map, "./lockdown.js", 47);
      },
      liveVar: {},
      onceVar: {},
      importMeta: {}
    }),
    functors[49]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "./commons.js", 0),
          observeImports(map, "./compartment.js", 43),
          observeImports(map, "./tame-function-tostring.js", 31),
          observeImports(map, "./intrinsics.js", 11);
      },
      liveVar: {},
      onceVar: {},
      importMeta: {}
    }),
    functors[50]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "./commons.js", 0), observeImports(map, "./error/assert.js", 8);
      },
      liveVar: {},
      onceVar: {},
      importMeta: {}
    }),
    functors[51]({
      imports(entries) {
        const map = new Map(entries);
        observeImports(map, "./src/lockdown-shim.js", 48),
          observeImports(map, "./src/compartment-shim.js", 49),
          observeImports(map, "./src/assert-shim.js", 50);
      },
      liveVar: {},
      onceVar: {},
      importMeta: {}
    }),
    cells[cells.length - 1]["*"].get();
})();
