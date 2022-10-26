const express = require('express');

const app = express();

app.listen(3001, (req, resp) =>{
     console.log("Servidor rodando!");
});

app.get('/curso/:nome', (req, resp) =>{
   const nome = req.params.nome;
    return resp.json({Aprendendo: `${nome}`});
})