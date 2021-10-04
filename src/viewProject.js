// called in genSideBarContent
const viewProject = (projName) => {
    // remove current elements from dom
    let taskSec = document.getElementById("taskSection");
    let actProj = activeProjects[projName];
    taskSec.innerHTML = "";
    
    // render project details
    //may want to use elFactory from buildElements.js
    // render project title
    let title = document.createElement("div");
    title.id = `${projName}_title`;
    title.innerHTML = actProj.projectName;
    taskSec.appendChild(title);

    //render project tasks (loop)
    for (let i = 0; i < actProj.tasks.length; i++ ){
        let li = document.createElement("li");
        li.id = `viewTask_${actProj.tasks[i].title}`
        li.innerHTML = actProj.tasks[i].title;
        title.appendChild(li);
            for (let j=1; j < Object.values(actProj.tasks[i]).length; j++) {
                if (Object.keys(actProj.tasks[i])[j] == "entry") {
                    // skips entry.
                }
                else {    
                    console.log(Object.values(actProj.tasks[i])[j]);
                    let li2 = document.createElement("li");
                    li2.innerHTML = `${Object.values(actProj.tasks[i])[j]}`;
                    li.appendChild(li2);
                }
            };
    };
    
}    
   


export{ viewProject}