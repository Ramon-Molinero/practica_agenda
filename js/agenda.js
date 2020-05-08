'use stric'
/*

añadir una tarea y añadir los datos al array;

mostrar una tarea añadida al html;

eliminar tareas

mostramos todas las tareas al html;

muestro todos los datos internos al html;

filtar tarea por texto y mostrarlas al html

filtrar tarea por selector y mostrarlas al html

*/

// captura de elementos añadir tarea
let btnAnadirTarea = document.getElementById('btn-add');
let inputAnadirTarea = document.querySelector('#input-tarea');
let selectorAnadirTarea = document.querySelector('#prioridad');

// buscar tarea
let inputBuscarTarea = document.querySelector('#search');
let selectorBuscarTarea = document.querySelector('#buscar-prioridad');

selectorBuscarTarea.addEventListener('change', filtrarPrioridad);

// array tareas
let arrayTareas = new Array({
    'idtarea': 0,
    'titulo': 'Estudiar Javascript',
    'prioridad': 'prioritaria'
}, {
    'idtarea': 2,
    'titulo': 'Dormir',
    'prioridad': 'diaria'
}, {
    'idtarea': 3,
    'titulo': 'Salir a comer',
    'prioridad': 'mensual'
});

// array del selector de tareas
var arraySelectorTareas = new Array();

// contador id tarea
var idTarea = 0;

// ul a mostrar en html
var ul = document.getElementById('lista-tareas');

//capturar eventos que necesitamos

btnAnadirTarea.addEventListener('click', anadirTarea)
inputBuscarTarea.addEventListener('input', filtrarTarea)

// alerta mensaje
var alerta = document.getElementById('alerta');

// añadimos tarea, condicional de creacion y suma array, mostramos alerta si los campos no estan rellenos
function anadirTarea() {
    let inputNuevaTarea = inputAnadirTarea.value;
    let prioridadTarea = selectorAnadirTarea.value;


    if (inputNuevaTarea != '' && prioridadTarea != '') {
        idTarea++
        alerta.style.display = 'none';
        let tarea = {
            idtarea: idTarea,
            titulo: inputNuevaTarea,
            prioridad: prioridadTarea
        }
        arrayTareas.push(tarea)
        mostrarTarea(tarea);

    } else {
        alerta.style.display = 'block';
    }
    inputAnadirTarea.value = ''; // Resetea busqueda
    selectorAnadirTarea.selectedIndex = 0; // Resetea a posicion inicial del selector

}

// Eliminamos la tarea capturando el evento, 
function eliminarTarea(event) {
    let idtarea = event.target.dataset.id;
    let posicion = arrayTareas.findIndex(tarea => {
        return tarea.titulo == idtarea;
    })

    arrayTareas.splice(posicion, 1); // elimina del array
    let htmlEliminar = event.target.parentNode;

    htmlEliminar.parentNode.removeChild(htmlEliminar)

}

// asigna prioridad , pinta tarea, crea boton eliminar y evento
function mostrarTarea(tarea) {
    let clasePrioridad = '';

    switch (tarea.prioridad) {
        case 'diaria':
            clasePrioridad = 'bg-diaria'
            break;
        case 'mensual':
            clasePrioridad = 'bg-mensual'
            break;
        case 'prioritaria':
            clasePrioridad = 'bg-prioridad'
            break;

    }

    ul.innerHTML += `
        <li class="row ${clasePrioridad} p-3 mb-2">
            <h3 class="col-10">${tarea.titulo}</h3>
            <button data-id="${idTarea}" id="btn-eliminar" class="btn btn-dark col-2" href="#">Eliminar</button>
        </li>
        `
    let btnEliminar = document.querySelectorAll('#btn-eliminar');
    for (boton of btnEliminar) {
        boton.addEventListener('click', eliminarTarea);

    }

}

//Mostramos todas las tareas
function mostrarTodasTarea(listaTareas) {
    ul.innerHTML = '';
    for (tarea of listaTareas) {
        mostrarTarea(tarea)
    }

}

// filtramos tarea por palabra comparandola con el array y si esta incluida la metemos en un filtro y despues lo mostramos
function filtrarTarea(event) {
    let arrayFiltroTareas = new Array();
    let palabraBuscar = event.target.value.toLowerCase();

    for (tarea of arrayTareas) {
        let titulo = tarea.titulo.toLowerCase();
        if (titulo.includes(palabraBuscar)) {
            arrayFiltroTareas.push(tarea)
        }

    }

    ul.innerHTML = '';
    for (filtroTarea of arrayFiltroTareas) {

        mostrarTarea(filtroTarea)
    }

}

// filtramos la prioridad como con el filtro por palaba 

function filtrarPrioridad(event) {
    let arrayFiltroPrioridad = new Array();
    let seleccion = event.target.value.toLowerCase();

    for (tarea of arrayTareas) {
        let prioridad = tarea.prioridad;
        if (prioridad.includes(seleccion)) {
            arrayFiltroPrioridad.push(tarea);
        }
    }
    ul.innerHTML = '';
    for (filtro of arrayFiltroPrioridad) {

        mostrarTarea(filtro);

    }


}

// arrancamos mostrando las tareas predefinidas
mostrarTodasTarea(arrayTareas)