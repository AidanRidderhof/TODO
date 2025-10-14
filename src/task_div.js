export function makeTaskDiv(task) {
    const taskdiv = document.createElement("div")
    const title = task.title
    const description = task.description
    const duedate = task.duedate
    const priority = task.priority
    const notes = task.notes
    const complete = task.isComplete

    let buttondiv

    if (complete) {
        buttondiv = "<div class='do-task complete-todo'><button></button></div>"

    }

    else {
        buttondiv = "<div class='do-task incomplete-todo'><button></button></div>"

    }

    taskdiv.innerHTML=`${buttondiv}<div><h2>${title}</h2><p>${description}</p><p>${duedate}</p><p>${notes}</p><button class='remove'>remove</button></div>`
    //taskdiv.appendChild(buttondiv)
    if (priority=='low') {
        taskdiv.style.backgroundColor='green'
    }
    else if (priority=='medium') {
        taskdiv.style.backgroundColor='yellow'
    }
    else if (priority=='high') {
        taskdiv.style.backgroundColor='red'
    }

    return taskdiv
}