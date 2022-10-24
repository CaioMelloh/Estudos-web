const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
];

function filter(array){
    var novoarray = new Array();

    for(let i= 0; i<array.length; i++){
        if(array[i][1] > 9)
            {
                novoarray.push(array[i][0]);
            }
}
    console.log(novoarray);
}

filter(hitchedSpaceships);
