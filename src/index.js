import { ProjectManager, Project, TODO } from './TODO.js'
import { tabLogic } from '../TabHandler.js';
import "./style.css";

function DOMmanipulator() {
    const projectManager = new ProjectManager()

    //create project/sidebar vars
    const new_proj_button = document.querySelector("#new-proj")
    const proj_dialogue = document.querySelector("#proj-modal")
    const cancel_proj = document.querySelector("#cancel-proj")
    const submit_proj = document.querySelector("#submit-proj")
    const sidebar = document.querySelector("#sidebar")

    //create content/task vars
    const new_task_button = document.querySelector("#new-task")
    const task_dialogue = document.querySelector("#task-modal")
    const cancel_task = document.querySelector("#cancel-task")
    const submit_task = document.querySelector("new-task")
    const new_task_form = document.querySelector("#new-task-form")    
    const project_content = document.querySelector("#project-content")


    //reveals dialogue form
    new_proj_button.addEventListener("click", () => {
        proj_dialogue.showModal();
    });

    //closes dialogue
    cancel_proj.addEventListener("click", () => {
        proj_dialogue.close()
    });

    //submits text and closes 
    submit_proj.addEventListener("click", () => {
        const projectName = document.querySelector("#proj-title-input")
        const entry = projectManager.addProject(projectName.value)
        projectManager.addProject(entry)
        console.log(projectManager.repo[0])
        appendProject(entry)
        projectName.value = ""
        proj_dialogue.close()
    });

    //add project tab to sidebar
    function appendProject(project) {
        const proj_tab=document.createElement("button")
        proj_tab.classList.add("button", "live")
        proj_tab.setAttribute("data-id", `tab-${project.id}`)
        proj_tab.innerText = project.name

        const task_cont = document.createElement("div")
        task_cont.classList.add("content", "live")
        task_cont.setAttribute('id', `tab-${project.id}`)
        sidebar.appendChild(proj_tab)
        project_content.appendChild(task_cont)

        console.log("Im being read")
    }

    new_task_button.addEventListener("click", () => {
        task_dialogue.showModal()
    })

    cancel_task.addEventListener("click", () => {
        task_dialogue.close()
    })

    new_task_form.addEventListener("submit", submitTaskForm)

    //take form data and turn into task dom element
    function submitTaskForm(event) {
        event.preventDefault()
        const new_task_title = document.querySelector("#task-title")
        const new_task_description = document.querySelector("#task-description")
        const new_task_duedate = document.querySelector("#duedate")
        const priority = document.querySelector("#priority")
        const notes = document.querySelector("#notes")
        const container = document.querySelectorAll('.content.live')

        const task = new TODO(new_task_title.value, new_task_description.value, new_task_duedate.value, priority.value, notes.value)

        const task_div = document.createElement("div")
        task_div.innerText = task.description
        container[0].appendChild(task_div)
        task_dialogue.close()
    }

    tabLogic()
}

DOMmanipulator()

