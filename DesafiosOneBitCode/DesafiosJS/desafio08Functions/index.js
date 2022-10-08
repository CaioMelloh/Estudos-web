
function exibirMenu(){
    let escolha
    do
    {
        escolha = prompt("Qual ação você gostaria de realizar?\n1-Acelerar 5km/s\n2-Desacelerar 5km/s\n3-Imprimir dados de bordo\n4-Sair do programa")
        
        switch(escolha){
            case "1":
                acelerar()
                break;
            case "2":
                desacelerar()
                break;
            case "3":
                imprimir()
                break
            case "4":
                sairPrograma()
                break;
            default:
                alert("Mensagem não conhecida, digite o menu novamente!")
        }
    }while(escolha != "4")
    
}

function acelerar(){
    velocity+= 5

    console.log("Acelerando 5 km/s")
    
}

function desacelerar(){
    if(velocity > 0){
        velocity-=5
    }
    console.log("Desacelerando 5 km/s")
    
}

function imprimir(){

    alert("Nome da nave: "+spaceshipName+"\nVelocidade Atual: "+velocity)

}

function sairPrograma(){

    alert("Programa encerrado!")

}


let spaceshipName = prompt("QUal o nome da sua nave?")

let velocity = 0

exibirMenu();

