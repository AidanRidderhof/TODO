export function makeTaskDiv(task) {
    const taskdiv = document.createElement("div")
    const title = task.title
    const description = task.description
    const duedate = task.duedate
    const priority = task.priority
    const notes = task.notes
    const complete = task.isComplete
    taskdiv.classList.add("content")

    const buttondiv = document.createElement("div")
    const completeButton = document.querySelector("button")
    buttondiv.appendChild(completeButton)

    if (isComplete) {
        buttondiv.classList.add("complete-todo")
    }

    else {
        buttondiv.classList.add("incomplete-todo")
    }

    taskdiv.innerHTML=`${buttondiv}<h2>${title}</h2><p>${description}</p><p>${duedate}</p><p>${notes}</p>`
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