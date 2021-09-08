import { genSideBarContent } from "./genSideBarContent.js";

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

const editTask = (t) => {
    // need to add project name and due date editor as well. 

    const editContainer = editFactory("div","container","editContainer", "innerText","");
    editContainer.build();

    const taskEdit = editFactory("h5", "editContainer","","innerText","Task Editor");
    taskEdit.build();
    // task name editor
    const taskLabel = editFactory("label", "editContainer","taskLabel", "innerText", "Task Name: ");
    taskLabel.build();
    const taskInputEditor = editFactory("input", "editContainer", "taskEdit", "placeholder", window[t.id].title);
    taskInputEditor.build();

    // task desc editor
    const descLabel = editFactory("label", "editContainer","descLabel", "innerText", "Task Description: ");
    descLabel.build();
    const descEdit = editFactory("input", "editContainer", "descEdit", "placeholder", window[t.id].description);
    descEdit.build();

    // Date editor
    const dateLabel = editFactory("label", "editContainer","dateLabel", "innerText", `Due Date (Current: ${window[t.id].dueDate}) ` );
    dateLabel.build();
    const dateSelect = editFactory("input", "editContainer", "dateEdit", "innerText", window[t.id].dueDate);
    dateSelect.build();
    let dateSel = document.getElementById("dateEdit");
    dateSel.type ="date";

    // submit button
    const editSubmit = editFactory("button", "editContainer", "editSubmit", "innerHTML", "Submit Change");
    editSubmit.build();
        // changes task name on submit of change.
        document.getElementById("editSubmit").addEventListener("click", ()=> {
            let taskEditor = document.getElementById("taskEdit");
            let descEditor = document.getElementById("descEdit");

            window[t.id].title = taskEditor.value;
            window[t.id].description = descEditor.value;

            document.getElementById(t.id).childNodes[1].innerText = taskEditor.value;  
            document.getElementById(t.id).childNodes[1].innerText = descEditor.value;

            genSideBarContent();
            document.getElementById("editContainer").remove();

            });

}





export { editTask }