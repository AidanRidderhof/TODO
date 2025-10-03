import { Project, TODO } from './TODO.js'
import "./style.css";

const new_proj_button = document.querySelector("#new-proj")
const proj_dialogue = document.querySelector("dialog")
const cancel_proj = document.querySelector("#cancel-proj")
const submit_proj = document.querySelector("#submit-proj")
const new_proj_form = document.querySelector("#new-proj-form")
const project_repo = []

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
    const task = new Project(projectName.value)
    project_repo.push(task)
    console.log(project_repo[0])
    projectName.value = ""
    proj_dialogue.close()
});
