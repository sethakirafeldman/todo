import { genSideBarContent } from "./genSideBarContent.js";

const editTask = (t) => {
    console.log(t);
    // refer to attributeSetter in buildTaskForm.

    let editContainer = document.createElement("div");
    editContainer.id = "editContainer";
    document.getElementById("container").appendChild(editContainer);
    
    const editDesc = document.createElement("h5");
    editDesc.innerText="Task Editor";
    editContainer.appendChild(editDesc);

    const taskInputEditor = document.createElement("input");
    taskInputEditor.id = "taskEdit";
    taskInputEditor.placeholder = window[t.id].title;
    editContainer.appendChild(taskInputEditor);

    const editSubmit = document.createElement("button");
    editSubmit.innerHTML = "Submit Change";

    // changes task name.
    editSubmit.addEventListener("click", ()=> {
        window[t.id].title = taskInputEditor.value;
        document.getElementById(t.id).childNodes[1].innerText = taskInputEditor.value;            
        genSideBarContent();
        editContainer.remove();
        });

    editContainer.appendChild(editSubmit);

   
}





export { editTask }