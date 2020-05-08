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