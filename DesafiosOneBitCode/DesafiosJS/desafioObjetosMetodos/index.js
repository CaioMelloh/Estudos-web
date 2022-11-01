

/*
!!!!!!!!!!!!!!!!!!
Possível melhoria, como colocar um atributo que seja um objeto painel de controle
seria uma boa talvez
!!!!!!!!!!!!!!!!!!!
*/

/*objeto nave*/

let nave = {
    velocidade: 0,
    nome: " ",
    tipo: " ",
    velocidadeMax: 0,
    acelerar: function(){
        let quantidade = prompt("O quanto você gostaria de acelerar? Velocidade atual : "+this.velocidade);
        quantidade = Number(quantidade);
        controlPanel.verify(this.velocidade, this.velocidadeMax, quantidade);
      
        
    },

    parar: function(){
        alert("O nome da nave é "+nave.nome+"\nO tipo da nave é: "+nave.tipo+"\nSua velocidade atual era de "+nave.velocidade+"m/s");
    }
}

/*objeto painel de controle*/

let controlPanel = {
    verify:
    function verificarVelocidade(velocidade, velocidadeMax, quantidade){
        if(velocidade + quantidade >= velocidadeMax ){
            alert("Velocidade máxima atingida!");
            nave.velocidade = 60;                 /*testar o loop de aceleração e retardo da próxima vez*/
        }
        else{
            nave.velocidade+= quantidade;
        }
    },
    action: function(){
        let question;
        do{
            question = prompt("Você gostaria de acelerar ou parar? A / P");
            if(question == 'A' || question == 'a'){
                nave.acelerar();
            }
            else if(question == 'P' || question == 'p'){
                nave.parar();
            }
            else{console.log("Opção inválida!");}
        }while(question != 'P');

    }

}


/*objeto cadastro*/

let cadastro = 
{
    cadastrar: function(){
        nave.nome = prompt("Digite o nome da nave: ");
        nave.tipo = prompt("Digite o tipo da nave: ");
        nave.velocidadeMax = prompt("Digite qual será a velocidade máxima permitida: ");
        controlPanel.action();
        
    }
}

cadastro.cadastrar();

