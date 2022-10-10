//função comum
function entregaNomeIdade(name, funcaoIdade, anoNasc){

    let age = funcaoIdade(anoNasc)
    return "Olá, "+ name+ ". Você tem " + age +" anos?"
}

//função callback

let discoveryAge = ano => {
    
    let anoAtual = 2022
    let age = anoAtual - ano 
    return age

} 

//declaração dessas funções

let idade = entregaNomeIdade("Caio", discoveryAge, 2002)
console.log(idade)