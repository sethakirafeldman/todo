let activeProjects = [];

// the array needs to only keep unique items + be linked to the task.
//needs project objects to store corresponding tasks. 
// which leaves with an object for task + an object for project the task is part of. 

const checkProjects = ()=> {
    let task = "task_";
    let temp = "";
    let temp2 = "";
    let temp3 = "";
    let projName = "";
    for (let i =1; i < 1000; i++) {
        //trying to pass in the name of the project to test if element with same name already exists in DOM.
        projName = window[task+i].project; 

        console.log(projName+" testingprojName");

        // not sure what this even does.
        if (window[task+i] === undefined) {
            console.log("undefined, stop");
            return undefined;
        }

        else if (document.body.contains(document.getElementById(projName) ) === true) {
            console.log("EXISTSS");
            // part of this is failing possibly.
        }

        else { 
            
            // add name of project to sidebar
            temp = window[task+i];
            let projEl = document.createElement("div");
            projEl.innerHTML= window[temp.project].projectName;
            projEl.id = window[temp.project].projectName;
            temp2 = window[temp.project].tasks;
            document.getElementById("Project").appendChild(projEl);

            // list out tasks that are part of project
            let li =document.createElement("li");
            li.innerHTML = temp2;
            projEl.appendChild(li);

            temp = "";
            temp2 = "";
            // need to grab by project object name as these now storing tasks.
            };
        
            // }
    };

};


export { checkProjects}