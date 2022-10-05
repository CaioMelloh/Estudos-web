let distanceLightYear = prompt("Qual a distância em anos luz em que estamos em relação a terra?");

alert("Escolha uma das três opções de conversão terráquea: 1-Parsec(pc) (Han solo estaria orgulhoso?)\n2-Unidade Astronônima (Au)\n3- Kilômetros(KM)");

let answer = prompt("Qual operação deseja realizar?");


let unity;

switch(answer){
    case "1":
        unity = "pc";
        answer = distanceLightYear * 0.306601;
        break;
    case "2":
        unity = "Au";
        answer = distanceLightYear * 63241.1;
        break;
    case "3":
        unity = "Km";
        answer = distanceLightYear * 9.5 * Math.pow(10, 12);
        break;
    default:
        unity= "Unidade não identificada";
        answer = "Conversão fora do escopo";

}

    alert("Distância digitada em anos luz: "+ distanceLightYear+"\n"+unity+": "+answer);