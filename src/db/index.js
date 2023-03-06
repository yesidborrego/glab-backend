require("dotenv").config()

const dbOptions =  {
  DATABASE_HOST: process.env.DATABASE_HOST || "localhost",
  DATABASE_PORT: process.env.DATABASE_PORT || 3306,
  DATABASE: process.env.DATABASE || "glab",
  DATABASE_USER: process.env.DATABASE_USER || "root",
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || "admin123",
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || "mysql",
}; // Options to myConnection

exports.dbOptions = dbOptions;
