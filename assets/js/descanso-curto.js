


//btnPararPomodoro.style.display = 'none';





btnPararDescansoCurto.style.display = 'none'



abaDescansoCurto.addEventListener('click', function () {
    console.log("cu");
    abaPomodoro.classList.remove('aplicarBoldFont');
    caixaPomodoro.classList.add('ocultar');

    abaDescansoCurto.classList.add('aplicarBoldFont');
    caixaDescansoCurto.classList.remove('ocultar');
})

iniciarCronometroDescansoCurto();


function iniciarCronometroDescansoCurto() {


    let segundosDescansoCurto = 60;
    let minutosDescansoCurto = 5;

    var intervalDescansoCurto;

    function descansoCurto() {

        segundosDescansoCurto--;
        mostraMinutosTela();

        if (segundosDescansoCurto == 0) {
            minutosDescansoCurto--;
            mostraMinutosTela();
            segundosDescansoCurto = 59;
        }


        if (segundosDescansoCurto > 9) {
            mostraSegundosTela()

        } else {
            mostraSegundosTelaComZero();
        }


        //minutos
        if (minutosDescansoCurto < 10)
            mostraMinutosTelaComZero();


        //Fim do pomodoro    
        if (minutosDescansoCurto == 0 && segundosDescansoCurto == 1) {
            //finalizarPomodoro();
            console.log("gg");
            clearInterval(intervalDescansoCurto);
        }

    }





    btnIniciarDescansoCurto.addEventListener('click', () => {

        //elementoMinuto.classList.add('modal__cronometro--minuto-vermelho');
        //containerPomodoro.classList.add('modal__borda--tema-vermlho');

        telaMinutosDescansoCurto.classList.add('modal__cronometro--minuto-azul');
        containerPomodoro.classList.add('modal__borda--tema-azul');
        console.log("Iniciar descanso curto");

        intervalDescansoCurto = setInterval(function () {
            descansoCurto();
        }, 100);


        btnPararDescansoCurto.style.display = "inline";
        btnIniciarDescansoCurto.style.display = "none";

    })

    btnPararDescansoCurto.addEventListener('click', () => {

        console.log("Parar");
        clearInterval(intervalDescansoCurto);

        btnIniciarDescansoCurto.style.display = "inline";
        btnPararDescansoCurto.style.display = "none"
    })





    function mostraMinutosTela() {
        telaMinutosDescansoCurto.innerHTML = minutosDescansoCurto
    }

    function mostraSegundosTela() {
        telaSegundosDescansoCurto.innerHTML = segundosDescansoCurto
    }

    function mostraMinutosTelaComZero() {
        telaMinutosDescansoCurto.innerHTML = "0" + minutosDescansoCurto

    }

    function mostraSegundosTelaComZero() {
        telaSegundosDescansoCurto.innerHTML = "0" + segundosDescansoCurto
    }

    function finalizarPomodoro() {
        console.log("finaliza pomo");
        abaPomodoro.classList.remove('aplicarBoldFont');
        caixaPomodoro.classList.add('ocultar');

        abaDescansoCurto.classList.add('aplicarBoldFont');
        caixaDescansoCurto.classList.remove('ocultar');
    }

}






