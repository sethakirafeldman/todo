import { genPageContent } from "./genPageContent";
import { genSideBarContent } from "./genSideBarContent";

// retrieves activeProjects and tasks from localStorage
const checkLocal = () => {
    if (localStorage.length > 0) {
        console.log("existing projects... loading");
        let tNum = 1;

        for (let i= 1; i <= localStorage.length; i++) {
            let localProject = JSON.parse(localStorage.getItem(`project_${i}`));
            activeProjects[`project_${i}`] = new Object(localProject);
            
            // checks for all tasks in given project.
            for (let j = 0; j < localProject.tasks.length; j++) {
                window[`task_${tNum}`] = localProject.tasks[j];
                genPageContent(`task_${tNum}`);
                genSideBarContent();
                tNum++;
                // issues with task_1 numbering when mixing localStorage and new entries.
            }
            // need to pass in to create page content
            // genPageContent(parsed);
        }   


    }

    else {
        console.log(`no local storage.`);
    }

}
export {checkLocal}