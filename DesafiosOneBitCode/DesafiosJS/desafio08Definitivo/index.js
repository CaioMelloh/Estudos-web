let velocity = 150;
let reduce = 20;

// função comum
function desaceleration(printer){
    let velocidade = velocity;
    let i = 1;
    while(velocidade > 0){

        printer(velocidade, i);

        velocidade-=20;
        i++;
    }
    console.log("A nave está parada e as comportas podem ser abertas!");
}

//função callback
    let imprimir = function(velocidade, numero){
        console.log("Estamos desacelerando 20km/s\n Sua velocidade atual é de "+velocidade+"\nnumero de vezes que reduzimos: "+numero);
    }

desaceleration(imprimir);