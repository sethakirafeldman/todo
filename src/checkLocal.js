import { genPageContent } from "./genPageContent";
import { genSideBarContent } from "./genSideBarContent";
import { taskNumber } from "./submitData";

// retrieves activeProjects and tasks from localStorage
const checkLocal = () => {
    if (localStorage.length > 0) {
        console.log("existing projects... loading");
        // let tNum = 1;
        /// this needs to check all tasks in projects to see if they contain the deleted status to prevent loading wrong ones. 
        for (let i= 1; i <= localStorage.length; i++) {
            let localProject = JSON.parse(localStorage.getItem(`project_${i}`));
            activeProjects[`project_${i}`] = new Object(localProject);
            
            // checks for all tasks in given project.
        
            for (let j = 0; j < localProject.tasks.length; j++) {
                if (localProject.tasks[j].status !== "deleted") {
                    window[`task_${taskNumber}`] = localProject.tasks[j];
                    genPageContent(`task_${taskNumber}`);
                    genSideBarContent();
                    taskNumber++;
                }
                else {
                    console.log("tasks have been deleted, do not render");
                }
            }

        }   


    }

    else {
        console.log(`no local storage.`);
    }

}
export {checkLocal}