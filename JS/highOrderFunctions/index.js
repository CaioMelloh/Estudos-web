
// declarando função comum
function doubleVelocity(velocity, printer){
    console.log("Entrei em double velocity")
    let newVelocity = velocity * 2
    printer(newVelocity)
    return newVelocity
}

//função callback, pois é passada como parâmetro dentro de uma função
let printVelocity = velocity =>{
    console.log("A velocidade é "+velocity+" km/s")
}


let newVelocity = doubleVelocity(60, printVelocity)
console.log(newVelocity)

// função callback simplificada
let anotherVelocity = doubleVelocity(50, (velocity) =>{
    console.log("Outra velocidade "+ velocity*3)
})