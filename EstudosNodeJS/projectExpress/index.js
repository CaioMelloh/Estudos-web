const express = require('express');

const app = express();

const handlebars = require('express-handlebars');



app.listen(3001, function(req,resp){
    console.log("Servidor funcionando!");
})