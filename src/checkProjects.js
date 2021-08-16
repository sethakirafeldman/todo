let activeProjects = [];

// the array needs to only keep unique items + be linked to the task.
//needs project objects to store corresponding tasks. 
// which leaves with an object for task + an object for project the task is part of. 

const checkProjects = ()=> {
    let task = "task_";
    for (let i =1; i < 1000; i++) {
            if (window[task+i] === undefined) {
                console.log("undefined, stop");
                return undefined;
            }

            else  {
                
                for (let j =0; j < 100; j++ ) {
                   if (window[task+j] !== undefined) {
                       console.log(window[task+j].project);
                       let projEl = document.createElement("div");
                       projEl.innerHTML= window[task+j].project;
                       document.getElementById("Project").appendChild(projEl);

                       // this logic needs to cap only unique project names
                   }

                   else {

                   }
               
                };
            };
    } 
};

export { checkProjects }