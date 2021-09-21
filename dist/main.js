(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(645),a=n.n(i)()((function(e){return e[1]}));a.push([e.id,"#main {\n    display: flex;\n    position: relative;\n    flex-direction: column;\n    background-color: aliceblue;   \n    justify-content: space-between;\n}\n\n#header {\n    justify-self: center;\n    text-align: center;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-size: larger;\n    font-weight: bold;\n    border-color: steelblue;\n    background-color: lightsteelblue;\n    width: 100%;\n\n}\n\n#sideBar {\n    position: absolute;\n    top: 150px;\n    padding-top: 2rem;\n    background-color: lightsteelblue;\n    width: 11rem;\n    height: 100vh;\n\n}\n\n#Project {\n    color: black;\n    opacity: 100%;\n    font-weight: bolder;\n    font-size: x-large;\n    padding-bottom: 5%;\n}\n\n#container {\n    padding: 2%;\n    position: relative;\n    left: auto;\n    text-align: center;\n    justify-content: center;\n} \n\n#inputContainer{\n    position: relative;\n    margin: auto;\n    font-size: larger;\n    text-align: center;\n    width: 60%;\n    left: 1rem;\n}\n\n#editContainer {\n    display: flex;\n    flex-direction: column;\n    font-size: larger;\n    padding: 2%;\n    border: none;\n    width: 50%;\n    position: relative;\n    margin: auto;\n}\n\n#descEdit, #taskEdit, #dateEdit {\n    font-size: larger;\n\n} \n\n#editSubmit {\n    width: auto;\n    background-color: teal;\n    color:whitesmoke;\n    width: fit-content;\n    text-align: center;\n    margin: auto;\n    padding:2%;\n\n}\n\n#editCancel {\n\n    width: auto;\n    background-color: red;\n    color:whitesmoke;\n    width: fit-content;\n    text-align: center;\n    margin: auto;\n    padding:2%;\n}\n\n#submitBtn {\n    width: 100%;\n    font-size: large;\n    text-align: center;\n    justify-content: center;\n    background-color: teal;\n    color: whitesmoke;\n    padding: 2%;\n}\n\n#cancelSubmit {\n\n    width: fit-content;\n    font-size: large;\n    text-align: center;\n    justify-content: center;\n    background-color: red;\n    color: whitesmoke;\n    padding: 2%;\n\n}\n\n#addTask {\nwidth: 40%;\nfont-size: large;\ntext-align: center;\njustify-content: center;\nbackground-color: teal;\ncolor: whitesmoke;\npadding: 1%;\n}\n\n#taskInput, #taskDescription, #projectInput {\n    display: flex;\n    width: 100%;\n    font-size: large;\n    border: none;\n    padding-bottom: 2%; \n    padding-top: 2%;   \n}\n\n#dateSelect {\n    font-size: larger;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n}\n\n#hamburgerMenu {\n    padding:2%;\n    width: fit-content;\n    margin: left;\n\n}\n\n.ham-bar {\n    display: block;\n    width: 25px;\n    height: 3px;\n    background-color: black;\n    margin: 5px auto;\n\n}\n\n#taskSection {\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n    padding: 2%;\n    margin: auto;\n}\n\n.taskItem {\n    position: relative;\n    text-align: left;\n    font-size: large;\n    height: fit-content;\n    width: 80%;\n}\n\n.checkBox {\n    display: inline-block;\n    padding: 1em;\n    height: 25px;\n    width: 25px;\n\n}\n\n.taskTitle {\n    display: inline;\n    flex-direction: column;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-size: x-large;\n}\n\n.taskContent {\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    font-size: large;\n    flex-wrap: wrap;\n    \n}\n\n.hide {\n    visibility: hidden;\n}\n\n.hide-bar {\n    transform: translateX(-200%);\n    position: absolute;\n    transition: transform .5s;\n}\n\n\n.unhide-bar {\n    transform: translateX(0%);\n    transition: transform .5s;\n    \n}\n\n.side-project {\n    font-size: large;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-weight: bold;\n    padding: 2%;\n    border: none;\n}\n\n.list-style {\n    font-size: medium;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-weight: normal;\n    padding:1%;\n    border: none;\n\n}\n\n\n.triangle-right {\n    float:right;\n    width: 0;\n    height: 0;\n    border-top: .5rem solid transparent;\n    border-left: 1rem solid teal;\n    border-bottom: .5rem solid transparent;\n    position: static;\n    pointer-events: none;\n\n  }\n\n  .triangle-down {\n    float: right;\n    width: 0;\n    height: 0;\n    border-left: .5rem solid transparent;\n    border-right: .5rem solid transparent;\n    border-top: 1rem solid teal;\n    position: static;\n    pointer-events: none;\n  }\n\n",""]);const o=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(i)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(a[r]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);i&&a[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var o={},r=[],d=0;d<e.length;d++){var l=e[d],c=i.base?l[0]+i.base:l[0],s=o[c]||0,u="".concat(c," ").concat(s);o[c]=s+1;var m=n(u),p={css:l[1],media:l[2],sourceMap:l[3]};-1!==m?(t[m].references++,t[m].updater(p)):t.push({identifier:u,updater:a(p,i),references:1}),r.push(u)}return r}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=i(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<o.length;r++){var d=n(o[r]);t[d].references--}for(var l=i(e,a),c=0;c<o.length;c++){var s=n(o[c]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}o=l}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i=n.css,a=n.media,o=n.sourceMap;a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(i,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={id:i,exports:{}};return e[i](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=()=>{let e=document.getElementById("sideBar");e.classList.contains("hide-bar")?(e.classList.add("unhide-bar"),e.classList.remove("hide-bar")):e.classList.contains("unhide-bar")&&(e.classList.add("hide-bar"),e.classList.remove("unhide-bar"))},t=(e,t,n,i)=>({type:e,parent:t,id:n,build:()=>{let a=document.createElement(e),o=document.getElementById(t);a.id=n,a.innerText=i,o.appendChild(a)}}),i=t("div","main","header",""),a=t("div","main","sideBar",""),o=t("div","header","title","To Doer-er"),r=t("p","title","subtitle","The To Do list for only the doiest!"),d=t("div","main","container",""),l=t("button","container","addTask","Add Task"),c=t("div","container","taskSection","");window.activeProjects={},i.build(),o.build(),r.build(),d.build(),a.build(),l.build(),c.build(),(()=>{let t=document.getElementById("header"),n=document.createElement("div");n.id="hamburgerMenu",t.appendChild(n);let i=document.createElement("span"),a=document.createElement("span"),o=document.createElement("span");i.classList.add("ham-bar"),a.classList.add("ham-bar"),o.classList.add("ham-bar"),n.appendChild(i),n.appendChild(a),n.appendChild(o),n.addEventListener("click",e)})(),(()=>{let e=document.getElementById("sideBar");e.classList.add("hide-bar");let t=document.createElement("div");t.id="Project",t.innerText="Projects",e.appendChild(t)})(),(()=>{if(localStorage.length>0){console.log("existing projects... loading");for(let e=0;e<localStorage.length;e++){let t=localStorage.getItem(`project_${e}`),n=JSON.parse(t);console.log(n)}}})();const s=()=>{let e=0,t=document.getElementById("Project");const n=e=>{console.log("this is el:"+e);let t=e.srcElement.id,n=document.getElementById(t).childNodes;for(let e=2;n.length>e;e++)n[e].classList.contains("hide-bar")?(n[e].classList.remove("hide-bar"),n[e].classList.add("unhide-bar"),n[1].classList.remove("triangle-right"),n[1].classList.add("triangle-down")):(n[e].classList.add("hide-bar"),n[e].classList.remove("unhide-bar"),n[1].classList.remove("triangle-down"),n[1].classList.add("triangle-right"))};for(t.childNodes.length>1&&(t.innerHTML="Projects");e<Object.values(activeProjects).length;){let t=document.createElement("div");t.classList.add("side-project"),t.innerHTML=Object.values(activeProjects)[e].projectName,t.id=Object.keys(activeProjects)[e],t.addEventListener("click",(e=>{n(e)})),document.getElementById("Project").appendChild(t);let i=document.createElement("div");i.classList.add("triangle-right"),i.id="chevron",t.appendChild(i),Object.values(activeProjects)[e].tasks.forEach((t=>{let n=document.createElement("li");n.classList.add("list-style"),n.classList.add("hide-bar"),n.id=t.title,n.innerHTML=t.title,document.getElementById(Object.keys(activeProjects)[e]).appendChild(n)})),Object.values(activeProjects)[e].tasks.forEach((e=>{"deleted"===e.status&&(console.log("task is deleted"),document.getElementById(e.title).remove())})),e++}},u=()=>{let e=document.querySelectorAll(".checkBox");for(let t=0;t<e.length;t++){let n=e[t],i=window[n.id],a=document.getElementById(n.id),o=document.getElementById(n.value);!0===n.checked?(i.status="complete",a.setAttribute("style","text-decoration: line-through"),o.setAttribute("style","text-decoration: line-through")):!1===n.checked&&(i.status="incomplete",a.setAttribute("style","text-decoration: none"),o.setAttribute("style","text-decoration: none"))}},m=(e,t,n,i,a)=>({type:e,parent:t,id:n,textType:i,build:()=>{let o=document.createElement(e),r=document.getElementById(t);o.id=n,"innerText"===i?o.innerText=a:"innerHTML"===i?o.innerHTML=a:"placeholder"===i&&(o.placeholder=a),r.appendChild(o)}});let p=1;const g=()=>{document.getElementById("taskSection");const e=document.getElementById("taskInput").value,t=document.getElementById("taskDescription").value,n=document.getElementById("projectInput").value,i=document.getElementById("dateSelect").value;let a=window.task_1={title:e,description:t,entry:1,dueDate:i,project:n,notes:undefined,status:undefined};localStorage.setItem(a,JSON.stringify(a)),(()=>{if(0===Object.keys(activeProjects).length){let e=activeProjects.project_1=new Object;e.projectName=n,e.tasks=[],e.tasks.push(a),console.log(Object.keys(activeProjects)[0]),localStorage.setItem(Object.keys(activeProjects)[0],JSON.stringify(e))}else Object.keys(activeProjects.length>=1)&&Object.values(activeProjects).forEach((e=>{if(e.projectName===n){e.tasks.push(a);for(let t=0;t<Object.keys(activeProjects).length;t++)activeProjects[Object.keys(activeProjects)[t]].projectName==n&&localStorage.setItem(Object.keys(activeProjects)[t],JSON.stringify(e))}else if(!1===Object.values(activeProjects).some((e=>e.projectName===n))){p++;let e=activeProjects[`project_${p}`]=new Object;e.projectName=n,e.tasks=[],e.tasks.push(a),p=Object.keys(activeProjects).length;for(let t=0;t<Object.keys(activeProjects).length;t++)activeProjects[Object.keys(activeProjects)[t]].projectName==n&&localStorage.setItem(Object.keys(activeProjects)[t],JSON.stringify(e))}}));s()})(),(e=>{let t=1;const n=document.getElementById("taskSection"),i=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div");let r=document.createElement("div"),d="task_"+t++;r.innerHTML=`<input type ="checkbox" id = ${d} \n      value = ${e.title} class = "checkBox">`,r.addEventListener("click",u),r.id=d,r.classList.add("taskItem"),i.innerText=`${e.title}`,i.classList.add("taskTitle"),i.addEventListener("click",(()=>{var e;e=r,null===document.getElementById("editContainer")&&(m("div","container","editContainer","innerText","").build(),m("h5","editContainer","","innerText","Task Editor").build(),m("label","editContainer","taskLabel","innerText","Task Name: ").build(),m("input","editContainer","taskEdit","placeholder",window[e.id].title).build(),m("label","editContainer","descLabel","innerText","Task Description: ").build(),m("input","editContainer","descEdit","placeholder",window[e.id].description).build(),m("label","editContainer","dateLabel","innerText",`Due Date (Current: ${window[e.id].dueDate})`).build(),m("input","editContainer","dateEdit","innerText",window[e.id].dueDate).build(),document.getElementById("dateEdit").type="date",m("button","editContainer","editDelete","innerText","delete task").build(),document.getElementById("editDelete").addEventListener("click",(()=>{(e=>{let t=window[e.id].entry,n=window[e.id].project,i=window[`task_${t}`];Object.values(activeProjects).forEach((e=>{if(e.projectName===i.project)for(let a=0;a<e.tasks.length;a++)e.tasks[a].title===i.title&&(()=>{if(confirm("Are you sure you want to delete this task?")){let e=`task_${t}`;document.getElementById(e).remove(),document.getElementById(`${i.title}`).remove(),i.status="deleted",document.getElementById("editContainer").remove(),localStorage.removeItem(e);for(let e=0;e<Object.values(activeProjects).length;e++)Object.values(activeProjects)[e].projectName==n&&!0===Object.values(activeProjects)[e].tasks.every((e=>"deleted"==e.status))&&(console.log("no tasks in project remaining, removing project."),document.getElementById(Object.keys(activeProjects)[e]).remove(),localStorage.removeItem(Object.values(activeProjects)[e].projectName))}})()}))})(e)})),m("button","editContainer","editSubmit","innerText","submit").build(),document.getElementById("editSubmit").addEventListener("click",(()=>{let t=document.getElementById("taskEdit"),n=document.getElementById("descEdit");window[e.id].title=t.value,window[e.id].description=n.value,document.getElementById(e.id).childNodes[1].innerText=t.value,document.getElementById(e.id).childNodes[1].innerText=n.value,s(),document.getElementById("editContainer").remove()})),m("button","editContainer","editCancel","innerText","cancel").build(),document.getElementById("editCancel").addEventListener("click",(()=>{document.getElementById("editContainer").remove()})))})),a.innerText=`${e.description}`,a.classList.add("taskContent"),o.innerText=`${e.dueDate}`,o.classList.add("taskDueDate"),n.append(r),r.append(i),i.append(a),a.append(o),document.getElementById("addTask").classList.remove("hide"),document.getElementById("inputContainer").remove()})(a)},h=(e,t)=>{for(let n in t)e.setAttribute(n,t[n])};document.getElementById("addTask").addEventListener("click",(()=>{document.getElementById("addTask").classList.add("hide");let e=document.createElement("div");e.id="inputContainer",document.getElementById("taskSection").before(e);const t=document.createElement("input");h(t,{id:"taskInput",type:"text",task:"Task Name",placeholder:"Task Name",type:"value",maxlength:"20"}),e.appendChild(t);const n=document.createElement("input");h(n,{id:"taskDescription",type:"text",task:"Task Description",placeholder:"Description",type:"value",maxlength:"100"}),e.appendChild(n);const i=document.createElement("input");h(i,{type:"project",id:"projectInput",name:"Project Name",placeholder:"Project Name",type:"value",maxlength:"100"}),e.appendChild(i);const a=document.createElement("label");a.htmlFor="dateSelect",a.innerText="Due Date: ";const o=document.createElement("input");h(o,{type:"date",id:"dateSelect",name:"Due Date"}),e.appendChild(a),e.appendChild(o);const r=document.createElement("input");h(r,{type:"submit",value:"Submit",id:"submitBtn"}),r.addEventListener("click",g),e.appendChild(r);const d=document.createElement("input");h(d,{type:"button",value:"Cancel",id:"cancelSubmit"}),d.addEventListener("click",(()=>{document.getElementById("addTask").classList.remove("hide"),document.getElementById("inputContainer").remove()})),e.appendChild(d)}));var f=n(379),b=n.n(f),v=n(795),y=n.n(v),k=n(569),j=n.n(k),E=n(565),w=n.n(E),x=n(216),T=n.n(x),I=n(589),C=n.n(I),L=n(426),B={};B.styleTagTransform=C(),B.setAttributes=w(),B.insert=j().bind(null,"head"),B.domAPI=y(),B.insertStyleElement=T(),b()(L.Z,B),L.Z&&L.Z.locals&&L.Z.locals})()})();