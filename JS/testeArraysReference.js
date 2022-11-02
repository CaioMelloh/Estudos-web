let novo = ["Zoro", "Luffy", "Coby"];

let antigo = novo.map((x) => x );

console.log(antigo);
antigo.shift();
console.log(antigo);
console.log(novo);
// let antigo = novo;
// console.log(antigo);

// antigo.shift();

// /* arrays referenciam um espaço de memória e não atribuem os seus valores*/
// console.log(antigo);
// console.log(novo);
