

const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
];

/*filtra array e mostra as naves que possuem mais de 9 tripulantes*/
function filter(array){
    var novoarray = new Array();

    for(let i= 0; i<array.length; i++){
        if(array[i][1] > 9)
            {
                novoarray.push(array[i][0]);
            }
}
    console.log(novoarray);
}

/*filter(hitchedSpaceships);*/

/*Informar o número da plataforma 
 em que está a primeira
nave que ainda está com engate pendente
Utilize a função findIndex, que é bem 
parecida com o find, mas retorna
o índice  de um filtro em vez do
 elemento do Array*/

function engatePendente(array){
    for(let i = 0; i<array.length; i++){
        for(let j = 2; j<array[i].length; j++){
            if(array[i][j] == false)
            {
                
                return array[i][j];
            }
        }
        return 0;
    }
   
}


console.log(engatePendente(hitchedSpaceships));
