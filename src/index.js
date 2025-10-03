import { ProjectManager, Project, TODO } from './TODO.js'
import "./style.css";

function DOMmanipulator() {
    const projectManager = new ProjectManager()

    const new_proj_button = document.querySelector("#new-proj")
    const proj_dialogue = document.querySelector("#proj-modal")
    const cancel_proj = document.querySelector("#cancel-proj")
    const submit_proj = document.querySelector("#submit-proj")
    const sidebar = document.querySelector("#sidebar")

    const new_task_button = document.querySelector("#new-task")
    const task_dialogue = document.querySelector("#task-modal")
    const cancel_task = document.querySelector("#cancel-task")
    const submit_task = document.querySelector("new-task")
    const new_task_form = document.querySelector("#new-task-form")

    const new_task_title = document.querySelector("#task-title")
    const new_task_description = document.querySelector("#task-description")
    const new_task_duedate = document.querySelector("#duedate")


    


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
        appendProject(entry)
        projectName.value = ""
        proj_dialogue.close()
    });

    //add project tab to sidebar
    function appendProject(project) {
        const proj_tab=document.createElement("div")
        proj_tab.classList.add("project-tab", `project-${project.id}`)
        proj_tab.innerText = project.name
        sidebar.appendChild(proj_tab)
        console.log("Im being read")
    }

    new_task_button.addEventListener("click", () => {
        task_dialogue.showModal()
    })

    cancel_task.addEventListener("click", () => {
        task_dialogue.close()
    })

    new_task_form.addEventListener("submit", submitTaskForm)

    //WIP
    function submitTaskForm(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const task = new TODO(Object.entries(formData))

        const task_div = document.createElement("div")
        task_div.innerText = task.description
        tasks.appendChild(task_div)
        task_dialogue.close()

    }

}

DOMmanipulator()