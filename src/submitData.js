import { toDoFactory } from "./buildToDo";

const submitData = () => {
    // grabs user input.
    let taskInp = document.getElementById("taskInput").value;
    let taskDesc = document.getElementById("taskDescription").value;
    console.log(taskInp,taskDesc);

    // passes user input into factory function to create obj.
    let createObj = toDoFactory(taskInp,taskDesc);
    console.log(createObj.title + createObj.description + "this is the object");

    //hides user input section and adds obj to taskSection in DOM. 
    
    document.getElementById("inputContainer").classList.add("hide");
    document.getElementById("taskSection").innerText = createObj.title + " " + createObj.description;

    //unhides add task element.
    document.getElementById("addTask").classList.remove("hide");

    return taskInp + taskDesc + createObj;

};


export {submitData} 