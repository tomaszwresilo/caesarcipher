function e(e,t){if("string"!=typeof e)return t.innerHTML="Please enter a string!";if(""===e.trim())return t.innerHTML="Textbox is empty!";const n="abcdefghijklmnopqrstuvwxyz",o=e.toLowerCase().split(""),c=o.map((e=>{n.indexOf(e);const t=n.indexOf(e);return-1===t?e:n[(t+13)%26]}));t.innerHTML=c.join("")}const t=document.getElementById("lockButton"),n=document.getElementById("copyBtn");t.addEventListener("click",(()=>{e(document.getElementById("input").value.trim().replace(/\s/g,""),document.getElementById("resolut"))})),n.addEventListener("click",(function(){const e=window.getSelection(),t=document.createRange();t.selectNodeContents(resolut),e.removeAllRanges(),e.addRange(t),document.execCommand("Copy")}));