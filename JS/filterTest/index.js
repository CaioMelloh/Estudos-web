let array = ["Aquiles", "Ulisses", "Hércules", "Jasão", "Sócrates"];

let novoarray = array.filter((item) => { return item[item.length - 1] == "s"});

console.log(novoarray);