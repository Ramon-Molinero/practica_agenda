var texto = document.getElementById('input-tarea');
var prioridad = document.getElementById('prioridad');
var btnAnadir = document.getElementById('btn-add');
var btnBuscar = document.getElementById('btn-buscar');
var busqueda = document.getElementById('search')

//var btnDelete = document.querySelectorAll('#bt-delete')


var todastareas = new Array({
    'idtarea': 0,
    'titulo': 'Estudiar Javascript',
    'prioridad': 'urgente'
}, {
    'idtarea': 2,
    'titulo': 'Dormir',
    'prioridad': 'diaria'
}, {
    'idtarea': 3,
    'titulo': 'Salir a comer',
    'prioridad': 'mensual'
});

var variableNumero = 4;

busqueda.addEventListener('keyup', (event) => {
    console.log(event.target.value);
    //var arrayBusqueda = new Array();

    let palabra = event.target.value.toLowerCase();
    for (tarea of todastareas) {

        if (tarea.titulo.includes(palabra)) {
            // console.log(tarea.titulo);

        }

    }


})

//btnBuscar.addEventListener('click', buscarTarea)

btnAnadir.addEventListener('click', anadirTarea)

//console.log(btnDelete);



function anadirTarea() {
    // console.log(texto.value)
    // console.log(prioridad.value);
    let titulo = texto.value;
    let importancia = prioridad.value;
    let colorPrioridad = '';


    if (importancia != '') {
        switch (importancia) {
            case 'diaria':
                colorPrioridad = 'bg-primary'
                break;
            case 'mensual':
                colorPrioridad = 'bg-warning'
                break;
            case 'prioritaria':
                colorPrioridad = 'bg-danger'
                break;
        }

        let lista = document.getElementById('lista-tareas');
        lista.innerHTML += `
        <li id="tarea" data-id="${variableNumero}" data-prioridad="${importancia}" class="row ${colorPrioridad} p-3 mb-2">
        <h3 class="col-10">${titulo}</h3>
        <a id="btn-delete" class="btn btn-dark col-2" href="#">Eliminar</a>
        </li>
        `

        todastareas.push({
            'idtarea': variableNumero,
            'titulo': titulo,
            'prioridad': importancia
        });
        variableNumero++;

    }

    //capturarBtnBorrar();

}
//var btnDelete = document.getElementById('#bt-delete');
let btnDelete = document.querySelector('#lista-tareas');
btnDelete.addEventListener('click', removeTask);




function removeTask(event) {
    // console.log(event.target.id);

    if (event.target.id == 'btn-delete') {
        event.target.parentNode.remove();

        let id = event.target.parentNode.dataset.id;
        //console.log(id);
        for (let i = 0; i < todastareas.length; i++) {
            if (todastareas[i].idtarea == id) {
                todastareas.splice(i, 1)
            }
        }
    }
}



function capturarBtnBorrar() {




}

function borrarTarea() {
    var idTarea = document.getElementById('lista-tareas');
    console.log(event.target.parentNode.dataset.id);



}


function buscarTarea(event) {
    let palabraBuscar = busqueda.value;
    // console.log(palabraBuscar);

}