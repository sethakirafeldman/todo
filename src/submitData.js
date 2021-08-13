import { toDoFactory } from "./buildToDo";
import { checkBox } from "./checkBox.js";

let taskNumber = 1;
const taskEntries = [""];


const submitData = () => {

    // grab user input.
    const taskSec = document.getElementById("taskSection");
    const taskInp = document.getElementById("taskInput").value;
    const taskDesc = document.getElementById("taskDescription").value;
    const projInp = document.getElementById("projectInput").value;
    const dateInp = document.getElementById("dateSelect").value;

    taskSec.onchange = function(){console.log("testing onchangeevent")};
    

    // creates unique object with # appended to taskEntry_ 
    //(title, description, entry, dueDate, priority, notes, status) 

    let taskEntry = window['task_'+ taskNumber] = toDoFactory(taskInp, taskDesc, taskNumber, dateInp, projInp); 
    const taskTitle = document.createElement("div");
    const taskContent = document.createElement("div");
    const projectContent = document.createElement("div");
    const taskDue = document.createElement("div");

    //hides user input section and adds obj to taskSection in DOM.  
    let taskEl = document.createElement("div");
    let taskId = "task_" + taskNumber++;                                                
    taskEl.innerHTML = `<input type ="checkbox" id = ${taskId} value = ${taskEntry.title} class = "checkBox">`;
    taskEl.addEventListener("click", checkBox);
    taskEl.id = taskEntry.title;
    taskEl.classList.add("taskItem");

    //title info
    taskTitle.innerText = `${taskEntry.title}`;
    taskTitle.classList.add("taskTitle");
    //description
    taskContent.innerText = `${taskEntry.description}`;
    taskContent.classList.add("taskContent");
    //project
    projectContent.innerText
    //due date
    taskDue.innerText=`${taskEntry.dueDate}`;
    taskDue.classList.add("taskDueDate");
  
    taskSec.append(taskEl); 
    taskEl.append(taskTitle);
    taskTitle.append(taskContent);
    taskContent.append(taskDue);

    //unhides Add Task Button and delete inputContainer
    document.getElementById("addTask").classList.remove("hide");
    document.getElementById("inputContainer").remove();

    // return taskEntry;

};


export {submitData} 