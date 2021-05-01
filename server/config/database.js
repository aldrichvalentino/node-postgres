const knex = require('knex').knex;

const config = require('../knexfile');

const knexInstance = knex(config);

module.exports = knexInstance;
