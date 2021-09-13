// need to figure out better algo. too confusing. 

const deleteObj = (task) => {
    let deleteTask = window[task.id].entry;
    let checkTask = window[`task_${deleteTask}`];

        //sets task object is undefined + should set project object to undefined if no tasks exist.
        Object.values(activeProjects).forEach(val => {
            // checks activeProjects for when projectName matches project name of task obj.
            if (val.projectName === checkTask.project) {

                    // loops through active projects [p]
                    Object.values(activeProjects).forEach(p => {
                        console.log(checkTask.title);
                        // loops through each project (p)
                        p.forEach(q => {
                          if (p.tasks[q].title === task.title) {
                              console.log("task is"+ p.tasks[q].title);
                          }   
                          
                        //sets task object to undefined.

                        //   window[`task_${deleteTask}`] = undefined;

                        })
                        // console.log(p.tasks);
                        // p.tasks points to tasks within project. 
                        
                    

                    })
            }
    });
}


export {deleteObj} 