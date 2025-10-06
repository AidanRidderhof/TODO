import { ProjectManager, Project, TODO } from './TODO.js'

export function dummydata(projectManager) {
    const Test1 = projectManager.addProject("Test1")
    Test1.addTODO("Laundry", "Put clothes in the machine", "10/8/25", "medium", "use softener")
    
    const Test2 = projectManager.addProject("Test2")
    Test2.addTODO("Make Dinner", "Make-a-da pizza pie", "10/6/25", "low", "deepdish")

    const Test3 = projectManager.addProject("Test3") 
    Test3.addTODO("Study", "Go to the library and read a book", "10/9/25", "high", "Big exam on kantian ethics soon")
}