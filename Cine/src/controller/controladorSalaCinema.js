

//import {asientos} from "../helper/baseDatosSillas.js";
import{pintarSillas} from "../helper/PintarSillas.js";
let cinema = document.getElementById("salacinema");

let  asientos = [
    [{id: "A1",estado: 0},{id: "B1",estado: 0},{id: "C1",estado: 0},{id: "D1",estado: 0}],
    [{id: "A2",estado: 0},{id: "B2",estado: 0},{id: "C2",estado: 0},{id: "D2",estado: 0}],
    [{id: "A3",estado: 0},{id: "B3",estado: 0},{id: "C3",estado: 0},{id: "D3",estado: 0}]
];

pintarSillas(asientos,cinema);

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