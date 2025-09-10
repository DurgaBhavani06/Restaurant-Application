const Reservation = require("../models/Reservation");

exports.makeReservation = async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).json({ message: "Reservation confirmed!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
