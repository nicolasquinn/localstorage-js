// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
const contenido = document.querySelector('#contenido');
let tweets = [];

// Eventos
eventListeners();
function eventListeners () {
    formulario.addEventListener('submit', agregarTweet);
}

// Funciones
function agregarTweet (e) {
    e.preventDefault();

    // Almaceno el texto escrito en el textarea
    const tweet = document.querySelector('#tweet').value;

    // Validación
    if (tweet.length === 0) {
        mostrarError('El tweet no puede estar vacío.')
    } else {
        console.log("tiene algo.")
    }
    
}

// Función reutilizable para mostrar mensajes de error.
function mostrarError (mensaje) {

    // Verifico si existe un error, si no existe, lo creo.
    if (contenido.children.length === 1) {
        const errorMsg = document.createElement('P');
        errorMsg.textContent = mensaje;
        errorMsg.classList.add('error');
        contenido.appendChild(errorMsg)
        setTimeout(() => {
            eliminarError();
        }, 5000);
    }

}

// Función reutilizable para borrar los mensajes de error.
function eliminarError() {
    const elHijo = contenido.children[1];
    elHijo.remove();
}