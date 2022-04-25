// entregable


let nombre = prompt(" Ingresa tu nombre")
let apellido = prompt(" Ingresa apellido")


function suTurno(nombre, apellido){

return nombre + apellido; 
    
}

suTurno()


for( let i=1; 1<=5; i+=1){
     let servicio=prompt("Ingresa el servicio: MANOS, ROSTRO, PIES");
    if(servicio=="esc"){
        break;
    }
     alert(" Su turno es "+ i + " Nombre: "+ suTurno() + "para el servicio"+servicio);
} 

let dato= prompt(" Desea agregar algo más?");
while(dato!= "esc"){
    alert("Usted a ingresado" + dato);
    dato=prompt(" Ingresar otro dato? de lo contrario digite esc");
}


