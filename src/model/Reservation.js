const { DataTypes } = require("sequelize");
const db = require("../db/configDb");

const Reservation = db.define("reservations", {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  document_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  document_number: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  type_reservation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number_people: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "No"
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = { Reservation };