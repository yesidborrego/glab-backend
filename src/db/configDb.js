
const { Sequelize } = require("sequelize");
const { dbOptions } = require("./");

// const db = new Sequelize(dbOptions.DATABASE, dbOptions.DATABASE_USER, dbOptions.DATABASE_PASSWORD, {
//   host: dbOptions.DATABASE_HOST,
//   dialect: dbOptions.DATABASE_DIALECT,
// });
const db = new Sequelize(dbOptions.DATABASE, dbOptions.DATABASE_USER, dbOptions.DATABASE_PASSWORD, { dialect: "mysql"});

module.exports = db;