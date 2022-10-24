const express = require('express');
const app = express();



app.get('/', function(req, resp){
    resp.send("Página home");
})

app.get('/:nome', function(req, resp){
    resp.send("Olá, eu sei seu nome!");
})

app.get('/:nome/:profissao', function(req, resp){
    resp.send(req.params);
})



app.listen(8010, function(){
    console.log("Servidor rodando!");
})