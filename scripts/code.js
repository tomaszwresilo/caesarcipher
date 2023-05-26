import { input, resolut } from "./index.js";

function crypter(input, resolut) {
  if (typeof input !== "string") {
    return (resolut.innerHTML = "Please enter a string!");
  }
  if (input.trim() === "") {
    return (resolut.innerHTML = "Textbox is empty!");
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const wordInTable = input.toLowerCase().split("");
  const shiftValue = 13;

  const mappingArray = wordInTable.map((element) => {
    const remainingCharacters = alphabet.length - alphabet.indexOf(element);
    const indexInAlphabet = alphabet.indexOf(element);

    if (indexInAlphabet === -1) {
      return element;
    }

    return alphabet[(indexInAlphabet + shiftValue) % alphabet.length];
  });

  resolut.innerHTML = mappingArray.join("");
}

export { crypter };
