import { input, resolut, encrypionType } from "./index.js";

function crypter(input, resolut, encrypionType) {
  if (typeof input !== "string") {
    return (resolut.innerText = "Please enter a string!");
  }
  if (input.trim() === "") {
    return (resolut.innerText = "Textbox is empty!");
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const wordInTable = input.toLowerCase().split("");
  const mappingArray = wordInTable.map((element) => {
    const remainingCharacters = alphabet.length - alphabet.indexOf(element);
    const indexInAlphabet = alphabet.indexOf(element);

    if (indexInAlphabet === -1) {
      return element;
    }

    return alphabet[(indexInAlphabet + encrypionType) % alphabet.length];
  });

  resolut.innerText = mappingArray.join("");
}

export { crypter };
