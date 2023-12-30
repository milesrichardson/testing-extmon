/*
    Myrtille: A native HTML4/5 Remote Desktop Protocol client.

    Copyright(c) 2014-2019 Cedric Coste

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

/*****************************************************************************************************************************************************************************************************/
/*** Keyboard                                                                                                                                                                                      ***/
/*****************************************************************************************************************************************************************************************************/

function Keyboard(config, dialog, display, network, user) {
  this.init = function () {
    try {
      user.addListener("keydown", function (e) {
        keyDown(e);
      });
      user.addListener("keypress", function (e) {
        keyPress(e);
      });
      user.addListener("keyup", function (e) {
        keyUp(e);
      });
    } catch (exc) {
      dialog.showDebug("keyboard init error: " + exc.message);
      throw exc;
    }

    // If they Alt+Tab away then we need to send the Alt-up message
    window.addEventListener(
      "blur",
      function () {
        if (lastKey == 18) {
          sendEvent(18, false, false);
        }
      },
      false
    );
  };

  function processEvent(e) {
    if (e == null) e = window.event;

    if (e == null) return false;

    user.triggerActivity();

    return true;
  }

  function processKeyState(e, keyState, modKeyActive) {
    //dialog.showDebug(keyState);

    if (!processEvent(e)) return false;

    var keyCode = null;
    if (window.event) keyCode = window.event.keyCode;
    else if (e.which) keyCode = e.which;

    if (keyCode == null) return false;

    // Convert Mac Command-key to Windows Ctrl-key
    if (keyCode == 91 || keyCode == 93) keyCode = 17;

    //dialog.showDebug(keyState + ' code: ' + keyCode);

    if (keyCode == 144)
      // numlock
      return false;

    // keyboard modifiers
    if (keyCode == 16) modShift = modKeyActive;
    else if (keyCode == 17) modCtrl = modKeyActive;
    else if (keyCode == 18) modAlt = modKeyActive;

    return keyCode;
  }

  this.setKeyCombination = function () {
    //dialog.showDebug('waiting key combination');
    keyCombination = true;
    keyCombinationTimeout = window.setTimeout(function () {
      //dialog.showDebug('cancelling key combination');
      keyCombination = false;
      keyCombinationTimeout = null;
    }, 1500);
  };

  /*************************************************************************************************************************************************************************************************/
  /*** Keydown                                                                                                                                                                                   ***/
  /*************************************************************************************************************************************************************************************************/

  // keyboard modifiers
  var modShift = false;
  var modCtrl = false;
  var modAlt = false;

  // key combination
  var keyCombination = false;
  var keyCombinationTimeout = null;

  // latest keydown code
  var keydownCode = null;

  // keycode to charcode mapping
  var keyCodeToCharCode = new Array();

  var lastKey = 0;

  function isCtrlKey(keyCode) {
    // 17 = ctrl key on Windows
    // 91 = left command-key on Macbook
    // 93 = right command-key on Macbook
    return keyCode == 17 || keyCode == 91 || keyCode == 93;
  }

  function keyDown(e) {
    try {
      var keyCode = processKeyState(e, "keydown", true);

      if (!keyCode) return false;

      // non character keys are sent as scancodes on keydown and keyup
      // character keys are sent as unicode on keypress and keyup, using the keypress character code
      var keyIsChar = !(
        keyCode == 8 || // backspace
        keyCode == 9 || // tab
        keyCode == 13 || // enter
        keyCode == 16 || // shift
        keyCode == 17 || // ctrl
        keyCode == 18 || // alt
        keyCode == 27 || // esc
        keyCode == 35 || // end
        keyCode == 36 || // home
        keyCode == 33 || // page up
        keyCode == 34 || // page down
        keyCode == 37 || // keypad left arrow
        keyCode == 38 || // keypad up arrow
        keyCode == 39 || // keypad right arrow
        keyCode == 40 || // keypad down arrow
        keyCode == 45 || // insert
        keyCode == 46 || // delete
        keyCode == 112 || // F1
        keyCode == 113 || // F2
        keyCode == 114 || // F3
        keyCode == 115 || // F4
        keyCode == 116 || // F5
        keyCode == 117 || // F6
        keyCode == 118 || // F7
        keyCode == 119 || // F8
        keyCode == 120 || // F9
        keyCode == 121 || // F10
        keyCode == 122 || // F11
        keyCode == 123
      ); // F12

      // Clipboard detection (Ctrl+C or Ctrl+V)
      if (isCtrlKey(lastKey) && (keyCode == 67 || keyCode == 88)) {
        window.setTimeout(function () {
          network.send(network.getCommandEnum().REQUEST_REMOTE_CLIPBOARD.text);
        }, 500);
      } else if (isCtrlKey(lastKey) && keyCode == 86) {
        navigator.clipboard.readText().then(
          function (text) {
            var msg = {
              type: "CLIPBOARD_PASTE",
              text: text
            };
            HostMessaging.sendMessage(msg);
          }.bind(this)
        );
        return;
      }
      lastKey = keyCode;

      // RDP over VM bus (Hyper-V): send keys as scancodes when enhanced mode is disabled
      if (!keyIsChar || modCtrl || config.getVMNotEnhanced()) {
        // if running myrtille into an iframe, provide a key combination (shift + tab) to switch iframe(s) focus
        if (parent != null && window.name != "") {
          if (!keyCombination) {
            // shift
            if (keyCode == 16) {
              this.setKeyCombination();
              user.cancelEvent(e);
              return false;
            }
          } else {
            // tab
            if (keyCode == 9) {
              keyCombination = false;
              if (keyCombinationTimeout != null) {
                //dialog.showDebug('key combination complete');
                window.clearTimeout(keyCombinationTimeout);
                keyCombinationTimeout = null;
              }
              parent.switchIframe(window.name);
              user.cancelEvent(e);
              return false;
            }
          }
        }
        sendEvent(keyCode, true, false);
        user.cancelEvent(e);
        return false;
      }

      keydownCode = keyCode;
    } catch (exc) {
      dialog.showDebug("key down error: " + exc.message);
    }

    return true;
  }

  /*************************************************************************************************************************************************************************************************/
  /*** Keypress                                                                                                                                                                                  ***/
  /*************************************************************************************************************************************************************************************************/

  function keyPress(e) {
    try {
      //dialog.showDebug('keypress');

      if (!processEvent(e)) return false;

      var charCode;
      if (window.event) charCode = window.event.charCode ? window.event.charCode : window.event.keyCode;
      else if (e.charCode) charCode = e.charCode;
      else if (e.which) charCode = e.which;

      if (charCode == null) return false;

      //dialog.showDebug('keypress code: ' + charCode);

      // bind keydown code to keypress code
      keyCodeToCharCode[keydownCode] = charCode;

      sendEvent(charCode, true, true);
    } catch (exc) {
      dialog.showDebug("key press error: " + exc.message);
    }

    user.cancelEvent(e);
    return false;
  }

  /*************************************************************************************************************************************************************************************************/
  /*** Keyup                                                                                                                                                                                     ***/
  /*************************************************************************************************************************************************************************************************/

  function keyUp(e) {
    try {
      var keyCode = processKeyState(e, "keyup", false);

      if (!keyCode) return false;

      if (keyCombination) return false;

      // check key type
      if (keyCodeToCharCode[keyCode] == null) {
        sendEvent(keyCode, false, false);
      } else {
        sendEvent(keyCodeToCharCode[keyCode], false, true);
        keyCodeToCharCode[keyCode] = null;
      }

      //dialog.showDebug('*************************');
    } catch (exc) {
      dialog.showDebug("key up error: " + exc.message);
    }

    user.cancelEvent(e);
    return false;
  }

  /*************************************************************************************************************************************************************************************************/
  /*** Network                                                                                                                                                                                   ***/
  /*************************************************************************************************************************************************************************************************/

  function sendEvent(keyCode, keyPressed, keyIsChar) {
    if (keyCode != null) {
      //dialog.showDebug('key' + (keyPressed ? 'down' : 'up') + ' is ' + (keyIsChar ? '' : 'not ') + 'a character, sending code: ' + keyCode);

      // if enabled, display the typed text in an helper div (helpful to debug keyboard issues or in case of high network latency)
      if (config.getKeyboardHelperEnabled() && keyPressed && keyIsChar) dialog.showKeyboardHelper(String.fromCharCode(keyCode));

      // a key event is composed of 2 parts: key code and state
      // the key code is prefixed to indicate the server to process it as unicode (character key) or scancode (non character key)
      // the key state is either 1 (down) or 0 (up)
      var keyEvent =
        (keyIsChar ? network.getCommandEnum().SEND_KEY_UNICODE.text : network.getCommandEnum().SEND_KEY_SCANCODE.text) +
        keyCode +
        "-" +
        (keyPressed ? "1" : "0");

      // pass the event to the network
      network.processUserEvent("keyboard", keyEvent);
    }
  }
}
