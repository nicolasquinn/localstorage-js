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
        return; // termino la función, p' que no siga leyendo lo que sigue.
    }
    
    // Meto los mensajes en el array
    const tweetObj = {
        id: Date.now(), // Date.now() sirve para identificar básicamente. Los números son una cuenta de milisegundos, que empezaron en 1970 aprox. Por lo tanto no se puede volver a repetir.
        tweet // <- es = tweet : tweet
    }
    tweets = [...tweets, tweetObj]

    // Creo el HTML
    crearHTML();

    // Reinicio el formulario.
    formulario.reset();

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

function crearHTML () {

    limpiarHTML();

    if (tweets.length > 0) { // si el arreglo tiene algo.
        tweets.forEach( elemento => {
            const item = document.createElement('LI');
            item.textContent = elemento.tweet;
            listaTweets.appendChild(item)
        })
    }

}

function limpiarHTML () {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild)
    }
}
