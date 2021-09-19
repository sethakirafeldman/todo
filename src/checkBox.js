const checkBox = () => {
    let taskList = document.querySelectorAll(".checkBox");
    for (let i=0; i < taskList.length; i++) {
    
        let getCheck = taskList[i];
        let setCheck = window[getCheck.id];

        let main = document.getElementById(getCheck.id);
        let side = document.getElementById(getCheck.value);

        if (getCheck.checked === true) {
            setCheck.status = "complete";
            main.setAttribute("style","text-decoration: line-through");
            side.setAttribute("style","text-decoration: line-through");
        }

        else if (getCheck.checked === false ) {
            setCheck.status = "incomplete";
            main.setAttribute("style","text-decoration: none");
            side.setAttribute("style","text-decoration: none");
        };
    };
};
  
export {checkBox}