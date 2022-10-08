




const telaSegundos = document.querySelector('#segundo');

const telaMinutos = document.querySelector('#minuto');

const telaDivisor = document.querySelector('#divisor');


const bntIniciar = document.querySelector('.start');
const bntStop = document.querySelector('.stop');

bntStop.style.display = "none";
const bntNext = document.querySelector('.next');


let segundos = 60;
let minutos = 24;

function pomoTime25() {

    segundos--;
    mostraMinutosTela();

    if (segundos == 0) {
        minutos--;
        mostraMinutosTela();
        segundos = 59;
    }


    if (segundos > 9) {
        mostraSegundosTela()

    } else {
        mostraSegundosTelaComZero();
    }


    //minutos
    if (minutos < 10)
        mostraMinutosTelaComZero();


    //parar    
    if (minutos == 0 && segundos == 1) {
        console.log("gg");
        clearInterval(intervalID);
    }

}

var intervalID;

bntIniciar.addEventListener('click', (evento) => {

    console.log("Iniciar");

    intervalID = setInterval(function () {
        pomoTime25()
    }, 10);


    bntStop.style.display = "inline";
    bntIniciar.style.display = "none";

})

bntStop.addEventListener('click', () => {

    console.log("Parar");
    clearInterval(intervalID);

    bntIniciar.style.display = "inline";
    bntStop.style.display = "none"
})





function mostraMinutosTela() {
    telaMinutos.innerHTML = minutos;
}

function mostraSegundosTela() {
    telaSegundos.innerHTML = segundos
}

function mostraMinutosTelaComZero() {
    telaMinutos.innerHTML = "0" + minutos
}

function mostraSegundosTelaComZero() {
    telaSegundos.innerHTML = "0" + segundos
}
