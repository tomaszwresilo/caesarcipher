function copyClipboard() {
    const elm = document.getElementById("resolut");
    // for Internet Explorer

    if(document.body.createTextRange) {
      const range = document.body.createTextRange();
      range.moveToElementText(elm);
      range.select();
      document.execCommand("Copy");
      alert("Copied div content to clipboard");
    }
    else if(window.getSelection) {
      // other browsers

      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(elm);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("Copy");
    }
  }

  export {copyClipboard};
