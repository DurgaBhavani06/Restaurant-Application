const express = require("express");
const router = express.Router();
const Reservation = require("../models/Reservation");

// POST /api/reservations
router.post("/", async (req, res) => {
  try {
    const { date, time, partySize, user } = req.body;

    // Basic validation
    if (!date || !time || !partySize) {
      return res.status(400).json({ error: "All fields are required." });
    }

    if (typeof partySize !== "number" || partySize < 1 || partySize > 20) {
      return res.status(400).json({ error: "Party size must be between 1 and 20." });
    }

    // Optional: prevent past date reservations
    const today = new Date().toISOString().split("T")[0];
    if (date < today) {
      return res.status(400).json({ error: "Reservation date cannot be in the past." });
    }

    // Save to DB
    const newReservation = new Reservation({ date, time, partySize, user });
    await newReservation.save();

    res.status(201).json({ message: "Reservation successful", reservation: newReservation });

  } catch (err) {
    console.error("Reservation error:", err.message);
    res.status(500).json({ error: "Failed to create reservation", details: err.message });
  }
});

module.exports = router;
