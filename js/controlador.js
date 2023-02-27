function filterByPriority(pListTask, pPrioridad) {
    return pListTask.filter(task => task.prioridad.includes(pPrioridad));
}