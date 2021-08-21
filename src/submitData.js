import { toDoFactory } from "./buildToDo";
import { checkBox } from "./checkBox.js";
import { checkProjects} from "./checkProjects.js";

let taskNumber = 1;
let projNumber = 1;

/* issue with submitData and checkProjects:
new project object is being created in window[]
this makes it difficult to track how many projects there are. perhaps a loop to check
would work  but this is a bit weird doing it within the window obj

perhaps storing the projects within another object so window[activeprojects]['project_1']
would work to make it easier to access. 
*/

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
         if (window[projInp] === undefined ) {
            // let project = window[projInp] = new Object({projectName: projInp});
            let project = activeProjects['project_'+projNumber] = new Object();
            project.projectName= projInp;
            project.tasks = [taskInp];
            // activeProjects[project];
            projNumber++;
         }
         else {
            // if project exists, pushes task name to appropriate project object.
            let k =0;
            let checkProj = "project_" + k;
            // this needs to check if entered project name matches existing one.
            while (k < activeProjects[checkProj]) {
               if (activeProjects.hasOwnProperty(checkProj) === true) {
                  let addToExisting = activeProjects[checkProj];
                  addToExisting.tasks.push(taskInp);   
               }

               k++;
            }   
         }; 

         checkProjects();
    })();

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