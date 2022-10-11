let velocity = 150;
let reduce = 20;


function desaceleration(printer){
    let velocidade = velocity;
    let i = 0;
    while(velocidade > 0){
        printer(velocidade, i);
        velocidade-=20;
        i++;
    }
    console.log("A nave está parada e as comportas podem ser abertas!");
}

//função callback não precisa ser colocada com os seus parâmetros dentro de outra função
let imprimir = function(velocidade, i){
    console.log("A velocidade foi reduzida em 20km/s\nVelocidade atual: "+velocidade+"\nNúmero de vezes que desaceleramos:"+i);
}
            // a callback só necessita ser passada como sua variável de fachada
desaceleration(imprimir);