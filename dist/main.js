(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"#main {\r\n    display: flex;\r\n    position: relative;\r\n    flex-direction: column;\r\n    background-color: aliceblue;   \r\n    justify-content: space-between;\r\n}\r\n\r\n#header {\r\n    justify-self: center;\r\n    text-align: center;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    font-size: larger;\r\n    font-weight: bold;\r\n    border-color: steelblue;\r\n    background-color: lightsteelblue;\r\n    width: 100%;\r\n\r\n}\r\n\r\n#sideBar {\r\n    position: absolute;\r\n    top: 150px;\r\n    padding-top: 2rem;\r\n    background-color: lightsteelblue;\r\n    width: 11rem;\r\n    height: 100vh;\r\n\r\n}\r\n\r\n#Project {\r\n    color: black;\r\n    opacity: 100%;\r\n    font-weight: bolder;\r\n    font-size: x-large;\r\n    padding-bottom: 5%;\r\n}\r\n\r\n#container {\r\n    padding: 2%;\r\n    position: relative;\r\n    left: auto;\r\n    text-align: center;\r\n    justify-content: center;\r\n} \r\n\r\n#inputContainer{\r\n    position: relative;\r\n    margin: auto;\r\n    font-size: larger;\r\n    text-align: center;\r\n    width: 60%;\r\n    left: 1rem;\r\n}\r\n\r\n#editContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-size: larger;\r\n    padding: 2%;\r\n    border: none;\r\n    width: 50%;\r\n    position: relative;\r\n    margin: auto;\r\n}\r\n\r\n#descEdit, #taskEdit, #dateEdit {\r\n    font-size: larger;\r\n\r\n} \r\n\r\n#editSubmit {\r\n    width: auto;\r\n    background-color: teal;\r\n    color:whitesmoke;\r\n    width: fit-content;\r\n    text-align: center;\r\n    margin: auto;\r\n    padding:2%;\r\n\r\n}\r\n\r\n#editCancel {\r\n\r\n    width: auto;\r\n    background-color: red;\r\n    color:whitesmoke;\r\n    width: fit-content;\r\n    text-align: center;\r\n    margin: auto;\r\n    padding:2%;\r\n}\r\n\r\n#submitBtn {\r\n    width: 100%;\r\n    font-size: large;\r\n    text-align: center;\r\n    justify-content: center;\r\n    background-color: teal;\r\n    color: whitesmoke;\r\n    padding: 2%;\r\n}\r\n\r\n#cancelSubmit {\r\n\r\n    width: fit-content;\r\n    font-size: large;\r\n    text-align: center;\r\n    justify-content: center;\r\n    background-color: red;\r\n    color: whitesmoke;\r\n    padding: 2%;\r\n\r\n}\r\n\r\n#addTask {\r\nwidth: 40%;\r\nfont-size: large;\r\ntext-align: center;\r\njustify-content: center;\r\nbackground-color: teal;\r\ncolor: whitesmoke;\r\npadding: 1%;\r\n}\r\n\r\n#taskInput, #taskDescription, #projectInput {\r\n    display: flex;\r\n    width: 100%;\r\n    font-size: large;\r\n    border: none;\r\n    padding-bottom: 2%; \r\n    padding-top: 2%;   \r\n}\r\n\r\n#dateSelect {\r\n    font-size: larger;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n\r\n#hamburgerMenu {\r\n    padding:2%;\r\n    width: fit-content;\r\n    margin: left;\r\n\r\n}\r\n\r\n.ham-bar {\r\n    display: block;\r\n    width: 25px;\r\n    height: 3px;\r\n    background-color: black;\r\n    margin: 5px auto;\r\n\r\n}\r\n\r\n#taskSection {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 50%;\r\n    padding: 2%;\r\n    margin: auto;\r\n}\r\n\r\n.taskItem {\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: large;\r\n    height: fit-content;\r\n    width: 80%;\r\n}\r\n\r\n.checkBox {\r\n    display: inline-block;\r\n    padding: 1em;\r\n    height: 25px;\r\n    width: 25px;\r\n\r\n}\r\n\r\n.taskTitle {\r\n    display: inline;\r\n    flex-direction: column;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    font-size: x-large;\r\n}\r\n\r\n.taskContent {\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: large;\r\n    flex-wrap: wrap;\r\n    \r\n}\r\n\r\n.hide {\r\n    visibility: hidden;\r\n}\r\n\r\n.hide-bar {\r\n    transform: translateX(-200%);\r\n    position: absolute;\r\n    transition: transform .5s;\r\n}\r\n\r\n\r\n.unhide-bar {\r\n    transform: translateX(0%);\r\n    transition: transform .5s;\r\n    \r\n}\r\n\r\n.side-project {\r\n    font-size: large;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    font-weight: bold;\r\n    padding: 2%;\r\n    border: none;\r\n}\r\n\r\n.list-style {\r\n    font-size: medium;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    font-weight: normal;\r\n    padding:1%;\r\n    border: none;\r\n\r\n}\r\n\r\n\r\n.triangle-right {\r\n    float:right;\r\n    width: 0;\r\n    height: 0;\r\n    border-top: .5rem solid transparent;\r\n    border-left: 1rem solid teal;\r\n    border-bottom: .5rem solid transparent;\r\n    position: static;\r\n    pointer-events: none;\r\n\r\n  }\r\n\r\n  .triangle-down {\r\n    float: right;\r\n    width: 0;\r\n    height: 0;\r\n    border-left: .5rem solid transparent;\r\n    border-right: .5rem solid transparent;\r\n    border-top: 1rem solid teal;\r\n    position: static;\r\n    pointer-events: none;\r\n  }\r\n\r\n",""]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);r&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},o=[],d=0;d<e.length;d++){var s=e[d],l=r.base?s[0]+r.base:s[0],c=a[l]||0,u="".concat(l," ").concat(c);a[l]=c+1;var m=n(u),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==m?(t[m].references++,t[m].updater(p)):t.push({identifier:u,updater:i(p,r),references:1}),o.push(u)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var d=n(a[o]);t[d].references--}for(var s=r(e,i),l=0;l<a.length;l++){var c=n(a[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,i=n.media,a=n.sourceMap;i?e.setAttribute("media",i):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=()=>{let e=document.getElementById("sideBar");e.classList.contains("hide-bar")?(e.classList.add("unhide-bar"),e.classList.remove("hide-bar")):e.classList.contains("unhide-bar")&&(e.classList.add("hide-bar"),e.classList.remove("unhide-bar"))},t=()=>{let e=document.querySelectorAll(".checkBox");for(let t=0;t<e.length;t++){let n=e[t],r=window[n.id],i=document.getElementById(n.id),a=document.getElementById(r.title);!0===n.checked?(r.status="complete",i.setAttribute("style","text-decoration: line-through"),a.setAttribute("style","text-decoration: line-through")):!1===n.checked&&(r.status="incomplete",i.setAttribute("style","text-decoration: none"),a.setAttribute("style","text-decoration: none"))}},r=()=>{let e=0,t=document.getElementById("Project");const n=e=>{console.log("this is el:"+e);let t=e.srcElement.id,n=document.getElementById(t).childNodes;for(let e=2;n.length>e;e++)n[e].classList.contains("hide-bar")?(n[e].classList.remove("hide-bar"),n[e].classList.add("unhide-bar"),n[1].classList.remove("triangle-right"),n[1].classList.add("triangle-down")):(n[e].classList.add("hide-bar"),n[e].classList.remove("unhide-bar"),n[1].classList.remove("triangle-down"),n[1].classList.add("triangle-right"))};for(t.childNodes.length>1&&(t.innerHTML="Projects");e<Object.values(activeProjects).length;){let t=document.createElement("div");t.classList.add("side-project"),t.innerHTML=Object.values(activeProjects)[e].projectName,t.id=Object.keys(activeProjects)[e],t.addEventListener("click",(e=>{n(e)})),document.getElementById("Project").appendChild(t);let r=document.createElement("div");r.classList.add("triangle-right"),r.id="chevron",t.appendChild(r),Object.values(activeProjects)[e].tasks.forEach((t=>{let n=document.createElement("li");n.classList.add("list-style"),n.classList.add("hide-bar"),n.id=t.title,n.innerHTML=t.title,document.getElementById(Object.keys(activeProjects)[e]).appendChild(n)})),Object.values(activeProjects)[e].tasks.forEach((t=>{"deleted"===t.status&&(console.log("task is deleted"),document.getElementById(t.title).remove(),!0===Object.values(activeProjects)[e].tasks.every((e=>"deleted"==e.status))&&(console.log("no tasks in project remaining, removing project."),document.getElementById(Object.keys(activeProjects)[e]).remove()))})),e++}},i=(e,t,n,r,i)=>({type:e,parent:t,id:n,textType:r,build:()=>{let a=document.createElement(e),o=document.getElementById(t);a.id=n,"innerText"===r?a.innerText=i:"innerHTML"===r?a.innerHTML=i:"placeholder"===r&&(a.placeholder=i),o.appendChild(a)}}),a=e=>{console.log(e+"this is task object");const n=document.getElementById("taskSection"),a=document.createElement("div"),o=document.createElement("div"),d=document.createElement("div");let s=document.createElement("div"),l=e;s.innerHTML=`<input type ="checkbox" id = ${l} value = ${window[e].title} class = "checkBox">`,s.addEventListener("click",t),s.id=l,s.classList.add("taskItem"),a.innerText=`${window[e].title}`,a.classList.add("taskTitle"),a.addEventListener("click",(()=>{(e=>{null===document.getElementById("editContainer")&&(i("div","container","editContainer","innerText","").build(),i("h5","editContainer","","innerText","Task Editor").build(),i("label","editContainer","taskLabel","innerText","Task Name: ").build(),i("input","editContainer","taskEdit","placeholder",window[e].title).build(),i("label","editContainer","descLabel","innerText","Task Description: ").build(),i("input","editContainer","descEdit","placeholder",window[e].description).build(),i("label","editContainer","dateLabel","innerText",`Due Date (Current: ${window[e].dueDate})`).build(),i("input","editContainer","dateEdit","innerText",window[e].dueDate).build(),document.getElementById("dateEdit").type="date",i("button","editContainer","editDelete","innerText","delete task").build(),document.getElementById("editDelete").addEventListener("click",(()=>{(e=>{console.log("this is the taskObjName in delete: "+e);let t=window[e].entry,n=window[e].project,r=window[`task_${t}`];Object.values(activeProjects).forEach((e=>{if(e.projectName===r.project)for(let i=0;i<e.tasks.length;i++)e.tasks[i].title===r.title&&(()=>{if(confirm("Are you sure you want to delete this task?")){let e=`task_${t}`;document.getElementById(e).remove(),document.getElementById(`${r.title}`).remove(),r.status="deleted",document.getElementById("editContainer").remove();for(let e=0;e<Object.values(activeProjects).length;e++)Object.values(activeProjects)[e].projectName==n&&(localStorage.removeItem(Object.keys(activeProjects)[e]),localStorage.setItem(Object.keys(activeProjects)[e],JSON.stringify(Object.values(activeProjects)[e])),!0===Object.values(activeProjects)[e].tasks.every((e=>"deleted"==e.status))&&(console.log("no tasks in project remaining, removing project."),document.getElementById(Object.keys(activeProjects)[e]).remove()))}})()}))})(e)})),i("button","editContainer","editSubmit","innerText","submit").build(),document.getElementById("editSubmit").addEventListener("click",(()=>{(e=>{const t=document.getElementById(e),n=document.getElementById("taskEdit"),i=document.getElementById("descEdit"),a=document.getElementById("dateEdit");if(""!==n.value||""!==i.value||""!==a.value){let t=[n.value,i.value,a.value];console.log(t+"values??!");let r={taskEdit:n.value,descEdit:i.value,dateEdit:a.value};for(let t=0;t<3;t++)""==Object.values(r)[t]||""!==Object.values(r)[t]&&("taskEdit"==Object.keys(r)[t]?window[e].title=Object.values(r)[t]:"descEdit"==Object.keys(r)[t]?window[e].description=Object.values(r)[t]:"dateEdit"==Object.keys(r)[t]&&(window[e].dueDate=Object.values(r)[t]))}t.getElementsByClassName("taskTitle")[0].innerText=window[e].title,t.getElementsByClassName("taskContent")[0].innerText=window[e].description,t.getElementsByClassName("taskDueDate")[0].innerText=window[e].dueDate,r(),document.getElementById("editContainer").remove()})(e)})),i("button","editContainer","editCancel","innerText","cancel").build(),document.getElementById("editCancel").addEventListener("click",(()=>{document.getElementById("editContainer").remove()})))})(e)})),o.innerText=`${window[e].description}`,o.classList.add("taskContent"),d.innerText=`${window[e].dueDate}`,d.classList.add("taskDueDate"),n.append(s),s.append(a),s.append(o),s.append(d),null!==document.getElementById("inputContainer")&&(document.getElementById("addTask").classList.remove("hide"),document.getElementById("inputContainer").remove())};let o=1,d=1;const s=()=>{document.getElementById("taskSection");const e=document.getElementById("taskInput").value,t=document.getElementById("taskDescription").value,n=document.getElementById("projectInput").value,i=document.getElementById("dateSelect").value;let s="task_"+o,l=window[s]={title:e,description:t,entry:o,dueDate:i,project:n,notes:undefined,status:undefined};o++,(()=>{if(0===Object.keys(activeProjects).length){let e=activeProjects.project_1=new Object;e.projectName=n,e.tasks=[],e.tasks.push(l),console.log(Object.keys(activeProjects)[0]),localStorage.setItem(Object.keys(activeProjects)[0],JSON.stringify(e))}else Object.keys(activeProjects.length>=1)&&Object.values(activeProjects).forEach((e=>{if(e.projectName===n){e.tasks.push(l);for(let t=0;t<Object.keys(activeProjects).length;t++)activeProjects[Object.keys(activeProjects)[t]].projectName==n&&localStorage.setItem(Object.keys(activeProjects)[t],JSON.stringify(e))}else if(!1===Object.values(activeProjects).some((e=>e.projectName===n))){d++;let e=activeProjects[`project_${d}`]=new Object;e.projectName=n,e.tasks=[],e.tasks.push(l),d=Object.keys(activeProjects).length;for(let t=0;t<Object.keys(activeProjects).length;t++)activeProjects[Object.keys(activeProjects)[t]].projectName==n&&localStorage.setItem(Object.keys(activeProjects)[t],JSON.stringify(e))}}));r()})(),a(s)},l=(e,t,n,r)=>({type:e,parent:t,id:n,build:()=>{let i=document.createElement(e),a=document.getElementById(t);i.id=n,i.innerText=r,a.appendChild(i)}}),c=l("div","main","header",""),u=l("div","main","sideBar",""),m=l("div","header","title","To Doer-er"),p=l("p","title","subtitle","The To Do list for only the doiest!"),g=l("div","main","container",""),h=l("button","container","addTask","Add Task"),v=l("div","container","taskSection","");window.activeProjects={},c.build(),m.build(),p.build(),g.build(),u.build(),h.build(),v.build(),(()=>{let t=document.getElementById("header"),n=document.createElement("div");n.id="hamburgerMenu",t.appendChild(n);let r=document.createElement("span"),i=document.createElement("span"),a=document.createElement("span");r.classList.add("ham-bar"),i.classList.add("ham-bar"),a.classList.add("ham-bar"),n.appendChild(r),n.appendChild(i),n.appendChild(a),n.addEventListener("click",e)})(),(()=>{let e=document.getElementById("sideBar");e.classList.add("hide-bar");let t=document.createElement("div");t.id="Project",t.innerText="Projects",e.appendChild(t)})(),(()=>{if(localStorage.length>0){console.log("existing projects... loading");let e=1;for(let t=1;t<=localStorage.length;t++){let n=JSON.parse(localStorage.getItem(`project_${t}`));activeProjects[`project_${t}`]=new Object(n);for(let t=0;t<n.tasks.length;t++)"deleted"!==n.tasks[t].status?(window[`task_${e}`]=n.tasks[t],a(`task_${e}`),r(),o++):console.log("tasks have been deleted, do not render")}}else console.log("no local storage.")})();const b=(e,t)=>{for(let n in t)e.setAttribute(n,t[n])};document.getElementById("addTask").addEventListener("click",(()=>{document.getElementById("addTask").classList.add("hide");let e=document.createElement("div");e.id="inputContainer",document.getElementById("taskSection").before(e);const t=document.createElement("input");b(t,{id:"taskInput",type:"text",task:"Task Name",placeholder:"Task Name",type:"value",maxlength:"20"}),e.appendChild(t);const n=document.createElement("input");b(n,{id:"taskDescription",type:"text",task:"Task Description",placeholder:"Description",type:"value",maxlength:"100"}),e.appendChild(n);const r=document.createElement("input");b(r,{type:"project",id:"projectInput",name:"Project Name",placeholder:"Project Name",type:"value",maxlength:"100"}),e.appendChild(r);const i=document.createElement("label");i.htmlFor="dateSelect",i.innerText="Due Date: ";const a=document.createElement("input");b(a,{type:"date",id:"dateSelect",name:"Due Date"}),e.appendChild(i),e.appendChild(a);const o=document.createElement("input");b(o,{type:"submit",value:"Submit",id:"submitBtn"}),o.addEventListener("click",s),e.appendChild(o);const d=document.createElement("input");b(d,{type:"button",value:"Cancel",id:"cancelSubmit"}),d.addEventListener("click",(()=>{document.getElementById("addTask").classList.remove("hide"),document.getElementById("inputContainer").remove()})),e.appendChild(d)}));var f=n(379),y=n.n(f),k=n(795),j=n.n(k),E=n(569),w=n.n(E),x=n(565),T=n.n(x),I=n(216),C=n.n(I),B=n(589),L=n.n(B),O=n(426),P={};P.styleTagTransform=L(),P.setAttributes=T(),P.insert=w().bind(null,"head"),P.domAPI=j(),P.insertStyleElement=C(),y()(O.Z,P),O.Z&&O.Z.locals&&O.Z.locals})()})();