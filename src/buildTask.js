const buildTaskForm = () => {
    let form = document.createElement("form");
    form.id ="taskForm";
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");
    let container = document.getElementById("container");
    form.appendChild(container);
    
    let taskInput = document.createElement("input");
    taskInput.setAttribute("type", "text");
    taskInput.setAttribute("task", "Task Name")
    taskInput.setAttribute("placeholder", "Task Name");
    taskInput.appendChild(form);

};

const taskEvent = document.getElementById("addTask")
taskEvent.addEventListener("click", buildTaskForm);


export {buildTaskForm}