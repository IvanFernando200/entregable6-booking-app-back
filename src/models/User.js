const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");
// In capital letters and singular      // In lowercase and singular
const User = sequelize.define("user", {
  // we define the columns here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.ENUM(["male", "female", "other"]),
    allowNull: false,
  },
});

User.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  delete values.password;
  return values;
};

module.exports = User;
