export function TODO(title, description, duedate, priority, notes) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title
    this.description = description
    this.duedate = duedate
    this.priority = priority
    this.notes = notes
    this.isComplete = false
    this.id = null
}

export function Project(name) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.name = name
    this.repo = []
    this.id = null
}

export function ProjectManager() {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.repo = []
}

const ARMproto = {
    addItem: function(object, ...args) {
        const entry = new object(...args)
        this.repo.push(entry)
        this.mapIDS()
        return entry
    },

    removeItem: function(id) {
        const index = id-1
        this.repo.splice(index, 1)
        this.mapIDS()
    },

    mapIDS: function() {
        this.repo.forEach((item, i) => {
            item.id = i + 1
        })
    }
}

Project.prototype = Object.create(ARMproto)
Project.prototype.constructor = Project

ProjectManager.prototype = Object.create(ARMproto)
ProjectManager.prototype.constructor = Project


Project.prototype.addTODO = function(...args) {
  return this.addItem(TODO, ...args)
}

ProjectManager.prototype.addProject = function(name) {
  return this.addItem(Project, name)
}