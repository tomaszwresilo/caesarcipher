function copyClipboard() {
    let elm = document.getElementById("resolut");
    // for Internet Explorer

    if(document.body.createTextRange) {
      let range = document.body.createTextRange();
      range.moveToElementText(elm);
      range.select();
      document.execCommand("Copy");
      alert("Copied div content to clipboard");
    }
    else if(window.getSelection) {
      // other browsers

      let selection = window.getSelection();
      let range = document.createRange();
      range.selectNodeContents(elm);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("Copy");
    }
  }

  export {copyClipboard};
