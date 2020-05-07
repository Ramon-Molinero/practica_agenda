// capturar elementos

// boton añadir tarea
// input añadir tarea
// selector añadir tarea
// input buscar tarea
// selector buscar tarea

// añadir tarea
var btnAnadirTarea = document.getElementById('btn-add');
var textoAnadir = document.querySelector('#input-tarea');
var selectorAnadirTarea = document.querySelector('#prioridad');

// buscar tarea
var inputBuscarTarea = '';
var selectorBuscarTarea = '';

// array tareas

var listaTareas = new Array();
var listaComparacion = new Array();

// contador

var idTarea = 0;


//capturar eventos que necesitamos

btnAnadirTarea.addEventListener('click', anadirTarea)




function anadirTarea() {
    let nuevaTarea = textoAnadir.value;
    let prioridadTarea = selectorAnadirTarea.value;
    idTarea++
    let tarea = {
        idtarea: idTarea,
        titulo: nuevaTarea,
        prioridad: prioridadTarea,
    }
    listaTareas.push(tarea)
    listaComparacion.push(tarea)
    // console.log(listaTareas);
    // console.log(listaComparacion);

    selectPrioridad(tarea);

}

function selectPrioridad(tarea) {

    let clasePrioridad = '';
    if (prioridadTarea != '') {
        switch (prioridadTarea) {
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
        // .innerHTML += `
        // <li class="row ${clasePrioridad} p-3 mb-2">
        //     <h3 class="col-10">${tarea.titulo}</h3>
        //     <button data-id="${idTarea}" id="btn-eliminar" class="btn btn-dark col-2" href="#">Eliminar</button>
        // </li>
        // `
        console.log(clasePrioridad);


    }

}



let btnEliminar = document.querySelectorAll('#btn-eliminar');
for (boton of btnEliminar) {
    boton.addEventListener('click', eliminarTarea);

}