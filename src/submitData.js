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

         // this need to check if activeProjects contains projectName = to projInp.
         
         if (window[projInp] === undefined ) {
            // let project = window[projInp] = new Object({projectName: projInp});
            let project = activeProjects['project_'+projNumber] = new Object();
            project.projectName= projInp;
            project.tasks = [taskInp];
            // activeProjects[project];
            projNumber++;
            console.log(activeProjects); 

         }
         // if object exists, check through objs to see if matching proj names.
         else {
            Object.entries(activeProjects).forEach(entry => {
               // let [key, value] = entry; 
               let temporary = entry;
               // [0] is project name index, [1] is project name.

                  if (temporary[1].projectName === projInp ) {
                     
                     return activeProjects[temporary[0]].tasks.push(taskInp) +
                     console.log(activeProjects); 
                         
                  }   
               });
         }    

             
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