

const hitchedSpaceships = [
    ["Fenix", 8, true], /* no for equivale a array[i] /na função equivale a simplesmente array*/
    ["Golias", 10, true],
    ["Helmet", 5, false], /*ele percorre naturalmente os elementos da camada*/
    ["Elemental", 3, true],
    ["Darwin", 15, false]
];

/*filtra array e mostra as naves que possuem mais de 9 tripulantes*/
function filter(array){
    var novoarray = new Array();

    for(let i= 0; i<array.length; i++){
        if(array[i][1] > 9)
            {
                novoarray.push(" "+array[i][0]+"");
            }
}
    return novoarray;
}

let filtrado = filter(hitchedSpaceships);

/*-----------------------------------------------------------*/


/*Informar o número da plataforma 
 em que está a primeira
nave que ainda está com engate pendente
Utilize a função findIndex, que é bem 
parecida com o find, mas retorna
o índice  de um filtro em vez do
 elemento do Array*/

function buscador(array){
   for(let j = 0; j<array.length; j++){

            if(array[j] == false){
                return true;
            }
   
   }
}

    function plataforma(array){

        return array.findIndex(buscador) + 1;

    }

    let plataform_numeration = plataforma(hitchedSpaceships);
/* o buscador irá percorrer todos os elementos do hitchedSpaceship*/

/*-------------------------------------------------------------------------*/
/*Mostre o nome de cada nave em caixa alta*/

/*função que percorreria apenas a primeira posição das camadas do meu array
    usaria o método to uppercase e imprimiria*/



    function gritandoNomeDasNaves(array){
        let arrayUpper = new Array();
        for(let i = 0; i<array.length; i++){

            for(let j = 0 ; j<array[i].length; j++){

                if(typeof(array[i][j]) == "string" )
                {
                    arrayUpper.push(" "+array[i][j].toUpperCase()+" ");
                    continue;
                    
                }
            }
        }
        return arrayUpper;
    }
  


    let nomesEmCaixaAlta = gritandoNomeDasNaves(hitchedSpaceships);

    alert(`As naves com mais de 9 tripulantes são ${filtrado}\nO número da plataforma com engate pendente é ${plataform_numeration}\nOs nomes das naves possíveis são: ${nomesEmCaixaAlta}`);
