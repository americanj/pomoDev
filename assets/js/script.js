




const telaSegundos = document.querySelector('#segundo');

const telaMinutos = document.querySelector('#minuto');

const telaDivisor = document.querySelector('#divisor');


let segundos = 0;
let minutos = 0;


function segundo(){
    segundos++

    
    if(segundos == 60){
        minutos++
        telaMinutos.innerHTML = minutos;
        segundos = 0;
    }

    if(segundos <= 9){
        telaSegundos.innerHTML = "0" + segundos
    } else if (segundos > 9){
        telaSegundos.innerHTML = segundos
    }

    

    
}

setInterval(function(){
    segundo()
}, 1000)