const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for the company"],
  },
  website: {
    type: String,
    required: false,
  },
  descrition: {
    type: String,
    required: [true, "Please add company description"],
  },
  logo: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: [true, "Please set company location"],
  },
  CEO: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CEO",
  },
  contactInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ContactInfo",
  },
  history: { type: String, required: false },
  mission: { type: String, required: false },
  history: { type: [String], required: false },
});

module.exports = mongoose.model("Company", companySchema);
