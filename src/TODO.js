export const TODO = function(title, description, duedate, priority, notes) {
    this.title = title
    this.description = description
    this.duedate = duedate
    this.priority = priority
    this.notes = notes
    this.isComplete = false
}