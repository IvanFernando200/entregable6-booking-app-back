const {
  getAll,
  create,
  remove,
  update,
} = require("../controllers/booking.controllers");
const verifyJWT = require("../utils/verifyJWT");
const express = require("express");

const bookingRouter = express.Router();

bookingRouter.route("/bookings").get(verifyJWT, getAll).post(verifyJWT, create);

bookingRouter
  .route("/bookings/:id")
  .delete(verifyJWT, remove)
  .put(verifyJWT, update);

module.exports = bookingRouter;
