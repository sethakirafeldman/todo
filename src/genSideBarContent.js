// the array needs to only keep unique items + be linked to the task.
//needs project objects to store corresponding tasks. 
// which leaves with an object for task + an object for project the task is part of. 

const genSideBarContent = ()=> {
    let i = 0;
    let Project = document.getElementById("Project");
    
    // toggles display of project tasks on click or project in sidebar.
    const showTaskList = (el) => {
        let source = el.srcElement.id;
        let children = document.getElementById(source).childNodes;
        for (let k = 1; children.length > k; k++) {
            if (children[k].classList.contains("hide-bar") )  {
                children[k].classList.remove("hide-bar");
                children[k].classList.add("unhide-bar");
            }

            else {
                children[k].classList.add("hide-bar");
                children[k].classList.remove("unhide-bar");
            }
        }
    };
        // clears sidebar if there is content to prevent duplicates in DOM. 
        if (Project.childNodes.length > 1) {
            Project.innerHTML= "Projects";
        }
        // creates sidebar content based. this needs to hide or delete tasks marked 
        //as deleted or empty projects

        while (i < Object.values(activeProjects).length) {
            // adds project name to sidebar DOM
            let projEl = document.createElement("div");
            projEl.classList.add("side-project");
            projEl.innerHTML = Object.values(activeProjects)[i].projectName;
            projEl.id = Object.keys(activeProjects)[i];
            projEl.addEventListener("click", (projEl) => {
                showTaskList(projEl)});
            document.getElementById("Project").appendChild(projEl);  

            //append task to project in DOM.
            Object.values(activeProjects)[i].tasks.forEach(l=> {
                let li = document.createElement("li");
                li.classList.add("list-style");
                li.classList.add("hide-bar");
                li.id = l.title;
                li.innerHTML = l.title;
                document.getElementById(Object.keys(activeProjects)[i]).appendChild(li);
                });  

            // remove from DOM if task marked as deleted.
            // goes through tasks in order to check if deleted
            //
            Object.values(activeProjects)[i].tasks.forEach(t => { 
                // when a task is marked as deleted, delete from DOM.
                if (t.status === "deleted") {
                    console.log("task is deleted");
                    document.getElementById(t.title).remove();

                    // deletes project from DOM if all tasks within marked as deleted.
                    //https://www.javascripttutorial.net/javascript-every/
                    // if (t.status.every(()=> {return t.status ==="deleted"})) 
                    
                    //     {
                    //         console.log("project has no tasks");

                    //     }
                }
            })                    
                
        i++;
        } 



}

export { genSideBarContent}