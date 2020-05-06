import './css/style.css';
import {crypter} from './js/code';
import {copyClipboard} from './js/copy';

document.getElementById("lockButton").onclick = function() {crypter()};
document.getElementById("copyBtn").onclick = function() {copyClipboard()};
