import { ProjectManager, Project, TODO } from './TODO.js'
import "./style.css";

function DOMmanipulator() {
    const projectManager = new ProjectManager()

    const new_proj_button = document.querySelector("#new-proj")
    const proj_dialogue = document.querySelector("dialog")
    const cancel_proj = document.querySelector("#cancel-proj")
    const submit_proj = document.querySelector("#submit-proj")
    const sidebar = document.querySelector("#sidebar")

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

}

DOMmanipulator()