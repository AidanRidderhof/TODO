import { ProjectManager, Project, TODO } from './TODO.js'
import "./style.css";

const new_proj_button = document.querySelector("#new-proj")
const proj_dialogue = document.querySelector("dialog")
const cancel_proj = document.querySelector("#cancel-proj")
const submit_proj = document.querySelector("#submit-proj")
const new_proj_form = document.querySelector("#new-proj-form")
const sidebar = document.querySelector("#sidebar")

const project_repo = new ProjectManager()

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
    const entry = project_repo.addProject(projectName.value)
    appendProject(entry.name)
    projectName.value = ""
    proj_dialogue.close()
});

function appendProject(project) {
    const proj_tab=document.createElement("div")
    proj_tab.classList.add("project-tab")
    proj_tab.innerText = project
    sidebar.appendChild(proj_tab)
    console.log("Im being read")
}