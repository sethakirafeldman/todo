import { viewProject } from "./viewProject.js";

const genSideBarContent = ()=> {
    let i = 0;
    let Project = document.getElementById("Project");
    
    // toggles display of project tasks on click for project in sidebar.
    const showTaskList = (el) => {

        let source = el.srcElement.id;
        let children = document.getElementById(source).childNodes;

        for (let k = 2; children.length > k; k++) {
            // if tasks are hidden from side bar
            if (children[k].classList.contains("hide-bar") )  {
                
                children[k].classList.remove("hide-bar");
                children[k].classList.add("unhide-bar");

                children[1].classList.remove("triangle-right");
                children[1].classList.add("triangle-down");

            }
            // if tasks are visible on sidebar
            else {
                children[k].classList.add("hide-bar");
                children[k].classList.remove("unhide-bar");

                children[1].classList.remove("triangle-down");
                children[1].classList.add("triangle-right");
            }
        }
    };
        // clears sidebar if there is content to prevent duplicates in DOM. 
        if (Project.childNodes.length > 1) {
            Project.innerHTML= "Projects";
        }
       
        while (i < Object.values(activeProjects).length) {
            // adds project name to sidebar DOM
            let projEl = document.createElement("div");
            projEl.classList.add("side-project");
            projEl.innerHTML = Object.values(activeProjects)[i].projectName;
            projEl.id = Object.keys(activeProjects)[i];
            projEl.addEventListener("click", (projEl) => {
                showTaskList(projEl)});
            document.getElementById("Project").appendChild(projEl);  

            // add triangle chevron
            let tri = document.createElement("div");
            tri.classList.add("triangle-right");
            tri.id = "chevron";
            projEl.appendChild(tri);

            //append task to project in DOM.
            Object.values(activeProjects)[i].tasks.forEach(l=> {
                let li = document.createElement("li");
                li.classList.add("list-style");
                li.classList.add("hide-bar");
                li.id = l.title;
                li.innerHTML = l.title;
                document.getElementById(Object.keys(activeProjects)[i]).appendChild(li);
            });  

            // add view project option.
            let viewProj = document.createElement("button");
            viewProj.innerText = "View Project"
            viewProj.classList.add("hide-bar");
            viewProj.id = Object.keys(activeProjects)[i] + "-btn";
            viewProj.addEventListener("click", ()=> {viewProject(viewProj.parentElement.id)}
            );
            document.getElementById(Object.keys(activeProjects)[i]).appendChild(viewProj);

            // remove from DOM if task marked as deleted.
            // goes through tasks in order to check if deleted
            Object.values(activeProjects)[i].tasks.forEach(t => { 
                // when a task is marked as deleted, delete from DOM.
                if (t.status === "deleted") {
                    console.log("task is deleted");
                    document.getElementById(t.title).remove(); 

                    // checks if all tasks in project are deleted
                    let checkDeleted = Object.values(activeProjects)[i].tasks.every(task=>{
                    return task.status == "deleted"});
                    // deletes project from sidebar if so.
                    if (checkDeleted === true) {
                        console.log("no tasks in project remaining, removing project.")
                        document.getElementById(Object.keys(activeProjects)[i]).remove();
                    }
                }


    
            })                            
        i++;
        } 
}

export { genSideBarContent}