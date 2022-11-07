const Sequelize = require('sequelize');
const sequelize = new Sequelize('', 'root', 'Sejaestoico2580', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log("Sucesso!"); /*caso conecte tranquilamente*/
}).catch(function(error){
    console.log("Erro ocorrido: " + error); /*caso ocorra um erro*/
});