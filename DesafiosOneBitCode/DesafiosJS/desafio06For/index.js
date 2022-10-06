let rocketName = prompt("Digite o nome da espaçonave:")

let choosenChar = prompt("Escolha o caractere que gostaria de substituir: ")

let alternativeChar = prompt("Qual o caractere você gostaria de inserir no lugar do escolhido: ");

let newName = "";


/*revisar aula do for*/
/* o javascript n consegue modificar strings diretamente por posição
apenas obter o valor dessas posições*/
/*galinha*/
for(let i= 0; i<rocketName.length; i++){
    if(rocketName[i] == choosenChar){
    	newName+= alternativeChar;
    }
  else{
    	newName+= rocketName[i];
    }
    
}
