const { DataTypes } = require("sequelize");
const db = require("../db/configDb");

const User = db.define("users", {
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
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    scopes: {
      withoutPassword: {
        attributes: { exclude: ['password'] },
      }
    }
  }
);

const Role = db.define("roles", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
);

User.hasOne(Role, { through: "roleusers" });
Role.belongsToMany(User, { through: "roleusers" });

module.exports = { User, Role };