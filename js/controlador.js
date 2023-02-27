function filterByPriority(pListTask, pPrioridad) {
    return pListTask.filter(task => task.prioridad.includes(pPrioridad));
}

function searchByName(pListTask, pLetter) {
    return pListTask.filter(task => task.titulo.toLowerCase().includes(pLetter.toLowerCase()))
}