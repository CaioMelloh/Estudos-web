const express = require('express');

const app = express();

app.listen(3001, function(req, resp){
    console.log("Escutando o servidor!");
})

app.get('/', function(req, resp){
    const resposta = req.query.resposta;
    resp.json({resposta: `${resposta}`});
})

app.get("/pagina", function(req, resp){
    resp.sendFile(__dirname + "/index.html");
})