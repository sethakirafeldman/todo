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
            let project = activeProjects['project_'+projNumber] = new Object();
            project.projectName= projInp;
            project.tasks = [taskInp];
            console.log(activeProjects); 

         }

         else if ( ) {

            
         }
         // if there are any projects in activeProjects
         else if (Object.keys(activeProjects).length > 0 ) {
            for (let m = 0; m <= 30/*Object.values(activeProjects).length*/; m++) {
               // goes through values of active projects 1 by 1.
               let existingProject = Object.values(activeProjects)[m]; 
                  // checks if projectName matches user input project name
                  if ( existingProject.projectName === projInp ) {
                     //pushes userinputted task to particular project. 
                     existingProject.tasks.push(taskInp);
                     m=0;
                     break;
                  }
                  // bug here creates extra project without loop ... doesn't create with loop.
                  else if (existingProject.projectName !== projInp) {   
                     let o = 1;
                     // projNumber++;
                        // make this ensure new duplicate project isn't created. 
                     o++;   
                     let project = activeProjects['project_'+o] = new Object();
                     project.projectName= projInp;
                     project.tasks = [taskInp];
                     console.log(activeProjects);
                     
                  } 
            };            
         }

         // creates new object if project does not exist.
   
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