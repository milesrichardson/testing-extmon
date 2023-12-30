/*! For license information please see vendors.js.LICENSE.txt */
(self.webpackChunkofficechromeextension = self.webpackChunkofficechromeextension || []).push([
  [216],
  {
    5601: (e, t, n) => {
      "use strict";
      n.d(t, { s: () => r });
      class i {
        constructor() {
          (this.img = ""),
            (this.html = ""),
            (this.text = ""),
            (this.pptSlide = ""),
            (this.pptObjectMetaData = ""),
            (this.pptObjectData = "");
        }
      }
      class r {
        constructor(e, t, n) {
          (this.availableCommands = [r.testCommand, r.pasteCommand, r.getClipboardDataCommand, r.getAvailableCommandsCommand]),
            (this.onPasteEventImage = (e) => {
              if (((this.imageBlobs = []), null === e.clipboardData)) return;
              const t = e.clipboardData.items;
              for (let e = 0; e < t.length; e += 1)
                if (this.imageReader.isImageFile(t[e])) {
                  const n = this.imageReader.getAsFile(t[e]);
                  null != n && this.imageBlobs.push(n);
                }
            }),
            (this.getClipboardData = (e) => {
              null !== e.clipboardData &&
                (this.onPasteEventImage(e),
                -1 !== e.clipboardData.types.indexOf("text/html") && (this.clipboardData.html = e.clipboardData.getData("text/html")),
                -1 !== e.clipboardData.types.indexOf("text/plain") && (this.clipboardData.text = e.clipboardData.getData("text/plain")),
                -1 !== e.clipboardData.types.indexOf("ppt/slides") && (this.clipboardData.pptSlide = e.clipboardData.getData("ppt/slides")),
                -1 !== e.clipboardData.types.indexOf("ppt/objectmetadata") &&
                  (this.clipboardData.pptObjectMetaData = e.clipboardData.getData("ppt/objectmetadata")),
                -1 !== e.clipboardData.types.indexOf("ppt/objectdata") &&
                  (this.clipboardData.pptObjectData = e.clipboardData.getData("ppt/objectdata")));
            }),
            (this.onPasteEventGetClipboardData = (e) => {
              this.getClipboardData(e), e.preventDefault();
            }),
            (this.logger = e),
            (this.imageReader = t),
            (this.window = n),
            (this.imageBlobs = []),
            (this.clipboardData = new i());
        }
        isTrustedSender(e) {
          var t;
          try {
            if (null === e) return !1;
            if (e.id) return !1;
            let n;
            if (e.origin) n = e.origin;
            else if (e.url) {
              const t = new URL(e.url);
              t.origin && (n = t.origin);
            }
            if (!n) return !1;
            return (
              null !==
                n.match(
                  /^https:\/\/((.*?(word-edit|powerpoint|onenote|excel|visio)\.(officeapps\.live\.com|partner\.officewebapps\.cn|gov\.online\.office365\.us|dod\.online\.office365\.us))|(project\.microsoft\.com)|(.*?(whiteboard\.microsoft\.com))|(whiteboard\.(office\.com|office365\.us|apps\.mil)))$/g
                ) || (null === (t = this.logger) || void 0 === t || t.trackEvent("copypaste_untrusted", { sender: e.url }), !1)
            );
          } catch (e) {
            return !1;
          }
        }
        handleGetAvailableCommands(e, t, n) {
          var i;
          if (!this.isTrustedSender(t)) return !1;
          try {
            n(this.availableCommands);
          } catch (e) {
            null === (i = this.logger) || void 0 === i || i.error(`handleGetAvailableCommands() - Exception: ${e.toString()}`);
          }
          return !1;
        }
        handleTestCommand(e, t, n) {
          var i, r;
          if (!this.isTrustedSender(t)) return !1;
          try {
            n(e.object);
          } catch (e) {
            null === (i = this.logger) || void 0 === i || i.error(`handleTestCommand() - Exception: ${e.toString()}`);
          }
          return null === (r = this.logger) || void 0 === r || r.trackEvent("CopyPaste_Test"), !1;
        }
        handleCopyCommand(e, t, n) {
          var i;
          return (
            !!this.isTrustedSender(t) &&
            (null === (i = this.logger) || void 0 === i || i.trackEvent("CopyPaste_Copy", { deprecated: !0 }), !1)
          );
        }
        handlePasteCommand(e, t, n) {
          var i, r;
          if (!this.isTrustedSender(t)) return !1;
          let o = !1,
            a = null;
          try {
            (a = this.getCopyPasteSandbox()),
              (a.innerHTML = ""),
              a.focus(),
              document.execCommand("selectAll"),
              this.window.addEventListener("paste", this.onPasteEventImage),
              document.execCommand("paste") &&
                (this.imageBlobs.length > 0
                  ? (this.imageReader.readImages(this.imageBlobs, function (e) {
                      n(e);
                    }),
                    (o = !0))
                  : n(a.innerHTML));
          } catch (e) {
            null === (i = this.logger) || void 0 === i || i.error(`handlePasteCommand() - Exception: ${e.toString()}`);
          }
          return (
            null !== a && (a.innerHTML = ""),
            this.window.removeEventListener("paste", this.onPasteEventImage),
            null === (r = this.logger) || void 0 === r || r.trackEvent("CopyPaste_Paste", { IsPrefetchedImage: o }),
            o
          );
        }
        handleGetClipboardDataCommand(e, t, n) {
          var r;
          if (!this.isTrustedSender(t)) return !1;
          let o = !1,
            a = null;
          try {
            (a = this.getCopyPasteSandbox()),
              a.focus(),
              (this.clipboardData = new i()),
              this.window.addEventListener("paste", this.onPasteEventGetClipboardData),
              document.execCommand("paste") &&
                (this.imageBlobs.length > 0
                  ? (this.imageReader.readImages(this.imageBlobs, (e) => {
                      (this.clipboardData.img = e), n(this.clipboardData);
                    }),
                    (o = !0))
                  : n(this.clipboardData));
          } catch (e) {
            null === (r = this.logger) || void 0 === r || r.error(`handleGetClipboardDataCommand() - Exception: ${e.toString()}`);
          }
          return this.window.removeEventListener("paste", this.onPasteEventGetClipboardData), o;
        }
        getCopyPasteSandbox() {
          let e = document.getElementById("copyPasteSandbox");
          if (!e) {
            const t = document.createElement("div");
            (t.contentEditable = !0), (e = document.body.appendChild(t));
          }
          return e;
        }
      }
      (r.testCommand = "test"),
        (r.pasteCommand = "paste"),
        (r.getClipboardDataCommand = "getClipboardData"),
        (r.getAvailableCommandsCommand = "getAvailableCommands");
    },
    6966: (e, t, n) => {
      "use strict";
      n.d(t, { H: () => i });
      class i {
        constructor() {
          (this.onloadend = null),
            (this.onerror = null),
            (this.onabort = null),
            (this.reader = void 0),
            (this.onloadendInternal = (e) => {
              null !== this.onloadend && this.onloadend(e);
            }),
            (this.onabortInternal = (e) => {
              null !== this.onabort && this.onabort(e);
            }),
            (this.onerrorInternal = (e) => {
              null !== this.onerror && this.onerror(e);
            });
        }
        readAsDataURL(e) {
          void 0 === this.reader &&
            ((this.reader = new FileReader()),
            (this.reader.onloadend = this.onloadendInternal),
            (this.reader.onabort = this.onabortInternal),
            (this.reader.onerror = this.onerrorInternal)),
            void 0 !== this.reader && this.reader.readAsDataURL(e);
        }
        isBlob(e) {
          return e && e instanceof Blob;
        }
      }
    },
    459: (e, t, n) => {
      "use strict";
      n.d(t, { T: () => i });
      class i {
        constructor(e, t) {
          (this.fileReaderHandlersDefined = !1),
            (this.onLoadEnd = (e) => {
              null !== e.target && null !== e.target.result && (this.imageHtml += '<img src="' + e.target.result + '">'), this.readImage();
            }),
            (this.onAbort = (e) => {
              var t;
              null === (t = this.logger) || void 0 === t || t.error("imageReader::onAbort() - readAsDataURL was aborted."),
                this.readImage();
            }),
            (this.onError = (e) => {
              var t;
              null === (t = this.logger) || void 0 === t || t.error("imageReader::onError() - error happens in readAsDataURL()"),
                this.readImage();
            }),
            (this.logger = e),
            (this.FileReaderEx = t),
            (this.imageBlobs = []),
            (this.imageHtmlCallback = (e) => {}),
            (this.imageHtml = "");
        }
        isImageFile(e) {
          return "file" === e.kind && -1 !== e.type.indexOf("image/");
        }
        getAsFile(e) {
          return e.getAsFile();
        }
        readImages(e, t) {
          (this.imageBlobs = e),
            (this.imageHtmlCallback = t),
            (this.imageHtml = ""),
            this.fileReaderHandlersDefined ||
              ((this.FileReaderEx.onloadend = this.onLoadEnd),
              (this.FileReaderEx.onabort = this.onAbort),
              (this.FileReaderEx.onerror = this.onError),
              (this.fileReaderHandlersDefined = !0)),
            this.readImage();
        }
        readImage() {
          if (0 === this.imageBlobs.length) this.imageHtmlCallback(this.imageHtml);
          else {
            const e = this.imageBlobs.shift();
            if (!this.FileReaderEx.isBlob(e)) return void this.readImage();
            this.FileReaderEx.readAsDataURL(e);
          }
        }
      }
    },
    1247: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e) {
          (e[(e._BT_STOP = 0)] = "_BT_STOP"),
            (e[(e._BT_STOP_BASE = 1)] = "_BT_STOP_BASE"),
            (e[(e._BT_BOOL = 2)] = "_BT_BOOL"),
            (e[(e._BT_DOUBLE = 8)] = "_BT_DOUBLE"),
            (e[(e._BT_STRING = 9)] = "_BT_STRING"),
            (e[(e._BT_STRUCT = 10)] = "_BT_STRUCT"),
            (e[(e._BT_LIST = 11)] = "_BT_LIST"),
            (e[(e._BT_MAP = 13)] = "_BT_MAP"),
            (e[(e._BT_INT32 = 16)] = "_BT_INT32"),
            (e[(e._BT_INT64 = 17)] = "_BT_INT64");
        })(t._BondDataType || (t._BondDataType = {}));
    },
    6601: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(1953),
        r = n(8833),
        o = n(1486);
      (t._Utf8_GetBytes = function (e) {
        for (var t = [], n = 0; n < e.length; ++n) {
          var i = e.charCodeAt(n);
          i < 128
            ? t.push(i)
            : i < 2048
            ? t.push(192 | (i >> 6), 128 | (63 & i))
            : i < 55296 || i >= 57344
            ? t.push(224 | (i >> 12), 128 | ((i >> 6) & 63), 128 | (63 & i))
            : ((i = 65536 + (((1023 & i) << 10) | (1023 & e.charCodeAt(++n)))),
              t.push(240 | (i >> 18), 128 | ((i >> 12) & 63), 128 | ((i >> 6) & 63), 128 | (63 & i)));
        }
        return t;
      }),
        (t._Base64_GetString = function (e) {
          for (
            var t,
              n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              i = [],
              r = e.length % 3,
              o = 0,
              a = e.length - r;
            o < a;
            o += 3
          ) {
            var s = (e[o] << 16) + (e[o + 1] << 8) + e[o + 2];
            i.push([n.charAt(((t = s) >> 18) & 63), n.charAt((t >> 12) & 63), n.charAt((t >> 6) & 63), n.charAt(63 & t)].join(""));
          }
          switch (r) {
            case 1:
              s = e[e.length - 1];
              i.push(n.charAt(s >> 2)), i.push(n.charAt((s << 4) & 63)), i.push("==");
              break;
            case 2:
              var u = (e[e.length - 2] << 8) + e[e.length - 1];
              i.push(n.charAt(u >> 10)), i.push(n.charAt((u >> 4) & 63)), i.push(n.charAt((u << 2) & 63)), i.push("=");
          }
          return i.join("");
        }),
        (t._Varint_GetBytes = function (e) {
          for (var t = []; 4294967168 & e; ) t.push((127 & e) | 128), (e >>>= 7);
          return t.push(127 & e), t;
        }),
        (t._Varint64_GetBytes = function (e) {
          for (var t = e.low, n = e.high, i = []; n || 4294967168 & t; )
            i.push((127 & t) | 128), (t = ((127 & n) << 25) | (t >>> 7)), (n >>>= 7);
          return i.push(127 & t), i;
        }),
        (t._Double_GetBytes = function (e) {
          if (o.BrowserChecker._IsDataViewSupport()) {
            var t = new DataView(new ArrayBuffer(8));
            t.setFloat64(0, e, !0);
            for (var n = [], i = 0; i < 8; ++i) n.push(t.getUint8(i));
            return n;
          }
          return r.FloatUtils._ConvertNumberToArray(e, !0);
        }),
        (t._Zigzag_EncodeZigzag32 = function (e) {
          return ((e = i.Number._ToInt32(e)) << 1) ^ (e >> 31);
        }),
        (t._Zigzag_EncodeZigzag64 = function (e) {
          var t = e.low,
            n = e.high,
            r = (n << 1) | (t >>> 31),
            o = t << 1;
          2147483648 & n && ((r = ~r), (o = ~o));
          var a = new i.UInt64("0");
          return (a.low = o), (a.high = r), a;
        });
    },
    8833: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function () {
        function e() {}
        return (
          (e._ConvertNumberToArray = function (e, t) {
            if (!e) return t ? this._doubleZero : this._floatZero;
            var n = t ? 52 : 23,
              i = (1 << ((t ? 11 : 8) - 1)) - 1,
              r = 1 - i,
              o = i,
              a = e < 0 ? 1 : 0;
            e = Math.abs(e);
            for (var s = Math.floor(e), u = e - s, c = 2 * (i + 2) + n, l = new Array(c), d = 0; d < c; ) l[d++] = 0;
            for (d = i + 2; d && s; ) (l[--d] = s % 2), (s = Math.floor(s / 2));
            for (d = i + 1; d < c - 1 && u > 0; ) (u *= 2) >= 1 ? ((l[++d] = 1), --u) : (l[++d] = 0);
            for (var f = 0; f < c && !l[f]; ) f++;
            var h = i + 1 - f,
              p = f + n;
            if (l[p + 1]) {
              for (d = p; d > f && ((l[d] = 1 - l[d]), !l); --d);
              d === f && ++h;
            }
            if (h > o || s)
              return a ? (t ? this._doubleNegInifinity : this._floatNegInifinity) : t ? this._doubleInifinity : this._floatInifinity;
            if (h < r) return t ? this._doubleZero : this._floatZero;
            if (t) {
              var v = 0;
              for (d = 0; d < 20; ++d) v = (v << 1) | l[++f];
              for (var m = 0; d < 52; ++d) m = (m << 1) | l[++f];
              return [
                255 & m,
                (m >> 8) & 255,
                (m >> 16) & 255,
                m >>> 24,
                255 & (v = (a << 31) | (2147483647 & (v |= (h + i) << 20))),
                (v >> 8) & 255,
                (v >> 16) & 255,
                v >>> 24
              ];
            }
            var g = 0;
            for (d = 0; d < 23; ++d) g = (g << 1) | l[++f];
            return [255 & (g = (a << 31) | (2147483647 & (g |= (h + i) << 23))), (g >> 8) & 255, (g >> 16) & 255, g >>> 24];
          }),
          (e._floatZero = [0, 0, 0, 0]),
          (e._doubleZero = [0, 0, 0, 0, 0, 0, 0, 0]),
          (e._floatInifinity = [0, 0, 128, 127]),
          (e._floatNegInifinity = [0, 0, 128, 255]),
          (e._doubleInifinity = [0, 0, 0, 0, 0, 0, 240, 127]),
          (e._doubleNegInifinity = [0, 0, 0, 0, 0, 0, 240, 255]),
          e
        );
      })();
      t.FloatUtils = n;
    },
    6532: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(1953),
        r = (function () {
          function e() {
            this._buffer = [];
          }
          return (
            (e.prototype._WriteByte = function (e) {
              this._buffer.push(i.Number._ToByte(e));
            }),
            (e.prototype._Write = function (e, t, n) {
              for (; n--; ) this._WriteByte(e[t++]);
            }),
            (e.prototype._GetBuffer = function () {
              return this._buffer;
            }),
            e
          );
        })();
      t.MemoryStream = r;
    },
    5347: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(1247);
      t._BondDataType = i._BondDataType;
      var r = n(6601);
      t._Encoding = r;
      var o = n(6532);
      t.IO = o;
      var a = n(1953);
      (t.Int64 = a.Int64), (t.UInt64 = a.UInt64), (t.Number = a.Number);
      var s = (function () {
        function e(e) {
          this._stream = e;
        }
        return (
          (e.prototype._WriteBlob = function (e) {
            this._stream._Write(e, 0, e.length);
          }),
          (e.prototype._WriteBool = function (e) {
            this._stream._WriteByte(e ? 1 : 0);
          }),
          (e.prototype._WriteContainerBegin = function (e, t) {
            this._WriteUInt8(t), this._WriteUInt32(e);
          }),
          (e.prototype._WriteMapContainerBegin = function (e, t, n) {
            this._WriteUInt8(t), this._WriteUInt8(n), this._WriteUInt32(e);
          }),
          (e.prototype._WriteDouble = function (e) {
            var t = r._Double_GetBytes(e);
            this._stream._Write(t, 0, t.length);
          }),
          (e.prototype._WriteFieldBegin = function (e, t, n) {
            t <= 5
              ? this._stream._WriteByte(e | (t << 5))
              : t <= 255
              ? (this._stream._WriteByte(192 | e), this._stream._WriteByte(t))
              : (this._stream._WriteByte(224 | e), this._stream._WriteByte(t), this._stream._WriteByte(t >> 8));
          }),
          (e.prototype._WriteInt32 = function (e) {
            (e = r._Zigzag_EncodeZigzag32(e)), this._WriteUInt32(e);
          }),
          (e.prototype._WriteInt64 = function (e) {
            this._WriteUInt64(r._Zigzag_EncodeZigzag64(e));
          }),
          (e.prototype._WriteString = function (e) {
            if ("" === e) this._WriteUInt32(0);
            else {
              var t = r._Utf8_GetBytes(e);
              this._WriteUInt32(t.length), this._stream._Write(t, 0, t.length);
            }
          }),
          (e.prototype._WriteStructEnd = function (e) {
            this._WriteUInt8(e ? i._BondDataType._BT_STOP_BASE : i._BondDataType._BT_STOP);
          }),
          (e.prototype._WriteUInt32 = function (e) {
            var t = r._Varint_GetBytes(a.Number._ToUInt32(e));
            this._stream._Write(t, 0, t.length);
          }),
          (e.prototype._WriteUInt64 = function (e) {
            var t = r._Varint64_GetBytes(e);
            this._stream._Write(t, 0, t.length);
          }),
          (e.prototype._WriteUInt8 = function (e) {
            this._stream._WriteByte(a.Number._ToUInt8(e));
          }),
          e
        );
      })();
      t.CompactBinaryProtocolWriter = s;
    },
    1953: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function () {
        function e(e) {
          (this.low = 0), (this.high = 0), (this.low = parseInt(e, 10)), this.low < 0 && (this.high = -1);
        }
        return (
          (e.prototype._Equals = function (t) {
            var n = new e(t);
            return this.low === n.low && this.high === n.high;
          }),
          e
        );
      })();
      t.Int64 = n;
      var i = (function () {
        function e(e) {
          (this.low = 0), (this.high = 0), (this.low = parseInt(e, 10));
        }
        return (
          (e.prototype._Equals = function (t) {
            var n = new e(t);
            return this.low === n.low && this.high === n.high;
          }),
          e
        );
      })();
      t.UInt64 = i;
      var r = (function () {
        function e() {}
        return (
          (e._ToByte = function (e) {
            return this._ToUInt8(e);
          }),
          (e._ToUInt8 = function (e) {
            return 255 & e;
          }),
          (e._ToInt32 = function (e) {
            return (2147483647 & e) | (2147483648 & e);
          }),
          (e._ToUInt32 = function (e) {
            return 4294967295 & e;
          }),
          e
        );
      })();
      t.Number = r;
    },
    1486: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function () {
        function e() {}
        return (
          (e._IsDataViewSupport = function () {
            return "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView;
          }),
          e
        );
      })();
      t.BrowserChecker = n;
    },
    6100: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function () {
        function e() {
          (this._allowRequestSending = !0),
            (this._shouldAddClockSkewHeaders = !0),
            (this._isFirstRequest = !0),
            (this._clockSkewHeaderValue = "use-collector-delta"),
            (this._clockSkewSet = !1);
        }
        return (
          (e.prototype.allowRequestSending = function () {
            return this._isFirstRequest ? ((this._isFirstRequest = !1), (this._allowRequestSending = !1), !0) : this._allowRequestSending;
          }),
          (e.prototype.shouldAddClockSkewHeaders = function () {
            return this._shouldAddClockSkewHeaders;
          }),
          (e.prototype.getClockSkewHeaderValue = function () {
            return this._clockSkewHeaderValue;
          }),
          (e.prototype.setClockSkew = function (e) {
            this._clockSkewSet ||
              (e ? (this._clockSkewHeaderValue = e) : (this._shouldAddClockSkewHeaders = !1),
              (this._clockSkewSet = !0),
              (this._allowRequestSending = !0));
          }),
          e
        );
      })();
      t.default = n;
    },
    7350: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function () {
        function e() {
          this._killedTokenDictionary = {};
        }
        return (
          (e.prototype.setKillSwitchTenants = function (e, t) {
            if (e && t)
              try {
                var n = e.split(",");
                if ("this-request-only" === t) return n;
                for (var i = 1e3 * parseInt(t, 10), r = 0; r < n.length; ++r) this._killedTokenDictionary[n[r]] = Date.now() + i;
              } catch (e) {
                return [];
              }
            return [];
          }),
          (e.prototype.isTenantKilled = function (e) {
            return (
              (void 0 !== this._killedTokenDictionary[e] && this._killedTokenDictionary[e] > Date.now()) ||
              (delete this._killedTokenDictionary[e], !1)
            );
          }),
          e
        );
      })();
      t.default = n;
    },
    3870: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function () {
        function e() {}
        return (
          (e.addNotificationListener = function (e) {
            this.listeners.push(e);
          }),
          (e.eventsSent = function (e) {
            for (
              var t = this,
                n = function (n) {
                  i.listeners[n].eventsSent &&
                    setTimeout(function () {
                      return t.listeners[n].eventsSent(e);
                    }, 0);
                },
                i = this,
                r = 0;
              r < this.listeners.length;
              ++r
            )
              n(r);
          }),
          (e.eventsDropped = function (e, t) {
            for (
              var n = this,
                i = function (i) {
                  r.listeners[i].eventsDropped &&
                    setTimeout(function () {
                      return n.listeners[i].eventsDropped(e, t);
                    }, 0);
                },
                r = this,
                o = 0;
              o < this.listeners.length;
              ++o
            )
              i(o);
          }),
          (e.eventsRetrying = function (e) {
            for (
              var t = this,
                n = function (n) {
                  i.listeners[n].eventsRetrying &&
                    setTimeout(function () {
                      return t.listeners[n].eventsRetrying(e);
                    }, 0);
                },
                i = this,
                r = 0;
              r < this.listeners.length;
              ++r
            )
              n(r);
          }),
          (e.eventsRejected = function (e, t) {
            for (
              var n = this,
                i = function (i) {
                  r.listeners[i].eventsRejected &&
                    setTimeout(function () {
                      return n.listeners[i].eventsRejected(e, t);
                    }, 0);
                },
                r = this,
                o = 0;
              o < this.listeners.length;
              ++o
            )
              i(o);
          }),
          (e.listeners = []),
          e
        );
      })();
      t.default = n;
    },
    7400: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(3870),
        r = n(1239),
        o = (function () {
          function e(e, t) {
            (this._maxRequestSize = e), (this._outboundQueue = t), (this._currentBatch = {}), (this._currentBatchSize = 0);
          }
          return (
            (e.prototype.addEventToBatch = function (e) {
              e.serializedEvent.length > this._maxRequestSize
                ? i.default.eventsRejected([e], r.AWTEventsRejectedReason.SizeLimitExceeded)
                : (this._currentBatchSize + e.serializedEvent.length > this._maxRequestSize && this.flushBatch(),
                  void 0 === this._currentBatch[e.apiKey] && (this._currentBatch[e.apiKey] = []),
                  this._currentBatch[e.apiKey].push(e),
                  (this._currentBatchSize += e.serializedEvent.length));
            }),
            (e.prototype.flushBatch = function () {
              this._currentBatchSize > 0 &&
                (this._outboundQueue.push(this._currentBatch), (this._currentBatch = {}), (this._currentBatchSize = 0));
            }),
            (e.prototype.hasBatch = function () {
              return this._currentBatchSize > 0;
            }),
            e
          );
        })();
      t.default = o;
    },
    3854: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function () {
        function e() {}
        return (
          (e.shouldRetryForStatus = function (e) {
            return !((e >= 300 && e < 500 && 408 !== e) || 501 === e || 505 === e);
          }),
          (e.getMillisToBackoffForRetry = function (e) {
            var t,
              n = Math.floor(1200 * Math.random()) + 2400;
            return (t = Math.pow(4, e) * n), Math.min(t, 12e4);
          }),
          e
        );
      })();
      t.default = n;
    },
    9687: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(5347),
        r = n(1239),
        o = n(458),
        a = (function () {
          function e() {}
          return (
            (e.getPayloadBlob = function (e, t) {
              var n = new i.IO.MemoryStream(),
                r = new i.CompactBinaryProtocolWriter(n);
              for (var a in (r._WriteFieldBegin(i._BondDataType._BT_MAP, 3, null),
              r._WriteMapContainerBegin(t, i._BondDataType._BT_STRING, i._BondDataType._BT_LIST),
              e))
                if (e.hasOwnProperty(a)) {
                  r._WriteString(a);
                  var s = e[a];
                  r._WriteContainerBegin(1, i._BondDataType._BT_STRUCT),
                    r._WriteFieldBegin(i._BondDataType._BT_STRING, 2, null),
                    r._WriteString("act_default_source"),
                    r._WriteFieldBegin(i._BondDataType._BT_STRING, 5, null),
                    r._WriteString(o.newGuid()),
                    r._WriteFieldBegin(i._BondDataType._BT_INT64, 6, null),
                    r._WriteInt64(o.numberToBondInt64(Date.now())),
                    r._WriteFieldBegin(i._BondDataType._BT_LIST, 8, null),
                    r._WriteContainerBegin(s.length, i._BondDataType._BT_STRUCT);
                  for (var u = 0; u < s.length; ++u) r._WriteBlob(s[u].serializedEvent);
                  r._WriteStructEnd(!1);
                }
              return r._WriteStructEnd(!1), n._GetBuffer();
            }),
            (e.getEventBlob = function (e) {
              var t = new i.IO.MemoryStream(),
                n = new i.CompactBinaryProtocolWriter(t);
              n._WriteFieldBegin(i._BondDataType._BT_STRING, 1, null),
                n._WriteString(e.id),
                n._WriteFieldBegin(i._BondDataType._BT_INT64, 3, null),
                n._WriteInt64(o.numberToBondInt64(e.timestamp)),
                n._WriteFieldBegin(i._BondDataType._BT_STRING, 5, null),
                n._WriteString(e.type),
                n._WriteFieldBegin(i._BondDataType._BT_STRING, 6, null),
                n._WriteString(e.name);
              var a = {},
                s = 0,
                u = {},
                c = 0,
                l = {},
                d = 0,
                f = {},
                h = 0,
                p = {},
                v = 0,
                m = {},
                g = 0;
              for (var y in e.properties) {
                if (e.properties.hasOwnProperty(y))
                  if (($ = e.properties[y]).cc > 0) (m[y] = $), g++;
                  else if ($.pii > 0) (p[y] = $), v++;
                  else
                    switch ($.type) {
                      case r.AWTPropertyType.String:
                        (a[y] = $.value), s++;
                        break;
                      case r.AWTPropertyType.Int64:
                        (u[y] = $.value), c++;
                        break;
                      case r.AWTPropertyType.Double:
                        (l[y] = $.value), d++;
                        break;
                      case r.AWTPropertyType.Boolean:
                        (f[y] = $.value), h++;
                    }
              }
              if (s)
                for (var y in (n._WriteFieldBegin(i._BondDataType._BT_MAP, 13, null),
                n._WriteMapContainerBegin(s, i._BondDataType._BT_STRING, i._BondDataType._BT_STRING),
                a))
                  if (a.hasOwnProperty(y)) {
                    var _ = a[y];
                    n._WriteString(y), n._WriteString(_.toString());
                  }
              if (v)
                for (var y in (n._WriteFieldBegin(i._BondDataType._BT_MAP, 30, null),
                n._WriteMapContainerBegin(v, i._BondDataType._BT_STRING, i._BondDataType._BT_STRUCT),
                p))
                  if (p.hasOwnProperty(y)) {
                    var $ = p[y];
                    n._WriteString(y),
                      n._WriteFieldBegin(i._BondDataType._BT_INT32, 1, null),
                      n._WriteInt32(1),
                      n._WriteFieldBegin(i._BondDataType._BT_INT32, 2, null),
                      n._WriteInt32($.pii),
                      n._WriteFieldBegin(i._BondDataType._BT_STRING, 3, null),
                      n._WriteString($.value.toString()),
                      n._WriteStructEnd(!1);
                  }
              if (h)
                for (var y in (n._WriteFieldBegin(i._BondDataType._BT_MAP, 31, null),
                n._WriteMapContainerBegin(h, i._BondDataType._BT_STRING, i._BondDataType._BT_BOOL),
                f))
                  if (f.hasOwnProperty(y)) {
                    _ = f[y];
                    n._WriteString(y), n._WriteBool(_);
                  }
              if (c)
                for (var y in (n._WriteFieldBegin(i._BondDataType._BT_MAP, 33, null),
                n._WriteMapContainerBegin(c, i._BondDataType._BT_STRING, i._BondDataType._BT_INT64),
                u))
                  if (u.hasOwnProperty(y)) {
                    _ = u[y];
                    n._WriteString(y), n._WriteInt64(o.numberToBondInt64(_));
                  }
              if (d)
                for (var y in (n._WriteFieldBegin(i._BondDataType._BT_MAP, 34, null),
                n._WriteMapContainerBegin(d, i._BondDataType._BT_STRING, i._BondDataType._BT_DOUBLE),
                l))
                  if (l.hasOwnProperty(y)) {
                    _ = l[y];
                    n._WriteString(y), n._WriteDouble(_);
                  }
              if (g)
                for (var y in (n._WriteFieldBegin(i._BondDataType._BT_MAP, 36, null),
                n._WriteMapContainerBegin(g, i._BondDataType._BT_STRING, i._BondDataType._BT_STRUCT),
                m))
                  if (m.hasOwnProperty(y)) {
                    $ = m[y];
                    n._WriteString(y),
                      n._WriteFieldBegin(i._BondDataType._BT_INT32, 1, null),
                      n._WriteInt32($.cc),
                      n._WriteFieldBegin(i._BondDataType._BT_STRING, 2, null),
                      n._WriteString($.value.toString()),
                      n._WriteStructEnd(!1);
                  }
              return n._WriteStructEnd(!1), t._GetBuffer();
            }),
            (e.base64Encode = function (e) {
              return i._Encoding._Base64_GetString(e);
            }),
            e
          );
        })();
      t.default = a;
    },
    3492: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(458),
        r = n(3870),
        o = (function () {
          function e() {}
          return (
            (e.initialize = function (e) {
              var t = this;
              (this._sendStats = e),
                (this._isInitalized = !0),
                r.default.addNotificationListener({
                  eventsSent: function (e) {
                    t._addStat("records_sent_count", e.length, e[0].apiKey);
                  },
                  eventsDropped: function (e, n) {
                    t._addStat("records_dropped_count", e.length, e[0].apiKey);
                  },
                  eventsRejected: function (e, n) {
                    t._addStat("r_count", e.length, e[0].apiKey);
                  },
                  eventsRetrying: null
                }),
                setTimeout(function () {
                  return t.flush();
                }, 6e4);
            }),
            (e.teardown = function () {
              this._isInitalized && (this.flush(), (this._isInitalized = !1));
            }),
            (e.eventReceived = function (t) {
              e._addStat("records_received_count", 1, t);
            }),
            (e.flush = function () {
              var e = this;
              if (this._isInitalized) {
                for (var t in this._stats) this._stats.hasOwnProperty(t) && this._sendStats(this._stats[t], t);
                (this._stats = {}),
                  setTimeout(function () {
                    return e.flush();
                  }, 6e4);
              }
            }),
            (e._addStat = function (e, t, n) {
              if (this._isInitalized && n !== i.StatsApiKey) {
                var r = i.getTenantId(n);
                this._stats[r] || (this._stats[r] = {}),
                  this._stats[r][e] ? (this._stats[r][e] = this._stats[r][e] + t) : (this._stats[r][e] = t);
              }
            }),
            (e._isInitalized = !1),
            (e._stats = {}),
            e
          );
        })();
      t.default = o;
    },
    1239: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e) {
          (e[(e.Unspecified = 0)] = "Unspecified"),
            (e[(e.String = 1)] = "String"),
            (e[(e.Int64 = 2)] = "Int64"),
            (e[(e.Double = 3)] = "Double"),
            (e[(e.Boolean = 4)] = "Boolean");
        })(t.AWTPropertyType || (t.AWTPropertyType = {})),
        (function (e) {
          (e[(e.NotSet = 0)] = "NotSet"),
            (e[(e.DistinguishedName = 1)] = "DistinguishedName"),
            (e[(e.GenericData = 2)] = "GenericData"),
            (e[(e.IPV4Address = 3)] = "IPV4Address"),
            (e[(e.IPv6Address = 4)] = "IPv6Address"),
            (e[(e.MailSubject = 5)] = "MailSubject"),
            (e[(e.PhoneNumber = 6)] = "PhoneNumber"),
            (e[(e.QueryString = 7)] = "QueryString"),
            (e[(e.SipAddress = 8)] = "SipAddress"),
            (e[(e.SmtpAddress = 9)] = "SmtpAddress"),
            (e[(e.Identity = 10)] = "Identity"),
            (e[(e.Uri = 11)] = "Uri"),
            (e[(e.Fqdn = 12)] = "Fqdn"),
            (e[(e.IPV4AddressLegacy = 13)] = "IPV4AddressLegacy");
        })(t.AWTPiiKind || (t.AWTPiiKind = {})),
        (function (e) {
          (e[(e.NotSet = 0)] = "NotSet"), (e[(e.GenericContent = 1)] = "GenericContent");
        })(t.AWTCustomerContentKind || (t.AWTCustomerContentKind = {})),
        (function (e) {
          (e[(e.Low = 1)] = "Low"), (e[(e.Normal = 2)] = "Normal"), (e[(e.High = 3)] = "High");
        })(t.AWTEventPriority || (t.AWTEventPriority = {})),
        (function (e) {
          (e[(e.NonRetryableStatus = 1)] = "NonRetryableStatus"),
            (e[(e.KillSwitch = 2)] = "KillSwitch"),
            (e[(e.QueueFull = 3)] = "QueueFull");
        })(t.AWTEventsDroppedReason || (t.AWTEventsDroppedReason = {})),
        (function (e) {
          (e[(e.InvalidEvent = 1)] = "InvalidEvent"), (e[(e.SizeLimitExceeded = 2)] = "SizeLimitExceeded");
        })(t.AWTEventsRejectedReason || (t.AWTEventsRejectedReason = {}));
    },
    458: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(1953),
        r = n(1239),
        o = /[xy]/g;
      (t.EventNameAndTypeRegex = /^[a-zA-Z]([a-zA-Z0-9]|_){2,98}[a-zA-Z0-9]$/),
        (t.EventNameDotRegex = /\./g),
        (t.PropertyNameRegex = /^[a-zA-Z](([a-zA-Z0-9|_|\.]){0,98}[a-zA-Z0-9])?$/),
        (t.StatsApiKey = "a387cfcf60114a43a7699f9fbb49289e-9bceb9fe-1c06-460f-96c5-6a0b247358bc-7238");
      var a = null,
        s = null,
        u = null;
      function c() {
        return !("undefined" == typeof navigator || !navigator.product) && "ReactNative" === navigator.product;
      }
      function l(e) {
        return e < 10 ? "0" + e : e.toString();
      }
      (t.numberToBondInt64 = function (e) {
        var t = new i.Int64("0");
        return (t.low = 4294967295 & e), (t.high = Math.floor(e / 4294967296)), t;
      }),
        (t.newGuid = function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(o, function (e) {
            var t = (16 * Math.random()) | 0;
            return ("x" === e ? t : (3 & t) | 8).toString(16);
          });
        }),
        (t.isString = function (e) {
          return "string" == typeof e;
        }),
        (t.msToTicks = function (e) {
          return 1e4 * (e + 621355968e5);
        }),
        (t.getTenantId = function (e) {
          var t = e.indexOf("-");
          return t > -1 ? e.substring(0, t) : "";
        }),
        (t.isBeaconsSupported = function () {
          return null === a && (a = "undefined" != typeof navigator && Boolean(navigator.sendBeacon)), a;
        }),
        (t.isUint8ArrayAvailable = function () {
          return (
            null === s &&
              (s =
                "undefined" != typeof Uint8Array &&
                !(function () {
                  if ("undefined" != typeof navigator && navigator.userAgent) {
                    var e = navigator.userAgent.toLowerCase();
                    if ((e.indexOf("safari") >= 0 || e.indexOf("firefox") >= 0) && e.indexOf("chrome") < 0) return !0;
                  }
                  return !1;
                })() &&
                !c()),
            s
          );
        }),
        (t.isPriority = function (e) {
          return !isNaN(e) && null !== e && e >= 1 && e <= 3;
        }),
        (t.sanitizeProperty = function (e, n) {
          return (
            ("string" != typeof n && "number" != typeof n && "boolean" != typeof n) ||
              (n = { value: n, type: r.AWTPropertyType.Unspecified }),
            t.PropertyNameRegex.test(e) && null != n && null !== n.value && void 0 !== n.value && "" !== n.value
              ? ((n.type = (function (e, t) {
                  if (
                    !(function (e) {
                      if (!isNaN(e) && null !== e && e >= 0 && e <= 4) return !0;
                      return !1;
                    })(t) ||
                    t === r.AWTPropertyType.Unspecified
                  )
                    return (function (e) {
                      switch (typeof e) {
                        case "string":
                          return r.AWTPropertyType.String;
                        case "boolean":
                          return r.AWTPropertyType.Boolean;
                        case "number":
                          return r.AWTPropertyType.Double;
                      }
                      return r.AWTPropertyType.Unspecified;
                    })(e);
                  if (t === r.AWTPropertyType.String && "string" == typeof e) return t;
                  if ((t === r.AWTPropertyType.Double || t === r.AWTPropertyType.Int64) && "number" == typeof e)
                    return t === r.AWTPropertyType.Int64 && e % 1 != 0 ? null : t;
                  if (t === r.AWTPropertyType.Boolean && "boolean" == typeof e) return t;
                })(n.value, n.type)),
                n.type
                  ? (void 0 === n.pii && (n.pii = r.AWTPiiKind.NotSet),
                    void 0 === n.cc && (n.cc = r.AWTCustomerContentKind.NotSet),
                    !(function (e) {
                      if (!isNaN(e) && null !== e && e >= 0 && e <= 13) return !0;
                      return !1;
                    })(n.pii) ||
                    !(function (e) {
                      if (!isNaN(e) && null !== e && e >= 0 && e <= 1) return !0;
                      return !1;
                    })(n.cc) ||
                    (n.cc > 0 && n.pii !== r.AWTPiiKind.NotSet)
                      ? null
                      : n)
                  : null)
              : null
          );
        }),
        (t.getISOString = function (e) {
          return (
            e.getUTCFullYear() +
            "-" +
            l(e.getUTCMonth() + 1) +
            "-" +
            l(e.getUTCDate()) +
            "T" +
            l(e.getUTCHours()) +
            ":" +
            l(e.getUTCMinutes()) +
            ":" +
            l(e.getUTCSeconds()) +
            "." +
            (function (e) {
              if (e < 10) return "00" + e;
              if (e < 100) return "0" + e;
              return e.toString();
            })(e.getUTCMilliseconds()) +
            "Z"
          );
        }),
        (t.useXDomainRequest = function () {
          if (null === u) {
            var e = new XMLHttpRequest();
            u = void 0 === e.withCredentials && "undefined" != typeof XDomainRequest;
          }
          return u;
        }),
        (t.isReactNative = c);
    },
    9440: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(458),
        r = "MicrosoftApplicationsTelemetryDeviceId",
        o = "MicrosoftApplicationsTelemetryFirstLaunchTime",
        a = "MSIE",
        s = "Chrome",
        u = "Firefox",
        c = "Safari",
        l = "Edge",
        d = "Electron",
        f = "SkypeShell",
        h = "PhantomJS",
        p = "Opera",
        v = "Windows",
        m = "Mac OS X",
        g = "Windows Phone",
        y = "Windows RT",
        _ = "iOS",
        $ = "Android",
        b = "Linux",
        C = /(windows|win32)/i,
        w = / arm;/i,
        S = /windows\sphone\s\d+\.\d+/i,
        x = /(macintosh|mac os x)/i,
        T = /(iPad|iPhone|iPod)(?=.*like Mac OS X)/i,
        E = /(linux|joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)/i,
        k = /android/i,
        A = { 5.1: "XP", "6.0": "Vista", 6.1: "7", 6.2: "8", 6.3: "8.1", "10.0": "10" },
        P = "([\\d,.]+)",
        O = "Unknown",
        M = "undefined",
        L = (function () {
          function e() {}
          return (
            (e.addPropertyStorageOverride = function (e) {
              return !!e && ((this._propertyStorage = e), !0);
            }),
            (e.autoCollect = function (e, t, n) {
              if (
                ((this._semanticContext = e),
                (this._disableCookies = t),
                this._autoCollect(),
                n || typeof navigator === M || (n = navigator.userAgent || ""),
                this._autoCollectFromUserAgent(n),
                this._disableCookies && !this._propertyStorage)
              )
                return this._deleteCookie(r), void this._deleteCookie(o);
              (this._propertyStorage || (this._areCookiesAvailable && !this._disableCookies)) && this._autoCollectDeviceId();
            }),
            (e.checkAndSaveDeviceId = function (e) {
              e &&
                (this._getData(r) !== e && (this._saveData(r, e), this._saveData(o, i.getISOString(new Date()))),
                (this.firstLaunchTime = this._getData(o)));
            }),
            (e._autoCollectDeviceId = function () {
              var e = this._getData(r);
              e ? (this.firstLaunchTime = this._getData(o)) : ((e = i.newGuid()), this.checkAndSaveDeviceId(e)),
                this._semanticContext.setDeviceId(e);
            }),
            (e._autoCollect = function () {
              typeof document !== M && document.documentElement && this._semanticContext.setAppLanguage(document.documentElement.lang),
                typeof navigator !== M && this._semanticContext.setUserLanguage(navigator.userLanguage || navigator.language);
              var e = new Date().getTimezoneOffset(),
                t = e % 60,
                n = (e - t) / 60,
                i = "+";
              n > 0 && (i = "-"),
                (n = Math.abs(n)),
                (t = Math.abs(t)),
                this._semanticContext.setUserTimeZone(i + (n < 10 ? "0" + n : n.toString()) + ":" + (t < 10 ? "0" + t : t.toString()));
            }),
            (e._autoCollectFromUserAgent = function (e) {
              if (e) {
                var t = this._getBrowserName(e);
                this._semanticContext.setDeviceBrowserName(t), this._semanticContext.setDeviceBrowserVersion(this._getBrowserVersion(e, t));
                var n = this._getOsName(e);
                this._semanticContext.setDeviceOsName(n), this._semanticContext.setDeviceOsVersion(this._getOsVersion(e, n));
              }
            }),
            (e._getBrowserName = function (e) {
              return this._userAgentContainsString("OPR/", e)
                ? p
                : this._userAgentContainsString(h, e)
                ? h
                : this._userAgentContainsString(l, e)
                ? l
                : this._userAgentContainsString(d, e)
                ? d
                : this._userAgentContainsString(s, e)
                ? s
                : this._userAgentContainsString("Trident", e)
                ? a
                : this._userAgentContainsString(u, e)
                ? u
                : this._userAgentContainsString(c, e)
                ? c
                : this._userAgentContainsString(f, e)
                ? f
                : O;
            }),
            (e._userAgentContainsString = function (e, t) {
              return t.indexOf(e) > -1;
            }),
            (e._getBrowserVersion = function (e, t) {
              return t === a ? this._getIeVersion(e) : this._getOtherVersion(t, e);
            }),
            (e._getIeVersion = function (e) {
              var t = e.match(new RegExp(a + " " + P));
              if (t) return t[1];
              var n = e.match(new RegExp("rv:" + P));
              return n ? n[1] : void 0;
            }),
            (e._getOtherVersion = function (e, t) {
              e === c && (e = "Version");
              var n = t.match(new RegExp(e + "/" + P));
              return n ? n[1] : O;
            }),
            (e._getOsName = function (e) {
              return e.match(S)
                ? g
                : e.match(w)
                ? y
                : e.match(T)
                ? _
                : e.match(k)
                ? $
                : e.match(E)
                ? b
                : e.match(x)
                ? m
                : e.match(C)
                ? v
                : O;
            }),
            (e._getOsVersion = function (e, t) {
              return t === v ? this._getWindowsVersion(e) : t === m ? this._getMacOsxVersion(e) : O;
            }),
            (e._getWindowsVersion = function (e) {
              var t = e.match(new RegExp("Windows NT " + P));
              return t && A[t[1]] ? A[t[1]] : O;
            }),
            (e._getMacOsxVersion = function (e) {
              var t = e.match(new RegExp(m + " ([\\d,_,.]+)"));
              if (t) {
                var n = t[1].replace(/_/g, ".");
                if (n) {
                  var i = this._getDelimiter(n);
                  return i ? n.split(i)[0] : n;
                }
              }
              return O;
            }),
            (e._getDelimiter = function (e) {
              return e.indexOf(".") > -1 ? "." : e.indexOf("_") > -1 ? "_" : null;
            }),
            (e._saveData = function (e, t) {
              if (this._propertyStorage) this._propertyStorage.setProperty(e, t);
              else if (this._areCookiesAvailable) {
                var n = new Date();
                n.setTime(n.getTime() + 31536e6);
                var i = "expires=" + n.toUTCString();
                document.cookie = e + "=" + t + "; " + i;
              }
            }),
            (e._getData = function (e) {
              if (this._propertyStorage) return this._propertyStorage.getProperty(e) || "";
              if (this._areCookiesAvailable) {
                e += "=";
                for (var t = document.cookie.split(";"), n = 0; n < t.length; n++) {
                  for (var i = t[n], r = 0; " " === i.charAt(r); ) r++;
                  if (0 === (i = i.substring(r)).indexOf(e)) return i.substring(e.length, i.length);
                }
              }
              return "";
            }),
            (e._deleteCookie = function (e) {
              this._areCookiesAvailable && (document.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;");
            }),
            (e._disableCookies = !1),
            (e._areCookiesAvailable = typeof document !== M && typeof document.cookie !== M),
            e
          );
        })();
      t.default = L;
    },
    392: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(458),
        r = n(1239),
        o = (function () {
          function e(e) {
            (this._event = { name: "", properties: {} }), e && this.setName(e);
          }
          return (
            (e.prototype.setName = function (e) {
              this._event.name = e;
            }),
            (e.prototype.getName = function () {
              if (this._event.name && i.isString(this._event.name)) return this._event.name;
            }),
            (e.prototype.setType = function (e) {
              this._event.type = e;
            }),
            (e.prototype.getType = function () {
              if (this._event.type && i.isString(this._event.type)) return this._event.type;
            }),
            (e.prototype.setTimestamp = function (e) {
              this._event.timestamp = e;
            }),
            (e.prototype.getTimestamp = function () {
              if (this._event.timestamp && !isNaN(this._event.timestamp)) return this._event.timestamp;
            }),
            (e.prototype.setEventPriority = function (e) {
              i.isPriority(e) && (this._event.priority = e);
            }),
            (e.prototype.getEventPriority = function () {
              return this._event.priority;
            }),
            (e.prototype.setProperty = function (e, t, n) {
              void 0 === n && (n = r.AWTPropertyType.Unspecified);
              var o = { value: t, type: n, pii: r.AWTPiiKind.NotSet, cc: r.AWTCustomerContentKind.NotSet };
              null !== (o = i.sanitizeProperty(e, o)) ? (this._event.properties[e] = o) : delete this._event.properties[e];
            }),
            (e.prototype.setPropertyWithPii = function (e, t, n, o) {
              void 0 === o && (o = r.AWTPropertyType.Unspecified);
              var a = { value: t, type: o, pii: n, cc: r.AWTCustomerContentKind.NotSet };
              null !== (a = i.sanitizeProperty(e, a)) ? (this._event.properties[e] = a) : delete this._event.properties[e];
            }),
            (e.prototype.setPropertyWithCustomerContent = function (e, t, n, o) {
              void 0 === o && (o = r.AWTPropertyType.Unspecified);
              var a = { value: t, type: o, pii: r.AWTPiiKind.NotSet, cc: n };
              null !== (a = i.sanitizeProperty(e, a)) ? (this._event.properties[e] = a) : delete this._event.properties[e];
            }),
            (e.prototype.getPropertyMap = function () {
              return this._event.properties;
            }),
            (e.prototype.getEvent = function () {
              return this._event;
            }),
            e
          );
        })();
      t.default = o;
    },
    8674: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(1239),
        r = n(9687),
        o = n(3854),
        a = n(7350),
        s = n(6100),
        u = n(5441),
        c = n(458),
        l = n(3870),
        d = n(1493),
        f = "POST",
        h = (function () {
          function e(e, t, n, i) {
            var r = this;
            (this._requestQueue = e),
              (this._queueManager = n),
              (this._httpInterface = i),
              (this._urlString =
                "?qsp=true&content-type=application%2Fbond-compact-binary&client-id=NO_AUTH&sdk-version=" + u.FullVersionString),
              (this._killSwitch = new a.default()),
              (this._paused = !1),
              (this._clockSkewManager = new s.default()),
              (this._useBeacons = !1),
              (this._activeConnections = 0),
              c.isUint8ArrayAvailable() || (this._urlString += "&content-encoding=base64"),
              (this._urlString = t + this._urlString),
              this._httpInterface ||
                ((this._useBeacons = !c.isReactNative()),
                (this._httpInterface = {
                  sendPOST: function (e, t, n, i, o, a) {
                    if (c.useXDomainRequest()) {
                      var s = new XDomainRequest();
                      s.open(f, e),
                        (s.onload = function () {
                          o(200, null);
                        }),
                        (s.onerror = function () {
                          i(400, null);
                        }),
                        (s.ontimeout = function () {
                          n(500, null);
                        }),
                        s.send(t);
                    } else if (c.isReactNative())
                      fetch(e, { body: t, method: f })
                        .then(function (e) {
                          var t = {};
                          e.headers &&
                            e.headers.forEach(function (e, n) {
                              t[n] = e;
                            }),
                            o(e.status, t);
                        })
                        .catch(function (e) {
                          i(0, {});
                        });
                    else {
                      var u = new XMLHttpRequest();
                      u.open(f, e, !a),
                        (u.onload = function () {
                          o(u.status, r._convertAllHeadersToMap(u.getAllResponseHeaders()));
                        }),
                        (u.onerror = function () {
                          i(u.status, r._convertAllHeadersToMap(u.getAllResponseHeaders()));
                        }),
                        (u.ontimeout = function () {
                          n(u.status, r._convertAllHeadersToMap(u.getAllResponseHeaders()));
                        }),
                        u.send(t);
                    }
                  }
                }));
          }
          return (
            (e.prototype.hasIdleConnection = function () {
              return this._activeConnections < 2;
            }),
            (e.prototype.sendQueuedRequests = function () {
              for (
                ;
                this.hasIdleConnection() && !this._paused && this._requestQueue.length > 0 && this._clockSkewManager.allowRequestSending();

              )
                this._activeConnections++, this._sendRequest(this._requestQueue.pop(), 0, !1);
              this.hasIdleConnection() && d.default.scheduleTimer();
            }),
            (e.prototype.isCompletelyIdle = function () {
              return 0 === this._activeConnections;
            }),
            (e.prototype.flush = function () {
              for (; this._requestQueue.length > 0; ) this._sendRequest(this._requestQueue.pop(), 0, !0);
            }),
            (e.prototype.pause = function () {
              this._paused = !0;
            }),
            (e.prototype.resume = function () {
              (this._paused = !1), this.sendQueuedRequests();
            }),
            (e.prototype.removeQueuedRequests = function () {
              this._requestQueue.length = 0;
            }),
            (e.prototype._sendRequest = function (e, t, n) {
              var o = this;
              if (this._paused) return this._activeConnections--, void this._queueManager.addBackRequest(e);
              var a = 0,
                s = "";
              for (var u in e)
                e.hasOwnProperty(u) &&
                  (this._killSwitch.isTenantKilled(u)
                    ? (l.default.eventsDropped(e[u], i.AWTEventsDroppedReason.KillSwitch), delete e[u])
                    : (s.length > 0 && (s += ","), (s += u), a++));
              if (a > 0) {
                var d = r.default.getPayloadBlob(e, a),
                  f = this._urlString + "&x-apikey=" + s + "&client-time-epoch-millis=" + Date.now().toString();
                this._clockSkewManager.shouldAddClockSkewHeaders() &&
                  (f = f + "&time-delta-to-apply-millis=" + this._clockSkewManager.getClockSkewHeaderValue());
                var h = void 0;
                (h = c.isUint8ArrayAvailable() ? new Uint8Array(d) : r.default.base64Encode(d)),
                  this._useBeacons && n && c.isBeaconsSupported()
                    ? navigator.sendBeacon(f, h)
                    : this._httpInterface.sendPOST(
                        f,
                        h,
                        function (n, i) {
                          o._retryRequestIfNeeded(n, i, e, a, s, t);
                        },
                        function (n, i) {
                          o._retryRequestIfNeeded(n, i, e, a, s, t);
                        },
                        function (n, i) {
                          o._retryRequestIfNeeded(n, i, e, a, s, t);
                        },
                        !1
                      );
              } else n || this._handleRequestFinished(null, {});
            }),
            (e.prototype._retryRequestIfNeeded = function (e, t, n, r, a, s) {
              var u = this,
                c = !0;
              if (void 0 !== e) {
                if (t) {
                  var f = this._killSwitch.setKillSwitchTenants(t["kill-tokens"], t["kill-duration-seconds"]);
                  this._clockSkewManager.setClockSkew(t["time-delta-millis"]);
                  for (var h = 0; h < f.length; ++h)
                    l.default.eventsDropped(n[f[h]], i.AWTEventsDroppedReason.KillSwitch), delete n[f[h]], r--;
                } else this._clockSkewManager.setClockSkew(null);
                if (200 === e) return void this._handleRequestFinished(!0, n);
                (!o.default.shouldRetryForStatus(e) || r <= 0) && (c = !1);
              }
              if (c)
                if (s < 1) {
                  for (var p in n) n.hasOwnProperty(p) && l.default.eventsRetrying(n[p]);
                  setTimeout(function () {
                    return u._sendRequest(n, s + 1, !1);
                  }, o.default.getMillisToBackoffForRetry(s));
                } else this._activeConnections--, d.default.backOffTransmission(), this._queueManager.addBackRequest(n);
              else this._handleRequestFinished(!1, n);
            }),
            (e.prototype._handleRequestFinished = function (e, t) {
              for (var n in (e && d.default.clearBackOff(), t))
                t.hasOwnProperty(n) &&
                  (e ? l.default.eventsSent(t[n]) : l.default.eventsDropped(t[n], i.AWTEventsDroppedReason.NonRetryableStatus));
              this._activeConnections--, this.sendQueuedRequests();
            }),
            (e.prototype._convertAllHeadersToMap = function (e) {
              var t = {};
              if (e)
                for (var n = e.split("\n"), i = 0; i < n.length; ++i) {
                  var r = n[i].split(": ");
                  t[r[0]] = r[1];
                }
              return t;
            }),
            e
          );
        })();
      t.default = h;
    },
    1647: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(1239),
        r = n(2505),
        o = n(8177),
        a = n(1493),
        s = n(3870),
        u = n(9440),
        c = (function () {
          function e() {}
          return (
            (e.initialize = function (e, t) {
              if ((void 0 === t && (t = {}), !this._isInitialized))
                return (
                  (this._isInitialized = !0),
                  (r.default.defaultTenantToken = e),
                  this._overrideValuesFromConfig(t),
                  this._config.disableCookiesUsage && !this._config.propertyStorageOverride && (r.default.sessionEnabled = !1),
                  u.default.addPropertyStorageOverride(this._config.propertyStorageOverride),
                  u.default.autoCollect(r.default.semanticContext, this._config.disableCookiesUsage, this._config.userAgent),
                  a.default.initialize(this._config),
                  (r.default.loggingEnabled = !0),
                  this.getLogger()
                );
            }),
            (e.getSemanticContext = function () {
              return r.default.semanticContext;
            }),
            (e.flush = function (e) {
              this._isInitialized && !this._isDestroyed && a.default.flush(e);
            }),
            (e.flushAndTeardown = function () {
              this._isInitialized &&
                !this._isDestroyed &&
                ((this._isDestroyed = !0), a.default.flushAndTeardown(), (r.default.loggingEnabled = !1));
            }),
            (e.pauseTransmission = function () {
              this._isInitialized && !this._isDestroyed && a.default.pauseTransmission();
            }),
            (e.resumeTransmision = function () {
              this._isInitialized && !this._isDestroyed && a.default.resumeTransmision();
            }),
            (e.setTransmitProfile = function (e) {
              this._isInitialized && !this._isDestroyed && a.default.setTransmitProfile(e);
            }),
            (e.loadTransmitProfiles = function (e) {
              this._isInitialized && !this._isDestroyed && a.default.loadTransmitProfiles(e);
            }),
            (e.setContext = function (e, t, n) {
              void 0 === n && (n = i.AWTPropertyType.Unspecified), r.default.logManagerContext.setProperty(e, t, n);
            }),
            (e.setContextWithPii = function (e, t, n, o) {
              void 0 === o && (o = i.AWTPropertyType.Unspecified), r.default.logManagerContext.setPropertyWithPii(e, t, n, o);
            }),
            (e.prototype.setContextWithCustomerContent = function (e, t, n, o) {
              void 0 === o && (o = i.AWTPropertyType.Unspecified), r.default.logManagerContext.setPropertyWithCustomerContent(e, t, n, o);
            }),
            (e.getLogger = function (e) {
              var t = e;
              return (
                (t && t !== r.default.defaultTenantToken) || (t = ""),
                this._loggers[e] || (this._loggers[e] = new o.default(e)),
                this._loggers[e]
              );
            }),
            (e.addNotificationListener = function (e) {
              s.default.addNotificationListener(e);
            }),
            (e._overrideValuesFromConfig = function (e) {
              e.collectorUri && (this._config.collectorUri = e.collectorUri),
                e.cacheMemorySizeLimitInNumberOfEvents > 0 &&
                  (this._config.cacheMemorySizeLimitInNumberOfEvents = e.cacheMemorySizeLimitInNumberOfEvents),
                e.httpXHROverride && e.httpXHROverride.sendPOST && (this._config.httpXHROverride = e.httpXHROverride),
                e.propertyStorageOverride &&
                  e.propertyStorageOverride.getProperty &&
                  e.propertyStorageOverride.setProperty &&
                  (this._config.propertyStorageOverride = e.propertyStorageOverride),
                e.userAgent && (this._config.userAgent = e.userAgent),
                e.disableCookiesUsage && (this._config.disableCookiesUsage = e.disableCookiesUsage),
                e.canSendStatEvent && (this._config.canSendStatEvent = e.canSendStatEvent);
            }),
            (e._loggers = {}),
            (e._isInitialized = !1),
            (e._isDestroyed = !1),
            (e._config = {
              collectorUri: "https://browser.pipe.aria.microsoft.com/Collector/3.0/",
              cacheMemorySizeLimitInNumberOfEvents: 1e4,
              disableCookiesUsage: !1,
              canSendStatEvent: function (e) {
                return !0;
              }
            }),
            e
          );
        })();
      t.default = c;
    },
    2505: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(392),
        r = n(9259),
        o = (function () {
          function e() {}
          return (
            (e.logManagerContext = new i.default()),
            (e.sessionEnabled = !0),
            (e.loggingEnabled = !1),
            (e.defaultTenantToken = ""),
            (e.semanticContext = new r.default(!0, e.logManagerContext)),
            e
          );
        })();
      t.default = o;
    },
    8177: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(1239),
        r = n(4224),
        o = n(392),
        a = n(458),
        s = n(3492),
        u = n(3870),
        c = n(1493),
        l = n(2505),
        d = n(5441),
        f = n(9259),
        h = n(9440),
        p = (function () {
          function e(e) {
            (this._apiKey = e),
              (this._contextProperties = new o.default()),
              (this._semanticContext = new f.default(!1, this._contextProperties)),
              (this._sessionStartTime = 0),
              this._createInitId();
          }
          return (
            (e.prototype.setContext = function (e, t, n) {
              void 0 === n && (n = i.AWTPropertyType.Unspecified), this._contextProperties.setProperty(e, t, n);
            }),
            (e.prototype.setContextWithPii = function (e, t, n, r) {
              void 0 === r && (r = i.AWTPropertyType.Unspecified), this._contextProperties.setPropertyWithPii(e, t, n, r);
            }),
            (e.prototype.setContextWithCustomerContent = function (e, t, n, r) {
              void 0 === r && (r = i.AWTPropertyType.Unspecified), this._contextProperties.setPropertyWithCustomerContent(e, t, n, r);
            }),
            (e.prototype.getSemanticContext = function () {
              return this._semanticContext;
            }),
            (e.prototype.logEvent = function (t) {
              if (l.default.loggingEnabled) {
                this._apiKey || ((this._apiKey = l.default.defaultTenantToken), this._createInitId());
                var n = !0;
                a.isString(t) ? (t = { name: t }) : t instanceof o.default && ((t = t.getEvent()), (n = !1)),
                  s.default.eventReceived(this._apiKey),
                  e._logEvent(e._getInternalEvent(t, this._apiKey), n, this._contextProperties);
              }
            }),
            (e.prototype.logSession = function (t, n) {
              if (l.default.sessionEnabled) {
                var o = { name: "session", type: "session", properties: {} };
                if ((e._addPropertiesToEvent(o, n), (o.priority = i.AWTEventPriority.High), t === r.AWTSessionState.Started)) {
                  if (this._sessionStartTime > 0) return;
                  (this._sessionStartTime = new Date().getTime()),
                    (this._sessionId = a.newGuid()),
                    this.setContext("Session.Id", this._sessionId);
                } else {
                  if (t !== r.AWTSessionState.Ended) return;
                  if (0 === this._sessionStartTime) return;
                  var s = Math.floor((new Date().getTime() - this._sessionStartTime) / 1e3);
                  (o.properties["Session.Id"] = this._sessionId),
                    (o.properties["Session.Duration"] = s.toString()),
                    (o.properties["Session.DurationBucket"] = e._getSessionDurationFromTime(s)),
                    (this._sessionStartTime = 0),
                    this.setContext("Session.Id", null),
                    (this._sessionId = void 0);
                }
                (o.properties["Session.FirstLaunchTime"] = h.default.firstLaunchTime),
                  (o.properties["Session.State"] = t.toString()),
                  this.logEvent(o);
              }
            }),
            (e.prototype.getSessionId = function () {
              return this._sessionId;
            }),
            (e.prototype.logFailure = function (t, n, r, o, a) {
              if (t && n) {
                var s = { name: "failure", type: "failure", properties: {} };
                e._addPropertiesToEvent(s, a),
                  (s.properties["Failure.Signature"] = t),
                  (s.properties["Failure.Detail"] = n),
                  r && (s.properties["Failure.Category"] = r),
                  o && (s.properties["Failure.Id"] = o),
                  (s.priority = i.AWTEventPriority.High),
                  this.logEvent(s);
              }
            }),
            (e.prototype.logPageView = function (t, n, i, r, o, a) {
              if (t && n) {
                var s = { name: "pageview", type: "pageview", properties: {} };
                e._addPropertiesToEvent(s, a),
                  (s.properties["PageView.Id"] = t),
                  (s.properties["PageView.Name"] = n),
                  i && (s.properties["PageView.Category"] = i),
                  r && (s.properties["PageView.Uri"] = r),
                  o && (s.properties["PageView.ReferrerUri"] = o),
                  this.logEvent(s);
              }
            }),
            (e.prototype._createInitId = function () {
              !e._initIdMap[this._apiKey] && this._apiKey && (e._initIdMap[this._apiKey] = a.newGuid());
            }),
            (e._addPropertiesToEvent = function (e, t) {
              if (t)
                for (var n in (t instanceof o.default && (t = t.getEvent()),
                t.name && (e.name = t.name),
                t.priority && (e.priority = t.priority),
                t.properties))
                  t.properties.hasOwnProperty(n) && (e.properties[n] = t.properties[n]);
            }),
            (e._getSessionDurationFromTime = function (e) {
              return e < 0
                ? "Undefined"
                : e <= 3
                ? "UpTo3Sec"
                : e <= 10
                ? "UpTo10Sec"
                : e <= 30
                ? "UpTo30Sec"
                : e <= 60
                ? "UpTo60Sec"
                : e <= 180
                ? "UpTo3Min"
                : e <= 600
                ? "UpTo10Min"
                : e <= 1800
                ? "UpTo30Min"
                : "Above30Min";
            }),
            (e._logEvent = function (e, t, n) {
              if (e.name)
                if (
                  ((e.name = e.name.toLowerCase()),
                  (e.name = e.name.replace(a.EventNameDotRegex, "_")),
                  e.type ? (e.type = e.type.toLowerCase()) : (e.type = "custom"),
                  a.EventNameAndTypeRegex.test(e.name) && a.EventNameAndTypeRegex.test(e.type))
                ) {
                  if ((isNaN(e.timestamp) && (e.timestamp = new Date().getTime()), t && e.properties))
                    for (var r in e.properties)
                      e.properties.hasOwnProperty(r) &&
                        ((e.properties[r] = a.sanitizeProperty(r, e.properties[r])), null === e.properties[r] && delete e.properties[r]);
                  e.properties || (e.properties = {}),
                    this._addContextIfAbsent(e, n.getPropertyMap()),
                    this._addContextIfAbsent(e, l.default.logManagerContext.getPropertyMap()),
                    this._setDefaultProperty(e, "EventInfo.InitId", this._getInitId(e.apiKey)),
                    this._setDefaultProperty(e, "EventInfo.Sequence", this._getSequenceId(e.apiKey)),
                    this._setDefaultProperty(e, "EventInfo.SdkVersion", d.FullVersionString),
                    this._setDefaultProperty(e, "EventInfo.Name", e.name),
                    this._setDefaultProperty(e, "EventInfo.Time", new Date(e.timestamp).toISOString()),
                    a.isPriority(e.priority) || (e.priority = i.AWTEventPriority.Normal),
                    this._sendEvent(e);
                } else u.default.eventsRejected([e], i.AWTEventsRejectedReason.InvalidEvent);
              else u.default.eventsRejected([e], i.AWTEventsRejectedReason.InvalidEvent);
            }),
            (e._addContextIfAbsent = function (e, t) {
              if (t) for (var n in t) t.hasOwnProperty(n) && (e.properties[n] || (e.properties[n] = t[n]));
            }),
            (e._setDefaultProperty = function (e, t, n) {
              e.properties[t] = { value: n, pii: i.AWTPiiKind.NotSet, type: i.AWTPropertyType.String };
            }),
            (e._sendEvent = function (e) {
              c.default.sendEvent(e);
            }),
            (e._getInternalEvent = function (e, t) {
              var n = e;
              return (n.id = a.newGuid()), (n.apiKey = t), n;
            }),
            (e._getInitId = function (t) {
              return e._initIdMap[t];
            }),
            (e._getSequenceId = function (t) {
              return void 0 === e._sequenceIdMap[t] && (e._sequenceIdMap[t] = 0), (++e._sequenceIdMap[t]).toString();
            }),
            (e._sequenceIdMap = {}),
            (e._initIdMap = {}),
            e
          );
        })();
      t.default = p;
    },
    6610: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(1239),
        r = n(8674),
        o = n(1493),
        a = n(7400),
        s = n(9687),
        u = n(3870),
        c = (function () {
          function e(e, t, n) {
            (this._queueSizeLimit = t),
              (this._isCurrentlyUploadingNow = !1),
              (this._uploadNowQueue = []),
              (this._shouldDropEventsOnPause = !1),
              (this._paused = !1),
              (this._queueSize = 0),
              (this._outboundQueue = []),
              (this._inboundQueues = {}),
              (this._inboundQueues[i.AWTEventPriority.High] = []),
              (this._inboundQueues[i.AWTEventPriority.Normal] = []),
              (this._inboundQueues[i.AWTEventPriority.Low] = []),
              this._addEmptyQueues(),
              (this._batcher = new a.default(2936012, this._outboundQueue)),
              (this._httpManager = new r.default(this._outboundQueue, e, this, n));
          }
          return (
            (e.prototype.addEvent = function (e) {
              this._queueSize < this._queueSizeLimit
                ? (this._paused && this._shouldDropEventsOnPause) ||
                  (this._queueSize++, this._inboundQueues[e.priority][this._inboundQueues[e.priority].length - 1].push(e))
                : u.default.eventsDropped([e], i.AWTEventsDroppedReason.QueueFull);
            }),
            (e.prototype.sendEventsForPriorityAndAbove = function (e) {
              this._batchEvents(e), this._httpManager.sendQueuedRequests();
            }),
            (e.prototype.hasEvents = function () {
              return (
                (this._inboundQueues[i.AWTEventPriority.High][0].length > 0 ||
                  this._inboundQueues[i.AWTEventPriority.Normal][0].length > 0 ||
                  this._inboundQueues[i.AWTEventPriority.Low][0].length > 0 ||
                  this._batcher.hasBatch()) &&
                this._httpManager.hasIdleConnection()
              );
            }),
            (e.prototype.addBackRequest = function (e) {
              if (!this._paused || !this._shouldDropEventsOnPause) {
                for (var t in e) if (e.hasOwnProperty(t)) for (var n = 0; n < e[t].length; ++n) this.addEvent(e[t][n]);
                o.default.scheduleTimer();
              }
            }),
            (e.prototype.teardown = function () {
              this._paused || (this._batchEvents(i.AWTEventPriority.Low), this._httpManager.flush());
            }),
            (e.prototype.uploadNow = function (e) {
              var t = this;
              this._addEmptyQueues(),
                this._isCurrentlyUploadingNow
                  ? this._uploadNowQueue.push(e)
                  : ((this._isCurrentlyUploadingNow = !0),
                    setTimeout(function () {
                      return t._uploadNow(e);
                    }, 0));
            }),
            (e.prototype.pauseTransmission = function () {
              (this._paused = !0),
                this._httpManager.pause(),
                this.shouldDropEventsOnPause &&
                  ((this._queueSize -=
                    this._inboundQueues[i.AWTEventPriority.High][0].length +
                    this._inboundQueues[i.AWTEventPriority.Normal][0].length +
                    this._inboundQueues[i.AWTEventPriority.Low][0].length),
                  (this._inboundQueues[i.AWTEventPriority.High][0] = []),
                  (this._inboundQueues[i.AWTEventPriority.Normal][0] = []),
                  (this._inboundQueues[i.AWTEventPriority.Low][0] = []),
                  this._httpManager.removeQueuedRequests());
            }),
            (e.prototype.resumeTransmission = function () {
              (this._paused = !1), this._httpManager.resume();
            }),
            (e.prototype.shouldDropEventsOnPause = function (e) {
              this._shouldDropEventsOnPause = e;
            }),
            (e.prototype._removeFirstQueues = function () {
              this._inboundQueues[i.AWTEventPriority.High].shift(),
                this._inboundQueues[i.AWTEventPriority.Normal].shift(),
                this._inboundQueues[i.AWTEventPriority.Low].shift();
            }),
            (e.prototype._addEmptyQueues = function () {
              this._inboundQueues[i.AWTEventPriority.High].push([]),
                this._inboundQueues[i.AWTEventPriority.Normal].push([]),
                this._inboundQueues[i.AWTEventPriority.Low].push([]);
            }),
            (e.prototype._batchEvents = function (e) {
              for (var t = i.AWTEventPriority.High; t >= e; ) {
                for (; this._inboundQueues[t][0].length > 0; ) {
                  var n = this._inboundQueues[t][0].pop();
                  this._queueSize--, n.serializedEvent || (n.serializedEvent = s.default.getEventBlob(n)), this._batcher.addEventToBatch(n);
                }
                t--;
              }
              this._batcher.flushBatch();
            }),
            (e.prototype._uploadNow = function (e) {
              var t = this;
              this.hasEvents() && this.sendEventsForPriorityAndAbove(i.AWTEventPriority.Low),
                this._checkOutboundQueueEmptyAndSent(function () {
                  t._removeFirstQueues(),
                    null != e && e(),
                    t._uploadNowQueue.length > 0
                      ? setTimeout(function () {
                          return t._uploadNow(t._uploadNowQueue.shift());
                        }, 0)
                      : ((t._isCurrentlyUploadingNow = !1), t.hasEvents() && o.default.scheduleTimer());
                });
            }),
            (e.prototype._checkOutboundQueueEmptyAndSent = function (e) {
              var t = this;
              this._httpManager.isCompletelyIdle()
                ? e()
                : setTimeout(function () {
                    return t._checkOutboundQueueEmptyAndSent(e);
                  }, 250);
            }),
            e
          );
        })();
      t.default = c;
    },
    9259: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(9440),
        r = n(1239),
        o = n(4224),
        a = "UserInfo.IdType",
        s = (function () {
          function e(e, t) {
            (this._allowDeviceFields = e), (this._properties = t);
          }
          return (
            (e.prototype.setAppId = function (e) {
              this._addContext("AppInfo.Id", e);
            }),
            (e.prototype.setAppVersion = function (e) {
              this._addContext("AppInfo.Version", e);
            }),
            (e.prototype.setAppLanguage = function (e) {
              this._addContext("AppInfo.Language", e);
            }),
            (e.prototype.setDeviceId = function (e) {
              this._allowDeviceFields && (i.default.checkAndSaveDeviceId(e), this._addContext("DeviceInfo.Id", e));
            }),
            (e.prototype.setDeviceOsName = function (e) {
              this._allowDeviceFields && this._addContext("DeviceInfo.OsName", e);
            }),
            (e.prototype.setDeviceOsVersion = function (e) {
              this._allowDeviceFields && this._addContext("DeviceInfo.OsVersion", e);
            }),
            (e.prototype.setDeviceBrowserName = function (e) {
              this._allowDeviceFields && this._addContext("DeviceInfo.BrowserName", e);
            }),
            (e.prototype.setDeviceBrowserVersion = function (e) {
              this._allowDeviceFields && this._addContext("DeviceInfo.BrowserVersion", e);
            }),
            (e.prototype.setDeviceMake = function (e) {
              this._allowDeviceFields && this._addContext("DeviceInfo.Make", e);
            }),
            (e.prototype.setDeviceModel = function (e) {
              this._allowDeviceFields && this._addContext("DeviceInfo.Model", e);
            }),
            (e.prototype.setUserId = function (e, t, n) {
              if (!isNaN(n) && null !== n && n >= 0 && n <= 12) this._addContext(a, n.toString());
              else {
                var i = void 0;
                switch (t) {
                  case r.AWTPiiKind.SipAddress:
                    i = o.AWTUserIdType.SipAddress;
                    break;
                  case r.AWTPiiKind.PhoneNumber:
                    i = o.AWTUserIdType.PhoneNumber;
                    break;
                  case r.AWTPiiKind.SmtpAddress:
                    i = o.AWTUserIdType.EmailAddress;
                    break;
                  default:
                    i = o.AWTUserIdType.Unknown;
                }
                this._addContext(a, i.toString());
              }
              if (isNaN(t) || null === t || t === r.AWTPiiKind.NotSet || t > 13)
                switch (n) {
                  case o.AWTUserIdType.Skype:
                    t = r.AWTPiiKind.Identity;
                    break;
                  case o.AWTUserIdType.EmailAddress:
                    t = r.AWTPiiKind.SmtpAddress;
                    break;
                  case o.AWTUserIdType.PhoneNumber:
                    t = r.AWTPiiKind.PhoneNumber;
                    break;
                  case o.AWTUserIdType.SipAddress:
                    t = r.AWTPiiKind.SipAddress;
                    break;
                  default:
                    t = r.AWTPiiKind.NotSet;
                }
              this._addContextWithPii("UserInfo.Id", e, t);
            }),
            (e.prototype.setUserAdvertisingId = function (e) {
              this._addContext("UserInfo.AdvertisingId", e);
            }),
            (e.prototype.setUserTimeZone = function (e) {
              this._addContext("UserInfo.TimeZone", e);
            }),
            (e.prototype.setUserLanguage = function (e) {
              this._addContext("UserInfo.Language", e);
            }),
            (e.prototype._addContext = function (e, t) {
              "string" == typeof t && this._properties.setProperty(e, t);
            }),
            (e.prototype._addContextWithPii = function (e, t, n) {
              "string" == typeof t && this._properties.setPropertyWithPii(e, t, n);
            }),
            e
          );
        })();
      t.default = s;
    },
    6438: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(1493),
        r = (function () {
          function e() {}
          return (
            (e.setEventsHandler = function (e) {
              i.default.setEventsHandler(e);
            }),
            (e.getEventsHandler = function () {
              return i.default.getEventsHandler();
            }),
            (e.scheduleTimer = function () {
              i.default.scheduleTimer();
            }),
            e
          );
        })();
      t.default = r;
    },
    1493: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(9085),
        r = n(1239),
        o = n(6610),
        a = n(3492),
        s = n(392),
        u = n(1647),
        c = n(458),
        l = "awt_stats",
        d = (function () {
          function e() {}
          return (
            (e.setEventsHandler = function (e) {
              this._eventHandler = e;
            }),
            (e.getEventsHandler = function () {
              return this._eventHandler;
            }),
            (e.scheduleTimer = function () {
              var e = this,
                t = this._profiles[this._currentProfile][2];
              this._timeout < 0 &&
                t >= 0 &&
                !this._paused &&
                (this._eventHandler.hasEvents()
                  ? (0 === t && this._currentBackoffCount > 0 && (t = 1),
                    (this._timeout = setTimeout(
                      function () {
                        return e._batchAndSendEvents();
                      },
                      t * (1 << this._currentBackoffCount) * 1e3
                    )))
                  : (this._timerCount = 0));
            }),
            (e.initialize = function (e) {
              var t = this;
              (this._newEventsAllowed = !0),
                (this._config = e),
                (this._eventHandler = new o.default(e.collectorUri, e.cacheMemorySizeLimitInNumberOfEvents, e.httpXHROverride)),
                this._initializeProfiles(),
                a.default.initialize(function (e, n) {
                  if (t._config.canSendStatEvent(l)) {
                    var i = new s.default(l);
                    for (var o in (i.setEventPriority(r.AWTEventPriority.High), i.setProperty("TenantId", n), e))
                      e.hasOwnProperty(o) && i.setProperty(o, e[o].toString());
                    u.default.getLogger(c.StatsApiKey).logEvent(i);
                  }
                });
            }),
            (e.setTransmitProfile = function (e) {
              this._currentProfile !== e &&
                void 0 !== this._profiles[e] &&
                (this.clearTimeout(), (this._currentProfile = e), this.scheduleTimer());
            }),
            (e.loadTransmitProfiles = function (e) {
              for (var t in (this._resetTransmitProfiles(), e))
                if (e.hasOwnProperty(t)) {
                  if (3 !== e[t].length) continue;
                  for (var n = 2; n >= 0; --n)
                    if (e[t][n] < 0) {
                      for (var i = n; i >= 0; --i) e[t][i] = -1;
                      break;
                    }
                  for (n = 2; n > 0; --n)
                    if (e[t][n] > 0 && e[t][n - 1] > 0) {
                      var r = e[t][n - 1] / e[t][n];
                      e[t][n - 1] = Math.ceil(r) * e[t][n];
                    }
                  this._profiles[t] = e[t];
                }
            }),
            (e.sendEvent = function (e) {
              this._newEventsAllowed && (this._eventHandler.addEvent(e), this.scheduleTimer());
            }),
            (e.flush = function (e) {
              var t = new Date().getTime();
              !this._paused &&
                this._lastUploadNowCall + 3e4 < t &&
                ((this._lastUploadNowCall = t),
                this._timeout > -1 && (clearTimeout(this._timeout), (this._timeout = -1)),
                this._eventHandler.uploadNow(e));
            }),
            (e.pauseTransmission = function () {
              this._paused || (this.clearTimeout(), this._eventHandler.pauseTransmission(), (this._paused = !0));
            }),
            (e.resumeTransmision = function () {
              this._paused && ((this._paused = !1), this._eventHandler.resumeTransmission(), this.scheduleTimer());
            }),
            (e.flushAndTeardown = function () {
              a.default.teardown(), (this._newEventsAllowed = !1), this.clearTimeout(), this._eventHandler.teardown();
            }),
            (e.backOffTransmission = function () {
              this._currentBackoffCount < 4 && (this._currentBackoffCount++, this.clearTimeout(), this.scheduleTimer());
            }),
            (e.clearBackOff = function () {
              this._currentBackoffCount > 0 && ((this._currentBackoffCount = 0), this.clearTimeout(), this.scheduleTimer());
            }),
            (e._resetTransmitProfiles = function () {
              this.clearTimeout(), this._initializeProfiles(), (this._currentProfile = i.AWT_REAL_TIME), this.scheduleTimer();
            }),
            (e.clearTimeout = function () {
              this._timeout > 0 && (clearTimeout(this._timeout), (this._timeout = -1), (this._timerCount = 0));
            }),
            (e._batchAndSendEvents = function () {
              var e = r.AWTEventPriority.High;
              this._timerCount++,
                this._timerCount * this._profiles[this._currentProfile][2] === this._profiles[this._currentProfile][0]
                  ? ((e = r.AWTEventPriority.Low), (this._timerCount = 0))
                  : this._timerCount * this._profiles[this._currentProfile][2] === this._profiles[this._currentProfile][1] &&
                    (e = r.AWTEventPriority.Normal),
                this._eventHandler.sendEventsForPriorityAndAbove(e),
                (this._timeout = -1),
                this.scheduleTimer();
            }),
            (e._initializeProfiles = function () {
              (this._profiles = {}),
                (this._profiles.REAL_TIME = [4, 2, 1]),
                (this._profiles.NEAR_REAL_TIME = [12, 6, 3]),
                (this._profiles.BEST_EFFOR = [36, 18, 9]);
            }),
            (e._newEventsAllowed = !1),
            (e._currentProfile = i.AWT_REAL_TIME),
            (e._timeout = -1),
            (e._currentBackoffCount = 0),
            (e._paused = !1),
            (e._timerCount = 0),
            (e._lastUploadNowCall = 0),
            e
          );
        })();
      t.default = d;
    },
    6076: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(1239);
      (t.AWTPropertyType = i.AWTPropertyType),
        (t.AWTPiiKind = i.AWTPiiKind),
        (t.AWTEventPriority = i.AWTEventPriority),
        (t.AWTEventsDroppedReason = i.AWTEventsDroppedReason),
        (t.AWTEventsRejectedReason = i.AWTEventsRejectedReason),
        (t.AWTCustomerContentKind = i.AWTCustomerContentKind);
      var r = n(4224);
      (t.AWTUserIdType = r.AWTUserIdType), (t.AWTSessionState = r.AWTSessionState);
      var o = n(9085);
      (t.AWT_BEST_EFFORT = o.AWT_BEST_EFFORT), (t.AWT_NEAR_REAL_TIME = o.AWT_NEAR_REAL_TIME), (t.AWT_REAL_TIME = o.AWT_REAL_TIME);
      var a = n(392);
      t.AWTEventProperties = a.default;
      var s = n(8177);
      t.AWTLogger = s.default;
      var u = n(1647);
      t.AWTLogManager = u.default;
      var c = n(6438);
      t.AWTTransmissionManager = c.default;
      var l = n(9687);
      t.AWTSerializer = l.default;
      var d = n(9259);
      (t.AWTSemanticContext = d.default),
        (t.AWT_COLLECTOR_URL_UNITED_STATES = "https://us.pipe.aria.microsoft.com/Collector/3.0/"),
        (t.AWT_COLLECTOR_URL_GERMANY = "https://de.pipe.aria.microsoft.com/Collector/3.0/"),
        (t.AWT_COLLECTOR_URL_JAPAN = "https://jp.pipe.aria.microsoft.com/Collector/3.0/"),
        (t.AWT_COLLECTOR_URL_AUSTRALIA = "https://au.pipe.aria.microsoft.com/Collector/3.0/"),
        (t.AWT_COLLECTOR_URL_EUROPE = "https://eu.pipe.aria.microsoft.com/Collector/3.0/");
    },
    9085: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AWT_REAL_TIME = "REAL_TIME"),
        (t.AWT_NEAR_REAL_TIME = "NEAR_REAL_TIME"),
        (t.AWT_BEST_EFFORT = "BEST_EFFORT");
    },
    4224: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e) {
          (e[(e.Unknown = 0)] = "Unknown"),
            (e[(e.MSACID = 1)] = "MSACID"),
            (e[(e.MSAPUID = 2)] = "MSAPUID"),
            (e[(e.ANID = 3)] = "ANID"),
            (e[(e.OrgIdCID = 4)] = "OrgIdCID"),
            (e[(e.OrgIdPUID = 5)] = "OrgIdPUID"),
            (e[(e.UserObjectId = 6)] = "UserObjectId"),
            (e[(e.Skype = 7)] = "Skype"),
            (e[(e.Yammer = 8)] = "Yammer"),
            (e[(e.EmailAddress = 9)] = "EmailAddress"),
            (e[(e.PhoneNumber = 10)] = "PhoneNumber"),
            (e[(e.SipAddress = 11)] = "SipAddress"),
            (e[(e.MUID = 12)] = "MUID");
        })(t.AWTUserIdType || (t.AWTUserIdType = {})),
        (function (e) {
          (e[(e.Started = 0)] = "Started"), (e[(e.Ended = 1)] = "Ended");
        })(t.AWTSessionState || (t.AWTSessionState = {}));
    },
    5441: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Version = "1.2.0"), (t.FullVersionString = "AWT-Web-JS-" + t.Version);
    },
    7951: (e, t, n) => {
      "use strict";
      n.d(t, { i: () => l });
      var i = n(9141),
        r = n(8145),
        o = n(4869),
        a = n(6335),
        s = n(1030),
        u = n(8593),
        c = "getPlugin",
        l = (function () {
          function e() {
            var t,
              n,
              l,
              d,
              f,
              h = this;
            function p(e) {
              void 0 === e && (e = null);
              var t = e;
              if (!t) {
                var i = n || (0, s.CD)(null, {}, h[a.oV]);
                t = l && l[c] ? i[r.zV](null, l[c]) : i[r.zV](null, l);
              }
              return t;
            }
            function v(e, t, i) {
              e && (0, o.sO)(e, a.Zh, [], null, o.le), !i && t && (i = t[r.SD]()[r.W2]());
              var u = l;
              l && l[c] && (u = l[c]()), (h[a.oV] = t), (n = (0, s.CD)(i, e, t, u));
            }
            function m() {
              (t = !1), (h[a.oV] = null), (n = null), (l = null), (f = []), (d = (0, u.Y)());
            }
            m(),
              (0, i.Z)(e, h, function (e) {
                (e[r.VL] = function (e, n, i, r) {
                  v(e, n, r), (t = !0);
                }),
                  (e[r.fi] = function (t, n) {
                    var i,
                      u = e[a.oV];
                    if (u && (!t || u === t[a.oV]())) {
                      var h,
                        p = !1,
                        v = t || (0, s.Bt)(null, u, l && l[c] ? l[c]() : l),
                        g = n || (((i = { reason: 0 })[r.d] = !1), i);
                      return e[r.F3] && !0 === e[r.F3](v, g, y) ? (h = !0) : y(), h;
                    }
                    function y() {
                      if (!p) {
                        (p = !0), d.run(v, n);
                        var e = f;
                        (f = []),
                          (0, o.tO)(e, function (e) {
                            e.rm();
                          }),
                          !0 === h && v[r.uL](g),
                          m();
                      }
                    }
                  }),
                  (e[r.Tu] = function (t, n) {
                    var i = e[a.oV];
                    if (i && (!t || i === t[a.oV]())) {
                      var o,
                        u = !1,
                        d = t || (0, s.xy)(null, i, l && l[c] ? l[c]() : l),
                        f = n || { reason: 0 };
                      return e._doUpdate && !0 === e._doUpdate(d, f, h) ? (o = !0) : h(), o;
                    }
                    function h() {
                      u || ((u = !0), v(d.getCfg(), d.core(), d[r.W2]()));
                    }
                  }),
                  (e._addHook = function (e) {
                    e && ((0, o.kJ)(e) ? (f = f.concat(e)) : f[r.MW](e));
                  }),
                  (0, o.Oi)(
                    e,
                    "_addUnloadCb",
                    function () {
                      return d;
                    },
                    "add"
                  );
              }),
              (h[r.mc] = function (e) {
                return p(e)[r.mc]();
              }),
              (h[r.yl] = function () {
                return t;
              }),
              (h.setInitialized = function (e) {
                t = e;
              }),
              (h[r.Jd] = function (e) {
                l = e;
              }),
              (h[r.uL] = function (e, t) {
                t ? t[r.uL](e) : l && (0, o.mf)(l[a.hL]) && l[a.hL](e, null);
              }),
              (h._getTelCtx = p);
          }
          return (e.__ieDyn = 1), e;
        })();
    },
    7624: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => p, K: () => v });
      var i = n(1550),
        r = n(8145),
        o = n(4869),
        a = n(6335),
        s = n(9406),
        u = i.RJ,
        c = "2.8.14",
        l = "." + (0, s.pZ)(6),
        d = 0;
      function f(e) {
        return 1 === e[r.xv] || 9 === e[r.xv] || !+e[r.xv];
      }
      function h(e, t) {
        var n = t[e.id];
        if (!n) {
          n = {};
          try {
            f(t) &&
              ((function (e, t, n) {
                if (u)
                  try {
                    return u(e, t, { value: n, enumerable: !1, configurable: !0 }), !0;
                  } catch (e) {}
                return !1;
              })(t, e.id, n) ||
                (t[e.id] = n));
          } catch (e) {}
        }
        return n;
      }
      function p(e, t) {
        return void 0 === t && (t = !1), (0, o.Gf)(e + d++ + (t ? "." + c : a.qS) + l);
      }
      function v(e) {
        var t = {
          id: p("_aiData-" + (e || a.qS) + "." + c),
          accept: function (e) {
            return f(e);
          },
          get: function (e, n, i, r) {
            var a = e[t.id];
            return a ? a[(0, o.Gf)(n)] : (r && ((a = h(t, e))[(0, o.Gf)(n)] = i), i);
          },
          kill: function (e, t) {
            if (e && e[t])
              try {
                delete e[t];
              } catch (e) {}
          }
        };
        return t;
      }
    },
    8341: (e, t, n) => {
      "use strict";
      n.d(t, { j: () => c, p: () => l });
      var i,
        r = n(8145),
        o = n(9251),
        a = ["eventsSent", "eventsDiscarded", "eventsSendRequest", "perfEvent"],
        s = null;
      function u(e, t) {
        return function () {
          var n = arguments,
            i = c(t);
          if (i) {
            var o = i.listener;
            o && o[e] && o[e][r.ZV](o, n);
          }
        };
      }
      function c(e) {
        var t,
          n = s;
        return (
          n || !0 === e.disableDbgExt || (n = s || ((t = (0, o.a8)("Microsoft")) && (s = t.ApplicationInsights), s)),
          n ? n.ChromeDbgExt : null
        );
      }
      function l(e) {
        if (!i) {
          i = {};
          for (var t = 0; t < a[r.R5]; t++) i[a[t]] = u(a[t], e);
        }
        return i;
      }
    },
    9339: (e, t, n) => {
      "use strict";
      n.d(t, { AQ: () => h, jV: () => m, kP: () => v, lQ: () => d, vH: () => f });
      var i = n(9141),
        r = n(8145),
        o = n(8341),
        a = n(9251),
        s = n(4869),
        u = n(6335);
      function c(e) {
        return e ? '"' + e[r.i7](/\"/g, u.qS) + '"' : u.qS;
      }
      function l(e, t) {
        var n = (0, a.dr)();
        if (n) {
          var i = "log";
          n[e] && (i = e), (0, s.mf)(n[i]) && n[i](t);
        }
      }
      var d = (function () {
        function e(e, t, n, i) {
          void 0 === n && (n = !1);
          var o = this;
          (o[r.Gc] = e), (o[r.gU] = (n ? "AI: " : "AI (Internal): ") + e);
          var s = u.qS;
          (0, a.nS)() && (s = (0, a.xA)().stringify(i));
          var l = (t ? " message:" + c(t) : u.qS) + (i ? " props:" + c(s) : u.qS);
          o[r.gU] += l;
        }
        return (e.dataType = "MessageData"), e;
      })();
      function f(e, t) {
        return (e || {})[r.eZ] || new h(t);
      }
      var h = (function () {
        function e(t) {
          (this.identifier = "DiagnosticLogger"), (this.queue = []);
          var n,
            c,
            f,
            h,
            p = 0,
            v = {};
          (0, i.Z)(e, this, function (e) {
            function i(t, n) {
              if (!(p >= f)) {
                var i = !0,
                  o = "AITR_" + n[r.Gc];
                if ((v[o] ? (i = !1) : (v[o] = !0), i && (t <= c && (e.queue[r.MW](n), p++, m(1 === t ? "error" : "warn", n)), p === f))) {
                  var a = "Internal events throttle limit per PageView reached for this app.",
                    s = new d(23, a, !1);
                  e.queue[r.MW](s), 1 === t ? e[u.ys](a) : e[u.cL](a);
                }
              }
            }
            function m(e, n) {
              var i = (0, o.j)(t || {});
              i && i[r.mc] && i[r.mc](e, n);
            }
            !(function (e) {
              (n = (0, s.v4)(e.loggingLevelConsole, 0)),
                (c = (0, s.v4)(e.loggingLevelTelemetry, 1)),
                (f = (0, s.v4)(e.maxMessageLimit, 25)),
                (h = (0, s.v4)(e.enableDebug, (0, s.v4)(e[r.Fr], !1)));
            })(t || {}),
              (e.consoleLoggingLevel = function () {
                return n;
              }),
              (e.telemetryLoggingLevel = function () {
                return c;
              }),
              (e.maxInternalMessageLimit = function () {
                return f;
              }),
              (e[r.Fr] = function () {
                return h;
              }),
              (e.throwInternal = function (t, o, c, l, f) {
                void 0 === f && (f = !1);
                var p = new d(o, c, f, l);
                if (h) throw (0, a.eU)(p);
                var g = 1 === t ? u.ys : u.cL;
                if ((0, s.o8)(p[r.gU])) m("throw" + (1 === t ? "Critical" : "Warning"), p);
                else {
                  if (f) {
                    var y = +p[r.Gc];
                    !v[y] && n >= t && (e[g](p[r.gU]), (v[y] = !0));
                  } else n >= t && e[g](p[r.gU]);
                  i(t, p);
                }
              }),
              (e[u.cL] = function (e) {
                l("warn", e), m("warning", e);
              }),
              (e[u.ys] = function (e) {
                l("error", e), m("error", e);
              }),
              (e.resetInternalMessageCount = function () {
                (p = 0), (v = {});
              }),
              (e[r.jk] = i);
          });
        }
        return (e.__ieDyn = 1), e;
      })();
      function p(e) {
        return e || new h();
      }
      function v(e, t, n, i, r, o) {
        void 0 === o && (o = !1), p(e).throwInternal(t, n, i, r, o);
      }
      function m(e, t) {
        p(e)[u.cL](t);
      }
    },
    9251: (e, t, n) => {
      "use strict";
      n.d(t, {
        JO: () => H,
        Jj: () => A,
        MF: () => V,
        MX: () => N,
        Me: () => P,
        Z3: () => z,
        a8: () => E,
        b$: () => U,
        cp: () => q,
        dr: () => I,
        eU: () => W,
        gz: () => F,
        jW: () => M,
        k$: () => L,
        nS: () => B,
        r: () => D,
        w1: () => j,
        xA: () => R
      });
      var i = n(1550),
        r = n(175),
        o = n(8145),
        a = n(4869),
        s = n(6335),
        u = "window",
        c = "document",
        l = "navigator",
        d = "location",
        f = "console",
        h = "performance",
        p = "JSON",
        v = "crypto",
        m = "msCrypto",
        g = "ReactNative",
        y = "msie",
        _ = "trident/",
        $ = "XMLHttpRequest",
        b = null,
        C = null,
        w = !1,
        S = null,
        x = null;
      function T(e, t) {
        var n = !1;
        if (e) {
          try {
            if (!(n = t in e)) {
              var r = e[i.hB];
              r && (n = t in r);
            }
          } catch (e) {}
          if (!n)
            try {
              var o = new e();
              n = !(0, a.o8)(o[t]);
            } catch (e) {}
        }
        return n;
      }
      function E(e) {
        var t = (0, r.Rd)();
        return t && t[e] ? t[e] : e === u && k() ? window : null;
      }
      function k() {
        return Boolean(typeof window === i.fK && window);
      }
      function A() {
        return k() ? window : E(u);
      }
      function P() {
        return Boolean(typeof document === i.fK && document) ? document : E(c);
      }
      function O() {
        return Boolean(typeof navigator === i.fK && navigator);
      }
      function M() {
        return O() ? navigator : E(l);
      }
      function L(e) {
        if (e && w) {
          var t = E("__mockLocation");
          if (t) return t;
        }
        return typeof location === i.fK && location ? location : E(d);
      }
      function I() {
        return typeof console !== i.jA ? console : E(f);
      }
      function D() {
        return E(h);
      }
      function B() {
        return Boolean((typeof JSON === i.fK && JSON) || null !== E(p));
      }
      function R() {
        return B() ? JSON || E(p) : null;
      }
      function N() {
        return E(v);
      }
      function F() {
        return E(m);
      }
      function U() {
        var e = M();
        return !(!e || !e.product) && e.product === g;
      }
      function j() {
        var e = M();
        if (e && (e[o.qV] !== C || null === b)) {
          var t = ((C = e[o.qV]) || s.qS)[o.T1]();
          b = (0, a._Q)(t, y) || (0, a._Q)(t, _);
        }
        return b;
      }
      function W(e) {
        var t = Object[i.hB].toString[o._S](e),
          n = s.qS;
        return (
          "[object Error]" === t
            ? (n = "{ stack: '" + e.stack + "', message: '" + e.message + "', name: '" + e[o.I] + "'")
            : B() && (n = R().stringify(e)),
          t + n
        );
      }
      function V() {
        return null === x && (x = O() && Boolean(M().sendBeacon)), x;
      }
      function H(e) {
        var t = !1;
        try {
          t = !!E("fetch");
          var n = E("Request");
          t && e && n && (t = T(n, "keepalive"));
        } catch (e) {}
        return t;
      }
      function q() {
        return null === S && (S = typeof XDomainRequest !== i.jA) && z() && (S = S && !T(E($), "withCredentials")), S;
      }
      function z() {
        var e = !1;
        try {
          e = !!E($);
        } catch (e) {}
        return e;
      }
    },
    4869: (e, t, n) => {
      "use strict";
      n.d(t, {
        Ax: () => be,
        BX: () => B,
        FL: () => le,
        FY: () => ae,
        Gf: () => U,
        HD: () => G,
        Id: () => W,
        J_: () => q,
        Kn: () => N,
        Mr: () => te,
        Oi: () => _e,
        UA: () => ee,
        VZ: () => K,
        Vb: () => $e,
        Xz: () => ne,
        Y6: () => Y,
        Ym: () => L,
        _A: () => ce,
        _Q: () => H,
        _y: () => ge,
        fQ: () => me,
        hj: () => Z,
        jj: () => fe,
        jn: () => Q,
        kJ: () => z,
        l_: () => se,
        le: () => D,
        m6: () => de,
        mf: () => F,
        mm: () => Ce,
        nd: () => ie,
        nr: () => R,
        o8: () => I,
        qK: () => pe,
        rW: () => j,
        sO: () => he,
        tO: () => X,
        v4: () => ve,
        xe: () => V
      });
      var i = n(1550),
        r = n(175),
        o = n(8145),
        a = n(6335),
        s = "toISOString",
        u = "endsWith",
        c = "startsWith",
        l = "indexOf",
        d = "map",
        f = "reduce",
        h = "trim",
        p = "toString",
        v = "__proto__",
        m = "constructor",
        g = i.RJ,
        y = i.Pw.freeze,
        _ = (i.Pw.seal, i.Pw.keys),
        $ = String[i.hB],
        b = $[h],
        C = $[u],
        w = $[c],
        S = Date[i.hB][s],
        x = Array.isArray,
        T = i.V4[p],
        E = i.CY[p],
        k = E[o._S](i.Pw),
        A = /-([a-z])/g,
        P = /([^\w\d_$])/g,
        O = /^(\d+[\w\d_$])/,
        M = Object.getPrototypeOf;
      function L(e, t) {
        return typeof e === t;
      }
      function I(e) {
        return void 0 === e || typeof e === i.jA;
      }
      function D(e) {
        return null === e || I(e);
      }
      function B(e) {
        return !D(e);
      }
      function R(e, t) {
        return !(!e || !i.CY[o._S](e, t));
      }
      function N(e) {
        return !(!e || typeof e !== i.fK);
      }
      function F(e) {
        return !(!e || typeof e !== i.cb);
      }
      function U(e) {
        var t = e;
        return (
          t &&
            G(t) &&
            (t = (t = (t = t[o.i7](A, function (e, t) {
              return t.toUpperCase();
            }))[o.i7](P, "_"))[o.i7](O, function (e, t) {
              return "_" + t;
            })),
          t
        );
      }
      function j(e, t) {
        if (e) for (var n in e) i.CY[o._S](e, n) && t[o._S](e, n, e[n]);
      }
      function W(e, t) {
        var n = !1;
        return (
          e &&
            t &&
            !(n = e === t) &&
            (n = C
              ? e[u](t)
              : (function (e, t) {
                  var n = !1,
                    i = t ? t[o.R5] : 0,
                    r = e ? e[o.R5] : 0;
                  if (i && r && r >= i && !(n = e === t)) {
                    for (var a = r - 1, s = i - 1; s >= 0; s--) {
                      if (e[a] != t[s]) return !1;
                      a--;
                    }
                    n = !0;
                  }
                  return n;
                })(e, t)),
          n
        );
      }
      function V(e, t) {
        var n = !1;
        return (
          e &&
            t &&
            !(n = e === t) &&
            (n = w
              ? e[c](t)
              : (function (e, t) {
                  var n = !1,
                    i = t ? t[o.R5] : 0;
                  if (e && i && e[o.R5] >= i && !(n = e === t)) {
                    for (var r = 0; r < i; r++) if (e[r] !== t[r]) return !1;
                    n = !0;
                  }
                  return n;
                })(e, t)),
          n
        );
      }
      function H(e, t) {
        return !(!e || !t) && -1 !== e[o.ou](t);
      }
      function q(e) {
        return !(!e || "[object Date]" !== T[o._S](e));
      }
      var z =
        x ||
        function (e) {
          return !(!e || "[object Array]" !== T[o._S](e));
        };
      function K(e) {
        return !(!e || "[object Error]" !== T[o._S](e));
      }
      function G(e) {
        return "string" == typeof e;
      }
      function Z(e) {
        return "number" == typeof e;
      }
      function Q(e) {
        return "boolean" == typeof e;
      }
      function J(e) {
        var t = !1;
        if (e && "object" == typeof e) {
          var n = M
            ? M(e)
            : (function (e) {
                if (e) {
                  if (M) return M(e);
                  var t = e[v] || e[i.hB] || e[m];
                  if (t) return t;
                }
                return null;
              })(e);
          n ? (n[m] && i.CY[o._S](n, m) && (n = n[m]), (t = typeof n === i.cb && E[o._S](n) === k)) : (t = !0);
        }
        return t;
      }
      function Y(e) {
        if (e)
          return S
            ? e[s]()
            : (function (e) {
                if (e && e.getUTCFullYear) {
                  var t = function (e) {
                    var t = String(e);
                    return 1 === t[o.R5] && (t = "0" + t), t;
                  };
                  return (
                    e.getUTCFullYear() +
                    "-" +
                    t(e.getUTCMonth() + 1) +
                    "-" +
                    t(e.getUTCDate()) +
                    "T" +
                    t(e.getUTCHours()) +
                    ":" +
                    t(e.getUTCMinutes()) +
                    ":" +
                    t(e.getUTCSeconds()) +
                    "." +
                    String((e.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) +
                    "Z"
                  );
                }
              })(e);
      }
      function X(e, t, n) {
        var i = e[o.R5];
        try {
          for (var r = 0; r < i && (!(r in e) || -1 !== t[o._S](n || e, e[r], r, e)); r++);
        } catch (e) {}
      }
      function ee(e, t, n) {
        if (e) {
          if (e[l]) return e[l](t, n);
          var i = e[o.R5],
            r = n || 0;
          try {
            for (var a = Math.max(r >= 0 ? r : i - Math.abs(r), 0); a < i; a++) if (a in e && e[a] === t) return a;
          } catch (e) {}
        }
        return -1;
      }
      function te(e, t, n) {
        var i;
        if (e) {
          if (e[d]) return e[d](t, n);
          var r = e[o.R5],
            a = n || e;
          i = new Array(r);
          try {
            for (var s = 0; s < r; s++) s in e && (i[s] = t[o._S](a, e[s], e));
          } catch (e) {}
        }
        return i;
      }
      function ne(e, t, n) {
        var i;
        if (e) {
          if (e[f]) return e[f](t, n);
          var r = e[o.R5],
            a = 0;
          if (arguments[o.R5] >= 3) i = arguments[2];
          else {
            for (; a < r && !(a in e); ) a++;
            i = e[a++];
          }
          for (; a < r; ) a in e && (i = t(i, e[a], a, e)), a++;
        }
        return i;
      }
      function ie(e) {
        return e && (e = b && e[h] ? e[h]() : e[o.i7] ? e[o.i7](/^\s+|(?=\s)\s+$/g, a.qS) : e), e;
      }
      var re = !{ toString: null }.propertyIsEnumerable("toString"),
        oe = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"];
      function ae(e) {
        var t = typeof e;
        if ((t === i.cb || (t === i.fK && null !== e) || (0, r.ZU)("objKeys called on non-object"), !re && _)) return _(e);
        var n = [];
        for (var a in e) e && i.CY[o._S](e, a) && n[o.MW](a);
        if (re) for (var s = oe[o.R5], u = 0; u < s; u++) e && i.CY[o._S](e, oe[u]) && n[o.MW](oe[u]);
        return n;
      }
      function se(e, t, n, i) {
        if (g)
          try {
            var r = { enumerable: !0, configurable: !0 };
            return n && (r.get = n), i && (r.set = i), g(e, t, r), !0;
          } catch (e) {}
        return !1;
      }
      function ue(e) {
        return e;
      }
      function ce(e) {
        return (
          y &&
            j(e, function (e, t) {
              (z(t) || N(t)) && y(t);
            }),
          le(e)
        );
      }
      var le = y || ue;
      function de() {
        var e = Date;
        return e.now ? e.now() : new e().getTime();
      }
      function fe(e) {
        return K(e) ? e[o.I] : a.qS;
      }
      function he(e, t, n, i, r) {
        var o = n;
        return e && ((o = e[t]) === n || (r && !r(o)) || (i && !i(n)) || ((o = n), (e[t] = o))), o;
      }
      function pe(e, t, n) {
        var i;
        return e ? !(i = e[t]) && D(i) && ((i = I(n) ? {} : n), (e[t] = i)) : (i = I(n) ? {} : n), i;
      }
      function ve(e, t) {
        return D(e) ? t : e;
      }
      function me(e) {
        return !!e;
      }
      function ge(e) {
        throw new Error(e);
      }
      function ye(e, t) {
        var n = null,
          i = null;
        return (
          F(e) ? (n = e) : (i = e),
          function () {
            var e = arguments;
            if ((n && (i = n()), i)) return i[t][o.ZV](i, e);
          }
        );
      }
      function _e(e, t, n, i, r) {
        e && t && n && (!1 !== r || I(e[t])) && (e[t] = ye(n, i));
      }
      function $e(e, t, n, i) {
        return (
          e &&
            t &&
            N(e) &&
            z(n) &&
            X(n, function (n) {
              G(n) && _e(e, n, t, n, i);
            }),
          e
        );
      }
      function be(e) {
        return e && i.rl && (e = (0, i.Pw)((0, i.rl)({}, e))), e;
      }
      function Ce(e, t, n, r, a, s) {
        var u = arguments,
          c = u[0] || {},
          l = u[o.R5],
          d = !1,
          f = 1;
        for (l > 0 && Q(c) && ((d = c), (c = u[f] || {}), f++), N(c) || (c = {}); f < l; f++) {
          var h = u[f],
            p = z(h),
            v = N(h);
          for (var m in h) {
            if ((p && m in h) || (v && i.CY[o._S](h, m))) {
              var g = h[m],
                y = void 0;
              if (d && g && ((y = z(g)) || J(g))) {
                var _ = c[m];
                y ? z(_) || (_ = []) : J(_) || (_ = {}), (g = Ce(d, _, g));
              }
              void 0 !== g && (c[m] = g);
            }
          }
        }
        return c;
      }
    },
    6335: (e, t, n) => {
      "use strict";
      n.d(t, {
        $F: () => h,
        C$: () => v,
        DN: () => a,
        Z: () => r,
        Zh: () => u,
        cL: () => g,
        f_: () => p,
        hL: () => l,
        js: () => c,
        kl: () => y,
        mE: () => s,
        oV: () => o,
        qS: () => i,
        uC: () => f,
        yi: () => d,
        ys: () => m
      });
      var i = "",
        r = "channels",
        o = "core",
        a = "createPerfMgr",
        s = "disabled",
        u = "extensionConfig",
        c = "extensions",
        l = "processTelemetry",
        d = "priority",
        f = "eventsSent",
        h = "eventsDiscarded",
        p = "eventsSendRequest",
        v = "perfEvent",
        m = "errorToConsole",
        g = "warnToConsole",
        y = "getPerfMgr";
    },
    1782: (e, t, n) => {
      "use strict";
      n.d(t, { Jk: () => f, Lm: () => p, j5: () => v });
      var i = n(9141),
        r = n(8145),
        o = n(4869),
        a = n(6335),
        s = "ctx",
        u = "ParentContextKey",
        c = "ChildrenContextKey",
        l = null,
        d = (function () {
          function e(t, n, i) {
            var a,
              l = this,
              d = !1;
            ((l.start = (0, o.m6)()),
            (l[r.I] = t),
            (l[r.d] = i),
            (l[r.PL] = function () {
              return !1;
            }),
            (0, o.mf)(n)) &&
              (d = (0, o.l_)(l, "payload", function () {
                return !a && (0, o.mf)(n) && ((a = n()), (n = null)), a;
              }));
            (l[r.T] = function (t) {
              return t ? (t === e[u] || t === e[c] ? l[t] : (l[s] || {})[t]) : null;
            }),
              (l[r.wu] = function (t, n) {
                if (t)
                  if (t === e[u])
                    l[t] ||
                      (l[r.PL] = function () {
                        return !0;
                      }),
                      (l[t] = n);
                  else if (t === e[c]) l[t] = n;
                  else {
                    (l[s] = l[s] || {})[t] = n;
                  }
              }),
              (l[r.Km] = function () {
                var t = 0,
                  i = l[r.T](e[c]);
                if ((0, o.kJ)(i))
                  for (var a = 0; a < i[r.R5]; a++) {
                    var s = i[a];
                    s && (t += s[r.Z_]);
                  }
                (l[r.Z_] = (0, o.m6)() - l.start),
                  (l.exTime = l[r.Z_] - t),
                  (l[r.Km] = function () {}),
                  !d && (0, o.mf)(n) && (l.payload = n());
              });
          }
          return (e.ParentContextKey = "parent"), (e.ChildrenContextKey = "childEvts"), e;
        })(),
        f = (function () {
          function e(t) {
            (this.ctx = {}),
              (0, i.Z)(e, this, function (e) {
                (e.create = function (e, t, n) {
                  return new d(e, t, n);
                }),
                  (e.fire = function (e) {
                    e && (e[r.Km](), t && (0, o.mf)(t[a.C$]) && t[a.C$](e));
                  }),
                  (e[r.wu] = function (t, n) {
                    t && ((e[s] = e[s] || {})[t] = n);
                  }),
                  (e[r.T] = function (t) {
                    return (e[s] || {})[t];
                  });
              });
          }
          return (e.__ieDyn = 1), e;
        })(),
        h = "CoreUtils.doPerf";
      function p(e, t, n, i, o) {
        if (e) {
          var s = e;
          if ((s[a.kl] && (s = s[a.kl]()), s)) {
            var l = void 0,
              f = s[r.T](h);
            try {
              if ((l = s.create(t(), i, o))) {
                if (f && l[r.wu] && (l[r.wu](d[u], f), f[r.T] && f[r.wu])) {
                  var p = f[r.T](d[c]);
                  p || ((p = []), f[r.wu](d[c], p)), p[r.MW](l);
                }
                return s[r.wu](h, l), n(l);
              }
            } catch (e) {
              l && l[r.wu] && l[r.wu]("exception", e);
            } finally {
              l && s.fire(l), s[r.wu](h, f);
            }
          }
        }
        return n();
      }
      function v() {
        return l;
      }
    },
    1030: (e, t, n) => {
      "use strict";
      n.d(t, { Bt: () => m, CD: () => v, jV: () => y, xy: () => g });
      var i = n(8145),
        r = n(9339),
        o = n(9251),
        a = n(4869),
        s = n(6335),
        u = n(1782),
        c = n(2681),
        l = "TelemetryPluginChain",
        d = "_hasRun",
        f = "_getTelCtx",
        h = 0;
      function p(e, t, n, u) {
        var c = null,
          l = [];
        null !== u &&
          (c = u
            ? (function (e, t, n) {
                for (; e; ) {
                  if (e[i.TO]() === n) return e;
                  e = e[i.W2]();
                }
                return y([n], t[i.TC] || {}, t);
              })(e, n, u)
            : e);
        var d = {
          _next: function () {
            var e = c;
            if (((c = e ? e[i.W2]() : null), !e)) {
              var t = l;
              t &&
                t[i.R5] > 0 &&
                ((0, a.tO)(t, function (e) {
                  try {
                    e.func[i._S](e.self, e.args);
                  } catch (e) {
                    (0, r.kP)(n[i.eZ], 2, 73, "Unexpected Exception during onComplete - " + (0, o.eU)(e));
                  }
                }),
                (l = []));
            }
            return e;
          },
          ctx: {
            core: function () {
              return n;
            },
            diagLog: function () {
              return (0, r.vH)(n, t);
            },
            getCfg: function () {
              return t;
            },
            getExtCfg: f,
            getConfig: function (e, n, i) {
              void 0 === i && (i = !1);
              var r,
                o = f(e, null);
              o && !(0, a.le)(o[n]) ? (r = o[n]) : t && !(0, a.le)(t[n]) && (r = t[n]);
              return (0, a.le)(r) ? i : r;
            },
            hasNext: function () {
              return !!c;
            },
            getNext: function () {
              return c;
            },
            setNext: function (e) {
              c = e;
            },
            iterate: function (e) {
              var t;
              for (; (t = d._next()); ) {
                var n = t[i.TO]();
                n && e(n);
              }
            },
            onComplete: function (e, t) {
              for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
              e && l[i.MW]({ func: e, self: (0, a.o8)(t) ? d.ctx : t, args: n });
            }
          }
        };
        function f(e, n, i) {
          var r;
          if ((void 0 === n && (n = {}), void 0 === i && (i = 0), t)) {
            var o = t[s.Zh];
            o && e && (r = o[e]);
          }
          if (r) {
            if ((0, a.Kn)(n) && 0 !== i) {
              var u = (0, a.mm)(!0, n, r);
              t &&
                2 === i &&
                (0, a.rW)(n, function (e) {
                  if ((0, a.le)(u[e])) {
                    var n = t[e];
                    (0, a.le)(n) || (u[e] = n);
                  }
                }),
                (r = u);
            }
          } else r = n;
          return r;
        }
        return d;
      }
      function v(e, t, n, r) {
        var o = p(e, t, n, r),
          u = o.ctx;
        return (
          (u[i.uL] = function (e) {
            var t = o._next();
            return t && t[s.hL](e, u), !t;
          }),
          (u[i.zV] = function (e, r) {
            return void 0 === e && (e = null), (0, a.kJ)(e) && (e = y(e, t, n, r)), v(e || u[i.W2](), t, n, r);
          }),
          u
        );
      }
      function m(e, t, n) {
        var r = t[i.TC] || {},
          o = p(e, r, t, n),
          s = o.ctx;
        return (
          (s[i.uL] = function (e) {
            var t = o._next();
            return t && t.unload(s, e), !t;
          }),
          (s[i.zV] = function (e, n) {
            return void 0 === e && (e = null), (0, a.kJ)(e) && (e = y(e, r, t, n)), m(e || s[i.W2](), t, n);
          }),
          s
        );
      }
      function g(e, t, n) {
        var r = t[i.TC] || {},
          o = p(e, r, t, n).ctx;
        return (
          (o[i.uL] = function (e) {
            return o.iterate(function (t) {
              (0, a.mf)(t[i.Tu]) && t[i.Tu](o, e);
            });
          }),
          (o[i.zV] = function (e, n) {
            return void 0 === e && (e = null), (0, a.kJ)(e) && (e = y(e, r, t, n)), g(e || o[i.W2](), t, n);
          }),
          o
        );
      }
      function y(e, t, n, p) {
        var m = null,
          g = !p;
        if ((0, a.kJ)(e) && e[i.R5] > 0) {
          var _ = null;
          (0, a.tO)(e, function (e) {
            if ((g || p !== e || (g = !0), g && e && (0, a.mf)(e[s.hL]))) {
              var y = (function (e, t, n) {
                var p,
                  m = null,
                  g = (0, a.mf)(e[s.hL]),
                  y = (0, a.mf)(e[i.Jd]);
                p = e ? e[i.pZ] + "-" + e[s.yi] + "-" + h++ : "Unknown-0-" + h++;
                var _ = {
                  getPlugin: function () {
                    return e;
                  },
                  getNext: function () {
                    return m;
                  },
                  processTelemetry: C,
                  unload: w,
                  update: S,
                  _id: p,
                  _setNext: function (e) {
                    m = e;
                  }
                };
                function $() {
                  var i;
                  return e && (0, a.mf)(e[f]) && (i = e[f]()), i || (i = v(_, t, n)), i;
                }
                function b(t, n, a, c, f) {
                  var h = !1,
                    v = e ? e[i.pZ] : l,
                    g = t[d];
                  return (
                    g || (g = t[d] = {}),
                    t.setNext(m),
                    e &&
                      (0, u.Lm)(
                        t[s.oV](),
                        function () {
                          return v + ":" + a;
                        },
                        function () {
                          g[p] = !0;
                          try {
                            var e = m ? m._id : s.qS;
                            e && (g[e] = !1), (h = n(t));
                          } catch (e) {
                            var u = !m || g[m._id];
                            u && (h = !0),
                              (m && u) ||
                                (0, r.kP)(
                                  t[i.mc](),
                                  1,
                                  73,
                                  "Plugin [" + v + "] failed during " + a + " - " + (0, o.eU)(e) + ", run flags: " + (0, o.eU)(g)
                                );
                          }
                        },
                        c,
                        f
                      ),
                    h
                  );
                }
                function C(t, n) {
                  function r(n) {
                    if (!e || !g) return !1;
                    var r = (0, c.OY)(e);
                    return !r[i.fi] && !r[s.mE] && (y && e[i.Jd](m), e[s.hL](t, n), !0);
                  }
                  b(
                    (n = n || $()),
                    r,
                    "processTelemetry",
                    function () {
                      return { item: t };
                    },
                    !t.sync
                  ) || n[i.uL](t);
                }
                function w(t, n) {
                  function r() {
                    var r = !1;
                    if (e) {
                      var o = (0, c.OY)(e),
                        a = e[s.oV] || o[s.oV];
                      !e ||
                        (a && a !== t.core()) ||
                        o[i.fi] ||
                        ((o[s.oV] = null), (o[i.fi] = !0), (o[i.yl] = !1), e[i.fi] && !0 === e[i.fi](t, n) && (r = !0));
                    }
                    return r;
                  }
                  b(t, r, "unload", function () {}, n[i.d]) || t[i.uL](n);
                }
                function S(t, n) {
                  function r() {
                    var r = !1;
                    if (e) {
                      var o = (0, c.OY)(e),
                        a = e[s.oV] || o[s.oV];
                      !e || (a && a !== t.core()) || o[i.fi] || (e[i.Tu] && !0 === e[i.Tu](t, n) && (r = !0));
                    }
                    return r;
                  }
                  b(t, r, "update", function () {}, !1) || t[i.uL](n);
                }
                return (0, a.FL)(_);
              })(e, t, n);
              m || (m = y), _ && _._setNext(y), (_ = y);
            }
          });
        }
        return p && !m ? y([p], t, n) : m;
      }
    },
    9406: (e, t, n) => {
      "use strict";
      n.d(t, { CN: () => m, F6: () => g, _l: () => v, az: () => p, pZ: () => y });
      var i = n(8145),
        r = n(9251),
        o = n(4869),
        a = n(6335),
        s = 4294967296,
        u = 4294967295,
        c = !1,
        l = 123456789,
        d = 987654321;
      function f(e) {
        e < 0 && (e >>>= 0), (l = (123456789 + e) & u), (d = (987654321 - e) & u), (c = !0);
      }
      function h() {
        try {
          var e = 2147483647 & (0, o.m6)();
          f(((Math.random() * s) ^ e) + e);
        } catch (e) {}
      }
      function p(e) {
        return e > 0 ? Math.floor((v() / u) * (e + 1)) >>> 0 : 0;
      }
      function v(e) {
        var t = 0,
          n = (0, r.MX)() || (0, r.gz)();
        return (
          n && n.getRandomValues && (t = n.getRandomValues(new Uint32Array(1))[0] & u),
          0 === t && (0, r.w1)() && (c || h(), (t = g() & u)),
          0 === t && (t = Math.floor((s * Math.random()) | 0)),
          e || (t >>>= 0),
          t
        );
      }
      function m(e) {
        e ? f(e) : h();
      }
      function g(e) {
        var t =
          (((((d = (36969 * (65535 & d) + (d >> 16)) & u) << 16) + (65535 & (l = (18e3 * (65535 & l) + (l >> 16)) & u))) >>> 0) & u) | 0;
        return e || (t >>>= 0), t;
      }
      function y(e) {
        void 0 === e && (e = 22);
        for (var t = v() >>> 0, n = 0, r = a.qS; r[i.R5] < e; )
          n++,
            (r += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(63 & t)),
            (t >>>= 6),
            5 === n && ((t = (((v() << 2) & 4294967295) | (3 & t)) >>> 0), (n = 0));
        return r;
      }
    },
    2681: (e, t, n) => {
      "use strict";
      n.d(t, { OY: () => h, Yn: () => m, bP: () => p, AA: () => v });
      var i = n(8145),
        r = n(7624),
        o = n(4869),
        a = n(6335),
        s = "00000000000000000000000000000000",
        u = "0000000000000000";
      function c(e, t, n) {
        return !(!e || e[i.R5] !== t || e === n) && !!e.match(/^[\da-f]*$/);
      }
      function l(e) {
        return c(e, 32, s);
      }
      function d(e) {
        return c(e, 16, u);
      }
      var f = (0, r.K)("plugin");
      function h(e) {
        return f.get(e, "state", {}, !0);
      }
      function p(e, t) {
        for (var n, r = [], s = null, u = e[i.W2](); u; ) {
          var c = u[i.TO]();
          if (c) {
            s && (0, o.mf)(s[i.Jd]) && (0, o.mf)(c[a.hL]) && s[i.Jd](c);
            ((0, o.mf)(c[i.yl]) ? c[i.yl]() : (n = h(c))[i.yl]) || r[i.MW](c), (s = c), (u = u[i.W2]());
          }
        }
        (0, o.tO)(r, function (r) {
          var o = e[a.oV]();
          r[i.VL](e.getCfg(), o, t, e[i.W2]()), (n = h(r)), r[a.oV] || n[a.oV] || (n[a.oV] = o), (n[i.yl] = !0), delete n[i.fi];
        });
      }
      function v(e) {
        return e.sort(function (e, t) {
          var n = 0;
          if (t) {
            var i = (0, o.mf)(t[a.hL]);
            (0, o.mf)(e[a.hL]) ? (n = i ? e[a.yi] - t[a.yi] : 1) : i && (n = -1);
          } else n = e ? 1 : -1;
          return n;
        });
      }
      function m(e) {
        var t = {};
        return {
          getName: function () {
            return t[i.I];
          },
          setName: function (n) {
            e && e.setName(n), (t[i.I] = n);
          },
          getTraceId: function () {
            return t[i.nY];
          },
          setTraceId: function (n) {
            e && e.setTraceId(n), l(n) && (t[i.nY] = n);
          },
          getSpanId: function () {
            return t[i._d];
          },
          setSpanId: function (n) {
            e && e.setSpanId(n), d(n) && (t[i._d] = n);
          },
          getTraceFlags: function () {
            return t[i.T0];
          },
          setTraceFlags: function (n) {
            e && e.setTraceFlags(n), (t[i.T0] = n);
          }
        };
      }
    },
    8593: (e, t, n) => {
      "use strict";
      n.d(t, { Y: () => s });
      var i = n(8145),
        r = n(9339),
        o = n(9251),
        a = n(4869);
      function s() {
        var e = [];
        return {
          add: function (t) {
            t && e[i.MW](t);
          },
          run: function (t, n) {
            (0, a.tO)(e, function (e) {
              try {
                e(t, n);
              } catch (e) {
                (0, r.kP)(t[i.mc](), 2, 73, "Unexpected error calling unload handler - " + (0, o.eU)(e));
              }
            }),
              (e = []);
          }
        };
      }
    },
    8145: (e, t, n) => {
      "use strict";
      n.d(t, {
        $h: () => F,
        F3: () => k,
        Fc: () => _,
        Fr: () => H,
        Gc: () => x,
        I: () => r,
        Jd: () => M,
        Jn: () => U,
        Km: () => ee,
        Kn: () => Z,
        LS: () => y,
        Lk: () => I,
        MW: () => s,
        P6: () => G,
        PL: () => J,
        R5: () => f,
        SD: () => v,
        T: () => Y,
        T0: () => ie,
        T1: () => z,
        TC: () => c,
        TO: () => $,
        Tu: () => A,
        VL: () => i,
        W2: () => P,
        ZV: () => W,
        Z_: () => h,
        _S: () => K,
        _d: () => ne,
        cb: () => w,
        d: () => E,
        dE: () => Q,
        eZ: () => d,
        fi: () => S,
        g: () => m,
        gU: () => T,
        i7: () => V,
        iC: () => C,
        jk: () => q,
        kL: () => b,
        mc: () => O,
        n7: () => g,
        nY: () => te,
        ou: () => D,
        p$: () => l,
        pZ: () => a,
        qV: () => R,
        tb: () => o,
        uL: () => p,
        w6: () => N,
        wu: () => X,
        xv: () => j,
        yl: () => u,
        zV: () => L,
        zc: () => B
      });
      var i = "initialize",
        r = "name",
        o = "getNotifyMgr",
        a = "identifier",
        s = "push",
        u = "isInitialized",
        c = "config",
        l = "instrumentationKey",
        d = "logger",
        f = "length",
        h = "time",
        p = "processNext",
        v = "getProcessTelContext",
        m = "addNotificationListener",
        g = "removeNotificationListener",
        y = "stopPollingInternalLogs",
        _ = "onComplete",
        $ = "getPlugin",
        b = "flush",
        C = "_extensions",
        w = "splice",
        S = "teardown",
        x = "messageId",
        T = "message",
        E = "isAsync",
        k = "_doTeardown",
        A = "update",
        P = "getNext",
        O = "diagLog",
        M = "setNextPlugin",
        L = "createNew",
        I = "cookieCfg",
        D = "indexOf",
        B = "substring",
        R = "userAgent",
        N = "split",
        F = "setEnabled",
        U = "substr",
        j = "nodeType",
        W = "apply",
        V = "replace",
        H = "enableDebugExceptions",
        q = "logInternalMessage",
        z = "toLowerCase",
        K = "call",
        G = "type",
        Z = "handler",
        Q = "listeners",
        J = "isChildEvt",
        Y = "getCtx",
        X = "setCtx",
        ee = "complete",
        te = "traceId",
        ne = "spanId",
        ie = "traceFlags";
    },
    1550: (e, t, n) => {
      "use strict";
      n.d(t, {
        CY: () => h,
        Pw: () => u,
        RJ: () => f,
        V4: () => c,
        bO: () => s,
        cb: () => i,
        fK: () => r,
        hB: () => a,
        jA: () => o,
        rl: () => l,
        yu: () => d
      });
      var i = "function",
        r = "object",
        o = "undefined",
        a = "prototype",
        s = "hasOwnProperty",
        u = Object,
        c = u[a],
        l = u.assign,
        d = u.create,
        f = u.defineProperty,
        h = c[s];
    },
    175: (e, t, n) => {
      "use strict";
      n.d(t, { Rd: () => o, ZU: () => a, pu: () => s });
      var i = n(1550),
        r = null;
      function o(e) {
        void 0 === e && (e = !0);
        var t = !1 === e ? null : r;
        return (
          t ||
            (typeof globalThis !== i.jA && (t = globalThis),
            t || typeof self === i.jA || (t = self),
            t || typeof window === i.jA || (t = window),
            t || typeof n.g === i.jA || (t = n.g),
            (r = t)),
          t
        );
      }
      function a(e) {
        throw new TypeError(e);
      }
      function s(e) {
        var t = i.yu;
        if (t) return t(e);
        if (null == e) return {};
        var n = typeof e;
        function r() {}
        return n !== i.fK && n !== i.cb && a("Object prototype may only be an Object:" + e), (r[i.hB] = e), new r();
      }
    },
    9141: (e, t, n) => {
      "use strict";
      var i;
      n.d(t, { Z: () => N });
      var r = "undefined",
        o = "constructor",
        a = "prototype",
        s = "function",
        u = "_dynInstFuncs",
        c = "_isDynProxy",
        l = "_dynClass",
        d = "_dynCls$",
        f = "_dynInstChk",
        h = f,
        p = "_dfOpts",
        v = "_unknown_",
        m = "__proto__",
        g = "_dyn" + m,
        y = "__dynProto$Gbl",
        _ = "_dynInstProto",
        $ = "useBaseInst",
        b = "setInstFuncs",
        C = Object,
        w = C.getPrototypeOf,
        S = C.getOwnPropertyNames;
      var x,
        T =
          (typeof globalThis !== r && (x = globalThis),
          x || typeof self === r || (x = self),
          x || typeof window === r || (x = window),
          x || typeof n.g === r || (x = n.g),
          x || {}),
        E = T[y] || (T[y] = { o: ((i = {}), (i[b] = !0), (i[$] = !0), i), n: 1e3 });
      function k(e, t) {
        return e && C[a].hasOwnProperty.call(e, t);
      }
      function A(e) {
        return e && (e === C[a] || e === Array[a]);
      }
      function P(e) {
        return A(e) || e === Function[a];
      }
      function O(e) {
        var t;
        if (e) {
          if (w) return w(e);
          var n = e[m] || e[a] || (e[o] ? e[o][a] : null);
          (t = e[g] || n), k(e, g) || (delete e[_], (t = e[g] = e[_] || e[g]), (e[_] = n));
        }
        return t;
      }
      function M(e, t) {
        var n = [];
        if (S) n = S(e);
        else for (var i in e) "string" == typeof i && k(e, i) && n.push(i);
        if (n && n.length > 0) for (var r = 0; r < n.length; r++) t(n[r]);
      }
      function L(e, t, n) {
        return t !== o && typeof e[t] === s && (n || k(e, t));
      }
      function I(e) {
        throw new TypeError("DynamicProto: " + e);
      }
      function D(e, t) {
        for (var n = e.length - 1; n >= 0; n--) if (e[n] === t) return !0;
        return !1;
      }
      function B(e, t, n, i, r) {
        function o(e, t) {
          var n = function () {
            var i =
              (function (e, t, n, i) {
                var r = null;
                if (e && k(n, l)) {
                  var o = e[u] || {};
                  if (((r = (o[n[l]] || {})[t]) || I("Missing [" + t + "] " + s), !r[f] && !1 !== o[h])) {
                    for (var a = !k(e, t), c = O(e), d = []; a && c && !P(c) && !D(d, c); ) {
                      var p = c[t];
                      if (p) {
                        a = p === i;
                        break;
                      }
                      d.push(c), (c = O(c));
                    }
                    try {
                      a && (e[t] = r), (r[f] = 1);
                    } catch (e) {
                      o[h] = !1;
                    }
                  }
                }
                return r;
              })(this, t, e, n) ||
              (function (e, t, n) {
                var i = t[e];
                return i === n && (i = O(t)[e]), typeof i !== s && I("[" + e + "] is not a " + s), i;
              })(t, e, n);
            return i.apply(this, arguments);
          };
          return (n[c] = 1), n;
        }
        if (!A(e)) {
          var a = (n[u] = n[u] || {}),
            d = (a[t] = a[t] || {});
          !1 !== a[h] && (a[h] = !!r),
            M(n, function (t) {
              L(n, t, !1) && n[t] !== i[t] && ((d[t] = n[t]), delete n[t], (!k(e, t) || (e[t] && !e[t][c])) && (e[t] = o(e, t)));
            });
        }
      }
      function R(e, t) {
        return k(e, a) ? e.name || t || v : ((e || {})[o] || {}).name || t || v;
      }
      function N(e, t, n, i) {
        k(e, a) || I("theClass is an invalid class definition.");
        var r = e[a];
        (function (e, t) {
          if (w) {
            for (var n = [], i = O(t); i && !P(i) && !D(n, i); ) {
              if (i === e) return !0;
              n.push(i), (i = O(i));
            }
            return !1;
          }
          return !0;
        })(r, t) || I("[" + R(e) + "] not in hierarchy of [" + R(t) + "]");
        var o = null;
        k(r, l) ? (o = r[l]) : ((o = d + R(e, "_") + "$" + E.n), E.n++, (r[l] = o));
        var s = N[p],
          f = !!s[$];
        f && i && void 0 !== i[$] && (f = !!i[$]);
        var v = (function (e) {
            var t = {};
            return (
              M(e, function (n) {
                !t[n] && L(e, n, !1) && (t[n] = e[n]);
              }),
              t
            );
          })(t),
          m = (function (e, t, n, i) {
            function r(e, t, n) {
              var r = t[n];
              if (r[c] && i) {
                var o = e[u] || {};
                !1 !== o[h] && (r = (o[t[l]] || {})[n] || r);
              }
              return function () {
                return r.apply(e, arguments);
              };
            }
            var o = {};
            M(n, function (e) {
              o[e] = r(t, n, e);
            });
            for (var a = O(e), s = []; a && !P(a) && !D(s, a); )
              M(a, function (e) {
                !o[e] && L(a, e, !w) && (o[e] = r(t, a, e));
              }),
                s.push(a),
                (a = O(a));
            return o;
          })(r, t, v, f);
        n(t, m);
        var g = !!w && !!s[b];
        g && i && (g = !!i[b]), B(r, o, t, v, !1 !== g);
      }
      N[p] = E.o;
    },
    5420: (e, t, n) => {
      "use strict";
      var i;
      n.d(t, { x: () => i }),
        (function (e) {
          (e.USGOV_DOD = "https://pf.events.data.microsoft.com/OneCollector/1.0/"),
            (e.USGOV_DOJ = "https://tb.events.data.microsoft.com/OneCollector/1.0/"),
            (e.PUBLIC = "https://browser.events.data.microsoft.com/OneCollector/1.0/"),
            (e.CUSTOMER_CONTENT = ""),
            (e.EUDB = "https://eu-office.events.data.microsoft.com/OneCollector/1.0/");
        })(i || (i = {}));
    },
    132: (e, t, n) => {
      "use strict";
      n.d(t, { a: () => Dn });
      var i = n(7582),
        r = n(6748),
        o = "Data.";
      function a(e, t, n, i) {
        var a = !0;
        if (t)
          for (
            var s = function (t) {
                var s = t.classification,
                  u = t.dataType,
                  c = t.name;
                if (s && !(4 === s || 1 === s || (2 === i && 32 === s) || (3 === i && 2048 === s))) return (a = !1), "break";
                if (3 === i && n && 3 !== u && 1 !== u && 2 !== u && "OTelJS.Version" !== c && "OTelJS.Sink" !== c)
                  return (
                    (0, r.uf)(0, 1, function () {
                      return "DNM: Invalid field type " + c;
                    }),
                    (a = !1),
                    "break"
                  );
                var l = void 0;
                l = n ? ("zC." === c.substr(0, 3) ? "zC." + o + c.substr(3) : o + c) : c;
                var d = void 0;
                switch (u) {
                  case 3:
                    d = 6;
                    break;
                  case 2:
                    d = 4;
                    break;
                  case 4:
                    d = 8;
                    break;
                  case 0:
                    return (e[l] = "string" == typeof t.value ? t.value.substr(0, 25e3) : t.value), "continue";
                  default:
                    return (e[l] = t.value), "continue";
                }
                var f = { value: t.value, propertyType: d };
                e[l] = f;
              },
              u = 0,
              c = t;
            u < c.length;
            u++
          ) {
            if ("break" === s(c[u])) break;
          }
        return a;
      }
      var s = "User.TenantId",
        u = "Session.Id";
      function c(e) {
        (0, r.uf)(0, 1, function () {
          return "Invalid " + e;
        });
      }
      var l = n(6184),
        d = n(2530),
        f = n(175),
        h = n(8145),
        p = n(9339),
        v = n(9251),
        m = n(4869),
        g = n(6335),
        y = "toGMTString",
        _ = "toUTCString",
        $ = "cookie",
        b = "expires",
        C = "enabled",
        w = "isCookieUseDisabled",
        S = "disableCookiesUsage",
        x = "_ckMgr",
        T = null,
        E = null,
        k = null,
        A = (0, v.Me)(),
        P = {},
        O = {};
      function M(e, t) {
        var n = D[x] || O[x];
        return n || ((n = D[x] = D(e, t)), (O[x] = n)), n;
      }
      function L(e) {
        return !e || e.isEnabled();
      }
      function I(e, t) {
        return !!(t && e && (0, m.kJ)(e.ignoreCookies)) && -1 !== e.ignoreCookies[h.ou](t);
      }
      function D(e, t) {
        var n,
          i = (function (e) {
            var t = (e[h.Lk] = e[h.Lk] || {});
            if (
              ((0, m.sO)(t, "domain", e.cookieDomain, m.BX, m.le), (0, m.sO)(t, "path", e.cookiePath || "/", null, m.le), (0, m.le)(t[C]))
            ) {
              var n = void 0;
              (0, m.o8)(e[w]) || (n = !e[w]), (0, m.o8)(e[S]) || (n = !e[S]), (t[C] = n);
            }
            return t;
          })(e || O),
          r = i.path || "/",
          o = i.domain,
          a = !1 !== i[C],
          s =
            (((n = {
              isEnabled: function () {
                var e = a && B(t),
                  n = O[x];
                return e && n && s !== n && (e = L(n)), e;
              }
            })[h.$h] = function (e) {
              a = !1 !== e;
            }),
            (n.set = function (e, t, n, a, u) {
              var c = !1;
              if (
                L(s) &&
                !(function (e, t) {
                  return !!(t && e && (0, m.kJ)(e.blockedCookies) && -1 !== e.blockedCookies[h.ou](t)) || I(e, t);
                })(i, e)
              ) {
                var l = {},
                  d = (0, m.nd)(t || g.qS),
                  f = d[h.ou](";");
                if (
                  (-1 !== f && ((d = (0, m.nd)(t[h.zc](0, f))), (l = R(t[h.zc](f + 1)))),
                  (0, m.sO)(l, "domain", a || o, m.fQ, m.o8),
                  !(0, m.le)(n))
                ) {
                  var p = (0, v.w1)();
                  if ((0, m.o8)(l[b])) {
                    var $ = (0, m.m6)() + 1e3 * n;
                    if ($ > 0) {
                      var C = new Date();
                      C.setTime($), (0, m.sO)(l, b, N(C, p ? y : _) || N(C, p ? y : _) || g.qS, m.fQ);
                    }
                  }
                  p || (0, m.sO)(l, "max-age", g.qS + n, null, m.o8);
                }
                var w = (0, v.k$)();
                w &&
                  "https:" === w.protocol &&
                  ((0, m.sO)(l, "secure", null, null, m.o8),
                  null === E && (E = !W(((0, v.jW)() || {})[h.qV])),
                  E && (0, m.sO)(l, "SameSite", "None", null, m.o8)),
                  (0, m.sO)(l, "path", u || r, null, m.o8),
                  (i.setCookie || j)(e, F(d, l)),
                  (c = !0);
              }
              return c;
            }),
            (n.get = function (e) {
              var t = g.qS;
              return L(s) && !I(i, e) && (t = (i.getCookie || U)(e)), t;
            }),
            (n.del = function (e, t) {
              var n = !1;
              return L(s) && (n = s.purge(e, t)), n;
            }),
            (n.purge = function (e, n) {
              var r,
                o = !1;
              if (B(t)) {
                var a = (((r = {}).path = n || "/"), (r[b] = "Thu, 01 Jan 1970 00:00:01 GMT"), r);
                (0, v.w1)() || (a["max-age"] = "0"), (i.delCookie || j)(e, F(g.qS, a)), (o = !0);
              }
              return o;
            }),
            n);
        return (s[x] = s), s;
      }
      function B(e) {
        if (null === T) {
          T = !1;
          try {
            T = void 0 !== (A || {})[$];
          } catch (t) {
            (0, p.kP)(e, 2, 68, "Cannot access document.cookie - " + (0, m.jj)(t), { exception: (0, v.eU)(t) });
          }
        }
        return T;
      }
      function R(e) {
        var t = {};
        if (e && e[h.R5]) {
          var n = (0, m.nd)(e)[h.w6](";");
          (0, m.tO)(n, function (e) {
            if ((e = (0, m.nd)(e || g.qS))) {
              var n = e[h.ou]("=");
              -1 === n ? (t[e] = null) : (t[(0, m.nd)(e[h.zc](0, n))] = (0, m.nd)(e[h.zc](n + 1)));
            }
          });
        }
        return t;
      }
      function N(e, t) {
        return (0, m.mf)(e[t]) ? e[t]() : null;
      }
      function F(e, t) {
        var n = e || g.qS;
        return (
          (0, m.rW)(t, function (e, t) {
            n += "; " + e + ((0, m.le)(t) ? g.qS : "=" + t);
          }),
          n
        );
      }
      function U(e) {
        var t = g.qS;
        if (A) {
          var n = A[$] || g.qS;
          k !== n && ((P = R(n)), (k = n)), (t = (0, m.nd)(P[e] || g.qS));
        }
        return t;
      }
      function j(e, t) {
        A && (A[$] = e + "=" + t);
      }
      function W(e) {
        return (
          !!(0, m.HD)(e) &&
          (!(!(0, m._Q)(e, "CPU iPhone OS 12") && !(0, m._Q)(e, "iPad; CPU OS 12")) ||
            !!((0, m._Q)(e, "Macintosh; Intel Mac OS X 10_14") && (0, m._Q)(e, "Version/") && (0, m._Q)(e, "Safari")) ||
            !(!(0, m._Q)(e, "Macintosh; Intel Mac OS X 10_14") || !(0, m.Id)(e, "AppleWebKit/605.1.15 (KHTML, like Gecko)")) ||
            !(!(0, m._Q)(e, "Chrome/5") && !(0, m._Q)(e, "Chrome/6")) ||
            !(!(0, m._Q)(e, "UnrealEngine") || (0, m._Q)(e, "Chrome")) ||
            !(!(0, m._Q)(e, "UCBrowser/12") && !(0, m._Q)(e, "UCBrowser/11")))
        );
      }
      var V = n(7624),
        H = "on",
        q = "attachEvent",
        z = "addEventListener",
        K = "detachEvent",
        G = "removeEventListener",
        Z = "events",
        Q = "visibilitychange",
        J = "pagehide",
        Y = "pageshow",
        X = "unload",
        ee = "beforeunload",
        te = (0, V.J)("aiEvtPageHide"),
        ne = (0, V.J)("aiEvtPageShow"),
        ie = /\.[\.]+/g,
        re = /[\.]+$/,
        oe = 1,
        ae = (0, V.K)("events"),
        se = /^([^.]*)(?:\.(.+)|)/;
      function ue(e) {
        return e && e[h.i7] ? e[h.i7](/^[\s\.]+|(?=[\s\.])[\.\s]+$/g, g.qS) : e;
      }
      function ce(e, t) {
        var n;
        if (t) {
          var i = g.qS;
          (0, m.kJ)(t)
            ? ((i = g.qS),
              (0, m.tO)(t, function (e) {
                (e = ue(e)) && ("." !== e[0] && (e = "." + e), (i += e));
              }))
            : (i = ue(t)),
            i && ("." !== i[0] && (i = "." + i), (e = (e || g.qS) + i));
        }
        var r = se.exec(e || g.qS) || [];
        return ((n = {})[h.P6] = r[1]), (n.ns = (r[2] || g.qS).replace(ie, ".").replace(re, g.qS)[h.w6](".").sort().join(".")), n;
      }
      function le(e, t, n) {
        void 0 === n && (n = !0);
        var i = ae.get(e, Z, {}, n),
          r = i[t];
        return r || (r = i[t] = []), r;
      }
      function de(e, t, n, i) {
        e && t && t[h.P6] && (e[G] ? e[G](t[h.P6], n, i) : e[K] && e[K](H + t[h.P6], n));
      }
      function fe(e, t, n, i) {
        for (var r = t[h.R5]; r--; ) {
          var o = t[r];
          o && ((n.ns && n.ns !== o.evtName.ns) || (i && !i(o)) || (de(e, o.evtName, o[h.Kn], o.capture), t[h.cb](r, 1)));
        }
      }
      function he(e, t) {
        return t ? ce("xx", (0, m.kJ)(t) ? [e].concat(t) : [e, t]).ns[h.w6](".") : e;
      }
      function pe(e, t, n, i, r) {
        var o;
        void 0 === r && (r = !1);
        var a = !1;
        if (e)
          try {
            var s = ce(t, i);
            if (
              ((a = (function (e, t, n, i) {
                var r = !1;
                return e && t && t[h.P6] && n && (e[z] ? (e[z](t[h.P6], n, i), (r = !0)) : e[q] && (e[q](H + t[h.P6], n), (r = !0))), r;
              })(e, s, n, r)),
              a && ae.accept(e))
            ) {
              var u = (((o = { guid: oe++, evtName: s })[h.Kn] = n), (o.capture = r), o);
              le(e, s.type)[h.MW](u);
            }
          } catch (e) {}
        return a;
      }
      function ve(e, t, n, i, r) {
        if ((void 0 === r && (r = !1), e))
          try {
            var o = ce(t, i),
              a = !1;
            !(function (e, t, n) {
              if (t[h.P6]) fe(e, le(e, t[h.P6]), t, n);
              else {
                var i = ae.get(e, Z, {});
                (0, m.rW)(i, function (i, r) {
                  fe(e, r, t, n);
                }),
                  0 === (0, m.FY)(i)[h.R5] && ae.kill(e, Z);
              }
            })(e, o, function (e) {
              return !((!o.ns || n) && e[h.Kn] !== n) && ((a = !0), !0);
            }),
              a || de(e, o, n, r);
          } catch (e) {}
      }
      function me(e, t, n) {
        var i = !1,
          r = (0, v.Jj)();
        r && ((i = pe(r, e, t, n)), (i = pe(r.body, e, t, n) || i));
        var o = (0, v.Me)();
        return o && (i = pe(o, e, t, n) || i), i;
      }
      function ge(e, t, n, i) {
        var r = !1;
        return (
          t &&
            e &&
            e[h.R5] > 0 &&
            (0, m.tO)(e, function (e) {
              e && ((n && -1 !== (0, m.UA)(n, e)) || (r = me(e, t, i) || r));
            }),
          r
        );
      }
      function ye(e, t, n) {
        e &&
          (0, m.kJ)(e) &&
          (0, m.tO)(e, function (e) {
            e &&
              (function (e, t, n) {
                var i = (0, v.Jj)();
                i && (ve(i, e, t, n), ve(i.body, e, t, n));
                var r = (0, v.Me)();
                r && ve(r, e, t, n);
              })(e, t, n);
          });
      }
      function _e(e, t, n) {
        return (function (e, t, n, i) {
          var r = !1;
          return t && e && (0, m.kJ)(e) && !(r = ge(e, t, n, i)) && n && n[h.R5] > 0 && (r = ge(e, t, null, i)), r;
        })([ee, X, J], e, t, n);
      }
      function $e(e, t, n) {
        var i = he(te, n),
          r = ge([J], e, t, i);
        return (
          (t && -1 !== (0, m.UA)(t, Q)) ||
            (r =
              ge(
                [Q],
                function (t) {
                  var n = (0, v.Me)();
                  e && n && "hidden" === n.visibilityState && e(t);
                },
                t,
                i
              ) || r),
          !r && t && (r = $e(e, null, n)),
          r
        );
      }
      function be(e, t, n) {
        var i = he(ne, n),
          r = ge([Y], e, t, i);
        return (
          !(r =
            ge(
              [Q],
              function (t) {
                var n = (0, v.Me)();
                e && n && "visible" === n.visibilityState && e(t);
              },
              t,
              i
            ) || r) &&
            t &&
            (r = be(e, null, n)),
          r
        );
      }
      var Ce,
        we = n(9406),
        Se = null;
      function xe() {
        var e = Ee();
        return e[h.zc](0, 8) + "-" + e[h.zc](8, 12) + "-" + e[h.zc](12, 16) + "-" + e[h.zc](16, 20) + "-" + e[h.zc](20);
      }
      function Te() {
        var e = (0, v.r)();
        return e && e.now ? e.now() : (0, m.m6)();
      }
      function Ee() {
        for (var e, t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"], n = g.qS, i = 0; i < 4; i++)
          n +=
            t[15 & (e = (0, we._l)())] +
            t[(e >> 4) & 15] +
            t[(e >> 8) & 15] +
            t[(e >> 12) & 15] +
            t[(e >> 16) & 15] +
            t[(e >> 20) & 15] +
            t[(e >> 24) & 15] +
            t[(e >> 28) & 15];
        var r = t[(8 + (3 & (0, we._l)())) | 0];
        return n[h.Jn](0, 8) + n[h.Jn](9, 4) + "4" + n[h.Jn](13, 3) + r + n[h.Jn](16, 3) + n[h.Jn](19, 12);
      }
      var ke = {
        _canUseCookies: void 0,
        isTypeof: m.Ym,
        isUndefined: m.o8,
        isNullOrUndefined: m.le,
        hasOwnProperty: m.nr,
        isFunction: m.mf,
        isObject: m.Kn,
        isDate: m.J_,
        isArray: m.kJ,
        isError: m.VZ,
        isString: m.HD,
        isNumber: m.hj,
        isBoolean: m.jn,
        toISOString: m.Y6,
        arrForEach: m.tO,
        arrIndexOf: m.UA,
        arrMap: m.Mr,
        arrReduce: m.Xz,
        strTrim: m.nd,
        objCreate: f.pu,
        objKeys: m.FY,
        objDefineAccessors: m.l_,
        addEventHandler: me,
        dateNow: m.m6,
        isIE: v.w1,
        disableCookies: function () {
          Ae()[h.$h](!1);
        },
        newGuid: xe,
        perfNow: Te,
        newId: we.pZ,
        randomValue: we.az,
        random32: we._l,
        mwcRandomSeed: we.CN,
        mwcRandom32: we.F6,
        generateW3CId: Ee
      };
      function Ae(e, t) {
        var n = M(e, t),
          i = ke._canUseCookies;
        return (
          null === Se &&
            ((Se = []),
            (Ce = i),
            (0, m.l_)(
              ke,
              "_canUseCookies",
              function () {
                return Ce;
              },
              function (e) {
                (Ce = e),
                  (0, m.tO)(Se, function (t) {
                    t[h.$h](e);
                  });
              }
            )),
          -1 === (0, m.UA)(Se, n) && Se[h.MW](n),
          (0, m.jn)(i) && n[h.$h](i),
          (0, m.jn)(Ce) && n[h.$h](Ce),
          n
        );
      }
      var Pe = function (e, t) {
          var n = this;
          (this.eventsProcessed = 0), (this.eventsSent = 0), (this.eventsDiscarded = 0);
          var i = [],
            o = !1,
            f = !0,
            h = {
              name: "DiagnosticLevel",
              processEvent: function (e) {
                var t = e.eventFlags.diagnosticLevel;
                return o || 10 === t || 110 === t || 120 === t;
              }
            },
            p = {},
            v = xe();
          (this.init = function () {
            return (f =
              f &&
              (function (e) {
                function t(t) {
                  return ("string" == typeof e[t] && "" != e[t]) || (c(t), !1);
                }
                var n = t("App.Name") && t("App.Version") && t("App.Platform") && t(u);
                if ((e["User.IsAnonymous"] || (n = n && t("User.PrimaryIdentityHash") && t("User.PrimaryIdentitySpace")), !n)) return n;
                var i = /^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$/,
                  r = e[s];
                return !r || (t(s) && i.test(r)) || (c(s), (n = !1)), i.test(e[u]) || (c(u), (n = !1)), n;
              })(p));
          }),
            (this.getOneDSTelemetryEvent = function (e) {
              return m(e, { eventType: 1 });
            }),
            (this.getOneDSCustomerContent = function (e) {
              var t = e.telemetryProperties.customerContentVersion;
              if (t && Math.floor(t) <= 2 && 1 === e.telemetryProperties.customerContentType) return m(e, { eventType: 2 });
            });
          var m = function (e, t) {
            var o,
              s = (0, l.vE)(e);
            if (
              (function (e, t) {
                for (
                  var n = function (n) {
                      var i = t[n];
                      if (!i.processEvent(e))
                        return (
                          (0, r.uf)(2, 1, function () {
                            return "".concat(e.eventName, " suppressed by ").concat(i.name);
                          }),
                          { value: !1 }
                        );
                    },
                    i = 0;
                  i < t.length;
                  i++
                ) {
                  var o = n(i);
                  if ("object" == typeof o) return o.value;
                }
                return !0;
              })(s, i)
            ) {
              var u = ((o = s), o.timestamp ? new Date(o.timestamp) : new Date()).toISOString(),
                c = { "Event.Name": s.eventName, "Event.Source": "OTelJS", "Event.Time": { value: u, propertyType: 9 } };
              for (var d in (n.eventsProcessed++,
              (c["Event.Sequence"] = { value: n.eventsProcessed, propertyType: 4 }),
              (c["Event.Id"] = v + "." + n.eventsProcessed),
              p))
                c[d] = p[d];
              if (!a(c, s.dataFields, !0, t.eventType))
                return void (0, r.uf)(0, 1, function () {
                  return "Dropping Event: " + s.eventName;
                });
              var f = "custom";
              s.eventContract &&
                (s.eventContract.name &&
                  ((c["Event.Contract"] = s.eventContract.name), (f += "." + s.eventContract.name.toLowerCase().replace(/\./g, "_"))),
                a(c, s.eventContract.dataFields, !1, t.eventType));
              var h = (function (e, t) {
                return 2 === t
                  ? "b22a201c3f1d41d28ccc399ba6cc9ca2-1972c77f-1f79-4283-a0f9-b4ddc4646f55-7121"
                  : e.telemetryProperties && (1 !== t || e.telemetryProperties.ariaTenantToken)
                  ? 1 === t
                    ? e.telemetryProperties.ariaTenantToken
                    : void 0
                  : void (0, r.uf)(0, 1, function () {
                      return "Missing Aria Token";
                    });
              })(s, t.eventType);
              if (!h) return;
              return { iKey: h, name: s.eventName, data: c, time: u, baseType: f, ext: { sdk: { seq: n.eventsProcessed } } };
            }
          };
          (this.addPreprocessor = function (e) {
            i.push(e);
          }),
            (this.getOneDSPersistentDataFields = function () {
              return p;
            }),
            (this.getPreprocessors = function () {
              return i;
            });
          var g = function (e) {
            a(p, e, !1, 1);
          };
          (this.addPersistentDataFields = g),
            (this.setOptionalEventsEnabled = function (e) {
              o = e;
            }),
            (this.setFullEventsEnabled = this.setOptionalEventsEnabled),
            t.enableOptionalEvents && (o = !0),
            g(e);
          var y = t.coreFields;
          if (y) {
            g(d.gV.getFields(y.app)), g(d.n5.getFields(y.user)), g(d.z_.getFields(y.session));
            var _ = y.release;
            _ && g(d.cl.getFields(_));
          }
          this.addPreprocessor(h);
        },
        Oe = n(1550),
        Me =
          (((0, f.Rd)() || {}).Symbol,
          ((0, f.Rd)() || {}).Reflect,
          Oe.rl,
          function (e, t) {
            return (
              (Me =
                Oe.Pw.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t) t[Oe.bO](n) && (e[n] = t[n]);
                }),
              Me(e, t)
            );
          });
      function Le(e, t) {
        function n() {
          this.constructor = e;
        }
        typeof t !== Oe.cb && null !== t && (0, f.ZU)("Class extends value " + String(t) + " is not a constructor or null"),
          Me(e, t),
          (e[Oe.hB] = null === t ? (0, f.pu)(t) : ((n[Oe.hB] = t[Oe.hB]), new n()));
      }
      function Ie(e, t) {
        for (var n = 0, i = t.length, r = e.length; n < i; n++, r++) e[r] = t[n];
        return e;
      }
      var De = n(9141),
        Be = n(1782),
        Re = n(1030),
        Ne = n(2681),
        Fe = 500,
        Ue = "Channel has invalid priority - ";
      function je(e, t, n) {
        t &&
          (0, m.kJ)(t) &&
          t[h.R5] > 0 &&
          ((t = t.sort(function (e, t) {
            return e[g.yi] - t[g.yi];
          })),
          (0, m.tO)(t, function (e) {
            e[g.yi] < Fe && (0, m._y)(Ue + e[h.pZ]);
          }),
          e[h.MW]({ queue: (0, m.FL)(t), chain: (0, Re.jV)(t, n[h.TC], n) }));
      }
      var We = n(8341),
        Ve = n(7951),
        He = (function (e) {
          function t() {
            var n,
              i,
              r = e.call(this) || this;
            function o() {
              (n = 0), (i = []);
            }
            return (
              (r.identifier = "TelemetryInitializerPlugin"),
              (r.priority = 199),
              o(),
              (0, De.Z)(t, r, function (e, t) {
                (e.addTelemetryInitializer = function (e) {
                  var t = { id: n++, fn: e };
                  return (
                    i[h.MW](t),
                    {
                      remove: function () {
                        (0, m.tO)(i, function (e, n) {
                          if (e.id === t.id) return i[h.cb](n, 1), -1;
                        });
                      }
                    }
                  );
                }),
                  (e[g.hL] = function (t, n) {
                    for (var r = !1, o = i[h.R5], a = 0; a < o; ++a) {
                      var s = i[a];
                      if (s)
                        try {
                          if (!1 === s.fn[h.ZV](null, [t])) {
                            r = !0;
                            break;
                          }
                        } catch (e) {
                          (0, p.kP)(
                            n[h.mc](),
                            1,
                            64,
                            "One of telemetry initializers failed, telemetry item will not be sent: " + (0, m.jj)(e),
                            { exception: (0, v.eU)(e) },
                            !0
                          );
                        }
                    }
                    r || e[h.uL](t, n);
                  }),
                  (e[h.F3] = function () {
                    o();
                  });
              }),
              r
            );
          }
          return Le(t, e), (t.__ieDyn = 1), t;
        })(Ve.i),
        qe = n(8593),
        ze = "Plugins must provide initialize method",
        Ke = "_notificationManager",
        Ge = "SDK is still unloading...",
        Ze = { loggingLevelConsole: 1 };
      function Qe(e, t) {
        return new Be.Jk(t);
      }
      function Je(e, t) {
        var n = !1;
        return (
          (0, m.tO)(t, function (t) {
            if (t === e) return (n = !0), -1;
          }),
          n
        );
      }
      var Ye = (function () {
        function e() {
          var t,
            n,
            i,
            r,
            o,
            a,
            s,
            u,
            c,
            l,
            d,
            v,
            y,
            _,
            $,
            b,
            C,
            w,
            S,
            x,
            T = 0,
            E = !1;
          (0, De.Z)(e, this, function (e) {
            function k(n) {
              if (!T && !E && (n || (e[h.eZ] && e[h.eZ].queue[h.R5] > 0))) {
                var i = (0, m.v4)(t.diagnosticLogInterval);
                (i && i > 0) || (i = 1e4),
                  (T = setInterval(function () {
                    clearInterval(T), (T = 0), B();
                  }, i));
              }
              return T;
            }
            function A() {
              (n = !1),
                (t = (0, m.mm)(!0, {}, Ze)),
                (e[h.TC] = t),
                (e[h.eZ] = new p.AQ(t)),
                (e[h.iC] = []),
                ($ = new He()),
                (i = []),
                (r = null),
                (o = null),
                (a = null),
                (s = null),
                (u = null),
                (l = null),
                (c = []),
                (d = null),
                (v = null),
                (y = null),
                (_ = !1),
                (b = null),
                (C = (0, V.J)("AIBaseCore", !0)),
                (w = (0, qe.Y)()),
                (x = null);
            }
            function P() {
              var n = (0, Re.CD)(L(), t, e);
              return n[h.Fc](k), n;
            }
            function O(n) {
              var i = (function (e, t, n) {
                var i,
                  r = [],
                  o = {};
                return (
                  (0, m.tO)(n, function (n) {
                    ((0, m.le)(n) || (0, m.le)(n[h.VL])) && (0, m._y)(ze);
                    var i = n[g.yi],
                      a = n[h.pZ];
                    n &&
                      i &&
                      ((0, m.le)(o[i]) ? (o[i] = a) : (0, p.jV)(e, "Two extensions have same priority #" + i + " - " + o[i] + ", " + a)),
                      (!i || i < t) && r[h.MW](n);
                  }),
                  ((i = { all: n })[g.oV] = r),
                  i
                );
              })(e[h.eZ], Fe, c);
              (l = i[g.oV]), (u = null);
              var r = i.all;
              if (
                ((y = (0, m.FL)(
                  (function (e, t, n) {
                    var i = [];
                    if (
                      (e &&
                        (0, m.tO)(e, function (e) {
                          return je(i, e, n);
                        }),
                      t)
                    ) {
                      var r = [];
                      (0, m.tO)(t, function (e) {
                        e[g.yi] > Fe && r[h.MW](e);
                      }),
                        je(i, r, n);
                    }
                    return i;
                  })(v, r, e)
                )),
                d)
              ) {
                var o = (0, m.UA)(r, d);
                -1 !== o && r[h.cb](o, 1), -1 !== (o = (0, m.UA)(l, d)) && l[h.cb](o, 1), d._setQueue(y);
              } else
                d = (function (e, t) {
                  function n() {
                    return (0, Re.CD)(null, t[h.TC], t, null);
                  }
                  function i(e, t, n, i) {
                    var r = e ? e[h.R5] + 1 : 1;
                    function o() {
                      0 == --r && (i && i(), (i = null));
                    }
                    r > 0 &&
                      (0, m.tO)(e, function (e) {
                        if (e && e.queue[h.R5] > 0) {
                          var i = e.chain,
                            a = t[h.zV](i);
                          a[h.Fc](o), n(a);
                        } else r--;
                      }),
                      o();
                  }
                  var r = !1,
                    o = {
                      identifier: "ChannelControllerPlugin",
                      priority: Fe,
                      initialize: function (t, n, i, o) {
                        (r = !0),
                          (0, m.tO)(e, function (e) {
                            e && e.queue[h.R5] > 0 && (0, Ne.bP)((0, Re.CD)(e.chain, t, n), i);
                          });
                      },
                      isInitialized: function () {
                        return r;
                      },
                      processTelemetry: function (t, r) {
                        i(
                          e,
                          r || n(),
                          function (e) {
                            e[h.uL](t);
                          },
                          function () {
                            r[h.uL](t);
                          }
                        );
                      },
                      update: function (t, n) {
                        var r = n || { reason: 0 };
                        return (
                          i(
                            e,
                            t,
                            function (e) {
                              e[h.uL](r);
                            },
                            function () {
                              t[h.uL](r);
                            }
                          ),
                          !0
                        );
                      },
                      pause: function () {
                        i(
                          e,
                          n(),
                          function (e) {
                            e.iterate(function (e) {
                              e.pause && e.pause();
                            });
                          },
                          null
                        );
                      },
                      resume: function () {
                        i(
                          e,
                          n(),
                          function (e) {
                            e.iterate(function (e) {
                              e.resume && e.resume();
                            });
                          },
                          null
                        );
                      },
                      teardown: function (t, n) {
                        var o = n || { reason: 0, isAsync: !1 };
                        return (
                          i(
                            e,
                            t,
                            function (e) {
                              e[h.uL](o);
                            },
                            function () {
                              t[h.uL](o), (r = !1);
                            }
                          ),
                          !0
                        );
                      },
                      getChannel: function (t) {
                        var n = null;
                        return (
                          e &&
                            e[h.R5] > 0 &&
                            (0, m.tO)(e, function (e) {
                              if (
                                e &&
                                e.queue[h.R5] > 0 &&
                                ((0, m.tO)(e.queue, function (e) {
                                  if (e[h.pZ] === t) return (n = e), -1;
                                }),
                                n)
                              )
                                return -1;
                            }),
                          n
                        );
                      },
                      flush: function (t, r, o, a) {
                        var s = 1,
                          u = !1,
                          c = null;
                        function l() {
                          s--, u && 0 === s && (c && (clearTimeout(c), (c = null)), r && r(u), (r = null));
                        }
                        return (
                          (a = a || 5e3),
                          i(
                            e,
                            n(),
                            function (e) {
                              e.iterate(function (e) {
                                if (e[h.kL]) {
                                  s++;
                                  var n = !1;
                                  e[h.kL](
                                    t,
                                    function () {
                                      (n = !0), l();
                                    },
                                    o
                                  ) ||
                                    n ||
                                    (t && null == c
                                      ? (c = setTimeout(function () {
                                          (c = null), l();
                                        }, a))
                                      : l());
                                }
                              });
                            },
                            function () {
                              (u = !0), l();
                            }
                          ),
                          !0
                        );
                      },
                      _setQueue: function (t) {
                        e = t;
                      }
                    };
                  return o;
                })(y, e);
              r[h.MW](d), l[h.MW](d), (e[h.iC] = (0, Ne.AA)(r)), d[h.VL](t, e, r);
              var a = P();
              (0, Ne.bP)(a, r),
                (e[h.iC] = (0, m.FL)((0, Ne.AA)(l || [])).slice()),
                n &&
                  (function (t) {
                    var n = (0, Re.xy)(L(), e);
                    n[h.Fc](k), (e._updateHook && !0 === e._updateHook(n, t)) || n[h.uL](t);
                  })(n);
            }
            function M(t) {
              var n,
                i = null,
                r = null;
              return (
                (0, m.tO)(e[h.iC], function (e) {
                  if (e[h.pZ] === t && e !== d && e !== $) return (r = e), -1;
                }),
                !r && d && (r = d.getChannel(t)),
                r &&
                  (((n = { plugin: r })[h.$h] = function (e) {
                    (0, Ne.OY)(r)[g.mE] = !e;
                  }),
                  (n.isEnabled = function () {
                    var e = (0, Ne.OY)(r);
                    return !e[h.fi] && !e[g.mE];
                  }),
                  (n.remove = function (e, t) {
                    var n;
                    void 0 === e && (e = !0);
                    var i = [r],
                      o = (((n = { reason: 1 })[h.d] = e), n);
                    I(i, o, function (e) {
                      e && O({ reason: 32, removed: i }), t && t(e);
                    });
                  }),
                  (i = n)),
                i
              );
            }
            function L() {
              if (!u) {
                var n = (l || []).slice();
                -1 === (0, m.UA)(n, $) && n[h.MW]($), (u = (0, Re.jV)((0, Ne.AA)(n), t, e));
              }
              return u;
            }
            function I(n, i, r) {
              if (n && n[h.R5] > 0) {
                var o = (0, Re.jV)(n, t, e),
                  a = (0, Re.Bt)(o, e);
                a[h.Fc](function () {
                  var e = !1,
                    t = [];
                  (0, m.tO)(c, function (i, r) {
                    Je(i, n) ? (e = !0) : t[h.MW](i);
                  }),
                    (c = t);
                  var i = [];
                  v &&
                    ((0, m.tO)(v, function (t, r) {
                      var o = [];
                      (0, m.tO)(t, function (t) {
                        Je(t, n) ? (e = !0) : o[h.MW](t);
                      }),
                        i[h.MW](o);
                    }),
                    (v = i)),
                    r && r(e),
                    k();
                }),
                  a[h.uL](i);
              } else r(!1);
            }
            function B() {
              if (e[h.eZ] && e[h.eZ].queue) {
                var n = e[h.eZ].queue.slice(0);
                (e[h.eZ].queue[h.R5] = 0),
                  (0, m.tO)(n, function (n) {
                    var i,
                      r =
                        (((i = {})[h.I] = b || "InternalMessageId: " + n[h.Gc]),
                        (i.iKey = (0, m.v4)(t[h.p$])),
                        (i.time = (0, m.Y6)(new Date())),
                        (i.baseType = p.lQ.dataType),
                        (i.baseData = { message: n[h.gU] }),
                        i);
                    e.track(r);
                  });
              }
            }
            function R(e, t, n, i) {
              return d ? d[h.kL](e, t, n || 6, i) : (t && t(!1), !0);
            }
            function N(t) {
              var n = e[h.eZ];
              n ? ((0, p.kP)(n, 2, 73, t), k()) : (0, m._y)(t);
            }
            A(),
              (e[h.yl] = function () {
                return n;
              }),
              (e[h.VL] = function (i, o, s, u) {
                _ && (0, m._y)(Ge),
                  e[h.yl]() && (0, m._y)("Core should not be initialized more than once"),
                  (t = i || {}),
                  (e[h.TC] = t),
                  (0, m.le)(i[h.p$]) && (0, m._y)("Please provide instrumentation key"),
                  (r = u),
                  (e[Ke] = u),
                  (function () {
                    var e = (0, m.v4)(t.disableDbgExt);
                    !0 === e && S && (r[h.n7](S), (S = null));
                    r && !S && !0 !== e && ((S = (0, We.p)(t)), r[h.g](S));
                  })(),
                  (function () {
                    var e = (0, m.v4)(t.enablePerfMgr);
                    !e && a && (a = null);
                    e && (0, m.qK)(t, g.DN, Qe);
                  })(),
                  ((0, m.qK)(t, g.Zh, {}).NotificationManager = r),
                  s && (e[h.eZ] = s);
                var l = (0, m.qK)(t, g.js, []);
                (c = [])[h.MW].apply(c, Ie(Ie([], o), l)),
                  (v = (0, m.qK)(t, g.Z, [])),
                  O(null),
                  (y && 0 !== y[h.R5]) || (0, m._y)("No " + g.Z + " available"),
                  (n = !0),
                  e.releaseQueue();
              }),
              (e.getTransmissionControls = function () {
                var e = [];
                return (
                  y &&
                    (0, m.tO)(y, function (t) {
                      e[h.MW](t.queue);
                    }),
                  (0, m.FL)(e)
                );
              }),
              (e.track = function (n) {
                (n.iKey = n.iKey || t[h.p$]),
                  (n[h.Z_] = n[h.Z_] || (0, m.Y6)(new Date())),
                  (n.ver = n.ver || "4.0"),
                  !_ && e[h.yl]() ? P()[h.uL](n) : i[h.MW](n);
              }),
              (e[h.SD] = P),
              (e[h.tb] = function () {
                return (
                  r ||
                    ((r = (function () {
                      var e;
                      return (0, f.pu)(
                        (((e = {})[h.g] = function (e) {}),
                        (e[h.n7] = function (e) {}),
                        (e[g.uC] = function (e) {}),
                        (e[g.$F] = function (e, t) {}),
                        (e[g.f_] = function (e, t) {}),
                        e)
                      );
                    })()),
                    (e[Ke] = r)),
                  r
                );
              }),
              (e[h.g] = function (e) {
                r && r[h.g](e);
              }),
              (e[h.n7] = function (e) {
                r && r[h.n7](e);
              }),
              (e.getCookieMgr = function () {
                return s || (s = D(t, e[h.eZ])), s;
              }),
              (e.setCookieMgr = function (e) {
                s = e;
              }),
              (e[g.kl] = function () {
                if (!o && !a && (0, m.v4)(t.enablePerfMgr)) {
                  var n = (0, m.v4)(t[g.DN]);
                  (0, m.mf)(n) && (a = n(e, e[h.tb]()));
                }
                return o || a || (0, Be.j5)();
              }),
              (e.setPerfMgr = function (e) {
                o = e;
              }),
              (e.eventCnt = function () {
                return i[h.R5];
              }),
              (e.releaseQueue = function () {
                if (n && i[h.R5] > 0) {
                  var e = i;
                  (i = []),
                    (0, m.tO)(e, function (e) {
                      P()[h.uL](e);
                    });
                }
              }),
              (e.pollInternalLogs = function (e) {
                return (b = e || null), (E = !1), T && (clearInterval(T), (T = null)), k(!0);
              }),
              (e[h.LS] = function () {
                (E = !0), T && (clearInterval(T), (T = 0), B());
              }),
              (0, m.Vb)(
                e,
                function () {
                  return $;
                },
                ["addTelemetryInitializer"]
              ),
              (e.unload = function (t, i, r) {
                var o;
                void 0 === t && (t = !0), n || (0, m._y)("SDK is not initialized"), _ && (0, m._y)(Ge);
                var a = (((o = { reason: 50 })[h.d] = t), (o.flushComplete = !1), o),
                  s = (0, Re.Bt)(L(), e);
                function u(t) {
                  (a.flushComplete = t), (_ = !0), w.run(s, a), e[h.LS](), s[h.uL](a);
                }
                s[h.Fc](function () {
                  A(), i && i(a);
                }, e),
                  B(),
                  R(t, u, 6, r) || u(!1);
              }),
              (e[h.TO] = M),
              (e.addPlugin = function (e, t, n, i) {
                if (!e) return i && i(!1), void N(ze);
                var r = M(e[h.pZ]);
                if (r && !t) return i && i(!1), void N("Plugin [" + e[h.pZ] + "] is already loaded!");
                var o = { reason: 16 };
                function a(t) {
                  c[h.MW](e), (o.added = [e]), O(o), i && i(!0);
                }
                if (r) {
                  var s = [r.plugin];
                  I(s, { reason: 2, isAsync: !!n }, function (e) {
                    e ? ((o.removed = s), (o.reason |= 32), a()) : i && i(!1);
                  });
                } else a();
              }),
              (e.evtNamespace = function () {
                return C;
              }),
              (e[h.kL] = R),
              (e.getTraceCtx = function (e) {
                return x || (x = (0, Ne.Yn)()), x;
              }),
              (e.setTraceCtx = function (e) {
                x = e || null;
              }),
              (0, m.Oi)(
                e,
                "addUnloadCb",
                function () {
                  return w;
                },
                "add"
              );
          });
        }
        return (e.__ieDyn = 1), e;
      })();
      function Xe(e, t, n, i) {
        (0, m.tO)(e, function (e) {
          if (e && e[t])
            if (n)
              setTimeout(function () {
                return i(e);
              }, 0);
            else
              try {
                i(e);
              } catch (e) {}
        });
      }
      var et,
        tt = (function () {
          function e(t) {
            this.listeners = [];
            var n = !!(t || {}).perfEvtsSendAll;
            (0, De.Z)(e, this, function (e) {
              (e[h.g] = function (t) {
                e.listeners[h.MW](t);
              }),
                (e[h.n7] = function (t) {
                  for (var n = (0, m.UA)(e[h.dE], t); n > -1; ) e.listeners[h.cb](n, 1), (n = (0, m.UA)(e[h.dE], t));
                }),
                (e[g.uC] = function (t) {
                  Xe(e[h.dE], g.uC, !0, function (e) {
                    e[g.uC](t);
                  });
                }),
                (e[g.$F] = function (t, n) {
                  Xe(e[h.dE], g.$F, !0, function (e) {
                    e[g.$F](t, n);
                  });
                }),
                (e[g.f_] = function (t, n) {
                  Xe(e[h.dE], g.f_, n, function (e) {
                    e[g.f_](t, n);
                  });
                }),
                (e[g.C$] = function (t) {
                  t &&
                    ((!n && t[h.PL]()) ||
                      Xe(e[h.dE], g.C$, !1, function (e) {
                        t[h.d]
                          ? setTimeout(function () {
                              return e[g.C$](t);
                            }, 0)
                          : e[g.C$](t);
                      }));
                });
            });
          }
          return (e.__ieDyn = 1), e;
        })(),
        nt = (function (e) {
          function t() {
            var n = e.call(this) || this;
            return (
              (0, De.Z)(t, n, function (e, t) {
                function n(t) {
                  var n = e[h.tb]();
                  n && n[g.$F]([t], 2);
                }
                (e[h.VL] = function (e, n, i, r) {
                  t[h.VL](e, n, i || new p.AQ(e), r || new tt(e));
                }),
                  (e.track = function (i) {
                    (0, Be.Lm)(
                      e[g.kl](),
                      function () {
                        return "AppInsightsCore:track";
                      },
                      function () {
                        null === i && (n(i), (0, m._y)("Invalid telemetry item")),
                          (function (e) {
                            (0, m.le)(e[h.I]) && (n(e), (0, m._y)("telemetry name required"));
                          })(i),
                          t.track(i);
                      },
                      function () {
                        return { item: i };
                      },
                      !i.sync
                    );
                  });
              }),
              n
            );
          }
          return Le(t, e), (t.__ieDyn = 1), t;
        })(Ye),
        it = "",
        rt = "version",
        ot = "properties",
        at = "3.2.12",
        st = "1DS-Web-JS-" + at,
        ut = "withCredentials",
        ct = (((et = {})[0] = 0), (et[2] = 6), (et[1] = 1), (et[3] = 7), (et[4098] = 6), (et[4097] = 1), (et[4099] = 7), et);
      Boolean((0, v.Me)()), Boolean((0, v.Jj)());
      function lt(e) {
        return !(e === it || (0, m.le)(e));
      }
      function dt(e) {
        if (e) {
          var t = e.indexOf("-");
          if (t > -1) return e.substring(0, t);
        }
        return it;
      }
      function ft(e) {
        return !!(e && (0, m.hj)(e) && e >= 1 && e <= 4);
      }
      function ht(e, t, n) {
        if ((!t && !lt(t)) || "string" != typeof e) return null;
        var i = typeof t;
        if ("string" === i || "number" === i || "boolean" === i || (0, m.kJ)(t)) t = { value: t };
        else if ("object" !== i || Oe.CY.call(t, "value")) {
          if (
            (0, m.le)(t.value) ||
            t.value === it ||
            (!(0, m.HD)(t.value) && !(0, m.hj)(t.value) && !(0, m.jn)(t.value) && !(0, m.kJ)(t.value))
          )
            return null;
        } else t = { value: n ? JSON.stringify(t) : t };
        if ((0, m.kJ)(t.value) && !yt(t.value)) return null;
        if (!(0, m.le)(t.kind)) {
          if ((0, m.kJ)(t.value) || !gt(t.kind)) return null;
          t.value = t.value.toString();
        }
        return t;
      }
      function pt(e, t, n) {
        var i = -1;
        if (!(0, m.o8)(e))
          if (
            (t > 0 && (32 === t ? (i = 8192) : t <= 13 && (i = t << 5)),
            (function (e) {
              if (e >= 0 && e <= 9) return !0;
              return !1;
            })(n))
          )
            -1 === i && (i = 0), (i |= n);
          else {
            var r = ct[$t(e)] || -1;
            -1 !== i && -1 !== r ? (i |= r) : 6 === r && (i = r);
          }
        return i;
      }
      function vt(e, t, n, i, r) {
        var o = {},
          a = !1,
          s = 0,
          u = arguments.length,
          c = arguments;
        for ("[object Boolean]" === Object[Oe.hB].toString.call(c[0]) && ((a = c[0]), s++); s < u; s++) {
          e = c[s];
          (0, m.rW)(e, function (e, t) {
            a && t && (0, m.Kn)(t)
              ? (0, m.kJ)(t)
                ? ((o[e] = o[e] || []),
                  (0, m.tO)(t, function (t, n) {
                    t && (0, m.Kn)(t) ? (o[e][n] = vt(!0, o[e][n], t)) : (o[e][n] = t);
                  }))
                : (o[e] = vt(!0, o[e], t))
              : (o[e] = t);
          });
        }
        return o;
      }
      var mt = Te;
      function gt(e) {
        return 0 === e || (e > 0 && e <= 13) || 32 === e;
      }
      function yt(e) {
        return e.length > 0;
      }
      function _t(e, t) {
        var n = e;
        (n.timings = n.timings || {}),
          (n.timings.processTelemetryStart = n.timings.processTelemetryStart || {}),
          (n.timings.processTelemetryStart[t] = mt());
      }
      function $t(e) {
        var t = 0;
        if (null != e) {
          var n = typeof e;
          "string" === n
            ? (t = 1)
            : "number" === n
            ? (t = 2)
            : "boolean" === n
            ? (t = 3)
            : n === Oe.fK &&
              ((t = 4), (0, m.kJ)(e) ? ((t = 4096), e.length > 0 && (t |= $t(e[0]))) : Oe.CY.call(e, "value") && (t = 8192 | $t(e.value)));
        }
        return t;
      }
      Oe.jA,
        Oe.fK,
        Oe.jA,
        m.tO,
        m.UA,
        m.Mr,
        m.Xz,
        m.FY,
        m.Y6,
        v.b$,
        m.HD,
        m.hj,
        m.jn,
        m.mf,
        m.kJ,
        m.Kn,
        m.nd,
        v.MF,
        m.Y6,
        v.cp,
        m.l_,
        m.Id,
        m.rW,
        m.Ym,
        m.o8,
        m.le,
        m.nr,
        m.mf,
        m.Kn,
        m.J_,
        m.kJ,
        m.VZ,
        m.HD,
        m.hj,
        m.jn,
        m.Y6,
        m.tO,
        m.UA,
        m.Mr,
        m.Xz,
        m.nd,
        f.pu,
        m.FY,
        m.l_,
        m.m6,
        v.w1,
        we.pZ,
        we.az,
        we._l,
        we.CN,
        we.F6;
      var bt = (function (e) {
        function t() {
          var n = e.call(this) || this;
          return (
            (n.pluginVersionStringArr = []),
            (0, De.Z)(t, n, function (e, t) {
              (e.logger && e.logger.queue) || (e.logger = new p.AQ({ loggingLevelConsole: 1 })),
                (e.initialize = function (n, i, r, o) {
                  (0, Be.Lm)(
                    e,
                    function () {
                      return "AppInsightsCore.initialize";
                    },
                    function () {
                      var a = e.pluginVersionStringArr;
                      if (n) {
                        n.endpointUrl || (n.endpointUrl = "https://browser.events.data.microsoft.com/OneCollector/1.0/");
                        var s = n.propertyStorageOverride;
                        !s || (s.getProperty && s.setProperty) || (0, m._y)("Invalid property storage override passed."),
                          n.channels &&
                            (0, m.tO)(n.channels, function (e) {
                              e &&
                                (0, m.tO)(e, function (e) {
                                  if (e.identifier && e.version) {
                                    var t = e.identifier + "=" + e.version;
                                    a.push(t);
                                  }
                                });
                            });
                      }
                      (e.getWParam = function () {
                        return "undefined" != typeof document || n.enableWParam ? 0 : -1;
                      }),
                        i &&
                          (0, m.tO)(i, function (e) {
                            if (e && e.identifier && e.version) {
                              var t = e.identifier + "=" + e.version;
                              a.push(t);
                            }
                          }),
                        (e.pluginVersionString = a.join(";")),
                        (e.pluginVersionStringArr = a);
                      try {
                        t.initialize(n, i, r, o), e.pollInternalLogs("InternalLog");
                      } catch (t) {
                        var u = e.logger,
                          c = (0, v.eU)(t);
                        -1 !== c.indexOf("channels") && (c += "\n - Channels must be provided through config.channels only!"),
                          (0, p.kP)(u, 1, 514, "SDK Initialization Failed - no telemetry will be sent: " + c);
                      }
                    },
                    function () {
                      return { config: n, extensions: i, logger: r, notificationManager: o };
                    }
                  );
                }),
                (e.track = function (n) {
                  (0, Be.Lm)(
                    e,
                    function () {
                      return "AppInsightsCore.track";
                    },
                    function () {
                      var i = n;
                      if (i) {
                        (i.timings = i.timings || {}), (i.timings.trackStart = mt()), ft(i.latency) || (i.latency = 1);
                        var r = (i.ext = i.ext || {});
                        (r.sdk = r.sdk || {}), (r.sdk.ver = st);
                        var o = (i.baseData = i.baseData || {});
                        o[ot] = o[ot] || {};
                        var a = o[ot];
                        a[rt] = a[rt] || e.pluginVersionString || it;
                      }
                      t.track(i);
                    },
                    function () {
                      return { item: n };
                    },
                    !n.sync
                  );
                });
            }),
            n
          );
        }
        return Le(t, e), (t.__ieDyn = 1), t;
      })(nt);
      const Ct = bt;
      var wt,
        St,
        xt =
          ((wt = { Unknown: 0, NonRetryableStatus: 1, InvalidEvent: 2, SizeLimitExceeded: 3, KillSwitch: 4, QueueFull: 5 }),
          (St = {}),
          (0, m.rW)(wt, function (e, t) {
            (St[e] = t), (St[t] = e);
          }),
          (0, m._A)(St)),
        Tt = "REAL_TIME",
        Et = "",
        kt = "POST",
        At = "drop",
        Pt = "send",
        Ot = "requeue",
        Mt = "rspFail",
        Lt = "application/x-json-stream",
        It = "cache-control",
        Dt = "content-type",
        Bt = "kill-tokens",
        Rt = "kill-duration",
        Nt = "time-delta-millis",
        Ft = "client-version",
        Ut = "client-id",
        jt = "time-delta-to-apply-millis",
        Wt = "upload-time",
        Vt = "apikey",
        Ht = "AuthMsaDeviceTicket",
        qt = "AuthXToken",
        zt = "msfpc",
        Kt = "trace",
        Gt = "user";
      function Zt(e) {
        var t = (e.ext || {}).intweb;
        return t && lt(t[zt]) ? t[zt] : null;
      }
      function Qt(e) {
        for (var t = null, n = 0; null === t && n < e.length; n++) t = Zt(e[n]);
        return t;
      }
      var Jt = (function () {
        function e(t, n) {
          var i = n ? [].concat(n) : [],
            r = this,
            o = Qt(i);
          (r.iKey = function () {
            return t;
          }),
            (r.Msfpc = function () {
              return o || Et;
            }),
            (r.count = function () {
              return i.length;
            }),
            (r.events = function () {
              return i;
            }),
            (r.addEvent = function (e) {
              return !!e && (i.push(e), o || (o = Zt(e)), !0);
            }),
            (r.split = function (n, r) {
              var a;
              if (n < i.length) {
                var s = i.length - n;
                (0, m.le)(r) || (s = r < s ? r : s), (a = i.splice(n, s)), (o = Qt(i));
              }
              return new e(t, a);
            });
        }
        return (
          (e.create = function (t, n) {
            return new e(t, n);
          }),
          e
        );
      })();
      const Yt = (function () {
        function e() {
          var t = !0,
            n = !0,
            i = !0,
            r = "use-collector-delta",
            o = !1;
          (0, De.Z)(e, this, function (e) {
            (e.allowRequestSending = function () {
              return t;
            }),
              (e.firstRequestSent = function () {
                i && ((i = !1), o || (t = !1));
              }),
              (e.shouldAddClockSkewHeaders = function () {
                return n;
              }),
              (e.getClockSkewHeaderValue = function () {
                return r;
              }),
              (e.setClockSkew = function (e) {
                o || (e ? ((r = e), (n = !0), (o = !0)) : (n = !1), (t = !0));
              });
          });
        }
        return (e.__ieDyn = 1), e;
      })();
      var Xt = (function () {
        function e() {
          var t = {};
          (0, De.Z)(e, this, function (e) {
            (e.setKillSwitchTenants = function (e, n) {
              if (e && n)
                try {
                  var i = (function (e) {
                    var t = [];
                    return (
                      e &&
                        (0, m.tO)(e, function (e) {
                          t.push((0, m.nd)(e));
                        }),
                      t
                    );
                  })(e.split(","));
                  if ("this-request-only" === n) return i;
                  for (var r = 1e3 * parseInt(n, 10), o = 0; o < i.length; ++o) t[i[o]] = (0, m.m6)() + r;
                } catch (e) {
                  return [];
                }
              return [];
            }),
              (e.isTenantKilled = function (e) {
                var n = t,
                  i = (0, m.nd)(e);
                return (void 0 !== n[i] && n[i] > (0, m.m6)()) || (delete n[i], !1);
              });
          });
        }
        return (e.__ieDyn = 1), e;
      })();
      const en = Xt;
      function tn(e) {
        var t,
          n = Math.floor(1200 * Math.random()) + 2400;
        return (t = Math.pow(2, e) * n), Math.min(t, 6e5);
      }
      var nn,
        rn = 2e6,
        on = Math.min(rn, 65e3),
        an = "metadata",
        sn = "f",
        un = /\./,
        cn = (function () {
          function e(t, n, i, r) {
            var o = "data",
              a = "baseData",
              s = !!r,
              u = n,
              c = {};
            (0, De.Z)(e, this, function (e) {
              function n(e, t, r, o, a, l, d) {
                (0, m.rW)(e, function (e, f) {
                  var h = null;
                  if (f || lt(f)) {
                    var p = r,
                      v = e,
                      g = a,
                      y = t;
                    if (s && !o && un.test(e)) {
                      var _ = e.split("."),
                        $ = _.length;
                      if ($ > 1) {
                        g && (g = g.slice());
                        for (var b = 0; b < $ - 1; b++) {
                          var C = _[b];
                          (y = y[C] = y[C] || {}), (p += "." + C), g && g.push(C);
                        }
                        v = _[$ - 1];
                      }
                    }
                    var w =
                      o &&
                      (function (e, t) {
                        var n = c[e];
                        return (
                          void 0 === n && (e.length >= 7 && (n = (0, m.xe)(e, "ext.metadata") || (0, m.xe)(e, "ext.web")), (c[e] = n)), n
                        );
                      })(p);
                    if ((h = !w && u && u.handleField(p, v) ? u.value(p, v, f, i) : ht(v, f, i))) {
                      var S = h.value;
                      if (((y[v] = S), l && l(g, v, h), d && "object" == typeof S && !(0, m.kJ)(S))) {
                        var x = g;
                        x && (x = x.slice()).push(v), n(f, S, p + "." + v, o, x, l, d);
                      }
                    }
                  }
                });
              }
              (e.createPayload = function (e, t, n, i, r, o) {
                return {
                  apiKeys: [],
                  payloadBlob: Et,
                  overflow: null,
                  sizeExceed: [],
                  failedEvts: [],
                  batches: [],
                  numEvents: 0,
                  retryCnt: e,
                  isTeardown: t,
                  isSync: n,
                  isBeacon: i,
                  sendType: o,
                  sendReason: r
                };
              }),
                (e.appendPayload = function (n, i, r) {
                  var o = n && i && !n.overflow;
                  return (
                    o &&
                      (0, Be.Lm)(
                        t,
                        function () {
                          return "Serializer:appendPayload";
                        },
                        function () {
                          for (
                            var t = i.events(),
                              o = n.payloadBlob,
                              a = n.numEvents,
                              s = !1,
                              u = [],
                              c = [],
                              l = n.isBeacon,
                              d = l ? 65e3 : 3984588,
                              f = l ? on : rn,
                              h = 0,
                              p = 0;
                            h < t.length;

                          ) {
                            var v = t[h];
                            if (v) {
                              if (a >= r) {
                                n.overflow = i.split(h);
                                break;
                              }
                              var g = e.getEventBlob(v);
                              if (g && g.length <= f) {
                                var y = g.length;
                                if (o.length + y > d) {
                                  n.overflow = i.split(h);
                                  break;
                                }
                                o && (o += "\n"), (o += g), ++p > 20 && (o.substr(0, 1), (p = 0)), (s = !0), a++;
                              } else g ? u.push(v) : c.push(v), t.splice(h, 1), h--;
                            }
                            h++;
                          }
                          if (
                            (u && u.length > 0 && n.sizeExceed.push(Jt.create(i.iKey(), u)),
                            c && c.length > 0 && n.failedEvts.push(Jt.create(i.iKey(), c)),
                            s)
                          ) {
                            n.batches.push(i), (n.payloadBlob = o), (n.numEvents = a);
                            var _ = i.iKey();
                            -1 === (0, m.UA)(n.apiKeys, _) && n.apiKeys.push(_);
                          }
                        },
                        function () {
                          return { payload: n, theBatch: { iKey: i.iKey(), evts: i.events() }, max: r };
                        }
                      ),
                    o
                  );
                }),
                (e.getEventBlob = function (e) {
                  try {
                    return (0, Be.Lm)(
                      t,
                      function () {
                        return "Serializer.getEventBlob";
                      },
                      function () {
                        var t = {};
                        (t.name = e.name), (t.time = e.time), (t.ver = e.ver), (t.iKey = "o:" + dt(e.iKey));
                        var i = {},
                          r = e.ext;
                        r &&
                          ((t.ext = i),
                          (0, m.rW)(r, function (e, t) {
                            n(t, (i[e] = {}), "ext." + e, !0, null, null, !0);
                          }));
                        var s = (t[o] = {});
                        s.baseType = e.baseType;
                        var u = (s[a] = {});
                        return (
                          n(
                            e.baseData,
                            u,
                            a,
                            !1,
                            [a],
                            function (e, t, n) {
                              ln(i, e, t, n);
                            },
                            true
                          ),
                          n(
                            e.data,
                            s,
                            o,
                            !1,
                            [],
                            function (e, t, n) {
                              ln(i, e, t, n);
                            },
                            true
                          ),
                          JSON.stringify(t)
                        );
                      },
                      function () {
                        return { item: e };
                      }
                    );
                  } catch (e) {
                    return null;
                  }
                });
            });
          }
          return (e.__ieDyn = 1), e;
        })();
      function ln(e, t, n, i) {
        if (i && e) {
          var r = pt(i.value, i.kind, i.propertyType);
          if (r > -1) {
            var o = e[an];
            o || (o = e[an] = { f: {} });
            var a = o[sn];
            if ((a || (a = o[sn] = {}), t))
              for (var s = 0; s < t.length; s++) {
                var u = t[s];
                a[u] || (a[u] = { f: {} });
                var c = a[u][sn];
                c || (c = a[u][sn] = {}), (a = c);
              }
            (a = a[n] = {}), (0, m.kJ)(i.value) ? (a.a = { t: r }) : (a.t = r);
          }
        }
      }
      var dn = "sendAttempt",
        fn = "&NoResponseBody=true",
        hn = (((nn = {})[1] = Ot), (nn[100] = Ot), (nn[200] = "sent"), (nn[8004] = At), (nn[8003] = At), nn),
        pn = {},
        vn = {};
      function mn(e, t, n) {
        (pn[e] = t), !1 !== n && (vn[t] = e);
      }
      function gn(e) {
        try {
          return e.responseText;
        } catch (e) {}
        return Et;
      }
      function yn(e, t) {
        var n = !1;
        if (e && t) {
          var i = (0, m.FY)(e);
          if (i && i.length > 0)
            for (var r = t.toLowerCase(), o = 0; o < i.length; o++) {
              var a = i[o];
              if (a && (0, m.nr)(t, a) && a.toLowerCase() === r) {
                n = !0;
                break;
              }
            }
        }
        return n;
      }
      function _n(e, t, n, i) {
        t && n && n.length > 0 && (i && pn[t] ? ((e.hdrs[pn[t]] = n), (e.useHdrs = !0)) : (e.url += "&" + t + "=" + n));
      }
      function $n(e, t) {
        return t && ((0, m.hj)(t) ? (e = [t].concat(e)) : (0, m.kJ)(t) && (e = t.concat(e))), e;
      }
      mn(Ht, Ht, !1), mn(Ft, Ft), mn(Ut, "Client-Id"), mn(Vt, Vt), mn(jt, jt), mn(Wt, Wt), mn(qt, qt);
      var bn = (function () {
        function e(t, n, i, r, o) {
          this._responseHandlers = [];
          var a,
            s,
            u,
            c,
            l,
            d,
            f,
            h,
            g,
            y,
            _ = "?cors=true&" + Dt.toLowerCase() + "=" + Lt,
            $ = new en(),
            b = !1,
            C = new Yt(),
            w = !1,
            S = 0,
            x = !0,
            T = [],
            E = {},
            k = [],
            A = null,
            P = !1,
            O = !1,
            M = !1;
          (0, De.Z)(e, this, function (e) {
            var L = !0;
            function I(e, t) {
              for (var n = 0, i = null, r = 0; null == i && r < e.length; )
                1 === (n = e[r])
                  ? (0, v.cp)()
                    ? (i = D)
                    : (0, v.Z3)() && (i = R)
                  : 2 === n && (0, v.JO)(t) && (!t || (t && !h))
                  ? (i = B)
                  : w && 3 === n && (0, v.MF)() && (i = F),
                  r++;
              return i ? { _transport: n, _isSync: t, sendPOST: i } : null;
            }
            function D(e, t, n) {
              var i = new XDomainRequest();
              i.open(kt, e.urlString),
                e.timeout && (i.timeout = e.timeout),
                (i.onload = function () {
                  var e = gn(i);
                  N(t, 200, {}, e), J(e);
                }),
                (i.onerror = function () {
                  N(t, 400, {});
                }),
                (i.ontimeout = function () {
                  N(t, 500, {});
                }),
                (i.onprogress = function () {}),
                n
                  ? i.send(e.data)
                  : o.set(function () {
                      i.send(e.data);
                    }, 0);
            }
            function B(e, t, n) {
              var i,
                r = e.urlString,
                a = !1,
                s = !1,
                u = (((i = { body: e.data, method: kt }).Microsoft_ApplicationInsights_BypassAjaxInstrumentation = !0), i);
              n && ((u.keepalive = !0), 2 === e._sendReason && ((a = !0), y && (r += fn))),
                L && (u.credentials = "include"),
                e.headers && (0, m.FY)(e.headers).length > 0 && (u.headers = e.headers),
                fetch(r, u)
                  .then(function (e) {
                    var n = {},
                      i = Et,
                      r = e.headers;
                    r &&
                      r.forEach(function (e, t) {
                        n[t] = e;
                      }),
                      e.body &&
                        e.text().then(function (e) {
                          i = e;
                        }),
                      s || ((s = !0), N(t, e.status, n, i), J(i));
                  })
                  .catch(function (e) {
                    s || ((s = !0), N(t, 0, {}));
                  }),
                a && !s && ((s = !0), N(t, 200, {})),
                !s &&
                  e.timeout > 0 &&
                  o.set(function () {
                    s || ((s = !0), N(t, 500, {}));
                  }, e.timeout);
            }
            function R(e, t, n) {
              var i = e.urlString;
              function r(e, t, n) {
                if (!e[n] && t && t.getResponseHeader) {
                  var i = t.getResponseHeader(n);
                  i && (e[n] = (0, m.nd)(i));
                }
                return e;
              }
              function o(e) {
                var t = {};
                return (
                  e.getAllResponseHeaders
                    ? (t = (function (e) {
                        var t = {};
                        if ((0, m.HD)(e)) {
                          var n = (0, m.nd)(e).split(/[\r\n]+/);
                          (0, m.tO)(n, function (e) {
                            if (e) {
                              var n = e.indexOf(": ");
                              if (-1 !== n) {
                                var i = (0, m.nd)(e.substring(0, n)).toLowerCase(),
                                  r = (0, m.nd)(e.substring(n + 1));
                                t[i] = r;
                              } else t[(0, m.nd)(e)] = 1;
                            }
                          });
                        }
                        return t;
                      })(e.getAllResponseHeaders()))
                    : ((t = r(t, e, Nt)), (t = r(t, e, Rt)), (t = r(t, e, "kill-duration-seconds"))),
                  t
                );
              }
              function a(e, n) {
                N(t, e.status, o(e), n);
              }
              n && e.disableXhrSync && (n = !1);
              var s = (function (e, t, n, i, r, o) {
                function a(e, t, n) {
                  try {
                    e[t] = n;
                  } catch (e) {}
                }
                void 0 === i && (i = !1), void 0 === r && (r = !1);
                var s = new XMLHttpRequest();
                return (
                  i && a(s, "Microsoft_ApplicationInsights_BypassAjaxInstrumentation", i),
                  n && a(s, ut, n),
                  s.open(e, t, !r),
                  n && a(s, ut, n),
                  !r && o && a(s, "timeout", o),
                  s
                );
              })(kt, i, L, !0, n, e.timeout);
              (0, m.rW)(e.headers, function (e, t) {
                s.setRequestHeader(e, t);
              }),
                (s.onload = function () {
                  var e = gn(s);
                  a(s, e), J(e);
                }),
                (s.onerror = function () {
                  a(s);
                }),
                (s.ontimeout = function () {
                  a(s);
                }),
                s.send(e.data);
            }
            function N(e, t, n, i) {
              try {
                e(t, n, i);
              } catch (e) {
                (0, p.kP)(s, 2, 518, (0, v.eU)(e));
              }
            }
            function F(e, t, n) {
              var i = 200,
                r = e._thePayload,
                o = e.urlString + (y ? fn : Et);
              try {
                var a = (0, v.jW)();
                if (!a.sendBeacon(o, e.data))
                  if (r) {
                    var u = [];
                    (0, m.tO)(r.batches, function (e) {
                      if (u && e && e.count() > 0) {
                        for (var t = e.events(), n = 0; n < t.length; n++)
                          if (!a.sendBeacon(o, A.getEventBlob(t[n]))) {
                            u.push(e.split(n));
                            break;
                          }
                      } else u.push(e.split(0));
                    }),
                      Y(u, 8003, r.sendType, !0);
                  } else i = 0;
              } catch (e) {
                (0, p.jV)(s, "Failed to send telemetry using sendBeacon API. Ex:" + (0, v.eU)(e)), (i = 0);
              } finally {
                N(t, i, {}, Et);
              }
            }
            function U(e) {
              return 2 === e || 3 === e;
            }
            function j(e) {
              return O && U(e) && (e = 2), e;
            }
            function W() {
              return !b && S < n;
            }
            function V() {
              var e = k;
              return (k = []), e;
            }
            function H(e, t, n) {
              var i = !1;
              return e && e.length > 0 && !b && u[t] && A && (i = 0 !== t || (W() && (n > 0 || C.allowRequestSending()))), i;
            }
            function q(e) {
              var t = {};
              return (
                e &&
                  (0, m.tO)(e, function (e, n) {
                    t[n] = { iKey: e.iKey(), evts: e.events() };
                  }),
                t
              );
            }
            function z(e, n, i, r, o) {
              if (e && 0 !== e.length)
                if (b) Y(e, 1, r);
                else {
                  r = j(r);
                  try {
                    var a = e,
                      l = 0 !== r;
                    (0, Be.Lm)(
                      c,
                      function () {
                        return "HttpManager:_sendBatches";
                      },
                      function (a) {
                        a && (e = e.slice(0));
                        for (
                          var s = [],
                            c = null,
                            d = mt(),
                            f = u[r] || (l ? u[1] : u[0]),
                            h = f && f._transport,
                            p = g && (O || U(r) || 3 === h || (f._isSync && 2 === h));
                          H(e, r, n);

                        ) {
                          var v = e.shift();
                          v &&
                            v.count() > 0 &&
                            ($.isTenantKilled(v.iKey())
                              ? s.push(v)
                              : ((c = c || A.createPayload(n, i, l, p, o, r)),
                                A.appendPayload(c, v, t)
                                  ? null !== c.overflow &&
                                    ((e = [c.overflow].concat(e)), (c.overflow = null), Z(c, d, mt(), o), (d = mt()), (c = null))
                                  : (Z(c, d, mt(), o), (d = mt()), (e = [v].concat(e)), (c = null))));
                        }
                        c && Z(c, d, mt(), o), e.length > 0 && (k = e.concat(k)), Y(s, 8004, r);
                      },
                      function () {
                        return {
                          batches: q(a),
                          retryCount: n,
                          isTeardown: i,
                          isSynchronous: l,
                          sendReason: o,
                          useSendBeacon: U(r),
                          sendType: r
                        };
                      },
                      !l
                    );
                  } catch (e) {
                    (0, p.kP)(s, 2, 48, "Unexpected Exception sending batch: " + (0, v.eU)(e));
                  }
                }
            }
            function K(e, t) {
              var n = { url: _, hdrs: {}, useHdrs: !1 };
              t
                ? ((n.hdrs = vt(n.hdrs, E)), (n.useHdrs = (0, m.FY)(n.hdrs).length > 0))
                : (0, m.rW)(E, function (e, t) {
                    vn[e] ? _n(n, vn[e], t, !1) : ((n.hdrs[e] = t), (n.useHdrs = !0));
                  }),
                _n(n, Ut, "NO_AUTH", t),
                _n(n, Ft, st, t);
              var i = Et;
              (0, m.tO)(e.apiKeys, function (e) {
                i.length > 0 && (i += ","), (i += e);
              }),
                _n(n, Vt, i, t),
                _n(n, Wt, (0, m.m6)().toString(), t);
              var r = (function (e) {
                for (var t = 0; t < e.batches.length; t++) {
                  var n = e.batches[t].Msfpc();
                  if (n) return encodeURIComponent(n);
                }
                return Et;
              })(e);
              if (
                (lt(r) && (n.url += "&ext.intweb.msfpc=" + r),
                C.shouldAddClockSkewHeaders() && _n(n, jt, C.getClockSkewHeaderValue(), t),
                c.getWParam)
              ) {
                var o = c.getWParam();
                o >= 0 && (n.url += "&w=" + o);
              }
              for (var a = 0; a < T.length; a++) n.url += "&" + T[a].name + "=" + T[a].value;
              return n;
            }
            function G(e, t, n) {
              (e[t] = e[t] || {}), (e[t][a.identifier] = n);
            }
            function Z(t, n, r, o) {
              if (t && t.payloadBlob && t.payloadBlob.length > 0) {
                var l = !!e.sendHook,
                  g = u[t.sendType];
                !U(t.sendType) && t.isBeacon && 2 === t.sendReason && (g = u[2] || u[3] || g);
                var y = M;
                (t.isBeacon || 3 === g._transport) && (y = !1);
                var _ = K(t, y);
                y = y || _.useHdrs;
                var b = mt();
                (0, Be.Lm)(
                  c,
                  function () {
                    return "HttpManager:_doPayloadSend";
                  },
                  function () {
                    for (var u = 0; u < t.batches.length; u++)
                      for (var w = t.batches[u].events(), T = 0; T < w.length; T++) {
                        var E = w[T];
                        if (P) {
                          var k = (E.timings = E.timings || {});
                          G(k, "sendEventStart", b), G(k, "serializationStart", n), G(k, "serializationCompleted", r);
                        }
                        E[dn] > 0 ? E[dn]++ : (E[dn] = 1);
                      }
                    Y(t.batches, 1e3 + (o || 0), t.sendType, !0);
                    var A = {
                      data: t.payloadBlob,
                      urlString: _.url,
                      headers: _.hdrs,
                      _thePayload: t,
                      _sendReason: o,
                      timeout: d,
                      disableXhrSync: f,
                      disableFetchKeepAlive: h
                    };
                    y && (yn(A.headers, It) || (A.headers[It] = "no-cache, no-store"), yn(A.headers, Dt) || (A.headers[Dt] = Lt));
                    var M = null;
                    g &&
                      (M = function (n) {
                        C.firstRequestSent();
                        var r = function (n, r) {
                            !(function (t, n, r, o) {
                              var s = 9e3,
                                u = null,
                                c = !1,
                                l = !1;
                              try {
                                var d = !0;
                                if (typeof t !== Oe.jA) {
                                  if (n) {
                                    C.setClockSkew(n[Nt]);
                                    var f = n[Rt] || n["kill-duration-seconds"];
                                    (0, m.tO)($.setKillSwitchTenants(n[Bt], f), function (e) {
                                      (0, m.tO)(r.batches, function (t) {
                                        if (t.iKey() === e) {
                                          u = u || [];
                                          var n = t.split(0);
                                          (r.numEvents -= n.count()), u.push(n);
                                        }
                                      });
                                    });
                                  }
                                  if (200 == t || 204 == t) return void (s = 200);
                                  (((p = t) >= 300 && p < 500 && 408 != p && 429 != p) || 501 == p || 505 == p || r.numEvents <= 0) &&
                                    (d = !1),
                                    (s = 9e3 + (t % 1e3));
                                }
                                if (d) {
                                  s = 100;
                                  var h = r.retryCnt;
                                  0 === r.sendType &&
                                    (h < i
                                      ? ((c = !0),
                                        Q(
                                          function () {
                                            0 === r.sendType && S--, z(r.batches, h + 1, r.isTeardown, O ? 2 : r.sendType, 5);
                                          },
                                          O,
                                          tn(h)
                                        ))
                                      : ((l = !0), O && (s = 8001)));
                                }
                              } finally {
                                c ||
                                  (C.setClockSkew(),
                                  (function (t, n, i, r) {
                                    try {
                                      r && a._backOffTransmission(),
                                        200 === n &&
                                          (r || t.isSync || a._clearBackOff(),
                                          (function (e) {
                                            if (P) {
                                              var t = mt();
                                              (0, m.tO)(e, function (e) {
                                                e &&
                                                  e.count() > 0 &&
                                                  (function (e, t) {
                                                    P &&
                                                      (0, m.tO)(e, function (e) {
                                                        G((e.timings = e.timings || {}), "sendEventCompleted", t);
                                                      });
                                                  })(e.events(), t);
                                              });
                                            }
                                          })(t.batches)),
                                        Y(t.batches, n, t.sendType, !0);
                                    } finally {
                                      0 === t.sendType && (S--, 5 !== i && e.sendQueuedRequests(t.sendType, i));
                                    }
                                  })(r, s, o, l)),
                                  Y(u, 8004, r.sendType);
                              }
                              var p;
                            })(n, r, t, o);
                          },
                          u = t.isTeardown || t.isSync;
                        try {
                          g.sendPOST(n, r, u), e.sendListener && e.sendListener(A, n, u, t.isBeacon);
                        } catch (e) {
                          (0, p.jV)(s, "Unexpected exception sending payload. Ex:" + (0, v.eU)(e)), N(r, 0, {});
                        }
                      }),
                      (0, Be.Lm)(
                        c,
                        function () {
                          return "HttpManager:_doPayloadSend.sender";
                        },
                        function () {
                          if (M)
                            if ((0 === t.sendType && S++, l && !t.isBeacon && 3 !== g._transport)) {
                              var n = {
                                  data: A.data,
                                  urlString: A.urlString,
                                  headers: vt({}, A.headers),
                                  timeout: A.timeout,
                                  disableXhrSync: A.disableXhrSync,
                                  disableFetchKeepAlive: A.disableFetchKeepAlive
                                },
                                i = !1;
                              (0, Be.Lm)(
                                c,
                                function () {
                                  return "HttpManager:_doPayloadSend.sendHook";
                                },
                                function () {
                                  try {
                                    e.sendHook(
                                      n,
                                      function (e) {
                                        (i = !0),
                                          x ||
                                            e._thePayload ||
                                            ((e._thePayload = e._thePayload || A._thePayload),
                                            (e._sendReason = e._sendReason || A._sendReason)),
                                          M(e);
                                      },
                                      t.isSync || t.isTeardown
                                    );
                                  } catch (e) {
                                    i || M(A);
                                  }
                                }
                              );
                            } else M(A);
                        }
                      );
                  },
                  function () {
                    return { thePayload: t, serializationStart: n, serializationCompleted: r, sendReason: o };
                  },
                  t.isSync
                );
              }
              t.sizeExceed && t.sizeExceed.length > 0 && Y(t.sizeExceed, 8003, t.sendType),
                t.failedEvts && t.failedEvts.length > 0 && Y(t.failedEvts, 8002, t.sendType);
            }
            function Q(e, t, n) {
              t ? e() : o.set(e, n);
            }
            function J(t) {
              var n = e._responseHandlers;
              try {
                for (var i = 0; i < n.length; i++)
                  try {
                    n[i](t);
                  } catch (e) {
                    (0, p.kP)(s, 1, 519, "Response handler failed: " + e);
                  }
                if (t) {
                  var r = JSON.parse(t);
                  lt(r.webResult) && lt(r.webResult[zt]) && l.set("MSFPC", r.webResult[zt], 31536e3);
                }
              } catch (e) {}
            }
            function Y(e, t, n, i) {
              if (e && e.length > 0 && r) {
                var o =
                  r[
                    (function (e) {
                      var t = hn[e];
                      lt(t) ||
                        ((t = "oth"),
                        e >= 9e3 && e <= 9999 ? (t = Mt) : e >= 8e3 && e <= 8999 ? (t = At) : e >= 1e3 && e <= 1999 && (t = Pt));
                      return t;
                    })(t)
                  ];
                if (o) {
                  var a = 0 !== n;
                  (0, Be.Lm)(
                    c,
                    function () {
                      return "HttpManager:_sendBatchesNotification";
                    },
                    function () {
                      Q(
                        function () {
                          try {
                            o.call(r, e, t, a, n);
                          } catch (e) {
                            (0, p.kP)(s, 1, 74, "send request notification failed: " + e);
                          }
                        },
                        i || a,
                        0
                      );
                    },
                    function () {
                      return { batches: q(e), reason: t, isSync: a, sendSync: i, sendType: n };
                    },
                    !a
                  );
                }
              }
            }
            (e.initialize = function (e, t, n, i, r) {
              var o;
              r || (r = {}),
                (_ = e + _),
                (M = !!(0, m.o8)(r.avoidOptions) || !r.avoidOptions),
                (c = t),
                (l = t.getCookieMgr()),
                (P = !c.config.disableEventTimings);
              var $ = !!c.config.enableCompoundKey;
              s = (a = n).diagLog();
              var b = r.valueSanitizer,
                C = r.stringifyObjects;
              (0, m.o8)(r.enableCompoundKey) || ($ = !!r.enableCompoundKey),
                (d = r.xhrTimeout),
                (f = !!r.disableXhrSync),
                (h = !!r.disableFetchKeepAlive),
                (y = !1 !== r.addNoResponse),
                (w = !(0, v.b$)()),
                (A = new cn(c, b, C, $)),
                (0, m.le)(r.useSendBeacon) || (w = !!r.useSendBeacon);
              var S = i,
                T = r.alwaysUseXhrOverride ? i : null,
                E = r.alwaysUseXhrOverride ? i : null,
                k = [3, 2];
              if (!i) {
                x = !1;
                var O = (0, v.k$)();
                O && O.protocol && "file:" === O.protocol.toLowerCase() && (L = !1);
                var D = [];
                (0, v.b$)() ? ((D = [2, 1]), (k = [2, 1, 3])) : (D = [1, 2, 3]),
                  (i = I((D = $n(D, r.transports)), !1)) || (0, p.jV)(s, "No available transport to send events"),
                  (S = I(D, !0));
              }
              T || (T = I((k = $n(k, r.unloadTransports)), !0)),
                (g = !x && ((w && (0, v.MF)()) || (!h && (0, v.JO)(!0)))),
                ((o = {})[0] = i),
                (o[1] = S || I([1, 2, 3], !0)),
                (o[2] = T || S || I([1], !0)),
                (o[3] = E || I([2, 3], !0) || S || I([1], !0)),
                (u = o);
            }),
              (e._getDbgPlgTargets = function () {
                return [u[0], $, A, u];
              }),
              (e.addQueryStringParameter = function (e, t) {
                for (var n = 0; n < T.length; n++) if (T[n].name === e) return void (T[n].value = t);
                T.push({ name: e, value: t });
              }),
              (e.addHeader = function (e, t) {
                E[e] = t;
              }),
              (e.canSendRequest = function () {
                return W() && C.allowRequestSending();
              }),
              (e.sendQueuedRequests = function (e, t) {
                (0, m.o8)(e) && (e = 0), O && ((e = j(e)), (t = 2)), H(k, e, 0) && z(V(), 0, !1, e, t || 0);
              }),
              (e.isCompletelyIdle = function () {
                return !b && 0 === S && 0 === k.length;
              }),
              (e.setUnloading = function (e) {
                O = e;
              }),
              (e.addBatch = function (e) {
                if (e && e.count() > 0) {
                  if ($.isTenantKilled(e.iKey())) return !1;
                  k.push(e);
                }
                return !0;
              }),
              (e.teardown = function () {
                k.length > 0 && z(V(), 0, !0, 2, 2);
              }),
              (e.pause = function () {
                b = !0;
              }),
              (e.resume = function () {
                (b = !1), e.sendQueuedRequests(0, 4);
              }),
              (e.sendSynchronousBatch = function (e, t, n) {
                e && e.count() > 0 && ((0, m.le)(t) && (t = 1), O && ((t = j(t)), (n = 2)), z([e], 0, !1, t, n || 0));
              });
          });
        }
        return (e.__ieDyn = 1), e;
      })();
      function Cn(e, t) {
        for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
        return setTimeout(e, t, n);
      }
      function wn(e) {
        clearTimeout(e);
      }
      function Sn(e, t) {
        return { set: e || Cn, clear: t || wn };
      }
      var xn = "eventsDiscarded",
        Tn = "overrideInstrumentationKey",
        En = "maxEventRetryAttempts",
        kn = "maxUnloadEventRetryAttempts";
      const An = (function (e) {
        function t() {
          var n,
            i = e.call(this) || this;
          (i.identifier = "PostChannel"), (i.priority = 1011), (i.version = "3.2.12");
          var r,
            o,
            a,
            s,
            u,
            c,
            l,
            d = !1,
            f = [],
            h = null,
            g = !1,
            y = 0,
            _ = 500,
            $ = 0,
            b = 1e4,
            C = {},
            w = Tt,
            S = null,
            x = null,
            T = 0,
            E = 0,
            k = {},
            A = -1,
            P = !0,
            O = !1,
            M = 6,
            L = 2;
          return (
            (0, De.Z)(t, i, function (e, t) {
              function i(e) {
                "beforeunload" !== (e || (0, v.Jj)().event).type && ((O = !0), o.setUnloading(O)), W(2, 2);
              }
              function I(e) {
                (O = !1), o.setUnloading(O);
              }
              function D(e, t) {
                if (
                  (e.sendAttempt || (e.sendAttempt = 0),
                  e.latency || (e.latency = 1),
                  e.ext && e.ext[Kt] && delete e.ext[Kt],
                  e.ext && e.ext[Gt] && e.ext[Gt].id && delete e.ext[Gt].id,
                  P &&
                    ((e.ext = (0, m.Ax)(e.ext)),
                    e.baseData && (e.baseData = (0, m.Ax)(e.baseData)),
                    e.data && (e.data = (0, m.Ax)(e.data))),
                  e.sync)
                )
                  if (T || g) (e.latency = 3), (e.sync = !1);
                  else if (o)
                    return P && (e = (0, m.Ax)(e)), void o.sendSynchronousBatch(Jt.create(e.iKey, [e]), !0 === e.sync ? 1 : e.sync, 3);
                var n = e.latency,
                  i = $,
                  r = b;
                4 === n && ((i = y), (r = _));
                var a = !1;
                if (i < r) a = !z(e, t);
                else {
                  var s = 1,
                    u = 20;
                  4 === n && ((s = 4), (u = 1)),
                    (a = !0),
                    (function (e, t, n, i) {
                      for (; n <= t; ) {
                        var r = H(e, t, !0);
                        if (r && r.count() > 0) {
                          var o = r.split(0, i),
                            a = o.count();
                          if (a > 0) return 4 === n ? (y -= a) : ($ -= a), ue(xn, [o], xt.QueueFull), !0;
                        }
                        n++;
                      }
                      return K(), !1;
                    })(e.iKey, e.latency, s, u) && (a = !z(e, t));
                }
                a && se(xn, [e], xt.QueueFull);
              }
              function B(e, t, n) {
                var i = G(e, t, n);
                return o.sendQueuedRequests(t, n), i;
              }
              function R() {
                return $ > 0;
              }
              function N() {
                if ((A >= 0 && G(A, 0, u) && o.sendQueuedRequests(0, u), y > 0 && !x && !g)) {
                  var e = C[w][2];
                  e >= 0 &&
                    (x = U(function () {
                      (x = null), B(4, 0, 1), N();
                    }, e));
                }
                var t = C[w][1];
                !S &&
                  !h &&
                  t >= 0 &&
                  !g &&
                  (R()
                    ? (S = U(function () {
                        (S = null), B(0 === E ? 3 : 1, 0, 1), E++, (E %= 2), N();
                      }, t))
                    : (E = 0));
              }
              function F() {
                (n = null),
                  (d = !1),
                  (f = []),
                  (h = null),
                  (g = !1),
                  (y = 0),
                  (_ = 500),
                  ($ = 0),
                  (b = 1e4),
                  (C = {}),
                  (w = Tt),
                  (S = null),
                  (x = null),
                  (T = 0),
                  (E = 0),
                  (r = null),
                  (k = {}),
                  (a = void 0),
                  (s = 0),
                  (A = -1),
                  (u = null),
                  (P = !0),
                  (O = !1),
                  (M = 6),
                  (L = 2),
                  (c = null),
                  (l = Sn()),
                  (o = new bn(500, 2, 1, { requeue: oe, send: ce, sent: le, drop: de, rspFail: fe, oth: pe }, l)),
                  re(),
                  (k[4] = { batches: [], iKeyMap: {} }),
                  (k[3] = { batches: [], iKeyMap: {} }),
                  (k[2] = { batches: [], iKeyMap: {} }),
                  (k[1] = { batches: [], iKeyMap: {} }),
                  ve();
              }
              function U(e, t) {
                0 === t && T && (t = 1);
                var n = 1e3;
                return T && (n = tn(T - 1)), l.set(e, t * n);
              }
              function j() {
                return null !== S && (l.clear(S), (S = null), (E = 0), !0);
              }
              function W(e, t) {
                j(), h && (l.clear(h), (h = null)), g || B(1, e, t);
              }
              function H(e, t, n) {
                var i = k[t];
                i || (i = k[(t = 1)]);
                var r = i.iKeyMap[e];
                return !r && n && ((r = Jt.create(e)), i.batches.push(r), (i.iKeyMap[e] = r)), r;
              }
              function q(t, n) {
                o.canSendRequest() && !T && (a > 0 && $ > a && (n = !0), n && null == h && e.flush(t, null, 20));
              }
              function z(e, t) {
                P && (e = (0, m.Ax)(e));
                var n = e.latency,
                  i = H(e.iKey, n, !0);
                return !!i.addEvent(e) && (4 !== n ? ($++, t && 0 === e.sendAttempt && q(!e.sync, s > 0 && i.count() >= s)) : y++, !0);
              }
              function K() {
                for (
                  var e = 0,
                    t = 0,
                    n = function (n) {
                      var i = k[n];
                      i &&
                        i.batches &&
                        (0, m.tO)(i.batches, function (i) {
                          4 === n ? (e += i.count()) : (t += i.count());
                        });
                    },
                    i = 1;
                  i <= 4;
                  i++
                )
                  n(i);
                ($ = t), (y = e);
              }
              function G(t, n, i) {
                var r = !1,
                  a = 0 === n;
                return (
                  !a || o.canSendRequest()
                    ? (0, Be.Lm)(
                        e.core,
                        function () {
                          return "PostChannel._queueBatches";
                        },
                        function () {
                          for (var e = [], n = 4; n >= t; ) {
                            var i = k[n];
                            i &&
                              i.batches &&
                              i.batches.length > 0 &&
                              ((0, m.tO)(i.batches, function (t) {
                                o.addBatch(t) ? (r = r || (t && t.count() > 0)) : (e = e.concat(t.events())),
                                  4 === n ? (y -= t.count()) : ($ -= t.count());
                              }),
                              (i.batches = []),
                              (i.iKeyMap = {})),
                              n--;
                          }
                          e.length > 0 && se(xn, e, xt.KillSwitch), r && A >= t && ((A = -1), (u = 0));
                        },
                        function () {
                          return { latency: t, sendType: n, sendReason: i };
                        },
                        !a
                      )
                    : ((A = A >= 0 ? Math.min(A, t) : t), (u = Math.max(u, i))),
                  r
                );
              }
              function Z(e, t) {
                B(1, 0, t),
                  K(),
                  ie(function () {
                    e && e(),
                      f.length > 0
                        ? (h = U(function () {
                            (h = null), Z(f.shift(), t);
                          }, 0))
                        : ((h = null), N());
                  });
              }
              function ie(e) {
                o.isCompletelyIdle()
                  ? e()
                  : (h = U(function () {
                      (h = null), ie(e);
                    }, 0.25));
              }
              function re() {
                ((C = {})[Tt] = [2, 1, 0]), (C.NEAR_REAL_TIME = [6, 3, 0]), (C.BEST_EFFORT = [18, 9, 0]);
              }
              function oe(t, n) {
                var i = [],
                  r = M;
                O && (r = L),
                  (0, m.tO)(t, function (t) {
                    t &&
                      t.count() > 0 &&
                      (0, m.tO)(t.events(), function (t) {
                        t && (t.sync && ((t.latency = 4), (t.sync = !1)), t.sendAttempt < r ? (_t(t, e.identifier), D(t, !1)) : i.push(t));
                      });
                  }),
                  i.length > 0 && se(xn, i, xt.NonRetryableStatus),
                  O && W(2, 2);
              }
              function ae(t, n) {
                var i = e._notificationManager || {},
                  r = i[t];
                if (r)
                  try {
                    r.apply(i, n);
                  } catch (n) {
                    (0, p.kP)(e.diagLog(), 1, 74, t + " notification failed: " + n);
                  }
              }
              function se(e, t) {
                for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
                t && t.length > 0 && ae(e, [t].concat(n));
              }
              function ue(e, t) {
                for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
                t &&
                  t.length > 0 &&
                  (0, m.tO)(t, function (t) {
                    t && t.count() > 0 && ae(e, [t.events()].concat(n));
                  });
              }
              function ce(e, t, n) {
                e && e.length > 0 && ae("eventsSendRequest", [t >= 1e3 && t <= 1999 ? t - 1e3 : 0, !0 !== n]);
              }
              function le(e, t) {
                ue("eventsSent", e, t), N();
              }
              function de(e, t) {
                ue(xn, e, t >= 8e3 && t <= 8999 ? t - 8e3 : xt.Unknown);
              }
              function fe(e) {
                ue(xn, e, xt.NonRetryableStatus), N();
              }
              function pe(e, t) {
                ue(xn, e, xt.Unknown), N();
              }
              function ve() {
                s = n && n.disableAutoBatchFlushLimit ? 0 : Math.max(1500, b / 6);
              }
              F(),
                (e._getDbgPlgTargets = function () {
                  return [o];
                }),
                (e.initialize = function (s, u, d) {
                  (0, Be.Lm)(
                    u,
                    function () {
                      return "PostChannel:initialize";
                    },
                    function () {
                      var f = u;
                      t.initialize(s, u, d);
                      try {
                        u.addUnloadCb;
                        c = he((0, V.J)(e.identifier), u.evtNamespace && u.evtNamespace());
                        var h = e._getTelCtx();
                        (s.extensionConfig[e.identifier] = s.extensionConfig[e.identifier] || {}),
                          (n = h.getExtCfg(e.identifier)),
                          (l = Sn(n.setTimeoutOverride, n.clearTimeoutOverride)),
                          (P = !n.disableOptimizeObj && !!(0, v.a8)("chrome")),
                          (function (e) {
                            var t = e.getWParam;
                            e.getWParam = function () {
                              var e = 0;
                              return n.ignoreMc1Ms0CookieProcessing && (e |= 2), e | t();
                            };
                          })(f),
                          n.eventsLimitInMem > 0 && (b = n.eventsLimitInMem),
                          n.immediateEventLimit > 0 && (_ = n.immediateEventLimit),
                          n.autoFlushEventsLimit > 0 && (a = n.autoFlushEventsLimit),
                          (0, m.hj)(n[En]) && (M = n[En]),
                          (0, m.hj)(n[kn]) && (L = n[kn]),
                          ve(),
                          n.httpXHROverride && n.httpXHROverride.sendPOST && (r = n.httpXHROverride),
                          lt(s.anonCookieName) && o.addQueryStringParameter("anoncknm", s.anonCookieName),
                          (o.sendHook = n.payloadPreprocessor),
                          (o.sendListener = n.payloadListener);
                        var p = n.overrideEndpointUrl ? n.overrideEndpointUrl : s.endpointUrl;
                        (e._notificationManager = u.getNotifyMgr()), o.initialize(p, e.core, e, r, n);
                        var g = s.disablePageUnloadEvents || [];
                        _e(i, g, c), $e(i, g, c), be(I, s.disablePageShowEvents, c);
                      } catch (t) {
                        throw (e.setInitialized(!1), t);
                      }
                    },
                    function () {
                      return { coreConfig: s, core: u, extensions: d };
                    }
                  );
                }),
                (e.processTelemetry = function (t, i) {
                  _t(t, e.identifier);
                  var r = (i = e._getTelCtx(i)).getExtCfg(e.identifier),
                    o = !!n.disableTelemetry;
                  r && (o = o || !!r.disableTelemetry);
                  var a = t;
                  o || d || (n[Tn] && (a.iKey = n[Tn]), r && r[Tn] && (a.iKey = r[Tn]), D(a, !0), O ? W(2, 2) : N()), e.processNext(a, i);
                }),
                (e._doTeardown = function (e, t) {
                  W(2, 2),
                    (d = !0),
                    o.teardown(),
                    ye([ee, X, J], null, c),
                    (function (e, t) {
                      var n = he(te, t);
                      ye([J], e, n), ye([Q], null, n);
                    })(null, c),
                    (function (e, t) {
                      var n = he(ne, t);
                      ye([Y], e, n), ye([Q], null, n);
                    })(null, c),
                    F();
                }),
                (e.setEventQueueLimits = function (e, t) {
                  (b = e > 0 ? e : 1e4), (a = t > 0 ? t : 0), ve();
                  var n = $ > e;
                  if (!n && s > 0)
                    for (var i = 1; !n && i <= 3; i++) {
                      var r = k[i];
                      r &&
                        r.batches &&
                        (0, m.tO)(r.batches, function (e) {
                          e && e.count() >= s && (n = !0);
                        });
                    }
                  q(!0, n);
                }),
                (e.pause = function () {
                  j(), (g = !0), o.pause();
                }),
                (e.resume = function () {
                  (g = !1), o.resume(), N();
                }),
                (e.addResponseHandler = function (e) {
                  o._responseHandlers.push(e);
                }),
                (e._loadTransmitProfiles = function (e) {
                  j(),
                    re(),
                    (w = Tt),
                    N(),
                    (0, m.rW)(e, function (e, t) {
                      var n = t.length;
                      if (n >= 2) {
                        var i = n > 2 ? t[2] : 0;
                        if ((t.splice(0, n - 2), t[1] < 0 && (t[0] = -1), t[1] > 0 && t[0] > 0)) {
                          var r = t[0] / t[1];
                          t[0] = Math.ceil(r) * t[1];
                        }
                        i >= 0 && t[1] >= 0 && i > t[1] && (i = t[1]), t.push(i), (C[e] = t);
                      }
                    });
                }),
                (e.flush = function (e, t, n) {
                  if ((void 0 === e && (e = !0), !g))
                    if (((n = n || 1), e))
                      null == h
                        ? (j(),
                          G(1, 0, n),
                          (h = U(function () {
                            (h = null), Z(t, n);
                          }, 0)))
                        : f.push(t);
                    else {
                      var i = j();
                      B(1, 1, n), null != t && t(), i && N();
                    }
                }),
                (e.setMsaAuthTicket = function (e) {
                  o.addHeader(Ht, e);
                }),
                (e.hasEvents = R),
                (e._setTransmitProfile = function (e) {
                  w !== e && void 0 !== C[e] && (j(), (w = e), N());
                }),
                (e._backOffTransmission = function () {
                  T < 4 && (T++, j(), N());
                }),
                (e._clearBackOff = function () {
                  T && ((T = 0), j(), N());
                }),
                (0, m.l_)(
                  e,
                  "_setTimeoutOverride",
                  function () {
                    return l.set;
                  },
                  function (e) {
                    l = Sn(e, l.clear);
                  }
                ),
                (0, m.l_)(
                  e,
                  "_clearTimeoutOverride",
                  function () {
                    return l.clear;
                  },
                  function (e) {
                    l = Sn(l.set, e);
                  }
                );
            }),
            i
          );
        }
        return Le(t, e), (t.__ieDyn = 1), t;
      })(Ve.i);
      var Pn = "HttpManager:_sendBatches",
        On = "PrivacyGuard:_processTelemetry",
        Mn = (function () {
          function e(e, t, n) {
            (this.start = Date.now()), (this.name = e), (this.isAsync = !0 === n), (this.payload = t);
          }
          return (
            (e.prototype.isChildEvt = function () {
              return !1;
            }),
            (e.prototype.complete = function () {
              (this.time = Date.now() - this.start), (this.exTime = this.time);
            }),
            e
          );
        })(),
        Ln = (function () {
          function e(e) {
            this._callbacks = e;
          }
          return (
            (e.prototype.create = function (e, t, n) {
              return e === Pn || e === On ? new Mn(e, t, n) : null;
            }),
            (e.prototype.fire = function (e) {
              if ((e && e.complete(), this._callbacks))
                switch (e.name) {
                  case Pn:
                    this.handleSendBatches(e);
                    break;
                  case On:
                    this.handlePrivacyGuardNotification(e);
                }
            }),
            (e.prototype.setCtx = function (e, t) {}),
            (e.prototype.getCtx = function (e) {}),
            (e.prototype.handleSendBatches = function (e) {
              if (this._callbacks.requestProcessingStats) {
                var t = 0;
                if (e.payload) {
                  var n = e.payload();
                  if (n.batches) for (var i in n.batches) t += n.batches[i].evts.length;
                }
                this._callbacks.requestProcessingStats(e.time || 0, t);
              }
            }),
            (e.prototype.handlePrivacyGuardNotification = function (e) {
              this._callbacks.privacyGuardStats && e.time && e.time > 0 && this._callbacks.privacyGuardStats(e.time);
            }),
            e
          );
        })();
      var In = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            (0, i.ZT)(t, e),
            (t.prototype.initialize = function (t, n) {
              this._postChannel = new An();
              var r = null != n ? n : [];
              (t.channels = [[this._postChannel]]),
                (t.extensionConfig = t.extensionConfig || []),
                (t.extensionConfig[this._postChannel.identifier] = (0, i.pi)(
                  (0, i.pi)({}, t.channelConfiguration),
                  t.extensionConfig[this._postChannel.identifier]
                ));
              try {
                e.prototype.initialize.call(this, t, r);
              } catch (e) {
                this.logger.warnToConsole("Failed to initialize SDK." + e);
              }
            }),
            (t.prototype.setUploadFrequency = function (e) {
              if (this._postChannel && e) {
                var t = e / 1e3,
                  n = t / 2,
                  i = {};
                (i.OTelCustomTransmissionProfile = [t, n]),
                  this._postChannel._loadTransmitProfiles(i),
                  this._postChannel._setTransmitProfile("OTelCustomTransmissionProfile");
              }
            }),
            (t.prototype.flush = function (e) {
              this._postChannel && this._postChannel.flush(e);
            }),
            (t.prototype.shutdown = function () {
              this._postChannel && this._postChannel.teardown();
            }),
            t
          );
        })(Ct),
        Dn = (function (e) {
          function t(t, n) {
            var o,
              a = e.call(this, t, n) || this;
            (a.sendTelemetryEvent = function (e) {
              return (function (e, t) {
                try {
                  return e();
                } catch (e) {
                  return (0, r.H)(1, "1DS Sink", e), t;
                }
              })(function () {
                var t = a.getOneDSTelemetryEvent(e);
                t && o && o.track(t);
              }, undefined);
            }),
              (a.sendCustomerContent = function (e) {}),
              (a.sendNonStandardEvent = function (e, t) {
                var n = !1;
                c.forEach(function (i) {
                  i.canHandle(t) && (i.processEvent(e), (n = !0));
                }),
                  n ||
                    (0, r.uf)(0, 1, function () {
                      return "Missing Handler for " + t + "to process" + e.eventName;
                    });
              }),
              (a.flush = function (e) {
                null == o || o.flush(e),
                  c.forEach(function (t) {
                    t.flush(e);
                  });
              }),
              (a.shutdown = function () {
                try {
                  null == o || o.shutdown(),
                    c.forEach(function (e) {
                      e.shutdown();
                    });
                } catch (e) {
                  (0, r.uf)(0, 2, function () {
                    return "An error occurred on shutdown";
                  });
                }
              });
            var s,
              u,
              c = n.nonStandardEventHandlers || [];
            if (
              ((o = (function (e, t) {
                var n = e.httpXHROverride,
                  r = {
                    instrumentationKey: t,
                    endpointUrl: e.endpointUrl,
                    channelConfiguration: {
                      eventsLimitInMem: e.eventsLimitInMem,
                      httpXHROverride: n,
                      setTimeoutOverride: e.setTimeoutOverride,
                      clearTimeoutOverride: e.clearTimeoutOverride,
                      ignoreMc1Ms0CookieProcessing: !0,
                      disableOptimizeObj: !0
                    },
                    enableWParam: !n,
                    disableCookiesUsage: !0,
                    extensionConfig: (0, i.pi)({}, e.extensionConfig)
                  };
                e.stats &&
                  e.stats.networkStats &&
                  r.channelConfiguration &&
                  (r.channelConfiguration.payloadListener = function (t, n) {
                    var i,
                      r = n || t;
                    r.data && (null === (i = e.stats) || void 0 === i || i.networkStats(r.data.length));
                  });
                var o = new In();
                return (
                  o.initialize(r, e.plugins),
                  o.setUploadFrequency(e.uploadFrequency),
                  e.notificationListener && o.addNotificationListener(e.notificationListener),
                  e.stats && o.setPerfMgr(new Ln(e.stats)),
                  o
                );
              })(n, "f998cc5ba4d448d6a1e8e913ff18be94-dd122e0a-fcf8-4dc5-9dbb-6afac5325183-7405")),
              c.forEach(function (e) {
                e.initialize(a, n);
              }),
              !n.endpointUrl)
            )
              throw new Error("Missing Endpoint Url");
            return (
              n.disableStatsTracking ||
                ((s = a),
                (u = o) &&
                  u.addNotificationListener({
                    eventsSent: function (e) {
                      (0, r.uf)(2, 2, function () {
                        return "Successfully sent ".concat(e.length, " event(s)");
                      }),
                        (0, r.uf)(3, 2, function () {
                          return "Sent event(s) details : ".concat(JSON.stringify(e, null, 2));
                        }),
                        (s.eventsSent += e.length);
                    },
                    eventsDiscarded: function (e, t) {
                      (0, r.uf)(0, 2, function () {
                        return "Discarded ".concat(e.length, " event(s) because ").concat(t);
                      }),
                        (0, r.uf)(3, 2, function () {
                          return "Discarded event(s) details : ".concat(JSON.stringify(e, null, 2));
                        }),
                        (s.eventsDiscarded += e.length);
                    }
                  })),
              a
            );
          }
          return (0, i.ZT)(t, e), t;
        })(Pe);
    },
    7929: (e, t, n) => {
      "use strict";
      n.d(t, { Y: () => o });
      var i = n(7582);
      function r() {
        var e;
        return (0, i.mG)(this, void 0, void 0, function () {
          return (0, i.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return navigator.userAgent &&
                  navigator.userAgent.indexOf("Windows") > 0 &&
                  (null === (e = navigator.userAgentData) || void 0 === e ? void 0 : e.getHighEntropyValues)
                  ? [
                      4,
                      navigator.userAgentData
                        .getHighEntropyValues(["platformVersion"])
                        .then(function (e) {
                          return parseInt(e.platformVersion.split(".")[0], 10) >= 13;
                        })
                        .catch(function (e) {
                          return !1;
                        })
                    ]
                  : [3, 2];
              case 1:
                return [2, t.sent()];
              case 2:
                return [2, !1];
            }
          });
        });
      }
      var o = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.identifier = "Windows11"), (t.priority = 449), (t._isWindows11 = !1), t;
        }
        return (
          (0, i.ZT)(t, e),
          (t.prototype.processTelemetry = function (e, t) {
            this._isWindows11 && ((e.ext = e.ext || {}), (e.ext.os = e.ext.os || {}), (e.ext.os.name = "Windows 11"));
            var n = this._getTelCtx(t);
            this.processNext(e, n);
          }),
          (t.prototype.detectOs = function () {
            return (0, i.mG)(this, void 0, void 0, function () {
              var e;
              return (0, i.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (e = this), [4, r()];
                  case 1:
                    return (e._isWindows11 = t.sent()), [2];
                }
              });
            });
          }),
          t
        );
      })(n(7951).i);
    },
    2530: (e, t, n) => {
      "use strict";
      n.d(t, {
        Vw: () => h,
        cS: () => l,
        cl: () => g,
        dy: () => u,
        gV: () => p,
        iH: () => m,
        n5: () => d,
        oe: () => f,
        x4: () => c,
        z_: () => v
      });
      var i = n(8668);
      function r(e, t) {
        return e ? e + "." + t : t;
      }
      function o(e, t, n, o, a) {
        void 0 === a && (a = 4), o && e.push((0, i.dt)("".concat(r(t, n)), o, a));
      }
      function a(e, t, n, o) {
        "boolean" == typeof o && e.push((0, i.UL)("".concat(r(t, n)), o));
      }
      function s(e, t, n, o) {
        "number" == typeof o && e.push((0, i.Kq)("".concat(r(t, n)), o));
      }
      var u,
        c = {
          getFields: function (e) {
            var t = "Activity.Result",
              n = [];
            return (
              s(n, t, "Code", e.code),
              o(n, t, "Type", e.type),
              s(n, t, "Tag", e.tag),
              a(n, t, "IsExpected", e.isExpected),
              n.push((0, i.dt)("zC.Activity.Result", "Office.System.Result")),
              n
            );
          }
        },
        l = {
          contractName: "Office.System.Activity",
          getFields: function (e) {
            var t = "Activity",
              n = [];
            return (
              o(n, t, "CV", e.cV),
              s(n, t, "Duration", e.duration),
              s(n, t, "Count", e.count),
              s(n, t, "AggMode", e.aggMode),
              a(n, t, "Success", e.success),
              e.result && n.push.apply(n, c.getFields(e.result)),
              n.push((0, i.dt)("zC.Activity", this.contractName)),
              n
            );
          }
        },
        d = {
          getFields: function (e) {
            var t = "User",
              n = [];
            return (
              o(n, t, "PrimaryIdentityHash", e.primaryIdentityHash),
              o(n, t, "PrimaryIdentitySpace", e.primaryIdentitySpace),
              o(n, t, "TenantId", e.tenantId, 1),
              o(n, t, "TenantGroup", e.tenantGroup, 1),
              a(n, t, "IsAnonymous", e.isAnonymous),
              n
            );
          }
        },
        f = {
          getFields: function (e, t) {
            var n = [];
            return o(n, e, "Name", t.name), o(n, e, "State", t.state), n;
          }
        },
        h = {
          getFields: function (e) {
            var t = "UserAction",
              n = [];
            return (
              s(n, t, "Id", e.id),
              o(n, t, "Name", e.name),
              o(n, t, "CommandSurface", e.commandSurface),
              o(n, t, "ParentName", e.parentName),
              o(n, t, "TriggerMethod", e.triggerMethod),
              s(n, t, "TimeOffsetMs", e.timeOffsetMs),
              n
            );
          }
        },
        p = {
          getFields: function (e) {
            var t = "App",
              n = [];
            return o(n, t, "Name", e.name, 1), o(n, t, "Platform", e.platform, 1), o(n, t, "Version", e.version, 1), n;
          }
        },
        v = {
          getFields: function (e) {
            var t = "Session",
              n = [];
            return o(n, t, "Id", e.id, 1), o(n, t, "EcsETag", e.ecsETag, 1), n;
          }
        },
        m = {
          getFields: function (e) {
            var t = [];
            return (
              t.push((0, i.dt)("Pillar", e.pillar)),
              t.push((0, i.dt)("Veto", e.veto)),
              t.push((0, i.UL)("IsIntentional", e.isIntentional)),
              t.push((0, i.UL)("IsInternal", e.isInternal)),
              t.push((0, i.UL)("AlertOnPillar", e.alertOnPillar)),
              t.push((0, i.UL)("IsSessionEndingError", e.isSessionEndingError)),
              a(t, void 0, "InStaging", e.inStaging),
              t
            );
          }
        },
        g = {
          getFields: function (e) {
            var t = [];
            return o(t, "Release", "AudienceGroup", e.audienceGroup, 1), t;
          }
        };
      !(function (e) {
        var t = "Copilot";
        !(function (e) {
          (e.IsEnabled = "IsEnabled"), (e.IsSeen = "IsSeen"), (e.IsTried = "IsTried"), (e.IsKept = "IsKept"), (e.IsRejected = "IsRejected");
        })(e.FeatureActionType || (e.FeatureActionType = {})),
          (function (e) {
            (e.ContentGeneration = "Content Generation"),
              (e.Commanding = "Commanding"),
              (e.QAandSummaries = "QA and Summaries"),
              (e.Collaboration = "Collaboration"),
              (e.Suggestions = "Suggestions");
          })(e.Capability || (e.Capability = {})),
          (e.getFields = function (e) {
            var n = [];
            return (
              void 0 !== e.featureActionType && n.push((0, i.dt)("".concat(t, ".FeatureActionType"), e.featureActionType)),
              void 0 !== e.isUserInitiated && n.push((0, i.UL)("".concat(t, ".IsUserInitiated"), e.isUserInitiated)),
              void 0 !== e.featureName && n.push((0, i.dt)("".concat(t, ".FeatureName"), e.featureName)),
              void 0 !== e.capability && n.push((0, i.dt)("".concat(t, ".Capability"), e.capability)),
              void 0 !== e.isThumbsUp && n.push((0, i.UL)("".concat(t, ".IsThumbsUp"), e.isThumbsUp)),
              n.push((0, i.dt)("zC.".concat(t), "Office.System.Copilot")),
              n
            );
          });
      })(u || (u = {}));
    },
    3238: (e, t, n) => {
      "use strict";
      var i;
      n.d(t, { CV: () => r, d: () => o });
      var r = (function () {
        function e(e) {
          (this.value = e), (this.nextChild = 0);
        }
        return (
          (e.prototype.getNext = function () {
            return new e("".concat(this.value, ".").concat(++this.nextChild));
          }),
          e
        );
      })();
      function o() {
        if (!i) {
          for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = [], n = 0; n < 22; n++)
            t.push(e.charAt(Math.floor(64 * Math.random())));
          i = new r(t.join(""));
        }
        return i;
      }
    },
    8668: (e, t, n) => {
      "use strict";
      function i(e, t, n) {
        return u(e, 1, t, n);
      }
      function r(e, t, n) {
        return u(e, 2, t, n);
      }
      function o(e, t, n) {
        return u(e, 3, t, n);
      }
      function a(e, t, n) {
        return u(e, 0, t, n);
      }
      function s(e, t, n) {
        return u(e, 4, t, n);
      }
      function u(e, t, n, i) {
        return { name: e, dataType: t, value: n, classification: i || 4 };
      }
      n.d(t, { Kq: () => r, UL: () => i, b_: () => o, dt: () => a, xq: () => s });
    },
    7217: (e, t, n) => {
      "use strict";
      if ((n.d(t, { S: () => r }), 965 == n.j)) var i = n(6748);
      function r(e) {
        var t = { costPriority: 1, samplingPolicy: 1, persistencePriority: 1, dataCategories: 0, diagnosticLevel: 100 };
        return (
          (e.eventFlags && e.eventFlags.dataCategories) ||
            (0, i.uf)(0, 0, function () {
              return "DataCategories";
            }),
          e.eventFlags
            ? (e.eventFlags.costPriority && (t.costPriority = e.eventFlags.costPriority),
              e.eventFlags.samplingPolicy && (t.samplingPolicy = e.eventFlags.samplingPolicy),
              e.eventFlags.persistencePriority && (t.persistencePriority = e.eventFlags.persistencePriority),
              e.eventFlags.dataCategories && (t.dataCategories = e.eventFlags.dataCategories),
              e.eventFlags.diagnosticLevel && (t.diagnosticLevel = e.eventFlags.diagnosticLevel),
              t)
            : t
        );
      }
    },
    6748: (e, t, n) => {
      "use strict";
      n.d(t, { H: () => s, kr: () => o, uf: () => a });
      var i,
        r =
          ((i = []),
          {
            fireEvent: function (e) {
              i.forEach(function (t) {
                return t(e);
              });
            },
            addListener: function (e) {
              e && i.push(e);
            }
          });
      function o() {
        return r;
      }
      function a(e, t, n) {
        r.fireEvent({ level: e, category: t, message: n });
      }
      function s(e, t, n) {
        a(0, e, function () {
          var e = n instanceof Error ? n.message : "";
          return "".concat(t, ": ").concat(e);
        });
      }
    },
    6184: (e, t, n) => {
      "use strict";
      n.d(t, { Dw: () => _, Vp: () => g, vE: () => y });
      var i = n(7582),
        r = n(6748),
        o = {};
      function a(e, t) {
        "Office." === e.substring(0, 7) && "." !== e[e.length - 1]
          ? o[e]
            ? (t.ariaTenantToken && (o[e].ariaTenantToken = t.ariaTenantToken), t.dnmToken && (o[e].dnmToken = t.dnmToken))
            : (o[e] = t)
          : (0, r.uf)(0, 0, function () {
              return "Namespace: ".concat(e);
            });
      }
      function s(e, t) {
        for (var n = e.length; n > 0; ) {
          var i = e.substr(0, n);
          if (o[i]) {
            var r = o[i];
            return (t.ariaTenantToken = r.ariaTenantToken), (t.dnmToken = r.dnmToken), !0;
          }
          n = e.lastIndexOf(".", n - 1);
        }
        return !1;
      }
      var u = 9007199254740991,
        c = -u,
        l = 98,
        d = /^Office(\.[A-Z][a-zA-Z0-9]*){2,}$/,
        f = /^[a-zA-Z0-9_\.]{1,95}$/;
      function h(e) {
        if (
          !(function (e) {
            if (!e || e.length > l) return !1;
            return d.test(e);
          })(e.eventName)
        )
          throw new Error("Invalid eventName");
        var t = e.eventContract;
        if (t) {
          if (t.name && !p(t.name)) throw new Error("Invalid eventContract");
          v(t.dataFields);
        }
        v(e.dataFields);
      }
      function p(e) {
        return f.test(e);
      }
      function v(e) {
        e &&
          e.forEach(function (e) {
            if ("string" != typeof e.name || !p(e.name)) throw new Error("Invalid dataField name");
            2 === e.dataType &&
              (function (e) {
                if ("number" != typeof e || !isFinite(e) || Math.floor(e) !== e || e < c || e > u)
                  throw new Error("Invalid integer ".concat(JSON.stringify(e)));
              })(e.value);
          });
      }
      var m = n(8668),
        g = -1;
      function y(e) {
        var t = {
          eventName: e.eventName,
          eventFlags: e.eventFlags || {},
          telemetryProperties: e.telemetryProperties ? (0, i.pi)({}, e.telemetryProperties) : {},
          dataFields: e.dataFields ? e.dataFields.slice() : [],
          timestamp: e.timestamp || new Date().getTime()
        };
        return e.eventContract && (t.eventContract = { name: e.eventContract.name, dataFields: e.eventContract.dataFields.slice() }), t;
      }
      var _ = (function () {
        function e(e, t, n) {
          var r, o, a;
          (this.telemetrySinks = []),
            (this.persistentDataFields = []),
            (this.partAFields = []),
            (this.eventQueue = []),
            (this.config = n || {}),
            e &&
              ((this.telemetrySinks = e.telemetrySinks),
              (r = this.persistentDataFields).push.apply(r, e.persistentDataFields),
              (this.config = (0, i.pi)((0, i.pi)({}, e.getConfig()), this.config)),
              (o = this.partAFields).push.apply(o, e.partAFields)),
            t && (a = this.persistentDataFields).push.apply(a, t);
        }
        return (
          (e.prototype.addEventContentType = function (e, t) {
            e.push((0, m.Kq)("EventContent.Type", t));
          }),
          (e.prototype.sendTelemetryEvent = function (e) {
            var t = y(e),
              n = t.telemetryProperties;
            n.nexusTenantToken = g;
            var i = n.ariaTenantToken;
            if (!i && !s(t.eventName, n) && !i)
              return void (0, r.uf)(0, 0, function () {
                return "No tenant token: " + e.eventName;
              });
            this.sendTelemetryEventInternal(t, 1);
          }),
          (e.prototype.sendCustomerContent = function (e) {
            var t = y(e),
              n = t.telemetryProperties,
              i = n.customerContentVersion;
            return (
              (!i || i > 2) && (n.customerContentVersion = 2),
              (n.ariaTenantToken = void 0),
              (n.nexusTenantToken = void 0),
              (n.dnmToken = void 0),
              this.addEventContentType(t.dataFields, 2),
              this.sendTelemetryEventInternal(t, 2)
            );
          }),
          (e.prototype.sendDirectNumericEvent = function (e) {
            var t = y(e),
              n = t.telemetryProperties;
            if (!n.dnmToken && !s(t.eventName, n) && !n.dnmToken)
              return void (0, r.uf)(0, 0, function () {
                return "No dnm token: " + t.eventName;
              });
            this.addEventContentType(t.dataFields, 1), this.sendTelemetryEventInternal(t, 3);
          }),
          (e.prototype.sendTelemetryEventInternal = function (e, t) {
            if (2 === t || (!e.telemetryProperties.customerContentVersion && !e.telemetryProperties.customerContentType)) {
              try {
                if (0 === this.telemetrySinks.length)
                  return void (this.config.enableQueue && this.eventQueue.length < 1e3
                    ? this.eventQueue.push([e, t])
                    : (0, r.uf)(1, 0, function () {
                        return "No telemetry sinks are attached.";
                      }));
                this.processTelemetryEvent(e, t);
              } catch (e) {
                return void (0, r.H)(0, "SendTelemetryEvent", e);
              }
              this.telemetrySinks.forEach(function (n) {
                try {
                  3 === t || 2 === t ? n.sendNonStandardEvent && n.sendNonStandardEvent(e, t) : n.sendTelemetryEvent(e);
                } catch (e) {}
              });
            } else
              (0, r.uf)(0, 0, function () {
                return "Customer content";
              });
          }),
          (e.prototype.processTelemetryEvent = function (e, t) {
            var n, i, r;
            if (
              (e.dataFields &&
                (null === (r = e.dataFields) || void 0 === r || r.unshift((0, m.dt)("OTelJS.Version", "4.13.18")),
                3 !== t && this.persistentDataFields && (n = e.dataFields).unshift.apply(n, this.persistentDataFields)),
              this.partAFields.length > 0)
            ) {
              var o = e.eventContract || { name: "", dataFields: [] };
              (i = o.dataFields).push.apply(i, this.partAFields), (e.eventContract = o);
            }
            this.config.disableValidation || h(e);
          }),
          (e.prototype.addSink = function (e) {
            this.telemetrySinks.push(e), this.flushQueue();
          }),
          (e.prototype.flushQueue = function () {
            var e = this.eventQueue;
            if (((this.eventQueue = []), this.telemetrySinks.length > 0))
              for (var t = 0, n = e; t < n.length; t++) {
                var i = n[t],
                  r = i[0],
                  o = i[1];
                this.sendTelemetryEventInternal(r, o);
              }
          }),
          (e.prototype.setTenantToken = function (e, t, n) {
            a(e, { ariaTenantToken: t, nexusTenantToken: n });
          }),
          (e.prototype.setDNMToken = function (e, t) {
            a(e, { dnmToken: t });
          }),
          (e.prototype.cloneEvent = function (e) {
            return y(e);
          }),
          (e.prototype.getConfig = function () {
            return this.config;
          }),
          e
        );
      })();
    },
    9195: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => f });
      var i = n(7582),
        r = n(6184),
        o = n(2530),
        a = n(6748),
        s = function () {
          return 1e3 * Date.now();
        };
      "object" == typeof window &&
        "object" == typeof window.performance &&
        "now" in window.performance &&
        (s = function () {
          return 1e3 * Math.floor(window.performance.now());
        });
      var u = function (e) {
          var t,
            n = s(),
            i = (0, r.vE)(e.telemetryEvent);
          return {
            cv: e.parentCv.getNext(),
            eventName: e.telemetryEvent.eventName,
            dataFields: i.dataFields,
            eventFlags: i.eventFlags,
            telemetryProperties: i.telemetryProperties,
            createChildActivity: function (t) {
              return u({ telemetryEvent: t, sendTelemetryEvent: e.sendTelemetryEvent, parentCv: this.cv });
            },
            setResult: function (e, t, n) {
              this.result = { code: e, type: t, tag: n };
            },
            endNow: function () {
              if (!t) {
                void 0 === this.success &&
                  void 0 === this.result &&
                  (0, a.uf)(1, 0, function () {
                    return "Activity does not have success or result set";
                  });
                var i = s();
                t = !0;
                var r = { duration: i - n, count: 1, aggMode: 0, cV: this.cv.value, success: this.success, result: this.result },
                  u = this.eventContract && this.eventContract.dataFields ? this.eventContract.dataFields : [];
                return (
                  u.push.apply(u, o.cS.getFields(r)),
                  (this.eventContract = { name: o.cS.contractName, dataFields: u }),
                  e.sendTelemetryEvent(this)
                );
              }
              (0, a.uf)(0, 0, function () {
                return "Already ended";
              });
            }
          };
        },
        c = n(8668),
        l = function (e) {
          var t = "Error",
            n = [];
          return (
            n.push((0, c.dt)("".concat(t, ".ErrorGroup"), e.errorGroup)),
            n.push((0, c.Kq)("".concat(t, ".Tag"), e.tag)),
            void 0 !== e.code && n.push((0, c.Kq)("".concat(t, ".Code"), e.code)),
            void 0 !== e.id && n.push((0, c.Kq)("".concat(t, ".Id"), e.id)),
            void 0 !== e.count && n.push((0, c.Kq)("".concat(t, ".Count"), e.count)),
            n
          );
        },
        d = n(3238),
        f = (function (e) {
          function t(t, n, i) {
            var r = e.call(this, t, n, i) || this;
            return (r.baseCv = (0, d.d)()), r;
          }
          return (
            (0, i.ZT)(t, e),
            (t.prototype.createActivity = function (e) {
              return u({ sendTelemetryEvent: this.sendTelemetryEvent.bind(this), telemetryEvent: e, parentCv: this.baseCv });
            }),
            (t.prototype.sendActivity = function (e, t, n, i) {
              return this.sendTelemetryEvent({
                eventName: e,
                eventContract: { name: o.cS.contractName, dataFields: o.cS.getFields(t) },
                dataFields: n,
                eventFlags: i
              });
            }),
            (t.prototype.sendError = function (e) {
              var t = l(e.error);
              return (
                null != e.dataFields && t.push.apply(t, e.dataFields),
                this.sendTelemetryEvent({ eventName: e.eventName, dataFields: t, eventFlags: e.eventFlags })
              );
            }),
            (t.prototype.createCustomerContentActivity = function (e) {
              return u({ sendTelemetryEvent: this.sendCustomerContent.bind(this), telemetryEvent: e, parentCv: this.baseCv });
            }),
            t
          );
        })(r.Dw);
    },
    3881: (e, t, n) => {
      "use strict";
      if ((n.d(t, { F: () => a }), 965 == n.j)) var i = n(7582);
      if (965 == n.j) var r = n(2530);
      if (965 == n.j) var o = n(6184);
      function a(e, t, n, a, s, u, c, l, d, f, h) {
        a.forEach(function (a) {
          e.sendTelemetryEvent({
            eventName: t.name + ".Qos.Error." + n,
            eventFlags: { diagnosticLevel: 110 },
            dataFields: (0, i.ev)(
              (0, i.ev)(
                [],
                r.iH.getFields({
                  veto: a,
                  pillar: s,
                  isIntentional: u,
                  isInternal: c,
                  alertOnPillar: l,
                  isSessionEndingError: d,
                  inStaging: f
                }),
                !0
              ),
              h || [],
              !0
            ),
            telemetryProperties: { ariaTenantToken: t.token, nexusTenantToken: o.Vp }
          });
        });
      }
    },
    5508: (e, t, n) => {
      "use strict";
      n.d(t, { a: () => d });
      var i,
        r,
        o,
        a,
        s,
        u,
        c,
        l = n(8668);
      !(function (e) {
        e.getFields = function (e, t) {
          var n = [];
          return (
            n.push((0, l.Kq)("".concat(e, ".Code"), t.code)),
            void 0 !== t.type && n.push((0, l.dt)("".concat(e, ".Type"), t.type)),
            void 0 !== t.tag && n.push((0, l.Kq)("".concat(e, ".Tag"), t.tag)),
            void 0 !== t.isExpected && n.push((0, l.UL)("".concat(e, ".IsExpected"), t.isExpected)),
            n.push((0, l.dt)("zC.Activity.Result", "Office.System.Result")),
            n
          );
        };
      })(i || (i = {})),
        (function (e) {
          (e.contractName = "Office.System.Activity"),
            (e.getFields = function (t) {
              var n = "Activity",
                r = [];
              return (
                void 0 !== t.cV && r.push((0, l.dt)("".concat(n, ".CV"), t.cV)),
                r.push((0, l.Kq)("".concat(n, ".Duration"), t.duration)),
                r.push((0, l.Kq)("".concat(n, ".Count"), t.count)),
                r.push((0, l.Kq)("".concat(n, ".AggMode"), t.aggMode)),
                void 0 !== t.success && r.push((0, l.UL)("".concat(n, ".Success"), t.success)),
                void 0 !== t.result && r.push.apply(r, i.getFields("".concat(n, ".Result"), t.result)),
                r.push((0, l.dt)("zC.Activity", e.contractName)),
                r
              );
            });
        })(r || (r = {})),
        (function (e) {
          e.getFields = function (e, t) {
            var n = [];
            return (
              void 0 !== t.id && n.push((0, l.dt)("".concat(e, ".Id"), t.id)),
              void 0 !== t.version && n.push((0, l.dt)("".concat(e, ".Version"), t.version)),
              void 0 !== t.sessionId && n.push((0, l.dt)("".concat(e, ".SessionId"), t.sessionId)),
              n
            );
          };
        })(o || (o = {})),
        (function (e) {
          e.getFields = function (e, t) {
            var n = [];
            return (
              void 0 !== t.alias && n.push((0, l.dt)("".concat(e, ".Alias"), t.alias)),
              void 0 !== t.primaryIdentityHash && n.push((0, l.dt)("".concat(e, ".PrimaryIdentityHash"), t.primaryIdentityHash)),
              void 0 !== t.primaryIdentitySpace && n.push((0, l.dt)("".concat(e, ".PrimaryIdentitySpace"), t.primaryIdentitySpace)),
              void 0 !== t.tenantId && n.push((0, l.dt)("".concat(e, ".TenantId"), t.tenantId)),
              void 0 !== t.tenantGroup && n.push((0, l.dt)("".concat(e, ".TenantGroup"), t.tenantGroup)),
              void 0 !== t.isAnonymous && n.push((0, l.UL)("".concat(e, ".IsAnonymous"), t.isAnonymous)),
              n
            );
          };
        })(a || (a = {})),
        (function (e) {
          e.getFields = function (e, t) {
            var n = [];
            return (
              void 0 !== t.name && n.push((0, l.dt)("".concat(e, ".Name"), t.name)),
              void 0 !== t.state && n.push((0, l.dt)("".concat(e, ".State"), t.state)),
              n
            );
          };
        })(s || (s = {})),
        (function (e) {
          e.getFields = function (e, t) {
            var n = [];
            return (
              void 0 !== t.id && n.push((0, l.Kq)("".concat(e, ".Id"), t.id)),
              void 0 !== t.name && n.push((0, l.dt)("".concat(e, ".Name"), t.name)),
              void 0 !== t.commandSurface && n.push((0, l.dt)("".concat(e, ".CommandSurface"), t.commandSurface)),
              void 0 !== t.parentName && n.push((0, l.dt)("".concat(e, ".ParentName"), t.parentName)),
              void 0 !== t.triggerMethod && n.push((0, l.dt)("".concat(e, ".TriggerMethod"), t.triggerMethod)),
              void 0 !== t.timeOffsetMs && n.push((0, l.Kq)("".concat(e, ".TimeOffsetMs"), t.timeOffsetMs)),
              n
            );
          };
        })(u || (u = {})),
        (function (e) {
          e.getFields = function (e, t) {
            var n = [];
            return (
              n.push((0, l.dt)("".concat(e, ".ErrorGroup"), t.errorGroup)),
              n.push((0, l.Kq)("".concat(e, ".Tag"), t.tag)),
              void 0 !== t.code && n.push((0, l.Kq)("".concat(e, ".Code"), t.code)),
              void 0 !== t.id && n.push((0, l.Kq)("".concat(e, ".Id"), t.id)),
              void 0 !== t.count && n.push((0, l.Kq)("".concat(e, ".Count"), t.count)),
              n
            );
          };
        })(c || (c = {}));
      var d,
        f = r,
        h = i,
        p = c,
        v = s,
        m = o,
        g = u,
        y = a;
      !(function (e) {
        !(function (e) {
          !(function (e) {
            (e.Activity = f), (e.Result = h), (e.Error = p), (e.Funnel = v), (e.Host = m), (e.User = y), (e.UserAction = g);
          })(e.System || (e.System = {}));
        })(e.Office || (e.Office = {}));
      })(d || (d = {}));
    },
    8189: (e, t, n) => {
      "use strict";
      var i;
      n.d(t, { K: () => i }),
        (function (e) {
          (e.DataClassification = {
            EssentialServiceMetadata: 1,
            AccountData: 2,
            SystemMetadata: 4,
            OrganizationIdentifiableInformation: 8,
            EndUserIdentifiableInformation: 16,
            CustomerContent: 32,
            AccessControl: 64,
            PublicNonPersonalData: 128,
            EndUserPseudonymousInformation: 256,
            PublicPersonalData: 512,
            SupportData: 1024,
            DirectMeasurementData: 2048,
            Everything: 65535
          }),
            (e.DataFieldType = { String: 0, Boolean: 1, Int64: 2, Double: 3, Guid: 4 }),
            (e.SamplingPolicy = {
              NotSet: 0,
              Measure: 1,
              Diagnostics: 2,
              CriticalBusinessImpact: 191,
              CriticalCensus: 192,
              CriticalExperimentation: 193,
              CriticalUsage: 194
            }),
            (e.PersistencePriority = { NotSet: 0, Normal: 1, High: 2 }),
            (e.CostPriority = { NotSet: 0, Normal: 1, High: 2 }),
            (e.DataCategories = {
              NotSet: 0,
              SoftwareSetup: 1,
              ProductServiceUsage: 2,
              ProductServicePerformance: 4,
              DeviceConfiguration: 8,
              InkingTypingSpeech: 16
            }),
            (e.DiagnosticLevel = {
              ReservedDoNotUse: 0,
              Required: 10,
              BasicEvent: 10,
              Optional: 100,
              FullEvent: 100,
              RequiredServiceData: 110,
              NecessaryServiceDataEvent: 110,
              RequiredServiceDataForEssentialServices: 120,
              AlwaysOnNecessaryServiceDataEvent: 120
            }),
            (e.DnmInterval = { Hourly: 1, Daily: 2 }),
            (e.AllowedPartA = { ReleaseAudienceGroup: 1, WacRing: 2, AppName: 3, AppPlatform: 4, AppVersion: 5 }),
            (e.CustomerContentType = { None: 0, MocaAddIn: 1 }),
            (e.LogLevel = { Error: 0, Warning: 1, Info: 2, Verbose: 3 }),
            (e.Category = { Core: 0, Sink: 1, Transport: 2 }),
            (e.PrimaryIdentitySpace = {
              UserObjectId: "UserObjectId",
              MSACID: "MSACID",
              OrgIdPuid: "OrgIdPuid",
              OrgIdPUID: "OrgIdPUID",
              OrgIdCID: "OrgIdCID",
              MsaPuid: "MsaPuid",
              MSAPUID: "MSAPUID",
              WopiAuth: "WopiAuth",
              ThirdParty: "ThirdParty"
            }),
            (e.AudienceGroup = {
              Automation: "Automation",
              Dogfood: "Dogfood",
              Microsoft: "Microsoft",
              Insiders: "Insiders",
              Production: "Production"
            });
        })(i || (i = {}));
    },
    3517: (e, t, n) => {
      "use strict";
      if (
        (n.r(t),
        n.d(t, {
          Activity: () => r.cS,
          App: () => r.gV,
          CV: () => o.CV,
          Contracts: () => i.a,
          Copilot: () => r.dy,
          EnumObjects: () => d.K,
          Funnel: () => r.oe,
          HealthQosError: () => r.iH,
          Release: () => r.cl,
          Result: () => r.x4,
          Session: () => r.z_,
          SimpleTelemetryLogger: () => c.Dw,
          SuppressNexus: () => c.Vp,
          TelemetryLogger: () => l.h,
          User: () => r.n5,
          UserAction: () => r.Vw,
          cloneEvent: () => c.vE,
          getEffectiveEventFlags: () => s.S,
          logError: () => u.H,
          logNotification: () => u.uf,
          makeBooleanDataField: () => a.UL,
          makeDoubleDataField: () => a.b_,
          makeGuidDataField: () => a.xq,
          makeInt64DataField: () => a.Kq,
          makeStringDataField: () => a.dt,
          onNotification: () => u.kr,
          sendHealthQosError: () => f.F
        }),
        965 == n.j)
      )
        var i = n(5508);
      if (965 == n.j) var r = n(2530);
      if (965 == n.j) var o = n(3238);
      if (965 == n.j) var a = n(8668);
      if (965 == n.j) var s = n(7217);
      if (965 == n.j) var u = n(6748);
      if (965 == n.j) var c = n(6184);
      if (965 == n.j) var l = n(9195);
      if (965 == n.j) var d = n(8189);
      if (965 == n.j) var f = n(3881);
    },
    8055: (e, t, n) => {
      "use strict";
      function i(e, t) {
        return e.major === t.major && e.minor === t.minor && e.build === t.build
          ? 0
          : e.major > t.major ||
            (e.major === t.major && e.minor > t.minor) ||
            (e.major === t.major && e.minor === t.minor && e.build > t.build)
          ? 1
          : -1;
      }
      n.d(t, { c: () => i });
    },
    7362: (e, t, n) => {
      "use strict";
      var i;
      function r(e) {
        var t = parseInt(e);
        return isNaN(t) ? 0 : t;
      }
      function o() {
        if (i) return i;
        var e = window.navigator.userAgent.toLowerCase(),
          t = { keyword: "Other", platformType: "Other" };
        [
          { keyword: "Windows NT", platformType: "PC" },
          { keyword: "Windows XP", platformType: "PC" },
          { keyword: "Macintosh", platformType: "Mac" },
          { keyword: "Windows Phone", platformType: "WindowsPhone", pageName: "windows-phone" },
          { keyword: "iPad", platformType: "iPad", pageName: "ipad" },
          { keyword: "iPhone", platformType: "iPhone", pageName: "iphone" },
          { keyword: "Android", platformType: "AndroidPhone", pageName: "android-phone" },
          { keyword: "Linux", platformType: "Linux" },
          { keyword: "CrOS", platformType: "Chromebook" }
        ].some(function (n) {
          return -1 !== e.indexOf(n.keyword.toLowerCase()) && ((t = n), !0);
        }),
          "AndroidPhone" === t.platformType &&
            -1 === e.indexOf("mobile") &&
            (t = { keyword: "Android", platformType: "AndroidTablet", pageName: "android-tablet" });
        var n = { major: 0, minor: 0, build: 0 };
        if ("Mac" === t.platformType)
          (o = /Mac OS X (\d+)(_|\.)(\d+)([_\.]?)(\d*)/i.exec(window.navigator.userAgent)) &&
            o.length >= 6 &&
            (n = { major: r(o[1]), minor: r(o[3]), build: r(o[5]) });
        else if ("PC" === t.platformType || "WindowsPhone" === t.platformType) {
          if (-1 !== e.indexOf("windows xp")) n = { major: 5, minor: 1, build: 0 };
          else
            (o = /Windows (NT|Phone) (OS )?(\d+)\.(\d+)/i.exec(window.navigator.userAgent)) &&
              o.length >= 5 &&
              (n = { major: r(o[3]), minor: r(o[4]), build: 0 });
        } else if ("iPad" === t.platformType || "iPhone" === t.platformType) {
          var o;
          n = { major: r((o = e.match(/os (\d+)_(\d+)(_(\d+))?/)) && o[1]), minor: r(o && o[2]), build: r(o && o[4]) };
        }
        var a = { keyword: "Other", browserType: "Other" };
        return (
          [
            { keyword: "PhantomJS", browserType: "Headless" },
            { keyword: "Edge", browserType: "EdgeLegacy" },
            { keyword: "MSIE", browserType: "IE" },
            { keyword: "Edg", browserType: "Edge" },
            { keyword: "Chrome", browserType: "Chrome" },
            { keyword: "CriOS", browserType: "Chrome" },
            { keyword: "Firefox", browserType: "Firefox" },
            { keyword: "Safari", browserType: "Safari" }
          ].some(function (t) {
            return -1 !== e.indexOf(t.keyword.toLowerCase()) && ((a = t), !0);
          }),
          (i = { platform: t, platformVersion: n, browser: a })
        );
      }
      n.d(t, { d: () => o });
    },
    2693: (e, t, n) => {
      "use strict";
      if ((n.d(t, { w: () => r }), 965 == n.j)) var i = n(7362);
      function r() {
        var e = (0, i.d)().platform.platformType;
        return "PC" === e || "Mac" === e || "Linux" === e || "Chromebook" === e;
      }
    },
    6214: (e, t, n) => {
      "use strict";
      if ((n.d(t, { W: () => o }), 965 == n.j)) var i = n(7362);
      var r = new Set(["AndroidPhone", "iPhone", "WindowsPhone"]);
      function o() {
        var e = (0, i.d)();
        return r.has(e.platform.platformType);
      }
    },
    5132: (e, t, n) => {
      "use strict";
      if ((n.d(t, { $: () => o }), 965 == n.j)) var i = n(7362);
      var r = new Set(["iPad", "AndroidPhone", "AndroidTablet", "iPhone", "WindowsPhone"]);
      function o() {
        var e = (0, i.d)();
        return r.has(e.platform.platformType);
      }
    },
    3634: (e, t, n) => {
      "use strict";
      if ((n.d(t, { c: () => r }), 965 == n.j)) var i = n(7362);
      function r() {
        var e = (0, i.d)().platform.platformType;
        return "iPad" === e || "AndroidTablet" === e;
      }
    },
    1854: (e, t, n) => {
      "use strict";
      function i(e) {
        var t = e.major,
          n = e.minor,
          i = e.build;
        return "".concat(t, "_").concat(n, "_").concat(i);
      }
      n.d(t, { j: () => i });
    },
    7014: (e, t, n) => {
      "use strict";
      if (
        (n.r(t),
        n.d(t, {
          comparePlatformVersions: () => i.c,
          getDeviceInfo: () => r.d,
          getIsDesktop: () => o.w,
          getIsMobile: () => a.W,
          getIsMobileOrTablet: () => s.$,
          getIsTablet: () => u.c,
          getPlatformVersionString: () => c.j,
          isPcPlatform: () => l.f,
          isUwp: () => d.C,
          isWebView2: () => f.p
        }),
        965 == n.j)
      )
        var i = n(8055);
      if (965 == n.j) var r = n(7362);
      if (965 == n.j) var o = n(2693);
      if (965 == n.j) var a = n(6214);
      if (965 == n.j) var s = n(5132);
      if (965 == n.j) var u = n(3634);
      if (965 == n.j) var c = n(1854);
      if (965 == n.j) var l = n(6793);
      if (965 == n.j) var d = n(8747);
      if (965 == n.j) var f = n(7142);
    },
    6793: (e, t, n) => {
      "use strict";
      if ((n.d(t, { f: () => o }), 965 == n.j)) var i = n(7362);
      var r;
      function o() {
        return void 0 === r && (r = "PC" === (0, i.d)().platform.platformType), r;
      }
    },
    8747: (e, t, n) => {
      "use strict";
      function i() {
        return window.navigator.userAgent.toLowerCase().indexOf("msapphost/") > -1 && !!window.Windows;
      }
      n.d(t, { C: () => i });
    },
    7142: (e, t, n) => {
      "use strict";
      if ((n.d(t, { p: () => r }), 965 == n.j)) var i = n(8747);
      function r() {
        var e = window.chrome;
        return e && e.webview && (0, i.C)();
      }
    },
    1705: () => {
      !(function (e, t) {
        "use strict";
        var n,
          i,
          r,
          o,
          a = 1,
          s = "-add",
          u = "-remove",
          c = "ng-animate",
          l = "$$ngAnimateChildren";
        void 0 === e.ontransitionend && void 0 !== e.onwebkittransitionend
          ? ("-webkit-", (n = "WebkitTransition"), (i = "webkitTransitionEnd transitionend"))
          : ((n = "transition"), (i = "transitionend")),
          void 0 === e.onanimationend && void 0 !== e.onwebkitanimationend
            ? ("-webkit-", (r = "WebkitAnimation"), (o = "webkitAnimationEnd animationend"))
            : ((r = "animation"), (o = "animationend"));
        var d = "Duration",
          f = "Property",
          h = "Delay",
          p = "TimingFunction",
          v = r + h,
          m = r + d,
          g = n + h,
          y = n + d,
          _ = t.$$minErr("ng");
        function $(e, t, n) {
          if (!e) throw _("areq", "Argument '{0}' is {1}", t || "?", n || "required");
          return e;
        }
        function b(e, t) {
          return e || t ? (e ? (t ? (Z(e) && (e = e.join(" ")), Z(t) && (t = t.join(" ")), e + " " + t) : e) : t) : "";
        }
        function C(e, t, n) {
          var i = "";
          return (
            (e = Z(e) ? e : e && ee(e) && e.length ? e.split(/\s+/) : []),
            G(e, function (e, r) {
              e && e.length > 0 && ((i += r > 0 ? " " : ""), (i += n ? t + e : e + t));
            }),
            i
          );
        }
        function w(e) {
          if (e instanceof ne)
            switch (e.length) {
              case 0:
                return e;
              case 1:
                if (e[0].nodeType === a) return e;
                break;
              default:
                return ne(S(e));
            }
          if (e.nodeType === a) return ne(e);
        }
        function S(e) {
          if (!e[0]) return e;
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            if (n.nodeType === a) return n;
          }
        }
        function x(e) {
          return function (t, n) {
            n.addClass &&
              (!(function (e, t, n) {
                G(t, function (t) {
                  e.addClass(t, n);
                });
              })(e, t, n.addClass),
              (n.addClass = null)),
              n.removeClass &&
                (!(function (e, t, n) {
                  G(t, function (t) {
                    e.removeClass(t, n);
                  });
                })(e, t, n.removeClass),
                (n.removeClass = null));
          };
        }
        function T(e) {
          if (!(e = e || {}).$$prepared) {
            var t = e.domOperation || ie;
            (e.domOperation = function () {
              (e.$$domOperationFired = !0), t(), (t = ie);
            }),
              (e.$$prepared = !0);
          }
          return e;
        }
        function E(e, t) {
          k(e, t), A(e, t);
        }
        function k(e, t) {
          t.from && (e.css(t.from), (t.from = null));
        }
        function A(e, t) {
          t.to && (e.css(t.to), (t.to = null));
        }
        function P(e, t, n) {
          var i = t.options || {},
            r = n.options || {},
            o = (i.addClass || "") + " " + (r.addClass || ""),
            a = (i.removeClass || "") + " " + (r.removeClass || ""),
            c = (function (e, t, n) {
              var i = 1,
                r = -1,
                o = {};
              (e = c(e)),
                (t = c(t)),
                G(t, function (e, t) {
                  o[t] = i;
                }),
                (n = c(n)),
                G(n, function (e, t) {
                  o[t] = o[t] === i ? null : r;
                });
              var a = { addClass: "", removeClass: "" };
              function c(e) {
                ee(e) && (e = e.split(" "));
                var t = {};
                return (
                  G(e, function (e) {
                    e.length && (t[e] = !0);
                  }),
                  t
                );
              }
              return (
                G(o, function (t, n) {
                  var o, c;
                  t === i ? ((o = "addClass"), (c = !e[n] || e[n + u])) : t === r && ((o = "removeClass"), (c = e[n] || e[n + s])),
                    c && (a[o].length && (a[o] += " "), (a[o] += n));
                }),
                a
              );
            })(e.attr("class"), o, a);
          r.preparationClasses && ((i.preparationClasses = I(r.preparationClasses, i.preparationClasses)), delete r.preparationClasses);
          var l = i.domOperation !== ie ? i.domOperation : null;
          return (
            K(i, r),
            l && (i.domOperation = l),
            c.addClass ? (i.addClass = c.addClass) : (i.addClass = null),
            c.removeClass ? (i.removeClass = c.removeClass) : (i.removeClass = null),
            (t.addClass = i.addClass),
            (t.removeClass = i.removeClass),
            i
          );
        }
        function O(e) {
          return e instanceof ne ? e[0] : e;
        }
        function M(e, t) {
          var n = t ? "paused" : "",
            i = r + "PlayState";
          return L(e, [i, n]), [i, n];
        }
        function L(e, t) {
          var n = t[0],
            i = t[1];
          e.style[n] = i;
        }
        function I(e, t) {
          return e ? (t ? e + " " + t : e) : t;
        }
        var D = function (e, t) {
            var n = t ? "-" + t + "s" : "";
            return L(e, [g, n]), [g, n];
          },
          B = [
            "$interpolate",
            function (e) {
              return {
                link: function (t, n, i) {
                  var r = i.ngAnimateChildren;
                  function o(e) {
                    (e = "on" === e || "true" === e), n.data(l, e);
                  }
                  ee(r) && 0 === r.length ? n.data(l, !0) : (o(e(r)(t)), i.$observe("ngAnimateChildren", o));
                }
              };
            }
          ],
          R = "$$animateCss",
          N = 1e3,
          F = {
            transitionDuration: y,
            transitionDelay: g,
            transitionProperty: n + f,
            animationDuration: m,
            animationDelay: v,
            animationIterationCount: r + "IterationCount"
          },
          U = { transitionDuration: y, transitionDelay: g, animationDuration: m, animationDelay: v };
        function j(e, t) {
          return [t ? v : g, e + "s"];
        }
        function W(e, t, n) {
          var i = Object.create(null),
            r = e.getComputedStyle(t) || {};
          return (
            G(n, function (e, t) {
              var n,
                o,
                a = r[e];
              if (a) {
                var s = a.charAt(0);
                ("-" === s || "+" === s || s >= 0) &&
                  ((n = 0),
                  (o = a.split(/\s*,\s*/)),
                  G(o, function (e) {
                    "s" === e.charAt(e.length - 1) && (e = e.substring(0, e.length - 1)),
                      (e = parseFloat(e) || 0),
                      (n = n ? Math.max(e, n) : e);
                  }),
                  (a = n)),
                  0 === a && (a = null),
                  (i[t] = a);
              }
            }),
            i
          );
        }
        function V(e) {
          return 0 === e || null != e;
        }
        function H(e, t) {
          var i = n,
            r = e + "s";
          return t ? (i += d) : (r += " linear all"), [i, r];
        }
        function q(e, t, n) {
          G(n, function (n) {
            e[n] = Q(e[n]) ? e[n] : t.style.getPropertyValue(n);
          });
        }
        var z,
          K,
          G,
          Z,
          Q,
          J,
          Y,
          X,
          ee,
          te,
          ne,
          ie,
          re = [
            "$animateProvider",
            function (e) {
              this.$get = [
                "$window",
                "$$jqLite",
                "$$AnimateRunner",
                "$timeout",
                "$$animateCache",
                "$$forceReflow",
                "$sniffer",
                "$$rAFScheduler",
                "$$animateQueue",
                function (e, t, a, c, l, d, h, v, g) {
                  var y = x(t);
                  var _ = [];
                  function $(e) {
                    _.push(e),
                      v.waitUntilQuiet(function () {
                        l.flush();
                        for (var e = d(), t = 0; t < _.length; t++) _[t](e);
                        _.length = 0;
                      });
                  }
                  function b(t, n, i, r) {
                    var o = (function (t, n, i, r, o) {
                        var a = l.get(i);
                        a || ("infinite" === (a = W(e, t, o)).animationIterationCount && (a.animationIterationCount = 1));
                        var s = r || a.transitionDuration > 0 || a.animationDuration > 0;
                        return l.put(i, a, s), a;
                      })(t, 0, i, r, F),
                      a = o.animationDelay,
                      s = o.transitionDelay;
                    return (
                      (o.maxDelay = a && s ? Math.max(a, s) : a || s),
                      (o.maxDuration = Math.max(o.animationDuration * o.animationIterationCount, o.transitionDuration)),
                      o
                    );
                  }
                  return function (d, v) {
                    var _ = v || {};
                    _.$$prepared || (_ = T(z(_)));
                    var w = {},
                      S = O(d);
                    if (!S || !S.parentNode || !g.enabled()) return ke();
                    var x,
                      P,
                      I,
                      B,
                      F,
                      K,
                      Q,
                      J,
                      Y,
                      X,
                      ee = [],
                      te =
                        (d.attr("class"),
                        (function (e) {
                          var t = {};
                          return e && (e.to || e.from) && ((t.to = e.to), (t.from = e.from)), t;
                        })(_)),
                      ne = [];
                    if (0 === _.duration || (!h.animations && !h.transitions)) return ke();
                    var re = _.event && Z(_.event) ? _.event.join(" ") : _.event,
                      oe = re && _.structural,
                      ae = "",
                      se = "";
                    oe ? (ae = C(re, "ng-", !0)) : re && (ae = re),
                      _.addClass && (se += C(_.addClass, s)),
                      _.removeClass && (se.length && (se += " "), (se += C(_.removeClass, u))),
                      _.applyClassesEarly && se.length && y(d, _);
                    var ue = [ae, se].join(" ").trim(),
                      ce = te.to && Object.keys(te.to).length > 0;
                    if (!((_.keyframeStyle || "").length > 0) && !ce && !ue) return ke();
                    var le,
                      de,
                      fe = l.cacheKey(S, re, _.addClass, _.removeClass);
                    if (l.containsCachedAnimationWithoutDuration(fe)) return (ue = null), ke();
                    if (_.stagger > 0) {
                      var he = parseFloat(_.stagger);
                      le = { transitionDelay: he, animationDelay: he, transitionDuration: 0, animationDuration: 0 };
                    } else
                      le = (function (n, i, r, o) {
                        var a,
                          s = "stagger-" + r;
                        if (l.count(r) > 0 && !(a = l.get(s))) {
                          var u = C(i, "-stagger");
                          t.addClass(n, u),
                            ((a = W(e, n, o)).animationDuration = Math.max(a.animationDuration, 0)),
                            (a.transitionDuration = Math.max(a.transitionDuration, 0)),
                            t.removeClass(n, u),
                            l.put(s, a, !0);
                        }
                        return a || {};
                      })(S, ue, fe, U);
                    if ((_.$$skipPreparationClasses || t.addClass(d, ue), _.transitionStyle)) {
                      var pe = [n, _.transitionStyle];
                      L(S, pe), ee.push(pe);
                    }
                    if (_.duration >= 0) {
                      de = S.style[n].length > 0;
                      var ve = H(_.duration, de);
                      L(S, ve), ee.push(ve);
                    }
                    if (_.keyframeStyle) {
                      var me = [r, _.keyframeStyle];
                      L(S, me), ee.push(me);
                    }
                    var ge = le ? (_.staggerIndex >= 0 ? _.staggerIndex : l.count(fe)) : 0,
                      ye = 0 === ge;
                    ye && !_.skipBlocking && D(S, 9999);
                    var _e = b(S, 0, fe, !oe),
                      $e = _e.maxDelay;
                    (K = Math.max($e, 0)), (J = _e.maxDuration);
                    var be = {};
                    if (
                      ((be.hasTransitions = _e.transitionDuration > 0),
                      (be.hasAnimations = _e.animationDuration > 0),
                      (be.hasTransitionAll = be.hasTransitions && "all" === _e.transitionProperty),
                      (be.applyTransitionDuration =
                        ce && ((be.hasTransitions && !be.hasTransitionAll) || (be.hasAnimations && !be.hasTransitions))),
                      (be.applyAnimationDuration = _.duration && be.hasAnimations),
                      (be.applyTransitionDelay = V(_.delay) && (be.applyTransitionDuration || be.hasTransitions)),
                      (be.applyAnimationDelay = V(_.delay) && be.hasAnimations),
                      (be.recalculateTimingStyles = se.length > 0),
                      (be.applyTransitionDuration || be.applyAnimationDuration) &&
                        ((J = _.duration ? parseFloat(_.duration) : J),
                        be.applyTransitionDuration &&
                          ((be.hasTransitions = !0), (_e.transitionDuration = J), (de = S.style[n + f].length > 0), ee.push(H(J, de))),
                        be.applyAnimationDuration && ((be.hasAnimations = !0), (_e.animationDuration = J), ee.push([m, J + "s"]))),
                      0 === J && !be.recalculateTimingStyles)
                    )
                      return ke();
                    var Ce,
                      we = C(ue, "-active");
                    null != _.delay &&
                      ("boolean" != typeof _.delay && ((Ce = parseFloat(_.delay)), (K = Math.max(Ce, 0))),
                      be.applyTransitionDelay && ee.push(j(Ce)),
                      be.applyAnimationDelay && ee.push(j(Ce, !0)));
                    return (
                      null == _.duration && _e.transitionDuration > 0 && (be.recalculateTimingStyles = be.recalculateTimingStyles || ye),
                      (Q = K * N),
                      (Y = J * N),
                      _.skipBlocking ||
                        ((be.blockTransition = _e.transitionDuration > 0),
                        (be.blockKeyframeAnimation = _e.animationDuration > 0 && le.animationDelay > 0 && 0 === le.animationDuration)),
                      _.from && (_.cleanupStyles && q(w, S, Object.keys(_.from)), k(d, _)),
                      be.blockTransition || be.blockKeyframeAnimation ? Ee(J) : _.skipBlocking || D(S, !1),
                      {
                        $$willAnimate: !0,
                        end: Se,
                        start: function () {
                          if (!x) return (B = new a((F = { end: Se, cancel: xe, resume: null, pause: null }))), $(Pe), B;
                        }
                      }
                    );
                    function Se() {
                      Te();
                    }
                    function xe() {
                      Te(!0);
                    }
                    function Te(e) {
                      if (!(x || (I && P))) {
                        (x = !0),
                          (P = !1),
                          ue && !_.$$skipPreparationClasses && t.removeClass(d, ue),
                          we && t.removeClass(d, we),
                          M(S, !1),
                          D(S, !1),
                          G(ee, function (e) {
                            S.style[e[0]] = "";
                          }),
                          y(d, _),
                          E(d, _),
                          Object.keys(w).length &&
                            G(w, function (e, t) {
                              e ? S.style.setProperty(t, e) : S.style.removeProperty(t);
                            }),
                          _.onDone && _.onDone(),
                          ne && ne.length && d.off(ne.join(" "), Ae);
                        var n = d.data(R);
                        n && (c.cancel(n[0].timer), d.removeData(R)), B && B.complete(!e);
                      }
                    }
                    function Ee(e) {
                      be.blockTransition && D(S, e), be.blockKeyframeAnimation && M(S, !!e);
                    }
                    function ke() {
                      return (
                        (B = new a({ end: Se, cancel: xe })),
                        $(ie),
                        Te(),
                        {
                          $$willAnimate: !1,
                          start: function () {
                            return B;
                          },
                          end: Se
                        }
                      );
                    }
                    function Ae(e) {
                      e.stopPropagation();
                      var t = e.originalEvent || e;
                      if (t.target === S) {
                        var n = t.$manualTimeStamp || Date.now(),
                          i = parseFloat(t.elapsedTime.toFixed(3));
                        Math.max(n - X, 0) >= Q && i >= J && ((I = !0), Te());
                      }
                    }
                    function Pe() {
                      if (!x)
                        if (S.parentNode) {
                          var e = function (e) {
                              if (I) P && e && ((P = !1), Te());
                              else if (((P = !e), _e.animationDuration)) {
                                var t = M(S, P);
                                P ? ee.push(t) : ((i = t), (r = (n = ee).indexOf(i)), i >= 0 && n.splice(r, 1));
                              }
                              var n, i, r;
                            },
                            a =
                              ge > 0 &&
                              ((_e.transitionDuration && 0 === le.transitionDuration) ||
                                (_e.animationDuration && 0 === le.animationDuration)) &&
                              Math.max(le.animationDelay, le.transitionDelay);
                          a ? c(s, Math.floor(a * ge * N), !1) : s(),
                            (F.resume = function () {
                              e(!0);
                            }),
                            (F.pause = function () {
                              e(!1);
                            });
                        } else Te();
                      function s() {
                        if (!x) {
                          if (
                            (Ee(!1),
                            G(ee, function (e) {
                              var t = e[0],
                                n = e[1];
                              S.style[t] = n;
                            }),
                            y(d, _),
                            t.addClass(d, we),
                            be.recalculateTimingStyles)
                          ) {
                            if (
                              (S.getAttribute("class") + " " + ue,
                              (fe = l.cacheKey(S, re, _.addClass, _.removeClass)),
                              (_e = b(S, 0, fe, !1)),
                              ($e = _e.maxDelay),
                              (K = Math.max($e, 0)),
                              0 === (J = _e.maxDuration))
                            )
                              return void Te();
                            (be.hasTransitions = _e.transitionDuration > 0), (be.hasAnimations = _e.animationDuration > 0);
                          }
                          if (
                            (be.applyAnimationDelay &&
                              (($e = "boolean" != typeof _.delay && V(_.delay) ? parseFloat(_.delay) : $e),
                              (K = Math.max($e, 0)),
                              (_e.animationDelay = $e),
                              (Ce = j($e, !0)),
                              ee.push(Ce),
                              (S.style[Ce[0]] = Ce[1])),
                            (Q = K * N),
                            (Y = J * N),
                            _.easing)
                          ) {
                            var e,
                              a = _.easing;
                            be.hasTransitions && ((e = n + p), ee.push([e, a]), (S.style[e] = a)),
                              be.hasAnimations && ((e = r + p), ee.push([e, a]), (S.style[e] = a));
                          }
                          _e.transitionDuration && ne.push(i), _e.animationDuration && ne.push(o), (X = Date.now());
                          var s = Q + 1.5 * Y,
                            f = X + s,
                            h = d.data(R) || [],
                            v = !0;
                          if (h.length) {
                            var m = h[0];
                            (v = f > m.expectedEndTime) ? c.cancel(m.timer) : h.push(Te);
                          }
                          if (v) {
                            var g = c(u, s, !1);
                            (h[0] = { timer: g, expectedEndTime: f }), h.push(Te), d.data(R, h);
                          }
                          ne.length && d.on(ne.join(" "), Ae), _.to && (_.cleanupStyles && q(w, S, Object.keys(_.to)), A(d, _));
                        }
                      }
                      function u() {
                        var e = d.data(R);
                        if (e) {
                          for (var t = 1; t < e.length; t++) e[t]();
                          d.removeData(R);
                        }
                      }
                    }
                  };
                }
              ];
            }
          ],
          oe = [
            "$$animationProvider",
            function (e) {
              e.drivers.push("$$animateCssDriver");
              var t = "ng-animate-shim",
                n = "ng-anchor",
                i = "ng-anchor-out",
                r = "ng-anchor-in";
              this.$get = [
                "$animateCss",
                "$rootScope",
                "$$AnimateRunner",
                "$rootElement",
                "$sniffer",
                "$$jqLite",
                "$document",
                function (e, o, a, s, u, c, l) {
                  if (!u.animations && !u.transitions) return ie;
                  var d,
                    f = l[0].body,
                    h = O(s),
                    p = ne(((d = h).parentNode && 11 === d.parentNode.nodeType) || f.contains(h) ? h : f);
                  return function (o) {
                    return o.from && o.to
                      ? (function (o, s, u, c) {
                          var l = g(o),
                            d = g(s),
                            h = [];
                          if (
                            (G(c, function (o) {
                              var s = (function (o, s, u) {
                                var c = ne(O(s).cloneNode(!0)),
                                  l = v($(c));
                                s.addClass(t), u.addClass(t), c.addClass(n), p.append(c);
                                var d,
                                  h = _();
                                if (!h && !(d = b())) return C();
                                var g = h || d;
                                return {
                                  start: function () {
                                    var e,
                                      t = g.start();
                                    return (
                                      t.done(function () {
                                        if (((t = null), !d && (d = b())))
                                          return (
                                            (t = d.start()).done(function () {
                                              (t = null), C(), e.complete();
                                            }),
                                            t
                                          );
                                        C(), e.complete();
                                      }),
                                      (e = new a({ end: n, cancel: n }))
                                    );
                                    function n() {
                                      t && t.end();
                                    }
                                  }
                                };
                                function y(e) {
                                  var t = {},
                                    n = O(e).getBoundingClientRect();
                                  return (
                                    G(["width", "height", "top", "left"], function (e) {
                                      var i = n[e];
                                      switch (e) {
                                        case "top":
                                          i += f.scrollTop;
                                          break;
                                        case "left":
                                          i += f.scrollLeft;
                                      }
                                      t[e] = Math.floor(i) + "px";
                                    }),
                                    t
                                  );
                                }
                                function _() {
                                  var t = e(c, { addClass: i, delay: !0, from: y(s) });
                                  return t.$$willAnimate ? t : null;
                                }
                                function $(e) {
                                  return e.attr("class") || "";
                                }
                                function b() {
                                  var t = v($(u)),
                                    n = m(t, l),
                                    o = m(l, t),
                                    a = e(c, { to: y(u), addClass: r + " " + n, removeClass: i + " " + o, delay: !0 });
                                  return a.$$willAnimate ? a : null;
                                }
                                function C() {
                                  c.remove(), s.removeClass(t), u.removeClass(t);
                                }
                              })(0, o.out, o.in);
                              s && h.push(s);
                            }),
                            !l && !d && 0 === h.length)
                          )
                            return;
                          return {
                            start: function () {
                              var e = [];
                              l && e.push(l.start()),
                                d && e.push(d.start()),
                                G(h, function (t) {
                                  e.push(t.start());
                                });
                              var t = new a({ end: n, cancel: n });
                              return (
                                a.all(e, function (e) {
                                  t.complete(e);
                                }),
                                t
                              );
                              function n() {
                                G(e, function (e) {
                                  e.end();
                                });
                              }
                            }
                          };
                        })(o.from, o.to, o.classes, o.anchors)
                      : g(o);
                  };
                  function v(e) {
                    return e.replace(/\bng-\S+\b/g, "");
                  }
                  function m(e, t) {
                    return (
                      ee(e) && (e = e.split(" ")),
                      ee(t) && (t = t.split(" ")),
                      e
                        .filter(function (e) {
                          return -1 === t.indexOf(e);
                        })
                        .join(" ")
                    );
                  }
                  function g(t) {
                    var n = t.element,
                      i = t.options || {};
                    t.structural &&
                      ((i.event = t.event),
                      (i.structural = !0),
                      (i.applyClassesEarly = !0),
                      "leave" === t.event && (i.onDone = i.domOperation)),
                      i.preparationClasses && (i.event = I(i.event, i.preparationClasses));
                    var r = e(n, i);
                    return r.$$willAnimate ? r : null;
                  }
                }
              ];
            }
          ],
          ae = [
            "$animateProvider",
            function (e) {
              this.$get = [
                "$injector",
                "$$AnimateRunner",
                "$$jqLite",
                function (t, n, i) {
                  var r = x(i);
                  return function (i, o, a, s) {
                    var u = !1;
                    3 === arguments.length && X(a) && ((s = a), (a = null)),
                      (s = T(s)),
                      a ||
                        ((a = i.attr("class") || ""), s.addClass && (a += " " + s.addClass), s.removeClass && (a += " " + s.removeClass));
                    var c,
                      l,
                      d,
                      f,
                      h,
                      p = s.addClass,
                      v = s.removeClass,
                      m = (function (n) {
                        n = Z(n) ? n : n.split(" ");
                        for (var i = [], r = {}, o = 0; o < n.length; o++) {
                          var a = n[o],
                            s = e.$$registeredAnimations[a];
                          s && !r[a] && (i.push(t.get(s)), (r[a] = !0));
                        }
                        return i;
                      })(a);
                    m.length &&
                      ("leave" === o
                        ? ((f = "leave"), (d = "afterLeave"))
                        : ((f = "before" + o.charAt(0).toUpperCase() + o.substr(1)), (d = o)),
                      "enter" !== o && "move" !== o && (c = $(i, o, s, m, f)),
                      (l = $(i, o, s, m, d)));
                    if (c || l)
                      return {
                        $$willAnimate: !0,
                        end: function () {
                          return h ? h.end() : (y(), (h = new n()).complete(!0)), h;
                        },
                        start: function () {
                          if (h) return h;
                          var e;
                          h = new n();
                          var t = [];
                          return (
                            c &&
                              t.push(function (t) {
                                e = c(t);
                              }),
                            t.length
                              ? t.push(function (e) {
                                  g(), e(!0);
                                })
                              : g(),
                            l &&
                              t.push(function (t) {
                                e = l(t);
                              }),
                            h.setHost({
                              end: function () {
                                r();
                              },
                              cancel: function () {
                                r(!0);
                              }
                            }),
                            n.chain(t, i),
                            h
                          );
                          function i(e) {
                            y(), h.complete(e);
                          }
                          function r(t) {
                            u || ((e || ie)(t), i(t));
                          }
                        }
                      };
                    function g() {
                      s.domOperation(), r(i, s);
                    }
                    function y() {
                      (u = !0), g(), E(i, s);
                    }
                    function _(e, t, i, r, o) {
                      var a = [];
                      return (
                        G(r, function (r) {
                          var s = r[o];
                          s &&
                            a.push(function () {
                              var r,
                                o,
                                a = !1,
                                u = function (e) {
                                  a || ((a = !0), (o || ie)(e), r.complete(!e));
                                };
                              return (
                                (r = new n({
                                  end: function () {
                                    u();
                                  },
                                  cancel: function () {
                                    u(!0);
                                  }
                                })),
                                (o = (function (e, t, i, r, o) {
                                  var a;
                                  switch (i) {
                                    case "animate":
                                      a = [t, r.from, r.to, o];
                                      break;
                                    case "setClass":
                                      a = [t, p, v, o];
                                      break;
                                    case "addClass":
                                      a = [t, p, o];
                                      break;
                                    case "removeClass":
                                      a = [t, v, o];
                                      break;
                                    default:
                                      a = [t, o];
                                  }
                                  a.push(r);
                                  var s = e.apply(e, a);
                                  if (s)
                                    if ((Y(s.start) && (s = s.start()), s instanceof n)) s.done(o);
                                    else if (Y(s)) return s;
                                  return ie;
                                })(s, e, t, i, function (e) {
                                  u(!1 === e);
                                })),
                                r
                              );
                            });
                        }),
                        a
                      );
                    }
                    function $(e, t, i, r, o) {
                      var a,
                        s,
                        u = _(e, t, i, r, o);
                      0 === u.length &&
                        ("beforeSetClass" === o
                          ? ((a = _(e, "removeClass", i, r, "beforeRemoveClass")), (s = _(e, "addClass", i, r, "beforeAddClass")))
                          : "setClass" === o && ((a = _(e, "removeClass", i, r, "removeClass")), (s = _(e, "addClass", i, r, "addClass"))),
                        a && (u = u.concat(a)),
                        s && (u = u.concat(s)));
                      if (0 !== u.length)
                        return function (e) {
                          var t = [];
                          return (
                            u.length &&
                              G(u, function (e) {
                                t.push(e());
                              }),
                            t.length ? n.all(t, e) : e(),
                            function (e) {
                              G(t, function (t) {
                                e ? t.cancel() : t.end();
                              });
                            }
                          );
                        };
                    }
                  };
                }
              ];
            }
          ],
          se = [
            "$$animationProvider",
            function (e) {
              e.drivers.push("$$animateJsDriver"),
                (this.$get = [
                  "$$animateJs",
                  "$$AnimateRunner",
                  function (e, t) {
                    return function (e) {
                      if (e.from && e.to) {
                        var i = n(e.from),
                          r = n(e.to);
                        if (!i && !r) return;
                        return {
                          start: function () {
                            var e = [];
                            i && e.push(i.start()),
                              r && e.push(r.start()),
                              t.all(e, function (e) {
                                n.complete(e);
                              });
                            var n = new t({ end: o(), cancel: o() });
                            return n;
                            function o() {
                              return function () {
                                G(e, function (e) {
                                  e.end();
                                });
                              };
                            }
                          }
                        };
                      }
                      return n(e);
                    };
                    function n(t) {
                      var n = t.element,
                        i = t.event,
                        r = t.options,
                        o = t.classes;
                      return e(n, i, o, r);
                    }
                  }
                ]);
            }
          ],
          ue = "data-ng-animate",
          ce = "$ngAnimatePin",
          le = [
            "$animateProvider",
            function (t) {
              var n = " ",
                i = (this.rules = { skip: [], cancel: [], join: [] });
              function r(e) {
                return { addClass: e.addClass, removeClass: e.removeClass, from: e.from, to: e.to };
              }
              function o(e, t) {
                if (e && t) {
                  var i = (function (e) {
                    if (!e) return null;
                    var t = e.split(n),
                      i = Object.create(null);
                    return (
                      G(t, function (e) {
                        i[e] = !0;
                      }),
                      i
                    );
                  })(t);
                  return e.split(n).some(function (e) {
                    return i[e];
                  });
                }
              }
              function c(e, t, n) {
                return i[e].some(function (e) {
                  return e(t, n);
                });
              }
              function d(e, t) {
                var n = (e.addClass || "").length > 0,
                  i = (e.removeClass || "").length > 0;
                return t ? n && i : n || i;
              }
              i.join.push(function (e, t) {
                return !e.structural && d(e);
              }),
                i.skip.push(function (e, t) {
                  return !e.structural && !d(e);
                }),
                i.skip.push(function (e, t) {
                  return "leave" === t.event && e.structural;
                }),
                i.skip.push(function (e, t) {
                  return t.structural && 2 === t.state && !e.structural;
                }),
                i.cancel.push(function (e, t) {
                  return t.structural && e.structural;
                }),
                i.cancel.push(function (e, t) {
                  return 2 === t.state && e.structural;
                }),
                i.cancel.push(function (e, t) {
                  if (t.structural) return !1;
                  var n = e.addClass,
                    i = e.removeClass,
                    r = t.addClass,
                    a = t.removeClass;
                  return !((te(n) && te(i)) || (te(r) && te(a))) && (o(n, a) || o(i, r));
                }),
                (this.$get = [
                  "$$rAF",
                  "$rootScope",
                  "$rootElement",
                  "$document",
                  "$$Map",
                  "$$animation",
                  "$$AnimateRunner",
                  "$templateRequest",
                  "$$jqLite",
                  "$$forceReflow",
                  "$$isDocumentHidden",
                  function (n, i, o, f, h, p, v, m, g, y, _) {
                    var b = new h(),
                      k = new h(),
                      A = null;
                    function M(e) {
                      k.delete(e.target);
                    }
                    var L = i.$watch(
                        function () {
                          return 0 === m.totalPendingRequests;
                        },
                        function (e) {
                          e &&
                            (L(),
                            i.$$postDigest(function () {
                              i.$$postDigest(function () {
                                null === A && (A = !0);
                              });
                            }));
                        }
                      ),
                      D = Object.create(null),
                      B = t.customFilter(),
                      R = t.classNameFilter(),
                      N = function () {
                        return !0;
                      },
                      F = B || N,
                      U = R
                        ? function (e, t) {
                            var n = [e.getAttribute("class"), t.addClass, t.removeClass].join(" ");
                            return R.test(n);
                          }
                        : N,
                      j = x(g);
                    function W(e, t) {
                      return P(e, t, {});
                    }
                    var V =
                      e.Node.prototype.contains ||
                      function (e) {
                        return this === e || !!(16 & this.compareDocumentPosition(e));
                      };
                    function H(e, t, n) {
                      var i = S(t);
                      return e.filter(function (e) {
                        return !(e.node === i && (!n || e.callback === n));
                      });
                    }
                    function q(e, t) {
                      "close" !== e || t.parentNode || Y.off(t);
                    }
                    var Y = {
                      on: function (e, t, n) {
                        var i = S(t);
                        (D[e] = D[e] || []),
                          D[e].push({ node: i, callback: n }),
                          ne(t).on("$destroy", function () {
                            b.get(i) || Y.off(e, t, n);
                          });
                      },
                      off: function (e, t, n) {
                        if (1 !== arguments.length || ee(arguments[0])) {
                          var i = D[e];
                          i && (D[e] = 1 === arguments.length ? null : H(i, t, n));
                        } else for (var r in ((t = arguments[0]), D)) D[r] = H(D[r], t);
                      },
                      pin: function (e, t) {
                        $(J(e), "element", "not an element"), $(J(t), "parentElement", "not an element"), e.data(ce, t);
                      },
                      push: function (e, t, h, m) {
                        return (
                          ((h = h || {}).domOperation = m),
                          (function (e, t, h) {
                            var m = z(h),
                              g = w(e),
                              y = O(g),
                              $ = y && y.parentNode;
                            m = T(m);
                            var S = new v(),
                              x =
                                ((M = !1),
                                function (e) {
                                  M
                                    ? e()
                                    : i.$$postDigest(function () {
                                        (M = !0), e();
                                      });
                                });
                            var M;
                            Z(m.addClass) && (m.addClass = m.addClass.join(" "));
                            m.addClass && !ee(m.addClass) && (m.addClass = null);
                            Z(m.removeClass) && (m.removeClass = m.removeClass.join(" "));
                            m.removeClass && !ee(m.removeClass) && (m.removeClass = null);
                            m.from && !X(m.from) && (m.from = null);
                            m.to && !X(m.to) && (m.to = null);
                            if (!(A && y && F(y, t, h) && U(y, m))) return ae(), S;
                            var L = ["enter", "move", "leave"].indexOf(t) >= 0,
                              B = _(),
                              R = B || k.get(y),
                              N = (!R && b.get(y)) || {},
                              H = !!N.state;
                            R ||
                              (H && 1 === N.state) ||
                              (R = !(function (e, t, n) {
                                var i,
                                  r = f[0].body,
                                  s = O(o),
                                  u = e === r || "HTML" === e.nodeName,
                                  c = e === s,
                                  d = !1,
                                  h = k.get(e),
                                  p = ne.data(e, ce);
                                p && (t = O(p));
                                for (; t && (c || (c = t === s), t.nodeType === a); ) {
                                  var v = b.get(t) || {};
                                  if (!d) {
                                    var m = k.get(t);
                                    if (!0 === m && !1 !== h) {
                                      h = !0;
                                      break;
                                    }
                                    !1 === m && (h = !1), (d = v.structural);
                                  }
                                  if (te(i) || !0 === i) {
                                    var g = ne.data(t, l);
                                    Q(g) && (i = g);
                                  }
                                  if (d && !1 === i) break;
                                  if ((u || (u = t === r), u && c)) break;
                                  t = c || !(p = ne.data(t, ce)) ? t.parentNode : O(p);
                                }
                                return (!d || i) && !0 !== h && c && u;
                              })(y, $));
                            if (R) return B && oe(S, t, "start", r(m)), ae(), B && oe(S, t, "close", r(m)), S;
                            L &&
                              (function (e) {
                                var t = e.querySelectorAll("[" + ue + "]");
                                G(t, function (e) {
                                  var t = parseInt(e.getAttribute(ue), 10),
                                    n = b.get(e);
                                  if (n)
                                    switch (t) {
                                      case 2:
                                        n.runner.end();
                                      case 1:
                                        b.delete(e);
                                    }
                                });
                              })(y);
                            var K = {
                              structural: L,
                              element: g,
                              event: t,
                              addClass: m.addClass,
                              removeClass: m.removeClass,
                              close: ae,
                              options: m,
                              runner: S
                            };
                            if (H) {
                              if (c("skip", K, N)) return 2 === N.state ? (ae(), S) : (P(g, N, K), N.runner);
                              if (c("cancel", K, N))
                                if (2 === N.state) N.runner.end();
                                else {
                                  if (!N.structural) return P(g, N, K), N.runner;
                                  N.close();
                                }
                              else if (c("join", K, N)) {
                                if (2 !== N.state)
                                  return (
                                    (function (e, t, n, i) {
                                      var r = "";
                                      n && (r = C(n, "ng-", !0)),
                                        i.addClass && (r = I(r, C(i.addClass, s))),
                                        i.removeClass && (r = I(r, C(i.removeClass, u))),
                                        r.length && ((i.preparationClasses = r), t.addClass(r));
                                    })(0, g, L ? t : null, m),
                                    (t = K.event = N.event),
                                    (m = P(g, N, K)),
                                    N.runner
                                  );
                                W(g, K);
                              }
                            } else W(g, K);
                            var J = K.structural;
                            J || (J = ("animate" === K.event && Object.keys(K.options.to || {}).length > 0) || d(K));
                            if (!J) return ae(), ie(y), S;
                            var Y = (N.counter || 0) + 1;
                            return (
                              (K.counter = Y),
                              re(y, 1, K),
                              i.$$postDigest(function () {
                                g = w(e);
                                var n = b.get(y),
                                  i = !n;
                                n = n || {};
                                var o = (g.parent() || []).length > 0 && ("animate" === n.event || n.structural || d(n));
                                if (i || n.counter !== Y || !o)
                                  return (
                                    i && (j(g, m), E(g, m)), (i || (L && n.event !== t)) && (m.domOperation(), S.end()), void (o || ie(y))
                                  );
                                (t = !n.structural && d(n, !0) ? "setClass" : n.event), re(y, 2);
                                var a = p(g, t, n.options);
                                S.setHost(a),
                                  oe(S, t, "start", r(m)),
                                  a.done(function (e) {
                                    ae(!e);
                                    var n = b.get(y);
                                    n && n.counter === Y && ie(y), oe(S, t, "close", r(m));
                                  });
                              }),
                              S
                            );
                            function oe(e, t, i, r) {
                              x(function () {
                                var e = (function (e, t, n) {
                                  var i = [],
                                    r = D[n];
                                  return (
                                    r &&
                                      G(r, function (r) {
                                        (V.call(r.node, t) || ("leave" === n && V.call(r.node, e))) && i.push(r.callback);
                                      }),
                                    i
                                  );
                                })($, y, t);
                                e.length
                                  ? n(function () {
                                      G(e, function (e) {
                                        e(g, i, r);
                                      }),
                                        q(i, y);
                                    })
                                  : q(i, y);
                              }),
                                e.progress(t, i, r);
                            }
                            function ae(e) {
                              !(function (e, t) {
                                t.preparationClasses && (e.removeClass(t.preparationClasses), (t.preparationClasses = null)),
                                  t.activeClasses && (e.removeClass(t.activeClasses), (t.activeClasses = null));
                              })(g, m),
                                j(g, m),
                                E(g, m),
                                m.domOperation(),
                                S.complete(!e);
                            }
                          })(e, t, h)
                        );
                      },
                      enabled: function (e, t) {
                        var n = arguments.length;
                        if (0 === n) t = !!A;
                        else if (J(e)) {
                          var i = O(e);
                          1 === n ? (t = !k.get(i)) : (k.has(i) || ne(e).on("$destroy", M), k.set(i, !t));
                        } else t = A = !!e;
                        return t;
                      }
                    };
                    return Y;
                    function ie(e) {
                      e.removeAttribute(ue), b.delete(e);
                    }
                    function re(e, t, n) {
                      ((n = n || {}).state = t), e.setAttribute(ue, t);
                      var i = b.get(e),
                        r = i ? K(i, n) : n;
                      b.set(e, r);
                    }
                  }
                ]);
            }
          ],
          de = [
            "$animateProvider",
            function (e) {
              var t = "ng-animate-ref",
                n = (this.drivers = []),
                i = "$$animationRunner",
                r = "$$animatePrepareClasses";
              function o(e) {
                return e.data(i);
              }
              this.$get = [
                "$$jqLite",
                "$rootScope",
                "$injector",
                "$$AnimateRunner",
                "$$Map",
                "$$rAFScheduler",
                "$$animateCache",
                function (e, a, s, u, l, d, f) {
                  var h = [],
                    p = x(e);
                  return function (v, m, g) {
                    g = T(g);
                    var y = ["enter", "move", "leave"].indexOf(m) >= 0,
                      _ = new u({
                        end: function () {
                          x();
                        },
                        cancel: function () {
                          x(!0);
                        }
                      });
                    if (!n.length) return x(), _;
                    var $ = b(v.attr("class"), b(g.addClass, g.removeClass)),
                      C = g.tempClasses;
                    return (
                      C && (($ += " " + C), (g.tempClasses = null)),
                      y && v.data(r, "ng-" + m + "-prepare"),
                      (function (e, t) {
                        e.data(i, t);
                      })(v, _),
                      h.push({
                        element: v,
                        classes: $,
                        event: m,
                        structural: y,
                        options: g,
                        beforeStart: function () {
                          (C = (C ? C + " " : "") + c), e.addClass(v, C);
                          var t = v.data(r);
                          t && (e.removeClass(v, t), (t = null));
                        },
                        close: x
                      }),
                      v.on("$destroy", S),
                      h.length > 1 ||
                        a.$$postDigest(function () {
                          var i = [];
                          G(h, function (e) {
                            o(e.element) ? i.push(e) : e.close();
                          }),
                            (h.length = 0);
                          var a = (function (e) {
                              var n = [],
                                i = {};
                              G(e, function (e, r) {
                                var o = O(e.element),
                                  a = e.event,
                                  s = ["enter", "move"].indexOf(a) >= 0,
                                  u = e.structural
                                    ? (function (e) {
                                        var n = "[" + t + "]",
                                          i = e.hasAttribute(t) ? [e] : e.querySelectorAll(n),
                                          r = [];
                                        return (
                                          G(i, function (e) {
                                            var n = e.getAttribute(t);
                                            n && n.length && r.push(e);
                                          }),
                                          r
                                        );
                                      })(o)
                                    : [];
                                if (u.length) {
                                  var c = s ? "to" : "from";
                                  G(u, function (e) {
                                    var n = e.getAttribute(t);
                                    (i[n] = i[n] || {}), (i[n][c] = { animationID: r, element: ne(e) });
                                  });
                                } else n.push(e);
                              });
                              var r = {},
                                o = {};
                              return (
                                G(i, function (t, i) {
                                  var a = t.from,
                                    s = t.to;
                                  if (a && s) {
                                    var u = e[a.animationID],
                                      c = e[s.animationID],
                                      l = a.animationID.toString();
                                    if (!o[l]) {
                                      var d = (o[l] = {
                                        structural: !0,
                                        beforeStart: function () {
                                          u.beforeStart(), c.beforeStart();
                                        },
                                        close: function () {
                                          u.close(), c.close();
                                        },
                                        classes: w(u.classes, c.classes),
                                        from: u,
                                        to: c,
                                        anchors: []
                                      });
                                      d.classes.length ? n.push(d) : (n.push(u), n.push(c));
                                    }
                                    o[l].anchors.push({ out: a.element, in: s.element });
                                  } else {
                                    var f = a ? a.animationID : s.animationID,
                                      h = f.toString();
                                    r[h] || ((r[h] = !0), n.push(e[f]));
                                  }
                                }),
                                n
                              );
                            })(i),
                            u = [];
                          G(a, function (e) {
                            var t = e.from ? e.from.element : e.element,
                              i = g.addClass;
                            i = (i ? i + " " : "") + c;
                            var r = f.cacheKey(t[0], e.event, i, g.removeClass);
                            u.push({
                              element: t,
                              domNode: O(t),
                              fn: function () {
                                var t,
                                  i = e.close;
                                if (f.containsCachedAnimationWithoutDuration(r)) i();
                                else {
                                  if ((e.beforeStart(), o(e.anchors ? e.from.element || e.to.element : e.element))) {
                                    var a = (function (e) {
                                      for (var t = n.length - 1; t >= 0; t--) {
                                        var i = n[t],
                                          r = s.get(i)(e);
                                        if (r) return r;
                                      }
                                    })(e);
                                    a && (t = a.start);
                                  }
                                  if (t) {
                                    var u = t();
                                    u.done(function (e) {
                                      i(!e);
                                    }),
                                      (function (e, t) {
                                        e.from && e.to ? (n(e.from.element), n(e.to.element)) : n(e.element);
                                        function n(e) {
                                          var n = o(e);
                                          n && n.setHost(t);
                                        }
                                      })(e, u);
                                  } else i();
                                }
                              }
                            });
                          });
                          for (
                            var p = (function (e) {
                                var t,
                                  n = { children: [] },
                                  i = new l();
                                for (t = 0; t < e.length; t++) {
                                  var r = e[t];
                                  i.set(r.domNode, (e[t] = { domNode: r.domNode, element: r.element, fn: r.fn, children: [] }));
                                }
                                for (t = 0; t < e.length; t++) o(e[t]);
                                return (function (e) {
                                  var t,
                                    n = [],
                                    i = [];
                                  for (t = 0; t < e.children.length; t++) i.push(e.children[t]);
                                  var r = i.length,
                                    o = 0,
                                    a = [];
                                  for (t = 0; t < i.length; t++) {
                                    var s = i[t];
                                    r <= 0 && ((r = o), (o = 0), n.push(a), (a = [])),
                                      a.push(s),
                                      s.children.forEach(function (e) {
                                        o++, i.push(e);
                                      }),
                                      r--;
                                  }
                                  return a.length && n.push(a), n;
                                })(n);
                                function o(e) {
                                  if (e.processed) return e;
                                  e.processed = !0;
                                  var t,
                                    r = e.domNode,
                                    a = r.parentNode;
                                  for (i.set(r, e); a; ) {
                                    if ((t = i.get(a))) {
                                      t.processed || (t = o(t));
                                      break;
                                    }
                                    a = a.parentNode;
                                  }
                                  return (t || n).children.push(e), e;
                                }
                              })(u),
                              v = 0;
                            v < p.length;
                            v++
                          )
                            for (var m = p[v], y = 0; y < m.length; y++) {
                              var _ = m[y],
                                $ = _.element;
                              if (((p[v][y] = _.fn), 0 !== v)) {
                                var b = $.data(r);
                                b && e.addClass($, b);
                              } else $.removeData(r);
                            }
                          d(p);
                        }),
                      _
                    );
                    function w(e, t) {
                      (e = e.split(" ")), (t = t.split(" "));
                      for (var n = [], i = 0; i < e.length; i++) {
                        var r = e[i];
                        if ("ng-" !== r.substring(0, 3))
                          for (var o = 0; o < t.length; o++)
                            if (r === t[o]) {
                              n.push(r);
                              break;
                            }
                      }
                      return n.join(" ");
                    }
                    function S() {
                      var e = o(v);
                      !e || ("leave" === m && g.$$domOperationFired) || e.end();
                    }
                    function x(t) {
                      v.off("$destroy", S),
                        (function (e) {
                          e.removeData(i);
                        })(v),
                        p(v, g),
                        E(v, g),
                        g.domOperation(),
                        C && e.removeClass(v, C),
                        _.complete(!t);
                    }
                  };
                }
              ];
            }
          ];
        t.module("ngAnimate", [], function () {
          (ie = t.noop),
            (z = t.copy),
            (K = t.extend),
            (ne = t.element),
            (G = t.forEach),
            (Z = t.isArray),
            (ee = t.isString),
            (X = t.isObject),
            (te = t.isUndefined),
            (Q = t.isDefined),
            (Y = t.isFunction),
            (J = t.isElement);
        })
          .info({ angularVersion: "1.8.0" })
          .directive("ngAnimateSwap", [
            "$animate",
            function (e) {
              return {
                restrict: "A",
                transclude: "element",
                terminal: !0,
                priority: 550,
                link: function (t, n, i, r, o) {
                  var a, s;
                  t.$watchCollection(i.ngAnimateSwap || i.for, function (t) {
                    a && e.leave(a),
                      s && (s.$destroy(), (s = null)),
                      (t || 0 === t) &&
                        o(function (t, i) {
                          (a = t), (s = i), e.enter(t, null, n);
                        });
                  });
                }
              };
            }
          ])
          .directive("ngAnimateChildren", B)
          .factory("$$rAFScheduler", [
            "$$rAF",
            function (e) {
              var t, n;
              function i(e) {
                (t = t.concat(e)), r();
              }
              return (
                (t = i.queue = []),
                (i.waitUntilQuiet = function (t) {
                  n && n(),
                    (n = e(function () {
                      (n = null), t(), r();
                    }));
                }),
                i
              );
              function r() {
                if (t.length) {
                  for (var i = t.shift(), o = 0; o < i.length; o++) i[o]();
                  n ||
                    e(function () {
                      n || r();
                    });
                }
              }
            }
          ])
          .provider("$$animateQueue", le)
          .provider("$$animateCache", function () {
            var e = "$$ngAnimateParentKey",
              t = 0,
              n = Object.create(null);
            this.$get = [
              function () {
                return {
                  cacheKey: function (n, i, r, o) {
                    var a = n.parentNode,
                      s = [a[e] || (a[e] = ++t), i, n.getAttribute("class")];
                    return r && s.push(r), o && s.push(o), s.join(" ");
                  },
                  containsCachedAnimationWithoutDuration: function (e) {
                    var t = n[e];
                    return (t && !t.isValid) || !1;
                  },
                  flush: function () {
                    n = Object.create(null);
                  },
                  count: function (e) {
                    var t = n[e];
                    return t ? t.total : 0;
                  },
                  get: function (e) {
                    var t = n[e];
                    return t && t.value;
                  },
                  put: function (e, t, i) {
                    n[e] ? (n[e].total++, (n[e].value = t)) : (n[e] = { total: 1, value: t, isValid: i });
                  }
                };
              }
            ];
          })
          .provider("$$animation", de)
          .provider("$animateCss", re)
          .provider("$$animateCssDriver", oe)
          .provider("$$animateJs", ae)
          .provider("$$animateJsDriver", se);
      })(window, window.angular);
    },
    3234: (e, t, n) => {
      n(1705), (e.exports = "ngAnimate");
    },
    6222: () => {
      !(function (e, t) {
        "use strict";
        var n = "ngAriaDisable",
          i = t
            .module("ngAria", ["ng"])
            .info({ angularVersion: "1.8.0" })
            .provider("$aria", function () {
              var e = {
                ariaHidden: !0,
                ariaChecked: !0,
                ariaReadonly: !0,
                ariaDisabled: !0,
                ariaRequired: !0,
                ariaInvalid: !0,
                ariaValue: !0,
                tabindex: !0,
                bindKeydown: !0,
                bindRoleForClick: !0
              };
              function i(t, i, r, a) {
                return function (s, u, c) {
                  if (!c.hasOwnProperty(n)) {
                    var l = c.$normalize(i);
                    !e[l] ||
                      o(u, r) ||
                      c[l] ||
                      s.$watch(c[t], function (e) {
                        (e = a ? !e : !!e), u.attr(i, e);
                      });
                  }
                };
              }
              (this.config = function (n) {
                e = t.extend(e, n);
              }),
                (this.$get = function () {
                  return {
                    config: function (t) {
                      return e[t];
                    },
                    $$watchExpr: i
                  };
                });
            }),
          r = ["BUTTON", "A", "INPUT", "TEXTAREA", "SELECT", "DETAILS", "SUMMARY"],
          o = function (e, t) {
            if (-1 !== t.indexOf(e[0].nodeName)) return !0;
          };
        i.directive("ngShow", [
          "$aria",
          function (e) {
            return e.$$watchExpr("ngShow", "aria-hidden", [], !0);
          }
        ])
          .directive("ngHide", [
            "$aria",
            function (e) {
              return e.$$watchExpr("ngHide", "aria-hidden", [], !1);
            }
          ])
          .directive("ngValue", [
            "$aria",
            function (e) {
              return e.$$watchExpr("ngValue", "aria-checked", r, !1);
            }
          ])
          .directive("ngChecked", [
            "$aria",
            function (e) {
              return e.$$watchExpr("ngChecked", "aria-checked", r, !1);
            }
          ])
          .directive("ngReadonly", [
            "$aria",
            function (e) {
              return e.$$watchExpr("ngReadonly", "aria-readonly", r, !1);
            }
          ])
          .directive("ngRequired", [
            "$aria",
            function (e) {
              return e.$$watchExpr("ngRequired", "aria-required", r, !1);
            }
          ])
          .directive("ngModel", [
            "$aria",
            function (e) {
              function t(t, n, i, a) {
                return e.config(n) && !i.attr(t) && (a || !o(i, r)) && ("hidden" !== i.attr("type") || "INPUT" !== i[0].nodeName);
              }
              function i(e, t) {
                return !t.attr("role") && t.attr("type") === e && !o(t, r);
              }
              return {
                restrict: "A",
                require: "ngModel",
                priority: 200,
                compile: function (r, o) {
                  if (!o.hasOwnProperty(n)) {
                    var a = (function (e, t) {
                      var n = e.type,
                        i = e.role;
                      return "checkbox" === (n || i) || "menuitemcheckbox" === i
                        ? "checkbox"
                        : "radio" === (n || i) || "menuitemradio" === i
                        ? "radio"
                        : "range" === n || "progressbar" === i || "slider" === i
                        ? "range"
                        : "";
                    })(o);
                    return {
                      post: function (n, r, o, s) {
                        var u = t("tabindex", "tabindex", r, !1);
                        function c() {
                          return s.$modelValue;
                        }
                        switch (a) {
                          case "radio":
                          case "checkbox":
                            i(a, r) && r.attr("role", a),
                              t("aria-checked", "ariaChecked", r, !1) &&
                                n.$watch(
                                  c,
                                  "radio" === a
                                    ? function (e) {
                                        var t = o.value == s.$viewValue;
                                        r.attr("aria-checked", t);
                                      }
                                    : function () {
                                        r.attr("aria-checked", !s.$isEmpty(s.$viewValue));
                                      }
                                ),
                              u && r.attr("tabindex", 0);
                            break;
                          case "range":
                            if ((i(a, r) && r.attr("role", "slider"), e.config("ariaValue"))) {
                              var l = !r.attr("aria-valuemin") && (o.hasOwnProperty("min") || o.hasOwnProperty("ngMin")),
                                d = !r.attr("aria-valuemax") && (o.hasOwnProperty("max") || o.hasOwnProperty("ngMax")),
                                f = !r.attr("aria-valuenow");
                              l &&
                                o.$observe("min", function (e) {
                                  r.attr("aria-valuemin", e);
                                }),
                                d &&
                                  o.$observe("max", function (e) {
                                    r.attr("aria-valuemax", e);
                                  }),
                                f &&
                                  n.$watch(c, function (e) {
                                    r.attr("aria-valuenow", e);
                                  });
                            }
                            u && r.attr("tabindex", 0);
                        }
                        !o.hasOwnProperty("ngRequired") &&
                          s.$validators.required &&
                          t("aria-required", "ariaRequired", r, !1) &&
                          o.$observe("required", function () {
                            r.attr("aria-required", !!o.required);
                          }),
                          t("aria-invalid", "ariaInvalid", r, !0) &&
                            n.$watch(
                              function () {
                                return s.$invalid;
                              },
                              function (e) {
                                r.attr("aria-invalid", !!e);
                              }
                            );
                      }
                    };
                  }
                }
              };
            }
          ])
          .directive("ngDisabled", [
            "$aria",
            function (e) {
              return e.$$watchExpr("ngDisabled", "aria-disabled", r, !1);
            }
          ])
          .directive("ngMessages", function () {
            return {
              restrict: "A",
              require: "?ngMessages",
              link: function (e, t, i, r) {
                i.hasOwnProperty(n) || t.attr("aria-live") || t.attr("aria-live", "assertive");
              }
            };
          })
          .directive("ngClick", [
            "$aria",
            "$parse",
            function (e, t) {
              return {
                restrict: "A",
                compile: function (i, a) {
                  if (!a.hasOwnProperty(n)) {
                    var s = t(a.ngClick);
                    return function (t, n, i) {
                      o(n, r) ||
                        (e.config("bindRoleForClick") && !n.attr("role") && n.attr("role", "button"),
                        e.config("tabindex") && !n.attr("tabindex") && n.attr("tabindex", 0),
                        !e.config("bindKeydown") ||
                          i.ngKeydown ||
                          i.ngKeypress ||
                          i.ngKeyup ||
                          n.on("keydown", function (e) {
                            var n = e.which || e.keyCode;
                            (13 !== n && 32 !== n) ||
                              (-1 !== r.indexOf(e.target.nodeName) || e.target.isContentEditable || e.preventDefault(),
                              t.$apply(function () {
                                s(t, { $event: e });
                              }));
                          }));
                    };
                  }
                }
              };
            }
          ])
          .directive("ngDblclick", [
            "$aria",
            function (e) {
              return function (t, i, a) {
                a.hasOwnProperty(n) || !e.config("tabindex") || i.attr("tabindex") || o(i, r) || i.attr("tabindex", 0);
              };
            }
          ]);
      })(window, window.angular);
    },
    7828: (e, t, n) => {
      n(6222), (e.exports = "ngAria");
    },
    7827: () => {
      !(function (e, t) {
        "use strict";
        function n(e, t) {
          var n = [],
            i = e
              .replace(/([().])/g, "\\$1")
              .replace(/(\/)?:(\w+)(\*\?|[?*])?/g, function (e, t, i, r) {
                var o = "?" === r || "*?" === r,
                  a = "*" === r || "*?" === r;
                return (
                  n.push({ name: i, optional: o }),
                  (t = t || ""),
                  (o ? "(?:" + t : t + "(?:") + (a ? "(.+?)" : "([^/]+)") + (o ? "?)?" : ")")
                );
              })
              .replace(/([/$*])/g, "\\$1");
          return (
            t.ignoreTrailingSlashes && (i = i.replace(/\/+$/, "") + "/*"),
            { keys: n, regexp: new RegExp("^" + i + "(?:[?#]|$)", t.caseInsensitiveMatch ? "i" : "") }
          );
        }
        var i,
          r,
          o,
          a,
          s,
          u = t
            .module("ngRoute", [])
            .info({ angularVersion: "1.8.0" })
            .provider("$route", function () {
              function e(e, n) {
                return t.extend(Object.create(e), n);
              }
              (i = t.isArray), (r = t.isObject), (o = t.isDefined), (a = t.noop);
              var u = {};
              (this.when = function (e, o) {
                var a = (function (e, t) {
                  if (i(e)) {
                    t = t || [];
                    for (var n = 0, o = e.length; n < o; n++) t[n] = e[n];
                  } else if (r(e)) for (var a in ((t = t || {}), e)) ("$" === a.charAt(0) && "$" === a.charAt(1)) || (t[a] = e[a]);
                  return t || e;
                })(o);
                if (
                  (t.isUndefined(a.reloadOnUrl) && (a.reloadOnUrl = !0),
                  t.isUndefined(a.reloadOnSearch) && (a.reloadOnSearch = !0),
                  t.isUndefined(a.caseInsensitiveMatch) && (a.caseInsensitiveMatch = this.caseInsensitiveMatch),
                  (u[e] = t.extend(a, { originalPath: e }, e && n(e, a))),
                  e)
                ) {
                  var s = "/" === e[e.length - 1] ? e.substr(0, e.length - 1) : e + "/";
                  u[s] = t.extend({ originalPath: e, redirectTo: e }, n(s, a));
                }
                return this;
              }),
                (this.caseInsensitiveMatch = !1),
                (this.otherwise = function (e) {
                  return "string" == typeof e && (e = { redirectTo: e }), this.when(null, e), this;
                }),
                (s = !0),
                (this.eagerInstantiationEnabled = function (e) {
                  return o(e) ? ((s = e), this) : s;
                }),
                (this.$get = [
                  "$rootScope",
                  "$location",
                  "$routeParams",
                  "$q",
                  "$injector",
                  "$templateRequest",
                  "$sce",
                  "$browser",
                  function (n, i, r, o, s, l, d, f) {
                    var h,
                      p,
                      v = !1,
                      m = {
                        routes: u,
                        reload: function () {
                          v = !0;
                          var e = {
                            defaultPrevented: !1,
                            preventDefault: function () {
                              (this.defaultPrevented = !0), (v = !1);
                            }
                          };
                          n.$evalAsync(function () {
                            g(e), e.defaultPrevented || y();
                          });
                        },
                        updateParams: function (e) {
                          if (!this.current || !this.current.$$route) throw c("norout", "Tried updating route with no current route");
                          (e = t.extend({}, this.current.params, e)), i.path(C(this.current.$$route.originalPath, e)), i.search(e);
                        }
                      };
                    return n.$on("$locationChangeStart", g), n.$on("$locationChangeSuccess", y), m;
                    function g(r) {
                      var o,
                        a,
                        s,
                        c,
                        l = m.current;
                      t.forEach(u, function (n, r) {
                        !a &&
                          (o = (function (e, t) {
                            var n = t.keys,
                              i = {};
                            if (!t.regexp) return null;
                            var r = t.regexp.exec(e);
                            if (!r) return null;
                            for (var o = 1, a = r.length; o < a; ++o) {
                              var s = n[o - 1],
                                u = r[o];
                              s && u && (i[s.name] = u);
                            }
                            return i;
                          })(i.path(), n)) &&
                          ((a = e(n, { params: t.extend({}, i.search(), o), pathParams: o })).$$route = n);
                      }),
                        (h = a || (u.null && e(u.null, { params: {}, pathParams: {} }))),
                        (s = h),
                        (c = l),
                        (p =
                          !v &&
                          s &&
                          c &&
                          s.$$route === c.$$route &&
                          (!s.reloadOnUrl || (!s.reloadOnSearch && t.equals(s.pathParams, c.pathParams)))) ||
                          (!l && !h) ||
                          (n.$broadcast("$routeChangeStart", h, l).defaultPrevented && r && r.preventDefault());
                    }
                    function y() {
                      var e = m.current,
                        i = h;
                      if (p) (e.params = i.params), t.copy(e.params, r), n.$broadcast("$routeUpdate", e);
                      else if (i || e) {
                        (v = !1), (m.current = i);
                        var s = o.resolve(i);
                        f.$$incOutstandingRequestCount("$route"),
                          s
                            .then(_)
                            .then($)
                            .then(function (o) {
                              return (
                                o &&
                                s.then(b).then(function (o) {
                                  i === m.current &&
                                    (i && ((i.locals = o), t.copy(i.params, r)), n.$broadcast("$routeChangeSuccess", i, e));
                                })
                              );
                            })
                            .catch(function (t) {
                              i === m.current && n.$broadcast("$routeChangeError", i, e, t);
                            })
                            .finally(function () {
                              f.$$completeOutstandingRequest(a, "$route");
                            });
                      }
                    }
                    function _(e) {
                      var n = { route: e, hasRedirection: !1 };
                      if (e)
                        if (e.redirectTo)
                          if (t.isString(e.redirectTo))
                            (n.path = C(e.redirectTo, e.params)), (n.search = e.params), (n.hasRedirection = !0);
                          else {
                            var r = i.path(),
                              a = i.search(),
                              u = e.redirectTo(e.pathParams, r, a);
                            t.isDefined(u) && ((n.url = u), (n.hasRedirection = !0));
                          }
                        else if (e.resolveRedirectTo)
                          return o.resolve(s.invoke(e.resolveRedirectTo)).then(function (e) {
                            return t.isDefined(e) && ((n.url = e), (n.hasRedirection = !0)), n;
                          });
                      return n;
                    }
                    function $(e) {
                      var t = !0;
                      if (e.route !== m.current) t = !1;
                      else if (e.hasRedirection) {
                        var n = i.url(),
                          r = e.url;
                        r ? i.url(r).replace() : (r = i.path(e.path).search(e.search).replace().url()), r !== n && (t = !1);
                      }
                      return t;
                    }
                    function b(e) {
                      if (e) {
                        var n = t.extend({}, e.resolve);
                        t.forEach(n, function (e, i) {
                          n[i] = t.isString(e) ? s.get(e) : s.invoke(e, null, null, i);
                        });
                        var i = (function (e) {
                          var n, i;
                          t.isDefined((n = e.template))
                            ? t.isFunction(n) && (n = n(e.params))
                            : t.isDefined((i = e.templateUrl)) &&
                              (t.isFunction(i) && (i = i(e.params)), t.isDefined(i) && ((e.loadedTemplateUrl = d.valueOf(i)), (n = l(i))));
                          return n;
                        })(e);
                        return t.isDefined(i) && (n.$template = i), o.all(n);
                      }
                    }
                    function C(e, n) {
                      var i = [];
                      return (
                        t.forEach((e || "").split(":"), function (e, t) {
                          if (0 === t) i.push(e);
                          else {
                            var r = e.match(/(\w+)(?:[?*])?(.*)/),
                              o = r[1];
                            i.push(n[o]), i.push(r[2] || ""), delete n[o];
                          }
                        }),
                        i.join("")
                      );
                    }
                  }
                ]);
            })
            .run(l),
          c = t.$$minErr("ngRoute");
        function l(e) {
          s && e.get("$route");
        }
        function d(e, n, i) {
          return {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            link: function (r, o, a, s, u) {
              var c,
                l,
                d,
                f = a.autoscroll,
                h = a.onload || "";
              function p() {
                d && (i.cancel(d), (d = null)),
                  c && (c.$destroy(), (c = null)),
                  l &&
                    ((d = i.leave(l)).done(function (e) {
                      !1 !== e && (d = null);
                    }),
                    (l = null));
              }
              function v() {
                var a = e.current && e.current.locals,
                  s = a && a.$template;
                if (t.isDefined(s)) {
                  var d = r.$new(),
                    v = e.current,
                    m = u(d, function (e) {
                      i.enter(e, null, l || o).done(function (e) {
                        !1 === e || !t.isDefined(f) || (f && !r.$eval(f)) || n();
                      }),
                        p();
                    });
                  (l = m), (c = v.scope = d).$emit("$viewContentLoaded"), c.$eval(h);
                } else p();
              }
              r.$on("$routeChangeSuccess", v), v();
            }
          };
        }
        function f(e, t, n) {
          return {
            restrict: "ECA",
            priority: -400,
            link: function (i, r) {
              var o = n.current,
                a = o.locals;
              r.html(a.$template);
              var s = e(r.contents());
              if (o.controller) {
                a.$scope = i;
                var u = t(o.controller, a);
                o.controllerAs && (i[o.controllerAs] = u),
                  r.data("$ngControllerController", u),
                  r.children().data("$ngControllerController", u);
              }
              (i[o.resolveAs || "$resolve"] = a), s(i);
            }
          };
        }
        (l.$inject = ["$injector"]),
          u.provider("$routeParams", function () {
            this.$get = function () {
              return {};
            };
          }),
          u.directive("ngView", d),
          u.directive("ngView", f),
          (d.$inject = ["$route", "$anchorScroll", "$animate"]),
          (f.$inject = ["$compile", "$controller", "$route"]);
      })(window, window.angular);
    },
    8944: (e, t, n) => {
      n(7827), (e.exports = "ngRoute");
    },
    4426: () => {
      !(function (e) {
        "use strict";
        var t = { objectMaxDepth: 5, urlErrorParamsEnabled: !0 };
        function n(e) {
          if (!U(e)) return t;
          F(e.objectMaxDepth) && (t.objectMaxDepth = i(e.objectMaxDepth) ? e.objectMaxDepth : NaN),
            F(e.urlErrorParamsEnabled) && J(e.urlErrorParamsEnabled) && (t.urlErrorParamsEnabled = e.urlErrorParamsEnabled);
        }
        function i(e) {
          return V(e) && e > 0;
        }
        function r(e, n) {
          n = n || Error;
          var i = "https://errors.angularjs.org/1.8.0/",
            r = i.replace(".", "\\.") + "[\\s\\S]*",
            o = new RegExp(r, "g");
          return function () {
            var r,
              a,
              s = arguments[0],
              u = arguments[1],
              c = "[" + (e ? e + ":" : "") + s + "] ",
              l = fe(arguments, 2).map(function (e) {
                return Ge(e, t.objectMaxDepth);
              });
            if (
              ((c += u.replace(/\{\d+\}/g, function (e) {
                var t = +e.slice(1, -1);
                return t < l.length ? l[t].replace(o, "") : e;
              })),
              (c += "\n" + i + (e ? e + "/" : "") + s),
              t.urlErrorParamsEnabled)
            )
              for (a = 0, r = "?"; a < l.length; a++, r = "&") c += r + "p" + a + "=" + encodeURIComponent(l[a]);
            return new n(c);
          };
        }
        var o,
          a,
          s,
          u,
          c = /^\/(.+)\/([a-z]*)$/,
          l = "validity",
          d = Object.prototype.hasOwnProperty,
          f = function (e) {
            return W(e) ? e.toLowerCase() : e;
          },
          h = function (e) {
            return W(e) ? e.toUpperCase() : e;
          },
          p = [].slice,
          v = [].splice,
          m = [].push,
          g = Object.prototype.toString,
          y = Object.getPrototypeOf,
          _ = r("ng"),
          $ = e.angular || (e.angular = {}),
          b = 0;
        function C(e) {
          if (null == e || Z(e)) return !1;
          if (q(e) || W(e) || (a && e instanceof a)) return !0;
          var t = "length" in Object(e) && e.length;
          return V(t) && ((t >= 0 && t - 1 in e) || "function" == typeof e.item);
        }
        function w(e, t, n) {
          var i, r;
          if (e)
            if (K(e)) for (i in e) "prototype" !== i && "length" !== i && "name" !== i && e.hasOwnProperty(i) && t.call(n, e[i], i, e);
            else if (q(e) || C(e)) {
              var o = "object" != typeof e;
              for (i = 0, r = e.length; i < r; i++) (o || i in e) && t.call(n, e[i], i, e);
            } else if (e.forEach && e.forEach !== w) e.forEach(t, n, e);
            else if (j(e)) for (i in e) t.call(n, e[i], i, e);
            else if ("function" == typeof e.hasOwnProperty) for (i in e) e.hasOwnProperty(i) && t.call(n, e[i], i, e);
            else for (i in e) d.call(e, i) && t.call(n, e[i], i, e);
          return e;
        }
        function S(e, t, n) {
          for (var i = Object.keys(e).sort(), r = 0; r < i.length; r++) t.call(n, e[i[r]], i[r]);
          return i;
        }
        function x(e) {
          return function (t, n) {
            e(n, t);
          };
        }
        function T() {
          return ++b;
        }
        function E(e, t) {
          t ? (e.$$hashKey = t) : delete e.$$hashKey;
        }
        function k(e, t, n) {
          for (var i = e.$$hashKey, r = 0, o = t.length; r < o; ++r) {
            var a = t[r];
            if (U(a) || K(a))
              for (var s = Object.keys(a), u = 0, c = s.length; u < c; u++) {
                var l = s[u],
                  d = a[l];
                n && U(d)
                  ? H(d)
                    ? (e[l] = new Date(d.valueOf()))
                    : G(d)
                    ? (e[l] = new RegExp(d))
                    : d.nodeName
                    ? (e[l] = d.cloneNode(!0))
                    : ne(d)
                    ? (e[l] = d.clone())
                    : "__proto__" !== l && (U(e[l]) || (e[l] = q(d) ? [] : {}), k(e[l], [d], !0))
                  : (e[l] = d);
              }
          }
          return E(e, i), e;
        }
        function A(e) {
          return k(e, p.call(arguments, 1), !1);
        }
        function P(e) {
          return k(e, p.call(arguments, 1), !0);
        }
        function O(e) {
          return parseInt(e, 10);
        }
        o = e.document.documentMode;
        var M =
          Number.isNaN ||
          function (e) {
            return e != e;
          };
        function L(e, t) {
          return A(Object.create(e), t);
        }
        function I() {}
        function D(e) {
          return e;
        }
        function B(e) {
          return function () {
            return e;
          };
        }
        function R(e) {
          return K(e.toString) && e.toString !== g;
        }
        function N(e) {
          return void 0 === e;
        }
        function F(e) {
          return void 0 !== e;
        }
        function U(e) {
          return null !== e && "object" == typeof e;
        }
        function j(e) {
          return null !== e && "object" == typeof e && !y(e);
        }
        function W(e) {
          return "string" == typeof e;
        }
        function V(e) {
          return "number" == typeof e;
        }
        function H(e) {
          return "[object Date]" === g.call(e);
        }
        function q(e) {
          return Array.isArray(e) || e instanceof Array;
        }
        function z(e) {
          switch (g.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
              return !0;
            default:
              return e instanceof Error;
          }
        }
        function K(e) {
          return "function" == typeof e;
        }
        function G(e) {
          return "[object RegExp]" === g.call(e);
        }
        function Z(e) {
          return e && e.window === e;
        }
        function Q(e) {
          return e && e.$evalAsync && e.$watch;
        }
        function J(e) {
          return "boolean" == typeof e;
        }
        function Y(e) {
          return e && K(e.then);
        }
        (I.$inject = []), (D.$inject = []);
        var X = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/;
        var ee = function (e) {
            return W(e) ? e.trim() : e;
          },
          te = function (e) {
            return e.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
          };
        function ne(e) {
          return !(!e || !(e.nodeName || (e.prop && e.attr && e.find)));
        }
        function ie(e) {
          return f(e.nodeName || (e[0] && e[0].nodeName));
        }
        function re(e, t) {
          return -1 !== Array.prototype.indexOf.call(e, t);
        }
        function oe(e, t) {
          var n = e.indexOf(t);
          return n >= 0 && e.splice(n, 1), n;
        }
        function ae(e, t, n) {
          var r,
            o,
            a = [],
            s = [];
          if (((n = i(n) ? n : NaN), t)) {
            if (((o = t) && V(o.length) && X.test(g.call(o))) || ((r = t), "[object ArrayBuffer]" === g.call(r)))
              throw _("cpta", "Can't copy! TypedArray destination cannot be mutated.");
            if (e === t) throw _("cpi", "Can't copy! Source and destination are identical.");
            return (
              q(t)
                ? (t.length = 0)
                : w(t, function (e, n) {
                    "$$hashKey" !== n && delete t[n];
                  }),
              a.push(e),
              s.push(t),
              u(e, t, n)
            );
          }
          return c(e, n);
          function u(e, t, n) {
            if (--n < 0) return "...";
            var i,
              r = t.$$hashKey;
            if (q(e)) for (var o = 0, a = e.length; o < a; o++) t.push(c(e[o], n));
            else if (j(e)) for (i in e) t[i] = c(e[i], n);
            else if (e && "function" == typeof e.hasOwnProperty) for (i in e) e.hasOwnProperty(i) && (t[i] = c(e[i], n));
            else for (i in e) d.call(e, i) && (t[i] = c(e[i], n));
            return E(t, r), t;
          }
          function c(e, t) {
            if (!U(e)) return e;
            var n = a.indexOf(e);
            if (-1 !== n) return s[n];
            if (Z(e) || Q(e)) throw _("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
            var i = !1,
              r = (function (e) {
                switch (g.call(e)) {
                  case "[object Int8Array]":
                  case "[object Int16Array]":
                  case "[object Int32Array]":
                  case "[object Float32Array]":
                  case "[object Float64Array]":
                  case "[object Uint8Array]":
                  case "[object Uint8ClampedArray]":
                  case "[object Uint16Array]":
                  case "[object Uint32Array]":
                    return new e.constructor(c(e.buffer), e.byteOffset, e.length);
                  case "[object ArrayBuffer]":
                    if (!e.slice) {
                      var t = new ArrayBuffer(e.byteLength);
                      return new Uint8Array(t).set(new Uint8Array(e)), t;
                    }
                    return e.slice(0);
                  case "[object Boolean]":
                  case "[object Number]":
                  case "[object String]":
                  case "[object Date]":
                    return new e.constructor(e.valueOf());
                  case "[object RegExp]":
                    var n = new RegExp(e.source, e.toString().match(/[^/]*$/)[0]);
                    return (n.lastIndex = e.lastIndex), n;
                  case "[object Blob]":
                    return new e.constructor([e], { type: e.type });
                }
                if (K(e.cloneNode)) return e.cloneNode(!0);
              })(e);
            return void 0 === r && ((r = q(e) ? [] : Object.create(y(e))), (i = !0)), a.push(e), s.push(r), i ? u(e, r, t) : r;
          }
        }
        function se(e, t) {
          return e === t || (e != e && t != t);
        }
        function ue(e, t) {
          if (e === t) return !0;
          if (null === e || null === t) return !1;
          if (e != e && t != t) return !0;
          var n,
            i,
            r,
            o = typeof e;
          if (o === typeof t && "object" === o) {
            if (!q(e)) {
              if (H(e)) return !!H(t) && se(e.getTime(), t.getTime());
              if (G(e)) return !!G(t) && e.toString() === t.toString();
              if (Q(e) || Q(t) || Z(e) || Z(t) || q(t) || H(t) || G(t)) return !1;
              for (i in ((r = Ue()), e))
                if ("$" !== i.charAt(0) && !K(e[i])) {
                  if (!ue(e[i], t[i])) return !1;
                  r[i] = !0;
                }
              for (i in t) if (!(i in r) && "$" !== i.charAt(0) && F(t[i]) && !K(t[i])) return !1;
              return !0;
            }
            if (!q(t)) return !1;
            if ((n = e.length) === t.length) {
              for (i = 0; i < n; i++) if (!ue(e[i], t[i])) return !1;
              return !0;
            }
          }
          return !1;
        }
        var ce = function () {
            if (!F(ce.rules)) {
              var t = e.document.querySelector("[ng-csp]") || e.document.querySelector("[data-ng-csp]");
              if (t) {
                var n = t.getAttribute("ng-csp") || t.getAttribute("data-ng-csp");
                ce.rules = {
                  noUnsafeEval: !n || -1 !== n.indexOf("no-unsafe-eval"),
                  noInlineStyle: !n || -1 !== n.indexOf("no-inline-style")
                };
              } else
                ce.rules = {
                  noUnsafeEval: (function () {
                    try {
                      return new Function(""), !1;
                    } catch (e) {
                      return !0;
                    }
                  })(),
                  noInlineStyle: !1
                };
            }
            return ce.rules;
          },
          le = function () {
            if (F(le.name_)) return le.name_;
            var t,
              n,
              i,
              r,
              o = Te.length;
            for (n = 0; n < o; ++n)
              if (((i = Te[n]), (t = e.document.querySelector("[" + i.replace(":", "\\:") + "jq]")))) {
                r = t.getAttribute(i + "jq");
                break;
              }
            return (le.name_ = r);
          };
        function de(e, t, n) {
          return e.concat(p.call(t, n));
        }
        function fe(e, t) {
          return p.call(e, t || 0);
        }
        function he(e, t) {
          var n = arguments.length > 2 ? fe(arguments, 2) : [];
          return !K(t) || t instanceof RegExp
            ? t
            : n.length
            ? function () {
                return arguments.length ? t.apply(e, de(n, arguments, 0)) : t.apply(e, n);
              }
            : function () {
                return arguments.length ? t.apply(e, arguments) : t.call(e);
              };
        }
        function pe(t, n) {
          var i = n;
          return (
            "string" == typeof t && "$" === t.charAt(0) && "$" === t.charAt(1)
              ? (i = void 0)
              : Z(n)
              ? (i = "$WINDOW")
              : n && e.document === n
              ? (i = "$DOCUMENT")
              : Q(n) && (i = "$SCOPE"),
            i
          );
        }
        function ve(e, t) {
          if (!N(e)) return V(t) || (t = t ? 2 : null), JSON.stringify(e, pe, t);
        }
        function me(e) {
          return W(e) ? JSON.parse(e) : e;
        }
        var ge = /:/g;
        function ye(e, t) {
          e = e.replace(ge, "");
          var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
          return M(n) ? t : n;
        }
        function _e(e, t) {
          return (e = new Date(e.getTime())).setMinutes(e.getMinutes() + t), e;
        }
        function $e(e, t, n) {
          n = n ? -1 : 1;
          var i = e.getTimezoneOffset();
          return _e(e, n * (ye(t, i) - i));
        }
        function be(e) {
          e = a(e).clone().empty();
          var t = a("<div></div>").append(e).html();
          try {
            return e[0].nodeType === Ve
              ? f(t)
              : t.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function (e, t) {
                  return "<" + f(t);
                });
          } catch (e) {
            return f(t);
          }
        }
        function Ce(e) {
          try {
            return decodeURIComponent(e);
          } catch (e) {}
        }
        function we(e) {
          var t = {};
          return (
            w((e || "").split("&"), function (e) {
              var n, i, r;
              e &&
                ((i = e = e.replace(/\+/g, "%20")),
                -1 !== (n = e.indexOf("=")) && ((i = e.substring(0, n)), (r = e.substring(n + 1))),
                F((i = Ce(i))) && ((r = !F(r) || Ce(r)), d.call(t, i) ? (q(t[i]) ? t[i].push(r) : (t[i] = [t[i], r])) : (t[i] = r)));
            }),
            t
          );
        }
        function Se(e) {
          return xe(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
        }
        function xe(e, t) {
          return encodeURIComponent(e)
            .replace(/%40/gi, "@")
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",")
            .replace(/%3B/gi, ";")
            .replace(/%20/g, t ? "%20" : "+");
        }
        var Te = ["ng-", "data-ng-", "ng:", "x-ng-"];
        var Ee = (function (t) {
          var n = t.currentScript;
          if (!n) return !0;
          if (!(n instanceof e.HTMLScriptElement || n instanceof e.SVGScriptElement)) return !1;
          var i = n.attributes;
          return [i.getNamedItem("src"), i.getNamedItem("href"), i.getNamedItem("xlink:href")].every(function (e) {
            if (!e) return !0;
            if (!e.value) return !1;
            var n = t.createElement("a");
            if (((n.href = e.value), t.location.origin === n.origin)) return !0;
            switch (n.protocol) {
              case "http:":
              case "https:":
              case "ftp:":
              case "blob:":
              case "file:":
              case "data:":
                return !0;
              default:
                return !1;
            }
          });
        })(e.document);
        function ke(t, n) {
          var i,
            r,
            o = {};
          if (
            (w(Te, function (e) {
              var n = e + "app";
              !i && t.hasAttribute && t.hasAttribute(n) && ((i = t), (r = t.getAttribute(n)));
            }),
            w(Te, function (e) {
              var n,
                o = e + "app";
              !i && (n = t.querySelector("[" + o.replace(":", "\\:") + "]")) && ((i = n), (r = n.getAttribute(o)));
            }),
            i)
          ) {
            if (!Ee)
              return void e.console.error(
                "AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."
              );
            (o.strictDi =
              null !==
              (function (e, t) {
                var n,
                  i,
                  r = Te.length;
                for (i = 0; i < r; ++i) if (((n = Te[i] + t), W((n = e.getAttribute(n))))) return n;
                return null;
              })(i, "strict-di")),
              n(i, r ? [r] : [], o);
          }
        }
        function Ae(t, n, i) {
          U(i) || (i = {});
          i = A({ strictDi: !1 }, i);
          var r = function () {
              if ((t = a(t)).injector()) {
                var r = t[0] === e.document ? "document" : be(t);
                throw _("btstrpd", "App already bootstrapped with this element '{0}'", r.replace(/</, "&lt;").replace(/>/, "&gt;"));
              }
              (n = n || []).unshift([
                "$provide",
                function (e) {
                  e.value("$rootElement", t);
                }
              ]),
                i.debugInfoEnabled &&
                  n.push([
                    "$compileProvider",
                    function (e) {
                      e.debugInfoEnabled(!0);
                    }
                  ]),
                n.unshift("ng");
              var o = nn(n, i.strictDi);
              return (
                o.invoke([
                  "$rootScope",
                  "$rootElement",
                  "$compile",
                  "$injector",
                  function (e, t, n, i) {
                    e.$apply(function () {
                      t.data("$injector", i), n(t)(e);
                    });
                  }
                ]),
                o
              );
            },
            o = /^NG_ENABLE_DEBUG_INFO!/,
            s = /^NG_DEFER_BOOTSTRAP!/;
          if ((e && o.test(e.name) && ((i.debugInfoEnabled = !0), (e.name = e.name.replace(o, ""))), e && !s.test(e.name))) return r();
          (e.name = e.name.replace(s, "")),
            ($.resumeBootstrap = function (e) {
              return (
                w(e, function (e) {
                  n.push(e);
                }),
                r()
              );
            }),
            K($.resumeDeferredBootstrap) && $.resumeDeferredBootstrap();
        }
        function Pe() {
          (e.name = "NG_ENABLE_DEBUG_INFO!" + e.name), e.location.reload();
        }
        function Oe(e) {
          var t = $.element(e).injector();
          if (!t) throw _("test", "no injector found for element argument to getTestability");
          return t.get("$$testability");
        }
        var Me = /[A-Z]/g;
        function Le(e, t) {
          return (
            (t = t || "_"),
            e.replace(Me, function (e, n) {
              return (n ? t : "") + e.toLowerCase();
            })
          );
        }
        var Ie = !1;
        function De() {
          gt.legacyXHTMLReplacement = !0;
        }
        function Be(e, t, n) {
          if (!e) throw _("areq", "Argument '{0}' is {1}", t || "?", n || "required");
          return e;
        }
        function Re(e, t, n) {
          return (
            n && q(e) && (e = e[e.length - 1]),
            Be(K(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)),
            e
          );
        }
        function Ne(e, t) {
          if ("hasOwnProperty" === e) throw _("badname", "hasOwnProperty is not a valid {0} name", t);
        }
        function Fe(e) {
          for (var t, n = e[0], i = e[e.length - 1], r = 1; n !== i && (n = n.nextSibling); r++)
            (t || e[r] !== n) && (t || (t = a(p.call(e, 0, r))), t.push(n));
          return t || e;
        }
        function Ue() {
          return Object.create(null);
        }
        function je(e) {
          if (null == e) return "";
          switch (typeof e) {
            case "string":
              break;
            case "number":
              e = "" + e;
              break;
            default:
              e = !R(e) || q(e) || H(e) ? ve(e) : e.toString();
          }
          return e;
        }
        var We = 1,
          Ve = 3,
          He = 8,
          qe = 9,
          ze = 11;
        function Ke(e, t) {
          if (q(e)) {
            t = t || [];
            for (var n = 0, i = e.length; n < i; n++) t[n] = e[n];
          } else if (U(e)) for (var r in ((t = t || {}), e)) ("$" === r.charAt(0) && "$" === r.charAt(1)) || (t[r] = e[r]);
          return t || e;
        }
        function Ge(e, t) {
          return "function" == typeof e
            ? e.toString().replace(/ \{[\s\S]*$/, "")
            : N(e)
            ? "undefined"
            : "string" != typeof e
            ? (function (e, t) {
                var n = [];
                return (
                  i(t) && (e = $.copy(e, null, t)),
                  JSON.stringify(e, function (e, t) {
                    if (U((t = pe(e, t)))) {
                      if (n.indexOf(t) >= 0) return "...";
                      n.push(t);
                    }
                    return t;
                  })
                );
              })(e, t)
            : e;
        }
        var Ze = { full: "1.8.0", major: 1, minor: 8, dot: 0, codeName: "nested-vaccination" };
        gt.expando = "ng339";
        var Qe = (gt.cache = {}),
          Je = 1;
        gt._data = function (e) {
          return this.cache[e[this.expando]] || {};
        };
        var Ye = /-([a-z])/g,
          Xe = /^-ms-/,
          et = { mouseleave: "mouseout", mouseenter: "mouseover" },
          tt = r("jqLite");
        function nt(e, t) {
          return t.toUpperCase();
        }
        function it(e) {
          return e.replace(Ye, nt);
        }
        var rt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
          ot = /<|&#?\w+;/,
          at = /<([\w:-]+)/,
          st = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
          ut = { thead: ["table"], col: ["colgroup", "table"], tr: ["tbody", "table"], td: ["tr", "tbody", "table"] };
        (ut.tbody = ut.tfoot = ut.colgroup = ut.caption = ut.thead), (ut.th = ut.td);
        var ct = { option: [1, '<select multiple="multiple">', "</select>"], _default: [0, "", ""] };
        for (var lt in ut) {
          var dt = ut[lt],
            ft = dt.slice().reverse();
          ct[lt] = [ft.length, "<" + ft.join("><") + ">", "</" + dt.join("></") + ">"];
        }
        function ht(e) {
          return !ot.test(e);
        }
        function pt(e) {
          var t = e.nodeType;
          return t === We || !t || t === qe;
        }
        function vt(t, n) {
          var i,
            r,
            a,
            s,
            u,
            c = n.createDocumentFragment(),
            l = [];
          if (ht(t)) l.push(n.createTextNode(t));
          else {
            if (
              ((i = c.appendChild(n.createElement("div"))),
              (r = (at.exec(t) || ["", ""])[1].toLowerCase()),
              (s = gt.legacyXHTMLReplacement ? t.replace(st, "<$1></$2>") : t),
              o < 10)
            )
              for (a = ct[r] || ct._default, i.innerHTML = a[1] + s + a[2], u = a[0]; u--; ) i = i.firstChild;
            else {
              for (u = (a = ut[r] || []).length; --u > -1; ) i.appendChild(e.document.createElement(a[u])), (i = i.firstChild);
              i.innerHTML = s;
            }
            (l = de(l, i.childNodes)), ((i = c.firstChild).textContent = "");
          }
          return (
            (c.textContent = ""),
            (c.innerHTML = ""),
            w(l, function (e) {
              c.appendChild(e);
            }),
            c
          );
        }
        ct.optgroup = ct.option;
        var mt =
          e.Node.prototype.contains ||
          function (e) {
            return !!(16 & this.compareDocumentPosition(e));
          };
        function gt(t) {
          if (t instanceof gt) return t;
          var n, i, r, o;
          if ((W(t) && ((t = ee(t)), (n = !0)), !(this instanceof gt))) {
            if (n && "<" !== t.charAt(0))
              throw tt(
                "nosel",
                "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element"
              );
            return new gt(t);
          }
          n
            ? At(this, ((i = t), (r = r || e.document), (o = rt.exec(i)) ? [r.createElement(o[1])] : (o = vt(i, r)) ? o.childNodes : []))
            : K(t)
            ? It(t)
            : At(this, t);
        }
        function yt(e) {
          return e.cloneNode(!0);
        }
        function _t(e, t) {
          !t && pt(e) && a.cleanData([e]), e.querySelectorAll && a.cleanData(e.querySelectorAll("*"));
        }
        function $t(e) {
          var t;
          for (t in e) return !1;
          return !0;
        }
        function bt(e) {
          var t = e.ng339,
            n = t && Qe[t],
            i = n && n.events,
            r = n && n.data;
          (r && !$t(r)) || (i && !$t(i)) || (delete Qe[t], (e.ng339 = void 0));
        }
        function Ct(e, t, n, i) {
          if (F(i)) throw tt("offargs", "jqLite#off() does not support the `selector` argument");
          var r = St(e),
            o = r && r.events,
            a = r && r.handle;
          if (a) {
            if (t) {
              var s = function (t) {
                var i = o[t];
                F(n) && oe(i || [], n), (F(n) && i && i.length > 0) || (e.removeEventListener(t, a), delete o[t]);
              };
              w(t.split(" "), function (e) {
                s(e), et[e] && s(et[e]);
              });
            } else for (t in o) "$destroy" !== t && e.removeEventListener(t, a), delete o[t];
            bt(e);
          }
        }
        function wt(e, t) {
          var n = e.ng339,
            i = n && Qe[n];
          i && (t ? delete i.data[t] : (i.data = {}), bt(e));
        }
        function St(e, t) {
          var n = e.ng339,
            i = n && Qe[n];
          return t && !i && ((e.ng339 = n = ++Je), (i = Qe[n] = { events: {}, data: {}, handle: void 0 })), i;
        }
        function xt(e, t, n) {
          if (pt(e)) {
            var i,
              r = F(n),
              o = !r && t && !U(t),
              a = !t,
              s = St(e, !o),
              u = s && s.data;
            if (r) u[it(t)] = n;
            else {
              if (a) return u;
              if (o) return u && u[it(t)];
              for (i in t) u[it(i)] = t[i];
            }
          }
        }
        function Tt(e, t) {
          return !!e.getAttribute && (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") > -1;
        }
        function Et(e, t) {
          if (t && e.setAttribute) {
            var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " "),
              i = n;
            w(t.split(" "), function (e) {
              (e = ee(e)), (i = i.replace(" " + e + " ", " "));
            }),
              i !== n && e.setAttribute("class", ee(i));
          }
        }
        function kt(e, t) {
          if (t && e.setAttribute) {
            var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " "),
              i = n;
            w(t.split(" "), function (e) {
              (e = ee(e)), -1 === i.indexOf(" " + e + " ") && (i += e + " ");
            }),
              i !== n && e.setAttribute("class", ee(i));
          }
        }
        function At(e, t) {
          if (t)
            if (t.nodeType) e[e.length++] = t;
            else {
              var n = t.length;
              if ("number" == typeof n && t.window !== t) {
                if (n) for (var i = 0; i < n; i++) e[e.length++] = t[i];
              } else e[e.length++] = t;
            }
        }
        function Pt(e, t) {
          return Ot(e, "$" + (t || "ngController") + "Controller");
        }
        function Ot(e, t, n) {
          e.nodeType === qe && (e = e.documentElement);
          for (var i = q(t) ? t : [t]; e; ) {
            for (var r = 0, o = i.length; r < o; r++) if (F((n = a.data(e, i[r])))) return n;
            e = e.parentNode || (e.nodeType === ze && e.host);
          }
        }
        function Mt(e) {
          for (_t(e, !0); e.firstChild; ) e.removeChild(e.firstChild);
        }
        function Lt(e, t) {
          t || _t(e);
          var n = e.parentNode;
          n && n.removeChild(e);
        }
        function It(t) {
          function n() {
            e.document.removeEventListener("DOMContentLoaded", n), e.removeEventListener("load", n), t();
          }
          "complete" === e.document.readyState
            ? e.setTimeout(t)
            : (e.document.addEventListener("DOMContentLoaded", n), e.addEventListener("load", n));
        }
        var Dt = (gt.prototype = {
            ready: It,
            toString: function () {
              var e = [];
              return (
                w(this, function (t) {
                  e.push("" + t);
                }),
                "[" + e.join(", ") + "]"
              );
            },
            eq: function (e) {
              return a(e >= 0 ? this[e] : this[this.length + e]);
            },
            length: 0,
            push: m,
            sort: [].sort,
            splice: [].splice
          }),
          Bt = {};
        w("multiple,selected,checked,disabled,readOnly,required,open".split(","), function (e) {
          Bt[f(e)] = e;
        });
        var Rt = {};
        w("input,select,option,textarea,button,form,details".split(","), function (e) {
          Rt[e] = !0;
        });
        var Nt = { ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern", ngStep: "step" };
        function Ft(e, t) {
          var n = Bt[t.toLowerCase()];
          return n && Rt[ie(e)] && n;
        }
        function Ut(e, t, n) {
          n.call(e, t);
        }
        function jt(e, t, n) {
          var i = t.relatedTarget;
          (i && (i === e || mt.call(e, i))) || n.call(e, t);
        }
        function Wt() {
          this.$get = function () {
            return A(gt, {
              hasClass: function (e, t) {
                return e.attr && (e = e[0]), Tt(e, t);
              },
              addClass: function (e, t) {
                return e.attr && (e = e[0]), kt(e, t);
              },
              removeClass: function (e, t) {
                return e.attr && (e = e[0]), Et(e, t);
              }
            });
          };
        }
        function Vt(e, t) {
          var n = e && e.$$hashKey;
          if (n) return "function" == typeof n && (n = e.$$hashKey()), n;
          var i = typeof e;
          return (n = "function" === i || ("object" === i && null !== e) ? (e.$$hashKey = i + ":" + (t || T)()) : i + ":" + e);
        }
        w(
          {
            data: xt,
            removeData: wt,
            hasData: function (e) {
              for (var t in Qe[e.ng339]) return !0;
              return !1;
            },
            cleanData: function (e) {
              for (var t = 0, n = e.length; t < n; t++) wt(e[t]), Ct(e[t]);
            }
          },
          function (e, t) {
            gt[t] = e;
          }
        ),
          w(
            {
              data: xt,
              inheritedData: Ot,
              scope: function (e) {
                return a.data(e, "$scope") || Ot(e.parentNode || e, ["$isolateScope", "$scope"]);
              },
              isolateScope: function (e) {
                return a.data(e, "$isolateScope") || a.data(e, "$isolateScopeNoTemplate");
              },
              controller: Pt,
              injector: function (e) {
                return Ot(e, "$injector");
              },
              removeAttr: function (e, t) {
                e.removeAttribute(t);
              },
              hasClass: Tt,
              css: function (e, t, n) {
                if (
                  ((t = (function (e) {
                    return it(e.replace(Xe, "ms-"));
                  })(t)),
                  !F(n))
                )
                  return e.style[t];
                e.style[t] = n;
              },
              attr: function (e, t, n) {
                var i,
                  r = e.nodeType;
                if (r !== Ve && 2 !== r && r !== He && e.getAttribute) {
                  var o = f(t),
                    a = Bt[o];
                  if (!F(n)) return (i = e.getAttribute(t)), a && null !== i && (i = o), null === i ? void 0 : i;
                  null === n || (!1 === n && a) ? e.removeAttribute(t) : e.setAttribute(t, a ? o : n);
                }
              },
              prop: function (e, t, n) {
                if (!F(n)) return e[t];
                e[t] = n;
              },
              text: (function () {
                return (e.$dv = ""), e;
                function e(e, t) {
                  if (N(t)) {
                    var n = e.nodeType;
                    return n === We || n === Ve ? e.textContent : "";
                  }
                  e.textContent = t;
                }
              })(),
              val: function (e, t) {
                if (N(t)) {
                  if (e.multiple && "select" === ie(e)) {
                    var n = [];
                    return (
                      w(e.options, function (e) {
                        e.selected && n.push(e.value || e.text);
                      }),
                      n
                    );
                  }
                  return e.value;
                }
                e.value = t;
              },
              html: function (e, t) {
                if (N(t)) return e.innerHTML;
                _t(e, !0), (e.innerHTML = t);
              },
              empty: Mt
            },
            function (e, t) {
              gt.prototype[t] = function (t, n) {
                var i,
                  r,
                  o = this.length;
                if (e !== Mt && N(2 === e.length && e !== Tt && e !== Pt ? t : n)) {
                  if (U(t)) {
                    for (i = 0; i < o; i++)
                      if (e === xt) e(this[i], t);
                      else for (r in t) e(this[i], r, t[r]);
                    return this;
                  }
                  for (var a = e.$dv, s = N(a) ? Math.min(o, 1) : o, u = 0; u < s; u++) {
                    var c = e(this[u], t, n);
                    a = a ? a + c : c;
                  }
                  return a;
                }
                for (i = 0; i < o; i++) e(this[i], t, n);
                return this;
              };
            }
          ),
          w(
            {
              removeData: wt,
              on: function (e, t, n, i) {
                if (F(i)) throw tt("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
                if (pt(e)) {
                  var r = St(e, !0),
                    o = r.events,
                    a = r.handle;
                  a ||
                    (a = r.handle =
                      (function (e, t) {
                        var n = function (n, i) {
                          n.isDefaultPrevented = function () {
                            return n.defaultPrevented;
                          };
                          var r = t[i || n.type],
                            o = r ? r.length : 0;
                          if (o) {
                            if (N(n.immediatePropagationStopped)) {
                              var a = n.stopImmediatePropagation;
                              n.stopImmediatePropagation = function () {
                                (n.immediatePropagationStopped = !0), n.stopPropagation && n.stopPropagation(), a && a.call(n);
                              };
                            }
                            n.isImmediatePropagationStopped = function () {
                              return !0 === n.immediatePropagationStopped;
                            };
                            var s = r.specialHandlerWrapper || Ut;
                            o > 1 && (r = Ke(r));
                            for (var u = 0; u < o; u++) n.isImmediatePropagationStopped() || s(e, n, r[u]);
                          }
                        };
                        return (n.elem = e), n;
                      })(e, o));
                  for (
                    var s = t.indexOf(" ") >= 0 ? t.split(" ") : [t],
                      u = s.length,
                      c = function (t, i, r) {
                        var s = o[t];
                        s || (((s = o[t] = []).specialHandlerWrapper = i), "$destroy" === t || r || e.addEventListener(t, a)), s.push(n);
                      };
                    u--;

                  )
                    (t = s[u]), et[t] ? (c(et[t], jt), c(t, void 0, !0)) : c(t);
                }
              },
              off: Ct,
              one: function (e, t, n) {
                (e = a(e)).on(t, function i() {
                  e.off(t, n), e.off(t, i);
                }),
                  e.on(t, n);
              },
              replaceWith: function (e, t) {
                var n,
                  i = e.parentNode;
                _t(e),
                  w(new gt(t), function (t) {
                    n ? i.insertBefore(t, n.nextSibling) : i.replaceChild(t, e), (n = t);
                  });
              },
              children: function (e) {
                var t = [];
                return (
                  w(e.childNodes, function (e) {
                    e.nodeType === We && t.push(e);
                  }),
                  t
                );
              },
              contents: function (e) {
                return e.contentDocument || e.childNodes || [];
              },
              append: function (e, t) {
                var n = e.nodeType;
                if (n === We || n === ze)
                  for (var i = 0, r = (t = new gt(t)).length; i < r; i++) {
                    var o = t[i];
                    e.appendChild(o);
                  }
              },
              prepend: function (e, t) {
                if (e.nodeType === We) {
                  var n = e.firstChild;
                  w(new gt(t), function (t) {
                    e.insertBefore(t, n);
                  });
                }
              },
              wrap: function (e, t) {
                var n, i, r;
                (n = e), (i = a(t).eq(0).clone()[0]), (r = n.parentNode) && r.replaceChild(i, n), i.appendChild(n);
              },
              remove: Lt,
              detach: function (e) {
                Lt(e, !0);
              },
              after: function (e, t) {
                var n = e,
                  i = e.parentNode;
                if (i)
                  for (var r = 0, o = (t = new gt(t)).length; r < o; r++) {
                    var a = t[r];
                    i.insertBefore(a, n.nextSibling), (n = a);
                  }
              },
              addClass: kt,
              removeClass: Et,
              toggleClass: function (e, t, n) {
                t &&
                  w(t.split(" "), function (t) {
                    var i = n;
                    N(i) && (i = !Tt(e, t)), (i ? kt : Et)(e, t);
                  });
              },
              parent: function (e) {
                var t = e.parentNode;
                return t && t.nodeType !== ze ? t : null;
              },
              next: function (e) {
                return e.nextElementSibling;
              },
              find: function (e, t) {
                return e.getElementsByTagName ? e.getElementsByTagName(t) : [];
              },
              clone: yt,
              triggerHandler: function (e, t, n) {
                var i,
                  r,
                  o,
                  a = t.type || t,
                  s = St(e),
                  u = s && s.events,
                  c = u && u[a];
                c &&
                  ((i = {
                    preventDefault: function () {
                      this.defaultPrevented = !0;
                    },
                    isDefaultPrevented: function () {
                      return !0 === this.defaultPrevented;
                    },
                    stopImmediatePropagation: function () {
                      this.immediatePropagationStopped = !0;
                    },
                    isImmediatePropagationStopped: function () {
                      return !0 === this.immediatePropagationStopped;
                    },
                    stopPropagation: I,
                    type: a,
                    target: e
                  }),
                  t.type && (i = A(i, t)),
                  (r = Ke(c)),
                  (o = n ? [i].concat(n) : [i]),
                  w(r, function (t) {
                    i.isImmediatePropagationStopped() || t.apply(e, o);
                  }));
              }
            },
            function (e, t) {
              gt.prototype[t] = function (t, n, i) {
                for (var r, o = 0, s = this.length; o < s; o++)
                  N(r) ? F((r = e(this[o], t, n, i))) && (r = a(r)) : At(r, e(this[o], t, n, i));
                return F(r) ? r : this;
              };
            }
          ),
          (gt.prototype.bind = gt.prototype.on),
          (gt.prototype.unbind = gt.prototype.off);
        var Ht = Object.create(null);
        function qt() {
          (this._keys = []), (this._values = []), (this._lastKey = NaN), (this._lastIndex = -1);
        }
        qt.prototype = {
          _idx: function (e) {
            return e !== this._lastKey && ((this._lastKey = e), (this._lastIndex = this._keys.indexOf(e))), this._lastIndex;
          },
          _transformKey: function (e) {
            return M(e) ? Ht : e;
          },
          get: function (e) {
            e = this._transformKey(e);
            var t = this._idx(e);
            if (-1 !== t) return this._values[t];
          },
          has: function (e) {
            return (e = this._transformKey(e)), -1 !== this._idx(e);
          },
          set: function (e, t) {
            e = this._transformKey(e);
            var n = this._idx(e);
            -1 === n && (n = this._lastIndex = this._keys.length), (this._keys[n] = e), (this._values[n] = t);
          },
          delete: function (e) {
            e = this._transformKey(e);
            var t = this._idx(e);
            return -1 !== t && (this._keys.splice(t, 1), this._values.splice(t, 1), (this._lastKey = NaN), (this._lastIndex = -1), !0);
          }
        };
        var zt = qt,
          Kt = [
            function () {
              this.$get = [
                function () {
                  return zt;
                }
              ];
            }
          ],
          Gt = /^([^(]+?)=>/,
          Zt = /^[^(]*\(\s*([^)]*)\)/m,
          Qt = /,/,
          Jt = /^\s*(_?)(\S+?)\1\s*$/,
          Yt = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
          Xt = r("$injector");
        function en(e) {
          return Function.prototype.toString.call(e);
        }
        function tn(e) {
          var t = en(e).replace(Yt, "");
          return t.match(Gt) || t.match(Zt);
        }
        function nn(e, t) {
          t = !0 === t;
          var n = {},
            i = "Provider",
            r = [],
            a = new zt(),
            s = {
              $provide: {
                provider: p(v),
                factory: p(g),
                service: p(function (e, t) {
                  return g(e, [
                    "$injector",
                    function (e) {
                      return e.instantiate(t);
                    }
                  ]);
                }),
                value: p(function (e, t) {
                  return g(e, B(t), !1);
                }),
                constant: p(function (e, t) {
                  Ne(e, "constant"), (s[e] = t), (l[e] = t);
                }),
                decorator: function (e, t) {
                  var n = c.get(e + i),
                    r = n.$get;
                  n.$get = function () {
                    var e = f.invoke(r, n);
                    return f.invoke(t, null, { $delegate: e });
                  };
                }
              }
            },
            c = (s.$injector = _(s, function (e, t) {
              throw ($.isString(t) && r.push(t), Xt("unpr", "Unknown provider: {0}", r.join(" <- ")));
            })),
            l = {},
            d = _(l, function (e, t) {
              var n = c.get(e + i, t);
              return f.invoke(n.$get, n, void 0, e);
            }),
            f = d;
          (s["$injector" + i] = { $get: B(d) }), (f.modules = c.modules = Ue());
          var h = y(e);
          return (
            ((f = d.get("$injector")).strictDi = t),
            w(h, function (e) {
              e && f.invoke(e);
            }),
            (f.loadNewModules = function (e) {
              w(y(e), function (e) {
                e && f.invoke(e);
              });
            }),
            f
          );
          function p(e) {
            return function (t, n) {
              if (!U(t)) return e(t, n);
              w(t, x(e));
            };
          }
          function v(e, t) {
            if ((Ne(e, "service"), (K(t) || q(t)) && (t = c.instantiate(t)), !t.$get))
              throw Xt("pget", "Provider '{0}' must define $get factory method.", e);
            return (s[e + i] = t);
          }
          function m(e, t) {
            return function () {
              var n = f.invoke(t, this);
              if (N(n)) throw Xt("undef", "Provider '{0}' must return a value from $get factory method.", e);
              return n;
            };
          }
          function g(e, t, n) {
            return v(e, { $get: !1 !== n ? m(e, t) : t });
          }
          function y(e) {
            Be(N(e) || q(e), "modulesToLoad", "not an array");
            var t,
              n = [];
            return (
              w(e, function (e) {
                if (!a.get(e)) {
                  a.set(e, !0);
                  try {
                    W(e)
                      ? ((t = u(e)),
                        (f.modules[e] = t),
                        (n = n.concat(y(t.requires)).concat(t._runBlocks)),
                        i(t._invokeQueue),
                        i(t._configBlocks))
                      : K(e) || q(e)
                      ? n.push(c.invoke(e))
                      : Re(e, "module");
                  } catch (t) {
                    throw (
                      (q(e) && (e = e[e.length - 1]),
                      t.message && t.stack && -1 === t.stack.indexOf(t.message) && (t = t.message + "\n" + t.stack),
                      Xt("modulerr", "Failed to instantiate module {0} due to:\n{1}", e, t.stack || t.message || t))
                    );
                  }
                }
                function i(e) {
                  var t, n;
                  for (t = 0, n = e.length; t < n; t++) {
                    var i = e[t],
                      r = c.get(i[0]);
                    r[i[1]].apply(r, i[2]);
                  }
                }
              }),
              n
            );
          }
          function _(e, a) {
            function u(t, i) {
              if (e.hasOwnProperty(t)) {
                if (e[t] === n) throw Xt("cdep", "Circular dependency found: {0}", t + " <- " + r.join(" <- "));
                return e[t];
              }
              try {
                return r.unshift(t), (e[t] = n), (e[t] = a(t, i)), e[t];
              } catch (i) {
                throw (e[t] === n && delete e[t], i);
              } finally {
                r.shift();
              }
            }
            function c(e, n, i) {
              for (var r = [], o = nn.$$annotate(e, t, i), a = 0, s = o.length; a < s; a++) {
                var c = o[a];
                if ("string" != typeof c) throw Xt("itkn", "Incorrect injection token! Expected service name as string, got {0}", c);
                r.push(n && n.hasOwnProperty(c) ? n[c] : u(c, i));
              }
              return r;
            }
            return {
              invoke: function (e, t, n, i) {
                "string" == typeof n && ((i = n), (n = null));
                var r = c(e, n, i);
                return (
                  q(e) && (e = e[e.length - 1]),
                  (function (e) {
                    if (o || "function" != typeof e) return !1;
                    var t = e.$$ngIsClass;
                    return J(t) || (t = e.$$ngIsClass = /^class\b/.test(en(e))), t;
                  })(e)
                    ? (r.unshift(null), new (Function.prototype.bind.apply(e, r))())
                    : e.apply(t, r)
                );
              },
              instantiate: function (e, t, n) {
                var i = q(e) ? e[e.length - 1] : e,
                  r = c(e, t, n);
                return r.unshift(null), new (Function.prototype.bind.apply(i, r))();
              },
              get: u,
              annotate: nn.$$annotate,
              has: function (t) {
                return s.hasOwnProperty(t + i) || e.hasOwnProperty(t);
              }
            };
          }
        }
        function rn() {
          var t = !0;
          (this.disableAutoScrolling = function () {
            t = !1;
          }),
            (this.$get = [
              "$window",
              "$location",
              "$rootScope",
              function (n, i, r) {
                var o = n.document;
                function s(e) {
                  if (e) {
                    e.scrollIntoView();
                    var t = (function () {
                      var e = u.yOffset;
                      if (K(e)) e = e();
                      else if (ne(e)) {
                        var t = e[0];
                        e = "fixed" !== n.getComputedStyle(t).position ? 0 : t.getBoundingClientRect().bottom;
                      } else V(e) || (e = 0);
                      return e;
                    })();
                    if (t) {
                      var i = e.getBoundingClientRect().top;
                      n.scrollBy(0, i - t);
                    }
                  } else n.scrollTo(0, 0);
                }
                function u(e) {
                  var t, n, r;
                  (e = W(e) ? e : V(e) ? e.toString() : i.hash())
                    ? (t = o.getElementById(e))
                      ? s(t)
                      : ((n = o.getElementsByName(e)),
                        (r = null),
                        Array.prototype.some.call(n, function (e) {
                          if ("a" === ie(e)) return (r = e), !0;
                        }),
                        (t = r) ? s(t) : "top" === e && s(null))
                    : s(null);
                }
                return (
                  t &&
                    r.$watch(
                      function () {
                        return i.hash();
                      },
                      function (t, n) {
                        var i, o;
                        (t === n && "" === t) ||
                          ((i = function () {
                            r.$evalAsync(u);
                          }),
                          "complete" === (o = o || e).document.readyState ? o.setTimeout(i) : a(o).on("load", i));
                      }
                    ),
                  u
                );
              }
            ]);
        }
        nn.$$annotate = function (e, t, n) {
          var i, r;
          if ("function" == typeof e) {
            if (!(i = e.$inject)) {
              if (((i = []), e.length)) {
                if (t)
                  throw (
                    ((W(n) && n) ||
                      (n =
                        e.name ||
                        (function (e) {
                          var t = tn(e);
                          return t ? "function(" + (t[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
                        })(e)),
                    Xt("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n))
                  );
                w(tn(e)[1].split(Qt), function (e) {
                  e.replace(Jt, function (e, t, n) {
                    i.push(n);
                  });
                });
              }
              e.$inject = i;
            }
          } else q(e) ? (Re(e[(r = e.length - 1)], "fn"), (i = e.slice(0, r))) : Re(e, "fn", !0);
          return i;
        };
        var on = r("$animate"),
          an = "ng-animate";
        function sn(e, t) {
          return e || t ? (e ? (t ? (q(e) && (e = e.join(" ")), q(t) && (t = t.join(" ")), e + " " + t) : e) : t) : "";
        }
        function un(e) {
          return U(e) ? e : {};
        }
        var cn = function () {
            this.$get = I;
          },
          ln = function () {
            var e = new zt(),
              t = [];
            this.$get = [
              "$$AnimateRunner",
              "$rootScope",
              function (n, i) {
                return {
                  enabled: I,
                  on: I,
                  off: I,
                  pin: I,
                  push: function (a, s, u, c) {
                    c && c(),
                      (u = u || {}).from && a.css(u.from),
                      u.to && a.css(u.to),
                      (u.addClass || u.removeClass) &&
                        (function (n, a, s) {
                          var u = e.get(n) || {},
                            c = r(u, a, !0),
                            l = r(u, s, !1);
                          (c || l) && (e.set(n, u), t.push(n), 1 === t.length && i.$$postDigest(o));
                        })(a, u.addClass, u.removeClass);
                    var l = new n();
                    return l.complete(), l;
                  }
                };
                function r(e, t, n) {
                  var i = !1;
                  return (
                    t &&
                      w((t = W(t) ? t.split(" ") : q(t) ? t : []), function (t) {
                        t && ((i = !0), (e[t] = n));
                      }),
                    i
                  );
                }
                function o() {
                  w(t, function (t) {
                    var n = e.get(t);
                    if (n) {
                      var i = (function (e) {
                          W(e) && (e = e.split(" "));
                          var t = Ue();
                          return (
                            w(e, function (e) {
                              e.length && (t[e] = !0);
                            }),
                            t
                          );
                        })(t.attr("class")),
                        r = "",
                        o = "";
                      w(n, function (e, t) {
                        e !== !!i[t] && (e ? (r += (r.length ? " " : "") + t) : (o += (o.length ? " " : "") + t));
                      }),
                        w(t, function (e) {
                          r && kt(e, r), o && Et(e, o);
                        }),
                        e.delete(t);
                    }
                  }),
                    (t.length = 0);
                }
              }
            ];
          },
          dn = [
            "$provide",
            function (e) {
              var t = this,
                n = null,
                i = null;
              (this.$$registeredAnimations = Object.create(null)),
                (this.register = function (n, i) {
                  if (n && "." !== n.charAt(0)) throw on("notcsel", "Expecting class selector starting with '.' got '{0}'.", n);
                  var r = n + "-animation";
                  (t.$$registeredAnimations[n.substr(1)] = r), e.factory(r, i);
                }),
                (this.customFilter = function (e) {
                  return 1 === arguments.length && (i = K(e) ? e : null), i;
                }),
                (this.classNameFilter = function (e) {
                  if (
                    1 === arguments.length &&
                    (n = e instanceof RegExp ? e : null) &&
                    new RegExp("[(\\s|\\/)]" + an + "[(\\s|\\/)]").test(n.toString())
                  )
                    throw (
                      ((n = null),
                      on(
                        "nongcls",
                        '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.',
                        an
                      ))
                    );
                  return n;
                }),
                (this.$get = [
                  "$$animateQueue",
                  function (e) {
                    function t(e, t, n) {
                      if (n) {
                        var i = (function (e) {
                          for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            if (1 === n.nodeType) return n;
                          }
                        })(n);
                        !i || i.parentNode || i.previousElementSibling || (n = null);
                      }
                      n ? n.after(e) : t.prepend(e);
                    }
                    return {
                      on: e.on,
                      off: e.off,
                      pin: e.pin,
                      enabled: e.enabled,
                      cancel: function (e) {
                        e.cancel && e.cancel();
                      },
                      enter: function (n, i, r, o) {
                        return (i = i && a(i)), (r = r && a(r)), t(n, (i = i || r.parent()), r), e.push(n, "enter", un(o));
                      },
                      move: function (n, i, r, o) {
                        return (i = i && a(i)), (r = r && a(r)), t(n, (i = i || r.parent()), r), e.push(n, "move", un(o));
                      },
                      leave: function (t, n) {
                        return e.push(t, "leave", un(n), function () {
                          t.remove();
                        });
                      },
                      addClass: function (t, n, i) {
                        return ((i = un(i)).addClass = sn(i.addclass, n)), e.push(t, "addClass", i);
                      },
                      removeClass: function (t, n, i) {
                        return ((i = un(i)).removeClass = sn(i.removeClass, n)), e.push(t, "removeClass", i);
                      },
                      setClass: function (t, n, i, r) {
                        return ((r = un(r)).addClass = sn(r.addClass, n)), (r.removeClass = sn(r.removeClass, i)), e.push(t, "setClass", r);
                      },
                      animate: function (t, n, i, r, o) {
                        return (
                          ((o = un(o)).from = o.from ? A(o.from, n) : n),
                          (o.to = o.to ? A(o.to, i) : i),
                          (r = r || "ng-inline-animate"),
                          (o.tempClasses = sn(o.tempClasses, r)),
                          e.push(t, "animate", o)
                        );
                      }
                    };
                  }
                ]);
            }
          ],
          fn = function () {
            this.$get = [
              "$$rAF",
              function (e) {
                var t = [];
                function n(n) {
                  t.push(n),
                    t.length > 1 ||
                      e(function () {
                        for (var e = 0; e < t.length; e++) t[e]();
                        t = [];
                      });
                }
                return function () {
                  var e = !1;
                  return (
                    n(function () {
                      e = !0;
                    }),
                    function (t) {
                      e ? t() : n(t);
                    }
                  );
                };
              }
            ];
          },
          hn = function () {
            this.$get = [
              "$q",
              "$sniffer",
              "$$animateAsyncRun",
              "$$isDocumentHidden",
              "$timeout",
              function (e, t, n, i, r) {
                function o(e) {
                  this.setHost(e);
                  var t = n();
                  (this._doneCallbacks = []),
                    (this._tick = function (e) {
                      i()
                        ? (function (e) {
                            r(e, 0, !1);
                          })(e)
                        : t(e);
                    }),
                    (this._state = 0);
                }
                return (
                  (o.chain = function (e, t) {
                    var n = 0;
                    !(function i() {
                      if (n === e.length) return void t(!0);
                      e[n](function (e) {
                        !1 !== e ? (n++, i()) : t(!1);
                      });
                    })();
                  }),
                  (o.all = function (e, t) {
                    var n = 0,
                      i = !0;
                    function r(r) {
                      (i = i && r), ++n === e.length && t(i);
                    }
                    w(e, function (e) {
                      e.done(r);
                    });
                  }),
                  (o.prototype = {
                    setHost: function (e) {
                      this.host = e || {};
                    },
                    done: function (e) {
                      2 === this._state ? e() : this._doneCallbacks.push(e);
                    },
                    progress: I,
                    getPromise: function () {
                      if (!this.promise) {
                        var t = this;
                        this.promise = e(function (e, n) {
                          t.done(function (t) {
                            !1 === t ? n() : e();
                          });
                        });
                      }
                      return this.promise;
                    },
                    then: function (e, t) {
                      return this.getPromise().then(e, t);
                    },
                    catch: function (e) {
                      return this.getPromise().catch(e);
                    },
                    finally: function (e) {
                      return this.getPromise().finally(e);
                    },
                    pause: function () {
                      this.host.pause && this.host.pause();
                    },
                    resume: function () {
                      this.host.resume && this.host.resume();
                    },
                    end: function () {
                      this.host.end && this.host.end(), this._resolve(!0);
                    },
                    cancel: function () {
                      this.host.cancel && this.host.cancel(), this._resolve(!1);
                    },
                    complete: function (e) {
                      var t = this;
                      0 === t._state &&
                        ((t._state = 1),
                        t._tick(function () {
                          t._resolve(e);
                        }));
                    },
                    _resolve: function (e) {
                      2 !== this._state &&
                        (w(this._doneCallbacks, function (t) {
                          t(e);
                        }),
                        (this._doneCallbacks.length = 0),
                        (this._state = 2));
                    }
                  }),
                  o
                );
              }
            ];
          },
          pn = function () {
            this.$get = [
              "$$rAF",
              "$q",
              "$$AnimateRunner",
              function (e, t, n) {
                return function (t, i) {
                  var r = i || {};
                  r.$$prepared || (r = ae(r)), r.cleanupStyles && (r.from = r.to = null), r.from && (t.css(r.from), (r.from = null));
                  var o,
                    a = new n();
                  return { start: s, end: s };
                  function s() {
                    return (
                      e(function () {
                        !(function () {
                          r.addClass && (t.addClass(r.addClass), (r.addClass = null));
                          r.removeClass && (t.removeClass(r.removeClass), (r.removeClass = null));
                          r.to && (t.css(r.to), (r.to = null));
                        })(),
                          o || a.complete(),
                          (o = !0);
                      }),
                      a
                    );
                  }
                };
              }
            ];
          };
        function vn(e, t, n, i, r) {
          var o = this,
            s = e.location,
            u = e.history,
            c = e.setTimeout,
            l = e.clearTimeout,
            d = {},
            f = r(n);
          (o.isMock = !1),
            (o.$$completeOutstandingRequest = f.completeTask),
            (o.$$incOutstandingRequestCount = f.incTaskCount),
            (o.notifyWhenNoOutstandingRequests = f.notifyWhenNoPendingTasks);
          var h,
            p,
            v = s.href,
            m = t.find("base"),
            g = null,
            y = i.history
              ? function () {
                  try {
                    return u.state;
                  } catch (e) {}
                }
              : I;
          S(),
            (o.url = function (t, n, r) {
              if ((N(r) && (r = null), s !== e.location && (s = e.location), u !== e.history && (u = e.history), t)) {
                var a = p === r;
                if (((t = gr(t).href), v === t && (!i.history || a))) return o;
                var c = v && pi(v) === pi(t);
                return (
                  (v = t),
                  (p = r),
                  !i.history || (c && a)
                    ? (c || (g = t),
                      n
                        ? s.replace(t)
                        : c
                        ? (s.hash = (function (e) {
                            var t = e.indexOf("#");
                            return -1 === t ? "" : e.substr(t);
                          })(t))
                        : (s.href = t),
                      s.href !== t && (g = t))
                    : (u[n ? "replaceState" : "pushState"](r, "", t), S()),
                  g && (g = t),
                  o
                );
              }
              return (function (e) {
                return e.replace(/#$/, "");
              })(g || s.href);
            }),
            (o.state = function () {
              return h;
            });
          var _ = [],
            $ = !1;
          function b() {
            (g = null), x();
          }
          var C = null;
          function S() {
            ue((h = N((h = y())) ? null : h), C) && (h = C), (C = h), (p = h);
          }
          function x() {
            var e = p;
            S(),
              (v === o.url() && e === h) ||
                ((v = o.url()),
                (p = h),
                w(_, function (e) {
                  e(o.url(), h);
                }));
          }
          (o.onUrlChange = function (t) {
            return $ || (i.history && a(e).on("popstate", b), a(e).on("hashchange", b), ($ = !0)), _.push(t), t;
          }),
            (o.$$applicationDestroyed = function () {
              a(e).off("hashchange popstate", b);
            }),
            (o.$$checkUrlChange = x),
            (o.baseHref = function () {
              var e = m.attr("href");
              return e ? e.replace(/^(https?:)?\/\/[^/]*/, "") : "";
            }),
            (o.defer = function (e, t, n) {
              var i;
              return (
                (t = t || 0),
                (n = n || f.DEFAULT_TASK_TYPE),
                f.incTaskCount(n),
                (i = c(function () {
                  delete d[i], f.completeTask(e, n);
                }, t)),
                (d[i] = n),
                i
              );
            }),
            (o.defer.cancel = function (e) {
              if (d.hasOwnProperty(e)) {
                var t = d[e];
                return delete d[e], l(e), f.completeTask(I, t), !0;
              }
              return !1;
            });
        }
        function mn() {
          this.$get = [
            "$window",
            "$log",
            "$sniffer",
            "$document",
            "$$taskTrackerFactory",
            function (e, t, n, i, r) {
              return new vn(e, i, t, n, r);
            }
          ];
        }
        function gn() {
          this.$get = function () {
            var e = {};
            function t(t, n) {
              if (t in e) throw r("$cacheFactory")("iid", "CacheId '{0}' is already taken!", t);
              var i = 0,
                o = A({}, n, { id: t }),
                a = Ue(),
                s = (n && n.capacity) || Number.MAX_VALUE,
                u = Ue(),
                c = null,
                l = null;
              return (e[t] = {
                put: function (e, t) {
                  if (!N(t)) {
                    if (s < Number.MAX_VALUE) d(u[e] || (u[e] = { key: e }));
                    return e in a || i++, (a[e] = t), i > s && this.remove(l.key), t;
                  }
                },
                get: function (e) {
                  if (s < Number.MAX_VALUE) {
                    var t = u[e];
                    if (!t) return;
                    d(t);
                  }
                  return a[e];
                },
                remove: function (e) {
                  if (s < Number.MAX_VALUE) {
                    var t = u[e];
                    if (!t) return;
                    t === c && (c = t.p), t === l && (l = t.n), f(t.n, t.p), delete u[e];
                  }
                  e in a && (delete a[e], i--);
                },
                removeAll: function () {
                  (a = Ue()), (i = 0), (u = Ue()), (c = l = null);
                },
                destroy: function () {
                  (a = null), (o = null), (u = null), delete e[t];
                },
                info: function () {
                  return A({}, o, { size: i });
                }
              });
              function d(e) {
                e !== c && (l ? l === e && (l = e.n) : (l = e), f(e.n, e.p), f(e, c), ((c = e).n = null));
              }
              function f(e, t) {
                e !== t && (e && (e.p = t), t && (t.n = e));
              }
            }
            return (
              (t.info = function () {
                var t = {};
                return (
                  w(e, function (e, n) {
                    t[n] = e.info();
                  }),
                  t
                );
              }),
              (t.get = function (t) {
                return e[t];
              }),
              t
            );
          };
        }
        function yn() {
          this.$get = [
            "$cacheFactory",
            function (e) {
              return e("templates");
            }
          ];
        }
        var _n = r("$compile");
        var $n = new (function () {})();
        function bn(t, n) {
          var i = {},
            r = "Directive",
            s = /^\s*directive:\s*([\w-]+)\s+(.*)$/,
            u = /(([\w-]+)(?::([^;]+))?;?)/,
            c = (function (e) {
              var t,
                n = {},
                i = e.split(",");
              for (t = 0; t < i.length; t++) n[i[t]] = !0;
              return n;
            })("ngSrc,ngSrcset,src,srcset"),
            l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
            h = /^(on[a-z]+|formaction)$/,
            p = Ue();
          function v(e, t, n) {
            var i = /^([@&]|[=<](\*?))(\??)\s*([\w$]*)$/,
              r = Ue();
            return (
              w(e, function (e, o) {
                if ((e = e.trim()) in p) r[o] = p[e];
                else {
                  var a = e.match(i);
                  if (!a)
                    throw _n(
                      "iscp",
                      "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}",
                      t,
                      o,
                      e,
                      n ? "controller bindings definition" : "isolate scope definition"
                    );
                  (r[o] = { mode: a[1][0], collection: "*" === a[2], optional: "?" === a[3], attrName: a[4] || o }), a[4] && (p[e] = r[o]);
                }
              }),
              r
            );
          }
          function m(e, t) {
            var n = { isolateScope: null, bindToController: null };
            if (
              (U(e.scope) &&
                (!0 === e.bindToController
                  ? ((n.bindToController = v(e.scope, t, !0)), (n.isolateScope = {}))
                  : (n.isolateScope = v(e.scope, t, !1))),
              U(e.bindToController) && (n.bindToController = v(e.bindToController, t, !0)),
              n.bindToController && !e.controller)
            )
              throw _n("noctrl", "Cannot bind to controller without directive '{0}'s controller.", t);
            return n;
          }
          (this.directive = function e(n, o) {
            return (
              Be(n, "name"),
              Ne(n, "directive"),
              W(n)
                ? (!(function (e) {
                    var t = e.charAt(0);
                    if (!t || t !== f(t))
                      throw _n("baddir", "Directive/Component name '{0}' is invalid. The first character must be a lowercase letter", e);
                    if (e !== e.trim())
                      throw _n(
                        "baddir",
                        "Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces",
                        e
                      );
                  })(n),
                  Be(o, "directiveFactory"),
                  i.hasOwnProperty(n) ||
                    ((i[n] = []),
                    t.factory(n + r, [
                      "$injector",
                      "$exceptionHandler",
                      function (e, t) {
                        var r = [];
                        return (
                          w(i[n], function (i, o) {
                            try {
                              var a = e.invoke(i);
                              K(a) ? (a = { compile: B(a) }) : !a.compile && a.link && (a.compile = B(a.link)),
                                (a.priority = a.priority || 0),
                                (a.index = o),
                                (a.name = a.name || n),
                                (a.require = (function (e) {
                                  var t = e.require || (e.controller && e.name);
                                  return (
                                    !q(t) &&
                                      U(t) &&
                                      w(t, function (e, n) {
                                        var i = e.match(l);
                                        e.substring(i[0].length) || (t[n] = i[0] + n);
                                      }),
                                    t
                                  );
                                })(a)),
                                (a.restrict = (function (e, t) {
                                  if (e && (!W(e) || !/[EACM]/.test(e)))
                                    throw _n("badrestrict", "Restrict property '{0}' of directive '{1}' is invalid", e, t);
                                  return e || "EA";
                                })(a.restrict, n)),
                                (a.$$moduleName = i.$$moduleName),
                                r.push(a);
                            } catch (e) {
                              t(e);
                            }
                          }),
                          r
                        );
                      }
                    ])),
                  i[n].push(o))
                : w(n, x(e)),
              this
            );
          }),
            (this.component = function e(t, n) {
              if (!W(t)) return w(t, x(he(this, e))), this;
              var i = n.controller || function () {};
              function r(e) {
                function t(t) {
                  return K(t) || q(t)
                    ? function (n, i) {
                        return e.invoke(t, this, { $element: n, $attrs: i });
                      }
                    : t;
                }
                var r = n.template || n.templateUrl ? n.template : "",
                  o = {
                    controller: i,
                    controllerAs: Pn(n.controller) || n.controllerAs || "$ctrl",
                    template: t(r),
                    templateUrl: t(n.templateUrl),
                    transclude: n.transclude,
                    scope: {},
                    bindToController: n.bindings || {},
                    restrict: "E",
                    require: n.require
                  };
                return (
                  w(n, function (e, t) {
                    "$" === t.charAt(0) && (o[t] = e);
                  }),
                  o
                );
              }
              return (
                w(n, function (e, t) {
                  "$" === t.charAt(0) && ((r[t] = e), K(i) && (i[t] = e));
                }),
                (r.$inject = ["$injector"]),
                this.directive(t, r)
              );
            }),
            (this.aHrefSanitizationWhitelist = function (e) {
              return F(e) ? (n.aHrefSanitizationWhitelist(e), this) : n.aHrefSanitizationWhitelist();
            }),
            (this.imgSrcSanitizationWhitelist = function (e) {
              return F(e) ? (n.imgSrcSanitizationWhitelist(e), this) : n.imgSrcSanitizationWhitelist();
            });
          var y = !0;
          this.debugInfoEnabled = function (e) {
            return F(e) ? ((y = e), this) : y;
          };
          var _ = !1;
          this.strictComponentBindingsEnabled = function (e) {
            return F(e) ? ((_ = e), this) : _;
          };
          var $ = 10;
          this.onChangesTtl = function (e) {
            return arguments.length ? (($ = e), this) : $;
          };
          var b = !0;
          this.commentDirectivesEnabled = function (e) {
            return arguments.length ? ((b = e), this) : b;
          };
          var C = !0;
          this.cssClassDirectivesEnabled = function (e) {
            return arguments.length ? ((C = e), this) : C;
          };
          var S = Ue();
          (this.addPropertySecurityContext = function (e, t, n) {
            var i = e.toLowerCase() + "|" + t.toLowerCase();
            if (i in S && S[i] !== n)
              throw _n("ctxoverride", "Property context '{0}.{1}' already set to '{2}', cannot override to '{3}'.", e, t, S[i], n);
            return (S[i] = n), this;
          }),
            (function () {
              function e(e, t) {
                w(t, function (t) {
                  S[t.toLowerCase()] = e;
                });
              }
              e(Xi.HTML, ["iframe|srcdoc", "*|innerHTML", "*|outerHTML"]),
                e(Xi.CSS, ["*|style"]),
                e(Xi.URL, [
                  "area|href",
                  "area|ping",
                  "a|href",
                  "a|ping",
                  "blockquote|cite",
                  "body|background",
                  "del|cite",
                  "input|src",
                  "ins|cite",
                  "q|cite"
                ]),
                e(Xi.MEDIA_URL, [
                  "audio|src",
                  "img|src",
                  "img|srcset",
                  "source|src",
                  "source|srcset",
                  "track|src",
                  "video|src",
                  "video|poster"
                ]),
                e(Xi.RESOURCE_URL, [
                  "*|formAction",
                  "applet|code",
                  "applet|codebase",
                  "base|href",
                  "embed|src",
                  "frame|src",
                  "form|action",
                  "head|profile",
                  "html|manifest",
                  "iframe|src",
                  "link|href",
                  "media|src",
                  "object|codebase",
                  "object|data",
                  "script|src"
                ]);
            })(),
            (this.$get = [
              "$injector",
              "$interpolate",
              "$exceptionHandler",
              "$templateRequest",
              "$parse",
              "$controller",
              "$rootScope",
              "$sce",
              "$animate",
              function (t, n, p, v, x, T, E, k, P) {
                var O,
                  M = /^\w/,
                  B = e.document.createElement("div"),
                  R = b,
                  F = C,
                  j = $;
                function V() {
                  try {
                    if (!--j) throw ((O = void 0), _n("infchng", "{0} $onChanges() iterations reached. Aborting!\n", $));
                    E.$apply(function () {
                      for (var e = 0, t = O.length; e < t; ++e)
                        try {
                          O[e]();
                        } catch (e) {
                          p(e);
                        }
                      O = void 0;
                    });
                  } finally {
                    j++;
                  }
                }
                function H(e, t) {
                  if (!e) return e;
                  if (!W(e)) throw _n("srcset", 'Can\'t pass trusted values to `{0}`: "{1}"', t, e.toString());
                  for (
                    var n = "",
                      i = ee(e),
                      r = /\s/.test(i) ? /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/ : /(,)/,
                      o = i.split(r),
                      a = Math.floor(o.length / 2),
                      s = 0;
                    s < a;
                    s++
                  ) {
                    var u = 2 * s;
                    (n += k.getTrustedMediaUrl(ee(o[u]))), (n += " " + ee(o[u + 1]));
                  }
                  var c = ee(o[2 * s]).split(/\s/);
                  return (n += k.getTrustedMediaUrl(ee(c[0]))), 2 === c.length && (n += " " + ee(c[1])), n;
                }
                function G(e, t) {
                  if (t) {
                    var n,
                      i,
                      r,
                      o = Object.keys(t);
                    for (n = 0, i = o.length; n < i; n++) this[(r = o[n])] = t[r];
                  } else this.$attr = {};
                  this.$$element = e;
                }
                function Z(e, t) {
                  try {
                    e.addClass(t);
                  } catch (e) {}
                }
                G.prototype = {
                  $normalize: xn,
                  $addClass: function (e) {
                    e && e.length > 0 && P.addClass(this.$$element, e);
                  },
                  $removeClass: function (e) {
                    e && e.length > 0 && P.removeClass(this.$$element, e);
                  },
                  $updateClass: function (e, t) {
                    var n = Tn(e, t);
                    n && n.length && P.addClass(this.$$element, n);
                    var i = Tn(t, e);
                    i && i.length && P.removeClass(this.$$element, i);
                  },
                  $set: function (e, t, n, i) {
                    var r = Ft(this.$$element[0], e),
                      o = Nt[e],
                      a = e;
                    r ? (this.$$element.prop(e, t), (i = r)) : o && ((this[o] = t), (a = o)),
                      (this[e] = t),
                      i ? (this.$attr[e] = i) : (i = this.$attr[e]) || (this.$attr[e] = i = Le(e, "-")),
                      "img" === ie(this.$$element) && "srcset" === e && (this[e] = t = H(t, "$set('srcset', value)")),
                      !1 !== n &&
                        (null === t || N(t)
                          ? this.$$element.removeAttr(i)
                          : M.test(i)
                          ? r && !1 === t
                            ? this.$$element.removeAttr(i)
                            : this.$$element.attr(i, t)
                          : (function (e, t, n) {
                              B.innerHTML = "<span " + t + ">";
                              var i = B.firstChild.attributes,
                                r = i[0];
                              i.removeNamedItem(r.name), (r.value = n), e.attributes.setNamedItem(r);
                            })(this.$$element[0], i, t));
                    var s = this.$$observers;
                    s &&
                      w(s[a], function (e) {
                        try {
                          e(t);
                        } catch (e) {
                          p(e);
                        }
                      });
                  },
                  $observe: function (e, t) {
                    var n = this,
                      i = n.$$observers || (n.$$observers = Ue()),
                      r = i[e] || (i[e] = []);
                    return (
                      r.push(t),
                      E.$evalAsync(function () {
                        r.$$inter || !n.hasOwnProperty(e) || N(n[e]) || t(n[e]);
                      }),
                      function () {
                        oe(r, t);
                      }
                    );
                  }
                };
                var Y = n.startSymbol(),
                  X = n.endSymbol(),
                  te =
                    "{{" === Y && "}}" === X
                      ? D
                      : function (e) {
                          return e.replace(/\{\{/g, Y).replace(/}}/g, X);
                        },
                  ne = /^ng(Attr|Prop|On)([A-Z].*)$/,
                  re = /^(.+)Start$/;
                return (
                  (ae.$$addBindingInfo = y
                    ? function (e, t) {
                        var n = e.data("$binding") || [];
                        q(t) ? (n = n.concat(t)) : n.push(t), e.data("$binding", n);
                      }
                    : I),
                  (ae.$$addBindingClass = y
                    ? function (e) {
                        Z(e, "ng-binding");
                      }
                    : I),
                  (ae.$$addScopeInfo = y
                    ? function (e, t, n, i) {
                        var r = n ? (i ? "$isolateScopeNoTemplate" : "$isolateScope") : "$scope";
                        e.data(r, t);
                      }
                    : I),
                  (ae.$$addScopeClass = y
                    ? function (e, t) {
                        Z(e, t ? "ng-isolate-scope" : "ng-scope");
                      }
                    : I),
                  (ae.$$createComment = function (t, n) {
                    var i = "";
                    return y && ((i = " " + (t || "") + ": "), n && (i += n + " ")), e.document.createComment(i);
                  }),
                  ae
                );
                function ae(e, t, n, i, r) {
                  e instanceof a || (e = a(e));
                  var o = ce(e, t, e, n, i, r);
                  ae.$$addScopeClass(e);
                  var s = null;
                  return function (t, n, i) {
                    if (!e) throw _n("multilink", "This element has already been linked.");
                    Be(t, "scope"), r && r.needsNewScope && (t = t.$parent.$new());
                    var u,
                      c,
                      l,
                      d = (i = i || {}).parentBoundTranscludeFn,
                      f = i.transcludeControllers,
                      h = i.futureParentElement;
                    if (
                      (d && d.$$boundTransclude && (d = d.$$boundTransclude),
                      s || ((c = (u = h) && u[0]), (s = c && "foreignobject" !== ie(c) && g.call(c).match(/SVG/) ? "svg" : "html")),
                      (l = "html" !== s ? a(ke(s, a("<div></div>").append(e).html())) : n ? Dt.clone.call(e) : e),
                      f)
                    )
                      for (var p in f) l.data("$" + p + "Controller", f[p].instance);
                    return ae.$$addScopeInfo(l, t), n && n(l, t), o && o(t, l, l, d), n || (e = o = null), l;
                  };
                }
                function ce(e, t, n, i, r, s) {
                  for (var u, c, l, d, f, h, p, v = [], m = q(e) || e instanceof a, g = 0; g < e.length; g++)
                    (u = new G()),
                      11 === o && le(e, g, m),
                      (l = (c = pe(e[g], [], u, 0 === g ? i : void 0, r)).length ? ye(c, e[g], u, t, n, null, [], [], s) : null) &&
                        l.scope &&
                        ae.$$addScopeClass(u.$$element),
                      (f =
                        (l && l.terminal) || !(d = e[g].childNodes) || !d.length
                          ? null
                          : ce(d, l ? (l.transcludeOnThisElement || !l.templateOnThisElement) && l.transclude : t)),
                      (l || f) && (v.push(g, l, f), (h = !0), (p = p || l)),
                      (s = null);
                  return h
                    ? function (e, n, i, r) {
                        var o, s, u, c, l, d, f, h;
                        if (p) {
                          var m = n.length;
                          for (h = new Array(m), l = 0; l < v.length; l += 3) h[(f = v[l])] = n[f];
                        } else h = n;
                        for (l = 0, d = v.length; l < d; )
                          (u = h[v[l++]]),
                            (o = v[l++]),
                            (s = v[l++]),
                            o
                              ? (o.scope ? ((c = e.$new()), ae.$$addScopeInfo(a(u), c)) : (c = e),
                                o(
                                  s,
                                  c,
                                  u,
                                  i,
                                  o.transcludeOnThisElement
                                    ? de(e, o.transclude, r)
                                    : !o.templateOnThisElement && r
                                    ? r
                                    : !r && t
                                    ? de(e, t)
                                    : null
                                ))
                              : s && s(e, u.childNodes, void 0, r);
                      }
                    : null;
                }
                function le(e, t, n) {
                  var i,
                    r = e[t],
                    o = r.parentNode;
                  if (r.nodeType === Ve)
                    for (; (i = o ? r.nextSibling : e[t + 1]) && i.nodeType === Ve; )
                      (r.nodeValue = r.nodeValue + i.nodeValue),
                        i.parentNode && i.parentNode.removeChild(i),
                        n && i === e[t + 1] && e.splice(t + 1, 1);
                }
                function de(e, t, n) {
                  function i(i, r, o, a, s) {
                    return (
                      i || ((i = e.$new(!1, s)).$$transcluded = !0),
                      t(i, r, { parentBoundTranscludeFn: n, transcludeControllers: o, futureParentElement: a })
                    );
                  }
                  var r = (i.$$slots = Ue());
                  for (var o in t.$$slots) t.$$slots[o] ? (r[o] = de(e, t.$$slots[o], n)) : (r[o] = null);
                  return i;
                }
                function pe(e, t, i, r, o) {
                  var a,
                    c,
                    l,
                    d = e.nodeType,
                    f = i.$attr;
                  switch (d) {
                    case We:
                      Ce(t, xn((c = ie(e))), "E", r, o);
                      for (var h, p, v, m, g, y = e.attributes, _ = 0, $ = y && y.length; _ < $; _++) {
                        var b,
                          C = !1,
                          w = !1,
                          S = !1,
                          x = !1,
                          T = !1;
                        (p = (h = y[_]).name),
                          (m = h.value),
                          (g = (v = xn(p.toLowerCase())).match(ne))
                            ? ((S = "Attr" === g[1]),
                              (x = "Prop" === g[1]),
                              (T = "On" === g[1]),
                              (p = p
                                .replace(wn, "")
                                .toLowerCase()
                                .substr(4 + g[1].length)
                                .replace(/_(.)/g, function (e, t) {
                                  return t.toUpperCase();
                                })))
                            : (b = v.match(re)) &&
                              we(b[1]) &&
                              ((C = p), (w = p.substr(0, p.length - 5) + "end"), (p = p.substr(0, p.length - 6))),
                          x || T
                            ? ((i[v] = m), (f[v] = h.name), x ? Pe(e, t, v, p) : Oe(t, v, p))
                            : ((f[(v = xn(p.toLowerCase()))] = p),
                              (!S && i.hasOwnProperty(v)) || ((i[v] = m), Ft(e, v) && (i[v] = !0)),
                              Me(e, t, m, v, S),
                              Ce(t, v, "A", r, o, C, w));
                      }
                      if (("input" === c && "hidden" === e.getAttribute("type") && e.setAttribute("autocomplete", "off"), !F)) break;
                      if ((U((l = e.className)) && (l = l.animVal), W(l) && "" !== l))
                        for (; (a = u.exec(l)); )
                          Ce(t, (v = xn(a[2])), "C", r, o) && (i[v] = ee(a[3])), (l = l.substr(a.index + a[0].length));
                      break;
                    case Ve:
                      !(function (e, t) {
                        var i = n(t, !0);
                        i &&
                          e.push({
                            priority: 0,
                            compile: function (e) {
                              var t = e.parent(),
                                n = !!t.length;
                              return (
                                n && ae.$$addBindingClass(t),
                                function (e, t) {
                                  var r = t.parent();
                                  n || ae.$$addBindingClass(r),
                                    ae.$$addBindingInfo(r, i.expressions),
                                    e.$watch(i, function (e) {
                                      t[0].nodeValue = e;
                                    });
                                }
                              );
                            }
                          });
                      })(t, e.nodeValue);
                      break;
                    case He:
                      if (!R) break;
                      !(function (e, t, n, i, r) {
                        try {
                          var o = s.exec(e.nodeValue);
                          if (o) {
                            var a = xn(o[1]);
                            Ce(t, a, "M", i, r) && (n[a] = ee(o[2]));
                          }
                        } catch (e) {}
                      })(e, t, i, r, o);
                  }
                  return t.sort(Te), t;
                }
                function ve(e, t, n) {
                  var i = [],
                    r = 0;
                  if (t && e.hasAttribute && e.hasAttribute(t))
                    do {
                      if (!e) throw _n("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", t, n);
                      e.nodeType === We && (e.hasAttribute(t) && r++, e.hasAttribute(n) && r--), i.push(e), (e = e.nextSibling);
                    } while (r > 0);
                  else i.push(e);
                  return a(i);
                }
                function me(e, t, n) {
                  return function (i, r, o, a, s) {
                    return (r = ve(r[0], t, n)), e(i, r, o, a, s);
                  };
                }
                function ge(e, t, n, i, r, o) {
                  var a;
                  return e
                    ? ae(t, n, i, r, o)
                    : function () {
                        return a || ((a = ae(t, n, i, r, o)), (t = n = o = null)), a.apply(this, arguments);
                      };
                }
                function ye(t, n, i, r, o, s, u, c, l) {
                  l = l || {};
                  for (
                    var d,
                      f,
                      h,
                      v,
                      m,
                      g = -Number.MAX_VALUE,
                      y = l.newScopeDirective,
                      _ = l.controllerDirectives,
                      $ = l.newIsolateScopeDirective,
                      b = l.templateDirective,
                      C = l.nonTlbTranscludeDirective,
                      S = !1,
                      x = !1,
                      E = l.hasElementTranscludeDirective,
                      k = (i.$$element = a(n)),
                      P = s,
                      O = r,
                      M = !1,
                      L = !1,
                      I = 0,
                      D = t.length;
                    I < D;
                    I++
                  ) {
                    var B = (d = t[I]).$$start,
                      R = d.$$end;
                    if ((B && (k = ve(n, B, R)), (h = void 0), g > d.priority)) break;
                    if (
                      ((m = d.scope) &&
                        (d.templateUrl || (U(m) ? (Ee("new/isolated scope", $ || y, d, k), ($ = d)) : Ee("new/isolated scope", $, d, k)),
                        (y = y || d)),
                      (f = d.name),
                      !M && ((d.replace && (d.templateUrl || d.template)) || (d.transclude && !d.$$tlb)))
                    ) {
                      for (var F, j = I + 1; (F = t[j++]); )
                        if ((F.transclude && !F.$$tlb) || (F.replace && (F.templateUrl || F.template))) {
                          L = !0;
                          break;
                        }
                      M = !0;
                    }
                    if (
                      (!d.templateUrl && d.controller && ((_ = _ || Ue()), Ee("'" + f + "' controller", _[f], d, k), (_[f] = d)),
                      (m = d.transclude))
                    )
                      if (((S = !0), d.$$tlb || (Ee("transclusion", C, d, k), (C = d)), "element" === m))
                        (E = !0),
                          (g = d.priority),
                          (h = k),
                          (k = i.$$element = a(ae.$$createComment(f, i[f]))),
                          (n = k[0]),
                          Ie(o, fe(h), n),
                          (O = ge(L, h, r, g, P && P.name, { nonTlbTranscludeDirective: C }));
                      else {
                        var W = Ue();
                        if (U(m)) {
                          h = e.document.createDocumentFragment();
                          var V = Ue(),
                            H = Ue();
                          for (var z in (w(m, function (e, t) {
                            var n = "?" === e.charAt(0);
                            (e = n ? e.substring(1) : e), (V[e] = t), (W[t] = null), (H[t] = n);
                          }),
                          w(k.contents(), function (t) {
                            var n = V[xn(ie(t))];
                            n ? ((H[n] = !0), (W[n] = W[n] || e.document.createDocumentFragment()), W[n].appendChild(t)) : h.appendChild(t);
                          }),
                          w(H, function (e, t) {
                            if (!e) throw _n("reqslot", "Required transclusion slot `{0}` was not filled.", t);
                          }),
                          W))
                            if (W[z]) {
                              var Z = a(W[z].childNodes);
                              W[z] = ge(L, Z, r);
                            }
                          h = a(h.childNodes);
                        } else h = a(yt(n)).contents();
                        k.empty(), ((O = ge(L, h, r, void 0, void 0, { needsNewScope: d.$$isolateScope || d.$$newScope })).$$slots = W);
                      }
                    if (d.template)
                      if (
                        ((x = !0),
                        Ee("template", b, d, k),
                        (b = d),
                        (m = K(d.template) ? d.template(k, i) : d.template),
                        (m = te(m)),
                        d.replace)
                      ) {
                        if (
                          ((P = d), (h = ht(m) ? [] : En(ke(d.templateNamespace, ee(m)))), (n = h[0]), 1 !== h.length || n.nodeType !== We)
                        )
                          throw _n("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", f, "");
                        Ie(o, k, n);
                        var J = { $attr: {} },
                          Y = pe(n, [], J),
                          X = t.splice(I + 1, t.length - (I + 1));
                        ($ || y) && $e(Y, $, y), (t = t.concat(Y).concat(X)), Se(i, J), (D = t.length);
                      } else k.html(m);
                    if (d.templateUrl)
                      (x = !0),
                        Ee("template", b, d, k),
                        (b = d),
                        d.replace && (P = d),
                        (oe = xe(t.splice(I, t.length - I), k, i, o, S && O, u, c, {
                          controllerDirectives: _,
                          newScopeDirective: y !== d && y,
                          newIsolateScopeDirective: $,
                          templateDirective: b,
                          nonTlbTranscludeDirective: C
                        })),
                        (D = t.length);
                    else if (d.compile)
                      try {
                        v = d.compile(k, i, O);
                        var ne = d.$$originalDirective || d;
                        K(v) ? re(null, he(ne, v), B, R) : v && re(he(ne, v.pre), he(ne, v.post), B, R);
                      } catch (e) {
                        p(e, be(k));
                      }
                    d.terminal && ((oe.terminal = !0), (g = Math.max(g, d.priority)));
                  }
                  return (
                    (oe.scope = y && !0 === y.scope),
                    (oe.transcludeOnThisElement = S),
                    (oe.templateOnThisElement = x),
                    (oe.transclude = O),
                    (l.hasElementTranscludeDirective = E),
                    oe
                  );
                  function re(e, t, n, i) {
                    e &&
                      (n && (e = me(e, n, i)),
                      (e.require = d.require),
                      (e.directiveName = f),
                      ($ === d || d.$$isolateScope) && (e = De(e, { isolateScope: !0 })),
                      u.push(e)),
                      t &&
                        (n && (t = me(t, n, i)),
                        (t.require = d.require),
                        (t.directiveName = f),
                        ($ === d || d.$$isolateScope) && (t = De(t, { isolateScope: !0 })),
                        c.push(t));
                  }
                  function oe(e, t, r, o, s) {
                    var l, d, f, h, v, m, g, C, S, x;
                    for (var k in (n === r ? ((S = i), (C = i.$$element)) : (S = new G((C = a(r)), i)),
                    (v = t),
                    $ ? (h = t.$new(!0)) : y && (v = t.$parent),
                    s &&
                      ((g = function (e, t, n, i) {
                        var r;
                        Q(e) || ((i = n), (n = t), (t = e), (e = void 0));
                        E && (r = m);
                        n || (n = E ? C.parent() : C);
                        if (!i) return s(e, t, r, n, L);
                        var o = s.$$slots[i];
                        if (o) return o(e, t, r, n, L);
                        if (N(o))
                          throw _n(
                            "noslot",
                            'No parent directive that requires a transclusion with slot name "{0}". Element: {1}',
                            i,
                            be(C)
                          );
                      }),
                      (g.$$boundTransclude = s),
                      (g.isSlotFilled = function (e) {
                        return !!s.$$slots[e];
                      })),
                    _ &&
                      (m = (function (e, t, n, i, r, o, a) {
                        var s = Ue();
                        for (var u in i) {
                          var c = i[u],
                            l = { $scope: c === a || c.$$isolateScope ? r : o, $element: e, $attrs: t, $transclude: n },
                            d = c.controller;
                          "@" === d && (d = t[c.name]);
                          var f = T(d, l, !0, c.controllerAs);
                          (s[c.name] = f), e.data("$" + c.name + "Controller", f.instance);
                        }
                        return s;
                      })(C, S, g, _, h, t, $)),
                    $ &&
                      (ae.$$addScopeInfo(C, h, !0, !(b && (b === $ || b === $.$$originalDirective))),
                      ae.$$addScopeClass(C, !0),
                      (h.$$isolateBindings = $.$$isolateBindings),
                      (x = Fe(t, S, h, h.$$isolateBindings, $)).removeWatches && h.$on("$destroy", x.removeWatches)),
                    m)) {
                      var P = _[k],
                        O = m[k],
                        M = P.$$bindings.bindToController;
                      (O.instance = O()), C.data("$" + P.name + "Controller", O.instance), (O.bindingInfo = Fe(v, S, O.instance, M, P));
                    }
                    for (
                      w(_, function (e, t) {
                        var n = e.require;
                        e.bindToController && !q(n) && U(n) && A(m[t].instance, _e(t, n, C, m));
                      }),
                        w(m, function (e) {
                          var t = e.instance;
                          if (K(t.$onChanges))
                            try {
                              t.$onChanges(e.bindingInfo.initialChanges);
                            } catch (e) {
                              p(e);
                            }
                          if (K(t.$onInit))
                            try {
                              t.$onInit();
                            } catch (e) {
                              p(e);
                            }
                          K(t.$doCheck) &&
                            (v.$watch(function () {
                              t.$doCheck();
                            }),
                            t.$doCheck()),
                            K(t.$onDestroy) &&
                              v.$on("$destroy", function () {
                                t.$onDestroy();
                              });
                        }),
                        l = 0,
                        d = u.length;
                      l < d;
                      l++
                    )
                      Re((f = u[l]), f.isolateScope ? h : t, C, S, f.require && _e(f.directiveName, f.require, C, m), g);
                    var L = t;
                    for (
                      $ && ($.template || null === $.templateUrl) && (L = h), e && e(L, r.childNodes, void 0, s), l = c.length - 1;
                      l >= 0;
                      l--
                    )
                      Re((f = c[l]), f.isolateScope ? h : t, C, S, f.require && _e(f.directiveName, f.require, C, m), g);
                    w(m, function (e) {
                      var t = e.instance;
                      K(t.$postLink) && t.$postLink();
                    });
                  }
                }
                function _e(e, t, n, i) {
                  var r;
                  if (W(t)) {
                    var o = t.match(l),
                      a = t.substring(o[0].length),
                      s = o[1] || o[3],
                      u = "?" === o[2];
                    if (("^^" === s ? (n = n.parent()) : (r = (r = i && i[a]) && r.instance), !r)) {
                      var c = "$" + a + "Controller";
                      r = "^^" === s && n[0] && n[0].nodeType === qe ? null : s ? n.inheritedData(c) : n.data(c);
                    }
                    if (!r && !u) throw _n("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", a, e);
                  } else if (q(t)) {
                    r = [];
                    for (var d = 0, f = t.length; d < f; d++) r[d] = _e(e, t[d], n, i);
                  } else
                    U(t) &&
                      ((r = {}),
                      w(t, function (t, o) {
                        r[o] = _e(e, t, n, i);
                      }));
                  return r || null;
                }
                function $e(e, t, n) {
                  for (var i = 0, r = e.length; i < r; i++) e[i] = L(e[i], { $$isolateScope: t, $$newScope: n });
                }
                function Ce(e, n, o, a, s, u, c) {
                  if (n === s) return null;
                  var l = null;
                  if (i.hasOwnProperty(n))
                    for (var d, f = t.get(n + r), h = 0, p = f.length; h < p; h++)
                      if (((d = f[h]), (N(a) || a > d.priority) && -1 !== d.restrict.indexOf(o))) {
                        if ((u && (d = L(d, { $$start: u, $$end: c })), !d.$$bindings)) {
                          var v = (d.$$bindings = m(d, d.name));
                          U(v.isolateScope) && (d.$$isolateBindings = v.isolateScope);
                        }
                        e.push(d), (l = d);
                      }
                  return l;
                }
                function we(e) {
                  if (i.hasOwnProperty(e)) for (var n = t.get(e + r), o = 0, a = n.length; o < a; o++) if (n[o].multiElement) return !0;
                  return !1;
                }
                function Se(e, t) {
                  var n = t.$attr,
                    i = e.$attr;
                  w(e, function (i, r) {
                    "$" !== r.charAt(0) &&
                      (t[r] && t[r] !== i && (i.length ? (i += ("style" === r ? ";" : " ") + t[r]) : (i = t[r])), e.$set(r, i, !0, n[r]));
                  }),
                    w(t, function (t, r) {
                      e.hasOwnProperty(r) || "$" === r.charAt(0) || ((e[r] = t), "class" !== r && "style" !== r && (i[r] = n[r]));
                    });
                }
                function xe(e, t, n, i, r, o, s, u) {
                  var c,
                    l,
                    d = [],
                    f = t[0],
                    h = e.shift(),
                    m = L(h, { templateUrl: null, transclude: null, replace: null, $$originalDirective: h }),
                    g = K(h.templateUrl) ? h.templateUrl(t, n) : h.templateUrl,
                    y = h.templateNamespace;
                  return (
                    t.empty(),
                    v(g)
                      .then(function (p) {
                        var v, _, $, b;
                        if (((p = te(p)), h.replace)) {
                          if ((($ = ht(p) ? [] : En(ke(y, ee(p)))), (v = $[0]), 1 !== $.length || v.nodeType !== We))
                            throw _n("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", h.name, g);
                          (_ = { $attr: {} }), Ie(i, t, v);
                          var C = pe(v, [], _);
                          U(h.scope) && $e(C, !0), (e = C.concat(e)), Se(n, _);
                        } else (v = f), t.html(p);
                        for (
                          e.unshift(m),
                            c = ye(e, v, n, r, t, h, o, s, u),
                            w(i, function (e, n) {
                              e === v && (i[n] = t[0]);
                            }),
                            l = ce(t[0].childNodes, r);
                          d.length;

                        ) {
                          var S = d.shift(),
                            x = d.shift(),
                            T = d.shift(),
                            E = d.shift(),
                            k = t[0];
                          if (!S.$$destroyed) {
                            if (x !== f) {
                              var A = x.className;
                              (u.hasElementTranscludeDirective && h.replace) || (k = yt(v)), Ie(T, a(x), k), Z(a(k), A);
                            }
                            (b = c.transcludeOnThisElement ? de(S, c.transclude, E) : E), c(l, S, k, i, b);
                          }
                        }
                        d = null;
                      })
                      .catch(function (e) {
                        z(e) && p(e);
                      }),
                    function (e, t, n, i, r) {
                      var o = r;
                      t.$$destroyed ||
                        (d ? d.push(t, n, i, o) : (c.transcludeOnThisElement && (o = de(t, c.transclude, r)), c(l, t, n, i, o)));
                    }
                  );
                }
                function Te(e, t) {
                  var n = t.priority - e.priority;
                  return 0 !== n ? n : e.name !== t.name ? (e.name < t.name ? -1 : 1) : e.index - t.index;
                }
                function Ee(e, t, n, i) {
                  function r(e) {
                    return e ? " (module: " + e + ")" : "";
                  }
                  if (t)
                    throw _n(
                      "multidir",
                      "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}",
                      t.name,
                      r(t.$$moduleName),
                      n.name,
                      r(n.$$moduleName),
                      e,
                      be(i)
                    );
                }
                function ke(t, n) {
                  switch ((t = f(t || "html"))) {
                    case "svg":
                    case "math":
                      var i = e.document.createElement("div");
                      return (i.innerHTML = "<" + t + ">" + n + "</" + t + ">"), i.childNodes[0].childNodes;
                    default:
                      return n;
                  }
                }
                function Ae(e) {
                  return H(k.valueOf(e), "ng-prop-srcset");
                }
                function Pe(e, t, n, i) {
                  if (h.test(i)) throw _n("nodomevents", "Property bindings for HTML DOM event properties are disallowed");
                  var r = ie(e),
                    o = (function (e, t) {
                      var n = t.toLowerCase();
                      return S[e + "|" + n] || S["*|" + n];
                    })(r, i),
                    a = D;
                  "srcset" !== i || ("img" !== r && "source" !== r) ? o && (a = k.getTrusted.bind(k, o)) : (a = Ae),
                    t.push({
                      priority: 100,
                      compile: function (e, t) {
                        var r = x(t[n]),
                          o = x(t[n], function (e) {
                            return k.valueOf(e);
                          });
                        return {
                          pre: function (e, t) {
                            function n() {
                              var n = r(e);
                              t[0][i] = a(n);
                            }
                            n(), e.$watch(o, n);
                          }
                        };
                      }
                    });
                }
                function Oe(e, t, n) {
                  e.push(Ko(x, E, p, t, n, !1));
                }
                function Me(e, t, i, r, o) {
                  var a = ie(e),
                    s = (function (e, t) {
                      return "srcdoc" === t
                        ? k.HTML
                        : "src" === t || "ngSrc" === t
                        ? -1 === ["img", "video", "audio", "source", "track"].indexOf(e)
                          ? k.RESOURCE_URL
                          : k.MEDIA_URL
                        : "xlinkHref" === t
                        ? "image" === e
                          ? k.MEDIA_URL
                          : "a" === e
                          ? k.URL
                          : k.RESOURCE_URL
                        : ("form" === e && "action" === t) || ("base" === e && "href" === t) || ("link" === e && "href" === t)
                        ? k.RESOURCE_URL
                        : "a" !== e || ("href" !== t && "ngHref" !== t)
                        ? void 0
                        : k.URL;
                    })(a, r),
                    u = !o,
                    l = c[r] || o,
                    d = n(i, u, s, l);
                  if (d) {
                    if ("multiple" === r && "select" === a)
                      throw _n("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", be(e));
                    if (h.test(r)) throw _n("nodomevents", "Interpolations for HTML DOM event attributes are disallowed");
                    t.push({
                      priority: 100,
                      compile: function () {
                        return {
                          pre: function (e, t, o) {
                            var a = o.$$observers || (o.$$observers = Ue()),
                              u = o[r];
                            u !== i && ((d = u && n(u, !0, s, l)), (i = u)),
                              d &&
                                ((o[r] = d(e)),
                                ((a[r] || (a[r] = [])).$$inter = !0),
                                ((o.$$observers && o.$$observers[r].$$scope) || e).$watch(d, function (e, t) {
                                  "class" === r && e !== t ? o.$updateClass(e, t) : o.$set(r, e);
                                }));
                          }
                        };
                      }
                    });
                  }
                }
                function Ie(t, n, i) {
                  var r,
                    o,
                    s = n[0],
                    u = n.length,
                    c = s.parentNode;
                  if (t)
                    for (r = 0, o = t.length; r < o; r++)
                      if (t[r] === s) {
                        t[r++] = i;
                        for (var l = r, d = l + u - 1, f = t.length; l < f; l++, d++) d < f ? (t[l] = t[d]) : delete t[l];
                        (t.length -= u - 1), t.context === s && (t.context = i);
                        break;
                      }
                  c && c.replaceChild(i, s);
                  var h = e.document.createDocumentFragment();
                  for (r = 0; r < u; r++) h.appendChild(n[r]);
                  for (
                    a.hasData(s) && (a.data(i, a.data(s)), a(s).off("$destroy")), a.cleanData(h.querySelectorAll("*")), r = 1;
                    r < u;
                    r++
                  )
                    delete n[r];
                  (n[0] = i), (n.length = 1);
                }
                function De(e, t) {
                  return A(
                    function () {
                      return e.apply(null, arguments);
                    },
                    e,
                    t
                  );
                }
                function Re(e, t, n, i, r, o) {
                  try {
                    e(t, n, i, r, o);
                  } catch (e) {
                    p(e, be(n));
                  }
                }
                function Ne(e, t) {
                  if (_) throw _n("missingattr", "Attribute '{0}' of '{1}' is non-optional and must be set!", e, t);
                }
                function Fe(e, t, i, r, o) {
                  var a,
                    s = [],
                    u = {};
                  function c(t, n, r) {
                    K(i.$onChanges) &&
                      !se(n, r) &&
                      (O || (e.$$postDigest(V), (O = [])),
                      a || ((a = {}), O.push(l)),
                      a[t] && (r = a[t].previousValue),
                      (a[t] = new Cn(r, n)));
                  }
                  function l() {
                    i.$onChanges(a), (a = void 0);
                  }
                  return (
                    w(r, function (r, a) {
                      var l,
                        f,
                        h,
                        p,
                        v,
                        m = r.attrName,
                        g = r.optional;
                      switch (r.mode) {
                        case "@":
                          g || d.call(t, m) || (Ne(m, o.name), (i[a] = t[m] = void 0)),
                            (v = t.$observe(m, function (e) {
                              if (W(e) || J(e)) {
                                var t = i[a];
                                c(a, e, t), (i[a] = e);
                              }
                            })),
                            (t.$$observers[m].$$scope = e),
                            W((l = t[m])) ? (i[a] = n(l)(e)) : J(l) && (i[a] = l),
                            (u[a] = new Cn($n, i[a])),
                            s.push(v);
                          break;
                        case "=":
                          if (!d.call(t, m)) {
                            if (g) break;
                            Ne(m, o.name), (t[m] = void 0);
                          }
                          if (g && !t[m]) break;
                          (f = x(t[m])),
                            (p = f.literal ? ue : se),
                            (h =
                              f.assign ||
                              function () {
                                throw (
                                  ((l = i[a] = f(e)),
                                  _n(
                                    "nonassign",
                                    "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!",
                                    t[m],
                                    m,
                                    o.name
                                  ))
                                );
                              }),
                            (l = i[a] = f(e));
                          var y = function (t) {
                            return p(t, i[a]) || (p(t, l) ? h(e, (t = i[a])) : (i[a] = t)), (l = t);
                          };
                          (y.$stateful = !0),
                            (v = r.collection ? e.$watchCollection(t[m], y) : e.$watch(x(t[m], y), null, f.literal)),
                            s.push(v);
                          break;
                        case "<":
                          if (!d.call(t, m)) {
                            if (g) break;
                            Ne(m, o.name), (t[m] = void 0);
                          }
                          if (g && !t[m]) break;
                          var _ = (f = x(t[m])).literal,
                            $ = (i[a] = f(e));
                          (u[a] = new Cn($n, i[a])),
                            (v = e[r.collection ? "$watchCollection" : "$watch"](f, function (e, t) {
                              if (t === e) {
                                if (t === $ || (_ && ue(t, $))) return;
                                t = $;
                              }
                              c(a, e, t), (i[a] = e);
                            })),
                            s.push(v);
                          break;
                        case "&":
                          if ((g || d.call(t, m) || Ne(m, o.name), (f = t.hasOwnProperty(m) ? x(t[m]) : I) === I && g)) break;
                          i[a] = function (t) {
                            return f(e, t);
                          };
                      }
                    }),
                    {
                      initialChanges: u,
                      removeWatches:
                        s.length &&
                        function () {
                          for (var e = 0, t = s.length; e < t; ++e) s[e]();
                        }
                    }
                  );
                }
              }
            ]);
        }
        function Cn(e, t) {
          (this.previousValue = e), (this.currentValue = t);
        }
        (bn.$inject = ["$provide", "$$sanitizeUriProvider"]),
          (Cn.prototype.isFirstChange = function () {
            return this.previousValue === $n;
          });
        var wn = /^((?:x|data)[:\-_])/i,
          Sn = /[:\-_]+(.)/g;
        function xn(e) {
          return e.replace(wn, "").replace(Sn, function (e, t, n) {
            return n ? t.toUpperCase() : t;
          });
        }
        function Tn(e, t) {
          var n = "",
            i = e.split(/\s+/),
            r = t.split(/\s+/);
          e: for (var o = 0; o < i.length; o++) {
            for (var a = i[o], s = 0; s < r.length; s++) if (a === r[s]) continue e;
            n += (n.length > 0 ? " " : "") + a;
          }
          return n;
        }
        function En(e) {
          var t = (e = a(e)).length;
          if (t <= 1) return e;
          for (; t--; ) {
            var n = e[t];
            (n.nodeType === He || (n.nodeType === Ve && "" === n.nodeValue.trim())) && v.call(e, t, 1);
          }
          return e;
        }
        var kn = r("$controller"),
          An = /^(\S+)(\s+as\s+([\w$]+))?$/;
        function Pn(e, t) {
          if (t && W(t)) return t;
          if (W(e)) {
            var n = An.exec(e);
            if (n) return n[3];
          }
        }
        function On() {
          var e = {};
          (this.has = function (t) {
            return e.hasOwnProperty(t);
          }),
            (this.register = function (t, n) {
              Ne(t, "controller"), U(t) ? A(e, t) : (e[t] = n);
            }),
            (this.$get = [
              "$injector",
              function (t) {
                return function (i, r, o, a) {
                  var s, u, c, l;
                  if (((o = !0 === o), a && W(a) && (l = a), W(i))) {
                    if (!(u = i.match(An)))
                      throw kn("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", i);
                    if (
                      ((c = u[1]),
                      (l = l || u[3]),
                      (i = e.hasOwnProperty(c)
                        ? e[c]
                        : (function (e, t, n) {
                            if (!t) return e;
                            for (var i, r = t.split("."), o = e, a = r.length, s = 0; s < a; s++) (i = r[s]), e && (e = (o = e)[i]);
                            return !n && K(e) ? he(o, e) : e;
                          })(r.$scope, c, !0)),
                      !i)
                    )
                      throw kn("ctrlreg", "The controller with the name '{0}' is not registered.", c);
                    Re(i, c, !0);
                  }
                  if (o) {
                    var d = (q(i) ? i[i.length - 1] : i).prototype;
                    return (
                      (s = Object.create(d || null)),
                      l && n(r, l, s, c || i.name),
                      A(
                        function () {
                          var e = t.invoke(i, s, r, c);
                          return e !== s && (U(e) || K(e)) && ((s = e), l && n(r, l, s, c || i.name)), s;
                        },
                        { instance: s, identifier: l }
                      )
                    );
                  }
                  return (s = t.instantiate(i, r, c)), l && n(r, l, s, c || i.name), s;
                };
                function n(e, t, n, i) {
                  if (!e || !U(e.$scope))
                    throw r("$controller")(
                      "noscp",
                      "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.",
                      i,
                      t
                    );
                  e.$scope[t] = n;
                }
              }
            ]);
        }
        function Mn() {
          this.$get = [
            "$window",
            function (e) {
              return a(e.document);
            }
          ];
        }
        function Ln() {
          this.$get = [
            "$document",
            "$rootScope",
            function (e, t) {
              var n = e[0],
                i = n && n.hidden;
              function r() {
                i = n.hidden;
              }
              return (
                e.on("visibilitychange", r),
                t.$on("$destroy", function () {
                  e.off("visibilitychange", r);
                }),
                function () {
                  return i;
                }
              );
            }
          ];
        }
        function In() {
          this.$get = [
            "$log",
            function (e) {
              return function (t, n) {
                e.error.apply(e, arguments);
              };
            }
          ];
        }
        var Dn = function () {
            this.$get = [
              "$document",
              function (e) {
                return function (t) {
                  return t ? !t.nodeType && t instanceof a && (t = t[0]) : (t = e[0].body), t.offsetWidth + 1;
                };
              }
            ];
          },
          Bn = "application/json",
          Rn = { "Content-Type": Bn + ";charset=utf-8" },
          Nn = /^\[|^\{(?!\{)/,
          Fn = { "[": /]$/, "{": /}$/ },
          Un = /^\)]\}',?\n/,
          jn = r("$http");
        function Wn(e) {
          return U(e) ? (H(e) ? e.toISOString() : ve(e)) : e;
        }
        function Vn() {
          this.$get = function () {
            return function (e) {
              if (!e) return "";
              var t = [];
              return (
                S(e, function (e, n) {
                  null === e ||
                    N(e) ||
                    K(e) ||
                    (q(e)
                      ? w(e, function (e) {
                          t.push(xe(n) + "=" + xe(Wn(e)));
                        })
                      : t.push(xe(n) + "=" + xe(Wn(e))));
                }),
                t.join("&")
              );
            };
          };
        }
        function Hn() {
          this.$get = function () {
            return function (e) {
              if (!e) return "";
              var t = [];
              return (
                (function e(n, i, r) {
                  q(n)
                    ? w(n, function (t, n) {
                        e(t, i + "[" + (U(t) ? n : "") + "]");
                      })
                    : U(n) && !H(n)
                    ? S(n, function (t, n) {
                        e(t, i + (r ? "" : "[") + n + (r ? "" : "]"));
                      })
                    : (K(n) && (n = n()), t.push(xe(i) + "=" + (null == n ? "" : xe(Wn(n)))));
                })(e, "", !0),
                t.join("&")
              );
            };
          };
        }
        function qn(e, t) {
          if (W(e)) {
            var n = e.replace(Un, "").trim();
            if (n) {
              var i = t("Content-Type"),
                r = i && 0 === i.indexOf(Bn);
              if (r || ((a = (o = n).match(Nn)) && Fn[a[0]].test(o)))
                try {
                  e = me(n);
                } catch (t) {
                  if (!r) return e;
                  throw jn("baddata", 'Data must be a valid JSON object. Received: "{0}". Parse error: "{1}"', e, t);
                }
            }
          }
          var o, a;
          return e;
        }
        function zn(e) {
          var t,
            n = Ue();
          function i(e, t) {
            e && (n[e] = n[e] ? n[e] + ", " + t : t);
          }
          return (
            W(e)
              ? w(e.split("\n"), function (e) {
                  (t = e.indexOf(":")), i(f(ee(e.substr(0, t))), ee(e.substr(t + 1)));
                })
              : U(e) &&
                w(e, function (e, t) {
                  i(f(t), ee(e));
                }),
            n
          );
        }
        function Kn(e) {
          var t;
          return function (n) {
            if ((t || (t = zn(e)), n)) {
              var i = t[f(n)];
              return void 0 === i && (i = null), i;
            }
            return t;
          };
        }
        function Gn(e, t, n, i) {
          return K(i)
            ? i(e, t, n)
            : (w(i, function (i) {
                e = i(e, t, n);
              }),
              e);
        }
        function Zn(e) {
          return 200 <= e && e < 300;
        }
        function Qn() {
          var e = (this.defaults = {
              transformResponse: [qn],
              transformRequest: [
                function (e) {
                  return !U(e) ||
                    ((t = e), "[object File]" === g.call(t)) ||
                    (function (e) {
                      return "[object Blob]" === g.call(e);
                    })(e) ||
                    (function (e) {
                      return "[object FormData]" === g.call(e);
                    })(e)
                    ? e
                    : ve(e);
                  var t;
                }
              ],
              headers: { common: { Accept: "application/json, text/plain, */*" }, post: Ke(Rn), put: Ke(Rn), patch: Ke(Rn) },
              xsrfCookieName: "XSRF-TOKEN",
              xsrfHeaderName: "X-XSRF-TOKEN",
              paramSerializer: "$httpParamSerializer",
              jsonpCallbackParam: "callback"
            }),
            t = !1;
          this.useApplyAsync = function (e) {
            return F(e) ? ((t = !!e), this) : t;
          };
          var n = (this.interceptors = []),
            i = (this.xsrfWhitelistedOrigins = []);
          this.$get = [
            "$browser",
            "$httpBackend",
            "$$cookieReader",
            "$cacheFactory",
            "$rootScope",
            "$q",
            "$injector",
            "$sce",
            function (o, a, s, u, c, l, d, p) {
              var v = u("$http");
              e.paramSerializer = W(e.paramSerializer) ? d.get(e.paramSerializer) : e.paramSerializer;
              var m = [];
              w(n, function (e) {
                m.unshift(W(e) ? d.get(e) : d.invoke(e));
              });
              var g,
                y =
                  ((g = [vr].concat(i.map(gr))),
                  function (e) {
                    var t = gr(e);
                    return g.some(yr.bind(null, t));
                  });
              function _(n) {
                if (!U(n)) throw r("$http")("badreq", "Http request configuration must be an object.  Received: {0}", n);
                if (!W(p.valueOf(n.url)))
                  throw r("$http")(
                    "badreq",
                    "Http request configuration url must be a string or a $sce trusted object.  Received: {0}",
                    n.url
                  );
                var i = A(
                  {
                    method: "get",
                    transformRequest: e.transformRequest,
                    transformResponse: e.transformResponse,
                    paramSerializer: e.paramSerializer,
                    jsonpCallbackParam: e.jsonpCallbackParam
                  },
                  n
                );
                (i.headers = (function (t) {
                  var n,
                    i,
                    r,
                    o = e.headers,
                    a = A({}, t.headers);
                  o = A({}, o.common, o[f(t.method)]);
                  e: for (n in o) {
                    for (r in ((i = f(n)), a)) if (f(r) === i) continue e;
                    a[n] = o[n];
                  }
                  return (function (e, t) {
                    var n,
                      i = {};
                    return (
                      w(e, function (e, r) {
                        K(e) ? null != (n = e(t)) && (i[r] = n) : (i[r] = e);
                      }),
                      i
                    );
                  })(a, Ke(t));
                })(n)),
                  (i.method = h(i.method)),
                  (i.paramSerializer = W(i.paramSerializer) ? d.get(i.paramSerializer) : i.paramSerializer),
                  o.$$incOutstandingRequestCount("$http");
                var u = [],
                  g = [],
                  $ = l.resolve(i);
                return (
                  w(m, function (e) {
                    (e.request || e.requestError) && u.unshift(e.request, e.requestError),
                      (e.response || e.responseError) && g.push(e.response, e.responseError);
                  }),
                  ($ = ($ = b($, u)).then(function (n) {
                    var i = n.headers,
                      r = Gn(n.data, Kn(i), void 0, n.transformRequest);
                    N(r) &&
                      w(i, function (e, t) {
                        "content-type" === f(t) && delete i[t];
                      });
                    N(n.withCredentials) && !N(e.withCredentials) && (n.withCredentials = e.withCredentials);
                    return (function (n, i) {
                      var r,
                        o,
                        u = l.defer(),
                        d = u.promise,
                        h = n.headers,
                        m = "jsonp" === f(n.method),
                        g = n.url;
                      m ? (g = p.getTrustedResourceUrl(g)) : W(g) || (g = p.valueOf(g));
                      (g = (function (e, t) {
                        t.length > 0 && (e += (-1 === e.indexOf("?") ? "?" : "&") + t);
                        return e;
                      })(g, n.paramSerializer(n.params))),
                        m &&
                          (g = (function (e, t) {
                            var n = e.split("?");
                            if (n.length > 2) throw jn("badjsonp", 'Illegal use more than one "?", in url, "{1}"', e);
                            return (
                              w(we(n[1]), function (n, i) {
                                if ("JSON_CALLBACK" === n) throw jn("badjsonp", 'Illegal use of JSON_CALLBACK in url, "{0}"', e);
                                if (i === t) throw jn("badjsonp", 'Illegal use of callback param, "{0}", in url, "{1}"', t, e);
                              }),
                              (e += (-1 === e.indexOf("?") ? "?" : "&") + t + "=JSON_CALLBACK"),
                              e
                            );
                          })(g, n.jsonpCallbackParam));
                      _.pendingRequests.push(n),
                        d.then(T, T),
                        (!n.cache && !e.cache) ||
                          !1 === n.cache ||
                          ("GET" !== n.method && "JSONP" !== n.method) ||
                          (r = U(n.cache) ? n.cache : U(e.cache) ? e.cache : v);
                      r &&
                        (F((o = r.get(g)))
                          ? Y(o)
                            ? o.then(x, x)
                            : q(o)
                            ? S(o[1], o[0], Ke(o[2]), o[3], o[4])
                            : S(o, 200, {}, "OK", "complete")
                          : r.put(g, d));
                      if (N(o)) {
                        var $ = y(n.url) ? s()[n.xsrfCookieName || e.xsrfCookieName] : void 0;
                        $ && (h[n.xsrfHeaderName || e.xsrfHeaderName] = $),
                          a(
                            n.method,
                            g,
                            i,
                            C,
                            h,
                            n.timeout,
                            n.withCredentials,
                            n.responseType,
                            b(n.eventHandlers),
                            b(n.uploadEventHandlers)
                          );
                      }
                      return d;
                      function b(e) {
                        if (e) {
                          var n = {};
                          return (
                            w(e, function (e, i) {
                              n[i] = function (n) {
                                function i() {
                                  e(n);
                                }
                                t ? c.$applyAsync(i) : c.$$phase ? i() : c.$apply(i);
                              };
                            }),
                            n
                          );
                        }
                      }
                      function C(e, n, i, o, a) {
                        function s() {
                          S(n, e, i, o, a);
                        }
                        r && (Zn(e) ? r.put(g, [e, n, zn(i), o, a]) : r.remove(g)), t ? c.$applyAsync(s) : (s(), c.$$phase || c.$apply());
                      }
                      function S(e, t, i, r, o) {
                        (Zn((t = t >= -1 ? t : 0)) ? u.resolve : u.reject)({
                          data: e,
                          status: t,
                          headers: Kn(i),
                          config: n,
                          statusText: r,
                          xhrStatus: o
                        });
                      }
                      function x(e) {
                        S(e.data, e.status, Ke(e.headers()), e.statusText, e.xhrStatus);
                      }
                      function T() {
                        var e = _.pendingRequests.indexOf(n);
                        -1 !== e && _.pendingRequests.splice(e, 1);
                      }
                    })(n, r).then(C, C);
                  })),
                  ($ = ($ = b($, g)).finally(function () {
                    o.$$completeOutstandingRequest(I, "$http");
                  }))
                );
                function b(e, t) {
                  for (var n = 0, i = t.length; n < i; ) {
                    var r = t[n++],
                      o = t[n++];
                    e = e.then(r, o);
                  }
                  return (t.length = 0), e;
                }
                function C(e) {
                  var t = A({}, e);
                  return (t.data = Gn(e.data, e.headers, e.status, i.transformResponse)), Zn(e.status) ? t : l.reject(t);
                }
              }
              return (
                (_.pendingRequests = []),
                (function (e) {
                  w(arguments, function (e) {
                    _[e] = function (t, n) {
                      return _(A({}, n || {}, { method: e, url: t }));
                    };
                  });
                })("get", "delete", "head", "jsonp"),
                (function (e) {
                  w(arguments, function (e) {
                    _[e] = function (t, n, i) {
                      return _(A({}, i || {}, { method: e, url: t, data: n }));
                    };
                  });
                })("post", "put", "patch"),
                (_.defaults = e),
                _
              );
            }
          ];
        }
        function Jn() {
          this.$get = function () {
            return function () {
              return new e.XMLHttpRequest();
            };
          };
        }
        function Yn() {
          this.$get = [
            "$browser",
            "$jsonpCallbacks",
            "$document",
            "$xhrFactory",
            function (e, t, n, i) {
              return (function (e, t, n, i, r) {
                return function (r, a, s, u, c, l, d, h, p, v) {
                  if (((a = a || e.url()), "jsonp" === f(r)))
                    var m = i.createCallback(a),
                      g = o(a, m, function (e, t) {
                        var n = 200 === e && i.getResponse(m);
                        T(u, e, n, "", t, "complete"), i.removeCallback(m);
                      });
                  else {
                    var y = t(r, a),
                      _ = !1;
                    y.open(r, a, !0),
                      w(c, function (e, t) {
                        F(e) && y.setRequestHeader(t, e);
                      }),
                      (y.onload = function () {
                        var e = y.statusText || "",
                          t = "response" in y ? y.response : y.responseText,
                          n = 1223 === y.status ? 204 : y.status;
                        0 === n && (n = t ? 200 : "file" === gr(a).protocol ? 404 : 0),
                          T(u, n, t, y.getAllResponseHeaders(), e, "complete");
                      });
                    var $ = function () {
                        T(u, -1, null, null, "", "error");
                      },
                      b = function () {
                        T(u, -1, null, null, "", _ ? "timeout" : "abort");
                      },
                      C = function () {
                        T(u, -1, null, null, "", "timeout");
                      };
                    if (
                      ((y.onerror = $),
                      (y.ontimeout = C),
                      (y.onabort = b),
                      w(p, function (e, t) {
                        y.addEventListener(t, e);
                      }),
                      w(v, function (e, t) {
                        y.upload.addEventListener(t, e);
                      }),
                      d && (y.withCredentials = !0),
                      h)
                    )
                      try {
                        y.responseType = h;
                      } catch (e) {
                        if ("json" !== h) throw e;
                      }
                    y.send(N(s) ? null : s);
                  }
                  if (l > 0)
                    var S = n(function () {
                      x("timeout");
                    }, l);
                  else
                    Y(l) &&
                      l.then(function () {
                        x(F(l.$$timeoutId) ? "timeout" : "abort");
                      });
                  function x(e) {
                    (_ = "timeout" === e), g && g(), y && y.abort();
                  }
                  function T(e, t, i, r, o, a) {
                    F(S) && n.cancel(S), (g = y = null), e(t, i, r, o, a);
                  }
                };
                function o(e, t, n) {
                  e = e.replace("JSON_CALLBACK", t);
                  var o = r.createElement("script"),
                    a = null;
                  return (
                    (o.type = "text/javascript"),
                    (o.src = e),
                    (o.async = !0),
                    (a = function (e) {
                      o.removeEventListener("load", a), o.removeEventListener("error", a), r.body.removeChild(o), (o = null);
                      var s = -1,
                        u = "unknown";
                      e &&
                        ("load" !== e.type || i.wasCalled(t) || (e = { type: "error" }),
                        (u = e.type),
                        (s = "error" === e.type ? 404 : 200)),
                        n && n(s, u);
                    }),
                    o.addEventListener("load", a),
                    o.addEventListener("error", a),
                    r.body.appendChild(o),
                    a
                  );
                }
              })(e, i, e.defer, t, n[0]);
            }
          ];
        }
        var Xn = ($.$interpolateMinErr = r("$interpolate"));
        function ei() {
          var e = "{{",
            t = "}}";
          (this.startSymbol = function (t) {
            return t ? ((e = t), this) : e;
          }),
            (this.endSymbol = function (e) {
              return e ? ((t = e), this) : t;
            }),
            (this.$get = [
              "$parse",
              "$exceptionHandler",
              "$sce",
              function (n, i, r) {
                var o = e.length,
                  a = t.length,
                  s = new RegExp(e.replace(/./g, c), "g"),
                  u = new RegExp(t.replace(/./g, c), "g");
                function c(e) {
                  return "\\\\\\" + e;
                }
                function l(n) {
                  return n.replace(s, e).replace(u, t);
                }
                function d(e, t, n, i) {
                  var r = e.$watch(
                    function (e) {
                      return r(), i(e);
                    },
                    t,
                    n
                  );
                  return r;
                }
                function f(s, u, c, f) {
                  var h = c === r.URL || c === r.MEDIA_URL;
                  if (!s.length || -1 === s.indexOf(e)) {
                    if (u) return;
                    var p = l(s);
                    h && (p = r.getTrusted(c, p));
                    var v = B(p);
                    return (v.exp = s), (v.expressions = []), (v.$$watchDelegate = d), v;
                  }
                  f = !!f;
                  for (var m, g, y, _, $, b = 0, C = [], w = s.length, S = [], x = []; b < w; ) {
                    if (-1 === (m = s.indexOf(e, b)) || -1 === (g = s.indexOf(t, m + o))) {
                      b !== w && S.push(l(s.substring(b)));
                      break;
                    }
                    b !== m && S.push(l(s.substring(b, m))),
                      (_ = s.substring(m + o, g)),
                      C.push(_),
                      (b = g + a),
                      x.push(S.length),
                      S.push("");
                  }
                  $ = 1 === S.length && 1 === x.length;
                  var T =
                    h && $
                      ? void 0
                      : function (e) {
                          try {
                            return (e = c && !h ? r.getTrusted(c, e) : r.valueOf(e)), f && !F(e) ? e : je(e);
                          } catch (e) {
                            i(Xn.interr(s, e));
                          }
                        };
                  if (
                    ((y = C.map(function (e) {
                      return n(e, T);
                    })),
                    !u || C.length)
                  ) {
                    var E = function (e) {
                      for (var t = 0, n = C.length; t < n; t++) {
                        if (f && N(e[t])) return;
                        S[x[t]] = e[t];
                      }
                      return h ? r.getTrusted(c, $ ? S[0] : S.join("")) : (c && S.length > 1 && Xn.throwNoconcat(s), S.join(""));
                    };
                    return A(
                      function (e) {
                        var t = 0,
                          n = C.length,
                          r = new Array(n);
                        try {
                          for (; t < n; t++) r[t] = y[t](e);
                          return E(r);
                        } catch (e) {
                          i(Xn.interr(s, e));
                        }
                      },
                      {
                        exp: s,
                        expressions: C,
                        $$watchDelegate: function (e, t) {
                          var n;
                          return e.$watchGroup(y, function (i, r) {
                            var o = E(i);
                            t.call(this, o, i !== r ? n : o, e), (n = o);
                          });
                        }
                      }
                    );
                  }
                }
                return (
                  (f.startSymbol = function () {
                    return e;
                  }),
                  (f.endSymbol = function () {
                    return t;
                  }),
                  f
                );
              }
            ]);
        }
        (Xn.throwNoconcat = function (e) {
          throw Xn(
            "noconcat",
            "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce",
            e
          );
        }),
          (Xn.interr = function (e, t) {
            return Xn("interr", "Can't interpolate: {0}\n{1}", e, t.toString());
          });
        var ti = r("$interval");
        function ni() {
          this.$get = [
            "$$intervalFactory",
            "$window",
            function (e, t) {
              var n = {},
                i = function (e) {
                  t.clearInterval(e), delete n[e];
                },
                r = e(function (e, i, r) {
                  var o = t.setInterval(e, i);
                  return (n[o] = r), o;
                }, i);
              return (
                (r.cancel = function (e) {
                  if (!e) return !1;
                  if (!e.hasOwnProperty("$$intervalId"))
                    throw ti("badprom", "`$interval.cancel()` called with a promise that was not generated by `$interval()`.");
                  if (!n.hasOwnProperty(e.$$intervalId)) return !1;
                  var t = e.$$intervalId,
                    r = n[t];
                  return Gi(r.promise), r.reject("canceled"), i(t), !0;
                }),
                r
              );
            }
          ];
        }
        function ii() {
          this.$get = [
            "$browser",
            "$q",
            "$$q",
            "$rootScope",
            function (e, t, n, i) {
              return function (r, o) {
                return function (a, s, u, c) {
                  var l = arguments.length > 4,
                    d = l ? fe(arguments, 4) : [],
                    f = 0,
                    h = F(c) && !c,
                    p = (h ? n : t).defer(),
                    v = p.promise;
                  function m() {
                    l ? a.apply(null, d) : a(f);
                  }
                  return (
                    (u = F(u) ? u : 0),
                    (v.$$intervalId = r(
                      function () {
                        h ? e.defer(m) : i.$evalAsync(m),
                          p.notify(f++),
                          u > 0 && f >= u && (p.resolve(f), o(v.$$intervalId)),
                          h || i.$apply();
                      },
                      s,
                      p,
                      h
                    )),
                    v
                  );
                };
              };
            }
          ];
        }
        var ri = function () {
            this.$get = function () {
              var e = $.callbacks,
                t = {};
              return {
                createCallback: function (n) {
                  var i = "_" + (e.$$counter++).toString(36),
                    r = "angular.callbacks." + i,
                    o = (function (e) {
                      var t = function (e) {
                        (t.data = e), (t.called = !0);
                      };
                      return (t.id = e), t;
                    })(i);
                  return (t[r] = e[i] = o), r;
                },
                wasCalled: function (e) {
                  return t[e].called;
                },
                getResponse: function (e) {
                  return t[e].data;
                },
                removeCallback: function (n) {
                  var i = t[n];
                  delete e[i.id], delete t[n];
                }
              };
            };
          },
          oi = /^([^?#]*)(\?([^#]*))?(#(.*))?$/,
          ai = { http: 80, https: 443, ftp: 21 },
          si = r("$location");
        function ui(e, t, n) {
          var i,
            r =
              ((i = []),
              w(t, function (e, t) {
                q(e)
                  ? w(e, function (e) {
                      i.push(xe(t, !0) + (!0 === e ? "" : "=" + xe(e, !0)));
                    })
                  : i.push(xe(t, !0) + (!0 === e ? "" : "=" + xe(e, !0)));
              }),
              i.length ? i.join("&") : ""),
            o = n ? "#" + Se(n) : "";
          return (
            (function (e) {
              for (var t = e.split("/"), n = t.length; n--; ) t[n] = Se(t[n].replace(/%2F/g, "/"));
              return t.join("/");
            })(e) +
            (r ? "?" + r : "") +
            o
          );
        }
        function ci(e, t) {
          var n = gr(e);
          (t.$$protocol = n.protocol), (t.$$host = n.hostname), (t.$$port = O(n.port) || ai[n.protocol] || null);
        }
        var li = /^\s*[\\/]{2,}/;
        function di(e, t, n) {
          if (li.test(e)) throw si("badpath", 'Invalid url "{0}".', e);
          var i = "/" !== e.charAt(0);
          i && (e = "/" + e);
          var r = gr(e),
            o = i && "/" === r.pathname.charAt(0) ? r.pathname.substring(1) : r.pathname;
          (t.$$path = (function (e, t) {
            for (var n = e.split("/"), i = n.length; i--; ) (n[i] = decodeURIComponent(n[i])), t && (n[i] = n[i].replace(/\//g, "%2F"));
            return n.join("/");
          })(o, n)),
            (t.$$search = we(r.search)),
            (t.$$hash = decodeURIComponent(r.hash)),
            t.$$path && "/" !== t.$$path.charAt(0) && (t.$$path = "/" + t.$$path);
        }
        function fi(e, t) {
          return e.slice(0, t.length) === t;
        }
        function hi(e, t) {
          if (fi(t, e)) return t.substr(e.length);
        }
        function pi(e) {
          var t = e.indexOf("#");
          return -1 === t ? e : e.substr(0, t);
        }
        function vi(e, t, n) {
          (this.$$html5 = !0),
            (n = n || ""),
            ci(e, this),
            (this.$$parse = function (e) {
              var n = hi(t, e);
              if (!W(n)) throw si("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', e, t);
              di(n, this, !0), this.$$path || (this.$$path = "/"), this.$$compose();
            }),
            (this.$$normalizeUrl = function (e) {
              return t + e.substr(1);
            }),
            (this.$$parseLinkUrl = function (i, r) {
              return r && "#" === r[0]
                ? (this.hash(r.slice(1)), !0)
                : (F((o = hi(e, i)))
                    ? ((a = o), (s = n && F((o = hi(n, o))) ? t + (hi("/", o) || o) : e + a))
                    : F((o = hi(t, i)))
                    ? (s = t + o)
                    : t === i + "/" && (s = t),
                  s && this.$$parse(s),
                  !!s);
              var o, a, s;
            });
        }
        function mi(e, t, n) {
          ci(e, this),
            (this.$$parse = function (i) {
              var r,
                o = hi(e, i) || hi(t, i);
              N(o) || "#" !== o.charAt(0)
                ? this.$$html5
                  ? (r = o)
                  : ((r = ""), N(o) && ((e = i), this.replace()))
                : N((r = hi(n, o))) && (r = o),
                di(r, this, !1),
                (this.$$path = (function (e, t, n) {
                  var i,
                    r = /^\/[A-Z]:(\/.*)/;
                  fi(t, n) && (t = t.replace(n, ""));
                  if (r.exec(t)) return e;
                  return (i = r.exec(e)) ? i[1] : e;
                })(this.$$path, r, e)),
                this.$$compose();
            }),
            (this.$$normalizeUrl = function (t) {
              return e + (t ? n + t : "");
            }),
            (this.$$parseLinkUrl = function (t, n) {
              return pi(e) === pi(t) && (this.$$parse(t), !0);
            });
        }
        function gi(e, t, n) {
          (this.$$html5 = !0),
            mi.apply(this, arguments),
            (this.$$parseLinkUrl = function (i, r) {
              return r && "#" === r[0]
                ? (this.hash(r.slice(1)), !0)
                : (e === pi(i) ? (o = i) : (a = hi(t, i)) ? (o = e + n + a) : t === i + "/" && (o = t), o && this.$$parse(o), !!o);
              var o, a;
            }),
            (this.$$normalizeUrl = function (t) {
              return e + n + t;
            });
        }
        var yi = {
          $$absUrl: "",
          $$html5: !1,
          $$replace: !1,
          $$compose: function () {
            (this.$$url = ui(this.$$path, this.$$search, this.$$hash)),
              (this.$$absUrl = this.$$normalizeUrl(this.$$url)),
              (this.$$urlUpdatedByLocation = !0);
          },
          absUrl: _i("$$absUrl"),
          url: function (e) {
            if (N(e)) return this.$$url;
            var t = oi.exec(e);
            return (
              (t[1] || "" === e) && this.path(decodeURIComponent(t[1])),
              (t[2] || t[1] || "" === e) && this.search(t[3] || ""),
              this.hash(t[5] || ""),
              this
            );
          },
          protocol: _i("$$protocol"),
          host: _i("$$host"),
          port: _i("$$port"),
          path: $i("$$path", function (e) {
            return "/" === (e = null !== e ? e.toString() : "").charAt(0) ? e : "/" + e;
          }),
          search: function (e, t) {
            switch (arguments.length) {
              case 0:
                return this.$$search;
              case 1:
                if (W(e) || V(e)) (e = e.toString()), (this.$$search = we(e));
                else {
                  if (!U(e)) throw si("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                  w((e = ae(e, {})), function (t, n) {
                    null == t && delete e[n];
                  }),
                    (this.$$search = e);
                }
                break;
              default:
                N(t) || null === t ? delete this.$$search[e] : (this.$$search[e] = t);
            }
            return this.$$compose(), this;
          },
          hash: $i("$$hash", function (e) {
            return null !== e ? e.toString() : "";
          }),
          replace: function () {
            return (this.$$replace = !0), this;
          }
        };
        function _i(e) {
          return function () {
            return this[e];
          };
        }
        function $i(e, t) {
          return function (n) {
            return N(n) ? this[e] : ((this[e] = t(n)), this.$$compose(), this);
          };
        }
        function bi() {
          var e = "!",
            t = { enabled: !1, requireBase: !0, rewriteLinks: !0 };
          (this.hashPrefix = function (t) {
            return F(t) ? ((e = t), this) : e;
          }),
            (this.html5Mode = function (e) {
              return J(e)
                ? ((t.enabled = e), this)
                : U(e)
                ? (J(e.enabled) && (t.enabled = e.enabled),
                  J(e.requireBase) && (t.requireBase = e.requireBase),
                  (J(e.rewriteLinks) || W(e.rewriteLinks)) && (t.rewriteLinks = e.rewriteLinks),
                  this)
                : t;
            }),
            (this.$get = [
              "$rootScope",
              "$browser",
              "$sniffer",
              "$rootElement",
              "$window",
              function (n, i, r, o, s) {
                var u,
                  c,
                  l,
                  d,
                  f = i.baseHref(),
                  h = i.url();
                if (t.enabled) {
                  if (!f && t.requireBase) throw si("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                  (l = (d = h).substring(0, d.indexOf("/", d.indexOf("//") + 2)) + (f || "/")), (c = r.history ? vi : gi);
                } else (l = pi(h)), (c = mi);
                var p = (function (e) {
                  return e.substr(0, pi(e).lastIndexOf("/") + 1);
                })(l);
                (u = new c(l, p, "#" + e)).$$parseLinkUrl(h, h), (u.$$state = i.state());
                var v = /^\s*(javascript|mailto):/i;
                function m(e, t, n) {
                  var r = u.url(),
                    o = u.$$state;
                  try {
                    i.url(e, t, n), (u.$$state = i.state());
                  } catch (e) {
                    throw (u.url(r), (u.$$state = o), e);
                  }
                }
                o.on("click", function (e) {
                  var r = t.rewriteLinks;
                  if (r && !e.ctrlKey && !e.metaKey && !e.shiftKey && 2 !== e.which && 2 !== e.button) {
                    for (var s = a(e.target); "a" !== ie(s[0]); ) if (s[0] === o[0] || !(s = s.parent())[0]) return;
                    if (!W(r) || !N(s.attr(r))) {
                      var c = s.prop("href"),
                        l = s.attr("href") || s.attr("xlink:href");
                      U(c) && "[object SVGAnimatedString]" === c.toString() && (c = gr(c.animVal).href),
                        v.test(c) ||
                          !c ||
                          s.attr("target") ||
                          e.isDefaultPrevented() ||
                          (u.$$parseLinkUrl(c, l) && (e.preventDefault(), u.absUrl() !== i.url() && n.$apply()));
                    }
                  }
                }),
                  u.absUrl() !== h && i.url(u.absUrl(), !0);
                var g = !0;
                return (
                  i.onUrlChange(function (e, t) {
                    fi(e, p)
                      ? (n.$evalAsync(function () {
                          var i,
                            r = u.absUrl(),
                            o = u.$$state;
                          u.$$parse(e),
                            (u.$$state = t),
                            (i = n.$broadcast("$locationChangeStart", e, r, t, o).defaultPrevented),
                            u.absUrl() === e && (i ? (u.$$parse(r), (u.$$state = o), m(r, !1, o)) : ((g = !1), y(r, o)));
                        }),
                        n.$$phase || n.$digest())
                      : (s.location.href = e);
                  }),
                  n.$watch(function () {
                    if (g || u.$$urlUpdatedByLocation) {
                      u.$$urlUpdatedByLocation = !1;
                      var e = i.url(),
                        t = u.absUrl(),
                        o = i.state(),
                        a = u.$$replace,
                        s = !((c = e) === (l = t) || gr(c).href === gr(l).href) || (u.$$html5 && r.history && o !== u.$$state);
                      (g || s) &&
                        ((g = !1),
                        n.$evalAsync(function () {
                          var t = u.absUrl(),
                            i = n.$broadcast("$locationChangeStart", t, e, u.$$state, o).defaultPrevented;
                          u.absUrl() === t &&
                            (i ? (u.$$parse(e), (u.$$state = o)) : (s && m(t, a, o === u.$$state ? null : u.$$state), y(e, o)));
                        }));
                    }
                    var c, l;
                    u.$$replace = !1;
                  }),
                  u
                );
                function y(e, t) {
                  n.$broadcast("$locationChangeSuccess", u.absUrl(), e, u.$$state, t);
                }
              }
            ]);
        }
        function Ci() {
          var e = !0,
            t = this;
          (this.debugEnabled = function (t) {
            return F(t) ? ((e = t), this) : e;
          }),
            (this.$get = [
              "$window",
              function (n) {
                var i,
                  r = o || /\bEdge\//.test(n.navigator && n.navigator.userAgent);
                return {
                  log: a("log"),
                  info: a("info"),
                  warn: a("warn"),
                  error: a("error"),
                  debug:
                    ((i = a("debug")),
                    function () {
                      e && i.apply(t, arguments);
                    })
                };
                function a(e) {
                  var t = n.console || {},
                    i = t[e] || t.log || I;
                  return function () {
                    var e = [];
                    return (
                      w(arguments, function (t) {
                        e.push(
                          (function (e) {
                            return (
                              z(e) &&
                                (e.stack && r
                                  ? (e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack)
                                  : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)),
                              e
                            );
                          })(t)
                        );
                      }),
                      Function.prototype.apply.call(i, t, e)
                    );
                  };
                }
              }
            ]);
        }
        w([gi, mi, vi], function (e) {
          (e.prototype = Object.create(yi)),
            (e.prototype.state = function (t) {
              if (!arguments.length) return this.$$state;
              if (e !== vi || !this.$$html5)
                throw si(
                  "nostate",
                  "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API"
                );
              return (this.$$state = N(t) ? null : t), (this.$$urlUpdatedByLocation = !0), this;
            });
        });
        var wi = r("$parse"),
          Si = {}.constructor.prototype.valueOf;
        function xi(e) {
          return e + "";
        }
        var Ti = Ue();
        w("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (e) {
          Ti[e] = !0;
        });
        var Ei = { n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"' },
          ki = function (e) {
            this.options = e;
          };
        ki.prototype = {
          constructor: ki,
          lex: function (e) {
            for (this.text = e, this.index = 0, this.tokens = []; this.index < this.text.length; ) {
              var t = this.text.charAt(this.index);
              if ('"' === t || "'" === t) this.readString(t);
              else if (this.isNumber(t) || ("." === t && this.isNumber(this.peek()))) this.readNumber();
              else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();
              else if (this.is(t, "(){}[].,;:?")) this.tokens.push({ index: this.index, text: t }), this.index++;
              else if (this.isWhitespace(t)) this.index++;
              else {
                var n = t + this.peek(),
                  i = n + this.peek(2),
                  r = Ti[t],
                  o = Ti[n],
                  a = Ti[i];
                if (r || o || a) {
                  var s = a ? i : o ? n : t;
                  this.tokens.push({ index: this.index, text: s, operator: !0 }), (this.index += s.length);
                } else this.throwError("Unexpected next character ", this.index, this.index + 1);
              }
            }
            return this.tokens;
          },
          is: function (e, t) {
            return -1 !== t.indexOf(e);
          },
          peek: function (e) {
            var t = e || 1;
            return this.index + t < this.text.length && this.text.charAt(this.index + t);
          },
          isNumber: function (e) {
            return "0" <= e && e <= "9" && "string" == typeof e;
          },
          isWhitespace: function (e) {
            return " " === e || "\r" === e || "\t" === e || "\n" === e || "\v" === e || " " === e;
          },
          isIdentifierStart: function (e) {
            return this.options.isIdentifierStart ? this.options.isIdentifierStart(e, this.codePointAt(e)) : this.isValidIdentifierStart(e);
          },
          isValidIdentifierStart: function (e) {
            return ("a" <= e && e <= "z") || ("A" <= e && e <= "Z") || "_" === e || "$" === e;
          },
          isIdentifierContinue: function (e) {
            return this.options.isIdentifierContinue
              ? this.options.isIdentifierContinue(e, this.codePointAt(e))
              : this.isValidIdentifierContinue(e);
          },
          isValidIdentifierContinue: function (e, t) {
            return this.isValidIdentifierStart(e, t) || this.isNumber(e);
          },
          codePointAt: function (e) {
            return 1 === e.length ? e.charCodeAt(0) : (e.charCodeAt(0) << 10) + e.charCodeAt(1) - 56613888;
          },
          peekMultichar: function () {
            var e = this.text.charAt(this.index),
              t = this.peek();
            if (!t) return e;
            var n = e.charCodeAt(0),
              i = t.charCodeAt(0);
            return n >= 55296 && n <= 56319 && i >= 56320 && i <= 57343 ? e + t : e;
          },
          isExpOperator: function (e) {
            return "-" === e || "+" === e || this.isNumber(e);
          },
          throwError: function (e, t, n) {
            n = n || this.index;
            var i = F(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n;
            throw wi("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", e, i, this.text);
          },
          readNumber: function () {
            for (var e = "", t = this.index; this.index < this.text.length; ) {
              var n = f(this.text.charAt(this.index));
              if ("." === n || this.isNumber(n)) e += n;
              else {
                var i = this.peek();
                if ("e" === n && this.isExpOperator(i)) e += n;
                else if (this.isExpOperator(n) && i && this.isNumber(i) && "e" === e.charAt(e.length - 1)) e += n;
                else {
                  if (!this.isExpOperator(n) || (i && this.isNumber(i)) || "e" !== e.charAt(e.length - 1)) break;
                  this.throwError("Invalid exponent");
                }
              }
              this.index++;
            }
            this.tokens.push({ index: t, text: e, constant: !0, value: Number(e) });
          },
          readIdent: function () {
            var e = this.index;
            for (this.index += this.peekMultichar().length; this.index < this.text.length; ) {
              var t = this.peekMultichar();
              if (!this.isIdentifierContinue(t)) break;
              this.index += t.length;
            }
            this.tokens.push({ index: e, text: this.text.slice(e, this.index), identifier: !0 });
          },
          readString: function (e) {
            var t = this.index;
            this.index++;
            for (var n = "", i = e, r = !1; this.index < this.text.length; ) {
              var o = this.text.charAt(this.index);
              if (((i += o), r)) {
                if ("u" === o) {
                  var a = this.text.substring(this.index + 1, this.index + 5);
                  a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"),
                    (this.index += 4),
                    (n += String.fromCharCode(parseInt(a, 16)));
                } else {
                  n += Ei[o] || o;
                }
                r = !1;
              } else if ("\\" === o) r = !0;
              else {
                if (o === e) return this.index++, void this.tokens.push({ index: t, text: i, constant: !0, value: n });
                n += o;
              }
              this.index++;
            }
            this.throwError("Unterminated quote", t);
          }
        };
        var Ai = function (e, t) {
          (this.lexer = e), (this.options = t);
        };
        function Pi(e, t) {
          return void 0 !== e ? e : t;
        }
        function Oi(e, t) {
          return void 0 === e ? t : void 0 === t ? e : e + t;
        }
        (Ai.Program = "Program"),
          (Ai.ExpressionStatement = "ExpressionStatement"),
          (Ai.AssignmentExpression = "AssignmentExpression"),
          (Ai.ConditionalExpression = "ConditionalExpression"),
          (Ai.LogicalExpression = "LogicalExpression"),
          (Ai.BinaryExpression = "BinaryExpression"),
          (Ai.UnaryExpression = "UnaryExpression"),
          (Ai.CallExpression = "CallExpression"),
          (Ai.MemberExpression = "MemberExpression"),
          (Ai.Identifier = "Identifier"),
          (Ai.Literal = "Literal"),
          (Ai.ArrayExpression = "ArrayExpression"),
          (Ai.Property = "Property"),
          (Ai.ObjectExpression = "ObjectExpression"),
          (Ai.ThisExpression = "ThisExpression"),
          (Ai.LocalsExpression = "LocalsExpression"),
          (Ai.NGValueParameter = "NGValueParameter"),
          (Ai.prototype = {
            ast: function (e) {
              (this.text = e), (this.tokens = this.lexer.lex(e));
              var t = this.program();
              return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t;
            },
            program: function () {
              for (var e = []; ; )
                if ((this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && e.push(this.expressionStatement()), !this.expect(";")))
                  return { type: Ai.Program, body: e };
            },
            expressionStatement: function () {
              return { type: Ai.ExpressionStatement, expression: this.filterChain() };
            },
            filterChain: function () {
              for (var e = this.expression(); this.expect("|"); ) e = this.filter(e);
              return e;
            },
            expression: function () {
              return this.assignment();
            },
            assignment: function () {
              var e = this.ternary();
              if (this.expect("=")) {
                if (!Bi(e)) throw wi("lval", "Trying to assign a value to a non l-value");
                e = { type: Ai.AssignmentExpression, left: e, right: this.assignment(), operator: "=" };
              }
              return e;
            },
            ternary: function () {
              var e,
                t,
                n = this.logicalOR();
              return this.expect("?") && ((e = this.expression()), this.consume(":"))
                ? ((t = this.expression()), { type: Ai.ConditionalExpression, test: n, alternate: e, consequent: t })
                : n;
            },
            logicalOR: function () {
              for (var e = this.logicalAND(); this.expect("||"); )
                e = { type: Ai.LogicalExpression, operator: "||", left: e, right: this.logicalAND() };
              return e;
            },
            logicalAND: function () {
              for (var e = this.equality(); this.expect("&&"); )
                e = { type: Ai.LogicalExpression, operator: "&&", left: e, right: this.equality() };
              return e;
            },
            equality: function () {
              for (var e, t = this.relational(); (e = this.expect("==", "!=", "===", "!==")); )
                t = { type: Ai.BinaryExpression, operator: e.text, left: t, right: this.relational() };
              return t;
            },
            relational: function () {
              for (var e, t = this.additive(); (e = this.expect("<", ">", "<=", ">=")); )
                t = { type: Ai.BinaryExpression, operator: e.text, left: t, right: this.additive() };
              return t;
            },
            additive: function () {
              for (var e, t = this.multiplicative(); (e = this.expect("+", "-")); )
                t = { type: Ai.BinaryExpression, operator: e.text, left: t, right: this.multiplicative() };
              return t;
            },
            multiplicative: function () {
              for (var e, t = this.unary(); (e = this.expect("*", "/", "%")); )
                t = { type: Ai.BinaryExpression, operator: e.text, left: t, right: this.unary() };
              return t;
            },
            unary: function () {
              var e;
              return (e = this.expect("+", "-", "!"))
                ? { type: Ai.UnaryExpression, operator: e.text, prefix: !0, argument: this.unary() }
                : this.primary();
            },
            primary: function () {
              var e, t;
              for (
                this.expect("(")
                  ? ((e = this.filterChain()), this.consume(")"))
                  : this.expect("[")
                  ? (e = this.arrayDeclaration())
                  : this.expect("{")
                  ? (e = this.object())
                  : this.selfReferential.hasOwnProperty(this.peek().text)
                  ? (e = ae(this.selfReferential[this.consume().text]))
                  : this.options.literals.hasOwnProperty(this.peek().text)
                  ? (e = { type: Ai.Literal, value: this.options.literals[this.consume().text] })
                  : this.peek().identifier
                  ? (e = this.identifier())
                  : this.peek().constant
                  ? (e = this.constant())
                  : this.throwError("not a primary expression", this.peek());
                (t = this.expect("(", "[", "."));

              )
                "(" === t.text
                  ? ((e = { type: Ai.CallExpression, callee: e, arguments: this.parseArguments() }), this.consume(")"))
                  : "[" === t.text
                  ? ((e = { type: Ai.MemberExpression, object: e, property: this.expression(), computed: !0 }), this.consume("]"))
                  : "." === t.text
                  ? (e = { type: Ai.MemberExpression, object: e, property: this.identifier(), computed: !1 })
                  : this.throwError("IMPOSSIBLE");
              return e;
            },
            filter: function (e) {
              for (var t = [e], n = { type: Ai.CallExpression, callee: this.identifier(), arguments: t, filter: !0 }; this.expect(":"); )
                t.push(this.expression());
              return n;
            },
            parseArguments: function () {
              var e = [];
              if (")" !== this.peekToken().text)
                do {
                  e.push(this.filterChain());
                } while (this.expect(","));
              return e;
            },
            identifier: function () {
              var e = this.consume();
              return e.identifier || this.throwError("is not a valid identifier", e), { type: Ai.Identifier, name: e.text };
            },
            constant: function () {
              return { type: Ai.Literal, value: this.consume().value };
            },
            arrayDeclaration: function () {
              var e = [];
              if ("]" !== this.peekToken().text)
                do {
                  if (this.peek("]")) break;
                  e.push(this.expression());
                } while (this.expect(","));
              return this.consume("]"), { type: Ai.ArrayExpression, elements: e };
            },
            object: function () {
              var e,
                t = [];
              if ("}" !== this.peekToken().text)
                do {
                  if (this.peek("}")) break;
                  (e = { type: Ai.Property, kind: "init" }),
                    this.peek().constant
                      ? ((e.key = this.constant()), (e.computed = !1), this.consume(":"), (e.value = this.expression()))
                      : this.peek().identifier
                      ? ((e.key = this.identifier()),
                        (e.computed = !1),
                        this.peek(":") ? (this.consume(":"), (e.value = this.expression())) : (e.value = e.key))
                      : this.peek("[")
                      ? (this.consume("["),
                        (e.key = this.expression()),
                        this.consume("]"),
                        (e.computed = !0),
                        this.consume(":"),
                        (e.value = this.expression()))
                      : this.throwError("invalid key", this.peek()),
                    t.push(e);
                } while (this.expect(","));
              return this.consume("}"), { type: Ai.ObjectExpression, properties: t };
            },
            throwError: function (e, t) {
              throw wi(
                "syntax",
                "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].",
                t.text,
                e,
                t.index + 1,
                this.text,
                this.text.substring(t.index)
              );
            },
            consume: function (e) {
              if (0 === this.tokens.length) throw wi("ueoe", "Unexpected end of expression: {0}", this.text);
              var t = this.expect(e);
              return t || this.throwError("is unexpected, expecting [" + e + "]", this.peek()), t;
            },
            peekToken: function () {
              if (0 === this.tokens.length) throw wi("ueoe", "Unexpected end of expression: {0}", this.text);
              return this.tokens[0];
            },
            peek: function (e, t, n, i) {
              return this.peekAhead(0, e, t, n, i);
            },
            peekAhead: function (e, t, n, i, r) {
              if (this.tokens.length > e) {
                var o = this.tokens[e],
                  a = o.text;
                if (a === t || a === n || a === i || a === r || (!t && !n && !i && !r)) return o;
              }
              return !1;
            },
            expect: function (e, t, n, i) {
              var r = this.peek(e, t, n, i);
              return !!r && (this.tokens.shift(), r);
            },
            selfReferential: { this: { type: Ai.ThisExpression }, $locals: { type: Ai.LocalsExpression } }
          });
        var Mi = 1,
          Li = 2;
        function Ii(e, t, n) {
          var i,
            r,
            o,
            a = (e.isPure = (function (e, t) {
              switch (e.type) {
                case Ai.MemberExpression:
                  if (e.computed) return !1;
                  break;
                case Ai.UnaryExpression:
                  return Mi;
                case Ai.BinaryExpression:
                  return "+" !== e.operator && Mi;
                case Ai.CallExpression:
                  return !1;
              }
              return void 0 === t ? Li : t;
            })(e, n));
          switch (e.type) {
            case Ai.Program:
              (i = !0),
                w(e.body, function (e) {
                  Ii(e.expression, t, a), (i = i && e.expression.constant);
                }),
                (e.constant = i);
              break;
            case Ai.Literal:
              (e.constant = !0), (e.toWatch = []);
              break;
            case Ai.UnaryExpression:
              Ii(e.argument, t, a), (e.constant = e.argument.constant), (e.toWatch = e.argument.toWatch);
              break;
            case Ai.BinaryExpression:
              Ii(e.left, t, a),
                Ii(e.right, t, a),
                (e.constant = e.left.constant && e.right.constant),
                (e.toWatch = e.left.toWatch.concat(e.right.toWatch));
              break;
            case Ai.LogicalExpression:
              Ii(e.left, t, a), Ii(e.right, t, a), (e.constant = e.left.constant && e.right.constant), (e.toWatch = e.constant ? [] : [e]);
              break;
            case Ai.ConditionalExpression:
              Ii(e.test, t, a),
                Ii(e.alternate, t, a),
                Ii(e.consequent, t, a),
                (e.constant = e.test.constant && e.alternate.constant && e.consequent.constant),
                (e.toWatch = e.constant ? [] : [e]);
              break;
            case Ai.Identifier:
              (e.constant = !1), (e.toWatch = [e]);
              break;
            case Ai.MemberExpression:
              Ii(e.object, t, a),
                e.computed && Ii(e.property, t, a),
                (e.constant = e.object.constant && (!e.computed || e.property.constant)),
                (e.toWatch = e.constant ? [] : [e]);
              break;
            case Ai.CallExpression:
              (o =
                !!e.filter &&
                (function (e, t) {
                  return !e(t).$stateful;
                })(t, e.callee.name)),
                (i = o),
                (r = []),
                w(e.arguments, function (e) {
                  Ii(e, t, a), (i = i && e.constant), r.push.apply(r, e.toWatch);
                }),
                (e.constant = i),
                (e.toWatch = o ? r : [e]);
              break;
            case Ai.AssignmentExpression:
              Ii(e.left, t, a), Ii(e.right, t, a), (e.constant = e.left.constant && e.right.constant), (e.toWatch = [e]);
              break;
            case Ai.ArrayExpression:
              (i = !0),
                (r = []),
                w(e.elements, function (e) {
                  Ii(e, t, a), (i = i && e.constant), r.push.apply(r, e.toWatch);
                }),
                (e.constant = i),
                (e.toWatch = r);
              break;
            case Ai.ObjectExpression:
              (i = !0),
                (r = []),
                w(e.properties, function (e) {
                  Ii(e.value, t, a),
                    (i = i && e.value.constant),
                    r.push.apply(r, e.value.toWatch),
                    e.computed && (Ii(e.key, t, !1), (i = i && e.key.constant), r.push.apply(r, e.key.toWatch));
                }),
                (e.constant = i),
                (e.toWatch = r);
              break;
            case Ai.ThisExpression:
            case Ai.LocalsExpression:
              (e.constant = !1), (e.toWatch = []);
          }
        }
        function Di(e) {
          if (1 === e.length) {
            var t = e[0].expression,
              n = t.toWatch;
            return 1 !== n.length || n[0] !== t ? n : void 0;
          }
        }
        function Bi(e) {
          return e.type === Ai.Identifier || e.type === Ai.MemberExpression;
        }
        function Ri(e) {
          if (1 === e.body.length && Bi(e.body[0].expression))
            return { type: Ai.AssignmentExpression, left: e.body[0].expression, right: { type: Ai.NGValueParameter }, operator: "=" };
        }
        function Ni(e) {
          this.$filter = e;
        }
        function Fi(e) {
          this.$filter = e;
        }
        function Ui(e, t, n) {
          (this.ast = new Ai(e, n)), (this.astCompiler = n.csp ? new Fi(t) : new Ni(t));
        }
        function ji(e) {
          return K(e.valueOf) ? e.valueOf() : Si.call(e);
        }
        function Wi() {
          var e,
            t,
            n = Ue(),
            i = { true: !0, false: !1, null: null, undefined: void 0 };
          (this.addLiteral = function (e, t) {
            i[e] = t;
          }),
            (this.setIdentifierFns = function (n, i) {
              return (e = n), (t = i), this;
            }),
            (this.$get = [
              "$filter",
              function (r) {
                var o = { csp: ce().noUnsafeEval, literals: ae(i), isIdentifierStart: K(e) && e, isIdentifierContinue: K(t) && t };
                return (
                  (a.$$getAst = function (e) {
                    return new Ui(new ki(o), r, o).getAst(e).ast;
                  }),
                  a
                );
                function a(e, t) {
                  var i, a;
                  switch (typeof e) {
                    case "string":
                      if (((e = e.trim()), !(i = n[(a = e)]))) (i = new Ui(new ki(o), r, o).parse(e)), (n[a] = f(i));
                      return h(i, t);
                    case "function":
                      return h(e, t);
                    default:
                      return h(I, t);
                  }
                }
                function s(e, t, n) {
                  return null == e || null == t
                    ? e === t
                    : !("object" == typeof e && "object" == typeof (e = ji(e)) && !n) && (e === t || (e != e && t != t));
                }
                function u(e, t, n, i, r) {
                  var o,
                    a = i.inputs;
                  if (1 === a.length) {
                    var u = s;
                    return (
                      (a = a[0]),
                      e.$watch(
                        function (e) {
                          var t = a(e);
                          return s(t, u, a.isPure) || ((o = i(e, void 0, void 0, [t])), (u = t && ji(t))), o;
                        },
                        t,
                        n,
                        r
                      )
                    );
                  }
                  for (var c = [], l = [], d = 0, f = a.length; d < f; d++) (c[d] = s), (l[d] = null);
                  return e.$watch(
                    function (e) {
                      for (var t = !1, n = 0, r = a.length; n < r; n++) {
                        var u = a[n](e);
                        (t || (t = !s(u, c[n], a[n].isPure))) && ((l[n] = u), (c[n] = u && ji(u)));
                      }
                      return t && (o = i(e, void 0, void 0, l)), o;
                    },
                    t,
                    n,
                    r
                  );
                }
                function c(e, t, n, i, r) {
                  var o,
                    a,
                    s = i.literal ? l : F,
                    u = i.$$intercepted || i,
                    c = i.$$interceptor || D,
                    d = i.inputs && !u.inputs;
                  return (p.literal = i.literal), (p.constant = i.constant), (p.inputs = i.inputs), f(p), (o = e.$watch(p, t, n, r));
                  function h() {
                    s(a) && o();
                  }
                  function p(e, t, n, i) {
                    return (a = d && i ? i[0] : u(e, t, n, i)), s(a) && e.$$postDigest(h), c(a);
                  }
                }
                function l(e) {
                  var t = !0;
                  return (
                    w(e, function (e) {
                      F(e) || (t = !1);
                    }),
                    t
                  );
                }
                function d(e, t, n, i) {
                  var r = e.$watch(
                    function (e) {
                      return r(), i(e);
                    },
                    t,
                    n
                  );
                  return r;
                }
                function f(e) {
                  return (
                    e.constant ? (e.$$watchDelegate = d) : e.oneTime ? (e.$$watchDelegate = c) : e.inputs && (e.$$watchDelegate = u), e
                  );
                }
                function h(e, t) {
                  if (!t) return e;
                  e.$$interceptor &&
                    ((t = (function (e, t) {
                      function n(n) {
                        return t(e(n));
                      }
                      return (n.$stateful = e.$stateful || t.$stateful), (n.$$pure = e.$$pure && t.$$pure), n;
                    })(e.$$interceptor, t)),
                    (e = e.$$intercepted));
                  var n = !1,
                    i = function (i, r, o, a) {
                      var s = n && a ? a[0] : e(i, r, o, a);
                      return t(s);
                    };
                  return (
                    (i.$$intercepted = e),
                    (i.$$interceptor = t),
                    (i.literal = e.literal),
                    (i.oneTime = e.oneTime),
                    (i.constant = e.constant),
                    t.$stateful ||
                      ((n = !e.inputs),
                      (i.inputs = e.inputs ? e.inputs : [e]),
                      t.$$pure ||
                        (i.inputs = i.inputs.map(function (e) {
                          return e.isPure === Li
                            ? function (t) {
                                return e(t);
                              }
                            : e;
                        }))),
                    f(i)
                  );
                }
              }
            ]);
        }
        function Vi() {
          var e = !0;
          (this.$get = [
            "$rootScope",
            "$exceptionHandler",
            function (t, n) {
              return qi(
                function (e) {
                  t.$evalAsync(e);
                },
                n,
                e
              );
            }
          ]),
            (this.errorOnUnhandledRejections = function (t) {
              return F(t) ? ((e = t), this) : e;
            });
        }
        function Hi() {
          var e = !0;
          (this.$get = [
            "$browser",
            "$exceptionHandler",
            function (t, n) {
              return qi(
                function (e) {
                  t.defer(e);
                },
                n,
                e
              );
            }
          ]),
            (this.errorOnUnhandledRejections = function (t) {
              return F(t) ? ((e = t), this) : e;
            });
        }
        function qi(e, t, n) {
          var i = r("$q", TypeError),
            o = 0,
            a = [];
          function s() {
            return new u();
          }
          function u() {
            var e = (this.promise = new c());
            (this.resolve = function (t) {
              f(e, t);
            }),
              (this.reject = function (t) {
                p(e, t);
              }),
              (this.notify = function (t) {
                m(e, t);
              });
          }
          function c() {
            this.$$state = { status: 0 };
          }
          function l() {
            for (; !o && a.length; ) {
              var e = a.shift();
              if (!zi(e)) {
                Ki(e);
                var n = "Possibly unhandled rejection: " + Ge(e.value);
                z(e.value) ? t(e.value, n) : t(n);
              }
            }
          }
          function d(i) {
            !n || i.pending || 2 !== i.status || zi(i) || (0 === o && 0 === a.length && e(l), a.push(i)),
              !i.processScheduled &&
                i.pending &&
                ((i.processScheduled = !0),
                ++o,
                e(function () {
                  !(function (i) {
                    var r, a, s;
                    (s = i.pending), (i.processScheduled = !1), (i.pending = void 0);
                    try {
                      for (var u = 0, c = s.length; u < c; ++u) {
                        Ki(i), (a = s[u][0]), (r = s[u][i.status]);
                        try {
                          K(r) ? f(a, r(i.value)) : 1 === i.status ? f(a, i.value) : p(a, i.value);
                        } catch (e) {
                          p(a, e), e && !0 === e.$$passToExceptionHandler && t(e);
                        }
                      }
                    } finally {
                      --o, n && 0 === o && e(l);
                    }
                  })(i);
                }));
          }
          function f(e, t) {
            e.$$state.status ||
              (t === e ? v(e, i("qcycle", "Expected promise to be resolved with value other than itself '{0}'", t)) : h(e, t));
          }
          function h(e, t) {
            var n,
              i = !1;
            try {
              (U(t) || K(t)) && (n = t.then),
                K(n)
                  ? ((e.$$state.status = -1),
                    n.call(
                      t,
                      function (t) {
                        if (i) return;
                        (i = !0), h(e, t);
                      },
                      r,
                      function (t) {
                        m(e, t);
                      }
                    ))
                  : ((e.$$state.value = t), (e.$$state.status = 1), d(e.$$state));
            } catch (e) {
              r(e);
            }
            function r(t) {
              i || ((i = !0), v(e, t));
            }
          }
          function p(e, t) {
            e.$$state.status || v(e, t);
          }
          function v(e, t) {
            (e.$$state.value = t), (e.$$state.status = 2), d(e.$$state);
          }
          function m(n, i) {
            var r = n.$$state.pending;
            n.$$state.status <= 0 &&
              r &&
              r.length &&
              e(function () {
                for (var e, n, o = 0, a = r.length; o < a; o++) {
                  (n = r[o][0]), (e = r[o][3]);
                  try {
                    m(n, K(e) ? e(i) : i);
                  } catch (e) {
                    t(e);
                  }
                }
              });
          }
          function g(e) {
            var t = new c();
            return p(t, e), t;
          }
          function y(e, t, n) {
            var i = null;
            try {
              K(n) && (i = n());
            } catch (e) {
              return g(e);
            }
            return Y(i)
              ? i.then(function () {
                  return t(e);
                }, g)
              : t(e);
          }
          function _(e, t, n, i) {
            var r = new c();
            return f(r, e), r.then(t, n, i);
          }
          A(c.prototype, {
            then: function (e, t, n) {
              if (N(e) && N(t) && N(n)) return this;
              var i = new c();
              return (
                (this.$$state.pending = this.$$state.pending || []),
                this.$$state.pending.push([i, e, t, n]),
                this.$$state.status > 0 && d(this.$$state),
                i
              );
            },
            catch: function (e) {
              return this.then(null, e);
            },
            finally: function (e, t) {
              return this.then(
                function (t) {
                  return y(t, $, e);
                },
                function (t) {
                  return y(t, g, e);
                },
                t
              );
            }
          });
          var $ = _;
          function b(e) {
            if (!K(e)) throw i("norslvr", "Expected resolverFn, got '{0}'", e);
            var t = new c();
            return (
              e(
                function (e) {
                  f(t, e);
                },
                function (e) {
                  p(t, e);
                }
              ),
              t
            );
          }
          return (
            (b.prototype = c.prototype),
            (b.defer = s),
            (b.reject = g),
            (b.when = _),
            (b.resolve = $),
            (b.all = function (e) {
              var t = new c(),
                n = 0,
                i = q(e) ? [] : {};
              return (
                w(e, function (e, r) {
                  n++,
                    _(e).then(
                      function (e) {
                        (i[r] = e), --n || f(t, i);
                      },
                      function (e) {
                        p(t, e);
                      }
                    );
                }),
                0 === n && f(t, i),
                t
              );
            }),
            (b.race = function (e) {
              var t = s();
              return (
                w(e, function (e) {
                  _(e).then(t.resolve, t.reject);
                }),
                t.promise
              );
            }),
            b
          );
        }
        function zi(e) {
          return !!e.pur;
        }
        function Ki(e) {
          e.pur = !0;
        }
        function Gi(e) {
          e.$$state && Ki(e.$$state);
        }
        function Zi() {
          this.$get = [
            "$window",
            "$timeout",
            function (e, t) {
              var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame,
                i = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
                r = !!n,
                o = r
                  ? function (e) {
                      var t = n(e);
                      return function () {
                        i(t);
                      };
                    }
                  : function (e) {
                      var n = t(e, 16.66, !1);
                      return function () {
                        t.cancel(n);
                      };
                    };
              return (o.supported = r), o;
            }
          ];
        }
        function Qi() {
          var e = 10,
            t = r("$rootScope"),
            n = null,
            i = null;
          (this.digestTtl = function (t) {
            return arguments.length && (e = t), e;
          }),
            (this.$get = [
              "$exceptionHandler",
              "$parse",
              "$browser",
              function (r, a, s) {
                function u(e) {
                  e.currentScope.$$destroyed = !0;
                }
                function c(e) {
                  9 === o && (e.$$childHead && c(e.$$childHead), e.$$nextSibling && c(e.$$nextSibling)),
                    (e.$parent = e.$$nextSibling = e.$$prevSibling = e.$$childHead = e.$$childTail = e.$root = e.$$watchers = null);
                }
                function l() {
                  (this.$id = T()),
                    (this.$$phase =
                      this.$parent =
                      this.$$watchers =
                      this.$$nextSibling =
                      this.$$prevSibling =
                      this.$$childHead =
                      this.$$childTail =
                        null),
                    (this.$root = this),
                    (this.$$destroyed = !1),
                    (this.$$suspended = !1),
                    (this.$$listeners = {}),
                    (this.$$listenerCount = {}),
                    (this.$$watchersCount = 0),
                    (this.$$isolateBindings = null);
                }
                l.prototype = {
                  constructor: l,
                  $new: function (e, t) {
                    var n;
                    return (
                      (t = t || this),
                      e
                        ? ((n = new l()).$root = this.$root)
                        : (this.$$ChildScope ||
                            (this.$$ChildScope = (function (e) {
                              function t() {
                                (this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null),
                                  (this.$$listeners = {}),
                                  (this.$$listenerCount = {}),
                                  (this.$$watchersCount = 0),
                                  (this.$id = T()),
                                  (this.$$ChildScope = null),
                                  (this.$$suspended = !1);
                              }
                              return (t.prototype = e), t;
                            })(this)),
                          (n = new this.$$ChildScope())),
                      (n.$parent = t),
                      (n.$$prevSibling = t.$$childTail),
                      t.$$childHead ? ((t.$$childTail.$$nextSibling = n), (t.$$childTail = n)) : (t.$$childHead = t.$$childTail = n),
                      (e || t !== this) && n.$on("$destroy", u),
                      n
                    );
                  },
                  $watch: function (e, t, i, r) {
                    var o = a(e),
                      s = K(t) ? t : I;
                    if (o.$$watchDelegate) return o.$$watchDelegate(this, s, i, o, e);
                    var u = this,
                      c = u.$$watchers,
                      l = { fn: s, last: b, get: o, exp: r || e, eq: !!i };
                    return (
                      (n = null),
                      c || ((c = u.$$watchers = []).$$digestWatchIndex = -1),
                      c.unshift(l),
                      c.$$digestWatchIndex++,
                      _(this, 1),
                      function () {
                        var e = oe(c, l);
                        e >= 0 && (_(u, -1), e < c.$$digestWatchIndex && c.$$digestWatchIndex--), (n = null);
                      }
                    );
                  },
                  $watchGroup: function (e, t) {
                    var n = new Array(e.length),
                      i = new Array(e.length),
                      r = [],
                      o = this,
                      a = !1,
                      s = !0;
                    if (!e.length) {
                      var u = !0;
                      return (
                        o.$evalAsync(function () {
                          u && t(i, i, o);
                        }),
                        function () {
                          u = !1;
                        }
                      );
                    }
                    if (1 === e.length)
                      return this.$watch(e[0], function (e, r, o) {
                        (i[0] = e), (n[0] = r), t(i, e === r ? i : n, o);
                      });
                    function c() {
                      a = !1;
                      try {
                        s ? ((s = !1), t(i, i, o)) : t(i, n, o);
                      } finally {
                        for (var r = 0; r < e.length; r++) n[r] = i[r];
                      }
                    }
                    return (
                      w(e, function (e, t) {
                        var n = o.$watch(e, function (e) {
                          (i[t] = e), a || ((a = !0), o.$evalAsync(c));
                        });
                        r.push(n);
                      }),
                      function () {
                        for (; r.length; ) r.shift()();
                      }
                    );
                  },
                  $watchCollection: function (e, t) {
                    (v.$$pure = a(e).literal), (v.$stateful = !v.$$pure);
                    var n,
                      i,
                      r,
                      o = this,
                      s = t.length > 1,
                      u = 0,
                      c = a(e, v),
                      l = [],
                      f = {},
                      h = !0,
                      p = 0;
                    function v(e) {
                      var t, r, o, a;
                      if (!N((n = e))) {
                        if (U(n))
                          if (C(n)) {
                            i !== l && ((p = (i = l).length = 0), u++), (t = n.length), p !== t && (u++, (i.length = p = t));
                            for (var s = 0; s < t; s++) (a = i[s]), (o = n[s]), (a != a && o != o) || a === o || (u++, (i[s] = o));
                          } else {
                            for (r in (i !== f && ((i = f = {}), (p = 0), u++), (t = 0), n))
                              d.call(n, r) &&
                                (t++,
                                (o = n[r]),
                                (a = i[r]),
                                r in i ? (a != a && o != o) || a === o || (u++, (i[r] = o)) : (p++, (i[r] = o), u++));
                            if (p > t) for (r in (u++, i)) d.call(n, r) || (p--, delete i[r]);
                          }
                        else i !== n && ((i = n), u++);
                        return u;
                      }
                    }
                    return this.$watch(c, function () {
                      if ((h ? ((h = !1), t(n, n, o)) : t(n, r, o), s))
                        if (U(n))
                          if (C(n)) {
                            r = new Array(n.length);
                            for (var e = 0; e < n.length; e++) r[e] = n[e];
                          } else for (var i in ((r = {}), n)) d.call(n, i) && (r[i] = n[i]);
                        else r = n;
                    });
                  },
                  $digest: function () {
                    var o,
                      a,
                      u,
                      c,
                      l,
                      d,
                      v,
                      _,
                      $,
                      C = e,
                      w = h.length ? f : this,
                      x = [];
                    g("$digest"), s.$$checkUrlChange(), this === f && null !== i && (s.defer.cancel(i), S()), (n = null);
                    do {
                      (l = !1), (v = w);
                      for (var T = 0; T < h.length; T++) {
                        try {
                          (0, ($ = h[T]).fn)($.scope, $.locals);
                        } catch (e) {
                          r(e);
                        }
                        n = null;
                      }
                      h.length = 0;
                      e: do {
                        if ((c = !v.$$suspended && v.$$watchers))
                          for (c.$$digestWatchIndex = c.length; c.$$digestWatchIndex--; )
                            try {
                              if ((o = c[c.$$digestWatchIndex]))
                                if ((a = (0, o.get)(v)) === (u = o.last) || (o.eq ? ue(a, u) : M(a) && M(u))) {
                                  if (o === n) {
                                    l = !1;
                                    break e;
                                  }
                                } else
                                  (l = !0),
                                    (n = o),
                                    (o.last = o.eq ? ae(a, null) : a),
                                    (0, o.fn)(a, u === b ? a : u, v),
                                    C < 5 &&
                                      (x[(_ = 4 - C)] || (x[_] = []),
                                      x[_].push({
                                        msg: K(o.exp) ? "fn: " + (o.exp.name || o.exp.toString()) : o.exp,
                                        newVal: a,
                                        oldVal: u
                                      }));
                            } catch (e) {
                              r(e);
                            }
                        if (!(d = (!v.$$suspended && v.$$watchersCount && v.$$childHead) || (v !== w && v.$$nextSibling)))
                          for (; v !== w && !(d = v.$$nextSibling); ) v = v.$parent;
                      } while ((v = d));
                      if ((l || h.length) && !C--)
                        throw (
                          (y(),
                          t("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", e, x))
                        );
                    } while (l || h.length);
                    for (y(); m < p.length; )
                      try {
                        p[m++]();
                      } catch (e) {
                        r(e);
                      }
                    (p.length = m = 0), s.$$checkUrlChange();
                  },
                  $suspend: function () {
                    this.$$suspended = !0;
                  },
                  $isSuspended: function () {
                    return this.$$suspended;
                  },
                  $resume: function () {
                    this.$$suspended = !1;
                  },
                  $destroy: function () {
                    if (!this.$$destroyed) {
                      var e = this.$parent;
                      for (var t in (this.$broadcast("$destroy"),
                      (this.$$destroyed = !0),
                      this === f && s.$$applicationDestroyed(),
                      _(this, -this.$$watchersCount),
                      this.$$listenerCount))
                        $(this, this.$$listenerCount[t], t);
                      e && e.$$childHead === this && (e.$$childHead = this.$$nextSibling),
                        e && e.$$childTail === this && (e.$$childTail = this.$$prevSibling),
                        this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling),
                        this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling),
                        (this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = I),
                        (this.$on =
                          this.$watch =
                          this.$watchGroup =
                            function () {
                              return I;
                            }),
                        (this.$$listeners = {}),
                        (this.$$nextSibling = null),
                        c(this);
                    }
                  },
                  $eval: function (e, t) {
                    return a(e)(this, t);
                  },
                  $evalAsync: function (e, t) {
                    f.$$phase ||
                      h.length ||
                      s.defer(
                        function () {
                          h.length && f.$digest();
                        },
                        null,
                        "$evalAsync"
                      ),
                      h.push({ scope: this, fn: a(e), locals: t });
                  },
                  $$postDigest: function (e) {
                    p.push(e);
                  },
                  $apply: function (e) {
                    try {
                      g("$apply");
                      try {
                        return this.$eval(e);
                      } finally {
                        y();
                      }
                    } catch (e) {
                      r(e);
                    } finally {
                      try {
                        f.$digest();
                      } catch (e) {
                        throw (r(e), e);
                      }
                    }
                  },
                  $applyAsync: function (e) {
                    var t = this;
                    e &&
                      v.push(function () {
                        t.$eval(e);
                      }),
                      (e = a(e)),
                      null === i &&
                        (i = s.defer(
                          function () {
                            f.$apply(S);
                          },
                          null,
                          "$applyAsync"
                        ));
                  },
                  $on: function (e, t) {
                    var n = this.$$listeners[e];
                    n || (this.$$listeners[e] = n = []), n.push(t);
                    var i = this;
                    do {
                      i.$$listenerCount[e] || (i.$$listenerCount[e] = 0), i.$$listenerCount[e]++;
                    } while ((i = i.$parent));
                    var r = this;
                    return function () {
                      var i = n.indexOf(t);
                      -1 !== i && (delete n[i], $(r, 1, e));
                    };
                  },
                  $emit: function (e, t) {
                    var n,
                      i,
                      o,
                      a = [],
                      s = this,
                      u = !1,
                      c = {
                        name: e,
                        targetScope: s,
                        stopPropagation: function () {
                          u = !0;
                        },
                        preventDefault: function () {
                          c.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                      },
                      l = de([c], arguments, 1);
                    do {
                      for (n = s.$$listeners[e] || a, c.currentScope = s, i = 0, o = n.length; i < o; i++)
                        if (n[i])
                          try {
                            n[i].apply(null, l);
                          } catch (e) {
                            r(e);
                          }
                        else n.splice(i, 1), i--, o--;
                      if (u) break;
                      s = s.$parent;
                    } while (s);
                    return (c.currentScope = null), c;
                  },
                  $broadcast: function (e, t) {
                    var n = this,
                      i = n,
                      o = n,
                      a = {
                        name: e,
                        targetScope: n,
                        preventDefault: function () {
                          a.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                      };
                    if (!n.$$listenerCount[e]) return a;
                    for (var s, u, c, l = de([a], arguments, 1); (i = o); ) {
                      for (a.currentScope = i, u = 0, c = (s = i.$$listeners[e] || []).length; u < c; u++)
                        if (s[u])
                          try {
                            s[u].apply(null, l);
                          } catch (e) {
                            r(e);
                          }
                        else s.splice(u, 1), u--, c--;
                      if (!(o = (i.$$listenerCount[e] && i.$$childHead) || (i !== n && i.$$nextSibling)))
                        for (; i !== n && !(o = i.$$nextSibling); ) i = i.$parent;
                    }
                    return (a.currentScope = null), a;
                  }
                };
                var f = new l(),
                  h = (f.$$asyncQueue = []),
                  p = (f.$$postDigestQueue = []),
                  v = (f.$$applyAsyncQueue = []),
                  m = 0;
                return f;
                function g(e) {
                  if (f.$$phase) throw t("inprog", "{0} already in progress", f.$$phase);
                  f.$$phase = e;
                }
                function y() {
                  f.$$phase = null;
                }
                function _(e, t) {
                  do {
                    e.$$watchersCount += t;
                  } while ((e = e.$parent));
                }
                function $(e, t, n) {
                  do {
                    (e.$$listenerCount[n] -= t), 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n];
                  } while ((e = e.$parent));
                }
                function b() {}
                function S() {
                  for (; v.length; )
                    try {
                      v.shift()();
                    } catch (e) {
                      r(e);
                    }
                  i = null;
                }
              }
            ]);
        }
        function Ji() {
          var e = /^\s*(https?|s?ftp|mailto|tel|file):/,
            t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
          (this.aHrefSanitizationWhitelist = function (t) {
            return F(t) ? ((e = t), this) : e;
          }),
            (this.imgSrcSanitizationWhitelist = function (e) {
              return F(e) ? ((t = e), this) : t;
            }),
            (this.$get = function () {
              return function (n, i) {
                var r = i ? t : e,
                  o = gr(n && n.trim()).href;
                return "" === o || o.match(r) ? n : "unsafe:" + o;
              };
            });
        }
        (Ni.prototype = {
          compile: function (e) {
            var t = this;
            (this.state = {
              nextId: 0,
              filters: {},
              fn: { vars: [], body: [], own: {} },
              assign: { vars: [], body: [], own: {} },
              inputs: []
            }),
              Ii(e, t.$filter);
            var n,
              i = "";
            if (((this.stage = "assign"), (n = Ri(e)))) {
              this.state.computing = "assign";
              var r = this.nextId();
              this.recurse(n, r), this.return_(r), (i = "fn.assign=" + this.generateFunction("assign", "s,v,l"));
            }
            var o = Di(e.body);
            (t.stage = "inputs"),
              w(o, function (e, n) {
                var i = "fn" + n;
                (t.state[i] = { vars: [], body: [], own: {} }), (t.state.computing = i);
                var r = t.nextId();
                t.recurse(e, r), t.return_(r), t.state.inputs.push({ name: i, isPure: e.isPure }), (e.watchId = n);
              }),
              (this.state.computing = "fn"),
              (this.stage = "main"),
              this.recurse(e);
            var a =
                '"' +
                this.USE +
                " " +
                this.STRICT +
                '";\n' +
                this.filterPrefix() +
                "var fn=" +
                this.generateFunction("fn", "s,l,a,i") +
                i +
                this.watchFns() +
                "return fn;",
              s = new Function("$filter", "getStringValue", "ifDefined", "plus", a)(this.$filter, xi, Pi, Oi);
            return (this.state = this.stage = void 0), s;
          },
          USE: "use",
          STRICT: "strict",
          watchFns: function () {
            var e = [],
              t = this.state.inputs,
              n = this;
            return (
              w(t, function (t) {
                e.push("var " + t.name + "=" + n.generateFunction(t.name, "s")),
                  t.isPure && e.push(t.name, ".isPure=" + JSON.stringify(t.isPure) + ";");
              }),
              t.length &&
                e.push(
                  "fn.inputs=[" +
                    t
                      .map(function (e) {
                        return e.name;
                      })
                      .join(",") +
                    "];"
                ),
              e.join("")
            );
          },
          generateFunction: function (e, t) {
            return "function(" + t + "){" + this.varsPrefix(e) + this.body(e) + "};";
          },
          filterPrefix: function () {
            var e = [],
              t = this;
            return (
              w(this.state.filters, function (n, i) {
                e.push(n + "=$filter(" + t.escape(i) + ")");
              }),
              e.length ? "var " + e.join(",") + ";" : ""
            );
          },
          varsPrefix: function (e) {
            return this.state[e].vars.length ? "var " + this.state[e].vars.join(",") + ";" : "";
          },
          body: function (e) {
            return this.state[e].body.join("");
          },
          recurse: function (e, t, n, i, r, o) {
            var a,
              s,
              u,
              c,
              l,
              d = this;
            if (((i = i || I), !o && F(e.watchId)))
              return (
                (t = t || this.nextId()),
                void this.if_("i", this.lazyAssign(t, this.computedMember("i", e.watchId)), this.lazyRecurse(e, t, n, i, r, !0))
              );
            switch (e.type) {
              case Ai.Program:
                w(e.body, function (t, n) {
                  d.recurse(t.expression, void 0, void 0, function (e) {
                    s = e;
                  }),
                    n !== e.body.length - 1 ? d.current().body.push(s, ";") : d.return_(s);
                });
                break;
              case Ai.Literal:
                (c = this.escape(e.value)), this.assign(t, c), i(t || c);
                break;
              case Ai.UnaryExpression:
                this.recurse(e.argument, void 0, void 0, function (e) {
                  s = e;
                }),
                  (c = e.operator + "(" + this.ifDefined(s, 0) + ")"),
                  this.assign(t, c),
                  i(c);
                break;
              case Ai.BinaryExpression:
                this.recurse(e.left, void 0, void 0, function (e) {
                  a = e;
                }),
                  this.recurse(e.right, void 0, void 0, function (e) {
                    s = e;
                  }),
                  (c =
                    "+" === e.operator
                      ? this.plus(a, s)
                      : "-" === e.operator
                      ? this.ifDefined(a, 0) + e.operator + this.ifDefined(s, 0)
                      : "(" + a + ")" + e.operator + "(" + s + ")"),
                  this.assign(t, c),
                  i(c);
                break;
              case Ai.LogicalExpression:
                (t = t || this.nextId()), d.recurse(e.left, t), d.if_("&&" === e.operator ? t : d.not(t), d.lazyRecurse(e.right, t)), i(t);
                break;
              case Ai.ConditionalExpression:
                (t = t || this.nextId()),
                  d.recurse(e.test, t),
                  d.if_(t, d.lazyRecurse(e.alternate, t), d.lazyRecurse(e.consequent, t)),
                  i(t);
                break;
              case Ai.Identifier:
                (t = t || this.nextId()),
                  n &&
                    ((n.context = "inputs" === d.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", e.name) + "?l:s")),
                    (n.computed = !1),
                    (n.name = e.name)),
                  d.if_(
                    "inputs" === d.stage || d.not(d.getHasOwnProperty("l", e.name)),
                    function () {
                      d.if_("inputs" === d.stage || "s", function () {
                        r &&
                          1 !== r &&
                          d.if_(d.isNull(d.nonComputedMember("s", e.name)), d.lazyAssign(d.nonComputedMember("s", e.name), "{}")),
                          d.assign(t, d.nonComputedMember("s", e.name));
                      });
                    },
                    t && d.lazyAssign(t, d.nonComputedMember("l", e.name))
                  ),
                  i(t);
                break;
              case Ai.MemberExpression:
                (a = (n && (n.context = this.nextId())) || this.nextId()),
                  (t = t || this.nextId()),
                  d.recurse(
                    e.object,
                    a,
                    void 0,
                    function () {
                      d.if_(
                        d.notNull(a),
                        function () {
                          e.computed
                            ? ((s = d.nextId()),
                              d.recurse(e.property, s),
                              d.getStringValue(s),
                              r && 1 !== r && d.if_(d.not(d.computedMember(a, s)), d.lazyAssign(d.computedMember(a, s), "{}")),
                              (c = d.computedMember(a, s)),
                              d.assign(t, c),
                              n && ((n.computed = !0), (n.name = s)))
                            : (r &&
                                1 !== r &&
                                d.if_(
                                  d.isNull(d.nonComputedMember(a, e.property.name)),
                                  d.lazyAssign(d.nonComputedMember(a, e.property.name), "{}")
                                ),
                              (c = d.nonComputedMember(a, e.property.name)),
                              d.assign(t, c),
                              n && ((n.computed = !1), (n.name = e.property.name)));
                        },
                        function () {
                          d.assign(t, "undefined");
                        }
                      ),
                        i(t);
                    },
                    !!r
                  );
                break;
              case Ai.CallExpression:
                (t = t || this.nextId()),
                  e.filter
                    ? ((s = d.filter(e.callee.name)),
                      (u = []),
                      w(e.arguments, function (e) {
                        var t = d.nextId();
                        d.recurse(e, t), u.push(t);
                      }),
                      (c = s + "(" + u.join(",") + ")"),
                      d.assign(t, c),
                      i(t))
                    : ((s = d.nextId()),
                      (a = {}),
                      (u = []),
                      d.recurse(e.callee, s, a, function () {
                        d.if_(
                          d.notNull(s),
                          function () {
                            w(e.arguments, function (t) {
                              d.recurse(t, e.constant ? void 0 : d.nextId(), void 0, function (e) {
                                u.push(e);
                              });
                            }),
                              (c = a.name
                                ? d.member(a.context, a.name, a.computed) + "(" + u.join(",") + ")"
                                : s + "(" + u.join(",") + ")"),
                              d.assign(t, c);
                          },
                          function () {
                            d.assign(t, "undefined");
                          }
                        ),
                          i(t);
                      }));
                break;
              case Ai.AssignmentExpression:
                (s = this.nextId()),
                  (a = {}),
                  this.recurse(
                    e.left,
                    void 0,
                    a,
                    function () {
                      d.if_(d.notNull(a.context), function () {
                        d.recurse(e.right, s), (c = d.member(a.context, a.name, a.computed) + e.operator + s), d.assign(t, c), i(t || c);
                      });
                    },
                    1
                  );
                break;
              case Ai.ArrayExpression:
                (u = []),
                  w(e.elements, function (t) {
                    d.recurse(t, e.constant ? void 0 : d.nextId(), void 0, function (e) {
                      u.push(e);
                    });
                  }),
                  (c = "[" + u.join(",") + "]"),
                  this.assign(t, c),
                  i(t || c);
                break;
              case Ai.ObjectExpression:
                (u = []),
                  (l = !1),
                  w(e.properties, function (e) {
                    e.computed && (l = !0);
                  }),
                  l
                    ? ((t = t || this.nextId()),
                      this.assign(t, "{}"),
                      w(e.properties, function (e) {
                        e.computed
                          ? ((a = d.nextId()), d.recurse(e.key, a))
                          : (a = e.key.type === Ai.Identifier ? e.key.name : "" + e.key.value),
                          (s = d.nextId()),
                          d.recurse(e.value, s),
                          d.assign(d.member(t, a, e.computed), s);
                      }))
                    : (w(e.properties, function (t) {
                        d.recurse(t.value, e.constant ? void 0 : d.nextId(), void 0, function (e) {
                          u.push(d.escape(t.key.type === Ai.Identifier ? t.key.name : "" + t.key.value) + ":" + e);
                        });
                      }),
                      (c = "{" + u.join(",") + "}"),
                      this.assign(t, c)),
                  i(t || c);
                break;
              case Ai.ThisExpression:
                this.assign(t, "s"), i(t || "s");
                break;
              case Ai.LocalsExpression:
                this.assign(t, "l"), i(t || "l");
                break;
              case Ai.NGValueParameter:
                this.assign(t, "v"), i(t || "v");
            }
          },
          getHasOwnProperty: function (e, t) {
            var n = e + "." + t,
              i = this.current().own;
            return i.hasOwnProperty(n) || (i[n] = this.nextId(!1, e + "&&(" + this.escape(t) + " in " + e + ")")), i[n];
          },
          assign: function (e, t) {
            if (e) return this.current().body.push(e, "=", t, ";"), e;
          },
          filter: function (e) {
            return this.state.filters.hasOwnProperty(e) || (this.state.filters[e] = this.nextId(!0)), this.state.filters[e];
          },
          ifDefined: function (e, t) {
            return "ifDefined(" + e + "," + this.escape(t) + ")";
          },
          plus: function (e, t) {
            return "plus(" + e + "," + t + ")";
          },
          return_: function (e) {
            this.current().body.push("return ", e, ";");
          },
          if_: function (e, t, n) {
            if (!0 === e) t();
            else {
              var i = this.current().body;
              i.push("if(", e, "){"), t(), i.push("}"), n && (i.push("else{"), n(), i.push("}"));
            }
          },
          not: function (e) {
            return "!(" + e + ")";
          },
          isNull: function (e) {
            return e + "==null";
          },
          notNull: function (e) {
            return e + "!=null";
          },
          nonComputedMember: function (e, t) {
            return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(t) ? e + "." + t : e + '["' + t.replace(/[^$_a-zA-Z0-9]/g, this.stringEscapeFn) + '"]';
          },
          computedMember: function (e, t) {
            return e + "[" + t + "]";
          },
          member: function (e, t, n) {
            return n ? this.computedMember(e, t) : this.nonComputedMember(e, t);
          },
          getStringValue: function (e) {
            this.assign(e, "getStringValue(" + e + ")");
          },
          lazyRecurse: function (e, t, n, i, r, o) {
            var a = this;
            return function () {
              a.recurse(e, t, n, i, r, o);
            };
          },
          lazyAssign: function (e, t) {
            var n = this;
            return function () {
              n.assign(e, t);
            };
          },
          stringEscapeRegex: /[^ a-zA-Z0-9]/g,
          stringEscapeFn: function (e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
          },
          escape: function (e) {
            if (W(e)) return "'" + e.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (V(e)) return e.toString();
            if (!0 === e) return "true";
            if (!1 === e) return "false";
            if (null === e) return "null";
            if (void 0 === e) return "undefined";
            throw wi("esc", "IMPOSSIBLE");
          },
          nextId: function (e, t) {
            var n = "v" + this.state.nextId++;
            return e || this.current().vars.push(n + (t ? "=" + t : "")), n;
          },
          current: function () {
            return this.state[this.state.computing];
          }
        }),
          (Fi.prototype = {
            compile: function (e) {
              var t,
                n,
                i = this;
              Ii(e, i.$filter), (t = Ri(e)) && (n = this.recurse(t));
              var r,
                o = Di(e.body);
              o &&
                ((r = []),
                w(o, function (e, t) {
                  var n = i.recurse(e);
                  (n.isPure = e.isPure), (e.input = n), r.push(n), (e.watchId = t);
                }));
              var a = [];
              w(e.body, function (e) {
                a.push(i.recurse(e.expression));
              });
              var s =
                0 === e.body.length
                  ? I
                  : 1 === e.body.length
                  ? a[0]
                  : function (e, t) {
                      var n;
                      return (
                        w(a, function (i) {
                          n = i(e, t);
                        }),
                        n
                      );
                    };
              return (
                n &&
                  (s.assign = function (e, t, i) {
                    return n(e, i, t);
                  }),
                r && (s.inputs = r),
                s
              );
            },
            recurse: function (e, t, n) {
              var i,
                r,
                o,
                a = this;
              if (e.input) return this.inputs(e.input, e.watchId);
              switch (e.type) {
                case Ai.Literal:
                  return this.value(e.value, t);
                case Ai.UnaryExpression:
                  return (r = this.recurse(e.argument)), this["unary" + e.operator](r, t);
                case Ai.BinaryExpression:
                case Ai.LogicalExpression:
                  return (i = this.recurse(e.left)), (r = this.recurse(e.right)), this["binary" + e.operator](i, r, t);
                case Ai.ConditionalExpression:
                  return this["ternary?:"](this.recurse(e.test), this.recurse(e.alternate), this.recurse(e.consequent), t);
                case Ai.Identifier:
                  return a.identifier(e.name, t, n);
                case Ai.MemberExpression:
                  return (
                    (i = this.recurse(e.object, !1, !!n)),
                    e.computed || (r = e.property.name),
                    e.computed && (r = this.recurse(e.property)),
                    e.computed ? this.computedMember(i, r, t, n) : this.nonComputedMember(i, r, t, n)
                  );
                case Ai.CallExpression:
                  return (
                    (o = []),
                    w(e.arguments, function (e) {
                      o.push(a.recurse(e));
                    }),
                    e.filter && (r = this.$filter(e.callee.name)),
                    e.filter || (r = this.recurse(e.callee, !0)),
                    e.filter
                      ? function (e, n, i, a) {
                          for (var s = [], u = 0; u < o.length; ++u) s.push(o[u](e, n, i, a));
                          var c = r.apply(void 0, s, a);
                          return t ? { context: void 0, name: void 0, value: c } : c;
                        }
                      : function (e, n, i, a) {
                          var s,
                            u = r(e, n, i, a);
                          if (null != u.value) {
                            for (var c = [], l = 0; l < o.length; ++l) c.push(o[l](e, n, i, a));
                            s = u.value.apply(u.context, c);
                          }
                          return t ? { value: s } : s;
                        }
                  );
                case Ai.AssignmentExpression:
                  return (
                    (i = this.recurse(e.left, !0, 1)),
                    (r = this.recurse(e.right)),
                    function (e, n, o, a) {
                      var s = i(e, n, o, a),
                        u = r(e, n, o, a);
                      return (s.context[s.name] = u), t ? { value: u } : u;
                    }
                  );
                case Ai.ArrayExpression:
                  return (
                    (o = []),
                    w(e.elements, function (e) {
                      o.push(a.recurse(e));
                    }),
                    function (e, n, i, r) {
                      for (var a = [], s = 0; s < o.length; ++s) a.push(o[s](e, n, i, r));
                      return t ? { value: a } : a;
                    }
                  );
                case Ai.ObjectExpression:
                  return (
                    (o = []),
                    w(e.properties, function (e) {
                      e.computed
                        ? o.push({ key: a.recurse(e.key), computed: !0, value: a.recurse(e.value) })
                        : o.push({
                            key: e.key.type === Ai.Identifier ? e.key.name : "" + e.key.value,
                            computed: !1,
                            value: a.recurse(e.value)
                          });
                    }),
                    function (e, n, i, r) {
                      for (var a = {}, s = 0; s < o.length; ++s)
                        o[s].computed ? (a[o[s].key(e, n, i, r)] = o[s].value(e, n, i, r)) : (a[o[s].key] = o[s].value(e, n, i, r));
                      return t ? { value: a } : a;
                    }
                  );
                case Ai.ThisExpression:
                  return function (e) {
                    return t ? { value: e } : e;
                  };
                case Ai.LocalsExpression:
                  return function (e, n) {
                    return t ? { value: n } : n;
                  };
                case Ai.NGValueParameter:
                  return function (e, n, i) {
                    return t ? { value: i } : i;
                  };
              }
            },
            "unary+": function (e, t) {
              return function (n, i, r, o) {
                var a = e(n, i, r, o);
                return (a = F(a) ? +a : 0), t ? { value: a } : a;
              };
            },
            "unary-": function (e, t) {
              return function (n, i, r, o) {
                var a = e(n, i, r, o);
                return (a = F(a) ? -a : -0), t ? { value: a } : a;
              };
            },
            "unary!": function (e, t) {
              return function (n, i, r, o) {
                var a = !e(n, i, r, o);
                return t ? { value: a } : a;
              };
            },
            "binary+": function (e, t, n) {
              return function (i, r, o, a) {
                var s = Oi(e(i, r, o, a), t(i, r, o, a));
                return n ? { value: s } : s;
              };
            },
            "binary-": function (e, t, n) {
              return function (i, r, o, a) {
                var s = e(i, r, o, a),
                  u = t(i, r, o, a),
                  c = (F(s) ? s : 0) - (F(u) ? u : 0);
                return n ? { value: c } : c;
              };
            },
            "binary*": function (e, t, n) {
              return function (i, r, o, a) {
                var s = e(i, r, o, a) * t(i, r, o, a);
                return n ? { value: s } : s;
              };
            },
            "binary/": function (e, t, n) {
              return function (i, r, o, a) {
                var s = e(i, r, o, a) / t(i, r, o, a);
                return n ? { value: s } : s;
              };
            },
            "binary%": function (e, t, n) {
              return function (i, r, o, a) {
                var s = e(i, r, o, a) % t(i, r, o, a);
                return n ? { value: s } : s;
              };
            },
            "binary===": function (e, t, n) {
              return function (i, r, o, a) {
                var s = e(i, r, o, a) === t(i, r, o, a);
                return n ? { value: s } : s;
              };
            },
            "binary!==": function (e, t, n) {
              return function (i, r, o, a) {
                var s = e(i, r, o, a) !== t(i, r, o, a);
                return n ? { value: s } : s;
              };
            },
            "binary==": function (e, t, n) {
              return function (i, r, o, a) {
                var s = e(i, r, o, a) == t(i, r, o, a);
                return n ? { value: s } : s;
              };
            },
            "binary!=": function (e, t, n) {
              return function (i, r, o, a) {
                var s = e(i, r, o, a) != t(i, r, o, a);
                return n ? { value: s } : s;
              };
            },
            "binary<": function (e, t, n) {
              return function (i, r, o, a) {
                var s = e(i, r, o, a) < t(i, r, o, a);
                return n ? { value: s } : s;
              };
            },
            "binary>": function (e, t, n) {
              return function (i, r, o, a) {
                var s = e(i, r, o, a) > t(i, r, o, a);
                return n ? { value: s } : s;
              };
            },
            "binary<=": function (e, t, n) {
              return function (i, r, o, a) {
                var s = e(i, r, o, a) <= t(i, r, o, a);
                return n ? { value: s } : s;
              };
            },
            "binary>=": function (e, t, n) {
              return function (i, r, o, a) {
                var s = e(i, r, o, a) >= t(i, r, o, a);
                return n ? { value: s } : s;
              };
            },
            "binary&&": function (e, t, n) {
              return function (i, r, o, a) {
                var s = e(i, r, o, a) && t(i, r, o, a);
                return n ? { value: s } : s;
              };
            },
            "binary||": function (e, t, n) {
              return function (i, r, o, a) {
                var s = e(i, r, o, a) || t(i, r, o, a);
                return n ? { value: s } : s;
              };
            },
            "ternary?:": function (e, t, n, i) {
              return function (r, o, a, s) {
                var u = e(r, o, a, s) ? t(r, o, a, s) : n(r, o, a, s);
                return i ? { value: u } : u;
              };
            },
            value: function (e, t) {
              return function () {
                return t ? { context: void 0, name: void 0, value: e } : e;
              };
            },
            identifier: function (e, t, n) {
              return function (i, r, o, a) {
                var s = r && e in r ? r : i;
                n && 1 !== n && s && null == s[e] && (s[e] = {});
                var u = s ? s[e] : void 0;
                return t ? { context: s, name: e, value: u } : u;
              };
            },
            computedMember: function (e, t, n, i) {
              return function (r, o, a, s) {
                var u,
                  c,
                  l = e(r, o, a, s);
                return (
                  null != l && ((u = xi((u = t(r, o, a, s)))), i && 1 !== i && l && !l[u] && (l[u] = {}), (c = l[u])),
                  n ? { context: l, name: u, value: c } : c
                );
              };
            },
            nonComputedMember: function (e, t, n, i) {
              return function (r, o, a, s) {
                var u = e(r, o, a, s);
                i && 1 !== i && u && null == u[t] && (u[t] = {});
                var c = null != u ? u[t] : void 0;
                return n ? { context: u, name: t, value: c } : c;
              };
            },
            inputs: function (e, t) {
              return function (n, i, r, o) {
                return o ? o[t] : e(n, i, r);
              };
            }
          }),
          (Ui.prototype = {
            constructor: Ui,
            parse: function (e) {
              var t = this.getAst(e),
                n = this.astCompiler.compile(t.ast);
              return (
                (n.literal = (function (e) {
                  return (
                    0 === e.body.length ||
                    (1 === e.body.length &&
                      (e.body[0].expression.type === Ai.Literal ||
                        e.body[0].expression.type === Ai.ArrayExpression ||
                        e.body[0].expression.type === Ai.ObjectExpression))
                  );
                })(t.ast)),
                (n.constant = (function (e) {
                  return e.constant;
                })(t.ast)),
                (n.oneTime = t.oneTime),
                n
              );
            },
            getAst: function (e) {
              var t = !1;
              return (
                ":" === (e = e.trim()).charAt(0) && ":" === e.charAt(1) && ((t = !0), (e = e.substring(2))),
                { ast: this.ast.ast(e), oneTime: t }
              );
            }
          });
        var Yi = r("$sce"),
          Xi = { HTML: "html", CSS: "css", MEDIA_URL: "mediaUrl", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js" },
          er = /_([a-z])/g;
        function tr(e) {
          return e.replace(er, nt);
        }
        function nr(e) {
          var t = [];
          return (
            F(e) &&
              w(e, function (e) {
                t.push(
                  (function (e) {
                    if ("self" === e) return e;
                    if (W(e)) {
                      if (e.indexOf("***") > -1) throw Yi("iwcard", "Illegal sequence *** in string matcher.  String: {0}", e);
                      return (
                        (e = te(e)
                          .replace(/\\\*\\\*/g, ".*")
                          .replace(/\\\*/g, "[^:/.?&;]*")),
                        new RegExp("^" + e + "$")
                      );
                    }
                    if (G(e)) return new RegExp("^" + e.source + "$");
                    throw Yi("imatcher", 'Matchers may only be "self", string patterns or RegExp objects');
                  })(e)
                );
              }),
            t
          );
        }
        function ir() {
          this.SCE_CONTEXTS = Xi;
          var t = ["self"],
            n = [];
          (this.resourceUrlWhitelist = function (e) {
            return arguments.length && (t = nr(e)), t;
          }),
            (this.resourceUrlBlacklist = function (e) {
              return arguments.length && (n = nr(e)), n;
            }),
            (this.$get = [
              "$injector",
              "$$sanitizeUri",
              function (i, r) {
                var o = function (e) {
                  throw Yi("unsafe", "Attempting to use an unsafe value in a safe context.");
                };
                function a(t, n) {
                  return "self" === t
                    ? yr(n, vr) ||
                        (function (t) {
                          return yr(
                            t,
                            (function () {
                              if (e.document.baseURI) return e.document.baseURI;
                              hr || (((hr = e.document.createElement("a")).href = "."), (hr = hr.cloneNode(!1)));
                              return hr.href;
                            })()
                          );
                        })(n)
                    : !!t.exec(n.href);
                }
                function s(e) {
                  var t = function (e) {
                    this.$$unwrapTrustedValue = function () {
                      return e;
                    };
                  };
                  return (
                    e && (t.prototype = new e()),
                    (t.prototype.valueOf = function () {
                      return this.$$unwrapTrustedValue();
                    }),
                    (t.prototype.toString = function () {
                      return this.$$unwrapTrustedValue().toString();
                    }),
                    t
                  );
                }
                i.has("$sanitize") && (o = i.get("$sanitize"));
                var u = s(),
                  c = {};
                return (
                  (c[Xi.HTML] = s(u)),
                  (c[Xi.CSS] = s(u)),
                  (c[Xi.MEDIA_URL] = s(u)),
                  (c[Xi.URL] = s(c[Xi.MEDIA_URL])),
                  (c[Xi.JS] = s(u)),
                  (c[Xi.RESOURCE_URL] = s(c[Xi.URL])),
                  {
                    trustAs: function (e, t) {
                      var n = c.hasOwnProperty(e) ? c[e] : null;
                      if (!n) throw Yi("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", e, t);
                      if (null === t || N(t) || "" === t) return t;
                      if ("string" != typeof t)
                        throw Yi("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", e);
                      return new n(t);
                    },
                    getTrusted: function (e, i) {
                      if (null === i || N(i) || "" === i) return i;
                      var s = c.hasOwnProperty(e) ? c[e] : null;
                      if (s && i instanceof s) return i.$$unwrapTrustedValue();
                      if ((K(i.$$unwrapTrustedValue) && (i = i.$$unwrapTrustedValue()), e === Xi.MEDIA_URL || e === Xi.URL))
                        return r(i.toString(), e === Xi.MEDIA_URL);
                      if (e === Xi.RESOURCE_URL) {
                        if (
                          (function (e) {
                            var i,
                              r,
                              o = gr(e.toString()),
                              s = !1;
                            for (i = 0, r = t.length; i < r; i++)
                              if (a(t[i], o)) {
                                s = !0;
                                break;
                              }
                            if (s)
                              for (i = 0, r = n.length; i < r; i++)
                                if (a(n[i], o)) {
                                  s = !1;
                                  break;
                                }
                            return s;
                          })(i)
                        )
                          return i;
                        throw Yi(
                          "insecurl",
                          "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}",
                          i.toString()
                        );
                      }
                      if (e === Xi.HTML) return o(i);
                      throw Yi("unsafe", "Attempting to use an unsafe value in a safe context.");
                    },
                    valueOf: function (e) {
                      return e instanceof u ? e.$$unwrapTrustedValue() : e;
                    }
                  }
                );
              }
            ]);
        }
        function rr() {
          var e = !0;
          (this.enabled = function (t) {
            return arguments.length && (e = !!t), e;
          }),
            (this.$get = [
              "$parse",
              "$sceDelegate",
              function (t, n) {
                if (e && o < 8)
                  throw Yi(
                    "iequirks",
                    "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information."
                  );
                var i = Ke(Xi);
                (i.isEnabled = function () {
                  return e;
                }),
                  (i.trustAs = n.trustAs),
                  (i.getTrusted = n.getTrusted),
                  (i.valueOf = n.valueOf),
                  e ||
                    ((i.trustAs = i.getTrusted =
                      function (e, t) {
                        return t;
                      }),
                    (i.valueOf = D)),
                  (i.parseAs = function (e, n) {
                    var r = t(n);
                    return r.literal && r.constant
                      ? r
                      : t(n, function (t) {
                          return i.getTrusted(e, t);
                        });
                  });
                var r = i.parseAs,
                  a = i.getTrusted,
                  s = i.trustAs;
                return (
                  w(Xi, function (e, t) {
                    var n = f(t);
                    (i[tr("parse_as_" + n)] = function (t) {
                      return r(e, t);
                    }),
                      (i[tr("get_trusted_" + n)] = function (t) {
                        return a(e, t);
                      }),
                      (i[tr("trust_as_" + n)] = function (t) {
                        return s(e, t);
                      });
                  }),
                  i
                );
              }
            ]);
        }
        function or() {
          this.$get = [
            "$window",
            "$document",
            function (e, t) {
              var n = {},
                i =
                  !(
                    !(e.nw && e.nw.process) &&
                    e.chrome &&
                    ((e.chrome.app && e.chrome.app.runtime) || (!e.chrome.app && e.chrome.runtime && e.chrome.runtime.id))
                  ) &&
                  e.history &&
                  e.history.pushState,
                r = O((/android (\d+)/.exec(f((e.navigator || {}).userAgent)) || [])[1]),
                a = /Boxee/i.test((e.navigator || {}).userAgent),
                s = t[0] || {},
                u = s.body && s.body.style,
                c = !1,
                l = !1;
              return (
                u &&
                  ((c = !(!("transition" in u) && !("webkitTransition" in u))), (l = !(!("animation" in u) && !("webkitAnimation" in u)))),
                {
                  history: !(!i || r < 4 || a),
                  hasEvent: function (e) {
                    if ("input" === e && o) return !1;
                    if (N(n[e])) {
                      var t = s.createElement("div");
                      n[e] = "on" + e in t;
                    }
                    return n[e];
                  },
                  csp: ce(),
                  transitions: c,
                  animations: l,
                  android: r
                }
              );
            }
          ];
        }
        function ar() {
          this.$get = B(function (e) {
            return new sr(e);
          });
        }
        function sr(e) {
          var t = this,
            n = {},
            i = [],
            r = (t.ALL_TASKS_TYPE = "$$all$$"),
            o = (t.DEFAULT_TASK_TYPE = "$$default$$");
          function a() {
            var e = i.pop();
            return e && e.cb;
          }
          function s(e) {
            for (var t = i.length - 1; t >= 0; --t) {
              var n = i[t];
              if (n.type === e) return i.splice(t, 1), n.cb;
            }
          }
          (t.completeTask = function (t, i) {
            i = i || o;
            try {
              t();
            } finally {
              !(function (e) {
                (e = e || o), n[e] && (n[e]--, n[r]--);
              })(i);
              var u = n[i],
                c = n[r];
              if (!c || !u)
                for (var l, d = c ? s : a; (l = d(i)); )
                  try {
                    l();
                  } catch (t) {
                    e.error(t);
                  }
            }
          }),
            (t.incTaskCount = function (e) {
              (n[(e = e || o)] = (n[e] || 0) + 1), (n[r] = (n[r] || 0) + 1);
            }),
            (t.notifyWhenNoPendingTasks = function (e, t) {
              n[(t = t || r)] ? i.push({ type: t, cb: e }) : e();
            });
        }
        var ur = r("$templateRequest");
        function cr() {
          var e;
          (this.httpOptions = function (t) {
            return t ? ((e = t), this) : e;
          }),
            (this.$get = [
              "$exceptionHandler",
              "$templateCache",
              "$http",
              "$q",
              "$sce",
              function (t, n, i, r, o) {
                function a(s, u) {
                  a.totalPendingRequests++, (W(s) && !N(n.get(s))) || (s = o.getTrustedResourceUrl(s));
                  var c = i.defaults && i.defaults.transformResponse;
                  return (
                    q(c)
                      ? (c = c.filter(function (e) {
                          return e !== qn;
                        }))
                      : c === qn && (c = null),
                    i
                      .get(s, A({ cache: n, transformResponse: c }, e))
                      .finally(function () {
                        a.totalPendingRequests--;
                      })
                      .then(
                        function (e) {
                          return n.put(s, e.data);
                        },
                        function (e) {
                          u || ((e = ur("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", s, e.status, e.statusText)), t(e));
                          return r.reject(e);
                        }
                      )
                  );
                }
                return (a.totalPendingRequests = 0), a;
              }
            ]);
        }
        function lr() {
          this.$get = [
            "$rootScope",
            "$browser",
            "$location",
            function (e, t, n) {
              var i = {
                findBindings: function (e, t, n) {
                  var i = e.getElementsByClassName("ng-binding"),
                    r = [];
                  return (
                    w(i, function (e) {
                      var i = $.element(e).data("$binding");
                      i &&
                        w(i, function (i) {
                          n ? new RegExp("(^|\\s)" + te(t) + "(\\s|\\||$)").test(i) && r.push(e) : -1 !== i.indexOf(t) && r.push(e);
                        });
                    }),
                    r
                  );
                },
                findModels: function (e, t, n) {
                  for (var i = ["ng-", "data-ng-", "ng\\:"], r = 0; r < i.length; ++r) {
                    var o = "[" + i[r] + "model" + (n ? "=" : "*=") + '"' + t + '"]',
                      a = e.querySelectorAll(o);
                    if (a.length) return a;
                  }
                },
                getLocation: function () {
                  return n.url();
                },
                setLocation: function (t) {
                  t !== n.url() && (n.url(t), e.$digest());
                },
                whenStable: function (e) {
                  t.notifyWhenNoOutstandingRequests(e);
                }
              };
              return i;
            }
          ];
        }
        var dr = r("$timeout");
        function fr() {
          this.$get = [
            "$rootScope",
            "$browser",
            "$q",
            "$$q",
            "$exceptionHandler",
            function (e, t, n, i, r) {
              var o = {};
              function a(a, s, u) {
                K(a) || ((u = s), (s = a), (a = I));
                var c,
                  l = fe(arguments, 3),
                  d = F(u) && !u,
                  f = (d ? i : n).defer(),
                  h = f.promise;
                return (
                  (c = t.defer(
                    function () {
                      try {
                        f.resolve(a.apply(null, l));
                      } catch (e) {
                        f.reject(e), r(e);
                      } finally {
                        delete o[h.$$timeoutId];
                      }
                      d || e.$apply();
                    },
                    s,
                    "$timeout"
                  )),
                  (h.$$timeoutId = c),
                  (o[c] = f),
                  h
                );
              }
              return (
                (a.cancel = function (e) {
                  if (!e) return !1;
                  if (!e.hasOwnProperty("$$timeoutId"))
                    throw dr("badprom", "`$timeout.cancel()` called with a promise that was not generated by `$timeout()`.");
                  if (!o.hasOwnProperty(e.$$timeoutId)) return !1;
                  var n = e.$$timeoutId,
                    i = o[n];
                  return Gi(i.promise), i.reject("canceled"), delete o[n], t.defer.cancel(n);
                }),
                a
              );
            }
          ];
        }
        var hr,
          pr = e.document.createElement("a"),
          vr = gr(e.location.href);
        pr.href = "http://[::1]";
        var mr = "[::1]" === pr.hostname;
        function gr(e) {
          if (!W(e)) return e;
          var t = e;
          o && (pr.setAttribute("href", t), (t = pr.href)), pr.setAttribute("href", t);
          var n = pr.hostname;
          return (
            !mr && n.indexOf(":") > -1 && (n = "[" + n + "]"),
            {
              href: pr.href,
              protocol: pr.protocol ? pr.protocol.replace(/:$/, "") : "",
              host: pr.host,
              search: pr.search ? pr.search.replace(/^\?/, "") : "",
              hash: pr.hash ? pr.hash.replace(/^#/, "") : "",
              hostname: n,
              port: pr.port,
              pathname: "/" === pr.pathname.charAt(0) ? pr.pathname : "/" + pr.pathname
            }
          );
        }
        function yr(e, t) {
          return (e = gr(e)), (t = gr(t)), e.protocol === t.protocol && e.host === t.host;
        }
        function _r() {
          this.$get = B(e);
        }
        function $r(e) {
          var t = e[0] || {},
            n = {},
            i = "";
          function r(e) {
            try {
              return decodeURIComponent(e);
            } catch (t) {
              return e;
            }
          }
          return function () {
            var e,
              o,
              a,
              s,
              u,
              c = (function (e) {
                try {
                  return e.cookie || "";
                } catch (e) {
                  return "";
                }
              })(t);
            if (c !== i)
              for (e = (i = c).split("; "), n = {}, a = 0; a < e.length; a++)
                (s = (o = e[a]).indexOf("=")) > 0 && ((u = r(o.substring(0, s))), N(n[u]) && (n[u] = r(o.substring(s + 1))));
            return n;
          };
        }
        function br() {
          this.$get = $r;
        }
        function Cr(e) {
          var t = "Filter";
          function n(i, r) {
            if (U(i)) {
              var o = {};
              return (
                w(i, function (e, t) {
                  o[t] = n(t, e);
                }),
                o
              );
            }
            return e.factory(i + t, r);
          }
          (this.register = n),
            (this.$get = [
              "$injector",
              function (e) {
                return function (n) {
                  return e.get(n + t);
                };
              }
            ]),
            n("currency", Ar),
            n("date", jr),
            n("filter", wr),
            n("json", Wr),
            n("limitTo", qr),
            n("lowercase", Vr),
            n("number", Pr),
            n("orderBy", Kr),
            n("uppercase", Hr);
        }
        function wr() {
          return function (e, t, n, i) {
            if (!C(e)) {
              if (null == e) return e;
              throw r("filter")("notarray", "Expected array but received: {0}", e);
            }
            var o, a;
            switch (((i = i || "$"), xr(t))) {
              case "function":
                o = t;
                break;
              case "boolean":
              case "null":
              case "number":
              case "string":
                a = !0;
              case "object":
                o = (function (e, t, n, i) {
                  var r,
                    o = U(e) && n in e;
                  !0 === t
                    ? (t = ue)
                    : K(t) ||
                      (t = function (e, t) {
                        return (
                          !N(e) &&
                          (null === e || null === t
                            ? e === t
                            : !(U(t) || (U(e) && !R(e))) && ((e = f("" + e)), (t = f("" + t)), -1 !== e.indexOf(t)))
                        );
                      });
                  return (
                    (r = function (r) {
                      return o && !U(r) ? Sr(r, e[n], t, n, !1) : Sr(r, e, t, n, i);
                    }),
                    r
                  );
                })(t, n, i, a);
                break;
              default:
                return e;
            }
            return Array.prototype.filter.call(e, o);
          };
        }
        function Sr(e, t, n, i, r, o) {
          var a = xr(e),
            s = xr(t);
          if ("string" === s && "!" === t.charAt(0)) return !Sr(e, t.substring(1), n, i, r);
          if (q(e))
            return e.some(function (e) {
              return Sr(e, t, n, i, r);
            });
          switch (a) {
            case "object":
              var u;
              if (r) {
                for (u in e) if (u.charAt && "$" !== u.charAt(0) && Sr(e[u], t, n, i, !0)) return !0;
                return !o && Sr(e, t, n, i, !1);
              }
              if ("object" === s) {
                for (u in t) {
                  var c = t[u];
                  if (!K(c) && !N(c)) {
                    var l = u === i;
                    if (!Sr(l ? e : e[u], c, n, i, l, l)) return !1;
                  }
                }
                return !0;
              }
              return n(e, t);
            case "function":
              return !1;
            default:
              return n(e, t);
          }
        }
        function xr(e) {
          return null === e ? "null" : typeof e;
        }
        ($r.$inject = ["$document"]), (Cr.$inject = ["$provide"]);
        var Tr = 22,
          Er = ".",
          kr = "0";
        function Ar(e) {
          var t = e.NUMBER_FORMATS;
          return function (e, n, i) {
            N(n) && (n = t.CURRENCY_SYM), N(i) && (i = t.PATTERNS[1].maxFrac);
            var r = n ? /\u00A4/g : /\s*\u00A4\s*/g;
            return null == e ? e : Or(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, i).replace(r, n);
          };
        }
        function Pr(e) {
          var t = e.NUMBER_FORMATS;
          return function (e, n) {
            return null == e ? e : Or(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n);
          };
        }
        function Or(e, t, n, i, r) {
          if ((!W(e) && !V(e)) || isNaN(e)) return "";
          var o,
            a = !isFinite(e),
            s = !1,
            u = Math.abs(e) + "",
            c = "";
          if (a) c = "∞";
          else {
            (o = (function (e) {
              var t,
                n,
                i,
                r,
                o,
                a = 0;
              for (
                (n = e.indexOf(Er)) > -1 && (e = e.replace(Er, "")),
                  (i = e.search(/e/i)) > 0 ? (n < 0 && (n = i), (n += +e.slice(i + 1)), (e = e.substring(0, i))) : n < 0 && (n = e.length),
                  i = 0;
                e.charAt(i) === kr;
                i++
              );
              if (i === (o = e.length)) (t = [0]), (n = 1);
              else {
                for (o--; e.charAt(o) === kr; ) o--;
                for (n -= i, t = [], r = 0; i <= o; i++, r++) t[r] = +e.charAt(i);
              }
              return n > Tr && ((t = t.splice(0, Tr - 1)), (a = n - 1), (n = 1)), { d: t, e: a, i: n };
            })(u)),
              (function (e, t, n, i) {
                var r = e.d,
                  o = r.length - e.i,
                  a = (t = N(t) ? Math.min(Math.max(n, o), i) : +t) + e.i,
                  s = r[a];
                if (a > 0) {
                  r.splice(Math.max(e.i, a));
                  for (var u = a; u < r.length; u++) r[u] = 0;
                } else {
                  (o = Math.max(0, o)), (e.i = 1), (r.length = Math.max(1, (a = t + 1))), (r[0] = 0);
                  for (var c = 1; c < a; c++) r[c] = 0;
                }
                if (s >= 5)
                  if (a - 1 < 0) {
                    for (var l = 0; l > a; l--) r.unshift(0), e.i++;
                    r.unshift(1), e.i++;
                  } else r[a - 1]++;
                for (; o < Math.max(0, t); o++) r.push(0);
                var d = r.reduceRight(function (e, t, n, i) {
                  return (t += e), (i[n] = t % 10), Math.floor(t / 10);
                }, 0);
                d && (r.unshift(d), e.i++);
              })(o, r, t.minFrac, t.maxFrac);
            var l = o.d,
              d = o.i,
              f = o.e,
              h = [];
            for (
              s = l.reduce(function (e, t) {
                return e && !t;
              }, !0);
              d < 0;

            )
              l.unshift(0), d++;
            d > 0 ? (h = l.splice(d, l.length)) : ((h = l), (l = [0]));
            var p = [];
            for (l.length >= t.lgSize && p.unshift(l.splice(-t.lgSize, l.length).join("")); l.length > t.gSize; )
              p.unshift(l.splice(-t.gSize, l.length).join(""));
            l.length && p.unshift(l.join("")), (c = p.join(n)), h.length && (c += i + h.join("")), f && (c += "e+" + f);
          }
          return e < 0 && !s ? t.negPre + c + t.negSuf : t.posPre + c + t.posSuf;
        }
        function Mr(e, t, n, i) {
          var r = "";
          for ((e < 0 || (i && e <= 0)) && (i ? (e = 1 - e) : ((e = -e), (r = "-"))), e = "" + e; e.length < t; ) e = kr + e;
          return n && (e = e.substr(e.length - t)), r + e;
        }
        function Lr(e, t, n, i, r) {
          return (
            (n = n || 0),
            function (o) {
              var a = o["get" + e]();
              return (n > 0 || a > -n) && (a += n), 0 === a && -12 === n && (a = 12), Mr(a, t, i, r);
            }
          );
        }
        function Ir(e, t, n) {
          return function (i, r) {
            var o = i["get" + e]();
            return r[h((n ? "STANDALONE" : "") + (t ? "SHORT" : "") + e)][o];
          };
        }
        function Dr(e) {
          var t = new Date(e, 0, 1).getDay();
          return new Date(e, 0, (t <= 4 ? 5 : 12) - t);
        }
        function Br(e) {
          return function (t) {
            var n,
              i = Dr(t.getFullYear()),
              r = +((n = t), new Date(n.getFullYear(), n.getMonth(), n.getDate() + (4 - n.getDay()))) - +i;
            return Mr(1 + Math.round(r / 6048e5), e);
          };
        }
        function Rr(e, t) {
          return e.getFullYear() <= 0 ? t.ERAS[0] : t.ERAS[1];
        }
        (Ar.$inject = ["$locale"]), (Pr.$inject = ["$locale"]);
        var Nr = {
            yyyy: Lr("FullYear", 4, 0, !1, !0),
            yy: Lr("FullYear", 2, 0, !0, !0),
            y: Lr("FullYear", 1, 0, !1, !0),
            MMMM: Ir("Month"),
            MMM: Ir("Month", !0),
            MM: Lr("Month", 2, 1),
            M: Lr("Month", 1, 1),
            LLLL: Ir("Month", !1, !0),
            dd: Lr("Date", 2),
            d: Lr("Date", 1),
            HH: Lr("Hours", 2),
            H: Lr("Hours", 1),
            hh: Lr("Hours", 2, -12),
            h: Lr("Hours", 1, -12),
            mm: Lr("Minutes", 2),
            m: Lr("Minutes", 1),
            ss: Lr("Seconds", 2),
            s: Lr("Seconds", 1),
            sss: Lr("Milliseconds", 3),
            EEEE: Ir("Day"),
            EEE: Ir("Day", !0),
            a: function (e, t) {
              return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1];
            },
            Z: function (e, t, n) {
              var i = -1 * n,
                r = i >= 0 ? "+" : "";
              return (r += Mr(Math[i > 0 ? "floor" : "ceil"](i / 60), 2) + Mr(Math.abs(i % 60), 2));
            },
            ww: Br(2),
            w: Br(1),
            G: Rr,
            GG: Rr,
            GGG: Rr,
            GGGG: function (e, t) {
              return e.getFullYear() <= 0 ? t.ERANAMES[0] : t.ERANAMES[1];
            }
          },
          Fr = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,
          Ur = /^-?\d+$/;
        function jr(e) {
          var t = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
          return function (n, i, r) {
            var o,
              a,
              s = "",
              u = [];
            if (
              ((i = i || "mediumDate"),
              (i = e.DATETIME_FORMATS[i] || i),
              W(n) &&
                (n = Ur.test(n)
                  ? O(n)
                  : (function (e) {
                      var n;
                      if ((n = e.match(t))) {
                        var i = new Date(0),
                          r = 0,
                          o = 0,
                          a = n[8] ? i.setUTCFullYear : i.setFullYear,
                          s = n[8] ? i.setUTCHours : i.setHours;
                        n[9] && ((r = O(n[9] + n[10])), (o = O(n[9] + n[11]))), a.call(i, O(n[1]), O(n[2]) - 1, O(n[3]));
                        var u = O(n[4] || 0) - r,
                          c = O(n[5] || 0) - o,
                          l = O(n[6] || 0),
                          d = Math.round(1e3 * parseFloat("0." + (n[7] || 0)));
                        return s.call(i, u, c, l, d), i;
                      }
                      return e;
                    })(n)),
              V(n) && (n = new Date(n)),
              !H(n) || !isFinite(n.getTime()))
            )
              return n;
            for (; i; ) (a = Fr.exec(i)) ? (i = (u = de(u, a, 1)).pop()) : (u.push(i), (i = null));
            var c = n.getTimezoneOffset();
            return (
              r && ((c = ye(r, c)), (n = $e(n, r, !0))),
              w(u, function (t) {
                (o = Nr[t]), (s += o ? o(n, e.DATETIME_FORMATS, c) : "''" === t ? "'" : t.replace(/(^'|'$)/g, "").replace(/''/g, "'"));
              }),
              s
            );
          };
        }
        function Wr() {
          return function (e, t) {
            return N(t) && (t = 2), ve(e, t);
          };
        }
        jr.$inject = ["$locale"];
        var Vr = B(f),
          Hr = B(h);
        function qr() {
          return function (e, t, n) {
            return (
              (t = Math.abs(Number(t)) === 1 / 0 ? Number(t) : O(t)),
              M(t)
                ? e
                : (V(e) && (e = e.toString()),
                  C(e)
                    ? ((n = (n = !n || isNaN(n) ? 0 : O(n)) < 0 ? Math.max(0, e.length + n) : n),
                      t >= 0 ? zr(e, n, n + t) : 0 === n ? zr(e, t, e.length) : zr(e, Math.max(0, n + t), n))
                    : e)
            );
          };
        }
        function zr(e, t, n) {
          return W(e) ? e.slice(t, n) : p.call(e, t, n);
        }
        function Kr(e) {
          return function (i, o, a, s) {
            if (null == i) return i;
            if (!C(i)) throw r("orderBy")("notarray", "Expected array but received: {0}", i);
            q(o) || (o = [o]), 0 === o.length && (o = ["+"]);
            var u = o.map(function (t) {
                var n = 1,
                  i = D;
                if (K(t)) i = t;
                else if (
                  W(t) &&
                  (("+" !== t.charAt(0) && "-" !== t.charAt(0)) || ((n = "-" === t.charAt(0) ? -1 : 1), (t = t.substring(1))),
                  "" !== t && (i = e(t)).constant)
                ) {
                  var r = i();
                  i = function (e) {
                    return e[r];
                  };
                }
                return { get: i, descending: n };
              }),
              c = a ? -1 : 1,
              l = K(s) ? s : n,
              d = Array.prototype.map.call(i, function (e, n) {
                return {
                  value: e,
                  tieBreaker: { value: n, type: "number", index: n },
                  predicateValues: u.map(function (i) {
                    return (function (e, n) {
                      var i = typeof e;
                      null === e
                        ? (i = "null")
                        : "object" === i &&
                          (e = (function (e) {
                            if (K(e.valueOf) && t((e = e.valueOf()))) return e;
                            if (R(e) && t((e = e.toString()))) return e;
                            return e;
                          })(e));
                      return { value: e, type: i, index: n };
                    })(i.get(e), n);
                  })
                };
              });
            return (
              d.sort(function (e, t) {
                for (var i = 0, r = u.length; i < r; i++) {
                  var o = l(e.predicateValues[i], t.predicateValues[i]);
                  if (o) return o * u[i].descending * c;
                }
                return (l(e.tieBreaker, t.tieBreaker) || n(e.tieBreaker, t.tieBreaker)) * c;
              }),
              (i = d.map(function (e) {
                return e.value;
              }))
            );
          };
          function t(e) {
            switch (typeof e) {
              case "number":
              case "boolean":
              case "string":
                return !0;
              default:
                return !1;
            }
          }
          function n(e, t) {
            var n = 0,
              i = e.type,
              r = t.type;
            if (i === r) {
              var o = e.value,
                a = t.value;
              "string" === i
                ? ((o = o.toLowerCase()), (a = a.toLowerCase()))
                : "object" === i && (U(o) && (o = e.index), U(a) && (a = t.index)),
                o !== a && (n = o < a ? -1 : 1);
            } else n = "undefined" === i ? 1 : "undefined" === r ? -1 : "null" === i ? 1 : "null" === r || i < r ? -1 : 1;
            return n;
          }
        }
        function Gr(e) {
          return K(e) && (e = { link: e }), (e.restrict = e.restrict || "AC"), B(e);
        }
        Kr.$inject = ["$parse"];
        var Zr = B({
            restrict: "E",
            compile: function (e, t) {
              if (!t.href && !t.xlinkHref)
                return function (e, t) {
                  if ("a" === t[0].nodeName.toLowerCase()) {
                    var n = "[object SVGAnimatedString]" === g.call(t.prop("href")) ? "xlink:href" : "href";
                    t.on("click", function (e) {
                      t.attr(n) || e.preventDefault();
                    });
                  }
                };
            }
          }),
          Qr = {};
        w(Bt, function (e, t) {
          if ("multiple" !== e) {
            var n = xn("ng-" + t),
              i = r;
            "checked" === e &&
              (i = function (e, t, i) {
                i.ngModel !== i[n] && r(e, 0, i);
              }),
              (Qr[n] = function () {
                return { restrict: "A", priority: 100, link: i };
              });
          }
          function r(e, i, r) {
            e.$watch(r[n], function (e) {
              r.$set(t, !!e);
            });
          }
        }),
          w(Nt, function (e, t) {
            Qr[t] = function () {
              return {
                priority: 100,
                link: function (e, n, i) {
                  if ("ngPattern" === t && "/" === i.ngPattern.charAt(0)) {
                    var r = i.ngPattern.match(c);
                    if (r) return void i.$set("ngPattern", new RegExp(r[1], r[2]));
                  }
                  e.$watch(i[t], function (e) {
                    i.$set(t, e);
                  });
                }
              };
            };
          }),
          w(["src", "srcset", "href"], function (e) {
            var t = xn("ng-" + e);
            Qr[t] = [
              "$sce",
              function (n) {
                return {
                  priority: 99,
                  link: function (i, r, a) {
                    var s = e,
                      u = e;
                    "href" === e &&
                      "[object SVGAnimatedString]" === g.call(r.prop("href")) &&
                      ((u = "xlinkHref"), (a.$attr[u] = "xlink:href"), (s = null)),
                      a.$set(t, n.getTrustedMediaUrl(a[t])),
                      a.$observe(t, function (t) {
                        t ? (a.$set(u, t), o && s && r.prop(s, a[u])) : "href" === e && a.$set(u, null);
                      });
                  }
                };
              }
            ];
          });
        var Jr = {
            $addControl: I,
            $getControls: B([]),
            $$renameControl: function (e, t) {
              e.$name = t;
            },
            $removeControl: I,
            $setValidity: I,
            $setDirty: I,
            $setPristine: I,
            $setSubmitted: I,
            $$setSubmitted: I
          },
          Yr = "ng-pending",
          Xr = "ng-submitted";
        function eo(e, t, n, i, r) {
          (this.$$controls = []),
            (this.$error = {}),
            (this.$$success = {}),
            (this.$pending = void 0),
            (this.$name = r(t.name || t.ngForm || "")(n)),
            (this.$dirty = !1),
            (this.$pristine = !0),
            (this.$valid = !0),
            (this.$invalid = !1),
            (this.$submitted = !1),
            (this.$$parentForm = Jr),
            (this.$$element = e),
            (this.$$animate = i),
            ro(this);
        }
        (eo.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"]),
          (eo.prototype = {
            $rollbackViewValue: function () {
              w(this.$$controls, function (e) {
                e.$rollbackViewValue();
              });
            },
            $commitViewValue: function () {
              w(this.$$controls, function (e) {
                e.$commitViewValue();
              });
            },
            $addControl: function (e) {
              Ne(e.$name, "input"), this.$$controls.push(e), e.$name && (this[e.$name] = e), (e.$$parentForm = this);
            },
            $getControls: function () {
              return Ke(this.$$controls);
            },
            $$renameControl: function (e, t) {
              var n = e.$name;
              this[n] === e && delete this[n], (this[t] = e), (e.$name = t);
            },
            $removeControl: function (e) {
              e.$name && this[e.$name] === e && delete this[e.$name],
                w(
                  this.$pending,
                  function (t, n) {
                    this.$setValidity(n, null, e);
                  },
                  this
                ),
                w(
                  this.$error,
                  function (t, n) {
                    this.$setValidity(n, null, e);
                  },
                  this
                ),
                w(
                  this.$$success,
                  function (t, n) {
                    this.$setValidity(n, null, e);
                  },
                  this
                ),
                oe(this.$$controls, e),
                (e.$$parentForm = Jr);
            },
            $setDirty: function () {
              this.$$animate.removeClass(this.$$element, ta),
                this.$$animate.addClass(this.$$element, na),
                (this.$dirty = !0),
                (this.$pristine = !1),
                this.$$parentForm.$setDirty();
            },
            $setPristine: function () {
              this.$$animate.setClass(this.$$element, ta, na + " " + Xr),
                (this.$dirty = !1),
                (this.$pristine = !0),
                (this.$submitted = !1),
                w(this.$$controls, function (e) {
                  e.$setPristine();
                });
            },
            $setUntouched: function () {
              w(this.$$controls, function (e) {
                e.$setUntouched();
              });
            },
            $setSubmitted: function () {
              for (var e = this; e.$$parentForm && e.$$parentForm !== Jr; ) e = e.$$parentForm;
              e.$$setSubmitted();
            },
            $$setSubmitted: function () {
              this.$$animate.addClass(this.$$element, Xr),
                (this.$submitted = !0),
                w(this.$$controls, function (e) {
                  e.$$setSubmitted && e.$$setSubmitted();
                });
            }
          }),
          oo({
            clazz: eo,
            set: function (e, t, n) {
              var i = e[t];
              i ? -1 === i.indexOf(n) && i.push(n) : (e[t] = [n]);
            },
            unset: function (e, t, n) {
              var i = e[t];
              i && (oe(i, n), 0 === i.length && delete e[t]);
            }
          });
        var to = function (e) {
            return [
              "$timeout",
              "$parse",
              function (t, n) {
                return {
                  name: "form",
                  restrict: e ? "EAC" : "E",
                  require: ["form", "^^?form"],
                  controller: eo,
                  compile: function (n, r) {
                    n.addClass(ta).addClass(Xo);
                    var o = r.name ? "name" : !(!e || !r.ngForm) && "ngForm";
                    return {
                      pre: function (e, n, r, a) {
                        var s = a[0];
                        if (!("action" in r)) {
                          var u = function (t) {
                            e.$apply(function () {
                              s.$commitViewValue(), s.$setSubmitted();
                            }),
                              t.preventDefault();
                          };
                          n[0].addEventListener("submit", u),
                            n.on("$destroy", function () {
                              t(
                                function () {
                                  n[0].removeEventListener("submit", u);
                                },
                                0,
                                !1
                              );
                            });
                        }
                        (a[1] || s.$$parentForm).$addControl(s);
                        var c = o ? i(s.$name) : I;
                        o &&
                          (c(e, s),
                          r.$observe(o, function (t) {
                            s.$name !== t && (c(e, void 0), s.$$parentForm.$$renameControl(s, t), (c = i(s.$name))(e, s));
                          })),
                          n.on("$destroy", function () {
                            s.$$parentForm.$removeControl(s), c(e, void 0), A(s, Jr);
                          });
                      }
                    };
                  }
                };
                function i(e) {
                  return "" === e ? n('this[""]').assign : n(e).assign || I;
                }
              }
            ];
          },
          no = to(),
          io = to(!0);
        function ro(e) {
          (e.$$classCache = {}), (e.$$classCache[ea] = !(e.$$classCache[Xo] = e.$$element.hasClass(Xo)));
        }
        function oo(e) {
          var t = e.clazz,
            n = e.set,
            i = e.unset;
          function r(e, t, n) {
            n && !e.$$classCache[t]
              ? (e.$$animate.addClass(e.$$element, t), (e.$$classCache[t] = !0))
              : !n && e.$$classCache[t] && (e.$$animate.removeClass(e.$$element, t), (e.$$classCache[t] = !1));
          }
          function o(e, t, n) {
            (t = t ? "-" + Le(t, "-") : ""), r(e, Xo + t, !0 === n), r(e, ea + t, !1 === n);
          }
          t.prototype.$setValidity = function (e, t, a) {
            var s;
            N(t)
              ? (function (e, t, i, r) {
                  e[t] || (e[t] = {});
                  n(e[t], i, r);
                })(this, "$pending", e, a)
              : (function (e, t, n, r) {
                  e[t] && i(e[t], n, r);
                  ao(e[t]) && (e[t] = void 0);
                })(this, "$pending", e, a),
              J(t)
                ? t
                  ? (i(this.$error, e, a), n(this.$$success, e, a))
                  : (n(this.$error, e, a), i(this.$$success, e, a))
                : (i(this.$error, e, a), i(this.$$success, e, a)),
              this.$pending
                ? (r(this, Yr, !0), (this.$valid = this.$invalid = void 0), o(this, "", null))
                : (r(this, Yr, !1), (this.$valid = ao(this.$error)), (this.$invalid = !this.$valid), o(this, "", this.$valid)),
              o(this, e, (s = this.$pending && this.$pending[e] ? void 0 : !this.$error[e] && (!!this.$$success[e] || null))),
              this.$$parentForm.$setValidity(e, s, this);
          };
        }
        function ao(e) {
          if (e) for (var t in e) if (e.hasOwnProperty(t)) return !1;
          return !0;
        }
        var so = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
          uo = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
          co =
            /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
          lo = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
          fo = /^(\d{4,})-(\d{2})-(\d{2})$/,
          ho = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
          po = /^(\d{4,})-W(\d\d)$/,
          vo = /^(\d{4,})-(\d\d)$/,
          mo = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
          go = "keydown wheel mousedown",
          yo = Ue();
        w("date,datetime-local,month,time,week".split(","), function (e) {
          yo[e] = !0;
        });
        var _o = {
          text: function (e, t, n, i, r, o) {
            bo(e, t, n, i, r, o), $o(i);
          },
          date: wo("date", fo, Co(fo, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
          "datetime-local": wo("datetimelocal", ho, Co(ho, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
          time: wo("time", mo, Co(mo, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
          week: wo(
            "week",
            po,
            function (e, t) {
              if (H(e)) return e;
              if (W(e)) {
                po.lastIndex = 0;
                var n = po.exec(e);
                if (n) {
                  var i = +n[1],
                    r = +n[2],
                    o = 0,
                    a = 0,
                    s = 0,
                    u = 0,
                    c = Dr(i),
                    l = 7 * (r - 1);
                  return (
                    t && ((o = t.getHours()), (a = t.getMinutes()), (s = t.getSeconds()), (u = t.getMilliseconds())),
                    new Date(i, 0, c.getDate() + l, o, a, s, u)
                  );
                }
              }
              return NaN;
            },
            "yyyy-Www"
          ),
          month: wo("month", vo, Co(vo, ["yyyy", "MM"]), "yyyy-MM"),
          number: function (e, t, n, i, r, o, a, s) {
            var u;
            if ((So(e, t, n, i, "number"), xo(i), bo(e, t, n, i, r, o), F(n.min) || n.ngMin)) {
              var c = n.min || s(n.ngMin)(e);
              (u = To(c)),
                (i.$validators.min = function (e, t) {
                  return i.$isEmpty(t) || N(u) || t >= u;
                }),
                n.$observe("min", function (e) {
                  e !== c && ((u = To(e)), (c = e), i.$validate());
                });
            }
            if (F(n.max) || n.ngMax) {
              var l = n.max || s(n.ngMax)(e),
                d = To(l);
              (i.$validators.max = function (e, t) {
                return i.$isEmpty(t) || N(d) || t <= d;
              }),
                n.$observe("max", function (e) {
                  e !== l && ((d = To(e)), (l = e), i.$validate());
                });
            }
            if (F(n.step) || n.ngStep) {
              var f = n.step || s(n.ngStep)(e),
                h = To(f);
              (i.$validators.step = function (e, t) {
                return i.$isEmpty(t) || N(h) || Ao(t, u || 0, h);
              }),
                n.$observe("step", function (e) {
                  e !== f && ((h = To(e)), (f = e), i.$validate());
                });
            }
          },
          url: function (e, t, n, i, r, o) {
            bo(e, t, n, i, r, o),
              $o(i),
              (i.$validators.url = function (e, t) {
                var n = e || t;
                return i.$isEmpty(n) || uo.test(n);
              });
          },
          email: function (e, t, n, i, r, o) {
            bo(e, t, n, i, r, o),
              $o(i),
              (i.$validators.email = function (e, t) {
                var n = e || t;
                return i.$isEmpty(n) || co.test(n);
              });
          },
          radio: function (e, t, n, i) {
            var r = !n.ngTrim || "false" !== ee(n.ngTrim);
            N(n.name) && t.attr("name", T());
            t.on("change", function (e) {
              var o;
              t[0].checked && ((o = n.value), r && (o = ee(o)), i.$setViewValue(o, e && e.type));
            }),
              (i.$render = function () {
                var e = n.value;
                r && (e = ee(e)), (t[0].checked = e === i.$viewValue);
              }),
              n.$observe("value", i.$render);
          },
          range: function (e, t, n, i, r, o) {
            So(e, t, n, i, "range"), xo(i), bo(e, t, n, i, r, o);
            var a = i.$$hasNativeValidators && "range" === t[0].type,
              s = a ? 0 : void 0,
              u = a ? 100 : void 0,
              c = a ? 1 : void 0,
              l = t[0].validity,
              d = F(n.min),
              f = F(n.max),
              h = F(n.step),
              p = i.$render;
            (i.$render =
              a && F(l.rangeUnderflow) && F(l.rangeOverflow)
                ? function () {
                    p(), i.$setViewValue(t.val());
                  }
                : p),
              d &&
                ((s = To(n.min)),
                (i.$validators.min = a
                  ? function () {
                      return !0;
                    }
                  : function (e, t) {
                      return i.$isEmpty(t) || N(s) || t >= s;
                    }),
                v("min", function (e) {
                  if (((s = To(e)), M(i.$modelValue))) return;
                  if (a) {
                    var n = t.val();
                    s > n && ((n = s), t.val(n)), i.$setViewValue(n);
                  } else i.$validate();
                }));
            f &&
              ((u = To(n.max)),
              (i.$validators.max = a
                ? function () {
                    return !0;
                  }
                : function (e, t) {
                    return i.$isEmpty(t) || N(u) || t <= u;
                  }),
              v("max", function (e) {
                if (((u = To(e)), M(i.$modelValue))) return;
                if (a) {
                  var n = t.val();
                  u < n && (t.val(u), (n = u < s ? s : u)), i.$setViewValue(n);
                } else i.$validate();
              }));
            h &&
              ((c = To(n.step)),
              (i.$validators.step = a
                ? function () {
                    return !l.stepMismatch;
                  }
                : function (e, t) {
                    return i.$isEmpty(t) || N(c) || Ao(t, s || 0, c);
                  }),
              v("step", function (e) {
                if (((c = To(e)), M(i.$modelValue))) return;
                a ? i.$viewValue !== t.val() && i.$setViewValue(t.val()) : i.$validate();
              }));
            function v(e, i) {
              t.attr(e, n[e]);
              var r = n[e];
              n.$observe(e, function (e) {
                e !== r && ((r = e), i(e));
              });
            }
          },
          checkbox: function (e, t, n, i, r, o, a, s) {
            var u = Po(s, e, "ngTrueValue", n.ngTrueValue, !0),
              c = Po(s, e, "ngFalseValue", n.ngFalseValue, !1);
            t.on("change", function (e) {
              i.$setViewValue(t[0].checked, e && e.type);
            }),
              (i.$render = function () {
                t[0].checked = i.$viewValue;
              }),
              (i.$isEmpty = function (e) {
                return !1 === e;
              }),
              i.$formatters.push(function (e) {
                return ue(e, u);
              }),
              i.$parsers.push(function (e) {
                return e ? u : c;
              });
          },
          hidden: I,
          button: I,
          submit: I,
          reset: I,
          file: I
        };
        function $o(e) {
          e.$formatters.push(function (t) {
            return e.$isEmpty(t) ? t : t.toString();
          });
        }
        function bo(e, t, n, i, r, o) {
          var a,
            s = f(t[0].type);
          if (!r.android) {
            var u = !1;
            t.on("compositionstart", function () {
              u = !0;
            }),
              t.on("compositionupdate", function (e) {
                (N(e.data) || "" === e.data) && (u = !1);
              }),
              t.on("compositionend", function () {
                (u = !1), c();
              });
          }
          var c = function (e) {
            if ((a && (o.defer.cancel(a), (a = null)), !u)) {
              var r = t.val(),
                c = e && e.type;
              "password" === s || (n.ngTrim && "false" === n.ngTrim) || (r = ee(r)),
                (i.$viewValue !== r || ("" === r && i.$$hasNativeValidators)) && i.$setViewValue(r, c);
            }
          };
          if (r.hasEvent("input")) t.on("input", c);
          else {
            var d = function (e, t, n) {
              a ||
                (a = o.defer(function () {
                  (a = null), (t && t.value === n) || c(e);
                }));
            };
            t.on("keydown", function (e) {
              var t = e.keyCode;
              91 === t || (15 < t && t < 19) || (37 <= t && t <= 40) || d(e, this, this.value);
            }),
              r.hasEvent("paste") && t.on("paste cut drop", d);
          }
          t.on("change", c),
            yo[s] &&
              i.$$hasNativeValidators &&
              s === n.type &&
              t.on(go, function (e) {
                if (!a) {
                  var t = this[l],
                    n = t.badInput,
                    i = t.typeMismatch;
                  a = o.defer(function () {
                    (a = null), (t.badInput === n && t.typeMismatch === i) || c(e);
                  });
                }
              }),
            (i.$render = function () {
              var e = i.$isEmpty(i.$viewValue) ? "" : i.$viewValue;
              t.val() !== e && t.val(e);
            });
        }
        function Co(e, t) {
          return function (n, i) {
            var r, o;
            if (H(n)) return n;
            if (W(n)) {
              if (('"' === n.charAt(0) && '"' === n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), so.test(n)))
                return new Date(n);
              if (((e.lastIndex = 0), (r = e.exec(n)))) {
                r.shift(),
                  (o = i
                    ? {
                        yyyy: i.getFullYear(),
                        MM: i.getMonth() + 1,
                        dd: i.getDate(),
                        HH: i.getHours(),
                        mm: i.getMinutes(),
                        ss: i.getSeconds(),
                        sss: i.getMilliseconds() / 1e3
                      }
                    : { yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0 }),
                  w(r, function (e, n) {
                    n < t.length && (o[t[n]] = +e);
                  });
                var a = new Date(o.yyyy, o.MM - 1, o.dd, o.HH, o.mm, o.ss || 0, 1e3 * o.sss || 0);
                return o.yyyy < 100 && a.setFullYear(o.yyyy), a;
              }
            }
            return NaN;
          };
        }
        function wo(e, t, n, i) {
          return function (r, o, a, s, u, c, l, d) {
            So(r, o, a, s, e), bo(0, o, a, s, u, c);
            var f,
              h,
              p = "time" === e || "datetimelocal" === e;
            if (
              (s.$parsers.push(function (n) {
                return s.$isEmpty(n) ? null : t.test(n) ? b(n, f) : void (s.$$parserName = e);
              }),
              s.$formatters.push(function (e) {
                if (e && !H(e)) throw sa("datefmt", "Expected `{0}` to be a date", e);
                if (_(e)) {
                  f = e;
                  var t = s.$options.getOption("timezone");
                  return (
                    t && ((h = t), (f = $e(f, t, !0))),
                    (function (e, t) {
                      var n = i;
                      p &&
                        W(s.$options.getOption("timeSecondsFormat")) &&
                        (n = i.replace("ss.sss", s.$options.getOption("timeSecondsFormat")).replace(/:$/, ""));
                      var r = l("date")(e, n, t);
                      p && s.$options.getOption("timeStripZeroSeconds") && (r = r.replace(/(?::00)?(?:\.000)?$/, ""));
                      return r;
                    })(e, t)
                  );
                }
                return (f = null), (h = null), "";
              }),
              F(a.min) || a.ngMin)
            ) {
              var v = a.min || d(a.ngMin)(r),
                m = $(v);
              (s.$validators.min = function (e) {
                return !_(e) || N(m) || n(e) >= m;
              }),
                a.$observe("min", function (e) {
                  e !== v && ((m = $(e)), (v = e), s.$validate());
                });
            }
            if (F(a.max) || a.ngMax) {
              var g = a.max || d(a.ngMax)(r),
                y = $(g);
              (s.$validators.max = function (e) {
                return !_(e) || N(y) || n(e) <= y;
              }),
                a.$observe("max", function (e) {
                  e !== g && ((y = $(e)), (g = e), s.$validate());
                });
            }
            function _(e) {
              return e && !(e.getTime && e.getTime() != e.getTime());
            }
            function $(e) {
              return F(e) && !H(e) ? b(e) || void 0 : e;
            }
            function b(e, t) {
              var i = s.$options.getOption("timezone");
              h && h !== i && (t = _e(t, ye(h)));
              var r = n(e, t);
              return !isNaN(r) && i && (r = $e(r, i)), r;
            }
          };
        }
        function So(e, t, n, i, r) {
          var o = t[0];
          (i.$$hasNativeValidators = U(o.validity)) &&
            i.$parsers.push(function (e) {
              var n = t.prop(l) || {};
              if (!n.badInput && !n.typeMismatch) return e;
              i.$$parserName = r;
            });
        }
        function xo(e) {
          e.$parsers.push(function (t) {
            return e.$isEmpty(t) ? null : lo.test(t) ? parseFloat(t) : void (e.$$parserName = "number");
          }),
            e.$formatters.push(function (t) {
              if (!e.$isEmpty(t)) {
                if (!V(t)) throw sa("numfmt", "Expected `{0}` to be a number", t);
                t = t.toString();
              }
              return t;
            });
        }
        function To(e) {
          return F(e) && !V(e) && (e = parseFloat(e)), M(e) ? void 0 : e;
        }
        function Eo(e) {
          return (0 | e) === e;
        }
        function ko(e) {
          var t = e.toString(),
            n = t.indexOf(".");
          if (-1 === n) {
            if (-1 < e && e < 1) {
              var i = /e-(\d+)$/.exec(t);
              if (i) return Number(i[1]);
            }
            return 0;
          }
          return t.length - n - 1;
        }
        function Ao(e, t, n) {
          var i = Number(e),
            r = !Eo(i),
            o = !Eo(t),
            a = !Eo(n);
          if (r || o || a) {
            var s = r ? ko(i) : 0,
              u = o ? ko(t) : 0,
              c = a ? ko(n) : 0,
              l = Math.max(s, u, c),
              d = Math.pow(10, l);
            (i *= d), (t *= d), (n *= d), r && (i = Math.round(i)), o && (t = Math.round(t)), a && (n = Math.round(n));
          }
          return (i - t) % n == 0;
        }
        function Po(e, t, n, i, r) {
          var o;
          if (F(i)) {
            if (!(o = e(i)).constant) throw sa("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, i);
            return o(t);
          }
          return r;
        }
        var Oo = [
            "$browser",
            "$sniffer",
            "$filter",
            "$parse",
            function (e, t, n, i) {
              return {
                restrict: "E",
                require: ["?ngModel"],
                link: {
                  pre: function (r, o, a, s) {
                    s[0] && (_o[f(a.type)] || _o.text)(r, o, a, s[0], t, e, n, i);
                  }
                }
              };
            }
          ],
          Mo = function () {
            var e = {
              configurable: !0,
              enumerable: !1,
              get: function () {
                return this.getAttribute("value") || "";
              },
              set: function (e) {
                this.setAttribute("value", e);
              }
            };
            return {
              restrict: "E",
              priority: 200,
              compile: function (t, n) {
                if ("hidden" === f(n.type))
                  return {
                    pre: function (t, n, i, r) {
                      var o = n[0];
                      o.parentNode && o.parentNode.insertBefore(o, o.nextSibling),
                        Object.defineProperty && Object.defineProperty(o, "value", e);
                    }
                  };
              }
            };
          },
          Lo = /^(true|false|\d+)$/,
          Io = function () {
            function e(e, t, n) {
              var i = F(n) ? n : 9 === o ? "" : null;
              e.prop("value", i), t.$set("value", n);
            }
            return {
              restrict: "A",
              priority: 100,
              compile: function (t, n) {
                return Lo.test(n.ngValue)
                  ? function (t, n, i) {
                      e(n, i, t.$eval(i.ngValue));
                    }
                  : function (t, n, i) {
                      t.$watch(i.ngValue, function (t) {
                        e(n, i, t);
                      });
                    };
              }
            };
          },
          Do = [
            "$compile",
            function (e) {
              return {
                restrict: "AC",
                compile: function (t) {
                  return (
                    e.$$addBindingClass(t),
                    function (t, n, i) {
                      e.$$addBindingInfo(n, i.ngBind),
                        (n = n[0]),
                        t.$watch(i.ngBind, function (e) {
                          n.textContent = je(e);
                        });
                    }
                  );
                }
              };
            }
          ],
          Bo = [
            "$interpolate",
            "$compile",
            function (e, t) {
              return {
                compile: function (n) {
                  return (
                    t.$$addBindingClass(n),
                    function (n, i, r) {
                      var o = e(i.attr(r.$attr.ngBindTemplate));
                      t.$$addBindingInfo(i, o.expressions),
                        (i = i[0]),
                        r.$observe("ngBindTemplate", function (e) {
                          i.textContent = N(e) ? "" : e;
                        });
                    }
                  );
                }
              };
            }
          ],
          Ro = [
            "$sce",
            "$parse",
            "$compile",
            function (e, t, n) {
              return {
                restrict: "A",
                compile: function (i, r) {
                  var o = t(r.ngBindHtml),
                    a = t(r.ngBindHtml, function (t) {
                      return e.valueOf(t);
                    });
                  return (
                    n.$$addBindingClass(i),
                    function (t, i, r) {
                      n.$$addBindingInfo(i, r.ngBindHtml),
                        t.$watch(a, function () {
                          var n = o(t);
                          i.html(e.getTrustedHtml(n) || "");
                        });
                    }
                  );
                }
              };
            }
          ],
          No = B({
            restrict: "A",
            require: "ngModel",
            link: function (e, t, n, i) {
              i.$viewChangeListeners.push(function () {
                e.$eval(n.ngChange);
              });
            }
          });
        function Fo(e, t) {
          var n;
          return (
            (e = "ngClass" + e),
            [
              "$parse",
              function (a) {
                return {
                  restrict: "AC",
                  link: function (s, u, c) {
                    var l,
                      d = u.data("$classCounts"),
                      f = !0;
                    function h(e, t) {
                      var n = [];
                      return (
                        w(e, function (e) {
                          (t > 0 || d[e]) && ((d[e] = (d[e] || 0) + t), d[e] === +(t > 0) && n.push(e));
                        }),
                        n.join(" ")
                      );
                    }
                    d || ((d = Ue()), u.data("$classCounts", d)),
                      "ngClass" !== e &&
                        (n ||
                          (n = a("$index", function (e) {
                            return 1 & e;
                          })),
                        s.$watch(n, function (e) {
                          e === t
                            ? ((n = h(r((n = l)), 1)), c.$addClass(n))
                            : (function (e) {
                                (e = h(r(e), -1)), c.$removeClass(e);
                              })(l);
                          var n;
                          f = e;
                        })),
                      s.$watch(a(c[e], o), function (e) {
                        f === t &&
                          (function (e, t) {
                            var n = r(e),
                              o = r(t),
                              a = i(n, o),
                              s = i(o, n),
                              u = h(a, -1),
                              l = h(s, 1);
                            c.$addClass(l), c.$removeClass(u);
                          })(l, e);
                        l = e;
                      });
                  }
                };
              }
            ]
          );
          function i(e, t) {
            if (!e || !e.length) return [];
            if (!t || !t.length) return e;
            var n = [];
            e: for (var i = 0; i < e.length; i++) {
              for (var r = e[i], o = 0; o < t.length; o++) if (r === t[o]) continue e;
              n.push(r);
            }
            return n;
          }
          function r(e) {
            return e && e.split(" ");
          }
          function o(e) {
            if (!e) return e;
            var t = e;
            return (
              q(e)
                ? (t = e.map(o).join(" "))
                : U(e)
                ? (t = Object.keys(e)
                    .filter(function (t) {
                      return e[t];
                    })
                    .join(" "))
                : W(e) || (t = e + ""),
              t
            );
          }
        }
        var Uo = Fo("", !0),
          jo = Fo("Odd", 0),
          Wo = Fo("Even", 1),
          Vo = Gr({
            compile: function (e, t) {
              t.$set("ngCloak", void 0), e.removeClass("ng-cloak");
            }
          }),
          Ho = [
            function () {
              return { restrict: "A", scope: !0, controller: "@", priority: 500 };
            }
          ],
          qo = {},
          zo = { blur: !0, focus: !0 };
        function Ko(e, t, n, i, r, o) {
          return {
            restrict: "A",
            compile: function (a, s) {
              var u = e(s[i]);
              return function (e, i) {
                i.on(r, function (i) {
                  var r = function () {
                    u(e, { $event: i });
                  };
                  if (t.$$phase)
                    if (o) e.$evalAsync(r);
                    else
                      try {
                        r();
                      } catch (e) {
                        n(e);
                      }
                  else e.$apply(r);
                });
              };
            }
          };
        }
        w(
          "click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(
            " "
          ),
          function (e) {
            var t = xn("ng-" + e);
            qo[t] = [
              "$parse",
              "$rootScope",
              "$exceptionHandler",
              function (n, i, r) {
                return Ko(n, i, r, t, e, zo[e]);
              }
            ];
          }
        );
        var Go = [
            "$animate",
            "$compile",
            function (e, t) {
              return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function (n, i, r, o, a) {
                  var s, u, c;
                  n.$watch(r.ngIf, function (n) {
                    n
                      ? u ||
                        a(function (n, o) {
                          (u = o), (n[n.length++] = t.$$createComment("end ngIf", r.ngIf)), (s = { clone: n }), e.enter(n, i.parent(), i);
                        })
                      : (c && (c.remove(), (c = null)),
                        u && (u.$destroy(), (u = null)),
                        s &&
                          ((c = Fe(s.clone)),
                          e.leave(c).done(function (e) {
                            !1 !== e && (c = null);
                          }),
                          (s = null)));
                  });
                }
              };
            }
          ],
          Zo = [
            "$templateRequest",
            "$anchorScroll",
            "$animate",
            function (e, t, n) {
              return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: $.noop,
                compile: function (i, r) {
                  var o = r.ngInclude || r.src,
                    a = r.onload || "",
                    s = r.autoscroll;
                  return function (i, r, u, c, l) {
                    var d,
                      f,
                      h,
                      p = 0,
                      v = function () {
                        f && (f.remove(), (f = null)),
                          d && (d.$destroy(), (d = null)),
                          h &&
                            (n.leave(h).done(function (e) {
                              !1 !== e && (f = null);
                            }),
                            (f = h),
                            (h = null));
                      };
                    i.$watch(o, function (o) {
                      var u = function (e) {
                          !1 === e || !F(s) || (s && !i.$eval(s)) || t();
                        },
                        f = ++p;
                      o
                        ? (e(o, !0).then(
                            function (e) {
                              if (!i.$$destroyed && f === p) {
                                var t = i.$new();
                                c.template = e;
                                var s = l(t, function (e) {
                                  v(), n.enter(e, null, r).done(u);
                                });
                                (h = s), (d = t).$emit("$includeContentLoaded", o), i.$eval(a);
                              }
                            },
                            function () {
                              i.$$destroyed || (f === p && (v(), i.$emit("$includeContentError", o)));
                            }
                          ),
                          i.$emit("$includeContentRequested", o))
                        : (v(), (c.template = null));
                    });
                  };
                }
              };
            }
          ],
          Qo = [
            "$compile",
            function (t) {
              return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function (n, i, r, o) {
                  if (g.call(i[0]).match(/SVG/))
                    return (
                      i.empty(),
                      void t(vt(o.template, e.document).childNodes)(
                        n,
                        function (e) {
                          i.append(e);
                        },
                        { futureParentElement: i }
                      )
                    );
                  i.html(o.template), t(i.contents())(n);
                }
              };
            }
          ],
          Jo = Gr({
            priority: 450,
            compile: function () {
              return {
                pre: function (e, t, n) {
                  e.$eval(n.ngInit);
                }
              };
            }
          }),
          Yo = function () {
            return {
              restrict: "A",
              priority: 100,
              require: "ngModel",
              link: function (e, t, n, i) {
                var r = n.ngList || ", ",
                  o = "false" !== n.ngTrim,
                  a = o ? ee(r) : r;
                i.$parsers.push(function (e) {
                  if (!N(e)) {
                    var t = [];
                    return (
                      e &&
                        w(e.split(a), function (e) {
                          e && t.push(o ? ee(e) : e);
                        }),
                      t
                    );
                  }
                }),
                  i.$formatters.push(function (e) {
                    if (q(e)) return e.join(r);
                  }),
                  (i.$isEmpty = function (e) {
                    return !e || !e.length;
                  });
              }
            };
          },
          Xo = "ng-valid",
          ea = "ng-invalid",
          ta = "ng-pristine",
          na = "ng-dirty",
          ia = "ng-untouched",
          ra = "ng-touched",
          oa = "ng-empty",
          aa = "ng-not-empty",
          sa = r("ngModel");
        function ua(e, t, n, i, r, o, a, s, u) {
          var c;
          (this.$viewValue = Number.NaN),
            (this.$modelValue = Number.NaN),
            (this.$$rawModelValue = void 0),
            (this.$validators = {}),
            (this.$asyncValidators = {}),
            (this.$parsers = []),
            (this.$formatters = []),
            (this.$viewChangeListeners = []),
            (this.$untouched = !0),
            (this.$touched = !1),
            (this.$pristine = !0),
            (this.$dirty = !1),
            (this.$valid = !0),
            (this.$invalid = !1),
            (this.$error = {}),
            (this.$$success = {}),
            (this.$pending = void 0),
            (this.$name = u(n.name || "", !1)(e)),
            (this.$$parentForm = Jr),
            (this.$options = ca),
            (this.$$updateEvents = ""),
            (this.$$updateEventHandler = this.$$updateEventHandler.bind(this)),
            (this.$$parsedNgModel = r(n.ngModel)),
            (this.$$parsedNgModelAssign = this.$$parsedNgModel.assign),
            (this.$$ngModelGet = this.$$parsedNgModel),
            (this.$$ngModelSet = this.$$parsedNgModelAssign),
            (this.$$pendingDebounce = null),
            (this.$$parserValid = void 0),
            (this.$$parserName = "parse"),
            (this.$$currentValidationRunId = 0),
            (this.$$scope = e),
            (this.$$rootScope = e.$root),
            (this.$$attr = n),
            (this.$$element = i),
            (this.$$animate = o),
            (this.$$timeout = a),
            (this.$$parse = r),
            (this.$$q = s),
            (this.$$exceptionHandler = t),
            ro(this),
            (c = this).$$scope.$watch(function (e) {
              var t = c.$$ngModelGet(e);
              return t === c.$modelValue || (c.$modelValue != c.$modelValue && t != t) || c.$$setModelValue(t), t;
            });
        }
        (ua.$inject = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$q", "$interpolate"]),
          (ua.prototype = {
            $$initGetterSetters: function () {
              if (this.$options.getOption("getterSetter")) {
                var e = this.$$parse(this.$$attr.ngModel + "()"),
                  t = this.$$parse(this.$$attr.ngModel + "($$$p)");
                (this.$$ngModelGet = function (t) {
                  var n = this.$$parsedNgModel(t);
                  return K(n) && (n = e(t)), n;
                }),
                  (this.$$ngModelSet = function (e, n) {
                    K(this.$$parsedNgModel(e)) ? t(e, { $$$p: n }) : this.$$parsedNgModelAssign(e, n);
                  });
              } else if (!this.$$parsedNgModel.assign)
                throw sa("nonassign", "Expression '{0}' is non-assignable. Element: {1}", this.$$attr.ngModel, be(this.$$element));
            },
            $render: I,
            $isEmpty: function (e) {
              return N(e) || "" === e || null === e || e != e;
            },
            $$updateEmptyClasses: function (e) {
              this.$isEmpty(e)
                ? (this.$$animate.removeClass(this.$$element, aa), this.$$animate.addClass(this.$$element, oa))
                : (this.$$animate.removeClass(this.$$element, oa), this.$$animate.addClass(this.$$element, aa));
            },
            $setPristine: function () {
              (this.$dirty = !1),
                (this.$pristine = !0),
                this.$$animate.removeClass(this.$$element, na),
                this.$$animate.addClass(this.$$element, ta);
            },
            $setDirty: function () {
              (this.$dirty = !0),
                (this.$pristine = !1),
                this.$$animate.removeClass(this.$$element, ta),
                this.$$animate.addClass(this.$$element, na),
                this.$$parentForm.$setDirty();
            },
            $setUntouched: function () {
              (this.$touched = !1), (this.$untouched = !0), this.$$animate.setClass(this.$$element, ia, ra);
            },
            $setTouched: function () {
              (this.$touched = !0), (this.$untouched = !1), this.$$animate.setClass(this.$$element, ra, ia);
            },
            $rollbackViewValue: function () {
              this.$$timeout.cancel(this.$$pendingDebounce), (this.$viewValue = this.$$lastCommittedViewValue), this.$render();
            },
            $validate: function () {
              if (!M(this.$modelValue)) {
                var e = this.$$lastCommittedViewValue,
                  t = this.$$rawModelValue,
                  n = this.$valid,
                  i = this.$modelValue,
                  r = this.$options.getOption("allowInvalid"),
                  o = this;
                this.$$runValidators(t, e, function (e) {
                  r || n === e || ((o.$modelValue = e ? t : void 0), o.$modelValue !== i && o.$$writeModelToScope());
                });
              }
            },
            $$runValidators: function (e, t, n) {
              this.$$currentValidationRunId++;
              var i,
                r,
                o = this.$$currentValidationRunId,
                a = this;
              (function () {
                var e = a.$$parserName;
                if (!N(a.$$parserValid))
                  return (
                    a.$$parserValid ||
                      (w(a.$validators, function (e, t) {
                        s(t, null);
                      }),
                      w(a.$asyncValidators, function (e, t) {
                        s(t, null);
                      })),
                    s(e, a.$$parserValid),
                    a.$$parserValid
                  );
                s(e, null);
                return !0;
              })()
                ? !(function () {
                    var n = !0;
                    if (
                      (w(a.$validators, function (i, r) {
                        var o = Boolean(i(e, t));
                        (n = n && o), s(r, o);
                      }),
                      !n)
                    )
                      return (
                        w(a.$asyncValidators, function (e, t) {
                          s(t, null);
                        }),
                        !1
                      );
                    return !0;
                  })()
                  ? u(!1)
                  : ((i = []),
                    (r = !0),
                    w(a.$asyncValidators, function (n, o) {
                      var a = n(e, t);
                      if (!Y(a)) throw sa("nopromise", "Expected asynchronous validator to return a promise but got '{0}' instead.", a);
                      s(o, void 0),
                        i.push(
                          a.then(
                            function () {
                              s(o, !0);
                            },
                            function () {
                              (r = !1), s(o, !1);
                            }
                          )
                        );
                    }),
                    i.length
                      ? a.$$q.all(i).then(function () {
                          u(r);
                        }, I)
                      : u(!0))
                : u(!1);
              function s(e, t) {
                o === a.$$currentValidationRunId && a.$setValidity(e, t);
              }
              function u(e) {
                o === a.$$currentValidationRunId && n(e);
              }
            },
            $commitViewValue: function () {
              var e = this.$viewValue;
              this.$$timeout.cancel(this.$$pendingDebounce),
                (this.$$lastCommittedViewValue !== e || ("" === e && this.$$hasNativeValidators)) &&
                  (this.$$updateEmptyClasses(e),
                  (this.$$lastCommittedViewValue = e),
                  this.$pristine && this.$setDirty(),
                  this.$$parseAndValidate());
            },
            $$parseAndValidate: function () {
              var e = this.$$lastCommittedViewValue,
                t = this;
              if (
                ((this.$$parserValid = !N(e) || void 0),
                this.$setValidity(this.$$parserName, null),
                (this.$$parserName = "parse"),
                this.$$parserValid)
              )
                for (var n = 0; n < this.$parsers.length; n++)
                  if (N((e = this.$parsers[n](e)))) {
                    this.$$parserValid = !1;
                    break;
                  }
              M(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));
              var i = this.$modelValue,
                r = this.$options.getOption("allowInvalid");
              function o() {
                t.$modelValue !== i && t.$$writeModelToScope();
              }
              (this.$$rawModelValue = e),
                r && ((this.$modelValue = e), o()),
                this.$$runValidators(e, this.$$lastCommittedViewValue, function (n) {
                  r || ((t.$modelValue = n ? e : void 0), o());
                });
            },
            $$writeModelToScope: function () {
              this.$$ngModelSet(this.$$scope, this.$modelValue),
                w(
                  this.$viewChangeListeners,
                  function (e) {
                    try {
                      e();
                    } catch (e) {
                      this.$$exceptionHandler(e);
                    }
                  },
                  this
                );
            },
            $setViewValue: function (e, t) {
              (this.$viewValue = e), this.$options.getOption("updateOnDefault") && this.$$debounceViewValueCommit(t);
            },
            $$debounceViewValueCommit: function (e) {
              var t = this.$options.getOption("debounce");
              V(t[e])
                ? (t = t[e])
                : V(t.default) && -1 === this.$options.getOption("updateOn").indexOf(e)
                ? (t = t.default)
                : V(t["*"]) && (t = t["*"]),
                this.$$timeout.cancel(this.$$pendingDebounce);
              var n = this;
              t > 0
                ? (this.$$pendingDebounce = this.$$timeout(function () {
                    n.$commitViewValue();
                  }, t))
                : this.$$rootScope.$$phase
                ? this.$commitViewValue()
                : this.$$scope.$apply(function () {
                    n.$commitViewValue();
                  });
            },
            $overrideModelOptions: function (e) {
              (this.$options = this.$options.createChild(e)), this.$$setUpdateOnEvents();
            },
            $processModelValue: function () {
              var e = this.$$format();
              this.$viewValue !== e &&
                (this.$$updateEmptyClasses(e),
                (this.$viewValue = this.$$lastCommittedViewValue = e),
                this.$render(),
                this.$$runValidators(this.$modelValue, this.$viewValue, I));
            },
            $$format: function () {
              for (var e = this.$formatters, t = e.length, n = this.$modelValue; t--; ) n = e[t](n);
              return n;
            },
            $$setModelValue: function (e) {
              (this.$modelValue = this.$$rawModelValue = e), (this.$$parserValid = void 0), this.$processModelValue();
            },
            $$setUpdateOnEvents: function () {
              this.$$updateEvents && this.$$element.off(this.$$updateEvents, this.$$updateEventHandler),
                (this.$$updateEvents = this.$options.getOption("updateOn")),
                this.$$updateEvents && this.$$element.on(this.$$updateEvents, this.$$updateEventHandler);
            },
            $$updateEventHandler: function (e) {
              this.$$debounceViewValueCommit(e && e.type);
            }
          }),
          oo({
            clazz: ua,
            set: function (e, t) {
              e[t] = !0;
            },
            unset: function (e, t) {
              delete e[t];
            }
          });
        var ca,
          la = [
            "$rootScope",
            function (e) {
              return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: ua,
                priority: 1,
                compile: function (t) {
                  return (
                    t.addClass(ta).addClass(ia).addClass(Xo),
                    {
                      pre: function (e, t, n, i) {
                        var r = i[0],
                          o = i[1] || r.$$parentForm,
                          a = i[2];
                        a && (r.$options = a.$options),
                          r.$$initGetterSetters(),
                          o.$addControl(r),
                          n.$observe("name", function (e) {
                            r.$name !== e && r.$$parentForm.$$renameControl(r, e);
                          }),
                          e.$on("$destroy", function () {
                            r.$$parentForm.$removeControl(r);
                          });
                      },
                      post: function (t, n, i, r) {
                        var o = r[0];
                        function a() {
                          o.$setTouched();
                        }
                        o.$$setUpdateOnEvents(),
                          n.on("blur", function () {
                            o.$touched || (e.$$phase ? t.$evalAsync(a) : t.$apply(a));
                          });
                      }
                    }
                  );
                }
              };
            }
          ],
          da = /(\s+|^)default(\s+|$)/;
        function fa(e) {
          this.$$options = e;
        }
        (fa.prototype = {
          getOption: function (e) {
            return this.$$options[e];
          },
          createChild: function (e) {
            var t = !1;
            return (
              w(
                (e = A({}, e)),
                function (n, i) {
                  "$inherit" === n
                    ? "*" === i
                      ? (t = !0)
                      : ((e[i] = this.$$options[i]), "updateOn" === i && (e.updateOnDefault = this.$$options.updateOnDefault))
                    : "updateOn" === i &&
                      ((e.updateOnDefault = !1),
                      (e[i] = ee(
                        n.replace(da, function () {
                          return (e.updateOnDefault = !0), " ";
                        })
                      )));
                },
                this
              ),
              t && (delete e["*"], pa(e, this.$$options)),
              pa(e, ca.$$options),
              new fa(e)
            );
          }
        }),
          (ca = new fa({ updateOn: "", updateOnDefault: !0, debounce: 0, getterSetter: !1, allowInvalid: !1, timezone: null }));
        var ha = function () {
          function e(e, t) {
            (this.$$attrs = e), (this.$$scope = t);
          }
          return (
            (e.$inject = ["$attrs", "$scope"]),
            (e.prototype = {
              $onInit: function () {
                var e = this.parentCtrl ? this.parentCtrl.$options : ca,
                  t = this.$$scope.$eval(this.$$attrs.ngModelOptions);
                this.$options = e.createChild(t);
              }
            }),
            { restrict: "A", priority: 10, require: { parentCtrl: "?^^ngModelOptions" }, bindToController: !0, controller: e }
          );
        };
        function pa(e, t) {
          w(t, function (t, n) {
            F(e[n]) || (e[n] = t);
          });
        }
        var va = Gr({ terminal: !0, priority: 1e3 }),
          ma = r("ngOptions"),
          ga =
            /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
          ya = [
            "$compile",
            "$document",
            "$parse",
            function (t, n, i) {
              var r = e.document.createElement("option"),
                o = e.document.createElement("optgroup");
              return {
                restrict: "A",
                terminal: !0,
                require: ["select", "ngModel"],
                link: {
                  pre: function (e, t, n, i) {
                    i[0].registerOption = I;
                  },
                  post: function (e, s, u, c) {
                    for (var l = c[0], d = c[1], f = u.multiple, h = 0, p = s.children(), v = p.length; h < v; h++)
                      if ("" === p[h].value) {
                        (l.hasEmptyOption = !0), (l.emptyOption = p.eq(h));
                        break;
                      }
                    s.empty();
                    var m,
                      g = !!l.emptyOption;
                    a(r.cloneNode(!1)).val("?");
                    var y = (function (e, t, n) {
                        var r = e.match(ga);
                        if (!r)
                          throw ma(
                            "iexp",
                            "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}",
                            e,
                            be(t)
                          );
                        var o = r[5] || r[7],
                          a = r[6],
                          s = / as /.test(r[0]) && r[1],
                          u = r[9],
                          c = i(r[2] ? r[1] : o),
                          l = (s && i(s)) || c,
                          d = u && i(u),
                          f = u
                            ? function (e, t) {
                                return d(n, t);
                              }
                            : function (e) {
                                return Vt(e);
                              },
                          h = function (e, t) {
                            return f(e, _(e, t));
                          },
                          p = i(r[2] || r[1]),
                          v = i(r[3] || ""),
                          m = i(r[4] || ""),
                          g = i(r[8]),
                          y = {},
                          _ = a
                            ? function (e, t) {
                                return (y[a] = t), (y[o] = e), y;
                              }
                            : function (e) {
                                return (y[o] = e), y;
                              };
                        function $(e, t, n, i, r) {
                          (this.selectValue = e), (this.viewValue = t), (this.label = n), (this.group = i), (this.disabled = r);
                        }
                        function b(e) {
                          var t;
                          if (!a && C(e)) t = e;
                          else for (var n in ((t = []), e)) e.hasOwnProperty(n) && "$" !== n.charAt(0) && t.push(n);
                          return t;
                        }
                        return {
                          trackBy: u,
                          getTrackByValue: h,
                          getWatchables: i(g, function (e) {
                            for (var t = [], i = b((e = e || [])), o = i.length, a = 0; a < o; a++) {
                              var s = e === i ? a : i[a],
                                u = e[s],
                                c = _(u, s),
                                l = f(u, c);
                              if ((t.push(l), r[2] || r[1])) {
                                var d = p(n, c);
                                t.push(d);
                              }
                              if (r[4]) {
                                var h = m(n, c);
                                t.push(h);
                              }
                            }
                            return t;
                          }),
                          getOptions: function () {
                            for (var e = [], t = {}, i = g(n) || [], r = b(i), o = r.length, a = 0; a < o; a++) {
                              var s = i === r ? a : r[a],
                                c = i[s],
                                d = _(c, s),
                                y = l(n, d),
                                C = f(y, d),
                                w = new $(C, y, p(n, d), v(n, d), m(n, d));
                              e.push(w), (t[C] = w);
                            }
                            return {
                              items: e,
                              selectValueMap: t,
                              getOptionFromViewValue: function (e) {
                                return t[h(e)];
                              },
                              getViewValueFromOption: function (e) {
                                return u ? ae(e.viewValue) : e.viewValue;
                              }
                            };
                          }
                        };
                      })(u.ngOptions, s, e),
                      _ = n[0].createDocumentFragment();
                    function $(e, t) {
                      var n = r.cloneNode(!1);
                      t.appendChild(n),
                        (function (e, t) {
                          (e.element = t),
                            (t.disabled = e.disabled),
                            e.label !== t.label && ((t.label = e.label), (t.textContent = e.label));
                          t.value = e.selectValue;
                        })(e, n);
                    }
                    function b(e) {
                      var t = m.getOptionFromViewValue(e),
                        n = t && t.element;
                      return n && !n.selected && (n.selected = !0), t;
                    }
                    (l.generateUnknownOptionValue = function (e) {
                      return "?";
                    }),
                      f
                        ? ((l.writeValue = function (e) {
                            if (m) {
                              var t = (e && e.map(b)) || [];
                              m.items.forEach(function (e) {
                                e.element.selected && !re(t, e) && (e.element.selected = !1);
                              });
                            }
                          }),
                          (l.readValue = function () {
                            var e = s.val() || [],
                              t = [];
                            return (
                              w(e, function (e) {
                                var n = m.selectValueMap[e];
                                n && !n.disabled && t.push(m.getViewValueFromOption(n));
                              }),
                              t
                            );
                          }),
                          y.trackBy &&
                            e.$watchCollection(
                              function () {
                                if (q(d.$viewValue))
                                  return d.$viewValue.map(function (e) {
                                    return y.getTrackByValue(e);
                                  });
                              },
                              function () {
                                d.$render();
                              }
                            ))
                        : ((l.writeValue = function (e) {
                            if (m) {
                              var t = s[0].options[s[0].selectedIndex],
                                n = m.getOptionFromViewValue(e);
                              t && t.removeAttribute("selected"),
                                n
                                  ? (s[0].value !== n.selectValue &&
                                      (l.removeUnknownOption(), (s[0].value = n.selectValue), (n.element.selected = !0)),
                                    n.element.setAttribute("selected", "selected"))
                                  : l.selectUnknownOrEmptyOption(e);
                            }
                          }),
                          (l.readValue = function () {
                            var e = m.selectValueMap[s.val()];
                            return e && !e.disabled
                              ? (l.unselectEmptyOption(), l.removeUnknownOption(), m.getViewValueFromOption(e))
                              : null;
                          }),
                          y.trackBy &&
                            e.$watch(
                              function () {
                                return y.getTrackByValue(d.$viewValue);
                              },
                              function () {
                                d.$render();
                              }
                            )),
                      g &&
                        (t(l.emptyOption)(e),
                        s.prepend(l.emptyOption),
                        l.emptyOption[0].nodeType === He
                          ? ((l.hasEmptyOption = !1),
                            (l.registerOption = function (e, t) {
                              "" === t.val() &&
                                ((l.hasEmptyOption = !0),
                                (l.emptyOption = t),
                                l.emptyOption.removeClass("ng-scope"),
                                d.$render(),
                                t.on("$destroy", function () {
                                  var e = l.$isEmptyOptionSelected();
                                  (l.hasEmptyOption = !1), (l.emptyOption = void 0), e && d.$render();
                                }));
                            }))
                          : l.emptyOption.removeClass("ng-scope")),
                      e.$watchCollection(y.getWatchables, function () {
                        var e = m && l.readValue();
                        if (m)
                          for (var t = m.items.length - 1; t >= 0; t--) {
                            var n = m.items[t];
                            F(n.group) ? Lt(n.element.parentNode) : Lt(n.element);
                          }
                        m = y.getOptions();
                        var i = {};
                        if (
                          (m.items.forEach(function (e) {
                            var t;
                            F(e.group)
                              ? ((t = i[e.group]) ||
                                  ((t = o.cloneNode(!1)),
                                  _.appendChild(t),
                                  (t.label = null === e.group ? "null" : e.group),
                                  (i[e.group] = t)),
                                $(e, t))
                              : $(e, _);
                          }),
                          s[0].appendChild(_),
                          d.$render(),
                          !d.$isEmpty(e))
                        ) {
                          var r = l.readValue();
                          (y.trackBy || f ? ue(e, r) : e === r) || (d.$setViewValue(r), d.$render());
                        }
                      });
                  }
                }
              };
            }
          ],
          _a = [
            "$locale",
            "$interpolate",
            "$log",
            function (e, t, n) {
              var i = /{}/g,
                r = /^when(Minus)?(.+)$/;
              return {
                link: function (o, a, s) {
                  var u,
                    c = s.count,
                    l = s.$attr.when && a.attr(s.$attr.when),
                    d = s.offset || 0,
                    h = o.$eval(l) || {},
                    p = {},
                    v = t.startSymbol(),
                    m = t.endSymbol(),
                    g = v + c + "-" + d + m,
                    y = $.noop;
                  function _(e) {
                    a.text(e || "");
                  }
                  w(s, function (e, t) {
                    var n = r.exec(t);
                    if (n) {
                      var i = (n[1] ? "-" : "") + f(n[2]);
                      h[i] = a.attr(s.$attr[t]);
                    }
                  }),
                    w(h, function (e, n) {
                      p[n] = t(e.replace(i, g));
                    }),
                    o.$watch(c, function (t) {
                      var i = parseFloat(t),
                        r = M(i);
                      if ((r || i in h || (i = e.pluralCat(i - d)), !(i === u || (r && M(u))))) {
                        y();
                        var a = p[i];
                        N(a)
                          ? (null != t && n.debug("ngPluralize: no rule defined for '" + i + "' in " + l), (y = I), _())
                          : (y = o.$watch(a, _)),
                          (u = i);
                      }
                    });
                }
              };
            }
          ],
          $a = r("ngRef"),
          ba = [
            "$parse",
            function (e) {
              return {
                priority: -1,
                restrict: "A",
                compile: function (t, n) {
                  var i = xn(ie(t)),
                    r = e(n.ngRef),
                    o =
                      r.assign ||
                      function () {
                        throw $a("nonassign", 'Expression in ngRef="{0}" is non-assignable!', n.ngRef);
                      };
                  return function (e, t, a) {
                    var s;
                    if (a.hasOwnProperty("ngRefRead")) {
                      if ("$element" === a.ngRefRead) s = t;
                      else if (!(s = t.data("$" + a.ngRefRead + "Controller")))
                        throw $a("noctrl", 'The controller for ngRefRead="{0}" could not be found on ngRef="{1}"', a.ngRefRead, n.ngRef);
                    } else s = t.data("$" + i + "Controller");
                    o(e, (s = s || t)),
                      t.on("$destroy", function () {
                        r(e) === s && o(e, null);
                      });
                  };
                }
              };
            }
          ],
          Ca = [
            "$parse",
            "$animate",
            "$compile",
            function (e, t, n) {
              var i = "$$NG_REMOVED",
                o = r("ngRepeat"),
                a = function (e, t, n, i, r, o, a) {
                  (e[n] = i),
                    r && (e[r] = o),
                    (e.$index = t),
                    (e.$first = 0 === t),
                    (e.$last = t === a - 1),
                    (e.$middle = !(e.$first || e.$last)),
                    (e.$odd = !(e.$even = 0 == (1 & t)));
                },
                s = function (e) {
                  return e.clone[0];
                },
                u = function (e) {
                  return e.clone[e.clone.length - 1];
                },
                c = function (e, t, n) {
                  return Vt(n);
                },
                l = function (e, t) {
                  return t;
                };
              return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                compile: function (r, f) {
                  var h = f.ngRepeat,
                    p = n.$$createComment("end ngRepeat", h),
                    v = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                  if (!v) throw o("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", h);
                  var m = v[1],
                    g = v[2],
                    y = v[3],
                    _ = v[4];
                  if (!(v = m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/)))
                    throw o(
                      "iidexp",
                      "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.",
                      m
                    );
                  var $,
                    b = v[3] || v[1],
                    S = v[2];
                  if (
                    y &&
                    (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(y) ||
                      /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(y))
                  )
                    throw o("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", y);
                  if (_) {
                    var x = { $id: Vt },
                      T = e(_);
                    $ = function (e, t, n, i) {
                      return S && (x[S] = t), (x[b] = n), (x.$index = i), T(e, x);
                    };
                  }
                  return function (e, n, r, f, v) {
                    var m = Ue();
                    e.$watchCollection(g, function (r) {
                      var f,
                        g,
                        _,
                        T,
                        E,
                        k,
                        A,
                        P,
                        O,
                        M,
                        L,
                        I,
                        D = n[0],
                        B = Ue();
                      if ((y && (e[y] = r), C(r))) (O = r), (P = $ || c);
                      else for (var R in ((P = $ || l), (O = []), r)) d.call(r, R) && "$" !== R.charAt(0) && O.push(R);
                      for (T = O.length, L = new Array(T), f = 0; f < T; f++)
                        if (((E = r === O ? f : O[f]), (k = r[E]), (A = P(e, E, k, f)), m[A]))
                          (M = m[A]), delete m[A], (B[A] = M), (L[f] = M);
                        else {
                          if (B[A])
                            throw (
                              (w(L, function (e) {
                                e && e.scope && (m[e.id] = e);
                              }),
                              o(
                                "dupes",
                                "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}",
                                h,
                                A,
                                k
                              ))
                            );
                          (L[f] = { id: A, scope: void 0, clone: void 0 }), (B[A] = !0);
                        }
                      for (var N in (x && (x[b] = void 0), m)) {
                        if (((I = Fe((M = m[N]).clone)), t.leave(I), I[0].parentNode)) for (f = 0, g = I.length; f < g; f++) I[f][i] = !0;
                        M.scope.$destroy();
                      }
                      for (f = 0; f < T; f++)
                        if (((E = r === O ? f : O[f]), (k = r[E]), (M = L[f]).scope)) {
                          _ = D;
                          do {
                            _ = _.nextSibling;
                          } while (_ && _[i]);
                          s(M) !== _ && t.move(Fe(M.clone), null, D), (D = u(M)), a(M.scope, f, b, k, S, E, T);
                        } else
                          v(function (e, n) {
                            M.scope = n;
                            var i = p.cloneNode(!1);
                            (e[e.length++] = i), t.enter(e, null, D), (D = i), (M.clone = e), (B[M.id] = M), a(M.scope, f, b, k, S, E, T);
                          });
                      m = B;
                    });
                  };
                }
              };
            }
          ],
          wa = "ng-hide",
          Sa = "ng-hide-animate",
          xa = [
            "$animate",
            function (e) {
              return {
                restrict: "A",
                multiElement: !0,
                link: function (t, n, i) {
                  t.$watch(i.ngShow, function (t) {
                    e[t ? "removeClass" : "addClass"](n, wa, { tempClasses: Sa });
                  });
                }
              };
            }
          ],
          Ta = [
            "$animate",
            function (e) {
              return {
                restrict: "A",
                multiElement: !0,
                link: function (t, n, i) {
                  t.$watch(i.ngHide, function (t) {
                    e[t ? "addClass" : "removeClass"](n, wa, { tempClasses: Sa });
                  });
                }
              };
            }
          ],
          Ea = Gr(function (e, t, n) {
            e.$watchCollection(n.ngStyle, function (e, n) {
              n &&
                e !== n &&
                w(n, function (e, n) {
                  t.css(n, "");
                }),
                e && t.css(e);
            });
          }),
          ka = [
            "$animate",
            "$compile",
            function (e, t) {
              return {
                require: "ngSwitch",
                controller: [
                  "$scope",
                  function () {
                    this.cases = {};
                  }
                ],
                link: function (n, i, r, o) {
                  var a = r.ngSwitch || r.on,
                    s = [],
                    u = [],
                    c = [],
                    l = [],
                    d = function (e, t) {
                      return function (n) {
                        !1 !== n && e.splice(t, 1);
                      };
                    };
                  n.$watch(a, function (n) {
                    for (var i, r; c.length; ) e.cancel(c.pop());
                    for (i = 0, r = l.length; i < r; ++i) {
                      var a = Fe(u[i].clone);
                      l[i].$destroy(), (c[i] = e.leave(a)).done(d(c, i));
                    }
                    (u.length = 0),
                      (l.length = 0),
                      (s = o.cases["!" + n] || o.cases["?"]) &&
                        w(s, function (n) {
                          n.transclude(function (i, r) {
                            l.push(r);
                            var o = n.element;
                            i[i.length++] = t.$$createComment("end ngSwitchWhen");
                            var a = { clone: i };
                            u.push(a), e.enter(i, o.parent(), o);
                          });
                        });
                  });
                }
              };
            }
          ],
          Aa = Gr({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (e, t, n, i, r) {
              var o = n.ngSwitchWhen
                .split(n.ngSwitchWhenSeparator)
                .sort()
                .filter(function (e, t, n) {
                  return n[t - 1] !== e;
                });
              w(o, function (e) {
                (i.cases["!" + e] = i.cases["!" + e] || []), i.cases["!" + e].push({ transclude: r, element: t });
              });
            }
          }),
          Pa = Gr({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (e, t, n, i, r) {
              (i.cases["?"] = i.cases["?"] || []), i.cases["?"].push({ transclude: r, element: t });
            }
          }),
          Oa = r("ngTransclude"),
          Ma = [
            "$compile",
            function (e) {
              return {
                restrict: "EAC",
                compile: function (t) {
                  var n = e(t.contents());
                  return (
                    t.empty(),
                    function (e, t, i, r, o) {
                      if (!o)
                        throw Oa(
                          "orphan",
                          "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}",
                          be(t)
                        );
                      i.ngTransclude === i.$attr.ngTransclude && (i.ngTransclude = "");
                      var a = i.ngTransclude || i.ngTranscludeSlot;
                      function s() {
                        n(e, function (e) {
                          t.append(e);
                        });
                      }
                      o(
                        function (e, n) {
                          e.length &&
                          (function (e) {
                            for (var t = 0, n = e.length; t < n; t++) {
                              var i = e[t];
                              if (i.nodeType !== Ve || i.nodeValue.trim()) return !0;
                            }
                          })(e)
                            ? t.append(e)
                            : (s(), n.$destroy());
                        },
                        null,
                        a
                      ),
                        a && !o.isSlotFilled(a) && s();
                    }
                  );
                }
              };
            }
          ],
          La = [
            "$templateCache",
            function (e) {
              return {
                restrict: "E",
                terminal: !0,
                compile: function (t, n) {
                  if ("text/ng-template" === n.type) {
                    var i = n.id,
                      r = t[0].text;
                    e.put(i, r);
                  }
                }
              };
            }
          ],
          Ia = { $setViewValue: I, $render: I };
        function Da(e, t) {
          e.prop("selected", t), e.attr("selected", t);
        }
        var Ba = [
            "$element",
            "$scope",
            function (t, n) {
              var i = this,
                r = new zt();
              (i.selectValueMap = {}),
                (i.ngModelCtrl = Ia),
                (i.multiple = !1),
                (i.unknownOption = a(e.document.createElement("option"))),
                (i.hasEmptyOption = !1),
                (i.emptyOption = void 0),
                (i.renderUnknownOption = function (e) {
                  var n = i.generateUnknownOptionValue(e);
                  i.unknownOption.val(n), t.prepend(i.unknownOption), Da(i.unknownOption, !0), t.val(n);
                }),
                (i.updateUnknownOption = function (e) {
                  var n = i.generateUnknownOptionValue(e);
                  i.unknownOption.val(n), Da(i.unknownOption, !0), t.val(n);
                }),
                (i.generateUnknownOptionValue = function (e) {
                  return "? " + Vt(e) + " ?";
                }),
                (i.removeUnknownOption = function () {
                  i.unknownOption.parent() && i.unknownOption.remove();
                }),
                (i.selectEmptyOption = function () {
                  i.emptyOption && (t.val(""), Da(i.emptyOption, !0));
                }),
                (i.unselectEmptyOption = function () {
                  i.hasEmptyOption && Da(i.emptyOption, !1);
                }),
                n.$on("$destroy", function () {
                  i.renderUnknownOption = I;
                }),
                (i.readValue = function () {
                  var e = t.val(),
                    n = e in i.selectValueMap ? i.selectValueMap[e] : e;
                  return i.hasOption(n) ? n : null;
                }),
                (i.writeValue = function (e) {
                  var n = t[0].options[t[0].selectedIndex];
                  if ((n && Da(a(n), !1), i.hasOption(e))) {
                    i.removeUnknownOption();
                    var r = Vt(e);
                    t.val(r in i.selectValueMap ? r : e);
                    var o = t[0].options[t[0].selectedIndex];
                    Da(a(o), !0);
                  } else i.selectUnknownOrEmptyOption(e);
                }),
                (i.addOption = function (e, t) {
                  if (t[0].nodeType !== He) {
                    Ne(e, '"option value"'), "" === e && ((i.hasEmptyOption = !0), (i.emptyOption = t));
                    var n = r.get(e) || 0;
                    r.set(e, n + 1), s();
                  }
                }),
                (i.removeOption = function (e) {
                  var t = r.get(e);
                  t && (1 === t ? (r.delete(e), "" === e && ((i.hasEmptyOption = !1), (i.emptyOption = void 0))) : r.set(e, t - 1));
                }),
                (i.hasOption = function (e) {
                  return !!r.get(e);
                }),
                (i.$hasEmptyOption = function () {
                  return i.hasEmptyOption;
                }),
                (i.$isUnknownOptionSelected = function () {
                  return t[0].options[0] === i.unknownOption[0];
                }),
                (i.$isEmptyOptionSelected = function () {
                  return i.hasEmptyOption && t[0].options[t[0].selectedIndex] === i.emptyOption[0];
                }),
                (i.selectUnknownOrEmptyOption = function (e) {
                  null == e && i.emptyOption
                    ? (i.removeUnknownOption(), i.selectEmptyOption())
                    : i.unknownOption.parent().length
                    ? i.updateUnknownOption(e)
                    : i.renderUnknownOption(e);
                });
              var o = !1;
              function s() {
                o ||
                  ((o = !0),
                  n.$$postDigest(function () {
                    (o = !1), i.ngModelCtrl.$render();
                  }));
              }
              var u = !1;
              function c(e) {
                u ||
                  ((u = !0),
                  n.$$postDigest(function () {
                    n.$$destroyed || ((u = !1), i.ngModelCtrl.$setViewValue(i.readValue()), e && i.ngModelCtrl.$render());
                  }));
              }
              i.registerOption = function (e, t, n, r, o) {
                var a, u;
                n.$attr.ngValue
                  ? n.$observe("value", function (e) {
                      var n,
                        r = t.prop("selected");
                      F(u) && (i.removeOption(a), delete i.selectValueMap[u], (n = !0)),
                        (u = Vt(e)),
                        (a = e),
                        (i.selectValueMap[u] = e),
                        i.addOption(e, t),
                        t.attr("value", u),
                        n && r && c();
                    })
                  : r
                  ? n.$observe("value", function (e) {
                      var n;
                      i.readValue();
                      var r = t.prop("selected");
                      F(a) && (i.removeOption(a), (n = !0)), (a = e), i.addOption(e, t), n && r && c();
                    })
                  : o
                  ? e.$watch(o, function (e, r) {
                      n.$set("value", e);
                      var o = t.prop("selected");
                      r !== e && i.removeOption(r), i.addOption(e, t), r && o && c();
                    })
                  : i.addOption(n.value, t);
                n.$observe("disabled", function (e) {
                  ("true" === e || (e && t.prop("selected"))) &&
                    (i.multiple ? c(!0) : (i.ngModelCtrl.$setViewValue(null), i.ngModelCtrl.$render()));
                }),
                  t.on("$destroy", function () {
                    var e = i.readValue(),
                      t = n.value;
                    i.removeOption(t), s(), ((i.multiple && e && -1 !== e.indexOf(t)) || e === t) && c(!0);
                  });
              };
            }
          ],
          Ra = function () {
            return {
              restrict: "E",
              require: ["select", "?ngModel"],
              controller: Ba,
              priority: 1,
              link: {
                pre: function (e, t, n, i) {
                  var r = i[0],
                    o = i[1];
                  if (!o) return void (r.registerOption = I);
                  if (
                    ((r.ngModelCtrl = o),
                    t.on("change", function () {
                      r.removeUnknownOption(),
                        e.$apply(function () {
                          o.$setViewValue(r.readValue());
                        });
                    }),
                    n.multiple)
                  ) {
                    (r.multiple = !0),
                      (r.readValue = function () {
                        var e = [];
                        return (
                          w(t.find("option"), function (t) {
                            if (t.selected && !t.disabled) {
                              var n = t.value;
                              e.push(n in r.selectValueMap ? r.selectValueMap[n] : n);
                            }
                          }),
                          e
                        );
                      }),
                      (r.writeValue = function (e) {
                        w(t.find("option"), function (t) {
                          var n = !!e && (re(e, t.value) || re(e, r.selectValueMap[t.value]));
                          n !== t.selected && Da(a(t), n);
                        });
                      });
                    var s,
                      u = NaN;
                    e.$watch(function () {
                      u !== o.$viewValue || ue(s, o.$viewValue) || ((s = Ke(o.$viewValue)), o.$render()), (u = o.$viewValue);
                    }),
                      (o.$isEmpty = function (e) {
                        return !e || 0 === e.length;
                      });
                  }
                },
                post: function (e, t, n, i) {
                  var r = i[1];
                  if (!r) return;
                  var o = i[0];
                  r.$render = function () {
                    o.writeValue(r.$viewValue);
                  };
                }
              }
            };
          },
          Na = [
            "$interpolate",
            function (e) {
              return {
                restrict: "E",
                priority: 100,
                compile: function (t, n) {
                  var i, r;
                  return (
                    F(n.ngValue) || (F(n.value) ? (i = e(n.value, !0)) : (r = e(t.text(), !0)) || n.$set("value", t.text())),
                    function (e, t, n) {
                      var o = "$selectController",
                        a = t.parent(),
                        s = a.data(o) || a.parent().data(o);
                      s && s.registerOption(e, t, n, i, r);
                    }
                  );
                }
              };
            }
          ],
          Fa = [
            "$parse",
            function (e) {
              return {
                restrict: "A",
                require: "?ngModel",
                link: function (t, n, i, r) {
                  if (r) {
                    var o = i.hasOwnProperty("required") || e(i.ngRequired)(t);
                    i.ngRequired || (i.required = !0),
                      (r.$validators.required = function (e, t) {
                        return !o || !r.$isEmpty(t);
                      }),
                      i.$observe("required", function (e) {
                        o !== e && ((o = e), r.$validate());
                      });
                  }
                }
              };
            }
          ],
          Ua = [
            "$parse",
            function (e) {
              return {
                restrict: "A",
                require: "?ngModel",
                compile: function (t, n) {
                  var i, r;
                  return (
                    n.ngPattern &&
                      ((i = n.ngPattern),
                      (r =
                        "/" === n.ngPattern.charAt(0) && c.test(n.ngPattern)
                          ? function () {
                              return n.ngPattern;
                            }
                          : e(n.ngPattern))),
                    function (e, t, n, o) {
                      if (o) {
                        var a = n.pattern;
                        n.ngPattern ? (a = r(e)) : (i = n.pattern);
                        var s = Va(a, i, t);
                        n.$observe("pattern", function (e) {
                          var n = s;
                          (s = Va(e, i, t)), (n && n.toString()) !== (s && s.toString()) && o.$validate();
                        }),
                          (o.$validators.pattern = function (e, t) {
                            return o.$isEmpty(t) || N(s) || s.test(t);
                          });
                      }
                    }
                  );
                }
              };
            }
          ],
          ja = [
            "$parse",
            function (e) {
              return {
                restrict: "A",
                require: "?ngModel",
                link: function (t, n, i, r) {
                  if (r) {
                    var o = i.maxlength || e(i.ngMaxlength)(t),
                      a = Ha(o);
                    i.$observe("maxlength", function (e) {
                      o !== e && ((a = Ha(e)), (o = e), r.$validate());
                    }),
                      (r.$validators.maxlength = function (e, t) {
                        return a < 0 || r.$isEmpty(t) || t.length <= a;
                      });
                  }
                }
              };
            }
          ],
          Wa = [
            "$parse",
            function (e) {
              return {
                restrict: "A",
                require: "?ngModel",
                link: function (t, n, i, r) {
                  if (r) {
                    var o = i.minlength || e(i.ngMinlength)(t),
                      a = Ha(o) || -1;
                    i.$observe("minlength", function (e) {
                      o !== e && ((a = Ha(e) || -1), (o = e), r.$validate());
                    }),
                      (r.$validators.minlength = function (e, t) {
                        return r.$isEmpty(t) || t.length >= a;
                      });
                  }
                }
              };
            }
          ];
        function Va(e, t, n) {
          if (e) {
            if ((W(e) && (e = new RegExp("^" + e + "$")), !e.test))
              throw r("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", t, e, be(n));
            return e;
          }
        }
        function Ha(e) {
          var t = O(e);
          return M(t) ? -1 : t;
        }
        e.angular.bootstrap
          ? e.console && console.log("WARNING: Tried to load AngularJS more than once.")
          : (!(function () {
              var t;
              if (!Ie) {
                var n = le();
                (s = N(n) ? e.jQuery : n ? e[n] : void 0) && s.fn.on
                  ? ((a = s),
                    A(s.fn, {
                      scope: Dt.scope,
                      isolateScope: Dt.isolateScope,
                      controller: Dt.controller,
                      injector: Dt.injector,
                      inheritedData: Dt.inheritedData
                    }))
                  : (a = gt),
                  (t = a.cleanData),
                  (a.cleanData = function (e) {
                    for (var n, i, r = 0; null != (i = e[r]); r++)
                      (n = (a._data(i) || {}).events) && n.$destroy && a(i).triggerHandler("$destroy");
                    t(e);
                  }),
                  ($.element = a),
                  (Ie = !0);
              }
            })(),
            (function (t) {
              A(t, {
                errorHandlingConfig: n,
                bootstrap: Ae,
                copy: ae,
                extend: A,
                merge: P,
                equals: ue,
                element: a,
                forEach: w,
                injector: nn,
                noop: I,
                bind: he,
                toJson: ve,
                fromJson: me,
                identity: D,
                isUndefined: N,
                isDefined: F,
                isString: W,
                isFunction: K,
                isObject: U,
                isNumber: V,
                isElement: ne,
                isArray: q,
                version: Ze,
                isDate: H,
                callbacks: { $$counter: 0 },
                getTestability: Oe,
                reloadWithDebugInfo: Pe,
                UNSAFE_restoreLegacyJqLiteXHTMLReplacement: De,
                $$minErr: r,
                $$csp: ce,
                $$encodeUriSegment: Se,
                $$encodeUriQuery: xe,
                $$lowercase: f,
                $$stringify: je,
                $$uppercase: h
              }),
                (u = (function (e) {
                  var t = r("$injector"),
                    n = r("ng");
                  function i(e, t, n) {
                    return e[t] || (e[t] = n());
                  }
                  var o = i(e, "angular", Object);
                  return (
                    (o.$$minErr = o.$$minErr || r),
                    i(o, "module", function () {
                      var e = {};
                      return function (r, o, a) {
                        var s = {};
                        return (
                          (function (e, t) {
                            if ("hasOwnProperty" === e) throw n("badname", "hasOwnProperty is not a valid {0} name", "module");
                          })(r),
                          o && e.hasOwnProperty(r) && (e[r] = null),
                          i(e, r, function () {
                            if (!o)
                              throw t(
                                "nomod",
                                "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.",
                                r
                              );
                            var e = [],
                              i = [],
                              u = [],
                              c = d("$injector", "invoke", "push", i),
                              l = {
                                _invokeQueue: e,
                                _configBlocks: i,
                                _runBlocks: u,
                                info: function (e) {
                                  if (F(e)) {
                                    if (!U(e)) throw n("aobj", "Argument '{0}' must be an object", "value");
                                    return (s = e), this;
                                  }
                                  return s;
                                },
                                requires: o,
                                name: r,
                                provider: f("$provide", "provider"),
                                factory: f("$provide", "factory"),
                                service: f("$provide", "service"),
                                value: d("$provide", "value"),
                                constant: d("$provide", "constant", "unshift"),
                                decorator: f("$provide", "decorator", i),
                                animation: f("$animateProvider", "register"),
                                filter: f("$filterProvider", "register"),
                                controller: f("$controllerProvider", "register"),
                                directive: f("$compileProvider", "directive"),
                                component: f("$compileProvider", "component"),
                                config: c,
                                run: function (e) {
                                  return u.push(e), this;
                                }
                              };
                            return a && c(a), l;
                            function d(t, n, i, r) {
                              return (
                                r || (r = e),
                                function () {
                                  return r[i || "push"]([t, n, arguments]), l;
                                }
                              );
                            }
                            function f(t, n, i) {
                              return (
                                i || (i = e),
                                function (e, o) {
                                  return o && K(o) && (o.$$moduleName = r), i.push([t, n, arguments]), l;
                                }
                              );
                            }
                          })
                        );
                      };
                    })
                  );
                })(e)),
                u(
                  "ng",
                  ["ngLocale"],
                  [
                    "$provide",
                    function (e) {
                      e.provider({ $$sanitizeUri: Ji }),
                        e
                          .provider("$compile", bn)
                          .directive({
                            a: Zr,
                            input: Oo,
                            textarea: Oo,
                            form: no,
                            script: La,
                            select: Ra,
                            option: Na,
                            ngBind: Do,
                            ngBindHtml: Ro,
                            ngBindTemplate: Bo,
                            ngClass: Uo,
                            ngClassEven: Wo,
                            ngClassOdd: jo,
                            ngCloak: Vo,
                            ngController: Ho,
                            ngForm: io,
                            ngHide: Ta,
                            ngIf: Go,
                            ngInclude: Zo,
                            ngInit: Jo,
                            ngNonBindable: va,
                            ngPluralize: _a,
                            ngRef: ba,
                            ngRepeat: Ca,
                            ngShow: xa,
                            ngStyle: Ea,
                            ngSwitch: ka,
                            ngSwitchWhen: Aa,
                            ngSwitchDefault: Pa,
                            ngOptions: ya,
                            ngTransclude: Ma,
                            ngModel: la,
                            ngList: Yo,
                            ngChange: No,
                            pattern: Ua,
                            ngPattern: Ua,
                            required: Fa,
                            ngRequired: Fa,
                            minlength: Wa,
                            ngMinlength: Wa,
                            maxlength: ja,
                            ngMaxlength: ja,
                            ngValue: Io,
                            ngModelOptions: ha
                          })
                          .directive({ ngInclude: Qo, input: Mo })
                          .directive(Qr)
                          .directive(qo),
                        e.provider({
                          $anchorScroll: rn,
                          $animate: dn,
                          $animateCss: pn,
                          $$animateJs: cn,
                          $$animateQueue: ln,
                          $$AnimateRunner: hn,
                          $$animateAsyncRun: fn,
                          $browser: mn,
                          $cacheFactory: gn,
                          $controller: On,
                          $document: Mn,
                          $$isDocumentHidden: Ln,
                          $exceptionHandler: In,
                          $filter: Cr,
                          $$forceReflow: Dn,
                          $interpolate: ei,
                          $interval: ni,
                          $$intervalFactory: ii,
                          $http: Qn,
                          $httpParamSerializer: Vn,
                          $httpParamSerializerJQLike: Hn,
                          $httpBackend: Yn,
                          $xhrFactory: Jn,
                          $jsonpCallbacks: ri,
                          $location: bi,
                          $log: Ci,
                          $parse: Wi,
                          $rootScope: Qi,
                          $q: Vi,
                          $$q: Hi,
                          $sce: rr,
                          $sceDelegate: ir,
                          $sniffer: or,
                          $$taskTrackerFactory: ar,
                          $templateCache: yn,
                          $templateRequest: cr,
                          $$testability: lr,
                          $timeout: fr,
                          $window: _r,
                          $$rAF: Zi,
                          $$jqLite: Wt,
                          $$Map: Kt,
                          $$cookieReader: br
                        });
                    }
                  ]
                ).info({ angularVersion: "1.8.0" });
            })($),
            $.module(
              "ngLocale",
              [],
              [
                "$provide",
                function (e) {
                  var t = "one",
                    n = "other";
                  e.value("$locale", {
                    DATETIME_FORMATS: {
                      AMPMS: ["AM", "PM"],
                      DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                      ERANAMES: ["Before Christ", "Anno Domini"],
                      ERAS: ["BC", "AD"],
                      FIRSTDAYOFWEEK: 6,
                      MONTH: [
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
                      ],
                      SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                      SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                      STANDALONEMONTH: [
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
                      ],
                      WEEKENDRANGE: [5, 6],
                      fullDate: "EEEE, MMMM d, y",
                      longDate: "MMMM d, y",
                      medium: "MMM d, y h:mm:ss a",
                      mediumDate: "MMM d, y",
                      mediumTime: "h:mm:ss a",
                      short: "M/d/yy h:mm a",
                      shortDate: "M/d/yy",
                      shortTime: "h:mm a"
                    },
                    NUMBER_FORMATS: {
                      CURRENCY_SYM: "$",
                      DECIMAL_SEP: ".",
                      GROUP_SEP: ",",
                      PATTERNS: [
                        { gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: "" },
                        { gSize: 3, lgSize: 3, maxFrac: 2, minFrac: 2, minInt: 1, negPre: "-¤", negSuf: "", posPre: "¤", posSuf: "" }
                      ]
                    },
                    id: "en-us",
                    localeID: "en_US",
                    pluralCat: function (e, i) {
                      var r = 0 | e,
                        o = (function (e, t) {
                          var n = t;
                          void 0 === n &&
                            (n = Math.min(
                              (function (e) {
                                var t = (e += "").indexOf(".");
                                return -1 == t ? 0 : e.length - t - 1;
                              })(e),
                              3
                            ));
                          var i = Math.pow(10, n);
                          return { v: n, f: ((e * i) | 0) % i };
                        })(e, i);
                      return 1 == r && 0 == o.v ? t : n;
                    }
                  });
                }
              ]
            ),
            a(function () {
              ke(e.document, Ae);
            }));
      })(window),
        !window.angular.$$csp().noInlineStyle &&
          window.angular
            .element(document.head)
            .prepend(
              window.angular
                .element("<style>")
                .text(
                  '@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}'
                )
            );
    },
    6695: (e, t, n) => {
      n(4426), (e.exports = angular);
    },
    2535: () => {
      var e, t;
      (e = n || (n = {})),
        (t = (function () {
          function e() {}
          return (
            (e.transition = function (t, n) {
              var i = { element: t, props: n, transformations: {} };
              e._animationObjects.push(i),
                e._parseProperties(i),
                e._createTransition(i),
                setTimeout(e._setProperties, 0, i),
                e._setCallback(i);
            }),
            (e.animation = function (t, n, i) {
              var r = { element: t, keyframes: n, props: i };
              e._animationObjects.push(r), e._parseProperties(r), e._createAnimation(r), e._setCallback(r);
            }),
            (e.scrollTo = function (t, n) {
              var i = { element: t, props: n, step: 0 };
              e._setScrollProperties(i),
                i.props.delay ? setTimeout(e._animationObjects, 1e3 * i.props.delay, i) : e._animateScroll(i),
                e._animationObjects.push(i);
            }),
            (e._setScrollProperties = function (e) {
              (e.beginTop = e.element.scrollTop), (e.change = e.props.top - e.beginTop), (e.props.duration = 1e3 * e.props.duration);
            }),
            (e._parseProperties = function (t) {
              var n = e._timeProps.concat(e._callbackProps);
              for (var i in ((t.tweenObj = {}), t.props)) e._contains(n, i) ? (t[i] = t.props[i]) : (t.tweenObj[i] = t.props[i]);
            }),
            (e._animateScroll = function (t) {
              var n = t.props.duration / 33,
                i = e._easeOutExpo(t.step++, t.beginTop, t.change, n);
              (t.element.scrollTop = i),
                t.step >= n
                  ? ((t.element.scrollTop = t.props.top), e._executeCallback(t.props), e._removeAnimationObject(t))
                  : setTimeout(function () {
                      requestAnimationFrame(function () {
                        e._animateScroll(t);
                      });
                    }, 33);
            }),
            (e._createTransition = function (t) {
              var n = t.duration || 0,
                i = t.delay || 0;
              (t.element.style.transitionProperty = e._getTransitionProperties(t.tweenObj)),
                (t.element.style.transitionDuration = n.toString() + "s"),
                (t.element.style.transitionTimingFunction = t.ease || "linear"),
                (t.element.style.transitionDelay = i.toString() + "s");
            }),
            (e._createAnimation = function (e) {
              var t = e.duration || 0,
                n = e.delay || 0;
              (e.element.style.animationName = e.keyframes),
                (e.element.style.animationDuration = t.toString() + "s"),
                (e.element.style.animationTimingFunction = e.ease || "linear"),
                (e.element.style.animationDelay = n.toString() + "s"),
                (e.element.style.animationFillMode = "both");
            }),
            (e._getTransitionProperties = function (t) {
              var n = !1,
                i = !1,
                r = [];
              for (var o in t)
                e._contains(e._transformProps, o) ? (n = !0) : e._contains(e._filters, o) ? (i = !0) : r.push(e._camelCaseToDash(o));
              return n && r.push("transform"), i && (r.push("-webkit-filter"), r.push("filter")), r.join(", ");
            }),
            (e._setProperties = function (t) {
              for (var n in t.tweenObj)
                e._contains(e._transformProps, n)
                  ? e._setTransformValues(t, n)
                  : e._contains(e._filters, n)
                  ? e._setFilterValues(t, n)
                  : e._setRegularValues(t, n);
              t.transformations && e._setTransformations(t);
            }),
            (e._setRegularValues = function (e, t) {
              var n = e.tweenObj[t];
              -1 === n.toString().indexOf("%") && (n += "opacity" !== t && "backgroundColor" !== t && "boxShadow" !== t ? "px" : ""),
                (e.element.style[t] = n);
            }),
            (e._setFilterValues = function (t, n) {
              var i = t.tweenObj[n];
              (i = "hueRotate" === n ? "(" + i + "deg)" : "blur" === n ? "(" + i + "px)" : "(" + i + "%)"),
                (n = e._camelCaseToDash(n)),
                (t.element.style.webkitFilter = n + i),
                (t.element.style.filter = n + i);
            }),
            (e._setTransformValues = function (e, t) {
              /x|y|z|scaleX|scaleY|scaleZ|rotate|rotateX|rotateY|rotateZ|skewX|skewY/.test(t) && (e.transformations[t] = e.tweenObj[t]);
            }),
            (e._setTransformations = function (e) {
              var t = "",
                n = "",
                i = "",
                r = "",
                o = e.transformations;
              (r += void 0 !== o.x && o.x ? "translateX(" + o.x + "px) " : ""),
                (r += void 0 !== o.y && o.y ? "translateY(" + o.y + "px) " : ""),
                (r += void 0 !== o.z && o.z ? "translateZ(" + o.z + "px) " : ""),
                (t += void 0 !== o.rotate && o.rotate ? "rotate(" + o.rotate + "deg) " : ""),
                (t += void 0 !== o.rotateX && o.rotateX ? "rotateX(" + o.rotateX + "deg) " : ""),
                (t += void 0 !== o.rotateY && o.rotateY ? "rotate(" + o.rotateY + "deg) " : ""),
                (t += void 0 !== o.rotateZ && o.rotateZ ? "rotate(" + o.rotateZ + "deg) " : ""),
                (n += void 0 !== o.scaleX && o.scaleX ? "scaleX(" + o.scaleX + ") " : ""),
                (n += void 0 !== o.scaleY && o.scaleY ? "scaleY(" + o.scaleY + ") " : ""),
                (n += void 0 !== o.scaleZ && o.scaleZ ? "scaleZ(" + o.scaleZ + ") " : ""),
                (i += void 0 !== o.skewX && o.skewX ? "skewX(" + o.skewX + "deg) " : ""),
                (i += void 0 !== o.skewY && o.skewY ? "skewY(" + o.skewY + "deg) " : ""),
                (e.element.style.transform = r + t + n + i);
            }),
            (e._setCallback = function (t) {
              t.element.addEventListener("webkitTransitionEnd", e._complete, !1),
                t.element.addEventListener("transitionend", e._complete, !1),
                t.element.addEventListener("webkitAnimationEnd", e._complete, !1),
                t.element.addEventListener("animationend", e._complete, !1);
            }),
            (e._complete = function (t) {
              t.target.removeEventListener("webkitTransitionEnd", e._complete),
                t.target.removeEventListener("transitionend", e._complete),
                t.target.removeEventListener("webkitAnimationEnd", e._complete),
                t.target.removeEventListener("animationend", e._complete);
              var n = e._getAnimationObjByElement(t.target);
              e._executeCallback(n), e._removeAnimationObject(n);
            }),
            (e._getAnimationObjByElement = function (t) {
              for (var n = e._animationObjects.length; n--; ) if (e._animationObjects[n].element === t) return e._animationObjects[n];
              return null;
            }),
            (e._removeAnimationObject = function (t) {
              for (var n = e._animationObjects.length; n--; ) e._animationObjects[n] === t && e._animationObjects.splice(n, 1);
            }),
            (e._executeCallback = function (e) {
              if (e.onEnd) {
                var t = e.onEndArgs || [];
                e.onEnd.apply(null, t);
              }
            }),
            (e._contains = function (e, t) {
              for (var n = e.length; n--; ) if (t === e[n]) return !0;
              return !1;
            }),
            (e._camelCaseToDash = function (e) {
              return e
                .replace(/\W+/g, "-")
                .replace(/([a-z\d])([A-Z])/g, "$1-$2")
                .toLowerCase();
            }),
            (e._easeOutExpo = function (e, t, n, i) {
              return e === i ? t + n : n * (1 - Math.pow(2, (-10 * e) / i)) + t;
            }),
            (e._transformProps = [
              "x",
              "y",
              "z",
              "scaleX",
              "scaleY",
              "scaleZ",
              "rotate",
              "rotateX",
              "rotateY",
              "rotateZ",
              "skewX",
              "skewY"
            ]),
            (e._filters = ["blur", "brightness", "contrast", "dropShadow", "grayscale", "hueRotate", "invert", "saturate", "sepia"]),
            (e._timeProps = ["duration", "ease", "delay"]),
            (e._callbackProps = ["onEnd", "onEndArgs"]),
            (e._animationObjects = []),
            e
          );
        })()),
        (e.Animate = t),
        (function (e) {
          var t = (function () {
            function e() {}
            return (
              (e.QUAD_EASE_IN = e.CB + "(0.550, 0.085, 0.680, 0.530)"),
              (e.CUBIC_EASE_IN = e.CB + "(0.550, 0.055, 0.675, 0.190)"),
              (e.QUART_EASE_IN = e.CB + "(0.895, 0.030, 0.685, 0.220)"),
              (e.QUINT_EASE_IN = e.CB + "(0.755, 0.050, 0.855, 0.060)"),
              (e.SINE_EASE_IN = e.CB + "(0.470, 0, 0.745, 0.715)"),
              (e.EXPO_EASE_IN = e.CB + "(0.950, 0.050, 0.795, 0.035)"),
              (e.CIRC_EASE_IN = e.CB + "(0.600, 0.040, 0.980, 0.335)"),
              (e.BACK_EASE_IN = e.CB + "(0.600, 0.040, 0.980, 0.335)"),
              (e.QUAD_EASE_OUT = e.CB + "(0.250, 0.460, 0.450, 0.940)"),
              (e.CUBIC_EASE_OUT = e.CB + "(0.215, 0.610, 0.355, 1)"),
              (e.QUART_EASE_OUT = e.CB + "(0.165, 0.840, 0.440, 1)"),
              (e.QUINT_EASE_OUT = e.CB + "(0.230, 1, 0.320, 1)"),
              (e.SINE_EASE_OUT = e.CB + "(0.390, 0.575, 0.565, 1)"),
              (e.EXPO_EASE_OUT = e.CB + "(0.190, 1, 0.220, 1)"),
              (e.CIRC_EASE_OUT = e.CB + "(0.075, 0.820, 0.165, 1)"),
              (e.BACK_EASE_OUT = e.CB + "(0.175, 0.885, 0.320, 1.275)"),
              (e.QUAD_EASE_IN_OUT = e.CB + "(0.455, 0.030, 0.515, 0.955)"),
              (e.CUBIC_EASE_IN_OUT = e.CB + "(0.645, 0.045, 0.355, 1)"),
              (e.QUART_EASE_IN_OUT = e.CB + "(0.770, 0, 0.175, 1)"),
              (e.QUINT_EASE_IN_OUT = e.CB + "(0.860, 0, 0.070, 1)"),
              (e.SINE_EASE_IN_OUT = e.CB + "(0.445, 0.050, 0.550, 0.950)"),
              (e.EXPO_EASE_IN_OUT = e.CB + "(1, 0, 0, 1)"),
              (e.CIRC_EASE_IN_OUT = e.CB + "(0.785, 0.135, 0.150, 0.860)"),
              (e.BACK_EASE_IN_OUT = e.CB + "(0.680, -0.550, 0.265, 1.550)"),
              (e.CB = "cubic-bezier"),
              e
            );
          })();
          e.Ease = t;
        })(n || (n = {})),
        (function () {
          function e(e, t) {
            t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
          }
          (e.prototype = Event.prototype), (window.CustomEvent = e);
        })(),
        (function (e) {
          "use strict";
          var t = (function () {
            function e(e) {
              (this._currentMaxItems = 0),
                (this._itemCollection = []),
                (this._tabIndex = 2),
                (this.container = e),
                (this._onResize = this._onResize.bind(this)),
                (this._openOverflow = this._openOverflow.bind(this)),
                (this._overflowKeyPress = this._overflowKeyPress.bind(this)),
                (this._closeOverflow = this._closeOverflow.bind(this)),
                (this.removeOutlinesOnClick = this.removeOutlinesOnClick.bind(this)),
                this.init();
            }
            return (
              (e.prototype.removeOutlinesOnClick = function () {
                this._breadcrumbList.blur();
              }),
              (e.prototype.addItem = function (e, t) {
                this._itemCollection.push({ text: e, link: t }), this._updateBreadcrumbs();
              }),
              (e.prototype.removeItemByLabel = function (e) {
                for (var t = this._itemCollection.length; t--; ) this._itemCollection[t].text === e && this._itemCollection.splice(t, 1);
                this._updateBreadcrumbs();
              }),
              (e.prototype.removeItemByPosition = function (e) {
                this._itemCollection.splice(e, 1), this._updateBreadcrumbs();
              }),
              (e.prototype.init = function () {
                this._cacheDOM(), this._setListeners(), this._createItemCollection(), this._onResize();
              }),
              (e.prototype._createItemCollection = function () {
                for (var e, t, n, i, r = this._listItems.length, o = 0; o < r; o++)
                  (t = (e = this._listItems[o].querySelector(".ms-Breadcrumb-itemLink")).textContent),
                    (n = e.getAttribute("href")),
                    (i = parseInt(e.getAttribute("tabindex"), 10)),
                    this._itemCollection.push({ link: n, tabIndex: i, text: t });
              }),
              (e.prototype._onResize = function () {
                this._closeOverflow(null), this._renderList();
              }),
              (e.prototype._renderList = function () {
                var t = window.innerWidth > e.MEDIUM ? 4 : 2;
                t !== this._currentMaxItems && this._updateBreadcrumbs(), (this._currentMaxItems = t);
              }),
              (e.prototype._updateBreadcrumbs = function () {
                this._tabIndex = 2;
                var t = window.innerWidth > e.MEDIUM ? 4 : 2;
                this._itemCollection.length > t
                  ? this._breadcrumb.classList.add("is-overflow")
                  : this._breadcrumb.classList.remove("is-overflow"),
                  this._addItemsToOverflow(t),
                  this._addBreadcrumbItems(t);
              }),
              (e.prototype._addItemsToOverflow = function (e) {
                var t = this;
                this._resetList(this._contextMenu);
                var n = this._itemCollection.length - e;
                this._itemCollection.slice(0, n).forEach(function (e) {
                  var n = document.createElement("li");
                  n.className = "ms-ContextualMenu-item";
                  var i = document.createElement("a");
                  (i.className = "ms-ContextualMenu-link"),
                    null !== e.link && i.setAttribute("href", e.link),
                    i.setAttribute("tabindex", (t._tabIndex++).toString()),
                    (i.textContent = e.text),
                    n.appendChild(i),
                    t._contextMenu.appendChild(n);
                });
              }),
              (e.prototype._addBreadcrumbItems = function (e) {
                this._resetList(this._breadcrumbList);
                var t = this._itemCollection.length - e;
                if ((t = t < 0 ? 0 : t) >= 0)
                  for (; t < this._itemCollection.length; t++) {
                    var n = document.createElement("li"),
                      i = this._itemCollection[t],
                      r = document.createElement("a"),
                      o = document.createElement("i");
                    (n.className = "ms-Breadcrumb-listItem"),
                      (r.className = "ms-Breadcrumb-itemLink"),
                      null !== i.link && r.setAttribute("href", i.link),
                      r.setAttribute("tabindex", (this._tabIndex++).toString()),
                      (r.textContent = i.text),
                      (o.className = "ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight"),
                      n.appendChild(r),
                      n.appendChild(o),
                      this._breadcrumbList.appendChild(n);
                  }
              }),
              (e.prototype._resetList = function (e) {
                for (; e.firstChild; ) e.removeChild(e.firstChild);
              }),
              (e.prototype._openOverflow = function (e) {
                -1 === this._overflowMenu.className.indexOf(" is-open") &&
                  (this._overflowMenu.classList.add("is-open"), this.removeOutlinesOnClick(), this._overflowButton.focus());
              }),
              (e.prototype._overflowKeyPress = function (e) {
                13 === e.keyCode && this._openOverflow(e);
              }),
              (e.prototype._closeOverflow = function (e) {
                (e && e.target === this._overflowButton) || this._overflowMenu.classList.remove("is-open");
              }),
              (e.prototype._cacheDOM = function () {
                (this._breadcrumb = this.container),
                  (this._breadcrumbList = this._breadcrumb.querySelector(".ms-Breadcrumb-list")),
                  (this._listItems = this._breadcrumb.querySelectorAll(".ms-Breadcrumb-listItem")),
                  (this._contextMenu = this._breadcrumb.querySelector(".ms-ContextualMenu")),
                  (this._overflowButton = this._breadcrumb.querySelector(".ms-Breadcrumb-overflowButton")),
                  (this._overflowMenu = this._breadcrumb.querySelector(".ms-Breadcrumb-overflowMenu"));
              }),
              (e.prototype._setListeners = function () {
                window.addEventListener("resize", this._onResize, !1),
                  this._overflowButton.addEventListener("click", this._openOverflow, !1),
                  this._overflowButton.addEventListener("keypress", this._overflowKeyPress, !1),
                  document.addEventListener("click", this._closeOverflow, !1),
                  this._breadcrumbList.addEventListener("click", this.removeOutlinesOnClick, !1);
              }),
              (e.MEDIUM = 639),
              e
            );
          })();
          e.Breadcrumb = t;
        })(n || (n = {})),
        (function (e) {
          "use strict";
          var t = (function () {
            function e(e, t) {
              (this._container = e), t && ((this._clickHandler = t), this._setClick());
            }
            return (
              (e.prototype.disposeEvents = function () {
                this._container.removeEventListener("click", this._clickHandler, !1);
              }),
              (e.prototype._setClick = function () {
                this._container.addEventListener("click", this._clickHandler, !1);
              }),
              e
            );
          })();
          e.Button = t;
        })(n || (n = {})),
        (function (e) {
          var t = "is-open",
            n = "is-positioned",
            i = "ms-ContextualHost-main",
            r = "ms-ContextualHost-beak",
            o = (function () {
              function e(t, n, o, a, s, u, c) {
                if (
                  (void 0 === a && (a = !0),
                  (this._resizeAction = this._resizeAction.bind(this)),
                  (this._dismissAction = this._dismissAction.bind(this)),
                  (this._handleKeyUpDismiss = this._handleKeyUpDismiss.bind(this)),
                  (this._matchTargetWidth = u || !1),
                  (this._direction = n),
                  (this._container = this.createContainer()),
                  (this._contextualHost = this._container),
                  (this._contextualHostMain = this._contextualHost.getElementsByClassName(i)[0]),
                  this._contextualHostMain.appendChild(t),
                  (this._hasArrow = a),
                  (this._arrow = this._container.getElementsByClassName(r)[0]),
                  (this._targetElement = o),
                  this._openModal(),
                  this._setResizeDisposal(),
                  c && (this._disposalCallback = c),
                  s)
                )
                  for (var l = 0; l < s.length; l++) this._container.classList.add("ms-ContextualHost--" + s[l]);
                e.hosts || (e.hosts = []), e.hosts.push(this);
              }
              return (
                (e.prototype.disposeModal = function () {
                  if (e.hosts.length > 0) {
                    window.removeEventListener("resize", this._resizeAction, !1),
                      document.removeEventListener("click", this._dismissAction, !0),
                      document.removeEventListener("keyup", this._handleKeyUpDismiss, !0),
                      this._container.parentNode.removeChild(this._container),
                      this._disposalCallback && this._disposalCallback();
                    var t = e.hosts.indexOf(this);
                    e.hosts.splice(t, 1);
                    for (var n = e.hosts.length; n--; ) e.hosts[n].disposeModal(), e.hosts.splice(n, 1);
                  }
                }),
                (e.prototype.setChildren = function (e) {
                  this._children || (this._children = []), this._children.push(e);
                }),
                (e.prototype.contains = function (e) {
                  return this._container.contains(e);
                }),
                (e.prototype.createContainer = function () {
                  var e = document.createElement("div");
                  e.setAttribute("class", "ms-ContextualHost"), (e.innerHTML += " ");
                  var t = document.createElement("div");
                  t.setAttribute("class", i), (t.innerHTML += " "), e.appendChild(t), (e.innerHTML += " ");
                  var n = document.createElement("div");
                  return n.setAttribute("class", r), e.appendChild(n), (e.innerHTML += ""), e;
                }),
                (e.prototype._openModal = function () {
                  var e = this;
                  this._copyModalToBody(),
                    this._saveModalSize(),
                    this._findAvailablePosition(),
                    this._showModal(),
                    setTimeout(function () {
                      e._setDismissClick();
                    }, 100);
                }),
                (e.prototype._findAvailablePosition = function () {
                  var e;
                  switch (this._direction) {
                    case "left":
                      (e = this._positionOk(
                        this._tryPosModalLeft.bind(this),
                        this._tryPosModalRight.bind(this),
                        this._tryPosModalBottom.bind(this),
                        this._tryPosModalTop.bind(this)
                      )),
                        this._setPosition(e);
                      break;
                    case "right":
                      (e = this._positionOk(
                        this._tryPosModalRight.bind(this),
                        this._tryPosModalLeft.bind(this),
                        this._tryPosModalBottom.bind(this),
                        this._tryPosModalTop.bind(this)
                      )),
                        this._setPosition(e);
                      break;
                    case "top":
                      (e = this._positionOk(this._tryPosModalTop.bind(this), this._tryPosModalBottom.bind(this))), this._setPosition(e);
                      break;
                    case "bottom":
                      (e = this._positionOk(this._tryPosModalBottom.bind(this), this._tryPosModalTop.bind(this))), this._setPosition(e);
                      break;
                    default:
                      this._setPosition();
                  }
                }),
                (e.prototype._showModal = function () {
                  this._container.classList.add(t);
                }),
                (e.prototype._positionOk = function (e, t, n, i) {
                  var r;
                  return (r = e()) || (!(r = t()) && n && !(r = n()) && i && (r = i())), r;
                }),
                (e.prototype._calcLeft = function (e, t, n) {
                  var i = e / 2,
                    r = n + t / 2 - i;
                  return r < i ? n : r;
                }),
                (e.prototype._calcTop = function (e, t, n) {
                  var i = e / 2,
                    r = n + t / 2 - i;
                  return r < i ? n : r;
                }),
                (e.prototype._setPosition = function (e) {
                  var t,
                    i,
                    r,
                    o,
                    a = this._targetElement.getBoundingClientRect(),
                    s = a.left,
                    u = a.right,
                    c = a.top,
                    l = a.width,
                    d = a.height,
                    f = "",
                    h = window.scrollX ? window.scrollX : 0,
                    p = window.scrollY ? window.scrollY : 0,
                    v = this._hasArrow ? 28 : 0;
                  switch ((this._matchTargetWidth && (f = "width: " + this._modalWidth + "px;"), e)) {
                    case "left":
                      (t = s - this._modalWidth - v),
                        (i = this._calcTop(this._modalHeight, d, c)),
                        (i += window.scrollY ? window.scrollY : 0),
                        this._container.setAttribute("style", "top: " + i + "px; left: " + t + "px;" + f),
                        this._container.classList.add(n),
                        this._hasArrow &&
                          (this._container.classList.add("ms-ContextualHost--arrowRight"),
                          (r = c + p - i + 8),
                          this._arrow.setAttribute("style", "top: " + r + "px;"));
                      break;
                    case "right":
                      (i = this._calcTop(this._modalHeight, d, c)),
                        (i += p),
                        (t = u + v),
                        this._container.setAttribute("style", "top: " + i + "px; left: " + t + "px;" + f),
                        this._container.classList.add(n),
                        this._hasArrow &&
                          ((r = p + c - i + 8),
                          this._arrow.setAttribute("style", "top: " + r + "px;"),
                          this._container.classList.add("ms-ContextualHost--arrowLeft"));
                      break;
                    case "top":
                      (t = this._calcLeft(this._modalWidth, this._teWidth, s)),
                        (i = c - this._modalHeight - v),
                        (i += p),
                        this._container.setAttribute("style", "top: " + i + "px; left: " + t + "px;" + f),
                        this._container.classList.add(n),
                        this._hasArrow &&
                          ((r = this._modalHeight - v / 2),
                          (o = Math.max(h + s - t + (l - v) / 2, 8)),
                          this._arrow.setAttribute("style", "top: " + r + "px; left: " + o + "px;"),
                          this._container.classList.add("ms-ContextualHost--arrowBottom"));
                      break;
                    case "bottom":
                      (t = t = this._calcLeft(this._modalWidth, this._teWidth, s)),
                        (i = c + d + v),
                        (i += window.scrollY ? window.scrollY : 0),
                        this._container.setAttribute("style", "top: " + i + "px; left: " + t + "px;" + f),
                        this._container.classList.add(n),
                        this._hasArrow &&
                          ((o = Math.max(h + s - t + (l - v) / 2, 8)),
                          this._arrow.setAttribute("style", "left: " + o + "px;"),
                          this._container.classList.add("ms-ContextualHost--arrowTop"));
                      break;
                    default:
                      this._container.setAttribute("style", "top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%);");
                  }
                }),
                (e.prototype._tryPosModalLeft = function () {
                  return !(this._targetElement.getBoundingClientRect().left < this._modalWidth) && "left";
                }),
                (e.prototype._tryPosModalRight = function () {
                  var e = this._targetElement.getBoundingClientRect().right;
                  return !(Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - e < this._modalWidth) && "right";
                }),
                (e.prototype._tryPosModalBottom = function () {
                  return !(window.innerHeight - this._targetElement.getBoundingClientRect().bottom < this._modalHeight) && "bottom";
                }),
                (e.prototype._tryPosModalTop = function () {
                  return !(this._targetElement.getBoundingClientRect().top < this._modalHeight) && "top";
                }),
                (e.prototype._copyModalToBody = function () {
                  document.body.appendChild(this._container);
                }),
                (e.prototype._saveModalSize = function () {
                  var e = window.getComputedStyle(this._container);
                  if (
                    (this._container.setAttribute("style", "opacity: 0; z-index: -1"),
                    this._container.classList.add(n),
                    this._container.classList.add(t),
                    this._matchTargetWidth)
                  ) {
                    var i = window.getComputedStyle(this._targetElement);
                    this._modalWidth =
                      this._targetElement.getBoundingClientRect().width + (parseInt(i.marginLeft, 10) + parseInt(i.marginLeft, 10));
                  } else
                    (this._modalWidth =
                      this._container.getBoundingClientRect().width + (parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10))),
                      this._container.setAttribute("style", "");
                  (this._modalHeight =
                    this._container.getBoundingClientRect().height + (parseInt(e.marginTop, 10) + parseInt(e.marginBottom, 10))),
                    this._container.classList.remove(n),
                    this._container.classList.remove(t),
                    (this._teWidth = this._targetElement.getBoundingClientRect().width),
                    (this._teHeight = this._targetElement.getBoundingClientRect().height);
                }),
                (e.prototype._dismissAction = function (e) {
                  if (!this._container.contains(e.target) && e.target !== this._container)
                    if (void 0 !== this._children) {
                      var t = !1;
                      this._children.map(function (n) {
                        void 0 !== n && (t = n.contains(e.target));
                      }),
                        t || this.disposeModal();
                    } else this.disposeModal();
                }),
                (e.prototype._setDismissClick = function () {
                  document.addEventListener("click", this._dismissAction, !0),
                    document.addEventListener("keyup", this._handleKeyUpDismiss, !0);
                }),
                (e.prototype._handleKeyUpDismiss = function (e) {
                  (32 !== e.keyCode && 27 !== e.keyCode) || this._dismissAction(e);
                }),
                (e.prototype._resizeAction = function () {
                  this.disposeModal();
                }),
                (e.prototype._setResizeDisposal = function () {
                  window.addEventListener("resize", this._resizeAction, !1);
                }),
                e
              );
            })();
          e.ContextualHost = o;
        })(n || (n = {}));
      var n;
      !(function (e) {
        "use strict";
        var t = (function () {
          function t(e, t, n) {
            (this._container = e),
              (this._addTarget = t),
              (this._position = n),
              (this._closeButton = document.querySelector(".ms-Callout-close")),
              this._setOpener();
          }
          return (
            (t.prototype._setOpener = function () {
              this._addTarget.addEventListener("click", this._clickHandler.bind(this), !0),
                this._addTarget.addEventListener("keyup", this._keyupHandler.bind(this), !0);
            }),
            (t.prototype._openContextMenu = function () {
              var t = [];
              this._hasModifier("ms-Callout--OOBE") && t.push("primaryArrow"),
                this._container.classList.remove("is-hidden"),
                (this._contextualHost = new e.ContextualHost(this._container, this._position, this._addTarget, !0, t)),
                this._closeButton && this._closeButton.addEventListener("click", this._closeHandler.bind(this), !1);
            }),
            (t.prototype._hasModifier = function (e) {
              return this._container.classList.contains(e);
            }),
            (t.prototype._closeHandler = function (e) {
              null != this._contextualHost && this._contextualHost.disposeModal(),
                this._closeButton.removeEventListener("click", this._closeHandler.bind(this), !1),
                this._addTarget.removeEventListener("click", this._clickHandler.bind(this), !0),
                this._addTarget.removeEventListener("keyup", this._keyupHandler.bind(this), !0);
            }),
            (t.prototype._clickHandler = function (e) {
              this._openContextMenu();
            }),
            (t.prototype._keyupHandler = function (e) {
              32 === e.keyCode ? (e.stopPropagation(), e.preventDefault(), this._openContextMenu()) : this._closeHandler(e);
            }),
            t
          );
        })();
        e.Callout = t;
      })(n || (n = {})),
        (function (e) {
          var t = (function () {
            function e(e) {
              (this._container = e),
                (this._choiceField = this._container.querySelector(".ms-CheckBox-field")),
                (this._choiceInput = this._container.querySelector(".ms-CheckBox-input")),
                this._choiceInput.checked && this._choiceField.setAttribute("aria-checked", "true"),
                "true" === this._choiceField.getAttribute("aria-checked") && this._choiceField.classList.add("is-checked"),
                this._addListeners();
            }
            return (
              (e.prototype.getValue = function () {
                return "true" === this._choiceField.getAttribute("aria-checked");
              }),
              (e.prototype.toggle = function () {
                this.getValue() ? this.unCheck() : this.check(), this._choiceInput.click();
              }),
              (e.prototype.check = function () {
                this._choiceField.setAttribute("aria-checked", "true"), this._choiceField.classList.add("is-checked");
              }),
              (e.prototype.unCheck = function () {
                this._choiceField.setAttribute("aria-checked", "false"), this._choiceField.classList.remove("is-checked");
              }),
              (e.prototype.removeListeners = function () {
                this._choiceField.removeEventListener("focus", this._FocusHandler.bind(this)),
                  this._choiceField.removeEventListener("blur", this._BlurHandler.bind(this)),
                  this._choiceField.removeEventListener("click", this._ClickHandler.bind(this)),
                  this._choiceField.removeEventListener("keydown", this._KeydownHandler.bind(this));
              }),
              (e.prototype._addListeners = function (e) {
                var t = e && e.ignore;
                (t && t.indexOf("focus") > -1) || this._choiceField.addEventListener("focus", this._FocusHandler.bind(this), !1),
                  (t && t.indexOf("blur") > -1) || this._choiceField.addEventListener("blur", this._BlurHandler.bind(this), !1),
                  (t && t.indexOf("click") > -1) || this._choiceField.addEventListener("click", this._ClickHandler.bind(this), !1),
                  (t && t.indexOf("keydown") > -1) || this._choiceField.addEventListener("keydown", this._KeydownHandler.bind(this), !1);
              }),
              (e.prototype._FocusHandler = function () {
                this._choiceField.classList.add("in-focus");
              }),
              (e.prototype._BlurHandler = function () {
                this._choiceField.classList.remove("in-focus");
              }),
              (e.prototype._ClickHandler = function (e) {
                e.stopPropagation(), e.preventDefault(), this._choiceField.classList.contains("is-disabled") || this.toggle();
              }),
              (e.prototype._KeydownHandler = function (e) {
                32 === e.keyCode &&
                  (e.stopPropagation(), e.preventDefault(), this._choiceField.classList.contains("is-disabled") || this.toggle());
              }),
              e
            );
          })();
          e.CheckBox = t;
        })(n || (n = {})),
        (function (e) {
          var t = (function () {
            function e(e) {
              (this._container = e),
                (this._choiceField = this._container.querySelector(".ms-RadioButton-field")),
                (this._choiceInput = this._container.querySelector(".ms-RadioButton-input")),
                "true" === this._choiceField.getAttribute("aria-checked") && this._choiceField.classList.add("is-checked"),
                this._addListeners();
            }
            return (
              (e.prototype.getValue = function () {
                return "true" === this._choiceField.getAttribute("aria-checked");
              }),
              (e.prototype.toggle = function () {
                this.getValue() ? this.unCheck() : this.check();
              }),
              (e.prototype.check = function () {
                this._choiceField.setAttribute("aria-checked", "true"),
                  this._choiceField.classList.add("is-checked"),
                  (this._choiceInput.checked = !0);
              }),
              (e.prototype.unCheck = function () {
                this._choiceField.setAttribute("aria-checked", "false"),
                  this._choiceField.classList.remove("is-checked"),
                  (this._choiceInput.checked = !1);
              }),
              (e.prototype.removeListeners = function () {
                this._choiceField.removeEventListener("focus", this._FocusHandler.bind(this)),
                  this._choiceField.removeEventListener("blur", this._BlurHandler.bind(this)),
                  this._choiceField.removeEventListener("click", this._RadioClickHandler.bind(this)),
                  this._choiceField.addEventListener("keydown", this._RadioKeydownHandler.bind(this));
              }),
              (e.prototype._addListeners = function () {
                this._choiceField.addEventListener("focus", this._FocusHandler.bind(this), !1),
                  this._choiceField.addEventListener("blur", this._BlurHandler.bind(this), !1),
                  this._choiceField.addEventListener("click", this._RadioClickHandler.bind(this), !1),
                  this._choiceField.addEventListener("keydown", this._RadioKeydownHandler.bind(this), !1);
              }),
              (e.prototype._RadioClickHandler = function (e) {
                e.stopPropagation(), e.preventDefault(), this._choiceField.classList.contains("is-disabled") || this._dispatchSelectEvent();
              }),
              (e.prototype._dispatchSelectEvent = function () {
                var e = { bubbles: !0, cancelable: !0, detail: { name: this._choiceField.getAttribute("name"), item: this } };
                this._choiceField.dispatchEvent(new CustomEvent("msChoicefield", e));
              }),
              (e.prototype._RadioKeydownHandler = function (e) {
                32 === e.keyCode &&
                  (e.stopPropagation(),
                  e.preventDefault(),
                  this._choiceField.classList.contains("is-disabled") || this._dispatchSelectEvent());
              }),
              (e.prototype._FocusHandler = function () {
                this._choiceField.classList.add("in-focus");
              }),
              (e.prototype._BlurHandler = function () {
                this._choiceField.classList.remove("in-focus");
              }),
              e
            );
          })();
          e.RadioButton = t;
        })(n || (n = {})),
        (function (e) {
          var t = (function () {
            function t(e) {
              (this._choiceFieldGroup = e), (this._choiceFieldComponents = []), this._initalSetup(), this._addListeners();
            }
            return (
              (t.prototype.removeListeners = function () {
                this._choiceFieldGroup.removeEventListener("msChoicefield", this._ChoiceFieldHandler.bind(this));
              }),
              (t.prototype._initalSetup = function () {
                for (var t = this._choiceFieldGroup.querySelectorAll(".ms-RadioButton"), n = 0; n < t.length; n++)
                  this._choiceFieldComponents[n] = new e.RadioButton(t[n]);
              }),
              (t.prototype._addListeners = function () {
                document.addEventListener("msChoicefield", this._ChoiceFieldHandler.bind(this), !1);
              }),
              (t.prototype._ChoiceFieldHandler = function (e) {
                var t = e.detail.name,
                  n = e.detail.item;
                if (this._choiceFieldGroup.id === t) {
                  for (var i = 0; i < this._choiceFieldComponents.length; i++) this._choiceFieldComponents[i].unCheck();
                  n.check();
                }
              }),
              t
            );
          })();
          e.ChoiceFieldGroup = t;
        })(n || (n = {})),
        (function (e) {
          var t = "has-text",
            n = "is-active",
            i = (function () {
              function e(e) {
                var t = this;
                (this._container = e),
                  this._saveDOMRefs(this._container),
                  (this._boundExpandSearchHandler = this._expandSearchHandler.bind(this)),
                  (this._boundEnableClose = this._enableClose.bind(this)),
                  (this._boundCollapseSearchBox = this._collapseSearchBox.bind(this)),
                  (this._boundClearSearchBox = this._clearSearchBox.bind(this)),
                  (this._boundHandleBlur = this._handleBlur.bind(this)),
                  (this._boundExitSearchBox = this._exitSearchBox.bind(this)),
                  this._setHasText(),
                  this._setFocusAction(this._container),
                  this._setClearButtonAction(),
                  this._setBlurAction(),
                  (this._clearOnly = !1),
                  setTimeout(function () {
                    t._checkState(), t._addAnimation();
                  }, 10);
              }
              return (
                (e.prototype.setCollapsedListeners = function () {
                  this._disposeListeners(),
                    this._searchBox.addEventListener("click", this._boundExpandSearchHandler, !1),
                    this._searchBoxField.addEventListener("focus", this._boundExpandSearchHandler, !0);
                }),
                (e.prototype.getInputField = function () {
                  return this._searchBoxField;
                }),
                (e.prototype._saveDOMRefs = function (e) {
                  (this._searchBox = e),
                    (this._searchBoxField = this._searchBox.querySelector(".ms-SearchBox-field")),
                    (this._searchBoxClearButton = this._searchBox.querySelector(".ms-SearchBox-clear")),
                    (this._searchBoxExitButton = this._searchBox.querySelector(".ms-SearchBox-exit"));
                }),
                (e.prototype._disposeListeners = function () {
                  this._searchBox.removeEventListener("click", this._boundExpandSearchHandler),
                    this._searchBoxField.removeEventListener("focus", this._boundExpandSearchHandler);
                }),
                (e.prototype._exitSearchBox = function (e) {
                  e.stopPropagation(),
                    e.target.blur(),
                    this._clearSearchBox(),
                    this._collapseSearchBox(),
                    this._searchBox.removeEventListener("keyup", this._boundEnableClose),
                    this.setCollapsedListeners();
                }),
                (e.prototype._collapseSearchBox = function () {
                  this._searchBox.classList.remove("is-active");
                  var e = document.createEvent("Event");
                  e.initEvent("searchCollapse", !0, !0), this._searchBoxField.dispatchEvent(e);
                }),
                (e.prototype._expandSearchHandler = function () {
                  this._disposeListeners(), this._searchBox.classList.add("is-active"), this._searchBoxField.focus();
                }),
                (e.prototype._enableClose = function () {
                  this._setHasText();
                }),
                (e.prototype._setHasText = function () {
                  this._searchBoxField.value.length > 0 ? this._searchBox.classList.add(t) : this._searchBox.classList.remove(t);
                }),
                (e.prototype._setFocusAction = function (e) {
                  var t = this;
                  this._searchBoxField.addEventListener(
                    "focus",
                    function () {
                      t._setHasText(),
                        t._searchBox.addEventListener("keyup", t._boundEnableClose, !1),
                        t._searchBox.classList.add(n),
                        t._searchBox.classList.add(n);
                    },
                    !0
                  );
                }),
                (e.prototype._clearSearchBox = function (e) {
                  var t = this;
                  (this._clearOnly = !0),
                    (this._searchBoxField.value = ""),
                    this._setHasText(),
                    setTimeout(function () {
                      t._clearOnly = !1;
                    }, 10);
                }),
                (e.prototype._setClearButtonAction = function () {
                  var e = this;
                  this._searchBoxExitButton && this._searchBoxExitButton.addEventListener("click", this._boundExitSearchBox, !1),
                    this._searchBoxClearButton.addEventListener("mousedown", this._boundClearSearchBox, !1),
                    this._searchBoxClearButton.addEventListener(
                      "keydown",
                      function (t) {
                        13 === t.keyCode && e._clearSearchBox(t);
                      },
                      !1
                    );
                }),
                (e.prototype._handleBlur = function (e) {
                  var t = this;
                  this._clearOnly
                    ? this._searchBoxField.focus()
                    : (this._searchBox.removeEventListener("keyup", this._boundEnableClose),
                      setTimeout(function () {
                        t._searchBox.contains(document.activeElement) ||
                          (t._clearSearchBox(), t._collapseSearchBox(), t.setCollapsedListeners());
                      }, 10)),
                    (this._clearOnly = !1);
                }),
                (e.prototype._setBlurAction = function () {
                  this._searchBoxField.addEventListener("blur", this._boundHandleBlur, !0),
                    this._searchBoxClearButton.addEventListener("blur", this._boundHandleBlur, !0);
                }),
                (e.prototype._checkState = function () {
                  this._searchBox.classList.contains("is-collapsed") && this.setCollapsedListeners();
                }),
                (e.prototype._addAnimation = function () {
                  this._container.classList.add("is-animated");
                }),
                e
              );
            })();
          e.SearchBox = i;
        })(n || (n = {})),
        (function (e) {
          var t = (function () {
            function t(e, t) {
              (this._container = e),
                (this._command = this._container),
                (this._commandButton = this._command.querySelector(".ms-CommandButton-button")),
                (this._splitButton = this._command.querySelector(".ms-CommandButton-splitIcon")),
                (this._contextualMenu = t || this._container.querySelector(".ms-ContextualMenu")),
                this._checkForMenu();
            }
            return (
              (t.prototype._createModalHostView = function () {
                this._modalHostView = new e.ContextualHost(this._contextualMenu, "bottom", this._command, !1);
              }),
              (t.prototype._setClick = function () {
                this._splitButton
                  ? this._splitButton.addEventListener("click", this._createModalHostView.bind(this), !1)
                  : this._commandButton.addEventListener("click", this._createModalHostView.bind(this), !1);
              }),
              (t.prototype._checkForMenu = function () {
                this._contextualMenu && this._setClick();
              }),
              t
            );
          })();
          e.CommandButton = t;
        })(n || (n = {})),
        (function (e) {
          "use strict";
          var t = ".ms-SearchBox",
            n = ".ms-CommandBar-mainArea",
            i = ".ms-CommandBar-sideCommands",
            r = ".ms-CommandBar-overflowButton",
            o = "ms-CommandButton--noLabel",
            a = ".ms-Icon",
            s = (function () {
              function s(e) {
                (this.responsiveSizes = { "sm-min": 320, "md-min": 480, "lg-min": 640, "xl-min": 1024, "xxl-min": 1366, "xxxl-min": 1920 }),
                  (this.visibleCommands = []),
                  (this.commandWidths = []),
                  (this.overflowCommands = []),
                  (this.itemCollection = []),
                  (this._sideAreaCollection = []),
                  (this.breakpoint = "sm"),
                  (this._container = e),
                  (this.responsiveSizes["sm-max"] = this.responsiveSizes["md-min"] - 1),
                  (this.responsiveSizes["md-max"] = this.responsiveSizes["lg-min"] - 1),
                  (this.responsiveSizes["lg-max"] = this.responsiveSizes["xl-min"] - 1),
                  (this.responsiveSizes["xl-max"] = this.responsiveSizes["xxl-min"] - 1),
                  (this.responsiveSizes["xxl-max"] = this.responsiveSizes["xxxl-min"] - 1),
                  this._setElements(),
                  this._setBreakpoint(),
                  this._elements.overflowCommand && this._initOverflow(),
                  this._setUIState();
              }
              return (
                (s.prototype._runsSearchBox = function (e) {
                  void 0 === e && (e = "add"), this._changeSearchState("is-collapsed", e);
                }),
                (s.prototype._runOverflow = function () {
                  this._elements.overflowCommand &&
                    (this._saveCommandWidths(), this._redrawMenu(), this._updateCommands(), this._drawCommands(), this._checkOverflow());
                }),
                (s.prototype._initOverflow = function () {
                  this._createContextualRef(),
                    this._createItemCollection(this.itemCollection, n),
                    this._createItemCollection(this._sideAreaCollection, i),
                    this._saveCommandWidths(),
                    this._updateCommands(),
                    this._drawCommands(),
                    this._setWindowEvent(),
                    this._checkOverflow();
                }),
                (s.prototype._hasClass = function (e, t) {
                  return (" " + e.className + " ").indexOf(" " + t + " ") > -1;
                }),
                (s.prototype._onSearchExpand = function () {
                  "lg" === this.breakpoint && (this._container.classList.add("search-expanded"), this._doResize());
                }),
                (s.prototype._onSearchCollapse = function () {
                  "lg" === this.breakpoint && (this._container.classList.remove("search-expanded"), this._doResize());
                }),
                (s.prototype._getScreenSize = function () {
                  var e = window,
                    t = { x: 0, y: 0 },
                    n = document,
                    i = n.documentElement,
                    r = n.getElementsByTagName("body")[0];
                  return (
                    (t.x = e.innerWidth || i.clientWidth || r.clientWidth), (t.y = e.innerHeight || i.clientHeight || r.clientHeight), t
                  );
                }),
                (s.prototype._setBreakpoint = function () {
                  var e = this._getScreenSize().x;
                  switch (!0) {
                    case e <= this.responsiveSizes["sm-max"]:
                      this.breakpoint = "sm";
                      break;
                    case e >= this.responsiveSizes["md-min"] && e <= this.responsiveSizes["md-max"]:
                      this.breakpoint = "md";
                      break;
                    case e >= this.responsiveSizes["lg-min"] && e <= this.responsiveSizes["lg-max"]:
                      this.breakpoint = "lg";
                      break;
                    case e >= this.responsiveSizes["xl-min"] && e <= this.responsiveSizes["xl-max"]:
                      this.breakpoint = "xl";
                      break;
                    case e >= this.responsiveSizes["xxl-min"] && e <= this.responsiveSizes["xxl-max"]:
                      this.breakpoint = "xxl";
                      break;
                    case e >= this.responsiveSizes["xxxl-min"]:
                      this.breakpoint = "xxxl";
                  }
                }),
                (s.prototype._createSearchInstance = function () {
                  return !!this._elements.searchBox && new e.SearchBox(this._elements.searchBox);
                }),
                (s.prototype._changeSearchState = function (e, t) {
                  if (this._elements.searchBox)
                    switch (t) {
                      case "remove":
                        this._elements.searchBox.classList.remove(e);
                        break;
                      case "add":
                        this._elements.searchBox.classList.add(e);
                    }
                }),
                (s.prototype._setElements = function () {
                  var e = this;
                  (this._elements = { mainArea: this._container.querySelector(n) }),
                    this._container.querySelector(i) && (this._elements.sideCommandArea = this._container.querySelector(i)),
                    this._container.querySelector(r) &&
                      ((this._elements.overflowCommand = this._container.querySelector(r)),
                      (this._elements.contextMenu = this._container.querySelector(r).querySelector(".ms-ContextualMenu"))),
                    this._container.querySelector(n + " " + t) &&
                      ((this._elements.searchBox = this._container.querySelector(n + " " + t)),
                      (this._elements.searchBoxClose = this._container.querySelector(".ms-SearchBox-closeField")),
                      (this.searchBoxInstance = this._createSearchInstance()),
                      this.searchBoxInstance.getInputField().addEventListener(
                        "focus",
                        function () {
                          e._onSearchExpand();
                        },
                        !1
                      ),
                      this.searchBoxInstance.getInputField().addEventListener(
                        "searchCollapse",
                        function () {
                          e._onSearchCollapse();
                        },
                        !1
                      ));
                }),
                (s.prototype._createItemCollection = function (t, n) {
                  var i,
                    s,
                    u,
                    c = this._container.querySelectorAll(n + " > .ms-CommandButton:not(" + r + ")");
                  this._commandButtonInstance = new e.CommandButton(this._elements.overflowCommand);
                  for (var l = 0; l < c.length; l++) {
                    s = (i = c[l]).querySelector(".ms-CommandButton-label").textContent;
                    var d = i.querySelector(a);
                    if (d) {
                      u = d.className.split(" ");
                      for (var f = 0; f < u.length; f++)
                        if (u[f].indexOf(a.replace(".", "") + "--") > -1) {
                          d = u[f];
                          break;
                        }
                    }
                    t.push({
                      item: i,
                      label: s,
                      icon: d,
                      isCollapsed: !!i.classList.contains(o),
                      commandButtonRef: new e.CommandButton(i)
                    });
                  }
                }),
                (s.prototype._createContextualRef = function () {
                  (this.contextualItemContainerRef = this._elements.contextMenu.querySelector(".ms-ContextualMenu-item").cloneNode(!0)),
                    (this.contextualItemLink = this._elements.contextMenu.querySelector(".ms-ContextualMenu-link").cloneNode(!1)),
                    (this.contextualItemIcon = this._elements.contextMenu.querySelector(".ms-Icon").cloneNode(!1)),
                    (this._elements.contextMenu.innerHTML = "");
                }),
                (s.prototype._getElementWidth = function (e) {
                  var t, n;
                  return (
                    null === e.offsetParent && e.setAttribute("style", "position: absolute; opacity: 0; display: block;"),
                    (t = e.getBoundingClientRect().width),
                    (n = window.getComputedStyle(e)),
                    (t += parseInt(n.marginLeft, 10) + parseInt(n.marginRight, 10)),
                    e.setAttribute("style", ""),
                    t
                  );
                }),
                (s.prototype._saveCommandWidths = function () {
                  for (var e = 0; e < this.itemCollection.length; e++) {
                    var t = this.itemCollection[e].item,
                      n = this._getElementWidth(t);
                    this.commandWidths[e] = n;
                  }
                }),
                (s.prototype._updateCommands = function () {
                  var e = 0,
                    t = this._elements.mainArea.getBoundingClientRect().width;
                  this._elements.searchBox && (e = this._getElementWidth(this._elements.searchBox));
                  var n = t - (e + 40 + 30);
                  (this.visibleCommands = []), (this.overflowCommands = []);
                  for (var i = 0, r = 0; r < this.itemCollection.length; r++)
                    (i += this.commandWidths[r]) < n
                      ? this.visibleCommands.push(this.itemCollection[r])
                      : this.overflowCommands.push(this.itemCollection[r]);
                }),
                (s.prototype._drawCommands = function () {
                  this._elements.contextMenu.innerHTML = "";
                  for (var e = 0; e < this.overflowCommands.length; e++) {
                    this.overflowCommands[e].item.classList.add("is-hidden");
                    var t = this.contextualItemContainerRef.cloneNode(!1),
                      n = this.contextualItemLink.cloneNode(!1),
                      i = this.overflowCommands[e].icon;
                    if (((n.innerText = this.overflowCommands[e].label), t.appendChild(n), i)) {
                      var r = this.contextualItemIcon.cloneNode(!1);
                      (r.className = a.replace(".", "") + " " + i), t.appendChild(r);
                    }
                    this._elements.contextMenu.appendChild(t);
                  }
                  for (var o = 0; o < this.visibleCommands.length; o++) this.visibleCommands[o].item.classList.remove("is-hidden");
                }),
                (s.prototype._setWindowEvent = function () {
                  var e = this;
                  window.addEventListener(
                    "resize",
                    function () {
                      e._doResize();
                    },
                    !1
                  );
                }),
                (s.prototype._processCollapsedClasses = function (e) {
                  for (var t = 0; t < this.itemCollection.length; t++) {
                    (n = this.itemCollection[t]).isCollapsed || ("add" === e ? n.item.classList.add(o) : n.item.classList.remove(o));
                  }
                  for (t = 0; t < this._sideAreaCollection.length; t++) {
                    var n;
                    (n = this._sideAreaCollection[t]).isCollapsed || ("add" === e ? n.item.classList.add(o) : n.item.classList.remove(o));
                  }
                }),
                (s.prototype._setUIState = function () {
                  switch (this.breakpoint) {
                    case "sm":
                    case "md":
                      this._runsSearchBox(), this._processCollapsedClasses("add"), this._runOverflow();
                      break;
                    case "lg":
                      this._runsSearchBox(), this._processCollapsedClasses("remove"), this._runOverflow();
                      break;
                    default:
                      this._runsSearchBox("remove"), this._processCollapsedClasses("remove"), this._runOverflow();
                  }
                }),
                (s.prototype._checkOverflow = function () {
                  this.overflowCommands.length > 0
                    ? this._elements.overflowCommand.classList.remove("is-hidden")
                    : (this._elements.overflowCommand.classList.add("is-hidden"),
                      this.activeCommand === this._elements.overflowCommand && this._elements.contextMenu.classList.remove("is-open"));
                }),
                (s.prototype._redrawMenu = function () {
                  var e;
                  this._hasClass(this._elements.contextMenu, "is-open") &&
                    ((e = this.activeCommand.getBoundingClientRect().left), this._drawOverflowMenu(e));
                }),
                (s.prototype._drawOverflowMenu = function (e) {
                  this._elements.contextMenu.setAttribute("style", "left: " + e + "px; transform: translateX(-50%)");
                }),
                (s.prototype._doResize = function () {
                  this._setBreakpoint(), this._setUIState();
                }),
                s
              );
            })();
          e.CommandBar = s;
        })(n || (n = {})),
        (function (e) {
          var t = (function () {
            function t(e, t, n) {
              (this._container = e),
                (this._hostTarget = t),
                (this._position = n || "bottom"),
                (this._isOpen = !1),
                this._setOpener(t),
                this._init();
            }
            return (
              (t.prototype.getHost = function () {
                return this._host;
              }),
              (t.prototype._init = function () {
                this._container.addEventListener("click", this._onContextualMenuClick.bind(this), !0),
                  document.addEventListener("click", this._onDocumentClick.bind(this), !1);
              }),
              (t.prototype._onDocumentClick = function (e) {
                if (e.target instanceof HTMLElement) {
                  var t = e.target,
                    n = t.classList;
                  this._hostTarget.contains(t) || n.contains("ms-ContextualMenu-link") || (this._isOpen = !1);
                }
              }),
              (t.prototype._onContextualMenuClick = function (e) {
                var t = e.target,
                  n = t.classList;
                n.contains("ms-ContextualMenu-link") &&
                  !n.contains("is-disabled") &&
                  (this._container.classList.contains("ms-ContextualMenu--multiselect")
                    ? this._multiSelect(t)
                    : (this._singleSelect(t),
                      t.parentElement.classList.contains("ms-ContextualMenu-item--hasMenu") ||
                        (this._host.disposeModal(), (this._isOpen = !1))));
              }),
              (t.prototype._multiSelect = function (e) {
                e.classList.contains("is-selected") ? e.classList.remove("is-selected") : e.classList.add("is-selected");
              }),
              (t.prototype._singleSelect = function (e) {
                for (var t = this._container.querySelectorAll(".is-selected"), n = t.length; n--; ) t[n].classList.remove("is-selected");
                e.classList.add("is-selected");
              }),
              (t.prototype._toggleMenu = function (e) {
                this._isOpen ? this._host.disposeModal() : this._openContextMenu(e), (this._isOpen = !this._isOpen);
              }),
              (t.prototype._setOpener = function (e) {
                var t = this;
                e.addEventListener("click", function (e) {
                  e.preventDefault(), t._toggleMenu(e);
                });
              }),
              (t.prototype._openContextMenu = function (e) {
                this._createModalHostView(this._container, this._position, this._hostTarget), this._checkForSubmenus(this._container);
              }),
              (t.prototype._checkForSubmenus = function (t) {
                var n = this,
                  i = t.querySelectorAll(".ms-ContextualMenu-item.ms-ContextualMenu-item--hasMenu"),
                  r = i.length;
                if (i.length)
                  for (
                    var o = function () {
                      var t = i[r].querySelector(".ms-ContextualMenu-link"),
                        o = i[r].querySelector(".ms-ContextualMenu");
                      if (o) {
                        var a = new e.ContextualMenu(o, t, "right");
                        o.addEventListener("hostAdded", function () {
                          n._host.setChildren(a.getHost());
                        });
                      }
                    };
                    r--;

                  )
                    o();
              }),
              (t.prototype._createModalHostView = function (t, n, i) {
                t.classList.remove("is-hidden"), (this._host = new e.ContextualHost(t, n, i, !1));
                var r = document.createEvent("Event");
                r.initEvent("hostAdded", !0, !0), t.dispatchEvent(r);
              }),
              t
            );
          })();
          e.ContextualMenu = t;
        })(n || (n = {})),
        (function (e) {
          var t = (function () {
            function e(e, t) {
              var n = this,
                i = $(e),
                r = i
                  .find(".ms-TextField-field")
                  .pickadate(
                    $.extend(
                      {
                        weekdaysShort: ["S", "M", "T", "W", "T", "F", "S"],
                        clear: "",
                        close: "",
                        today: "",
                        onStart: function () {
                          n.initCustomView(i);
                        },
                        klass: {
                          input: "ms-DatePicker-input",
                          active: "ms-DatePicker-input--active",
                          picker: "ms-DatePicker-picker",
                          opened: "ms-DatePicker-picker--opened",
                          focused: "ms-DatePicker-picker--focused",
                          holder: "ms-DatePicker-holder",
                          frame: "ms-DatePicker-frame",
                          wrap: "ms-DatePicker-wrap",
                          box: "ms-DatePicker-dayPicker",
                          header: "ms-DatePicker-header",
                          month: "ms-DatePicker-month",
                          year: "ms-DatePicker-year",
                          table: "ms-DatePicker-table",
                          weekdays: "ms-DatePicker-weekday",
                          day: "ms-DatePicker-day",
                          disabled: "ms-DatePicker-day--disabled",
                          selected: "ms-DatePicker-day--selected",
                          highlighted: "ms-DatePicker-day--highlighted",
                          now: "ms-DatePicker-day--today",
                          infocus: "ms-DatePicker-day--infocus",
                          outfocus: "ms-DatePicker-day--outfocus"
                        }
                      },
                      t || {}
                    )
                  )
                  .pickadate("picker");
              (this.picker = r),
                r.on({
                  render: function () {
                    n.updateCustomView(i);
                  }
                });
            }
            return (
              (e.prototype.initCustomView = function (e) {
                var t = this,
                  n = e.find(".ms-DatePicker-monthComponents"),
                  i = e.find(".ms-DatePicker-goToday"),
                  r = e.find(".ms-DatePicker-monthPicker"),
                  o = e.find(".ms-DatePicker-yearPicker"),
                  a = e.find(".ms-DatePicker-wrap"),
                  s = e.find(".ms-TextField-field").pickadate("picker");
                n.appendTo(a),
                  i.appendTo(a),
                  r.appendTo(a),
                  o.appendTo(a),
                  this.updateCustomView(e),
                  s.on("open", function (e) {
                    var t = document.createEvent("MouseEvents");
                    t.initEvent("click", !0, !0), document.dispatchEvent(t);
                  }),
                  n.on("click", ".js-prevMonth", function (e) {
                    e.preventDefault();
                    var n = s.get("highlight").month - 1;
                    t.changeHighlightedDate([null, n, null]);
                  }),
                  n.on("click", ".js-nextMonth", function (e) {
                    e.preventDefault();
                    var n = s.get("highlight").month + 1;
                    t.changeHighlightedDate([null, n, null]);
                  }),
                  r.on("click", ".js-prevYear", function (e) {
                    e.preventDefault();
                    var n = s.get("highlight").year - 1;
                    t.changeHighlightedDate([n, null, null]);
                  }),
                  r.on("click", ".js-nextYear", function (e) {
                    e.preventDefault();
                    var n = s.get("highlight").year + 1;
                    t.changeHighlightedDate([n, null, null]);
                  }),
                  o.on("click", ".js-prevDecade", function (e) {
                    e.preventDefault();
                    var n = s.get("highlight").year - 10;
                    t.changeHighlightedDate([n, null, null]);
                  }),
                  o.on("click", ".js-nextDecade", function (e) {
                    e.preventDefault();
                    var n = s.get("highlight").year + 10;
                    t.changeHighlightedDate([n, null, null]);
                  }),
                  i.click(function (t) {
                    t.preventDefault();
                    var n = new Date();
                    s.set("select", [n.getFullYear(), n.getMonth(), n.getDate()]),
                      e.removeClass("is-pickingMonths").removeClass("is-pickingYears");
                  }),
                  r.on("click", ".js-changeDate", function (n) {
                    n.preventDefault();
                    var i = $(n.target),
                      r = i.attr("data-year"),
                      o = i.attr("data-month"),
                      a = i.attr("data-day");
                    t.changeHighlightedDate([r, o, a]), e.hasClass("is-pickingMonths") && e.removeClass("is-pickingMonths");
                  }),
                  o.on("click", ".js-changeDate", function (n) {
                    n.preventDefault();
                    var i = $(n.target),
                      r = i.attr("data-year"),
                      o = i.attr("data-month"),
                      a = i.attr("data-day");
                    t.changeHighlightedDate([r, o, a]), e.hasClass("is-pickingYears") && e.removeClass("is-pickingYears");
                  }),
                  r.on("click", ".js-showDayPicker", function () {
                    e.removeClass("is-pickingMonths"), e.removeClass("is-pickingYears");
                  }),
                  n.on("click", ".js-showMonthPicker", function () {
                    e.toggleClass("is-pickingMonths");
                  }),
                  r.on("click", ".js-showYearPicker", function () {
                    e.toggleClass("is-pickingYears");
                  });
              }),
              (e.prototype.changeHighlightedDate = function (e) {
                var t = this.setDateAttributes(e);
                this.picker.set("highlight", t);
              }),
              (e.prototype.updateCustomView = function (e) {
                var t = e.find(".ms-DatePicker-monthPicker"),
                  n = e.find(".ms-DatePicker-yearPicker"),
                  i = e.find(".ms-TextField-field").pickadate("picker");
                t.find(".ms-DatePicker-currentYear").text(i.get("view").year),
                  t.find(".ms-DatePicker-monthOption").removeClass("is-highlighted"),
                  t.find(".ms-DatePicker-monthOption[data-month='" + i.get("highlight").month + "']").addClass("is-highlighted"),
                  n.find(".ms-DatePicker-currentDecade").remove(),
                  n.find(".ms-DatePicker-optionGrid").remove();
                var r = i.get("highlight").year - 11,
                  o = "<div class='ms-DatePicker-currentDecade'>" + (r + " - " + (r + 11)) + "</div>";
                o += "<div class='ms-DatePicker-optionGrid'>";
                for (var a = r; a < r + 12; a++)
                  o += "<span class='ms-DatePicker-yearOption js-changeDate' data-year='" + a + "'>" + a + "</span>";
                (o += "</div>"),
                  n.append(o),
                  n.find(".ms-DatePicker-yearOption").removeClass("is-highlighted"),
                  n.find(".ms-DatePicker-yearOption[data-year='" + i.get("highlight").year + "']").addClass("is-highlighted");
              }),
              (e.prototype.setDateAttributes = function (e) {
                var t = e[0],
                  n = e[1],
                  i = e[2];
                return (
                  null != t || (t = this.picker.get("highlight").year),
                  null != n || (n = this.picker.get("highlight").month),
                  null != i || (i = this.picker.get("highlight").date),
                  [t, n, i]
                );
              }),
              e
            );
          })();
          e.DatePicker = t;
        })(n || (n = {})),
        (function (e) {
          var t = (function () {
            function e(e) {
              if (e) this.overlayElement = e;
              else {
                var t = document.createElement("div");
                t.setAttribute("class", "ms-Overlay"), (this.overlayElement = t);
              }
              this.overlayElement.addEventListener("click", this.hide.bind(this), !1);
            }
            return (
              (e.prototype.remove = function () {
                this.overlayElement.parentElement.removeChild(this.overlayElement);
              }),
              (e.prototype.show = function () {
                this.overlayElement.classList.add("is-visible"), document.body.classList.add("ms-u-overflowHidden");
              }),
              (e.prototype.hide = function () {
                this.overlayElement.classList.remove("is-visible"), document.body.classList.remove("ms-u-overflowHidden");
              }),
              e
            );
          })();
          e.Overlay = t;
        })(n || (n = {})),
        (function (e) {
          var t = (function () {
            function t(e) {
              (this._dialog = e),
                (this._closeButtonElement = this._dialog.querySelector(".ms-Dialog-buttonClose")),
                (this._actionButtonElements = this._dialog.querySelectorAll(".ms-Dialog-action")),
                this._closeButtonElement && this._closeButtonElement.addEventListener("click", this.close.bind(this), !1);
              for (var t = 0; t < this._actionButtonElements.length; t++)
                this._actionButtonElements[t].addEventListener("click", this.close.bind(this), !1);
            }
            return (
              (t.prototype.close = function () {
                this._overlay.remove(),
                  this._dialog.classList.remove("is-open"),
                  document.body.classList.remove("ms-u-overflowHidden"),
                  this._overlay.overlayElement.removeEventListener("click", this.close.bind(this));
              }),
              (t.prototype.open = function () {
                this._dialog.classList.add("is-open"),
                  (this._overlay = new e.Overlay()),
                  this._dialog.classList.contains("ms-Dialog--blocking") ||
                    (this._overlay.overlayElement.addEventListener("click", this.close.bind(this), !1),
                    this._overlay.show(),
                    document.body.classList.add("ms-u-overflowHidden")),
                  this._dialog.parentElement.appendChild(this._overlay.overlayElement);
              }),
              t
            );
          })();
          e.Dialog = t;
        })(n || (n = {})),
        (function (e) {
          var t = function () {};
          e.DialogHost = t;
        })(n || (n = {})),
        (function (e) {
          var t = (function () {
            function t(e, t) {
              (this._layer = e), (this._callBack = t), this._createElements(), this._renderElements();
            }
            return (
              (t.prototype.dismiss = function () {
                this.overlay.hide(), document.body.removeChild(this.panelHost);
              }),
              (t.prototype.update = function (e, t) {
                this.panelHost.replaceChild(e, this._layer), t && t();
              }),
              (t.prototype._renderElements = function () {
                document.body.appendChild(this.panelHost), this._callBack && this._callBack(this._layer);
              }),
              (t.prototype._createElements = function () {
                (this.panelHost = document.createElement("div")),
                  this.panelHost.classList.add("ms-PanelHost"),
                  this.panelHost.appendChild(this._layer),
                  (this.overlay = new e.Overlay(this._overlayContainer)),
                  this.overlay.show(),
                  this.panelHost.appendChild(this.overlay.overlayElement);
              }),
              t
            );
          })();
          e.PanelHost = t;
        })(n || (n = {})),
        (function (e) {
          var t = "animate-in",
            n = "animate-out",
            i = (function () {
              function i(t, n, i) {
                (this._panel = t),
                  (this._direction = n || "right"),
                  (this._animateOverlay = i || !0),
                  (this.panelHost = new e.PanelHost(this._panel, this._animateInPanel)),
                  (this._closeButton = this._panel.querySelector(".ms-PanelAction-close")),
                  (this._clickHandler = this.dismiss.bind(this, null)),
                  this._setEvents(),
                  document.body.setAttribute("style", "height: 100%; overflow: hidden;");
              }
              return (
                (i.prototype.dismiss = function (e) {
                  var t = this;
                  this._panel.classList.add(n),
                    setTimeout(function () {
                      t._panel.classList.remove(n),
                        t._panel.classList.remove("is-open"),
                        t.panelHost.dismiss(),
                        e && e(),
                        document.body.setAttribute("style", "");
                    }, 400),
                    null !== this._closeButton && this._closeButton.removeEventListener("click", this._clickHandler);
                }),
                (i.prototype._setEvents = function () {
                  this.panelHost.overlay.overlayElement.addEventListener("click", this._clickHandler),
                    null !== this._closeButton && this._closeButton.addEventListener("click", this._clickHandler);
                }),
                (i.prototype._animateInPanel = function (e) {
                  e.classList.add(t),
                    e.classList.add("is-open"),
                    setTimeout(function () {
                      e.classList.remove(t);
                    }, 400);
                }),
                i
              );
            })();
          e.Panel = i;
        })(n || (n = {})),
        (function (e) {
          var t = "ms-Dropdown",
            n = "ms-Dropdown-title",
            i = "ms-Dropdown-item",
            r = "is-open",
            o = "is-disabled",
            a = "is-selected",
            s = (function () {
              function s(e) {
                (this._container = e),
                  (this._dropdownLabelHelper = document.createElement("span")),
                  this._dropdownLabelHelper.classList.add("ms-Dropdown-truncator"),
                  this._dropdownLabelHelper.classList.add(n),
                  (this._newDropdownLabel = document.createElement("span")),
                  this._newDropdownLabel.classList.add(n),
                  (this._newDropdown = document.createElement("ul")),
                  this._newDropdown.classList.add("ms-Dropdown-items"),
                  (this._dropdownItems = []),
                  (this._originalDropdown = e.querySelector(".ms-Dropdown-select"));
                var t = this._originalDropdown.querySelectorAll("option");
                (this._onCloseDropdown = this._onCloseDropdown.bind(this)),
                  (this._onItemSelection = this._onItemSelection.bind(this)),
                  (this._onOpenDropdown = this._onOpenDropdown.bind(this));
                for (var r = 0; r < t.length; ++r) {
                  var s = t[r];
                  s.selected && (this._newDropdownLabel.innerHTML = s.text);
                  var u = document.createElement("li");
                  u.classList.add(i),
                    s.disabled && u.classList.add(o),
                    s.selected && u.classList.add(a),
                    (u.innerHTML = s.text),
                    u.addEventListener("click", this._onItemSelection),
                    this._newDropdown.appendChild(u),
                    this._dropdownItems.push({ oldOption: s, newItem: u });
                }
                e.appendChild(this._newDropdownLabel),
                  e.appendChild(this._newDropdown),
                  e.appendChild(this._dropdownLabelHelper),
                  this._newDropdownLabel.addEventListener("click", this._onOpenDropdown),
                  this._checkTruncation(),
                  this._setWindowEvent();
              }
              return (
                (s.prototype._setWindowEvent = function () {
                  var e = this;
                  window.addEventListener(
                    "resize",
                    function () {
                      e._doResize(), e._checkTruncation();
                    },
                    !1
                  );
                }),
                (s.prototype._checkTruncation = function () {
                  var e = this._newDropdown.querySelector("." + a),
                    t = e ? e.textContent : this._newDropdown.querySelectorAll("." + i)[0].textContent;
                  if (
                    ((this._dropdownLabelHelper.textContent = t),
                    this._dropdownLabelHelper.offsetHeight > this._newDropdownLabel.offsetHeight)
                  ) {
                    var n = 0,
                      r = void 0;
                    do {
                      n--, (r = t.slice(0, n)), (this._dropdownLabelHelper.textContent = r + "...");
                    } while (this._dropdownLabelHelper.offsetHeight > this._newDropdownLabel.offsetHeight);
                  }
                  this._newDropdownLabel.textContent = this._dropdownLabelHelper.textContent;
                }),
                (s.prototype._getScreenSize = function () {
                  var e = window,
                    t = { x: 0, y: 0 },
                    n = document,
                    i = n.documentElement,
                    r = n.getElementsByTagName("body")[0];
                  return (
                    (t.x = e.innerWidth || i.clientWidth || r.clientWidth), (t.y = e.innerHeight || i.clientHeight || r.clientHeight), t
                  );
                }),
                (s.prototype._doResize = function () {
                  this._container.classList.contains(r) &&
                    (this._getScreenSize().x <= 479 ? this._openDropdownAsPanel() : this._removeDropdownAsPanel());
                }),
                (s.prototype._openDropdownAsPanel = function () {
                  void 0 === this._panel &&
                    ((this._panelContainer = document.createElement("div")),
                    this._panelContainer.classList.add("ms-Panel"),
                    this._panelContainer.classList.add(t),
                    this._panelContainer.classList.add(r),
                    this._panelContainer.classList.add("animate-in"),
                    this._panelContainer.appendChild(this._newDropdown),
                    (this._panel = new e.Panel(this._panelContainer)));
                }),
                (s.prototype._removeDropdownAsPanel = function (e) {
                  var t = this;
                  void 0 !== this._panel &&
                    (e && e.target === this._panel.panelHost.overlay.overlayElement
                      ? this._container.appendChild(this._newDropdown)
                      : this._panel.dismiss(function () {
                          t._container.appendChild(t._newDropdown);
                        }),
                    (this._panel = void 0));
                }),
                (s.prototype._onOpenDropdown = function (e) {
                  var t = this._container.classList.contains(o),
                    n = this._container.classList.contains(r);
                  t ||
                    n ||
                    (e.stopPropagation(),
                    this._closeOtherDropdowns(),
                    this._container.classList.add(r),
                    document.addEventListener("click", this._onCloseDropdown),
                    this._getScreenSize().x <= 479 && this._openDropdownAsPanel());
                }),
                (s.prototype._closeOtherDropdowns = function () {
                  for (var e = document.querySelectorAll("." + t + "." + r), n = 0; n < e.length; n++) e[n].classList.remove(r);
                }),
                (s.prototype._onCloseDropdown = function (e) {
                  this._removeDropdownAsPanel(e),
                    this._container.classList.remove(r),
                    document.removeEventListener("click", this._onCloseDropdown);
                }),
                (s.prototype._onItemSelection = function (e) {
                  var t = e.target,
                    n = this._container.classList.contains(o),
                    i = t.classList.contains(o);
                  if (!n && !i) {
                    for (var r = 0; r < this._dropdownItems.length; ++r)
                      this._dropdownItems[r].newItem === t
                        ? (this._dropdownItems[r].newItem.classList.add(a), (this._dropdownItems[r].oldOption.selected = !0))
                        : (this._dropdownItems[r].newItem.classList.remove(a), (this._dropdownItems[r].oldOption.selected = !1));
                    (this._newDropdownLabel.innerHTML = t.textContent), this._checkTruncation();
                    var s = document.createEvent("HTMLEvents");
                    s.initEvent("change", !1, !0), this._originalDropdown.dispatchEvent(s);
                  }
                }),
                s
              );
            })();
          e.Dropdown = s;
        })(n || (n = {})),
        (function (e) {
          var t = (function () {
            function t(e) {
              this._container = e;
              var t = this._container.querySelector(".ms-PersonaCard-action.is-active").getAttribute("data-action-id");
              (this._actions = this._container.querySelector(".ms-PersonaCard-actions")),
                (this._expander = this._container.querySelector(".ms-PersonaCard-detailExpander")),
                (this._actionDetailBox = this._container.querySelector(".ms-PersonaCard-actionDetailBox")),
                this._setDetail(t),
                (this._boundOnActionClick = this._onActionClick.bind(this)),
                (this._boundOnExpanderClick = this._onExpanderClick.bind(this)),
                (this._boundOnTab = this._onTab.bind(this)),
                this._addListeners();
            }
            return (
              (t.prototype.removeListeners = function () {
                this._actions.removeEventListener("click", this._boundOnActionClick),
                  this._expander.removeEventListener("click", this._boundOnExpanderClick),
                  this._container.removeEventListener("keydown", this._boundOnTab);
              }),
              (t.prototype._addListeners = function () {
                this._actions.addEventListener("click", this._boundOnActionClick, !1),
                  this._expander.addEventListener("click", this._boundOnExpanderClick, !1),
                  this._container.addEventListener("keydown", this._boundOnTab, !1);
              }),
              (t.prototype._onTab = function (e) {
                var t = e.target;
                9 === e.keyCode && t.classList.contains("ms-PersonaCard-action") && this._onActionClick(e);
              }),
              (t.prototype._onExpanderClick = function (e) {
                var t = e.target.parentElement;
                t.classList.contains("is-collapsed") ? t.classList.remove("is-collapsed") : t.classList.add("is-collapsed");
                var n = t.clientHeight;
                this._animateDetail(n);
              }),
              (t.prototype._onActionClick = function (e) {
                var t = e.target,
                  n = t.getAttribute("data-action-id");
                n && -1 === t.className.indexOf("is-active") && (this._setAction(t), this._setDetail(n));
              }),
              (t.prototype._setAction = function (e) {
                this._container.querySelector(".ms-PersonaCard-action.is-active").classList.remove("is-active"),
                  e.classList.add("is-active");
              }),
              (t.prototype._setDetail = function (e) {
                var t = ".ms-PersonaCard-details[data-detail-id='" + e + "']",
                  n = this._container.querySelector(".ms-PersonaCard-details.is-active"),
                  i = this._container.querySelector(t);
                n && n.classList.remove("is-active"), i.classList.add("is-active");
                var r = i.clientHeight;
                this._animateDetail(r);
              }),
              (t.prototype._animateDetail = function (t) {
                var n = this;
                (this._actionDetailBox.style.overflowY = "hidden"),
                  e.Animate.transition(this._actionDetailBox, {
                    height: t,
                    duration: 0.25,
                    ease: e.Ease.SINE_EASE_OUT,
                    onEnd: function () {
                      n._actionDetailBox.style.overflowY = "auto";
                    }
                  });
              }),
              t
            );
          })();
          e.PersonaCard = t;
        })(n || (n = {})),
        (function (e) {
          var t = (function () {
            function t(e) {
              (this._persona = e),
                (this._personaCard = this._persona.querySelector(".ms-PersonaCard")),
                this._personaCard &&
                  (this._assignEvents(), this._personaCard.setAttribute("style", "display: none;"), this._createPersonaCard());
            }
            return (
              (t.prototype._createPersonaCard = function () {
                this._personaCardInstance = new e.PersonaCard(this._personaCard);
              }),
              (t.prototype._createContextualHostInstance = function () {
                this._personaCard.setAttribute("style", "display: block;"),
                  (this._contextualHostInstance = new e.ContextualHost(this._personaCard, "top", this._persona));
              }),
              (t.prototype._personaEventHandler = function () {
                this._createContextualHostInstance();
              }),
              (t.prototype._assignEvents = function () {
                var e = this;
                this._persona.addEventListener("click", this._personaEventHandler.bind(this), !1),
                  this._persona.addEventListener(
                    "keyup",
                    function (t) {
                      return 32 === t.keyCode ? e._personaEventHandler() : null;
                    },
                    !1
                  );
              }),
              t
            );
          })();
          e.Persona = t;
        })(n || (n = {})),
        (function (e) {
          var t = ".ms-Persona-image",
            n = ".ms-Persona-primaryText",
            i = ".ms-Persona-secondaryText",
            r = (function () {
              function r(e) {
                (this._personaCollection = []), (this._facePile = e), this._createPersonaCollection();
              }
              return (
                (r.prototype._createPersonaCollection = function () {
                  for (var r = document.querySelectorAll(".ms-Persona--facePile"), o = 0; o < r.length; o++) {
                    var a = r[o];
                    this._personaCollection.push({
                      item: a,
                      initials: a.querySelector(".ms-Persona-initials").textContent,
                      image: a.querySelector(t) ? a.querySelector(t).getAttribute("src") : null,
                      primaryText: a.querySelector(n) ? a.querySelector(n).textContent : "",
                      secondaryText: a.querySelector(i) ? a.querySelector(i).textContent : "",
                      personaInstance: new e.Persona(a)
                    });
                  }
                }),
                r
              );
            })();
          e.FacePile = r;
        })(n || (n = {})),
        (function (e) {
          var t = (function () {
            function e(e) {
              (this._container = e),
                (this._toggleElement = this._container.querySelector(".ms-ListItem-selectionTarget")),
                this._addListeners();
            }
            return (
              (e.prototype.removeListeners = function () {
                this._toggleElement.removeEventListener("click", this._toggleHandler.bind(this));
              }),
              (e.prototype._addListeners = function () {
                this._toggleElement.addEventListener("click", this._toggleHandler.bind(this), !1);
              }),
              (e.prototype._toggleHandler = function () {
                this._container.classList.toggle("is-selected");
              }),
              e
            );
          })();
          e.ListItem = t;
        })(n || (n = {})),
        (function (e) {
          var t = function (t) {
            (this._container = t), (this._listItemComponents = []);
            for (var n = this._container.querySelectorAll(".ms-ListItem"), i = 0; i < n.length; i++)
              this._listItemComponents[i] = new e.ListItem(n[i]);
          };
          e.List = t;
        })(n || (n = {})),
        (function (e) {
          "use strict";
          var t = (function () {
            function e(e) {
              (this._textContainerMaxWidth = 700),
                (this._bufferElementsWidth = 88),
                (this._bufferElementsWidthSmall = 35),
                (this.SMALL_BREAK_POINT = 480),
                (this.container = e),
                this.init();
            }
            return (
              (e.prototype.init = function () {
                this._cacheDOM(),
                  this._setListeners(),
                  (this._clientWidth = this._errorBanner.offsetWidth),
                  (this._initTextWidth = this._clipper.offsetWidth),
                  this._onResize();
              }),
              (e.prototype.show = function () {
                this._errorBanner.className = "ms-MessageBanner";
              }),
              (e.prototype.showBanner = function () {
                this.show();
              }),
              (e.prototype.hide = function () {
                -1 === this._errorBanner.className.indexOf("hide") &&
                  ((this._errorBanner.className += " hide"), setTimeout(this._hideMessageBanner.bind(this), 500));
              }),
              (e.prototype._hideMessageBanner = function () {
                this._errorBanner.className = "ms-MessageBanner is-hidden";
              }),
              (e.prototype._onResize = function () {
                (this._clientWidth = this._errorBanner.offsetWidth),
                  window.innerWidth >= this.SMALL_BREAK_POINT ? this._resizeRegular() : this._resizeSmall();
              }),
              (e.prototype._resizeRegular = function () {
                this._clientWidth - this._bufferSize > this._initTextWidth && this._initTextWidth < this._textContainerMaxWidth
                  ? ((this._textWidth = "auto"), (this._chevronButton.className = "ms-MessageBanner-expand"), this._collapse())
                  : ((this._textWidth = Math.min(this._clientWidth - this._bufferSize, this._textContainerMaxWidth) + "px"),
                    -1 === this._chevronButton.className.indexOf("is-visible") && (this._chevronButton.className += " is-visible")),
                  (this._clipper.style.width = this._textWidth);
              }),
              (e.prototype._resizeSmall = function () {
                this._clientWidth - (this._bufferElementsWidthSmall + this._closeButton.offsetWidth) > this._initTextWidth
                  ? ((this._textWidth = "auto"), this._collapse())
                  : (this._textWidth = this._clientWidth - (this._bufferElementsWidthSmall + this._closeButton.offsetWidth) + "px"),
                  (this._clipper.style.width = this._textWidth);
              }),
              (e.prototype._cacheDOM = function () {
                (this._errorBanner = this.container),
                  (this._clipper = this.container.querySelector(".ms-MessageBanner-clipper")),
                  (this._chevronButton = this.container.querySelector(".ms-MessageBanner-expand")),
                  (this._actionButton = this.container.querySelector(".ms-MessageBanner-action")),
                  (this._bufferSize = this._actionButton.offsetWidth + this._bufferElementsWidth),
                  (this._closeButton = this.container.querySelector(".ms-MessageBanner-close"));
              }),
              (e.prototype._expand = function () {
                var e = this._chevronButton.querySelector(".ms-Icon");
                (this._errorBanner.className += " is-expanded"), (e.className = "ms-Icon ms-Icon--DoubleChevronUp");
              }),
              (e.prototype._collapse = function () {
                var e = this._chevronButton.querySelector(".ms-Icon");
                (this._errorBanner.className = "ms-MessageBanner"), (e.className = "ms-Icon ms-Icon--DoubleChevronDown");
              }),
              (e.prototype._toggleExpansion = function () {
                this._errorBanner.className.indexOf("is-expanded") > -1 ? this._collapse() : this._expand();
              }),
              (e.prototype._setListeners = function () {
                window.addEventListener("resize", this._onResize.bind(this), !1),
                  this._chevronButton.addEventListener("click", this._toggleExpansion.bind(this), !1),
                  this._closeButton.addEventListener("click", this.hide.bind(this), !1);
              }),
              e
            );
          })();
          e.MessageBanner = t;
        })(n || (n = {})),
        (function (e) {
          var t = (function () {
            function t(e) {
              (this._container = e),
                (this._peoplePickerMenu = this._container.querySelector(".ms-PeoplePicker-results")),
                (this._peoplePickerSearch = this._container.querySelector(".ms-TextField-field")),
                (this._peoplePickerSearchBox = this._container.querySelector(".ms-PeoplePicker-searchBox")),
                (this._selectedPeople = this._container.querySelector(".ms-PeoplePicker-selectedPeople")),
                this._assignClicks(),
                this._selectedPeople &&
                  (this._assignRemoveHandler(),
                  (this._selectedCount = this._container.querySelector(".ms-PeoplePicker-selectedCount")),
                  (this._selectedPlural = this._container.querySelector(".ms-PeoplePicker-selectedCountPlural"))),
                this._peoplePickerMenu && this._peoplePickerMenu.setAttribute("style", "display: none;");
            }
            return (
              (t.prototype._createModalHost = function (t) {
                t.stopPropagation(),
                  this._peoplePickerMenu.setAttribute("style", "display: block;"),
                  (this._contextualHostView = new e.ContextualHost(
                    this._peoplePickerMenu,
                    "bottom",
                    this._peoplePickerSearchBox,
                    !1,
                    [""],
                    !0,
                    this._contextHostCallBack.bind(this)
                  )),
                  this._peoplePickerSearchBox.classList.add("is-active"),
                  (this._isContextualMenuOpen = !0);
              }),
              (t.prototype._clickHandler = function (e) {
                this._createModalHost(e);
                var t = this._peoplePickerMenu.querySelector(".ms-PeoplePicker-result").parentNode,
                  n = t.cloneNode(!0);
                t.parentNode.replaceChild(n, t),
                  (this._peoplePickerResults = this._peoplePickerMenu.querySelectorAll(".ms-PeoplePicker-result"));
                for (var i = 0; i < this._peoplePickerResults.length; i++) {
                  var r = this._peoplePickerResults[i].querySelector(".ms-Persona"),
                    o = this._peoplePickerResults[i].querySelector(".ms-PeoplePicker-resultAction");
                  r.addEventListener("click", this._selectResult.bind(this), !0),
                    o.addEventListener("click", this._removeItem.bind(this), !0);
                }
              }),
              (t.prototype._selectResult = function (e) {
                e.stopPropagation();
                var t = this._findElement(e.target, "ms-Persona").cloneNode(!0);
                this._container.classList.contains("ms-PeoplePicker--facePile") ? this._addResultToMembers(t) : this._tokenizeResult(t),
                  this._updateCount(),
                  this._contextualHostView.disposeModal();
              }),
              (t.prototype._findElement = function (e, t) {
                for (var n = e.parentNode; !n.classList.contains(t); ) n = n.parentNode;
                return n;
              }),
              (t.prototype._addRemoveBtn = function (e, t) {
                var n,
                  i = document.createElement("i");
                t
                  ? ((n = document.createElement("div")).classList.add("ms-Persona-actionIcon"),
                    n.addEventListener("click", this._removeToken.bind(this), !0))
                  : ((n = document.createElement("button")).classList.add("ms-PeoplePicker-resultAction"),
                    n.addEventListener("click", this._removeResult.bind(this), !0)),
                  i.classList.add("ms-Icon", "ms-Icon--Cancel"),
                  n.appendChild(i),
                  e.appendChild(n);
              }),
              (t.prototype._removeToken = function (e) {
                this._findElement(e.target, "ms-Persona").remove();
              }),
              (t.prototype._removeResult = function (e) {
                this._findElement(e.target, "ms-PeoplePicker-selectedPerson").remove(), this._updateCount();
              }),
              (t.prototype._removeItem = function (e) {
                this._findElement(e.target, "ms-PeoplePicker-result").remove();
              }),
              (t.prototype._updateCount = function () {
                if (this._selectedPeople) {
                  var e = this._selectedPeople.querySelectorAll(".ms-PeoplePicker-selectedPerson").length;
                  (this._selectedCount.textContent = e.toString()), (this._selectedPlural.style.display = 1 === e ? "none" : "inline");
                }
              }),
              (t.prototype._tokenizeResult = function (e) {
                var t = this._container.querySelector(".ms-PeoplePicker-searchBox"),
                  n = t.querySelector(".ms-TextField");
                e.classList.add("ms-Persona--token", "ms-PeoplePicker-persona"),
                  this._addRemoveBtn(e, !0),
                  e.classList.contains("ms-Persona--sm") && (e.classList.remove("ms-Persona--sm"), e.classList.add("ms-Persona--xs")),
                  t.insertBefore(e, n);
              }),
              (t.prototype._addResultToMembers = function (e) {
                var t = this._container.querySelector(".ms-PeoplePicker-selectedPeople"),
                  n = t.querySelector(".ms-PeoplePicker-selectedPerson"),
                  i = document.createElement("li");
                i.classList.add("ms-PeoplePicker-selectedPerson"),
                  (i.tabIndex = 1),
                  i.appendChild(e),
                  this._addRemoveBtn(i, !1),
                  i.querySelector(".ms-PeoplePicker-resultAction").addEventListener("click", this._removeResult.bind(this), !0),
                  t.insertBefore(i, n);
              }),
              (t.prototype._assignClicks = function () {
                var e = this;
                this._peoplePickerSearch.addEventListener("click", this._clickHandler.bind(this), !0),
                  this._peoplePickerSearch.addEventListener(
                    "keyup",
                    function (t) {
                      27 === t.keyCode || e._isContextualMenuOpen || e._clickHandler(t);
                    },
                    !0
                  );
              }),
              (t.prototype._assignRemoveHandler = function () {
                for (var e = this._selectedPeople.querySelectorAll(".ms-PeoplePicker-selectedPerson"), t = 0; t < e.length; t++)
                  e[t].querySelector(".ms-PeoplePicker-resultAction").addEventListener("click", this._removeResult.bind(this), !0);
              }),
              (t.prototype._contextHostCallBack = function () {
                this._peoplePickerSearchBox.classList.remove("is-active"), (this._isContextualMenuOpen = !1);
              }),
              t
            );
          })();
          e.PeoplePicker = t;
        })(n || (n = {})),
        (function (e) {
          var t = (function () {
            function e(e) {
              (this._container = e), this._addListeners(), (this._container.querySelector(".ms-Pivot-content").style.display = "block");
            }
            return (
              (e.prototype.removeListeners = function () {
                this._container.removeEventListener("click", this._selectTab.bind(this));
              }),
              (e.prototype._addListeners = function () {
                var e = this;
                this._container.querySelector(".ms-Pivot-links").addEventListener("click", this._selectTabMouse.bind(this), !1),
                  this._container.addEventListener(
                    "keyup",
                    function (t) {
                      13 === t.keyCode && e._selectTabKeyboard(t);
                    },
                    !0
                  );
              }),
              (e.prototype._selectTab = function (e) {
                if (e.classList.contains("ms-Pivot-link") && !e.querySelector(".ms-Pivot-ellipsis")) {
                  for (var t = e.parentElement.firstElementChild; t; ) t.classList.remove("is-selected"), (t = t.nextElementSibling);
                  e.classList.add("is-selected");
                  var n = this._container.querySelectorAll(".ms-Pivot-content");
                  Array.prototype.forEach.call(n, function (e, t) {
                    e.style.display = "none";
                  });
                  var i = e.getAttribute("data-content");
                  this._container.querySelector(".ms-Pivot-content[data-content='" + i + "']").style.display = "block";
                }
              }),
              (e.prototype._selectTabMouse = function (e) {
                e.preventDefault();
                var t = e.target;
                this._selectTab(t);
              }),
              (e.prototype._selectTabKeyboard = function (e) {
                e.preventDefault();
                var t = e.target;
                this._selectTab(t);
              }),
              e
            );
          })();
          e.Pivot = t;
        })(n || (n = {})),
        (function (e) {
          "use strict";
          var t = (function () {
            function e(e) {
              (this.container = e), this.cacheDOM();
            }
            return (
              (e.prototype.setProgressPercent = function (e) {
                this._progressBar.style.width = Math.round(this._width * e) + "px";
              }),
              (e.prototype.setProgress = function (e) {
                this._progress = e;
                var t = this._progress / this._total;
                this.setProgressPercent(t);
              }),
              (e.prototype.setTotal = function (e) {
                this._total = e;
              }),
              (e.prototype.setName = function (e) {
                this._itemName.innerHTML = e;
              }),
              (e.prototype.setDescription = function (e) {
                this._itemDescription.innerHTML = e;
              }),
              (e.prototype.cacheDOM = function () {
                (this._itemName = this.container.querySelector(".ms-ProgressIndicator-itemName") || null),
                  (this._itemDescription = this.container.querySelector(".ms-ProgressIndicator-itemDescription") || null),
                  (this._progressBar = this.container.querySelector(".ms-ProgressIndicator-progressBar"));
                var e = this.container.querySelector(".ms-ProgressIndicator-itemProgress");
                this._width = e.offsetWidth;
              }),
              e
            );
          })();
          e.ProgressIndicator = t;
        })(n || (n = {})),
        (function (e) {
          var t = function (e, t) {
              (this.element = e), (this.j = t);
            },
            n = (function () {
              function e(e) {
                (this.eightSize = 0.2),
                  (this.animationSpeed = 90),
                  (this.parentSize = 20),
                  (this.fadeIncrement = 0),
                  (this.circleObjects = []),
                  (this._target = e),
                  this._init();
              }
              return (
                (e.prototype.start = function () {
                  var e = this;
                  this.stop(),
                    (this.interval = setInterval(function () {
                      for (var t = e.circleObjects.length; t--; ) e._fade(e.circleObjects[t]);
                    }, this.animationSpeed));
                }),
                (e.prototype.stop = function () {
                  clearInterval(this.interval);
                }),
                (e.prototype._init = function () {
                  this._setTargetElement(),
                    this._setPropertiesForSize(),
                    this._createCirclesAndArrange(),
                    this._initializeOpacities(),
                    this.start();
                }),
                (e.prototype._setPropertiesForSize = function () {
                  this.spinner.className.indexOf("large") > -1 && ((this.parentSize = 28), (this.eightSize = 0.179)),
                    (this.offsetSize = this.eightSize),
                    (this.numCircles = 8);
                }),
                (e.prototype._setTargetElement = function () {
                  -1 === this._target.className.indexOf("ms-Spinner")
                    ? ((this.spinner = document.createElement("div")),
                      (this.spinner.className = "ms-Spinner"),
                      this._target.appendChild(this.spinner))
                    : (this.spinner = this._target);
                }),
                (e.prototype._initializeOpacities = function () {
                  var e,
                    t = 0,
                    n = 1;
                  for (this.fadeIncrement = 1 / this.numCircles; t < this.numCircles; t++) {
                    var i = this.circleObjects[t];
                    (e = this.fadeIncrement * n++), this._setOpacity(i.element, e);
                  }
                }),
                (e.prototype._fade = function (e) {
                  var t = this._getOpacity(e.element) - this.fadeIncrement;
                  t <= 0 && (t = 1), this._setOpacity(e.element, t);
                }),
                (e.prototype._getOpacity = function (e) {
                  return parseFloat(window.getComputedStyle(e).getPropertyValue("opacity"));
                }),
                (e.prototype._setOpacity = function (e, t) {
                  e.style.opacity = t.toString();
                }),
                (e.prototype._createCircle = function () {
                  var e = document.createElement("div");
                  return (
                    (e.className = "ms-Spinner-circle"), (e.style.width = e.style.height = this.parentSize * this.offsetSize + "px"), e
                  );
                }),
                (e.prototype._createCirclesAndArrange = function () {
                  for (
                    var e,
                      n = 0,
                      i = this.parentSize * this.offsetSize,
                      r = (2 * Math.PI) / this.numCircles,
                      o = this.numCircles,
                      a = 0.5 * (this.parentSize - i);
                    o--;

                  ) {
                    var s = this._createCircle(),
                      u = Math.round(0.5 * this.parentSize + a * Math.cos(n) - 0.5 * s.clientWidth) - 0.5 * i,
                      c = Math.round(0.5 * this.parentSize + a * Math.sin(n) - 0.5 * s.clientHeight) - 0.5 * i;
                    this.spinner.appendChild(s),
                      (s.style.left = u + "px"),
                      (s.style.top = c + "px"),
                      (n += r),
                      (e = new t(s, o)),
                      this.circleObjects.push(e);
                  }
                }),
                e
              );
            })();
          e.Spinner = n;
        })(n || (n = {})),
        (function (e) {
          "use strict";
          var t = (function () {
            function e(e) {
              (this.container = e), -1 !== this.container.className.indexOf("ms-Table--selectable") && this._addListeners();
            }
            return (
              (e.prototype._addListeners = function () {
                this.container.addEventListener("click", this._toggleRowSelection.bind(this), !1);
              }),
              (e.prototype._toggleRowSelection = function (e) {
                var t = e.target.parentElement;
                if ("TR" === t.tagName) {
                  var n = "is-selected";
                  t.className === n ? (t.className = "") : (t.className = n);
                }
              }),
              e
            );
          })();
          e.Table = t;
        })(n || (n = {})),
        (function (e) {
          var t;
          !(function (e) {
            !(function (e) {
              (e[(e.Placeholder = 0)] = "Placeholder"), (e[(e.Underlined = 1)] = "Underlined");
            })(e.Type || (e.Type = {})),
              e.Type;
          })(t || (t = {}));
          var n = (function () {
            function e(e) {
              (this._container = e),
                (this._type = []),
                (this._textField = this._container.querySelector(".ms-TextField-field")),
                (this._textFieldLabel = this._container.querySelector(".ms-Label")),
                this._setTextFieldType(),
                this._addListeners();
            }
            return (
              (e.prototype._setTextFieldType = function () {
                this._container.classList.contains("ms-TextField--placeholder") && this._type.push(t.Type.Placeholder),
                  this._container.classList.contains("ms-TextField--underlined") && this._type.push(t.Type.Underlined);
              }),
              (e.prototype._addListeners = function () {
                var e = this;
                this._textFieldLabel.addEventListener("click", function (t) {
                  e._textField.focus();
                }),
                  this._type.indexOf(t.Type.Placeholder) >= 0 &&
                    (this._textField.addEventListener("focus", function (t) {
                      e._textFieldLabel.style.display = "none";
                    }),
                    this._textField.addEventListener("blur", function (t) {
                      0 === e._textField.value.length && (e._textFieldLabel.style.display = "block");
                    })),
                  this._type.indexOf(t.Type.Underlined) >= 0 &&
                    (this._textField.addEventListener("focus", function (t) {
                      e._container.classList.add("is-active");
                    }),
                    this._textField.addEventListener("blur", function (t) {
                      e._container.classList.remove("is-active");
                    }));
              }),
              e
            );
          })();
          e.TextField = n;
        })(n || (n = {})),
        (function (e) {
          var t = (function () {
            function e(e) {
              (this._container = e), (this._toggleField = this._container.querySelector(".ms-Toggle-field")), this._addListeners();
            }
            return (
              (e.prototype.removeListeners = function () {
                this._toggleField.removeEventListener("click", this._toggleHandler.bind(this));
              }),
              (e.prototype._addListeners = function () {
                var e = this;
                this._toggleField.addEventListener("click", this._toggleHandler.bind(this), !1),
                  this._toggleField.addEventListener(
                    "keyup",
                    function (t) {
                      return 32 === t.keyCode ? e._toggleHandler() : null;
                    },
                    !1
                  );
              }),
              (e.prototype._toggleHandler = function () {
                this._toggleField.classList.toggle("is-selected");
              }),
              e
            );
          })();
          e.Toggle = t;
        })(n || (n = {}));
    },
    8081: function (e) {
      var t;
      (t = function () {
        return (function (e) {
          var t = {};
          function n(i) {
            if (t[i]) return t[i].exports;
            var r = (t[i] = { exports: {}, id: i, loaded: !1 });
            return e[i].call(r.exports, r, r.exports, n), (r.loaded = !0), r.exports;
          }
          return (n.m = e), (n.c = t), (n.p = ""), n(0);
        })([
          function (e, t, n) {
            var i, r;
            (i = [n(1)]),
              void 0 ===
                (r = function (e) {
                  var t = {},
                    n = function () {
                      return navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
                    },
                    i = function () {
                      return navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
                    },
                    r = function () {
                      return navigator.userAgent.toLowerCase().indexOf("safari") > -1;
                    },
                    o = function () {
                      return document.documentMode && document.documentMode >= 11;
                    },
                    a = function () {
                      (this.count = 0), (this.pending = []);
                    };
                  (a.prototype.incr = function () {
                    this.count++;
                  }),
                    (a.prototype.decr = function () {
                      this.count--, this.flush();
                    }),
                    (a.prototype.whenReady = function (e) {
                      this.pending.push(e), this.flush();
                    }),
                    (a.prototype.flush = function () {
                      0 === this.count &&
                        (this.pending.forEach(function (e) {
                          e();
                        }),
                        (this.pending = []));
                    });
                  var s = function (e) {
                    (this.sem = new a()), (this.sync = e && e.sync), (this.mapForUri = e && e.cacheGlobally ? t : {});
                  };
                  (s.prototype.ajax = function (e, t) {
                    var n = (function () {
                        for (var e = !1, t = 0; t < h.length; t++) {
                          try {
                            e = h[t]();
                          } catch (e) {
                            continue;
                          }
                          break;
                        }
                        return e;
                      })(),
                      i = this;
                    (n.onreadystatechange = function () {
                      4 == n.readyState && t.call(i, n, e);
                    }),
                      n.open("GET", e, !this.sync),
                      n.send();
                  }),
                    (s.prototype.fetchScript = function (e) {
                      e in this.mapForUri || (this.sem.incr(), (this.mapForUri[e] = null), this.ajax(e, this.onScriptLoad));
                    });
                  var u = new RegExp("^(?:[a-z]+:)?//", "i");
                  s.prototype.onScriptLoad = function (t, n) {
                    if (200 === t.status || ("file://" === n.slice(0, 7) && 0 === t.status)) {
                      var i = t.responseText.match("//# [s]ourceMappingURL=(.*)[\\s]*$", "m");
                      if (i && 2 === i.length) {
                        var r = i[1],
                          o = r.match("data:application/json;(charset=[^;]+;)?base64,(.*)");
                        if (o && o[2]) (this.mapForUri[n] = new e.SourceMapConsumer(atob(o[2]))), this.sem.decr();
                        else {
                          if (!u.test(r)) {
                            var a,
                              s = n.lastIndexOf("/");
                            -1 !== s && ((a = n.slice(0, s + 1)), (r = a + r));
                          }
                          this.ajax(r, function (t) {
                            (200 === t.status || ("file://" === r.slice(0, 7) && 0 === t.status)) &&
                              (this.mapForUri[n] = new e.SourceMapConsumer(t.responseText)),
                              this.sem.decr();
                          });
                        }
                      } else this.sem.decr();
                    } else this.sem.decr();
                  };
                  var c = function (e, t, n, i) {
                    for (var r, o = [], a = "chrome" === i ? l : d, s = 0; s < e.length; s++) {
                      var u = t[s];
                      if (u) {
                        var c = u[1],
                          h = parseInt(u[2], 10),
                          p = parseInt(u[3], 10);
                        if ((r = n[c])) {
                          var v = r.originalPositionFor({ line: h, column: p });
                          o.push(f(v.source, v.line, v.column, v.name || a(e[s])));
                        } else o.push(f(c, h, p, a(e[s])));
                      } else o.push(e[s]);
                    }
                    return o;
                  };
                  function l(e) {
                    var t = / +at +([^ ]*).*/.exec(e);
                    return t && t[1];
                  }
                  function d(e) {
                    var t = /([^@]*)@.*/.exec(e);
                    return t && t[1];
                  }
                  var f = function (e, t, n, i) {
                      return "    at " + (i || "(unknown)") + " (" + e + ":" + t + ":" + n + ")";
                    },
                    h = [
                      function () {
                        return new XMLHttpRequest();
                      },
                      function () {
                        return new ActiveXObject("Msxml2.XMLHTTP");
                      },
                      function () {
                        return new ActiveXObject("Msxml3.XMLHTTP");
                      },
                      function () {
                        return new ActiveXObject("Microsoft.XMLHTTP");
                      }
                    ];
                  return {
                    mapStackTrace: function (e, t, a) {
                      var u,
                        l,
                        d,
                        f,
                        h,
                        p,
                        v,
                        m = {},
                        g = new s(a),
                        y = a && a.traceFormat;
                      if ("chrome" !== y && "firefox" !== y) {
                        if (y) throw new Error('unknown traceFormat "' + y + '" :(');
                        if (n() || o()) y = "chrome";
                        else {
                          if (!i() && !r()) throw new Error("unknown browser :(");
                          y = "firefox";
                        }
                      }
                      "chrome" === y
                        ? ((p = /^ +at.+\((.*):([0-9]+):([0-9]+)/), (h = 4), (v = 1))
                        : ((p = /@(.*):([0-9]+):([0-9]+)/), (h = 4), (v = 0)),
                        (u = e.split("\n").slice(v));
                      for (var _ = 0; _ < u.length; _++)
                        (l = u[_]),
                          (a && a.filter && !a.filter(l)) ||
                            ((d = l.match(p)) && d.length === h && ((m[_] = d), (f = d[1]).match(/<anonymous>/) || g.fetchScript(f)));
                      g.sem.whenReady(function () {
                        var e = c(u, m, g.mapForUri, y);
                        t(e);
                      });
                    }
                  };
                }.apply(t, i)) || (e.exports = r);
          },
          function (e, t, n) {
            var i = n(2),
              r = n(3),
              o = n(4).ArraySet,
              a = n(5),
              s = n(7).quickSort;
            function u(e) {
              var t = e;
              return "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, ""))), null != t.sections ? new d(t) : new c(t);
            }
            function c(e) {
              var t = e;
              "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
              var n = i.getArg(t, "version"),
                r = i.getArg(t, "sources"),
                a = i.getArg(t, "names", []),
                s = i.getArg(t, "sourceRoot", null),
                u = i.getArg(t, "sourcesContent", null),
                c = i.getArg(t, "mappings"),
                l = i.getArg(t, "file", null);
              if (n != this._version) throw new Error("Unsupported version: " + n);
              (r = r
                .map(String)
                .map(i.normalize)
                .map(function (e) {
                  return s && i.isAbsolute(s) && i.isAbsolute(e) ? i.relative(s, e) : e;
                })),
                (this._names = o.fromArray(a.map(String), !0)),
                (this._sources = o.fromArray(r, !0)),
                (this.sourceRoot = s),
                (this.sourcesContent = u),
                (this._mappings = c),
                (this.file = l);
            }
            function l() {
              (this.generatedLine = 0),
                (this.generatedColumn = 0),
                (this.source = null),
                (this.originalLine = null),
                (this.originalColumn = null),
                (this.name = null);
            }
            function d(e) {
              var t = e;
              "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
              var n = i.getArg(t, "version"),
                r = i.getArg(t, "sections");
              if (n != this._version) throw new Error("Unsupported version: " + n);
              (this._sources = new o()), (this._names = new o());
              var a = { line: -1, column: 0 };
              this._sections = r.map(function (e) {
                if (e.url) throw new Error("Support for url field in sections not implemented.");
                var t = i.getArg(e, "offset"),
                  n = i.getArg(t, "line"),
                  r = i.getArg(t, "column");
                if (n < a.line || (n === a.line && r < a.column)) throw new Error("Section offsets must be ordered and non-overlapping.");
                return (a = t), { generatedOffset: { generatedLine: n + 1, generatedColumn: r + 1 }, consumer: new u(i.getArg(e, "map")) };
              });
            }
            (u.fromSourceMap = function (e) {
              return c.fromSourceMap(e);
            }),
              (u.prototype._version = 3),
              (u.prototype.__generatedMappings = null),
              Object.defineProperty(u.prototype, "_generatedMappings", {
                get: function () {
                  return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
                }
              }),
              (u.prototype.__originalMappings = null),
              Object.defineProperty(u.prototype, "_originalMappings", {
                get: function () {
                  return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
                }
              }),
              (u.prototype._charIsMappingSeparator = function (e, t) {
                var n = e.charAt(t);
                return ";" === n || "," === n;
              }),
              (u.prototype._parseMappings = function (e, t) {
                throw new Error("Subclasses must implement _parseMappings");
              }),
              (u.GENERATED_ORDER = 1),
              (u.ORIGINAL_ORDER = 2),
              (u.GREATEST_LOWER_BOUND = 1),
              (u.LEAST_UPPER_BOUND = 2),
              (u.prototype.eachMapping = function (e, t, n) {
                var r,
                  o = t || null;
                switch (n || u.GENERATED_ORDER) {
                  case u.GENERATED_ORDER:
                    r = this._generatedMappings;
                    break;
                  case u.ORIGINAL_ORDER:
                    r = this._originalMappings;
                    break;
                  default:
                    throw new Error("Unknown order of iteration.");
                }
                var a = this.sourceRoot;
                r.map(function (e) {
                  var t = null === e.source ? null : this._sources.at(e.source);
                  return (
                    null != t && null != a && (t = i.join(a, t)),
                    {
                      source: t,
                      generatedLine: e.generatedLine,
                      generatedColumn: e.generatedColumn,
                      originalLine: e.originalLine,
                      originalColumn: e.originalColumn,
                      name: null === e.name ? null : this._names.at(e.name)
                    }
                  );
                }, this).forEach(e, o);
              }),
              (u.prototype.allGeneratedPositionsFor = function (e) {
                var t = i.getArg(e, "line"),
                  n = { source: i.getArg(e, "source"), originalLine: t, originalColumn: i.getArg(e, "column", 0) };
                if ((null != this.sourceRoot && (n.source = i.relative(this.sourceRoot, n.source)), !this._sources.has(n.source)))
                  return [];
                n.source = this._sources.indexOf(n.source);
                var o = [],
                  a = this._findMapping(
                    n,
                    this._originalMappings,
                    "originalLine",
                    "originalColumn",
                    i.compareByOriginalPositions,
                    r.LEAST_UPPER_BOUND
                  );
                if (a >= 0) {
                  var s = this._originalMappings[a];
                  if (void 0 === e.column)
                    for (var u = s.originalLine; s && s.originalLine === u; )
                      o.push({
                        line: i.getArg(s, "generatedLine", null),
                        column: i.getArg(s, "generatedColumn", null),
                        lastColumn: i.getArg(s, "lastGeneratedColumn", null)
                      }),
                        (s = this._originalMappings[++a]);
                  else
                    for (var c = s.originalColumn; s && s.originalLine === t && s.originalColumn == c; )
                      o.push({
                        line: i.getArg(s, "generatedLine", null),
                        column: i.getArg(s, "generatedColumn", null),
                        lastColumn: i.getArg(s, "lastGeneratedColumn", null)
                      }),
                        (s = this._originalMappings[++a]);
                }
                return o;
              }),
              (t.SourceMapConsumer = u),
              (c.prototype = Object.create(u.prototype)),
              (c.prototype.consumer = u),
              (c.fromSourceMap = function (e) {
                var t = Object.create(c.prototype),
                  n = (t._names = o.fromArray(e._names.toArray(), !0)),
                  r = (t._sources = o.fromArray(e._sources.toArray(), !0));
                (t.sourceRoot = e._sourceRoot),
                  (t.sourcesContent = e._generateSourcesContent(t._sources.toArray(), t.sourceRoot)),
                  (t.file = e._file);
                for (
                  var a = e._mappings.toArray().slice(),
                    u = (t.__generatedMappings = []),
                    d = (t.__originalMappings = []),
                    f = 0,
                    h = a.length;
                  f < h;
                  f++
                ) {
                  var p = a[f],
                    v = new l();
                  (v.generatedLine = p.generatedLine),
                    (v.generatedColumn = p.generatedColumn),
                    p.source &&
                      ((v.source = r.indexOf(p.source)),
                      (v.originalLine = p.originalLine),
                      (v.originalColumn = p.originalColumn),
                      p.name && (v.name = n.indexOf(p.name)),
                      d.push(v)),
                    u.push(v);
                }
                return s(t.__originalMappings, i.compareByOriginalPositions), t;
              }),
              (c.prototype._version = 3),
              Object.defineProperty(c.prototype, "sources", {
                get: function () {
                  return this._sources.toArray().map(function (e) {
                    return null != this.sourceRoot ? i.join(this.sourceRoot, e) : e;
                  }, this);
                }
              }),
              (c.prototype._parseMappings = function (e, t) {
                for (
                  var n, r, o, u, c, d = 1, f = 0, h = 0, p = 0, v = 0, m = 0, g = e.length, y = 0, _ = {}, $ = {}, b = [], C = [];
                  y < g;

                )
                  if (";" === e.charAt(y)) d++, y++, (f = 0);
                  else if ("," === e.charAt(y)) y++;
                  else {
                    for ((n = new l()).generatedLine = d, u = y; u < g && !this._charIsMappingSeparator(e, u); u++);
                    if ((o = _[(r = e.slice(y, u))])) y += r.length;
                    else {
                      for (o = []; y < u; ) a.decode(e, y, $), (c = $.value), (y = $.rest), o.push(c);
                      if (2 === o.length) throw new Error("Found a source, but no line and column");
                      if (3 === o.length) throw new Error("Found a source and line, but no column");
                      _[r] = o;
                    }
                    (n.generatedColumn = f + o[0]),
                      (f = n.generatedColumn),
                      o.length > 1 &&
                        ((n.source = v + o[1]),
                        (v += o[1]),
                        (n.originalLine = h + o[2]),
                        (h = n.originalLine),
                        (n.originalLine += 1),
                        (n.originalColumn = p + o[3]),
                        (p = n.originalColumn),
                        o.length > 4 && ((n.name = m + o[4]), (m += o[4]))),
                      C.push(n),
                      "number" == typeof n.originalLine && b.push(n);
                  }
                s(C, i.compareByGeneratedPositionsDeflated),
                  (this.__generatedMappings = C),
                  s(b, i.compareByOriginalPositions),
                  (this.__originalMappings = b);
              }),
              (c.prototype._findMapping = function (e, t, n, i, o, a) {
                if (e[n] <= 0) throw new TypeError("Line must be greater than or equal to 1, got " + e[n]);
                if (e[i] < 0) throw new TypeError("Column must be greater than or equal to 0, got " + e[i]);
                return r.search(e, t, o, a);
              }),
              (c.prototype.computeColumnSpans = function () {
                for (var e = 0; e < this._generatedMappings.length; ++e) {
                  var t = this._generatedMappings[e];
                  if (e + 1 < this._generatedMappings.length) {
                    var n = this._generatedMappings[e + 1];
                    if (t.generatedLine === n.generatedLine) {
                      t.lastGeneratedColumn = n.generatedColumn - 1;
                      continue;
                    }
                  }
                  t.lastGeneratedColumn = 1 / 0;
                }
              }),
              (c.prototype.originalPositionFor = function (e) {
                var t = { generatedLine: i.getArg(e, "line"), generatedColumn: i.getArg(e, "column") },
                  n = this._findMapping(
                    t,
                    this._generatedMappings,
                    "generatedLine",
                    "generatedColumn",
                    i.compareByGeneratedPositionsDeflated,
                    i.getArg(e, "bias", u.GREATEST_LOWER_BOUND)
                  );
                if (n >= 0) {
                  var r = this._generatedMappings[n];
                  if (r.generatedLine === t.generatedLine) {
                    var o = i.getArg(r, "source", null);
                    null !== o && ((o = this._sources.at(o)), null != this.sourceRoot && (o = i.join(this.sourceRoot, o)));
                    var a = i.getArg(r, "name", null);
                    return (
                      null !== a && (a = this._names.at(a)),
                      { source: o, line: i.getArg(r, "originalLine", null), column: i.getArg(r, "originalColumn", null), name: a }
                    );
                  }
                }
                return { source: null, line: null, column: null, name: null };
              }),
              (c.prototype.hasContentsOfAllSources = function () {
                return (
                  !!this.sourcesContent &&
                  this.sourcesContent.length >= this._sources.size() &&
                  !this.sourcesContent.some(function (e) {
                    return null == e;
                  })
                );
              }),
              (c.prototype.sourceContentFor = function (e, t) {
                if (!this.sourcesContent) return null;
                if ((null != this.sourceRoot && (e = i.relative(this.sourceRoot, e)), this._sources.has(e)))
                  return this.sourcesContent[this._sources.indexOf(e)];
                var n;
                if (null != this.sourceRoot && (n = i.urlParse(this.sourceRoot))) {
                  var r = e.replace(/^file:\/\//, "");
                  if ("file" == n.scheme && this._sources.has(r)) return this.sourcesContent[this._sources.indexOf(r)];
                  if ((!n.path || "/" == n.path) && this._sources.has("/" + e)) return this.sourcesContent[this._sources.indexOf("/" + e)];
                }
                if (t) return null;
                throw new Error('"' + e + '" is not in the SourceMap.');
              }),
              (c.prototype.generatedPositionFor = function (e) {
                var t = i.getArg(e, "source");
                if ((null != this.sourceRoot && (t = i.relative(this.sourceRoot, t)), !this._sources.has(t)))
                  return { line: null, column: null, lastColumn: null };
                var n = {
                    source: (t = this._sources.indexOf(t)),
                    originalLine: i.getArg(e, "line"),
                    originalColumn: i.getArg(e, "column")
                  },
                  r = this._findMapping(
                    n,
                    this._originalMappings,
                    "originalLine",
                    "originalColumn",
                    i.compareByOriginalPositions,
                    i.getArg(e, "bias", u.GREATEST_LOWER_BOUND)
                  );
                if (r >= 0) {
                  var o = this._originalMappings[r];
                  if (o.source === n.source)
                    return {
                      line: i.getArg(o, "generatedLine", null),
                      column: i.getArg(o, "generatedColumn", null),
                      lastColumn: i.getArg(o, "lastGeneratedColumn", null)
                    };
                }
                return { line: null, column: null, lastColumn: null };
              }),
              (t.BasicSourceMapConsumer = c),
              (d.prototype = Object.create(u.prototype)),
              (d.prototype.constructor = u),
              (d.prototype._version = 3),
              Object.defineProperty(d.prototype, "sources", {
                get: function () {
                  for (var e = [], t = 0; t < this._sections.length; t++)
                    for (var n = 0; n < this._sections[t].consumer.sources.length; n++) e.push(this._sections[t].consumer.sources[n]);
                  return e;
                }
              }),
              (d.prototype.originalPositionFor = function (e) {
                var t = { generatedLine: i.getArg(e, "line"), generatedColumn: i.getArg(e, "column") },
                  n = r.search(t, this._sections, function (e, t) {
                    var n = e.generatedLine - t.generatedOffset.generatedLine;
                    return n || e.generatedColumn - t.generatedOffset.generatedColumn;
                  }),
                  o = this._sections[n];
                return o
                  ? o.consumer.originalPositionFor({
                      line: t.generatedLine - (o.generatedOffset.generatedLine - 1),
                      column:
                        t.generatedColumn -
                        (o.generatedOffset.generatedLine === t.generatedLine ? o.generatedOffset.generatedColumn - 1 : 0),
                      bias: e.bias
                    })
                  : { source: null, line: null, column: null, name: null };
              }),
              (d.prototype.hasContentsOfAllSources = function () {
                return this._sections.every(function (e) {
                  return e.consumer.hasContentsOfAllSources();
                });
              }),
              (d.prototype.sourceContentFor = function (e, t) {
                for (var n = 0; n < this._sections.length; n++) {
                  var i = this._sections[n].consumer.sourceContentFor(e, !0);
                  if (i) return i;
                }
                if (t) return null;
                throw new Error('"' + e + '" is not in the SourceMap.');
              }),
              (d.prototype.generatedPositionFor = function (e) {
                for (var t = 0; t < this._sections.length; t++) {
                  var n = this._sections[t];
                  if (-1 !== n.consumer.sources.indexOf(i.getArg(e, "source"))) {
                    var r = n.consumer.generatedPositionFor(e);
                    if (r)
                      return {
                        line: r.line + (n.generatedOffset.generatedLine - 1),
                        column: r.column + (n.generatedOffset.generatedLine === r.line ? n.generatedOffset.generatedColumn - 1 : 0)
                      };
                  }
                }
                return { line: null, column: null };
              }),
              (d.prototype._parseMappings = function (e, t) {
                (this.__generatedMappings = []), (this.__originalMappings = []);
                for (var n = 0; n < this._sections.length; n++)
                  for (var r = this._sections[n], o = r.consumer._generatedMappings, a = 0; a < o.length; a++) {
                    var u = o[a],
                      c = r.consumer._sources.at(u.source);
                    null !== r.consumer.sourceRoot && (c = i.join(r.consumer.sourceRoot, c)),
                      this._sources.add(c),
                      (c = this._sources.indexOf(c));
                    var l = r.consumer._names.at(u.name);
                    this._names.add(l), (l = this._names.indexOf(l));
                    var d = {
                      source: c,
                      generatedLine: u.generatedLine + (r.generatedOffset.generatedLine - 1),
                      generatedColumn:
                        u.generatedColumn +
                        (r.generatedOffset.generatedLine === u.generatedLine ? r.generatedOffset.generatedColumn - 1 : 0),
                      originalLine: u.originalLine,
                      originalColumn: u.originalColumn,
                      name: l
                    };
                    this.__generatedMappings.push(d), "number" == typeof d.originalLine && this.__originalMappings.push(d);
                  }
                s(this.__generatedMappings, i.compareByGeneratedPositionsDeflated),
                  s(this.__originalMappings, i.compareByOriginalPositions);
              }),
              (t.IndexedSourceMapConsumer = d);
          },
          function (e, t) {
            t.getArg = function (e, t, n) {
              if (t in e) return e[t];
              if (3 === arguments.length) return n;
              throw new Error('"' + t + '" is a required argument.');
            };
            var n = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,
              i = /^data:.+\,.+$/;
            function r(e) {
              var t = e.match(n);
              return t ? { scheme: t[1], auth: t[2], host: t[3], port: t[4], path: t[5] } : null;
            }
            function o(e) {
              var t = "";
              return (
                e.scheme && (t += e.scheme + ":"),
                (t += "//"),
                e.auth && (t += e.auth + "@"),
                e.host && (t += e.host),
                e.port && (t += ":" + e.port),
                e.path && (t += e.path),
                t
              );
            }
            function a(e) {
              var n = e,
                i = r(e);
              if (i) {
                if (!i.path) return e;
                n = i.path;
              }
              for (var a, s = t.isAbsolute(n), u = n.split(/\/+/), c = 0, l = u.length - 1; l >= 0; l--)
                "." === (a = u[l])
                  ? u.splice(l, 1)
                  : ".." === a
                  ? c++
                  : c > 0 && ("" === a ? (u.splice(l + 1, c), (c = 0)) : (u.splice(l, 2), c--));
              return "" === (n = u.join("/")) && (n = s ? "/" : "."), i ? ((i.path = n), o(i)) : n;
            }
            (t.urlParse = r),
              (t.urlGenerate = o),
              (t.normalize = a),
              (t.join = function (e, t) {
                "" === e && (e = "."), "" === t && (t = ".");
                var n = r(t),
                  s = r(e);
                if ((s && (e = s.path || "/"), n && !n.scheme)) return s && (n.scheme = s.scheme), o(n);
                if (n || t.match(i)) return t;
                if (s && !s.host && !s.path) return (s.host = t), o(s);
                var u = "/" === t.charAt(0) ? t : a(e.replace(/\/+$/, "") + "/" + t);
                return s ? ((s.path = u), o(s)) : u;
              }),
              (t.isAbsolute = function (e) {
                return "/" === e.charAt(0) || !!e.match(n);
              }),
              (t.relative = function (e, t) {
                "" === e && (e = "."), (e = e.replace(/\/$/, ""));
                for (var n = 0; 0 !== t.indexOf(e + "/"); ) {
                  var i = e.lastIndexOf("/");
                  if (i < 0) return t;
                  if ((e = e.slice(0, i)).match(/^([^\/]+:\/)?\/*$/)) return t;
                  ++n;
                }
                return Array(n + 1).join("../") + t.substr(e.length + 1);
              });
            var s = !("__proto__" in Object.create(null));
            function u(e) {
              return e;
            }
            function c(e) {
              if (!e) return !1;
              var t = e.length;
              if (t < 9) return !1;
              if (
                95 !== e.charCodeAt(t - 1) ||
                95 !== e.charCodeAt(t - 2) ||
                111 !== e.charCodeAt(t - 3) ||
                116 !== e.charCodeAt(t - 4) ||
                111 !== e.charCodeAt(t - 5) ||
                114 !== e.charCodeAt(t - 6) ||
                112 !== e.charCodeAt(t - 7) ||
                95 !== e.charCodeAt(t - 8) ||
                95 !== e.charCodeAt(t - 9)
              )
                return !1;
              for (var n = t - 10; n >= 0; n--) if (36 !== e.charCodeAt(n)) return !1;
              return !0;
            }
            function l(e, t) {
              return e === t ? 0 : e > t ? 1 : -1;
            }
            (t.toSetString = s
              ? u
              : function (e) {
                  return c(e) ? "$" + e : e;
                }),
              (t.fromSetString = s
                ? u
                : function (e) {
                    return c(e) ? e.slice(1) : e;
                  }),
              (t.compareByOriginalPositions = function (e, t, n) {
                var i = e.source - t.source;
                return 0 !== i ||
                  0 != (i = e.originalLine - t.originalLine) ||
                  0 != (i = e.originalColumn - t.originalColumn) ||
                  n ||
                  0 != (i = e.generatedColumn - t.generatedColumn) ||
                  0 != (i = e.generatedLine - t.generatedLine)
                  ? i
                  : e.name - t.name;
              }),
              (t.compareByGeneratedPositionsDeflated = function (e, t, n) {
                var i = e.generatedLine - t.generatedLine;
                return 0 !== i ||
                  0 != (i = e.generatedColumn - t.generatedColumn) ||
                  n ||
                  0 != (i = e.source - t.source) ||
                  0 != (i = e.originalLine - t.originalLine) ||
                  0 != (i = e.originalColumn - t.originalColumn)
                  ? i
                  : e.name - t.name;
              }),
              (t.compareByGeneratedPositionsInflated = function (e, t) {
                var n = e.generatedLine - t.generatedLine;
                return 0 !== n ||
                  0 != (n = e.generatedColumn - t.generatedColumn) ||
                  0 !== (n = l(e.source, t.source)) ||
                  0 != (n = e.originalLine - t.originalLine) ||
                  0 != (n = e.originalColumn - t.originalColumn)
                  ? n
                  : l(e.name, t.name);
              });
          },
          function (e, t) {
            function n(e, i, r, o, a, s) {
              var u = Math.floor((i - e) / 2) + e,
                c = a(r, o[u], !0);
              return 0 === c
                ? u
                : c > 0
                ? i - u > 1
                  ? n(u, i, r, o, a, s)
                  : s == t.LEAST_UPPER_BOUND
                  ? i < o.length
                    ? i
                    : -1
                  : u
                : u - e > 1
                ? n(e, u, r, o, a, s)
                : s == t.LEAST_UPPER_BOUND
                ? u
                : e < 0
                ? -1
                : e;
            }
            (t.GREATEST_LOWER_BOUND = 1),
              (t.LEAST_UPPER_BOUND = 2),
              (t.search = function (e, i, r, o) {
                if (0 === i.length) return -1;
                var a = n(-1, i.length, e, i, r, o || t.GREATEST_LOWER_BOUND);
                if (a < 0) return -1;
                for (; a - 1 >= 0 && 0 === r(i[a], i[a - 1], !0); ) --a;
                return a;
              });
          },
          function (e, t, n) {
            var i = n(2),
              r = Object.prototype.hasOwnProperty;
            function o() {
              (this._array = []), (this._set = Object.create(null));
            }
            (o.fromArray = function (e, t) {
              for (var n = new o(), i = 0, r = e.length; i < r; i++) n.add(e[i], t);
              return n;
            }),
              (o.prototype.size = function () {
                return Object.getOwnPropertyNames(this._set).length;
              }),
              (o.prototype.add = function (e, t) {
                var n = i.toSetString(e),
                  o = r.call(this._set, n),
                  a = this._array.length;
                (o && !t) || this._array.push(e), o || (this._set[n] = a);
              }),
              (o.prototype.has = function (e) {
                var t = i.toSetString(e);
                return r.call(this._set, t);
              }),
              (o.prototype.indexOf = function (e) {
                var t = i.toSetString(e);
                if (r.call(this._set, t)) return this._set[t];
                throw new Error('"' + e + '" is not in the set.');
              }),
              (o.prototype.at = function (e) {
                if (e >= 0 && e < this._array.length) return this._array[e];
                throw new Error("No element indexed by " + e);
              }),
              (o.prototype.toArray = function () {
                return this._array.slice();
              }),
              (t.ArraySet = o);
          },
          function (e, t, n) {
            var i = n(6);
            (t.encode = function (e) {
              var t,
                n = "",
                r = (function (e) {
                  return e < 0 ? 1 + (-e << 1) : 0 + (e << 1);
                })(e);
              do {
                (t = 31 & r), (r >>>= 5) > 0 && (t |= 32), (n += i.encode(t));
              } while (r > 0);
              return n;
            }),
              (t.decode = function (e, t, n) {
                var r,
                  o,
                  a,
                  s,
                  u = e.length,
                  c = 0,
                  l = 0;
                do {
                  if (t >= u) throw new Error("Expected more digits in base 64 VLQ value.");
                  if (-1 === (o = i.decode(e.charCodeAt(t++)))) throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
                  (r = !!(32 & o)), (c += (o &= 31) << l), (l += 5);
                } while (r);
                (n.value = ((s = (a = c) >> 1), 1 == (1 & a) ? -s : s)), (n.rest = t);
              });
          },
          function (e, t) {
            var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
            (t.encode = function (e) {
              if (0 <= e && e < n.length) return n[e];
              throw new TypeError("Must be between 0 and 63: " + e);
            }),
              (t.decode = function (e) {
                return 65 <= e && e <= 90
                  ? e - 65
                  : 97 <= e && e <= 122
                  ? e - 97 + 26
                  : 48 <= e && e <= 57
                  ? e - 48 + 52
                  : 43 == e
                  ? 62
                  : 47 == e
                  ? 63
                  : -1;
              });
          },
          function (e, t) {
            function n(e, t, n) {
              var i = e[t];
              (e[t] = e[n]), (e[n] = i);
            }
            function i(e, t, r, o) {
              if (r < o) {
                var a = r - 1;
                n(e, ((l = r), (d = o), Math.round(l + Math.random() * (d - l))), o);
                for (var s = e[o], u = r; u < o; u++) t(e[u], s) <= 0 && n(e, (a += 1), u);
                n(e, a + 1, u);
                var c = a + 1;
                i(e, t, r, c - 1), i(e, t, c + 1, o);
              }
              var l, d;
            }
            t.quickSort = function (e, t) {
              i(e, t, 0, e.length - 1);
            };
          }
        ]);
      }),
        (e.exports = t());
    },
    7582: (e, t, n) => {
      "use strict";
      n.d(t, { Jh: () => s, ZT: () => r, ev: () => u, mG: () => a, pi: () => o });
      var i = function (e, t) {
        return (
          (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }),
          i(e, t)
        );
      };
      function r(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
          this.constructor = e;
        }
        i(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
      }
      var o = function () {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }),
          o.apply(this, arguments)
        );
      };
      function a(e, t, n, i) {
        return new (n || (n = Promise))(function (r, o) {
          function a(e) {
            try {
              u(i.next(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            try {
              u(i.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, s);
          }
          u((i = i.apply(e, t || [])).next());
        });
      }
      function s(e, t) {
        var n,
          i,
          r,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & r[0]) throw r[1];
              return r[1];
            },
            trys: [],
            ops: []
          };
        return (
          (o = { next: s(0), throw: s(1), return: s(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function s(s) {
          return function (u) {
            return (function (s) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; o && ((o = 0), s[0] && (a = 0)), a; )
                try {
                  if (
                    ((n = 1),
                    i &&
                      (r = 2 & s[0] ? i.return : s[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) &&
                      !(r = r.call(i, s[1])).done)
                  )
                    return r;
                  switch (((i = 0), r && (s = [2 & s[0], r.value]), s[0])) {
                    case 0:
                    case 1:
                      r = s;
                      break;
                    case 4:
                      return a.label++, { value: s[1], done: !1 };
                    case 5:
                      a.label++, (i = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (!((r = a.trys), (r = r.length > 0 && r[r.length - 1]) || (6 !== s[0] && 2 !== s[0]))) {
                        a = 0;
                        continue;
                      }
                      if (3 === s[0] && (!r || (s[1] > r[0] && s[1] < r[3]))) {
                        a.label = s[1];
                        break;
                      }
                      if (6 === s[0] && a.label < r[1]) {
                        (a.label = r[1]), (r = s);
                        break;
                      }
                      if (r && a.label < r[2]) {
                        (a.label = r[2]), a.ops.push(s);
                        break;
                      }
                      r[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  s = t.call(e, a);
                } catch (e) {
                  (s = [6, e]), (i = 0);
                } finally {
                  n = r = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, u]);
          };
        }
      }
      Object.create;
      function u(e, t, n) {
        if (n || 2 === arguments.length)
          for (var i, r = 0, o = t.length; r < o; r++) (!i && r in t) || (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
        return e.concat(i || Array.prototype.slice.call(t));
      }
      Object.create;
    }
  }
]);
