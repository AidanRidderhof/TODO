export function Project(name) {
    this.name = name
    this.tasks = []

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

export function ProjectManager() {
    this.projects = []
    this.addProject = function(name) {
        const project = new Project(name)
        this.projects.push(project)
    }
}