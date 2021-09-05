const buildSideBar = ()=>  {

    let sideBar = document.getElementById("sideBar");
    sideBar.classList.add("hide-bar");
    let project = document.createElement("div");
    project.id = "Project";
    project.innerText = "Projects";
    sideBar.appendChild(project);
};
export {buildSideBar}