const Sequelize = require('sequelize');

const sequelize = new Sequelize('teste', 'root', 'Sejaestoico2580', {
    host: 'localhost',
    dialect: 'mysql'
});

const salteadores = sequelize.define('salteadores', {
    nome:{
        type: Sequelize.TEXT
    },
    armas:{
        type: Sequelize.INTEGER
    },
    sexo:{
        type: Sequelize.STRING
    }
});

salteadores.create({
    nome: 'Carlos',
    armas: 14,
    sexo: 'Masculino'
});