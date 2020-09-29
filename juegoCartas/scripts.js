/**
 * DECLARACION DE VARIABLES
 */
let palos = new Array("Oros","Bastos","Copas","Espadas"); 
let cartas = new Array(11);
let puntoJugador = 0;
let puntoBanca = 0;
let puntoActual = 0;
let cartaAux;
let block = false;

for(let i = 1;i<=10;i++){
    cartas[i] = palos;
}

/**
 * FUNCION JUGADOR
 */

 let sacarCarta = document.getElementById("elegirCarta");

    
 sacarCarta.addEventListener("click",()=>{

    if(block == false){
        let numeroCarta = parseInt((Math.random()*10)+1);
        let palo = parseInt(Math.random()*4);
    
        let carta = numeroCarta + cartas[numeroCarta][palo];
    

        while(cartaAux == carta){

            numeroCarta = parseInt((Math.random()*10)+1);
            palo = parseInt(Math.random()*4);
    
            carta = numeroCarta + cartas[numeroCarta][palo];
        }


        cartaAux = carta;

        mostrarCarta(carta);

        if(numeroCarta <=7){
            puntoActual = puntoActual + numeroCarta;
        }else{
            puntoActual =puntoActual + 0.5; 
            }   

        puntoJugador =  puntoActual;


        document.getElementById("puntosJugador").value = puntoJugador;
        let cartaAdd = document.createElement("img");
        cartaAdd.src="img/"+carta+".jpg";
        document.getElementById("almacenJugador").appendChild(cartaAdd);

        if(puntoJugador > 7.5){
            bloquear();
            document.getElementById("veredicto").value = "HAS PERDIDO";
        }else if(puntoJugador == 7.5){
            puntoActual = 0;
            banca();
        }
    }
    

 });

 /**
  * FUNCION PLANTARSE
  */
let mePlanto = document.getElementById("plantar");

mePlanto.addEventListener("click",() =>{
    puntoActual = 0;
    bloquear();
    banca();
})
/**
 * FUNCION JUEGA LA BANCA
 */
const banca = () =>{
    
    let numeroCarta = parseInt((Math.random()*10)+1);
    let palo = parseInt(Math.random()*4);
    
    let carta = numeroCarta + cartas[numeroCarta][palo];
    

    while(cartaAux == carta){

         numeroCarta = parseInt((Math.random()*10)+1);
         palo = parseInt(Math.random()*4);
    
         carta = numeroCarta + cartas[numeroCarta][palo];
    }


    cartaAux = carta;

    mostrarCartaBanca(carta);

    if(numeroCarta <=7){
        puntoActual = puntoActual + numeroCarta;
    }else{
        puntoActual = puntoActual + 0.5; 
    }

    puntoBanca =  puntoActual;


    document.getElementById("puntosBanca").value = puntoBanca;
    let cartaAdd = document.createElement("img");
    cartaAdd.src="img/"+carta+".jpg";
    document.getElementById("almacenBanca").appendChild(cartaAdd);

    if(puntoActual<=puntoJugador){
        setTimeout("banca()",1000);
    }
    if(puntoBanca > 7.5){
        document.getElementById("veredicto").value = "HAS GANADO";
    }else if(puntoBanca == 7.5 && puntoJugador==7.5){
        document.getElementById("veredicto").value = "HAS PERDIDO";
    }else if(puntoBanca == 7.5){
        document.getElementById("veredicto").value = "HAS PERDIDO";

    }else{
        ganar();
    }
}
/**
 * FUNCION SACAR CARTA
 * @param {*} card 
 */
 const mostrarCarta = (card) =>{

    document.getElementById("mano").src ="img/"+card+".jpg";
    document.getElementById("mano").style.visibility="visible"
 }
 const mostrarCartaBanca = (card) =>{

    document.getElementById("manoBanca").src ="img/"+card+".jpg";
    document.getElementById("manoBanca").style.visibility="visible"
 }

 /**
  * FUNCION VEREDICTO
  */
const ganar = () =>{
    if(puntoBanca>puntoJugador){
        document.getElementById("veredicto").value = "HAS PERDIDO";

    }
}

const bloquear = ()=>{
    block = true;

    }



/**
 * FUNCION REINICIAR
 */
let reinicio = document.getElementById("reiniciar");

reinicio.addEventListener("click", ()=>{
    location.reload();
})
  
 


