let arrayDeHerois = ["Aquiles", "Ulisses", "Jasão", "Perseu", "Prometeu"];

let dividido = arrayDeHerois.slice(3, 4);
/* O primeiro numero é o numero do inicio da divisão
o segundo número é o número do fim da seção de divisão, lembrando
que ele cortará do numero start até o anterior ao final escolhido,
jamais pegando o numero do fim da seção

Lembrando que o array original estará intacto

*/
console.log(dividido);
console.log(arrayDeHerois);