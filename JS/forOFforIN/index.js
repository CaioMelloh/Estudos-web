let array = [["Luffy", 15000], ["Zoro", 16000], ["Sanji", 14000]];

let arrayj = ["Luffy","Zoro", "Sanji"];

/*for in*/
// o n funciona como um indice do array
for(z in arrayj){
    console.log(arrayj[z]);
}

/*no for of o elemento escolhido se torna o proprio elemento do array
sem necessitar de indice para representa-lo*/
console.log("----------")
for(x of arrayj){
    console.log(x);
}
