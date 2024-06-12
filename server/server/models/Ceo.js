const mongoose = require("mongoose");

const ceoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add your name"]
  },
  role: {
    type: String,
    required: [true, "Select a role"]
  },
  bio: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  twitter: {
    type: String,
  },
});

module.exports = mongoose.model("CEO", ceoSchema);
