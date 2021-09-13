
const checkBox = () => {
    let taskList = document.querySelectorAll(".checkBox");
    for (let i=0; i < taskList.length; i++) {
    
        // need a way to reliably grab id task1 /task 2 etc. loop?
        let getCheck = taskList[i];
        let setCheck = window[getCheck.id];

        if (getCheck.checked ===true) {
            setCheck.status = "complete";
        }

        else if (getCheck.checked === false ) {
            setCheck.status = "incomplete";
        };
    };
};
    // console.log(checkStatus + "test");

    //algorithm 
    //check all checkboxes for value (checked or unchecked).
    // grab checkbox value and pass into relevant task object. must toggle.
    // assign strikethrough class when checked.


    // let getdocument.querySelector(".checkBox");






export {checkBox}