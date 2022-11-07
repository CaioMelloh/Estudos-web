const express = require('express');

const app = express();

app.listen(3001, function(req, resp){
    console.log("Conexão realizada");
})

app.get('/', function(req, resp){
    resp.send("<h1> OLá </h1>");
})

app.get('/jason', function(req, resp){
    const nome = req.query.nome;

    resp.json({nome: `${nome}`});
})

app.get('/variaveis/:nome/:codinome', function(req, resp){
    const nome = req.params.nome;
    const codinome = req.params.codinome;

    resp.json({nome: `${nome}`, 
    codinome:`${codinome}`
})

})

app.get('/col', function(req, resp){
    resp.sendFile(__dirname + "/index.html");
})