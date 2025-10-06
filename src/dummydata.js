import { ProjectManager, Project, TODO } from './TODO.js'

export function dummydata(projectManager) {
    const Test1 = projectManager.addProject("Test1")
    Test1.addTODO("Laundry", "Put clothes in the machine", "10/8/25", "medium", "use softener")
    Test1.addTODO("Shower", "clean yoself fool", "10/5/25", "high", "you stinky")
    
    const Test2 = projectManager.addProject("Test2")
    Test2.addTODO("Make Dinner", "Make-a-da pizza pie", "10/6/25", "low", "deepdish")
    Test2.addTODO("Hot Date", "self explanetory", "10/7/25", "medium", "wear lots of axe bodyspray")
    Test2.addTODO("Clean", "vacuum and clean fridge", "10/8/25", "medium", "you live in filth")



    const Test3 = projectManager.addProject("Test3") 
    Test3.addTODO("Study", "Go to the library and read a book", "10/9/25", "high", "Big exam on kantian ethics soon")
    Test3.addTODO("Movie Night", "cool movies to watch", "10/10/25", "low", "hope they play Morbius")

    localStorage.setItem('projectmanager', JSON.stringify(projectManager))
}