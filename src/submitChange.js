import { genSideBarContent } from "./genSideBarContent";
import { taskNumber } from "./submitData";

const submitChange = (taskObj) => {
    
    //targets selected DOM task to edit
    const taskObjEl = document.getElementById(taskObj);
    //Additional DOM elements to edit.
    const taskEditBox = document.getElementById("taskEdit");
    const descEditBox = document.getElementById("descEdit");
    const dateEditBox = document.getElementById("dateEdit");

    //checks if any value in editor contains contains a value.
    if (taskEditBox.value !== "" || descEditBox.value !== "" || dateEditBox.value !== "") {
        // console.log("values: "+ taskEditBox.value + descEditBox.value + dateEditBox.value);
        // stores values from editor in object.
        // let tempArr = [taskEditBox.value, descEditBox.value, dateEditBox.value];
         
        let tempVals = {
            taskEdit: taskEditBox.value, 
            descEdit: descEditBox.value,
            dateEdit: dateEditBox.value 
        };
        // modify task_# obj only if there is a value in the editor box
        for (let i=0; i < 3; i++) {
            // checks what vals in editor are blank.
            if (Object.values(tempVals)[i] == "") {
            }
            // checks what vals in editor have value.
            else if (Object.values(tempVals)[i] !== "") {
                //changes task Object based on which has value.
                if (Object.keys(tempVals)[i] == "taskEdit"){
                    window[taskObj].title = Object.values(tempVals)[i];
                }
                else if (Object.keys(tempVals)[i] == "descEdit") {
                    window[taskObj].description = Object.values(tempVals)[i];                    
                }
                else if (Object.keys(tempVals)[i] == "dateEdit") {
                    window[taskObj].dueDate = Object.values(tempVals)[i];
                }
         
            }
        }      
    }
   
    else {
        // no change to obj/DOM.
    }    

// writes task data to DOM based on what is in obj.
taskObjEl.getElementsByClassName("taskTitle")[0].innerText = window[taskObj].title;  
taskObjEl.getElementsByClassName("taskContent")[0].innerText = window[taskObj].description;  
taskObjEl.getElementsByClassName("taskDueDate")[0].innerText = window[taskObj].dueDate;  

    //stores changes made in edit to local storage.
    for (let j=0; j < Object.values(activeProjects).length; j++) {
        let projectValues = Object.values(activeProjects)[j];
       
        if ( projectValues.projectName == window[taskObj].project) {
            localStorage.setItem(Object.keys(activeProjects)[j], JSON.stringify(projectValues));
        }
    };       


genSideBarContent();
document.getElementById("editContainer").remove();
}

export {submitChange}