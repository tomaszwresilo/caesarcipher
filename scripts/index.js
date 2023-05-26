import { crypter } from "./code.js";
import { copyClipboard } from "./copy.js";

const lockButton = document.querySelector("#lockButton");
const copyBtn = document.querySelector("#copyBtn");
const input = document.querySelector("#input");
const resolut = document.querySelector("#resolut");

function handleCrypter() {
  const inputValue = input.value.trim().replace(/\s/g, "");
  crypter(inputValue, resolut);
  input.value = "";
  input.focus();
}

function handleEnter(event) {
  if (event.key === "Enter") {
    handleCrypter();
    event.preventDefault();
  }
}

lockButton.addEventListener("click", handleCrypter);
copyBtn.addEventListener("click", copyClipboard);
input.addEventListener("keydown", handleEnter);

export { input, resolut };
