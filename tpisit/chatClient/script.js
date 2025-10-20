"use strict";

let ws = new WebSocket("ws://10.1.0.52:8090/chat25/5i2");
ws.onmessage = gestoreRicezione;
console.log("ho iniziato");

function gestoreRicezione(messaggioRicevuto) {

    

    if (messaggioRicevuto.data == "R|no") {

        chiudiLaConnessione();

    }

    if (messaggioRicevuto.data == "R|ok") {

        cambioSchermata();

    }
}

function componi(){

    let nome = document.getElementById("nome").value;
    let password = document.getElementById("password").value;
    let messaggioDaInviare = "A"+"|"+nome+"|"+password;
    ws.send( messaggioDaInviare );
    console.log("invio:"+messaggioDaInviare);
}

function chiudiLaConnessione(){
    document.getElementById("ricevuta").textContent = "connesione chiusa"
console.log("chiuso");
ws.close();
}

function entrato() {
    document.getElementById("schermata_login")
}
function cambioSchermata() {

    let padre = document.getElementById("body")
    let interfacciaLogin = document.getElementById("schermata_login"); 

    padre.removeChild(interfacciaLogin);

}