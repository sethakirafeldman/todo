import { checkBox } from "./checkBox.js";
import { editTask } from "./editTasks.js";

// passed in from submitData.js and checkLocal.js
const genPageContent = (taskEntry) => {

    let taskNumber = 1;
    
    const taskSec = document.getElementById("taskSection");

    const taskTitle = document.createElement("div");
    const taskContent = document.createElement("div");
    const taskDue = document.createElement("div");

    
    //hides user input section and adds obj to taskSection in DOM.  
    let taskEl = document.createElement("div");
    let taskId = "task_" + taskNumber++;                                                
    taskEl.innerHTML = `<input type ="checkbox" id = ${taskId} 
      value = ${taskEntry.title} class = "checkBox">`;
    taskEl.addEventListener("click", checkBox);
    taskEl.id = taskId;
    taskEl.classList.add("taskItem");


    //title info
    taskTitle.innerText = `${taskEntry.title}`;
    taskTitle.classList.add("taskTitle");
    taskTitle.addEventListener("click", ()=> { editTask(taskEl) });

    //description
    taskContent.innerText = `${taskEntry.description}`;
    taskContent.classList.add("taskContent");
    //project
    //due date
    taskDue.innerText=`${taskEntry.dueDate}`;
    taskDue.classList.add("taskDueDate");

    // adds to DOM
    taskSec.append(taskEl); 
    taskEl.append(taskTitle);
    taskTitle.append(taskContent);
    taskContent.append(taskDue);

    //unhides Add Task Button and deletes inputContainer
    document.getElementById("addTask").classList.remove("hide");
    document.getElementById("inputContainer").remove();


    

}

export {genPageContent}