




const telaSegundos = document.querySelector('#segundo');

const telaMinutos = document.querySelector('#minuto');

const telaDivisor = document.querySelector('#divisor');


const bntIniciar = document.querySelector('.start');
const bntStop = document.querySelector('.stop');

bntStop.style.display = "none";
const bntNext = document.querySelector('.next');


let segundos = 60;
let minutos = 24;

/*
function segundo() {
    segundos--

    if (segundos == 60) {
        minutos--
        telaMinutos.innerHTML = minutos;
        segundos = 0;
    }

    if (segundos <= 9)
        telaSegundos.innerHTML = "0" + segundos
    else if (segundos > 9)
        telaSegundos.innerHTML = segundos
}*/

function segundo() {
    segundos--
    telaMinutos.innerHTML = minutos;

    if (segundos == 0) {
        minutos--

        telaMinutos.innerHTML = minutos;
        segundos = 59;
    }

    //segundos
    if (segundos <= 9) {
        telaSegundos.innerHTML = "0" + segundos

    } else if (segundos > 9)
        telaSegundos.innerHTML = segundos

    //minutos
    if (minutos <= 9)
        telaMinutos.innerHTML = "0" + minutos
}

var intervalID;

bntIniciar.addEventListener('click', (evento) => {

    console.log("Iniciar");

    intervalID = setInterval(function () {
        segundo();
    }, 1000);


    bntStop.style.display = "inline";
    bntIniciar.style.display = "none";

})

bntStop.addEventListener('click', () => {
  
    console.log("Parar");
    clearInterval(intervalID);
    
    bntIniciar.style.display = "inline";
    bntStop.style.display = "none"
})





