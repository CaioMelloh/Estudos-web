
/* tipos string nas respostas, converter para number*/

let nave = {
    velocidade: 0,
    nome: " ",
    tipo: " ",
    velocidadeMax: 0,
    acelerar: function(){
        let quantidade = prompt("O quanto você gostaria de acelerar? Velocidade atual : "+this.velocidade);
        quantidade = Number(quantidade);
        verificarVelocidade(this.velocidade, this.velocidadeMax, quantidade);
      
        
    },
    parar: function(){
        alert("O nome da nave é "+this.nome+"\nO tipo da nave é: "+this.tipo+"\nSua velocidade atual era de "+this.velocidade+"m/s");
    },
    
    action: function(){
        let question;
        do{
            question = prompt("Você gostaria de acelerar ou parar? A / P");
            if(question == 'A' || question == 'a'){
                this.acelerar();
            }
            else if(question == 'P' || question == 'p'){
                this.parar();
            }
            else{console.log("Opção inválida!");}
        }while(question != 'P');

    },
    cadastro: function(){
        this.nome = prompt("Digite o nome da nave: ");
        this.tipo = prompt("Digite o tipo da nave: ");
        this.velocidadeMax = prompt("Digite qual será a velocidade máxima permitida: ");
        this.action();
        /*ação*/
    }


}

/*OK*/
function verificarVelocidade(velocidade, velocidadeMax, quantidade){
    if(velocidade + quantidade >= velocidadeMax ){
        alert("Velocidade máxima atingida!");
        nave.velocidade = 60;                 /*testar o loop de aceleração e retardo da próxima vez*/
    }
    else{
        nave.velocidade+= quantidade;
    }
}

nave.cadastro();
