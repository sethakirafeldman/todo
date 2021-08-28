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
            console.log("no existing projects, create one"); 

         }

         else {
            // delete all of this and start over. 
            console.log("existing projects");
            for (let m=0; m < Object.values(activeProjects).length; m++) {
               let temp = Object.values(activeProjects)[m];
                  // if project already added.
               // if task already in object, stop from adding again.

               // if ( temp.tasks.includes(taskInp) === true) {
               //    console.log("if task already in object, stop from adding again");
               //    // m=0;
               // }

                  if (temp.projectName.includes(projInp) === false) {
                  console.log("project not found, create new");
                  projNumber = Object.values(activeProjects).length;
                  projNumber++;
                  console.log(`new project and value of projNumber is ${projNumber}`);
                  let project = activeProjects['project_'+projNumber] = new Object();
                  project.projectName= projInp;
                  project.tasks = [taskInp];
                  projNumber = Object.values(activeProjects).length;
                  console.log(activeProjects); 

                  break;

               }
               // if task not in obj, push.
               else {                     
               temp.tasks.push(taskInp);
               // m=0;
               console.log("if task not in obj, push.");

               break;
               }

  
            }
            
         }   

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