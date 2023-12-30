(() => {
  "use strict";
  const tools_Deferred = class extends Promise {
      constructor(callback = (resolve, reject) => {}) {
        let res, rej;
        super((resolve, reject) => {
          (res = resolve), (rej = reject), callback(resolve, reject);
        }),
          (this._resolve = res),
          (this._reject = rej);
      }
      resolve(result) {
        return this._resolve(result), this;
      }
      reject(error) {
        return this._reject(error), this;
      }
    },
    language = "ru" !== chrome.i18n.getUILanguage() ? "en" : "ru",
    css = `\n.BrowsecPopup{\n  padding: 0;\n  margin: 0;\n  position:fixed;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%;\n  backdrop-filter: blur(2px);\n  z-index:2147483647;\n  line-height: 1.4;\n  color: #545454;\n  font-size: 14px;\n  font-family: 'Trebuchet MS', arial, sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.BrowsecPopup *{\n  padding: 0;\n  margin: 0;\n}\n.BrowsecPopup_In{\n  box-sizing: border-box;\n  position: absolute;\n  background: #fff;\n  border-radius: 13px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  width: 540px;\n  padding: 25px 25px 25px;\n}\n\n.BrowsecPopup_Title{\n  padding: 0 0 25px;\n}\n.BrowsecPopup_Title_In{\n  display: table;\n}\n.BrowsecPopup_Title_Td{\n  display: table-cell;\n  vertical-align: middle;\n  padding-right: 7px;\n}\n.BrowsecPopup_Title_Ball{\n  background: url("data:image/svg+xml,%3Csvg width='132' height='132' viewBox='0 0 132 132' xmlns='http://www.w3.org/2000/svg' fill='none'%3E%3Cpath d='M66 130c35.346 0 64-28.654 64-64 0-35.346-28.654-64-64-64-35.346 0-64 28.654-64 64 0 35.346 28.654 64 64 64z' fill='%231C304E'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M66 41.82c11.779 0 20.974-.899 29.877-5.82 2.778 9.683 4.168 19.753 4.121 29.873 0 35.416-14.283 62.127-33.999 62.127s-33.999-26.711-33.999-62.127c-.046-10.12 1.344-20.189 4.121-29.873 8.904 4.921 18.099 5.82 29.877 5.82z' fill='%233B9946'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.749 25.673c-8.62 11.152-13.749 25.141-13.749 40.327s5.129 29.174 13.749 40.327c.82 1.06 1.671 2.095 2.553 3.103 12.098 13.833 29.878 22.57 49.698 22.57s37.6-8.737 49.698-22.57c.882-1.008 1.733-2.043 2.553-3.103 8.62-11.153 13.749-25.141 13.749-40.327s-5.129-29.174-13.749-40.327c-.82-1.061-1.671-2.096-2.553-3.104-12.098-13.833-29.877-22.57-49.698-22.57s-37.6 8.737-49.698 22.57c-.882 1.008-1.733 2.043-2.553 3.104zm86.513 11.746c3.166-1.344 6.132-2.872 8.86-4.565 2.203-1.368 4.272-2.858 6.174-4.462 7.593 9.937 12.249 22.238 12.672 35.607h-23.985c-.163-9.501-1.482-18.498-3.721-26.58zm-1.16-3.855c-3.908-12.007-9.92-21.676-17.165-27.497 12.141 3.22 22.82 10.032 30.831 19.228-3.789 3.201-8.41 5.998-13.666 8.269zm28.866 34.435c-.423 13.369-5.079 25.67-12.672 35.607-1.902-1.603-3.971-3.094-6.174-4.461-2.728-1.693-5.694-3.222-8.86-4.565 2.239-8.083 3.558-17.079 3.721-26.58h23.985zm-15.2 38.704c-3.789-3.2-8.41-5.998-13.666-8.269-3.908 12.007-9.92 21.676-17.165 27.498 12.141-3.221 22.82-10.032 30.831-19.229zm-12.786-38.704c-.16 9.014-1.396 17.507-3.465 25.111-8.5-3.074-18.219-4.883-28.517-5.091v-20.02h31.982zm-4.605 28.953c-8.078-2.951-17.409-4.722-27.378-4.932v35.867c7.771-.866 15.389-6.768 21.404-17.215 2.32-4.029 4.339-8.644 5.974-13.72zm-31.378-28.953v20.02c-10.298.208-20.018 2.017-28.517 5.091-2.069-7.604-3.305-16.097-3.465-25.111h31.982zm0 24.021c-9.969.21-19.3 1.981-27.378 4.932 1.635 5.076 3.654 9.691 5.974 13.72 6.015 10.447 13.633 16.349 21.404 17.215v-35.867zm-13.937 33.912c-7.245-5.822-13.257-15.491-17.165-27.498-5.256 2.271-9.877 5.069-13.666 8.269 8.011 9.197 18.69 16.008 30.831 19.229zm-27.184-26.787c2.728-1.693 5.694-3.222 8.86-4.565-2.239-8.083-3.558-17.079-3.721-26.58h-23.985c.424 13.369 5.08 25.67 12.672 35.607 1.902-1.603 3.971-3.094 6.174-4.461zm-6.174-70.753c-7.593 9.937-12.249 22.238-12.672 35.607h23.985c.163-9.501 1.482-18.498 3.721-26.58-3.166-1.344-6.132-2.872-8.86-4.565-2.203-1.368-4.273-2.858-6.174-4.462zm18.779 10.496c-2.069 7.604-3.305 16.096-3.465 25.111h31.982v-20.02c-10.298-.208-20.018-2.017-28.517-5.091zm28.517 1.09c-9.969-.21-19.3-1.981-27.378-4.932 1.635-5.076 3.654-9.691 5.974-13.72 6.015-10.447 13.633-16.349 21.404-17.215v35.867zm4 0v-35.867c7.771.867 15.389 6.769 21.404 17.215 2.32 4.029 4.339 8.644 5.974 13.72-8.078 2.951-17.409 4.722-27.378 4.932zm0 4.001c10.299-.208 20.018-2.017 28.517-5.091 2.069 7.604 3.305 16.096 3.465 25.111h-31.982v-20.02zm-35.102-10.415c-5.256-2.271-9.877-5.069-13.666-8.269 8.011-9.197 18.69-16.008 30.831-19.228-7.246 5.822-13.257 15.491-17.165 27.497z' fill='%23fff'/%3E%3C/svg%3E") 50% 50% no-repeat;\n  background-size: 100% 100%;\n  width: 33px;\n  height: 33px;\n}\n.BrowsecPopup_Title_Text{\n  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='84.813' height='14.25' viewBox='0 0 84.813 14.25'%3E%3Cpath id='Browsec' style='fill: %23000; fill-rule: evenodd;' d='M155.621,149.45a0.8,0.8,0,0,0,.78.8h5.441c3.061,0,5.081-1.42,5.081-3.821v-0.04c0-1.92-1.34-2.88-3-3.381a3.379,3.379,0,0,0,2.22-3.24v-0.04a3.112,3.112,0,0,0-.9-2.241,5.145,5.145,0,0,0-3.661-1.24H156.4a0.8,0.8,0,0,0-.78.8v12.4Zm1.56-6.962v-4.821h4.261c2,0,3.1.9,3.1,2.281v0.04c0,1.64-1.321,2.5-3.221,2.5h-4.141Zm0,6.342v-4.941H161.6c2.441,0,3.721.88,3.721,2.4v0.04c0,1.56-1.32,2.5-3.441,2.5h-4.7Zm13.119,0.74a0.771,0.771,0,1,0,1.541,0v-3.521c0-2.981,1.64-4.481,3.641-4.721a0.764,0.764,0,0,0,.68-0.78,0.74,0.74,0,0,0-.76-0.78,4.282,4.282,0,0,0-3.561,2.76v-1.94a0.768,0.768,0,0,0-.78-0.78,0.778,0.778,0,0,0-.761.78v8.982Zm12.882,0.92a5.37,5.37,0,0,0,5.421-5.4v-0.04a5.391,5.391,0,0,0-10.782.04v0.04A5.3,5.3,0,0,0,183.182,150.49Zm0.04-1.38a3.88,3.88,0,0,1-3.821-4.021v-0.04a3.817,3.817,0,0,1,3.781-4,3.913,3.913,0,0,1,3.84,4.041v0.04A3.816,3.816,0,0,1,183.222,149.11Zm11.6,1.3h0.04a0.862,0.862,0,0,0,.84-0.7l2.6-7.542,2.581,7.542a0.862,0.862,0,0,0,.84.7h0.06a0.912,0.912,0,0,0,.84-0.7l3.161-8.762a1.435,1.435,0,0,0,.1-0.42,0.739,0.739,0,0,0-.76-0.72,0.756,0.756,0,0,0-.74.6l-2.641,7.8-2.6-7.782a0.817,0.817,0,0,0-.8-0.62h-0.08a0.789,0.789,0,0,0-.76.62l-2.62,7.782-2.6-7.762a0.808,0.808,0,0,0-.78-0.64,0.76,0.76,0,0,0-.78.74,1.435,1.435,0,0,0,.1.42l3.14,8.742A0.916,0.916,0,0,0,194.822,150.41Zm17.459,0.04c2.061,0,3.681-1.14,3.681-3.1v-0.04c0-1.86-1.72-2.48-3.321-2.96-1.38-.42-2.66-0.8-2.66-1.781v-0.04c0-.86.78-1.5,2-1.5a5.6,5.6,0,0,1,2.7.8,0.773,0.773,0,0,0,.34.08,0.67,0.67,0,0,0,.68-0.66,0.748,0.748,0,0,0-.38-0.64,7.2,7.2,0,0,0-3.3-.88c-2.04,0-3.52,1.18-3.52,2.96v0.04c0,1.9,1.8,2.461,3.42,2.921,1.361,0.38,2.581.78,2.581,1.82v0.04c0,1-.9,1.641-2.141,1.641a5.809,5.809,0,0,1-3.28-1.1,0.615,0.615,0,0,0-.38-0.12,0.67,0.67,0,0,0-.68.66,0.7,0.7,0,0,0,.28.56A7.155,7.155,0,0,0,212.281,150.45Zm7.96-5.941a3.565,3.565,0,0,1,3.36-3.521c2.061,0,3.141,1.64,3.3,3.521h-6.661Zm7.5,4.421a0.664,0.664,0,0,0,.24-0.5,0.664,0.664,0,0,0-1.12-.48,4.227,4.227,0,0,1-2.981,1.2,3.612,3.612,0,0,1-3.64-3.5h7.481a0.717,0.717,0,0,0,.72-0.72c0-2.741-1.74-5.241-4.8-5.241a5.1,5.1,0,0,0-4.961,5.381v0.04a5.141,5.141,0,0,0,5.161,5.381A5.257,5.257,0,0,0,227.742,148.93Zm8.579,1.56a5.2,5.2,0,0,0,3.9-1.66,0.7,0.7,0,0,0,.2-0.48,0.723,0.723,0,0,0-.7-0.7,0.61,0.61,0,0,0-.44.2,4.129,4.129,0,0,1-2.881,1.261,3.864,3.864,0,0,1-3.8-4.021v-0.04a3.816,3.816,0,0,1,3.7-4,3.988,3.988,0,0,1,2.821,1.24,0.8,0.8,0,0,0,.5.18,0.738,0.738,0,0,0,.74-0.74,0.724,0.724,0,0,0-.24-0.54,5.376,5.376,0,0,0-9.1,3.9v0.04A5.31,5.31,0,0,0,236.321,150.49Z' transform='translate(-155.625 -136.25)'/%3E%3C/svg%3E%0A") 50% 50% no-repeat;\n  background-size: 100% auto;\n  width: 60px;\n  height: 33px;\n}\n\n.BrowsecPopup_1_Table{\n  display: table;\n  width: 100%;\n}\n.BrowsecPopup_1_Table_Tr{\n  display: table-row;\n}\n.BrowsecPopup_1_Table_Td{\n  display: table-cell;\n  vertical-align: middle;\n  width: 50%;\n}\n.BrowsecPopup_1_Table_Tr:first-child .BrowsecPopup_1_Table_Td{\n  vertical-align: top;\n}\n.BrowsecPopup_1_Table_Td:first-child{\n  padding-right: 35px;\n}\n.BrowsecPopup_1_Table_Td:last-child{\n  padding-left: 35px;\n}\n.BrowsecPopup_1_Table_Tr ~ .BrowsecPopup_1_Table_Tr .BrowsecPopup_1_Table_Td{\n  padding-top: 40px;\n}\n\n.BrowsecPopup_1_Table_Title{\n  color: #3B9946;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.BrowsecPopup_1_Table_Circle{\n  width: 128px;\n  height: 128px;\n  position: relative;\n  margin: 0 auto;\n  transition: transform 0.3s ease;\n  cursor: pointer;\n}\n.BrowsecPopup_1_Table_Circle:hover{\n  transform: scale(1.13);\n}\n.BrowsecPopup_1_Table_Circle_Bg{\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.BrowsecPopup_1_Table_Circle_Bg::before,\n.BrowsecPopup_1_Table_Circle_Bg::after{\n  content: '';\n  border-radius: 50%;\n  position: absolute;\n}\n.BrowsecPopup_1_Table_Circle_Bg::before{\n  border: 2px solid #3B9946;\n  filter: blur(2px);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.BrowsecPopup_1_Table_Circle_Bg::after{\n  border: 2px solid rgba(59, 153, 70, 0.19);\n  top: 1px;\n  left: 1px;\n  right: 1px;\n  bottom: 1px;\n}\n.BrowsecPopup_1_Table_Circle_In{\n  position: relative;\n  height: 100%;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  text-align: center;\n}\n.BrowsecPopup_1_Table_Circle_In2{\n  margin: 0 auto;\n}\n\n.BrowsecPopup_1_Step1{\n  font-size: 16px;\n  line-height: 23px;\n}\n.BrowsecPopup_1_Step1_Big{\n  font-size: ${
      "en" === language ? "22px" : "21px"
    };\n}\n\n.BrowsecPopup_1_Step2{\n  font-size: 12px;\n  line-height: 30px;\n}\n.BrowsecPopup_1_Step2_Middle{\n  font-size: 26px;\n}\n\n.BrowsecPopup_1_Button{\n  border: 1px solid #3b9946;\n  text-align: center;\n  line-height: 40px;\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 16px;\n  color: #3b9946;\n  cursor: pointer;\n  transition: transform 0.3s ease;\n}\n.BrowsecPopup_1_Button:hover{\n  transform: scale(1.13);\n}\n.BrowsecPopup_1_Button.BrowsecPopup_1_Button_green{\n  background: #3b9946;\n  color: #fff;\n}\n.BrowsecPopup_1_Button.BrowsecPopup_1_Button_green::after{\n  content: '';\n  display: inline-block;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  border: 5px solid transparent;\n  border-left-color: #fff;\n  margin-left: 6px;\n}\n\n.BrowsecPopup_Step2{\n  display: none;\n}\n.BrowsecPopup_2_Description{\n  color: #555A61;\n  font-weight: 600;\n  font-size: 14px;\n  padding-bottom: 40px;\n}\n.BrowsecPopup_2_Actions{\n  display: flex;\n  padding: 0 0 20px;\n}\n.BrowsecPopup_2_Action{\n  flex-grow: 1;\n  flex-basis: 0;\n  text-align: center;\n}\n.BrowsecPopup_2_Action_Clicker{\n  display: inline-block;\n  vertical-align: top;\n  transition: transform 0.3s ease;\n  cursor: pointer;\n}\n.BrowsecPopup_2_Action_Clicker:hover{\n  transform: scale(1.13);\n}\n.BrowsecPopup_2_Action_Stop{\n  width: 90px;\n  height: 90px;\n  position: relative;\n  margin: 0 auto;\n}\n.BrowsecPopup_2_Action_Stop::before,\n.BrowsecPopup_2_Action_Stop::after{\n  content: '';\n  display: block;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n.BrowsecPopup_2_Action_Stop::before{\n  position: absolute;\n  background: rgba(0, 0, 0, 0.22);\n  filter: blur(7px);\n  top: 0;\n  left: 0;\n}\n.BrowsecPopup_2_Action_Stop::after{\n  position: relative;\n  background: #fff url("data:image/svg+xml,%3Csvg width='45' height='50' viewBox='0 0 45 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23 30.5C23.663 30.5 24.2989 30.2366 24.7678 29.7678C25.2366 29.2989 25.5 28.663 25.5 28V3C25.5 2.33696 25.2366 1.70107 24.7678 1.23223C24.2989 0.763392 23.663 0.5 23 0.5C22.337 0.5 21.7011 0.763392 21.2322 1.23223C20.7634 1.70107 20.5 2.33696 20.5 3V28C20.5 28.663 20.7634 29.2989 21.2322 29.7678C21.7011 30.2366 22.337 30.5 23 30.5Z' fill='%23A3A0AC' fill-opacity='0.6'/%3E%3Cpath d='M32.8275 6.74702C32.2964 6.47252 31.678 6.42024 31.1084 6.60169C30.5387 6.78313 30.0645 7.18343 29.79 7.71452C29.5155 8.24562 29.4632 8.864 29.6447 9.43365C29.8261 10.0033 30.2264 10.4775 30.7575 10.752C34.3428 12.603 37.2021 15.605 38.8767 19.276C40.5512 22.947 40.9438 27.0741 39.9913 30.995C39.0389 34.9159 36.7968 38.403 33.6248 40.8968C30.4528 43.3905 26.5349 44.7462 22.5 44.7462C18.4651 44.7462 14.5472 43.3905 11.3752 40.8968C8.20323 38.403 5.96107 34.9159 5.00866 30.995C4.05624 27.0741 4.4488 22.947 6.12333 19.276C7.79787 15.605 10.6572 12.603 14.2425 10.752C14.5055 10.6161 14.7391 10.4297 14.93 10.2035C15.121 9.9773 15.2655 9.7157 15.3553 9.43365C15.4452 9.15159 15.4786 8.8546 15.4537 8.55963C15.4287 8.26466 15.3459 7.97749 15.21 7.71452C15.0741 7.45155 14.8877 7.21792 14.6615 7.02698C14.4353 6.83604 14.1737 6.69153 13.8916 6.60169C13.6096 6.51185 13.3126 6.47844 13.0176 6.50338C12.7226 6.52831 12.4355 6.6111 12.1725 6.74702C7.69206 9.06179 4.11917 12.8147 2.0272 17.4034C-0.0647724 21.9921 -0.554514 27.1505 0.636566 32.0509C1.82765 36.9513 4.63049 41.3095 8.59528 44.426C12.5601 47.5426 17.4569 49.2368 22.5 49.2368C27.5431 49.2368 32.4399 47.5426 36.4047 44.426C40.3695 41.3095 43.1724 36.9513 44.3634 32.0509C45.5545 27.1505 45.0648 21.9921 42.9728 17.4034C40.8808 12.8147 37.3079 9.06179 32.8275 6.74702Z' fill='%23A3A0AC' fill-opacity='0.62'/%3E%3C/svg%3E%0A") 50% 50% no-repeat;\n}\n.BrowsecPopup_2_Action_Flag{\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n.BrowsecPopup_2_Action_Flag_nl{\n  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='600' viewBox='0 0 9 6'%3E%3Crect fill='%2321468B' width='9' height='6'/%3E%3Crect fill='%23FFF' width='9' height='4'/%3E%3Crect fill='%23AE1C28' width='9' height='2'/%3E%3C/svg%3E");\n  background-position: 0px 0;\n  background-size: auto 100%;\n  background-repeat: no-repeat;\n}\n.BrowsecPopup_2_Action_Flag_sg{\n  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='4320' height='2880'%3E%3Crect fill='%23ed2939' width='4320' height='2880'/%3E%3Crect fill='%23fff' y='1440' width='4320' height='1440'/%3E%3Cpath fill='%23fff' d='M 1481.678,720 A 541.5,541.5 0 1 1 398.67798,720 A 541.5,541.5 0 1 1 1481.678,720 z'/%3E%3Cpath fill='%23ed2939' d='M 1651.835,720 A 511.73499,511.73499 0 1 1 628.36499,720 A 511.73499,511.73499 0 1 1 1651.835,720 z'/%3E%3Cpath fill='%23fff' id='star' d='M 1007.1951,733.06439 L 933.63466,676.63425 L 860.09279,733.09117 L 888.40587,642.09687 L 814.61147,586.0053 L 905.6704,586.1981 L 933.6049,495.07467 L 961.56934,586.18798 L 1052.6282,585.96246 L 978.8522,642.0808 L 1007.1951,733.06439 z'/%3E%3Cuse xlink:href='%23star' transform='translate(577.18853,0)'/%3E%3Cuse xlink:href='%23star' transform='translate(288.88853,-214.21117)'/%3E%3Cuse xlink:href='%23star' transform='translate(107.99953,342.74883)'/%3E%3Cuse xlink:href='%23star' transform='translate(469.18853,342.74883)'/%3E%3C/svg%3E%0A");\n  background-position: 12px 0;\n  background-size: auto 100%;\n  background-repeat: repeat;\n}\n.BrowsecPopup_2_Action_Flag_us{\n  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='975' height='650' viewBox='0 0 975 650'%3E%3Cdefs%3E%3Cpolygon id='pt' points='-0.1624598481164531,0 0,-0.5 0.1624598481164531,0' transform='scale(0.0616)' fill='%23FFF'/%3E%3Cg id='star'%3E%3Cuse xlink:href='%23pt' transform='rotate(-144)'/%3E%3Cuse xlink:href='%23pt' transform='rotate(-72)'/%3E%3Cuse xlink:href='%23pt'/%3E%3Cuse xlink:href='%23pt' transform='rotate(72)'/%3E%3Cuse xlink:href='%23pt' transform='rotate(144)'/%3E%3C/g%3E%3Cg id='s5'%3E%3Cuse xlink:href='%23star' x='-0.232'/%3E%3Cuse xlink:href='%23star' x='-0.116'/%3E%3Cuse xlink:href='%23star'/%3E%3Cuse xlink:href='%23star' x='0.116'/%3E%3Cuse xlink:href='%23star' x='0.232'/%3E%3C/g%3E%3Cg id='s6'%3E%3Cuse xlink:href='%23s5' x='-0.058'/%3E%3Cuse xlink:href='%23star' x='0.29'/%3E%3C/g%3E%3Cg id='x4'%3E%3Cuse xlink:href='%23s6'/%3E%3Cuse xlink:href='%23s5' y='0.054'/%3E%3Cuse xlink:href='%23s6' y='0.108'/%3E%3Cuse xlink:href='%23s5' y='0.162'/%3E%3C/g%3E%3Cg id='u'%3E%3Cuse xlink:href='%23x4' y='-0.216'/%3E%3Cuse xlink:href='%23x4'/%3E%3Cuse xlink:href='%23s6' y='0.216'/%3E%3C/g%3E%3Crect id='stripe' width='975' height='50' fill='%23BB133E'/%3E%3C/defs%3E%3Crect width='975' height='650' fill='%23FFF'/%3E%3Cuse xlink:href='%23stripe'/%3E%3Cuse xlink:href='%23stripe' y='100'/%3E%3Cuse xlink:href='%23stripe' y='200'/%3E%3Cuse xlink:href='%23stripe' y='300'/%3E%3Cuse xlink:href='%23stripe' y='400'/%3E%3Cuse xlink:href='%23stripe' y='500'/%3E%3Cuse xlink:href='%23stripe' y='600'/%3E%3Crect width='440' height='350' fill='%23002664'/%3E%3Cuse xlink:href='%23u' transform='translate(219,176)scale(650)'/%3E%3C/svg%3E%0A");\n  background-position: -17px 0;\n  background-size: auto 100%;\n  background-repeat: repeat;\n}\n.BrowsecPopup_2_Action_Flag_uk{\n  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 60 40' width='900' height='600'%3E%3Cdefs%3E%3CclipPath id='t'%3E%3Cpath d='M30,15H60V30zM30,15V30H0zM30,15H0V0zM30,15V0H60z'/%3E%3C/clipPath%3E%3C/defs%3E%3Crect width='60' height='40' style='fill:%2300247d'/%3E%3Cg style='stroke:%23ffffff;stroke-width:6.93225527;fill:none'%3E%3Cpath d='M0,0L60,40M60,0L0,40'/%3E%3Cpath d='M0,0L60,30M60,0L0,30' style='stroke:%23cf142b;stroke-width:4' clip-path='url(%23t)' transform='scale(1,1.3333333)'/%3E%3Cpath d='M30,0V40M0,20H60' style='stroke-width:11.55375878'/%3E%3Cpath d='M30,0V40M0,20H60' style='stroke:%23cf142b'/%3E%3C/g%3E%3C/svg%3E");\n  background-position: 50% 50%;\n  background-size: auto 100%;\n  background-repeat: no-repeat;\n}\n.BrowsecPopup_2_Action_Text{\n  padding: 15px 0 0;\n  font-weight: 600;\n  font-size: 14px;\n  color: #A3A0AC;\n  text-align: center;\n}\n\n\n.BrowsecPopup_Close{\n  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath id='ic_Close' style='fill: %23000; fill-rule: evenodd;' d='M764.977,666l4.8-4.812a0.705,0.705,0,1,0-1-1l-4.8,4.812-4.8-4.812a0.7,0.7,0,0,0-1,0,0.71,0.71,0,0,0,0,1l4.8,4.812-4.8,4.812a0.705,0.705,0,1,0,1,1l4.8-4.813,4.8,4.813a0.705,0.705,0,1,0,1-1Z' transform='translate(-758 -660)'/%3E%3C/svg%3E%0A") 50% 50% no-repeat;\n  background-size: 100% 100%;\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  cursor: pointer;\n}`,
    animate = (element, keyframes, options) => {
      const animation = element.animate(keyframes, options);
      return new Promise((resolve) => {
        animation.onfinish = () => {
          resolve();
        };
      });
    },
    sendMessage = (message) => {
      if ("undefined" != typeof browser) return browser.runtime.sendMessage(message);
      else
        return new Promise((resolve) => {
          chrome.runtime.sendMessage(message, resolve);
        });
    },
    buildElements = (proxyCountry) => {
      let style = document.createElement("style");
      style.appendChild(document.createTextNode(css)), document.head.appendChild(style);
      const root =
        ((html = (({ country }) =>
          `<div class="BrowsecPopup"><div class="BrowsecPopup_In">\n    <div class="BrowsecPopup_Step1">\n      <div class="BrowsecPopup_Title"><div class="BrowsecPopup_Title_In">\n        <div class="BrowsecPopup_Title_Td"><div class="BrowsecPopup_Title_Ball"></div></div>\n        <div class="BrowsecPopup_Title_Td"><div class="BrowsecPopup_Title_Text"></div></div>\n      </div></div>\n      <div class="BrowsecPopup_1_Table">\n        <div class="BrowsecPopup_1_Table_Tr">\n          <div class="BrowsecPopup_1_Table_Td">\n            <div class="BrowsecPopup_1_Table_Title">${
            "en" === language ? "Stay Free" : "Продолжить бесплатно"
          }</div>\n            <div class="BrowsecPopup_1_Table_Descr">${
            "en" === language ? "get more Free VPN time" : "получить больше бесплатного времени"
          }</div>\n          </div>\n          <div class="BrowsecPopup_1_Table_Td">\n            <div class="BrowsecPopup_1_Table_Title">${
            "en" === language ? "Upgrade to Premium" : "Улучшить до Premium"
          }</div>\n            <div class="BrowsecPopup_1_Table_Descr">${
            "en" === language ? "and enjoy unlimited time" : "пользоваться без ограничений"
          }</div>\n          </div>\n        </div>\n        <div class="BrowsecPopup_1_Table_Tr">\n          <div class="BrowsecPopup_1_Table_Td">\n            <div class="BrowsecPopup_1_Table_Circle" data-click="step 1: close" data-element-click="1_free_circle">\n              <div class="BrowsecPopup_1_Table_Circle_Bg"></div>\n              <div class="BrowsecPopup_1_Table_Circle_In"><div class="BrowsecPopup_1_Table_Circle_In2 BrowsecPopup_1_Step1">\n                <div class="BrowsecPopup_1_Step1_Big">${
            "en" === language ? "Free" : "Бесплатное"
          }</div>\n                <div>${
            "en" === language ? "time" : "время"
          }</div>\n              </div></div>\n            </div>\n          </div>\n          <div class="BrowsecPopup_1_Table_Td">\n            <div class="BrowsecPopup_1_Table_Circle" data-click="get premium" data-element-click="1_upgrade_circle">\n              <div class="BrowsecPopup_1_Table_Circle_Bg"></div>\n              <div class="BrowsecPopup_1_Table_Circle_In"><div class="BrowsecPopup_1_Table_Circle_In2 BrowsecPopup_1_Step2">\n                <div>${
            "en" === language ? "Starts from" : "от"
          }</div>\n                <div class="BrowsecPopup_1_Step2_Middle">${
            "en" === language ? "$2.99" : "224₽"
          }</div>\n                <div>${
            "en" === language ? "/month" : "в месяц"
          }</div>\n              </div></div>\n            </div>\n          </div>\n        </div>\n        <div class="BrowsecPopup_1_Table_Tr">\n          <div class="BrowsecPopup_1_Table_Td">\n            <div class="BrowsecPopup_1_Button" data-click="step 1: close" data-element-click="1_free_button">${
            "en" === language ? "Continue Free" : "Продолжить бесплатно"
          }</div>\n          </div>\n          <div class="BrowsecPopup_1_Table_Td">\n            <div class="BrowsecPopup_1_Button BrowsecPopup_1_Button_green" data-click="get premium" data-element-click="1_upgrade_button">${
            "en" === language ? "Go premium" : "Получить Premium"
          }</div>\n          </div>\n        </div>\n      </div>\n      <div class="BrowsecPopup_Close" data-click="step 1: next step" data-element-click="1_close"></div>\n    </div>\n\n    <div class="BrowsecPopup_Step2">\n      <div class="BrowsecPopup_Title"><div class="BrowsecPopup_Title_In">\n        <div class="BrowsecPopup_Title_Td"><div class="BrowsecPopup_Title_Ball"></div></div>\n        <div class="BrowsecPopup_Title_Td"><div class="BrowsecPopup_Title_Text"></div></div>\n      </div></div>\n\n      <div class="BrowsecPopup_2_Description">${
            "en" === language ? "Do you want to stop VPN?" : "Вы хотите выключить VPN?"
          }</div>\n      <div class="BrowsecPopup_2_Actions">\n        <div class="BrowsecPopup_2_Action"><div class="BrowsecPopup_2_Action_Clicker" data-click="disable proxy" data-element-click="2_stop">\n          <div class="BrowsecPopup_2_Action_Stop"></div>\n          <div class="BrowsecPopup_2_Action_Text">${
            "en" === language ? "Stop VPN" : "Выключить VPN"
          }</div>\n        </div></div>\n        <div class="BrowsecPopup_2_Action"><div class="BrowsecPopup_2_Action_Clicker" data-click="revert" data-element-click="2_proceed">\n          <div class="BrowsecPopup_2_Action_Flag BrowsecPopup_2_Action_Flag_${country}"></div>\n          <div class="BrowsecPopup_2_Action_Text">\n            ${
            "en" === language ? "Proceed with" : "Продолжить"
          }\n            <br/>\n            ${(() => {
            const textCountry = (() => {
              switch (country) {
                case "sg":
                  return "en" === language ? "Singapore" : "Сингапур";
                case "nl":
                  return "en" === language ? "Netherlands" : "Нидерланды";
                case "uk":
                  return "en" === language ? "United Kingdom" : "Великобритания";
                case "us":
                  return "en" === language ? "United States" : "США";
                default:
                  return "";
              }
            })();
            return "en" === language ? `${textCountry} VPN` : `с VPN ${textCountry}`;
          })()}\n          </div>\n        </div></div>\n      </div>\n      <div class="BrowsecPopup_Close" data-click="disable proxy" data-element-click="2_close"></div>\n    </div>\n    \n  </div></div>`)(
          { country: proxyCountry }
        )),
        new DOMParser().parseFromString(html, "text/html").body.firstChild);
      var html;
      const background = root.querySelector(".BrowsecPopup_In");
      if (!background) throw new Error('No "background" element');
      const step1 = root.querySelector(".BrowsecPopup_Step1");
      if (!step1) throw new Error('No "step1" element');
      const step2 = root.querySelector(".BrowsecPopup_Step2");
      if (!step2) throw new Error('No "step2" element');
      for (const element of root.querySelectorAll('[data-click="step 1: close"]'))
        element.addEventListener("click", async () => {
          if (!animationInProgress)
            await animate(root, [{ opacity: 1 }, { opacity: 0 }], { duration: 300, easing: "linear" }),
              (root.style.cssText = "opacity:0;"),
              root.remove();
        });
      for (const element of root.querySelectorAll('[data-click="step 1: next step"]'))
        element.addEventListener("click", async () => {
          if (animationInProgress) return;
          (animationInProgress = !0),
            await animate(step1, [{ opacity: 1 }, { opacity: 0 }], { duration: 300, easing: "linear" }),
            (step1.style.cssText = "opacity: 0;");
          const baseHeight = background.offsetHeight,
            baseWidth = background.offsetWidth;
          (step1.style.cssText = "display:none;"), (step2.style.cssText = "display:block;");
          const goalHeight = background.offsetHeight;
          (background.style.cssText = `width:${baseWidth}px;height:${baseHeight}px;`),
            (step2.style.cssText = "display:block;opacity:0;"),
            await animate(
              background,
              [
                { width: baseWidth + "px", height: baseHeight + "px" },
                { width: "490px", height: goalHeight + "px" }
              ],
              { duration: 300, easing: "linear" }
            ),
            (background.style.cssText = "width: 490px;"),
            await animate(step2, [{ opacity: 0 }, { opacity: 1 }], { duration: 300, easing: "linear" }),
            (step2.style.cssText = "display:block;"),
            (animationInProgress = !1);
        });
      for (const element of root.querySelectorAll('[data-click="disable proxy"]'))
        element.addEventListener("click", async () => {
          if (!animationInProgress)
            sendMessage({ type: "paywall: disable proxy" }),
              await animate(root, [{ opacity: 1 }, { opacity: 0 }], { duration: 300, easing: "linear" }),
              (root.style.cssText = "opacity:0;"),
              root.remove(),
              await new Promise((resolve) => {
                setTimeout(resolve, 500);
              }),
              location.reload();
        });
      for (const element of root.querySelectorAll('[data-click="get premium"]')) {
        const isCircle = element.matches('[data-element-click="1_upgrade_circle"]');
        element.addEventListener("click", async () => {
          if (!animationInProgress) {
            sendMessage({ type: "paywall: show premium", source: isCircle ? "circle" : "button" }),
              await new Promise((resolve) => {
                setTimeout(resolve, 5e3);
              }),
              await animate(root, [{ opacity: 1 }, { opacity: 0 }], { duration: 300, easing: "linear" }),
              (root.style.cssText = "opacity:0;"),
              root.remove();
          }
        });
      }
      for (const element of root.querySelectorAll('[data-click="revert"]'))
        element.addEventListener("click", async () => {
          if (animationInProgress) return;
          (animationInProgress = !0), await animate(step2, [{ opacity: 1 }, { opacity: 0 }], { duration: 300, easing: "linear" });
          const baseHeight = background.offsetHeight;
          (step2.style.cssText = "display:none"), (step1.style.cssText = "opacity: 0;"), (background.style.cssText = "");
          const goalHeight = background.offsetHeight,
            goalWidth = background.offsetWidth;
          (background.style.cssText = `width:490px;height:${baseHeight}px;`),
            await animate(
              background,
              [
                { width: "490px", height: baseHeight + "px" },
                { width: goalWidth + "px", height: goalHeight + "px" }
              ],
              { duration: 300, easing: "linear" }
            ),
            (background.style.cssText = ""),
            await animate(step1, [{ opacity: 0 }, { opacity: 1 }], { duration: 300, easing: "linear" }),
            (step1.style.cssText = ""),
            (animationInProgress = !1);
        });
      for (const element of root.querySelectorAll("[data-element-click]")) {
        const propertyValue = element.dataset.elementClick;
        element.addEventListener("click", () => {
          sendMessage({ type: "paywall: jitsu", event: propertyValue });
        });
      }
      sendMessage({ type: "paywall: jitsu", event: "1" }), document.body.append(root);
    },
    domLoadedPromise = (async () => {
      if ("interactive" !== document.readyState && "complete" !== document.readyState)
        return new Promise((resolve) => {
          document.addEventListener("DOMContentLoaded", () => {
            resolve();
          });
        });
    })();
  let animationInProgress = !1;
  const time61secondsMarkReached = new tools_Deferred(),
    proxyCountryPromise = sendMessage({ type: "paywall: has proxy", url: location.href });
  (async () => {
    const proxyCountry = await proxyCountryPromise;
    if (!proxyCountry) return;
    await domLoadedPromise,
      await new Promise((resolve) => {
        setTimeout(resolve, 61e3);
      }),
      time61secondsMarkReached.resolve(),
      await new Promise((resolve) => {
        if ("visible" !== document.visibilityState)
          document.addEventListener("visibilitychange", () => {
            if ("visible" === document.visibilityState) resolve();
          });
        else resolve();
      });
    if (await sendMessage({ type: "paywall: state" })) buildElements(proxyCountry);
  })();
  ("undefined" != typeof browser ? browser : chrome).runtime.onMessage.addListener(async (message) => {
    if ("check paywall activation" !== (null == message ? void 0 : message.type)) return;
    const proxyCountry = await proxyCountryPromise;
    if (!proxyCountry) return;
    await time61secondsMarkReached;
    if (await sendMessage({ type: "paywall: state" })) buildElements(proxyCountry);
  });
})();
