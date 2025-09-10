const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  partySize: { type: Number, required: true },
  user: { type: String }, // optional: can link to a user ID or username
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Reservation", reservationSchema);
