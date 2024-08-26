const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");
// In capital letters and singular      // In lowercase and singular
const Review = sequelize.define("review", {
  // we define the columns here
  rating: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // hotelId
  // userId
});

module.exports = Review;
