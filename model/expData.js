const Sequelize= require('sequelize');

const sequelize=require('../store/expDatapath');

const Expenses= sequelize.define('expenses',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false   
    },
    category:Sequelize.STRING,
    desciption: Sequelize.STRING
});

module.exports= Expenses;