let nakama = {
    nome: "Roronoa Zoro",
    habilidade: "Ashura",
    cor_cabelos: "verde"
};

console.log(nakama.nome); /*método de acesso*/
console.log(nakama["nome"]); /*outra forma de acesso*/

/*maleabilidade da estrutura*/

nakama.recompensa = 150000;
nakama.ordemDeChegadaNoBando = 0;

console.log(nakama["recompensa"]);

console.log(nakama.ordemDeChegadaNoBando);

/*uma estrutura vazia*/
let nakamas = {} /* or let nakamas = new Object();*/

console.log(nakamas);

nakamas.cor = "Azul";

console.log(nakamas);

nakamas.cor = nakamas.cor.toUpperCase();

console.log(nakamas.cor)


