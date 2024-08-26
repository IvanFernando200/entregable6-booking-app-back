const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");
// In capital letters and singular      // In lowercase and singular
const City = sequelize.define("city", {
  // we define the columns here
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  countryId: {
    type: DataTypes.STRING(2),
    allowNull: false,
  },
});

module.exports = City;
