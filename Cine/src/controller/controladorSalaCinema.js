

//import {asientos} from "../helper/baseDatosSillas.js";
import{pintarSillas} from "../helper/PintarSillas.js";
let cinema = document.getElementById("salacinema");

let  asientos = [
    [{id: "A1",estado: 0},{id: "B1",estado: 0},{id: "C1",estado: 0},{id: "D1",estado: 0}],
    [{id: "A2",estado: 0},{id: "B2",estado: 0},{id: "C2",estado: 0},{id: "D2",estado: 0}],
    [{id: "A3",estado: 0},{id: "B3",estado: 0},{id: "C3",estado: 0},{id: "D3",estado: 0}]
];

pintarSillas(asientos,cinema);
let costoEntrada = 12000;


//PINTAR DESDE JS MI SALA DE CINE:

let botonreserva = document.getElementById("botonreserva")
let factura = document.getElementById("factura")
//Recorrer los asientos y aplicar traversing (for anidado para dibujar el html)


botonreserva.addEventListener("click", function (event) {
    factura.textContent=""
    //Contador para sumar las boletas
    let contador = 0;
    // for anidado para recorrer la estructura
    asientos.forEach(function (hilera) {
        hilera.forEach(function (asiento) {
            //Dentro del for pregunto por los asientos seleccionados
            if (asiento.estado == 1) {

                contador += costoEntrada
                let linea = document.createElement("div")
                linea.textContent = "Numero de silla: " + asiento.id + " Valor:  $ " + costoEntrada
                // imprime la linea idividual en la factura
                factura.appendChild(linea)

                //Poner asiento en estado Reservado dentro del vector
                asiento.estado=2
                 //Poner el asiento de color rojo en el html
                let itemSeleccionado = document.getElementById(asiento.id)
                console.log(itemSeleccionado.src)
                itemSeleccionado.src="https://firebasestorage.googleapis.com/v0/b/cineal.appspot.com/o/chairocupada.png?alt=media&token=38d05672-6375-40cd-b970-22e6c2f26b92"
            }

        })
    })
    
    let total = document.createElement("h5")
    total.textContent= "El valor a pagar por las entradas es : $ " + contador
    //Imp totales despues de recorrer el vector
    factura.appendChild(total)

    localStorage.setItem("vectorPersistido",JSON.stringify(asientos)) 


})


//Evento de click en la sala de cine
cinema.addEventListener("click",function(evento){
    if(evento.target.tagName == "IMG"){
        let idAsientoSeleccionado = evento.target.id;

        asientos.forEach(function(hilera){
          
            hilera.forEach(function(asiento){
                if(asiento.id == idAsientoSeleccionado){
                   //Encontrando el asiento donde el usuario se quiere sentar

                   if(asiento.estado == 0){
                        asiento.estado = 1;
                        evento.target.src="https://firebasestorage.googleapis.com/v0/b/cineal.appspot.com/o/chairlibre.png?alt=media&token=dfe372fa-a924-4a5a-bc7c-b4ec9b46c2c4"
                        
                   }else if(asiento.estado == 1){
                        asiento.estado = 0;
                        evento.target.src="https://firebasestorage.googleapis.com/v0/b/cineal.appspot.com/o/chair.png?alt=media&token=0deeb005-822b-4888-8672-c957ff41f5d4"
                   }

                }

            })

        })
 
    }
})






