// Database configuration file
// TODO: move the database, username, and password to env file

const Sequelize = require("sequelize");
module.exports.database = new Sequelize("seqdb", "admin", "admin", {
  host: "db",
  dialect: "postgres",
  port: 5432
});

module.exports.dataType = {
  string: Sequelize.STRING,
  integer: Sequelize.INTEGER,
  date: Sequelize.DATE
};
