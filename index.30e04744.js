function e(e,t){if("string"!=typeof e)return t.innerText="Please enter a string!";if(""===e.trim())return t.innerText="Textbox is empty!";const n="abcdefghijklmnopqrstuvwxyz",o=e.toLowerCase().split(""),r=o.map((e=>{n.indexOf(e);const t=n.indexOf(e);return-1===t?e:n[(t+13)%26]}));t.innerText=r.join("")}const t=document.querySelector("#lockButton"),n=document.querySelector("#copyBtn"),o=document.querySelector("#input"),r=document.querySelector("#resolut");function c(){e(o.value.trim().replace(/\s/g,""),r),o.value="",o.focus()}t.addEventListener("click",c),n.addEventListener("click",(function(){const e=window.getSelection(),t=document.createRange();t.selectNodeContents(resolut),e.removeAllRanges(),e.addRange(t),document.execCommand("Copy")})),o.addEventListener("keydown",(function(e){"Enter"===e.key&&(c(),e.preventDefault())}));