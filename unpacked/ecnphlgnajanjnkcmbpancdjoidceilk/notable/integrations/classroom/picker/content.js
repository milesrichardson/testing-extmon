const CLASSROOM_PAGE_ORIGIN = "https://classroom.google.com";
function pickFile(e, l) {
  fileName = " ";
  let n = `"[1,[1,[[[\\"${e}\\",2],\\"${fileName}\\",null,\\"0AJBsEMnYJxswUk9PVA\\",[\\"0AJBsEMnYJxswUk9PVA\\"],9,\\"application/pdf\\",\\"https://drive.google.com/open?id=${e}&authuser=0\\",\\"https://lh3.google.com/u/0/d/${e}={size}\\",[[\\"https://lh3.google.com/u/0/d/${e}=s2048\\"]],\\"https://drive-thirdparty.googleusercontent.com/16/type/application/pdf\\",[1590974986,null],null,null,null,null,null,null,null,null,[true,true,null,[1611622395,667000000],4,null,null,null,true,\\"https://drive.google.com/uc?id=${e}&authuser=0&export=download\\"],[],164520,null,null,null,null,null,null,null,null]],1],null,[]]"`,
    s = `{"s":"/${window.name}::host-message-handler","f":"${window.name}","r":"${window.name}","t":"${l}","c":7,"a":[{"iframe-command":${n}}],"g":false}`;
  window.parent.postMessage(`!_${s}`, CLASSROOM_PAGE_ORIGIN);
}
window.parent.postMessage({ kamiMessage: { type: "script_ready" } }, CLASSROOM_PAGE_ORIGIN),
  window.addEventListener("message", (e) => {
    (kamiMessage = e.data.kamiMessage),
      (isPickCommand = kamiMessage && "command" == kamiMessage.type && "pick_file" == kamiMessage.command),
      isPickCommand && e.origin == CLASSROOM_PAGE_ORIGIN && pickFile(kamiMessage.driveFileId, kamiMessage.rpcToken);
  });
