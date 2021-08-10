const buildSideBar = ()=>  {

    let sideBar = document.getElementById("sideBar");
    sideBar.classList.add("hide");
    let project = document.createElement("div");
    project.id = "Project";
    project.innerText = "Projects";
    sideBar.appendChild(project);

};

//Projects to dynamically display all projects as list items under heading.
// should display on left side of container when hamburger is clicked


export {buildSideBar}