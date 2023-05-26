function copyClipboard() {
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(resolut);
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("Copy");
}

export { copyClipboard };
