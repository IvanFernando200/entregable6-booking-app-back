const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");
// In capital letters and singular      // In lowercase and singular
const Booking = sequelize.define("booking", {
  // we define the columns here
  // userId
  // hotelId
  checkIn: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  checkOut: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Booking;
