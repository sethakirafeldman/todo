/*the length iterated through needs to be 
limited to the number of task_ objects
start counting at 1 
if window[task] === undefined 
*/

let activeProjects = [];
// the array needs to only keep unique items + be linked to the task.
//needs project objects to store corresponding tasks. 
// which leaves with an object for task + an object for project the task is part of. 

const checkProjects = ()=> {
    for (let i =1; i < 1000; i++) {
        let task = "task_" +i;

            if (window[task] === undefined) {
                console.log("undefined, stop");
                return undefined;
            }

            else  {
                activeProjects.push(window[task].project);
                activeProjects.filter((item, index) => activeProjects.indexOf(item) !== index );
 

                let projEl = document.createElement("div");
                projEl.innerHTML= activeProjects;
                document.getElementById("Project").appendChild(projEl);
            };
    } 
};

export { checkProjects }