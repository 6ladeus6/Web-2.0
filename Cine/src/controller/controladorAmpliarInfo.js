//Preguntando por un dato que esta almacenado en memoria
let datosPeliculasSeleccionada = JSON.parse(localStorage.getItem("peliculasSeleccionar"));
console.log(datosPeliculasSeleccionada);
let poster = datosPeliculasSeleccionada.poster;
let nombre = datosPeliculasSeleccionada.nombrePelicula;
let genero = datosPeliculasSeleccionada.generoPelicula;
let idioma = datosPeliculasSeleccionada.idioma;
let sinopsis = datosPeliculasSeleccionada.sinopsis;
let director = datosPeliculasSeleccionada.director;
let actores = datosPeliculasSeleccionada.reparto;



//redirecciona a otra vista
//window.location.href = "./src/views/ampliarInfoPelicula.html"

//CARGANDO DATOS
    let foto = document.getElementById("imagenAmpliada");
    foto.src = poster;

    let titulo=document.getElementById("titulo");
    titulo.textContent=nombre;

    let generoPel = document.getElementById("genero");
    generoPel.textContent = genero;

    let idiomaPel = document.getElementById("idioma");
    idiomaPel.textContent = idioma;

    let sinopsisPel = document.getElementById("sipnosis");
    sinopsisPel.textContent = sinopsis;

    let directorPel = document.getElementById("director");
    directorPel.textContent = director;

    let actoresPel = document.getElementById("actores");
    actoresPel.textContent = actores;