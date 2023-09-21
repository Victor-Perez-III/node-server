const taskList = [];
let id = 1;

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const Menu = () => {
    console.log(
        "Que desea hacer? \n 1. Añadir tarea \n 2. Eliminar Tarea \n 3. Ya cumpli la tarea \n 4. Ver tareas \n 0. Salir"
    );
    rl.question("Escoja una opción del menú: ", option => {
        if (option == "1") {
            addTask()
                .then(() => Menu())
                .catch(err => console.error(err));
        }
        if (option == "4") {
            SeeTasks()
                .then(() => Menu())
                .catch(err => console.error(err));
        }
        if (option == "2") {
            deleteTask()
                .then(() => Menu())
                .catch(err => console.error(err));
        }

        if (option == "3") {
            completeTask()
                .then(() => Menu())
                .catch(err => console.error(err));
        }
    });
};

const SeeTasks = () => {
    return new Promise((resolve, reject) => {
        taskList.forEach(task => {
            console.log("----------------------------------------");
            console.log(`${task.id}. ${task.description}`);
            console.log(task.state);
            console.log("----------------------------------------");
        });
        resolve();
    });
};

const addTask = () => {
    return new Promise((resolve, reject) => {
        rl.question("Ingrese Tarea: ", task => {
            taskList.push({
                id: id++,
                description: task,
                state: "No completado"
            });
            resolve();
        });
    });
};

const deleteTask = () => {
    return new Promise((resolve, reject) => {
        rl.question("Elija la tarea que desea borrar: ", id => {
            taskList.splice(id - 1, 1);
            resolve();
        });
    });
};

const completeTask = () => {
    return new Promise((resolve, reject) => {
        rl.question("Que tarea completaste: ", id => {
            const index = taskList.findIndex(task => {
                return task.id == id;
            });
            taskList[index].state = "Complete";
            resolve();
        });
    });
};

Menu();
