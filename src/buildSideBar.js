const buildSideBar = ()=>  {
    let sideBar = document.getElementById("sideBar");
    // sideBar.classList.add(".hide");
    let project = document.createElement("div");
    project.id = "Project";
    sideBar.appendChild(project);
    


}


export {buildSideBar}