const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    name: {
    type: String,
    required: [true, "Please add company name"],
  },
   website: {
    type: String,
  },
  description: {
    type: String,
  },
  logo: {
    type: String,
  },
  location: {
    type: String,
  },
  CEO: {
    name: {
      type: String,
      required: [true, "Please add CEO name"],
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
  },
  ContactInfo: {
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    twitter: {
      type: String,
    },
  },
  history: {
    type: String,
  },
  mission: {
    type: String,
  },
  values: {
    type: [String],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model("Company", companySchema);
