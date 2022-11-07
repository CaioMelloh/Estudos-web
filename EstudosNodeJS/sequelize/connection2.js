const Sequelize = require('sequelize');

const sequelize = new Sequelize('teste', 'root', 'Sejaestoico2580', {
    host: 'localhost',
    dialect: 'mysql'
});

const tartaruga = sequelize.define('tartarugas', {
    nome:{
        type: Sequelize.STRING
    },
    armaPredileta:{
        type: Sequelize.STRING
    },
    corFaixa:{
        type: Sequelize.TEXT
    }

});

// sequelize.sync({force: true});
// sequelize.sync({force:true});