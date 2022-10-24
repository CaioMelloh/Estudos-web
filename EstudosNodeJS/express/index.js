const express = require('express'); //carrega uma função que cria o express
const app = express();//essa função cria uma cópia inteira do framework
//qualquer acção no decorrer do programa deve partir dessa variavel

//para evitar que sua variavel seja sobrescrita declare-a como const.

app.get('/', function(req, resp){
    resp.send("<h1>Olá, amigos</h1>");
})


app.listen(8081, function(){
    console.log("Servidor rodando liso meu nobre!");
}) //só isso já é o suficiente para ativar o servidor, mas ainda 
//podemos adicionar uma resposta com o callback
//essa parte listen deve ser sempre a última do seu código
