import { toDoFactory } from "./buildToDo";
import { checkBox } from "./checkBox.js";

let taskNumber = 1;

const submitData = () => {

    // grab user input.
    let taskSec = document.getElementById("taskSection");
    let taskInp = document.getElementById("taskInput").value;
    let taskDesc = document.getElementById("taskDescription").value;

    // passes user input into factory function to create obj.
    
    // creates unique object with # appended to taskEntry_ 
    let taskEntry = window['task_'+ taskNumber] = toDoFactory(taskInp, taskDesc, taskNumber);

    // console.log(taskEntry+ "this is: "+ taskNumber);
  
    //hides user input section and adds obj to taskSection in DOM.  
    // let span = document.createElement("span");
    let taskEl = document.createElement("div");
    let taskId = "task_" + taskNumber++;                                                
    taskEl.innerHTML = `<input type ="checkbox" id = ${taskId} value = ${taskEntry.title} class = "checkBox"> ${taskEntry.title} ${taskEntry.description}`;
    taskEl.addEventListener("click", checkBox);
    taskEl.id = taskEntry.title;
    // span.setAttribute("class","custom-checkbox")
    // span.append(taskEl)
    taskSec.append(taskEl); 

    //unhides Add Task Button and delete inputContainer
    document.getElementById("addTask").classList.remove("hide");
    document.getElementById("inputContainer").remove();

    // return taskEntry;

};


export {submitData} 