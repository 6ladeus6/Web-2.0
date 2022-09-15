export function pintarPeliculas(peliculas){
    let fila = document.getElementById("fila");
    peliculas.forEach(function(pelicula){
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
        let idioma=document.createElement("h6");
        idioma.classList.add("fw-bold");
        idioma.textContent= "Idioma: " + pelicula.idioma;
    //7. AGREGAMOS LA SINOPSIS
        let sinopsis=document.createElement("p");
        sinopsis.classList.add("card-text");
        sinopsis.textContent=pelicula.sinopsis;
     //8. AGREGAMOS LA CLASIFICACIÓIN
        let clasificacion = document.createElement("h7");
        clasificacion.classList.add("fw-bold");
         clasificacion.textContent = "Clasificación: " + pelicula.clasificacion;
    //9. DIRECTOR
    let director = document.createElement("h8");
        director.classList.add("fw-bold");
         director.textContent = "Director: " + pelicula.director;
    //10. REPARTO
    let reparto = document.createElement("h9");
        reparto.classList.add("fw-bold");
         reparto.textContent = "Reparto: " + pelicula.reparto;
        //PADRES E HIJOS
        card.appendChild(poster);
        card.appendChild(nombrePelicula);
        card.appendChild(generoPelicula);
        card.appendChild(idioma);
        card.appendChild(clasificacion);
        card.appendChild(director);
        card.appendChild(reparto);
        card.appendChild(sinopsis); 
       columna.appendChild(card);
       fila.appendChild(columna);
    });
}