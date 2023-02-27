//captura pantalla de la secctiom pintar tarea
const sectionTask = document.querySelector('section .flex');
console.log(sectionTask);


function printAllTasks(pListTask, pSectionTask) {
    pSectionTask.innerHTML = "";
    pListTask.forEach(task => printOneTask(task, sectionTask));
}

function printOneTask(pTask, pSectionTask) {
    /**       < article >
                        <h3>Titulo de tarea </h3>
                        <div>
                            <button>x</button>
                        </div>
                    </article >
        <article>
            <h3>Titulo de tarea </h3>
            <div>
                <button>x</button>
            </div>
        </article>-*/

    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    h3.textContent = pTask.titulo;
    const div = document.createElement('div');
    const button = document.createElement('button');
    button.textContent = 'x';
    article.classList.add(`${pTask.prioridad}`)


    article.appendChild(h3);
    article.appendChild(div);
    div.appendChild(button);
    pSectionTask.appendChild(article);

}


printAllTasks(listaTareas, sectionTask);
//filtrar por prioridad  de tarea
//captura los elementos que necesita

const selectPriority = document.querySelector('#prioridad')
console.log(selectPriority);
selectPriority.addEventListener('change', getPriority)

function getPriority(event) {
    console.log(event.target.value)
    let priority = event.target.value;
    let ListPriority = filterByPriority(listaTareas, priority)
    console.log(ListPriority);
    printAllTasks(ListPriority, sectionTask);
}

