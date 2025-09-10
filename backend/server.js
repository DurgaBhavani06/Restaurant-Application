require("dotenv").config(); // Load variables from .env

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// ✅ Check if MONGO_URI exists
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI not defined in .env file");
  process.exit(1);
}

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// ✅ Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api", authRoutes); // For /api/register and /api/login

// ✅ Reservation Schema & Model
const reservationSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  partySize: { type: Number, required: true, min: 1 },
  user: { type: String }, // optional
});
const Reservation = mongoose.model("Reservation", reservationSchema);

// ✅ Create Reservation
app.post("/api/reservations", async (req, res) => {
  const { date, time, partySize, user } = req.body;

  if (!date || !time || !partySize) {
    return res.status(400).json({ message: "Invalid reservation data" });
  }

  try {
    const count = await Reservation.countDocuments({ date, time });

    if (count >= 10) {
      return res.status(400).json({ message: "Sorry, no tables available for this time." });
    }

    const reservation = new Reservation({ date, time, partySize, user });
    await reservation.save();

    res.json({ message: "✅ Reservation confirmed!" });
  } catch (err) {
    console.error("❌ Error saving reservation:", err);
    res.status(500).json({ message: "Failed to save reservation" });
  }
});

// ✅ View All Reservations (optional for admin/testing)
app.get("/api/reservations", async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ message: "Failed to get reservations" });
  }
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
