//Consumir Datos de API Spotify

//URI = url + ep
const URI = "https://api.spotify.com/v1/artists/0jSC8NDkMj9BZmoySo15GS/top-tracks?market=US";

//Token
const TOKEN = "Bearer BQB9ZNLxcAtpQn6Ft6Nf04SQ56E1UphhlQI-0aQU-KH8ArikmbPRr6e5mdObSjzMjoqZ9zOV15wWLyMJhNEGZ3uq4XlYg9RKkke81GrJLpEPJjxEuEzdKPAjK3Ll-B4DZeqOk9LEbi7VWpP6aivNTM6KJNYMJzRQqLZIjiKHEsBE";

//Petición

const PETICION ={
    method: "GET",
    headers: {Authorization:TOKEN},
};

let fila = document.getElementById("fila");

//usamos la promesa Fetch
fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
let canciones = respuesta.tracks
canciones.forEach(function(cancion){
    console.log(cancion.name)
    console.log(cancion.preview_url)

let columna = document.createElement("div")
columna.classList.add("col")

let tarjeta = document.createElement("div")
tarjeta.classList.add("card","h-100")

let audio = document.createElement("audio")
audio.setAttribute("controls","controls")
audio.src = cancion.preview_url

let nombre = document.createElement("h3")
nombre.classList.add("text-center")
nombre.textContent = cancion.name

tarjeta.appendChild(nombre)
tarjeta.appendChild(audio)
columna.appendChild(tarjeta)
fila.appendChild(columna)


})

})
.catch(function(error){
    console.error(error)
})
