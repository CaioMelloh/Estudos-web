// const { arrayBuffer } = require("stream/consumers");

// let limes = ['small', 'small', 'large', 'medium', 'small'];

// let wedges = 25;

// function limesToCut(wedgesNeeded, limes) {
//     let i = 0;
//     let count = 0;
//     let wedgesLemon = 0;

//     while(i < limes.length){

//         switch (limes[i]){
//             case 'small':
//                 wedgesLemon = 6;
//                 break;
//             case 'medium':
//                 wedgesLemon = 8;
//                 break;
//             case 'large':
//                 wedgesLemon = 10;
//                 break;
//         }

//         count+= wedgesLemon;
//         if(count >= wedgesNeeded){
//             break;
//         }

//         i++;

//     }
//         return i+1;
// }

// console.log(limesToCut(25, limes));

/*
Para facilitar a entrega, implemente uma função remainingOrders que leva o número de 
minutos
 restantes no Li Mei turno e uma variedade de sucos que foram encomendados, mas ainda não
  preparados. A função deve retornar as ordens que Li Mei não pode começar a
   se preparar antes do final de sua jornada de trabalho.

O tempo restante no turno será sempre maior que 0. Além disso, os
 pedidos são preparados na ordem em que eles aparecem na matriz. Se Li
  Mei começar a misturar um certo suco, ela sempre o terminará, mesmo que precise trabalhar
   um pouco mais. Se não houver mais pedidos restantes que Dmitry precise cuidar
   , uma matriz vazia deve ser retornada.
   */
  /*recebe os minutos restantes
    percorre a array identifica os minutos de cada bebida
    em seguida como o tempo restante sempre será maior que zero ele irá subtrair 
    ele deve verificar se a bebida menos o tempo é diferente de 0,
    se sim ele diminui senão ele não o faz
    porém o do while pode executar pelo menos uma vez
    o tempo restante da bebida, se o tempo (5 - 1,5 = 3,5)
    em seguida ele verifica se o 
*/
    let drinks = ['Energizer', 'All or Nothing', 'Green Garden']

   function remainingOrders(leftMinutes, drink){
        let minutes = leftMinutes;
        let i = 0;
        let newArray = drink;
        console.log(newArray)
        do{
            let leftTime;
            // if(minutes <= 0){
            //     return new Array();
            // }

            leftTime = timeToMixJuice(drink[i]); /*bug all or nothing não retorna 5, acab retornando 1.5*/
            newArray.shift();
            console.log(newArray)
           i++;

           minutes-= leftTime 
           console.log(leftTime);
           console.log(minutes);
          
        }while(minutes > 0)
        
        if(i == drink.length){
            return new Array();
        }
        return newArray;
   }



   function timeToMixJuice(name) {
    let leftTime;
     switch (name){
      case 'Pure Strawberry Joy':
        leftTime = 0.5;
        break;
      case 'Energizer':
      case 'Green Garden':
         leftTime = 1.5;
         break;
       case 'Tropical Island':
         leftTime = 3;
         break;
       case 'All or Nothing':
         leftTime = 5;
         break;
       default:
         leftTime = 2.5;
    }
   
     return leftTime;
   }


   console.log(remainingOrders(5, drinks));
















