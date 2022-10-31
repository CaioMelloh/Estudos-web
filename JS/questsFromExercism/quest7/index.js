/*
Calcule o número de aves visitantes em uma semana específica

Agora que você tem uma visão geral dos números de contagem de pássaros,
 deseja fazer uma análise mais refinada.

Implementar uma função birdsInWeek que aceita uma variedade de contagens de pássaros por
 dia e um número de semana. Retorna o total número de pássaros que você contou nessa semana específica.
 Você pode assumir que as semanas são sempre rastreadas completamente.

 birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
birdsInWeek(birdsPerDay, 2);
// => 12
 */

let birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1, 4, 5, 6, 2, 4, 6, 4];
function analise(array, week){
    let result = 0;
    let position = 7 * week - 1;
    for(let i = position; i>position - 7; i--){
    result += array[i];
    }
    return result;
}

console.log(analise(birdsPerDay, 3));


console.log(1 % 2 == 0);




  let novo = birdsPerDay.map((array) => {
    for(let i = 0; i< array.length; i++){
      if(i % 2 == 0){
            array[i]+= 1; 
        }
    }
  });

  console.log(novo);


//   for(let i = 0; i< birdsPerDay.length; i++){
//     if(i % 2 == 0){
//           birdsPerDay[i] = birdsPerDay[i] + 1;      
//       }
//     else{
//       birdsPerDay[i] = birdsPerDay[i];
//     }
//   }
//   return birdsPerDay;
/*2*/
// let result = 0;
// let position = 7 * week - 1;
// for(let i = position; i>position - 7; i--){
//   result += birdsPerDay[i];
// }
// return result;

/*1*/
// let count = 0;
// for(let i = 0; i<birdsPerDay.length; i++){
//   count+= birdsPerDay[i];
// }
// return count;

/*3*/
 
// for(let i = 0; i< birdsPerDay.length; i++){
//     if(i % 2 == 0){
//           birdsPerDay[i] = birdsPerDay[i] + 1;      
//       }
//     else{
//       birdsPerDay[i] = birdsPerDay[i];
//     }
//   }
//   return birdsPerDay;