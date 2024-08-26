const User = require("./User");
const City = require("./City");
const Hotel = require("./Hotel");
const Image = require("./Image");
const Booking = require("./Booking");
const Review = require("./Review");

// cityId
Hotel.belongsTo(City);
City.hasMany(Hotel);

// hotelId
Image.belongsTo(Hotel);
Hotel.hasMany(Image);

// userId
Booking.belongsTo(User);
User.hasMany(Booking);

// hotelId
Booking.belongsTo(Hotel);
Hotel.hasMany(Booking);

// hotelId
Review.belongsTo(Hotel);
Hotel.hasMany(Review);

// userId
Review.belongsTo(User);
User.hasMany(Review);
