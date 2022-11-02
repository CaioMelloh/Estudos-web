let express = require('express');

const app = express();

app.listen(3002, function(req, resp){
    console.log("ok!");
});

app.get('/', function(req, resp){
    resp.send("<h1>Eai</h1>");
});

app.get('/curso', function(req, resp){
    const nome = req.query.nome;

    resp.json({nome: `${nome}`})
})

app.get('/curso/:nome', function(req, resp){
    const nome = req.params.nome;
    resp.json({Nome: `${nome}`});
})

app.get('/', function(req, resp){
    resp.sendFile(__dirname + "/index.html");
})