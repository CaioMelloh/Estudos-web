let spaceshipName = prompt("Qual o nome da sua nave?");

let reverseName = ""

for(let i= (spaceshipName.length - 1) ; i>= 0; i--){
    if(spaceshipName[i] == "e"){
        break;
    }
    else{
        reverseName+= spaceshipName[i]
    }
}
alert("Nome original da nave: "+ spaceshipName +"\nNome após ocultação: "+reverseName);