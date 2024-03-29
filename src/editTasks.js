// import { genSideBarContent } from "./genSideBarContent.js";
import { deleteObj } from "./deleteObject.js";
import { submitChange } from "./submitChange.js";

const editFactory = (type, parent, id, textType, text) => {
    const build = () => {
        let el = document.createElement(type);
        let appendAble = document.getElementById(parent);
        el.id = id;
        if (textType === "innerText") {
            el.innerText = text;
        }
        else if (textType === "innerHTML") {
            el.innerHTML = text;
        }
        else if (textType === "placeholder") {
            el.placeholder = text;
        }
        appendAble.appendChild(el);
    };

    return {
        type,
        parent,
        id,
        textType,
        build
    }
};

const editTask = (taskObjName) => {
    if (document.getElementById("editContainer") === null) {

        // hide task section and add task button
        document.getElementById("taskSection").classList.add("hide");
        document.getElementById("addTask").classList.add("hide");

        // need to add project name and due date editor as well. 

        const editContainer = editFactory("div","container","editContainer", "innerText","");
        editContainer.build();

        const taskEdit = editFactory("h5", "editContainer","","innerText","Task Editor");
        taskEdit.build();
        // task name editor
        const taskLabel = editFactory("label", "editContainer","taskLabel", "innerText", "Task Name: ");
        taskLabel.build();
        const taskInputEditor = editFactory("input", "editContainer", "taskEdit", "placeholder", window[taskObjName].title);
        taskInputEditor.build();

        // task desc editor
        const descLabel = editFactory("label", "editContainer","descLabel", "innerText", "Task Description: ");
        descLabel.build();
        const descEdit = editFactory("input", "editContainer", "descEdit", "placeholder", window[taskObjName].description);
        descEdit.build();

        // Date editor
        const dateLabel = editFactory("label", "editContainer","dateLabel", "innerText", `Due Date (Current: ${window[taskObjName].dueDate})` );
        dateLabel.build();

        const dateSelect = editFactory("input", "editContainer", "dateEdit", "innerText", window[taskObjName].dueDate);
        dateSelect.build();

        let dateSel = document.getElementById("dateEdit");
        dateSel.type ="date";

        // delete button. sets task status to deleted.
        const  editDelete = editFactory("button", "editContainer", "editDelete", "innerText", "delete task");
        editDelete.build();
            //delete function.
            document.getElementById("editDelete").addEventListener("click", () => {
                deleteObj(taskObjName);
             });         

        // submit button
        const editSubmit = editFactory("button", "editContainer", "editSubmit", "innerText", "submit");
        editSubmit.build();

            // changes task name on submit of change.
            document.getElementById("editSubmit").addEventListener("click", () => {
                submitChange(taskObjName); 
                });
            document.getElementById("editSubmit").classList.add("smallBtn");   

        // cancel button        
        const editCancel = editFactory("button", "editContainer","editCancel","innerText", "cancel");
        editCancel.build();
            document.getElementById("editCancel").addEventListener("click", () => { 
                document.getElementById("editContainer").remove();
                document.getElementById("taskSection").classList.remove("hide");
                document.getElementById("addTask").classList.remove("hide");
            });
    }

    else {
        //prevents duplicates
    }

}

export { editTask }