class spaceship {
    engate(){
        let nome = prompt("Digite um nome para nave: ");
        let tripulantes = Number(prompt("Qual a quantidade de tripulantes?"));
        this.nome = nome;
        this.tripulantes = tripulantes;
    }
}

function menu(){
    let resp = prompt("Em que posso ajudá-lo?"
    +"\n1-Realizar engate\n2-Imprimir Naves"
    +"\n3-Sair do programa");
    switch(resp){
        case "1":
            let nave = new spaceship();
            nave.engate();
            estacaoEspacial.push(nave);
            break;
    }
}

let estacaoEspacial = [];

menu();