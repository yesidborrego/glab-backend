const { DataTypes } = require("sequelize");
const db = require("../db/configDb");
const { User } = require("../model/User");

const Reservation = db.define("reservations", {
  date: {
    type: DataTypes.DATE,
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

User.hasMany(Reservation);
Reservation.belongsTo(User);

module.exports = { Reservation };