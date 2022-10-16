/*1.
Implementar a função frontDoorResponse isso pega uma linha do poema como argumento
 e retorna a primeira letra dessa linha.*/

 function frontDoorResponse(line) {
    return line[0];
  }


/*2.
Implementar a função frontDoorPassword que aceita uma sequência 
( das letras combinadas que você encontrou na tarefa 1 ) 
e a retorna capitalizada corretamente.
*/
/*function backDoorPassword*/

function backDoorPassword(nome){
    /* primeira letra maiúscula e resto em minúsculo sempre*/
    let novo = nome.toLowerCase();
    let primeira = (novo.slice(0, 1)).toUpperCase();

    /*let result = novo.split(1, 2);*/
    novo = novo.slice(1, novo.length);
    let result = primeira + novo;
    return result;
}



/*3.
Implementar a função backDoorResponse que pega uma linha do poema como argumento e retorna a última 
letra dessa linha que não é um personagem do espaço em branco*/
function backDoorResponse(line) {

    let newWord = line.trim();

    let formatLetter = newWord.slice((newWord.length - 1), newWord.length);

    return formatLetter;

}

/*4.Para entrar no clube de poesia pela porta dos fundos, você precisa ser educado. 
Portanto, para derivar a senha, desta vez você precisa capitalizar corretamente a palavra e adicionar 
', please' no final. Implementar a função backDoorPassword que aceita uma sequência 
( das letras combinadas encontradas na tarefa 3 ) e retorna a versão educada da senha em maiúscula.*/
function backDoorPassword(word) {
    word = frontDoorPassword(word);
    let gentleman = word + ", please";
    return gentleman;
  }