let activeProjects = [];

// the array needs to only keep unique items + be linked to the task.
//needs project objects to store corresponding tasks. 
// which leaves with an object for task + an object for project the task is part of. 

const checkProjects = ()=> {
    let task = "task_";
    let projName = "";
    let projTasks = "";


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
            else {
            // after 3rd task, DOM resets bug.
                let projEl = document.createElement("div");
                projEl.innerHTML= window[projName.project].projectName;
                projEl.id = window[projName.project].projectName;
                document.getElementById("Project").appendChild(projEl);
                // bug may be due to this length not updating as more items are added.
                for (let j = 0; j < window[projName.project].tasks.length; j++) {
                // list out tasks that are part of project
                    projTasks = window[projName.project].tasks[j];
                    let li =document.createElement("li");
                    li.id = projTasks;
                    li.innerHTML = projTasks;
                    projEl.appendChild(li);
                }    
            }
        };

    };
        
    };

export { checkProjects}