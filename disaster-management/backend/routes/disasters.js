const express = require("express");
const router = express.Router();
const Disaster = require("../models/Disaster");

// Get all disasters
router.get("/", async (req, res) => {
  try {
    const disasters = await Disaster.find();
    res.json(disasters);
  } catch (err) {
    console.error("GET error:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

// Add a new disaster
router.post("/", async (req, res) => {
  try {
    const { name, location, description, severity } = req.body;

    // Validate required fields
    if (!name || !location || !description || !severity) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newDisaster = new Disaster({
      name,
      location,
      description,
      severity
    });

    const savedDisaster = await newDisaster.save();
    res.status(201).json(savedDisaster);
  } catch (err) {
    console.error("POST error:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
