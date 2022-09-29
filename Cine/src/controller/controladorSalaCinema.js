

//import {asientos} from "../helper/baseDatosSillas.js";
import{pintarSillas} from "../helper/PintarSillas.js";
let cinema = document.getElementById("salacinema");

let  asientos = [
    [{id: "A1",estado: 2},{id: "B1",estado: 2},{id: "C1",estado: 0},{id: "D1",estado: 0}],
    [{id: "A2",estado: 1},{id: "B2",estado: 0},{id: "C2",estado: 0},{id: "D2",estado: 0}],
    [{id: "A3",estado: 0},{id: "B3",estado: 0},{id: "C3",estado: 0},{id: "D3",estado: 0}]
];

pintarSillas(asientos,cinema);

