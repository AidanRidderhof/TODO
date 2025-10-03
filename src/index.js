import { Project, TODO } from './TODO.js'
import "./style.css";

const new_proj_button = document.querySelector("#new-proj")
const proj_dialogue = document.querySelector("dialog")
const cancel_proj = document.querySelector("#cancel-proj")
const submit_proj = document.querySelector("#submit-proj")
const new_proj_form = document.querySelector("#new-proj-form")

const Test = new Project("I am a test project")
console.log(Test.name)
Test.addTODO("exname", "exdes", "exdd", "exprior", "exnotes")
console.log(Test.tasks[0])

//reveals dialogue form
new_proj_button.addEventListener("click", () => {
    proj_dialogue.showModal();
});

//closes dialogue
cancel_proj.addEventListener("click", () => {
    proj_dialogue.close()
});

//submits text and closes WIP
submit_proj.addEventListener("click", () => {
    const projectName = document.querySelector("#proj-title-input")
    const task = new Project(projectName.value)
    console.log(task.name)
    projectName.value = ""
    proj_dialogue.close()
});
