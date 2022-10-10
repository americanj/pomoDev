


/*const abaPomodoro = document.querySelector('[data-btnPomodoro]');
const caixaPomodoro = document.querySelector('[data-caixaPomodoro]');*/
abaPomodoro.classList.add('aplicarBoldFont');
caixaPomodoro.classList.remove('ocultar');
btnPararPomodoro.style.display = 'none';


abaPomodoro.addEventListener("click", function () {
    console.log("dnv");

    abaPomodoro.classList.add('aplicarBoldFont');
    

    containerPomodoro.classList.add('modal__borda-tema-padrao');
    containerPomodoro.classList.add('modal__principal--semBackground');
    telaMinutosPomodoro.classList.remove('modal__cronometro--minuto-vermelho');

    caixaPomodoro.classList.remove('ocultar');
    caixaPomodoro.classList.add('bordaPomodoro');

    abaDescansoCurto.classList.remove('aplicarBoldFont');
    caixaDescansoCurto.classList.add('ocultar');


})


let segundos = 60;
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


    //Fim do pomodoro    
    if (minutos == 0 && segundos == 1) {
        finalizarPomodoro();
        console.log("gg");
        clearInterval(intervalID);
    }

}



btnIniciarPomodoro.addEventListener('click', () => {

    telaMinutosPomodoro.classList.add('modal__cronometro--minuto-vermelho');
    containerPomodoro.classList.add('modal__borda--tema-vermlho');
    console.log("Iniciar");

    intervalID = setInterval(function () {
        pomoTime25()
    }, 1);


    btnPararPomodoro.style.display = "inline";
    btnIniciarPomodoro.style.display = "none";

})

btnPararPomodoro.addEventListener('click', () => {

    console.log("Parar");
    clearInterval(intervalID);

    btnIniciarPomodoro.style.display = "inline";
    btnPararPomodoro.style.display = "none"
})





function mostraMinutosTela() {
    telaMinutosPomodoro.innerHTML = minutos;
}

function mostraSegundosTela() {
    telaSegundosPomodoro.innerHTML = segundos
}

function mostraMinutosTelaComZero() {
    telaMinutosPomodoro.innerHTML = "0" + minutos
}

function mostraSegundosTelaComZero() {
    telaSegundosPomodoro.innerHTML = "0" + segundos
}

function finalizarPomodoro() {
    abaPomodoro.classList.remove('aplicarBoldFont');
    caixaPomodoro.classList.add('ocultar');

    abaDescansoCurto.classList.add('aplicarBoldFont');
    caixaDescansoCurto.classList.remove('ocultar');
}


