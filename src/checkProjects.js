// the array needs to only keep unique items + be linked to the task.
//needs project objects to store corresponding tasks. 
// which leaves with an object for task + an object for project the task is part of. 

const checkProjects = ()=> {
    let task = "task_";
    let projName = "";
    let projTasks = "";
    // li.classList.add("list-style");
    //projEl.classList.add("side-project");



    for (let i =1; i < 100; i++) {
        
        projName = window[task+i]; 

        // not sure what this even does.
        if (window[task+i] === undefined) {
            return undefined;
        }

        else { 
        // if project with name already exists.
            if (document.body.contains(document.getElementById(projName.project) ) === true) {
                document.getElementById(projName.project).remove();
            }

            else if ( Object.keys(activeProjects).length === 0) {
                console.log("nothing yet.")

            }
            else {
            // after 3rd task, DOM resets bug.
            for (let i = 0; i < Object.values(activeProjects).length; i++) {

                let projEl = document.createElement("div");
                projEl.classList.add("side-project");
                projEl.innerHTML= activeProjects[Object.keys(activeProjects)[i]].projectName;

                projEl.id = Object.keys(activeProjects)[i];
                document.getElementById("Project").appendChild(projEl);

                    // list out tasks that are part of project
                    for (let j = 0; j <= Object.values(activeProjects)[i].tasks.length; j++) {
                        let li =document.createElement("li");
                        let pNumber = i++;
                        li.classList.add("list-style");
                        li.id = projTasks;
                        li.innerHTML = Object.values(activeProjects)[i].tasks[j];
                        let appendToProj = document.getElementById(`project_${pNumber}`);
                        appendToProj.appendChild(li);
                }    
            }
     
            }
        };

    };
        
    };

export { checkProjects}

// needs another property for project number in 