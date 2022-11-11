const express = require('express');
const app = express();
//connection


//settings for post process
app.use(express.json());

//connection in database
const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', 'Sejaestoico2580', {
    host: 'localhost',
    dialect: 'mysql'
});

const riders = sequelize.define('riders', {
    nome:{
        type: Sequelize.STRING
    },
    modelo:{
        type: Sequelize.STRING
    },
    clube:{
        type: Sequelize.TEXT
    }
});

// riders.create({
//     nome : 'Ghost Rider',
//     modelo: 'Harley Motors 22',
//     clube: 'Hell'
// });


//feedback and connection
app.listen(3001, function(req, resp){
    console.log("Run!");
})

//normal Page
app.get('/', function(req, resp){
    resp.send("Enviando!");
});

//parameters in url
app.get('/:nome/:profissao', function(req, resp){
    const nome = req.params.nome;
    const profissao = req.params.profissao;

    resp.json({nome: `${nome}`, profissao: `${profissao}`});
})

//query in url
// app.get('/heroes', function(req, resp){
//     const nome = req.query.nome;
//     const codinome = req.query.codinome;

//     resp.json({nome: `${nome}`, codinome: `${codinome}`});
// });

let heroes = ['Punisher', 'Wolverine', 'Daredevil', 'Batman'];

// Acessar array 
app.get('/:index', function(req, resp){
    const {index} = req.params;

    resp.json({curso: `${heroes[index]}`});
})

// increment values
app.post('/heroes', function(req, resp){
    const {nome} = req.body;

    heroes.push(nome);
    resp.json(heroes);
});

// alter values
app.put('/heroes/:index', function(req, resp){
    const {index} = req.params;

    const {name} = req.body;

    heroes[index] = name;

    resp.json(heroes);
});

let turtles = ['Leo', 'Raphael', 'Donatello', 'Michelangelo'];

app.put('/turtle/:index', function(req, resp){
    const {index} = req.params
    const {name} = req.body;

    turtles[index] = name;

    resp.json(turtles);
});

// removing resources of a array

app.delete('/turtles/:index', function(req, resp){
    const {index} = req.params;

    turtles.splice(index, 1);

    return resp.json(turtles);
})