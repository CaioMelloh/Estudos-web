const express = require('express');

const app = express();

app.listen(3001, function(req, resp){
  console.log("conexão realizada");
})

/*teste comum*/
app.get("/", function(req, resp){
    resp.send("Eai galerinha!");
})

/*teste com json*/
app.get('/curso/:nome', function(req,resp){
    resp.json(req.params);
})

/*teste com escrita json*/
app.get('/teste', function(req, resp){
    const nome = req.query.nome;

    resp.json({Nome: `${nome}`});
})

/*teste com envio de páginas html*/
app.get('/route', function(req, resp){
    resp.sendFile(__dirname + '/index.html');
})