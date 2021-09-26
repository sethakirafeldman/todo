import { genSideBarContent } from "./genSideBarContent";

const submitChange = (taskObj) => {
    localStorage.clear() // temp

    const taskObjEl = document.getElementById(taskObj);

    const taskEditBox = document.getElementById("taskEdit");
    const descEditBox = document.getElementById("descEdit");
    const dateEditBox = document.getElementById("dateEdit");

    // these need to only change object data if value other than blank

    if (taskEditBox.value !== "" || descEditBox.value !== "" || dateEditBox.value !== "") {
        if (taskEditBox.value !== "" && descEditBox.value == "" && dateEditBox.value == "") {
            window[taskObj].title = taskEditBox.value;
        }
        else if (taskEditBox.value !== "" && descEditBox !== "" && dateEditBox.value == "" {
            window[taskObj].title = taskEditBox.value;
            window[taskObj].description = descEditBox.value;
        }    
        

    else {
        // no change to obj/DOM.
    }    
    // this code works except it needs to avoid overwriting with blank entries if no value is entered. 
    // window[taskObj].title = taskEditBox.value;
    // window[taskObj].description = descEditBox.value;
    // window[taskObj].dueDate = dateEditBox.value;

     
    taskObjEl.getElementsByClassName("taskTitle")[0].innerText = window[taskObj].title;  
    taskObjEl.getElementsByClassName("taskContent")[0].innerText = window[taskObj].description;  
    taskObjEl.getElementsByClassName("taskDueDate")[0].innerText = window[taskObj].dueDate;  


    genSideBarContent();

    document.getElementById("editContainer").remove();

}

export {submitChange}