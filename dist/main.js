(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"#main {\r\n    display: flex;\r\n    position: relative;\r\n    flex-direction: column;\r\n    background-color: aliceblue;   \r\n    justify-content: space-between;\r\n}\r\n\r\n#header {\r\n    justify-self: center;\r\n    text-align: center;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    font-size: larger;\r\n    font-weight: bold;\r\n\r\n}\r\n\r\n#sideBar {\r\n    /* color: whitesmoke; */\r\n    position: absolute;\r\n    top: 150px;\r\n    background-color: rgb(173,216,230, .2);\r\n    width: 10rem;\r\n    height: 100vh;\r\n}\r\n\r\n#Project {\r\n    color: black;\r\n    opacity: 100%;\r\n\r\n}\r\n\r\n#container {\r\n    padding: 2%;\r\n    position: relative;\r\n    left: auto;\r\n    text-align: center;\r\n    justify-content: center;\r\n} \r\n\r\n#inputContainer{\r\n    position: relative;\r\n    margin: auto;\r\n    font-size: larger;\r\n    text-align: center;\r\n    width: 60%;\r\n}\r\n\r\n#editContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-size: larger;\r\n    padding: 2%;\r\n    border: none;\r\n    width: 50%;\r\n    position: relative;\r\n    margin: auto;\r\n}\r\n\r\n#descEdit, #taskEdit, #dateEdit {\r\n    font-size: larger;\r\n\r\n} \r\n\r\n#editSubmit {\r\n    width: auto;\r\n    background-color: teal;\r\n    color:whitesmoke;\r\n    width: fit-content;\r\n    text-align: center;\r\n    margin: auto;\r\n    padding:2%;\r\n\r\n}\r\n\r\n#editCancel {\r\n\r\n    width: auto;\r\n    background-color: red;\r\n    color:whitesmoke;\r\n    width: fit-content;\r\n    text-align: center;\r\n    margin: auto;\r\n    padding:2%;\r\n}\r\n\r\n#submitBtn {\r\n    width: 100%;\r\n    font-size: large;\r\n    text-align: center;\r\n    justify-content: center;\r\n    background-color: teal;\r\n    color: whitesmoke;\r\n    padding: 2%;\r\n}\r\n\r\n#cancelSubmit {\r\n\r\n    width: fit-content%;\r\n    font-size: large;\r\n    text-align: center;\r\n    justify-content: center;\r\n    background-color: red;\r\n    color: whitesmoke;\r\n    padding: 2%;\r\n\r\n}\r\n\r\n#addTask {\r\nwidth: 40%;\r\nfont-size: large;\r\ntext-align: center;\r\njustify-content: center;\r\nbackground-color: teal;\r\ncolor: whitesmoke;\r\npadding: 1%;\r\n}\r\n\r\n#taskInput, #taskDescription, #projectInput {\r\n    display: flex;\r\n    width: 100%;\r\n    font-size: large;\r\n    border: none;\r\n    padding-bottom: 2%; \r\n    padding-top: 2%;   \r\n}\r\n\r\n#dateSelect {\r\n    font-size: larger;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n\r\n#hamburgerMenu {\r\n    padding:2%;\r\n    width: fit-content;\r\n    margin: left;\r\n\r\n}\r\n\r\n.ham-bar {\r\n    display: block;\r\n    width: 25px;\r\n    height: 3px;\r\n    background-color: black;\r\n    margin: 5px auto;\r\n\r\n}\r\n\r\n#taskSection {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 50%;\r\n    padding: 2%;\r\n    margin: auto;\r\n}\r\n\r\n.taskItem {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: large;\r\n    height: fit-content;\r\n    width: 80%;\r\n}\r\n\r\n.checkBox {\r\n    display: inline-block;\r\n    padding: 1em;\r\n    height: 25px;\r\n    width: 25px;\r\n\r\n}\r\n\r\n.taskTitle {\r\n    display: inline;\r\n    flex-direction: column;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    font-size: x-large;\r\n}\r\n\r\n.taskContent {\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: large;\r\n    flex-wrap: wrap;\r\n    \r\n}\r\n\r\n.hide {\r\n    visibility: hidden;\r\n}\r\n\r\n.hide-bar {\r\n    transform: translateX(-200%);\r\n    position: absolute;\r\n    transition: transform .5s;\r\n}\r\n\r\n\r\n.unhide-bar {\r\n    transform: translateX(0%);\r\n    transition: transform .5s;\r\n    \r\n}\r\n\r\n.side-project {\r\n    font-size: large;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    border: solid;\r\n    border-radius: 5%;\r\n}\r\n\r\n.list-style {\r\n    font-size: medium;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n\r\n\r\n}",""]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(i[d]=!0)}for(var o=0;o<e.length;o++){var c=[].concat(e[o]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},d=[],o=0;o<e.length;o++){var c=e[o],s=r.base?c[0]+r.base:c[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var m=n(u),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==m?(t[m].references++,t[m].updater(p)):t.push({identifier:u,updater:i(p,r),references:1}),d.push(u)}return d}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var d=0;d<a.length;d++){var o=n(a[d]);t[o].references--}for(var c=r(e,i),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,i=n.media,a=n.sourceMap;i?e.setAttribute("media",i):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=()=>{let e=document.getElementById("sideBar");e.classList.contains("hide-bar")?(e.classList.add("unhide-bar"),e.classList.remove("hide-bar")):e.classList.contains("unhide-bar")&&(e.classList.add("hide-bar"),e.classList.remove("unhide-bar"))},t=(e,t,n,r)=>({type:e,parent:t,id:n,build:()=>{let i=document.createElement(e),a=document.getElementById(t);i.id=n,i.innerText=r,a.appendChild(i)}}),r=t("div","main","header",""),i=t("div","main","sideBar",""),a=t("div","header","title","To Doer-er"),d=t("p","title","subtitle","The To Do list for only the doiest!"),o=t("div","main","container",""),c=t("button","container","addTask","Add Task"),s=t("div","container","taskSection","");window.activeProjects={},r.build(),a.build(),d.build(),o.build(),i.build(),c.build(),s.build(),(()=>{let t=document.getElementById("header"),n=document.createElement("div");n.id="hamburgerMenu",t.appendChild(n);let r=document.createElement("span"),i=document.createElement("span"),a=document.createElement("span");r.classList.add("ham-bar"),i.classList.add("ham-bar"),a.classList.add("ham-bar"),n.appendChild(r),n.appendChild(i),n.appendChild(a),n.addEventListener("mouseover",e)})(),(()=>{let e=document.getElementById("sideBar");e.classList.add("hide-bar");let t=document.createElement("div");t.id="Project",t.innerText="Projects",e.appendChild(t)})();const l=()=>{let e=document.querySelectorAll(".checkBox");for(let t=0;t<e.length;t++){let n=e[t],r=window[n.id];!0===n.checked?r.status=!0:!1===n.checked&&(r.status=!1)}},u=()=>{let e=0,t=document.getElementById("Project");const n=e=>{let t=e.srcElement.id,n=document.getElementById(t).childNodes;for(let e=1;n.length>e;e++)n[e].classList.contains("hide-bar")?(n[e].classList.remove("hide-bar"),n[e].classList.add("unhide-bar")):(n[e].classList.add("hide-bar"),n[e].classList.remove("unhide-bar"))};for(t.childNodes.length>1&&(t.innerHTML="Projects");e<Object.values(activeProjects).length;){let t=document.createElement("div");t.classList.add("side-project"),t.innerHTML=Object.values(activeProjects)[e].projectName,t.id=Object.keys(activeProjects)[e],t.addEventListener("mouseover",(e=>{n(e)})),document.getElementById("Project").appendChild(t),Object.values(activeProjects)[e].tasks.forEach((t=>{let n=document.createElement("li");n.classList.add("list-style"),n.classList.add("hide-bar"),n.id=t.title,n.innerHTML=t.title,document.getElementById(Object.keys(activeProjects)[e]).appendChild(n)})),e++}},m=(e,t,n,r,i)=>({type:e,parent:t,id:n,textType:r,build:()=>{let a=document.createElement(e),d=document.getElementById(t);a.id=n,"innerText"===r?a.innerText=i:"innerHTML"===r?a.innerHTML=i:"placeholder"===r&&(a.placeholder=i),d.appendChild(a)}});let p=1,h=1;const f=()=>{const e=document.getElementById("taskSection"),t=document.getElementById("taskInput").value,n=document.getElementById("taskDescription").value,r=document.getElementById("projectInput").value,i=document.getElementById("dateSelect").value;let a=window["task_"+p]={title:t,description:n,entry:p,dueDate:i,project:r,notes:undefined,status:undefined};(()=>{if(0===Object.keys(activeProjects).length){let e=activeProjects.project_1=new Object;e.projectName=r,e.tasks=[],e.tasks.push(a)}else Object.keys(activeProjects.length>=1)&&Object.values(activeProjects).forEach((e=>{if(e.projectName===r)e.tasks.push(a);else if(!1===Object.values(activeProjects).some((e=>e.projectName===r))){h++;let e=activeProjects[`project_ ${h}`]=new Object;e.projectName=r,e.tasks=[],e.tasks.push(a),h=Object.keys(activeProjects).length}}));u()})();const d=document.createElement("div"),o=document.createElement("div"),c=document.createElement("div");let s=document.createElement("div"),f="task_"+p++;s.innerHTML=`<input type ="checkbox" id = ${f} \n      value = ${a.title} class = "checkBox">`,s.addEventListener("click",l),s.id=f,s.classList.add("taskItem"),d.innerText=`${a.title}`,d.classList.add("taskTitle"),d.addEventListener("click",(()=>{var e;e=s,null===document.getElementById("editContainer")&&(m("div","container","editContainer","innerText","").build(),m("h5","editContainer","","innerText","Task Editor").build(),m("label","editContainer","taskLabel","innerText","Task Name: ").build(),m("input","editContainer","taskEdit","placeholder",window[e.id].title).build(),m("label","editContainer","descLabel","innerText","Task Description: ").build(),m("input","editContainer","descEdit","placeholder",window[e.id].description).build(),m("label","editContainer","dateLabel","innerText",`Due Date (Current: ${window[e.id].dueDate}) `).build(),m("input","editContainer","dateEdit","innerText",window[e.id].dueDate).build(),document.getElementById("dateEdit").type="date",m("button","editContainer","editSubmit","innerHTML","submit").build(),document.getElementById("editSubmit").addEventListener("click",(()=>{let t=document.getElementById("taskEdit"),n=document.getElementById("descEdit");window[e.id].title=t.value,window[e.id].description=n.value,document.getElementById(e.id).childNodes[1].innerText=t.value,document.getElementById(e.id).childNodes[1].innerText=n.value,u(),document.getElementById("editContainer").remove()})),m("button","editContainer","editCancel","innerText","cancel").build(),document.getElementById("editCancel").addEventListener("click",(()=>{document.getElementById("editContainer").remove()})))})),o.innerText=`${a.description}`,o.classList.add("taskContent"),c.innerText=`${a.dueDate}`,c.classList.add("taskDueDate"),e.append(s),s.append(d),d.append(o),o.append(c),document.getElementById("addTask").classList.remove("hide"),document.getElementById("inputContainer").remove()},b=(e,t)=>{for(let n in t)e.setAttribute(n,t[n])};document.getElementById("addTask").addEventListener("click",(()=>{document.getElementById("addTask").classList.add("hide");let e=document.createElement("div");e.id="inputContainer",document.getElementById("taskSection").before(e);const t=document.createElement("input");b(t,{id:"taskInput",type:"text",task:"Task Name",placeholder:"Task Name",type:"value",maxlength:"20"}),e.appendChild(t);const n=document.createElement("input");b(n,{id:"taskDescription",type:"text",task:"Task Description",placeholder:"Description",type:"value",maxlength:"100"}),e.appendChild(n);const r=document.createElement("input");b(r,{type:"project",id:"projectInput",name:"Project Name",placeholder:"Project Name",type:"value",maxlength:"100"}),e.appendChild(r);const i=document.createElement("label");i.htmlFor="dateSelect",i.innerText="Due Date: ";const a=document.createElement("input");b(a,{type:"date",id:"dateSelect",name:"Due Date"}),e.appendChild(i),e.appendChild(a);const d=document.createElement("input");b(d,{type:"submit",value:"Submit",id:"submitBtn"}),d.addEventListener("click",f),e.appendChild(d);const o=document.createElement("input");b(o,{type:"button",value:"Cancel",id:"cancelSubmit"}),o.addEventListener("click",(()=>{document.getElementById("addTask").classList.remove("hide"),document.getElementById("inputContainer").remove()})),e.appendChild(o)}));var g=n(379),v=n.n(g),y=n(795),k=n.n(y),E=n(569),x=n.n(E),T=n(565),w=n.n(T),j=n(216),C=n.n(j),L=n(589),I=n.n(L),B=n(426),P={};P.styleTagTransform=I(),P.setAttributes=w(),P.insert=x().bind(null,"head"),P.domAPI=k(),P.insertStyleElement=C(),v()(B.Z,P),B.Z&&B.Z.locals&&B.Z.locals})()})();