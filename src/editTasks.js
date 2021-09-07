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

    const editContainer = editFactory("div","container","editContainer", "innerText","");
    editContainer.build();

    const editDesc = editFactory("h5", "editContainer","","innerText","Task Editor");
    editDesc.build();

    const taskInputEditor = editFactory("input", "editContainer", "taskEdit", "placeholder", window[t.id].title);
    taskInputEditor.build();

    const editSubmit = editFactory("button", "editContainer", "editSubmit", "innerHTML", "Submit Change");
    editSubmit.build();
        // changes task name on submit of change.
        document.getElementById("editSubmit").addEventListener("click", ()=> {
            let taskEditor = document.getElementById("taskEdit");
            window[t.id].title = taskEditor.value;
            document.getElementById(t.id).childNodes[1].innerText = taskEditor.value;            
            genSideBarContent();
            editContainer.remove();
            });
             
}





export { editTask }