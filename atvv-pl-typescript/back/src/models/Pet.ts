import {  } from 'mysql2';

const Sequelize = require('sequelize');
const database = require('./connect')

 
const pet = database.define('pet', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    raca: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tipo: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

pet.sync({ alter: true });

module.exports = pet;
