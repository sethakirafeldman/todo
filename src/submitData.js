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

    // used to create new task obj each time, now overwrites but pushes to projects.
    //(title, description, entry, dueDate, project, notes, status) 
    let taskObjName = 'task_'+ taskNumber;

    let taskEntry = window[taskObjName] = toDoFactory(taskInp, taskDesc, taskNumber, dateInp, projInp, "neutral", "incomplete"); 

    // local storage for Task does not need to pass in. passed in through active projects.
   //  localStorage.setItem(`task_${taskNumber}`, JSON.stringify(window[`task_${taskNumber}`]));
   //    console.log(`storing task as task_${taskNumber}`);

   taskNumber++;
      
    //IIFE
    ( () =>  {
         //if no existing project object, create one
         if (Object.keys(activeProjects).length === 0) {

            let project = activeProjects['project_'+1] = new Object();
            project.projectName= projInp;
            project.tasks= [];
            project.tasks.push(taskEntry)
            // local storage. 
            console.log(Object.keys(activeProjects)[0]);
            localStorage.setItem(Object.keys(activeProjects)[0], JSON.stringify(project));
         }
         // if there are projects
         else if (Object.keys(activeProjects.length >= 1)) {
            //iterate through projects checking for matching proj name.
            Object.values(activeProjects).forEach( 
               (proj) => { 
                  //if matching proj name, pushes task from entry to proj.
                  if (proj.projectName === projInp) {
                     proj.tasks.push(taskEntry);

                     // checks if project matches existing and adds to local storage.
                     for (let i = 0; i < Object.keys(activeProjects).length; i++) {
                        if (activeProjects[Object.keys(activeProjects)[i]].projectName == projInp) {

                           localStorage.setItem(Object.keys(activeProjects)[i], JSON.stringify(proj));
                        }
                     }
                  }
                  // if there are projects already, but the new projInp does not match. Create new.
                  else {
                     let checkForExisting = Object.values(activeProjects).some(s => s.projectName === projInp);
                        if (checkForExisting === false) {
                           projNumber++;
                           let project = activeProjects[`project_${projNumber}`] = new Object();
                           project.projectName= projInp;
                           project.tasks = [];
                           project.tasks.push(taskEntry);
                           projNumber = Object.keys(activeProjects).length;

                           //loosp through each project entry
                           for (let j = 0; j < Object.keys(activeProjects).length; j++) {
                              //adds project to local storage when proj name is matched to input
                              if ( activeProjects[Object.keys(activeProjects)[j]].projectName == projInp ) {
                     
                                 localStorage.setItem(Object.keys(activeProjects)[j], JSON.stringify(project));
                              }
                           }
                        }
                  }
               })
         };
         genSideBarContent();

         }             
    )();
   
   genPageContent(taskObjName);
    
};


export {submitData} 
export { taskNumber }