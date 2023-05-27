import { input, result, encrypionType } from "./index.js";

function crypter(input, result, encrypionType) {
  if (typeof input !== "string") {
    result.innerText = "Please enter a string!";
    return;
  }

  if (input.trim() === "") {
    result.innerText = "Textbox is empty!";
    return;
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const wordInTable = input.toLowerCase().split("");

  const mappingArray = wordInTable.map((element) => {
    const indexInAlphabet = alphabet.indexOf(element);

    if (indexInAlphabet === -1) {
      return element;
    }

    const encryptedIndex = (indexInAlphabet + encrypionType) % alphabet.length;
    return alphabet[encryptedIndex];
  });

  result.innerText = mappingArray.join("");
}

export { crypter };
