const img = document.getElementById('imgsemaforoVERMELHO');
const img2 = document.getElementById('imgsemaforoAMARELO');
const img3 = document.getElementById('imgsemaforoVERDE');

const img4 = document.getElementById('imgsemaforoVERMELHO2');
const img5 = document.getElementById('imgsemaforoAMARELO2');
const img6 = document.getElementById('imgsemaforoVERDE2');


var tempori = 1000;
var timer = 0;

var funciona = true;

function inicio() {
    ligarVerm()
}

/* CONTAR OS NUMEROS */

function contagemdenum(valor) {

    var tempo = valor;

    setInterval(function () {
        if (tempo > 0) {
            tempo = tempo - 1;
            document.querySelector('.contagem').innerHTML = tempo;
        }
    }, 1000);
}


/* TROCAR DE COR */

function ligarVerm() {
    tempori = 15000;
    contagemdenum(tempori / 1000);

    offLights['imgsemaforoAMARELO']()
    offLights['imgsemaforoAMARELO2']()

    onLights['imgsemaforoVERMELHO']()
    onLights['imgsemaforoVERMELHO2']()


    setTimeout(function qq() {
        ligarVerd();
        console.log("VERMELHO")
    }, tempori)

}

function ligarAmar() {
    tempori = 2000;
    offLights['imgsemaforoVERDE']()
    offLights['imgsemaforoVERDE2']()

    onLights['imgsemaforoAMARELO']()
    onLights['imgsemaforoAMARELO2']()

    setTimeout(function qq2() {
        ligarVerm();
        console.log("AMAR")
    }, tempori)
}

function ligarVerd() {
    tempori = 10000;
    contagemdenum(tempori / 1000);

    offLights['imgsemaforoVERMELHO']()
    offLights['imgsemaforoVERMELHO2']()

    onLights['imgsemaforoVERDE']();
    onLights['imgsemaforoVERDE2']();


    setTimeout(function qq3() {
        ligarAmar();
        console.log("VERD")
    }, tempori)
}


const onLights = {
    'imgsemaforoVERMELHO': () => img.src = '/img/icons8-red-circle-96.png',
    'imgsemaforoAMARELO': () => img2.src = '/img/icons8-yellow-circle-96.png',
    'imgsemaforoVERDE': () => img3.src = '/img/icons8-green-circle-96.png',

    'imgsemaforoVERMELHO2': () => img4.src = '/img/icons8-red-circle-96.png',
    'imgsemaforoAMARELO2': () => img5.src = '/img/icons8-yellow-circle-96.png',
    'imgsemaforoVERDE2': () => img6.src = '/img/icons8-green-circle-96.png',

}
const offLights = {
    'imgsemaforoVERMELHO': () => img.src = '/img/icons8-black-circle-96.png',
    'imgsemaforoAMARELO': () => img2.src = '/img/icons8-black-circle-96.png',
    'imgsemaforoVERDE': () => img3.src = '/img/icons8-black-circle-96.png',

    'imgsemaforoVERMELHO2': () => img4.src = '/img/icons8-black-circle-96.png',
    'imgsemaforoAMARELO2': () => img5.src = '/img/icons8-black-circle-96.png',
    'imgsemaforoVERDE2': () => img6.src = '/img/icons8-black-circle-96.png',

}

function btnpedestre() {
    setTimeout(ligarVermPedes(), 3000)
}

function ligarVermPedes() {
    tempori = 30000;
    contagemdenum(tempori / 1000);

    offLights['imgsemaforoAMARELO']()
    offLights['imgsemaforoAMARELO2']()

    onLights['imgsemaforoVERMELHO']()
    onLights['imgsemaforoVERMELHO2']()


    setTimeout(function qq() {
        ligarVerd();
        console.log("VERMELHO")
    }, tempori)

}
