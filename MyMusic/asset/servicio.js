//Receta para consumir APIS con JS puro

//URI del Servicio
const URI = "https://api.spotify.com/v1/artists/6lYSDSFhJyUV6CtNix2fBA/top-tracks?market=US";
//Hay datos de control en la petición?
const TOKEN = "Bearer BQBfviCTBL6A1yBJNnJG9kUZMMdte0MAeTCte4cCgZ7iHWmnZ6sCMzJ7nHQq-Ix1EnDmiclG3nAdkIiYRZtn6F8QFSR3LLkuIXq3MwaFkCgY4N9uAnMHaFcLjTp4tU9jkidSgdBQvVPyH1Z6BWj1-FQpmR8JQB4_5pachLwfyqR3"; 
//Configurar la petición
//La petición es un objeto
const PETICION = {
    method: "GET",
    headers: {
        Authorization:TOKEN   
    }
};
//Utilizar una promesa llamada  fetch
fetch(URI,PETICION)

.then(function(respuestas){
    return respuestas.json();
})
.then(function(respuestas){
    console.log(respuestas);
})
.catch(function(respuestas){
    console.log(respuestas);
})
