import { crypter } from "./code";
import { copyClipboard } from "./copy";

const lockButton = document.getElementById("lockButton");
const copyBtn = document.getElementById("copyBtn");

lockButton.addEventListener("click", () => {
  const input = document
    .getElementById("input")
    .value.trim()
    .replace(/\s/g, "");
  const resolut = document.getElementById("resolut");
  crypter(input, resolut);
});

copyBtn.addEventListener("click", copyClipboard);

export { input, resolut };
