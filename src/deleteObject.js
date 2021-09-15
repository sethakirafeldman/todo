// need to figure out better algo. too confusing. 

const deleteObj = (task) => {
    let tNum = window[task.id].entry;
    let tProj = window[task.id].project;
    let checkTask = window[`task_${tNum}`];
        //looks through projects for matching task.
        Object.values(activeProjects).forEach(AP => {
            // checks activeProjects for when projectName matches project name of task obj.
            if (AP.projectName === checkTask.project) {
                // check if checkTask.title in AP.tasks[0];
                for (let i=0; i < AP.tasks.length; i++) {
                    // marks task as deleted.
                    if (AP.tasks[i].title === checkTask.title) {  
                        ( () => {
                            if (confirm("Are you sure you want to delete this task?")){
                                //deletes tasks from DOM.
                                document.getElementById(`task_${tNum}`).remove();
                                document.getElementById(`${checkTask.title}`).remove();
                                //sets task status to deleted
                                checkTask.status = "deleted";
                                document.getElementById("editContainer").remove();

                                // deletes project from DOM if all tasks within marked as deleted.      
                                for (let j = 0; j < Object.values(activeProjects).length; j++) {   
                                    let projNum = j + 1; 
                                    console.log(tProj);
                                    console.log(`projNumb is ${projNum}`);       
                                    
                                    if (Object.values(activeProjects)[j].projectName == tProj) {
                                        let checkDeleted = Object.values(activeProjects)[j].tasks.every(t=>{
                                            return t.status == "deleted"});
                                        if (checkDeleted === true) {
                                            console.log("no tasks in project remaining, removing project.")
                                            document.getElementById(Object.keys(activeProjects)[j]).remove();
                                        }
                                    }
                                }
                            }
                            else {
                            } 
                        })();
                    };
                };            
            };
        });
}


export {deleteObj} 