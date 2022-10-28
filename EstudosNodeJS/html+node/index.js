const express = require('express');

const app = express();

app.listen(3233, function(req, resp){
    console.log("Conexão estabelecida!")
})

app.get('/', function(req, resp){
    resp.sendFile(__dirname + "/index.html");
    /*incrivel*/
     /*o __dirname vai capturar o diretório raiz da nossa aplicação
     impedindo assim possíveis erros ao passar o path*/
})