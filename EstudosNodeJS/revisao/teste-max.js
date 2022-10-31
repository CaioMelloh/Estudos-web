/*teste de conexão*/
let express = require('express');

let app = express();

app.listen(3001, function(req, resp){
    console.log("Conexão estabelecida!");
})

/*teste de página simples*/

app.get('/', function(req, resp){
    resp.send("<h1>Teste simples!</h1>");
})

/*teste de rota mais complexa*/

app.get('/curso', function(req, resp){
    resp.send("Outra página");
})

/*teste com parâmetros escritos + json*/

app.get('/curso/teste', function(req, resp){
    const nakama = req.query.nakama;

    resp.json({Tripulante: `nome: ${nakama}`});

})

/*teste com parâmetros na url*/

app.get('/curso/param/:nome', function(req, resp){
    const nome = req.params.nome;

    resp.json({Nome: `${nome}`});
})
