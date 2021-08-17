(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(645),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,"#main {\r\n    display: flex;\r\n    position: relative;\r\n    flex-direction: column;\r\n    background-color: aliceblue;   \r\n    justify-content: space-between;\r\n}\r\n\r\n#header {\r\n    justify-self: center;\r\n    text-align: center;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    font-size: larger;\r\n    font-weight: bold;\r\n\r\n}\r\n\r\n#sideBar {\r\n    /* color: whitesmoke; */\r\n    position: absolute;\r\n    top: 150px;\r\n    background-color: rgb(173,216,230, .2);\r\n    width: 10rem;\r\n    height: 100vh;\r\n}\r\n\r\n#Project {\r\n    color: black;\r\n    opacity: 100%;\r\n\r\n}\r\n\r\n#container {\r\n    padding: 2%;\r\n    position: relative;\r\n    left: auto;\r\n    text-align: center;\r\n    justify-content: center;\r\n} \r\n\r\n#inputContainer {\r\n    position: relative;\r\n    left: 150px;    \r\n    font-size: larger;\r\n    text-align: center;\r\n    width: 60%;\r\n}\r\n\r\n#submitBtn {\r\n    width: 100%;\r\n    font-size: large;\r\n    text-align: center;\r\n    justify-content: center;\r\n    background-color: green;\r\n    color: whitesmoke;\r\n    padding: 2%;\r\n}\r\n\r\n#addTask {\r\nwidth: 40%;\r\nfont-size: large;\r\ntext-align: center;\r\njustify-content: center;\r\nbackground-color: green;\r\ncolor: whitesmoke;\r\npadding: 1%;\r\n}\r\n\r\n#taskInput, #taskDescription, #projectInput {\r\n    display: flex;\r\n    width: 100%;\r\n    font-size: large;\r\n    border: none;\r\n    padding-bottom: 2%; \r\n    padding-top: 2%;   \r\n}\r\n\r\n#dateSelect {\r\n    font-size: larger;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n\r\n#hamburgerMenu {\r\n    width: fit-content;\r\n    margin: left;\r\n\r\n}\r\n\r\n.ham-bar {\r\n    display: block;\r\n    width: 25px;\r\n    height: 3px;\r\n    background-color: black;\r\n    margin: 5px auto;\r\n\r\n}\r\n\r\n#taskSection {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    width: 50%;\r\n    padding: 2%;\r\n}\r\n\r\n.taskItem {\r\n    position: relative;\r\n    text-align:center;\r\n    font-size: large;\r\n    height: fit-content;\r\n    width: 80%;\r\n}\r\n\r\n.checkBox {\r\n    display: inline-block;\r\n    padding: 1em;\r\n    height: 25px;\r\n    width: 25px;\r\n\r\n}\r\n\r\n.taskTitle {\r\n    display: inline;\r\n    flex-direction: column;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    font-size: x-large;\r\n}\r\n\r\n.taskContent {\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: large;\r\n    flex-wrap: wrap;\r\n    \r\n}\r\n\r\n.hide {\r\n    visibility: hidden;\r\n}\r\n\r\n.hide-bar {\r\n    transform: translateX(-200%);\r\n    position: absolute;\r\n    transition: transform .5s;\r\n}\r\n\r\n\r\n.unhide-bar {\r\n    transform: translateX(0%);\r\n    transition: transform .5s;\r\n    \r\n}\r\n\r\n",""]);const a=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);r&&i[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},o=[],d=0;d<e.length;d++){var s=e[d],c=r.base?s[0]+r.base:s[0],l=a[c]||0,u="".concat(c," ").concat(l);a[c]=l+1;var m=t(u),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==m?(n[m].references++,n[m].updater(p)):n.push({identifier:u,updater:i(p,r),references:1}),o.push(u)}return o}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var d=t(a[o]);n[d].references--}for(var s=r(e,i),c=0;c<a.length;c++){var l=t(a[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,i=t.media,a=t.sourceMap;i?e.setAttribute("media",i):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{const e=()=>{let e=document.getElementById("sideBar");e.classList.contains("hide-bar")?(e.classList.add("unhide-bar"),e.classList.remove("hide-bar")):e.classList.contains("unhide-bar")&&(e.classList.add("hide-bar"),e.classList.remove("unhide-bar"))},n=(e,n,t,r)=>({type:e,parent:n,id:t,build:()=>{let i=document.createElement(e),a=document.getElementById(n);i.id=t,i.innerText=r,a.appendChild(i)}}),r=n("div","main","header",""),i=n("div","main","sideBar",""),a=n("div","header","title","To Doer-er"),o=n("p","title","subtitle","The To Do list for only the doiest!"),d=n("div","main","container",""),s=n("button","container","addTask","Add Task"),c=n("div","container","taskSection","");r.build(),a.build(),o.build(),d.build(),i.build(),s.build(),c.build(),(()=>{let n=document.getElementById("header"),t=document.createElement("div");t.id="hamburgerMenu",n.appendChild(t);let r=document.createElement("span"),i=document.createElement("span"),a=document.createElement("span");r.classList.add("ham-bar"),i.classList.add("ham-bar"),a.classList.add("ham-bar"),t.appendChild(r),t.appendChild(i),t.appendChild(a),t.addEventListener("click",e)})(),(()=>{let e=document.getElementById("sideBar");e.classList.add("hide-bar");let n=document.createElement("div");n.id="Project",n.innerText="Projects",e.appendChild(n)})();const l=()=>{let e=document.querySelectorAll(".checkBox");for(let n=0;n<e.length;n++){let t=e[n],r=window[t.id];!0===t.checked?r.status=!0:!1===t.checked&&(r.status=!1)}};let u=1;const m=()=>{const e=document.getElementById("taskSection"),n=document.getElementById("taskInput").value,t=document.getElementById("taskDescription").value,r=document.getElementById("projectInput").value,i=document.getElementById("dateSelect").value;let a=window["task_"+u]={title:n,description:t,entry:u,dueDate:i,project:r,notes:undefined,status:undefined};void 0===window[r]?(window[r]=new Object({projectName:r})).tasks=[n]:(window[r].tasks.push(n),console.log("already exists"));const o=document.createElement("div"),d=document.createElement("div"),s=(document.createElement("div"),document.createElement("div"));(()=>{let e="task_",n="",t="",r="";for(let i=1;i<1e3;i++){if(r=window[e+i].project,console.log(r+" testingprojName"),void 0===window[e+i])return void console.log("undefined, stop");if(!0===document.body.contains(document.getElementById(r)))console.log("EXISTSS");else{n=window[e+i];let r=document.createElement("div");r.innerHTML=window[n.project].projectName,r.id=window[n.project].projectName,t=window[n.project].tasks,document.getElementById("Project").appendChild(r);let a=document.createElement("li");a.innerHTML=t,r.appendChild(a),n="",t=""}}})();let c=document.createElement("div"),m="task_"+u++;c.innerHTML=`<input type ="checkbox" id = ${m} value = ${a.title} class = "checkBox">`,c.addEventListener("click",l),c.id=a.title,c.classList.add("taskItem"),o.innerText=`${a.title}`,o.classList.add("taskTitle"),d.innerText=`${a.description}`,d.classList.add("taskContent"),s.innerText=`${a.dueDate}`,s.classList.add("taskDueDate"),e.append(c),c.append(o),o.append(d),d.append(s),document.getElementById("addTask").classList.remove("hide"),document.getElementById("inputContainer").remove()},p=(e,n)=>{for(let t in n)e.setAttribute(t,n[t])};document.getElementById("addTask").addEventListener("click",(()=>{document.getElementById("addTask").classList.add("hide");let e=document.createElement("div");e.id="inputContainer",document.getElementById("taskSection").before(e);const n=document.createElement("input");p(n,{id:"taskInput",type:"text",task:"Task Name",placeholder:"Task Name",type:"value",maxlength:"20"}),e.appendChild(n);const t=document.createElement("input");p(t,{id:"taskDescription",type:"text",task:"Task Description",placeholder:"Description",type:"value",maxlength:"100"}),e.appendChild(t);const r=document.createElement("input");p(r,{type:"project",id:"projectInput",name:"Project Name",placeholder:"Project Name",type:"value",maxlength:"100"}),e.appendChild(r);const i=document.createElement("label");i.htmlFor="dateSelect",i.innerText="Due Date: ";const a=document.createElement("input");p(a,{type:"date",id:"dateSelect",name:"Due Date"}),e.appendChild(i),e.appendChild(a);const o=document.createElement("input");p(o,{type:"submit",value:"Submit",id:"submitBtn"}),o.addEventListener("click",m),e.appendChild(o)}));var f=t(379),h=t.n(f),g=t(795),v=t.n(g),b=t(569),y=t.n(b),k=t(565),w=t.n(k),x=t(216),E=t.n(x),T=t(589),I=t.n(T),j=t(426),C={};C.styleTagTransform=I(),C.setAttributes=w(),C.insert=y().bind(null,"head"),C.domAPI=v(),C.insertStyleElement=E(),h()(j.Z,C),j.Z&&j.Z.locals&&j.Z.locals})()})();