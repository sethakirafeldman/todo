// the array needs to only keep unique items + be linked to the task.
//needs project objects to store corresponding tasks. 
// which leaves with an object for task + an object for project the task is part of. 

const checkProjects = ()=> {
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

    // clears if there is content to prevent duplicates in DOM. 
    if (Project.childNodes.length > 1 ) {
        Project.innerHTML= "Projects";
    }
        while (i < Object.values(activeProjects).length) {

            let projEl = document.createElement("div");
            projEl.classList.add("side-project");
            projEl.innerHTML = Object.values(activeProjects)[i].projectName;
            projEl.id = Object.keys(activeProjects)[i];
            projEl.addEventListener("click", (projEl) => {
                showTaskList(projEl)});
            document.getElementById("Project").appendChild(projEl);  

            Object.values(activeProjects)[i].tasks.forEach(l=> {
                // console.log(`the task value is :${l}`)
                let li = document.createElement("li");
                li.classList.add("list-style");
                li.classList.add("hide-bar");
                li.id = l.title;
                li.innerHTML = l.title;
                document.getElementById(Object.keys(activeProjects)[i]).appendChild(li);
                });  
        i++;
        } 
    }

export { checkProjects}