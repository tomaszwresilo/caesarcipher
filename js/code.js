function crypter() {
  const input = document
    .getElementById("input")
    .value.trim()
    .replace(/\s/g, "");

  if (typeof input !== "string") {
    return (document.getElementById("resolut").innerHTML =
      "Pleas enter a string!");
  }
  if (input == "") {
    return (document.getElementById("resolut").innerHTML = "Textbox is empty!");
  }

  const inputInTable = [...input.toLowerCase()];

  const alphabetInTable = "abcdefghijklmnopqrstuvwxyz";
  const numbersInTable = "0123456789";
  const alphabetLength = 26;
  const shift = 13;
  const isNumber = -1;

  const crypt = inputInTable.map((el) => {
    if (alphabetInTable.indexOf(el) == isNumber) return el;
    if (alphabetInTable.indexOf(el) + shift >= alphabetLength)
      return alphabetInTable.indexOf(el) + shift - alphabetLength;
    return alphabetInTable.indexOf(el) + shift;
  });
  const add = crypt.map((index) => {
    if (typeof index == "string") {
      return numbersInTable[index];
    }
    return alphabetInTable[index];
  });

  const resolut = add.join("");
  const finish = [];

  for (let i = input.length - 1; i >= 0; i--) {
    if (input[i] == input[i].toUpperCase()) {
      finish.push(resolut[i].toUpperCase());
    } else {
      finish.push(resolut[i].toLowerCase());
    }
  }

  return (document.getElementById("resolut").innerHTML = finish
    .reverse()
    .join(""));
}
export { crypter };
