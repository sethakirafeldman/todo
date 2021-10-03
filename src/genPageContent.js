import { checkBox } from "./checkBox.js";
import { editTask } from "./editTasks.js";

// passed in from submitData.js and checkLocal.js
const genPageContent = (taskObjName) => {
// this does not properly increment task # in DOM since this function was seperated from submit data. 
    // let taskNumber = 1;
    
    const taskSec = document.getElementById("taskSection");

    const taskTitle = document.createElement("div");
    const taskContent = document.createElement("div");
    
    const taskDue = document.createElement("div");

    
    //hides user input section and adds obj to taskSection in DOM.  
    let taskEl = document.createElement("div");
    let taskId = taskObjName;                                                
    taskEl.innerHTML = `<input type ="checkbox" id = ${taskId} value = ${window[taskObjName].title} class = "checkBox">`;
    taskEl.addEventListener("click", checkBox);
    taskEl.id = taskId;
    taskEl.classList.add("taskItem");


    //title info
    taskTitle.innerText = `${window[taskObjName].title}`;
    taskTitle.classList.add("taskTitle");
    taskTitle.addEventListener("click", ()=> { editTask(taskObjName) });

    //description
    taskContent.innerText = `${window[taskObjName].description}`;
    taskContent.classList.add("taskContent");
    //project
    //due date
    taskDue.innerText=`${window[taskObjName].dueDate}`;
    taskDue.classList.add("taskDueDate");

    // adds to DOM
    taskSec.append(taskEl); 
    taskEl.append(taskTitle);
    taskEl.append(taskContent);
    taskEl.append(taskDue);

    //unhides Add Task Button and deletes inputContainer
    if (document.getElementById("inputContainer") !== null) {
      document.getElementById("addTask").classList.remove("hide");
      document.getElementById("inputContainer").remove();
    } 
    else {

    }

    

}

export {genPageContent}