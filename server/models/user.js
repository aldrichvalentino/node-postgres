const Sequelize = require("sequelize");
const config = require("../database");
const database = config.database;

module.exports = {
  User: database.define("user", {
    name: config.dataType.string,
    email: config.dataType.string,
    password: config.dataType.string
  }),
  sync: () => database.sync()
};

database.sync();
