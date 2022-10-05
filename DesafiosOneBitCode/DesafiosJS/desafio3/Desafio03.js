let nome = prompt("Qual o seu nome?");
let velocidade = 0;
let response;
let velocidadeDesejada = prompt("A que velocidade gostaria de acelerar a nave?: ");
velocidade = velocidadeDesejada;
let confirma = confirm("Tem certeza que é esta velocidade?");
while(confirma != true){
    velocidadeDesejada = prompt("A que velocidade gostaria de acelerar a nave?: ");
    confirma = confirm("Tem certeza que é esta velocidade?");
}
if(velocidadeDesejada <= 0) /*ok*/
    {
        response = "Nave está parada. Considere partir e aumentar a velocidade.";
    }
    else if(velocidadeDesejada < 40) /*ok*/
    {
        response = "Você está devagar, podemos aumentar mais";
    }
    else if(velocidadeDesejada < 80) /*ok*/
    {
        response = "Parece uma boa velocidade para manter";
    }
    else if(velocidadeDesejada<100) /*ok*/  
    {
        response = "Velocidade alta. Considere diminuir.";
    }
    else{
    response = "Velocidade perigosa. Controle automático forçado";
}
console.log(response);
alert(
    "Nome: "+nome+"\nVelocidade em Km/s: "+velocidadeDesejada
);
