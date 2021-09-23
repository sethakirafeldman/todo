import { genPageContent } from "./genPageContent";
// needs task_1, etc. to store properly.
const checkLocal = () => {
    if (localStorage.length > 0) {
        console.log("existing projects... loading");


        for (let i= 1; i < localStorage.length; i++) {
            let local = JSON.parse(localStorage.getItem(`project_${i}`));
            
            console.log(local.tasks[0]);
            // can't targets .tasks key of object for some reason. planned to iterate through.

            // need to pass in to create page content
            // genPageContent(parsed);
        }   

    }

    else {
        console.log(`no local storage.`);
    }

}
export {checkLocal}