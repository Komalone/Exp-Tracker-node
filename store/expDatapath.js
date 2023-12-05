const Sequelize= require('sequelize');

const sequelize= new Sequelize(
    'expense', 
    'root', 
    'Kom@l111', 
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports= sequelize