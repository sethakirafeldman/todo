import { genPageContent } from "./genPageContent";

const checkLocal = () => {
    if (localStorage.length > 0) {
        console.log("existing projects... loading");
        //need to store projects as project_1 etc so easier to retrieve. 
        for (let i= 0; i < localStorage.length; i++) {
            let loca = localStorage.getItem(`project_${i}`);
            let parsed = JSON.parse(loca);
            console.log(parsed);
            // need to pass in to create page content
            // genPageContent(parsed);
        }   
    }

}
export {checkLocal}