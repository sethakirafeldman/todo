// needs to loop through all projects and display.
// side bar loads at first part of site,
// but needs to perpetually check to see if new project info exists. 
//maybe eventlistener for changes/or clicks.  
// or each time a new task obj is created or deleted.

const buildSideBar = ()=>  {

    let sideBar = document.getElementById("sideBar");
    sideBar.classList.add("hide-bar");
    let project = document.createElement("div");
    project.id = "Project";
    project.innerText = "Projects";
    sideBar.appendChild(project);



};

//Projects to dynamically display all projects as list items under heading.


export {buildSideBar}