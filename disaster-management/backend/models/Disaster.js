const mongoose = require("mongoose");

const disasterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  severity: { type: String, required: true }
});

module.exports = mongoose.model("Disaster", disasterSchema);
