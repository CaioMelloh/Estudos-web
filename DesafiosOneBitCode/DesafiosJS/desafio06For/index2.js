let word = prompt("digite um nome: ")

let choosenLetter = prompt("Escolha uma letra para substituir")

let newLetter = prompt("EScolha a letra que gostaria de adicionar no lugar da escolhida")

let newMaskedWord = ""

for(let i = 0; i<word.length; i++){
    if(word[i] == choosenLetter){
        newMaskedWord += newLetter
    }
    else{newMaskedWord += word[i]}
}
console.log(newMaskedWord)