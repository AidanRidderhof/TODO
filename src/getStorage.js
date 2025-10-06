import { ProjectManager, Project, TODO } from './TODO.js'

export function getLocalStorage() {
    const storedObj = localStorage.getItem('projectmanager') ? localStorage.getItem('projectmanager') : new ProjectManager
    const projectManager = JSON.parse(storedObj)
    domDisplay(projectManager)
    return(projectManager)
}

function domDisplay(projectManager) {
    for (let p_index in projectManager.repo) {
        console.log(projectManager.repo[p_index])
    }
}