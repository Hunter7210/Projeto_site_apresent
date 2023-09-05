/* FOI CRIADO AS VARIAVEIS COM AS DEVIDAS IMG's/ CORES DE LED */

const img = document.getElementById('imgsemaforoVERMELHO');
const img2 = document.getElementById('imgsemaforoAMARELO');
const img3 = document.getElementById('imgsemaforoVERDE');

const img4 = document.getElementById('imgsemaforoVERMELHO2');
const img5 = document.getElementById('imgsemaforoAMARELO2');
const img6 = document.getElementById('imgsemaforoVERDE2');

/* VARIAVEIS PARA DEFINIR TEMPO, PARA LOOPS ETC */
var tempori = 1000;
var timer = 0;


var rodar = false;
var amaon = false;
/* 
FUNÇÃO QUE É CHAMADA NO inicio */
function inicio() {
    ligarVerm()
}

/* CONTAR OS NUMEROS NO VISOR */
function contagemdenum(valor) {

    var tempo = valor;

    setInterval(function () {
        if (tempo > 0) {
            tempo = tempo - 1;
            document.querySelector('.contagem').innerHTML = tempo;
        }
    }, 1000);

    if (rodar == true) {


    }
}


/* TROCAR DE COR */
function ligarVerm() {
    /* DEFININDO O TEMPO DE CADA LED ACESSO */
    tempori = 15000;

    /* FORMATANDO O temporizador PARA APARECER NO VISOR */ 
    contagemdenum(tempori / 1000);

    /* DELIGANDO AS LAMPADAS AMARELAS */
    /* DELIGANDO PRIMEIRO */
    offLights['imgsemaforoAMARELO']()
    offLights['imgsemaforoAMARELO2']()

    /* LIGANDO AS LAMPADAS VERMELHAS */
    /* LIGANDO  DEPOIS */
    onLights['imgsemaforoVERMELHO']()
    onLights['imgsemaforoVERMELHO2']()

    /* FUNÇAO PARA SETAR O TEMPO PARA A OUTRA FUNÇÃO RODAR,  */
    setTimeout(function qq() {
        /* CHAMA A OUTRA FUNÇÃO, UMA CHAMANDO A OUTRA FORMANDO UM LOOP */
        ligarVerd();/* SÓ VAI RODAR SE O TEMPO(tempori) ACABAR */
        console.log("VERMELHO") /* => SO PARA TESTE */
    }, tempori)  /* A VAARIAVEL tempori DEFINE O TEMPO PARA A OUTRA FUNÇÃO SER CHAMADA */

}

function ligarAmar() {
    var amaon = true;

    tempori = 2000;
    offLights['imgsemaforoVERDE']()
    offLights['imgsemaforoVERDE2']()

    onLights['imgsemaforoAMARELO']()
    onLights['imgsemaforoAMARELO2']()

    setTimeout(function qq2() {
        /* CHAMA A OUTRA FUNÇÃO, UMA CHAMANDO A OUTRA FORMANDO UM LOOP */
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
        /* CHAMA A OUTRA FUNÇÃO, UMA CHAMANDO A OUTRA FORMANDO UM LOOP */
        ligarAmar();
        console.log("VERD")
    }, tempori)
}


/* CRIAÇÃO DE UM ARRAY */
/* FOI UTILIZADO PARA ABRANGER UM GRANDE NUMERO DE FUNÇÕES, PARA FACILITAR NA HORA DE CHAMA-LAS NO COD */ 

/* ARRAY PARA LIGAR */
const onLights = {
    'imgsemaforoVERMELHO': () => img.src = './img/icons8-red-circle-96.png',
    'imgsemaforoAMARELO': () => img2.src = './img/icons8-yellow-circle-96.png',
    'imgsemaforoVERDE': () => img3.src = './img/icons8-green-circle-96.png',

    'imgsemaforoVERMELHO2': () => img4.src = './img/icons8-red-circle-96.png',
    'imgsemaforoAMARELO2': () => img5.src = './img/icons8-yellow-circle-96.png',
    'imgsemaforoVERDE2': () => img6.src = './img/icons8-green-circle-96.png',

}
/* ARRAY PARA DESLIGAR */
const offLights = {
    'imgsemaforoVERMELHO': () => img.src = './img/icons8-black-circle-96.png',
    'imgsemaforoAMARELO': () => img2.src = './img/icons8-black-circle-96.png',
    'imgsemaforoVERDE': () => img3.src = './img/icons8-black-circle-96.png',

    'imgsemaforoVERMELHO2': () => img4.src = './img/icons8-black-circle-96.png',
    'imgsemaforoAMARELO2': () => img5.src = './img/icons8-black-circle-96.png',
    'imgsemaforoVERDE2': () => img6.src = './img/icons8-black-circle-96.png',
}

/* Função para colocar dar função ao btn de pedestre */
function btnpedestre() {
    var rodar = true;

    if (amaon == true) {
        ligarVerm()
    }

}
/* 
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

} */
