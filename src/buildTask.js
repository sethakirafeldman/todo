import { submitData } from "./submitData";

const buildTaskForm = () => {
    document.getElementById("addTask").classList.add("hide");

 
    let container = document.getElementById("container");

    let inputContainer = document.createElement("div");
    inputContainer.id = "inputContainer";
    container.appendChild(inputContainer);


    let taskInput = document.createElement("input");
    taskInput.id = "taskInput";
    taskInput.setAttribute("type", "text");
    taskInput.setAttribute("task", "Task Name")
    taskInput.setAttribute("placeholder", "Task Name");
    taskInput.setAttribute("type", "value");
    inputContainer.appendChild(taskInput);

    let taskDescription = document.createElement("input");
    taskDescription.id = "taskDescription";
    taskDescription.setAttribute("type","text");
    taskDescription.setAttribute("task","Task Description");
    taskDescription.setAttribute("placeholder", "Description");
    taskDescription.setAttribute("type","value");
    inputContainer.appendChild(taskDescription);

    let submit = document.createElement("input");
    submit.setAttribute("type","submit");
    submit.setAttribute("value", "Submit");
    submit.addEventListener("click", submitData);
    submit.id= "submitBtn";
    inputContainer.appendChild(submit);    
};

const taskEvent = document.getElementById("addTask")
taskEvent.addEventListener("click", buildTaskForm);


export {buildTaskForm}