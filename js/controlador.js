function filterByPriority(pListTask, pPrioridad) {
    return pListTask.filter(task => task.prioridad.includes(pPrioridad));
}

function searchByName(pListTask, pLetter) {
    return pListTask.filter(task => task.titulo.toLowerCase().includes(pLetter.toLowerCase()))
}

function addTask(pListTask, pTask) {
    let existe = pListTask.some(task => task.titulo === pTask.titulo);
    if (!existe) {

        pTask.idTarea = idTarea;
        pListTask.push(pTask);
        idTarea++;
        console.log(pListTask)
        return { status: true, msg: "" }

    } else
        return { status: false, msg: "Tarea Duplicado" }
}

function deleteTask(pListTask, pId) {
    let position = pListTask.findIndex(task => task.idTarea === pId);

    if (position !== -1) {
        pListTask.splice(position, 1)
        return { status: true, msg: 'Tarea Borrado' }
    }
    return { status: false, msg: 'No existe el tarea de borrar' }
}