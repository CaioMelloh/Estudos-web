// let array = ["Aquiles", "Ulisses", "Hércules", "Jasão", "Sócrates"];

// let iterationOfArray = (value, index) =>  console.log("Value: "+value+"\nPosition: "+ index);

// array.forEach(iterationOfArray);

// Array.map

// let array = ["Aquiles", "Ulisses", "Hércules", "Jasão", "Sócrates"];

// const novo = array.map((item) => { return item + " (herói heleno)"});

// console.log(novo);

let array = ["Aquiles", "Ulisses", "Hércules", "Jasão", "Sócrates"];

let novoarray = array.find((item) => { return item[item.length - 1] == "s"});

console.log(novoarray);