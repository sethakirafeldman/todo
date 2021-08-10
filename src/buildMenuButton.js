
const menuExpand = ()=> {
    let sideBar = document.getElementById("sideBar");

    if (sideBar.classList.contains('hide') ) {
        sideBar.classList.add("unhide");
        sideBar.classList.remove("hide");
    }

    else if (sideBar.classList.contains('unhide') ) {
        sideBar.classList.add("hide");
        sideBar.classList.remove("unhide");
    }

};


const buildMenuButton = () => {
    let header = document.getElementById("header");
    let hamburg = document.createElement("div");
    hamburg.id = "hamburgerMenu";
    header.appendChild(hamburg);

    let span1 = document.createElement("span");
    let span2 = document.createElement("span");
    let span3 = document.createElement("span");
            
    span1.classList.add("ham-bar");
    span2.classList.add("ham-bar");
    span3.classList.add("ham-bar");

    hamburg.appendChild(span1);
    hamburg.appendChild(span2);
    hamburg.appendChild(span3);
    
    hamburg.addEventListener("click", menuExpand);

};


export {buildMenuButton}