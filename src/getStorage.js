import { ProjectManager, Project, TODO } from './TODO.js'
import { makeTaskDiv } from './task_div.js'

export function getLocalStorage() {
    const storedObj = localStorage.getItem('projectmanager')
    let projectManager

    if (storedObj) {
        const parsed = JSON.parse(storedObj)
        projectManager = Object.assign(new ProjectManager(), parsed)

        // Reattach prototypes to nested objects
        projectManager.repo = projectManager.repo.map(p => {
        const project = Object.assign(new Project(), p)
        project.repo = project.repo.map(t => Object.assign(new TODO(), t))
        return project
        })
    } else {
        projectManager = new ProjectManager()
    }
    domDisplay(projectManager)
    return(projectManager)
}

function domDisplay(projectManager) {
    for (let p_index in projectManager.repo) {
        const project = projectManager.repo[p_index]
        const project_tab = document.createElement("button")
        project_tab.classList.add("button")
        project_tab.setAttribute("data-tab", `${project.id}`)
        if (project.id==1) {
            project_tab.classList.add("live")
        }
        project_tab.innerText = project.name

        const sidebar = document.querySelector("#sidebar")
        sidebar.appendChild(project_tab)
        appendTasks(project)
        
    }
}

//append task to dom

function appendTasks(project) {
    const project_content = document.querySelector("#project-content")
    const task_cont = document.createElement("div")
    task_cont.classList.add("content")
    if (project.id==1) {
        task_cont.classList.add("live")
    }
    task_cont.setAttribute('id', `tab-${project.id}`)
    project_content.appendChild(task_cont)

    project.repo.forEach(task => {
        
        const taskdiv = makeTaskDiv(task)
        task_cont.appendChild(taskdiv)
    });
}

export function commitToStorage(projectManager) {
    localStorage.setItem('projectmanager', projectManager)
}