
import {peliculas} from "../helper/baseDatos.js";
import{proximas} from "../helper/baseDatosNueva.js"
import{pintarPeliculas} from "../helper/pintarPeliculas.js"

let fila = document.getElementById("fila");
//LLAMO A LA FUNCION PINTAR PELICULA
pintarPeliculas(peliculas);

let peliculaSeleccionar = {};
fila.addEventListener('click',function(evento){
   window.location.href = "./src/views/ampliarInfoPelicula.html"
   
   peliculaSeleccionar.poster=(evento.target.parentElement.querySelector('img').src);//Imagen
   peliculaSeleccionar.nombrePelicula=(evento.target.parentElement.querySelector('h3').textContent);//Nombre
   peliculaSeleccionar.generoPelicula=(evento.target.parentElement.querySelector('h4').textContent);//Genero
   peliculaSeleccionar.idioma=(evento.target.parentElement.querySelector('h6').textContent);//Idioma
   peliculaSeleccionar.sinopsis=(evento.target.parentElement.querySelector('p').textContent);//Sinopsis
   peliculaSeleccionar.clasificacion=(evento.target.parentElement.querySelector('h7').textContent);//Clasificación
   peliculaSeleccionar.director=(evento.target.parentElement.querySelector('h8').textContent);//Director
   peliculaSeleccionar.reparto=(evento.target.parentElement.querySelector('h9').textContent);//Reparto
    console.log(peliculaSeleccionar);
    //Llamando la memoria del computador
    localStorage.setItem("peliculasSeleccionar",JSON.stringify(peliculaSeleccionar));

})

///---------------------------------------------------------PELICULAS PROXIMAS A ESTRENO---------------------------------------------------------------

let fila2 = document.getElementById("fila2");


/* proximas.forEach(function(proximamente){

    
    //TRAVERSING (CREAR ETIQUETAS DE HTML DESDE JS)
   //1. CREAMOS UNA COLUMNA PARA CADA PELICULA
   let columna2 = document.createElement("div");
   columna2.classList.add("col");
   //2.CREAMOS UNA TARJETA PARA CADA PELICULA
   let card2 = document.createElement("div");
   card2.classList.add("card", "h-100");
  //3. CREAMOS UNA FOTO PARA CADA PELICULA
  let poster = document.createElement("img");
  poster.classList.add("card-img-top");
  poster.src = proximamente.poster;
  //4. AGREGAMOS LOS NOMBRES A LAS PELICULAS
  let nombrePelicula = document.createElement("h3");
  nombrePelicula.classList.add("card-title","text-center");
  nombrePelicula.textContent = proximamente.nombre;
  //5. AGREGAMOS EL GENERO DE LAS PELICULAS
  let generoPelicula = document.createElement("h4");
  generoPelicula.classList.add("card-text");
  generoPelicula.textContent = "Genero: " + proximamente.genero;
//6. AGREGAMOS EL IDIOMA
    let idioma=document.createElement("h6");
    idioma.classList.add("fw-bold");
    idioma.textContent= "Idioma: " + proximamente.idioma;
//7. AGREGAMOS LA SINOPSIS
    let sinopsis=document.createElement("p");
    sinopsis.classList.add("card-text");
    sinopsis.textContent=proximamente.sinopsis;
 //8. AGREGAMOS LA CLASIFICACIÓIN
    let clasificacion = document.createElement("h6");
    clasificacion.classList.add("fw-bold");
     clasificacion.textContent = "Clasificación: " + proximamente.clasificacion;
//9. DIRECTOR
let director = document.createElement("h6");
    director.classList.add("fw-bold");
     director.textContent = "Director: " + proximamente.director;
//10. REPARTO
let reparto = document.createElement("h6");
    reparto.classList.add("fw-bold");
     reparto.textContent = "Reparto: " + proximamente.reparto;

    //PADRES E HIJOS
    card2.appendChild(poster);
    card2.appendChild(nombrePelicula);
    card2.appendChild(generoPelicula);
    card2.appendChild(idioma);
    card2.appendChild(clasificacion);
    card2.appendChild(director);
    card2.appendChild(reparto);
    card2.appendChild(sinopsis);
    
   columna2.appendChild(card2);
   fila2.appendChild(columna2);

});
 */