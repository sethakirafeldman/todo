import { genPageContent } from "./genPageContent";

const checkLocal = () => {
    if (localStorage.length > 0) {
        console.log("existing projects... loading");


        for (let i= 0; i < localStorage.length; i++) {
            let local = JSON.parse(localStorage.getItem(`project_${i}`));
            
            console.log(local);
            // can't targets .tasks key of object for some reason. planned to iterate through.

            // need to pass in to create page content
            // genPageContent(parsed);
        }   
    }

}
export {checkLocal}