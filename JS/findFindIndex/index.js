const nakamas = ["Zoro", "Sanji", "Luffy"];

    var nakamasEnniesLobby = [["Zoro", "Sanji", true], ["Nami", "Robin", false], ["Usopp", "Chopper"]];

let teste;

// a função callback interpreta cada item mais externo do array como um
//elemento, sendo assim o bloco array[0][j] = zoro, sanji, false
// equivale para função ao simples array[0] e ele irá percorrer todo o array

function metabox(array){
   for(let i= 0; i<array.length; i++){
        if(array[i] == false){
            return true;
        }
   }
   
}

const plataform = 1;

let result = nakamasEnniesLobby.findIndex(metabox) + plataform;
console.log(result);









// const result = nakamas.find(item => {
//     return item[0] == 'S';
// })

// console.log(result);

/*retorna o elemento do array que corresponde ao parâmetro passado*/

