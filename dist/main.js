(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"#header {\n    text-align: center;\n    border-style: ridge;\n\n}\n\nbody {\n\n    background-color: aliceblue;\n}\n\n#container {\n    text-align: center;\n\n}\n\n#taskForm {\n    text-align: center;\n    box-sizing: border-box;\n    border-style: none;\n}\n\n#taskSection {\n    width: fit-content;\n\n}",""]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&i[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},o=[],s=0;s<e.length;s++){var u=e[s],c=r.base?u[0]+r.base:u[0],d=a[c]||0,l="".concat(c," ").concat(d);a[c]=d+1;var p=n(l),f={css:u[1],media:u[2],sourceMap:u[3]};-1!==p?(t[p].references++,t[p].updater(f)):t.push({identifier:l,updater:i(f,r),references:1}),o.push(l)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var s=n(a[o]);t[s].references--}for(var u=r(e,i),c=0;c<a.length;c++){var d=n(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=u}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,i=n.media,a=n.sourceMap;i?e.setAttribute("media",i):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=(e,t,n,r)=>({type:e,parent:t,id:n,build:()=>{let i=document.createElement(e),a=document.getElementById(t);i.id=n,i.innerText=r,a.appendChild(i)}}),t=e("div","main","header",""),r=e("div","header","title","To Doer-er"),i=e("p","title","subtitle","The To Do list for only the doiest!"),a=e("div","main","container",""),o=e("button","container","addTask","Add Task"),s=e("div","main","taskSection","");t.build(),r.build(),i.build(),a.build(),o.build(),s.build();const u="first list item";console.log(u),document.getElementById("addTask").addEventListener("click",(()=>{let e=document.createElement("form");e.id="taskForm",document.getElementById("container").appendChild(e);let t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("task","Task Name"),t.setAttribute("placeholder","Task Name"),e.appendChild(t);let n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("task","Task Description"),n.setAttribute("placeholder","Description"),e.appendChild(n);let r=document.createElement("input");r.setAttribute("type","submit"),r.setAttribute("value","Submit"),r.setAttribute("onsubmit","display()"),e.appendChild(r)}));var c=n(379),d=n.n(c),l=n(795),p=n.n(l),f=n(569),m=n.n(f),b=n(565),v=n.n(b),h=n(216),y=n.n(h),g=n(589),x=n.n(g),T=n(426),A={};A.styleTagTransform=x(),A.setAttributes=v(),A.insert=m().bind(null,"head"),A.domAPI=p(),A.insertStyleElement=y(),d()(T.Z,A),T.Z&&T.Z.locals&&T.Z.locals})()})();