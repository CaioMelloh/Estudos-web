const express = require('express');
const { Server } = require('http');

const app = express();

//Necessário para fazer o post
app.use(express.json());

const Sequelize = require('sequelize');

const sequelize = new Sequelize('teste', 'root', 'Sejaestoico2580', {
    host: 'localhost',
    dialect: 'mysql'
});

const jorges = sequelize.define('jorges', {
    nome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    power: {
        type: Sequelize.INTEGER
    }
});

// sequelize.sync()

//escuta
app.listen(3004, function(req,resp){
    console.log("Servidor online");
})
//mensagem
app.get('/', function(req, resp){
    resp.send("<h1> Olá </h1>");
});

//teste query
app.get("/curso", function(req, resp){
    const nome = req.query.nome;

    resp.json({nome: `${nome}`});
});

//teste variavel
app.get('/curso/:nome/:profissao', function(req, resp){
    const nome = req.params.nome;
    const profissao = req.params.profissao;

    resp.json({nome:`${nome}`, profissao: `${profissao}`});
});

//teste de envio de pagina
app.get('/kol', function(req, resp){
    resp.sendFile(__dirname + "/index.html");
})

//pesquisa em array

const heroes = ['Daredevil', 'Wolverine', 'MoonKnight', 'Spiderman'];

app.get('/turtles/:index', function(req, resp){
    const {index} = req.params;

    resp.json(heroes[index]);
})

// get

app.get('/tartarugas', function(req, resp){
    resp.json(heroes);
});

// Post

app.post('/heroes', function(req, resp){
    const {name} = req.body;
    heroes.push(name);

    return resp.json(heroes);
})