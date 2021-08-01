import { toDoFactory } from "./buildToDo";
import { checkBox } from "./checkBox.js";

let taskNumber = 1;

const submitData = () => {

    // grab user input.
    let taskSec = document.getElementById("taskSection");
    let taskInp = document.getElementById("taskInput").value;
    let taskDesc = document.getElementById("taskDescription").value;
    // let taskEntry = 1++;
    // console.log(taskInp,taskDesc);

    // passes user input into factory function to create obj.
    let taskEntry = toDoFactory(taskInp,taskDesc);
    // console.log(createObj.title + createObj.description + "this is the object");

    //hides user input section and adds obj to taskSection in DOM. 
    
    // document.getElementById("inputContainer").classList.add("hide");
    let span = document.createElement("span");
    let taskEl = document.createElement("div");
    let taskId = "task" +taskNumber++;                                                
    taskEl.innerHTML = `<input type ="checkbox" id = ${taskId} value = ${taskEntry.title} class = "checkBox"> ${taskEntry.title} ${taskEntry.description}`;
    taskEl.addEventListener("click", checkBox, taskId);
    taskEl.id = taskEntry.title;
    // span.setAttribute("class","custom-checkbox")
    // span.append(taskEl)
    taskSec.append(taskEl); 

    //unhides Add Task Button and delete inputContainer
    document.getElementById("addTask").classList.remove("hide");
    document.getElementById("inputContainer").remove();

    // adds event listener to checkbox
    // document.getElementById(taskId).addEventListener("click", checkBox);

    return taskEntry;

};


export {submitData} 