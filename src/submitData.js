import { toDoFactory } from "./buildToDo";
import { checkBox } from "./checkBox.js";
import { checkProjects} from "./checkProjects.js";

let taskNumber = 1;
let projNumber = 1;

const submitData = () => {

    const taskSec = document.getElementById("taskSection");

    // grab user input.
    const taskInp = document.getElementById("taskInput").value;
    const taskDesc = document.getElementById("taskDescription").value;
    const projInp = document.getElementById("projectInput").value;
    const dateInp = document.getElementById("dateSelect").value;

    // creates unique object with # appended to task_ 
    //(title, description, entry, dueDate, project, notes, status) 

    let taskEntry = window['task_'+ taskNumber] = toDoFactory(taskInp, taskDesc, taskNumber, dateInp, projInp); 
    
    //IIFE
    ( () =>  {
         //if no existing project object, creates one
         if (Object.keys(activeProjects).length === 0) {
            // let project = window[projInp] = new Object({projectName: projInp});
            let project = activeProjects['project_'+1] = new Object();
            project.projectName= projInp;
            project.tasks = [taskInp];
         }
         // if there are projects
         else if (Object.keys(activeProjects.length >= 1)) {
            //iterates through projects checking for matching proj name.
            Object.values(activeProjects).forEach( 
               (proj) => { 
                  //if matching proj name, pushes task from entry to proj.
                  if (proj.projectName === projInp) {
                     proj.tasks.push(taskInp);
                  }
                  // need this to wait to check that none of the iterations meet condition.
                  else {
                     let checkForExisting = Object.values(activeProjects).some(s => s.projectName === projInp);
                     if (checkForExisting === false) {
                        projNumber++;
                        let project = activeProjects[`project_ ${projNumber}`] = new Object();
                        project.projectName= projInp;
                        project.tasks = [taskInp];
                        projNumber = Object.keys(activeProjects).length;
                     }
                  }
               })
         };
         
         checkProjects();

         }             
    )();

    const taskTitle = document.createElement("div");
    const taskContent = document.createElement("div");
   //  const projectContent = document.createElement("div");
    const taskDue = document.createElement("div");

    
    //hides user input section and adds obj to taskSection in DOM.  
    let taskEl = document.createElement("div");
    let taskId = "task_" + taskNumber++;                                                
    taskEl.innerHTML = `<input type ="checkbox" id = ${taskId} value = ${taskEntry.title} class = "checkBox">`;
    taskEl.addEventListener("click", checkBox);
    taskEl.id = taskEntry.title;
    taskEl.classList.add("taskItem");


    //title info
    taskTitle.innerText = `${taskEntry.title}`;
    taskTitle.classList.add("taskTitle");
    //description
    taskContent.innerText = `${taskEntry.description}`;
    taskContent.classList.add("taskContent");
    //project
    //due date
    taskDue.innerText=`${taskEntry.dueDate}`;
    taskDue.classList.add("taskDueDate");

    // adds to DOM
    taskSec.append(taskEl); 
    taskEl.append(taskTitle);
    taskTitle.append(taskContent);
    taskContent.append(taskDue);

    //unhides Add Task Button and deletes inputContainer
    document.getElementById("addTask").classList.remove("hide");
    document.getElementById("inputContainer").remove();


};


export {submitData} 