import {crypter} from './code';
import {copyClipboard} from './copy';

document.getElementById("lockButton").onclick = function() {crypter()};
document.getElementById("copyBtn").onclick = function() {copyClipboard()};
