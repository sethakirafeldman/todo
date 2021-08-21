import { buildMenuButton } from "./buildMenuButton.js";
import { buildSideBar } from "./buildSideBar.js";

const elFactory = (type, parent, id, text) => {
    const build = () => {
        let el = document.createElement(type);
        let appendAble = document.getElementById(parent);
        el.id = id;
        el.innerText = text;
        appendAble.appendChild(el);
    };

    return {
        type,
        parent,
        id,
        build
    }

    };

const textContent = {
    header: "" ,
    title: "To Doer-er",
    subtitle: "The To Do list for only the doiest!",
    task: "Add Task",
    container:""
};

//type, parent, id, text .

const headerGen = elFactory('div', 'main', "header",textContent.header);
const sideBar = elFactory("div","main","sideBar","");
const titleGen = elFactory('div', 'header', "title",textContent.title);
const subGen = elFactory("p", 'title', "subtitle", textContent.subtitle);
const containerGen = elFactory("div", 'main', 'container', "");
const addTask = elFactory("button", "container", "addTask", textContent.task);
const taskSection = elFactory("div", "container", "taskSection","");

// creates global obj to store project info.
window.activeProjects = {};

headerGen.build();
titleGen.build();
subGen.build();
containerGen.build();
sideBar.build();
addTask.build();
taskSection.build();

//adds hamburger menu
buildMenuButton();
buildSideBar();

export {elFactory}