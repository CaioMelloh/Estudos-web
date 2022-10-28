
/* tipos string nas respostas, converter para number*/

let nave = {
    velocidade: 0,
    nome: " ",
    tipo: " ",
    velocidadeMax: 0,
    acelerar: function(){
        let quantidade = prompt("O quanto você gostaria de acelerar? Velocidade atual : "+this.velocidade);
        if(this.velocidade > 0){
            this.velocidade+= quantidade;
            verificarVelocidade(this.velocidade, this.velocidadeMax);
        }
        this.velocidade = quantidade;
        
        
    },
    parar: function(){
        
    },
    
    action: function(){
        let question = prompt("Você gostaria de acelerar ou parar? A / P");
        if(question == 'A'){
            this.acelerar();
        }
        else if(question == 'P'){
            this.parar();
        }
        else{console.log("Opção inválida!");}

    },
    cadastro: function(){
        this.nome = prompt("Digite o nome da nave: ");
        this.tipo = prompt("Digite o tipo da nave: ");
        this.velocidadeMax = prompt("Digite qual será a velocidade máxima permitida: ");
        this.action();
        /*ação*/
    }


}

function verificarVelocidade(velocidade, velocidadeMax){
    if(velocidade >= velocidadeMax){
        alert("Velocidade máxima atingida!");
    }
}

nave.cadastro();