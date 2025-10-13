export function makeTaskDiv(task) {
    const taskdiv = document.createElement("div")
    const title = task.title
    const description = task.description
    const duedate = task.duedate
    const priority = task.priority
    const notes = task.notes
    const complete = task.isComplete
    taskdiv.classList.add("content")

    taskdiv.innerHTML=`<h2>${title}</h2><p>${description}</p><p>${duedate}</p><p>${notes}</p>`
    
}