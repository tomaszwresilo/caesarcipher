function e(e,t,n){if("string"!=typeof e)return t.innerText="Please enter a string!";if(""===e.trim())return t.innerText="Textbox is empty!";const o="abcdefghijklmnopqrstuvwxyz",r=e.toLowerCase().split("").map((e=>{o.indexOf(e);const t=o.indexOf(e);return-1===t?e:o[(t+n)%26]}));t.innerText=r.join("")}const t=document.querySelector("#lockButton"),n=document.querySelector("#copyBtn"),o=document.querySelector("#input"),r=document.querySelector("#resolut"),c=document.querySelector("#shiftValue");function u(){const t=o.value.trim().replace(/\s/g,""),n=c.value;e(t,r,n),o.value="",o.focus()}t.addEventListener("click",u),n.addEventListener("click",(function(){const e=window.getSelection(),t=document.createRange();t.selectNodeContents(resolut),e.removeAllRanges(),e.addRange(t),document.execCommand("Copy")})),o.addEventListener("keydown",(function(e){"Enter"===e.key&&(u(),e.preventDefault())}));