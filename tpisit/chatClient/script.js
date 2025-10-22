"use strict";

//INIZIO CONNESSIONE

let ws = new WebSocket("ws://10.1.0.52:8090/chat25/5i2");
ws.onmessage = gestoreRicezione;
console.log("ho iniziato");

//MESSAGGI CHE MANDA IL SERVER

function gestoreRicezione(messaggioRicevuto) {

    console.log(messaggioRicevuto.data);

    if (messaggioRicevuto.data == "R|no") {
        chiudiLaConnessione();
    }

    if (messaggioRicevuto.data == "R|ok") {
        cambioSchermata();
    }
}

function componiMesLogin(){

    let nome = document.getElementById("nome").value;
    let password = document.getElementById("password").value;
    let messaggioDiLogin = "A"+"|"+nome+"|"+password;
    ws.send( messaggioDiLogin );
    console.log("invio:"+messaggioDiLogin);
}

function chiudiLaConnessione(){

    document.getElementById("ricevuta").textContent = "connesione chiusa"
    console.log("chiuso");
    ws.close();

    schermataLoginFallito();
}

function cambioSchermata() {

    let padre = document.getElementById("body")
    let interfacciaLogin = document.getElementById("schermata_login"); 

    padre.removeChild(interfacciaLogin);

    document.getElementById("secondaSchermata").style.display = "inline-block";

}

function schermataLoginFallito() {
    let padre = document.getElementById("body")
    let interfacciaLogin = document.getElementById("schermata_login"); 

    padre.removeChild(interfacciaLogin);
    document.getElementById("schermataLoginFallito").style.display = "inline-block";

}

function ricaricaLaPagina() {
    location.reload();
}

function messaggioEffettivo() {

    const d = new Date();
    let ts = innerHTML = d;
    let paese = "IT";
    let mt = "text/plain";
    let testo = document.getElementById("messaggioEffettivo");
    let messaggioEffettivo = "M"+"|"+nome+"|"+ts+"|"+paese+"|"+mt+"|"+testo;

}
