var pwagelabel = document.getElementById("pwagelabel"),
  cpwbtn = (pwagelabel && set_innertext(pwagelabel, ""), document.getElementById("cpwbtn")),
  cpwbtnmini = document.getElementById("cpwbtnmini"),
  cpwfieldbtn = (cpwbtnmini && set_innertext(cpwbtnmini, gs("Change Password Automatically")), document.getElementById("cpwfieldbtn"));
cpwfieldbtn && set_innertext(cpwfieldbtn, gs("Change Password Automatically")),
  sr(document, "save", "value", "Save"),
  sr(document, "cancel", "value", "Cancel"),
  document.getElementById("deltext") && set_innertext(document.getElementById("deltext"), gs("Delete")),
  document.getElementById("sharetext") && set_innertext(document.getElementById("sharetext"), gs("Share")),
  document.getElementById("sharehistory") && set_innertext(document.getElementById("sharehistory"), gs("History"));
