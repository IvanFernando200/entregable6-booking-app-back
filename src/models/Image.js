const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");
// In capital letters and singular      // In lowercase and singular
const Image = sequelize.define("image", {
  // we define the columns here
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // hotelId
});

module.exports = Image;
