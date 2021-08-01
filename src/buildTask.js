import { submitData } from "./submitData";

const buildTaskForm = () => {
    // hide Add Task button
    document.getElementById("addTask").classList.add("hide");
    
    let container = document.getElementById("container");
    
    // create inputContainer
    let inputContainer = document.createElement("div");
    inputContainer.id = "inputContainer";
    container.appendChild(inputContainer);
    
    //create taskName input
    let taskInput = document.createElement("input");
    taskInput.id = "taskInput";
    taskInput.setAttribute("type", "text");
    taskInput.setAttribute("task", "Task Name")
    taskInput.setAttribute("placeholder", "Task Name");
    taskInput.setAttribute("type", "value");
    inputContainer.appendChild(taskInput);
    
    //create taskDescription input
    let taskDescription = document.createElement("input");
    taskDescription.id = "taskDescription";
    taskDescription.setAttribute("type","text");
    taskDescription.setAttribute("task","Task Description");
    taskDescription.setAttribute("placeholder", "Description");
    taskDescription.setAttribute("type","value");
    inputContainer.appendChild(taskDescription);
    
    // create submit button
    let submit = document.createElement("input");
    submit.setAttribute("type","submit");
    submit.setAttribute("value", "Submit");
    submit.addEventListener("click", submitData);
    submit.id= "submitBtn";
    inputContainer.appendChild(submit);    

};
// adds function to Add Task button
const taskEvent = document.getElementById("addTask")
taskEvent.addEventListener("click", buildTaskForm);


export {buildTaskForm}