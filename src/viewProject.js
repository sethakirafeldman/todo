import { checkLocal } from "./checkLocal.js";

// called in genSideBarContent
const viewProject = (projName) => {
    // remove current elements from dom
    let taskSec = document.getElementById("taskSection");
    let actProj = activeProjects[projName];
    taskSec.innerHTML = "";
    document.getElementById("addTask").classList.add("hide");
    
    // render project details
    //may want to use elFactory from buildElements.js
    // render project title
    let title = document.createElement("div");
    title.id = `view_${projName}`;
    title.classList.add("viewProject");
    title.innerHTML = actProj.projectName;
    taskSec.appendChild(title);

    //render project tasks (loop)
    for (let i = 0; i < actProj.tasks.length; i++ ){
        let li = document.createElement("li");
        li.id = `viewTask_${actProj.tasks[i].entry}`
        li.style.fontWeight= "bold";
        li.innerHTML = actProj.tasks[i].title;
        title.appendChild(li);
            for (let j=1; j < 4; j++) {
                if (Object.keys(actProj.tasks[i])[j] == "entry") {
                    // skips entry.
                }

                else if (Object.keys(actProj.tasks[i])[j] == "title"){
                    // skips entry.
                }

                else {    
                    console.log(Object.values(actProj.tasks[i])[j]);
                    let li2 = document.createElement("li");
                    li2.style.fontWeight = "normal";
                    li2.innerHTML = `${Object.values(actProj.tasks[i])[j]}`;
                    li.appendChild(li2);
                }
            };        
    };
    const clearView = document.createElement("button");
    clearView.innerText = "Return to Tasks";
    clearView.classList.add("smallBtn");
    clearView.id = "taskReturnBtn";
    // works for now. better to call real function.
    clearView.addEventListener("click", () => { 
        taskSec.childNodes[0].remove();
        document.getElementById("addTask").classList.remove("hide");
        clearView.remove();
        checkLocal() });
    taskSec.appendChild(clearView);
}    
   


export{ viewProject}