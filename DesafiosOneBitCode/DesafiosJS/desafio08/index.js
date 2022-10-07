let spaceshipName = prompt("Digite o nome da nave");

let spaceshipVelocity = 0

function choosenMenu(){
    choosen = prompt("Escolha entre as seguintes opções:\n1-Acelerar a nave em 5km/s\n2-Desacelerar em 5km/s\n3-Imprimir dados de bordo\n4-Sair do programa");
    return choosen;
}

function Menu(choosen){

        switch(choosen){
            case "1": 
                acelerar();
                break;
            case "2":
                desacelerar();
                break;
            case "3":
                imprimirDados();
            case "4":
                finishProgram();
        }
    
}

function acelerar(){
    let acelerar = 5;

    spaceshipVelocity+=acelerar;

    return spaceshipVelocity
}

function desacelerar(){

    let desacelerar = 5;

    if(spaceshipVelocity >= 0){

        spaceshipVelocity-= 5;

    }
    

    return spaceshipVelocity;
}

function imprimirDados(){

    console.log("Nome da nave: "+spaceshipName+"\nVelocidade atual: "+spaceshipVelocity);
}

function finishProgram(){
        console.log("programa encerrado!");
    }


