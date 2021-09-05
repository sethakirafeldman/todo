
const menuExpand = ()=> {
    let sideBar = document.getElementById("sideBar");

    if (sideBar.classList.contains('hide-bar') ) {
        sideBar.classList.add("unhide-bar");
        sideBar.classList.remove("hide-bar");
    }

    else if (sideBar.classList.contains('unhide-bar') ) {
        sideBar.classList.add("hide-bar");
        sideBar.classList.remove("unhide-bar");
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
    
    hamburg.addEventListener("mouseover", menuExpand);

};


export {buildMenuButton}