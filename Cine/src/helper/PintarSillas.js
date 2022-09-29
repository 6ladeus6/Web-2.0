export function pintarSillas(asientos){
    let cinema = document.getElementById("salacinema");

    //Recorrer los asientos y aplicar traversing
    
    asientos.forEach(function(hilera){
    
        let fila = document.createElement("div");
        fila.classList.add("row");
    
        hilera.forEach(function(asiento){
            
            let columna = document.createElement("div");
            columna.classList.add("col-2");
    
            let fotoSilla = document.createElement("img");
            fotoSilla.classList.add("img-fluid","w-100");
            fotoSilla.setAttribute("id",asiento.id);
    
            if(asiento.estado == 0){
                fotoSilla.src="https://firebasestorage.googleapis.com/v0/b/cineal.appspot.com/o/chair.png?alt=media&token=0deeb005-822b-4888-8672-c957ff41f5d4";
                
            }else if(asiento.estado == 2){
                fotoSilla.src="https://firebasestorage.googleapis.com/v0/b/cineal.appspot.com/o/chairocupada.png?alt=media&token=38d05672-6375-40cd-b970-22e6c2f26b92";
            }else{
                fotoSilla.src="https://firebasestorage.googleapis.com/v0/b/cineal.appspot.com/o/chairlibre.png?alt=media&token=dfe372fa-a924-4a5a-bc7c-b4ec9b46c2c4";
            }
            
    
    
        //Padres e Hijos
        columna.appendChild(fotoSilla);
        fila.appendChild(columna);
        })
    
        cinema.appendChild(fila);
    
    })
}