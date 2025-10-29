"use strict";

//INIZIO CONNESSIONE

let ws = new WebSocket("ws://10.1.0.52:8090/chat25/5i2");
ws.onmessage = gestoreRicezione; 
console.log("ho iniziato");

let nome;

//MESSAGGI CHE MANDA IL SERVER

function gestoreRicezione(messaggioRicevuto) {

    console.log("il server risponde: " + messaggioRicevuto.data);

    if (messaggioRicevuto.data == "R|no") {
        chiudiLaConnessione();
    }

    if (messaggioRicevuto.data == "R|ok") {
        cambioSchermata();
    }

    let str = `${messaggioRicevuto.data}`;

    let host;

    let prova = "";

    if (str.startsWith("U")) {

        host = str.split("|");

        for (let i = 1; i<host.length; i++) {

            prova = prova +  "<br>" + host[i];

            document.getElementById("visualizzaUtenti").innerHTML = prova;

        }

    }
}

function componiMesLogin(){
    nome = document.getElementById("nome").value;
    let password = document.getElementById("password").value;
    let messaggioDiLogin = "A"+"|"+nome+"|"+password;
    ws.send( messaggioDiLogin );
    console.log("invio:"+messaggioDiLogin);

}

function chiudiLaConnessione(){

    //document.getElementById("ricevuta").textContent = "connesione chiusa"
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

// funzione multiuso per ricaricare la pagina

function ricaricaLaPagina() {
    location.reload();
}

function messaggioEffettivo() {

    // crea la data

    const data = new Date();
    console.log(data);

    // crostruiamo la data con i relativi controlli

    let dataIntera = "" + data.getFullYear() + "-";

    if (data.getMonth() < 9) {
        dataIntera = dataIntera + "0" + (1+data.getMonth()) + "-";
    } else {
        dataIntera = dataIntera + (1+data.getMonth()) + "-";
    }

    if (data.getDate() < 10) {
        dataIntera = dataIntera + "0" + data.getDate() + "-";
    } else {
        dataIntera = dataIntera + data.getDate() + "-";
    }

    dataIntera = dataIntera + "T";

    if (data.getHours() < 10) {
        dataIntera = dataIntera + "0" + data.getHours() + ":";
    } else {
        dataIntera = dataIntera + data.getHours() + ":";
    }

    if (data.getMinutes < 10) {
        dataIntera = dataIntera + "0" + data.getMinutes() + ":";
    } else {
        dataIntera = dataIntera + data.getMinutes() + ":";
    }

    if (data.getSeconds() < 10) {
        dataIntera = dataIntera + "0" + data.getSeconds();
    } else {
        dataIntera = dataIntera + data.getSeconds();
    }

    console.log("data = " + dataIntera);

    let ts = dataIntera;
    let paese = "IT";
    let mt = "text/plain";
    let testo = document.getElementById("messaggioEffettivo").value;
    let messaggioEffettivo = "M"+"|"+nome+"|"+ts+"|"+paese+"|"+mt+"|"+testo;

    console.log(messaggioEffettivo);

    ws.send(messaggioEffettivo);

}