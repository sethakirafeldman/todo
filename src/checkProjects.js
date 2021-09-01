// the array needs to only keep unique items + be linked to the task.
//needs project objects to store corresponding tasks. 
// which leaves with an object for task + an object for project the task is part of. 

const checkProjects = ()=> {
    // refer to https://github.com/namdlefhtes/todo/blob/main/src/checkProjects.js
    // loop goes through activeProjects starting @ 0
    // sub loop goes through tasks of active project 
    let i = 0;
    let j = 0;
    let pNum = 1;
    let Project = document.getElementById("Project");

    // clears side-bar content if Project contains nodes. Resets for each while loop.
    if (Project.childNodes.length > 1 ) {
        // bug: when 2nd project is created, deletion fails and stops script before corresponding DOM object is made. 
        Object.keys(activeProjects).forEach(entry => {
        document.getElementById(entry).remove()
      
        // pnum=1;

        });
        console.log(`Deletion: the value of i and j are ${i} and ${j}`);
    }

    else {console.log("nothing to delete") };
    // i starts out as 0
    while (i < Object.values(activeProjects).length) {

        console.log(`Outer while loop has fired ${i} times`);
        let projEl = document.createElement("div");
        projEl.classList.add("side-project");
        projEl.innerHTML = Object.values(activeProjects)[i].projectName;
        projEl.id = Object.keys(activeProjects)[i];
        document.getElementById("Project").appendChild(projEl);

        while ( j < Object.values(activeProjects)[i].tasks.length) {
            console.log(`inner while loop has fired ${j} times`);
            let li = document.createElement("li");
            li.classList.add("list-style");
            li.innerHTML = Object.values(activeProjects)[i].tasks[j];
            document.getElementById(Object.keys(activeProjects)[i]).appendChild(li);
            j++;
        }
        i++;
    }
}    


export { checkProjects}

