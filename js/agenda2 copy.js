// capturar elementos

// boton añadir tarea
// input añadir tarea
// selector añadir tarea
// input buscar tarea
// selector buscar tarea

// añadir tarea
let btnAnadirTarea = document.getElementById('btn-add');
let inputAnadirTarea = document.querySelector('#input-tarea');
let selectorAnadirTarea = document.querySelector('#prioridad');

// buscar tarea
let inputBuscarTarea = document.querySelector('#search');
let selectorBuscarTarea = '';


// array tareas

let arrayTareas = new Array();

let arraySelectorTareas = new Array();

// contador id tarea

var idTarea = 0;

// ul a mostrar en html

let ul = document.getElementById('lista-tareas');

//capturar eventos que necesitamos

btnAnadirTarea.addEventListener('click', anadirTarea)
//inputBuscarTarea.addEventListener('input', filtrarTarea)



function anadirTarea() {
    let inputNuevaTarea = inputAnadirTarea.value;
    let prioridadTarea = selectorAnadirTarea.value;
    idTarea++

    let tarea = {
        idtarea: idTarea,
        titulo: inputNuevaTarea,
        prioridad: prioridadTarea
    }
    arrayTareas.push(tarea)
    mostrarTarea(tarea);

    let btnEliminar = document.querySelectorAll('#btn-eliminar');
    for (boton of btnEliminar) {
        boton.addEventListener('click', eliminarTarea);

    }

    //mostrarTarea(inputNuevaTarea, prioridadTarea, clasePrioridad)

}


function eliminarTarea(event) {
    event.preventDefault();
    //console.log(event.target.parentNode.dataset.id);
    let idtarea = event.target.dataset.id;
    arrayTareas.splice(idtarea, 1);
    event.target.parentNode.remove();



    //arrayTareas.splice(idtarea, 1);


    // for (tarea of arrayTareas) {
    //     arrayTareas.splice(idtarea, 1)

    // }
}


function mostrarTodasTarea(listaTareas) {
    ul.innerHTML = '';
    for (tarea of listaTareas) {
        mostrarTarea(tarea)
    }

}

function mostrarTarea(tarea) {
    let clasePrioridad = '';
    if (tarea.prioridad != '') {
        switch (tarea.prioridad) {
            case 'diaria':
                clasePrioridad = 'bg-primary'
                break;
            case 'mensual':
                clasePrioridad = 'bg-warning'
                break;
            case 'prioritaria':
                clasePrioridad = 'bg-danger'
                break;

        }

        ul.innerHTML += `
        <li class="row ${clasePrioridad} p-3 mb-2">
            <h3 class="col-10">${tarea.titulo}</h3>
            <button data-id="${idTarea}" id="btn-eliminar" class="btn btn-dark col-2" href="#">Eliminar</button>
        </li>
        `
    }

}

/* function filtrarTarea(event) {
    let arrayFiltroTareas = new Array();
    let palabraBuscar = event.target.value.toLowerCase();


    for (tarea of arrayTareas) {
        let titulo = tarea.titulo.toLowerCase();
        if (titulo.includes(palabraBuscar)) {
            arrayFiltroTareas.push(tarea)

        }

        //mostrarTodasTareas(arrayFiltroTareas, 'bg-primary')

    }

    ul.innerHTML = '';
    for (filtroTarea of arrayFiltroTareas) {

        ul.innerHTML = `
        <li data-id="${filtroTarea.idtarea}" class="row bg-primary p-3 mb-2">
            <h3 class="col-10">${filtroTarea.titulo}</h3>
            <a id="btn-eliminar" class="btn btn-dark col-2" href="#">Eliminar</a>
        </li>
        `
    }

} */