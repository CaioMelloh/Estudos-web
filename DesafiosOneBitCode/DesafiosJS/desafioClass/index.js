class spaceship {
    engate(){
        let nome = prompt("Digite seu nome: ");
        let tripulantes = Number(prompt("Digite a quantidade de tripulantes: "));

        this.nome = nome;
        this.tripulantes = tripulantes;

        this.portas = true;
        this.engatePendente = false;
    }
}

let naves = [];


let resp;

do{
    resp = prompt("Digite a nave que deseja");
    switch(resp){
        case "1":
            let nave = new spaceship();
            nave.engate();
            naves.push(nave);
            break;
        case "2":
            alert(JSON.stringify(naves));
            break;
        case "3":
            console.log("Sistema encerrado!");
            break ;
            
    }
}while(resp != 3);