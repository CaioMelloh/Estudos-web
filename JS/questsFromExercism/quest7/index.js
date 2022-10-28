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
let birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];



function birdsInWeek(birdsPerDay, num){
    let i = 0;
    switch(num){
        case 1:
            i = 0;
            break;
        case 2:
            i = 7;
            break;
        case 3:
            i = 14;
            break;
        case 4:
            i = 21;
            break;    
    }

    const p = i;
    let sum = 0;
    
    for(i; i< (p + 7); i++){
        sum += birdsPerDay[i];
    }
    return sum
}

console.log(birdsInWeek(birdsPerDay, 2));