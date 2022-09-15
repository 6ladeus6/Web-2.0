//Preguntando por un dato que esta almacenado en memoria
let receptora = localStorage.getItem("peliculasSeleccionar");
console.log(receptora);

//redirecciona a otra vista
window.location.href = "./src/views/ampliarInfoPelicula.html"