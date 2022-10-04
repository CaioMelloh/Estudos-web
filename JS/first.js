alert("Bem-vindo ao nosso site!");
let nome = prompt("Digite seu nome!");
console.log("Olá, "+ nome);
console.warn("Esse é o seu nome?");
let resp = confirm("Está satisfeito?");
if(resp == false){
    console.log("Fico feliz em serví-lo");
}