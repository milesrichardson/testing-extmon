!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.ScreenShotReader = t())
    : (e.ScreenShotReader = t());
})(window, function () {
  return (function (e) {
    var t = {};
    function i(n) {
      if (t[n]) return t[n].exports;
      var o = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(o.exports, o, o.exports, i), (o.l = !0), o.exports;
    }
    return (
      (i.m = e),
      (i.c = t),
      (i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (i.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (i.t = function (e, t) {
        if ((1 & t && (e = i(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if ((i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
          for (var o in e)
            i.d(
              n,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return n;
      }),
      (i.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return i.d(t, "a", t), t;
      }),
      (i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (i.p = ""),
      i((i.s = 36))
    );
  })({
    36: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, "default", function () {
          return n;
        });
      class n {
        constructor() {
          (this.croppedImage = null),
            (this.ssrData = null),
            (this.ssrText = null),
            this.offsetter,
            this._divWrapper,
            this.mouseDown,
            this.stopSpeaking,
            this.paused,
            (this.startPosition = {}),
            (this._rectToOCR = {}),
            (this.regionIndex = 0),
            (this.sentenceIndex = 0),
            (this._imageProcessor = {}),
            (this.handler = this.handleEvents.bind(this)),
            (this.speechSettings = {
              speechServerURL: "https://rwforg.speechstream.net/SpeechServices/index.html",
              voice: "Ava?",
              speed: "50",
              user: "rwforgdocs"
            });
        }
        initialise() {
          chrome.extension.onRequest.addListener(this.onMessage.bind(this)),
            chrome.runtime.onMessage.addListener(function (e, t, i) {
              alert("Contents Of Text File = " + e.fileData);
            }),
            window.addEventListener("resize", this.stopScreenShotReader, !1);
        }
        startCapture() {
          if (!document.getElementById("texthelp_ocr_wrapper")) {
            var e = document.getElementsByTagName("body")[0],
              t = document.createElement("div"),
              i = document.createElement("div"),
              n = document.createElement("div"),
              o = document.createElement("div"),
              s = document.createElement("div"),
              r = document.createElement("div"),
              d = document.createElement("div"),
              a = document.createElement("div"),
              h = document.createElement("div"),
              l = document.createElement("div"),
              c = document.createElement("div"),
              p = document.createElement("div"),
              u = document.createElement("div"),
              m = document.createElement("canvas");
            (t.id = "texthelp_ocr_wrapper"),
              (i.id = "texthelp_ocr_top"),
              (n.id = "texthelp_ocr_right"),
              (o.id = "texthelp_ocr_left"),
              (s.id = "texthelp_ocr_bottom"),
              (r.id = "texthelp_ocr_center"),
              (d.id = "texthelp_ocr_top_right"),
              (h.id = "texthelp_ocr_actions"),
              (l.id = "texthelp_ocr_play"),
              (c.id = "texthelp_ocr_pause"),
              (p.id = "texthelp_ocr_stop"),
              (u.id = "texthelp_ocr_copy"),
              (a.id = "texthelp_ocr_close"),
              (m.id = "canv");
            m.getContext("2d");
            (m.width = 0),
              (m.height = 0),
              (r.innerHTML =
                '<div id="thSSRload-bar" class="thSSRload-bar" style="visibility: hidden;"><div class="thSSRbar"></div><div class="thSSRbar"></div><div class="thSSRbar"></div></div>'),
              t.appendChild(i),
              t.appendChild(n),
              t.appendChild(o),
              t.appendChild(s),
              t.appendChild(r),
              r.appendChild(a),
              h.appendChild(l),
              h.appendChild(c),
              h.appendChild(p),
              h.appendChild(u),
              r.appendChild(h),
              r.appendChild(m),
              e.appendChild(t),
              this.updateScreenMaskingElement(t),
              (this._divWrapper = t),
              this._divWrapper.addEventListener("mousedown", this.handler, !1);
          }
        }
        getDocumentDimension() {
          return {
            height: Math.max(document.body.scrollHeight, document.documentElement.clientHeight),
            width: Math.max(document.body.scrollWidth, document.documentElement.clientWidth)
          };
        }
        updateScreenMaskingElement(e) {
          var t = this.getDocumentDimension();
          this.setStyle(e, "display", "none"),
            this.setStyle(e, "width", t.width + "px"),
            this.setStyle(e, "height", t.height + "px"),
            this.setStyle(e, "display", "block");
        }
        setStyle(e, t, i) {
          e.style.setProperty(t, i);
        }
        onMouseDown(e) {
          (this.startPosition = { x: e.pageX, y: e.pageY, ratio: window.devicePixelRatio, offsetY: e.offsetY, offsetX: e.offsetX }),
            this._divWrapper.addEventListener("mousemove", this.handler, !1),
            this._divWrapper.addEventListener("mouseup", this.handler, !1);
        }
        onMouseUp(e) {
          if (
            (e.stopPropagation(),
            e.preventDefault(),
            this._divWrapper.removeEventListener("mousemove", this.handler, !1),
            this._divWrapper.removeEventListener("mouseup", this.handler, !1),
            this._divWrapper.removeEventListener("mousedown", this.handler, !1),
            this.removeBackgroundColorMaskElements(),
            this.setStyle(this._divWrapper, "cursor", "default"),
            Math.abs(e.clientX - this.startPosition.x) > 20 || Math.abs(e.clientY - this.startPosition.y) > 20)
          ) {
            this.readScreenArea(this._rectToOCR);
            var t = document.getElementById("thSSRload-bar");
            null !== t && (t.style.visibility = "visible"), this.setMaskPassthrough(!0);
          } else releaseCapture(), startCapture();
        }
        onMouseMove(e) {
          this.setStyle(this._divWrapper, "background-color", "rgba(0,0,0,0)");
          var t = e.pageX - this.startPosition.x,
            i = e.pageY - this.startPosition.y;
          (this._rectToOCR = {
            x: this.startPosition.x,
            y: this.startPosition.y,
            width: t,
            height: i,
            ratio: this.startPosition.ratio,
            pageYOffset: window.pageYOffset,
            pageXOffset: window.pageXOffset,
            speechSettings: this.speechSettings
          }),
            this.drawOCRMask(this._rectToOCR);
        }
        handleEvents(e) {
          switch (((this._divWrapper = document.getElementById("texthelp_ocr_wrapper")), e.which)) {
            case 3:
              return;
          }
          switch (e.type) {
            case "mousedown":
              this.onMouseDown(e);
              break;
            case "mousemove":
              this.onMouseMove(e);
              break;
            case "mouseup":
              this.onMouseUp(e);
          }
        }
        drawOCRMask(e) {
          this.updateCorners(e), this.updateCenter(e);
        }
        removeBackgroundColorMaskElements() {
          var e = document.getElementById("texthelp_ocr_top"),
            t = document.getElementById("texthelp_ocr_right"),
            i = document.getElementById("texthelp_ocr_bottom"),
            n = document.getElementById("texthelp_ocr_left");
          this.setStyle(e, "background-color", "rgba(0,0,0,0)"),
            this.setStyle(t, "background-color", "rgba(0,0,0,0)"),
            this.setStyle(i, "background-color", "rgba(0,0,0,0)"),
            this.setStyle(n, "background-color", "rgba(0,0,0,0)");
        }
        updateCorners(e) {
          var t = this.getDocumentDimension(),
            i = e.width >= 0 ? e.x + e.width : e.x,
            n = e.height >= 0 ? e.y : e.y + e.height,
            o = e.width >= 0 ? t.width - e.x - e.width : t.width - e.x,
            s = e.height >= 0 ? e.y + e.height : e.y,
            r = e.width >= 0 ? t.width - e.x : t.width - e.x - e.width,
            d = t.height - s,
            a = t.width - r,
            h = t.height - n,
            l = document.getElementById("texthelp_ocr_top"),
            c = document.getElementById("texthelp_ocr_right"),
            p = document.getElementById("texthelp_ocr_bottom"),
            u = document.getElementById("texthelp_ocr_left");
          this.setStyle(l, "width", i + "px"),
            this.setStyle(l, "height", n + "px"),
            this.setStyle(c, "width", o + "px"),
            this.setStyle(c, "height", s + "px"),
            this.setStyle(p, "width", r + "px"),
            this.setStyle(p, "height", d + "px"),
            this.setStyle(u, "width", a + "px"),
            this.setStyle(u, "height", h + "px");
        }
        updateCenter(e) {
          var t = e.width >= 0 ? e.x : e.x + e.width,
            i = e.height >= 0 ? e.y : e.y + e.height,
            n = document.getElementById("texthelp_ocr_center");
          this.setStyle(n, "width", Math.abs(e.width) + "px"),
            this.setStyle(n, "height", Math.abs(e.height) + "px"),
            this.setStyle(n, "top", i + "px"),
            this.setStyle(n, "left", t + "px");
        }
        updateCanvasDimensions(e, t) {
          document.getElementById("canv").setAttribute("width", Math.abs(e) + "px"),
            document.getElementById("canv").setAttribute("height", Math.abs(t) + "px");
        }
        stopScreenShotReader() {
          if (null != this.releaseCapture) {
            this.releaseCapture(), (this.stopSpeaking = !1);
            var e = document.getElementById("thSSRload-bar");
            null != e && (e.style.visibility = "hidden");
          }
        }
        stopPlaybackAnimation() {
          var e = document.getElementById("canv").getContext("2d");
          null != e && e.clearRect(0, 0, this._rectToOCR.width * window.devicePixelRatio, this._rectToOCR.height * window.devicePixelRatio);
        }
        releaseCapture() {
          this.paused = !1;
          var e = document.getElementById("texthelp_ocr_wrapper");
          if (null != e) {
            e.parentNode.removeChild(e), (this.stopSpeaking = !0);
            chrome.runtime.sendMessage({ command: "stop" }, function (e) {});
          }
        }
        readScreenArea(e) {
          this.sendOCRMessage(e);
        }
        roundedRect(e, t, i, n, o, s) {
          e.beginPath(),
            e.moveTo(t, i + s),
            e.lineTo(t, i + o - s),
            e.quadraticCurveTo(t, i + o, t + s, i + o),
            e.lineTo(t + n - s, i + o),
            e.quadraticCurveTo(t + n, i + o, t + n, i + o - s),
            e.lineTo(t + n, i + s),
            e.quadraticCurveTo(t + n, i, t + n - s, i),
            e.lineTo(t + s, i),
            e.quadraticCurveTo(t, i, t, i + s),
            e.fill();
        }
        rightRoundedRect(e, t, i, n, o, s) {
          e.beginPath(),
            e.moveTo(t, i),
            e.lineTo(t, i + o),
            e.lineTo(t + n - s, i + o),
            e.quadraticCurveTo(t + n, i + o, t + n, i + o - s),
            e.lineTo(t + n, i + s),
            e.quadraticCurveTo(t + n, i, t + n - s, i),
            e.lineTo(t, i),
            e.fill();
        }
        leftRoundedRect(e, t, i, n, o, s) {
          e.beginPath(),
            e.moveTo(t, i + s),
            e.lineTo(t, i + o - s),
            e.quadraticCurveTo(t, i + o, t + s, i + o),
            e.lineTo(t + n, i + o),
            e.lineTo(t + n, i),
            e.lineTo(t + s, i),
            e.quadraticCurveTo(t, i, t, i + s),
            e.fill();
        }
        squareRect(e, t, i, n, o, s) {
          e.beginPath(), e.moveTo(t, i), e.lineTo(t, i + o), e.lineTo(t + n, i + o), e.lineTo(t + n, i), e.lineTo(t, i), e.fill();
        }
        paintFrame(e, t) {
          if (!(t >= this.ssrData[this.regionIndex][this.sentenceIndex].words.length)) {
            var i = window.devicePixelRatio,
              n = this.ssrData[this.regionIndex][this.sentenceIndex].words[t].rects,
              o = document.getElementById("canv");
            this.updateCanvasDimensions(this._rectToOCR.width, this._rectToOCR.height);
            var s = o.getContext("2d");
            if (((s.fillStyle = "rgba(0,0,255,0.25)"), 1 != n.length)) {
              var r = 0;
              for (r = 0; r < n.length; r++)
                0 == r
                  ? (this.leftRoundedRect(
                      s,
                      n[r].left / i + 0.5 - wordHilitePadding,
                      n[r].top / i + 0.5 - 2 * wordHilitePadding,
                      (n[r].right - n[r].left) / i + 0.5,
                      (n[r].bottom - n[r].top) / i + 0.5 + 2 * wordHilitePadding,
                      5
                    ),
                    (d = n[r].left / i + 0.5 - wordHilitePadding + ((n[r].right - n[r].left) / i + 0.5)))
                  : r == n.length - 1
                  ? (this.rightRoundedRect(
                      s,
                      d,
                      n[r].top / i + 0.5 - 2 * wordHilitePadding,
                      (n[r].right - n[r].left) / i + 0.5 + 2 * wordHilitePadding,
                      (n[r].bottom - n[r].top) / i + 0.5 + 2 * wordHilitePadding,
                      5
                    ),
                    (d = 0))
                  : (this.squareRect(
                      s,
                      d,
                      n[r].top / i + 0.5 - 2 * wordHilitePadding,
                      (n[r].right - n[r].left) / i + 0.5,
                      (n[r].bottom - n[r].top) / i + 0.5 + 2 * wordHilitePadding,
                      5
                    ),
                    (d += (n[r].right - n[r].left) / i + 0.5));
            } else {
              this.roundedRect(s, n[0].bottom / i + 0.5, n[0].top / i + 0.5, n[0].left / i - 0.5, n[0].right / i + 0.5, 5);
              var d = 0;
            }
          }
        }
        drawImage(e, t) {
          var i = document.getElementById("canv").getContext("2d"),
            n = new Image();
          (n.onload = function () {
            i.drawImage(n, 0, 0);
          }),
            (n.src = e),
            this.showClose();
          var o = document.getElementById("thSSRload-bar");
          null !== o && (o.style.visibility = "hidden");
        }
        showClose() {
          this.setStyle(document.getElementById("texthelp_ocr_close"), "display", "block"),
            document.getElementById("texthelp_ocr_close").addEventListener("mousedown", this.releaseCapture.bind(this), !1),
            document.getElementById("texthelp_ocr_copy").addEventListener("mousedown", this.copy.bind(this), !1),
            document.getElementById("texthelp_ocr_play").addEventListener("mousedown", this.playAgain.bind(this), !1),
            document.getElementById("texthelp_ocr_stop").addEventListener("mousedown", this.stop.bind(this), !1),
            document.getElementById("texthelp_ocr_pause").addEventListener("mousedown", this.pause.bind(this), !1);
        }
        copy() {
          this.copyTextToClipboard(this.ssrText);
        }
        playAgain() {
          if (this.paused) {
            var e = { command: "pause" };
            chrome.runtime.sendMessage(e, function (e) {});
          } else {
            e = { command: "stop" };
            chrome.runtime.sendMessage(e, function (e) {}), this.stopPlaybackAnimation();
            e = { command: "TH_Play_Again_SSR" };
            chrome.runtime.sendMessage(e, function (e) {});
          }
          this.paused = !1;
        }
        stop() {
          this.paused = !1;
          chrome.runtime.sendMessage({ command: "stop" }, function (e) {}), this.stopPlaybackAnimation();
        }
        pause() {
          this.paused = !0;
          chrome.runtime.sendMessage({ command: "pause" }, function (e) {});
        }
        setMaskPassthrough(e) {
          var t = document.getElementById("texthelp_ocr_wrapper"),
            i = document.getElementById("texthelp_ocr_top"),
            n = document.getElementById("texthelp_ocr_right"),
            o = document.getElementById("texthelp_ocr_bottom"),
            s = document.getElementById("texthelp_ocr_left"),
            r = document.getElementById("texthelp_ocr_center"),
            d = "all";
          e && (d = "none"),
            null != t && (t.style.pointerEvents = d),
            null != i && (i.style.pointerEvents = d),
            null != n && (n.style.pointerEvents = d),
            null != o && (o.style.pointerEvents = d),
            null != s && (s.style.pointerEvents = d),
            null != r && (r.style.pointerEvents = "all");
        }
        copyTextToClipboard(e) {
          var t = document.createElement("textarea");
          (t.textContent = e),
            document.body.appendChild(t),
            t.select(),
            document.execCommand("copy"),
            t.blur(),
            document.body.removeChild(t);
        }
        sendOCRMessage(e) {
          chrome.runtime.sendMessage({ rectToOCR: e, command: "TH_rectToOCR_SSR" }, function (e) {});
        }
        onMessage(e, t, i) {
          switch (e.command) {
            case "startScreenShotReader":
            case "TH_SSR_Start_Capture":
              (this.speechSettings = e), this.stopScreenShotReader(), this.startCapture();
              break;
            case "TH_onWord_SSR":
              (this.regionIndex = e.data.regionIndex),
                (this.sentenceIndex = e.data.sentenceIndex),
                this.paintFrame(this.ssrData, e.data.word);
              break;
            case "TH_onStop_SSR":
              this.stopPlaybackAnimation();
              break;
            case "TH_onOCR_SSR":
              (this.ssrData = JSON.parse(e.data)),
                this.drawImage(e.image, e.points),
                (this.croppedImage = e.image),
                (document.getElementById("texthelp_ocr_actions").style.display = "block"),
                (this.ssrText = e.text);
          }
        }
      }
      new n().initialise();
    }
  });
});
