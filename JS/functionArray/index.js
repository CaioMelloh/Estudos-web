function searcher(array, menu){

    let user = menu(array);
    
    return user;
}

let searchForName = function(array){
    for(let i=0; i<array.length; i++){

        if(typeof array[i] === "string"){
            console.log("O nome do usuário é "+array[i]);
            break;            
        }
    }
}

let vetor = [6, 9, "Marcos"]; //Fazer um experimento com objetos

searcher(vetor, searchForName);