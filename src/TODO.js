export function Project(name) {
    this.name = name
    this.tasks = []
    this.id = null

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
    this.id = null
}

//refactor names to work with armproto

export function ProjectManager() {
    this.projects = []

    this.addProject = function(name) {
        const project = new Project(name)
        this.projects.push(project)
        this.mapIDS()
    }

    this.removeProject = function(id) {
        const index = id-1
        this.projects.splice(index, 1)
        this.mapIDS()
    }

    this.mapIDS = function () {
        this.projects.forEach((project, i) => {
            project.id = i + 1
        })
    }
}

/* const ARMproto = {
    addItem: function(object, ...args) {
        const entry = new object(...args)
        this.repo.push(entry)
        mapIDS()
    }

    removeItem: function(id) {
        index = id-1
        this.projects = this.projects.splice(index, 1)
        mapIDS()
    },
    mapIDS: function() {
        this.projects.map((project, i) => {
            project.id = i + 1
        })
    }
} */