function crypter(){

    let input = document.getElementById("input").value.trim().replace(/\s/g, '');


    if(typeof input !== 'string'){
        return document.getElementById("resolut").innerHTML ="Pleas enter a string!";
    }
    if(input == ''){
        return document.getElementById("resolut").innerHTML ="Textbox is empty!";
    }


    let inputInTable = [...input.toLowerCase()];

    const alphabetInTable = "abcdefghijklmnopqrstuvwxyz";
    const numbersInTable = "0123456789";


    let crypt = inputInTable.map(el => {
        if(alphabetInTable.indexOf(el) == -1) return el;
      if(alphabetInTable.indexOf(el)+13 >= 26) return alphabetInTable.indexOf(el)+13-26;
      return alphabetInTable.indexOf(el)+13;
    });
    let add = crypt.map(index => {
      if(typeof index == 'string')
        {
          return numbersInTable[index];
        }
         return alphabetInTable[index];
    });

    let resolut = add.join('');
    let finish = [];


    for(let i = input.length-1; i >= 0; i--){

      if(input[i] == input[i].toUpperCase())
      {
        finish.push(resolut[i].toUpperCase());
      }
    else
      {
        finish.push(resolut[i].toLowerCase());
      }

    }

    return document.getElementById("resolut").innerHTML =(finish.reverse().join(''))


    }
    export {crypter};
