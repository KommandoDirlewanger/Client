"use strict";

let ws = new WebSocket("ws://10.1.0.52:8090/chat25/5i2");
ws.onmessage = gestoreRicezione;
console.log("ho iniziato");

function gestoreRicezione(messaggioRicevuto) {

    document.getElementById("ricezione").textContent += messaggioRicevuto.data + "\n";

}

function componi(){

    let nome = document.getElementById("nome").value;
    let password = document.getElementById("password").value;
    let messaggioDaInviare = "A"+"|"+nome+"|"+password;
    ws.send( messaggioDaInviare );
    console.log("invio:"+messaggioDaInviare);
}

function chiudiLaConnessione(){
ws.close();
}