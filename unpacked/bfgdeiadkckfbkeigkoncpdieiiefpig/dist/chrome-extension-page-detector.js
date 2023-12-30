(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        /* global location */
        const PageDetectorService = require("./services/page_detector_service");

        if (location.hostname.match(/mail.google.com$/)) {
          PageDetectorService.setPageDetectorListener("GMAIL");
        } else if (location.hostname.match(/github.com$/)) {
          PageDetectorService.listenForHistoryAPIChangeState();
          PageDetectorService.setPageDetectorListener("GITHUB");
        } else if (location.hostname.match(/bitbucket.org$/)) {
          PageDetectorService.setPageDetectorListener("BITBUCKET");
        } else if (location.hostname.match(/atlassian.net$/)) {
          PageDetectorService.setPageDetectorListener("JIRA");
        }
      },
      { "./services/page_detector_service": 2 }
    ],
    2: [
      function (require, module, exports) {
        /* global chrome */
        const DragUtil = require("../util/drag_util");

        const Constants = require("../util/constants");

        const Config = require("../util/config");

        const ShareService = require("./share_service.js");

        const ANON_FLOATER = chrome.runtime.getURL(Config.misc.ANON_FLOATER_PATH);
        const WIDGET_WIDTH = 342;
        const WIDGET_HEIGHT = 478;
        const WIDGET_HEADER_HEIGHT = 36;
        const WIDGET_ID = "bitmoji_chrome_extension_container";
        const FLOATER_CLASSNAME = "bitmoji-floater";
        const ICON_URL = Config.endpoints.RENDERING_ENDPOINT + "v2/cpanel/8581656-%s-v1.png?width=50&transparent=1&trim=symmetric";
        let modal;
        let _avatarUUID = null;

        const initFloatingExtension = (shareMode, target) => {
          const shownUI = $("#" + WIDGET_ID);

          if (shownUI.length) {
            // Hide the current picker if its already being shown
            shownUI.remove();
            return;
          }

          ShareService.setTarget(target);
          setTimeout(() => {
            const bitmojiUI = $("<div>");
            const iframe = $("<iframe>"); // Mouse events get sent to the iframe, so we need an overlay element to capture drag intent

            const draggableHeader = $("<div>");
            const leftPosition = window.innerWidth / 3;
            const topPosition = $(window).scrollTop() + window.innerHeight / 3;

            const handleShare = (event) => {
              const action = event.data.webPickerAction;

              switch (action) {
                case "share":
                  ShareService.handleShareMessage(event.data.bitmojiSrc);
                // fall-through

                case "close":
                  window.removeEventListener("message", handleShare);
                  bitmojiUI.remove();

                default:
                  break;
              }
            };

            iframe.attr("src", `chrome-extension://${chrome.runtime.id}/popup.html?context=${shareMode}`);
            iframe.css({
              outline: "none",
              border: "none",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            });
            draggableHeader.css({
              position: "absolute",
              top: 0,
              left: WIDGET_HEADER_HEIGHT,
              right: WIDGET_HEADER_HEIGHT,
              height: WIDGET_HEADER_HEIGHT
            });
            bitmojiUI.css({
              background: "white",
              position: "absolute",
              left: leftPosition,
              top: topPosition,
              minWidth: WIDGET_WIDTH,
              minHeight: WIDGET_HEIGHT,
              overflow: "hidden",
              zIndex: 4000,
              border: "1px rgba(0, 0, 0, .3)",
              boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)"
            });
            bitmojiUI.attr("id", WIDGET_ID);
            bitmojiUI.append(iframe);
            bitmojiUI.append(draggableHeader);
            draggableHeader.on("mousedown", (evt) => {
              DragUtil.startMoving(bitmojiUI[0], evt);
            });
            $("body").append(bitmojiUI);
            window.addEventListener("message", handleShare);
          }, 200);
        };

        const showAlert = () => {
          sweetAlert({
            title: "Uh oh",
            text: "We couldn't load your avatar. Please refresh the page and try again.",
            type: "error",
            confirmButtonColor: "#38CA8E",
            confirmButtonText: "Okay"
          });
        };
        /**
         * Listens for Chrome runtime message for `push_replace_state` from
         * background.js to re-enable the extension on sites that use the
         * History API
         */

        function listenForHistoryAPIChangeState() {
          chrome.runtime.onMessage.addListener((message, sender, response) => {
            if (message !== "push_replace_state") {
              return;
            }

            ChromeExtensionHide("bitmoji_chrome_extension_container");
            setPageDetectorListener("GITHUB");
          });
        }

        function setPageDetectorListener(shareMode) {
          chrome.storage.local.get(Constants.STORAGE_AVATAR_UUID, (items) => {
            if (items && items[Constants.STORAGE_AVATAR_UUID]) {
              _avatarUUID = items[Constants.STORAGE_AVATAR_UUID];
            }
          });

          const displayFloater = (evt, element) => {
            let backgroundImageValue;
            const $bitmojiButton = $(`<div class="${FLOATER_CLASSNAME}">`);
            let iconUrl = ANON_FLOATER;
            const textfield = evt && evt.target ? evt.target : element;

            if (_avatarUUID) {
              iconUrl = ICON_URL.replace("%s", _avatarUUID);
            }

            backgroundImageValue = "url(" + iconUrl + ")";
            $bitmojiButton.css({
              backgroundPosition: 0,
              backgroundImage: backgroundImageValue,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat"
            });
            $bitmojiButton.on("click", (ev) => {
              ev.preventDefault();
              ev.stopPropagation();
              initFloatingExtension(shareMode, textfield);
            });
            const alreadyOnPage = $("." + FLOATER_CLASSNAME).length;

            if (shareMode === "GITHUB" || shareMode === "GMAIL" || !alreadyOnPage) {
              switch (shareMode) {
                case "GMAIL":
                  // Custom styles
                  $bitmojiButton.css({
                    width: "24px",
                    height: "24px"
                  });
                  const formattingOptionsContainer = $(textfield) // Traverse up to the form container of this text field
                    .parents('table[role="presentation"]') // Find the text formatting toolbar
                    .find('td > div[aria-label="Formatting options"]')
                    .parent();

                  if (formattingOptionsContainer.parent().find("." + FLOATER_CLASSNAME).length) {
                    // Floater already exists in the current toolbar
                    return;
                  }

                  const bitmojiButtonContainer = formattingOptionsContainer.clone();
                  bitmojiButtonContainer.empty().append($bitmojiButton);
                  formattingOptionsContainer.before(bitmojiButtonContainer);
                  break;

                case "BITBUCKET":
                  // Custom styles
                  $bitmojiButton.css({
                    width: "35px",
                    height: "35px",
                    marginRight: "10px",
                    float: "left"
                  }); // Append to DOM

                  $(".markItUpHeader > ul").before($bitmojiButton);
                  break;

                case "JIRA":
                case "CORP-JIRA":
                  // Custom styles
                  $bitmojiButton.css({
                    width: "25px",
                    height: "25px",
                    margin: "-2px 0 0 -1px",
                    float: "left"
                  }); // Append to DOM

                  let $buttonContainer = $('<div class="aui-buttons" />');
                  let $auiButton = $('<a class="aui-button aui-button-subtle" />');
                  $auiButton.append($bitmojiButton);
                  $buttonContainer.append($auiButton);
                  $(".aui-toolbar2-primary").append($buttonContainer);
                  break;

                case "GITHUB":
                case "CORP-GITHUB":
                  // Custom styles
                  $bitmojiButton.css({
                    width: "28px",
                    height: "28px",
                    marginBottom: "-8px",
                    display: "inline-block"
                  }); // Append to DOM

                  let tabBar = $(element).closest(".js-previewable-comment-form").find(".comment-form-head .tabnav-tabs");
                  tabBar.append($bitmojiButton);
                  break;

                default:
                  throw new Error("Unknown share mode: " + shareMode);
              }
            }
          }; // BIT-1974

          /**
           * When textareas are visible by default and we want to
           * show the Bitmoji floater
           */

          const showBitmojiFloaterForVisibleTextarea = () => {
            $("." + FLOATER_CLASSNAME).remove();
            $("textarea:visible").each((index, el) => {
              displayFloater(null, el);
            });
          };
          /**
           * When textareas are hidden by default, often clicking a button
           * will make a textarea appear and come in focus.
           * Shows the floater once the textarea is focused.
           */

          const showBitmojiFloaterOnTextareaFocus = () => {
            $("body").on("focusin", "textarea", displayFloater);
            $("body").on("focusin", "[contenteditable]", displayFloater);
          }; // When to display the Bitmoji floater

          switch (shareMode) {
            case "GITHUB":
            case "CORP-GITHUB":
              $(document).ready(showBitmojiFloaterForVisibleTextarea);
              $(".js-toggle-inline-comment-form, .js-add-line-comment").on("click", () => {
                setTimeout(() => {
                  showBitmojiFloaterForVisibleTextarea();
                }, 500);
              });
              break;

            case "BITBUCKET":
            case "JIRA":
            case "CORP-JIRA":
            default:
              showBitmojiFloaterOnTextareaFocus();
          }

          ShareService.setMode(shareMode);
        }

        module.exports = {
          setPageDetectorListener: setPageDetectorListener,
          listenForHistoryAPIChangeState: listenForHistoryAPIChangeState
        };
      },
      { "../util/config": 4, "../util/constants": 5, "../util/drag_util": 6, "./share_service.js": 3 }
    ],
    3: [
      function (require, module, exports) {
        let _shareMode = "DEFAULT";
        let _target = null;
        const WEBPICKER_WIDGET = "bitmoji_chrome_extension_container";
        const SHARE_TYPE_RIGHT_CLICK = "right_click";
        const GMAIL_SHARE_SIZE = 100;
        const BITBUCKET_SHARE_SIZE = 246;
        const JIRA_SHARE_SIZE = 246;
        const GITHUB_SHARE_SIZE = 246;
        const BITMOJI_STORE_URL = "https://chrome.google.com/webstore/detail/bitmoji/bfgdeiadkckfbkeigkoncpdieiiefpig";

        function setMode(mode) {
          _shareMode = mode;
        }

        function setTarget(target) {
          _target = target;
        }

        function share(bitmojiSrc, shareMethod) {
          if (shareMethod === SHARE_TYPE_RIGHT_CLICK) {
            return;
          } // In the popup, the parent window is itself

          const parentWindow = window.parent != window && window.parent;

          if (parentWindow) {
            chrome.runtime.sendMessge;
            parentWindow.postMessage(
              {
                webPickerAction: "share",
                bitmojiSrc
              },
              "*"
            );
          } else {
            this.defaultShare(bitmojiSrc);
          }
        }

        function handleShareMessage(bitmojiSrc) {
          if (!bitmojiSrc) {
            return;
          }

          switch (_shareMode) {
            case "GMAIL":
              this.gmailShare(bitmojiSrc);
              break;

            case "BITBUCKET":
              this.bitbucketShare(bitmojiSrc);
              break;

            case "JIRA":
            case "CORP-JIRA":
              this.jiraShare(bitmojiSrc);
              break;

            case "CORP-GITHUB":
            case "GITHUB":
              this.githubShare(bitmojiSrc);
              break;

            default:
              throw new Error("Unknown share mode: " + _shareMode);
          }
        }

        function getBitmojiShareUrl() {
          return new Promise(function (resolve, reject) {
            return resolve(BITMOJI_STORE_URL);
          });
        }

        function defaultShare(bitmojiSrc) {
          document.addEventListener("copy", function (evt) {
            evt.clipboardData.setData("text/plain", bitmojiSrc);
            evt.preventDefault();
            document.removeEventListener("copy", this);
          });
          document.execCommand("copy");
        }

        function gmailShare(bitmojiSrc) {
          getBitmojiShareUrl().then((link) => {
            const messageBody = $('[aria-label="Message Body"]');
            const bitmoji = $(`
                <a style="text-decoration:none" href="${link}">
                    <img src="${bitmojiSrc}" style="width:${GMAIL_SHARE_SIZE}px;height:${GMAIL_SHARE_SIZE}px"/>
                </a>
            `);
            messageBody.append(bitmoji);
          });
        }
        /**
         * Inserts specified Bitmoji text at the cursor of the target
         * @param  {Object} target      Native DOM element
         * @param  {String} bitmojiText
         */

        function insertBitmojiAtCursorPosition(bitmojiText) {
          if (!_target) {
            throw new Error("Unknown share target");
          }

          const caretPosition = _target.selectionStart;
          const currentText = _target.value;
          _target.value = currentText.substring(0, caretPosition) + bitmojiText + currentText.substring(caretPosition);
        }

        function bitbucketShare(bitmojiSrc) {
          const bitmojiText = `![bitmoji](${bitmojiSrc}&width=${BITBUCKET_SHARE_SIZE})`;
          insertBitmojiAtCursorPosition(bitmojiText);
        }

        function jiraShare(bitmojiSrc) {
          const bitmojiText = `!${bitmojiSrc}&width=${JIRA_SHARE_SIZE}!`;
          insertBitmojiAtCursorPosition(bitmojiText);
        }

        function githubShare(bitmojiSrc) {
          const bitmojiText = `![bitmoji](${bitmojiSrc}&width=${GITHUB_SHARE_SIZE})`;
          insertBitmojiAtCursorPosition(bitmojiText);
        }

        module.exports = {
          setMode: setMode,
          setTarget: setTarget,
          share: share,
          handleShareMessage: handleShareMessage,
          defaultShare: defaultShare,
          gmailShare: gmailShare,
          bitbucketShare: bitbucketShare,
          jiraShare: jiraShare,
          githubShare: githubShare
        };
      },
      {}
    ],
    4: [
      function (require, module, exports) {
        const dev = {
          endpoints: {
            BITMOJI_API: "http://devbox-api.bitmoji.com:8080/",
            RENDERING_ENDPOINT: "https://staging-render.bitstrips.com/"
          },
          oauth: {
            SNAPCHAT_LOGIN_TOKEN_URL: "https://accounts.snap-dev.net/accounts/oauth2/token",
            SNAPCHAT_REVOKE_TOKEN_URL: "https://accounts.snap-dev.net/accounts/oauth2/revoke",
            SNAPCHAT_ACCOUNTS_REDIRECT_URI: "https://test.bitmoji.com/account_v2/",
            // chrome extension oauth2 related constants
            CHROME_EXT_CLIENT_ID: "a05e5439-807d-49f3-8161-f6c4a50581b5",

            /**
             * Approved by security to store secret in repository.
             * */
            CHROME_EXT_CLIENT_SECRET: "j9kY-vS6nR9FOzNedlaHND-T6_OqZPh9owWCgYCogyU",
            CHROME_EXT_SCOPE: "https://auth.snapchat.com/oauth2/api/bitmoji.read"
          },
          misc: {
            BITMOJI_COM_URL: "https://test.bitmoji.com/account_v2/",
            BITMOJI_COM_DOMAIN: "test.bitmoji.com",
            ANON_FLOATER_PATH: "static/media/bitmoji-icon-48.png"
          }
        };
        const staging = {
          endpoints: {
            BITMOJI_API: "https://staging-api.bitmoji.com/",
            RENDERING_ENDPOINT: "https://staging-render.bitstrips.com/"
          },
          oauth: {
            SNAPCHAT_LOGIN_TOKEN_URL: "https://accounts.snap-dev.net/accounts/oauth2/token",
            SNAPCHAT_REVOKE_TOKEN_URL: "https://accounts.snap-dev.net/accounts/oauth2/revoke",
            SNAPCHAT_ACCOUNTS_REDIRECT_URI: "https://test.bitmoji.com/account_v2/",
            // chrome extension oauth2 related constants
            CHROME_EXT_CLIENT_ID: "a05e5439-807d-49f3-8161-f6c4a50581b5",

            /**
             * Approved by security to store secret in repository.
             * */
            CHROME_EXT_CLIENT_SECRET: "j9kY-vS6nR9FOzNedlaHND-T6_OqZPh9owWCgYCogyU",
            CHROME_EXT_SCOPE: "https://auth.snapchat.com/oauth2/api/bitmoji.read"
          },
          misc: {
            BITMOJI_COM_URL: "https://test.bitmoji.com/account_v2/",
            BITMOJI_COM_DOMAIN: "test.bitmoji.com",
            ANON_FLOATER_PATH: "static/media/bitmoji-icon-48.png"
          }
        };
        const prod = {
          endpoints: {
            BITMOJI_API: "https://api.bitmoji.com/",
            RENDERING_ENDPOINT: "https://sdk.bitmoji.com/"
          },
          oauth: {
            SNAPCHAT_LOGIN_TOKEN_URL: "https://accounts.snapchat.com/accounts/oauth2/token",
            SNAPCHAT_REVOKE_TOKEN_URL: "https://accounts.snapchat.com/accounts/oauth2/revoke",
            SNAPCHAT_ACCOUNTS_REDIRECT_URI: "https://www.bitmoji.com/account_v2/",
            // chrome extension oauth2 related constants
            CHROME_EXT_CLIENT_ID: "b8b2fb03-128e-459f-b2bf-71a0890d2413",

            /**
             * Approved by security to store secret in repository.
             * */
            CHROME_EXT_CLIENT_SECRET: "atqHYu1s_8XORC4eolr1B6433gKSHCs2LvxlTFo8vqk",
            CHROME_EXT_SCOPE: "https://auth.snapchat.com/oauth2/api/bitmoji.read"
          },
          misc: {
            BITMOJI_COM_URL: "https://www.bitmoji.com/account_v2/",
            BITMOJI_COM_DOMAIN: "www.bitmoji.com",
            ANON_FLOATER_PATH: "static/media/bitmoji-icon-48.png"
          }
        };
        const internalProd = {
          endpoints: {
            BITMOJI_API: "https://api.bitmoji.com/",
            RENDERING_ENDPOINT: "https://sdk.bitmoji.com/"
          },
          oauth: {
            SNAPCHAT_LOGIN_TOKEN_URL: "https://accounts.snapchat.com/accounts/oauth2/token",
            SNAPCHAT_REVOKE_TOKEN_URL: "https://accounts.snapchat.com/accounts/oauth2/revoke",
            SNAPCHAT_ACCOUNTS_REDIRECT_URI: "https://www.bitmoji.com/internal_account_v2/",
            // chrome extension oauth2 related constants
            CHROME_EXT_CLIENT_ID: "b8b2fb03-128e-459f-b2bf-71a0890d2413",

            /**
             * Approved by security to store secret in repository.
             * */
            CHROME_EXT_CLIENT_SECRET: "atqHYu1s_8XORC4eolr1B6433gKSHCs2LvxlTFo8vqk",
            CHROME_EXT_SCOPE: "https://auth.snapchat.com/oauth2/api/bitmoji.read"
          },
          misc: {
            BITMOJI_COM_URL: "https://www.bitmoji.com/internal_account_v2/",
            BITMOJI_COM_DOMAIN: "www.bitmoji.com",
            ANON_FLOATER_PATH: "static/media/bitmoji-internal-icon-48.png"
          }
        }; // values used in chrome ext

        module.exports = prod;
      },
      {}
    ],
    5: [
      function (require, module, exports) {
        module.exports = {
          // bitmoji auth related constants
          BITMOJI_BSAUTH_COOKIE: "bitmoji_bsauth_token",
          BITMOJI_LOGIN_TYPE_COOKIE: "bitmoji_login_token_type",
          STORAGE_AVATAR_ID: "bitmoji.avatarId",
          STORAGE_AVATAR_ID_HASH: "bitmoji.avatarIdHash",
          STORAGE_AVATAR_UUID: "bitmoji.avatarUUID",
          STORAGE_LOGIN_TOKEN_TYPE: "bitmoji.loginTokenType",
          STORAGE_BSAUTH_TOKEN: "bitmoji.bsauthToken",
          STORAGE_LAST_TAB: "bitmoji.lastTab",
          // snapchat oauth2 related constants
          OAUTH2_STATE_BYTES: 32,
          OAUTH2_CODE_VERIFIER_BYTES: 32,
          LOGIN_TOKEN_TYPE_BSAUTH: "bsAuth",
          LOGIN_TOKEN_TYPE_SNAPCHAT: "snapAuth",
          STORAGE_SNAPCHAT_STATE: "snapchat.state",
          STORAGE_SNAPCHAT_CODE_VERIFIER: "snapchat.codeVerifier",
          STORAGE_SNAPCHAT_CODE_CHALLENGE: "snapchat.codeChallenge",
          STORAGE_SNAPCHAT_ACCESS_TOKEN: "snapchat.accessToken",
          STORAGE_SNAPCHAT_REFRESH_TOKEN: "snapchat.refreshToken",
          STORAGE_SNAPCHAT_EXPIRES_IN: "snapchat.expiresIn",
          STORAGE_CHROME_EXT_ACCESS_EXPIRY: "chromeExt.accessExpiry",
          ALARM_SNAPCHAT_REFRESH_TOKEN: "alarm_snapchat_refresh_token",
          ALARM_SNAPCHAT_REFRESH_TIME_OFFSET_MS: 600000,
          GET_BITMOJI_INIT_DATA: "get_bitmoji_init_data",
          REFRESH_REQUEST_NO_CONNECTION: "errorNoConnection",
          BITMOJI_WEB_SDK_ANALYTICS_ID: 12
        };
      },
      {}
    ],
    6: [
      function (require, module, exports) {
        class DragUtil {
          static move(floatingElement, xPos, yPos) {
            floatingElement.style.left = xPos + "px";
            floatingElement.style.top = yPos + "px";
          }

          static startMoving(floatingElement, evt) {
            evt = evt || window.event;
            const posX = evt.clientX;
            const posY = evt.clientY;
            let floatingElementTop = floatingElement.style.top;
            let floatingElementLeft = floatingElement.style.left;
            const eWi = +floatingElement.style.width;
            const eHe = +floatingElement.style.height;
            document.body.style.cursor = "move";
            floatingElementTop = floatingElementTop.replace("px", "");
            floatingElementLeft = floatingElementLeft.replace("px", "");
            const diffX = posX - floatingElementLeft;
            const diffY = posY - floatingElementTop;

            document.onmousemove = (evt) => {
              evt = evt || window.event;
              const posX = evt.clientX;
              const posY = evt.clientY;
              let aX = posX - diffX;
              let aY = posY - diffY;
              if (aX < 0) aX = 0;
              if (aY < 0) aY = 0;
              if (aX + eWi > window.innerWidth) aX = window.innerWidth - eWi;
              if (aY + eHe > window.innerHeight) aY = window.innerHeight - eHe;
              this.move(floatingElement, aX, aY);
            };

            document.onmouseup = (evt) => {
              this.stopMoving();
            };
          }

          static stopMoving() {
            document.body.style.cursor = "default";

            document.onmousemove = () => {};
          }
        }

        module.exports = DragUtil;
      },
      {}
    ]
  },
  {},
  [1]
);
