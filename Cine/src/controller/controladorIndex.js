let peliculas=[
    {
        nombre:"Avatar",
        genero:"Ciencia ficción",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemiercolesjjg.appspot.com/o/avatar.png?alt=media&token=4775b8fa-5e9c-42bb-9ae3-f0f0bf010f0d",
        sinopsis:"loremjasjsadjsajsdajsajsdajsda",
        clasificacion:"+18",
        idioma:"En subtitulado"
    },
    {
        nombre:"La Bestia",
        genero:"Suspenso",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemiercolesjjg.appspot.com/o/la%20bestia.jpg?alt=media&token=b46a53b9-3af7-4fc2-9c7e-966ec628f719",
        sinopsis:"loremjasjsadjsajsdajsajsdajsda",
        clasificacion:"+18",
        idioma:"En subtitulado"
    }
   
];
let fila = document.getElementById("fila");

//RECORRIENDO UN ARREGLO EN JS
peliculas.forEach(function(pelicula){
    //console.log(pelicula)
    console.log(pelicula.nombre)
    console.log(pelicula.genero)
    console.log(pelicula.duracion)
    console.log(pelicula.poster)
    console.log(pelicula.sinopsis)
    console.log(pelicula.clasificacion)
    console.log(pelicula.idioma)
    //TRAVERSING (CREAR ETIQUETAS DE HTML DESDE JS)
   //1. CREAMOS UNA COLUMNA PARA CADA PELICULA
   let columna = document.createElement("div");
   columna.classList.add("col");
   //2.CREAMOS UNA TARJETA PARA CADA PELICULA
   let card = document.createElement("div");
   card.classList.add("card", "h-100");
  //3. CREAMOS UNA FOTO PARA CADA PELICULA
  let poster = document.createElement("img");
  poster.classList.add("card-img-top");
  poster.src = pelicula.poster;
  //4. AGREGAMOS LOS NOMBRES A LAS PELICULAS
  let nombrePelicula = document.createElement("h3");
  nombrePelicula.classList.add("card-title","text-center");
  nombrePelicula.textContent = pelicula.nombre;
  //5. AGREGAMOS EL GENERO DE LAS PELICULAS
  let generoPelicula = document.createElement("h4");
  generoPelicula.classList.add("card-text");
  generoPelicula.textContent = "Genero: " + pelicula.genero;
  //6. AGREGAMOS EL IDIOMA
  let idiomaPelicula = document.createElement("h5");
  idiomaPelicula.classList.add("fw-bold");
  idiomaPelicula.textContent = ("card-text");

    //PADRES E HIJOS
    card.appendChild(poster);
    card.appendChild(nombrePelicula);
    card.appendChild(generoPelicula);
   columna.appendChild(card);
   fila.appendChild(columna);



});

//DETECTANDO SELECCIÓN DE UNA PELICULA
fila.addEventListener('click',function(){
    alert("esta seleccionando una pelicula");
});
