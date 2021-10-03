// called in genSideBarContent
const viewProject = (projName) => {
    // remove current elements from dom
    let taskSec = document.getElementById("taskSection");
    taskSec.innerHTML = "";
    
    // render project details
    //may want to use elFactory from buildElements.js
    // render project title
    let title = document.createElement("div");
    title.id = `${projName}_title`;
    title.innerHTML = activeProjects[projName].projectName;
    taskSec.appendChild(title);

    //render project tasks (loop)

    
   
}

export{ viewProject}