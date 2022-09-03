const { Sequelize, DataTypes } = require('sequelize')

//Sequelize

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '3133348294Je**',
    port: 5432,
    database: 'TaskEdward',
    logging: false
});

module.exports = { db, DataTypes };