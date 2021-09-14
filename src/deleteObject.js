// need to figure out better algo. too confusing. 

const deleteObj = (task) => {
    let tNum = window[task.id].entry;
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
                            
                                // AP.tasks[i] = undefined;   
                                //deletes tasks from DOM.
                                document.getElementById(`task_${tNum}`).remove();
                                document.getElementById(`${checkTask.title}`).remove();
                                //sets task status to deleted
                                checkTask.status = "deleted";
                                document.getElementById("editContainer").remove();
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