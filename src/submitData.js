const submitData = () => {
    let taskInp = document.getElementById("taskInput").value;
    let taskDesc = document.getElementById("taskDescription").value;
    console.log(taskInp,taskDesc);
    return taskInp + taskDesc;

};


export {submitData} 