let rocketName = prompt("Qual o nome da sua nave?: ");

let dobraEspacial = 0;

let question = prompt("Deseja entrar na dobra espacial?\n1-Sim\n2-Não");

if((question == "Não") || (question == "N") || (question == "2")){
    console.log("Sistema encerrado!");
    console.log("Nome da nave: "+rocketName+"\nNúmero de dobras:"+dobraEspacial);
}
else
{
    dobraEspacial++;

    question = prompt("Deseja entrar na dobra espacial novamente?\n1-Sim\n2-Não");

    let question2 = 1;

    switch(question){
        case "1":
            while(question2 == "1"){
                dobraEspacial++
                question2 = prompt("Deseja realizar uma dobra espacial novamente?\n1-Sim\n2-Não")
         
             }
             console.log("Sistema encerrado!\nNome da nave: "+rocketName+"\nNúmero de dobras:"+dobraEspacial);
             break;

        case "2":
            console.log("Sistema encerrado!\nNome da nave: "+rocketName+"\nNúmero de dobras:"+dobraEspacial);
            break;

    }
}
