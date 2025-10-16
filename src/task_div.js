export function makeTaskDiv(task, projectManager, projectIndex) {
    const taskdiv = document.createElement("div")
    const title = task.title
    const description = task.description
    const duedate = task.duedate
    const priority = task.priority
    const notes = task.notes
    const complete = task.isComplete

    let buttondiv

    if (complete) {
        buttondiv = "<div class='do-task complete-todo'><button class='complete-btn'></button></div>"
    } else {
        buttondiv = "<div class='do-task incomplete-todo'><button class='complete-btn'></button></div>"
    }

    taskdiv.innerHTML=`${buttondiv}<div><h2>${title}</h2><p>${description}</p><p>${duedate}</p><p>${notes}</p><button class='remove'>remove</button></div>`
    
    if (priority=='low') {
        taskdiv.style.backgroundColor='green'
    }
    else if (priority=='medium') {
        taskdiv.style.backgroundColor='yellow'
    }
    else if (priority=='high') {
        taskdiv.style.backgroundColor='red'
    }

    // Complete button functionality
    const completeBtn = taskdiv.querySelector('.complete-btn')
    completeBtn.addEventListener('click', () => {
        task.toggleComplete()
        
        // Update the visual state
        const doTask = taskdiv.querySelector('.do-task')
        if (task.isComplete) {
            doTask.classList.remove('incomplete-todo')
            doTask.classList.add('complete-todo')
            taskdiv.style.opacity = '0.6'
        } else {
            doTask.classList.remove('complete-todo')
            doTask.classList.add('incomplete-todo')
            taskdiv.style.opacity = '1'
        }
        
        // Save to localStorage
        localStorage.setItem('projectmanager', JSON.stringify(projectManager))
    })

    // Remove button functionality
    const removeBtn = taskdiv.querySelector('.remove')
    removeBtn.addEventListener('click', () => {
        const project = projectManager.repo[projectIndex]
        project.removeItem(task.id)
        
        // Remove the DOM element
        taskdiv.remove()
        
        // Save to localStorage
        localStorage.setItem('projectmanager', JSON.stringify(projectManager))
    })

    return taskdiv
}