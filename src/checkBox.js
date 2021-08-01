let taskIterator = task + 1++;

const checkBox = () => {
    // need a way to reliably grab id task1 /task 2 etc. loop?
    let getCheck = document.getElementById(taskIterator);
    if (getCheck.checked ===true) {
        console.log("true");
    }

    else if (getCheck === false ) {
        console.log("false");
    };
};
    // console.log(checkStatus + "test");

    //algorithm 
    //check all checkboxes for value (checked or unchecked).
    // grab checkbox value and pass into relevant task object. must toggle.
    // assign strikethrough class when checked.


    // let getdocument.querySelector(".checkBox");






export {checkBox}