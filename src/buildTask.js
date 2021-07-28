const buildTaskForm = () => {
    let form = document.createElement("form");
    form.id ="taskForm";
    // form.setAttribute("method", "post");
    // form.setAttribute("action", "submitData.js");
    // form.setAttribute("onsubmit", "display()");
    let container = document.getElementById("container");
    container.appendChild(form);
    
    let taskInput = document.createElement("input");
    taskInput.setAttribute("type", "text");
    taskInput.setAttribute("task", "Task Name")
    taskInput.setAttribute("placeholder", "Task Name");
    form.appendChild(taskInput);

    let taskDescription = document.createElement("input");
    taskDescription.setAttribute("type","text");
    taskDescription.setAttribute("task","Task Description");
    taskDescription.setAttribute("placeholder", "Description");
    form.appendChild(taskDescription);

    let submit = document.createElement("input");
    submit.setAttribute("type","submit");
    submit.setAttribute("value", "Submit");
    submit.setAttribute("onsubmit", "display()");
    form.appendChild(submit);
};

const display = () => {
    console.log("testdisplay");

}

const taskEvent = document.getElementById("addTask")
taskEvent.addEventListener("click", buildTaskForm);


export {buildTaskForm}