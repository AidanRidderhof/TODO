import { Project, TODO } from './TODO.js'
import "./style.css";

const new_proj_button = document.querySelector("#new-proj")
const proj_dialogue = document.querySelector("dialog")
const cancel_proj = document.querySelector("#cancel-proj")
const submit_proj = document.querySelector("submit-proj")

new_proj_button.addEventListener("click", () => {
    proj_dialogue.showModal();
});

cancel_proj.addEventListener("click",() => {
    proj_dialogue.close()
})
