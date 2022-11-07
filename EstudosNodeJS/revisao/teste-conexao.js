const express = require('express');

const app = express();

app.listen(3001, function(req, resp){
    console.log("Conexão ok");
});

/*teste de apresentação comum*/

app.get('/', function(req, resp){
    resp.send("<h1>Servidor online!</h1>");
});

/*teste de parametros*/
app.get('/parametros', function(req, resp){
    let nome = req.query.nome;

    resp.json({Nome: `${nome}`});
})

/*teste novamente*/
app.get('/herois', function(req,resp){
    const profissao = req.query.profissao;
    const nome = req.query.nome;
    const codinome = req.query.codinome;

    resp.json({Nome: `${nome}`,
                profissao: `${profissao}`,
                codinome: `${codinome}`});
});

/* teste com parametros*/
app.get('/par/:nome/:codinome', function(req,resp){
    const nome = req.params.nome;
    const codinome = req.params.codinome;

    resp.json({Nome: `${nome}`, Codinome: `${codinome}`});
})