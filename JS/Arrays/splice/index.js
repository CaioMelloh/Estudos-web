let testandosplice = ["Junior", "Marcos", "Ulisses", "Aquiles"];

console.log(testandosplice);

let novo = ["Perseu", "Jasão"];

let varcomsplice = testandosplice.splice(2,2, novo);
/* o primeiro numero é o ponto de partida dos cortes de retirada
Quero retirar a segunda posição (Ulisses)
------------------------------------------

Em seguida devemos passar o número de elementos que queremos
cortar(partindo do número de corte), ou seja o Ulisses também
será cortado independente da quantidade

-----------------------------------------
O terceiro espaço é para inserir um novo elemento, ou novos que serão inseridos
na parte retirada
*/

/*ainda é possível passar um splice sem colocar os elementos 
de emenda, o que irá apenas excluir sem adicionar*/

let arrayspliceSimples = ["Jorgin", "Marquito", "Arthur", "Ratinho"];

arrayspliceSimples.splice(1, 2);


console.log(testandosplice);

console.log(novo);

console.log(arrayspliceSimples);