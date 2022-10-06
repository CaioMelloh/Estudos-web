let answer;

let dobraEspacial = 0;

let rocketName = prompt("Qual o nome da sua nave?: ");

let question = prompt("Deseja entrar na dobra espacial?\n1-Sim\n2-Não");

if((question == "Não") || (question == "N") || (question == "2")){

   answer = "Sistema encerrado sem tentativas!\n Nome da nave: "+rocketName+"\nNúmero de dobras:"+dobraEspacial

}
else
{
    dobraEspacial++;

    question = prompt("Deseja entrar na dobra espacial novamente?\n1-Sim\n2-Não");

    let secondQuestion = 1;

    switch(question){
        case "1":
            while(secondQuestion == "1"){
                dobraEspacial++
                secondQuestion = prompt("Deseja realizar uma dobra espacial novamente?\n1-Sim\n2-Não")
         
             }
             answer = "Sistema encerrado!\n Nome da nave: "+rocketName+"\nNúmero de dobras:"+dobraEspacial
             break;

        case "2":
            answer = "Sistema encerrado, obrigado por testar!\n Nome da nave: "+rocketName+"\nNúmero de dobras:"+dobraEspacial
            break;

    }
}
console.log(answer);
