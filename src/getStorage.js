import { ProjectManager, Project, TODO } from './TODO.js'

export function getLocalStorage() {
    const storedObj = localStorage.getItem('projectmanager') ? localStorage.getItem('projectmanager') : new ProjectManager
    const projectManager = JSON.parse(storedObj)
    domDisplay(projectManager)
    return(projectManager)
}

function domDisplay(projectManager) {
    for (let p_index in projectManager.repo) {
        const project = projectManager.repo[p_index]
        const project_tab = document.createElement("button")
        project_tab.classList.add("button")
        project_tab.setAttribute("data-id", `tab-${project.id}`)
        if (project==0) {
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
    task_cont.classList.add("content", "live")
    task_cont.setAttribute('id', `tab-${project.id}`)
    project_content.appendChild(task_cont)

    project.repo.forEach(task => {
        
        const taskdiv = document.createElement('div')
        taskdiv.innerText=task.description
        task_cont.appendChild(taskdiv)
    });
}