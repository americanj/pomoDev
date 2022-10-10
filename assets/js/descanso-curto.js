


btnPararPomodoro.style.display = 'none';

abaDescansoCurto.addEventListener('click', function () {
    console.log("cu");
    abaPomodoro.classList.remove('aplicarBoldFont');
    caixaPomodoro.classList.add('ocultar');

    abaDescansoCurto.classList.add('aplicarBoldFont');
    caixaDescansoCurto.classList.remove('ocultar');
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

    elementoMinuto.classList.add('modal__cronometro--minuto-vermelho');
    containerPomodoro.classList.add('modal__borda--tema-vermlho');
    console.log("Iniciar");

    intervalID = setInterval(function () {
        pomoTime25()
    }, 10);


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

function finalizarPomodoro() {
    abaPomodoro.classList.remove('aplicarBoldFont');
    caixaPomodoro.classList.add('ocultar');

    abaDescansoCurto.classList.add('aplicarBoldFont');
    caixaDescansoCurto.classList.remove('ocultar');
}





