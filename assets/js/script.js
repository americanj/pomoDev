const containerPomodoro = document.querySelector('[data-containerPomodoro]');


const abaPomodoro = document.querySelector('[data-btnPomodoro]');
const caixaPomodoro = document.querySelector('[data-caixaPomodoro]');


const abaDescansoCurto = document.querySelector('[data-btnDescansoCurto]');
const caixaDescansoCurto = document.querySelector('[data-caixaDescansoCurto]');


const btnIniciarPomodoro = document.querySelector('[data-btnIniciarPomodoro]');
const btnPararPomodoro = document.querySelector('[data-btnPararPomodoro]');
//btnPararPomodoro.classList.add('ocultar');

const elementoMinuto = document.querySelector('[data-minuto]');


const telaSegundos = document.querySelector('#segundo');

const telaMinutos = document.querySelector('#minuto');

const telaDivisor = document.querySelector('#divisor');




/*const bntIniciar = document.querySelector('.modal__controles--start');
const bntStop = document.querySelector('.modal__controles--stop');*/

//bntStop.style.display = "none";
/*btnPararPomodoro.style.display = "none";
const bntNext = document.querySelector('.next');*/

/*const abaPomodoro = document.querySelector('[data-btnPomodoro]');


abaPomodoro.addEventListener('click', ()=> {
    abaPomodoro.classList.add('aplicarBoldFont');
});*/


/*let segundos = 60;
let minutos = 24;

var intervalID;

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



bntIniciar.addEventListener('click', () => {

    console.log("Iniciar");

    intervalID = setInterval(function () {
        pomoTime25()
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
}*/

