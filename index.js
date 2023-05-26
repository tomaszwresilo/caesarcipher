import { crypter } from "./scripts/code";
import { copyClipboard } from "./scripts/copy";

document.getElementById("lockButton").onclick = function () {
  crypter();
};
document.getElementById("copyBtn").onclick = function () {
  copyClipboard();
};
