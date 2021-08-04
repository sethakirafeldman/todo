import { toDoFactory } from "./buildToDo";
import { checkBox } from "./checkBox.js";

let taskNumber = 1;

const submitData = () => {

    // grab user input.
    let taskSec = document.getElementById("taskSection");
    let taskInp = document.getElementById("taskInput").value;
    let taskDesc = document.getElementById("taskDescription").value;
    let taskTitle = document.createElement("div");
    let taskContent = document.createElement("div");

    // passes user input into factory function to create obj.
    
    // creates unique object with # appended to taskEntry_ 
    let taskEntry = window['task_'+ taskNumber] = toDoFactory(taskInp, taskDesc, taskNumber);

    // console.log(taskEntry+ "this is: "+ taskNumber);
  
    //hides user input section and adds obj to taskSection in DOM.  

    let taskEl = document.createElement("div");
    let taskId = "task_" + taskNumber++;                                                
    taskEl.innerHTML = `<input type ="checkbox" id = ${taskId} value = ${taskEntry.title} class = "checkBox">`;
    taskEl.addEventListener("click", checkBox);
    taskEl.id = taskEntry.title;
    taskEl.classList.add("taskItem");

    //add task info to title and content
    taskTitle.innerText = `${taskEntry.title}`;
    taskTitle.classList.add("taskTitle");
    taskContent.innerText = `${taskEntry.description}`;
    taskContent.classList.add("taskContent");

    taskSec.append(taskEl); 
    taskEl.append(taskTitle);
    taskTitle.append(taskContent);

    //unhides Add Task Button and delete inputContainer
    document.getElementById("addTask").classList.remove("hide");
    document.getElementById("inputContainer").remove();

    // return taskEntry;

};


export {submitData} 