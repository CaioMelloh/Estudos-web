/*
lembrando que o moment tranforma essas datas em milissegundos
1 - capturo o momento em qua nave partiu
2- converto esse momento para um tipo de dado que o moment possa trabalhar
3- capturo a data do momento atual
4- calcular o tempo passado desde a decolagem até hj
5- escolhe o modo de conversão para apresentar esses dados*/
let departmentEntry = prompt("QUal foi o dia, mês e ano em que sua nave partiu para naboo? (DD/MM/YYYY)");

let departMoment = moment(departmentEntry, "YYYYMMDD")
let differenceResult = moment(departMoment, "YYYYMMDD").fromNow();
/*
console.log(moment(departMoment.fromnow()));

let choosenanOption = prompt("Escolhe o formato que gostaria de apresentar esse tempo gasto:\n 1-Segundos\n2-Minutos\n3-Horas\n4-Dias");

let differenceResult;

switch(choosenanOption){
    case 1:
        differenceResult = Math.round(timeDifference / 1000) + " s";
        break;
    case 2:
        differenceResult = Math.round((timeDifference / 1000)/ 60) + " m";
        break;
    case 3: 
        differenceResult = Math.round((timeDifference / 1000 )/ 3600) + " h";
        break;
    case 4:
       differenceResult = Math.round(timeDifference / 1000 / 3600 / 24) + " d";
       break;
    default:
        console.error("Valor inválido, impossível trabalhar com o número passado"); 
} ;*/
alert("Tempo de vôo: "+differenceResult) 