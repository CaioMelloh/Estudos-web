let array = ["João", "Marcos", "Pedro"];

/*
let novos = array.map((nome) => {return nome + " (capturado)"});

console.log(novos);
*/

let novoarray = array.filter((item) => {
    return item[item.length - 2] == "o";
});

console.log(novoarray);
