const Sequelize = require('sequelize');
const config = require('../database');
const database = config.database;

module.exports = {
    User : database.define('user', {
        username: config.dataType.string,
        birthday: config.dataType.date
    })
};