const Sequelize = require('sequelize');

const sequelize = new Sequelize('teste', 'root', 'Sejaestoico2580', {
    host: 'localhost',
    dialect: 'mysql'
});

const samurai = sequelize.define('Samurai', {
        nome:{
            type: Sequelize.STRING
        },
        forca:{
            type: Sequelize.INTEGER
        },
        cla:{
            type: Sequelize.TEXT
        }
});

const ninjas = sequelize.define("Ninjas", {
    nome:{
        type: Sequelize.STRING
    },
    armas:{
        type: Sequelize.INTEGER
    },
    poder:{
        type: Sequelize.INTEGER
    }
});

ninjas.create({
    nome: "Saito kihosu",
    armas: 4,
    poder: 1450
})
// sequelize.sync({force:true});