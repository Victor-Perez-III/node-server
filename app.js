const taskList = []
let id = 1

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const Menu = () => {

    console.log('Que desea hacer? \n 1. Añadir tarea \n 2. Eliminar Tarea \n 3. Ya cumpli la tarea \n 4. Ver tareas \n 0. Salir');
    rl.question("Escoja un opcion del menu:" + " ",

        (option) => {
            if (option == "1") {
                addTask()
            }
            if (option == "4") {
                SeeTasks();

            }
            if (option == "2") {
                deleteTask()
            }

            if (option == "3") {
                completeTask()
            }

            if (option == "0") {
                Menu()
            }





        })



}

const SeeTasks = () => {
    //console.log(taskList);
    taskList.forEach(task => {
        console.log("----------------------------------------");
        console.log(`${task.id}. ${task.description}`);
        console.log(task.state);
        console.log("----------------------------------------");
    });
    Menu()

}



const addTask = () => {
    rl.question("Ingrese Tarea:" + " ", task => {
        taskList.push({
            id: id++,
            description: task,
            state: "No completado"
        })
        Menu()


    })
}

const deleteTask = () => {
    rl.question("Elija la tarea que desea borrar:" + " ", (id) => {
        taskList.splice(id - 1, 1)
        Menu()
    })

}

const completeTask = () => {
    rl.question("Que tarea completaste" + " ", (id) => {
        const index = taskList.findIndex((task) => {
            return task.id == id
        })

        taskList[index].state = "Complete"

        Menu()
    })

}

Menu()