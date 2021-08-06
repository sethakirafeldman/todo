import { submitData } from "./submitData";

const attributeSetter = (element, attributes) => {
    for ( let key in attributes) {
        element.setAttribute(key, attributes[key]);
    };
};

const buildTaskForm = () => {
    // hide Add Task button
    document.getElementById("addTask").classList.add("hide");
    
    let container = document.getElementById("container");

    // create inputContainer
    let inputContainer = document.createElement("div");
    inputContainer.id = "inputContainer";
    document.getElementById("taskSection").before(inputContainer);
    // container.appendChild(inputContainer);
    
    //create taskName input
    const taskInput = document.createElement("input");
    attributeSetter(taskInput, {
        "id": "taskInput",
        "type": "text",
        "task": "Task Name",
        "placeholder": "Task Name",
        "type": "value",
        // "size": "10"
    });
    inputContainer.appendChild(taskInput);
    
    //create taskDescription input
    const taskDescription = document.createElement("input");
    attributeSetter(taskDescription, {
        "id": "taskDescription",
        "type": "text",
        "task": "Task Description",
        "placeholder": "Description",
        "type": "value",
        // "size": "30"
    });

    inputContainer.appendChild(taskDescription);
    
    // create submit button
    const submit = document.createElement("input");
    attributeSetter(submit, {
        "type": "submit",
        "value": "Submit",
        "id": "submitBtn"
    });
    submit.addEventListener("click", submitData);
    inputContainer.appendChild(submit);    

};
// adds function to Add Task button
const taskEvent = document.getElementById("addTask")
taskEvent.addEventListener("click", buildTaskForm);


export {buildTaskForm}