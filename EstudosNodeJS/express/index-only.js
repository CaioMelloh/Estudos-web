const express = require("express");
const app = express();


app.get('/', function(req, resp){
    resp.send("<h1> Meu blog pessoal! </h1>");
})






app.listen(8081, function(){
    console.log("Servidor no ar!");
});