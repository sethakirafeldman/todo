import { submitData } from "./submitData";

const multiAttr = [
    ['type', 'text'],
    ['task', 'Task Name'],
    ['placeholder', 'Task Name'],
    ['type', 'value'],
    ['size', '10']
];
//multi dimensional array loop is whacky...
let attributeSetter = (element) => {
    for ( let i=0; i < multiAttr.length[i]; i++) {
        for ( let j=0; j < multiAttr[i][j].length; j++) {
            console.log(i + j + "i and J values");
            // element.setAttribute(multiAttr[i][j], multiAttr[i][j]);
        };
    };
};

const buildTaskForm = () => {

    
    // code quite repetitive. create a factory func or something to
    // addd these attributes.

    // hide Add Task button
    document.getElementById("addTask").classList.add("hide");
    
    let container = document.getElementById("container");
    

    // console.log(multiAttr.length);
    


    // create inputContainer
    let inputContainer = document.createElement("div");
    inputContainer.id = "inputContainer";
    container.appendChild(inputContainer);
    
    //create taskName input
    let taskInput = document.createElement("input");
    // attributeSetter(taskInput);

    taskInput.id = "taskInput";
    taskInput.setAttribute("type", "text");
    taskInput.setAttribute("task", "Task Name")
    taskInput.setAttribute("placeholder", "Task Name");
    taskInput.setAttribute("type", "value");
    taskInput.setAttribute("size","10")
    inputContainer.appendChild(taskInput);
    
    //create taskDescription input
    let taskDescription = document.createElement("input");
    taskDescription.id = "taskDescription";
    taskDescription.setAttribute("type","text");
    taskDescription.setAttribute("task","Task Description");
    taskDescription.setAttribute("placeholder", "Description");
    taskDescription.setAttribute("type","value");
    taskDescription.setAttribute("size","50");
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