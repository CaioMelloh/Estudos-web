let dobraEspacial = 0;

let rocketName = prompt("Qual o nome da sua nave?: ");

let question = prompt("Deseja entrar na dobra espacial?\n1-Sim\n2-Não");

while(question != "2"){
    dobraEspacial++;
    question = prompt("Deseja entrar na dobra espacial novamente?\n1-Sim\n2-Não");
}

console.log("Sistema encerrado, obrigado por testar!\n Nome da nave: "+rocketName+"\nNúmero de dobras:"+dobraEspacial)