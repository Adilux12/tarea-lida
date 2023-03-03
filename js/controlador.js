function filterByPriority(pListTask, pPrioridad) {

    let posicion = pListTask.filter(task => task.prioridad.includes(pPrioridad));
    const tareas = localStorage.setItem('task', JSON.stringify(posicion));
    console.log(tareas);
    return posicion;
}

function searchByName(pListTask, pLetter) {
    let search = pListTask.filter(task => task.titulo.toLowerCase().includes(pLetter.toLowerCase()));
    const tareas = localStorage.setItem('task', JSON.stringify(search));
    console.log(tareas);
    return search;
}

function addTask(pListTask, pTask) {

    let existe = pListTask.some(task => task.titulo === pTask.titulo);
    if (!existe) {

        pTask.idTarea = idTarea;
        pListTask.push(pTask);
        idTarea++;
        // console.log(pListTask)
        let tareas = localStorage.setItem('task', JSON.stringify(pTask));
        console.log(tareas);
        return { status: true, msg: "" }

    } else
        return { status: false, msg: "Tarea Duplicado" }
}

function deleteTask(pListTask, pId) {


    let position = pListTask.findIndex(task => task.idTarea === pId);
    console.log(position)
    if (position !== -1) {
        pListTask.splice(position, 1)
        let tareas = localStorage.setItem('task', JSON.stringify(pListTask));
        console.log(tareas);
        return { status: true, msg: 'Tarea Borrado' }

    }
    return { status: false, msg: 'No existe el task de borrar' }
}