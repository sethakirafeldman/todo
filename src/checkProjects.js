let activeProjects = [];

// the array needs to only keep unique items + be linked to the task.
//needs project objects to store corresponding tasks. 
// which leaves with an object for task + an object for project the task is part of. 

const checkProjects = ()=> {
    let task = "task_";
    let temp = "";
    let temp2 = "";
    let projName = "";
    let projTasks = "";


    for (let i =1; i < 1000; i++) {
        projName = window[task+i]; 

        // not sure what this even does.
        if (window[task+i] === undefined) {
            return undefined;
        }

        else { 
        // if project with name already exists.
            for (let j = 0 ; j < window[projName.project].tasks.length; j++ ) {
                projTasks = window[projName.project].tasks[j];

                if (document.body.contains(document.getElementById(projName.project) ) === true) {
                //     //trying to remove list items before looping through to re-add.
                    document.getElementById(projName.project).remove();
        
                    let projEl = document.createElement("div");
                    projEl.innerHTML= window[projName.project].projectName;
        
                    projEl.id = window[projName.project].projectName;
                    document.getElementById("Project").appendChild(projEl);
        
                    // list out tasks that are part of project
                    let li =document.createElement("li");
                    li.id = projTasks;
                    li.innerHTML = projTasks;
                    projEl.appendChild(li);
                }
                // adds new project with first task to DOM.
                else { 
        
                    let projEl = document.createElement("div");
                    projEl.innerHTML= window[projName.project].projectName;
        
                    projEl.id = window[projName.project].projectName;
                    // projTasks = window[projName.project].tasks[0];
                    document.getElementById("Project").appendChild(projEl);
        
                    // list out tasks that are part of project
                    let li = document.createElement("li");
                    li.id = projTasks;
                    li.innerHTML = projTasks;
                    projEl.appendChild(li);
        
                    temp = "";
                    temp2 = "";
        
                    };
            }
        }



        
            // }
    };

};


export { checkProjects}