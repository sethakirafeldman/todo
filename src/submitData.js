import { toDoFactory } from "./toDoFactory";
// import { checkBox } from "./checkBox.js";
import { genSideBarContent } from "./genSideBarContent.js";
// import { editTask } from "./editTasks.js";
import { genPageContent } from "./genPageContent";

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

    // local storage
    localStorage.setItem(taskEntry, JSON.stringify(taskEntry));

    //IIFE
    ( () =>  {
         //if no existing project object, create one
         if (Object.keys(activeProjects).length === 0) {
            let project = activeProjects['project_'+1] = new Object();
            project.projectName= projInp;
            project.tasks= [];
            project.tasks.push(taskEntry)
            // local storage. 
            localStorage.setItem(project.projectName, JSON.stringify(project));
         }
         // if there are projects
         else if (Object.keys(activeProjects.length >= 1)) {
            //iterates through projects checking for matching proj name.
            Object.values(activeProjects).forEach( 
               (proj) => { 
                  //if matching proj name, pushes task from entry to proj.
                  if (proj.projectName === projInp) {
                     proj.tasks.push(taskEntry);

                     localStorage.setItem(proj.projectName, JSON.stringify(proj));
                  }
                  // if there are projects already, but the new projInp does not match. Create new.
                  else {
                     let checkForExisting = Object.values(activeProjects).some(s => s.projectName === projInp);
                        if (checkForExisting === false) {
                           projNumber++;
                           let project = activeProjects[`project_ ${projNumber}`] = new Object();
                           project.projectName= projInp;
                           project.tasks = [];
                           project.tasks.push(taskEntry);
                           projNumber = Object.keys(activeProjects).length;

                           localStorage.setItem(project.projectName, JSON.stringify(project));

                        }
                  }
               })
         };
         genSideBarContent();

         }             
    )();
   
   genPageContent(taskEntry);
    
};


export {submitData} 