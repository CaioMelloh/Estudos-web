alert("Bem-vindo! A seguir pediremos que informe alguns dados.")
let nome = prompt("Informe o seu nome: ");
let idade = prompt("Informe a sua idade: ");

let confirm1;
do{
    idade = prompt("Informe a sua idade: ");
    confirm1 = confirm("Você confirma essa idade ("+ idade+" )");
}
while(confirm1 == false);

alert("Seu nome é "+ nome+", sua idade é "+ idade+", confirmação da idade: "+confirm1);
