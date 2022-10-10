/*função anônima pois foi possivel emitir seu nome e armazenar numa
variavel*/
let saudacao = function(nome, pais, idade){

    console.log("Olá, "+nome+" você é natural do "+pais+"sua idade é de "+idade)
}

//função comum
function original(nome, pais){
    console.log("Olá, "+nome+" você é natural do "+pais)
}

original("Caio", "Brasil")

saudacao("Caio", "BRasil", 17)


/*------------------------------- */

/*Arrow function (possui esse nome por
     conta do simbolo de flecha)*/
//arrow functions são funções anônimas ainda mais
 //simplificadas 

let boasVindas = nome => {
    return "Olá, "+nome+" seja bem-vindo(a)"
}

/*versão simplificada*/

let boasVindasSimplificada = (nome, sobrenome) => "Olá, "+nome+" "+sobrenome+" !"

console.log(boasVindas("Caio"))
console.log(boasVindasSimplificada("Caio", "Mello"))




