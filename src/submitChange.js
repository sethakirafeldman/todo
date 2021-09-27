import { genSideBarContent } from "./genSideBarContent";

const submitChange = (taskObj) => {
    localStorage.clear() // temp

    const taskObjEl = document.getElementById(taskObj);
    
    const taskEditBox = document.getElementById("taskEdit");
    const descEditBox = document.getElementById("descEdit");
    const dateEditBox = document.getElementById("dateEdit");

    //checks if any value in editor contains value AKA not blank.
    if (taskEditBox.value !== "" || descEditBox.value !== "" || dateEditBox.value !== "") {
        // console.log("values: "+ taskEditBox.value + descEditBox.value + dateEditBox.value);
        let tempVals = {
            taskEdit: taskEditBox.value, 
            descEdit: descEditBox.value,
            dateEdit: dateEditBox.value 
        };
            for (let i = 0; i < 3; i++) {
                let checkVal = Object.values(tempVals)[i]; 
                let checkKey = Object.keys(tempVals)[i];
                    if (checkKey == "taskEdit" && checkVal !== "") {
                        window[taskObj].title = checkVal;
                    }
                    else if (checkKey == "descEdit" && checkVal !== "") {
                        window[taskObj.description] = checkVal;
                    }
                    else if (checkKey == "dateEdit" && checkVal !== "" ) {
                        window[taskObj.dueDate] = checkVal;
                    }
                    else {}
            };
            
    }
   
    else {
        // no change to obj/DOM.
    }    
    // this code works except it needs to avoid overwriting with blank entries if no value is entered. 
    // window[taskObj].title = taskEditBox.value;
    // window[taskObj].description = descEditBox.value;
    // window[taskObj].dueDate = dateEditBox.value;

    // taskObjEl.childNodes[0].value = window[taskObj].title;

    taskObjEl.getElementsByClassName("taskTitle")[0].innerText = window[taskObj].title;  
    taskObjEl.getElementsByClassName("taskContent")[0].innerText = window[taskObj].description;  
    taskObjEl.getElementsByClassName("taskDueDate")[0].innerText = window[taskObj].dueDate;  


    genSideBarContent();

    document.getElementById("editContainer").remove();

}

export {submitChange}