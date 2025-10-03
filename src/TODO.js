export function Project(name) {
    this.name = name
    this.tasks = []

    // expose addTODO as an instance method so `this` points to the project
    this.addTODO = function(title, description, duedate, priority, notes) {
        const task = new TODO(title, description, duedate, priority, notes)
        this.tasks.push(task)
    }

}

export function TODO(title, description, duedate, priority, notes) {
    this.title = title
    this.description = description
    this.duedate = duedate
    this.priority = priority
    this.notes = notes
    this.isComplete = false
}
