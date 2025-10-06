import { ProjectManager, Project, TODO } from './TODO.js'

export function getLocalStorage() {
    const storedObj = localStorage.getItem('projectmanager') ? localStorage.getItem('projectmanager') : new ProjectManager
    const projectManager = JSON.parse(storedObj)
    console.log(projectManager)
    return(projectManager)
}