require("dotenv").config()

const dbOptions =  {
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_PORT: process.env.DATABASE_PORT,
  DATABASE: process.env.DATABASE,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT,
}; // Options to myConnection

exports.dbOptions = dbOptions;

