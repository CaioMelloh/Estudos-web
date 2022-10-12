//criar um menu que utilize as cinco funções

let users = ["Maria", "Jõao", "Logan", "Wade", "Peter", "Bruce W."];

function quest(funcao){
    let resp = prompt("Olá, seja bem-vindo(a) a nossa base de dados!"+
    "\nQual ação você gostaria de executar?\n1-Show the users"
    +"\n2-Delete user(first)\n3-Insert user in the end"
    +"\n4-Position of user\n5-insert user like a first\n6-Delete the last user")

    let answer = funcao(resp);

    return answer;
    
}

function insert(){
    let resp = prompt("Qual o nome do usuário visado?");
    return resp;
}

let menu = num =>{
    switch(num){
        case "1":
            console.log(users);
            break;
        case "2":
            users.shift();
            console.log(users);
            break;
        case "3":
           users.push(insert());
            console.log(users);
            break;
        case "4":
            console.log(users);
            console.log(users.indexOf(insert()));
            break;
        case "5":
            users.unshift(insert());
            console.log(users);
            break;
        case "6":
            users.pop();
            console.log(users);
            break;

    }

}

    quest(menu);
    /* push (insere no fim), pop(remover no fim), shift(remove no começo)
    unshift (adiciona no começo), indexOf(posição do elemento)*/