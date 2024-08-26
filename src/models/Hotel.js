const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");
// In capital letters and singular      // In lowercase and singular
const Hotel = sequelize.define("hotel", {
  // we define the columns here
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // cityId
  lat: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  lon: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
});

module.exports = Hotel;
